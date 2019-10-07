export const state = () => ({
  cacheVersion: '',
  language: 'en',
  settings: {
    main_navi: []
  }
})

export const mutations = {
  setSettings(state, settings) {
    state.settings = settings
  },
  setLanguage(state, language) {
    state.language = language
  },
  setCacheVersion(state, version) {
    state.cacheVersion = version
  }
}

export const actions = {
  loadSettings({ commit }, context) {
    return this.$storyapi.get(`cdn/stories/${context.language}/settings`, {
      version: context.version
    }).then((res) => {
      commit('setSettings', res.data.story.content)
    })
  }
}
