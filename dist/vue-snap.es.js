import { createBlock as e, createElementBlock as t, createElementVNode as n, defineComponent as r, guardReactiveProps as i, normalizeProps as a, onBeforeUnmount as o, onMounted as s, openBlock as c, ref as l, renderSlot as u, resolveDynamicComponent as d, toRef as f, unref as p, vShow as m, watch as h, withCtx as g, withDirectives as _ } from "vue";
//#region src/utils/helpers.ts
var v = typeof window < "u", y = (e, t, n = 5) => Math.abs(e - t) <= n;
function b(e, t) {
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
var x = 100;
function S(e, t, { autoplay: n, autoplayInterval: r }) {
	let i = l(!0), a = l(!1), c = l(0), u = null, d = () => t.value ? Array.from(t.value.children ?? []).map((e) => ({
		offsetLeft: e.offsetLeft,
		offsetWidth: e.offsetWidth
	})) : [], f = (e) => {
		let n = t.value;
		return !n || e.length === 0 ? -1 : e.reduce((t, r, i) => Math.abs(r.offsetLeft - n.scrollLeft) < Math.abs(e[t].offsetLeft - n.scrollLeft) ? i : t, 0);
	}, p = (n) => {
		if (!t.value) return;
		let { scrollLeft: r, offsetWidth: o, scrollWidth: s } = t.value;
		n !== c.value && e("slideChange", n), c.value = n;
		let l = n === 0, u = y(r + o, s, 10);
		l && !i.value && e("leftBound", !0), i.value = l, u && !a.value && e("rightBound", !0), a.value = u;
	}, m = (n) => {
		let r = d(), i = f(r);
		if (i === -1) return;
		let a = i + n, o = r[a];
		!o || !t.value || (t.value.scrollTo({
			left: o.offsetLeft,
			behavior: "smooth"
		}), c.value = a, e("slideChange", a), w());
	}, g = (n) => {
		let r = d()[n];
		!r || !t.value || (t.value.scrollTo({
			left: r.offsetLeft,
			behavior: "smooth"
		}), c.value = n, e("slideChange", n), w());
	}, _ = () => {
		a.value ? g(0) : m(1);
	}, S = () => {
		u &&= (clearInterval(u), null);
	}, C = () => {
		S(), !(!v || !n.value) && (u = setInterval(_, r.value));
	}, w = () => {
		n.value && C();
	}, T = () => {
		!n.value || !u || (S(), e("autoplay", !1));
	}, E = () => {
		!n.value || u || (C(), e("autoplay", !0));
	}, D = () => {
		let e = d(), t = f(e);
		t !== -1 && p(t);
	}, O = b(D, x);
	return h(n, (e) => {
		e ? C() : S();
	}), h(r, () => {
		n.value && C();
	}), s(() => {
		!v || !t.value || (D(), t.value.addEventListener("scroll", O), e("mounted", !0), C());
	}), o(() => {
		S(), !(!v || !t.value) && t.value.removeEventListener("scroll", O);
	}), {
		goToSlide: g,
		changeSlide: m,
		isBoundLeft: i,
		isBoundRight: a,
		pauseAutoplay: T,
		resumeAutoplay: E
	};
}
//#endregion
//#region src/components/Carousel.vue?vue&type=script&setup=true&lang.ts
var C = ["aria-label", "disabled"], w = ["aria-label", "disabled"], T = /* @__PURE__ */ r({
	__name: "Carousel",
	props: {
		tag: { default: "ul" },
		hideArrowsOnBound: {
			type: Boolean,
			default: !1
		},
		autoplay: {
			type: Boolean,
			default: !1
		},
		autoplayInterval: { default: 3e3 },
		i18n: { default: () => ({
			slideLeft: "Slide left",
			slideRight: "Slide right"
		}) }
	},
	emits: [
		"mounted",
		"slideChange",
		"leftBound",
		"rightBound",
		"autoplay"
	],
	setup(r, { expose: o, emit: s }) {
		let h = r, v = s, y = l(null), { changeSlide: b, goToSlide: x, isBoundLeft: T, isBoundRight: E, pauseAutoplay: D, resumeAutoplay: O } = S(v, y, {
			autoplay: f(h, "autoplay"),
			autoplayInterval: f(h, "autoplayInterval")
		});
		return o({
			changeSlide: b,
			goToSlide: x
		}), (r, o) => (c(), t("div", {
			class: "vs-carousel",
			onMouseenter: o[2] ||= (...e) => p(D) && p(D)(...e),
			onMouseleave: o[3] ||= (...e) => p(O) && p(O)(...e)
		}, [(c(), e(d(r.tag), {
			ref_key: "vsWrapper",
			ref: y,
			class: "vs-carousel__wrapper"
		}, {
			default: g(() => [u(r.$slots, "default")]),
			_: 3
		}, 512)), u(r.$slots, "arrows", a(i({
			changeSlide: p(b),
			isBoundLeft: p(T),
			isBoundRight: p(E)
		})), () => [_(n("button", {
			type: "button",
			"aria-label": r.i18n.slideLeft,
			disabled: p(T),
			class: "vs-carousel__arrows vs-carousel__arrows--left",
			onClick: o[0] ||= (e) => p(b)(-1)
		}, " ← ", 8, C), [[m, !r.hideArrowsOnBound || !p(T)]]), _(n("button", {
			type: "button",
			"aria-label": r.i18n.slideRight,
			disabled: p(E),
			class: "vs-carousel__arrows vs-carousel__arrows--right",
			onClick: o[1] ||= (e) => p(b)(1)
		}, " → ", 8, w), [[m, !r.hideArrowsOnBound || !p(E)]])])], 32));
	}
}), E = /* @__PURE__ */ r({
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
			default: g(() => [u(n.$slots, "default")]),
			_: 3
		}, 512));
	}
}), D = { install: (e) => {
	e.component("Carousel", T), e.component("Slide", E);
} };
//#endregion
export { T as Carousel, E as Slide, D as VueSnap, D as default };
