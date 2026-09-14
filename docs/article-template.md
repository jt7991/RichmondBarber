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

Write in Richmond Barbershop's first-person voice: we, our, and us. These are our guides for our clients, not third-party reviews of our website. Be warm, positive, and confident about our premium haircut quality, attention to detail, and the feeling of looking your best. Keep practical answers specific to each topic. Avoid detached phrases such as "the shop lists," "the site does not publish," or "the published policy says." Do not promote or cite competing barbers.

Use confirmed business data from src/data/business.ts and prices in src/pages/index.astro. Do not invent testimonials, named authors, barber review, clinical claims, customer case studies, original photos, product tests, specific staff routines, guaranteed results, service duration beyond published haircut duration, or amenities. Do not turn our quality positioning into an unverified award or objective citywide ranking. Medical topics remain cosmetic; cite authoritative guidance for skin/hair health claims.

Emphasize the quality and confidence of a professional haircut. Do not calculate annual spending, frame appointments as a financial burden, or suggest shopping for the cheapest option. Low maintenance means straightforward daily washing/styling supported by professional appointments. Do not recommend home clipper cuts, beard trimming, or DIY reshaping; invite clients back to us for cutting and outline maintenance.

Owner-confirmed product range: Prospectors Diamond pomade, Tip Top Clay Paste, Prospectors Coal Mine (our best seller), Suavecito Texturizing Powder, and Prospectors Styling Cream (https://prospectorspomade.com/products/prospectors-styling-cream). Use manufacturer sources for specific hold, finish, and application claims. Explain Diamond's verified strengths as reasons we recommend it; do not invent competitive tests or claim measured superiority over most products.

Prices: haircut $40; scissor cut $60; beard trim $40; straight razor shave $50 as listed in project. Clearly identify these as shop menu prices, not Richmond averages, and advise checking booking menu for current pricing. No promotions or unverified market averages. Ages 8+. Walk-ins only when available. No onsite parking; published FAQ says street parking and garage across street; do not invent costs/hours/availability. Cancellations at least 8 hours in advance.

Link naturally to /mens-haircut-richmond-va or /beard-trim-richmond-va or /#services as relevant. Layout supplies booking CTA, related guides, breadcrumb, sources, publisher, date, and metadata. Each article must have distinct intent, no repeated neighborhood lists or keyword stuffing. Source research notes, if needed, go in docs/research, never as editorial TODOs in public articles.
