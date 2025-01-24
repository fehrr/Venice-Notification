function gm(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function cs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var aa = {},
  pd = { exports: {} },
  ut = {},
  md = { exports: {} },
  te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ro = Symbol.for("react.element"),
  vm = Symbol.for("react.portal"),
  ym = Symbol.for("react.fragment"),
  wm = Symbol.for("react.strict_mode"),
  Sm = Symbol.for("react.profiler"),
  xm = Symbol.for("react.provider"),
  km = Symbol.for("react.context"),
  Cm = Symbol.for("react.forward_ref"),
  Em = Symbol.for("react.suspense"),
  Am = Symbol.for("react.memo"),
  Rm = Symbol.for("react.lazy"),
  Au = Symbol.iterator;
function Nm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Au && e[Au]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var hd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  gd = Object.assign,
  vd = {};
function Rr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = vd),
    (this.updater = n || hd);
}
Rr.prototype.isReactComponent = {};
Rr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Rr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function yd() {}
yd.prototype = Rr.prototype;
function ds(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = vd),
    (this.updater = n || hd);
}
var fs = (ds.prototype = new yd());
fs.constructor = ds;
gd(fs, Rr.prototype);
fs.isPureReactComponent = !0;
var Ru = Array.isArray,
  wd = Object.prototype.hasOwnProperty,
  ps = { current: null },
  Sd = { key: !0, ref: !0, __self: !0, __source: !0 };
function xd(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      wd.call(t, r) && !Sd.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Ro,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: ps.current,
  };
}
function bm(e, t) {
  return {
    $$typeof: Ro,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ms(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ro;
}
function Pm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Nu = /\/+/g;
function Ll(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Pm("" + e.key)
    : t.toString(36);
}
function ii(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ro:
          case vm:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + Ll(l, 0) : r),
      Ru(o)
        ? ((n = ""),
          e != null && (n = e.replace(Nu, "$&/") + "/"),
          ii(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (ms(o) &&
            (o = bm(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Nu, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), Ru(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var s = r + Ll(i, a);
      l += ii(i, t, n, s, o);
    }
  else if (((s = Nm(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Ll(i, a++)), (l += ii(i, t, n, s, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function Fo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    ii(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function _m(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Xe = { current: null },
  li = { transition: null },
  Lm = {
    ReactCurrentDispatcher: Xe,
    ReactCurrentBatchConfig: li,
    ReactCurrentOwner: ps,
  };
te.Children = {
  map: Fo,
  forEach: function (e, t, n) {
    Fo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Fo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Fo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ms(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
te.Component = Rr;
te.Fragment = ym;
te.Profiler = Sm;
te.PureComponent = ds;
te.StrictMode = wm;
te.Suspense = Em;
te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lm;
te.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = gd({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = ps.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      wd.call(t, s) &&
        !Sd.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Ro, type: e.type, key: o, ref: i, props: r, _owner: l };
};
te.createContext = function (e) {
  return (
    (e = {
      $$typeof: km,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: xm, _context: e }),
    (e.Consumer = e)
  );
};
te.createElement = xd;
te.createFactory = function (e) {
  var t = xd.bind(null, e);
  return (t.type = e), t;
};
te.createRef = function () {
  return { current: null };
};
te.forwardRef = function (e) {
  return { $$typeof: Cm, render: e };
};
te.isValidElement = ms;
te.lazy = function (e) {
  return { $$typeof: Rm, _payload: { _status: -1, _result: e }, _init: _m };
};
te.memo = function (e, t) {
  return { $$typeof: Am, type: e, compare: t === void 0 ? null : t };
};
te.startTransition = function (e) {
  var t = li.transition;
  li.transition = {};
  try {
    e();
  } finally {
    li.transition = t;
  }
};
te.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
te.useCallback = function (e, t) {
  return Xe.current.useCallback(e, t);
};
te.useContext = function (e) {
  return Xe.current.useContext(e);
};
te.useDebugValue = function () {};
te.useDeferredValue = function (e) {
  return Xe.current.useDeferredValue(e);
};
te.useEffect = function (e, t) {
  return Xe.current.useEffect(e, t);
};
te.useId = function () {
  return Xe.current.useId();
};
te.useImperativeHandle = function (e, t, n) {
  return Xe.current.useImperativeHandle(e, t, n);
};
te.useInsertionEffect = function (e, t) {
  return Xe.current.useInsertionEffect(e, t);
};
te.useLayoutEffect = function (e, t) {
  return Xe.current.useLayoutEffect(e, t);
};
te.useMemo = function (e, t) {
  return Xe.current.useMemo(e, t);
};
te.useReducer = function (e, t, n) {
  return Xe.current.useReducer(e, t, n);
};
te.useRef = function (e) {
  return Xe.current.useRef(e);
};
te.useState = function (e) {
  return Xe.current.useState(e);
};
te.useSyncExternalStore = function (e, t, n) {
  return Xe.current.useSyncExternalStore(e, t, n);
};
te.useTransition = function () {
  return Xe.current.useTransition();
};
te.version = "18.2.0";
md.exports = te;
var x = md.exports;
const ht = cs(x),
  Om = gm({ __proto__: null, default: ht }, [x]);
var kd = { exports: {} },
  Cd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, U) {
    var B = L.length;
    L.push(U);
    e: for (; 0 < B; ) {
      var G = (B - 1) >>> 1,
        _ = L[G];
      if (0 < o(_, U)) (L[G] = U), (L[B] = _), (B = G);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var U = L[0],
      B = L.pop();
    if (B !== U) {
      L[0] = B;
      e: for (var G = 0, _ = L.length, I = _ >>> 1; G < I; ) {
        var z = 2 * (G + 1) - 1,
          W = L[z],
          k = z + 1,
          K = L[k];
        if (0 > o(W, B))
          k < _ && 0 > o(K, W)
            ? ((L[G] = K), (L[k] = B), (G = k))
            : ((L[G] = W), (L[z] = B), (G = z));
        else if (k < _ && 0 > o(K, B)) (L[G] = K), (L[k] = B), (G = k);
        else break e;
      }
    }
    return U;
  }
  function o(L, U) {
    var B = L.sortIndex - U.sortIndex;
    return B !== 0 ? B : L.id - U.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var s = [],
    u = [],
    p = 1,
    m = null,
    h = 3,
    v = !1,
    g = !1,
    w = !1,
    A = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(L) {
    for (var U = n(u); U !== null; ) {
      if (U.callback === null) r(u);
      else if (U.startTime <= L)
        r(u), (U.sortIndex = U.expirationTime), t(s, U);
      else break;
      U = n(u);
    }
  }
  function y(L) {
    if (((w = !1), d(L), !g))
      if (n(s) !== null) (g = !0), he(C);
      else {
        var U = n(u);
        U !== null && ae(y, U.startTime - L);
      }
  }
  function C(L, U) {
    (g = !1), w && ((w = !1), f(b), (b = -1)), (v = !0);
    var B = h;
    try {
      for (
        d(U), m = n(s);
        m !== null && (!(m.expirationTime > U) || (L && !O()));

      ) {
        var G = m.callback;
        if (typeof G == "function") {
          (m.callback = null), (h = m.priorityLevel);
          var _ = G(m.expirationTime <= U);
          (U = e.unstable_now()),
            typeof _ == "function" ? (m.callback = _) : m === n(s) && r(s),
            d(U);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var I = !0;
      else {
        var z = n(u);
        z !== null && ae(y, z.startTime - U), (I = !1);
      }
      return I;
    } finally {
      (m = null), (h = B), (v = !1);
    }
  }
  var E = !1,
    R = null,
    b = -1,
    j = 5,
    F = -1;
  function O() {
    return !(e.unstable_now() - F < j);
  }
  function H() {
    if (R !== null) {
      var L = e.unstable_now();
      F = L;
      var U = !0;
      try {
        U = R(!0, L);
      } finally {
        U ? oe() : ((E = !1), (R = null));
      }
    } else E = !1;
  }
  var oe;
  if (typeof c == "function")
    oe = function () {
      c(H);
    };
  else if (typeof MessageChannel < "u") {
    var Y = new MessageChannel(),
      Z = Y.port2;
    (Y.port1.onmessage = H),
      (oe = function () {
        Z.postMessage(null);
      });
  } else
    oe = function () {
      A(H, 0);
    };
  function he(L) {
    (R = L), E || ((E = !0), oe());
  }
  function ae(L, U) {
    b = A(function () {
      L(e.unstable_now());
    }, U);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || v || ((g = !0), he(C));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (j = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (L) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = h;
      }
      var B = h;
      h = U;
      try {
        return L();
      } finally {
        h = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, U) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var B = h;
      h = L;
      try {
        return U();
      } finally {
        h = B;
      }
    }),
    (e.unstable_scheduleCallback = function (L, U, B) {
      var G = e.unstable_now();
      switch (
        (typeof B == "object" && B !== null
          ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? G + B : G))
          : (B = G),
        L)
      ) {
        case 1:
          var _ = -1;
          break;
        case 2:
          _ = 250;
          break;
        case 5:
          _ = 1073741823;
          break;
        case 4:
          _ = 1e4;
          break;
        default:
          _ = 5e3;
      }
      return (
        (_ = B + _),
        (L = {
          id: p++,
          callback: U,
          priorityLevel: L,
          startTime: B,
          expirationTime: _,
          sortIndex: -1,
        }),
        B > G
          ? ((L.sortIndex = B),
            t(u, L),
            n(s) === null &&
              L === n(u) &&
              (w ? (f(b), (b = -1)) : (w = !0), ae(y, B - G)))
          : ((L.sortIndex = _), t(s, L), g || v || ((g = !0), he(C))),
        L
      );
    }),
    (e.unstable_shouldYield = O),
    (e.unstable_wrapCallback = function (L) {
      var U = h;
      return function () {
        var B = h;
        h = U;
        try {
          return L.apply(this, arguments);
        } finally {
          h = B;
        }
      };
    });
})(Cd);
kd.exports = Cd;
var Tm = kd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ed = x,
  st = Tm;
function P(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ad = new Set(),
  io = {};
function Wn(e, t) {
  gr(e, t), gr(e + "Capture", t);
}
function gr(e, t) {
  for (io[e] = t, e = 0; e < t.length; e++) Ad.add(t[e]);
}
var Qt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  sa = Object.prototype.hasOwnProperty,
  Im =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  bu = {},
  Pu = {};
function zm(e) {
  return sa.call(Pu, e)
    ? !0
    : sa.call(bu, e)
    ? !1
    : Im.test(e)
    ? (Pu[e] = !0)
    : ((bu[e] = !0), !1);
}
function Dm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Fm(e, t, n, r) {
  if (t === null || typeof t > "u" || Dm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Je(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var Ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ue[e] = new Je(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ue[t] = new Je(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ue[e] = new Je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ue[e] = new Je(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ue[e] = new Je(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ue[e] = new Je(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ue[e] = new Je(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ue[e] = new Je(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ue[e] = new Je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var hs = /[\-:]([a-z])/g;
function gs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(hs, gs);
    Ue[t] = new Je(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(hs, gs);
    Ue[t] = new Je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(hs, gs);
  Ue[t] = new Je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ue[e] = new Je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ue.xlinkHref = new Je(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ue[e] = new Je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function vs(e, t, n, r) {
  var o = Ue.hasOwnProperty(t) ? Ue[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Fm(t, n, o, r) && (n = null),
    r || o === null
      ? zm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Zt = Ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Mo = Symbol.for("react.element"),
  Xn = Symbol.for("react.portal"),
  Jn = Symbol.for("react.fragment"),
  ys = Symbol.for("react.strict_mode"),
  ua = Symbol.for("react.profiler"),
  Rd = Symbol.for("react.provider"),
  Nd = Symbol.for("react.context"),
  ws = Symbol.for("react.forward_ref"),
  ca = Symbol.for("react.suspense"),
  da = Symbol.for("react.suspense_list"),
  Ss = Symbol.for("react.memo"),
  rn = Symbol.for("react.lazy"),
  bd = Symbol.for("react.offscreen"),
  _u = Symbol.iterator;
function Dr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (_u && e[_u]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ee = Object.assign,
  Ol;
function Hr(e) {
  if (Ol === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ol = (t && t[1]) || "";
    }
  return (
    `
` +
    Ol +
    e
  );
}
var Tl = !1;
function Il(e, t) {
  if (!e || Tl) return "";
  Tl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          a = i.length - 1;
        1 <= l && 0 <= a && o[l] !== i[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (o[l] !== i[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || o[l] !== i[a])) {
                var s =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (Tl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Hr(e) : "";
}
function Mm(e) {
  switch (e.tag) {
    case 5:
      return Hr(e.type);
    case 16:
      return Hr("Lazy");
    case 13:
      return Hr("Suspense");
    case 19:
      return Hr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Il(e.type, !1)), e;
    case 11:
      return (e = Il(e.type.render, !1)), e;
    case 1:
      return (e = Il(e.type, !0)), e;
    default:
      return "";
  }
}
function fa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Jn:
      return "Fragment";
    case Xn:
      return "Portal";
    case ua:
      return "Profiler";
    case ys:
      return "StrictMode";
    case ca:
      return "Suspense";
    case da:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Nd:
        return (e.displayName || "Context") + ".Consumer";
      case Rd:
        return (e._context.displayName || "Context") + ".Provider";
      case ws:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ss:
        return (
          (t = e.displayName || null), t !== null ? t : fa(e.type) || "Memo"
        );
      case rn:
        (t = e._payload), (e = e._init);
        try {
          return fa(e(t));
        } catch {}
    }
  return null;
}
function $m(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return fa(t);
    case 8:
      return t === ys ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function xn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Pd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Um(e) {
  var t = Pd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function $o(e) {
  e._valueTracker || (e._valueTracker = Um(e));
}
function _d(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Pd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function yi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function pa(e, t) {
  var n = t.checked;
  return Ee({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Lu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = xn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ld(e, t) {
  (t = t.checked), t != null && vs(e, "checked", t, !1);
}
function ma(e, t) {
  Ld(e, t);
  var n = xn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ha(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ha(e, t.type, xn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ou(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ha(e, t, n) {
  (t !== "number" || yi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Wr = Array.isArray;
function ur(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + xn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ga(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return Ee({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Tu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92));
      if (Wr(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: xn(n) };
}
function Od(e, t) {
  var n = xn(t.value),
    r = xn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Iu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Td(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function va(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Td(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Uo,
  Id = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Uo = Uo || document.createElement("div"),
          Uo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Uo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function lo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Kr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  jm = ["Webkit", "ms", "Moz", "O"];
Object.keys(Kr).forEach(function (e) {
  jm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Kr[t] = Kr[e]);
  });
});
function zd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Kr.hasOwnProperty(e) && Kr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Dd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = zd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Bm = Ee(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ya(e, t) {
  if (t) {
    if (Bm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function wa(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Sa = null;
function xs(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var xa = null,
  cr = null,
  dr = null;
function zu(e) {
  if ((e = Po(e))) {
    if (typeof xa != "function") throw Error(P(280));
    var t = e.stateNode;
    t && ((t = tl(t)), xa(e.stateNode, e.type, t));
  }
}
function Fd(e) {
  cr ? (dr ? dr.push(e) : (dr = [e])) : (cr = e);
}
function Md() {
  if (cr) {
    var e = cr,
      t = dr;
    if (((dr = cr = null), zu(e), t)) for (e = 0; e < t.length; e++) zu(t[e]);
  }
}
function $d(e, t) {
  return e(t);
}
function Ud() {}
var zl = !1;
function jd(e, t, n) {
  if (zl) return e(t, n);
  zl = !0;
  try {
    return $d(e, t, n);
  } finally {
    (zl = !1), (cr !== null || dr !== null) && (Ud(), Md());
  }
}
function ao(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = tl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(P(231, t, typeof n));
  return n;
}
var ka = !1;
if (Qt)
  try {
    var Fr = {};
    Object.defineProperty(Fr, "passive", {
      get: function () {
        ka = !0;
      },
    }),
      window.addEventListener("test", Fr, Fr),
      window.removeEventListener("test", Fr, Fr);
  } catch {
    ka = !1;
  }
function Vm(e, t, n, r, o, i, l, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (p) {
    this.onError(p);
  }
}
var Xr = !1,
  wi = null,
  Si = !1,
  Ca = null,
  Hm = {
    onError: function (e) {
      (Xr = !0), (wi = e);
    },
  };
function Wm(e, t, n, r, o, i, l, a, s) {
  (Xr = !1), (wi = null), Vm.apply(Hm, arguments);
}
function Qm(e, t, n, r, o, i, l, a, s) {
  if ((Wm.apply(this, arguments), Xr)) {
    if (Xr) {
      var u = wi;
      (Xr = !1), (wi = null);
    } else throw Error(P(198));
    Si || ((Si = !0), (Ca = u));
  }
}
function Qn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Bd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Du(e) {
  if (Qn(e) !== e) throw Error(P(188));
}
function Ym(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Qn(e)), t === null)) throw Error(P(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Du(o), e;
        if (i === r) return Du(o), t;
        i = i.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, a = o.child; a; ) {
        if (a === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = i.child; a; ) {
          if (a === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function Vd(e) {
  return (e = Ym(e)), e !== null ? Hd(e) : null;
}
function Hd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Hd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Wd = st.unstable_scheduleCallback,
  Fu = st.unstable_cancelCallback,
  Gm = st.unstable_shouldYield,
  Km = st.unstable_requestPaint,
  Ne = st.unstable_now,
  Xm = st.unstable_getCurrentPriorityLevel,
  ks = st.unstable_ImmediatePriority,
  Qd = st.unstable_UserBlockingPriority,
  xi = st.unstable_NormalPriority,
  Jm = st.unstable_LowPriority,
  Yd = st.unstable_IdlePriority,
  Ji = null,
  It = null;
function Zm(e) {
  if (It && typeof It.onCommitFiberRoot == "function")
    try {
      It.onCommitFiberRoot(Ji, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Rt = Math.clz32 ? Math.clz32 : th,
  qm = Math.log,
  eh = Math.LN2;
function th(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((qm(e) / eh) | 0)) | 0;
}
var jo = 64,
  Bo = 4194304;
function Qr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ki(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~o;
    a !== 0 ? (r = Qr(a)) : ((i &= l), i !== 0 && (r = Qr(i)));
  } else (l = n & ~o), l !== 0 ? (r = Qr(l)) : i !== 0 && (r = Qr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Rt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function nh(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function rh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - Rt(i),
      a = 1 << l,
      s = o[l];
    s === -1
      ? (!(a & n) || a & r) && (o[l] = nh(a, t))
      : s <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Ea(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Gd() {
  var e = jo;
  return (jo <<= 1), !(jo & 4194240) && (jo = 64), e;
}
function Dl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function No(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Rt(t)),
    (e[t] = n);
}
function oh(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Rt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Cs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Rt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var se = 0;
function Kd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Xd,
  Es,
  Jd,
  Zd,
  qd,
  Aa = !1,
  Vo = [],
  dn = null,
  fn = null,
  pn = null,
  so = new Map(),
  uo = new Map(),
  ln = [],
  ih =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Mu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      dn = null;
      break;
    case "dragenter":
    case "dragleave":
      fn = null;
      break;
    case "mouseover":
    case "mouseout":
      pn = null;
      break;
    case "pointerover":
    case "pointerout":
      so.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      uo.delete(t.pointerId);
  }
}
function Mr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Po(t)), t !== null && Es(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function lh(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (dn = Mr(dn, e, t, n, r, o)), !0;
    case "dragenter":
      return (fn = Mr(fn, e, t, n, r, o)), !0;
    case "mouseover":
      return (pn = Mr(pn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return so.set(i, Mr(so.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), uo.set(i, Mr(uo.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function ef(e) {
  var t = Ln(e.target);
  if (t !== null) {
    var n = Qn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Bd(n)), t !== null)) {
          (e.blockedOn = t),
            qd(e.priority, function () {
              Jd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ai(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ra(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Sa = r), n.target.dispatchEvent(r), (Sa = null);
    } else return (t = Po(n)), t !== null && Es(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function $u(e, t, n) {
  ai(e) && n.delete(t);
}
function ah() {
  (Aa = !1),
    dn !== null && ai(dn) && (dn = null),
    fn !== null && ai(fn) && (fn = null),
    pn !== null && ai(pn) && (pn = null),
    so.forEach($u),
    uo.forEach($u);
}
function $r(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Aa ||
      ((Aa = !0),
      st.unstable_scheduleCallback(st.unstable_NormalPriority, ah)));
}
function co(e) {
  function t(o) {
    return $r(o, e);
  }
  if (0 < Vo.length) {
    $r(Vo[0], e);
    for (var n = 1; n < Vo.length; n++) {
      var r = Vo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    dn !== null && $r(dn, e),
      fn !== null && $r(fn, e),
      pn !== null && $r(pn, e),
      so.forEach(t),
      uo.forEach(t),
      n = 0;
    n < ln.length;
    n++
  )
    (r = ln[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ln.length && ((n = ln[0]), n.blockedOn === null); )
    ef(n), n.blockedOn === null && ln.shift();
}
var fr = Zt.ReactCurrentBatchConfig,
  Ci = !0;
function sh(e, t, n, r) {
  var o = se,
    i = fr.transition;
  fr.transition = null;
  try {
    (se = 1), As(e, t, n, r);
  } finally {
    (se = o), (fr.transition = i);
  }
}
function uh(e, t, n, r) {
  var o = se,
    i = fr.transition;
  fr.transition = null;
  try {
    (se = 4), As(e, t, n, r);
  } finally {
    (se = o), (fr.transition = i);
  }
}
function As(e, t, n, r) {
  if (Ci) {
    var o = Ra(e, t, n, r);
    if (o === null) Ql(e, t, r, Ei, n), Mu(e, r);
    else if (lh(o, e, t, n, r)) r.stopPropagation();
    else if ((Mu(e, r), t & 4 && -1 < ih.indexOf(e))) {
      for (; o !== null; ) {
        var i = Po(o);
        if (
          (i !== null && Xd(i),
          (i = Ra(e, t, n, r)),
          i === null && Ql(e, t, r, Ei, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Ql(e, t, r, null, n);
  }
}
var Ei = null;
function Ra(e, t, n, r) {
  if (((Ei = null), (e = xs(r)), (e = Ln(e)), e !== null))
    if (((t = Qn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Bd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ei = e), null;
}
function tf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Xm()) {
        case ks:
          return 1;
        case Qd:
          return 4;
        case xi:
        case Jm:
          return 16;
        case Yd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var sn = null,
  Rs = null,
  si = null;
function nf() {
  if (si) return si;
  var e,
    t = Rs,
    n = t.length,
    r,
    o = "value" in sn ? sn.value : sn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (si = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ui(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ho() {
  return !0;
}
function Uu() {
  return !1;
}
function ct(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ho
        : Uu),
      (this.isPropagationStopped = Uu),
      this
    );
  }
  return (
    Ee(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ho));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ho));
      },
      persist: function () {},
      isPersistent: Ho,
    }),
    t
  );
}
var Nr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ns = ct(Nr),
  bo = Ee({}, Nr, { view: 0, detail: 0 }),
  ch = ct(bo),
  Fl,
  Ml,
  Ur,
  Zi = Ee({}, bo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: bs,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ur &&
            (Ur && e.type === "mousemove"
              ? ((Fl = e.screenX - Ur.screenX), (Ml = e.screenY - Ur.screenY))
              : (Ml = Fl = 0),
            (Ur = e)),
          Fl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ml;
    },
  }),
  ju = ct(Zi),
  dh = Ee({}, Zi, { dataTransfer: 0 }),
  fh = ct(dh),
  ph = Ee({}, bo, { relatedTarget: 0 }),
  $l = ct(ph),
  mh = Ee({}, Nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hh = ct(mh),
  gh = Ee({}, Nr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  vh = ct(gh),
  yh = Ee({}, Nr, { data: 0 }),
  Bu = ct(yh),
  wh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Sh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  xh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function kh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = xh[e]) ? !!t[e] : !1;
}
function bs() {
  return kh;
}
var Ch = Ee({}, bo, {
    key: function (e) {
      if (e.key) {
        var t = wh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ui(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Sh[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: bs,
    charCode: function (e) {
      return e.type === "keypress" ? ui(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ui(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Eh = ct(Ch),
  Ah = Ee({}, Zi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Vu = ct(Ah),
  Rh = Ee({}, bo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: bs,
  }),
  Nh = ct(Rh),
  bh = Ee({}, Nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ph = ct(bh),
  _h = Ee({}, Zi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Lh = ct(_h),
  Oh = [9, 13, 27, 32],
  Ps = Qt && "CompositionEvent" in window,
  Jr = null;
Qt && "documentMode" in document && (Jr = document.documentMode);
var Th = Qt && "TextEvent" in window && !Jr,
  rf = Qt && (!Ps || (Jr && 8 < Jr && 11 >= Jr)),
  Hu = String.fromCharCode(32),
  Wu = !1;
function of(e, t) {
  switch (e) {
    case "keyup":
      return Oh.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function lf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Zn = !1;
function Ih(e, t) {
  switch (e) {
    case "compositionend":
      return lf(t);
    case "keypress":
      return t.which !== 32 ? null : ((Wu = !0), Hu);
    case "textInput":
      return (e = t.data), e === Hu && Wu ? null : e;
    default:
      return null;
  }
}
function zh(e, t) {
  if (Zn)
    return e === "compositionend" || (!Ps && of(e, t))
      ? ((e = nf()), (si = Rs = sn = null), (Zn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return rf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Dh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Qu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Dh[e.type] : t === "textarea";
}
function af(e, t, n, r) {
  Fd(r),
    (t = Ai(t, "onChange")),
    0 < t.length &&
      ((n = new Ns("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Zr = null,
  fo = null;
function Fh(e) {
  yf(e, 0);
}
function qi(e) {
  var t = tr(e);
  if (_d(t)) return e;
}
function Mh(e, t) {
  if (e === "change") return t;
}
var sf = !1;
if (Qt) {
  var Ul;
  if (Qt) {
    var jl = "oninput" in document;
    if (!jl) {
      var Yu = document.createElement("div");
      Yu.setAttribute("oninput", "return;"),
        (jl = typeof Yu.oninput == "function");
    }
    Ul = jl;
  } else Ul = !1;
  sf = Ul && (!document.documentMode || 9 < document.documentMode);
}
function Gu() {
  Zr && (Zr.detachEvent("onpropertychange", uf), (fo = Zr = null));
}
function uf(e) {
  if (e.propertyName === "value" && qi(fo)) {
    var t = [];
    af(t, fo, e, xs(e)), jd(Fh, t);
  }
}
function $h(e, t, n) {
  e === "focusin"
    ? (Gu(), (Zr = t), (fo = n), Zr.attachEvent("onpropertychange", uf))
    : e === "focusout" && Gu();
}
function Uh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return qi(fo);
}
function jh(e, t) {
  if (e === "click") return qi(t);
}
function Bh(e, t) {
  if (e === "input" || e === "change") return qi(t);
}
function Vh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var bt = typeof Object.is == "function" ? Object.is : Vh;
function po(e, t) {
  if (bt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!sa.call(t, o) || !bt(e[o], t[o])) return !1;
  }
  return !0;
}
function Ku(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xu(e, t) {
  var n = Ku(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ku(n);
  }
}
function cf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? cf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function df() {
  for (var e = window, t = yi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = yi(e.document);
  }
  return t;
}
function _s(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Hh(e) {
  var t = df(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    cf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && _s(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Xu(n, i));
        var l = Xu(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Wh = Qt && "documentMode" in document && 11 >= document.documentMode,
  qn = null,
  Na = null,
  qr = null,
  ba = !1;
function Ju(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ba ||
    qn == null ||
    qn !== yi(r) ||
    ((r = qn),
    "selectionStart" in r && _s(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (qr && po(qr, r)) ||
      ((qr = r),
      (r = Ai(Na, "onSelect")),
      0 < r.length &&
        ((t = new Ns("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = qn))));
}
function Wo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var er = {
    animationend: Wo("Animation", "AnimationEnd"),
    animationiteration: Wo("Animation", "AnimationIteration"),
    animationstart: Wo("Animation", "AnimationStart"),
    transitionend: Wo("Transition", "TransitionEnd"),
  },
  Bl = {},
  ff = {};
Qt &&
  ((ff = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete er.animationend.animation,
    delete er.animationiteration.animation,
    delete er.animationstart.animation),
  "TransitionEvent" in window || delete er.transitionend.transition);
function el(e) {
  if (Bl[e]) return Bl[e];
  if (!er[e]) return e;
  var t = er[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ff) return (Bl[e] = t[n]);
  return e;
}
var pf = el("animationend"),
  mf = el("animationiteration"),
  hf = el("animationstart"),
  gf = el("transitionend"),
  vf = new Map(),
  Zu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function An(e, t) {
  vf.set(e, t), Wn(t, [e]);
}
for (var Vl = 0; Vl < Zu.length; Vl++) {
  var Hl = Zu[Vl],
    Qh = Hl.toLowerCase(),
    Yh = Hl[0].toUpperCase() + Hl.slice(1);
  An(Qh, "on" + Yh);
}
An(pf, "onAnimationEnd");
An(mf, "onAnimationIteration");
An(hf, "onAnimationStart");
An("dblclick", "onDoubleClick");
An("focusin", "onFocus");
An("focusout", "onBlur");
An(gf, "onTransitionEnd");
gr("onMouseEnter", ["mouseout", "mouseover"]);
gr("onMouseLeave", ["mouseout", "mouseover"]);
gr("onPointerEnter", ["pointerout", "pointerover"]);
gr("onPointerLeave", ["pointerout", "pointerover"]);
Wn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Wn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Wn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Wn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Wn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Yr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Gh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));
function qu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Qm(r, t, void 0, e), (e.currentTarget = null);
}
function yf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== i && o.isPropagationStopped())) break e;
          qu(o, a, u), (i = s);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== i && o.isPropagationStopped())
          )
            break e;
          qu(o, a, u), (i = s);
        }
    }
  }
  if (Si) throw ((e = Ca), (Si = !1), (Ca = null), e);
}
function ve(e, t) {
  var n = t[Ta];
  n === void 0 && (n = t[Ta] = new Set());
  var r = e + "__bubble";
  n.has(r) || (wf(t, e, 2, !1), n.add(r));
}
function Wl(e, t, n) {
  var r = 0;
  t && (r |= 4), wf(n, e, r, t);
}
var Qo = "_reactListening" + Math.random().toString(36).slice(2);
function mo(e) {
  if (!e[Qo]) {
    (e[Qo] = !0),
      Ad.forEach(function (n) {
        n !== "selectionchange" && (Gh.has(n) || Wl(n, !1, e), Wl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Qo] || ((t[Qo] = !0), Wl("selectionchange", !1, t));
  }
}
function wf(e, t, n, r) {
  switch (tf(t)) {
    case 1:
      var o = sh;
      break;
    case 4:
      o = uh;
      break;
    default:
      o = As;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !ka ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Ql(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = Ln(a)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            r = i = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  jd(function () {
    var u = i,
      p = xs(n),
      m = [];
    e: {
      var h = vf.get(e);
      if (h !== void 0) {
        var v = Ns,
          g = e;
        switch (e) {
          case "keypress":
            if (ui(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Eh;
            break;
          case "focusin":
            (g = "focus"), (v = $l);
            break;
          case "focusout":
            (g = "blur"), (v = $l);
            break;
          case "beforeblur":
          case "afterblur":
            v = $l;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = ju;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = fh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Nh;
            break;
          case pf:
          case mf:
          case hf:
            v = hh;
            break;
          case gf:
            v = Ph;
            break;
          case "scroll":
            v = ch;
            break;
          case "wheel":
            v = Lh;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = vh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Vu;
        }
        var w = (t & 4) !== 0,
          A = !w && e === "scroll",
          f = w ? (h !== null ? h + "Capture" : null) : h;
        w = [];
        for (var c = u, d; c !== null; ) {
          d = c;
          var y = d.stateNode;
          if (
            (d.tag === 5 &&
              y !== null &&
              ((d = y),
              f !== null && ((y = ao(c, f)), y != null && w.push(ho(c, y, d)))),
            A)
          )
            break;
          c = c.return;
        }
        0 < w.length &&
          ((h = new v(h, g, null, n, p)), m.push({ event: h, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Sa &&
            (g = n.relatedTarget || n.fromElement) &&
            (Ln(g) || g[Yt]))
        )
          break e;
        if (
          (v || h) &&
          ((h =
            p.window === p
              ? p
              : (h = p.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          v
            ? ((g = n.relatedTarget || n.toElement),
              (v = u),
              (g = g ? Ln(g) : null),
              g !== null &&
                ((A = Qn(g)), g !== A || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((v = null), (g = u)),
          v !== g)
        ) {
          if (
            ((w = ju),
            (y = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Vu),
              (y = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (A = v == null ? h : tr(v)),
            (d = g == null ? h : tr(g)),
            (h = new w(y, c + "leave", v, n, p)),
            (h.target = A),
            (h.relatedTarget = d),
            (y = null),
            Ln(p) === u &&
              ((w = new w(f, c + "enter", g, n, p)),
              (w.target = d),
              (w.relatedTarget = A),
              (y = w)),
            (A = y),
            v && g)
          )
            t: {
              for (w = v, f = g, c = 0, d = w; d; d = Kn(d)) c++;
              for (d = 0, y = f; y; y = Kn(y)) d++;
              for (; 0 < c - d; ) (w = Kn(w)), c--;
              for (; 0 < d - c; ) (f = Kn(f)), d--;
              for (; c--; ) {
                if (w === f || (f !== null && w === f.alternate)) break t;
                (w = Kn(w)), (f = Kn(f));
              }
              w = null;
            }
          else w = null;
          v !== null && ec(m, h, v, w, !1),
            g !== null && A !== null && ec(m, A, g, w, !0);
        }
      }
      e: {
        if (
          ((h = u ? tr(u) : window),
          (v = h.nodeName && h.nodeName.toLowerCase()),
          v === "select" || (v === "input" && h.type === "file"))
        )
          var C = Mh;
        else if (Qu(h))
          if (sf) C = Bh;
          else {
            C = Uh;
            var E = $h;
          }
        else
          (v = h.nodeName) &&
            v.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (C = jh);
        if (C && (C = C(e, u))) {
          af(m, C, n, p);
          break e;
        }
        E && E(e, h, u),
          e === "focusout" &&
            (E = h._wrapperState) &&
            E.controlled &&
            h.type === "number" &&
            ha(h, "number", h.value);
      }
      switch (((E = u ? tr(u) : window), e)) {
        case "focusin":
          (Qu(E) || E.contentEditable === "true") &&
            ((qn = E), (Na = u), (qr = null));
          break;
        case "focusout":
          qr = Na = qn = null;
          break;
        case "mousedown":
          ba = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ba = !1), Ju(m, n, p);
          break;
        case "selectionchange":
          if (Wh) break;
        case "keydown":
        case "keyup":
          Ju(m, n, p);
      }
      var R;
      if (Ps)
        e: {
          switch (e) {
            case "compositionstart":
              var b = "onCompositionStart";
              break e;
            case "compositionend":
              b = "onCompositionEnd";
              break e;
            case "compositionupdate":
              b = "onCompositionUpdate";
              break e;
          }
          b = void 0;
        }
      else
        Zn
          ? of(e, n) && (b = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b &&
        (rf &&
          n.locale !== "ko" &&
          (Zn || b !== "onCompositionStart"
            ? b === "onCompositionEnd" && Zn && (R = nf())
            : ((sn = p),
              (Rs = "value" in sn ? sn.value : sn.textContent),
              (Zn = !0))),
        (E = Ai(u, b)),
        0 < E.length &&
          ((b = new Bu(b, e, null, n, p)),
          m.push({ event: b, listeners: E }),
          R ? (b.data = R) : ((R = lf(n)), R !== null && (b.data = R)))),
        (R = Th ? Ih(e, n) : zh(e, n)) &&
          ((u = Ai(u, "onBeforeInput")),
          0 < u.length &&
            ((p = new Bu("onBeforeInput", "beforeinput", null, n, p)),
            m.push({ event: p, listeners: u }),
            (p.data = R)));
    }
    yf(m, t);
  });
}
function ho(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ai(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = ao(e, n)),
      i != null && r.unshift(ho(e, i, o)),
      (i = ao(e, t)),
      i != null && r.push(ho(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Kn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ec(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((s = ao(n, i)), s != null && l.unshift(ho(n, s, a)))
        : o || ((s = ao(n, i)), s != null && l.push(ho(n, s, a)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Kh = /\r\n?/g,
  Xh = /\u0000|\uFFFD/g;
function tc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Kh,
      `
`
    )
    .replace(Xh, "");
}
function Yo(e, t, n) {
  if (((t = tc(t)), tc(e) !== t && n)) throw Error(P(425));
}
function Ri() {}
var Pa = null,
  _a = null;
function La(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Oa = typeof setTimeout == "function" ? setTimeout : void 0,
  Jh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  nc = typeof Promise == "function" ? Promise : void 0,
  Zh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof nc < "u"
      ? function (e) {
          return nc.resolve(null).then(e).catch(qh);
        }
      : Oa;
function qh(e) {
  setTimeout(function () {
    throw e;
  });
}
function Yl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), co(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  co(t);
}
function mn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function rc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var br = Math.random().toString(36).slice(2),
  Ot = "__reactFiber$" + br,
  go = "__reactProps$" + br,
  Yt = "__reactContainer$" + br,
  Ta = "__reactEvents$" + br,
  e0 = "__reactListeners$" + br,
  t0 = "__reactHandles$" + br;
function Ln(e) {
  var t = e[Ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Yt] || n[Ot])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = rc(e); e !== null; ) {
          if ((n = e[Ot])) return n;
          e = rc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Po(e) {
  return (
    (e = e[Ot] || e[Yt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function tr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function tl(e) {
  return e[go] || null;
}
var Ia = [],
  nr = -1;
function Rn(e) {
  return { current: e };
}
function ye(e) {
  0 > nr || ((e.current = Ia[nr]), (Ia[nr] = null), nr--);
}
function me(e, t) {
  nr++, (Ia[nr] = e.current), (e.current = t);
}
var kn = {},
  Qe = Rn(kn),
  et = Rn(!1),
  Fn = kn;
function vr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return kn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function tt(e) {
  return (e = e.childContextTypes), e != null;
}
function Ni() {
  ye(et), ye(Qe);
}
function oc(e, t, n) {
  if (Qe.current !== kn) throw Error(P(168));
  me(Qe, t), me(et, n);
}
function Sf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(P(108, $m(e) || "Unknown", o));
  return Ee({}, n, r);
}
function bi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || kn),
    (Fn = Qe.current),
    me(Qe, e),
    me(et, et.current),
    !0
  );
}
function ic(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n
    ? ((e = Sf(e, t, Fn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ye(et),
      ye(Qe),
      me(Qe, e))
    : ye(et),
    me(et, n);
}
var jt = null,
  nl = !1,
  Gl = !1;
function xf(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
function n0(e) {
  (nl = !0), xf(e);
}
function Nn() {
  if (!Gl && jt !== null) {
    Gl = !0;
    var e = 0,
      t = se;
    try {
      var n = jt;
      for (se = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (jt = null), (nl = !1);
    } catch (o) {
      throw (jt !== null && (jt = jt.slice(e + 1)), Wd(ks, Nn), o);
    } finally {
      (se = t), (Gl = !1);
    }
  }
  return null;
}
var rr = [],
  or = 0,
  Pi = null,
  _i = 0,
  ft = [],
  pt = 0,
  Mn = null,
  Vt = 1,
  Ht = "";
function Pn(e, t) {
  (rr[or++] = _i), (rr[or++] = Pi), (Pi = e), (_i = t);
}
function kf(e, t, n) {
  (ft[pt++] = Vt), (ft[pt++] = Ht), (ft[pt++] = Mn), (Mn = e);
  var r = Vt;
  e = Ht;
  var o = 32 - Rt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Rt(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Vt = (1 << (32 - Rt(t) + o)) | (n << o) | r),
      (Ht = i + e);
  } else (Vt = (1 << i) | (n << o) | r), (Ht = e);
}
function Ls(e) {
  e.return !== null && (Pn(e, 1), kf(e, 1, 0));
}
function Os(e) {
  for (; e === Pi; )
    (Pi = rr[--or]), (rr[or] = null), (_i = rr[--or]), (rr[or] = null);
  for (; e === Mn; )
    (Mn = ft[--pt]),
      (ft[pt] = null),
      (Ht = ft[--pt]),
      (ft[pt] = null),
      (Vt = ft[--pt]),
      (ft[pt] = null);
}
var lt = null,
  it = null,
  we = !1,
  At = null;
function Cf(e, t) {
  var n = mt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function lc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (lt = e), (it = mn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (lt = e), (it = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Mn !== null ? { id: Vt, overflow: Ht } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = mt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (lt = e),
            (it = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function za(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Da(e) {
  if (we) {
    var t = it;
    if (t) {
      var n = t;
      if (!lc(e, t)) {
        if (za(e)) throw Error(P(418));
        t = mn(n.nextSibling);
        var r = lt;
        t && lc(e, t)
          ? Cf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (we = !1), (lt = e));
      }
    } else {
      if (za(e)) throw Error(P(418));
      (e.flags = (e.flags & -4097) | 2), (we = !1), (lt = e);
    }
  }
}
function ac(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  lt = e;
}
function Go(e) {
  if (e !== lt) return !1;
  if (!we) return ac(e), (we = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !La(e.type, e.memoizedProps))),
    t && (t = it))
  ) {
    if (za(e)) throw (Ef(), Error(P(418)));
    for (; t; ) Cf(e, t), (t = mn(t.nextSibling));
  }
  if ((ac(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              it = mn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      it = null;
    }
  } else it = lt ? mn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ef() {
  for (var e = it; e; ) e = mn(e.nextSibling);
}
function yr() {
  (it = lt = null), (we = !1);
}
function Ts(e) {
  At === null ? (At = [e]) : At.push(e);
}
var r0 = Zt.ReactCurrentBatchConfig;
function Ct(e, t) {
  if (e && e.defaultProps) {
    (t = Ee({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Li = Rn(null),
  Oi = null,
  ir = null,
  Is = null;
function zs() {
  Is = ir = Oi = null;
}
function Ds(e) {
  var t = Li.current;
  ye(Li), (e._currentValue = t);
}
function Fa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function pr(e, t) {
  (Oi = e),
    (Is = ir = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (qe = !0), (e.firstContext = null));
}
function vt(e) {
  var t = e._currentValue;
  if (Is !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ir === null)) {
      if (Oi === null) throw Error(P(308));
      (ir = e), (Oi.dependencies = { lanes: 0, firstContext: e });
    } else ir = ir.next = e;
  return t;
}
var On = null;
function Fs(e) {
  On === null ? (On = [e]) : On.push(e);
}
function Af(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Fs(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Gt(e, r)
  );
}
function Gt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var on = !1;
function Ms(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Rf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Wt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function hn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), le & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Gt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Fs(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Gt(e, n)
  );
}
function ci(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Cs(e, n);
  }
}
function sc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ti(e, t, n, r) {
  var o = e.updateQueue;
  on = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var s = a,
      u = s.next;
    (s.next = null), l === null ? (i = u) : (l.next = u), (l = s);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (a = p.lastBaseUpdate),
      a !== l &&
        (a === null ? (p.firstBaseUpdate = u) : (a.next = u),
        (p.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var m = o.baseState;
    (l = 0), (p = u = s = null), (a = i);
    do {
      var h = a.lane,
        v = a.eventTime;
      if ((r & h) === h) {
        p !== null &&
          (p = p.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var g = e,
            w = a;
          switch (((h = t), (v = n), w.tag)) {
            case 1:
              if (((g = w.payload), typeof g == "function")) {
                m = g.call(v, m, h);
                break e;
              }
              m = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = w.payload),
                (h = typeof g == "function" ? g.call(v, m, h) : g),
                h == null)
              )
                break e;
              m = Ee({}, m, h);
              break e;
            case 2:
              on = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [a]) : h.push(a));
      } else
        (v = {
          eventTime: v,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          p === null ? ((u = p = v), (s = m)) : (p = p.next = v),
          (l |= h);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (s = m),
      (o.baseState = s),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = p),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Un |= l), (e.lanes = l), (e.memoizedState = m);
  }
}
function uc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(P(191, o));
        o.call(r);
      }
    }
}
var Nf = new Ed.Component().refs;
function Ma(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ee({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var rl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Qn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ke(),
      o = vn(e),
      i = Wt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = hn(e, i, o)),
      t !== null && (Nt(t, e, o, r), ci(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ke(),
      o = vn(e),
      i = Wt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = hn(e, i, o)),
      t !== null && (Nt(t, e, o, r), ci(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ke(),
      r = vn(e),
      o = Wt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = hn(e, o, r)),
      t !== null && (Nt(t, e, r, n), ci(t, e, r));
  },
};
function cc(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !po(n, r) || !po(o, i)
      : !0
  );
}
function bf(e, t, n) {
  var r = !1,
    o = kn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = vt(i))
      : ((o = tt(t) ? Fn : Qe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? vr(e, o) : kn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = rl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function dc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && rl.enqueueReplaceState(t, t.state, null);
}
function $a(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Nf), Ms(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = vt(i))
    : ((i = tt(t) ? Fn : Qe.current), (o.context = vr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ma(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && rl.enqueueReplaceState(o, o.state, null),
      Ti(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function jr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var a = o.refs;
            a === Nf && (a = o.refs = {}),
              l === null ? delete a[i] : (a[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function Ko(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      P(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function fc(e) {
  var t = e._init;
  return t(e._payload);
}
function Pf(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function o(f, c) {
    return (f = yn(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, c, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function l(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function a(f, c, d, y) {
    return c === null || c.tag !== 6
      ? ((c = ta(d, f.mode, y)), (c.return = f), c)
      : ((c = o(c, d)), (c.return = f), c);
  }
  function s(f, c, d, y) {
    var C = d.type;
    return C === Jn
      ? p(f, c, d.props.children, y, d.key)
      : c !== null &&
        (c.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === rn &&
            fc(C) === c.type))
      ? ((y = o(c, d.props)), (y.ref = jr(f, c, d)), (y.return = f), y)
      : ((y = gi(d.type, d.key, d.props, null, f.mode, y)),
        (y.ref = jr(f, c, d)),
        (y.return = f),
        y);
  }
  function u(f, c, d, y) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = na(d, f.mode, y)), (c.return = f), c)
      : ((c = o(c, d.children || [])), (c.return = f), c);
  }
  function p(f, c, d, y, C) {
    return c === null || c.tag !== 7
      ? ((c = zn(d, f.mode, y, C)), (c.return = f), c)
      : ((c = o(c, d)), (c.return = f), c);
  }
  function m(f, c, d) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = ta("" + c, f.mode, d)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Mo:
          return (
            (d = gi(c.type, c.key, c.props, null, f.mode, d)),
            (d.ref = jr(f, null, c)),
            (d.return = f),
            d
          );
        case Xn:
          return (c = na(c, f.mode, d)), (c.return = f), c;
        case rn:
          var y = c._init;
          return m(f, y(c._payload), d);
      }
      if (Wr(c) || Dr(c))
        return (c = zn(c, f.mode, d, null)), (c.return = f), c;
      Ko(f, c);
    }
    return null;
  }
  function h(f, c, d, y) {
    var C = c !== null ? c.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return C !== null ? null : a(f, c, "" + d, y);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Mo:
          return d.key === C ? s(f, c, d, y) : null;
        case Xn:
          return d.key === C ? u(f, c, d, y) : null;
        case rn:
          return (C = d._init), h(f, c, C(d._payload), y);
      }
      if (Wr(d) || Dr(d)) return C !== null ? null : p(f, c, d, y, null);
      Ko(f, d);
    }
    return null;
  }
  function v(f, c, d, y, C) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (f = f.get(d) || null), a(c, f, "" + y, C);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Mo:
          return (f = f.get(y.key === null ? d : y.key) || null), s(c, f, y, C);
        case Xn:
          return (f = f.get(y.key === null ? d : y.key) || null), u(c, f, y, C);
        case rn:
          var E = y._init;
          return v(f, c, d, E(y._payload), C);
      }
      if (Wr(y) || Dr(y)) return (f = f.get(d) || null), p(c, f, y, C, null);
      Ko(c, y);
    }
    return null;
  }
  function g(f, c, d, y) {
    for (
      var C = null, E = null, R = c, b = (c = 0), j = null;
      R !== null && b < d.length;
      b++
    ) {
      R.index > b ? ((j = R), (R = null)) : (j = R.sibling);
      var F = h(f, R, d[b], y);
      if (F === null) {
        R === null && (R = j);
        break;
      }
      e && R && F.alternate === null && t(f, R),
        (c = i(F, c, b)),
        E === null ? (C = F) : (E.sibling = F),
        (E = F),
        (R = j);
    }
    if (b === d.length) return n(f, R), we && Pn(f, b), C;
    if (R === null) {
      for (; b < d.length; b++)
        (R = m(f, d[b], y)),
          R !== null &&
            ((c = i(R, c, b)), E === null ? (C = R) : (E.sibling = R), (E = R));
      return we && Pn(f, b), C;
    }
    for (R = r(f, R); b < d.length; b++)
      (j = v(R, f, b, d[b], y)),
        j !== null &&
          (e && j.alternate !== null && R.delete(j.key === null ? b : j.key),
          (c = i(j, c, b)),
          E === null ? (C = j) : (E.sibling = j),
          (E = j));
    return (
      e &&
        R.forEach(function (O) {
          return t(f, O);
        }),
      we && Pn(f, b),
      C
    );
  }
  function w(f, c, d, y) {
    var C = Dr(d);
    if (typeof C != "function") throw Error(P(150));
    if (((d = C.call(d)), d == null)) throw Error(P(151));
    for (
      var E = (C = null), R = c, b = (c = 0), j = null, F = d.next();
      R !== null && !F.done;
      b++, F = d.next()
    ) {
      R.index > b ? ((j = R), (R = null)) : (j = R.sibling);
      var O = h(f, R, F.value, y);
      if (O === null) {
        R === null && (R = j);
        break;
      }
      e && R && O.alternate === null && t(f, R),
        (c = i(O, c, b)),
        E === null ? (C = O) : (E.sibling = O),
        (E = O),
        (R = j);
    }
    if (F.done) return n(f, R), we && Pn(f, b), C;
    if (R === null) {
      for (; !F.done; b++, F = d.next())
        (F = m(f, F.value, y)),
          F !== null &&
            ((c = i(F, c, b)), E === null ? (C = F) : (E.sibling = F), (E = F));
      return we && Pn(f, b), C;
    }
    for (R = r(f, R); !F.done; b++, F = d.next())
      (F = v(R, f, b, F.value, y)),
        F !== null &&
          (e && F.alternate !== null && R.delete(F.key === null ? b : F.key),
          (c = i(F, c, b)),
          E === null ? (C = F) : (E.sibling = F),
          (E = F));
    return (
      e &&
        R.forEach(function (H) {
          return t(f, H);
        }),
      we && Pn(f, b),
      C
    );
  }
  function A(f, c, d, y) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Jn &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case Mo:
          e: {
            for (var C = d.key, E = c; E !== null; ) {
              if (E.key === C) {
                if (((C = d.type), C === Jn)) {
                  if (E.tag === 7) {
                    n(f, E.sibling),
                      (c = o(E, d.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  E.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === rn &&
                    fc(C) === E.type)
                ) {
                  n(f, E.sibling),
                    (c = o(E, d.props)),
                    (c.ref = jr(f, E, d)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, E);
                break;
              } else t(f, E);
              E = E.sibling;
            }
            d.type === Jn
              ? ((c = zn(d.props.children, f.mode, y, d.key)),
                (c.return = f),
                (f = c))
              : ((y = gi(d.type, d.key, d.props, null, f.mode, y)),
                (y.ref = jr(f, c, d)),
                (y.return = f),
                (f = y));
          }
          return l(f);
        case Xn:
          e: {
            for (E = d.key; c !== null; ) {
              if (c.key === E)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(f, c.sibling),
                    (c = o(c, d.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = na(d, f.mode, y)), (c.return = f), (f = c);
          }
          return l(f);
        case rn:
          return (E = d._init), A(f, c, E(d._payload), y);
      }
      if (Wr(d)) return g(f, c, d, y);
      if (Dr(d)) return w(f, c, d, y);
      Ko(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = o(c, d)), (c.return = f), (f = c))
          : (n(f, c), (c = ta(d, f.mode, y)), (c.return = f), (f = c)),
        l(f))
      : n(f, c);
  }
  return A;
}
var wr = Pf(!0),
  _f = Pf(!1),
  _o = {},
  zt = Rn(_o),
  vo = Rn(_o),
  yo = Rn(_o);
function Tn(e) {
  if (e === _o) throw Error(P(174));
  return e;
}
function $s(e, t) {
  switch ((me(yo, t), me(vo, e), me(zt, _o), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : va(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = va(t, e));
  }
  ye(zt), me(zt, t);
}
function Sr() {
  ye(zt), ye(vo), ye(yo);
}
function Lf(e) {
  Tn(yo.current);
  var t = Tn(zt.current),
    n = va(t, e.type);
  t !== n && (me(vo, e), me(zt, n));
}
function Us(e) {
  vo.current === e && (ye(zt), ye(vo));
}
var ke = Rn(0);
function Ii(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Kl = [];
function js() {
  for (var e = 0; e < Kl.length; e++)
    Kl[e]._workInProgressVersionPrimary = null;
  Kl.length = 0;
}
var di = Zt.ReactCurrentDispatcher,
  Xl = Zt.ReactCurrentBatchConfig,
  $n = 0,
  Ce = null,
  Le = null,
  ze = null,
  zi = !1,
  eo = !1,
  wo = 0,
  o0 = 0;
function Ve() {
  throw Error(P(321));
}
function Bs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!bt(e[n], t[n])) return !1;
  return !0;
}
function Vs(e, t, n, r, o, i) {
  if (
    (($n = i),
    (Ce = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (di.current = e === null || e.memoizedState === null ? s0 : u0),
    (e = n(r, o)),
    eo)
  ) {
    i = 0;
    do {
      if (((eo = !1), (wo = 0), 25 <= i)) throw Error(P(301));
      (i += 1),
        (ze = Le = null),
        (t.updateQueue = null),
        (di.current = c0),
        (e = n(r, o));
    } while (eo);
  }
  if (
    ((di.current = Di),
    (t = Le !== null && Le.next !== null),
    ($n = 0),
    (ze = Le = Ce = null),
    (zi = !1),
    t)
  )
    throw Error(P(300));
  return e;
}
function Hs() {
  var e = wo !== 0;
  return (wo = 0), e;
}
function Lt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ze === null ? (Ce.memoizedState = ze = e) : (ze = ze.next = e), ze;
}
function yt() {
  if (Le === null) {
    var e = Ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Le.next;
  var t = ze === null ? Ce.memoizedState : ze.next;
  if (t !== null) (ze = t), (Le = e);
  else {
    if (e === null) throw Error(P(310));
    (Le = e),
      (e = {
        memoizedState: Le.memoizedState,
        baseState: Le.baseState,
        baseQueue: Le.baseQueue,
        queue: Le.queue,
        next: null,
      }),
      ze === null ? (Ce.memoizedState = ze = e) : (ze = ze.next = e);
  }
  return ze;
}
function So(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Jl(e) {
  var t = yt(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = Le,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (l = null),
      s = null,
      u = i;
    do {
      var p = u.lane;
      if (($n & p) === p)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var m = {
          lane: p,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((a = s = m), (l = r)) : (s = s.next = m),
          (Ce.lanes |= p),
          (Un |= p);
      }
      u = u.next;
    } while (u !== null && u !== i);
    s === null ? (l = r) : (s.next = a),
      bt(r, t.memoizedState) || (qe = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Ce.lanes |= i), (Un |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Zl(e) {
  var t = yt(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    bt(i, t.memoizedState) || (qe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Of() {}
function Tf(e, t) {
  var n = Ce,
    r = yt(),
    o = t(),
    i = !bt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (qe = !0)),
    (r = r.queue),
    Ws(Df.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ze !== null && ze.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      xo(9, zf.bind(null, n, r, o, t), void 0, null),
      De === null)
    )
      throw Error(P(349));
    $n & 30 || If(n, t, o);
  }
  return o;
}
function If(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ce.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function zf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ff(t) && Mf(e);
}
function Df(e, t, n) {
  return n(function () {
    Ff(t) && Mf(e);
  });
}
function Ff(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !bt(e, n);
  } catch {
    return !0;
  }
}
function Mf(e) {
  var t = Gt(e, 1);
  t !== null && Nt(t, e, 1, -1);
}
function pc(e) {
  var t = Lt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: So,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = a0.bind(null, Ce, e)),
    [t.memoizedState, e]
  );
}
function xo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ce.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function $f() {
  return yt().memoizedState;
}
function fi(e, t, n, r) {
  var o = Lt();
  (Ce.flags |= e),
    (o.memoizedState = xo(1 | t, n, void 0, r === void 0 ? null : r));
}
function ol(e, t, n, r) {
  var o = yt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Le !== null) {
    var l = Le.memoizedState;
    if (((i = l.destroy), r !== null && Bs(r, l.deps))) {
      o.memoizedState = xo(t, n, i, r);
      return;
    }
  }
  (Ce.flags |= e), (o.memoizedState = xo(1 | t, n, i, r));
}
function mc(e, t) {
  return fi(8390656, 8, e, t);
}
function Ws(e, t) {
  return ol(2048, 8, e, t);
}
function Uf(e, t) {
  return ol(4, 2, e, t);
}
function jf(e, t) {
  return ol(4, 4, e, t);
}
function Bf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Vf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ol(4, 4, Bf.bind(null, t, e), n)
  );
}
function Qs() {}
function Hf(e, t) {
  var n = yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bs(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Wf(e, t) {
  var n = yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Qf(e, t, n) {
  return $n & 21
    ? (bt(n, t) || ((n = Gd()), (Ce.lanes |= n), (Un |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (qe = !0)), (e.memoizedState = n));
}
function i0(e, t) {
  var n = se;
  (se = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Xl.transition;
  Xl.transition = {};
  try {
    e(!1), t();
  } finally {
    (se = n), (Xl.transition = r);
  }
}
function Yf() {
  return yt().memoizedState;
}
function l0(e, t, n) {
  var r = vn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Gf(e))
  )
    Kf(t, n);
  else if (((n = Af(e, t, n, r)), n !== null)) {
    var o = Ke();
    Nt(n, e, r, o), Xf(n, t, r);
  }
}
function a0(e, t, n) {
  var r = vn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Gf(e)) Kf(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), bt(a, l))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), Fs(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Af(e, t, o, r)),
      n !== null && ((o = Ke()), Nt(n, e, r, o), Xf(n, t, r));
  }
}
function Gf(e) {
  var t = e.alternate;
  return e === Ce || (t !== null && t === Ce);
}
function Kf(e, t) {
  eo = zi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Xf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Cs(e, n);
  }
}
var Di = {
    readContext: vt,
    useCallback: Ve,
    useContext: Ve,
    useEffect: Ve,
    useImperativeHandle: Ve,
    useInsertionEffect: Ve,
    useLayoutEffect: Ve,
    useMemo: Ve,
    useReducer: Ve,
    useRef: Ve,
    useState: Ve,
    useDebugValue: Ve,
    useDeferredValue: Ve,
    useTransition: Ve,
    useMutableSource: Ve,
    useSyncExternalStore: Ve,
    useId: Ve,
    unstable_isNewReconciler: !1,
  },
  s0 = {
    readContext: vt,
    useCallback: function (e, t) {
      return (Lt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: vt,
    useEffect: mc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        fi(4194308, 4, Bf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return fi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return fi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Lt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Lt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = l0.bind(null, Ce, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Lt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: pc,
    useDebugValue: Qs,
    useDeferredValue: function (e) {
      return (Lt().memoizedState = e);
    },
    useTransition: function () {
      var e = pc(!1),
        t = e[0];
      return (e = i0.bind(null, e[1])), (Lt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ce,
        o = Lt();
      if (we) {
        if (n === void 0) throw Error(P(407));
        n = n();
      } else {
        if (((n = t()), De === null)) throw Error(P(349));
        $n & 30 || If(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        mc(Df.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        xo(9, zf.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Lt(),
        t = De.identifierPrefix;
      if (we) {
        var n = Ht,
          r = Vt;
        (n = (r & ~(1 << (32 - Rt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = wo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = o0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  u0 = {
    readContext: vt,
    useCallback: Hf,
    useContext: vt,
    useEffect: Ws,
    useImperativeHandle: Vf,
    useInsertionEffect: Uf,
    useLayoutEffect: jf,
    useMemo: Wf,
    useReducer: Jl,
    useRef: $f,
    useState: function () {
      return Jl(So);
    },
    useDebugValue: Qs,
    useDeferredValue: function (e) {
      var t = yt();
      return Qf(t, Le.memoizedState, e);
    },
    useTransition: function () {
      var e = Jl(So)[0],
        t = yt().memoizedState;
      return [e, t];
    },
    useMutableSource: Of,
    useSyncExternalStore: Tf,
    useId: Yf,
    unstable_isNewReconciler: !1,
  },
  c0 = {
    readContext: vt,
    useCallback: Hf,
    useContext: vt,
    useEffect: Ws,
    useImperativeHandle: Vf,
    useInsertionEffect: Uf,
    useLayoutEffect: jf,
    useMemo: Wf,
    useReducer: Zl,
    useRef: $f,
    useState: function () {
      return Zl(So);
    },
    useDebugValue: Qs,
    useDeferredValue: function (e) {
      var t = yt();
      return Le === null ? (t.memoizedState = e) : Qf(t, Le.memoizedState, e);
    },
    useTransition: function () {
      var e = Zl(So)[0],
        t = yt().memoizedState;
      return [e, t];
    },
    useMutableSource: Of,
    useSyncExternalStore: Tf,
    useId: Yf,
    unstable_isNewReconciler: !1,
  };
function xr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Mm(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ql(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ua(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var d0 = typeof WeakMap == "function" ? WeakMap : Map;
function Jf(e, t, n) {
  (n = Wt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Mi || ((Mi = !0), (Xa = r)), Ua(e, t);
    }),
    n
  );
}
function Zf(e, t, n) {
  (n = Wt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Ua(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ua(e, t),
          typeof r != "function" &&
            (gn === null ? (gn = new Set([this])) : gn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function hc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new d0();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = A0.bind(null, e, t, n)), t.then(e, e));
}
function gc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function vc(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Wt(-1, 1)), (t.tag = 2), hn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var f0 = Zt.ReactCurrentOwner,
  qe = !1;
function Ge(e, t, n, r) {
  t.child = e === null ? _f(t, null, n, r) : wr(t, e.child, n, r);
}
function yc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    pr(t, o),
    (r = Vs(e, t, n, r, i, o)),
    (n = Hs()),
    e !== null && !qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Kt(e, t, o))
      : (we && n && Ls(t), (t.flags |= 1), Ge(e, t, r, o), t.child)
  );
}
function wc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !eu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), qf(e, t, i, r, o))
      : ((e = gi(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : po), n(l, r) && e.ref === t.ref)
    )
      return Kt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = yn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function qf(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (po(i, r) && e.ref === t.ref)
      if (((qe = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (qe = !0);
      else return (t.lanes = e.lanes), Kt(e, t, o);
  }
  return ja(e, t, n, r, o);
}
function ep(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        me(ar, ot),
        (ot |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          me(ar, ot),
          (ot |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        me(ar, ot),
        (ot |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      me(ar, ot),
      (ot |= r);
  return Ge(e, t, o, n), t.child;
}
function tp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ja(e, t, n, r, o) {
  var i = tt(n) ? Fn : Qe.current;
  return (
    (i = vr(t, i)),
    pr(t, o),
    (n = Vs(e, t, n, r, i, o)),
    (r = Hs()),
    e !== null && !qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Kt(e, t, o))
      : (we && r && Ls(t), (t.flags |= 1), Ge(e, t, n, o), t.child)
  );
}
function Sc(e, t, n, r, o) {
  if (tt(n)) {
    var i = !0;
    bi(t);
  } else i = !1;
  if ((pr(t, o), t.stateNode === null))
    pi(e, t), bf(t, n, r), $a(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var s = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = vt(u))
      : ((u = tt(n) ? Fn : Qe.current), (u = vr(t, u)));
    var p = n.getDerivedStateFromProps,
      m =
        typeof p == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== r || s !== u) && dc(t, l, r, u)),
      (on = !1);
    var h = t.memoizedState;
    (l.state = h),
      Ti(t, r, l, o),
      (s = t.memoizedState),
      a !== r || h !== s || et.current || on
        ? (typeof p == "function" && (Ma(t, n, p, r), (s = t.memoizedState)),
          (a = on || cc(t, n, a, r, h, s, u))
            ? (m ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = u),
          (r = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Rf(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Ct(t.type, a)),
      (l.props = u),
      (m = t.pendingProps),
      (h = l.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = vt(s))
        : ((s = tt(n) ? Fn : Qe.current), (s = vr(t, s)));
    var v = n.getDerivedStateFromProps;
    (p =
      typeof v == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== m || h !== s) && dc(t, l, r, s)),
      (on = !1),
      (h = t.memoizedState),
      (l.state = h),
      Ti(t, r, l, o);
    var g = t.memoizedState;
    a !== m || h !== g || et.current || on
      ? (typeof v == "function" && (Ma(t, n, v, r), (g = t.memoizedState)),
        (u = on || cc(t, n, u, r, h, g, s) || !1)
          ? (p ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, g, s),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, g, s)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (l.props = r),
        (l.state = g),
        (l.context = s),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ba(e, t, n, r, i, o);
}
function Ba(e, t, n, r, o, i) {
  tp(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && ic(t, n, !1), Kt(e, t, i);
  (r = t.stateNode), (f0.current = t);
  var a =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = wr(t, e.child, null, i)), (t.child = wr(t, null, a, i)))
      : Ge(e, t, a, i),
    (t.memoizedState = r.state),
    o && ic(t, n, !0),
    t.child
  );
}
function np(e) {
  var t = e.stateNode;
  t.pendingContext
    ? oc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && oc(e, t.context, !1),
    $s(e, t.containerInfo);
}
function xc(e, t, n, r, o) {
  return yr(), Ts(o), (t.flags |= 256), Ge(e, t, n, r), t.child;
}
var Va = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ha(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function rp(e, t, n) {
  var r = t.pendingProps,
    o = ke.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    me(ke, o & 1),
    e === null)
  )
    return (
      Da(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = al(l, r, 0, null)),
              (e = zn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ha(n)),
              (t.memoizedState = Va),
              e)
            : Ys(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return p0(e, t, l, r, a, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (a = o.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = yn(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = yn(a, i)) : ((i = zn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Ha(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Va),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = yn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ys(e, t) {
  return (
    (t = al({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Xo(e, t, n, r) {
  return (
    r !== null && Ts(r),
    wr(t, e.child, null, n),
    (e = Ys(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function p0(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ql(Error(P(422)))), Xo(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = al({ mode: "visible", children: r.children }, o, 0, null)),
        (i = zn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && wr(t, e.child, null, l),
        (t.child.memoizedState = Ha(l)),
        (t.memoizedState = Va),
        i);
  if (!(t.mode & 1)) return Xo(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(P(419))), (r = ql(i, r, void 0)), Xo(e, t, l, r);
  }
  if (((a = (l & e.childLanes) !== 0), qe || a)) {
    if (((r = De), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Gt(e, o), Nt(r, e, o, -1));
    }
    return qs(), (r = ql(Error(P(421)))), Xo(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = R0.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (it = mn(o.nextSibling)),
      (lt = t),
      (we = !0),
      (At = null),
      e !== null &&
        ((ft[pt++] = Vt),
        (ft[pt++] = Ht),
        (ft[pt++] = Mn),
        (Vt = e.id),
        (Ht = e.overflow),
        (Mn = t)),
      (t = Ys(t, r.children)),
      (t.flags |= 4096),
      t);
}
function kc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fa(e.return, t, n);
}
function ea(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function op(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Ge(e, t, r.children, n), (r = ke.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && kc(e, n, t);
        else if (e.tag === 19) kc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((me(ke, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Ii(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ea(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ii(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        ea(t, !0, n, null, i);
        break;
      case "together":
        ea(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function pi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Kt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Un |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (
      e = t.child, n = yn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = yn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function m0(e, t, n) {
  switch (t.tag) {
    case 3:
      np(t), yr();
      break;
    case 5:
      Lf(t);
      break;
    case 1:
      tt(t.type) && bi(t);
      break;
    case 4:
      $s(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      me(Li, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (me(ke, ke.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? rp(e, t, n)
          : (me(ke, ke.current & 1),
            (e = Kt(e, t, n)),
            e !== null ? e.sibling : null);
      me(ke, ke.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return op(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        me(ke, ke.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ep(e, t, n);
  }
  return Kt(e, t, n);
}
var ip, Wa, lp, ap;
ip = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Wa = function () {};
lp = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Tn(zt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = pa(e, o)), (r = pa(e, r)), (i = []);
        break;
      case "select":
        (o = Ee({}, o, { value: void 0 })),
          (r = Ee({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = ga(e, o)), (r = ga(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ri);
    }
    ya(n, r);
    var l;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (io.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in s)
              s.hasOwnProperty(l) &&
                a[l] !== s[l] &&
                (n || (n = {}), (n[l] = s[l]));
          } else n || (i || (i = []), i.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (i = i || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (io.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && ve("scroll", e),
                  i || a === s || (i = []))
                : (i = i || []).push(u, s));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
ap = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Br(e, t) {
  if (!we)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function He(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function h0(e, t, n) {
  var r = t.pendingProps;
  switch ((Os(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return He(t), null;
    case 1:
      return tt(t.type) && Ni(), He(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Sr(),
        ye(et),
        ye(Qe),
        js(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Go(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), At !== null && (qa(At), (At = null)))),
        Wa(e, t),
        He(t),
        null
      );
    case 5:
      Us(t);
      var o = Tn(yo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        lp(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return He(t), null;
        }
        if (((e = Tn(zt.current)), Go(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ot] = t), (r[go] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ve("cancel", r), ve("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ve("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Yr.length; o++) ve(Yr[o], r);
              break;
            case "source":
              ve("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ve("error", r), ve("load", r);
              break;
            case "details":
              ve("toggle", r);
              break;
            case "input":
              Lu(r, i), ve("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ve("invalid", r);
              break;
            case "textarea":
              Tu(r, i), ve("invalid", r);
          }
          ya(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var a = i[l];
              l === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Yo(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Yo(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : io.hasOwnProperty(l) &&
                  a != null &&
                  l === "onScroll" &&
                  ve("scroll", r);
            }
          switch (n) {
            case "input":
              $o(r), Ou(r, i, !0);
              break;
            case "textarea":
              $o(r), Iu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ri);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Td(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Ot] = t),
            (e[go] = r),
            ip(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = wa(n, r)), n)) {
              case "dialog":
                ve("cancel", e), ve("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ve("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Yr.length; o++) ve(Yr[o], e);
                o = r;
                break;
              case "source":
                ve("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                ve("error", e), ve("load", e), (o = r);
                break;
              case "details":
                ve("toggle", e), (o = r);
                break;
              case "input":
                Lu(e, r), (o = pa(e, r)), ve("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Ee({}, r, { value: void 0 })),
                  ve("invalid", e);
                break;
              case "textarea":
                Tu(e, r), (o = ga(e, r)), ve("invalid", e);
                break;
              default:
                o = r;
            }
            ya(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var s = a[i];
                i === "style"
                  ? Dd(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Id(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && lo(e, s)
                    : typeof s == "number" && lo(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (io.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && ve("scroll", e)
                      : s != null && vs(e, i, s, l));
              }
            switch (n) {
              case "input":
                $o(e), Ou(e, r, !1);
                break;
              case "textarea":
                $o(e), Iu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + xn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? ur(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      ur(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ri);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return He(t), null;
    case 6:
      if (e && t.stateNode != null) ap(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
        if (((n = Tn(yo.current)), Tn(zt.current), Go(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ot] = t),
            (i = r.nodeValue !== n) && ((e = lt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Yo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Yo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ot] = t),
            (t.stateNode = r);
      }
      return He(t), null;
    case 13:
      if (
        (ye(ke),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (we && it !== null && t.mode & 1 && !(t.flags & 128))
          Ef(), yr(), (t.flags |= 98560), (i = !1);
        else if (((i = Go(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(P(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(P(317));
            i[Ot] = t;
          } else
            yr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          He(t), (i = !1);
        } else At !== null && (qa(At), (At = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ke.current & 1 ? Te === 0 && (Te = 3) : qs())),
          t.updateQueue !== null && (t.flags |= 4),
          He(t),
          null);
    case 4:
      return (
        Sr(), Wa(e, t), e === null && mo(t.stateNode.containerInfo), He(t), null
      );
    case 10:
      return Ds(t.type._context), He(t), null;
    case 17:
      return tt(t.type) && Ni(), He(t), null;
    case 19:
      if ((ye(ke), (i = t.memoizedState), i === null)) return He(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) Br(i, !1);
        else {
          if (Te !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Ii(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Br(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return me(ke, (ke.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Ne() > kr &&
            ((t.flags |= 128), (r = !0), Br(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ii(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Br(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !we)
            )
              return He(t), null;
          } else
            2 * Ne() - i.renderingStartTime > kr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Br(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Ne()),
          (t.sibling = null),
          (n = ke.current),
          me(ke, r ? (n & 1) | 2 : n & 1),
          t)
        : (He(t), null);
    case 22:
    case 23:
      return (
        Zs(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ot & 1073741824 && (He(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : He(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function g0(e, t) {
  switch ((Os(t), t.tag)) {
    case 1:
      return (
        tt(t.type) && Ni(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Sr(),
        ye(et),
        ye(Qe),
        js(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Us(t), null;
    case 13:
      if (
        (ye(ke), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(P(340));
        yr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ye(ke), null;
    case 4:
      return Sr(), null;
    case 10:
      return Ds(t.type._context), null;
    case 22:
    case 23:
      return Zs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jo = !1,
  We = !1,
  v0 = typeof WeakSet == "function" ? WeakSet : Set,
  $ = null;
function lr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ae(e, t, r);
      }
    else n.current = null;
}
function Qa(e, t, n) {
  try {
    n();
  } catch (r) {
    Ae(e, t, r);
  }
}
var Cc = !1;
function y0(e, t) {
  if (((Pa = Ci), (e = df()), _s(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            a = -1,
            s = -1,
            u = 0,
            p = 0,
            m = e,
            h = null;
          t: for (;;) {
            for (
              var v;
              m !== n || (o !== 0 && m.nodeType !== 3) || (a = l + o),
                m !== i || (r !== 0 && m.nodeType !== 3) || (s = l + r),
                m.nodeType === 3 && (l += m.nodeValue.length),
                (v = m.firstChild) !== null;

            )
              (h = m), (m = v);
            for (;;) {
              if (m === e) break t;
              if (
                (h === n && ++u === o && (a = l),
                h === i && ++p === r && (s = l),
                (v = m.nextSibling) !== null)
              )
                break;
              (m = h), (h = m.parentNode);
            }
            m = v;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (_a = { focusedElem: e, selectionRange: n }, Ci = !1, $ = t; $ !== null; )
    if (((t = $), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), ($ = e);
    else
      for (; $ !== null; ) {
        t = $;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var w = g.memoizedProps,
                    A = g.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Ct(t.type, w),
                      A
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(P(163));
            }
        } catch (y) {
          Ae(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), ($ = e);
          break;
        }
        $ = t.return;
      }
  return (g = Cc), (Cc = !1), g;
}
function to(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Qa(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function il(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ya(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function sp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), sp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ot], delete t[go], delete t[Ta], delete t[e0], delete t[t0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function up(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ec(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || up(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ga(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ri));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ga(e, t, n), e = e.sibling; e !== null; ) Ga(e, t, n), (e = e.sibling);
}
function Ka(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ka(e, t, n), e = e.sibling; e !== null; ) Ka(e, t, n), (e = e.sibling);
}
var Me = null,
  Et = !1;
function nn(e, t, n) {
  for (n = n.child; n !== null; ) cp(e, t, n), (n = n.sibling);
}
function cp(e, t, n) {
  if (It && typeof It.onCommitFiberUnmount == "function")
    try {
      It.onCommitFiberUnmount(Ji, n);
    } catch {}
  switch (n.tag) {
    case 5:
      We || lr(n, t);
    case 6:
      var r = Me,
        o = Et;
      (Me = null),
        nn(e, t, n),
        (Me = r),
        (Et = o),
        Me !== null &&
          (Et
            ? ((e = Me),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Me.removeChild(n.stateNode));
      break;
    case 18:
      Me !== null &&
        (Et
          ? ((e = Me),
            (n = n.stateNode),
            e.nodeType === 8
              ? Yl(e.parentNode, n)
              : e.nodeType === 1 && Yl(e, n),
            co(e))
          : Yl(Me, n.stateNode));
      break;
    case 4:
      (r = Me),
        (o = Et),
        (Me = n.stateNode.containerInfo),
        (Et = !0),
        nn(e, t, n),
        (Me = r),
        (Et = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !We &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && Qa(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      nn(e, t, n);
      break;
    case 1:
      if (
        !We &&
        (lr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Ae(n, t, a);
        }
      nn(e, t, n);
      break;
    case 21:
      nn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((We = (r = We) || n.memoizedState !== null), nn(e, t, n), (We = r))
        : nn(e, t, n);
      break;
    default:
      nn(e, t, n);
  }
}
function Ac(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new v0()),
      t.forEach(function (r) {
        var o = N0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function kt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Me = a.stateNode), (Et = !1);
              break e;
            case 3:
              (Me = a.stateNode.containerInfo), (Et = !0);
              break e;
            case 4:
              (Me = a.stateNode.containerInfo), (Et = !0);
              break e;
          }
          a = a.return;
        }
        if (Me === null) throw Error(P(160));
        cp(i, l, o), (Me = null), (Et = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (u) {
        Ae(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) dp(t, e), (t = t.sibling);
}
function dp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((kt(t, e), _t(e), r & 4)) {
        try {
          to(3, e, e.return), il(3, e);
        } catch (w) {
          Ae(e, e.return, w);
        }
        try {
          to(5, e, e.return);
        } catch (w) {
          Ae(e, e.return, w);
        }
      }
      break;
    case 1:
      kt(t, e), _t(e), r & 512 && n !== null && lr(n, n.return);
      break;
    case 5:
      if (
        (kt(t, e),
        _t(e),
        r & 512 && n !== null && lr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          lo(o, "");
        } catch (w) {
          Ae(e, e.return, w);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Ld(o, i),
              wa(a, l);
            var u = wa(a, i);
            for (l = 0; l < s.length; l += 2) {
              var p = s[l],
                m = s[l + 1];
              p === "style"
                ? Dd(o, m)
                : p === "dangerouslySetInnerHTML"
                ? Id(o, m)
                : p === "children"
                ? lo(o, m)
                : vs(o, p, m, u);
            }
            switch (a) {
              case "input":
                ma(o, i);
                break;
              case "textarea":
                Od(o, i);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null
                  ? ur(o, !!i.multiple, v, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? ur(o, !!i.multiple, i.defaultValue, !0)
                      : ur(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[go] = i;
          } catch (w) {
            Ae(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((kt(t, e), _t(e), r & 4)) {
        if (e.stateNode === null) throw Error(P(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (w) {
          Ae(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (kt(t, e), _t(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          co(t.containerInfo);
        } catch (w) {
          Ae(e, e.return, w);
        }
      break;
    case 4:
      kt(t, e), _t(e);
      break;
    case 13:
      kt(t, e),
        _t(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Xs = Ne())),
        r & 4 && Ac(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((We = (u = We) || p), kt(t, e), (We = u)) : kt(t, e),
        _t(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !p && e.mode & 1)
        )
          for ($ = e, p = e.child; p !== null; ) {
            for (m = $ = p; $ !== null; ) {
              switch (((h = $), (v = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  to(4, h, h.return);
                  break;
                case 1:
                  lr(h, h.return);
                  var g = h.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (w) {
                      Ae(r, n, w);
                    }
                  }
                  break;
                case 5:
                  lr(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Nc(m);
                    continue;
                  }
              }
              v !== null ? ((v.return = h), ($ = v)) : Nc(m);
            }
            p = p.sibling;
          }
        e: for (p = null, m = e; ; ) {
          if (m.tag === 5) {
            if (p === null) {
              p = m;
              try {
                (o = m.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = m.stateNode),
                      (s = m.memoizedProps.style),
                      (l =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = zd("display", l)));
              } catch (w) {
                Ae(e, e.return, w);
              }
            }
          } else if (m.tag === 6) {
            if (p === null)
              try {
                m.stateNode.nodeValue = u ? "" : m.memoizedProps;
              } catch (w) {
                Ae(e, e.return, w);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            p === m && (p = null), (m = m.return);
          }
          p === m && (p = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      kt(t, e), _t(e), r & 4 && Ac(e);
      break;
    case 21:
      break;
    default:
      kt(t, e), _t(e);
  }
}
function _t(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (up(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (lo(o, ""), (r.flags &= -33));
          var i = Ec(e);
          Ka(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = Ec(e);
          Ga(e, a, l);
          break;
        default:
          throw Error(P(161));
      }
    } catch (s) {
      Ae(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function w0(e, t, n) {
  ($ = e), fp(e);
}
function fp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; $ !== null; ) {
    var o = $,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Jo;
      if (!l) {
        var a = o.alternate,
          s = (a !== null && a.memoizedState !== null) || We;
        a = Jo;
        var u = We;
        if (((Jo = l), (We = s) && !u))
          for ($ = o; $ !== null; )
            (l = $),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? bc(o)
                : s !== null
                ? ((s.return = l), ($ = s))
                : bc(o);
        for (; i !== null; ) ($ = i), fp(i), (i = i.sibling);
        ($ = o), (Jo = a), (We = u);
      }
      Rc(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), ($ = i)) : Rc(e);
  }
}
function Rc(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              We || il(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !We)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ct(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && uc(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                uc(t, l, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var p = u.memoizedState;
                  if (p !== null) {
                    var m = p.dehydrated;
                    m !== null && co(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(P(163));
          }
        We || (t.flags & 512 && Ya(t));
      } catch (h) {
        Ae(t, t.return, h);
      }
    }
    if (t === e) {
      $ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function Nc(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t === e) {
      $ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function bc(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            il(4, t);
          } catch (s) {
            Ae(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Ae(t, o, s);
            }
          }
          var i = t.return;
          try {
            Ya(t);
          } catch (s) {
            Ae(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Ya(t);
          } catch (s) {
            Ae(t, l, s);
          }
      }
    } catch (s) {
      Ae(t, t.return, s);
    }
    if (t === e) {
      $ = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), ($ = a);
      break;
    }
    $ = t.return;
  }
}
var S0 = Math.ceil,
  Fi = Zt.ReactCurrentDispatcher,
  Gs = Zt.ReactCurrentOwner,
  gt = Zt.ReactCurrentBatchConfig,
  le = 0,
  De = null,
  Pe = null,
  $e = 0,
  ot = 0,
  ar = Rn(0),
  Te = 0,
  ko = null,
  Un = 0,
  ll = 0,
  Ks = 0,
  no = null,
  Ze = null,
  Xs = 0,
  kr = 1 / 0,
  Ut = null,
  Mi = !1,
  Xa = null,
  gn = null,
  Zo = !1,
  un = null,
  $i = 0,
  ro = 0,
  Ja = null,
  mi = -1,
  hi = 0;
function Ke() {
  return le & 6 ? Ne() : mi !== -1 ? mi : (mi = Ne());
}
function vn(e) {
  return e.mode & 1
    ? le & 2 && $e !== 0
      ? $e & -$e
      : r0.transition !== null
      ? (hi === 0 && (hi = Gd()), hi)
      : ((e = se),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : tf(e.type))),
        e)
    : 1;
}
function Nt(e, t, n, r) {
  if (50 < ro) throw ((ro = 0), (Ja = null), Error(P(185)));
  No(e, n, r),
    (!(le & 2) || e !== De) &&
      (e === De && (!(le & 2) && (ll |= n), Te === 4 && an(e, $e)),
      nt(e, r),
      n === 1 && le === 0 && !(t.mode & 1) && ((kr = Ne() + 500), nl && Nn()));
}
function nt(e, t) {
  var n = e.callbackNode;
  rh(e, t);
  var r = ki(e, e === De ? $e : 0);
  if (r === 0)
    n !== null && Fu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Fu(n), t === 1))
      e.tag === 0 ? n0(Pc.bind(null, e)) : xf(Pc.bind(null, e)),
        Zh(function () {
          !(le & 6) && Nn();
        }),
        (n = null);
    else {
      switch (Kd(r)) {
        case 1:
          n = ks;
          break;
        case 4:
          n = Qd;
          break;
        case 16:
          n = xi;
          break;
        case 536870912:
          n = Yd;
          break;
        default:
          n = xi;
      }
      n = Sp(n, pp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function pp(e, t) {
  if (((mi = -1), (hi = 0), le & 6)) throw Error(P(327));
  var n = e.callbackNode;
  if (mr() && e.callbackNode !== n) return null;
  var r = ki(e, e === De ? $e : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ui(e, r);
  else {
    t = r;
    var o = le;
    le |= 2;
    var i = hp();
    (De !== e || $e !== t) && ((Ut = null), (kr = Ne() + 500), In(e, t));
    do
      try {
        C0();
        break;
      } catch (a) {
        mp(e, a);
      }
    while (1);
    zs(),
      (Fi.current = i),
      (le = o),
      Pe !== null ? (t = 0) : ((De = null), ($e = 0), (t = Te));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Ea(e)), o !== 0 && ((r = o), (t = Za(e, o)))), t === 1)
    )
      throw ((n = ko), In(e, 0), an(e, r), nt(e, Ne()), n);
    if (t === 6) an(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !x0(o) &&
          ((t = Ui(e, r)),
          t === 2 && ((i = Ea(e)), i !== 0 && ((r = i), (t = Za(e, i)))),
          t === 1))
      )
        throw ((n = ko), In(e, 0), an(e, r), nt(e, Ne()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          _n(e, Ze, Ut);
          break;
        case 3:
          if (
            (an(e, r), (r & 130023424) === r && ((t = Xs + 500 - Ne()), 10 < t))
          ) {
            if (ki(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ke(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Oa(_n.bind(null, e, Ze, Ut), t);
            break;
          }
          _n(e, Ze, Ut);
          break;
        case 4:
          if ((an(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - Rt(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Ne() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * S0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Oa(_n.bind(null, e, Ze, Ut), r);
            break;
          }
          _n(e, Ze, Ut);
          break;
        case 5:
          _n(e, Ze, Ut);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return nt(e, Ne()), e.callbackNode === n ? pp.bind(null, e) : null;
}
function Za(e, t) {
  var n = no;
  return (
    e.current.memoizedState.isDehydrated && (In(e, t).flags |= 256),
    (e = Ui(e, t)),
    e !== 2 && ((t = Ze), (Ze = n), t !== null && qa(t)),
    e
  );
}
function qa(e) {
  Ze === null ? (Ze = e) : Ze.push.apply(Ze, e);
}
function x0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!bt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function an(e, t) {
  for (
    t &= ~Ks,
      t &= ~ll,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Rt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Pc(e) {
  if (le & 6) throw Error(P(327));
  mr();
  var t = ki(e, 0);
  if (!(t & 1)) return nt(e, Ne()), null;
  var n = Ui(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ea(e);
    r !== 0 && ((t = r), (n = Za(e, r)));
  }
  if (n === 1) throw ((n = ko), In(e, 0), an(e, t), nt(e, Ne()), n);
  if (n === 6) throw Error(P(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    _n(e, Ze, Ut),
    nt(e, Ne()),
    null
  );
}
function Js(e, t) {
  var n = le;
  le |= 1;
  try {
    return e(t);
  } finally {
    (le = n), le === 0 && ((kr = Ne() + 500), nl && Nn());
  }
}
function jn(e) {
  un !== null && un.tag === 0 && !(le & 6) && mr();
  var t = le;
  le |= 1;
  var n = gt.transition,
    r = se;
  try {
    if (((gt.transition = null), (se = 1), e)) return e();
  } finally {
    (se = r), (gt.transition = n), (le = t), !(le & 6) && Nn();
  }
}
function Zs() {
  (ot = ar.current), ye(ar);
}
function In(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Jh(n)), Pe !== null))
    for (n = Pe.return; n !== null; ) {
      var r = n;
      switch ((Os(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ni();
          break;
        case 3:
          Sr(), ye(et), ye(Qe), js();
          break;
        case 5:
          Us(r);
          break;
        case 4:
          Sr();
          break;
        case 13:
          ye(ke);
          break;
        case 19:
          ye(ke);
          break;
        case 10:
          Ds(r.type._context);
          break;
        case 22:
        case 23:
          Zs();
      }
      n = n.return;
    }
  if (
    ((De = e),
    (Pe = e = yn(e.current, null)),
    ($e = ot = t),
    (Te = 0),
    (ko = null),
    (Ks = ll = Un = 0),
    (Ze = no = null),
    On !== null)
  ) {
    for (t = 0; t < On.length; t++)
      if (((n = On[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    On = null;
  }
  return e;
}
function mp(e, t) {
  do {
    var n = Pe;
    try {
      if ((zs(), (di.current = Di), zi)) {
        for (var r = Ce.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        zi = !1;
      }
      if (
        (($n = 0),
        (ze = Le = Ce = null),
        (eo = !1),
        (wo = 0),
        (Gs.current = null),
        n === null || n.return === null)
      ) {
        (Te = 1), (ko = t), (Pe = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          a = n,
          s = t;
        if (
          ((t = $e),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            p = a,
            m = p.tag;
          if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = p.alternate;
            h
              ? ((p.updateQueue = h.updateQueue),
                (p.memoizedState = h.memoizedState),
                (p.lanes = h.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var v = gc(l);
          if (v !== null) {
            (v.flags &= -257),
              vc(v, l, a, i, t),
              v.mode & 1 && hc(i, u, t),
              (t = v),
              (s = u);
            var g = t.updateQueue;
            if (g === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              hc(i, u, t), qs();
              break e;
            }
            s = Error(P(426));
          }
        } else if (we && a.mode & 1) {
          var A = gc(l);
          if (A !== null) {
            !(A.flags & 65536) && (A.flags |= 256),
              vc(A, l, a, i, t),
              Ts(xr(s, a));
            break e;
          }
        }
        (i = s = xr(s, a)),
          Te !== 4 && (Te = 2),
          no === null ? (no = [i]) : no.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = Jf(i, s, t);
              sc(i, f);
              break e;
            case 1:
              a = s;
              var c = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (gn === null || !gn.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var y = Zf(i, a, t);
                sc(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      vp(n);
    } catch (C) {
      (t = C), Pe === n && n !== null && (Pe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function hp() {
  var e = Fi.current;
  return (Fi.current = Di), e === null ? Di : e;
}
function qs() {
  (Te === 0 || Te === 3 || Te === 2) && (Te = 4),
    De === null || (!(Un & 268435455) && !(ll & 268435455)) || an(De, $e);
}
function Ui(e, t) {
  var n = le;
  le |= 2;
  var r = hp();
  (De !== e || $e !== t) && ((Ut = null), In(e, t));
  do
    try {
      k0();
      break;
    } catch (o) {
      mp(e, o);
    }
  while (1);
  if ((zs(), (le = n), (Fi.current = r), Pe !== null)) throw Error(P(261));
  return (De = null), ($e = 0), Te;
}
function k0() {
  for (; Pe !== null; ) gp(Pe);
}
function C0() {
  for (; Pe !== null && !Gm(); ) gp(Pe);
}
function gp(e) {
  var t = wp(e.alternate, e, ot);
  (e.memoizedProps = e.pendingProps),
    t === null ? vp(e) : (Pe = t),
    (Gs.current = null);
}
function vp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = g0(n, t)), n !== null)) {
        (n.flags &= 32767), (Pe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Te = 6), (Pe = null);
        return;
      }
    } else if (((n = h0(n, t, ot)), n !== null)) {
      Pe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Pe = t;
      return;
    }
    Pe = t = e;
  } while (t !== null);
  Te === 0 && (Te = 5);
}
function _n(e, t, n) {
  var r = se,
    o = gt.transition;
  try {
    (gt.transition = null), (se = 1), E0(e, t, n, r);
  } finally {
    (gt.transition = o), (se = r);
  }
  return null;
}
function E0(e, t, n, r) {
  do mr();
  while (un !== null);
  if (le & 6) throw Error(P(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (oh(e, i),
    e === De && ((Pe = De = null), ($e = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Zo ||
      ((Zo = !0),
      Sp(xi, function () {
        return mr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = gt.transition), (gt.transition = null);
    var l = se;
    se = 1;
    var a = le;
    (le |= 4),
      (Gs.current = null),
      y0(e, n),
      dp(n, e),
      Hh(_a),
      (Ci = !!Pa),
      (_a = Pa = null),
      (e.current = n),
      w0(n),
      Km(),
      (le = a),
      (se = l),
      (gt.transition = i);
  } else e.current = n;
  if (
    (Zo && ((Zo = !1), (un = e), ($i = o)),
    (i = e.pendingLanes),
    i === 0 && (gn = null),
    Zm(n.stateNode),
    nt(e, Ne()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Mi) throw ((Mi = !1), (e = Xa), (Xa = null), e);
  return (
    $i & 1 && e.tag !== 0 && mr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ja ? ro++ : ((ro = 0), (Ja = e))) : (ro = 0),
    Nn(),
    null
  );
}
function mr() {
  if (un !== null) {
    var e = Kd($i),
      t = gt.transition,
      n = se;
    try {
      if (((gt.transition = null), (se = 16 > e ? 16 : e), un === null))
        var r = !1;
      else {
        if (((e = un), (un = null), ($i = 0), le & 6)) throw Error(P(331));
        var o = le;
        for (le |= 4, $ = e.current; $ !== null; ) {
          var i = $,
            l = i.child;
          if ($.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for ($ = u; $ !== null; ) {
                  var p = $;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      to(8, p, i);
                  }
                  var m = p.child;
                  if (m !== null) (m.return = p), ($ = m);
                  else
                    for (; $ !== null; ) {
                      p = $;
                      var h = p.sibling,
                        v = p.return;
                      if ((sp(p), p === u)) {
                        $ = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = v), ($ = h);
                        break;
                      }
                      $ = v;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var w = g.child;
                if (w !== null) {
                  g.child = null;
                  do {
                    var A = w.sibling;
                    (w.sibling = null), (w = A);
                  } while (w !== null);
                }
              }
              $ = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), ($ = l);
          else
            e: for (; $ !== null; ) {
              if (((i = $), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    to(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), ($ = f);
                break e;
              }
              $ = i.return;
            }
        }
        var c = e.current;
        for ($ = c; $ !== null; ) {
          l = $;
          var d = l.child;
          if (l.subtreeFlags & 2064 && d !== null) (d.return = l), ($ = d);
          else
            e: for (l = c; $ !== null; ) {
              if (((a = $), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      il(9, a);
                  }
                } catch (C) {
                  Ae(a, a.return, C);
                }
              if (a === l) {
                $ = null;
                break e;
              }
              var y = a.sibling;
              if (y !== null) {
                (y.return = a.return), ($ = y);
                break e;
              }
              $ = a.return;
            }
        }
        if (
          ((le = o), Nn(), It && typeof It.onPostCommitFiberRoot == "function")
        )
          try {
            It.onPostCommitFiberRoot(Ji, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (se = n), (gt.transition = t);
    }
  }
  return !1;
}
function _c(e, t, n) {
  (t = xr(n, t)),
    (t = Jf(e, t, 1)),
    (e = hn(e, t, 1)),
    (t = Ke()),
    e !== null && (No(e, 1, t), nt(e, t));
}
function Ae(e, t, n) {
  if (e.tag === 3) _c(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        _c(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (gn === null || !gn.has(r)))
        ) {
          (e = xr(n, e)),
            (e = Zf(t, e, 1)),
            (t = hn(t, e, 1)),
            (e = Ke()),
            t !== null && (No(t, 1, e), nt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function A0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ke()),
    (e.pingedLanes |= e.suspendedLanes & n),
    De === e &&
      ($e & n) === n &&
      (Te === 4 || (Te === 3 && ($e & 130023424) === $e && 500 > Ne() - Xs)
        ? In(e, 0)
        : (Ks |= n)),
    nt(e, t);
}
function yp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Bo), (Bo <<= 1), !(Bo & 130023424) && (Bo = 4194304))
      : (t = 1));
  var n = Ke();
  (e = Gt(e, t)), e !== null && (No(e, t, n), nt(e, n));
}
function R0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), yp(e, n);
}
function N0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(P(314));
  }
  r !== null && r.delete(t), yp(e, n);
}
var wp;
wp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || et.current) qe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (qe = !1), m0(e, t, n);
      qe = !!(e.flags & 131072);
    }
  else (qe = !1), we && t.flags & 1048576 && kf(t, _i, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      pi(e, t), (e = t.pendingProps);
      var o = vr(t, Qe.current);
      pr(t, n), (o = Vs(null, t, r, e, o, n));
      var i = Hs();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            tt(r) ? ((i = !0), bi(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Ms(t),
            (o.updater = rl),
            (t.stateNode = o),
            (o._reactInternals = t),
            $a(t, r, e, n),
            (t = Ba(null, t, r, !0, i, n)))
          : ((t.tag = 0), we && i && Ls(t), Ge(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (pi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = P0(r)),
          (e = Ct(r, e)),
          o)
        ) {
          case 0:
            t = ja(null, t, r, e, n);
            break e;
          case 1:
            t = Sc(null, t, r, e, n);
            break e;
          case 11:
            t = yc(null, t, r, e, n);
            break e;
          case 14:
            t = wc(null, t, r, Ct(r.type, e), n);
            break e;
        }
        throw Error(P(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ct(r, o)),
        ja(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ct(r, o)),
        Sc(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((np(t), e === null)) throw Error(P(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Rf(e, t),
          Ti(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = xr(Error(P(423)), t)), (t = xc(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = xr(Error(P(424)), t)), (t = xc(e, t, r, n, o));
            break e;
          } else
            for (
              it = mn(t.stateNode.containerInfo.firstChild),
                lt = t,
                we = !0,
                At = null,
                n = _f(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((yr(), r === o)) {
            t = Kt(e, t, n);
            break e;
          }
          Ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Lf(t),
        e === null && Da(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        La(r, o) ? (l = null) : i !== null && La(r, i) && (t.flags |= 32),
        tp(e, t),
        Ge(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Da(t), null;
    case 13:
      return rp(e, t, n);
    case 4:
      return (
        $s(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = wr(t, null, r, n)) : Ge(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ct(r, o)),
        yc(e, t, r, o, n)
      );
    case 7:
      return Ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          me(Li, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (bt(i.value, l)) {
            if (i.children === o.children && !et.current) {
              t = Kt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                l = i.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Wt(-1, n & -n)), (s.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var p = u.pending;
                        p === null
                          ? (s.next = s)
                          : ((s.next = p.next), (p.next = s)),
                          (u.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Fa(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(P(341));
                (l.lanes |= n),
                  (a = l.alternate),
                  a !== null && (a.lanes |= n),
                  Fa(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        Ge(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        pr(t, n),
        (o = vt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ge(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Ct(r, t.pendingProps)),
        (o = Ct(r.type, o)),
        wc(e, t, r, o, n)
      );
    case 15:
      return qf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ct(r, o)),
        pi(e, t),
        (t.tag = 1),
        tt(r) ? ((e = !0), bi(t)) : (e = !1),
        pr(t, n),
        bf(t, r, o),
        $a(t, r, o, n),
        Ba(null, t, r, !0, e, n)
      );
    case 19:
      return op(e, t, n);
    case 22:
      return ep(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function Sp(e, t) {
  return Wd(e, t);
}
function b0(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function mt(e, t, n, r) {
  return new b0(e, t, n, r);
}
function eu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function P0(e) {
  if (typeof e == "function") return eu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ws)) return 11;
    if (e === Ss) return 14;
  }
  return 2;
}
function yn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = mt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function gi(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) eu(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Jn:
        return zn(n.children, o, i, t);
      case ys:
        (l = 8), (o |= 8);
        break;
      case ua:
        return (
          (e = mt(12, n, t, o | 2)), (e.elementType = ua), (e.lanes = i), e
        );
      case ca:
        return (e = mt(13, n, t, o)), (e.elementType = ca), (e.lanes = i), e;
      case da:
        return (e = mt(19, n, t, o)), (e.elementType = da), (e.lanes = i), e;
      case bd:
        return al(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Rd:
              l = 10;
              break e;
            case Nd:
              l = 9;
              break e;
            case ws:
              l = 11;
              break e;
            case Ss:
              l = 14;
              break e;
            case rn:
              (l = 16), (r = null);
              break e;
          }
        throw Error(P(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = mt(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function zn(e, t, n, r) {
  return (e = mt(7, e, r, t)), (e.lanes = n), e;
}
function al(e, t, n, r) {
  return (
    (e = mt(22, e, r, t)),
    (e.elementType = bd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ta(e, t, n) {
  return (e = mt(6, e, null, t)), (e.lanes = n), e;
}
function na(e, t, n) {
  return (
    (t = mt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function _0(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Dl(0)),
    (this.expirationTimes = Dl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Dl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function tu(e, t, n, r, o, i, l, a, s) {
  return (
    (e = new _0(e, t, n, a, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = mt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ms(i),
    e
  );
}
function L0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Xn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function xp(e) {
  if (!e) return kn;
  e = e._reactInternals;
  e: {
    if (Qn(e) !== e || e.tag !== 1) throw Error(P(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (tt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (tt(n)) return Sf(e, n, t);
  }
  return t;
}
function kp(e, t, n, r, o, i, l, a, s) {
  return (
    (e = tu(n, r, !0, e, o, i, l, a, s)),
    (e.context = xp(null)),
    (n = e.current),
    (r = Ke()),
    (o = vn(n)),
    (i = Wt(r, o)),
    (i.callback = t ?? null),
    hn(n, i, o),
    (e.current.lanes = o),
    No(e, o, r),
    nt(e, r),
    e
  );
}
function sl(e, t, n, r) {
  var o = t.current,
    i = Ke(),
    l = vn(o);
  return (
    (n = xp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Wt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = hn(o, t, l)),
    e !== null && (Nt(e, o, l, i), ci(e, o, l)),
    l
  );
}
function ji(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Lc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function nu(e, t) {
  Lc(e, t), (e = e.alternate) && Lc(e, t);
}
function O0() {
  return null;
}
var Cp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ru(e) {
  this._internalRoot = e;
}
ul.prototype.render = ru.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  sl(e, t, null, null);
};
ul.prototype.unmount = ru.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    jn(function () {
      sl(null, e, null, null);
    }),
      (t[Yt] = null);
  }
};
function ul(e) {
  this._internalRoot = e;
}
ul.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Zd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ln.length && t !== 0 && t < ln[n].priority; n++);
    ln.splice(n, 0, e), n === 0 && ef(e);
  }
};
function ou(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function cl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Oc() {}
function T0(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = ji(l);
        i.call(u);
      };
    }
    var l = kp(t, r, e, 0, null, !1, !1, "", Oc);
    return (
      (e._reactRootContainer = l),
      (e[Yt] = l.current),
      mo(e.nodeType === 8 ? e.parentNode : e),
      jn(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = ji(s);
      a.call(u);
    };
  }
  var s = tu(e, 0, !1, null, null, !1, !1, "", Oc);
  return (
    (e._reactRootContainer = s),
    (e[Yt] = s.current),
    mo(e.nodeType === 8 ? e.parentNode : e),
    jn(function () {
      sl(t, s, n, r);
    }),
    s
  );
}
function dl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var s = ji(l);
        a.call(s);
      };
    }
    sl(t, l, e, o);
  } else l = T0(n, t, e, o, r);
  return ji(l);
}
Xd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Qr(t.pendingLanes);
        n !== 0 &&
          (Cs(t, n | 1), nt(t, Ne()), !(le & 6) && ((kr = Ne() + 500), Nn()));
      }
      break;
    case 13:
      jn(function () {
        var r = Gt(e, 1);
        if (r !== null) {
          var o = Ke();
          Nt(r, e, 1, o);
        }
      }),
        nu(e, 1);
  }
};
Es = function (e) {
  if (e.tag === 13) {
    var t = Gt(e, 134217728);
    if (t !== null) {
      var n = Ke();
      Nt(t, e, 134217728, n);
    }
    nu(e, 134217728);
  }
};
Jd = function (e) {
  if (e.tag === 13) {
    var t = vn(e),
      n = Gt(e, t);
    if (n !== null) {
      var r = Ke();
      Nt(n, e, t, r);
    }
    nu(e, t);
  }
};
Zd = function () {
  return se;
};
qd = function (e, t) {
  var n = se;
  try {
    return (se = e), t();
  } finally {
    se = n;
  }
};
xa = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ma(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = tl(r);
            if (!o) throw Error(P(90));
            _d(r), ma(r, o);
          }
        }
      }
      break;
    case "textarea":
      Od(e, n);
      break;
    case "select":
      (t = n.value), t != null && ur(e, !!n.multiple, t, !1);
  }
};
$d = Js;
Ud = jn;
var I0 = { usingClientEntryPoint: !1, Events: [Po, tr, tl, Fd, Md, Js] },
  Vr = {
    findFiberByHostInstance: Ln,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  z0 = {
    bundleType: Vr.bundleType,
    version: Vr.version,
    rendererPackageName: Vr.rendererPackageName,
    rendererConfig: Vr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Zt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Vd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Vr.findFiberByHostInstance || O0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var qo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!qo.isDisabled && qo.supportsFiber)
    try {
      (Ji = qo.inject(z0)), (It = qo);
    } catch {}
}
ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I0;
ut.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ou(t)) throw Error(P(200));
  return L0(e, t, null, n);
};
ut.createRoot = function (e, t) {
  if (!ou(e)) throw Error(P(299));
  var n = !1,
    r = "",
    o = Cp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = tu(e, 1, !1, null, null, n, !1, r, o)),
    (e[Yt] = t.current),
    mo(e.nodeType === 8 ? e.parentNode : e),
    new ru(t)
  );
};
ut.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(P(188))
      : ((e = Object.keys(e).join(",")), Error(P(268, e)));
  return (e = Vd(t)), (e = e === null ? null : e.stateNode), e;
};
ut.flushSync = function (e) {
  return jn(e);
};
ut.hydrate = function (e, t, n) {
  if (!cl(t)) throw Error(P(200));
  return dl(null, e, t, !0, n);
};
ut.hydrateRoot = function (e, t, n) {
  if (!ou(e)) throw Error(P(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = Cp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = kp(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[Yt] = t.current),
    mo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ul(t);
};
ut.render = function (e, t, n) {
  if (!cl(t)) throw Error(P(200));
  return dl(null, e, t, !1, n);
};
ut.unmountComponentAtNode = function (e) {
  if (!cl(e)) throw Error(P(40));
  return e._reactRootContainer
    ? (jn(function () {
        dl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Yt] = null);
        });
      }),
      !0)
    : !1;
};
ut.unstable_batchedUpdates = Js;
ut.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!cl(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return dl(e, t, n, !1, r);
};
ut.version = "18.2.0-next-9e3b772b8-20220608";
function Ep() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ep);
    } catch (e) {
      console.error(e);
    }
}
Ep(), (pd.exports = ut);
var D0 = pd.exports,
  Tc = D0;
(aa.createRoot = Tc.createRoot), (aa.hydrateRoot = Tc.hydrateRoot);
const Ap = (e, t) => {
    const n = x.useRef(t);
    x.useEffect(() => {
      n.current = t;
      const r = (o) => {
        const { action: i, data: l } = o.data;
        n.current && i === e && n.current(l);
      };
      return (
        window.addEventListener("message", r),
        () => {
          window.removeEventListener("message", r);
        }
      );
    }, [e, t]);
  },
  Rp = () => !window.invokeNative,
  Xt = async (e, t, n) => {
    const r = {
      method: "post",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(t),
    };
    if (Rp() && n) return n;
    const o = window.GetParentResourceName
        ? window.GetParentResourceName()
        : "decrypt-store",
      i = await fetch(`https://${o}/${e}`, r);
    if (!i.ok)
      throw new Error(
        `Erro ao fazer chamada da API: ${i.status} - ${i.statusText}`
      );
    return await i.json();
  };
/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Co() {
  return (
    (Co = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Co.apply(this, arguments)
  );
}
var cn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(cn || (cn = {}));
const Ic = "popstate";
function F0(e) {
  e === void 0 && (e = {});
  function t(o, i) {
    let {
      pathname: l = "/",
      search: a = "",
      hash: s = "",
    } = Yn(o.location.hash.substr(1));
    return (
      !l.startsWith("/") && !l.startsWith(".") && (l = "/" + l),
      es(
        "",
        { pathname: l, search: a, hash: s },
        (i.state && i.state.usr) || null,
        (i.state && i.state.key) || "default"
      )
    );
  }
  function n(o, i) {
    let l = o.document.querySelector("base"),
      a = "";
    if (l && l.getAttribute("href")) {
      let s = o.location.href,
        u = s.indexOf("#");
      a = u === -1 ? s : s.slice(0, u);
    }
    return a + "#" + (typeof i == "string" ? i : Bi(i));
  }
  function r(o, i) {
    fl(
      o.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(i) +
        ")"
    );
  }
  return $0(t, n, r, e);
}
function _e(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function fl(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function M0() {
  return Math.random().toString(36).substr(2, 8);
}
function zc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function es(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Co(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Yn(t) : t,
      { state: n, key: (t && t.key) || r || M0() }
    )
  );
}
function Bi(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Yn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function $0(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    l = o.history,
    a = cn.Pop,
    s = null,
    u = p();
  u == null && ((u = 0), l.replaceState(Co({}, l.state, { idx: u }), ""));
  function p() {
    return (l.state || { idx: null }).idx;
  }
  function m() {
    a = cn.Pop;
    let A = p(),
      f = A == null ? null : A - u;
    (u = A), s && s({ action: a, location: w.location, delta: f });
  }
  function h(A, f) {
    a = cn.Push;
    let c = es(w.location, A, f);
    n && n(c, A), (u = p() + 1);
    let d = zc(c, u),
      y = w.createHref(c);
    try {
      l.pushState(d, "", y);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      o.location.assign(y);
    }
    i && s && s({ action: a, location: w.location, delta: 1 });
  }
  function v(A, f) {
    a = cn.Replace;
    let c = es(w.location, A, f);
    n && n(c, A), (u = p());
    let d = zc(c, u),
      y = w.createHref(c);
    l.replaceState(d, "", y),
      i && s && s({ action: a, location: w.location, delta: 0 });
  }
  function g(A) {
    let f = o.location.origin !== "null" ? o.location.origin : o.location.href,
      c = typeof A == "string" ? A : Bi(A);
    return (
      _e(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, f)
    );
  }
  let w = {
    get action() {
      return a;
    },
    get location() {
      return e(o, l);
    },
    listen(A) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Ic, m),
        (s = A),
        () => {
          o.removeEventListener(Ic, m), (s = null);
        }
      );
    },
    createHref(A) {
      return t(o, A);
    },
    createURL: g,
    encodeLocation(A) {
      let f = g(A);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: h,
    replace: v,
    go(A) {
      return l.go(A);
    },
  };
  return w;
}
var Dc;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Dc || (Dc = {}));
function U0(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Yn(t) : t,
    o = iu(r.pathname || "/", n);
  if (o == null) return null;
  let i = Np(e);
  j0(i);
  let l = null;
  for (let a = 0; l == null && a < i.length; ++a) l = X0(i[a], q0(o));
  return l;
}
function Np(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, l, a) => {
    let s = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i,
    };
    s.relativePath.startsWith("/") &&
      (_e(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = wn([r, s.relativePath]),
      p = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (_e(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Np(i.children, t, p, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: G0(u, i.index), routesMeta: p });
  };
  return (
    e.forEach((i, l) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, l);
      else for (let s of bp(i.path)) o(i, l, s);
    }),
    t
  );
}
function bp(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let l = bp(r.join("/")),
    a = [];
  return (
    a.push(...l.map((s) => (s === "" ? i : [i, s].join("/")))),
    o && a.push(...l),
    a.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function j0(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : K0(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const B0 = /^:\w+$/,
  V0 = 3,
  H0 = 2,
  W0 = 1,
  Q0 = 10,
  Y0 = -2,
  Fc = (e) => e === "*";
function G0(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Fc) && (r += Y0),
    t && (r += H0),
    n
      .filter((o) => !Fc(o))
      .reduce((o, i) => o + (B0.test(i) ? V0 : i === "" ? W0 : Q0), r)
  );
}
function K0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function X0(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let l = 0; l < n.length; ++l) {
    let a = n[l],
      s = l === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      p = J0(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: s },
        u
      );
    if (!p) return null;
    Object.assign(r, p.params);
    let m = a.route;
    i.push({
      params: r,
      pathname: wn([o, p.pathname]),
      pathnameBase: rg(wn([o, p.pathnameBase])),
      route: m,
    }),
      p.pathnameBase !== "/" && (o = wn([o, p.pathnameBase]));
  }
  return i;
}
function J0(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Z0(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    l = i.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((u, p, m) => {
      if (p === "*") {
        let h = a[m] || "";
        l = i.slice(0, i.length - h.length).replace(/(.)\/+$/, "$1");
      }
      return (u[p] = eg(a[m] || "", p)), u;
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e,
  };
}
function Z0(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    fl(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (l, a) => (r.push(a), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function q0(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      fl(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function eg(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      fl(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function iu(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function tg(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Yn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : ng(n, t)) : t,
    search: og(r),
    hash: ig(o),
  };
}
function ng(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ra(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Pp(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function _p(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Yn(e))
    : ((o = Co({}, e)),
      _e(
        !o.pathname || !o.pathname.includes("?"),
        ra("?", "pathname", "search", o)
      ),
      _e(
        !o.pathname || !o.pathname.includes("#"),
        ra("#", "pathname", "hash", o)
      ),
      _e(!o.search || !o.search.includes("#"), ra("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    l = i ? "/" : o.pathname,
    a;
  if (r || l == null) a = n;
  else {
    let m = t.length - 1;
    if (l.startsWith("..")) {
      let h = l.split("/");
      for (; h[0] === ".."; ) h.shift(), (m -= 1);
      o.pathname = h.join("/");
    }
    a = m >= 0 ? t[m] : "/";
  }
  let s = tg(o, a),
    u = l && l !== "/" && l.endsWith("/"),
    p = (i || l === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (u || p) && (s.pathname += "/"), s;
}
const wn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  rg = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  og = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  ig = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function lg(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Lp = ["post", "put", "patch", "delete"];
new Set(Lp);
const ag = ["get", ...Lp];
new Set(ag);
/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Vi() {
  return (
    (Vi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Vi.apply(this, arguments)
  );
}
const lu = x.createContext(null),
  sg = x.createContext(null),
  Pr = x.createContext(null),
  pl = x.createContext(null),
  Gn = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Op = x.createContext(null);
function ug(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Lo() || _e(!1);
  let { basename: r, navigator: o } = x.useContext(Pr),
    { hash: i, pathname: l, search: a } = zp(e, { relative: n }),
    s = l;
  return (
    r !== "/" && (s = l === "/" ? r : wn([r, l])),
    o.createHref({ pathname: s, search: a, hash: i })
  );
}
function Lo() {
  return x.useContext(pl) != null;
}
function ml() {
  return Lo() || _e(!1), x.useContext(pl).location;
}
function Tp(e) {
  x.useContext(Pr).static || x.useLayoutEffect(e);
}
function Ip() {
  let { isDataRoute: e } = x.useContext(Gn);
  return e ? kg() : cg();
}
function cg() {
  Lo() || _e(!1);
  let e = x.useContext(lu),
    { basename: t, navigator: n } = x.useContext(Pr),
    { matches: r } = x.useContext(Gn),
    { pathname: o } = ml(),
    i = JSON.stringify(Pp(r).map((s) => s.pathnameBase)),
    l = x.useRef(!1);
  return (
    Tp(() => {
      l.current = !0;
    }),
    x.useCallback(
      function (s, u) {
        if ((u === void 0 && (u = {}), !l.current)) return;
        if (typeof s == "number") {
          n.go(s);
          return;
        }
        let p = _p(s, JSON.parse(i), o, u.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : wn([t, p.pathname])),
          (u.replace ? n.replace : n.push)(p, u.state, u);
      },
      [t, n, i, o, e]
    )
  );
}
function zp(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = x.useContext(Gn),
    { pathname: o } = ml(),
    i = JSON.stringify(Pp(r).map((l) => l.pathnameBase));
  return x.useMemo(() => _p(e, JSON.parse(i), o, n === "path"), [e, i, o, n]);
}
function dg(e, t) {
  return fg(e, t);
}
function fg(e, t, n) {
  Lo() || _e(!1);
  let { navigator: r } = x.useContext(Pr),
    { matches: o } = x.useContext(Gn),
    i = o[o.length - 1],
    l = i ? i.params : {};
  i && i.pathname;
  let a = i ? i.pathnameBase : "/";
  i && i.route;
  let s = ml(),
    u;
  if (t) {
    var p;
    let w = typeof t == "string" ? Yn(t) : t;
    a === "/" || ((p = w.pathname) != null && p.startsWith(a)) || _e(!1),
      (u = w);
  } else u = s;
  let m = u.pathname || "/",
    h = a === "/" ? m : m.slice(a.length) || "/",
    v = U0(e, { pathname: h }),
    g = vg(
      v &&
        v.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, l, w.params),
            pathname: wn([
              a,
              r.encodeLocation
                ? r.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? a
                : wn([
                    a,
                    r.encodeLocation
                      ? r.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      o,
      n
    );
  return t && g
    ? x.createElement(
        pl.Provider,
        {
          value: {
            location: Vi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: cn.Pop,
          },
        },
        g
      )
    : g;
}
function pg() {
  let e = xg(),
    t = lg(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    i = null;
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: o }, n) : null,
    i
  );
}
const mg = x.createElement(pg, null);
class hg extends x.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? x.createElement(
          Gn.Provider,
          { value: this.props.routeContext },
          x.createElement(Op.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function gg(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = x.useContext(lu);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(Gn.Provider, { value: t }, r)
  );
}
function vg(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    l = (r = n) == null ? void 0 : r.errors;
  if (l != null) {
    let a = i.findIndex(
      (s) => s.route.id && (l == null ? void 0 : l[s.route.id])
    );
    a >= 0 || _e(!1), (i = i.slice(0, Math.min(i.length, a + 1)));
  }
  return i.reduceRight((a, s, u) => {
    let p = s.route.id ? (l == null ? void 0 : l[s.route.id]) : null,
      m = null;
    n && (m = s.route.errorElement || mg);
    let h = t.concat(i.slice(0, u + 1)),
      v = () => {
        let g;
        return (
          p
            ? (g = m)
            : s.route.Component
            ? (g = x.createElement(s.route.Component, null))
            : s.route.element
            ? (g = s.route.element)
            : (g = a),
          x.createElement(gg, {
            match: s,
            routeContext: { outlet: a, matches: h, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (s.route.ErrorBoundary || s.route.errorElement || u === 0)
      ? x.createElement(hg, {
          location: n.location,
          revalidation: n.revalidation,
          component: m,
          error: p,
          children: v(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : v();
  }, null);
}
var Dp = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Dp || {}),
  Hi = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Hi || {});
function yg(e) {
  let t = x.useContext(lu);
  return t || _e(!1), t;
}
function wg(e) {
  let t = x.useContext(sg);
  return t || _e(!1), t;
}
function Sg(e) {
  let t = x.useContext(Gn);
  return t || _e(!1), t;
}
function Fp(e) {
  let t = Sg(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || _e(!1), n.route.id;
}
function xg() {
  var e;
  let t = x.useContext(Op),
    n = wg(Hi.UseRouteError),
    r = Fp(Hi.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function kg() {
  let { router: e } = yg(Dp.UseNavigateStable),
    t = Fp(Hi.UseNavigateStable),
    n = x.useRef(!1);
  return (
    Tp(() => {
      n.current = !0;
    }),
    x.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, Vi({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function Gr(e) {
  _e(!1);
}
function Cg(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = cn.Pop,
    navigator: i,
    static: l = !1,
  } = e;
  Lo() && _e(!1);
  let a = t.replace(/^\/*/, "/"),
    s = x.useMemo(() => ({ basename: a, navigator: i, static: l }), [a, i, l]);
  typeof r == "string" && (r = Yn(r));
  let {
      pathname: u = "/",
      search: p = "",
      hash: m = "",
      state: h = null,
      key: v = "default",
    } = r,
    g = x.useMemo(() => {
      let w = iu(u, a);
      return w == null
        ? null
        : {
            location: { pathname: w, search: p, hash: m, state: h, key: v },
            navigationType: o,
          };
    }, [a, u, p, m, h, v, o]);
  return g == null
    ? null
    : x.createElement(
        Pr.Provider,
        { value: s },
        x.createElement(pl.Provider, { children: n, value: g })
      );
}
function Eg(e) {
  let { children: t, location: n } = e;
  return dg(ts(t), n);
}
new Promise(() => {});
function ts(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, o) => {
      if (!x.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === x.Fragment) {
        n.push.apply(n, ts(r.props.children, i));
        return;
      }
      r.type !== Gr && _e(!1), !r.props.index || !r.props.children || _e(!1);
      let l = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (l.children = ts(r.props.children, i)), n.push(l);
    }),
    n
  );
}
/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ns() {
  return (
    (ns = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ns.apply(this, arguments)
  );
}
function Ag(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Rg(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Ng(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Rg(e);
}
const bg = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  Pg = "startTransition",
  Mc = Om[Pg];
function _g(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = x.useRef();
  i.current == null && (i.current = F0({ window: o, v5Compat: !0 }));
  let l = i.current,
    [a, s] = x.useState({ action: l.action, location: l.location }),
    { v7_startTransition: u } = r || {},
    p = x.useCallback(
      (m) => {
        u && Mc ? Mc(() => s(m)) : s(m);
      },
      [s, u]
    );
  return (
    x.useLayoutEffect(() => l.listen(p), [l, p]),
    x.createElement(Cg, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: l,
    })
  );
}
const Lg =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Og = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ei = x.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: l,
        state: a,
        target: s,
        to: u,
        preventScrollReset: p,
      } = t,
      m = Ag(t, bg),
      { basename: h } = x.useContext(Pr),
      v,
      g = !1;
    if (typeof u == "string" && Og.test(u) && ((v = u), Lg))
      try {
        let c = new URL(window.location.href),
          d = u.startsWith("//") ? new URL(c.protocol + u) : new URL(u),
          y = iu(d.pathname, h);
        d.origin === c.origin && y != null
          ? (u = y + d.search + d.hash)
          : (g = !0);
      } catch {}
    let w = ug(u, { relative: o }),
      A = Tg(u, {
        replace: l,
        state: a,
        target: s,
        preventScrollReset: p,
        relative: o,
      });
    function f(c) {
      r && r(c), c.defaultPrevented || A(c);
    }
    return x.createElement(
      "a",
      ns({}, m, { href: v || w, onClick: g || i ? r : f, ref: n, target: s })
    );
  });
var $c;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})($c || ($c = {}));
var Uc;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Uc || (Uc = {}));
function Tg(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: l,
    } = t === void 0 ? {} : t,
    a = Ip(),
    s = ml(),
    u = zp(e, { relative: l });
  return x.useCallback(
    (p) => {
      if (Ng(p, n)) {
        p.preventDefault();
        let m = r !== void 0 ? r : Bi(s) === Bi(u);
        a(e, { replace: m, state: o, preventScrollReset: i, relative: l });
      }
    },
    [s, a, u, r, o, n, e, i, l]
  );
}
var Mp = { exports: {} },
  hl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ig = x,
  zg = Symbol.for("react.element"),
  Dg = Symbol.for("react.fragment"),
  Fg = Object.prototype.hasOwnProperty,
  Mg = Ig.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  $g = { key: !0, ref: !0, __self: !0, __source: !0 };
function $p(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) Fg.call(t, r) && !$g.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: zg,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Mg.current,
  };
}
hl.Fragment = Dg;
hl.jsx = $p;
hl.jsxs = $p;
Mp.exports = hl;
var au = Mp.exports;
const S = au.jsx,
  N = au.jsxs,
  Bt = au.Fragment,
  Up = x.createContext(null),
  Ug = ({ children: e }) => {
    const [t, n] = x.useState(!1),
      r = Ip();
    Ap("setVisible", n);
    const o = () => {
      Rp() ? n((i) => !i) : (Xt("close"), n(!1));
    };
    return (
      x.useEffect(() => {
        const i = (l) => {
          l.code === "Escape" && (o(), r("/"));
        };
        return (
          window.addEventListener("keydown", i),
          () => window.removeEventListener("keydown", i)
        );
      }, []),
      S(Up.Provider, { value: { visible: t, setVisible: n }, children: e })
    );
  },
  jg = () => {
    const e = x.useContext(Up);
    if (!e)
      throw new Error("useVisibility must be used within a VisibilityProvider");
    return e;
  };
var jp = { exports: {} },
  ue = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fe = typeof Symbol == "function" && Symbol.for,
  su = Fe ? Symbol.for("react.element") : 60103,
  uu = Fe ? Symbol.for("react.portal") : 60106,
  gl = Fe ? Symbol.for("react.fragment") : 60107,
  vl = Fe ? Symbol.for("react.strict_mode") : 60108,
  yl = Fe ? Symbol.for("react.profiler") : 60114,
  wl = Fe ? Symbol.for("react.provider") : 60109,
  Sl = Fe ? Symbol.for("react.context") : 60110,
  cu = Fe ? Symbol.for("react.async_mode") : 60111,
  xl = Fe ? Symbol.for("react.concurrent_mode") : 60111,
  kl = Fe ? Symbol.for("react.forward_ref") : 60112,
  Cl = Fe ? Symbol.for("react.suspense") : 60113,
  Bg = Fe ? Symbol.for("react.suspense_list") : 60120,
  El = Fe ? Symbol.for("react.memo") : 60115,
  Al = Fe ? Symbol.for("react.lazy") : 60116,
  Vg = Fe ? Symbol.for("react.block") : 60121,
  Hg = Fe ? Symbol.for("react.fundamental") : 60117,
  Wg = Fe ? Symbol.for("react.responder") : 60118,
  Qg = Fe ? Symbol.for("react.scope") : 60119;
function dt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case su:
        switch (((e = e.type), e)) {
          case cu:
          case xl:
          case gl:
          case yl:
          case vl:
          case Cl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Sl:
              case kl:
              case Al:
              case El:
              case wl:
                return e;
              default:
                return t;
            }
        }
      case uu:
        return t;
    }
  }
}
function Bp(e) {
  return dt(e) === xl;
}
ue.AsyncMode = cu;
ue.ConcurrentMode = xl;
ue.ContextConsumer = Sl;
ue.ContextProvider = wl;
ue.Element = su;
ue.ForwardRef = kl;
ue.Fragment = gl;
ue.Lazy = Al;
ue.Memo = El;
ue.Portal = uu;
ue.Profiler = yl;
ue.StrictMode = vl;
ue.Suspense = Cl;
ue.isAsyncMode = function (e) {
  return Bp(e) || dt(e) === cu;
};
ue.isConcurrentMode = Bp;
ue.isContextConsumer = function (e) {
  return dt(e) === Sl;
};
ue.isContextProvider = function (e) {
  return dt(e) === wl;
};
ue.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === su;
};
ue.isForwardRef = function (e) {
  return dt(e) === kl;
};
ue.isFragment = function (e) {
  return dt(e) === gl;
};
ue.isLazy = function (e) {
  return dt(e) === Al;
};
ue.isMemo = function (e) {
  return dt(e) === El;
};
ue.isPortal = function (e) {
  return dt(e) === uu;
};
ue.isProfiler = function (e) {
  return dt(e) === yl;
};
ue.isStrictMode = function (e) {
  return dt(e) === vl;
};
ue.isSuspense = function (e) {
  return dt(e) === Cl;
};
ue.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === gl ||
    e === xl ||
    e === yl ||
    e === vl ||
    e === Cl ||
    e === Bg ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Al ||
        e.$$typeof === El ||
        e.$$typeof === wl ||
        e.$$typeof === Sl ||
        e.$$typeof === kl ||
        e.$$typeof === Hg ||
        e.$$typeof === Wg ||
        e.$$typeof === Qg ||
        e.$$typeof === Vg))
  );
};
ue.typeOf = dt;
jp.exports = ue;
var du = jp.exports;
function Yg(e) {
  function t(_, I, z, W, k) {
    for (
      var K = 0,
        T = 0,
        ie = 0,
        ne = 0,
        re,
        Q,
        xe = 0,
        be = 0,
        X,
        Re = (X = re = 0),
        q = 0,
        fe = 0,
        St = 0,
        ge = 0,
        xt = z.length,
        je = xt - 1,
        Ie,
        V = "",
        pe = "",
        Ft = "",
        en = "",
        rt;
      q < xt;

    ) {
      if (
        ((Q = z.charCodeAt(q)),
        q === je &&
          T + ne + ie + K !== 0 &&
          (T !== 0 && (Q = T === 47 ? 10 : 47), (ne = ie = K = 0), xt++, je++),
        T + ne + ie + K === 0)
      ) {
        if (
          q === je &&
          (0 < fe && (V = V.replace(h, "")), 0 < V.trim().length)
        ) {
          switch (Q) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              V += z.charAt(q);
          }
          Q = 59;
        }
        switch (Q) {
          case 123:
            for (
              V = V.trim(), re = V.charCodeAt(0), X = 1, ge = ++q;
              q < xt;

            ) {
              switch ((Q = z.charCodeAt(q))) {
                case 123:
                  X++;
                  break;
                case 125:
                  X--;
                  break;
                case 47:
                  switch ((Q = z.charCodeAt(q + 1))) {
                    case 42:
                    case 47:
                      e: {
                        for (Re = q + 1; Re < je; ++Re)
                          switch (z.charCodeAt(Re)) {
                            case 47:
                              if (
                                Q === 42 &&
                                z.charCodeAt(Re - 1) === 42 &&
                                q + 2 !== Re
                              ) {
                                q = Re + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (Q === 47) {
                                q = Re + 1;
                                break e;
                              }
                          }
                        q = Re;
                      }
                  }
                  break;
                case 91:
                  Q++;
                case 40:
                  Q++;
                case 34:
                case 39:
                  for (; q++ < je && z.charCodeAt(q) !== Q; );
              }
              if (X === 0) break;
              q++;
            }
            switch (
              ((X = z.substring(ge, q)),
              re === 0 && (re = (V = V.replace(m, "").trim()).charCodeAt(0)),
              re)
            ) {
              case 64:
                switch (
                  (0 < fe && (V = V.replace(h, "")), (Q = V.charCodeAt(1)), Q)
                ) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    fe = I;
                    break;
                  default:
                    fe = he;
                }
                if (
                  ((X = t(I, fe, X, Q, k + 1)),
                  (ge = X.length),
                  0 < L &&
                    ((fe = n(he, V, St)),
                    (rt = a(3, X, fe, I, oe, H, ge, Q, k, W)),
                    (V = fe.join("")),
                    rt !== void 0 &&
                      (ge = (X = rt.trim()).length) === 0 &&
                      ((Q = 0), (X = ""))),
                  0 < ge)
                )
                  switch (Q) {
                    case 115:
                      V = V.replace(E, l);
                    case 100:
                    case 109:
                    case 45:
                      X = V + "{" + X + "}";
                      break;
                    case 107:
                      (V = V.replace(c, "$1 $2")),
                        (X = V + "{" + X + "}"),
                        (X =
                          Z === 1 || (Z === 2 && i("@" + X, 3))
                            ? "@-webkit-" + X + "@" + X
                            : "@" + X);
                      break;
                    default:
                      (X = V + X), W === 112 && (X = ((pe += X), ""));
                  }
                else X = "";
                break;
              default:
                X = t(I, n(I, V, St), X, W, k + 1);
            }
            (Ft += X),
              (X = St = fe = Re = re = 0),
              (V = ""),
              (Q = z.charCodeAt(++q));
            break;
          case 125:
          case 59:
            if (
              ((V = (0 < fe ? V.replace(h, "") : V).trim()),
              1 < (ge = V.length))
            )
              switch (
                (Re === 0 &&
                  ((re = V.charCodeAt(0)),
                  re === 45 || (96 < re && 123 > re)) &&
                  (ge = (V = V.replace(" ", ":")).length),
                0 < L &&
                  (rt = a(1, V, I, _, oe, H, pe.length, W, k, W)) !== void 0 &&
                  (ge = (V = rt.trim()).length) === 0 &&
                  (V = "\0\0"),
                (re = V.charCodeAt(0)),
                (Q = V.charCodeAt(1)),
                re)
              ) {
                case 0:
                  break;
                case 64:
                  if (Q === 105 || Q === 99) {
                    en += V + z.charAt(q);
                    break;
                  }
                default:
                  V.charCodeAt(ge - 1) !== 58 &&
                    (pe += o(V, re, Q, V.charCodeAt(2)));
              }
            (St = fe = Re = re = 0), (V = ""), (Q = z.charCodeAt(++q));
        }
      }
      switch (Q) {
        case 13:
        case 10:
          T === 47
            ? (T = 0)
            : 1 + re === 0 &&
              W !== 107 &&
              0 < V.length &&
              ((fe = 1), (V += "\0")),
            0 < L * B && a(0, V, I, _, oe, H, pe.length, W, k, W),
            (H = 1),
            oe++;
          break;
        case 59:
        case 125:
          if (T + ne + ie + K === 0) {
            H++;
            break;
          }
        default:
          switch ((H++, (Ie = z.charAt(q)), Q)) {
            case 9:
            case 32:
              if (ne + K + T === 0)
                switch (xe) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Ie = "";
                    break;
                  default:
                    Q !== 32 && (Ie = " ");
                }
              break;
            case 0:
              Ie = "\\0";
              break;
            case 12:
              Ie = "\\f";
              break;
            case 11:
              Ie = "\\v";
              break;
            case 38:
              ne + T + K === 0 && ((fe = St = 1), (Ie = "\f" + Ie));
              break;
            case 108:
              if (ne + T + K + Y === 0 && 0 < Re)
                switch (q - Re) {
                  case 2:
                    xe === 112 && z.charCodeAt(q - 3) === 58 && (Y = xe);
                  case 8:
                    be === 111 && (Y = be);
                }
              break;
            case 58:
              ne + T + K === 0 && (Re = q);
              break;
            case 44:
              T + ie + ne + K === 0 && ((fe = 1), (Ie += "\r"));
              break;
            case 34:
            case 39:
              T === 0 && (ne = ne === Q ? 0 : ne === 0 ? Q : ne);
              break;
            case 91:
              ne + T + ie === 0 && K++;
              break;
            case 93:
              ne + T + ie === 0 && K--;
              break;
            case 41:
              ne + T + K === 0 && ie--;
              break;
            case 40:
              if (ne + T + K === 0) {
                if (re === 0)
                  switch (2 * xe + 3 * be) {
                    case 533:
                      break;
                    default:
                      re = 1;
                  }
                ie++;
              }
              break;
            case 64:
              T + ie + ne + K + Re + X === 0 && (X = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ne + K + ie))
                switch (T) {
                  case 0:
                    switch (2 * Q + 3 * z.charCodeAt(q + 1)) {
                      case 235:
                        T = 47;
                        break;
                      case 220:
                        (ge = q), (T = 42);
                    }
                    break;
                  case 42:
                    Q === 47 &&
                      xe === 42 &&
                      ge + 2 !== q &&
                      (z.charCodeAt(ge + 2) === 33 &&
                        (pe += z.substring(ge, q + 1)),
                      (Ie = ""),
                      (T = 0));
                }
          }
          T === 0 && (V += Ie);
      }
      (be = xe), (xe = Q), q++;
    }
    if (((ge = pe.length), 0 < ge)) {
      if (
        ((fe = I),
        0 < L &&
          ((rt = a(2, pe, fe, _, oe, H, ge, W, k, W)),
          rt !== void 0 && (pe = rt).length === 0))
      )
        return en + pe + Ft;
      if (((pe = fe.join(",") + "{" + pe + "}"), Z * Y !== 0)) {
        switch ((Z !== 2 || i(pe, 2) || (Y = 0), Y)) {
          case 111:
            pe = pe.replace(y, ":-moz-$1") + pe;
            break;
          case 112:
            pe =
              pe.replace(d, "::-webkit-input-$1") +
              pe.replace(d, "::-moz-$1") +
              pe.replace(d, ":-ms-input-$1") +
              pe;
        }
        Y = 0;
      }
    }
    return en + pe + Ft;
  }
  function n(_, I, z) {
    var W = I.trim().split(A);
    I = W;
    var k = W.length,
      K = _.length;
    switch (K) {
      case 0:
      case 1:
        var T = 0;
        for (_ = K === 0 ? "" : _[0] + " "; T < k; ++T)
          I[T] = r(_, I[T], z).trim();
        break;
      default:
        var ie = (T = 0);
        for (I = []; T < k; ++T)
          for (var ne = 0; ne < K; ++ne)
            I[ie++] = r(_[ne] + " ", W[T], z).trim();
    }
    return I;
  }
  function r(_, I, z) {
    var W = I.charCodeAt(0);
    switch ((33 > W && (W = (I = I.trim()).charCodeAt(0)), W)) {
      case 38:
        return I.replace(f, "$1" + _.trim());
      case 58:
        return _.trim() + I.replace(f, "$1" + _.trim());
      default:
        if (0 < 1 * z && 0 < I.indexOf("\f"))
          return I.replace(f, (_.charCodeAt(0) === 58 ? "" : "$1") + _.trim());
    }
    return _ + I;
  }
  function o(_, I, z, W) {
    var k = _ + ";",
      K = 2 * I + 3 * z + 4 * W;
    if (K === 944) {
      _ = k.indexOf(":", 9) + 1;
      var T = k.substring(_, k.length - 1).trim();
      return (
        (T = k.substring(0, _).trim() + T + ";"),
        Z === 1 || (Z === 2 && i(T, 1)) ? "-webkit-" + T + T : T
      );
    }
    if (Z === 0 || (Z === 2 && !i(k, 1))) return k;
    switch (K) {
      case 1015:
        return k.charCodeAt(10) === 97 ? "-webkit-" + k + k : k;
      case 951:
        return k.charCodeAt(3) === 116 ? "-webkit-" + k + k : k;
      case 963:
        return k.charCodeAt(5) === 110 ? "-webkit-" + k + k : k;
      case 1009:
        if (k.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + k + k;
      case 978:
        return "-webkit-" + k + "-moz-" + k + k;
      case 1019:
      case 983:
        return "-webkit-" + k + "-moz-" + k + "-ms-" + k + k;
      case 883:
        if (k.charCodeAt(8) === 45) return "-webkit-" + k + k;
        if (0 < k.indexOf("image-set(", 11))
          return k.replace(O, "$1-webkit-$2") + k;
        break;
      case 932:
        if (k.charCodeAt(4) === 45)
          switch (k.charCodeAt(5)) {
            case 103:
              return (
                "-webkit-box-" +
                k.replace("-grow", "") +
                "-webkit-" +
                k +
                "-ms-" +
                k.replace("grow", "positive") +
                k
              );
            case 115:
              return (
                "-webkit-" + k + "-ms-" + k.replace("shrink", "negative") + k
              );
            case 98:
              return (
                "-webkit-" +
                k +
                "-ms-" +
                k.replace("basis", "preferred-size") +
                k
              );
          }
        return "-webkit-" + k + "-ms-" + k + k;
      case 964:
        return "-webkit-" + k + "-ms-flex-" + k + k;
      case 1023:
        if (k.charCodeAt(8) !== 99) break;
        return (
          (T = k
            .substring(k.indexOf(":", 15))
            .replace("flex-", "")
            .replace("space-between", "justify")),
          "-webkit-box-pack" + T + "-webkit-" + k + "-ms-flex-pack" + T + k
        );
      case 1005:
        return g.test(k)
          ? k.replace(v, ":-webkit-") + k.replace(v, ":-moz-") + k
          : k;
      case 1e3:
        switch (
          ((T = k.substring(13).trim()),
          (I = T.indexOf("-") + 1),
          T.charCodeAt(0) + T.charCodeAt(I))
        ) {
          case 226:
            T = k.replace(C, "tb");
            break;
          case 232:
            T = k.replace(C, "tb-rl");
            break;
          case 220:
            T = k.replace(C, "lr");
            break;
          default:
            return k;
        }
        return "-webkit-" + k + "-ms-" + T + k;
      case 1017:
        if (k.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (
          ((I = (k = _).length - 10),
          (T = (k.charCodeAt(I) === 33 ? k.substring(0, I) : k)
            .substring(_.indexOf(":", 7) + 1)
            .trim()),
          (K = T.charCodeAt(0) + (T.charCodeAt(7) | 0)))
        ) {
          case 203:
            if (111 > T.charCodeAt(8)) break;
          case 115:
            k = k.replace(T, "-webkit-" + T) + ";" + k;
            break;
          case 207:
          case 102:
            k =
              k.replace(T, "-webkit-" + (102 < K ? "inline-" : "") + "box") +
              ";" +
              k.replace(T, "-webkit-" + T) +
              ";" +
              k.replace(T, "-ms-" + T + "box") +
              ";" +
              k;
        }
        return k + ";";
      case 938:
        if (k.charCodeAt(5) === 45)
          switch (k.charCodeAt(6)) {
            case 105:
              return (
                (T = k.replace("-items", "")),
                "-webkit-" + k + "-webkit-box-" + T + "-ms-flex-" + T + k
              );
            case 115:
              return "-webkit-" + k + "-ms-flex-item-" + k.replace(b, "") + k;
            default:
              return (
                "-webkit-" +
                k +
                "-ms-flex-line-pack" +
                k.replace("align-content", "").replace(b, "") +
                k
              );
          }
        break;
      case 973:
      case 989:
        if (k.charCodeAt(3) !== 45 || k.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (F.test(_) === !0)
          return (T = _.substring(_.indexOf(":") + 1)).charCodeAt(0) === 115
            ? o(_.replace("stretch", "fill-available"), I, z, W).replace(
                ":fill-available",
                ":stretch"
              )
            : k.replace(T, "-webkit-" + T) +
                k.replace(T, "-moz-" + T.replace("fill-", "")) +
                k;
        break;
      case 962:
        if (
          ((k =
            "-webkit-" + k + (k.charCodeAt(5) === 102 ? "-ms-" + k : "") + k),
          z + W === 211 &&
            k.charCodeAt(13) === 105 &&
            0 < k.indexOf("transform", 10))
        )
          return (
            k.substring(0, k.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") +
            k
          );
    }
    return k;
  }
  function i(_, I) {
    var z = _.indexOf(I === 1 ? ":" : "{"),
      W = _.substring(0, I !== 3 ? z : 10);
    return (
      (z = _.substring(z + 1, _.length - 1)),
      U(I !== 2 ? W : W.replace(j, "$1"), z, I)
    );
  }
  function l(_, I) {
    var z = o(I, I.charCodeAt(0), I.charCodeAt(1), I.charCodeAt(2));
    return z !== I + ";"
      ? z.replace(R, " or ($1)").substring(4)
      : "(" + I + ")";
  }
  function a(_, I, z, W, k, K, T, ie, ne, re) {
    for (var Q = 0, xe = I, be; Q < L; ++Q)
      switch ((be = ae[Q].call(p, _, xe, z, W, k, K, T, ie, ne, re))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          xe = be;
      }
    if (xe !== I) return xe;
  }
  function s(_) {
    switch (_) {
      case void 0:
      case null:
        L = ae.length = 0;
        break;
      default:
        if (typeof _ == "function") ae[L++] = _;
        else if (typeof _ == "object")
          for (var I = 0, z = _.length; I < z; ++I) s(_[I]);
        else B = !!_ | 0;
    }
    return s;
  }
  function u(_) {
    return (
      (_ = _.prefix),
      _ !== void 0 &&
        ((U = null),
        _ ? (typeof _ != "function" ? (Z = 1) : ((Z = 2), (U = _))) : (Z = 0)),
      u
    );
  }
  function p(_, I) {
    var z = _;
    if ((33 > z.charCodeAt(0) && (z = z.trim()), (G = z), (z = [G]), 0 < L)) {
      var W = a(-1, I, z, z, oe, H, 0, 0, 0, 0);
      W !== void 0 && typeof W == "string" && (I = W);
    }
    var k = t(he, z, I, 0, 0);
    return (
      0 < L &&
        ((W = a(-2, k, z, z, oe, H, k.length, 0, 0, 0)),
        W !== void 0 && (k = W)),
      (G = ""),
      (Y = 0),
      (H = oe = 1),
      k
    );
  }
  var m = /^\0+/g,
    h = /[\0\r\f]/g,
    v = /: */g,
    g = /zoo|gra/,
    w = /([,: ])(transform)/g,
    A = /,\r+?/g,
    f = /([\t\r\n ])*\f?&/g,
    c = /@(k\w+)\s*(\S*)\s*/,
    d = /::(place)/g,
    y = /:(read-only)/g,
    C = /[svh]\w+-[tblr]{2}/,
    E = /\(\s*(.*)\s*\)/g,
    R = /([\s\S]*?);/g,
    b = /-self|flex-/g,
    j = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    F = /stretch|:\s*\w+\-(?:conte|avail)/,
    O = /([^-])(image-set\()/,
    H = 1,
    oe = 1,
    Y = 0,
    Z = 1,
    he = [],
    ae = [],
    L = 0,
    U = null,
    B = 0,
    G = "";
  return (p.use = s), (p.set = u), e !== void 0 && u(e), p;
}
var Gg = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
};
function Kg(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Xg =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  jc = Kg(function (e) {
    return (
      Xg.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  fu = du,
  Jg = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  Zg = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  qg = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Vp = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  pu = {};
pu[fu.ForwardRef] = qg;
pu[fu.Memo] = Vp;
function Bc(e) {
  return fu.isMemo(e) ? Vp : pu[e.$$typeof] || Jg;
}
var e1 = Object.defineProperty,
  t1 = Object.getOwnPropertyNames,
  Vc = Object.getOwnPropertySymbols,
  n1 = Object.getOwnPropertyDescriptor,
  r1 = Object.getPrototypeOf,
  Hc = Object.prototype;
function Hp(e, t, n) {
  if (typeof t != "string") {
    if (Hc) {
      var r = r1(t);
      r && r !== Hc && Hp(e, r, n);
    }
    var o = t1(t);
    Vc && (o = o.concat(Vc(t)));
    for (var i = Bc(e), l = Bc(t), a = 0; a < o.length; ++a) {
      var s = o[a];
      if (!Zg[s] && !(n && n[s]) && !(l && l[s]) && !(i && i[s])) {
        var u = n1(t, s);
        try {
          e1(e, s, u);
        } catch {}
      }
    }
  }
  return e;
}
var o1 = Hp;
const i1 = cs(o1);
function Tt() {
  return (Tt =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
}
var Wc = function (e, t) {
    for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
      n.push(t[r], e[r + 1]);
    return n;
  },
  rs = function (e) {
    return (
      e !== null &&
      typeof e == "object" &&
      (e.toString ? e.toString() : Object.prototype.toString.call(e)) ===
        "[object Object]" &&
      !du.typeOf(e)
    );
  },
  Wi = Object.freeze([]),
  Sn = Object.freeze({});
function Eo(e) {
  return typeof e == "function";
}
function Qc(e) {
  return e.displayName || e.name || "Component";
}
function mu(e) {
  return e && typeof e.styledComponentId == "string";
}
var Cr =
    (typeof process < "u" && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
    "data-styled",
  hu = typeof window < "u" && "HTMLElement" in window,
  l1 = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      {}.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      {}.SC_DISABLE_SPEEDY !== void 0 &&
      {}.SC_DISABLE_SPEEDY !== "" &&
      {}.SC_DISABLE_SPEEDY !== "false" &&
      {}.SC_DISABLE_SPEEDY),
  a1 = {};
function Oo(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw new Error(
    "An error occurred. See https://git.io/JUIaE#" +
      e +
      " for more information." +
      (n.length > 0 ? " Args: " + n.join(", ") : "")
  );
}
var s1 = (function () {
    function e(n) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = n);
    }
    var t = e.prototype;
    return (
      (t.indexOfGroup = function (n) {
        for (var r = 0, o = 0; o < n; o++) r += this.groupSizes[o];
        return r;
      }),
      (t.insertRules = function (n, r) {
        if (n >= this.groupSizes.length) {
          for (var o = this.groupSizes, i = o.length, l = i; n >= l; )
            (l <<= 1) < 0 && Oo(16, "" + n);
          (this.groupSizes = new Uint32Array(l)),
            this.groupSizes.set(o),
            (this.length = l);
          for (var a = i; a < l; a++) this.groupSizes[a] = 0;
        }
        for (var s = this.indexOfGroup(n + 1), u = 0, p = r.length; u < p; u++)
          this.tag.insertRule(s, r[u]) && (this.groupSizes[n]++, s++);
      }),
      (t.clearGroup = function (n) {
        if (n < this.length) {
          var r = this.groupSizes[n],
            o = this.indexOfGroup(n),
            i = o + r;
          this.groupSizes[n] = 0;
          for (var l = o; l < i; l++) this.tag.deleteRule(o);
        }
      }),
      (t.getGroup = function (n) {
        var r = "";
        if (n >= this.length || this.groupSizes[n] === 0) return r;
        for (
          var o = this.groupSizes[n],
            i = this.indexOfGroup(n),
            l = i + o,
            a = i;
          a < l;
          a++
        )
          r +=
            this.tag.getRule(a) +
            `/*!sc*/
`;
        return r;
      }),
      e
    );
  })(),
  vi = new Map(),
  Qi = new Map(),
  oo = 1,
  ti = function (e) {
    if (vi.has(e)) return vi.get(e);
    for (; Qi.has(oo); ) oo++;
    var t = oo++;
    return vi.set(e, t), Qi.set(t, e), t;
  },
  u1 = function (e) {
    return Qi.get(e);
  },
  c1 = function (e, t) {
    t >= oo && (oo = t + 1), vi.set(e, t), Qi.set(t, e);
  },
  d1 = "style[" + Cr + '][data-styled-version="5.3.6"]',
  f1 = new RegExp("^" + Cr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  p1 = function (e, t, n) {
    for (var r, o = n.split(","), i = 0, l = o.length; i < l; i++)
      (r = o[i]) && e.registerName(t, r);
  },
  m1 = function (e, t) {
    for (
      var n = (t.textContent || "").split(`/*!sc*/
`),
        r = [],
        o = 0,
        i = n.length;
      o < i;
      o++
    ) {
      var l = n[o].trim();
      if (l) {
        var a = l.match(f1);
        if (a) {
          var s = 0 | parseInt(a[1], 10),
            u = a[2];
          s !== 0 && (c1(u, s), p1(e, u, a[3]), e.getTag().insertRules(s, r)),
            (r.length = 0);
        } else r.push(l);
      }
    }
  },
  h1 = function () {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
  },
  Wp = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = (function (a) {
        for (var s = a.childNodes, u = s.length; u >= 0; u--) {
          var p = s[u];
          if (p && p.nodeType === 1 && p.hasAttribute(Cr)) return p;
        }
      })(n),
      i = o !== void 0 ? o.nextSibling : null;
    r.setAttribute(Cr, "active"),
      r.setAttribute("data-styled-version", "5.3.6");
    var l = h1();
    return l && r.setAttribute("nonce", l), n.insertBefore(r, i), r;
  },
  g1 = (function () {
    function e(n) {
      var r = (this.element = Wp(n));
      r.appendChild(document.createTextNode("")),
        (this.sheet = (function (o) {
          if (o.sheet) return o.sheet;
          for (var i = document.styleSheets, l = 0, a = i.length; l < a; l++) {
            var s = i[l];
            if (s.ownerNode === o) return s;
          }
          Oo(17);
        })(r)),
        (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        try {
          return this.sheet.insertRule(r, n), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (t.deleteRule = function (n) {
        this.sheet.deleteRule(n), this.length--;
      }),
      (t.getRule = function (n) {
        var r = this.sheet.cssRules[n];
        return r !== void 0 && typeof r.cssText == "string" ? r.cssText : "";
      }),
      e
    );
  })(),
  v1 = (function () {
    function e(n) {
      var r = (this.element = Wp(n));
      (this.nodes = r.childNodes), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        if (n <= this.length && n >= 0) {
          var o = document.createTextNode(r),
            i = this.nodes[n];
          return this.element.insertBefore(o, i || null), this.length++, !0;
        }
        return !1;
      }),
      (t.deleteRule = function (n) {
        this.element.removeChild(this.nodes[n]), this.length--;
      }),
      (t.getRule = function (n) {
        return n < this.length ? this.nodes[n].textContent : "";
      }),
      e
    );
  })(),
  y1 = (function () {
    function e(n) {
      (this.rules = []), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        return (
          n <= this.length && (this.rules.splice(n, 0, r), this.length++, !0)
        );
      }),
      (t.deleteRule = function (n) {
        this.rules.splice(n, 1), this.length--;
      }),
      (t.getRule = function (n) {
        return n < this.length ? this.rules[n] : "";
      }),
      e
    );
  })(),
  Yc = hu,
  w1 = { isServer: !hu, useCSSOMInjection: !l1 },
  Yi = (function () {
    function e(n, r, o) {
      n === void 0 && (n = Sn),
        r === void 0 && (r = {}),
        (this.options = Tt({}, w1, {}, n)),
        (this.gs = r),
        (this.names = new Map(o)),
        (this.server = !!n.isServer),
        !this.server &&
          hu &&
          Yc &&
          ((Yc = !1),
          (function (i) {
            for (
              var l = document.querySelectorAll(d1), a = 0, s = l.length;
              a < s;
              a++
            ) {
              var u = l[a];
              u &&
                u.getAttribute(Cr) !== "active" &&
                (m1(i, u), u.parentNode && u.parentNode.removeChild(u));
            }
          })(this));
    }
    e.registerId = function (n) {
      return ti(n);
    };
    var t = e.prototype;
    return (
      (t.reconstructWithOptions = function (n, r) {
        return (
          r === void 0 && (r = !0),
          new e(
            Tt({}, this.options, {}, n),
            this.gs,
            (r && this.names) || void 0
          )
        );
      }),
      (t.allocateGSInstance = function (n) {
        return (this.gs[n] = (this.gs[n] || 0) + 1);
      }),
      (t.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((o = (r = this.options).isServer),
            (i = r.useCSSOMInjection),
            (l = r.target),
            (n = o ? new y1(l) : i ? new g1(l) : new v1(l)),
            new s1(n)))
        );
        var n, r, o, i, l;
      }),
      (t.hasNameForId = function (n, r) {
        return this.names.has(n) && this.names.get(n).has(r);
      }),
      (t.registerName = function (n, r) {
        if ((ti(n), this.names.has(n))) this.names.get(n).add(r);
        else {
          var o = new Set();
          o.add(r), this.names.set(n, o);
        }
      }),
      (t.insertRules = function (n, r, o) {
        this.registerName(n, r), this.getTag().insertRules(ti(n), o);
      }),
      (t.clearNames = function (n) {
        this.names.has(n) && this.names.get(n).clear();
      }),
      (t.clearRules = function (n) {
        this.getTag().clearGroup(ti(n)), this.clearNames(n);
      }),
      (t.clearTag = function () {
        this.tag = void 0;
      }),
      (t.toString = function () {
        return (function (n) {
          for (var r = n.getTag(), o = r.length, i = "", l = 0; l < o; l++) {
            var a = u1(l);
            if (a !== void 0) {
              var s = n.names.get(a),
                u = r.getGroup(l);
              if (s && u && s.size) {
                var p = Cr + ".g" + l + '[id="' + a + '"]',
                  m = "";
                s !== void 0 &&
                  s.forEach(function (h) {
                    h.length > 0 && (m += h + ",");
                  }),
                  (i +=
                    "" +
                    u +
                    p +
                    '{content:"' +
                    m +
                    `"}/*!sc*/
`);
              }
            }
          }
          return i;
        })(this);
      }),
      e
    );
  })(),
  S1 = /(a)(d)/gi,
  Gc = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function os(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = Gc(t % 52) + n;
  return (Gc(t % 52) + n).replace(S1, "$1-$2");
}
var sr = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  Qp = function (e) {
    return sr(5381, e);
  };
function Yp(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Eo(n) && !mu(n)) return !1;
  }
  return !0;
}
var x1 = Qp("5.3.6"),
  k1 = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && Yp(t)),
        (this.componentId = n),
        (this.baseHash = sr(x1, n)),
        (this.baseStyle = r),
        Yi.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var o = this.componentId,
          i = [];
        if (
          (this.baseStyle &&
            i.push(this.baseStyle.generateAndInjectStyles(t, n, r)),
          this.isStatic && !r.hash)
        )
          if (this.staticRulesId && n.hasNameForId(o, this.staticRulesId))
            i.push(this.staticRulesId);
          else {
            var l = Bn(this.rules, t, n, r).join(""),
              a = os(sr(this.baseHash, l) >>> 0);
            if (!n.hasNameForId(o, a)) {
              var s = r(l, "." + a, void 0, o);
              n.insertRules(o, a, s);
            }
            i.push(a), (this.staticRulesId = a);
          }
        else {
          for (
            var u = this.rules.length,
              p = sr(this.baseHash, r.hash),
              m = "",
              h = 0;
            h < u;
            h++
          ) {
            var v = this.rules[h];
            if (typeof v == "string") m += v;
            else if (v) {
              var g = Bn(v, t, n, r),
                w = Array.isArray(g) ? g.join("") : g;
              (p = sr(p, w + h)), (m += w);
            }
          }
          if (m) {
            var A = os(p >>> 0);
            if (!n.hasNameForId(o, A)) {
              var f = r(m, "." + A, void 0, o);
              n.insertRules(o, A, f);
            }
            i.push(A);
          }
        }
        return i.join(" ");
      }),
      e
    );
  })(),
  C1 = /^\s*\/\/.*$/gm,
  E1 = [":", "[", ".", "#"];
function A1(e) {
  var t,
    n,
    r,
    o,
    i = e === void 0 ? Sn : e,
    l = i.options,
    a = l === void 0 ? Sn : l,
    s = i.plugins,
    u = s === void 0 ? Wi : s,
    p = new Yg(a),
    m = [],
    h = (function (w) {
      function A(f) {
        if (f)
          try {
            w(f + "}");
          } catch {}
      }
      return function (f, c, d, y, C, E, R, b, j, F) {
        switch (f) {
          case 1:
            if (j === 0 && c.charCodeAt(0) === 64) return w(c + ";"), "";
            break;
          case 2:
            if (b === 0) return c + "/*|*/";
            break;
          case 3:
            switch (b) {
              case 102:
              case 112:
                return w(d[0] + c), "";
              default:
                return c + (F === 0 ? "/*|*/" : "");
            }
          case -2:
            c.split("/*|*/}").forEach(A);
        }
      };
    })(function (w) {
      m.push(w);
    }),
    v = function (w, A, f) {
      return (A === 0 && E1.indexOf(f[n.length]) !== -1) || f.match(o)
        ? w
        : "." + t;
    };
  function g(w, A, f, c) {
    c === void 0 && (c = "&");
    var d = w.replace(C1, ""),
      y = A && f ? f + " " + A + " { " + d + " }" : d;
    return (
      (t = c),
      (n = A),
      (r = new RegExp("\\" + n + "\\b", "g")),
      (o = new RegExp("(\\" + n + "\\b){2,}")),
      p(f || !A ? "" : A, y)
    );
  }
  return (
    p.use(
      [].concat(u, [
        function (w, A, f) {
          w === 2 &&
            f.length &&
            f[0].lastIndexOf(n) > 0 &&
            (f[0] = f[0].replace(r, v));
        },
        h,
        function (w) {
          if (w === -2) {
            var A = m;
            return (m = []), A;
          }
        },
      ])
    ),
    (g.hash = u.length
      ? u
          .reduce(function (w, A) {
            return A.name || Oo(15), sr(w, A.name);
          }, 5381)
          .toString()
      : ""),
    g
  );
}
var Gp = ht.createContext();
Gp.Consumer;
var Kp = ht.createContext(),
  R1 = (Kp.Consumer, new Yi()),
  is = A1();
function Xp() {
  return x.useContext(Gp) || R1;
}
function Jp() {
  return x.useContext(Kp) || is;
}
var Zp = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (o, i) {
        i === void 0 && (i = is);
        var l = r.name + i.hash;
        o.hasNameForId(r.id, l) ||
          o.insertRules(r.id, l, i(r.rules, l, "@keyframes"));
      }),
        (this.toString = function () {
          return Oo(12, String(r.name));
        }),
        (this.name = t),
        (this.id = "sc-keyframes-" + t),
        (this.rules = n);
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = is), this.name + t.hash;
      }),
      e
    );
  })(),
  N1 = /([A-Z])/,
  b1 = /([A-Z])/g,
  P1 = /^ms-/,
  _1 = function (e) {
    return "-" + e.toLowerCase();
  };
function Kc(e) {
  return N1.test(e) ? e.replace(b1, _1).replace(P1, "-ms-") : e;
}
var Xc = function (e) {
  return e == null || e === !1 || e === "";
};
function Bn(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var o, i = [], l = 0, a = e.length; l < a; l += 1)
      (o = Bn(e[l], t, n, r)) !== "" &&
        (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (Xc(e)) return "";
  if (mu(e)) return "." + e.styledComponentId;
  if (Eo(e)) {
    if (
      typeof (u = e) != "function" ||
      (u.prototype && u.prototype.isReactComponent) ||
      !t
    )
      return e;
    var s = e(t);
    return Bn(s, t, n, r);
  }
  var u;
  return e instanceof Zp
    ? n
      ? (e.inject(n, r), e.getName(r))
      : e
    : rs(e)
    ? (function p(m, h) {
        var v,
          g,
          w = [];
        for (var A in m)
          m.hasOwnProperty(A) &&
            !Xc(m[A]) &&
            ((Array.isArray(m[A]) && m[A].isCss) || Eo(m[A])
              ? w.push(Kc(A) + ":", m[A], ";")
              : rs(m[A])
              ? w.push.apply(w, p(m[A], A))
              : w.push(
                  Kc(A) +
                    ": " +
                    ((v = A),
                    (g = m[A]) == null || typeof g == "boolean" || g === ""
                      ? ""
                      : typeof g != "number" || g === 0 || v in Gg
                      ? String(g).trim()
                      : g + "px") +
                    ";"
                ));
        return h ? [h + " {"].concat(w, ["}"]) : w;
      })(e)
    : e.toString();
}
var Jc = function (e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function gu(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  return Eo(e) || rs(e)
    ? Jc(Bn(Wc(Wi, [e].concat(n))))
    : n.length === 0 && e.length === 1 && typeof e[0] == "string"
    ? e
    : Jc(Bn(Wc(e, n)));
}
var qp = function (e, t, n) {
    return (
      n === void 0 && (n = Sn), (e.theme !== n.theme && e.theme) || t || n.theme
    );
  },
  L1 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  O1 = /(^-|-$)/g;
function oa(e) {
  return e.replace(L1, "-").replace(O1, "");
}
var vu = function (e) {
  return os(Qp(e) >>> 0);
};
function ni(e) {
  return typeof e == "string" && !0;
}
var ls = function (e) {
    return (
      typeof e == "function" ||
      (typeof e == "object" && e !== null && !Array.isArray(e))
    );
  },
  T1 = function (e) {
    return e !== "__proto__" && e !== "constructor" && e !== "prototype";
  };
function I1(e, t, n) {
  var r = e[n];
  ls(t) && ls(r) ? em(r, t) : (e[n] = t);
}
function em(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  for (var o = 0, i = n; o < i.length; o++) {
    var l = i[o];
    if (ls(l)) for (var a in l) T1(a) && I1(e, l[a], a);
  }
  return e;
}
var yu = ht.createContext();
yu.Consumer;
var ia = {};
function tm(e, t, n) {
  var r = mu(e),
    o = !ni(e),
    i = t.attrs,
    l = i === void 0 ? Wi : i,
    a = t.componentId,
    s =
      a === void 0
        ? (function (c, d) {
            var y = typeof c != "string" ? "sc" : oa(c);
            ia[y] = (ia[y] || 0) + 1;
            var C = y + "-" + vu("5.3.6" + y + ia[y]);
            return d ? d + "-" + C : C;
          })(t.displayName, t.parentComponentId)
        : a,
    u = t.displayName,
    p =
      u === void 0
        ? (function (c) {
            return ni(c) ? "styled." + c : "Styled(" + Qc(c) + ")";
          })(e)
        : u,
    m =
      t.displayName && t.componentId
        ? oa(t.displayName) + "-" + t.componentId
        : t.componentId || s,
    h = r && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l,
    v = t.shouldForwardProp;
  r &&
    e.shouldForwardProp &&
    (v = t.shouldForwardProp
      ? function (c, d, y) {
          return e.shouldForwardProp(c, d, y) && t.shouldForwardProp(c, d, y);
        }
      : e.shouldForwardProp);
  var g,
    w = new k1(n, m, r ? e.componentStyle : void 0),
    A = w.isStatic && l.length === 0,
    f = function (c, d) {
      return (function (y, C, E, R) {
        var b = y.attrs,
          j = y.componentStyle,
          F = y.defaultProps,
          O = y.foldedComponentIds,
          H = y.shouldForwardProp,
          oe = y.styledComponentId,
          Y = y.target,
          Z = (function (W, k, K) {
            W === void 0 && (W = Sn);
            var T = Tt({}, k, { theme: W }),
              ie = {};
            return (
              K.forEach(function (ne) {
                var re,
                  Q,
                  xe,
                  be = ne;
                for (re in (Eo(be) && (be = be(T)), be))
                  T[re] = ie[re] =
                    re === "className"
                      ? ((Q = ie[re]),
                        (xe = be[re]),
                        Q && xe ? Q + " " + xe : Q || xe)
                      : be[re];
              }),
              [T, ie]
            );
          })(qp(C, x.useContext(yu), F) || Sn, C, b),
          he = Z[0],
          ae = Z[1],
          L = (function (W, k, K, T) {
            var ie = Xp(),
              ne = Jp(),
              re = k
                ? W.generateAndInjectStyles(Sn, ie, ne)
                : W.generateAndInjectStyles(K, ie, ne);
            return re;
          })(j, R, he),
          U = E,
          B = ae.$as || C.$as || ae.as || C.as || Y,
          G = ni(B),
          _ = ae !== C ? Tt({}, C, {}, ae) : C,
          I = {};
        for (var z in _)
          z[0] !== "$" &&
            z !== "as" &&
            (z === "forwardedAs"
              ? (I.as = _[z])
              : (H ? H(z, jc, B) : !G || jc(z)) && (I[z] = _[z]));
        return (
          C.style &&
            ae.style !== C.style &&
            (I.style = Tt({}, C.style, {}, ae.style)),
          (I.className = Array.prototype
            .concat(O, oe, L !== oe ? L : null, C.className, ae.className)
            .filter(Boolean)
            .join(" ")),
          (I.ref = U),
          x.createElement(B, I)
        );
      })(g, c, d, A);
    };
  return (
    (f.displayName = p),
    ((g = ht.forwardRef(f)).attrs = h),
    (g.componentStyle = w),
    (g.displayName = p),
    (g.shouldForwardProp = v),
    (g.foldedComponentIds = r
      ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
      : Wi),
    (g.styledComponentId = m),
    (g.target = r ? e.target : e),
    (g.withComponent = function (c) {
      var d = t.componentId,
        y = (function (E, R) {
          if (E == null) return {};
          var b,
            j,
            F = {},
            O = Object.keys(E);
          for (j = 0; j < O.length; j++)
            (b = O[j]), R.indexOf(b) >= 0 || (F[b] = E[b]);
          return F;
        })(t, ["componentId"]),
        C = d && d + "-" + (ni(c) ? c : oa(Qc(c)));
      return tm(c, Tt({}, y, { attrs: h, componentId: C }), n);
    }),
    Object.defineProperty(g, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (c) {
        this._foldedDefaultProps = r ? em({}, e.defaultProps, c) : c;
      },
    }),
    (g.toString = function () {
      return "." + g.styledComponentId;
    }),
    o &&
      i1(g, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0,
      }),
    g
  );
}
var as = function (e) {
  return (function t(n, r, o) {
    if ((o === void 0 && (o = Sn), !du.isValidElementType(r)))
      return Oo(1, String(r));
    var i = function () {
      return n(r, o, gu.apply(void 0, arguments));
    };
    return (
      (i.withConfig = function (l) {
        return t(n, r, Tt({}, o, {}, l));
      }),
      (i.attrs = function (l) {
        return t(
          n,
          r,
          Tt({}, o, {
            attrs: Array.prototype.concat(o.attrs, l).filter(Boolean),
          })
        );
      }),
      i
    );
  })(tm, e);
};
[
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "textPath",
  "tspan",
].forEach(function (e) {
  as[e] = as(e);
});
var z1 = (function () {
  function e(n, r) {
    (this.rules = n),
      (this.componentId = r),
      (this.isStatic = Yp(n)),
      Yi.registerId(this.componentId + 1);
  }
  var t = e.prototype;
  return (
    (t.createStyles = function (n, r, o, i) {
      var l = i(Bn(this.rules, r, o, i).join(""), ""),
        a = this.componentId + n;
      o.insertRules(a, a, l);
    }),
    (t.removeStyles = function (n, r) {
      r.clearRules(this.componentId + n);
    }),
    (t.renderStyles = function (n, r, o, i) {
      n > 2 && Yi.registerId(this.componentId + n),
        this.removeStyles(n, o),
        this.createStyles(n, r, o, i);
    }),
    e
  );
})();
function D1(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var o = gu.apply(void 0, [e].concat(n)),
    i = "sc-global-" + vu(JSON.stringify(o)),
    l = new z1(o, i);
  function a(u) {
    var p = Xp(),
      m = Jp(),
      h = x.useContext(yu),
      v = x.useRef(p.allocateGSInstance(i)).current;
    return (
      p.server && s(v, u, p, h, m),
      x.useLayoutEffect(
        function () {
          if (!p.server)
            return (
              s(v, u, p, h, m),
              function () {
                return l.removeStyles(v, p);
              }
            );
        },
        [v, u, p, h, m]
      ),
      null
    );
  }
  function s(u, p, m, h, v) {
    if (l.isStatic) l.renderStyles(u, a1, m, v);
    else {
      var g = Tt({}, p, { theme: qp(p, h, a.defaultProps) });
      l.renderStyles(u, g, m, v);
    }
  }
  return ht.memo(a);
}
function nm(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var o = gu.apply(void 0, [e].concat(n)).join(""),
    i = vu(o);
  return new Zp(i, o);
}
const ce = as,
  F1 = ce.div`
    width: 100vw;
    height: 100vh;

    background: rgba(0, 0, 0, 0.85);
    overflow: hidden;
    
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`,
  M1 = "" + new URL("arrowBottomLeft-2c862d79.svg", import.meta.url).href,
  $1 = "" + new URL("arrowBottomRight-f990273a.svg", import.meta.url).href,
  U1 = "" + new URL("arrowTopLeft-1655a033.svg", import.meta.url).href,
  j1 = "" + new URL("arrowTopRight-b96298c7.svg", import.meta.url).href,
  B1 = "" + new URL("box-3abcfa7d.svg", import.meta.url).href,
  V1 = "" + new URL("Home-09a48ff3.svg", import.meta.url).href,
  H1 = "" + new URL("ranking-8b358231.svg", import.meta.url).href,
  W1 = "" + new URL("Shopping-132120d1.svg", import.meta.url).href,
  Q1 = "" + new URL("bgItem-82e70a8a.svg", import.meta.url).href,
  Y1 = "" + new URL("cart-a79cee7c.svg", import.meta.url).href,
  G1 = "" + new URL("topItemShop-b18aa33a.svg", import.meta.url).href,
  K1 = "" + new URL("arrow-5e4ef441.svg", import.meta.url).href,
  X1 = "" + new URL("aspas-1f13ad0f.svg", import.meta.url).href,
  J1 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAAKCAYAAADSI0D0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ5SURBVHgB7Vk7axVBGD2LViIKokGTPpWF2tkIgmCjCBZ2igimsNUfYC+YQhAMKNiocAkoxEAIpMglhEB+QwghL/IoEkKeJJvz3Z3Nnd3sfDubpNkwBw7fPs58Ozsz587MXiDg3CGO4ylyn9wjd8lGib6XnCVnyGlylLyi6J+QE+Q4OUY2yVsIcOIiAs4VOOBfMsig3yYPDN8r+i6Gp+QWuW/0n6MoWlce88ro0/xD1C8gwIkjo7HBeySywfoQUGd8QNYEv9mnM4r+XU4/R/1fl9gY+apVRsz5EwEqWkYzJntrjtnO0TcE1A6mH28gOzt9UvTdDI+RzH6p/qui72B4gKzJGhwvSwhQEbHxxGA96bmJA+R8XguPfMq1GO4cZbkjU94+rporn6NM49JVqaurTNW6FJW3IboLSJZ0XeZcjDBFNpT8z5EsM1P9Gvkrl9+ux13ytjkXitFGyBW4+8TnXfP3TjpWzmKsAacbQ0X3Ip89WtHAKbrvenDsuObzwvkckfLMsnrm9UV18GlEV1lXvU7y/j7vkurSKKaR2WwHiWnkh7JfedYd8hqS2QymzH8cb+O0/HWy29LL9Sa5bO5XGXhlOEuT2X2itakPygzsyh+3CllLRznvC/u0eoH918kwiPY+S2aaXvbjH6XMD4YOSz9C/RdF/5rhvqVfof4jArzQmtHEWGxIpMcIqBveILtvmi8x2UMG+Xy/ibY5Nb3MfPeQ3fsNIMAbR0vHYLB6gia4yfAIWdN8V/SXGJ4h+6Wxyf5fVh7zAm2TyS/yKvWTCPBG+B+t/pBlvz2bLdIEw4peTHkZ7S+NG+Q/l5jGlA8gncjOZv0IqIRD1nMgJ696Q3sAAAAASUVORK5CYII=",
  Z1 = "" + new URL("Clock-da310452.png", import.meta.url).href,
  q1 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPzSURBVHgB7VRbaBxlFP7mvjuzu9lkk2xTDTZNX6ombWmoN/BORZQi6EMFW1qUFgLFFkRRFKWQ+OBLEYK2gsS+iYrYB4tiaRCqWNIqFCKWtCaSbPbSnZ3dnd25/+OZ1YLEbGLFBx96nmZ+zn++c873fT9wM/5vwa2V8NTZSpqvm8/wvvOIwHF3BwjTluXm4oqU39irTRqV3Gcndo00/zXI6NTis4uF+rhuOhtMw0XgugAfXeEhiBxiCQmaKi8M9iaPHH/stk9vGGT3l3NvlMrmUT1vwrE9aB0KeEkERzdYEBKgD8dhEOhMVXmkk8qbp5+78+g/Btn7Te7FhZx+zCg2ICg81ESMeufAmhYcL4Aki1A0Bc2mB8tywBgHmfI4Qdl3fnTLR2uCHJhe7J77pTpfqzgq9YtUWkM1X4FlO1BSWisnZCE8+pdkGYIswXM9hNSGLIblTkUY+urgyNJfa/LLQUpz1suW5asCH7QmqOQNMOp83z192Lku4kLAw/0KRndkaAIGz/FofQwiVfIZMoV6cGB5zb+B+L5/L6hTn4ZMxkVA4HFwSwpXrhZw7lqIQ0NxnJm3cbnQxJHtCQQEIPBCaxo5mgzB06uDPP6uEobsPs8NEKPuq3oD2Q4Jjl7B+WYML22N48KVCvYMCpha8lG1GAYSQIz4iIQgC7RKsKEwDPm2ILffNaJZlBzSt0Tz1xsuNqZELHgSIlldLrvYsSmNX5t/UDlb83GrysH1WMQUNEVESJfvf+10pi3Izgf6GEdJ0a5tx4co8dBJQUmZp8shDA8Y//YanhyMw6f1JBUB1YZDhFMZwjFtn2zE4dJSwWsLcuyhAYOUozPixLZd8LTrmaKDrVkZCVrFAhnyvUc78fF0AYm4jDs0DxfyHsiXCFgAhZqRmO8Yk/uN9pxExDN2KhJ2EACeH7TGf/9iFYeG42Akgne+11Hg4jg8LOPkD0V09XWhUtSRTqtQaA2KIp3FqsRTkGSPC3+eBgTC/BBFJmNi2kCuaGLOob07Lsa+zkFP9aK6VIFLq8p0p/DbUhVoNMeX11zR8cNjZz6QtMQL4Hi45HLPJrWpUss3Ar1dPhnCJzPqCyUIagw9/b0w65RXq07OjD2xf3k9cSWQfNF8PbtO2C7F4tt6ejpQKtVgmxbMcq01GfPdltNj3WlkejtRr5mwy/pc4uLM4ZXqtX0g1++e6O/cNPCFmExui2tqi9RI25H5OFJQjJQXkAoLBQOuXpnaXJ3dderDV+o3BHI9bnn+5J5Mf/ZVnxM286LYAorkHDg2mNX8kdUbb8+e2PvJajXWBLkeD771+YaZS1fXy13ZbErirdxP5342vpuYx834r+N3cnPNsL3RD9MAAAAASUVORK5CYII=",
  ev =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPrSURBVHgB7VRNbBRlGH7mf2Zn/9huq6VUKommglWJPRBNUKMXPKCJPYgJphqCHkyQmPhvUA6Q6EVNOKDGVK9qiFwAf4JePMiBmCqKMdqSdnfpdnc7252d3+/7fGcMSS3UCuHAgTeZw3zzvs8z7/s87wdcj2stpNUSWkceLXaleMwLtAclSd4C8GLodyuqZtXs/qGJytnuF6PPfNC9YpLaV7t2OPXKgaDdGoocF2HA0go5eVQFqm1As3Mzxf4Ne9c9/NHnl00ydWTsDbc1v9+tNhD5EYxCBoqmpBWCccQhA/dDaLoM2bZgZEv7Nj59Yv//Jqkcf2JPa2b2XXfOgWwoMLNWmup3BVhMwJoKwzYRdl0Eng+JcyiGDk1Vxu/c8+Mnq5LMntxdbk/9OR22nEwsCdjFPFpVB77vwc4ZkKiCM4GQutMTYE1GGEVQBZ1rWkNWyiOje09Ul2Kqy0mCau3F2HMzTKEOLB3N2SYUXULvLSOQNDvNiZxZKJ06jSxGGHJCFxAqQfG4h4XV3ZTy1lJMeTlJyOJ7BE8GH0O18lCoVtVJ5DteQIcNwhWDEOsfh7FpHBI5INFHkRVE1I2uG8SnPLYc818k72+DIYS4N/lDVTfhNp2UwBrYQmQ6LK2TPrIzCaU0jMxdzwKaBckwwZKOFB1c4iOEIa9IMjq8zmZBl4QS5CQNgdtOz70AYIzBF3kEooBQKsCrnUFkDoHBoikFVEEdmxlIQuDYq1t7VtSkf/sY7/zxEzhnZFs/JeKCw+gdAXQb1s0PpHkJoELvgr51zTJkRiTMR+x1yEoy6ToZLcW9yF2Th+9rBE67JJKFk1XEcUS2Zcg/9B5ax5+DTCJpvZug3LoDta8PIq87sPIlOPU6etcPYKGxGGx97ZS5YidJsDg+KkliPLEp49E/wir0d60Z6KMvp6Px2+fhfkMERhvZYgH1agv5UhFcphtAj04ux7yIpDPXPGzmM+MSi6gLGgyRaNkM/FNvky48nVWyKzmytZm10aw4dBYhX+7B/Llp0qt4YDnmJTf+2323f5iz1V0yffa8EMwje9KGGzkSlmbOyQTJPVY/14CRUdE3WIa32EG7HU1se+e3p1btJO1mdu51daB8t5XRNhf6ymjPzaPb8dFudGhcAlHMydoyimUTxb4SXKeDZsOf+uXn/POXwlvxgjz0yNrBDcOFL3NZZXOG7i5ZM9NRJVaWaQmT96Sjhdp5OAvRd2e7G7e/9PHRxcsiuRCf7hzYeeNNa14hn92mqHJKRMuGgMblevx0Z5EdfHLir8/+C2NVkgtx7M37h34/fWZtT0G5QbfWeN9PVn499MPCNK7H1Y6/AY9zviWDT7SkAAAAAElFTkSuQmCC",
  tv = "" + new URL("aberto-516a21d6.png", import.meta.url).href,
  nv = "" + new URL("fechado-9204aa4b.png", import.meta.url).href,
  rv = "" + new URL("aberto-68778f23.png", import.meta.url).href,
  ov = "" + new URL("fechado-4b67da69.png", import.meta.url).href,
  iv = "" + new URL("aberto-24f45b46.png", import.meta.url).href,
  lv = "" + new URL("fechado-87b60e57.png", import.meta.url).href,
  av = "" + new URL("aberto-fe91765f.png", import.meta.url).href,
  sv = "" + new URL("fechado-35e3b7da.png", import.meta.url).href,
  uv = "" + new URL("aberto-14fcab98.png", import.meta.url).href,
  cv = "" + new URL("fechado-611423b4.png", import.meta.url).href,
  dv = "" + new URL("barPoint-e914dc01.png", import.meta.url).href,
  fv = "" + new URL("bgList-f72e559e.png", import.meta.url).href,
  pv = "" + new URL("bag-9d96c29d.png", import.meta.url).href,
  mv = "" + new URL("menShop-be8976e8.png", import.meta.url).href,
  hv = "" + new URL("bgItemShop-9ad074a1.png", import.meta.url).href,
  gv = "" + new URL("bomb-435d015b.png", import.meta.url).href,
  vv = "" + new URL("first-3f27240a.png", import.meta.url).href,
  yv = "" + new URL("second-c1bdc3ef.png", import.meta.url).href,
  wv = "" + new URL("thirst-5994e045.png", import.meta.url).href,
  Sv = "" + new URL("bg-abbe9aa7.png", import.meta.url).href,
  xv = "" + new URL("Date1-974dc038.png", import.meta.url).href,
  kv = "" + new URL("Date2-1f1129e1.png", import.meta.url).href,
  Cv = "" + new URL("Date3-f7a66970.png", import.meta.url).href,
  Ev = "" + new URL("Date4-e2b3a5dc.png", import.meta.url).href,
  Av = "" + new URL("Date5-db48c643.png", import.meta.url).href,
  Rv = "" + new URL("Date6-8ad15a6e.png", import.meta.url).href,
  Nv = "" + new URL("Date7-8b0ca239.png", import.meta.url).href,
  bv = "" + new URL("Date8-c01d2de1.png", import.meta.url).href,
  Pv = "" + new URL("Date9-62b0f36c.png", import.meta.url).href,
  _v = "" + new URL("Date10-e8de7b0a.png", import.meta.url).href,
  Lv = "" + new URL("Date11-c0e6659e.png", import.meta.url).href,
  Ov = "" + new URL("Date12-7c4b4707.png", import.meta.url).href,
  Tv = "" + new URL("opened-3fb14b17.mp3", import.meta.url).href,
  Iv = "" + new URL("win-2ab10c05.wav", import.meta.url).href,
  Oe = {
    arrowBottomLeft: M1,
    arrowBottomRight: $1,
    arrowTopLeft: U1,
    arrowTopRight: j1,
    box: B1,
    home: V1,
    ranking: H1,
    shopping: W1,
    bgItem: Q1,
    cart: Y1,
    topitemShop: G1,
    arrow: K1,
    aspas: X1,
  },
  Se = {
    bar: J1,
    Clock: Z1,
    coin: q1,
    vipcoin: ev,
    comumOpen: tv,
    comumClose: nv,
    epicOpen: rv,
    epicClose: ov,
    specialOpen: iv,
    specialClose: lv,
    legendaryOpen: av,
    legendaryClose: sv,
    hallowenOpen: uv,
    hallowenClose: cv,
    barPoint: dv,
    bgList: fv,
    bag: pv,
    menShop: mv,
    bgItemShop: hv,
    bg: Sv,
    bomb: gv,
    first: vv,
    second: yv,
    thirst: wv,
    date1: xv,
    date2: kv,
    date3: Cv,
    date4: Ev,
    date5: Av,
    date6: Rv,
    date7: Nv,
    date8: bv,
    date9: Pv,
    date10: _v,
    date11: Lv,
    date12: Ov,
  },
  Zc = { openedMusic: Tv, win: Iv },
  zv = ce.div`
    width: 127.3rem;
    height: 10.3rem;
`,
  Dv = ce.div`
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    background: linear-gradient(89deg, #FFF 31.77%, rgba(255, 255, 255, 0.00) 172.15%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`,
  Fv = ce.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    width: 23.5rem;
    height: 5.2rem;
    border: 0.1rem solid rgba(255, 255, 255, 0.15);
    background: linear-gradient(72deg, rgba(0, 0, 0, 0.35) 19.47%, rgba(0, 0, 0, 0.00) 94.28%);

    .selected .MenuItem{
        border: 0.1rem solid rgba(75, 109, 213, 0.45) !important;
        background: linear-gradient(25deg, #4B6DD5 -39.04%, rgba(75, 109, 213, 0.00) 123.25%) !important;
        box-shadow: 0rem 0rem 2rem 0rem rgba(75, 109, 213, 0.10);

    }
`,
  ri = ce.div`
    width: 5rem;
    height: 3.2rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.35);

    &:hover{
        filter: brightness(.8);
        cursor: pointer;
    }
`;
ce.div`
    border: 0.1rem solid rgba(75, 109, 213, 0.45) !important;
    background: linear-gradient(25deg, #4B6DD5 -39.04%, rgba(75, 109, 213, 0.00) 123.25%) !important;
    box-shadow: 0rem 0rem 2rem 0rem rgba(75, 109, 213, 0.10);
`;
const Mv = ce.div`
    display: flex;
    align-items: center;

    .bar{
        width: 23.5rem;
    }
`,
  $v = ce.div`
    max-width: 55.6rem;
    color: rgba(255, 255, 255, 0.80);
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 124.5%; /* 1.743rem */
    margin-left: 1.5rem;
`,
  Uv = ce.div`
    width: 21.5rem;
    height: 5.2rem;
    border: 0.1rem solid rgba(255, 255, 255, 0.15);
    margin-left: 1.8rem;
    gap: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(72deg, rgba(0, 0, 0, 0.35) 19.47%, rgba(0, 0, 0, 0.00) 94.28%);
`,
  qc = ce.div`
    display: flex;
    align-items: center;

    gap: 1rem;
`,
  ed = ce.div`
    width: 3.5rem;
    height: 3.5rem;
    border: 0.1rem solid rgba(255, 255, 255, 0.45);
    background: linear-gradient(25deg, #FFF -39.04%, rgba(255, 255, 255, 0.00) 123.25%);
    box-shadow: 0rem 0rem 2rem 0rem rgba(255, 255, 255, 0.10);

    display: flex;
    align-items: center;
    justify-content: center;
`,
  td = ce.div`
    color: #FFF;
    font-size: 1.37rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`,
  jv = () => {
    const [e, t] = x.useState(),
      [n, r] = x.useState("home");
    return (
      x.useEffect(() => {
        Xt("requestCoins", {}).then((o) => {
          t(o);
        });
      }, [n]),
      Ap("updateCoins", (o) => {
        t(o);
      }),
      N(zv, {
        children: [
          S(Dv, { children: "SISTEMA DE BOX" }),
          N(Mv, {
            children: [
              N(Fv, {
                children: [
                  S(ei, {
                    to: "/",
                    onClick: () => r("home"),
                    className: n === "home" ? "selected" : "",
                    children: S(ri, {
                      className: "MenuItem",
                      children: S("img", { src: Oe.home, alt: "" }),
                    }),
                  }),
                  S(ei, {
                    to: "/box",
                    onClick: () => r("box"),
                    className: n === "box" ? "selected" : "",
                    children: S(ri, {
                      className: "MenuItem",
                      children: S("img", { src: Oe.box, alt: "" }),
                    }),
                  }),
                  S(ei, {
                    to: "/shop",
                    onClick: () => r("shop"),
                    className: n === "shop" ? "selected" : "",
                    children: S(ri, {
                      className: "MenuItem",
                      children: S("img", { src: Oe.shopping, alt: "" }),
                    }),
                  }),
                  S(ei, {
                    to: "/rank",
                    onClick: () => r("ranking"),
                    className: n === "ranking" ? "selected" : "",
                    children: S(ri, {
                      className: "MenuItem",
                      children: S("img", { src: Oe.ranking, alt: "" }),
                    }),
                  }),
                ],
              }),
              S($v, {
                children:
                  "Quanto mais tempo jogar em nosso servidor, mais benefícios você receberá. podendo ganhar até mesmo premiações em dinheiro.",
              }),
              S("img", { className: "bar", src: Se.bar, alt: "" }),
              N(Uv, {
                children: [
                  N(qc, {
                    children: [
                      S(ed, { children: S("img", { src: Se.coin, alt: "" }) }),
                      S(td, { children: (e == null ? void 0 : e.coin) || 0 }),
                    ],
                  }),
                  N(qc, {
                    children: [
                      S(ed, {
                        children: S("img", { src: Se.vipcoin, alt: "" }),
                      }),
                      S(td, {
                        children: (e == null ? void 0 : e.vipcoin) || 0,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  Bv = ce.div`
    width: 127.3rem;

`,
  Vv = ce.div`
    width: 83rem;
    height: 32.7rem;
    
    border: 0.1rem solid rgba(255, 255, 255, 0.15);
    background: radial-gradient(186.52% 163.05% at 100% 102.91%, #4B6DD5 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(72deg, rgba(0, 0, 0, 0.35) 19.47%, rgba(0, 0, 0, 0.00) 94.28%);
    
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-left: 8.5rem;
    flex-direction: column;

    position: relative;

    p{
        color: #FFF;
        text-align: center;
        font-size: 3.2rem;
        font-style: normal;
        font-weight: 300;
        line-height: 95%;
    
        span{
            color: #03D4EB;   
            font-weight: 900;
        }
    }

    b{
        color: #FFF;
        text-align: center;
        font-size: 4.6rem;
        font-style: normal;
        font-weight: 900;
        line-height: 95%;
    }

    img{
        position: absolute;
        right: -5rem;
        bottom: -5rem;

        width: 43rem;
        z-index: 10;
    }
`,
  Hv = ce.div`
    display: flex;
    gap: .9rem;
`,
  Wv = ce.div`
    width: 43.9rem;
    height: 32.7rem;
    border: 0.1rem solid rgba(255, 255, 255, 0.15);
    background: linear-gradient(72deg, rgba(0, 0, 0, 0.35) 19.47%, rgba(0, 0, 0, 0.00) 94.28%);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    position: relative;

    b{
        color: #FFF;
        text-align: center;
        font-size: 4.6rem;
        font-style: normal;
        font-weight: 900;
        line-height: 95%;
    }

    span{
        color: #EC9191;
        text-align: center;
        font-size: 1.37rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    button{
        width: 11rem;
        height: 3rem;
    
        border: 0.1rem solid rgba(255, 255, 255, 0.20);
        background: rgba(0, 0, 0, 0.35);

        color: #FFF;
        text-align: center;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-top: 1rem;
        outline: none;


        &:hover{
            filter: brightness(.8);
            cursor: pointer;
        }
    }
    
    p{
        color: #FFF;
        text-align: center;
        font-size: 2.6rem;
        font-style: normal;
        font-weight: 300;
        line-height: 95%;
    
        span{
            font-size: 2.6rem;
            color: #FFCA0F;   
            font-weight: 900;
        }
    }
`,
  Qv = ce.div`
    width: 127.3rem;
    height: 32.7rem;
    
    margin-top: 3rem;

    border: 0.1rem solid rgba(255, 255, 255, 0.15);
    background: radial-gradient(28.98% 173.44% at 93.43% 69.57%, rgba(255, 255, 255, 0.10) 0%, rgba(0, 0, 0, 0.00) 100%), radial-gradient(36.84% 209.7% at 15.96% 50.15%, rgba(255, 255, 255, 0.10) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(275deg, rgba(0, 0, 0, 0.15) 0%, rgba(255, 255, 255, 0.00) 108.66%);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    h1{
        color: #FFF;
        font-size: 4.0056rem;
        font-style: normal;
        font-weight: 900;
        line-height: normal; 
    }

    p{
        color: #FFF;
        text-align: center;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        span{
            font-weight: 900;
            color: #03D4EB;
        }

        b{
            color: #FFCA0F;
        }
    }
`,
  Yv = () => {
    const [e, t] = x.useState();
    x.useEffect(() => {
      Xt("requestBox", {}).then((r) => {
        t(r);
      });
    }, []);
    function n() {
      window.invokeNative("openUrl", e == null ? void 0 : e.website);
    }
    return N(Bv, {
      children: [
        N(Hv, {
          children: [
            N(Vv, {
              children: [
                N("p", {
                  children: [
                    "RECEBA ",
                    S("span", { children: "5X COIN" }),
                    " EM",
                  ],
                }),
                N("b", {
                  children: [(e == null ? void 0 : e.payday) || 0, " MINUTOS"],
                }),
                S("img", { src: Se.Clock, alt: "" }),
              ],
            }),
            N(Wv, {
              children: [
                N("p", {
                  children: [
                    "RECEBA ",
                    N("span", {
                      children: [
                        e != null && e.paydayVip.status
                          ? N(Bt, {
                              children: [
                                e == null ? void 0 : e.paydayVip.amount,
                                "X",
                              ],
                            })
                          : "",
                        " VIP COINS",
                      ],
                    }),
                    " EM",
                  ],
                }),
                N("b", {
                  children: [
                    (e == null ? void 0 : e.paydayVip.timing) || 0,
                    " MINUTOS",
                  ],
                }),
                e != null && e.paydayVip.status
                  ? ""
                  : S("span", {
                      children: "ADQUIRA UM PLANO VIP PARA HABILITAR.",
                    }),
                S("button", { onClick: n, children: "ACESSAR LOJA" }),
              ],
            }),
          ],
        }),
        N(Qv, {
          children: [
            S("h1", { children: "SOBRE O SISTEMA" }),
            N("p", {
              children: [
                "A cada 20 minutos online, você recebe ",
                S("span", { children: "5 COINS" }),
                ".",
              ],
            }),
            N("p", {
              children: [
                "A cada 30 minutos online, você recebe um ",
                S("b", { children: "VIP COINS" }),
                " por cada Vip ativo.",
              ],
            }),
            N("p", {
              children: [
                "É possível ganhar ",
                S("b", { children: "VIP COINS" }),
                " abrindo caixas ESPECIAIS, ÉPICAS ou LENDÁRIAS.",
              ],
            }),
            N("p", {
              children: [
                "A cada rota de farm completa, você recebe um ",
                S("span", { children: "COIN" }),
                ".",
              ],
            }),
            N("p", {
              children: [
                "Sempre que vencer ações de lojinha/ammunation, receberá um ",
                S("span", { children: "COIN" }),
                ".",
              ],
            }),
            S("p", {
              children:
                "Caso não goste do prêmio resgatado, não poderá troca-lo.",
            }),
            N("p", {
              children: [
                "Não reembolsamos ",
                S("span", { children: "COINS" }),
                " ou ",
                S("b", { children: "VIP COINS" }),
                " gastos.",
              ],
            }),
          ],
        }),
      ],
    });
  },
  Gv = ce.div`
    width: 127.3rem;
    .rc-tooltip {
        z-index: 9999; /* ou um número adequado */
        position: absolute;
        background: red;
    }
`,
  Kv = ce.div`
    display: flex;
    height: 19rem;
    background: linear-gradient(
        72deg,
        rgba(0, 0, 0, 0.35) 19.47%,
        rgba(0, 0, 0, 0) 94.28%
    );
    border: 0.1rem solid rgba(255, 255, 255, 0.15);

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    .itemBoxSelected {
        background: linear-gradient(
            25deg,
            #4b6dd5 -39.04%,
            rgba(75, 109, 213, 0) 123.25%
        );
        border: 0.1rem solid rgba(75, 109, 213, 0.45);
        filter: drop-shadow(0 0 2rem rgba(75, 109, 213, 0.1));
    }
`,
  Xv = ce.div`
    width: 24.2rem;
    height: 17rem;
    background: url(${Oe.bgItem});
    background-size: 100% 100%;
    background-position: center center;

    padding: 1rem;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    .title {
        position: absolute;
        top: 1rem;
        left: 1rem;

        h1 {
            font-size: 1.5316rem;
            font-style: normal;
            font-weight: 800;
            line-height: normal;
            background: linear-gradient(
                56deg,
                #fff 4.06%,
                rgba(255, 255, 255, 0) 153.86%
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        p {
            color: rgba(255, 255, 255, 0.37);
            font-size: 1.167rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }
    }

    img {
        width: 12.7rem;
    }

    .value {
        position: absolute;
        bottom: 1rem;
        right: 1rem;

        display: flex;
        align-items: center;
        justify-content: center;

        color: #fff;
        font-size: 1.096rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        gap: 0.1rem;

        img {
            width: 2rem;
        }
    }

    &:hover {
        filter: brightness(0.8);
        cursor: pointer;
    }
`,
  Jv = ce.div`
    margin-top: 2rem;
    width: 127.3rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .top {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        color: #fff;
        font-size: 2.53rem;
        font-style: normal;
        font-weight: 800;
        line-height: normal;

        img {
            width: 53rem;
        }
        .scale {
            transform: scaleX(-1);
        }
    }

    .list {
        width: 127rem;
        height: 39.85rem;
        background: url(${Se.bgList});
        background-size: 100% 100%;
        overflow: auto;
        padding-top: 2rem;

        display: grid;
        grid-template-columns: repeat(7, 1fr);

        .item {
            width: 16.8rem;
            height: 11.5rem;
            background: url(${Oe.bgItem});
            background-size: 100% 100%;
            background-position: center center;

            margin-bottom: 1.1rem;

            position: relative;

            .rc-tooltip{
                position: absolute;
            }

            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            img {
                max-width: 60%;
                max-height: 60%;
            }

            svg {
                position: absolute;
                right: 0.8rem;
                top: 0.7rem;
            }

            .nameItem {
                color: rgba(255, 255, 255, 0.37);
                font-size: 1.167rem;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                position: absolute;
                bottom: 1rem;
            }
            .amountItem {
                position: absolute;
                top: 1rem;
                left: 1rem;

                color: rgba(255, 255, 255, 1);
                font-size: 1.167rem;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }
        }

        &::-webkit-scrollbar {
            display: none;
        }
    }

    button {
        width: 23.5rem;
        height: 6rem;

        color: #fff;
        text-align: center;
        font-size: 2.042rem;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        cursor: pointer;
        margin: auto;

        transition: all 0.2s ease-in-out;

        border: 0.101rem solid rgba(255, 255, 255, 0.12);
        background: radial-gradient(
                47.62% 70.59% at 50% 78.53%,
                rgba(255, 255, 255, 0.1) 0%,
                rgba(255, 255, 255, 0) 100%
            ),
            radial-gradient(
                299.1% 426.27% at 50% 50%,
                rgba(212, 212, 212, 0.1) 0%,
                rgba(0, 0, 0, 0) 100%
            ),
            rgba(0, 0, 0, 0.35);

        :hover {
            border: 0.1rem solid #4b6dd5;
            background: radial-gradient(
                    90.15% 306.8% at 49.79% 50.2%,
                    rgba(212, 212, 212, 0.09) 0%,
                    rgba(0, 0, 0, 0) 100%
                ),
                linear-gradient(
                    9deg,
                    #4b6dd5 -20.9%,
                    #4b6dd5 -20.88%,
                    rgba(75, 109, 213, 0) 132.68%
                );
            box-shadow: 0rem 0rem 2rem 0rem rgba(75, 109, 213, 0.1);
        }
    }
`,
  Zv = nm`
    0% { transform: rotate(0deg); }
    20% { transform: rotate(15deg); }
    40% { transform: rotate(-10deg); }
    60% { transform: rotate(5deg); }
    80% { transform: rotate(-5deg); }
    100% { transform: rotate(0deg); }
`,
  qv = nm`

    0% { transform: scale(1); }
    20% { transform: scale(1.05); }

    40% { transform: scale(1.15); }
    60% { transform: scale(1.05); }
    80% { transform: scale(1.15); }
    100% { transform: scale(1); }
`,
  ey = ce.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: rgba(0, 0, 0, 0.8); */
    backdrop-filter: blur(1rem);

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .opening {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        filter: drop-shadow(3rem 5rem 0.56rem #0004);

        img {
            width: 50rem;
            animation: ${Zv} 0.5s linear infinite;
        }
    }

    .opened {
        width: 60rem;
        height: 50rem;
        /* background: linear-gradient(72deg, rgba(0, 0, 0, 0.35) 19.47%, rgba(0, 0, 0, 0.00) 94.28%);
        border: 0.1rem solid rgba(255, 255, 255, 0.15); */

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        animation: ${qv} 6s linear infinite;

        position: relative;

        /* filter: drop-shadow(3rem 5rem .56rem #0004); */

        .box {
            width: 30rem;
            position: absolute;
            bottom: -2rem;
        }

        .item {
            width: 50rem;
            height: 20rem;

            position: absolute;
            top: 2rem;

            backdrop-filter: calc(1rem);

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            img {
                min-width: 10rem;
                max-width: 15rem;
                max-height: 15rem;
            }

            h1 {
                font-size: 3.5316rem;
                font-style: normal;
                font-weight: 800;
                line-height: normal;
                background: linear-gradient(
                    56deg,
                    #fff 4.06%,
                    rgba(255, 255, 255, 0) 153.86%
                );
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            p {
                color: rgba(255, 255, 255, 0.7);
                font-size: 2.167rem;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                text-align: center;

                span {
                    color: #03d4eb;
                    font-weight: 700;
                }
            }
        }
    }

    button {
        width: 23.5rem;
        height: 6rem;

        border: 0.962px solid #4b6dd5;
        background: radial-gradient(
                90.15% 306.8% at 49.79% 50.2%,
                rgba(212, 212, 212, 0.09) 0%,
                rgba(0, 0, 0, 0) 100%
            ),
            linear-gradient(
                9deg,
                #4b6dd5 -20.9%,
                #4b6dd5 -20.88%,
                rgba(75, 109, 213, 0) 132.68%
            );
        box-shadow: 0px 0px 20px 0px rgba(75, 109, 213, 0.1);
        color: #fff;
        text-align: center;
        font-size: 2.042rem;
        font-style: normal;
        font-weight: 800;
        margin: 3rem;
        line-height: normal;

        &:hover {
            filter: brightness(0.8);
            cursor: pointer;
        }
    }
`,
  Er = Math.min,
  Dn = Math.max,
  Gi = Math.round,
  oi = Math.floor,
  Cn = (e) => ({ x: e, y: e }),
  ty = { left: "right", right: "left", bottom: "top", top: "bottom" },
  ny = { start: "end", end: "start" };
function ss(e, t, n) {
  return Dn(e, Er(t, n));
}
function To(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Vn(e) {
  return e.split("-")[0];
}
function Io(e) {
  return e.split("-")[1];
}
function rm(e) {
  return e === "x" ? "y" : "x";
}
function wu(e) {
  return e === "y" ? "height" : "width";
}
function Rl(e) {
  return ["top", "bottom"].includes(Vn(e)) ? "y" : "x";
}
function Su(e) {
  return rm(Rl(e));
}
function ry(e, t, n) {
  n === void 0 && (n = !1);
  const r = Io(e),
    o = Su(e),
    i = wu(o);
  let l =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (l = Ki(l)), [l, Ki(l)];
}
function oy(e) {
  const t = Ki(e);
  return [us(e), t, us(t)];
}
function us(e) {
  return e.replace(/start|end/g, (t) => ny[t]);
}
function iy(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? i : l;
    default:
      return [];
  }
}
function ly(e, t, n, r) {
  const o = Io(e);
  let i = iy(Vn(e), n === "start", r);
  return (
    o && ((i = i.map((l) => l + "-" + o)), t && (i = i.concat(i.map(us)))), i
  );
}
function Ki(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ty[t]);
}
function ay(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function om(e) {
  return typeof e != "number"
    ? ay(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Xi(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height,
  };
}
function nd(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = Rl(t),
    l = Su(t),
    a = wu(l),
    s = Vn(t),
    u = i === "y",
    p = r.x + r.width / 2 - o.width / 2,
    m = r.y + r.height / 2 - o.height / 2,
    h = r[a] / 2 - o[a] / 2;
  let v;
  switch (s) {
    case "top":
      v = { x: p, y: r.y - o.height };
      break;
    case "bottom":
      v = { x: p, y: r.y + r.height };
      break;
    case "right":
      v = { x: r.x + r.width, y: m };
      break;
    case "left":
      v = { x: r.x - o.width, y: m };
      break;
    default:
      v = { x: r.x, y: r.y };
  }
  switch (Io(t)) {
    case "start":
      v[l] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      v[l] += h * (n && u ? -1 : 1);
      break;
  }
  return v;
}
const sy = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: l,
    } = n,
    a = i.filter(Boolean),
    s = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let u = await l.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: p, y: m } = nd(u, r, s),
    h = r,
    v = {},
    g = 0;
  for (let w = 0; w < a.length; w++) {
    const { name: A, fn: f } = a[w],
      {
        x: c,
        y: d,
        data: y,
        reset: C,
      } = await f({
        x: p,
        y: m,
        initialPlacement: r,
        placement: h,
        strategy: o,
        middlewareData: v,
        rects: u,
        platform: l,
        elements: { reference: e, floating: t },
      });
    if (
      ((p = c ?? p),
      (m = d ?? m),
      (v = { ...v, [A]: { ...v[A], ...y } }),
      C && g <= 50)
    ) {
      g++,
        typeof C == "object" &&
          (C.placement && (h = C.placement),
          C.rects &&
            (u =
              C.rects === !0
                ? await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : C.rects),
          ({ x: p, y: m } = nd(u, h, s))),
        (w = -1);
      continue;
    }
  }
  return { x: p, y: m, placement: h, strategy: o, middlewareData: v };
};
async function im(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: l, elements: a, strategy: s } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: p = "viewport",
      elementContext: m = "floating",
      altBoundary: h = !1,
      padding: v = 0,
    } = To(t, e),
    g = om(v),
    A = a[h ? (m === "floating" ? "reference" : "floating") : m],
    f = Xi(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(A))) == null ||
          n
            ? A
            : A.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: p,
        strategy: s,
      })
    ),
    c = m === "floating" ? { ...l.floating, x: r, y: o } : l.reference,
    d = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(a.floating)),
    y = (await (i.isElement == null ? void 0 : i.isElement(d)))
      ? (await (i.getScale == null ? void 0 : i.getScale(d))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = Xi(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            rect: c,
            offsetParent: d,
            strategy: s,
          })
        : c
    );
  return {
    top: (f.top - C.top + g.top) / y.y,
    bottom: (C.bottom - f.bottom + g.bottom) / y.y,
    left: (f.left - C.left + g.left) / y.x,
    right: (C.right - f.right + g.right) / y.x,
  };
}
const uy = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: l,
          elements: a,
          middlewareData: s,
        } = t,
        { element: u, padding: p = 0 } = To(e, t) || {};
      if (u == null) return {};
      const m = om(p),
        h = { x: n, y: r },
        v = Su(o),
        g = wu(v),
        w = await l.getDimensions(u),
        A = v === "y",
        f = A ? "top" : "left",
        c = A ? "bottom" : "right",
        d = A ? "clientHeight" : "clientWidth",
        y = i.reference[g] + i.reference[v] - h[v] - i.floating[g],
        C = h[v] - i.reference[v],
        E = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u));
      let R = E ? E[d] : 0;
      (!R || !(await (l.isElement == null ? void 0 : l.isElement(E)))) &&
        (R = a.floating[d] || i.floating[g]);
      const b = y / 2 - C / 2,
        j = R / 2 - w[g] / 2 - 1,
        F = Er(m[f], j),
        O = Er(m[c], j),
        H = F,
        oe = R - w[g] - O,
        Y = R / 2 - w[g] / 2 + b,
        Z = ss(H, Y, oe),
        he =
          !s.arrow &&
          Io(o) != null &&
          Y != Z &&
          i.reference[g] / 2 - (Y < H ? F : O) - w[g] / 2 < 0,
        ae = he ? (Y < H ? Y - H : Y - oe) : 0;
      return {
        [v]: h[v] + ae,
        data: {
          [v]: Z,
          centerOffset: Y - Z - ae,
          ...(he && { alignmentOffset: ae }),
        },
        reset: he,
      };
    },
  }),
  cy = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: l,
              initialPlacement: a,
              platform: s,
              elements: u,
            } = t,
            {
              mainAxis: p = !0,
              crossAxis: m = !0,
              fallbackPlacements: h,
              fallbackStrategy: v = "bestFit",
              fallbackAxisSideDirection: g = "none",
              flipAlignment: w = !0,
              ...A
            } = To(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const f = Vn(o),
            c = Vn(a) === a,
            d = await (s.isRTL == null ? void 0 : s.isRTL(u.floating)),
            y = h || (c || !w ? [Ki(a)] : oy(a));
          !h && g !== "none" && y.push(...ly(a, w, g, d));
          const C = [a, ...y],
            E = await im(t, A),
            R = [];
          let b = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((p && R.push(E[f]), m)) {
            const H = ry(o, l, d);
            R.push(E[H[0]], E[H[1]]);
          }
          if (
            ((b = [...b, { placement: o, overflows: R }]),
            !R.every((H) => H <= 0))
          ) {
            var j, F;
            const H = (((j = i.flip) == null ? void 0 : j.index) || 0) + 1,
              oe = C[H];
            if (oe)
              return {
                data: { index: H, overflows: b },
                reset: { placement: oe },
              };
            let Y =
              (F = b
                .filter((Z) => Z.overflows[0] <= 0)
                .sort((Z, he) => Z.overflows[1] - he.overflows[1])[0]) == null
                ? void 0
                : F.placement;
            if (!Y)
              switch (v) {
                case "bestFit": {
                  var O;
                  const Z =
                    (O = b
                      .map((he) => [
                        he.placement,
                        he.overflows
                          .filter((ae) => ae > 0)
                          .reduce((ae, L) => ae + L, 0),
                      ])
                      .sort((he, ae) => he[1] - ae[1])[0]) == null
                      ? void 0
                      : O[0];
                  Z && (Y = Z);
                  break;
                }
                case "initialPlacement":
                  Y = a;
                  break;
              }
            if (o !== Y) return { reset: { placement: Y } };
          }
          return {};
        },
      }
    );
  };
async function dy(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    l = Vn(n),
    a = Io(n),
    s = Rl(n) === "y",
    u = ["left", "top"].includes(l) ? -1 : 1,
    p = i && s ? -1 : 1,
    m = To(t, e);
  let {
    mainAxis: h,
    crossAxis: v,
    alignmentAxis: g,
  } = typeof m == "number"
    ? { mainAxis: m, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...m };
  return (
    a && typeof g == "number" && (v = a === "end" ? g * -1 : g),
    s ? { x: v * p, y: h * u } : { x: h * u, y: v * p }
  );
}
const fy = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          const { x: n, y: r } = t,
            o = await dy(t, e);
          return { x: n + o.x, y: r + o.y, data: o };
        },
      }
    );
  },
  py = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: l = !1,
              limiter: a = {
                fn: (A) => {
                  let { x: f, y: c } = A;
                  return { x: f, y: c };
                },
              },
              ...s
            } = To(e, t),
            u = { x: n, y: r },
            p = await im(t, s),
            m = Rl(Vn(o)),
            h = rm(m);
          let v = u[h],
            g = u[m];
          if (i) {
            const A = h === "y" ? "top" : "left",
              f = h === "y" ? "bottom" : "right",
              c = v + p[A],
              d = v - p[f];
            v = ss(c, v, d);
          }
          if (l) {
            const A = m === "y" ? "top" : "left",
              f = m === "y" ? "bottom" : "right",
              c = g + p[A],
              d = g - p[f];
            g = ss(c, g, d);
          }
          const w = a.fn({ ...t, [h]: v, [m]: g });
          return { ...w, data: { x: w.x - n, y: w.y - r } };
        },
      }
    );
  };
function En(e) {
  return lm(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function at(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function qt(e) {
  var t;
  return (t = (lm(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function lm(e) {
  return e instanceof Node || e instanceof at(e).Node;
}
function Jt(e) {
  return e instanceof Element || e instanceof at(e).Element;
}
function Dt(e) {
  return e instanceof HTMLElement || e instanceof at(e).HTMLElement;
}
function rd(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof at(e).ShadowRoot;
}
function zo(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = wt(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function my(e) {
  return ["table", "td", "th"].includes(En(e));
}
function xu(e) {
  const t = ku(),
    n = wt(e);
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function hy(e) {
  let t = Ar(e);
  for (; Dt(t) && !Nl(t); ) {
    if (xu(t)) return t;
    t = Ar(t);
  }
  return null;
}
function ku() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Nl(e) {
  return ["html", "body", "#document"].includes(En(e));
}
function wt(e) {
  return at(e).getComputedStyle(e);
}
function bl(e) {
  return Jt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Ar(e) {
  if (En(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (rd(e) && e.host) || qt(e);
  return rd(t) ? t.host : t;
}
function am(e) {
  const t = Ar(e);
  return Nl(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Dt(t) && zo(t)
    ? t
    : am(t);
}
function Ao(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = am(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    l = at(o);
  return i
    ? t.concat(
        l,
        l.visualViewport || [],
        zo(o) ? o : [],
        l.frameElement && n ? Ao(l.frameElement) : []
      )
    : t.concat(o, Ao(o, [], n));
}
function sm(e) {
  const t = wt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = Dt(e),
    i = o ? e.offsetWidth : n,
    l = o ? e.offsetHeight : r,
    a = Gi(n) !== i || Gi(r) !== l;
  return a && ((n = i), (r = l)), { width: n, height: r, $: a };
}
function Cu(e) {
  return Jt(e) ? e : e.contextElement;
}
function hr(e) {
  const t = Cu(e);
  if (!Dt(t)) return Cn(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = sm(t);
  let l = (i ? Gi(n.width) : n.width) / r,
    a = (i ? Gi(n.height) : n.height) / o;
  return (
    (!l || !Number.isFinite(l)) && (l = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: l, y: a }
  );
}
const gy = Cn(0);
function um(e) {
  const t = at(e);
  return !ku() || !t.visualViewport
    ? gy
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function vy(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== at(e)) ? !1 : t;
}
function Hn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = Cu(e);
  let l = Cn(1);
  t && (r ? Jt(r) && (l = hr(r)) : (l = hr(e)));
  const a = vy(i, n, r) ? um(i) : Cn(0);
  let s = (o.left + a.x) / l.x,
    u = (o.top + a.y) / l.y,
    p = o.width / l.x,
    m = o.height / l.y;
  if (i) {
    const h = at(i),
      v = r && Jt(r) ? at(r) : r;
    let g = h.frameElement;
    for (; g && r && v !== h; ) {
      const w = hr(g),
        A = g.getBoundingClientRect(),
        f = wt(g),
        c = A.left + (g.clientLeft + parseFloat(f.paddingLeft)) * w.x,
        d = A.top + (g.clientTop + parseFloat(f.paddingTop)) * w.y;
      (s *= w.x),
        (u *= w.y),
        (p *= w.x),
        (m *= w.y),
        (s += c),
        (u += d),
        (g = at(g).frameElement);
    }
  }
  return Xi({ width: p, height: m, x: s, y: u });
}
function yy(e) {
  let { rect: t, offsetParent: n, strategy: r } = e;
  const o = Dt(n),
    i = qt(n);
  if (n === i) return t;
  let l = { scrollLeft: 0, scrollTop: 0 },
    a = Cn(1);
  const s = Cn(0);
  if (
    (o || (!o && r !== "fixed")) &&
    ((En(n) !== "body" || zo(i)) && (l = bl(n)), Dt(n))
  ) {
    const u = Hn(n);
    (a = hr(n)), (s.x = u.x + n.clientLeft), (s.y = u.y + n.clientTop);
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - l.scrollLeft * a.x + s.x,
    y: t.y * a.y - l.scrollTop * a.y + s.y,
  };
}
function wy(e) {
  return Array.from(e.getClientRects());
}
function cm(e) {
  return Hn(qt(e)).left + bl(e).scrollLeft;
}
function Sy(e) {
  const t = qt(e),
    n = bl(e),
    r = e.ownerDocument.body,
    o = Dn(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = Dn(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + cm(e);
  const a = -n.scrollTop;
  return (
    wt(r).direction === "rtl" && (l += Dn(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: l, y: a }
  );
}
function xy(e, t) {
  const n = at(e),
    r = qt(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    l = r.clientHeight,
    a = 0,
    s = 0;
  if (o) {
    (i = o.width), (l = o.height);
    const u = ku();
    (!u || (u && t === "fixed")) && ((a = o.offsetLeft), (s = o.offsetTop));
  }
  return { width: i, height: l, x: a, y: s };
}
function ky(e, t) {
  const n = Hn(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = Dt(e) ? hr(e) : Cn(1),
    l = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    s = o * i.x,
    u = r * i.y;
  return { width: l, height: a, x: s, y: u };
}
function od(e, t, n) {
  let r;
  if (t === "viewport") r = xy(e, n);
  else if (t === "document") r = Sy(qt(e));
  else if (Jt(t)) r = ky(t, n);
  else {
    const o = um(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return Xi(r);
}
function dm(e, t) {
  const n = Ar(e);
  return n === t || !Jt(n) || Nl(n)
    ? !1
    : wt(n).position === "fixed" || dm(n, t);
}
function Cy(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Ao(e, [], !1).filter((a) => Jt(a) && En(a) !== "body"),
    o = null;
  const i = wt(e).position === "fixed";
  let l = i ? Ar(e) : e;
  for (; Jt(l) && !Nl(l); ) {
    const a = wt(l),
      s = xu(l);
    !s && a.position === "fixed" && (o = null),
      (
        i
          ? !s && !o
          : (!s &&
              a.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (zo(l) && !s && dm(e, l))
      )
        ? (r = r.filter((p) => p !== l))
        : (o = a),
      (l = Ar(l));
  }
  return t.set(e, r), r;
}
function Ey(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const l = [...(n === "clippingAncestors" ? Cy(t, this._c) : [].concat(n)), r],
    a = l[0],
    s = l.reduce((u, p) => {
      const m = od(t, p, o);
      return (
        (u.top = Dn(m.top, u.top)),
        (u.right = Er(m.right, u.right)),
        (u.bottom = Er(m.bottom, u.bottom)),
        (u.left = Dn(m.left, u.left)),
        u
      );
    }, od(t, a, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top,
  };
}
function Ay(e) {
  return sm(e);
}
function Ry(e, t, n) {
  const r = Dt(t),
    o = qt(t),
    i = n === "fixed",
    l = Hn(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const s = Cn(0);
  if (r || (!r && !i))
    if (((En(t) !== "body" || zo(o)) && (a = bl(t)), r)) {
      const u = Hn(t, !0, i, t);
      (s.x = u.x + t.clientLeft), (s.y = u.y + t.clientTop);
    } else o && (s.x = cm(o));
  return {
    x: l.left + a.scrollLeft - s.x,
    y: l.top + a.scrollTop - s.y,
    width: l.width,
    height: l.height,
  };
}
function id(e, t) {
  return !Dt(e) || wt(e).position === "fixed"
    ? null
    : t
    ? t(e)
    : e.offsetParent;
}
function fm(e, t) {
  const n = at(e);
  if (!Dt(e)) return n;
  let r = id(e, t);
  for (; r && my(r) && wt(r).position === "static"; ) r = id(r, t);
  return r &&
    (En(r) === "html" ||
      (En(r) === "body" && wt(r).position === "static" && !xu(r)))
    ? n
    : r || hy(e) || n;
}
const Ny = async function (e) {
  let { reference: t, floating: n, strategy: r } = e;
  const o = this.getOffsetParent || fm,
    i = this.getDimensions;
  return {
    reference: Ry(t, await o(n), r),
    floating: { x: 0, y: 0, ...(await i(n)) },
  };
};
function by(e) {
  return wt(e).direction === "rtl";
}
const Py = {
  convertOffsetParentRelativeRectToViewportRelativeRect: yy,
  getDocumentElement: qt,
  getClippingRect: Ey,
  getOffsetParent: fm,
  getElementRects: Ny,
  getClientRects: wy,
  getDimensions: Ay,
  getScale: hr,
  isElement: Jt,
  isRTL: by,
};
function _y(e, t) {
  let n = null,
    r;
  const o = qt(e);
  function i() {
    clearTimeout(r), n && n.disconnect(), (n = null);
  }
  function l(a, s) {
    a === void 0 && (a = !1), s === void 0 && (s = 1), i();
    const { left: u, top: p, width: m, height: h } = e.getBoundingClientRect();
    if ((a || t(), !m || !h)) return;
    const v = oi(p),
      g = oi(o.clientWidth - (u + m)),
      w = oi(o.clientHeight - (p + h)),
      A = oi(u),
      c = {
        rootMargin: -v + "px " + -g + "px " + -w + "px " + -A + "px",
        threshold: Dn(0, Er(1, s)) || 1,
      };
    let d = !0;
    function y(C) {
      const E = C[0].intersectionRatio;
      if (E !== s) {
        if (!d) return l();
        E
          ? l(!1, E)
          : (r = setTimeout(() => {
              l(!1, 1e-7);
            }, 100));
      }
      d = !1;
    }
    try {
      n = new IntersectionObserver(y, { ...c, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(y, c);
    }
    n.observe(e);
  }
  return l(!0), i;
}
function Ly(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: l = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: s = !1,
    } = r,
    u = Cu(e),
    p = o || i ? [...(u ? Ao(u) : []), ...Ao(t)] : [];
  p.forEach((f) => {
    o && f.addEventListener("scroll", n, { passive: !0 }),
      i && f.addEventListener("resize", n);
  });
  const m = u && a ? _y(u, n) : null;
  let h = -1,
    v = null;
  l &&
    ((v = new ResizeObserver((f) => {
      let [c] = f;
      c &&
        c.target === u &&
        v &&
        (v.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          v && v.observe(t);
        }))),
        n();
    })),
    u && !s && v.observe(u),
    v.observe(t));
  let g,
    w = s ? Hn(e) : null;
  s && A();
  function A() {
    const f = Hn(e);
    w &&
      (f.x !== w.x ||
        f.y !== w.y ||
        f.width !== w.width ||
        f.height !== w.height) &&
      n(),
      (w = f),
      (g = requestAnimationFrame(A));
  }
  return (
    n(),
    () => {
      p.forEach((f) => {
        o && f.removeEventListener("scroll", n),
          i && f.removeEventListener("resize", n);
      }),
        m && m(),
        v && v.disconnect(),
        (v = null),
        s && cancelAnimationFrame(g);
    }
  );
}
const ld = (e, t, n) => {
  const r = new Map(),
    o = { platform: Py, ...n },
    i = { ...o.platform, _c: r };
  return sy(e, t, { ...o, platform: i });
};
var pm = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], o = 0; o < arguments.length; o++) {
        var i = arguments[o];
        if (i) {
          var l = typeof i;
          if (l === "string" || l === "number") r.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var a = n.apply(null, i);
              a && r.push(a);
            }
          } else if (l === "object") {
            if (
              i.toString !== Object.prototype.toString &&
              !i.toString.toString().includes("[native code]")
            ) {
              r.push(i.toString());
              continue;
            }
            for (var s in i) t.call(i, s) && i[s] && r.push(s);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(pm);
var Oy = pm.exports;
const ad = cs(Oy);
/*
 * React Tooltip
 * {@link https://github.com/ReactTooltip/react-tooltip}
 * @copyright ReactTooltip Team
 * @license MIT
 */ const Ty = "react-tooltip-core-styles",
  Iy = "react-tooltip-base-styles",
  sd = { core: !1, base: !1 };
function ud({ css: e, id: t = Iy, type: n = "base", ref: r }) {
  var o, i;
  if (
    !e ||
    typeof document > "u" ||
    sd[n] ||
    (n === "core" &&
      typeof process < "u" &&
      !(
        (o = process == null ? void 0 : process.env) === null || o === void 0
      ) &&
      o.REACT_TOOLTIP_DISABLE_CORE_STYLES) ||
    (n !== "base" &&
      typeof process < "u" &&
      !(
        (i = process == null ? void 0 : process.env) === null || i === void 0
      ) &&
      i.REACT_TOOLTIP_DISABLE_BASE_STYLES)
  )
    return;
  n === "core" && (t = Ty), r || (r = {});
  const { insertAt: l } = r;
  if (document.getElementById(t))
    return void console.warn(
      `[react-tooltip] Element with id '${t}' already exists. Call \`removeStyle()\` first`
    );
  const a = document.head || document.getElementsByTagName("head")[0],
    s = document.createElement("style");
  (s.id = t),
    (s.type = "text/css"),
    l === "top" && a.firstChild
      ? a.insertBefore(s, a.firstChild)
      : a.appendChild(s),
    s.styleSheet
      ? (s.styleSheet.cssText = e)
      : s.appendChild(document.createTextNode(e)),
    (sd[n] = !0);
}
const cd = (e, t, n) => {
    let r = null;
    return function (...o) {
      const i = () => {
        (r = null), n || e.apply(this, o);
      };
      n && !r && (e.apply(this, o), (r = setTimeout(i, t))),
        n || (r && clearTimeout(r), (r = setTimeout(i, t)));
    };
  },
  zy = "DEFAULT_TOOLTIP_ID",
  Dy = {
    anchorRefs: new Set(),
    activeAnchor: { current: null },
    attach: () => {},
    detach: () => {},
    setActiveAnchor: () => {},
  },
  Fy = x.createContext({ getTooltipData: () => Dy });
function mm(e = zy) {
  return x.useContext(Fy).getTooltipData(e);
}
const My = typeof window < "u" ? x.useLayoutEffect : x.useEffect,
  $y = (e) => {
    if (!(e instanceof HTMLElement || e instanceof SVGElement)) return !1;
    const t = getComputedStyle(e);
    return ["overflow", "overflow-x", "overflow-y"].some((n) => {
      const r = t.getPropertyValue(n);
      return r === "auto" || r === "scroll";
    });
  },
  dd = (e) => {
    if (!e) return null;
    let t = e.parentElement;
    for (; t; ) {
      if ($y(t)) return t;
      t = t.parentElement;
    }
    return document.scrollingElement || document.documentElement;
  },
  fd = async ({
    elementReference: e = null,
    tooltipReference: t = null,
    tooltipArrowReference: n = null,
    place: r = "top",
    offset: o = 10,
    strategy: i = "absolute",
    middlewares: l = [fy(Number(o)), cy(), py({ padding: 5 })],
    border: a,
  }) => {
    if (!e) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: r };
    if (t === null)
      return { tooltipStyles: {}, tooltipArrowStyles: {}, place: r };
    const s = l;
    return n
      ? (s.push(uy({ element: n, padding: 5 })),
        ld(e, t, { placement: r, strategy: i, middleware: s }).then(
          ({ x: u, y: p, placement: m, middlewareData: h }) => {
            var v, g;
            const w = { left: `${u}px`, top: `${p}px`, border: a },
              { x: A, y: f } =
                (v = h.arrow) !== null && v !== void 0 ? v : { x: 0, y: 0 },
              c =
                (g = {
                  top: "bottom",
                  right: "left",
                  bottom: "top",
                  left: "right",
                }[m.split("-")[0]]) !== null && g !== void 0
                  ? g
                  : "bottom",
              d = a && { borderBottom: a, borderRight: a };
            let y = 0;
            if (a) {
              const C = `${a}`.match(/(\d+)px/);
              y = C != null && C[1] ? Number(C[1]) : 1;
            }
            return {
              tooltipStyles: w,
              tooltipArrowStyles: {
                left: A != null ? `${A}px` : "",
                top: f != null ? `${f}px` : "",
                right: "",
                bottom: "",
                ...d,
                [c]: `-${4 + y}px`,
              },
              place: m,
            };
          }
        ))
      : ld(e, t, { placement: "bottom", strategy: i, middleware: s }).then(
          ({ x: u, y: p, placement: m }) => ({
            tooltipStyles: { left: `${u}px`, top: `${p}px` },
            tooltipArrowStyles: {},
            place: m,
          })
        );
  };
var Uy = "core-styles-module_tooltip__3vRRp",
  jy = "core-styles-module_fixed__pcSol",
  By = "core-styles-module_arrow__cvMwQ",
  Vy = "core-styles-module_noArrow__xock6",
  Hy = "core-styles-module_clickable__ZuTTB",
  Wy = "core-styles-module_show__Nt9eE",
  la = {
    tooltip: "styles-module_tooltip__mnnfp",
    arrow: "styles-module_arrow__K0L3T",
    dark: "styles-module_dark__xNqje",
    light: "styles-module_light__Z6W-X",
    success: "styles-module_success__A2AKt",
    warning: "styles-module_warning__SCK0X",
    error: "styles-module_error__JvumD",
    info: "styles-module_info__BWdHW",
  };
const Qy = ({
    id: e,
    className: t,
    classNameArrow: n,
    variant: r = "dark",
    anchorId: o,
    anchorSelect: i,
    place: l = "top",
    offset: a = 10,
    events: s = ["hover"],
    openOnClick: u = !1,
    positionStrategy: p = "absolute",
    middlewares: m,
    wrapper: h,
    delayShow: v = 0,
    delayHide: g = 0,
    float: w = !1,
    hidden: A = !1,
    noArrow: f = !1,
    clickable: c = !1,
    closeOnEsc: d = !1,
    closeOnScroll: y = !1,
    closeOnResize: C = !1,
    style: E,
    position: R,
    afterShow: b,
    afterHide: j,
    content: F,
    contentWrapperRef: O,
    isOpen: H,
    setIsOpen: oe,
    activeAnchor: Y,
    setActiveAnchor: Z,
    border: he,
    opacity: ae,
    arrowColor: L,
  }) => {
    const U = x.useRef(null),
      B = x.useRef(null),
      G = x.useRef(null),
      _ = x.useRef(null),
      [I, z] = x.useState(l),
      [W, k] = x.useState({}),
      [K, T] = x.useState({}),
      [ie, ne] = x.useState(!1),
      [re, Q] = x.useState(!1),
      xe = x.useRef(!1),
      be = x.useRef(null),
      { anchorRefs: X, setActiveAnchor: Re } = mm(e),
      q = x.useRef(!1),
      [fe, St] = x.useState([]),
      ge = x.useRef(!1),
      xt = u || s.includes("click");
    My(
      () => (
        (ge.current = !0),
        () => {
          ge.current = !1;
        }
      ),
      []
    ),
      x.useEffect(() => {
        if (!ie) {
          const M = setTimeout(() => {
            Q(!1);
          }, 150);
          return () => {
            clearTimeout(M);
          };
        }
        return () => null;
      }, [ie]);
    const je = (M) => {
      ge.current &&
        (M && Q(!0),
        setTimeout(() => {
          ge.current && (oe == null || oe(M), H === void 0 && ne(M));
        }, 10));
    };
    x.useEffect(() => {
      if (H === void 0) return () => null;
      H && Q(!0);
      const M = setTimeout(() => {
        ne(H);
      }, 10);
      return () => {
        clearTimeout(M);
      };
    }, [H]),
      x.useEffect(() => {
        ie !== xe.current &&
          ((xe.current = ie), ie ? b == null || b() : j == null || j());
      }, [ie]);
    const Ie = (M = g) => {
        _.current && clearTimeout(_.current),
          (_.current = setTimeout(() => {
            q.current || je(!1);
          }, M));
      },
      V = (M) => {
        var J;
        if (!M) return;
        const D = (J = M.currentTarget) !== null && J !== void 0 ? J : M.target;
        if (!(D != null && D.isConnected))
          return Z(null), void Re({ current: null });
        v
          ? (G.current && clearTimeout(G.current),
            (G.current = setTimeout(() => {
              je(!0);
            }, v)))
          : je(!0),
          Z(D),
          Re({ current: D }),
          _.current && clearTimeout(_.current);
      },
      pe = () => {
        c ? Ie(g || 100) : g ? Ie() : je(!1),
          G.current && clearTimeout(G.current);
      },
      Ft = ({ x: M, y: J }) => {
        fd({
          place: l,
          offset: a,
          elementReference: {
            getBoundingClientRect: () => ({
              x: M,
              y: J,
              width: 0,
              height: 0,
              top: J,
              left: M,
              right: M,
              bottom: J,
            }),
          },
          tooltipReference: U.current,
          tooltipArrowReference: B.current,
          strategy: p,
          middlewares: m,
          border: he,
        }).then((D) => {
          Object.keys(D.tooltipStyles).length && k(D.tooltipStyles),
            Object.keys(D.tooltipArrowStyles).length && T(D.tooltipArrowStyles),
            z(D.place);
        });
      },
      en = (M) => {
        if (!M) return;
        const J = M,
          D = { x: J.clientX, y: J.clientY };
        Ft(D), (be.current = D);
      },
      rt = (M) => {
        V(M), g && Ie();
      },
      _r = (M) => {
        var J;
        [document.querySelector(`[id='${o}']`), ...fe].some((D) =>
          D == null ? void 0 : D.contains(M.target)
        ) ||
          (!((J = U.current) === null || J === void 0) &&
            J.contains(M.target)) ||
          (je(!1), G.current && clearTimeout(G.current));
      },
      Lr = cd(V, 50, !0),
      bn = cd(pe, 50, !0),
      tn = x.useCallback(() => {
        R
          ? Ft(R)
          : w
          ? be.current && Ft(be.current)
          : fd({
              place: l,
              offset: a,
              elementReference: Y,
              tooltipReference: U.current,
              tooltipArrowReference: B.current,
              strategy: p,
              middlewares: m,
              border: he,
            }).then((M) => {
              ge.current &&
                (Object.keys(M.tooltipStyles).length && k(M.tooltipStyles),
                Object.keys(M.tooltipArrowStyles).length &&
                  T(M.tooltipArrowStyles),
                z(M.place));
            });
      }, [ie, Y, F, E, l, a, p, R, w]);
    x.useEffect(() => {
      var M, J;
      const D = new Set(X);
      fe.forEach(($t) => {
        D.add({ current: $t });
      });
      const ee = document.querySelector(`[id='${o}']`);
      ee && D.add({ current: ee });
      const de = () => {
          je(!1);
        },
        Ye = dd(Y),
        Be = dd(U.current);
      y &&
        (window.addEventListener("scroll", de),
        Ye == null || Ye.addEventListener("scroll", de),
        Be == null || Be.addEventListener("scroll", de));
      let Pt = null;
      C
        ? window.addEventListener("resize", de)
        : Y &&
          U.current &&
          (Pt = Ly(Y, U.current, tn, {
            ancestorResize: !0,
            elementResize: !0,
            layoutShift: !0,
          }));
      const Tr = ($t) => {
        $t.key === "Escape" && je(!1);
      };
      d && window.addEventListener("keydown", Tr);
      const Mt = [];
      xt
        ? (window.addEventListener("click", _r),
          Mt.push({ event: "click", listener: rt }))
        : (Mt.push(
            { event: "mouseenter", listener: Lr },
            { event: "mouseleave", listener: bn },
            { event: "focus", listener: Lr },
            { event: "blur", listener: bn }
          ),
          w && Mt.push({ event: "mousemove", listener: en }));
      const Do = () => {
          q.current = !0;
        },
        Eu = () => {
          (q.current = !1), pe();
        };
      return (
        c &&
          !xt &&
          ((M = U.current) === null ||
            M === void 0 ||
            M.addEventListener("mouseenter", Do),
          (J = U.current) === null ||
            J === void 0 ||
            J.addEventListener("mouseleave", Eu)),
        Mt.forEach(({ event: $t, listener: Ir }) => {
          D.forEach((Pl) => {
            var zr;
            (zr = Pl.current) === null ||
              zr === void 0 ||
              zr.addEventListener($t, Ir);
          });
        }),
        () => {
          var $t, Ir;
          y &&
            (window.removeEventListener("scroll", de),
            Ye == null || Ye.removeEventListener("scroll", de),
            Be == null || Be.removeEventListener("scroll", de)),
            C ? window.removeEventListener("resize", de) : Pt == null || Pt(),
            xt && window.removeEventListener("click", _r),
            d && window.removeEventListener("keydown", Tr),
            c &&
              !xt &&
              (($t = U.current) === null ||
                $t === void 0 ||
                $t.removeEventListener("mouseenter", Do),
              (Ir = U.current) === null ||
                Ir === void 0 ||
                Ir.removeEventListener("mouseleave", Eu)),
            Mt.forEach(({ event: Pl, listener: zr }) => {
              D.forEach((hm) => {
                var _l;
                (_l = hm.current) === null ||
                  _l === void 0 ||
                  _l.removeEventListener(Pl, zr);
              });
            });
        }
      );
    }, [Y, tn, re, X, fe, d, s]),
      x.useEffect(() => {
        let M = i ?? "";
        !M && e && (M = `[data-tooltip-id='${e}']`);
        const J = new MutationObserver((D) => {
          const ee = [];
          D.forEach((de) => {
            if (
              (de.type === "attributes" &&
                de.attributeName === "data-tooltip-id" &&
                de.target.getAttribute("data-tooltip-id") === e &&
                ee.push(de.target),
              de.type === "childList" &&
                (Y &&
                  [...de.removedNodes].some((Ye) => {
                    var Be;
                    return (
                      !!(
                        !(
                          (Be = Ye == null ? void 0 : Ye.contains) === null ||
                          Be === void 0
                        ) && Be.call(Ye, Y)
                      ) &&
                      (Q(!1),
                      je(!1),
                      Z(null),
                      G.current && clearTimeout(G.current),
                      _.current && clearTimeout(_.current),
                      !0)
                    );
                  }),
                M))
            )
              try {
                const Ye = [...de.addedNodes].filter((Be) => Be.nodeType === 1);
                ee.push(...Ye.filter((Be) => Be.matches(M))),
                  ee.push(...Ye.flatMap((Be) => [...Be.querySelectorAll(M)]));
              } catch {}
          }),
            ee.length && St((de) => [...de, ...ee]);
        });
        return (
          J.observe(document.body, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["data-tooltip-id"],
          }),
          () => {
            J.disconnect();
          }
        );
      }, [e, i, Y]),
      x.useEffect(() => {
        tn();
      }, [tn]),
      x.useEffect(() => {
        if (!(O != null && O.current)) return () => null;
        const M = new ResizeObserver(() => {
          tn();
        });
        return (
          M.observe(O.current),
          () => {
            M.disconnect();
          }
        );
      }, [F, O == null ? void 0 : O.current]),
      x.useEffect(() => {
        var M;
        const J = document.querySelector(`[id='${o}']`),
          D = [...fe, J];
        (Y && D.includes(Y)) || Z((M = fe[0]) !== null && M !== void 0 ? M : J);
      }, [o, fe, Y]),
      x.useEffect(
        () => () => {
          G.current && clearTimeout(G.current),
            _.current && clearTimeout(_.current);
        },
        []
      ),
      x.useEffect(() => {
        let M = i;
        if ((!M && e && (M = `[data-tooltip-id='${e}']`), M))
          try {
            const J = Array.from(document.querySelectorAll(M));
            St(J);
          } catch {
            St([]);
          }
      }, [e, i]);
    const Or = !A && F && ie && Object.keys(W).length > 0;
    return re
      ? ht.createElement(
          h,
          {
            id: e,
            role: "tooltip",
            className: ad(
              "react-tooltip",
              Uy,
              la.tooltip,
              la[r],
              t,
              `react-tooltip__place-${I}`,
              {
                "react-tooltip__show": Or,
                [Wy]: Or,
                [jy]: p === "fixed",
                [Hy]: c,
              }
            ),
            style: { ...E, ...W, opacity: ae !== void 0 && Or ? ae : void 0 },
            ref: U,
          },
          F,
          ht.createElement(h, {
            className: ad("react-tooltip-arrow", By, la.arrow, n, { [Vy]: f }),
            style: {
              ...K,
              background: L
                ? `linear-gradient(to right bottom, transparent 50%, ${L} 50%)`
                : void 0,
            },
            ref: B,
          })
        )
      : null;
  },
  Yy = ({ content: e }) =>
    ht.createElement("span", { dangerouslySetInnerHTML: { __html: e } }),
  Gy = ({
    id: e,
    anchorId: t,
    anchorSelect: n,
    content: r,
    html: o,
    render: i,
    className: l,
    classNameArrow: a,
    variant: s = "dark",
    place: u = "top",
    offset: p = 10,
    wrapper: m = "div",
    children: h = null,
    events: v = ["hover"],
    openOnClick: g = !1,
    positionStrategy: w = "absolute",
    middlewares: A,
    delayShow: f = 0,
    delayHide: c = 0,
    float: d = !1,
    hidden: y = !1,
    noArrow: C = !1,
    clickable: E = !1,
    closeOnEsc: R = !1,
    closeOnScroll: b = !1,
    closeOnResize: j = !1,
    style: F,
    position: O,
    isOpen: H,
    disableStyleInjection: oe = !1,
    border: Y,
    opacity: Z,
    arrowColor: he,
    setIsOpen: ae,
    afterShow: L,
    afterHide: U,
  }) => {
    const [B, G] = x.useState(r),
      [_, I] = x.useState(o),
      [z, W] = x.useState(u),
      [k, K] = x.useState(s),
      [T, ie] = x.useState(p),
      [ne, re] = x.useState(f),
      [Q, xe] = x.useState(c),
      [be, X] = x.useState(d),
      [Re, q] = x.useState(y),
      [fe, St] = x.useState(m),
      [ge, xt] = x.useState(v),
      [je, Ie] = x.useState(w),
      [V, pe] = x.useState(null),
      Ft = x.useRef(oe),
      { anchorRefs: en, activeAnchor: rt } = mm(e),
      _r = (M) =>
        M == null
          ? void 0
          : M.getAttributeNames().reduce((J, D) => {
              var ee;
              return (
                D.startsWith("data-tooltip-") &&
                  (J[D.replace(/^data-tooltip-/, "")] =
                    (ee = M == null ? void 0 : M.getAttribute(D)) !== null &&
                    ee !== void 0
                      ? ee
                      : null),
                J
              );
            }, {}),
      Lr = (M) => {
        const J = {
          place: (D) => {
            var ee;
            W((ee = D) !== null && ee !== void 0 ? ee : u);
          },
          content: (D) => {
            G(D ?? r);
          },
          html: (D) => {
            I(D ?? o);
          },
          variant: (D) => {
            var ee;
            K((ee = D) !== null && ee !== void 0 ? ee : s);
          },
          offset: (D) => {
            ie(D === null ? p : Number(D));
          },
          wrapper: (D) => {
            var ee;
            St((ee = D) !== null && ee !== void 0 ? ee : m);
          },
          events: (D) => {
            const ee = D == null ? void 0 : D.split(" ");
            xt(ee ?? v);
          },
          "position-strategy": (D) => {
            var ee;
            Ie((ee = D) !== null && ee !== void 0 ? ee : w);
          },
          "delay-show": (D) => {
            re(D === null ? f : Number(D));
          },
          "delay-hide": (D) => {
            xe(D === null ? c : Number(D));
          },
          float: (D) => {
            X(D === null ? d : D === "true");
          },
          hidden: (D) => {
            q(D === null ? y : D === "true");
          },
        };
        Object.values(J).forEach((D) => D(null)),
          Object.entries(M).forEach(([D, ee]) => {
            var de;
            (de = J[D]) === null || de === void 0 || de.call(J, ee);
          });
      };
    x.useEffect(() => {
      G(r);
    }, [r]),
      x.useEffect(() => {
        I(o);
      }, [o]),
      x.useEffect(() => {
        W(u);
      }, [u]),
      x.useEffect(() => {
        K(s);
      }, [s]),
      x.useEffect(() => {
        ie(p);
      }, [p]),
      x.useEffect(() => {
        re(f);
      }, [f]),
      x.useEffect(() => {
        xe(c);
      }, [c]),
      x.useEffect(() => {
        X(d);
      }, [d]),
      x.useEffect(() => {
        q(y);
      }, [y]),
      x.useEffect(() => {
        Ie(w);
      }, [w]),
      x.useEffect(() => {
        Ft.current !== oe &&
          console.warn(
            "[react-tooltip] Do not change `disableStyleInjection` dynamically."
          );
      }, [oe]),
      x.useEffect(() => {
        typeof window < "u" &&
          window.dispatchEvent(
            new CustomEvent("react-tooltip-inject-styles", {
              detail: { disableCore: oe === "core", disableBase: oe },
            })
          );
      }, []),
      x.useEffect(() => {
        var M;
        const J = new Set(en);
        let D = n;
        if ((!D && e && (D = `[data-tooltip-id='${e}']`), D))
          try {
            document.querySelectorAll(D).forEach((Pt) => {
              J.add({ current: Pt });
            });
          } catch {
            console.warn(`[react-tooltip] "${D}" is not a valid CSS selector`);
          }
        const ee = document.querySelector(`[id='${t}']`);
        if ((ee && J.add({ current: ee }), !J.size)) return () => null;
        const de = (M = V ?? ee) !== null && M !== void 0 ? M : rt.current,
          Ye = new MutationObserver((Pt) => {
            Pt.forEach((Tr) => {
              var Mt;
              if (
                !de ||
                Tr.type !== "attributes" ||
                !(
                  !((Mt = Tr.attributeName) === null || Mt === void 0) &&
                  Mt.startsWith("data-tooltip-")
                )
              )
                return;
              const Do = _r(de);
              Lr(Do);
            });
          }),
          Be = { attributes: !0, childList: !1, subtree: !1 };
        if (de) {
          const Pt = _r(de);
          Lr(Pt), Ye.observe(de, Be);
        }
        return () => {
          Ye.disconnect();
        };
      }, [en, rt, V, t, n]),
      x.useEffect(() => {
        F != null &&
          F.border &&
          console.warn(
            "[react-tooltip] Do not set `style.border`. Use `border` prop instead."
          ),
          Y &&
            !CSS.supports("border", `${Y}`) &&
            console.warn(`[react-tooltip] "${Y}" is not a valid \`border\`.`),
          F != null &&
            F.opacity &&
            console.warn(
              "[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."
            ),
          Z &&
            !CSS.supports("opacity", `${Z}`) &&
            console.warn(`[react-tooltip] "${Z}" is not a valid \`opacity\`.`);
      }, []);
    let bn = h;
    const tn = x.useRef(null);
    if (i) {
      const M = i({ content: B ?? null, activeAnchor: V });
      bn = M
        ? ht.createElement(
            "div",
            { ref: tn, className: "react-tooltip-content-wrapper" },
            M
          )
        : null;
    } else B && (bn = B);
    _ && (bn = ht.createElement(Yy, { content: _ }));
    const Or = {
      id: e,
      anchorId: t,
      anchorSelect: n,
      className: l,
      classNameArrow: a,
      content: bn,
      contentWrapperRef: tn,
      place: z,
      variant: k,
      offset: T,
      wrapper: fe,
      events: ge,
      openOnClick: g,
      positionStrategy: je,
      middlewares: A,
      delayShow: ne,
      delayHide: Q,
      float: be,
      hidden: Re,
      noArrow: C,
      clickable: E,
      closeOnEsc: R,
      closeOnScroll: b,
      closeOnResize: j,
      style: F,
      position: O,
      isOpen: H,
      border: Y,
      opacity: Z,
      arrowColor: he,
      setIsOpen: ae,
      afterShow: L,
      afterHide: U,
      activeAnchor: V,
      setActiveAnchor: (M) => pe(M),
    };
    return ht.createElement(Qy, { ...Or });
  };
typeof window < "u" &&
  window.addEventListener("react-tooltip-inject-styles", (e) => {
    e.detail.disableCore ||
      ud({
        css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9}.core-styles-module_tooltip__3vRRp{visibility:hidden;position:absolute;top:0;left:0;pointer-events:none;opacity:0;transition:opacity 0.3s ease-out;will-change:opacity,visibility}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{visibility:visible;opacity:var(--rt-opacity)}",
        type: "core",
      }),
      e.detail.disableBase ||
        ud({
          css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,
          type: "base",
        });
  });
const Ky = () => {
    const [e, t] = x.useState([]),
      [n, r] = x.useState(),
      [o, i] = x.useState(0),
      [l, a] = x.useState([]),
      [s, u] = x.useState(!1),
      [p, m] = x.useState(!1),
      [h, v] = x.useState(),
      [g, w] = x.useState({}),
      A = x.useRef(null),
      f = new Audio(Zc.openedMusic),
      c = new Audio(Zc.win),
      d = 4e3;
    (f.volume = 0.3),
      (c.volume = 0.3),
      x.useEffect(() => {
        Xt("requestCrates", {}).then((O) => {
            t(O),
            a(O[0].itens),
            r(O[0].name),
            i(O[0].crate_index),
            v(O[0].icon_opened);
        });
      }, []);
    function y(O, H, oe, Y) {
      a(O), r(H), i(oe), v(Y);
    }
    async function C() {
      try {
        console.log(o)
        const O = await Xt("openCrate", { indexCrate: o });
        A.current && (clearTimeout(A.current), (A.current = null)),
          O && (E(O), b(f), await j(d), R(), b(c));
      } catch (O) {
        console.error("Erro ao abrir caixa:", O);
      }
    }
    function E(O) {
      m(!0), w(O);
    }
    function R() {
      f.pause(), u(!0);
    }
    function b(O) {
      O.play();
    }
    function j(O) {
      return new Promise((H) => {
        A.current = setTimeout(() => {
          H(null), (A.current = null);
        }, O);
      });
    }
    function F() {
      m(!1), u(!1), c.pause();
    }
    return N(Gv, {
      children: [
        S(Kv, {
          children:
            e == null
              ? void 0
              : e.map((O, H) =>
                  N(
                    Xv,
                    {
                      className: n == O.name ? "itemBoxSelected" : "",
                      onClick: () =>
                        y(O.itens, O.name, O.crate_index, O.icon_opened),
                      children: [
                        N("div", {
                          className: "title",
                          children: [
                            S("h1", { children: O.name }),
                            S("p", { children: "CAIXA" }),
                          ],
                        }),
                        S("img", { src: O.icon, alt: "" }),
                        N("div", {
                          className: "value",
                          children: [
                            S("img", { src: Se.coin, alt: "" }),
                            S("p", { children: O.coins }),
                          ],
                        }),
                      ],
                    },
                    O.name + H
                  )
                ),
        }),
        N(Jv, {
          children: [
            N("div", {
              className: "top",
              children: [
                S("img", { src: Se.barPoint, alt: "" }),
                S("p", { children: "CONTEÚDO" }),
                S("img", { className: "scale", src: Se.barPoint, alt: "" }),
              ],
            }),
            S("div", {
              className: "list",
              children:
                l == null
                  ? void 0
                  : l.map((O, H) =>
                      N(
                        "div",
                        {
                          className: "item",
                          children: [
                            S(Gy, { id: `my-tooltip${H}` }),
                            N("svg", {
                              "data-tooltip-id": `my-tooltip${H}`,
                              "data-tooltip-content":
                                O.rarity.toLocaleUpperCase() == "COMUM"
                                  ? "COMUM"
                                  : O.rarity.toLocaleUpperCase() == "SPECIAL"
                                  ? "ESPECIAL"
                                  : O.rarity.toLocaleUpperCase() == "EPIC"
                                  ? "ÉPICA"
                                  : O.rarity.toLocaleUpperCase() == "LEGENDARY"
                                  ? "LENDÁRIA"
                                  : "",
                              width: "21",
                              height: "20",
                              viewBox: "0 0 21 20",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: [
                                S("path", {
                                  "fill-rule": "evenodd",
                                  "clip-rule": "evenodd",
                                  d: "M15.516 1C17.6382 1 19.3586 2.69388 19.3586 4.78339L19.3586 17.3586L15.0891 13.1549L15.0891 6.67509C15.0891 5.97859 14.5156 5.41396 13.8082 5.41396L7.21935 5.41396L3 1L15.516 1Z",
                                  fill: `url(#paint0_linear_${H})`,
                                }),
                                S("path", {
                                  d: "M19.0078 17.7149L19.8586 18.5526L19.8586 17.3586L19.8586 4.78339C19.8586 2.41045 17.907 0.5 15.516 0.5L3 0.500001L1.83035 0.500001L2.63857 1.3455L6.85791 5.75946L7.00561 5.91396L7.21935 5.91396L13.8082 5.91396C14.2468 5.91396 14.5891 6.26202 14.5891 6.67509L14.5891 13.1549L14.5891 13.3643L14.7383 13.5112L19.0078 17.7149Z",
                                  stroke: O.color,
                                  "stroke-opacity": "0.5",
                                }),
                                S("defs", {
                                  children: N("linearGradient", {
                                    id: `paint0_linear_${H}`,
                                    x1: "18.0778",
                                    y1: "2.26113",
                                    x2: "8.62043",
                                    y2: "11.8665",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      S("stop", { "stop-color": O.color }),
                                      S("stop", {
                                        offset: "1",
                                        "stop-color": O.color,
                                        "stop-opacity": "0.0677083",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            S("div", {
                              className: "nameItem",
                              children: O.name.toUpperCase(),
                            }),
                            N("div", {
                              className: "amountItem",
                              children: [
                                O.amount,
                                "x",
                                O.maxAmount ? " - " + O.maxAmount + "x" : "",
                              ],
                            }),
                            S("img", {
                              src:
                                O.type == "ITEM"
                                  ? "http://181.215.254.182/inventario/" +
                                    O.spawn +
                                    ".png"
                                  : O.type == "OTHERS"
                                  ? "http://181.215.254.182/inventario/" +
                                    O.spawn +
                                    ".png"
                                  : "http://181.215.254.182/inventario/" +
                                    O.spawn +
                                    ".png",
                              alt: "",
                            }),
                          ],
                        },
                        O.spawn + H
                      )
                    ),
            }),
            S("button", { onClick: C, children: "ABRIR CAIXA" }),
          ],
          }),
          p &&
            N(ey, {
              children: [
                // Exibe animação de abertura por 10 segundos
                !s &&
                  S("div", {
                    className: "opening",
                    children: S("video", {
                      src: "http://181.215.254.182/box/box-abrindo.mp4",
                      autoPlay: true,
                      muted: true,
                      style: { width: '100%' }, // Ajusta a largura do vídeo
                      onEnded: () => {
                        // Libera o item quando o vídeo termina
                        setS(true); // Ou a função que você utiliza para atualizar o estado
                      },
                    }),
                  }),
          
                // Quando o tempo de 10 segundos acaba, mostra o item
                s &&
                  N(Bt, {
                    children: [
                      N("div", {
                        className: "opened",
                        children: [
                          S("img", { className: "box", src: h, alt: "" }),
                          N("div", {
                            className: "item",
                            children: [
                              S("h1", { children: "PARABÉNS!" }),
                              N("p", {
                                children: [
                                  "Você ganhou: ",
                                  S("br", {}),
                                  N("span", {
                                    children: [
                                      g.amount,
                                      "x",
                                      " ",
                                      g.name.toUpperCase(),
                                    ],
                                  }),
                                ],
                              }),
                              S("img", {
                                src:
                                  g.type == "ITEM" || g.type == "OTHERS"
                                    ? `http://181.215.254.182/inventario/${g.spawn}.png`
                                    : `http://181.215.254.182/inventario/${g.spawn}.png`,
                                alt: "",
                              }),
                            ],
                          }),
                        ],
                      }),
                      S("button", { onClick: F, children: "FECHAR" }),
                    ],
                  }),
              ],
            }),
          ],
          });
          

  },
  Xy = ce.div`
    width: 127.3rem;

    display: flex;

`,
  Jy = ce.div`
    width: 23.5rem;
    height: 63.1rem;border: 0.1rem solid rgba(255, 255, 255, 0.15);
    border: 0.1rem solid rgba(255, 255, 255, 0.15);
    background: radial-gradient(186.52% 163.05% at 100% 102.91%, #4B6DD5 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(72deg, rgba(0, 0, 0, 0.35) 19.47%, rgba(0, 0, 0, 0.00) 94.28%);


    position: relative;

    z-index: 2;

    display: flex;
    align-items: center;
    flex-direction: column;

    h1{
        b{         
            color: #FFCA0F;
        }
        color: #fff;
        font-size: 2.6rem;
        font-style: normal;
        font-weight: 900;
        line-height: normal;
        margin-top: 2.6rem;
    }

    p{
        max-width: 90%;
        color: rgba(255, 255, 255, 0.80);
        text-align: center;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 124.5%; /* 1.494rem */

        b{
            color: #FFCA0F;

        }
    }

    img{
        position: absolute;
        bottom: -2.9rem;
        left: -.7rem;
        width: 29.9rem;
    }


    button{
        width: 11rem;
        height: 3rem;

        margin-top: 2rem;

        color: #FFF;
        text-align: center;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    
        outline: none;
        border: 0.1rem solid rgba(255, 255, 255, 0.20);
        background: rgba(0, 0, 0, 0.35);    

        
        &:hover{
            filter: brightness(.8);
            cursor: pointer;
        }
    }

    .cupom{
        width: 23.5rem;
        height: 3.8rem;
        background: rgba(0, 0, 0, 0.57);

        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: -.1rem;

        color: #FFF;
        font-size: 1.4182rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        b{
            color: #03D4EB;
        }
    }
`,
  Zy = ce.div`
        margin-left: 1.5rem;

    .subMenu{

        display: flex;
        align-items: center;
        gap: 1rem;

        button{
            width: 7.6rem;
            height: 3.2rem;
            color: #FFF;
            text-align: center;
            font-size: 1.4rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            flex-shrink: 0;
            border: 0.101rem solid rgba(255, 255, 255, 0.12);
            background: radial-gradient(47.62% 70.59% at 50% 78.53%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(299.1% 426.27% at 50% 50%, rgba(212, 212, 212, 0.10) 0%, rgba(0, 0, 0, 0.00) 100%), rgba(0, 0, 0, 0.35);
 
            &:hover{
                filter: brightness(.8);
                cursor: pointer;
            }
        }

        img{
            width: 45rem;
        }
    }


    .list{
        width: 79.3rem;
        height: 59rem;
        margin-top: .9rem;
        overflow: auto;
        padding: 2rem 4rem;

        &::-webkit-scrollbar {
            display: none;
        }

        
        background: linear-gradient(72deg, rgba(0, 0, 0, 0.35) 19.47%, rgba(0, 0, 0, 0.00) 94.28%);
        border: .1rem solid rgba(255, 255, 255, 0.15);

        display: grid;
        grid-template-columns: repeat(5, 1fr);

        .item{
            
            width: 13.0846rem;
            height: 12.96rem;
            background: url(${Se.bgItemShop});
            background-size: 100% 100%;
            background-position: center center;
            margin-top: .9rem;

            padding: 1rem;

            position: relative;


            .topitemOrnament{
                position: absolute;
                top: 0;
                right: 0;
            }

                    
            .imgItem{
                max-width: 6.72rem;
                max-height: 6.72rem;
            }
            .nameItem{
                position: absolute;
                top: 1rem;
                color: #FFF;
                text-align: center;
                font-size: 1.08rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
            .coinItem{

                img{
                    width: 1.6rem;
                }

                position: absolute;
                bottom: .5rem;
                left: 1rem;
                color: #FFF;
                text-align: center;
                font-size: 1.08rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;

                display: flex;
                align-items: center;
                gap: .4rem;
                
            }
            .amount{
                position: absolute;
                right: 1rem;
                bottom: .5rem;
                min-width: 1.92rem;
                padding-left: .5rem;
                padding-right: .5rem;
                height: 1.44rem;
                border: 0.12rem solid #4B6DD5;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #FFF;
                text-align: center;
                font-size: 1.08rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                background: linear-gradient(20deg, #4B6DD5 -4.5%, rgba(75, 109, 213, 0.00) 163.37%), rgba(0, 0, 0, 0.20);
                box-shadow: 0rem 0rem 2.04rem 0rem rgba(75, 109, 213, 0.43);
            }

            display: flex;
            align-items: center;
            justify-content: center;

            .buttonCart{
                width: 6.84rem;
                height: 1.8rem;

                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                bottom: .5rem;

                transition: all .2s ease-in-out;

                opacity: 0;

                border: 0.12rem solid #4B6DD5;
                background: linear-gradient(20deg, #4B6DD5 -4.5%, rgba(75, 109, 213, 0.00) 163.37%), rgba(0, 0, 0, 0.20);
                box-shadow: 0rem 0rem 2.04rem 0rem rgba(75, 109, 213, 0.43);
            }


            &:hover .amount, &:hover .coinItem{
                display: none;
            }
            &:hover .buttonCart{
                opacity: 1;
                cursor: pointer;
            }
        }
    }
`,
  qy = ce.div`
    margin-left: 1.5rem;

    .bestSellers{
        width: 21.4rem;
        height: 56.2rem;
        background: linear-gradient(72deg, rgba(0, 0, 0, 0.35) 19.47%, rgba(0, 0, 0, 0.00) 94.28%);
        border: .1rem solid rgba(255, 255, 255, 0.15);
        padding: 2rem;


        
        .overflow{
            ::-webkit-scrollbar{
                display: none;
            }
            height: 88%;
            margin-top: 1rem;
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
            overflow: auto;
        }

        h1{
            text-align: center;
            font-size: 3rem;
            font-style: normal;
            font-weight: 700;
            line-height: 91.5%; /* 2.745rem */
            background: linear-gradient(89deg, #FFF 31.77%, rgba(255, 255, 255, 0.00) 172.15%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .item{
            
            width: 13.0846rem;
            height: 12.96rem;
            background: url(${Se.bgItemShop});
            background-size: 100% 100%;
            background-position: center center;
            margin: auto;
            padding: 1rem;

            position: relative;


            .topitemOrnament{
                position: absolute;
                top: 0;
                right: 0;
            }

                    
            .imgItem{
                max-width: 6.72rem;
                max-height: 6.72rem;
            }
            .nameItem{
                position: absolute;
                top: 1rem;
                color: #FFF;
                text-align: center;
                font-size: 1.08rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
            .coinItem{

                img{
                    width: 1.6rem;
                }

                position: absolute;
                bottom: .5rem;
                left: 1rem;
                color: #FFF;
                text-align: center;
                font-size: 1.08rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;

                display: flex;
                align-items: center;
                gap: .4rem;
                
            }
            .amount{
                position: absolute;
                right: 1rem;
                bottom: .5rem;
                min-width: 1.92rem;
                height: 1.44rem;
                border: 0.12rem solid #4B6DD5;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #FFF;
                text-align: center;
                font-size: 1.08rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                background: linear-gradient(20deg, #4B6DD5 -4.5%, rgba(75, 109, 213, 0.00) 163.37%), rgba(0, 0, 0, 0.20);
                box-shadow: 0rem 0rem 2.04rem 0rem rgba(75, 109, 213, 0.43);
            }

            display: flex;
            align-items: center;
            justify-content: center;

            
            .buttonCart{
                width: 6.84rem;
                height: 1.8rem;

                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                bottom: .5rem;

                transition: all .2s ease-in-out;

                opacity: 0;

                border: 0.12rem solid #4B6DD5;
                background: linear-gradient(20deg, #4B6DD5 -4.5%, rgba(75, 109, 213, 0.00) 163.37%), rgba(0, 0, 0, 0.20);
                box-shadow: 0rem 0rem 2.04rem 0rem rgba(75, 109, 213, 0.43);
            }


            &:hover .amount, &:hover .coinItem{
                display: none;
            }
            &:hover .buttonCart{
                opacity: 1;
                cursor: pointer;
            }
        }
    }


    .contentCart{
        
        width: 21.4rem;
        height: 47.8rem;
        background: linear-gradient(72deg, rgba(0, 0, 0, 0.35) 19.47%, rgba(0, 0, 0, 0.00) 94.28%);
        border: .1rem solid rgba(255, 255, 255, 0.15);
        padding: 1rem;

        
        h1{
            text-align: center;
            font-size: 3rem;
            font-style: normal;
            font-weight: 700;
            line-height: 91.5%; /* 2.745rem */
            background: linear-gradient(89deg, #FFF 31.77%, rgba(255, 255, 255, 0.00) 172.15%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }


        .overflow{
            ::-webkit-scrollbar{
                display: none;
            }
            height: 88%;
            margin-top: 1rem;
            
            overflow: auto;


            .item{
                width: 100%;
                height: 5.96rem;

                display: flex;
                margin-bottom: .5rem;

                .leftItem{
                    width: 5.96rem;
                    height: 5.96rem;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    background: url(${Se.bgItemShop});
                    background-size: 100% 100%;
                    background-position: center center;

                    img{
                        max-width: 3.6721rem;
                        max-height: 3.64rem;
                        
                    }
                }

                .rightItem{
                    .topitemOrnament{
                        position: absolute;
                        right: 0;
                        top: -.1rem;
                        width: 2rem;

                    }
                    width: 12.6rem;
                    height: 5.96rem;
                    margin-left: .5rem;
                    
                    background: url(${Se.bgItemShop});
                    background-size: 100% 100%;
                    background-position: center center;

                    position: relative;

                    p{
                        position: absolute;
                        left: .5rem;
                        top: .5rem;
                        color: #FFF;
                        text-align: center;
                        font-size: 1.17rem;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;

                    }

                    .actions{
                        
                        display: flex;
                        align-items: center;
                        gap: .5rem;
                        
                        position: absolute;
                        bottom: 1rem;
                        left: 1rem;
                        
                        p{
                            padding-left: .5rem;
                            padding-right: .5rem;
                            min-width: 1.82rem;
                            height: 1.82rem;
                            position: static;

                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border: 0.13rem solid #4B6DD5;
                            background: linear-gradient(20deg, #4B6DD5 -4.5%, rgba(75, 109, 213, 0.00) 163.37%), rgba(0, 0, 0, 0.20);
                            box-shadow: 0rem 0rem 2.21rem 0rem rgba(75, 109, 213, 0.43);
                        }

                        button{
                            width: 1.82rem;
                            height: 1.82rem;
                            margin: 0;

                            display: flex;
                            align-items: center;
                            justify-content: center;
                            line-height: 0;
                        }

                        .rem{
                            border: 0.13rem solid #D54B4B;
                            background: linear-gradient(20deg, #D54B4B -4.5%, rgba(213, 75, 75, 0.00) 163.37%), rgba(0, 0, 0, 0.20);
                            box-shadow: 0rem 0rem 2.21rem 0rem rgba(213, 75, 75, 0.43); 
                        }

                        .add{
                            border: 0.13rem solid #4BD582;
                            background: linear-gradient(20deg, #4BD582 -4.5%, rgba(75, 213, 130, 0.00) 163.37%), rgba(0, 0, 0, 0.20);
                            box-shadow: 0rem 0rem 2.21rem 0rem rgba(75, 213, 130, 0.43);

                        }
                    }

                    .close{

                        position: absolute;
                        width: 1.43rem;
                        height: 1.43rem;

                        border-radius: 0.13rem;
                        border: 0.13rem solid #FE7171;
                        background: #C25D5D;

                        display: flex;
                        align-items: center;
                        justify-content: center;

                        right: 0;
                        bottom: 0;

                        p{
                            transform: rotate(45deg);
                            position: static;
                        }
                        
                    }

                    b{
                        display: flex;
                        position: absolute;
                        right: 1rem;
                        top: 55%;
                        transform: translateY(-50%);
                        color: #FFF;
                        font-size: 0.8789rem;
                        font-style: normal;
                        font-weight: 700;
                        line-height: 200%;

                        img{
                            width: 1.6038rem;
                        }
                    }

                }
            }
        }
        
    }
    
    .totalValueItem{
        width: 21.4rem;
        height: 6.7rem;
        margin-top: 1rem;
        border: 0.1rem solid rgba(255, 255, 255, 0.15);
        background: linear-gradient(72deg, rgba(0, 0, 0, 0.35) 19.47%, rgba(0, 0, 0, 0.00) 94.28%);
    
        display: flex;
        align-items: center;
        justify-content: center;

        p{
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: #FFF;
            font-size: 1.3rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }


        .amount{
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            gap: 0.5rem;

            background: rgba(255, 255, 255, 0.05);
            img{
                width: 2rem;

            }

            span{
                color: #FFF;
                font-size: 1.1097rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }

        }
    }

    button{
        width: 21.4rem;
        height: 6rem;
        border: 0.1rem solid rgba(255, 255, 255, 0.12); 
        background: radial-gradient(47.62% 70.59% at 50% 78.53%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(299.1% 426.27% at 50% 50%, rgba(212, 212, 212, 0.10) 0%, rgba(0, 0, 0, 0.00) 100%), rgba(0, 0, 0, 0.35);
        outline: none;

        margin-top: 1rem;

        color: #FFF;
        text-align: center;
        font-size: 1.542rem;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        
        &:hover{
            filter: brightness(.8);
            cursor: pointer;
        }
    }
`,
  ew = () => {
    const [e, t] = x.useState(),
      [n, r] = x.useState(),
      [o, i] = x.useState(!1),
      [l, a] = x.useState([]),
      [s, u] = x.useState(0),
      [p, m] = x.useState([]);
    x.useEffect(() => {
      Xt("requestStore", {}).then((d) => {
        t(d.store), r(d.store), m(d.bestSellers);
      });
    }, []),
      x.useEffect(() => {
        let d = 0;
        l.map((y, C) => {
          d += y.price * y.multiplier;
        }),
          u(d);
      }, [l]);
    function h(d) {
      if (d == "all") {
        r(e);
        return;
      }
      r(e),
        r((y) =>
          y == null ? void 0 : y.filter((C) => C.type.toLowerCase() === d)
        );
    }
    function v() {
      window.invokeNative("openUrl", "https://baixadasp.hydrus.gg/");
    }
    function g(d) {
      i(!0),
        a((y) =>
          y.find((E) => E.index === d.index)
            ? y.map((E) =>
                E.index === d.index
                  ? {
                      ...E,
                      amount: E.amount + d.amount,
                      multiplier: (E.multiplier || 1) + 1,
                    }
                  : E
              )
            : [...y, { ...d, originalAmount: d.amount, multiplier: 1 }]
        );
    }
    function w() {
      if ((l.length <= 0 && i(!0), l.length > 0)) {
        const d = l.map((y) => ({ index: y.index, amount: y.multiplier }));
        Xt("paymentStore", { cart: d }).then((y) => {
          y && a([]);
        });
      }
    }
    function A(d) {
      a((y) =>
        y.map((C) =>
          C.index === d
            ? {
                ...C,
                amount: C.amount + C.originalAmount,
                multiplier: C.multiplier + 1,
              }
            : C
        )
      );
    }
    function f(d) {
      a((y) => {
        const C = y
          .map((E) => {
            if (E.index === d) {
              const R =
                E.amount > E.originalAmount ? E.amount - E.originalAmount : 0;
              return {
                ...E,
                amount: R,
                multiplier: R === 0 ? 0 : E.multiplier - 1,
              };
            }
            return E;
          })
          .filter((E) => E.amount > 0);
        return C.length <= 0 && i(!1), C;
      });
    }
    function c(d) {
      a((y) => {
        const C = y
          .map((E) => {
            if (E.index === d) {
              const R =
                E.amount > E.originalAmount ? E.amount - E.originalAmount : 0;
              return {
                ...E,
                amount: 0,
                multiplier: R === 0 ? 0 : E.multiplier - 1,
              };
            }
            return E;
          })
          .filter((E) => E.amount > 0);
        return C.length <= 0 && i(!1), C;
      });
    }
    return N(Xy, {
      children: [
        N(Jy, {
          children: [
            N("h1", { children: ["LOJA ", S("b", { children: "VIP COINS" })] }),
            N("p", {
              children: [
                "Caso você possua um VIP, a cada 30 minutos você irá receber um",
                S("b", { children: " VIP COIN" }),
                ", e poderá trocar por itens aqui em nossa loja, Adquira já o seu VIP.",
              ],
            }),
            S("button", { onClick: v, children: "ACESSAR LOJA" }),
            S("img", { src: Se.menShop, alt: "" }),
            N("div", {
              className: "cupom",
              children: [S("b", { children: "CUPOM" }), ":thunder50"],
            }),
          ],
        }),
        N(Zy, {
          children: [
            N("div", {
              className: "subMenu",
              children: [
                S("button", { onClick: () => h("all"), children: "TODOS" }),
                S("button", { onClick: () => h("item"), children: "ITENS" }),
                S("button", {
                  onClick: () => h("vehicle"),
                  children: "CARROS",
                }),
                S("button", { onClick: () => h("others"), children: "EXTRAS" }),
                S("img", { src: Se.barPoint, alt: "" }),
              ],
            }),
            S("div", {
              className: "list",
              children:
                n == null
                  ? void 0
                  : n.map((d, y) =>
                      N("div", {
                        className: "item",
                        children: [
                          S("img", {
                            className: "topitemOrnament",
                            src: Oe.topitemShop,
                            alt: "",
                          }),
                          S("img", {
                            src:
                              d.type == "ITEM" || d.type == "OTHERS"
                                ? "http://181.215.254.182/inventario/" +
                                  d.spawn +
                                  ".png"
                                : "http://181.215.254.182/inventario/" +
                                  d.spawn +
                                  ".png",
                            alt: "",
                            className: "imgItem",
                          }),
                          S("div", {
                            className: "nameItem",
                            children: d.name.toUpperCase(),
                          }),
                          N("div", {
                            className: "coinItem",
                            children: [
                              S("img", { src: Se.vipcoin, alt: "" }),
                              S("p", { children: d.price }),
                            ],
                          }),
                          N("div", {
                            className: "amount",
                            children: [d.amount, "x"],
                          }),
                          S("div", {
                            className: "buttonCart",
                            onClick: () => g(d),
                            children: S("img", { src: Oe.cart, alt: "" }),
                          }),
                        ],
                      })
                    ),
            }),
          ],
        }),
        N(qy, {
          children: [
            !o &&
              N("div", {
                className: "bestSellers",
                children: [
                  S("h1", { children: "OS MAIS VENDIDOS" }),
                  S("div", {
                    className: "overflow",
                    children:
                      p == null
                        ? void 0
                        : p.map((d, y) =>
                            N("div", {
                              className: "item",
                              children: [
                                S("img", {
                                  className: "topitemOrnament",
                                  src: Oe.topitemShop,
                                  alt: "",
                                }),
                                S("img", {
                                  src:
                                    d.type == "ITEM" || d.type == "OTHERS"
                                      ? "http://181.215.254.182/inventario/" +
                                        d.spawn +
                                        ".png"
                                      : "http://181.215.254.182/inventario/" +
                                        d.spawn +
                                        ".png",
                                  alt: "",
                                  className: "imgItem",
                                }),
                                S("div", {
                                  className: "nameItem",
                                  children: d.name.toUpperCase(),
                                }),
                                N("div", {
                                  className: "coinItem",
                                  children: [
                                    S("img", { src: Se.vipcoin, alt: "" }),
                                    S("p", { children: d.price }),
                                  ],
                                }),
                                N("div", {
                                  className: "amount",
                                  children: [d.amount, "x"],
                                }),
                                S("div", {
                                  className: "buttonCart",
                                  children: S("img", { src: Oe.cart, alt: "" }),
                                }),
                              ],
                            })
                          ),
                  }),
                ],
              }),
            o &&
              N(Bt, {
                children: [
                  N("div", {
                    className: "contentCart",
                    children: [
                      S("h1", { children: "CARRINHO" }),
                      S("div", {
                        className: "overflow",
                        children: l.map((d, y) =>
                          N("div", {
                            className: "item",
                            children: [
                              S("div", {
                                className: "leftItem",
                                children: S("img", {
                                  src:
                                    d.type == "ITEM" || d.type == "OTHERS"
                                      ? "http://181.215.254.182/inventario/" +
                                        d.spawn +
                                        ".png"
                                      : "http://181.215.254.182/inventario/" +
                                        d.spawn +
                                        ".png",
                                  alt: "",
                                  className: "imgItem",
                                }),
                              }),
                              N("div", {
                                className: "rightItem",
                                children: [
                                  S("img", {
                                    className: "topitemOrnament",
                                    src: Oe.topitemShop,
                                    alt: "",
                                  }),
                                  N("p", {
                                    children: [
                                      d.amount,
                                      "x ",
                                      d.name.toUpperCase(),
                                    ],
                                  }),
                                  N("b", {
                                    children: [
                                      S("img", { src: Se.vipcoin, alt: "" }),
                                      " ",
                                      d.price * d.multiplier,
                                      " ",
                                    ],
                                  }),
                                  N("div", {
                                    className: "actions",
                                    children: [
                                      S("button", {
                                        className: "rem",
                                        onClick: () => f(d.index),
                                        children: "-",
                                      }),
                                      S("p", { children: d.multiplier }),
                                      S("button", {
                                        className: "add",
                                        onClick: () => A(d.index),
                                        children: "+",
                                      }),
                                    ],
                                  }),
                                  S("div", {
                                    className: "close",
                                    onClick: () => c(d.index),
                                    children: S("p", { children: "+" }),
                                  }),
                                ],
                              }),
                            ],
                          })
                        ),
                      }),
                    ],
                  }),
                  N("div", {
                    className: "totalValueItem",
                    children: [
                      S("p", { children: "VALOR TOTAL" }),
                      N("div", {
                        className: "amount",
                        children: [
                          S("img", { src: Se.vipcoin, alt: "" }),
                          " ",
                          S("span", { children: s }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            S("button", {
              onClick: w,
              children: l.length <= 0 ? "ABRIR CARRINHO" : "CONFIRMAR",
            }),
          ],
        }),
      ],
    });
  },
  tw = ce.div`
    position: relative;
    left: 1rem;

    .slide {
        width: 129.3rem;
        height: 25.9rem;

        overflow: hidden;
        display: flex;
        align-items: flex-end;
    }


    .sliderContainer{
        width: 1000rem;
        display: flex;
        transition: all .2s ease-in-out;
    }

    .lastMonth {
        width: 127.3rem;
        margin-left: 2rem;

        .title {
            width: 127.3rem;

            height: 5.2rem;
            color: #fff;
            font-size: 26px;
            font-style: normal;
            font-weight: 900;
            line-height: normal;
            padding: 1.5rem;
            display: flex;
            align-items: center;
            margin-bottom: 1rem;

            b {
                color: #4b6dd5;
                font-size: 26px;
                font-style: normal;
                font-weight: 900;
                line-height: normal;
            }

            border: 0.1rem solid rgba(255, 255, 255, 0.15);
            background: linear-gradient(
                72deg,
                rgba(0, 0, 0, 0.35) 19.47%,
                rgba(0, 0, 0, 0) 94.28%
            );
        }

        .oldWinner {
            width: 127.3rem;
            height: 19.6rem;
            background: radial-gradient(
                    75% 263.05% at 100% 102.91%,
                    #4b6dd5 0%,
                    rgba(0, 0, 0, 0) 100%
                ),
                linear-gradient(
                    72deg,
                    rgba(0, 0, 0, 0.35) 19.47%,
                    rgba(0, 0, 0, 0) 94.28%
                );
            border: 1px solid rgba(255, 255, 255, 0.15);
            position: relative;

            display: flex;
            align-items: center;
            justify-content: center;

            .awards {
                position: absolute;
                top: 1rem;
                left: 1rem;
                color: #fff;
                font-size: 1.3rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;

                .value {
                    width: 20rem;
                    height: 4.4rem;
                    background: radial-gradient(
                            75% 263.05% at 100% 102.91%,
                            rgba(255, 255, 255, 0.1) 0%,
                            rgba(0, 0, 0, 0) 100%
                        ),
                        radial-gradient(
                            36.84% 209.7% at 15.96% 50.15%,
                            rgba(255, 255, 255, 0.1) 0%,
                            rgba(0, 0, 0, 0) 100%
                        ),
                        linear-gradient(
                            275deg,
                            rgba(0, 0, 0, 0.15) 0%,
                            rgba(255, 255, 255, 0) 108.66%
                        );
                    border: 0.1rem solid rgba(255, 255, 255, 0.15);

                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }

            .timingPlayed {
                position: absolute;
                bottom: 1rem;
                top: initial;
                left: 1rem;
            }

            .ornament {
                position: absolute;
                right: 0;
                bottom: 0;

                img:first-child {
                    width: 16.9rem;
                    position: absolute;
                    bottom: 0;
                    right: -2.1rem;
                }

                img:last-child {
                    width: 10.6rem;
                    position: absolute;
                    right: 6.8rem;
                    bottom: -0.4rem;
                }
            }

            .description {
                width: 79.3rem;
                height: 11.4rem;
                background: linear-gradient(
                    72deg,
                    rgba(0, 0, 0, 0.35) 19.47%,
                    rgba(0, 0, 0, 0) 94.28%
                );
                border: 0.1rem solid rgba(255, 255, 255, 0.15);
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 2rem;

                .avatar {
                    width: 8.2rem;
                    height: 9.4rem;
                    background: red;
                    position: absolute;
                    left: 1rem;

                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }

                p {
                    width: 55.4rem;
                    display: block;
                    height: 80%;
                    color: #fff;
                    font-size: 1.3rem;
                    text-align: center;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    position: relative;

                    img {
                        margin-left: 0.5rem;
                        margin-right: 0.5rem;

                        &:first-child {
                            position: relative;
                            bottom: 0.5rem;
                        }

                        &:last-child {
                            position: relative;
                            top: 0.5rem;
                        }
                    }
                }

                .author {
                    float: right;
                    color: #fff;
                    text-align: center;
                    font-size: 1.3rem;
                    font-style: normal;
                    font-weight: 900;
                    line-height: normal;
                    position: absolute;
                    right: 0;
                }
            }
        }
    }

    .flex {
        display: flex;
        gap: 1.3rem;

        .title {
            width: 85rem;
            height: 5.2rem;
            flex-shrink: 0;
            background: radial-gradient(
                    75% 263.05% at 100% 102.91%,
                    #4b6dd5 0%,
                    rgba(0, 0, 0, 0) 100%
                ),
                linear-gradient(
                    72deg,
                    rgba(0, 0, 0, 0.35) 19.47%,
                    rgba(0, 0, 0, 0) 94.28%
                );
            padding: 1.5rem;
            color: #fff;
            font-size: 2.6rem;
            font-style: normal;
            font-weight: 900;
            line-height: normal;

            display: flex;
            align-items: center;
            gap: 1rem;

            b {
                color: #4b6dd5;
            }
        }

        .timingLeft {
            width: 41rem;
            height: 5.2rem;
            background: radial-gradient(
                    75% 263.05% at 100% 102.91%,
                    #d54b4b 0%,
                    rgba(0, 0, 0, 0) 100%
                ),
                linear-gradient(
                    72deg,
                    rgba(0, 0, 0, 0.35) 19.47%,
                    rgba(0, 0, 0, 0) 94.28%
                );
            padding: 0.5rem;

            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;

            p {
                position: absolute;
                left: 0.5rem;
                top: 0.5rem;
                color: #fff;
                font-size: 1.3rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }

            b {
                color: #fff;
                text-align: center;
                font-size: 2.6rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }

            img {
                width: 8.5rem;
                position: absolute;
                right: -2rem;
            }
        }
    }
`,
  nw = ce.div`
    width: 127.274rem;
    display: flex;
    gap: 1.8rem;
    margin-top: 1rem;

    .itemPossible {
        width: 41.5rem;
        height: 19.6rem;
        position: relative;
        background: red;

        background: radial-gradient(
                75% 263.05% at 100% 102.91%,
                #999 0%,
                rgba(0, 0, 0, 0) 100%
            ),
            linear-gradient(
                72deg,
                rgba(0, 0, 0, 0.35) 19.47%,
                rgba(0, 0, 0, 0) 94.28%
            );

        &:first-child {
            background: radial-gradient(
                    75% 263.05% at 100% 102.91%,
                    #d5ae4b 0%,
                    rgba(0, 0, 0, 0) 100%
                ),
                linear-gradient(
                    72deg,
                    rgba(0, 0, 0, 0.35) 19.47%,
                    rgba(0, 0, 0, 0) 94.28%
                );
        }

        &:last-child {
            background: radial-gradient(
                    75% 263.05% at 100% 102.91%,
                    #d5744b 0%,
                    rgba(0, 0, 0, 0) 100%
                ),
                linear-gradient(
                    72deg,
                    rgba(0, 0, 0, 0.35) 19.47%,
                    rgba(0, 0, 0, 0) 94.28%
                );
        }

        img {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 16.9rem;
        }

        .top {
            position: absolute;
            top: 1rem;
            left: 1rem;

            p {
                font-size: 3rem;
                font-style: normal;
                font-weight: 700;
                font-size: 3rem;
                background: linear-gradient(
                    89deg,
                    #fff 31.77%,
                    rgba(255, 255, 255, 0) 172.15%
                );
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            b {
                color: #fff;
                text-align: center;
                font-size: 1.6rem;
                font-style: normal;
                font-weight: 900;
                line-height: 90%;
            }

            .timing {
                color: #4b6dd5;
                font-size: 1.3rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;

                span {
                    color: #fff;
                }
            }
        }

        .awards {
            position: absolute;
            bottom: 1rem;
            left: 1rem;
            color: #fff;
            font-size: 1.3rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;

            .value {
                width: 20rem;
                height: 4.4rem;
                background: radial-gradient(
                        28.98% 173.44% at 93.43% 69.57%,
                        rgba(255, 255, 255, 0.1) 0%,
                        rgba(0, 0, 0, 0) 100%
                    ),
                    radial-gradient(
                        36.84% 209.7% at 15.96% 50.15%,
                        rgba(255, 255, 255, 0.1) 0%,
                        rgba(0, 0, 0, 0) 100%
                    ),
                    linear-gradient(
                        275deg,
                        rgba(0, 0, 0, 0.15) 0%,
                        rgba(255, 255, 255, 0) 108.66%
                    );
                border: 0.1rem solid rgba(255, 255, 255, 0.15);

                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
`,
  rw = ce.div`
    width: 127.3rem;
    height: 42.8rem;
    background: linear-gradient(
        72deg,
        rgba(0, 0, 0, 0.35) 19.47%,
        rgba(0, 0, 0, 0) 94.28%
    );
    border: 0.1rem solid rgba(255, 255, 255, 0.15);
    margin-top: 1rem;
    padding: 1rem;

    table {
        width: 125.3rem;
        border-collapse: separate;
        border-spacing: 0;
    }

    td {
        padding: 0; /* Removendo o padding padrão das células */

        div {
            margin: 0.5rem;
        }
    }

    thead {
        width: 125.3rem;
        tr {
            width: 100%;

            background: radial-gradient(
                    47.62% 70.59% at 50% 78.53%,
                    rgba(255, 255, 255, 0.1) 0%,
                    rgba(255, 255, 255, 0) 100%
                ),
                radial-gradient(
                    166.76% 426.24% at 49.79% 50.2%,
                    rgba(212, 212, 212, 0.1) 0%,
                    rgba(0, 0, 0, 0) 100%
                );
            border: 0.1rem solid rgba(255, 255, 255, 0.15);
            height: 5.3rem;

            display: grid;
            grid-template-columns: 0.4fr 1fr 1fr 1fr 1fr 1fr;
            align-items: center;
            color: #fff;
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 700;
            border: 0;
            line-height: normal;
        }

        th b{
            color: #4b6dd5;
        }
    }

    tbody {
        width: 125.3rem;
        height: 35rem;
        overflow: auto;
        display: block;

        &::-webkit-scrollbar {
            display: none;
        }

        tr {
            width: 100%;

            background: radial-gradient(
                    65.62% 97.28% at 50% 78.53%,
                    rgba(255, 255, 255, 0.05) 0%,
                    rgba(255, 255, 255, 0) 100%
                ),
                radial-gradient(
                    166.76% 426.24% at 49.79% 50.2%,
                    rgba(212, 212, 212, 0.05) 0%,
                    rgba(0, 0, 0, 0) 100%
                );
            border: 0.1rem solid rgba(255, 255, 255, 0.15);
            height: 5.3rem;

            display: grid;
            grid-template-columns: 0.4fr 1fr 1fr 1fr 1fr 1fr;
            align-items: center;

            color: #fff;
            text-align: center;
            font-size: 1.3rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin-top: 1rem;
            border: 0;
        }

        tr:nth-child(odd) {
            background: radial-gradient(
                    47.62% 70.59% at 50% 78.53%,
                    rgba(255, 255, 255, 0.17) 0%,
                    rgba(255, 255, 255, 0) 100%
                ),
                radial-gradient(
                    166.76% 426.24% at 49.79% 50.2%,
                    rgba(212, 212, 212, 0.17) 0%,
                    rgba(0, 0, 0, 0) 100%
                );
        }

        tr:nth-child(even) {
            background: radial-gradient(
                    65.62% 97.28% at 50% 78.53%,
                    rgba(255, 255, 255, 0.05) 0%,
                    rgba(255, 255, 255, 0) 100%
                ),
                radial-gradient(
                    166.76% 426.24% at 49.79% 50.2%,
                    rgba(212, 212, 212, 0.05) 0%,
                    rgba(0, 0, 0, 0) 100%
                );
        }
    }
`,
  ow = () => {
    const [e, t] = x.useState(),
      [n, r] = x.useState("hours"),
      [o, i] = x.useState(),
      [l, a] = x.useState(),
      [s, u] = x.useState(),
      [p, m] = x.useState(0),
      [h, v] = x.useState("00:00:00:00"),
      [g, w] = x.useState([""]),
      [A, f] = x.useState(0),
      [c, d] = x.useState();
    x.useEffect(() => {
      Xt("requestRanking", {}).then((R) => {
        t(R.rank.hours),
          i(R.rank.hours[0]),
          a(R.rank.hours[1]),
          u(R.rank.hours[2]),
          m(R.time),
          d(R.lastWinner),
          w(R.topRewards);
        const { days: b, hours: j, minutes: F, seconds: O } = C(p);
        v(
          `${b.toString().padStart(2, "0")}:${j
            .toString()
            .padStart(2, "0")}:${F.toString().padStart(
            2,
            "0"
          )}:${O.toString().padStart(2, "0")}`
        );
      });
      const E = setInterval(
        () => (
          f((R) => (R < 0 ? 0 : R - 129.3)),
          () => {
            clearInterval(E);
          }
        ),
        15e3
      );
    }, []),
      x.useEffect(() => {
        Xt("requestRanking", {}).then((E) => {
          n == "hours" && t(E.rank.hours),
            n == "coins" && t(E.rank.coin),
            n == "vipcoins" && t(E.rank.vipcoin),
            m(E.time);
          const { days: R, hours: b, minutes: j, seconds: F } = C(p);
          v(
            `${R.toString().padStart(2, "0")}:${b
              .toString()
              .padStart(2, "0")}:${j
              .toString()
              .padStart(2, "0")}:${F.toString().padStart(2, "0")}`
          );
        });
      }, [n]),
      x.useEffect(() => {
        const E = setInterval(() => {
          const { days: R, hours: b, minutes: j, seconds: F } = C(p);
          v(
            `${R.toString().padStart(2, "0")}:${b
              .toString()
              .padStart(2, "0")}:${j
              .toString()
              .padStart(2, "0")}:${F.toString().padStart(2, "0")}`
          ),
            m((O) => O - 1),
            p <= 0 && clearInterval(E);
        }, 1e3);
        return () => {
          clearInterval(E);
        };
      }, [p]);
    function y(E) {
      let R = E * 60,
        b = Math.floor(R / 3600);
      R %= 3600;
      let j = Math.floor(R / 60);
      return (
        (R %= 60),
        `${b.toString().padStart(2, "0")}h ${j
          .toString()
          .padStart(2, "0")}m ${R.toString().padStart(2, "0")}s`
      );
    }
    function C(E) {
      let R = Math.floor(E / 60);
      E = E % 60;
      let b = Math.floor(R / 60);
      R = R % 60;
      let j = Math.floor(b / 24);
      return (b = b % 24), { days: j, hours: b, minutes: R, seconds: E };
    }
    return N(tw, {
      children: [
        S("div", {
          className: "slide",
          children: N("div", {
            className: "sliderContainer",
            style: { transform: `translateX(${A}rem)` },
            children: [
              N("div", {
                className: "possible",
                children: [
                  N("div", {
                    className: "flex",
                    children: [
                      N("div", {
                        className: "title",
                        children: [
                          "POSSÍVEIS ",
                          S("b", { children: "VENCEDORES" }),
                        ],
                      }),
                      N("div", {
                        className: "timingLeft",
                        children: [
                          S("p", { children: "ENCERRA EM:" }),
                          S("b", { children: h }),
                          S("img", { src: Se.bomb, alt: "" }),
                        ],
                      }),
                    ],
                  }),
                  N(nw, {
                    children: [
                      N("div", {
                        className: "itemPossible",
                        children: [
                          N("div", {
                            className: "top",
                            children: [
                              S("p", { children: "1° LUGAR" }),
                              S("b", {
                                children:
                                  (o == null ? void 0 : o.name.toUpperCase()) ||
                                  "Nenhum Jogador",
                              }),
                              N("div", {
                                className: "timing",
                                children: [
                                  S("span", {
                                    children:
                                      (o == null ? void 0 : o.seconds) ||
                                      0 / 60,
                                  }),
                                  " HORAS JOGADAS",
                                ],
                              }),
                            ],
                          }),
                          N("div", {
                            className: "awards",
                            children: [
                              S("p", { children: "PREMIAÇÃO" }),
                              S("div", { className: "value", children: g[0] }),
                            ],
                          }),
                          S("img", { src: Se.first, alt: "" }),
                        ],
                      }),
                      N("div", {
                        className: "itemPossible",
                        children: [
                          N("div", {
                            className: "top",
                            children: [
                              S("p", { children: "2° LUGAR" }),
                              S("b", {
                                children:
                                  (l == null ? void 0 : l.name.toUpperCase()) ||
                                  "Nenhum Jogador",
                              }),
                              N("div", {
                                className: "timing",
                                children: [
                                  S("span", {
                                    children:
                                      (l == null ? void 0 : l.seconds) ||
                                      0 / 60,
                                  }),
                                  " ",
                                  "HORAS JOGADAS",
                                ],
                              }),
                            ],
                          }),
                          N("div", {
                            className: "awards",
                            children: [
                              S("p", { children: "PREMIAÇÃO" }),
                              S("div", { className: "value", children: g[1] }),
                            ],
                          }),
                          S("img", { src: Se.second, alt: "" }),
                        ],
                      }),
                      N("div", {
                        className: "itemPossible",
                        children: [
                          N("div", {
                            className: "top",
                            children: [
                              S("p", { children: "3° LUGAR" }),
                              S("b", {
                                children:
                                  (s == null ? void 0 : s.name.toUpperCase()) ||
                                  "Nenhum Jogador",
                              }),
                              N("div", {
                                className: "timing",
                                children: [
                                  S("span", {
                                    children:
                                      (s == null ? void 0 : s.seconds) ||
                                      0 / 60,
                                  }),
                                  " HORAS JOGADAS",
                                ],
                              }),
                            ],
                          }),
                          N("div", {
                            className: "awards",
                            children: [
                              S("p", { children: "PREMIAÇÃO" }),
                              S("div", { className: "value", children: g[2] }),
                            ],
                          }),
                          S("img", { src: Se.thirst, alt: "" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              N("div", {
                className: "lastMonth",
                children: [
                  N("div", {
                    className: "title",
                    children: ["ÚLTIMO ", S("b", { children: "VENCEDOR" })],
                  }),
                  N("div", {
                    className: "oldWinner",
                    children: [
                      N("div", {
                        className: "awards",
                        children: [
                          S("p", { children: "PREMIO RECEBIDO" }),
                          S("div", {
                            className: "value",
                            children: c == null ? void 0 : c.award,
                          }),
                        ],
                      }),
                      N("div", {
                        className: "awards timingPlayed",
                        children: [
                          S("p", { children: "TEMPO JOGADO" }),
                          S("div", {
                            className: "value",
                            children: y(
                              (c == null ? void 0 : c.time_played) || 0
                            ),
                          }),
                        ],
                      }),
                      N("div", {
                        className: "description",
                        children: [
                          S("div", {
                            className: "avatar",
                            children: S("img", {
                              src: c == null ? void 0 : c.avatar,
                              alt: "",
                            }),
                          }),
                          S("div", {
                            className: "text",
                            children: N("p", {
                              children: [
                                S("img", { src: Oe.aspas, alt: "" }),
                                c == null ? void 0 : c.desc,
                                " ",
                                S("img", { src: Oe.aspas, alt: "" }),
                                N("div", {
                                  className: "author",
                                  children: ["- ", c == null ? void 0 : c.name],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      N("div", {
                        className: "ornament",
                        children: [
                          S("img", { src: Se.first, alt: "" }),
                          S("img", { src: Se.date9, alt: "" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        S(rw, {
          children: N("table", {
            children: [
              S("thead", {
                children: N("tr", {
                  children: [
                    S("th", { children: "°" }),
                    S("th", { children: "NOME" }),
                    S("th", {
                      onClick: () => r("hours"),
                      children:
                        n == "hours"
                          ? N(Bt, {
                              children: [
                                S("b", { children: "TEMPO JOGADO" }),
                                " ",
                                S("img", { src: Oe.arrow, alt: "" }),
                              ],
                            })
                          : N(Bt, {
                              children: [
                                "TEMPO JOGADO ",
                                S("img", { src: Oe.arrow, alt: "" }),
                              ],
                            }),
                    }),
                    S("th", {
                      onClick: () => r("coins"),
                      children:
                        n == "coins"
                          ? N(Bt, {
                              children: [
                                S("b", { children: "COINS" }),
                                " ",
                                S("img", { src: Oe.arrow, alt: "" }),
                              ],
                            })
                          : N(Bt, {
                              children: [
                                "COINS ",
                                S("img", { src: Oe.arrow, alt: "" }),
                              ],
                            }),
                    }),
                    S("th", {
                      onClick: () => r("vipcoins"),
                      children:
                        n == "vipcoins"
                          ? N(Bt, {
                              children: [
                                S("b", { children: "VIP COINS" }),
                                " ",
                                S("img", { src: Oe.arrow, alt: "" }),
                              ],
                            })
                          : N(Bt, {
                              children: [
                                "VIP COINS ",
                                S("img", { src: Oe.arrow, alt: "" }),
                              ],
                            }),
                    }),
                    S("th", { children: "PREMIAÇÃO" }),
                  ],
                }),
              }),
              S("tbody", {
                children:
                  e == null
                    ? void 0
                    : e.map((E, R) =>
                        N("tr", {
                          children: [
                            N("td", { children: [R + 1, "°"] }),
                            N("td", { children: [E.name, " #", E.user_id] }),
                            S("td", { children: y(E.seconds) }),
                            S("td", { children: E.coin }),
                            S("td", { children: E.vipcoin }),
                            S("td", { children: n == "hours" ? g[R] : "-" }),
                          ],
                        })
                      ),
              }),
            ],
          }),
        }),
      ],
    });
  },
  iw = () => {
    const { visible: e } = jg();
    return e
      ? N(F1, {
          children: [
            S(jv, {}),
            N(Eg, {
              children: [
                S(Gr, { path: "/", element: S(Yv, {}) }),
                S(Gr, { path: "/box", element: S(Ky, {}) }),
                S(Gr, { path: "/shop", element: S(ew, {}) }),
                S(Gr, { path: "/rank", element: S(ow, {}) }),
              ],
            }),
          ],
        })
      : null;
  },
  lw = D1`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        user-select: none;
    }

    html {
        font-size: 62.5%;
    }

    body {
        width: 100vw;
        height: 100vh;
        font-family: 'Poppins', sans-serif;
    }
    
    input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }

    input[type=number] { 
        -moz-appearance: textfield;
        appearance: textfield;
    }

    img {
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        user-drag: none;
    }
    
    @media (max-width: 3840px) {
        html {
        font-size: 139% !important;
        }
    }

    @media (max-height: 1440px) and (max-width: 2560px) {
        html {
        font-size: 85% !important;
        }
    }

    @media (max-width: 2560px) and (max-height: 1080px) {
        html {
        font-size: 69% !important;
        }
    }

    @media (max-width: 1920px) {
        html {
        font-size: 62.5% !important;
        }
    }

    @media (max-width: 1600px) {
        html {
        font-size: 54% !important;
        }
    }

    @media (max-width: 1440px) {
        html {
        font-size: 55% !important;
        }
    }

    @media (max-width: 1366px) {
        html {
        font-size: 49% !important;
        }
    }

    @media (max-width: 1280px) {
        html {
        font-size: 45.7% !important;
        }
    }

    @media (max-width: 800px) {
        html {
        font-size: 29% !important;
        }
    }
    
`;
aa.createRoot(document.getElementById("root")).render(
  S(_g, { children: N(Ug, { children: [S(lw, {}), S(iw, {})] }) })
);
