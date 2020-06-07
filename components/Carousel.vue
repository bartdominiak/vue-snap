<template>
  <section class="carousel">
    <slot name="arrows">
      <base-button
        class="
          carousel__arrows
          carousel__arrows--left
        "
        aria-label="Slide left"
        @click="slide(-1)"
      >
        <arrow-icon />
      </base-button>

      <base-button
        class="
          carousel__arrows
          carousel__arrows--right
        "
        aria-label="Slide right"
        @click="slide(1)"
      >
        <arrow-icon />
      </base-button>
    </slot>

    <ul
      class="carousel__wrapper"
      ref="carousel"
    >
      <slot />
    </ul>
  </section>
</template>

<script>
import BaseButton from './Button.vue'
import ArrowIcon from '/@assets/icons/arrow.vue'

export default {
  components: {
    BaseButton,
    ArrowIcon
  },
  methods: {
    slide(direction) {
      this.$refs.carousel.scrollBy(direction, 0)
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/variables';

  .carousel {
    position: relative;
    width: 100%;

    &__wrapper {
      display: flex;
      overflow-y: scroll;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
      margin: 0;
      padding: 0;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: -ms-autohiding-scrollbar;

      // Hide scrollbar
      scrollbar-width: none; // Firefox
      -ms-overflow-style: none; // IE
      &::-webkit-scrollbar {
          display: none; // Chrome, Safari
      }
    }

    &__arrows {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 4px;
      border: 2px solid $gray;

      &:hover,
      &:focus {
        box-shadow: inset 0 0 0 1px $gray;
      }

      &--left {
        left: 0;
      }

      &--right {
        right: 0;

        svg {
          transform: rotate(180deg);
        }
      }
    }
  }
</style>
