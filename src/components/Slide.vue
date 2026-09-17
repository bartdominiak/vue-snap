<script setup lang="ts">
interface SlideProps {
  /**
   * Custom tag
   */
  tag?: string;
}

withDefaults(defineProps<SlideProps>(), {
  tag: 'li',
});
</script>

<template>
  <component
    :is="tag"
    class="vs-carousel__slide"
    tabindex="0"
  >
    <slot />
  </component>
</template>
