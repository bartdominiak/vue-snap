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
import { approximatelyEqual, isClient } from '../../utils'

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
    observer: null,
    onResizeFn: null,
    onScrollFn: null
  }),
  mounted() {
    this.calcOnInit()

    if (isClient) {
      // Assign to new variable and keep reference for removeEventListener (Avoid Memory Leaks)
      this.onResizeFn = debounce(this.calcOnInit, RESIZE_DEBOUNCE)
      this.onScrollFn = debounce(this.calcOnScroll, SCROLL_DEBOUNCE)

      // MutationObserver
      this.attachMutationObserver()

      // Events
      this.$refs.vsWrapper.addEventListener('scroll', this.onScrollFn)
      window.addEventListener('resize', this.onResizeFn, false)
    }
  },
  beforeDestroy() {
    if (isClient) {
      // MutationObserver
      this.observer.disconnect()

      // Events
      this.$refs.vsWrapper.removeEventListener('scroll', this.onScrollFn)
      window.removeEventListener('resize', this.onResizeFn, false)
    }
  },
  methods: {
    calcOnInit() {
      if (!this.$refs.vsWrapper) {
        return
      }

      this.calcWrapperWidth()
      this.calcSlidesWidth()
      this.calcCurrentPosition()
      this.calcBounds()
      this.calcMaxPages()
    },
    calcOnScroll() {
      if (!this.$refs.vsWrapper) {
        return
      }

      this.calcCurrentPosition()
      this.calcBounds()
    },
    calcBounds() {
      this.boundLeft = approximatelyEqual(this.currentPos, 0, 5)
      this.boundRight = approximatelyEqual(
        this.wrapperScrollWidth - this.wrapperVisibleWidth,
        this.currentPos,
        5
      )
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
      this.currentPos = this.$refs.vsWrapper.scrollLeft || 0
      this.currentPage = this.slidesWidth.findIndex(slide => {
        // Find the closest point, with 5px approximate.
        return approximatelyEqual(slide.offsetLeft, this.currentPos, 5)
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
      // Don't use ES6 destructing - reduce bundle size
      const width = this.slidesWidth[nextSlideIndex].width || 0

      if (!width) {
        return
      }

      return width * direction
    },
    attachMutationObserver() {
      this.observer = new MutationObserver(() => {
        this.calcOnInit()
      })

      this.observer.observe(
        this.$refs.vsWrapper,
        { attributes: true, childList: true, characterData: true, subtree: true }
      )
    },
    changeSlide(direction) {
      const leftBoundLimit = direction === -1 && this.boundLeft
      const rightBoundLimit = direction === 1 && this.boundRight

      if (leftBoundLimit || rightBoundLimit) {
        return
      }

      const nextSlideWidth = this.calcNextWidth(direction)

      if (!nextSlideWidth) {
        return
      }

      this.scrollTo(nextSlideWidth)
    },
    scrollTo(x = 0) {
      this.$refs.vsWrapper.scrollBy({ left: x, behavior: 'smooth' })
    }
  }
}
</script>
