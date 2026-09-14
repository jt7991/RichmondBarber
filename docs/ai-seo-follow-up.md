# AI SEO follow-up — September 14, 2026

Scope: audit the current site and implement changes using the existing verified business data. The earlier [AI search baseline](ai-search-baseline.md) supplies the target queries and business context. This follow-up does not establish AI recommendation or citation rates.

## Findings and changes

| Finding | Resolution |
| --- | --- |
| The homepage introduction started at zero opacity and required an IntersectionObserver callback to become visible. | Removed the dependency so the H1 and business description are visible without JavaScript. |
| Homepage FAQ copy, FAQ JSON-LD, and FAQ endpoints maintained different answers. | Generate the homepage questions and structured data from the existing shared FAQ data. Added a pricing answer generated from the service menu and a working Square booking link. |
| Existing Markdown service endpoints omitted verified prices and durations and are excluded by robots.txt. | Added public `/pricing.md`, generated from the same data as the visible service pages. Existing Markdown endpoints reuse that menu. The public menu includes USD units, durations, the existing verification date, and the Square source link. |
| No root text guide to the site. | Added build-generated `/llms.txt` linking the business, booking, all four services, pricing, and all 20 guides. Linked it from page metadata; linked the text menu from the homepage and sitemap. |

The text files are supplementary representations of existing information, not special ranking requirements. [Google's AI features guidance](https://developers.google.com/search/docs/appearance/ai-features) says to keep important information in text, make structured data match visible content, and maintain ordinary SEO fundamentals; no special AI files are required.

## Crawl policy and deployment

Direct public HTTP checks during this task returned:

- `/robots.txt`: 200, `text/plain`; permits public pages and excludes `/api/` and `/openapi.yaml`.
- `/sitemap-index.xml`: 200, `application/xml`.
- `/llms.txt` and `/pricing.md`: 404 before deployment of these changes.

The existing public crawl policy already permits the two new root files. No crawler-policy changes were needed. Bot names sent as user-agent strings would not prove access for authenticated crawler traffic or establish indexing.

The downloaded skill conflates some crawler controls. For Google AI Overviews and AI Mode, Googlebot controls Search crawling. Google-Extended governs separate Gemini training and grounding uses and does not control Search inclusion. See [Google's crawler documentation](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers#google-extended).

The new routes produce physical static files during the Astro build. `_headers` provides content types and cache settings on hosts that support that file. The repository's Apache Docker image does not consume `_headers`; verify the deployed MIME types and cache behavior on the actual host. No deployment was performed.

## Verification

- `npm run build`: passed, including both new static files.
- `node scripts/check-guides.mjs`: passed for all 20 guides.
- Generated-output checks: all seven visible FAQ answers match the homepage JSON-LD and FAQ JSON endpoint; all generated JSON-LD parses; introduction no longer has the hidden initial state; new text-file internal links resolve; public crawler rules allow the files; pricing appears in the sitemap and Markdown endpoints.
- `git diff --check`: passed.

## Remaining measurement

Independent AI answer sessions and owner analytics were not available in this task. Recommendation and citation rates remain unmeasured. Use the 12-prompt, three-runs-per-engine protocol in the earlier baseline after deployment and indexing. Preserve the full answers, cited URLs, engine, date, and sample size. Search-result appearances alone do not measure AI recommendations.

The earlier baseline also records conflicting business hours between Square and Apple Maps. Confirm the actual schedule in the business accounts before publishing specific opening hours. Keep `src/data/business.ts` synchronized with Square and rebuild whenever the menu changes; this generates the text menu and pricing FAQ together.
