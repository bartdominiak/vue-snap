import type { Ref } from 'vue';
import { onScopeDispose, watch } from 'vue';
import { isClient } from '../utils/helpers';

type AutoplayOptions = {
  autoplay: Ref<boolean>;
  autoplayInterval: Ref<number>;
  onAdvance: () => void;
  onAutoplayChange: (enabled: boolean) => void;
};

export function useAutoplay({
  autoplay,
  autoplayInterval,
  onAdvance,
  onAutoplayChange,
}: AutoplayOptions) {
  let timer: ReturnType<typeof setInterval> | null = null;

  const stop = () => {
    if (!timer) return;

    clearInterval(timer);
    timer = null;
  };

  // Always stops first, so start() also works as a restart and two
  // intervals can never run at once. isClient guards SSR (no timers there).
  const start = () => {
    stop();

    if (!isClient || !autoplay.value) return;

    timer = setInterval(onAdvance, autoplayInterval.value);
  };

  // pause/resume (e.g. on hover) only apply while the autoplay prop is on;
  // the timer guard keeps repeated calls from emitting duplicate events.
  const pause = () => {
    if (!autoplay.value || !timer) return;

    stop();
    onAutoplayChange(false);
  };

  const resume = () => {
    if (!autoplay.value || timer) return;

    start();
    onAutoplayChange(true);
  };

  watch(autoplay, (enabled) => (enabled ? start() : stop()));

  watch(autoplayInterval, () => {
    if (autoplay.value) start();
  });

  // The hook cleans up its own timer, so consumers can't leak an interval
  // by forgetting to stop it on unmount.
  onScopeDispose(stop);

  return { start, stop, pause, resume };
}
