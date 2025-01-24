(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerpolicy && (i.referrerPolicy = s.referrerpolicy),
      s.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function n(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = l(s);
    fetch(s.href, i);
  }
})();
function q() {}
const Sl = (e) => e;
function jl(e, t) {
  for (const l in t) e[l] = t[l];
  return e;
}
function Ol(e) {
  return e();
}
function hl() {
  return Object.create(null);
}
function K(e) {
  e.forEach(Ol);
}
function Ut(e) {
  return typeof e == "function";
}
function re(e, t) {
  return e != e
    ? t == t
    : e !== t || (e && typeof e == "object") || typeof e == "function";
}
let vt;
function D(e, t) {
  return vt || (vt = document.createElement("a")), (vt.href = t), e === vt.href;
}
function Fl(e) {
  return Object.keys(e).length === 0;
}
function ql(e, ...t) {
  if (e == null) return q;
  const l = e.subscribe(...t);
  return l.unsubscribe ? () => l.unsubscribe() : l;
}
function J(e, t, l) {
  e.$$.on_destroy.push(ql(t, l));
}
function $t(e, t, l, n) {
  if (e) {
    const s = Tl(e, t, l, n);
    return e[0](s);
  }
}
function Tl(e, t, l, n) {
  return e[1] && n ? jl(l.ctx.slice(), e[1](n(t))) : l.ctx;
}
function Pt(e, t, l, n) {
  if (e[2] && n) {
    const s = e[2](n(l));
    if (t.dirty === void 0) return s;
    if (typeof s == "object") {
      const i = [],
        a = Math.max(t.dirty.length, s.length);
      for (let c = 0; c < a; c += 1) i[c] = t.dirty[c] | s[c];
      return i;
    }
    return t.dirty | s;
  }
  return t.dirty;
}
function Et(e, t, l, n, s, i) {
  if (s) {
    const a = Tl(t, l, n, i);
    e.p(a, s);
  }
}
function At(e) {
  if (e.ctx.length > 32) {
    const t = [],
      l = e.ctx.length / 32;
    for (let n = 0; n < l; n++) t[n] = -1;
    return t;
  }
  return -1;
}
function Hl(e, t, l) {
  return e.set(l), t;
}
const Nl = typeof window < "u";
let Gl = Nl ? () => window.performance.now() : () => Date.now(),
  zt = Nl ? (e) => requestAnimationFrame(e) : q;
const Re = new Set();
function Il(e) {
  Re.forEach((t) => {
    t.c(e) || (Re.delete(t), t.f());
  }),
    Re.size !== 0 && zt(Il);
}
function Bl(e) {
  let t;
  return (
    Re.size === 0 && zt(Il),
    {
      promise: new Promise((l) => {
        Re.add((t = { c: e, f: l }));
      }),
      abort() {
        Re.delete(t);
      },
    }
  );
}
function r(e, t) {
  e.appendChild(t);
}
function Ul(e) {
  if (!e) return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && t.host ? t : e.ownerDocument;
}
function Jl(e) {
  const t = f("style");
  return Kl(Ul(e), t), t.sheet;
}
function Kl(e, t) {
  return r(e.head || e, t), t.sheet;
}
function R(e, t, l) {
  e.insertBefore(t, l || null);
}
function C(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function bl(e, t) {
  for (let l = 0; l < e.length; l += 1) e[l] && e[l].d(t);
}
function f(e) {
  return document.createElement(e);
}
function S(e) {
  return document.createTextNode(e);
}
function w() {
  return S(" ");
}
function Wl() {
  return S("");
}
function U(e, t, l, n) {
  return e.addEventListener(t, l, n), () => e.removeEventListener(t, l, n);
}
function Dt(e) {
  return function (t) {
    return t.stopPropagation(), e.call(this, t);
  };
}
function o(e, t, l) {
  l == null
    ? e.removeAttribute(t)
    : e.getAttribute(t) !== l && e.setAttribute(t, l);
}
function _t(e) {
  return e === "" ? null : +e;
}
function Ql(e) {
  return Array.from(e.childNodes);
}
function G(e, t) {
  (t = "" + t), e.data !== t && (e.data = t);
}
function Ae(e, t) {
  e.value = t == null ? "" : t;
}
function B(e, t, l, n) {
  l == null
    ? e.style.removeProperty(t)
    : e.style.setProperty(t, l, n ? "important" : "");
}
function Ce(e, t, l) {
  e.classList[l ? "add" : "remove"](t);
}
function Xl(e, t, { bubbles: l = !1, cancelable: n = !1 } = {}) {
  const s = document.createEvent("CustomEvent");
  return s.initCustomEvent(e, l, n, t), s;
}
const gt = new Map();
let ht = 0;
function Yl(e) {
  let t = 5381,
    l = e.length;
  for (; l--; ) t = ((t << 5) - t) ^ e.charCodeAt(l);
  return t >>> 0;
}
function Zl(e, t) {
  const l = { stylesheet: Jl(t), rules: {} };
  return gt.set(e, l), l;
}
function yl(e, t, l, n, s, i, a, c = 0) {
  const u = 16.666 / n;
  let m = `{
`;
  for (let b = 0; b <= 1; b += u) {
    const v = t + (l - t) * i(b);
    m +=
      b * 100 +
      `%{${a(v, 1 - v)}}
`;
  }
  const d =
      m +
      `100% {${a(l, 1 - l)}}
}`,
    p = `__svelte_${Yl(d)}_${c}`,
    g = Ul(e),
    { stylesheet: _, rules: h } = gt.get(g) || Zl(g, e);
  h[p] ||
    ((h[p] = !0), _.insertRule(`@keyframes ${p} ${d}`, _.cssRules.length));
  const V = e.style.animation || "";
  return (
    (e.style.animation = `${
      V ? `${V}, ` : ""
    }${p} ${n}ms linear ${s}ms 1 both`),
    (ht += 1),
    p
  );
}
function xl(e, t) {
  const l = (e.style.animation || "").split(", "),
    n = l.filter(
      t ? (i) => i.indexOf(t) < 0 : (i) => i.indexOf("__svelte") === -1
    ),
    s = l.length - n.length;
  s && ((e.style.animation = n.join(", ")), (ht -= s), ht || en());
}
function en() {
  zt(() => {
    ht ||
      (gt.forEach((e) => {
        const { ownerNode: t } = e.stylesheet;
        t && C(t);
      }),
      gt.clear());
  });
}
let Ye;
function We(e) {
  Ye = e;
}
function zl() {
  if (!Ye) throw new Error("Function called outside component initialization");
  return Ye;
}
function jt(e) {
  zl().$$.on_mount.push(e);
}
function tn(e) {
  zl().$$.on_destroy.push(e);
}
function Ct(e, t) {
  const l = e.$$.callbacks[t.type];
  l && l.slice().forEach((n) => n.call(this, t));
}
const Ee = [],
  Ze = [];
let Se = [];
const Rt = [],
  ln = Promise.resolve();
let St = !1;
function nn() {
  St || ((St = !0), ln.then(Dl));
}
function ie(e) {
  Se.push(e);
}
function wl(e) {
  Rt.push(e);
}
const Lt = new Set();
let $e = 0;
function Dl() {
  if ($e !== 0) return;
  const e = Ye;
  do {
    try {
      for (; $e < Ee.length; ) {
        const t = Ee[$e];
        $e++, We(t), sn(t.$$);
      }
    } catch (t) {
      throw ((Ee.length = 0), ($e = 0), t);
    }
    for (We(null), Ee.length = 0, $e = 0; Ze.length; ) Ze.pop()();
    for (let t = 0; t < Se.length; t += 1) {
      const l = Se[t];
      Lt.has(l) || (Lt.add(l), l());
    }
    Se.length = 0;
  } while (Ee.length);
  for (; Rt.length; ) Rt.pop()();
  (St = !1), Lt.clear(), We(e);
}
function sn(e) {
  if (e.fragment !== null) {
    e.update(), K(e.before_update);
    const t = e.dirty;
    (e.dirty = [-1]),
      e.fragment && e.fragment.p(e.ctx, t),
      e.after_update.forEach(ie);
  }
}
function rn(e) {
  const t = [],
    l = [];
  Se.forEach((n) => (e.indexOf(n) === -1 ? t.push(n) : l.push(n))),
    l.forEach((n) => n()),
    (Se = t);
}
let Ke;
function on() {
  return (
    Ke ||
      ((Ke = Promise.resolve()),
      Ke.then(() => {
        Ke = null;
      })),
    Ke
  );
}
function Mt(e, t, l) {
  e.dispatchEvent(Xl(`${t ? "intro" : "outro"}${l}`));
}
const pt = new Set();
let te;
function an() {
  te = { r: 0, c: [], p: te };
}
function cn() {
  te.r || K(te.c), (te = te.p);
}
function X(e, t) {
  e && e.i && (pt.delete(e), e.i(t));
}
function x(e, t, l, n) {
  if (e && e.o) {
    if (pt.has(e)) return;
    pt.add(e),
      te.c.push(() => {
        pt.delete(e), n && (l && e.d(1), n());
      }),
      e.o(t);
  } else n && n();
}
const un = { duration: 0 };
function ne(e, t, l, n) {
  const s = { direction: "both" };
  let i = t(e, l, s),
    a = n ? 0 : 1,
    c = null,
    u = null,
    m = null;
  function d() {
    m && xl(e, m);
  }
  function p(_, h) {
    const V = _.b - a;
    return (
      (h *= Math.abs(V)),
      {
        a,
        b: _.b,
        d: V,
        duration: h,
        start: _.start,
        end: _.start + h,
        group: _.group,
      }
    );
  }
  function g(_) {
    const {
        delay: h = 0,
        duration: V = 300,
        easing: b = Sl,
        tick: v = q,
        css: k,
      } = i || un,
      $ = { start: Gl() + h, b: _ };
    _ || (($.group = te), (te.r += 1)),
      c || u
        ? (u = $)
        : (k && (d(), (m = yl(e, a, _, V, h, b, k))),
          _ && v(0, 1),
          (c = p($, V)),
          ie(() => Mt(e, _, "start")),
          Bl((M) => {
            if (
              (u &&
                M > u.start &&
                ((c = p(u, V)),
                (u = null),
                Mt(e, c.b, "start"),
                k && (d(), (m = yl(e, a, c.b, c.duration, 0, b, i.css)))),
              c)
            ) {
              if (M >= c.end)
                v((a = c.b), 1 - a),
                  Mt(e, c.b, "end"),
                  u || (c.b ? d() : --c.group.r || K(c.group.c)),
                  (c = null);
              else if (M >= c.start) {
                const y = M - c.start;
                (a = c.a + c.d * b(y / c.duration)), v(a, 1 - a);
              }
            }
            return !!(c || u);
          }));
  }
  return {
    run(_) {
      Ut(i)
        ? on().then(() => {
            (i = i(s)), g(_);
          })
        : g(_);
    },
    end() {
      d(), (c = u = null);
    },
  };
}
function kl(e, t, l) {
  const n = e.$$.props[t];
  n !== void 0 && ((e.$$.bound[n] = l), l(e.$$.ctx[n]));
}
function Oe(e) {
  e && e.c();
}
function ue(e, t, l, n) {
  const { fragment: s, after_update: i } = e.$$;
  s && s.m(t, l),
    n ||
      ie(() => {
        const a = e.$$.on_mount.map(Ol).filter(Ut);
        e.$$.on_destroy ? e.$$.on_destroy.push(...a) : K(a),
          (e.$$.on_mount = []);
      }),
    i.forEach(ie);
}
function fe(e, t) {
  const l = e.$$;
  l.fragment !== null &&
    (rn(l.after_update),
    K(l.on_destroy),
    l.fragment && l.fragment.d(t),
    (l.on_destroy = l.fragment = null),
    (l.ctx = []));
}
function fn(e, t) {
  e.$$.dirty[0] === -1 && (Ee.push(e), nn(), e.$$.dirty.fill(0)),
    (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function de(e, t, l, n, s, i, a, c = [-1]) {
  const u = Ye;
  We(e);
  const m = (e.$$ = {
    fragment: null,
    ctx: [],
    props: i,
    update: q,
    not_equal: s,
    bound: hl(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    callbacks: hl(),
    dirty: c,
    skip_bound: !1,
    root: t.target || u.$$.root,
  });
  a && a(m.root);
  let d = !1;
  if (
    ((m.ctx = l
      ? l(e, t.props || {}, (p, g, ..._) => {
          const h = _.length ? _[0] : g;
          return (
            m.ctx &&
              s(m.ctx[p], (m.ctx[p] = h)) &&
              (!m.skip_bound && m.bound[p] && m.bound[p](h), d && fn(e, p)),
            g
          );
        })
      : []),
    m.update(),
    (d = !0),
    K(m.before_update),
    (m.fragment = n ? n(m.ctx) : !1),
    t.target)
  ) {
    if (t.hydrate) {
      const p = Ql(t.target);
      m.fragment && m.fragment.l(p), p.forEach(C);
    } else m.fragment && m.fragment.c();
    t.intro && X(e.$$.fragment),
      ue(e, t.target, t.anchor, t.customElement),
      Dl();
  }
  We(u);
}
class me {
  $destroy() {
    fe(this, 1), (this.$destroy = q);
  }
  $on(t, l) {
    if (!Ut(l)) return q;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return (
      n.push(l),
      () => {
        const s = n.indexOf(l);
        s !== -1 && n.splice(s, 1);
      }
    );
  }
  $set(t) {
    this.$$set &&
      !Fl(t) &&
      ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
  }
}
async function Z(e, t = {}) {
  const l = {
      method: "post",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(t),
    },
    n = window.GetParentResourceName
      ? window.GetParentResourceName()
      : "nui-frame-app";
  return await (await fetch(`https://${n}/${e}`, l)).json();
}
const dn = "" + new URL("close.0af0a5f5.svg", import.meta.url).href,
  mn = "" + new URL("deposit.e5e37bf0.svg", import.meta.url).href,
  vn = "" + new URL("favorite.954ce9a5.svg", import.meta.url).href,
  pn = "" + new URL("favoriteOn.2a15a6ac.svg", import.meta.url).href,
  _n = "" + new URL("garageLogo.a9855b3a.svg", import.meta.url).href,
  gn = "" + new URL("money.0ae53639.svg", import.meta.url).href,
  hn = "" + new URL("passaport.d94555f7.svg", import.meta.url).href,
  bn = "" + new URL("search.5120f8b1.svg", import.meta.url).href,
  yn = "" + new URL("sell.8127a352.svg", import.meta.url).href,
  wn = "" + new URL("withdraw.afaed795.svg", import.meta.url).href,
  Y = {
    close: dn,
    deposit: mn,
    favorite: vn,
    favoriteOn: pn,
    garageLogo: _n,
    money: gn,
    passaport: hn,
    search: bn,
    sell: yn,
    withdraw: wn,
  };
function se(e, { delay: t = 0, duration: l = 400, easing: n = Sl } = {}) {
  const s = +getComputedStyle(e).opacity;
  return { delay: t, duration: l, easing: n, css: (i) => `opacity: ${i * s}` };
}
const Pe = [];
function ve(e, t = q) {
  let l;
  const n = new Set();
  function s(c) {
    if (re(e, c) && ((e = c), l)) {
      const u = !Pe.length;
      for (const m of n) m[1](), Pe.push(m, e);
      if (u) {
        for (let m = 0; m < Pe.length; m += 2) Pe[m][0](Pe[m + 1]);
        Pe.length = 0;
      }
    }
  }
  function i(c) {
    s(c(e));
  }
  function a(c, u = q) {
    const m = [c, u];
    return (
      n.add(m),
      n.size === 1 && (l = t(s) || q),
      c(e),
      () => {
        n.delete(m), n.size === 0 && l && (l(), (l = null));
      }
    );
  }
  return { set: s, update: i, subscribe: a };
}
const Qe = ve(!1),
  Xe = ve("all"),
  Ot = ve("public"),
  Tt = ve(""),
  ce = ve(),
  Nt = ve(),
  It = ve();
function kn(e) {
  let t, l, n, s, i, a, c, u, m, d, p, g, _, h, V, b, v, k, $, M;
  return {
    c() {
      (t = f("main")),
        (l = f("header")),
        (n = f("div")),
        (s = f("div")),
        (i = f("img")),
        (c = w()),
        (u = f("b")),
        (u.textContent = "GARAGEM"),
        (m = w()),
        (d = f("p")),
        (d.textContent =
          "Bem-vindo ao lugar onde voc\xEA guarda e protege seus ve\xEDculos."),
        (p = w()),
        (g = f("div")),
        (_ = f("img")),
        (V = w()),
        (b = f("div")),
        (b.innerHTML = `<p class="svelte-unlsvm">Sair da Garagem</p> 
                <b class="svelte-unlsvm">Clique aqui para sair da garagem</b>`),
        D(i.src, (a = Y.garageLogo)) || o(i, "src", a),
        o(i, "alt", ""),
        o(i, "class", "svelte-unlsvm"),
        o(s, "class", "logo svelte-unlsvm"),
        o(d, "class", "svelte-unlsvm"),
        o(n, "class", "left-header"),
        D(_.src, (h = Y.close)) || o(_, "src", h),
        o(_, "alt", ""),
        o(b, "class", "column svelte-unlsvm"),
        o(g, "class", "exit svelte-unlsvm"),
        o(l, "class", "svelte-unlsvm");
    },
    m(y, A) {
      R(y, t, A),
        r(t, l),
        r(l, n),
        r(n, s),
        r(s, i),
        r(s, c),
        r(s, u),
        r(n, m),
        r(n, d),
        r(l, p),
        r(l, g),
        r(g, _),
        r(g, V),
        r(g, b),
        (k = !0),
        $ || ((M = [U(g, "click", e[1]), U(g, "keyup", Vn)]), ($ = !0));
    },
    p: q,
    i(y) {
      k ||
        (ie(() => {
          !k || (v || (v = ne(l, se, { duration: 500 }, !0)), v.run(1));
        }),
        (k = !0));
    },
    o(y) {
      v || (v = ne(l, se, { duration: 500 }, !1)), v.run(0), (k = !1);
    },
    d(y) {
      y && C(t), y && v && v.end(), ($ = !1), K(M);
    },
  };
}
const Vn = () => {};
function Ln(e) {
  function t() {
    Z("hideUI"), Qe.set(!1);
  }
  return [t, () => t()];
}
class Mn extends me {
  constructor(t) {
    super(), de(this, t, Ln, kn, re, {});
  }
}
function $n(e) {
  var ll, nl, sl, il, rl, ol, al;
  let t,
    l,
    n,
    s,
    i,
    a = ((ll = e[0]) == null ? void 0 : ll.name2) + "",
    c,
    u,
    m,
    d = ((nl = e[0]) == null ? void 0 : nl.category) + "",
    p,
    g,
    _,
    h,
    V,
    b,
    v,
    k,
    $,
    M,
    y,
    A,
    O,
    P,
    W,
    L,
    z,
    Q,
    j,
    ee,
    oe,
    N,
    F,
    le,
    pe,
    _e,
    E,
    H,
    ae,
    ge,
    he,
    xe,
    Ft,
    Te,
    et = ((sl = e[0]) == null ? void 0 : sl.fuel) + "",
    bt,
    qt,
    Ht,
    tt,
    Ne,
    Gt,
    be,
    ye,
    lt,
    Bt,
    Ie,
    nt = ((il = e[0]) == null ? void 0 : il.engine) + "",
    yt,
    Jt,
    Kt,
    st,
    Ue,
    Wt,
    we,
    ke,
    it,
    Qt,
    ze,
    rt = ((rl = e[0]) == null ? void 0 : rl.body) + "",
    wt,
    Xt,
    Yt,
    ot,
    De,
    Zt,
    Ve,
    Le,
    at,
    xt,
    ct,
    ut = ((ol = e[0]) == null ? void 0 : ol.ipva) == !0 ? "Atrasado" : "Pago",
    kt,
    el,
    Me,
    ft,
    tl,
    dt,
    mt =
      ((al = e[0]) == null ? void 0 : al.taxadetido) == !1 ? "N\xE3o" : "Sim",
    Vt;
  return {
    c() {
      var T, I, je, Fe, qe, He, Ge, Be, Je;
      (t = f("main")),
        (l = f("header")),
        (n = f("div")),
        (s = f("div")),
        (i = f("div")),
        (c = S(a)),
        (u = w()),
        (m = f("div")),
        (p = S(d)),
        (g = w()),
        (_ = f("img")),
        (V = w()),
        (b = f("div")),
        (v = f("div")),
        (v.innerHTML =
          '<div class="name-info svelte-1afgv0r">Velocidade M\xE1xima</div>'),
        (k = w()),
        ($ = f("div")),
        (M = f("span")),
        (y = w()),
        (A = f("div")),
        (O = f("div")),
        (O.innerHTML =
          '<div class="name-info svelte-1afgv0r">Acelera\xE7\xE3o</div>'),
        (P = w()),
        (W = f("div")),
        (L = f("span")),
        (z = w()),
        (Q = f("div")),
        (j = f("div")),
        (j.innerHTML = '<div class="name-info svelte-1afgv0r">Aderencia</div>'),
        (ee = w()),
        (oe = f("div")),
        (N = f("span")),
        (F = w()),
        (le = f("div")),
        (pe = f("div")),
        (pe.innerHTML = '<div class="name-info svelte-1afgv0r">Frenagem</div>'),
        (_e = w()),
        (E = f("div")),
        (H = f("span")),
        (ae = w()),
        (ge = f("div")),
        (he = f("div")),
        (xe = f("div")),
        (xe.textContent = "Gasolina"),
        (Ft = w()),
        (Te = f("p")),
        (bt = S(et)),
        (qt = S("%")),
        (Ht = w()),
        (tt = f("div")),
        (Ne = f("span")),
        (Gt = w()),
        (be = f("div")),
        (ye = f("div")),
        (lt = f("div")),
        (lt.textContent = "Motor"),
        (Bt = w()),
        (Ie = f("p")),
        (yt = S(nt)),
        (Jt = S("%")),
        (Kt = w()),
        (st = f("div")),
        (Ue = f("span")),
        (Wt = w()),
        (we = f("div")),
        (ke = f("div")),
        (it = f("div")),
        (it.textContent = "Lataria"),
        (Qt = w()),
        (ze = f("p")),
        (wt = S(rt)),
        (Xt = S("%")),
        (Yt = w()),
        (ot = f("div")),
        (De = f("span")),
        (Zt = w()),
        (Ve = f("div")),
        (Le = f("div")),
        (at = f("b")),
        (at.textContent = "IPVA"),
        (xt = w()),
        (ct = f("p")),
        (kt = S(ut)),
        (el = w()),
        (Me = f("div")),
        (ft = f("b")),
        (ft.textContent = "Detido"),
        (tl = w()),
        (dt = f("p")),
        (Vt = S(mt)),
        o(i, "class", "name-vehicle svelte-1afgv0r"),
        o(m, "class", "type-vehicle svelte-1afgv0r"),
        o(s, "class", "column svelte-1afgv0r"),
        o(_, "class", "image-vehicle svelte-1afgv0r"),
        D(
          _.src,
          (h =
            "http://181.215.254.182/veiculos/" +
            ((T = e[0]) == null ? void 0 : T.name) +
            ".png")
        ) || o(_, "src", h),
        o(_, "alt", ""),
        o(n, "class", "info-vehicle svelte-1afgv0r"),
        o(v, "class", "row-info svelte-1afgv0r"),
        B(
          M,
          "width",
          ((((I = e[0]) == null ? void 0 : I.maxspeed) * 100) / 80 || 0) + "%"
        ),
        o(M, "class", "svelte-1afgv0r"),
        o($, "class", "progress svelte-1afgv0r"),
        o(b, "class", "item-info svelte-1afgv0r"),
        o(O, "class", "row-info svelte-1afgv0r"),
        B(
          L,
          "width",
          (((je = e[0]) == null ? void 0 : je.acceleration) * 100 || 0) + "%"
        ),
        o(L, "class", "svelte-1afgv0r"),
        o(W, "class", "progress svelte-1afgv0r"),
        o(A, "class", "item-info svelte-1afgv0r"),
        o(j, "class", "row-info svelte-1afgv0r"),
        B(
          N,
          "width",
          (((Fe = e[0]) == null ? void 0 : Fe.agility) * 100 || 0) + "%"
        ),
        o(N, "class", "svelte-1afgv0r"),
        o(oe, "class", "progress svelte-1afgv0r"),
        o(Q, "class", "item-info svelte-1afgv0r"),
        o(pe, "class", "row-info svelte-1afgv0r"),
        B(
          H,
          "width",
          ((((qe = e[0]) == null ? void 0 : qe.braking) * 60 || 0) > 100
            ? 100
            : ((He = e[0]) == null ? void 0 : He.braking) * 10 || 0) + "%"
        ),
        o(H, "class", "svelte-1afgv0r"),
        o(E, "class", "progress svelte-1afgv0r"),
        o(le, "class", "item-info svelte-1afgv0r"),
        o(xe, "class", "name-info svelte-1afgv0r"),
        o(Te, "class", "svelte-1afgv0r"),
        o(he, "class", "row-info svelte-1afgv0r"),
        B(Ne, "width", ((Ge = e[0]) == null ? void 0 : Ge.fuel) + "%"),
        o(Ne, "class", "svelte-1afgv0r"),
        o(tt, "class", "progress svelte-1afgv0r"),
        o(ge, "class", "item-info svelte-1afgv0r"),
        o(lt, "class", "name-info svelte-1afgv0r"),
        o(Ie, "class", "svelte-1afgv0r"),
        o(ye, "class", "row-info svelte-1afgv0r"),
        B(Ue, "width", ((Be = e[0]) == null ? void 0 : Be.engine) + "%"),
        o(Ue, "class", "svelte-1afgv0r"),
        o(st, "class", "progress svelte-1afgv0r"),
        o(be, "class", "item-info svelte-1afgv0r"),
        o(it, "class", "name-info svelte-1afgv0r"),
        o(ze, "class", "svelte-1afgv0r"),
        o(ke, "class", "row-info svelte-1afgv0r"),
        B(De, "width", ((Je = e[0]) == null ? void 0 : Je.body) + "%"),
        o(De, "class", "svelte-1afgv0r"),
        o(ot, "class", "progress svelte-1afgv0r"),
        o(we, "class", "item-info svelte-1afgv0r"),
        o(at, "class", "svelte-1afgv0r"),
        o(ct, "class", "svelte-1afgv0r"),
        o(Le, "class", "item-blocked svelte-1afgv0r"),
        o(ft, "class", "svelte-1afgv0r"),
        o(dt, "class", "svelte-1afgv0r"),
        o(Me, "class", "item-blocked svelte-1afgv0r"),
        o(Ve, "class", "blocked-info svelte-1afgv0r"),
        o(l, "class", "svelte-1afgv0r"),
        o(t, "class", "svelte-1afgv0r");
    },
    m(T, I) {
      R(T, t, I),
        r(t, l),
        r(l, n),
        r(n, s),
        r(s, i),
        r(i, c),
        r(s, u),
        r(s, m),
        r(m, p),
        r(n, g),
        r(n, _),
        r(l, V),
        r(l, b),
        r(b, v),
        r(b, k),
        r(b, $),
        r($, M),
        r(l, y),
        r(l, A),
        r(A, O),
        r(A, P),
        r(A, W),
        r(W, L),
        r(l, z),
        r(l, Q),
        r(Q, j),
        r(Q, ee),
        r(Q, oe),
        r(oe, N),
        r(l, F),
        r(l, le),
        r(le, pe),
        r(le, _e),
        r(le, E),
        r(E, H),
        r(l, ae),
        r(l, ge),
        r(ge, he),
        r(he, xe),
        r(he, Ft),
        r(he, Te),
        r(Te, bt),
        r(Te, qt),
        r(ge, Ht),
        r(ge, tt),
        r(tt, Ne),
        r(l, Gt),
        r(l, be),
        r(be, ye),
        r(ye, lt),
        r(ye, Bt),
        r(ye, Ie),
        r(Ie, yt),
        r(Ie, Jt),
        r(be, Kt),
        r(be, st),
        r(st, Ue),
        r(l, Wt),
        r(l, we),
        r(we, ke),
        r(ke, it),
        r(ke, Qt),
        r(ke, ze),
        r(ze, wt),
        r(ze, Xt),
        r(we, Yt),
        r(we, ot),
        r(ot, De),
        r(l, Zt),
        r(l, Ve),
        r(Ve, Le),
        r(Le, at),
        r(Le, xt),
        r(Le, ct),
        r(ct, kt),
        r(Ve, el),
        r(Ve, Me),
        r(Me, ft),
        r(Me, tl),
        r(Me, dt),
        r(dt, Vt);
    },
    p(T, [I]) {
      var je, Fe, qe, He, Ge, Be, Je, cl, ul, fl, dl, ml, vl, pl, _l, gl;
      I & 1 &&
        a !== (a = ((je = T[0]) == null ? void 0 : je.name2) + "") &&
        G(c, a),
        I & 1 &&
          d !== (d = ((Fe = T[0]) == null ? void 0 : Fe.category) + "") &&
          G(p, d),
        I & 1 &&
          !D(
            _.src,
            (h =
              "http://181.215.254.182/veiculos/" +
              ((qe = T[0]) == null ? void 0 : qe.name) +
              ".png")
          ) &&
          o(_, "src", h),
        I & 1 &&
          B(
            M,
            "width",
            ((((He = T[0]) == null ? void 0 : He.maxspeed) * 100) / 80 || 0) +
              "%"
          ),
        I & 1 &&
          B(
            L,
            "width",
            (((Ge = T[0]) == null ? void 0 : Ge.acceleration) * 100 || 0) + "%"
          ),
        I & 1 &&
          B(
            N,
            "width",
            (((Be = T[0]) == null ? void 0 : Be.agility) * 100 || 0) + "%"
          ),
        I & 1 &&
          B(
            H,
            "width",
            ((((Je = T[0]) == null ? void 0 : Je.braking) * 60 || 0) > 100
              ? 100
              : ((cl = T[0]) == null ? void 0 : cl.braking) * 10 || 0) + "%"
          ),
        I & 1 &&
          et !== (et = ((ul = T[0]) == null ? void 0 : ul.fuel) + "") &&
          G(bt, et),
        I & 1 && B(Ne, "width", ((fl = T[0]) == null ? void 0 : fl.fuel) + "%"),
        I & 1 &&
          nt !== (nt = ((dl = T[0]) == null ? void 0 : dl.engine) + "") &&
          G(yt, nt),
        I & 1 &&
          B(Ue, "width", ((ml = T[0]) == null ? void 0 : ml.engine) + "%"),
        I & 1 &&
          rt !== (rt = ((vl = T[0]) == null ? void 0 : vl.body) + "") &&
          G(wt, rt),
        I & 1 && B(De, "width", ((pl = T[0]) == null ? void 0 : pl.body) + "%"),
        I & 1 &&
          ut !==
            (ut =
              ((_l = T[0]) == null ? void 0 : _l.ipva) == !0
                ? "Atrasado"
                : "Pago") &&
          G(kt, ut),
        I & 1 &&
          mt !==
            (mt =
              ((gl = T[0]) == null ? void 0 : gl.taxadetido) == !1
                ? "N\xE3o"
                : "Sim") &&
          G(Vt, mt);
    },
    i: q,
    o: q,
    d(T) {
      T && C(t);
    },
  };
}
function Pn(e, t, l) {
  let n;
  return J(e, ce, (s) => l(0, (n = s))), [n];
}
class En extends me {
  constructor(t) {
    super(), de(this, t, Pn, $n, re, {});
  }
}
function Vl(e, t, l) {
  const n = e.slice();
  return (n[14] = t[l]), n;
}
function Ll(e, t, l) {
  const n = e.slice();
  return (n[17] = t[l]), n;
}
function Ml(e) {
  let t;
  function l(i, a) {
    return i[17].favorite === 0 || i[17].favorite === void 0 ? Cn : An;
  }
  let n = l(e),
    s = n(e);
  return {
    c() {
      s.c(), (t = Wl());
    },
    m(i, a) {
      s.m(i, a), R(i, t, a);
    },
    p(i, a) {
      n === (n = l(i)) && s
        ? s.p(i, a)
        : (s.d(1), (s = n(i)), s && (s.c(), s.m(t.parentNode, t)));
    },
    d(i) {
      s.d(i), i && C(t);
    },
  };
}
function An(e) {
  let t, l, n, s;
  function i() {
    return e[12](e[17]);
  }
  return {
    c() {
      (t = f("img")),
        D(t.src, (l = Y.favoriteOn)) || o(t, "src", l),
        o(t, "alt", ""),
        o(t, "class", "svelte-xmxszd");
    },
    m(a, c) {
      R(a, t, c),
        n || ((s = [U(t, "click", i), U(t, "keydown", Dt(e[10]))]), (n = !0));
    },
    p(a, c) {
      e = a;
    },
    d(a) {
      a && C(t), (n = !1), K(s);
    },
  };
}
function Cn(e) {
  let t, l, n, s;
  function i() {
    return e[11](e[17]);
  }
  return {
    c() {
      (t = f("img")),
        D(t.src, (l = Y.favorite)) || o(t, "src", l),
        o(t, "alt", ""),
        o(t, "class", "svelte-xmxszd");
    },
    m(a, c) {
      R(a, t, c),
        n || ((s = [U(t, "click", i), U(t, "keydown", Dt(e[9]))]), (n = !0));
    },
    p(a, c) {
      e = a;
    },
    d(a) {
      a && C(t), (n = !1), K(s);
    },
  };
}
function $l(e) {
  var k, $;
  let t,
    l,
    n,
    s,
    i,
    a,
    c = ((k = e[17]) == null ? void 0 : k.name2) + "",
    u,
    m,
    d,
    p,
    g =
      ((($ = e[17].category) == null ? void 0 : $.toUpperCase()) ||
        "VE\xCDCULO") + "",
    _,
    h,
    V,
    b = e[2] != "service" && Ml(e);
  function v() {
    return e[13](e[17]);
  }
  return {
    c() {
      var M, y, A;
      (t = f("div")),
        (l = f("img")),
        (s = w()),
        (i = f("div")),
        (a = f("div")),
        (u = S(c)),
        (m = w()),
        b && b.c(),
        (d = w()),
        (p = f("div")),
        (_ = S(g)),
        o(l, "class", "image-vehicle svelte-xmxszd"),
        D(
          l.src,
          (n =
            "http://181.215.254.182/veiculos/" +
            ((M = e[17]) == null ? void 0 : M.name) +
            ".png")
        ) || o(l, "src", n),
        o(l, "alt", ""),
        o(a, "class", "name-vehicle svelte-xmxszd"),
        o(p, "class", "type-vehicle svelte-xmxszd"),
        o(i, "class", "column svelte-xmxszd"),
        o(t, "class", "item-vehicle svelte-xmxszd"),
        Ce(
          t,
          "selectedVehicle",
          ((y = e[3]) == null ? void 0 : y.name) ===
            ((A = e[17]) == null ? void 0 : A.name)
        );
    },
    m(M, y) {
      R(M, t, y),
        r(t, l),
        r(t, s),
        r(t, i),
        r(i, a),
        r(a, u),
        r(a, m),
        b && b.m(a, null),
        r(i, d),
        r(i, p),
        r(p, _),
        h || ((V = [U(t, "click", v), U(t, "keydown", Sn)]), (h = !0));
    },
    p(M, y) {
      var A, O, P, W, L;
      (e = M),
        y & 1 &&
          !D(
            l.src,
            (n =
              "http://181.215.254.182/veiculos/" +
              ((A = e[17]) == null ? void 0 : A.name) +
              ".png")
          ) &&
          o(l, "src", n),
        y & 1 &&
          c !== (c = ((O = e[17]) == null ? void 0 : O.name2) + "") &&
          G(u, c),
        e[2] != "service"
          ? b
            ? b.p(e, y)
            : ((b = Ml(e)), b.c(), b.m(a, null))
          : b && (b.d(1), (b = null)),
        y & 1 &&
          g !==
            (g =
              (((P = e[17].category) == null ? void 0 : P.toUpperCase()) ||
                "VE\xCDCULO") + "") &&
          G(_, g),
        y & 9 &&
          Ce(
            t,
            "selectedVehicle",
            ((W = e[3]) == null ? void 0 : W.name) ===
              ((L = e[17]) == null ? void 0 : L.name)
          );
    },
    d(M) {
      M && C(t), b && b.d(), (h = !1), K(V);
    },
  };
}
function Pl(e) {
  let t;
  return {
    c() {
      (t = f("div")), o(t, "class", "item-vehicle slot-void svelte-xmxszd");
    },
    m(l, n) {
      R(l, t, n);
    },
    p: q,
    d(l) {
      l && C(t);
    },
  };
}
function Rn(e) {
  let t,
    l,
    n,
    s = e[0],
    i = [];
  for (let u = 0; u < s.length; u += 1) i[u] = $l(Ll(e, s, u));
  let a = Array.from({ length: e[1] }),
    c = [];
  for (let u = 0; u < a.length; u += 1) c[u] = Pl(Vl(e, a, u));
  return {
    c() {
      (t = f("main")), (l = f("header"));
      for (let u = 0; u < i.length; u += 1) i[u].c();
      n = w();
      for (let u = 0; u < c.length; u += 1) c[u].c();
      o(l, "class", "svelte-xmxszd"), o(t, "class", "svelte-xmxszd");
    },
    m(u, m) {
      R(u, t, m), r(t, l);
      for (let d = 0; d < i.length; d += 1) i[d] && i[d].m(l, null);
      r(l, n);
      for (let d = 0; d < c.length; d += 1) c[d] && c[d].m(l, null);
    },
    p(u, [m]) {
      if (m & 29) {
        s = u[0];
        let d;
        for (d = 0; d < s.length; d += 1) {
          const p = Ll(u, s, d);
          i[d] ? i[d].p(p, m) : ((i[d] = $l(p)), i[d].c(), i[d].m(l, n));
        }
        for (; d < i.length; d += 1) i[d].d(1);
        i.length = s.length;
      }
      if (m & 2) {
        a = Array.from({ length: u[1] });
        let d;
        for (d = 0; d < a.length; d += 1) {
          const p = Vl(u, a, d);
          c[d] ? c[d].p(p, m) : ((c[d] = Pl()), c[d].c(), c[d].m(l, null));
        }
        for (; d < c.length; d += 1) c[d].d(1);
        c.length = a.length;
      }
    },
    i: q,
    o: q,
    d(u) {
      u && C(t), bl(i, u), bl(c, u);
    },
  };
}
const Sn = () => {};
function On(e, t, l) {
  let n, s, i, a;
  J(e, Ot, (v) => l(2, (n = v))),
    J(e, Tt, (v) => l(7, (s = v))),
    J(e, Xe, (v) => l(8, (i = v))),
    J(e, ce, (v) => l(3, (a = v)));
  var c = [],
    u = [],
    m = 0,
    d = 0;
  jt(async () => {
    const v = await Z("myVehicles");
    !v ||
      (Hl(Ot, (n = v.garageType), n),
      l(5, (c = v.vehicles)),
      l(6, (d = v.slots)),
      l(1, (m = v.slots - Object.keys(c).length)),
      m <= 0 && l(1, (m = 0)));
  });
  function p(v, k) {
    Z("setFavorite", { name: v, action: k }),
      l(
        0,
        (u = u.map(
          ($) => (
            ($ == null ? void 0 : $.name) === v &&
              ($.favorite === 0 ? ($.favorite = 1) : ($.favorite = 0)),
            $
          )
        ))
      );
  }
  function g(v) {
    Ct.call(this, e, v);
  }
  function _(v) {
    Ct.call(this, e, v);
  }
  const h = (v) => p(v == null ? void 0 : v.name, "setFavorite"),
    V = (v) => p(v == null ? void 0 : v.name, "removeFavorite"),
    b = (v) => ce.set(v);
  return (
    (e.$$.update = () => {
      e.$$.dirty & 481 &&
        (s == "" &&
          (i == "all" && (l(0, (u = c)), ce.set(u[0])),
          i == "favorite" &&
            (ce.set(u[0]),
            l(
              0,
              (u = c.filter((v) => {
                if (v.favorite === 1) return v;
              }))
            ))),
        s != "" &&
          (Xe.set("all"),
          l(
            0,
            (u = c.filter((v) => {
              if (v != null && v.name.toLowerCase().startsWith(s.toLowerCase()))
                return v;
            }))
          )),
        l(1, (m = d - u.length)));
    }),
    [u, m, n, a, p, c, d, s, i, g, _, h, V, b]
  );
}
class Tn extends me {
  constructor(t) {
    super(), de(this, t, On, Rn, re, {});
  }
}
const Nn = (e) => ({}),
  El = (e) => ({});
function In(e) {
  let t,
    l,
    n,
    s,
    i,
    a,
    c =
      e[1] == 0
        ? "venda"
        : e[1] == 1
        ? "pagamento"
        : e[1] == 2
        ? "IPVA"
        : "retido",
    u,
    m,
    d,
    p,
    g =
      e[1] == 0
        ? "venda de ve\xEDculo"
        : e[1] == 1
        ? "pagamento de multa"
        : e[1] == 2
        ? "pagamento do IPVA"
        : "pagamento de ve\xEDculo retido",
    _,
    h,
    V,
    b;
  const v = e[5].header,
    k = $t(v, e, e[4], El),
    $ = e[5].default,
    M = $t($, e, e[4], null);
  return {
    c() {
      (t = f("dialog")),
        (l = f("div")),
        k && k.c(),
        (n = w()),
        M && M.c(),
        (s = w()),
        (i = f("button")),
        (a = S("Confirmar ")),
        (u = S(c)),
        (m = w()),
        (d = f("button")),
        (p = S("Cancelar ")),
        (_ = S(g)),
        o(i, "class", "confirm-modal svelte-13gjrgh"),
        o(d, "class", "cancel-modal svelte-13gjrgh"),
        o(l, "class", "content-modal svelte-13gjrgh"),
        o(t, "class", "svelte-13gjrgh");
    },
    m(y, A) {
      R(y, t, A),
        r(t, l),
        k && k.m(l, null),
        r(l, n),
        M && M.m(l, null),
        r(l, s),
        r(l, i),
        r(i, a),
        r(i, u),
        r(l, m),
        r(l, d),
        r(d, p),
        r(d, _),
        e[9](t),
        (h = !0),
        V ||
          ((b = [
            U(i, "click", e[7]),
            U(d, "click", e[8]),
            U(l, "keydown", Dt(e[6])),
            U(t, "close", e[10]),
          ]),
          (V = !0));
    },
    p(y, [A]) {
      k &&
        k.p &&
        (!h || A & 16) &&
        Et(k, v, y, y[4], h ? Pt(v, y[4], A, Nn) : At(y[4]), El),
        M &&
          M.p &&
          (!h || A & 16) &&
          Et(M, $, y, y[4], h ? Pt($, y[4], A, null) : At(y[4]), null),
        (!h || A & 2) &&
          c !==
            (c =
              y[1] == 0
                ? "venda"
                : y[1] == 1
                ? "pagamento"
                : y[1] == 2
                ? "IPVA"
                : "retido") &&
          G(u, c),
        (!h || A & 2) &&
          g !==
            (g =
              y[1] == 0
                ? "venda de ve\xEDculo"
                : y[1] == 1
                ? "pagamento de multa"
                : y[1] == 2
                ? "pagamento do IPVA"
                : "pagamento de ve\xEDculo retido") &&
          G(_, g);
    },
    i(y) {
      h || (X(k, y), X(M, y), (h = !0));
    },
    o(y) {
      x(k, y), x(M, y), (h = !1);
    },
    d(y) {
      y && C(t), k && k.d(y), M && M.d(y), e[9](null), (V = !1), K(b);
    },
  };
}
function Un(e, t, l) {
  let n, s, i;
  J(e, ce, (v) => l(11, (n = v))),
    J(e, Nt, (v) => l(12, (s = v))),
    J(e, It, (v) => l(13, (i = v)));
  let { $$slots: a = {}, $$scope: c } = t,
    { showModal: u = !1 } = t,
    { typeModal: m = 1 } = t,
    d;
  function p() {
    m == 0
      ? Z("vehicles:sellVehicle", { name: n.name, value: i, id: s })
      : m == 1
      ? Z("vehicles:paymentVehicles", { type: "arrest", name: n.name })
      : m == 2
      ? Z("vehicles:paymentVehicles", { type: "ipva", name: n.name })
      : m == 3 &&
        Z("vehicles:paymentVehicles", { type: "retained", name: n.name }),
      d.close(),
      Qe.set(!1),
      Z("hideUI");
  }
  function g(v) {
    Ct.call(this, e, v);
  }
  const _ = () => p(),
    h = () => d.close();
  function V(v) {
    Ze[v ? "unshift" : "push"](() => {
      (d = v), l(2, d);
    });
  }
  const b = () => l(0, (u = !1));
  return (
    (e.$$set = (v) => {
      "showModal" in v && l(0, (u = v.showModal)),
        "typeModal" in v && l(1, (m = v.typeModal)),
        "$$scope" in v && l(4, (c = v.$$scope));
    }),
    (e.$$.update = () => {
      e.$$.dirty & 5 && d && u && d.showModal();
    }),
    [u, m, d, p, c, a, g, _, h, V, b]
  );
}
class zn extends me {
  constructor(t) {
    super(), de(this, t, Un, In, re, { showModal: 0, typeModal: 1 });
  }
}
function Al(e) {
  let t, l, n, s, i, a, c, u, m;
  return {
    c() {
      (t = f("div")),
        (l = f("input")),
        (n = w()),
        (s = f("div")),
        (i = f("button")),
        (i.textContent = "TODOS"),
        (a = w()),
        (c = f("button")),
        (c.textContent = "FAVORITOS"),
        o(l, "type", "text"),
        o(l, "placeholder", "Pesquisar Ve\xEDculos"),
        o(l, "class", "svelte-53bmnc"),
        o(t, "class", "input-content svelte-53bmnc"),
        o(i, "class", "svelte-53bmnc"),
        Ce(i, "selected", e[6] === "all"),
        o(c, "class", "svelte-53bmnc"),
        Ce(c, "selected", e[6] === "favorite"),
        o(s, "class", "buttons svelte-53bmnc");
    },
    m(d, p) {
      R(d, t, p),
        r(t, l),
        Ae(l, e[5]),
        R(d, n, p),
        R(d, s, p),
        r(s, i),
        r(s, a),
        r(s, c),
        u ||
          ((m = [
            U(l, "input", e[11]),
            U(i, "click", e[12]),
            U(c, "click", e[13]),
          ]),
          (u = !0));
    },
    p(d, p) {
      p & 32 && l.value !== d[5] && Ae(l, d[5]),
        p & 64 && Ce(i, "selected", d[6] === "all"),
        p & 64 && Ce(c, "selected", d[6] === "favorite");
    },
    d(d) {
      d && C(t), d && C(n), d && C(s), (u = !1), K(m);
    },
  };
}
function Cl(e) {
  let t, l, n, s, i, a, c;
  return {
    c() {
      (t = f("button")),
        (l = f("div")),
        (l.innerHTML = `<b class="svelte-53bmnc">Vender ve\xEDculo</b> 
                    <p class="svelte-53bmnc">Venda o seu ve\xEDculo para outro jogador</p>`),
        (n = w()),
        (s = f("img")),
        o(l, "class", "column svelte-53bmnc"),
        D(s.src, (i = Y.sell)) || o(s, "src", i),
        o(s, "alt", ""),
        o(t, "class", "svelte-53bmnc");
    },
    m(u, m) {
      R(u, t, m),
        r(t, l),
        r(t, n),
        r(t, s),
        a || ((c = U(t, "click", e[16])), (a = !0));
    },
    p: q,
    d(u) {
      u && C(t), (a = !1), c();
    },
  };
}
function Dn(e) {
  let t, l, n, s, i, a;
  return {
    c() {
      (t = f("div")),
        (l = f("img")),
        (s = w()),
        (i = f("input")),
        D(l.src, (n = Y.money)) || o(l, "src", n),
        o(l, "alt", ""),
        o(l, "class", "svelte-53bmnc"),
        o(i, "type", "text"),
        o(i, "class", "value input-text-center svelte-53bmnc"),
        (i.value = a =
          "R$" +
          e[3].retainedPrice.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
          })),
        (i.disabled = !0),
        o(t, "class", "input-content svelte-53bmnc");
    },
    m(c, u) {
      R(c, t, u), r(t, l), r(t, s), r(t, i);
    },
    p(c, u) {
      u & 8 &&
        a !==
          (a =
            "R$" +
            c[3].retainedPrice.toLocaleString("pt-br", {
              minimumFractionDigits: 2,
            })) &&
        i.value !== a &&
        (i.value = a);
    },
    d(c) {
      c && C(t);
    },
  };
}
function jn(e) {
  let t, l, n, s, i, a;
  return {
    c() {
      (t = f("div")),
        (l = f("img")),
        (s = w()),
        (i = f("input")),
        D(l.src, (n = Y.money)) || o(l, "src", n),
        o(l, "alt", ""),
        o(l, "class", "svelte-53bmnc"),
        o(i, "type", "text"),
        o(i, "class", "value input-text-center svelte-53bmnc"),
        (i.value = a =
          "R$" +
          e[3].ipvaPrice.toLocaleString("pt-br", { minimumFractionDigits: 2 })),
        (i.disabled = !0),
        o(t, "class", "input-content svelte-53bmnc");
    },
    m(c, u) {
      R(c, t, u), r(t, l), r(t, s), r(t, i);
    },
    p(c, u) {
      u & 8 &&
        a !==
          (a =
            "R$" +
            c[3].ipvaPrice.toLocaleString("pt-br", {
              minimumFractionDigits: 2,
            })) &&
        i.value !== a &&
        (i.value = a);
    },
    d(c) {
      c && C(t);
    },
  };
}
function Fn(e) {
  let t,
    l,
    n,
    s,
    i,
    a,
    c,
    u,
    m = e[3].arrestedId + "",
    d,
    p,
    g,
    _,
    h,
    V,
    b,
    v;
  return {
    c() {
      (t = f("div")),
        (l = f("img")),
        (s = w()),
        (i = f("div")),
        (a = f("div")),
        (a.textContent = "Autor da apreens\xE3o"),
        (c = w()),
        (u = f("p")),
        (d = S(m)),
        (p = w()),
        (g = f("div")),
        (_ = f("img")),
        (V = w()),
        (b = f("input")),
        D(l.src, (n = Y.passaport)) || o(l, "src", n),
        o(l, "alt", ""),
        o(l, "class", "svelte-53bmnc"),
        o(a, "class", "author_arrested"),
        o(u, "class", "svelte-53bmnc"),
        o(i, "class", "column svelte-53bmnc"),
        o(t, "class", "author-content svelte-53bmnc"),
        D(_.src, (h = Y.money)) || o(_, "src", h),
        o(_, "alt", ""),
        o(_, "class", "svelte-53bmnc"),
        o(b, "type", "text"),
        o(b, "class", "value svelte-53bmnc"),
        (b.value = v =
          "R$" +
          e[3].arrestPrice.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
          })),
        (b.disabled = !0),
        o(g, "class", "input-content svelte-53bmnc");
    },
    m(k, $) {
      R(k, t, $),
        r(t, l),
        r(t, s),
        r(t, i),
        r(i, a),
        r(i, c),
        r(i, u),
        r(u, d),
        R(k, p, $),
        R(k, g, $),
        r(g, _),
        r(g, V),
        r(g, b);
    },
    p(k, $) {
      $ & 8 && m !== (m = k[3].arrestedId + "") && G(d, m),
        $ & 8 &&
          v !==
            (v =
              "R$" +
              k[3].arrestPrice.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
              })) &&
          b.value !== v &&
          (b.value = v);
    },
    d(k) {
      k && C(t), k && C(p), k && C(g);
    },
  };
}
function qn(e) {
  let t, l, n, s, i, a, c, u, m, d, p, g, _;
  return {
    c() {
      (t = f("div")),
        (l = f("img")),
        (s = w()),
        (i = f("input")),
        (a = w()),
        (c = f("div")),
        (u = f("img")),
        (d = w()),
        (p = f("input")),
        D(l.src, (n = Y.passaport)) || o(l, "src", n),
        o(l, "alt", ""),
        o(l, "class", "svelte-53bmnc"),
        o(i, "type", "number"),
        o(i, "class", "passport svelte-53bmnc"),
        o(i, "placeholder", "Passaporte do usu\xE1rio"),
        o(t, "class", "input-content svelte-53bmnc"),
        D(u.src, (m = Y.money)) || o(u, "src", m),
        o(u, "alt", ""),
        o(u, "class", "svelte-53bmnc"),
        o(p, "type", "number"),
        o(p, "class", "value svelte-53bmnc"),
        o(p, "placeholder", "Coloque o valor"),
        o(c, "class", "input-content svelte-53bmnc");
    },
    m(h, V) {
      R(h, t, V),
        r(t, l),
        r(t, s),
        r(t, i),
        Ae(i, e[7]),
        R(h, a, V),
        R(h, c, V),
        r(c, u),
        r(c, d),
        r(c, p),
        Ae(p, e[8]),
        g || ((_ = [U(i, "input", e[17]), U(p, "input", e[18])]), (g = !0));
    },
    p(h, V) {
      V & 128 && _t(i.value) !== h[7] && Ae(i, h[7]),
        V & 256 && _t(p.value) !== h[8] && Ae(p, h[8]);
    },
    d(h) {
      h && C(t), h && C(a), h && C(c), (g = !1), K(_);
    },
  };
}
function Hn(e) {
  var P, W;
  let t,
    l,
    n =
      e[1] == 0
        ? "vender o seu "
        : e[1] == 1
        ? "pagar a multa do seu "
        : e[1] == 2
        ? "pagar o IPVA do seu "
        : "pagar a reten\xE7\xE3o do seu",
    s,
    i,
    a,
    c,
    u,
    m,
    d,
    p,
    g,
    _ = ((P = e[3]) == null ? void 0 : P.name2) + "",
    h,
    V,
    b,
    v = ((W = e[3]) == null ? void 0 : W.category) + "",
    k,
    $,
    M;
  function y(L, z) {
    return L[1] == 0 ? qn : L[1] == 1 ? Fn : L[1] == 2 ? jn : Dn;
  }
  let A = y(e),
    O = A(e);
  return {
    c() {
      var L;
      (t = f("p")),
        (l = S("Tem certeza que deseja ")),
        (s = S(n)),
        (i = S(" ve\xEDculo.")),
        (a = w()),
        (c = f("div")),
        (u = f("img")),
        (d = w()),
        (p = f("div")),
        (g = f("div")),
        (h = S(_)),
        (V = w()),
        (b = f("div")),
        (k = S(v)),
        ($ = w()),
        (M = f("div")),
        O.c(),
        o(t, "class", "paragraph-modal svelte-53bmnc"),
        o(u, "class", "image-vehicle svelte-53bmnc"),
        D(
          u.src,
          (m =
            "http://181.215.254.182/veiculos/" +
            ((L = e[3]) == null ? void 0 : L.name) +
            ".png")
        ) || o(u, "src", m),
        o(u, "alt", ""),
        o(g, "class", "name-vehicle svelte-53bmnc"),
        o(b, "class", "type-vehicle svelte-53bmnc"),
        o(p, "class", "column svelte-53bmnc"),
        o(c, "class", "item-vehicle svelte-53bmnc"),
        o(M, "class", "row-modal svelte-53bmnc");
    },
    m(L, z) {
      R(L, t, z),
        r(t, l),
        r(t, s),
        r(t, i),
        R(L, a, z),
        R(L, c, z),
        r(c, u),
        r(c, d),
        r(c, p),
        r(p, g),
        r(g, h),
        r(p, V),
        r(p, b),
        r(b, k),
        R(L, $, z),
        R(L, M, z),
        O.m(M, null);
    },
    p(L, z) {
      var Q, j, ee;
      z & 2 &&
        n !==
          (n =
            L[1] == 0
              ? "vender o seu "
              : L[1] == 1
              ? "pagar a multa do seu "
              : L[1] == 2
              ? "pagar o IPVA do seu "
              : "pagar a reten\xE7\xE3o do seu") &&
        G(s, n),
        z & 8 &&
          !D(
            u.src,
            (m =
              "http://181.215.254.182/veiculos/" +
              ((Q = L[3]) == null ? void 0 : Q.name) +
              ".png")
          ) &&
          o(u, "src", m),
        z & 8 &&
          _ !== (_ = ((j = L[3]) == null ? void 0 : j.name2) + "") &&
          G(h, _),
        z & 8 &&
          v !== (v = ((ee = L[3]) == null ? void 0 : ee.category) + "") &&
          G(k, v),
        A === (A = y(L)) && O
          ? O.p(L, z)
          : (O.d(1), (O = A(L)), O && (O.c(), O.m(M, null)));
    },
    d(L) {
      L && C(t), L && C(a), L && C(c), L && C($), L && C(M), O.d();
    },
  };
}
function Gn(e) {
  let t,
    l =
      e[1] == 0
        ? "Vender Ve\xEDculo"
        : e[1] == 1
        ? "Ve\xEDculo Detido"
        : e[1] == 2
        ? "Pagar IPVA"
        : "Ve\xEDculo Retido",
    n;
  return {
    c() {
      (t = f("h2")),
        (n = S(l)),
        o(t, "slot", "header"),
        o(t, "class", "title-modal svelte-53bmnc");
    },
    m(s, i) {
      R(s, t, i), r(t, n);
    },
    p(s, i) {
      i & 2 &&
        l !==
          (l =
            s[1] == 0
              ? "Vender Ve\xEDculo"
              : s[1] == 1
              ? "Ve\xEDculo Detido"
              : s[1] == 2
              ? "Pagar IPVA"
              : "Ve\xEDculo Retido") &&
        G(n, l);
    },
    d(s) {
      s && C(t);
    },
  };
}
function Bn(e) {
  let t,
    l,
    n,
    s,
    i,
    a,
    c,
    u,
    m,
    d,
    p,
    g,
    _,
    h,
    V,
    b,
    v,
    k,
    $,
    M,
    y,
    A,
    O,
    P,
    W,
    L,
    z,
    Q,
    j,
    ee,
    oe,
    N = e[4] != "service" && Al(e);
  (a = new Tn({})), (u = new En({}));
  let F = e[4] != "service" && Cl(e);
  function le(E) {
    e[19](E);
  }
  function pe(E) {
    e[20](E);
  }
  let _e = { $$slots: { header: [Gn], default: [Hn] }, $$scope: { ctx: e } };
  return (
    e[0] !== void 0 && (_e.showModal = e[0]),
    e[1] !== void 0 && (_e.typeModal = e[1]),
    (L = new zn({ props: _e })),
    Ze.push(() => kl(L, "showModal", le)),
    Ze.push(() => kl(L, "typeModal", pe)),
    {
      c() {
        (t = f("main")),
          (l = f("header")),
          N && N.c(),
          (s = w()),
          (i = f("div")),
          Oe(a.$$.fragment),
          (c = w()),
          Oe(u.$$.fragment),
          (d = w()),
          (p = f("div")),
          (g = f("button")),
          (_ = f("div")),
          (_.innerHTML = `<b class="svelte-53bmnc">Retirar</b> 
                <p class="svelte-53bmnc">Retirar ve\xEDculo da garagem</p>`),
          (h = w()),
          (V = f("img")),
          (v = w()),
          (k = f("button")),
          ($ = f("div")),
          ($.innerHTML = `<b class="svelte-53bmnc">Guardar Ve\xEDculo</b> 
                <p class="svelte-53bmnc">Guarde o seu ve\xEDculo na garagem</p>`),
          (M = w()),
          (y = f("img")),
          (O = w()),
          F && F.c(),
          (W = w()),
          Oe(L.$$.fragment),
          o(l, "class", "svelte-53bmnc"),
          o(i, "class", "row svelte-53bmnc"),
          o(_, "class", "column svelte-53bmnc"),
          D(V.src, (b = Y.withdraw)) || o(V, "src", b),
          o(V, "alt", ""),
          (g.disabled = e[2]),
          o(g, "class", "svelte-53bmnc"),
          o($, "class", "column svelte-53bmnc"),
          D(y.src, (A = Y.deposit)) || o(y, "src", A),
          o(y, "alt", ""),
          (k.disabled = e[2]),
          o(k, "class", "svelte-53bmnc"),
          o(p, "class", "buttons-main svelte-53bmnc"),
          o(t, "class", "svelte-53bmnc");
      },
      m(E, H) {
        R(E, t, H),
          r(t, l),
          N && N.m(l, null),
          r(t, s),
          r(t, i),
          ue(a, i, null),
          r(i, c),
          ue(u, i, null),
          r(t, d),
          r(t, p),
          r(p, g),
          r(g, _),
          r(g, h),
          r(g, V),
          r(p, v),
          r(p, k),
          r(k, $),
          r(k, M),
          r(k, y),
          r(p, O),
          F && F.m(p, null),
          r(t, W),
          ue(L, t, null),
          (j = !0),
          ee ||
            ((oe = [U(g, "click", e[14]), U(k, "click", e[15])]), (ee = !0));
      },
      p(E, [H]) {
        E[4] != "service"
          ? N
            ? N.p(E, H)
            : ((N = Al(E)), N.c(), N.m(l, null))
          : N && (N.d(1), (N = null)),
          (!j || H & 4) && (g.disabled = E[2]),
          (!j || H & 4) && (k.disabled = E[2]),
          E[4] != "service"
            ? F
              ? F.p(E, H)
              : ((F = Cl(E)), F.c(), F.m(p, null))
            : F && (F.d(1), (F = null));
        const ae = {};
        H & 2097546 && (ae.$$scope = { dirty: H, ctx: E }),
          !z && H & 1 && ((z = !0), (ae.showModal = E[0]), wl(() => (z = !1))),
          !Q && H & 2 && ((Q = !0), (ae.typeModal = E[1]), wl(() => (Q = !1))),
          L.$set(ae);
      },
      i(E) {
        j ||
          (ie(() => {
            !j || (n || (n = ne(l, se, { duration: 500 }, !0)), n.run(1));
          }),
          X(a.$$.fragment, E),
          X(u.$$.fragment, E),
          ie(() => {
            !j || (m || (m = ne(i, se, { duration: 500 }, !0)), m.run(1));
          }),
          ie(() => {
            !j || (P || (P = ne(p, se, { duration: 500 }, !0)), P.run(1));
          }),
          X(L.$$.fragment, E),
          (j = !0));
      },
      o(E) {
        n || (n = ne(l, se, { duration: 500 }, !1)),
          n.run(0),
          x(a.$$.fragment, E),
          x(u.$$.fragment, E),
          m || (m = ne(i, se, { duration: 500 }, !1)),
          m.run(0),
          P || (P = ne(p, se, { duration: 500 }, !1)),
          P.run(0),
          x(L.$$.fragment, E),
          (j = !1);
      },
      d(E) {
        E && C(t),
          N && N.d(),
          E && n && n.end(),
          fe(a),
          fe(u),
          E && m && m.end(),
          F && F.d(),
          E && P && P.end(),
          fe(L),
          (ee = !1),
          K(oe);
      },
    }
  );
}
function Jn(e, t, l) {
  let n, s, i, a, c, u;
  J(e, ce, (P) => l(3, (n = P))),
    J(e, Ot, (P) => l(4, (s = P))),
    J(e, Tt, (P) => l(5, (i = P))),
    J(e, Xe, (P) => l(6, (a = P))),
    J(e, Nt, (P) => l(7, (c = P))),
    J(e, It, (P) => l(8, (u = P)));
  let m = !1,
    d = 0,
    p = !1;
  function g(P) {
    if (P == "sell") {
      l(0, (m = !0)), l(1, (d = 0));
      return;
    }
    if (n.taxadetido == !0) {
      l(1, (d = 1)), l(0, (m = !0));
      return;
    }
    if (n.ipva == !0) {
      l(1, (d = 2)), l(0, (m = !0));
      return;
    }
    l(2, (p = !0)),
      setTimeout(() => {
        l(2, (p = !1));
      }, 1e3),
      Z("spawnVehicles", { name: n.name });
  }
  function _() {
    l(2, (p = !0)),
      setTimeout(() => {
        l(2, (p = !1));
      }, 1e3),
      Z("deleteVehicles", { name: n.name });
  }
  function h() {
    (i = this.value), Tt.set(i);
  }
  const V = () => Xe.set("all"),
    b = () => Xe.set("favorite"),
    v = () => g("withdraw"),
    k = () => _(),
    $ = () => g("sell");
  function M() {
    (c = _t(this.value)), Nt.set(c);
  }
  function y() {
    (u = _t(this.value)), It.set(u);
  }
  function A(P) {
    (m = P), l(0, m);
  }
  function O(P) {
    (d = P), l(1, d);
  }
  return [m, d, p, n, s, i, a, c, u, g, _, h, V, b, v, k, $, M, y, A, O];
}
class Kn extends me {
  constructor(t) {
    super(), de(this, t, Jn, Bn, re, {});
  }
}
function Wn(e, t) {
  const l = (n) => {
    const { action: s, data: i } = n.data;
    s === e && t(i);
  };
  jt(() => window.addEventListener("message", l)),
    tn(() => window.removeEventListener("message", l));
}
function Rl(e) {
  let t;
  const l = e[2].default,
    n = $t(l, e, e[1], null);
  return {
    c() {
      n && n.c();
    },
    m(s, i) {
      n && n.m(s, i), (t = !0);
    },
    p(s, i) {
      n &&
        n.p &&
        (!t || i & 2) &&
        Et(n, l, s, s[1], t ? Pt(l, s[1], i, null) : At(s[1]), null);
    },
    i(s) {
      t || (X(n, s), (t = !0));
    },
    o(s) {
      x(n, s), (t = !1);
    },
    d(s) {
      n && n.d(s);
    },
  };
}
function Qn(e) {
  let t,
    l,
    n = e[0] && Rl(e);
  return {
    c() {
      (t = f("main")), n && n.c();
    },
    m(s, i) {
      R(s, t, i), n && n.m(t, null), (l = !0);
    },
    p(s, [i]) {
      s[0]
        ? n
          ? (n.p(s, i), i & 1 && X(n, 1))
          : ((n = Rl(s)), n.c(), X(n, 1), n.m(t, null))
        : n &&
          (an(),
          x(n, 1, 1, () => {
            n = null;
          }),
          cn());
    },
    i(s) {
      l || (X(n), (l = !0));
    },
    o(s) {
      x(n), (l = !1);
    },
    d(s) {
      s && C(t), n && n.d();
    },
  };
}
function Xn(e, t, l) {
  let { $$slots: n = {}, $$scope: s } = t,
    i;
  return (
    Qe.subscribe((a) => {
      l(0, (i = a));
    }),
    Wn("setVisible", (a) => {
      Qe.set(a);
    }),
    jt(() => {
      const a = (c) => {
        i && ["Escape"].includes(c.code) && (Z("hideUI"), Qe.set(!1));
      };
      return (
        window.addEventListener("keydown", a),
        () => window.removeEventListener("keydown", a)
      );
    }),
    (e.$$set = (a) => {
      "$$scope" in a && l(1, (s = a.$$scope));
    }),
    [i, s, n]
  );
}
class Yn extends me {
  constructor(t) {
    super(), de(this, t, Xn, Qn, re, {});
  }
}
const Zn = () => !window.invokeNative,
  xn = (e, t = 1e3) => {
    if (Zn())
      for (const l of e)
        setTimeout(() => {
          window.dispatchEvent(
            new MessageEvent("message", {
              data: { action: l.action, data: l.data },
            })
          );
        }, t);
  };
function es(e) {
  let t, l, n, s, i;
  return (
    (l = new Mn({})),
    (s = new Kn({})),
    {
      c() {
        (t = f("div")),
          Oe(l.$$.fragment),
          (n = w()),
          Oe(s.$$.fragment),
          o(t, "class", "container");
      },
      m(a, c) {
        R(a, t, c), ue(l, t, null), r(t, n), ue(s, t, null), (i = !0);
      },
      p: q,
      i(a) {
        i || (X(l.$$.fragment, a), X(s.$$.fragment, a), (i = !0));
      },
      o(a) {
        x(l.$$.fragment, a), x(s.$$.fragment, a), (i = !1);
      },
      d(a) {
        a && C(t), fe(l), fe(s);
      },
    }
  );
}
function ts(e) {
  let t, l, n;
  return (
    (l = new Yn({
      props: { $$slots: { default: [es] }, $$scope: { ctx: e } },
    })),
    {
      c() {
        (t = f("main")), Oe(l.$$.fragment);
      },
      m(s, i) {
        R(s, t, i), ue(l, t, null), (n = !0);
      },
      p(s, [i]) {
        const a = {};
        i & 1 && (a.$$scope = { dirty: i, ctx: s }), l.$set(a);
      },
      i(s) {
        n || (X(l.$$.fragment, s), (n = !0));
      },
      o(s) {
        x(l.$$.fragment, s), (n = !1);
      },
      d(s) {
        s && C(t), fe(l);
      },
    }
  );
}
function ls(e) {
  return xn([{ action: "setVisible", data: !0 }]), [];
}
class ns extends me {
  constructor(t) {
    super(), de(this, t, ls, ts, re, {});
  }
}
new ns({ target: document.getElementById("app") });
