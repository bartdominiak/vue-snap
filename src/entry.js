import './polyfills'

import Carousel from './components/Carousel/Carousel.vue'
import Slide from './components/Slide/Slide.vue'

const install = app => {
  app.component('carousel', Carousel)
  app.component('slide', Slide)
}

export default {
  install
}

export { Carousel, Slide }
