import { ref as _, onMounted as $, onBeforeUnmount as O, defineComponent as I, createElementBlock as A, openBlock as B, createBlock as R, renderSlot as b, resolveDynamicComponent as T, withCtx as k, normalizeProps as x, guardReactiveProps as D, unref as r, withDirectives as C, createElementVNode as L, vShow as w } from "vue";
const y = typeof window < "u", E = (n, e, t = 5) => Math.abs(n - e) <= t;
function M(n, e) {
  let t = null;
  const u = (...a) => {
    t && clearTimeout(t), t = setTimeout(() => {
      n(...a);
    }, e);
  };
  return u.cancel = () => {
    t && clearTimeout(t), t = null;
  }, u;
}
const N = 100;
function P(n, e) {
  const t = _(!0), u = _(!1), a = _(0), i = () => e.value ? Array.from(e.value.children ?? []).map(
    (o) => ({
      offsetLeft: o.offsetLeft,
      offsetWidth: o.offsetWidth
    })
  ) : [], v = (o) => e.value ? o.findIndex(({ offsetLeft: l }) => E(l, e.value.scrollLeft, 10)) : -1, c = (o) => {
    if (!e.value) return;
    const { scrollLeft: l, offsetWidth: f, scrollWidth: S } = e.value;
    o !== a.value && n("slideChange", o), a.value = o;
    const g = o === 0, p = E(l + f, S, 10);
    g ? (t.value = !0, n("leftBound", !0)) : t.value = !1, p ? (u.value = !0, n("rightBound", !0)) : u.value = !1;
  }, h = (o) => {
    const l = i(), f = v(l);
    if (f === -1) return;
    const S = f + o, g = l[S];
    !g || !e.value || e.value.scrollTo({ left: g.offsetLeft, behavior: "smooth" });
  }, s = (o) => {
    const f = i()[o];
    !f || !e.value || e.value.scrollTo({ left: f.offsetLeft, behavior: "smooth" });
  }, d = () => {
    const o = i(), l = v(o);
    l !== -1 && c(l);
  }, m = M(d, N);
  return $(() => {
    !y || !e.value || (d(), e.value.addEventListener("scroll", m), n("mounted", !0));
  }), O(() => {
    !y || !e.value || e.value.removeEventListener("scroll", m);
  }), {
    goToSlide: s,
    changeSlide: h,
    isBoundLeft: t,
    isBoundRight: u
  };
}
const U = { class: "vs-carousel" }, V = ["aria-label", "disabled"], q = ["aria-label", "disabled"], z = /* @__PURE__ */ I({
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
  setup(n, { expose: e, emit: t }) {
    const u = t, a = _(null), { changeSlide: i, goToSlide: v, isBoundLeft: c, isBoundRight: h } = P(u, a);
    return e({
      changeSlide: i,
      goToSlide: v
    }), (s, d) => (B(), A("div", U, [
      (B(), R(T(s.tag), {
        ref_key: "vsWrapper",
        ref: a,
        class: "vs-carousel__wrapper"
      }, {
        default: k(() => [
          b(s.$slots, "default")
        ]),
        _: 3
      }, 512)),
      b(s.$slots, "arrows", x(D({ changeSlide: r(i), isBoundLeft: r(c), isBoundRight: r(h) })), () => [
        C(L("button", {
          type: "button",
          "aria-label": s.i18n.slideLeft,
          disabled: r(c),
          class: "vs-carousel__arrows vs-carousel__arrows--left",
          onClick: d[0] || (d[0] = (m) => r(i)(-1))
        }, " ← ", 8, V), [
          [w, s.hideArrowsOnBound ? !r(c) : !0]
        ]),
        C(L("button", {
          type: "button",
          "aria-label": s.i18n.slideRight,
          disabled: r(h),
          class: "vs-carousel__arrows vs-carousel__arrows--right",
          onClick: d[1] || (d[1] = (m) => r(i)(1))
        }, " → ", 8, q), [
          [w, s.hideArrowsOnBound ? !r(h) : !0]
        ])
      ])
    ]));
  }
}), j = /* @__PURE__ */ I({
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
  setup(n) {
    return (e, t) => (B(), R(T(n.tag), {
      ref: "vsSlide",
      class: "vs-carousel__slide",
      tabindex: "0"
    }, {
      default: k(() => [
        b(e.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), G = {
  install: (n) => {
    n.component("Carousel", z), n.component("Slide", j);
  }
};
export {
  z as Carousel,
  j as Slide,
  G as VueSnap,
  G as default
};
