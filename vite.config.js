import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// https://vite.dev/config/
export default defineConfig({
  base: 'winterest-portfolio',
  plugins: [
    vue(),
    vuetify({
      autoImport: true
    }),
  ],
})
