export async function GET() {
  const services = [
    {
      name: "Haircut",
      price: "$40",
      description:
        "Professional precision cuts tailored to your style at our Richmond VA barbershop. Expert men's haircuts in Carytown.",
    },
    {
      name: "Scissor Cut",
      price: "$50",
      description:
        "Premium scissor cuts with attention to detail. Skilled barbers in Richmond VA providing quality haircuts for men.",
    },
    {
      name: "Beard Trim",
      price: "$20",
      description:
        "Expert beard shaping and grooming for a sharp, professional look. Beard trimming services in Richmond VA.",
    },
    {
      name: "Straight Razor Shave",
      price: "$30",
      description:
        "Traditional hot towel shave for ultimate comfort and smoothness. Classic barber services in Carytown Richmond.",
    },
  ];

  const markdown = `# Richmond Barbershop Services

Professional barber services in Richmond, VA. Located in Carytown at 2820 W Cary St Suite C.

## Services Offered

${services
  .map(
    (service) => `### ${service.name}
- **Price**: ${service.price}
- **Description**: ${service.description}
`,
  )
  .join("\n")}

## Business Information
- **Phone**: (555) 123-4567
- **Address**: 2820 W Cary St Suite C, Richmond, VA 23221
- **Hours**:
  - Monday-Friday: 9:00 AM - 7:00 PM
  - Saturday: 8:00 AM - 5:00 PM
  - Sunday: 10:00 AM - 4:00 PM

## Contact & Booking
Book appointments online at: https://www.acuityscheduling.com

For more information, visit: https://richmondbarber.com
`;

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/markdown",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

