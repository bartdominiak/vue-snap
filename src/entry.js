import Carousel from './components/Carousel.vue'
import Slide from './components/Slide.vue'

export default {
  install: (app) => {
    app.component('Carousel', Carousel)
    app.component('Slide', Slide)
  }
}

// Also export components directly
export { Carousel, Slide }
