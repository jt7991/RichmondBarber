# Haircut & beard guides

Twenty researched Markdown articles live in `src/content/guides/`. The shared editorial template is `docs/article-template.md`; Astro validates frontmatter with `src/content.config.ts` and renders every article through `src/layouts/GuideLayout.astro`.

## Visibility

The homepage targets Richmond barber, barber in Richmond VA, and Carytown barber. The men's haircut page supports men's haircut Richmond VA and fade haircut intent; the beard page supports beard trim Richmond VA. Guides answer distinct supporting questions and link readers back to these pages and booking. These are relevance targets, not claims of measured search volume. Preserve natural phrasing and distinct intent instead of making all articles compete for the same broad query.

A discreet Haircut & Beard Guides link in the shared footer connects the main site to `/guides/`. The homepage body and main navigation do not promote individual articles. The collection is public and indexable, with related article links and inclusion in the generated sitemap. Indexing, ranking, and AI citations cannot be guaranteed.

## Editing and publishing

Follow `article-template.md` to add or edit a guide. Write in our first-person business voice with a positive focus on quality, confidence, and professional care. Avoid competitor promotions, annual spending comparisons, and DIY cutting advice. Keep slugs stable, verify related slugs exist, and use primary sources with inline attribution. Check prices, product specifications, booking policies, and parking information against business records when updating. Do not claim named expert review or customer results unless supplied and verified. Current articles use the business as publisher/organizational author, without fabricated personal bylines.

The frontmatter date is the initial prepared publication date. Set it to the actual publication date if release is delayed. When an article is substantially updated, extend the schema/template with a separate modified date rather than automatically marking all content fresh on each build.

The layout supplies unique title/description, canonical URL, article social metadata, BlogPosting and BreadcrumbList JSON-LD, readable article navigation, sources, related guides, and booking/service links. Visible FAQs are part of the article; FAQ rich results are not promised. The shop photo is a social preview, not represented as a haircut example. No additional AI-specific files or keyword meta tags are needed for these pages.

Run `npm run build` and `node scripts/check-guides.mjs`. Preview with `npm run dev`. After deployment, submit/check the sitemap and inspect representative URLs in Google Search Console and Bing Webmaster Tools; those account-level actions are outside this source change.

## SEO references

- [Google: links and internal discovery](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
- [Google: Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article)
- [Google: optimizing for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
