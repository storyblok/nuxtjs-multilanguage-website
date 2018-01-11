<template>
  <li class="sitemap-item">
    <nuxt-link :to="'/' + model.item.slug">
      {{model.item.name}}
    </nuxt-link>
    <ul v-if="model.children.length > 0">
      <sitemap-item
        :key="item.item.id"
        :model="item"
        v-for="item in model.children">
      </sitemap-item>
    </ul>
  </li>
</template>

<script>
export default {
  props: ['model']
}
</script>

<style lang="scss">
.sitemap-item {
  padding: 5px 0;

  a {
    color: #8ba19a;
  }

  ul {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
