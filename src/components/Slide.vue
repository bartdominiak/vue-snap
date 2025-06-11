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

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    /**
     * Custom tag
     */
    tag: {
      type: String,
      default: 'li'
    }
  }
});
</script>
