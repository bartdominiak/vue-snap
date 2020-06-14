// Polyfill: Intersection observer (This is not a part vue-snap)
import 'intersection-observer'

import Carousel from '../components/Carousel.vue'

// Dirty Hack for non-working automatically registering components
// Issue: https://github.com/vuejs/vuepress/issues/1173#issuecomment-576155795
export default ({ Vue }) => {
  Vue.component('VCarousel', Carousel);
}
