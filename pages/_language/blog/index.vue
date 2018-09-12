<template>
  <section class="util__container">
    <div :key="blogPost.content._uid" v-for="blogPost in data.stories" class="blog__overview">
      <h2>
        <nuxt-link class="blog__detail-link" :to="'/' + blogPost.full_slug">
          {{ blogPost.content.name }}
        </nuxt-link>
      </h2>
      <small>
        {{ blogPost.published_at }}
      </small>
      <p>
        {{ blogPost.content.intro }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return { total: 0, data: { stories: [] } }
  },
  asyncData (context) {
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi.get('cdn/stories', {
      version: version,
      starts_with: `${context.store.state.language}/blog`,
      cv: context.store.state.cacheVersion
    }).then((res) => {
      return res
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  }
}
</script>

<style lang="scss">
.blog__overview {
  padding: 0 20px;
  max-width: 600px;
  margin: 40px auto 60px;

  p {
    line-height: 1.6;
  }
}

.blog__detail-link {
  color: #000;
}
</style>
