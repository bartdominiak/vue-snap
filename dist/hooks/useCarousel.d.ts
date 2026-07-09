import { Ref } from 'vue';
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
export declare function useCarousel(emit: CarouselEmits, vsWrapper: Ref<HTMLElement | null>, { autoplay, autoplayInterval }: AutoplayOptions): {
    goToSlide: (index: number) => void;
    changeSlide: (direction: number) => void;
    isBoundLeft: Ref<boolean, boolean>;
    isBoundRight: Ref<boolean, boolean>;
    pauseAutoplay: () => void;
    resumeAutoplay: () => void;
};
export {};
