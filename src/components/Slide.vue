<template>
  <component
    :is="tag"
    ref="vsSlide"
    class="vs-carousel__slide"
    tabindex="0"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">

defineProps({
  /**
   * Custom tag
   */
  tag: {
    type: String,
    default: 'li'
  }
});

</script>
