export default function ({ route, store }) {
  return store.commit('setLanguage', route.params.language || 'en')
}
