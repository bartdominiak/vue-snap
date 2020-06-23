<template>
  <ClientOnly>
    <carousel
      scroll-page
      class="example-multiple"
    >
      <slide
        v-for="item in 25"
        :key="item"
      >
        <img
          v-lazy="$withBase('/girl.jpg')"
          class="image"
          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        >
      </slide>
    </carousel>
  </ClientOnly>
</template>

<script>
  import lazy from '../../src/directives/lazy'

  export default {
    directives: {
      lazy
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
