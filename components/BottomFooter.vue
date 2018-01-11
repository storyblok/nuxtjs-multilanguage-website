<template>
  <footer class="bottom-footer">
    <div class="util__container">
      <nuxt-link class="bottom-footer__link" :to="'/' + $store.state.language + '/sitemap'">Sitemap</nuxt-link>
    </div>
  </footer>
</template>

<style lang="scss">
.bottom-footer {
  background: #e3f2ed;
  padding: 40px 0 120px 0;
  text-align: center;
}

.bottom-footer__link {
  color: #8ba19a;
  text-decoration: none;
}
</style>
