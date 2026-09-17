interface SlideProps {
    /**
     * Custom tag
     */
    tag?: string;
}
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import('vue').DefineComponent<SlideProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<SlideProps> & Readonly<{}>, {
    tag: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
