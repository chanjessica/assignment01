export default {
  messages: {
    loading: 'Coming up.........',
    error_404: 'Sorry! This page not found',
    server_error: 'Server error',
    back_to_home: 'Back HOME'
  },
  generate: {
    fallback: true
  },
  mode: 'universal',
        /*** Headers of the page */
  head: {
        title: "Jessica's Kitchen",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Welcome to our Chinese kitchen. Kowloon Express prepares American Chinese food fresh from the wok, from our signature Orange Chicken to bold limited time offerings" },
      { hid: 'keywords', name: 'keywords', content: "Authentic Chinese, Fast Food, Fast Chinse Food, Chinese Food, Chinese Restaurant" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "canonical", href: 'https://peaceful-lumiere-f1eb78.netlify.com/API'}
    ]
  },
      /* ** Customize the progress-bar color */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
