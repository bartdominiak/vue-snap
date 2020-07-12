// Polyfills for v-lazy
import 'intersection-observer'

// VueSnap Lib
import '../../dist/vue-snap.css'
import VueSnap from '../../dist/vue-snap.umd'

// Global Carousel
import VCarousel from '../components/Carousel.vue'

export default ({ Vue }) => {
  Vue.use(VueSnap)
  Vue.component('VCarousel', VCarousel)
}
