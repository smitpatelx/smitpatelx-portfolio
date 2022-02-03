require('dotenv').config()
export default {
  target: 'static',
  ssr: true,
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
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
   *
   */
  pwa:{
    icon:{
      source: '[srcDir]/[staticDir]/favicon.png',
      fileName: 'favicon.png'
    },
    meta: {
      mobileApp: true,
      mobileAppIOS: true,
      name: 'SPX',
      author: 'Smit Patel',
      description: 'I`m a Full Stack Software Engineer based in Winnipeg, MB. Specialized in building and designing websites and applications.',
      theme_color: '#4299e1',
      nativeUI: true,
    },
    manifest: {
      name: 'Smit Patel',
      short_name: 'SPX',
      description: 'I`m a Full Stack Software Engineer based in Winnipeg, MB. Specialized in building and designing websites and applications.',
      icons: ['favicon.png'],
    },
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-scroll-reveal', ssr: false },
    { src: '~/plugins/ga.js', ssr: false },
    { src: '~/plugins/vuelidate', ssr: true },
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
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/pwa',
    '@/modules/generator',
    '@nuxt/image'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
  ],
  sitemap: {
    hostname: 'https://smitpatelx.com',
    gzip: true,
    exclude: [

    ],
    filter ({ routes }) {
      return routes.map(route => {
        route.url = `${route.url}/`
        return route
      })
    },
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
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
  content: {
    liveEdit: false
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    // extractCSS: true,
  }
}
