import { elementScrollByPolyfill } from 'seamless-scroll-polyfill'
import { isSSR } from './utils'

if (!isSSR && !('scrollBehavior' in document.documentElement.style)) {
  elementScrollByPolyfill()
}
