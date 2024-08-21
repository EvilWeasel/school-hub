import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import react from "@astrojs/react";
import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  experimental: {
    actions: true,
    env: {
      schema: {
        PUBLIC_APP_BASE_URL: envField.string({
          context: "server",
          access: "public",
          default: "http://localhost:4321",
        }),
        PB_URL: envField.string({
          context: "server",
          access: "secret",
          default: "localhost:8080",
        }),
      },
    },
  },
});
