import react from '@vitejs/plugin-react'
import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '#': fileURLToPath(new URL('src', import.meta.url)),
    },
  },
  server: {
    host: '127.0.0.1',
  },
})
