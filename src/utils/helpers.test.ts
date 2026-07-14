import { describe, expect, test } from 'bun:test';
import { approximatelyEqual, debounce } from './helpers';

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

describe('debounce', () => {
  test('coalesces rapid calls into one, using the latest arguments', async () => {
    const received: number[] = [];
    const debounced = debounce((value: number) => {
      received.push(value);
    }, 20);

    debounced(1);
    debounced(2);
    debounced(3);

    expect(received).toEqual([]);

    await new Promise((resolve) => setTimeout(resolve, 40));

    expect(received).toEqual([3]);
  });

  test('cancel prevents a pending call from firing', async () => {
    let calls = 0;
    const debounced = debounce(() => {
      calls++;
    }, 20);

    debounced();
    debounced.cancel();

    await new Promise((resolve) => setTimeout(resolve, 40));

    expect(calls).toBe(0);
  });
});
