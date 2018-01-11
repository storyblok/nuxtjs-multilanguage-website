<template>
  <div v-editable="blok" class="blog">
    <h1>{{ blok.name }}</h1>
    <div class="blog__body" v-html="body">
    </div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  props: ['blok'],
  computed: {
    body () {
      return marked(this.blok.body)
    }
  }
}
</script>

<style lang="scss">
.blog {
  padding: 0 20px;
  max-width: 600px;
  margin: 40px auto 100px;

  img {
    width: 100%;
    height: auto;
  }
}

.blog__body {
  line-height: 1.6;
}
</style>
