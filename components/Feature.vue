<template>
  <div v-editable="blok" class="feature util__flex-eq">
    <img :src="resizedIcon" class="feature__icon">
    <h1>{{ blok.name }}</h1>
    <div class="feature__description">
      {{ blok.description }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    resizedIcon () {
      if (typeof this.blok.icon !== 'undefined') {
        return '//img2.storyblok.com/80x80' + this.blok.icon.replace('//a.storyblok.com', '')
      }
      return null
    }
  },
  props: ['blok']
}
</script>

<style lang="scss">
.feature {
  text-align: center;
  padding: 30px 10px 100px;
}

.feature__icon {
  max-width: 80px;
}
</style>
