# Getting started

## Requirements
- Vue 3
- Node 20+

## Installation

```
npm install vue-snap
```
```
pnpm install vue-snap
```
```
yarn install vue-snap
```
```
bun install vue-snap
```

## Import Globally
```js
import { createApp } from 'vue';
import VueSnap from 'vue-snap';
import 'vue-snap/dist/vue-snap.css';

const myApp = createApp(App);

myApp.use(VueSnap);
```

## Import Locally
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
