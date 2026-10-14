import {
  ADDRESS_SINGLE_LINE,
  BOOKING_URL,
  BUSINESS_HOURS_NOTE,
  BUSINESS_NAME,
  FAQS,
  PHONE_DISPLAY,
  WEBSITE_URL,
} from "../../data/business";

export async function GET() {
  const markdown = `# ${BUSINESS_NAME} FAQ

Frequently asked questions about ${BUSINESS_NAME} services, appointments, and policies.

## Frequently Asked Questions

${FAQS.map((faq, index) => `### ${index + 1}. ${faq.question}

${faq.answer}

`).join('')}

## Contact Information

- **Phone**: ${PHONE_DISPLAY}
- **Address**: ${ADDRESS_SINGLE_LINE}
- **Website**: ${WEBSITE_URL}
- **Booking**: ${BOOKING_URL}

## Business Hours

- ${BUSINESS_HOURS_NOTE}

For more information or to book an appointment, please visit our website or call us directly.
`;

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown',
      'Cache-Control': 'public, max-age=300, must-revalidate',
      'X-Robots-Tag': 'noindex, nofollow',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
