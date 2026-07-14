<template>
  <Carousel
    ref="carousel01"
    class="my-carousel my-carousel-multiple-3"
  >
    <Slide v-for="slide in slides" :key="slide">
      Slide {{ slide + 1 }}
    </Slide>
  </Carousel>
</template>

<script setup>
import { generateSlides } from '../lib/utils'
import { ref, onMounted, onBeforeUnmount } from 'vue';

const SLIDE_COUNT = 18;
const AUTOPLAY_INTERVAL = 1500;

const slides = generateSlides(SLIDE_COUNT);
const carousel01 = ref();

let intervalId = null

onMounted(() => {
  intervalId = setInterval(() => {
    const randNumber = Math.floor(Math.random() * slides.length)
    carousel01.value?.goToSlide(randNumber)
  }, AUTOPLAY_INTERVAL)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<style>
.my-carousel-multiple {
  color: #ffffff;
  font-size: 18px;

  .vs-carousel__wrapper {
    height: 200px;
  }

  .vs-carousel__slide {
    flex: 0 0 100%;

    @media (min-width: 500px) {
        flex: 0 0 50%;
    }

    @media (min-width: 768px) {
        flex: 0 0 33.33%;
    }

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
