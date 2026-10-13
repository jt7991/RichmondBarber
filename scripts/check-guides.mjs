import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve('dist');
const read = path => readFileSync(resolve(root, path), 'utf8');
const slugs = readdirSync(resolve(root, 'guides'), { withFileTypes: true }).filter(entry => entry.isDirectory()).map(entry => entry.name);
assert.equal(slugs.length, 20, 'Expected 20 generated guides');
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
const contextualGuides = {
  'index.html': [
    '/guides/taper-vs-fade/',
    '/guides/how-to-ask-for-a-haircut/',
    '/guides/choosing-beard-shape/',
    '/guides/walk-ins-vs-appointments-carytown/',
    '/guides/kids-haircuts-richmond-va/',
    '/guides/haircut-cost-richmond-va/',
  ],
  'mens-haircut-richmond-va/index.html': [
    '/guides/taper-vs-fade/',
    '/guides/low-mid-high-fade/',
    '/guides/haircut-frequency/',
    '/guides/how-to-ask-for-a-haircut/',
  ],
  'beard-trim-richmond-va/index.html': [
    '/guides/choosing-beard-shape/',
    '/guides/beard-maintenance/',
    '/guides/professional-beard-trim/',
  ],
  'scissor-cut-richmond-va/index.html': [
    '/guides/growing-out-short-hair/',
    '/guides/scissor-vs-clipper-cut/',
  ],
  'straight-razor-shave-richmond-va/index.html': [
    '/guides/hot-towel-straight-razor-shave/',
  ],
};
for (const [page, guides] of Object.entries(contextualGuides)) {
  const html = read(page);
  const footer = html.match(/<footer\b[^>]*>([\s\S]*?)<\/footer>/)?.[1] ?? '';
  const body = html.replace(/<footer\b[^>]*>[\s\S]*?<\/footer>/, '');
  assert.ok(footer.includes('href="/guides/"'), `${page}: guide discovery link in footer`);
  for (const href of guides) {
    assert.ok(body.includes(`href="${href}"`), `${page}: contextual guide link ${href}`);
    assert.ok(existsSync(resolve(root, `.${href}index.html`)), `${page}: guide target ${href}`);
  }
}
console.log('Verified 20 guides: unique metadata, structured data, canonicals, sitemap inclusion, internal links, headings, footer discovery, and contextual guide links.');
