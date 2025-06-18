import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "VueSnap",
  description: "CSS Scroll Snap Carousel",
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Examples', link: '/examples' },
      { text: 'API', link: '/api' },
    ],

    sidebar: [
      {
        text: 'VueSnap',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Examples', link: '/examples' },
          { text: 'API', link: '/api' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bartdominiak/vue-snap' }
    ],
    footer: {
      // message: 'Released under the MIT License',
      copyright: 'Copyright © 2025'
    }
  },
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin(),
    ],
  }
})
