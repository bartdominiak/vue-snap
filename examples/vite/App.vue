<template>
  <Carousel class="my-carousel">
    <Slide>
      Slide 1
    </Slide>
    <Slide>
      Slide 2
    </Slide>
    <Slide>
      Slide 3
    </Slide>
    <Slide>
      Slide 4
    </Slide>
    <Slide>
      Slide 5
    </Slide>
  </Carousel>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');

body {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    color: #fff;
}

.my-carousel {
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
    color: #fff;
  }
}
</style>
