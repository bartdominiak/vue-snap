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
      :change-slide="changeSlide"
      :bound-left="boundLeft"
      :bound-right="boundRight"
    >
      <button
        v-show="hideArrowsOnBound ? !boundLeft : true"
        type="button"
        :aria-label="i18n.slideLeft"
        :disabled="boundLeft"
        class="vs-carousel__arrows vs-carousel__arrows--left"
        @click="changeSlide(-1)"
      >
        ←
      </button>

      <button
        v-show="hideArrowsOnBound ? !boundRight : true"
        type="button"
        :aria-label="i18n.slideRight"
        :disabled="boundRight"
        class="vs-carousel__arrows vs-carousel__arrows--right"
        @click="changeSlide(1)"
      >
        →
      </button>
    </slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue';
import debounce from 'lodash/debounce';
import { approximatelyEqual, isClient } from '../utils';

const props = defineProps({
  hideArrows: {
    type: Boolean,
    default: false
  },
  hideArrowsOnBound: {
    type: Boolean,
    default: false
  },
  tag: {
    type: String,
    default: 'ul'
  },
  i18n: {
    type: Object,
    default: () => ({ slideLeft: 'Slide left', slideRight: 'Slide right' }),
    validator: config => {
      const translations = [ 'slideLeft', 'slideRight' ];
      return translations.every(key => key in config);
    }
  }
});

const emit = defineEmits(['page', 'bound-left', 'bound-right']);

const SCROLL_DEBOUNCE = 100;
const RESIZE_DEBOUNCE = 410;

const vsWrapper = ref(null);
const boundLeft = ref(true);
const boundRight = ref(false);
const slidesWidth = ref([]);
const wrapperScrollWidth = ref(0);
const wrapperVisibleWidth = ref(0);
const currentPage = ref(0);
const previousPage = ref(0);
const currentPos = ref(0);
const observer = ref(null);

const calcOnInit = () => {
  if (!vsWrapper.value) {
    return;
  };

  calcWrapperWidth();
  calcSlidesWidth();
  calcCurrentPosition();
  setCurrentPage();
  calcBounds();
};

const calcOnScroll = debounce(() => {
  if (!vsWrapper.value) {
    return;
  }

  calcCurrentPosition();
  setCurrentPage();
  calcBounds();
}, SCROLL_DEBOUNCE);

const calcBounds = () => {
  const isBoundLeft = approximatelyEqual(currentPos.value, 0, 5);
  const isBoundRight = approximatelyEqual(
    wrapperScrollWidth.value - wrapperVisibleWidth.value,
    currentPos.value,
    5
  );

  boundLeft.value = isBoundLeft;
  boundRight.value = isBoundRight;
};

const calcWrapperWidth = () => {
  wrapperScrollWidth.value = vsWrapper.value.scrollWidth;
  wrapperVisibleWidth.value = vsWrapper.value.offsetWidth;
};

const calcSlidesWidth = () => {
  const childNodes = [...vsWrapper.value.children];
  slidesWidth.value = childNodes.map(node => ({
    offsetLeft: node.offsetLeft,
    width: node.offsetWidth
  }));
};

const getCurrentPage = () => {
  if (approximatelyEqual(
    currentPos.value + wrapperVisibleWidth.value,
    wrapperScrollWidth.value,
    5
  )) {
    return slidesWidth.value.length - 1;
  }

  return slidesWidth.value.findIndex(slide => {
    return approximatelyEqual(slide.offsetLeft, currentPos.value, 5);
  });
};

const setCurrentPage = (index) => {
  const newPage = index !== undefined ? index : getCurrentPage();
  if (newPage < 0) {
    return;
  }

  previousPage.value = currentPage.value;
  currentPage.value = newPage > 0 ? newPage : 0;
};

const calcCurrentPosition = () => {
  currentPos.value = vsWrapper.value.scrollLeft || 0;
};

const attachMutationObserver = () => {
  observer.value = new MutationObserver(() => {
    calcOnInit();
  });

  observer.value.observe(
    vsWrapper.value,
    { attributes: true, childList: true, characterData: true, subtree: true }
  );
};

const changeSlide = (direction) => {
  goToSlide(currentPage.value + direction);
};

const goToSlide = (index) => {
  if (!slidesWidth.value[index]) {
    return;
  }

  vsWrapper.value.scrollTo({
    left: slidesWidth.value[index].offsetLeft,
    behavior: 'smooth'
  });

  setCurrentPage(index);
};

onMounted(() => {
  calcOnInit();

  if (isClient) {
    window.addEventListener('resize', debounce(calcOnInit, RESIZE_DEBOUNCE), false);
    vsWrapper.value.addEventListener('scroll', calcOnScroll);
    attachMutationObserver();
  }
});

onBeforeUnmount(() => {
  if (!isClient) {
    return;
  }

  observer.value.disconnect();
  vsWrapper.value.removeEventListener('scroll', calcOnScroll);
  window.removeEventListener('resize', debounce(calcOnInit, RESIZE_DEBOUNCE), false);
});

watch(currentPage, (newPage, oldPage) => {
  if (newPage !== oldPage) {
    emit('page', { currentPage: newPage, previousPage: oldPage });
  }
});

watch(boundLeft, (state) => {
  if (state) {
    emit('bound-left', true);
  }
});

watch(boundRight, (state) => {
  if (state) {
    emit('bound-right', true);
  }
});
</script>

<style>
.vs-carousel {
    position: relative;
}

.vs-carousel__wrapper {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    list-style: none;
    margin: 0;
    padding: 0;
}

.vs-carousel__wrapper::-webkit-scrollbar {
    display: none;
}

.vs-carousel__slide {
    flex: 0 0 100%;
    height: 100%;
    scroll-snap-align: start;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
}

.vs-carousel__arrows {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 48px;
    height: 48px;
    padding: 0;
    cursor: pointer;
}

.vs-carousel__arrows:disabled {
    cursor: not-allowed;
}

.vs-carousel__arrows--left {
    left: 0;
}

.vs-carousel__arrows--right {
    right: 0;
}
</style>
