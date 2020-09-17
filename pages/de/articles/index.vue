<template>
  <section>
    <h2 class="py-10 text-center font-bold text-4xl">Articles Overview</h2>
    {{ articles }}
    <ul class="flex py-6 mb-6">
      <li
        v-for="article in stories" :key="article._uid"
        class="flex-auto px-6" style="min-width: 33%">
        <article-teaser
          v-if="article.content"
          :article-link="article.full_slug"
          :article-content="article.content"/>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data () {
    return {
      stories: []
    }
  },
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories', {
      starts_with: 'de/articles/',
      version: 'draft'
    }).then((res) => {
      return res.data
    }).catch((res) => {
      if (!res.response) {
        console.error(res)
        context.error({ statusCode: 404, message: 'Failed to receive content form api' })
      } else {
        console.error(res.response.data)
        context.error({ statusCode: res.response.status, message: res.response.data })
      }
    })
  }
}
</script>
