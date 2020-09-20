[![npm version](https://badge.fury.io/js/vue-snap.svg)](https://badge.fury.io/js/vue-snap)
[![Build Status](https://travis-ci.org/bartdominiak/vue-snap.svg?branch=master)](https://travis-ci.org/bartdominiak/vue-snap)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/vue-snap)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/bartdominiak/vue-snap/blob/master/LICENSE.md)

<div align="left">
  <img width="750" heigth="250" src="/static/logo-snap.jpg" alt="vue-snap logo">
</div>

# vue-snap
> Lightweight Slider/Carousel based on CSS Scroll Snap.

## Table of Contents
- [About](#about)
- [Storybook & Docs](#stories--docs)
- [Instalation & Usage](#installation--usage)
  - [for Vue@2.0](#if-youre-using-vue20)
  - [for Vue@3.0](#if-youre-using-vue30)
- [Examples](#examples))
- [Contribution](#contribution)
- [License](#license)

## About
Idea behind this plugin is that to create fully responsive and well optimised Carousel.

## Stories & Docs
- 📕 [Stories](https://vue-snap.surge.sh)
- 📺 [Props/Events](https://vue-snap.surge.sh/?path=/docs/carousel--default)
- 📖 [Docs (Guide)](https://bartdominiak.github.io/vue-snap)

## Benefits:
- We're supporting `vue@3.0` 🎉 🎉 🎉 (Read more [here](#if-youre-using-vue30))
- Lightweight (5-10x times lighter than other libs)
- There is no calculation or heavy logic inside (Performence)
- Mostly all custamization via CSS!
- You can set how many slides you want to display per current breakpoint (via css)
- Fully responsive

## Installation & Usage
### If You're using `Vue@3.0`
#### Instalation

```js
  yarn add vue-snap@next
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

### If You're using `Vue@2.0`
#### Instalation

```js
  yarn add vue-snap
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

### Examples
Check out [examples](https://github.com/bartdominiak/vue-snap/tree/master/examples) folder for more details.

## Development

Install necessary depandancies with yarn or npm
```
  yarn or npm
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
Feel free to grab an issue from the list, just remember to squash your commits before merge.

## License
MIT
