import { Ref } from 'vue';
type AutoplayOptions = {
    autoplay: Ref<boolean>;
    autoplayInterval: Ref<number>;
    onAdvance: () => void;
    onAutoplayChange: (enabled: boolean) => void;
};
export declare function useAutoplay({ autoplay, autoplayInterval, onAdvance, onAutoplayChange, }: AutoplayOptions): {
    start: () => void;
    stop: () => void;
    pause: () => void;
    resume: () => void;
};
export {};
