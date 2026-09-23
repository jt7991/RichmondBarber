import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const root = resolve('dist');
const origin = 'https://richmondbarbershop.com';
function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}
function checkUrl(value, source, base = origin) {
  const url = new URL(value, base);
  if (!['richmondbarbershop.com', 'www.richmondbarbershop.com'].includes(url.hostname)) return;
  assert.equal(url.origin, origin, `${source}: noncanonical origin ${value}`);
  const directory = join(root, decodeURIComponent(url.pathname));
  if (existsSync(join(directory, 'index.html'))) {
    assert.ok(url.pathname.endsWith('/'), `${source}: missing trailing slash ${value}`);
  }
}
function checkSchema(value, source) {
  if (typeof value === 'string' && /^https?:\/\//.test(value)) checkUrl(value, source);
  else if (Array.isArray(value)) value.forEach(item => checkSchema(item, source));
  else if (value && typeof value === 'object') Object.values(value).forEach(item => checkSchema(item, source));
}
const files = walk(root);
let pages = 0;
for (const file of files.filter(file => file.endsWith('index.html'))) {
  const html = readFileSync(file, 'utf8');
  const path = '/' + relative(root, file).replaceAll('\\', '/').replace(/index\.html$/, '');
  const expected = origin + path;
  const canonicals = [...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/g)];
  assert.equal(canonicals.length, 1, `${path}: one canonical`);
  assert.equal(canonicals[0][1], expected, `${path}: self-referencing canonical`);
  assert.ok(html.includes(`property="og:url" content="${expected}"`), `${path}: matching social URL`);
  for (const [, href] of html.matchAll(/\bhref="([^"]+)"/g)) checkUrl(href, path, expected);
  for (const [, json] of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    checkSchema(JSON.parse(json), path);
  }
  pages++;
}
for (const file of files.filter(file => /sitemap.*\.xml$/.test(file))) {
  for (const [, url] of readFileSync(file, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)) checkUrl(url, file);
}
for (const file of ['llms.txt', 'pricing.md']) {
  for (const [, url] of readFileSync(join(root, file), 'utf8').matchAll(/\]\((https?:\/\/[^)]+)\)/g)) checkUrl(url, file);
}
console.log(`Verified ${pages} pages: canonical URLs, social URLs, internal links, structured data, sitemaps, and text menus.`);
