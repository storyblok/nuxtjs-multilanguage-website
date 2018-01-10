<template>
  <div class="slide" v-editable="blok">
    <img :src="blok.image">
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss">
.slide img {
  width: 100%;
}
</style>
