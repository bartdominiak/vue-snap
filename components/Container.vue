<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss">
  @import '../assets/variables';
  @import '../assets/mixins/mq';

  .container {
    max-width: $max-content-width;
    margin: 0 $spacer;

    @include mq($max-content-width + 2 * $spacer) {
      margin: 0 auto;
    }
  }
</style>
