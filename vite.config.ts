import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { lucideIcons } from './vite/lucideIcons'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), lucideIcons(), tailwindcss()],
  resolve: {
    alias: {
      'tailwind.config.ts': path.resolve(__dirname, 'tailwind.config.ts'),
    },
  },
  optimizeDeps: {
    include: ['tailwind.config.ts', "frappe-ui > feather-icons", "showdown", "engine.io-client"],
  },
  server: {
    host: true
  },
})
