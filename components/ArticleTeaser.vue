<template>
  <a
    href="#"
    class="block py-10">
    <img :src="resizedImage" class="pb-10"/>
    <h2 class="pb-6 text-xl">
      {{ articleContent.title }}
    </h2>
    <p class="pb-6 text-gray-700 leading-loose">
      {{ articleContent.intro }}
    </p>
    <p class="text-gray-700">
      {{ articleContent.author }}
    </p>
  </a>
</template>

<script>
export default {
  props: {
    articleContent: {
      type: Object,
      required: true
    }
  },
  computed: {
    resizedImage() {
      const imageUrl = this.articleContent.hero_image
      if (typeof imageUrl !== 'undefined') {
        return imageUrl.filename.replace('//a.storyblok.com', '//img2.storyblok.com/300x250')
      }
      return null
    }
  }
}
</script>
