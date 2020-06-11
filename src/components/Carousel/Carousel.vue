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

    <template v-if="navigation">
      <slot name="navigation">
        <button
          ref="vsNavLeft"
          class="
            vs-carousel__navigation
            vs-carousel__navigation--left
          "
          @click="changeSlide(-1)"
        />

        <button
          ref="vsNavRight"
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
      let slideElement = this.$children[0].$el
      let step = 0

      if (this.vertical) {
        step = slideElement.offsetHeight
        this.$refs.vsWrapper.scrollBy(0, step * direction)
        return
      }

      step = slideElement.offsetWidth
      this.$refs.vsWrapper.scrollBy(step * direction, 0)
    }
  }
}
</script>

<style lang="scss" src="./_carousel.scss" />
