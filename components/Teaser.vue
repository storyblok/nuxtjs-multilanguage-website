<template>
  <div
    v-editable="blok"
    class="py-8 mb-6 text-5xl font-bold text-center">
    {{ blok.headline }}
  </div>
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
