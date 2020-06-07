<template>
  <li class="carousel__slide">
    <slot />
  </li>
</template>

<style lang="scss">
  @import '../assets/variables';
  @import '../assets/mixins/mq';

  .carousel {
    &__slide {
      flex: 1 0 100%;
      padding: 0 $spacer--medium;
      scroll-snap-align: start;
      list-style-type: none;

      @include mq($screen-s) {
        flex: 1 0 50%;
        max-width: 50%;
      }

      @include mq($screen-m) {
        flex: 1 0 33.33%;
        max-width: 33.33%;
      }

      @include mq($screen-l) {
        flex: 1 0 25%;
        max-width: 25%;
      }

      @include mq($screen-xl) {
        flex: 1 0 20%;
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
