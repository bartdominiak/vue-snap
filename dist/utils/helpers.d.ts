export declare const isClient: boolean;
export declare const approximatelyEqual: (v1: number, v2: number, epsilon?: number) => boolean;
export declare function debounce<T extends (...args: unknown[]) => void>(fn: T, wait: number): {
    (...args: Parameters<T>): void;
    cancel: () => void;
};
