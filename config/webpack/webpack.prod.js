const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'vue-snap.min.js'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      sourceMap: false
    })]
  }
})
