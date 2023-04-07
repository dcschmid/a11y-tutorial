import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import AutoImport from 'astro-auto-import'
import mdx from '@astrojs/mdx'
import pagefind from 'astro-pagefind'

import MDXCodeBlocks, { mdxCodeBlockAutoImport } from 'astro-mdx-code-blocks'

// https://astro.build/config
export default defineConfig({
  build: {
    format: 'file',
  },
  integrations: [
    AutoImport({
      imports: [mdxCodeBlockAutoImport('./src/components/CodeBlock.astro')],
    }),
    MDXCodeBlocks(),
    preact(),
    mdx(),
    pagefind(),
  ],
})
