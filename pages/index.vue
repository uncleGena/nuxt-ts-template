<template lang="pug">
  section.container
    div
      logo
      h1.title nuxt-ts
      h2.subtitle subtitle
      .links
        a(href="https://nuxtjs.org/" target="_blank" class="button--green") Documentation
        a(
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        ) GitHub
      br
      h3 {{ jsClass }}
      br
      h3 {{ tsClass }}
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import MyTsClass from '~/assets/js/MyTsClass'
import MyJsClass from '~/assets/js/MyJsClass'

@Component({
  components: {
    Logo: () => import('~/components/Logo.vue')
  }
})
class IndexPage extends Vue {
  get jsClass() {
    const tsCls = new MyTsClass({ lang: 'typescript' })
    return tsCls.getLang()
  }

  get tsClass() {
    const jsClass = new MyJsClass({ lang: 'javascript' })
    return jsClass.lang
  }
}

export default IndexPage
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
