export async function GET() {
  const faqs = [
    {
      "@type": "Question",
      "name": "Do I need to make an appointment at Richmond Barbershop?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Appointments are highly recommended and you can make an appointment ahead of time by scheduling here. Walk-ins are welcome when available!"
      }
    },
    {
      "@type": "Question",
      "name": "Do you have onsite parking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We do not have onsite parking, however there is street parking, as well as a 2 story parking garage directly across the street!"
      }
    },
    {
      "@type": "Question",
      "name": "What ages are welcome?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer haircuts for ages 8+"
      }
    },
    {
      "@type": "Question",
      "name": "What is your cancellation policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cancelations need to be made at least 8 hours before your appointment online or by phone. Otherwise you will be charged in full for your missed appointment."
      }
    },
    {
      "@type": "Question",
      "name": "What areas of Richmond, VA do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We proudly serve the following nearby neighborhoods: Carytown, The Fan, Museum District, Scott's Addition, Church Hill, Rocketts Landing, Shockoe Bottom, Lakeside, Forest Hill, Henrico, The West End, Bon Air, Glen Allen, Mechanicsville, Midlothian, Chesterfield, and other surrounding areas!"
      }
    }
  ];

  return new Response(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs,
    "name": "Richmond Barbershop FAQ",
    "description": "Frequently asked questions about Richmond Barbershop services, appointments, and policies",
    "publisher": {
      "@type": "LocalBusiness",
      "name": "Richmond Barbershop",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2820 W Cary St Suite C",
        "addressLocality": "Richmond",
        "addressRegion": "VA",
        "postalCode": "23221",
        "addressCountry": "US"
      }
    }
  }, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}