import { elementScrollByPolyfill } from 'seamless-scroll-polyfill/dist/esm/Element.scrollBy'
import { isSSR } from './utils'

if (!isSSR && !('scrollBehavior' in document.documentElement.style)) {
  elementScrollByPolyfill()
}
