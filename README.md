# vue-snap
> Lightweight Slider/Carousel based on CSS Scroll Snap and Vue

## About
Please note that this lib is on very early stage. The idea behind this plugin is that to create fully responsive and well optimised Carousel. I created this as PoC for one of my biggest client, who wants to speed up his website, with other than existing solutions like VueCarousel.

## Benefits:
- Lightweight and Fully responsive
- You can set how many slides you want to display per current breakpoint
- There is no calculation or heavy logic inside (Performence)
- All custamization via CSS

## Know issues / limitless
- Not supported in IE
- Carousel not working properly with unknown Slides width
- Missing CSS recalculation for dynamicly added Slides

## Usage
There are two ways to run it.

### Globally

```js
import Vue from 'vue'
import VueSnap from 'vue-snap'

Vue.use(VueSnap)
```

### Locally

```js
import { Carousel, Slide } from 'vue-snap'

export default {
  components: {
    Carousel,
    Slide
  }
}
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

Run in Production build
```
  yarn build
```
