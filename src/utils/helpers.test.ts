import { describe, expect, test } from 'bun:test';
import { approximatelyEqual } from './helpers';

describe('approximatelyEqual', () => {
  test('respects the default epsilon', () => {
    expect(approximatelyEqual(10, 14)).toBe(true);
    expect(approximatelyEqual(10, 16)).toBe(false);
  });

  test('respects a custom epsilon', () => {
    expect(approximatelyEqual(10, 20, 15)).toBe(true);
    expect(approximatelyEqual(10, 20, 5)).toBe(false);
  });
});
