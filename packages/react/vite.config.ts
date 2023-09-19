import { URL, fileURLToPath } from 'node:url'
import storylitePlugin from '@storylite/vite-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    storylitePlugin({
      stories: 'src/**/*.stories.tsx',
    }),
    react(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('index.html', import.meta.url)),
        nested: fileURLToPath(new URL('canvas.html', import.meta.url)),
      },
    },
  },
  server: {
    host: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
