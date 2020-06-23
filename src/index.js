// Polyfill: SmoothScroll
import { polyfill } from 'seamless-scroll-polyfill/dist/esm/Element.scrollBy'

if (
  typeof window !== 'undefined'
  && typeof document !== 'undefined'
  && !('scrollBehavior' in document.documentElement.style)
) {
  polyfill()
}

import Carousel from './components/Carousel.vue'
import Slide from './components/Slide.vue'

const install = Vue => {
  Vue.component('carousel', Carousel)
  Vue.component('slide', Slide)
}

export default {
  install
}

export { Carousel, Slide }
