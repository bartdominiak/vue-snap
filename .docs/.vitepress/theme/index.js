// .vitepress/theme/index.js
import MyLayout from './Layout.vue';
import HeroCarousel from '../components/HeroCarousel.vue';
import BasicCarousel from '../components/examples/BasicCarousel.vue';
import MultipleCarousel from '../components/examples/MultipleCarousel.vue';
import ImageCarousel from '../components/examples/ImageCarousel.vue';
import PreviewCarousel from '../components/examples/PreviewCarousel.vue';
import AutoplayCarousel from '../components/examples/AutoplayCarousel.vue';
import RandomCarousel from '../components/examples/RandomCarousel.vue';
import DefaultTheme from 'vitepress/theme';
import VueSnap from 'vue-snap';
import 'vue-snap/dist/vue-snap.css';
import './custom.css';
import 'virtual:group-icons.css';

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.component('HeroCarousel', HeroCarousel);
    app.component('BasicCarousel', BasicCarousel);
    app.component('MultipleCarousel', MultipleCarousel);
    app.component('ImageCarousel', ImageCarousel);
    app.component('PreviewCarousel', PreviewCarousel);
    app.component('AutoplayCarousel', AutoplayCarousel);
    app.component('RandomCarousel', RandomCarousel);
    app.use(VueSnap);
  },
}
