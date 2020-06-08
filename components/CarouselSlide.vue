<template>
  <li
    ref="slide"
    class="carousel__slide"
  >
    <slot />
  </li>
</template>

<style lang="scss">
  @import '../assets/variables';
  @import '../assets/mixins/mq';

  .carousel {
    &__slide {
      flex: 0 0 100%;
      padding: 0 $spacer--medium;
      scroll-snap-align: start;
      list-style-type: none;

      @include mq($screen-s) {
        flex: 0 0 50%;
        max-width: 50%;
      }

      @include mq($screen-m) {
        flex: 0 0 33.33%;
        max-width: 33.33%;
      }

      @include mq($screen-l) {
        flex: 0 0 25%;
        max-width: 25%;
      }

      @include mq($screen-xl) {
        flex: 0 0 20%;
        max-width: 20%;
        min-width: 20%;
        width: 20%;
      }

      img,
      .image {
        margin: 0 auto;
      }
    }
  }
</style>
