import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

// import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.brycewray.com/',
  // commenting this out prevents XML sitemap from happening during dev
  server: {
    port: 3000,
    host: "192.168.254.10"
  },
  trailingSlash: "always",
  markdown: {
    // drafts: true,
    /*
    For the "drafts" config setting, the default is "false" ---
    **BUT**, as of 2022-04-30 ("currently"), `Astro.glob() **will** include it,
    so pre-publication commits of drafts would be problematic unless
    every `Astro.glob()` function filters it out.
    https://docs.astro.build/en/guides/markdown-content/#markdown-drafts
    */
    remarkPlugins: [["remark-smartypants", {
      dashes: "oldschool",
      ellipses: false
    }], "remark-footnotes", "remark-gfm"],
    rehypePlugins: ["rehype-external-links", "rehype-slug", ["rehype-autolink-headings", {
      behavior: "wrap" // test: [ 'article h1', 'article h2', 'article h3', 'article h4', 'article h5', 'article h6']

    }]],
    // syntaxHighlight: 'prism',
    shikiConfig: {
      theme: 'github-dark' // wrap: true,

    }
  },
  vite: {
    plugins: [],
    ssr: {} // logLevel: 'silent' // while I'm working on JSON files!

  },
  integrations: [
    sitemap(),
    // critters({
    //   pruneSource: true,
    //   fonts: true,
    // })
  ]
});
