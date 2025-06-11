import { ref, onMounted, onBeforeUnmount, watch, createElementBlock, openBlock, createBlock, renderSlot, resolveDynamicComponent, withCtx, withDirectives, createElementVNode, vShow } from "vue";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var isObject_1;
var hasRequiredIsObject;
function requireIsObject() {
  if (hasRequiredIsObject) return isObject_1;
  hasRequiredIsObject = 1;
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  isObject_1 = isObject;
  return isObject_1;
}
var _freeGlobal;
var hasRequired_freeGlobal;
function require_freeGlobal() {
  if (hasRequired_freeGlobal) return _freeGlobal;
  hasRequired_freeGlobal = 1;
  var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  _freeGlobal = freeGlobal;
  return _freeGlobal;
}
var _root;
var hasRequired_root;
function require_root() {
  if (hasRequired_root) return _root;
  hasRequired_root = 1;
  var freeGlobal = require_freeGlobal();
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  _root = root;
  return _root;
}
var now_1;
var hasRequiredNow;
function requireNow() {
  if (hasRequiredNow) return now_1;
  hasRequiredNow = 1;
  var root = require_root();
  var now = function() {
    return root.Date.now();
  };
  now_1 = now;
  return now_1;
}
var _trimmedEndIndex;
var hasRequired_trimmedEndIndex;
function require_trimmedEndIndex() {
  if (hasRequired_trimmedEndIndex) return _trimmedEndIndex;
  hasRequired_trimmedEndIndex = 1;
  var reWhitespace = /\s/;
  function trimmedEndIndex(string) {
    var index = string.length;
    while (index-- && reWhitespace.test(string.charAt(index))) {
    }
    return index;
  }
  _trimmedEndIndex = trimmedEndIndex;
  return _trimmedEndIndex;
}
var _baseTrim;
var hasRequired_baseTrim;
function require_baseTrim() {
  if (hasRequired_baseTrim) return _baseTrim;
  hasRequired_baseTrim = 1;
  var trimmedEndIndex = require_trimmedEndIndex();
  var reTrimStart = /^\s+/;
  function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
  }
  _baseTrim = baseTrim;
  return _baseTrim;
}
var _Symbol;
var hasRequired_Symbol;
function require_Symbol() {
  if (hasRequired_Symbol) return _Symbol;
  hasRequired_Symbol = 1;
  var root = require_root();
  var Symbol = root.Symbol;
  _Symbol = Symbol;
  return _Symbol;
}
var _getRawTag;
var hasRequired_getRawTag;
function require_getRawTag() {
  if (hasRequired_getRawTag) return _getRawTag;
  hasRequired_getRawTag = 1;
  var Symbol = require_Symbol();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var nativeObjectToString = objectProto.toString;
  var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  _getRawTag = getRawTag;
  return _getRawTag;
}
var _objectToString;
var hasRequired_objectToString;
function require_objectToString() {
  if (hasRequired_objectToString) return _objectToString;
  hasRequired_objectToString = 1;
  var objectProto = Object.prototype;
  var nativeObjectToString = objectProto.toString;
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  _objectToString = objectToString;
  return _objectToString;
}
var _baseGetTag;
var hasRequired_baseGetTag;
function require_baseGetTag() {
  if (hasRequired_baseGetTag) return _baseGetTag;
  hasRequired_baseGetTag = 1;
  var Symbol = require_Symbol(), getRawTag = require_getRawTag(), objectToString = require_objectToString();
  var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
  var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  _baseGetTag = baseGetTag;
  return _baseGetTag;
}
var isObjectLike_1;
var hasRequiredIsObjectLike;
function requireIsObjectLike() {
  if (hasRequiredIsObjectLike) return isObjectLike_1;
  hasRequiredIsObjectLike = 1;
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  isObjectLike_1 = isObjectLike;
  return isObjectLike_1;
}
var isSymbol_1;
var hasRequiredIsSymbol;
function requireIsSymbol() {
  if (hasRequiredIsSymbol) return isSymbol_1;
  hasRequiredIsSymbol = 1;
  var baseGetTag = require_baseGetTag(), isObjectLike = requireIsObjectLike();
  var symbolTag = "[object Symbol]";
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
  }
  isSymbol_1 = isSymbol;
  return isSymbol_1;
}
var toNumber_1;
var hasRequiredToNumber;
function requireToNumber() {
  if (hasRequiredToNumber) return toNumber_1;
  hasRequiredToNumber = 1;
  var baseTrim = require_baseTrim(), isObject = requireIsObject(), isSymbol = requireIsSymbol();
  var NAN = 0 / 0;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  function toNumber(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  toNumber_1 = toNumber;
  return toNumber_1;
}
var debounce_1;
var hasRequiredDebounce;
function requireDebounce() {
  if (hasRequiredDebounce) return debounce_1;
  hasRequiredDebounce = 1;
  var isObject = requireIsObject(), now = requireNow(), toNumber = requireToNumber();
  var FUNC_ERROR_TEXT = "Expected a function";
  var nativeMax = Math.max, nativeMin = Math.min;
  function debounce2(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = "maxWait" in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
      var args = lastArgs, thisArg = lastThis;
      lastArgs = lastThis = void 0;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }
    function leadingEdge(time) {
      lastInvokeTime = time;
      timerId = setTimeout(timerExpired, wait);
      return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
      return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
      return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
      var time = now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
      timerId = void 0;
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = void 0;
      return result;
    }
    function cancel() {
      if (timerId !== void 0) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = void 0;
    }
    function flush() {
      return timerId === void 0 ? result : trailingEdge(now());
    }
    function debounced() {
      var time = now(), isInvoking = shouldInvoke(time);
      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;
      if (isInvoking) {
        if (timerId === void 0) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === void 0) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }
  debounce_1 = debounce2;
  return debounce_1;
}
var debounceExports = requireDebounce();
const debounce = /* @__PURE__ */ getDefaultExportFromCjs(debounceExports);
const approximatelyEqual = (v1, v2, epsilon) => {
  return Math.abs(v1 - v2) <= epsilon;
};
const isSSR = typeof window === "undefined";
const isClient = !isSSR;
const _hoisted_1 = { class: "vs-carousel" };
const _hoisted_2 = ["aria-label", "disabled"];
const _hoisted_3 = ["aria-label", "disabled"];
const SCROLL_DEBOUNCE = 100;
const RESIZE_DEBOUNCE = 410;
const _sfc_main$1 = /* @__PURE__ */ Object.assign({
  name: "VsCarousel"
}, {
  __name: "Carousel",
  props: {
    hideArrows: {
      type: Boolean,
      default: false
    },
    hideArrowsOnBound: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "ul"
    },
    i18n: {
      type: Object,
      default: () => ({ slideLeft: "Slide left", slideRight: "Slide right" }),
      validator: (config) => {
        const translations = ["slideLeft", "slideRight"];
        return translations.every((key) => key in config);
      }
    }
  },
  emits: ["page", "bound-left", "bound-right"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const vsWrapper = ref(null);
    const boundLeft = ref(true);
    const boundRight = ref(false);
    const slidesWidth = ref([]);
    const wrapperScrollWidth = ref(0);
    const wrapperVisibleWidth = ref(0);
    const currentPage = ref(0);
    const previousPage = ref(0);
    const currentPos = ref(0);
    const observer = ref(null);
    const calcOnInit = () => {
      if (!vsWrapper.value) {
        return;
      }
      calcWrapperWidth();
      calcSlidesWidth();
      calcCurrentPosition();
      setCurrentPage();
      calcBounds();
    };
    const calcOnScroll = debounce(() => {
      if (!vsWrapper.value) {
        return;
      }
      calcCurrentPosition();
      setCurrentPage();
      calcBounds();
    }, SCROLL_DEBOUNCE);
    const calcBounds = () => {
      const isBoundLeft = approximatelyEqual(currentPos.value, 0, 5);
      const isBoundRight = approximatelyEqual(
        wrapperScrollWidth.value - wrapperVisibleWidth.value,
        currentPos.value,
        5
      );
      boundLeft.value = isBoundLeft;
      boundRight.value = isBoundRight;
    };
    const calcWrapperWidth = () => {
      wrapperScrollWidth.value = vsWrapper.value.scrollWidth;
      wrapperVisibleWidth.value = vsWrapper.value.offsetWidth;
    };
    const calcSlidesWidth = () => {
      const childNodes = [...vsWrapper.value.children];
      slidesWidth.value = childNodes.map((node) => ({
        offsetLeft: node.offsetLeft,
        width: node.offsetWidth
      }));
    };
    const getCurrentPage = () => {
      if (approximatelyEqual(
        currentPos.value + wrapperVisibleWidth.value,
        wrapperScrollWidth.value,
        5
      )) {
        return slidesWidth.value.length - 1;
      }
      return slidesWidth.value.findIndex((slide) => {
        return approximatelyEqual(slide.offsetLeft, currentPos.value, 5);
      });
    };
    const setCurrentPage = (index) => {
      const newPage = index !== void 0 ? index : getCurrentPage();
      if (newPage < 0) {
        return;
      }
      previousPage.value = currentPage.value;
      currentPage.value = newPage > 0 ? newPage : 0;
    };
    const calcCurrentPosition = () => {
      currentPos.value = vsWrapper.value.scrollLeft || 0;
    };
    const attachMutationObserver = () => {
      observer.value = new MutationObserver(() => {
        calcOnInit();
      });
      observer.value.observe(
        vsWrapper.value,
        { attributes: true, childList: true, characterData: true, subtree: true }
      );
    };
    const changeSlide = (direction) => {
      goToSlide(currentPage.value + direction);
    };
    const goToSlide = (index) => {
      if (!slidesWidth.value[index]) {
        return;
      }
      vsWrapper.value.scrollTo({
        left: slidesWidth.value[index].offsetLeft,
        behavior: "smooth"
      });
      setCurrentPage(index);
    };
    onMounted(() => {
      calcOnInit();
      if (isClient) {
        window.addEventListener("resize", debounce(calcOnInit, RESIZE_DEBOUNCE), false);
        vsWrapper.value.addEventListener("scroll", calcOnScroll);
        attachMutationObserver();
      }
    });
    onBeforeUnmount(() => {
      if (!isClient) {
        return;
      }
      observer.value.disconnect();
      vsWrapper.value.removeEventListener("scroll", calcOnScroll);
      window.removeEventListener("resize", debounce(calcOnInit, RESIZE_DEBOUNCE), false);
    });
    watch(currentPage, (newPage, oldPage) => {
      if (newPage !== oldPage) {
        emit("page", { currentPage: newPage, previousPage: oldPage });
      }
    });
    watch(boundLeft, (state) => {
      if (state) {
        emit("bound-left", true);
      }
    });
    watch(boundRight, (state) => {
      if (state) {
        emit("bound-right", true);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
          ref_key: "vsWrapper",
          ref: vsWrapper,
          class: "vs-carousel__wrapper"
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 512)),
        renderSlot(_ctx.$slots, "arrows", {
          changeSlide,
          boundLeft: boundLeft.value,
          boundRight: boundRight.value
        }, () => [
          withDirectives(createElementVNode("button", {
            type: "button",
            "aria-label": __props.i18n.slideLeft,
            disabled: boundLeft.value,
            class: "vs-carousel__arrows vs-carousel__arrows--left",
            onClick: _cache[0] || (_cache[0] = ($event) => changeSlide(-1))
          }, " ← ", 8, _hoisted_2), [
            [vShow, __props.hideArrowsOnBound ? !boundLeft.value : true]
          ]),
          withDirectives(createElementVNode("button", {
            type: "button",
            "aria-label": __props.i18n.slideRight,
            disabled: boundRight.value,
            class: "vs-carousel__arrows vs-carousel__arrows--right",
            onClick: _cache[1] || (_cache[1] = ($event) => changeSlide(1))
          }, " → ", 8, _hoisted_3), [
            [vShow, __props.hideArrowsOnBound ? !boundRight.value : true]
          ])
        ])
      ]);
    };
  }
});
const _sfc_main = {
  __name: "Slide",
  props: {
    /**
     * Custom tag
     */
    tag: {
      type: String,
      default: "li"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
        ref: "vsSlide",
        class: "vs-carousel__slide",
        tabindex: "0"
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 512);
    };
  }
};
const VueSnap = {
  install: (app) => {
    app.component("Carousel", _sfc_main$1);
    app.component("Slide", _sfc_main);
  }
};
export {
  _sfc_main$1 as Carousel,
  _sfc_main as Slide,
  VueSnap,
  VueSnap as default
};
