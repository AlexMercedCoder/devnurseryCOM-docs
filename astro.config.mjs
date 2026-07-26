import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "DevNursery Docs",
      lastUpdated: true,
      social: {
        github: "https://github.com/AlexMercedCoder/",
      },
      sidebar: [
        {
          label: "Community Hub",
          link: "https://main.devnursery.com",
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
          collapsed: true,
        },
        {
          label: "Cheatsheets",
          autogenerate: { directory: "cheatsheets" },
          collapsed: true,
        },
        {
          label: "Other",
          autogenerate: { directory: "other" },
          collapsed: true,
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
