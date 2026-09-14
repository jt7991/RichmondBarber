import {
  ADDRESS_SINGLE_LINE,
  BOOKING_URL,
  BUSINESS_NAME,
  HAIRCUT_BEARD_COMBO,
  SERVICE_DETAILS_VERIFIED,
  SERVICES,
  WEBSITE_URL,
} from "./business";

// Generated from the same data as the visible service pages on every build.
export function serviceMenuMarkdown(headingLevel: 1 | 2 = 1) {
  const heading = "#".repeat(headingLevel);
  return `${heading} Services and prices at ${BUSINESS_NAME}

Location: ${ADDRESS_SINGLE_LINE}.
All prices are in USD, per appointment.
Menu last verified against Square: ${SERVICE_DETAILS_VERIFIED}.
Check [Square booking](${BOOKING_URL}) for current prices and availability.

${SERVICES.map((service) => `${heading}# ${service.name}

- Price: $${service.price} USD
- Duration: ${service.durationMinutes} minutes
- Includes: ${service.description}
- [Service details](${WEBSITE_URL}${service.path})
`).join("\n")}
${heading}# ${HAIRCUT_BEARD_COMBO.name}

- Price: $${HAIRCUT_BEARD_COMBO.price} USD
- Duration: ${HAIRCUT_BEARD_COMBO.durationMinutes} minutes
- Available with Joe or Sam; includes a hot towel and straight-razor line-up.
- [Meet your barbers](${WEBSITE_URL}/about/)
`;
}
