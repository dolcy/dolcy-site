import Vue from 'vue'

import {
  getMatchedComponentsInstances,
  promisify,
  globalHandleError
} from './utils'

import NuxtError from '../layouts/error.vue'
import NuxtLoading from './components/nuxt-loading.vue'
import NuxtBuildIndicator from './components/nuxt-build-indicator'

import '../assets/css/main.scss'

import '../assets/css/fonts.scss'

import '../assets/css/fonts.scss'

import '../node_modules/hooper/dist/hooper.css'

import '../node_modules/ant-design-vue/lib/collapse/style/index.less'

import '../node_modules/ant-design-vue/lib/notification/style/index.less'

import '../assets/css/ant_custom.scss'

import _6f6c098b from '../layouts/default.vue'

const layouts = { "_default": _6f6c098b }

export default {
  head: {"title":"Dolcy Interactive - Laravel\u002FVue App Development","meta":[{"http-equiv":"X-UA-Compatible","content":"text\u002Fhtml; charset=UTF-8; IE=edge"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"robots","content":"index, follow"},{"name":"referrer","content":"origin"},{"name":"author","content":"Shaughn Dolcy"},{"hid":"description","name":"description","content":"Dolcy Interactive builds and launches Laravel\u002FVue applications into the stratosphere; fuel included. Laravel, GraphQL, Vue, Nuxt, SaaS"},{"property":"og:title","content":"Dolcy Interactive - Laravel\u002FVue App Development"},{"property":"og:site_name","content":"Dolcy Interactive"},{"property":"og:type","content":"website"},{"property":"og:url","content":"https:\u002F\u002Fdolcy.com"},{"property":"og:image","content":"https:\u002F\u002Fdolcy.com\u002Fandroid-chrome-512x512.png"},{"property":"og:description","content":"Dolcy Interactive builds and launches Laravel\u002FVue applications into the stratosphere; fuel included. Laravel, GraphQL, Vue, Nuxt, SaaS"},{"name":"twitter:card","content":"Dolcy Interactive - Laravel\u002FVue App Development"},{"name":"twitter:site","content":"https:\u002F\u002Fdolcy.com"},{"name":"twitter:title","content":"Dolcy Interactive - Laravel\u002FVue App Development"},{"name":"twitter:description","content":"Dolcy Interactive builds and launches Laravel\u002FVue applications into the stratosphere; fuel included. Laravel, GraphQL, Vue, Nuxt, SaaS"},{"name":"twitter:creator","content":"@dolcy"},{"name":"twitter:image:src","content":"https:\u002F\u002Fdolcy.com\u002Fandroid-chrome-512x512.png"},{"itemprop":"name","content":"Dolcy Interactive - Laravel\u002FVue App Development"},{"itemprop":"description","content":"Dolcy Interactive builds and launches Laravel\u002FVue applications into the stratosphere; fuel included. Laravel, GraphQL, Vue, Nuxt, SaaS"},{"itemprop":"image","content":"https:\u002F\u002Fdolcy.com\u002Fandroid-chrome-512x512.png"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"canonical","href":"https:\u002F\u002Fdolcy.com"}],"style":[],"script":[]},

  render (h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })

    if (this.nuxt.err && NuxtError.layout) {
      this.setLayout(
        typeof NuxtError.layout === 'function'
          ? NuxtError.layout(this.context)
          : NuxtError.layout
      )
    }

    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter (el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      h(NuxtBuildIndicator),
      transitionEl
    ])
  },

  data: () => ({
    isOnline: true,

    layout: null,
    layoutName: ''
  }),

  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this

      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
    // Add $nuxt.context
    this.context = this.$options.context
  },

  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline () {
      return !this.isOnline
    }
  },

  methods: {
    refreshOnlineStatus () {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    async refresh () {
      const pages = getMatchedComponentsInstances(this.$route)

      if (!pages.length) {
        return
      }
      this.$loading.start()

      const promises = pages.map((page) => {
        const p = []

        if (page.$options.fetch) {
          p.push(promisify(page.$options.fetch, this.context))
        }

        if (page.$options.asyncData) {
          p.push(
            promisify(page.$options.asyncData, this.context)
              .then((newData) => {
                for (const key in newData) {
                  Vue.set(page.$data, key, newData[key])
                }
              })
          )
        }

        return Promise.all(p)
      })
      try {
        await Promise.all(promises)
      } catch (error) {
        this.$loading.fail()
        globalHandleError(error)
        this.error(error)
      }
      this.$loading.finish()
    },

    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) {
          this.$loading.fail()
        }
        if (this.$loading.finish) {
          this.$loading.finish()
        }
      }
    },

    setLayout (layout) {
      if(layout && typeof layout !== 'string') {
        throw new Error('[nuxt] Avoid using non-string value as layout property.')
      }

      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },

  components: {
    NuxtLoading
  }
}
