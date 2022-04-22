import { defineConfig } from 'astro/config'

// import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: 'https://www.brycewray.com/', // commenting this out prevents XML sitemap from happening during dev
  server: {
    port: 3000,
    host: "192.168.254.10"
  },
  trailingSlash: "always",
  markdown: {
    remarkPlugins: [
      ["remark-smartypants", {
        dashes: "oldschool",
        ellipses: false
      }],
      "remark-footnotes",
      "remark-gfm"
    ],
    rehypePlugins: ["rehype-external-links", "rehype-slug", ["rehype-autolink-headings", {
      behavior: "wrap" // test: [ 'article h1', 'article h2', 'article h3', 'article h4', 'article h5', 'article h6']

    }]],
    // syntaxHighlight: 'prism',
    shikiConfig: {
      theme: 'github-dark',
      // wrap: true,
    }
  },
  vite: {
    plugins: [],
    ssr: {},
    // logLevel: 'silent' // while I'm working on JSON files!
  },
  // integrations: [sitemap()]
});
