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
    const options = {
      root: document.querySelector('.carousel__wrapper'),
      threshold: 0.5
    }

    if (
      !('IntersectionObserver' in window)
      || !('IntersectionObserverEntry' in window)
      || !('intersectionRatio' in window.IntersectionObserverEntry.prototype))
    {
      console.log('interesection not supported')
    }

    this.observer = new IntersectionObserver(entries => {
      const image = entries[0]

      if (image.isIntersecting) {
        console.log('image loaded:', image.target)

        this.intersected = true
        this.observer.disconnect()
      }
    }, options)

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
    width: auto;
    height: 100%;
 }
</style>
