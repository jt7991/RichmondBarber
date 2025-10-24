// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://richmondbarber.com",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: true,
    },
  },

});
