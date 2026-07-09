import type { Ref } from 'vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { approximatelyEqual, debounce, isClient } from '../utils/helpers';

const SCROLL_DEBOUNCE = 100;

type CarouselEmits = {
  (e: 'mounted', value: boolean): void;
  (e: 'slideChange', index: number): void;
  (e: 'leftBound', value: boolean): void;
  (e: 'rightBound', value: boolean): void;
};

type Slide = {
  offsetLeft: number;
  offsetWidth: number;
};

export function useCarousel(
  emit: CarouselEmits,
  vsWrapper: Ref<HTMLElement | null>,
) {
  const isBoundLeft = ref(true);
  const isBoundRight = ref(false);
  const currentIndex = ref(0);

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
    if (!wrapper) return -1;
    return slides.findIndex(({ offsetLeft }) =>
      approximatelyEqual(offsetLeft, wrapper.scrollLeft, 10),
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
  };

  const refreshSlideState = () => {
    const slides = getSlides();
    const currentIndex = getCurrentIndex(slides);

    if (currentIndex === -1) return;

    updateBoundaries(currentIndex);
  };

  const handleScroll = debounce(refreshSlideState, SCROLL_DEBOUNCE);

  onMounted(() => {
    if (!isClient || !vsWrapper.value) return;

    refreshSlideState();
    vsWrapper.value.addEventListener('scroll', handleScroll);
    emit('mounted', true);
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
  };
}
