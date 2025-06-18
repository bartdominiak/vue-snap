<template>
  <Carousel class="custom-carousel">
    <Slide v-for="slide in slides" :key="slide">
      Slide {{ slide + 1 }}
    </Slide>
  </Carousel>
</template>

<script setup>
const slides = [ ...Array(18) ].map((_, i) => i);
</script>


<style lang="scss">
.custom-carousel {
  color: #ffffff;
  font-size: 18px;

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
