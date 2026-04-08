// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
<<<<<<< HEAD
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxt/image',
  ],
=======
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@nuxt/image', '@nuxt/icon'],
>>>>>>> b7a4a27b666e86a8805862d92766e7e36b8c6c6b
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
  ],
  compatibilityDate: '2025-07-15',
  eslint: {
    config: {
      stylistic: true,
      standalone: false,
    },
  },
})
