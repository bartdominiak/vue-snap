<template>
  <div class="vs-carousel">
    <component
      :is="tag"
      ref="vsWrapper"
      class="vs-carousel__wrapper"
    >
      <!-- @slot Slot for Slides -->
      <slot />
    </component>

    <!-- @slot Slot for Arrows -->
    <slot
      v-if="!hideArrows"
      name="arrows"
    >
      <button
        v-show="hideArrowsOnBound ? !boundLeft : true"
        type="button"
        :aria-label="i18n.slideLeft"
        :disabled="boundLeft"
        class="
          vs-carousel__arrows
          vs-carousel__arrows--left
        "
        @click="changeSlide(-1)"
      >
        ←
      </button>

      <button
        v-show="hideArrowsOnBound ? !boundRight : true"
        type="button"
        :aria-label="i18n.slideRight"
        :disabled="boundRight"
        class="
          vs-carousel__arrows
          vs-carousel__arrows--right
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
import { approximatelyEqual, isClient } from '../../utils'

const SCROLL_DEBOUNCE = 100
const RESIZE_DEBOUNCE = 410

export default {
  props: {
    /**
     * Disable arrows
     */
    hideArrows: {
      type: Boolean,
      default: false
    },
    /**
     * Disable arrows on bound
     */
    hideArrowsOnBound: {
      type: Boolean,
      default: false
    },
    /**
     * Custom tag
     */
    tag: {
      type: String,
      default: 'ul'
    },
    /**
     * Translations
     */
    i18n: {
      type: Object,
      default: () => ({ slideLeft: 'Slide left', slideRight: 'Slide right' }),
      validator: config => {
        const translations = ['slideLeft', 'slideRight']
        return translations.every(key => key in config)
      }
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
  watch: {
    currentPage(current, previous) {
      if (current !== previous) {
        /**
         * Page changed
         * @event page
         * @type {Event}
         */
        this.$emit('page', { current, previous })
      }
    }
  },
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
      this.calcCurrentPage()
      this.calcBounds()
      this.calcMaxPages()
    },
    calcOnScroll() {
      if (!this.$refs.vsWrapper) {
        return
      }

      this.calcCurrentPosition()
      this.calcCurrentPage()
      this.calcBounds()
    },
    calcBounds() {
      // Find the closest point, with 5px approximate.
      const isBoundLeft = approximatelyEqual(this.currentPos, 0, 5)
      const isBoundRight = approximatelyEqual(
        this.wrapperScrollWidth - this.wrapperVisibleWidth,
        this.currentPos,
        5
      )

      if (isBoundLeft) {
        /**
         * Reach first item
         * @event bound-left
         * @type {Event}
         */
        this.$emit('bound-left', true)
        this.boundLeft = true
      } else {
        this.boundLeft = false
      }

      if (isBoundRight) {
        /**
         * Reach last item
         * @event bound-right
         * @type {Event}
         */
        this.$emit('bound-right', true)
        this.boundRight = true
      } else {
        this.boundRight = false
      }
    },
    calcWrapperWidth() {
      this.wrapperScrollWidth = this.$refs.vsWrapper.scrollWidth
      this.wrapperVisibleWidth = this.$refs.vsWrapper.offsetWidth
    },
    calcSlidesWidth() {
      const childNodes = [ ...this.$refs.vsWrapper.childNodes ]

      this.slidesWidth = childNodes.map(node => ({
        offsetLeft: node.offsetLeft,
        width: node.offsetWidth
      }))
    },
    calcCurrentPage() {
      const getCurrentPage = this.slidesWidth.findIndex(slide => {
        // Find the closest point, with 5px approximate.
        return approximatelyEqual(slide.offsetLeft, this.currentPos, 5)
      })


      if (getCurrentPage !== -1 && getCurrentPage !== -2) {
        this.currentPage = getCurrentPage || 0
      }
    },
    calcCurrentPosition() {
      this.currentPos = this.$refs.vsWrapper.scrollLeft || 0
    },
    calcMaxPages() {
      const maxPos = this.wrapperScrollWidth - this.wrapperVisibleWidth
      this.maxPages = this.slidesWidth.findIndex(({ offsetLeft }) => offsetLeft > maxPos) - 1
    },
    calcNextWidth(direction) {
      const nextSlideIndex = Math.max( direction > 0 ? this.currentPage : this.currentPage + direction, 0)
      // Don't use ES6 destructing - reduce bundle size
      const width = nextSlideIndex >=0 && this.slidesWidth[nextSlideIndex].width || 0

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
