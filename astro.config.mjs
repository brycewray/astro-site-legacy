import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.brycewray.com/', // commenting this out prevents XML sitemap from happening during dev
  server: {
    port: 3000,
    host: "192.168.254.10"
  },
  trailingSlash: "always",
  markdown: {
    remarkPlugins: [["remark-smartypants", {
      dashes: "oldschool",
      ellipses: false
    }], "remark-footnotes"],
    rehypePlugins: ["rehype-external-links", "rehype-slug", ["rehype-autolink-headings", {
      behavior: "wrap" // test: [ 'article h1', 'article h2', 'article h3', 'article h4', 'article h5', 'article h6']

    }]],
    syntaxHighlight: 'prism',
    shikiConfig: {
      wrap: true
    }
  },
  vite: {
    ssr: {
      external: ['twitter-api-client']
    },
    logLevel: 'silent' // while I'm working on JSON files!
  },
  // integrations: [sitemap()]
});
