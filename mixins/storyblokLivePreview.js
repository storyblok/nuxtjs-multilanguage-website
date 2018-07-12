export default {
  mounted() {
    this.$storyblok.init()
    this.$storyblok.on(['published', 'change'], (event) => {
      if (!event.slugChanged) {
        // Reload the page on save events
        location.reload(true)
      }
    })
    this.$storyblok.on('input', (event) => {
      // Inject content on the input event
      this.story.content = event.story.content
    })
  }
}
