import { ref as S, onMounted as k, onBeforeUnmount as $, defineComponent as E, createElementBlock as O, openBlock as _, createBlock as R, renderSlot as b, resolveDynamicComponent as p, withCtx as I, normalizeProps as A, guardReactiveProps as D, unref as r, withDirectives as C, createElementVNode as w, vShow as L } from "vue";
const y = typeof window < "u", x = (e, t, o = 5) => Math.abs(e - t) <= o;
function M(e, t) {
  let o = null;
  const i = (...u) => {
    o && clearTimeout(o), o = setTimeout(() => {
      e(...u);
    }, t);
  };
  return i.cancel = () => {
    o && clearTimeout(o), o = null;
  }, i;
}
const N = 100;
function P(e, t) {
  const o = S(!0), i = S(!1), u = S(0), a = () => {
    var n;
    return [...(n = t.value) == null ? void 0 : n.children].map(({ offsetLeft: l, offsetWidth: s }) => ({
      offsetLeft: l,
      offsetWidth: s
    }));
  }, h = (n) => n.findIndex(({ offsetLeft: l }) => x(l, t.value.scrollLeft, 10)), c = (n) => {
    const { scrollLeft: l, offsetWidth: s, scrollWidth: B } = t.value;
    n !== u.value && e("slideChange", n), u.value = n;
    const m = n === 0, T = x(l + s, B, 10);
    m ? (o.value = !0, e("leftBound", !0)) : o.value = !1, T ? (i.value = !0, e("rightBound", !0)) : i.value = !1;
  }, f = (n) => {
    const l = a(), s = h(l);
    if (s === -1) return;
    const B = s + n, m = l[B];
    m && t.value.scrollTo({ left: m.offsetLeft, behavior: "smooth" });
  }, v = (n) => {
    const s = a()[n];
    s && t.value.scrollTo({ left: s.offsetLeft, behavior: "smooth" });
  }, d = () => {
    const n = a(), l = h(n);
    l !== -1 && c(l);
  }, g = M(d, N);
  return k(() => {
    !y || !t.value || (d(), t.value.addEventListener("scroll", g), e("mounted", !0));
  }), $(() => {
    !y || !t.value || t.value.removeEventListener("scroll", g);
  }), {
    goToSlide: v,
    changeSlide: f,
    isBoundLeft: o,
    isBoundRight: i
  };
}
const U = { class: "vs-carousel" }, V = ["aria-label", "disabled"], q = ["aria-label", "disabled"], z = /* @__PURE__ */ E({
  __name: "Carousel",
  props: {
    tag: {
      type: String,
      default: "ul"
    },
    hideArrowsOnBound: {
      type: Boolean,
      default: !1
    },
    i18n: {
      default: () => ({ slideLeft: "Slide left", slideRight: "Slide right" }),
      validator: (e) => ["slideLeft", "slideRight"].every((t) => t in e)
    }
  },
  emits: ["mounted", "slideChange", "leftBound", "rightBound"],
  setup(e, { expose: t, emit: o }) {
    const i = o, u = S(null), { changeSlide: a, goToSlide: h, isBoundLeft: c, isBoundRight: f } = P(i, u);
    return t({
      changeSlide: a,
      goToSlide: h
    }), (v, d) => (_(), O("div", U, [
      (_(), R(p(e.tag), {
        ref_key: "vsWrapper",
        ref: u,
        class: "vs-carousel__wrapper"
      }, {
        default: I(() => [
          b(v.$slots, "default")
        ]),
        _: 3
      }, 512)),
      b(v.$slots, "arrows", A(D({ changeSlide: r(a), isBoundLeft: r(c), isBoundRight: r(f) })), () => [
        C(w("button", {
          type: "button",
          "aria-label": e.i18n.slideLeft,
          disabled: r(c),
          class: "vs-carousel__arrows vs-carousel__arrows--left",
          onClick: d[0] || (d[0] = (g) => r(a)(-1))
        }, " ← ", 8, V), [
          [L, e.hideArrowsOnBound ? !r(c) : !0]
        ]),
        C(w("button", {
          type: "button",
          "aria-label": e.i18n.slideRight,
          disabled: r(f),
          class: "vs-carousel__arrows vs-carousel__arrows--right",
          onClick: d[1] || (d[1] = (g) => r(a)(1))
        }, " → ", 8, q), [
          [L, e.hideArrowsOnBound ? !r(f) : !0]
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
  setup(e) {
    return (t, o) => (_(), R(p(e.tag), {
      ref: "vsSlide",
      class: "vs-carousel__slide",
      tabindex: "0"
    }, {
      default: I(() => [
        b(t.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), G = {
  install: (e) => {
    e.component("Carousel", z), e.component("Slide", j);
  }
};
export {
  z as Carousel,
  j as Slide,
  G as VueSnap,
  G as default
};
