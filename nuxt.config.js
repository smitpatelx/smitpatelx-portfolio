require('dotenv').config()
export default {
  mode: 'universal',
  env: {
    apiUrl: process.env.API_URL || 'http://localhost:3000'
  },
  telemetry: false,
  /*
   ** Headers of the page
   */
  head: {
    title: 'Smit Patel | Full Stack Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'I`m a Computer Programmer based in Winnipeg, MB. Specialized in building and designing websites and applications.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: 'rgba(79, 209, 197, 1)' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-scroll-reveal', ssr: false },
    { src: '~/plugins/vue-notification', ssr: false },
    { src: '~/plugins/vuelidate', ssr: false },
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@aceforth/nuxt-optimized-images',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
  ],
  optimizedImages: {
    optimizeImages: true
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extractCSS: true,
  }
}
