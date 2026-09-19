import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve('dist');
const read = path => readFileSync(resolve(root, path), 'utf8');
const slugs = readdirSync(resolve(root, 'guides'), { withFileTypes: true }).filter(entry => entry.isDirectory()).map(entry => entry.name);
assert.equal(slugs.length, 21, 'Expected 21 generated guides');
const titles = new Set();
const descriptions = new Set();
const sitemap = readdirSync(root).filter(name => /^sitemap.*\.xml$/.test(name)).map(read).join('');
const hub = read('guides/index.html');
for (const slug of slugs) {
  const html = read(`guides/${slug}/index.html`);
  const canonical = `https://richmondbarbershop.com/guides/${slug}/`;
  assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1, `${slug}: one H1`);
  assert.ok(html.includes(`rel="canonical" href="${canonical}"`), `${slug}: canonical`);
  assert.ok(html.includes('property="og:type" content="article"'), `${slug}: article social metadata`);
  assert.ok(!html.includes('noindex'), `${slug}: indexable`);
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  const description = html.match(/name="description" content="([^"]+)"/)?.[1];
  assert.ok(title && !titles.has(title), `${slug}: unique title`);
  assert.ok(description && !descriptions.has(description), `${slug}: unique description`);
  titles.add(title); descriptions.add(description);
  const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
  const graph = schemas.flatMap(schema => schema['@graph'] ?? [schema]);
  const article = graph.find(schema => schema['@type'] === 'BlogPosting');
  assert.ok(article && article.url === canonical && article.author.name && article.datePublished && article.citation.length, `${slug}: article schema`);
  assert.ok(graph.some(schema => schema['@type'] === 'BreadcrumbList'), `${slug}: breadcrumbs`);
  assert.ok(sitemap.includes(canonical), `${slug}: sitemap`);
  assert.ok(hub.includes(`/guides/${slug}/`), `${slug}: linked from hub`);
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]));
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (href.startsWith('#')) assert.ok(ids.has(href.slice(1)), `${slug}: anchor ${href}`);
    if (href.startsWith('/guides/')) {
      const pathname = href.split('#')[0].replace(/\/$/, '');
      assert.ok(existsSync(resolve(root, `.${pathname}/index.html`)), `${slug}: internal link ${href}`);
    }
  }
}
for (const page of ['index.html', 'mens-haircut-richmond-va/index.html', 'beard-trim-richmond-va/index.html']) {
  const html = read(page);
  const footer = html.match(/<footer\b[^>]*>([\s\S]*?)<\/footer>/)?.[1] ?? '';
  assert.ok(footer.includes('href="/guides/"'), `${page}: guide discovery link in footer`);
  assert.ok(!html.replace(/<footer\b[^>]*>[\s\S]*?<\/footer>/, '').includes('href="/guides'), `${page}: guide links stay in footer`);
}
console.log('Verified 21 guides: unique metadata, structured data, canonicals, sitemap inclusion, internal links, headings, and footer discovery links.');
