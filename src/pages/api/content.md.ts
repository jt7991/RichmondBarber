import {
  ADDRESS_SINGLE_LINE,
  BOOKING_URL,
  BUSINESS_HOURS_NOTE,
  BUSINESS_NAME,
  FAQS,
  PHONE_DISPLAY,
  SERVICE_AREAS,
  SERVICES,
  WEBSITE_URL,
} from "../../data/business";

export async function GET() {
  const markdown = `# ${BUSINESS_NAME}

Professional barber services in Richmond, Virginia.

## About Us

${BUSINESS_NAME} is located in Carytown and provides men's haircuts, beard trims, scissor cuts, and straight razor shave services.

## Services Offered

${SERVICES
  .map(
    (service) => `### ${service.name}
- **Description**: ${service.description}
`,
  )
  .join("\n")}

## Business Information

### Contact Details
- **Phone**: ${PHONE_DISPLAY}
- **Address**: ${ADDRESS_SINGLE_LINE}
- **Website**: ${WEBSITE_URL}
- **Booking**: ${BOOKING_URL}

### Business Hours
- ${BUSINESS_HOURS_NOTE}

### Service Areas
${SERVICE_AREAS.map((area) => `- ${area}`).join("\n")}

## Frequently Asked Questions

${FAQS
  .map(
    (faq, index) => `### ${index + 1}. ${faq.question}

${faq.answer}

`,
  )
  .join("")}
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
