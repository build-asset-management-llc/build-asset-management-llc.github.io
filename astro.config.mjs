import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://buildbitcoin.com",
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), mdx(), partytown({
    // Adds dataLayer.push as a forwarding event.
    config: {
      forward: ["dataLayer.push"]
    }
  })],
  vite: {
    server: {
      watch: {
        ignored: ['**/terraform/**']
      }
    }
  }
});