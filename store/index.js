import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
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
      }
    },
    actions: {
      nuxtServerInit ({ commit }, context) {
        let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
        let language = context.params.language || 'en'

        commit('setLanguage', language)

        return this.$storyapi.get(`cdn/stories/${language}/settings`, {
          version: version
        }).then((res) => {
          commit('setSettings', res.data.story.content)
        })
      }
    }
  })
}

export default createStore
