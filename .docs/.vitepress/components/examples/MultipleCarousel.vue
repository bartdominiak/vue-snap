<template>
  <Carousel class="my-carousel-multiple">
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
    <Slide>
      Slide 6
    </Slide>
    <Slide>
      Slide 7
    </Slide>
    <Slide>
      Slide 8
    </Slide>
    <Slide>
      Slide 9
    </Slide>
    <Slide>
      Slide 10
    </Slide>
  </Carousel>
</template>

<script>
export default {
  name: 'MyComponent',
}
</script>


<style lang="scss">
.my-carousel-multiple {
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

    flex: 0 0 100%;

    @media (min-width: 500px) {
        flex: 0 0 50%;
    }

    @media (min-width: 768px) {
        flex: 0 0 33.33%;
    }

    @media (min-width: 1024px) {
        flex: 0 0 25%;
    }

    @media (min-width: 1280px) and (max-width: 1440px) {
        flex: 0 0 20%;
    }
  }

  .vs-carousel__arrows {
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
