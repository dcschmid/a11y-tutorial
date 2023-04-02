import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'

import mdx from '@astrojs/mdx'
import remarkToc from 'remark-toc'
import { rehypeHeadingIds } from '@astrojs/markdown-remark'

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), mdx()],
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeHeadingIds],
  },
})
