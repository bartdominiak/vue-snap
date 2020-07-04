import vue from 'rollup-plugin-vue'
import babel from '@rollup/plugin-babel'
import cjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import analyze from 'rollup-plugin-analyzer'

export default {
  input: 'src/entry.js',
  plugins: [
    vue(),
    babel({ babelHelpers: 'bundled', exclude: 'node_modules/**', }),
    cjs(),
    terser(),
    analyze({ summaryOnly: true, limit: 0 })
  ]
}
