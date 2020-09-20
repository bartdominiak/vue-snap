import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'VueSnap',
    file: 'dist/vue-snap.umd.js',
    format: 'umd',
    globals: {
      'vue': 'vue',
      'seamless-scroll-polyfill/dist/esm/Element.scrollBy': 'Element_scrollBy',
      'lodash/debounce': '_.debounce'
    }
  },
  external: [
    'vue'
  ]
})

export default config
