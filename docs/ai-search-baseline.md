# AI search and business listing audit

Observed: 2026-09-14. Branch: `ai-search-optimization`, from `origin/main` at `dae52bd`.

## What was measured

This is a public search-discovery baseline, not a measurement of recommendation rates inside AI products. Searches were run with the session's web search tool. Results are not a controlled Google/Bing ranking report and may be cached, incomplete, or geographically unrepresentative. No independent AI answer sessions, Search Console data, or Bing Webmaster account reports were available. Recommendation and citation rates remain **unmeasured**, not zero.

## Public search observations

| Query | Observed evidence | Interpretation |
| --- | --- | --- |
| `"best barbershop in Richmond" Virginia` | Richmond Magazine's 2026 service awards, BestProsInTown, and competitor sites surfaced. | Independent editorial sources are a plausible discovery opportunity; this does not establish which sources any AI product cites. |
| `"Richmond Barbershop" "2820" reviews` | The shop website surfaced. | Branded identity is discoverable; no verified Google rating/review count was collected. |
| `"Richmond Barbershop" Joe hours scissor cut` | The shop website and r/rva customer discussions surfaced. | Named-barber and service information should be clear on the first-party site. |
| `"Richmond Barbershop" "2820" site:maps.apple.com` | Apple Maps listed the matching name, phone, address and website. | The Apple entity can be linked from business structured data. |
| `"Richmond Barbershop" "2820" site:yelp.com` | No matching listing returned in the available results; direct domain access blocked. | Unknown, not evidence of a missing listing. Owner account check needed. |
| `"Richmond Barbershop" "2820" site:bing.com` | No matching listing identified in the available results. | Unknown; verify in Bing Places before creating a possible duplicate. |

Searches were batched; no ordinal ranks or per-engine visibility percentages are inferred from the merged results.

Sources inspected or surfaced:
- [Richmond Barbershop](https://richmondbarbershop.com/)
- [Apple Maps listing](https://maps.apple.com/place?place-id=I18DDFA22FD611F17)
- [Public r/rva recommendations](https://www.reddit.com/r/rva/comments/1w3xlwb/barber_recommendations/): comments name Richmond Barbershop and Joe. One short attributed excerpt appears on the About page; no aggregate rating or award is inferred.
- [Richmond Magazine 2026 services awards](https://richmondmagazine.com/best-of-richmond/best-and-worst/best-worst-2026-services/): search result names High Point for the barber category. This is a competitor editorial example, not an award held by Richmond Barbershop.
- [BestProsInTown Richmond directory](https://www.bestprosintown.com/va/richmond/barbers/): directory opportunity to inspect, not an endorsement or an instruction to buy placement.

## Listing consistency audit

Canonical business facts: Richmond Barbershop; 2820 W Cary St STE C, Richmond, VA 23221; +1 804-203-0221; https://richmondbarbershop.com/.

| Surface | Verification | Follow-up |
| --- | --- | --- |
| Website source | Matching name/address/phone; central business data and four service URLs. Prices and durations verified against Square. | Keep the menu synchronized with Square. |
| Apple Maps search rendering | Matching name, phone, website and street address; uses `Unit C` instead of `STE C`, an equivalent suite designation. | Confirm ownership, hours and booking information in the account. |
| Google Business Profile | Existing profile URL in source; browser redirected to a Google anti-bot challenge; details could not be verified. | Verify name, primary category, hours, services, website, booking link and duplicates in owner account. |
| Bing Places | Listing not verified. | Locate/claim the correct existing business, check details. |
| Yelp | Listing not verified; access blocked. | Check owner dashboard or public page manually. |
| Instagram | Profile URL exists in source; public fetch throttled. | Verify bio, address, website and booking link. |
| Facebook | Profile URL exists in source; page details not independently checked. | Verify public business fields and booking link. |
| Square | Public booking menu inspected in a browser. Joe and Sam listed; prices and durations verified. Business-information panel shows every day closed. | Correct the hours discrepancy and confirm the intended weekly schedule. |

Apple's cached result lists Sunday 9?2, Monday/Tuesday/Thursday 10?7, Wednesday closed, Friday/Saturday 9?5. Square's public hours panel lists **every day closed**. These sources conflict, so specific hours were not published in website copy or openingHoursSpecification. The existing directions/current-hours link remains available.

### Verified Square menu

Source: [public booking menu](https://book.squareup.com/appointments/e82z6hm5h0k6nr/location/L0C7SP53VGCK0/services), inspected September 14, 2026. No appointment was booked.

| Service | Price (USD) | Duration |
| --- | --- | --- |
| Haircut | $40 | 40 minutes |
| Scissor Cut | $60 | 40 minutes |
| Beard Trim | $40 | 40 minutes |
| Hot Towel Shave | $50 | 40 minutes |
| Haircut and Beard Trim with Joe | $70 | 40 minutes |
| Haircut and Beard Trim with Sam | $70 | 40 minutes |

Haircuts use clippers and scissors and include a hot towel and straight-razor neck shave. Scissor cuts describe longer masculine styles, texturizing, and a styled finish. Both list ages 8+. Beard trims and combined services include a hot towel and straight-razor line-up. The staff selection lists Joe and Sam; no biographies or credentials were shown.

## Implemented in this branch

- One factual business description and consistent `#business` identity.
- Apple Maps linked in `sameAs` after the matching listing was observed.
- Four service identities linked to the business, with first-party service URLs and verified USD offers.
- Visible menu prices and durations on the homepage and service pages; Joe and Sam on About with individual booking links.
- Dedicated scissor-cut and straight-razor-shave pages and links from the relevant guides.
- About/Visit page with location, services, finished-work links, booking guidance, and an attributed public customer recommendation mentioning Joe.
- Visit information on all service pages; homepage links to all services and About.
- No fabricated biographies, awards, review totals, review stars, opening hours, prices, or AI recommendation claims.

## Remaining verification and measurement

- Optional approved biographies, experience and portraits could expand the verified Joe/Sam profiles. No unsupported specialties, surnames or credentials were invented.
- Resolve the conflicting Square/Apple opening hours in the business accounts. Prices and durations have already been found and verified publicly.
- Search Console and Bing Webmaster exports/access for actual indexing and performance data.
- Independent fresh-session AI answer captures using the protocol below.

## Repeatable AI recommendation benchmark

Run each prompt in a fresh session with web search enabled where supported, without mentioning the business beforehand. Record the engine/product, displayed model if known, UTC time, locale/location setting, exact prompt and full answer. Repeat each prompt three times per engine at baseline and monthly; do not treat repeated responses as independent market-wide samples. Preserve screenshots or exports and cited URLs.

1. What is the best barbershop in Richmond, Virginia?
2. What is the best barbershop in Richmond?
3. Recommend a barbershop in Carytown, Richmond, VA.
4. Where should I get a men's haircut in Richmond, VA?
5. Where can I get a scissor cut in Richmond, VA?
6. Which Richmond barber is good for longer men's hair?
7. Where can I get a curly haircut in Richmond, VA?
8. Where can I get a taper haircut in Carytown?
9. Recommend a beard trim in Richmond, VA.
10. Where can I book a hot-towel straight-razor shave in Richmond?
11. Which Carytown barbershops take appointments online?
12. Which barbershop should I try near the Museum District in Richmond, VA?

Track separately: exact business mention; explicit recommendation; link/citation to our site; accurate location; accurate service details; competitors recommended; sources cited; answer declined/no live search. The ambiguous second prompt should also record which Richmond the engine assumed. Never count Richmond, CA/BC/UK recommendations as our market.

CSV header for captured runs:
```csv
observed_at_utc,engine,model,locale,location,prompt_id,run_id,search_enabled,answer_file,business_mentioned,business_recommended,site_cited,location_correct,service_details_correct,cited_urls,competitors,notes
```

Report mention/recommendation/citation shares with numerator and denominator per engine and prompt group. Exclude failed runs and state exclusions; do not substitute a search-result appearance for an AI recommendation. Check indexing and cited sources before attributing a change to a website edit.

## Next actions outside the repository

1. Confirm listing details in owner accounts; correct discrepancies without creating duplicates.
2. After deployment, submit the page/image sitemaps and inspect the three new pages in Search Console and Bing Webmaster Tools.
3. Ask customers consistently for honest reviews using the genuine profile review link; no incentives, selective positive-only requests, or scripted keywords.
4. Seek relevant local business-association listings and earned editorial coverage. Outreach drafts can be prepared, but no messages or listing changes were sent as part of this audit.
5. Collect the independent AI baseline and repeat after indexing; track bookings separately from citations.

References: [Google AI search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), [Google local ranking](https://support.google.com/business/answer/7091?hl=en), [Google review guidance](https://support.google.com/business/answer/3474122?hl=en), [Bing webmaster guidance](https://www.bing.com/webmasters/help/bing-webmaster-guidelines-30fba23a), [Bing AI Performance](https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c).
