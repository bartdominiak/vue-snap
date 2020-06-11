module.exports = {
  stories: ['../../src/**/*.stories.@(js|mdx)'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader'
      ]
    })

    return config
  }
}
