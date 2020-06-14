# Guide

## Installation

```
yarn
# or if you preffer npm
npm
```

## Locally

Using only in specific component

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

Using `<carousel />` and `<slide />` components globally across your Vue Application

```js
import Vue from 'vue'
import VueSnap from 'vue-snap'

Vue.use(VueSnap)
```

## HTML Markup
Then you can use it in your HTML markup.

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
