import preact from '@preact/preset-vite'
import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      '#': fileURLToPath(new URL('src', import.meta.url)),
    },
  },
  server: {
    host: true,
  },
  test: {
    include: ['./src/__tests__/**/*.test.{ts,tsx}'],
  },
})
