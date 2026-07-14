<template>
  <div
    class="vs-carousel"
    @mouseenter="pauseAutoplay"
    @mouseleave="resumeAutoplay"
  >
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
      v-if="!hideArrows"
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
import { ref, toRef } from 'vue';
import { useCarousel } from '../hooks/useCarousel';

interface CarouselProps {
  tag?: string;
  hideArrows?: boolean;
  hideArrowsOnBound?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  i18n?: {
    slideLeft: string;
    slideRight: string;
  };
}

const props = withDefaults(defineProps<CarouselProps>(), {
  tag: 'ul',
  hideArrows: false,
  hideArrowsOnBound: false,
  autoplay: false,
  autoplayInterval: 3000,
  i18n: () => ({
    slideLeft: 'Slide left',
    slideRight: 'Slide right',
  }),
});

const emit = defineEmits([
  'mounted',
  'slideChange',
  'leftBound',
  'rightBound',
  'autoplay',
]);
const vsWrapper = ref(null);

const {
  changeSlide,
  goToSlide,
  isBoundLeft,
  isBoundRight,
  // biome-ignore lint/correctness/noUnusedVariables: used in <template> via @mouseenter
  pauseAutoplay,
  // biome-ignore lint/correctness/noUnusedVariables: used in <template> via @mouseleave
  resumeAutoplay,
} = useCarousel(emit, vsWrapper, {
  autoplay: toRef(props, 'autoplay'),
  autoplayInterval: toRef(props, 'autoplayInterval'),
});

defineExpose({
  changeSlide,
  goToSlide,
  isBoundLeft,
  isBoundRight,
});
</script>

<style lang="scss" src="./carousel.scss"></style>
