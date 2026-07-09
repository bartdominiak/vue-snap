import type { Ref } from 'vue';
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { approximatelyEqual, debounce, isClient } from '../utils/helpers';

const SCROLL_DEBOUNCE = 100;

type CarouselEmits = {
  (e: 'mounted', value: boolean): void;
  (e: 'slideChange', index: number): void;
  (e: 'leftBound', value: boolean): void;
  (e: 'rightBound', value: boolean): void;
  (e: 'autoplay', value: boolean): void;
};

type Slide = {
  offsetLeft: number;
  offsetWidth: number;
};

type AutoplayOptions = {
  autoplay: Ref<boolean>;
  autoplayInterval: Ref<number>;
};

export function useCarousel(
  emit: CarouselEmits,
  vsWrapper: Ref<HTMLElement | null>,
  { autoplay, autoplayInterval }: AutoplayOptions,
) {
  const isBoundLeft = ref(true);
  const isBoundRight = ref(false);
  const currentIndex = ref(0);
  let autoplayTimer: ReturnType<typeof setInterval> | null = null;

  const getSlides = (): Slide[] => {
    if (!vsWrapper.value) return [];

    return Array.from(vsWrapper.value.children ?? []).map(
      (child: Element): Slide => ({
        offsetLeft: (child as HTMLElement).offsetLeft,
        offsetWidth: (child as HTMLElement).offsetWidth,
      }),
    );
  };

  const getCurrentIndex = (slides: Slide[]) => {
    const wrapper = vsWrapper.value;
    if (!wrapper || slides.length === 0) return -1;

    return slides.reduce(
      (closestIndex, slide, index) =>
        Math.abs(slide.offsetLeft - wrapper.scrollLeft) <
        Math.abs(slides[closestIndex].offsetLeft - wrapper.scrollLeft)
          ? index
          : closestIndex,
      0,
    );
  };

  const updateBoundaries = (index: number) => {
    if (!vsWrapper.value) return;

    const { scrollLeft, offsetWidth, scrollWidth } = vsWrapper.value;

    if (index !== currentIndex.value) {
      emit('slideChange', index);
    }

    currentIndex.value = index;

    const atStart = index === 0;
    const atEnd = approximatelyEqual(scrollLeft + offsetWidth, scrollWidth, 10);

    if (atStart && !isBoundLeft.value) {
      emit('leftBound', true);
    }
    isBoundLeft.value = atStart;

    if (atEnd && !isBoundRight.value) {
      emit('rightBound', true);
    }
    isBoundRight.value = atEnd;
  };

  const changeSlide = (direction: number) => {
    const slides = getSlides();
    const activeIndex = getCurrentIndex(slides);

    if (activeIndex === -1) return;

    const nextIndex = activeIndex + direction;
    const targetSlide = slides[nextIndex];

    if (!targetSlide || !vsWrapper.value) return;

    vsWrapper.value.scrollTo({
      left: targetSlide.offsetLeft,
      behavior: 'smooth',
    });

    currentIndex.value = nextIndex;
    emit('slideChange', nextIndex);
    restartAutoplay();
  };

  const goToSlide = (index: number) => {
    const slides = getSlides();
    const targetSlide = slides[index];

    if (!targetSlide || !vsWrapper.value) return;

    vsWrapper.value.scrollTo({
      left: targetSlide.offsetLeft,
      behavior: 'smooth',
    });

    currentIndex.value = index;
    emit('slideChange', index);
    restartAutoplay();
  };

  const advanceAutoplay = () => {
    if (isBoundRight.value) {
      goToSlide(0);
    } else {
      changeSlide(1);
    }
  };

  const stopAutoplay = () => {
    if (!autoplayTimer) return;

    clearInterval(autoplayTimer);
    autoplayTimer = null;
  };

  const startAutoplay = () => {
    stopAutoplay();

    if (!isClient || !autoplay.value) return;

    autoplayTimer = setInterval(advanceAutoplay, autoplayInterval.value);
  };

  const restartAutoplay = () => {
    if (!autoplay.value) return;

    startAutoplay();
  };

  const pauseAutoplay = () => {
    if (!autoplay.value || !autoplayTimer) return;

    stopAutoplay();
    emit('autoplay', false);
  };

  const resumeAutoplay = () => {
    if (!autoplay.value || autoplayTimer) return;

    startAutoplay();
    emit('autoplay', true);
  };

  const refreshSlideState = () => {
    const slides = getSlides();
    const currentIndex = getCurrentIndex(slides);

    if (currentIndex === -1) return;

    updateBoundaries(currentIndex);
  };

  const handleScroll = debounce(refreshSlideState, SCROLL_DEBOUNCE);

  watch(autoplay, (enabled) => {
    if (enabled) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
  });

  watch(autoplayInterval, () => {
    if (autoplay.value) startAutoplay();
  });

  onMounted(() => {
    if (!isClient || !vsWrapper.value) return;

    refreshSlideState();
    vsWrapper.value.addEventListener('scroll', handleScroll);
    emit('mounted', true);
    startAutoplay();
  });

  onBeforeUnmount(() => {
    stopAutoplay();

    if (!isClient || !vsWrapper.value) return;

    vsWrapper.value.removeEventListener('scroll', handleScroll);
  });

  return {
    goToSlide,
    changeSlide,
    isBoundLeft,
    isBoundRight,
    pauseAutoplay,
    resumeAutoplay,
  };
}
