<template>
  <section class="util__container">
    <div class="sitemap">
      <h1>Sitemap</h1>

      <div v-for="language in tree">
        <ul>
          <sitemap-item
            v-if="item.item.name != 'Settings'"
            :key="item.id"
            :model="item"
            v-for="item in language.children">
          </sitemap-item>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      links: {}
    }
  },
  computed: {
    tree () {
      let parentChilds = this.parentChildMap(this.links)

      return this.generateTree(0, parentChilds)
    }
  },
  asyncData (context) {
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi.get('cdn/links', {
      version: version,
      starts_with: context.store.state.language,
      cv: context.store.state.cacheVersion
    }).then((res) => {
      return res.data
    }).catch((res) => {
      context.error(res)
    })
  },
  methods: {
    parentChildMap (links) {
      let tree = {}
      let linksArray = Object.keys(links).map(e => links[e])

      linksArray.forEach((link) => {
        if (!tree[link.parent_id]) {
          tree[link.parent_id] = []
        }

        tree[link.parent_id].push(link)
      })

      return tree
    },
    generateTree (parent, items) {
      let tree = {}

      if (items[parent]) {
        let result = items[parent]

        result.forEach((cat) => {
          if (!tree[cat.id]) {
            tree[cat.id] = {item: {}, children: []}
          }
          tree[cat.id].item = cat
          tree[cat.id].children = this.generateTree(cat.id, items)
        })
      }

      return Object.keys(tree).map(e => tree[e])
    }
  }
}
</script>

<style lang="scss">
.sitemap {
  max-width: 600px;
  margin: 20px auto 60px;
}
</style>
