export default function ({ app, route, store, isDev }) {
  let version = route.query._storyblok || isDev ? 'draft' : 'published'
  let language = route.params.language || 'en'

  if (process.server) {
    store.commit('setCacheVersion', app.$storyapi.cacheVersion)
  }

  if (!store.state.settings._uid || language !== store.state.language) {
    store.commit('setLanguage', language)

    return store.dispatch('loadSettings', {version: version, language: language})
  }
}
