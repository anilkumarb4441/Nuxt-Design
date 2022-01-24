
// import { mdbvue } from 'mdbvue'
import * as firebase from "firebase/app";
import 'firebase/auth'
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  components: {
 firebase,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Leadd.com',
    htmlAttrs: {
      lang: 'en'
    }, 
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }, 
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: "stylesheet",  href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",
      integrity: "sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==",
      crossorigin: "anonymous", referrerpolicy:"no-referrer",
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 'bootstrap-css-only/css/bootstrap.min.css',
    // 'mdbvue/lib/css/mdb.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/firebase.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
   // '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
    
  ],
//   Proxy: {
// '/api':{
//   target: 'https://leadd-7db59-default-rtdb.asia-southeast1.firebasedatabase.app/',
//   pathRewrite: {'^/api': '/'}
// }

//   },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vueLoader: {
      transformAssetUrls: {
        // ...
      }
    },
    extend (config, ctx) {
      const vueLoader = config.module.rules.find((loader) => loader.loader === 'vue-loader')
      vueLoader.options.transformToRequire = {
        video: 'src',
        source: 'src'
      }
    },
  
    loaders: {
      vue: {
        transformAssetUrls: {
          audio: 'src',
        },
      },
    },

    
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          esModule: false,
        }
      })
    }
  }
}
