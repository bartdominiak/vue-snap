import { createBlock as e, createElementBlock as t, createElementVNode as n, defineComponent as r, guardReactiveProps as i, normalizeProps as a, onBeforeUnmount as o, onMounted as s, openBlock as c, ref as l, renderSlot as u, resolveDynamicComponent as d, unref as f, vShow as p, withCtx as m, withDirectives as h } from "vue";
//#region src/utils/helpers.ts
var g = typeof window < "u", _ = (e, t, n = 5) => Math.abs(e - t) <= n;
function v(e, t) {
	let n = null, r = (...r) => {
		n && clearTimeout(n), n = setTimeout(() => {
			e(...r);
		}, t);
	};
	return r.cancel = () => {
		n && clearTimeout(n), n = null;
	}, r;
}
//#endregion
//#region src/hooks/useCarousel.ts
var y = 100;
function b(e, t) {
	let n = l(!0), r = l(!1), i = l(0), a = () => t.value ? Array.from(t.value.children ?? []).map((e) => ({
		offsetLeft: e.offsetLeft,
		offsetWidth: e.offsetWidth
	})) : [], c = (e) => {
		let n = t.value;
		return n ? e.findIndex(({ offsetLeft: e }) => _(e, n.scrollLeft, 10)) : -1;
	}, u = (a) => {
		if (!t.value) return;
		let { scrollLeft: o, offsetWidth: s, scrollWidth: c } = t.value;
		a !== i.value && e("slideChange", a), i.value = a;
		let l = a === 0, u = _(o + s, c, 10);
		l && !n.value && e("leftBound", !0), n.value = l, u && !r.value && e("rightBound", !0), r.value = u;
	}, d = (n) => {
		let r = a(), o = c(r);
		if (o === -1) return;
		let s = o + n, l = r[s];
		!l || !t.value || (t.value.scrollTo({
			left: l.offsetLeft,
			behavior: "smooth"
		}), i.value = s, e("slideChange", s));
	}, f = (n) => {
		let r = a()[n];
		!r || !t.value || (t.value.scrollTo({
			left: r.offsetLeft,
			behavior: "smooth"
		}), i.value = n, e("slideChange", n));
	}, p = () => {
		let e = a(), t = c(e);
		t !== -1 && u(t);
	}, m = v(p, y);
	return s(() => {
		!g || !t.value || (p(), t.value.addEventListener("scroll", m), e("mounted", !0));
	}), o(() => {
		!g || !t.value || t.value.removeEventListener("scroll", m);
	}), {
		goToSlide: f,
		changeSlide: d,
		isBoundLeft: n,
		isBoundRight: r
	};
}
//#endregion
//#region src/components/Carousel.vue?vue&type=script&setup=true&lang.ts
var x = { class: "vs-carousel" }, S = ["aria-label", "disabled"], C = ["aria-label", "disabled"], w = /* @__PURE__ */ r({
	__name: "Carousel",
	props: {
		tag: { default: "ul" },
		hideArrowsOnBound: {
			type: Boolean,
			default: !1
		},
		i18n: { default: () => ({
			slideLeft: "Slide left",
			slideRight: "Slide right"
		}) }
	},
	emits: [
		"mounted",
		"slideChange",
		"leftBound",
		"rightBound"
	],
	setup(r, { expose: o, emit: s }) {
		let g = s, _ = l(null), { changeSlide: v, goToSlide: y, isBoundLeft: w, isBoundRight: T } = b(g, _);
		return o({
			changeSlide: v,
			goToSlide: y
		}), (r, o) => (c(), t("div", x, [(c(), e(d(r.tag), {
			ref_key: "vsWrapper",
			ref: _,
			class: "vs-carousel__wrapper"
		}, {
			default: m(() => [u(r.$slots, "default")]),
			_: 3
		}, 512)), u(r.$slots, "arrows", a(i({
			changeSlide: f(v),
			isBoundLeft: f(w),
			isBoundRight: f(T)
		})), () => [h(n("button", {
			type: "button",
			"aria-label": r.i18n.slideLeft,
			disabled: f(w),
			class: "vs-carousel__arrows vs-carousel__arrows--left",
			onClick: o[0] ||= (e) => f(v)(-1)
		}, " ← ", 8, S), [[p, !r.hideArrowsOnBound || !f(w)]]), h(n("button", {
			type: "button",
			"aria-label": r.i18n.slideRight,
			disabled: f(T),
			class: "vs-carousel__arrows vs-carousel__arrows--right",
			onClick: o[1] ||= (e) => f(v)(1)
		}, " → ", 8, C), [[p, !r.hideArrowsOnBound || !f(T)]])])]));
	}
}), T = /* @__PURE__ */ r({
	__name: "Slide",
	props: { tag: {
		type: String,
		default: "li"
	} },
	setup(t) {
		return (n, r) => (c(), e(d(t.tag), {
			ref: "vsSlide",
			class: "vs-carousel__slide",
			tabindex: "0"
		}, {
			default: m(() => [u(n.$slots, "default")]),
			_: 3
		}, 512));
	}
}), E = { install: (e) => {
	e.component("Carousel", w), e.component("Slide", T);
} };
//#endregion
export { w as Carousel, T as Slide, E as VueSnap, E as default };
