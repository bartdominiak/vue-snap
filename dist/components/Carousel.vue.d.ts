interface CarouselProps {
    tag?: string;
    hideArrows?: boolean;
    hideArrowsOnBound?: boolean;
    autoplay?: boolean;
    autoplayInterval?: number;
    i18n?: {
        slideLeft: string;
        slideRight: string;
    };
}
declare var __VLS_9: {}, __VLS_11: {
    changeSlide: (direction: number) => void;
    isBoundLeft: boolean;
    isBoundRight: boolean;
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_9) => any;
} & {
    arrows?: (props: typeof __VLS_11) => any;
};
declare const __VLS_base: import('vue').DefineComponent<CarouselProps, {
    changeSlide: (direction: number) => void;
    goToSlide: (index: number) => void;
    isBoundLeft: import('vue').Ref<boolean, boolean>;
    isBoundRight: import('vue').Ref<boolean, boolean>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    autoplay: (...args: any[]) => void;
    mounted: (...args: any[]) => void;
    slideChange: (...args: any[]) => void;
    leftBound: (...args: any[]) => void;
    rightBound: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<CarouselProps> & Readonly<{
    onAutoplay?: ((...args: any[]) => any) | undefined;
    onMounted?: ((...args: any[]) => any) | undefined;
    onSlideChange?: ((...args: any[]) => any) | undefined;
    onLeftBound?: ((...args: any[]) => any) | undefined;
    onRightBound?: ((...args: any[]) => any) | undefined;
}>, {
    autoplay: boolean;
    autoplayInterval: number;
    tag: string;
    hideArrows: boolean;
    hideArrowsOnBound: boolean;
    i18n: {
        slideLeft: string;
        slideRight: string;
    };
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
