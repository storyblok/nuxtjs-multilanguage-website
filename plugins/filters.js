import Vue from 'vue'

Vue.filter('resize', (image, size) => {
  if (typeof image !== 'undefined') {
    return '//img2.storyblok.com/' + size + image.replace('//a.storyblok.com', '')
  }
  return null
})
