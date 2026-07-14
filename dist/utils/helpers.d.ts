export declare const isClient: boolean;
export declare const approximatelyEqual: (v1: number, v2: number, epsilon?: number) => boolean;
export declare function debounce<Args extends unknown[]>(fn: (...args: Args) => void, wait: number): {
    (...args: Args): void;
    cancel: () => void;
};
