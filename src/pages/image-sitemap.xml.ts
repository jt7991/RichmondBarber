import type { APIRoute } from "astro";
import { galleryPhotos } from "../data/gallery";
import { WEBSITE_URL } from "../data/business";

const escapeXml = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

export const GET: APIRoute = () => new Response(
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url><loc>${WEBSITE_URL}/</loc>${galleryPhotos.map((photo) => `
    <image:image><image:loc>${escapeXml(photo.url)}</image:loc></image:image>`).join("")}
  </url>
</urlset>`,
  { headers: { "Content-Type": "application/xml; charset=utf-8" } },
);
