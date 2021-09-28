<template>
  <div
    v-editable="blok"
    class="py-16 max-w-sm p-2 sm:p-10 text-center flex flex-col items-center">
    <component :is="blok.icon" />
    <div class="px-6 py-4">
      <h2 class="font-bold text-xl my-4">{{ blok.name }}</h2>
      <p class="text-base text-gray-600">
        {{ blok.description }}
      </p>
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
