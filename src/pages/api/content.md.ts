export async function GET() {
  const services = [
    { name: "Haircut", price: "$40", description: "Professional precision cuts tailored to your style at our Richmond VA barbershop. Expert men's haircuts in Carytown." },
    { name: "Scissor Cut", price: "$50", description: "Premium scissor cuts with attention to detail. Skilled barbers in Richmond VA providing quality haircuts for men." },
    { name: "Beard Trim", price: "$20", description: "Expert beard shaping and grooming for a sharp, professional look. Beard trimming services in Richmond VA." },
    { name: "Hot Shave", price: "$30", description: "Traditional hot towel shave for ultimate comfort and smoothness. Classic barber services in Carytown Richmond." }
  ];

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

  const markdown = `# Richmond Barbershop

Professional barber services in Richmond, Virginia. Located in the heart of Carytown.

## About Us

Richmond Barbershop provides top-notch barber services in Richmond VA. From classic cuts to modern styles, our skilled barbers provide exceptional grooming for men in Carytown and surrounding areas.

## Services Offered

${services.map(service => `### ${service.name}
- **Price**: ${service.price}
- **Description**: ${service.description}
`).join('\n')}

## Business Information

### Contact Details
- **Phone**: (555) 123-4567
- **Address**: 2820 W Cary St Suite C, Richmond, VA 23221
- **Website**: https://richmondbarber.com
- **Booking**: https://www.acuityscheduling.com

### Business Hours
- **Monday - Friday**: 9:00 AM - 7:00 PM
- **Saturday**: 8:00 AM - 5:00 PM
- **Sunday**: 10:00 AM - 4:00 PM

### Service Areas
We proudly serve the following Richmond VA neighborhoods:
- Carytown
- The Fan
- Museum District
- Scott's Addition
- Church Hill
- Rocketts Landing
- Shockoe Bottom
- Lakeside
- Forest Hill
- Henrico
- The West End
- Bon Air
- Glen Allen
- Mechanicsville
- Midlothian
- Chesterfield

## Frequently Asked Questions

${faqs.map((faq, index) => `### ${index + 1}. ${faq.question}

${faq.answer}

`).join('')}

## Reviews & Ratings

**Overall Rating**: 4.9/5 ⭐ (127 reviews)

### Recent Reviews

**Sarah Johnson** (5⭐) - "Best haircut I've ever had in Richmond! The attention to detail and friendly service make Richmond Barbershop my go-to spot."

**Mike Chen** (5⭐) - "Professional, skilled, and the atmosphere is perfect. Highly recommend for anyone looking for quality barber services in Carytown."

**David Williams** (5⭐) - "Great location, excellent service, and fair prices. The barbers really know their craft and make you feel comfortable."

## Gallery

Our work includes professional haircuts, beard trims, and hot shaves for men of all ages (8+). View our portfolio of satisfied clients and modern styling techniques.

## Contact & Booking

Ready to experience the best barber services in Richmond VA? Book your appointment today!

- **Call**: (555) 123-4567
- **Book Online**: https://www.acuityscheduling.com
- **Visit**: 2820 W Cary St Suite C, Richmond, VA 23221

Walk-ins welcome when available. Appointments highly recommended.
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