<template>
  <header class="max-w-5xl mx-auto py-8 flex">
    <nav>
      <ul>
        <li>
          <nuxt-link
            class="text-teal-600 hover:underline"
            to="/">
            Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            class="text-teal-600 hover:underline"
            to="/articles">
            Blog
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="flex-1">
      <a href="/" class="block w-56 mx-auto">
        <img src="http://a.storyblok.com/f/42016/1096x313/0353bf6654/logo2.png">
      </a>
    </div>
    <nav>
      <ul>
        <li>
          <nuxt-link
            class="text-teal-600 hover:underline"
            to="/">
            English
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            class="text-teal-600 hover:underline"
            to="/de">
            German
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
