<template>
  <header class="top-header util__flex util__container">
    <nav class="top-header__col">
      <ul class="top-header__nav">
        <li :key="index" v-for="(navitem, index) in $store.state.settings.main_navi">
          <nuxt-link class="top-header__link" :to="navitem.link.cached_url">
            {{ navitem.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <a href="/" class="top-header__col top-header__logo">
      <img src="//a.storyblok.com/f/42016/1096x313/0353bf6654/logo2.png">
    </a>
    <nav class="top-header__col top-header__second-navi">
      <ul class="top-header__nav top-header__nav--right">
        <li>
          <nuxt-link class="top-header__link" to="/en/blog">English</nuxt-link>
        </li>
        <li>
          <nuxt-link class="top-header__link" to="/de/blog">German</nuxt-link>
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

  .top-header__nav {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      padding: 0 20px 0 0;
    }

    &--right li {
      padding-right: 0;
      padding-left: 20px;
    }
  }

  .top-header__link {
    line-height: 1.5;
    color: #000;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: border .15s ease;

    &:hover {
      border-bottom: 2px solid #000;
    }
  }
</style>
