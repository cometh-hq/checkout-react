var Ht = { exports: {} }, Je = {}, Gt = { exports: {} }, C = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gr;
function Gr() {
  if (gr) return C;
  gr = 1;
  var i = Symbol.for("react.element"), t = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), E = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), A = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), x = Symbol.iterator;
  function z(a) {
    return a === null || typeof a != "object" ? null : (a = x && a[x] || a["@@iterator"], typeof a == "function" ? a : null);
  }
  var H = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, te = Object.assign, se = {};
  function re(a, c, P) {
    this.props = a, this.context = c, this.refs = se, this.updater = P || H;
  }
  re.prototype.isReactComponent = {}, re.prototype.setState = function(a, c) {
    if (typeof a != "object" && typeof a != "function" && a != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, c, "setState");
  }, re.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function ce() {
  }
  ce.prototype = re.prototype;
  function V(a, c, P) {
    this.props = a, this.context = c, this.refs = se, this.updater = P || H;
  }
  var Ee = V.prototype = new ce();
  Ee.constructor = V, te(Ee, re.prototype), Ee.isPureReactComponent = !0;
  var le = Array.isArray, K = Object.prototype.hasOwnProperty, oe = { current: null }, de = { key: !0, ref: !0, __self: !0, __source: !0 };
  function me(a, c, P) {
    var O, k = {}, U = null, F = null;
    if (c != null) for (O in c.ref !== void 0 && (F = c.ref), c.key !== void 0 && (U = "" + c.key), c) K.call(c, O) && !de.hasOwnProperty(O) && (k[O] = c[O]);
    var L = arguments.length - 2;
    if (L === 1) k.children = P;
    else if (1 < L) {
      for (var $ = Array(L), J = 0; J < L; J++) $[J] = arguments[J + 2];
      k.children = $;
    }
    if (a && a.defaultProps) for (O in L = a.defaultProps, L) k[O] === void 0 && (k[O] = L[O]);
    return { $$typeof: i, type: a, key: U, ref: F, props: k, _owner: oe.current };
  }
  function Pe(a, c) {
    return { $$typeof: i, type: a.type, key: c, ref: a.ref, props: a.props, _owner: a._owner };
  }
  function we(a) {
    return typeof a == "object" && a !== null && a.$$typeof === i;
  }
  function We(a) {
    var c = { "=": "=0", ":": "=2" };
    return "$" + a.replace(/[=:]/g, function(P) {
      return c[P];
    });
  }
  var Ae = /\/+/g;
  function ne(a, c) {
    return typeof a == "object" && a !== null && a.key != null ? We("" + a.key) : c.toString(36);
  }
  function ie(a, c, P, O, k) {
    var U = typeof a;
    (U === "undefined" || U === "boolean") && (a = null);
    var F = !1;
    if (a === null) F = !0;
    else switch (U) {
      case "string":
      case "number":
        F = !0;
        break;
      case "object":
        switch (a.$$typeof) {
          case i:
          case t:
            F = !0;
        }
    }
    if (F) return F = a, k = k(F), a = O === "" ? "." + ne(F, 0) : O, le(k) ? (P = "", a != null && (P = a.replace(Ae, "$&/") + "/"), ie(k, c, P, "", function(J) {
      return J;
    })) : k != null && (we(k) && (k = Pe(k, P + (!k.key || F && F.key === k.key ? "" : ("" + k.key).replace(Ae, "$&/") + "/") + a)), c.push(k)), 1;
    if (F = 0, O = O === "" ? "." : O + ":", le(a)) for (var L = 0; L < a.length; L++) {
      U = a[L];
      var $ = O + ne(U, L);
      F += ie(U, c, P, $, k);
    }
    else if ($ = z(a), typeof $ == "function") for (a = $.call(a), L = 0; !(U = a.next()).done; ) U = U.value, $ = O + ne(U, L++), F += ie(U, c, P, $, k);
    else if (U === "object") throw c = String(a), Error("Objects are not valid as a React child (found: " + (c === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : c) + "). If you meant to render a collection of children, use an array instead.");
    return F;
  }
  function Q(a, c, P) {
    if (a == null) return a;
    var O = [], k = 0;
    return ie(a, O, "", "", function(U) {
      return c.call(P, U, k++);
    }), O;
  }
  function fe(a) {
    if (a._status === -1) {
      var c = a._result;
      c = c(), c.then(function(P) {
        (a._status === 0 || a._status === -1) && (a._status = 1, a._result = P);
      }, function(P) {
        (a._status === 0 || a._status === -1) && (a._status = 2, a._result = P);
      }), a._status === -1 && (a._status = 0, a._result = c);
    }
    if (a._status === 1) return a._result.default;
    throw a._result;
  }
  var v = { current: null }, pe = { transition: null }, Oe = { ReactCurrentDispatcher: v, ReactCurrentBatchConfig: pe, ReactCurrentOwner: oe };
  function ve() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return C.Children = { map: Q, forEach: function(a, c, P) {
    Q(a, function() {
      c.apply(this, arguments);
    }, P);
  }, count: function(a) {
    var c = 0;
    return Q(a, function() {
      c++;
    }), c;
  }, toArray: function(a) {
    return Q(a, function(c) {
      return c;
    }) || [];
  }, only: function(a) {
    if (!we(a)) throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  } }, C.Component = re, C.Fragment = p, C.Profiler = y, C.PureComponent = V, C.StrictMode = h, C.Suspense = T, C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oe, C.act = ve, C.cloneElement = function(a, c, P) {
    if (a == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var O = te({}, a.props), k = a.key, U = a.ref, F = a._owner;
    if (c != null) {
      if (c.ref !== void 0 && (U = c.ref, F = oe.current), c.key !== void 0 && (k = "" + c.key), a.type && a.type.defaultProps) var L = a.type.defaultProps;
      for ($ in c) K.call(c, $) && !de.hasOwnProperty($) && (O[$] = c[$] === void 0 && L !== void 0 ? L[$] : c[$]);
    }
    var $ = arguments.length - 2;
    if ($ === 1) O.children = P;
    else if (1 < $) {
      L = Array($);
      for (var J = 0; J < $; J++) L[J] = arguments[J + 2];
      O.children = L;
    }
    return { $$typeof: i, type: a.type, key: k, ref: U, props: O, _owner: F };
  }, C.createContext = function(a) {
    return a = { $$typeof: E, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, a.Provider = { $$typeof: m, _context: a }, a.Consumer = a;
  }, C.createElement = me, C.createFactory = function(a) {
    var c = me.bind(null, a);
    return c.type = a, c;
  }, C.createRef = function() {
    return { current: null };
  }, C.forwardRef = function(a) {
    return { $$typeof: R, render: a };
  }, C.isValidElement = we, C.lazy = function(a) {
    return { $$typeof: I, _payload: { _status: -1, _result: a }, _init: fe };
  }, C.memo = function(a, c) {
    return { $$typeof: A, type: a, compare: c === void 0 ? null : c };
  }, C.startTransition = function(a) {
    var c = pe.transition;
    pe.transition = {};
    try {
      a();
    } finally {
      pe.transition = c;
    }
  }, C.unstable_act = ve, C.useCallback = function(a, c) {
    return v.current.useCallback(a, c);
  }, C.useContext = function(a) {
    return v.current.useContext(a);
  }, C.useDebugValue = function() {
  }, C.useDeferredValue = function(a) {
    return v.current.useDeferredValue(a);
  }, C.useEffect = function(a, c) {
    return v.current.useEffect(a, c);
  }, C.useId = function() {
    return v.current.useId();
  }, C.useImperativeHandle = function(a, c, P) {
    return v.current.useImperativeHandle(a, c, P);
  }, C.useInsertionEffect = function(a, c) {
    return v.current.useInsertionEffect(a, c);
  }, C.useLayoutEffect = function(a, c) {
    return v.current.useLayoutEffect(a, c);
  }, C.useMemo = function(a, c) {
    return v.current.useMemo(a, c);
  }, C.useReducer = function(a, c, P) {
    return v.current.useReducer(a, c, P);
  }, C.useRef = function(a) {
    return v.current.useRef(a);
  }, C.useState = function(a) {
    return v.current.useState(a);
  }, C.useSyncExternalStore = function(a, c, P) {
    return v.current.useSyncExternalStore(a, c, P);
  }, C.useTransition = function() {
    return v.current.useTransition();
  }, C.version = "18.3.1", C;
}
var Qe = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Qe.exports;
var Er;
function zr() {
  return Er || (Er = 1, function(i, t) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = "18.3.1", h = Symbol.for("react.element"), y = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), A = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), se = Symbol.for("react.offscreen"), re = Symbol.iterator, ce = "@@iterator";
      function V(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = re && e[re] || e[ce];
        return typeof r == "function" ? r : null;
      }
      var Ee = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, le = {
        transition: null
      }, K = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, oe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, de = {}, me = null;
      function Pe(e) {
        me = e;
      }
      de.setExtraStackFrame = function(e) {
        me = e;
      }, de.getCurrentStack = null, de.getStackAddendum = function() {
        var e = "";
        me && (e += me);
        var r = de.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var we = !1, We = !1, Ae = !1, ne = !1, ie = !1, Q = {
        ReactCurrentDispatcher: Ee,
        ReactCurrentBatchConfig: le,
        ReactCurrentOwner: oe
      };
      Q.ReactDebugCurrentFrame = de, Q.ReactCurrentActQueue = K;
      function fe(e) {
        {
          for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            s[o - 1] = arguments[o];
          pe("warn", e, s);
        }
      }
      function v(e) {
        {
          for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            s[o - 1] = arguments[o];
          pe("error", e, s);
        }
      }
      function pe(e, r, s) {
        {
          var o = Q.ReactDebugCurrentFrame, f = o.getStackAddendum();
          f !== "" && (r += "%s", s = s.concat([f]));
          var b = s.map(function(d) {
            return String(d);
          });
          b.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, b);
        }
      }
      var Oe = {};
      function ve(e, r) {
        {
          var s = e.constructor, o = s && (s.displayName || s.name) || "ReactClass", f = o + "." + r;
          if (Oe[f])
            return;
          v("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Oe[f] = !0;
        }
      }
      var a = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, s) {
          ve(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, s, o) {
          ve(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, s, o) {
          ve(e, "setState");
        }
      }, c = Object.assign, P = {};
      Object.freeze(P);
      function O(e, r, s) {
        this.props = e, this.context = r, this.refs = P, this.updater = s || a;
      }
      O.prototype.isReactComponent = {}, O.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, O.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var k = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, U = function(e, r) {
          Object.defineProperty(O.prototype, e, {
            get: function() {
              fe("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var F in k)
          k.hasOwnProperty(F) && U(F, k[F]);
      }
      function L() {
      }
      L.prototype = O.prototype;
      function $(e, r, s) {
        this.props = e, this.context = r, this.refs = P, this.updater = s || a;
      }
      var J = $.prototype = new L();
      J.constructor = $, c(J, O.prototype), J.isPureReactComponent = !0;
      function _t() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var et = Array.isArray;
      function Le(e) {
        return et(e);
      }
      function Tt(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, s = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return s;
        }
      }
      function Fe(e) {
        try {
          return Re(e), !1;
        } catch {
          return !0;
        }
      }
      function Re(e) {
        return "" + e;
      }
      function Ie(e) {
        if (Fe(e))
          return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Tt(e)), Re(e);
      }
      function tt(e, r, s) {
        var o = e.displayName;
        if (o)
          return o;
        var f = r.displayName || r.name || "";
        return f !== "" ? s + "(" + f + ")" : s;
      }
      function je(e) {
        return e.displayName || "Context";
      }
      function he(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case m:
            return "Fragment";
          case y:
            return "Portal";
          case R:
            return "Profiler";
          case E:
            return "StrictMode";
          case x:
            return "Suspense";
          case z:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case A:
              var r = e;
              return je(r) + ".Consumer";
            case T:
              var s = e;
              return je(s._context) + ".Provider";
            case I:
              return tt(e, e.render, "ForwardRef");
            case H:
              var o = e.displayName || null;
              return o !== null ? o : he(e.type) || "Memo";
            case te: {
              var f = e, b = f._payload, d = f._init;
              try {
                return he(d(b));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var ke = Object.prototype.hasOwnProperty, Ne = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, rt, nt, Ue;
      Ue = {};
      function Ye(e) {
        if (ke.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function _e(e) {
        if (ke.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function St(e, r) {
        var s = function() {
          rt || (rt = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: s,
          configurable: !0
        });
      }
      function at(e, r) {
        var s = function() {
          nt || (nt = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
      function st(e) {
        if (typeof e.ref == "string" && oe.current && e.__self && oe.current.stateNode !== e.__self) {
          var r = he(oe.current.type);
          Ue[r] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Ue[r] = !0);
        }
      }
      var De = function(e, r, s, o, f, b, d) {
        var _ = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: h,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: s,
          props: d,
          // Record the component responsible for creating this element.
          _owner: b
        };
        return _._store = {}, Object.defineProperty(_._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(_, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(_, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: f
        }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
      };
      function Ct(e, r, s) {
        var o, f = {}, b = null, d = null, _ = null, j = null;
        if (r != null) {
          Ye(r) && (d = r.ref, st(r)), _e(r) && (Ie(r.key), b = "" + r.key), _ = r.__self === void 0 ? null : r.__self, j = r.__source === void 0 ? null : r.__source;
          for (o in r)
            ke.call(r, o) && !Ne.hasOwnProperty(o) && (f[o] = r[o]);
        }
        var N = arguments.length - 2;
        if (N === 1)
          f.children = s;
        else if (N > 1) {
          for (var M = Array(N), B = 0; B < N; B++)
            M[B] = arguments[B + 2];
          Object.freeze && Object.freeze(M), f.children = M;
        }
        if (e && e.defaultProps) {
          var Y = e.defaultProps;
          for (o in Y)
            f[o] === void 0 && (f[o] = Y[o]);
        }
        if (b || d) {
          var X = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          b && St(f, X), d && at(f, X);
        }
        return De(e, b, d, _, j, oe.current, f);
      }
      function Pt(e, r) {
        var s = De(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return s;
      }
      function wt(e, r, s) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, f = c({}, e.props), b = e.key, d = e.ref, _ = e._self, j = e._source, N = e._owner;
        if (r != null) {
          Ye(r) && (d = r.ref, N = oe.current), _e(r) && (Ie(r.key), b = "" + r.key);
          var M;
          e.type && e.type.defaultProps && (M = e.type.defaultProps);
          for (o in r)
            ke.call(r, o) && !Ne.hasOwnProperty(o) && (r[o] === void 0 && M !== void 0 ? f[o] = M[o] : f[o] = r[o]);
        }
        var B = arguments.length - 2;
        if (B === 1)
          f.children = s;
        else if (B > 1) {
          for (var Y = Array(B), X = 0; X < B; X++)
            Y[X] = arguments[X + 2];
          f.children = Y;
        }
        return De(e.type, b, d, _, j, N, f);
      }
      function Te(e) {
        return typeof e == "object" && e !== null && e.$$typeof === h;
      }
      var ot = ".", At = ":";
      function Ot(e) {
        var r = /[=:]/g, s = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(f) {
          return s[f];
        });
        return "$" + o;
      }
      var Me = !1, it = /\/+/g;
      function be(e) {
        return e.replace(it, "$&/");
      }
      function xe(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (Ie(e.key), Ot("" + e.key)) : r.toString(36);
      }
      function Se(e, r, s, o, f) {
        var b = typeof e;
        (b === "undefined" || b === "boolean") && (e = null);
        var d = !1;
        if (e === null)
          d = !0;
        else
          switch (b) {
            case "string":
            case "number":
              d = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case h:
                case y:
                  d = !0;
              }
          }
        if (d) {
          var _ = e, j = f(_), N = o === "" ? ot + xe(_, 0) : o;
          if (Le(j)) {
            var M = "";
            N != null && (M = be(N) + "/"), Se(j, r, M, "", function(Hr) {
              return Hr;
            });
          } else j != null && (Te(j) && (j.key && (!_ || _.key !== j.key) && Ie(j.key), j = Pt(
            j,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            s + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (j.key && (!_ || _.key !== j.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              be("" + j.key) + "/"
            ) : "") + N
          )), r.push(j));
          return 1;
        }
        var B, Y, X = 0, ee = o === "" ? ot : o + At;
        if (Le(e))
          for (var gt = 0; gt < e.length; gt++)
            B = e[gt], Y = ee + xe(B, gt), X += Se(B, r, s, Y, f);
        else {
          var Wt = V(e);
          if (typeof Wt == "function") {
            var mr = e;
            Wt === mr.entries && (Me || fe("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Me = !0);
            for (var Wr = Wt.call(mr), vr, Yr = 0; !(vr = Wr.next()).done; )
              B = vr.value, Y = ee + xe(B, Yr++), X += Se(B, r, s, Y, f);
          } else if (b === "object") {
            var br = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (br === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : br) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return X;
      }
      function $e(e, r, s) {
        if (e == null)
          return e;
        var o = [], f = 0;
        return Se(e, o, "", "", function(b) {
          return r.call(s, b, f++);
        }), o;
      }
      function It(e) {
        var r = 0;
        return $e(e, function() {
          r++;
        }), r;
      }
      function ut(e, r, s) {
        $e(e, function() {
          r.apply(this, arguments);
        }, s);
      }
      function jt(e) {
        return $e(e, function(r) {
          return r;
        }) || [];
      }
      function ct(e) {
        if (!Te(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function lt(e) {
        var r = {
          $$typeof: A,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: T,
          _context: r
        };
        var s = !1, o = !1, f = !1;
        {
          var b = {
            $$typeof: A,
            _context: r
          };
          Object.defineProperties(b, {
            Provider: {
              get: function() {
                return o || (o = !0, v("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(d) {
                r.Provider = d;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(d) {
                r._currentValue = d;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(d) {
                r._currentValue2 = d;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(d) {
                r._threadCount = d;
              }
            },
            Consumer: {
              get: function() {
                return s || (s = !0, v("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(d) {
                f || (fe("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", d), f = !0);
              }
            }
          }), r.Consumer = b;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var qe = -1, He = 0, Ge = 1, ft = 2;
      function kt(e) {
        if (e._status === qe) {
          var r = e._result, s = r();
          if (s.then(function(b) {
            if (e._status === He || e._status === qe) {
              var d = e;
              d._status = Ge, d._result = b;
            }
          }, function(b) {
            if (e._status === He || e._status === qe) {
              var d = e;
              d._status = ft, d._result = b;
            }
          }), e._status === qe) {
            var o = e;
            o._status = He, o._result = s;
          }
        }
        if (e._status === Ge) {
          var f = e._result;
          return f === void 0 && v(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, f), "default" in f || v(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, f), f.default;
        } else
          throw e._result;
      }
      function Dt(e) {
        var r = {
          // We use these fields to store the result.
          _status: qe,
          _result: e
        }, s = {
          $$typeof: te,
          _payload: r,
          _init: kt
        };
        {
          var o, f;
          Object.defineProperties(s, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(b) {
                v("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = b, Object.defineProperty(s, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return f;
              },
              set: function(b) {
                v("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), f = b, Object.defineProperty(s, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return s;
      }
      function xt(e) {
        e != null && e.$$typeof === H ? v("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? v("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && v("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && v("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: I,
          render: e
        };
        {
          var s;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return s;
            },
            set: function(o) {
              s = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var dt;
      dt = Symbol.for("react.module.reference");
      function n(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === m || e === R || ie || e === E || e === x || e === z || ne || e === se || we || We || Ae || typeof e == "object" && e !== null && (e.$$typeof === te || e.$$typeof === H || e.$$typeof === T || e.$$typeof === A || e.$$typeof === I || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === dt || e.getModuleId !== void 0));
      }
      function u(e, r) {
        n(e) || v("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var s = {
          $$typeof: H,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(s, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(f) {
              o = f, !e.name && !e.displayName && (e.displayName = f);
            }
          });
        }
        return s;
      }
      function l() {
        var e = Ee.current;
        return e === null && v(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function g(e) {
        var r = l();
        if (e._context !== void 0) {
          var s = e._context;
          s.Consumer === e ? v("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : s.Provider === e && v("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function D(e) {
        var r = l();
        return r.useState(e);
      }
      function q(e, r, s) {
        var o = l();
        return o.useReducer(e, r, s);
      }
      function w(e) {
        var r = l();
        return r.useRef(e);
      }
      function S(e, r) {
        var s = l();
        return s.useEffect(e, r);
      }
      function Z(e, r) {
        var s = l();
        return s.useInsertionEffect(e, r);
      }
      function W(e, r) {
        var s = l();
        return s.useLayoutEffect(e, r);
      }
      function G(e, r) {
        var s = l();
        return s.useCallback(e, r);
      }
      function ue(e, r) {
        var s = l();
        return s.useMemo(e, r);
      }
      function Ce(e, r, s) {
        var o = l();
        return o.useImperativeHandle(e, r, s);
      }
      function ge(e, r) {
        {
          var s = l();
          return s.useDebugValue(e, r);
        }
      }
      function ae() {
        var e = l();
        return e.useTransition();
      }
      function ze(e) {
        var r = l();
        return r.useDeferredValue(e);
      }
      function $t() {
        var e = l();
        return e.useId();
      }
      function qt(e, r, s) {
        var o = l();
        return o.useSyncExternalStore(e, r, s);
      }
      var Ke = 0, Kt, Jt, Xt, Qt, Zt, er, tr;
      function rr() {
      }
      rr.__reactDisabledLog = !0;
      function Pr() {
        {
          if (Ke === 0) {
            Kt = console.log, Jt = console.info, Xt = console.warn, Qt = console.error, Zt = console.group, er = console.groupCollapsed, tr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: rr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          Ke++;
        }
      }
      function wr() {
        {
          if (Ke--, Ke === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: c({}, e, {
                value: Kt
              }),
              info: c({}, e, {
                value: Jt
              }),
              warn: c({}, e, {
                value: Xt
              }),
              error: c({}, e, {
                value: Qt
              }),
              group: c({}, e, {
                value: Zt
              }),
              groupCollapsed: c({}, e, {
                value: er
              }),
              groupEnd: c({}, e, {
                value: tr
              })
            });
          }
          Ke < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Lt = Q.ReactCurrentDispatcher, Ft;
      function pt(e, r, s) {
        {
          if (Ft === void 0)
            try {
              throw Error();
            } catch (f) {
              var o = f.stack.trim().match(/\n( *(at )?)/);
              Ft = o && o[1] || "";
            }
          return `
` + Ft + e;
        }
      }
      var Nt = !1, ht;
      {
        var Ar = typeof WeakMap == "function" ? WeakMap : Map;
        ht = new Ar();
      }
      function nr(e, r) {
        if (!e || Nt)
          return "";
        {
          var s = ht.get(e);
          if (s !== void 0)
            return s;
        }
        var o;
        Nt = !0;
        var f = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var b;
        b = Lt.current, Lt.current = null, Pr();
        try {
          if (r) {
            var d = function() {
              throw Error();
            };
            if (Object.defineProperty(d.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(d, []);
              } catch (ee) {
                o = ee;
              }
              Reflect.construct(e, [], d);
            } else {
              try {
                d.call();
              } catch (ee) {
                o = ee;
              }
              e.call(d.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (ee) {
              o = ee;
            }
            e();
          }
        } catch (ee) {
          if (ee && o && typeof ee.stack == "string") {
            for (var _ = ee.stack.split(`
`), j = o.stack.split(`
`), N = _.length - 1, M = j.length - 1; N >= 1 && M >= 0 && _[N] !== j[M]; )
              M--;
            for (; N >= 1 && M >= 0; N--, M--)
              if (_[N] !== j[M]) {
                if (N !== 1 || M !== 1)
                  do
                    if (N--, M--, M < 0 || _[N] !== j[M]) {
                      var B = `
` + _[N].replace(" at new ", " at ");
                      return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)), typeof e == "function" && ht.set(e, B), B;
                    }
                  while (N >= 1 && M >= 0);
                break;
              }
          }
        } finally {
          Nt = !1, Lt.current = b, wr(), Error.prepareStackTrace = f;
        }
        var Y = e ? e.displayName || e.name : "", X = Y ? pt(Y) : "";
        return typeof e == "function" && ht.set(e, X), X;
      }
      function Or(e, r, s) {
        return nr(e, !1);
      }
      function Ir(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function yt(e, r, s) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return nr(e, Ir(e));
        if (typeof e == "string")
          return pt(e);
        switch (e) {
          case x:
            return pt("Suspense");
          case z:
            return pt("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case I:
              return Or(e.render);
            case H:
              return yt(e.type, r, s);
            case te: {
              var o = e, f = o._payload, b = o._init;
              try {
                return yt(b(f), r, s);
              } catch {
              }
            }
          }
        return "";
      }
      var ar = {}, sr = Q.ReactDebugCurrentFrame;
      function mt(e) {
        if (e) {
          var r = e._owner, s = yt(e.type, e._source, r ? r.type : null);
          sr.setExtraStackFrame(s);
        } else
          sr.setExtraStackFrame(null);
      }
      function jr(e, r, s, o, f) {
        {
          var b = Function.call.bind(ke);
          for (var d in e)
            if (b(e, d)) {
              var _ = void 0;
              try {
                if (typeof e[d] != "function") {
                  var j = Error((o || "React class") + ": " + s + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw j.name = "Invariant Violation", j;
                }
                _ = e[d](r, d, o, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (N) {
                _ = N;
              }
              _ && !(_ instanceof Error) && (mt(f), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", s, d, typeof _), mt(null)), _ instanceof Error && !(_.message in ar) && (ar[_.message] = !0, mt(f), v("Failed %s type: %s", s, _.message), mt(null));
            }
        }
      }
      function Be(e) {
        if (e) {
          var r = e._owner, s = yt(e.type, e._source, r ? r.type : null);
          Pe(s);
        } else
          Pe(null);
      }
      var Ut;
      Ut = !1;
      function or() {
        if (oe.current) {
          var e = he(oe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function kr(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), s = e.lineNumber;
          return `

Check your code at ` + r + ":" + s + ".";
        }
        return "";
      }
      function Dr(e) {
        return e != null ? kr(e.__source) : "";
      }
      var ir = {};
      function xr(e) {
        var r = or();
        if (!r) {
          var s = typeof e == "string" ? e : e.displayName || e.name;
          s && (r = `

Check the top-level render call using <` + s + ">.");
        }
        return r;
      }
      function ur(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var s = xr(r);
          if (!ir[s]) {
            ir[s] = !0;
            var o = "";
            e && e._owner && e._owner !== oe.current && (o = " It was passed a child from " + he(e._owner.type) + "."), Be(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, o), Be(null);
          }
        }
      }
      function cr(e, r) {
        if (typeof e == "object") {
          if (Le(e))
            for (var s = 0; s < e.length; s++) {
              var o = e[s];
              Te(o) && ur(o, r);
            }
          else if (Te(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var f = V(e);
            if (typeof f == "function" && f !== e.entries)
              for (var b = f.call(e), d; !(d = b.next()).done; )
                Te(d.value) && ur(d.value, r);
          }
        }
      }
      function lr(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var s;
          if (typeof r == "function")
            s = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === I || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === H))
            s = r.propTypes;
          else
            return;
          if (s) {
            var o = he(r);
            jr(s, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Ut) {
            Ut = !0;
            var f = he(r);
            v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function $r(e) {
        {
          for (var r = Object.keys(e.props), s = 0; s < r.length; s++) {
            var o = r[s];
            if (o !== "children" && o !== "key") {
              Be(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Be(null);
              break;
            }
          }
          e.ref !== null && (Be(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), Be(null));
        }
      }
      function fr(e, r, s) {
        var o = n(e);
        if (!o) {
          var f = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = Dr(r);
          b ? f += b : f += or();
          var d;
          e === null ? d = "null" : Le(e) ? d = "array" : e !== void 0 && e.$$typeof === h ? (d = "<" + (he(e.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, v("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, f);
        }
        var _ = Ct.apply(this, arguments);
        if (_ == null)
          return _;
        if (o)
          for (var j = 2; j < arguments.length; j++)
            cr(arguments[j], e);
        return e === m ? $r(_) : lr(_), _;
      }
      var dr = !1;
      function qr(e) {
        var r = fr.bind(null, e);
        return r.type = e, dr || (dr = !0, fe("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return fe("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function Lr(e, r, s) {
        for (var o = wt.apply(this, arguments), f = 2; f < arguments.length; f++)
          cr(arguments[f], o.type);
        return lr(o), o;
      }
      function Fr(e, r) {
        var s = le.transition;
        le.transition = {};
        var o = le.transition;
        le.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (le.transition = s, s === null && o._updatedFibers) {
            var f = o._updatedFibers.size;
            f > 10 && fe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var pr = !1, vt = null;
      function Nr(e) {
        if (vt === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), s = i && i[r];
            vt = s.call(i, "timers").setImmediate;
          } catch {
            vt = function(f) {
              pr === !1 && (pr = !0, typeof MessageChannel > "u" && v("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var b = new MessageChannel();
              b.port1.onmessage = f, b.port2.postMessage(void 0);
            };
          }
        return vt(e);
      }
      var Ve = 0, hr = !1;
      function yr(e) {
        {
          var r = Ve;
          Ve++, K.current === null && (K.current = []);
          var s = K.isBatchingLegacy, o;
          try {
            if (K.isBatchingLegacy = !0, o = e(), !s && K.didScheduleLegacyUpdate) {
              var f = K.current;
              f !== null && (K.didScheduleLegacyUpdate = !1, Vt(f));
            }
          } catch (Y) {
            throw bt(r), Y;
          } finally {
            K.isBatchingLegacy = s;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var b = o, d = !1, _ = {
              then: function(Y, X) {
                d = !0, b.then(function(ee) {
                  bt(r), Ve === 0 ? Mt(ee, Y, X) : Y(ee);
                }, function(ee) {
                  bt(r), X(ee);
                });
              }
            };
            return !hr && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              d || (hr = !0, v("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), _;
          } else {
            var j = o;
            if (bt(r), Ve === 0) {
              var N = K.current;
              N !== null && (Vt(N), K.current = null);
              var M = {
                then: function(Y, X) {
                  K.current === null ? (K.current = [], Mt(j, Y, X)) : Y(j);
                }
              };
              return M;
            } else {
              var B = {
                then: function(Y, X) {
                  Y(j);
                }
              };
              return B;
            }
          }
        }
      }
      function bt(e) {
        e !== Ve - 1 && v("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ve = e;
      }
      function Mt(e, r, s) {
        {
          var o = K.current;
          if (o !== null)
            try {
              Vt(o), Nr(function() {
                o.length === 0 ? (K.current = null, r(e)) : Mt(e, r, s);
              });
            } catch (f) {
              s(f);
            }
          else
            r(e);
        }
      }
      var Bt = !1;
      function Vt(e) {
        if (!Bt) {
          Bt = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var s = e[r];
              do
                s = s(!0);
              while (s !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            Bt = !1;
          }
        }
      }
      var Ur = fr, Mr = Lr, Br = qr, Vr = {
        map: $e,
        forEach: ut,
        count: It,
        toArray: jt,
        only: ct
      };
      t.Children = Vr, t.Component = O, t.Fragment = m, t.Profiler = R, t.PureComponent = $, t.StrictMode = E, t.Suspense = x, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q, t.act = yr, t.cloneElement = Mr, t.createContext = lt, t.createElement = Ur, t.createFactory = Br, t.createRef = _t, t.forwardRef = xt, t.isValidElement = Te, t.lazy = Dt, t.memo = u, t.startTransition = Fr, t.unstable_act = yr, t.useCallback = G, t.useContext = g, t.useDebugValue = ge, t.useDeferredValue = ze, t.useEffect = S, t.useId = $t, t.useImperativeHandle = Ce, t.useInsertionEffect = Z, t.useLayoutEffect = W, t.useMemo = ue, t.useReducer = q, t.useRef = w, t.useState = D, t.useSyncExternalStore = qt, t.useTransition = ae, t.version = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Qe, Qe.exports)), Qe.exports;
}
process.env.NODE_ENV === "production" ? Gt.exports = Gr() : Gt.exports = zr();
var ye = Gt.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rr;
function Kr() {
  if (Rr) return Je;
  Rr = 1;
  var i = ye, t = Symbol.for("react.element"), p = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, y = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(R, T, A) {
    var I, x = {}, z = null, H = null;
    A !== void 0 && (z = "" + A), T.key !== void 0 && (z = "" + T.key), T.ref !== void 0 && (H = T.ref);
    for (I in T) h.call(T, I) && !m.hasOwnProperty(I) && (x[I] = T[I]);
    if (R && R.defaultProps) for (I in T = R.defaultProps, T) x[I] === void 0 && (x[I] = T[I]);
    return { $$typeof: t, type: R, key: z, ref: H, props: x, _owner: y.current };
  }
  return Je.Fragment = p, Je.jsx = E, Je.jsxs = E, Je;
}
var Xe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _r;
function Jr() {
  return _r || (_r = 1, process.env.NODE_ENV !== "production" && function() {
    var i = ye, t = Symbol.for("react.element"), p = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), R = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), H = Symbol.for("react.offscreen"), te = Symbol.iterator, se = "@@iterator";
    function re(n) {
      if (n === null || typeof n != "object")
        return null;
      var u = te && n[te] || n[se];
      return typeof u == "function" ? u : null;
    }
    var ce = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function V(n) {
      {
        for (var u = arguments.length, l = new Array(u > 1 ? u - 1 : 0), g = 1; g < u; g++)
          l[g - 1] = arguments[g];
        Ee("error", n, l);
      }
    }
    function Ee(n, u, l) {
      {
        var g = ce.ReactDebugCurrentFrame, D = g.getStackAddendum();
        D !== "" && (u += "%s", l = l.concat([D]));
        var q = l.map(function(w) {
          return String(w);
        });
        q.unshift("Warning: " + u), Function.prototype.apply.call(console[n], console, q);
      }
    }
    var le = !1, K = !1, oe = !1, de = !1, me = !1, Pe;
    Pe = Symbol.for("react.module.reference");
    function we(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === h || n === m || me || n === y || n === A || n === I || de || n === H || le || K || oe || typeof n == "object" && n !== null && (n.$$typeof === z || n.$$typeof === x || n.$$typeof === E || n.$$typeof === R || n.$$typeof === T || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === Pe || n.getModuleId !== void 0));
    }
    function We(n, u, l) {
      var g = n.displayName;
      if (g)
        return g;
      var D = u.displayName || u.name || "";
      return D !== "" ? l + "(" + D + ")" : l;
    }
    function Ae(n) {
      return n.displayName || "Context";
    }
    function ne(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && V("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case h:
          return "Fragment";
        case p:
          return "Portal";
        case m:
          return "Profiler";
        case y:
          return "StrictMode";
        case A:
          return "Suspense";
        case I:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case R:
            var u = n;
            return Ae(u) + ".Consumer";
          case E:
            var l = n;
            return Ae(l._context) + ".Provider";
          case T:
            return We(n, n.render, "ForwardRef");
          case x:
            var g = n.displayName || null;
            return g !== null ? g : ne(n.type) || "Memo";
          case z: {
            var D = n, q = D._payload, w = D._init;
            try {
              return ne(w(q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ie = Object.assign, Q = 0, fe, v, pe, Oe, ve, a, c;
    function P() {
    }
    P.__reactDisabledLog = !0;
    function O() {
      {
        if (Q === 0) {
          fe = console.log, v = console.info, pe = console.warn, Oe = console.error, ve = console.group, a = console.groupCollapsed, c = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: P,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        Q++;
      }
    }
    function k() {
      {
        if (Q--, Q === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ie({}, n, {
              value: fe
            }),
            info: ie({}, n, {
              value: v
            }),
            warn: ie({}, n, {
              value: pe
            }),
            error: ie({}, n, {
              value: Oe
            }),
            group: ie({}, n, {
              value: ve
            }),
            groupCollapsed: ie({}, n, {
              value: a
            }),
            groupEnd: ie({}, n, {
              value: c
            })
          });
        }
        Q < 0 && V("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = ce.ReactCurrentDispatcher, F;
    function L(n, u, l) {
      {
        if (F === void 0)
          try {
            throw Error();
          } catch (D) {
            var g = D.stack.trim().match(/\n( *(at )?)/);
            F = g && g[1] || "";
          }
        return `
` + F + n;
      }
    }
    var $ = !1, J;
    {
      var _t = typeof WeakMap == "function" ? WeakMap : Map;
      J = new _t();
    }
    function et(n, u) {
      if (!n || $)
        return "";
      {
        var l = J.get(n);
        if (l !== void 0)
          return l;
      }
      var g;
      $ = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var q;
      q = U.current, U.current = null, O();
      try {
        if (u) {
          var w = function() {
            throw Error();
          };
          if (Object.defineProperty(w.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(w, []);
            } catch (ae) {
              g = ae;
            }
            Reflect.construct(n, [], w);
          } else {
            try {
              w.call();
            } catch (ae) {
              g = ae;
            }
            n.call(w.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ae) {
            g = ae;
          }
          n();
        }
      } catch (ae) {
        if (ae && g && typeof ae.stack == "string") {
          for (var S = ae.stack.split(`
`), Z = g.stack.split(`
`), W = S.length - 1, G = Z.length - 1; W >= 1 && G >= 0 && S[W] !== Z[G]; )
            G--;
          for (; W >= 1 && G >= 0; W--, G--)
            if (S[W] !== Z[G]) {
              if (W !== 1 || G !== 1)
                do
                  if (W--, G--, G < 0 || S[W] !== Z[G]) {
                    var ue = `
` + S[W].replace(" at new ", " at ");
                    return n.displayName && ue.includes("<anonymous>") && (ue = ue.replace("<anonymous>", n.displayName)), typeof n == "function" && J.set(n, ue), ue;
                  }
                while (W >= 1 && G >= 0);
              break;
            }
        }
      } finally {
        $ = !1, U.current = q, k(), Error.prepareStackTrace = D;
      }
      var Ce = n ? n.displayName || n.name : "", ge = Ce ? L(Ce) : "";
      return typeof n == "function" && J.set(n, ge), ge;
    }
    function Le(n, u, l) {
      return et(n, !1);
    }
    function Tt(n) {
      var u = n.prototype;
      return !!(u && u.isReactComponent);
    }
    function Fe(n, u, l) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return et(n, Tt(n));
      if (typeof n == "string")
        return L(n);
      switch (n) {
        case A:
          return L("Suspense");
        case I:
          return L("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case T:
            return Le(n.render);
          case x:
            return Fe(n.type, u, l);
          case z: {
            var g = n, D = g._payload, q = g._init;
            try {
              return Fe(q(D), u, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Re = Object.prototype.hasOwnProperty, Ie = {}, tt = ce.ReactDebugCurrentFrame;
    function je(n) {
      if (n) {
        var u = n._owner, l = Fe(n.type, n._source, u ? u.type : null);
        tt.setExtraStackFrame(l);
      } else
        tt.setExtraStackFrame(null);
    }
    function he(n, u, l, g, D) {
      {
        var q = Function.call.bind(Re);
        for (var w in n)
          if (q(n, w)) {
            var S = void 0;
            try {
              if (typeof n[w] != "function") {
                var Z = Error((g || "React class") + ": " + l + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Z.name = "Invariant Violation", Z;
              }
              S = n[w](u, w, g, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              S = W;
            }
            S && !(S instanceof Error) && (je(D), V("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", l, w, typeof S), je(null)), S instanceof Error && !(S.message in Ie) && (Ie[S.message] = !0, je(D), V("Failed %s type: %s", l, S.message), je(null));
          }
      }
    }
    var ke = Array.isArray;
    function Ne(n) {
      return ke(n);
    }
    function rt(n) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, l = u && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return l;
      }
    }
    function nt(n) {
      try {
        return Ue(n), !1;
      } catch {
        return !0;
      }
    }
    function Ue(n) {
      return "" + n;
    }
    function Ye(n) {
      if (nt(n))
        return V("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rt(n)), Ue(n);
    }
    var _e = ce.ReactCurrentOwner, St = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, at, st, De;
    De = {};
    function Ct(n) {
      if (Re.call(n, "ref")) {
        var u = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function Pt(n) {
      if (Re.call(n, "key")) {
        var u = Object.getOwnPropertyDescriptor(n, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function wt(n, u) {
      if (typeof n.ref == "string" && _e.current && u && _e.current.stateNode !== u) {
        var l = ne(_e.current.type);
        De[l] || (V('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ne(_e.current.type), n.ref), De[l] = !0);
      }
    }
    function Te(n, u) {
      {
        var l = function() {
          at || (at = !0, V("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        l.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function ot(n, u) {
      {
        var l = function() {
          st || (st = !0, V("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        l.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var At = function(n, u, l, g, D, q, w) {
      var S = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: u,
        ref: l,
        props: w,
        // Record the component responsible for creating this element.
        _owner: q
      };
      return S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(S, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.defineProperty(S, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    };
    function Ot(n, u, l, g, D) {
      {
        var q, w = {}, S = null, Z = null;
        l !== void 0 && (Ye(l), S = "" + l), Pt(u) && (Ye(u.key), S = "" + u.key), Ct(u) && (Z = u.ref, wt(u, D));
        for (q in u)
          Re.call(u, q) && !St.hasOwnProperty(q) && (w[q] = u[q]);
        if (n && n.defaultProps) {
          var W = n.defaultProps;
          for (q in W)
            w[q] === void 0 && (w[q] = W[q]);
        }
        if (S || Z) {
          var G = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          S && Te(w, G), Z && ot(w, G);
        }
        return At(n, S, Z, D, g, _e.current, w);
      }
    }
    var Me = ce.ReactCurrentOwner, it = ce.ReactDebugCurrentFrame;
    function be(n) {
      if (n) {
        var u = n._owner, l = Fe(n.type, n._source, u ? u.type : null);
        it.setExtraStackFrame(l);
      } else
        it.setExtraStackFrame(null);
    }
    var xe;
    xe = !1;
    function Se(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function $e() {
      {
        if (Me.current) {
          var n = ne(Me.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function It(n) {
      return "";
    }
    var ut = {};
    function jt(n) {
      {
        var u = $e();
        if (!u) {
          var l = typeof n == "string" ? n : n.displayName || n.name;
          l && (u = `

Check the top-level render call using <` + l + ">.");
        }
        return u;
      }
    }
    function ct(n, u) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var l = jt(u);
        if (ut[l])
          return;
        ut[l] = !0;
        var g = "";
        n && n._owner && n._owner !== Me.current && (g = " It was passed a child from " + ne(n._owner.type) + "."), be(n), V('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, g), be(null);
      }
    }
    function lt(n, u) {
      {
        if (typeof n != "object")
          return;
        if (Ne(n))
          for (var l = 0; l < n.length; l++) {
            var g = n[l];
            Se(g) && ct(g, u);
          }
        else if (Se(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var D = re(n);
          if (typeof D == "function" && D !== n.entries)
            for (var q = D.call(n), w; !(w = q.next()).done; )
              Se(w.value) && ct(w.value, u);
        }
      }
    }
    function qe(n) {
      {
        var u = n.type;
        if (u == null || typeof u == "string")
          return;
        var l;
        if (typeof u == "function")
          l = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === T || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === x))
          l = u.propTypes;
        else
          return;
        if (l) {
          var g = ne(u);
          he(l, n.props, "prop", g, n);
        } else if (u.PropTypes !== void 0 && !xe) {
          xe = !0;
          var D = ne(u);
          V("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && V("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function He(n) {
      {
        for (var u = Object.keys(n.props), l = 0; l < u.length; l++) {
          var g = u[l];
          if (g !== "children" && g !== "key") {
            be(n), V("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), be(null);
            break;
          }
        }
        n.ref !== null && (be(n), V("Invalid attribute `ref` supplied to `React.Fragment`."), be(null));
      }
    }
    var Ge = {};
    function ft(n, u, l, g, D, q) {
      {
        var w = we(n);
        if (!w) {
          var S = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Z = It();
          Z ? S += Z : S += $e();
          var W;
          n === null ? W = "null" : Ne(n) ? W = "array" : n !== void 0 && n.$$typeof === t ? (W = "<" + (ne(n.type) || "Unknown") + " />", S = " Did you accidentally export a JSX literal instead of a component?") : W = typeof n, V("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, S);
        }
        var G = Ot(n, u, l, D, q);
        if (G == null)
          return G;
        if (w) {
          var ue = u.children;
          if (ue !== void 0)
            if (g)
              if (Ne(ue)) {
                for (var Ce = 0; Ce < ue.length; Ce++)
                  lt(ue[Ce], n);
                Object.freeze && Object.freeze(ue);
              } else
                V("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              lt(ue, n);
        }
        if (Re.call(u, "key")) {
          var ge = ne(n), ae = Object.keys(u).filter(function(qt) {
            return qt !== "key";
          }), ze = ae.length > 0 ? "{key: someKey, " + ae.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ge[ge + ze]) {
            var $t = ae.length > 0 ? "{" + ae.join(": ..., ") + ": ...}" : "{}";
            V(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ze, ge, $t, ge), Ge[ge + ze] = !0;
          }
        }
        return n === h ? He(G) : qe(G), G;
      }
    }
    function kt(n, u, l) {
      return ft(n, u, l, !0);
    }
    function Dt(n, u, l) {
      return ft(n, u, l, !1);
    }
    var xt = Dt, dt = kt;
    Xe.Fragment = h, Xe.jsx = xt, Xe.jsxs = dt;
  }()), Xe;
}
process.env.NODE_ENV === "production" ? Ht.exports = Kr() : Ht.exports = Jr();
var Xr = Ht.exports;
class Rt {
  constructor() {
    this._fns = [];
  }
  eject(t) {
    const p = this._fns.indexOf(t);
    p !== -1 && (this._fns = [...this._fns.slice(0, p), ...this._fns.slice(p + 1)]);
  }
  use(t) {
    this._fns = [...this._fns, t];
  }
}
const An = {
  BASE: "https://checkout.cometh.io/v1",
  CREDENTIALS: "include",
  ENCODE_PATH: void 0,
  HEADERS: void 0,
  PASSWORD: void 0,
  TOKEN: void 0,
  USERNAME: void 0,
  VERSION: "0.1",
  WITH_CREDENTIALS: !1,
  interceptors: {
    request: new Rt(),
    response: new Rt()
  }
};
class Qr {
  constructor(t) {
    this.config = t;
  }
}
class Tr extends Error {
  constructor(t, p, h) {
    super(h), this.name = "ApiError", this.url = p.url, this.status = p.status, this.statusText = p.statusText, this.body = p.body, this.request = t;
  }
}
class Zr extends Error {
  constructor(t) {
    super(t), this.name = "CancelError";
  }
  get isCancelled() {
    return !0;
  }
}
class en {
  constructor(t) {
    this._isResolved = !1, this._isRejected = !1, this._isCancelled = !1, this.cancelHandlers = [], this.promise = new Promise((p, h) => {
      this._resolve = p, this._reject = h;
      const y = (R) => {
        this._isResolved || this._isRejected || this._isCancelled || (this._isResolved = !0, this._resolve && this._resolve(R));
      }, m = (R) => {
        this._isResolved || this._isRejected || this._isCancelled || (this._isRejected = !0, this._reject && this._reject(R));
      }, E = (R) => {
        this._isResolved || this._isRejected || this._isCancelled || this.cancelHandlers.push(R);
      };
      return Object.defineProperty(E, "isResolved", {
        get: () => this._isResolved
      }), Object.defineProperty(E, "isRejected", {
        get: () => this._isRejected
      }), Object.defineProperty(E, "isCancelled", {
        get: () => this._isCancelled
      }), t(y, m, E);
    });
  }
  get [Symbol.toStringTag]() {
    return "Cancellable Promise";
  }
  then(t, p) {
    return this.promise.then(t, p);
  }
  catch(t) {
    return this.promise.catch(t);
  }
  finally(t) {
    return this.promise.finally(t);
  }
  cancel() {
    if (!(this._isResolved || this._isRejected || this._isCancelled)) {
      if (this._isCancelled = !0, this.cancelHandlers.length)
        try {
          for (const t of this.cancelHandlers)
            t();
        } catch (t) {
          console.warn("Cancellation threw an error", t);
          return;
        }
      this.cancelHandlers.length = 0, this._reject && this._reject(new Zr("Request aborted"));
    }
  }
  get isCancelled() {
    return this._isCancelled;
  }
}
const Ze = (i) => typeof i == "string", Yt = (i) => Ze(i) && i !== "", zt = (i) => i instanceof Blob, Sr = (i) => i instanceof FormData, tn = (i) => {
  try {
    return btoa(i);
  } catch {
    return Buffer.from(i).toString("base64");
  }
}, rn = (i) => {
  const t = [], p = (y, m) => {
    t.push(`${encodeURIComponent(y)}=${encodeURIComponent(String(m))}`);
  }, h = (y, m) => {
    m != null && (m instanceof Date ? p(y, m.toISOString()) : Array.isArray(m) ? m.forEach((E) => h(y, E)) : typeof m == "object" ? Object.entries(m).forEach(([E, R]) => h(`${y}[${E}]`, R)) : p(y, m));
  };
  return Object.entries(i).forEach(([y, m]) => h(y, m)), t.length ? `?${t.join("&")}` : "";
}, nn = (i, t) => {
  const p = i.ENCODE_PATH || encodeURI, h = t.url.replace("{api-version}", i.VERSION).replace(/{(.*?)}/g, (m, E) => {
    var R;
    return (R = t.path) != null && R.hasOwnProperty(E) ? p(String(t.path[E])) : m;
  }), y = i.BASE + h;
  return t.query ? y + rn(t.query) : y;
}, an = (i) => {
  if (i.formData) {
    const t = new FormData(), p = (h, y) => {
      Ze(y) || zt(y) ? t.append(h, y) : t.append(h, JSON.stringify(y));
    };
    return Object.entries(i.formData).filter(([, h]) => h != null).forEach(([h, y]) => {
      Array.isArray(y) ? y.forEach((m) => p(h, m)) : p(h, y);
    }), t;
  }
}, Et = async (i, t) => typeof t == "function" ? t(i) : t, sn = async (i, t) => {
  const [p, h, y, m] = await Promise.all([
    // @ts-ignore
    Et(t, i.TOKEN),
    // @ts-ignore
    Et(t, i.USERNAME),
    // @ts-ignore
    Et(t, i.PASSWORD),
    // @ts-ignore
    Et(t, i.HEADERS)
  ]), E = Object.entries({
    Accept: "application/json",
    ...m,
    ...t.headers
  }).filter(([, R]) => R != null).reduce((R, [T, A]) => ({
    ...R,
    [T]: String(A)
  }), {});
  if (Yt(p) && (E.Authorization = `Bearer ${p}`), Yt(h) && Yt(y)) {
    const R = tn(`${h}:${y}`);
    E.Authorization = `Basic ${R}`;
  }
  return t.body !== void 0 && (t.mediaType ? E["Content-Type"] = t.mediaType : zt(t.body) ? E["Content-Type"] = t.body.type || "application/octet-stream" : Ze(t.body) ? E["Content-Type"] = "text/plain" : Sr(t.body) || (E["Content-Type"] = "application/json")), new Headers(E);
}, on = (i) => {
  var t, p;
  if (i.body !== void 0)
    return (t = i.mediaType) != null && t.includes("application/json") || (p = i.mediaType) != null && p.includes("+json") ? JSON.stringify(i.body) : Ze(i.body) || zt(i.body) || Sr(i.body) ? i.body : JSON.stringify(i.body);
}, un = async (i, t, p, h, y, m, E) => {
  const R = new AbortController();
  let T = {
    headers: m,
    body: h ?? y,
    method: t.method,
    signal: R.signal
  };
  i.WITH_CREDENTIALS && (T.credentials = i.CREDENTIALS);
  for (const A of i.interceptors.request._fns)
    T = await A(T);
  return E(() => R.abort()), await fetch(p, T);
}, cn = (i, t) => {
  if (t) {
    const p = i.headers.get(t);
    if (Ze(p))
      return p;
  }
}, ln = async (i) => {
  if (i.status !== 204)
    try {
      const t = i.headers.get("Content-Type");
      if (t) {
        const p = ["application/octet-stream", "application/pdf", "application/zip", "audio/", "image/", "video/"];
        if (t.includes("application/json") || t.includes("+json"))
          return await i.json();
        if (p.some((h) => t.includes(h)))
          return await i.blob();
        if (t.includes("multipart/form-data"))
          return await i.formData();
        if (t.includes("text/"))
          return await i.text();
      }
    } catch (t) {
      console.error(t);
    }
}, fn = (i, t) => {
  const h = {
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Timeout",
    409: "Conflict",
    410: "Gone",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Payload Too Large",
    414: "URI Too Long",
    415: "Unsupported Media Type",
    416: "Range Not Satisfiable",
    417: "Expectation Failed",
    418: "Im a teapot",
    421: "Misdirected Request",
    422: "Unprocessable Content",
    423: "Locked",
    424: "Failed Dependency",
    425: "Too Early",
    426: "Upgrade Required",
    428: "Precondition Required",
    429: "Too Many Requests",
    431: "Request Header Fields Too Large",
    451: "Unavailable For Legal Reasons",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    505: "HTTP Version Not Supported",
    506: "Variant Also Negotiates",
    507: "Insufficient Storage",
    508: "Loop Detected",
    510: "Not Extended",
    511: "Network Authentication Required",
    ...i.errors
  }[t.status];
  if (h)
    throw new Tr(i, t, h);
  if (!t.ok) {
    const y = t.status ?? "unknown", m = t.statusText ?? "unknown", E = (() => {
      try {
        return JSON.stringify(t.body, null, 2);
      } catch {
        return;
      }
    })();
    throw new Tr(i, t, `Generic Error: status: ${y}; status text: ${m}; body: ${E}`);
  }
}, dn = (i, t) => new en(async (p, h, y) => {
  try {
    const m = nn(i, t), E = an(t), R = on(t), T = await sn(i, t);
    if (!y.isCancelled) {
      let A = await un(i, t, m, R, E, T, y);
      for (const te of i.interceptors.response._fns)
        A = await te(A);
      const I = await ln(A), x = cn(A, t.responseHeader);
      let z = I;
      t.responseTransformer && A.ok && (z = await t.responseTransformer(I));
      const H = {
        url: m,
        ok: A.ok,
        status: A.status,
        statusText: A.statusText,
        body: x ?? z
      };
      fn(t, H), p(H.body);
    }
  } catch (m) {
    h(m);
  }
});
class pn extends Qr {
  constructor(t) {
    super(t);
  }
  /**
   * Request method
   * @param options The request options from the service
   * @returns CancelablePromise<T>
   * @throws ApiError
   */
  request(t) {
    return dn(this.config, t);
  }
}
class hn {
  constructor(t) {
    this.httpRequest = t;
  }
  /**
   * Fetch project settings
   * Fetch project details with PSP settings and validations status.
   * @returns ProjectSettingsAndValidations Project settings
   * @throws ApiError
   */
  getProjectSettings() {
    return this.httpRequest.request({
      method: "GET",
      url: "/project/settings",
      errors: {
        400: "Invalid input, object invalid.",
        401: "Missing API key or secret",
        403: "Resource is access restricted.",
        404: "Ressource not found.",
        500: "Internal server error"
      }
    });
  }
  /**
   * Set project settings
   * Setup project with PSP settings
   * @param data The data for the request.
   * @param data.requestBody
   * @returns unknown Project settings stored
   * @throws ApiError
   */
  setProjectSettings(t) {
    return this.httpRequest.request({
      method: "POST",
      url: "/project/settings",
      body: t.requestBody,
      mediaType: "application/json",
      errors: {
        400: "Invalid input, object invalid.",
        401: "Missing API key or secret",
        403: "Resource is access restricted.",
        404: "Ressource not found.",
        422: "Unprocessable entity.",
        500: "Internal server error"
      }
    });
  }
  /**
   * Update project settings
   * Update project with PSP settings
   * @param data The data for the request.
   * @param data.requestBody
   * @returns unknown Project settings stored
   * @throws ApiError
   */
  updateProjectSettings(t) {
    return this.httpRequest.request({
      method: "PUT",
      url: "/project/settings",
      body: t.requestBody,
      mediaType: "application/json",
      errors: {
        400: "Invalid input, object invalid.",
        401: "Missing API key or secret",
        403: "Resource is access restricted.",
        404: "Ressource not found.",
        422: "Unprocessable entity.",
        500: "Internal server error"
      }
    });
  }
}
class yn {
  constructor(t) {
    this.httpRequest = t;
  }
  /**
   * Fetch all products
   * Fetch all products details
   * @returns Product Products
   * @throws ApiError
   */
  getProducts() {
    return this.httpRequest.request({
      method: "GET",
      url: "/products",
      errors: {
        400: "Invalid input, object invalid.",
        401: "Missing API key or secret",
        403: "Resource is access restricted.",
        404: "Ressource not found.",
        500: "Internal server error"
      }
    });
  }
  /**
   * Create a new product
   * Requires the product `contractAddress` to be whitelisted
   * @param data The data for the request.
   * @param data.requestBody
   * @returns unknown Product stored
   * @throws ApiError
   */
  createProduct(t) {
    return this.httpRequest.request({
      method: "POST",
      url: "/products",
      body: t.requestBody,
      mediaType: "application/json",
      errors: {
        400: "Invalid input, object invalid.",
        401: "Missing API key or secret",
        403: "Resource is access restricted.",
        404: "Ressource not found.",
        422: "Unprocessable entity.",
        500: "Internal server error"
      }
    });
  }
  /**
   * Fetch product details
   * Fetch product details by product ID
   * @param data The data for the request.
   * @param data.productId
   * @returns Product Product
   * @throws ApiError
   */
  getProductById(t) {
    return this.httpRequest.request({
      method: "GET",
      url: "/products/{productId}",
      path: {
        productId: t.productId
      },
      errors: {
        400: "Invalid input, object invalid.",
        401: "Missing API key or secret",
        403: "Resource is access restricted.",
        404: "Ressource not found.",
        500: "Internal server error"
      }
    });
  }
  /**
   * Update product
   * Requires the product `contractAddress` to be whitelisted
   * @param data The data for the request.
   * @param data.productId
   * @param data.requestBody
   * @returns unknown Product updated
   * @throws ApiError
   */
  updateProduct(t) {
    return this.httpRequest.request({
      method: "PUT",
      url: "/products/{productId}",
      path: {
        productId: t.productId
      },
      body: t.requestBody,
      mediaType: "application/json",
      errors: {
        400: "Invalid input, object invalid.",
        401: "Missing API key or secret",
        403: "Resource is access restricted.",
        404: "Ressource not found.",
        422: "Unprocessable entity.",
        500: "Internal server error"
      }
    });
  }
  /**
   * Delete product
   * Delete product by product ID
   * @param data The data for the request.
   * @param data.productId
   * @returns void Product deleted
   * @throws ApiError
   */
  deleteProduct(t) {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/products/{productId}",
      path: {
        productId: t.productId
      },
      errors: {
        400: "Invalid input, object invalid.",
        401: "Missing API key or secret",
        403: "Resource is access restricted.",
        404: "Ressource not found.",
        500: "Internal server error"
      }
    });
  }
}
class mn {
  constructor(t) {
    this.httpRequest = t;
  }
  /**
   * Initiate a new checkout session
   * Prepare Checkout session for purchases.
   * @param data The data for the request.
   * @param data.requestBody
   * @returns CheckoutSessionResponse URL where to redirect user to begin the purchase funnel
   * @throws ApiError
   */
  createCheckoutSession(t) {
    return this.httpRequest.request({
      method: "POST",
      url: "/checkout-sessions",
      body: t.requestBody,
      mediaType: "application/json",
      errors: {
        400: "Invalid input, object invalid.",
        403: "Resource is access restricted.",
        404: "Ressource not found.",
        422: "Unprocessable entity.",
        500: "Internal server error"
      }
    });
  }
}
class vn {
  constructor(t) {
    this.httpRequest = t;
  }
  /**
   * Fetch all project transactions
   * Fetch all project transactions
   * @param data The data for the request.
   * @param data.productId Optional filtering by `productId`
   * @param data.limit
   * @param data.skip
   * @returns PaginatedTransactions Paginated list of transactions
   * @throws ApiError
   */
  getTransactions(t = {}) {
    return this.httpRequest.request({
      method: "GET",
      url: "/transactions",
      query: {
        productId: t.productId,
        limit: t.limit,
        skip: t.skip
      },
      errors: {
        400: "Invalid input, object invalid.",
        401: "Missing API key or secret",
        403: "Resource is access restricted.",
        404: "Ressource not found.",
        500: "Internal server error"
      }
    });
  }
  /**
   * Fetch transaction details
   * Fetch product details by product ID
   * @param data The data for the request.
   * @param data.transactionId
   * @returns Transaction Transaction
   * @throws ApiError
   */
  getTransactionById(t) {
    return this.httpRequest.request({
      method: "GET",
      url: "/transactions/{transactionId}",
      path: {
        transactionId: t.transactionId
      },
      errors: {
        400: "Invalid input, object invalid.",
        401: "Missing API key or secret",
        403: "Resource is access restricted.",
        404: "Ressource not found.",
        500: "Internal server error"
      }
    });
  }
  /**
   * Retry cashed transaction not minted
   * Try to mint once more. Call secured by the nonce to avoid replay attacks.
   * @param data The data for the request.
   * @param data.transactionId
   * @returns Transaction Transaction
   * @throws ApiError
   */
  retryTransactionById(t) {
    return this.httpRequest.request({
      method: "PUT",
      url: "/transactions/{transactionId}",
      path: {
        transactionId: t.transactionId
      },
      errors: {
        400: "Invalid input, object invalid.",
        401: "Missing API key or secret",
        403: "Resource is access restricted.",
        404: "Ressource not found.",
        419: "Ressource conflict.",
        500: "Internal server error"
      }
    });
  }
}
class bn {
  constructor(t) {
    this.httpRequest = t;
  }
  /**
   * Webhook called by Lydia for purchase events
   * None but Lydia should call this endpoint
   * @param data The data for the request.
   * @param data.formData
   * @returns unknown Successful processing
   * @throws ApiError
   */
  lydiaHandleEvent(t) {
    return this.httpRequest.request({
      method: "POST",
      url: "/lydia/webhooks",
      formData: t.formData,
      mediaType: "multipart/form-data",
      errors: {
        400: "Invalid input, object invalid.",
        419: "Ressource conflict.",
        500: "Internal server error"
      }
    });
  }
}
class gn {
  constructor(t) {
    this.httpRequest = t;
  }
  /**
   * Create a Stripe account for the client, linked to Cometh one.
   * See also <a href="https://docs.stripe.com/api/accounts/create">Stripe Documentation</a>.
   *
   * @param data The data for the request.
   * @param data.requestBody
   * @returns StripeAccountId Stripe Client account created
   * @throws ApiError
   */
  stripeCreateConnectAccount(t) {
    return this.httpRequest.request({
      method: "POST",
      url: "/stripe/connect",
      body: t.requestBody,
      mediaType: "application/json"
    });
  }
  /**
   * Finalize Stripe account linking.
   * See also <a href="https://docs.stripe.com/api/account_links">Stripe Documentation</a>.
   *
   * @param data The data for the request.
   * @param data.requestBody
   * @returns StripeAccountLinkResponse Stripe Client account linked
   * @throws ApiError
   */
  stripeLinkConnectAccount(t) {
    return this.httpRequest.request({
      method: "PUT",
      url: "/stripe/connect",
      body: t.requestBody,
      mediaType: "application/json"
    });
  }
  /**
   * Webhook called by Stripe for purchase events
   * None but Stripe should call this endpoint
   * @param data The data for the request.
   * @param data.requestBody
   * @returns unknown <a href="https://stripe.com/docs/api/financial_connections/sessions/object">Stripe Session</a> object
   * @throws ApiError
   */
  stripeHandleEvent(t) {
    return this.httpRequest.request({
      method: "POST",
      url: "/stripe/webhooks",
      body: t.requestBody,
      mediaType: "application/json",
      errors: {
        400: "Invalid input, object invalid.",
        412: "Precondition failed.",
        419: "Ressource conflict.",
        500: "Internal server error"
      }
    });
  }
}
class En {
  constructor(t) {
    this.httpRequest = t;
  }
  /**
   * Whitelist a client contract
   * Allow an admin to add a validated contract to the whitelist.
   * @param data The data for the request.
   * @param data.requestBody
   * @returns unknown Contract is whitelisted.
   * @throws ApiError
   */
  whitelistClientContract(t) {
    return this.httpRequest.request({
      method: "POST",
      url: "/admin/whitelists",
      body: t.requestBody,
      mediaType: "application/json",
      errors: {
        304: "Ressource not modified.",
        400: "Invalid input, object invalid.",
        401: "Missing API key or secret",
        403: "Resource is access restricted.",
        419: "Ressource conflict.",
        500: "Internal server error"
      }
    });
  }
  /**
   * Get whitelisted contracts for a client project
   * List of whitelisted contracts.
   * @param data The data for the request.
   * @param data.projectId
   * @returns WhitelistContract List of whitelisted contracts
   * @throws ApiError
   */
  getWhitelistedContractsOfProject(t) {
    return this.httpRequest.request({
      method: "GET",
      url: "/admin/whitelists/{projectId}",
      path: {
        projectId: t.projectId
      },
      errors: {
        403: "Resource is access restricted."
      }
    });
  }
  /**
   * Remove a contract from whitelist for a client project
   * Remove from whitelist.
   * @param data The data for the request.
   * @param data.projectId
   * @param data.contractAddress
   * @returns unknown Contract removed from whitelist
   * @throws ApiError
   */
  deleteFromWhitelistOfProject(t) {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/admin/whitelists/{projectId}/{contractAddress}",
      path: {
        projectId: t.projectId,
        contractAddress: t.contractAddress
      },
      errors: {
        403: "Resource is access restricted."
      }
    });
  }
  /**
   * Update a contract in the whitelist. Used to update the status.
   * Update status from whitelist.
   * @param data The data for the request.
   * @param data.projectId
   * @param data.contractAddress
   * @param data.requestBody
   * @returns unknown Contract in whitelist updated
   * @throws ApiError
   */
  updateWhitelistContract(t) {
    return this.httpRequest.request({
      method: "PUT",
      url: "/admin/whitelists/{projectId}/{contractAddress}",
      path: {
        projectId: t.projectId,
        contractAddress: t.contractAddress
      },
      body: t.requestBody,
      mediaType: "application/json",
      errors: {
        403: "Resource is access restricted."
      }
    });
  }
}
class Rn {
  constructor(t) {
    this.httpRequest = t;
  }
  /**
   * Add a contract to review for the whitelist
   * Allow a client to add a contract to the whitelist review. The Cometh team will validate it.
   * @param data The data for the request.
   * @param data.requestBody
   * @returns unknown Contract is added for review.
   * @throws ApiError
   */
  addContractToReview(t) {
    return this.httpRequest.request({
      method: "POST",
      url: "/whitelists/reviews",
      body: t.requestBody,
      mediaType: "application/json",
      errors: {
        304: "Ressource not modified.",
        400: "Invalid input, object invalid.",
        401: "Missing API key or secret",
        403: "Resource is access restricted.",
        419: "Ressource conflict.",
        500: "Internal server error"
      }
    });
  }
  /**
   * Get whitelisted contracts for the project
   * List of contracts in the whitelist with their status.
   * @returns WhitelistContract List of contracts in the whitelist
   * @throws ApiError
   */
  getWhitelistedContracts() {
    return this.httpRequest.request({
      method: "GET",
      url: "/whitelists",
      errors: {
        403: "Resource is access restricted."
      }
    });
  }
}
class _n {
  constructor(t, p = pn) {
    var h, y;
    this.request = new p({
      BASE: (t == null ? void 0 : t.BASE) ?? "https://checkout.cometh.io/v1",
      VERSION: (t == null ? void 0 : t.VERSION) ?? "0.1",
      WITH_CREDENTIALS: (t == null ? void 0 : t.WITH_CREDENTIALS) ?? !1,
      CREDENTIALS: (t == null ? void 0 : t.CREDENTIALS) ?? "include",
      TOKEN: t == null ? void 0 : t.TOKEN,
      USERNAME: t == null ? void 0 : t.USERNAME,
      PASSWORD: t == null ? void 0 : t.PASSWORD,
      HEADERS: t == null ? void 0 : t.HEADERS,
      ENCODE_PATH: t == null ? void 0 : t.ENCODE_PATH,
      interceptors: {
        request: ((h = t == null ? void 0 : t.interceptors) == null ? void 0 : h.request) ?? new Rt(),
        response: ((y = t == null ? void 0 : t.interceptors) == null ? void 0 : y.response) ?? new Rt()
      }
    }), this.admin = new En(this.request), this.checkoutSessions = new mn(this.request), this.lydia = new bn(this.request), this.products = new yn(this.request), this.settings = new hn(this.request), this.stripe = new gn(this.request), this.transactions = new vn(this.request), this.whitelist = new Rn(this.request);
  }
}
const On = {
  additionalProperties: !1,
  type: "object",
  required: ["endpoint", "vendorToken", "privateToken"],
  properties: {
    endpoint: {
      type: "string",
      enum: ["https://homologation.lydia-app.com", "https://lydia-app.com"],
      default: "https://homologation.lydia-app.com"
    },
    vendorToken: {
      type: "string",
      example: "6515947d64b59333313556"
    },
    privateToken: {
      type: "string",
      example: "6515947d6814d831834508"
    }
  }
}, In = {
  additionalProperties: !1,
  type: "object",
  readOnly: !0,
  properties: {
    accountId: {
      type: "string",
      example: "acct_1PGfm6IvHwa4R8Xt",
      readOnly: !0
    }
  }
}, jn = {
  additionalProperties: !1,
  type: "object",
  properties: {
    lydia: {
      $ref: "#/components/schemas/LydiaSettings",
      description: "Lydia settings"
    },
    stripe: {
      $ref: "#/components/schemas/StripeSettings",
      description: "Stripe settings"
    }
  }
}, kn = {
  additionalProperties: !1,
  type: "object",
  required: ["psp"],
  properties: {
    psp: {
      $ref: "#/components/schemas/PSP",
      description: "Payment Service Provider (PSP) settings"
    }
  }
}, Dn = {
  description: "Validation status of a process",
  type: "string",
  enum: ["TO_COMPLETE", "PENDING", "VALIDATED"]
}, xn = {
  additionalProperties: !1,
  type: "object",
  required: ["collectionWhitelistStatus", "pspOnboardingStatus", "productCatalogStatus"],
  properties: {
    collectionWhitelistStatus: {
      $ref: "#/components/schemas/ValidationStatus",
      description: "Status of the collection whitelist process.",
      example: "TO_COMPLETE"
    },
    pspOnboardingStatus: {
      $ref: "#/components/schemas/ValidationStatus",
      description: "Status of the stripe KYB process.",
      example: "TO_COMPLETE"
    },
    productCatalogStatus: {
      $ref: "#/components/schemas/ValidationStatus",
      description: "If at least one product is ready.",
      example: "TO_COMPLETE"
    }
  }
}, $n = {
  additionalProperties: !1,
  type: "object",
  required: ["settings", "validationStatuses"],
  properties: {
    settings: {
      $ref: "#/components/schemas/ProjectSettings"
    },
    validationStatuses: {
      $ref: "#/components/schemas/ValidationStatuses"
    }
  }
}, qn = {
  type: "string",
  description: "The Ethereum contract address of a collection",
  example: "0x3D9819210A31b4961b30EF54bE2aeD79B9c9Cd3B",
  pattern: "^0x[a-fA-F0-9]{40}$"
}, Ln = {
  type: "string",
  description: "A smart-contract function selector",
  example: "0x40d097c3",
  pattern: "^0x[a-fA-F0-9]{8}$"
}, Fn = {
  type: "object",
  required: ["name", "type", "internalType"],
  properties: {
    name: {
      description: "The local parameter name. This may be null for unnamed parameters. For example, the parameter definition string foobar would be foobar.",
      type: "string",
      example: "to"
    },
    type: {
      type: "string",
      example: "address"
    },
    internalType: {
      type: "string",
      example: "address"
    },
    arrayChildren: {
      description: "The type of children of the array. This is null for any parameter which is not an array.",
      $ref: "#/components/schemas/AbiParamType"
    },
    arrayLength: {
      description: "The length of the array, or -1 for dynamic-length arrays. This is null for parameters which are not arrays.",
      type: "integer"
    },
    components: {
      description: "The components of a tuple. This is null for non-tuple parameters.",
      type: "array",
      items: {
        $ref: "#/components/schemas/AbiParamType"
      }
    }
  }
}, Nn = {
  description: "ABI of a function fragment inputs",
  type: "array",
  items: {
    $ref: "#/components/schemas/AbiParamType"
  },
  example: [
    {
      internalType: "address",
      name: "to",
      type: "address"
    }
  ]
}, Un = {
  additionalProperties: !0,
  type: "object",
  description: "Map of parameters",
  example: {
    packId: 123,
    quantity: 3
  },
  default: {}
}, Mn = {
  additionalProperties: !1,
  type: "object",
  required: ["name", "contractAddress", "functionSelector", "functionInputsAbi", "price", "currency"],
  properties: {
    id: {
      type: "integer",
      format: "int64",
      readOnly: !0
    },
    name: {
      description: "Product name",
      type: "string",
      example: "Golden NFT"
    },
    contractAddress: {
      description: "Address of the smart-contract to call",
      $ref: "#/components/schemas/ContractAddress"
    },
    functionSelector: {
      description: "Function selector of the contract function to call",
      $ref: "#/components/schemas/FunctionSelector"
    },
    functionInputsAbi: {
      description: "ABI of the contract function to call",
      $ref: "#/components/schemas/FunctionInputsAbi"
    },
    parametersStaticValues: {
      $ref: "#/components/schemas/ParametersStaticValues"
    },
    price: {
      description: `A positive integer representing how much to charge in the smallest currency.<br /> For example: <ul>
  <li>$12.34 would be <code>1234</code></li>
  <li>12.34 USDC (6 decimals) would be <code>12340000</code></li>
  <li>ETH amounts (18 decimals) would be stored in wei</li>
</ul>`,
      type: "string",
      pattern: "^[0-9]+$",
      example: "1234"
    },
    currency: {
      description: "Currency of product price",
      type: "string",
      enum: ["EUR", "GBP", "USD", "INR"]
    }
  }
}, Bn = {
  type: "string",
  description: "The Ethereum address of the user.",
  example: "0x3D9819210A31b4961b30EF54bE2aeD79B9c9Cd3B",
  pattern: "^0x[a-fA-F0-9]{40}$"
}, Vn = {
  additionalProperties: !0,
  description: "Map of parameters",
  example: {
    to: "0x472Afd5a5303ac2799475687e943bbA72846BD6b"
  },
  default: {}
}, Wn = {
  additionalProperties: !1,
  required: ["productId", "userAddress"],
  properties: {
    productId: {
      description: "ID of a previously created product",
      type: "integer",
      format: "int64",
      example: 1
    },
    userAddress: {
      description: "Wallet which would receive the purchased NFT",
      $ref: "#/components/schemas/UserAddress"
    },
    email: {
      description: "Email address of the user making the purchase",
      type: "string",
      format: "email"
    },
    parameters: {
      description: "Parameters required for the smart-contract call",
      $ref: "#/components/schemas/CheckoutSessionParameters"
    },
    successUrl: {
      description: "URL where to redirect users to after a successful purchase",
      example: "https://cometh.io?success=true",
      type: "string",
      format: "uri"
    },
    failUrl: {
      description: "URL where to redirect users to after a failed purchase",
      example: "https://cometh.io?fail=true",
      type: "string",
      format: "uri"
    }
  }
}, Yn = {
  additionalProperties: !1,
  required: ["transactionId", "url"],
  properties: {
    transactionId: {
      type: "string",
      nullable: !1
    },
    url: {
      type: "string",
      format: "uri",
      nullable: !1,
      description: "URL to the PSP session checkout page",
      example: "https://some.psp.com/uri"
    }
  }
}, Hn = {
  type: "number",
  nullable: !1,
  minimum: 0,
  default: 100,
  example: 50,
  description: "The number of items to return per request. If limit is 0, then no limit is applied."
}, Gn = {
  type: "number",
  nullable: !1,
  minimum: 0,
  default: 0,
  example: 1,
  description: "The number of items to skip before starting to collect the result set."
}, zn = {
  additionalProperties: !1,
  type: "object",
  required: ["id", "productId", "chainId", "status", "userAddress", "email", "pspType", "pspIdentifier", "pspInfos", "relayedTxnId"],
  properties: {
    id: {
      type: "string",
      format: "uuid",
      readOnly: !0
    },
    productId: {
      type: "integer",
      format: "int64",
      readOnly: !0,
      example: 1
    },
    chainId: {
      type: "integer",
      format: "int64",
      readOnly: !0,
      example: 137
    },
    status: {
      description: "Status of the transaction",
      type: "string",
      enum: ["initiated", "cashed", "relayed", "reverted", "cancelled", "completed"]
    },
    userAddress: {
      description: "Wallet which would receive the purchased NFT",
      $ref: "#/components/schemas/UserAddress",
      readOnly: !0,
      example: "0x3D9819210A31b4961b30EF54bE2aeD79B9c9Cd3B"
    },
    email: {
      description: "Email address of the user making the purchase",
      type: "string",
      format: "email",
      nullable: !0,
      readOnly: !0
    },
    parameters: {
      description: "Dynamic parameters as given when creating the checkout session",
      $ref: "#/components/schemas/CheckoutSessionParameters",
      readOnly: !0
    },
    pspType: {
      type: "string",
      enum: ["Lydia", "Stripe"],
      readOnly: !0
    },
    pspIdentifier: {
      description: "Identifier specific to the PSP",
      type: "string",
      readOnly: !0,
      example: "12097878"
    },
    pspInfos: {
      description: "Any data specific to the checkout session for this PSP",
      type: "object",
      readOnly: !0,
      example: {
        url: "https://homologation.lydia-app.com/collect/payment/139723a8a6c917d1fdfc73f76c4c25ee/cb",
        requestId: "12097878",
        requestUuid: "139723a8a6c917d1fdfc73f76c4c25ee"
      }
    },
    relayedTxnId: {
      description: "ID of the transaction as exposed by Cometh relayer",
      type: "string",
      nullable: !0,
      readOnly: !0
    }
  }
}, Kn = {
  additionalProperties: !1,
  readOnly: !0,
  required: ["transactions", "total"],
  properties: {
    transactions: {
      type: "array",
      description: "The list of transactions.",
      items: {
        $ref: "#/components/schemas/Transaction"
      }
    },
    total: {
      type: "integer",
      example: 1,
      description: "The total number of transactions."
    }
  }
}, Jn = {
  additionalProperties: !0,
  type: "object",
  required: ["request_id"],
  properties: {
    currency: {
      type: "string",
      nullable: !1,
      description: "Currency of Lydia purchase",
      example: "EUR"
    },
    request_id: {
      type: "string",
      nullable: !1,
      example: "12097406"
    },
    amount: {
      type: "string",
      nullable: !1,
      example: "20"
    },
    signed: {
      type: "string",
      nullable: !1,
      example: 0
    },
    transaction_identifier: {
      type: "string",
      nullable: !1,
      example: "40149AAAE5E57885BCA72F5930A62F58"
    },
    vendor_token: {
      type: "string",
      nullable: !1,
      example: "6515947d64b59333313556"
    },
    order_ref: {
      type: "string",
      nullable: !1,
      example: "0x3D9819210A31b4961b30EF54bE2aeD79B9c9Cd3B_fe6fa9be-552c-49a7-998d-0badac001491"
    },
    sig: {
      type: "string",
      nullable: !1,
      description: "MD5 signature of parameters",
      example: "6e4d88e25aa69f6cb1eb25ecf8e40c7f"
    }
  }
}, Xn = {
  type: "object",
  required: ["account"],
  properties: {
    account: {
      type: "string",
      nullable: !1,
      example: "acct_1PG0b3RCReiSq1hk"
    }
  }
}, Qn = {
  type: "object",
  required: ["object", "created", "expires_at", "url"],
  properties: {
    object: {
      type: "string",
      description: "String representing the object's type. Objects of the same type share the same value.",
      example: "account_link"
    },
    created: {
      type: "integer",
      description: "Time at which the object was created. Measured in seconds since the Unix epoch.",
      example: 1627900796
    },
    expires_at: {
      type: "integer",
      description: "The timestamp at which this account link will expire.",
      example: 1627987196
    },
    url: {
      type: "string",
      description: "The URL for the account link.",
      example: "https://example.com/account-link"
    }
  },
  additionalProperties: !1
}, Zn = {
  type: "object",
  required: ["account"],
  additionalProperties: !1,
  properties: {
    account: {
      $ref: "#/components/schemas/StripeAccountLink"
    }
  }
}, ea = {
  type: "object",
  required: ["country", "city", "line1", "postalCode"],
  properties: {
    country: {
      type: "string",
      nullable: !1,
      example: "FR"
    },
    city: {
      type: "string",
      nullable: !1,
      example: "Paris"
    },
    line1: {
      type: "string",
      nullable: !1,
      example: "10 rue de la Paix"
    },
    line2: {
      type: "string",
      example: "Batiment B"
    },
    postalCode: {
      type: "string",
      nullable: !1,
      example: "75010"
    },
    state: {
      type: "string",
      example: "Paris"
    }
  }
}, ta = {
  type: "object",
  required: ["name", "businessType", "email", "address", "currency"],
  properties: {
    name: {
      type: "string",
      nullable: !1,
      example: "Cometh Studio"
    },
    businessType: {
      type: "string",
      enum: ["company", "government_entity", "individual", "non_profit"]
    },
    email: {
      type: "string",
      format: "email",
      example: "john@doe.com"
    },
    address: {
      $ref: "#/components/schemas/StripeAddress"
    },
    currency: {
      description: "Currency",
      type: "string",
      pattern: "^[a-z]{3}$",
      example: "eur"
    }
  }
}, ra = {
  type: "object",
  additionalProperties: !1,
  required: ["projectId", "contractAddress"],
  properties: {
    projectId: {
      description: "ID of the client's project",
      type: "string"
    },
    contractAddress: {
      description: "Address of the smart-contract to whitelist",
      $ref: "#/components/schemas/ContractAddress",
      example: "0x3D9819210A31b4961b30EF54bE2aeD79B9c9Cd3B"
    }
  }
}, na = {
  type: "string",
  description: "The status of the contract in the whitelist.",
  enum: ["TO_REVIEW", "VALIDATED", "REFUSED"]
}, aa = {
  type: "object",
  additionalProperties: !1,
  required: ["status", "contractAddress"],
  properties: {
    status: {
      description: "Status of the contract in the whitelist",
      $ref: "#/components/schemas/WhitelistStatus"
    },
    contractAddress: {
      description: "Address of the smart-contract",
      $ref: "#/components/schemas/ContractAddress",
      example: "0x3D9819210A31b4961b30EF54bE2aeD79B9c9Cd3B"
    }
  }
}, sa = {
  type: "object",
  additionalProperties: !1,
  required: ["status"],
  properties: {
    status: {
      $ref: "#/components/schemas/WhitelistStatus"
    }
  }
}, oa = {
  type: "object",
  additionalProperties: !1,
  required: ["contractAddress"],
  properties: {
    contractAddress: {
      description: "Address of the smart-contract to whitelist",
      $ref: "#/components/schemas/ContractAddress",
      example: "0x3D9819210A31b4961b30EF54bE2aeD79B9c9Cd3B"
    }
  }
}, ia = {
  HTTPS___HOMOLOGATION_LYDIA_APP_COM: "https://homologation.lydia-app.com",
  HTTPS___LYDIA_APP_COM: "https://lydia-app.com"
}, ua = {
  TO_COMPLETE: "TO_COMPLETE",
  PENDING: "PENDING",
  VALIDATED: "VALIDATED"
}, ca = {
  EUR: "EUR",
  GBP: "GBP",
  USD: "USD",
  INR: "INR"
}, la = {
  INITIATED: "initiated",
  CASHED: "cashed",
  RELAYED: "relayed",
  REVERTED: "reverted",
  CANCELLED: "cancelled",
  COMPLETED: "completed"
}, fa = {
  LYDIA: "Lydia",
  STRIPE: "Stripe"
}, da = {
  COMPANY: "company",
  GOVERNMENT_ENTITY: "government_entity",
  INDIVIDUAL: "individual",
  NON_PROFIT: "non_profit"
}, pa = {
  TO_REVIEW: "TO_REVIEW",
  VALIDATED: "VALIDATED",
  REFUSED: "REFUSED"
}, Tn = 1e3;
var Sn = /* @__PURE__ */ ((i) => (i.INITIATED = "initiated", i.CASHED = "cashed", i.RELAYED = "relayed", i.REVERTED = "reverted", i.CANCELLED = "cancelled", i.COMPLETED = "completed", i))(Sn || {});
const Cn = [
  "reverted",
  "cancelled",
  "completed"
  /* COMPLETED */
];
function Pn(i, t = "https://checkout.cometh.io/v1") {
  return new _n({
    BASE: t,
    HEADERS: {
      apikey: i
    }
  });
}
function Cr(i, t) {
  return ye.useMemo(
    () => Pn(i, t),
    [i, t]
  );
}
const wn = (i, t, p, h, y, m, E, R, T, A, I) => {
  const x = Cr(i, t), [z, H] = ye.useState(!1), te = ye.useCallback(async () => {
    try {
      H(!0);
      const se = await x.checkoutSessions.createCheckoutSession({
        requestBody: {
          productId: p,
          userAddress: h,
          email: y,
          parameters: m,
          successUrl: E,
          failUrl: R
        }
      });
      if (I && I(se.transactionId), T) {
        const re = document.createElement("a");
        re.href = se.url, re.target = "_blank", re.click(), re.remove();
        return;
      } else
        window.location.href = se.url;
    } catch (se) {
      console.error("Error during redirection", se), A && A(se);
    } finally {
      H(!1);
    }
  }, [
    x,
    p,
    h,
    y,
    m,
    E,
    R,
    T,
    A,
    I
  ]);
  return { isLoading: z, redirectToCheckoutSession: te };
}, ha = (i, t, p) => {
  const h = Cr(i, t), [y, m] = ye.useState(!0), [E, R] = ye.useState(null), [T, A] = ye.useState(null), I = ye.useCallback(async () => {
    try {
      m(!0);
      const x = await h.transactions.getTransactionById({
        transactionId: p
      });
      Cn.includes(
        x.status
      ) ? (R(x), m(!1)) : setTimeout(I, Tn);
    } catch (x) {
      console.error("Error during transaction polling", x), A(x), m(!1);
    }
  }, [h, p]);
  return ye.useEffect(() => {
    I();
  }, [I]), { isLoading: y, transaction: E, error: T };
}, ya = ({
  apikey: i,
  apiUrl: t,
  productId: p,
  userAddress: h,
  email: y,
  parameters: m,
  successUrl: E,
  failUrl: R,
  children: T,
  loadingComponent: A,
  openInNewTab: I,
  onError: x,
  onNewTransaction: z,
  ...H
}) => {
  const { isLoading: te, redirectToCheckoutSession: se } = wn(
    i,
    t,
    p,
    h,
    y,
    m,
    E,
    R,
    I,
    x,
    z
  );
  return /* @__PURE__ */ Xr.jsx("button", { ...H, onClick: se, children: te ? A || "Redirecting..." : T || "Checkout now" });
};
export {
  Fn as $AbiParamType,
  ra as $AdminWhitelistRequest,
  sa as $AdminWhitelistUpdateRequest,
  Vn as $CheckoutSessionParameters,
  Wn as $CheckoutSessionRequest,
  Yn as $CheckoutSessionResponse,
  qn as $ContractAddress,
  Jn as $Event,
  Nn as $FunctionInputsAbi,
  Ln as $FunctionSelector,
  On as $LydiaSettings,
  jn as $PSP,
  Hn as $PageLimit,
  Gn as $PageSkip,
  Kn as $PaginatedTransactions,
  Un as $ParametersStaticValues,
  Mn as $Product,
  kn as $ProjectSettings,
  $n as $ProjectSettingsAndValidations,
  oa as $ReviewWhitelistRequest,
  Xn as $StripeAccountId,
  Qn as $StripeAccountLink,
  Zn as $StripeAccountLinkResponse,
  ea as $StripeAddress,
  ta as $StripeConnectAccountDetails,
  In as $StripeSettings,
  zn as $Transaction,
  Bn as $UserAddress,
  Dn as $ValidationStatus,
  xn as $ValidationStatuses,
  aa as $WhitelistContract,
  na as $WhitelistStatus,
  En as AdminService,
  Tr as ApiError,
  Qr as BaseHttpRequest,
  Zr as CancelError,
  en as CancelablePromise,
  _n as CheckoutAPI,
  ya as CheckoutButton,
  mn as CheckoutSessionsService,
  bn as LydiaService,
  An as OpenAPI,
  yn as ProductsService,
  hn as SettingsService,
  gn as StripeService,
  Sn as TransactionStatus,
  vn as TransactionsService,
  ua as ValidationStatus,
  Rn as WhitelistService,
  pa as WhitelistStatus,
  da as businessType,
  ca as currency,
  ia as endpoint,
  fa as pspType,
  la as status,
  Cr as useCheckoutClient,
  wn as useCheckoutSession,
  ha as useWaitForTransaction
};
