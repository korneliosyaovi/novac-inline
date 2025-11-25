var us = { exports: {} }, hl = {}, ss = { exports: {} }, O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or = Symbol.for("react.element"), zc = Symbol.for("react.portal"), Tc = Symbol.for("react.fragment"), Dc = Symbol.for("react.strict_mode"), Lc = Symbol.for("react.profiler"), Rc = Symbol.for("react.provider"), Ic = Symbol.for("react.context"), Oc = Symbol.for("react.forward_ref"), Mc = Symbol.for("react.suspense"), $c = Symbol.for("react.memo"), Fc = Symbol.for("react.lazy"), Ji = Symbol.iterator;
function Uc(e) {
  return e === null || typeof e != "object" ? null : (e = Ji && e[Ji] || e["@@iterator"], typeof e == "function" ? e : null);
}
var as = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, cs = Object.assign, fs = {};
function gn(e, t, n) {
  this.props = e, this.context = t, this.refs = fs, this.updater = n || as;
}
gn.prototype.isReactComponent = {};
gn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
gn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ds() {
}
ds.prototype = gn.prototype;
function ti(e, t, n) {
  this.props = e, this.context = t, this.refs = fs, this.updater = n || as;
}
var ni = ti.prototype = new ds();
ni.constructor = ti;
cs(ni, gn.prototype);
ni.isPureReactComponent = !0;
var qi = Array.isArray, ps = Object.prototype.hasOwnProperty, ri = { current: null }, ms = { key: !0, ref: !0, __self: !0, __source: !0 };
function hs(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) ps.call(t, r) && !ms.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: or, type: e, key: o, ref: i, props: l, _owner: ri.current };
}
function Ac(e, t) {
  return { $$typeof: or, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function li(e) {
  return typeof e == "object" && e !== null && e.$$typeof === or;
}
function Bc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var bi = /\/+/g;
function Il(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Bc("" + e.key) : t.toString(36);
}
function Dr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (o) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case or:
        case zc:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Il(i, 0) : r, qi(l) ? (n = "", e != null && (n = e.replace(bi, "$&/") + "/"), Dr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (li(l) && (l = Ac(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(bi, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", qi(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var s = r + Il(o, u);
    i += Dr(o, t, n, s, l);
  }
  else if (s = Uc(e), typeof s == "function") for (e = s.call(e), u = 0; !(o = e.next()).done; ) o = o.value, s = r + Il(o, u++), i += Dr(o, t, n, s, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function pr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Dr(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function Vc(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var me = { current: null }, Lr = { transition: null }, Hc = { ReactCurrentDispatcher: me, ReactCurrentBatchConfig: Lr, ReactCurrentOwner: ri };
function vs() {
  throw Error("act(...) is not supported in production builds of React.");
}
O.Children = { map: pr, forEach: function(e, t, n) {
  pr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return pr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return pr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!li(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
O.Component = gn;
O.Fragment = Tc;
O.Profiler = Lc;
O.PureComponent = ti;
O.StrictMode = Dc;
O.Suspense = Mc;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hc;
O.act = vs;
O.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = cs({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = ri.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) ps.call(t, s) && !ms.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: or, type: e.type, key: l, ref: o, props: r, _owner: i };
};
O.createContext = function(e) {
  return e = { $$typeof: Ic, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Rc, _context: e }, e.Consumer = e;
};
O.createElement = hs;
O.createFactory = function(e) {
  var t = hs.bind(null, e);
  return t.type = e, t;
};
O.createRef = function() {
  return { current: null };
};
O.forwardRef = function(e) {
  return { $$typeof: Oc, render: e };
};
O.isValidElement = li;
O.lazy = function(e) {
  return { $$typeof: Fc, _payload: { _status: -1, _result: e }, _init: Vc };
};
O.memo = function(e, t) {
  return { $$typeof: $c, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function(e) {
  var t = Lr.transition;
  Lr.transition = {};
  try {
    e();
  } finally {
    Lr.transition = t;
  }
};
O.unstable_act = vs;
O.useCallback = function(e, t) {
  return me.current.useCallback(e, t);
};
O.useContext = function(e) {
  return me.current.useContext(e);
};
O.useDebugValue = function() {
};
O.useDeferredValue = function(e) {
  return me.current.useDeferredValue(e);
};
O.useEffect = function(e, t) {
  return me.current.useEffect(e, t);
};
O.useId = function() {
  return me.current.useId();
};
O.useImperativeHandle = function(e, t, n) {
  return me.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function(e, t) {
  return me.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function(e, t) {
  return me.current.useLayoutEffect(e, t);
};
O.useMemo = function(e, t) {
  return me.current.useMemo(e, t);
};
O.useReducer = function(e, t, n) {
  return me.current.useReducer(e, t, n);
};
O.useRef = function(e) {
  return me.current.useRef(e);
};
O.useState = function(e) {
  return me.current.useState(e);
};
O.useSyncExternalStore = function(e, t, n) {
  return me.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function() {
  return me.current.useTransition();
};
O.version = "18.3.1";
ss.exports = O;
var _ = ss.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wc = _, Qc = Symbol.for("react.element"), Kc = Symbol.for("react.fragment"), Yc = Object.prototype.hasOwnProperty, Gc = Wc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Xc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ys(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Yc.call(t, r) && !Xc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Qc, type: e, key: o, ref: i, props: l, _owner: Gc.current };
}
hl.Fragment = Kc;
hl.jsx = ys;
hl.jsxs = ys;
us.exports = hl;
var v = us.exports, gs = { exports: {} }, Ce = {}, ws = { exports: {} }, Ss = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(E, L) {
    var R = E.length;
    E.push(L);
    e: for (; 0 < R; ) {
      var X = R - 1 >>> 1, ne = E[X];
      if (0 < l(ne, L)) E[X] = L, E[R] = ne, R = X;
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var L = E[0], R = E.pop();
    if (R !== L) {
      E[0] = R;
      e: for (var X = 0, ne = E.length, fr = ne >>> 1; X < fr; ) {
        var jt = 2 * (X + 1) - 1, Rl = E[jt], zt = jt + 1, dr = E[zt];
        if (0 > l(Rl, R)) zt < ne && 0 > l(dr, Rl) ? (E[X] = dr, E[zt] = R, X = zt) : (E[X] = Rl, E[jt] = R, X = jt);
        else if (zt < ne && 0 > l(dr, R)) E[X] = dr, E[zt] = R, X = zt;
        else break e;
      }
    }
    return L;
  }
  function l(E, L) {
    var R = E.sortIndex - L.sortIndex;
    return R !== 0 ? R : E.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var s = [], c = [], h = 1, m = null, p = 3, w = !1, y = !1, S = !1, T = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(E) {
    for (var L = n(c); L !== null; ) {
      if (L.callback === null) r(c);
      else if (L.startTime <= E) r(c), L.sortIndex = L.expirationTime, t(s, L);
      else break;
      L = n(c);
    }
  }
  function g(E) {
    if (S = !1, d(E), !y) if (n(s) !== null) y = !0, ot(k);
    else {
      var L = n(c);
      L !== null && D(g, L.startTime - E);
    }
  }
  function k(E, L) {
    y = !1, S && (S = !1, f(j), j = -1), w = !0;
    var R = p;
    try {
      for (d(L), m = n(s); m !== null && (!(m.expirationTime > L) || E && !B()); ) {
        var X = m.callback;
        if (typeof X == "function") {
          m.callback = null, p = m.priorityLevel;
          var ne = X(m.expirationTime <= L);
          L = e.unstable_now(), typeof ne == "function" ? m.callback = ne : m === n(s) && r(s), d(L);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var fr = !0;
      else {
        var jt = n(c);
        jt !== null && D(g, jt.startTime - L), fr = !1;
      }
      return fr;
    } finally {
      m = null, p = R, w = !1;
    }
  }
  var N = !1, P = null, j = -1, M = 5, C = -1;
  function B() {
    return !(e.unstable_now() - C < M);
  }
  function q() {
    if (P !== null) {
      var E = e.unstable_now();
      C = E;
      var L = !0;
      try {
        L = P(!0, E);
      } finally {
        L ? Re() : (N = !1, P = null);
      }
    } else N = !1;
  }
  var Re;
  if (typeof a == "function") Re = function() {
    a(q);
  };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(), $ = I.port2;
    I.port1.onmessage = q, Re = function() {
      $.postMessage(null);
    };
  } else Re = function() {
    T(q, 0);
  };
  function ot(E) {
    P = E, N || (N = !0, Re());
  }
  function D(E, L) {
    j = T(function() {
      E(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
    E.callback = null;
  }, e.unstable_continueExecution = function() {
    y || w || (y = !0, ot(k));
  }, e.unstable_forceFrameRate = function(E) {
    0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < E ? Math.floor(1e3 / E) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(E) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = p;
    }
    var R = p;
    p = L;
    try {
      return E();
    } finally {
      p = R;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(E, L) {
    switch (E) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        E = 3;
    }
    var R = p;
    p = E;
    try {
      return L();
    } finally {
      p = R;
    }
  }, e.unstable_scheduleCallback = function(E, L, R) {
    var X = e.unstable_now();
    switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? X + R : X) : R = X, E) {
      case 1:
        var ne = -1;
        break;
      case 2:
        ne = 250;
        break;
      case 5:
        ne = 1073741823;
        break;
      case 4:
        ne = 1e4;
        break;
      default:
        ne = 5e3;
    }
    return ne = R + ne, E = { id: h++, callback: L, priorityLevel: E, startTime: R, expirationTime: ne, sortIndex: -1 }, R > X ? (E.sortIndex = R, t(c, E), n(s) === null && E === n(c) && (S ? (f(j), j = -1) : S = !0, D(g, R - X))) : (E.sortIndex = ne, t(s, E), y || w || (y = !0, ot(k))), E;
  }, e.unstable_shouldYield = B, e.unstable_wrapCallback = function(E) {
    var L = p;
    return function() {
      var R = p;
      p = L;
      try {
        return E.apply(this, arguments);
      } finally {
        p = R;
      }
    };
  };
})(Ss);
ws.exports = Ss;
var Zc = ws.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jc = _, Ee = Zc;
function x(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ks = /* @__PURE__ */ new Set(), Vn = {};
function Vt(e, t) {
  fn(e, t), fn(e + "Capture", t);
}
function fn(e, t) {
  for (Vn[e] = t, e = 0; e < t.length; e++) ks.add(t[e]);
}
var be = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), io = Object.prototype.hasOwnProperty, qc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, eu = {}, tu = {};
function bc(e) {
  return io.call(tu, e) ? !0 : io.call(eu, e) ? !1 : qc.test(e) ? tu[e] = !0 : (eu[e] = !0, !1);
}
function ef(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function tf(e, t, n, r) {
  if (t === null || typeof t > "u" || ef(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
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
function he(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ue[e] = new he(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ue[t] = new he(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ue[e] = new he(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ue[e] = new he(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ue[e] = new he(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ue[e] = new he(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ue[e] = new he(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ue[e] = new he(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ue[e] = new he(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var oi = /[\-:]([a-z])/g;
function ii(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    oi,
    ii
  );
  ue[t] = new he(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(oi, ii);
  ue[t] = new he(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(oi, ii);
  ue[t] = new he(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ue[e] = new he(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ue.xlinkHref = new he("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ue[e] = new he(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ui(e, t, n, r) {
  var l = ue.hasOwnProperty(t) ? ue[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (tf(t, n, l, r) && (n = null), r || l === null ? bc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var lt = Jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, mr = Symbol.for("react.element"), Kt = Symbol.for("react.portal"), Yt = Symbol.for("react.fragment"), si = Symbol.for("react.strict_mode"), uo = Symbol.for("react.profiler"), xs = Symbol.for("react.provider"), Ns = Symbol.for("react.context"), ai = Symbol.for("react.forward_ref"), so = Symbol.for("react.suspense"), ao = Symbol.for("react.suspense_list"), ci = Symbol.for("react.memo"), ut = Symbol.for("react.lazy"), Es = Symbol.for("react.offscreen"), nu = Symbol.iterator;
function kn(e) {
  return e === null || typeof e != "object" ? null : (e = nu && e[nu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Y = Object.assign, Ol;
function zn(e) {
  if (Ol === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ol = t && t[1] || "";
  }
  return `
` + Ol + e;
}
var Ml = !1;
function $l(e, t) {
  if (!e || Ml) return "";
  Ml = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (c) {
        var r = c;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (c) {
        r = c;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var l = c.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; ) u--;
      for (; 1 <= i && 0 <= u; i--, u--) if (l[i] !== o[u]) {
        if (i !== 1 || u !== 1)
          do
            if (i--, u--, 0 > u || l[i] !== o[u]) {
              var s = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= i && 0 <= u);
        break;
      }
    }
  } finally {
    Ml = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? zn(e) : "";
}
function nf(e) {
  switch (e.tag) {
    case 5:
      return zn(e.type);
    case 16:
      return zn("Lazy");
    case 13:
      return zn("Suspense");
    case 19:
      return zn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = $l(e.type, !1), e;
    case 11:
      return e = $l(e.type.render, !1), e;
    case 1:
      return e = $l(e.type, !0), e;
    default:
      return "";
  }
}
function co(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Yt:
      return "Fragment";
    case Kt:
      return "Portal";
    case uo:
      return "Profiler";
    case si:
      return "StrictMode";
    case so:
      return "Suspense";
    case ao:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Ns:
      return (e.displayName || "Context") + ".Consumer";
    case xs:
      return (e._context.displayName || "Context") + ".Provider";
    case ai:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ci:
      return t = e.displayName || null, t !== null ? t : co(e.type) || "Memo";
    case ut:
      t = e._payload, e = e._init;
      try {
        return co(e(t));
      } catch {
      }
  }
  return null;
}
function rf(e) {
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
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
      return co(t);
    case 8:
      return t === si ? "StrictMode" : "Mode";
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
function xt(e) {
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
function Cs(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function lf(e) {
  var t = Cs(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function hr(e) {
  e._valueTracker || (e._valueTracker = lf(e));
}
function _s(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Cs(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Wr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function fo(e, t) {
  var n = t.checked;
  return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ru(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = xt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Ps(e, t) {
  t = t.checked, t != null && ui(e, "checked", t, !1);
}
function po(e, t) {
  Ps(e, t);
  var n = xt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? mo(e, t.type, n) : t.hasOwnProperty("defaultValue") && mo(e, t.type, xt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function lu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function mo(e, t, n) {
  (t !== "number" || Wr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Tn = Array.isArray;
function ln(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + xt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ho(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ou(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(x(92));
      if (Tn(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: xt(n) };
}
function js(e, t) {
  var n = xt(t.value), r = xt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function iu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function zs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function vo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? zs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var vr, Ts = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (vr = vr || document.createElement("div"), vr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = vr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Hn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Rn = {
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
  strokeWidth: !0
}, of = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rn).forEach(function(e) {
  of.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Rn[t] = Rn[e];
  });
});
function Ds(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Rn.hasOwnProperty(e) && Rn[e] ? ("" + t).trim() : t + "px";
}
function Ls(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Ds(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var uf = Y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function yo(e, t) {
  if (t) {
    if (uf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function go(e, t) {
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
var wo = null;
function fi(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var So = null, on = null, un = null;
function uu(e) {
  if (e = sr(e)) {
    if (typeof So != "function") throw Error(x(280));
    var t = e.stateNode;
    t && (t = Sl(t), So(e.stateNode, e.type, t));
  }
}
function Rs(e) {
  on ? un ? un.push(e) : un = [e] : on = e;
}
function Is() {
  if (on) {
    var e = on, t = un;
    if (un = on = null, uu(e), t) for (e = 0; e < t.length; e++) uu(t[e]);
  }
}
function Os(e, t) {
  return e(t);
}
function Ms() {
}
var Fl = !1;
function $s(e, t, n) {
  if (Fl) return e(t, n);
  Fl = !0;
  try {
    return Os(e, t, n);
  } finally {
    Fl = !1, (on !== null || un !== null) && (Ms(), Is());
  }
}
function Wn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Sl(n);
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
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n;
}
var ko = !1;
if (be) try {
  var xn = {};
  Object.defineProperty(xn, "passive", { get: function() {
    ko = !0;
  } }), window.addEventListener("test", xn, xn), window.removeEventListener("test", xn, xn);
} catch {
  ko = !1;
}
function sf(e, t, n, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var In = !1, Qr = null, Kr = !1, xo = null, af = { onError: function(e) {
  In = !0, Qr = e;
} };
function cf(e, t, n, r, l, o, i, u, s) {
  In = !1, Qr = null, sf.apply(af, arguments);
}
function ff(e, t, n, r, l, o, i, u, s) {
  if (cf.apply(this, arguments), In) {
    if (In) {
      var c = Qr;
      In = !1, Qr = null;
    } else throw Error(x(198));
    Kr || (Kr = !0, xo = c);
  }
}
function Ht(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Fs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function su(e) {
  if (Ht(e) !== e) throw Error(x(188));
}
function df(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Ht(e), t === null) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return su(l), e;
        if (o === r) return su(l), t;
        o = o.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) n = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          i = !0, n = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function Us(e) {
  return e = df(e), e !== null ? As(e) : null;
}
function As(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = As(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Bs = Ee.unstable_scheduleCallback, au = Ee.unstable_cancelCallback, pf = Ee.unstable_shouldYield, mf = Ee.unstable_requestPaint, Z = Ee.unstable_now, hf = Ee.unstable_getCurrentPriorityLevel, di = Ee.unstable_ImmediatePriority, Vs = Ee.unstable_UserBlockingPriority, Yr = Ee.unstable_NormalPriority, vf = Ee.unstable_LowPriority, Hs = Ee.unstable_IdlePriority, vl = null, Qe = null;
function yf(e) {
  if (Qe && typeof Qe.onCommitFiberRoot == "function") try {
    Qe.onCommitFiberRoot(vl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Fe = Math.clz32 ? Math.clz32 : Sf, gf = Math.log, wf = Math.LN2;
function Sf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (gf(e) / wf | 0) | 0;
}
var yr = 64, gr = 4194304;
function Dn(e) {
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
function Gr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = Dn(u) : (o &= i, o !== 0 && (r = Dn(o)));
  } else i = n & ~l, i !== 0 ? r = Dn(i) : o !== 0 && (r = Dn(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Fe(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function kf(e, t) {
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
function xf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Fe(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = kf(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function No(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ws() {
  var e = yr;
  return yr <<= 1, !(yr & 4194240) && (yr = 64), e;
}
function Ul(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ir(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Fe(t), e[t] = n;
}
function Nf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Fe(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function pi(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Fe(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var U = 0;
function Qs(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ks, mi, Ys, Gs, Xs, Eo = !1, wr = [], mt = null, ht = null, vt = null, Qn = /* @__PURE__ */ new Map(), Kn = /* @__PURE__ */ new Map(), at = [], Ef = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function cu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      mt = null;
      break;
    case "dragenter":
    case "dragleave":
      ht = null;
      break;
    case "mouseover":
    case "mouseout":
      vt = null;
      break;
    case "pointerover":
    case "pointerout":
      Qn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Kn.delete(t.pointerId);
  }
}
function Nn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = sr(t), t !== null && mi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Cf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return mt = Nn(mt, e, t, n, r, l), !0;
    case "dragenter":
      return ht = Nn(ht, e, t, n, r, l), !0;
    case "mouseover":
      return vt = Nn(vt, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Qn.set(o, Nn(Qn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Kn.set(o, Nn(Kn.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Zs(e) {
  var t = Lt(e.target);
  if (t !== null) {
    var n = Ht(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Fs(n), t !== null) {
          e.blockedOn = t, Xs(e.priority, function() {
            Ys(n);
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
function Rr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Co(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      wo = r, n.target.dispatchEvent(r), wo = null;
    } else return t = sr(n), t !== null && mi(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function fu(e, t, n) {
  Rr(e) && n.delete(t);
}
function _f() {
  Eo = !1, mt !== null && Rr(mt) && (mt = null), ht !== null && Rr(ht) && (ht = null), vt !== null && Rr(vt) && (vt = null), Qn.forEach(fu), Kn.forEach(fu);
}
function En(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Eo || (Eo = !0, Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, _f)));
}
function Yn(e) {
  function t(l) {
    return En(l, e);
  }
  if (0 < wr.length) {
    En(wr[0], e);
    for (var n = 1; n < wr.length; n++) {
      var r = wr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (mt !== null && En(mt, e), ht !== null && En(ht, e), vt !== null && En(vt, e), Qn.forEach(t), Kn.forEach(t), n = 0; n < at.length; n++) r = at[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < at.length && (n = at[0], n.blockedOn === null); ) Zs(n), n.blockedOn === null && at.shift();
}
var sn = lt.ReactCurrentBatchConfig, Xr = !0;
function Pf(e, t, n, r) {
  var l = U, o = sn.transition;
  sn.transition = null;
  try {
    U = 1, hi(e, t, n, r);
  } finally {
    U = l, sn.transition = o;
  }
}
function jf(e, t, n, r) {
  var l = U, o = sn.transition;
  sn.transition = null;
  try {
    U = 4, hi(e, t, n, r);
  } finally {
    U = l, sn.transition = o;
  }
}
function hi(e, t, n, r) {
  if (Xr) {
    var l = Co(e, t, n, r);
    if (l === null) Xl(e, t, r, Zr, n), cu(e, r);
    else if (Cf(l, e, t, n, r)) r.stopPropagation();
    else if (cu(e, r), t & 4 && -1 < Ef.indexOf(e)) {
      for (; l !== null; ) {
        var o = sr(l);
        if (o !== null && Ks(o), o = Co(e, t, n, r), o === null && Xl(e, t, r, Zr, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Xl(e, t, r, null, n);
  }
}
var Zr = null;
function Co(e, t, n, r) {
  if (Zr = null, e = fi(r), e = Lt(e), e !== null) if (t = Ht(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Fs(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Zr = e, null;
}
function Js(e) {
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
      switch (hf()) {
        case di:
          return 1;
        case Vs:
          return 4;
        case Yr:
        case vf:
          return 16;
        case Hs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var dt = null, vi = null, Ir = null;
function qs() {
  if (Ir) return Ir;
  var e, t = vi, n = t.length, r, l = "value" in dt ? dt.value : dt.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
  return Ir = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Or(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Sr() {
  return !0;
}
function du() {
  return !1;
}
function _e(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Sr : du, this.isPropagationStopped = du, this;
  }
  return Y(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Sr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Sr);
  }, persist: function() {
  }, isPersistent: Sr }), t;
}
var wn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, yi = _e(wn), ur = Y({}, wn, { view: 0, detail: 0 }), zf = _e(ur), Al, Bl, Cn, yl = Y({}, ur, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: gi, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Cn && (Cn && e.type === "mousemove" ? (Al = e.screenX - Cn.screenX, Bl = e.screenY - Cn.screenY) : Bl = Al = 0, Cn = e), Al);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Bl;
} }), pu = _e(yl), Tf = Y({}, yl, { dataTransfer: 0 }), Df = _e(Tf), Lf = Y({}, ur, { relatedTarget: 0 }), Vl = _e(Lf), Rf = Y({}, wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), If = _e(Rf), Of = Y({}, wn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Mf = _e(Of), $f = Y({}, wn, { data: 0 }), mu = _e($f), Ff = {
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
  MozPrintableKey: "Unidentified"
}, Uf = {
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
  224: "Meta"
}, Af = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Bf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Af[e]) ? !!t[e] : !1;
}
function gi() {
  return Bf;
}
var Vf = Y({}, ur, { key: function(e) {
  if (e.key) {
    var t = Ff[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Or(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Uf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: gi, charCode: function(e) {
  return e.type === "keypress" ? Or(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Or(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Hf = _e(Vf), Wf = Y({}, yl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), hu = _e(Wf), Qf = Y({}, ur, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: gi }), Kf = _e(Qf), Yf = Y({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Gf = _e(Yf), Xf = Y({}, yl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zf = _e(Xf), Jf = [9, 13, 27, 32], wi = be && "CompositionEvent" in window, On = null;
be && "documentMode" in document && (On = document.documentMode);
var qf = be && "TextEvent" in window && !On, bs = be && (!wi || On && 8 < On && 11 >= On), vu = " ", yu = !1;
function ea(e, t) {
  switch (e) {
    case "keyup":
      return Jf.indexOf(t.keyCode) !== -1;
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
function ta(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Gt = !1;
function bf(e, t) {
  switch (e) {
    case "compositionend":
      return ta(t);
    case "keypress":
      return t.which !== 32 ? null : (yu = !0, vu);
    case "textInput":
      return e = t.data, e === vu && yu ? null : e;
    default:
      return null;
  }
}
function ed(e, t) {
  if (Gt) return e === "compositionend" || !wi && ea(e, t) ? (e = qs(), Ir = vi = dt = null, Gt = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return bs && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var td = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function gu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!td[e.type] : t === "textarea";
}
function na(e, t, n, r) {
  Rs(r), t = Jr(t, "onChange"), 0 < t.length && (n = new yi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Mn = null, Gn = null;
function nd(e) {
  pa(e, 0);
}
function gl(e) {
  var t = Jt(e);
  if (_s(t)) return e;
}
function rd(e, t) {
  if (e === "change") return t;
}
var ra = !1;
if (be) {
  var Hl;
  if (be) {
    var Wl = "oninput" in document;
    if (!Wl) {
      var wu = document.createElement("div");
      wu.setAttribute("oninput", "return;"), Wl = typeof wu.oninput == "function";
    }
    Hl = Wl;
  } else Hl = !1;
  ra = Hl && (!document.documentMode || 9 < document.documentMode);
}
function Su() {
  Mn && (Mn.detachEvent("onpropertychange", la), Gn = Mn = null);
}
function la(e) {
  if (e.propertyName === "value" && gl(Gn)) {
    var t = [];
    na(t, Gn, e, fi(e)), $s(nd, t);
  }
}
function ld(e, t, n) {
  e === "focusin" ? (Su(), Mn = t, Gn = n, Mn.attachEvent("onpropertychange", la)) : e === "focusout" && Su();
}
function od(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return gl(Gn);
}
function id(e, t) {
  if (e === "click") return gl(t);
}
function ud(e, t) {
  if (e === "input" || e === "change") return gl(t);
}
function sd(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ae = typeof Object.is == "function" ? Object.is : sd;
function Xn(e, t) {
  if (Ae(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!io.call(t, l) || !Ae(e[l], t[l])) return !1;
  }
  return !0;
}
function ku(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function xu(e, t) {
  var n = ku(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
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
    n = ku(n);
  }
}
function oa(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? oa(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ia() {
  for (var e = window, t = Wr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Wr(e.document);
  }
  return t;
}
function Si(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function ad(e) {
  var t = ia(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && oa(n.ownerDocument.documentElement, n)) {
    if (r !== null && Si(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = xu(n, o);
        var i = xu(
          n,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var cd = be && "documentMode" in document && 11 >= document.documentMode, Xt = null, _o = null, $n = null, Po = !1;
function Nu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Po || Xt == null || Xt !== Wr(r) || (r = Xt, "selectionStart" in r && Si(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), $n && Xn($n, r) || ($n = r, r = Jr(_o, "onSelect"), 0 < r.length && (t = new yi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Xt)));
}
function kr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Zt = { animationend: kr("Animation", "AnimationEnd"), animationiteration: kr("Animation", "AnimationIteration"), animationstart: kr("Animation", "AnimationStart"), transitionend: kr("Transition", "TransitionEnd") }, Ql = {}, ua = {};
be && (ua = document.createElement("div").style, "AnimationEvent" in window || (delete Zt.animationend.animation, delete Zt.animationiteration.animation, delete Zt.animationstart.animation), "TransitionEvent" in window || delete Zt.transitionend.transition);
function wl(e) {
  if (Ql[e]) return Ql[e];
  if (!Zt[e]) return e;
  var t = Zt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ua) return Ql[e] = t[n];
  return e;
}
var sa = wl("animationend"), aa = wl("animationiteration"), ca = wl("animationstart"), fa = wl("transitionend"), da = /* @__PURE__ */ new Map(), Eu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Et(e, t) {
  da.set(e, t), Vt(t, [e]);
}
for (var Kl = 0; Kl < Eu.length; Kl++) {
  var Yl = Eu[Kl], fd = Yl.toLowerCase(), dd = Yl[0].toUpperCase() + Yl.slice(1);
  Et(fd, "on" + dd);
}
Et(sa, "onAnimationEnd");
Et(aa, "onAnimationIteration");
Et(ca, "onAnimationStart");
Et("dblclick", "onDoubleClick");
Et("focusin", "onFocus");
Et("focusout", "onBlur");
Et(fa, "onTransitionEnd");
fn("onMouseEnter", ["mouseout", "mouseover"]);
fn("onMouseLeave", ["mouseout", "mouseover"]);
fn("onPointerEnter", ["pointerout", "pointerover"]);
fn("onPointerLeave", ["pointerout", "pointerover"]);
Vt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Vt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Vt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Vt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Vt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ln = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), pd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));
function Cu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, ff(r, t, void 0, e), e.currentTarget = null;
}
function pa(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], s = u.instance, c = u.currentTarget;
        if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
        Cu(l, u, c), o = s;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], s = u.instance, c = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
        Cu(l, u, c), o = s;
      }
    }
  }
  if (Kr) throw e = xo, Kr = !1, xo = null, e;
}
function V(e, t) {
  var n = t[Lo];
  n === void 0 && (n = t[Lo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ma(t, e, 2, !1), n.add(r));
}
function Gl(e, t, n) {
  var r = 0;
  t && (r |= 4), ma(n, e, r, t);
}
var xr = "_reactListening" + Math.random().toString(36).slice(2);
function Zn(e) {
  if (!e[xr]) {
    e[xr] = !0, ks.forEach(function(n) {
      n !== "selectionchange" && (pd.has(n) || Gl(n, !1, e), Gl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[xr] || (t[xr] = !0, Gl("selectionchange", !1, t));
  }
}
function ma(e, t, n, r) {
  switch (Js(t)) {
    case 1:
      var l = Pf;
      break;
    case 4:
      l = jf;
      break;
    default:
      l = hi;
  }
  n = l.bind(null, t, n, e), l = void 0, !ko || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Xl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var u = r.stateNode.containerInfo;
      if (u === l || u.nodeType === 8 && u.parentNode === l) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var s = i.tag;
        if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
        i = i.return;
      }
      for (; u !== null; ) {
        if (i = Lt(u), i === null) return;
        if (s = i.tag, s === 5 || s === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  $s(function() {
    var c = o, h = fi(n), m = [];
    e: {
      var p = da.get(e);
      if (p !== void 0) {
        var w = yi, y = e;
        switch (e) {
          case "keypress":
            if (Or(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Hf;
            break;
          case "focusin":
            y = "focus", w = Vl;
            break;
          case "focusout":
            y = "blur", w = Vl;
            break;
          case "beforeblur":
          case "afterblur":
            w = Vl;
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
            w = pu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Df;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Kf;
            break;
          case sa:
          case aa:
          case ca:
            w = If;
            break;
          case fa:
            w = Gf;
            break;
          case "scroll":
            w = zf;
            break;
          case "wheel":
            w = Zf;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Mf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = hu;
        }
        var S = (t & 4) !== 0, T = !S && e === "scroll", f = S ? p !== null ? p + "Capture" : null : p;
        S = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var g = d.stateNode;
          if (d.tag === 5 && g !== null && (d = g, f !== null && (g = Wn(a, f), g != null && S.push(Jn(a, g, d)))), T) break;
          a = a.return;
        }
        0 < S.length && (p = new w(p, y, null, n, h), m.push({ event: p, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", p && n !== wo && (y = n.relatedTarget || n.fromElement) && (Lt(y) || y[et])) break e;
        if ((w || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, w ? (y = n.relatedTarget || n.toElement, w = c, y = y ? Lt(y) : null, y !== null && (T = Ht(y), y !== T || y.tag !== 5 && y.tag !== 6) && (y = null)) : (w = null, y = c), w !== y)) {
          if (S = pu, g = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (S = hu, g = "onPointerLeave", f = "onPointerEnter", a = "pointer"), T = w == null ? p : Jt(w), d = y == null ? p : Jt(y), p = new S(g, a + "leave", w, n, h), p.target = T, p.relatedTarget = d, g = null, Lt(h) === c && (S = new S(f, a + "enter", y, n, h), S.target = d, S.relatedTarget = T, g = S), T = g, w && y) t: {
            for (S = w, f = y, a = 0, d = S; d; d = Qt(d)) a++;
            for (d = 0, g = f; g; g = Qt(g)) d++;
            for (; 0 < a - d; ) S = Qt(S), a--;
            for (; 0 < d - a; ) f = Qt(f), d--;
            for (; a--; ) {
              if (S === f || f !== null && S === f.alternate) break t;
              S = Qt(S), f = Qt(f);
            }
            S = null;
          }
          else S = null;
          w !== null && _u(m, p, w, S, !1), y !== null && T !== null && _u(m, T, y, S, !0);
        }
      }
      e: {
        if (p = c ? Jt(c) : window, w = p.nodeName && p.nodeName.toLowerCase(), w === "select" || w === "input" && p.type === "file") var k = rd;
        else if (gu(p)) if (ra) k = ud;
        else {
          k = od;
          var N = ld;
        }
        else (w = p.nodeName) && w.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (k = id);
        if (k && (k = k(e, c))) {
          na(m, k, n, h);
          break e;
        }
        N && N(e, p, c), e === "focusout" && (N = p._wrapperState) && N.controlled && p.type === "number" && mo(p, "number", p.value);
      }
      switch (N = c ? Jt(c) : window, e) {
        case "focusin":
          (gu(N) || N.contentEditable === "true") && (Xt = N, _o = c, $n = null);
          break;
        case "focusout":
          $n = _o = Xt = null;
          break;
        case "mousedown":
          Po = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Po = !1, Nu(m, n, h);
          break;
        case "selectionchange":
          if (cd) break;
        case "keydown":
        case "keyup":
          Nu(m, n, h);
      }
      var P;
      if (wi) e: {
        switch (e) {
          case "compositionstart":
            var j = "onCompositionStart";
            break e;
          case "compositionend":
            j = "onCompositionEnd";
            break e;
          case "compositionupdate":
            j = "onCompositionUpdate";
            break e;
        }
        j = void 0;
      }
      else Gt ? ea(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j && (bs && n.locale !== "ko" && (Gt || j !== "onCompositionStart" ? j === "onCompositionEnd" && Gt && (P = qs()) : (dt = h, vi = "value" in dt ? dt.value : dt.textContent, Gt = !0)), N = Jr(c, j), 0 < N.length && (j = new mu(j, e, null, n, h), m.push({ event: j, listeners: N }), P ? j.data = P : (P = ta(n), P !== null && (j.data = P)))), (P = qf ? bf(e, n) : ed(e, n)) && (c = Jr(c, "onBeforeInput"), 0 < c.length && (h = new mu("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: c }), h.data = P));
    }
    pa(m, t);
  });
}
function Jn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Jr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Wn(e, n), o != null && r.unshift(Jn(e, o, l)), o = Wn(e, t), o != null && r.push(Jn(e, o, l))), e = e.return;
  }
  return r;
}
function Qt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function _u(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && c !== null && (u = c, l ? (s = Wn(n, o), s != null && i.unshift(Jn(n, s, u))) : l || (s = Wn(n, o), s != null && i.push(Jn(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var md = /\r\n?/g, hd = /\u0000|\uFFFD/g;
function Pu(e) {
  return (typeof e == "string" ? e : "" + e).replace(md, `
`).replace(hd, "");
}
function Nr(e, t, n) {
  if (t = Pu(t), Pu(e) !== t && n) throw Error(x(425));
}
function qr() {
}
var jo = null, zo = null;
function To(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Do = typeof setTimeout == "function" ? setTimeout : void 0, vd = typeof clearTimeout == "function" ? clearTimeout : void 0, ju = typeof Promise == "function" ? Promise : void 0, yd = typeof queueMicrotask == "function" ? queueMicrotask : typeof ju < "u" ? function(e) {
  return ju.resolve(null).then(e).catch(gd);
} : Do;
function gd(e) {
  setTimeout(function() {
    throw e;
  });
}
function Zl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Yn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Yn(t);
}
function yt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function zu(e) {
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
var Sn = Math.random().toString(36).slice(2), He = "__reactFiber$" + Sn, qn = "__reactProps$" + Sn, et = "__reactContainer$" + Sn, Lo = "__reactEvents$" + Sn, wd = "__reactListeners$" + Sn, Sd = "__reactHandles$" + Sn;
function Lt(e) {
  var t = e[He];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[et] || n[He]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = zu(e); e !== null; ) {
        if (n = e[He]) return n;
        e = zu(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function sr(e) {
  return e = e[He] || e[et], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Jt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function Sl(e) {
  return e[qn] || null;
}
var Ro = [], qt = -1;
function Ct(e) {
  return { current: e };
}
function H(e) {
  0 > qt || (e.current = Ro[qt], Ro[qt] = null, qt--);
}
function A(e, t) {
  qt++, Ro[qt] = e.current, e.current = t;
}
var Nt = {}, fe = Ct(Nt), ge = Ct(!1), $t = Nt;
function dn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Nt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function we(e) {
  return e = e.childContextTypes, e != null;
}
function br() {
  H(ge), H(fe);
}
function Tu(e, t, n) {
  if (fe.current !== Nt) throw Error(x(168));
  A(fe, t), A(ge, n);
}
function ha(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(x(108, rf(e) || "Unknown", l));
  return Y({}, n, r);
}
function el(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Nt, $t = fe.current, A(fe, e), A(ge, ge.current), !0;
}
function Du(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n ? (e = ha(e, t, $t), r.__reactInternalMemoizedMergedChildContext = e, H(ge), H(fe), A(fe, e)) : H(ge), A(ge, n);
}
var Xe = null, kl = !1, Jl = !1;
function va(e) {
  Xe === null ? Xe = [e] : Xe.push(e);
}
function kd(e) {
  kl = !0, va(e);
}
function _t() {
  if (!Jl && Xe !== null) {
    Jl = !0;
    var e = 0, t = U;
    try {
      var n = Xe;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Xe = null, kl = !1;
    } catch (l) {
      throw Xe !== null && (Xe = Xe.slice(e + 1)), Bs(di, _t), l;
    } finally {
      U = t, Jl = !1;
    }
  }
  return null;
}
var bt = [], en = 0, tl = null, nl = 0, Pe = [], je = 0, Ft = null, Ze = 1, Je = "";
function Tt(e, t) {
  bt[en++] = nl, bt[en++] = tl, tl = e, nl = t;
}
function ya(e, t, n) {
  Pe[je++] = Ze, Pe[je++] = Je, Pe[je++] = Ft, Ft = e;
  var r = Ze;
  e = Je;
  var l = 32 - Fe(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Fe(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ze = 1 << 32 - Fe(t) + l | n << l | r, Je = o + e;
  } else Ze = 1 << o | n << l | r, Je = e;
}
function ki(e) {
  e.return !== null && (Tt(e, 1), ya(e, 1, 0));
}
function xi(e) {
  for (; e === tl; ) tl = bt[--en], bt[en] = null, nl = bt[--en], bt[en] = null;
  for (; e === Ft; ) Ft = Pe[--je], Pe[je] = null, Je = Pe[--je], Pe[je] = null, Ze = Pe[--je], Pe[je] = null;
}
var Ne = null, xe = null, W = !1, $e = null;
function ga(e, t) {
  var n = ze(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Lu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ne = e, xe = yt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ne = e, xe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ft !== null ? { id: Ze, overflow: Je } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ze(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ne = e, xe = null, !0) : !1;
    default:
      return !1;
  }
}
function Io(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Oo(e) {
  if (W) {
    var t = xe;
    if (t) {
      var n = t;
      if (!Lu(e, t)) {
        if (Io(e)) throw Error(x(418));
        t = yt(n.nextSibling);
        var r = Ne;
        t && Lu(e, t) ? ga(r, n) : (e.flags = e.flags & -4097 | 2, W = !1, Ne = e);
      }
    } else {
      if (Io(e)) throw Error(x(418));
      e.flags = e.flags & -4097 | 2, W = !1, Ne = e;
    }
  }
}
function Ru(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ne = e;
}
function Er(e) {
  if (e !== Ne) return !1;
  if (!W) return Ru(e), W = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !To(e.type, e.memoizedProps)), t && (t = xe)) {
    if (Io(e)) throw wa(), Error(x(418));
    for (; t; ) ga(e, t), t = yt(t.nextSibling);
  }
  if (Ru(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              xe = yt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      xe = null;
    }
  } else xe = Ne ? yt(e.stateNode.nextSibling) : null;
  return !0;
}
function wa() {
  for (var e = xe; e; ) e = yt(e.nextSibling);
}
function pn() {
  xe = Ne = null, W = !1;
}
function Ni(e) {
  $e === null ? $e = [e] : $e.push(e);
}
var xd = lt.ReactCurrentBatchConfig;
function _n(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function Cr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(x(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Iu(e) {
  var t = e._init;
  return t(e._payload);
}
function Sa(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), a = a.sibling;
    return null;
  }
  function r(f, a) {
    for (f = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
    return f;
  }
  function l(f, a) {
    return f = kt(f, a), f.index = 0, f.sibling = null, f;
  }
  function o(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, g) {
    return a === null || a.tag !== 6 ? (a = lo(d, f.mode, g), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, g) {
    var k = d.type;
    return k === Yt ? h(f, a, d.props.children, g, d.key) : a !== null && (a.elementType === k || typeof k == "object" && k !== null && k.$$typeof === ut && Iu(k) === a.type) ? (g = l(a, d.props), g.ref = _n(f, a, d), g.return = f, g) : (g = Vr(d.type, d.key, d.props, null, f.mode, g), g.ref = _n(f, a, d), g.return = f, g);
  }
  function c(f, a, d, g) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = oo(d, f.mode, g), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function h(f, a, d, g, k) {
    return a === null || a.tag !== 7 ? (a = Mt(d, f.mode, g, k), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function m(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = lo("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case mr:
          return d = Vr(a.type, a.key, a.props, null, f.mode, d), d.ref = _n(f, null, a), d.return = f, d;
        case Kt:
          return a = oo(a, f.mode, d), a.return = f, a;
        case ut:
          var g = a._init;
          return m(f, g(a._payload), d);
      }
      if (Tn(a) || kn(a)) return a = Mt(a, f.mode, d, null), a.return = f, a;
      Cr(f, a);
    }
    return null;
  }
  function p(f, a, d, g) {
    var k = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return k !== null ? null : u(f, a, "" + d, g);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case mr:
          return d.key === k ? s(f, a, d, g) : null;
        case Kt:
          return d.key === k ? c(f, a, d, g) : null;
        case ut:
          return k = d._init, p(
            f,
            a,
            k(d._payload),
            g
          );
      }
      if (Tn(d) || kn(d)) return k !== null ? null : h(f, a, d, g, null);
      Cr(f, d);
    }
    return null;
  }
  function w(f, a, d, g, k) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return f = f.get(d) || null, u(a, f, "" + g, k);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case mr:
          return f = f.get(g.key === null ? d : g.key) || null, s(a, f, g, k);
        case Kt:
          return f = f.get(g.key === null ? d : g.key) || null, c(a, f, g, k);
        case ut:
          var N = g._init;
          return w(f, a, d, N(g._payload), k);
      }
      if (Tn(g) || kn(g)) return f = f.get(d) || null, h(a, f, g, k, null);
      Cr(a, g);
    }
    return null;
  }
  function y(f, a, d, g) {
    for (var k = null, N = null, P = a, j = a = 0, M = null; P !== null && j < d.length; j++) {
      P.index > j ? (M = P, P = null) : M = P.sibling;
      var C = p(f, P, d[j], g);
      if (C === null) {
        P === null && (P = M);
        break;
      }
      e && P && C.alternate === null && t(f, P), a = o(C, a, j), N === null ? k = C : N.sibling = C, N = C, P = M;
    }
    if (j === d.length) return n(f, P), W && Tt(f, j), k;
    if (P === null) {
      for (; j < d.length; j++) P = m(f, d[j], g), P !== null && (a = o(P, a, j), N === null ? k = P : N.sibling = P, N = P);
      return W && Tt(f, j), k;
    }
    for (P = r(f, P); j < d.length; j++) M = w(P, f, j, d[j], g), M !== null && (e && M.alternate !== null && P.delete(M.key === null ? j : M.key), a = o(M, a, j), N === null ? k = M : N.sibling = M, N = M);
    return e && P.forEach(function(B) {
      return t(f, B);
    }), W && Tt(f, j), k;
  }
  function S(f, a, d, g) {
    var k = kn(d);
    if (typeof k != "function") throw Error(x(150));
    if (d = k.call(d), d == null) throw Error(x(151));
    for (var N = k = null, P = a, j = a = 0, M = null, C = d.next(); P !== null && !C.done; j++, C = d.next()) {
      P.index > j ? (M = P, P = null) : M = P.sibling;
      var B = p(f, P, C.value, g);
      if (B === null) {
        P === null && (P = M);
        break;
      }
      e && P && B.alternate === null && t(f, P), a = o(B, a, j), N === null ? k = B : N.sibling = B, N = B, P = M;
    }
    if (C.done) return n(
      f,
      P
    ), W && Tt(f, j), k;
    if (P === null) {
      for (; !C.done; j++, C = d.next()) C = m(f, C.value, g), C !== null && (a = o(C, a, j), N === null ? k = C : N.sibling = C, N = C);
      return W && Tt(f, j), k;
    }
    for (P = r(f, P); !C.done; j++, C = d.next()) C = w(P, f, j, C.value, g), C !== null && (e && C.alternate !== null && P.delete(C.key === null ? j : C.key), a = o(C, a, j), N === null ? k = C : N.sibling = C, N = C);
    return e && P.forEach(function(q) {
      return t(f, q);
    }), W && Tt(f, j), k;
  }
  function T(f, a, d, g) {
    if (typeof d == "object" && d !== null && d.type === Yt && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case mr:
          e: {
            for (var k = d.key, N = a; N !== null; ) {
              if (N.key === k) {
                if (k = d.type, k === Yt) {
                  if (N.tag === 7) {
                    n(f, N.sibling), a = l(N, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (N.elementType === k || typeof k == "object" && k !== null && k.$$typeof === ut && Iu(k) === N.type) {
                  n(f, N.sibling), a = l(N, d.props), a.ref = _n(f, N, d), a.return = f, f = a;
                  break e;
                }
                n(f, N);
                break;
              } else t(f, N);
              N = N.sibling;
            }
            d.type === Yt ? (a = Mt(d.props.children, f.mode, g, d.key), a.return = f, f = a) : (g = Vr(d.type, d.key, d.props, null, f.mode, g), g.ref = _n(f, a, d), g.return = f, f = g);
          }
          return i(f);
        case Kt:
          e: {
            for (N = d.key; a !== null; ) {
              if (a.key === N) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                n(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                break e;
              } else {
                n(f, a);
                break;
              }
              else t(f, a);
              a = a.sibling;
            }
            a = oo(d, f.mode, g), a.return = f, f = a;
          }
          return i(f);
        case ut:
          return N = d._init, T(f, a, N(d._payload), g);
      }
      if (Tn(d)) return y(f, a, d, g);
      if (kn(d)) return S(f, a, d, g);
      Cr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = lo(d, f.mode, g), a.return = f, f = a), i(f)) : n(f, a);
  }
  return T;
}
var mn = Sa(!0), ka = Sa(!1), rl = Ct(null), ll = null, tn = null, Ei = null;
function Ci() {
  Ei = tn = ll = null;
}
function _i(e) {
  var t = rl.current;
  H(rl), e._currentValue = t;
}
function Mo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function an(e, t) {
  ll = e, Ei = tn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ye = !0), e.firstContext = null);
}
function De(e) {
  var t = e._currentValue;
  if (Ei !== e) if (e = { context: e, memoizedValue: t, next: null }, tn === null) {
    if (ll === null) throw Error(x(308));
    tn = e, ll.dependencies = { lanes: 0, firstContext: e };
  } else tn = tn.next = e;
  return t;
}
var Rt = null;
function Pi(e) {
  Rt === null ? Rt = [e] : Rt.push(e);
}
function xa(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Pi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, tt(e, r);
}
function tt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var st = !1;
function ji(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Na(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function qe(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function gt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, F & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, tt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Pi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, tt(e, n);
}
function Mr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, pi(e, n);
  }
}
function Ou(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = i : o = o.next = i, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function ol(e, t, n, r) {
  var l = e.updateQueue;
  st = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, c = s.next;
    s.next = null, i === null ? o = c : i.next = c, i = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== i && (u === null ? h.firstBaseUpdate = c : u.next = c, h.lastBaseUpdate = s));
  }
  if (o !== null) {
    var m = l.baseState;
    i = 0, h = c = s = null, u = o;
    do {
      var p = u.lane, w = u.eventTime;
      if ((r & p) === p) {
        h !== null && (h = h.next = {
          eventTime: w,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var y = e, S = u;
          switch (p = t, w = n, S.tag) {
            case 1:
              if (y = S.payload, typeof y == "function") {
                m = y.call(w, m, p);
                break e;
              }
              m = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = S.payload, p = typeof y == "function" ? y.call(w, m, p) : y, p == null) break e;
              m = Y({}, m, p);
              break e;
            case 2:
              st = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else w = { eventTime: w, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (c = h = w, s = m) : h = h.next = w, i |= p;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (s = m), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    At |= i, e.lanes = i, e.memoizedState = m;
  }
}
function Mu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(x(191, l));
      l.call(r);
    }
  }
}
var ar = {}, Ke = Ct(ar), bn = Ct(ar), er = Ct(ar);
function It(e) {
  if (e === ar) throw Error(x(174));
  return e;
}
function zi(e, t) {
  switch (A(er, t), A(bn, e), A(Ke, ar), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : vo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = vo(t, e);
  }
  H(Ke), A(Ke, t);
}
function hn() {
  H(Ke), H(bn), H(er);
}
function Ea(e) {
  It(er.current);
  var t = It(Ke.current), n = vo(t, e.type);
  t !== n && (A(bn, e), A(Ke, n));
}
function Ti(e) {
  bn.current === e && (H(Ke), H(bn));
}
var Q = Ct(0);
function il(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var ql = [];
function Di() {
  for (var e = 0; e < ql.length; e++) ql[e]._workInProgressVersionPrimary = null;
  ql.length = 0;
}
var $r = lt.ReactCurrentDispatcher, bl = lt.ReactCurrentBatchConfig, Ut = 0, K = null, ee = null, re = null, ul = !1, Fn = !1, tr = 0, Nd = 0;
function se() {
  throw Error(x(321));
}
function Li(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ae(e[n], t[n])) return !1;
  return !0;
}
function Ri(e, t, n, r, l, o) {
  if (Ut = o, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, $r.current = e === null || e.memoizedState === null ? Pd : jd, e = n(r, l), Fn) {
    o = 0;
    do {
      if (Fn = !1, tr = 0, 25 <= o) throw Error(x(301));
      o += 1, re = ee = null, t.updateQueue = null, $r.current = zd, e = n(r, l);
    } while (Fn);
  }
  if ($r.current = sl, t = ee !== null && ee.next !== null, Ut = 0, re = ee = K = null, ul = !1, t) throw Error(x(300));
  return e;
}
function Ii() {
  var e = tr !== 0;
  return tr = 0, e;
}
function Ve() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return re === null ? K.memoizedState = re = e : re = re.next = e, re;
}
function Le() {
  if (ee === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ee.next;
  var t = re === null ? K.memoizedState : re.next;
  if (t !== null) re = t, ee = e;
  else {
    if (e === null) throw Error(x(310));
    ee = e, e = { memoizedState: ee.memoizedState, baseState: ee.baseState, baseQueue: ee.baseQueue, queue: ee.queue, next: null }, re === null ? K.memoizedState = re = e : re = re.next = e;
  }
  return re;
}
function nr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function eo(e) {
  var t = Le(), n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = ee, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, s = null, c = o;
    do {
      var h = c.lane;
      if ((Ut & h) === h) s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (u = s = m, i = r) : s = s.next = m, K.lanes |= h, At |= h;
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? i = r : s.next = u, Ae(r, t.memoizedState) || (ye = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, K.lanes |= o, At |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function to(e) {
  var t = Le(), n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    Ae(o, t.memoizedState) || (ye = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Ca() {
}
function _a(e, t) {
  var n = K, r = Le(), l = t(), o = !Ae(r.memoizedState, l);
  if (o && (r.memoizedState = l, ye = !0), r = r.queue, Oi(za.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || re !== null && re.memoizedState.tag & 1) {
    if (n.flags |= 2048, rr(9, ja.bind(null, n, r, l, t), void 0, null), le === null) throw Error(x(349));
    Ut & 30 || Pa(n, t, l);
  }
  return l;
}
function Pa(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function ja(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Ta(t) && Da(e);
}
function za(e, t, n) {
  return n(function() {
    Ta(t) && Da(e);
  });
}
function Ta(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ae(e, n);
  } catch {
    return !0;
  }
}
function Da(e) {
  var t = tt(e, 1);
  t !== null && Ue(t, e, 1, -1);
}
function $u(e) {
  var t = Ve();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: nr, lastRenderedState: e }, t.queue = e, e = e.dispatch = _d.bind(null, K, e), [t.memoizedState, e];
}
function rr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function La() {
  return Le().memoizedState;
}
function Fr(e, t, n, r) {
  var l = Ve();
  K.flags |= e, l.memoizedState = rr(1 | t, n, void 0, r === void 0 ? null : r);
}
function xl(e, t, n, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ee !== null) {
    var i = ee.memoizedState;
    if (o = i.destroy, r !== null && Li(r, i.deps)) {
      l.memoizedState = rr(t, n, o, r);
      return;
    }
  }
  K.flags |= e, l.memoizedState = rr(1 | t, n, o, r);
}
function Fu(e, t) {
  return Fr(8390656, 8, e, t);
}
function Oi(e, t) {
  return xl(2048, 8, e, t);
}
function Ra(e, t) {
  return xl(4, 2, e, t);
}
function Ia(e, t) {
  return xl(4, 4, e, t);
}
function Oa(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Ma(e, t, n) {
  return n = n != null ? n.concat([e]) : null, xl(4, 4, Oa.bind(null, t, e), n);
}
function Mi() {
}
function $a(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Li(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Fa(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Li(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ua(e, t, n) {
  return Ut & 21 ? (Ae(n, t) || (n = Ws(), K.lanes |= n, At |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ye = !0), e.memoizedState = n);
}
function Ed(e, t) {
  var n = U;
  U = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = bl.transition;
  bl.transition = {};
  try {
    e(!1), t();
  } finally {
    U = n, bl.transition = r;
  }
}
function Aa() {
  return Le().memoizedState;
}
function Cd(e, t, n) {
  var r = St(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ba(e)) Va(t, n);
  else if (n = xa(e, t, n, r), n !== null) {
    var l = pe();
    Ue(n, e, r, l), Ha(n, t, r);
  }
}
function _d(e, t, n) {
  var r = St(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ba(e)) Va(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState, u = o(i, n);
      if (l.hasEagerState = !0, l.eagerState = u, Ae(u, i)) {
        var s = t.interleaved;
        s === null ? (l.next = l, Pi(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = xa(e, t, l, r), n !== null && (l = pe(), Ue(n, e, r, l), Ha(n, t, r));
  }
}
function Ba(e) {
  var t = e.alternate;
  return e === K || t !== null && t === K;
}
function Va(e, t) {
  Fn = ul = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ha(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, pi(e, n);
  }
}
var sl = { readContext: De, useCallback: se, useContext: se, useEffect: se, useImperativeHandle: se, useInsertionEffect: se, useLayoutEffect: se, useMemo: se, useReducer: se, useRef: se, useState: se, useDebugValue: se, useDeferredValue: se, useTransition: se, useMutableSource: se, useSyncExternalStore: se, useId: se, unstable_isNewReconciler: !1 }, Pd = { readContext: De, useCallback: function(e, t) {
  return Ve().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: De, useEffect: Fu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Fr(
    4194308,
    4,
    Oa.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Fr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Fr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ve();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ve();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Cd.bind(null, K, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ve();
  return e = { current: e }, t.memoizedState = e;
}, useState: $u, useDebugValue: Mi, useDeferredValue: function(e) {
  return Ve().memoizedState = e;
}, useTransition: function() {
  var e = $u(!1), t = e[0];
  return e = Ed.bind(null, e[1]), Ve().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = K, l = Ve();
  if (W) {
    if (n === void 0) throw Error(x(407));
    n = n();
  } else {
    if (n = t(), le === null) throw Error(x(349));
    Ut & 30 || Pa(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Fu(za.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, rr(9, ja.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Ve(), t = le.identifierPrefix;
  if (W) {
    var n = Je, r = Ze;
    n = (r & ~(1 << 32 - Fe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = tr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Nd++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, jd = {
  readContext: De,
  useCallback: $a,
  useContext: De,
  useEffect: Oi,
  useImperativeHandle: Ma,
  useInsertionEffect: Ra,
  useLayoutEffect: Ia,
  useMemo: Fa,
  useReducer: eo,
  useRef: La,
  useState: function() {
    return eo(nr);
  },
  useDebugValue: Mi,
  useDeferredValue: function(e) {
    var t = Le();
    return Ua(t, ee.memoizedState, e);
  },
  useTransition: function() {
    var e = eo(nr)[0], t = Le().memoizedState;
    return [e, t];
  },
  useMutableSource: Ca,
  useSyncExternalStore: _a,
  useId: Aa,
  unstable_isNewReconciler: !1
}, zd = { readContext: De, useCallback: $a, useContext: De, useEffect: Oi, useImperativeHandle: Ma, useInsertionEffect: Ra, useLayoutEffect: Ia, useMemo: Fa, useReducer: to, useRef: La, useState: function() {
  return to(nr);
}, useDebugValue: Mi, useDeferredValue: function(e) {
  var t = Le();
  return ee === null ? t.memoizedState = e : Ua(t, ee.memoizedState, e);
}, useTransition: function() {
  var e = to(nr)[0], t = Le().memoizedState;
  return [e, t];
}, useMutableSource: Ca, useSyncExternalStore: _a, useId: Aa, unstable_isNewReconciler: !1 };
function Oe(e, t) {
  if (e && e.defaultProps) {
    t = Y({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function $o(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Nl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Ht(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = pe(), l = St(e), o = qe(r, l);
  o.payload = t, n != null && (o.callback = n), t = gt(e, o, l), t !== null && (Ue(t, e, l, r), Mr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = pe(), l = St(e), o = qe(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = gt(e, o, l), t !== null && (Ue(t, e, l, r), Mr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = pe(), r = St(e), l = qe(n, r);
  l.tag = 2, t != null && (l.callback = t), t = gt(e, l, r), t !== null && (Ue(t, e, r, n), Mr(t, e, r));
} };
function Uu(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Xn(n, r) || !Xn(l, o) : !0;
}
function Wa(e, t, n) {
  var r = !1, l = Nt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = De(o) : (l = we(t) ? $t : fe.current, r = t.contextTypes, o = (r = r != null) ? dn(e, l) : Nt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Nl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Au(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Nl.enqueueReplaceState(t, t.state, null);
}
function Fo(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, ji(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = De(o) : (o = we(t) ? $t : fe.current, l.context = dn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && ($o(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Nl.enqueueReplaceState(l, l.state, null), ol(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function vn(e, t) {
  try {
    var n = "", r = t;
    do
      n += nf(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function no(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Uo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Td = typeof WeakMap == "function" ? WeakMap : Map;
function Qa(e, t, n) {
  n = qe(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    cl || (cl = !0, Xo = r), Uo(e, t);
  }, n;
}
function Ka(e, t, n) {
  n = qe(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Uo(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Uo(e, t), typeof r != "function" && (wt === null ? wt = /* @__PURE__ */ new Set([this]) : wt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Bu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Td();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Wd.bind(null, e, t, n), t.then(e, e));
}
function Vu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Hu(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = qe(-1, 1), t.tag = 2, gt(n, t, 1))), n.lanes |= 1), e);
}
var Dd = lt.ReactCurrentOwner, ye = !1;
function de(e, t, n, r) {
  t.child = e === null ? ka(t, null, n, r) : mn(t, e.child, n, r);
}
function Wu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return an(t, l), r = Ri(e, t, n, r, o, l), n = Ii(), e !== null && !ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, nt(e, t, l)) : (W && n && ki(t), t.flags |= 1, de(e, t, r, l), t.child);
}
function Qu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Wi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Ya(e, t, o, r, l)) : (e = Vr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Xn, n(i, r) && e.ref === t.ref) return nt(e, t, l);
  }
  return t.flags |= 1, e = kt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ya(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Xn(o, r) && e.ref === t.ref) if (ye = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (ye = !0);
    else return t.lanes = e.lanes, nt(e, t, l);
  }
  return Ao(e, t, n, r, l);
}
function Ga(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, A(rn, ke), ke |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, A(rn, ke), ke |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, A(rn, ke), ke |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, A(rn, ke), ke |= r;
  return de(e, t, l, n), t.child;
}
function Xa(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ao(e, t, n, r, l) {
  var o = we(n) ? $t : fe.current;
  return o = dn(t, o), an(t, l), n = Ri(e, t, n, r, o, l), r = Ii(), e !== null && !ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, nt(e, t, l)) : (W && r && ki(t), t.flags |= 1, de(e, t, n, l), t.child);
}
function Ku(e, t, n, r, l) {
  if (we(n)) {
    var o = !0;
    el(t);
  } else o = !1;
  if (an(t, l), t.stateNode === null) Ur(e, t), Wa(t, n, r), Fo(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = De(c) : (c = we(n) ? $t : fe.current, c = dn(t, c));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== c) && Au(t, i, r, c), st = !1;
    var p = t.memoizedState;
    i.state = p, ol(t, r, i, l), s = t.memoizedState, u !== r || p !== s || ge.current || st ? (typeof h == "function" && ($o(t, n, h, r), s = t.memoizedState), (u = st || Uu(t, n, u, r, p, s, c)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Na(e, t), u = t.memoizedProps, c = t.type === t.elementType ? u : Oe(t.type, u), i.props = c, m = t.pendingProps, p = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = De(s) : (s = we(n) ? $t : fe.current, s = dn(t, s));
    var w = n.getDerivedStateFromProps;
    (h = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== m || p !== s) && Au(t, i, r, s), st = !1, p = t.memoizedState, i.state = p, ol(t, r, i, l);
    var y = t.memoizedState;
    u !== m || p !== y || ge.current || st ? (typeof w == "function" && ($o(t, n, w, r), y = t.memoizedState), (c = st || Uu(t, n, c, r, p, y, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, y, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, y, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), i.props = r, i.state = y, i.context = s, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Bo(e, t, n, r, o, l);
}
function Bo(e, t, n, r, l, o) {
  Xa(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Du(t, n, !1), nt(e, t, o);
  r = t.stateNode, Dd.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = mn(t, e.child, null, o), t.child = mn(t, null, u, o)) : de(e, t, u, o), t.memoizedState = r.state, l && Du(t, n, !0), t.child;
}
function Za(e) {
  var t = e.stateNode;
  t.pendingContext ? Tu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Tu(e, t.context, !1), zi(e, t.containerInfo);
}
function Yu(e, t, n, r, l) {
  return pn(), Ni(l), t.flags |= 256, de(e, t, n, r), t.child;
}
var Vo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ho(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ja(e, t, n) {
  var r = t.pendingProps, l = Q.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), A(Q, l & 1), e === null)
    return Oo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = _l(i, r, 0, null), e = Mt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ho(n), t.memoizedState = Vo, e) : $i(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Ld(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = kt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = kt(u, o) : (o = Mt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Ho(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Vo, r;
  }
  return o = e.child, e = o.sibling, r = kt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function $i(e, t) {
  return t = _l({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function _r(e, t, n, r) {
  return r !== null && Ni(r), mn(t, e.child, null, n), e = $i(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Ld(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = no(Error(x(422))), _r(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = _l({ mode: "visible", children: r.children }, l, 0, null), o = Mt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && mn(t, e.child, null, i), t.child.memoizedState = Ho(i), t.memoizedState = Vo, o);
  if (!(t.mode & 1)) return _r(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(x(419)), r = no(o, r, void 0), _r(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, ye || u) {
    if (r = le, r !== null) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, tt(e, l), Ue(r, e, l, -1));
    }
    return Hi(), r = no(Error(x(421))), _r(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Qd.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, xe = yt(l.nextSibling), Ne = t, W = !0, $e = null, e !== null && (Pe[je++] = Ze, Pe[je++] = Je, Pe[je++] = Ft, Ze = e.id, Je = e.overflow, Ft = t), t = $i(t, r.children), t.flags |= 4096, t);
}
function Gu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Mo(e.return, t, n);
}
function ro(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function qa(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (de(e, t, r.children, n), r = Q.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Gu(e, n, t);
      else if (e.tag === 19) Gu(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (A(Q, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && il(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ro(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && il(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      ro(t, !0, n, null, o);
      break;
    case "together":
      ro(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ur(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function nt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), At |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (e = t.child, n = kt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = kt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Rd(e, t, n) {
  switch (t.tag) {
    case 3:
      Za(t), pn();
      break;
    case 5:
      Ea(t);
      break;
    case 1:
      we(t.type) && el(t);
      break;
    case 4:
      zi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      A(rl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (A(Q, Q.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ja(e, t, n) : (A(Q, Q.current & 1), e = nt(e, t, n), e !== null ? e.sibling : null);
      A(Q, Q.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return qa(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), A(Q, Q.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ga(e, t, n);
  }
  return nt(e, t, n);
}
var ba, Wo, ec, tc;
ba = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Wo = function() {
};
ec = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, It(Ke.current);
    var o = null;
    switch (n) {
      case "input":
        l = fo(e, l), r = fo(e, r), o = [];
        break;
      case "select":
        l = Y({}, l, { value: void 0 }), r = Y({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = ho(e, l), r = ho(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = qr);
    }
    yo(n, r);
    var i;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var u = l[c];
      for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Vn.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== u && (s != null || u != null)) if (c === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
      } else n || (o || (o = []), o.push(
        c,
        n
      )), n = s;
      else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Vn.hasOwnProperty(c) ? (s != null && c === "onScroll" && V("scroll", e), o || u === s || (o = [])) : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
tc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Pn(e, t) {
  if (!W) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function ae(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Id(e, t, n) {
  var r = t.pendingProps;
  switch (xi(t), t.tag) {
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
      return ae(t), null;
    case 1:
      return we(t.type) && br(), ae(t), null;
    case 3:
      return r = t.stateNode, hn(), H(ge), H(fe), Di(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Er(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, $e !== null && (qo($e), $e = null))), Wo(e, t), ae(t), null;
    case 5:
      Ti(t);
      var l = It(er.current);
      if (n = t.type, e !== null && t.stateNode != null) ec(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return ae(t), null;
        }
        if (e = It(Ke.current), Er(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[He] = t, r[qn] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              V("cancel", r), V("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              V("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Ln.length; l++) V(Ln[l], r);
              break;
            case "source":
              V("error", r);
              break;
            case "img":
            case "image":
            case "link":
              V(
                "error",
                r
              ), V("load", r);
              break;
            case "details":
              V("toggle", r);
              break;
            case "input":
              ru(r, o), V("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, V("invalid", r);
              break;
            case "textarea":
              ou(r, o), V("invalid", r);
          }
          yo(n, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Nr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Nr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Vn.hasOwnProperty(i) && u != null && i === "onScroll" && V("scroll", r);
          }
          switch (n) {
            case "input":
              hr(r), lu(r, o, !0);
              break;
            case "textarea":
              hr(r), iu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = qr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = zs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[He] = t, e[qn] = r, ba(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = go(n, r), n) {
              case "dialog":
                V("cancel", e), V("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                V("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Ln.length; l++) V(Ln[l], e);
                l = r;
                break;
              case "source":
                V("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                V(
                  "error",
                  e
                ), V("load", e), l = r;
                break;
              case "details":
                V("toggle", e), l = r;
                break;
              case "input":
                ru(e, r), l = fo(e, r), V("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = Y({}, r, { value: void 0 }), V("invalid", e);
                break;
              case "textarea":
                ou(e, r), l = ho(e, r), V("invalid", e);
                break;
              default:
                l = r;
            }
            yo(n, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var s = u[o];
              o === "style" ? Ls(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ts(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Hn(e, s) : typeof s == "number" && Hn(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Vn.hasOwnProperty(o) ? s != null && o === "onScroll" && V("scroll", e) : s != null && ui(e, o, s, i));
            }
            switch (n) {
              case "input":
                hr(e), lu(e, r, !1);
                break;
              case "textarea":
                hr(e), iu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + xt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? ln(e, !!r.multiple, o, !1) : r.defaultValue != null && ln(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = qr);
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
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return ae(t), null;
    case 6:
      if (e && t.stateNode != null) tc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (n = It(er.current), It(Ke.current), Er(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[He] = t, (o = r.nodeValue !== n) && (e = Ne, e !== null)) switch (e.tag) {
            case 3:
              Nr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Nr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[He] = t, t.stateNode = r;
      }
      return ae(t), null;
    case 13:
      if (H(Q), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (W && xe !== null && t.mode & 1 && !(t.flags & 128)) wa(), pn(), t.flags |= 98560, o = !1;
        else if (o = Er(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(x(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(x(317));
            o[He] = t;
          } else pn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ae(t), o = !1;
        } else $e !== null && (qo($e), $e = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Q.current & 1 ? te === 0 && (te = 3) : Hi())), t.updateQueue !== null && (t.flags |= 4), ae(t), null);
    case 4:
      return hn(), Wo(e, t), e === null && Zn(t.stateNode.containerInfo), ae(t), null;
    case 10:
      return _i(t.type._context), ae(t), null;
    case 17:
      return we(t.type) && br(), ae(t), null;
    case 19:
      if (H(Q), o = t.memoizedState, o === null) return ae(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) Pn(o, !1);
      else {
        if (te !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = il(e), i !== null) {
            for (t.flags |= 128, Pn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return A(Q, Q.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && Z() > yn && (t.flags |= 128, r = !0, Pn(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = il(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Pn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !W) return ae(t), null;
        } else 2 * Z() - o.renderingStartTime > yn && n !== 1073741824 && (t.flags |= 128, r = !0, Pn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Z(), t.sibling = null, n = Q.current, A(Q, r ? n & 1 | 2 : n & 1), t) : (ae(t), null);
    case 22:
    case 23:
      return Vi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ke & 1073741824 && (ae(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ae(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function Od(e, t) {
  switch (xi(t), t.tag) {
    case 1:
      return we(t.type) && br(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return hn(), H(ge), H(fe), Di(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ti(t), null;
    case 13:
      if (H(Q), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(x(340));
        pn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return H(Q), null;
    case 4:
      return hn(), null;
    case 10:
      return _i(t.type._context), null;
    case 22:
    case 23:
      return Vi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Pr = !1, ce = !1, Md = typeof WeakSet == "function" ? WeakSet : Set, z = null;
function nn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    G(e, t, r);
  }
  else n.current = null;
}
function Qo(e, t, n) {
  try {
    n();
  } catch (r) {
    G(e, t, r);
  }
}
var Xu = !1;
function $d(e, t) {
  if (jo = Xr, e = ia(), Si(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var i = 0, u = -1, s = -1, c = 0, h = 0, m = e, p = null;
        t: for (; ; ) {
          for (var w; m !== n || l !== 0 && m.nodeType !== 3 || (u = i + l), m !== o || r !== 0 && m.nodeType !== 3 || (s = i + r), m.nodeType === 3 && (i += m.nodeValue.length), (w = m.firstChild) !== null; )
            p = m, m = w;
          for (; ; ) {
            if (m === e) break t;
            if (p === n && ++c === l && (u = i), p === o && ++h === r && (s = i), (w = m.nextSibling) !== null) break;
            m = p, p = m.parentNode;
          }
          m = w;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (zo = { focusedElem: e, selectionRange: n }, Xr = !1, z = t; z !== null; ) if (t = z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, z = e;
  else for (; z !== null; ) {
    t = z;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var S = y.memoizedProps, T = y.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? S : Oe(t.type, S), T);
            f.__reactInternalSnapshotBeforeUpdate = a;
          }
          break;
        case 3:
          var d = t.stateNode.containerInfo;
          d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(x(163));
      }
    } catch (g) {
      G(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, z = e;
      break;
    }
    z = t.return;
  }
  return y = Xu, Xu = !1, y;
}
function Un(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Qo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function El(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ko(e) {
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
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function nc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, nc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[He], delete t[qn], delete t[Lo], delete t[wd], delete t[Sd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function rc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Zu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || rc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Yo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = qr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Yo(e, t, n), e = e.sibling; e !== null; ) Yo(e, t, n), e = e.sibling;
}
function Go(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Go(e, t, n), e = e.sibling; e !== null; ) Go(e, t, n), e = e.sibling;
}
var oe = null, Me = !1;
function it(e, t, n) {
  for (n = n.child; n !== null; ) lc(e, t, n), n = n.sibling;
}
function lc(e, t, n) {
  if (Qe && typeof Qe.onCommitFiberUnmount == "function") try {
    Qe.onCommitFiberUnmount(vl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ce || nn(n, t);
    case 6:
      var r = oe, l = Me;
      oe = null, it(e, t, n), oe = r, Me = l, oe !== null && (Me ? (e = oe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : oe.removeChild(n.stateNode));
      break;
    case 18:
      oe !== null && (Me ? (e = oe, n = n.stateNode, e.nodeType === 8 ? Zl(e.parentNode, n) : e.nodeType === 1 && Zl(e, n), Yn(e)) : Zl(oe, n.stateNode));
      break;
    case 4:
      r = oe, l = Me, oe = n.stateNode.containerInfo, Me = !0, it(e, t, n), oe = r, Me = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ce && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Qo(n, t, i), l = l.next;
        } while (l !== r);
      }
      it(e, t, n);
      break;
    case 1:
      if (!ce && (nn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        G(n, t, u);
      }
      it(e, t, n);
      break;
    case 21:
      it(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ce = (r = ce) || n.memoizedState !== null, it(e, t, n), ce = r) : it(e, t, n);
      break;
    default:
      it(e, t, n);
  }
}
function Ju(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Md()), t.forEach(function(r) {
      var l = Kd.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Ie(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var o = e, i = t, u = i;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            oe = u.stateNode, Me = !1;
            break e;
          case 3:
            oe = u.stateNode.containerInfo, Me = !0;
            break e;
          case 4:
            oe = u.stateNode.containerInfo, Me = !0;
            break e;
        }
        u = u.return;
      }
      if (oe === null) throw Error(x(160));
      lc(o, i, l), oe = null, Me = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (c) {
      G(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) oc(t, e), t = t.sibling;
}
function oc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ie(t, e), Be(e), r & 4) {
        try {
          Un(3, e, e.return), El(3, e);
        } catch (S) {
          G(e, e.return, S);
        }
        try {
          Un(5, e, e.return);
        } catch (S) {
          G(e, e.return, S);
        }
      }
      break;
    case 1:
      Ie(t, e), Be(e), r & 512 && n !== null && nn(n, n.return);
      break;
    case 5:
      if (Ie(t, e), Be(e), r & 512 && n !== null && nn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Hn(l, "");
        } catch (S) {
          G(e, e.return, S);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && o.type === "radio" && o.name != null && Ps(l, o), go(u, i);
          var c = go(u, o);
          for (i = 0; i < s.length; i += 2) {
            var h = s[i], m = s[i + 1];
            h === "style" ? Ls(l, m) : h === "dangerouslySetInnerHTML" ? Ts(l, m) : h === "children" ? Hn(l, m) : ui(l, h, m, c);
          }
          switch (u) {
            case "input":
              po(l, o);
              break;
            case "textarea":
              js(l, o);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var w = o.value;
              w != null ? ln(l, !!o.multiple, w, !1) : p !== !!o.multiple && (o.defaultValue != null ? ln(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : ln(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[qn] = o;
        } catch (S) {
          G(e, e.return, S);
        }
      }
      break;
    case 6:
      if (Ie(t, e), Be(e), r & 4) {
        if (e.stateNode === null) throw Error(x(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (S) {
          G(e, e.return, S);
        }
      }
      break;
    case 3:
      if (Ie(t, e), Be(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Yn(t.containerInfo);
      } catch (S) {
        G(e, e.return, S);
      }
      break;
    case 4:
      Ie(t, e), Be(e);
      break;
    case 13:
      Ie(t, e), Be(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ai = Z())), r & 4 && Ju(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ce = (c = ce) || h, Ie(t, e), ce = c) : Ie(t, e), Be(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1) for (z = e, h = e.child; h !== null; ) {
          for (m = z = h; z !== null; ) {
            switch (p = z, w = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Un(4, p, p.return);
                break;
              case 1:
                nn(p, p.return);
                var y = p.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (S) {
                    G(r, n, S);
                  }
                }
                break;
              case 5:
                nn(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  bu(m);
                  continue;
                }
            }
            w !== null ? (w.return = p, z = w) : bu(m);
          }
          h = h.sibling;
        }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                l = m.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = m.stateNode, s = m.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Ds("display", i));
              } catch (S) {
                G(e, e.return, S);
              }
            }
          } else if (m.tag === 6) {
            if (h === null) try {
              m.stateNode.nodeValue = c ? "" : m.memoizedProps;
            } catch (S) {
              G(e, e.return, S);
            }
          } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
            m.child.return = m, m = m.child;
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), m = m.return;
          }
          h === m && (h = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      Ie(t, e), Be(e), r & 4 && Ju(e);
      break;
    case 21:
      break;
    default:
      Ie(
        t,
        e
      ), Be(e);
  }
}
function Be(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (rc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Hn(l, ""), r.flags &= -33);
          var o = Zu(e);
          Go(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Zu(e);
          Yo(e, u, i);
          break;
        default:
          throw Error(x(161));
      }
    } catch (s) {
      G(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Fd(e, t, n) {
  z = e, ic(e);
}
function ic(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var l = z, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Pr;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || ce;
        u = Pr;
        var c = ce;
        if (Pr = i, (ce = s) && !c) for (z = l; z !== null; ) i = z, s = i.child, i.tag === 22 && i.memoizedState !== null ? es(l) : s !== null ? (s.return = i, z = s) : es(l);
        for (; o !== null; ) z = o, ic(o), o = o.sibling;
        z = l, Pr = u, ce = c;
      }
      qu(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, z = o) : qu(e);
  }
}
function qu(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ce || El(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ce) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Oe(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Mu(t, o, r);
            break;
          case 3:
            var i = t.updateQueue;
            if (i !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Mu(t, i, n);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (n === null && t.flags & 4) {
              n = u;
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
              var c = t.alternate;
              if (c !== null) {
                var h = c.memoizedState;
                if (h !== null) {
                  var m = h.dehydrated;
                  m !== null && Yn(m);
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
            throw Error(x(163));
        }
        ce || t.flags & 512 && Ko(t);
      } catch (p) {
        G(t, t.return, p);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, z = n;
      break;
    }
    z = t.return;
  }
}
function bu(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, z = n;
      break;
    }
    z = t.return;
  }
}
function es(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            El(4, t);
          } catch (s) {
            G(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              G(t, l, s);
            }
          }
          var o = t.return;
          try {
            Ko(t);
          } catch (s) {
            G(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ko(t);
          } catch (s) {
            G(t, i, s);
          }
      }
    } catch (s) {
      G(t, t.return, s);
    }
    if (t === e) {
      z = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, z = u;
      break;
    }
    z = t.return;
  }
}
var Ud = Math.ceil, al = lt.ReactCurrentDispatcher, Fi = lt.ReactCurrentOwner, Te = lt.ReactCurrentBatchConfig, F = 0, le = null, b = null, ie = 0, ke = 0, rn = Ct(0), te = 0, lr = null, At = 0, Cl = 0, Ui = 0, An = null, ve = null, Ai = 0, yn = 1 / 0, Ge = null, cl = !1, Xo = null, wt = null, jr = !1, pt = null, fl = 0, Bn = 0, Zo = null, Ar = -1, Br = 0;
function pe() {
  return F & 6 ? Z() : Ar !== -1 ? Ar : Ar = Z();
}
function St(e) {
  return e.mode & 1 ? F & 2 && ie !== 0 ? ie & -ie : xd.transition !== null ? (Br === 0 && (Br = Ws()), Br) : (e = U, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Js(e.type)), e) : 1;
}
function Ue(e, t, n, r) {
  if (50 < Bn) throw Bn = 0, Zo = null, Error(x(185));
  ir(e, n, r), (!(F & 2) || e !== le) && (e === le && (!(F & 2) && (Cl |= n), te === 4 && ct(e, ie)), Se(e, r), n === 1 && F === 0 && !(t.mode & 1) && (yn = Z() + 500, kl && _t()));
}
function Se(e, t) {
  var n = e.callbackNode;
  xf(e, t);
  var r = Gr(e, e === le ? ie : 0);
  if (r === 0) n !== null && au(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && au(n), t === 1) e.tag === 0 ? kd(ts.bind(null, e)) : va(ts.bind(null, e)), yd(function() {
      !(F & 6) && _t();
    }), n = null;
    else {
      switch (Qs(r)) {
        case 1:
          n = di;
          break;
        case 4:
          n = Vs;
          break;
        case 16:
          n = Yr;
          break;
        case 536870912:
          n = Hs;
          break;
        default:
          n = Yr;
      }
      n = mc(n, uc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function uc(e, t) {
  if (Ar = -1, Br = 0, F & 6) throw Error(x(327));
  var n = e.callbackNode;
  if (cn() && e.callbackNode !== n) return null;
  var r = Gr(e, e === le ? ie : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = dl(e, r);
  else {
    t = r;
    var l = F;
    F |= 2;
    var o = ac();
    (le !== e || ie !== t) && (Ge = null, yn = Z() + 500, Ot(e, t));
    do
      try {
        Vd();
        break;
      } catch (u) {
        sc(e, u);
      }
    while (!0);
    Ci(), al.current = o, F = l, b !== null ? t = 0 : (le = null, ie = 0, t = te);
  }
  if (t !== 0) {
    if (t === 2 && (l = No(e), l !== 0 && (r = l, t = Jo(e, l))), t === 1) throw n = lr, Ot(e, 0), ct(e, r), Se(e, Z()), n;
    if (t === 6) ct(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Ad(l) && (t = dl(e, r), t === 2 && (o = No(e), o !== 0 && (r = o, t = Jo(e, o))), t === 1)) throw n = lr, Ot(e, 0), ct(e, r), Se(e, Z()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          Dt(e, ve, Ge);
          break;
        case 3:
          if (ct(e, r), (r & 130023424) === r && (t = Ai + 500 - Z(), 10 < t)) {
            if (Gr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              pe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Do(Dt.bind(null, e, ve, Ge), t);
            break;
          }
          Dt(e, ve, Ge);
          break;
        case 4:
          if (ct(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Fe(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = Z() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ud(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Do(Dt.bind(null, e, ve, Ge), r);
            break;
          }
          Dt(e, ve, Ge);
          break;
        case 5:
          Dt(e, ve, Ge);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return Se(e, Z()), e.callbackNode === n ? uc.bind(null, e) : null;
}
function Jo(e, t) {
  var n = An;
  return e.current.memoizedState.isDehydrated && (Ot(e, t).flags |= 256), e = dl(e, t), e !== 2 && (t = ve, ve = n, t !== null && qo(t)), e;
}
function qo(e) {
  ve === null ? ve = e : ve.push.apply(ve, e);
}
function Ad(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!Ae(o(), l)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function ct(e, t) {
  for (t &= ~Ui, t &= ~Cl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Fe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ts(e) {
  if (F & 6) throw Error(x(327));
  cn();
  var t = Gr(e, 0);
  if (!(t & 1)) return Se(e, Z()), null;
  var n = dl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = No(e);
    r !== 0 && (t = r, n = Jo(e, r));
  }
  if (n === 1) throw n = lr, Ot(e, 0), ct(e, t), Se(e, Z()), n;
  if (n === 6) throw Error(x(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Dt(e, ve, Ge), Se(e, Z()), null;
}
function Bi(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    F = n, F === 0 && (yn = Z() + 500, kl && _t());
  }
}
function Bt(e) {
  pt !== null && pt.tag === 0 && !(F & 6) && cn();
  var t = F;
  F |= 1;
  var n = Te.transition, r = U;
  try {
    if (Te.transition = null, U = 1, e) return e();
  } finally {
    U = r, Te.transition = n, F = t, !(F & 6) && _t();
  }
}
function Vi() {
  ke = rn.current, H(rn);
}
function Ot(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, vd(n)), b !== null) for (n = b.return; n !== null; ) {
    var r = n;
    switch (xi(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && br();
        break;
      case 3:
        hn(), H(ge), H(fe), Di();
        break;
      case 5:
        Ti(r);
        break;
      case 4:
        hn();
        break;
      case 13:
        H(Q);
        break;
      case 19:
        H(Q);
        break;
      case 10:
        _i(r.type._context);
        break;
      case 22:
      case 23:
        Vi();
    }
    n = n.return;
  }
  if (le = e, b = e = kt(e.current, null), ie = ke = t, te = 0, lr = null, Ui = Cl = At = 0, ve = An = null, Rt !== null) {
    for (t = 0; t < Rt.length; t++) if (n = Rt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, o = n.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      n.pending = r;
    }
    Rt = null;
  }
  return e;
}
function sc(e, t) {
  do {
    var n = b;
    try {
      if (Ci(), $r.current = sl, ul) {
        for (var r = K.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        ul = !1;
      }
      if (Ut = 0, re = ee = K = null, Fn = !1, tr = 0, Fi.current = null, n === null || n.return === null) {
        te = 1, lr = t, b = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, s = t;
        if (t = ie, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, h = u, m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var w = Vu(i);
          if (w !== null) {
            w.flags &= -257, Hu(w, i, u, o, t), w.mode & 1 && Bu(o, c, t), t = w, s = c;
            var y = t.updateQueue;
            if (y === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(s), t.updateQueue = S;
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Bu(o, c, t), Hi();
              break e;
            }
            s = Error(x(426));
          }
        } else if (W && u.mode & 1) {
          var T = Vu(i);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256), Hu(T, i, u, o, t), Ni(vn(s, u));
            break e;
          }
        }
        o = s = vn(s, u), te !== 4 && (te = 2), An === null ? An = [o] : An.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = Qa(o, s, t);
              Ou(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (wt === null || !wt.has(d)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var g = Ka(o, u, t);
                Ou(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      fc(n);
    } catch (k) {
      t = k, b === n && n !== null && (b = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ac() {
  var e = al.current;
  return al.current = sl, e === null ? sl : e;
}
function Hi() {
  (te === 0 || te === 3 || te === 2) && (te = 4), le === null || !(At & 268435455) && !(Cl & 268435455) || ct(le, ie);
}
function dl(e, t) {
  var n = F;
  F |= 2;
  var r = ac();
  (le !== e || ie !== t) && (Ge = null, Ot(e, t));
  do
    try {
      Bd();
      break;
    } catch (l) {
      sc(e, l);
    }
  while (!0);
  if (Ci(), F = n, al.current = r, b !== null) throw Error(x(261));
  return le = null, ie = 0, te;
}
function Bd() {
  for (; b !== null; ) cc(b);
}
function Vd() {
  for (; b !== null && !pf(); ) cc(b);
}
function cc(e) {
  var t = pc(e.alternate, e, ke);
  e.memoizedProps = e.pendingProps, t === null ? fc(e) : b = t, Fi.current = null;
}
function fc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Od(n, t), n !== null) {
        n.flags &= 32767, b = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        te = 6, b = null;
        return;
      }
    } else if (n = Id(n, t, ke), n !== null) {
      b = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      b = t;
      return;
    }
    b = t = e;
  } while (t !== null);
  te === 0 && (te = 5);
}
function Dt(e, t, n) {
  var r = U, l = Te.transition;
  try {
    Te.transition = null, U = 1, Hd(e, t, n, r);
  } finally {
    Te.transition = l, U = r;
  }
  return null;
}
function Hd(e, t, n, r) {
  do
    cn();
  while (pt !== null);
  if (F & 6) throw Error(x(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(x(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Nf(e, o), e === le && (b = le = null, ie = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || jr || (jr = !0, mc(Yr, function() {
    return cn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Te.transition, Te.transition = null;
    var i = U;
    U = 1;
    var u = F;
    F |= 4, Fi.current = null, $d(e, n), oc(n, e), ad(zo), Xr = !!jo, zo = jo = null, e.current = n, Fd(n), mf(), F = u, U = i, Te.transition = o;
  } else e.current = n;
  if (jr && (jr = !1, pt = e, fl = l), o = e.pendingLanes, o === 0 && (wt = null), yf(n.stateNode), Se(e, Z()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (cl) throw cl = !1, e = Xo, Xo = null, e;
  return fl & 1 && e.tag !== 0 && cn(), o = e.pendingLanes, o & 1 ? e === Zo ? Bn++ : (Bn = 0, Zo = e) : Bn = 0, _t(), null;
}
function cn() {
  if (pt !== null) {
    var e = Qs(fl), t = Te.transition, n = U;
    try {
      if (Te.transition = null, U = 16 > e ? 16 : e, pt === null) var r = !1;
      else {
        if (e = pt, pt = null, fl = 0, F & 6) throw Error(x(331));
        var l = F;
        for (F |= 4, z = e.current; z !== null; ) {
          var o = z, i = o.child;
          if (z.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (z = c; z !== null; ) {
                  var h = z;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Un(8, h, o);
                  }
                  var m = h.child;
                  if (m !== null) m.return = h, z = m;
                  else for (; z !== null; ) {
                    h = z;
                    var p = h.sibling, w = h.return;
                    if (nc(h), h === c) {
                      z = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = w, z = p;
                      break;
                    }
                    z = w;
                  }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var S = y.child;
                if (S !== null) {
                  y.child = null;
                  do {
                    var T = S.sibling;
                    S.sibling = null, S = T;
                  } while (S !== null);
                }
              }
              z = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, z = i;
          else e: for (; z !== null; ) {
            if (o = z, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Un(9, o, o.return);
            }
            var f = o.sibling;
            if (f !== null) {
              f.return = o.return, z = f;
              break e;
            }
            z = o.return;
          }
        }
        var a = e.current;
        for (z = a; z !== null; ) {
          i = z;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) d.return = i, z = d;
          else e: for (i = a; z !== null; ) {
            if (u = z, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  El(9, u);
              }
            } catch (k) {
              G(u, u.return, k);
            }
            if (u === i) {
              z = null;
              break e;
            }
            var g = u.sibling;
            if (g !== null) {
              g.return = u.return, z = g;
              break e;
            }
            z = u.return;
          }
        }
        if (F = l, _t(), Qe && typeof Qe.onPostCommitFiberRoot == "function") try {
          Qe.onPostCommitFiberRoot(vl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      U = n, Te.transition = t;
    }
  }
  return !1;
}
function ns(e, t, n) {
  t = vn(n, t), t = Qa(e, t, 1), e = gt(e, t, 1), t = pe(), e !== null && (ir(e, 1, t), Se(e, t));
}
function G(e, t, n) {
  if (e.tag === 3) ns(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ns(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (wt === null || !wt.has(r))) {
        e = vn(n, e), e = Ka(t, e, 1), t = gt(t, e, 1), e = pe(), t !== null && (ir(t, 1, e), Se(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Wd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = pe(), e.pingedLanes |= e.suspendedLanes & n, le === e && (ie & n) === n && (te === 4 || te === 3 && (ie & 130023424) === ie && 500 > Z() - Ai ? Ot(e, 0) : Ui |= n), Se(e, t);
}
function dc(e, t) {
  t === 0 && (e.mode & 1 ? (t = gr, gr <<= 1, !(gr & 130023424) && (gr = 4194304)) : t = 1);
  var n = pe();
  e = tt(e, t), e !== null && (ir(e, t, n), Se(e, n));
}
function Qd(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), dc(e, n);
}
function Kd(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  r !== null && r.delete(t), dc(e, n);
}
var pc;
pc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ge.current) ye = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return ye = !1, Rd(e, t, n);
    ye = !!(e.flags & 131072);
  }
  else ye = !1, W && t.flags & 1048576 && ya(t, nl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ur(e, t), e = t.pendingProps;
      var l = dn(t, fe.current);
      an(t, n), l = Ri(null, t, r, e, l, n);
      var o = Ii();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, we(r) ? (o = !0, el(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ji(t), l.updater = Nl, t.stateNode = l, l._reactInternals = t, Fo(t, r, e, n), t = Bo(null, t, r, !0, o, n)) : (t.tag = 0, W && o && ki(t), de(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ur(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Gd(r), e = Oe(r, e), l) {
          case 0:
            t = Ao(null, t, r, e, n);
            break e;
          case 1:
            t = Ku(null, t, r, e, n);
            break e;
          case 11:
            t = Wu(null, t, r, e, n);
            break e;
          case 14:
            t = Qu(null, t, r, Oe(r.type, e), n);
            break e;
        }
        throw Error(x(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Oe(r, l), Ao(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Oe(r, l), Ku(e, t, r, l, n);
    case 3:
      e: {
        if (Za(t), e === null) throw Error(x(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, Na(e, t), ol(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = vn(Error(x(423)), t), t = Yu(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = vn(Error(x(424)), t), t = Yu(e, t, r, n, l);
          break e;
        } else for (xe = yt(t.stateNode.containerInfo.firstChild), Ne = t, W = !0, $e = null, n = ka(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (pn(), r === l) {
            t = nt(e, t, n);
            break e;
          }
          de(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Ea(t), e === null && Oo(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, To(r, l) ? i = null : o !== null && To(r, o) && (t.flags |= 32), Xa(e, t), de(e, t, i, n), t.child;
    case 6:
      return e === null && Oo(t), null;
    case 13:
      return Ja(e, t, n);
    case 4:
      return zi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = mn(t, null, r, n) : de(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Oe(r, l), Wu(e, t, r, l, n);
    case 7:
      return de(e, t, t.pendingProps, n), t.child;
    case 8:
      return de(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return de(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, A(rl, r._currentValue), r._currentValue = i, o !== null) if (Ae(o.value, i)) {
          if (o.children === l.children && !ge.current) {
            t = nt(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            i = o.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (o.tag === 1) {
                  s = qe(-1, n & -n), s.tag = 2;
                  var c = o.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var h = c.pending;
                    h === null ? s.next = s : (s.next = h.next, h.next = s), c.pending = s;
                  }
                }
                o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Mo(
                  o.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (i = o.return, i === null) throw Error(x(341));
            i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Mo(i, n, t), i = o.sibling;
          } else i = o.child;
          if (i !== null) i.return = o;
          else for (i = o; i !== null; ) {
            if (i === t) {
              i = null;
              break;
            }
            if (o = i.sibling, o !== null) {
              o.return = i.return, i = o;
              break;
            }
            i = i.return;
          }
          o = i;
        }
        de(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, an(t, n), l = De(l), r = r(l), t.flags |= 1, de(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Oe(r, t.pendingProps), l = Oe(r.type, l), Qu(e, t, r, l, n);
    case 15:
      return Ya(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Oe(r, l), Ur(e, t), t.tag = 1, we(r) ? (e = !0, el(t)) : e = !1, an(t, n), Wa(t, r, l), Fo(t, r, l, n), Bo(null, t, r, !0, e, n);
    case 19:
      return qa(e, t, n);
    case 22:
      return Ga(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function mc(e, t) {
  return Bs(e, t);
}
function Yd(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ze(e, t, n, r) {
  return new Yd(e, t, n, r);
}
function Wi(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Gd(e) {
  if (typeof e == "function") return Wi(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ai) return 11;
    if (e === ci) return 14;
  }
  return 2;
}
function kt(e, t) {
  var n = e.alternate;
  return n === null ? (n = ze(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Vr(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") Wi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Yt:
      return Mt(n.children, l, o, t);
    case si:
      i = 8, l |= 8;
      break;
    case uo:
      return e = ze(12, n, t, l | 2), e.elementType = uo, e.lanes = o, e;
    case so:
      return e = ze(13, n, t, l), e.elementType = so, e.lanes = o, e;
    case ao:
      return e = ze(19, n, t, l), e.elementType = ao, e.lanes = o, e;
    case Es:
      return _l(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case xs:
          i = 10;
          break e;
        case Ns:
          i = 9;
          break e;
        case ai:
          i = 11;
          break e;
        case ci:
          i = 14;
          break e;
        case ut:
          i = 16, r = null;
          break e;
      }
      throw Error(x(130, e == null ? e : typeof e, ""));
  }
  return t = ze(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Mt(e, t, n, r) {
  return e = ze(7, e, r, t), e.lanes = n, e;
}
function _l(e, t, n, r) {
  return e = ze(22, e, r, t), e.elementType = Es, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function lo(e, t, n) {
  return e = ze(6, e, null, t), e.lanes = n, e;
}
function oo(e, t, n) {
  return t = ze(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Xd(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ul(0), this.expirationTimes = Ul(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ul(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Qi(e, t, n, r, l, o, i, u, s) {
  return e = new Xd(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = ze(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ji(o), e;
}
function Zd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Kt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function hc(e) {
  if (!e) return Nt;
  e = e._reactInternals;
  e: {
    if (Ht(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (we(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (we(n)) return ha(e, n, t);
  }
  return t;
}
function vc(e, t, n, r, l, o, i, u, s) {
  return e = Qi(n, r, !0, e, l, o, i, u, s), e.context = hc(null), n = e.current, r = pe(), l = St(n), o = qe(r, l), o.callback = t ?? null, gt(n, o, l), e.current.lanes = l, ir(e, l, r), Se(e, r), e;
}
function Pl(e, t, n, r) {
  var l = t.current, o = pe(), i = St(l);
  return n = hc(n), t.context === null ? t.context = n : t.pendingContext = n, t = qe(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = gt(l, t, i), e !== null && (Ue(e, l, i, o), Mr(e, l, i)), i;
}
function pl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function rs(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ki(e, t) {
  rs(e, t), (e = e.alternate) && rs(e, t);
}
function Jd() {
  return null;
}
var yc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Yi(e) {
  this._internalRoot = e;
}
jl.prototype.render = Yi.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  Pl(e, t, null, null);
};
jl.prototype.unmount = Yi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Bt(function() {
      Pl(null, e, null, null);
    }), t[et] = null;
  }
};
function jl(e) {
  this._internalRoot = e;
}
jl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Gs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < at.length && t !== 0 && t < at[n].priority; n++) ;
    at.splice(n, 0, e), n === 0 && Zs(e);
  }
};
function Gi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function zl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ls() {
}
function qd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = pl(i);
        o.call(c);
      };
    }
    var i = vc(t, r, e, 0, null, !1, !1, "", ls);
    return e._reactRootContainer = i, e[et] = i.current, Zn(e.nodeType === 8 ? e.parentNode : e), Bt(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = pl(s);
      u.call(c);
    };
  }
  var s = Qi(e, 0, !1, null, null, !1, !1, "", ls);
  return e._reactRootContainer = s, e[et] = s.current, Zn(e.nodeType === 8 ? e.parentNode : e), Bt(function() {
    Pl(t, s, n, r);
  }), s;
}
function Tl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = pl(i);
        u.call(s);
      };
    }
    Pl(t, i, e, l);
  } else i = qd(n, t, e, l, r);
  return pl(i);
}
Ks = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Dn(t.pendingLanes);
        n !== 0 && (pi(t, n | 1), Se(t, Z()), !(F & 6) && (yn = Z() + 500, _t()));
      }
      break;
    case 13:
      Bt(function() {
        var r = tt(e, 1);
        if (r !== null) {
          var l = pe();
          Ue(r, e, 1, l);
        }
      }), Ki(e, 1);
  }
};
mi = function(e) {
  if (e.tag === 13) {
    var t = tt(e, 134217728);
    if (t !== null) {
      var n = pe();
      Ue(t, e, 134217728, n);
    }
    Ki(e, 134217728);
  }
};
Ys = function(e) {
  if (e.tag === 13) {
    var t = St(e), n = tt(e, t);
    if (n !== null) {
      var r = pe();
      Ue(n, e, t, r);
    }
    Ki(e, t);
  }
};
Gs = function() {
  return U;
};
Xs = function(e, t) {
  var n = U;
  try {
    return U = e, t();
  } finally {
    U = n;
  }
};
So = function(e, t, n) {
  switch (t) {
    case "input":
      if (po(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Sl(r);
            if (!l) throw Error(x(90));
            _s(r), po(r, l);
          }
        }
      }
      break;
    case "textarea":
      js(e, n);
      break;
    case "select":
      t = n.value, t != null && ln(e, !!n.multiple, t, !1);
  }
};
Os = Bi;
Ms = Bt;
var bd = { usingClientEntryPoint: !1, Events: [sr, Jt, Sl, Rs, Is, Bi] }, jn = { findFiberByHostInstance: Lt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ep = { bundleType: jn.bundleType, version: jn.version, rendererPackageName: jn.rendererPackageName, rendererConfig: jn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: lt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Us(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: jn.findFiberByHostInstance || Jd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zr.isDisabled && zr.supportsFiber) try {
    vl = zr.inject(ep), Qe = zr;
  } catch {
  }
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bd;
Ce.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Gi(t)) throw Error(x(200));
  return Zd(e, t, null, n);
};
Ce.createRoot = function(e, t) {
  if (!Gi(e)) throw Error(x(299));
  var n = !1, r = "", l = yc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Qi(e, 1, !1, null, null, n, !1, r, l), e[et] = t.current, Zn(e.nodeType === 8 ? e.parentNode : e), new Yi(t);
};
Ce.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(x(188)) : (e = Object.keys(e).join(","), Error(x(268, e)));
  return e = Us(t), e = e === null ? null : e.stateNode, e;
};
Ce.flushSync = function(e) {
  return Bt(e);
};
Ce.hydrate = function(e, t, n) {
  if (!zl(t)) throw Error(x(200));
  return Tl(null, e, t, !0, n);
};
Ce.hydrateRoot = function(e, t, n) {
  if (!Gi(e)) throw Error(x(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = yc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = vc(t, null, e, 1, n ?? null, l, !1, o, i), e[et] = t.current, Zn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new jl(t);
};
Ce.render = function(e, t, n) {
  if (!zl(t)) throw Error(x(200));
  return Tl(null, e, t, !1, n);
};
Ce.unmountComponentAtNode = function(e) {
  if (!zl(e)) throw Error(x(40));
  return e._reactRootContainer ? (Bt(function() {
    Tl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[et] = null;
    });
  }), !0) : !1;
};
Ce.unstable_batchedUpdates = Bi;
Ce.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!zl(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return Tl(e, t, n, !1, r);
};
Ce.version = "18.3.1-next-f1338f8080-20240426";
function gc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gc);
    } catch (e) {
      console.error(e);
    }
}
gc(), gs.exports = Ce;
var tp = gs.exports, wc, os = tp;
wc = os.createRoot, os.hydrateRoot;
const np = "https://api.novacpayment.com/api/v1", rp = (e) => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${e || ""}`
}), lp = async (e) => {
  const t = await e.text();
  let n = null;
  try {
    n = t ? JSON.parse(t) : {};
  } catch {
    n = t;
  }
  if (!e.ok) {
    const r = n && n.message || e.statusText || "Request failed";
    throw new Error(r);
  }
  return n;
}, Wt = async ({ path: e, method: t = "GET", body: n, publicKey: r }) => {
  const l = {
    method: t,
    headers: rp(r)
  };
  n !== void 0 && (l.body = JSON.stringify(n));
  const o = await fetch(`${np}${e}`, l);
  return lp(o);
}, op = async (e) => {
  const { publicKey: t, ...n } = e;
  return Wt({
    path: "/initiate",
    method: "POST",
    body: n,
    publicKey: t
  });
}, ip = async (e) => {
  const { publicKey: t, reference: n, otp: r } = e;
  return Wt({
    path: "/card/validate-otp",
    method: "POST",
    body: { reference: n, otp: r },
    publicKey: t
  });
}, up = async (e) => {
  const { publicKey: t, cardHolderName: n, cardNumber: r, cardPin: l, cvv: o, expiryMonth: i, expiryYear: u, transactionReference: s } = e;
  return Wt({
    path: "/card-payment",
    method: "POST",
    body: {
      transactionReference: s,
      cardHolderName: n,
      cardNumber: r,
      cardPin: l,
      cvv: o,
      expiryMonth: i,
      expiryYear: u
    },
    publicKey: t
  });
}, sp = async (e) => {
  const { publicKey: t, reference: n } = e;
  return Wt({
    path: "/bank-transfer",
    method: "POST",
    body: {
      transactionReference: n,
      paymentType: "bank_transfer"
    },
    publicKey: t
  });
}, ap = async (e) => {
  const { publicKey: t, bankCode: n, reference: r } = e;
  return Wt({
    path: "/ussd-payment",
    method: "POST",
    body: {
      transactionReference: r,
      bankCode: n
    },
    publicKey: t
  });
}, cp = async (e) => Wt({ path: "/ussd-getbanks", method: "GET", publicKey: e }), Xi = async (e, t) => {
  try {
    if (!e.publicKey) throw new Error("Public key is required");
    if (!e.email) throw new Error("Email is required");
    if (!e.amount || e.amount <= 0) throw new Error("Valid amount is required");
    if (e.publicKey && e.publicKey.includes("carl")) {
      await new Promise((l) => setTimeout(l, 1500));
      const r = {
        card: {
          status: "success",
          reference: e.reference,
          transactionId: Sc(),
          message: "Payment successful",
          amount: e.amount,
          currency: e.currency
        },
        bank_transfer: {
          status: "pending",
          reference: e.reference,
          accountNumber: "0123456789",
          accountName: "Novac Payment Limited",
          bankName: "Access Bank",
          message: "Transfer details generated"
        },
        ussd: {
          status: "pending",
          reference: e.reference,
          paymentCode: Math.floor(1e5 + Math.random() * 9e5),
          message: "USSD code generated"
        }
      };
      return r[e.paymentMethod] || r.card;
    }
    let n;
    switch (e.paymentMethod) {
      case "bank_transfer": {
        const r = (await sp(e)).data || {};
        n = {
          status: "pending",
          reference: e.reference,
          accountNumber: r.accountNumber || "0123456789",
          accountName: r.accountName || "Novac Payment Limited",
          bankName: r.bankName || "Access Bank",
          message: r.friendlyMessage || "Transfer details generated"
        };
        break;
      }
      case "ussd":
        n = await ap({
          publicKey: e.publicKey,
          bankCode: e.bankCode,
          reference: t.data.transactionReference
        });
        break;
      case "card":
        n = await up({
          publicKey: e.publicKey,
          cardNumber: e.cardDetails.cardNumber,
          cardPin: e.cardDetails.cardPin,
          cvv: e.cardDetails.cvv,
          expiryMonth: e.cardDetails.expiryMonth,
          expiryYear: e.cardDetails.expiryYear,
          cardHolderName: e.cardDetails.cardholderName,
          transactionReference: t.data.transactionReference
        });
        break;
      default:
        n = {
          link: t.data.paymentRedirectUrl,
          reference: t.data.transactionReference
        };
        break;
    }
    return n;
  } catch (n) {
    throw new Error(n.message || "Network error. Please try again.");
  }
}, fp = async (e, t) => {
  try {
    return await Wt({
      path: `/checkout/${e}/verify`,
      method: "GET",
      publicKey: t
    });
  } catch (n) {
    throw new Error(n.message || "Verification failed");
  }
}, Sc = () => `TXN_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`, dp = (e) => {
  const t = e.replace(/\D/g, "");
  if (t.length < 13 || t.length > 19) return !1;
  let n = 0, r = !1;
  for (let l = t.length - 1; l >= 0; l--) {
    let o = Number(t[l]);
    r && (o = o * 2 - (o > 4 ? 9 : 0)), n += o, r = !r;
  }
  return n % 10 === 0;
}, pp = (e) => /^\d{3,4}$/.test(e), mp = (e) => {
  if (!/^\d{2}\/\d{2}$/.test(e))
    return !1;
  const [t, n] = e.split("/").map((o) => parseInt(o, 10));
  if (t < 1 || t > 12)
    return !1;
  const r = (/* @__PURE__ */ new Date()).getFullYear() % 100, l = (/* @__PURE__ */ new Date()).getMonth() + 1;
  return !(n < r || n === r && t < l);
}, hp = ({ formData: e, setFormData: t, handleSubmit: n }) => {
  const [l, o] = _.useState(Array(4).fill("")), [i, u] = _.useState({}), s = _.useRef([]);
  _.useEffect(() => {
    e && typeof e.cardPin == "string" && e.cardPin.length === 4 && o(e.cardPin.split(""));
  }, [e]), _.useEffect(() => {
    const y = l.join("");
    t({ ...e, cardPin: y });
  }, [l]);
  const c = () => {
    const y = {};
    return l.some((S) => S.trim() === "") ? y.pin = "PIN is required" : l.join("").match(/^\d{4}$/) || (y.pin = "PIN must be 4 digits"), u(y), Object.keys(y).length === 0;
  }, h = (y, S) => {
    const f = S.target.value.replace(/[^0-9]/g, "").slice(-1) || "", a = [...l];
    if (a[y] = f, o(a), f && y < 3) {
      const d = s.current[y + 1];
      d && d.focus();
    }
  }, m = (y, S) => {
    var T, f;
    if (S.key === "Backspace") {
      if (l[y]) {
        const a = [...l];
        a[y] = "", o(a);
      } else if (y > 0) {
        const a = s.current[y - 1];
        if (a) {
          a.focus();
          const d = [...l];
          d[y - 1] = "", o(d);
        }
      }
    } else S.key === "ArrowLeft" && y > 0 ? (T = s.current[y - 1]) == null || T.focus() : S.key === "ArrowRight" && y < 3 && ((f = s.current[y + 1]) == null || f.focus());
  }, p = (y) => {
    var g;
    y.preventDefault();
    const T = (y.clipboardData || window.clipboardData).getData("text").replace(/\D/g, "").slice(0, 4).split("");
    if (T.length === 0) return;
    const f = [...l];
    for (let k = 0; k < 4; k++)
      f[k] = T[k] || "";
    o(f);
    const a = f.findIndex((k) => k === ""), d = a === -1 ? 3 : a;
    (g = s.current[d]) == null || g.focus();
  }, w = (y) => {
    y.preventDefault(), c() && n(y);
  };
  return /* @__PURE__ */ v.jsx("form", { onSubmit: w, className: "novac-pin-form", children: /* @__PURE__ */ v.jsxs("div", { className: "novac-form-group", children: [
    /* @__PURE__ */ v.jsx("label", { className: "novac-label", children: "Enter your 4 digit PIN to proceed" }),
    /* @__PURE__ */ v.jsx("div", { className: "novac-pin-inputs", onPaste: p, style: { display: "flex", gap: "10px", justifyContent: "center" }, children: l.map((y, S) => /* @__PURE__ */ v.jsx(
      "input",
      {
        ref: (T) => s.current[S] = T,
        type: "tel",
        inputMode: "numeric",
        pattern: "[0-9]*",
        maxLength: 1,
        className: `novac-pin-cell ${i.pin ? "error" : ""}`,
        value: y,
        onChange: (T) => h(S, T),
        onKeyDown: (T) => m(S, T),
        "aria-label": `PIN digit ${S + 1}`,
        autoComplete: S === 0 ? "one-time-code" : "off"
      },
      S
    )) }),
    i.pin && /* @__PURE__ */ v.jsx("span", { className: "novac-error-text", children: i.pin }),
    /* @__PURE__ */ v.jsx("button", { type: "submit", className: "novac-submit-btn", style: { marginTop: "16px" }, children: "Submit" })
  ] }) });
}, vp = ({ config: e, onSuccess: t, onError: n }) => {
  const [r, l] = _.useState({
    otp: ""
  }), [o, i] = _.useState({}), [u, s] = _.useState(!1), c = () => {
    const p = {};
    return r.otp.trim() || (p.otp = "OTP is required"), i(p), Object.keys(p).length === 0;
  }, h = async (p) => {
    if (p.preventDefault(), !!c()) {
      s(!0);
      try {
        const w = r.otp.replace(/\s/g, ""), y = {
          publicKey: e.publicKey,
          otp: w,
          reference: e.reference
        }, S = await ip(y);
        console.log("OTP Validation Response:", S), t(!0);
      } catch (w) {
        n({
          message: w.message || "Otp Validation failed.",
          type: "card_error"
        });
      }
    }
  };
  function m(p) {
    const { name: w, value: y } = p.target;
    l((S) => ({
      ...S,
      [w]: y
    }));
  }
  return /* @__PURE__ */ v.jsxs("form", { className: "novac-payment-form", onSubmit: h, children: [
    /* @__PURE__ */ v.jsxs("div", { className: "novac-form-group", children: [
      /* @__PURE__ */ v.jsx("label", { htmlFor: "cardholderName", className: "novac-label", children: "Otp" }),
      /* @__PURE__ */ v.jsx(
        "input",
        {
          type: "text",
          id: "otp",
          name: "otp",
          className: `novac-input ${o.otp ? "error" : ""}`,
          value: r.otp,
          onChange: m,
          placeholder: "John Doe",
          disabled: u,
          autoComplete: "cc-name"
        }
      ),
      o.otp && /* @__PURE__ */ v.jsx("span", { className: "novac-error-text", children: o.otp })
    ] }),
    /* @__PURE__ */ v.jsx(
      "button",
      {
        type: "submit",
        className: "novac-submit-btn",
        disabled: u,
        children: u ? "Processing..." : "Submit OTP"
      }
    )
  ] });
};
let yp = { data: "" }, gp = (e) => {
  if (typeof window == "object") {
    let t = (e ? e.querySelector("#_goober") : window._goober) || Object.assign(document.createElement("style"), { innerHTML: " ", id: "_goober" });
    return t.nonce = window.__nonce__, t.parentNode || (e || document.head).appendChild(t), t.firstChild;
  }
  return e || yp;
}, wp = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, Sp = /\/\*[^]*?\*\/|  +/g, is = /\n+/g, ft = (e, t) => {
  let n = "", r = "", l = "";
  for (let o in e) {
    let i = e[o];
    o[0] == "@" ? o[1] == "i" ? n = o + " " + i + ";" : r += o[1] == "f" ? ft(i, o) : o + "{" + ft(i, o[1] == "k" ? "" : t) + "}" : typeof i == "object" ? r += ft(i, t ? t.replace(/([^,])+/g, (u) => o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (s) => /&/.test(s) ? s.replace(/&/g, u) : u ? u + " " + s : s)) : o) : i != null && (o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase(), l += ft.p ? ft.p(o, i) : o + ":" + i + ";");
  }
  return n + (t && l ? t + "{" + l + "}" : l) + r;
}, Ye = {}, kc = (e) => {
  if (typeof e == "object") {
    let t = "";
    for (let n in e) t += n + kc(e[n]);
    return t;
  }
  return e;
}, kp = (e, t, n, r, l) => {
  let o = kc(e), i = Ye[o] || (Ye[o] = ((s) => {
    let c = 0, h = 11;
    for (; c < s.length; ) h = 101 * h + s.charCodeAt(c++) >>> 0;
    return "go" + h;
  })(o));
  if (!Ye[i]) {
    let s = o !== e ? e : ((c) => {
      let h, m, p = [{}];
      for (; h = wp.exec(c.replace(Sp, "")); ) h[4] ? p.shift() : h[3] ? (m = h[3].replace(is, " ").trim(), p.unshift(p[0][m] = p[0][m] || {})) : p[0][h[1]] = h[2].replace(is, " ").trim();
      return p[0];
    })(e);
    Ye[i] = ft(l ? { ["@keyframes " + i]: s } : s, n ? "" : "." + i);
  }
  let u = n && Ye.g ? Ye.g : null;
  return n && (Ye.g = Ye[i]), ((s, c, h, m) => {
    m ? c.data = c.data.replace(m, s) : c.data.indexOf(s) === -1 && (c.data = h ? s + c.data : c.data + s);
  })(Ye[i], t, r, u), i;
}, xp = (e, t, n) => e.reduce((r, l, o) => {
  let i = t[o];
  if (i && i.call) {
    let u = i(n), s = u && u.props && u.props.className || /^go/.test(u) && u;
    i = s ? "." + s : u && typeof u == "object" ? u.props ? "" : ft(u, "") : u === !1 ? "" : u;
  }
  return r + l + (i ?? "");
}, "");
function Dl(e) {
  let t = this || {}, n = e.call ? e(t.p) : e;
  return kp(n.unshift ? n.raw ? xp(n, [].slice.call(arguments, 1), t.p) : n.reduce((r, l) => Object.assign(r, l && l.call ? l(t.p) : l), {}) : n, gp(t.target), t.g, t.o, t.k);
}
let xc, bo, ei;
Dl.bind({ g: 1 });
let rt = Dl.bind({ k: 1 });
function Np(e, t, n, r) {
  ft.p = t, xc = e, bo = n, ei = r;
}
function Pt(e, t) {
  let n = this || {};
  return function() {
    let r = arguments;
    function l(o, i) {
      let u = Object.assign({}, o), s = u.className || l.className;
      n.p = Object.assign({ theme: bo && bo() }, u), n.o = / *go\d+/.test(s), u.className = Dl.apply(n, r) + (s ? " " + s : "");
      let c = e;
      return e[0] && (c = u.as || e, delete u.as), ei && c[0] && ei(u), xc(c, u);
    }
    return l;
  };
}
var Ep = (e) => typeof e == "function", ml = (e, t) => Ep(e) ? e(t) : e, Cp = /* @__PURE__ */ (() => {
  let e = 0;
  return () => (++e).toString();
})(), Nc = /* @__PURE__ */ (() => {
  let e;
  return () => {
    if (e === void 0 && typeof window < "u") {
      let t = matchMedia("(prefers-reduced-motion: reduce)");
      e = !t || t.matches;
    }
    return e;
  };
})(), _p = 20, Zi = "default", Ec = (e, t) => {
  let { toastLimit: n } = e.settings;
  switch (t.type) {
    case 0:
      return { ...e, toasts: [t.toast, ...e.toasts].slice(0, n) };
    case 1:
      return { ...e, toasts: e.toasts.map((i) => i.id === t.toast.id ? { ...i, ...t.toast } : i) };
    case 2:
      let { toast: r } = t;
      return Ec(e, { type: e.toasts.find((i) => i.id === r.id) ? 1 : 0, toast: r });
    case 3:
      let { toastId: l } = t;
      return { ...e, toasts: e.toasts.map((i) => i.id === l || l === void 0 ? { ...i, dismissed: !0, visible: !1 } : i) };
    case 4:
      return t.toastId === void 0 ? { ...e, toasts: [] } : { ...e, toasts: e.toasts.filter((i) => i.id !== t.toastId) };
    case 5:
      return { ...e, pausedAt: t.time };
    case 6:
      let o = t.time - (e.pausedAt || 0);
      return { ...e, pausedAt: void 0, toasts: e.toasts.map((i) => ({ ...i, pauseDuration: i.pauseDuration + o })) };
  }
}, Hr = [], Cc = { toasts: [], pausedAt: void 0, settings: { toastLimit: _p } }, We = {}, _c = (e, t = Zi) => {
  We[t] = Ec(We[t] || Cc, e), Hr.forEach(([n, r]) => {
    n === t && r(We[t]);
  });
}, Pc = (e) => Object.keys(We).forEach((t) => _c(e, t)), Pp = (e) => Object.keys(We).find((t) => We[t].toasts.some((n) => n.id === e)), Ll = (e = Zi) => (t) => {
  _c(t, e);
}, jp = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 }, zp = (e = {}, t = Zi) => {
  let [n, r] = _.useState(We[t] || Cc), l = _.useRef(We[t]);
  _.useEffect(() => (l.current !== We[t] && r(We[t]), Hr.push([t, r]), () => {
    let i = Hr.findIndex(([u]) => u === t);
    i > -1 && Hr.splice(i, 1);
  }), [t]);
  let o = n.toasts.map((i) => {
    var u, s, c;
    return { ...e, ...e[i.type], ...i, removeDelay: i.removeDelay || ((u = e[i.type]) == null ? void 0 : u.removeDelay) || (e == null ? void 0 : e.removeDelay), duration: i.duration || ((s = e[i.type]) == null ? void 0 : s.duration) || (e == null ? void 0 : e.duration) || jp[i.type], style: { ...e.style, ...(c = e[i.type]) == null ? void 0 : c.style, ...i.style } };
  });
  return { ...n, toasts: o };
}, Tp = (e, t = "blank", n) => ({ createdAt: Date.now(), visible: !0, dismissed: !1, type: t, ariaProps: { role: "status", "aria-live": "polite" }, message: e, pauseDuration: 0, ...n, id: (n == null ? void 0 : n.id) || Cp() }), cr = (e) => (t, n) => {
  let r = Tp(t, e, n);
  return Ll(r.toasterId || Pp(r.id))({ type: 2, toast: r }), r.id;
}, J = (e, t) => cr("blank")(e, t);
J.error = cr("error");
J.success = cr("success");
J.loading = cr("loading");
J.custom = cr("custom");
J.dismiss = (e, t) => {
  let n = { type: 3, toastId: e };
  t ? Ll(t)(n) : Pc(n);
};
J.dismissAll = (e) => J.dismiss(void 0, e);
J.remove = (e, t) => {
  let n = { type: 4, toastId: e };
  t ? Ll(t)(n) : Pc(n);
};
J.removeAll = (e) => J.remove(void 0, e);
J.promise = (e, t, n) => {
  let r = J.loading(t.loading, { ...n, ...n == null ? void 0 : n.loading });
  return typeof e == "function" && (e = e()), e.then((l) => {
    let o = t.success ? ml(t.success, l) : void 0;
    return o ? J.success(o, { id: r, ...n, ...n == null ? void 0 : n.success }) : J.dismiss(r), l;
  }).catch((l) => {
    let o = t.error ? ml(t.error, l) : void 0;
    o ? J.error(o, { id: r, ...n, ...n == null ? void 0 : n.error }) : J.dismiss(r);
  }), e;
};
var Dp = 1e3, Lp = (e, t = "default") => {
  let { toasts: n, pausedAt: r } = zp(e, t), l = _.useRef(/* @__PURE__ */ new Map()).current, o = _.useCallback((m, p = Dp) => {
    if (l.has(m)) return;
    let w = setTimeout(() => {
      l.delete(m), i({ type: 4, toastId: m });
    }, p);
    l.set(m, w);
  }, []);
  _.useEffect(() => {
    if (r) return;
    let m = Date.now(), p = n.map((w) => {
      if (w.duration === 1 / 0) return;
      let y = (w.duration || 0) + w.pauseDuration - (m - w.createdAt);
      if (y < 0) {
        w.visible && J.dismiss(w.id);
        return;
      }
      return setTimeout(() => J.dismiss(w.id, t), y);
    });
    return () => {
      p.forEach((w) => w && clearTimeout(w));
    };
  }, [n, r, t]);
  let i = _.useCallback(Ll(t), [t]), u = _.useCallback(() => {
    i({ type: 5, time: Date.now() });
  }, [i]), s = _.useCallback((m, p) => {
    i({ type: 1, toast: { id: m, height: p } });
  }, [i]), c = _.useCallback(() => {
    r && i({ type: 6, time: Date.now() });
  }, [r, i]), h = _.useCallback((m, p) => {
    let { reverseOrder: w = !1, gutter: y = 8, defaultPosition: S } = p || {}, T = n.filter((d) => (d.position || S) === (m.position || S) && d.height), f = T.findIndex((d) => d.id === m.id), a = T.filter((d, g) => g < f && d.visible).length;
    return T.filter((d) => d.visible).slice(...w ? [a + 1] : [0, a]).reduce((d, g) => d + (g.height || 0) + y, 0);
  }, [n]);
  return _.useEffect(() => {
    n.forEach((m) => {
      if (m.dismissed) o(m.id, m.removeDelay);
      else {
        let p = l.get(m.id);
        p && (clearTimeout(p), l.delete(m.id));
      }
    });
  }, [n, o]), { toasts: n, handlers: { updateHeight: s, startPause: u, endPause: c, calculateOffset: h } };
}, Rp = rt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, Ip = rt`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, Op = rt`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, Mp = Pt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Rp} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Ip} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Op} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, $p = rt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, Fp = Pt("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${$p} 1s linear infinite;
`, Up = rt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, Ap = rt`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, Bp = Pt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Up} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ap} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`, Vp = Pt("div")`
  position: absolute;
`, Hp = Pt("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, Wp = rt`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, Qp = Pt("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Wp} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, Kp = ({ toast: e }) => {
  let { icon: t, type: n, iconTheme: r } = e;
  return t !== void 0 ? typeof t == "string" ? _.createElement(Qp, null, t) : t : n === "blank" ? null : _.createElement(Hp, null, _.createElement(Fp, { ...r }), n !== "loading" && _.createElement(Vp, null, n === "error" ? _.createElement(Mp, { ...r }) : _.createElement(Bp, { ...r })));
}, Yp = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, Gp = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`, Xp = "0%{opacity:0;} 100%{opacity:1;}", Zp = "0%{opacity:1;} 100%{opacity:0;}", Jp = Pt("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, qp = Pt("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, bp = (e, t) => {
  let n = e.includes("top") ? 1 : -1, [r, l] = Nc() ? [Xp, Zp] : [Yp(n), Gp(n)];
  return { animation: t ? `${rt(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${rt(l)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
}, em = _.memo(({ toast: e, position: t, style: n, children: r }) => {
  let l = e.height ? bp(e.position || t || "top-center", e.visible) : { opacity: 0 }, o = _.createElement(Kp, { toast: e }), i = _.createElement(qp, { ...e.ariaProps }, ml(e.message, e));
  return _.createElement(Jp, { className: e.className, style: { ...l, ...n, ...e.style } }, typeof r == "function" ? r({ icon: o, message: i }) : _.createElement(_.Fragment, null, o, i));
});
Np(_.createElement);
var tm = ({ id: e, className: t, style: n, onHeightUpdate: r, children: l }) => {
  let o = _.useCallback((i) => {
    if (i) {
      let u = () => {
        let s = i.getBoundingClientRect().height;
        r(e, s);
      };
      u(), new MutationObserver(u).observe(i, { subtree: !0, childList: !0, characterData: !0 });
    }
  }, [e, r]);
  return _.createElement("div", { ref: o, className: t, style: n }, l);
}, nm = (e, t) => {
  let n = e.includes("top"), r = n ? { top: 0 } : { bottom: 0 }, l = e.includes("center") ? { justifyContent: "center" } : e.includes("right") ? { justifyContent: "flex-end" } : {};
  return { left: 0, right: 0, display: "flex", position: "absolute", transition: Nc() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)", transform: `translateY(${t * (n ? 1 : -1)}px)`, ...r, ...l };
}, rm = Dl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`, Tr = 16, lm = ({ reverseOrder: e, position: t = "top-center", toastOptions: n, gutter: r, children: l, toasterId: o, containerStyle: i, containerClassName: u }) => {
  let { toasts: s, handlers: c } = Lp(n, o);
  return _.createElement("div", { "data-rht-toaster": o || "", style: { position: "fixed", zIndex: 9999, top: Tr, left: Tr, right: Tr, bottom: Tr, pointerEvents: "none", ...i }, className: u, onMouseEnter: c.startPause, onMouseLeave: c.endPause }, s.map((h) => {
    let m = h.position || t, p = c.calculateOffset(h, { reverseOrder: e, gutter: r, defaultPosition: t }), w = nm(m, p);
    return _.createElement(tm, { id: h.id, key: h.id, onHeightUpdate: c.updateHeight, className: h.visible ? rm : "", style: w }, h.type === "custom" ? ml(h.message, h) : l ? l(h) : _.createElement(em, { toast: h, position: m }));
  }));
};
const om = ({ config: e, onSuccess: t, onError: n, isProcessing: r, setIsProcessing: l, initialResponse: o }) => {
  const [i, u] = _.useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    cardPin: ""
  }), [s, c] = _.useState({}), [h, m] = _.useState(!1), [p, w] = _.useState(!1), y = (a) => {
    const { name: d, value: g } = a.target;
    let k = g;
    d === "cardNumber" && (k = g.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim()), d === "expiryDate" && (k = g.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1/$2")), d === "cvv" && (k = g.replace(/\D/g, "")), u((N) => ({
      ...N,
      [d]: k
    })), s[d] && c((N) => ({
      ...N,
      [d]: ""
    }));
  }, S = () => {
    const a = {}, d = i.cardNumber.replace(/\s/g, "");
    return dp(d) || (a.cardNumber = "Invalid card number"), mp(i.expiryDate) || (a.expiryDate = "Invalid expiry date"), pp(i.cvv) || (a.cvv = "Invalid CVV"), c(a), Object.keys(a).length === 0;
  }, T = (a) => {
    a.preventDefault(), S() && m(!0);
  }, f = async (a) => {
    if (a.preventDefault(), !!S()) {
      l(!0);
      try {
        const d = i.cardNumber.replace(/\s/g, ""), [g, k] = i.expiryDate.split("/"), N = {
          publicKey: e.publicKey,
          email: e.email,
          amount: e.amount,
          currency: e.currency,
          reference: e.reference,
          paymentMethod: "card",
          cardDetails: {
            cardNumber: d,
            expiryMonth: g,
            expiryYear: `${k}`,
            cvv: i.cvv,
            cardPin: i.cardPin,
            cardholderName: i.cardholderName
          },
          metadata: e.metadata
        }, { data: P } = await Xi(N, o), { authMode: j } = P;
        if (console.log("Payment Response:", P), j === "otp") {
          w(!0), m(!1), l(!1);
          return;
        }
        if (j === "pin") {
          w(!1), m(!0), l(!1);
          return;
        }
        w(!0);
      } catch (d) {
        J.error(d.message || "Payment failed. Please try again."), n({
          message: d.message || "Payment failed. Please try again.",
          type: "card_error"
        });
      }
    }
  };
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    h && !p && /* @__PURE__ */ v.jsx(hp, { formData: i, setFormData: u, handleSubmit: f }),
    !h && !p && /* @__PURE__ */ v.jsxs("form", { className: "novac-payment-form", onSubmit: T, children: [
      /* @__PURE__ */ v.jsxs("div", { className: "novac-form-group", children: [
        /* @__PURE__ */ v.jsx("label", { htmlFor: "cardNumber", className: "novac-label", children: "Card Number" }),
        /* @__PURE__ */ v.jsxs("div", { className: "novac-input-wrapper", children: [
          /* @__PURE__ */ v.jsx("span", { className: "novac-input-icon", children: "💳" }),
          /* @__PURE__ */ v.jsx(
            "input",
            {
              type: "text",
              id: "cardNumber",
              name: "cardNumber",
              className: `novac-input with-icon ${s.cardNumber ? "error" : ""}`,
              value: i.cardNumber,
              onChange: y,
              placeholder: "0000 0000 0000 0000",
              maxLength: "19",
              disabled: r,
              autoComplete: "cc-number"
            }
          )
        ] }),
        s.cardNumber && /* @__PURE__ */ v.jsx("span", { className: "novac-error-text", children: "Enter a valid card number" })
      ] }),
      /* @__PURE__ */ v.jsxs("div", { className: "novac-form-row", children: [
        /* @__PURE__ */ v.jsxs("div", { className: "novac-form-group", children: [
          /* @__PURE__ */ v.jsx("label", { htmlFor: "expiryDate", className: "novac-label", children: "Expiry Date" }),
          /* @__PURE__ */ v.jsx(
            "input",
            {
              type: "text",
              id: "expiryDate",
              name: "expiryDate",
              className: `novac-input ${s.expiryDate ? "error" : ""}`,
              value: i.expiryDate,
              onChange: y,
              placeholder: "MM/YY",
              maxLength: "5",
              disabled: r,
              autoComplete: "cc-exp"
            }
          ),
          s.expiryDate && /* @__PURE__ */ v.jsx("span", { className: "novac-error-text", children: s.expiryDate })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "novac-form-group", children: [
          /* @__PURE__ */ v.jsx("label", { htmlFor: "cvv", className: "novac-label", children: "CVV" }),
          /* @__PURE__ */ v.jsx(
            "input",
            {
              type: "text",
              id: "cvv",
              name: "cvv",
              className: `novac-input ${s.cvv ? "error" : ""}`,
              value: i.cvv,
              onChange: y,
              placeholder: "123",
              maxLength: "4",
              disabled: r,
              autoComplete: "cc-csc"
            }
          ),
          s.cvv && /* @__PURE__ */ v.jsx("span", { className: "novac-error-text", children: s.cvv })
        ] })
      ] }),
      /* @__PURE__ */ v.jsx(
        "button",
        {
          type: "submit",
          className: "novac-submit-btn",
          disabled: r,
          children: r ? "Processing..." : "Pay"
        }
      )
    ] }),
    p && /* @__PURE__ */ v.jsx(vp, { config: e, onSuccess: t, onError: n, isProcessing: r, setIsProcessing: l })
  ] });
}, im = ({ config: e, onSuccess: t, onError: n, isProcessing: r, setIsProcessing: l, initialResponse: o }) => {
  const [i, u] = _.useState(sessionStorage.getItem("novac-transfer-details") ? JSON.parse(sessionStorage.getItem("novac-transfer-details")) : null), [s, c] = _.useState(!1), [h, m] = _.useState(null), p = _.useCallback(async () => {
    l(!0);
    try {
      const f = {
        ...e,
        publicKey: e.publicKey,
        email: e.email,
        amount: e.amount,
        currency: e.currency,
        reference: e.reference,
        paymentMethod: "bank_transfer",
        metadata: e.metadata,
        customerName: e.customerName,
        customerPhone: e.customerPhone
      }, a = await Xi(f, o);
      sessionStorage.setItem("novac-transfer-details", JSON.stringify({
        accountNumber: a.accountNumber || "0123456789",
        accountName: a.accountName || "Novac Payment Limited",
        bankName: a.bankName || "Access Bank",
        amount: e.amount,
        reference: e.reference,
        expiresInSeconds: a.expiresInSeconds || 20 * 60
      })), u({
        accountNumber: a.accountNumber || "0123456789",
        accountName: a.accountName || "Novac Payment Limited",
        bankName: a.bankName || "Access Bank",
        amount: e.amount,
        reference: e.reference,
        expiresInSeconds: a.expiresInSeconds || 20 * 60
      }), l(!1);
    } catch (f) {
      l(!1), J.error(f.message || "Failed to generate transfer details"), n({
        message: f.message || "Failed to generate transfer details",
        type: "bank_transfer_error"
      });
    }
  }, [e, n, l]);
  _.useEffect(() => {
    p();
  }, []), _.useEffect(() => {
    if (!i) return;
    const f = i.expiresInSeconds || 20 * 60;
    m(f);
  }, [i]), _.useEffect(() => {
    if (h === null || h <= 0) return;
    const f = setInterval(() => {
      m((a) => a > 0 ? a - 1 : 0);
    }, 1e3);
    return () => clearInterval(f);
  }, [h]);
  const w = _.useMemo(() => {
    const f = Number(e.amount) || 0;
    try {
      return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: e.currency || "NGN",
        minimumFractionDigits: 2
      }).format(f);
    } catch {
      return `${e.currency || "NGN"} ${f.toLocaleString()}`;
    }
  }, [e.amount, e.currency]), y = (f) => {
    if (f === null) return "--";
    const a = Math.floor(f / 60), d = Math.max(f % 60, 0);
    return `${a}m ${d.toString().padStart(2, "0")}s`;
  }, S = (f, a) => {
    navigator.clipboard.writeText(f).then(() => {
      c(a), setTimeout(() => c(!1), 2e3);
    }).catch(() => {
      alert("Copy failed. Please copy manually.");
    });
  }, T = () => {
    t({
      reference: e.reference,
      status: "pending",
      message: "Payment initiated. Awaiting confirmation."
    });
  };
  return r ? /* @__PURE__ */ v.jsxs("div", { className: "novac-loading", children: [
    /* @__PURE__ */ v.jsx("div", { className: "novac-spinner" }),
    /* @__PURE__ */ v.jsx("p", { children: "Generating transfer details..." })
  ] }) : i ? /* @__PURE__ */ v.jsxs("section", { className: "novac-bank-transfer", "aria-label": "Bank transfer details", children: [
    /* @__PURE__ */ v.jsx("div", { className: "novac-bank-transfer__intro", children: /* @__PURE__ */ v.jsx("h3", { className: "novac-bank-transfer__title", children: "Transfer to the bank details displayed below" }) }),
    /* @__PURE__ */ v.jsx("div", { className: "novac-bank-transfer__card", children: /* @__PURE__ */ v.jsxs("dl", { className: "novac-bank-transfer__grid", children: [
      /* @__PURE__ */ v.jsxs("div", { className: "novac-bank-transfer__field", children: [
        /* @__PURE__ */ v.jsx("dt", { children: "Amount" }),
        /* @__PURE__ */ v.jsx("dd", { children: w })
      ] }),
      /* @__PURE__ */ v.jsxs("div", { className: "novac-bank-transfer__field", children: [
        /* @__PURE__ */ v.jsx("dt", { children: "Account Number" }),
        /* @__PURE__ */ v.jsxs("dd", { children: [
          /* @__PURE__ */ v.jsx("span", { children: i.accountNumber }),
          /* @__PURE__ */ v.jsxs(
            "button",
            {
              type: "button",
              className: `novac-copy-btn ${s === "account" ? "is-copied" : ""}`,
              onClick: () => S(i.accountNumber, "account"),
              title: "Copy account number",
              children: [
                /* @__PURE__ */ v.jsx("span", { className: "sr-only", children: "Copy account number" }),
                s === "account" ? /* @__PURE__ */ v.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", children: /* @__PURE__ */ v.jsx("path", { d: "M7 13h10v1h-10v-1zm15-11v22h-20v-22h3c1.229 0 2.18-1.084 3-2h8c.82.916 1.771 2 3 2h3zm-11 1c0 .552.448 1 1 1s1-.448 1-1-.448-1-1-1-1 .448-1 1zm9 15.135c-1.073 1.355-2.448 2.763-3.824 3.865h3.824v-3.865zm0-14.135h-4l-2 2h-3.898l-2.102-2h-4v18h7.362c4.156 0 2.638-6 2.638-6s6 1.65 6-2.457v-9.543zm-13 12h5v-1h-5v1zm0-4h10v-1h-10v1zm0-2h10v-1h-10v1z" }) }) : /* @__PURE__ */ v.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "#252264", width: "14", height: "14", viewBox: "0 0 24 24", children: /* @__PURE__ */ v.jsx("path", { d: "M24 4h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z" }) })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ v.jsxs("div", { className: "novac-bank-transfer__field", children: [
        /* @__PURE__ */ v.jsx("dt", { children: "Bank" }),
        /* @__PURE__ */ v.jsx("dd", { children: i.bankName })
      ] }),
      /* @__PURE__ */ v.jsxs("div", { className: "novac-bank-transfer__field", children: [
        /* @__PURE__ */ v.jsx("dt", { children: "Beneficiary Name" }),
        /* @__PURE__ */ v.jsx("dd", { children: i.accountName })
      ] })
    ] }) }),
    /* @__PURE__ */ v.jsxs("p", { className: "novac-bank-transfer__expiry", children: [
      "The account number above expires after ",
      /* @__PURE__ */ v.jsx("strong", { children: y(h) })
    ] }),
    /* @__PURE__ */ v.jsx(
      "button",
      {
        type: "button",
        className: "novac-bank-transfer__cta novac-submit-btn",
        onClick: T,
        children: "I have made this payment!"
      }
    ),
    /* @__PURE__ */ v.jsxs("p", { className: "novac-bank-transfer__footnote", children: [
      "Please pay the exact amount of ",
      w,
      "."
    ] })
  ] }) : /* @__PURE__ */ v.jsx("div", { className: "novac-error-state", children: /* @__PURE__ */ v.jsx("p", { children: "Unable to generate transfer details. Please try again." }) });
}, um = ({ config: e, onSuccess: t, onError: n, isProcessing: r, setIsProcessing: l, initialResponse: o }) => {
  const [i, u] = _.useState(""), [s, c] = _.useState(""), [h, m] = _.useState(!1), [p, w] = _.useState(sessionStorage.getItem("novac-ussd-banks") ? JSON.parse(sessionStorage.getItem("novac-ussd-banks")) : []), [y, S] = _.useState(!1), [T, f] = _.useState(""), [a, d] = _.useState(null), [g, k] = _.useState(!1);
  _.useEffect(() => {
    let C = !0;
    return (async () => {
      var q, Re;
      if (f(""), !(!e || !e.publicKey)) {
        S(!0);
        try {
          const I = await cp(e.publicKey);
          let $ = [];
          if (Array.isArray(I))
            $ = I;
          else if (Array.isArray((q = I == null ? void 0 : I.data) == null ? void 0 : q.bankDetails))
            $ = I.data.bankDetails;
          else if (Array.isArray(I == null ? void 0 : I.data))
            $ = I.data;
          else if (Array.isArray((Re = I == null ? void 0 : I.data) == null ? void 0 : Re.banks))
            $ = I.data.banks;
          else if (Array.isArray(I == null ? void 0 : I.banks))
            $ = I.banks;
          else if (I && typeof I == "object") {
            const D = Object.values(I).find((E) => Array.isArray(E));
            if (Array.isArray(D) && ($ = D), !$.length && I.data && typeof I.data == "object") {
              const E = Object.values(I.data).find((L) => Array.isArray(L));
              Array.isArray(E) && ($ = E);
            }
          }
          const ot = ($ || []).map((D, E) => ({
            key: String((D == null ? void 0 : D.bank_code) ?? (D == null ? void 0 : D.bankCode) ?? (D == null ? void 0 : D.code) ?? (D == null ? void 0 : D.id) ?? (D == null ? void 0 : D.slug) ?? (D == null ? void 0 : D.name) ?? E),
            name: String((D == null ? void 0 : D.bank_name) ?? (D == null ? void 0 : D.bankName) ?? (D == null ? void 0 : D.name) ?? (D == null ? void 0 : D.label) ?? `Bank ${E + 1}`),
            ussd: String((D == null ? void 0 : D.ussd_string) ?? (D == null ? void 0 : D.ussdCode) ?? (D == null ? void 0 : D.ussd_code) ?? (D == null ? void 0 : D.ussd) ?? (D == null ? void 0 : D.ussdPrefix) ?? "")
          }));
          C && (sessionStorage.setItem("novac-ussd-banks", JSON.stringify(ot)), w(ot));
        } catch (I) {
          C && w([]), f((I == null ? void 0 : I.message) || "Failed to load banks"), n && n({ message: I.message || "Failed to load banks", type: "fetch_banks" });
        } finally {
          C && S(!1);
        }
      }
    })(), () => {
      C = !1;
    };
  }, [e == null ? void 0 : e.publicKey]);
  const N = async (C) => {
    var Re;
    const B = C == null ? void 0 : C.key, q = (C == null ? void 0 : C.ussd) ?? "";
    u(B), l(!0);
    try {
      const I = {
        publicKey: e.publicKey,
        email: e.email,
        amount: e.amount,
        currency: e.currency,
        reference: e.reference,
        paymentMethod: "ussd",
        bankCode: B,
        metadata: e.metadata
      }, $ = await Xi(I, o), ot = ($ == null ? void 0 : $.paymentCode) ?? ((Re = $ == null ? void 0 : $.data) == null ? void 0 : Re.paymentCode) ?? ($ == null ? void 0 : $.payment_code) ?? ($ == null ? void 0 : $.code) ?? "", D = ($ == null ? void 0 : $.expiresInSeconds) ?? ($ == null ? void 0 : $.expirySeconds) ?? ($ == null ? void 0 : $.expires_in) ?? 30 * 60;
      let E;
      q && q.includes("{amount}") ? E = q.replace("{amount}", String(e.amount)) : q && q.includes("#") ? E = q : E = `${q}${ot || "000"}*${e.amount}#`, c(E), m(!0), d(D), l(!1);
    } catch (I) {
      l(!1), J.error(I.message || "Failed to generate USSD code"), n && n({
        message: I.message || "Failed to generate USSD code",
        type: "ussd_error"
      });
    }
  }, P = () => {
    t({
      reference: e.reference,
      status: "pending",
      message: "USSD payment initiated. Please complete on your device."
    });
  }, j = () => {
    navigator.clipboard.writeText(s).then(() => {
      k(!0), setTimeout(() => k(!1), 2e3);
    }).catch(() => {
      alert("Copy failed. Please write down the code manually.");
    });
  };
  _.useEffect(() => {
    if (!h || a === null || a <= 0) return;
    const C = setInterval(() => {
      d((B) => B > 0 ? B - 1 : 0);
    }, 1e3);
    return () => clearInterval(C);
  }, [h, a]);
  const M = (C) => {
    if (C === null) return "--:--";
    const B = Math.floor(C / 60), q = Math.max(C % 60, 0);
    return `${B.toString().padStart(2, "0")}:${q.toString().padStart(2, "0")}`;
  };
  return h ? /* @__PURE__ */ v.jsxs("div", { className: "novac-ussd-code", children: [
    /* @__PURE__ */ v.jsx("p", { className: "novac-ussd-code__instruction", children: "Please use this USSD code to complete your transaction" }),
    /* @__PURE__ */ v.jsxs("div", { className: "novac-ussd-code__display", children: [
      /* @__PURE__ */ v.jsx("span", { className: "novac-ussd-code__value", children: s }),
      /* @__PURE__ */ v.jsxs(
        "button",
        {
          className: `novac-copy-btn novac-copy-btn--inline ${g ? "is-copied" : ""}`,
          onClick: j,
          title: "Copy USSD code",
          children: [
            /* @__PURE__ */ v.jsx("span", { className: "sr-only", children: "Copy USSD code" }),
            g ? /* @__PURE__ */ v.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", children: /* @__PURE__ */ v.jsx("path", { d: "M7 13h10v1h-10v-1zm15-11v22h-20v-22h3c1.229 0 2.18-1.084 3-2h8c.82.916 1.771 2 3 2h3zm-11 1c0 .552.448 1 1 1s1-.448 1-1-.448-1-1-1-1 .448-1 1zm9 15.135c-1.073 1.355-2.448 2.763-3.824 3.865h3.824v-3.865zm0-14.135h-4l-2 2h-3.898l-2.102-2h-4v18h7.362c4.156 0 2.638-6 2.638-6s6 1.65 6-2.457v-9.543zm-13 12h5v-1h-5v1zm0-4h10v-1h-10v1zm0-2h10v-1h-10v1z" }) }) : /* @__PURE__ */ v.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "#252264", width: "14", height: "14", viewBox: "0 0 24 24", children: /* @__PURE__ */ v.jsx("path", { d: "M24 4h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z" }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ v.jsxs("p", { className: "novac-ussd-code__expiry", children: [
      "USSD expires after ",
      M(a)
    ] }),
    /* @__PURE__ */ v.jsx(
      "button",
      {
        type: "button",
        className: "novac-submit-btn novac-ussd-code__cta",
        onClick: P,
        children: "I have made Payment"
      }
    )
  ] }) : /* @__PURE__ */ v.jsxs("div", { className: "novac-ussd-payment", children: [
    /* @__PURE__ */ v.jsx("div", { className: "novac-info-box", children: /* @__PURE__ */ v.jsx("p", { className: "novac-info-text", children: "Choose your preferred bank for payment" }) }),
    y ? /* @__PURE__ */ v.jsxs("div", { className: "novac-loading", children: [
      /* @__PURE__ */ v.jsx("div", { className: "novac-spinner" }),
      /* @__PURE__ */ v.jsx("p", { children: "Loading banks..." })
    ] }) : T ? /* @__PURE__ */ v.jsx("div", { className: "novac-warning-box", children: /* @__PURE__ */ v.jsx("p", { className: "novac-warning-text", children: T }) }) : p.length === 0 ? /* @__PURE__ */ v.jsx("div", { className: "novac-info-box", children: /* @__PURE__ */ v.jsx("p", { className: "novac-info-text", children: "No USSD banks available for this merchant." }) }) : /* @__PURE__ */ v.jsxs(
      "select",
      {
        className: "novac-bank-select",
        value: i,
        onChange: (C) => {
          const B = p.find((q) => q.key === C.target.value);
          B && N(B);
        },
        disabled: r,
        children: [
          /* @__PURE__ */ v.jsx("option", { value: "", children: "Select a bank" }),
          p.map((C) => /* @__PURE__ */ v.jsx("option", { value: C.key, children: C.name }, C.key))
        ]
      }
    ),
    r && /* @__PURE__ */ v.jsxs("div", { className: "novac-loading", children: [
      /* @__PURE__ */ v.jsx("div", { className: "novac-spinner" }),
      /* @__PURE__ */ v.jsx("p", { children: "Generating USSD code..." })
    ] })
  ] });
}, sm = (e, t = "NGN") => `${{
  NGN: "₦",
  USD: "$",
  GBP: "£",
  EUR: "€"
}[t] || t}${e.toLocaleString()}`, am = ({ status: e }) => /* @__PURE__ */ v.jsxs("span", { className: `novac-status-icon-inner  ${e}`, children: [
  e === "confirming" && "⏳",
  e === "success" && "✅",
  e === "failed" && "❌"
] }), cm = ({
  reference: e,
  onSuccess: t,
  onError: n,
  time_taken: r,
  publicKey: l,
  status: o = "confirming",
  title: i,
  message: u,
  subMessage: s,
  onRetry: c,
  showCloseHint: h = !0
}) => {
  const m = ["success", "failed"].includes(o) ? o : "confirming", p = typeof r == "number" && r > 0 ? r : 0.5, [w, y] = _.useState(Math.round(p * 60)), S = _.useRef(null), T = _.useRef(null), f = _.useRef(!1), a = {
    confirming: {
      title: i || "Confirming your transaction...",
      message: u || "Please do not refresh or leave this page",
      sub: s || "This process takes a moment while we finalize your payment."
    },
    success: {
      title: i || "Payment Completed",
      message: u || "Your transaction was successful.",
      sub: s || (h ? "You can now securely close this tab." : "")
    },
    failed: {
      title: i || "Payment Failed",
      message: u || "Sorry, we can't complete your transaction at this time.",
      sub: s || (h ? "You can now securely close this tab." : "")
    }
  }[m];
  function d(N) {
    var j;
    if (!N) return !1;
    if (N === !0 || N.status === !0) return !0;
    const P = ((j = N == null ? void 0 : N.data) == null ? void 0 : j.status) ?? (N == null ? void 0 : N.status) ?? (N == null ? void 0 : N.paymentStatus) ?? (N == null ? void 0 : N.statusText);
    if (typeof P == "string") {
      const M = P.toLowerCase();
      if (M.includes("success") || M.includes("completed") || M.includes("paid")) return !0;
    }
    return !1;
  }
  _.useEffect(() => {
    if (m !== "confirming") return () => {
    };
    let N = !0;
    const P = () => {
      S.current && (clearInterval(S.current), S.current = null), T.current && (clearInterval(T.current), T.current = null);
    }, j = (C) => {
      if (!f.current) {
        f.current = !0, P();
        try {
          t && t({
            data: C,
            reference: e,
            status: "success",
            message: "Payment confirmed successfully"
          });
        } catch (B) {
          n && n({
            reference: e,
            status: "failed",
            message: "onSuccess callback error"
          }), console.error("onSuccess callback error", B);
        }
      }
    }, M = async () => {
      try {
        const C = await fp(e, l);
        if (!N) return;
        d(C) && j(C.data || C);
      } catch (C) {
        N && n && n({
          reference: e,
          status: "failed",
          message: (C == null ? void 0 : C.message) || "verifyPayment error"
        }), console.warn("verifyPayment error", (C == null ? void 0 : C.message) || C);
      }
    };
    return M(), S.current = setInterval(M, 5e3), T.current = setInterval(() => {
      y((C) => C <= 1 ? (f.current || j(), 0) : C - 1);
    }, 1e3), () => {
      N = !1, P();
    };
  }, [m, e, l, t]), _.useEffect(() => {
    m !== "confirming" && (S.current && clearInterval(S.current), T.current && clearInterval(T.current));
  }, [m]);
  const g = Math.floor(w / 60), k = w % 60;
  return /* @__PURE__ */ v.jsxs("div", { className: `novac-status-container status-${m}`, children: [
    /* @__PURE__ */ v.jsx("div", { className: "novac-status-icon", children: /* @__PURE__ */ v.jsx(am, { status: m }) }),
    /* @__PURE__ */ v.jsx("h3", { className: "novac-status-title", children: a.title }),
    /* @__PURE__ */ v.jsx("p", { className: "novac-status-message", children: a.message }),
    m === "confirming" ? /* @__PURE__ */ v.jsxs("p", { className: "novac-status-submessage", children: [
      s || "This process takes about ",
      w > 0 ? /* @__PURE__ */ v.jsxs("span", { children: [
        g > 0 ? `${g} minute${g > 1 ? "s" : ""}` : "",
        g > 0 && k > 0 ? " " : "",
        k > 0 ? `${k} second${k > 1 ? "s" : ""}` : ""
      ] }) : /* @__PURE__ */ v.jsx("span", { children: "0 seconds" })
    ] }) : a.sub ? /* @__PURE__ */ v.jsx("p", { className: "novac-status-submessage", children: a.sub }) : null,
    m === "failed" && c && /* @__PURE__ */ v.jsx("button", { type: "button", className: "novac-status-retry", onClick: c, children: "Try Again" })
  ] });
}, fm = ({ config: e, onClose: t }) => {
  var y, S, T, f, a, d, g;
  const [n, r] = _.useState("card"), [l, o] = _.useState(!1), [i, u] = _.useState(null), [s, c] = _.useState(!1), h = [];
  e.paymentMethods.includes("card") && h.push({ id: "card", label: "Card", icon: "💳" }), e.paymentMethods.includes("bank_transfer") && h.push({ id: "bank_transfer", label: "Bank Transfer", icon: "🏦" }), e.paymentMethods.includes("ussd") && h.push({ id: "ussd", label: "USSD", icon: "📱" });
  const m = (k) => {
    o(!1), e.onSuccess(k), setTimeout(() => t(), 1500);
  }, p = (k) => {
    o(!1), e.onError(k);
  }, w = (k) => {
    k.target === k.currentTarget && !l && t();
  };
  return _.useEffect(async () => {
    var P, j, M;
    const k = (e.customerName || "").split(" "), N = await op({
      publicKey: e.publicKey,
      transactionReference: e.reference || Sc(),
      amount: e.amount,
      currency: e.currency,
      checkoutCustomerData: {
        email: e.email,
        firstName: k[0] || "Anonymous",
        lastName: k[1] || "Anonymous",
        phoneNumber: e.customerPhone || ""
      },
      checkoutCustomizationData: {
        logoUrl: ((P = e.customization) == null ? void 0 : P.logoUrl) || "",
        checkoutModalTitle: ((j = e.customization) == null ? void 0 : j.title) || "Novac Payment",
        paymentDescription: ((M = e.customization) == null ? void 0 : M.description) || "Complete your payment securely"
      }
    });
    u(N);
  }, [e]), /* @__PURE__ */ v.jsxs("div", { className: "novac-modal-overlay", onClick: w, children: [
    /* @__PURE__ */ v.jsx("div", { children: /* @__PURE__ */ v.jsx(lm, { position: "top-right" }) }),
    e.publicKey.startsWith("nc_testpk_") && /* @__PURE__ */ v.jsxs("div", { className: "novac-test-banner", children: [
      /* @__PURE__ */ v.jsx("span", { className: "novac-test-banner-icon", children: "⚠️" }),
      /* @__PURE__ */ v.jsx("span", { className: "novac-test-banner-text", children: "You are currently in test environment, all transactions are for testing purposes only!" })
    ] }),
    /* @__PURE__ */ v.jsxs("div", { className: "novac-modal", children: [
      /* @__PURE__ */ v.jsxs("div", { className: "novac-modal-header", style: { background: `${((y = e.customization) == null ? void 0 : y.background) || "#EEEDFD"}`, color: `${((S = e.customization) == null ? void 0 : S.color) || "#15142B"}` }, children: [
        /* @__PURE__ */ v.jsxs("div", { className: "novac-header-content", children: [
          /* @__PURE__ */ v.jsx("p", { className: "novac-amount", style: { color: `${((T = e.customization) == null ? void 0 : T.color) || "#15142B"}` }, children: sm(e.amount, e.currency) }),
          /* @__PURE__ */ v.jsx("h2", { className: "novac-title", style: { color: `${((f = e.customization) == null ? void 0 : f.color) || "#15142B"}` }, children: ((a = e.customization) == null ? void 0 : a.title) || "Payment Modal" }),
          /* @__PURE__ */ v.jsx("p", { className: "novac-email", style: { color: `${((d = e.customization) == null ? void 0 : d.color) || "#15142B"}` }, children: e.email })
        ] }),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            className: "novac-close-btn",
            onClick: t,
            disabled: l,
            "aria-label": "Close",
            children: "×"
          }
        )
      ] }),
      s && /* @__PURE__ */ v.jsx(
        cm,
        {
          reference: ((g = i == null ? void 0 : i.data) == null ? void 0 : g.transactionReference) || void 0,
          publicKey: e.publicKey,
          onClose: t,
          onSuccess: m,
          onError: p,
          time_taken: 60.5,
          onRetry: () => c(!1)
        }
      ),
      !s && /* @__PURE__ */ v.jsx("div", { className: "novac-tabs", children: !s && h.map((k) => /* @__PURE__ */ v.jsxs(
        "button",
        {
          className: `novac-tab ${n === k.id ? "active" : ""}`,
          onClick: () => !l && r(k.id),
          disabled: l,
          children: [
            /* @__PURE__ */ v.jsx("span", { className: "novac-tab-icon", children: k.icon }),
            /* @__PURE__ */ v.jsx("span", { className: "novac-tab-label", children: k.label })
          ]
        },
        k.id
      )) }),
      !s && /* @__PURE__ */ v.jsxs("div", { className: "novac-tab-content", children: [
        !s && n === "card" && /* @__PURE__ */ v.jsx(
          om,
          {
            config: e,
            onSuccess: c,
            onError: p,
            isProcessing: l,
            setIsProcessing: o,
            initialResponse: i
          }
        ),
        !s && n === "bank_transfer" && /* @__PURE__ */ v.jsx(
          im,
          {
            config: e,
            onSuccess: c,
            onError: p,
            isProcessing: l,
            setIsProcessing: o,
            initialResponse: i
          }
        ),
        !s && n === "ussd" && /* @__PURE__ */ v.jsx(
          um,
          {
            config: e,
            onSuccess: c,
            onError: p,
            isProcessing: l,
            setIsProcessing: o,
            initialResponse: i
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ v.jsxs("div", { className: "novac-security-badge", children: [
      /* @__PURE__ */ v.jsx("span", { className: "novac-lock-icon", children: "🔒" }),
      /* @__PURE__ */ v.jsx("span", { className: "novac-security-text", children: "Secured by Novac Payment" })
    ] })
  ] });
};
class jc {
  constructor(t) {
    this.config = this.validateConfig(t), this.modalRoot = null, this.root = null;
  }
  /**
   * Validate configuration object
   */
  validateConfig(t) {
    if (!t)
      throw new Error("Configuration is required");
    const r = ["publicKey", "email", "amount", "customerName", "customization"].filter((o) => !t[o]);
    if (r.length > 0)
      throw new Error(`Missing required fields: ${r.join(", ")}`);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email))
      throw new Error("Invalid email format");
    if (typeof t.amount != "number" || t.amount <= 0)
      throw new Error("Amount must be a positive number");
    return {
      publicKey: this.sanitize(t.publicKey),
      email: this.sanitize(t.email),
      amount: t.amount,
      currency: t.currency || "NGN",
      reference: t.reference || this.generateReference(),
      customerName: t.customerName ? this.sanitize(t.customerName) : "",
      redirectUrl: t.redirectUrl || "",
      customerPhone: t.customerPhone ? this.sanitize(t.customerPhone) : "",
      metadata: t.metadata || {},
      onSuccess: t.onSuccess || (() => {
      }),
      onError: t.onError || (() => {
      }),
      onClose: t.onClose || (() => {
      }),
      paymentMethods: t.paymentMethods || ["card", "bank_transfer", "ussd"],
      customization: t.customization || {}
    };
  }
  /**
   * Sanitize input to prevent XSS attacks
   */
  sanitize(t) {
    if (typeof t != "string") return t;
    const n = document.createElement("div");
    return n.textContent = t, n.innerHTML;
  }
  /**
   * Generate unique reference for transaction
   */
  generateReference() {
    const t = Date.now(), n = Math.random().toString(36).substring(2, 15);
    return `NOVAC_${t}_${n}`;
  }
  /**
   * Open the checkout modal
   */
  open() {
    window.location.protocol !== "https:" && window.location.hostname !== "localhost" && console.warn("Novac Inline: HTTPS is recommended for production environments"), this.modalRoot = document.createElement("div"), this.modalRoot.id = "novac-inline-modal", document.body.appendChild(this.modalRoot), this.root = wc(this.modalRoot), this.root.render(
      /* @__PURE__ */ v.jsx(
        fm,
        {
          config: this.config,
          onClose: this.close.bind(this)
        }
      )
    ), document.body.style.overflow = "hidden";
  }
  /**
   * Close the checkout modal
   */
  close() {
    this.root && this.root.unmount(), this.modalRoot && this.modalRoot.parentNode && this.modalRoot.parentNode.removeChild(this.modalRoot), document.body.style.overflow = "", this.config && this.config.onClose && this.config.onClose();
  }
}
typeof module < "u" && module.exports && (module.exports = jc);
typeof window < "u" && (window.Novac = jc);
export {
  jc as default
};
