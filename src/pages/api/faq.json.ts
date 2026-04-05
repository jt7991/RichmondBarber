import { ADDRESS, BUSINESS_NAME, FAQS, WEBSITE_URL } from "../../data/business";

export async function GET() {
  const mainEntity = FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  }));

  return new Response(
    JSON.stringify(
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        name: `${BUSINESS_NAME} FAQ`,
        description:
          "Frequently asked questions about Richmond Barbershop services, appointments, and policies",
        mainEntity,
        publisher: {
          "@type": "Barbershop",
          name: BUSINESS_NAME,
          url: WEBSITE_URL,
          address: {
            "@type": "PostalAddress",
            ...ADDRESS,
          },
        },
      },
      null,
      2,
    ),
    {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=300, must-revalidate",
        "X-Robots-Tag": "noindex, nofollow",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    },
  );
}
