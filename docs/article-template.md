# Richmond Barbershop guide template

All guides use src/layouts/GuideLayout.astro through src/pages/guides/[...id].astro.
Write Markdown files in src/content/guides/<slug>.md using this frontmatter:

```yaml
---
title: "Full reader-friendly article title"
seoTitle: "Concise unique search title"
description: "Unique natural description, ideally 140–160 characters."
date: 2026-09-14
category: "Planning your visit"
summary: "A useful direct answer to the article's main question in 2–3 sentences. Rendered above the body; do not repeat verbatim."
service: haircut
related:
  - other-guide-slug
  - another-guide-slug
sources:
  - title: "Descriptive primary source title"
    url: "https://example.com/actual-researched-page"
---
```

Categories: Planning your visit, Haircuts & styling, Beards & shaving.
Services: haircut, beard, shave, scissor.

Body: 500–850 useful words where warranted, with 4–6 descriptive H2 sections, an actionable table or checklist when it helps, and a final H2 "Frequently asked questions" with 2–3 H3 questions and answers. No H1 (layout supplies it). Cite sources inline close to sourced claims with Markdown links. Source list is rendered by layout. Use original synthesis, limited derivation from each source, and no long quotations. Research each topic with web tools using primary sources such as actual barber service pages, professional product makers for their products, and AAD for hair/skin guidance. Do not simply fill length; content must resolve the topic.

Use confirmed business data from src/data/business.ts and prices in src/pages/index.astro. Do not invent testimonials, named authors, barber review, clinical claims, customer case studies, original photos, product tests, specific staff routines, guaranteed results, service duration beyond published haircut duration, or amenities. Adapt proposed titles that would imply nonexistent photo guides or firsthand tests. Our existing gallery is not evidence of a specific technique. Describe general advice as general advice, not something staff reported. Use neutral publisher voice. Medical topics remain cosmetic; cite authoritative guidance for skin/hair health claims.

Prices: haircut $40; scissor cut $60; beard trim $40; straight razor shave $50 as listed in project. Clearly identify these as shop menu prices, not Richmond averages, and advise checking booking menu for current pricing. No promotions or unverified market averages. Ages 8+. Walk-ins only when available. No onsite parking; published FAQ says street parking and garage across street; do not invent costs/hours/availability. Cancellations at least 8 hours in advance.

Link naturally to /mens-haircut-richmond-va or /beard-trim-richmond-va or /#services as relevant. Layout supplies booking CTA, related guides, breadcrumb, sources, publisher, date, and metadata. Each article must have distinct intent, no repeated neighborhood lists or keyword stuffing. Source research notes, if needed, go in docs/research, never as editorial TODOs in public articles.
