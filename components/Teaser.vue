<template>
  <div
    v-editable="blok"
    class="bg-white-half">
    <div class="pb-6 pt-16 container mx-auto">
      <h2 class="text-5xl">{{ blok.headline }}</h2>
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
