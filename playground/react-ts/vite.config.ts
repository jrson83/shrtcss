import react from '@vitejs/plugin-react'
import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
