import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import requireTransform from 'vite-plugin-require-transform';

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite_proteinbox/',
  plugins: [
    vue(),
    requireTransform.default({
      fileRegex: /.js$|.vue$/,
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})
