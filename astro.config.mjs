import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "DevNursery.com - New Web Developer Docs",
      social: {
        github: "https://github.com/AlexMercedCoder/",
      },
      sidebar: [
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "Other",
          autogenerate: { directory: "other" },
        },
      ],
    }),
  ],
});
