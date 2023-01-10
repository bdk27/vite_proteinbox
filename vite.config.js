import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginRequire from "vite-plugin-require";

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite_proteinbox/',
  plugins: [
    vue(),
    vitePluginRequire.default({
      fileRegex:/(.jsx?|.tsx?|.vue)$/
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})
