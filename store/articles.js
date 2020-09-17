export const state = () => ({
  articles: [],
  loaded: '0',
})

export const mutations = {
  setArticles (state, entries) {
    state.articles = entries
  },
  setLoaded (state, loaded) {
    state.loaded = loaded
  }
}
