import { URL, fileURLToPath } from 'node:url'
import mdx from '@mdx-js/rollup'
import storylitePlugin from '@storylite/vite-plugin'
import react from '@vitejs/plugin-react'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: 'pre', // this ensures that .md/mdx files are processed before react & storylite plugins
      ...mdx({
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      }),
    },
    storylitePlugin({
      stories: 'src/**/*.stories.{tsx,md,mdx}',
    }),
    react(),
  ],
  build: {
    outDir: fileURLToPath(new URL('../../docs', import.meta.url)),
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('index.html', import.meta.url)),
        nested: fileURLToPath(new URL('canvas.html', import.meta.url)),
      },
    },
  },
  resolve: {
    alias: {
      '@/src': fileURLToPath(new URL('./src', import.meta.url)),
      '@/storylite': fileURLToPath(new URL('./.storylite', import.meta.url)),
    },
  },
  server: {
    host: true,
  },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
})
