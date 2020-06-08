<template>
  <img
    :src="isIntersected ? src : false"
    class="image"
  />
</template>

<script>
import observer from '../modules/observer'

export default {
  props: {
    id: {
      type: String,
      required: false
    },
    src: {
      type: String,
      required: true
    }
  },
  data: () => ({
    observer,
    isIntersected: false
  }),
  mounted() {
    const config = {
      root: document.querySelector(`${this.id} .carousel__wrapper`)
    }

    const instersectingFunc = () => {
      this.isIntersected = true
      this.observerImage.disconnect()
    }

    this.observerImage = observer(config, instersectingFunc)
    this.observerImage.observe(this.$el)
  },
  destroyed() {
    this.observerImage.disconnect()
  }
}
</script>

<style lang="scss">
 .image {
    display: block;
    width: auto;
    height: 100%;
 }
</style>
