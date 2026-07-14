import { createBlock as e, createCommentVNode as t, createElementBlock as n, createElementVNode as r, defineComponent as i, mergeProps as a, normalizeProps as o, onBeforeUnmount as s, onMounted as c, onScopeDispose as l, openBlock as u, ref as d, renderSlot as f, resolveDynamicComponent as p, toRef as m, unref as h, vShow as g, watch as _, withCtx as v, withDirectives as y } from "vue";
//#region src/utils/helpers.ts
var b = typeof window < "u", x = (e, t, n = 5) => Math.abs(e - t) <= n;
function S(e, t) {
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
//#region src/hooks/useAutoplay.ts
function C({ autoplay: e, autoplayInterval: t, onAdvance: n, onAutoplayChange: r }) {
	let i = null, a = () => {
		i &&= (clearInterval(i), null);
	}, o = () => {
		a(), !(!b || !e.value) && (i = setInterval(n, t.value));
	};
	return _(e, (e) => e ? o() : a()), _(t, () => {
		e.value && o();
	}), l(a), {
		start: o,
		stop: a,
		pause: () => {
			!e.value || !i || (a(), r(!1));
		},
		resume: () => {
			!e.value || i || (o(), r(!0));
		}
	};
}
//#endregion
//#region src/hooks/useCarousel.ts
var w = 100, T = 10;
function E(e, t, { autoplay: n, autoplayInterval: r }) {
	let i = d(!0), a = d(!1), o = d(0), l = () => t.value ? Array.from(t.value.children).map((e) => e.offsetLeft) : [], u = (e) => {
		let n = t.value;
		return !n || e.length === 0 ? -1 : e.reduce((t, r, i) => Math.abs(r - n.scrollLeft) < Math.abs(e[t] - n.scrollLeft) ? i : t, 0);
	}, f = (n) => {
		if (!t.value) return;
		let { scrollLeft: r, offsetWidth: s, scrollWidth: c } = t.value;
		n !== o.value && e("slideChange", n), o.value = n;
		let l = n === 0, u = x(r + s, c, T);
		l && !i.value && e("leftBound", !0), i.value = l, u && !a.value && e("rightBound", !0), a.value = u;
	}, p = (n, r) => {
		let i = n[r];
		i === void 0 || !t.value || (t.value.scrollTo({
			left: i,
			behavior: "smooth"
		}), o.value = r, e("slideChange", r), g.start());
	}, m = (e) => {
		let t = l(), n = u(t);
		n !== -1 && p(t, n + e);
	}, h = (e) => {
		p(l(), e);
	}, g = C({
		autoplay: n,
		autoplayInterval: r,
		onAdvance: () => {
			a.value ? h(0) : m(1);
		},
		onAutoplayChange: (t) => e("autoplay", t)
	}), _ = () => {
		let e = u(l());
		e !== -1 && f(e);
	}, v = S(_, w);
	return c(() => {
		!b || !t.value || (_(), t.value.addEventListener("scroll", v), e("mounted", !0), g.start());
	}), s(() => {
		!b || !t.value || t.value.removeEventListener("scroll", v);
	}), {
		goToSlide: h,
		changeSlide: m,
		isBoundLeft: i,
		isBoundRight: a,
		pauseAutoplay: g.pause,
		resumeAutoplay: g.resume
	};
}
//#endregion
//#region src/components/Carousel.vue?vue&type=script&setup=true&lang.ts
var D = ["aria-label", "disabled"], O = ["aria-label", "disabled"], k = /* @__PURE__ */ i({
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
		let l = i, _ = c, b = d(null), { changeSlide: x, goToSlide: S, isBoundLeft: C, isBoundRight: w, pauseAutoplay: T, resumeAutoplay: k } = E(_, b, {
			autoplay: m(l, "autoplay"),
			autoplayInterval: m(l, "autoplayInterval")
		});
		return s({
			changeSlide: x,
			goToSlide: S,
			isBoundLeft: C,
			isBoundRight: w
		}), (s, c) => (u(), n("div", {
			class: "vs-carousel",
			onMouseenter: c[2] ||= (...e) => h(T) && h(T)(...e),
			onMouseleave: c[3] ||= (...e) => h(k) && h(k)(...e)
		}, [(u(), e(p(i.tag), {
			ref_key: "vsWrapper",
			ref: b,
			class: "vs-carousel__wrapper"
		}, {
			default: v(() => [f(s.$slots, "default")]),
			_: 3
		}, 512)), i.hideArrows ? t("", !0) : f(s.$slots, "arrows", o(a({ key: 0 }, {
			changeSlide: h(x),
			isBoundLeft: h(C),
			isBoundRight: h(w)
		})), () => [y(r("button", {
			type: "button",
			"aria-label": i.i18n.slideLeft,
			disabled: h(C),
			class: "vs-carousel__arrows vs-carousel__arrows--left",
			onClick: c[0] ||= (e) => h(x)(-1)
		}, " ← ", 8, D), [[g, !i.hideArrowsOnBound || !h(C)]]), y(r("button", {
			type: "button",
			"aria-label": i.i18n.slideRight,
			disabled: h(w),
			class: "vs-carousel__arrows vs-carousel__arrows--right",
			onClick: c[1] ||= (e) => h(x)(1)
		}, " → ", 8, O), [[g, !i.hideArrowsOnBound || !h(w)]])])], 32));
	}
}), A = /* @__PURE__ */ i({
	__name: "Slide",
	props: { tag: {
		type: String,
		default: "li"
	} },
	setup(t) {
		return (n, r) => (u(), e(p(t.tag), {
			ref: "vsSlide",
			class: "vs-carousel__slide",
			tabindex: "0"
		}, {
			default: v(() => [f(n.$slots, "default")]),
			_: 3
		}, 512));
	}
}), j = { install: (e) => {
	e.component("Carousel", k), e.component("Slide", A);
} };
//#endregion
export { k as Carousel, A as Slide, j as VueSnap, j as default };
