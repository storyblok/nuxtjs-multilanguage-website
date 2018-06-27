import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      cacheVersion: '',
      language: 'en',
      settings: {
        main_navi: []
      }
    },
    mutations: {
      setSettings (state, settings) {
        state.settings = settings
      },
      setLanguage (state, language) {
        state.language = language
      },
      setCacheVersion (state, version) {
        state.cacheVersion = version
      }
    },
    actions: {
      loadSettings ({ commit }, context) {
        return this.$storyapi.get(`cdn/stories/${context.language}/settings`, {
          version: context.version
        }).then((res) => {
          commit('setSettings', res.data.story.content)
        })
      }
    }
  })
}

export default createStore
