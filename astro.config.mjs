import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	site: 'https://www.brycewray.com/',
  trailingSlash: "always",
  markdown: {
    remarkPlugins: [
      ["remark-smartypants", {
        dashes: "oldschool",
      }],
      "remark-footnotes",
    ],
    rehypePlugins: [
      "rehype-external-links",
      "rehype-slug",
      ["rehype-autolink-headings", {
        behavior: "wrap",
        // test: [ 'article h1', 'article h2', 'article h3', 'article h4', 'article h5', 'article h6']
      }]
    ],
    syntaxHighlight: 'prism',
    shikiConfig: {
      wrap: true,
    },
  },
  vite: {
    ssr: {
      external: ['twitter-api-client'],
    },
  },
})
