<template>
  <div
    v-editable="blok"
    class="py-8 mb-6 container mx-auto text-left" >
    <div class="relative">
      <h2 class="relative font-serif text-4xl z-10 text-nuxt">{{ blok.title }}</h2>
      <div class="absolute top-0 w-64 h-10 mt-6 -ml-4 bg-nuxt-300" />
    </div>
    <ul class="flex">
      <li
        v-for="article in blok.articles" :key="article._uid"
        class="flex-auto px-8" style="min-width: 33%">
        <article-teaser
          v-if="article.content"
          :article-link="`${language}${article.full_slug}`"
          :article-content="article.content"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    },
    language: {
      type: String,
      default: ""
    }
  }
}
</script>
