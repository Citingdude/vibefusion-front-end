import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    apiBase: process.env.API_BASE,
    baseUrl: process.env.BASE_URL
  },

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        }

      }
    }
  },

  css: [
    '@/assets/css/main.css'
  ],
})
