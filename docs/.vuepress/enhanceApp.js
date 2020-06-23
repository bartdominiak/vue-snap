import 'intersection-observer'

import VueSnap from '../../dist/vue-snap.min'
import lazy from '../../src/directives/lazy'

import VCarousel from '../components/Carousel.vue'

export default ({ Vue }) => {
  Vue.use(VueSnap)
  Vue.component('VCarousel', VCarousel)
  Vue.directive('lazy', lazy)
}
