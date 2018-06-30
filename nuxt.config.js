const StoryblokClient = require('storyblok-js-client')

module.exports = {
  modules: [
    ['storyblok-nuxt', {accessToken: 'TKznhYJW5Eg5QsDKwAr8oQtt', cacheProvider: 'memory'}]
  ],
  plugins: [
    '~/plugins/components',
    '~/plugins/filters'
  ],
  router: {
    middleware: 'languageDetection'
  },
  generate: {
    routes() {
      let routes = []

      const StoryblokClientInstance = new StoryblokClient({
        accessToken: 'TKznhYJW5Eg5QsDKwAr8oQtt'
      })

      return StoryblokClientInstance.get('cdn/links')
        .then((res) => {
          for (i in res.data.links) {
            routes.push({
              route: '/' + res.data.links[i].slug
            })
          }

          return routes
        })
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'mywebsite',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Zilla+Slab:400,700' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    optimization: {
      splitChunks: {
        chunks: 'async',
      }
    },
    splitChunks: {
      pages: false,
      vendor: true,
      commons: true,
      runtime: true,
      layouts: false
    },
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
