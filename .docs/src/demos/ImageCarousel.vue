<template>
  <Carousel class="my-carousel-images">
    <Slide v-for="slide in slides" :key="slide">
      <img loading="lazy" src="/cactus.jpg" alt="Example slide description" />
    </Slide>
  </Carousel>
</template>

<script setup>
const slides = [ ...Array(18) ].map((_, i) => i);
</script>

<style lang="scss">
.my-carousel-images {
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
  }

  .vs-carousel__arrows {
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
