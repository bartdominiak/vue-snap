import { ref as S, onMounted as $, onBeforeUnmount as O, defineComponent as E, createElementBlock as A, openBlock as B, createBlock as I, renderSlot as b, resolveDynamicComponent as R, withCtx as T, normalizeProps as D, guardReactiveProps as x, unref as u, withDirectives as C, createElementVNode as w, vShow as L } from "vue";
const p = typeof window < "u", y = (t, e, n = 5) => Math.abs(t - e) <= n;
function M(t, e) {
  let n = null;
  const a = (...d) => {
    n && clearTimeout(n), n = setTimeout(() => {
      t(...d);
    }, e);
  };
  return a.cancel = () => {
    n && clearTimeout(n), n = null;
  }, a;
}
const N = 100;
function P(t, e) {
  const n = S(!0), a = S(!1), d = S(0), i = () => e.value ? Array.from(e.value.children ?? []).map(
    (o) => ({
      offsetLeft: o.offsetLeft,
      offsetWidth: o.offsetWidth
    })
  ) : [], v = (o) => {
    const s = e.value;
    return s ? o.findIndex(
      ({ offsetLeft: r }) => y(r, s.scrollLeft, 10)
    ) : -1;
  }, c = (o) => {
    if (!e.value) return;
    const { scrollLeft: s, offsetWidth: r, scrollWidth: m } = e.value;
    o !== d.value && t("slideChange", o), d.value = o;
    const _ = o === 0, k = y(s + r, m, 10);
    _ ? (n.value = !0, t("leftBound", !0)) : n.value = !1, k ? (a.value = !0, t("rightBound", !0)) : a.value = !1;
  }, h = (o) => {
    const s = i(), r = v(s);
    if (r === -1) return;
    const m = r + o, _ = s[m];
    !_ || !e.value || (e.value.scrollTo({
      left: _.offsetLeft,
      behavior: "smooth"
    }), t("slideChange", m));
  }, l = (o) => {
    const r = i()[o];
    !r || !e.value || (e.value.scrollTo({
      left: r.offsetLeft,
      behavior: "smooth"
    }), t("slideChange", o));
  }, f = () => {
    const o = i(), s = v(o);
    s !== -1 && c(s);
  }, g = M(f, N);
  return $(() => {
    !p || !e.value || (f(), e.value.addEventListener("scroll", g), t("mounted", !0));
  }), O(() => {
    !p || !e.value || e.value.removeEventListener("scroll", g);
  }), {
    goToSlide: l,
    changeSlide: h,
    isBoundLeft: n,
    isBoundRight: a
  };
}
const U = { class: "vs-carousel" }, V = ["aria-label", "disabled"], q = ["aria-label", "disabled"], z = /* @__PURE__ */ E({
  __name: "Carousel",
  props: {
    tag: { default: "ul" },
    hideArrowsOnBound: { type: Boolean, default: !1 },
    i18n: { default: () => ({
      slideLeft: "Slide left",
      slideRight: "Slide right"
    }) }
  },
  emits: ["mounted", "slideChange", "leftBound", "rightBound"],
  setup(t, { expose: e, emit: n }) {
    const a = n, d = S(null), { changeSlide: i, goToSlide: v, isBoundLeft: c, isBoundRight: h } = P(
      a,
      d
    );
    return e({
      changeSlide: i,
      goToSlide: v
    }), (l, f) => (B(), A("div", U, [
      (B(), I(R(l.tag), {
        ref_key: "vsWrapper",
        ref: d,
        class: "vs-carousel__wrapper"
      }, {
        default: T(() => [
          b(l.$slots, "default")
        ]),
        _: 3
      }, 512)),
      b(l.$slots, "arrows", D(x({ changeSlide: u(i), isBoundLeft: u(c), isBoundRight: u(h) })), () => [
        C(w("button", {
          type: "button",
          "aria-label": l.i18n.slideLeft,
          disabled: u(c),
          class: "vs-carousel__arrows vs-carousel__arrows--left",
          onClick: f[0] || (f[0] = (g) => u(i)(-1))
        }, " ← ", 8, V), [
          [L, l.hideArrowsOnBound ? !u(c) : !0]
        ]),
        C(w("button", {
          type: "button",
          "aria-label": l.i18n.slideRight,
          disabled: u(h),
          class: "vs-carousel__arrows vs-carousel__arrows--right",
          onClick: f[1] || (f[1] = (g) => u(i)(1))
        }, " → ", 8, q), [
          [L, l.hideArrowsOnBound ? !u(h) : !0]
        ])
      ])
    ]));
  }
}), j = /* @__PURE__ */ E({
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
  setup(t) {
    return (e, n) => (B(), I(R(t.tag), {
      ref: "vsSlide",
      class: "vs-carousel__slide",
      tabindex: "0"
    }, {
      default: T(() => [
        b(e.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), G = {
  install: (t) => {
    t.component("Carousel", z), t.component("Slide", j);
  }
};
export {
  z as Carousel,
  j as Slide,
  G as VueSnap,
  G as default
};
