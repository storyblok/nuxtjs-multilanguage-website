<template>
  <nuxt-link
    :to="articleLink"
    class="article-teaser block py-4 px-6 border rounded border-gray-500">
    <h2 class="pt-2 pb-4 text-2xl font-bold">
      {{ articleContent.name }}
    </h2>
    <p class="pb-6 leading-relaxed">
      {{ articleContent.intro }}
    </p>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    articleContent: {
      type: Object,
      required: true
    },
    articleLink: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.article-teaser:hover {
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);
}
</style>
