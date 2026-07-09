# vue-snap

> 🌿 Modern, lightweight Vue 3 Carousel powered by CSS Scroll Snap.

<div align="left">
  <img width="750" heigth="250" src="/static/logo-snap.jpg" alt="vue-snap logo">
</div>

[![npm version](https://badge.fury.io/js/vue-snap.svg?icon=si%3Anpm)](https://badge.fury.io/js/vue-snap)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/vue-snap)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/bartdominiak/vue-snap/blob/master/LICENSE.md)
[![MadeWithVueJs.com shield](https://madewithvuejs.com/storage/repo-shields/5792-shield.svg)](https://madewithvuejs.com/p/vuesnap/shield-link)

## Table of Contents
- [Docs](https://vue-snap.vercel.app/)
- [About](#about)
- [Examples/Stories](#examplesstories)
- [Installation & Usage](#installation--usage)
- [Examples Usage](#examples-usage)
- [Contribution](#contribution)
- [License](#license)

## About
The idea behind this plugin is to create a fully responsive and well-optimized carousel. We’ve used modern CSS features like [Scroll Snapping](https://developers.google.com/web/updates/2018/07/css-scroll-snap), which allows the carousel wrapper to lock onto specific slides or positions after the user finishes scrolling. This approach helps us minimize the library size by including only the essential parts, and it avoids heavy JavaScript computations or CSS hacks.

## Examples/Stories
- 📕 [Example](https://vue-snap.vercel.app/examples.html)
- 📺 [Props/Events/Slots](https://vue-snap.vercel.app/api.html)

- **Lightweight** – Only 4KB, fast and efficient.
- **No calculations or heavy logic** – performance-first approach
- **Fully responsive** – most customization is handled via CSS (e.g. number of visible slides)
- **ESM bundle with tree-shaking** – dead code is automatically eliminated
- **SSR support** – works with frameworks like Nuxt.js 🎉 [More here](https://github.com/bartdominiak/vue-snap/tree/master/examples)
- **Vue 3 support** 🎉  [More here](#installation--usage)
- **Modern browser support** – compatible with all common browsers [More here](https://caniuse.com/css-snappoints)

## Installation & Usage
### Installation

```terminal
  bun add vue-snap
  pnpm add vue-snap
  yarn add vue-snap
  npm install vue-snap
```

### Usage - Globally

```js
import { createApp } from 'vue'
import App from './App.vue'

import VueSnap from 'vue-snap'
import 'vue-snap/dist/vue-snap.css'

const myApp = createApp(App)

myApp.use(VueSnap)
myApp.mount('#app')
```

### Usage - Locally

```js
import { Carousel, Slide } from 'vue-snap'
import 'vue-snap/dist/vue-snap.css'

export default {
  components: {
    Carousel,
    Slide
  }
}
```

## Examples usage
Check out [examples](https://github.com/bartdominiak/vue-snap/tree/master/examples) folder for more details or [documentation](https://vue-snap.vercel.app/)

## Contribution
If you have a feature request then feel free to start a new issue, or just grab existing one.

## License
MIT
