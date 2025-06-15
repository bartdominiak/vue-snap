// .vitepress/theme/index.js
import MyLayout from './Layout.vue';
import HeroCarousel from '../components/HeroCarousel.vue';
import BasicCarousel from '../components/examples/BasicCarousel.vue';
import MultipleCarousel from '../components/examples/MultipleCarousel.vue';
import ImageCarousel from '../components/examples/ImageCarousel.vue';
// import Carousel from '../components/base/Carousel.vue';
// import Slide from '../components/base/Slide.vue';
// import Hero from '../components/Hero.vue';
import DefaultTheme from 'vitepress/theme';
import VueSnap from '../../../dist/vue-snap.es.js';
import '../../../dist/vue-snap.css';
import './custom.css';
import 'virtual:group-icons.css';

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.component('HeroCarousel', HeroCarousel)
    app.component('BasicCarousel', BasicCarousel)
    app.component('MultipleCarousel', MultipleCarousel)
    app.component('ImageCarousel', ImageCarousel)
    // app.component('Carousel', Carousel)
    // app.component('Slide', Slide)
    app.use(VueSnap);
  },
}
