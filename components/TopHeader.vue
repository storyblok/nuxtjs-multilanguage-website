<template>
  <header class="top-header util__flex util__container">
    <nav class="top-header__col">
      <ul class="nav">
        <li>
          <nuxt-link class="nav__item" to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link class="nav__item" to="/en/blog">Blog</nuxt-link>
        </li>
      </ul>
    </nav>
    <a href="/" class="top-header__col top-header__logo">
      <img src="//a.storyblok.com/f/42016/1096x313/0353bf6654/logo2.png">
    </a>
    <nav class="top-header__col top-header__second-navi">
      <ul class="nav">
        <li>
          <nuxt-link class="nav__item" to="/en/">English</nuxt-link>
        </li>
        <li>
          <nuxt-link class="nav__item" to="/en/">German</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
  .top-header {
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .top-header__logo {
    text-align: center;
    position: absolute;
    left: 50%;

    img {
      position: relative;
      max-height: 60px;
      left: -50%;
      top: -15px;
    }
  }

  .top-header__second-navi {
    text-align: right;
  }
</style>
