import { serviceMenuMarkdown } from "../../data/service-menu";
import {
  BUSINESS_HOURS_NOTE,
  PHONE_DISPLAY,
} from "../../data/business";

export async function GET() {
  const markdown = `${serviceMenuMarkdown()}

## Contact

- Phone: ${PHONE_DISPLAY}
- Hours: ${BUSINESS_HOURS_NOTE}
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
