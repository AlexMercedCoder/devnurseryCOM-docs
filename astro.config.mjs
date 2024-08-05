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
          label: "Cheatsheets",
          autogenerate: { directory: "cheatsheets" },
        },
        {
          label: "Other",
          autogenerate: { directory: "other" },
        },
      ],
      head: [
        {
          tag: 'script',
          attrs: {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-K9J4L6ESZ3', // Replace with your Google Analytics ID
          },
        },
        {
          tag: 'script',
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K9J4L6ESZ3'); // Replace with your Google Analytics ID
          `,
        },
      ],
    }),
  ],
});
