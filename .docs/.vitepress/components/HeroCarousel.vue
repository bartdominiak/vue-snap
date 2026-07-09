<template>
  <Carousel
    autoplay
    ref="carousel03"
    class="custom-carousel"
    @left-bound="onLeftBounded"
    @right-bound="onRightBounded"
  >
    <Slide v-for="slide in slides" :key="slide">
      Slide {{ slide + 1 }}
    </Slide>
  </Carousel>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const slides = [ ...Array(12) ].map((_, i) => i);

const carousel03 = ref();
const direction = ref(1);

const onLeftBounded = () => {
  direction.value = 1;
};

const onRightBounded = () => {
  direction.value = -1;
};
</script>

<style lang="scss">
.vs-carousel {
    // Resets CSS
  ul.vs-carousel__wrapper,
  ol.vs-carousel__wrapper { margin: 0; padding: 0; list-style: none;}
  li.vs-carousel__slide   { margin: 0; padding: 0; }
}

.custom-carousel {
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 1px;

  .vs-carousel__wrapper {
    height: 200px;
  }

  .vs-carousel__slide {
    &:nth-child(n+1) {
      background: #18794e;
    }

    &:nth-child(2n+1) {
      background: #299764;
    }
  }

  .vs-carousel__arrows {
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
