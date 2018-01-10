<template>
  <div v-editable="blok" class="util__flex">
    <component :key="blok._uid" v-for="blok in blok.columns" :blok="blok" :is="blok.component"></component>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
