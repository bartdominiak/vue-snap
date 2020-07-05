<template>
  <div class="vs-carousel">
    <div
      ref="vsWrapper"
      class="vs-carousel__wrapper"
    >
      <!-- @slot Slot for Slides -->
      <slot />
    </div>

    <!-- @slot Slot for Navigation -->
    <slot name="navigation">
      <button
        v-show="!boundLeft"
        aria-label="Slide left"
        class="
          vs-carousel__navigation
          vs-carousel__navigation--left
        "
        @click="changeSlide(-1)"
      >
        ←
      </button>

      <button
        v-show="!boundRight"
        aria-label="Slide right"
        class="
          vs-carousel__navigation
          vs-carousel__navigation--right
        "
        @click="changeSlide(1)"
      >
        →
      </button>
    </slot>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
import { approximatelyEqual } from '../utils'

const SCROLL_DEBOUNCE = 100
const RESIZE_DEBOUNCE = 410

export default {
  data: () => ({
    boundLeft: true,
    boundRight: false,
    slidesWidth: [],
    slidesCount: 0,
    wrapperScrollWidth: 0,
    wrapperVisibleWidth: 0,
    currentPage: 0,
    currentPos: 0,
    step: 1
  }),
  mounted() {
    this.calcWrapperWidth()
    this.calcSlidesWidth()
    this.calcSlidesCount()

    this.$refs.vsWrapper.addEventListener('scroll', debounce(this.eventScroll, SCROLL_DEBOUNCE))
    window.addEventListener('resize', debounce(this.eventResize, RESIZE_DEBOUNCE), false)
  },
  beforeDestroy() {
    this.$refs.vsWrapper.removeEventListener('scroll', debounce(this.eventScroll, SCROLL_DEBOUNCE))
    window.removeEventListener('resize', debounce(this.eventResize, RESIZE_DEBOUNCE), false)
  },
  methods: {
    calcBounds() {
      this.boundLeft = this.currentPos === 0
      this.boundRight = this.wrapperScrollWidth - this.wrapperVisibleWidth === this.currentPos
    },
    calcWrapperWidth() {
      this.wrapperScrollWidth = this.$refs.vsWrapper.scrollWidth
      this.wrapperVisibleWidth = this.$refs.vsWrapper.offsetWidth
    },
    calcSlidesCount() {
      this.slidesCount = this.$refs.vsWrapper.childNodes.length
    },
    calcSlidesWidth() {
      console.log(this.$refs.vsWrapper.childNodes)
      const childNodes = [...this.$refs.vsWrapper.childNodes]

      this.slidesWidth = childNodes.map(node => ({
        offsetLeft: node.offsetLeft,
        width: node.offsetWidth
      }))
    },
    calcCurrentPosition() {
      this.currentPos = this.$refs.vsWrapper.scrollLeft
      this.currentPage = this.slidesWidth.findIndex(({ offsetLeft }) => {
        // Checking if  offsetLeft === this.currentPos
        // with approximately helper for 1px offsetLeft bug for even slides
        // return offsetLeft === this.currentPos
        return approximatelyEqual(offsetLeft, this.currentPos, 1)
      })
    },
    calcNextSlide(direction) {
      const nextSlideIndex = this.currentPage + direction
      const { width } = this.slidesWidth[nextSlideIndex]

      return width * direction
    },
    eventScroll() {
      this.calcCurrentPosition()
      this.calcBounds()
    },
    eventResize() {
      this.calcWrapperWidth()
      this.calcSlidesWidth()
      this.calcCurrentPosition()
      this.calcBounds()
    },
    changeSlide(direction) {
      const leftBoundLimit = direction === -1 && this.boundLeft
      const rightBoundLimit = direction === 1 && this.boundRight

      if (leftBoundLimit || rightBoundLimit) {
        return
      }

      const nextSlideWidth = this.calcNextSlide(direction)

      this.scroll(nextSlideWidth)
    },
    scroll(x = 0) {
      this.$refs.vsWrapper.scrollBy({ left: x, behavior: 'smooth' })
    }
  }
}
</script>
