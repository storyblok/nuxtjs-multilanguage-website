export default function ({ route, store, isDev }) {
  let version = route.query._storyblok || isDev ? 'draft' : 'published'
  let language = route.params.language || 'en'

  store.commit('setLanguage', language)

  return store.dispatch('loadSettings', {version: version, language: language})
}
