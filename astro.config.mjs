import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
	integrations: [preact()],
	buildOptions: {
		site: 'https://example.com/',
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
        // syntaxHighlight: "shiki",
      },
    ]
  }
});
