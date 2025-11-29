export async function GET() {
  const services = [
    {
      "@type": "Service",
      name: "Haircut",
      description: "Precision cuts tailored to your style.",
      offers: {
        "@type": "Offer",
        price: "40",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      provider: {
        "@type": "LocalBusiness",
        name: "Richmond Barbershop",
        address: {
          "@type": "PostalAddress",
          streetAddress: "2820 W Cary St Suite C",
          addressLocality: "Richmond",
          addressRegion: "VA",
          postalCode: "23221",
          addressCountry: "US",
        },
      },
    },
    {
      "@type": "Service",
      name: "Scissor Cut",
      description: "Precision cuts tailored to your style.",
      offers: {
        "@type": "Offer",
        price: "50",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      provider: {
        "@type": "LocalBusiness",
        name: "Richmond Barbershop",
        address: {
          "@type": "PostalAddress",
          streetAddress: "2820 W Cary St Suite C",
          addressLocality: "Richmond",
          addressRegion: "VA",
          postalCode: "23221",
          addressCountry: "US",
        },
      },
    },
    {
      "@type": "Service",
      name: "Beard Trim",
      description: "Expert shaping and grooming for a sharp look.",
      offers: {
        "@type": "Offer",
        price: "20",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      provider: {
        "@type": "LocalBusiness",
        name: "Richmond Barbershop",
        address: {
          "@type": "PostalAddress",
          streetAddress: "2820 W Cary St Suite C",
          addressLocality: "Richmond",
          addressRegion: "VA",
          postalCode: "23221",
          addressCountry: "US",
        },
      },
    },
    {
      "@type": "Service",
      name: "Straight Razor Shave",
      description: "Traditional hot towel shave for ultimate comfort.",
      offers: {
        "@type": "Offer",
        price: "30",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      provider: {
        "@type": "LocalBusiness",
        name: "Richmond Barbershop",
        address: {
          "@type": "PostalAddress",
          streetAddress: "2820 W Cary St Suite C",
          addressLocality: "Richmond",
          addressRegion: "VA",
          postalCode: "23221",
          addressCountry: "US",
        },
      },
    },
  ];

  return new Response(
    JSON.stringify(
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Richmond Barbershop Services",
        description:
          "Professional barber services offered at Richmond Barbershop",
        numberOfItems: services.length,
        itemListElement: services,
      },
      null,
      2,
    ),
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    },
  );
}

