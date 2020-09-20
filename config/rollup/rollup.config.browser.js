import base from './rollup.config.base'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'VueSnap',
    file: 'dist/vue-snap.js',
    format: 'iife',
    globals: {
      'vue': 'vue'
    }
  },
  external: [
    'vue'
  ]
})

config.plugins.push(nodeResolve())

export default config
