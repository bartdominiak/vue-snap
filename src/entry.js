import Carousel from './components/Carousel.vue'
import Slide from './components/Slide.vue'

export const VueSnap = {
  install: (app) => {
    app.component('Carousel', Carousel)
    app.component('Slide', Slide)
  }
}

export { Carousel, Slide }

export default VueSnap
