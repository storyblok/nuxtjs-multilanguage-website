<template>
  <div
    v-editable="blok"
    class="pb-8 mb-6 font-bold text-center">
    <img
      class="h-48 w-full mb-4 object-cover"
      :src="blok.image.filename" />
    <h3 class="text-5xl">{{ blok.headline }}</h3>
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
