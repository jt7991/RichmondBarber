import {
  ADDRESS,
  BUSINESS_NAME,
  SERVICES,
  WEBSITE_URL,
} from "../../data/business";

export async function GET() {
  const services = SERVICES.map((service) => ({
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Barbershop",
      name: BUSINESS_NAME,
      url: WEBSITE_URL,
      address: {
        "@type": "PostalAddress",
        ...ADDRESS,
      },
    },
  }));

  return new Response(
    JSON.stringify(
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: `${BUSINESS_NAME} Services`,
        description: "Barber services offered by Richmond Barbershop",
        numberOfItems: services.length,
        itemListElement: services,
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
