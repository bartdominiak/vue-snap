# vue-snap

> Lightweight Carousel based on CSS Scroll Snap.

<div align="left">
  <img width="750" heigth="250" src="/static/logo-snap.jpg" alt="vue-snap logo">
</div>

[![npm version](https://badge.fury.io/js/vue-snap.svg)](https://badge.fury.io/js/vue-snap)
[![Build Status](https://travis-ci.org/bartdominiak/vue-snap.svg?branch=master)](https://travis-ci.org/bartdominiak/vue-snap)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/vue-snap)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/bartdominiak/vue-snap/blob/master/LICENSE.md)


<a href="https://www.buymeacoffee.com/bartdominiak">
  <img
    src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg"
    alt="Buy Me a Coffee"
    height="32"
  >
</a>

## Table of Contents
- [About](#about)
- [Examples/Stories](#examplesstories)
- [Pros](#pros)
- [Installation & Usage](#installation--usage)
  - [Vue@2 version](#vue2-version)
  - [Vue@3 version](#vue3-version)
- [Examples Usage](#examples-usage)
- [Development](#development)
- [Contribution](#contribution)
- [License](#license)

## About
The idea behind this plugin is to create a fully responsive and well-optimized carousel. We’ve used modern CSS features like [Scroll Snapping](https://developers.google.com/web/updates/2018/07/css-scroll-snap), which allows the carousel wrapper to lock onto specific slides or positions after the user finishes scrolling. This approach helps us minimize the library size by including only the essential parts, and it avoids heavy JavaScript computations or CSS hacks.

## Examples/Stories
- 📕 [Example](https://vue-snap.vercel.app)
- 📺 [Props/Events/Slots](https://vue-snap.vercel.app/?path=/docs/carousel--default)

- **Lightweight** – up to 5–10× smaller than other libraries
- **No calculations or heavy logic** – performance-first approach
- **Fully responsive** – most customization is handled via CSS (e.g. number of visible slides)
- **ESM bundle with tree-shaking** – dead code is automatically eliminated
- **SSR support** – works with frameworks like Nuxt.js 🎉 [More here](https://github.com/bartdominiak/vue-snap/tree/master/examples)
- **Vue 3 & Vue 2 support** 🎉  [More here](#installation--usage)
- **Modern browser support** – compatible with all common browsers [More here](https://caniuse.com/css-snappoints)

## Installation & Usage
### `Vue@3` version
#### Installation

```terminal
  yarn add vue-snap@next // or npm install vue-snap@next
```

#### Usage - Globally

```js
import { createApp } from 'vue'
import App from './App.vue'

import VueSnap from 'vue-snap'
import 'vue-snap/dist/vue-snap.css'

const myApp = createApp(App)

myApp.use(VueSnap)
myApp.mount('#app')
```

#### Usage - Locally

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

### `Vue@2` version
#### Installation

```terminal
  yarn add vue-snap // or npm install vue-snap
```

#### Usage - Globally

```js
import Vue from 'vue'
import VueSnap from 'vue-snap'
import 'vue-snap/dist/vue-snap.css'

Vue.use(VueSnap)
```

#### Usage - Locally

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
Check out [examples](https://github.com/bartdominiak/vue-snap/tree/master/examples) folder for more details.

## Development

Install necessary depandancies
```
  yarn // or npm install
```

Run Storybook for development mode
```
  yarn storybook:dev
```

Release
```
  yarn release
```

## Contribution
If you have a feature request then feel free to start a new issue, or just grab existing one.

## License
MIT
