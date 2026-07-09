import { createBlock as e, createCommentVNode as t, createElementBlock as n, createElementVNode as r, defineComponent as i, mergeProps as a, normalizeProps as o, onBeforeUnmount as s, onMounted as c, openBlock as l, ref as u, renderSlot as d, resolveDynamicComponent as f, toRef as p, unref as m, vShow as h, watch as g, withCtx as _, withDirectives as v } from "vue";
//#region src/utils/helpers.ts
var y = typeof window < "u", b = (e, t, n = 5) => Math.abs(e - t) <= n;
function x(e, t) {
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
var S = 100;
function C(e, t, { autoplay: n, autoplayInterval: r }) {
	let i = u(!0), a = u(!1), o = u(0), l = null, d = () => t.value ? Array.from(t.value.children ?? []).map((e) => ({
		offsetLeft: e.offsetLeft,
		offsetWidth: e.offsetWidth
	})) : [], f = (e) => {
		let n = t.value;
		return !n || e.length === 0 ? -1 : e.reduce((t, r, i) => Math.abs(r.offsetLeft - n.scrollLeft) < Math.abs(e[t].offsetLeft - n.scrollLeft) ? i : t, 0);
	}, p = (n) => {
		if (!t.value) return;
		let { scrollLeft: r, offsetWidth: s, scrollWidth: c } = t.value;
		n !== o.value && e("slideChange", n), o.value = n;
		let l = n === 0, u = b(r + s, c, 10);
		l && !i.value && e("leftBound", !0), i.value = l, u && !a.value && e("rightBound", !0), a.value = u;
	}, m = (n) => {
		let r = d(), i = f(r);
		if (i === -1) return;
		let a = i + n, s = r[a];
		!s || !t.value || (t.value.scrollTo({
			left: s.offsetLeft,
			behavior: "smooth"
		}), o.value = a, e("slideChange", a), w());
	}, h = (n) => {
		let r = d()[n];
		!r || !t.value || (t.value.scrollTo({
			left: r.offsetLeft,
			behavior: "smooth"
		}), o.value = n, e("slideChange", n), w());
	}, _ = () => {
		a.value ? h(0) : m(1);
	}, v = () => {
		l &&= (clearInterval(l), null);
	}, C = () => {
		v(), !(!y || !n.value) && (l = setInterval(_, r.value));
	}, w = () => {
		n.value && C();
	}, T = () => {
		!n.value || !l || (v(), e("autoplay", !1));
	}, E = () => {
		!n.value || l || (C(), e("autoplay", !0));
	}, D = () => {
		let e = d(), t = f(e);
		t !== -1 && p(t);
	}, O = x(D, S);
	return g(n, (e) => {
		e ? C() : v();
	}), g(r, () => {
		n.value && C();
	}), c(() => {
		!y || !t.value || (D(), t.value.addEventListener("scroll", O), e("mounted", !0), C());
	}), s(() => {
		v(), !(!y || !t.value) && t.value.removeEventListener("scroll", O);
	}), {
		goToSlide: h,
		changeSlide: m,
		isBoundLeft: i,
		isBoundRight: a,
		pauseAutoplay: T,
		resumeAutoplay: E
	};
}
//#endregion
//#region src/components/Carousel.vue?vue&type=script&setup=true&lang.ts
var w = ["aria-label", "disabled"], T = ["aria-label", "disabled"], E = /* @__PURE__ */ i({
	__name: "Carousel",
	props: {
		tag: { default: "ul" },
		hideArrows: {
			type: Boolean,
			default: !1
		},
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
	setup(i, { expose: s, emit: c }) {
		let g = i, y = c, b = u(null), { changeSlide: x, goToSlide: S, isBoundLeft: E, isBoundRight: D, pauseAutoplay: O, resumeAutoplay: k } = C(y, b, {
			autoplay: p(g, "autoplay"),
			autoplayInterval: p(g, "autoplayInterval")
		});
		return s({
			changeSlide: x,
			goToSlide: S
		}), (i, s) => (l(), n("div", {
			class: "vs-carousel",
			onMouseenter: s[2] ||= (...e) => m(O) && m(O)(...e),
			onMouseleave: s[3] ||= (...e) => m(k) && m(k)(...e)
		}, [(l(), e(f(i.tag), {
			ref_key: "vsWrapper",
			ref: b,
			class: "vs-carousel__wrapper"
		}, {
			default: _(() => [d(i.$slots, "default")]),
			_: 3
		}, 512)), i.hideArrows ? t("", !0) : d(i.$slots, "arrows", o(a({ key: 0 }, {
			changeSlide: m(x),
			isBoundLeft: m(E),
			isBoundRight: m(D)
		})), () => [v(r("button", {
			type: "button",
			"aria-label": i.i18n.slideLeft,
			disabled: m(E),
			class: "vs-carousel__arrows vs-carousel__arrows--left",
			onClick: s[0] ||= (e) => m(x)(-1)
		}, " ← ", 8, w), [[h, !i.hideArrowsOnBound || !m(E)]]), v(r("button", {
			type: "button",
			"aria-label": i.i18n.slideRight,
			disabled: m(D),
			class: "vs-carousel__arrows vs-carousel__arrows--right",
			onClick: s[1] ||= (e) => m(x)(1)
		}, " → ", 8, T), [[h, !i.hideArrowsOnBound || !m(D)]])])], 32));
	}
}), D = /* @__PURE__ */ i({
	__name: "Slide",
	props: { tag: {
		type: String,
		default: "li"
	} },
	setup(t) {
		return (n, r) => (l(), e(f(t.tag), {
			ref: "vsSlide",
			class: "vs-carousel__slide",
			tabindex: "0"
		}, {
			default: _(() => [d(n.$slots, "default")]),
			_: 3
		}, 512));
	}
}), O = { install: (e) => {
	e.component("Carousel", E), e.component("Slide", D);
} };
//#endregion
export { E as Carousel, D as Slide, O as VueSnap, O as default };
