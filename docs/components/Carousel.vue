<template>
  <component
    v-if="Carousel"
    :is="Carousel"
    scroll-page
    class="example-multiple"
  >
    <component
      v-if="Slide"
      :is="Slide"
      v-for="item in 25"
      :key="item"
    >
      <img
        v-lazy="$withBase('/girl.jpg')"
        class="image"
        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
      >
    </component>
  </component>
</template>

<script>
  // TODO: Fix this ugly loading after adding SSR Support to VueSnap
  // Custom directive
  import lazy from '../../src/directives/lazy'

  export default {
    directives: {
      lazy
    },
    data: () => ({
      Carousel: false,
      Slide: false
    }),
    mounted () {
      import('../../dist/vue-snap.min').then(module => {
        this.Carousel = module.Carousel
        this.Slide = module.Slide
      })
    }
  }
</script>

<style lang="scss">
.example-multiple {
  .vs-carousel__slide {
    flex: 0 0 100%;

    @media (min-width: 500px) {
      flex: 0 0 50%;
    }

    @media (min-width: 1024px) {
      flex: 0 0 33.33%;
    }

    @media (min-width: 1280px) and (max-width: 1440px) {
      flex: 0 0 25%;
    }
  }
}

.image {
  transition: all 0.5s ease-in-out;
  opacity: 0;

  &.lazyloaded {
      opacity: 1;
  }
}
</style>
