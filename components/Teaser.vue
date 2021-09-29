<template>
  <div
    v-editable="blok"
    class="bg-white-half">
    <div class="pb-16 pt-16 container mx-auto">
      <h2 class="font-serif text-7xl pb-4 mb-4">{{ blok.headline }}</h2>
      <img
        class="w-full"
        :src="blok.image.filename" />
    </div>
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
