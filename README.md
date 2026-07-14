# vue-snap

> 🌿 Modern, lightweight Vue 3 Carousel powered by CSS Scroll Snap.

<div align="left">
  <img width="750" height="250" src="/static/logo-snap.jpg" alt="vue-snap logo">
</div>

[![npm version](https://badge.fury.io/js/vue-snap.svg?icon=si%3Anpm)](https://badge.fury.io/js/vue-snap)
[![bundle size](https://deno.bundlejs.com/badge?q=vue-snap)](https://bundlejs.com/?q=vue-snap)
[![license](https://img.shields.io/github/license/bartdominiak/vue-snap)](https://github.com/bartdominiak/vue-snap/blob/master/LICENSE.md)
[![MadeWithVueJs.com shield](https://madewithvuejs.com/storage/repo-shields/5792-shield.svg)](https://madewithvuejs.com/p/vuesnap/shield-link)

## Table of Contents
- [Docs](https://vue-snap.vercel.app/)
- [About](#about)
- [Features](#features)
- [Installation & Usage](#installation--usage)
- [Examples usage](#examples-usage)
- [Contribution](#contribution)
- [License](#license)

## About
The idea behind this plugin is to create a fully responsive and well-optimized carousel. We’ve used modern CSS features like [Scroll Snapping](https://developers.google.com/web/updates/2018/07/css-scroll-snap), which allows the carousel wrapper to lock onto specific slides or positions after the user finishes scrolling. This approach helps us minimize the library size by including only the essential parts, and it avoids heavy JavaScript computations or CSS hacks.

## Features
- 📕 [Examples](https://vue-snap.vercel.app/examples)
- 📺 [Props/Events/Slots](https://vue-snap.vercel.app/api)

- **Lightweight** – Only 5KB, fast and efficient.
- **No calculations or heavy logic** – performance-first approach
- **Fully responsive** – most customization is handled via CSS (e.g. number of visible slides)
- **ESM bundle with tree-shaking** – dead code is automatically eliminated
- **TypeScript support** – ships with bundled type declarations out of the box
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

### Usage - Locally (recommended)

Import `Carousel` and `Slide` directly where you need them — this keeps the rest of your app free of unused code.

```vue
<script setup>
import { Carousel, Slide } from 'vue-snap'
import 'vue-snap/style.css'
</script>

<template>
  <Carousel>
    <Slide v-for="item in items" :key="item.id">
      {{ item.title }}
    </Slide>
  </Carousel>
</template>
```

### Usage - Globally

Registers `Carousel` and `Slide` once, so they're available in every component without importing them again.

```js
import { createApp } from 'vue'
import App from './App.vue'

import VueSnap from 'vue-snap'
import 'vue-snap/style.css'

const myApp = createApp(App)

myApp.use(VueSnap)
myApp.mount('#app')
```

### Props, events & methods
The most commonly used ones — see the [full API reference](https://vue-snap.vercel.app/api) for everything else.

| `Carousel` prop     | Type      | Default   | Description                                  |
|----------------------|-----------|-----------|-----------------------------------------------|
| `tag`                | `string`  | `'ul'`    | Tag rendered for the slides wrapper           |
| `autoplay`           | `boolean` | `false`   | Automatically advance slides                  |
| `autoplayInterval`   | `number`  | `3000`    | Delay in ms between autoplay advances         |
| `hideArrows`         | `boolean` | `false`   | Hide the navigation arrows entirely           |
| `hideArrowsOnBound`  | `boolean` | `false`   | Hide an arrow when its side is out of bounds  |

| `Carousel` event | Payload   | Fires when                          |
|-------------------|-----------|--------------------------------------|
| `slideChange`     | `number`  | The active slide index changes       |
| `leftBound`       | `boolean` | The carousel reaches the first slide |
| `rightBound`      | `boolean` | The carousel reaches the last slide  |

Use a template ref to call `goToSlide(index)` / `changeSlide(direction)` imperatively:

```vue
<script setup>
import { useTemplateRef } from 'vue'
import { Carousel, Slide } from 'vue-snap'
import 'vue-snap/style.css'

const carousel = useTemplateRef('carousel')
</script>

<template>
  <Carousel ref="carousel">
    <Slide v-for="item in items" :key="item.id">{{ item.title }}</Slide>
  </Carousel>
  <button @click="carousel.goToSlide(0)">Back to start</button>
</template>
```

## Examples usage
Check out the [examples](https://github.com/bartdominiak/vue-snap/tree/master/examples) folder for full Vite/Nuxt projects, or the [documentation](https://vue-snap.vercel.app/) for the complete API.

## Contribution
If you have a feature request then feel free to start a new issue, or just grab existing one.

## License
MIT
