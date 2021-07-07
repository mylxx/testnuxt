export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: '' },
      // { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // { rel: 'stylesheet', href: '/common/common.css' }

    ],
    script: [
      // { src: '/rem.js', type: 'text/javascript', charset: 'utf-8'}
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    { src: '~assets/css/index.scss', lang: 'scss' },
  ],

  plugins: [
    {src: '@/plugins/extend.js', ssr: false},
    // { src: "~plugins/axios.js"},

  ],

  components: true,

  buildModules: [
  ],
  modules: [
    // "@nuxtjs/axios",
    // "@nuxtjs/proxy"
  ],
  // proxy: {
  //   "/api/": {
  //     target: "https://bbs-api.kbit.kmzscc.com/",
  //     pathRewrite: { "^/api/": "" }
  //   }
  // },

  buildModules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: './assets/css/common.scss'
  },
  build: {
    transpile: [/^element-ui/],
    // styleResources: {
    //   scss: './assets/css/common.scss'
    // }
  }
}
