import { ref, onMounted, onBeforeUnmount } from 'vue';
import { isClient, approximatelyEqual, debounce } from '../utils/helpers';

const SCROLL_DEBOUNCE = 100;

export function useCarousel(emit: any, vsWrapper: any) {
  const isBoundLeft = ref(true);
  const isBoundRight = ref(false);
  const currentIndex = ref(0);

  const getSlides = () =>
    [ ...vsWrapper.value?.children ].map(({ offsetLeft, offsetWidth }: any) => ({
      offsetLeft,
      offsetWidth,
    }));

  const getCurrentIndex = (slides: any[]) =>
    slides.findIndex(({ offsetLeft }) => approximatelyEqual(offsetLeft, vsWrapper.value.scrollLeft, 10));

  const updateBoundaries = (index: number) => {
    const { scrollLeft, offsetWidth, scrollWidth } = vsWrapper.value;

    if (index !== currentIndex.value) {
      emit('slideChange', index);
    }

    currentIndex.value = index;

    const atStart = index === 0;
    const atEnd = approximatelyEqual(scrollLeft + offsetWidth, scrollWidth, 10);

    if (atStart) {
      isBoundLeft.value = true;
      emit('leftBound', true);
    } else {
      isBoundLeft.value = false;
    }

    if (atEnd) {
      isBoundRight.value = true;
      emit('rightBound', true);
    } else {
      isBoundRight.value = false;
    }
  };

  const changeSlide = (direction: number) => {
    const slides = getSlides();
    const currentIndex = getCurrentIndex(slides);

    if (currentIndex === -1) return;

    const nextIndex = currentIndex + direction;
    const targetSlide = slides[nextIndex];

    if (!targetSlide) return;

    vsWrapper.value.scrollTo({ left: targetSlide.offsetLeft, behavior: 'smooth' });
    // emit('slideChange', nextIndex);
  };

  const goToSlide = (index: number) => {
    const slides = getSlides();
    const targetSlide = slides[index];

    if (!targetSlide) return;

    vsWrapper.value.scrollTo({ left: targetSlide.offsetLeft, behavior: 'smooth' });
    // emit('slideChange', index);
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
