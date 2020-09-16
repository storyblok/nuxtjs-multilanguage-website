<template>
  <ul
    v-editable="blok"
    class="flex py-8 mb-6">
    <li
      :key="blok._uid"
      v-for="blok in blok.columns"
      class="flex-auto px-6">
      <component :blok="blok" :is="blok.component" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
