<template>
  <div v-editable="blok" class="feature util__flex-eq">
    <img :src="blok.icon | resize('80x80')" class="feature__icon">
    <h1>{{ blok.name }}</h1>
    <div class="feature__description">
      {{ blok.description }}
    </div>
  </div>
</template>

<script>
export default {
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
