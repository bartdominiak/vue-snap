<template>
  <img
    class="image"
    :src="intersected ? src : null"
  />
</template>

<script>
export default {
  props: {
    src: {
      required: true,
      type: String
    }
  },
  data: () => ({
    observer: null,
    intersected: false
  }),
  mounted() {
    this.observer = new IntersectionObserver(entries => {
      const image = entries[0]

      if (image.isIntersecting) {
        this.intersected = true
        this.observer.disconnect()
      }
    })

    this.observer.observe(this.$el)
  },
  destroyed() {
    this.observer.disconnect()
  }
}
</script>

<style lang="scss">
 .image {
    display: block;
    width: 100%;
    height: auto;
 }
</style>
