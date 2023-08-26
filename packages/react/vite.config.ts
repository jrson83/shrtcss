/// <reference types="vite/client" />

import storylitePlugin from '@storylite/vite-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    storylitePlugin({
      stories: 'src/*.stories.tsx', // relative to process.cwd()
    }),
    react(),
  ],
})
