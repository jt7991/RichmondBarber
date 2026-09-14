# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary audience is prospective clients in Richmond, Virginia, and nearby areas who are choosing a barbershop and planning their first visit. Returning clients also use the site to find services and book appointments, but attracting new clients is the priority confirmed by the owner.

## Product Purpose

Help new clients discover Richmond Barbershop, assess its work and customer experiences, choose an appropriate service, and book through Square. Success means attracting new clients and converting their interest into appointments. No numeric conversion target or measured performance baseline has been established.

## Positioning

Richmond Barbershop is a privately owned neighborhood shop in Carytown offering men's haircuts, scissor cuts, beard trims, and hot-towel straight-razor shaves. Existing business copy emphasizes old-school barbering traditions and professional care. Do not turn that positioning into unsupported superiority claims or guarantees.

## Operating Context

Visitors can explore haircut and beard photos, read customer review excerpts, compare services and prices, learn about Joe and Sam, read haircut guides, and check practical visit details. Booking takes place on the existing external Square service, rather than inside this website. Phone and map links support planning a visit.

The site is an existing Astro project with Svelte components and Tailwind styling. `npm run dev` starts local development; `npm run build` creates the static site. Production hosting details are not established by this record.

## Capabilities and Constraints

- Preserve the shop name, verified services and policies, real photos and reviews, and Square booking integration, as confirmed by the owner.
- Use `src/data/business.ts` and the existing service data modules for business details and links. Verify changing prices, hours, policies, and availability against business records or the linked booking and business profiles; this document is not a second service menu.
- Preserve the purpose and functioning of existing service pages, gallery, guides, contact information, and booking paths when refining the site.
- Use authentic customer feedback with accurate attribution. Clearly identify excerpts and retain source links. The current testimonial update puts a verified review mentioning Sam first, as explicitly requested.
- The owner specified no additional lasting business rules or product-specific accessibility requirements during init. Do not invent additional commitments.

## Brand Commitments

Retain the Richmond Barbershop name and its authentic business assets. Existing guide instructions in `docs/guides.md` specify a first-person business voice focused on quality, confidence, and professional care; preserve those editorial requirements for guide work. Init establishes no new aesthetic direction.

## Evidence on Hand

- `src/data/business.ts`: business identity, location, contact information, services, policies, barbers, and external booking/profile links.
- `src/data/gallery.ts` and `src/assets/`: existing haircut, beard, shop, and logo assets used by the site.
- `src/components/TestimonialSlider.svelte`: verified Google review excerpts with author labels, dates, and source links, refreshed on 2026-09-14.
- `src/pages/about.astro`: shop information, barber information, and a linked public customer recommendation.
- `src/content/guides/`, `docs/guides.md`, and `docs/article-template.md`: published educational content and its editorial rules.

Do not fabricate reviews, credentials, results, press coverage, or business metrics. Verify provenance before presenting any new image as actual shop work.

## Product Principles

1. Prioritize helping prospective local clients decide to book their first visit.
2. Build confidence through real work, attributable customer feedback, and accurate service information.
3. Make service selection, visit planning, and the transition to Square booking straightforward.
4. Keep business facts consistent across the site and confirm changes at their source.
