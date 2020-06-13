# Guide

## Installation

With yarn
```
yarn
```

or if you preffer npm
```
npm
```

## Locally

```js
import { Carousel, Slide } from 'vue-snap'

export default {
  components: {
    Carousel,
    Slide
  }
}
```

## Globally

```js
import Vue from 'vue'
import VueSnap from 'vue-snap'

Vue.use(VueSnap)
```

## HTML Markup

```html
<carousel>
  <slide>
    1
  </slide>
  <slide>
    2
  </slide>
  <slide>
    3
  </slide>
</carousel>
```
