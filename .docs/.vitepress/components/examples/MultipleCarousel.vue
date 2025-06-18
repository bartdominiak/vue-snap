<template>
  <Carousel class="my-carousel-multiple">
    <Slide v-for="slide in slides" :key="slide">
      Slide {{ slide + 1 }}
    </Slide>
  </Carousel>
</template>

<script setup>
const slides = [ ...Array(18) ].map((_, i) => i);
</script>

<style lang="scss">
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
