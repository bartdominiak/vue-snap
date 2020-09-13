[![npm version](https://badge.fury.io/js/vue-snap.svg)](https://badge.fury.io/js/vue-snap)
[![Build Status](https://travis-ci.org/bartdominiak/vue-snap.svg?branch=master)](https://travis-ci.org/bartdominiak/vue-snap)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/vue-snap)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/bartdominiak/vue-snap/blob/master/LICENSE.md)

<div align="center">
  <img width="150" heigth="150" src="/static/snap.jpg" alt="vue-snap logo">
</div>

# vue-snap
> Lightweight Slider/Carousel based on CSS Scroll Snap.

## About
Please note that this lib is on very early stage. The idea behind this plugin is that to create fully responsive and well optimised Carousel. I created this as PoC for one of my biggest client, who wants to speed up his website.

## Storybook & Docs
- 📕 [Stories](https://vue-snap.surge.sh)
- 📺 [Props/Event](https://vue-snap.surge.sh/?path=/story/carousel-docs--page)
- 📖 [Docs (Guide)](https://bartdominiak.github.io/vue-snap)

## Benefits:
- Lightweight (5-10x times lighter than other libs)
- There is no calculation or heavy logic inside (Performence)
- Mostly all custamization via CSS!
- You can set how many slides you want to display per current breakpoint (via css)
- Fully responsive

## Usage
There are two ways to use it.

### Globally

```js
import Vue from 'vue'
import VueSnap from 'vue-snap'
import 'vue-snap/dist/vue-snap.css'

Vue.use(VueSnap)
```

### Locally

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

### Unit Testing with Jest

Make sure to whitelist `vue-snap` from the `transformIgnorePattern`. Add following configuation in `test/unit/jest.conf.js`:

```diff
transformIgnorePatterns: [
  '/node_modules(?![\\\\/]vue-snap[\\\\/])/'
],
```

## Development

Install necessary depandancies with yarn or npm
```
  yarn
```

Run in Development mode
```
  yarn dev
```

Run in Production mode
```
  yarn build
```

Run Storybook for preview
```
  yarn storybook:dev
```

## Contribution
Feel free to grab an issue from the list, just remember to squash your commits before merge.
