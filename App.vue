<template>
  <base-container>
    <ul class="preview">
      <li class="preview__item">
        <h1>#1 Carousel</h1>
        <carousel>
          <carousel-slide
            v-for="slide in carouselMock"
            :key="slide.id"
            tabIndex="0"
          >
            <base-image :src="slide.image" />
          </carousel-slide>
        </carousel>
      </li>
    </ul>
  </base-container>
</template>

<script>
import BaseContainer from './components/Container.vue'
import BaseImage from './components/Image.vue'
import Carousel from './components/Carousel.vue'
import CarouselSlide from './components/CarouselSlide.vue'
import carouselMock from './mocks/carousel.json'

export default {
  data: () => ({
    carouselMock
  }),
  components: {
    BaseContainer,
    BaseImage,
    Carousel,
    CarouselSlide
  }
}
</script>

<style lang="scss">
  @import './assets/variables';

  .preview {
    padding: 0;

    &__item {
      list-style-type: none;
      padding: 0 0 $spacer--large;
    }
  }
</style>
