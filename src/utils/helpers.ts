export const isClient = typeof window !== 'undefined'

export const approximatelyEqual = (v1: number, v2: number, epsilon = 5): boolean => {
  return Math.abs(v1 - v2) <= epsilon
}

export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  wait: number
): {
  (...args: Parameters<T>): void;
  cancel: () => void;
} {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const debounced = (...args: Parameters<T>) => {
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
