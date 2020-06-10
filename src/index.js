import Carousel from './components/Carousel/Carousel.vue'
import Slide from './components/Slide/Slide.vue'

const install = Vue => {
  Vue.component('carousel', Carousel)
  Vue.component('slide', Slide)
}

export default {
  install
}

export { Carousel, Slide }
