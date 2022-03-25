import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
	integrations: [preact()],
	buildOptions: {
		site: 'https://www.brycewray.com/',
	},
  markdownOptions: {
    render: [
      "@astrojs/markdown-remark",
      {
        remarkPlugins: [
          ["remark-smartypants", {
            dashes: "oldschool",
          }],
          "remark-footnotes",
        ],
        rehypePlugins: [
          "rehype-external-links",
        ],
        // syntaxHighlight: "shiki",
      },
    ]
  }
});
