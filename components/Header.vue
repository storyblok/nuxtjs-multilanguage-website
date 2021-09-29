<template>
  <header class="w-full bg-white">
    <nav class="" role="navigation">
      <div class="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
        <div class="mr-4 md:mr-8">
          <a href="/">
            <svg width="69" height="66" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#FFF" d="M-149-98h1440v938H-149z"/><path d="M37.555 66c17.765 0 27.051-16.38 30.24-33.415C70.986 15.549 52.892 4.373 35.632.52 18.37-3.332 0 14.876 0 32.585 0 50.293 19.791 66 37.555 66z" fill="#2f495e"/><path d="M46.366 42.146a5.55 5.55 0 01-1.948 2.043c-.86.557-1.811 1.068-2.898 1.3-1.087.279-2.265.511-3.487.511H22V20h18.207c.905 0 1.675.186 2.4.604a6.27 6.27 0 011.811 1.485 7.074 7.074 0 011.54 4.504c0 1.207-.317 2.368-.905 3.482a5.713 5.713 0 01-2.718 2.507c1.45.418 2.582 1.16 3.442 2.229.815 1.114 1.223 2.553 1.223 4.364 0 1.16-.226 2.136-.68 2.971h.046z" fill="#FFF"/></g></svg>
          </a>
        </div>
        <div class="text-nuxt">
          <p class="text-lg">Storyblok</p>
          <p>Nuxt Demo</p>
        </div>
        <div class="ml-auto md:hidden">
          <button
            class="flex items-center px-3 py-2 border rounded"
            type="button"
          >
            <svg
              class="h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full md:w-auto md:flex-grow md:flex md:items-center">
          <ul class="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 md:ml-auto lg:mr-8 md:border-0">
            <li>
              <a href="/" class="block px-4 py-1 md:p-2 lg:px-8">Home</a>
            </li>
            <li>
              <nuxt-link
                class="block px-4 py-1 md:p-2 lg:px-8"
                :to="`/articles`">
                Blog
              </nuxt-link>
            </li>
          </ul>
          <ul class="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:border-0">
            <li>
              <nuxt-link
                to="/"
                class="block px-4 py-1 md:p-2 rounded-lg lg:px-4"
                :class="language === 'en' ? 'bg-nuxt text-white':''">
              EN
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/de"
                class="block px-4 py-1 md:p-2 rounded-lg lg:px-4"
                :class="language === 'de' ? 'bg-nuxt text-white':''">
              DE
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    language: {
      type: String,
      required: true,
      default: 'en'
    }
  }
}
</script>
