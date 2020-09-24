/* eslint-env node */

module.exports = {
  stories: ['../../src/**/*.stories.@(js|mdx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    '@storybook/addon-storysource',
    '@storybook/addon-docs',
    '@storybook/addon-controls'
  ],
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
