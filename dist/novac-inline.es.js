var sl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Km(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Wm = { exports: {} }, Zo = {}, Hm = { exports: {} }, ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ql = Symbol.for("react.element"), rE = Symbol.for("react.portal"), iE = Symbol.for("react.fragment"), lE = Symbol.for("react.strict_mode"), uE = Symbol.for("react.profiler"), oE = Symbol.for("react.provider"), sE = Symbol.for("react.context"), aE = Symbol.for("react.forward_ref"), cE = Symbol.for("react.suspense"), fE = Symbol.for("react.memo"), dE = Symbol.for("react.lazy"), $h = Symbol.iterator;
function pE(e) {
  return e === null || typeof e != "object" ? null : (e = $h && e[$h] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Vm = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Gm = Object.assign, Qm = {};
function Mi(e, n, r) {
  this.props = e, this.context = n, this.refs = Qm, this.updater = r || Vm;
}
Mi.prototype.isReactComponent = {};
Mi.prototype.setState = function(e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, n, "setState");
};
Mi.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ym() {
}
Ym.prototype = Mi.prototype;
function tf(e, n, r) {
  this.props = e, this.context = n, this.refs = Qm, this.updater = r || Vm;
}
var rf = tf.prototype = new Ym();
rf.constructor = tf;
Gm(rf, Mi.prototype);
rf.isPureReactComponent = !0;
var Ah = Array.isArray, Xm = Object.prototype.hasOwnProperty, lf = { current: null }, Zm = { key: !0, ref: !0, __self: !0, __source: !0 };
function qm(e, n, r) {
  var l, o = {}, s = null, c = null;
  if (n != null) for (l in n.ref !== void 0 && (c = n.ref), n.key !== void 0 && (s = "" + n.key), n) Xm.call(n, l) && !Zm.hasOwnProperty(l) && (o[l] = n[l]);
  var d = arguments.length - 2;
  if (d === 1) o.children = r;
  else if (1 < d) {
    for (var p = Array(d), y = 0; y < d; y++) p[y] = arguments[y + 2];
    o.children = p;
  }
  if (e && e.defaultProps) for (l in d = e.defaultProps, d) o[l] === void 0 && (o[l] = d[l]);
  return { $$typeof: Ql, type: e, key: s, ref: c, props: o, _owner: lf.current };
}
function hE(e, n) {
  return { $$typeof: Ql, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
}
function uf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ql;
}
function mE(e) {
  var n = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(r) {
    return n[r];
  });
}
var Oh = /\/+/g;
function Da(e, n) {
  return typeof e == "object" && e !== null && e.key != null ? mE("" + e.key) : n.toString(36);
}
function co(e, n, r, l, o) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var c = !1;
  if (e === null) c = !0;
  else switch (s) {
    case "string":
    case "number":
      c = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Ql:
        case rE:
          c = !0;
      }
  }
  if (c) return c = e, o = o(c), e = l === "" ? "." + Da(c, 0) : l, Ah(o) ? (r = "", e != null && (r = e.replace(Oh, "$&/") + "/"), co(o, n, r, "", function(y) {
    return y;
  })) : o != null && (uf(o) && (o = hE(o, r + (!o.key || c && c.key === o.key ? "" : ("" + o.key).replace(Oh, "$&/") + "/") + e)), n.push(o)), 1;
  if (c = 0, l = l === "" ? "." : l + ":", Ah(e)) for (var d = 0; d < e.length; d++) {
    s = e[d];
    var p = l + Da(s, d);
    c += co(s, n, r, p, o);
  }
  else if (p = pE(e), typeof p == "function") for (e = p.call(e), d = 0; !(s = e.next()).done; ) s = s.value, p = l + Da(s, d++), c += co(s, n, r, p, o);
  else if (s === "object") throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  return c;
}
function Hu(e, n, r) {
  if (e == null) return e;
  var l = [], o = 0;
  return co(e, l, "", "", function(s) {
    return n.call(r, s, o++);
  }), l;
}
function vE(e) {
  if (e._status === -1) {
    var n = e._result;
    n = n(), n.then(function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r);
    }, function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r);
    }), e._status === -1 && (e._status = 0, e._result = n);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var pn = { current: null }, fo = { transition: null }, gE = { ReactCurrentDispatcher: pn, ReactCurrentBatchConfig: fo, ReactCurrentOwner: lf };
function Jm() {
  throw Error("act(...) is not supported in production builds of React.");
}
ce.Children = { map: Hu, forEach: function(e, n, r) {
  Hu(e, function() {
    n.apply(this, arguments);
  }, r);
}, count: function(e) {
  var n = 0;
  return Hu(e, function() {
    n++;
  }), n;
}, toArray: function(e) {
  return Hu(e, function(n) {
    return n;
  }) || [];
}, only: function(e) {
  if (!uf(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ce.Component = Mi;
ce.Fragment = iE;
ce.Profiler = uE;
ce.PureComponent = tf;
ce.StrictMode = lE;
ce.Suspense = cE;
ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gE;
ce.act = Jm;
ce.cloneElement = function(e, n, r) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var l = Gm({}, e.props), o = e.key, s = e.ref, c = e._owner;
  if (n != null) {
    if (n.ref !== void 0 && (s = n.ref, c = lf.current), n.key !== void 0 && (o = "" + n.key), e.type && e.type.defaultProps) var d = e.type.defaultProps;
    for (p in n) Xm.call(n, p) && !Zm.hasOwnProperty(p) && (l[p] = n[p] === void 0 && d !== void 0 ? d[p] : n[p]);
  }
  var p = arguments.length - 2;
  if (p === 1) l.children = r;
  else if (1 < p) {
    d = Array(p);
    for (var y = 0; y < p; y++) d[y] = arguments[y + 2];
    l.children = d;
  }
  return { $$typeof: Ql, type: e.type, key: o, ref: s, props: l, _owner: c };
};
ce.createContext = function(e) {
  return e = { $$typeof: sE, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: oE, _context: e }, e.Consumer = e;
};
ce.createElement = qm;
ce.createFactory = function(e) {
  var n = qm.bind(null, e);
  return n.type = e, n;
};
ce.createRef = function() {
  return { current: null };
};
ce.forwardRef = function(e) {
  return { $$typeof: aE, render: e };
};
ce.isValidElement = uf;
ce.lazy = function(e) {
  return { $$typeof: dE, _payload: { _status: -1, _result: e }, _init: vE };
};
ce.memo = function(e, n) {
  return { $$typeof: fE, type: e, compare: n === void 0 ? null : n };
};
ce.startTransition = function(e) {
  var n = fo.transition;
  fo.transition = {};
  try {
    e();
  } finally {
    fo.transition = n;
  }
};
ce.unstable_act = Jm;
ce.useCallback = function(e, n) {
  return pn.current.useCallback(e, n);
};
ce.useContext = function(e) {
  return pn.current.useContext(e);
};
ce.useDebugValue = function() {
};
ce.useDeferredValue = function(e) {
  return pn.current.useDeferredValue(e);
};
ce.useEffect = function(e, n) {
  return pn.current.useEffect(e, n);
};
ce.useId = function() {
  return pn.current.useId();
};
ce.useImperativeHandle = function(e, n, r) {
  return pn.current.useImperativeHandle(e, n, r);
};
ce.useInsertionEffect = function(e, n) {
  return pn.current.useInsertionEffect(e, n);
};
ce.useLayoutEffect = function(e, n) {
  return pn.current.useLayoutEffect(e, n);
};
ce.useMemo = function(e, n) {
  return pn.current.useMemo(e, n);
};
ce.useReducer = function(e, n, r) {
  return pn.current.useReducer(e, n, r);
};
ce.useRef = function(e) {
  return pn.current.useRef(e);
};
ce.useState = function(e) {
  return pn.current.useState(e);
};
ce.useSyncExternalStore = function(e, n, r) {
  return pn.current.useSyncExternalStore(e, n, r);
};
ce.useTransition = function() {
  return pn.current.useTransition();
};
ce.version = "18.3.1";
Hm.exports = ce;
var U = Hm.exports;
const of = /* @__PURE__ */ Km(U);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yE = U, _E = Symbol.for("react.element"), wE = Symbol.for("react.fragment"), xE = Object.prototype.hasOwnProperty, SE = yE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, EE = { key: !0, ref: !0, __self: !0, __source: !0 };
function bm(e, n, r) {
  var l, o = {}, s = null, c = null;
  r !== void 0 && (s = "" + r), n.key !== void 0 && (s = "" + n.key), n.ref !== void 0 && (c = n.ref);
  for (l in n) xE.call(n, l) && !EE.hasOwnProperty(l) && (o[l] = n[l]);
  if (e && e.defaultProps) for (l in n = e.defaultProps, n) o[l] === void 0 && (o[l] = n[l]);
  return { $$typeof: _E, type: e, key: s, ref: c, props: o, _owner: SE.current };
}
Zo.Fragment = wE;
Zo.jsx = bm;
Zo.jsxs = bm;
Wm.exports = Zo;
var T = Wm.exports, ev = { exports: {} }, Dn = {}, nv = { exports: {} }, tv = {};
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
  function n(B, ee) {
    var te = B.length;
    B.push(ee);
    e: for (; 0 < te; ) {
      var ve = te - 1 >>> 1, Be = B[ve];
      if (0 < o(Be, ee)) B[ve] = ee, B[te] = Be, te = ve;
      else break e;
    }
  }
  function r(B) {
    return B.length === 0 ? null : B[0];
  }
  function l(B) {
    if (B.length === 0) return null;
    var ee = B[0], te = B.pop();
    if (te !== ee) {
      B[0] = te;
      e: for (var ve = 0, Be = B.length, Yr = Be >>> 1; ve < Yr; ) {
        var Et = 2 * (ve + 1) - 1, pt = B[Et], Mn = Et + 1, Xr = B[Mn];
        if (0 > o(pt, te)) Mn < Be && 0 > o(Xr, pt) ? (B[ve] = Xr, B[Mn] = te, ve = Mn) : (B[ve] = pt, B[Et] = te, ve = Et);
        else if (Mn < Be && 0 > o(Xr, te)) B[ve] = Xr, B[Mn] = te, ve = Mn;
        else break e;
      }
    }
    return ee;
  }
  function o(B, ee) {
    var te = B.sortIndex - ee.sortIndex;
    return te !== 0 ? te : B.id - ee.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function() {
      return s.now();
    };
  } else {
    var c = Date, d = c.now();
    e.unstable_now = function() {
      return c.now() - d;
    };
  }
  var p = [], y = [], k = 1, S = null, C = 3, R = !1, L = !1, A = !1, V = typeof setTimeout == "function" ? setTimeout : null, _ = typeof clearTimeout == "function" ? clearTimeout : null, v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(B) {
    for (var ee = r(y); ee !== null; ) {
      if (ee.callback === null) l(y);
      else if (ee.startTime <= B) l(y), ee.sortIndex = ee.expirationTime, n(p, ee);
      else break;
      ee = r(y);
    }
  }
  function I(B) {
    if (A = !1, w(B), !L) if (r(p) !== null) L = !0, dt(F);
    else {
      var ee = r(y);
      ee !== null && X(I, ee.startTime - B);
    }
  }
  function F(B, ee) {
    L = !1, A && (A = !1, _(G), G = -1), R = !0;
    var te = C;
    try {
      for (w(ee), S = r(p); S !== null && (!(S.expirationTime > ee) || B && !xe()); ) {
        var ve = S.callback;
        if (typeof ve == "function") {
          S.callback = null, C = S.priorityLevel;
          var Be = ve(S.expirationTime <= ee);
          ee = e.unstable_now(), typeof Be == "function" ? S.callback = Be : S === r(p) && l(p), w(ee);
        } else l(p);
        S = r(p);
      }
      if (S !== null) var Yr = !0;
      else {
        var Et = r(y);
        Et !== null && X(I, Et.startTime - ee), Yr = !1;
      }
      return Yr;
    } finally {
      S = null, C = te, R = !1;
    }
  }
  var z = !1, W = null, G = -1, se = 5, K = -1;
  function xe() {
    return !(e.unstable_now() - K < se);
  }
  function Oe() {
    if (W !== null) {
      var B = e.unstable_now();
      K = B;
      var ee = !0;
      try {
        ee = W(!0, B);
      } finally {
        ee ? kn() : (z = !1, W = null);
      }
    } else z = !1;
  }
  var kn;
  if (typeof v == "function") kn = function() {
    v(Oe);
  };
  else if (typeof MessageChannel < "u") {
    var le = new MessageChannel(), de = le.port2;
    le.port1.onmessage = Oe, kn = function() {
      de.postMessage(null);
    };
  } else kn = function() {
    V(Oe, 0);
  };
  function dt(B) {
    W = B, z || (z = !0, kn());
  }
  function X(B, ee) {
    G = V(function() {
      B(e.unstable_now());
    }, ee);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(B) {
    B.callback = null;
  }, e.unstable_continueExecution = function() {
    L || R || (L = !0, dt(F));
  }, e.unstable_forceFrameRate = function(B) {
    0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : se = 0 < B ? Math.floor(1e3 / B) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return C;
  }, e.unstable_getFirstCallbackNode = function() {
    return r(p);
  }, e.unstable_next = function(B) {
    switch (C) {
      case 1:
      case 2:
      case 3:
        var ee = 3;
        break;
      default:
        ee = C;
    }
    var te = C;
    C = ee;
    try {
      return B();
    } finally {
      C = te;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(B, ee) {
    switch (B) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        B = 3;
    }
    var te = C;
    C = B;
    try {
      return ee();
    } finally {
      C = te;
    }
  }, e.unstable_scheduleCallback = function(B, ee, te) {
    var ve = e.unstable_now();
    switch (typeof te == "object" && te !== null ? (te = te.delay, te = typeof te == "number" && 0 < te ? ve + te : ve) : te = ve, B) {
      case 1:
        var Be = -1;
        break;
      case 2:
        Be = 250;
        break;
      case 5:
        Be = 1073741823;
        break;
      case 4:
        Be = 1e4;
        break;
      default:
        Be = 5e3;
    }
    return Be = te + Be, B = { id: k++, callback: ee, priorityLevel: B, startTime: te, expirationTime: Be, sortIndex: -1 }, te > ve ? (B.sortIndex = te, n(y, B), r(p) === null && B === r(y) && (A ? (_(G), G = -1) : A = !0, X(I, te - ve))) : (B.sortIndex = Be, n(p, B), L || R || (L = !0, dt(F))), B;
  }, e.unstable_shouldYield = xe, e.unstable_wrapCallback = function(B) {
    var ee = C;
    return function() {
      var te = C;
      C = ee;
      try {
        return B.apply(this, arguments);
      } finally {
        C = te;
      }
    };
  };
})(tv);
nv.exports = tv;
var kE = nv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var CE = U, On = kE;
function j(e) {
  for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) n += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var rv = /* @__PURE__ */ new Set(), Rl = {};
function Vr(e, n) {
  Ri(e, n), Ri(e + "Capture", n);
}
function Ri(e, n) {
  for (Rl[e] = n, e = 0; e < n.length; e++) rv.add(n[e]);
}
var Ut = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), oc = Object.prototype.hasOwnProperty, NE = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Dh = {}, zh = {};
function PE(e) {
  return oc.call(zh, e) ? !0 : oc.call(Dh, e) ? !1 : NE.test(e) ? zh[e] = !0 : (Dh[e] = !0, !1);
}
function TE(e, n, r, l) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return l ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function LE(e, n, r, l) {
  if (n === null || typeof n > "u" || TE(e, n, r, l)) return !0;
  if (l) return !1;
  if (r !== null) switch (r.type) {
    case 3:
      return !n;
    case 4:
      return n === !1;
    case 5:
      return isNaN(n);
    case 6:
      return isNaN(n) || 1 > n;
  }
  return !1;
}
function hn(e, n, r, l, o, s, c) {
  this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = l, this.attributeNamespace = o, this.mustUseProperty = r, this.propertyName = e, this.type = n, this.sanitizeURL = s, this.removeEmptyString = c;
}
var en = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  en[e] = new hn(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var n = e[0];
  en[n] = new hn(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  en[e] = new hn(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  en[e] = new hn(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  en[e] = new hn(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  en[e] = new hn(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  en[e] = new hn(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  en[e] = new hn(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  en[e] = new hn(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var sf = /[\-:]([a-z])/g;
function af(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var n = e.replace(
    sf,
    af
  );
  en[n] = new hn(n, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var n = e.replace(sf, af);
  en[n] = new hn(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var n = e.replace(sf, af);
  en[n] = new hn(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  en[e] = new hn(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
en.xlinkHref = new hn("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  en[e] = new hn(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function cf(e, n, r, l) {
  var o = en.hasOwnProperty(n) ? en[n] : null;
  (o !== null ? o.type !== 0 : l || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (LE(n, r, o, l) && (r = null), l || o === null ? PE(n) && (r === null ? e.removeAttribute(n) : e.setAttribute(n, "" + r)) : o.mustUseProperty ? e[o.propertyName] = r === null ? o.type === 3 ? !1 : "" : r : (n = o.attributeName, l = o.attributeNamespace, r === null ? e.removeAttribute(n) : (o = o.type, r = o === 3 || o === 4 && r === !0 ? "" : "" + r, l ? e.setAttributeNS(l, n, r) : e.setAttribute(n, r))));
}
var Vt = CE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Vu = Symbol.for("react.element"), di = Symbol.for("react.portal"), pi = Symbol.for("react.fragment"), ff = Symbol.for("react.strict_mode"), sc = Symbol.for("react.profiler"), iv = Symbol.for("react.provider"), lv = Symbol.for("react.context"), df = Symbol.for("react.forward_ref"), ac = Symbol.for("react.suspense"), cc = Symbol.for("react.suspense_list"), pf = Symbol.for("react.memo"), tr = Symbol.for("react.lazy"), uv = Symbol.for("react.offscreen"), Mh = Symbol.iterator;
function al(e) {
  return e === null || typeof e != "object" ? null : (e = Mh && e[Mh] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ae = Object.assign, za;
function gl(e) {
  if (za === void 0) try {
    throw Error();
  } catch (r) {
    var n = r.stack.trim().match(/\n( *(at )?)/);
    za = n && n[1] || "";
  }
  return `
` + za + e;
}
var Ma = !1;
function Fa(e, n) {
  if (!e || Ma) return "";
  Ma = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n) if (n = function() {
      throw Error();
    }, Object.defineProperty(n.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(n, []);
      } catch (y) {
        var l = y;
      }
      Reflect.construct(e, [], n);
    } else {
      try {
        n.call();
      } catch (y) {
        l = y;
      }
      e.call(n.prototype);
    }
    else {
      try {
        throw Error();
      } catch (y) {
        l = y;
      }
      e();
    }
  } catch (y) {
    if (y && l && typeof y.stack == "string") {
      for (var o = y.stack.split(`
`), s = l.stack.split(`
`), c = o.length - 1, d = s.length - 1; 1 <= c && 0 <= d && o[c] !== s[d]; ) d--;
      for (; 1 <= c && 0 <= d; c--, d--) if (o[c] !== s[d]) {
        if (c !== 1 || d !== 1)
          do
            if (c--, d--, 0 > d || o[c] !== s[d]) {
              var p = `
` + o[c].replace(" at new ", " at ");
              return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), p;
            }
          while (1 <= c && 0 <= d);
        break;
      }
    }
  } finally {
    Ma = !1, Error.prepareStackTrace = r;
  }
  return (e = e ? e.displayName || e.name : "") ? gl(e) : "";
}
function RE(e) {
  switch (e.tag) {
    case 5:
      return gl(e.type);
    case 16:
      return gl("Lazy");
    case 13:
      return gl("Suspense");
    case 19:
      return gl("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Fa(e.type, !1), e;
    case 11:
      return e = Fa(e.type.render, !1), e;
    case 1:
      return e = Fa(e.type, !0), e;
    default:
      return "";
  }
}
function fc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case pi:
      return "Fragment";
    case di:
      return "Portal";
    case sc:
      return "Profiler";
    case ff:
      return "StrictMode";
    case ac:
      return "Suspense";
    case cc:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case lv:
      return (e.displayName || "Context") + ".Consumer";
    case iv:
      return (e._context.displayName || "Context") + ".Provider";
    case df:
      var n = e.render;
      return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case pf:
      return n = e.displayName || null, n !== null ? n : fc(e.type) || "Memo";
    case tr:
      n = e._payload, e = e._init;
      try {
        return fc(e(n));
      } catch {
      }
  }
  return null;
}
function IE(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return fc(n);
    case 8:
      return n === ff ? "StrictMode" : "Mode";
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
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }
  return null;
}
function yr(e) {
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
function ov(e) {
  var n = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
}
function $E(e) {
  var n = ov(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), l = "" + e[n];
  if (!e.hasOwnProperty(n) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
    var o = r.get, s = r.set;
    return Object.defineProperty(e, n, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(c) {
      l = "" + c, s.call(this, c);
    } }), Object.defineProperty(e, n, { enumerable: r.enumerable }), { getValue: function() {
      return l;
    }, setValue: function(c) {
      l = "" + c;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[n];
    } };
  }
}
function Gu(e) {
  e._valueTracker || (e._valueTracker = $E(e));
}
function sv(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var r = n.getValue(), l = "";
  return e && (l = ov(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== r ? (n.setValue(e), !0) : !1;
}
function ko(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function dc(e, n) {
  var r = n.checked;
  return Ae({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
}
function Fh(e, n) {
  var r = n.defaultValue == null ? "" : n.defaultValue, l = n.checked != null ? n.checked : n.defaultChecked;
  r = yr(n.value != null ? n.value : r), e._wrapperState = { initialChecked: l, initialValue: r, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
}
function av(e, n) {
  n = n.checked, n != null && cf(e, "checked", n, !1);
}
function pc(e, n) {
  av(e, n);
  var r = yr(n.value), l = n.type;
  if (r != null) l === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
  else if (l === "submit" || l === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value") ? hc(e, n.type, r) : n.hasOwnProperty("defaultValue") && hc(e, n.type, yr(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
}
function jh(e, n, r) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var l = n.type;
    if (!(l !== "submit" && l !== "reset" || n.value !== void 0 && n.value !== null)) return;
    n = "" + e._wrapperState.initialValue, r || n === e.value || (e.value = n), e.defaultValue = n;
  }
  r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
}
function hc(e, n, r) {
  (n !== "number" || ko(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var yl = Array.isArray;
function ki(e, n, r, l) {
  if (e = e.options, n) {
    n = {};
    for (var o = 0; o < r.length; o++) n["$" + r[o]] = !0;
    for (r = 0; r < e.length; r++) o = n.hasOwnProperty("$" + e[r].value), e[r].selected !== o && (e[r].selected = o), o && l && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + yr(r), n = null, o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        e[o].selected = !0, l && (e[o].defaultSelected = !0);
        return;
      }
      n !== null || e[o].disabled || (n = e[o]);
    }
    n !== null && (n.selected = !0);
  }
}
function mc(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(j(91));
  return Ae({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Uh(e, n) {
  var r = n.value;
  if (r == null) {
    if (r = n.children, n = n.defaultValue, r != null) {
      if (n != null) throw Error(j(92));
      if (yl(r)) {
        if (1 < r.length) throw Error(j(93));
        r = r[0];
      }
      n = r;
    }
    n == null && (n = ""), r = n;
  }
  e._wrapperState = { initialValue: yr(r) };
}
function cv(e, n) {
  var r = yr(n.value), l = yr(n.defaultValue);
  r != null && (r = "" + r, r !== e.value && (e.value = r), n.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), l != null && (e.defaultValue = "" + l);
}
function Bh(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function fv(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function vc(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? fv(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Qu, dv = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, r, l, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(n, r, l, o);
    });
  } : e;
}(function(e, n) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
  else {
    for (Qu = Qu || document.createElement("div"), Qu.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = Qu.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; n.firstChild; ) e.appendChild(n.firstChild);
  }
});
function Il(e, n) {
  if (n) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var xl = {
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
}, AE = ["Webkit", "ms", "Moz", "O"];
Object.keys(xl).forEach(function(e) {
  AE.forEach(function(n) {
    n = n + e.charAt(0).toUpperCase() + e.substring(1), xl[n] = xl[e];
  });
});
function pv(e, n, r) {
  return n == null || typeof n == "boolean" || n === "" ? "" : r || typeof n != "number" || n === 0 || xl.hasOwnProperty(e) && xl[e] ? ("" + n).trim() : n + "px";
}
function hv(e, n) {
  e = e.style;
  for (var r in n) if (n.hasOwnProperty(r)) {
    var l = r.indexOf("--") === 0, o = pv(r, n[r], l);
    r === "float" && (r = "cssFloat"), l ? e.setProperty(r, o) : e[r] = o;
  }
}
var OE = Ae({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function gc(e, n) {
  if (n) {
    if (OE[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(j(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(j(60));
      if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(j(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(j(62));
  }
}
function yc(e, n) {
  if (e.indexOf("-") === -1) return typeof n.is == "string";
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
var _c = null;
function hf(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var wc = null, Ci = null, Ni = null;
function Kh(e) {
  if (e = Zl(e)) {
    if (typeof wc != "function") throw Error(j(280));
    var n = e.stateNode;
    n && (n = ns(n), wc(e.stateNode, e.type, n));
  }
}
function mv(e) {
  Ci ? Ni ? Ni.push(e) : Ni = [e] : Ci = e;
}
function vv() {
  if (Ci) {
    var e = Ci, n = Ni;
    if (Ni = Ci = null, Kh(e), n) for (e = 0; e < n.length; e++) Kh(n[e]);
  }
}
function gv(e, n) {
  return e(n);
}
function yv() {
}
var ja = !1;
function _v(e, n, r) {
  if (ja) return e(n, r);
  ja = !0;
  try {
    return gv(e, n, r);
  } finally {
    ja = !1, (Ci !== null || Ni !== null) && (yv(), vv());
  }
}
function $l(e, n) {
  var r = e.stateNode;
  if (r === null) return null;
  var l = ns(r);
  if (l === null) return null;
  r = l[n];
  e: switch (n) {
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
      (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(j(231, n, typeof r));
  return r;
}
var xc = !1;
if (Ut) try {
  var cl = {};
  Object.defineProperty(cl, "passive", { get: function() {
    xc = !0;
  } }), window.addEventListener("test", cl, cl), window.removeEventListener("test", cl, cl);
} catch {
  xc = !1;
}
function DE(e, n, r, l, o, s, c, d, p) {
  var y = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(r, y);
  } catch (k) {
    this.onError(k);
  }
}
var Sl = !1, Co = null, No = !1, Sc = null, zE = { onError: function(e) {
  Sl = !0, Co = e;
} };
function ME(e, n, r, l, o, s, c, d, p) {
  Sl = !1, Co = null, DE.apply(zE, arguments);
}
function FE(e, n, r, l, o, s, c, d, p) {
  if (ME.apply(this, arguments), Sl) {
    if (Sl) {
      var y = Co;
      Sl = !1, Co = null;
    } else throw Error(j(198));
    No || (No = !0, Sc = y);
  }
}
function Gr(e) {
  var n = e, r = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do
      n = e, n.flags & 4098 && (r = n.return), e = n.return;
    while (e);
  }
  return n.tag === 3 ? r : null;
}
function wv(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
  }
  return null;
}
function Wh(e) {
  if (Gr(e) !== e) throw Error(j(188));
}
function jE(e) {
  var n = e.alternate;
  if (!n) {
    if (n = Gr(e), n === null) throw Error(j(188));
    return n !== e ? null : e;
  }
  for (var r = e, l = n; ; ) {
    var o = r.return;
    if (o === null) break;
    var s = o.alternate;
    if (s === null) {
      if (l = o.return, l !== null) {
        r = l;
        continue;
      }
      break;
    }
    if (o.child === s.child) {
      for (s = o.child; s; ) {
        if (s === r) return Wh(o), e;
        if (s === l) return Wh(o), n;
        s = s.sibling;
      }
      throw Error(j(188));
    }
    if (r.return !== l.return) r = o, l = s;
    else {
      for (var c = !1, d = o.child; d; ) {
        if (d === r) {
          c = !0, r = o, l = s;
          break;
        }
        if (d === l) {
          c = !0, l = o, r = s;
          break;
        }
        d = d.sibling;
      }
      if (!c) {
        for (d = s.child; d; ) {
          if (d === r) {
            c = !0, r = s, l = o;
            break;
          }
          if (d === l) {
            c = !0, l = s, r = o;
            break;
          }
          d = d.sibling;
        }
        if (!c) throw Error(j(189));
      }
    }
    if (r.alternate !== l) throw Error(j(190));
  }
  if (r.tag !== 3) throw Error(j(188));
  return r.stateNode.current === r ? e : n;
}
function xv(e) {
  return e = jE(e), e !== null ? Sv(e) : null;
}
function Sv(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Sv(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Ev = On.unstable_scheduleCallback, Hh = On.unstable_cancelCallback, UE = On.unstable_shouldYield, BE = On.unstable_requestPaint, je = On.unstable_now, KE = On.unstable_getCurrentPriorityLevel, mf = On.unstable_ImmediatePriority, kv = On.unstable_UserBlockingPriority, Po = On.unstable_NormalPriority, WE = On.unstable_LowPriority, Cv = On.unstable_IdlePriority, qo = null, xt = null;
function HE(e) {
  if (xt && typeof xt.onCommitFiberRoot == "function") try {
    xt.onCommitFiberRoot(qo, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var st = Math.clz32 ? Math.clz32 : QE, VE = Math.log, GE = Math.LN2;
function QE(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (VE(e) / GE | 0) | 0;
}
var Yu = 64, Xu = 4194304;
function _l(e) {
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
function To(e, n) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var l = 0, o = e.suspendedLanes, s = e.pingedLanes, c = r & 268435455;
  if (c !== 0) {
    var d = c & ~o;
    d !== 0 ? l = _l(d) : (s &= c, s !== 0 && (l = _l(s)));
  } else c = r & ~o, c !== 0 ? l = _l(c) : s !== 0 && (l = _l(s));
  if (l === 0) return 0;
  if (n !== 0 && n !== l && !(n & o) && (o = l & -l, s = n & -n, o >= s || o === 16 && (s & 4194240) !== 0)) return n;
  if (l & 4 && (l |= r & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= l; 0 < n; ) r = 31 - st(n), o = 1 << r, l |= e[r], n &= ~o;
  return l;
}
function YE(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
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
      return n + 5e3;
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
function XE(e, n) {
  for (var r = e.suspendedLanes, l = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var c = 31 - st(s), d = 1 << c, p = o[c];
    p === -1 ? (!(d & r) || d & l) && (o[c] = YE(d, n)) : p <= n && (e.expiredLanes |= d), s &= ~d;
  }
}
function Ec(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Nv() {
  var e = Yu;
  return Yu <<= 1, !(Yu & 4194240) && (Yu = 64), e;
}
function Ua(e) {
  for (var n = [], r = 0; 31 > r; r++) n.push(e);
  return n;
}
function Yl(e, n, r) {
  e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - st(n), e[n] = r;
}
function ZE(e, n) {
  var r = e.pendingLanes & ~n;
  e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
  var l = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var o = 31 - st(r), s = 1 << o;
    n[o] = 0, l[o] = -1, e[o] = -1, r &= ~s;
  }
}
function vf(e, n) {
  var r = e.entangledLanes |= n;
  for (e = e.entanglements; r; ) {
    var l = 31 - st(r), o = 1 << l;
    o & n | e[l] & n && (e[l] |= n), r &= ~o;
  }
}
var we = 0;
function Pv(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Tv, gf, Lv, Rv, Iv, kc = !1, Zu = [], ar = null, cr = null, fr = null, Al = /* @__PURE__ */ new Map(), Ol = /* @__PURE__ */ new Map(), ir = [], qE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Vh(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      ar = null;
      break;
    case "dragenter":
    case "dragleave":
      cr = null;
      break;
    case "mouseover":
    case "mouseout":
      fr = null;
      break;
    case "pointerover":
    case "pointerout":
      Al.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ol.delete(n.pointerId);
  }
}
function fl(e, n, r, l, o, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: n, domEventName: r, eventSystemFlags: l, nativeEvent: s, targetContainers: [o] }, n !== null && (n = Zl(n), n !== null && gf(n)), e) : (e.eventSystemFlags |= l, n = e.targetContainers, o !== null && n.indexOf(o) === -1 && n.push(o), e);
}
function JE(e, n, r, l, o) {
  switch (n) {
    case "focusin":
      return ar = fl(ar, e, n, r, l, o), !0;
    case "dragenter":
      return cr = fl(cr, e, n, r, l, o), !0;
    case "mouseover":
      return fr = fl(fr, e, n, r, l, o), !0;
    case "pointerover":
      var s = o.pointerId;
      return Al.set(s, fl(Al.get(s) || null, e, n, r, l, o)), !0;
    case "gotpointercapture":
      return s = o.pointerId, Ol.set(s, fl(Ol.get(s) || null, e, n, r, l, o)), !0;
  }
  return !1;
}
function $v(e) {
  var n = Dr(e.target);
  if (n !== null) {
    var r = Gr(n);
    if (r !== null) {
      if (n = r.tag, n === 13) {
        if (n = wv(r), n !== null) {
          e.blockedOn = n, Iv(e.priority, function() {
            Lv(r);
          });
          return;
        }
      } else if (n === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function po(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var r = Cc(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var l = new r.constructor(r.type, r);
      _c = l, r.target.dispatchEvent(l), _c = null;
    } else return n = Zl(r), n !== null && gf(n), e.blockedOn = r, !1;
    n.shift();
  }
  return !0;
}
function Gh(e, n, r) {
  po(e) && r.delete(n);
}
function bE() {
  kc = !1, ar !== null && po(ar) && (ar = null), cr !== null && po(cr) && (cr = null), fr !== null && po(fr) && (fr = null), Al.forEach(Gh), Ol.forEach(Gh);
}
function dl(e, n) {
  e.blockedOn === n && (e.blockedOn = null, kc || (kc = !0, On.unstable_scheduleCallback(On.unstable_NormalPriority, bE)));
}
function Dl(e) {
  function n(o) {
    return dl(o, e);
  }
  if (0 < Zu.length) {
    dl(Zu[0], e);
    for (var r = 1; r < Zu.length; r++) {
      var l = Zu[r];
      l.blockedOn === e && (l.blockedOn = null);
    }
  }
  for (ar !== null && dl(ar, e), cr !== null && dl(cr, e), fr !== null && dl(fr, e), Al.forEach(n), Ol.forEach(n), r = 0; r < ir.length; r++) l = ir[r], l.blockedOn === e && (l.blockedOn = null);
  for (; 0 < ir.length && (r = ir[0], r.blockedOn === null); ) $v(r), r.blockedOn === null && ir.shift();
}
var Pi = Vt.ReactCurrentBatchConfig, Lo = !0;
function ek(e, n, r, l) {
  var o = we, s = Pi.transition;
  Pi.transition = null;
  try {
    we = 1, yf(e, n, r, l);
  } finally {
    we = o, Pi.transition = s;
  }
}
function nk(e, n, r, l) {
  var o = we, s = Pi.transition;
  Pi.transition = null;
  try {
    we = 4, yf(e, n, r, l);
  } finally {
    we = o, Pi.transition = s;
  }
}
function yf(e, n, r, l) {
  if (Lo) {
    var o = Cc(e, n, r, l);
    if (o === null) Za(e, n, l, Ro, r), Vh(e, l);
    else if (JE(o, e, n, r, l)) l.stopPropagation();
    else if (Vh(e, l), n & 4 && -1 < qE.indexOf(e)) {
      for (; o !== null; ) {
        var s = Zl(o);
        if (s !== null && Tv(s), s = Cc(e, n, r, l), s === null && Za(e, n, l, Ro, r), s === o) break;
        o = s;
      }
      o !== null && l.stopPropagation();
    } else Za(e, n, l, null, r);
  }
}
var Ro = null;
function Cc(e, n, r, l) {
  if (Ro = null, e = hf(l), e = Dr(e), e !== null) if (n = Gr(e), n === null) e = null;
  else if (r = n.tag, r === 13) {
    if (e = wv(n), e !== null) return e;
    e = null;
  } else if (r === 3) {
    if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
    e = null;
  } else n !== e && (e = null);
  return Ro = e, null;
}
function Av(e) {
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
      switch (KE()) {
        case mf:
          return 1;
        case kv:
          return 4;
        case Po:
        case WE:
          return 16;
        case Cv:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var or = null, _f = null, ho = null;
function Ov() {
  if (ho) return ho;
  var e, n = _f, r = n.length, l, o = "value" in or ? or.value : or.textContent, s = o.length;
  for (e = 0; e < r && n[e] === o[e]; e++) ;
  var c = r - e;
  for (l = 1; l <= c && n[r - l] === o[s - l]; l++) ;
  return ho = o.slice(e, 1 < l ? 1 - l : void 0);
}
function mo(e) {
  var n = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function qu() {
  return !0;
}
function Qh() {
  return !1;
}
function zn(e) {
  function n(r, l, o, s, c) {
    this._reactName = r, this._targetInst = o, this.type = l, this.nativeEvent = s, this.target = c, this.currentTarget = null;
    for (var d in e) e.hasOwnProperty(d) && (r = e[d], this[d] = r ? r(s) : s[d]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? qu : Qh, this.isPropagationStopped = Qh, this;
  }
  return Ae(n.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var r = this.nativeEvent;
    r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = qu);
  }, stopPropagation: function() {
    var r = this.nativeEvent;
    r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = qu);
  }, persist: function() {
  }, isPersistent: qu }), n;
}
var Fi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, wf = zn(Fi), Xl = Ae({}, Fi, { view: 0, detail: 0 }), tk = zn(Xl), Ba, Ka, pl, Jo = Ae({}, Xl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: xf, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== pl && (pl && e.type === "mousemove" ? (Ba = e.screenX - pl.screenX, Ka = e.screenY - pl.screenY) : Ka = Ba = 0, pl = e), Ba);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ka;
} }), Yh = zn(Jo), rk = Ae({}, Jo, { dataTransfer: 0 }), ik = zn(rk), lk = Ae({}, Xl, { relatedTarget: 0 }), Wa = zn(lk), uk = Ae({}, Fi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ok = zn(uk), sk = Ae({}, Fi, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), ak = zn(sk), ck = Ae({}, Fi, { data: 0 }), Xh = zn(ck), fk = {
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
}, dk = {
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
}, pk = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function hk(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = pk[e]) ? !!n[e] : !1;
}
function xf() {
  return hk;
}
var mk = Ae({}, Xl, { key: function(e) {
  if (e.key) {
    var n = fk[e.key] || e.key;
    if (n !== "Unidentified") return n;
  }
  return e.type === "keypress" ? (e = mo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? dk[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: xf, charCode: function(e) {
  return e.type === "keypress" ? mo(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? mo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), vk = zn(mk), gk = Ae({}, Jo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Zh = zn(gk), yk = Ae({}, Xl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: xf }), _k = zn(yk), wk = Ae({}, Fi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), xk = zn(wk), Sk = Ae({}, Jo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Ek = zn(Sk), kk = [9, 13, 27, 32], Sf = Ut && "CompositionEvent" in window, El = null;
Ut && "documentMode" in document && (El = document.documentMode);
var Ck = Ut && "TextEvent" in window && !El, Dv = Ut && (!Sf || El && 8 < El && 11 >= El), qh = " ", Jh = !1;
function zv(e, n) {
  switch (e) {
    case "keyup":
      return kk.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Mv(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var hi = !1;
function Nk(e, n) {
  switch (e) {
    case "compositionend":
      return Mv(n);
    case "keypress":
      return n.which !== 32 ? null : (Jh = !0, qh);
    case "textInput":
      return e = n.data, e === qh && Jh ? null : e;
    default:
      return null;
  }
}
function Pk(e, n) {
  if (hi) return e === "compositionend" || !Sf && zv(e, n) ? (e = Ov(), ho = _f = or = null, hi = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return Dv && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var Tk = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function bh(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!Tk[e.type] : n === "textarea";
}
function Fv(e, n, r, l) {
  mv(l), n = Io(n, "onChange"), 0 < n.length && (r = new wf("onChange", "change", null, r, l), e.push({ event: r, listeners: n }));
}
var kl = null, zl = null;
function Lk(e) {
  Xv(e, 0);
}
function bo(e) {
  var n = gi(e);
  if (sv(n)) return e;
}
function Rk(e, n) {
  if (e === "change") return n;
}
var jv = !1;
if (Ut) {
  var Ha;
  if (Ut) {
    var Va = "oninput" in document;
    if (!Va) {
      var em = document.createElement("div");
      em.setAttribute("oninput", "return;"), Va = typeof em.oninput == "function";
    }
    Ha = Va;
  } else Ha = !1;
  jv = Ha && (!document.documentMode || 9 < document.documentMode);
}
function nm() {
  kl && (kl.detachEvent("onpropertychange", Uv), zl = kl = null);
}
function Uv(e) {
  if (e.propertyName === "value" && bo(zl)) {
    var n = [];
    Fv(n, zl, e, hf(e)), _v(Lk, n);
  }
}
function Ik(e, n, r) {
  e === "focusin" ? (nm(), kl = n, zl = r, kl.attachEvent("onpropertychange", Uv)) : e === "focusout" && nm();
}
function $k(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return bo(zl);
}
function Ak(e, n) {
  if (e === "click") return bo(n);
}
function Ok(e, n) {
  if (e === "input" || e === "change") return bo(n);
}
function Dk(e, n) {
  return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
}
var ft = typeof Object.is == "function" ? Object.is : Dk;
function Ml(e, n) {
  if (ft(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
  var r = Object.keys(e), l = Object.keys(n);
  if (r.length !== l.length) return !1;
  for (l = 0; l < r.length; l++) {
    var o = r[l];
    if (!oc.call(n, o) || !ft(e[o], n[o])) return !1;
  }
  return !0;
}
function tm(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function rm(e, n) {
  var r = tm(e);
  e = 0;
  for (var l; r; ) {
    if (r.nodeType === 3) {
      if (l = e + r.textContent.length, e <= n && l >= n) return { node: r, offset: n - e };
      e = l;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = tm(r);
  }
}
function Bv(e, n) {
  return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Bv(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
}
function Kv() {
  for (var e = window, n = ko(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof n.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = n.contentWindow;
    else break;
    n = ko(e.document);
  }
  return n;
}
function Ef(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
}
function zk(e) {
  var n = Kv(), r = e.focusedElem, l = e.selectionRange;
  if (n !== r && r && r.ownerDocument && Bv(r.ownerDocument.documentElement, r)) {
    if (l !== null && Ef(r)) {
      if (n = l.start, e = l.end, e === void 0 && (e = n), "selectionStart" in r) r.selectionStart = n, r.selectionEnd = Math.min(e, r.value.length);
      else if (e = (n = r.ownerDocument || document) && n.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = r.textContent.length, s = Math.min(l.start, o);
        l = l.end === void 0 ? s : Math.min(l.end, o), !e.extend && s > l && (o = l, l = s, s = o), o = rm(r, s);
        var c = rm(
          r,
          l
        );
        o && c && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== c.node || e.focusOffset !== c.offset) && (n = n.createRange(), n.setStart(o.node, o.offset), e.removeAllRanges(), s > l ? (e.addRange(n), e.extend(c.node, c.offset)) : (n.setEnd(c.node, c.offset), e.addRange(n)));
      }
    }
    for (n = [], e = r; e = e.parentNode; ) e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < n.length; r++) e = n[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Mk = Ut && "documentMode" in document && 11 >= document.documentMode, mi = null, Nc = null, Cl = null, Pc = !1;
function im(e, n, r) {
  var l = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Pc || mi == null || mi !== ko(l) || (l = mi, "selectionStart" in l && Ef(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), Cl && Ml(Cl, l) || (Cl = l, l = Io(Nc, "onSelect"), 0 < l.length && (n = new wf("onSelect", "select", null, n, r), e.push({ event: n, listeners: l }), n.target = mi)));
}
function Ju(e, n) {
  var r = {};
  return r[e.toLowerCase()] = n.toLowerCase(), r["Webkit" + e] = "webkit" + n, r["Moz" + e] = "moz" + n, r;
}
var vi = { animationend: Ju("Animation", "AnimationEnd"), animationiteration: Ju("Animation", "AnimationIteration"), animationstart: Ju("Animation", "AnimationStart"), transitionend: Ju("Transition", "TransitionEnd") }, Ga = {}, Wv = {};
Ut && (Wv = document.createElement("div").style, "AnimationEvent" in window || (delete vi.animationend.animation, delete vi.animationiteration.animation, delete vi.animationstart.animation), "TransitionEvent" in window || delete vi.transitionend.transition);
function es(e) {
  if (Ga[e]) return Ga[e];
  if (!vi[e]) return e;
  var n = vi[e], r;
  for (r in n) if (n.hasOwnProperty(r) && r in Wv) return Ga[e] = n[r];
  return e;
}
var Hv = es("animationend"), Vv = es("animationiteration"), Gv = es("animationstart"), Qv = es("transitionend"), Yv = /* @__PURE__ */ new Map(), lm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function wr(e, n) {
  Yv.set(e, n), Vr(n, [e]);
}
for (var Qa = 0; Qa < lm.length; Qa++) {
  var Ya = lm[Qa], Fk = Ya.toLowerCase(), jk = Ya[0].toUpperCase() + Ya.slice(1);
  wr(Fk, "on" + jk);
}
wr(Hv, "onAnimationEnd");
wr(Vv, "onAnimationIteration");
wr(Gv, "onAnimationStart");
wr("dblclick", "onDoubleClick");
wr("focusin", "onFocus");
wr("focusout", "onBlur");
wr(Qv, "onTransitionEnd");
Ri("onMouseEnter", ["mouseout", "mouseover"]);
Ri("onMouseLeave", ["mouseout", "mouseover"]);
Ri("onPointerEnter", ["pointerout", "pointerover"]);
Ri("onPointerLeave", ["pointerout", "pointerover"]);
Vr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Vr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Vr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Vr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Vr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var wl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Uk = new Set("cancel close invalid load scroll toggle".split(" ").concat(wl));
function um(e, n, r) {
  var l = e.type || "unknown-event";
  e.currentTarget = r, FE(l, n, void 0, e), e.currentTarget = null;
}
function Xv(e, n) {
  n = (n & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var l = e[r], o = l.event;
    l = l.listeners;
    e: {
      var s = void 0;
      if (n) for (var c = l.length - 1; 0 <= c; c--) {
        var d = l[c], p = d.instance, y = d.currentTarget;
        if (d = d.listener, p !== s && o.isPropagationStopped()) break e;
        um(o, d, y), s = p;
      }
      else for (c = 0; c < l.length; c++) {
        if (d = l[c], p = d.instance, y = d.currentTarget, d = d.listener, p !== s && o.isPropagationStopped()) break e;
        um(o, d, y), s = p;
      }
    }
  }
  if (No) throw e = Sc, No = !1, Sc = null, e;
}
function Ne(e, n) {
  var r = n[$c];
  r === void 0 && (r = n[$c] = /* @__PURE__ */ new Set());
  var l = e + "__bubble";
  r.has(l) || (Zv(n, e, 2, !1), r.add(l));
}
function Xa(e, n, r) {
  var l = 0;
  n && (l |= 4), Zv(r, e, l, n);
}
var bu = "_reactListening" + Math.random().toString(36).slice(2);
function Fl(e) {
  if (!e[bu]) {
    e[bu] = !0, rv.forEach(function(r) {
      r !== "selectionchange" && (Uk.has(r) || Xa(r, !1, e), Xa(r, !0, e));
    });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[bu] || (n[bu] = !0, Xa("selectionchange", !1, n));
  }
}
function Zv(e, n, r, l) {
  switch (Av(n)) {
    case 1:
      var o = ek;
      break;
    case 4:
      o = nk;
      break;
    default:
      o = yf;
  }
  r = o.bind(null, n, r, e), o = void 0, !xc || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (o = !0), l ? o !== void 0 ? e.addEventListener(n, r, { capture: !0, passive: o }) : e.addEventListener(n, r, !0) : o !== void 0 ? e.addEventListener(n, r, { passive: o }) : e.addEventListener(n, r, !1);
}
function Za(e, n, r, l, o) {
  var s = l;
  if (!(n & 1) && !(n & 2) && l !== null) e: for (; ; ) {
    if (l === null) return;
    var c = l.tag;
    if (c === 3 || c === 4) {
      var d = l.stateNode.containerInfo;
      if (d === o || d.nodeType === 8 && d.parentNode === o) break;
      if (c === 4) for (c = l.return; c !== null; ) {
        var p = c.tag;
        if ((p === 3 || p === 4) && (p = c.stateNode.containerInfo, p === o || p.nodeType === 8 && p.parentNode === o)) return;
        c = c.return;
      }
      for (; d !== null; ) {
        if (c = Dr(d), c === null) return;
        if (p = c.tag, p === 5 || p === 6) {
          l = s = c;
          continue e;
        }
        d = d.parentNode;
      }
    }
    l = l.return;
  }
  _v(function() {
    var y = s, k = hf(r), S = [];
    e: {
      var C = Yv.get(e);
      if (C !== void 0) {
        var R = wf, L = e;
        switch (e) {
          case "keypress":
            if (mo(r) === 0) break e;
          case "keydown":
          case "keyup":
            R = vk;
            break;
          case "focusin":
            L = "focus", R = Wa;
            break;
          case "focusout":
            L = "blur", R = Wa;
            break;
          case "beforeblur":
          case "afterblur":
            R = Wa;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            R = Yh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            R = ik;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            R = _k;
            break;
          case Hv:
          case Vv:
          case Gv:
            R = ok;
            break;
          case Qv:
            R = xk;
            break;
          case "scroll":
            R = tk;
            break;
          case "wheel":
            R = Ek;
            break;
          case "copy":
          case "cut":
          case "paste":
            R = ak;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            R = Zh;
        }
        var A = (n & 4) !== 0, V = !A && e === "scroll", _ = A ? C !== null ? C + "Capture" : null : C;
        A = [];
        for (var v = y, w; v !== null; ) {
          w = v;
          var I = w.stateNode;
          if (w.tag === 5 && I !== null && (w = I, _ !== null && (I = $l(v, _), I != null && A.push(jl(v, I, w)))), V) break;
          v = v.return;
        }
        0 < A.length && (C = new R(C, L, null, r, k), S.push({ event: C, listeners: A }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (C = e === "mouseover" || e === "pointerover", R = e === "mouseout" || e === "pointerout", C && r !== _c && (L = r.relatedTarget || r.fromElement) && (Dr(L) || L[Bt])) break e;
        if ((R || C) && (C = k.window === k ? k : (C = k.ownerDocument) ? C.defaultView || C.parentWindow : window, R ? (L = r.relatedTarget || r.toElement, R = y, L = L ? Dr(L) : null, L !== null && (V = Gr(L), L !== V || L.tag !== 5 && L.tag !== 6) && (L = null)) : (R = null, L = y), R !== L)) {
          if (A = Yh, I = "onMouseLeave", _ = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (A = Zh, I = "onPointerLeave", _ = "onPointerEnter", v = "pointer"), V = R == null ? C : gi(R), w = L == null ? C : gi(L), C = new A(I, v + "leave", R, r, k), C.target = V, C.relatedTarget = w, I = null, Dr(k) === y && (A = new A(_, v + "enter", L, r, k), A.target = w, A.relatedTarget = V, I = A), V = I, R && L) n: {
            for (A = R, _ = L, v = 0, w = A; w; w = fi(w)) v++;
            for (w = 0, I = _; I; I = fi(I)) w++;
            for (; 0 < v - w; ) A = fi(A), v--;
            for (; 0 < w - v; ) _ = fi(_), w--;
            for (; v--; ) {
              if (A === _ || _ !== null && A === _.alternate) break n;
              A = fi(A), _ = fi(_);
            }
            A = null;
          }
          else A = null;
          R !== null && om(S, C, R, A, !1), L !== null && V !== null && om(S, V, L, A, !0);
        }
      }
      e: {
        if (C = y ? gi(y) : window, R = C.nodeName && C.nodeName.toLowerCase(), R === "select" || R === "input" && C.type === "file") var F = Rk;
        else if (bh(C)) if (jv) F = Ok;
        else {
          F = $k;
          var z = Ik;
        }
        else (R = C.nodeName) && R.toLowerCase() === "input" && (C.type === "checkbox" || C.type === "radio") && (F = Ak);
        if (F && (F = F(e, y))) {
          Fv(S, F, r, k);
          break e;
        }
        z && z(e, C, y), e === "focusout" && (z = C._wrapperState) && z.controlled && C.type === "number" && hc(C, "number", C.value);
      }
      switch (z = y ? gi(y) : window, e) {
        case "focusin":
          (bh(z) || z.contentEditable === "true") && (mi = z, Nc = y, Cl = null);
          break;
        case "focusout":
          Cl = Nc = mi = null;
          break;
        case "mousedown":
          Pc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Pc = !1, im(S, r, k);
          break;
        case "selectionchange":
          if (Mk) break;
        case "keydown":
        case "keyup":
          im(S, r, k);
      }
      var W;
      if (Sf) e: {
        switch (e) {
          case "compositionstart":
            var G = "onCompositionStart";
            break e;
          case "compositionend":
            G = "onCompositionEnd";
            break e;
          case "compositionupdate":
            G = "onCompositionUpdate";
            break e;
        }
        G = void 0;
      }
      else hi ? zv(e, r) && (G = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (G = "onCompositionStart");
      G && (Dv && r.locale !== "ko" && (hi || G !== "onCompositionStart" ? G === "onCompositionEnd" && hi && (W = Ov()) : (or = k, _f = "value" in or ? or.value : or.textContent, hi = !0)), z = Io(y, G), 0 < z.length && (G = new Xh(G, e, null, r, k), S.push({ event: G, listeners: z }), W ? G.data = W : (W = Mv(r), W !== null && (G.data = W)))), (W = Ck ? Nk(e, r) : Pk(e, r)) && (y = Io(y, "onBeforeInput"), 0 < y.length && (k = new Xh("onBeforeInput", "beforeinput", null, r, k), S.push({ event: k, listeners: y }), k.data = W));
    }
    Xv(S, n);
  });
}
function jl(e, n, r) {
  return { instance: e, listener: n, currentTarget: r };
}
function Io(e, n) {
  for (var r = n + "Capture", l = []; e !== null; ) {
    var o = e, s = o.stateNode;
    o.tag === 5 && s !== null && (o = s, s = $l(e, r), s != null && l.unshift(jl(e, s, o)), s = $l(e, n), s != null && l.push(jl(e, s, o))), e = e.return;
  }
  return l;
}
function fi(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function om(e, n, r, l, o) {
  for (var s = n._reactName, c = []; r !== null && r !== l; ) {
    var d = r, p = d.alternate, y = d.stateNode;
    if (p !== null && p === l) break;
    d.tag === 5 && y !== null && (d = y, o ? (p = $l(r, s), p != null && c.unshift(jl(r, p, d))) : o || (p = $l(r, s), p != null && c.push(jl(r, p, d)))), r = r.return;
  }
  c.length !== 0 && e.push({ event: n, listeners: c });
}
var Bk = /\r\n?/g, Kk = /\u0000|\uFFFD/g;
function sm(e) {
  return (typeof e == "string" ? e : "" + e).replace(Bk, `
`).replace(Kk, "");
}
function eo(e, n, r) {
  if (n = sm(n), sm(e) !== n && r) throw Error(j(425));
}
function $o() {
}
var Tc = null, Lc = null;
function Rc(e, n) {
  return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
}
var Ic = typeof setTimeout == "function" ? setTimeout : void 0, Wk = typeof clearTimeout == "function" ? clearTimeout : void 0, am = typeof Promise == "function" ? Promise : void 0, Hk = typeof queueMicrotask == "function" ? queueMicrotask : typeof am < "u" ? function(e) {
  return am.resolve(null).then(e).catch(Vk);
} : Ic;
function Vk(e) {
  setTimeout(function() {
    throw e;
  });
}
function qa(e, n) {
  var r = n, l = 0;
  do {
    var o = r.nextSibling;
    if (e.removeChild(r), o && o.nodeType === 8) if (r = o.data, r === "/$") {
      if (l === 0) {
        e.removeChild(o), Dl(n);
        return;
      }
      l--;
    } else r !== "$" && r !== "$?" && r !== "$!" || l++;
    r = o;
  } while (r);
  Dl(n);
}
function dr(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (n = e.data, n === "$" || n === "$!" || n === "$?") break;
      if (n === "/$") return null;
    }
  }
  return e;
}
function cm(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (n === 0) return e;
        n--;
      } else r === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ji = Math.random().toString(36).slice(2), _t = "__reactFiber$" + ji, Ul = "__reactProps$" + ji, Bt = "__reactContainer$" + ji, $c = "__reactEvents$" + ji, Gk = "__reactListeners$" + ji, Qk = "__reactHandles$" + ji;
function Dr(e) {
  var n = e[_t];
  if (n) return n;
  for (var r = e.parentNode; r; ) {
    if (n = r[Bt] || r[_t]) {
      if (r = n.alternate, n.child !== null || r !== null && r.child !== null) for (e = cm(e); e !== null; ) {
        if (r = e[_t]) return r;
        e = cm(e);
      }
      return n;
    }
    e = r, r = e.parentNode;
  }
  return null;
}
function Zl(e) {
  return e = e[_t] || e[Bt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function gi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function ns(e) {
  return e[Ul] || null;
}
var Ac = [], yi = -1;
function xr(e) {
  return { current: e };
}
function Pe(e) {
  0 > yi || (e.current = Ac[yi], Ac[yi] = null, yi--);
}
function ke(e, n) {
  yi++, Ac[yi] = e.current, e.current = n;
}
var _r = {}, on = xr(_r), xn = xr(!1), Ur = _r;
function Ii(e, n) {
  var r = e.type.contextTypes;
  if (!r) return _r;
  var l = e.stateNode;
  if (l && l.__reactInternalMemoizedUnmaskedChildContext === n) return l.__reactInternalMemoizedMaskedChildContext;
  var o = {}, s;
  for (s in r) o[s] = n[s];
  return l && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Sn(e) {
  return e = e.childContextTypes, e != null;
}
function Ao() {
  Pe(xn), Pe(on);
}
function fm(e, n, r) {
  if (on.current !== _r) throw Error(j(168));
  ke(on, n), ke(xn, r);
}
function qv(e, n, r) {
  var l = e.stateNode;
  if (n = n.childContextTypes, typeof l.getChildContext != "function") return r;
  l = l.getChildContext();
  for (var o in l) if (!(o in n)) throw Error(j(108, IE(e) || "Unknown", o));
  return Ae({}, r, l);
}
function Oo(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _r, Ur = on.current, ke(on, e), ke(xn, xn.current), !0;
}
function dm(e, n, r) {
  var l = e.stateNode;
  if (!l) throw Error(j(169));
  r ? (e = qv(e, n, Ur), l.__reactInternalMemoizedMergedChildContext = e, Pe(xn), Pe(on), ke(on, e)) : Pe(xn), ke(xn, r);
}
var zt = null, ts = !1, Ja = !1;
function Jv(e) {
  zt === null ? zt = [e] : zt.push(e);
}
function Yk(e) {
  ts = !0, Jv(e);
}
function Sr() {
  if (!Ja && zt !== null) {
    Ja = !0;
    var e = 0, n = we;
    try {
      var r = zt;
      for (we = 1; e < r.length; e++) {
        var l = r[e];
        do
          l = l(!0);
        while (l !== null);
      }
      zt = null, ts = !1;
    } catch (o) {
      throw zt !== null && (zt = zt.slice(e + 1)), Ev(mf, Sr), o;
    } finally {
      we = n, Ja = !1;
    }
  }
  return null;
}
var _i = [], wi = 0, Do = null, zo = 0, Gn = [], Qn = 0, Br = null, Mt = 1, Ft = "";
function Ar(e, n) {
  _i[wi++] = zo, _i[wi++] = Do, Do = e, zo = n;
}
function bv(e, n, r) {
  Gn[Qn++] = Mt, Gn[Qn++] = Ft, Gn[Qn++] = Br, Br = e;
  var l = Mt;
  e = Ft;
  var o = 32 - st(l) - 1;
  l &= ~(1 << o), r += 1;
  var s = 32 - st(n) + o;
  if (30 < s) {
    var c = o - o % 5;
    s = (l & (1 << c) - 1).toString(32), l >>= c, o -= c, Mt = 1 << 32 - st(n) + o | r << o | l, Ft = s + e;
  } else Mt = 1 << s | r << o | l, Ft = e;
}
function kf(e) {
  e.return !== null && (Ar(e, 1), bv(e, 1, 0));
}
function Cf(e) {
  for (; e === Do; ) Do = _i[--wi], _i[wi] = null, zo = _i[--wi], _i[wi] = null;
  for (; e === Br; ) Br = Gn[--Qn], Gn[Qn] = null, Ft = Gn[--Qn], Gn[Qn] = null, Mt = Gn[--Qn], Gn[Qn] = null;
}
var An = null, $n = null, Le = !1, ot = null;
function eg(e, n) {
  var r = Yn(5, null, null, 0);
  r.elementType = "DELETED", r.stateNode = n, r.return = e, n = e.deletions, n === null ? (e.deletions = [r], e.flags |= 16) : n.push(r);
}
function pm(e, n) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return n = n.nodeType !== 1 || r.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, An = e, $n = dr(n.firstChild), !0) : !1;
    case 6:
      return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, An = e, $n = null, !0) : !1;
    case 13:
      return n = n.nodeType !== 8 ? null : n, n !== null ? (r = Br !== null ? { id: Mt, overflow: Ft } : null, e.memoizedState = { dehydrated: n, treeContext: r, retryLane: 1073741824 }, r = Yn(18, null, null, 0), r.stateNode = n, r.return = e, e.child = r, An = e, $n = null, !0) : !1;
    default:
      return !1;
  }
}
function Oc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Dc(e) {
  if (Le) {
    var n = $n;
    if (n) {
      var r = n;
      if (!pm(e, n)) {
        if (Oc(e)) throw Error(j(418));
        n = dr(r.nextSibling);
        var l = An;
        n && pm(e, n) ? eg(l, r) : (e.flags = e.flags & -4097 | 2, Le = !1, An = e);
      }
    } else {
      if (Oc(e)) throw Error(j(418));
      e.flags = e.flags & -4097 | 2, Le = !1, An = e;
    }
  }
}
function hm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  An = e;
}
function no(e) {
  if (e !== An) return !1;
  if (!Le) return hm(e), Le = !0, !1;
  var n;
  if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !Rc(e.type, e.memoizedProps)), n && (n = $n)) {
    if (Oc(e)) throw ng(), Error(j(418));
    for (; n; ) eg(e, n), n = dr(n.nextSibling);
  }
  if (hm(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(j(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (n === 0) {
              $n = dr(e.nextSibling);
              break e;
            }
            n--;
          } else r !== "$" && r !== "$!" && r !== "$?" || n++;
        }
        e = e.nextSibling;
      }
      $n = null;
    }
  } else $n = An ? dr(e.stateNode.nextSibling) : null;
  return !0;
}
function ng() {
  for (var e = $n; e; ) e = dr(e.nextSibling);
}
function $i() {
  $n = An = null, Le = !1;
}
function Nf(e) {
  ot === null ? ot = [e] : ot.push(e);
}
var Xk = Vt.ReactCurrentBatchConfig;
function hl(e, n, r) {
  if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (r._owner) {
      if (r = r._owner, r) {
        if (r.tag !== 1) throw Error(j(309));
        var l = r.stateNode;
      }
      if (!l) throw Error(j(147, e));
      var o = l, s = "" + e;
      return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === s ? n.ref : (n = function(c) {
        var d = o.refs;
        c === null ? delete d[s] : d[s] = c;
      }, n._stringRef = s, n);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!r._owner) throw Error(j(290, e));
  }
  return e;
}
function to(e, n) {
  throw e = Object.prototype.toString.call(n), Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
}
function mm(e) {
  var n = e._init;
  return n(e._payload);
}
function tg(e) {
  function n(_, v) {
    if (e) {
      var w = _.deletions;
      w === null ? (_.deletions = [v], _.flags |= 16) : w.push(v);
    }
  }
  function r(_, v) {
    if (!e) return null;
    for (; v !== null; ) n(_, v), v = v.sibling;
    return null;
  }
  function l(_, v) {
    for (_ = /* @__PURE__ */ new Map(); v !== null; ) v.key !== null ? _.set(v.key, v) : _.set(v.index, v), v = v.sibling;
    return _;
  }
  function o(_, v) {
    return _ = vr(_, v), _.index = 0, _.sibling = null, _;
  }
  function s(_, v, w) {
    return _.index = w, e ? (w = _.alternate, w !== null ? (w = w.index, w < v ? (_.flags |= 2, v) : w) : (_.flags |= 2, v)) : (_.flags |= 1048576, v);
  }
  function c(_) {
    return e && _.alternate === null && (_.flags |= 2), _;
  }
  function d(_, v, w, I) {
    return v === null || v.tag !== 6 ? (v = lc(w, _.mode, I), v.return = _, v) : (v = o(v, w), v.return = _, v);
  }
  function p(_, v, w, I) {
    var F = w.type;
    return F === pi ? k(_, v, w.props.children, I, w.key) : v !== null && (v.elementType === F || typeof F == "object" && F !== null && F.$$typeof === tr && mm(F) === v.type) ? (I = o(v, w.props), I.ref = hl(_, v, w), I.return = _, I) : (I = So(w.type, w.key, w.props, null, _.mode, I), I.ref = hl(_, v, w), I.return = _, I);
  }
  function y(_, v, w, I) {
    return v === null || v.tag !== 4 || v.stateNode.containerInfo !== w.containerInfo || v.stateNode.implementation !== w.implementation ? (v = uc(w, _.mode, I), v.return = _, v) : (v = o(v, w.children || []), v.return = _, v);
  }
  function k(_, v, w, I, F) {
    return v === null || v.tag !== 7 ? (v = jr(w, _.mode, I, F), v.return = _, v) : (v = o(v, w), v.return = _, v);
  }
  function S(_, v, w) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return v = lc("" + v, _.mode, w), v.return = _, v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Vu:
          return w = So(v.type, v.key, v.props, null, _.mode, w), w.ref = hl(_, null, v), w.return = _, w;
        case di:
          return v = uc(v, _.mode, w), v.return = _, v;
        case tr:
          var I = v._init;
          return S(_, I(v._payload), w);
      }
      if (yl(v) || al(v)) return v = jr(v, _.mode, w, null), v.return = _, v;
      to(_, v);
    }
    return null;
  }
  function C(_, v, w, I) {
    var F = v !== null ? v.key : null;
    if (typeof w == "string" && w !== "" || typeof w == "number") return F !== null ? null : d(_, v, "" + w, I);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Vu:
          return w.key === F ? p(_, v, w, I) : null;
        case di:
          return w.key === F ? y(_, v, w, I) : null;
        case tr:
          return F = w._init, C(
            _,
            v,
            F(w._payload),
            I
          );
      }
      if (yl(w) || al(w)) return F !== null ? null : k(_, v, w, I, null);
      to(_, w);
    }
    return null;
  }
  function R(_, v, w, I, F) {
    if (typeof I == "string" && I !== "" || typeof I == "number") return _ = _.get(w) || null, d(v, _, "" + I, F);
    if (typeof I == "object" && I !== null) {
      switch (I.$$typeof) {
        case Vu:
          return _ = _.get(I.key === null ? w : I.key) || null, p(v, _, I, F);
        case di:
          return _ = _.get(I.key === null ? w : I.key) || null, y(v, _, I, F);
        case tr:
          var z = I._init;
          return R(_, v, w, z(I._payload), F);
      }
      if (yl(I) || al(I)) return _ = _.get(w) || null, k(v, _, I, F, null);
      to(v, I);
    }
    return null;
  }
  function L(_, v, w, I) {
    for (var F = null, z = null, W = v, G = v = 0, se = null; W !== null && G < w.length; G++) {
      W.index > G ? (se = W, W = null) : se = W.sibling;
      var K = C(_, W, w[G], I);
      if (K === null) {
        W === null && (W = se);
        break;
      }
      e && W && K.alternate === null && n(_, W), v = s(K, v, G), z === null ? F = K : z.sibling = K, z = K, W = se;
    }
    if (G === w.length) return r(_, W), Le && Ar(_, G), F;
    if (W === null) {
      for (; G < w.length; G++) W = S(_, w[G], I), W !== null && (v = s(W, v, G), z === null ? F = W : z.sibling = W, z = W);
      return Le && Ar(_, G), F;
    }
    for (W = l(_, W); G < w.length; G++) se = R(W, _, G, w[G], I), se !== null && (e && se.alternate !== null && W.delete(se.key === null ? G : se.key), v = s(se, v, G), z === null ? F = se : z.sibling = se, z = se);
    return e && W.forEach(function(xe) {
      return n(_, xe);
    }), Le && Ar(_, G), F;
  }
  function A(_, v, w, I) {
    var F = al(w);
    if (typeof F != "function") throw Error(j(150));
    if (w = F.call(w), w == null) throw Error(j(151));
    for (var z = F = null, W = v, G = v = 0, se = null, K = w.next(); W !== null && !K.done; G++, K = w.next()) {
      W.index > G ? (se = W, W = null) : se = W.sibling;
      var xe = C(_, W, K.value, I);
      if (xe === null) {
        W === null && (W = se);
        break;
      }
      e && W && xe.alternate === null && n(_, W), v = s(xe, v, G), z === null ? F = xe : z.sibling = xe, z = xe, W = se;
    }
    if (K.done) return r(
      _,
      W
    ), Le && Ar(_, G), F;
    if (W === null) {
      for (; !K.done; G++, K = w.next()) K = S(_, K.value, I), K !== null && (v = s(K, v, G), z === null ? F = K : z.sibling = K, z = K);
      return Le && Ar(_, G), F;
    }
    for (W = l(_, W); !K.done; G++, K = w.next()) K = R(W, _, G, K.value, I), K !== null && (e && K.alternate !== null && W.delete(K.key === null ? G : K.key), v = s(K, v, G), z === null ? F = K : z.sibling = K, z = K);
    return e && W.forEach(function(Oe) {
      return n(_, Oe);
    }), Le && Ar(_, G), F;
  }
  function V(_, v, w, I) {
    if (typeof w == "object" && w !== null && w.type === pi && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Vu:
          e: {
            for (var F = w.key, z = v; z !== null; ) {
              if (z.key === F) {
                if (F = w.type, F === pi) {
                  if (z.tag === 7) {
                    r(_, z.sibling), v = o(z, w.props.children), v.return = _, _ = v;
                    break e;
                  }
                } else if (z.elementType === F || typeof F == "object" && F !== null && F.$$typeof === tr && mm(F) === z.type) {
                  r(_, z.sibling), v = o(z, w.props), v.ref = hl(_, z, w), v.return = _, _ = v;
                  break e;
                }
                r(_, z);
                break;
              } else n(_, z);
              z = z.sibling;
            }
            w.type === pi ? (v = jr(w.props.children, _.mode, I, w.key), v.return = _, _ = v) : (I = So(w.type, w.key, w.props, null, _.mode, I), I.ref = hl(_, v, w), I.return = _, _ = I);
          }
          return c(_);
        case di:
          e: {
            for (z = w.key; v !== null; ) {
              if (v.key === z) if (v.tag === 4 && v.stateNode.containerInfo === w.containerInfo && v.stateNode.implementation === w.implementation) {
                r(_, v.sibling), v = o(v, w.children || []), v.return = _, _ = v;
                break e;
              } else {
                r(_, v);
                break;
              }
              else n(_, v);
              v = v.sibling;
            }
            v = uc(w, _.mode, I), v.return = _, _ = v;
          }
          return c(_);
        case tr:
          return z = w._init, V(_, v, z(w._payload), I);
      }
      if (yl(w)) return L(_, v, w, I);
      if (al(w)) return A(_, v, w, I);
      to(_, w);
    }
    return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w, v !== null && v.tag === 6 ? (r(_, v.sibling), v = o(v, w), v.return = _, _ = v) : (r(_, v), v = lc(w, _.mode, I), v.return = _, _ = v), c(_)) : r(_, v);
  }
  return V;
}
var Ai = tg(!0), rg = tg(!1), Mo = xr(null), Fo = null, xi = null, Pf = null;
function Tf() {
  Pf = xi = Fo = null;
}
function Lf(e) {
  var n = Mo.current;
  Pe(Mo), e._currentValue = n;
}
function zc(e, n, r) {
  for (; e !== null; ) {
    var l = e.alternate;
    if ((e.childLanes & n) !== n ? (e.childLanes |= n, l !== null && (l.childLanes |= n)) : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n), e === r) break;
    e = e.return;
  }
}
function Ti(e, n) {
  Fo = e, Pf = xi = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (wn = !0), e.firstContext = null);
}
function Zn(e) {
  var n = e._currentValue;
  if (Pf !== e) if (e = { context: e, memoizedValue: n, next: null }, xi === null) {
    if (Fo === null) throw Error(j(308));
    xi = e, Fo.dependencies = { lanes: 0, firstContext: e };
  } else xi = xi.next = e;
  return n;
}
var zr = null;
function Rf(e) {
  zr === null ? zr = [e] : zr.push(e);
}
function ig(e, n, r, l) {
  var o = n.interleaved;
  return o === null ? (r.next = r, Rf(n)) : (r.next = o.next, o.next = r), n.interleaved = r, Kt(e, l);
}
function Kt(e, n) {
  e.lanes |= n;
  var r = e.alternate;
  for (r !== null && (r.lanes |= n), r = e, e = e.return; e !== null; ) e.childLanes |= n, r = e.alternate, r !== null && (r.childLanes |= n), r = e, e = e.return;
  return r.tag === 3 ? r.stateNode : null;
}
var rr = !1;
function If(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function lg(e, n) {
  e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function jt(e, n) {
  return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
}
function pr(e, n, r) {
  var l = e.updateQueue;
  if (l === null) return null;
  if (l = l.shared, me & 2) {
    var o = l.pending;
    return o === null ? n.next = n : (n.next = o.next, o.next = n), l.pending = n, Kt(e, r);
  }
  return o = l.interleaved, o === null ? (n.next = n, Rf(l)) : (n.next = o.next, o.next = n), l.interleaved = n, Kt(e, r);
}
function vo(e, n, r) {
  if (n = n.updateQueue, n !== null && (n = n.shared, (r & 4194240) !== 0)) {
    var l = n.lanes;
    l &= e.pendingLanes, r |= l, n.lanes = r, vf(e, r);
  }
}
function vm(e, n) {
  var r = e.updateQueue, l = e.alternate;
  if (l !== null && (l = l.updateQueue, r === l)) {
    var o = null, s = null;
    if (r = r.firstBaseUpdate, r !== null) {
      do {
        var c = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
        s === null ? o = s = c : s = s.next = c, r = r.next;
      } while (r !== null);
      s === null ? o = s = n : s = s.next = n;
    } else o = s = n;
    r = { baseState: l.baseState, firstBaseUpdate: o, lastBaseUpdate: s, shared: l.shared, effects: l.effects }, e.updateQueue = r;
    return;
  }
  e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = n : e.next = n, r.lastBaseUpdate = n;
}
function jo(e, n, r, l) {
  var o = e.updateQueue;
  rr = !1;
  var s = o.firstBaseUpdate, c = o.lastBaseUpdate, d = o.shared.pending;
  if (d !== null) {
    o.shared.pending = null;
    var p = d, y = p.next;
    p.next = null, c === null ? s = y : c.next = y, c = p;
    var k = e.alternate;
    k !== null && (k = k.updateQueue, d = k.lastBaseUpdate, d !== c && (d === null ? k.firstBaseUpdate = y : d.next = y, k.lastBaseUpdate = p));
  }
  if (s !== null) {
    var S = o.baseState;
    c = 0, k = y = p = null, d = s;
    do {
      var C = d.lane, R = d.eventTime;
      if ((l & C) === C) {
        k !== null && (k = k.next = {
          eventTime: R,
          lane: 0,
          tag: d.tag,
          payload: d.payload,
          callback: d.callback,
          next: null
        });
        e: {
          var L = e, A = d;
          switch (C = n, R = r, A.tag) {
            case 1:
              if (L = A.payload, typeof L == "function") {
                S = L.call(R, S, C);
                break e;
              }
              S = L;
              break e;
            case 3:
              L.flags = L.flags & -65537 | 128;
            case 0:
              if (L = A.payload, C = typeof L == "function" ? L.call(R, S, C) : L, C == null) break e;
              S = Ae({}, S, C);
              break e;
            case 2:
              rr = !0;
          }
        }
        d.callback !== null && d.lane !== 0 && (e.flags |= 64, C = o.effects, C === null ? o.effects = [d] : C.push(d));
      } else R = { eventTime: R, lane: C, tag: d.tag, payload: d.payload, callback: d.callback, next: null }, k === null ? (y = k = R, p = S) : k = k.next = R, c |= C;
      if (d = d.next, d === null) {
        if (d = o.shared.pending, d === null) break;
        C = d, d = C.next, C.next = null, o.lastBaseUpdate = C, o.shared.pending = null;
      }
    } while (!0);
    if (k === null && (p = S), o.baseState = p, o.firstBaseUpdate = y, o.lastBaseUpdate = k, n = o.shared.interleaved, n !== null) {
      o = n;
      do
        c |= o.lane, o = o.next;
      while (o !== n);
    } else s === null && (o.shared.lanes = 0);
    Wr |= c, e.lanes = c, e.memoizedState = S;
  }
}
function gm(e, n, r) {
  if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
    var l = e[n], o = l.callback;
    if (o !== null) {
      if (l.callback = null, l = r, typeof o != "function") throw Error(j(191, o));
      o.call(l);
    }
  }
}
var ql = {}, St = xr(ql), Bl = xr(ql), Kl = xr(ql);
function Mr(e) {
  if (e === ql) throw Error(j(174));
  return e;
}
function $f(e, n) {
  switch (ke(Kl, n), ke(Bl, e), ke(St, ql), e = n.nodeType, e) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : vc(null, "");
      break;
    default:
      e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = vc(n, e);
  }
  Pe(St), ke(St, n);
}
function Oi() {
  Pe(St), Pe(Bl), Pe(Kl);
}
function ug(e) {
  Mr(Kl.current);
  var n = Mr(St.current), r = vc(n, e.type);
  n !== r && (ke(Bl, e), ke(St, r));
}
function Af(e) {
  Bl.current === e && (Pe(St), Pe(Bl));
}
var Ie = xr(0);
function Uo(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
  return null;
}
var ba = [];
function Of() {
  for (var e = 0; e < ba.length; e++) ba[e]._workInProgressVersionPrimary = null;
  ba.length = 0;
}
var go = Vt.ReactCurrentDispatcher, ec = Vt.ReactCurrentBatchConfig, Kr = 0, $e = null, Ve = null, Ye = null, Bo = !1, Nl = !1, Wl = 0, Zk = 0;
function rn() {
  throw Error(j(321));
}
function Df(e, n) {
  if (n === null) return !1;
  for (var r = 0; r < n.length && r < e.length; r++) if (!ft(e[r], n[r])) return !1;
  return !0;
}
function zf(e, n, r, l, o, s) {
  if (Kr = s, $e = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, go.current = e === null || e.memoizedState === null ? e3 : n3, e = r(l, o), Nl) {
    s = 0;
    do {
      if (Nl = !1, Wl = 0, 25 <= s) throw Error(j(301));
      s += 1, Ye = Ve = null, n.updateQueue = null, go.current = t3, e = r(l, o);
    } while (Nl);
  }
  if (go.current = Ko, n = Ve !== null && Ve.next !== null, Kr = 0, Ye = Ve = $e = null, Bo = !1, n) throw Error(j(300));
  return e;
}
function Mf() {
  var e = Wl !== 0;
  return Wl = 0, e;
}
function yt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ye === null ? $e.memoizedState = Ye = e : Ye = Ye.next = e, Ye;
}
function qn() {
  if (Ve === null) {
    var e = $e.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ve.next;
  var n = Ye === null ? $e.memoizedState : Ye.next;
  if (n !== null) Ye = n, Ve = e;
  else {
    if (e === null) throw Error(j(310));
    Ve = e, e = { memoizedState: Ve.memoizedState, baseState: Ve.baseState, baseQueue: Ve.baseQueue, queue: Ve.queue, next: null }, Ye === null ? $e.memoizedState = Ye = e : Ye = Ye.next = e;
  }
  return Ye;
}
function Hl(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function nc(e) {
  var n = qn(), r = n.queue;
  if (r === null) throw Error(j(311));
  r.lastRenderedReducer = e;
  var l = Ve, o = l.baseQueue, s = r.pending;
  if (s !== null) {
    if (o !== null) {
      var c = o.next;
      o.next = s.next, s.next = c;
    }
    l.baseQueue = o = s, r.pending = null;
  }
  if (o !== null) {
    s = o.next, l = l.baseState;
    var d = c = null, p = null, y = s;
    do {
      var k = y.lane;
      if ((Kr & k) === k) p !== null && (p = p.next = { lane: 0, action: y.action, hasEagerState: y.hasEagerState, eagerState: y.eagerState, next: null }), l = y.hasEagerState ? y.eagerState : e(l, y.action);
      else {
        var S = {
          lane: k,
          action: y.action,
          hasEagerState: y.hasEagerState,
          eagerState: y.eagerState,
          next: null
        };
        p === null ? (d = p = S, c = l) : p = p.next = S, $e.lanes |= k, Wr |= k;
      }
      y = y.next;
    } while (y !== null && y !== s);
    p === null ? c = l : p.next = d, ft(l, n.memoizedState) || (wn = !0), n.memoizedState = l, n.baseState = c, n.baseQueue = p, r.lastRenderedState = l;
  }
  if (e = r.interleaved, e !== null) {
    o = e;
    do
      s = o.lane, $e.lanes |= s, Wr |= s, o = o.next;
    while (o !== e);
  } else o === null && (r.lanes = 0);
  return [n.memoizedState, r.dispatch];
}
function tc(e) {
  var n = qn(), r = n.queue;
  if (r === null) throw Error(j(311));
  r.lastRenderedReducer = e;
  var l = r.dispatch, o = r.pending, s = n.memoizedState;
  if (o !== null) {
    r.pending = null;
    var c = o = o.next;
    do
      s = e(s, c.action), c = c.next;
    while (c !== o);
    ft(s, n.memoizedState) || (wn = !0), n.memoizedState = s, n.baseQueue === null && (n.baseState = s), r.lastRenderedState = s;
  }
  return [s, l];
}
function og() {
}
function sg(e, n) {
  var r = $e, l = qn(), o = n(), s = !ft(l.memoizedState, o);
  if (s && (l.memoizedState = o, wn = !0), l = l.queue, Ff(fg.bind(null, r, l, e), [e]), l.getSnapshot !== n || s || Ye !== null && Ye.memoizedState.tag & 1) {
    if (r.flags |= 2048, Vl(9, cg.bind(null, r, l, o, n), void 0, null), Xe === null) throw Error(j(349));
    Kr & 30 || ag(r, n, o);
  }
  return o;
}
function ag(e, n, r) {
  e.flags |= 16384, e = { getSnapshot: n, value: r }, n = $e.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, $e.updateQueue = n, n.stores = [e]) : (r = n.stores, r === null ? n.stores = [e] : r.push(e));
}
function cg(e, n, r, l) {
  n.value = r, n.getSnapshot = l, dg(n) && pg(e);
}
function fg(e, n, r) {
  return r(function() {
    dg(n) && pg(e);
  });
}
function dg(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var r = n();
    return !ft(e, r);
  } catch {
    return !0;
  }
}
function pg(e) {
  var n = Kt(e, 1);
  n !== null && at(n, e, 1, -1);
}
function ym(e) {
  var n = yt();
  return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Hl, lastRenderedState: e }, n.queue = e, e = e.dispatch = bk.bind(null, $e, e), [n.memoizedState, e];
}
function Vl(e, n, r, l) {
  return e = { tag: e, create: n, destroy: r, deps: l, next: null }, n = $e.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, $e.updateQueue = n, n.lastEffect = e.next = e) : (r = n.lastEffect, r === null ? n.lastEffect = e.next = e : (l = r.next, r.next = e, e.next = l, n.lastEffect = e)), e;
}
function hg() {
  return qn().memoizedState;
}
function yo(e, n, r, l) {
  var o = yt();
  $e.flags |= e, o.memoizedState = Vl(1 | n, r, void 0, l === void 0 ? null : l);
}
function rs(e, n, r, l) {
  var o = qn();
  l = l === void 0 ? null : l;
  var s = void 0;
  if (Ve !== null) {
    var c = Ve.memoizedState;
    if (s = c.destroy, l !== null && Df(l, c.deps)) {
      o.memoizedState = Vl(n, r, s, l);
      return;
    }
  }
  $e.flags |= e, o.memoizedState = Vl(1 | n, r, s, l);
}
function _m(e, n) {
  return yo(8390656, 8, e, n);
}
function Ff(e, n) {
  return rs(2048, 8, e, n);
}
function mg(e, n) {
  return rs(4, 2, e, n);
}
function vg(e, n) {
  return rs(4, 4, e, n);
}
function gg(e, n) {
  if (typeof n == "function") return e = e(), n(e), function() {
    n(null);
  };
  if (n != null) return e = e(), n.current = e, function() {
    n.current = null;
  };
}
function yg(e, n, r) {
  return r = r != null ? r.concat([e]) : null, rs(4, 4, gg.bind(null, n, e), r);
}
function jf() {
}
function _g(e, n) {
  var r = qn();
  n = n === void 0 ? null : n;
  var l = r.memoizedState;
  return l !== null && n !== null && Df(n, l[1]) ? l[0] : (r.memoizedState = [e, n], e);
}
function wg(e, n) {
  var r = qn();
  n = n === void 0 ? null : n;
  var l = r.memoizedState;
  return l !== null && n !== null && Df(n, l[1]) ? l[0] : (e = e(), r.memoizedState = [e, n], e);
}
function xg(e, n, r) {
  return Kr & 21 ? (ft(r, n) || (r = Nv(), $e.lanes |= r, Wr |= r, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, wn = !0), e.memoizedState = r);
}
function qk(e, n) {
  var r = we;
  we = r !== 0 && 4 > r ? r : 4, e(!0);
  var l = ec.transition;
  ec.transition = {};
  try {
    e(!1), n();
  } finally {
    we = r, ec.transition = l;
  }
}
function Sg() {
  return qn().memoizedState;
}
function Jk(e, n, r) {
  var l = mr(e);
  if (r = { lane: l, action: r, hasEagerState: !1, eagerState: null, next: null }, Eg(e)) kg(n, r);
  else if (r = ig(e, n, r, l), r !== null) {
    var o = dn();
    at(r, e, l, o), Cg(r, n, l);
  }
}
function bk(e, n, r) {
  var l = mr(e), o = { lane: l, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (Eg(e)) kg(n, o);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = n.lastRenderedReducer, s !== null)) try {
      var c = n.lastRenderedState, d = s(c, r);
      if (o.hasEagerState = !0, o.eagerState = d, ft(d, c)) {
        var p = n.interleaved;
        p === null ? (o.next = o, Rf(n)) : (o.next = p.next, p.next = o), n.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    r = ig(e, n, o, l), r !== null && (o = dn(), at(r, e, l, o), Cg(r, n, l));
  }
}
function Eg(e) {
  var n = e.alternate;
  return e === $e || n !== null && n === $e;
}
function kg(e, n) {
  Nl = Bo = !0;
  var r = e.pending;
  r === null ? n.next = n : (n.next = r.next, r.next = n), e.pending = n;
}
function Cg(e, n, r) {
  if (r & 4194240) {
    var l = n.lanes;
    l &= e.pendingLanes, r |= l, n.lanes = r, vf(e, r);
  }
}
var Ko = { readContext: Zn, useCallback: rn, useContext: rn, useEffect: rn, useImperativeHandle: rn, useInsertionEffect: rn, useLayoutEffect: rn, useMemo: rn, useReducer: rn, useRef: rn, useState: rn, useDebugValue: rn, useDeferredValue: rn, useTransition: rn, useMutableSource: rn, useSyncExternalStore: rn, useId: rn, unstable_isNewReconciler: !1 }, e3 = { readContext: Zn, useCallback: function(e, n) {
  return yt().memoizedState = [e, n === void 0 ? null : n], e;
}, useContext: Zn, useEffect: _m, useImperativeHandle: function(e, n, r) {
  return r = r != null ? r.concat([e]) : null, yo(
    4194308,
    4,
    gg.bind(null, n, e),
    r
  );
}, useLayoutEffect: function(e, n) {
  return yo(4194308, 4, e, n);
}, useInsertionEffect: function(e, n) {
  return yo(4, 2, e, n);
}, useMemo: function(e, n) {
  var r = yt();
  return n = n === void 0 ? null : n, e = e(), r.memoizedState = [e, n], e;
}, useReducer: function(e, n, r) {
  var l = yt();
  return n = r !== void 0 ? r(n) : n, l.memoizedState = l.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, l.queue = e, e = e.dispatch = Jk.bind(null, $e, e), [l.memoizedState, e];
}, useRef: function(e) {
  var n = yt();
  return e = { current: e }, n.memoizedState = e;
}, useState: ym, useDebugValue: jf, useDeferredValue: function(e) {
  return yt().memoizedState = e;
}, useTransition: function() {
  var e = ym(!1), n = e[0];
  return e = qk.bind(null, e[1]), yt().memoizedState = e, [n, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, n, r) {
  var l = $e, o = yt();
  if (Le) {
    if (r === void 0) throw Error(j(407));
    r = r();
  } else {
    if (r = n(), Xe === null) throw Error(j(349));
    Kr & 30 || ag(l, n, r);
  }
  o.memoizedState = r;
  var s = { value: r, getSnapshot: n };
  return o.queue = s, _m(fg.bind(
    null,
    l,
    s,
    e
  ), [e]), l.flags |= 2048, Vl(9, cg.bind(null, l, s, r, n), void 0, null), r;
}, useId: function() {
  var e = yt(), n = Xe.identifierPrefix;
  if (Le) {
    var r = Ft, l = Mt;
    r = (l & ~(1 << 32 - st(l) - 1)).toString(32) + r, n = ":" + n + "R" + r, r = Wl++, 0 < r && (n += "H" + r.toString(32)), n += ":";
  } else r = Zk++, n = ":" + n + "r" + r.toString(32) + ":";
  return e.memoizedState = n;
}, unstable_isNewReconciler: !1 }, n3 = {
  readContext: Zn,
  useCallback: _g,
  useContext: Zn,
  useEffect: Ff,
  useImperativeHandle: yg,
  useInsertionEffect: mg,
  useLayoutEffect: vg,
  useMemo: wg,
  useReducer: nc,
  useRef: hg,
  useState: function() {
    return nc(Hl);
  },
  useDebugValue: jf,
  useDeferredValue: function(e) {
    var n = qn();
    return xg(n, Ve.memoizedState, e);
  },
  useTransition: function() {
    var e = nc(Hl)[0], n = qn().memoizedState;
    return [e, n];
  },
  useMutableSource: og,
  useSyncExternalStore: sg,
  useId: Sg,
  unstable_isNewReconciler: !1
}, t3 = { readContext: Zn, useCallback: _g, useContext: Zn, useEffect: Ff, useImperativeHandle: yg, useInsertionEffect: mg, useLayoutEffect: vg, useMemo: wg, useReducer: tc, useRef: hg, useState: function() {
  return tc(Hl);
}, useDebugValue: jf, useDeferredValue: function(e) {
  var n = qn();
  return Ve === null ? n.memoizedState = e : xg(n, Ve.memoizedState, e);
}, useTransition: function() {
  var e = tc(Hl)[0], n = qn().memoizedState;
  return [e, n];
}, useMutableSource: og, useSyncExternalStore: sg, useId: Sg, unstable_isNewReconciler: !1 };
function lt(e, n) {
  if (e && e.defaultProps) {
    n = Ae({}, n), e = e.defaultProps;
    for (var r in e) n[r] === void 0 && (n[r] = e[r]);
    return n;
  }
  return n;
}
function Mc(e, n, r, l) {
  n = e.memoizedState, r = r(l, n), r = r == null ? n : Ae({}, n, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
}
var is = { isMounted: function(e) {
  return (e = e._reactInternals) ? Gr(e) === e : !1;
}, enqueueSetState: function(e, n, r) {
  e = e._reactInternals;
  var l = dn(), o = mr(e), s = jt(l, o);
  s.payload = n, r != null && (s.callback = r), n = pr(e, s, o), n !== null && (at(n, e, o, l), vo(n, e, o));
}, enqueueReplaceState: function(e, n, r) {
  e = e._reactInternals;
  var l = dn(), o = mr(e), s = jt(l, o);
  s.tag = 1, s.payload = n, r != null && (s.callback = r), n = pr(e, s, o), n !== null && (at(n, e, o, l), vo(n, e, o));
}, enqueueForceUpdate: function(e, n) {
  e = e._reactInternals;
  var r = dn(), l = mr(e), o = jt(r, l);
  o.tag = 2, n != null && (o.callback = n), n = pr(e, o, l), n !== null && (at(n, e, l, r), vo(n, e, l));
} };
function wm(e, n, r, l, o, s, c) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, s, c) : n.prototype && n.prototype.isPureReactComponent ? !Ml(r, l) || !Ml(o, s) : !0;
}
function Ng(e, n, r) {
  var l = !1, o = _r, s = n.contextType;
  return typeof s == "object" && s !== null ? s = Zn(s) : (o = Sn(n) ? Ur : on.current, l = n.contextTypes, s = (l = l != null) ? Ii(e, o) : _r), n = new n(r, s), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = is, e.stateNode = n, n._reactInternals = e, l && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = s), n;
}
function xm(e, n, r, l) {
  e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(r, l), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(r, l), n.state !== e && is.enqueueReplaceState(n, n.state, null);
}
function Fc(e, n, r, l) {
  var o = e.stateNode;
  o.props = r, o.state = e.memoizedState, o.refs = {}, If(e);
  var s = n.contextType;
  typeof s == "object" && s !== null ? o.context = Zn(s) : (s = Sn(n) ? Ur : on.current, o.context = Ii(e, s)), o.state = e.memoizedState, s = n.getDerivedStateFromProps, typeof s == "function" && (Mc(e, n, s, r), o.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (n = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), n !== o.state && is.enqueueReplaceState(o, o.state, null), jo(e, r, o, l), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Di(e, n) {
  try {
    var r = "", l = n;
    do
      r += RE(l), l = l.return;
    while (l);
    var o = r;
  } catch (s) {
    o = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: n, stack: o, digest: null };
}
function rc(e, n, r) {
  return { value: e, source: null, stack: r ?? null, digest: n ?? null };
}
function jc(e, n) {
  try {
    console.error(n.value);
  } catch (r) {
    setTimeout(function() {
      throw r;
    });
  }
}
var r3 = typeof WeakMap == "function" ? WeakMap : Map;
function Pg(e, n, r) {
  r = jt(-1, r), r.tag = 3, r.payload = { element: null };
  var l = n.value;
  return r.callback = function() {
    Ho || (Ho = !0, Xc = l), jc(e, n);
  }, r;
}
function Tg(e, n, r) {
  r = jt(-1, r), r.tag = 3;
  var l = e.type.getDerivedStateFromError;
  if (typeof l == "function") {
    var o = n.value;
    r.payload = function() {
      return l(o);
    }, r.callback = function() {
      jc(e, n);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (r.callback = function() {
    jc(e, n), typeof l != "function" && (hr === null ? hr = /* @__PURE__ */ new Set([this]) : hr.add(this));
    var c = n.stack;
    this.componentDidCatch(n.value, { componentStack: c !== null ? c : "" });
  }), r;
}
function Sm(e, n, r) {
  var l = e.pingCache;
  if (l === null) {
    l = e.pingCache = new r3();
    var o = /* @__PURE__ */ new Set();
    l.set(n, o);
  } else o = l.get(n), o === void 0 && (o = /* @__PURE__ */ new Set(), l.set(n, o));
  o.has(r) || (o.add(r), e = g3.bind(null, e, n, r), n.then(e, e));
}
function Em(e) {
  do {
    var n;
    if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function km(e, n, r, l, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (n = jt(-1, 1), n.tag = 2, pr(r, n, 1))), r.lanes |= 1), e);
}
var i3 = Vt.ReactCurrentOwner, wn = !1;
function fn(e, n, r, l) {
  n.child = e === null ? rg(n, null, r, l) : Ai(n, e.child, r, l);
}
function Cm(e, n, r, l, o) {
  r = r.render;
  var s = n.ref;
  return Ti(n, o), l = zf(e, n, r, l, s, o), r = Mf(), e !== null && !wn ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~o, Wt(e, n, o)) : (Le && r && kf(n), n.flags |= 1, fn(e, n, l, o), n.child);
}
function Nm(e, n, r, l, o) {
  if (e === null) {
    var s = r.type;
    return typeof s == "function" && !Qf(s) && s.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (n.tag = 15, n.type = s, Lg(e, n, s, l, o)) : (e = So(r.type, null, l, n, n.mode, o), e.ref = n.ref, e.return = n, n.child = e);
  }
  if (s = e.child, !(e.lanes & o)) {
    var c = s.memoizedProps;
    if (r = r.compare, r = r !== null ? r : Ml, r(c, l) && e.ref === n.ref) return Wt(e, n, o);
  }
  return n.flags |= 1, e = vr(s, l), e.ref = n.ref, e.return = n, n.child = e;
}
function Lg(e, n, r, l, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Ml(s, l) && e.ref === n.ref) if (wn = !1, n.pendingProps = l = s, (e.lanes & o) !== 0) e.flags & 131072 && (wn = !0);
    else return n.lanes = e.lanes, Wt(e, n, o);
  }
  return Uc(e, n, r, l, o);
}
function Rg(e, n, r) {
  var l = n.pendingProps, o = l.children, s = e !== null ? e.memoizedState : null;
  if (l.mode === "hidden") if (!(n.mode & 1)) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ke(Ei, In), In |= r;
  else {
    if (!(r & 1073741824)) return e = s !== null ? s.baseLanes | r : r, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, ke(Ei, In), In |= e, null;
    n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, l = s !== null ? s.baseLanes : r, ke(Ei, In), In |= l;
  }
  else s !== null ? (l = s.baseLanes | r, n.memoizedState = null) : l = r, ke(Ei, In), In |= l;
  return fn(e, n, o, r), n.child;
}
function Ig(e, n) {
  var r = n.ref;
  (e === null && r !== null || e !== null && e.ref !== r) && (n.flags |= 512, n.flags |= 2097152);
}
function Uc(e, n, r, l, o) {
  var s = Sn(r) ? Ur : on.current;
  return s = Ii(n, s), Ti(n, o), r = zf(e, n, r, l, s, o), l = Mf(), e !== null && !wn ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~o, Wt(e, n, o)) : (Le && l && kf(n), n.flags |= 1, fn(e, n, r, o), n.child);
}
function Pm(e, n, r, l, o) {
  if (Sn(r)) {
    var s = !0;
    Oo(n);
  } else s = !1;
  if (Ti(n, o), n.stateNode === null) _o(e, n), Ng(n, r, l), Fc(n, r, l, o), l = !0;
  else if (e === null) {
    var c = n.stateNode, d = n.memoizedProps;
    c.props = d;
    var p = c.context, y = r.contextType;
    typeof y == "object" && y !== null ? y = Zn(y) : (y = Sn(r) ? Ur : on.current, y = Ii(n, y));
    var k = r.getDerivedStateFromProps, S = typeof k == "function" || typeof c.getSnapshotBeforeUpdate == "function";
    S || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (d !== l || p !== y) && xm(n, c, l, y), rr = !1;
    var C = n.memoizedState;
    c.state = C, jo(n, l, c, o), p = n.memoizedState, d !== l || C !== p || xn.current || rr ? (typeof k == "function" && (Mc(n, r, k, l), p = n.memoizedState), (d = rr || wm(n, r, d, l, C, p, y)) ? (S || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = l, n.memoizedState = p), c.props = l, c.state = p, c.context = y, l = d) : (typeof c.componentDidMount == "function" && (n.flags |= 4194308), l = !1);
  } else {
    c = n.stateNode, lg(e, n), d = n.memoizedProps, y = n.type === n.elementType ? d : lt(n.type, d), c.props = y, S = n.pendingProps, C = c.context, p = r.contextType, typeof p == "object" && p !== null ? p = Zn(p) : (p = Sn(r) ? Ur : on.current, p = Ii(n, p));
    var R = r.getDerivedStateFromProps;
    (k = typeof R == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (d !== S || C !== p) && xm(n, c, l, p), rr = !1, C = n.memoizedState, c.state = C, jo(n, l, c, o);
    var L = n.memoizedState;
    d !== S || C !== L || xn.current || rr ? (typeof R == "function" && (Mc(n, r, R, l), L = n.memoizedState), (y = rr || wm(n, r, y, l, C, L, p) || !1) ? (k || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(l, L, p), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(l, L, p)), typeof c.componentDidUpdate == "function" && (n.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (n.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (n.flags |= 1024), n.memoizedProps = l, n.memoizedState = L), c.props = l, c.state = L, c.context = p, l = y) : (typeof c.componentDidUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (n.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (n.flags |= 1024), l = !1);
  }
  return Bc(e, n, r, l, s, o);
}
function Bc(e, n, r, l, o, s) {
  Ig(e, n);
  var c = (n.flags & 128) !== 0;
  if (!l && !c) return o && dm(n, r, !1), Wt(e, n, s);
  l = n.stateNode, i3.current = n;
  var d = c && typeof r.getDerivedStateFromError != "function" ? null : l.render();
  return n.flags |= 1, e !== null && c ? (n.child = Ai(n, e.child, null, s), n.child = Ai(n, null, d, s)) : fn(e, n, d, s), n.memoizedState = l.state, o && dm(n, r, !0), n.child;
}
function $g(e) {
  var n = e.stateNode;
  n.pendingContext ? fm(e, n.pendingContext, n.pendingContext !== n.context) : n.context && fm(e, n.context, !1), $f(e, n.containerInfo);
}
function Tm(e, n, r, l, o) {
  return $i(), Nf(o), n.flags |= 256, fn(e, n, r, l), n.child;
}
var Kc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Wc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ag(e, n, r) {
  var l = n.pendingProps, o = Ie.current, s = !1, c = (n.flags & 128) !== 0, d;
  if ((d = c) || (d = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), d ? (s = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ke(Ie, o & 1), e === null)
    return Dc(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (c = l.children, e = l.fallback, s ? (l = n.mode, s = n.child, c = { mode: "hidden", children: c }, !(l & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = c) : s = os(c, l, 0, null), e = jr(e, l, r, null), s.return = n, e.return = n, s.sibling = e, n.child = s, n.child.memoizedState = Wc(r), n.memoizedState = Kc, e) : Uf(n, c));
  if (o = e.memoizedState, o !== null && (d = o.dehydrated, d !== null)) return l3(e, n, c, l, d, o, r);
  if (s) {
    s = l.fallback, c = n.mode, o = e.child, d = o.sibling;
    var p = { mode: "hidden", children: l.children };
    return !(c & 1) && n.child !== o ? (l = n.child, l.childLanes = 0, l.pendingProps = p, n.deletions = null) : (l = vr(o, p), l.subtreeFlags = o.subtreeFlags & 14680064), d !== null ? s = vr(d, s) : (s = jr(s, c, r, null), s.flags |= 2), s.return = n, l.return = n, l.sibling = s, n.child = l, l = s, s = n.child, c = e.child.memoizedState, c = c === null ? Wc(r) : { baseLanes: c.baseLanes | r, cachePool: null, transitions: c.transitions }, s.memoizedState = c, s.childLanes = e.childLanes & ~r, n.memoizedState = Kc, l;
  }
  return s = e.child, e = s.sibling, l = vr(s, { mode: "visible", children: l.children }), !(n.mode & 1) && (l.lanes = r), l.return = n, l.sibling = null, e !== null && (r = n.deletions, r === null ? (n.deletions = [e], n.flags |= 16) : r.push(e)), n.child = l, n.memoizedState = null, l;
}
function Uf(e, n) {
  return n = os({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
}
function ro(e, n, r, l) {
  return l !== null && Nf(l), Ai(n, e.child, null, r), e = Uf(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
}
function l3(e, n, r, l, o, s, c) {
  if (r)
    return n.flags & 256 ? (n.flags &= -257, l = rc(Error(j(422))), ro(e, n, c, l)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (s = l.fallback, o = n.mode, l = os({ mode: "visible", children: l.children }, o, 0, null), s = jr(s, o, c, null), s.flags |= 2, l.return = n, s.return = n, l.sibling = s, n.child = l, n.mode & 1 && Ai(n, e.child, null, c), n.child.memoizedState = Wc(c), n.memoizedState = Kc, s);
  if (!(n.mode & 1)) return ro(e, n, c, null);
  if (o.data === "$!") {
    if (l = o.nextSibling && o.nextSibling.dataset, l) var d = l.dgst;
    return l = d, s = Error(j(419)), l = rc(s, l, void 0), ro(e, n, c, l);
  }
  if (d = (c & e.childLanes) !== 0, wn || d) {
    if (l = Xe, l !== null) {
      switch (c & -c) {
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
      o = o & (l.suspendedLanes | c) ? 0 : o, o !== 0 && o !== s.retryLane && (s.retryLane = o, Kt(e, o), at(l, e, o, -1));
    }
    return Gf(), l = rc(Error(j(421))), ro(e, n, c, l);
  }
  return o.data === "$?" ? (n.flags |= 128, n.child = e.child, n = y3.bind(null, e), o._reactRetry = n, null) : (e = s.treeContext, $n = dr(o.nextSibling), An = n, Le = !0, ot = null, e !== null && (Gn[Qn++] = Mt, Gn[Qn++] = Ft, Gn[Qn++] = Br, Mt = e.id, Ft = e.overflow, Br = n), n = Uf(n, l.children), n.flags |= 4096, n);
}
function Lm(e, n, r) {
  e.lanes |= n;
  var l = e.alternate;
  l !== null && (l.lanes |= n), zc(e.return, n, r);
}
function ic(e, n, r, l, o) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: l, tail: r, tailMode: o } : (s.isBackwards = n, s.rendering = null, s.renderingStartTime = 0, s.last = l, s.tail = r, s.tailMode = o);
}
function Og(e, n, r) {
  var l = n.pendingProps, o = l.revealOrder, s = l.tail;
  if (fn(e, n, l.children, r), l = Ie.current, l & 2) l = l & 1 | 2, n.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = n.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Lm(e, r, n);
      else if (e.tag === 19) Lm(e, r, n);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === n) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === n) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    l &= 1;
  }
  if (ke(Ie, l), !(n.mode & 1)) n.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (r = n.child, o = null; r !== null; ) e = r.alternate, e !== null && Uo(e) === null && (o = r), r = r.sibling;
      r = o, r === null ? (o = n.child, n.child = null) : (o = r.sibling, r.sibling = null), ic(n, !1, o, r, s);
      break;
    case "backwards":
      for (r = null, o = n.child, n.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Uo(e) === null) {
          n.child = o;
          break;
        }
        e = o.sibling, o.sibling = r, r = o, o = e;
      }
      ic(n, !0, r, null, s);
      break;
    case "together":
      ic(n, !1, null, null, void 0);
      break;
    default:
      n.memoizedState = null;
  }
  return n.child;
}
function _o(e, n) {
  !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
}
function Wt(e, n, r) {
  if (e !== null && (n.dependencies = e.dependencies), Wr |= n.lanes, !(r & n.childLanes)) return null;
  if (e !== null && n.child !== e.child) throw Error(j(153));
  if (n.child !== null) {
    for (e = n.child, r = vr(e, e.pendingProps), n.child = r, r.return = n; e.sibling !== null; ) e = e.sibling, r = r.sibling = vr(e, e.pendingProps), r.return = n;
    r.sibling = null;
  }
  return n.child;
}
function u3(e, n, r) {
  switch (n.tag) {
    case 3:
      $g(n), $i();
      break;
    case 5:
      ug(n);
      break;
    case 1:
      Sn(n.type) && Oo(n);
      break;
    case 4:
      $f(n, n.stateNode.containerInfo);
      break;
    case 10:
      var l = n.type._context, o = n.memoizedProps.value;
      ke(Mo, l._currentValue), l._currentValue = o;
      break;
    case 13:
      if (l = n.memoizedState, l !== null)
        return l.dehydrated !== null ? (ke(Ie, Ie.current & 1), n.flags |= 128, null) : r & n.child.childLanes ? Ag(e, n, r) : (ke(Ie, Ie.current & 1), e = Wt(e, n, r), e !== null ? e.sibling : null);
      ke(Ie, Ie.current & 1);
      break;
    case 19:
      if (l = (r & n.childLanes) !== 0, e.flags & 128) {
        if (l) return Og(e, n, r);
        n.flags |= 128;
      }
      if (o = n.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ke(Ie, Ie.current), l) break;
      return null;
    case 22:
    case 23:
      return n.lanes = 0, Rg(e, n, r);
  }
  return Wt(e, n, r);
}
var Dg, Hc, zg, Mg;
Dg = function(e, n) {
  for (var r = n.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      r.child.return = r, r = r.child;
      continue;
    }
    if (r === n) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === n) return;
      r = r.return;
    }
    r.sibling.return = r.return, r = r.sibling;
  }
};
Hc = function() {
};
zg = function(e, n, r, l) {
  var o = e.memoizedProps;
  if (o !== l) {
    e = n.stateNode, Mr(St.current);
    var s = null;
    switch (r) {
      case "input":
        o = dc(e, o), l = dc(e, l), s = [];
        break;
      case "select":
        o = Ae({}, o, { value: void 0 }), l = Ae({}, l, { value: void 0 }), s = [];
        break;
      case "textarea":
        o = mc(e, o), l = mc(e, l), s = [];
        break;
      default:
        typeof o.onClick != "function" && typeof l.onClick == "function" && (e.onclick = $o);
    }
    gc(r, l);
    var c;
    r = null;
    for (y in o) if (!l.hasOwnProperty(y) && o.hasOwnProperty(y) && o[y] != null) if (y === "style") {
      var d = o[y];
      for (c in d) d.hasOwnProperty(c) && (r || (r = {}), r[c] = "");
    } else y !== "dangerouslySetInnerHTML" && y !== "children" && y !== "suppressContentEditableWarning" && y !== "suppressHydrationWarning" && y !== "autoFocus" && (Rl.hasOwnProperty(y) ? s || (s = []) : (s = s || []).push(y, null));
    for (y in l) {
      var p = l[y];
      if (d = o != null ? o[y] : void 0, l.hasOwnProperty(y) && p !== d && (p != null || d != null)) if (y === "style") if (d) {
        for (c in d) !d.hasOwnProperty(c) || p && p.hasOwnProperty(c) || (r || (r = {}), r[c] = "");
        for (c in p) p.hasOwnProperty(c) && d[c] !== p[c] && (r || (r = {}), r[c] = p[c]);
      } else r || (s || (s = []), s.push(
        y,
        r
      )), r = p;
      else y === "dangerouslySetInnerHTML" ? (p = p ? p.__html : void 0, d = d ? d.__html : void 0, p != null && d !== p && (s = s || []).push(y, p)) : y === "children" ? typeof p != "string" && typeof p != "number" || (s = s || []).push(y, "" + p) : y !== "suppressContentEditableWarning" && y !== "suppressHydrationWarning" && (Rl.hasOwnProperty(y) ? (p != null && y === "onScroll" && Ne("scroll", e), s || d === p || (s = [])) : (s = s || []).push(y, p));
    }
    r && (s = s || []).push("style", r);
    var y = s;
    (n.updateQueue = y) && (n.flags |= 4);
  }
};
Mg = function(e, n, r, l) {
  r !== l && (n.flags |= 4);
};
function ml(e, n) {
  if (!Le) switch (e.tailMode) {
    case "hidden":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? e.tail = null : r.sibling = null;
      break;
    case "collapsed":
      r = e.tail;
      for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
      l === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
  }
}
function ln(e) {
  var n = e.alternate !== null && e.alternate.child === e.child, r = 0, l = 0;
  if (n) for (var o = e.child; o !== null; ) r |= o.lanes | o.childLanes, l |= o.subtreeFlags & 14680064, l |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) r |= o.lanes | o.childLanes, l |= o.subtreeFlags, l |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= l, e.childLanes = r, n;
}
function o3(e, n, r) {
  var l = n.pendingProps;
  switch (Cf(n), n.tag) {
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
      return ln(n), null;
    case 1:
      return Sn(n.type) && Ao(), ln(n), null;
    case 3:
      return l = n.stateNode, Oi(), Pe(xn), Pe(on), Of(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (no(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, ot !== null && (Jc(ot), ot = null))), Hc(e, n), ln(n), null;
    case 5:
      Af(n);
      var o = Mr(Kl.current);
      if (r = n.type, e !== null && n.stateNode != null) zg(e, n, r, l, o), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
      else {
        if (!l) {
          if (n.stateNode === null) throw Error(j(166));
          return ln(n), null;
        }
        if (e = Mr(St.current), no(n)) {
          l = n.stateNode, r = n.type;
          var s = n.memoizedProps;
          switch (l[_t] = n, l[Ul] = s, e = (n.mode & 1) !== 0, r) {
            case "dialog":
              Ne("cancel", l), Ne("close", l);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ne("load", l);
              break;
            case "video":
            case "audio":
              for (o = 0; o < wl.length; o++) Ne(wl[o], l);
              break;
            case "source":
              Ne("error", l);
              break;
            case "img":
            case "image":
            case "link":
              Ne(
                "error",
                l
              ), Ne("load", l);
              break;
            case "details":
              Ne("toggle", l);
              break;
            case "input":
              Fh(l, s), Ne("invalid", l);
              break;
            case "select":
              l._wrapperState = { wasMultiple: !!s.multiple }, Ne("invalid", l);
              break;
            case "textarea":
              Uh(l, s), Ne("invalid", l);
          }
          gc(r, s), o = null;
          for (var c in s) if (s.hasOwnProperty(c)) {
            var d = s[c];
            c === "children" ? typeof d == "string" ? l.textContent !== d && (s.suppressHydrationWarning !== !0 && eo(l.textContent, d, e), o = ["children", d]) : typeof d == "number" && l.textContent !== "" + d && (s.suppressHydrationWarning !== !0 && eo(
              l.textContent,
              d,
              e
            ), o = ["children", "" + d]) : Rl.hasOwnProperty(c) && d != null && c === "onScroll" && Ne("scroll", l);
          }
          switch (r) {
            case "input":
              Gu(l), jh(l, s, !0);
              break;
            case "textarea":
              Gu(l), Bh(l);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (l.onclick = $o);
          }
          l = o, n.updateQueue = l, l !== null && (n.flags |= 4);
        } else {
          c = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = fv(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof l.is == "string" ? e = c.createElement(r, { is: l.is }) : (e = c.createElement(r), r === "select" && (c = e, l.multiple ? c.multiple = !0 : l.size && (c.size = l.size))) : e = c.createElementNS(e, r), e[_t] = n, e[Ul] = l, Dg(e, n, !1, !1), n.stateNode = e;
          e: {
            switch (c = yc(r, l), r) {
              case "dialog":
                Ne("cancel", e), Ne("close", e), o = l;
                break;
              case "iframe":
              case "object":
              case "embed":
                Ne("load", e), o = l;
                break;
              case "video":
              case "audio":
                for (o = 0; o < wl.length; o++) Ne(wl[o], e);
                o = l;
                break;
              case "source":
                Ne("error", e), o = l;
                break;
              case "img":
              case "image":
              case "link":
                Ne(
                  "error",
                  e
                ), Ne("load", e), o = l;
                break;
              case "details":
                Ne("toggle", e), o = l;
                break;
              case "input":
                Fh(e, l), o = dc(e, l), Ne("invalid", e);
                break;
              case "option":
                o = l;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!l.multiple }, o = Ae({}, l, { value: void 0 }), Ne("invalid", e);
                break;
              case "textarea":
                Uh(e, l), o = mc(e, l), Ne("invalid", e);
                break;
              default:
                o = l;
            }
            gc(r, o), d = o;
            for (s in d) if (d.hasOwnProperty(s)) {
              var p = d[s];
              s === "style" ? hv(e, p) : s === "dangerouslySetInnerHTML" ? (p = p ? p.__html : void 0, p != null && dv(e, p)) : s === "children" ? typeof p == "string" ? (r !== "textarea" || p !== "") && Il(e, p) : typeof p == "number" && Il(e, "" + p) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Rl.hasOwnProperty(s) ? p != null && s === "onScroll" && Ne("scroll", e) : p != null && cf(e, s, p, c));
            }
            switch (r) {
              case "input":
                Gu(e), jh(e, l, !1);
                break;
              case "textarea":
                Gu(e), Bh(e);
                break;
              case "option":
                l.value != null && e.setAttribute("value", "" + yr(l.value));
                break;
              case "select":
                e.multiple = !!l.multiple, s = l.value, s != null ? ki(e, !!l.multiple, s, !1) : l.defaultValue != null && ki(
                  e,
                  !!l.multiple,
                  l.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = $o);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
          }
          l && (n.flags |= 4);
        }
        n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
      }
      return ln(n), null;
    case 6:
      if (e && n.stateNode != null) Mg(e, n, e.memoizedProps, l);
      else {
        if (typeof l != "string" && n.stateNode === null) throw Error(j(166));
        if (r = Mr(Kl.current), Mr(St.current), no(n)) {
          if (l = n.stateNode, r = n.memoizedProps, l[_t] = n, (s = l.nodeValue !== r) && (e = An, e !== null)) switch (e.tag) {
            case 3:
              eo(l.nodeValue, r, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && eo(l.nodeValue, r, (e.mode & 1) !== 0);
          }
          s && (n.flags |= 4);
        } else l = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(l), l[_t] = n, n.stateNode = l;
      }
      return ln(n), null;
    case 13:
      if (Pe(Ie), l = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Le && $n !== null && n.mode & 1 && !(n.flags & 128)) ng(), $i(), n.flags |= 98560, s = !1;
        else if (s = no(n), l !== null && l.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(j(318));
            if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(j(317));
            s[_t] = n;
          } else $i(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
          ln(n), s = !1;
        } else ot !== null && (Jc(ot), ot = null), s = !0;
        if (!s) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128 ? (n.lanes = r, n) : (l = l !== null, l !== (e !== null && e.memoizedState !== null) && l && (n.child.flags |= 8192, n.mode & 1 && (e === null || Ie.current & 1 ? Ge === 0 && (Ge = 3) : Gf())), n.updateQueue !== null && (n.flags |= 4), ln(n), null);
    case 4:
      return Oi(), Hc(e, n), e === null && Fl(n.stateNode.containerInfo), ln(n), null;
    case 10:
      return Lf(n.type._context), ln(n), null;
    case 17:
      return Sn(n.type) && Ao(), ln(n), null;
    case 19:
      if (Pe(Ie), s = n.memoizedState, s === null) return ln(n), null;
      if (l = (n.flags & 128) !== 0, c = s.rendering, c === null) if (l) ml(s, !1);
      else {
        if (Ge !== 0 || e !== null && e.flags & 128) for (e = n.child; e !== null; ) {
          if (c = Uo(e), c !== null) {
            for (n.flags |= 128, ml(s, !1), l = c.updateQueue, l !== null && (n.updateQueue = l, n.flags |= 4), n.subtreeFlags = 0, l = r, r = n.child; r !== null; ) s = r, e = l, s.flags &= 14680066, c = s.alternate, c === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = c.childLanes, s.lanes = c.lanes, s.child = c.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = c.memoizedProps, s.memoizedState = c.memoizedState, s.updateQueue = c.updateQueue, s.type = c.type, e = c.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
            return ke(Ie, Ie.current & 1 | 2), n.child;
          }
          e = e.sibling;
        }
        s.tail !== null && je() > zi && (n.flags |= 128, l = !0, ml(s, !1), n.lanes = 4194304);
      }
      else {
        if (!l) if (e = Uo(c), e !== null) {
          if (n.flags |= 128, l = !0, r = e.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), ml(s, !0), s.tail === null && s.tailMode === "hidden" && !c.alternate && !Le) return ln(n), null;
        } else 2 * je() - s.renderingStartTime > zi && r !== 1073741824 && (n.flags |= 128, l = !0, ml(s, !1), n.lanes = 4194304);
        s.isBackwards ? (c.sibling = n.child, n.child = c) : (r = s.last, r !== null ? r.sibling = c : n.child = c, s.last = c);
      }
      return s.tail !== null ? (n = s.tail, s.rendering = n, s.tail = n.sibling, s.renderingStartTime = je(), n.sibling = null, r = Ie.current, ke(Ie, l ? r & 1 | 2 : r & 1), n) : (ln(n), null);
    case 22:
    case 23:
      return Vf(), l = n.memoizedState !== null, e !== null && e.memoizedState !== null !== l && (n.flags |= 8192), l && n.mode & 1 ? In & 1073741824 && (ln(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ln(n), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, n.tag));
}
function s3(e, n) {
  switch (Cf(n), n.tag) {
    case 1:
      return Sn(n.type) && Ao(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 3:
      return Oi(), Pe(xn), Pe(on), Of(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
    case 5:
      return Af(n), null;
    case 13:
      if (Pe(Ie), e = n.memoizedState, e !== null && e.dehydrated !== null) {
        if (n.alternate === null) throw Error(j(340));
        $i();
      }
      return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 19:
      return Pe(Ie), null;
    case 4:
      return Oi(), null;
    case 10:
      return Lf(n.type._context), null;
    case 22:
    case 23:
      return Vf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var io = !1, un = !1, a3 = typeof WeakSet == "function" ? WeakSet : Set, Y = null;
function Si(e, n) {
  var r = e.ref;
  if (r !== null) if (typeof r == "function") try {
    r(null);
  } catch (l) {
    ze(e, n, l);
  }
  else r.current = null;
}
function Vc(e, n, r) {
  try {
    r();
  } catch (l) {
    ze(e, n, l);
  }
}
var Rm = !1;
function c3(e, n) {
  if (Tc = Lo, e = Kv(), Ef(e)) {
    if ("selectionStart" in e) var r = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      r = (r = e.ownerDocument) && r.defaultView || window;
      var l = r.getSelection && r.getSelection();
      if (l && l.rangeCount !== 0) {
        r = l.anchorNode;
        var o = l.anchorOffset, s = l.focusNode;
        l = l.focusOffset;
        try {
          r.nodeType, s.nodeType;
        } catch {
          r = null;
          break e;
        }
        var c = 0, d = -1, p = -1, y = 0, k = 0, S = e, C = null;
        n: for (; ; ) {
          for (var R; S !== r || o !== 0 && S.nodeType !== 3 || (d = c + o), S !== s || l !== 0 && S.nodeType !== 3 || (p = c + l), S.nodeType === 3 && (c += S.nodeValue.length), (R = S.firstChild) !== null; )
            C = S, S = R;
          for (; ; ) {
            if (S === e) break n;
            if (C === r && ++y === o && (d = c), C === s && ++k === l && (p = c), (R = S.nextSibling) !== null) break;
            S = C, C = S.parentNode;
          }
          S = R;
        }
        r = d === -1 || p === -1 ? null : { start: d, end: p };
      } else r = null;
    }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Lc = { focusedElem: e, selectionRange: r }, Lo = !1, Y = n; Y !== null; ) if (n = Y, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, Y = e;
  else for (; Y !== null; ) {
    n = Y;
    try {
      var L = n.alternate;
      if (n.flags & 1024) switch (n.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (L !== null) {
            var A = L.memoizedProps, V = L.memoizedState, _ = n.stateNode, v = _.getSnapshotBeforeUpdate(n.elementType === n.type ? A : lt(n.type, A), V);
            _.__reactInternalSnapshotBeforeUpdate = v;
          }
          break;
        case 3:
          var w = n.stateNode.containerInfo;
          w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(j(163));
      }
    } catch (I) {
      ze(n, n.return, I);
    }
    if (e = n.sibling, e !== null) {
      e.return = n.return, Y = e;
      break;
    }
    Y = n.return;
  }
  return L = Rm, Rm = !1, L;
}
function Pl(e, n, r) {
  var l = n.updateQueue;
  if (l = l !== null ? l.lastEffect : null, l !== null) {
    var o = l = l.next;
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        o.destroy = void 0, s !== void 0 && Vc(n, r, s);
      }
      o = o.next;
    } while (o !== l);
  }
}
function ls(e, n) {
  if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
    var r = n = n.next;
    do {
      if ((r.tag & e) === e) {
        var l = r.create;
        r.destroy = l();
      }
      r = r.next;
    } while (r !== n);
  }
}
function Gc(e) {
  var n = e.ref;
  if (n !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof n == "function" ? n(e) : n.current = e;
  }
}
function Fg(e) {
  var n = e.alternate;
  n !== null && (e.alternate = null, Fg(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[_t], delete n[Ul], delete n[$c], delete n[Gk], delete n[Qk])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function jg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Im(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || jg(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Qc(e, n, r) {
  var l = e.tag;
  if (l === 5 || l === 6) e = e.stateNode, n ? r.nodeType === 8 ? r.parentNode.insertBefore(e, n) : r.insertBefore(e, n) : (r.nodeType === 8 ? (n = r.parentNode, n.insertBefore(e, r)) : (n = r, n.appendChild(e)), r = r._reactRootContainer, r != null || n.onclick !== null || (n.onclick = $o));
  else if (l !== 4 && (e = e.child, e !== null)) for (Qc(e, n, r), e = e.sibling; e !== null; ) Qc(e, n, r), e = e.sibling;
}
function Yc(e, n, r) {
  var l = e.tag;
  if (l === 5 || l === 6) e = e.stateNode, n ? r.insertBefore(e, n) : r.appendChild(e);
  else if (l !== 4 && (e = e.child, e !== null)) for (Yc(e, n, r), e = e.sibling; e !== null; ) Yc(e, n, r), e = e.sibling;
}
var Je = null, ut = !1;
function nr(e, n, r) {
  for (r = r.child; r !== null; ) Ug(e, n, r), r = r.sibling;
}
function Ug(e, n, r) {
  if (xt && typeof xt.onCommitFiberUnmount == "function") try {
    xt.onCommitFiberUnmount(qo, r);
  } catch {
  }
  switch (r.tag) {
    case 5:
      un || Si(r, n);
    case 6:
      var l = Je, o = ut;
      Je = null, nr(e, n, r), Je = l, ut = o, Je !== null && (ut ? (e = Je, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : Je.removeChild(r.stateNode));
      break;
    case 18:
      Je !== null && (ut ? (e = Je, r = r.stateNode, e.nodeType === 8 ? qa(e.parentNode, r) : e.nodeType === 1 && qa(e, r), Dl(e)) : qa(Je, r.stateNode));
      break;
    case 4:
      l = Je, o = ut, Je = r.stateNode.containerInfo, ut = !0, nr(e, n, r), Je = l, ut = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!un && (l = r.updateQueue, l !== null && (l = l.lastEffect, l !== null))) {
        o = l = l.next;
        do {
          var s = o, c = s.destroy;
          s = s.tag, c !== void 0 && (s & 2 || s & 4) && Vc(r, n, c), o = o.next;
        } while (o !== l);
      }
      nr(e, n, r);
      break;
    case 1:
      if (!un && (Si(r, n), l = r.stateNode, typeof l.componentWillUnmount == "function")) try {
        l.props = r.memoizedProps, l.state = r.memoizedState, l.componentWillUnmount();
      } catch (d) {
        ze(r, n, d);
      }
      nr(e, n, r);
      break;
    case 21:
      nr(e, n, r);
      break;
    case 22:
      r.mode & 1 ? (un = (l = un) || r.memoizedState !== null, nr(e, n, r), un = l) : nr(e, n, r);
      break;
    default:
      nr(e, n, r);
  }
}
function $m(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new a3()), n.forEach(function(l) {
      var o = _3.bind(null, e, l);
      r.has(l) || (r.add(l), l.then(o, o));
    });
  }
}
function it(e, n) {
  var r = n.deletions;
  if (r !== null) for (var l = 0; l < r.length; l++) {
    var o = r[l];
    try {
      var s = e, c = n, d = c;
      e: for (; d !== null; ) {
        switch (d.tag) {
          case 5:
            Je = d.stateNode, ut = !1;
            break e;
          case 3:
            Je = d.stateNode.containerInfo, ut = !0;
            break e;
          case 4:
            Je = d.stateNode.containerInfo, ut = !0;
            break e;
        }
        d = d.return;
      }
      if (Je === null) throw Error(j(160));
      Ug(s, c, o), Je = null, ut = !1;
      var p = o.alternate;
      p !== null && (p.return = null), o.return = null;
    } catch (y) {
      ze(o, n, y);
    }
  }
  if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) Bg(n, e), n = n.sibling;
}
function Bg(e, n) {
  var r = e.alternate, l = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (it(n, e), gt(e), l & 4) {
        try {
          Pl(3, e, e.return), ls(3, e);
        } catch (A) {
          ze(e, e.return, A);
        }
        try {
          Pl(5, e, e.return);
        } catch (A) {
          ze(e, e.return, A);
        }
      }
      break;
    case 1:
      it(n, e), gt(e), l & 512 && r !== null && Si(r, r.return);
      break;
    case 5:
      if (it(n, e), gt(e), l & 512 && r !== null && Si(r, r.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Il(o, "");
        } catch (A) {
          ze(e, e.return, A);
        }
      }
      if (l & 4 && (o = e.stateNode, o != null)) {
        var s = e.memoizedProps, c = r !== null ? r.memoizedProps : s, d = e.type, p = e.updateQueue;
        if (e.updateQueue = null, p !== null) try {
          d === "input" && s.type === "radio" && s.name != null && av(o, s), yc(d, c);
          var y = yc(d, s);
          for (c = 0; c < p.length; c += 2) {
            var k = p[c], S = p[c + 1];
            k === "style" ? hv(o, S) : k === "dangerouslySetInnerHTML" ? dv(o, S) : k === "children" ? Il(o, S) : cf(o, k, S, y);
          }
          switch (d) {
            case "input":
              pc(o, s);
              break;
            case "textarea":
              cv(o, s);
              break;
            case "select":
              var C = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!s.multiple;
              var R = s.value;
              R != null ? ki(o, !!s.multiple, R, !1) : C !== !!s.multiple && (s.defaultValue != null ? ki(
                o,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : ki(o, !!s.multiple, s.multiple ? [] : "", !1));
          }
          o[Ul] = s;
        } catch (A) {
          ze(e, e.return, A);
        }
      }
      break;
    case 6:
      if (it(n, e), gt(e), l & 4) {
        if (e.stateNode === null) throw Error(j(162));
        o = e.stateNode, s = e.memoizedProps;
        try {
          o.nodeValue = s;
        } catch (A) {
          ze(e, e.return, A);
        }
      }
      break;
    case 3:
      if (it(n, e), gt(e), l & 4 && r !== null && r.memoizedState.isDehydrated) try {
        Dl(n.containerInfo);
      } catch (A) {
        ze(e, e.return, A);
      }
      break;
    case 4:
      it(n, e), gt(e);
      break;
    case 13:
      it(n, e), gt(e), o = e.child, o.flags & 8192 && (s = o.memoizedState !== null, o.stateNode.isHidden = s, !s || o.alternate !== null && o.alternate.memoizedState !== null || (Wf = je())), l & 4 && $m(e);
      break;
    case 22:
      if (k = r !== null && r.memoizedState !== null, e.mode & 1 ? (un = (y = un) || k, it(n, e), un = y) : it(n, e), gt(e), l & 8192) {
        if (y = e.memoizedState !== null, (e.stateNode.isHidden = y) && !k && e.mode & 1) for (Y = e, k = e.child; k !== null; ) {
          for (S = Y = k; Y !== null; ) {
            switch (C = Y, R = C.child, C.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Pl(4, C, C.return);
                break;
              case 1:
                Si(C, C.return);
                var L = C.stateNode;
                if (typeof L.componentWillUnmount == "function") {
                  l = C, r = C.return;
                  try {
                    n = l, L.props = n.memoizedProps, L.state = n.memoizedState, L.componentWillUnmount();
                  } catch (A) {
                    ze(l, r, A);
                  }
                }
                break;
              case 5:
                Si(C, C.return);
                break;
              case 22:
                if (C.memoizedState !== null) {
                  Om(S);
                  continue;
                }
            }
            R !== null ? (R.return = C, Y = R) : Om(S);
          }
          k = k.sibling;
        }
        e: for (k = null, S = e; ; ) {
          if (S.tag === 5) {
            if (k === null) {
              k = S;
              try {
                o = S.stateNode, y ? (s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (d = S.stateNode, p = S.memoizedProps.style, c = p != null && p.hasOwnProperty("display") ? p.display : null, d.style.display = pv("display", c));
              } catch (A) {
                ze(e, e.return, A);
              }
            }
          } else if (S.tag === 6) {
            if (k === null) try {
              S.stateNode.nodeValue = y ? "" : S.memoizedProps;
            } catch (A) {
              ze(e, e.return, A);
            }
          } else if ((S.tag !== 22 && S.tag !== 23 || S.memoizedState === null || S === e) && S.child !== null) {
            S.child.return = S, S = S.child;
            continue;
          }
          if (S === e) break e;
          for (; S.sibling === null; ) {
            if (S.return === null || S.return === e) break e;
            k === S && (k = null), S = S.return;
          }
          k === S && (k = null), S.sibling.return = S.return, S = S.sibling;
        }
      }
      break;
    case 19:
      it(n, e), gt(e), l & 4 && $m(e);
      break;
    case 21:
      break;
    default:
      it(
        n,
        e
      ), gt(e);
  }
}
function gt(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (jg(r)) {
            var l = r;
            break e;
          }
          r = r.return;
        }
        throw Error(j(160));
      }
      switch (l.tag) {
        case 5:
          var o = l.stateNode;
          l.flags & 32 && (Il(o, ""), l.flags &= -33);
          var s = Im(e);
          Yc(e, s, o);
          break;
        case 3:
        case 4:
          var c = l.stateNode.containerInfo, d = Im(e);
          Qc(e, d, c);
          break;
        default:
          throw Error(j(161));
      }
    } catch (p) {
      ze(e, e.return, p);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function f3(e, n, r) {
  Y = e, Kg(e);
}
function Kg(e, n, r) {
  for (var l = (e.mode & 1) !== 0; Y !== null; ) {
    var o = Y, s = o.child;
    if (o.tag === 22 && l) {
      var c = o.memoizedState !== null || io;
      if (!c) {
        var d = o.alternate, p = d !== null && d.memoizedState !== null || un;
        d = io;
        var y = un;
        if (io = c, (un = p) && !y) for (Y = o; Y !== null; ) c = Y, p = c.child, c.tag === 22 && c.memoizedState !== null ? Dm(o) : p !== null ? (p.return = c, Y = p) : Dm(o);
        for (; s !== null; ) Y = s, Kg(s), s = s.sibling;
        Y = o, io = d, un = y;
      }
      Am(e);
    } else o.subtreeFlags & 8772 && s !== null ? (s.return = o, Y = s) : Am(e);
  }
}
function Am(e) {
  for (; Y !== null; ) {
    var n = Y;
    if (n.flags & 8772) {
      var r = n.alternate;
      try {
        if (n.flags & 8772) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            un || ls(5, n);
            break;
          case 1:
            var l = n.stateNode;
            if (n.flags & 4 && !un) if (r === null) l.componentDidMount();
            else {
              var o = n.elementType === n.type ? r.memoizedProps : lt(n.type, r.memoizedProps);
              l.componentDidUpdate(o, r.memoizedState, l.__reactInternalSnapshotBeforeUpdate);
            }
            var s = n.updateQueue;
            s !== null && gm(n, s, l);
            break;
          case 3:
            var c = n.updateQueue;
            if (c !== null) {
              if (r = null, n.child !== null) switch (n.child.tag) {
                case 5:
                  r = n.child.stateNode;
                  break;
                case 1:
                  r = n.child.stateNode;
              }
              gm(n, c, r);
            }
            break;
          case 5:
            var d = n.stateNode;
            if (r === null && n.flags & 4) {
              r = d;
              var p = n.memoizedProps;
              switch (n.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  p.autoFocus && r.focus();
                  break;
                case "img":
                  p.src && (r.src = p.src);
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
            if (n.memoizedState === null) {
              var y = n.alternate;
              if (y !== null) {
                var k = y.memoizedState;
                if (k !== null) {
                  var S = k.dehydrated;
                  S !== null && Dl(S);
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
            throw Error(j(163));
        }
        un || n.flags & 512 && Gc(n);
      } catch (C) {
        ze(n, n.return, C);
      }
    }
    if (n === e) {
      Y = null;
      break;
    }
    if (r = n.sibling, r !== null) {
      r.return = n.return, Y = r;
      break;
    }
    Y = n.return;
  }
}
function Om(e) {
  for (; Y !== null; ) {
    var n = Y;
    if (n === e) {
      Y = null;
      break;
    }
    var r = n.sibling;
    if (r !== null) {
      r.return = n.return, Y = r;
      break;
    }
    Y = n.return;
  }
}
function Dm(e) {
  for (; Y !== null; ) {
    var n = Y;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var r = n.return;
          try {
            ls(4, n);
          } catch (p) {
            ze(n, r, p);
          }
          break;
        case 1:
          var l = n.stateNode;
          if (typeof l.componentDidMount == "function") {
            var o = n.return;
            try {
              l.componentDidMount();
            } catch (p) {
              ze(n, o, p);
            }
          }
          var s = n.return;
          try {
            Gc(n);
          } catch (p) {
            ze(n, s, p);
          }
          break;
        case 5:
          var c = n.return;
          try {
            Gc(n);
          } catch (p) {
            ze(n, c, p);
          }
      }
    } catch (p) {
      ze(n, n.return, p);
    }
    if (n === e) {
      Y = null;
      break;
    }
    var d = n.sibling;
    if (d !== null) {
      d.return = n.return, Y = d;
      break;
    }
    Y = n.return;
  }
}
var d3 = Math.ceil, Wo = Vt.ReactCurrentDispatcher, Bf = Vt.ReactCurrentOwner, Xn = Vt.ReactCurrentBatchConfig, me = 0, Xe = null, Ke = null, be = 0, In = 0, Ei = xr(0), Ge = 0, Gl = null, Wr = 0, us = 0, Kf = 0, Tl = null, _n = null, Wf = 0, zi = 1 / 0, Dt = null, Ho = !1, Xc = null, hr = null, lo = !1, sr = null, Vo = 0, Ll = 0, Zc = null, wo = -1, xo = 0;
function dn() {
  return me & 6 ? je() : wo !== -1 ? wo : wo = je();
}
function mr(e) {
  return e.mode & 1 ? me & 2 && be !== 0 ? be & -be : Xk.transition !== null ? (xo === 0 && (xo = Nv()), xo) : (e = we, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Av(e.type)), e) : 1;
}
function at(e, n, r, l) {
  if (50 < Ll) throw Ll = 0, Zc = null, Error(j(185));
  Yl(e, r, l), (!(me & 2) || e !== Xe) && (e === Xe && (!(me & 2) && (us |= r), Ge === 4 && lr(e, be)), En(e, l), r === 1 && me === 0 && !(n.mode & 1) && (zi = je() + 500, ts && Sr()));
}
function En(e, n) {
  var r = e.callbackNode;
  XE(e, n);
  var l = To(e, e === Xe ? be : 0);
  if (l === 0) r !== null && Hh(r), e.callbackNode = null, e.callbackPriority = 0;
  else if (n = l & -l, e.callbackPriority !== n) {
    if (r != null && Hh(r), n === 1) e.tag === 0 ? Yk(zm.bind(null, e)) : Jv(zm.bind(null, e)), Hk(function() {
      !(me & 6) && Sr();
    }), r = null;
    else {
      switch (Pv(l)) {
        case 1:
          r = mf;
          break;
        case 4:
          r = kv;
          break;
        case 16:
          r = Po;
          break;
        case 536870912:
          r = Cv;
          break;
        default:
          r = Po;
      }
      r = Zg(r, Wg.bind(null, e));
    }
    e.callbackPriority = n, e.callbackNode = r;
  }
}
function Wg(e, n) {
  if (wo = -1, xo = 0, me & 6) throw Error(j(327));
  var r = e.callbackNode;
  if (Li() && e.callbackNode !== r) return null;
  var l = To(e, e === Xe ? be : 0);
  if (l === 0) return null;
  if (l & 30 || l & e.expiredLanes || n) n = Go(e, l);
  else {
    n = l;
    var o = me;
    me |= 2;
    var s = Vg();
    (Xe !== e || be !== n) && (Dt = null, zi = je() + 500, Fr(e, n));
    do
      try {
        m3();
        break;
      } catch (d) {
        Hg(e, d);
      }
    while (!0);
    Tf(), Wo.current = s, me = o, Ke !== null ? n = 0 : (Xe = null, be = 0, n = Ge);
  }
  if (n !== 0) {
    if (n === 2 && (o = Ec(e), o !== 0 && (l = o, n = qc(e, o))), n === 1) throw r = Gl, Fr(e, 0), lr(e, l), En(e, je()), r;
    if (n === 6) lr(e, l);
    else {
      if (o = e.current.alternate, !(l & 30) && !p3(o) && (n = Go(e, l), n === 2 && (s = Ec(e), s !== 0 && (l = s, n = qc(e, s))), n === 1)) throw r = Gl, Fr(e, 0), lr(e, l), En(e, je()), r;
      switch (e.finishedWork = o, e.finishedLanes = l, n) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Or(e, _n, Dt);
          break;
        case 3:
          if (lr(e, l), (l & 130023424) === l && (n = Wf + 500 - je(), 10 < n)) {
            if (To(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & l) !== l) {
              dn(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Ic(Or.bind(null, e, _n, Dt), n);
            break;
          }
          Or(e, _n, Dt);
          break;
        case 4:
          if (lr(e, l), (l & 4194240) === l) break;
          for (n = e.eventTimes, o = -1; 0 < l; ) {
            var c = 31 - st(l);
            s = 1 << c, c = n[c], c > o && (o = c), l &= ~s;
          }
          if (l = o, l = je() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * d3(l / 1960)) - l, 10 < l) {
            e.timeoutHandle = Ic(Or.bind(null, e, _n, Dt), l);
            break;
          }
          Or(e, _n, Dt);
          break;
        case 5:
          Or(e, _n, Dt);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return En(e, je()), e.callbackNode === r ? Wg.bind(null, e) : null;
}
function qc(e, n) {
  var r = Tl;
  return e.current.memoizedState.isDehydrated && (Fr(e, n).flags |= 256), e = Go(e, n), e !== 2 && (n = _n, _n = r, n !== null && Jc(n)), e;
}
function Jc(e) {
  _n === null ? _n = e : _n.push.apply(_n, e);
}
function p3(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var r = n.updateQueue;
      if (r !== null && (r = r.stores, r !== null)) for (var l = 0; l < r.length; l++) {
        var o = r[l], s = o.getSnapshot;
        o = o.value;
        try {
          if (!ft(s(), o)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (r = n.child, n.subtreeFlags & 16384 && r !== null) r.return = n, n = r;
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }
  return !0;
}
function lr(e, n) {
  for (n &= ~Kf, n &= ~us, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
    var r = 31 - st(n), l = 1 << r;
    e[r] = -1, n &= ~l;
  }
}
function zm(e) {
  if (me & 6) throw Error(j(327));
  Li();
  var n = To(e, 0);
  if (!(n & 1)) return En(e, je()), null;
  var r = Go(e, n);
  if (e.tag !== 0 && r === 2) {
    var l = Ec(e);
    l !== 0 && (n = l, r = qc(e, l));
  }
  if (r === 1) throw r = Gl, Fr(e, 0), lr(e, n), En(e, je()), r;
  if (r === 6) throw Error(j(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = n, Or(e, _n, Dt), En(e, je()), null;
}
function Hf(e, n) {
  var r = me;
  me |= 1;
  try {
    return e(n);
  } finally {
    me = r, me === 0 && (zi = je() + 500, ts && Sr());
  }
}
function Hr(e) {
  sr !== null && sr.tag === 0 && !(me & 6) && Li();
  var n = me;
  me |= 1;
  var r = Xn.transition, l = we;
  try {
    if (Xn.transition = null, we = 1, e) return e();
  } finally {
    we = l, Xn.transition = r, me = n, !(me & 6) && Sr();
  }
}
function Vf() {
  In = Ei.current, Pe(Ei);
}
function Fr(e, n) {
  e.finishedWork = null, e.finishedLanes = 0;
  var r = e.timeoutHandle;
  if (r !== -1 && (e.timeoutHandle = -1, Wk(r)), Ke !== null) for (r = Ke.return; r !== null; ) {
    var l = r;
    switch (Cf(l), l.tag) {
      case 1:
        l = l.type.childContextTypes, l != null && Ao();
        break;
      case 3:
        Oi(), Pe(xn), Pe(on), Of();
        break;
      case 5:
        Af(l);
        break;
      case 4:
        Oi();
        break;
      case 13:
        Pe(Ie);
        break;
      case 19:
        Pe(Ie);
        break;
      case 10:
        Lf(l.type._context);
        break;
      case 22:
      case 23:
        Vf();
    }
    r = r.return;
  }
  if (Xe = e, Ke = e = vr(e.current, null), be = In = n, Ge = 0, Gl = null, Kf = us = Wr = 0, _n = Tl = null, zr !== null) {
    for (n = 0; n < zr.length; n++) if (r = zr[n], l = r.interleaved, l !== null) {
      r.interleaved = null;
      var o = l.next, s = r.pending;
      if (s !== null) {
        var c = s.next;
        s.next = o, l.next = c;
      }
      r.pending = l;
    }
    zr = null;
  }
  return e;
}
function Hg(e, n) {
  do {
    var r = Ke;
    try {
      if (Tf(), go.current = Ko, Bo) {
        for (var l = $e.memoizedState; l !== null; ) {
          var o = l.queue;
          o !== null && (o.pending = null), l = l.next;
        }
        Bo = !1;
      }
      if (Kr = 0, Ye = Ve = $e = null, Nl = !1, Wl = 0, Bf.current = null, r === null || r.return === null) {
        Ge = 1, Gl = n, Ke = null;
        break;
      }
      e: {
        var s = e, c = r.return, d = r, p = n;
        if (n = be, d.flags |= 32768, p !== null && typeof p == "object" && typeof p.then == "function") {
          var y = p, k = d, S = k.tag;
          if (!(k.mode & 1) && (S === 0 || S === 11 || S === 15)) {
            var C = k.alternate;
            C ? (k.updateQueue = C.updateQueue, k.memoizedState = C.memoizedState, k.lanes = C.lanes) : (k.updateQueue = null, k.memoizedState = null);
          }
          var R = Em(c);
          if (R !== null) {
            R.flags &= -257, km(R, c, d, s, n), R.mode & 1 && Sm(s, y, n), n = R, p = y;
            var L = n.updateQueue;
            if (L === null) {
              var A = /* @__PURE__ */ new Set();
              A.add(p), n.updateQueue = A;
            } else L.add(p);
            break e;
          } else {
            if (!(n & 1)) {
              Sm(s, y, n), Gf();
              break e;
            }
            p = Error(j(426));
          }
        } else if (Le && d.mode & 1) {
          var V = Em(c);
          if (V !== null) {
            !(V.flags & 65536) && (V.flags |= 256), km(V, c, d, s, n), Nf(Di(p, d));
            break e;
          }
        }
        s = p = Di(p, d), Ge !== 4 && (Ge = 2), Tl === null ? Tl = [s] : Tl.push(s), s = c;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, n &= -n, s.lanes |= n;
              var _ = Pg(s, p, n);
              vm(s, _);
              break e;
            case 1:
              d = p;
              var v = s.type, w = s.stateNode;
              if (!(s.flags & 128) && (typeof v.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && (hr === null || !hr.has(w)))) {
                s.flags |= 65536, n &= -n, s.lanes |= n;
                var I = Tg(s, d, n);
                vm(s, I);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Qg(r);
    } catch (F) {
      n = F, Ke === r && r !== null && (Ke = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function Vg() {
  var e = Wo.current;
  return Wo.current = Ko, e === null ? Ko : e;
}
function Gf() {
  (Ge === 0 || Ge === 3 || Ge === 2) && (Ge = 4), Xe === null || !(Wr & 268435455) && !(us & 268435455) || lr(Xe, be);
}
function Go(e, n) {
  var r = me;
  me |= 2;
  var l = Vg();
  (Xe !== e || be !== n) && (Dt = null, Fr(e, n));
  do
    try {
      h3();
      break;
    } catch (o) {
      Hg(e, o);
    }
  while (!0);
  if (Tf(), me = r, Wo.current = l, Ke !== null) throw Error(j(261));
  return Xe = null, be = 0, Ge;
}
function h3() {
  for (; Ke !== null; ) Gg(Ke);
}
function m3() {
  for (; Ke !== null && !UE(); ) Gg(Ke);
}
function Gg(e) {
  var n = Xg(e.alternate, e, In);
  e.memoizedProps = e.pendingProps, n === null ? Qg(e) : Ke = n, Bf.current = null;
}
function Qg(e) {
  var n = e;
  do {
    var r = n.alternate;
    if (e = n.return, n.flags & 32768) {
      if (r = s3(r, n), r !== null) {
        r.flags &= 32767, Ke = r;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ge = 6, Ke = null;
        return;
      }
    } else if (r = o3(r, n, In), r !== null) {
      Ke = r;
      return;
    }
    if (n = n.sibling, n !== null) {
      Ke = n;
      return;
    }
    Ke = n = e;
  } while (n !== null);
  Ge === 0 && (Ge = 5);
}
function Or(e, n, r) {
  var l = we, o = Xn.transition;
  try {
    Xn.transition = null, we = 1, v3(e, n, r, l);
  } finally {
    Xn.transition = o, we = l;
  }
  return null;
}
function v3(e, n, r, l) {
  do
    Li();
  while (sr !== null);
  if (me & 6) throw Error(j(327));
  r = e.finishedWork;
  var o = e.finishedLanes;
  if (r === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(j(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = r.lanes | r.childLanes;
  if (ZE(e, s), e === Xe && (Ke = Xe = null, be = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || lo || (lo = !0, Zg(Po, function() {
    return Li(), null;
  })), s = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || s) {
    s = Xn.transition, Xn.transition = null;
    var c = we;
    we = 1;
    var d = me;
    me |= 4, Bf.current = null, c3(e, r), Bg(r, e), zk(Lc), Lo = !!Tc, Lc = Tc = null, e.current = r, f3(r), BE(), me = d, we = c, Xn.transition = s;
  } else e.current = r;
  if (lo && (lo = !1, sr = e, Vo = o), s = e.pendingLanes, s === 0 && (hr = null), HE(r.stateNode), En(e, je()), n !== null) for (l = e.onRecoverableError, r = 0; r < n.length; r++) o = n[r], l(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ho) throw Ho = !1, e = Xc, Xc = null, e;
  return Vo & 1 && e.tag !== 0 && Li(), s = e.pendingLanes, s & 1 ? e === Zc ? Ll++ : (Ll = 0, Zc = e) : Ll = 0, Sr(), null;
}
function Li() {
  if (sr !== null) {
    var e = Pv(Vo), n = Xn.transition, r = we;
    try {
      if (Xn.transition = null, we = 16 > e ? 16 : e, sr === null) var l = !1;
      else {
        if (e = sr, sr = null, Vo = 0, me & 6) throw Error(j(331));
        var o = me;
        for (me |= 4, Y = e.current; Y !== null; ) {
          var s = Y, c = s.child;
          if (Y.flags & 16) {
            var d = s.deletions;
            if (d !== null) {
              for (var p = 0; p < d.length; p++) {
                var y = d[p];
                for (Y = y; Y !== null; ) {
                  var k = Y;
                  switch (k.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pl(8, k, s);
                  }
                  var S = k.child;
                  if (S !== null) S.return = k, Y = S;
                  else for (; Y !== null; ) {
                    k = Y;
                    var C = k.sibling, R = k.return;
                    if (Fg(k), k === y) {
                      Y = null;
                      break;
                    }
                    if (C !== null) {
                      C.return = R, Y = C;
                      break;
                    }
                    Y = R;
                  }
                }
              }
              var L = s.alternate;
              if (L !== null) {
                var A = L.child;
                if (A !== null) {
                  L.child = null;
                  do {
                    var V = A.sibling;
                    A.sibling = null, A = V;
                  } while (A !== null);
                }
              }
              Y = s;
            }
          }
          if (s.subtreeFlags & 2064 && c !== null) c.return = s, Y = c;
          else e: for (; Y !== null; ) {
            if (s = Y, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                Pl(9, s, s.return);
            }
            var _ = s.sibling;
            if (_ !== null) {
              _.return = s.return, Y = _;
              break e;
            }
            Y = s.return;
          }
        }
        var v = e.current;
        for (Y = v; Y !== null; ) {
          c = Y;
          var w = c.child;
          if (c.subtreeFlags & 2064 && w !== null) w.return = c, Y = w;
          else e: for (c = v; Y !== null; ) {
            if (d = Y, d.flags & 2048) try {
              switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  ls(9, d);
              }
            } catch (F) {
              ze(d, d.return, F);
            }
            if (d === c) {
              Y = null;
              break e;
            }
            var I = d.sibling;
            if (I !== null) {
              I.return = d.return, Y = I;
              break e;
            }
            Y = d.return;
          }
        }
        if (me = o, Sr(), xt && typeof xt.onPostCommitFiberRoot == "function") try {
          xt.onPostCommitFiberRoot(qo, e);
        } catch {
        }
        l = !0;
      }
      return l;
    } finally {
      we = r, Xn.transition = n;
    }
  }
  return !1;
}
function Mm(e, n, r) {
  n = Di(r, n), n = Pg(e, n, 1), e = pr(e, n, 1), n = dn(), e !== null && (Yl(e, 1, n), En(e, n));
}
function ze(e, n, r) {
  if (e.tag === 3) Mm(e, e, r);
  else for (; n !== null; ) {
    if (n.tag === 3) {
      Mm(n, e, r);
      break;
    } else if (n.tag === 1) {
      var l = n.stateNode;
      if (typeof n.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (hr === null || !hr.has(l))) {
        e = Di(r, e), e = Tg(n, e, 1), n = pr(n, e, 1), e = dn(), n !== null && (Yl(n, 1, e), En(n, e));
        break;
      }
    }
    n = n.return;
  }
}
function g3(e, n, r) {
  var l = e.pingCache;
  l !== null && l.delete(n), n = dn(), e.pingedLanes |= e.suspendedLanes & r, Xe === e && (be & r) === r && (Ge === 4 || Ge === 3 && (be & 130023424) === be && 500 > je() - Wf ? Fr(e, 0) : Kf |= r), En(e, n);
}
function Yg(e, n) {
  n === 0 && (e.mode & 1 ? (n = Xu, Xu <<= 1, !(Xu & 130023424) && (Xu = 4194304)) : n = 1);
  var r = dn();
  e = Kt(e, n), e !== null && (Yl(e, n, r), En(e, r));
}
function y3(e) {
  var n = e.memoizedState, r = 0;
  n !== null && (r = n.retryLane), Yg(e, r);
}
function _3(e, n) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var l = e.stateNode, o = e.memoizedState;
      o !== null && (r = o.retryLane);
      break;
    case 19:
      l = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  l !== null && l.delete(n), Yg(e, r);
}
var Xg;
Xg = function(e, n, r) {
  if (e !== null) if (e.memoizedProps !== n.pendingProps || xn.current) wn = !0;
  else {
    if (!(e.lanes & r) && !(n.flags & 128)) return wn = !1, u3(e, n, r);
    wn = !!(e.flags & 131072);
  }
  else wn = !1, Le && n.flags & 1048576 && bv(n, zo, n.index);
  switch (n.lanes = 0, n.tag) {
    case 2:
      var l = n.type;
      _o(e, n), e = n.pendingProps;
      var o = Ii(n, on.current);
      Ti(n, r), o = zf(null, n, l, e, o, r);
      var s = Mf();
      return n.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, Sn(l) ? (s = !0, Oo(n)) : s = !1, n.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, If(n), o.updater = is, n.stateNode = o, o._reactInternals = n, Fc(n, l, e, r), n = Bc(null, n, l, !0, s, r)) : (n.tag = 0, Le && s && kf(n), fn(null, n, o, r), n = n.child), n;
    case 16:
      l = n.elementType;
      e: {
        switch (_o(e, n), e = n.pendingProps, o = l._init, l = o(l._payload), n.type = l, o = n.tag = x3(l), e = lt(l, e), o) {
          case 0:
            n = Uc(null, n, l, e, r);
            break e;
          case 1:
            n = Pm(null, n, l, e, r);
            break e;
          case 11:
            n = Cm(null, n, l, e, r);
            break e;
          case 14:
            n = Nm(null, n, l, lt(l.type, e), r);
            break e;
        }
        throw Error(j(
          306,
          l,
          ""
        ));
      }
      return n;
    case 0:
      return l = n.type, o = n.pendingProps, o = n.elementType === l ? o : lt(l, o), Uc(e, n, l, o, r);
    case 1:
      return l = n.type, o = n.pendingProps, o = n.elementType === l ? o : lt(l, o), Pm(e, n, l, o, r);
    case 3:
      e: {
        if ($g(n), e === null) throw Error(j(387));
        l = n.pendingProps, s = n.memoizedState, o = s.element, lg(e, n), jo(n, l, null, r);
        var c = n.memoizedState;
        if (l = c.element, s.isDehydrated) if (s = { element: l, isDehydrated: !1, cache: c.cache, pendingSuspenseBoundaries: c.pendingSuspenseBoundaries, transitions: c.transitions }, n.updateQueue.baseState = s, n.memoizedState = s, n.flags & 256) {
          o = Di(Error(j(423)), n), n = Tm(e, n, l, r, o);
          break e;
        } else if (l !== o) {
          o = Di(Error(j(424)), n), n = Tm(e, n, l, r, o);
          break e;
        } else for ($n = dr(n.stateNode.containerInfo.firstChild), An = n, Le = !0, ot = null, r = rg(n, null, l, r), n.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
        else {
          if ($i(), l === o) {
            n = Wt(e, n, r);
            break e;
          }
          fn(e, n, l, r);
        }
        n = n.child;
      }
      return n;
    case 5:
      return ug(n), e === null && Dc(n), l = n.type, o = n.pendingProps, s = e !== null ? e.memoizedProps : null, c = o.children, Rc(l, o) ? c = null : s !== null && Rc(l, s) && (n.flags |= 32), Ig(e, n), fn(e, n, c, r), n.child;
    case 6:
      return e === null && Dc(n), null;
    case 13:
      return Ag(e, n, r);
    case 4:
      return $f(n, n.stateNode.containerInfo), l = n.pendingProps, e === null ? n.child = Ai(n, null, l, r) : fn(e, n, l, r), n.child;
    case 11:
      return l = n.type, o = n.pendingProps, o = n.elementType === l ? o : lt(l, o), Cm(e, n, l, o, r);
    case 7:
      return fn(e, n, n.pendingProps, r), n.child;
    case 8:
      return fn(e, n, n.pendingProps.children, r), n.child;
    case 12:
      return fn(e, n, n.pendingProps.children, r), n.child;
    case 10:
      e: {
        if (l = n.type._context, o = n.pendingProps, s = n.memoizedProps, c = o.value, ke(Mo, l._currentValue), l._currentValue = c, s !== null) if (ft(s.value, c)) {
          if (s.children === o.children && !xn.current) {
            n = Wt(e, n, r);
            break e;
          }
        } else for (s = n.child, s !== null && (s.return = n); s !== null; ) {
          var d = s.dependencies;
          if (d !== null) {
            c = s.child;
            for (var p = d.firstContext; p !== null; ) {
              if (p.context === l) {
                if (s.tag === 1) {
                  p = jt(-1, r & -r), p.tag = 2;
                  var y = s.updateQueue;
                  if (y !== null) {
                    y = y.shared;
                    var k = y.pending;
                    k === null ? p.next = p : (p.next = k.next, k.next = p), y.pending = p;
                  }
                }
                s.lanes |= r, p = s.alternate, p !== null && (p.lanes |= r), zc(
                  s.return,
                  r,
                  n
                ), d.lanes |= r;
                break;
              }
              p = p.next;
            }
          } else if (s.tag === 10) c = s.type === n.type ? null : s.child;
          else if (s.tag === 18) {
            if (c = s.return, c === null) throw Error(j(341));
            c.lanes |= r, d = c.alternate, d !== null && (d.lanes |= r), zc(c, r, n), c = s.sibling;
          } else c = s.child;
          if (c !== null) c.return = s;
          else for (c = s; c !== null; ) {
            if (c === n) {
              c = null;
              break;
            }
            if (s = c.sibling, s !== null) {
              s.return = c.return, c = s;
              break;
            }
            c = c.return;
          }
          s = c;
        }
        fn(e, n, o.children, r), n = n.child;
      }
      return n;
    case 9:
      return o = n.type, l = n.pendingProps.children, Ti(n, r), o = Zn(o), l = l(o), n.flags |= 1, fn(e, n, l, r), n.child;
    case 14:
      return l = n.type, o = lt(l, n.pendingProps), o = lt(l.type, o), Nm(e, n, l, o, r);
    case 15:
      return Lg(e, n, n.type, n.pendingProps, r);
    case 17:
      return l = n.type, o = n.pendingProps, o = n.elementType === l ? o : lt(l, o), _o(e, n), n.tag = 1, Sn(l) ? (e = !0, Oo(n)) : e = !1, Ti(n, r), Ng(n, l, o), Fc(n, l, o, r), Bc(null, n, l, !0, e, r);
    case 19:
      return Og(e, n, r);
    case 22:
      return Rg(e, n, r);
  }
  throw Error(j(156, n.tag));
};
function Zg(e, n) {
  return Ev(e, n);
}
function w3(e, n, r, l) {
  this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Yn(e, n, r, l) {
  return new w3(e, n, r, l);
}
function Qf(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function x3(e) {
  if (typeof e == "function") return Qf(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === df) return 11;
    if (e === pf) return 14;
  }
  return 2;
}
function vr(e, n) {
  var r = e.alternate;
  return r === null ? (r = Yn(e.tag, n, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = n, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, n = e.dependencies, r.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
}
function So(e, n, r, l, o, s) {
  var c = 2;
  if (l = e, typeof e == "function") Qf(e) && (c = 1);
  else if (typeof e == "string") c = 5;
  else e: switch (e) {
    case pi:
      return jr(r.children, o, s, n);
    case ff:
      c = 8, o |= 8;
      break;
    case sc:
      return e = Yn(12, r, n, o | 2), e.elementType = sc, e.lanes = s, e;
    case ac:
      return e = Yn(13, r, n, o), e.elementType = ac, e.lanes = s, e;
    case cc:
      return e = Yn(19, r, n, o), e.elementType = cc, e.lanes = s, e;
    case uv:
      return os(r, o, s, n);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case iv:
          c = 10;
          break e;
        case lv:
          c = 9;
          break e;
        case df:
          c = 11;
          break e;
        case pf:
          c = 14;
          break e;
        case tr:
          c = 16, l = null;
          break e;
      }
      throw Error(j(130, e == null ? e : typeof e, ""));
  }
  return n = Yn(c, r, n, o), n.elementType = e, n.type = l, n.lanes = s, n;
}
function jr(e, n, r, l) {
  return e = Yn(7, e, l, n), e.lanes = r, e;
}
function os(e, n, r, l) {
  return e = Yn(22, e, l, n), e.elementType = uv, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
}
function lc(e, n, r) {
  return e = Yn(6, e, null, n), e.lanes = r, e;
}
function uc(e, n, r) {
  return n = Yn(4, e.children !== null ? e.children : [], e.key, n), n.lanes = r, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
}
function S3(e, n, r, l, o) {
  this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ua(0), this.expirationTimes = Ua(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ua(0), this.identifierPrefix = l, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Yf(e, n, r, l, o, s, c, d, p) {
  return e = new S3(e, n, r, d, p), n === 1 ? (n = 1, s === !0 && (n |= 8)) : n = 0, s = Yn(3, null, null, n), e.current = s, s.stateNode = e, s.memoizedState = { element: l, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, If(s), e;
}
function E3(e, n, r) {
  var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: di, key: l == null ? null : "" + l, children: e, containerInfo: n, implementation: r };
}
function qg(e) {
  if (!e) return _r;
  e = e._reactInternals;
  e: {
    if (Gr(e) !== e || e.tag !== 1) throw Error(j(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (Sn(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (Sn(r)) return qv(e, r, n);
  }
  return n;
}
function Jg(e, n, r, l, o, s, c, d, p) {
  return e = Yf(r, l, !0, e, o, s, c, d, p), e.context = qg(null), r = e.current, l = dn(), o = mr(r), s = jt(l, o), s.callback = n ?? null, pr(r, s, o), e.current.lanes = o, Yl(e, o, l), En(e, l), e;
}
function ss(e, n, r, l) {
  var o = n.current, s = dn(), c = mr(o);
  return r = qg(r), n.context === null ? n.context = r : n.pendingContext = r, n = jt(s, c), n.payload = { element: e }, l = l === void 0 ? null : l, l !== null && (n.callback = l), e = pr(o, n, c), e !== null && (at(e, o, c, s), vo(e, o, c)), c;
}
function Qo(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Fm(e, n) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < n ? r : n;
  }
}
function Xf(e, n) {
  Fm(e, n), (e = e.alternate) && Fm(e, n);
}
function k3() {
  return null;
}
var bg = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Zf(e) {
  this._internalRoot = e;
}
as.prototype.render = Zf.prototype.render = function(e) {
  var n = this._internalRoot;
  if (n === null) throw Error(j(409));
  ss(e, n, null, null);
};
as.prototype.unmount = Zf.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    Hr(function() {
      ss(null, e, null, null);
    }), n[Bt] = null;
  }
};
function as(e) {
  this._internalRoot = e;
}
as.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var n = Rv();
    e = { blockedOn: null, target: e, priority: n };
    for (var r = 0; r < ir.length && n !== 0 && n < ir[r].priority; r++) ;
    ir.splice(r, 0, e), r === 0 && $v(e);
  }
};
function qf(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function cs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function jm() {
}
function C3(e, n, r, l, o) {
  if (o) {
    if (typeof l == "function") {
      var s = l;
      l = function() {
        var y = Qo(c);
        s.call(y);
      };
    }
    var c = Jg(n, l, e, 0, null, !1, !1, "", jm);
    return e._reactRootContainer = c, e[Bt] = c.current, Fl(e.nodeType === 8 ? e.parentNode : e), Hr(), c;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof l == "function") {
    var d = l;
    l = function() {
      var y = Qo(p);
      d.call(y);
    };
  }
  var p = Yf(e, 0, !1, null, null, !1, !1, "", jm);
  return e._reactRootContainer = p, e[Bt] = p.current, Fl(e.nodeType === 8 ? e.parentNode : e), Hr(function() {
    ss(n, p, r, l);
  }), p;
}
function fs(e, n, r, l, o) {
  var s = r._reactRootContainer;
  if (s) {
    var c = s;
    if (typeof o == "function") {
      var d = o;
      o = function() {
        var p = Qo(c);
        d.call(p);
      };
    }
    ss(n, c, e, o);
  } else c = C3(r, n, e, o, l);
  return Qo(c);
}
Tv = function(e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var r = _l(n.pendingLanes);
        r !== 0 && (vf(n, r | 1), En(n, je()), !(me & 6) && (zi = je() + 500, Sr()));
      }
      break;
    case 13:
      Hr(function() {
        var l = Kt(e, 1);
        if (l !== null) {
          var o = dn();
          at(l, e, 1, o);
        }
      }), Xf(e, 1);
  }
};
gf = function(e) {
  if (e.tag === 13) {
    var n = Kt(e, 134217728);
    if (n !== null) {
      var r = dn();
      at(n, e, 134217728, r);
    }
    Xf(e, 134217728);
  }
};
Lv = function(e) {
  if (e.tag === 13) {
    var n = mr(e), r = Kt(e, n);
    if (r !== null) {
      var l = dn();
      at(r, e, n, l);
    }
    Xf(e, n);
  }
};
Rv = function() {
  return we;
};
Iv = function(e, n) {
  var r = we;
  try {
    return we = e, n();
  } finally {
    we = r;
  }
};
wc = function(e, n, r) {
  switch (n) {
    case "input":
      if (pc(e, r), n = r.name, r.type === "radio" && n != null) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < r.length; n++) {
          var l = r[n];
          if (l !== e && l.form === e.form) {
            var o = ns(l);
            if (!o) throw Error(j(90));
            sv(l), pc(l, o);
          }
        }
      }
      break;
    case "textarea":
      cv(e, r);
      break;
    case "select":
      n = r.value, n != null && ki(e, !!r.multiple, n, !1);
  }
};
gv = Hf;
yv = Hr;
var N3 = { usingClientEntryPoint: !1, Events: [Zl, gi, ns, mv, vv, Hf] }, vl = { findFiberByHostInstance: Dr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, P3 = { bundleType: vl.bundleType, version: vl.version, rendererPackageName: vl.rendererPackageName, rendererConfig: vl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Vt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = xv(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: vl.findFiberByHostInstance || k3, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var uo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!uo.isDisabled && uo.supportsFiber) try {
    qo = uo.inject(P3), xt = uo;
  } catch {
  }
}
Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N3;
Dn.createPortal = function(e, n) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!qf(n)) throw Error(j(200));
  return E3(e, n, null, r);
};
Dn.createRoot = function(e, n) {
  if (!qf(e)) throw Error(j(299));
  var r = !1, l = "", o = bg;
  return n != null && (n.unstable_strictMode === !0 && (r = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), n = Yf(e, 1, !1, null, null, r, !1, l, o), e[Bt] = n.current, Fl(e.nodeType === 8 ? e.parentNode : e), new Zf(n);
};
Dn.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","), Error(j(268, e)));
  return e = xv(n), e = e === null ? null : e.stateNode, e;
};
Dn.flushSync = function(e) {
  return Hr(e);
};
Dn.hydrate = function(e, n, r) {
  if (!cs(n)) throw Error(j(200));
  return fs(null, e, n, !0, r);
};
Dn.hydrateRoot = function(e, n, r) {
  if (!qf(e)) throw Error(j(405));
  var l = r != null && r.hydratedSources || null, o = !1, s = "", c = bg;
  if (r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (s = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), n = Jg(n, null, e, 1, r ?? null, o, !1, s, c), e[Bt] = n.current, Fl(e), l) for (e = 0; e < l.length; e++) r = l[e], o = r._getVersion, o = o(r._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [r, o] : n.mutableSourceEagerHydrationData.push(
    r,
    o
  );
  return new as(n);
};
Dn.render = function(e, n, r) {
  if (!cs(n)) throw Error(j(200));
  return fs(null, e, n, !1, r);
};
Dn.unmountComponentAtNode = function(e) {
  if (!cs(e)) throw Error(j(40));
  return e._reactRootContainer ? (Hr(function() {
    fs(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Bt] = null;
    });
  }), !0) : !1;
};
Dn.unstable_batchedUpdates = Hf;
Dn.unstable_renderSubtreeIntoContainer = function(e, n, r, l) {
  if (!cs(r)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return fs(e, n, r, !1, l);
};
Dn.version = "18.3.1-next-f1338f8080-20240426";
function ey() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ey);
    } catch (e) {
      console.error(e);
    }
}
ey(), ev.exports = Dn;
var T3 = ev.exports, ny, Um = T3;
ny = Um.createRoot, Um.hydrateRoot;
const L3 = "https://api.novacpayment.com/api/v1", R3 = (e) => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${e || ""}`
}), I3 = async (e) => {
  const n = await e.text();
  let r = null;
  try {
    r = n ? JSON.parse(n) : {};
  } catch {
    r = n;
  }
  if (!e.ok) {
    const l = r && r.message || e.statusText || "Request failed";
    throw new Error(l);
  }
  return r;
}, Qr = async ({ path: e, method: n = "GET", body: r, publicKey: l }) => {
  const o = {
    method: n,
    headers: R3(l)
  };
  r !== void 0 && (o.body = JSON.stringify(r));
  const s = await fetch(`${L3}${e}`, o);
  return I3(s);
}, $3 = async (e) => {
  const { publicKey: n, ...r } = e;
  return Qr({
    path: "/initiate",
    method: "POST",
    body: r,
    publicKey: n
  });
}, A3 = async (e) => {
  const { publicKey: n, reference: r, otp: l } = e;
  return Qr({
    path: "/card/validate-otp",
    method: "POST",
    body: { reference: r, otp: l },
    publicKey: n
  });
}, O3 = async (e) => {
  const { publicKey: n, cardHolderName: r, cardNumber: l, cardPin: o, cvv: s, expiryMonth: c, expiryYear: d, transactionReference: p } = e;
  return Qr({
    path: "/card-payment",
    method: "POST",
    body: {
      transactionReference: p,
      cardHolderName: r,
      cardNumber: l,
      cardPin: o,
      cvv: s,
      expiryMonth: c,
      expiryYear: d
    },
    publicKey: n
  });
}, D3 = async (e) => {
  const { publicKey: n, reference: r } = e;
  return Qr({
    path: "/bank-transfer",
    method: "POST",
    body: {
      transactionReference: r,
      paymentType: "bank_transfer"
    },
    publicKey: n
  });
}, z3 = async (e) => {
  const { publicKey: n, bankCode: r, reference: l } = e;
  return Qr({
    path: "/ussd-payment",
    method: "POST",
    body: {
      transactionReference: l,
      bankCode: r
    },
    publicKey: n
  });
}, M3 = async (e) => Qr({ path: "/ussd-getbanks", method: "GET", publicKey: e }), Jf = async (e, n) => {
  try {
    if (!e.publicKey) throw new Error("Public key is required");
    if (!e.email) throw new Error("Email is required");
    if (!e.amount || e.amount <= 0) throw new Error("Valid amount is required");
    if (e.publicKey && e.publicKey.includes("carl")) {
      await new Promise((o) => setTimeout(o, 1500));
      const l = {
        card: {
          status: "success",
          reference: e.reference,
          transactionId: ty(),
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
      return l[e.paymentMethod] || l.card;
    }
    let r;
    switch (e.paymentMethod) {
      case "bank_transfer": {
        const l = (await D3(e)).data || {};
        r = {
          status: "pending",
          reference: e.reference,
          accountNumber: l.accountNumber || "0123456789",
          accountName: l.accountName || "Novac Payment Limited",
          bankName: l.bankName || "Access Bank",
          message: l.friendlyMessage || "Transfer details generated"
        };
        break;
      }
      case "ussd":
        r = await z3({
          publicKey: e.publicKey,
          bankCode: e.bankCode,
          reference: n.data.transactionReference
        });
        break;
      case "card":
        r = await O3({
          publicKey: e.publicKey,
          cardNumber: e.cardDetails.cardNumber,
          cardPin: e.cardDetails.cardPin,
          cvv: e.cardDetails.cvv,
          expiryMonth: e.cardDetails.expiryMonth,
          expiryYear: e.cardDetails.expiryYear,
          cardHolderName: e.cardDetails.cardholderName,
          transactionReference: n.data.transactionReference
        });
        break;
      default:
        r = {
          link: n.data.paymentRedirectUrl,
          reference: n.data.transactionReference
        };
        break;
    }
    return r;
  } catch (r) {
    throw new Error(r.message || "Network error. Please try again.");
  }
}, F3 = async (e, n) => {
  try {
    return await Qr({
      path: `/checkout/${e}/verify`,
      method: "GET",
      publicKey: n
    });
  } catch (r) {
    throw new Error(r.message || "Verification failed");
  }
}, ty = () => `TXN_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`, j3 = (e) => {
  const n = e.replace(/\D/g, "");
  if (n.length < 13 || n.length > 19) return !1;
  let r = 0, l = !1;
  for (let o = n.length - 1; o >= 0; o--) {
    let s = Number(n[o]);
    l && (s = s * 2 - (s > 4 ? 9 : 0)), r += s, l = !l;
  }
  return r % 10 === 0;
}, U3 = (e) => /^\d{3,4}$/.test(e), B3 = (e) => {
  if (!/^\d{2}\/\d{2}$/.test(e))
    return !1;
  const [n, r] = e.split("/").map((s) => parseInt(s, 10));
  if (n < 1 || n > 12)
    return !1;
  const l = (/* @__PURE__ */ new Date()).getFullYear() % 100, o = (/* @__PURE__ */ new Date()).getMonth() + 1;
  return !(r < l || r === l && n < o);
};
var Yo = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Yo.exports;
(function(e, n) {
  (function() {
    var r, l = "4.17.21", o = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", d = "Invalid `variable` option passed into `_.template`", p = "__lodash_hash_undefined__", y = 500, k = "__lodash_placeholder__", S = 1, C = 2, R = 4, L = 1, A = 2, V = 1, _ = 2, v = 4, w = 8, I = 16, F = 32, z = 64, W = 128, G = 256, se = 512, K = 30, xe = "...", Oe = 800, kn = 16, le = 1, de = 2, dt = 3, X = 1 / 0, B = 9007199254740991, ee = 17976931348623157e292, te = NaN, ve = 4294967295, Be = ve - 1, Yr = ve >>> 1, Et = [
      ["ary", W],
      ["bind", V],
      ["bindKey", _],
      ["curry", w],
      ["curryRight", I],
      ["flip", se],
      ["partial", F],
      ["partialRight", z],
      ["rearg", G]
    ], pt = "[object Arguments]", Mn = "[object Array]", Xr = "[object AsyncFunction]", Ui = "[object Boolean]", Bi = "[object Date]", _y = "[object DOMException]", bl = "[object Error]", eu = "[object Function]", nd = "[object GeneratorFunction]", Jn = "[object Map]", Ki = "[object Number]", wy = "[object Null]", kt = "[object Object]", td = "[object Promise]", xy = "[object Proxy]", Wi = "[object RegExp]", bn = "[object Set]", Hi = "[object String]", nu = "[object Symbol]", Sy = "[object Undefined]", Vi = "[object WeakMap]", Ey = "[object WeakSet]", Gi = "[object ArrayBuffer]", Zr = "[object DataView]", hs = "[object Float32Array]", ms = "[object Float64Array]", vs = "[object Int8Array]", gs = "[object Int16Array]", ys = "[object Int32Array]", _s = "[object Uint8Array]", ws = "[object Uint8ClampedArray]", xs = "[object Uint16Array]", Ss = "[object Uint32Array]", ky = /\b__p \+= '';/g, Cy = /\b(__p \+=) '' \+/g, Ny = /(__e\(.*?\)|\b__t\)) \+\n'';/g, rd = /&(?:amp|lt|gt|quot|#39);/g, id = /[&<>"']/g, Py = RegExp(rd.source), Ty = RegExp(id.source), Ly = /<%-([\s\S]+?)%>/g, Ry = /<%([\s\S]+?)%>/g, ld = /<%=([\s\S]+?)%>/g, Iy = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, $y = /^\w*$/, Ay = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Es = /[\\^$.*+?()[\]{}|]/g, Oy = RegExp(Es.source), ks = /^\s+/, Dy = /\s/, zy = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, My = /\{\n\/\* \[wrapped with (.+)\] \*/, Fy = /,? & /, jy = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Uy = /[()=,{}\[\]\/\s]/, By = /\\(\\)?/g, Ky = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ud = /\w*$/, Wy = /^[-+]0x[0-9a-f]+$/i, Hy = /^0b[01]+$/i, Vy = /^\[object .+?Constructor\]$/, Gy = /^0o[0-7]+$/i, Qy = /^(?:0|[1-9]\d*)$/, Yy = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, tu = /($^)/, Xy = /['\n\r\u2028\u2029\\]/g, ru = "\\ud800-\\udfff", Zy = "\\u0300-\\u036f", qy = "\\ufe20-\\ufe2f", Jy = "\\u20d0-\\u20ff", od = Zy + qy + Jy, sd = "\\u2700-\\u27bf", ad = "a-z\\xdf-\\xf6\\xf8-\\xff", by = "\\xac\\xb1\\xd7\\xf7", e0 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", n0 = "\\u2000-\\u206f", t0 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", cd = "A-Z\\xc0-\\xd6\\xd8-\\xde", fd = "\\ufe0e\\ufe0f", dd = by + e0 + n0 + t0, Cs = "['’]", r0 = "[" + ru + "]", pd = "[" + dd + "]", iu = "[" + od + "]", hd = "\\d+", i0 = "[" + sd + "]", md = "[" + ad + "]", vd = "[^" + ru + dd + hd + sd + ad + cd + "]", Ns = "\\ud83c[\\udffb-\\udfff]", l0 = "(?:" + iu + "|" + Ns + ")", gd = "[^" + ru + "]", Ps = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ts = "[\\ud800-\\udbff][\\udc00-\\udfff]", qr = "[" + cd + "]", yd = "\\u200d", _d = "(?:" + md + "|" + vd + ")", u0 = "(?:" + qr + "|" + vd + ")", wd = "(?:" + Cs + "(?:d|ll|m|re|s|t|ve))?", xd = "(?:" + Cs + "(?:D|LL|M|RE|S|T|VE))?", Sd = l0 + "?", Ed = "[" + fd + "]?", o0 = "(?:" + yd + "(?:" + [gd, Ps, Ts].join("|") + ")" + Ed + Sd + ")*", s0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", a0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", kd = Ed + Sd + o0, c0 = "(?:" + [i0, Ps, Ts].join("|") + ")" + kd, f0 = "(?:" + [gd + iu + "?", iu, Ps, Ts, r0].join("|") + ")", d0 = RegExp(Cs, "g"), p0 = RegExp(iu, "g"), Ls = RegExp(Ns + "(?=" + Ns + ")|" + f0 + kd, "g"), h0 = RegExp([
      qr + "?" + md + "+" + wd + "(?=" + [pd, qr, "$"].join("|") + ")",
      u0 + "+" + xd + "(?=" + [pd, qr + _d, "$"].join("|") + ")",
      qr + "?" + _d + "+" + wd,
      qr + "+" + xd,
      a0,
      s0,
      hd,
      c0
    ].join("|"), "g"), m0 = RegExp("[" + yd + ru + od + fd + "]"), v0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, g0 = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], y0 = -1, Ce = {};
    Ce[hs] = Ce[ms] = Ce[vs] = Ce[gs] = Ce[ys] = Ce[_s] = Ce[ws] = Ce[xs] = Ce[Ss] = !0, Ce[pt] = Ce[Mn] = Ce[Gi] = Ce[Ui] = Ce[Zr] = Ce[Bi] = Ce[bl] = Ce[eu] = Ce[Jn] = Ce[Ki] = Ce[kt] = Ce[Wi] = Ce[bn] = Ce[Hi] = Ce[Vi] = !1;
    var Ee = {};
    Ee[pt] = Ee[Mn] = Ee[Gi] = Ee[Zr] = Ee[Ui] = Ee[Bi] = Ee[hs] = Ee[ms] = Ee[vs] = Ee[gs] = Ee[ys] = Ee[Jn] = Ee[Ki] = Ee[kt] = Ee[Wi] = Ee[bn] = Ee[Hi] = Ee[nu] = Ee[_s] = Ee[ws] = Ee[xs] = Ee[Ss] = !0, Ee[bl] = Ee[eu] = Ee[Vi] = !1;
    var _0 = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, w0 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, x0 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, S0 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, E0 = parseFloat, k0 = parseInt, Cd = typeof sl == "object" && sl && sl.Object === Object && sl, C0 = typeof self == "object" && self && self.Object === Object && self, Ze = Cd || C0 || Function("return this")(), Rs = n && !n.nodeType && n, kr = Rs && !0 && e && !e.nodeType && e, Nd = kr && kr.exports === Rs, Is = Nd && Cd.process, Fn = function() {
      try {
        var E = kr && kr.require && kr.require("util").types;
        return E || Is && Is.binding && Is.binding("util");
      } catch {
      }
    }(), Pd = Fn && Fn.isArrayBuffer, Td = Fn && Fn.isDate, Ld = Fn && Fn.isMap, Rd = Fn && Fn.isRegExp, Id = Fn && Fn.isSet, $d = Fn && Fn.isTypedArray;
    function Cn(E, $, P) {
      switch (P.length) {
        case 0:
          return E.call($);
        case 1:
          return E.call($, P[0]);
        case 2:
          return E.call($, P[0], P[1]);
        case 3:
          return E.call($, P[0], P[1], P[2]);
      }
      return E.apply($, P);
    }
    function N0(E, $, P, Q) {
      for (var ne = -1, ge = E == null ? 0 : E.length; ++ne < ge; ) {
        var We = E[ne];
        $(Q, We, P(We), E);
      }
      return Q;
    }
    function jn(E, $) {
      for (var P = -1, Q = E == null ? 0 : E.length; ++P < Q && $(E[P], P, E) !== !1; )
        ;
      return E;
    }
    function P0(E, $) {
      for (var P = E == null ? 0 : E.length; P-- && $(E[P], P, E) !== !1; )
        ;
      return E;
    }
    function Ad(E, $) {
      for (var P = -1, Q = E == null ? 0 : E.length; ++P < Q; )
        if (!$(E[P], P, E))
          return !1;
      return !0;
    }
    function Gt(E, $) {
      for (var P = -1, Q = E == null ? 0 : E.length, ne = 0, ge = []; ++P < Q; ) {
        var We = E[P];
        $(We, P, E) && (ge[ne++] = We);
      }
      return ge;
    }
    function lu(E, $) {
      var P = E == null ? 0 : E.length;
      return !!P && Jr(E, $, 0) > -1;
    }
    function $s(E, $, P) {
      for (var Q = -1, ne = E == null ? 0 : E.length; ++Q < ne; )
        if (P($, E[Q]))
          return !0;
      return !1;
    }
    function Te(E, $) {
      for (var P = -1, Q = E == null ? 0 : E.length, ne = Array(Q); ++P < Q; )
        ne[P] = $(E[P], P, E);
      return ne;
    }
    function Qt(E, $) {
      for (var P = -1, Q = $.length, ne = E.length; ++P < Q; )
        E[ne + P] = $[P];
      return E;
    }
    function As(E, $, P, Q) {
      var ne = -1, ge = E == null ? 0 : E.length;
      for (Q && ge && (P = E[++ne]); ++ne < ge; )
        P = $(P, E[ne], ne, E);
      return P;
    }
    function T0(E, $, P, Q) {
      var ne = E == null ? 0 : E.length;
      for (Q && ne && (P = E[--ne]); ne--; )
        P = $(P, E[ne], ne, E);
      return P;
    }
    function Os(E, $) {
      for (var P = -1, Q = E == null ? 0 : E.length; ++P < Q; )
        if ($(E[P], P, E))
          return !0;
      return !1;
    }
    var L0 = Ds("length");
    function R0(E) {
      return E.split("");
    }
    function I0(E) {
      return E.match(jy) || [];
    }
    function Od(E, $, P) {
      var Q;
      return P(E, function(ne, ge, We) {
        if ($(ne, ge, We))
          return Q = ge, !1;
      }), Q;
    }
    function uu(E, $, P, Q) {
      for (var ne = E.length, ge = P + (Q ? 1 : -1); Q ? ge-- : ++ge < ne; )
        if ($(E[ge], ge, E))
          return ge;
      return -1;
    }
    function Jr(E, $, P) {
      return $ === $ ? W0(E, $, P) : uu(E, Dd, P);
    }
    function $0(E, $, P, Q) {
      for (var ne = P - 1, ge = E.length; ++ne < ge; )
        if (Q(E[ne], $))
          return ne;
      return -1;
    }
    function Dd(E) {
      return E !== E;
    }
    function zd(E, $) {
      var P = E == null ? 0 : E.length;
      return P ? Ms(E, $) / P : te;
    }
    function Ds(E) {
      return function($) {
        return $ == null ? r : $[E];
      };
    }
    function zs(E) {
      return function($) {
        return E == null ? r : E[$];
      };
    }
    function Md(E, $, P, Q, ne) {
      return ne(E, function(ge, We, Se) {
        P = Q ? (Q = !1, ge) : $(P, ge, We, Se);
      }), P;
    }
    function A0(E, $) {
      var P = E.length;
      for (E.sort($); P--; )
        E[P] = E[P].value;
      return E;
    }
    function Ms(E, $) {
      for (var P, Q = -1, ne = E.length; ++Q < ne; ) {
        var ge = $(E[Q]);
        ge !== r && (P = P === r ? ge : P + ge);
      }
      return P;
    }
    function Fs(E, $) {
      for (var P = -1, Q = Array(E); ++P < E; )
        Q[P] = $(P);
      return Q;
    }
    function O0(E, $) {
      return Te($, function(P) {
        return [P, E[P]];
      });
    }
    function Fd(E) {
      return E && E.slice(0, Kd(E) + 1).replace(ks, "");
    }
    function Nn(E) {
      return function($) {
        return E($);
      };
    }
    function js(E, $) {
      return Te($, function(P) {
        return E[P];
      });
    }
    function Qi(E, $) {
      return E.has($);
    }
    function jd(E, $) {
      for (var P = -1, Q = E.length; ++P < Q && Jr($, E[P], 0) > -1; )
        ;
      return P;
    }
    function Ud(E, $) {
      for (var P = E.length; P-- && Jr($, E[P], 0) > -1; )
        ;
      return P;
    }
    function D0(E, $) {
      for (var P = E.length, Q = 0; P--; )
        E[P] === $ && ++Q;
      return Q;
    }
    var z0 = zs(_0), M0 = zs(w0);
    function F0(E) {
      return "\\" + S0[E];
    }
    function j0(E, $) {
      return E == null ? r : E[$];
    }
    function br(E) {
      return m0.test(E);
    }
    function U0(E) {
      return v0.test(E);
    }
    function B0(E) {
      for (var $, P = []; !($ = E.next()).done; )
        P.push($.value);
      return P;
    }
    function Us(E) {
      var $ = -1, P = Array(E.size);
      return E.forEach(function(Q, ne) {
        P[++$] = [ne, Q];
      }), P;
    }
    function Bd(E, $) {
      return function(P) {
        return E($(P));
      };
    }
    function Yt(E, $) {
      for (var P = -1, Q = E.length, ne = 0, ge = []; ++P < Q; ) {
        var We = E[P];
        (We === $ || We === k) && (E[P] = k, ge[ne++] = P);
      }
      return ge;
    }
    function ou(E) {
      var $ = -1, P = Array(E.size);
      return E.forEach(function(Q) {
        P[++$] = Q;
      }), P;
    }
    function K0(E) {
      var $ = -1, P = Array(E.size);
      return E.forEach(function(Q) {
        P[++$] = [Q, Q];
      }), P;
    }
    function W0(E, $, P) {
      for (var Q = P - 1, ne = E.length; ++Q < ne; )
        if (E[Q] === $)
          return Q;
      return -1;
    }
    function H0(E, $, P) {
      for (var Q = P + 1; Q--; )
        if (E[Q] === $)
          return Q;
      return Q;
    }
    function ei(E) {
      return br(E) ? G0(E) : L0(E);
    }
    function et(E) {
      return br(E) ? Q0(E) : R0(E);
    }
    function Kd(E) {
      for (var $ = E.length; $-- && Dy.test(E.charAt($)); )
        ;
      return $;
    }
    var V0 = zs(x0);
    function G0(E) {
      for (var $ = Ls.lastIndex = 0; Ls.test(E); )
        ++$;
      return $;
    }
    function Q0(E) {
      return E.match(Ls) || [];
    }
    function Y0(E) {
      return E.match(h0) || [];
    }
    var X0 = function E($) {
      $ = $ == null ? Ze : ni.defaults(Ze.Object(), $, ni.pick(Ze, g0));
      var P = $.Array, Q = $.Date, ne = $.Error, ge = $.Function, We = $.Math, Se = $.Object, Bs = $.RegExp, Z0 = $.String, Un = $.TypeError, su = P.prototype, q0 = ge.prototype, ti = Se.prototype, au = $["__core-js_shared__"], cu = q0.toString, _e = ti.hasOwnProperty, J0 = 0, Wd = function() {
        var t = /[^.]+$/.exec(au && au.keys && au.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), fu = ti.toString, b0 = cu.call(Se), e1 = Ze._, n1 = Bs(
        "^" + cu.call(_e).replace(Es, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), du = Nd ? $.Buffer : r, Xt = $.Symbol, pu = $.Uint8Array, Hd = du ? du.allocUnsafe : r, hu = Bd(Se.getPrototypeOf, Se), Vd = Se.create, Gd = ti.propertyIsEnumerable, mu = su.splice, Qd = Xt ? Xt.isConcatSpreadable : r, Yi = Xt ? Xt.iterator : r, Cr = Xt ? Xt.toStringTag : r, vu = function() {
        try {
          var t = Rr(Se, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), t1 = $.clearTimeout !== Ze.clearTimeout && $.clearTimeout, r1 = Q && Q.now !== Ze.Date.now && Q.now, i1 = $.setTimeout !== Ze.setTimeout && $.setTimeout, gu = We.ceil, yu = We.floor, Ks = Se.getOwnPropertySymbols, l1 = du ? du.isBuffer : r, Yd = $.isFinite, u1 = su.join, o1 = Bd(Se.keys, Se), He = We.max, nn = We.min, s1 = Q.now, a1 = $.parseInt, Xd = We.random, c1 = su.reverse, Ws = Rr($, "DataView"), Xi = Rr($, "Map"), Hs = Rr($, "Promise"), ri = Rr($, "Set"), Zi = Rr($, "WeakMap"), qi = Rr(Se, "create"), _u = Zi && new Zi(), ii = {}, f1 = Ir(Ws), d1 = Ir(Xi), p1 = Ir(Hs), h1 = Ir(ri), m1 = Ir(Zi), wu = Xt ? Xt.prototype : r, Ji = wu ? wu.valueOf : r, Zd = wu ? wu.toString : r;
      function h(t) {
        if (De(t) && !re(t) && !(t instanceof fe)) {
          if (t instanceof Bn)
            return t;
          if (_e.call(t, "__wrapped__"))
            return qp(t);
        }
        return new Bn(t);
      }
      var li = /* @__PURE__ */ function() {
        function t() {
        }
        return function(i) {
          if (!Re(i))
            return {};
          if (Vd)
            return Vd(i);
          t.prototype = i;
          var u = new t();
          return t.prototype = r, u;
        };
      }();
      function xu() {
      }
      function Bn(t, i) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = r;
      }
      h.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Ly,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Ry,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: ld,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: h
        }
      }, h.prototype = xu.prototype, h.prototype.constructor = h, Bn.prototype = li(xu.prototype), Bn.prototype.constructor = Bn;
      function fe(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ve, this.__views__ = [];
      }
      function v1() {
        var t = new fe(this.__wrapped__);
        return t.__actions__ = mn(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = mn(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = mn(this.__views__), t;
      }
      function g1() {
        if (this.__filtered__) {
          var t = new fe(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function y1() {
        var t = this.__wrapped__.value(), i = this.__dir__, u = re(t), a = i < 0, f = u ? t.length : 0, m = R_(0, f, this.__views__), g = m.start, x = m.end, N = x - g, O = a ? x : g - 1, D = this.__iteratees__, M = D.length, H = 0, Z = nn(N, this.__takeCount__);
        if (!u || !a && f == N && Z == N)
          return wp(t, this.__actions__);
        var J = [];
        e:
          for (; N-- && H < Z; ) {
            O += i;
            for (var ue = -1, b = t[O]; ++ue < M; ) {
              var ae = D[ue], pe = ae.iteratee, Ln = ae.type, cn = pe(b);
              if (Ln == de)
                b = cn;
              else if (!cn) {
                if (Ln == le)
                  continue e;
                break e;
              }
            }
            J[H++] = b;
          }
        return J;
      }
      fe.prototype = li(xu.prototype), fe.prototype.constructor = fe;
      function Nr(t) {
        var i = -1, u = t == null ? 0 : t.length;
        for (this.clear(); ++i < u; ) {
          var a = t[i];
          this.set(a[0], a[1]);
        }
      }
      function _1() {
        this.__data__ = qi ? qi(null) : {}, this.size = 0;
      }
      function w1(t) {
        var i = this.has(t) && delete this.__data__[t];
        return this.size -= i ? 1 : 0, i;
      }
      function x1(t) {
        var i = this.__data__;
        if (qi) {
          var u = i[t];
          return u === p ? r : u;
        }
        return _e.call(i, t) ? i[t] : r;
      }
      function S1(t) {
        var i = this.__data__;
        return qi ? i[t] !== r : _e.call(i, t);
      }
      function E1(t, i) {
        var u = this.__data__;
        return this.size += this.has(t) ? 0 : 1, u[t] = qi && i === r ? p : i, this;
      }
      Nr.prototype.clear = _1, Nr.prototype.delete = w1, Nr.prototype.get = x1, Nr.prototype.has = S1, Nr.prototype.set = E1;
      function Ct(t) {
        var i = -1, u = t == null ? 0 : t.length;
        for (this.clear(); ++i < u; ) {
          var a = t[i];
          this.set(a[0], a[1]);
        }
      }
      function k1() {
        this.__data__ = [], this.size = 0;
      }
      function C1(t) {
        var i = this.__data__, u = Su(i, t);
        if (u < 0)
          return !1;
        var a = i.length - 1;
        return u == a ? i.pop() : mu.call(i, u, 1), --this.size, !0;
      }
      function N1(t) {
        var i = this.__data__, u = Su(i, t);
        return u < 0 ? r : i[u][1];
      }
      function P1(t) {
        return Su(this.__data__, t) > -1;
      }
      function T1(t, i) {
        var u = this.__data__, a = Su(u, t);
        return a < 0 ? (++this.size, u.push([t, i])) : u[a][1] = i, this;
      }
      Ct.prototype.clear = k1, Ct.prototype.delete = C1, Ct.prototype.get = N1, Ct.prototype.has = P1, Ct.prototype.set = T1;
      function Nt(t) {
        var i = -1, u = t == null ? 0 : t.length;
        for (this.clear(); ++i < u; ) {
          var a = t[i];
          this.set(a[0], a[1]);
        }
      }
      function L1() {
        this.size = 0, this.__data__ = {
          hash: new Nr(),
          map: new (Xi || Ct)(),
          string: new Nr()
        };
      }
      function R1(t) {
        var i = Ou(this, t).delete(t);
        return this.size -= i ? 1 : 0, i;
      }
      function I1(t) {
        return Ou(this, t).get(t);
      }
      function $1(t) {
        return Ou(this, t).has(t);
      }
      function A1(t, i) {
        var u = Ou(this, t), a = u.size;
        return u.set(t, i), this.size += u.size == a ? 0 : 1, this;
      }
      Nt.prototype.clear = L1, Nt.prototype.delete = R1, Nt.prototype.get = I1, Nt.prototype.has = $1, Nt.prototype.set = A1;
      function Pr(t) {
        var i = -1, u = t == null ? 0 : t.length;
        for (this.__data__ = new Nt(); ++i < u; )
          this.add(t[i]);
      }
      function O1(t) {
        return this.__data__.set(t, p), this;
      }
      function D1(t) {
        return this.__data__.has(t);
      }
      Pr.prototype.add = Pr.prototype.push = O1, Pr.prototype.has = D1;
      function nt(t) {
        var i = this.__data__ = new Ct(t);
        this.size = i.size;
      }
      function z1() {
        this.__data__ = new Ct(), this.size = 0;
      }
      function M1(t) {
        var i = this.__data__, u = i.delete(t);
        return this.size = i.size, u;
      }
      function F1(t) {
        return this.__data__.get(t);
      }
      function j1(t) {
        return this.__data__.has(t);
      }
      function U1(t, i) {
        var u = this.__data__;
        if (u instanceof Ct) {
          var a = u.__data__;
          if (!Xi || a.length < o - 1)
            return a.push([t, i]), this.size = ++u.size, this;
          u = this.__data__ = new Nt(a);
        }
        return u.set(t, i), this.size = u.size, this;
      }
      nt.prototype.clear = z1, nt.prototype.delete = M1, nt.prototype.get = F1, nt.prototype.has = j1, nt.prototype.set = U1;
      function qd(t, i) {
        var u = re(t), a = !u && $r(t), f = !u && !a && er(t), m = !u && !a && !f && ai(t), g = u || a || f || m, x = g ? Fs(t.length, Z0) : [], N = x.length;
        for (var O in t)
          (i || _e.call(t, O)) && !(g && // Safari 9 has enumerable `arguments.length` in strict mode.
          (O == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          f && (O == "offset" || O == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          m && (O == "buffer" || O == "byteLength" || O == "byteOffset") || // Skip index properties.
          Rt(O, N))) && x.push(O);
        return x;
      }
      function Jd(t) {
        var i = t.length;
        return i ? t[na(0, i - 1)] : r;
      }
      function B1(t, i) {
        return Du(mn(t), Tr(i, 0, t.length));
      }
      function K1(t) {
        return Du(mn(t));
      }
      function Vs(t, i, u) {
        (u !== r && !tt(t[i], u) || u === r && !(i in t)) && Pt(t, i, u);
      }
      function bi(t, i, u) {
        var a = t[i];
        (!(_e.call(t, i) && tt(a, u)) || u === r && !(i in t)) && Pt(t, i, u);
      }
      function Su(t, i) {
        for (var u = t.length; u--; )
          if (tt(t[u][0], i))
            return u;
        return -1;
      }
      function W1(t, i, u, a) {
        return Zt(t, function(f, m, g) {
          i(a, f, u(f), g);
        }), a;
      }
      function bd(t, i) {
        return t && mt(i, Qe(i), t);
      }
      function H1(t, i) {
        return t && mt(i, gn(i), t);
      }
      function Pt(t, i, u) {
        i == "__proto__" && vu ? vu(t, i, {
          configurable: !0,
          enumerable: !0,
          value: u,
          writable: !0
        }) : t[i] = u;
      }
      function Gs(t, i) {
        for (var u = -1, a = i.length, f = P(a), m = t == null; ++u < a; )
          f[u] = m ? r : Na(t, i[u]);
        return f;
      }
      function Tr(t, i, u) {
        return t === t && (u !== r && (t = t <= u ? t : u), i !== r && (t = t >= i ? t : i)), t;
      }
      function Kn(t, i, u, a, f, m) {
        var g, x = i & S, N = i & C, O = i & R;
        if (u && (g = f ? u(t, a, f, m) : u(t)), g !== r)
          return g;
        if (!Re(t))
          return t;
        var D = re(t);
        if (D) {
          if (g = $_(t), !x)
            return mn(t, g);
        } else {
          var M = tn(t), H = M == eu || M == nd;
          if (er(t))
            return Ep(t, x);
          if (M == kt || M == pt || H && !f) {
            if (g = N || H ? {} : Kp(t), !x)
              return N ? x_(t, H1(g, t)) : w_(t, bd(g, t));
          } else {
            if (!Ee[M])
              return f ? t : {};
            g = A_(t, M, x);
          }
        }
        m || (m = new nt());
        var Z = m.get(t);
        if (Z)
          return Z;
        m.set(t, g), gh(t) ? t.forEach(function(b) {
          g.add(Kn(b, i, u, b, t, m));
        }) : mh(t) && t.forEach(function(b, ae) {
          g.set(ae, Kn(b, i, u, ae, t, m));
        });
        var J = O ? N ? da : fa : N ? gn : Qe, ue = D ? r : J(t);
        return jn(ue || t, function(b, ae) {
          ue && (ae = b, b = t[ae]), bi(g, ae, Kn(b, i, u, ae, t, m));
        }), g;
      }
      function V1(t) {
        var i = Qe(t);
        return function(u) {
          return ep(u, t, i);
        };
      }
      function ep(t, i, u) {
        var a = u.length;
        if (t == null)
          return !a;
        for (t = Se(t); a--; ) {
          var f = u[a], m = i[f], g = t[f];
          if (g === r && !(f in t) || !m(g))
            return !1;
        }
        return !0;
      }
      function np(t, i, u) {
        if (typeof t != "function")
          throw new Un(c);
        return ul(function() {
          t.apply(r, u);
        }, i);
      }
      function el(t, i, u, a) {
        var f = -1, m = lu, g = !0, x = t.length, N = [], O = i.length;
        if (!x)
          return N;
        u && (i = Te(i, Nn(u))), a ? (m = $s, g = !1) : i.length >= o && (m = Qi, g = !1, i = new Pr(i));
        e:
          for (; ++f < x; ) {
            var D = t[f], M = u == null ? D : u(D);
            if (D = a || D !== 0 ? D : 0, g && M === M) {
              for (var H = O; H--; )
                if (i[H] === M)
                  continue e;
              N.push(D);
            } else m(i, M, a) || N.push(D);
          }
        return N;
      }
      var Zt = Tp(ht), tp = Tp(Ys, !0);
      function G1(t, i) {
        var u = !0;
        return Zt(t, function(a, f, m) {
          return u = !!i(a, f, m), u;
        }), u;
      }
      function Eu(t, i, u) {
        for (var a = -1, f = t.length; ++a < f; ) {
          var m = t[a], g = i(m);
          if (g != null && (x === r ? g === g && !Tn(g) : u(g, x)))
            var x = g, N = m;
        }
        return N;
      }
      function Q1(t, i, u, a) {
        var f = t.length;
        for (u = ie(u), u < 0 && (u = -u > f ? 0 : f + u), a = a === r || a > f ? f : ie(a), a < 0 && (a += f), a = u > a ? 0 : _h(a); u < a; )
          t[u++] = i;
        return t;
      }
      function rp(t, i) {
        var u = [];
        return Zt(t, function(a, f, m) {
          i(a, f, m) && u.push(a);
        }), u;
      }
      function qe(t, i, u, a, f) {
        var m = -1, g = t.length;
        for (u || (u = D_), f || (f = []); ++m < g; ) {
          var x = t[m];
          i > 0 && u(x) ? i > 1 ? qe(x, i - 1, u, a, f) : Qt(f, x) : a || (f[f.length] = x);
        }
        return f;
      }
      var Qs = Lp(), ip = Lp(!0);
      function ht(t, i) {
        return t && Qs(t, i, Qe);
      }
      function Ys(t, i) {
        return t && ip(t, i, Qe);
      }
      function ku(t, i) {
        return Gt(i, function(u) {
          return It(t[u]);
        });
      }
      function Lr(t, i) {
        i = Jt(i, t);
        for (var u = 0, a = i.length; t != null && u < a; )
          t = t[vt(i[u++])];
        return u && u == a ? t : r;
      }
      function lp(t, i, u) {
        var a = i(t);
        return re(t) ? a : Qt(a, u(t));
      }
      function sn(t) {
        return t == null ? t === r ? Sy : wy : Cr && Cr in Se(t) ? L_(t) : K_(t);
      }
      function Xs(t, i) {
        return t > i;
      }
      function Y1(t, i) {
        return t != null && _e.call(t, i);
      }
      function X1(t, i) {
        return t != null && i in Se(t);
      }
      function Z1(t, i, u) {
        return t >= nn(i, u) && t < He(i, u);
      }
      function Zs(t, i, u) {
        for (var a = u ? $s : lu, f = t[0].length, m = t.length, g = m, x = P(m), N = 1 / 0, O = []; g--; ) {
          var D = t[g];
          g && i && (D = Te(D, Nn(i))), N = nn(D.length, N), x[g] = !u && (i || f >= 120 && D.length >= 120) ? new Pr(g && D) : r;
        }
        D = t[0];
        var M = -1, H = x[0];
        e:
          for (; ++M < f && O.length < N; ) {
            var Z = D[M], J = i ? i(Z) : Z;
            if (Z = u || Z !== 0 ? Z : 0, !(H ? Qi(H, J) : a(O, J, u))) {
              for (g = m; --g; ) {
                var ue = x[g];
                if (!(ue ? Qi(ue, J) : a(t[g], J, u)))
                  continue e;
              }
              H && H.push(J), O.push(Z);
            }
          }
        return O;
      }
      function q1(t, i, u, a) {
        return ht(t, function(f, m, g) {
          i(a, u(f), m, g);
        }), a;
      }
      function nl(t, i, u) {
        i = Jt(i, t), t = Gp(t, i);
        var a = t == null ? t : t[vt(Hn(i))];
        return a == null ? r : Cn(a, t, u);
      }
      function up(t) {
        return De(t) && sn(t) == pt;
      }
      function J1(t) {
        return De(t) && sn(t) == Gi;
      }
      function b1(t) {
        return De(t) && sn(t) == Bi;
      }
      function tl(t, i, u, a, f) {
        return t === i ? !0 : t == null || i == null || !De(t) && !De(i) ? t !== t && i !== i : e_(t, i, u, a, tl, f);
      }
      function e_(t, i, u, a, f, m) {
        var g = re(t), x = re(i), N = g ? Mn : tn(t), O = x ? Mn : tn(i);
        N = N == pt ? kt : N, O = O == pt ? kt : O;
        var D = N == kt, M = O == kt, H = N == O;
        if (H && er(t)) {
          if (!er(i))
            return !1;
          g = !0, D = !1;
        }
        if (H && !D)
          return m || (m = new nt()), g || ai(t) ? jp(t, i, u, a, f, m) : P_(t, i, N, u, a, f, m);
        if (!(u & L)) {
          var Z = D && _e.call(t, "__wrapped__"), J = M && _e.call(i, "__wrapped__");
          if (Z || J) {
            var ue = Z ? t.value() : t, b = J ? i.value() : i;
            return m || (m = new nt()), f(ue, b, u, a, m);
          }
        }
        return H ? (m || (m = new nt()), T_(t, i, u, a, f, m)) : !1;
      }
      function n_(t) {
        return De(t) && tn(t) == Jn;
      }
      function qs(t, i, u, a) {
        var f = u.length, m = f, g = !a;
        if (t == null)
          return !m;
        for (t = Se(t); f--; ) {
          var x = u[f];
          if (g && x[2] ? x[1] !== t[x[0]] : !(x[0] in t))
            return !1;
        }
        for (; ++f < m; ) {
          x = u[f];
          var N = x[0], O = t[N], D = x[1];
          if (g && x[2]) {
            if (O === r && !(N in t))
              return !1;
          } else {
            var M = new nt();
            if (a)
              var H = a(O, D, N, t, i, M);
            if (!(H === r ? tl(D, O, L | A, a, M) : H))
              return !1;
          }
        }
        return !0;
      }
      function op(t) {
        if (!Re(t) || M_(t))
          return !1;
        var i = It(t) ? n1 : Vy;
        return i.test(Ir(t));
      }
      function t_(t) {
        return De(t) && sn(t) == Wi;
      }
      function r_(t) {
        return De(t) && tn(t) == bn;
      }
      function i_(t) {
        return De(t) && Bu(t.length) && !!Ce[sn(t)];
      }
      function sp(t) {
        return typeof t == "function" ? t : t == null ? yn : typeof t == "object" ? re(t) ? fp(t[0], t[1]) : cp(t) : Rh(t);
      }
      function Js(t) {
        if (!ll(t))
          return o1(t);
        var i = [];
        for (var u in Se(t))
          _e.call(t, u) && u != "constructor" && i.push(u);
        return i;
      }
      function l_(t) {
        if (!Re(t))
          return B_(t);
        var i = ll(t), u = [];
        for (var a in t)
          a == "constructor" && (i || !_e.call(t, a)) || u.push(a);
        return u;
      }
      function bs(t, i) {
        return t < i;
      }
      function ap(t, i) {
        var u = -1, a = vn(t) ? P(t.length) : [];
        return Zt(t, function(f, m, g) {
          a[++u] = i(f, m, g);
        }), a;
      }
      function cp(t) {
        var i = ha(t);
        return i.length == 1 && i[0][2] ? Hp(i[0][0], i[0][1]) : function(u) {
          return u === t || qs(u, t, i);
        };
      }
      function fp(t, i) {
        return va(t) && Wp(i) ? Hp(vt(t), i) : function(u) {
          var a = Na(u, t);
          return a === r && a === i ? Pa(u, t) : tl(i, a, L | A);
        };
      }
      function Cu(t, i, u, a, f) {
        t !== i && Qs(i, function(m, g) {
          if (f || (f = new nt()), Re(m))
            u_(t, i, g, u, Cu, a, f);
          else {
            var x = a ? a(ya(t, g), m, g + "", t, i, f) : r;
            x === r && (x = m), Vs(t, g, x);
          }
        }, gn);
      }
      function u_(t, i, u, a, f, m, g) {
        var x = ya(t, u), N = ya(i, u), O = g.get(N);
        if (O) {
          Vs(t, u, O);
          return;
        }
        var D = m ? m(x, N, u + "", t, i, g) : r, M = D === r;
        if (M) {
          var H = re(N), Z = !H && er(N), J = !H && !Z && ai(N);
          D = N, H || Z || J ? re(x) ? D = x : Me(x) ? D = mn(x) : Z ? (M = !1, D = Ep(N, !0)) : J ? (M = !1, D = kp(N, !0)) : D = [] : ol(N) || $r(N) ? (D = x, $r(x) ? D = wh(x) : (!Re(x) || It(x)) && (D = Kp(N))) : M = !1;
        }
        M && (g.set(N, D), f(D, N, a, m, g), g.delete(N)), Vs(t, u, D);
      }
      function dp(t, i) {
        var u = t.length;
        if (u)
          return i += i < 0 ? u : 0, Rt(i, u) ? t[i] : r;
      }
      function pp(t, i, u) {
        i.length ? i = Te(i, function(m) {
          return re(m) ? function(g) {
            return Lr(g, m.length === 1 ? m[0] : m);
          } : m;
        }) : i = [yn];
        var a = -1;
        i = Te(i, Nn(q()));
        var f = ap(t, function(m, g, x) {
          var N = Te(i, function(O) {
            return O(m);
          });
          return { criteria: N, index: ++a, value: m };
        });
        return A0(f, function(m, g) {
          return __(m, g, u);
        });
      }
      function o_(t, i) {
        return hp(t, i, function(u, a) {
          return Pa(t, a);
        });
      }
      function hp(t, i, u) {
        for (var a = -1, f = i.length, m = {}; ++a < f; ) {
          var g = i[a], x = Lr(t, g);
          u(x, g) && rl(m, Jt(g, t), x);
        }
        return m;
      }
      function s_(t) {
        return function(i) {
          return Lr(i, t);
        };
      }
      function ea(t, i, u, a) {
        var f = a ? $0 : Jr, m = -1, g = i.length, x = t;
        for (t === i && (i = mn(i)), u && (x = Te(t, Nn(u))); ++m < g; )
          for (var N = 0, O = i[m], D = u ? u(O) : O; (N = f(x, D, N, a)) > -1; )
            x !== t && mu.call(x, N, 1), mu.call(t, N, 1);
        return t;
      }
      function mp(t, i) {
        for (var u = t ? i.length : 0, a = u - 1; u--; ) {
          var f = i[u];
          if (u == a || f !== m) {
            var m = f;
            Rt(f) ? mu.call(t, f, 1) : ia(t, f);
          }
        }
        return t;
      }
      function na(t, i) {
        return t + yu(Xd() * (i - t + 1));
      }
      function a_(t, i, u, a) {
        for (var f = -1, m = He(gu((i - t) / (u || 1)), 0), g = P(m); m--; )
          g[a ? m : ++f] = t, t += u;
        return g;
      }
      function ta(t, i) {
        var u = "";
        if (!t || i < 1 || i > B)
          return u;
        do
          i % 2 && (u += t), i = yu(i / 2), i && (t += t);
        while (i);
        return u;
      }
      function oe(t, i) {
        return _a(Vp(t, i, yn), t + "");
      }
      function c_(t) {
        return Jd(ci(t));
      }
      function f_(t, i) {
        var u = ci(t);
        return Du(u, Tr(i, 0, u.length));
      }
      function rl(t, i, u, a) {
        if (!Re(t))
          return t;
        i = Jt(i, t);
        for (var f = -1, m = i.length, g = m - 1, x = t; x != null && ++f < m; ) {
          var N = vt(i[f]), O = u;
          if (N === "__proto__" || N === "constructor" || N === "prototype")
            return t;
          if (f != g) {
            var D = x[N];
            O = a ? a(D, N, x) : r, O === r && (O = Re(D) ? D : Rt(i[f + 1]) ? [] : {});
          }
          bi(x, N, O), x = x[N];
        }
        return t;
      }
      var vp = _u ? function(t, i) {
        return _u.set(t, i), t;
      } : yn, d_ = vu ? function(t, i) {
        return vu(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: La(i),
          writable: !0
        });
      } : yn;
      function p_(t) {
        return Du(ci(t));
      }
      function Wn(t, i, u) {
        var a = -1, f = t.length;
        i < 0 && (i = -i > f ? 0 : f + i), u = u > f ? f : u, u < 0 && (u += f), f = i > u ? 0 : u - i >>> 0, i >>>= 0;
        for (var m = P(f); ++a < f; )
          m[a] = t[a + i];
        return m;
      }
      function h_(t, i) {
        var u;
        return Zt(t, function(a, f, m) {
          return u = i(a, f, m), !u;
        }), !!u;
      }
      function Nu(t, i, u) {
        var a = 0, f = t == null ? a : t.length;
        if (typeof i == "number" && i === i && f <= Yr) {
          for (; a < f; ) {
            var m = a + f >>> 1, g = t[m];
            g !== null && !Tn(g) && (u ? g <= i : g < i) ? a = m + 1 : f = m;
          }
          return f;
        }
        return ra(t, i, yn, u);
      }
      function ra(t, i, u, a) {
        var f = 0, m = t == null ? 0 : t.length;
        if (m === 0)
          return 0;
        i = u(i);
        for (var g = i !== i, x = i === null, N = Tn(i), O = i === r; f < m; ) {
          var D = yu((f + m) / 2), M = u(t[D]), H = M !== r, Z = M === null, J = M === M, ue = Tn(M);
          if (g)
            var b = a || J;
          else O ? b = J && (a || H) : x ? b = J && H && (a || !Z) : N ? b = J && H && !Z && (a || !ue) : Z || ue ? b = !1 : b = a ? M <= i : M < i;
          b ? f = D + 1 : m = D;
        }
        return nn(m, Be);
      }
      function gp(t, i) {
        for (var u = -1, a = t.length, f = 0, m = []; ++u < a; ) {
          var g = t[u], x = i ? i(g) : g;
          if (!u || !tt(x, N)) {
            var N = x;
            m[f++] = g === 0 ? 0 : g;
          }
        }
        return m;
      }
      function yp(t) {
        return typeof t == "number" ? t : Tn(t) ? te : +t;
      }
      function Pn(t) {
        if (typeof t == "string")
          return t;
        if (re(t))
          return Te(t, Pn) + "";
        if (Tn(t))
          return Zd ? Zd.call(t) : "";
        var i = t + "";
        return i == "0" && 1 / t == -X ? "-0" : i;
      }
      function qt(t, i, u) {
        var a = -1, f = lu, m = t.length, g = !0, x = [], N = x;
        if (u)
          g = !1, f = $s;
        else if (m >= o) {
          var O = i ? null : C_(t);
          if (O)
            return ou(O);
          g = !1, f = Qi, N = new Pr();
        } else
          N = i ? [] : x;
        e:
          for (; ++a < m; ) {
            var D = t[a], M = i ? i(D) : D;
            if (D = u || D !== 0 ? D : 0, g && M === M) {
              for (var H = N.length; H--; )
                if (N[H] === M)
                  continue e;
              i && N.push(M), x.push(D);
            } else f(N, M, u) || (N !== x && N.push(M), x.push(D));
          }
        return x;
      }
      function ia(t, i) {
        return i = Jt(i, t), t = Gp(t, i), t == null || delete t[vt(Hn(i))];
      }
      function _p(t, i, u, a) {
        return rl(t, i, u(Lr(t, i)), a);
      }
      function Pu(t, i, u, a) {
        for (var f = t.length, m = a ? f : -1; (a ? m-- : ++m < f) && i(t[m], m, t); )
          ;
        return u ? Wn(t, a ? 0 : m, a ? m + 1 : f) : Wn(t, a ? m + 1 : 0, a ? f : m);
      }
      function wp(t, i) {
        var u = t;
        return u instanceof fe && (u = u.value()), As(i, function(a, f) {
          return f.func.apply(f.thisArg, Qt([a], f.args));
        }, u);
      }
      function la(t, i, u) {
        var a = t.length;
        if (a < 2)
          return a ? qt(t[0]) : [];
        for (var f = -1, m = P(a); ++f < a; )
          for (var g = t[f], x = -1; ++x < a; )
            x != f && (m[f] = el(m[f] || g, t[x], i, u));
        return qt(qe(m, 1), i, u);
      }
      function xp(t, i, u) {
        for (var a = -1, f = t.length, m = i.length, g = {}; ++a < f; ) {
          var x = a < m ? i[a] : r;
          u(g, t[a], x);
        }
        return g;
      }
      function ua(t) {
        return Me(t) ? t : [];
      }
      function oa(t) {
        return typeof t == "function" ? t : yn;
      }
      function Jt(t, i) {
        return re(t) ? t : va(t, i) ? [t] : Zp(ye(t));
      }
      var m_ = oe;
      function bt(t, i, u) {
        var a = t.length;
        return u = u === r ? a : u, !i && u >= a ? t : Wn(t, i, u);
      }
      var Sp = t1 || function(t) {
        return Ze.clearTimeout(t);
      };
      function Ep(t, i) {
        if (i)
          return t.slice();
        var u = t.length, a = Hd ? Hd(u) : new t.constructor(u);
        return t.copy(a), a;
      }
      function sa(t) {
        var i = new t.constructor(t.byteLength);
        return new pu(i).set(new pu(t)), i;
      }
      function v_(t, i) {
        var u = i ? sa(t.buffer) : t.buffer;
        return new t.constructor(u, t.byteOffset, t.byteLength);
      }
      function g_(t) {
        var i = new t.constructor(t.source, ud.exec(t));
        return i.lastIndex = t.lastIndex, i;
      }
      function y_(t) {
        return Ji ? Se(Ji.call(t)) : {};
      }
      function kp(t, i) {
        var u = i ? sa(t.buffer) : t.buffer;
        return new t.constructor(u, t.byteOffset, t.length);
      }
      function Cp(t, i) {
        if (t !== i) {
          var u = t !== r, a = t === null, f = t === t, m = Tn(t), g = i !== r, x = i === null, N = i === i, O = Tn(i);
          if (!x && !O && !m && t > i || m && g && N && !x && !O || a && g && N || !u && N || !f)
            return 1;
          if (!a && !m && !O && t < i || O && u && f && !a && !m || x && u && f || !g && f || !N)
            return -1;
        }
        return 0;
      }
      function __(t, i, u) {
        for (var a = -1, f = t.criteria, m = i.criteria, g = f.length, x = u.length; ++a < g; ) {
          var N = Cp(f[a], m[a]);
          if (N) {
            if (a >= x)
              return N;
            var O = u[a];
            return N * (O == "desc" ? -1 : 1);
          }
        }
        return t.index - i.index;
      }
      function Np(t, i, u, a) {
        for (var f = -1, m = t.length, g = u.length, x = -1, N = i.length, O = He(m - g, 0), D = P(N + O), M = !a; ++x < N; )
          D[x] = i[x];
        for (; ++f < g; )
          (M || f < m) && (D[u[f]] = t[f]);
        for (; O--; )
          D[x++] = t[f++];
        return D;
      }
      function Pp(t, i, u, a) {
        for (var f = -1, m = t.length, g = -1, x = u.length, N = -1, O = i.length, D = He(m - x, 0), M = P(D + O), H = !a; ++f < D; )
          M[f] = t[f];
        for (var Z = f; ++N < O; )
          M[Z + N] = i[N];
        for (; ++g < x; )
          (H || f < m) && (M[Z + u[g]] = t[f++]);
        return M;
      }
      function mn(t, i) {
        var u = -1, a = t.length;
        for (i || (i = P(a)); ++u < a; )
          i[u] = t[u];
        return i;
      }
      function mt(t, i, u, a) {
        var f = !u;
        u || (u = {});
        for (var m = -1, g = i.length; ++m < g; ) {
          var x = i[m], N = a ? a(u[x], t[x], x, u, t) : r;
          N === r && (N = t[x]), f ? Pt(u, x, N) : bi(u, x, N);
        }
        return u;
      }
      function w_(t, i) {
        return mt(t, ma(t), i);
      }
      function x_(t, i) {
        return mt(t, Up(t), i);
      }
      function Tu(t, i) {
        return function(u, a) {
          var f = re(u) ? N0 : W1, m = i ? i() : {};
          return f(u, t, q(a, 2), m);
        };
      }
      function ui(t) {
        return oe(function(i, u) {
          var a = -1, f = u.length, m = f > 1 ? u[f - 1] : r, g = f > 2 ? u[2] : r;
          for (m = t.length > 3 && typeof m == "function" ? (f--, m) : r, g && an(u[0], u[1], g) && (m = f < 3 ? r : m, f = 1), i = Se(i); ++a < f; ) {
            var x = u[a];
            x && t(i, x, a, m);
          }
          return i;
        });
      }
      function Tp(t, i) {
        return function(u, a) {
          if (u == null)
            return u;
          if (!vn(u))
            return t(u, a);
          for (var f = u.length, m = i ? f : -1, g = Se(u); (i ? m-- : ++m < f) && a(g[m], m, g) !== !1; )
            ;
          return u;
        };
      }
      function Lp(t) {
        return function(i, u, a) {
          for (var f = -1, m = Se(i), g = a(i), x = g.length; x--; ) {
            var N = g[t ? x : ++f];
            if (u(m[N], N, m) === !1)
              break;
          }
          return i;
        };
      }
      function S_(t, i, u) {
        var a = i & V, f = il(t);
        function m() {
          var g = this && this !== Ze && this instanceof m ? f : t;
          return g.apply(a ? u : this, arguments);
        }
        return m;
      }
      function Rp(t) {
        return function(i) {
          i = ye(i);
          var u = br(i) ? et(i) : r, a = u ? u[0] : i.charAt(0), f = u ? bt(u, 1).join("") : i.slice(1);
          return a[t]() + f;
        };
      }
      function oi(t) {
        return function(i) {
          return As(Th(Ph(i).replace(d0, "")), t, "");
        };
      }
      function il(t) {
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return new t();
            case 1:
              return new t(i[0]);
            case 2:
              return new t(i[0], i[1]);
            case 3:
              return new t(i[0], i[1], i[2]);
            case 4:
              return new t(i[0], i[1], i[2], i[3]);
            case 5:
              return new t(i[0], i[1], i[2], i[3], i[4]);
            case 6:
              return new t(i[0], i[1], i[2], i[3], i[4], i[5]);
            case 7:
              return new t(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
          }
          var u = li(t.prototype), a = t.apply(u, i);
          return Re(a) ? a : u;
        };
      }
      function E_(t, i, u) {
        var a = il(t);
        function f() {
          for (var m = arguments.length, g = P(m), x = m, N = si(f); x--; )
            g[x] = arguments[x];
          var O = m < 3 && g[0] !== N && g[m - 1] !== N ? [] : Yt(g, N);
          if (m -= O.length, m < u)
            return Dp(
              t,
              i,
              Lu,
              f.placeholder,
              r,
              g,
              O,
              r,
              r,
              u - m
            );
          var D = this && this !== Ze && this instanceof f ? a : t;
          return Cn(D, this, g);
        }
        return f;
      }
      function Ip(t) {
        return function(i, u, a) {
          var f = Se(i);
          if (!vn(i)) {
            var m = q(u, 3);
            i = Qe(i), u = function(x) {
              return m(f[x], x, f);
            };
          }
          var g = t(i, u, a);
          return g > -1 ? f[m ? i[g] : g] : r;
        };
      }
      function $p(t) {
        return Lt(function(i) {
          var u = i.length, a = u, f = Bn.prototype.thru;
          for (t && i.reverse(); a--; ) {
            var m = i[a];
            if (typeof m != "function")
              throw new Un(c);
            if (f && !g && Au(m) == "wrapper")
              var g = new Bn([], !0);
          }
          for (a = g ? a : u; ++a < u; ) {
            m = i[a];
            var x = Au(m), N = x == "wrapper" ? pa(m) : r;
            N && ga(N[0]) && N[1] == (W | w | F | G) && !N[4].length && N[9] == 1 ? g = g[Au(N[0])].apply(g, N[3]) : g = m.length == 1 && ga(m) ? g[x]() : g.thru(m);
          }
          return function() {
            var O = arguments, D = O[0];
            if (g && O.length == 1 && re(D))
              return g.plant(D).value();
            for (var M = 0, H = u ? i[M].apply(this, O) : D; ++M < u; )
              H = i[M].call(this, H);
            return H;
          };
        });
      }
      function Lu(t, i, u, a, f, m, g, x, N, O) {
        var D = i & W, M = i & V, H = i & _, Z = i & (w | I), J = i & se, ue = H ? r : il(t);
        function b() {
          for (var ae = arguments.length, pe = P(ae), Ln = ae; Ln--; )
            pe[Ln] = arguments[Ln];
          if (Z)
            var cn = si(b), Rn = D0(pe, cn);
          if (a && (pe = Np(pe, a, f, Z)), m && (pe = Pp(pe, m, g, Z)), ae -= Rn, Z && ae < O) {
            var Fe = Yt(pe, cn);
            return Dp(
              t,
              i,
              Lu,
              b.placeholder,
              u,
              pe,
              Fe,
              x,
              N,
              O - ae
            );
          }
          var rt = M ? u : this, At = H ? rt[t] : t;
          return ae = pe.length, x ? pe = W_(pe, x) : J && ae > 1 && pe.reverse(), D && N < ae && (pe.length = N), this && this !== Ze && this instanceof b && (At = ue || il(At)), At.apply(rt, pe);
        }
        return b;
      }
      function Ap(t, i) {
        return function(u, a) {
          return q1(u, t, i(a), {});
        };
      }
      function Ru(t, i) {
        return function(u, a) {
          var f;
          if (u === r && a === r)
            return i;
          if (u !== r && (f = u), a !== r) {
            if (f === r)
              return a;
            typeof u == "string" || typeof a == "string" ? (u = Pn(u), a = Pn(a)) : (u = yp(u), a = yp(a)), f = t(u, a);
          }
          return f;
        };
      }
      function aa(t) {
        return Lt(function(i) {
          return i = Te(i, Nn(q())), oe(function(u) {
            var a = this;
            return t(i, function(f) {
              return Cn(f, a, u);
            });
          });
        });
      }
      function Iu(t, i) {
        i = i === r ? " " : Pn(i);
        var u = i.length;
        if (u < 2)
          return u ? ta(i, t) : i;
        var a = ta(i, gu(t / ei(i)));
        return br(i) ? bt(et(a), 0, t).join("") : a.slice(0, t);
      }
      function k_(t, i, u, a) {
        var f = i & V, m = il(t);
        function g() {
          for (var x = -1, N = arguments.length, O = -1, D = a.length, M = P(D + N), H = this && this !== Ze && this instanceof g ? m : t; ++O < D; )
            M[O] = a[O];
          for (; N--; )
            M[O++] = arguments[++x];
          return Cn(H, f ? u : this, M);
        }
        return g;
      }
      function Op(t) {
        return function(i, u, a) {
          return a && typeof a != "number" && an(i, u, a) && (u = a = r), i = $t(i), u === r ? (u = i, i = 0) : u = $t(u), a = a === r ? i < u ? 1 : -1 : $t(a), a_(i, u, a, t);
        };
      }
      function $u(t) {
        return function(i, u) {
          return typeof i == "string" && typeof u == "string" || (i = Vn(i), u = Vn(u)), t(i, u);
        };
      }
      function Dp(t, i, u, a, f, m, g, x, N, O) {
        var D = i & w, M = D ? g : r, H = D ? r : g, Z = D ? m : r, J = D ? r : m;
        i |= D ? F : z, i &= ~(D ? z : F), i & v || (i &= -4);
        var ue = [
          t,
          i,
          f,
          Z,
          M,
          J,
          H,
          x,
          N,
          O
        ], b = u.apply(r, ue);
        return ga(t) && Qp(b, ue), b.placeholder = a, Yp(b, t, i);
      }
      function ca(t) {
        var i = We[t];
        return function(u, a) {
          if (u = Vn(u), a = a == null ? 0 : nn(ie(a), 292), a && Yd(u)) {
            var f = (ye(u) + "e").split("e"), m = i(f[0] + "e" + (+f[1] + a));
            return f = (ye(m) + "e").split("e"), +(f[0] + "e" + (+f[1] - a));
          }
          return i(u);
        };
      }
      var C_ = ri && 1 / ou(new ri([, -0]))[1] == X ? function(t) {
        return new ri(t);
      } : $a;
      function zp(t) {
        return function(i) {
          var u = tn(i);
          return u == Jn ? Us(i) : u == bn ? K0(i) : O0(i, t(i));
        };
      }
      function Tt(t, i, u, a, f, m, g, x) {
        var N = i & _;
        if (!N && typeof t != "function")
          throw new Un(c);
        var O = a ? a.length : 0;
        if (O || (i &= -97, a = f = r), g = g === r ? g : He(ie(g), 0), x = x === r ? x : ie(x), O -= f ? f.length : 0, i & z) {
          var D = a, M = f;
          a = f = r;
        }
        var H = N ? r : pa(t), Z = [
          t,
          i,
          u,
          a,
          f,
          D,
          M,
          m,
          g,
          x
        ];
        if (H && U_(Z, H), t = Z[0], i = Z[1], u = Z[2], a = Z[3], f = Z[4], x = Z[9] = Z[9] === r ? N ? 0 : t.length : He(Z[9] - O, 0), !x && i & (w | I) && (i &= -25), !i || i == V)
          var J = S_(t, i, u);
        else i == w || i == I ? J = E_(t, i, x) : (i == F || i == (V | F)) && !f.length ? J = k_(t, i, u, a) : J = Lu.apply(r, Z);
        var ue = H ? vp : Qp;
        return Yp(ue(J, Z), t, i);
      }
      function Mp(t, i, u, a) {
        return t === r || tt(t, ti[u]) && !_e.call(a, u) ? i : t;
      }
      function Fp(t, i, u, a, f, m) {
        return Re(t) && Re(i) && (m.set(i, t), Cu(t, i, r, Fp, m), m.delete(i)), t;
      }
      function N_(t) {
        return ol(t) ? r : t;
      }
      function jp(t, i, u, a, f, m) {
        var g = u & L, x = t.length, N = i.length;
        if (x != N && !(g && N > x))
          return !1;
        var O = m.get(t), D = m.get(i);
        if (O && D)
          return O == i && D == t;
        var M = -1, H = !0, Z = u & A ? new Pr() : r;
        for (m.set(t, i), m.set(i, t); ++M < x; ) {
          var J = t[M], ue = i[M];
          if (a)
            var b = g ? a(ue, J, M, i, t, m) : a(J, ue, M, t, i, m);
          if (b !== r) {
            if (b)
              continue;
            H = !1;
            break;
          }
          if (Z) {
            if (!Os(i, function(ae, pe) {
              if (!Qi(Z, pe) && (J === ae || f(J, ae, u, a, m)))
                return Z.push(pe);
            })) {
              H = !1;
              break;
            }
          } else if (!(J === ue || f(J, ue, u, a, m))) {
            H = !1;
            break;
          }
        }
        return m.delete(t), m.delete(i), H;
      }
      function P_(t, i, u, a, f, m, g) {
        switch (u) {
          case Zr:
            if (t.byteLength != i.byteLength || t.byteOffset != i.byteOffset)
              return !1;
            t = t.buffer, i = i.buffer;
          case Gi:
            return !(t.byteLength != i.byteLength || !m(new pu(t), new pu(i)));
          case Ui:
          case Bi:
          case Ki:
            return tt(+t, +i);
          case bl:
            return t.name == i.name && t.message == i.message;
          case Wi:
          case Hi:
            return t == i + "";
          case Jn:
            var x = Us;
          case bn:
            var N = a & L;
            if (x || (x = ou), t.size != i.size && !N)
              return !1;
            var O = g.get(t);
            if (O)
              return O == i;
            a |= A, g.set(t, i);
            var D = jp(x(t), x(i), a, f, m, g);
            return g.delete(t), D;
          case nu:
            if (Ji)
              return Ji.call(t) == Ji.call(i);
        }
        return !1;
      }
      function T_(t, i, u, a, f, m) {
        var g = u & L, x = fa(t), N = x.length, O = fa(i), D = O.length;
        if (N != D && !g)
          return !1;
        for (var M = N; M--; ) {
          var H = x[M];
          if (!(g ? H in i : _e.call(i, H)))
            return !1;
        }
        var Z = m.get(t), J = m.get(i);
        if (Z && J)
          return Z == i && J == t;
        var ue = !0;
        m.set(t, i), m.set(i, t);
        for (var b = g; ++M < N; ) {
          H = x[M];
          var ae = t[H], pe = i[H];
          if (a)
            var Ln = g ? a(pe, ae, H, i, t, m) : a(ae, pe, H, t, i, m);
          if (!(Ln === r ? ae === pe || f(ae, pe, u, a, m) : Ln)) {
            ue = !1;
            break;
          }
          b || (b = H == "constructor");
        }
        if (ue && !b) {
          var cn = t.constructor, Rn = i.constructor;
          cn != Rn && "constructor" in t && "constructor" in i && !(typeof cn == "function" && cn instanceof cn && typeof Rn == "function" && Rn instanceof Rn) && (ue = !1);
        }
        return m.delete(t), m.delete(i), ue;
      }
      function Lt(t) {
        return _a(Vp(t, r, eh), t + "");
      }
      function fa(t) {
        return lp(t, Qe, ma);
      }
      function da(t) {
        return lp(t, gn, Up);
      }
      var pa = _u ? function(t) {
        return _u.get(t);
      } : $a;
      function Au(t) {
        for (var i = t.name + "", u = ii[i], a = _e.call(ii, i) ? u.length : 0; a--; ) {
          var f = u[a], m = f.func;
          if (m == null || m == t)
            return f.name;
        }
        return i;
      }
      function si(t) {
        var i = _e.call(h, "placeholder") ? h : t;
        return i.placeholder;
      }
      function q() {
        var t = h.iteratee || Ra;
        return t = t === Ra ? sp : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function Ou(t, i) {
        var u = t.__data__;
        return z_(i) ? u[typeof i == "string" ? "string" : "hash"] : u.map;
      }
      function ha(t) {
        for (var i = Qe(t), u = i.length; u--; ) {
          var a = i[u], f = t[a];
          i[u] = [a, f, Wp(f)];
        }
        return i;
      }
      function Rr(t, i) {
        var u = j0(t, i);
        return op(u) ? u : r;
      }
      function L_(t) {
        var i = _e.call(t, Cr), u = t[Cr];
        try {
          t[Cr] = r;
          var a = !0;
        } catch {
        }
        var f = fu.call(t);
        return a && (i ? t[Cr] = u : delete t[Cr]), f;
      }
      var ma = Ks ? function(t) {
        return t == null ? [] : (t = Se(t), Gt(Ks(t), function(i) {
          return Gd.call(t, i);
        }));
      } : Aa, Up = Ks ? function(t) {
        for (var i = []; t; )
          Qt(i, ma(t)), t = hu(t);
        return i;
      } : Aa, tn = sn;
      (Ws && tn(new Ws(new ArrayBuffer(1))) != Zr || Xi && tn(new Xi()) != Jn || Hs && tn(Hs.resolve()) != td || ri && tn(new ri()) != bn || Zi && tn(new Zi()) != Vi) && (tn = function(t) {
        var i = sn(t), u = i == kt ? t.constructor : r, a = u ? Ir(u) : "";
        if (a)
          switch (a) {
            case f1:
              return Zr;
            case d1:
              return Jn;
            case p1:
              return td;
            case h1:
              return bn;
            case m1:
              return Vi;
          }
        return i;
      });
      function R_(t, i, u) {
        for (var a = -1, f = u.length; ++a < f; ) {
          var m = u[a], g = m.size;
          switch (m.type) {
            case "drop":
              t += g;
              break;
            case "dropRight":
              i -= g;
              break;
            case "take":
              i = nn(i, t + g);
              break;
            case "takeRight":
              t = He(t, i - g);
              break;
          }
        }
        return { start: t, end: i };
      }
      function I_(t) {
        var i = t.match(My);
        return i ? i[1].split(Fy) : [];
      }
      function Bp(t, i, u) {
        i = Jt(i, t);
        for (var a = -1, f = i.length, m = !1; ++a < f; ) {
          var g = vt(i[a]);
          if (!(m = t != null && u(t, g)))
            break;
          t = t[g];
        }
        return m || ++a != f ? m : (f = t == null ? 0 : t.length, !!f && Bu(f) && Rt(g, f) && (re(t) || $r(t)));
      }
      function $_(t) {
        var i = t.length, u = new t.constructor(i);
        return i && typeof t[0] == "string" && _e.call(t, "index") && (u.index = t.index, u.input = t.input), u;
      }
      function Kp(t) {
        return typeof t.constructor == "function" && !ll(t) ? li(hu(t)) : {};
      }
      function A_(t, i, u) {
        var a = t.constructor;
        switch (i) {
          case Gi:
            return sa(t);
          case Ui:
          case Bi:
            return new a(+t);
          case Zr:
            return v_(t, u);
          case hs:
          case ms:
          case vs:
          case gs:
          case ys:
          case _s:
          case ws:
          case xs:
          case Ss:
            return kp(t, u);
          case Jn:
            return new a();
          case Ki:
          case Hi:
            return new a(t);
          case Wi:
            return g_(t);
          case bn:
            return new a();
          case nu:
            return y_(t);
        }
      }
      function O_(t, i) {
        var u = i.length;
        if (!u)
          return t;
        var a = u - 1;
        return i[a] = (u > 1 ? "& " : "") + i[a], i = i.join(u > 2 ? ", " : " "), t.replace(zy, `{
/* [wrapped with ` + i + `] */
`);
      }
      function D_(t) {
        return re(t) || $r(t) || !!(Qd && t && t[Qd]);
      }
      function Rt(t, i) {
        var u = typeof t;
        return i = i ?? B, !!i && (u == "number" || u != "symbol" && Qy.test(t)) && t > -1 && t % 1 == 0 && t < i;
      }
      function an(t, i, u) {
        if (!Re(u))
          return !1;
        var a = typeof i;
        return (a == "number" ? vn(u) && Rt(i, u.length) : a == "string" && i in u) ? tt(u[i], t) : !1;
      }
      function va(t, i) {
        if (re(t))
          return !1;
        var u = typeof t;
        return u == "number" || u == "symbol" || u == "boolean" || t == null || Tn(t) ? !0 : $y.test(t) || !Iy.test(t) || i != null && t in Se(i);
      }
      function z_(t) {
        var i = typeof t;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? t !== "__proto__" : t === null;
      }
      function ga(t) {
        var i = Au(t), u = h[i];
        if (typeof u != "function" || !(i in fe.prototype))
          return !1;
        if (t === u)
          return !0;
        var a = pa(u);
        return !!a && t === a[0];
      }
      function M_(t) {
        return !!Wd && Wd in t;
      }
      var F_ = au ? It : Oa;
      function ll(t) {
        var i = t && t.constructor, u = typeof i == "function" && i.prototype || ti;
        return t === u;
      }
      function Wp(t) {
        return t === t && !Re(t);
      }
      function Hp(t, i) {
        return function(u) {
          return u == null ? !1 : u[t] === i && (i !== r || t in Se(u));
        };
      }
      function j_(t) {
        var i = ju(t, function(a) {
          return u.size === y && u.clear(), a;
        }), u = i.cache;
        return i;
      }
      function U_(t, i) {
        var u = t[1], a = i[1], f = u | a, m = f < (V | _ | W), g = a == W && u == w || a == W && u == G && t[7].length <= i[8] || a == (W | G) && i[7].length <= i[8] && u == w;
        if (!(m || g))
          return t;
        a & V && (t[2] = i[2], f |= u & V ? 0 : v);
        var x = i[3];
        if (x) {
          var N = t[3];
          t[3] = N ? Np(N, x, i[4]) : x, t[4] = N ? Yt(t[3], k) : i[4];
        }
        return x = i[5], x && (N = t[5], t[5] = N ? Pp(N, x, i[6]) : x, t[6] = N ? Yt(t[5], k) : i[6]), x = i[7], x && (t[7] = x), a & W && (t[8] = t[8] == null ? i[8] : nn(t[8], i[8])), t[9] == null && (t[9] = i[9]), t[0] = i[0], t[1] = f, t;
      }
      function B_(t) {
        var i = [];
        if (t != null)
          for (var u in Se(t))
            i.push(u);
        return i;
      }
      function K_(t) {
        return fu.call(t);
      }
      function Vp(t, i, u) {
        return i = He(i === r ? t.length - 1 : i, 0), function() {
          for (var a = arguments, f = -1, m = He(a.length - i, 0), g = P(m); ++f < m; )
            g[f] = a[i + f];
          f = -1;
          for (var x = P(i + 1); ++f < i; )
            x[f] = a[f];
          return x[i] = u(g), Cn(t, this, x);
        };
      }
      function Gp(t, i) {
        return i.length < 2 ? t : Lr(t, Wn(i, 0, -1));
      }
      function W_(t, i) {
        for (var u = t.length, a = nn(i.length, u), f = mn(t); a--; ) {
          var m = i[a];
          t[a] = Rt(m, u) ? f[m] : r;
        }
        return t;
      }
      function ya(t, i) {
        if (!(i === "constructor" && typeof t[i] == "function") && i != "__proto__")
          return t[i];
      }
      var Qp = Xp(vp), ul = i1 || function(t, i) {
        return Ze.setTimeout(t, i);
      }, _a = Xp(d_);
      function Yp(t, i, u) {
        var a = i + "";
        return _a(t, O_(a, H_(I_(a), u)));
      }
      function Xp(t) {
        var i = 0, u = 0;
        return function() {
          var a = s1(), f = kn - (a - u);
          if (u = a, f > 0) {
            if (++i >= Oe)
              return arguments[0];
          } else
            i = 0;
          return t.apply(r, arguments);
        };
      }
      function Du(t, i) {
        var u = -1, a = t.length, f = a - 1;
        for (i = i === r ? a : i; ++u < i; ) {
          var m = na(u, f), g = t[m];
          t[m] = t[u], t[u] = g;
        }
        return t.length = i, t;
      }
      var Zp = j_(function(t) {
        var i = [];
        return t.charCodeAt(0) === 46 && i.push(""), t.replace(Ay, function(u, a, f, m) {
          i.push(f ? m.replace(By, "$1") : a || u);
        }), i;
      });
      function vt(t) {
        if (typeof t == "string" || Tn(t))
          return t;
        var i = t + "";
        return i == "0" && 1 / t == -X ? "-0" : i;
      }
      function Ir(t) {
        if (t != null) {
          try {
            return cu.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function H_(t, i) {
        return jn(Et, function(u) {
          var a = "_." + u[0];
          i & u[1] && !lu(t, a) && t.push(a);
        }), t.sort();
      }
      function qp(t) {
        if (t instanceof fe)
          return t.clone();
        var i = new Bn(t.__wrapped__, t.__chain__);
        return i.__actions__ = mn(t.__actions__), i.__index__ = t.__index__, i.__values__ = t.__values__, i;
      }
      function V_(t, i, u) {
        (u ? an(t, i, u) : i === r) ? i = 1 : i = He(ie(i), 0);
        var a = t == null ? 0 : t.length;
        if (!a || i < 1)
          return [];
        for (var f = 0, m = 0, g = P(gu(a / i)); f < a; )
          g[m++] = Wn(t, f, f += i);
        return g;
      }
      function G_(t) {
        for (var i = -1, u = t == null ? 0 : t.length, a = 0, f = []; ++i < u; ) {
          var m = t[i];
          m && (f[a++] = m);
        }
        return f;
      }
      function Q_() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var i = P(t - 1), u = arguments[0], a = t; a--; )
          i[a - 1] = arguments[a];
        return Qt(re(u) ? mn(u) : [u], qe(i, 1));
      }
      var Y_ = oe(function(t, i) {
        return Me(t) ? el(t, qe(i, 1, Me, !0)) : [];
      }), X_ = oe(function(t, i) {
        var u = Hn(i);
        return Me(u) && (u = r), Me(t) ? el(t, qe(i, 1, Me, !0), q(u, 2)) : [];
      }), Z_ = oe(function(t, i) {
        var u = Hn(i);
        return Me(u) && (u = r), Me(t) ? el(t, qe(i, 1, Me, !0), r, u) : [];
      });
      function q_(t, i, u) {
        var a = t == null ? 0 : t.length;
        return a ? (i = u || i === r ? 1 : ie(i), Wn(t, i < 0 ? 0 : i, a)) : [];
      }
      function J_(t, i, u) {
        var a = t == null ? 0 : t.length;
        return a ? (i = u || i === r ? 1 : ie(i), i = a - i, Wn(t, 0, i < 0 ? 0 : i)) : [];
      }
      function b_(t, i) {
        return t && t.length ? Pu(t, q(i, 3), !0, !0) : [];
      }
      function ew(t, i) {
        return t && t.length ? Pu(t, q(i, 3), !0) : [];
      }
      function nw(t, i, u, a) {
        var f = t == null ? 0 : t.length;
        return f ? (u && typeof u != "number" && an(t, i, u) && (u = 0, a = f), Q1(t, i, u, a)) : [];
      }
      function Jp(t, i, u) {
        var a = t == null ? 0 : t.length;
        if (!a)
          return -1;
        var f = u == null ? 0 : ie(u);
        return f < 0 && (f = He(a + f, 0)), uu(t, q(i, 3), f);
      }
      function bp(t, i, u) {
        var a = t == null ? 0 : t.length;
        if (!a)
          return -1;
        var f = a - 1;
        return u !== r && (f = ie(u), f = u < 0 ? He(a + f, 0) : nn(f, a - 1)), uu(t, q(i, 3), f, !0);
      }
      function eh(t) {
        var i = t == null ? 0 : t.length;
        return i ? qe(t, 1) : [];
      }
      function tw(t) {
        var i = t == null ? 0 : t.length;
        return i ? qe(t, X) : [];
      }
      function rw(t, i) {
        var u = t == null ? 0 : t.length;
        return u ? (i = i === r ? 1 : ie(i), qe(t, i)) : [];
      }
      function iw(t) {
        for (var i = -1, u = t == null ? 0 : t.length, a = {}; ++i < u; ) {
          var f = t[i];
          a[f[0]] = f[1];
        }
        return a;
      }
      function nh(t) {
        return t && t.length ? t[0] : r;
      }
      function lw(t, i, u) {
        var a = t == null ? 0 : t.length;
        if (!a)
          return -1;
        var f = u == null ? 0 : ie(u);
        return f < 0 && (f = He(a + f, 0)), Jr(t, i, f);
      }
      function uw(t) {
        var i = t == null ? 0 : t.length;
        return i ? Wn(t, 0, -1) : [];
      }
      var ow = oe(function(t) {
        var i = Te(t, ua);
        return i.length && i[0] === t[0] ? Zs(i) : [];
      }), sw = oe(function(t) {
        var i = Hn(t), u = Te(t, ua);
        return i === Hn(u) ? i = r : u.pop(), u.length && u[0] === t[0] ? Zs(u, q(i, 2)) : [];
      }), aw = oe(function(t) {
        var i = Hn(t), u = Te(t, ua);
        return i = typeof i == "function" ? i : r, i && u.pop(), u.length && u[0] === t[0] ? Zs(u, r, i) : [];
      });
      function cw(t, i) {
        return t == null ? "" : u1.call(t, i);
      }
      function Hn(t) {
        var i = t == null ? 0 : t.length;
        return i ? t[i - 1] : r;
      }
      function fw(t, i, u) {
        var a = t == null ? 0 : t.length;
        if (!a)
          return -1;
        var f = a;
        return u !== r && (f = ie(u), f = f < 0 ? He(a + f, 0) : nn(f, a - 1)), i === i ? H0(t, i, f) : uu(t, Dd, f, !0);
      }
      function dw(t, i) {
        return t && t.length ? dp(t, ie(i)) : r;
      }
      var pw = oe(th);
      function th(t, i) {
        return t && t.length && i && i.length ? ea(t, i) : t;
      }
      function hw(t, i, u) {
        return t && t.length && i && i.length ? ea(t, i, q(u, 2)) : t;
      }
      function mw(t, i, u) {
        return t && t.length && i && i.length ? ea(t, i, r, u) : t;
      }
      var vw = Lt(function(t, i) {
        var u = t == null ? 0 : t.length, a = Gs(t, i);
        return mp(t, Te(i, function(f) {
          return Rt(f, u) ? +f : f;
        }).sort(Cp)), a;
      });
      function gw(t, i) {
        var u = [];
        if (!(t && t.length))
          return u;
        var a = -1, f = [], m = t.length;
        for (i = q(i, 3); ++a < m; ) {
          var g = t[a];
          i(g, a, t) && (u.push(g), f.push(a));
        }
        return mp(t, f), u;
      }
      function wa(t) {
        return t == null ? t : c1.call(t);
      }
      function yw(t, i, u) {
        var a = t == null ? 0 : t.length;
        return a ? (u && typeof u != "number" && an(t, i, u) ? (i = 0, u = a) : (i = i == null ? 0 : ie(i), u = u === r ? a : ie(u)), Wn(t, i, u)) : [];
      }
      function _w(t, i) {
        return Nu(t, i);
      }
      function ww(t, i, u) {
        return ra(t, i, q(u, 2));
      }
      function xw(t, i) {
        var u = t == null ? 0 : t.length;
        if (u) {
          var a = Nu(t, i);
          if (a < u && tt(t[a], i))
            return a;
        }
        return -1;
      }
      function Sw(t, i) {
        return Nu(t, i, !0);
      }
      function Ew(t, i, u) {
        return ra(t, i, q(u, 2), !0);
      }
      function kw(t, i) {
        var u = t == null ? 0 : t.length;
        if (u) {
          var a = Nu(t, i, !0) - 1;
          if (tt(t[a], i))
            return a;
        }
        return -1;
      }
      function Cw(t) {
        return t && t.length ? gp(t) : [];
      }
      function Nw(t, i) {
        return t && t.length ? gp(t, q(i, 2)) : [];
      }
      function Pw(t) {
        var i = t == null ? 0 : t.length;
        return i ? Wn(t, 1, i) : [];
      }
      function Tw(t, i, u) {
        return t && t.length ? (i = u || i === r ? 1 : ie(i), Wn(t, 0, i < 0 ? 0 : i)) : [];
      }
      function Lw(t, i, u) {
        var a = t == null ? 0 : t.length;
        return a ? (i = u || i === r ? 1 : ie(i), i = a - i, Wn(t, i < 0 ? 0 : i, a)) : [];
      }
      function Rw(t, i) {
        return t && t.length ? Pu(t, q(i, 3), !1, !0) : [];
      }
      function Iw(t, i) {
        return t && t.length ? Pu(t, q(i, 3)) : [];
      }
      var $w = oe(function(t) {
        return qt(qe(t, 1, Me, !0));
      }), Aw = oe(function(t) {
        var i = Hn(t);
        return Me(i) && (i = r), qt(qe(t, 1, Me, !0), q(i, 2));
      }), Ow = oe(function(t) {
        var i = Hn(t);
        return i = typeof i == "function" ? i : r, qt(qe(t, 1, Me, !0), r, i);
      });
      function Dw(t) {
        return t && t.length ? qt(t) : [];
      }
      function zw(t, i) {
        return t && t.length ? qt(t, q(i, 2)) : [];
      }
      function Mw(t, i) {
        return i = typeof i == "function" ? i : r, t && t.length ? qt(t, r, i) : [];
      }
      function xa(t) {
        if (!(t && t.length))
          return [];
        var i = 0;
        return t = Gt(t, function(u) {
          if (Me(u))
            return i = He(u.length, i), !0;
        }), Fs(i, function(u) {
          return Te(t, Ds(u));
        });
      }
      function rh(t, i) {
        if (!(t && t.length))
          return [];
        var u = xa(t);
        return i == null ? u : Te(u, function(a) {
          return Cn(i, r, a);
        });
      }
      var Fw = oe(function(t, i) {
        return Me(t) ? el(t, i) : [];
      }), jw = oe(function(t) {
        return la(Gt(t, Me));
      }), Uw = oe(function(t) {
        var i = Hn(t);
        return Me(i) && (i = r), la(Gt(t, Me), q(i, 2));
      }), Bw = oe(function(t) {
        var i = Hn(t);
        return i = typeof i == "function" ? i : r, la(Gt(t, Me), r, i);
      }), Kw = oe(xa);
      function Ww(t, i) {
        return xp(t || [], i || [], bi);
      }
      function Hw(t, i) {
        return xp(t || [], i || [], rl);
      }
      var Vw = oe(function(t) {
        var i = t.length, u = i > 1 ? t[i - 1] : r;
        return u = typeof u == "function" ? (t.pop(), u) : r, rh(t, u);
      });
      function ih(t) {
        var i = h(t);
        return i.__chain__ = !0, i;
      }
      function Gw(t, i) {
        return i(t), t;
      }
      function zu(t, i) {
        return i(t);
      }
      var Qw = Lt(function(t) {
        var i = t.length, u = i ? t[0] : 0, a = this.__wrapped__, f = function(m) {
          return Gs(m, t);
        };
        return i > 1 || this.__actions__.length || !(a instanceof fe) || !Rt(u) ? this.thru(f) : (a = a.slice(u, +u + (i ? 1 : 0)), a.__actions__.push({
          func: zu,
          args: [f],
          thisArg: r
        }), new Bn(a, this.__chain__).thru(function(m) {
          return i && !m.length && m.push(r), m;
        }));
      });
      function Yw() {
        return ih(this);
      }
      function Xw() {
        return new Bn(this.value(), this.__chain__);
      }
      function Zw() {
        this.__values__ === r && (this.__values__ = yh(this.value()));
        var t = this.__index__ >= this.__values__.length, i = t ? r : this.__values__[this.__index__++];
        return { done: t, value: i };
      }
      function qw() {
        return this;
      }
      function Jw(t) {
        for (var i, u = this; u instanceof xu; ) {
          var a = qp(u);
          a.__index__ = 0, a.__values__ = r, i ? f.__wrapped__ = a : i = a;
          var f = a;
          u = u.__wrapped__;
        }
        return f.__wrapped__ = t, i;
      }
      function bw() {
        var t = this.__wrapped__;
        if (t instanceof fe) {
          var i = t;
          return this.__actions__.length && (i = new fe(this)), i = i.reverse(), i.__actions__.push({
            func: zu,
            args: [wa],
            thisArg: r
          }), new Bn(i, this.__chain__);
        }
        return this.thru(wa);
      }
      function ex() {
        return wp(this.__wrapped__, this.__actions__);
      }
      var nx = Tu(function(t, i, u) {
        _e.call(t, u) ? ++t[u] : Pt(t, u, 1);
      });
      function tx(t, i, u) {
        var a = re(t) ? Ad : G1;
        return u && an(t, i, u) && (i = r), a(t, q(i, 3));
      }
      function rx(t, i) {
        var u = re(t) ? Gt : rp;
        return u(t, q(i, 3));
      }
      var ix = Ip(Jp), lx = Ip(bp);
      function ux(t, i) {
        return qe(Mu(t, i), 1);
      }
      function ox(t, i) {
        return qe(Mu(t, i), X);
      }
      function sx(t, i, u) {
        return u = u === r ? 1 : ie(u), qe(Mu(t, i), u);
      }
      function lh(t, i) {
        var u = re(t) ? jn : Zt;
        return u(t, q(i, 3));
      }
      function uh(t, i) {
        var u = re(t) ? P0 : tp;
        return u(t, q(i, 3));
      }
      var ax = Tu(function(t, i, u) {
        _e.call(t, u) ? t[u].push(i) : Pt(t, u, [i]);
      });
      function cx(t, i, u, a) {
        t = vn(t) ? t : ci(t), u = u && !a ? ie(u) : 0;
        var f = t.length;
        return u < 0 && (u = He(f + u, 0)), Ku(t) ? u <= f && t.indexOf(i, u) > -1 : !!f && Jr(t, i, u) > -1;
      }
      var fx = oe(function(t, i, u) {
        var a = -1, f = typeof i == "function", m = vn(t) ? P(t.length) : [];
        return Zt(t, function(g) {
          m[++a] = f ? Cn(i, g, u) : nl(g, i, u);
        }), m;
      }), dx = Tu(function(t, i, u) {
        Pt(t, u, i);
      });
      function Mu(t, i) {
        var u = re(t) ? Te : ap;
        return u(t, q(i, 3));
      }
      function px(t, i, u, a) {
        return t == null ? [] : (re(i) || (i = i == null ? [] : [i]), u = a ? r : u, re(u) || (u = u == null ? [] : [u]), pp(t, i, u));
      }
      var hx = Tu(function(t, i, u) {
        t[u ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function mx(t, i, u) {
        var a = re(t) ? As : Md, f = arguments.length < 3;
        return a(t, q(i, 4), u, f, Zt);
      }
      function vx(t, i, u) {
        var a = re(t) ? T0 : Md, f = arguments.length < 3;
        return a(t, q(i, 4), u, f, tp);
      }
      function gx(t, i) {
        var u = re(t) ? Gt : rp;
        return u(t, Uu(q(i, 3)));
      }
      function yx(t) {
        var i = re(t) ? Jd : c_;
        return i(t);
      }
      function _x(t, i, u) {
        (u ? an(t, i, u) : i === r) ? i = 1 : i = ie(i);
        var a = re(t) ? B1 : f_;
        return a(t, i);
      }
      function wx(t) {
        var i = re(t) ? K1 : p_;
        return i(t);
      }
      function xx(t) {
        if (t == null)
          return 0;
        if (vn(t))
          return Ku(t) ? ei(t) : t.length;
        var i = tn(t);
        return i == Jn || i == bn ? t.size : Js(t).length;
      }
      function Sx(t, i, u) {
        var a = re(t) ? Os : h_;
        return u && an(t, i, u) && (i = r), a(t, q(i, 3));
      }
      var Ex = oe(function(t, i) {
        if (t == null)
          return [];
        var u = i.length;
        return u > 1 && an(t, i[0], i[1]) ? i = [] : u > 2 && an(i[0], i[1], i[2]) && (i = [i[0]]), pp(t, qe(i, 1), []);
      }), Fu = r1 || function() {
        return Ze.Date.now();
      };
      function kx(t, i) {
        if (typeof i != "function")
          throw new Un(c);
        return t = ie(t), function() {
          if (--t < 1)
            return i.apply(this, arguments);
        };
      }
      function oh(t, i, u) {
        return i = u ? r : i, i = t && i == null ? t.length : i, Tt(t, W, r, r, r, r, i);
      }
      function sh(t, i) {
        var u;
        if (typeof i != "function")
          throw new Un(c);
        return t = ie(t), function() {
          return --t > 0 && (u = i.apply(this, arguments)), t <= 1 && (i = r), u;
        };
      }
      var Sa = oe(function(t, i, u) {
        var a = V;
        if (u.length) {
          var f = Yt(u, si(Sa));
          a |= F;
        }
        return Tt(t, a, i, u, f);
      }), ah = oe(function(t, i, u) {
        var a = V | _;
        if (u.length) {
          var f = Yt(u, si(ah));
          a |= F;
        }
        return Tt(i, a, t, u, f);
      });
      function ch(t, i, u) {
        i = u ? r : i;
        var a = Tt(t, w, r, r, r, r, r, i);
        return a.placeholder = ch.placeholder, a;
      }
      function fh(t, i, u) {
        i = u ? r : i;
        var a = Tt(t, I, r, r, r, r, r, i);
        return a.placeholder = fh.placeholder, a;
      }
      function dh(t, i, u) {
        var a, f, m, g, x, N, O = 0, D = !1, M = !1, H = !0;
        if (typeof t != "function")
          throw new Un(c);
        i = Vn(i) || 0, Re(u) && (D = !!u.leading, M = "maxWait" in u, m = M ? He(Vn(u.maxWait) || 0, i) : m, H = "trailing" in u ? !!u.trailing : H);
        function Z(Fe) {
          var rt = a, At = f;
          return a = f = r, O = Fe, g = t.apply(At, rt), g;
        }
        function J(Fe) {
          return O = Fe, x = ul(ae, i), D ? Z(Fe) : g;
        }
        function ue(Fe) {
          var rt = Fe - N, At = Fe - O, Ih = i - rt;
          return M ? nn(Ih, m - At) : Ih;
        }
        function b(Fe) {
          var rt = Fe - N, At = Fe - O;
          return N === r || rt >= i || rt < 0 || M && At >= m;
        }
        function ae() {
          var Fe = Fu();
          if (b(Fe))
            return pe(Fe);
          x = ul(ae, ue(Fe));
        }
        function pe(Fe) {
          return x = r, H && a ? Z(Fe) : (a = f = r, g);
        }
        function Ln() {
          x !== r && Sp(x), O = 0, a = N = f = x = r;
        }
        function cn() {
          return x === r ? g : pe(Fu());
        }
        function Rn() {
          var Fe = Fu(), rt = b(Fe);
          if (a = arguments, f = this, N = Fe, rt) {
            if (x === r)
              return J(N);
            if (M)
              return Sp(x), x = ul(ae, i), Z(N);
          }
          return x === r && (x = ul(ae, i)), g;
        }
        return Rn.cancel = Ln, Rn.flush = cn, Rn;
      }
      var Cx = oe(function(t, i) {
        return np(t, 1, i);
      }), Nx = oe(function(t, i, u) {
        return np(t, Vn(i) || 0, u);
      });
      function Px(t) {
        return Tt(t, se);
      }
      function ju(t, i) {
        if (typeof t != "function" || i != null && typeof i != "function")
          throw new Un(c);
        var u = function() {
          var a = arguments, f = i ? i.apply(this, a) : a[0], m = u.cache;
          if (m.has(f))
            return m.get(f);
          var g = t.apply(this, a);
          return u.cache = m.set(f, g) || m, g;
        };
        return u.cache = new (ju.Cache || Nt)(), u;
      }
      ju.Cache = Nt;
      function Uu(t) {
        if (typeof t != "function")
          throw new Un(c);
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return !t.call(this);
            case 1:
              return !t.call(this, i[0]);
            case 2:
              return !t.call(this, i[0], i[1]);
            case 3:
              return !t.call(this, i[0], i[1], i[2]);
          }
          return !t.apply(this, i);
        };
      }
      function Tx(t) {
        return sh(2, t);
      }
      var Lx = m_(function(t, i) {
        i = i.length == 1 && re(i[0]) ? Te(i[0], Nn(q())) : Te(qe(i, 1), Nn(q()));
        var u = i.length;
        return oe(function(a) {
          for (var f = -1, m = nn(a.length, u); ++f < m; )
            a[f] = i[f].call(this, a[f]);
          return Cn(t, this, a);
        });
      }), Ea = oe(function(t, i) {
        var u = Yt(i, si(Ea));
        return Tt(t, F, r, i, u);
      }), ph = oe(function(t, i) {
        var u = Yt(i, si(ph));
        return Tt(t, z, r, i, u);
      }), Rx = Lt(function(t, i) {
        return Tt(t, G, r, r, r, i);
      });
      function Ix(t, i) {
        if (typeof t != "function")
          throw new Un(c);
        return i = i === r ? i : ie(i), oe(t, i);
      }
      function $x(t, i) {
        if (typeof t != "function")
          throw new Un(c);
        return i = i == null ? 0 : He(ie(i), 0), oe(function(u) {
          var a = u[i], f = bt(u, 0, i);
          return a && Qt(f, a), Cn(t, this, f);
        });
      }
      function Ax(t, i, u) {
        var a = !0, f = !0;
        if (typeof t != "function")
          throw new Un(c);
        return Re(u) && (a = "leading" in u ? !!u.leading : a, f = "trailing" in u ? !!u.trailing : f), dh(t, i, {
          leading: a,
          maxWait: i,
          trailing: f
        });
      }
      function Ox(t) {
        return oh(t, 1);
      }
      function Dx(t, i) {
        return Ea(oa(i), t);
      }
      function zx() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return re(t) ? t : [t];
      }
      function Mx(t) {
        return Kn(t, R);
      }
      function Fx(t, i) {
        return i = typeof i == "function" ? i : r, Kn(t, R, i);
      }
      function jx(t) {
        return Kn(t, S | R);
      }
      function Ux(t, i) {
        return i = typeof i == "function" ? i : r, Kn(t, S | R, i);
      }
      function Bx(t, i) {
        return i == null || ep(t, i, Qe(i));
      }
      function tt(t, i) {
        return t === i || t !== t && i !== i;
      }
      var Kx = $u(Xs), Wx = $u(function(t, i) {
        return t >= i;
      }), $r = up(/* @__PURE__ */ function() {
        return arguments;
      }()) ? up : function(t) {
        return De(t) && _e.call(t, "callee") && !Gd.call(t, "callee");
      }, re = P.isArray, Hx = Pd ? Nn(Pd) : J1;
      function vn(t) {
        return t != null && Bu(t.length) && !It(t);
      }
      function Me(t) {
        return De(t) && vn(t);
      }
      function Vx(t) {
        return t === !0 || t === !1 || De(t) && sn(t) == Ui;
      }
      var er = l1 || Oa, Gx = Td ? Nn(Td) : b1;
      function Qx(t) {
        return De(t) && t.nodeType === 1 && !ol(t);
      }
      function Yx(t) {
        if (t == null)
          return !0;
        if (vn(t) && (re(t) || typeof t == "string" || typeof t.splice == "function" || er(t) || ai(t) || $r(t)))
          return !t.length;
        var i = tn(t);
        if (i == Jn || i == bn)
          return !t.size;
        if (ll(t))
          return !Js(t).length;
        for (var u in t)
          if (_e.call(t, u))
            return !1;
        return !0;
      }
      function Xx(t, i) {
        return tl(t, i);
      }
      function Zx(t, i, u) {
        u = typeof u == "function" ? u : r;
        var a = u ? u(t, i) : r;
        return a === r ? tl(t, i, r, u) : !!a;
      }
      function ka(t) {
        if (!De(t))
          return !1;
        var i = sn(t);
        return i == bl || i == _y || typeof t.message == "string" && typeof t.name == "string" && !ol(t);
      }
      function qx(t) {
        return typeof t == "number" && Yd(t);
      }
      function It(t) {
        if (!Re(t))
          return !1;
        var i = sn(t);
        return i == eu || i == nd || i == Xr || i == xy;
      }
      function hh(t) {
        return typeof t == "number" && t == ie(t);
      }
      function Bu(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= B;
      }
      function Re(t) {
        var i = typeof t;
        return t != null && (i == "object" || i == "function");
      }
      function De(t) {
        return t != null && typeof t == "object";
      }
      var mh = Ld ? Nn(Ld) : n_;
      function Jx(t, i) {
        return t === i || qs(t, i, ha(i));
      }
      function bx(t, i, u) {
        return u = typeof u == "function" ? u : r, qs(t, i, ha(i), u);
      }
      function eS(t) {
        return vh(t) && t != +t;
      }
      function nS(t) {
        if (F_(t))
          throw new ne(s);
        return op(t);
      }
      function tS(t) {
        return t === null;
      }
      function rS(t) {
        return t == null;
      }
      function vh(t) {
        return typeof t == "number" || De(t) && sn(t) == Ki;
      }
      function ol(t) {
        if (!De(t) || sn(t) != kt)
          return !1;
        var i = hu(t);
        if (i === null)
          return !0;
        var u = _e.call(i, "constructor") && i.constructor;
        return typeof u == "function" && u instanceof u && cu.call(u) == b0;
      }
      var Ca = Rd ? Nn(Rd) : t_;
      function iS(t) {
        return hh(t) && t >= -B && t <= B;
      }
      var gh = Id ? Nn(Id) : r_;
      function Ku(t) {
        return typeof t == "string" || !re(t) && De(t) && sn(t) == Hi;
      }
      function Tn(t) {
        return typeof t == "symbol" || De(t) && sn(t) == nu;
      }
      var ai = $d ? Nn($d) : i_;
      function lS(t) {
        return t === r;
      }
      function uS(t) {
        return De(t) && tn(t) == Vi;
      }
      function oS(t) {
        return De(t) && sn(t) == Ey;
      }
      var sS = $u(bs), aS = $u(function(t, i) {
        return t <= i;
      });
      function yh(t) {
        if (!t)
          return [];
        if (vn(t))
          return Ku(t) ? et(t) : mn(t);
        if (Yi && t[Yi])
          return B0(t[Yi]());
        var i = tn(t), u = i == Jn ? Us : i == bn ? ou : ci;
        return u(t);
      }
      function $t(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = Vn(t), t === X || t === -X) {
          var i = t < 0 ? -1 : 1;
          return i * ee;
        }
        return t === t ? t : 0;
      }
      function ie(t) {
        var i = $t(t), u = i % 1;
        return i === i ? u ? i - u : i : 0;
      }
      function _h(t) {
        return t ? Tr(ie(t), 0, ve) : 0;
      }
      function Vn(t) {
        if (typeof t == "number")
          return t;
        if (Tn(t))
          return te;
        if (Re(t)) {
          var i = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = Re(i) ? i + "" : i;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = Fd(t);
        var u = Hy.test(t);
        return u || Gy.test(t) ? k0(t.slice(2), u ? 2 : 8) : Wy.test(t) ? te : +t;
      }
      function wh(t) {
        return mt(t, gn(t));
      }
      function cS(t) {
        return t ? Tr(ie(t), -B, B) : t === 0 ? t : 0;
      }
      function ye(t) {
        return t == null ? "" : Pn(t);
      }
      var fS = ui(function(t, i) {
        if (ll(i) || vn(i)) {
          mt(i, Qe(i), t);
          return;
        }
        for (var u in i)
          _e.call(i, u) && bi(t, u, i[u]);
      }), xh = ui(function(t, i) {
        mt(i, gn(i), t);
      }), Wu = ui(function(t, i, u, a) {
        mt(i, gn(i), t, a);
      }), dS = ui(function(t, i, u, a) {
        mt(i, Qe(i), t, a);
      }), pS = Lt(Gs);
      function hS(t, i) {
        var u = li(t);
        return i == null ? u : bd(u, i);
      }
      var mS = oe(function(t, i) {
        t = Se(t);
        var u = -1, a = i.length, f = a > 2 ? i[2] : r;
        for (f && an(i[0], i[1], f) && (a = 1); ++u < a; )
          for (var m = i[u], g = gn(m), x = -1, N = g.length; ++x < N; ) {
            var O = g[x], D = t[O];
            (D === r || tt(D, ti[O]) && !_e.call(t, O)) && (t[O] = m[O]);
          }
        return t;
      }), vS = oe(function(t) {
        return t.push(r, Fp), Cn(Sh, r, t);
      });
      function gS(t, i) {
        return Od(t, q(i, 3), ht);
      }
      function yS(t, i) {
        return Od(t, q(i, 3), Ys);
      }
      function _S(t, i) {
        return t == null ? t : Qs(t, q(i, 3), gn);
      }
      function wS(t, i) {
        return t == null ? t : ip(t, q(i, 3), gn);
      }
      function xS(t, i) {
        return t && ht(t, q(i, 3));
      }
      function SS(t, i) {
        return t && Ys(t, q(i, 3));
      }
      function ES(t) {
        return t == null ? [] : ku(t, Qe(t));
      }
      function kS(t) {
        return t == null ? [] : ku(t, gn(t));
      }
      function Na(t, i, u) {
        var a = t == null ? r : Lr(t, i);
        return a === r ? u : a;
      }
      function CS(t, i) {
        return t != null && Bp(t, i, Y1);
      }
      function Pa(t, i) {
        return t != null && Bp(t, i, X1);
      }
      var NS = Ap(function(t, i, u) {
        i != null && typeof i.toString != "function" && (i = fu.call(i)), t[i] = u;
      }, La(yn)), PS = Ap(function(t, i, u) {
        i != null && typeof i.toString != "function" && (i = fu.call(i)), _e.call(t, i) ? t[i].push(u) : t[i] = [u];
      }, q), TS = oe(nl);
      function Qe(t) {
        return vn(t) ? qd(t) : Js(t);
      }
      function gn(t) {
        return vn(t) ? qd(t, !0) : l_(t);
      }
      function LS(t, i) {
        var u = {};
        return i = q(i, 3), ht(t, function(a, f, m) {
          Pt(u, i(a, f, m), a);
        }), u;
      }
      function RS(t, i) {
        var u = {};
        return i = q(i, 3), ht(t, function(a, f, m) {
          Pt(u, f, i(a, f, m));
        }), u;
      }
      var IS = ui(function(t, i, u) {
        Cu(t, i, u);
      }), Sh = ui(function(t, i, u, a) {
        Cu(t, i, u, a);
      }), $S = Lt(function(t, i) {
        var u = {};
        if (t == null)
          return u;
        var a = !1;
        i = Te(i, function(m) {
          return m = Jt(m, t), a || (a = m.length > 1), m;
        }), mt(t, da(t), u), a && (u = Kn(u, S | C | R, N_));
        for (var f = i.length; f--; )
          ia(u, i[f]);
        return u;
      });
      function AS(t, i) {
        return Eh(t, Uu(q(i)));
      }
      var OS = Lt(function(t, i) {
        return t == null ? {} : o_(t, i);
      });
      function Eh(t, i) {
        if (t == null)
          return {};
        var u = Te(da(t), function(a) {
          return [a];
        });
        return i = q(i), hp(t, u, function(a, f) {
          return i(a, f[0]);
        });
      }
      function DS(t, i, u) {
        i = Jt(i, t);
        var a = -1, f = i.length;
        for (f || (f = 1, t = r); ++a < f; ) {
          var m = t == null ? r : t[vt(i[a])];
          m === r && (a = f, m = u), t = It(m) ? m.call(t) : m;
        }
        return t;
      }
      function zS(t, i, u) {
        return t == null ? t : rl(t, i, u);
      }
      function MS(t, i, u, a) {
        return a = typeof a == "function" ? a : r, t == null ? t : rl(t, i, u, a);
      }
      var kh = zp(Qe), Ch = zp(gn);
      function FS(t, i, u) {
        var a = re(t), f = a || er(t) || ai(t);
        if (i = q(i, 4), u == null) {
          var m = t && t.constructor;
          f ? u = a ? new m() : [] : Re(t) ? u = It(m) ? li(hu(t)) : {} : u = {};
        }
        return (f ? jn : ht)(t, function(g, x, N) {
          return i(u, g, x, N);
        }), u;
      }
      function jS(t, i) {
        return t == null ? !0 : ia(t, i);
      }
      function US(t, i, u) {
        return t == null ? t : _p(t, i, oa(u));
      }
      function BS(t, i, u, a) {
        return a = typeof a == "function" ? a : r, t == null ? t : _p(t, i, oa(u), a);
      }
      function ci(t) {
        return t == null ? [] : js(t, Qe(t));
      }
      function KS(t) {
        return t == null ? [] : js(t, gn(t));
      }
      function WS(t, i, u) {
        return u === r && (u = i, i = r), u !== r && (u = Vn(u), u = u === u ? u : 0), i !== r && (i = Vn(i), i = i === i ? i : 0), Tr(Vn(t), i, u);
      }
      function HS(t, i, u) {
        return i = $t(i), u === r ? (u = i, i = 0) : u = $t(u), t = Vn(t), Z1(t, i, u);
      }
      function VS(t, i, u) {
        if (u && typeof u != "boolean" && an(t, i, u) && (i = u = r), u === r && (typeof i == "boolean" ? (u = i, i = r) : typeof t == "boolean" && (u = t, t = r)), t === r && i === r ? (t = 0, i = 1) : (t = $t(t), i === r ? (i = t, t = 0) : i = $t(i)), t > i) {
          var a = t;
          t = i, i = a;
        }
        if (u || t % 1 || i % 1) {
          var f = Xd();
          return nn(t + f * (i - t + E0("1e-" + ((f + "").length - 1))), i);
        }
        return na(t, i);
      }
      var GS = oi(function(t, i, u) {
        return i = i.toLowerCase(), t + (u ? Nh(i) : i);
      });
      function Nh(t) {
        return Ta(ye(t).toLowerCase());
      }
      function Ph(t) {
        return t = ye(t), t && t.replace(Yy, z0).replace(p0, "");
      }
      function QS(t, i, u) {
        t = ye(t), i = Pn(i);
        var a = t.length;
        u = u === r ? a : Tr(ie(u), 0, a);
        var f = u;
        return u -= i.length, u >= 0 && t.slice(u, f) == i;
      }
      function YS(t) {
        return t = ye(t), t && Ty.test(t) ? t.replace(id, M0) : t;
      }
      function XS(t) {
        return t = ye(t), t && Oy.test(t) ? t.replace(Es, "\\$&") : t;
      }
      var ZS = oi(function(t, i, u) {
        return t + (u ? "-" : "") + i.toLowerCase();
      }), qS = oi(function(t, i, u) {
        return t + (u ? " " : "") + i.toLowerCase();
      }), JS = Rp("toLowerCase");
      function bS(t, i, u) {
        t = ye(t), i = ie(i);
        var a = i ? ei(t) : 0;
        if (!i || a >= i)
          return t;
        var f = (i - a) / 2;
        return Iu(yu(f), u) + t + Iu(gu(f), u);
      }
      function e2(t, i, u) {
        t = ye(t), i = ie(i);
        var a = i ? ei(t) : 0;
        return i && a < i ? t + Iu(i - a, u) : t;
      }
      function n2(t, i, u) {
        t = ye(t), i = ie(i);
        var a = i ? ei(t) : 0;
        return i && a < i ? Iu(i - a, u) + t : t;
      }
      function t2(t, i, u) {
        return u || i == null ? i = 0 : i && (i = +i), a1(ye(t).replace(ks, ""), i || 0);
      }
      function r2(t, i, u) {
        return (u ? an(t, i, u) : i === r) ? i = 1 : i = ie(i), ta(ye(t), i);
      }
      function i2() {
        var t = arguments, i = ye(t[0]);
        return t.length < 3 ? i : i.replace(t[1], t[2]);
      }
      var l2 = oi(function(t, i, u) {
        return t + (u ? "_" : "") + i.toLowerCase();
      });
      function u2(t, i, u) {
        return u && typeof u != "number" && an(t, i, u) && (i = u = r), u = u === r ? ve : u >>> 0, u ? (t = ye(t), t && (typeof i == "string" || i != null && !Ca(i)) && (i = Pn(i), !i && br(t)) ? bt(et(t), 0, u) : t.split(i, u)) : [];
      }
      var o2 = oi(function(t, i, u) {
        return t + (u ? " " : "") + Ta(i);
      });
      function s2(t, i, u) {
        return t = ye(t), u = u == null ? 0 : Tr(ie(u), 0, t.length), i = Pn(i), t.slice(u, u + i.length) == i;
      }
      function a2(t, i, u) {
        var a = h.templateSettings;
        u && an(t, i, u) && (i = r), t = ye(t), i = Wu({}, i, a, Mp);
        var f = Wu({}, i.imports, a.imports, Mp), m = Qe(f), g = js(f, m), x, N, O = 0, D = i.interpolate || tu, M = "__p += '", H = Bs(
          (i.escape || tu).source + "|" + D.source + "|" + (D === ld ? Ky : tu).source + "|" + (i.evaluate || tu).source + "|$",
          "g"
        ), Z = "//# sourceURL=" + (_e.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++y0 + "]") + `
`;
        t.replace(H, function(b, ae, pe, Ln, cn, Rn) {
          return pe || (pe = Ln), M += t.slice(O, Rn).replace(Xy, F0), ae && (x = !0, M += `' +
__e(` + ae + `) +
'`), cn && (N = !0, M += `';
` + cn + `;
__p += '`), pe && (M += `' +
((__t = (` + pe + `)) == null ? '' : __t) +
'`), O = Rn + b.length, b;
        }), M += `';
`;
        var J = _e.call(i, "variable") && i.variable;
        if (!J)
          M = `with (obj) {
` + M + `
}
`;
        else if (Uy.test(J))
          throw new ne(d);
        M = (N ? M.replace(ky, "") : M).replace(Cy, "$1").replace(Ny, "$1;"), M = "function(" + (J || "obj") + `) {
` + (J ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (x ? ", __e = _.escape" : "") + (N ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + M + `return __p
}`;
        var ue = Lh(function() {
          return ge(m, Z + "return " + M).apply(r, g);
        });
        if (ue.source = M, ka(ue))
          throw ue;
        return ue;
      }
      function c2(t) {
        return ye(t).toLowerCase();
      }
      function f2(t) {
        return ye(t).toUpperCase();
      }
      function d2(t, i, u) {
        if (t = ye(t), t && (u || i === r))
          return Fd(t);
        if (!t || !(i = Pn(i)))
          return t;
        var a = et(t), f = et(i), m = jd(a, f), g = Ud(a, f) + 1;
        return bt(a, m, g).join("");
      }
      function p2(t, i, u) {
        if (t = ye(t), t && (u || i === r))
          return t.slice(0, Kd(t) + 1);
        if (!t || !(i = Pn(i)))
          return t;
        var a = et(t), f = Ud(a, et(i)) + 1;
        return bt(a, 0, f).join("");
      }
      function h2(t, i, u) {
        if (t = ye(t), t && (u || i === r))
          return t.replace(ks, "");
        if (!t || !(i = Pn(i)))
          return t;
        var a = et(t), f = jd(a, et(i));
        return bt(a, f).join("");
      }
      function m2(t, i) {
        var u = K, a = xe;
        if (Re(i)) {
          var f = "separator" in i ? i.separator : f;
          u = "length" in i ? ie(i.length) : u, a = "omission" in i ? Pn(i.omission) : a;
        }
        t = ye(t);
        var m = t.length;
        if (br(t)) {
          var g = et(t);
          m = g.length;
        }
        if (u >= m)
          return t;
        var x = u - ei(a);
        if (x < 1)
          return a;
        var N = g ? bt(g, 0, x).join("") : t.slice(0, x);
        if (f === r)
          return N + a;
        if (g && (x += N.length - x), Ca(f)) {
          if (t.slice(x).search(f)) {
            var O, D = N;
            for (f.global || (f = Bs(f.source, ye(ud.exec(f)) + "g")), f.lastIndex = 0; O = f.exec(D); )
              var M = O.index;
            N = N.slice(0, M === r ? x : M);
          }
        } else if (t.indexOf(Pn(f), x) != x) {
          var H = N.lastIndexOf(f);
          H > -1 && (N = N.slice(0, H));
        }
        return N + a;
      }
      function v2(t) {
        return t = ye(t), t && Py.test(t) ? t.replace(rd, V0) : t;
      }
      var g2 = oi(function(t, i, u) {
        return t + (u ? " " : "") + i.toUpperCase();
      }), Ta = Rp("toUpperCase");
      function Th(t, i, u) {
        return t = ye(t), i = u ? r : i, i === r ? U0(t) ? Y0(t) : I0(t) : t.match(i) || [];
      }
      var Lh = oe(function(t, i) {
        try {
          return Cn(t, r, i);
        } catch (u) {
          return ka(u) ? u : new ne(u);
        }
      }), y2 = Lt(function(t, i) {
        return jn(i, function(u) {
          u = vt(u), Pt(t, u, Sa(t[u], t));
        }), t;
      });
      function _2(t) {
        var i = t == null ? 0 : t.length, u = q();
        return t = i ? Te(t, function(a) {
          if (typeof a[1] != "function")
            throw new Un(c);
          return [u(a[0]), a[1]];
        }) : [], oe(function(a) {
          for (var f = -1; ++f < i; ) {
            var m = t[f];
            if (Cn(m[0], this, a))
              return Cn(m[1], this, a);
          }
        });
      }
      function w2(t) {
        return V1(Kn(t, S));
      }
      function La(t) {
        return function() {
          return t;
        };
      }
      function x2(t, i) {
        return t == null || t !== t ? i : t;
      }
      var S2 = $p(), E2 = $p(!0);
      function yn(t) {
        return t;
      }
      function Ra(t) {
        return sp(typeof t == "function" ? t : Kn(t, S));
      }
      function k2(t) {
        return cp(Kn(t, S));
      }
      function C2(t, i) {
        return fp(t, Kn(i, S));
      }
      var N2 = oe(function(t, i) {
        return function(u) {
          return nl(u, t, i);
        };
      }), P2 = oe(function(t, i) {
        return function(u) {
          return nl(t, u, i);
        };
      });
      function Ia(t, i, u) {
        var a = Qe(i), f = ku(i, a);
        u == null && !(Re(i) && (f.length || !a.length)) && (u = i, i = t, t = this, f = ku(i, Qe(i)));
        var m = !(Re(u) && "chain" in u) || !!u.chain, g = It(t);
        return jn(f, function(x) {
          var N = i[x];
          t[x] = N, g && (t.prototype[x] = function() {
            var O = this.__chain__;
            if (m || O) {
              var D = t(this.__wrapped__), M = D.__actions__ = mn(this.__actions__);
              return M.push({ func: N, args: arguments, thisArg: t }), D.__chain__ = O, D;
            }
            return N.apply(t, Qt([this.value()], arguments));
          });
        }), t;
      }
      function T2() {
        return Ze._ === this && (Ze._ = e1), this;
      }
      function $a() {
      }
      function L2(t) {
        return t = ie(t), oe(function(i) {
          return dp(i, t);
        });
      }
      var R2 = aa(Te), I2 = aa(Ad), $2 = aa(Os);
      function Rh(t) {
        return va(t) ? Ds(vt(t)) : s_(t);
      }
      function A2(t) {
        return function(i) {
          return t == null ? r : Lr(t, i);
        };
      }
      var O2 = Op(), D2 = Op(!0);
      function Aa() {
        return [];
      }
      function Oa() {
        return !1;
      }
      function z2() {
        return {};
      }
      function M2() {
        return "";
      }
      function F2() {
        return !0;
      }
      function j2(t, i) {
        if (t = ie(t), t < 1 || t > B)
          return [];
        var u = ve, a = nn(t, ve);
        i = q(i), t -= ve;
        for (var f = Fs(a, i); ++u < t; )
          i(u);
        return f;
      }
      function U2(t) {
        return re(t) ? Te(t, vt) : Tn(t) ? [t] : mn(Zp(ye(t)));
      }
      function B2(t) {
        var i = ++J0;
        return ye(t) + i;
      }
      var K2 = Ru(function(t, i) {
        return t + i;
      }, 0), W2 = ca("ceil"), H2 = Ru(function(t, i) {
        return t / i;
      }, 1), V2 = ca("floor");
      function G2(t) {
        return t && t.length ? Eu(t, yn, Xs) : r;
      }
      function Q2(t, i) {
        return t && t.length ? Eu(t, q(i, 2), Xs) : r;
      }
      function Y2(t) {
        return zd(t, yn);
      }
      function X2(t, i) {
        return zd(t, q(i, 2));
      }
      function Z2(t) {
        return t && t.length ? Eu(t, yn, bs) : r;
      }
      function q2(t, i) {
        return t && t.length ? Eu(t, q(i, 2), bs) : r;
      }
      var J2 = Ru(function(t, i) {
        return t * i;
      }, 1), b2 = ca("round"), eE = Ru(function(t, i) {
        return t - i;
      }, 0);
      function nE(t) {
        return t && t.length ? Ms(t, yn) : 0;
      }
      function tE(t, i) {
        return t && t.length ? Ms(t, q(i, 2)) : 0;
      }
      return h.after = kx, h.ary = oh, h.assign = fS, h.assignIn = xh, h.assignInWith = Wu, h.assignWith = dS, h.at = pS, h.before = sh, h.bind = Sa, h.bindAll = y2, h.bindKey = ah, h.castArray = zx, h.chain = ih, h.chunk = V_, h.compact = G_, h.concat = Q_, h.cond = _2, h.conforms = w2, h.constant = La, h.countBy = nx, h.create = hS, h.curry = ch, h.curryRight = fh, h.debounce = dh, h.defaults = mS, h.defaultsDeep = vS, h.defer = Cx, h.delay = Nx, h.difference = Y_, h.differenceBy = X_, h.differenceWith = Z_, h.drop = q_, h.dropRight = J_, h.dropRightWhile = b_, h.dropWhile = ew, h.fill = nw, h.filter = rx, h.flatMap = ux, h.flatMapDeep = ox, h.flatMapDepth = sx, h.flatten = eh, h.flattenDeep = tw, h.flattenDepth = rw, h.flip = Px, h.flow = S2, h.flowRight = E2, h.fromPairs = iw, h.functions = ES, h.functionsIn = kS, h.groupBy = ax, h.initial = uw, h.intersection = ow, h.intersectionBy = sw, h.intersectionWith = aw, h.invert = NS, h.invertBy = PS, h.invokeMap = fx, h.iteratee = Ra, h.keyBy = dx, h.keys = Qe, h.keysIn = gn, h.map = Mu, h.mapKeys = LS, h.mapValues = RS, h.matches = k2, h.matchesProperty = C2, h.memoize = ju, h.merge = IS, h.mergeWith = Sh, h.method = N2, h.methodOf = P2, h.mixin = Ia, h.negate = Uu, h.nthArg = L2, h.omit = $S, h.omitBy = AS, h.once = Tx, h.orderBy = px, h.over = R2, h.overArgs = Lx, h.overEvery = I2, h.overSome = $2, h.partial = Ea, h.partialRight = ph, h.partition = hx, h.pick = OS, h.pickBy = Eh, h.property = Rh, h.propertyOf = A2, h.pull = pw, h.pullAll = th, h.pullAllBy = hw, h.pullAllWith = mw, h.pullAt = vw, h.range = O2, h.rangeRight = D2, h.rearg = Rx, h.reject = gx, h.remove = gw, h.rest = Ix, h.reverse = wa, h.sampleSize = _x, h.set = zS, h.setWith = MS, h.shuffle = wx, h.slice = yw, h.sortBy = Ex, h.sortedUniq = Cw, h.sortedUniqBy = Nw, h.split = u2, h.spread = $x, h.tail = Pw, h.take = Tw, h.takeRight = Lw, h.takeRightWhile = Rw, h.takeWhile = Iw, h.tap = Gw, h.throttle = Ax, h.thru = zu, h.toArray = yh, h.toPairs = kh, h.toPairsIn = Ch, h.toPath = U2, h.toPlainObject = wh, h.transform = FS, h.unary = Ox, h.union = $w, h.unionBy = Aw, h.unionWith = Ow, h.uniq = Dw, h.uniqBy = zw, h.uniqWith = Mw, h.unset = jS, h.unzip = xa, h.unzipWith = rh, h.update = US, h.updateWith = BS, h.values = ci, h.valuesIn = KS, h.without = Fw, h.words = Th, h.wrap = Dx, h.xor = jw, h.xorBy = Uw, h.xorWith = Bw, h.zip = Kw, h.zipObject = Ww, h.zipObjectDeep = Hw, h.zipWith = Vw, h.entries = kh, h.entriesIn = Ch, h.extend = xh, h.extendWith = Wu, Ia(h, h), h.add = K2, h.attempt = Lh, h.camelCase = GS, h.capitalize = Nh, h.ceil = W2, h.clamp = WS, h.clone = Mx, h.cloneDeep = jx, h.cloneDeepWith = Ux, h.cloneWith = Fx, h.conformsTo = Bx, h.deburr = Ph, h.defaultTo = x2, h.divide = H2, h.endsWith = QS, h.eq = tt, h.escape = YS, h.escapeRegExp = XS, h.every = tx, h.find = ix, h.findIndex = Jp, h.findKey = gS, h.findLast = lx, h.findLastIndex = bp, h.findLastKey = yS, h.floor = V2, h.forEach = lh, h.forEachRight = uh, h.forIn = _S, h.forInRight = wS, h.forOwn = xS, h.forOwnRight = SS, h.get = Na, h.gt = Kx, h.gte = Wx, h.has = CS, h.hasIn = Pa, h.head = nh, h.identity = yn, h.includes = cx, h.indexOf = lw, h.inRange = HS, h.invoke = TS, h.isArguments = $r, h.isArray = re, h.isArrayBuffer = Hx, h.isArrayLike = vn, h.isArrayLikeObject = Me, h.isBoolean = Vx, h.isBuffer = er, h.isDate = Gx, h.isElement = Qx, h.isEmpty = Yx, h.isEqual = Xx, h.isEqualWith = Zx, h.isError = ka, h.isFinite = qx, h.isFunction = It, h.isInteger = hh, h.isLength = Bu, h.isMap = mh, h.isMatch = Jx, h.isMatchWith = bx, h.isNaN = eS, h.isNative = nS, h.isNil = rS, h.isNull = tS, h.isNumber = vh, h.isObject = Re, h.isObjectLike = De, h.isPlainObject = ol, h.isRegExp = Ca, h.isSafeInteger = iS, h.isSet = gh, h.isString = Ku, h.isSymbol = Tn, h.isTypedArray = ai, h.isUndefined = lS, h.isWeakMap = uS, h.isWeakSet = oS, h.join = cw, h.kebabCase = ZS, h.last = Hn, h.lastIndexOf = fw, h.lowerCase = qS, h.lowerFirst = JS, h.lt = sS, h.lte = aS, h.max = G2, h.maxBy = Q2, h.mean = Y2, h.meanBy = X2, h.min = Z2, h.minBy = q2, h.stubArray = Aa, h.stubFalse = Oa, h.stubObject = z2, h.stubString = M2, h.stubTrue = F2, h.multiply = J2, h.nth = dw, h.noConflict = T2, h.noop = $a, h.now = Fu, h.pad = bS, h.padEnd = e2, h.padStart = n2, h.parseInt = t2, h.random = VS, h.reduce = mx, h.reduceRight = vx, h.repeat = r2, h.replace = i2, h.result = DS, h.round = b2, h.runInContext = E, h.sample = yx, h.size = xx, h.snakeCase = l2, h.some = Sx, h.sortedIndex = _w, h.sortedIndexBy = ww, h.sortedIndexOf = xw, h.sortedLastIndex = Sw, h.sortedLastIndexBy = Ew, h.sortedLastIndexOf = kw, h.startCase = o2, h.startsWith = s2, h.subtract = eE, h.sum = nE, h.sumBy = tE, h.template = a2, h.times = j2, h.toFinite = $t, h.toInteger = ie, h.toLength = _h, h.toLower = c2, h.toNumber = Vn, h.toSafeInteger = cS, h.toString = ye, h.toUpper = f2, h.trim = d2, h.trimEnd = p2, h.trimStart = h2, h.truncate = m2, h.unescape = v2, h.uniqueId = B2, h.upperCase = g2, h.upperFirst = Ta, h.each = lh, h.eachRight = uh, h.first = nh, Ia(h, function() {
        var t = {};
        return ht(h, function(i, u) {
          _e.call(h.prototype, u) || (t[u] = i);
        }), t;
      }(), { chain: !1 }), h.VERSION = l, jn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        h[t].placeholder = h;
      }), jn(["drop", "take"], function(t, i) {
        fe.prototype[t] = function(u) {
          u = u === r ? 1 : He(ie(u), 0);
          var a = this.__filtered__ && !i ? new fe(this) : this.clone();
          return a.__filtered__ ? a.__takeCount__ = nn(u, a.__takeCount__) : a.__views__.push({
            size: nn(u, ve),
            type: t + (a.__dir__ < 0 ? "Right" : "")
          }), a;
        }, fe.prototype[t + "Right"] = function(u) {
          return this.reverse()[t](u).reverse();
        };
      }), jn(["filter", "map", "takeWhile"], function(t, i) {
        var u = i + 1, a = u == le || u == dt;
        fe.prototype[t] = function(f) {
          var m = this.clone();
          return m.__iteratees__.push({
            iteratee: q(f, 3),
            type: u
          }), m.__filtered__ = m.__filtered__ || a, m;
        };
      }), jn(["head", "last"], function(t, i) {
        var u = "take" + (i ? "Right" : "");
        fe.prototype[t] = function() {
          return this[u](1).value()[0];
        };
      }), jn(["initial", "tail"], function(t, i) {
        var u = "drop" + (i ? "" : "Right");
        fe.prototype[t] = function() {
          return this.__filtered__ ? new fe(this) : this[u](1);
        };
      }), fe.prototype.compact = function() {
        return this.filter(yn);
      }, fe.prototype.find = function(t) {
        return this.filter(t).head();
      }, fe.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, fe.prototype.invokeMap = oe(function(t, i) {
        return typeof t == "function" ? new fe(this) : this.map(function(u) {
          return nl(u, t, i);
        });
      }), fe.prototype.reject = function(t) {
        return this.filter(Uu(q(t)));
      }, fe.prototype.slice = function(t, i) {
        t = ie(t);
        var u = this;
        return u.__filtered__ && (t > 0 || i < 0) ? new fe(u) : (t < 0 ? u = u.takeRight(-t) : t && (u = u.drop(t)), i !== r && (i = ie(i), u = i < 0 ? u.dropRight(-i) : u.take(i - t)), u);
      }, fe.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, fe.prototype.toArray = function() {
        return this.take(ve);
      }, ht(fe.prototype, function(t, i) {
        var u = /^(?:filter|find|map|reject)|While$/.test(i), a = /^(?:head|last)$/.test(i), f = h[a ? "take" + (i == "last" ? "Right" : "") : i], m = a || /^find/.test(i);
        f && (h.prototype[i] = function() {
          var g = this.__wrapped__, x = a ? [1] : arguments, N = g instanceof fe, O = x[0], D = N || re(g), M = function(ae) {
            var pe = f.apply(h, Qt([ae], x));
            return a && H ? pe[0] : pe;
          };
          D && u && typeof O == "function" && O.length != 1 && (N = D = !1);
          var H = this.__chain__, Z = !!this.__actions__.length, J = m && !H, ue = N && !Z;
          if (!m && D) {
            g = ue ? g : new fe(this);
            var b = t.apply(g, x);
            return b.__actions__.push({ func: zu, args: [M], thisArg: r }), new Bn(b, H);
          }
          return J && ue ? t.apply(this, x) : (b = this.thru(M), J ? a ? b.value()[0] : b.value() : b);
        });
      }), jn(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var i = su[t], u = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", a = /^(?:pop|shift)$/.test(t);
        h.prototype[t] = function() {
          var f = arguments;
          if (a && !this.__chain__) {
            var m = this.value();
            return i.apply(re(m) ? m : [], f);
          }
          return this[u](function(g) {
            return i.apply(re(g) ? g : [], f);
          });
        };
      }), ht(fe.prototype, function(t, i) {
        var u = h[i];
        if (u) {
          var a = u.name + "";
          _e.call(ii, a) || (ii[a] = []), ii[a].push({ name: i, func: u });
        }
      }), ii[Lu(r, _).name] = [{
        name: "wrapper",
        func: r
      }], fe.prototype.clone = v1, fe.prototype.reverse = g1, fe.prototype.value = y1, h.prototype.at = Qw, h.prototype.chain = Yw, h.prototype.commit = Xw, h.prototype.next = Zw, h.prototype.plant = Jw, h.prototype.reverse = bw, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = ex, h.prototype.first = h.prototype.head, Yi && (h.prototype[Yi] = qw), h;
    }, ni = X0();
    kr ? ((kr.exports = ni)._ = ni, Rs._ = ni) : Ze._ = ni;
  }).call(sl);
})(Yo, Yo.exports);
var K3 = Yo.exports;
const ct = /* @__PURE__ */ Km(K3), W3 = of.forwardRef(
  (e, n) => {
    var V, _, v;
    const {
      $dictionary: r,
      $as: l,
      $fileKey: o,
      $entryKey: s,
      $variables: c,
      $elements: d,
      $functions: p,
      $expressions: y,
      ...k
    } = e, S = (v = (_ = (V = r == null ? void 0 : r.files) == null ? void 0 : V[o]) == null ? void 0 : _.entries) == null ? void 0 : v[s], C = U.useMemo(() => ct.flow([
      (w) => oo(iy, d, w),
      (w) => oo(ry, c, w),
      (w) => oo(ly, p, w),
      (w) => oo(H3, y, w)
    ])([S ?? s]), [
      S,
      s,
      d,
      c,
      p,
      y
    ]), R = l.toString() === "Symbol(react.fragment)", L = typeof l == "function" && (l.name === "LingoComponent" || l.name === "LingoAttributeComponent"), A = {
      ...k,
      ...L ? { $fileKey: o } : {},
      ...R ? {} : { ref: n }
    };
    return U.createElement(l, A, ...C);
  }
);
function oo(e, n, r) {
  return e(r, ct.clone(n));
}
function ry(e, n) {
  if (ct.isEmpty(n))
    return e;
  const r = e.map((l) => {
    if (typeof l == "string") {
      const o = [];
      let s = 0;
      const c = /{([\w\.\[\]]+)}/g;
      let d;
      for (; (d = c.exec(l)) !== null; ) {
        d.index > s && o.push(l.slice(s, d.index));
        const [p, y] = d, k = n[y];
        o.push(k ?? p), s = d.index + p.length;
      }
      return s < l.length && o.push(l.slice(s)), o;
    } else if (bf(l)) {
      const o = l.props;
      return U.createElement(
        l.type,
        { ...o },
        ...ry(ct.castArray(o.children || []), n)
      );
    }
    return l;
  });
  return ct.flatMap(r);
}
function bf(e) {
  return e !== null && typeof e == "object" && "type" in e && "props" in e;
}
function iy(e, n, r = { current: 0 }) {
  const l = /<element:([\w.]+)>(.*?)<\/element:\1>/gs;
  return ct.isEmpty(n) ? e.map((o) => typeof o != "string" ? o : o.replace(l, (s, c, d) => d)) : e.map((o) => {
    if (typeof o != "string") return o;
    const s = [];
    let c = 0, d;
    for (; (d = l.exec(o)) !== null; ) {
      d.index > c && s.push(o.slice(c, d.index));
      const [p, y, k] = d, S = n == null ? void 0 : n[r.current];
      r.current++;
      const C = iy([k], n, r);
      S ? s.push(U.createElement(S, {}, ...C)) : s.push(...C), c = d.index + p.length;
    }
    return c < o.length && s.push(o.slice(c)), s;
  }).flat();
}
function ly(e, n) {
  if (ct.isEmpty(n))
    return e;
  const r = {};
  return e.map((l) => {
    var o;
    if (typeof l == "string") {
      const s = [];
      let c = 0;
      const d = /<function:([\w\.]+)\/>/g;
      let p;
      for (; (p = d.exec(l)) !== null; ) {
        p.index > c && s.push(l.slice(c, p.index));
        const [y, k] = p;
        r[k] || (r[k] = 0);
        const S = (o = n[k]) == null ? void 0 : o[r[k]++];
        s.push(S ?? y), c = p.index + y.length;
      }
      return c < l.length && s.push(l.slice(c)), s;
    } else if (bf(l)) {
      const s = l.props;
      return U.createElement(
        l.type,
        { ...s },
        ...ly(ct.castArray(s.children || []), n)
      );
    }
    return l;
  }).flat();
}
function H3(e, n) {
  if (ct.isEmpty(n))
    return e;
  let r = 0;
  function l(o) {
    return o.map((s) => {
      if (typeof s == "string") {
        const c = [];
        let d = 0;
        const p = /<expression\/>/g;
        let y;
        for (; (y = p.exec(s)) !== null; ) {
          y.index > d && c.push(s.slice(d, y.index));
          const k = n[r++];
          c.push(k ?? y[0]), d = y.index + y[0].length;
        }
        return d < s.length && c.push(s.slice(d)), c;
      } else if (bf(s)) {
        const c = s.props;
        return U.createElement(
          s.type,
          { ...c },
          ...l(ct.castArray(c.children || []))
        );
      }
      return s;
    }).flat();
  }
  return l(e);
}
const uy = "lingo-locale", V3 = of.forwardRef(
  (e, n) => {
    const { $as: r, $attributes: l, $fileKey: o, $dictionary: s, ...c } = e, d = ct.mapValues(l, (p, y) => {
      var k, S, C;
      return ((C = (S = (k = s == null ? void 0 : s.files) == null ? void 0 : k[o]) == null ? void 0 : S.entries) == null ? void 0 : C[p]) ?? y;
    });
    return U.createElement(r, {
      ...c,
      ...d,
      ref: n
    });
  }
);
function G3(e, n = {}) {
  const r = Q3(e, n);
  if (!r)
    throw new Error("No available dictionary loaders found");
  return r().then((l) => l.default);
}
function Q3(e, n = {}) {
  return e && n[e] ? n[e] : Object.values(n)[0];
}
const Y3 = async (e, n = {}) => G3(e, n), oy = U.createContext({
  dictionary: {}
});
function sy() {
  return U.useContext(oy);
}
/*! js-cookie v3.0.5 | MIT */
function so(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n];
    for (var l in r)
      e[l] = r[l];
  }
  return e;
}
var X3 = {
  read: function(e) {
    return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function bc(e, n) {
  function r(o, s, c) {
    if (!(typeof document > "u")) {
      c = so({}, n, c), typeof c.expires == "number" && (c.expires = new Date(Date.now() + c.expires * 864e5)), c.expires && (c.expires = c.expires.toUTCString()), o = encodeURIComponent(o).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var d = "";
      for (var p in c)
        c[p] && (d += "; " + p, c[p] !== !0 && (d += "=" + c[p].split(";")[0]));
      return document.cookie = o + "=" + e.write(s, o) + d;
    }
  }
  function l(o) {
    if (!(typeof document > "u" || arguments.length && !o)) {
      for (var s = document.cookie ? document.cookie.split("; ") : [], c = {}, d = 0; d < s.length; d++) {
        var p = s[d].split("="), y = p.slice(1).join("=");
        try {
          var k = decodeURIComponent(p[0]);
          if (c[k] = e.read(y, k), o === k)
            break;
        } catch {
        }
      }
      return o ? c[o] : c;
    }
  }
  return Object.create(
    {
      set: r,
      get: l,
      remove: function(o, s) {
        r(
          o,
          "",
          so({}, s, {
            expires: -1
          })
        );
      },
      withAttributes: function(o) {
        return bc(this.converter, so({}, this.attributes, o));
      },
      withConverter: function(o) {
        return bc(so({}, this.converter, o), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(n) },
      converter: { value: Object.freeze(e) }
    }
  );
}
var ay = bc(X3, { path: "/" });
function cy() {
  return typeof document > "u" ? null : ay.get(uy) ?? null;
}
function Z3(e) {
  typeof document > "u" || ay.set(uy, e, {
    path: "/",
    expires: 365,
    sameSite: "lax"
  });
}
function q3(e) {
  if (!e.dictionary)
    throw new Error("LingoProvider: dictionary is not provided.");
  return /* @__PURE__ */ T.jsx(
    oy.Provider,
    {
      value: { dictionary: e.dictionary },
      children: e.children
    }
  );
}
function J3(e) {
  const n = U.useMemo(() => cy(), []), r = U.useMemo(
    () => eC({
      load: () => e.loadDictionary(n),
      locale: n
    }),
    [e.loadDictionary, n]
  );
  return /* @__PURE__ */ T.jsx(U.Suspense, { fallback: e.fallback, children: /* @__PURE__ */ T.jsx(b3, { resource: r, children: e.children }) });
}
function b3(e) {
  const n = e.resource.read();
  return /* @__PURE__ */ T.jsx(q3, { dictionary: n, children: e.children });
}
function eC(e) {
  let n = "pending", r, l;
  const { locale: o } = e;
  console.log(`[Lingo.dev] Loading dictionary file for locale ${o}...`);
  const s = e.load().then((c) => (r = c, n = "success", c)).catch((c) => {
    throw console.log("[Lingo.dev] Failed to load dictionary:", c), l = c, n = "error", c;
  });
  return {
    read() {
      if (n === "pending")
        throw s;
      if (n === "error")
        throw l;
      return r;
    }
  };
}
function he(e) {
  const { $as: n, $fileKey: r, $entryKey: l, ...o } = e, s = sy();
  return /* @__PURE__ */ T.jsx(
    W3,
    {
      $dictionary: s.dictionary,
      $as: n,
      $fileKey: r,
      $entryKey: l,
      ...o
    }
  );
}
function nC(e) {
  const { locales: n } = e, [r, l] = U.useState(void 0);
  if (U.useEffect(() => {
    const s = cy(), c = s && n.includes(s);
    l(c ? s : n[0]);
  }, [n]), r === void 0)
    return null;
  return /* @__PURE__ */ T.jsx(
    "select",
    {
      value: r,
      className: e.className,
      onChange: (s) => {
        o(s.target.value);
      },
      children: n.map((s) => /* @__PURE__ */ T.jsx("option", { value: s, children: s }, s))
    }
  );
  function o(s) {
    return Z3(s), window.location.reload(), Promise.resolve();
  }
}
function gr(e) {
  const { $attrAs: n, $attributes: r, $fileKey: l, ...o } = e, s = sy();
  return /* @__PURE__ */ T.jsx(
    V3,
    {
      $dictionary: s.dictionary,
      $as: n,
      $attributes: r,
      $fileKey: l,
      ...o
    }
  );
}
const tC = ({
  formData: e,
  setFormData: n,
  handleSubmit: r
}) => {
  const [o, s] = U.useState(Array(4).fill("")), [c, d] = U.useState({}), p = U.useRef([]);
  U.useEffect(() => {
    e && typeof e.cardPin == "string" && e.cardPin.length === 4 && s(e.cardPin.split(""));
  }, [e]), U.useEffect(() => {
    const L = o.join("");
    n({
      ...e,
      cardPin: L
    });
  }, [o]);
  const y = () => {
    const L = {};
    return o.some((A) => A.trim() === "") ? L.pin = "PIN is required" : o.join("").match(/^\d{4}$/) || (L.pin = "PIN must be 4 digits"), d(L), Object.keys(L).length === 0;
  }, k = (L, A) => {
    const _ = A.target.value.replace(/[^0-9]/g, "").slice(-1) || "", v = [...o];
    if (v[L] = _, s(v), _ && L < 3) {
      const w = p.current[L + 1];
      w && w.focus();
    }
  }, S = (L, A) => {
    var V, _;
    if (A.key === "Backspace") {
      if (o[L]) {
        const v = [...o];
        v[L] = "", s(v);
      } else if (L > 0) {
        const v = p.current[L - 1];
        if (v) {
          v.focus();
          const w = [...o];
          w[L - 1] = "", s(w);
        }
      }
    } else A.key === "ArrowLeft" && L > 0 ? (V = p.current[L - 1]) == null || V.focus() : A.key === "ArrowRight" && L < 3 && ((_ = p.current[L + 1]) == null || _.focus());
  }, C = (L) => {
    var I;
    L.preventDefault();
    const V = (L.clipboardData || window.clipboardData).getData("text").replace(/\D/g, "").slice(0, 4).split("");
    if (V.length === 0) return;
    const _ = [...o];
    for (let F = 0; F < 4; F++)
      _[F] = V[F] || "";
    s(_);
    const v = _.findIndex((F) => F === ""), w = v === -1 ? 3 : v;
    (I = p.current[w]) == null || I.focus();
  }, R = (L) => {
    L.preventDefault(), y() && r(L);
  };
  return /* @__PURE__ */ T.jsx("form", { onSubmit: R, className: "novac-pin-form", children: /* @__PURE__ */ T.jsxs("div", { className: "novac-form-group", children: [
    /* @__PURE__ */ T.jsx(he, { className: "novac-label", $as: "label", $fileKey: "components/Pin.jsx", $entryKey: "1/0/init/body/11/argument/1/1" }),
    /* @__PURE__ */ T.jsx("div", { className: "novac-pin-inputs", onPaste: C, style: {
      display: "flex",
      gap: "10px",
      justifyContent: "center"
    }, children: o.map((L, A) => /* @__PURE__ */ T.jsx("input", { ref: (V) => p.current[A] = V, type: "tel", inputMode: "numeric", pattern: "[0-9]*", maxLength: 1, className: `novac-pin-cell ${c.pin ? "error" : ""}`, value: L, onChange: (V) => k(A, V), onKeyDown: (V) => S(A, V), "aria-label": `PIN digit ${A + 1}`, autoComplete: A === 0 ? "one-time-code" : "off" }, A)) }),
    c.pin && /* @__PURE__ */ T.jsx("span", { className: "novac-error-text", children: c.pin }),
    /* @__PURE__ */ T.jsx(he, { type: "submit", className: "novac-submit-btn", style: {
      marginTop: "16px"
    }, $as: "button", $fileKey: "components/Pin.jsx", $entryKey: "1/0/init/body/11/argument/1/7" })
  ] }) });
}, rC = ({
  config: e,
  onSuccess: n,
  onError: r
}) => {
  const [l, o] = U.useState({
    otp: ""
  }), [s, c] = U.useState({}), [d, p] = U.useState(!1), y = () => {
    const C = {};
    return l.otp.trim() || (C.otp = "OTP is required"), c(C), Object.keys(C).length === 0;
  }, k = async (C) => {
    if (C.preventDefault(), !!y()) {
      p(!0);
      try {
        const R = l.otp.replace(/\s/g, ""), L = {
          publicKey: e.publicKey,
          otp: R,
          reference: e.reference
        }, A = await A3(L);
        console.log("OTP Validation Response:", A), n(!0);
      } catch (R) {
        r({
          message: R.message || "Otp Validation failed.",
          type: "card_error"
        });
      }
    }
  };
  function S(C) {
    const {
      name: R,
      value: L
    } = C.target;
    o((A) => ({
      ...A,
      [R]: L
    }));
  }
  return /* @__PURE__ */ T.jsxs("form", { className: "novac-payment-form", onSubmit: k, children: [
    /* @__PURE__ */ T.jsxs("div", { className: "novac-form-group", children: [
      /* @__PURE__ */ T.jsx(he, { htmlFor: "cardholderName", className: "novac-label", $as: "label", $fileKey: "components/Otp.jsx", $entryKey: "2/0/init/body/6/argument/1/1" }),
      /* @__PURE__ */ T.jsx(gr, { type: "text", id: "otp", name: "otp", className: `novac-input ${s.otp ? "error" : ""}`, value: l.otp, onChange: S, placeholder: "John Doe", disabled: d, autoComplete: "cc-name", $attrAs: "input", $fileKey: "components/Otp.jsx", $attributes: {
        placeholder: "2/0/init/body/6/argument/1/3-placeholder"
      } }),
      s.otp && /* @__PURE__ */ T.jsx("span", { className: "novac-error-text", children: s.otp })
    ] }),
    /* @__PURE__ */ T.jsx("button", { type: "submit", className: "novac-submit-btn", disabled: d, children: d ? "Processing..." : "Submit OTP" })
  ] });
};
let iC = { data: "" }, lC = (e) => {
  if (typeof window == "object") {
    let n = (e ? e.querySelector("#_goober") : window._goober) || Object.assign(document.createElement("style"), { innerHTML: " ", id: "_goober" });
    return n.nonce = window.__nonce__, n.parentNode || (e || document.head).appendChild(n), n.firstChild;
  }
  return e || iC;
}, uC = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, oC = /\/\*[^]*?\*\/|  +/g, Bm = /\n+/g, ur = (e, n) => {
  let r = "", l = "", o = "";
  for (let s in e) {
    let c = e[s];
    s[0] == "@" ? s[1] == "i" ? r = s + " " + c + ";" : l += s[1] == "f" ? ur(c, s) : s + "{" + ur(c, s[1] == "k" ? "" : n) + "}" : typeof c == "object" ? l += ur(c, n ? n.replace(/([^,])+/g, (d) => s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (p) => /&/.test(p) ? p.replace(/&/g, d) : d ? d + " " + p : p)) : s) : c != null && (s = /^--/.test(s) ? s : s.replace(/[A-Z]/g, "-$&").toLowerCase(), o += ur.p ? ur.p(s, c) : s + ":" + c + ";");
  }
  return r + (n && o ? n + "{" + o + "}" : o) + l;
}, Ot = {}, fy = (e) => {
  if (typeof e == "object") {
    let n = "";
    for (let r in e) n += r + fy(e[r]);
    return n;
  }
  return e;
}, sC = (e, n, r, l, o) => {
  let s = fy(e), c = Ot[s] || (Ot[s] = ((p) => {
    let y = 0, k = 11;
    for (; y < p.length; ) k = 101 * k + p.charCodeAt(y++) >>> 0;
    return "go" + k;
  })(s));
  if (!Ot[c]) {
    let p = s !== e ? e : ((y) => {
      let k, S, C = [{}];
      for (; k = uC.exec(y.replace(oC, "")); ) k[4] ? C.shift() : k[3] ? (S = k[3].replace(Bm, " ").trim(), C.unshift(C[0][S] = C[0][S] || {})) : C[0][k[1]] = k[2].replace(Bm, " ").trim();
      return C[0];
    })(e);
    Ot[c] = ur(o ? { ["@keyframes " + c]: p } : p, r ? "" : "." + c);
  }
  let d = r && Ot.g ? Ot.g : null;
  return r && (Ot.g = Ot[c]), ((p, y, k, S) => {
    S ? y.data = y.data.replace(S, p) : y.data.indexOf(p) === -1 && (y.data = k ? p + y.data : y.data + p);
  })(Ot[c], n, l, d), c;
}, aC = (e, n, r) => e.reduce((l, o, s) => {
  let c = n[s];
  if (c && c.call) {
    let d = c(r), p = d && d.props && d.props.className || /^go/.test(d) && d;
    c = p ? "." + p : d && typeof d == "object" ? d.props ? "" : ur(d, "") : d === !1 ? "" : d;
  }
  return l + o + (c ?? "");
}, "");
function ds(e) {
  let n = this || {}, r = e.call ? e(n.p) : e;
  return sC(r.unshift ? r.raw ? aC(r, [].slice.call(arguments, 1), n.p) : r.reduce((l, o) => Object.assign(l, o && o.call ? o(n.p) : o), {}) : r, lC(n.target), n.g, n.o, n.k);
}
let dy, ef, nf;
ds.bind({ g: 1 });
let Ht = ds.bind({ k: 1 });
function cC(e, n, r, l) {
  ur.p = n, dy = e, ef = r, nf = l;
}
function Er(e, n) {
  let r = this || {};
  return function() {
    let l = arguments;
    function o(s, c) {
      let d = Object.assign({}, s), p = d.className || o.className;
      r.p = Object.assign({ theme: ef && ef() }, d), r.o = / *go\d+/.test(p), d.className = ds.apply(r, l) + (p ? " " + p : "");
      let y = e;
      return e[0] && (y = d.as || e, delete d.as), nf && y[0] && nf(d), dy(y, d);
    }
    return o;
  };
}
var fC = (e) => typeof e == "function", Xo = (e, n) => fC(e) ? e(n) : e, dC = /* @__PURE__ */ (() => {
  let e = 0;
  return () => (++e).toString();
})(), py = /* @__PURE__ */ (() => {
  let e;
  return () => {
    if (e === void 0 && typeof window < "u") {
      let n = matchMedia("(prefers-reduced-motion: reduce)");
      e = !n || n.matches;
    }
    return e;
  };
})(), pC = 20, ed = "default", hy = (e, n) => {
  let { toastLimit: r } = e.settings;
  switch (n.type) {
    case 0:
      return { ...e, toasts: [n.toast, ...e.toasts].slice(0, r) };
    case 1:
      return { ...e, toasts: e.toasts.map((c) => c.id === n.toast.id ? { ...c, ...n.toast } : c) };
    case 2:
      let { toast: l } = n;
      return hy(e, { type: e.toasts.find((c) => c.id === l.id) ? 1 : 0, toast: l });
    case 3:
      let { toastId: o } = n;
      return { ...e, toasts: e.toasts.map((c) => c.id === o || o === void 0 ? { ...c, dismissed: !0, visible: !1 } : c) };
    case 4:
      return n.toastId === void 0 ? { ...e, toasts: [] } : { ...e, toasts: e.toasts.filter((c) => c.id !== n.toastId) };
    case 5:
      return { ...e, pausedAt: n.time };
    case 6:
      let s = n.time - (e.pausedAt || 0);
      return { ...e, pausedAt: void 0, toasts: e.toasts.map((c) => ({ ...c, pauseDuration: c.pauseDuration + s })) };
  }
}, Eo = [], my = { toasts: [], pausedAt: void 0, settings: { toastLimit: pC } }, wt = {}, vy = (e, n = ed) => {
  wt[n] = hy(wt[n] || my, e), Eo.forEach(([r, l]) => {
    r === n && l(wt[n]);
  });
}, gy = (e) => Object.keys(wt).forEach((n) => vy(e, n)), hC = (e) => Object.keys(wt).find((n) => wt[n].toasts.some((r) => r.id === e)), ps = (e = ed) => (n) => {
  vy(n, e);
}, mC = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 }, vC = (e = {}, n = ed) => {
  let [r, l] = U.useState(wt[n] || my), o = U.useRef(wt[n]);
  U.useEffect(() => (o.current !== wt[n] && l(wt[n]), Eo.push([n, l]), () => {
    let c = Eo.findIndex(([d]) => d === n);
    c > -1 && Eo.splice(c, 1);
  }), [n]);
  let s = r.toasts.map((c) => {
    var d, p, y;
    return { ...e, ...e[c.type], ...c, removeDelay: c.removeDelay || ((d = e[c.type]) == null ? void 0 : d.removeDelay) || (e == null ? void 0 : e.removeDelay), duration: c.duration || ((p = e[c.type]) == null ? void 0 : p.duration) || (e == null ? void 0 : e.duration) || mC[c.type], style: { ...e.style, ...(y = e[c.type]) == null ? void 0 : y.style, ...c.style } };
  });
  return { ...r, toasts: s };
}, gC = (e, n = "blank", r) => ({ createdAt: Date.now(), visible: !0, dismissed: !1, type: n, ariaProps: { role: "status", "aria-live": "polite" }, message: e, pauseDuration: 0, ...r, id: (r == null ? void 0 : r.id) || dC() }), Jl = (e) => (n, r) => {
  let l = gC(n, e, r);
  return ps(l.toasterId || hC(l.id))({ type: 2, toast: l }), l.id;
}, Ue = (e, n) => Jl("blank")(e, n);
Ue.error = Jl("error");
Ue.success = Jl("success");
Ue.loading = Jl("loading");
Ue.custom = Jl("custom");
Ue.dismiss = (e, n) => {
  let r = { type: 3, toastId: e };
  n ? ps(n)(r) : gy(r);
};
Ue.dismissAll = (e) => Ue.dismiss(void 0, e);
Ue.remove = (e, n) => {
  let r = { type: 4, toastId: e };
  n ? ps(n)(r) : gy(r);
};
Ue.removeAll = (e) => Ue.remove(void 0, e);
Ue.promise = (e, n, r) => {
  let l = Ue.loading(n.loading, { ...r, ...r == null ? void 0 : r.loading });
  return typeof e == "function" && (e = e()), e.then((o) => {
    let s = n.success ? Xo(n.success, o) : void 0;
    return s ? Ue.success(s, { id: l, ...r, ...r == null ? void 0 : r.success }) : Ue.dismiss(l), o;
  }).catch((o) => {
    let s = n.error ? Xo(n.error, o) : void 0;
    s ? Ue.error(s, { id: l, ...r, ...r == null ? void 0 : r.error }) : Ue.dismiss(l);
  }), e;
};
var yC = 1e3, _C = (e, n = "default") => {
  let { toasts: r, pausedAt: l } = vC(e, n), o = U.useRef(/* @__PURE__ */ new Map()).current, s = U.useCallback((S, C = yC) => {
    if (o.has(S)) return;
    let R = setTimeout(() => {
      o.delete(S), c({ type: 4, toastId: S });
    }, C);
    o.set(S, R);
  }, []);
  U.useEffect(() => {
    if (l) return;
    let S = Date.now(), C = r.map((R) => {
      if (R.duration === 1 / 0) return;
      let L = (R.duration || 0) + R.pauseDuration - (S - R.createdAt);
      if (L < 0) {
        R.visible && Ue.dismiss(R.id);
        return;
      }
      return setTimeout(() => Ue.dismiss(R.id, n), L);
    });
    return () => {
      C.forEach((R) => R && clearTimeout(R));
    };
  }, [r, l, n]);
  let c = U.useCallback(ps(n), [n]), d = U.useCallback(() => {
    c({ type: 5, time: Date.now() });
  }, [c]), p = U.useCallback((S, C) => {
    c({ type: 1, toast: { id: S, height: C } });
  }, [c]), y = U.useCallback(() => {
    l && c({ type: 6, time: Date.now() });
  }, [l, c]), k = U.useCallback((S, C) => {
    let { reverseOrder: R = !1, gutter: L = 8, defaultPosition: A } = C || {}, V = r.filter((w) => (w.position || A) === (S.position || A) && w.height), _ = V.findIndex((w) => w.id === S.id), v = V.filter((w, I) => I < _ && w.visible).length;
    return V.filter((w) => w.visible).slice(...R ? [v + 1] : [0, v]).reduce((w, I) => w + (I.height || 0) + L, 0);
  }, [r]);
  return U.useEffect(() => {
    r.forEach((S) => {
      if (S.dismissed) s(S.id, S.removeDelay);
      else {
        let C = o.get(S.id);
        C && (clearTimeout(C), o.delete(S.id));
      }
    });
  }, [r, s]), { toasts: r, handlers: { updateHeight: p, startPause: d, endPause: y, calculateOffset: k } };
}, wC = Ht`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, xC = Ht`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, SC = Ht`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, EC = Er("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${wC} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${xC} 0.15s ease-out forwards;
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
    animation: ${SC} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, kC = Ht`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, CC = Er("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${kC} 1s linear infinite;
`, NC = Ht`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, PC = Ht`
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
}`, TC = Er("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${NC} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${PC} 0.2s ease-out forwards;
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
`, LC = Er("div")`
  position: absolute;
`, RC = Er("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, IC = Ht`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, $C = Er("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${IC} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, AC = ({ toast: e }) => {
  let { icon: n, type: r, iconTheme: l } = e;
  return n !== void 0 ? typeof n == "string" ? U.createElement($C, null, n) : n : r === "blank" ? null : U.createElement(RC, null, U.createElement(CC, { ...l }), r !== "loading" && U.createElement(LC, null, r === "error" ? U.createElement(EC, { ...l }) : U.createElement(TC, { ...l })));
}, OC = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, DC = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`, zC = "0%{opacity:0;} 100%{opacity:1;}", MC = "0%{opacity:1;} 100%{opacity:0;}", FC = Er("div")`
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
`, jC = Er("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, UC = (e, n) => {
  let r = e.includes("top") ? 1 : -1, [l, o] = py() ? [zC, MC] : [OC(r), DC(r)];
  return { animation: n ? `${Ht(l)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${Ht(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
}, BC = U.memo(({ toast: e, position: n, style: r, children: l }) => {
  let o = e.height ? UC(e.position || n || "top-center", e.visible) : { opacity: 0 }, s = U.createElement(AC, { toast: e }), c = U.createElement(jC, { ...e.ariaProps }, Xo(e.message, e));
  return U.createElement(FC, { className: e.className, style: { ...o, ...r, ...e.style } }, typeof l == "function" ? l({ icon: s, message: c }) : U.createElement(U.Fragment, null, s, c));
});
cC(U.createElement);
var KC = ({ id: e, className: n, style: r, onHeightUpdate: l, children: o }) => {
  let s = U.useCallback((c) => {
    if (c) {
      let d = () => {
        let p = c.getBoundingClientRect().height;
        l(e, p);
      };
      d(), new MutationObserver(d).observe(c, { subtree: !0, childList: !0, characterData: !0 });
    }
  }, [e, l]);
  return U.createElement("div", { ref: s, className: n, style: r }, o);
}, WC = (e, n) => {
  let r = e.includes("top"), l = r ? { top: 0 } : { bottom: 0 }, o = e.includes("center") ? { justifyContent: "center" } : e.includes("right") ? { justifyContent: "flex-end" } : {};
  return { left: 0, right: 0, display: "flex", position: "absolute", transition: py() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)", transform: `translateY(${n * (r ? 1 : -1)}px)`, ...l, ...o };
}, HC = ds`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`, ao = 16, VC = ({ reverseOrder: e, position: n = "top-center", toastOptions: r, gutter: l, children: o, toasterId: s, containerStyle: c, containerClassName: d }) => {
  let { toasts: p, handlers: y } = _C(r, s);
  return U.createElement("div", { "data-rht-toaster": s || "", style: { position: "fixed", zIndex: 9999, top: ao, left: ao, right: ao, bottom: ao, pointerEvents: "none", ...c }, className: d, onMouseEnter: y.startPause, onMouseLeave: y.endPause }, p.map((k) => {
    let S = k.position || n, C = y.calculateOffset(k, { reverseOrder: e, gutter: l, defaultPosition: n }), R = WC(S, C);
    return U.createElement(KC, { id: k.id, key: k.id, onHeightUpdate: y.updateHeight, className: k.visible ? HC : "", style: R }, k.type === "custom" ? Xo(k.message, k) : o ? o(k) : U.createElement(BC, { toast: k, position: S }));
  }));
};
const GC = ({
  config: e,
  onSuccess: n,
  onError: r,
  isProcessing: l,
  setIsProcessing: o,
  initialResponse: s
}) => {
  const [c, d] = U.useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    cardPin: ""
  }), [p, y] = U.useState({}), [k, S] = U.useState(!1), [C, R] = U.useState(!1), L = (v) => {
    const {
      name: w,
      value: I
    } = v.target;
    let F = I;
    w === "cardNumber" && (F = I.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim()), w === "expiryDate" && (F = I.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1/$2")), w === "cvv" && (F = I.replace(/\D/g, "")), d((z) => ({
      ...z,
      [w]: F
    })), p[w] && y((z) => ({
      ...z,
      [w]: ""
    }));
  }, A = () => {
    const v = {}, w = c.cardNumber.replace(/\s/g, "");
    return j3(w) || (v.cardNumber = "Invalid card number"), B3(c.expiryDate) || (v.expiryDate = "Invalid expiry date"), U3(c.cvv) || (v.cvv = "Invalid CVV"), y(v), Object.keys(v).length === 0;
  }, V = (v) => {
    v.preventDefault(), A() && S(!0);
  }, _ = async (v) => {
    if (v.preventDefault(), !!A()) {
      o(!0);
      try {
        const w = c.cardNumber.replace(/\s/g, ""), [I, F] = c.expiryDate.split("/"), z = {
          publicKey: e.publicKey,
          email: e.email,
          amount: e.amount,
          currency: e.currency,
          reference: e.reference,
          paymentMethod: "card",
          cardDetails: {
            cardNumber: w,
            expiryMonth: I,
            expiryYear: `${F}`,
            cvv: c.cvv,
            cardPin: c.cardPin,
            cardholderName: c.cardholderName
          },
          metadata: e.metadata
        }, {
          data: W
        } = await Jf(z, s), {
          authMode: G
        } = W;
        if (console.log("Payment Response:", W), G === "otp") {
          R(!0), S(!1), o(!1);
          return;
        }
        if (G === "pin") {
          R(!1), S(!0), o(!1);
          return;
        }
        R(!0);
      } catch (w) {
        Ue.error(w.message || "Payment failed. Please try again."), r({
          message: w.message || "Payment failed. Please try again.",
          type: "card_error"
        });
      }
    }
  };
  return /* @__PURE__ */ T.jsxs(of.Fragment, { children: [
    k && !C && /* @__PURE__ */ T.jsx(tC, { formData: c, setFormData: d, handleSubmit: _ }),
    !k && !C && /* @__PURE__ */ T.jsxs("form", { className: "novac-payment-form", onSubmit: V, children: [
      /* @__PURE__ */ T.jsxs("div", { className: "novac-form-group", children: [
        /* @__PURE__ */ T.jsx(he, { htmlFor: "cardNumber", className: "novac-label", $as: "label", $fileKey: "components/CardPayment.jsx", $entryKey: "6/0/init/body/8/argument/3/expression/right/39/1" }),
        /* @__PURE__ */ T.jsxs("div", { className: "novac-input-wrapper", children: [
          /* @__PURE__ */ T.jsx(he, { className: "novac-input-icon", $as: "span", $fileKey: "components/CardPayment.jsx", $entryKey: "6/0/init/body/8/argument/3/expression/right/39/3/1" }),
          /* @__PURE__ */ T.jsx(gr, { type: "text", id: "cardNumber", name: "cardNumber", className: `novac-input with-icon ${p.cardNumber ? "error" : ""}`, value: c.cardNumber, onChange: L, placeholder: "0000 0000 0000 0000", maxLength: "19", disabled: l, autoComplete: "cc-number", $attrAs: "input", $fileKey: "components/CardPayment.jsx", $attributes: {
            placeholder: "6/0/init/body/8/argument/3/expression/right/39/3/3-placeholder"
          } })
        ] }),
        p.cardNumber && /* @__PURE__ */ T.jsx(he, { className: "novac-error-text", $as: "span", $fileKey: "components/CardPayment.jsx", $entryKey: "6/0/init/body/8/argument/3/expression/right/39/5/expression/right" })
      ] }),
      /* @__PURE__ */ T.jsxs("div", { className: "novac-form-row", children: [
        /* @__PURE__ */ T.jsxs("div", { className: "novac-form-group", children: [
          /* @__PURE__ */ T.jsx(he, { htmlFor: "expiryDate", className: "novac-label", $as: "label", $fileKey: "components/CardPayment.jsx", $entryKey: "6/0/init/body/8/argument/3/expression/right/41/1/1" }),
          /* @__PURE__ */ T.jsx(gr, { type: "text", id: "expiryDate", name: "expiryDate", className: `novac-input ${p.expiryDate ? "error" : ""}`, value: c.expiryDate, onChange: L, placeholder: "MM/YY", maxLength: "5", disabled: l, autoComplete: "cc-exp", $attrAs: "input", $fileKey: "components/CardPayment.jsx", $attributes: {
            placeholder: "6/0/init/body/8/argument/3/expression/right/41/1/3-placeholder"
          } }),
          p.expiryDate && /* @__PURE__ */ T.jsx("span", { className: "novac-error-text", children: p.expiryDate })
        ] }),
        /* @__PURE__ */ T.jsxs("div", { className: "novac-form-group", children: [
          /* @__PURE__ */ T.jsx(he, { htmlFor: "cvv", className: "novac-label", $as: "label", $fileKey: "components/CardPayment.jsx", $entryKey: "6/0/init/body/8/argument/3/expression/right/41/3/1" }),
          /* @__PURE__ */ T.jsx(gr, { type: "text", id: "cvv", name: "cvv", className: `novac-input ${p.cvv ? "error" : ""}`, value: c.cvv, onChange: L, placeholder: "123", maxLength: "4", disabled: l, autoComplete: "cc-csc", $attrAs: "input", $fileKey: "components/CardPayment.jsx", $attributes: {
            placeholder: "6/0/init/body/8/argument/3/expression/right/41/3/3-placeholder"
          } }),
          p.cvv && /* @__PURE__ */ T.jsx("span", { className: "novac-error-text", children: p.cvv })
        ] })
      ] }),
      /* @__PURE__ */ T.jsx("button", { type: "submit", className: "novac-submit-btn", disabled: l, children: l ? "Processing..." : "Pay" })
    ] }),
    C && /* @__PURE__ */ T.jsx(rC, { config: e, onSuccess: n, onError: r, isProcessing: l, setIsProcessing: o })
  ] });
}, QC = ({
  config: e,
  onSuccess: n,
  onError: r,
  isProcessing: l,
  setIsProcessing: o,
  initialResponse: s
}) => {
  const [c, d] = U.useState(sessionStorage.getItem("novac-transfer-details") ? JSON.parse(sessionStorage.getItem("novac-transfer-details")) : null), [p, y] = U.useState(!1), [k, S] = U.useState(null), C = U.useCallback(async () => {
    o(!0);
    try {
      const _ = {
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
      }, v = await Jf(_, s);
      sessionStorage.setItem("novac-transfer-details", JSON.stringify({
        accountNumber: v.accountNumber || "0123456789",
        accountName: v.accountName || "Novac Payment Limited",
        bankName: v.bankName || "Access Bank",
        amount: e.amount,
        reference: e.reference,
        expiresInSeconds: v.expiresInSeconds || 20 * 60
      })), d({
        accountNumber: v.accountNumber || "0123456789",
        accountName: v.accountName || "Novac Payment Limited",
        bankName: v.bankName || "Access Bank",
        amount: e.amount,
        reference: e.reference,
        expiresInSeconds: v.expiresInSeconds || 20 * 60
      }), o(!1);
    } catch (_) {
      o(!1), Ue.error(_.message || "Failed to generate transfer details"), r({
        message: _.message || "Failed to generate transfer details",
        type: "bank_transfer_error"
      });
    }
  }, [e, r, o]);
  U.useEffect(() => {
    C();
  }, []), U.useEffect(() => {
    if (!c) return;
    const _ = c.expiresInSeconds || 20 * 60;
    S(_);
  }, [c]), U.useEffect(() => {
    if (k === null || k <= 0) return;
    const _ = setInterval(() => {
      S((v) => v > 0 ? v - 1 : 0);
    }, 1e3);
    return () => clearInterval(_);
  }, [k]);
  const R = U.useMemo(() => {
    const _ = Number(e.amount) || 0;
    try {
      return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: e.currency || "NGN",
        minimumFractionDigits: 2
      }).format(_);
    } catch {
      return `${e.currency || "NGN"} ${_.toLocaleString()}`;
    }
  }, [e.amount, e.currency]), L = (_) => {
    if (_ === null) return "--";
    const v = Math.floor(_ / 60), w = Math.max(_ % 60, 0);
    return `${v}m ${w.toString().padStart(2, "0")}s`;
  }, A = (_, v) => {
    navigator.clipboard.writeText(_).then(() => {
      y(v), setTimeout(() => y(!1), 2e3);
    }).catch(() => {
      alert("Copy failed. Please copy manually.");
    });
  }, V = () => {
    n({
      reference: e.reference,
      status: "pending",
      message: "Payment initiated. Awaiting confirmation."
    });
  };
  return l ? /* @__PURE__ */ T.jsxs("div", { className: "novac-loading", children: [
    /* @__PURE__ */ T.jsx("div", { className: "novac-spinner" }),
    /* @__PURE__ */ T.jsx(he, { $as: "p", $fileKey: "components/BankTransfer.jsx", $entryKey: "3/0/init/body/11/consequent/0/argument/3" })
  ] }) : c ? /* @__PURE__ */ T.jsxs(gr, { className: "novac-bank-transfer", "aria-label": "Bank transfer details", $attrAs: "section", $fileKey: "components/BankTransfer.jsx", $attributes: {
    "aria-label": "3/0/init/body/13/argument-aria-label"
  }, children: [
    /* @__PURE__ */ T.jsx("div", { className: "novac-bank-transfer__intro", children: /* @__PURE__ */ T.jsx(he, { className: "novac-bank-transfer__title", $as: "h3", $fileKey: "components/BankTransfer.jsx", $entryKey: "3/0/init/body/13/argument/1/1" }) }),
    /* @__PURE__ */ T.jsx("div", { className: "novac-bank-transfer__card", children: /* @__PURE__ */ T.jsxs("dl", { className: "novac-bank-transfer__grid", children: [
      /* @__PURE__ */ T.jsxs("div", { className: "novac-bank-transfer__field", children: [
        /* @__PURE__ */ T.jsx(he, { $as: "dt", $fileKey: "components/BankTransfer.jsx", $entryKey: "3/0/init/body/13/argument/3/1/1/1" }),
        /* @__PURE__ */ T.jsx("dd", { children: R })
      ] }),
      /* @__PURE__ */ T.jsxs("div", { className: "novac-bank-transfer__field", children: [
        /* @__PURE__ */ T.jsx(he, { $as: "dt", $fileKey: "components/BankTransfer.jsx", $entryKey: "3/0/init/body/13/argument/3/1/3/1" }),
        /* @__PURE__ */ T.jsxs("dd", { children: [
          /* @__PURE__ */ T.jsx("span", { children: c.accountNumber }),
          /* @__PURE__ */ T.jsxs(gr, { type: "button", className: `novac-copy-btn ${p === "account" ? "is-copied" : ""}`, onClick: () => A(c.accountNumber, "account"), title: "Copy account number", $attrAs: "button", $fileKey: "components/BankTransfer.jsx", $attributes: {
            title: "3/0/init/body/13/argument/3/1/3/3/3-title"
          }, children: [
            /* @__PURE__ */ T.jsx(he, { className: "sr-only", $as: "span", $fileKey: "components/BankTransfer.jsx", $entryKey: "3/0/init/body/13/argument/3/1/3/3/3/1" }),
            p === "account" ? /* @__PURE__ */ T.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", children: /* @__PURE__ */ T.jsx("path", { d: "M7 13h10v1h-10v-1zm15-11v22h-20v-22h3c1.229 0 2.18-1.084 3-2h8c.82.916 1.771 2 3 2h3zm-11 1c0 .552.448 1 1 1s1-.448 1-1-.448-1-1-1-1 .448-1 1zm9 15.135c-1.073 1.355-2.448 2.763-3.824 3.865h3.824v-3.865zm0-14.135h-4l-2 2h-3.898l-2.102-2h-4v18h7.362c4.156 0 2.638-6 2.638-6s6 1.65 6-2.457v-9.543zm-13 12h5v-1h-5v1zm0-4h10v-1h-10v1zm0-2h10v-1h-10v1z" }) }) : /* @__PURE__ */ T.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "#252264", width: "14", height: "14", viewBox: "0 0 24 24", children: /* @__PURE__ */ T.jsx("path", { d: "M24 4h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ T.jsxs("div", { className: "novac-bank-transfer__field", children: [
        /* @__PURE__ */ T.jsx(he, { $as: "dt", $fileKey: "components/BankTransfer.jsx", $entryKey: "3/0/init/body/13/argument/3/1/5/1" }),
        /* @__PURE__ */ T.jsx("dd", { children: c.bankName })
      ] }),
      /* @__PURE__ */ T.jsxs("div", { className: "novac-bank-transfer__field", children: [
        /* @__PURE__ */ T.jsx(he, { $as: "dt", $fileKey: "components/BankTransfer.jsx", $entryKey: "3/0/init/body/13/argument/3/1/7/1" }),
        /* @__PURE__ */ T.jsx("dd", { children: c.accountName })
      ] })
    ] }) }),
    /* @__PURE__ */ T.jsx(he, { className: "novac-bank-transfer__expiry", $as: "p", $fileKey: "components/BankTransfer.jsx", $entryKey: "3/0/init/body/13/argument/5", $elements: [({
      children: _
    }) => /* @__PURE__ */ T.jsx("strong", { children: _ })], $functions: {
      formatCountdown: [L(k)]
    } }),
    /* @__PURE__ */ T.jsx(he, { type: "button", className: "novac-bank-transfer__cta novac-submit-btn", onClick: V, $as: "button", $fileKey: "components/BankTransfer.jsx", $entryKey: "3/0/init/body/13/argument/7" }),
    /* @__PURE__ */ T.jsx(he, { className: "novac-bank-transfer__footnote", $as: "p", $fileKey: "components/BankTransfer.jsx", $entryKey: "3/0/init/body/13/argument/9", $variables: {
      formattedAmount: R
    } })
  ] }) : /* @__PURE__ */ T.jsx("div", { className: "novac-error-state", children: /* @__PURE__ */ T.jsx(he, { $as: "p", $fileKey: "components/BankTransfer.jsx", $entryKey: "3/0/init/body/12/consequent/0/argument/1" }) });
}, YC = ({
  config: e,
  onSuccess: n,
  onError: r,
  isProcessing: l,
  setIsProcessing: o,
  initialResponse: s
}) => {
  const [c, d] = U.useState(""), [p, y] = U.useState(""), [k, S] = U.useState(!1), [C, R] = U.useState(sessionStorage.getItem("novac-ussd-banks") ? JSON.parse(sessionStorage.getItem("novac-ussd-banks")) : []), [L, A] = U.useState(!1), [V, _] = U.useState(""), [v, w] = U.useState(null), [I, F] = U.useState(!1);
  U.useEffect(() => {
    let K = !0;
    return (async () => {
      var Oe, kn;
      if (_(""), !(!e || !e.publicKey)) {
        A(!0);
        try {
          const le = await M3(e.publicKey);
          let de = [];
          if (Array.isArray(le))
            de = le;
          else if (Array.isArray((Oe = le == null ? void 0 : le.data) == null ? void 0 : Oe.bankDetails))
            de = le.data.bankDetails;
          else if (Array.isArray(le == null ? void 0 : le.data))
            de = le.data;
          else if (Array.isArray((kn = le == null ? void 0 : le.data) == null ? void 0 : kn.banks))
            de = le.data.banks;
          else if (Array.isArray(le == null ? void 0 : le.banks))
            de = le.banks;
          else if (le && typeof le == "object") {
            const X = Object.values(le).find((B) => Array.isArray(B));
            if (Array.isArray(X) && (de = X), !de.length && le.data && typeof le.data == "object") {
              const B = Object.values(le.data).find((ee) => Array.isArray(ee));
              Array.isArray(B) && (de = B);
            }
          }
          const dt = (de || []).map((X, B) => ({
            key: String((X == null ? void 0 : X.bank_code) ?? (X == null ? void 0 : X.bankCode) ?? (X == null ? void 0 : X.code) ?? (X == null ? void 0 : X.id) ?? (X == null ? void 0 : X.slug) ?? (X == null ? void 0 : X.name) ?? B),
            name: String((X == null ? void 0 : X.bank_name) ?? (X == null ? void 0 : X.bankName) ?? (X == null ? void 0 : X.name) ?? (X == null ? void 0 : X.label) ?? `Bank ${B + 1}`),
            ussd: String((X == null ? void 0 : X.ussd_string) ?? (X == null ? void 0 : X.ussdCode) ?? (X == null ? void 0 : X.ussd_code) ?? (X == null ? void 0 : X.ussd) ?? (X == null ? void 0 : X.ussdPrefix) ?? "")
          }));
          K && (sessionStorage.setItem("novac-ussd-banks", JSON.stringify(dt)), R(dt));
        } catch (le) {
          K && R([]), _((le == null ? void 0 : le.message) || "Failed to load banks"), r && r({
            message: le.message || "Failed to load banks",
            type: "fetch_banks"
          });
        } finally {
          K && A(!1);
        }
      }
    })(), () => {
      K = !1;
    };
  }, [e == null ? void 0 : e.publicKey]);
  const z = async (K) => {
    var kn;
    const xe = K == null ? void 0 : K.key, Oe = (K == null ? void 0 : K.ussd) ?? "";
    d(xe), o(!0);
    try {
      const le = {
        publicKey: e.publicKey,
        email: e.email,
        amount: e.amount,
        currency: e.currency,
        reference: e.reference,
        paymentMethod: "ussd",
        bankCode: xe,
        metadata: e.metadata
      }, de = await Jf(le, s), dt = (de == null ? void 0 : de.paymentCode) ?? ((kn = de == null ? void 0 : de.data) == null ? void 0 : kn.paymentCode) ?? (de == null ? void 0 : de.payment_code) ?? (de == null ? void 0 : de.code) ?? "", X = (de == null ? void 0 : de.expiresInSeconds) ?? (de == null ? void 0 : de.expirySeconds) ?? (de == null ? void 0 : de.expires_in) ?? 30 * 60;
      let B;
      Oe && Oe.includes("{amount}") ? B = Oe.replace("{amount}", String(e.amount)) : Oe && Oe.includes("#") ? B = Oe : B = `${Oe}${dt || "000"}*${e.amount}#`, y(B), S(!0), w(X), o(!1);
    } catch (le) {
      o(!1), Ue.error(le.message || "Failed to generate USSD code"), r && r({
        message: le.message || "Failed to generate USSD code",
        type: "ussd_error"
      });
    }
  }, W = () => {
    n({
      reference: e.reference,
      status: "pending",
      message: "USSD payment initiated. Please complete on your device."
    });
  }, G = () => {
    navigator.clipboard.writeText(p).then(() => {
      F(!0), setTimeout(() => F(!1), 2e3);
    }).catch(() => {
      alert("Copy failed. Please write down the code manually.");
    });
  };
  U.useEffect(() => {
    if (!k || v === null || v <= 0) return;
    const K = setInterval(() => {
      w((xe) => xe > 0 ? xe - 1 : 0);
    }, 1e3);
    return () => clearInterval(K);
  }, [k, v]);
  const se = (K) => {
    if (K === null) return "--:--";
    const xe = Math.floor(K / 60), Oe = Math.max(K % 60, 0);
    return `${xe.toString().padStart(2, "0")}:${Oe.toString().padStart(2, "0")}`;
  };
  return k ? /* @__PURE__ */ T.jsxs("div", { className: "novac-ussd-code", children: [
    /* @__PURE__ */ T.jsx(he, { className: "novac-ussd-code__instruction", $as: "p", $fileKey: "components/UssdPayment.jsx", $entryKey: "3/0/init/body/14/consequent/0/argument/1" }),
    /* @__PURE__ */ T.jsxs("div", { className: "novac-ussd-code__display", children: [
      /* @__PURE__ */ T.jsx("span", { className: "novac-ussd-code__value", children: p }),
      /* @__PURE__ */ T.jsxs(gr, { className: `novac-copy-btn novac-copy-btn--inline ${I ? "is-copied" : ""}`, onClick: G, title: "Copy USSD code", $attrAs: "button", $fileKey: "components/UssdPayment.jsx", $attributes: {
        title: "3/0/init/body/14/consequent/0/argument/3/3-title"
      }, children: [
        /* @__PURE__ */ T.jsx(he, { className: "sr-only", $as: "span", $fileKey: "components/UssdPayment.jsx", $entryKey: "3/0/init/body/14/consequent/0/argument/3/3/1" }),
        I ? /* @__PURE__ */ T.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", children: /* @__PURE__ */ T.jsx("path", { d: "M7 13h10v1h-10v-1zm15-11v22h-20v-22h3c1.229 0 2.18-1.084 3-2h8c.82.916 1.771 2 3 2h3zm-11 1c0 .552.448 1 1 1s1-.448 1-1-.448-1-1-1-1 .448-1 1zm9 15.135c-1.073 1.355-2.448 2.763-3.824 3.865h3.824v-3.865zm0-14.135h-4l-2 2h-3.898l-2.102-2h-4v18h7.362c4.156 0 2.638-6 2.638-6s6 1.65 6-2.457v-9.543zm-13 12h5v-1h-5v1zm0-4h10v-1h-10v1zm0-2h10v-1h-10v1z" }) }) : /* @__PURE__ */ T.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "#252264", width: "14", height: "14", viewBox: "0 0 24 24", children: /* @__PURE__ */ T.jsx("path", { d: "M24 4h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z" }) })
      ] })
    ] }),
    /* @__PURE__ */ T.jsx(he, { className: "novac-ussd-code__expiry", $as: "p", $fileKey: "components/UssdPayment.jsx", $entryKey: "3/0/init/body/14/consequent/0/argument/5", $functions: {
      formatCountdown: [se(v)]
    } }),
    /* @__PURE__ */ T.jsx(he, { type: "button", className: "novac-submit-btn novac-ussd-code__cta", onClick: W, $as: "button", $fileKey: "components/UssdPayment.jsx", $entryKey: "3/0/init/body/14/consequent/0/argument/7" })
  ] }) : /* @__PURE__ */ T.jsxs("div", { className: "novac-ussd-payment", children: [
    /* @__PURE__ */ T.jsx("div", { className: "novac-info-box", children: /* @__PURE__ */ T.jsx(he, { className: "novac-info-text", $as: "p", $fileKey: "components/UssdPayment.jsx", $entryKey: "3/0/init/body/15/argument/1/1" }) }),
    L ? /* @__PURE__ */ T.jsxs("div", { className: "novac-loading", children: [
      /* @__PURE__ */ T.jsx("div", { className: "novac-spinner" }),
      /* @__PURE__ */ T.jsx(he, { $as: "p", $fileKey: "components/UssdPayment.jsx", $entryKey: "3/0/init/body/15/argument/3/expression/consequent/3" })
    ] }) : V ? /* @__PURE__ */ T.jsx("div", { className: "novac-warning-box", children: /* @__PURE__ */ T.jsx("p", { className: "novac-warning-text", children: V }) }) : C.length === 0 ? /* @__PURE__ */ T.jsx("div", { className: "novac-info-box", children: /* @__PURE__ */ T.jsx(he, { className: "novac-info-text", $as: "p", $fileKey: "components/UssdPayment.jsx", $entryKey: "3/0/init/body/15/argument/3/expression/alternate/alternate/consequent/1" }) }) : /* @__PURE__ */ T.jsxs("select", { className: "novac-bank-select", value: c, onChange: (K) => {
      const xe = C.find((Oe) => Oe.key === K.target.value);
      xe && z(xe);
    }, disabled: l, children: [
      /* @__PURE__ */ T.jsx(he, { value: "", $as: "option", $fileKey: "components/UssdPayment.jsx", $entryKey: "3/0/init/body/15/argument/3/expression/alternate/alternate/alternate/1" }),
      C.map((K) => /* @__PURE__ */ T.jsx("option", { value: K.key, children: K.name }, K.key))
    ] }),
    l && /* @__PURE__ */ T.jsxs("div", { className: "novac-loading", children: [
      /* @__PURE__ */ T.jsx("div", { className: "novac-spinner" }),
      /* @__PURE__ */ T.jsx(he, { $as: "p", $fileKey: "components/UssdPayment.jsx", $entryKey: "3/0/init/body/15/argument/5/expression/right/3" })
    ] })
  ] });
}, XC = (e, n = "NGN") => `${{
  NGN: "₦",
  USD: "$",
  GBP: "£",
  EUR: "€"
}[n] || n}${e.toLocaleString()}`, ZC = ({
  status: e
}) => /* @__PURE__ */ T.jsxs("span", { className: `novac-status-icon-inner  ${e}`, children: [
  e === "confirming" && "⏳",
  e === "success" && "✅",
  e === "failed" && "❌"
] }), qC = ({
  reference: e,
  onSuccess: n,
  onError: r,
  time_taken: l,
  publicKey: o,
  status: s = "confirming",
  title: c,
  message: d,
  subMessage: p,
  onRetry: y,
  showCloseHint: k = !0
}) => {
  const S = ["success", "failed"].includes(s) ? s : "confirming", C = typeof l == "number" && l > 0 ? l : 0.5, [R, L] = U.useState(Math.round(C * 60)), A = U.useRef(null), V = U.useRef(null), _ = U.useRef(!1), v = {
    confirming: {
      title: c || "Confirming your transaction...",
      message: d || "Please do not refresh or leave this page",
      sub: p || "This process takes a moment while we finalize your payment."
    },
    success: {
      title: c || "Payment Completed",
      message: d || "Your transaction was successful.",
      sub: p || (k ? "You can now securely close this tab." : "")
    },
    failed: {
      title: c || "Payment Failed",
      message: d || "Sorry, we can't complete your transaction at this time.",
      sub: p || (k ? "You can now securely close this tab." : "")
    }
  }[S];
  function w(z) {
    var G;
    if (!z) return !1;
    if (z === !0 || z.status === !0) return !0;
    const W = ((G = z == null ? void 0 : z.data) == null ? void 0 : G.status) ?? (z == null ? void 0 : z.status) ?? (z == null ? void 0 : z.paymentStatus) ?? (z == null ? void 0 : z.statusText);
    if (typeof W == "string") {
      const se = W.toLowerCase();
      if (se.includes("success") || se.includes("completed") || se.includes("paid")) return !0;
    }
    return !1;
  }
  U.useEffect(() => {
    if (S !== "confirming") return () => {
    };
    let z = !0;
    const W = () => {
      A.current && (clearInterval(A.current), A.current = null), V.current && (clearInterval(V.current), V.current = null);
    }, G = (K) => {
      if (!_.current) {
        _.current = !0, W();
        try {
          n && n({
            data: K,
            reference: e,
            status: "success",
            message: "Payment confirmed successfully"
          });
        } catch (xe) {
          r && r({
            reference: e,
            status: "failed",
            message: "onSuccess callback error"
          }), console.error("onSuccess callback error", xe);
        }
      }
    }, se = async () => {
      try {
        const K = await F3(e, o);
        if (!z) return;
        w(K) && G(K.data || K);
      } catch (K) {
        z && r && r({
          reference: e,
          status: "failed",
          message: (K == null ? void 0 : K.message) || "verifyPayment error"
        }), console.warn("verifyPayment error", (K == null ? void 0 : K.message) || K);
      }
    };
    return se(), A.current = setInterval(se, 5e3), V.current = setInterval(() => {
      L((K) => K <= 1 ? (_.current || G(), 0) : K - 1);
    }, 1e3), () => {
      z = !1, W();
    };
  }, [S, e, o, n]), U.useEffect(() => {
    S !== "confirming" && (A.current && clearInterval(A.current), V.current && clearInterval(V.current));
  }, [S]);
  const I = Math.floor(R / 60), F = R % 60;
  return /* @__PURE__ */ T.jsxs("div", { className: `novac-status-container status-${S}`, children: [
    /* @__PURE__ */ T.jsx("div", { className: "novac-status-icon", children: /* @__PURE__ */ T.jsx(ZC, { status: S }) }),
    /* @__PURE__ */ T.jsx("h3", { className: "novac-status-title", children: v.title }),
    /* @__PURE__ */ T.jsx("p", { className: "novac-status-message", children: v.message }),
    S === "confirming" ? /* @__PURE__ */ T.jsxs("p", { className: "novac-status-submessage", children: [
      p || "This process takes about ",
      R > 0 ? /* @__PURE__ */ T.jsxs("span", { children: [
        I > 0 ? `${I} minute${I > 1 ? "s" : ""}` : "",
        I > 0 && F > 0 ? " " : "",
        F > 0 ? `${F} second${F > 1 ? "s" : ""}` : ""
      ] }) : /* @__PURE__ */ T.jsx(he, { $as: "span", $fileKey: "components/ConfirmTransaction.jsx", $entryKey: "3/0/init/body/12/argument/7/expression/consequent/3/expression/alternate" })
    ] }) : v.sub ? /* @__PURE__ */ T.jsx("p", { className: "novac-status-submessage", children: v.sub }) : null,
    S === "failed" && y && /* @__PURE__ */ T.jsx(he, { type: "button", className: "novac-status-retry", onClick: y, $as: "button", $fileKey: "components/ConfirmTransaction.jsx", $entryKey: "3/0/init/body/12/argument/9/expression/right" })
  ] });
}, JC = ({
  config: e,
  onClose: n
}) => {
  var L, A, V, _, v, w, I, F;
  const [r, l] = U.useState("card"), [o, s] = U.useState(!1), [c, d] = U.useState(null), [p, y] = U.useState(!1), k = [];
  e.paymentMethods.includes("card") && k.push({
    id: "card",
    label: "Card",
    icon: "💳"
  }), e.paymentMethods.includes("bank_transfer") && k.push({
    id: "bank_transfer",
    label: "Bank Transfer",
    icon: "🏦"
  }), e.paymentMethods.includes("ussd") && k.push({
    id: "ussd",
    label: "USSD",
    icon: "📱"
  });
  const S = (z) => {
    s(!1), e.onSuccess(z), setTimeout(() => n(), 1500);
  }, C = (z) => {
    s(!1), e.onError(z);
  }, R = (z) => {
    z.target === z.currentTarget && !o && n();
  };
  return U.useEffect(async () => {
    var G, se, K;
    const z = (e.customerName || "").split(" "), W = await $3({
      publicKey: e.publicKey,
      transactionReference: e.reference || ty(),
      amount: e.amount,
      currency: e.currency,
      checkoutCustomerData: {
        email: e.email,
        firstName: z[0] || "Anonymous",
        lastName: z[1] || "Anonymous",
        phoneNumber: e.customerPhone || ""
      },
      checkoutCustomizationData: {
        logoUrl: ((G = e.customization) == null ? void 0 : G.logoUrl) || "",
        checkoutModalTitle: ((se = e.customization) == null ? void 0 : se.title) || "Novac Payment",
        paymentDescription: ((K = e.customization) == null ? void 0 : K.description) || "Complete your payment securely"
      }
    });
    d(W);
  }, [e]), /* @__PURE__ */ T.jsxs("div", { className: "novac-modal-overlay", onClick: R, children: [
    /* @__PURE__ */ T.jsx("div", { children: /* @__PURE__ */ T.jsx(VC, { position: "top-right" }) }),
    e.publicKey.startsWith("nc_testpk_") && /* @__PURE__ */ T.jsxs("div", { className: "novac-test-banner", children: [
      /* @__PURE__ */ T.jsx(he, { className: "novac-test-banner-icon", $as: "span", $fileKey: "components/CheckoutModal.jsx", $entryKey: "9/0/init/body/12/argument/5/expression/right/1" }),
      /* @__PURE__ */ T.jsx(he, { className: "novac-test-banner-text", $as: "span", $fileKey: "components/CheckoutModal.jsx", $entryKey: "9/0/init/body/12/argument/5/expression/right/3" })
    ] }),
    /* @__PURE__ */ T.jsxs("div", { className: "novac-modal", children: [
      /* @__PURE__ */ T.jsxs("div", { className: "novac-modal-header", style: {
        background: `${((L = e.customization) == null ? void 0 : L.background) || "#EEEDFD"}`,
        color: `${((A = e.customization) == null ? void 0 : A.color) || "#15142B"}`
      }, children: [
        /* @__PURE__ */ T.jsxs("div", { className: "novac-header-content", children: [
          /* @__PURE__ */ T.jsx("p", { className: "novac-amount", style: {
            color: `${((V = e.customization) == null ? void 0 : V.color) || "#15142B"}`
          }, children: XC(e.amount, e.currency) }),
          /* @__PURE__ */ T.jsx("h2", { className: "novac-title", style: {
            color: `${((_ = e.customization) == null ? void 0 : _.color) || "#15142B"}`
          }, children: ((v = e.customization) == null ? void 0 : v.title) || "Payment Modal" }),
          /* @__PURE__ */ T.jsx("p", { className: "novac-email", style: {
            color: `${((w = e.customization) == null ? void 0 : w.color) || "#15142B"}`
          }, children: e.email })
        ] }),
        /* @__PURE__ */ T.jsx(nC, { locales: ["en", "es", "fr", "de"], style: {
          color: `${((I = e.customization) == null ? void 0 : I.color) || "#15142B"}`
        } }),
        /* @__PURE__ */ T.jsx(he, { className: "novac-close-btn", onClick: n, disabled: o, "aria-label": "Close", $attrAs: "button", $fileKey: "components/CheckoutModal.jsx", $attributes: {
          "aria-label": "9/0/init/body/12/argument/7/1/5-aria-label"
        }, $as: gr, $entryKey: "9/0/init/body/12/argument/7/1/5" })
      ] }),
      p && /* @__PURE__ */ T.jsx(qC, { reference: ((F = c == null ? void 0 : c.data) == null ? void 0 : F.transactionReference) || void 0, publicKey: e.publicKey, onClose: n, onSuccess: S, onError: C, time_taken: 60.5, onRetry: () => y(!1) }),
      !p && /* @__PURE__ */ T.jsx("div", { className: "novac-tabs", children: !p && k.map((z) => /* @__PURE__ */ T.jsxs("button", { className: `novac-tab ${r === z.id ? "active" : ""}`, onClick: () => !o && l(z.id), disabled: o, children: [
        /* @__PURE__ */ T.jsx("span", { className: "novac-tab-icon", children: z.icon }),
        /* @__PURE__ */ T.jsx("span", { className: "novac-tab-label", children: z.label })
      ] }, z.id)) }),
      !p && /* @__PURE__ */ T.jsxs("div", { className: "novac-tab-content", children: [
        !p && r === "card" && /* @__PURE__ */ T.jsx(GC, { config: e, onSuccess: y, onError: C, isProcessing: o, setIsProcessing: s, initialResponse: c }),
        !p && r === "bank_transfer" && /* @__PURE__ */ T.jsx(QC, { config: e, onSuccess: y, onError: C, isProcessing: o, setIsProcessing: s, initialResponse: c }),
        !p && r === "ussd" && /* @__PURE__ */ T.jsx(YC, { config: e, onSuccess: y, onError: C, isProcessing: o, setIsProcessing: s, initialResponse: c })
      ] })
    ] }),
    /* @__PURE__ */ T.jsxs("div", { className: "novac-security-badge", children: [
      /* @__PURE__ */ T.jsx(he, { className: "novac-lock-icon", $as: "span", $fileKey: "components/CheckoutModal.jsx", $entryKey: "9/0/init/body/12/argument/9/1" }),
      /* @__PURE__ */ T.jsx(he, { className: "novac-security-text", $as: "span", $fileKey: "components/CheckoutModal.jsx", $entryKey: "9/0/init/body/12/argument/9/3" })
    ] })
  ] });
};
class yy {
  constructor(n) {
    this.config = this.validateConfig(n), this.modalRoot = null, this.root = null;
  }
  /**
   * Validate configuration object
   */
  validateConfig(n) {
    if (!n)
      throw new Error("Configuration is required");
    const l = ["publicKey", "email", "amount", "customerName", "customization"].filter((s) => !n[s]);
    if (l.length > 0)
      throw new Error(`Missing required fields: ${l.join(", ")}`);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email))
      throw new Error("Invalid email format");
    if (typeof n.amount != "number" || n.amount <= 0)
      throw new Error("Amount must be a positive number");
    return {
      publicKey: this.sanitize(n.publicKey),
      email: this.sanitize(n.email),
      amount: n.amount,
      currency: n.currency || "NGN",
      reference: n.reference || this.generateReference(),
      customerName: n.customerName ? this.sanitize(n.customerName) : "",
      redirectUrl: n.redirectUrl || "",
      customerPhone: n.customerPhone ? this.sanitize(n.customerPhone) : "",
      metadata: n.metadata || {},
      onSuccess: n.onSuccess || (() => {
      }),
      onError: n.onError || (() => {
      }),
      onClose: n.onClose || (() => {
      }),
      paymentMethods: n.paymentMethods || ["card", "bank_transfer", "ussd"],
      customization: n.customization || {}
    };
  }
  /**
   * Sanitize input to prevent XSS attacks
   */
  sanitize(n) {
    if (typeof n != "string") return n;
    const r = document.createElement("div");
    return r.textContent = n, r.innerHTML;
  }
  /**
   * Generate unique reference for transaction
   */
  generateReference() {
    const n = Date.now(), r = Math.random().toString(36).substring(2, 15);
    return `NOVAC_${n}_${r}`;
  }
  /**
   * Open the checkout modal
   */
  open() {
    window.location.protocol !== "https:" && window.location.hostname !== "localhost" && console.warn("Novac Inline: HTTPS is recommended for production environments"), this.modalRoot = document.createElement("div"), this.modalRoot.id = "novac-inline-modal", document.body.appendChild(this.modalRoot), this.root = ny(this.modalRoot), this.root.render(/* @__PURE__ */ T.jsx(J3, { loadDictionary: (n) => Y3(n, {
      en: () => import("./dictionary-tQJ04gWW.mjs"),
      es: () => import("./dictionary-Cz6v-tEt.mjs"),
      fr: () => import("./dictionary-DAQTNvdl.mjs"),
      de: () => import("./dictionary-C38WsPrF.mjs")
    }), children: /* @__PURE__ */ T.jsx(JC, { config: this.config, onClose: this.close.bind(this) }) })), document.body.style.overflow = "hidden";
  }
  /**
   * Close the checkout modal
   */
  close() {
    this.root && this.root.unmount(), this.modalRoot && this.modalRoot.parentNode && this.modalRoot.parentNode.removeChild(this.modalRoot), document.body.style.overflow = "", this.config && this.config.onClose && this.config.onClose();
  }
}
typeof module < "u" && module.exports && (module.exports = yy);
typeof window < "u" && (window.Novac = yy);
export {
  yy as default
};
