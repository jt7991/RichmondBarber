import {
  ADDRESS_SINGLE_LINE,
  BOOKING_URL,
  BUSINESS_HOURS_NOTE,
  BUSINESS_NAME,
  PHONE_DISPLAY,
  SERVICES,
  WEBSITE_URL,
} from "../../data/business";

export async function GET() {
  const markdown = `# ${BUSINESS_NAME} Services

Professional barber services in Richmond, VA.

## Services Offered

${SERVICES
  .map(
    (service) => `### ${service.name}
- **Description**: ${service.description}
`,
  )
  .join("\n")}

## Business Information
- **Phone**: ${PHONE_DISPLAY}
- **Address**: ${ADDRESS_SINGLE_LINE}
- **Hours**: ${BUSINESS_HOURS_NOTE}

## Contact & Booking
Book appointments online at: ${BOOKING_URL}

For more information, visit: ${WEBSITE_URL}
`;

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/markdown",
      "Cache-Control": "public, max-age=300, must-revalidate",
      "X-Robots-Tag": "noindex, nofollow",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
