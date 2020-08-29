// Polyfills for v-lazy
import 'intersection-observer'

// VueSnap Lib
import VueSnap from '../../dist/vue-snap.umd'
import '../../dist/vue-snap.css'

// VueSnap Lib
import VueLazy from 'vue-lazy'
import 'vue-lazy/dist/vue-Lazy.css'

// Global Carousel
import VCarousel from '../components/Carousel.vue'

export default ({ Vue }) => {
  Vue.use(VueSnap)
  Vue.use(VueLazy)
  Vue.component('VCarousel', VCarousel)
}
