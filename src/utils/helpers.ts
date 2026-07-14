export const isClient = typeof window !== 'undefined';

export const approximatelyEqual = (
  v1: number,
  v2: number,
  epsilon = 5,
): boolean => {
  return Math.abs(v1 - v2) <= epsilon;
};

export function debounce<Args extends unknown[]>(
  fn: (...args: Args) => void,
  wait: number,
): {
  (...args: Args): void;
  cancel: () => void;
} {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const debounced = (...args: Args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, wait);
  };

  debounced.cancel = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = null;
  };

  return debounced;
}
