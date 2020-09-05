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
    <slot
      v-if="navigationArrows"
      name="navigation"
    >
      <button
        v-show="!boundLeft"
        type="button"
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
        type="button"
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
import debounce from 'lodash.debounce'
import { approximatelyEqual, isClient } from '../utils'

const SCROLL_DEBOUNCE = 100
const RESIZE_DEBOUNCE = 410

export default {
  props: {
    navigationArrows: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    boundLeft: true,
    boundRight: false,
    slidesWidth: [],
    wrapperScrollWidth: 0,
    wrapperVisibleWidth: 0,
    currentPage: 0,
    currentPos: 0,
    maxPages: 0,
    step: 1,
    observer: null
  }),
  mounted() {
    this.calcCarousel()

    if (isClient) {
      this.attachMutationObserver()
      this.$refs.vsWrapper.addEventListener('scroll', debounce(this.eventScroll, SCROLL_DEBOUNCE))
      window.addEventListener('resize', debounce(this.eventResize, RESIZE_DEBOUNCE), false)
    }
  },
  beforeDestroy() {
    if (isClient) {
      this.observer.disconnect()
      this.$refs.vsWrapper.removeEventListener('scroll', debounce(this.eventScroll, SCROLL_DEBOUNCE))
      window.removeEventListener('resize', debounce(this.eventResize, RESIZE_DEBOUNCE), false)
    }
  },
  methods: {
    attachMutationObserver() {
      this.observer = new MutationObserver(() => {
        this.calcCarousel()
      })

      this.observer.observe(
        this.$el,
        { attributes: true, childList: true, characterData: true, subtree: true }
      )
    },
    calcCarousel() {
      this.calcWrapperWidth()
      this.calcSlidesWidth()
      this.calcMaxPages()
    },
    calcBounds() {
      this.boundLeft = this.currentPos === 0
      this.boundRight = this.wrapperScrollWidth - this.wrapperVisibleWidth === this.currentPos
    },
    calcWrapperWidth() {
      this.wrapperScrollWidth = this.$refs.vsWrapper.scrollWidth
      this.wrapperVisibleWidth = this.$refs.vsWrapper.offsetWidth
    },
    calcSlidesWidth() {
      // Use Array.from instead ES6 Spread operator - reduce bundle size
      const childNodes = Array.from(this.$refs.vsWrapper.childNodes)

      this.slidesWidth = childNodes.map(node => ({
        offsetLeft: node.offsetLeft,
        width: node.offsetWidth
      }))
    },
    calcCurrentPosition() {
      this.currentPos = this.$refs.vsWrapper.scrollLeft

      this.currentPage = this.slidesWidth.findIndex(({ offsetLeft }) => {
        // Find the closest point, with 5px approximate.
        return approximatelyEqual(offsetLeft, this.currentPos, 5)
      })

      if (this.currentPage === -1) {
        this.currentPage = this.maxPages
      }
    },
    calcMaxPages() {
      const maxPos = this.wrapperScrollWidth - this.wrapperVisibleWidth
      this.maxPages = this.slidesWidth.findIndex(({ offsetLeft }) => offsetLeft > maxPos) - 1
    },
    calcNextWidth(direction) {
      const nextSlideIndex = direction > 0 ? this.currentPage : this.currentPage + direction
      // Use width assign instead ES6 destructing - reduce bundle size
      const width = this.slidesWidth[nextSlideIndex].width || 0

      if (!width) {
        return
      }

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
      this.calcMaxPages()
    },
    changeSlide(direction) {
      const leftBoundLimit = direction === -1 && this.boundLeft
      const rightBoundLimit = direction === 1 && this.boundRight

      if (leftBoundLimit || rightBoundLimit) {
        return
      }

      const nextSlideWidth = this.calcNextWidth(direction)

      this.scroll(nextSlideWidth)
    },
    scroll(x = 0) {
      this.$refs.vsWrapper.scrollBy({ left: x, behavior: 'smooth' })
    }
  }
}
</script>
