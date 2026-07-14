import type { Ref } from 'vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { approximatelyEqual, debounce, isClient } from '../utils/helpers';
import { useAutoplay } from './useAutoplay';

// Scroll events fire continuously during snap animations, so state is
// recalculated only after scrolling settles.
const SCROLL_DEBOUNCE = 100;

// scrollLeft/scrollWidth can differ by a few subpixels after zoom or
// fractional slide widths, so the right bound is detected with a tolerance.
const BOUND_EPSILON = 10;

type CarouselEmits = {
  (e: 'mounted', value: boolean): void;
  (e: 'slideChange', index: number): void;
  (e: 'leftBound', value: boolean): void;
  (e: 'rightBound', value: boolean): void;
  (e: 'autoplay', value: boolean): void;
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

  const getSlideOffsets = (): number[] => {
    if (!vsWrapper.value) return [];

    return Array.from(vsWrapper.value.children).map(
      (child) => (child as HTMLElement).offsetLeft,
    );
  };

  // With CSS scroll snap the user can stop between slides (touch, momentum),
  // so the active slide is the one closest to scrollLeft, not an exact match.
  const getClosestIndex = (offsets: number[]) => {
    const wrapper = vsWrapper.value;
    if (!wrapper || offsets.length === 0) return -1;

    return offsets.reduce(
      (closestIndex, offset, index) =>
        Math.abs(offset - wrapper.scrollLeft) <
        Math.abs(offsets[closestIndex] - wrapper.scrollLeft)
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
    const atEnd = approximatelyEqual(
      scrollLeft + offsetWidth,
      scrollWidth,
      BOUND_EPSILON,
    );

    if (atStart && !isBoundLeft.value) {
      emit('leftBound', true);
    }
    isBoundLeft.value = atStart;

    if (atEnd && !isBoundRight.value) {
      emit('rightBound', true);
    }
    isBoundRight.value = atEnd;
  };

  const scrollToSlide = (offsets: number[], index: number) => {
    const targetOffset = offsets[index];

    if (targetOffset === undefined || !vsWrapper.value) return;

    vsWrapper.value.scrollTo({
      left: targetOffset,
      behavior: 'smooth',
    });

    currentIndex.value = index;
    emit('slideChange', index);
    // Restart the interval so an autoplay tick doesn't fire right after
    // manual navigation, causing a double slide jump.
    autoplayControls.start();
  };

  const changeSlide = (direction: number) => {
    const offsets = getSlideOffsets();
    const activeIndex = getClosestIndex(offsets);

    if (activeIndex === -1) return;

    scrollToSlide(offsets, activeIndex + direction);
  };

  const goToSlide = (index: number) => {
    scrollToSlide(getSlideOffsets(), index);
  };

  // Autoplay loops: from the last slide it wraps back to the first.
  const advanceAutoplay = () => {
    if (isBoundRight.value) {
      goToSlide(0);
    } else {
      changeSlide(1);
    }
  };

  const autoplayControls = useAutoplay({
    autoplay,
    autoplayInterval,
    onAdvance: advanceAutoplay,
    onAutoplayChange: (enabled) => emit('autoplay', enabled),
  });

  const refreshSlideState = () => {
    const activeIndex = getClosestIndex(getSlideOffsets());

    if (activeIndex === -1) return;

    updateBoundaries(activeIndex);
  };

  const handleScroll = debounce(refreshSlideState, SCROLL_DEBOUNCE);

  onMounted(() => {
    if (!isClient || !vsWrapper.value) return;

    refreshSlideState();
    vsWrapper.value.addEventListener('scroll', handleScroll);
    emit('mounted', true);
    autoplayControls.start();
  });

  onBeforeUnmount(() => {
    if (!isClient || !vsWrapper.value) return;

    vsWrapper.value.removeEventListener('scroll', handleScroll);
  });

  return {
    goToSlide,
    changeSlide,
    isBoundLeft,
    isBoundRight,
    pauseAutoplay: autoplayControls.pause,
    resumeAutoplay: autoplayControls.resume,
  };
}
