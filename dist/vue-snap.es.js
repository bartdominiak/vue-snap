import { ref as p, onMounted as Oe, onBeforeUnmount as je, watch as W, createElementBlock as we, openBlock as J, createBlock as he, renderSlot as K, resolveDynamicComponent as pe, withCtx as Se, withDirectives as Y, createElementVNode as ee, vShow as te } from "vue";
var C = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Re(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var x, re;
function ye() {
  if (re) return x;
  re = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return x = e, x;
}
var N, ne;
function qe() {
  if (ne) return N;
  ne = 1;
  var e = typeof C == "object" && C && C.Object === Object && C;
  return N = e, N;
}
var P, ie;
function _e() {
  if (ie) return P;
  ie = 1;
  var e = qe(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return P = n, P;
}
var G, ae;
function Ee() {
  if (ae) return G;
  ae = 1;
  var e = _e(), t = function() {
    return e.Date.now();
  };
  return G = t, G;
}
var D, oe;
function Le() {
  if (oe) return D;
  oe = 1;
  var e = /\s/;
  function t(n) {
    for (var u = n.length; u-- && e.test(n.charAt(u)); )
      ;
    return u;
  }
  return D = t, D;
}
var M, ue;
function Ie() {
  if (ue) return M;
  ue = 1;
  var e = Le(), t = /^\s+/;
  function n(u) {
    return u && u.slice(0, e(u) + 1).replace(t, "");
  }
  return M = n, M;
}
var $, se;
function Te() {
  if (se) return $;
  se = 1;
  var e = _e(), t = e.Symbol;
  return $ = t, $;
}
var A, le;
function Ce() {
  if (le) return A;
  le = 1;
  var e = Te(), t = Object.prototype, n = t.hasOwnProperty, u = t.toString, l = e ? e.toStringTag : void 0;
  function m(a) {
    var c = n.call(a, l), f = a[l];
    try {
      a[l] = void 0;
      var r = !0;
    } catch {
    }
    var v = u.call(a);
    return r && (c ? a[l] = f : delete a[l]), v;
  }
  return A = m, A;
}
var U, ce;
function ke() {
  if (ce) return U;
  ce = 1;
  var e = Object.prototype, t = e.toString;
  function n(u) {
    return t.call(u);
  }
  return U = n, U;
}
var F, fe;
function Be() {
  if (fe) return F;
  fe = 1;
  var e = Te(), t = Ce(), n = ke(), u = "[object Null]", l = "[object Undefined]", m = e ? e.toStringTag : void 0;
  function a(c) {
    return c == null ? c === void 0 ? l : u : m && m in Object(c) ? t(c) : n(c);
  }
  return F = a, F;
}
var V, de;
function We() {
  if (de) return V;
  de = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return V = e, V;
}
var z, ve;
function xe() {
  if (ve) return z;
  ve = 1;
  var e = Be(), t = We(), n = "[object Symbol]";
  function u(l) {
    return typeof l == "symbol" || t(l) && e(l) == n;
  }
  return z = u, z;
}
var H, be;
function Ne() {
  if (be) return H;
  be = 1;
  var e = Ie(), t = ye(), n = xe(), u = NaN, l = /^[-+]0x[0-9a-f]+$/i, m = /^0b[01]+$/i, a = /^0o[0-7]+$/i, c = parseInt;
  function f(r) {
    if (typeof r == "number")
      return r;
    if (n(r))
      return u;
    if (t(r)) {
      var v = typeof r.valueOf == "function" ? r.valueOf() : r;
      r = t(v) ? v + "" : v;
    }
    if (typeof r != "string")
      return r === 0 ? r : +r;
    r = e(r);
    var b = m.test(r);
    return b || a.test(r) ? c(r.slice(2), b ? 2 : 8) : l.test(r) ? u : +r;
  }
  return H = f, H;
}
var X, me;
function Pe() {
  if (me) return X;
  me = 1;
  var e = ye(), t = Ee(), n = Ne(), u = "Expected a function", l = Math.max, m = Math.min;
  function a(c, f, r) {
    var v, b, S, y, d, g, h = 0, w = !1, _ = !1, R = !0;
    if (typeof c != "function")
      throw new TypeError(u);
    f = n(f) || 0, e(r) && (w = !!r.leading, _ = "maxWait" in r, S = _ ? l(n(r.maxWait) || 0, f) : S, R = "trailing" in r ? !!r.trailing : R);
    function q(o) {
      var T = v, I = b;
      return v = b = void 0, h = o, y = c.apply(I, T), y;
    }
    function k(o) {
      return h = o, d = setTimeout(O, f), w ? q(o) : y;
    }
    function E(o) {
      var T = o - g, I = o - h, Q = f - T;
      return _ ? m(Q, S - I) : Q;
    }
    function L(o) {
      var T = o - g, I = o - h;
      return g === void 0 || T >= f || T < 0 || _ && I >= S;
    }
    function O() {
      var o = t();
      if (L(o))
        return j(o);
      d = setTimeout(O, E(o));
    }
    function j(o) {
      return d = void 0, R && v ? q(o) : (v = b = void 0, y);
    }
    function B() {
      d !== void 0 && clearTimeout(d), h = 0, v = g = b = d = void 0;
    }
    function i() {
      return d === void 0 ? y : j(t());
    }
    function s() {
      var o = t(), T = L(o);
      if (v = arguments, b = this, g = o, T) {
        if (d === void 0)
          return k(g);
        if (_)
          return clearTimeout(d), d = setTimeout(O, f), q(g);
      }
      return d === void 0 && (d = setTimeout(O, f)), y;
    }
    return s.cancel = B, s.flush = i, s;
  }
  return X = a, X;
}
var Ge = Pe();
const Z = /* @__PURE__ */ Re(Ge), De = { class: "vs-carousel" }, Me = ["aria-label", "disabled"], $e = ["aria-label", "disabled"], Ae = 100, ge = 410, Ue = /* @__PURE__ */ Object.assign({
  name: "VsCarousel"
}, {
  __name: "Carousel",
  props: {
    hideArrows: {
      type: Boolean,
      default: !1
    },
    hideArrowsOnBound: {
      type: Boolean,
      default: !1
    },
    tag: {
      type: String,
      default: "ul"
    },
    i18n: {
      type: Object,
      default: () => ({ slideLeft: "Slide left", slideRight: "Slide right" }),
      validator: (e) => ["slideLeft", "slideRight"].every((n) => n in e)
    }
  },
  emits: ["page", "bound-left", "bound-right"],
  setup(e, { emit: t }) {
    const n = (i, s, o) => Math.abs(i - s) <= o, l = !(typeof window > "u"), m = t, a = p(null), c = p(!0), f = p(!1), r = p([]), v = p(0), b = p(0), S = p(0), y = p(0), d = p(0), g = p(null), h = () => {
      a.value && (R(), q(), L(), E(), _());
    }, w = Z(() => {
      a.value && (L(), E(), _());
    }, Ae), _ = () => {
      const i = n(d.value, 0, 5), s = n(
        v.value - b.value,
        d.value,
        5
      );
      c.value = i, f.value = s;
    }, R = () => {
      v.value = a.value.scrollWidth, b.value = a.value.offsetWidth;
    }, q = () => {
      const i = [...a.value.children];
      r.value = i.map((s) => ({
        offsetLeft: s.offsetLeft,
        width: s.offsetWidth
      }));
    }, k = () => n(
      d.value + b.value,
      v.value,
      5
    ) ? r.value.length - 1 : r.value.findIndex((i) => n(i.offsetLeft, d.value, 5)), E = (i) => {
      const s = i !== void 0 ? i : k();
      s < 0 || (y.value = S.value, S.value = s > 0 ? s : 0);
    }, L = () => {
      d.value = a.value.scrollLeft || 0;
    }, O = () => {
      g.value = new MutationObserver(() => {
        h();
      }), g.value.observe(
        a.value,
        { attributes: !0, childList: !0, characterData: !0, subtree: !0 }
      );
    }, j = (i) => {
      B(S.value + i);
    }, B = (i) => {
      r.value[i] && (a.value.scrollTo({
        left: r.value[i].offsetLeft,
        behavior: "smooth"
      }), E(i));
    };
    return Oe(() => {
      h(), l && (window.addEventListener("resize", Z(h, ge), !1), a.value.addEventListener("scroll", w), O());
    }), je(() => {
      l && (g.value.disconnect(), a.value.removeEventListener("scroll", w), window.removeEventListener("resize", Z(h, ge), !1));
    }), W(S, (i, s) => {
      i !== s && m("page", { currentPage: i, previousPage: s });
    }), W(c, (i) => {
      i && m("bound-left", !0);
    }), W(f, (i) => {
      i && m("bound-right", !0);
    }), (i, s) => (J(), we("div", De, [
      (J(), he(pe(e.tag), {
        ref_key: "vsWrapper",
        ref: a,
        class: "vs-carousel__wrapper"
      }, {
        default: Se(() => [
          K(i.$slots, "default")
        ]),
        _: 3
      }, 512)),
      K(i.$slots, "arrows", {
        changeSlide: j,
        boundLeft: c.value,
        boundRight: f.value
      }, () => [
        Y(ee("button", {
          type: "button",
          "aria-label": e.i18n.slideLeft,
          disabled: c.value,
          class: "vs-carousel__arrows vs-carousel__arrows--left",
          onClick: s[0] || (s[0] = (o) => j(-1))
        }, " ← ", 8, Me), [
          [te, e.hideArrowsOnBound ? !c.value : !0]
        ]),
        Y(ee("button", {
          type: "button",
          "aria-label": e.i18n.slideRight,
          disabled: f.value,
          class: "vs-carousel__arrows vs-carousel__arrows--right",
          onClick: s[1] || (s[1] = (o) => j(1))
        }, " → ", 8, $e), [
          [te, e.hideArrowsOnBound ? !f.value : !0]
        ])
      ])
    ]));
  }
}), Fe = {
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
  setup(e) {
    return (t, n) => (J(), he(pe(e.tag), {
      ref: "vsSlide",
      class: "vs-carousel__slide",
      tabindex: "0"
    }, {
      default: Se(() => [
        K(t.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}, ze = {
  install: (e) => {
    e.component("Carousel", Ue), e.component("Slide", Fe);
  }
};
export {
  Ue as Carousel,
  Fe as Slide,
  ze as VueSnap,
  ze as default
};
