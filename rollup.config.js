import vue from 'rollup-plugin-vue'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/index.js',
    output: {
      exports: 'named',
      name: 'VueSnap',
      file: 'dist/vue-snap.umd.js',
      format: 'umd',
      globals: {
        'seamless-scroll-polyfill/dist/esm/Element.scrollBy': 'Element_scrollBy'
      },
    },
    plugins: [
      vue(),
      babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' })
    ],
    external: [
      'seamless-scroll-polyfill',
    ]
  },
  {
    input: 'src/index.js',
    output: {
      exports: 'named',
      name: 'VueSnap',
      file: 'dist/vue-snap.umd.min.js',
      format: 'umd',
      globals: {
        'seamless-scroll-polyfill/dist/esm/Element.scrollBy': 'Element_scrollBy'
      },
    },
    plugins: [
      vue(),
      babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
      terser()
    ],
    external: [
      'seamless-scroll-polyfill',
    ]
  }
]
