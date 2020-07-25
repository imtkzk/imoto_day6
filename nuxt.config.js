
const base_url = 'http://localhost:3000/'
const kikagaku_url = 'https://www.kikagaku.co.jp/'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: '株式会社キカガク | 公式ホームページ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: `${base_url}js/lib/jquery-3.4.1.js` },
      { src: `${base_url}js/lib/countTo.js` },
      { src: `${base_url}js/lib/inview.js` },
      { src: `${base_url}js/lib/ofi.js` },
      { src: `${base_url}js/lib/pf.intrinsic.js` },
      { src: `${base_url}js/lib/picturefill.js` },
      { src: `${base_url}js/lib/pf.intrinsic.js` },
      { src: `${base_url}js/lib/swiper.js` },
      { src: `${base_url}js/front.js` },
      { src: `${base_url}js/common.js` },
      { src: `${base_url}js/loading.js` },
    ]
  },

  env: {
    kikagaku_url: kikagaku_url,
    base_url: base_url
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/reset.css',
    '~assets/css/common.css',
    '~assets/css/lib/swiper.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~plugins/ui',
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  generate: {
    dir: 'docs'
  }
}
