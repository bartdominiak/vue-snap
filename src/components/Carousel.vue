<template>
  <div class="vs-carousel">
    <component
      :is="tag"
      ref="vsWrapper"
      class="vs-carousel__wrapper"
    >
      <!-- @slot Slot for Slides -->
      <slot />
    </component>

    <!-- @slot Slot for Arrows -->
    <slot
      name="arrows"
      v-bind="{ changeSlide, isBoundLeft, isBoundRight }"
    >
      <button
        v-show="hideArrowsOnBound ? !isBoundLeft : true"
        type="button"
        :aria-label="i18n.slideLeft"
        :disabled="isBoundLeft"
        class="vs-carousel__arrows vs-carousel__arrows--left"
        @click="changeSlide(-1)"
      >
        ←
      </button>

      <button
        v-show="hideArrowsOnBound ? !isBoundRight : true"
        type="button"
        :aria-label="i18n.slideRight"
        :disabled="isBoundRight"
        class="vs-carousel__arrows vs-carousel__arrows--right"
        @click="changeSlide(1)"
      >
        →
      </button>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCarousel } from '../hooks/useCarousel';

interface CarouselProps {
  tag?: string;
  hideArrowsOnBound?: boolean;
  i18n?: {
    slideLeft: string;
    slideRight: string;
  };
}

withDefaults(defineProps<CarouselProps>(), {
  tag: 'ul',
  hideArrowsOnBound: false,
  i18n: () => ({
    slideLeft: 'Slide left',
    slideRight: 'Slide right',
  }),
});

const emit = defineEmits(['mounted', 'slideChange', 'leftBound', 'rightBound']);
const vsWrapper = ref(null);

const { changeSlide, goToSlide, isBoundLeft, isBoundRight } = useCarousel(emit, vsWrapper);

defineExpose({
  changeSlide,
  goToSlide,
});
</script>

<style lang="scss">
.vs-carousel {
  position: relative;

  &__wrapper {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__slide {
    flex: 0 0 100%;
    height: 100%;
    scroll-snap-align: start;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    margin: 0;
    padding: 0;
  }

  &__arrows {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 48px;
    height: 48px;
    padding: 0;
    cursor: pointer;
    border: 0;

    &:disabled {
      cursor: not-allowed;
    }

    &--left {
      left: 0;
    }

    &--right {
      right: 0;
    }
  }
}
</style>
