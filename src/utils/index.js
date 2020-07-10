export const approximatelyEqual = (v1, v2, epsilon) => {
  return Math.abs(v1 - v2) <= epsilon
}
