export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Web Design History',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Welcome to Web Design History! Explore the websites from the various range of eras! ' },
      { hid: 'keywords', name: 'keywords', content: 'web, design, history, aesthetic, 90s, 00s' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Web Design History' },
      { hid: 'og:title', property: 'og:title', content: 'Web Design History' },
      { hid: 'og:description', property: 'og:description', content: 'Welcome to Web Design History! Explore the websites from the various range of eras!' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'og:image', property: 'og:image', content: 'https://user-images.githubusercontent.com/33516104/161385849-4925fda7-c72d-4eeb-9f3d-c8c71b8e94c4.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      Neonderthaw: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
