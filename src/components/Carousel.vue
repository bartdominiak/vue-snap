<template>
  <div
    ref="vsCarousel"
    :class="getClass"
  >
    <div
      ref="vsWrapper"
      class="vs-carousel__wrapper"
    >
      <slot />
    </div>

    <slot
      v-if="navigation"
      name="navigation"
    >
      <button
        ref="vsNavigationLeft"
        class="
          vs-carousel__navigation
          vs-carousel__navigation--left
        "
        @click="changeSlide(-1)"
      />

      <button
        ref="vsNavigationRight"
        class="
          vs-carousel__navigation
          vs-carousel__navigation--right
        "
        @click="changeSlide(1)"
      />
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    vertical: {
      type: Boolean,
      default: false
    },
    navigation: {
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
  methods: {
    changeSlide(direction) {
      if (this.vertical) {
        this.slide(0, direction * this.$children[0].$el.offsetHeight)
        return
      }

      this.slide(direction * this.$children[0].$el.offsetWidth, 0)
    },
    slide(x = 0, y = 0) {
      this.$refs.vsWrapper.scrollBy(x, y)
    }
  },
  mounted() {
    this.slide() // Dirty hack to force rerender CSS Scroll Snap position
  }
}
</script>

<style lang="scss" src="../assets/_base.scss" />
