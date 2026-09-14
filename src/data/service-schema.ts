import { BUSINESS_NAME, SERVICES, WEBSITE_URL } from "./business";

export function serviceSchema(path: string) {
  const service = SERVICES.find((item) => item.path === path);
  if (!service) throw new Error(`Unknown service page: ${path}`);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${WEBSITE_URL}${path}#service`,
    name: service.name,
    description: service.description,
    url: `${WEBSITE_URL}${path}`,
    serviceType: service.name,
    provider: { "@id": `${WEBSITE_URL}/#business`, name: BUSINESS_NAME },
    offers: { "@type": "Offer", price: service.price, priceCurrency: "USD", url: `${WEBSITE_URL}${path}` },
    areaServed: { "@type": "City", name: "Richmond", containedInPlace: { "@type": "State", name: "Virginia" } },
  };
}
