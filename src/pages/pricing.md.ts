import { serviceMenuMarkdown } from "../data/service-menu";

export function GET() {
  return new Response(serviceMenuMarkdown(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
