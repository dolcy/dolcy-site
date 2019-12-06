const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title:
      process.env.APP_NAME || 'Dolcy Interactive - Laravel/Vue App Development',
    meta: [
      // General meta tags
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'text/html; charset=UTF-8; IE=edge'
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },
      { name: 'referrer', content: 'origin' },
      { name: 'author', content: 'Shaughn Dolcy' },
      { hid: 'description', name: 'description', content: pkg.description },
      // OpenGraph data
      {
        property: 'og:title',
        content: 'Dolcy Interactive - Laravel/Vue App Development'
      },
      { property: 'og:site_name', content: 'Dolcy Interactive' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:url',
        content: 'https://dolcy.com'
      },
      {
        property: 'og:image',
        content: 'https://dolcy.com/android-chrome-512x512.png'
      },
      {
        property: 'og:description',
        content: pkg.description
      },

      // Twitter card
      {
        name: 'twitter:card',
        content: 'Dolcy Interactive - Laravel/Vue App Development'
      },
      {
        name: 'twitter:site',
        content: 'https://dolcy.com'
      },
      {
        name: 'twitter:title',
        content: 'Dolcy Interactive - Laravel/Vue App Development'
      },
      {
        name: 'twitter:description',
        content: pkg.description
      },
      { name: 'twitter:creator', content: '@dolcy' },
      {
        name: 'twitter:image:src',
        content: 'https://dolcy.com/android-chrome-512x512.png'
      },

      // Google / Schema.org markup:
      {
        itemprop: 'name',
        content: 'Dolcy Interactive - Laravel/Vue App Development'
      },
      {
        itemprop: 'description',
        content: pkg.description
      },
      {
        itemprop: 'image',
        content: 'https://dolcy.com/android-chrome-512x512.png'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'canonical',
        href: 'https://dolcy.com'
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
  css: [
    '@/assets/css/main.scss',
    '@/assets/css/fonts.scss',
    '@/assets/css/fonts.scss',
    // Load hooper css
    { src: 'hooper/dist/hooper.css', lang: 'css' },
    // Load ant styles with Less
    { src: 'ant-design-vue/lib/collapse/style/index.less', lang: 'less' },
    { src: 'ant-design-vue/lib/notification/style/index.less', lang: 'less' },
    // Load custom ant SCSS
    '@/assets/css/ant_custom.scss'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/anchor',
      ssr: false
    },
    {
      src: '~/plugins/anime',
      ssr: false
    },
    {
      src: '~/plugins/card',
      ssr: false
    },
    {
      src: '~/plugins/collapse',
      ssr: false
    },
    {
      src: '~/plugins/icons',
      ssr: false
    },
    {
      src: '~/plugins/notification',
      ssr: false
    },
    {
      src: '~/plugins/veevalidate',
      ssr: false
    }
  ],
  /*
   ** Nuxt.js serverMiddleware
   */
  serverMiddleware: [{ path: '/api/contact', handler: '~/api/contact' }],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxt/http',
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-148375929-1'
  },
  http: {
    baseURL: 'http://localhost:3000/',
    https: false,
    proxy: true
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {
    '/api/': {
      target: 'http://localhost:3000',
      pathRewrite: { '^/api/': '' }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.node = {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
        dns: 'empty'
      }

      // Run ESLint on save (disabled)
      if (ctx.isDev && ctx.isClient) {
        //
      }
    },
    loaders: {
      less: {
        javascriptEnabled: true
      }
    }
  }
}
