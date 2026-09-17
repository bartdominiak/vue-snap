export const isClient = typeof window !== 'undefined';

export const approximatelyEqual = (
  v1: number,
  v2: number,
  epsilon = 5,
): boolean => {
  return Math.abs(v1 - v2) <= epsilon;
};
