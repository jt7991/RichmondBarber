import { getCollection } from "astro:content";
import {
  ADDRESS_SINGLE_LINE,
  BOOKING_URL,
  BUSINESS_DESCRIPTION,
  BUSINESS_HOURS_NOTE,
  BUSINESS_NAME,
  MAPS_URL,
  PHONE_DISPLAY,
  SERVICES,
  WEBSITE_URL,
} from "../data/business";

export async function GET() {
  const guides = (await getCollection("guides")).sort((a, b) => a.id.localeCompare(b.id));
  const markdown = `# ${BUSINESS_NAME}

> ${BUSINESS_DESCRIPTION}

Address: ${ADDRESS_SINGLE_LINE}.
Phone: ${PHONE_DISPLAY}.
${BUSINESS_HOURS_NOTE}

## Visit and book

- [Home](${WEBSITE_URL}/): Services, finished-work gallery, and frequently asked questions.
- [About and visit](${WEBSITE_URL}/about/): Joe and Sam, location, and visit information.
- [Book an appointment](${BOOKING_URL}): Current prices and availability on Square.
- [Directions and current hours](${MAPS_URL})
- [Services and prices in Markdown](${WEBSITE_URL}/pricing.md)

## Services

${SERVICES.map((service) => `- [${service.name}](${WEBSITE_URL}${service.path}): ${service.description}`).join("\n")}

## Haircut and beard guides

${guides.map((guide) => `- [${guide.data.title}](${WEBSITE_URL}/guides/${guide.id}/): ${guide.data.description}`).join("\n")}
`;
  return new Response(markdown, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
