// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://richmondbarbershop.com",
  integrations: [sitemap({ customPages: ["https://richmondbarbershop.com/pricing.md"], filter: (page) => !new URL(page).pathname.startsWith('/review-styles') }), svelte()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: true,
    },
  },
});
