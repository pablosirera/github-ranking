export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.NPM_PACKAGE_NAME || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.NPM_PACKAGE_DESCRIPTION || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/terminal.svg' }],
    script: [
      { src: 'https://buttons.github.io/buttons.js', async: true, defer: true },
      {
        async: true,
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        dataAdClient: process.env.ADSENSE_KEY
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~plugins/ga.js', mode: 'client' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-143056165-5'
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/toast',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: ['@/assets/scss/*.scss']
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://api.github.com'
  },
  toast: {
    position: 'top-center',
    duration: 2000,
    theme: 'toasted-primary',
    singleton: true
  },
  env: {
    GITHUB_SECRET_TOKEN: process.env.GITHUB_SECRET_TOKEN,
    ADSENSE_KEY: process.env.ADSENSE_KEY,
    NPM_PACKAGE_NAME: process.env.NPM_PACKAGE_NAME,
    NPM_PACKAGE_DESCRIPTION: process.env.NPM_PACKAGE_DESCRIPTION
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
