<template>
  <div :class="getClass">
    <div
      ref="vsWrapper"
      class="vs-carousel__wrapper"
    >
      <!-- @slot Slot for Slides -->
      <slot />
    </div>

    <!-- @slot Slot for Navigation -->
    <template v-if="navigation">
      <slot name="navigation">
        <button
          ref="vsNavigationLeft"
          aria-label="Slide left"
          class="
            vs-carousel__navigation
            vs-carousel__navigation--left
          "
          @click="changeSlide(-1)"
        />

        <button
          ref="vsNavigationRight"
          aria-label="Slide right"
          class="
            vs-carousel__navigation
            vs-carousel__navigation--right
          "
          @click="changeSlide(1)"
        />
      </slot>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * Direction (by default Horizontal)
     */
    vertical: {
      type: Boolean,
      default: false
    },
    /**
     * Navigation Arrows
     */
    navigation: {
      type: Boolean,
      default: true
    },
    /**
     * Scroll per page, not per item
     */
    scrollPage: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getClass() {
      return [
        'vs-carousel',
        { 'vs-carousel--vertical': this.vertical }
      ]
    }
  },
  mounted() {
    this.scroll() // Dirty hack to force rerender CSS Scroll Snap position
  },
  methods: {
    changeSlide(direction) {
      const { offsetWidth, offsetHeight } = this.scrollPage ? this.$refs.vsWrapper : this.$children[0].$el

      if (this.vertical) {
        this.scroll(0, direction * offsetHeight)
        return
      }

      this.scroll(direction * offsetWidth, 0)
    },
    scroll(x = 0, y = 0) {
      this.$refs.vsWrapper.scrollBy({ left: x, top: y, behavior: 'smooth' })
    }
  }
}
</script>

<style src="../assets/base.css" />
