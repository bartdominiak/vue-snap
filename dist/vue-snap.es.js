import { createBlock as e, createCommentVNode as t, createElementBlock as n, createElementVNode as r, defineComponent as i, mergeProps as a, normalizeProps as o, onBeforeUnmount as s, onMounted as c, onScopeDispose as l, openBlock as u, ref as d, renderSlot as f, resolveDynamicComponent as p, shallowReadonly as m, shallowRef as h, toRef as g, toValue as _, unref as v, vShow as y, watch as b, withCtx as x, withDirectives as S } from "vue";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var C = () => {};
function w(e, t) {
	function n(...n) {
		return new Promise((r, i) => {
			Promise.resolve(e(() => t.apply(this, n), {
				fn: t,
				thisArg: this,
				args: n
			})).then(r).catch(i);
		});
	}
	return "cancel" in e && Object.assign(n, {
		cancel: e.cancel,
		flush: e.flush,
		isPending: e.isPending
	}), n;
}
function T(e, t = {}) {
	let n, r, i = C, a = C, o = h(!1), s = (e) => {
		clearTimeout(e), i(), i = C;
	}, c;
	return Object.assign((l) => {
		let u = _(e), d = _(t.maxWait);
		return n && s(n), u <= 0 || d !== void 0 && d <= 0 ? (r &&= (s(r), void 0), o.value = !1, Promise.resolve(l())) : (o.value = !0, new Promise((e, f) => {
			i = t.rejectOnCancel ? f : e, a = e, c = l, d && !r && (r = setTimeout(() => {
				n && s(n), r = void 0, o.value = !1, e(c());
			}, d)), n = setTimeout(() => {
				r && s(r), r = void 0, o.value = !1, e(l());
			}, u);
		}));
	}, {
		cancel: () => {
			n &&= (s(n), void 0), r &&= (s(r), void 0), o.value = !1, a = C;
		},
		flush: () => {
			if (o.value) {
				n &&= (clearTimeout(n), void 0), r &&= (clearTimeout(r), void 0), o.value = !1;
				let e = a;
				i = C, a = C, e(c());
			}
		},
		isPending: m(o)
	});
}
function E(e, t = 200, n = {}) {
	return w(T(t, n), e);
}
//#endregion
//#region src/utils/helpers.ts
var D = typeof window < "u", O = (e, t, n = 5) => Math.abs(e - t) <= n;
//#endregion
//#region src/composables/useAutoplay.ts
function k({ autoplay: e, autoplayInterval: t, onAdvance: n, onAutoplayChange: r }) {
	let i = null, a = () => {
		i &&= (clearInterval(i), null);
	}, o = () => {
		a(), !(!D || !e.value) && (i = setInterval(n, t.value));
	};
	return b(e, (e) => e ? o() : a()), b(t, () => {
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
//#region src/composables/useCarousel.ts
var A = 100, j = 10;
function M(e, t, { autoplay: n, autoplayInterval: r }) {
	let i = d(!0), a = d(!1), o = d(0), l = () => t.value ? Array.from(t.value.children).map((e) => e.offsetLeft) : [], u = (e) => {
		let n = t.value;
		return !n || e.length === 0 ? -1 : e.reduce((t, r, i) => Math.abs(r - n.scrollLeft) < Math.abs(e[t] - n.scrollLeft) ? i : t, 0);
	}, f = (n) => {
		if (!t.value) return;
		let { scrollLeft: r, offsetWidth: s, scrollWidth: c } = t.value;
		n !== o.value && e("slideChange", n), o.value = n;
		let l = n === 0, u = O(r + s, c, j);
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
	}, g = k({
		autoplay: n,
		autoplayInterval: r,
		onAdvance: () => {
			a.value ? h(0) : m(1);
		},
		onAutoplayChange: (t) => e("autoplay", t)
	}), _ = () => {
		let e = u(l());
		e !== -1 && f(e);
	}, v = E(_, A);
	return c(() => {
		!D || !t.value || (_(), t.value.addEventListener("scroll", v), e("mounted", !0), g.start());
	}), s(() => {
		!D || !t.value || t.value.removeEventListener("scroll", v);
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
var N = ["aria-label", "disabled"], P = ["aria-label", "disabled"], F = /* @__PURE__ */ i({
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
		let l = i, m = c, h = d(null), { changeSlide: _, goToSlide: b, isBoundLeft: C, isBoundRight: w, pauseAutoplay: T, resumeAutoplay: E } = M(m, h, {
			autoplay: g(l, "autoplay"),
			autoplayInterval: g(l, "autoplayInterval")
		});
		return s({
			changeSlide: _,
			goToSlide: b,
			isBoundLeft: C,
			isBoundRight: w
		}), (s, c) => (u(), n("div", {
			class: "vs-carousel",
			onMouseenter: c[2] ||= (...e) => v(T) && v(T)(...e),
			onMouseleave: c[3] ||= (...e) => v(E) && v(E)(...e)
		}, [(u(), e(p(i.tag), {
			ref_key: "vsWrapper",
			ref: h,
			class: "vs-carousel__wrapper"
		}, {
			default: x(() => [f(s.$slots, "default")]),
			_: 3
		}, 512)), i.hideArrows ? t("", !0) : f(s.$slots, "arrows", o(a({ key: 0 }, {
			changeSlide: v(_),
			isBoundLeft: v(C),
			isBoundRight: v(w)
		})), () => [S(r("button", {
			type: "button",
			"aria-label": i.i18n.slideLeft,
			disabled: v(C),
			class: "vs-carousel__arrows vs-carousel__arrows--left",
			onClick: c[0] ||= (e) => v(_)(-1)
		}, " ← ", 8, N), [[y, !i.hideArrowsOnBound || !v(C)]]), S(r("button", {
			type: "button",
			"aria-label": i.i18n.slideRight,
			disabled: v(w),
			class: "vs-carousel__arrows vs-carousel__arrows--right",
			onClick: c[1] ||= (e) => v(_)(1)
		}, " → ", 8, P), [[y, !i.hideArrowsOnBound || !v(w)]])])], 32));
	}
}), I = /* @__PURE__ */ i({
	__name: "Slide",
	props: { tag: { default: "li" } },
	setup(t) {
		return (n, r) => (u(), e(p(t.tag), {
			class: "vs-carousel__slide",
			tabindex: "0"
		}, {
			default: x(() => [f(n.$slots, "default")]),
			_: 3
		}));
	}
}), L = { install: (e) => {
	e.component("Carousel", F), e.component("Slide", I);
} };
//#endregion
export { F as Carousel, I as Slide, L as VueSnap, L as default };
