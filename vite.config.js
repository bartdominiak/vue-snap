const svgPlugin = require('vite-plugin-svg')
const path = require('path')

module.exports = {
  plugins: [
    svgPlugin()
  ],
  alias: {
     '/@assets/': path.resolve(__dirname, 'assets'),
     '/@componets/': path.resolve(__dirname, 'components')
   }
}
