import { polyfill } from 'seamless-scroll-polyfill/dist/esm/Element.scrollBy'

if (
  typeof window !== 'undefined' &&
  typeof document !== 'undefined' &&
  !('scrollBehavior' in document.documentElement.style)
) {
  polyfill()
}
