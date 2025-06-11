import { ref as p, onMounted as je, onBeforeUnmount as Re, watch as W, createElementBlock as qe, openBlock as J, createBlock as pe, renderSlot as K, createCommentVNode as Ee, resolveDynamicComponent as ye, withCtx as _e, withDirectives as Y, createElementVNode as ee, vShow as te, defineComponent as Le } from "vue";
var L = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ie(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var N, re;
function Se() {
  if (re) return N;
  re = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return N = e, N;
}
var x, ne;
function Ce() {
  if (ne) return x;
  ne = 1;
  var e = typeof L == "object" && L && L.Object === Object && L;
  return x = e, x;
}
var P, ie;
function Te() {
  if (ie) return P;
  ie = 1;
  var e = Ce(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return P = n, P;
}
var $, ae;
function ke() {
  if (ae) return $;
  ae = 1;
  var e = Te(), t = function() {
    return e.Date.now();
  };
  return $ = t, $;
}
var G, oe;
function Be() {
  if (oe) return G;
  oe = 1;
  var e = /\s/;
  function t(n) {
    for (var r = n.length; r-- && e.test(n.charAt(r)); )
      ;
    return r;
  }
  return G = t, G;
}
var A, ue;
function We() {
  if (ue) return A;
  ue = 1;
  var e = Be(), t = /^\s+/;
  function n(r) {
    return r && r.slice(0, e(r) + 1).replace(t, "");
  }
  return A = n, A;
}
var D, se;
function Oe() {
  if (se) return D;
  se = 1;
  var e = Te(), t = e.Symbol;
  return D = t, D;
}
var M, le;
function Ne() {
  if (le) return M;
  le = 1;
  var e = Oe(), t = Object.prototype, n = t.hasOwnProperty, r = t.toString, o = e ? e.toStringTag : void 0;
  function d(l) {
    var c = n.call(l, o), f = l[o];
    try {
      l[o] = void 0;
      var i = !0;
    } catch {
    }
    var m = r.call(l);
    return i && (c ? l[o] = f : delete l[o]), m;
  }
  return M = d, M;
}
var U, ce;
function xe() {
  if (ce) return U;
  ce = 1;
  var e = Object.prototype, t = e.toString;
  function n(r) {
    return t.call(r);
  }
  return U = n, U;
}
var F, fe;
function Pe() {
  if (fe) return F;
  fe = 1;
  var e = Oe(), t = Ne(), n = xe(), r = "[object Null]", o = "[object Undefined]", d = e ? e.toStringTag : void 0;
  function l(c) {
    return c == null ? c === void 0 ? o : r : d && d in Object(c) ? t(c) : n(c);
  }
  return F = l, F;
}
var V, de;
function $e() {
  if (de) return V;
  de = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return V = e, V;
}
var z, ve;
function Ge() {
  if (ve) return z;
  ve = 1;
  var e = Pe(), t = $e(), n = "[object Symbol]";
  function r(o) {
    return typeof o == "symbol" || t(o) && e(o) == n;
  }
  return z = r, z;
}
var H, be;
function Ae() {
  if (be) return H;
  be = 1;
  var e = We(), t = Se(), n = Ge(), r = NaN, o = /^[-+]0x[0-9a-f]+$/i, d = /^0b[01]+$/i, l = /^0o[0-7]+$/i, c = parseInt;
  function f(i) {
    if (typeof i == "number")
      return i;
    if (n(i))
      return r;
    if (t(i)) {
      var m = typeof i.valueOf == "function" ? i.valueOf() : i;
      i = t(m) ? m + "" : m;
    }
    if (typeof i != "string")
      return i === 0 ? i : +i;
    i = e(i);
    var v = d.test(i);
    return v || l.test(i) ? c(i.slice(2), v ? 2 : 8) : o.test(i) ? r : +i;
  }
  return H = f, H;
}
var X, me;
function De() {
  if (me) return X;
  me = 1;
  var e = Se(), t = ke(), n = Ae(), r = "Expected a function", o = Math.max, d = Math.min;
  function l(c, f, i) {
    var m, v, y, g, b, h, S = 0, q = !1, T = !1, O = !0;
    if (typeof c != "function")
      throw new TypeError(r);
    f = n(f) || 0, e(i) && (q = !!i.leading, T = "maxWait" in i, y = T ? o(n(i.maxWait) || 0, f) : y, O = "trailing" in i ? !!i.trailing : O);
    function w(s) {
      var _ = m, R = v;
      return m = v = void 0, S = s, g = c.apply(R, _), g;
    }
    function C(s) {
      return S = s, b = setTimeout(a, f), q ? w(s) : g;
    }
    function j(s) {
      var _ = s - h, R = s - S, Q = f - _;
      return T ? d(Q, y - R) : Q;
    }
    function E(s) {
      var _ = s - h, R = s - S;
      return h === void 0 || _ >= f || _ < 0 || T && R >= y;
    }
    function a() {
      var s = t();
      if (E(s))
        return u(s);
      b = setTimeout(a, j(s));
    }
    function u(s) {
      return b = void 0, O && m ? w(s) : (m = v = void 0, g);
    }
    function k() {
      b !== void 0 && clearTimeout(b), S = 0, m = h = v = b = void 0;
    }
    function we() {
      return b === void 0 ? g : u(t());
    }
    function B() {
      var s = t(), _ = E(s);
      if (m = arguments, v = this, h = s, _) {
        if (b === void 0)
          return C(h);
        if (T)
          return clearTimeout(b), b = setTimeout(a, f), w(h);
      }
      return b === void 0 && (b = setTimeout(a, f)), g;
    }
    return B.cancel = k, B.flush = we, B;
  }
  return X = l, X;
}
var Me = De();
const Z = /* @__PURE__ */ Ie(Me), I = (e, t, n) => Math.abs(e - t) <= n, Ue = typeof window > "u", ge = !Ue, Fe = { class: "vs-carousel" }, Ve = ["aria-label", "disabled"], ze = ["aria-label", "disabled"], He = 100, he = 410, Xe = {
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
    const n = t, r = p(null), o = p(!0), d = p(!1), l = p([]), c = p(0), f = p(0), i = p(0), m = p(0), v = p(0), y = p(null), g = () => {
      r.value && (S(), q(), w(), O(), h());
    }, b = Z(() => {
      r.value && (w(), O(), h());
    }, He), h = () => {
      const a = I(v.value, 0, 5), u = I(
        c.value - f.value,
        v.value,
        5
      );
      o.value = a, d.value = u;
    }, S = () => {
      c.value = r.value.scrollWidth, f.value = r.value.offsetWidth;
    }, q = () => {
      const a = [...r.value.children];
      l.value = a.map((u) => ({
        offsetLeft: u.offsetLeft,
        width: u.offsetWidth
      }));
    }, T = () => I(
      v.value + f.value,
      c.value,
      5
    ) ? l.value.length - 1 : l.value.findIndex((a) => I(a.offsetLeft, v.value, 5)), O = (a) => {
      const u = a !== void 0 ? a : T();
      u < 0 || (m.value = i.value, i.value = u > 0 ? u : 0);
    }, w = () => {
      v.value = r.value.scrollLeft || 0;
    }, C = () => {
      y.value = new MutationObserver(() => {
        g();
      }), y.value.observe(
        r.value,
        { attributes: !0, childList: !0, characterData: !0, subtree: !0 }
      );
    }, j = (a) => {
      E(i.value + a);
    }, E = (a) => {
      l.value[a] && (r.value.scrollTo({
        left: l.value[a].offsetLeft,
        behavior: "smooth"
      }), O(a));
    };
    return je(() => {
      g(), ge && (window.addEventListener("resize", Z(g, he), !1), r.value.addEventListener("scroll", b), C());
    }), Re(() => {
      ge && (y.value.disconnect(), r.value.removeEventListener("scroll", b), window.removeEventListener("resize", Z(g, he), !1));
    }), W(i, (a, u) => {
      a !== u && n("page", { currentPage: a, previousPage: u });
    }), W(o, (a) => {
      a && n("bound-left", !0);
    }), W(d, (a) => {
      a && n("bound-right", !0);
    }), (a, u) => (J(), qe("div", Fe, [
      (J(), pe(ye(e.tag), {
        ref_key: "vsWrapper",
        ref: r,
        class: "vs-carousel__wrapper"
      }, {
        default: _e(() => [
          K(a.$slots, "default")
        ]),
        _: 3
      }, 512)),
      e.hideArrows ? Ee("", !0) : K(a.$slots, "arrows", {
        key: 0,
        changeSlide: j,
        boundLeft: o.value,
        boundRight: d.value
      }, () => [
        Y(ee("button", {
          type: "button",
          "aria-label": e.i18n.slideLeft,
          disabled: o.value,
          class: "vs-carousel__arrows vs-carousel__arrows--left",
          onClick: u[0] || (u[0] = (k) => j(-1))
        }, " ← ", 8, Ve), [
          [te, e.hideArrowsOnBound ? !o.value : !0]
        ]),
        Y(ee("button", {
          type: "button",
          "aria-label": e.i18n.slideRight,
          disabled: d.value,
          class: "vs-carousel__arrows vs-carousel__arrows--right",
          onClick: u[1] || (u[1] = (k) => j(1))
        }, " → ", 8, ze), [
          [te, e.hideArrowsOnBound ? !d.value : !0]
        ])
      ])
    ]));
  }
}, Ze = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Je = Le({
  props: {
    /**
     * Custom tag
     */
    tag: {
      type: String,
      default: "li"
    }
  }
});
function Ke(e, t, n, r, o, d) {
  return J(), pe(ye(e.tag), {
    ref: "vsSlide",
    class: "vs-carousel__slide",
    tabindex: "0"
  }, {
    default: _e(() => [
      K(e.$slots, "default")
    ]),
    _: 3
  }, 512);
}
const Qe = /* @__PURE__ */ Ze(Je, [["render", Ke]]), et = {
  install: (e) => {
    e.component("Carousel", Xe), e.component("Slide", Qe);
  }
};
export {
  Xe as Carousel,
  Qe as Slide,
  et as default
};
