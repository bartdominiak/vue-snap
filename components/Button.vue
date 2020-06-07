<template>
  <component
    :is="tag"
    class="button"
    :type="tag === 'button' ? type : false"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    /**
    * HTML tag type
    */
    tag: {
      type: String,
      default: 'button'
    },
    /**
    * HTML type
    */
    type: {
      type: String,
      default: 'button'
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/variables';

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 48px;
    min-height: 48px;
    padding: 0;
    background: $white;
    border: 0;
    cursor: pointer;
    outline: none;
  }
</style>
