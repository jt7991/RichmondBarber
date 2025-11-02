export async function GET() {
  const faqs = [
    {
      question: "Do I need to make an appointment at Richmond Barbershop?",
      answer: "Appointments are highly recommended and you can make an appointment ahead of time by scheduling here. Walk-ins are welcome when available!"
    },
    {
      question: "Do you have onsite parking?",
      answer: "We do not have onsite parking, however there is street parking, as well as a 2 story parking garage directly across the street!"
    },
    {
      question: "What ages are welcome?",
      answer: "We offer haircuts for ages 8+"
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancelations need to be made at least 8 hours before your appointment online or by phone. Otherwise you will be charged in full for your missed appointment."
    },
    {
      question: "What areas of Richmond, VA do you serve?",
      answer: "We proudly serve the following nearby neighborhoods: Carytown, The Fan, Museum District, Scott's Addition, Church Hill, Rocketts Landing, Shockoe Bottom, Lakeside, Forest Hill, Henrico, The West End, Bon Air, Glen Allen, Mechanicsville, Midlothian, Chesterfield, and other surrounding areas!"
    }
  ];

  const markdown = `# Richmond Barbershop FAQ

Frequently asked questions about Richmond Barbershop services, appointments, and policies.

## Frequently Asked Questions

${faqs.map((faq, index) => `### ${index + 1}. ${faq.question}

${faq.answer}

`).join('')}

## Contact Information

- **Phone**: (555) 123-4567
- **Address**: 2820 W Cary St Suite C, Richmond, VA 23221
- **Website**: https://richmondbarber.com
- **Booking**: https://www.acuityscheduling.com

## Business Hours

- **Monday - Friday**: 9:00 AM - 7:00 PM
- **Saturday**: 8:00 AM - 5:00 PM
- **Sunday**: 10:00 AM - 4:00 PM

For more information or to book an appointment, please visit our website or call us directly.
`;

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}