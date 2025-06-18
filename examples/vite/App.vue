<template>
  <Carousel class="my-carousel">
    <Slide v-for="slide in slides" :key="slide">
      Slide {{ slide + 1 }}
    </Slide>
  </Carousel>
</template>

<script setup>
const slides = [ ...Array(18) ].map((_, i) => i);
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');

body {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    color: #fff;
    margin: 1px;
}

.my-carousel {
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
    background-color: rgba(255, 255, 255, 0.1);
  }
}
</style>
