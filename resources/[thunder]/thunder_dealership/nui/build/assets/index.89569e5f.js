(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) l(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const r of i.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && l(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
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
  function l(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
})();
function O() {}
const Pt = (t) => t;
function Z(t, e) {
  for (const n in e) t[n] = e[n];
  return t;
}
function Tt(t) {
  return t();
}
function bt() {
  return Object.create(null);
}
function he(t) {
  t.forEach(Tt);
}
function ft(t) {
  return typeof t == "function";
}
function ee(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == "object") || typeof t == "function";
}
let Ge;
function Ie(t, e) {
  return Ge || (Ge = document.createElement("a")), (Ge.href = e), t === Ge.href;
}
function zt(t) {
  return Object.keys(t).length === 0;
}
function Gt(t, ...e) {
  if (t == null) return O;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function D(t, e, n) {
  t.$$.on_destroy.push(Gt(e, n));
}
function Ot(t, e, n, l) {
  if (t) {
    const s = jt(t, e, n, l);
    return t[0](s);
  }
}
function jt(t, e, n, l) {
  return t[1] && l ? Z(n.ctx.slice(), t[1](l(e))) : n.ctx;
}
function It(t, e, n, l) {
  if (t[2] && l) {
    const s = t[2](l(n));
    if (e.dirty === void 0) return s;
    if (typeof s == "object") {
      const i = [],
        r = Math.max(e.dirty.length, s.length);
      for (let o = 0; o < r; o += 1) i[o] = e.dirty[o] | s[o];
      return i;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function Nt(t, e, n, l, s, i) {
  if (s) {
    const r = jt(e, n, l, i);
    t.p(r, s);
  }
}
function Ht(t) {
  if (t.ctx.length > 32) {
    const e = [],
      n = t.ctx.length / 32;
    for (let l = 0; l < n; l++) e[l] = -1;
    return e;
  }
  return -1;
}
function He(t) {
  const e = {};
  for (const n in t) n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function me(t, e) {
  const n = {};
  e = new Set(e);
  for (const l in t) !e.has(l) && l[0] !== "$" && (n[l] = t[l]);
  return n;
}
function yt(t) {
  return t == null ? "" : t;
}
function Se(t, e, n) {
  return t.set(n), e;
}
const At = typeof window < "u";
let Kt = At ? () => window.performance.now() : () => Date.now(),
  dt = At ? (t) => requestAnimationFrame(t) : O;
const Oe = new Set();
function Rt(t) {
  Oe.forEach((e) => {
    e.c(t) || (Oe.delete(e), e.f());
  }),
    Oe.size !== 0 && dt(Rt);
}
function Jt(t) {
  let e;
  return (
    Oe.size === 0 && dt(Rt),
    {
      promise: new Promise((n) => {
        Oe.add((e = { c: t, f: n }));
      }),
      abort() {
        Oe.delete(e);
      },
    }
  );
}
function c(t, e) {
  t.appendChild(e);
}
function Bt(t) {
  if (!t) return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function Wt(t) {
  const e = g("style");
  return Qt(Bt(t), e), e.sheet;
}
function Qt(t, e) {
  return c(t.head || t, e), e.sheet;
}
function T(t, e, n) {
  t.insertBefore(e, n || null);
}
function q(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function g(t) {
  return document.createElement(t);
}
function N(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function E(t) {
  return document.createTextNode(t);
}
function b() {
  return E(" ");
}
function mt() {
  return E("");
}
function G(t, e, n, l) {
  return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
}
function a(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const Xt = ["width", "height"];
function kt(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const l in e)
    e[l] == null
      ? t.removeAttribute(l)
      : l === "style"
      ? (t.style.cssText = e[l])
      : l === "__value"
      ? (t.value = t[l] = e[l])
      : n[l] && n[l].set && Xt.indexOf(l) === -1
      ? (t[l] = e[l])
      : a(t, l, e[l]);
}
function be(t, e) {
  for (const n in e) a(t, n, e[n]);
}
function en(t) {
  return Array.from(t.childNodes);
}
function de(t, e) {
  (e = "" + e), t.data !== e && (t.data = e);
}
function Je(t, e) {
  t.value = e == null ? "" : e;
}
function tn(t, e, n, l) {
  n == null
    ? t.style.removeProperty(e)
    : t.style.setProperty(e, n, l ? "important" : "");
}
function we(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
function nn(t, e, { bubbles: n = !1, cancelable: l = !1 } = {}) {
  const s = document.createEvent("CustomEvent");
  return s.initCustomEvent(t, n, l, e), s;
}
const We = new Map();
let Qe = 0;
function ln(t) {
  let e = 5381,
    n = t.length;
  for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
  return e >>> 0;
}
function sn(t, e) {
  const n = { stylesheet: Wt(e), rules: {} };
  return We.set(t, n), n;
}
function $t(t, e, n, l, s, i, r, o = 0) {
  const u = 16.666 / l;
  let d = `{
`;
  for (let y = 0; y <= 1; y += u) {
    const k = e + (n - e) * i(y);
    d +=
      y * 100 +
      `%{${r(k, 1 - k)}}
`;
  }
  const m =
      d +
      `100% {${r(n, 1 - n)}}
}`,
    f = `__svelte_${ln(m)}_${o}`,
    h = Bt(t),
    { stylesheet: p, rules: C } = We.get(h) || sn(h, t);
  C[f] ||
    ((C[f] = !0), p.insertRule(`@keyframes ${f} ${m}`, p.cssRules.length));
  const v = t.style.animation || "";
  return (
    (t.style.animation = `${
      v ? `${v}, ` : ""
    }${f} ${l}ms linear ${s}ms 1 both`),
    (Qe += 1),
    f
  );
}
function rn(t, e) {
  const n = (t.style.animation || "").split(", "),
    l = n.filter(
      e ? (i) => i.indexOf(e) < 0 : (i) => i.indexOf("__svelte") === -1
    ),
    s = n.length - l.length;
  s && ((t.style.animation = l.join(", ")), (Qe -= s), Qe || on());
}
function on() {
  dt(() => {
    Qe ||
      (We.forEach((t) => {
        const { ownerNode: e } = t.stylesheet;
        e && q(e);
      }),
      We.clear());
  });
}
let Ze;
function De(t) {
  Ze = t;
}
function cn() {
  if (!Ze) throw new Error("Function called outside component initialization");
  return Ze;
}
function Dt(t) {
  cn().$$.on_mount.push(t);
}
function an(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((l) => l.call(this, e));
}
const Te = [],
  ct = [];
let je = [];
const Lt = [],
  un = Promise.resolve();
let at = !1;
function fn() {
  at || ((at = !0), un.then(Zt));
}
function Ne(t) {
  je.push(t);
}
const st = new Set();
let qe = 0;
function Zt() {
  if (qe !== 0) return;
  const t = Ze;
  do {
    try {
      for (; qe < Te.length; ) {
        const e = Te[qe];
        qe++, De(e), dn(e.$$);
      }
    } catch (e) {
      throw ((Te.length = 0), (qe = 0), e);
    }
    for (De(null), Te.length = 0, qe = 0; ct.length; ) ct.pop()();
    for (let e = 0; e < je.length; e += 1) {
      const n = je[e];
      st.has(n) || (st.add(n), n());
    }
    je.length = 0;
  } while (Te.length);
  for (; Lt.length; ) Lt.pop()();
  (at = !1), st.clear(), De(t);
}
function dn(t) {
  if (t.fragment !== null) {
    t.update(), he(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(Ne);
  }
}
function mn(t) {
  const e = [],
    n = [];
  je.forEach((l) => (t.indexOf(l) === -1 ? e.push(l) : n.push(l))),
    n.forEach((l) => l()),
    (je = e);
}
let Be;
function hn() {
  return (
    Be ||
      ((Be = Promise.resolve()),
      Be.then(() => {
        Be = null;
      })),
    Be
  );
}
function rt(t, e, n) {
  t.dispatchEvent(nn(`${e ? "intro" : "outro"}${n}`));
}
const Ke = new Set();
let ke;
function Ue() {
  ke = { r: 0, c: [], p: ke };
}
function Ye() {
  ke.r || he(ke.c), (ke = ke.p);
}
function V(t, e) {
  t && t.i && (Ke.delete(t), t.i(e));
}
function M(t, e, n, l) {
  if (t && t.o) {
    if (Ke.has(t)) return;
    Ke.add(t),
      ke.c.push(() => {
        Ke.delete(t), l && (n && t.d(1), l());
      }),
      t.o(e);
  } else l && l();
}
const gn = { duration: 0 };
function Xe(t, e, n, l) {
  const s = { direction: "both" };
  let i = e(t, n, s),
    r = l ? 0 : 1,
    o = null,
    u = null,
    d = null;
  function m() {
    d && rn(t, d);
  }
  function f(p, C) {
    const v = p.b - r;
    return (
      (C *= Math.abs(v)),
      {
        a: r,
        b: p.b,
        d: v,
        duration: C,
        start: p.start,
        end: p.start + C,
        group: p.group,
      }
    );
  }
  function h(p) {
    const {
        delay: C = 0,
        duration: v = 300,
        easing: y = Pt,
        tick: k = O,
        css: S,
      } = i || gn,
      $ = { start: Kt() + C, b: p };
    p || (($.group = ke), (ke.r += 1)),
      o || u
        ? (u = $)
        : (S && (m(), (d = $t(t, r, p, v, C, y, S))),
          p && k(0, 1),
          (o = f($, v)),
          Ne(() => rt(t, p, "start")),
          Jt((w) => {
            if (
              (u &&
                w > u.start &&
                ((o = f(u, v)),
                (u = null),
                rt(t, o.b, "start"),
                S && (m(), (d = $t(t, r, o.b, o.duration, 0, y, i.css)))),
              o)
            ) {
              if (w >= o.end)
                k((r = o.b), 1 - r),
                  rt(t, o.b, "end"),
                  u || (o.b ? m() : --o.group.r || he(o.group.c)),
                  (o = null);
              else if (w >= o.start) {
                const _ = w - o.start;
                (r = o.a + o.d * y(_ / o.duration)), k(r, 1 - r);
              }
            }
            return !!(o || u);
          }));
  }
  return {
    run(p) {
      ft(i)
        ? hn().then(() => {
            (i = i(s)), h(p);
          })
        : h(p);
    },
    end() {
      m(), (o = u = null);
    },
  };
}
function pn(t, e) {
  M(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function _n(t, e, n, l, s, i, r, o, u, d, m, f) {
  let h = t.length,
    p = i.length,
    C = h;
  const v = {};
  for (; C--; ) v[t[C].key] = C;
  const y = [],
    k = new Map(),
    S = new Map(),
    $ = [];
  for (C = p; C--; ) {
    const L = f(s, i, C),
      x = n(L);
    let j = r.get(x);
    j ? l && $.push(() => j.p(L, e)) : ((j = d(x, L)), j.c()),
      k.set(x, (y[C] = j)),
      x in v && S.set(x, Math.abs(C - v[x]));
  }
  const w = new Set(),
    _ = new Set();
  function P(L) {
    V(L, 1), L.m(o, m), r.set(L.key, L), (m = L.first), p--;
  }
  for (; h && p; ) {
    const L = y[p - 1],
      x = t[h - 1],
      j = L.key,
      F = x.key;
    L === x
      ? ((m = L.first), h--, p--)
      : k.has(F)
      ? !r.has(j) || w.has(j)
        ? P(L)
        : _.has(F)
        ? h--
        : S.get(j) > S.get(F)
        ? (_.add(j), P(L))
        : (w.add(F), h--)
      : (u(x, r), h--);
  }
  for (; h--; ) {
    const L = t[h];
    k.has(L.key) || u(L, r);
  }
  for (; p; ) P(y[p - 1]);
  return he($), y;
}
function Ae(t, e) {
  const n = {},
    l = {},
    s = { $$scope: 1 };
  let i = t.length;
  for (; i--; ) {
    const r = t[i],
      o = e[i];
    if (o) {
      for (const u in r) u in o || (l[u] = 1);
      for (const u in o) s[u] || ((n[u] = o[u]), (s[u] = 1));
      t[i] = o;
    } else for (const u in r) s[u] = 1;
  }
  for (const r in l) r in n || (n[r] = void 0);
  return n;
}
function Q(t) {
  t && t.c();
}
function K(t, e, n, l) {
  const { fragment: s, after_update: i } = t.$$;
  s && s.m(e, n),
    l ||
      Ne(() => {
        const r = t.$$.on_mount.map(Tt).filter(ft);
        t.$$.on_destroy ? t.$$.on_destroy.push(...r) : he(r),
          (t.$$.on_mount = []);
      }),
    i.forEach(Ne);
}
function J(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (mn(n.after_update),
    he(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function vn(t, e) {
  t.$$.dirty[0] === -1 && (Te.push(t), fn(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function se(t, e, n, l, s, i, r, o = [-1]) {
  const u = Ze;
  De(t);
  const d = (t.$$ = {
    fragment: null,
    ctx: [],
    props: i,
    update: O,
    not_equal: s,
    bound: bt(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    callbacks: bt(),
    dirty: o,
    skip_bound: !1,
    root: e.target || u.$$.root,
  });
  r && r(d.root);
  let m = !1;
  if (
    ((d.ctx = n
      ? n(t, e.props || {}, (f, h, ...p) => {
          const C = p.length ? p[0] : h;
          return (
            d.ctx &&
              s(d.ctx[f], (d.ctx[f] = C)) &&
              (!d.skip_bound && d.bound[f] && d.bound[f](C), m && vn(t, f)),
            h
          );
        })
      : []),
    d.update(),
    (m = !0),
    he(d.before_update),
    (d.fragment = l ? l(d.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const f = en(e.target);
      d.fragment && d.fragment.l(f), f.forEach(q);
    } else d.fragment && d.fragment.c();
    e.intro && V(t.$$.fragment),
      K(t, e.target, e.anchor, e.customElement),
      Zt();
  }
  De(u);
}
class re {
  $destroy() {
    J(this, 1), (this.$destroy = O);
  }
  $on(e, n) {
    if (!ft(n)) return O;
    const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      l.push(n),
      () => {
        const s = l.indexOf(n);
        s !== -1 && l.splice(s, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !zt(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
const Ft = () => !window.invokeNative;
async function Ee(t, e = {}, n) {
  const l = {
    method: "post",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify(e),
  };
  if (Ft() && n) return n;
  const s = window.GetParentResourceName
    ? window.GetParentResourceName()
    : "nui-frame-app";
  return await (await fetch(`https://${s}/${t}`, l)).json();
}
var A = ((t) => (
  (t.SEDAN = "Sedans"),
  (t.SUV = "SUVs"),
  (t.SPORT = "Sports"),
  (t.TRUCK = "Trucks"),
  (t.MOTORCYCLE = "Motorcycles"),
  (t.ALL = "all"),
  t
))(A || {});
const Pe = [];
function Le(t, e = O) {
  let n;
  const l = new Set();
  function s(o) {
    if (ee(t, o) && ((t = o), n)) {
      const u = !Pe.length;
      for (const d of l) d[1](), Pe.push(d, t);
      if (u) {
        for (let d = 0; d < Pe.length; d += 2) Pe[d][0](Pe[d + 1]);
        Pe.length = 0;
      }
    }
  }
  function i(o) {
    s(o(t));
  }
  function r(o, u = O) {
    const d = [o, u];
    return (
      l.add(d),
      l.size === 1 && (n = e(s) || O),
      o(t),
      () => {
        l.delete(d), l.size === 0 && n && (n(), (n = null));
      }
    );
  }
  return { set: s, update: i, subscribe: r };
}
const et = Le(!!Ft());
function tt() {
  Ee("close"),
    et.set(!1),
    Fe.set(!1),
    $e.set({
      acceleration: 0,
      agility: 0,
      braking: 0,
      class: "",
      classType: "",
      estoque: 100,
      maxspeed: 0,
      model: "veiculo",
      name: "Ve\xEDculo",
      portamalas: 50,
      preco: 50,
    }),
    setTimeout(() => {
      ie.set(void 0), le.set(A.ALL);
    }, 200);
}
const ht = Le(),
  Ce = Le(),
  $e = Le({
    acceleration: 0,
    agility: 0,
    braking: 0,
    class: "",
    classType: "",
    estoque: 100,
    maxspeed: 0,
    model: "veiculo",
    name: "Ve\xEDculo",
    portamalas: 50,
    preco: 50,
  }),
  le = Le(A.ALL),
  ie = Le(),
  ot = Le(""),
  Fe = Le(!1),
  ut = Le("#FFFFFF");
function wn(t) {
  let e, n, l, s, i;
  const r = t[3].default,
    o = Ot(r, t, t[2], null);
  let u = [
      t[1],
      {
        class:
          (n = `shape text-white/20 transition ease-in-out hover:bg-white/[2%] 
  rounded-[.5rem] py-[1.4rem] px-[1.7rem] text-[1.2rem] font-semibold
  ${t[0] && "shape-actived text-white/60"}`),
      },
    ],
    d = {};
  for (let m = 0; m < u.length; m += 1) d = Z(d, u[m]);
  return {
    c() {
      (e = g("button")), o && o.c(), kt(e, d);
    },
    m(m, f) {
      T(m, e, f),
        o && o.m(e, null),
        e.autofocus && e.focus(),
        (l = !0),
        s || ((i = G(e, "click", t[4])), (s = !0));
    },
    p(m, [f]) {
      o &&
        o.p &&
        (!l || f & 4) &&
        Nt(o, r, m, m[2], l ? It(r, m[2], f, null) : Ht(m[2]), null),
        kt(
          e,
          (d = Ae(u, [
            f & 2 && m[1],
            (!l ||
              (f & 1 &&
                n !==
                  (n = `shape text-white/20 transition ease-in-out hover:bg-white/[2%] 
  rounded-[.5rem] py-[1.4rem] px-[1.7rem] text-[1.2rem] font-semibold
  ${m[0] && "shape-actived text-white/60"}`))) && { class: n },
          ]))
        );
    },
    i(m) {
      l || (V(o, m), (l = !0));
    },
    o(m) {
      M(o, m), (l = !1);
    },
    d(m) {
      m && q(e), o && o.d(m), (s = !1), i();
    },
  };
}
function Cn(t, e, n) {
  const l = ["selected"];
  let s = me(e, l),
    { $$slots: i = {}, $$scope: r } = e,
    { selected: o = !1 } = e;
  function u(d) {
    an.call(this, t, d);
  }
  return (
    (t.$$set = (d) => {
      (e = Z(Z({}, e), He(d))),
        n(1, (s = me(e, l))),
        "selected" in d && n(0, (o = d.selected)),
        "$$scope" in d && n(2, (r = d.$$scope));
    }),
    [o, s, r, i, u]
  );
}
class Vt extends re {
  constructor(e) {
    super(), se(this, e, Cn, wn, ee, { selected: 0 });
  }
}
function bn(t) {
  let e, n, l, s, i, r, o, u, d, m, f, h, p, C, v, y, k, S;
  return {
    c() {
      (e = g("nav")),
        (n = g("ul")),
        (l = g("li")),
        (s = g("button")),
        (s.textContent = "SEDANS"),
        (i = b()),
        (r = g("li")),
        (o = g("button")),
        (o.textContent = "SUVS"),
        (u = b()),
        (d = g("li")),
        (m = g("button")),
        (m.textContent = "ESPORTIVOS"),
        (f = b()),
        (h = g("li")),
        (p = g("button")),
        (p.textContent = "MOTOS"),
        (C = b()),
        (v = g("li")),
        (y = g("button")),
        (y.textContent = "TODOS"),
        a(l, "class", "svelte-1nci7ea"),
        we(l, "selected", t[0] === A.SEDAN),
        a(r, "class", "svelte-1nci7ea"),
        we(r, "selected", t[0] === A.SUV),
        a(d, "class", "svelte-1nci7ea"),
        we(d, "selected", t[0] === A.SPORT),
        a(h, "class", "svelte-1nci7ea"),
        we(h, "selected", t[0] === A.MOTORCYCLE),
        a(v, "class", "svelte-1nci7ea"),
        we(v, "selected", t[0] === A.ALL),
        a(n, "class", "flex gap-[4rem] text-[1.83rem] text-white/10");
    },
    m($, w) {
      T($, e, w),
        c(e, n),
        c(n, l),
        c(l, s),
        c(n, i),
        c(n, r),
        c(r, o),
        c(n, u),
        c(n, d),
        c(d, m),
        c(n, f),
        c(n, h),
        c(h, p),
        c(n, C),
        c(n, v),
        c(v, y),
        k ||
          ((S = [
            G(s, "click", t[1]),
            G(o, "click", t[2]),
            G(m, "click", t[3]),
            G(p, "click", t[4]),
            G(y, "click", t[5]),
          ]),
          (k = !0));
    },
    p($, [w]) {
      w & 1 && we(l, "selected", $[0] === A.SEDAN),
        w & 1 && we(r, "selected", $[0] === A.SUV),
        w & 1 && we(d, "selected", $[0] === A.SPORT),
        w & 1 && we(h, "selected", $[0] === A.MOTORCYCLE),
        w & 1 && we(v, "selected", $[0] === A.ALL);
    },
    i: O,
    o: O,
    d($) {
      $ && q(e), (k = !1), he(S);
    },
  };
}
function yn(t, e, n) {
  let l, s, i;
  return (
    D(t, Ce, (f) => n(6, (l = f))),
    D(t, ht, (f) => n(7, (s = f))),
    D(t, le, (f) => n(0, (i = f))),
    le.subscribe((f) => {
      if (!!f) {
        if ((ie.set(void 0), f !== A.ALL)) {
          Ce.set(
            s
              .filter(
                (h) =>
                  h.classType.toLowerCase() === f.toLowerCase() &&
                  h.class !== "vip"
              )
              .sort((h, p) => (h.name < p.name ? -1 : 1))
          ),
            setTimeout(() => {
              $e.set(l[0]);
            }, 1);
          return;
        }
        l &&
          s &&
          (Ce.set(
            s
              .filter((h) => h.class !== "vip")
              .sort((h, p) => (h.name < p.name ? -1 : 1))
          ),
          setTimeout(() => {
            $e.set(l[0]);
          }, 1));
      }
    }),
    [
      i,
      () => Se(le, (i = A.SEDAN), i),
      () => Se(le, (i = A.SUV), i),
      () => Se(le, (i = A.SPORT), i),
      () => Se(le, (i = A.MOTORCYCLE), i),
      () => Se(le, (i = A.ALL), i),
    ]
  );
}
class kn extends re {
  constructor(e) {
    super(), se(this, e, yn, bn, ee, {});
  }
}
function $n(t) {
  let e,
    n,
    l,
    s = [
      { width: t[0] },
      { height: t[1] },
      t[2],
      { viewBox: "0 0 13 14" },
      { fill: "none" },
      { xmlns: "http://www.w3.org/2000/svg" },
    ],
    i = {};
  for (let r = 0; r < s.length; r += 1) i = Z(i, s[r]);
  return {
    c() {
      (e = N("svg")),
        (n = N("path")),
        (l = N("path")),
        a(
          n,
          "d",
          "M5.59072 11.4354C4.48498 11.4354 3.40407 11.1075 2.48469 10.4931C1.5653 9.87883 0.848719 9.00568 0.425571 7.98411C0.00242233 6.96254 -0.108293 5.83843 0.107427 4.75393C0.323146 3.66944 0.855611 2.67327 1.63749 1.89139C2.41936 1.10952 3.41553 0.577052 4.50003 0.361333C5.58452 0.145614 6.70863 0.256329 7.7302 0.679477C8.75177 1.10263 9.62492 1.8192 10.2392 2.73859C10.8536 3.65798 11.1814 4.73889 11.1814 5.84463C11.1814 6.57881 11.0368 7.30581 10.7559 7.98411C10.4749 8.6624 10.0631 9.27872 9.54396 9.79787C9.02481 10.317 8.4085 10.7288 7.7302 11.0098C7.0519 11.2907 6.32491 11.4354 5.59072 11.4354ZM5.59072 1.37502C4.70966 1.37502 3.84837 1.63629 3.11579 2.12578C2.38321 2.61528 1.81223 3.31102 1.47506 4.12502C1.13789 4.93902 1.04967 5.83472 1.22156 6.69886C1.39345 7.563 1.81773 8.35676 2.44073 8.97977C3.06374 9.60278 3.8575 10.0271 4.72164 10.1989C5.58578 10.3708 6.48148 10.2826 7.29549 9.94544C8.10949 9.60827 8.80522 9.03729 9.29472 8.30471C9.78421 7.57213 10.0455 6.71085 10.0455 5.82978C10.0455 4.64831 9.57614 3.51522 8.74071 2.67979C7.90528 1.84436 6.7722 1.37502 5.59072 1.37502Z"
        ),
        a(n, "fill", "white"),
        a(n, "fill-opacity", "0.15"),
        a(
          l,
          "d",
          "M12.4437 13.2544C12.3705 13.2547 12.298 13.2405 12.2304 13.2124C12.1629 13.1844 12.1016 13.1431 12.0502 13.091L8.9838 10.0247C8.88544 9.91912 8.83189 9.77951 8.83444 9.63525C8.83698 9.49099 8.89542 9.35335 8.99745 9.25132C9.09947 9.1493 9.23711 9.09086 9.38137 9.08831C9.52563 9.08577 9.66525 9.13932 9.77081 9.23768L12.8372 12.304C12.9414 12.4084 13 12.55 13 12.6975C13 12.8451 12.9414 12.9866 12.8372 13.091C12.7858 13.1431 12.7245 13.1844 12.6569 13.2124C12.5893 13.2405 12.5168 13.2547 12.4437 13.2544Z"
        ),
        a(l, "fill", "white"),
        a(l, "fill-opacity", "0.15"),
        be(e, i);
    },
    m(r, o) {
      T(r, e, o), c(e, n), c(e, l);
    },
    p(r, [o]) {
      be(
        e,
        (i = Ae(s, [
          o & 1 && { width: r[0] },
          o & 2 && { height: r[1] },
          o & 4 && r[2],
          { viewBox: "0 0 13 14" },
          { fill: "none" },
          { xmlns: "http://www.w3.org/2000/svg" },
        ]))
      );
    },
    i: O,
    o: O,
    d(r) {
      r && q(e);
    },
  };
}
function Ln(t, e, n) {
  const l = ["width", "height"];
  let s = me(e, l),
    { width: i = "1.3rem" } = e,
    { height: r = "1.3rem" } = e;
  return (
    (t.$$set = (o) => {
      (e = Z(Z({}, e), He(o))),
        n(2, (s = me(e, l))),
        "width" in o && n(0, (i = o.width)),
        "height" in o && n(1, (r = o.height));
    }),
    [i, r, s]
  );
}
class Vn extends re {
  constructor(e) {
    super(), se(this, e, Ln, $n, ee, { width: 0, height: 1 });
  }
}
function xn(t) {
  let e, n, l, s, i, r, o;
  return (
    (n = new Vn({})),
    {
      c() {
        (e = g("div")),
          Q(n.$$.fragment),
          (l = b()),
          (s = g("input")),
          a(
            s,
            "class",
            "w-full text-[1.2rem] bg-transparent outline-none text-white/[40%] placeholder:text-white/[15%]"
          ),
          a(s, "type", "text"),
          a(s, "placeholder", "Pesquisar ve\xEDculos"),
          a(
            e,
            "class",
            "cursor-text py-[1.5rem] px-[1.6rem] gap-[1rem] rounded-[.5rem] w-[28.7rem] shape flex items-center"
          );
      },
      m(u, d) {
        T(u, e, d),
          K(n, e, null),
          c(e, l),
          c(e, s),
          Je(s, t[1]),
          t[3](s),
          (i = !0),
          r || ((o = [G(s, "input", t[2]), G(e, "click", t[4])]), (r = !0));
      },
      p(u, [d]) {
        d & 2 && s.value !== u[1] && Je(s, u[1]);
      },
      i(u) {
        i || (V(n.$$.fragment, u), (i = !0));
      },
      o(u) {
        M(n.$$.fragment, u), (i = !1);
      },
      d(u) {
        u && q(e), J(n), t[3](null), (r = !1), he(o);
      },
    }
  );
}
function Sn(t, e, n) {
  let l, s, i, r;
  D(t, Ce, (f) => n(5, (l = f))),
    D(t, le, (f) => n(6, (s = f))),
    D(t, ie, (f) => n(7, (i = f))),
    D(t, ot, (f) => n(1, (r = f)));
  let o;
  ot.subscribe((f) => {
    if (!!l) {
      if (f.length <= 0) {
        if (i) {
          let p = i;
          ie.set(void 0), ie.set(p);
          return;
        }
        let h = s;
        le.set(void 0), le.set(h);
      }
      Ce.set(
        l
          .filter((h) => h.name.toLowerCase().startsWith(f.toLowerCase()))
          .sort((h, p) => (h.name < p.name ? -1 : 1))
      );
    }
  });
  function u() {
    (r = this.value), ot.set(r);
  }
  function d(f) {
    ct[f ? "unshift" : "push"](() => {
      (o = f), n(0, o);
    });
  }
  return [o, r, u, d, () => o.focus()];
}
class En extends re {
  constructor(e) {
    super(), se(this, e, Sn, xn, ee, {});
  }
}
function Mn(t) {
  let e,
    n,
    l = [
      { width: t[0] },
      { height: t[1] },
      t[2],
      { viewBox: "0 0 33 26" },
      { fill: "none" },
      { xmlns: "http://www.w3.org/2000/svg" },
    ],
    s = {};
  for (let i = 0; i < l.length; i += 1) s = Z(s, l[i]);
  return {
    c() {
      (e = N("svg")),
        (n = N("path")),
        a(
          n,
          "d",
          "M16.2347 0.0099801C12.4046 -0.0461733 7.08419 0.0358977 5.98889 2.9784L3.29754 9.29381C3.178 9.15748 3.02155 9.05868 2.84708 9.00934L1.7635 8.70451C1.64436 8.6707 1.51971 8.66075 1.39672 8.67524C1.27372 8.68973 1.1548 8.72837 1.04678 8.78895C0.938759 8.84952 0.843766 8.93084 0.767257 9.02823C0.690747 9.12561 0.634226 9.23715 0.60094 9.35644L0.0357044 11.3638C0.00189806 11.4829 -0.00803526 11.6076 0.0064756 11.7306C0.0209865 11.8536 0.0596554 11.9726 0.120261 12.0806C0.180867 12.1886 0.262216 12.2836 0.359637 12.3601C0.457058 12.4366 0.56863 12.4931 0.687948 12.5263L1.77183 12.8312C1.80824 12.8414 1.84403 12.8447 1.88044 12.8503C1.67341 13.3665 1.54413 13.9342 1.54413 14.272V21.6118C1.54413 21.9882 1.70149 22.1622 1.95263 22.244V24.1995C1.95231 24.373 1.98625 24.5449 2.05252 24.7053C2.11879 24.8656 2.21607 25.0114 2.33879 25.1341C2.46151 25.2567 2.60725 25.354 2.76765 25.4202C2.92805 25.4865 3.09994 25.5204 3.27347 25.52H6.81762C6.99113 25.5203 7.16299 25.4864 7.32335 25.4201C7.48371 25.3539 7.62941 25.2566 7.7521 25.1339C7.87479 25.0113 7.97205 24.8656 8.03829 24.7052C8.10454 24.5448 8.13848 24.373 8.13815 24.1995V22.3155H24.7466V24.1995C24.7463 24.373 24.7803 24.5449 24.8466 24.7053C24.9129 24.8657 25.0102 25.0114 25.133 25.1341C25.2557 25.2568 25.4015 25.354 25.5619 25.4202C25.7223 25.4865 25.8942 25.5204 26.0678 25.52H29.6113C29.7849 25.5204 29.9568 25.4865 30.1173 25.4203C30.2777 25.3541 30.4235 25.2569 30.5463 25.1342C30.6691 25.0115 30.7664 24.8658 30.8327 24.7054C30.899 24.545 30.933 24.373 30.9327 24.1995V22.244C31.1836 22.1622 31.3406 21.9879 31.3406 21.6115V14.2723C31.3406 13.9345 31.2113 13.3668 31.0043 12.8506C31.0407 12.8451 31.0765 12.8414 31.1129 12.8315L32.1971 12.5266C32.3164 12.4934 32.428 12.4368 32.5253 12.3603C32.6227 12.2838 32.704 12.1888 32.7646 12.0808C32.8252 11.9728 32.8638 11.8539 32.8783 11.7309C32.8928 11.6079 32.8829 11.4832 32.8491 11.3641L32.2844 9.35675C32.2511 9.23744 32.1945 9.12588 32.1179 9.02849C32.0414 8.9311 31.9463 8.84979 31.8382 8.78922C31.7302 8.72864 31.6112 8.69001 31.4882 8.67552C31.3651 8.66104 31.2404 8.671 31.1213 8.70482L30.0377 9.00965C29.8632 9.05899 29.7068 9.15779 29.5872 9.29412L26.8959 2.97871C25.7219 -0.00822282 20.0649 0.0661335 16.2347 0.0099801ZM27.2044 9.69275C27.268 9.88219 27.0773 10.0081 26.8777 10.0198C26.8777 10.0198 26.2251 10.0753 25.3254 10.1478C24.6408 8.54808 23.0497 7.421 21.2065 7.421C19.184 7.421 17.4667 8.77917 16.916 10.6285C16.7633 10.6307 16.5858 10.6369 16.4439 10.6369C12.9596 10.6369 6.0071 10.0198 6.0071 10.0198C5.80747 10.0081 5.6168 9.88219 5.68036 9.69275C8.35814 1.53044 8.43774 2.14381 16.294 2.22958C24.1505 2.31536 24.1962 1.73222 27.2044 9.69275ZM21.2065 8.96368C21.6916 8.96197 22.1695 9.08106 22.597 9.31019C23.0246 9.53933 23.3884 9.87131 23.6556 10.2762C22.0821 10.3928 20.271 10.5122 18.5833 10.5816C18.8261 10.0941 19.2005 9.68425 19.664 9.39834C20.1276 9.11242 20.6618 8.96186 21.2065 8.96368ZM3.0936 11.6128C3.11736 11.6476 3.1405 11.6828 3.16672 11.717H3.0649L3.0936 11.6128ZM4.83466 13.6627C5.52393 13.6513 9.22419 14.8968 9.22419 14.8968C9.68607 15.0267 10.093 15.9005 10.0906 16.3806C10.0838 17.9973 5.91114 17.4364 4.21759 17.4428C4.10372 17.4431 3.99092 17.4209 3.88566 17.3775C3.78041 17.334 3.68477 17.2702 3.60423 17.1897C3.5237 17.1092 3.45987 17.0136 3.4164 16.9084C3.37293 16.8031 3.35067 16.6903 3.35092 16.5765V14.5293C3.35092 14.0493 4.14539 13.6741 4.83466 13.6627ZM28.0507 13.6627C28.74 13.6741 29.5345 14.0493 29.5345 14.5293V16.5765C29.5347 16.6903 29.5125 16.8031 29.469 16.9084C29.4255 17.0136 29.3617 17.1092 29.2811 17.1897C29.2006 17.2702 29.105 17.334 28.9997 17.3775C28.8945 17.4209 28.7816 17.4431 28.6678 17.4428C26.9739 17.4364 22.8016 17.9973 22.7948 16.3806C22.7923 15.9005 23.199 15.0267 23.6612 14.8968C23.6612 14.8968 27.3614 13.6513 28.0507 13.6627Z"
        ),
        a(n, "fill", "white"),
        a(n, "fill-opacity", "0.8"),
        be(e, s);
    },
    m(i, r) {
      T(i, e, r), c(e, n);
    },
    p(i, [r]) {
      be(
        e,
        (s = Ae(l, [
          r & 1 && { width: i[0] },
          r & 2 && { height: i[1] },
          r & 4 && i[2],
          { viewBox: "0 0 33 26" },
          { fill: "none" },
          { xmlns: "http://www.w3.org/2000/svg" },
        ]))
      );
    },
    i: O,
    o: O,
    d(i) {
      i && q(e);
    },
  };
}
function qn(t, e, n) {
  const l = ["width", "height"];
  let s = me(e, l),
    { width: i = "3.28rem" } = e,
    { height: r = "2.55rem" } = e;
  return (
    (t.$$set = (o) => {
      (e = Z(Z({}, e), He(o))),
        n(2, (s = me(e, l))),
        "width" in o && n(0, (i = o.width)),
        "height" in o && n(1, (r = o.height));
    }),
    [i, r, s]
  );
}
class Pn extends re {
  constructor(e) {
    super(), se(this, e, qn, Mn, ee, { width: 0, height: 1 });
  }
}
function Tn(t) {
  let e;
  return {
    c() {
      e = E("VIPS");
    },
    m(n, l) {
      T(n, e, l);
    },
    d(n) {
      n && q(e);
    },
  };
}
function On(t) {
  let e;
  return {
    c() {
      e = E("MEUS VE\xCDCULOS");
    },
    m(n, l) {
      T(n, e, l);
    },
    d(n) {
      n && q(e);
    },
  };
}
function jn(t) {
  let e, n, l, s, i, r, o, u, d, m, f, h, p, C, v, y, k, S, $, w;
  return (
    (i = new Pn({})),
    (p = new En({})),
    (v = new Vt({
      props: {
        selected: t[2] == t[0].VIPS,
        $$slots: { default: [Tn] },
        $$scope: { ctx: t },
      },
    })),
    v.$on("click", t[3]),
    (k = new Vt({
      props: {
        selected: t[1] && t[2] == t[0].MY_VEHICLES,
        $$slots: { default: [On] },
        $$scope: { ctx: t },
      },
    })),
    k.$on("click", t[4]),
    ($ = new kn({})),
    {
      c() {
        (e = g("header")),
          (n = g("div")),
          (l = g("section")),
          (s = g("div")),
          Q(i.$$.fragment),
          (r = b()),
          (o = g("h1")),
          (o.textContent = "CONCESSION\xC1RIA"),
          (u = b()),
          (d = g("p")),
          (d.textContent = `Bem-vindo ao local onde seus sonhos ganham vida,\r
        Descubra um universo de possibilidades automotivas.`),
          (m = b()),
          (f = g("section")),
          (h = g("div")),
          Q(p.$$.fragment),
          (C = b()),
          Q(v.$$.fragment),
          (y = b()),
          Q(k.$$.fragment),
          (S = b()),
          Q($.$$.fragment),
          a(o, "class", "text-white/80 text-[2.79rem] font-semibold"),
          a(s, "class", "flex items-center gap-[.91rem]"),
          a(
            d,
            "class",
            "leading-[1.96rem] text-white/[35%] text-[1.766rem] max-w-[41.5rem]"
          ),
          a(l, "class", "flex flex-col"),
          a(h, "class", "flex gap-[1rem]"),
          a(f, "class", "flex flex-col items-end justify-center gap-[1rem]"),
          a(n, "class", "flex w-[114.5rem] items-start justify-between"),
          a(e, "class", "w-full flex items-center justify-between");
      },
      m(_, P) {
        T(_, e, P),
          c(e, n),
          c(n, l),
          c(l, s),
          K(i, s, null),
          c(s, r),
          c(s, o),
          c(l, u),
          c(l, d),
          c(n, m),
          c(n, f),
          c(f, h),
          K(p, h, null),
          c(h, C),
          K(v, h, null),
          c(h, y),
          K(k, h, null),
          c(f, S),
          K($, f, null),
          (w = !0);
      },
      p(_, [P]) {
        const L = {};
        P & 5 && (L.selected = _[2] == _[0].VIPS),
          P & 128 && (L.$$scope = { dirty: P, ctx: _ }),
          v.$set(L);
        const x = {};
        P & 7 && (x.selected = _[1] && _[2] == _[0].MY_VEHICLES),
          P & 128 && (x.$$scope = { dirty: P, ctx: _ }),
          k.$set(x);
      },
      i(_) {
        w ||
          (V(i.$$.fragment, _),
          V(p.$$.fragment, _),
          V(v.$$.fragment, _),
          V(k.$$.fragment, _),
          V($.$$.fragment, _),
          (w = !0));
      },
      o(_) {
        M(i.$$.fragment, _),
          M(p.$$.fragment, _),
          M(v.$$.fragment, _),
          M(k.$$.fragment, _),
          M($.$$.fragment, _),
          (w = !1);
      },
      d(_) {
        _ && q(e), J(i), J(p), J(v), J(k), J($);
      },
    }
  );
}
function In(t, e, n) {
  let l, s, i;
  D(t, Ce, (m) => n(5, (l = m))),
    D(t, ht, (m) => n(6, (s = m))),
    D(t, ie, (m) => n(2, (i = m)));
  var r;
  (function (m) {
    (m.VIPS = "vip"), (m.MY_VEHICLES = "myVehicles");
  })(r || (r = {}));
  let o = !1;
  return (
    ie.subscribe(async (m) => {
      if (
        (m == r.VIPS &&
          (Ce.set(
            s
              .filter((f) => f.class == "vip")
              .sort((f, h) => (f.name < h.name ? -1 : 1))
          ),
          setTimeout(() => {
            $e.set(l[0]);
          }, 1),
          ie.set(m),
          le.set(void 0)),
        m == r.MY_VEHICLES)
      ) {
        const f = await Ee("requestMeus");
        if (f.veiculos.length <= 0) {
          ie.set(void 0), le.set(A.ALL);
          return;
        }
        n(1, (o = !0)), Ce.set(f.veiculos), ie.set(m), le.set(void 0);
      }
    }),
    [
      r,
      o,
      i,
      () => Se(ie, (i = r.VIPS), i),
      () => Se(ie, (i = r.MY_VEHICLES), i),
    ]
  );
}
class Nn extends re {
  constructor(e) {
    super(), se(this, e, In, jn, ee, {});
  }
}
function Hn(t) {
  let e,
    n,
    l,
    s,
    i,
    r = [
      { width: t[0] },
      { height: t[1] },
      t[2],
      { viewBox: "0 0 23 22" },
      { fill: "none" },
      { xmlns: "http://www.w3.org/2000/svg" },
    ],
    o = {};
  for (let u = 0; u < r.length; u += 1) o = Z(o, r[u]);
  return {
    c() {
      (e = N("svg")),
        (n = N("g")),
        (l = N("path")),
        (s = N("path")),
        (i = N("path")),
        a(l, "id", "Vector"),
        a(
          l,
          "d",
          "M22.6616 4.75156C22.4564 4.39598 22.1625 4.09966 21.8086 3.8915C21.4548 3.68334 21.053 3.57045 20.6425 3.56384H5.43974L4.75086 0.879606C4.68126 0.620492 4.52598 0.392576 4.31031 0.23298C4.09464 0.0733845 3.83129 -0.00848831 3.56315 0.000696572H1.18772C0.872714 0.000696572 0.570614 0.12583 0.347874 0.34857C0.125134 0.57131 0 0.87341 0 1.18841C0 1.50341 0.125134 1.80551 0.347874 2.02825C0.570614 2.25099 0.872714 2.37613 1.18772 2.37613H2.66048L5.93858 14.5621C6.00818 14.8212 6.16346 15.0491 6.37913 15.2087C6.5948 15.3683 6.85815 15.4502 7.12629 15.441H17.8157C18.0351 15.4403 18.2499 15.3789 18.4365 15.2636C18.6231 15.1483 18.7741 14.9836 18.8728 14.7878L22.7685 6.99634C22.9374 6.64242 23.016 6.2522 22.9973 5.86051C22.9787 5.46882 22.8633 5.08783 22.6616 4.75156Z"
        ),
        a(l, "fill", "#4EE79D"),
        a(l, "fill-opacity", "0.75"),
        a(s, "id", "Vector_2"),
        a(
          s,
          "d",
          "M6.53255 21.3796C7.51649 21.3796 8.31412 20.5819 8.31412 19.598C8.31412 18.614 7.51649 17.8164 6.53255 17.8164C5.54861 17.8164 4.75098 18.614 4.75098 19.598C4.75098 20.5819 5.54861 21.3796 6.53255 21.3796Z"
        ),
        a(s, "fill", "#4EE79D"),
        a(s, "fill-opacity", "0.75"),
        a(i, "id", "Vector_3"),
        a(
          i,
          "d",
          "M18.4095 21.3796C19.3934 21.3796 20.1911 20.5819 20.1911 19.598C20.1911 18.614 19.3934 17.8164 18.4095 17.8164C17.4256 17.8164 16.6279 18.614 16.6279 19.598C16.6279 20.5819 17.4256 21.3796 18.4095 21.3796Z"
        ),
        a(i, "fill", "#4EE79D"),
        a(i, "fill-opacity", "0.75"),
        a(n, "id", "evaShoppingCartFill2"),
        be(e, o);
    },
    m(u, d) {
      T(u, e, d), c(e, n), c(n, l), c(n, s), c(n, i);
    },
    p(u, [d]) {
      be(
        e,
        (o = Ae(r, [
          d & 1 && { width: u[0] },
          d & 2 && { height: u[1] },
          d & 4 && u[2],
          { viewBox: "0 0 23 22" },
          { fill: "none" },
          { xmlns: "http://www.w3.org/2000/svg" },
        ]))
      );
    },
    i: O,
    o: O,
    d(u) {
      u && q(e);
    },
  };
}
function An(t, e, n) {
  const l = ["width", "height"];
  let s = me(e, l),
    { width: i = "2.3rem" } = e,
    { height: r = "2.2rem" } = e;
  return (
    (t.$$set = (o) => {
      (e = Z(Z({}, e), He(o))),
        n(2, (s = me(e, l))),
        "width" in o && n(0, (i = o.width)),
        "height" in o && n(1, (r = o.height));
    }),
    [i, r, s]
  );
}
class Ut extends re {
  constructor(e) {
    super(), se(this, e, An, Hn, ee, { width: 0, height: 1 });
  }
}
function Rn(t) {
  let e,
    n,
    l = [
      { width: t[0] },
      { height: t[1] },
      t[2],
      { viewBox: "0 0 22 22" },
      { fill: "none" },
      { xmlns: "http://www.w3.org/2000/svg" },
    ],
    s = {};
  for (let i = 0; i < l.length; i += 1) s = Z(s, l[i]);
  return {
    c() {
      (e = N("svg")),
        (n = N("path")),
        a(n, "id", "Vector"),
        a(
          n,
          "d",
          "M10.69 0C4.78613 0 0 4.78613 0 10.69C0 16.5939 4.78613 21.38 10.69 21.38C16.5939 21.38 21.3799 16.5939 21.3799 10.69C21.3799 4.78613 16.5939 0 10.69 0ZM12.8868 18.747C12.0425 18.7543 12.0418 17.7493 12.0418 17.7493H9.39832C9.33833 18.804 8.67121 18.7739 8.48053 18.7434C5.46404 17.9177 3.12878 15.4446 2.50442 12.3502C2.55825 11.8183 3.11993 11.6813 3.11993 11.6813L3.39032 8.37688C2.87763 8.19858 2.92184 7.71765 2.97871 7.48117C4.23663 4.46191 7.215 2.33892 10.69 2.33892C14.1346 2.33892 17.0911 4.42469 18.3678 7.40181C18.4252 7.58481 18.5592 8.17485 17.9781 8.37695L18.2483 11.6813C18.2483 11.6813 18.8399 11.826 18.8667 12.3935C18.2287 15.4721 15.8954 17.9285 12.8868 18.747ZM3.88958 8.38553L3.6807 11.5982C10.1061 10.6802 9.46356 17.2474 9.46356 17.2474H12.0336C11.9418 10.6385 17.6992 11.5982 17.6992 11.5982L17.5157 8.38553C10.8266 5.74232 3.88958 8.38553 3.88958 8.38553ZM10.69 10.9904C9.82729 10.9904 9.12793 10.5959 9.12793 10.1093C9.12793 9.62269 9.82729 9.22818 10.69 9.22818C11.5527 9.22818 12.2521 9.62269 12.2521 10.1093C12.2521 10.5959 11.5528 10.9904 10.69 10.9904Z"
        ),
        a(n, "fill", "#E7B34E"),
        a(n, "fill-opacity", "0.75"),
        be(e, s);
    },
    m(i, r) {
      T(i, e, r), c(e, n);
    },
    p(i, [r]) {
      be(
        e,
        (s = Ae(l, [
          r & 1 && { width: i[0] },
          r & 2 && { height: i[1] },
          r & 4 && i[2],
          { viewBox: "0 0 22 22" },
          { fill: "none" },
          { xmlns: "http://www.w3.org/2000/svg" },
        ]))
      );
    },
    i: O,
    o: O,
    d(i) {
      i && q(e);
    },
  };
}
function Bn(t, e, n) {
  const l = ["width", "height"];
  let s = me(e, l),
    { width: i = "2.2rem" } = e,
    { height: r = "2.2rem" } = e;
  return (
    (t.$$set = (o) => {
      (e = Z(Z({}, e), He(o))),
        n(2, (s = me(e, l))),
        "width" in o && n(0, (i = o.width)),
        "height" in o && n(1, (r = o.height));
    }),
    [i, r, s]
  );
}
class Yt extends re {
  constructor(e) {
    super(), se(this, e, Bn, Rn, ee, { width: 0, height: 1 });
  }
}
function Dn(t) {
  let e, n, l, s, i, r, o, u, d, m;
  return (
    (n = new Ut({})),
    (r = new Yt({})),
    {
      c() {
        (e = g("button")),
          Q(n.$$.fragment),
          (l = E(`\r
          Comprar`)),
          (s = b()),
          (i = g("button")),
          Q(r.$$.fragment),
          (o = E(`\r
          Teste Drive`)),
          a(e, "class", "btn svelte-1m4twd2"),
          a(i, "class", "btn svelte-1m4twd2");
      },
      m(f, h) {
        T(f, e, h),
          K(n, e, null),
          c(e, l),
          T(f, s, h),
          T(f, i, h),
          K(r, i, null),
          c(i, o),
          (u = !0),
          d || ((m = [G(e, "click", t[3]), G(i, "click", t[5])]), (d = !0));
      },
      p: O,
      i(f) {
        u || (V(n.$$.fragment, f), V(r.$$.fragment, f), (u = !0));
      },
      o(f) {
        M(n.$$.fragment, f), M(r.$$.fragment, f), (u = !1);
      },
      d(f) {
        f && q(e), J(n), f && q(s), f && q(i), J(r), (d = !1), he(m);
      },
    }
  );
}
function Zn(t) {
  let e, n, l, s, i, r, o, u, d, m;
  return (
    (n = new Ut({})),
    (r = new Yt({})),
    {
      c() {
        (e = g("button")),
          Q(n.$$.fragment),
          (l = E(`\r
          Vender`)),
          (s = b()),
          (i = g("button")),
          Q(r.$$.fragment),
          (o = E(`\r
          Teste Drive`)),
          a(e, "class", "btn svelte-1m4twd2"),
          (i.disabled = !0),
          a(i, "class", "btn svelte-1m4twd2");
      },
      m(f, h) {
        T(f, e, h),
          K(n, e, null),
          c(e, l),
          T(f, s, h),
          T(f, i, h),
          K(r, i, null),
          c(i, o),
          (u = !0),
          d || ((m = [G(e, "click", t[4]), G(i, "click", t[4])]), (d = !0));
      },
      p: O,
      i(f) {
        u || (V(n.$$.fragment, f), V(r.$$.fragment, f), (u = !0));
      },
      o(f) {
        M(n.$$.fragment, f), M(r.$$.fragment, f), (u = !1);
      },
      d(f) {
        f && q(e), J(n), f && q(s), f && q(i), J(r), (d = !1), he(m);
      },
    }
  );
}
function Fn(t) {
  let e,
    n,
    l,
    s,
    i,
    r,
    o = t[0].name + "",
    u,
    d,
    m,
    f,
    h,
    p,
    C,
    v,
    y,
    k,
    S,
    $,
    w,
    _,
    P,
    L,
    x,
    j,
    F,
    W,
    oe,
    ye,
    Y,
    _e,
    te,
    ce,
    ge,
    U,
    H,
    ne,
    ae,
    I,
    z,
    R,
    X,
    gt,
    Me,
    ze,
    pt,
    xe,
    _t,
    Re,
    ue,
    pe,
    ve,
    lt,
    vt;
  const wt = [Zn, Dn],
    Ve = [];
  function Ct(B, fe) {
    return B[1] == "myVehicles" ? 0 : 1;
  }
  return (
    (ue = Ct(t)),
    (pe = Ve[ue] = wt[ue](t)),
    {
      c() {
        (e = g("div")),
          (n = g("img")),
          (s = b()),
          (i = g("div")),
          (r = g("h1")),
          (u = E(o)),
          (d = b()),
          (m = g("span")),
          (m.textContent = "Nome do ve\xEDculo"),
          (f = b()),
          (h = g("div")),
          (p = g("div")),
          (p.innerHTML = `<p class="text-white/80 font-semibold text-[1.2rem]">Informa\xE7\xF5es do ve\xEDculo</p> 
      <span class="text-white/[35%] text-[1.1rem]">Veja os status e  informa\xE7\xF5es do ve\xEDculo selecionado</span>`),
          (C = b()),
          (v = g("div")),
          (y = g("div")),
          (k = g("div")),
          (k.innerHTML = '<p class="svelte-1m4twd2">Velocidade M\xE1xima</p>'),
          (S = b()),
          ($ = g("div")),
          (w = g("div")),
          (P = b()),
          (L = g("div")),
          (x = g("div")),
          (x.innerHTML = '<p class="svelte-1m4twd2">Acelera\xE7\xE3o</p>'),
          (j = b()),
          (F = g("div")),
          (W = g("div")),
          (ye = b()),
          (Y = g("div")),
          (_e = g("div")),
          (_e.innerHTML = '<p class="svelte-1m4twd2">Agilidade</p>'),
          (te = b()),
          (ce = g("div")),
          (ge = g("div")),
          (H = b()),
          (ne = g("div")),
          (ae = g("div")),
          (ae.innerHTML = '<p class="svelte-1m4twd2">Frenagem</p>'),
          (I = b()),
          (z = g("div")),
          (R = g("div")),
          (gt = b()),
          (Me = g("div")),
          (ze = g("div")),
          (ze.innerHTML = `<p class="leading-[1.2rem] text-[1.2rem] font-semibold text-white/80">Cor do ve\xEDculo</p> 
        <span class="text-[1.1rem] text-white/[35%]">Escolha a cor do ve\xEDculo selecionado</span>`),
          (pt = b()),
          (xe = g("input")),
          (_t = b()),
          (Re = g("div")),
          pe.c(),
          a(n, "class", "w-[26.4rem] h-[15.7rem] object-contain"),
          Ie(
            n.src,
            (l = `http://181.215.254.182/veiculos/${
              t[0].model || "panto"
            }.png`)
          ) || a(n, "src", l),
          a(n, "alt", ""),
          a(r, "class", "leading-[3rem] text-white/80 font-bold text-[3rem]"),
          a(m, "class", "leading-[1.5rem] text-[1.5rem] text-white/[15%] "),
          a(i, "class", "mt-[.89rem] mb-[2.72rem] flex flex-col items-center"),
          a(p, "class", "flex flex-col items-center mb-[3.1rem]"),
          a(k, "class", "vehicle_specification_text svelte-1m4twd2"),
          a(w, "class", "h-full transition-all bg-primary rounded-[.4rem]"),
          a(w, "style", (_ = `width: ${(t[0].maxspeed * 100) / 80}%`)),
          a(
            $,
            "class",
            "relative h-[.4rem] w-full bg-white/[1%] rounded-[.4rem]"
          ),
          a(y, "class", "vehicle_specification svelte-1m4twd2"),
          a(x, "class", "vehicle_specification_text svelte-1m4twd2"),
          a(W, "class", "h-full transition-all bg-primary rounded-[.4rem]"),
          a(W, "style", (oe = `width: ${t[0].acceleration * 100}%`)),
          a(
            F,
            "class",
            "relative h-[.4rem] w-full bg-white/[1%] rounded-[.4rem]"
          ),
          a(L, "class", "vehicle_specification svelte-1m4twd2"),
          a(_e, "class", "vehicle_specification_text svelte-1m4twd2"),
          a(ge, "class", "h-full transition-all bg-primary rounded-[.4rem]"),
          a(ge, "style", (U = `width: ${t[0].agility * 100}%`)),
          a(
            ce,
            "class",
            "relative h-[.4rem] w-full bg-white/[1%] rounded-[.4rem]"
          ),
          a(Y, "class", "vehicle_specification svelte-1m4twd2"),
          a(ae, "class", "vehicle_specification_text svelte-1m4twd2"),
          a(R, "class", "h-full transition-all bg-primary rounded-[.4rem]"),
          a(R, "style", (X = `width: ${t[0].braking * 10}%`)),
          a(
            z,
            "class",
            "relative h-[.4rem] w-full bg-white/[1%] rounded-[.4rem]"
          ),
          a(ne, "class", "vehicle_specification svelte-1m4twd2"),
          a(v, "class", "flex flex-col gap-[2rem] w-full mb-[1.9rem]"),
          a(ze, "class", "flex flex-col items-center justify-center"),
          a(xe, "class", "color svelte-1m4twd2"),
          a(xe, "type", "color"),
          a(
            Me,
            "class",
            "flex flex-col items-center justify-center gap-[1.8rem] mb-[1.8rem]"
          ),
          a(Re, "class", "flex flex-col gap-[1rem]"),
          a(
            h,
            "class",
            "w-full h-[55rem] shape rounded-[1rem] flex flex-col justify-center items-center py-[2.7rem] px-[2.6rem]"
          ),
          a(e, "class", "flex flex-col items-center w-[32.8rem]");
      },
      m(B, fe) {
        T(B, e, fe),
          c(e, n),
          c(e, s),
          c(e, i),
          c(i, r),
          c(r, u),
          c(i, d),
          c(i, m),
          c(e, f),
          c(e, h),
          c(h, p),
          c(h, C),
          c(h, v),
          c(v, y),
          c(y, k),
          c(y, S),
          c(y, $),
          c($, w),
          c(v, P),
          c(v, L),
          c(L, x),
          c(L, j),
          c(L, F),
          c(F, W),
          c(v, ye),
          c(v, Y),
          c(Y, _e),
          c(Y, te),
          c(Y, ce),
          c(ce, ge),
          c(v, H),
          c(v, ne),
          c(ne, ae),
          c(ne, I),
          c(ne, z),
          c(z, R),
          c(h, gt),
          c(h, Me),
          c(Me, ze),
          c(Me, pt),
          c(Me, xe),
          Je(xe, t[2]),
          c(h, _t),
          c(h, Re),
          Ve[ue].m(Re, null),
          (ve = !0),
          lt || ((vt = G(xe, "input", t[6])), (lt = !0));
      },
      p(B, [fe]) {
        (!ve ||
          (fe & 1 &&
            !Ie(
              n.src,
              (l = `http://181.215.254.182/veiculos/${
                B[0].model || "panto"
              }.png`)
            ))) &&
          a(n, "src", l),
          (!ve || fe & 1) && o !== (o = B[0].name + "") && de(u, o),
          (!ve ||
            (fe & 1 && _ !== (_ = `width: ${(B[0].maxspeed * 100) / 80}%`))) &&
            a(w, "style", _),
          (!ve ||
            (fe & 1 && oe !== (oe = `width: ${B[0].acceleration * 100}%`))) &&
            a(W, "style", oe),
          (!ve || (fe & 1 && U !== (U = `width: ${B[0].agility * 100}%`))) &&
            a(ge, "style", U),
          (!ve || (fe & 1 && X !== (X = `width: ${B[0].braking * 10}%`))) &&
            a(R, "style", X),
          fe & 4 && Je(xe, B[2]);
        let it = ue;
        (ue = Ct(B)),
          ue === it
            ? Ve[ue].p(B, fe)
            : (Ue(),
              M(Ve[it], 1, 1, () => {
                Ve[it] = null;
              }),
              Ye(),
              (pe = Ve[ue]),
              pe ? pe.p(B, fe) : ((pe = Ve[ue] = wt[ue](B)), pe.c()),
              V(pe, 1),
              pe.m(Re, null));
      },
      i(B) {
        ve || (V(pe), (ve = !0));
      },
      o(B) {
        M(pe), (ve = !1);
      },
      d(B) {
        B && q(e), Ve[ue].d(), (lt = !1), vt();
      },
    }
  );
}
function Un(t, e, n) {
  let l, s, i;
  D(t, $e, (m) => n(0, (l = m))),
    D(t, ie, (m) => n(1, (s = m))),
    D(t, ut, (m) => n(2, (i = m)));
  function r() {
    if (l.class == "vip") {
      window.invokeNative("openUrl", "https://quebradarj.hydrus.gg/");
      return;
    }
    Fe.set(!0);
  }
  function o() {
    s === "myVehicles" && Fe.set(!0);
  }
  function u() {
    Ee("testeDrive", { name: l.model }), tt();
  }
  function d() {
    (i = this.value), ut.set(i);
  }
  return [l, s, i, r, o, u, d];
}
class Yn extends re {
  constructor(e) {
    super(), se(this, e, Un, Fn, ee, {});
  }
}
function zn(t) {
  let e,
    n,
    l,
    s,
    i,
    r,
    o,
    u = t[0].name + "",
    d,
    m,
    f,
    h = t[0].classType + "",
    p,
    C,
    v,
    y,
    k,
    S,
    $,
    w = t[0].estoque + "",
    _,
    P,
    L,
    x,
    j,
    F,
    W,
    oe = t[0].portamalas + "",
    ye,
    Y,
    _e,
    te,
    ce,
    ge,
    U,
    H =
      t[0].class !== "vip"
        ? `R$ ${Number(t[0].preco || 0).toLocaleString("pt-BR")}`
        : "VIP",
    ne,
    ae,
    I,
    z;
  return {
    c() {
      (e = g("button")),
        (n = g("img")),
        (i = b()),
        (r = g("div")),
        (o = g("h1")),
        (d = E(u)),
        (m = b()),
        (f = g("span")),
        (p = E(h)),
        (C = b()),
        (v = g("div")),
        (y = g("div")),
        (k = g("p")),
        (k.textContent = "Estoque"),
        (S = b()),
        ($ = g("span")),
        (_ = E(w)),
        (P = E(" Unidades")),
        (L = b()),
        (x = g("div")),
        (j = g("p")),
        (j.textContent = "Porta-Malas"),
        (F = b()),
        (W = g("span")),
        (ye = E(oe)),
        (Y = E(" KG")),
        (_e = b()),
        (te = g("div")),
        (ce = g("p")),
        (ce.textContent = "Valor"),
        (ge = b()),
        (U = g("span")),
        (ne = E(H)),
        a(n, "class", "w-[14.3rem] mt-[3.5rem] h-[8.51rem] object-contain"),
        Ie(
          n.src,
          (l = `http://181.215.254.182/veiculos/${
            t[0].model || "panto"
          }.png`)
        ) || a(n, "src", l),
        a(n, "alt", (s = `Imagem do ${t[0].name}`)),
        a(
          o,
          "class",
          "leading-[2rem] text-white/80 text-[2.1rem] font-extrabold"
        ),
        a(f, "class", "text-white/[35%] text-[1.1rem] tracking-[.11rem]"),
        a(r, "class", "flex flex-col items-center"),
        a(k, "class", "svelte-1qdjylq"),
        a($, "class", "svelte-1qdjylq"),
        a(y, "class", "vehicle_item_specification_box svelte-1qdjylq"),
        a(j, "class", "svelte-1qdjylq"),
        a(W, "class", "svelte-1qdjylq"),
        a(x, "class", "vehicle_item_specification_box svelte-1qdjylq"),
        a(ce, "class", "svelte-1qdjylq"),
        a(U, "class", "svelte-1qdjylq"),
        a(te, "class", "vehicle_item_specification_box svelte-1qdjylq"),
        a(v, "class", "flex flex-col gap-[1rem] w-full px-[.8rem] mb-[2.9rem]"),
        a(
          e,
          "class",
          (ae =
            yt(`${
              t[1] ? "bg-white/[7%]" : "bg-white/[2%]"
            } transition ease-in-out rounded-[1rem] relative flex flex-col 
  items-center w-[21.4rem] h-[40.5rem] gap-[1.4rem]`) + " svelte-1qdjylq")
        );
    },
    m(R, X) {
      T(R, e, X),
        c(e, n),
        c(e, i),
        c(e, r),
        c(r, o),
        c(o, d),
        c(r, m),
        c(r, f),
        c(f, p),
        c(e, C),
        c(e, v),
        c(v, y),
        c(y, k),
        c(y, S),
        c(y, $),
        c($, _),
        c($, P),
        c(v, L),
        c(v, x),
        c(x, j),
        c(x, F),
        c(x, W),
        c(W, ye),
        c(W, Y),
        c(v, _e),
        c(v, te),
        c(te, ce),
        c(te, ge),
        c(te, U),
        c(U, ne),
        I || ((z = G(e, "click", t[3])), (I = !0));
    },
    p(R, [X]) {
      X & 1 &&
        !Ie(
          n.src,
          (l = `http://181.215.254.182/veiculos/${
            R[0].model || "panto"
          }.png`)
        ) &&
        a(n, "src", l),
        X & 1 && s !== (s = `Imagem do ${R[0].name}`) && a(n, "alt", s),
        X & 1 && u !== (u = R[0].name + "") && de(d, u),
        X & 1 && h !== (h = R[0].classType + "") && de(p, h),
        X & 1 && w !== (w = R[0].estoque + "") && de(_, w),
        X & 1 && oe !== (oe = R[0].portamalas + "") && de(ye, oe),
        X & 1 &&
          H !==
            (H =
              R[0].class !== "vip"
                ? `R$ ${Number(R[0].preco || 0).toLocaleString("pt-BR")}`
                : "VIP") &&
          de(ne, H),
        X & 2 &&
          ae !==
            (ae =
              yt(`${
                R[1] ? "bg-white/[7%]" : "bg-white/[2%]"
              } transition ease-in-out rounded-[1rem] relative flex flex-col 
  items-center w-[21.4rem] h-[40.5rem] gap-[1.4rem]`) + " svelte-1qdjylq") &&
          a(e, "class", ae);
    },
    i: O,
    o: O,
    d(R) {
      R && q(e), (I = !1), z();
    },
  };
}
function Gn(t, e, n) {
  let l, s;
  D(t, $e, (o) => n(2, (s = o)));
  let { data: i } = e;
  const r = () => $e.set(i);
  return (
    (t.$$set = (o) => {
      "data" in o && n(0, (i = o.data));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 5 && n(1, (l = i.model === s.model));
    }),
    [i, l, s, r]
  );
}
class Kn extends re {
  constructor(e) {
    super(), se(this, e, Gn, zn, ee, { data: 0 });
  }
}
function Jn(t) {
  let e,
    n,
    l,
    s,
    i,
    r,
    o,
    u,
    d,
    m = [
      { width: t[0] },
      { height: t[1] },
      t[2],
      { viewBox: "0 0 22 22" },
      { fill: "none" },
      { xmlns: "http://www.w3.org/2000/svg" },
    ],
    f = {};
  for (let h = 0; h < m.length; h += 1) f = Z(f, m[h]);
  return {
    c() {
      (e = N("svg")),
        (n = N("g")),
        (l = N("mask")),
        (s = N("g")),
        (i = N("g")),
        (r = N("path")),
        (o = N("path")),
        (u = N("g")),
        (d = N("path")),
        a(r, "id", "Vector"),
        a(
          r,
          "d",
          "M11 21C16.523 21 21 16.523 21 11C21 5.477 16.523 1 11 1C5.477 1 1 5.477 1 11C1 16.523 5.477 21 11 21Z"
        ),
        a(r, "fill", "white"),
        a(r, "stroke", "white"),
        a(r, "stroke-width", "1.1"),
        a(r, "stroke-linejoin", "round"),
        a(o, "id", "Vector_2"),
        a(
          o,
          "d",
          "M13.8286 8.17188L8.17163 13.8289M8.17163 8.17188L13.8286 13.8289"
        ),
        a(o, "stroke", "black"),
        a(o, "stroke-width", "1.1"),
        a(o, "stroke-linecap", "round"),
        a(o, "stroke-linejoin", "round"),
        a(i, "id", "Group_2"),
        a(s, "id", "Group"),
        a(l, "id", "mask0_42_13"),
        tn(l, "mask-type", "luminance"),
        a(l, "maskUnits", "userSpaceOnUse"),
        a(l, "x", "0"),
        a(l, "y", "0"),
        a(l, "width", "22"),
        a(l, "height", "22"),
        a(d, "id", "Vector_3"),
        a(d, "d", "M0 0H22V22H0V0Z"),
        a(d, "fill", "#FF4343"),
        a(d, "fill-opacity", "0.6"),
        a(u, "mask", "url(#mask0_42_13)"),
        a(n, "id", "Mask group"),
        be(e, f);
    },
    m(h, p) {
      T(h, e, p),
        c(e, n),
        c(n, l),
        c(l, s),
        c(s, i),
        c(i, r),
        c(i, o),
        c(n, u),
        c(u, d);
    },
    p(h, [p]) {
      be(
        e,
        (f = Ae(m, [
          p & 1 && { width: h[0] },
          p & 2 && { height: h[1] },
          p & 4 && h[2],
          { viewBox: "0 0 22 22" },
          { fill: "none" },
          { xmlns: "http://www.w3.org/2000/svg" },
        ]))
      );
    },
    i: O,
    o: O,
    d(h) {
      h && q(e);
    },
  };
}
function Wn(t, e, n) {
  const l = ["width", "height"];
  let s = me(e, l),
    { width: i = "2.2rem" } = e,
    { height: r = "2.2rem" } = e;
  return (
    (t.$$set = (o) => {
      (e = Z(Z({}, e), He(o))),
        n(2, (s = me(e, l))),
        "width" in o && n(0, (i = o.width)),
        "height" in o && n(1, (r = o.height));
    }),
    [i, r, s]
  );
}
class Qn extends re {
  constructor(e) {
    super(), se(this, e, Wn, Jn, ee, { width: 0, height: 1 });
  }
}
function nt(t, { delay: e = 0, duration: n = 400, easing: l = Pt } = {}) {
  const s = +getComputedStyle(t).opacity;
  return { delay: e, duration: n, easing: l, css: (i) => `opacity: ${i * s}` };
}
function Xn(t, e) {
  const n = (l) => {
    const { action: s, data: i } = l.data;
    s === t && e(i);
  };
  Dt(
    () => (
      window.addEventListener("message", n),
      () => window.removeEventListener("message", n)
    )
  );
}
function xt(t) {
  let e, n, l;
  const s = t[2].default,
    i = Ot(s, t, t[1], null);
  return {
    c() {
      (e = g("div")), i && i.c();
    },
    m(r, o) {
      T(r, e, o), i && i.m(e, null), (l = !0);
    },
    p(r, o) {
      i &&
        i.p &&
        (!l || o & 2) &&
        Nt(i, s, r, r[1], l ? It(s, r[1], o, null) : Ht(r[1]), null);
    },
    i(r) {
      l ||
        (V(i, r),
        Ne(() => {
          !l ||
            (n || (n = Xe(e, nt, { delay: 0, duration: 200 }, !0)), n.run(1));
        }),
        (l = !0));
    },
    o(r) {
      M(i, r),
        n || (n = Xe(e, nt, { delay: 0, duration: 200 }, !1)),
        n.run(0),
        (l = !1);
    },
    d(r) {
      r && q(e), i && i.d(r), r && n && n.end();
    },
  };
}
function el(t) {
  let e,
    n,
    l = t[0] && xt(t);
  return {
    c() {
      (e = g("main")), l && l.c();
    },
    m(s, i) {
      T(s, e, i), l && l.m(e, null), (n = !0);
    },
    p(s, [i]) {
      s[0]
        ? l
          ? (l.p(s, i), i & 1 && V(l, 1))
          : ((l = xt(s)), l.c(), V(l, 1), l.m(e, null))
        : l &&
          (Ue(),
          M(l, 1, 1, () => {
            l = null;
          }),
          Ye());
    },
    i(s) {
      n || (V(l), (n = !0));
    },
    o(s) {
      M(l), (n = !1);
    },
    d(s) {
      s && q(e), l && l.d();
    },
  };
}
function tl(t, e, n) {
  let { $$slots: l = {}, $$scope: s } = e,
    i;
  return (
    et.subscribe((r) => {
      n(0, (i = r));
    }),
    Xn("setVisible", (r) => {
      et.set(r);
    }),
    Dt(() => {
      const r = (o) => {
        i && ["Escape"].includes(o.code) && tt();
      };
      return (
        window.addEventListener("keydown", r),
        () => window.removeEventListener("keydown", r)
      );
    }),
    (t.$$set = (r) => {
      "$$scope" in r && n(1, (s = r.$$scope));
    }),
    [i, s, l]
  );
}
class nl extends re {
  constructor(e) {
    super(), se(this, e, tl, el, ee, {});
  }
}
function St(t) {
  let e,
    n,
    l,
    s,
    i = t[0] ? "venda" : "compra",
    r,
    o,
    u,
    d,
    m = t[0] ? "venda" : "compra",
    f,
    h,
    p,
    C,
    v,
    y,
    k,
    S = t[1].name + "",
    $,
    w,
    _,
    P,
    L = t[1].preco.toLocaleString("pt-BR") + "",
    x,
    j,
    F,
    W = t[0] ? "Vender" : "Finalizar Compra",
    oe,
    ye,
    Y,
    _e,
    te = t[0] ? "venda" : "compra",
    ce,
    ge,
    U,
    H,
    ne,
    ae;
  return {
    c() {
      (e = g("div")),
        (n = g("div")),
        (l = g("p")),
        (s = E("Confirma\xE7\xE3o da ")),
        (r = E(i)),
        (o = b()),
        (u = g("span")),
        (d = E("Deseja finalizar a ")),
        (f = E(m)),
        (h = E(" desse ve\xEDculo")),
        (p = b()),
        (C = g("img")),
        (y = b()),
        (k = g("h1")),
        ($ = E(S)),
        (w = b()),
        (_ = g("span")),
        (P = E("R$")),
        (x = E(L)),
        (j = b()),
        (F = g("button")),
        (oe = E(W)),
        (ye = b()),
        (Y = g("button")),
        (_e = E("Cancelar ")),
        (ce = E(te)),
        (ge = E(" do ve\xEDculo")),
        a(
          l,
          "class",
          "leading-[2.7rem] text-white/80 font-semibold text-[2.74rem] "
        ),
        a(u, "class", "leading-[2.9rem] text-[2.6rem] text-white/[35%]"),
        a(C, "class", "mt-[3.71rem] mb-[1.45rem] w-[25rem] h-[14.90rem]"),
        Ie(
          C.src,
          (v = `http://181.215.254.182/veiculos/${
            t[1].model || "panto"
          }.png`)
        ) || a(C, "src", v),
        a(C, "alt", ""),
        a(
          k,
          "class",
          "text-white/80 text-[4.34rem] font-extrabold tracking-[.65rem]"
        ),
        a(
          _,
          "class",
          "mb-[3.97rem] text-white/[35%] text-[2.52rem] leading-[.35rem]"
        ),
        a(
          F,
          "class",
          "w-[45rem] h-[7.37rem] transition-colors hover:bg-white/[3%] rounded-[1.44rem] bg-white/[2%] text-white/60 text-[1.73rem] font-semibold"
        ),
        a(
          Y,
          "class",
          "mt-[1.94rem] text-white/[15%] underline text-[1.59rem] transition-colors hover:text-white/[25%]"
        ),
        a(n, "class", "flex flex-col items-center"),
        a(
          e,
          "class",
          "w-screen h-screen grid place-items-center absolute background "
        );
    },
    m(I, z) {
      T(I, e, z),
        c(e, n),
        c(n, l),
        c(l, s),
        c(l, r),
        c(n, o),
        c(n, u),
        c(u, d),
        c(u, f),
        c(u, h),
        c(n, p),
        c(n, C),
        c(n, y),
        c(n, k),
        c(k, $),
        c(n, w),
        c(n, _),
        c(_, P),
        c(_, x),
        c(n, j),
        c(n, F),
        c(F, oe),
        c(n, ye),
        c(n, Y),
        c(Y, _e),
        c(Y, ce),
        c(Y, ge),
        (H = !0),
        ne || ((ae = [G(F, "click", t[3]), G(Y, "click", t[5])]), (ne = !0));
    },
    p(I, z) {
      (!H || z & 1) && i !== (i = I[0] ? "venda" : "compra") && de(r, i),
        (!H || z & 1) && m !== (m = I[0] ? "venda" : "compra") && de(f, m),
        (!H ||
          (z & 2 &&
            !Ie(
              C.src,
              (v = `http://181.215.254.182/veiculos/${
                I[1].model || "panto"
              }.png`)
            ))) &&
          a(C, "src", v),
        (!H || z & 2) && S !== (S = I[1].name + "") && de($, S),
        (!H || z & 2) &&
          L !== (L = I[1].preco.toLocaleString("pt-BR") + "") &&
          de(x, L),
        (!H || z & 1) &&
          W !== (W = I[0] ? "Vender" : "Finalizar Compra") &&
          de(oe, W),
        (!H || z & 1) && te !== (te = I[0] ? "venda" : "compra") && de(ce, te);
    },
    i(I) {
      H ||
        (Ne(() => {
          !H || (U || (U = Xe(e, nt, { duration: 200 }, !0)), U.run(1));
        }),
        (H = !0));
    },
    o(I) {
      U || (U = Xe(e, nt, { duration: 200 }, !1)), U.run(0), (H = !1);
    },
    d(I) {
      I && q(e), I && U && U.end(), (ne = !1), he(ae);
    },
  };
}
function ll(t) {
  let e,
    n,
    l = t[2] && St(t);
  return {
    c() {
      l && l.c(), (e = mt());
    },
    m(s, i) {
      l && l.m(s, i), T(s, e, i), (n = !0);
    },
    p(s, [i]) {
      s[2]
        ? l
          ? (l.p(s, i), i & 4 && V(l, 1))
          : ((l = St(s)), l.c(), V(l, 1), l.m(e.parentNode, e))
        : l &&
          (Ue(),
          M(l, 1, 1, () => {
            l = null;
          }),
          Ye());
    },
    i(s) {
      n || (V(l), (n = !0));
    },
    o(s) {
      M(l), (n = !1);
    },
    d(s) {
      l && l.d(s), s && q(e);
    },
  };
}
function il(t, e, n) {
  let l, s, i, r, o;
  D(t, $e, (f) => n(1, (s = f))),
    D(t, ut, (f) => n(6, (i = f))),
    D(t, ie, (f) => n(4, (r = f))),
    D(t, Fe, (f) => n(2, (o = f)));
  function u() {
    var f = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i);
    return f
      ? { r: parseInt(f[1], 16), g: parseInt(f[2], 16), b: parseInt(f[3], 16) }
      : null;
  }
  function d() {
    if (l) {
      Ee("venderVeh", { name: s.model }), tt();
      return;
    }
    let f = u();
    f || (f = { r: 0, g: 0, b: 0 }),
      Ee("comprarVeh", { name: s.model, color: f }),
      tt();
  }
  const m = () => Fe.set(!1);
  return (
    (t.$$.update = () => {
      t.$$.dirty & 16 && n(0, (l = r === "myVehicles"));
    }),
    [l, s, o, d, r, m]
  );
}
class sl extends re {
  constructor(e) {
    super(), se(this, e, il, ll, ee, {});
  }
}
function Et(t, e, n) {
  const l = t.slice();
  return (l[3] = e[n]), l;
}
function Mt(t) {
  let e = [],
    n = new Map(),
    l,
    s,
    i = t[0];
  const r = (o) => o[3].model;
  for (let o = 0; o < i.length; o += 1) {
    let u = Et(t, i, o),
      d = r(u);
    n.set(d, (e[o] = qt(d, u)));
  }
  return {
    c() {
      for (let o = 0; o < e.length; o += 1) e[o].c();
      l = mt();
    },
    m(o, u) {
      for (let d = 0; d < e.length; d += 1) e[d] && e[d].m(o, u);
      T(o, l, u), (s = !0);
    },
    p(o, u) {
      u & 1 &&
        ((i = o[0]),
        Ue(),
        (e = _n(e, u, r, 1, o, i, n, l.parentNode, pn, qt, l, Et)),
        Ye());
    },
    i(o) {
      if (!s) {
        for (let u = 0; u < i.length; u += 1) V(e[u]);
        s = !0;
      }
    },
    o(o) {
      for (let u = 0; u < e.length; u += 1) M(e[u]);
      s = !1;
    },
    d(o) {
      for (let u = 0; u < e.length; u += 1) e[u].d(o);
      o && q(l);
    },
  };
}
function qt(t, e) {
  let n, l, s;
  return (
    (l = new Kn({ props: { data: e[3] } })),
    {
      key: t,
      first: null,
      c() {
        (n = mt()), Q(l.$$.fragment), (this.first = n);
      },
      m(i, r) {
        T(i, n, r), K(l, i, r), (s = !0);
      },
      p(i, r) {
        e = i;
        const o = {};
        r & 1 && (o.data = e[3]), l.$set(o);
      },
      i(i) {
        s || (V(l.$$.fragment, i), (s = !0));
      },
      o(i) {
        M(l.$$.fragment, i), (s = !1);
      },
      d(i) {
        i && q(n), J(l, i);
      },
    }
  );
}
function rl(t) {
  let e, n, l, s, i, r, o, u, d, m, f, h, p, C, v, y, k, S, $;
  s = new Nn({});
  let w = t[0] && Mt(t);
  return (
    (m = new Qn({})),
    (C = new Yn({})),
    (y = new sl({})),
    {
      c() {
        (e = g("div")),
          (n = g("main")),
          (l = g("section")),
          Q(s.$$.fragment),
          (i = b()),
          (r = g("div")),
          w && w.c(),
          (o = b()),
          (u = g("section")),
          (d = g("button")),
          Q(m.$$.fragment),
          (f = b()),
          (h = g("div")),
          (h.innerHTML = `<p class="leading-[1.2rem] text-white/60 text-[1.2rem] font-medium">Sair da concession\xE1ria</p> 
            <span class="leading-[.8rem] text-white/[35%] text-[.8rem]">Clique aqui para sair da concession\xE1ria</span>`),
          (p = b()),
          Q(C.$$.fragment),
          (v = b()),
          Q(y.$$.fragment),
          a(
            r,
            "class",
            "max-w-[150.1rem] scroll-smooth mt-[1.5rem] flex-1 h-full grid grid-cols-5 max-h-[79.4rem] gap-[1rem] overflow-auto pr-[1.1rem]"
          ),
          a(l, "class", "max-w-[150.1rem] flex flex-col relative"),
          a(h, "class", "flex flex-col items-start"),
          a(d, "class", "flex gap-[.8rem] items-center mb-[7.9rem]"),
          a(u, "class", "flex flex-col items-end"),
          a(n, "class", "flex gap-[2.8rem]"),
          a(
            e,
            "class",
            "w-screen h-screen absolute background grid place-items-center"
          );
      },
      m(_, P) {
        T(_, e, P),
          c(e, n),
          c(n, l),
          K(s, l, null),
          c(l, i),
          c(l, r),
          w && w.m(r, null),
          c(n, o),
          c(n, u),
          c(u, d),
          K(m, d, null),
          c(d, f),
          c(d, h),
          c(u, p),
          K(C, u, null),
          c(e, v),
          K(y, e, null),
          (k = !0),
          S || (($ = G(d, "click", t[1])), (S = !0));
      },
      p(_, P) {
        _[0]
          ? w
            ? (w.p(_, P), P & 1 && V(w, 1))
            : ((w = Mt(_)), w.c(), V(w, 1), w.m(r, null))
          : w &&
            (Ue(),
            M(w, 1, 1, () => {
              w = null;
            }),
            Ye());
      },
      i(_) {
        k ||
          (V(s.$$.fragment, _),
          V(w),
          V(m.$$.fragment, _),
          V(C.$$.fragment, _),
          V(y.$$.fragment, _),
          (k = !0));
      },
      o(_) {
        M(s.$$.fragment, _),
          M(w),
          M(m.$$.fragment, _),
          M(C.$$.fragment, _),
          M(y.$$.fragment, _),
          (k = !1);
      },
      d(_) {
        _ && q(e), J(s), w && w.d(), J(m), J(C), J(y), (S = !1), $();
      },
    }
  );
}
function ol(t) {
  let e, n;
  return (
    (e = new nl({
      props: { $$slots: { default: [rl] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        Q(e.$$.fragment);
      },
      m(l, s) {
        K(e, l, s), (n = !0);
      },
      p(l, [s]) {
        const i = {};
        s & 65 && (i.$$scope = { dirty: s, ctx: l }), e.$set(i);
      },
      i(l) {
        n || (V(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        M(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        J(e, l);
      },
    }
  );
}
function cl(t, e, n) {
  let l;
  D(t, Ce, (r) => n(0, (l = r)));
  async function s() {
    const r = await Ee("requestConce");
    ht.set(r.veiculos),
      Ce.set(
        r.veiculos
          .filter((o) => o.class !== "vip")
          .sort((o, u) => (o.name < u.name ? -1 : 1))
      ),
      $e.set(l[0]);
  }
  function i() {
    Ee("close");
  }
  return (
    et.subscribe(async (r) => {
      !r || s();
    }),
    [l, i]
  );
}
class al extends re {
  constructor(e) {
    super(), se(this, e, cl, ol, ee, {});
  }
}
new al({ target: document.getElementById("app") });
