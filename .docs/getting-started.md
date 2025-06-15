# Getting started

## Requirements
- **Vue 3**
- **Node.js v20+**

## Installation

::: code-group

```bash [npm]
npm install vue-snap
```

```bash [pnpm]
pnpm install vue-snap
```

```bash [yarn]
yarn install vue-snap
```

:::

## Global Registration
```js
import { createApp } from 'vue';
import VueSnap from 'vue-snap';
import 'vue-snap/dist/vue-snap.css';

const myApp = createApp(App);

myApp.use(VueSnap);
```

## Local Registration
```js
import { Carousel, Slide } from 'vue-snap';
import 'vue-snap/dist/vue-snap.css';

export default {
  components: {
    Carousel,
    Slide
  }
};
```

## Nuxt

### 1. Create a plugin

`plugins/vue-snap.ts`

```ts
import VueSnap from 'vue-snap'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSnap);
});
```

### 2. Import Styles

`nuxt.config.ts`

```ts
export default defineNuxtConfig({
  css: ['vue-snap/dist/vue-snap.css']
});
```
