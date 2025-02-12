var Mg = (a) => {
  throw TypeError(a);
};
var kd = (a, n, i) => n.has(a) || Mg("Cannot " + i);
var w = (a, n, i) => (
    kd(a, n, "read from private field"), i ? i.call(a) : n.get(a)
  ),
  Oe = (a, n, i) =>
    n.has(a)
      ? Mg("Cannot add the same private member more than once")
      : n instanceof WeakSet
        ? n.add(a)
        : n.set(a, i),
  fe = (a, n, i, s) => (
    kd(a, n, "write to private field"), s ? s.call(a, i) : n.set(a, i), i
  ),
  qe = (a, n, i) => (kd(a, n, "access private method"), i);
var Vo = (a, n, i, s) => ({
  set _(u) {
    fe(a, n, u, i);
  },
  get _() {
    return w(a, n, s);
  },
});
(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) s(u);
  new MutationObserver((u) => {
    for (const c of u)
      if (c.type === "childList")
        for (const d of c.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && s(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(u) {
    const c = {};
    return (
      u.integrity && (c.integrity = u.integrity),
      u.referrerPolicy && (c.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : u.crossOrigin === "anonymous"
          ? (c.credentials = "omit")
          : (c.credentials = "same-origin"),
      c
    );
  }
  function s(u) {
    if (u.ep) return;
    u.ep = !0;
    const c = i(u);
    fetch(u.href, c);
  }
})();
function Xv(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var jd = { exports: {} },
  Yl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ng;
function nS() {
  if (Ng) return Yl;
  Ng = 1;
  var a = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.fragment");
  function i(s, u, c) {
    var d = null;
    if (
      (c !== void 0 && (d = "" + c),
      u.key !== void 0 && (d = "" + u.key),
      "key" in u)
    ) {
      c = {};
      for (var h in u) h !== "key" && (c[h] = u[h]);
    } else c = u;
    return (
      (u = c.ref),
      { $$typeof: a, type: s, key: d, ref: u !== void 0 ? u : null, props: c }
    );
  }
  return (Yl.Fragment = n), (Yl.jsx = i), (Yl.jsxs = i), Yl;
}
var zg;
function aS() {
  return zg || ((zg = 1), (jd.exports = nS())), jd.exports;
}
var I = aS(),
  Ld = { exports: {} },
  Ve = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ug;
function rS() {
  if (Ug) return Ve;
  Ug = 1;
  var a = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    c = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    x = Symbol.iterator;
  function A(_) {
    return _ === null || typeof _ != "object"
      ? null
      : ((_ = (x && _[x]) || _["@@iterator"]),
        typeof _ == "function" ? _ : null);
  }
  var b = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    T = Object.assign,
    O = {};
  function R(_, Y, te) {
    (this.props = _),
      (this.context = Y),
      (this.refs = O),
      (this.updater = te || b);
  }
  (R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (_, Y) {
      if (typeof _ != "object" && typeof _ != "function" && _ != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, _, Y, "setState");
    }),
    (R.prototype.forceUpdate = function (_) {
      this.updater.enqueueForceUpdate(this, _, "forceUpdate");
    });
  function j() {}
  j.prototype = R.prototype;
  function L(_, Y, te) {
    (this.props = _),
      (this.context = Y),
      (this.refs = O),
      (this.updater = te || b);
  }
  var V = (L.prototype = new j());
  (V.constructor = L), T(V, R.prototype), (V.isPureReactComponent = !0);
  var se = Array.isArray,
    G = { H: null, A: null, T: null, S: null },
    le = Object.prototype.hasOwnProperty;
  function we(_, Y, te, ne, J, Re) {
    return (
      (te = Re.ref),
      {
        $$typeof: a,
        type: _,
        key: Y,
        ref: te !== void 0 ? te : null,
        props: Re,
      }
    );
  }
  function Se(_, Y) {
    return we(_.type, Y, void 0, void 0, void 0, _.props);
  }
  function F(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === a;
  }
  function pe(_) {
    var Y = { "=": "=0", ":": "=2" };
    return (
      "$" +
      _.replace(/[=:]/g, function (te) {
        return Y[te];
      })
    );
  }
  var Fe = /\/+/g;
  function ye(_, Y) {
    return typeof _ == "object" && _ !== null && _.key != null
      ? pe("" + _.key)
      : Y.toString(36);
  }
  function Ae() {}
  function be(_) {
    switch (_.status) {
      case "fulfilled":
        return _.value;
      case "rejected":
        throw _.reason;
      default:
        switch (
          (typeof _.status == "string"
            ? _.then(Ae, Ae)
            : ((_.status = "pending"),
              _.then(
                function (Y) {
                  _.status === "pending" &&
                    ((_.status = "fulfilled"), (_.value = Y));
                },
                function (Y) {
                  _.status === "pending" &&
                    ((_.status = "rejected"), (_.reason = Y));
                },
              )),
          _.status)
        ) {
          case "fulfilled":
            return _.value;
          case "rejected":
            throw _.reason;
        }
    }
    throw _;
  }
  function ze(_, Y, te, ne, J) {
    var Re = typeof _;
    (Re === "undefined" || Re === "boolean") && (_ = null);
    var Te = !1;
    if (_ === null) Te = !0;
    else
      switch (Re) {
        case "bigint":
        case "string":
        case "number":
          Te = !0;
          break;
        case "object":
          switch (_.$$typeof) {
            case a:
            case n:
              Te = !0;
              break;
            case g:
              return (Te = _._init), ze(Te(_._payload), Y, te, ne, J);
          }
      }
    if (Te)
      return (
        (J = J(_)),
        (Te = ne === "" ? "." + ye(_, 0) : ne),
        se(J)
          ? ((te = ""),
            Te != null && (te = Te.replace(Fe, "$&/") + "/"),
            ze(J, Y, te, "", function (Je) {
              return Je;
            }))
          : J != null &&
            (F(J) &&
              (J = Se(
                J,
                te +
                  (J.key == null || (_ && _.key === J.key)
                    ? ""
                    : ("" + J.key).replace(Fe, "$&/") + "/") +
                  Te,
              )),
            Y.push(J)),
        1
      );
    Te = 0;
    var Ue = ne === "" ? "." : ne + ":";
    if (se(_))
      for (var je = 0; je < _.length; je++)
        (ne = _[je]), (Re = Ue + ye(ne, je)), (Te += ze(ne, Y, te, Re, J));
    else if (((je = A(_)), typeof je == "function"))
      for (_ = je.call(_), je = 0; !(ne = _.next()).done; )
        (ne = ne.value), (Re = Ue + ye(ne, je++)), (Te += ze(ne, Y, te, Re, J));
    else if (Re === "object") {
      if (typeof _.then == "function") return ze(be(_), Y, te, ne, J);
      throw (
        ((Y = String(_)),
        Error(
          "Objects are not valid as a React child (found: " +
            (Y === "[object Object]"
              ? "object with keys {" + Object.keys(_).join(", ") + "}"
              : Y) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    }
    return Te;
  }
  function K(_, Y, te) {
    if (_ == null) return _;
    var ne = [],
      J = 0;
    return (
      ze(_, ne, "", "", function (Re) {
        return Y.call(te, Re, J++);
      }),
      ne
    );
  }
  function oe(_) {
    if (_._status === -1) {
      var Y = _._result;
      (Y = Y()),
        Y.then(
          function (te) {
            (_._status === 0 || _._status === -1) &&
              ((_._status = 1), (_._result = te));
          },
          function (te) {
            (_._status === 0 || _._status === -1) &&
              ((_._status = 2), (_._result = te));
          },
        ),
        _._status === -1 && ((_._status = 0), (_._result = Y));
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var ee =
    typeof reportError == "function"
      ? reportError
      : function (_) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var Y = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof _ == "object" &&
                _ !== null &&
                typeof _.message == "string"
                  ? String(_.message)
                  : String(_),
              error: _,
            });
            if (!window.dispatchEvent(Y)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", _);
            return;
          }
          console.error(_);
        };
  function ce() {}
  return (
    (Ve.Children = {
      map: K,
      forEach: function (_, Y, te) {
        K(
          _,
          function () {
            Y.apply(this, arguments);
          },
          te,
        );
      },
      count: function (_) {
        var Y = 0;
        return (
          K(_, function () {
            Y++;
          }),
          Y
        );
      },
      toArray: function (_) {
        return (
          K(_, function (Y) {
            return Y;
          }) || []
        );
      },
      only: function (_) {
        if (!F(_))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return _;
      },
    }),
    (Ve.Component = R),
    (Ve.Fragment = i),
    (Ve.Profiler = u),
    (Ve.PureComponent = L),
    (Ve.StrictMode = s),
    (Ve.Suspense = p),
    (Ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G),
    (Ve.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (Ve.cache = function (_) {
      return function () {
        return _.apply(null, arguments);
      };
    }),
    (Ve.cloneElement = function (_, Y, te) {
      if (_ == null)
        throw Error(
          "The argument must be a React element, but you passed " + _ + ".",
        );
      var ne = T({}, _.props),
        J = _.key,
        Re = void 0;
      if (Y != null)
        for (Te in (Y.ref !== void 0 && (Re = void 0),
        Y.key !== void 0 && (J = "" + Y.key),
        Y))
          !le.call(Y, Te) ||
            Te === "key" ||
            Te === "__self" ||
            Te === "__source" ||
            (Te === "ref" && Y.ref === void 0) ||
            (ne[Te] = Y[Te]);
      var Te = arguments.length - 2;
      if (Te === 1) ne.children = te;
      else if (1 < Te) {
        for (var Ue = Array(Te), je = 0; je < Te; je++)
          Ue[je] = arguments[je + 2];
        ne.children = Ue;
      }
      return we(_.type, J, void 0, void 0, Re, ne);
    }),
    (Ve.createContext = function (_) {
      return (
        (_ = {
          $$typeof: d,
          _currentValue: _,
          _currentValue2: _,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (_.Provider = _),
        (_.Consumer = { $$typeof: c, _context: _ }),
        _
      );
    }),
    (Ve.createElement = function (_, Y, te) {
      var ne,
        J = {},
        Re = null;
      if (Y != null)
        for (ne in (Y.key !== void 0 && (Re = "" + Y.key), Y))
          le.call(Y, ne) &&
            ne !== "key" &&
            ne !== "__self" &&
            ne !== "__source" &&
            (J[ne] = Y[ne]);
      var Te = arguments.length - 2;
      if (Te === 1) J.children = te;
      else if (1 < Te) {
        for (var Ue = Array(Te), je = 0; je < Te; je++)
          Ue[je] = arguments[je + 2];
        J.children = Ue;
      }
      if (_ && _.defaultProps)
        for (ne in ((Te = _.defaultProps), Te))
          J[ne] === void 0 && (J[ne] = Te[ne]);
      return we(_, Re, void 0, void 0, null, J);
    }),
    (Ve.createRef = function () {
      return { current: null };
    }),
    (Ve.forwardRef = function (_) {
      return { $$typeof: h, render: _ };
    }),
    (Ve.isValidElement = F),
    (Ve.lazy = function (_) {
      return { $$typeof: g, _payload: { _status: -1, _result: _ }, _init: oe };
    }),
    (Ve.memo = function (_, Y) {
      return { $$typeof: m, type: _, compare: Y === void 0 ? null : Y };
    }),
    (Ve.startTransition = function (_) {
      var Y = G.T,
        te = {};
      G.T = te;
      try {
        var ne = _(),
          J = G.S;
        J !== null && J(te, ne),
          typeof ne == "object" &&
            ne !== null &&
            typeof ne.then == "function" &&
            ne.then(ce, ee);
      } catch (Re) {
        ee(Re);
      } finally {
        G.T = Y;
      }
    }),
    (Ve.unstable_useCacheRefresh = function () {
      return G.H.useCacheRefresh();
    }),
    (Ve.use = function (_) {
      return G.H.use(_);
    }),
    (Ve.useActionState = function (_, Y, te) {
      return G.H.useActionState(_, Y, te);
    }),
    (Ve.useCallback = function (_, Y) {
      return G.H.useCallback(_, Y);
    }),
    (Ve.useContext = function (_) {
      return G.H.useContext(_);
    }),
    (Ve.useDebugValue = function () {}),
    (Ve.useDeferredValue = function (_, Y) {
      return G.H.useDeferredValue(_, Y);
    }),
    (Ve.useEffect = function (_, Y) {
      return G.H.useEffect(_, Y);
    }),
    (Ve.useId = function () {
      return G.H.useId();
    }),
    (Ve.useImperativeHandle = function (_, Y, te) {
      return G.H.useImperativeHandle(_, Y, te);
    }),
    (Ve.useInsertionEffect = function (_, Y) {
      return G.H.useInsertionEffect(_, Y);
    }),
    (Ve.useLayoutEffect = function (_, Y) {
      return G.H.useLayoutEffect(_, Y);
    }),
    (Ve.useMemo = function (_, Y) {
      return G.H.useMemo(_, Y);
    }),
    (Ve.useOptimistic = function (_, Y) {
      return G.H.useOptimistic(_, Y);
    }),
    (Ve.useReducer = function (_, Y, te) {
      return G.H.useReducer(_, Y, te);
    }),
    (Ve.useRef = function (_) {
      return G.H.useRef(_);
    }),
    (Ve.useState = function (_) {
      return G.H.useState(_);
    }),
    (Ve.useSyncExternalStore = function (_, Y, te) {
      return G.H.useSyncExternalStore(_, Y, te);
    }),
    (Ve.useTransition = function () {
      return G.H.useTransition();
    }),
    (Ve.version = "19.0.0"),
    Ve
  );
}
var kg;
function Nh() {
  return kg || ((kg = 1), (Ld.exports = rS())), Ld.exports;
}
var N = Nh();
const X = Xv(N);
var Bd = { exports: {} },
  Ql = {},
  Hd = { exports: {} },
  Vd = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jg;
function iS() {
  return (
    jg ||
      ((jg = 1),
      (function (a) {
        function n(K, oe) {
          var ee = K.length;
          K.push(oe);
          e: for (; 0 < ee; ) {
            var ce = (ee - 1) >>> 1,
              _ = K[ce];
            if (0 < u(_, oe)) (K[ce] = oe), (K[ee] = _), (ee = ce);
            else break e;
          }
        }
        function i(K) {
          return K.length === 0 ? null : K[0];
        }
        function s(K) {
          if (K.length === 0) return null;
          var oe = K[0],
            ee = K.pop();
          if (ee !== oe) {
            K[0] = ee;
            e: for (var ce = 0, _ = K.length, Y = _ >>> 1; ce < Y; ) {
              var te = 2 * (ce + 1) - 1,
                ne = K[te],
                J = te + 1,
                Re = K[J];
              if (0 > u(ne, ee))
                J < _ && 0 > u(Re, ne)
                  ? ((K[ce] = Re), (K[J] = ee), (ce = J))
                  : ((K[ce] = ne), (K[te] = ee), (ce = te));
              else if (J < _ && 0 > u(Re, ee))
                (K[ce] = Re), (K[J] = ee), (ce = J);
              else break e;
            }
          }
          return oe;
        }
        function u(K, oe) {
          var ee = K.sortIndex - oe.sortIndex;
          return ee !== 0 ? ee : K.id - oe.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var c = performance;
          a.unstable_now = function () {
            return c.now();
          };
        } else {
          var d = Date,
            h = d.now();
          a.unstable_now = function () {
            return d.now() - h;
          };
        }
        var p = [],
          m = [],
          g = 1,
          x = null,
          A = 3,
          b = !1,
          T = !1,
          O = !1,
          R = typeof setTimeout == "function" ? setTimeout : null,
          j = typeof clearTimeout == "function" ? clearTimeout : null,
          L = typeof setImmediate < "u" ? setImmediate : null;
        function V(K) {
          for (var oe = i(m); oe !== null; ) {
            if (oe.callback === null) s(m);
            else if (oe.startTime <= K)
              s(m), (oe.sortIndex = oe.expirationTime), n(p, oe);
            else break;
            oe = i(m);
          }
        }
        function se(K) {
          if (((O = !1), V(K), !T))
            if (i(p) !== null) (T = !0), be();
            else {
              var oe = i(m);
              oe !== null && ze(se, oe.startTime - K);
            }
        }
        var G = !1,
          le = -1,
          we = 5,
          Se = -1;
        function F() {
          return !(a.unstable_now() - Se < we);
        }
        function pe() {
          if (G) {
            var K = a.unstable_now();
            Se = K;
            var oe = !0;
            try {
              e: {
                (T = !1), O && ((O = !1), j(le), (le = -1)), (b = !0);
                var ee = A;
                try {
                  t: {
                    for (
                      V(K), x = i(p);
                      x !== null && !(x.expirationTime > K && F());

                    ) {
                      var ce = x.callback;
                      if (typeof ce == "function") {
                        (x.callback = null), (A = x.priorityLevel);
                        var _ = ce(x.expirationTime <= K);
                        if (((K = a.unstable_now()), typeof _ == "function")) {
                          (x.callback = _), V(K), (oe = !0);
                          break t;
                        }
                        x === i(p) && s(p), V(K);
                      } else s(p);
                      x = i(p);
                    }
                    if (x !== null) oe = !0;
                    else {
                      var Y = i(m);
                      Y !== null && ze(se, Y.startTime - K), (oe = !1);
                    }
                  }
                  break e;
                } finally {
                  (x = null), (A = ee), (b = !1);
                }
                oe = void 0;
              }
            } finally {
              oe ? Fe() : (G = !1);
            }
          }
        }
        var Fe;
        if (typeof L == "function")
          Fe = function () {
            L(pe);
          };
        else if (typeof MessageChannel < "u") {
          var ye = new MessageChannel(),
            Ae = ye.port2;
          (ye.port1.onmessage = pe),
            (Fe = function () {
              Ae.postMessage(null);
            });
        } else
          Fe = function () {
            R(pe, 0);
          };
        function be() {
          G || ((G = !0), Fe());
        }
        function ze(K, oe) {
          le = R(function () {
            K(a.unstable_now());
          }, oe);
        }
        (a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (K) {
            K.callback = null;
          }),
          (a.unstable_continueExecution = function () {
            T || b || ((T = !0), be());
          }),
          (a.unstable_forceFrameRate = function (K) {
            0 > K || 125 < K
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (we = 0 < K ? Math.floor(1e3 / K) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return A;
          }),
          (a.unstable_getFirstCallbackNode = function () {
            return i(p);
          }),
          (a.unstable_next = function (K) {
            switch (A) {
              case 1:
              case 2:
              case 3:
                var oe = 3;
                break;
              default:
                oe = A;
            }
            var ee = A;
            A = oe;
            try {
              return K();
            } finally {
              A = ee;
            }
          }),
          (a.unstable_pauseExecution = function () {}),
          (a.unstable_requestPaint = function () {}),
          (a.unstable_runWithPriority = function (K, oe) {
            switch (K) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                K = 3;
            }
            var ee = A;
            A = K;
            try {
              return oe();
            } finally {
              A = ee;
            }
          }),
          (a.unstable_scheduleCallback = function (K, oe, ee) {
            var ce = a.unstable_now();
            switch (
              (typeof ee == "object" && ee !== null
                ? ((ee = ee.delay),
                  (ee = typeof ee == "number" && 0 < ee ? ce + ee : ce))
                : (ee = ce),
              K)
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
              (_ = ee + _),
              (K = {
                id: g++,
                callback: oe,
                priorityLevel: K,
                startTime: ee,
                expirationTime: _,
                sortIndex: -1,
              }),
              ee > ce
                ? ((K.sortIndex = ee),
                  n(m, K),
                  i(p) === null &&
                    K === i(m) &&
                    (O ? (j(le), (le = -1)) : (O = !0), ze(se, ee - ce)))
                : ((K.sortIndex = _), n(p, K), T || b || ((T = !0), be())),
              K
            );
          }),
          (a.unstable_shouldYield = F),
          (a.unstable_wrapCallback = function (K) {
            var oe = A;
            return function () {
              var ee = A;
              A = oe;
              try {
                return K.apply(this, arguments);
              } finally {
                A = ee;
              }
            };
          });
      })(Vd)),
    Vd
  );
}
var Lg;
function sS() {
  return Lg || ((Lg = 1), (Hd.exports = iS())), Hd.exports;
}
var qd = { exports: {} },
  Gt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bg;
function lS() {
  if (Bg) return Gt;
  Bg = 1;
  var a = Nh();
  function n(p) {
    var m = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        m += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function i() {}
  var s = {
      d: {
        f: i,
        r: function () {
          throw Error(n(522));
        },
        D: i,
        C: i,
        L: i,
        m: i,
        X: i,
        S: i,
        M: i,
      },
      p: 0,
      findDOMNode: null,
    },
    u = Symbol.for("react.portal");
  function c(p, m, g) {
    var x =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: x == null ? null : "" + x,
      children: p,
      containerInfo: m,
      implementation: g,
    };
  }
  var d = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(p, m) {
    if (p === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (Gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (Gt.createPortal = function (p, m) {
      var g =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(n(299));
      return c(p, m, null, g);
    }),
    (Gt.flushSync = function (p) {
      var m = d.T,
        g = s.p;
      try {
        if (((d.T = null), (s.p = 2), p)) return p();
      } finally {
        (d.T = m), (s.p = g), s.d.f();
      }
    }),
    (Gt.preconnect = function (p, m) {
      typeof p == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        s.d.C(p, m));
    }),
    (Gt.prefetchDNS = function (p) {
      typeof p == "string" && s.d.D(p);
    }),
    (Gt.preinit = function (p, m) {
      if (typeof p == "string" && m && typeof m.as == "string") {
        var g = m.as,
          x = h(g, m.crossOrigin),
          A = typeof m.integrity == "string" ? m.integrity : void 0,
          b = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        g === "style"
          ? s.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: x,
              integrity: A,
              fetchPriority: b,
            })
          : g === "script" &&
            s.d.X(p, {
              crossOrigin: x,
              integrity: A,
              fetchPriority: b,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (Gt.preinitModule = function (p, m) {
      if (typeof p == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var g = h(m.as, m.crossOrigin);
            s.d.M(p, {
              crossOrigin: g,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && s.d.M(p);
    }),
    (Gt.preload = function (p, m) {
      if (
        typeof p == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var g = m.as,
          x = h(g, m.crossOrigin);
        s.d.L(p, g, {
          crossOrigin: x,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (Gt.preloadModule = function (p, m) {
      if (typeof p == "string")
        if (m) {
          var g = h(m.as, m.crossOrigin);
          s.d.m(p, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: g,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else s.d.m(p);
    }),
    (Gt.requestFormReset = function (p) {
      s.d.r(p);
    }),
    (Gt.unstable_batchedUpdates = function (p, m) {
      return p(m);
    }),
    (Gt.useFormState = function (p, m, g) {
      return d.H.useFormState(p, m, g);
    }),
    (Gt.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (Gt.version = "19.0.0"),
    Gt
  );
}
var Hg;
function Kv() {
  if (Hg) return qd.exports;
  Hg = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (n) {
        console.error(n);
      }
  }
  return a(), (qd.exports = lS()), qd.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vg;
function uS() {
  if (Vg) return Ql;
  Vg = 1;
  var a = sS(),
    n = Nh(),
    i = Kv();
  function s(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var r = 2; r < arguments.length; r++)
        t += "&args[]=" + encodeURIComponent(arguments[r]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  var c = Symbol.for("react.element"),
    d = Symbol.for("react.transitional.element"),
    h = Symbol.for("react.portal"),
    p = Symbol.for("react.fragment"),
    m = Symbol.for("react.strict_mode"),
    g = Symbol.for("react.profiler"),
    x = Symbol.for("react.provider"),
    A = Symbol.for("react.consumer"),
    b = Symbol.for("react.context"),
    T = Symbol.for("react.forward_ref"),
    O = Symbol.for("react.suspense"),
    R = Symbol.for("react.suspense_list"),
    j = Symbol.for("react.memo"),
    L = Symbol.for("react.lazy"),
    V = Symbol.for("react.offscreen"),
    se = Symbol.for("react.memo_cache_sentinel"),
    G = Symbol.iterator;
  function le(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (G && e[G]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var we = Symbol.for("react.client.reference");
  function Se(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === we ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case p:
        return "Fragment";
      case h:
        return "Portal";
      case g:
        return "Profiler";
      case m:
        return "StrictMode";
      case O:
        return "Suspense";
      case R:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case b:
          return (e.displayName || "Context") + ".Provider";
        case A:
          return (e._context.displayName || "Context") + ".Consumer";
        case T:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case j:
          return (
            (t = e.displayName || null), t !== null ? t : Se(e.type) || "Memo"
          );
        case L:
          (t = e._payload), (e = e._init);
          try {
            return Se(e(t));
          } catch {}
      }
    return null;
  }
  var F = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    pe = Object.assign,
    Fe,
    ye;
  function Ae(e) {
    if (Fe === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        (Fe = (t && t[1]) || ""),
          (ye =
            -1 <
            r.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < r.stack.indexOf("@")
                ? "@unknown:0:0"
                : "");
      }
    return (
      `
` +
      Fe +
      e +
      ye
    );
  }
  var be = !1;
  function ze(e, t) {
    if (!e || be) return "";
    be = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var $ = function () {
                throw Error();
              };
              if (
                (Object.defineProperty($.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct($, []);
                } catch (q) {
                  var k = q;
                }
                Reflect.construct(e, [], $);
              } else {
                try {
                  $.call();
                } catch (q) {
                  k = q;
                }
                e.call($.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (q) {
                k = q;
              }
              ($ = e()) &&
                typeof $.catch == "function" &&
                $.catch(function () {});
            }
          } catch (q) {
            if (q && k && typeof q.stack == "string") return [q.stack, k.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name",
      );
      o &&
        o.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var f = l.DetermineComponentFrameRoot(),
        y = f[0],
        v = f[1];
      if (y && v) {
        var S = y.split(`
`),
          D = v.split(`
`);
        for (
          o = l = 0;
          l < S.length && !S[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; o < D.length && !D[o].includes("DetermineComponentFrameRoot"); )
          o++;
        if (l === S.length || o === D.length)
          for (
            l = S.length - 1, o = D.length - 1;
            1 <= l && 0 <= o && S[l] !== D[o];

          )
            o--;
        for (; 1 <= l && 0 <= o; l--, o--)
          if (S[l] !== D[o]) {
            if (l !== 1 || o !== 1)
              do
                if ((l--, o--, 0 > o || S[l] !== D[o])) {
                  var Z =
                    `
` + S[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      Z.includes("<anonymous>") &&
                      (Z = Z.replace("<anonymous>", e.displayName)),
                    Z
                  );
                }
              while (1 <= l && 0 <= o);
            break;
          }
      }
    } finally {
      (be = !1), (Error.prepareStackTrace = r);
    }
    return (r = e ? e.displayName || e.name : "") ? Ae(r) : "";
  }
  function K(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ae(e.type);
      case 16:
        return Ae("Lazy");
      case 13:
        return Ae("Suspense");
      case 19:
        return Ae("SuspenseList");
      case 0:
      case 15:
        return (e = ze(e.type, !1)), e;
      case 11:
        return (e = ze(e.type.render, !1)), e;
      case 1:
        return (e = ze(e.type, !0)), e;
      default:
        return "";
    }
  }
  function oe(e) {
    try {
      var t = "";
      do (t += K(e)), (e = e.return);
      while (e);
      return t;
    } catch (r) {
      return (
        `
Error generating stack: ` +
        r.message +
        `
` +
        r.stack
      );
    }
  }
  function ee(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function ce(e) {
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
  function _(e) {
    if (ee(e) !== e) throw Error(s(188));
  }
  function Y(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = ee(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var r = e, l = t; ; ) {
      var o = r.return;
      if (o === null) break;
      var f = o.alternate;
      if (f === null) {
        if (((l = o.return), l !== null)) {
          r = l;
          continue;
        }
        break;
      }
      if (o.child === f.child) {
        for (f = o.child; f; ) {
          if (f === r) return _(o), e;
          if (f === l) return _(o), t;
          f = f.sibling;
        }
        throw Error(s(188));
      }
      if (r.return !== l.return) (r = o), (l = f);
      else {
        for (var y = !1, v = o.child; v; ) {
          if (v === r) {
            (y = !0), (r = o), (l = f);
            break;
          }
          if (v === l) {
            (y = !0), (l = o), (r = f);
            break;
          }
          v = v.sibling;
        }
        if (!y) {
          for (v = f.child; v; ) {
            if (v === r) {
              (y = !0), (r = f), (l = o);
              break;
            }
            if (v === l) {
              (y = !0), (l = f), (r = o);
              break;
            }
            v = v.sibling;
          }
          if (!y) throw Error(s(189));
        }
      }
      if (r.alternate !== l) throw Error(s(190));
    }
    if (r.tag !== 3) throw Error(s(188));
    return r.stateNode.current === r ? e : t;
  }
  function te(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = te(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var ne = Array.isArray,
    J = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Re = { pending: !1, data: null, method: null, action: null },
    Te = [],
    Ue = -1;
  function je(e) {
    return { current: e };
  }
  function Je(e) {
    0 > Ue || ((e.current = Te[Ue]), (Te[Ue] = null), Ue--);
  }
  function nt(e, t) {
    Ue++, (Te[Ue] = e.current), (e.current = t);
  }
  var Ct = je(null),
    Zn = je(null),
    sn = je(null),
    wa = je(null);
  function Br(e, t) {
    switch ((nt(sn, t), nt(Zn, e), nt(Ct, null), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) && (t = t.namespaceURI) ? sg(t) : 0;
        break;
      default:
        if (
          ((e = e === 8 ? t.parentNode : t),
          (t = e.tagName),
          (e = e.namespaceURI))
        )
          (e = sg(e)), (t = lg(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    Je(Ct), nt(Ct, t);
  }
  function ra() {
    Je(Ct), Je(Zn), Je(sn);
  }
  function Di(e) {
    e.memoizedState !== null && nt(wa, e);
    var t = Ct.current,
      r = lg(t, e.type);
    t !== r && (nt(Zn, e), nt(Ct, r));
  }
  function E(e) {
    Zn.current === e && (Je(Ct), Je(Zn)),
      wa.current === e && (Je(wa), (Bl._currentValue = Re));
  }
  var U = Object.prototype.hasOwnProperty,
    H = a.unstable_scheduleCallback,
    re = a.unstable_cancelCallback,
    ae = a.unstable_shouldYield,
    W = a.unstable_requestPaint,
    ge = a.unstable_now,
    Le = a.unstable_getCurrentPriorityLevel,
    Pe = a.unstable_ImmediatePriority,
    st = a.unstable_UserBlockingPriority,
    $t = a.unstable_NormalPriority,
    $s = a.unstable_LowPriority,
    Yn = a.unstable_IdlePriority,
    Hr = a.log,
    Mi = a.unstable_setDisableYieldValue,
    Rn = null,
    gt = null;
  function Vr(e) {
    if (gt && typeof gt.onCommitFiberRoot == "function")
      try {
        gt.onCommitFiberRoot(Rn, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  function Jt(e) {
    if (
      (typeof Hr == "function" && Mi(e),
      gt && typeof gt.setStrictMode == "function")
    )
      try {
        gt.setStrictMode(Rn, e);
      } catch {}
  }
  var Pt = Math.clz32 ? Math.clz32 : Mu,
    Cc = Math.log,
    Du = Math.LN2;
  function Mu(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Cc(e) / Du) | 0)) | 0;
  }
  var Ni = 128,
    Pa = 4194304;
  function Zt(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
        return 64;
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
        return e & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function zi(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var l = 0,
      o = e.suspendedLanes,
      f = e.pingedLanes,
      y = e.warmLanes;
    e = e.finishedLanes !== 0;
    var v = r & 134217727;
    return (
      v !== 0
        ? ((r = v & ~o),
          r !== 0
            ? (l = Zt(r))
            : ((f &= v),
              f !== 0
                ? (l = Zt(f))
                : e || ((y = v & ~y), y !== 0 && (l = Zt(y)))))
        : ((v = r & ~o),
          v !== 0
            ? (l = Zt(v))
            : f !== 0
              ? (l = Zt(f))
              : e || ((y = r & ~y), y !== 0 && (l = Zt(y)))),
      l === 0
        ? 0
        : t !== 0 &&
            t !== l &&
            !(t & o) &&
            ((o = l & -l),
            (y = t & -t),
            o >= y || (o === 32 && (y & 4194176) !== 0))
          ? t
          : l
    );
  }
  function De(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function at(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
        return t + 250;
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
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ot() {
    var e = Ni;
    return (Ni <<= 1), !(Ni & 4194176) && (Ni = 128), e;
  }
  function ln() {
    var e = Pa;
    return (Pa <<= 1), !(Pa & 62914560) && (Pa = 4194304), e;
  }
  function Wt(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function un(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Ea(e, t, r, l, o, f) {
    var y = e.pendingLanes;
    (e.pendingLanes = r),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= r),
      (e.entangledLanes &= r),
      (e.errorRecoveryDisabledLanes &= r),
      (e.shellSuspendCounter = 0);
    var v = e.entanglements,
      S = e.expirationTimes,
      D = e.hiddenUpdates;
    for (r = y & ~r; 0 < r; ) {
      var Z = 31 - Pt(r),
        $ = 1 << Z;
      (v[Z] = 0), (S[Z] = -1);
      var k = D[Z];
      if (k !== null)
        for (D[Z] = null, Z = 0; Z < k.length; Z++) {
          var q = k[Z];
          q !== null && (q.lane &= -536870913);
        }
      r &= ~$;
    }
    l !== 0 && on(e, l, 0),
      f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(y & ~t));
  }
  function on(e, t, r) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var l = 31 - Pt(t);
    (e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (r & 4194218));
  }
  function Qn(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var l = 31 - Pt(r),
        o = 1 << l;
      (o & t) | (e[l] & t) && (e[l] |= t), (r &= ~o);
    }
  }
  function nm(e) {
    return (
      (e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
    );
  }
  function am() {
    var e = J.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Tg(e.type));
  }
  function F0(e, t) {
    var r = J.p;
    try {
      return (J.p = e), t();
    } finally {
      J.p = r;
    }
  }
  var Wa = Math.random().toString(36).slice(2),
    Yt = "__reactFiber$" + Wa,
    cn = "__reactProps$" + Wa,
    Ui = "__reactContainer$" + Wa,
    Dc = "__reactEvents$" + Wa,
    X0 = "__reactListeners$" + Wa,
    K0 = "__reactHandles$" + Wa,
    rm = "__reactResources$" + Wa,
    Js = "__reactMarker$" + Wa;
  function Mc(e) {
    delete e[Yt], delete e[cn], delete e[Dc], delete e[X0], delete e[K0];
  }
  function qr(e) {
    var t = e[Yt];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[Ui] || r[Yt])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = cg(e); e !== null; ) {
            if ((r = e[Yt])) return r;
            e = cg(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function ki(e) {
    if ((e = e[Yt] || e[Ui])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Ps(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function ji(e) {
    var t = e[rm];
    return (
      t ||
        (t = e[rm] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Ut(e) {
    e[Js] = !0;
  }
  var im = new Set(),
    sm = {};
  function Zr(e, t) {
    Li(e, t), Li(e + "Capture", t);
  }
  function Li(e, t) {
    for (sm[e] = t, e = 0; e < t.length; e++) im.add(t[e]);
  }
  var Ta = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    $0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    lm = {},
    um = {};
  function J0(e) {
    return U.call(um, e)
      ? !0
      : U.call(lm, e)
        ? !1
        : $0.test(e)
          ? (um[e] = !0)
          : ((lm[e] = !0), !1);
  }
  function Nu(e, t, r) {
    if (J0(t))
      if (r === null) e.removeAttribute(t);
      else {
        switch (typeof r) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + r);
      }
  }
  function zu(e, t, r) {
    if (r === null) e.removeAttribute(t);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + r);
    }
  }
  function Ra(e, t, r, l) {
    if (l === null) e.removeAttribute(r);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(r);
          return;
      }
      e.setAttributeNS(t, r, "" + l);
    }
  }
  function An(e) {
    switch (typeof e) {
      case "bigint":
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
  function om(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function P0(e) {
    var t = om(e) ? "checked" : "value",
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var o = r.get,
        f = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return o.call(this);
          },
          set: function (y) {
            (l = "" + y), f.call(this, y);
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (y) {
            l = "" + y;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Uu(e) {
    e._valueTracker || (e._valueTracker = P0(e));
  }
  function cm(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      l = "";
    return (
      e && (l = om(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function ku(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var W0 = /[\n"\\]/g;
  function On(e) {
    return e.replace(W0, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Nc(e, t, r, l, o, f, y, v) {
    (e.name = ""),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (e.type = y)
        : e.removeAttribute("type"),
      t != null
        ? y === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + An(t))
          : e.value !== "" + An(t) && (e.value = "" + An(t))
        : (y !== "submit" && y !== "reset") || e.removeAttribute("value"),
      t != null
        ? zc(e, y, An(t))
        : r != null
          ? zc(e, y, An(r))
          : l != null && e.removeAttribute("value"),
      o == null && f != null && (e.defaultChecked = !!f),
      o != null &&
        (e.checked = o && typeof o != "function" && typeof o != "symbol"),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (e.name = "" + An(v))
        : e.removeAttribute("name");
  }
  function fm(e, t, r, l, o, f, y, v) {
    if (
      (f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (e.type = f),
      t != null || r != null)
    ) {
      if (!((f !== "submit" && f !== "reset") || t != null)) return;
      (r = r != null ? "" + An(r) : ""),
        (t = t != null ? "" + An(t) : r),
        v || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (l = l ?? o),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = v ? e.checked : !!l),
      (e.defaultChecked = !!l),
      y != null &&
        typeof y != "function" &&
        typeof y != "symbol" &&
        typeof y != "boolean" &&
        (e.name = y);
  }
  function zc(e, t, r) {
    (t === "number" && ku(e.ownerDocument) === e) ||
      e.defaultValue === "" + r ||
      (e.defaultValue = "" + r);
  }
  function Bi(e, t, r, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var o = 0; o < r.length; o++) t["$" + r[o]] = !0;
      for (r = 0; r < e.length; r++)
        (o = t.hasOwnProperty("$" + e[r].value)),
          e[r].selected !== o && (e[r].selected = o),
          o && l && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + An(r), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === r) {
          (e[o].selected = !0), l && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function dm(e, t, r) {
    if (
      t != null &&
      ((t = "" + An(t)), t !== e.value && (e.value = t), r == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = r != null ? "" + An(r) : "";
  }
  function hm(e, t, r, l) {
    if (t == null) {
      if (l != null) {
        if (r != null) throw Error(s(92));
        if (ne(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), (t = r);
    }
    (r = An(t)),
      (e.defaultValue = r),
      (l = e.textContent),
      l === r && l !== "" && l !== null && (e.value = l);
  }
  function Hi(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var I0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function mm(e, t, r) {
    var l = t.indexOf("--") === 0;
    r == null || typeof r == "boolean" || r === ""
      ? l
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : l
        ? e.setProperty(t, r)
        : typeof r != "number" || r === 0 || I0.has(t)
          ? t === "float"
            ? (e.cssFloat = r)
            : (e[t] = ("" + r).trim())
          : (e[t] = r + "px");
  }
  function pm(e, t, r) {
    if (t != null && typeof t != "object") throw Error(s(62));
    if (((e = e.style), r != null)) {
      for (var l in r)
        !r.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? e.setProperty(l, "")
            : l === "float"
              ? (e.cssFloat = "")
              : (e[l] = ""));
      for (var o in t)
        (l = t[o]), t.hasOwnProperty(o) && r[o] !== l && mm(e, o, l);
    } else for (var f in t) t.hasOwnProperty(f) && mm(e, f, t[f]);
  }
  function Uc(e) {
    if (e.indexOf("-") === -1) return !1;
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
  var e1 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    t1 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ju(e) {
    return t1.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var kc = null;
  function jc(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Vi = null,
    qi = null;
  function ym(e) {
    var t = ki(e);
    if (t && (e = t.stateNode)) {
      var r = e[cn] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Nc(
              e,
              r.value,
              r.defaultValue,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
            ),
            (t = r.name),
            r.type === "radio" && t != null)
          ) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                'input[name="' + On("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var l = r[t];
              if (l !== e && l.form === e.form) {
                var o = l[cn] || null;
                if (!o) throw Error(s(90));
                Nc(
                  l,
                  o.value,
                  o.defaultValue,
                  o.defaultValue,
                  o.checked,
                  o.defaultChecked,
                  o.type,
                  o.name,
                );
              }
            }
            for (t = 0; t < r.length; t++)
              (l = r[t]), l.form === e.form && cm(l);
          }
          break e;
        case "textarea":
          dm(e, r.value, r.defaultValue);
          break e;
        case "select":
          (t = r.value), t != null && Bi(e, !!r.multiple, t, !1);
      }
    }
  }
  var Lc = !1;
  function gm(e, t, r) {
    if (Lc) return e(t, r);
    Lc = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((Lc = !1),
        (Vi !== null || qi !== null) &&
          (xo(), Vi && ((t = Vi), (e = qi), (qi = Vi = null), ym(t), e)))
      )
        for (t = 0; t < e.length; t++) ym(e[t]);
    }
  }
  function Ws(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var l = r[cn] || null;
    if (l === null) return null;
    r = l[t];
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
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(s(231, t, typeof r));
    return r;
  }
  var Bc = !1;
  if (Ta)
    try {
      var Is = {};
      Object.defineProperty(Is, "passive", {
        get: function () {
          Bc = !0;
        },
      }),
        window.addEventListener("test", Is, Is),
        window.removeEventListener("test", Is, Is);
    } catch {
      Bc = !1;
    }
  var Ia = null,
    Hc = null,
    Lu = null;
  function vm() {
    if (Lu) return Lu;
    var e,
      t = Hc,
      r = t.length,
      l,
      o = "value" in Ia ? Ia.value : Ia.textContent,
      f = o.length;
    for (e = 0; e < r && t[e] === o[e]; e++);
    var y = r - e;
    for (l = 1; l <= y && t[r - l] === o[f - l]; l++);
    return (Lu = o.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Bu(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Hu() {
    return !0;
  }
  function bm() {
    return !1;
  }
  function fn(e) {
    function t(r, l, o, f, y) {
      (this._reactName = r),
        (this._targetInst = o),
        (this.type = l),
        (this.nativeEvent = f),
        (this.target = y),
        (this.currentTarget = null);
      for (var v in e)
        e.hasOwnProperty(v) && ((r = e[v]), (this[v] = r ? r(f) : f[v]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? Hu
          : bm),
        (this.isPropagationStopped = bm),
        this
      );
    }
    return (
      pe(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = Hu));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = Hu));
        },
        persist: function () {},
        isPersistent: Hu,
      }),
      t
    );
  }
  var Yr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Vu = fn(Yr),
    el = pe({}, Yr, { view: 0, detail: 0 }),
    n1 = fn(el),
    Vc,
    qc,
    tl,
    qu = pe({}, el, {
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
      getModifierState: Yc,
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
          : (e !== tl &&
              (tl && e.type === "mousemove"
                ? ((Vc = e.screenX - tl.screenX), (qc = e.screenY - tl.screenY))
                : (qc = Vc = 0),
              (tl = e)),
            Vc);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : qc;
      },
    }),
    xm = fn(qu),
    a1 = pe({}, qu, { dataTransfer: 0 }),
    r1 = fn(a1),
    i1 = pe({}, el, { relatedTarget: 0 }),
    Zc = fn(i1),
    s1 = pe({}, Yr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    l1 = fn(s1),
    u1 = pe({}, Yr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    o1 = fn(u1),
    c1 = pe({}, Yr, { data: 0 }),
    Sm = fn(c1),
    f1 = {
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
    d1 = {
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
    h1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function m1(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = h1[e])
        ? !!t[e]
        : !1;
  }
  function Yc() {
    return m1;
  }
  var p1 = pe({}, el, {
      key: function (e) {
        if (e.key) {
          var t = f1[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Bu(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? d1[e.keyCode] || "Unidentified"
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
      getModifierState: Yc,
      charCode: function (e) {
        return e.type === "keypress" ? Bu(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Bu(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    y1 = fn(p1),
    g1 = pe({}, qu, {
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
    _m = fn(g1),
    v1 = pe({}, el, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Yc,
    }),
    b1 = fn(v1),
    x1 = pe({}, Yr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    S1 = fn(x1),
    _1 = pe({}, qu, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
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
    w1 = fn(_1),
    E1 = pe({}, Yr, { newState: 0, oldState: 0 }),
    T1 = fn(E1),
    R1 = [9, 13, 27, 32],
    Qc = Ta && "CompositionEvent" in window,
    nl = null;
  Ta && "documentMode" in document && (nl = document.documentMode);
  var A1 = Ta && "TextEvent" in window && !nl,
    wm = Ta && (!Qc || (nl && 8 < nl && 11 >= nl)),
    Em = " ",
    Tm = !1;
  function Rm(e, t) {
    switch (e) {
      case "keyup":
        return R1.indexOf(t.keyCode) !== -1;
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
  function Am(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Zi = !1;
  function O1(e, t) {
    switch (e) {
      case "compositionend":
        return Am(t);
      case "keypress":
        return t.which !== 32 ? null : ((Tm = !0), Em);
      case "textInput":
        return (e = t.data), e === Em && Tm ? null : e;
      default:
        return null;
    }
  }
  function C1(e, t) {
    if (Zi)
      return e === "compositionend" || (!Qc && Rm(e, t))
        ? ((e = vm()), (Lu = Hc = Ia = null), (Zi = !1), e)
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
        return wm && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var D1 = {
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
  function Om(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!D1[e.type] : t === "textarea";
  }
  function Cm(e, t, r, l) {
    Vi ? (qi ? qi.push(l) : (qi = [l])) : (Vi = l),
      (t = To(t, "onChange")),
      0 < t.length &&
        ((r = new Vu("onChange", "change", null, r, l)),
        e.push({ event: r, listeners: t }));
  }
  var al = null,
    rl = null;
  function M1(e) {
    tg(e, 0);
  }
  function Zu(e) {
    var t = Ps(e);
    if (cm(t)) return e;
  }
  function Dm(e, t) {
    if (e === "change") return t;
  }
  var Mm = !1;
  if (Ta) {
    var Gc;
    if (Ta) {
      var Fc = "oninput" in document;
      if (!Fc) {
        var Nm = document.createElement("div");
        Nm.setAttribute("oninput", "return;"),
          (Fc = typeof Nm.oninput == "function");
      }
      Gc = Fc;
    } else Gc = !1;
    Mm = Gc && (!document.documentMode || 9 < document.documentMode);
  }
  function zm() {
    al && (al.detachEvent("onpropertychange", Um), (rl = al = null));
  }
  function Um(e) {
    if (e.propertyName === "value" && Zu(rl)) {
      var t = [];
      Cm(t, rl, e, jc(e)), gm(M1, t);
    }
  }
  function N1(e, t, r) {
    e === "focusin"
      ? (zm(), (al = t), (rl = r), al.attachEvent("onpropertychange", Um))
      : e === "focusout" && zm();
  }
  function z1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Zu(rl);
  }
  function U1(e, t) {
    if (e === "click") return Zu(t);
  }
  function k1(e, t) {
    if (e === "input" || e === "change") return Zu(t);
  }
  function j1(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var bn = typeof Object.is == "function" ? Object.is : j1;
  function il(e, t) {
    if (bn(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var r = Object.keys(e),
      l = Object.keys(t);
    if (r.length !== l.length) return !1;
    for (l = 0; l < r.length; l++) {
      var o = r[l];
      if (!U.call(t, o) || !bn(e[o], t[o])) return !1;
    }
    return !0;
  }
  function km(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function jm(e, t) {
    var r = km(e);
    e = 0;
    for (var l; r; ) {
      if (r.nodeType === 3) {
        if (((l = e + r.textContent.length), e <= t && l >= t))
          return { node: r, offset: t - e };
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
      r = km(r);
    }
  }
  function Lm(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Lm(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Bm(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = ku(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = ku(e.document);
    }
    return t;
  }
  function Xc(e) {
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
  function L1(e, t) {
    var r = Bm(t);
    t = e.focusedElem;
    var l = e.selectionRange;
    if (
      r !== t &&
      t &&
      t.ownerDocument &&
      Lm(t.ownerDocument.documentElement, t)
    ) {
      if (l !== null && Xc(t)) {
        if (
          ((e = l.start),
          (r = l.end),
          r === void 0 && (r = e),
          "selectionStart" in t)
        )
          (t.selectionStart = e),
            (t.selectionEnd = Math.min(r, t.value.length));
        else if (
          ((r = ((e = t.ownerDocument || document) && e.defaultView) || window),
          r.getSelection)
        ) {
          r = r.getSelection();
          var o = t.textContent.length,
            f = Math.min(l.start, o);
          (l = l.end === void 0 ? f : Math.min(l.end, o)),
            !r.extend && f > l && ((o = l), (l = f), (f = o)),
            (o = jm(t, f));
          var y = jm(t, l);
          o &&
            y &&
            (r.rangeCount !== 1 ||
              r.anchorNode !== o.node ||
              r.anchorOffset !== o.offset ||
              r.focusNode !== y.node ||
              r.focusOffset !== y.offset) &&
            ((e = e.createRange()),
            e.setStart(o.node, o.offset),
            r.removeAllRanges(),
            f > l
              ? (r.addRange(e), r.extend(y.node, y.offset))
              : (e.setEnd(y.node, y.offset), r.addRange(e)));
        }
      }
      for (e = [], r = t; (r = r.parentNode); )
        r.nodeType === 1 &&
          e.push({ element: r, left: r.scrollLeft, top: r.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++)
        (r = e[t]),
          (r.element.scrollLeft = r.left),
          (r.element.scrollTop = r.top);
    }
  }
  var B1 = Ta && "documentMode" in document && 11 >= document.documentMode,
    Yi = null,
    Kc = null,
    sl = null,
    $c = !1;
  function Hm(e, t, r) {
    var l =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    $c ||
      Yi == null ||
      Yi !== ku(l) ||
      ((l = Yi),
      "selectionStart" in l && Xc(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (sl && il(sl, l)) ||
        ((sl = l),
        (l = To(Kc, "onSelect")),
        0 < l.length &&
          ((t = new Vu("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: l }),
          (t.target = Yi))));
  }
  function Qr(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
    );
  }
  var Qi = {
      animationend: Qr("Animation", "AnimationEnd"),
      animationiteration: Qr("Animation", "AnimationIteration"),
      animationstart: Qr("Animation", "AnimationStart"),
      transitionrun: Qr("Transition", "TransitionRun"),
      transitionstart: Qr("Transition", "TransitionStart"),
      transitioncancel: Qr("Transition", "TransitionCancel"),
      transitionend: Qr("Transition", "TransitionEnd"),
    },
    Jc = {},
    Vm = {};
  Ta &&
    ((Vm = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Qi.animationend.animation,
      delete Qi.animationiteration.animation,
      delete Qi.animationstart.animation),
    "TransitionEvent" in window || delete Qi.transitionend.transition);
  function Gr(e) {
    if (Jc[e]) return Jc[e];
    if (!Qi[e]) return e;
    var t = Qi[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in Vm) return (Jc[e] = t[r]);
    return e;
  }
  var qm = Gr("animationend"),
    Zm = Gr("animationiteration"),
    Ym = Gr("animationstart"),
    H1 = Gr("transitionrun"),
    V1 = Gr("transitionstart"),
    q1 = Gr("transitioncancel"),
    Qm = Gr("transitionend"),
    Gm = new Map(),
    Fm =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " ",
      );
  function Gn(e, t) {
    Gm.set(e, t), Zr(t, [e]);
  }
  var Cn = [],
    Gi = 0,
    Pc = 0;
  function Yu() {
    for (var e = Gi, t = (Pc = Gi = 0); t < e; ) {
      var r = Cn[t];
      Cn[t++] = null;
      var l = Cn[t];
      Cn[t++] = null;
      var o = Cn[t];
      Cn[t++] = null;
      var f = Cn[t];
      if (((Cn[t++] = null), l !== null && o !== null)) {
        var y = l.pending;
        y === null ? (o.next = o) : ((o.next = y.next), (y.next = o)),
          (l.pending = o);
      }
      f !== 0 && Xm(r, o, f);
    }
  }
  function Qu(e, t, r, l) {
    (Cn[Gi++] = e),
      (Cn[Gi++] = t),
      (Cn[Gi++] = r),
      (Cn[Gi++] = l),
      (Pc |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l);
  }
  function Wc(e, t, r, l) {
    return Qu(e, t, r, l), Gu(e);
  }
  function er(e, t) {
    return Qu(e, null, null, t), Gu(e);
  }
  function Xm(e, t, r) {
    e.lanes |= r;
    var l = e.alternate;
    l !== null && (l.lanes |= r);
    for (var o = !1, f = e.return; f !== null; )
      (f.childLanes |= r),
        (l = f.alternate),
        l !== null && (l.childLanes |= r),
        f.tag === 22 &&
          ((e = f.stateNode), e === null || e._visibility & 1 || (o = !0)),
        (e = f),
        (f = f.return);
    o &&
      t !== null &&
      e.tag === 3 &&
      ((f = e.stateNode),
      (o = 31 - Pt(r)),
      (f = f.hiddenUpdates),
      (e = f[o]),
      e === null ? (f[o] = [t]) : e.push(t),
      (t.lane = r | 536870912));
  }
  function Gu(e) {
    if (50 < Ml) throw ((Ml = 0), (id = null), Error(s(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var Fi = {},
    Km = new WeakMap();
  function Dn(e, t) {
    if (typeof e == "object" && e !== null) {
      var r = Km.get(e);
      return r !== void 0
        ? r
        : ((t = { value: e, source: t, stack: oe(t) }), Km.set(e, t), t);
    }
    return { value: e, source: t, stack: oe(t) };
  }
  var Xi = [],
    Ki = 0,
    Fu = null,
    Xu = 0,
    Mn = [],
    Nn = 0,
    Fr = null,
    Aa = 1,
    Oa = "";
  function Xr(e, t) {
    (Xi[Ki++] = Xu), (Xi[Ki++] = Fu), (Fu = e), (Xu = t);
  }
  function $m(e, t, r) {
    (Mn[Nn++] = Aa), (Mn[Nn++] = Oa), (Mn[Nn++] = Fr), (Fr = e);
    var l = Aa;
    e = Oa;
    var o = 32 - Pt(l) - 1;
    (l &= ~(1 << o)), (r += 1);
    var f = 32 - Pt(t) + o;
    if (30 < f) {
      var y = o - (o % 5);
      (f = (l & ((1 << y) - 1)).toString(32)),
        (l >>= y),
        (o -= y),
        (Aa = (1 << (32 - Pt(t) + o)) | (r << o) | l),
        (Oa = f + e);
    } else (Aa = (1 << f) | (r << o) | l), (Oa = e);
  }
  function Ic(e) {
    e.return !== null && (Xr(e, 1), $m(e, 1, 0));
  }
  function ef(e) {
    for (; e === Fu; )
      (Fu = Xi[--Ki]), (Xi[Ki] = null), (Xu = Xi[--Ki]), (Xi[Ki] = null);
    for (; e === Fr; )
      (Fr = Mn[--Nn]),
        (Mn[Nn] = null),
        (Oa = Mn[--Nn]),
        (Mn[Nn] = null),
        (Aa = Mn[--Nn]),
        (Mn[Nn] = null);
  }
  var It = null,
    Ht = null,
    et = !1,
    Fn = null,
    ia = !1,
    tf = Error(s(519));
  function Kr(e) {
    var t = Error(s(418, ""));
    throw (ol(Dn(t, e)), tf);
  }
  function Jm(e) {
    var t = e.stateNode,
      r = e.type,
      l = e.memoizedProps;
    switch (((t[Yt] = e), (t[cn] = l), r)) {
      case "dialog":
        Ke("cancel", t), Ke("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ke("load", t);
        break;
      case "video":
      case "audio":
        for (r = 0; r < zl.length; r++) Ke(zl[r], t);
        break;
      case "source":
        Ke("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ke("error", t), Ke("load", t);
        break;
      case "details":
        Ke("toggle", t);
        break;
      case "input":
        Ke("invalid", t),
          fm(
            t,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0,
          ),
          Uu(t);
        break;
      case "select":
        Ke("invalid", t);
        break;
      case "textarea":
        Ke("invalid", t), hm(t, l.value, l.defaultValue, l.children), Uu(t);
    }
    (r = l.children),
      (typeof r != "string" && typeof r != "number" && typeof r != "bigint") ||
      t.textContent === "" + r ||
      l.suppressHydrationWarning === !0 ||
      ig(t.textContent, r)
        ? (l.popover != null && (Ke("beforetoggle", t), Ke("toggle", t)),
          l.onScroll != null && Ke("scroll", t),
          l.onScrollEnd != null && Ke("scrollend", t),
          l.onClick != null && (t.onclick = Ro),
          (t = !0))
        : (t = !1),
      t || Kr(e);
  }
  function Pm(e) {
    for (It = e.return; It; )
      switch (It.tag) {
        case 3:
        case 27:
          ia = !0;
          return;
        case 5:
        case 13:
          ia = !1;
          return;
        default:
          It = It.return;
      }
  }
  function ll(e) {
    if (e !== It) return !1;
    if (!et) return Pm(e), (et = !0), !1;
    var t = !1,
      r;
    if (
      ((r = e.tag !== 3 && e.tag !== 27) &&
        ((r = e.tag === 5) &&
          ((r = e.type),
          (r =
            !(r !== "form" && r !== "button") || _d(e.type, e.memoizedProps))),
        (r = !r)),
      r && (t = !0),
      t && Ht && Kr(e),
      Pm(e),
      e.tag === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((r = e.data), r === "/$")) {
              if (t === 0) {
                Ht = Kn(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
          e = e.nextSibling;
        }
        Ht = null;
      }
    } else Ht = It ? Kn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ul() {
    (Ht = It = null), (et = !1);
  }
  function ol(e) {
    Fn === null ? (Fn = [e]) : Fn.push(e);
  }
  var cl = Error(s(460)),
    Wm = Error(s(474)),
    nf = { then: function () {} };
  function Im(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function Ku() {}
  function ep(e, t, r) {
    switch (
      ((r = e[r]),
      r === void 0 ? e.push(t) : r !== t && (t.then(Ku, Ku), (t = r)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), e === cl ? Error(s(483)) : e);
      default:
        if (typeof t.status == "string") t.then(Ku, Ku);
        else {
          if (((e = ft), e !== null && 100 < e.shellSuspendCounter))
            throw Error(s(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (t.status === "pending") {
                  var o = t;
                  (o.status = "fulfilled"), (o.value = l);
                }
              },
              function (l) {
                if (t.status === "pending") {
                  var o = t;
                  (o.status = "rejected"), (o.reason = l);
                }
              },
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), e === cl ? Error(s(483)) : e);
        }
        throw ((fl = t), cl);
    }
  }
  var fl = null;
  function tp() {
    if (fl === null) throw Error(s(459));
    var e = fl;
    return (fl = null), e;
  }
  var $i = null,
    dl = 0;
  function $u(e) {
    var t = dl;
    return (dl += 1), $i === null && ($i = []), ep($i, e, t);
  }
  function hl(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function Ju(e, t) {
    throw t.$$typeof === c
      ? Error(s(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          s(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function np(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ap(e) {
    function t(M, C) {
      if (e) {
        var z = M.deletions;
        z === null ? ((M.deletions = [C]), (M.flags |= 16)) : z.push(C);
      }
    }
    function r(M, C) {
      if (!e) return null;
      for (; C !== null; ) t(M, C), (C = C.sibling);
      return null;
    }
    function l(M) {
      for (var C = new Map(); M !== null; )
        M.key !== null ? C.set(M.key, M) : C.set(M.index, M), (M = M.sibling);
      return C;
    }
    function o(M, C) {
      return (M = dr(M, C)), (M.index = 0), (M.sibling = null), M;
    }
    function f(M, C, z) {
      return (
        (M.index = z),
        e
          ? ((z = M.alternate),
            z !== null
              ? ((z = z.index), z < C ? ((M.flags |= 33554434), C) : z)
              : ((M.flags |= 33554434), C))
          : ((M.flags |= 1048576), C)
      );
    }
    function y(M) {
      return e && M.alternate === null && (M.flags |= 33554434), M;
    }
    function v(M, C, z, Q) {
      return C === null || C.tag !== 6
        ? ((C = Pf(z, M.mode, Q)), (C.return = M), C)
        : ((C = o(C, z)), (C.return = M), C);
    }
    function S(M, C, z, Q) {
      var ve = z.type;
      return ve === p
        ? Z(M, C, z.props.children, Q, z.key)
        : C !== null &&
            (C.elementType === ve ||
              (typeof ve == "object" &&
                ve !== null &&
                ve.$$typeof === L &&
                np(ve) === C.type))
          ? ((C = o(C, z.props)), hl(C, z), (C.return = M), C)
          : ((C = po(z.type, z.key, z.props, null, M.mode, Q)),
            hl(C, z),
            (C.return = M),
            C);
    }
    function D(M, C, z, Q) {
      return C === null ||
        C.tag !== 4 ||
        C.stateNode.containerInfo !== z.containerInfo ||
        C.stateNode.implementation !== z.implementation
        ? ((C = Wf(z, M.mode, Q)), (C.return = M), C)
        : ((C = o(C, z.children || [])), (C.return = M), C);
    }
    function Z(M, C, z, Q, ve) {
      return C === null || C.tag !== 7
        ? ((C = ri(z, M.mode, Q, ve)), (C.return = M), C)
        : ((C = o(C, z)), (C.return = M), C);
    }
    function $(M, C, z) {
      if (
        (typeof C == "string" && C !== "") ||
        typeof C == "number" ||
        typeof C == "bigint"
      )
        return (C = Pf("" + C, M.mode, z)), (C.return = M), C;
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case d:
            return (
              (z = po(C.type, C.key, C.props, null, M.mode, z)),
              hl(z, C),
              (z.return = M),
              z
            );
          case h:
            return (C = Wf(C, M.mode, z)), (C.return = M), C;
          case L:
            var Q = C._init;
            return (C = Q(C._payload)), $(M, C, z);
        }
        if (ne(C) || le(C))
          return (C = ri(C, M.mode, z, null)), (C.return = M), C;
        if (typeof C.then == "function") return $(M, $u(C), z);
        if (C.$$typeof === b) return $(M, fo(M, C), z);
        Ju(M, C);
      }
      return null;
    }
    function k(M, C, z, Q) {
      var ve = C !== null ? C.key : null;
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return ve !== null ? null : v(M, C, "" + z, Q);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case d:
            return z.key === ve ? S(M, C, z, Q) : null;
          case h:
            return z.key === ve ? D(M, C, z, Q) : null;
          case L:
            return (ve = z._init), (z = ve(z._payload)), k(M, C, z, Q);
        }
        if (ne(z) || le(z)) return ve !== null ? null : Z(M, C, z, Q, null);
        if (typeof z.then == "function") return k(M, C, $u(z), Q);
        if (z.$$typeof === b) return k(M, C, fo(M, z), Q);
        Ju(M, z);
      }
      return null;
    }
    function q(M, C, z, Q, ve) {
      if (
        (typeof Q == "string" && Q !== "") ||
        typeof Q == "number" ||
        typeof Q == "bigint"
      )
        return (M = M.get(z) || null), v(C, M, "" + Q, ve);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case d:
            return (
              (M = M.get(Q.key === null ? z : Q.key) || null), S(C, M, Q, ve)
            );
          case h:
            return (
              (M = M.get(Q.key === null ? z : Q.key) || null), D(C, M, Q, ve)
            );
          case L:
            var Qe = Q._init;
            return (Q = Qe(Q._payload)), q(M, C, z, Q, ve);
        }
        if (ne(Q) || le(Q)) return (M = M.get(z) || null), Z(C, M, Q, ve, null);
        if (typeof Q.then == "function") return q(M, C, z, $u(Q), ve);
        if (Q.$$typeof === b) return q(M, C, z, fo(C, Q), ve);
        Ju(C, Q);
      }
      return null;
    }
    function _e(M, C, z, Q) {
      for (
        var ve = null, Qe = null, Ee = C, Ce = (C = 0), Lt = null;
        Ee !== null && Ce < z.length;
        Ce++
      ) {
        Ee.index > Ce ? ((Lt = Ee), (Ee = null)) : (Lt = Ee.sibling);
        var tt = k(M, Ee, z[Ce], Q);
        if (tt === null) {
          Ee === null && (Ee = Lt);
          break;
        }
        e && Ee && tt.alternate === null && t(M, Ee),
          (C = f(tt, C, Ce)),
          Qe === null ? (ve = tt) : (Qe.sibling = tt),
          (Qe = tt),
          (Ee = Lt);
      }
      if (Ce === z.length) return r(M, Ee), et && Xr(M, Ce), ve;
      if (Ee === null) {
        for (; Ce < z.length; Ce++)
          (Ee = $(M, z[Ce], Q)),
            Ee !== null &&
              ((C = f(Ee, C, Ce)),
              Qe === null ? (ve = Ee) : (Qe.sibling = Ee),
              (Qe = Ee));
        return et && Xr(M, Ce), ve;
      }
      for (Ee = l(Ee); Ce < z.length; Ce++)
        (Lt = q(Ee, M, Ce, z[Ce], Q)),
          Lt !== null &&
            (e &&
              Lt.alternate !== null &&
              Ee.delete(Lt.key === null ? Ce : Lt.key),
            (C = f(Lt, C, Ce)),
            Qe === null ? (ve = Lt) : (Qe.sibling = Lt),
            (Qe = Lt));
      return (
        e &&
          Ee.forEach(function (br) {
            return t(M, br);
          }),
        et && Xr(M, Ce),
        ve
      );
    }
    function ke(M, C, z, Q) {
      if (z == null) throw Error(s(151));
      for (
        var ve = null,
          Qe = null,
          Ee = C,
          Ce = (C = 0),
          Lt = null,
          tt = z.next();
        Ee !== null && !tt.done;
        Ce++, tt = z.next()
      ) {
        Ee.index > Ce ? ((Lt = Ee), (Ee = null)) : (Lt = Ee.sibling);
        var br = k(M, Ee, tt.value, Q);
        if (br === null) {
          Ee === null && (Ee = Lt);
          break;
        }
        e && Ee && br.alternate === null && t(M, Ee),
          (C = f(br, C, Ce)),
          Qe === null ? (ve = br) : (Qe.sibling = br),
          (Qe = br),
          (Ee = Lt);
      }
      if (tt.done) return r(M, Ee), et && Xr(M, Ce), ve;
      if (Ee === null) {
        for (; !tt.done; Ce++, tt = z.next())
          (tt = $(M, tt.value, Q)),
            tt !== null &&
              ((C = f(tt, C, Ce)),
              Qe === null ? (ve = tt) : (Qe.sibling = tt),
              (Qe = tt));
        return et && Xr(M, Ce), ve;
      }
      for (Ee = l(Ee); !tt.done; Ce++, tt = z.next())
        (tt = q(Ee, M, Ce, tt.value, Q)),
          tt !== null &&
            (e &&
              tt.alternate !== null &&
              Ee.delete(tt.key === null ? Ce : tt.key),
            (C = f(tt, C, Ce)),
            Qe === null ? (ve = tt) : (Qe.sibling = tt),
            (Qe = tt));
      return (
        e &&
          Ee.forEach(function (tS) {
            return t(M, tS);
          }),
        et && Xr(M, Ce),
        ve
      );
    }
    function xt(M, C, z, Q) {
      if (
        (typeof z == "object" &&
          z !== null &&
          z.type === p &&
          z.key === null &&
          (z = z.props.children),
        typeof z == "object" && z !== null)
      ) {
        switch (z.$$typeof) {
          case d:
            e: {
              for (var ve = z.key; C !== null; ) {
                if (C.key === ve) {
                  if (((ve = z.type), ve === p)) {
                    if (C.tag === 7) {
                      r(M, C.sibling),
                        (Q = o(C, z.props.children)),
                        (Q.return = M),
                        (M = Q);
                      break e;
                    }
                  } else if (
                    C.elementType === ve ||
                    (typeof ve == "object" &&
                      ve !== null &&
                      ve.$$typeof === L &&
                      np(ve) === C.type)
                  ) {
                    r(M, C.sibling),
                      (Q = o(C, z.props)),
                      hl(Q, z),
                      (Q.return = M),
                      (M = Q);
                    break e;
                  }
                  r(M, C);
                  break;
                } else t(M, C);
                C = C.sibling;
              }
              z.type === p
                ? ((Q = ri(z.props.children, M.mode, Q, z.key)),
                  (Q.return = M),
                  (M = Q))
                : ((Q = po(z.type, z.key, z.props, null, M.mode, Q)),
                  hl(Q, z),
                  (Q.return = M),
                  (M = Q));
            }
            return y(M);
          case h:
            e: {
              for (ve = z.key; C !== null; ) {
                if (C.key === ve)
                  if (
                    C.tag === 4 &&
                    C.stateNode.containerInfo === z.containerInfo &&
                    C.stateNode.implementation === z.implementation
                  ) {
                    r(M, C.sibling),
                      (Q = o(C, z.children || [])),
                      (Q.return = M),
                      (M = Q);
                    break e;
                  } else {
                    r(M, C);
                    break;
                  }
                else t(M, C);
                C = C.sibling;
              }
              (Q = Wf(z, M.mode, Q)), (Q.return = M), (M = Q);
            }
            return y(M);
          case L:
            return (ve = z._init), (z = ve(z._payload)), xt(M, C, z, Q);
        }
        if (ne(z)) return _e(M, C, z, Q);
        if (le(z)) {
          if (((ve = le(z)), typeof ve != "function")) throw Error(s(150));
          return (z = ve.call(z)), ke(M, C, z, Q);
        }
        if (typeof z.then == "function") return xt(M, C, $u(z), Q);
        if (z.$$typeof === b) return xt(M, C, fo(M, z), Q);
        Ju(M, z);
      }
      return (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
        ? ((z = "" + z),
          C !== null && C.tag === 6
            ? (r(M, C.sibling), (Q = o(C, z)), (Q.return = M), (M = Q))
            : (r(M, C), (Q = Pf(z, M.mode, Q)), (Q.return = M), (M = Q)),
          y(M))
        : r(M, C);
    }
    return function (M, C, z, Q) {
      try {
        dl = 0;
        var ve = xt(M, C, z, Q);
        return ($i = null), ve;
      } catch (Ee) {
        if (Ee === cl) throw Ee;
        var Qe = jn(29, Ee, null, M.mode);
        return (Qe.lanes = Q), (Qe.return = M), Qe;
      } finally {
      }
    };
  }
  var $r = ap(!0),
    rp = ap(!1),
    Ji = je(null),
    Pu = je(0);
  function ip(e, t) {
    (e = Ha), nt(Pu, e), nt(Ji, t), (Ha = e | t.baseLanes);
  }
  function af() {
    nt(Pu, Ha), nt(Ji, Ji.current);
  }
  function rf() {
    (Ha = Pu.current), Je(Ji), Je(Pu);
  }
  var zn = je(null),
    sa = null;
  function tr(e) {
    var t = e.alternate;
    nt(Dt, Dt.current & 1),
      nt(zn, e),
      sa === null &&
        (t === null || Ji.current !== null || t.memoizedState !== null) &&
        (sa = e);
  }
  function sp(e) {
    if (e.tag === 22) {
      if ((nt(Dt, Dt.current), nt(zn, e), sa === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (sa = e);
      }
    } else nr();
  }
  function nr() {
    nt(Dt, Dt.current), nt(zn, zn.current);
  }
  function Ca(e) {
    Je(zn), sa === e && (sa = null), Je(Dt);
  }
  var Dt = je(0);
  function Wu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (
          r !== null &&
          ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
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
  var Z1 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (r, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (r) {
                  return r();
                });
            };
          },
    Y1 = a.unstable_scheduleCallback,
    Q1 = a.unstable_NormalPriority,
    Mt = {
      $$typeof: b,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function sf() {
    return { controller: new Z1(), data: new Map(), refCount: 0 };
  }
  function ml(e) {
    e.refCount--,
      e.refCount === 0 &&
        Y1(Q1, function () {
          e.controller.abort();
        });
  }
  var pl = null,
    lf = 0,
    Pi = 0,
    Wi = null;
  function G1(e, t) {
    if (pl === null) {
      var r = (pl = []);
      (lf = 0),
        (Pi = hd()),
        (Wi = {
          status: "pending",
          value: void 0,
          then: function (l) {
            r.push(l);
          },
        });
    }
    return lf++, t.then(lp, lp), t;
  }
  function lp() {
    if (--lf === 0 && pl !== null) {
      Wi !== null && (Wi.status = "fulfilled");
      var e = pl;
      (pl = null), (Pi = 0), (Wi = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function F1(e, t) {
    var r = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (o) {
          r.push(o);
        },
      };
    return (
      e.then(
        function () {
          (l.status = "fulfilled"), (l.value = t);
          for (var o = 0; o < r.length; o++) (0, r[o])(t);
        },
        function (o) {
          for (l.status = "rejected", l.reason = o, o = 0; o < r.length; o++)
            (0, r[o])(void 0);
        },
      ),
      l
    );
  }
  var up = F.S;
  F.S = function (e, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      G1(e, t),
      up !== null && up(e, t);
  };
  var Jr = je(null);
  function uf() {
    var e = Jr.current;
    return e !== null ? e : ft.pooledCache;
  }
  function Iu(e, t) {
    t === null ? nt(Jr, Jr.current) : nt(Jr, t.pool);
  }
  function op() {
    var e = uf();
    return e === null ? null : { parent: Mt._currentValue, pool: e };
  }
  var ar = 0,
    Ye = null,
    lt = null,
    Rt = null,
    eo = !1,
    Ii = !1,
    Pr = !1,
    to = 0,
    yl = 0,
    es = null,
    X1 = 0;
  function wt() {
    throw Error(s(321));
  }
  function of(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!bn(e[r], t[r])) return !1;
    return !0;
  }
  function cf(e, t, r, l, o, f) {
    return (
      (ar = f),
      (Ye = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (F.H = e === null || e.memoizedState === null ? Wr : rr),
      (Pr = !1),
      (f = r(l, o)),
      (Pr = !1),
      Ii && (f = fp(t, r, l, o)),
      cp(e),
      f
    );
  }
  function cp(e) {
    F.H = la;
    var t = lt !== null && lt.next !== null;
    if (((ar = 0), (Rt = lt = Ye = null), (eo = !1), (yl = 0), (es = null), t))
      throw Error(s(300));
    e === null ||
      kt ||
      ((e = e.dependencies), e !== null && co(e) && (kt = !0));
  }
  function fp(e, t, r, l) {
    Ye = e;
    var o = 0;
    do {
      if ((Ii && (es = null), (yl = 0), (Ii = !1), 25 <= o))
        throw Error(s(301));
      if (((o += 1), (Rt = lt = null), e.updateQueue != null)) {
        var f = e.updateQueue;
        (f.lastEffect = null),
          (f.events = null),
          (f.stores = null),
          f.memoCache != null && (f.memoCache.index = 0);
      }
      (F.H = Ir), (f = t(r, l));
    } while (Ii);
    return f;
  }
  function K1() {
    var e = F.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? gl(t) : t),
      (e = e.useState()[0]),
      (lt !== null ? lt.memoizedState : null) !== e && (Ye.flags |= 1024),
      t
    );
  }
  function ff() {
    var e = to !== 0;
    return (to = 0), e;
  }
  function df(e, t, r) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~r);
  }
  function hf(e) {
    if (eo) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      eo = !1;
    }
    (ar = 0), (Rt = lt = Ye = null), (Ii = !1), (yl = to = 0), (es = null);
  }
  function dn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Rt === null ? (Ye.memoizedState = Rt = e) : (Rt = Rt.next = e), Rt;
  }
  function At() {
    if (lt === null) {
      var e = Ye.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = lt.next;
    var t = Rt === null ? Ye.memoizedState : Rt.next;
    if (t !== null) (Rt = t), (lt = e);
    else {
      if (e === null)
        throw Ye.alternate === null ? Error(s(467)) : Error(s(310));
      (lt = e),
        (e = {
          memoizedState: lt.memoizedState,
          baseState: lt.baseState,
          baseQueue: lt.baseQueue,
          queue: lt.queue,
          next: null,
        }),
        Rt === null ? (Ye.memoizedState = Rt = e) : (Rt = Rt.next = e);
    }
    return Rt;
  }
  var no;
  no = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function gl(e) {
    var t = yl;
    return (
      (yl += 1),
      es === null && (es = []),
      (e = ep(es, e, t)),
      (t = Ye),
      (Rt === null ? t.memoizedState : Rt.next) === null &&
        ((t = t.alternate),
        (F.H = t === null || t.memoizedState === null ? Wr : rr)),
      e
    );
  }
  function ao(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return gl(e);
      if (e.$$typeof === b) return Qt(e);
    }
    throw Error(s(438, String(e)));
  }
  function mf(e) {
    var t = null,
      r = Ye.updateQueue;
    if ((r !== null && (t = r.memoCache), t == null)) {
      var l = Ye.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (o) {
                return o.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      r === null && ((r = no()), (Ye.updateQueue = r)),
      (r.memoCache = t),
      (r = t.data[t.index]),
      r === void 0)
    )
      for (r = t.data[t.index] = Array(e), l = 0; l < e; l++) r[l] = se;
    return t.index++, r;
  }
  function Da(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ro(e) {
    var t = At();
    return pf(t, lt, e);
  }
  function pf(e, t, r) {
    var l = e.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = r;
    var o = e.baseQueue,
      f = l.pending;
    if (f !== null) {
      if (o !== null) {
        var y = o.next;
        (o.next = f.next), (f.next = y);
      }
      (t.baseQueue = o = f), (l.pending = null);
    }
    if (((f = e.baseState), o === null)) e.memoizedState = f;
    else {
      t = o.next;
      var v = (y = null),
        S = null,
        D = t,
        Z = !1;
      do {
        var $ = D.lane & -536870913;
        if ($ !== D.lane ? (We & $) === $ : (ar & $) === $) {
          var k = D.revertLane;
          if (k === 0)
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: D.action,
                  hasEagerState: D.hasEagerState,
                  eagerState: D.eagerState,
                  next: null,
                }),
              $ === Pi && (Z = !0);
          else if ((ar & k) === k) {
            (D = D.next), k === Pi && (Z = !0);
            continue;
          } else
            ($ = {
              lane: 0,
              revertLane: D.revertLane,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null,
            }),
              S === null ? ((v = S = $), (y = f)) : (S = S.next = $),
              (Ye.lanes |= k),
              (hr |= k);
          ($ = D.action),
            Pr && r(f, $),
            (f = D.hasEagerState ? D.eagerState : r(f, $));
        } else
          (k = {
            lane: $,
            revertLane: D.revertLane,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null,
          }),
            S === null ? ((v = S = k), (y = f)) : (S = S.next = k),
            (Ye.lanes |= $),
            (hr |= $);
        D = D.next;
      } while (D !== null && D !== t);
      if (
        (S === null ? (y = f) : (S.next = v),
        !bn(f, e.memoizedState) && ((kt = !0), Z && ((r = Wi), r !== null)))
      )
        throw r;
      (e.memoizedState = f),
        (e.baseState = y),
        (e.baseQueue = S),
        (l.lastRenderedState = f);
    }
    return o === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function yf(e) {
    var t = At(),
      r = t.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = e;
    var l = r.dispatch,
      o = r.pending,
      f = t.memoizedState;
    if (o !== null) {
      r.pending = null;
      var y = (o = o.next);
      do (f = e(f, y.action)), (y = y.next);
      while (y !== o);
      bn(f, t.memoizedState) || (kt = !0),
        (t.memoizedState = f),
        t.baseQueue === null && (t.baseState = f),
        (r.lastRenderedState = f);
    }
    return [f, l];
  }
  function dp(e, t, r) {
    var l = Ye,
      o = At(),
      f = et;
    if (f) {
      if (r === void 0) throw Error(s(407));
      r = r();
    } else r = t();
    var y = !bn((lt || o).memoizedState, r);
    if (
      (y && ((o.memoizedState = r), (kt = !0)),
      (o = o.queue),
      bf(pp.bind(null, l, o, e), [e]),
      o.getSnapshot !== t || y || (Rt !== null && Rt.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        ts(9, mp.bind(null, l, o, r, t), { destroy: void 0 }, null),
        ft === null)
      )
        throw Error(s(349));
      f || ar & 60 || hp(l, t, r);
    }
    return r;
  }
  function hp(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Ye.updateQueue),
      t === null
        ? ((t = no()), (Ye.updateQueue = t), (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function mp(e, t, r, l) {
    (t.value = r), (t.getSnapshot = l), yp(t) && gp(e);
  }
  function pp(e, t, r) {
    return r(function () {
      yp(t) && gp(e);
    });
  }
  function yp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !bn(e, r);
    } catch {
      return !0;
    }
  }
  function gp(e) {
    var t = er(e, 2);
    t !== null && en(t, e, 2);
  }
  function gf(e) {
    var t = dn();
    if (typeof e == "function") {
      var r = e;
      if (((e = r()), Pr)) {
        Jt(!0);
        try {
          r();
        } finally {
          Jt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Da,
        lastRenderedState: e,
      }),
      t
    );
  }
  function vp(e, t, r, l) {
    return (e.baseState = r), pf(e, lt, typeof l == "function" ? l : Da);
  }
  function $1(e, t, r, l, o) {
    if (lo(e)) throw Error(s(485));
    if (((e = t.action), e !== null)) {
      var f = {
        payload: o,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (y) {
          f.listeners.push(y);
        },
      };
      F.T !== null ? r(!0) : (f.isTransition = !1),
        l(f),
        (r = t.pending),
        r === null
          ? ((f.next = t.pending = f), bp(t, f))
          : ((f.next = r.next), (t.pending = r.next = f));
    }
  }
  function bp(e, t) {
    var r = t.action,
      l = t.payload,
      o = e.state;
    if (t.isTransition) {
      var f = F.T,
        y = {};
      F.T = y;
      try {
        var v = r(o, l),
          S = F.S;
        S !== null && S(y, v), xp(e, t, v);
      } catch (D) {
        vf(e, t, D);
      } finally {
        F.T = f;
      }
    } else
      try {
        (f = r(o, l)), xp(e, t, f);
      } catch (D) {
        vf(e, t, D);
      }
  }
  function xp(e, t, r) {
    r !== null && typeof r == "object" && typeof r.then == "function"
      ? r.then(
          function (l) {
            Sp(e, t, l);
          },
          function (l) {
            return vf(e, t, l);
          },
        )
      : Sp(e, t, r);
  }
  function Sp(e, t, r) {
    (t.status = "fulfilled"),
      (t.value = r),
      _p(t),
      (e.state = r),
      (t = e.pending),
      t !== null &&
        ((r = t.next),
        r === t ? (e.pending = null) : ((r = r.next), (t.next = r), bp(e, r)));
  }
  function vf(e, t, r) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do (t.status = "rejected"), (t.reason = r), _p(t), (t = t.next);
      while (t !== l);
    }
    e.action = null;
  }
  function _p(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function wp(e, t) {
    return t;
  }
  function Ep(e, t) {
    if (et) {
      var r = ft.formState;
      if (r !== null) {
        e: {
          var l = Ye;
          if (et) {
            if (Ht) {
              t: {
                for (var o = Ht, f = ia; o.nodeType !== 8; ) {
                  if (!f) {
                    o = null;
                    break t;
                  }
                  if (((o = Kn(o.nextSibling)), o === null)) {
                    o = null;
                    break t;
                  }
                }
                (f = o.data), (o = f === "F!" || f === "F" ? o : null);
              }
              if (o) {
                (Ht = Kn(o.nextSibling)), (l = o.data === "F!");
                break e;
              }
            }
            Kr(l);
          }
          l = !1;
        }
        l && (t = r[0]);
      }
    }
    return (
      (r = dn()),
      (r.memoizedState = r.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wp,
        lastRenderedState: t,
      }),
      (r.queue = l),
      (r = Zp.bind(null, Ye, l)),
      (l.dispatch = r),
      (l = gf(!1)),
      (f = Ef.bind(null, Ye, !1, l.queue)),
      (l = dn()),
      (o = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = o),
      (r = $1.bind(null, Ye, o, f, r)),
      (o.dispatch = r),
      (l.memoizedState = e),
      [t, r, !1]
    );
  }
  function Tp(e) {
    var t = At();
    return Rp(t, lt, e);
  }
  function Rp(e, t, r) {
    (t = pf(e, t, wp)[0]),
      (e = ro(Da)[0]),
      (t =
        typeof t == "object" && t !== null && typeof t.then == "function"
          ? gl(t)
          : t);
    var l = At(),
      o = l.queue,
      f = o.dispatch;
    return (
      r !== l.memoizedState &&
        ((Ye.flags |= 2048),
        ts(9, J1.bind(null, o, r), { destroy: void 0 }, null)),
      [t, f, e]
    );
  }
  function J1(e, t) {
    e.action = t;
  }
  function Ap(e) {
    var t = At(),
      r = lt;
    if (r !== null) return Rp(t, r, e);
    At(), (t = t.memoizedState), (r = At());
    var l = r.queue.dispatch;
    return (r.memoizedState = e), [t, l, !1];
  }
  function ts(e, t, r, l) {
    return (
      (e = { tag: e, create: t, inst: r, deps: l, next: null }),
      (t = Ye.updateQueue),
      t === null && ((t = no()), (Ye.updateQueue = t)),
      (r = t.lastEffect),
      r === null
        ? (t.lastEffect = e.next = e)
        : ((l = r.next), (r.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function Op() {
    return At().memoizedState;
  }
  function io(e, t, r, l) {
    var o = dn();
    (Ye.flags |= e),
      (o.memoizedState = ts(
        1 | t,
        r,
        { destroy: void 0 },
        l === void 0 ? null : l,
      ));
  }
  function so(e, t, r, l) {
    var o = At();
    l = l === void 0 ? null : l;
    var f = o.memoizedState.inst;
    lt !== null && l !== null && of(l, lt.memoizedState.deps)
      ? (o.memoizedState = ts(t, r, f, l))
      : ((Ye.flags |= e), (o.memoizedState = ts(1 | t, r, f, l)));
  }
  function Cp(e, t) {
    io(8390656, 8, e, t);
  }
  function bf(e, t) {
    so(2048, 8, e, t);
  }
  function Dp(e, t) {
    return so(4, 2, e, t);
  }
  function Mp(e, t) {
    return so(4, 4, e, t);
  }
  function Np(e, t) {
    if (typeof t == "function") {
      e = e();
      var r = t(e);
      return function () {
        typeof r == "function" ? r() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function zp(e, t, r) {
    (r = r != null ? r.concat([e]) : null), so(4, 4, Np.bind(null, t, e), r);
  }
  function xf() {}
  function Up(e, t) {
    var r = At();
    t = t === void 0 ? null : t;
    var l = r.memoizedState;
    return t !== null && of(t, l[1]) ? l[0] : ((r.memoizedState = [e, t]), e);
  }
  function kp(e, t) {
    var r = At();
    t = t === void 0 ? null : t;
    var l = r.memoizedState;
    if (t !== null && of(t, l[1])) return l[0];
    if (((l = e()), Pr)) {
      Jt(!0);
      try {
        e();
      } finally {
        Jt(!1);
      }
    }
    return (r.memoizedState = [l, t]), l;
  }
  function Sf(e, t, r) {
    return r === void 0 || ar & 1073741824
      ? (e.memoizedState = t)
      : ((e.memoizedState = r), (e = Ly()), (Ye.lanes |= e), (hr |= e), r);
  }
  function jp(e, t, r, l) {
    return bn(r, t)
      ? r
      : Ji.current !== null
        ? ((e = Sf(e, r, l)), bn(e, t) || (kt = !0), e)
        : ar & 42
          ? ((e = Ly()), (Ye.lanes |= e), (hr |= e), t)
          : ((kt = !0), (e.memoizedState = r));
  }
  function Lp(e, t, r, l, o) {
    var f = J.p;
    J.p = f !== 0 && 8 > f ? f : 8;
    var y = F.T,
      v = {};
    (F.T = v), Ef(e, !1, t, r);
    try {
      var S = o(),
        D = F.S;
      if (
        (D !== null && D(v, S),
        S !== null && typeof S == "object" && typeof S.then == "function")
      ) {
        var Z = F1(S, l);
        vl(e, t, Z, wn(e));
      } else vl(e, t, l, wn(e));
    } catch ($) {
      vl(e, t, { then: function () {}, status: "rejected", reason: $ }, wn());
    } finally {
      (J.p = f), (F.T = y);
    }
  }
  function P1() {}
  function _f(e, t, r, l) {
    if (e.tag !== 5) throw Error(s(476));
    var o = Bp(e).queue;
    Lp(
      e,
      o,
      t,
      Re,
      r === null
        ? P1
        : function () {
            return Hp(e), r(l);
          },
    );
  }
  function Bp(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Re,
      baseState: Re,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Da,
        lastRenderedState: Re,
      },
      next: null,
    };
    var r = {};
    return (
      (t.next = {
        memoizedState: r,
        baseState: r,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Da,
          lastRenderedState: r,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Hp(e) {
    var t = Bp(e).next.queue;
    vl(e, t, {}, wn());
  }
  function wf() {
    return Qt(Bl);
  }
  function Vp() {
    return At().memoizedState;
  }
  function qp() {
    return At().memoizedState;
  }
  function W1(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var r = wn();
          e = lr(r);
          var l = ur(t, e, r);
          l !== null && (en(l, t, r), Sl(l, t, r)),
            (t = { cache: sf() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function I1(e, t, r) {
    var l = wn();
    (r = {
      lane: l,
      revertLane: 0,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      lo(e)
        ? Yp(t, r)
        : ((r = Wc(e, t, r, l)), r !== null && (en(r, e, l), Qp(r, t, l)));
  }
  function Zp(e, t, r) {
    var l = wn();
    vl(e, t, r, l);
  }
  function vl(e, t, r, l) {
    var o = {
      lane: l,
      revertLane: 0,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (lo(e)) Yp(t, o);
    else {
      var f = e.alternate;
      if (
        e.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = t.lastRenderedReducer), f !== null)
      )
        try {
          var y = t.lastRenderedState,
            v = f(y, r);
          if (((o.hasEagerState = !0), (o.eagerState = v), bn(v, y)))
            return Qu(e, t, o, 0), ft === null && Yu(), !1;
        } catch {
        } finally {
        }
      if (((r = Wc(e, t, o, l)), r !== null))
        return en(r, e, l), Qp(r, t, l), !0;
    }
    return !1;
  }
  function Ef(e, t, r, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: hd(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      lo(e))
    ) {
      if (t) throw Error(s(479));
    } else (t = Wc(e, r, l, 2)), t !== null && en(t, e, 2);
  }
  function lo(e) {
    var t = e.alternate;
    return e === Ye || (t !== null && t === Ye);
  }
  function Yp(e, t) {
    Ii = eo = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
  function Qp(e, t, r) {
    if (r & 4194176) {
      var l = t.lanes;
      (l &= e.pendingLanes), (r |= l), (t.lanes = r), Qn(e, r);
    }
  }
  var la = {
    readContext: Qt,
    use: ao,
    useCallback: wt,
    useContext: wt,
    useEffect: wt,
    useImperativeHandle: wt,
    useLayoutEffect: wt,
    useInsertionEffect: wt,
    useMemo: wt,
    useReducer: wt,
    useRef: wt,
    useState: wt,
    useDebugValue: wt,
    useDeferredValue: wt,
    useTransition: wt,
    useSyncExternalStore: wt,
    useId: wt,
  };
  (la.useCacheRefresh = wt),
    (la.useMemoCache = wt),
    (la.useHostTransitionStatus = wt),
    (la.useFormState = wt),
    (la.useActionState = wt),
    (la.useOptimistic = wt);
  var Wr = {
    readContext: Qt,
    use: ao,
    useCallback: function (e, t) {
      return (dn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Qt,
    useEffect: Cp,
    useImperativeHandle: function (e, t, r) {
      (r = r != null ? r.concat([e]) : null),
        io(4194308, 4, Np.bind(null, t, e), r);
    },
    useLayoutEffect: function (e, t) {
      return io(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      io(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = dn();
      t = t === void 0 ? null : t;
      var l = e();
      if (Pr) {
        Jt(!0);
        try {
          e();
        } finally {
          Jt(!1);
        }
      }
      return (r.memoizedState = [l, t]), l;
    },
    useReducer: function (e, t, r) {
      var l = dn();
      if (r !== void 0) {
        var o = r(t);
        if (Pr) {
          Jt(!0);
          try {
            r(t);
          } finally {
            Jt(!1);
          }
        }
      } else o = t;
      return (
        (l.memoizedState = l.baseState = o),
        (e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: o,
        }),
        (l.queue = e),
        (e = e.dispatch = I1.bind(null, Ye, e)),
        [l.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = dn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: function (e) {
      e = gf(e);
      var t = e.queue,
        r = Zp.bind(null, Ye, t);
      return (t.dispatch = r), [e.memoizedState, r];
    },
    useDebugValue: xf,
    useDeferredValue: function (e, t) {
      var r = dn();
      return Sf(r, e, t);
    },
    useTransition: function () {
      var e = gf(!1);
      return (
        (e = Lp.bind(null, Ye, e.queue, !0, !1)),
        (dn().memoizedState = e),
        [!1, e]
      );
    },
    useSyncExternalStore: function (e, t, r) {
      var l = Ye,
        o = dn();
      if (et) {
        if (r === void 0) throw Error(s(407));
        r = r();
      } else {
        if (((r = t()), ft === null)) throw Error(s(349));
        We & 60 || hp(l, t, r);
      }
      o.memoizedState = r;
      var f = { value: r, getSnapshot: t };
      return (
        (o.queue = f),
        Cp(pp.bind(null, l, f, e), [e]),
        (l.flags |= 2048),
        ts(9, mp.bind(null, l, f, r, t), { destroy: void 0 }, null),
        r
      );
    },
    useId: function () {
      var e = dn(),
        t = ft.identifierPrefix;
      if (et) {
        var r = Oa,
          l = Aa;
        (r = (l & ~(1 << (32 - Pt(l) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = to++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = X1++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    useCacheRefresh: function () {
      return (dn().memoizedState = W1.bind(null, Ye));
    },
  };
  (Wr.useMemoCache = mf),
    (Wr.useHostTransitionStatus = wf),
    (Wr.useFormState = Ep),
    (Wr.useActionState = Ep),
    (Wr.useOptimistic = function (e) {
      var t = dn();
      t.memoizedState = t.baseState = e;
      var r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (t.queue = r), (t = Ef.bind(null, Ye, !0, r)), (r.dispatch = t), [e, t]
      );
    });
  var rr = {
    readContext: Qt,
    use: ao,
    useCallback: Up,
    useContext: Qt,
    useEffect: bf,
    useImperativeHandle: zp,
    useInsertionEffect: Dp,
    useLayoutEffect: Mp,
    useMemo: kp,
    useReducer: ro,
    useRef: Op,
    useState: function () {
      return ro(Da);
    },
    useDebugValue: xf,
    useDeferredValue: function (e, t) {
      var r = At();
      return jp(r, lt.memoizedState, e, t);
    },
    useTransition: function () {
      var e = ro(Da)[0],
        t = At().memoizedState;
      return [typeof e == "boolean" ? e : gl(e), t];
    },
    useSyncExternalStore: dp,
    useId: Vp,
  };
  (rr.useCacheRefresh = qp),
    (rr.useMemoCache = mf),
    (rr.useHostTransitionStatus = wf),
    (rr.useFormState = Tp),
    (rr.useActionState = Tp),
    (rr.useOptimistic = function (e, t) {
      var r = At();
      return vp(r, lt, e, t);
    });
  var Ir = {
    readContext: Qt,
    use: ao,
    useCallback: Up,
    useContext: Qt,
    useEffect: bf,
    useImperativeHandle: zp,
    useInsertionEffect: Dp,
    useLayoutEffect: Mp,
    useMemo: kp,
    useReducer: yf,
    useRef: Op,
    useState: function () {
      return yf(Da);
    },
    useDebugValue: xf,
    useDeferredValue: function (e, t) {
      var r = At();
      return lt === null ? Sf(r, e, t) : jp(r, lt.memoizedState, e, t);
    },
    useTransition: function () {
      var e = yf(Da)[0],
        t = At().memoizedState;
      return [typeof e == "boolean" ? e : gl(e), t];
    },
    useSyncExternalStore: dp,
    useId: Vp,
  };
  (Ir.useCacheRefresh = qp),
    (Ir.useMemoCache = mf),
    (Ir.useHostTransitionStatus = wf),
    (Ir.useFormState = Ap),
    (Ir.useActionState = Ap),
    (Ir.useOptimistic = function (e, t) {
      var r = At();
      return lt !== null
        ? vp(r, lt, e, t)
        : ((r.baseState = e), [e, r.queue.dispatch]);
    });
  function Tf(e, t, r, l) {
    (t = e.memoizedState),
      (r = r(l, t)),
      (r = r == null ? t : pe({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var Rf = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? ee(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var l = wn(),
        o = lr(l);
      (o.payload = t),
        r != null && (o.callback = r),
        (t = ur(e, o, l)),
        t !== null && (en(t, e, l), Sl(t, e, l));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var l = wn(),
        o = lr(l);
      (o.tag = 1),
        (o.payload = t),
        r != null && (o.callback = r),
        (t = ur(e, o, l)),
        t !== null && (en(t, e, l), Sl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = wn(),
        l = lr(r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = ur(e, l, r)),
        t !== null && (en(t, e, r), Sl(t, e, r));
    },
  };
  function Gp(e, t, r, l, o, f, y) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, f, y)
        : t.prototype && t.prototype.isPureReactComponent
          ? !il(r, l) || !il(o, f)
          : !0
    );
  }
  function Fp(e, t, r, l) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(r, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(r, l),
      t.state !== e && Rf.enqueueReplaceState(t, t.state, null);
  }
  function ei(e, t) {
    var r = t;
    if ("ref" in t) {
      r = {};
      for (var l in t) l !== "ref" && (r[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      r === t && (r = pe({}, r));
      for (var o in e) r[o] === void 0 && (r[o] = e[o]);
    }
    return r;
  }
  var uo =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function Xp(e) {
    uo(e);
  }
  function Kp(e) {
    console.error(e);
  }
  function $p(e) {
    uo(e);
  }
  function oo(e, t) {
    try {
      var r = e.onUncaughtError;
      r(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Jp(e, t, r) {
    try {
      var l = e.onCaughtError;
      l(r.value, {
        componentStack: r.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function Af(e, t, r) {
    return (
      (r = lr(r)),
      (r.tag = 3),
      (r.payload = { element: null }),
      (r.callback = function () {
        oo(e, t);
      }),
      r
    );
  }
  function Pp(e) {
    return (e = lr(e)), (e.tag = 3), e;
  }
  function Wp(e, t, r, l) {
    var o = r.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var f = l.value;
      (e.payload = function () {
        return o(f);
      }),
        (e.callback = function () {
          Jp(t, r, l);
        });
    }
    var y = r.stateNode;
    y !== null &&
      typeof y.componentDidCatch == "function" &&
      (e.callback = function () {
        Jp(t, r, l),
          typeof o != "function" &&
            (mr === null ? (mr = new Set([this])) : mr.add(this));
        var v = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: v !== null ? v : "",
        });
      });
  }
  function ex(e, t, r, l, o) {
    if (
      ((r.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((t = r.alternate),
        t !== null && xl(t, r, o, !0),
        (r = zn.current),
        r !== null)
      ) {
        switch (r.tag) {
          case 13:
            return (
              sa === null ? ud() : r.alternate === null && bt === 0 && (bt = 3),
              (r.flags &= -257),
              (r.flags |= 65536),
              (r.lanes = o),
              l === nf
                ? (r.flags |= 16384)
                : ((t = r.updateQueue),
                  t === null ? (r.updateQueue = new Set([l])) : t.add(l),
                  cd(e, l, o)),
              !1
            );
          case 22:
            return (
              (r.flags |= 65536),
              l === nf
                ? (r.flags |= 16384)
                : ((t = r.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (r.updateQueue = t))
                    : ((r = t.retryQueue),
                      r === null ? (t.retryQueue = new Set([l])) : r.add(l)),
                  cd(e, l, o)),
              !1
            );
        }
        throw Error(s(435, r.tag));
      }
      return cd(e, l, o), ud(), !1;
    }
    if (et)
      return (
        (t = zn.current),
        t !== null
          ? (!(t.flags & 65536) && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = o),
            l !== tf && ((e = Error(s(422), { cause: l })), ol(Dn(e, r))))
          : (l !== tf && ((t = Error(s(423), { cause: l })), ol(Dn(t, r))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (o &= -o),
            (e.lanes |= o),
            (l = Dn(l, r)),
            (o = Af(e.stateNode, l, o)),
            Zf(e, o),
            bt !== 4 && (bt = 2)),
        !1
      );
    var f = Error(s(520), { cause: l });
    if (
      ((f = Dn(f, r)),
      Cl === null ? (Cl = [f]) : Cl.push(f),
      bt !== 4 && (bt = 2),
      t === null)
    )
      return !0;
    (l = Dn(l, r)), (r = t);
    do {
      switch (r.tag) {
        case 3:
          return (
            (r.flags |= 65536),
            (e = o & -o),
            (r.lanes |= e),
            (e = Af(r.stateNode, l, e)),
            Zf(r, e),
            !1
          );
        case 1:
          if (
            ((t = r.type),
            (f = r.stateNode),
            (r.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (f !== null &&
                  typeof f.componentDidCatch == "function" &&
                  (mr === null || !mr.has(f)))))
          )
            return (
              (r.flags |= 65536),
              (o &= -o),
              (r.lanes |= o),
              (o = Pp(o)),
              Wp(o, e, r, l),
              Zf(r, o),
              !1
            );
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var Ip = Error(s(461)),
    kt = !1;
  function Vt(e, t, r, l) {
    t.child = e === null ? rp(t, null, r, l) : $r(t, e.child, r, l);
  }
  function ey(e, t, r, l, o) {
    r = r.render;
    var f = t.ref;
    if ("ref" in l) {
      var y = {};
      for (var v in l) v !== "ref" && (y[v] = l[v]);
    } else y = l;
    return (
      ni(t),
      (l = cf(e, t, r, y, f, o)),
      (v = ff()),
      e !== null && !kt
        ? (df(e, t, o), Ma(e, t, o))
        : (et && v && Ic(t), (t.flags |= 1), Vt(e, t, l, o), t.child)
    );
  }
  function ty(e, t, r, l, o) {
    if (e === null) {
      var f = r.type;
      return typeof f == "function" &&
        !Jf(f) &&
        f.defaultProps === void 0 &&
        r.compare === null
        ? ((t.tag = 15), (t.type = f), ny(e, t, f, l, o))
        : ((e = po(r.type, null, l, t, t.mode, o)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((f = e.child), !jf(e, o))) {
      var y = f.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : il), r(y, l) && e.ref === t.ref)
      )
        return Ma(e, t, o);
    }
    return (
      (t.flags |= 1),
      (e = dr(f, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function ny(e, t, r, l, o) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (il(f, l) && e.ref === t.ref)
        if (((kt = !1), (t.pendingProps = l = f), jf(e, o)))
          e.flags & 131072 && (kt = !0);
        else return (t.lanes = e.lanes), Ma(e, t, o);
    }
    return Of(e, t, r, l, o);
  }
  function ay(e, t, r) {
    var l = t.pendingProps,
      o = l.children,
      f = (t.stateNode._pendingVisibility & 2) !== 0,
      y = e !== null ? e.memoizedState : null;
    if ((bl(e, t), l.mode === "hidden" || f)) {
      if (t.flags & 128) {
        if (((l = y !== null ? y.baseLanes | r : r), e !== null)) {
          for (o = t.child = e.child, f = 0; o !== null; )
            (f = f | o.lanes | o.childLanes), (o = o.sibling);
          t.childLanes = f & ~l;
        } else (t.childLanes = 0), (t.child = null);
        return ry(e, t, l, r);
      }
      if (r & 536870912)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Iu(t, y !== null ? y.cachePool : null),
          y !== null ? ip(t, y) : af(),
          sp(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          ry(e, t, y !== null ? y.baseLanes | r : r, r)
        );
    } else
      y !== null
        ? (Iu(t, y.cachePool), ip(t, y), nr(), (t.memoizedState = null))
        : (e !== null && Iu(t, null), af(), nr());
    return Vt(e, t, o, r), t.child;
  }
  function ry(e, t, r, l) {
    var o = uf();
    return (
      (o = o === null ? null : { parent: Mt._currentValue, pool: o }),
      (t.memoizedState = { baseLanes: r, cachePool: o }),
      e !== null && Iu(t, null),
      af(),
      sp(t),
      e !== null && xl(e, t, l, !0),
      null
    );
  }
  function bl(e, t) {
    var r = t.ref;
    if (r === null) e !== null && e.ref !== null && (t.flags |= 2097664);
    else {
      if (typeof r != "function" && typeof r != "object") throw Error(s(284));
      (e === null || e.ref !== r) && (t.flags |= 2097664);
    }
  }
  function Of(e, t, r, l, o) {
    return (
      ni(t),
      (r = cf(e, t, r, l, void 0, o)),
      (l = ff()),
      e !== null && !kt
        ? (df(e, t, o), Ma(e, t, o))
        : (et && l && Ic(t), (t.flags |= 1), Vt(e, t, r, o), t.child)
    );
  }
  function iy(e, t, r, l, o, f) {
    return (
      ni(t),
      (t.updateQueue = null),
      (r = fp(t, l, r, o)),
      cp(e),
      (l = ff()),
      e !== null && !kt
        ? (df(e, t, f), Ma(e, t, f))
        : (et && l && Ic(t), (t.flags |= 1), Vt(e, t, r, f), t.child)
    );
  }
  function sy(e, t, r, l, o) {
    if ((ni(t), t.stateNode === null)) {
      var f = Fi,
        y = r.contextType;
      typeof y == "object" && y !== null && (f = Qt(y)),
        (f = new r(l, f)),
        (t.memoizedState =
          f.state !== null && f.state !== void 0 ? f.state : null),
        (f.updater = Rf),
        (t.stateNode = f),
        (f._reactInternals = t),
        (f = t.stateNode),
        (f.props = l),
        (f.state = t.memoizedState),
        (f.refs = {}),
        Vf(t),
        (y = r.contextType),
        (f.context = typeof y == "object" && y !== null ? Qt(y) : Fi),
        (f.state = t.memoizedState),
        (y = r.getDerivedStateFromProps),
        typeof y == "function" && (Tf(t, r, y, l), (f.state = t.memoizedState)),
        typeof r.getDerivedStateFromProps == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function" ||
          (typeof f.UNSAFE_componentWillMount != "function" &&
            typeof f.componentWillMount != "function") ||
          ((y = f.state),
          typeof f.componentWillMount == "function" && f.componentWillMount(),
          typeof f.UNSAFE_componentWillMount == "function" &&
            f.UNSAFE_componentWillMount(),
          y !== f.state && Rf.enqueueReplaceState(f, f.state, null),
          wl(t, l, f, o),
          _l(),
          (f.state = t.memoizedState)),
        typeof f.componentDidMount == "function" && (t.flags |= 4194308),
        (l = !0);
    } else if (e === null) {
      f = t.stateNode;
      var v = t.memoizedProps,
        S = ei(r, v);
      f.props = S;
      var D = f.context,
        Z = r.contextType;
      (y = Fi), typeof Z == "object" && Z !== null && (y = Qt(Z));
      var $ = r.getDerivedStateFromProps;
      (Z =
        typeof $ == "function" ||
        typeof f.getSnapshotBeforeUpdate == "function"),
        (v = t.pendingProps !== v),
        Z ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((v || D !== y) && Fp(t, f, l, y)),
        (sr = !1);
      var k = t.memoizedState;
      (f.state = k),
        wl(t, l, f, o),
        _l(),
        (D = t.memoizedState),
        v || k !== D || sr
          ? (typeof $ == "function" && (Tf(t, r, $, l), (D = t.memoizedState)),
            (S = sr || Gp(t, r, S, l, k, D, y))
              ? (Z ||
                  (typeof f.UNSAFE_componentWillMount != "function" &&
                    typeof f.componentWillMount != "function") ||
                  (typeof f.componentWillMount == "function" &&
                    f.componentWillMount(),
                  typeof f.UNSAFE_componentWillMount == "function" &&
                    f.UNSAFE_componentWillMount()),
                typeof f.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof f.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = D)),
            (f.props = l),
            (f.state = D),
            (f.context = y),
            (l = S))
          : (typeof f.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1));
    } else {
      (f = t.stateNode),
        qf(e, t),
        (y = t.memoizedProps),
        (Z = ei(r, y)),
        (f.props = Z),
        ($ = t.pendingProps),
        (k = f.context),
        (D = r.contextType),
        (S = Fi),
        typeof D == "object" && D !== null && (S = Qt(D)),
        (v = r.getDerivedStateFromProps),
        (D =
          typeof v == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function") ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((y !== $ || k !== S) && Fp(t, f, l, S)),
        (sr = !1),
        (k = t.memoizedState),
        (f.state = k),
        wl(t, l, f, o),
        _l();
      var q = t.memoizedState;
      y !== $ ||
      k !== q ||
      sr ||
      (e !== null && e.dependencies !== null && co(e.dependencies))
        ? (typeof v == "function" && (Tf(t, r, v, l), (q = t.memoizedState)),
          (Z =
            sr ||
            Gp(t, r, Z, l, k, q, S) ||
            (e !== null && e.dependencies !== null && co(e.dependencies)))
            ? (D ||
                (typeof f.UNSAFE_componentWillUpdate != "function" &&
                  typeof f.componentWillUpdate != "function") ||
                (typeof f.componentWillUpdate == "function" &&
                  f.componentWillUpdate(l, q, S),
                typeof f.UNSAFE_componentWillUpdate == "function" &&
                  f.UNSAFE_componentWillUpdate(l, q, S)),
              typeof f.componentDidUpdate == "function" && (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof f.componentDidUpdate != "function" ||
                (y === e.memoizedProps && k === e.memoizedState) ||
                (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != "function" ||
                (y === e.memoizedProps && k === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = q)),
          (f.props = l),
          (f.state = q),
          (f.context = S),
          (l = Z))
        : (typeof f.componentDidUpdate != "function" ||
            (y === e.memoizedProps && k === e.memoizedState) ||
            (t.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != "function" ||
            (y === e.memoizedProps && k === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (f = l),
      bl(e, t),
      (l = (t.flags & 128) !== 0),
      f || l
        ? ((f = t.stateNode),
          (r =
            l && typeof r.getDerivedStateFromError != "function"
              ? null
              : f.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = $r(t, e.child, null, o)),
              (t.child = $r(t, null, r, o)))
            : Vt(e, t, r, o),
          (t.memoizedState = f.state),
          (e = t.child))
        : (e = Ma(e, t, o)),
      e
    );
  }
  function ly(e, t, r, l) {
    return ul(), (t.flags |= 256), Vt(e, t, r, l), t.child;
  }
  var Cf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Df(e) {
    return { baseLanes: e, cachePool: op() };
  }
  function Mf(e, t, r) {
    return (e = e !== null ? e.childLanes & ~r : 0), t && (e |= Ln), e;
  }
  function uy(e, t, r) {
    var l = t.pendingProps,
      o = !1,
      f = (t.flags & 128) !== 0,
      y;
    if (
      ((y = f) ||
        (y =
          e !== null && e.memoizedState === null ? !1 : (Dt.current & 2) !== 0),
      y && ((o = !0), (t.flags &= -129)),
      (y = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (et) {
        if ((o ? tr(t) : nr(), et)) {
          var v = Ht,
            S;
          if ((S = v)) {
            e: {
              for (S = v, v = ia; S.nodeType !== 8; ) {
                if (!v) {
                  v = null;
                  break e;
                }
                if (((S = Kn(S.nextSibling)), S === null)) {
                  v = null;
                  break e;
                }
              }
              v = S;
            }
            v !== null
              ? ((t.memoizedState = {
                  dehydrated: v,
                  treeContext: Fr !== null ? { id: Aa, overflow: Oa } : null,
                  retryLane: 536870912,
                }),
                (S = jn(18, null, null, 0)),
                (S.stateNode = v),
                (S.return = t),
                (t.child = S),
                (It = t),
                (Ht = null),
                (S = !0))
              : (S = !1);
          }
          S || Kr(t);
        }
        if (
          ((v = t.memoizedState),
          v !== null && ((v = v.dehydrated), v !== null))
        )
          return v.data === "$!" ? (t.lanes = 16) : (t.lanes = 536870912), null;
        Ca(t);
      }
      return (
        (v = l.children),
        (l = l.fallback),
        o
          ? (nr(),
            (o = t.mode),
            (v = zf({ mode: "hidden", children: v }, o)),
            (l = ri(l, o, r, null)),
            (v.return = t),
            (l.return = t),
            (v.sibling = l),
            (t.child = v),
            (o = t.child),
            (o.memoizedState = Df(r)),
            (o.childLanes = Mf(e, y, r)),
            (t.memoizedState = Cf),
            l)
          : (tr(t), Nf(t, v))
      );
    }
    if (
      ((S = e.memoizedState), S !== null && ((v = S.dehydrated), v !== null))
    ) {
      if (f)
        t.flags & 256
          ? (tr(t), (t.flags &= -257), (t = Uf(e, t, r)))
          : t.memoizedState !== null
            ? (nr(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (nr(),
              (o = l.fallback),
              (v = t.mode),
              (l = zf({ mode: "visible", children: l.children }, v)),
              (o = ri(o, v, r, null)),
              (o.flags |= 2),
              (l.return = t),
              (o.return = t),
              (l.sibling = o),
              (t.child = l),
              $r(t, e.child, null, r),
              (l = t.child),
              (l.memoizedState = Df(r)),
              (l.childLanes = Mf(e, y, r)),
              (t.memoizedState = Cf),
              (t = o));
      else if ((tr(t), v.data === "$!")) {
        if (((y = v.nextSibling && v.nextSibling.dataset), y)) var D = y.dgst;
        (y = D),
          (l = Error(s(419))),
          (l.stack = ""),
          (l.digest = y),
          ol({ value: l, source: null, stack: null }),
          (t = Uf(e, t, r));
      } else if (
        (kt || xl(e, t, r, !1), (y = (r & e.childLanes) !== 0), kt || y)
      ) {
        if (((y = ft), y !== null)) {
          if (((l = r & -r), l & 42)) l = 1;
          else
            switch (l) {
              case 2:
                l = 1;
                break;
              case 8:
                l = 4;
                break;
              case 32:
                l = 16;
                break;
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
                l = 64;
                break;
              case 268435456:
                l = 134217728;
                break;
              default:
                l = 0;
            }
          if (
            ((l = l & (y.suspendedLanes | r) ? 0 : l),
            l !== 0 && l !== S.retryLane)
          )
            throw ((S.retryLane = l), er(e, l), en(y, e, l), Ip);
        }
        v.data === "$?" || ud(), (t = Uf(e, t, r));
      } else
        v.data === "$?"
          ? ((t.flags |= 128),
            (t.child = e.child),
            (t = px.bind(null, e)),
            (v._reactRetry = t),
            (t = null))
          : ((e = S.treeContext),
            (Ht = Kn(v.nextSibling)),
            (It = t),
            (et = !0),
            (Fn = null),
            (ia = !1),
            e !== null &&
              ((Mn[Nn++] = Aa),
              (Mn[Nn++] = Oa),
              (Mn[Nn++] = Fr),
              (Aa = e.id),
              (Oa = e.overflow),
              (Fr = t)),
            (t = Nf(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return o
      ? (nr(),
        (o = l.fallback),
        (v = t.mode),
        (S = e.child),
        (D = S.sibling),
        (l = dr(S, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = S.subtreeFlags & 31457280),
        D !== null ? (o = dr(D, o)) : ((o = ri(o, v, r, null)), (o.flags |= 2)),
        (o.return = t),
        (l.return = t),
        (l.sibling = o),
        (t.child = l),
        (l = o),
        (o = t.child),
        (v = e.child.memoizedState),
        v === null
          ? (v = Df(r))
          : ((S = v.cachePool),
            S !== null
              ? ((D = Mt._currentValue),
                (S = S.parent !== D ? { parent: D, pool: D } : S))
              : (S = op()),
            (v = { baseLanes: v.baseLanes | r, cachePool: S })),
        (o.memoizedState = v),
        (o.childLanes = Mf(e, y, r)),
        (t.memoizedState = Cf),
        l)
      : (tr(t),
        (r = e.child),
        (e = r.sibling),
        (r = dr(r, { mode: "visible", children: l.children })),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
          ((y = t.deletions),
          y === null ? ((t.deletions = [e]), (t.flags |= 16)) : y.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r);
  }
  function Nf(e, t) {
    return (
      (t = zf({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function zf(e, t) {
    return Uy(e, t, 0, null);
  }
  function Uf(e, t, r) {
    return (
      $r(t, e.child, null, r),
      (e = Nf(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function oy(e, t, r) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Bf(e.return, t, r);
  }
  function kf(e, t, r, l, o) {
    var f = e.memoizedState;
    f === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: r,
          tailMode: o,
        })
      : ((f.isBackwards = t),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = l),
        (f.tail = r),
        (f.tailMode = o));
  }
  function cy(e, t, r) {
    var l = t.pendingProps,
      o = l.revealOrder,
      f = l.tail;
    if ((Vt(e, t, l.children, r), (l = Dt.current), l & 2))
      (l = (l & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && oy(e, r, t);
          else if (e.tag === 19) oy(e, r, t);
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
      l &= 1;
    }
    switch ((nt(Dt, l), o)) {
      case "forwards":
        for (r = t.child, o = null; r !== null; )
          (e = r.alternate),
            e !== null && Wu(e) === null && (o = r),
            (r = r.sibling);
        (r = o),
          r === null
            ? ((o = t.child), (t.child = null))
            : ((o = r.sibling), (r.sibling = null)),
          kf(t, !1, o, r, f);
        break;
      case "backwards":
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Wu(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = r), (r = o), (o = e);
        }
        kf(t, !0, r, null, f);
        break;
      case "together":
        kf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ma(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (hr |= t.lanes),
      !(r & t.childLanes))
    )
      if (e !== null) {
        if ((xl(e, t, r, !1), (r & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        e = t.child, r = dr(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = dr(e, e.pendingProps)),
          (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function jf(e, t) {
    return e.lanes & t ? !0 : ((e = e.dependencies), !!(e !== null && co(e)));
  }
  function tx(e, t, r) {
    switch (t.tag) {
      case 3:
        Br(t, t.stateNode.containerInfo),
          ir(t, Mt, e.memoizedState.cache),
          ul();
        break;
      case 27:
      case 5:
        Di(t);
        break;
      case 4:
        Br(t, t.stateNode.containerInfo);
        break;
      case 10:
        ir(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (tr(t), (t.flags |= 128), null)
            : r & t.child.childLanes
              ? uy(e, t, r)
              : (tr(t), (e = Ma(e, t, r)), e !== null ? e.sibling : null);
        tr(t);
        break;
      case 19:
        var o = (e.flags & 128) !== 0;
        if (
          ((l = (r & t.childLanes) !== 0),
          l || (xl(e, t, r, !1), (l = (r & t.childLanes) !== 0)),
          o)
        ) {
          if (l) return cy(e, t, r);
          t.flags |= 128;
        }
        if (
          ((o = t.memoizedState),
          o !== null &&
            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
          nt(Dt, Dt.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), ay(e, t, r);
      case 24:
        ir(t, Mt, e.memoizedState.cache);
    }
    return Ma(e, t, r);
  }
  function fy(e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) kt = !0;
      else {
        if (!jf(e, r) && !(t.flags & 128)) return (kt = !1), tx(e, t, r);
        kt = !!(e.flags & 131072);
      }
    else (kt = !1), et && t.flags & 1048576 && $m(t, Xu, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType,
            o = l._init;
          if (((l = o(l._payload)), (t.type = l), typeof l == "function"))
            Jf(l)
              ? ((e = ei(l, e)), (t.tag = 1), (t = sy(null, t, l, e, r)))
              : ((t.tag = 0), (t = Of(null, t, l, e, r)));
          else {
            if (l != null) {
              if (((o = l.$$typeof), o === T)) {
                (t.tag = 11), (t = ey(null, t, l, e, r));
                break e;
              } else if (o === j) {
                (t.tag = 14), (t = ty(null, t, l, e, r));
                break e;
              }
            }
            throw ((t = Se(l) || l), Error(s(306, t, "")));
          }
        }
        return t;
      case 0:
        return Of(e, t, t.type, t.pendingProps, r);
      case 1:
        return (l = t.type), (o = ei(l, t.pendingProps)), sy(e, t, l, o, r);
      case 3:
        e: {
          if ((Br(t, t.stateNode.containerInfo), e === null))
            throw Error(s(387));
          var f = t.pendingProps;
          (o = t.memoizedState), (l = o.element), qf(e, t), wl(t, f, null, r);
          var y = t.memoizedState;
          if (
            ((f = y.cache),
            ir(t, Mt, f),
            f !== o.cache && Hf(t, [Mt], r, !0),
            _l(),
            (f = y.element),
            o.isDehydrated)
          )
            if (
              ((o = { element: f, isDehydrated: !1, cache: y.cache }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              t = ly(e, t, f, r);
              break e;
            } else if (f !== l) {
              (l = Dn(Error(s(424)), t)), ol(l), (t = ly(e, t, f, r));
              break e;
            } else
              for (
                Ht = Kn(t.stateNode.containerInfo.firstChild),
                  It = t,
                  et = !0,
                  Fn = null,
                  ia = !0,
                  r = rp(t, null, f, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((ul(), f === l)) {
              t = Ma(e, t, r);
              break e;
            }
            Vt(e, t, f, r);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          bl(e, t),
          e === null
            ? (r = mg(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = r)
              : et ||
                ((r = t.type),
                (e = t.pendingProps),
                (l = Ao(sn.current).createElement(r)),
                (l[Yt] = t),
                (l[cn] = e),
                qt(l, r, e),
                Ut(l),
                (t.stateNode = l))
            : (t.memoizedState = mg(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Di(t),
          e === null &&
            et &&
            ((l = t.stateNode = fg(t.type, t.pendingProps, sn.current)),
            (It = t),
            (ia = !0),
            (Ht = Kn(l.firstChild))),
          (l = t.pendingProps.children),
          e !== null || et ? Vt(e, t, l, r) : (t.child = $r(t, null, l, r)),
          bl(e, t),
          t.child
        );
      case 5:
        return (
          e === null &&
            et &&
            ((o = l = Ht) &&
              ((l = Mx(l, t.type, t.pendingProps, ia)),
              l !== null
                ? ((t.stateNode = l),
                  (It = t),
                  (Ht = Kn(l.firstChild)),
                  (ia = !1),
                  (o = !0))
                : (o = !1)),
            o || Kr(t)),
          Di(t),
          (o = t.type),
          (f = t.pendingProps),
          (y = e !== null ? e.memoizedProps : null),
          (l = f.children),
          _d(o, f) ? (l = null) : y !== null && _d(o, y) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((o = cf(e, t, K1, null, null, r)), (Bl._currentValue = o)),
          bl(e, t),
          Vt(e, t, l, r),
          t.child
        );
      case 6:
        return (
          e === null &&
            et &&
            ((e = r = Ht) &&
              ((r = Nx(r, t.pendingProps, ia)),
              r !== null
                ? ((t.stateNode = r), (It = t), (Ht = null), (e = !0))
                : (e = !1)),
            e || Kr(t)),
          null
        );
      case 13:
        return uy(e, t, r);
      case 4:
        return (
          Br(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = $r(t, null, l, r)) : Vt(e, t, l, r),
          t.child
        );
      case 11:
        return ey(e, t, t.type, t.pendingProps, r);
      case 7:
        return Vt(e, t, t.pendingProps, r), t.child;
      case 8:
        return Vt(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return Vt(e, t, t.pendingProps.children, r), t.child;
      case 10:
        return (
          (l = t.pendingProps),
          ir(t, t.type, l.value),
          Vt(e, t, l.children, r),
          t.child
        );
      case 9:
        return (
          (o = t.type._context),
          (l = t.pendingProps.children),
          ni(t),
          (o = Qt(o)),
          (l = l(o)),
          (t.flags |= 1),
          Vt(e, t, l, r),
          t.child
        );
      case 14:
        return ty(e, t, t.type, t.pendingProps, r);
      case 15:
        return ny(e, t, t.type, t.pendingProps, r);
      case 19:
        return cy(e, t, r);
      case 22:
        return ay(e, t, r);
      case 24:
        return (
          ni(t),
          (l = Qt(Mt)),
          e === null
            ? ((o = uf()),
              o === null &&
                ((o = ft),
                (f = sf()),
                (o.pooledCache = f),
                f.refCount++,
                f !== null && (o.pooledCacheLanes |= r),
                (o = f)),
              (t.memoizedState = { parent: l, cache: o }),
              Vf(t),
              ir(t, Mt, o))
            : (e.lanes & r && (qf(e, t), wl(t, null, null, r), _l()),
              (o = e.memoizedState),
              (f = t.memoizedState),
              o.parent !== l
                ? ((o = { parent: l, cache: l }),
                  (t.memoizedState = o),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = o),
                  ir(t, Mt, l))
                : ((l = f.cache),
                  ir(t, Mt, l),
                  l !== o.cache && Hf(t, [Mt], r, !0))),
          Vt(e, t, t.pendingProps.children, r),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  var Lf = je(null),
    ti = null,
    Na = null;
  function ir(e, t, r) {
    nt(Lf, t._currentValue), (t._currentValue = r);
  }
  function za(e) {
    (e._currentValue = Lf.current), Je(Lf);
  }
  function Bf(e, t, r) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function Hf(e, t, r, l) {
    var o = e.child;
    for (o !== null && (o.return = e); o !== null; ) {
      var f = o.dependencies;
      if (f !== null) {
        var y = o.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var v = f;
          f = o;
          for (var S = 0; S < t.length; S++)
            if (v.context === t[S]) {
              (f.lanes |= r),
                (v = f.alternate),
                v !== null && (v.lanes |= r),
                Bf(f.return, r, e),
                l || (y = null);
              break e;
            }
          f = v.next;
        }
      } else if (o.tag === 18) {
        if (((y = o.return), y === null)) throw Error(s(341));
        (y.lanes |= r),
          (f = y.alternate),
          f !== null && (f.lanes |= r),
          Bf(y, r, e),
          (y = null);
      } else y = o.child;
      if (y !== null) y.return = o;
      else
        for (y = o; y !== null; ) {
          if (y === e) {
            y = null;
            break;
          }
          if (((o = y.sibling), o !== null)) {
            (o.return = y.return), (y = o);
            break;
          }
          y = y.return;
        }
      o = y;
    }
  }
  function xl(e, t, r, l) {
    e = null;
    for (var o = t, f = !1; o !== null; ) {
      if (!f) {
        if (o.flags & 524288) f = !0;
        else if (o.flags & 262144) break;
      }
      if (o.tag === 10) {
        var y = o.alternate;
        if (y === null) throw Error(s(387));
        if (((y = y.memoizedProps), y !== null)) {
          var v = o.type;
          bn(o.pendingProps.value, y.value) ||
            (e !== null ? e.push(v) : (e = [v]));
        }
      } else if (o === wa.current) {
        if (((y = o.alternate), y === null)) throw Error(s(387));
        y.memoizedState.memoizedState !== o.memoizedState.memoizedState &&
          (e !== null ? e.push(Bl) : (e = [Bl]));
      }
      o = o.return;
    }
    e !== null && Hf(t, e, r, l), (t.flags |= 262144);
  }
  function co(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!bn(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function ni(e) {
    (ti = e),
      (Na = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function Qt(e) {
    return dy(ti, e);
  }
  function fo(e, t) {
    return ti === null && ni(e), dy(e, t);
  }
  function dy(e, t) {
    var r = t._currentValue;
    if (((t = { context: t, memoizedValue: r, next: null }), Na === null)) {
      if (e === null) throw Error(s(308));
      (Na = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else Na = Na.next = t;
    return r;
  }
  var sr = !1;
  function Vf(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function qf(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function lr(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ur(e, t, r) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), mt & 2)) {
      var o = l.pending;
      return (
        o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
        (l.pending = t),
        (t = Gu(e)),
        Xm(e, null, r),
        t
      );
    }
    return Qu(e, l, t, r), Gu(e);
  }
  function Sl(e, t, r) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194176) !== 0))
    ) {
      var l = t.lanes;
      (l &= e.pendingLanes), (r |= l), (t.lanes = r), Qn(e, r);
    }
  }
  function Zf(e, t) {
    var r = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), r === l)) {
      var o = null,
        f = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var y = {
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null,
          };
          f === null ? (o = f = y) : (f = f.next = y), (r = r.next);
        } while (r !== null);
        f === null ? (o = f = t) : (f = f.next = t);
      } else o = f = t;
      (r = {
        baseState: l.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: f,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t);
  }
  var Yf = !1;
  function _l() {
    if (Yf) {
      var e = Wi;
      if (e !== null) throw e;
    }
  }
  function wl(e, t, r, l) {
    Yf = !1;
    var o = e.updateQueue;
    sr = !1;
    var f = o.firstBaseUpdate,
      y = o.lastBaseUpdate,
      v = o.shared.pending;
    if (v !== null) {
      o.shared.pending = null;
      var S = v,
        D = S.next;
      (S.next = null), y === null ? (f = D) : (y.next = D), (y = S);
      var Z = e.alternate;
      Z !== null &&
        ((Z = Z.updateQueue),
        (v = Z.lastBaseUpdate),
        v !== y &&
          (v === null ? (Z.firstBaseUpdate = D) : (v.next = D),
          (Z.lastBaseUpdate = S)));
    }
    if (f !== null) {
      var $ = o.baseState;
      (y = 0), (Z = D = S = null), (v = f);
      do {
        var k = v.lane & -536870913,
          q = k !== v.lane;
        if (q ? (We & k) === k : (l & k) === k) {
          k !== 0 && k === Pi && (Yf = !0),
            Z !== null &&
              (Z = Z.next =
                {
                  lane: 0,
                  tag: v.tag,
                  payload: v.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var _e = e,
              ke = v;
            k = t;
            var xt = r;
            switch (ke.tag) {
              case 1:
                if (((_e = ke.payload), typeof _e == "function")) {
                  $ = _e.call(xt, $, k);
                  break e;
                }
                $ = _e;
                break e;
              case 3:
                _e.flags = (_e.flags & -65537) | 128;
              case 0:
                if (
                  ((_e = ke.payload),
                  (k = typeof _e == "function" ? _e.call(xt, $, k) : _e),
                  k == null)
                )
                  break e;
                $ = pe({}, $, k);
                break e;
              case 2:
                sr = !0;
            }
          }
          (k = v.callback),
            k !== null &&
              ((e.flags |= 64),
              q && (e.flags |= 8192),
              (q = o.callbacks),
              q === null ? (o.callbacks = [k]) : q.push(k));
        } else
          (q = {
            lane: k,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            Z === null ? ((D = Z = q), (S = $)) : (Z = Z.next = q),
            (y |= k);
        if (((v = v.next), v === null)) {
          if (((v = o.shared.pending), v === null)) break;
          (q = v),
            (v = q.next),
            (q.next = null),
            (o.lastBaseUpdate = q),
            (o.shared.pending = null);
        }
      } while (!0);
      Z === null && (S = $),
        (o.baseState = S),
        (o.firstBaseUpdate = D),
        (o.lastBaseUpdate = Z),
        f === null && (o.shared.lanes = 0),
        (hr |= y),
        (e.lanes = y),
        (e.memoizedState = $);
    }
  }
  function hy(e, t) {
    if (typeof e != "function") throw Error(s(191, e));
    e.call(t);
  }
  function my(e, t) {
    var r = e.callbacks;
    if (r !== null)
      for (e.callbacks = null, e = 0; e < r.length; e++) hy(r[e], t);
  }
  function El(e, t) {
    try {
      var r = t.updateQueue,
        l = r !== null ? r.lastEffect : null;
      if (l !== null) {
        var o = l.next;
        r = o;
        do {
          if ((r.tag & e) === e) {
            l = void 0;
            var f = r.create,
              y = r.inst;
            (l = f()), (y.destroy = l);
          }
          r = r.next;
        } while (r !== o);
      }
    } catch (v) {
      ct(t, t.return, v);
    }
  }
  function or(e, t, r) {
    try {
      var l = t.updateQueue,
        o = l !== null ? l.lastEffect : null;
      if (o !== null) {
        var f = o.next;
        l = f;
        do {
          if ((l.tag & e) === e) {
            var y = l.inst,
              v = y.destroy;
            if (v !== void 0) {
              (y.destroy = void 0), (o = t);
              var S = r;
              try {
                v();
              } catch (D) {
                ct(o, S, D);
              }
            }
          }
          l = l.next;
        } while (l !== f);
      }
    } catch (D) {
      ct(t, t.return, D);
    }
  }
  function py(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var r = e.stateNode;
      try {
        my(t, r);
      } catch (l) {
        ct(e, e.return, l);
      }
    }
  }
  function yy(e, t, r) {
    (r.props = ei(e.type, e.memoizedProps)), (r.state = e.memoizedState);
    try {
      r.componentWillUnmount();
    } catch (l) {
      ct(e, t, l);
    }
  }
  function ai(e, t) {
    try {
      var r = e.ref;
      if (r !== null) {
        var l = e.stateNode;
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var o = l;
            break;
          default:
            o = l;
        }
        typeof r == "function" ? (e.refCleanup = r(o)) : (r.current = o);
      }
    } catch (f) {
      ct(e, t, f);
    }
  }
  function xn(e, t) {
    var r = e.ref,
      l = e.refCleanup;
    if (r !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (o) {
          ct(e, t, o);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof r == "function")
        try {
          r(null);
        } catch (o) {
          ct(e, t, o);
        }
      else r.current = null;
  }
  function gy(e) {
    var t = e.type,
      r = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          r.autoFocus && l.focus();
          break e;
        case "img":
          r.src ? (l.src = r.src) : r.srcSet && (l.srcset = r.srcSet);
      }
    } catch (o) {
      ct(e, e.return, o);
    }
  }
  function vy(e, t, r) {
    try {
      var l = e.stateNode;
      Rx(l, e.type, r, t), (l[cn] = t);
    } catch (o) {
      ct(e, e.return, o);
    }
  }
  function by(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4
    );
  }
  function Qf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || by(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Gf(e, t, r) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = Ro));
    else if (l !== 4 && l !== 27 && ((e = e.child), e !== null))
      for (Gf(e, t, r), e = e.sibling; e !== null; )
        Gf(e, t, r), (e = e.sibling);
  }
  function ho(e, t, r) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (l !== 4 && l !== 27 && ((e = e.child), e !== null))
      for (ho(e, t, r), e = e.sibling; e !== null; )
        ho(e, t, r), (e = e.sibling);
  }
  var Ua = !1,
    vt = !1,
    Ff = !1,
    xy = typeof WeakSet == "function" ? WeakSet : Set,
    jt = null,
    Sy = !1;
  function nx(e, t) {
    if (((e = e.containerInfo), (xd = zo), (e = Bm(e)), Xc(e))) {
      if ("selectionStart" in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var l = r.getSelection && r.getSelection();
          if (l && l.rangeCount !== 0) {
            r = l.anchorNode;
            var o = l.anchorOffset,
              f = l.focusNode;
            l = l.focusOffset;
            try {
              r.nodeType, f.nodeType;
            } catch {
              r = null;
              break e;
            }
            var y = 0,
              v = -1,
              S = -1,
              D = 0,
              Z = 0,
              $ = e,
              k = null;
            t: for (;;) {
              for (
                var q;
                $ !== r || (o !== 0 && $.nodeType !== 3) || (v = y + o),
                  $ !== f || (l !== 0 && $.nodeType !== 3) || (S = y + l),
                  $.nodeType === 3 && (y += $.nodeValue.length),
                  (q = $.firstChild) !== null;

              )
                (k = $), ($ = q);
              for (;;) {
                if ($ === e) break t;
                if (
                  (k === r && ++D === o && (v = y),
                  k === f && ++Z === l && (S = y),
                  (q = $.nextSibling) !== null)
                )
                  break;
                ($ = k), (k = $.parentNode);
              }
              $ = q;
            }
            r = v === -1 || S === -1 ? null : { start: v, end: S };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      Sd = { focusedElem: e, selectionRange: r }, zo = !1, jt = t;
      jt !== null;

    )
      if (
        ((t = jt), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (jt = e);
      else
        for (; jt !== null; ) {
          switch (((t = jt), (f = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (e & 1024 && f !== null) {
                (e = void 0),
                  (r = t),
                  (o = f.memoizedProps),
                  (f = f.memoizedState),
                  (l = r.stateNode);
                try {
                  var _e = ei(r.type, o, r.elementType === r.type);
                  (e = l.getSnapshotBeforeUpdate(_e, f)),
                    (l.__reactInternalSnapshotBeforeUpdate = e);
                } catch (ke) {
                  ct(r, r.return, ke);
                }
              }
              break;
            case 3:
              if (e & 1024) {
                if (
                  ((e = t.stateNode.containerInfo), (r = e.nodeType), r === 9)
                )
                  Td(e);
                else if (r === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Td(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if (e & 1024) throw Error(s(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (jt = e);
            break;
          }
          jt = t.return;
        }
    return (_e = Sy), (Sy = !1), _e;
  }
  function _y(e, t, r) {
    var l = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        ja(e, r), l & 4 && El(5, r);
        break;
      case 1:
        if ((ja(e, r), l & 4))
          if (((e = r.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (v) {
              ct(r, r.return, v);
            }
          else {
            var o = ei(r.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(o, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (v) {
              ct(r, r.return, v);
            }
          }
        l & 64 && py(r), l & 512 && ai(r, r.return);
        break;
      case 3:
        if ((ja(e, r), l & 64 && ((l = r.updateQueue), l !== null))) {
          if (((e = null), r.child !== null))
            switch (r.child.tag) {
              case 27:
              case 5:
                e = r.child.stateNode;
                break;
              case 1:
                e = r.child.stateNode;
            }
          try {
            my(l, e);
          } catch (v) {
            ct(r, r.return, v);
          }
        }
        break;
      case 26:
        ja(e, r), l & 512 && ai(r, r.return);
        break;
      case 27:
      case 5:
        ja(e, r), t === null && l & 4 && gy(r), l & 512 && ai(r, r.return);
        break;
      case 12:
        ja(e, r);
        break;
      case 13:
        ja(e, r), l & 4 && Ty(e, r);
        break;
      case 22:
        if (((o = r.memoizedState !== null || Ua), !o)) {
          t = (t !== null && t.memoizedState !== null) || vt;
          var f = Ua,
            y = vt;
          (Ua = o),
            (vt = t) && !y ? cr(e, r, (r.subtreeFlags & 8772) !== 0) : ja(e, r),
            (Ua = f),
            (vt = y);
        }
        l & 512 &&
          (r.memoizedProps.mode === "manual"
            ? ai(r, r.return)
            : xn(r, r.return));
        break;
      default:
        ja(e, r);
    }
  }
  function wy(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), wy(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Mc(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Ot = null,
    Sn = !1;
  function ka(e, t, r) {
    for (r = r.child; r !== null; ) Ey(e, t, r), (r = r.sibling);
  }
  function Ey(e, t, r) {
    if (gt && typeof gt.onCommitFiberUnmount == "function")
      try {
        gt.onCommitFiberUnmount(Rn, r);
      } catch {}
    switch (r.tag) {
      case 26:
        vt || xn(r, t),
          ka(e, t, r),
          r.memoizedState
            ? r.memoizedState.count--
            : r.stateNode && ((r = r.stateNode), r.parentNode.removeChild(r));
        break;
      case 27:
        vt || xn(r, t);
        var l = Ot,
          o = Sn;
        for (
          Ot = r.stateNode, ka(e, t, r), r = r.stateNode, t = r.attributes;
          t.length;

        )
          r.removeAttributeNode(t[0]);
        Mc(r), (Ot = l), (Sn = o);
        break;
      case 5:
        vt || xn(r, t);
      case 6:
        o = Ot;
        var f = Sn;
        if (((Ot = null), ka(e, t, r), (Ot = o), (Sn = f), Ot !== null))
          if (Sn)
            try {
              (e = Ot),
                (l = r.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(l)
                  : e.removeChild(l);
            } catch (y) {
              ct(r, t, y);
            }
          else
            try {
              Ot.removeChild(r.stateNode);
            } catch (y) {
              ct(r, t, y);
            }
        break;
      case 18:
        Ot !== null &&
          (Sn
            ? ((t = Ot),
              (r = r.stateNode),
              t.nodeType === 8
                ? Ed(t.parentNode, r)
                : t.nodeType === 1 && Ed(t, r),
              Zl(t))
            : Ed(Ot, r.stateNode));
        break;
      case 4:
        (l = Ot),
          (o = Sn),
          (Ot = r.stateNode.containerInfo),
          (Sn = !0),
          ka(e, t, r),
          (Ot = l),
          (Sn = o);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        vt || or(2, r, t), vt || or(4, r, t), ka(e, t, r);
        break;
      case 1:
        vt ||
          (xn(r, t),
          (l = r.stateNode),
          typeof l.componentWillUnmount == "function" && yy(r, t, l)),
          ka(e, t, r);
        break;
      case 21:
        ka(e, t, r);
        break;
      case 22:
        vt || xn(r, t),
          (vt = (l = vt) || r.memoizedState !== null),
          ka(e, t, r),
          (vt = l);
        break;
      default:
        ka(e, t, r);
    }
  }
  function Ty(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Zl(e);
      } catch (r) {
        ct(t, t.return, r);
      }
  }
  function ax(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new xy()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new xy()),
          t
        );
      default:
        throw Error(s(435, e.tag));
    }
  }
  function Xf(e, t) {
    var r = ax(e);
    t.forEach(function (l) {
      var o = yx.bind(null, e, l);
      r.has(l) || (r.add(l), l.then(o, o));
    });
  }
  function Un(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var l = 0; l < r.length; l++) {
        var o = r[l],
          f = e,
          y = t,
          v = y;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
            case 5:
              (Ot = v.stateNode), (Sn = !1);
              break e;
            case 3:
              (Ot = v.stateNode.containerInfo), (Sn = !0);
              break e;
            case 4:
              (Ot = v.stateNode.containerInfo), (Sn = !0);
              break e;
          }
          v = v.return;
        }
        if (Ot === null) throw Error(s(160));
        Ey(f, y, o),
          (Ot = null),
          (Sn = !1),
          (f = o.alternate),
          f !== null && (f.return = null),
          (o.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) Ry(t, e), (t = t.sibling);
  }
  var Xn = null;
  function Ry(e, t) {
    var r = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Un(t, e),
          kn(e),
          l & 4 && (or(3, e, e.return), El(3, e), or(5, e, e.return));
        break;
      case 1:
        Un(t, e),
          kn(e),
          l & 512 && (vt || r === null || xn(r, r.return)),
          l & 64 &&
            Ua &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((r = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = r === null ? l : r.concat(l)))));
        break;
      case 26:
        var o = Xn;
        if (
          (Un(t, e),
          kn(e),
          l & 512 && (vt || r === null || xn(r, r.return)),
          l & 4)
        ) {
          var f = r !== null ? r.memoizedState : null;
          if (((l = e.memoizedState), r === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  (l = e.type),
                    (r = e.memoizedProps),
                    (o = o.ownerDocument || o);
                  t: switch (l) {
                    case "title":
                      (f = o.getElementsByTagName("title")[0]),
                        (!f ||
                          f[Js] ||
                          f[Yt] ||
                          f.namespaceURI === "http://www.w3.org/2000/svg" ||
                          f.hasAttribute("itemprop")) &&
                          ((f = o.createElement(l)),
                          o.head.insertBefore(
                            f,
                            o.querySelector("head > title"),
                          )),
                        qt(f, l, r),
                        (f[Yt] = e),
                        Ut(f),
                        (l = f);
                      break e;
                    case "link":
                      var y = gg("link", "href", o).get(l + (r.href || ""));
                      if (y) {
                        for (var v = 0; v < y.length; v++)
                          if (
                            ((f = y[v]),
                            f.getAttribute("href") ===
                              (r.href == null ? null : r.href) &&
                              f.getAttribute("rel") ===
                                (r.rel == null ? null : r.rel) &&
                              f.getAttribute("title") ===
                                (r.title == null ? null : r.title) &&
                              f.getAttribute("crossorigin") ===
                                (r.crossOrigin == null ? null : r.crossOrigin))
                          ) {
                            y.splice(v, 1);
                            break t;
                          }
                      }
                      (f = o.createElement(l)),
                        qt(f, l, r),
                        o.head.appendChild(f);
                      break;
                    case "meta":
                      if (
                        (y = gg("meta", "content", o).get(
                          l + (r.content || ""),
                        ))
                      ) {
                        for (v = 0; v < y.length; v++)
                          if (
                            ((f = y[v]),
                            f.getAttribute("content") ===
                              (r.content == null ? null : "" + r.content) &&
                              f.getAttribute("name") ===
                                (r.name == null ? null : r.name) &&
                              f.getAttribute("property") ===
                                (r.property == null ? null : r.property) &&
                              f.getAttribute("http-equiv") ===
                                (r.httpEquiv == null ? null : r.httpEquiv) &&
                              f.getAttribute("charset") ===
                                (r.charSet == null ? null : r.charSet))
                          ) {
                            y.splice(v, 1);
                            break t;
                          }
                      }
                      (f = o.createElement(l)),
                        qt(f, l, r),
                        o.head.appendChild(f);
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  (f[Yt] = e), Ut(f), (l = f);
                }
                e.stateNode = l;
              } else vg(o, e.type, e.stateNode);
            else e.stateNode = yg(o, l, e.memoizedProps);
          else
            f !== l
              ? (f === null
                  ? r.stateNode !== null &&
                    ((r = r.stateNode), r.parentNode.removeChild(r))
                  : f.count--,
                l === null
                  ? vg(o, e.type, e.stateNode)
                  : yg(o, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                vy(e, e.memoizedProps, r.memoizedProps);
        }
        break;
      case 27:
        if (l & 4 && e.alternate === null) {
          (o = e.stateNode), (f = e.memoizedProps);
          try {
            for (var S = o.firstChild; S; ) {
              var D = S.nextSibling,
                Z = S.nodeName;
              S[Js] ||
                Z === "HEAD" ||
                Z === "BODY" ||
                Z === "SCRIPT" ||
                Z === "STYLE" ||
                (Z === "LINK" && S.rel.toLowerCase() === "stylesheet") ||
                o.removeChild(S),
                (S = D);
            }
            for (var $ = e.type, k = o.attributes; k.length; )
              o.removeAttributeNode(k[0]);
            qt(o, $, f), (o[Yt] = e), (o[cn] = f);
          } catch (_e) {
            ct(e, e.return, _e);
          }
        }
      case 5:
        if (
          (Un(t, e),
          kn(e),
          l & 512 && (vt || r === null || xn(r, r.return)),
          e.flags & 32)
        ) {
          o = e.stateNode;
          try {
            Hi(o, "");
          } catch (_e) {
            ct(e, e.return, _e);
          }
        }
        l & 4 &&
          e.stateNode != null &&
          ((o = e.memoizedProps), vy(e, o, r !== null ? r.memoizedProps : o)),
          l & 1024 && (Ff = !0);
        break;
      case 6:
        if ((Un(t, e), kn(e), l & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (l = e.memoizedProps), (r = e.stateNode);
          try {
            r.nodeValue = l;
          } catch (_e) {
            ct(e, e.return, _e);
          }
        }
        break;
      case 3:
        if (
          ((Do = null),
          (o = Xn),
          (Xn = Oo(t.containerInfo)),
          Un(t, e),
          (Xn = o),
          kn(e),
          l & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            Zl(t.containerInfo);
          } catch (_e) {
            ct(e, e.return, _e);
          }
        Ff && ((Ff = !1), Ay(e));
        break;
      case 4:
        (l = Xn),
          (Xn = Oo(e.stateNode.containerInfo)),
          Un(t, e),
          kn(e),
          (Xn = l);
        break;
      case 12:
        Un(t, e), kn(e);
        break;
      case 13:
        Un(t, e),
          kn(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (r !== null && r.memoizedState !== null) &&
            (nd = ge()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Xf(e, l)));
        break;
      case 22:
        if (
          (l & 512 && (vt || r === null || xn(r, r.return)),
          (S = e.memoizedState !== null),
          (D = r !== null && r.memoizedState !== null),
          (Z = Ua),
          ($ = vt),
          (Ua = Z || S),
          (vt = $ || D),
          Un(t, e),
          (vt = $),
          (Ua = Z),
          kn(e),
          (t = e.stateNode),
          (t._current = e),
          (t._visibility &= -3),
          (t._visibility |= t._pendingVisibility & 2),
          l & 8192 &&
            ((t._visibility = S ? t._visibility & -2 : t._visibility | 1),
            S && ((t = Ua || vt), r === null || D || t || ns(e)),
            e.memoizedProps === null || e.memoizedProps.mode !== "manual"))
        )
          e: for (r = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
              if (r === null) {
                D = r = t;
                try {
                  if (((o = D.stateNode), S))
                    (f = o.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none");
                  else {
                    (y = D.stateNode), (v = D.memoizedProps.style);
                    var q =
                      v != null && v.hasOwnProperty("display")
                        ? v.display
                        : null;
                    y.style.display =
                      q == null || typeof q == "boolean" ? "" : ("" + q).trim();
                  }
                } catch (_e) {
                  ct(D, D.return, _e);
                }
              }
            } else if (t.tag === 6) {
              if (r === null) {
                D = t;
                try {
                  D.stateNode.nodeValue = S ? "" : D.memoizedProps;
                } catch (_e) {
                  ct(D, D.return, _e);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              r === t && (r = null), (t = t.return);
            }
            r === t && (r = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((r = l.retryQueue),
            r !== null && ((l.retryQueue = null), Xf(e, r))));
        break;
      case 19:
        Un(t, e),
          kn(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Xf(e, l)));
        break;
      case 21:
        break;
      default:
        Un(t, e), kn(e);
    }
  }
  function kn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        if (e.tag !== 27) {
          e: {
            for (var r = e.return; r !== null; ) {
              if (by(r)) {
                var l = r;
                break e;
              }
              r = r.return;
            }
            throw Error(s(160));
          }
          switch (l.tag) {
            case 27:
              var o = l.stateNode,
                f = Qf(e);
              ho(e, f, o);
              break;
            case 5:
              var y = l.stateNode;
              l.flags & 32 && (Hi(y, ""), (l.flags &= -33));
              var v = Qf(e);
              ho(e, v, y);
              break;
            case 3:
            case 4:
              var S = l.stateNode.containerInfo,
                D = Qf(e);
              Gf(e, D, S);
              break;
            default:
              throw Error(s(161));
          }
        }
      } catch (Z) {
        ct(e, e.return, Z);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ay(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Ay(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function ja(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) _y(e, t.alternate, t), (t = t.sibling);
  }
  function ns(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          or(4, t, t.return), ns(t);
          break;
        case 1:
          xn(t, t.return);
          var r = t.stateNode;
          typeof r.componentWillUnmount == "function" && yy(t, t.return, r),
            ns(t);
          break;
        case 26:
        case 27:
        case 5:
          xn(t, t.return), ns(t);
          break;
        case 22:
          xn(t, t.return), t.memoizedState === null && ns(t);
          break;
        default:
          ns(t);
      }
      e = e.sibling;
    }
  }
  function cr(e, t, r) {
    for (r = r && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        o = e,
        f = t,
        y = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          cr(o, f, r), El(4, f);
          break;
        case 1:
          if (
            (cr(o, f, r),
            (l = f),
            (o = l.stateNode),
            typeof o.componentDidMount == "function")
          )
            try {
              o.componentDidMount();
            } catch (D) {
              ct(l, l.return, D);
            }
          if (((l = f), (o = l.updateQueue), o !== null)) {
            var v = l.stateNode;
            try {
              var S = o.shared.hiddenCallbacks;
              if (S !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < S.length; o++)
                  hy(S[o], v);
            } catch (D) {
              ct(l, l.return, D);
            }
          }
          r && y & 64 && py(f), ai(f, f.return);
          break;
        case 26:
        case 27:
        case 5:
          cr(o, f, r), r && l === null && y & 4 && gy(f), ai(f, f.return);
          break;
        case 12:
          cr(o, f, r);
          break;
        case 13:
          cr(o, f, r), r && y & 4 && Ty(o, f);
          break;
        case 22:
          f.memoizedState === null && cr(o, f, r), ai(f, f.return);
          break;
        default:
          cr(o, f, r);
      }
      t = t.sibling;
    }
  }
  function Kf(e, t) {
    var r = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (r = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== r && (e != null && e.refCount++, r != null && ml(r));
  }
  function $f(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && ml(e));
  }
  function fr(e, t, r, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Oy(e, t, r, l), (t = t.sibling);
  }
  function Oy(e, t, r, l) {
    var o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        fr(e, t, r, l), o & 2048 && El(9, t);
        break;
      case 3:
        fr(e, t, r, l),
          o & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && ml(e)));
        break;
      case 12:
        if (o & 2048) {
          fr(e, t, r, l), (e = t.stateNode);
          try {
            var f = t.memoizedProps,
              y = f.id,
              v = f.onPostCommit;
            typeof v == "function" &&
              v(
                y,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (S) {
            ct(t, t.return, S);
          }
        } else fr(e, t, r, l);
        break;
      case 23:
        break;
      case 22:
        (f = t.stateNode),
          t.memoizedState !== null
            ? f._visibility & 4
              ? fr(e, t, r, l)
              : Tl(e, t)
            : f._visibility & 4
              ? fr(e, t, r, l)
              : ((f._visibility |= 4),
                as(e, t, r, l, (t.subtreeFlags & 10256) !== 0)),
          o & 2048 && Kf(t.alternate, t);
        break;
      case 24:
        fr(e, t, r, l), o & 2048 && $f(t.alternate, t);
        break;
      default:
        fr(e, t, r, l);
    }
  }
  function as(e, t, r, l, o) {
    for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var f = e,
        y = t,
        v = r,
        S = l,
        D = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          as(f, y, v, S, o), El(8, y);
          break;
        case 23:
          break;
        case 22:
          var Z = y.stateNode;
          y.memoizedState !== null
            ? Z._visibility & 4
              ? as(f, y, v, S, o)
              : Tl(f, y)
            : ((Z._visibility |= 4), as(f, y, v, S, o)),
            o && D & 2048 && Kf(y.alternate, y);
          break;
        case 24:
          as(f, y, v, S, o), o && D & 2048 && $f(y.alternate, y);
          break;
        default:
          as(f, y, v, S, o);
      }
      t = t.sibling;
    }
  }
  function Tl(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var r = e,
          l = t,
          o = l.flags;
        switch (l.tag) {
          case 22:
            Tl(r, l), o & 2048 && Kf(l.alternate, l);
            break;
          case 24:
            Tl(r, l), o & 2048 && $f(l.alternate, l);
            break;
          default:
            Tl(r, l);
        }
        t = t.sibling;
      }
  }
  var Rl = 8192;
  function rs(e) {
    if (e.subtreeFlags & Rl)
      for (e = e.child; e !== null; ) Cy(e), (e = e.sibling);
  }
  function Cy(e) {
    switch (e.tag) {
      case 26:
        rs(e),
          e.flags & Rl &&
            e.memoizedState !== null &&
            Gx(Xn, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        rs(e);
        break;
      case 3:
      case 4:
        var t = Xn;
        (Xn = Oo(e.stateNode.containerInfo)), rs(e), (Xn = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = Rl), (Rl = 16777216), rs(e), (Rl = t))
            : rs(e));
        break;
      default:
        rs(e);
    }
  }
  function Dy(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function Al(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null)
        for (var r = 0; r < t.length; r++) {
          var l = t[r];
          (jt = l), Ny(l, e);
        }
      Dy(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) My(e), (e = e.sibling);
  }
  function My(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Al(e), e.flags & 2048 && or(9, e, e.return);
        break;
      case 3:
        Al(e);
        break;
      case 12:
        Al(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 4 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -5), mo(e))
          : Al(e);
        break;
      default:
        Al(e);
    }
  }
  function mo(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null)
        for (var r = 0; r < t.length; r++) {
          var l = t[r];
          (jt = l), Ny(l, e);
        }
      Dy(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          or(8, t, t.return), mo(t);
          break;
        case 22:
          (r = t.stateNode),
            r._visibility & 4 && ((r._visibility &= -5), mo(t));
          break;
        default:
          mo(t);
      }
      e = e.sibling;
    }
  }
  function Ny(e, t) {
    for (; jt !== null; ) {
      var r = jt;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          or(8, r, t);
          break;
        case 23:
        case 22:
          if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
            var l = r.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          ml(r.memoizedState.cache);
      }
      if (((l = r.child), l !== null)) (l.return = r), (jt = l);
      else
        e: for (r = e; jt !== null; ) {
          l = jt;
          var o = l.sibling,
            f = l.return;
          if ((wy(l), l === r)) {
            jt = null;
            break e;
          }
          if (o !== null) {
            (o.return = f), (jt = o);
            break e;
          }
          jt = f;
        }
    }
  }
  function rx(e, t, r, l) {
    (this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function jn(e, t, r, l) {
    return new rx(e, t, r, l);
  }
  function Jf(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function dr(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = jn(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 31457280),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      (r.refCleanup = e.refCleanup),
      r
    );
  }
  function zy(e, t) {
    e.flags &= 31457282;
    var r = e.alternate;
    return (
      r === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = r.childLanes),
          (e.lanes = r.lanes),
          (e.child = r.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = r.memoizedProps),
          (e.memoizedState = r.memoizedState),
          (e.updateQueue = r.updateQueue),
          (e.type = r.type),
          (t = r.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function po(e, t, r, l, o, f) {
    var y = 0;
    if (((l = e), typeof e == "function")) Jf(e) && (y = 1);
    else if (typeof e == "string")
      y = Yx(e, r, Ct.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case p:
          return ri(r.children, o, f, t);
        case m:
          (y = 8), (o |= 24);
          break;
        case g:
          return (
            (e = jn(12, r, t, o | 2)), (e.elementType = g), (e.lanes = f), e
          );
        case O:
          return (e = jn(13, r, t, o)), (e.elementType = O), (e.lanes = f), e;
        case R:
          return (e = jn(19, r, t, o)), (e.elementType = R), (e.lanes = f), e;
        case V:
          return Uy(r, o, f, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case x:
              case b:
                y = 10;
                break e;
              case A:
                y = 9;
                break e;
              case T:
                y = 11;
                break e;
              case j:
                y = 14;
                break e;
              case L:
                (y = 16), (l = null);
                break e;
            }
          (y = 29),
            (r = Error(s(130, e === null ? "null" : typeof e, ""))),
            (l = null);
      }
    return (
      (t = jn(y, r, t, o)), (t.elementType = e), (t.type = l), (t.lanes = f), t
    );
  }
  function ri(e, t, r, l) {
    return (e = jn(7, e, l, t)), (e.lanes = r), e;
  }
  function Uy(e, t, r, l) {
    (e = jn(22, e, l, t)), (e.elementType = V), (e.lanes = r);
    var o = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var f = o._current;
        if (f === null) throw Error(s(456));
        if (!(o._pendingVisibility & 2)) {
          var y = er(f, 2);
          y !== null && ((o._pendingVisibility |= 2), en(y, f, 2));
        }
      },
      attach: function () {
        var f = o._current;
        if (f === null) throw Error(s(456));
        if (o._pendingVisibility & 2) {
          var y = er(f, 2);
          y !== null && ((o._pendingVisibility &= -3), en(y, f, 2));
        }
      },
    };
    return (e.stateNode = o), e;
  }
  function Pf(e, t, r) {
    return (e = jn(6, e, null, t)), (e.lanes = r), e;
  }
  function Wf(e, t, r) {
    return (
      (t = jn(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function La(e) {
    e.flags |= 4;
  }
  function ky(e, t) {
    if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !bg(t))) {
      if (
        ((t = zn.current),
        t !== null &&
          ((We & 4194176) === We
            ? sa !== null
            : ((We & 62914560) !== We && !(We & 536870912)) || t !== sa))
      )
        throw ((fl = nf), Wm);
      e.flags |= 8192;
    }
  }
  function yo(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? ln() : 536870912), (e.lanes |= t), (ss |= t));
  }
  function Ol(e, t) {
    if (!et)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          r = e.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), (r = r.sibling);
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function ht(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      l = 0;
    if (t)
      for (var o = e.child; o !== null; )
        (r |= o.lanes | o.childLanes),
          (l |= o.subtreeFlags & 31457280),
          (l |= o.flags & 31457280),
          (o.return = e),
          (o = o.sibling);
    else
      for (o = e.child; o !== null; )
        (r |= o.lanes | o.childLanes),
          (l |= o.subtreeFlags),
          (l |= o.flags),
          (o.return = e),
          (o = o.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = r), t;
  }
  function ix(e, t, r) {
    var l = t.pendingProps;
    switch ((ef(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ht(t), null;
      case 1:
        return ht(t), null;
      case 3:
        return (
          (r = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          za(Mt),
          ra(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (ll(t)
              ? La(t)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Fn !== null && (sd(Fn), (Fn = null)))),
          ht(t),
          null
        );
      case 26:
        return (
          (r = t.memoizedState),
          e === null
            ? (La(t),
              r !== null ? (ht(t), ky(t, r)) : (ht(t), (t.flags &= -16777217)))
            : r
              ? r !== e.memoizedState
                ? (La(t), ht(t), ky(t, r))
                : (ht(t), (t.flags &= -16777217))
              : (e.memoizedProps !== l && La(t), ht(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        E(t), (r = sn.current);
        var o = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== l && La(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(s(166));
            return ht(t), null;
          }
          (e = Ct.current),
            ll(t) ? Jm(t) : ((e = fg(o, l, r)), (t.stateNode = e), La(t));
        }
        return ht(t), null;
      case 5:
        if ((E(t), (r = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && La(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(s(166));
            return ht(t), null;
          }
          if (((e = Ct.current), ll(t))) Jm(t);
          else {
            switch (((o = Ao(sn.current)), e)) {
              case 1:
                e = o.createElementNS("http://www.w3.org/2000/svg", r);
                break;
              case 2:
                e = o.createElementNS("http://www.w3.org/1998/Math/MathML", r);
                break;
              default:
                switch (r) {
                  case "svg":
                    e = o.createElementNS("http://www.w3.org/2000/svg", r);
                    break;
                  case "math":
                    e = o.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      r,
                    );
                    break;
                  case "script":
                    (e = o.createElement("div")),
                      (e.innerHTML = "<script><\/script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof l.is == "string"
                        ? o.createElement("select", { is: l.is })
                        : o.createElement("select")),
                      l.multiple
                        ? (e.multiple = !0)
                        : l.size && (e.size = l.size);
                    break;
                  default:
                    e =
                      typeof l.is == "string"
                        ? o.createElement(r, { is: l.is })
                        : o.createElement(r);
                }
            }
            (e[Yt] = t), (e[cn] = l);
            e: for (o = t.child; o !== null; ) {
              if (o.tag === 5 || o.tag === 6) e.appendChild(o.stateNode);
              else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                (o.child.return = o), (o = o.child);
                continue;
              }
              if (o === t) break e;
              for (; o.sibling === null; ) {
                if (o.return === null || o.return === t) break e;
                o = o.return;
              }
              (o.sibling.return = o.return), (o = o.sibling);
            }
            t.stateNode = e;
            e: switch ((qt(e, r, l), r)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!l.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && La(t);
          }
        }
        return ht(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && La(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(s(166));
          if (((e = sn.current), ll(t))) {
            if (
              ((e = t.stateNode),
              (r = t.memoizedProps),
              (l = null),
              (o = It),
              o !== null)
            )
              switch (o.tag) {
                case 27:
                case 5:
                  l = o.memoizedProps;
              }
            (e[Yt] = t),
              (e = !!(
                e.nodeValue === r ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                ig(e.nodeValue, r)
              )),
              e || Kr(t);
          } else (e = Ao(e).createTextNode(l)), (e[Yt] = t), (t.stateNode = e);
        }
        return ht(t), null;
      case 13:
        if (
          ((l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((o = ll(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(s(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(s(317));
              o[Yt] = t;
            } else
              ul(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            ht(t), (o = !1);
          } else Fn !== null && (sd(Fn), (Fn = null)), (o = !0);
          if (!o) return t.flags & 256 ? (Ca(t), t) : (Ca(t), null);
        }
        if ((Ca(t), t.flags & 128)) return (t.lanes = r), t;
        if (
          ((r = l !== null), (e = e !== null && e.memoizedState !== null), r)
        ) {
          (l = t.child),
            (o = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (o = l.alternate.memoizedState.cachePool.pool);
          var f = null;
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (f = l.memoizedState.cachePool.pool),
            f !== o && (l.flags |= 2048);
        }
        return (
          r !== e && r && (t.child.flags |= 8192),
          yo(t, t.updateQueue),
          ht(t),
          null
        );
      case 4:
        return ra(), e === null && gd(t.stateNode.containerInfo), ht(t), null;
      case 10:
        return za(t.type), ht(t), null;
      case 19:
        if ((Je(Dt), (o = t.memoizedState), o === null)) return ht(t), null;
        if (((l = (t.flags & 128) !== 0), (f = o.rendering), f === null))
          if (l) Ol(o, !1);
          else {
            if (bt !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((f = Wu(e)), f !== null)) {
                  for (
                    t.flags |= 128,
                      Ol(o, !1),
                      e = f.updateQueue,
                      t.updateQueue = e,
                      yo(t, e),
                      t.subtreeFlags = 0,
                      e = r,
                      r = t.child;
                    r !== null;

                  )
                    zy(r, e), (r = r.sibling);
                  return nt(Dt, (Dt.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              ge() > go &&
              ((t.flags |= 128), (l = !0), Ol(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = Wu(f)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                yo(t, e),
                Ol(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !f.alternate &&
                  !et)
              )
                return ht(t), null;
            } else
              2 * ge() - o.renderingStartTime > go &&
                r !== 536870912 &&
                ((t.flags |= 128), (l = !0), Ol(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((f.sibling = t.child), (t.child = f))
            : ((e = o.last),
              e !== null ? (e.sibling = f) : (t.child = f),
              (o.last = f));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = ge()),
            (t.sibling = null),
            (e = Dt.current),
            nt(Dt, l ? (e & 1) | 2 : e & 1),
            t)
          : (ht(t), null);
      case 22:
      case 23:
        return (
          Ca(t),
          rf(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? r & 536870912 &&
              !(t.flags & 128) &&
              (ht(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ht(t),
          (r = t.updateQueue),
          r !== null && yo(t, r.retryQueue),
          (r = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (r = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== r && (t.flags |= 2048),
          e !== null && Je(Jr),
          null
        );
      case 24:
        return (
          (r = null),
          e !== null && (r = e.memoizedState.cache),
          t.memoizedState.cache !== r && (t.flags |= 2048),
          za(Mt),
          ht(t),
          null
        );
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function sx(e, t) {
    switch ((ef(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          za(Mt),
          ra(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return E(t), null;
      case 13:
        if (
          (Ca(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          ul();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Je(Dt), null;
      case 4:
        return ra(), null;
      case 10:
        return za(t.type), null;
      case 22:
      case 23:
        return (
          Ca(t),
          rf(),
          e !== null && Je(Jr),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return za(Mt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function jy(e, t) {
    switch ((ef(t), t.tag)) {
      case 3:
        za(Mt), ra();
        break;
      case 26:
      case 27:
      case 5:
        E(t);
        break;
      case 4:
        ra();
        break;
      case 13:
        Ca(t);
        break;
      case 19:
        Je(Dt);
        break;
      case 10:
        za(t.type);
        break;
      case 22:
      case 23:
        Ca(t), rf(), e !== null && Je(Jr);
        break;
      case 24:
        za(Mt);
    }
  }
  var lx = {
      getCacheForType: function (e) {
        var t = Qt(Mt),
          r = t.data.get(e);
        return r === void 0 && ((r = e()), t.data.set(e, r)), r;
      },
    },
    ux = typeof WeakMap == "function" ? WeakMap : Map,
    mt = 0,
    ft = null,
    Ge = null,
    We = 0,
    dt = 0,
    _n = null,
    Ba = !1,
    is = !1,
    If = !1,
    Ha = 0,
    bt = 0,
    hr = 0,
    ii = 0,
    ed = 0,
    Ln = 0,
    ss = 0,
    Cl = null,
    ua = null,
    td = !1,
    nd = 0,
    go = 1 / 0,
    vo = null,
    mr = null,
    bo = !1,
    si = null,
    Dl = 0,
    ad = 0,
    rd = null,
    Ml = 0,
    id = null;
  function wn() {
    if (mt & 2 && We !== 0) return We & -We;
    if (F.T !== null) {
      var e = Pi;
      return e !== 0 ? e : hd();
    }
    return am();
  }
  function Ly() {
    Ln === 0 && (Ln = !(We & 536870912) || et ? ot() : 536870912);
    var e = zn.current;
    return e !== null && (e.flags |= 32), Ln;
  }
  function en(e, t, r) {
    ((e === ft && dt === 2) || e.cancelPendingCommit !== null) &&
      (ls(e, 0), Va(e, We, Ln, !1)),
      un(e, r),
      (!(mt & 2) || e !== ft) &&
        (e === ft && (!(mt & 2) && (ii |= r), bt === 4 && Va(e, We, Ln, !1)),
        oa(e));
  }
  function By(e, t, r) {
    if (mt & 6) throw Error(s(327));
    var l = (!r && (t & 60) === 0 && (t & e.expiredLanes) === 0) || De(e, t),
      o = l ? fx(e, t) : od(e, t, !0),
      f = l;
    do {
      if (o === 0) {
        is && !l && Va(e, t, 0, !1);
        break;
      } else if (o === 6) Va(e, t, 0, !Ba);
      else {
        if (((r = e.current.alternate), f && !ox(r))) {
          (o = od(e, t, !1)), (f = !1);
          continue;
        }
        if (o === 2) {
          if (((f = t), e.errorRecoveryDisabledLanes & f)) var y = 0;
          else
            (y = e.pendingLanes & -536870913),
              (y = y !== 0 ? y : y & 536870912 ? 536870912 : 0);
          if (y !== 0) {
            t = y;
            e: {
              var v = e;
              o = Cl;
              var S = v.current.memoizedState.isDehydrated;
              if ((S && (ls(v, y).flags |= 256), (y = od(v, y, !1)), y !== 2)) {
                if (If && !S) {
                  (v.errorRecoveryDisabledLanes |= f), (ii |= f), (o = 4);
                  break e;
                }
                (f = ua), (ua = o), f !== null && sd(f);
              }
              o = y;
            }
            if (((f = !1), o !== 2)) continue;
          }
        }
        if (o === 1) {
          ls(e, 0), Va(e, t, 0, !0);
          break;
        }
        e: {
          switch (((l = e), o)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194176) === t) {
                Va(l, t, Ln, !Ba);
                break e;
              }
              break;
            case 2:
              ua = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if (
            ((l.finishedWork = r),
            (l.finishedLanes = t),
            (t & 62914560) === t && ((f = nd + 300 - ge()), 10 < f))
          ) {
            if ((Va(l, t, Ln, !Ba), zi(l, 0) !== 0)) break e;
            l.timeoutHandle = ug(
              Hy.bind(null, l, r, ua, vo, td, t, Ln, ii, ss, Ba, 2, -0, 0),
              f,
            );
            break e;
          }
          Hy(l, r, ua, vo, td, t, Ln, ii, ss, Ba, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    oa(e);
  }
  function sd(e) {
    ua === null ? (ua = e) : ua.push.apply(ua, e);
  }
  function Hy(e, t, r, l, o, f, y, v, S, D, Z, $, k) {
    var q = t.subtreeFlags;
    if (
      (q & 8192 || (q & 16785408) === 16785408) &&
      ((Ll = { stylesheets: null, count: 0, unsuspend: Qx }),
      Cy(t),
      (t = Fx()),
      t !== null)
    ) {
      (e.cancelPendingCommit = t(Fy.bind(null, e, r, l, o, y, v, S, 1, $, k))),
        Va(e, f, y, !D);
      return;
    }
    Fy(e, r, l, o, y, v, S, Z, $, k);
  }
  function ox(e) {
    for (var t = e; ; ) {
      var r = t.tag;
      if (
        (r === 0 || r === 11 || r === 15) &&
        t.flags & 16384 &&
        ((r = t.updateQueue), r !== null && ((r = r.stores), r !== null))
      )
        for (var l = 0; l < r.length; l++) {
          var o = r[l],
            f = o.getSnapshot;
          o = o.value;
          try {
            if (!bn(f(), o)) return !1;
          } catch {
            return !1;
          }
        }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
        (r.return = t), (t = r);
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
  function Va(e, t, r, l) {
    (t &= ~ed),
      (t &= ~ii),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes);
    for (var o = t; 0 < o; ) {
      var f = 31 - Pt(o),
        y = 1 << f;
      (l[f] = -1), (o &= ~y);
    }
    r !== 0 && on(e, r, t);
  }
  function xo() {
    return mt & 6 ? !0 : (Nl(0), !1);
  }
  function ld() {
    if (Ge !== null) {
      if (dt === 0) var e = Ge.return;
      else (e = Ge), (Na = ti = null), hf(e), ($i = null), (dl = 0), (e = Ge);
      for (; e !== null; ) jy(e.alternate, e), (e = e.return);
      Ge = null;
    }
  }
  function ls(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var r = e.timeoutHandle;
    r !== -1 && ((e.timeoutHandle = -1), Ox(r)),
      (r = e.cancelPendingCommit),
      r !== null && ((e.cancelPendingCommit = null), r()),
      ld(),
      (ft = e),
      (Ge = r = dr(e.current, null)),
      (We = t),
      (dt = 0),
      (_n = null),
      (Ba = !1),
      (is = De(e, t)),
      (If = !1),
      (ss = Ln = ed = ii = hr = bt = 0),
      (ua = Cl = null),
      (td = !1),
      t & 8 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var o = 31 - Pt(l),
          f = 1 << o;
        (t |= e[o]), (l &= ~f);
      }
    return (Ha = t), Yu(), r;
  }
  function Vy(e, t) {
    (Ye = null),
      (F.H = la),
      t === cl
        ? ((t = tp()), (dt = 3))
        : t === Wm
          ? ((t = tp()), (dt = 4))
          : (dt =
              t === Ip
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (_n = t),
      Ge === null && ((bt = 1), oo(e, Dn(t, e.current)));
  }
  function qy() {
    var e = F.H;
    return (F.H = la), e === null ? la : e;
  }
  function Zy() {
    var e = F.A;
    return (F.A = lx), e;
  }
  function ud() {
    (bt = 4),
      Ba || ((We & 4194176) !== We && zn.current !== null) || (is = !0),
      (!(hr & 134217727) && !(ii & 134217727)) ||
        ft === null ||
        Va(ft, We, Ln, !1);
  }
  function od(e, t, r) {
    var l = mt;
    mt |= 2;
    var o = qy(),
      f = Zy();
    (ft !== e || We !== t) && ((vo = null), ls(e, t)), (t = !1);
    var y = bt;
    e: do
      try {
        if (dt !== 0 && Ge !== null) {
          var v = Ge,
            S = _n;
          switch (dt) {
            case 8:
              ld(), (y = 6);
              break e;
            case 3:
            case 2:
            case 6:
              zn.current === null && (t = !0);
              var D = dt;
              if (((dt = 0), (_n = null), us(e, v, S, D), r && is)) {
                y = 0;
                break e;
              }
              break;
            default:
              (D = dt), (dt = 0), (_n = null), us(e, v, S, D);
          }
        }
        cx(), (y = bt);
        break;
      } catch (Z) {
        Vy(e, Z);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Na = ti = null),
      (mt = l),
      (F.H = o),
      (F.A = f),
      Ge === null && ((ft = null), (We = 0), Yu()),
      y
    );
  }
  function cx() {
    for (; Ge !== null; ) Yy(Ge);
  }
  function fx(e, t) {
    var r = mt;
    mt |= 2;
    var l = qy(),
      o = Zy();
    ft !== e || We !== t
      ? ((vo = null), (go = ge() + 500), ls(e, t))
      : (is = De(e, t));
    e: do
      try {
        if (dt !== 0 && Ge !== null) {
          t = Ge;
          var f = _n;
          t: switch (dt) {
            case 1:
              (dt = 0), (_n = null), us(e, t, f, 1);
              break;
            case 2:
              if (Im(f)) {
                (dt = 0), (_n = null), Qy(t);
                break;
              }
              (t = function () {
                dt === 2 && ft === e && (dt = 7), oa(e);
              }),
                f.then(t, t);
              break e;
            case 3:
              dt = 7;
              break e;
            case 4:
              dt = 5;
              break e;
            case 7:
              Im(f)
                ? ((dt = 0), (_n = null), Qy(t))
                : ((dt = 0), (_n = null), us(e, t, f, 7));
              break;
            case 5:
              var y = null;
              switch (Ge.tag) {
                case 26:
                  y = Ge.memoizedState;
                case 5:
                case 27:
                  var v = Ge;
                  if (!y || bg(y)) {
                    (dt = 0), (_n = null);
                    var S = v.sibling;
                    if (S !== null) Ge = S;
                    else {
                      var D = v.return;
                      D !== null ? ((Ge = D), So(D)) : (Ge = null);
                    }
                    break t;
                  }
              }
              (dt = 0), (_n = null), us(e, t, f, 5);
              break;
            case 6:
              (dt = 0), (_n = null), us(e, t, f, 6);
              break;
            case 8:
              ld(), (bt = 6);
              break e;
            default:
              throw Error(s(462));
          }
        }
        dx();
        break;
      } catch (Z) {
        Vy(e, Z);
      }
    while (!0);
    return (
      (Na = ti = null),
      (F.H = l),
      (F.A = o),
      (mt = r),
      Ge !== null ? 0 : ((ft = null), (We = 0), Yu(), bt)
    );
  }
  function dx() {
    for (; Ge !== null && !ae(); ) Yy(Ge);
  }
  function Yy(e) {
    var t = fy(e.alternate, e, Ha);
    (e.memoizedProps = e.pendingProps), t === null ? So(e) : (Ge = t);
  }
  function Qy(e) {
    var t = e,
      r = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = iy(r, t, t.pendingProps, t.type, void 0, We);
        break;
      case 11:
        t = iy(r, t, t.pendingProps, t.type.render, t.ref, We);
        break;
      case 5:
        hf(t);
      default:
        jy(r, t), (t = Ge = zy(t, Ha)), (t = fy(r, t, Ha));
    }
    (e.memoizedProps = e.pendingProps), t === null ? So(e) : (Ge = t);
  }
  function us(e, t, r, l) {
    (Na = ti = null), hf(t), ($i = null), (dl = 0);
    var o = t.return;
    try {
      if (ex(e, o, t, r, We)) {
        (bt = 1), oo(e, Dn(r, e.current)), (Ge = null);
        return;
      }
    } catch (f) {
      if (o !== null) throw ((Ge = o), f);
      (bt = 1), oo(e, Dn(r, e.current)), (Ge = null);
      return;
    }
    t.flags & 32768
      ? (et || l === 1
          ? (e = !0)
          : is || We & 536870912
            ? (e = !1)
            : ((Ba = e = !0),
              (l === 2 || l === 3 || l === 6) &&
                ((l = zn.current),
                l !== null && l.tag === 13 && (l.flags |= 16384))),
        Gy(t, e))
      : So(t);
  }
  function So(e) {
    var t = e;
    do {
      if (t.flags & 32768) {
        Gy(t, Ba);
        return;
      }
      e = t.return;
      var r = ix(t.alternate, t, Ha);
      if (r !== null) {
        Ge = r;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ge = t;
        return;
      }
      Ge = t = e;
    } while (t !== null);
    bt === 0 && (bt = 5);
  }
  function Gy(e, t) {
    do {
      var r = sx(e.alternate, e);
      if (r !== null) {
        (r.flags &= 32767), (Ge = r);
        return;
      }
      if (
        ((r = e.return),
        r !== null &&
          ((r.flags |= 32768), (r.subtreeFlags = 0), (r.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Ge = e;
        return;
      }
      Ge = e = r;
    } while (e !== null);
    (bt = 6), (Ge = null);
  }
  function Fy(e, t, r, l, o, f, y, v, S, D) {
    var Z = F.T,
      $ = J.p;
    try {
      (J.p = 2), (F.T = null), hx(e, t, r, l, $, o, f, y, v, S, D);
    } finally {
      (F.T = Z), (J.p = $);
    }
  }
  function hx(e, t, r, l, o, f, y, v) {
    do os();
    while (si !== null);
    if (mt & 6) throw Error(s(327));
    var S = e.finishedWork;
    if (((l = e.finishedLanes), S === null)) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), S === e.current))
      throw Error(s(177));
    (e.callbackNode = null),
      (e.callbackPriority = 0),
      (e.cancelPendingCommit = null);
    var D = S.lanes | S.childLanes;
    if (
      ((D |= Pc),
      Ea(e, l, D, f, y, v),
      e === ft && ((Ge = ft = null), (We = 0)),
      (!(S.subtreeFlags & 10256) && !(S.flags & 10256)) ||
        bo ||
        ((bo = !0),
        (ad = D),
        (rd = r),
        gx($t, function () {
          return os(), null;
        })),
      (r = (S.flags & 15990) !== 0),
      S.subtreeFlags & 15990 || r
        ? ((r = F.T),
          (F.T = null),
          (f = J.p),
          (J.p = 2),
          (y = mt),
          (mt |= 4),
          nx(e, S),
          Ry(S, e),
          L1(Sd, e.containerInfo),
          (zo = !!xd),
          (Sd = xd = null),
          (e.current = S),
          _y(e, S.alternate, S),
          W(),
          (mt = y),
          (J.p = f),
          (F.T = r))
        : (e.current = S),
      bo ? ((bo = !1), (si = e), (Dl = l)) : Xy(e, D),
      (D = e.pendingLanes),
      D === 0 && (mr = null),
      Vr(S.stateNode),
      oa(e),
      t !== null)
    )
      for (o = e.onRecoverableError, S = 0; S < t.length; S++)
        (D = t[S]), o(D.value, { componentStack: D.stack });
    return (
      Dl & 3 && os(),
      (D = e.pendingLanes),
      l & 4194218 && D & 42
        ? e === id
          ? Ml++
          : ((Ml = 0), (id = e))
        : (Ml = 0),
      Nl(0),
      null
    );
  }
  function Xy(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), ml(t)));
  }
  function os() {
    if (si !== null) {
      var e = si,
        t = ad;
      ad = 0;
      var r = nm(Dl),
        l = F.T,
        o = J.p;
      try {
        if (((J.p = 32 > r ? 32 : r), (F.T = null), si === null)) var f = !1;
        else {
          (r = rd), (rd = null);
          var y = si,
            v = Dl;
          if (((si = null), (Dl = 0), mt & 6)) throw Error(s(331));
          var S = mt;
          if (
            ((mt |= 4),
            My(y.current),
            Oy(y, y.current, v, r),
            (mt = S),
            Nl(0, !1),
            gt && typeof gt.onPostCommitFiberRoot == "function")
          )
            try {
              gt.onPostCommitFiberRoot(Rn, y);
            } catch {}
          f = !0;
        }
        return f;
      } finally {
        (J.p = o), (F.T = l), Xy(e, t);
      }
    }
    return !1;
  }
  function Ky(e, t, r) {
    (t = Dn(r, t)),
      (t = Af(e.stateNode, t, 2)),
      (e = ur(e, t, 2)),
      e !== null && (un(e, 2), oa(e));
  }
  function ct(e, t, r) {
    if (e.tag === 3) Ky(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ky(t, e, r);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (mr === null || !mr.has(l)))
          ) {
            (e = Dn(r, e)),
              (r = Pp(2)),
              (l = ur(t, r, 2)),
              l !== null && (Wp(r, l, t, e), un(l, 2), oa(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function cd(e, t, r) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new ux();
      var o = new Set();
      l.set(t, o);
    } else (o = l.get(t)), o === void 0 && ((o = new Set()), l.set(t, o));
    o.has(r) ||
      ((If = !0), o.add(r), (e = mx.bind(null, e, t, r)), t.then(e, e));
  }
  function mx(e, t, r) {
    var l = e.pingCache;
    l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & r),
      (e.warmLanes &= ~r),
      ft === e &&
        (We & r) === r &&
        (bt === 4 || (bt === 3 && (We & 62914560) === We && 300 > ge() - nd)
          ? !(mt & 2) && ls(e, 0)
          : (ed |= r),
        ss === We && (ss = 0)),
      oa(e);
  }
  function $y(e, t) {
    t === 0 && (t = ln()), (e = er(e, t)), e !== null && (un(e, t), oa(e));
  }
  function px(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), $y(e, r);
  }
  function yx(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          o = e.memoizedState;
        o !== null && (r = o.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    l !== null && l.delete(t), $y(e, r);
  }
  function gx(e, t) {
    return H(e, t);
  }
  var _o = null,
    cs = null,
    fd = !1,
    wo = !1,
    dd = !1,
    li = 0;
  function oa(e) {
    e !== cs &&
      e.next === null &&
      (cs === null ? (_o = cs = e) : (cs = cs.next = e)),
      (wo = !0),
      fd || ((fd = !0), bx(vx));
  }
  function Nl(e, t) {
    if (!dd && wo) {
      dd = !0;
      do
        for (var r = !1, l = _o; l !== null; ) {
          if (e !== 0) {
            var o = l.pendingLanes;
            if (o === 0) var f = 0;
            else {
              var y = l.suspendedLanes,
                v = l.pingedLanes;
              (f = (1 << (31 - Pt(42 | e) + 1)) - 1),
                (f &= o & ~(y & ~v)),
                (f = f & 201326677 ? (f & 201326677) | 1 : f ? f | 2 : 0);
            }
            f !== 0 && ((r = !0), Wy(l, f));
          } else
            (f = We),
              (f = zi(l, l === ft ? f : 0)),
              !(f & 3) || De(l, f) || ((r = !0), Wy(l, f));
          l = l.next;
        }
      while (r);
      dd = !1;
    }
  }
  function vx() {
    wo = fd = !1;
    var e = 0;
    li !== 0 && (Ax() && (e = li), (li = 0));
    for (var t = ge(), r = null, l = _o; l !== null; ) {
      var o = l.next,
        f = Jy(l, t);
      f === 0
        ? ((l.next = null),
          r === null ? (_o = o) : (r.next = o),
          o === null && (cs = r))
        : ((r = l), (e !== 0 || f & 3) && (wo = !0)),
        (l = o);
    }
    Nl(e);
  }
  function Jy(e, t) {
    for (
      var r = e.suspendedLanes,
        l = e.pingedLanes,
        o = e.expirationTimes,
        f = e.pendingLanes & -62914561;
      0 < f;

    ) {
      var y = 31 - Pt(f),
        v = 1 << y,
        S = o[y];
      S === -1
        ? (!(v & r) || v & l) && (o[y] = at(v, t))
        : S <= t && (e.expiredLanes |= v),
        (f &= ~v);
    }
    if (
      ((t = ft),
      (r = We),
      (r = zi(e, e === t ? r : 0)),
      (l = e.callbackNode),
      r === 0 || (e === t && dt === 2) || e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && re(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if (!(r & 3) || De(e, r)) {
      if (((t = r & -r), t === e.callbackPriority)) return t;
      switch ((l !== null && re(l), nm(r))) {
        case 2:
        case 8:
          r = st;
          break;
        case 32:
          r = $t;
          break;
        case 268435456:
          r = Yn;
          break;
        default:
          r = $t;
      }
      return (
        (l = Py.bind(null, e)),
        (r = H(r, l)),
        (e.callbackPriority = t),
        (e.callbackNode = r),
        t
      );
    }
    return (
      l !== null && l !== null && re(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Py(e, t) {
    var r = e.callbackNode;
    if (os() && e.callbackNode !== r) return null;
    var l = We;
    return (
      (l = zi(e, e === ft ? l : 0)),
      l === 0
        ? null
        : (By(e, l, t),
          Jy(e, ge()),
          e.callbackNode != null && e.callbackNode === r
            ? Py.bind(null, e)
            : null)
    );
  }
  function Wy(e, t) {
    if (os()) return null;
    By(e, t, !0);
  }
  function bx(e) {
    Cx(function () {
      mt & 6 ? H(Pe, e) : e();
    });
  }
  function hd() {
    return li === 0 && (li = ot()), li;
  }
  function Iy(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : ju("" + e);
  }
  function eg(e, t) {
    var r = t.ownerDocument.createElement("input");
    return (
      (r.name = t.name),
      (r.value = t.value),
      e.id && r.setAttribute("form", e.id),
      t.parentNode.insertBefore(r, t),
      (e = new FormData(e)),
      r.parentNode.removeChild(r),
      e
    );
  }
  function xx(e, t, r, l, o) {
    if (t === "submit" && r && r.stateNode === o) {
      var f = Iy((o[cn] || null).action),
        y = l.submitter;
      y &&
        ((t = (t = y[cn] || null)
          ? Iy(t.formAction)
          : y.getAttribute("formAction")),
        t !== null && ((f = t), (y = null)));
      var v = new Vu("action", "action", null, l, o);
      e.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (li !== 0) {
                  var S = y ? eg(o, y) : new FormData(o);
                  _f(
                    r,
                    { pending: !0, data: S, method: o.method, action: f },
                    null,
                    S,
                  );
                }
              } else
                typeof f == "function" &&
                  (v.preventDefault(),
                  (S = y ? eg(o, y) : new FormData(o)),
                  _f(
                    r,
                    { pending: !0, data: S, method: o.method, action: f },
                    f,
                    S,
                  ));
            },
            currentTarget: o,
          },
        ],
      });
    }
  }
  for (var md = 0; md < Fm.length; md++) {
    var pd = Fm[md],
      Sx = pd.toLowerCase(),
      _x = pd[0].toUpperCase() + pd.slice(1);
    Gn(Sx, "on" + _x);
  }
  Gn(qm, "onAnimationEnd"),
    Gn(Zm, "onAnimationIteration"),
    Gn(Ym, "onAnimationStart"),
    Gn("dblclick", "onDoubleClick"),
    Gn("focusin", "onFocus"),
    Gn("focusout", "onBlur"),
    Gn(H1, "onTransitionRun"),
    Gn(V1, "onTransitionStart"),
    Gn(q1, "onTransitionCancel"),
    Gn(Qm, "onTransitionEnd"),
    Li("onMouseEnter", ["mouseout", "mouseover"]),
    Li("onMouseLeave", ["mouseout", "mouseover"]),
    Li("onPointerEnter", ["pointerout", "pointerover"]),
    Li("onPointerLeave", ["pointerout", "pointerover"]),
    Zr(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Zr(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Zr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Zr(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Zr(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Zr(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var zl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    wx = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(zl),
    );
  function tg(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var l = e[r],
        o = l.event;
      l = l.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var y = l.length - 1; 0 <= y; y--) {
            var v = l[y],
              S = v.instance,
              D = v.currentTarget;
            if (((v = v.listener), S !== f && o.isPropagationStopped()))
              break e;
            (f = v), (o.currentTarget = D);
            try {
              f(o);
            } catch (Z) {
              uo(Z);
            }
            (o.currentTarget = null), (f = S);
          }
        else
          for (y = 0; y < l.length; y++) {
            if (
              ((v = l[y]),
              (S = v.instance),
              (D = v.currentTarget),
              (v = v.listener),
              S !== f && o.isPropagationStopped())
            )
              break e;
            (f = v), (o.currentTarget = D);
            try {
              f(o);
            } catch (Z) {
              uo(Z);
            }
            (o.currentTarget = null), (f = S);
          }
      }
    }
  }
  function Ke(e, t) {
    var r = t[Dc];
    r === void 0 && (r = t[Dc] = new Set());
    var l = e + "__bubble";
    r.has(l) || (ng(t, e, 2, !1), r.add(l));
  }
  function yd(e, t, r) {
    var l = 0;
    t && (l |= 4), ng(r, e, l, t);
  }
  var Eo = "_reactListening" + Math.random().toString(36).slice(2);
  function gd(e) {
    if (!e[Eo]) {
      (e[Eo] = !0),
        im.forEach(function (r) {
          r !== "selectionchange" && (wx.has(r) || yd(r, !1, e), yd(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Eo] || ((t[Eo] = !0), yd("selectionchange", !1, t));
    }
  }
  function ng(e, t, r, l) {
    switch (Tg(t)) {
      case 2:
        var o = $x;
        break;
      case 8:
        o = Jx;
        break;
      default:
        o = Dd;
    }
    (r = o.bind(null, t, r, e)),
      (o = void 0),
      !Bc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (o = !0),
      l
        ? o !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: o })
          : e.addEventListener(t, r, !0)
        : o !== void 0
          ? e.addEventListener(t, r, { passive: o })
          : e.addEventListener(t, r, !1);
  }
  function vd(e, t, r, l, o) {
    var f = l;
    if (!(t & 1) && !(t & 2) && l !== null)
      e: for (;;) {
        if (l === null) return;
        var y = l.tag;
        if (y === 3 || y === 4) {
          var v = l.stateNode.containerInfo;
          if (v === o || (v.nodeType === 8 && v.parentNode === o)) break;
          if (y === 4)
            for (y = l.return; y !== null; ) {
              var S = y.tag;
              if (
                (S === 3 || S === 4) &&
                ((S = y.stateNode.containerInfo),
                S === o || (S.nodeType === 8 && S.parentNode === o))
              )
                return;
              y = y.return;
            }
          for (; v !== null; ) {
            if (((y = qr(v)), y === null)) return;
            if (((S = y.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              l = f = y;
              continue e;
            }
            v = v.parentNode;
          }
        }
        l = l.return;
      }
    gm(function () {
      var D = f,
        Z = jc(r),
        $ = [];
      e: {
        var k = Gm.get(e);
        if (k !== void 0) {
          var q = Vu,
            _e = e;
          switch (e) {
            case "keypress":
              if (Bu(r) === 0) break e;
            case "keydown":
            case "keyup":
              q = y1;
              break;
            case "focusin":
              (_e = "focus"), (q = Zc);
              break;
            case "focusout":
              (_e = "blur"), (q = Zc);
              break;
            case "beforeblur":
            case "afterblur":
              q = Zc;
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
              q = xm;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              q = r1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              q = b1;
              break;
            case qm:
            case Zm:
            case Ym:
              q = l1;
              break;
            case Qm:
              q = S1;
              break;
            case "scroll":
            case "scrollend":
              q = n1;
              break;
            case "wheel":
              q = w1;
              break;
            case "copy":
            case "cut":
            case "paste":
              q = o1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              q = _m;
              break;
            case "toggle":
            case "beforetoggle":
              q = T1;
          }
          var ke = (t & 4) !== 0,
            xt = !ke && (e === "scroll" || e === "scrollend"),
            M = ke ? (k !== null ? k + "Capture" : null) : k;
          ke = [];
          for (var C = D, z; C !== null; ) {
            var Q = C;
            if (
              ((z = Q.stateNode),
              (Q = Q.tag),
              (Q !== 5 && Q !== 26 && Q !== 27) ||
                z === null ||
                M === null ||
                ((Q = Ws(C, M)), Q != null && ke.push(Ul(C, Q, z))),
              xt)
            )
              break;
            C = C.return;
          }
          0 < ke.length &&
            ((k = new q(k, _e, null, r, Z)),
            $.push({ event: k, listeners: ke }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((k = e === "mouseover" || e === "pointerover"),
            (q = e === "mouseout" || e === "pointerout"),
            k &&
              r !== kc &&
              (_e = r.relatedTarget || r.fromElement) &&
              (qr(_e) || _e[Ui]))
          )
            break e;
          if (
            (q || k) &&
            ((k =
              Z.window === Z
                ? Z
                : (k = Z.ownerDocument)
                  ? k.defaultView || k.parentWindow
                  : window),
            q
              ? ((_e = r.relatedTarget || r.toElement),
                (q = D),
                (_e = _e ? qr(_e) : null),
                _e !== null &&
                  ((xt = ee(_e)),
                  (ke = _e.tag),
                  _e !== xt || (ke !== 5 && ke !== 27 && ke !== 6)) &&
                  (_e = null))
              : ((q = null), (_e = D)),
            q !== _e)
          ) {
            if (
              ((ke = xm),
              (Q = "onMouseLeave"),
              (M = "onMouseEnter"),
              (C = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ke = _m),
                (Q = "onPointerLeave"),
                (M = "onPointerEnter"),
                (C = "pointer")),
              (xt = q == null ? k : Ps(q)),
              (z = _e == null ? k : Ps(_e)),
              (k = new ke(Q, C + "leave", q, r, Z)),
              (k.target = xt),
              (k.relatedTarget = z),
              (Q = null),
              qr(Z) === D &&
                ((ke = new ke(M, C + "enter", _e, r, Z)),
                (ke.target = z),
                (ke.relatedTarget = xt),
                (Q = ke)),
              (xt = Q),
              q && _e)
            )
              t: {
                for (ke = q, M = _e, C = 0, z = ke; z; z = fs(z)) C++;
                for (z = 0, Q = M; Q; Q = fs(Q)) z++;
                for (; 0 < C - z; ) (ke = fs(ke)), C--;
                for (; 0 < z - C; ) (M = fs(M)), z--;
                for (; C--; ) {
                  if (ke === M || (M !== null && ke === M.alternate)) break t;
                  (ke = fs(ke)), (M = fs(M));
                }
                ke = null;
              }
            else ke = null;
            q !== null && ag($, k, q, ke, !1),
              _e !== null && xt !== null && ag($, xt, _e, ke, !0);
          }
        }
        e: {
          if (
            ((k = D ? Ps(D) : window),
            (q = k.nodeName && k.nodeName.toLowerCase()),
            q === "select" || (q === "input" && k.type === "file"))
          )
            var ve = Dm;
          else if (Om(k))
            if (Mm) ve = k1;
            else {
              ve = z1;
              var Qe = N1;
            }
          else
            (q = k.nodeName),
              !q ||
              q.toLowerCase() !== "input" ||
              (k.type !== "checkbox" && k.type !== "radio")
                ? D && Uc(D.elementType) && (ve = Dm)
                : (ve = U1);
          if (ve && (ve = ve(e, D))) {
            Cm($, ve, r, Z);
            break e;
          }
          Qe && Qe(e, k, D),
            e === "focusout" &&
              D &&
              k.type === "number" &&
              D.memoizedProps.value != null &&
              zc(k, "number", k.value);
        }
        switch (((Qe = D ? Ps(D) : window), e)) {
          case "focusin":
            (Om(Qe) || Qe.contentEditable === "true") &&
              ((Yi = Qe), (Kc = D), (sl = null));
            break;
          case "focusout":
            sl = Kc = Yi = null;
            break;
          case "mousedown":
            $c = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ($c = !1), Hm($, r, Z);
            break;
          case "selectionchange":
            if (B1) break;
          case "keydown":
          case "keyup":
            Hm($, r, Z);
        }
        var Ee;
        if (Qc)
          e: {
            switch (e) {
              case "compositionstart":
                var Ce = "onCompositionStart";
                break e;
              case "compositionend":
                Ce = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ce = "onCompositionUpdate";
                break e;
            }
            Ce = void 0;
          }
        else
          Zi
            ? Rm(e, r) && (Ce = "onCompositionEnd")
            : e === "keydown" &&
              r.keyCode === 229 &&
              (Ce = "onCompositionStart");
        Ce &&
          (wm &&
            r.locale !== "ko" &&
            (Zi || Ce !== "onCompositionStart"
              ? Ce === "onCompositionEnd" && Zi && (Ee = vm())
              : ((Ia = Z),
                (Hc = "value" in Ia ? Ia.value : Ia.textContent),
                (Zi = !0))),
          (Qe = To(D, Ce)),
          0 < Qe.length &&
            ((Ce = new Sm(Ce, e, null, r, Z)),
            $.push({ event: Ce, listeners: Qe }),
            Ee
              ? (Ce.data = Ee)
              : ((Ee = Am(r)), Ee !== null && (Ce.data = Ee)))),
          (Ee = A1 ? O1(e, r) : C1(e, r)) &&
            ((Ce = To(D, "onBeforeInput")),
            0 < Ce.length &&
              ((Qe = new Sm("onBeforeInput", "beforeinput", null, r, Z)),
              $.push({ event: Qe, listeners: Ce }),
              (Qe.data = Ee))),
          xx($, e, D, r, Z);
      }
      tg($, t);
    });
  }
  function Ul(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function To(e, t) {
    for (var r = t + "Capture", l = []; e !== null; ) {
      var o = e,
        f = o.stateNode;
      (o = o.tag),
        (o !== 5 && o !== 26 && o !== 27) ||
          f === null ||
          ((o = Ws(e, r)),
          o != null && l.unshift(Ul(e, o, f)),
          (o = Ws(e, t)),
          o != null && l.push(Ul(e, o, f))),
        (e = e.return);
    }
    return l;
  }
  function fs(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function ag(e, t, r, l, o) {
    for (var f = t._reactName, y = []; r !== null && r !== l; ) {
      var v = r,
        S = v.alternate,
        D = v.stateNode;
      if (((v = v.tag), S !== null && S === l)) break;
      (v !== 5 && v !== 26 && v !== 27) ||
        D === null ||
        ((S = D),
        o
          ? ((D = Ws(r, f)), D != null && y.unshift(Ul(r, D, S)))
          : o || ((D = Ws(r, f)), D != null && y.push(Ul(r, D, S)))),
        (r = r.return);
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var Ex = /\r\n?/g,
    Tx = /\u0000|\uFFFD/g;
  function rg(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Ex,
        `
`,
      )
      .replace(Tx, "");
  }
  function ig(e, t) {
    return (t = rg(t)), rg(e) === t;
  }
  function Ro() {}
  function ut(e, t, r, l, o, f) {
    switch (r) {
      case "children":
        typeof l == "string"
          ? t === "body" || (t === "textarea" && l === "") || Hi(e, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            t !== "body" &&
            Hi(e, "" + l);
        break;
      case "className":
        zu(e, "class", l);
        break;
      case "tabIndex":
        zu(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        zu(e, r, l);
        break;
      case "style":
        pm(e, l, f);
        break;
      case "data":
        if (t !== "object") {
          zu(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || r !== "href")) {
          e.removeAttribute(r);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          e.removeAttribute(r);
          break;
        }
        (l = ju("" + l)), e.setAttribute(r, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            r,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof f == "function" &&
            (r === "formAction"
              ? (t !== "input" && ut(e, t, "name", o.name, o, null),
                ut(e, t, "formEncType", o.formEncType, o, null),
                ut(e, t, "formMethod", o.formMethod, o, null),
                ut(e, t, "formTarget", o.formTarget, o, null))
              : (ut(e, t, "encType", o.encType, o, null),
                ut(e, t, "method", o.method, o, null),
                ut(e, t, "target", o.target, o, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(r);
          break;
        }
        (l = ju("" + l)), e.setAttribute(r, l);
        break;
      case "onClick":
        l != null && (e.onclick = Ro);
        break;
      case "onScroll":
        l != null && Ke("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ke("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
          if (((r = l.__html), r != null)) {
            if (o.children != null) throw Error(s(60));
            e.innerHTML = r;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (r = ju("" + l)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(r, "" + l)
          : e.removeAttribute(r);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(r, "")
          : e.removeAttribute(r);
        break;
      case "capture":
      case "download":
        l === !0
          ? e.setAttribute(r, "")
          : l !== !1 &&
              l != null &&
              typeof l != "function" &&
              typeof l != "symbol"
            ? e.setAttribute(r, l)
            : e.removeAttribute(r);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(r, l)
          : e.removeAttribute(r);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? e.removeAttribute(r)
          : e.setAttribute(r, l);
        break;
      case "popover":
        Ke("beforetoggle", e), Ke("toggle", e), Nu(e, "popover", l);
        break;
      case "xlinkActuate":
        Ra(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        Ra(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        Ra(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        Ra(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        Ra(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        Ra(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        Ra(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        Ra(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        Ra(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Nu(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < r.length) ||
          (r[0] !== "o" && r[0] !== "O") ||
          (r[1] !== "n" && r[1] !== "N")) &&
          ((r = e1.get(r) || r), Nu(e, r, l));
    }
  }
  function bd(e, t, r, l, o, f) {
    switch (r) {
      case "style":
        pm(e, l, f);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
          if (((r = l.__html), r != null)) {
            if (o.children != null) throw Error(s(60));
            e.innerHTML = r;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? Hi(e, l)
          : (typeof l == "number" || typeof l == "bigint") && Hi(e, "" + l);
        break;
      case "onScroll":
        l != null && Ke("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ke("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = Ro);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!sm.hasOwnProperty(r))
          e: {
            if (
              r[0] === "o" &&
              r[1] === "n" &&
              ((o = r.endsWith("Capture")),
              (t = r.slice(2, o ? r.length - 7 : void 0)),
              (f = e[cn] || null),
              (f = f != null ? f[r] : null),
              typeof f == "function" && e.removeEventListener(t, f, o),
              typeof l == "function")
            ) {
              typeof f != "function" &&
                f !== null &&
                (r in e
                  ? (e[r] = null)
                  : e.hasAttribute(r) && e.removeAttribute(r)),
                e.addEventListener(t, l, o);
              break e;
            }
            r in e
              ? (e[r] = l)
              : l === !0
                ? e.setAttribute(r, "")
                : Nu(e, r, l);
          }
    }
  }
  function qt(e, t, r) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ke("error", e), Ke("load", e);
        var l = !1,
          o = !1,
          f;
        for (f in r)
          if (r.hasOwnProperty(f)) {
            var y = r[f];
            if (y != null)
              switch (f) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  o = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, t));
                default:
                  ut(e, t, f, y, r, null);
              }
          }
        o && ut(e, t, "srcSet", r.srcSet, r, null),
          l && ut(e, t, "src", r.src, r, null);
        return;
      case "input":
        Ke("invalid", e);
        var v = (f = y = o = null),
          S = null,
          D = null;
        for (l in r)
          if (r.hasOwnProperty(l)) {
            var Z = r[l];
            if (Z != null)
              switch (l) {
                case "name":
                  o = Z;
                  break;
                case "type":
                  y = Z;
                  break;
                case "checked":
                  S = Z;
                  break;
                case "defaultChecked":
                  D = Z;
                  break;
                case "value":
                  f = Z;
                  break;
                case "defaultValue":
                  v = Z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Z != null) throw Error(s(137, t));
                  break;
                default:
                  ut(e, t, l, Z, r, null);
              }
          }
        fm(e, f, v, S, D, y, o, !1), Uu(e);
        return;
      case "select":
        Ke("invalid", e), (l = y = f = null);
        for (o in r)
          if (r.hasOwnProperty(o) && ((v = r[o]), v != null))
            switch (o) {
              case "value":
                f = v;
                break;
              case "defaultValue":
                y = v;
                break;
              case "multiple":
                l = v;
              default:
                ut(e, t, o, v, r, null);
            }
        (t = f),
          (r = y),
          (e.multiple = !!l),
          t != null ? Bi(e, !!l, t, !1) : r != null && Bi(e, !!l, r, !0);
        return;
      case "textarea":
        Ke("invalid", e), (f = o = l = null);
        for (y in r)
          if (r.hasOwnProperty(y) && ((v = r[y]), v != null))
            switch (y) {
              case "value":
                l = v;
                break;
              case "defaultValue":
                o = v;
                break;
              case "children":
                f = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(s(91));
                break;
              default:
                ut(e, t, y, v, r, null);
            }
        hm(e, l, o, f), Uu(e);
        return;
      case "option":
        for (S in r)
          if (r.hasOwnProperty(S) && ((l = r[S]), l != null))
            switch (S) {
              case "selected":
                e.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                ut(e, t, S, l, r, null);
            }
        return;
      case "dialog":
        Ke("cancel", e), Ke("close", e);
        break;
      case "iframe":
      case "object":
        Ke("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < zl.length; l++) Ke(zl[l], e);
        break;
      case "image":
        Ke("error", e), Ke("load", e);
        break;
      case "details":
        Ke("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ke("error", e), Ke("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (D in r)
          if (r.hasOwnProperty(D) && ((l = r[D]), l != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                ut(e, t, D, l, r, null);
            }
        return;
      default:
        if (Uc(t)) {
          for (Z in r)
            r.hasOwnProperty(Z) &&
              ((l = r[Z]), l !== void 0 && bd(e, t, Z, l, r, void 0));
          return;
        }
    }
    for (v in r)
      r.hasOwnProperty(v) && ((l = r[v]), l != null && ut(e, t, v, l, r, null));
  }
  function Rx(e, t, r, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var o = null,
          f = null,
          y = null,
          v = null,
          S = null,
          D = null,
          Z = null;
        for (q in r) {
          var $ = r[q];
          if (r.hasOwnProperty(q) && $ != null)
            switch (q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = $;
              default:
                l.hasOwnProperty(q) || ut(e, t, q, null, l, $);
            }
        }
        for (var k in l) {
          var q = l[k];
          if ((($ = r[k]), l.hasOwnProperty(k) && (q != null || $ != null)))
            switch (k) {
              case "type":
                f = q;
                break;
              case "name":
                o = q;
                break;
              case "checked":
                D = q;
                break;
              case "defaultChecked":
                Z = q;
                break;
              case "value":
                y = q;
                break;
              case "defaultValue":
                v = q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (q != null) throw Error(s(137, t));
                break;
              default:
                q !== $ && ut(e, t, k, q, l, $);
            }
        }
        Nc(e, y, v, S, D, Z, f, o);
        return;
      case "select":
        q = y = v = k = null;
        for (f in r)
          if (((S = r[f]), r.hasOwnProperty(f) && S != null))
            switch (f) {
              case "value":
                break;
              case "multiple":
                q = S;
              default:
                l.hasOwnProperty(f) || ut(e, t, f, null, l, S);
            }
        for (o in l)
          if (
            ((f = l[o]),
            (S = r[o]),
            l.hasOwnProperty(o) && (f != null || S != null))
          )
            switch (o) {
              case "value":
                k = f;
                break;
              case "defaultValue":
                v = f;
                break;
              case "multiple":
                y = f;
              default:
                f !== S && ut(e, t, o, f, l, S);
            }
        (t = v),
          (r = y),
          (l = q),
          k != null
            ? Bi(e, !!r, k, !1)
            : !!l != !!r &&
              (t != null ? Bi(e, !!r, t, !0) : Bi(e, !!r, r ? [] : "", !1));
        return;
      case "textarea":
        q = k = null;
        for (v in r)
          if (
            ((o = r[v]),
            r.hasOwnProperty(v) && o != null && !l.hasOwnProperty(v))
          )
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                ut(e, t, v, null, l, o);
            }
        for (y in l)
          if (
            ((o = l[y]),
            (f = r[y]),
            l.hasOwnProperty(y) && (o != null || f != null))
          )
            switch (y) {
              case "value":
                k = o;
                break;
              case "defaultValue":
                q = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(s(91));
                break;
              default:
                o !== f && ut(e, t, y, o, l, f);
            }
        dm(e, k, q);
        return;
      case "option":
        for (var _e in r)
          if (
            ((k = r[_e]),
            r.hasOwnProperty(_e) && k != null && !l.hasOwnProperty(_e))
          )
            switch (_e) {
              case "selected":
                e.selected = !1;
                break;
              default:
                ut(e, t, _e, null, l, k);
            }
        for (S in l)
          if (
            ((k = l[S]),
            (q = r[S]),
            l.hasOwnProperty(S) && k !== q && (k != null || q != null))
          )
            switch (S) {
              case "selected":
                e.selected =
                  k && typeof k != "function" && typeof k != "symbol";
                break;
              default:
                ut(e, t, S, k, l, q);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ke in r)
          (k = r[ke]),
            r.hasOwnProperty(ke) &&
              k != null &&
              !l.hasOwnProperty(ke) &&
              ut(e, t, ke, null, l, k);
        for (D in l)
          if (
            ((k = l[D]),
            (q = r[D]),
            l.hasOwnProperty(D) && k !== q && (k != null || q != null))
          )
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (k != null) throw Error(s(137, t));
                break;
              default:
                ut(e, t, D, k, l, q);
            }
        return;
      default:
        if (Uc(t)) {
          for (var xt in r)
            (k = r[xt]),
              r.hasOwnProperty(xt) &&
                k !== void 0 &&
                !l.hasOwnProperty(xt) &&
                bd(e, t, xt, void 0, l, k);
          for (Z in l)
            (k = l[Z]),
              (q = r[Z]),
              !l.hasOwnProperty(Z) ||
                k === q ||
                (k === void 0 && q === void 0) ||
                bd(e, t, Z, k, l, q);
          return;
        }
    }
    for (var M in r)
      (k = r[M]),
        r.hasOwnProperty(M) &&
          k != null &&
          !l.hasOwnProperty(M) &&
          ut(e, t, M, null, l, k);
    for ($ in l)
      (k = l[$]),
        (q = r[$]),
        !l.hasOwnProperty($) ||
          k === q ||
          (k == null && q == null) ||
          ut(e, t, $, k, l, q);
  }
  var xd = null,
    Sd = null;
  function Ao(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function sg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function lg(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function _d(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var wd = null;
  function Ax() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === wd
        ? !1
        : ((wd = e), !0)
      : ((wd = null), !1);
  }
  var ug = typeof setTimeout == "function" ? setTimeout : void 0,
    Ox = typeof clearTimeout == "function" ? clearTimeout : void 0,
    og = typeof Promise == "function" ? Promise : void 0,
    Cx =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof og < "u"
          ? function (e) {
              return og.resolve(null).then(e).catch(Dx);
            }
          : ug;
  function Dx(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ed(e, t) {
    var r = t,
      l = 0;
    do {
      var o = r.nextSibling;
      if ((e.removeChild(r), o && o.nodeType === 8))
        if (((r = o.data), r === "/$")) {
          if (l === 0) {
            e.removeChild(o), Zl(t);
            return;
          }
          l--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || l++;
      r = o;
    } while (r);
    Zl(t);
  }
  function Td(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var r = t;
      switch (((t = t.nextSibling), r.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Td(r), Mc(r);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (r.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(r);
    }
  }
  function Mx(e, t, r, l) {
    for (; e.nodeType === 1; ) {
      var o = r;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[Js])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((f = e.getAttribute("rel")),
                f === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                f !== o.rel ||
                e.getAttribute("href") !== (o.href == null ? null : o.href) ||
                e.getAttribute("crossorigin") !==
                  (o.crossOrigin == null ? null : o.crossOrigin) ||
                e.getAttribute("title") !== (o.title == null ? null : o.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((f = e.getAttribute("src")),
                (f !== (o.src == null ? null : o.src) ||
                  e.getAttribute("type") !== (o.type == null ? null : o.type) ||
                  e.getAttribute("crossorigin") !==
                    (o.crossOrigin == null ? null : o.crossOrigin)) &&
                  f &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var f = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && e.getAttribute("name") === f) return e;
      } else return e;
      if (((e = Kn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Nx(e, t, r) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !r) ||
        ((e = Kn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Kn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function cg(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (t === 0) return e;
          t--;
        } else r === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function fg(e, t, r) {
    switch (((t = Ao(r)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(s(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(s(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  var Bn = new Map(),
    dg = new Set();
  function Oo(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.ownerDocument;
  }
  var qa = J.d;
  J.d = { f: zx, r: Ux, D: kx, C: jx, L: Lx, m: Bx, X: Vx, S: Hx, M: qx };
  function zx() {
    var e = qa.f(),
      t = xo();
    return e || t;
  }
  function Ux(e) {
    var t = ki(e);
    t !== null && t.tag === 5 && t.type === "form" ? Hp(t) : qa.r(e);
  }
  var ds = typeof document > "u" ? null : document;
  function hg(e, t, r) {
    var l = ds;
    if (l && typeof t == "string" && t) {
      var o = On(t);
      (o = 'link[rel="' + e + '"][href="' + o + '"]'),
        typeof r == "string" && (o += '[crossorigin="' + r + '"]'),
        dg.has(o) ||
          (dg.add(o),
          (e = { rel: e, crossOrigin: r, href: t }),
          l.querySelector(o) === null &&
            ((t = l.createElement("link")),
            qt(t, "link", e),
            Ut(t),
            l.head.appendChild(t)));
    }
  }
  function kx(e) {
    qa.D(e), hg("dns-prefetch", e, null);
  }
  function jx(e, t) {
    qa.C(e, t), hg("preconnect", e, t);
  }
  function Lx(e, t, r) {
    qa.L(e, t, r);
    var l = ds;
    if (l && e && t) {
      var o = 'link[rel="preload"][as="' + On(t) + '"]';
      t === "image" && r && r.imageSrcSet
        ? ((o += '[imagesrcset="' + On(r.imageSrcSet) + '"]'),
          typeof r.imageSizes == "string" &&
            (o += '[imagesizes="' + On(r.imageSizes) + '"]'))
        : (o += '[href="' + On(e) + '"]');
      var f = o;
      switch (t) {
        case "style":
          f = hs(e);
          break;
        case "script":
          f = ms(e);
      }
      Bn.has(f) ||
        ((e = pe(
          {
            rel: "preload",
            href: t === "image" && r && r.imageSrcSet ? void 0 : e,
            as: t,
          },
          r,
        )),
        Bn.set(f, e),
        l.querySelector(o) !== null ||
          (t === "style" && l.querySelector(kl(f))) ||
          (t === "script" && l.querySelector(jl(f))) ||
          ((t = l.createElement("link")),
          qt(t, "link", e),
          Ut(t),
          l.head.appendChild(t)));
    }
  }
  function Bx(e, t) {
    qa.m(e, t);
    var r = ds;
    if (r && e) {
      var l = t && typeof t.as == "string" ? t.as : "script",
        o =
          'link[rel="modulepreload"][as="' + On(l) + '"][href="' + On(e) + '"]',
        f = o;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = ms(e);
      }
      if (
        !Bn.has(f) &&
        ((e = pe({ rel: "modulepreload", href: e }, t)),
        Bn.set(f, e),
        r.querySelector(o) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (r.querySelector(jl(f))) return;
        }
        (l = r.createElement("link")),
          qt(l, "link", e),
          Ut(l),
          r.head.appendChild(l);
      }
    }
  }
  function Hx(e, t, r) {
    qa.S(e, t, r);
    var l = ds;
    if (l && e) {
      var o = ji(l).hoistableStyles,
        f = hs(e);
      t = t || "default";
      var y = o.get(f);
      if (!y) {
        var v = { loading: 0, preload: null };
        if ((y = l.querySelector(kl(f)))) v.loading = 5;
        else {
          (e = pe({ rel: "stylesheet", href: e, "data-precedence": t }, r)),
            (r = Bn.get(f)) && Rd(e, r);
          var S = (y = l.createElement("link"));
          Ut(S),
            qt(S, "link", e),
            (S._p = new Promise(function (D, Z) {
              (S.onload = D), (S.onerror = Z);
            })),
            S.addEventListener("load", function () {
              v.loading |= 1;
            }),
            S.addEventListener("error", function () {
              v.loading |= 2;
            }),
            (v.loading |= 4),
            Co(y, t, l);
        }
        (y = { type: "stylesheet", instance: y, count: 1, state: v }),
          o.set(f, y);
      }
    }
  }
  function Vx(e, t) {
    qa.X(e, t);
    var r = ds;
    if (r && e) {
      var l = ji(r).hoistableScripts,
        o = ms(e),
        f = l.get(o);
      f ||
        ((f = r.querySelector(jl(o))),
        f ||
          ((e = pe({ src: e, async: !0 }, t)),
          (t = Bn.get(o)) && Ad(e, t),
          (f = r.createElement("script")),
          Ut(f),
          qt(f, "link", e),
          r.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        l.set(o, f));
    }
  }
  function qx(e, t) {
    qa.M(e, t);
    var r = ds;
    if (r && e) {
      var l = ji(r).hoistableScripts,
        o = ms(e),
        f = l.get(o);
      f ||
        ((f = r.querySelector(jl(o))),
        f ||
          ((e = pe({ src: e, async: !0, type: "module" }, t)),
          (t = Bn.get(o)) && Ad(e, t),
          (f = r.createElement("script")),
          Ut(f),
          qt(f, "link", e),
          r.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        l.set(o, f));
    }
  }
  function mg(e, t, r, l) {
    var o = (o = sn.current) ? Oo(o) : null;
    if (!o) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof r.precedence == "string" && typeof r.href == "string"
          ? ((t = hs(r.href)),
            (r = ji(o).hoistableStyles),
            (l = r.get(t)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              r.set(t, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          r.rel === "stylesheet" &&
          typeof r.href == "string" &&
          typeof r.precedence == "string"
        ) {
          e = hs(r.href);
          var f = ji(o).hoistableStyles,
            y = f.get(e);
          if (
            (y ||
              ((o = o.ownerDocument || o),
              (y = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              f.set(e, y),
              (f = o.querySelector(kl(e))) &&
                !f._p &&
                ((y.instance = f), (y.state.loading = 5)),
              Bn.has(e) ||
                ((r = {
                  rel: "preload",
                  as: "style",
                  href: r.href,
                  crossOrigin: r.crossOrigin,
                  integrity: r.integrity,
                  media: r.media,
                  hrefLang: r.hrefLang,
                  referrerPolicy: r.referrerPolicy,
                }),
                Bn.set(e, r),
                f || Zx(o, e, r, y.state))),
            t && l === null)
          )
            throw Error(s(528, ""));
          return y;
        }
        if (t && l !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (t = r.async),
          (r = r.src),
          typeof r == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = ms(r)),
              (r = ji(o).hoistableScripts),
              (l = r.get(t)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                r.set(t, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, e));
    }
  }
  function hs(e) {
    return 'href="' + On(e) + '"';
  }
  function kl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function pg(e) {
    return pe({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Zx(e, t, r, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (l.loading = 1)
      : ((t = e.createElement("link")),
        (l.preload = t),
        t.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        qt(t, "link", r),
        Ut(t),
        e.head.appendChild(t));
  }
  function ms(e) {
    return '[src="' + On(e) + '"]';
  }
  function jl(e) {
    return "script[async]" + e;
  }
  function yg(e, t, r) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + On(r.href) + '"]');
          if (l) return (t.instance = l), Ut(l), l;
          var o = pe({}, r, {
            "data-href": r.href,
            "data-precedence": r.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement("style")),
            Ut(l),
            qt(l, "style", o),
            Co(l, r.precedence, e),
            (t.instance = l)
          );
        case "stylesheet":
          o = hs(r.href);
          var f = e.querySelector(kl(o));
          if (f) return (t.state.loading |= 4), (t.instance = f), Ut(f), f;
          (l = pg(r)),
            (o = Bn.get(o)) && Rd(l, o),
            (f = (e.ownerDocument || e).createElement("link")),
            Ut(f);
          var y = f;
          return (
            (y._p = new Promise(function (v, S) {
              (y.onload = v), (y.onerror = S);
            })),
            qt(f, "link", l),
            (t.state.loading |= 4),
            Co(f, r.precedence, e),
            (t.instance = f)
          );
        case "script":
          return (
            (f = ms(r.src)),
            (o = e.querySelector(jl(f)))
              ? ((t.instance = o), Ut(o), o)
              : ((l = r),
                (o = Bn.get(f)) && ((l = pe({}, r)), Ad(l, o)),
                (e = e.ownerDocument || e),
                (o = e.createElement("script")),
                Ut(o),
                qt(o, "link", l),
                e.head.appendChild(o),
                (t.instance = o))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        !(t.state.loading & 4) &&
        ((l = t.instance), (t.state.loading |= 4), Co(l, r.precedence, e));
    return t.instance;
  }
  function Co(e, t, r) {
    for (
      var l = r.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        o = l.length ? l[l.length - 1] : null,
        f = o,
        y = 0;
      y < l.length;
      y++
    ) {
      var v = l[y];
      if (v.dataset.precedence === t) f = v;
      else if (f !== o) break;
    }
    f
      ? f.parentNode.insertBefore(e, f.nextSibling)
      : ((t = r.nodeType === 9 ? r.head : r), t.insertBefore(e, t.firstChild));
  }
  function Rd(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function Ad(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var Do = null;
  function gg(e, t, r) {
    if (Do === null) {
      var l = new Map(),
        o = (Do = new Map());
      o.set(r, l);
    } else (o = Do), (l = o.get(r)), l || ((l = new Map()), o.set(r, l));
    if (l.has(e)) return l;
    for (
      l.set(e, null), r = r.getElementsByTagName(e), o = 0;
      o < r.length;
      o++
    ) {
      var f = r[o];
      if (
        !(
          f[Js] ||
          f[Yt] ||
          (e === "link" && f.getAttribute("rel") === "stylesheet")
        ) &&
        f.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var y = f.getAttribute(t) || "";
        y = e + y;
        var v = l.get(y);
        v ? v.push(f) : l.set(y, [f]);
      }
    }
    return l;
  }
  function vg(e, t, r) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        r,
        t === "title" ? e.querySelector("head > title") : null,
      );
  }
  function Yx(e, t, r) {
    if (r === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled), typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function bg(e) {
    return !(e.type === "stylesheet" && !(e.state.loading & 3));
  }
  var Ll = null;
  function Qx() {}
  function Gx(e, t, r) {
    if (Ll === null) throw Error(s(475));
    var l = Ll;
    if (
      t.type === "stylesheet" &&
      (typeof r.media != "string" || matchMedia(r.media).matches !== !1) &&
      !(t.state.loading & 4)
    ) {
      if (t.instance === null) {
        var o = hs(r.href),
          f = e.querySelector(kl(o));
        if (f) {
          (e = f._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (l.count++, (l = Mo.bind(l)), e.then(l, l)),
            (t.state.loading |= 4),
            (t.instance = f),
            Ut(f);
          return;
        }
        (f = e.ownerDocument || e),
          (r = pg(r)),
          (o = Bn.get(o)) && Rd(r, o),
          (f = f.createElement("link")),
          Ut(f);
        var y = f;
        (y._p = new Promise(function (v, S) {
          (y.onload = v), (y.onerror = S);
        })),
          qt(f, "link", r),
          (t.instance = f);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(t, e),
        (e = t.state.preload) &&
          !(t.state.loading & 3) &&
          (l.count++,
          (t = Mo.bind(l)),
          e.addEventListener("load", t),
          e.addEventListener("error", t));
    }
  }
  function Fx() {
    if (Ll === null) throw Error(s(475));
    var e = Ll;
    return (
      e.stylesheets && e.count === 0 && Od(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var r = setTimeout(function () {
              if ((e.stylesheets && Od(e, e.stylesheets), e.unsuspend)) {
                var l = e.unsuspend;
                (e.unsuspend = null), l();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(r);
              }
            );
          }
        : null
    );
  }
  function Mo() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Od(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var No = null;
  function Od(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (No = new Map()),
        t.forEach(Xx, e),
        (No = null),
        Mo.call(e));
  }
  function Xx(e, t) {
    if (!(t.state.loading & 4)) {
      var r = No.get(e);
      if (r) var l = r.get(null);
      else {
        (r = new Map()), No.set(e, r);
        for (
          var o = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            f = 0;
          f < o.length;
          f++
        ) {
          var y = o[f];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") &&
            (r.set(y.dataset.precedence, y), (l = y));
        }
        l && r.set(null, l);
      }
      (o = t.instance),
        (y = o.getAttribute("data-precedence")),
        (f = r.get(y) || l),
        f === l && r.set(null, o),
        r.set(y, o),
        this.count++,
        (l = Mo.bind(this)),
        o.addEventListener("load", l),
        o.addEventListener("error", l),
        f
          ? f.parentNode.insertBefore(o, f.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(o, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Bl = {
    $$typeof: b,
    Provider: null,
    Consumer: null,
    _currentValue: Re,
    _currentValue2: Re,
    _threadCount: 0,
  };
  function Kx(e, t, r, l, o, f, y, v) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Wt(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Wt(0)),
      (this.hiddenUpdates = Wt(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = o),
      (this.onCaughtError = f),
      (this.onRecoverableError = y),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = v),
      (this.incompleteTransitions = new Map());
  }
  function xg(e, t, r, l, o, f, y, v, S, D, Z, $) {
    return (
      (e = new Kx(e, t, r, y, v, S, D, $)),
      (t = 1),
      f === !0 && (t |= 24),
      (f = jn(3, null, null, t)),
      (e.current = f),
      (f.stateNode = e),
      (t = sf()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (f.memoizedState = { element: l, isDehydrated: r, cache: t }),
      Vf(f),
      e
    );
  }
  function Sg(e) {
    return e ? ((e = Fi), e) : Fi;
  }
  function _g(e, t, r, l, o, f) {
    (o = Sg(o)),
      l.context === null ? (l.context = o) : (l.pendingContext = o),
      (l = lr(t)),
      (l.payload = { element: r }),
      (f = f === void 0 ? null : f),
      f !== null && (l.callback = f),
      (r = ur(e, l, t)),
      r !== null && (en(r, e, t), Sl(r, e, t));
  }
  function wg(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Cd(e, t) {
    wg(e, t), (e = e.alternate) && wg(e, t);
  }
  function Eg(e) {
    if (e.tag === 13) {
      var t = er(e, 67108864);
      t !== null && en(t, e, 67108864), Cd(e, 67108864);
    }
  }
  var zo = !0;
  function $x(e, t, r, l) {
    var o = F.T;
    F.T = null;
    var f = J.p;
    try {
      (J.p = 2), Dd(e, t, r, l);
    } finally {
      (J.p = f), (F.T = o);
    }
  }
  function Jx(e, t, r, l) {
    var o = F.T;
    F.T = null;
    var f = J.p;
    try {
      (J.p = 8), Dd(e, t, r, l);
    } finally {
      (J.p = f), (F.T = o);
    }
  }
  function Dd(e, t, r, l) {
    if (zo) {
      var o = Md(l);
      if (o === null) vd(e, t, l, Uo, r), Rg(e, l);
      else if (Wx(o, e, t, r, l)) l.stopPropagation();
      else if ((Rg(e, l), t & 4 && -1 < Px.indexOf(e))) {
        for (; o !== null; ) {
          var f = ki(o);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (((f = f.stateNode), f.current.memoizedState.isDehydrated)) {
                  var y = Zt(f.pendingLanes);
                  if (y !== 0) {
                    var v = f;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; y; ) {
                      var S = 1 << (31 - Pt(y));
                      (v.entanglements[1] |= S), (y &= ~S);
                    }
                    oa(f), !(mt & 6) && ((go = ge() + 500), Nl(0));
                  }
                }
                break;
              case 13:
                (v = er(f, 2)), v !== null && en(v, f, 2), xo(), Cd(f, 2);
            }
          if (((f = Md(l)), f === null && vd(e, t, l, Uo, r), f === o)) break;
          o = f;
        }
        o !== null && l.stopPropagation();
      } else vd(e, t, l, null, r);
    }
  }
  function Md(e) {
    return (e = jc(e)), Nd(e);
  }
  var Uo = null;
  function Nd(e) {
    if (((Uo = null), (e = qr(e)), e !== null)) {
      var t = ee(e);
      if (t === null) e = null;
      else {
        var r = t.tag;
        if (r === 13) {
          if (((e = ce(t)), e !== null)) return e;
          e = null;
        } else if (r === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (Uo = e), null;
  }
  function Tg(e) {
    switch (e) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Le()) {
          case Pe:
            return 2;
          case st:
            return 8;
          case $t:
          case $s:
            return 32;
          case Yn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var zd = !1,
    pr = null,
    yr = null,
    gr = null,
    Hl = new Map(),
    Vl = new Map(),
    vr = [],
    Px =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Rg(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        pr = null;
        break;
      case "dragenter":
      case "dragleave":
        yr = null;
        break;
      case "mouseover":
      case "mouseout":
        gr = null;
        break;
      case "pointerover":
      case "pointerout":
        Hl.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Vl.delete(t.pointerId);
    }
  }
  function ql(e, t, r, l, o, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: l,
          nativeEvent: f,
          targetContainers: [o],
        }),
        t !== null && ((t = ki(t)), t !== null && Eg(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e);
  }
  function Wx(e, t, r, l, o) {
    switch (t) {
      case "focusin":
        return (pr = ql(pr, e, t, r, l, o)), !0;
      case "dragenter":
        return (yr = ql(yr, e, t, r, l, o)), !0;
      case "mouseover":
        return (gr = ql(gr, e, t, r, l, o)), !0;
      case "pointerover":
        var f = o.pointerId;
        return Hl.set(f, ql(Hl.get(f) || null, e, t, r, l, o)), !0;
      case "gotpointercapture":
        return (
          (f = o.pointerId), Vl.set(f, ql(Vl.get(f) || null, e, t, r, l, o)), !0
        );
    }
    return !1;
  }
  function Ag(e) {
    var t = qr(e.target);
    if (t !== null) {
      var r = ee(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = ce(r)), t !== null)) {
            (e.blockedOn = t),
              F0(e.priority, function () {
                if (r.tag === 13) {
                  var l = wn(),
                    o = er(r, l);
                  o !== null && en(o, r, l), Cd(r, l);
                }
              });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ko(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Md(e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var l = new r.constructor(r.type, r);
        (kc = l), r.target.dispatchEvent(l), (kc = null);
      } else return (t = ki(r)), t !== null && Eg(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function Og(e, t, r) {
    ko(e) && r.delete(t);
  }
  function Ix() {
    (zd = !1),
      pr !== null && ko(pr) && (pr = null),
      yr !== null && ko(yr) && (yr = null),
      gr !== null && ko(gr) && (gr = null),
      Hl.forEach(Og),
      Vl.forEach(Og);
  }
  function jo(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      zd ||
        ((zd = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, Ix)));
  }
  var Lo = null;
  function Cg(e) {
    Lo !== e &&
      ((Lo = e),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Lo === e && (Lo = null);
        for (var t = 0; t < e.length; t += 3) {
          var r = e[t],
            l = e[t + 1],
            o = e[t + 2];
          if (typeof l != "function") {
            if (Nd(l || r) === null) continue;
            break;
          }
          var f = ki(r);
          f !== null &&
            (e.splice(t, 3),
            (t -= 3),
            _f(f, { pending: !0, data: o, method: r.method, action: l }, l, o));
        }
      }));
  }
  function Zl(e) {
    function t(S) {
      return jo(S, e);
    }
    pr !== null && jo(pr, e),
      yr !== null && jo(yr, e),
      gr !== null && jo(gr, e),
      Hl.forEach(t),
      Vl.forEach(t);
    for (var r = 0; r < vr.length; r++) {
      var l = vr[r];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < vr.length && ((r = vr[0]), r.blockedOn === null); )
      Ag(r), r.blockedOn === null && vr.shift();
    if (((r = (e.ownerDocument || e).$$reactFormReplay), r != null))
      for (l = 0; l < r.length; l += 3) {
        var o = r[l],
          f = r[l + 1],
          y = o[cn] || null;
        if (typeof f == "function") y || Cg(r);
        else if (y) {
          var v = null;
          if (f && f.hasAttribute("formAction")) {
            if (((o = f), (y = f[cn] || null))) v = y.formAction;
            else if (Nd(o) !== null) continue;
          } else v = y.action;
          typeof v == "function" ? (r[l + 1] = v) : (r.splice(l, 3), (l -= 3)),
            Cg(r);
        }
      }
  }
  function Ud(e) {
    this._internalRoot = e;
  }
  (Bo.prototype.render = Ud.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      var r = t.current,
        l = wn();
      _g(r, l, e, t, null, null);
    }),
    (Bo.prototype.unmount = Ud.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          e.tag === 0 && os(),
            _g(e.current, 2, null, e, null, null),
            xo(),
            (t[Ui] = null);
        }
      });
  function Bo(e) {
    this._internalRoot = e;
  }
  Bo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = am();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < vr.length && t !== 0 && t < vr[r].priority; r++);
      vr.splice(r, 0, e), r === 0 && Ag(e);
    }
  };
  var Dg = n.version;
  if (Dg !== "19.0.0") throw Error(s(527, Dg, "19.0.0"));
  J.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(s(188))
        : ((e = Object.keys(e).join(",")), Error(s(268, e)));
    return (
      (e = Y(t)),
      (e = e !== null ? te(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var eS = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: F,
    findFiberByHostInstance: qr,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ho = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ho.isDisabled && Ho.supportsFiber)
      try {
        (Rn = Ho.inject(eS)), (gt = Ho);
      } catch {}
  }
  return (
    (Ql.createRoot = function (e, t) {
      if (!u(e)) throw Error(s(299));
      var r = !1,
        l = "",
        o = Xp,
        f = Kp,
        y = $p,
        v = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
          t.onCaughtError !== void 0 && (f = t.onCaughtError),
          t.onRecoverableError !== void 0 && (y = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (v = t.unstable_transitionCallbacks)),
        (t = xg(e, 1, !1, null, null, r, l, o, f, y, v, null)),
        (e[Ui] = t.current),
        gd(e.nodeType === 8 ? e.parentNode : e),
        new Ud(t)
      );
    }),
    (Ql.hydrateRoot = function (e, t, r) {
      if (!u(e)) throw Error(s(299));
      var l = !1,
        o = "",
        f = Xp,
        y = Kp,
        v = $p,
        S = null,
        D = null;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (l = !0),
          r.identifierPrefix !== void 0 && (o = r.identifierPrefix),
          r.onUncaughtError !== void 0 && (f = r.onUncaughtError),
          r.onCaughtError !== void 0 && (y = r.onCaughtError),
          r.onRecoverableError !== void 0 && (v = r.onRecoverableError),
          r.unstable_transitionCallbacks !== void 0 &&
            (S = r.unstable_transitionCallbacks),
          r.formState !== void 0 && (D = r.formState)),
        (t = xg(e, 1, !0, t, r ?? null, l, o, f, y, v, S, D)),
        (t.context = Sg(null)),
        (r = t.current),
        (l = wn()),
        (o = lr(l)),
        (o.callback = null),
        ur(r, o, l),
        (t.current.lanes = l),
        un(t, l),
        oa(t),
        (e[Ui] = t.current),
        gd(e),
        new Bo(t)
      );
    }),
    (Ql.version = "19.0.0"),
    Ql
  );
}
var qg;
function oS() {
  if (qg) return Bd.exports;
  qg = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (n) {
        console.error(n);
      }
  }
  return a(), (Bd.exports = uS()), Bd.exports;
}
var cS = oS(),
  Gl = {},
  Zg;
function fS() {
  if (Zg) return Gl;
  (Zg = 1),
    Object.defineProperty(Gl, "__esModule", { value: !0 }),
    (Gl.parse = d),
    (Gl.serialize = m);
  const a = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    n = /^[\u0021-\u003A\u003C-\u007E]*$/,
    i =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    s = /^[\u0020-\u003A\u003D-\u007E]*$/,
    u = Object.prototype.toString,
    c = (() => {
      const A = function () {};
      return (A.prototype = Object.create(null)), A;
    })();
  function d(A, b) {
    const T = new c(),
      O = A.length;
    if (O < 2) return T;
    const R = (b == null ? void 0 : b.decode) || g;
    let j = 0;
    do {
      const L = A.indexOf("=", j);
      if (L === -1) break;
      const V = A.indexOf(";", j),
        se = V === -1 ? O : V;
      if (L > se) {
        j = A.lastIndexOf(";", L - 1) + 1;
        continue;
      }
      const G = h(A, j, L),
        le = p(A, L, G),
        we = A.slice(G, le);
      if (T[we] === void 0) {
        let Se = h(A, L + 1, se),
          F = p(A, se, Se);
        const pe = R(A.slice(Se, F));
        T[we] = pe;
      }
      j = se + 1;
    } while (j < O);
    return T;
  }
  function h(A, b, T) {
    do {
      const O = A.charCodeAt(b);
      if (O !== 32 && O !== 9) return b;
    } while (++b < T);
    return T;
  }
  function p(A, b, T) {
    for (; b > T; ) {
      const O = A.charCodeAt(--b);
      if (O !== 32 && O !== 9) return b + 1;
    }
    return T;
  }
  function m(A, b, T) {
    const O = (T == null ? void 0 : T.encode) || encodeURIComponent;
    if (!a.test(A)) throw new TypeError(`argument name is invalid: ${A}`);
    const R = O(b);
    if (!n.test(R)) throw new TypeError(`argument val is invalid: ${b}`);
    let j = A + "=" + R;
    if (!T) return j;
    if (T.maxAge !== void 0) {
      if (!Number.isInteger(T.maxAge))
        throw new TypeError(`option maxAge is invalid: ${T.maxAge}`);
      j += "; Max-Age=" + T.maxAge;
    }
    if (T.domain) {
      if (!i.test(T.domain))
        throw new TypeError(`option domain is invalid: ${T.domain}`);
      j += "; Domain=" + T.domain;
    }
    if (T.path) {
      if (!s.test(T.path))
        throw new TypeError(`option path is invalid: ${T.path}`);
      j += "; Path=" + T.path;
    }
    if (T.expires) {
      if (!x(T.expires) || !Number.isFinite(T.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${T.expires}`);
      j += "; Expires=" + T.expires.toUTCString();
    }
    if (
      (T.httpOnly && (j += "; HttpOnly"),
      T.secure && (j += "; Secure"),
      T.partitioned && (j += "; Partitioned"),
      T.priority)
    )
      switch (
        typeof T.priority == "string" ? T.priority.toLowerCase() : void 0
      ) {
        case "low":
          j += "; Priority=Low";
          break;
        case "medium":
          j += "; Priority=Medium";
          break;
        case "high":
          j += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${T.priority}`);
      }
    if (T.sameSite)
      switch (
        typeof T.sameSite == "string" ? T.sameSite.toLowerCase() : T.sameSite
      ) {
        case !0:
        case "strict":
          j += "; SameSite=Strict";
          break;
        case "lax":
          j += "; SameSite=Lax";
          break;
        case "none":
          j += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${T.sameSite}`);
      }
    return j;
  }
  function g(A) {
    if (A.indexOf("%") === -1) return A;
    try {
      return decodeURIComponent(A);
    } catch {
      return A;
    }
  }
  function x(A) {
    return u.call(A) === "[object Date]";
  }
  return Gl;
}
fS();
/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Yg = "popstate";
function dS(a = {}) {
  function n(s, u) {
    let { pathname: c, search: d, hash: h } = s.location;
    return eh(
      "",
      { pathname: c, search: d, hash: h },
      (u.state && u.state.usr) || null,
      (u.state && u.state.key) || "default",
    );
  }
  function i(s, u) {
    return typeof u == "string" ? u : au(u);
  }
  return mS(n, i, null, a);
}
function yt(a, n) {
  if (a === !1 || a === null || typeof a > "u") throw new Error(n);
}
function va(a, n) {
  if (!a) {
    typeof console < "u" && console.warn(n);
    try {
      throw new Error(n);
    } catch {}
  }
}
function hS() {
  return Math.random().toString(36).substring(2, 10);
}
function Qg(a, n) {
  return { usr: a.state, key: a.key, idx: n };
}
function eh(a, n, i = null, s) {
  return {
    pathname: typeof a == "string" ? a : a.pathname,
    search: "",
    hash: "",
    ...(typeof n == "string" ? Zs(n) : n),
    state: i,
    key: (n && n.key) || s || hS(),
  };
}
function au({ pathname: a = "/", search: n = "", hash: i = "" }) {
  return (
    n && n !== "?" && (a += n.charAt(0) === "?" ? n : "?" + n),
    i && i !== "#" && (a += i.charAt(0) === "#" ? i : "#" + i),
    a
  );
}
function Zs(a) {
  let n = {};
  if (a) {
    let i = a.indexOf("#");
    i >= 0 && ((n.hash = a.substring(i)), (a = a.substring(0, i)));
    let s = a.indexOf("?");
    s >= 0 && ((n.search = a.substring(s)), (a = a.substring(0, s))),
      a && (n.pathname = a);
  }
  return n;
}
function mS(a, n, i, s = {}) {
  let { window: u = document.defaultView, v5Compat: c = !1 } = s,
    d = u.history,
    h = "POP",
    p = null,
    m = g();
  m == null && ((m = 0), d.replaceState({ ...d.state, idx: m }, ""));
  function g() {
    return (d.state || { idx: null }).idx;
  }
  function x() {
    h = "POP";
    let R = g(),
      j = R == null ? null : R - m;
    (m = R), p && p({ action: h, location: O.location, delta: j });
  }
  function A(R, j) {
    h = "PUSH";
    let L = eh(O.location, R, j);
    m = g() + 1;
    let V = Qg(L, m),
      se = O.createHref(L);
    try {
      d.pushState(V, "", se);
    } catch (G) {
      if (G instanceof DOMException && G.name === "DataCloneError") throw G;
      u.location.assign(se);
    }
    c && p && p({ action: h, location: O.location, delta: 1 });
  }
  function b(R, j) {
    h = "REPLACE";
    let L = eh(O.location, R, j);
    m = g();
    let V = Qg(L, m),
      se = O.createHref(L);
    d.replaceState(V, "", se),
      c && p && p({ action: h, location: O.location, delta: 0 });
  }
  function T(R) {
    let j = u.location.origin !== "null" ? u.location.origin : u.location.href,
      L = typeof R == "string" ? R : au(R);
    return (
      (L = L.replace(/ $/, "%20")),
      yt(
        j,
        `No window.location.(origin|href) available to create URL for href: ${L}`,
      ),
      new URL(L, j)
    );
  }
  let O = {
    get action() {
      return h;
    },
    get location() {
      return a(u, d);
    },
    listen(R) {
      if (p) throw new Error("A history only accepts one active listener");
      return (
        u.addEventListener(Yg, x),
        (p = R),
        () => {
          u.removeEventListener(Yg, x), (p = null);
        }
      );
    },
    createHref(R) {
      return n(u, R);
    },
    createURL: T,
    encodeLocation(R) {
      let j = T(R);
      return { pathname: j.pathname, search: j.search, hash: j.hash };
    },
    push: A,
    replace: b,
    go(R) {
      return d.go(R);
    },
  };
  return O;
}
function $v(a, n, i = "/") {
  return pS(a, n, i, !1);
}
function pS(a, n, i, s) {
  let u = typeof n == "string" ? Zs(n) : n,
    c = Nr(u.pathname || "/", i);
  if (c == null) return null;
  let d = Jv(a);
  yS(d);
  let h = null;
  for (let p = 0; h == null && p < d.length; ++p) {
    let m = AS(c);
    h = TS(d[p], m, s);
  }
  return h;
}
function Jv(a, n = [], i = [], s = "") {
  let u = (c, d, h) => {
    let p = {
      relativePath: h === void 0 ? c.path || "" : h,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: d,
      route: c,
    };
    p.relativePath.startsWith("/") &&
      (yt(
        p.relativePath.startsWith(s),
        `Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
      (p.relativePath = p.relativePath.slice(s.length)));
    let m = Ka([s, p.relativePath]),
      g = i.concat(p);
    c.children &&
      c.children.length > 0 &&
      (yt(
        c.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${m}".`,
      ),
      Jv(c.children, n, g, m)),
      !(c.path == null && !c.index) &&
        n.push({ path: m, score: wS(m, c.index), routesMeta: g });
  };
  return (
    a.forEach((c, d) => {
      var h;
      if (c.path === "" || !((h = c.path) != null && h.includes("?"))) u(c, d);
      else for (let p of Pv(c.path)) u(c, d, p);
    }),
    n
  );
}
function Pv(a) {
  let n = a.split("/");
  if (n.length === 0) return [];
  let [i, ...s] = n,
    u = i.endsWith("?"),
    c = i.replace(/\?$/, "");
  if (s.length === 0) return u ? [c, ""] : [c];
  let d = Pv(s.join("/")),
    h = [];
  return (
    h.push(...d.map((p) => (p === "" ? c : [c, p].join("/")))),
    u && h.push(...d),
    h.map((p) => (a.startsWith("/") && p === "" ? "/" : p))
  );
}
function yS(a) {
  a.sort((n, i) =>
    n.score !== i.score
      ? i.score - n.score
      : ES(
          n.routesMeta.map((s) => s.childrenIndex),
          i.routesMeta.map((s) => s.childrenIndex),
        ),
  );
}
var gS = /^:[\w-]+$/,
  vS = 3,
  bS = 2,
  xS = 1,
  SS = 10,
  _S = -2,
  Gg = (a) => a === "*";
function wS(a, n) {
  let i = a.split("/"),
    s = i.length;
  return (
    i.some(Gg) && (s += _S),
    n && (s += bS),
    i
      .filter((u) => !Gg(u))
      .reduce((u, c) => u + (gS.test(c) ? vS : c === "" ? xS : SS), s)
  );
}
function ES(a, n) {
  return a.length === n.length && a.slice(0, -1).every((s, u) => s === n[u])
    ? a[a.length - 1] - n[n.length - 1]
    : 0;
}
function TS(a, n, i = !1) {
  let { routesMeta: s } = a,
    u = {},
    c = "/",
    d = [];
  for (let h = 0; h < s.length; ++h) {
    let p = s[h],
      m = h === s.length - 1,
      g = c === "/" ? n : n.slice(c.length) || "/",
      x = Wo(
        { path: p.relativePath, caseSensitive: p.caseSensitive, end: m },
        g,
      ),
      A = p.route;
    if (
      (!x &&
        m &&
        i &&
        !s[s.length - 1].route.index &&
        (x = Wo(
          { path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 },
          g,
        )),
      !x)
    )
      return null;
    Object.assign(u, x.params),
      d.push({
        params: u,
        pathname: Ka([c, x.pathname]),
        pathnameBase: MS(Ka([c, x.pathnameBase])),
        route: A,
      }),
      x.pathnameBase !== "/" && (c = Ka([c, x.pathnameBase]));
  }
  return d;
}
function Wo(a, n) {
  typeof a == "string" && (a = { path: a, caseSensitive: !1, end: !0 });
  let [i, s] = RS(a.path, a.caseSensitive, a.end),
    u = n.match(i);
  if (!u) return null;
  let c = u[0],
    d = c.replace(/(.)\/+$/, "$1"),
    h = u.slice(1);
  return {
    params: s.reduce((m, { paramName: g, isOptional: x }, A) => {
      if (g === "*") {
        let T = h[A] || "";
        d = c.slice(0, c.length - T.length).replace(/(.)\/+$/, "$1");
      }
      const b = h[A];
      return (
        x && !b ? (m[g] = void 0) : (m[g] = (b || "").replace(/%2F/g, "/")), m
      );
    }, {}),
    pathname: c,
    pathnameBase: d,
    pattern: a,
  };
}
function RS(a, n = !1, i = !0) {
  va(
    a === "*" || !a.endsWith("*") || a.endsWith("/*"),
    `Route path "${a}" will be treated as if it were "${a.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/, "/*")}".`,
  );
  let s = [],
    u =
      "^" +
      a
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (d, h, p) => (
            s.push({ paramName: h, isOptional: p != null }),
            p ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    a.endsWith("*")
      ? (s.push({ paramName: "*" }),
        (u += a === "*" || a === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : i
        ? (u += "\\/*$")
        : a !== "" && a !== "/" && (u += "(?:(?=\\/|$))"),
    [new RegExp(u, n ? void 0 : "i"), s]
  );
}
function AS(a) {
  try {
    return a
      .split("/")
      .map((n) => decodeURIComponent(n).replace(/\//g, "%2F"))
      .join("/");
  } catch (n) {
    return (
      va(
        !1,
        `The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`,
      ),
      a
    );
  }
}
function Nr(a, n) {
  if (n === "/") return a;
  if (!a.toLowerCase().startsWith(n.toLowerCase())) return null;
  let i = n.endsWith("/") ? n.length - 1 : n.length,
    s = a.charAt(i);
  return s && s !== "/" ? null : a.slice(i) || "/";
}
function OS(a, n = "/") {
  let {
    pathname: i,
    search: s = "",
    hash: u = "",
  } = typeof a == "string" ? Zs(a) : a;
  return {
    pathname: i ? (i.startsWith("/") ? i : CS(i, n)) : n,
    search: NS(s),
    hash: zS(u),
  };
}
function CS(a, n) {
  let i = n.replace(/\/+$/, "").split("/");
  return (
    a.split("/").forEach((u) => {
      u === ".." ? i.length > 1 && i.pop() : u !== "." && i.push(u);
    }),
    i.length > 1 ? i.join("/") : "/"
  );
}
function Zd(a, n, i, s) {
  return `Cannot include a '${a}' character in a manually specified \`to.${n}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function DS(a) {
  return a.filter(
    (n, i) => i === 0 || (n.route.path && n.route.path.length > 0),
  );
}
function Wv(a) {
  let n = DS(a);
  return n.map((i, s) => (s === n.length - 1 ? i.pathname : i.pathnameBase));
}
function Iv(a, n, i, s = !1) {
  let u;
  typeof a == "string"
    ? (u = Zs(a))
    : ((u = { ...a }),
      yt(
        !u.pathname || !u.pathname.includes("?"),
        Zd("?", "pathname", "search", u),
      ),
      yt(
        !u.pathname || !u.pathname.includes("#"),
        Zd("#", "pathname", "hash", u),
      ),
      yt(!u.search || !u.search.includes("#"), Zd("#", "search", "hash", u)));
  let c = a === "" || u.pathname === "",
    d = c ? "/" : u.pathname,
    h;
  if (d == null) h = i;
  else {
    let x = n.length - 1;
    if (!s && d.startsWith("..")) {
      let A = d.split("/");
      for (; A[0] === ".."; ) A.shift(), (x -= 1);
      u.pathname = A.join("/");
    }
    h = x >= 0 ? n[x] : "/";
  }
  let p = OS(u, h),
    m = d && d !== "/" && d.endsWith("/"),
    g = (c || d === ".") && i.endsWith("/");
  return !p.pathname.endsWith("/") && (m || g) && (p.pathname += "/"), p;
}
var Ka = (a) => a.join("/").replace(/\/\/+/g, "/"),
  MS = (a) => a.replace(/\/+$/, "").replace(/^\/*/, "/"),
  NS = (a) => (!a || a === "?" ? "" : a.startsWith("?") ? a : "?" + a),
  zS = (a) => (!a || a === "#" ? "" : a.startsWith("#") ? a : "#" + a);
function US(a) {
  return (
    a != null &&
    typeof a.status == "number" &&
    typeof a.statusText == "string" &&
    typeof a.internal == "boolean" &&
    "data" in a
  );
}
var eb = ["POST", "PUT", "PATCH", "DELETE"];
new Set(eb);
var kS = ["GET", ...eb];
new Set(kS);
var Ys = N.createContext(null);
Ys.displayName = "DataRouter";
var pc = N.createContext(null);
pc.displayName = "DataRouterState";
var tb = N.createContext({ isTransitioning: !1 });
tb.displayName = "ViewTransition";
var jS = N.createContext(new Map());
jS.displayName = "Fetchers";
var LS = N.createContext(null);
LS.displayName = "Await";
var Sa = N.createContext(null);
Sa.displayName = "Navigation";
var wu = N.createContext(null);
wu.displayName = "Location";
var _a = N.createContext({ outlet: null, matches: [], isDataRoute: !1 });
_a.displayName = "Route";
var zh = N.createContext(null);
zh.displayName = "RouteError";
function BS(a, { relative: n } = {}) {
  yt(
    Eu(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: i, navigator: s } = N.useContext(Sa),
    { hash: u, pathname: c, search: d } = Tu(a, { relative: n }),
    h = c;
  return (
    i !== "/" && (h = c === "/" ? i : Ka([i, c])),
    s.createHref({ pathname: h, search: d, hash: u })
  );
}
function Eu() {
  return N.useContext(wu) != null;
}
function Ci() {
  return (
    yt(
      Eu(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    N.useContext(wu).location
  );
}
var nb =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ab(a) {
  N.useContext(Sa).static || N.useLayoutEffect(a);
}
function yc() {
  let { isDataRoute: a } = N.useContext(_a);
  return a ? IS() : HS();
}
function HS() {
  yt(
    Eu(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let a = N.useContext(Ys),
    { basename: n, navigator: i } = N.useContext(Sa),
    { matches: s } = N.useContext(_a),
    { pathname: u } = Ci(),
    c = JSON.stringify(Wv(s)),
    d = N.useRef(!1);
  return (
    ab(() => {
      d.current = !0;
    }),
    N.useCallback(
      (p, m = {}) => {
        if ((va(d.current, nb), !d.current)) return;
        if (typeof p == "number") {
          i.go(p);
          return;
        }
        let g = Iv(p, JSON.parse(c), u, m.relative === "path");
        a == null &&
          n !== "/" &&
          (g.pathname = g.pathname === "/" ? n : Ka([n, g.pathname])),
          (m.replace ? i.replace : i.push)(g, m.state, m);
      },
      [n, i, c, u, a],
    )
  );
}
var VS = N.createContext(null);
function qS(a) {
  let n = N.useContext(_a).outlet;
  return n && N.createElement(VS.Provider, { value: a }, n);
}
function Tu(a, { relative: n } = {}) {
  let { matches: i } = N.useContext(_a),
    { pathname: s } = Ci(),
    u = JSON.stringify(Wv(i));
  return N.useMemo(() => Iv(a, JSON.parse(u), s, n === "path"), [a, u, s, n]);
}
function ZS(a, n) {
  return rb(a, n);
}
function rb(a, n, i, s) {
  var L;
  yt(
    Eu(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: u, static: c } = N.useContext(Sa),
    { matches: d } = N.useContext(_a),
    h = d[d.length - 1],
    p = h ? h.params : {},
    m = h ? h.pathname : "/",
    g = h ? h.pathnameBase : "/",
    x = h && h.route;
  {
    let V = (x && x.path) || "";
    ib(
      m,
      !x || V.endsWith("*") || V.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V === "/" ? "*" : `${V}/*`}">.`,
    );
  }
  let A = Ci(),
    b;
  if (n) {
    let V = typeof n == "string" ? Zs(n) : n;
    yt(
      g === "/" || ((L = V.pathname) == null ? void 0 : L.startsWith(g)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${V.pathname}" was given in the \`location\` prop.`,
    ),
      (b = V);
  } else b = A;
  let T = b.pathname || "/",
    O = T;
  if (g !== "/") {
    let V = g.replace(/^\//, "").split("/");
    O = "/" + T.replace(/^\//, "").split("/").slice(V.length).join("/");
  }
  let R =
    !c && i && i.matches && i.matches.length > 0
      ? i.matches
      : $v(a, { pathname: O });
  va(
    x || R != null,
    `No routes matched location "${b.pathname}${b.search}${b.hash}" `,
  ),
    va(
      R == null ||
        R[R.length - 1].route.element !== void 0 ||
        R[R.length - 1].route.Component !== void 0 ||
        R[R.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    );
  let j = XS(
    R &&
      R.map((V) =>
        Object.assign({}, V, {
          params: Object.assign({}, p, V.params),
          pathname: Ka([
            g,
            u.encodeLocation
              ? u.encodeLocation(V.pathname).pathname
              : V.pathname,
          ]),
          pathnameBase:
            V.pathnameBase === "/"
              ? g
              : Ka([
                  g,
                  u.encodeLocation
                    ? u.encodeLocation(V.pathnameBase).pathname
                    : V.pathnameBase,
                ]),
        }),
      ),
    d,
    i,
    s,
  );
  return n && j
    ? N.createElement(
        wu.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...b,
            },
            navigationType: "POP",
          },
        },
        j,
      )
    : j;
}
function YS() {
  let a = WS(),
    n = US(a)
      ? `${a.status} ${a.statusText}`
      : a instanceof Error
        ? a.message
        : JSON.stringify(a),
    i = a instanceof Error ? a.stack : null,
    s = "rgba(200,200,200, 0.5)",
    u = { padding: "0.5rem", backgroundColor: s },
    c = { padding: "2px 4px", backgroundColor: s },
    d = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", a),
    (d = N.createElement(
      N.Fragment,
      null,
      N.createElement("p", null, "💿 Hey developer 👋"),
      N.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        N.createElement("code", { style: c }, "ErrorBoundary"),
        " or",
        " ",
        N.createElement("code", { style: c }, "errorElement"),
        " prop on your route.",
      ),
    )),
    N.createElement(
      N.Fragment,
      null,
      N.createElement("h2", null, "Unexpected Application Error!"),
      N.createElement("h3", { style: { fontStyle: "italic" } }, n),
      i ? N.createElement("pre", { style: u }, i) : null,
      d,
    )
  );
}
var QS = N.createElement(YS, null),
  GS = class extends N.Component {
    constructor(a) {
      super(a),
        (this.state = {
          location: a.location,
          revalidation: a.revalidation,
          error: a.error,
        });
    }
    static getDerivedStateFromError(a) {
      return { error: a };
    }
    static getDerivedStateFromProps(a, n) {
      return n.location !== a.location ||
        (n.revalidation !== "idle" && a.revalidation === "idle")
        ? { error: a.error, location: a.location, revalidation: a.revalidation }
        : {
            error: a.error !== void 0 ? a.error : n.error,
            location: n.location,
            revalidation: a.revalidation || n.revalidation,
          };
    }
    componentDidCatch(a, n) {
      console.error(
        "React Router caught the following error during render",
        a,
        n,
      );
    }
    render() {
      return this.state.error !== void 0
        ? N.createElement(
            _a.Provider,
            { value: this.props.routeContext },
            N.createElement(zh.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function FS({ routeContext: a, match: n, children: i }) {
  let s = N.useContext(Ys);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    N.createElement(_a.Provider, { value: a }, i)
  );
}
function XS(a, n = [], i = null, s = null) {
  if (a == null) {
    if (!i) return null;
    if (i.errors) a = i.matches;
    else if (n.length === 0 && !i.initialized && i.matches.length > 0)
      a = i.matches;
    else return null;
  }
  let u = a,
    c = i == null ? void 0 : i.errors;
  if (c != null) {
    let p = u.findIndex(
      (m) => m.route.id && (c == null ? void 0 : c[m.route.id]) !== void 0,
    );
    yt(
      p >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`,
    ),
      (u = u.slice(0, Math.min(u.length, p + 1)));
  }
  let d = !1,
    h = -1;
  if (i)
    for (let p = 0; p < u.length; p++) {
      let m = u[p];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (h = p),
        m.route.id)
      ) {
        let { loaderData: g, errors: x } = i,
          A =
            m.route.loader &&
            !g.hasOwnProperty(m.route.id) &&
            (!x || x[m.route.id] === void 0);
        if (m.route.lazy || A) {
          (d = !0), h >= 0 ? (u = u.slice(0, h + 1)) : (u = [u[0]]);
          break;
        }
      }
    }
  return u.reduceRight((p, m, g) => {
    let x,
      A = !1,
      b = null,
      T = null;
    i &&
      ((x = c && m.route.id ? c[m.route.id] : void 0),
      (b = m.route.errorElement || QS),
      d &&
        (h < 0 && g === 0
          ? (ib(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (A = !0),
            (T = null))
          : h === g &&
            ((A = !0), (T = m.route.hydrateFallbackElement || null))));
    let O = n.concat(u.slice(0, g + 1)),
      R = () => {
        let j;
        return (
          x
            ? (j = b)
            : A
              ? (j = T)
              : m.route.Component
                ? (j = N.createElement(m.route.Component, null))
                : m.route.element
                  ? (j = m.route.element)
                  : (j = p),
          N.createElement(FS, {
            match: m,
            routeContext: { outlet: p, matches: O, isDataRoute: i != null },
            children: j,
          })
        );
      };
    return i && (m.route.ErrorBoundary || m.route.errorElement || g === 0)
      ? N.createElement(GS, {
          location: i.location,
          revalidation: i.revalidation,
          component: b,
          error: x,
          children: R(),
          routeContext: { outlet: null, matches: O, isDataRoute: !0 },
        })
      : R();
  }, null);
}
function Uh(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function KS(a) {
  let n = N.useContext(Ys);
  return yt(n, Uh(a)), n;
}
function $S(a) {
  let n = N.useContext(pc);
  return yt(n, Uh(a)), n;
}
function JS(a) {
  let n = N.useContext(_a);
  return yt(n, Uh(a)), n;
}
function kh(a) {
  let n = JS(a),
    i = n.matches[n.matches.length - 1];
  return (
    yt(
      i.route.id,
      `${a} can only be used on routes that contain a unique "id"`,
    ),
    i.route.id
  );
}
function PS() {
  return kh("useRouteId");
}
function WS() {
  var s;
  let a = N.useContext(zh),
    n = $S("useRouteError"),
    i = kh("useRouteError");
  return a !== void 0 ? a : (s = n.errors) == null ? void 0 : s[i];
}
function IS() {
  let { router: a } = KS("useNavigate"),
    n = kh("useNavigate"),
    i = N.useRef(!1);
  return (
    ab(() => {
      i.current = !0;
    }),
    N.useCallback(
      async (u, c = {}) => {
        va(i.current, nb),
          i.current &&
            (typeof u == "number"
              ? a.navigate(u)
              : await a.navigate(u, { fromRouteId: n, ...c }));
      },
      [a, n],
    )
  );
}
var Fg = {};
function ib(a, n, i) {
  !n && !Fg[a] && ((Fg[a] = !0), va(!1, i));
}
N.memo(e_);
function e_({ routes: a, future: n, state: i }) {
  return rb(a, void 0, i, n);
}
function sb(a) {
  return qS(a.context);
}
function Jl(a) {
  yt(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function t_({
  basename: a = "/",
  children: n = null,
  location: i,
  navigationType: s = "POP",
  navigator: u,
  static: c = !1,
}) {
  yt(
    !Eu(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let d = a.replace(/^\/*/, "/"),
    h = N.useMemo(
      () => ({ basename: d, navigator: u, static: c, future: {} }),
      [d, u, c],
    );
  typeof i == "string" && (i = Zs(i));
  let {
      pathname: p = "/",
      search: m = "",
      hash: g = "",
      state: x = null,
      key: A = "default",
    } = i,
    b = N.useMemo(() => {
      let T = Nr(p, d);
      return T == null
        ? null
        : {
            location: { pathname: T, search: m, hash: g, state: x, key: A },
            navigationType: s,
          };
    }, [d, p, m, g, x, A, s]);
  return (
    va(
      b != null,
      `<Router basename="${d}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    b == null
      ? null
      : N.createElement(
          Sa.Provider,
          { value: h },
          N.createElement(wu.Provider, { children: n, value: b }),
        )
  );
}
function n_({ children: a, location: n }) {
  return ZS(th(a), n);
}
function th(a, n = []) {
  let i = [];
  return (
    N.Children.forEach(a, (s, u) => {
      if (!N.isValidElement(s)) return;
      let c = [...n, u];
      if (s.type === N.Fragment) {
        i.push.apply(i, th(s.props.children, c));
        return;
      }
      yt(
        s.type === Jl,
        `[${typeof s.type == "string" ? s.type : s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        yt(
          !s.props.index || !s.props.children,
          "An index route cannot have child routes.",
        );
      let d = {
        id: s.props.id || c.join("-"),
        caseSensitive: s.props.caseSensitive,
        element: s.props.element,
        Component: s.props.Component,
        index: s.props.index,
        path: s.props.path,
        loader: s.props.loader,
        action: s.props.action,
        hydrateFallbackElement: s.props.hydrateFallbackElement,
        HydrateFallback: s.props.HydrateFallback,
        errorElement: s.props.errorElement,
        ErrorBoundary: s.props.ErrorBoundary,
        hasErrorBoundary:
          s.props.hasErrorBoundary === !0 ||
          s.props.ErrorBoundary != null ||
          s.props.errorElement != null,
        shouldRevalidate: s.props.shouldRevalidate,
        handle: s.props.handle,
        lazy: s.props.lazy,
      };
      s.props.children && (d.children = th(s.props.children, c)), i.push(d);
    }),
    i
  );
}
var Go = "get",
  Fo = "application/x-www-form-urlencoded";
function gc(a) {
  return a != null && typeof a.tagName == "string";
}
function a_(a) {
  return gc(a) && a.tagName.toLowerCase() === "button";
}
function r_(a) {
  return gc(a) && a.tagName.toLowerCase() === "form";
}
function i_(a) {
  return gc(a) && a.tagName.toLowerCase() === "input";
}
function s_(a) {
  return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
}
function l_(a, n) {
  return a.button === 0 && (!n || n === "_self") && !s_(a);
}
var qo = null;
function u_() {
  if (qo === null)
    try {
      new FormData(document.createElement("form"), 0), (qo = !1);
    } catch {
      qo = !0;
    }
  return qo;
}
var o_ = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Yd(a) {
  return a != null && !o_.has(a)
    ? (va(
        !1,
        `"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fo}"`,
      ),
      null)
    : a;
}
function c_(a, n) {
  let i, s, u, c, d;
  if (r_(a)) {
    let h = a.getAttribute("action");
    (s = h ? Nr(h, n) : null),
      (i = a.getAttribute("method") || Go),
      (u = Yd(a.getAttribute("enctype")) || Fo),
      (c = new FormData(a));
  } else if (a_(a) || (i_(a) && (a.type === "submit" || a.type === "image"))) {
    let h = a.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let p = a.getAttribute("formaction") || h.getAttribute("action");
    if (
      ((s = p ? Nr(p, n) : null),
      (i = a.getAttribute("formmethod") || h.getAttribute("method") || Go),
      (u =
        Yd(a.getAttribute("formenctype")) ||
        Yd(h.getAttribute("enctype")) ||
        Fo),
      (c = new FormData(h, a)),
      !u_())
    ) {
      let { name: m, type: g, value: x } = a;
      if (g === "image") {
        let A = m ? `${m}.` : "";
        c.append(`${A}x`, "0"), c.append(`${A}y`, "0");
      } else m && c.append(m, x);
    }
  } else {
    if (gc(a))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    (i = Go), (s = null), (u = Fo), (d = a);
  }
  return (
    c && u === "text/plain" && ((d = c), (c = void 0)),
    { action: s, method: i.toLowerCase(), encType: u, formData: c, body: d }
  );
}
function jh(a, n) {
  if (a === !1 || a === null || typeof a > "u") throw new Error(n);
}
async function f_(a, n) {
  if (a.id in n) return n[a.id];
  try {
    let i = await import(a.module);
    return (n[a.id] = i), i;
  } catch (i) {
    return (
      console.error(
        `Error loading route module \`${a.module}\`, reloading page...`,
      ),
      console.error(i),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function d_(a) {
  return a == null
    ? !1
    : a.href == null
      ? a.rel === "preload" &&
        typeof a.imageSrcSet == "string" &&
        typeof a.imageSizes == "string"
      : typeof a.rel == "string" && typeof a.href == "string";
}
async function h_(a, n, i) {
  let s = await Promise.all(
    a.map(async (u) => {
      let c = n.routes[u.route.id];
      if (c) {
        let d = await f_(c, i);
        return d.links ? d.links() : [];
      }
      return [];
    }),
  );
  return g_(
    s
      .flat(1)
      .filter(d_)
      .filter((u) => u.rel === "stylesheet" || u.rel === "preload")
      .map((u) =>
        u.rel === "stylesheet"
          ? { ...u, rel: "prefetch", as: "style" }
          : { ...u, rel: "prefetch" },
      ),
  );
}
function Xg(a, n, i, s, u, c) {
  let d = (p, m) => (i[m] ? p.route.id !== i[m].route.id : !0),
    h = (p, m) => {
      var g;
      return (
        i[m].pathname !== p.pathname ||
        (((g = i[m].route.path) == null ? void 0 : g.endsWith("*")) &&
          i[m].params["*"] !== p.params["*"])
      );
    };
  return c === "assets"
    ? n.filter((p, m) => d(p, m) || h(p, m))
    : c === "data"
      ? n.filter((p, m) => {
          var x;
          let g = s.routes[p.route.id];
          if (!g || !g.hasLoader) return !1;
          if (d(p, m) || h(p, m)) return !0;
          if (p.route.shouldRevalidate) {
            let A = p.route.shouldRevalidate({
              currentUrl: new URL(
                u.pathname + u.search + u.hash,
                window.origin,
              ),
              currentParams: ((x = i[0]) == null ? void 0 : x.params) || {},
              nextUrl: new URL(a, window.origin),
              nextParams: p.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof A == "boolean") return A;
          }
          return !0;
        })
      : [];
}
function m_(a, n) {
  return p_(
    a
      .map((i) => {
        let s = n.routes[i.route.id];
        if (!s) return [];
        let u = [s.module];
        return s.imports && (u = u.concat(s.imports)), u;
      })
      .flat(1),
  );
}
function p_(a) {
  return [...new Set(a)];
}
function y_(a) {
  let n = {},
    i = Object.keys(a).sort();
  for (let s of i) n[s] = a[s];
  return n;
}
function g_(a, n) {
  let i = new Set();
  return (
    new Set(n),
    a.reduce((s, u) => {
      let c = JSON.stringify(y_(u));
      return i.has(c) || (i.add(c), s.push({ key: c, link: u })), s;
    }, [])
  );
}
function v_(a) {
  let n =
    typeof a == "string"
      ? new URL(
          a,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : a;
  return (
    n.pathname === "/"
      ? (n.pathname = "_root.data")
      : (n.pathname = `${n.pathname.replace(/\/$/, "")}.data`),
    n
  );
}
function b_() {
  let a = N.useContext(Ys);
  return (
    jh(
      a,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    a
  );
}
function x_() {
  let a = N.useContext(pc);
  return (
    jh(
      a,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    a
  );
}
var Lh = N.createContext(void 0);
Lh.displayName = "FrameworkContext";
function lb() {
  let a = N.useContext(Lh);
  return (
    jh(a, "You must render this element inside a <HydratedRouter> element"), a
  );
}
function S_(a, n) {
  let i = N.useContext(Lh),
    [s, u] = N.useState(!1),
    [c, d] = N.useState(!1),
    {
      onFocus: h,
      onBlur: p,
      onMouseEnter: m,
      onMouseLeave: g,
      onTouchStart: x,
    } = n,
    A = N.useRef(null);
  N.useEffect(() => {
    if ((a === "render" && d(!0), a === "viewport")) {
      let O = (j) => {
          j.forEach((L) => {
            d(L.isIntersecting);
          });
        },
        R = new IntersectionObserver(O, { threshold: 0.5 });
      return (
        A.current && R.observe(A.current),
        () => {
          R.disconnect();
        }
      );
    }
  }, [a]),
    N.useEffect(() => {
      if (s) {
        let O = setTimeout(() => {
          d(!0);
        }, 100);
        return () => {
          clearTimeout(O);
        };
      }
    }, [s]);
  let b = () => {
      u(!0);
    },
    T = () => {
      u(!1), d(!1);
    };
  return i
    ? a !== "intent"
      ? [c, A, {}]
      : [
          c,
          A,
          {
            onFocus: Fl(h, b),
            onBlur: Fl(p, T),
            onMouseEnter: Fl(m, b),
            onMouseLeave: Fl(g, T),
            onTouchStart: Fl(x, b),
          },
        ]
    : [!1, A, {}];
}
function Fl(a, n) {
  return (i) => {
    a && a(i), i.defaultPrevented || n(i);
  };
}
function __({ page: a, ...n }) {
  let { router: i } = b_(),
    s = N.useMemo(() => $v(i.routes, a, i.basename), [i.routes, a, i.basename]);
  return s ? N.createElement(E_, { page: a, matches: s, ...n }) : null;
}
function w_(a) {
  let { manifest: n, routeModules: i } = lb(),
    [s, u] = N.useState([]);
  return (
    N.useEffect(() => {
      let c = !1;
      return (
        h_(a, n, i).then((d) => {
          c || u(d);
        }),
        () => {
          c = !0;
        }
      );
    }, [a, n, i]),
    s
  );
}
function E_({ page: a, matches: n, ...i }) {
  let s = Ci(),
    { manifest: u, routeModules: c } = lb(),
    { loaderData: d, matches: h } = x_(),
    p = N.useMemo(() => Xg(a, n, h, u, s, "data"), [a, n, h, u, s]),
    m = N.useMemo(() => Xg(a, n, h, u, s, "assets"), [a, n, h, u, s]),
    g = N.useMemo(() => {
      if (a === s.pathname + s.search + s.hash) return [];
      let b = new Set(),
        T = !1;
      if (
        (n.forEach((R) => {
          var L;
          let j = u.routes[R.route.id];
          !j ||
            !j.hasLoader ||
            ((!p.some((V) => V.route.id === R.route.id) &&
              R.route.id in d &&
              (L = c[R.route.id]) != null &&
              L.shouldRevalidate) ||
            j.hasClientLoader
              ? (T = !0)
              : b.add(R.route.id));
        }),
        b.size === 0)
      )
        return [];
      let O = v_(a);
      return (
        T &&
          b.size > 0 &&
          O.searchParams.set(
            "_routes",
            n
              .filter((R) => b.has(R.route.id))
              .map((R) => R.route.id)
              .join(","),
          ),
        [O.pathname + O.search]
      );
    }, [d, s, u, p, n, a, c]),
    x = N.useMemo(() => m_(m, u), [m, u]),
    A = w_(m);
  return N.createElement(
    N.Fragment,
    null,
    g.map((b) =>
      N.createElement("link", {
        key: b,
        rel: "prefetch",
        as: "fetch",
        href: b,
        ...i,
      }),
    ),
    x.map((b) =>
      N.createElement("link", { key: b, rel: "modulepreload", href: b, ...i }),
    ),
    A.map(({ key: b, link: T }) => N.createElement("link", { key: b, ...T })),
  );
}
function T_(...a) {
  return (n) => {
    a.forEach((i) => {
      typeof i == "function" ? i(n) : i != null && (i.current = n);
    });
  };
}
var ub =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  ub && (window.__reactRouterVersion = "7.1.5");
} catch {}
function R_({ basename: a, children: n, window: i }) {
  let s = N.useRef();
  s.current == null && (s.current = dS({ window: i, v5Compat: !0 }));
  let u = s.current,
    [c, d] = N.useState({ action: u.action, location: u.location }),
    h = N.useCallback(
      (p) => {
        N.startTransition(() => d(p));
      },
      [d],
    );
  return (
    N.useLayoutEffect(() => u.listen(h), [u, h]),
    N.createElement(t_, {
      basename: a,
      children: n,
      location: c.location,
      navigationType: c.action,
      navigator: u,
    })
  );
}
var ob = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  cb = N.forwardRef(function (
    {
      onClick: n,
      discover: i = "render",
      prefetch: s = "none",
      relative: u,
      reloadDocument: c,
      replace: d,
      state: h,
      target: p,
      to: m,
      preventScrollReset: g,
      viewTransition: x,
      ...A
    },
    b,
  ) {
    let { basename: T } = N.useContext(Sa),
      O = typeof m == "string" && ob.test(m),
      R,
      j = !1;
    if (typeof m == "string" && O && ((R = m), ub))
      try {
        let F = new URL(window.location.href),
          pe = m.startsWith("//") ? new URL(F.protocol + m) : new URL(m),
          Fe = Nr(pe.pathname, T);
        pe.origin === F.origin && Fe != null
          ? (m = Fe + pe.search + pe.hash)
          : (j = !0);
      } catch {
        va(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let L = BS(m, { relative: u }),
      [V, se, G] = S_(s, A),
      le = D_(m, {
        replace: d,
        state: h,
        target: p,
        preventScrollReset: g,
        relative: u,
        viewTransition: x,
      });
    function we(F) {
      n && n(F), F.defaultPrevented || le(F);
    }
    let Se = N.createElement("a", {
      ...A,
      ...G,
      href: R || L,
      onClick: j || c ? n : we,
      ref: T_(b, se),
      target: p,
      "data-discover": !O && i === "render" ? "true" : void 0,
    });
    return V && !O
      ? N.createElement(N.Fragment, null, Se, N.createElement(__, { page: L }))
      : Se;
  });
cb.displayName = "Link";
var A_ = N.forwardRef(function (
  {
    "aria-current": n = "page",
    caseSensitive: i = !1,
    className: s = "",
    end: u = !1,
    style: c,
    to: d,
    viewTransition: h,
    children: p,
    ...m
  },
  g,
) {
  let x = Tu(d, { relative: m.relative }),
    A = Ci(),
    b = N.useContext(pc),
    { navigator: T, basename: O } = N.useContext(Sa),
    R = b != null && k_(x) && h === !0,
    j = T.encodeLocation ? T.encodeLocation(x).pathname : x.pathname,
    L = A.pathname,
    V =
      b && b.navigation && b.navigation.location
        ? b.navigation.location.pathname
        : null;
  i ||
    ((L = L.toLowerCase()),
    (V = V ? V.toLowerCase() : null),
    (j = j.toLowerCase())),
    V && O && (V = Nr(V, O) || V);
  const se = j !== "/" && j.endsWith("/") ? j.length - 1 : j.length;
  let G = L === j || (!u && L.startsWith(j) && L.charAt(se) === "/"),
    le =
      V != null &&
      (V === j || (!u && V.startsWith(j) && V.charAt(j.length) === "/")),
    we = { isActive: G, isPending: le, isTransitioning: R },
    Se = G ? n : void 0,
    F;
  typeof s == "function"
    ? (F = s(we))
    : (F = [
        s,
        G ? "active" : null,
        le ? "pending" : null,
        R ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let pe = typeof c == "function" ? c(we) : c;
  return N.createElement(
    cb,
    {
      ...m,
      "aria-current": Se,
      className: F,
      ref: g,
      style: pe,
      to: d,
      viewTransition: h,
    },
    typeof p == "function" ? p(we) : p,
  );
});
A_.displayName = "NavLink";
var O_ = N.forwardRef(
  (
    {
      discover: a = "render",
      fetcherKey: n,
      navigate: i,
      reloadDocument: s,
      replace: u,
      state: c,
      method: d = Go,
      action: h,
      onSubmit: p,
      relative: m,
      preventScrollReset: g,
      viewTransition: x,
      ...A
    },
    b,
  ) => {
    let T = z_(),
      O = U_(h, { relative: m }),
      R = d.toLowerCase() === "get" ? "get" : "post",
      j = typeof h == "string" && ob.test(h),
      L = (V) => {
        if ((p && p(V), V.defaultPrevented)) return;
        V.preventDefault();
        let se = V.nativeEvent.submitter,
          G = (se == null ? void 0 : se.getAttribute("formmethod")) || d;
        T(se || V.currentTarget, {
          fetcherKey: n,
          method: G,
          navigate: i,
          replace: u,
          state: c,
          relative: m,
          preventScrollReset: g,
          viewTransition: x,
        });
      };
    return N.createElement("form", {
      ref: b,
      method: R,
      action: O,
      onSubmit: s ? p : L,
      ...A,
      "data-discover": !j && a === "render" ? "true" : void 0,
    });
  },
);
O_.displayName = "Form";
function C_(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function fb(a) {
  let n = N.useContext(Ys);
  return yt(n, C_(a)), n;
}
function D_(
  a,
  {
    target: n,
    replace: i,
    state: s,
    preventScrollReset: u,
    relative: c,
    viewTransition: d,
  } = {},
) {
  let h = yc(),
    p = Ci(),
    m = Tu(a, { relative: c });
  return N.useCallback(
    (g) => {
      if (l_(g, n)) {
        g.preventDefault();
        let x = i !== void 0 ? i : au(p) === au(m);
        h(a, {
          replace: x,
          state: s,
          preventScrollReset: u,
          relative: c,
          viewTransition: d,
        });
      }
    },
    [p, h, m, i, s, n, a, u, c, d],
  );
}
var M_ = 0,
  N_ = () => `__${String(++M_)}__`;
function z_() {
  let { router: a } = fb("useSubmit"),
    { basename: n } = N.useContext(Sa),
    i = PS();
  return N.useCallback(
    async (s, u = {}) => {
      let { action: c, method: d, encType: h, formData: p, body: m } = c_(s, n);
      if (u.navigate === !1) {
        let g = u.fetcherKey || N_();
        await a.fetch(g, i, u.action || c, {
          preventScrollReset: u.preventScrollReset,
          formData: p,
          body: m,
          formMethod: u.method || d,
          formEncType: u.encType || h,
          flushSync: u.flushSync,
        });
      } else
        await a.navigate(u.action || c, {
          preventScrollReset: u.preventScrollReset,
          formData: p,
          body: m,
          formMethod: u.method || d,
          formEncType: u.encType || h,
          replace: u.replace,
          state: u.state,
          fromRouteId: i,
          flushSync: u.flushSync,
          viewTransition: u.viewTransition,
        });
    },
    [a, n, i],
  );
}
function U_(a, { relative: n } = {}) {
  let { basename: i } = N.useContext(Sa),
    s = N.useContext(_a);
  yt(s, "useFormAction must be used inside a RouteContext");
  let [u] = s.matches.slice(-1),
    c = { ...Tu(a || ".", { relative: n }) },
    d = Ci();
  if (a == null) {
    c.search = d.search;
    let h = new URLSearchParams(c.search),
      p = h.getAll("index");
    if (p.some((g) => g === "")) {
      h.delete("index"),
        p.filter((x) => x).forEach((x) => h.append("index", x));
      let g = h.toString();
      c.search = g ? `?${g}` : "";
    }
  }
  return (
    (!a || a === ".") &&
      u.route.index &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    i !== "/" && (c.pathname = c.pathname === "/" ? i : Ka([i, c.pathname])),
    au(c)
  );
}
function k_(a, n = {}) {
  let i = N.useContext(tb);
  yt(
    i != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: s } = fb("useViewTransitionState"),
    u = Tu(a, { relative: n.relative });
  if (!i.isTransitioning) return !1;
  let c = Nr(i.currentLocation.pathname, s) || i.currentLocation.pathname,
    d = Nr(i.nextLocation.pathname, s) || i.nextLocation.pathname;
  return Wo(u.pathname, d) != null || Wo(u.pathname, c) != null;
}
new TextEncoder();
const j_ = ({ title: a }) =>
  I.jsx("div", {
    className: "text-3xl font-bold text-gray-800",
    children: I.jsx("h2", { children: a }),
  });
function Kg(a, n) {
  if (typeof a == "function") return a(n);
  a != null && (a.current = n);
}
function L_(...a) {
  return (n) => {
    let i = !1;
    const s = a.map((u) => {
      const c = Kg(u, n);
      return !i && typeof c == "function" && (i = !0), c;
    });
    if (i)
      return () => {
        for (let u = 0; u < s.length; u++) {
          const c = s[u];
          typeof c == "function" ? c() : Kg(a[u], null);
        }
      };
  };
}
var vc = N.forwardRef((a, n) => {
  const { children: i, ...s } = a,
    u = N.Children.toArray(i),
    c = u.find(H_);
  if (c) {
    const d = c.props.children,
      h = u.map((p) =>
        p === c
          ? N.Children.count(d) > 1
            ? N.Children.only(null)
            : N.isValidElement(d)
              ? d.props.children
              : null
          : p,
      );
    return I.jsx(nh, {
      ...s,
      ref: n,
      children: N.isValidElement(d) ? N.cloneElement(d, void 0, h) : null,
    });
  }
  return I.jsx(nh, { ...s, ref: n, children: i });
});
vc.displayName = "Slot";
var nh = N.forwardRef((a, n) => {
  const { children: i, ...s } = a;
  if (N.isValidElement(i)) {
    const u = q_(i),
      c = V_(s, i.props);
    return (
      i.type !== N.Fragment && (c.ref = n ? L_(n, u) : u), N.cloneElement(i, c)
    );
  }
  return N.Children.count(i) > 1 ? N.Children.only(null) : null;
});
nh.displayName = "SlotClone";
var B_ = ({ children: a }) => I.jsx(I.Fragment, { children: a });
function H_(a) {
  return N.isValidElement(a) && a.type === B_;
}
function V_(a, n) {
  const i = { ...n };
  for (const s in n) {
    const u = a[s],
      c = n[s];
    /^on[A-Z]/.test(s)
      ? u && c
        ? (i[s] = (...h) => {
            c(...h), u(...h);
          })
        : u && (i[s] = u)
      : s === "style"
        ? (i[s] = { ...u, ...c })
        : s === "className" && (i[s] = [u, c].filter(Boolean).join(" "));
  }
  return { ...a, ...i };
}
function q_(a) {
  var s, u;
  let n =
      (s = Object.getOwnPropertyDescriptor(a.props, "ref")) == null
        ? void 0
        : s.get,
    i = n && "isReactWarning" in n && n.isReactWarning;
  return i
    ? a.ref
    : ((n =
        (u = Object.getOwnPropertyDescriptor(a, "ref")) == null
          ? void 0
          : u.get),
      (i = n && "isReactWarning" in n && n.isReactWarning),
      i ? a.props.ref : a.props.ref || a.ref);
}
var Ru = (a) => a.type === "checkbox",
  ci = (a) => a instanceof Date,
  an = (a) => a == null;
const db = (a) => typeof a == "object";
var Tt = (a) => !an(a) && !Array.isArray(a) && db(a) && !ci(a),
  hb = (a) =>
    Tt(a) && a.target ? (Ru(a.target) ? a.target.checked : a.target.value) : a,
  Z_ = (a) => a.substring(0, a.search(/\.\d+(\.|$)/)) || a,
  mb = (a, n) => a.has(Z_(n)),
  Y_ = (a) => {
    const n = a.constructor && a.constructor.prototype;
    return Tt(n) && n.hasOwnProperty("isPrototypeOf");
  },
  Bh =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function hn(a) {
  let n;
  const i = Array.isArray(a),
    s = typeof FileList < "u" ? a instanceof FileList : !1;
  if (a instanceof Date) n = new Date(a);
  else if (a instanceof Set) n = new Set(a);
  else if (!(Bh && (a instanceof Blob || s)) && (i || Tt(a)))
    if (((n = i ? [] : {}), !i && !Y_(a))) n = a;
    else for (const u in a) a.hasOwnProperty(u) && (n[u] = hn(a[u]));
  else return a;
  return n;
}
var bc = (a) => (Array.isArray(a) ? a.filter(Boolean) : []),
  Et = (a) => a === void 0,
  ie = (a, n, i) => {
    if (!n || !Tt(a)) return i;
    const s = bc(n.split(/[,[\].]+?/)).reduce((u, c) => (an(u) ? u : u[c]), a);
    return Et(s) || s === a ? (Et(a[n]) ? i : a[n]) : s;
  },
  qn = (a) => typeof a == "boolean",
  Hh = (a) => /^\w*$/.test(a),
  pb = (a) => bc(a.replace(/["|']|\]/g, "").split(/\.|\[/)),
  rt = (a, n, i) => {
    let s = -1;
    const u = Hh(n) ? [n] : pb(n),
      c = u.length,
      d = c - 1;
    for (; ++s < c; ) {
      const h = u[s];
      let p = i;
      if (s !== d) {
        const m = a[h];
        p = Tt(m) || Array.isArray(m) ? m : isNaN(+u[s + 1]) ? {} : [];
      }
      if (h === "__proto__" || h === "constructor" || h === "prototype") return;
      (a[h] = p), (a = a[h]);
    }
    return a;
  };
const Io = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  In = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  Za = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  yb = X.createContext(null),
  xc = () => X.useContext(yb),
  Q_ = (a) => {
    const { children: n, ...i } = a;
    return X.createElement(yb.Provider, { value: i }, n);
  };
var gb = (a, n, i, s = !0) => {
    const u = { defaultValues: n._defaultValues };
    for (const c in a)
      Object.defineProperty(u, c, {
        get: () => {
          const d = c;
          return (
            n._proxyFormState[d] !== In.all &&
              (n._proxyFormState[d] = !s || In.all),
            i && (i[d] = !0),
            a[d]
          );
        },
      });
    return u;
  },
  yn = (a) => Tt(a) && !Object.keys(a).length,
  vb = (a, n, i, s) => {
    i(a);
    const { name: u, ...c } = a;
    return (
      yn(c) ||
      Object.keys(c).length >= Object.keys(n).length ||
      Object.keys(c).find((d) => n[d] === (!s || In.all))
    );
  },
  eu = (a) => (Array.isArray(a) ? a : [a]),
  bb = (a, n, i) =>
    !a ||
    !n ||
    a === n ||
    eu(a).some((s) => s && (i ? s === n : s.startsWith(n) || n.startsWith(s)));
function Vh(a) {
  const n = X.useRef(a);
  (n.current = a),
    X.useEffect(() => {
      const i =
        !a.disabled &&
        n.current.subject &&
        n.current.subject.subscribe({ next: n.current.next });
      return () => {
        i && i.unsubscribe();
      };
    }, [a.disabled]);
}
function xb(a) {
  const n = xc(),
    { control: i = n.control, disabled: s, name: u, exact: c } = a || {},
    [d, h] = X.useState(i._formState),
    p = X.useRef(!0),
    m = X.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    }),
    g = X.useRef(u);
  return (
    (g.current = u),
    Vh({
      disabled: s,
      next: (x) =>
        p.current &&
        bb(g.current, x.name, c) &&
        vb(x, m.current, i._updateFormState) &&
        h({ ...i._formState, ...x }),
      subject: i._subjects.state,
    }),
    X.useEffect(
      () => (
        (p.current = !0),
        m.current.isValid && i._updateValid(!0),
        () => {
          p.current = !1;
        }
      ),
      [i],
    ),
    X.useMemo(() => gb(d, i, m.current, !1), [d, i])
  );
}
var ya = (a) => typeof a == "string",
  Sb = (a, n, i, s, u) =>
    ya(a)
      ? (s && n.watch.add(a), ie(i, a, u))
      : Array.isArray(a)
        ? a.map((c) => (s && n.watch.add(c), ie(i, c)))
        : (s && (n.watchAll = !0), i);
function G_(a) {
  const n = xc(),
    {
      control: i = n.control,
      name: s,
      defaultValue: u,
      disabled: c,
      exact: d,
    } = a || {},
    h = X.useRef(s);
  (h.current = s),
    Vh({
      disabled: c,
      subject: i._subjects.values,
      next: (g) => {
        bb(h.current, g.name, d) &&
          m(hn(Sb(h.current, i._names, g.values || i._formValues, !1, u)));
      },
    });
  const [p, m] = X.useState(i._getWatch(s, u));
  return X.useEffect(() => i._removeUnmounted()), p;
}
function F_(a) {
  const n = xc(),
    { name: i, disabled: s, control: u = n.control, shouldUnregister: c } = a,
    d = mb(u._names.array, i),
    h = G_({
      control: u,
      name: i,
      defaultValue: ie(
        u._formValues,
        i,
        ie(u._defaultValues, i, a.defaultValue),
      ),
      exact: !0,
    }),
    p = xb({ control: u, name: i, exact: !0 }),
    m = X.useRef(
      u.register(i, {
        ...a.rules,
        value: h,
        ...(qn(a.disabled) ? { disabled: a.disabled } : {}),
      }),
    ),
    g = X.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!ie(p.errors, i) },
            isDirty: { enumerable: !0, get: () => !!ie(p.dirtyFields, i) },
            isTouched: { enumerable: !0, get: () => !!ie(p.touchedFields, i) },
            isValidating: {
              enumerable: !0,
              get: () => !!ie(p.validatingFields, i),
            },
            error: { enumerable: !0, get: () => ie(p.errors, i) },
          },
        ),
      [p, i],
    ),
    x = X.useMemo(
      () => ({
        name: i,
        value: h,
        ...(qn(s) || p.disabled ? { disabled: p.disabled || s } : {}),
        onChange: (A) =>
          m.current.onChange({
            target: { value: hb(A), name: i },
            type: Io.CHANGE,
          }),
        onBlur: () =>
          m.current.onBlur({
            target: { value: ie(u._formValues, i), name: i },
            type: Io.BLUR,
          }),
        ref: (A) => {
          const b = ie(u._fields, i);
          b &&
            A &&
            (b._f.ref = {
              focus: () => A.focus(),
              select: () => A.select(),
              setCustomValidity: (T) => A.setCustomValidity(T),
              reportValidity: () => A.reportValidity(),
            });
        },
      }),
      [i, u._formValues, s, p.disabled, h, u._fields],
    );
  return (
    X.useEffect(() => {
      const A = u._options.shouldUnregister || c,
        b = (T, O) => {
          const R = ie(u._fields, T);
          R && R._f && (R._f.mount = O);
        };
      if ((b(i, !0), A)) {
        const T = hn(ie(u._options.defaultValues, i));
        rt(u._defaultValues, i, T),
          Et(ie(u._formValues, i)) && rt(u._formValues, i, T);
      }
      return (
        !d && u.register(i),
        () => {
          (d ? A && !u._state.action : A) ? u.unregister(i) : b(i, !1);
        }
      );
    }, [i, u, d, c]),
    X.useEffect(() => {
      u._updateDisabledField({ disabled: s, fields: u._fields, name: i });
    }, [s, i, u]),
    X.useMemo(() => ({ field: x, formState: p, fieldState: g }), [x, p, g])
  );
}
const X_ = (a) => a.render(F_(a));
var _b = (a, n, i, s, u) =>
    n
      ? {
          ...i[a],
          types: { ...(i[a] && i[a].types ? i[a].types : {}), [s]: u || !0 },
        }
      : {},
  $g = (a) => ({
    isOnSubmit: !a || a === In.onSubmit,
    isOnBlur: a === In.onBlur,
    isOnChange: a === In.onChange,
    isOnAll: a === In.all,
    isOnTouch: a === In.onTouched,
  }),
  Jg = (a, n, i) =>
    !i &&
    (n.watchAll ||
      n.watch.has(a) ||
      [...n.watch].some(
        (s) => a.startsWith(s) && /^\.\w+/.test(a.slice(s.length)),
      ));
const tu = (a, n, i, s) => {
  for (const u of i || Object.keys(a)) {
    const c = ie(a, u);
    if (c) {
      const { _f: d, ...h } = c;
      if (d) {
        if (d.refs && d.refs[0] && n(d.refs[0], u) && !s) return !0;
        if (d.ref && n(d.ref, d.name) && !s) return !0;
        if (tu(h, n)) break;
      } else if (Tt(h) && tu(h, n)) break;
    }
  }
};
var K_ = (a, n, i) => {
    const s = eu(ie(a, i));
    return rt(s, "root", n[i]), rt(a, i, s), a;
  },
  qh = (a) => a.type === "file",
  pa = (a) => typeof a == "function",
  ec = (a) => {
    if (!Bh) return !1;
    const n = a ? a.ownerDocument : 0;
    return (
      a instanceof
      (n && n.defaultView ? n.defaultView.HTMLElement : HTMLElement)
    );
  },
  Xo = (a) => ya(a),
  Zh = (a) => a.type === "radio",
  tc = (a) => a instanceof RegExp;
const Pg = { value: !1, isValid: !1 },
  Wg = { value: !0, isValid: !0 };
var wb = (a) => {
  if (Array.isArray(a)) {
    if (a.length > 1) {
      const n = a
        .filter((i) => i && i.checked && !i.disabled)
        .map((i) => i.value);
      return { value: n, isValid: !!n.length };
    }
    return a[0].checked && !a[0].disabled
      ? a[0].attributes && !Et(a[0].attributes.value)
        ? Et(a[0].value) || a[0].value === ""
          ? Wg
          : { value: a[0].value, isValid: !0 }
        : Wg
      : Pg;
  }
  return Pg;
};
const Ig = { isValid: !1, value: null };
var Eb = (a) =>
  Array.isArray(a)
    ? a.reduce(
        (n, i) =>
          i && i.checked && !i.disabled ? { isValid: !0, value: i.value } : n,
        Ig,
      )
    : Ig;
function ev(a, n, i = "validate") {
  if (Xo(a) || (Array.isArray(a) && a.every(Xo)) || (qn(a) && !a))
    return { type: i, message: Xo(a) ? a : "", ref: n };
}
var ps = (a) => (Tt(a) && !tc(a) ? a : { value: a, message: "" }),
  tv = async (a, n, i, s, u, c) => {
    const {
        ref: d,
        refs: h,
        required: p,
        maxLength: m,
        minLength: g,
        min: x,
        max: A,
        pattern: b,
        validate: T,
        name: O,
        valueAsNumber: R,
        mount: j,
      } = a._f,
      L = ie(i, O);
    if (!j || n.has(O)) return {};
    const V = h ? h[0] : d,
      se = (ye) => {
        u &&
          V.reportValidity &&
          (V.setCustomValidity(qn(ye) ? "" : ye || ""), V.reportValidity());
      },
      G = {},
      le = Zh(d),
      we = Ru(d),
      Se = le || we,
      F =
        ((R || qh(d)) && Et(d.value) && Et(L)) ||
        (ec(d) && d.value === "") ||
        L === "" ||
        (Array.isArray(L) && !L.length),
      pe = _b.bind(null, O, s, G),
      Fe = (ye, Ae, be, ze = Za.maxLength, K = Za.minLength) => {
        const oe = ye ? Ae : be;
        G[O] = {
          type: ye ? ze : K,
          message: oe,
          ref: d,
          ...pe(ye ? ze : K, oe),
        };
      };
    if (
      c
        ? !Array.isArray(L) || !L.length
        : p &&
          ((!Se && (F || an(L))) ||
            (qn(L) && !L) ||
            (we && !wb(h).isValid) ||
            (le && !Eb(h).isValid))
    ) {
      const { value: ye, message: Ae } = Xo(p)
        ? { value: !!p, message: p }
        : ps(p);
      if (
        ye &&
        ((G[O] = {
          type: Za.required,
          message: Ae,
          ref: V,
          ...pe(Za.required, Ae),
        }),
        !s)
      )
        return se(Ae), G;
    }
    if (!F && (!an(x) || !an(A))) {
      let ye, Ae;
      const be = ps(A),
        ze = ps(x);
      if (!an(L) && !isNaN(L)) {
        const K = d.valueAsNumber || (L && +L);
        an(be.value) || (ye = K > be.value),
          an(ze.value) || (Ae = K < ze.value);
      } else {
        const K = d.valueAsDate || new Date(L),
          oe = (_) => new Date(new Date().toDateString() + " " + _),
          ee = d.type == "time",
          ce = d.type == "week";
        ya(be.value) &&
          L &&
          (ye = ee
            ? oe(L) > oe(be.value)
            : ce
              ? L > be.value
              : K > new Date(be.value)),
          ya(ze.value) &&
            L &&
            (Ae = ee
              ? oe(L) < oe(ze.value)
              : ce
                ? L < ze.value
                : K < new Date(ze.value));
      }
      if ((ye || Ae) && (Fe(!!ye, be.message, ze.message, Za.max, Za.min), !s))
        return se(G[O].message), G;
    }
    if ((m || g) && !F && (ya(L) || (c && Array.isArray(L)))) {
      const ye = ps(m),
        Ae = ps(g),
        be = !an(ye.value) && L.length > +ye.value,
        ze = !an(Ae.value) && L.length < +Ae.value;
      if ((be || ze) && (Fe(be, ye.message, Ae.message), !s))
        return se(G[O].message), G;
    }
    if (b && !F && ya(L)) {
      const { value: ye, message: Ae } = ps(b);
      if (
        tc(ye) &&
        !L.match(ye) &&
        ((G[O] = {
          type: Za.pattern,
          message: Ae,
          ref: d,
          ...pe(Za.pattern, Ae),
        }),
        !s)
      )
        return se(Ae), G;
    }
    if (T) {
      if (pa(T)) {
        const ye = await T(L, i),
          Ae = ev(ye, V);
        if (Ae && ((G[O] = { ...Ae, ...pe(Za.validate, Ae.message) }), !s))
          return se(Ae.message), G;
      } else if (Tt(T)) {
        let ye = {};
        for (const Ae in T) {
          if (!yn(ye) && !s) break;
          const be = ev(await T[Ae](L, i), V, Ae);
          be &&
            ((ye = { ...be, ...pe(Ae, be.message) }),
            se(be.message),
            s && (G[O] = ye));
        }
        if (!yn(ye) && ((G[O] = { ref: V, ...ye }), !s)) return G;
      }
    }
    return se(!0), G;
  };
function $_(a, n) {
  const i = n.slice(0, -1).length;
  let s = 0;
  for (; s < i; ) a = Et(a) ? s++ : a[n[s++]];
  return a;
}
function J_(a) {
  for (const n in a) if (a.hasOwnProperty(n) && !Et(a[n])) return !1;
  return !0;
}
function Nt(a, n) {
  const i = Array.isArray(n) ? n : Hh(n) ? [n] : pb(n),
    s = i.length === 1 ? a : $_(a, i),
    u = i.length - 1,
    c = i[u];
  return (
    s && delete s[c],
    u !== 0 &&
      ((Tt(s) && yn(s)) || (Array.isArray(s) && J_(s))) &&
      Nt(a, i.slice(0, -1)),
    a
  );
}
var Qd = () => {
    let a = [];
    return {
      get observers() {
        return a;
      },
      next: (u) => {
        for (const c of a) c.next && c.next(u);
      },
      subscribe: (u) => (
        a.push(u),
        {
          unsubscribe: () => {
            a = a.filter((c) => c !== u);
          },
        }
      ),
      unsubscribe: () => {
        a = [];
      },
    };
  },
  ah = (a) => an(a) || !db(a);
function _r(a, n) {
  if (ah(a) || ah(n)) return a === n;
  if (ci(a) && ci(n)) return a.getTime() === n.getTime();
  const i = Object.keys(a),
    s = Object.keys(n);
  if (i.length !== s.length) return !1;
  for (const u of i) {
    const c = a[u];
    if (!s.includes(u)) return !1;
    if (u !== "ref") {
      const d = n[u];
      if (
        (ci(c) && ci(d)) ||
        (Tt(c) && Tt(d)) ||
        (Array.isArray(c) && Array.isArray(d))
          ? !_r(c, d)
          : c !== d
      )
        return !1;
    }
  }
  return !0;
}
var Tb = (a) => a.type === "select-multiple",
  P_ = (a) => Zh(a) || Ru(a),
  Gd = (a) => ec(a) && a.isConnected,
  Rb = (a) => {
    for (const n in a) if (pa(a[n])) return !0;
    return !1;
  };
function nc(a, n = {}) {
  const i = Array.isArray(a);
  if (Tt(a) || i)
    for (const s in a)
      Array.isArray(a[s]) || (Tt(a[s]) && !Rb(a[s]))
        ? ((n[s] = Array.isArray(a[s]) ? [] : {}), nc(a[s], n[s]))
        : an(a[s]) || (n[s] = !0);
  return n;
}
function Ab(a, n, i) {
  const s = Array.isArray(a);
  if (Tt(a) || s)
    for (const u in a)
      Array.isArray(a[u]) || (Tt(a[u]) && !Rb(a[u]))
        ? Et(n) || ah(i[u])
          ? (i[u] = Array.isArray(a[u]) ? nc(a[u], []) : { ...nc(a[u]) })
          : Ab(a[u], an(n) ? {} : n[u], i[u])
        : (i[u] = !_r(a[u], n[u]));
  return i;
}
var Xl = (a, n) => Ab(a, n, nc(n)),
  Ob = (a, { valueAsNumber: n, valueAsDate: i, setValueAs: s }) =>
    Et(a)
      ? a
      : n
        ? a === ""
          ? NaN
          : a && +a
        : i && ya(a)
          ? new Date(a)
          : s
            ? s(a)
            : a;
function Fd(a) {
  const n = a.ref;
  return qh(n)
    ? n.files
    : Zh(n)
      ? Eb(a.refs).value
      : Tb(n)
        ? [...n.selectedOptions].map(({ value: i }) => i)
        : Ru(n)
          ? wb(a.refs).value
          : Ob(Et(n.value) ? a.ref.value : n.value, a);
}
var W_ = (a, n, i, s) => {
    const u = {};
    for (const c of a) {
      const d = ie(n, c);
      d && rt(u, c, d._f);
    }
    return {
      criteriaMode: i,
      names: [...a],
      fields: u,
      shouldUseNativeValidation: s,
    };
  },
  Kl = (a) =>
    Et(a)
      ? a
      : tc(a)
        ? a.source
        : Tt(a)
          ? tc(a.value)
            ? a.value.source
            : a.value
          : a;
const nv = "AsyncFunction";
var I_ = (a) =>
    !!a &&
    !!a.validate &&
    !!(
      (pa(a.validate) && a.validate.constructor.name === nv) ||
      (Tt(a.validate) &&
        Object.values(a.validate).find((n) => n.constructor.name === nv))
    ),
  ew = (a) =>
    a.mount &&
    (a.required ||
      a.min ||
      a.max ||
      a.maxLength ||
      a.minLength ||
      a.pattern ||
      a.validate);
function av(a, n, i) {
  const s = ie(a, i);
  if (s || Hh(i)) return { error: s, name: i };
  const u = i.split(".");
  for (; u.length; ) {
    const c = u.join("."),
      d = ie(n, c),
      h = ie(a, c);
    if (d && !Array.isArray(d) && i !== c) return { name: i };
    if (h && h.type) return { name: c, error: h };
    u.pop();
  }
  return { name: i };
}
var tw = (a, n, i, s, u) =>
    u.isOnAll
      ? !1
      : !i && u.isOnTouch
        ? !(n || a)
        : (i ? s.isOnBlur : u.isOnBlur)
          ? !a
          : (i ? s.isOnChange : u.isOnChange)
            ? a
            : !0,
  nw = (a, n) => !bc(ie(a, n)).length && Nt(a, n);
const aw = {
  mode: In.onSubmit,
  reValidateMode: In.onChange,
  shouldFocusError: !0,
};
function rw(a = {}) {
  let n = { ...aw, ...a },
    i = {
      submitCount: 0,
      isDirty: !1,
      isLoading: pa(n.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: n.errors || {},
      disabled: n.disabled || !1,
    },
    s = {},
    u =
      Tt(n.defaultValues) || Tt(n.values)
        ? hn(n.defaultValues || n.values) || {}
        : {},
    c = n.shouldUnregister ? {} : hn(u),
    d = { action: !1, mount: !1, watch: !1 },
    h = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    p,
    m = 0;
  const g = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    x = { values: Qd(), array: Qd(), state: Qd() },
    A = $g(n.mode),
    b = $g(n.reValidateMode),
    T = n.criteriaMode === In.all,
    O = (E) => (U) => {
      clearTimeout(m), (m = setTimeout(E, U));
    },
    R = async (E) => {
      if (!n.disabled && (g.isValid || E)) {
        const U = n.resolver ? yn((await Se()).errors) : await pe(s, !0);
        U !== i.isValid && x.state.next({ isValid: U });
      }
    },
    j = (E, U) => {
      !n.disabled &&
        (g.isValidating || g.validatingFields) &&
        ((E || Array.from(h.mount)).forEach((H) => {
          H && (U ? rt(i.validatingFields, H, U) : Nt(i.validatingFields, H));
        }),
        x.state.next({
          validatingFields: i.validatingFields,
          isValidating: !yn(i.validatingFields),
        }));
    },
    L = (E, U = [], H, re, ae = !0, W = !0) => {
      if (re && H && !n.disabled) {
        if (((d.action = !0), W && Array.isArray(ie(s, E)))) {
          const ge = H(ie(s, E), re.argA, re.argB);
          ae && rt(s, E, ge);
        }
        if (W && Array.isArray(ie(i.errors, E))) {
          const ge = H(ie(i.errors, E), re.argA, re.argB);
          ae && rt(i.errors, E, ge), nw(i.errors, E);
        }
        if (g.touchedFields && W && Array.isArray(ie(i.touchedFields, E))) {
          const ge = H(ie(i.touchedFields, E), re.argA, re.argB);
          ae && rt(i.touchedFields, E, ge);
        }
        g.dirtyFields && (i.dirtyFields = Xl(u, c)),
          x.state.next({
            name: E,
            isDirty: ye(E, U),
            dirtyFields: i.dirtyFields,
            errors: i.errors,
            isValid: i.isValid,
          });
      } else rt(c, E, U);
    },
    V = (E, U) => {
      rt(i.errors, E, U), x.state.next({ errors: i.errors });
    },
    se = (E) => {
      (i.errors = E), x.state.next({ errors: i.errors, isValid: !1 });
    },
    G = (E, U, H, re) => {
      const ae = ie(s, E);
      if (ae) {
        const W = ie(c, E, Et(H) ? ie(u, E) : H);
        Et(W) || (re && re.defaultChecked) || U
          ? rt(c, E, U ? W : Fd(ae._f))
          : ze(E, W),
          d.mount && R();
      }
    },
    le = (E, U, H, re, ae) => {
      let W = !1,
        ge = !1;
      const Le = { name: E };
      if (!n.disabled) {
        const Pe = !!(ie(s, E) && ie(s, E)._f && ie(s, E)._f.disabled);
        if (!H || re) {
          g.isDirty &&
            ((ge = i.isDirty),
            (i.isDirty = Le.isDirty = ye()),
            (W = ge !== Le.isDirty));
          const st = Pe || _r(ie(u, E), U);
          (ge = !!(!Pe && ie(i.dirtyFields, E))),
            st || Pe ? Nt(i.dirtyFields, E) : rt(i.dirtyFields, E, !0),
            (Le.dirtyFields = i.dirtyFields),
            (W = W || (g.dirtyFields && ge !== !st));
        }
        if (H) {
          const st = ie(i.touchedFields, E);
          st ||
            (rt(i.touchedFields, E, H),
            (Le.touchedFields = i.touchedFields),
            (W = W || (g.touchedFields && st !== H)));
        }
        W && ae && x.state.next(Le);
      }
      return W ? Le : {};
    },
    we = (E, U, H, re) => {
      const ae = ie(i.errors, E),
        W = g.isValid && qn(U) && i.isValid !== U;
      if (
        (n.delayError && H
          ? ((p = O(() => V(E, H))), p(n.delayError))
          : (clearTimeout(m),
            (p = null),
            H ? rt(i.errors, E, H) : Nt(i.errors, E)),
        (H ? !_r(ae, H) : ae) || !yn(re) || W)
      ) {
        const ge = {
          ...re,
          ...(W && qn(U) ? { isValid: U } : {}),
          errors: i.errors,
          name: E,
        };
        (i = { ...i, ...ge }), x.state.next(ge);
      }
    },
    Se = async (E) => {
      j(E, !0);
      const U = await n.resolver(
        c,
        n.context,
        W_(E || h.mount, s, n.criteriaMode, n.shouldUseNativeValidation),
      );
      return j(E), U;
    },
    F = async (E) => {
      const { errors: U } = await Se(E);
      if (E)
        for (const H of E) {
          const re = ie(U, H);
          re ? rt(i.errors, H, re) : Nt(i.errors, H);
        }
      else i.errors = U;
      return U;
    },
    pe = async (E, U, H = { valid: !0 }) => {
      for (const re in E) {
        const ae = E[re];
        if (ae) {
          const { _f: W, ...ge } = ae;
          if (W) {
            const Le = h.array.has(W.name),
              Pe = ae._f && I_(ae._f);
            Pe && g.validatingFields && j([re], !0);
            const st = await tv(
              ae,
              h.disabled,
              c,
              T,
              n.shouldUseNativeValidation && !U,
              Le,
            );
            if (
              (Pe && g.validatingFields && j([re]),
              st[W.name] && ((H.valid = !1), U))
            )
              break;
            !U &&
              (ie(st, W.name)
                ? Le
                  ? K_(i.errors, st, W.name)
                  : rt(i.errors, W.name, st[W.name])
                : Nt(i.errors, W.name));
          }
          !yn(ge) && (await pe(ge, U, H));
        }
      }
      return H.valid;
    },
    Fe = () => {
      for (const E of h.unMount) {
        const U = ie(s, E);
        U &&
          (U._f.refs ? U._f.refs.every((H) => !Gd(H)) : !Gd(U._f.ref)) &&
          Te(E);
      }
      h.unMount = new Set();
    },
    ye = (E, U) => !n.disabled && (E && U && rt(c, E, U), !_r(Y(), u)),
    Ae = (E, U, H) =>
      Sb(E, h, { ...(d.mount ? c : Et(U) ? u : ya(E) ? { [E]: U } : U) }, H, U),
    be = (E) =>
      bc(ie(d.mount ? c : u, E, n.shouldUnregister ? ie(u, E, []) : [])),
    ze = (E, U, H = {}) => {
      const re = ie(s, E);
      let ae = U;
      if (re) {
        const W = re._f;
        W &&
          (!W.disabled && rt(c, E, Ob(U, W)),
          (ae = ec(W.ref) && an(U) ? "" : U),
          Tb(W.ref)
            ? [...W.ref.options].forEach(
                (ge) => (ge.selected = ae.includes(ge.value)),
              )
            : W.refs
              ? Ru(W.ref)
                ? W.refs.length > 1
                  ? W.refs.forEach(
                      (ge) =>
                        (!ge.defaultChecked || !ge.disabled) &&
                        (ge.checked = Array.isArray(ae)
                          ? !!ae.find((Le) => Le === ge.value)
                          : ae === ge.value),
                    )
                  : W.refs[0] && (W.refs[0].checked = !!ae)
                : W.refs.forEach((ge) => (ge.checked = ge.value === ae))
              : qh(W.ref)
                ? (W.ref.value = "")
                : ((W.ref.value = ae),
                  W.ref.type || x.values.next({ name: E, values: { ...c } })));
      }
      (H.shouldDirty || H.shouldTouch) &&
        le(E, ae, H.shouldTouch, H.shouldDirty, !0),
        H.shouldValidate && _(E);
    },
    K = (E, U, H) => {
      for (const re in U) {
        const ae = U[re],
          W = `${E}.${re}`,
          ge = ie(s, W);
        (h.array.has(E) || Tt(ae) || (ge && !ge._f)) && !ci(ae)
          ? K(W, ae, H)
          : ze(W, ae, H);
      }
    },
    oe = (E, U, H = {}) => {
      const re = ie(s, E),
        ae = h.array.has(E),
        W = hn(U);
      rt(c, E, W),
        ae
          ? (x.array.next({ name: E, values: { ...c } }),
            (g.isDirty || g.dirtyFields) &&
              H.shouldDirty &&
              x.state.next({
                name: E,
                dirtyFields: Xl(u, c),
                isDirty: ye(E, W),
              }))
          : re && !re._f && !an(W)
            ? K(E, W, H)
            : ze(E, W, H),
        Jg(E, h) && x.state.next({ ...i }),
        x.values.next({ name: d.mount ? E : void 0, values: { ...c } });
    },
    ee = async (E) => {
      d.mount = !0;
      const U = E.target;
      let H = U.name,
        re = !0;
      const ae = ie(s, H),
        W = () => (U.type ? Fd(ae._f) : hb(E)),
        ge = (Le) => {
          re =
            Number.isNaN(Le) ||
            (ci(Le) && isNaN(Le.getTime())) ||
            _r(Le, ie(c, H, Le));
        };
      if (ae) {
        let Le, Pe;
        const st = W(),
          $t = E.type === Io.BLUR || E.type === Io.FOCUS_OUT,
          $s =
            (!ew(ae._f) && !n.resolver && !ie(i.errors, H) && !ae._f.deps) ||
            tw($t, ie(i.touchedFields, H), i.isSubmitted, b, A),
          Yn = Jg(H, h, $t);
        rt(c, H, st),
          $t
            ? (ae._f.onBlur && ae._f.onBlur(E), p && p(0))
            : ae._f.onChange && ae._f.onChange(E);
        const Hr = le(H, st, $t, !1),
          Mi = !yn(Hr) || Yn;
        if (
          (!$t && x.values.next({ name: H, type: E.type, values: { ...c } }),
          $s)
        )
          return (
            g.isValid && (n.mode === "onBlur" && $t ? R() : $t || R()),
            Mi && x.state.next({ name: H, ...(Yn ? {} : Hr) })
          );
        if ((!$t && Yn && x.state.next({ ...i }), n.resolver)) {
          const { errors: Rn } = await Se([H]);
          if ((ge(st), re)) {
            const gt = av(i.errors, s, H),
              Vr = av(Rn, s, gt.name || H);
            (Le = Vr.error), (H = Vr.name), (Pe = yn(Rn));
          }
        } else
          j([H], !0),
            (Le = (await tv(ae, h.disabled, c, T, n.shouldUseNativeValidation))[
              H
            ]),
            j([H]),
            ge(st),
            re && (Le ? (Pe = !1) : g.isValid && (Pe = await pe(s, !0)));
        re && (ae._f.deps && _(ae._f.deps), we(H, Pe, Le, Hr));
      }
    },
    ce = (E, U) => {
      if (ie(i.errors, U) && E.focus) return E.focus(), 1;
    },
    _ = async (E, U = {}) => {
      let H, re;
      const ae = eu(E);
      if (n.resolver) {
        const W = await F(Et(E) ? E : ae);
        (H = yn(W)), (re = E ? !ae.some((ge) => ie(W, ge)) : H);
      } else
        E
          ? ((re = (
              await Promise.all(
                ae.map(async (W) => {
                  const ge = ie(s, W);
                  return await pe(ge && ge._f ? { [W]: ge } : ge);
                }),
              )
            ).every(Boolean)),
            !(!re && !i.isValid) && R())
          : (re = H = await pe(s));
      return (
        x.state.next({
          ...(!ya(E) || (g.isValid && H !== i.isValid) ? {} : { name: E }),
          ...(n.resolver || !E ? { isValid: H } : {}),
          errors: i.errors,
        }),
        U.shouldFocus && !re && tu(s, ce, E ? ae : h.mount),
        re
      );
    },
    Y = (E) => {
      const U = { ...(d.mount ? c : u) };
      return Et(E) ? U : ya(E) ? ie(U, E) : E.map((H) => ie(U, H));
    },
    te = (E, U) => ({
      invalid: !!ie((U || i).errors, E),
      isDirty: !!ie((U || i).dirtyFields, E),
      error: ie((U || i).errors, E),
      isValidating: !!ie(i.validatingFields, E),
      isTouched: !!ie((U || i).touchedFields, E),
    }),
    ne = (E) => {
      E && eu(E).forEach((U) => Nt(i.errors, U)),
        x.state.next({ errors: E ? i.errors : {} });
    },
    J = (E, U, H) => {
      const re = (ie(s, E, { _f: {} })._f || {}).ref,
        ae = ie(i.errors, E) || {},
        { ref: W, message: ge, type: Le, ...Pe } = ae;
      rt(i.errors, E, { ...Pe, ...U, ref: re }),
        x.state.next({ name: E, errors: i.errors, isValid: !1 }),
        H && H.shouldFocus && re && re.focus && re.focus();
    },
    Re = (E, U) =>
      pa(E)
        ? x.values.subscribe({ next: (H) => E(Ae(void 0, U), H) })
        : Ae(E, U, !0),
    Te = (E, U = {}) => {
      for (const H of E ? eu(E) : h.mount)
        h.mount.delete(H),
          h.array.delete(H),
          U.keepValue || (Nt(s, H), Nt(c, H)),
          !U.keepError && Nt(i.errors, H),
          !U.keepDirty && Nt(i.dirtyFields, H),
          !U.keepTouched && Nt(i.touchedFields, H),
          !U.keepIsValidating && Nt(i.validatingFields, H),
          !n.shouldUnregister && !U.keepDefaultValue && Nt(u, H);
      x.values.next({ values: { ...c } }),
        x.state.next({ ...i, ...(U.keepDirty ? { isDirty: ye() } : {}) }),
        !U.keepIsValid && R();
    },
    Ue = ({ disabled: E, name: U, field: H, fields: re }) => {
      ((qn(E) && d.mount) || E || h.disabled.has(U)) &&
        (E ? h.disabled.add(U) : h.disabled.delete(U),
        le(U, Fd(H ? H._f : ie(re, U)._f), !1, !1, !0));
    },
    je = (E, U = {}) => {
      let H = ie(s, E);
      const re = qn(U.disabled) || qn(n.disabled);
      return (
        rt(s, E, {
          ...(H || {}),
          _f: {
            ...(H && H._f ? H._f : { ref: { name: E } }),
            name: E,
            mount: !0,
            ...U,
          },
        }),
        h.mount.add(E),
        H
          ? Ue({
              field: H,
              disabled: qn(U.disabled) ? U.disabled : n.disabled,
              name: E,
            })
          : G(E, !0, U.value),
        {
          ...(re ? { disabled: U.disabled || n.disabled } : {}),
          ...(n.progressive
            ? {
                required: !!U.required,
                min: Kl(U.min),
                max: Kl(U.max),
                minLength: Kl(U.minLength),
                maxLength: Kl(U.maxLength),
                pattern: Kl(U.pattern),
              }
            : {}),
          name: E,
          onChange: ee,
          onBlur: ee,
          ref: (ae) => {
            if (ae) {
              je(E, U), (H = ie(s, E));
              const W =
                  (Et(ae.value) &&
                    ae.querySelectorAll &&
                    ae.querySelectorAll("input,select,textarea")[0]) ||
                  ae,
                ge = P_(W),
                Le = H._f.refs || [];
              if (ge ? Le.find((Pe) => Pe === W) : W === H._f.ref) return;
              rt(s, E, {
                _f: {
                  ...H._f,
                  ...(ge
                    ? {
                        refs: [
                          ...Le.filter(Gd),
                          W,
                          ...(Array.isArray(ie(u, E)) ? [{}] : []),
                        ],
                        ref: { type: W.type, name: E },
                      }
                    : { ref: W }),
                },
              }),
                G(E, !1, void 0, W);
            } else
              (H = ie(s, E, {})),
                H._f && (H._f.mount = !1),
                (n.shouldUnregister || U.shouldUnregister) &&
                  !(mb(h.array, E) && d.action) &&
                  h.unMount.add(E);
          },
        }
      );
    },
    Je = () => n.shouldFocusError && tu(s, ce, h.mount),
    nt = (E) => {
      qn(E) &&
        (x.state.next({ disabled: E }),
        tu(
          s,
          (U, H) => {
            const re = ie(s, H);
            re &&
              ((U.disabled = re._f.disabled || E),
              Array.isArray(re._f.refs) &&
                re._f.refs.forEach((ae) => {
                  ae.disabled = re._f.disabled || E;
                }));
          },
          0,
          !1,
        ));
    },
    Ct = (E, U) => async (H) => {
      let re;
      H && (H.preventDefault && H.preventDefault(), H.persist && H.persist());
      let ae = hn(c);
      if (h.disabled.size) for (const W of h.disabled) rt(ae, W, void 0);
      if ((x.state.next({ isSubmitting: !0 }), n.resolver)) {
        const { errors: W, values: ge } = await Se();
        (i.errors = W), (ae = ge);
      } else await pe(s);
      if ((Nt(i.errors, "root"), yn(i.errors))) {
        x.state.next({ errors: {} });
        try {
          await E(ae, H);
        } catch (W) {
          re = W;
        }
      } else U && (await U({ ...i.errors }, H)), Je(), setTimeout(Je);
      if (
        (x.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: yn(i.errors) && !re,
          submitCount: i.submitCount + 1,
          errors: i.errors,
        }),
        re)
      )
        throw re;
    },
    Zn = (E, U = {}) => {
      ie(s, E) &&
        (Et(U.defaultValue)
          ? oe(E, hn(ie(u, E)))
          : (oe(E, U.defaultValue), rt(u, E, hn(U.defaultValue))),
        U.keepTouched || Nt(i.touchedFields, E),
        U.keepDirty ||
          (Nt(i.dirtyFields, E),
          (i.isDirty = U.defaultValue ? ye(E, hn(ie(u, E))) : ye())),
        U.keepError || (Nt(i.errors, E), g.isValid && R()),
        x.state.next({ ...i }));
    },
    sn = (E, U = {}) => {
      const H = E ? hn(E) : u,
        re = hn(H),
        ae = yn(E),
        W = ae ? u : re;
      if ((U.keepDefaultValues || (u = H), !U.keepValues)) {
        if (U.keepDirtyValues) {
          const ge = new Set([...h.mount, ...Object.keys(Xl(u, c))]);
          for (const Le of Array.from(ge))
            ie(i.dirtyFields, Le) ? rt(W, Le, ie(c, Le)) : oe(Le, ie(W, Le));
        } else {
          if (Bh && Et(E))
            for (const ge of h.mount) {
              const Le = ie(s, ge);
              if (Le && Le._f) {
                const Pe = Array.isArray(Le._f.refs)
                  ? Le._f.refs[0]
                  : Le._f.ref;
                if (ec(Pe)) {
                  const st = Pe.closest("form");
                  if (st) {
                    st.reset();
                    break;
                  }
                }
              }
            }
          s = {};
        }
        (c = n.shouldUnregister ? (U.keepDefaultValues ? hn(u) : {}) : hn(W)),
          x.array.next({ values: { ...W } }),
          x.values.next({ values: { ...W } });
      }
      (h = {
        mount: U.keepDirtyValues ? h.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (d.mount = !g.isValid || !!U.keepIsValid || !!U.keepDirtyValues),
        (d.watch = !!n.shouldUnregister),
        x.state.next({
          submitCount: U.keepSubmitCount ? i.submitCount : 0,
          isDirty: ae
            ? !1
            : U.keepDirty
              ? i.isDirty
              : !!(U.keepDefaultValues && !_r(E, u)),
          isSubmitted: U.keepIsSubmitted ? i.isSubmitted : !1,
          dirtyFields: ae
            ? {}
            : U.keepDirtyValues
              ? U.keepDefaultValues && c
                ? Xl(u, c)
                : i.dirtyFields
              : U.keepDefaultValues && E
                ? Xl(u, E)
                : U.keepDirty
                  ? i.dirtyFields
                  : {},
          touchedFields: U.keepTouched ? i.touchedFields : {},
          errors: U.keepErrors ? i.errors : {},
          isSubmitSuccessful: U.keepIsSubmitSuccessful
            ? i.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    wa = (E, U) => sn(pa(E) ? E(c) : E, U);
  return {
    control: {
      register: je,
      unregister: Te,
      getFieldState: te,
      handleSubmit: Ct,
      setError: J,
      _executeSchema: Se,
      _getWatch: Ae,
      _getDirty: ye,
      _updateValid: R,
      _removeUnmounted: Fe,
      _updateFieldArray: L,
      _updateDisabledField: Ue,
      _getFieldArray: be,
      _reset: sn,
      _resetDefaultValues: () =>
        pa(n.defaultValues) &&
        n.defaultValues().then((E) => {
          wa(E, n.resetOptions), x.state.next({ isLoading: !1 });
        }),
      _updateFormState: (E) => {
        i = { ...i, ...E };
      },
      _disableForm: nt,
      _subjects: x,
      _proxyFormState: g,
      _setErrors: se,
      get _fields() {
        return s;
      },
      get _formValues() {
        return c;
      },
      get _state() {
        return d;
      },
      set _state(E) {
        d = E;
      },
      get _defaultValues() {
        return u;
      },
      get _names() {
        return h;
      },
      set _names(E) {
        h = E;
      },
      get _formState() {
        return i;
      },
      set _formState(E) {
        i = E;
      },
      get _options() {
        return n;
      },
      set _options(E) {
        n = { ...n, ...E };
      },
    },
    trigger: _,
    register: je,
    handleSubmit: Ct,
    watch: Re,
    setValue: oe,
    getValues: Y,
    reset: wa,
    resetField: Zn,
    clearErrors: ne,
    unregister: Te,
    setError: J,
    setFocus: (E, U = {}) => {
      const H = ie(s, E),
        re = H && H._f;
      if (re) {
        const ae = re.refs ? re.refs[0] : re.ref;
        ae.focus &&
          (ae.focus(), U.shouldSelect && pa(ae.select) && ae.select());
      }
    },
    getFieldState: te,
  };
}
function Cb(a = {}) {
  const n = X.useRef(void 0),
    i = X.useRef(void 0),
    [s, u] = X.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: pa(a.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: a.errors || {},
      disabled: a.disabled || !1,
      defaultValues: pa(a.defaultValues) ? void 0 : a.defaultValues,
    });
  n.current || (n.current = { ...rw(a), formState: s });
  const c = n.current.control;
  return (
    (c._options = a),
    Vh({
      subject: c._subjects.state,
      next: (d) => {
        vb(d, c._proxyFormState, c._updateFormState, !0) &&
          u({ ...c._formState });
      },
    }),
    X.useEffect(() => c._disableForm(a.disabled), [c, a.disabled]),
    X.useEffect(() => {
      if (c._proxyFormState.isDirty) {
        const d = c._getDirty();
        d !== s.isDirty && c._subjects.state.next({ isDirty: d });
      }
    }, [c, s.isDirty]),
    X.useEffect(() => {
      a.values && !_r(a.values, i.current)
        ? (c._reset(a.values, c._options.resetOptions),
          (i.current = a.values),
          u((d) => ({ ...d })))
        : c._resetDefaultValues();
    }, [a.values, c]),
    X.useEffect(() => {
      a.errors && c._setErrors(a.errors);
    }, [a.errors, c]),
    X.useEffect(() => {
      c._state.mount || (c._updateValid(), (c._state.mount = !0)),
        c._state.watch &&
          ((c._state.watch = !1), c._subjects.state.next({ ...c._formState })),
        c._removeUnmounted();
    }),
    X.useEffect(() => {
      a.shouldUnregister && c._subjects.values.next({ values: c._getWatch() });
    }, [a.shouldUnregister, c]),
    (n.current.formState = gb(s, c)),
    n.current
  );
}
function Db(a) {
  var n,
    i,
    s = "";
  if (typeof a == "string" || typeof a == "number") s += a;
  else if (typeof a == "object")
    if (Array.isArray(a)) {
      var u = a.length;
      for (n = 0; n < u; n++)
        a[n] && (i = Db(a[n])) && (s && (s += " "), (s += i));
    } else for (i in a) a[i] && (s && (s += " "), (s += i));
  return s;
}
function Mb() {
  for (var a, n, i = 0, s = "", u = arguments.length; i < u; i++)
    (a = arguments[i]) && (n = Db(a)) && (s && (s += " "), (s += n));
  return s;
}
const Yh = "-",
  iw = (a) => {
    const n = lw(a),
      { conflictingClassGroups: i, conflictingClassGroupModifiers: s } = a;
    return {
      getClassGroupId: (d) => {
        const h = d.split(Yh);
        return h[0] === "" && h.length !== 1 && h.shift(), Nb(h, n) || sw(d);
      },
      getConflictingClassGroupIds: (d, h) => {
        const p = i[d] || [];
        return h && s[d] ? [...p, ...s[d]] : p;
      },
    };
  },
  Nb = (a, n) => {
    var d;
    if (a.length === 0) return n.classGroupId;
    const i = a[0],
      s = n.nextPart.get(i),
      u = s ? Nb(a.slice(1), s) : void 0;
    if (u) return u;
    if (n.validators.length === 0) return;
    const c = a.join(Yh);
    return (d = n.validators.find(({ validator: h }) => h(c))) == null
      ? void 0
      : d.classGroupId;
  },
  rv = /^\[(.+)\]$/,
  sw = (a) => {
    if (rv.test(a)) {
      const n = rv.exec(a)[1],
        i = n == null ? void 0 : n.substring(0, n.indexOf(":"));
      if (i) return "arbitrary.." + i;
    }
  },
  lw = (a) => {
    const { theme: n, classGroups: i } = a,
      s = { nextPart: new Map(), validators: [] };
    for (const u in i) rh(i[u], s, u, n);
    return s;
  },
  rh = (a, n, i, s) => {
    a.forEach((u) => {
      if (typeof u == "string") {
        const c = u === "" ? n : iv(n, u);
        c.classGroupId = i;
        return;
      }
      if (typeof u == "function") {
        if (uw(u)) {
          rh(u(s), n, i, s);
          return;
        }
        n.validators.push({ validator: u, classGroupId: i });
        return;
      }
      Object.entries(u).forEach(([c, d]) => {
        rh(d, iv(n, c), i, s);
      });
    });
  },
  iv = (a, n) => {
    let i = a;
    return (
      n.split(Yh).forEach((s) => {
        i.nextPart.has(s) ||
          i.nextPart.set(s, { nextPart: new Map(), validators: [] }),
          (i = i.nextPart.get(s));
      }),
      i
    );
  },
  uw = (a) => a.isThemeGetter,
  ow = (a) => {
    if (a < 1) return { get: () => {}, set: () => {} };
    let n = 0,
      i = new Map(),
      s = new Map();
    const u = (c, d) => {
      i.set(c, d), n++, n > a && ((n = 0), (s = i), (i = new Map()));
    };
    return {
      get(c) {
        let d = i.get(c);
        if (d !== void 0) return d;
        if ((d = s.get(c)) !== void 0) return u(c, d), d;
      },
      set(c, d) {
        i.has(c) ? i.set(c, d) : u(c, d);
      },
    };
  },
  ih = "!",
  sh = ":",
  cw = sh.length,
  fw = (a) => {
    const { prefix: n, experimentalParseClassName: i } = a;
    let s = (u) => {
      const c = [];
      let d = 0,
        h = 0,
        p = 0,
        m;
      for (let T = 0; T < u.length; T++) {
        let O = u[T];
        if (d === 0 && h === 0) {
          if (O === sh) {
            c.push(u.slice(p, T)), (p = T + cw);
            continue;
          }
          if (O === "/") {
            m = T;
            continue;
          }
        }
        O === "[" ? d++ : O === "]" ? d-- : O === "(" ? h++ : O === ")" && h--;
      }
      const g = c.length === 0 ? u : u.substring(p),
        x = dw(g),
        A = x !== g,
        b = m && m > p ? m - p : void 0;
      return {
        modifiers: c,
        hasImportantModifier: A,
        baseClassName: x,
        maybePostfixModifierPosition: b,
      };
    };
    if (n) {
      const u = n + sh,
        c = s;
      s = (d) =>
        d.startsWith(u)
          ? c(d.substring(u.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: d,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (i) {
      const u = s;
      s = (c) => i({ className: c, parseClassName: u });
    }
    return s;
  },
  dw = (a) =>
    a.endsWith(ih)
      ? a.substring(0, a.length - 1)
      : a.startsWith(ih)
        ? a.substring(1)
        : a,
  hw = (a) => {
    const n = Object.fromEntries(a.orderSensitiveModifiers.map((s) => [s, !0]));
    return (s) => {
      if (s.length <= 1) return s;
      const u = [];
      let c = [];
      return (
        s.forEach((d) => {
          d[0] === "[" || n[d] ? (u.push(...c.sort(), d), (c = [])) : c.push(d);
        }),
        u.push(...c.sort()),
        u
      );
    };
  },
  mw = (a) => ({
    cache: ow(a.cacheSize),
    parseClassName: fw(a),
    sortModifiers: hw(a),
    ...iw(a),
  }),
  pw = /\s+/,
  yw = (a, n) => {
    const {
        parseClassName: i,
        getClassGroupId: s,
        getConflictingClassGroupIds: u,
        sortModifiers: c,
      } = n,
      d = [],
      h = a.trim().split(pw);
    let p = "";
    for (let m = h.length - 1; m >= 0; m -= 1) {
      const g = h[m],
        {
          isExternal: x,
          modifiers: A,
          hasImportantModifier: b,
          baseClassName: T,
          maybePostfixModifierPosition: O,
        } = i(g);
      if (x) {
        p = g + (p.length > 0 ? " " + p : p);
        continue;
      }
      let R = !!O,
        j = s(R ? T.substring(0, O) : T);
      if (!j) {
        if (!R) {
          p = g + (p.length > 0 ? " " + p : p);
          continue;
        }
        if (((j = s(T)), !j)) {
          p = g + (p.length > 0 ? " " + p : p);
          continue;
        }
        R = !1;
      }
      const L = c(A).join(":"),
        V = b ? L + ih : L,
        se = V + j;
      if (d.includes(se)) continue;
      d.push(se);
      const G = u(j, R);
      for (let le = 0; le < G.length; ++le) {
        const we = G[le];
        d.push(V + we);
      }
      p = g + (p.length > 0 ? " " + p : p);
    }
    return p;
  };
function gw() {
  let a = 0,
    n,
    i,
    s = "";
  for (; a < arguments.length; )
    (n = arguments[a++]) && (i = zb(n)) && (s && (s += " "), (s += i));
  return s;
}
const zb = (a) => {
  if (typeof a == "string") return a;
  let n,
    i = "";
  for (let s = 0; s < a.length; s++)
    a[s] && (n = zb(a[s])) && (i && (i += " "), (i += n));
  return i;
};
function vw(a, ...n) {
  let i,
    s,
    u,
    c = d;
  function d(p) {
    const m = n.reduce((g, x) => x(g), a());
    return (i = mw(m)), (s = i.cache.get), (u = i.cache.set), (c = h), h(p);
  }
  function h(p) {
    const m = s(p);
    if (m) return m;
    const g = yw(p, i);
    return u(p, g), g;
  }
  return function () {
    return c(gw.apply(null, arguments));
  };
}
const Bt = (a) => {
    const n = (i) => i[a] || [];
    return (n.isThemeGetter = !0), n;
  },
  Ub = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  kb = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  bw = /^\d+\/\d+$/,
  xw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Sw =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  _w = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  ww = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Ew =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  ys = (a) => bw.test(a),
  Xe = (a) => !!a && !Number.isNaN(Number(a)),
  ui = (a) => !!a && Number.isInteger(Number(a)),
  sv = (a) => a.endsWith("%") && Xe(a.slice(0, -1)),
  xr = (a) => xw.test(a),
  Tw = () => !0,
  Rw = (a) => Sw.test(a) && !_w.test(a),
  Qh = () => !1,
  Aw = (a) => ww.test(a),
  Ow = (a) => Ew.test(a),
  Cw = (a) => !de(a) && !he(a),
  Dw = (a) => Qs(a, Bb, Qh),
  de = (a) => Ub.test(a),
  oi = (a) => Qs(a, Hb, Rw),
  Xd = (a) => Qs(a, qw, Xe),
  Mw = (a) => Qs(a, jb, Qh),
  Nw = (a) => Qs(a, Lb, Ow),
  zw = (a) => Qs(a, Qh, Aw),
  he = (a) => kb.test(a),
  Zo = (a) => Gs(a, Hb),
  Uw = (a) => Gs(a, Zw),
  kw = (a) => Gs(a, jb),
  jw = (a) => Gs(a, Bb),
  Lw = (a) => Gs(a, Lb),
  Bw = (a) => Gs(a, Yw, !0),
  Qs = (a, n, i) => {
    const s = Ub.exec(a);
    return s ? (s[1] ? n(s[1]) : i(s[2])) : !1;
  },
  Gs = (a, n, i = !1) => {
    const s = kb.exec(a);
    return s ? (s[1] ? n(s[1]) : i) : !1;
  },
  jb = (a) => a === "position",
  Hw = new Set(["image", "url"]),
  Lb = (a) => Hw.has(a),
  Vw = new Set(["length", "size", "percentage"]),
  Bb = (a) => Vw.has(a),
  Hb = (a) => a === "length",
  qw = (a) => a === "number",
  Zw = (a) => a === "family-name",
  Yw = (a) => a === "shadow",
  Qw = () => {
    const a = Bt("color"),
      n = Bt("font"),
      i = Bt("text"),
      s = Bt("font-weight"),
      u = Bt("tracking"),
      c = Bt("leading"),
      d = Bt("breakpoint"),
      h = Bt("container"),
      p = Bt("spacing"),
      m = Bt("radius"),
      g = Bt("shadow"),
      x = Bt("inset-shadow"),
      A = Bt("drop-shadow"),
      b = Bt("blur"),
      T = Bt("perspective"),
      O = Bt("aspect"),
      R = Bt("ease"),
      j = Bt("animate"),
      L = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      V = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      se = () => ["auto", "hidden", "clip", "visible", "scroll"],
      G = () => ["auto", "contain", "none"],
      le = () => [ys, "px", "full", "auto", he, de, p],
      we = () => [ui, "none", "subgrid", he, de],
      Se = () => ["auto", { span: ["full", ui, he, de] }, he, de],
      F = () => [ui, "auto", he, de],
      pe = () => ["auto", "min", "max", "fr", he, de],
      Fe = () => [he, de, p],
      ye = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
      ],
      Ae = () => ["start", "end", "center", "stretch"],
      be = () => [he, de, p],
      ze = () => ["px", ...be()],
      K = () => ["px", "auto", ...be()],
      oe = () => [
        ys,
        "auto",
        "px",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        he,
        de,
        p,
      ],
      ee = () => [a, he, de],
      ce = () => [sv, oi],
      _ = () => ["", "none", "full", m, he, de],
      Y = () => ["", Xe, Zo, oi],
      te = () => ["solid", "dashed", "dotted", "double"],
      ne = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      J = () => ["", "none", b, he, de],
      Re = () => [
        "center",
        "top",
        "top-right",
        "right",
        "bottom-right",
        "bottom",
        "bottom-left",
        "left",
        "top-left",
        he,
        de,
      ],
      Te = () => ["none", Xe, he, de],
      Ue = () => ["none", Xe, he, de],
      je = () => [Xe, he, de],
      Je = () => [ys, "full", "px", he, de, p];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [xr],
        breakpoint: [xr],
        color: [Tw],
        container: [xr],
        "drop-shadow": [xr],
        ease: ["in", "out", "in-out"],
        font: [Cw],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [xr],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [xr],
        shadow: [xr],
        spacing: [Xe],
        text: [xr],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", ys, de, he, O] }],
        container: ["container"],
        columns: [{ columns: [Xe, de, he, h] }],
        "break-after": [{ "break-after": L() }],
        "break-before": [{ "break-before": L() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...V(), de, he] }],
        overflow: [{ overflow: se() }],
        "overflow-x": [{ "overflow-x": se() }],
        "overflow-y": [{ "overflow-y": se() }],
        overscroll: [{ overscroll: G() }],
        "overscroll-x": [{ "overscroll-x": G() }],
        "overscroll-y": [{ "overscroll-y": G() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: le() }],
        "inset-x": [{ "inset-x": le() }],
        "inset-y": [{ "inset-y": le() }],
        start: [{ start: le() }],
        end: [{ end: le() }],
        top: [{ top: le() }],
        right: [{ right: le() }],
        bottom: [{ bottom: le() }],
        left: [{ left: le() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [ui, "auto", he, de] }],
        basis: [{ basis: [ys, "full", "auto", he, de, h, p] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [Xe, ys, "auto", "initial", "none", de] }],
        grow: [{ grow: ["", Xe, he, de] }],
        shrink: [{ shrink: ["", Xe, he, de] }],
        order: [{ order: [ui, "first", "last", "none", he, de] }],
        "grid-cols": [{ "grid-cols": we() }],
        "col-start-end": [{ col: Se() }],
        "col-start": [{ "col-start": F() }],
        "col-end": [{ "col-end": F() }],
        "grid-rows": [{ "grid-rows": we() }],
        "row-start-end": [{ row: Se() }],
        "row-start": [{ "row-start": F() }],
        "row-end": [{ "row-end": F() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": pe() }],
        "auto-rows": [{ "auto-rows": pe() }],
        gap: [{ gap: Fe() }],
        "gap-x": [{ "gap-x": Fe() }],
        "gap-y": [{ "gap-y": Fe() }],
        "justify-content": [{ justify: [...ye(), "normal"] }],
        "justify-items": [{ "justify-items": [...Ae(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...Ae()] }],
        "align-content": [{ content: ["normal", ...ye()] }],
        "align-items": [{ items: [...Ae(), "baseline"] }],
        "align-self": [{ self: ["auto", ...Ae(), "baseline"] }],
        "place-content": [{ "place-content": ye() }],
        "place-items": [{ "place-items": [...Ae(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...Ae()] }],
        p: [{ p: ze() }],
        px: [{ px: ze() }],
        py: [{ py: ze() }],
        ps: [{ ps: ze() }],
        pe: [{ pe: ze() }],
        pt: [{ pt: ze() }],
        pr: [{ pr: ze() }],
        pb: [{ pb: ze() }],
        pl: [{ pl: ze() }],
        m: [{ m: K() }],
        mx: [{ mx: K() }],
        my: [{ my: K() }],
        ms: [{ ms: K() }],
        me: [{ me: K() }],
        mt: [{ mt: K() }],
        mr: [{ mr: K() }],
        mb: [{ mb: K() }],
        ml: [{ ml: K() }],
        "space-x": [{ "space-x": be() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": be() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: oe() }],
        w: [{ w: [h, "screen", ...oe()] }],
        "min-w": [{ "min-w": [h, "screen", "none", ...oe()] }],
        "max-w": [
          { "max-w": [h, "screen", "none", "prose", { screen: [d] }, ...oe()] },
        ],
        h: [{ h: ["screen", ...oe()] }],
        "min-h": [{ "min-h": ["screen", "none", ...oe()] }],
        "max-h": [{ "max-h": ["screen", ...oe()] }],
        "font-size": [{ text: ["base", i, Zo, oi] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [s, he, Xd] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              sv,
              de,
            ],
          },
        ],
        "font-family": [{ font: [Uw, de, n] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [u, he, de] }],
        "line-clamp": [{ "line-clamp": [Xe, "none", he, Xd] }],
        leading: [{ leading: [he, de, c, p] }],
        "list-image": [{ "list-image": ["none", he, de] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", he, de] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: ee() }],
        "text-color": [{ text: ee() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...te(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [Xe, "from-font", "auto", he, oi] },
        ],
        "text-decoration-color": [{ decoration: ee() }],
        "underline-offset": [{ "underline-offset": [Xe, "auto", he, de] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: ["px", ...be()] }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              he,
              de,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", he, de] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...V(), kw, Mw] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", jw, Dw] }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  ui,
                  he,
                  de,
                ],
                radial: ["", he, de],
                conic: [ui, he, de],
              },
              Lw,
              Nw,
            ],
          },
        ],
        "bg-color": [{ bg: ee() }],
        "gradient-from-pos": [{ from: ce() }],
        "gradient-via-pos": [{ via: ce() }],
        "gradient-to-pos": [{ to: ce() }],
        "gradient-from": [{ from: ee() }],
        "gradient-via": [{ via: ee() }],
        "gradient-to": [{ to: ee() }],
        rounded: [{ rounded: _() }],
        "rounded-s": [{ "rounded-s": _() }],
        "rounded-e": [{ "rounded-e": _() }],
        "rounded-t": [{ "rounded-t": _() }],
        "rounded-r": [{ "rounded-r": _() }],
        "rounded-b": [{ "rounded-b": _() }],
        "rounded-l": [{ "rounded-l": _() }],
        "rounded-ss": [{ "rounded-ss": _() }],
        "rounded-se": [{ "rounded-se": _() }],
        "rounded-ee": [{ "rounded-ee": _() }],
        "rounded-es": [{ "rounded-es": _() }],
        "rounded-tl": [{ "rounded-tl": _() }],
        "rounded-tr": [{ "rounded-tr": _() }],
        "rounded-br": [{ "rounded-br": _() }],
        "rounded-bl": [{ "rounded-bl": _() }],
        "border-w": [{ border: Y() }],
        "border-w-x": [{ "border-x": Y() }],
        "border-w-y": [{ "border-y": Y() }],
        "border-w-s": [{ "border-s": Y() }],
        "border-w-e": [{ "border-e": Y() }],
        "border-w-t": [{ "border-t": Y() }],
        "border-w-r": [{ "border-r": Y() }],
        "border-w-b": [{ "border-b": Y() }],
        "border-w-l": [{ "border-l": Y() }],
        "divide-x": [{ "divide-x": Y() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": Y() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...te(), "hidden", "none"] }],
        "divide-style": [{ divide: [...te(), "hidden", "none"] }],
        "border-color": [{ border: ee() }],
        "border-color-x": [{ "border-x": ee() }],
        "border-color-y": [{ "border-y": ee() }],
        "border-color-s": [{ "border-s": ee() }],
        "border-color-e": [{ "border-e": ee() }],
        "border-color-t": [{ "border-t": ee() }],
        "border-color-r": [{ "border-r": ee() }],
        "border-color-b": [{ "border-b": ee() }],
        "border-color-l": [{ "border-l": ee() }],
        "divide-color": [{ divide: ee() }],
        "outline-style": [{ outline: [...te(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [Xe, he, de] }],
        "outline-w": [{ outline: ["", Xe, Zo, oi] }],
        "outline-color": [{ outline: [a] }],
        shadow: [{ shadow: ["", "none", g, Bw, zw] }],
        "shadow-color": [{ shadow: ee() }],
        "inset-shadow": [{ "inset-shadow": ["none", he, de, x] }],
        "inset-shadow-color": [{ "inset-shadow": ee() }],
        "ring-w": [{ ring: Y() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: ee() }],
        "ring-offset-w": [{ "ring-offset": [Xe, oi] }],
        "ring-offset-color": [{ "ring-offset": ee() }],
        "inset-ring-w": [{ "inset-ring": Y() }],
        "inset-ring-color": [{ "inset-ring": ee() }],
        opacity: [{ opacity: [Xe, he, de] }],
        "mix-blend": [
          { "mix-blend": [...ne(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": ne() }],
        filter: [{ filter: ["", "none", he, de] }],
        blur: [{ blur: J() }],
        brightness: [{ brightness: [Xe, he, de] }],
        contrast: [{ contrast: [Xe, he, de] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", A, he, de] }],
        grayscale: [{ grayscale: ["", Xe, he, de] }],
        "hue-rotate": [{ "hue-rotate": [Xe, he, de] }],
        invert: [{ invert: ["", Xe, he, de] }],
        saturate: [{ saturate: [Xe, he, de] }],
        sepia: [{ sepia: ["", Xe, he, de] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", he, de] }],
        "backdrop-blur": [{ "backdrop-blur": J() }],
        "backdrop-brightness": [{ "backdrop-brightness": [Xe, he, de] }],
        "backdrop-contrast": [{ "backdrop-contrast": [Xe, he, de] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", Xe, he, de] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [Xe, he, de] }],
        "backdrop-invert": [{ "backdrop-invert": ["", Xe, he, de] }],
        "backdrop-opacity": [{ "backdrop-opacity": [Xe, he, de] }],
        "backdrop-saturate": [{ "backdrop-saturate": [Xe, he, de] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", Xe, he, de] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": be() }],
        "border-spacing-x": [{ "border-spacing-x": be() }],
        "border-spacing-y": [{ "border-spacing-y": be() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              he,
              de,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [Xe, "initial", he, de] }],
        ease: [{ ease: ["linear", "initial", R, he, de] }],
        delay: [{ delay: [Xe, he, de] }],
        animate: [{ animate: ["none", j, he, de] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [T, he, de] }],
        "perspective-origin": [{ "perspective-origin": Re() }],
        rotate: [{ rotate: Te() }],
        "rotate-x": [{ "rotate-x": Te() }],
        "rotate-y": [{ "rotate-y": Te() }],
        "rotate-z": [{ "rotate-z": Te() }],
        scale: [{ scale: Ue() }],
        "scale-x": [{ "scale-x": Ue() }],
        "scale-y": [{ "scale-y": Ue() }],
        "scale-z": [{ "scale-z": Ue() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: je() }],
        "skew-x": [{ "skew-x": je() }],
        "skew-y": [{ "skew-y": je() }],
        transform: [{ transform: [he, de, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: Re() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: Je() }],
        "translate-x": [{ "translate-x": Je() }],
        "translate-y": [{ "translate-y": Je() }],
        "translate-z": [{ "translate-z": Je() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: ee() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: ee() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              he,
              de,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": be() }],
        "scroll-mx": [{ "scroll-mx": be() }],
        "scroll-my": [{ "scroll-my": be() }],
        "scroll-ms": [{ "scroll-ms": be() }],
        "scroll-me": [{ "scroll-me": be() }],
        "scroll-mt": [{ "scroll-mt": be() }],
        "scroll-mr": [{ "scroll-mr": be() }],
        "scroll-mb": [{ "scroll-mb": be() }],
        "scroll-ml": [{ "scroll-ml": be() }],
        "scroll-p": [{ "scroll-p": be() }],
        "scroll-px": [{ "scroll-px": be() }],
        "scroll-py": [{ "scroll-py": be() }],
        "scroll-ps": [{ "scroll-ps": be() }],
        "scroll-pe": [{ "scroll-pe": be() }],
        "scroll-pt": [{ "scroll-pt": be() }],
        "scroll-pr": [{ "scroll-pr": be() }],
        "scroll-pb": [{ "scroll-pb": be() }],
        "scroll-pl": [{ "scroll-pl": be() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", he, de],
          },
        ],
        fill: [{ fill: ["none", ...ee()] }],
        "stroke-w": [{ stroke: [Xe, Zo, oi, Xd] }],
        stroke: [{ stroke: ["none", ...ee()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "before",
        "after",
        "placeholder",
        "file",
        "marker",
        "selection",
        "first-line",
        "first-letter",
        "backdrop",
        "*",
        "**",
      ],
    };
  },
  Gw = vw(Qw);
function Lr(...a) {
  return Gw(Mb(a));
}
var Fw = Kv();
const Xw = Xv(Fw);
var Kw = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  $w = Kw.reduce((a, n) => {
    const i = N.forwardRef((s, u) => {
      const { asChild: c, ...d } = s,
        h = c ? vc : n;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        I.jsx(h, { ...d, ref: u })
      );
    });
    return (i.displayName = `Primitive.${n}`), { ...a, [n]: i };
  }, {}),
  Jw = "Label",
  Vb = N.forwardRef((a, n) =>
    I.jsx($w.label, {
      ...a,
      ref: n,
      onMouseDown: (i) => {
        var u;
        i.target.closest("button, input, select, textarea") ||
          ((u = a.onMouseDown) == null || u.call(a, i),
          !i.defaultPrevented && i.detail > 1 && i.preventDefault());
      },
    }),
  );
Vb.displayName = Jw;
var qb = Vb;
const lv = (a) => (typeof a == "boolean" ? `${a}` : a === 0 ? "0" : a),
  uv = Mb,
  Zb = (a, n) => (i) => {
    var s;
    if ((n == null ? void 0 : n.variants) == null)
      return uv(
        a,
        i == null ? void 0 : i.class,
        i == null ? void 0 : i.className,
      );
    const { variants: u, defaultVariants: c } = n,
      d = Object.keys(u).map((m) => {
        const g = i == null ? void 0 : i[m],
          x = c == null ? void 0 : c[m];
        if (g === null) return null;
        const A = lv(g) || lv(x);
        return u[m][A];
      }),
      h =
        i &&
        Object.entries(i).reduce((m, g) => {
          let [x, A] = g;
          return A === void 0 || (m[x] = A), m;
        }, {}),
      p =
        n == null || (s = n.compoundVariants) === null || s === void 0
          ? void 0
          : s.reduce((m, g) => {
              let { class: x, className: A, ...b } = g;
              return Object.entries(b).every((T) => {
                let [O, R] = T;
                return Array.isArray(R)
                  ? R.includes({ ...c, ...h }[O])
                  : { ...c, ...h }[O] === R;
              })
                ? [...m, x, A]
                : m;
            }, []);
    return uv(
      a,
      d,
      p,
      i == null ? void 0 : i.class,
      i == null ? void 0 : i.className,
    );
  },
  Pw = Zb(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  ),
  Yb = N.forwardRef(({ className: a, ...n }, i) =>
    I.jsx(qb, { ref: i, className: Lr(Pw(), a), ...n }),
  );
Yb.displayName = qb.displayName;
const Qb = Q_,
  Gb = N.createContext({}),
  nu = ({ ...a }) =>
    I.jsx(Gb.Provider, {
      value: { name: a.name },
      children: I.jsx(X_, { ...a }),
    }),
  Sc = () => {
    const a = N.useContext(Gb),
      n = N.useContext(Fb),
      { getFieldState: i, formState: s } = xc(),
      u = i(a.name, s);
    if (!a) throw new Error("useFormField should be used within <FormField>");
    const { id: c } = n;
    return {
      id: c,
      name: a.name,
      formItemId: `${c}-form-item`,
      formDescriptionId: `${c}-form-item-description`,
      formMessageId: `${c}-form-item-message`,
      ...u,
    };
  },
  Fb = N.createContext({}),
  bs = N.forwardRef(({ className: a, ...n }, i) => {
    const s = N.useId();
    return I.jsx(Fb.Provider, {
      value: { id: s },
      children: I.jsx("div", { ref: i, className: Lr("space-y-2", a), ...n }),
    });
  });
bs.displayName = "FormItem";
const xs = N.forwardRef(({ className: a, ...n }, i) => {
  const { error: s, formItemId: u } = Sc();
  return I.jsx(Yb, {
    ref: i,
    className: Lr(s && "text-destructive", a),
    htmlFor: u,
    ...n,
  });
});
xs.displayName = "FormLabel";
const Ss = N.forwardRef(({ ...a }, n) => {
  const {
    error: i,
    formItemId: s,
    formDescriptionId: u,
    formMessageId: c,
  } = Sc();
  return I.jsx(vc, {
    ref: n,
    id: s,
    "aria-describedby": i ? `${u} ${c}` : `${u}`,
    "aria-invalid": !!i,
    ...a,
  });
});
Ss.displayName = "FormControl";
const Ww = N.forwardRef(({ className: a, ...n }, i) => {
  const { formDescriptionId: s } = Sc();
  return I.jsx("p", {
    ref: i,
    id: s,
    className: Lr("text-[0.8rem] text-muted-foreground", a),
    ...n,
  });
});
Ww.displayName = "FormDescription";
const _s = N.forwardRef(({ className: a, children: n, ...i }, s) => {
  const { error: u, formMessageId: c } = Sc(),
    d = u ? String(u == null ? void 0 : u.message) : n;
  return d
    ? I.jsx("p", {
        ref: s,
        id: c,
        className: Lr("text-[0.8rem] font-medium text-destructive", a),
        ...i,
        children: d,
      })
    : null;
});
_s.displayName = "FormMessage";
const Gh = N.forwardRef(({ className: a, ...n }, i) => {
  const { errors: s } = xb(),
    u = s.root;
  return u
    ? I.jsx("p", {
        ref: i,
        className: Lr("mb-1 text-destructive text-sm font-medium", a),
        ...n,
        children: u.message,
      })
    : null;
});
Gh.displayName = "FormRootError";
const ws = N.forwardRef(({ className: a, type: n, ...i }, s) =>
  I.jsx("input", {
    type: n,
    className: Lr(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      a,
    ),
    ref: s,
    ...i,
  }),
);
ws.displayName = "Input";
const Iw = Zb(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline:
            "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  Fh = N.forwardRef(
    ({ className: a, variant: n, size: i, asChild: s = !1, ...u }, c) => {
      const d = s ? vc : "button";
      return I.jsx(d, {
        className: Lr(Iw({ variant: n, size: i, className: a })),
        ref: c,
        ...u,
      });
    },
  );
Fh.displayName = "Button";
const ov = (a, n, i) => {
    if (a && "reportValidity" in a) {
      const s = ie(i, n);
      a.setCustomValidity((s && s.message) || ""), a.reportValidity();
    }
  },
  Xb = (a, n) => {
    for (const i in n.fields) {
      const s = n.fields[i];
      s && s.ref && "reportValidity" in s.ref
        ? ov(s.ref, i, a)
        : s.refs && s.refs.forEach((u) => ov(u, i, a));
    }
  },
  eE = (a, n) => {
    n.shouldUseNativeValidation && Xb(a, n);
    const i = {};
    for (const s in a) {
      const u = ie(n.fields, s),
        c = Object.assign(a[s] || {}, { ref: u && u.ref });
      if (tE(n.names || Object.keys(a), s)) {
        const d = Object.assign({}, ie(i, s));
        rt(d, "root", c), rt(i, s, d);
      } else rt(i, s, c);
    }
    return i;
  },
  tE = (a, n) => a.some((i) => i.startsWith(n + "."));
var nE = function (a, n) {
    for (var i = {}; a.length; ) {
      var s = a[0],
        u = s.code,
        c = s.message,
        d = s.path.join(".");
      if (!i[d])
        if ("unionErrors" in s) {
          var h = s.unionErrors[0].errors[0];
          i[d] = { message: h.message, type: h.code };
        } else i[d] = { message: c, type: u };
      if (
        ("unionErrors" in s &&
          s.unionErrors.forEach(function (g) {
            return g.errors.forEach(function (x) {
              return a.push(x);
            });
          }),
        n)
      ) {
        var p = i[d].types,
          m = p && p[s.code];
        i[d] = _b(d, n, i, u, m ? [].concat(m, s.message) : s.message);
      }
      a.shift();
    }
    return i;
  },
  Kb = function (a, n, i) {
    return (
      i === void 0 && (i = {}),
      function (s, u, c) {
        try {
          return Promise.resolve(
            (function (d, h) {
              try {
                var p = Promise.resolve(
                  a[i.mode === "sync" ? "parse" : "parseAsync"](s, n),
                ).then(function (m) {
                  return (
                    c.shouldUseNativeValidation && Xb({}, c),
                    { errors: {}, values: i.raw ? s : m }
                  );
                });
              } catch (m) {
                return h(m);
              }
              return p && p.then ? p.then(void 0, h) : p;
            })(0, function (d) {
              if (
                (function (h) {
                  return Array.isArray(h == null ? void 0 : h.errors);
                })(d)
              )
                return {
                  values: {},
                  errors: eE(
                    nE(
                      d.errors,
                      !c.shouldUseNativeValidation && c.criteriaMode === "all",
                    ),
                    c,
                  ),
                };
              throw d;
            }),
          );
        } catch (d) {
          return Promise.reject(d);
        }
      }
    );
  },
  Ie;
(function (a) {
  a.assertEqual = (u) => u;
  function n(u) {}
  a.assertIs = n;
  function i(u) {
    throw new Error();
  }
  (a.assertNever = i),
    (a.arrayToEnum = (u) => {
      const c = {};
      for (const d of u) c[d] = d;
      return c;
    }),
    (a.getValidEnumValues = (u) => {
      const c = a.objectKeys(u).filter((h) => typeof u[u[h]] != "number"),
        d = {};
      for (const h of c) d[h] = u[h];
      return a.objectValues(d);
    }),
    (a.objectValues = (u) =>
      a.objectKeys(u).map(function (c) {
        return u[c];
      })),
    (a.objectKeys =
      typeof Object.keys == "function"
        ? (u) => Object.keys(u)
        : (u) => {
            const c = [];
            for (const d in u)
              Object.prototype.hasOwnProperty.call(u, d) && c.push(d);
            return c;
          }),
    (a.find = (u, c) => {
      for (const d of u) if (c(d)) return d;
    }),
    (a.isInteger =
      typeof Number.isInteger == "function"
        ? (u) => Number.isInteger(u)
        : (u) => typeof u == "number" && isFinite(u) && Math.floor(u) === u);
  function s(u, c = " | ") {
    return u.map((d) => (typeof d == "string" ? `'${d}'` : d)).join(c);
  }
  (a.joinValues = s),
    (a.jsonStringifyReplacer = (u, c) =>
      typeof c == "bigint" ? c.toString() : c);
})(Ie || (Ie = {}));
var lh;
(function (a) {
  a.mergeShapes = (n, i) => ({ ...n, ...i });
})(lh || (lh = {}));
const me = Ie.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  Ga = (a) => {
    switch (typeof a) {
      case "undefined":
        return me.undefined;
      case "string":
        return me.string;
      case "number":
        return isNaN(a) ? me.nan : me.number;
      case "boolean":
        return me.boolean;
      case "function":
        return me.function;
      case "bigint":
        return me.bigint;
      case "symbol":
        return me.symbol;
      case "object":
        return Array.isArray(a)
          ? me.array
          : a === null
            ? me.null
            : a.then &&
                typeof a.then == "function" &&
                a.catch &&
                typeof a.catch == "function"
              ? me.promise
              : typeof Map < "u" && a instanceof Map
                ? me.map
                : typeof Set < "u" && a instanceof Set
                  ? me.set
                  : typeof Date < "u" && a instanceof Date
                    ? me.date
                    : me.object;
      default:
        return me.unknown;
    }
  },
  P = Ie.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]),
  aE = (a) => JSON.stringify(a, null, 2).replace(/"([^"]+)":/g, "$1:");
class En extends Error {
  get errors() {
    return this.issues;
  }
  constructor(n) {
    super(),
      (this.issues = []),
      (this.addIssue = (s) => {
        this.issues = [...this.issues, s];
      }),
      (this.addIssues = (s = []) => {
        this.issues = [...this.issues, ...s];
      });
    const i = new.target.prototype;
    Object.setPrototypeOf
      ? Object.setPrototypeOf(this, i)
      : (this.__proto__ = i),
      (this.name = "ZodError"),
      (this.issues = n);
  }
  format(n) {
    const i =
        n ||
        function (c) {
          return c.message;
        },
      s = { _errors: [] },
      u = (c) => {
        for (const d of c.issues)
          if (d.code === "invalid_union") d.unionErrors.map(u);
          else if (d.code === "invalid_return_type") u(d.returnTypeError);
          else if (d.code === "invalid_arguments") u(d.argumentsError);
          else if (d.path.length === 0) s._errors.push(i(d));
          else {
            let h = s,
              p = 0;
            for (; p < d.path.length; ) {
              const m = d.path[p];
              p === d.path.length - 1
                ? ((h[m] = h[m] || { _errors: [] }), h[m]._errors.push(i(d)))
                : (h[m] = h[m] || { _errors: [] }),
                (h = h[m]),
                p++;
            }
          }
      };
    return u(this), s;
  }
  static assert(n) {
    if (!(n instanceof En)) throw new Error(`Not a ZodError: ${n}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Ie.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(n = (i) => i.message) {
    const i = {},
      s = [];
    for (const u of this.issues)
      u.path.length > 0
        ? ((i[u.path[0]] = i[u.path[0]] || []), i[u.path[0]].push(n(u)))
        : s.push(n(u));
    return { formErrors: s, fieldErrors: i };
  }
  get formErrors() {
    return this.flatten();
  }
}
En.create = (a) => new En(a);
const Hs = (a, n) => {
  let i;
  switch (a.code) {
    case P.invalid_type:
      a.received === me.undefined
        ? (i = "Required")
        : (i = `Expected ${a.expected}, received ${a.received}`);
      break;
    case P.invalid_literal:
      i = `Invalid literal value, expected ${JSON.stringify(a.expected, Ie.jsonStringifyReplacer)}`;
      break;
    case P.unrecognized_keys:
      i = `Unrecognized key(s) in object: ${Ie.joinValues(a.keys, ", ")}`;
      break;
    case P.invalid_union:
      i = "Invalid input";
      break;
    case P.invalid_union_discriminator:
      i = `Invalid discriminator value. Expected ${Ie.joinValues(a.options)}`;
      break;
    case P.invalid_enum_value:
      i = `Invalid enum value. Expected ${Ie.joinValues(a.options)}, received '${a.received}'`;
      break;
    case P.invalid_arguments:
      i = "Invalid function arguments";
      break;
    case P.invalid_return_type:
      i = "Invalid function return type";
      break;
    case P.invalid_date:
      i = "Invalid date";
      break;
    case P.invalid_string:
      typeof a.validation == "object"
        ? "includes" in a.validation
          ? ((i = `Invalid input: must include "${a.validation.includes}"`),
            typeof a.validation.position == "number" &&
              (i = `${i} at one or more positions greater than or equal to ${a.validation.position}`))
          : "startsWith" in a.validation
            ? (i = `Invalid input: must start with "${a.validation.startsWith}"`)
            : "endsWith" in a.validation
              ? (i = `Invalid input: must end with "${a.validation.endsWith}"`)
              : Ie.assertNever(a.validation)
        : a.validation !== "regex"
          ? (i = `Invalid ${a.validation}`)
          : (i = "Invalid");
      break;
    case P.too_small:
      a.type === "array"
        ? (i = `Array must contain ${a.exact ? "exactly" : a.inclusive ? "at least" : "more than"} ${a.minimum} element(s)`)
        : a.type === "string"
          ? (i = `String must contain ${a.exact ? "exactly" : a.inclusive ? "at least" : "over"} ${a.minimum} character(s)`)
          : a.type === "number"
            ? (i = `Number must be ${a.exact ? "exactly equal to " : a.inclusive ? "greater than or equal to " : "greater than "}${a.minimum}`)
            : a.type === "date"
              ? (i = `Date must be ${a.exact ? "exactly equal to " : a.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(a.minimum))}`)
              : (i = "Invalid input");
      break;
    case P.too_big:
      a.type === "array"
        ? (i = `Array must contain ${a.exact ? "exactly" : a.inclusive ? "at most" : "less than"} ${a.maximum} element(s)`)
        : a.type === "string"
          ? (i = `String must contain ${a.exact ? "exactly" : a.inclusive ? "at most" : "under"} ${a.maximum} character(s)`)
          : a.type === "number"
            ? (i = `Number must be ${a.exact ? "exactly" : a.inclusive ? "less than or equal to" : "less than"} ${a.maximum}`)
            : a.type === "bigint"
              ? (i = `BigInt must be ${a.exact ? "exactly" : a.inclusive ? "less than or equal to" : "less than"} ${a.maximum}`)
              : a.type === "date"
                ? (i = `Date must be ${a.exact ? "exactly" : a.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(a.maximum))}`)
                : (i = "Invalid input");
      break;
    case P.custom:
      i = "Invalid input";
      break;
    case P.invalid_intersection_types:
      i = "Intersection results could not be merged";
      break;
    case P.not_multiple_of:
      i = `Number must be a multiple of ${a.multipleOf}`;
      break;
    case P.not_finite:
      i = "Number must be finite";
      break;
    default:
      (i = n.defaultError), Ie.assertNever(a);
  }
  return { message: i };
};
let $b = Hs;
function rE(a) {
  $b = a;
}
function ac() {
  return $b;
}
const rc = (a) => {
    const { data: n, path: i, errorMaps: s, issueData: u } = a,
      c = [...i, ...(u.path || [])],
      d = { ...u, path: c };
    if (u.message !== void 0) return { ...u, path: c, message: u.message };
    let h = "";
    const p = s
      .filter((m) => !!m)
      .slice()
      .reverse();
    for (const m of p) h = m(d, { data: n, defaultError: h }).message;
    return { ...u, path: c, message: h };
  },
  iE = [];
function ue(a, n) {
  const i = ac(),
    s = rc({
      issueData: n,
      data: a.data,
      path: a.path,
      errorMaps: [
        a.common.contextualErrorMap,
        a.schemaErrorMap,
        i,
        i === Hs ? void 0 : Hs,
      ].filter((u) => !!u),
    });
  a.common.issues.push(s);
}
class Kt {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(n, i) {
    const s = [];
    for (const u of i) {
      if (u.status === "aborted") return Ne;
      u.status === "dirty" && n.dirty(), s.push(u.value);
    }
    return { status: n.value, value: s };
  }
  static async mergeObjectAsync(n, i) {
    const s = [];
    for (const u of i) {
      const c = await u.key,
        d = await u.value;
      s.push({ key: c, value: d });
    }
    return Kt.mergeObjectSync(n, s);
  }
  static mergeObjectSync(n, i) {
    const s = {};
    for (const u of i) {
      const { key: c, value: d } = u;
      if (c.status === "aborted" || d.status === "aborted") return Ne;
      c.status === "dirty" && n.dirty(),
        d.status === "dirty" && n.dirty(),
        c.value !== "__proto__" &&
          (typeof d.value < "u" || u.alwaysSet) &&
          (s[c.value] = d.value);
    }
    return { status: n.value, value: s };
  }
}
const Ne = Object.freeze({ status: "aborted" }),
  vs = (a) => ({ status: "dirty", value: a }),
  rn = (a) => ({ status: "valid", value: a }),
  uh = (a) => a.status === "aborted",
  oh = (a) => a.status === "dirty",
  wi = (a) => a.status === "valid",
  ru = (a) => typeof Promise < "u" && a instanceof Promise;
function ic(a, n, i, s) {
  if (typeof n == "function" ? a !== n || !0 : !n.has(a))
    throw new TypeError(
      "Cannot read private member from an object whose class did not declare it",
    );
  return n.get(a);
}
function Jb(a, n, i, s, u) {
  if (typeof n == "function" ? a !== n || !0 : !n.has(a))
    throw new TypeError(
      "Cannot write private member to an object whose class did not declare it",
    );
  return n.set(a, i), i;
}
var xe;
(function (a) {
  (a.errToObj = (n) => (typeof n == "string" ? { message: n } : n || {})),
    (a.toString = (n) =>
      typeof n == "string" ? n : n == null ? void 0 : n.message);
})(xe || (xe = {}));
var Pl, Wl;
class ba {
  constructor(n, i, s, u) {
    (this._cachedPath = []),
      (this.parent = n),
      (this.data = i),
      (this._path = s),
      (this._key = u);
  }
  get path() {
    return (
      this._cachedPath.length ||
        (this._key instanceof Array
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const cv = (a, n) => {
  if (wi(n)) return { success: !0, data: n.value };
  if (!a.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const i = new En(a.common.issues);
      return (this._error = i), this._error;
    },
  };
};
function He(a) {
  if (!a) return {};
  const {
    errorMap: n,
    invalid_type_error: i,
    required_error: s,
    description: u,
  } = a;
  if (n && (i || s))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
    );
  return n
    ? { errorMap: n, description: u }
    : {
        errorMap: (d, h) => {
          var p, m;
          const { message: g } = a;
          return d.code === "invalid_enum_value"
            ? { message: g ?? h.defaultError }
            : typeof h.data > "u"
              ? {
                  message:
                    (p = g ?? s) !== null && p !== void 0 ? p : h.defaultError,
                }
              : d.code !== "invalid_type"
                ? { message: h.defaultError }
                : {
                    message:
                      (m = g ?? i) !== null && m !== void 0
                        ? m
                        : h.defaultError,
                  };
        },
        description: u,
      };
}
class Ze {
  get description() {
    return this._def.description;
  }
  _getType(n) {
    return Ga(n.data);
  }
  _getOrReturnCtx(n, i) {
    return (
      i || {
        common: n.parent.common,
        data: n.data,
        parsedType: Ga(n.data),
        schemaErrorMap: this._def.errorMap,
        path: n.path,
        parent: n.parent,
      }
    );
  }
  _processInputParams(n) {
    return {
      status: new Kt(),
      ctx: {
        common: n.parent.common,
        data: n.data,
        parsedType: Ga(n.data),
        schemaErrorMap: this._def.errorMap,
        path: n.path,
        parent: n.parent,
      },
    };
  }
  _parseSync(n) {
    const i = this._parse(n);
    if (ru(i)) throw new Error("Synchronous parse encountered promise.");
    return i;
  }
  _parseAsync(n) {
    const i = this._parse(n);
    return Promise.resolve(i);
  }
  parse(n, i) {
    const s = this.safeParse(n, i);
    if (s.success) return s.data;
    throw s.error;
  }
  safeParse(n, i) {
    var s;
    const u = {
        common: {
          issues: [],
          async:
            (s = i == null ? void 0 : i.async) !== null && s !== void 0
              ? s
              : !1,
          contextualErrorMap: i == null ? void 0 : i.errorMap,
        },
        path: (i == null ? void 0 : i.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: n,
        parsedType: Ga(n),
      },
      c = this._parseSync({ data: n, path: u.path, parent: u });
    return cv(u, c);
  }
  "~validate"(n) {
    var i, s;
    const u = {
      common: { issues: [], async: !!this["~standard"].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: n,
      parsedType: Ga(n),
    };
    if (!this["~standard"].async)
      try {
        const c = this._parseSync({ data: n, path: [], parent: u });
        return wi(c) ? { value: c.value } : { issues: u.common.issues };
      } catch (c) {
        !(
          (s =
            (i = c == null ? void 0 : c.message) === null || i === void 0
              ? void 0
              : i.toLowerCase()) === null || s === void 0
        ) &&
          s.includes("encountered") &&
          (this["~standard"].async = !0),
          (u.common = { issues: [], async: !0 });
      }
    return this._parseAsync({ data: n, path: [], parent: u }).then((c) =>
      wi(c) ? { value: c.value } : { issues: u.common.issues },
    );
  }
  async parseAsync(n, i) {
    const s = await this.safeParseAsync(n, i);
    if (s.success) return s.data;
    throw s.error;
  }
  async safeParseAsync(n, i) {
    const s = {
        common: {
          issues: [],
          contextualErrorMap: i == null ? void 0 : i.errorMap,
          async: !0,
        },
        path: (i == null ? void 0 : i.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: n,
        parsedType: Ga(n),
      },
      u = this._parse({ data: n, path: s.path, parent: s }),
      c = await (ru(u) ? u : Promise.resolve(u));
    return cv(s, c);
  }
  refine(n, i) {
    const s = (u) =>
      typeof i == "string" || typeof i > "u"
        ? { message: i }
        : typeof i == "function"
          ? i(u)
          : i;
    return this._refinement((u, c) => {
      const d = n(u),
        h = () => c.addIssue({ code: P.custom, ...s(u) });
      return typeof Promise < "u" && d instanceof Promise
        ? d.then((p) => (p ? !0 : (h(), !1)))
        : d
          ? !0
          : (h(), !1);
    });
  }
  refinement(n, i) {
    return this._refinement((s, u) =>
      n(s) ? !0 : (u.addIssue(typeof i == "function" ? i(s, u) : i), !1),
    );
  }
  _refinement(n) {
    return new na({
      schema: this,
      typeName: Me.ZodEffects,
      effect: { type: "refinement", refinement: n },
    });
  }
  superRefine(n) {
    return this._refinement(n);
  }
  constructor(n) {
    (this.spa = this.safeParseAsync),
      (this._def = n),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this)),
      (this["~standard"] = {
        version: 1,
        vendor: "zod",
        validate: (i) => this["~validate"](i),
      });
  }
  optional() {
    return ga.create(this, this._def);
  }
  nullable() {
    return jr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ta.create(this);
  }
  promise() {
    return qs.create(this, this._def);
  }
  or(n) {
    return uu.create([this, n], this._def);
  }
  and(n) {
    return ou.create(this, n, this._def);
  }
  transform(n) {
    return new na({
      ...He(this._def),
      schema: this,
      typeName: Me.ZodEffects,
      effect: { type: "transform", transform: n },
    });
  }
  default(n) {
    const i = typeof n == "function" ? n : () => n;
    return new mu({
      ...He(this._def),
      innerType: this,
      defaultValue: i,
      typeName: Me.ZodDefault,
    });
  }
  brand() {
    return new Xh({ typeName: Me.ZodBranded, type: this, ...He(this._def) });
  }
  catch(n) {
    const i = typeof n == "function" ? n : () => n;
    return new pu({
      ...He(this._def),
      innerType: this,
      catchValue: i,
      typeName: Me.ZodCatch,
    });
  }
  describe(n) {
    const i = this.constructor;
    return new i({ ...this._def, description: n });
  }
  pipe(n) {
    return Au.create(this, n);
  }
  readonly() {
    return yu.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const sE = /^c[^\s-]{8,}$/i,
  lE = /^[0-9a-z]+$/,
  uE = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  oE =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  cE = /^[a-z0-9_-]{21}$/i,
  fE = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  dE =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  hE =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  mE = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Kd;
const pE =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  yE =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  gE =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  vE =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  bE = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  xE = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  Pb =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  SE = new RegExp(`^${Pb}$`);
function Wb(a) {
  let n = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return (
    a.precision
      ? (n = `${n}\\.\\d{${a.precision}}`)
      : a.precision == null && (n = `${n}(\\.\\d+)?`),
    n
  );
}
function _E(a) {
  return new RegExp(`^${Wb(a)}$`);
}
function Ib(a) {
  let n = `${Pb}T${Wb(a)}`;
  const i = [];
  return (
    i.push(a.local ? "Z?" : "Z"),
    a.offset && i.push("([+-]\\d{2}:?\\d{2})"),
    (n = `${n}(${i.join("|")})`),
    new RegExp(`^${n}$`)
  );
}
function wE(a, n) {
  return !!(
    ((n === "v4" || !n) && pE.test(a)) ||
    ((n === "v6" || !n) && gE.test(a))
  );
}
function EE(a, n) {
  if (!fE.test(a)) return !1;
  try {
    const [i] = a.split("."),
      s = i
        .replace(/-/g, "+")
        .replace(/_/g, "/")
        .padEnd(i.length + ((4 - (i.length % 4)) % 4), "="),
      u = JSON.parse(atob(s));
    return !(
      typeof u != "object" ||
      u === null ||
      !u.typ ||
      !u.alg ||
      (n && u.alg !== n)
    );
  } catch {
    return !1;
  }
}
function TE(a, n) {
  return !!(
    ((n === "v4" || !n) && yE.test(a)) ||
    ((n === "v6" || !n) && vE.test(a))
  );
}
class ea extends Ze {
  _parse(n) {
    if (
      (this._def.coerce && (n.data = String(n.data)),
      this._getType(n) !== me.string)
    ) {
      const c = this._getOrReturnCtx(n);
      return (
        ue(c, {
          code: P.invalid_type,
          expected: me.string,
          received: c.parsedType,
        }),
        Ne
      );
    }
    const s = new Kt();
    let u;
    for (const c of this._def.checks)
      if (c.kind === "min")
        n.data.length < c.value &&
          ((u = this._getOrReturnCtx(n, u)),
          ue(u, {
            code: P.too_small,
            minimum: c.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: c.message,
          }),
          s.dirty());
      else if (c.kind === "max")
        n.data.length > c.value &&
          ((u = this._getOrReturnCtx(n, u)),
          ue(u, {
            code: P.too_big,
            maximum: c.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: c.message,
          }),
          s.dirty());
      else if (c.kind === "length") {
        const d = n.data.length > c.value,
          h = n.data.length < c.value;
        (d || h) &&
          ((u = this._getOrReturnCtx(n, u)),
          d
            ? ue(u, {
                code: P.too_big,
                maximum: c.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: c.message,
              })
            : h &&
              ue(u, {
                code: P.too_small,
                minimum: c.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: c.message,
              }),
          s.dirty());
      } else if (c.kind === "email")
        hE.test(n.data) ||
          ((u = this._getOrReturnCtx(n, u)),
          ue(u, {
            validation: "email",
            code: P.invalid_string,
            message: c.message,
          }),
          s.dirty());
      else if (c.kind === "emoji")
        Kd || (Kd = new RegExp(mE, "u")),
          Kd.test(n.data) ||
            ((u = this._getOrReturnCtx(n, u)),
            ue(u, {
              validation: "emoji",
              code: P.invalid_string,
              message: c.message,
            }),
            s.dirty());
      else if (c.kind === "uuid")
        oE.test(n.data) ||
          ((u = this._getOrReturnCtx(n, u)),
          ue(u, {
            validation: "uuid",
            code: P.invalid_string,
            message: c.message,
          }),
          s.dirty());
      else if (c.kind === "nanoid")
        cE.test(n.data) ||
          ((u = this._getOrReturnCtx(n, u)),
          ue(u, {
            validation: "nanoid",
            code: P.invalid_string,
            message: c.message,
          }),
          s.dirty());
      else if (c.kind === "cuid")
        sE.test(n.data) ||
          ((u = this._getOrReturnCtx(n, u)),
          ue(u, {
            validation: "cuid",
            code: P.invalid_string,
            message: c.message,
          }),
          s.dirty());
      else if (c.kind === "cuid2")
        lE.test(n.data) ||
          ((u = this._getOrReturnCtx(n, u)),
          ue(u, {
            validation: "cuid2",
            code: P.invalid_string,
            message: c.message,
          }),
          s.dirty());
      else if (c.kind === "ulid")
        uE.test(n.data) ||
          ((u = this._getOrReturnCtx(n, u)),
          ue(u, {
            validation: "ulid",
            code: P.invalid_string,
            message: c.message,
          }),
          s.dirty());
      else if (c.kind === "url")
        try {
          new URL(n.data);
        } catch {
          (u = this._getOrReturnCtx(n, u)),
            ue(u, {
              validation: "url",
              code: P.invalid_string,
              message: c.message,
            }),
            s.dirty();
        }
      else
        c.kind === "regex"
          ? ((c.regex.lastIndex = 0),
            c.regex.test(n.data) ||
              ((u = this._getOrReturnCtx(n, u)),
              ue(u, {
                validation: "regex",
                code: P.invalid_string,
                message: c.message,
              }),
              s.dirty()))
          : c.kind === "trim"
            ? (n.data = n.data.trim())
            : c.kind === "includes"
              ? n.data.includes(c.value, c.position) ||
                ((u = this._getOrReturnCtx(n, u)),
                ue(u, {
                  code: P.invalid_string,
                  validation: { includes: c.value, position: c.position },
                  message: c.message,
                }),
                s.dirty())
              : c.kind === "toLowerCase"
                ? (n.data = n.data.toLowerCase())
                : c.kind === "toUpperCase"
                  ? (n.data = n.data.toUpperCase())
                  : c.kind === "startsWith"
                    ? n.data.startsWith(c.value) ||
                      ((u = this._getOrReturnCtx(n, u)),
                      ue(u, {
                        code: P.invalid_string,
                        validation: { startsWith: c.value },
                        message: c.message,
                      }),
                      s.dirty())
                    : c.kind === "endsWith"
                      ? n.data.endsWith(c.value) ||
                        ((u = this._getOrReturnCtx(n, u)),
                        ue(u, {
                          code: P.invalid_string,
                          validation: { endsWith: c.value },
                          message: c.message,
                        }),
                        s.dirty())
                      : c.kind === "datetime"
                        ? Ib(c).test(n.data) ||
                          ((u = this._getOrReturnCtx(n, u)),
                          ue(u, {
                            code: P.invalid_string,
                            validation: "datetime",
                            message: c.message,
                          }),
                          s.dirty())
                        : c.kind === "date"
                          ? SE.test(n.data) ||
                            ((u = this._getOrReturnCtx(n, u)),
                            ue(u, {
                              code: P.invalid_string,
                              validation: "date",
                              message: c.message,
                            }),
                            s.dirty())
                          : c.kind === "time"
                            ? _E(c).test(n.data) ||
                              ((u = this._getOrReturnCtx(n, u)),
                              ue(u, {
                                code: P.invalid_string,
                                validation: "time",
                                message: c.message,
                              }),
                              s.dirty())
                            : c.kind === "duration"
                              ? dE.test(n.data) ||
                                ((u = this._getOrReturnCtx(n, u)),
                                ue(u, {
                                  validation: "duration",
                                  code: P.invalid_string,
                                  message: c.message,
                                }),
                                s.dirty())
                              : c.kind === "ip"
                                ? wE(n.data, c.version) ||
                                  ((u = this._getOrReturnCtx(n, u)),
                                  ue(u, {
                                    validation: "ip",
                                    code: P.invalid_string,
                                    message: c.message,
                                  }),
                                  s.dirty())
                                : c.kind === "jwt"
                                  ? EE(n.data, c.alg) ||
                                    ((u = this._getOrReturnCtx(n, u)),
                                    ue(u, {
                                      validation: "jwt",
                                      code: P.invalid_string,
                                      message: c.message,
                                    }),
                                    s.dirty())
                                  : c.kind === "cidr"
                                    ? TE(n.data, c.version) ||
                                      ((u = this._getOrReturnCtx(n, u)),
                                      ue(u, {
                                        validation: "cidr",
                                        code: P.invalid_string,
                                        message: c.message,
                                      }),
                                      s.dirty())
                                    : c.kind === "base64"
                                      ? bE.test(n.data) ||
                                        ((u = this._getOrReturnCtx(n, u)),
                                        ue(u, {
                                          validation: "base64",
                                          code: P.invalid_string,
                                          message: c.message,
                                        }),
                                        s.dirty())
                                      : c.kind === "base64url"
                                        ? xE.test(n.data) ||
                                          ((u = this._getOrReturnCtx(n, u)),
                                          ue(u, {
                                            validation: "base64url",
                                            code: P.invalid_string,
                                            message: c.message,
                                          }),
                                          s.dirty())
                                        : Ie.assertNever(c);
    return { status: s.value, value: n.data };
  }
  _regex(n, i, s) {
    return this.refinement((u) => n.test(u), {
      validation: i,
      code: P.invalid_string,
      ...xe.errToObj(s),
    });
  }
  _addCheck(n) {
    return new ea({ ...this._def, checks: [...this._def.checks, n] });
  }
  email(n) {
    return this._addCheck({ kind: "email", ...xe.errToObj(n) });
  }
  url(n) {
    return this._addCheck({ kind: "url", ...xe.errToObj(n) });
  }
  emoji(n) {
    return this._addCheck({ kind: "emoji", ...xe.errToObj(n) });
  }
  uuid(n) {
    return this._addCheck({ kind: "uuid", ...xe.errToObj(n) });
  }
  nanoid(n) {
    return this._addCheck({ kind: "nanoid", ...xe.errToObj(n) });
  }
  cuid(n) {
    return this._addCheck({ kind: "cuid", ...xe.errToObj(n) });
  }
  cuid2(n) {
    return this._addCheck({ kind: "cuid2", ...xe.errToObj(n) });
  }
  ulid(n) {
    return this._addCheck({ kind: "ulid", ...xe.errToObj(n) });
  }
  base64(n) {
    return this._addCheck({ kind: "base64", ...xe.errToObj(n) });
  }
  base64url(n) {
    return this._addCheck({ kind: "base64url", ...xe.errToObj(n) });
  }
  jwt(n) {
    return this._addCheck({ kind: "jwt", ...xe.errToObj(n) });
  }
  ip(n) {
    return this._addCheck({ kind: "ip", ...xe.errToObj(n) });
  }
  cidr(n) {
    return this._addCheck({ kind: "cidr", ...xe.errToObj(n) });
  }
  datetime(n) {
    var i, s;
    return typeof n == "string"
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          local: !1,
          message: n,
        })
      : this._addCheck({
          kind: "datetime",
          precision:
            typeof (n == null ? void 0 : n.precision) > "u"
              ? null
              : n == null
                ? void 0
                : n.precision,
          offset:
            (i = n == null ? void 0 : n.offset) !== null && i !== void 0
              ? i
              : !1,
          local:
            (s = n == null ? void 0 : n.local) !== null && s !== void 0
              ? s
              : !1,
          ...xe.errToObj(n == null ? void 0 : n.message),
        });
  }
  date(n) {
    return this._addCheck({ kind: "date", message: n });
  }
  time(n) {
    return typeof n == "string"
      ? this._addCheck({ kind: "time", precision: null, message: n })
      : this._addCheck({
          kind: "time",
          precision:
            typeof (n == null ? void 0 : n.precision) > "u"
              ? null
              : n == null
                ? void 0
                : n.precision,
          ...xe.errToObj(n == null ? void 0 : n.message),
        });
  }
  duration(n) {
    return this._addCheck({ kind: "duration", ...xe.errToObj(n) });
  }
  regex(n, i) {
    return this._addCheck({ kind: "regex", regex: n, ...xe.errToObj(i) });
  }
  includes(n, i) {
    return this._addCheck({
      kind: "includes",
      value: n,
      position: i == null ? void 0 : i.position,
      ...xe.errToObj(i == null ? void 0 : i.message),
    });
  }
  startsWith(n, i) {
    return this._addCheck({ kind: "startsWith", value: n, ...xe.errToObj(i) });
  }
  endsWith(n, i) {
    return this._addCheck({ kind: "endsWith", value: n, ...xe.errToObj(i) });
  }
  min(n, i) {
    return this._addCheck({ kind: "min", value: n, ...xe.errToObj(i) });
  }
  max(n, i) {
    return this._addCheck({ kind: "max", value: n, ...xe.errToObj(i) });
  }
  length(n, i) {
    return this._addCheck({ kind: "length", value: n, ...xe.errToObj(i) });
  }
  nonempty(n) {
    return this.min(1, xe.errToObj(n));
  }
  trim() {
    return new ea({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new ea({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new ea({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((n) => n.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((n) => n.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((n) => n.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((n) => n.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((n) => n.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((n) => n.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((n) => n.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((n) => n.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((n) => n.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((n) => n.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((n) => n.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((n) => n.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((n) => n.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((n) => n.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((n) => n.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((n) => n.kind === "base64url");
  }
  get minLength() {
    let n = null;
    for (const i of this._def.checks)
      i.kind === "min" && (n === null || i.value > n) && (n = i.value);
    return n;
  }
  get maxLength() {
    let n = null;
    for (const i of this._def.checks)
      i.kind === "max" && (n === null || i.value < n) && (n = i.value);
    return n;
  }
}
ea.create = (a) => {
  var n;
  return new ea({
    checks: [],
    typeName: Me.ZodString,
    coerce:
      (n = a == null ? void 0 : a.coerce) !== null && n !== void 0 ? n : !1,
    ...He(a),
  });
};
function RE(a, n) {
  const i = (a.toString().split(".")[1] || "").length,
    s = (n.toString().split(".")[1] || "").length,
    u = i > s ? i : s,
    c = parseInt(a.toFixed(u).replace(".", "")),
    d = parseInt(n.toFixed(u).replace(".", ""));
  return (c % d) / Math.pow(10, u);
}
class zr extends Ze {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(n) {
    if (
      (this._def.coerce && (n.data = Number(n.data)),
      this._getType(n) !== me.number)
    ) {
      const c = this._getOrReturnCtx(n);
      return (
        ue(c, {
          code: P.invalid_type,
          expected: me.number,
          received: c.parsedType,
        }),
        Ne
      );
    }
    let s;
    const u = new Kt();
    for (const c of this._def.checks)
      c.kind === "int"
        ? Ie.isInteger(n.data) ||
          ((s = this._getOrReturnCtx(n, s)),
          ue(s, {
            code: P.invalid_type,
            expected: "integer",
            received: "float",
            message: c.message,
          }),
          u.dirty())
        : c.kind === "min"
          ? (c.inclusive ? n.data < c.value : n.data <= c.value) &&
            ((s = this._getOrReturnCtx(n, s)),
            ue(s, {
              code: P.too_small,
              minimum: c.value,
              type: "number",
              inclusive: c.inclusive,
              exact: !1,
              message: c.message,
            }),
            u.dirty())
          : c.kind === "max"
            ? (c.inclusive ? n.data > c.value : n.data >= c.value) &&
              ((s = this._getOrReturnCtx(n, s)),
              ue(s, {
                code: P.too_big,
                maximum: c.value,
                type: "number",
                inclusive: c.inclusive,
                exact: !1,
                message: c.message,
              }),
              u.dirty())
            : c.kind === "multipleOf"
              ? RE(n.data, c.value) !== 0 &&
                ((s = this._getOrReturnCtx(n, s)),
                ue(s, {
                  code: P.not_multiple_of,
                  multipleOf: c.value,
                  message: c.message,
                }),
                u.dirty())
              : c.kind === "finite"
                ? Number.isFinite(n.data) ||
                  ((s = this._getOrReturnCtx(n, s)),
                  ue(s, { code: P.not_finite, message: c.message }),
                  u.dirty())
                : Ie.assertNever(c);
    return { status: u.value, value: n.data };
  }
  gte(n, i) {
    return this.setLimit("min", n, !0, xe.toString(i));
  }
  gt(n, i) {
    return this.setLimit("min", n, !1, xe.toString(i));
  }
  lte(n, i) {
    return this.setLimit("max", n, !0, xe.toString(i));
  }
  lt(n, i) {
    return this.setLimit("max", n, !1, xe.toString(i));
  }
  setLimit(n, i, s, u) {
    return new zr({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: n, value: i, inclusive: s, message: xe.toString(u) },
      ],
    });
  }
  _addCheck(n) {
    return new zr({ ...this._def, checks: [...this._def.checks, n] });
  }
  int(n) {
    return this._addCheck({ kind: "int", message: xe.toString(n) });
  }
  positive(n) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: xe.toString(n),
    });
  }
  negative(n) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: xe.toString(n),
    });
  }
  nonpositive(n) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: xe.toString(n),
    });
  }
  nonnegative(n) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: xe.toString(n),
    });
  }
  multipleOf(n, i) {
    return this._addCheck({
      kind: "multipleOf",
      value: n,
      message: xe.toString(i),
    });
  }
  finite(n) {
    return this._addCheck({ kind: "finite", message: xe.toString(n) });
  }
  safe(n) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: xe.toString(n),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: xe.toString(n),
    });
  }
  get minValue() {
    let n = null;
    for (const i of this._def.checks)
      i.kind === "min" && (n === null || i.value > n) && (n = i.value);
    return n;
  }
  get maxValue() {
    let n = null;
    for (const i of this._def.checks)
      i.kind === "max" && (n === null || i.value < n) && (n = i.value);
    return n;
  }
  get isInt() {
    return !!this._def.checks.find(
      (n) =>
        n.kind === "int" || (n.kind === "multipleOf" && Ie.isInteger(n.value)),
    );
  }
  get isFinite() {
    let n = null,
      i = null;
    for (const s of this._def.checks) {
      if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf")
        return !0;
      s.kind === "min"
        ? (i === null || s.value > i) && (i = s.value)
        : s.kind === "max" && (n === null || s.value < n) && (n = s.value);
    }
    return Number.isFinite(i) && Number.isFinite(n);
  }
}
zr.create = (a) =>
  new zr({
    checks: [],
    typeName: Me.ZodNumber,
    coerce: (a == null ? void 0 : a.coerce) || !1,
    ...He(a),
  });
class Ur extends Ze {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(n) {
    if (this._def.coerce)
      try {
        n.data = BigInt(n.data);
      } catch {
        return this._getInvalidInput(n);
      }
    if (this._getType(n) !== me.bigint) return this._getInvalidInput(n);
    let s;
    const u = new Kt();
    for (const c of this._def.checks)
      c.kind === "min"
        ? (c.inclusive ? n.data < c.value : n.data <= c.value) &&
          ((s = this._getOrReturnCtx(n, s)),
          ue(s, {
            code: P.too_small,
            type: "bigint",
            minimum: c.value,
            inclusive: c.inclusive,
            message: c.message,
          }),
          u.dirty())
        : c.kind === "max"
          ? (c.inclusive ? n.data > c.value : n.data >= c.value) &&
            ((s = this._getOrReturnCtx(n, s)),
            ue(s, {
              code: P.too_big,
              type: "bigint",
              maximum: c.value,
              inclusive: c.inclusive,
              message: c.message,
            }),
            u.dirty())
          : c.kind === "multipleOf"
            ? n.data % c.value !== BigInt(0) &&
              ((s = this._getOrReturnCtx(n, s)),
              ue(s, {
                code: P.not_multiple_of,
                multipleOf: c.value,
                message: c.message,
              }),
              u.dirty())
            : Ie.assertNever(c);
    return { status: u.value, value: n.data };
  }
  _getInvalidInput(n) {
    const i = this._getOrReturnCtx(n);
    return (
      ue(i, {
        code: P.invalid_type,
        expected: me.bigint,
        received: i.parsedType,
      }),
      Ne
    );
  }
  gte(n, i) {
    return this.setLimit("min", n, !0, xe.toString(i));
  }
  gt(n, i) {
    return this.setLimit("min", n, !1, xe.toString(i));
  }
  lte(n, i) {
    return this.setLimit("max", n, !0, xe.toString(i));
  }
  lt(n, i) {
    return this.setLimit("max", n, !1, xe.toString(i));
  }
  setLimit(n, i, s, u) {
    return new Ur({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: n, value: i, inclusive: s, message: xe.toString(u) },
      ],
    });
  }
  _addCheck(n) {
    return new Ur({ ...this._def, checks: [...this._def.checks, n] });
  }
  positive(n) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: xe.toString(n),
    });
  }
  negative(n) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: xe.toString(n),
    });
  }
  nonpositive(n) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: xe.toString(n),
    });
  }
  nonnegative(n) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: xe.toString(n),
    });
  }
  multipleOf(n, i) {
    return this._addCheck({
      kind: "multipleOf",
      value: n,
      message: xe.toString(i),
    });
  }
  get minValue() {
    let n = null;
    for (const i of this._def.checks)
      i.kind === "min" && (n === null || i.value > n) && (n = i.value);
    return n;
  }
  get maxValue() {
    let n = null;
    for (const i of this._def.checks)
      i.kind === "max" && (n === null || i.value < n) && (n = i.value);
    return n;
  }
}
Ur.create = (a) => {
  var n;
  return new Ur({
    checks: [],
    typeName: Me.ZodBigInt,
    coerce:
      (n = a == null ? void 0 : a.coerce) !== null && n !== void 0 ? n : !1,
    ...He(a),
  });
};
class iu extends Ze {
  _parse(n) {
    if (
      (this._def.coerce && (n.data = !!n.data), this._getType(n) !== me.boolean)
    ) {
      const s = this._getOrReturnCtx(n);
      return (
        ue(s, {
          code: P.invalid_type,
          expected: me.boolean,
          received: s.parsedType,
        }),
        Ne
      );
    }
    return rn(n.data);
  }
}
iu.create = (a) =>
  new iu({
    typeName: Me.ZodBoolean,
    coerce: (a == null ? void 0 : a.coerce) || !1,
    ...He(a),
  });
class Ei extends Ze {
  _parse(n) {
    if (
      (this._def.coerce && (n.data = new Date(n.data)),
      this._getType(n) !== me.date)
    ) {
      const c = this._getOrReturnCtx(n);
      return (
        ue(c, {
          code: P.invalid_type,
          expected: me.date,
          received: c.parsedType,
        }),
        Ne
      );
    }
    if (isNaN(n.data.getTime())) {
      const c = this._getOrReturnCtx(n);
      return ue(c, { code: P.invalid_date }), Ne;
    }
    const s = new Kt();
    let u;
    for (const c of this._def.checks)
      c.kind === "min"
        ? n.data.getTime() < c.value &&
          ((u = this._getOrReturnCtx(n, u)),
          ue(u, {
            code: P.too_small,
            message: c.message,
            inclusive: !0,
            exact: !1,
            minimum: c.value,
            type: "date",
          }),
          s.dirty())
        : c.kind === "max"
          ? n.data.getTime() > c.value &&
            ((u = this._getOrReturnCtx(n, u)),
            ue(u, {
              code: P.too_big,
              message: c.message,
              inclusive: !0,
              exact: !1,
              maximum: c.value,
              type: "date",
            }),
            s.dirty())
          : Ie.assertNever(c);
    return { status: s.value, value: new Date(n.data.getTime()) };
  }
  _addCheck(n) {
    return new Ei({ ...this._def, checks: [...this._def.checks, n] });
  }
  min(n, i) {
    return this._addCheck({
      kind: "min",
      value: n.getTime(),
      message: xe.toString(i),
    });
  }
  max(n, i) {
    return this._addCheck({
      kind: "max",
      value: n.getTime(),
      message: xe.toString(i),
    });
  }
  get minDate() {
    let n = null;
    for (const i of this._def.checks)
      i.kind === "min" && (n === null || i.value > n) && (n = i.value);
    return n != null ? new Date(n) : null;
  }
  get maxDate() {
    let n = null;
    for (const i of this._def.checks)
      i.kind === "max" && (n === null || i.value < n) && (n = i.value);
    return n != null ? new Date(n) : null;
  }
}
Ei.create = (a) =>
  new Ei({
    checks: [],
    coerce: (a == null ? void 0 : a.coerce) || !1,
    typeName: Me.ZodDate,
    ...He(a),
  });
class sc extends Ze {
  _parse(n) {
    if (this._getType(n) !== me.symbol) {
      const s = this._getOrReturnCtx(n);
      return (
        ue(s, {
          code: P.invalid_type,
          expected: me.symbol,
          received: s.parsedType,
        }),
        Ne
      );
    }
    return rn(n.data);
  }
}
sc.create = (a) => new sc({ typeName: Me.ZodSymbol, ...He(a) });
class su extends Ze {
  _parse(n) {
    if (this._getType(n) !== me.undefined) {
      const s = this._getOrReturnCtx(n);
      return (
        ue(s, {
          code: P.invalid_type,
          expected: me.undefined,
          received: s.parsedType,
        }),
        Ne
      );
    }
    return rn(n.data);
  }
}
su.create = (a) => new su({ typeName: Me.ZodUndefined, ...He(a) });
class lu extends Ze {
  _parse(n) {
    if (this._getType(n) !== me.null) {
      const s = this._getOrReturnCtx(n);
      return (
        ue(s, {
          code: P.invalid_type,
          expected: me.null,
          received: s.parsedType,
        }),
        Ne
      );
    }
    return rn(n.data);
  }
}
lu.create = (a) => new lu({ typeName: Me.ZodNull, ...He(a) });
class Vs extends Ze {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(n) {
    return rn(n.data);
  }
}
Vs.create = (a) => new Vs({ typeName: Me.ZodAny, ...He(a) });
class Si extends Ze {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(n) {
    return rn(n.data);
  }
}
Si.create = (a) => new Si({ typeName: Me.ZodUnknown, ...He(a) });
class Ja extends Ze {
  _parse(n) {
    const i = this._getOrReturnCtx(n);
    return (
      ue(i, {
        code: P.invalid_type,
        expected: me.never,
        received: i.parsedType,
      }),
      Ne
    );
  }
}
Ja.create = (a) => new Ja({ typeName: Me.ZodNever, ...He(a) });
class lc extends Ze {
  _parse(n) {
    if (this._getType(n) !== me.undefined) {
      const s = this._getOrReturnCtx(n);
      return (
        ue(s, {
          code: P.invalid_type,
          expected: me.void,
          received: s.parsedType,
        }),
        Ne
      );
    }
    return rn(n.data);
  }
}
lc.create = (a) => new lc({ typeName: Me.ZodVoid, ...He(a) });
class ta extends Ze {
  _parse(n) {
    const { ctx: i, status: s } = this._processInputParams(n),
      u = this._def;
    if (i.parsedType !== me.array)
      return (
        ue(i, {
          code: P.invalid_type,
          expected: me.array,
          received: i.parsedType,
        }),
        Ne
      );
    if (u.exactLength !== null) {
      const d = i.data.length > u.exactLength.value,
        h = i.data.length < u.exactLength.value;
      (d || h) &&
        (ue(i, {
          code: d ? P.too_big : P.too_small,
          minimum: h ? u.exactLength.value : void 0,
          maximum: d ? u.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: u.exactLength.message,
        }),
        s.dirty());
    }
    if (
      (u.minLength !== null &&
        i.data.length < u.minLength.value &&
        (ue(i, {
          code: P.too_small,
          minimum: u.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: u.minLength.message,
        }),
        s.dirty()),
      u.maxLength !== null &&
        i.data.length > u.maxLength.value &&
        (ue(i, {
          code: P.too_big,
          maximum: u.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: u.maxLength.message,
        }),
        s.dirty()),
      i.common.async)
    )
      return Promise.all(
        [...i.data].map((d, h) => u.type._parseAsync(new ba(i, d, i.path, h))),
      ).then((d) => Kt.mergeArray(s, d));
    const c = [...i.data].map((d, h) =>
      u.type._parseSync(new ba(i, d, i.path, h)),
    );
    return Kt.mergeArray(s, c);
  }
  get element() {
    return this._def.type;
  }
  min(n, i) {
    return new ta({
      ...this._def,
      minLength: { value: n, message: xe.toString(i) },
    });
  }
  max(n, i) {
    return new ta({
      ...this._def,
      maxLength: { value: n, message: xe.toString(i) },
    });
  }
  length(n, i) {
    return new ta({
      ...this._def,
      exactLength: { value: n, message: xe.toString(i) },
    });
  }
  nonempty(n) {
    return this.min(1, n);
  }
}
ta.create = (a, n) =>
  new ta({
    type: a,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: Me.ZodArray,
    ...He(n),
  });
function gs(a) {
  if (a instanceof pt) {
    const n = {};
    for (const i in a.shape) {
      const s = a.shape[i];
      n[i] = ga.create(gs(s));
    }
    return new pt({ ...a._def, shape: () => n });
  } else
    return a instanceof ta
      ? new ta({ ...a._def, type: gs(a.element) })
      : a instanceof ga
        ? ga.create(gs(a.unwrap()))
        : a instanceof jr
          ? jr.create(gs(a.unwrap()))
          : a instanceof xa
            ? xa.create(a.items.map((n) => gs(n)))
            : a;
}
class pt extends Ze {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const n = this._def.shape(),
      i = Ie.objectKeys(n);
    return (this._cached = { shape: n, keys: i });
  }
  _parse(n) {
    if (this._getType(n) !== me.object) {
      const m = this._getOrReturnCtx(n);
      return (
        ue(m, {
          code: P.invalid_type,
          expected: me.object,
          received: m.parsedType,
        }),
        Ne
      );
    }
    const { status: s, ctx: u } = this._processInputParams(n),
      { shape: c, keys: d } = this._getCached(),
      h = [];
    if (
      !(this._def.catchall instanceof Ja && this._def.unknownKeys === "strip")
    )
      for (const m in u.data) d.includes(m) || h.push(m);
    const p = [];
    for (const m of d) {
      const g = c[m],
        x = u.data[m];
      p.push({
        key: { status: "valid", value: m },
        value: g._parse(new ba(u, x, u.path, m)),
        alwaysSet: m in u.data,
      });
    }
    if (this._def.catchall instanceof Ja) {
      const m = this._def.unknownKeys;
      if (m === "passthrough")
        for (const g of h)
          p.push({
            key: { status: "valid", value: g },
            value: { status: "valid", value: u.data[g] },
          });
      else if (m === "strict")
        h.length > 0 &&
          (ue(u, { code: P.unrecognized_keys, keys: h }), s.dirty());
      else if (m !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const m = this._def.catchall;
      for (const g of h) {
        const x = u.data[g];
        p.push({
          key: { status: "valid", value: g },
          value: m._parse(new ba(u, x, u.path, g)),
          alwaysSet: g in u.data,
        });
      }
    }
    return u.common.async
      ? Promise.resolve()
          .then(async () => {
            const m = [];
            for (const g of p) {
              const x = await g.key,
                A = await g.value;
              m.push({ key: x, value: A, alwaysSet: g.alwaysSet });
            }
            return m;
          })
          .then((m) => Kt.mergeObjectSync(s, m))
      : Kt.mergeObjectSync(s, p);
  }
  get shape() {
    return this._def.shape();
  }
  strict(n) {
    return (
      xe.errToObj,
      new pt({
        ...this._def,
        unknownKeys: "strict",
        ...(n !== void 0
          ? {
              errorMap: (i, s) => {
                var u, c, d, h;
                const p =
                  (d =
                    (c = (u = this._def).errorMap) === null || c === void 0
                      ? void 0
                      : c.call(u, i, s).message) !== null && d !== void 0
                    ? d
                    : s.defaultError;
                return i.code === "unrecognized_keys"
                  ? {
                      message:
                        (h = xe.errToObj(n).message) !== null && h !== void 0
                          ? h
                          : p,
                    }
                  : { message: p };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new pt({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new pt({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(n) {
    return new pt({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...n }),
    });
  }
  merge(n) {
    return new pt({
      unknownKeys: n._def.unknownKeys,
      catchall: n._def.catchall,
      shape: () => ({ ...this._def.shape(), ...n._def.shape() }),
      typeName: Me.ZodObject,
    });
  }
  setKey(n, i) {
    return this.augment({ [n]: i });
  }
  catchall(n) {
    return new pt({ ...this._def, catchall: n });
  }
  pick(n) {
    const i = {};
    return (
      Ie.objectKeys(n).forEach((s) => {
        n[s] && this.shape[s] && (i[s] = this.shape[s]);
      }),
      new pt({ ...this._def, shape: () => i })
    );
  }
  omit(n) {
    const i = {};
    return (
      Ie.objectKeys(this.shape).forEach((s) => {
        n[s] || (i[s] = this.shape[s]);
      }),
      new pt({ ...this._def, shape: () => i })
    );
  }
  deepPartial() {
    return gs(this);
  }
  partial(n) {
    const i = {};
    return (
      Ie.objectKeys(this.shape).forEach((s) => {
        const u = this.shape[s];
        n && !n[s] ? (i[s] = u) : (i[s] = u.optional());
      }),
      new pt({ ...this._def, shape: () => i })
    );
  }
  required(n) {
    const i = {};
    return (
      Ie.objectKeys(this.shape).forEach((s) => {
        if (n && !n[s]) i[s] = this.shape[s];
        else {
          let c = this.shape[s];
          for (; c instanceof ga; ) c = c._def.innerType;
          i[s] = c;
        }
      }),
      new pt({ ...this._def, shape: () => i })
    );
  }
  keyof() {
    return e0(Ie.objectKeys(this.shape));
  }
}
pt.create = (a, n) =>
  new pt({
    shape: () => a,
    unknownKeys: "strip",
    catchall: Ja.create(),
    typeName: Me.ZodObject,
    ...He(n),
  });
pt.strictCreate = (a, n) =>
  new pt({
    shape: () => a,
    unknownKeys: "strict",
    catchall: Ja.create(),
    typeName: Me.ZodObject,
    ...He(n),
  });
pt.lazycreate = (a, n) =>
  new pt({
    shape: a,
    unknownKeys: "strip",
    catchall: Ja.create(),
    typeName: Me.ZodObject,
    ...He(n),
  });
class uu extends Ze {
  _parse(n) {
    const { ctx: i } = this._processInputParams(n),
      s = this._def.options;
    function u(c) {
      for (const h of c) if (h.result.status === "valid") return h.result;
      for (const h of c)
        if (h.result.status === "dirty")
          return i.common.issues.push(...h.ctx.common.issues), h.result;
      const d = c.map((h) => new En(h.ctx.common.issues));
      return ue(i, { code: P.invalid_union, unionErrors: d }), Ne;
    }
    if (i.common.async)
      return Promise.all(
        s.map(async (c) => {
          const d = { ...i, common: { ...i.common, issues: [] }, parent: null };
          return {
            result: await c._parseAsync({
              data: i.data,
              path: i.path,
              parent: d,
            }),
            ctx: d,
          };
        }),
      ).then(u);
    {
      let c;
      const d = [];
      for (const p of s) {
        const m = { ...i, common: { ...i.common, issues: [] }, parent: null },
          g = p._parseSync({ data: i.data, path: i.path, parent: m });
        if (g.status === "valid") return g;
        g.status === "dirty" && !c && (c = { result: g, ctx: m }),
          m.common.issues.length && d.push(m.common.issues);
      }
      if (c) return i.common.issues.push(...c.ctx.common.issues), c.result;
      const h = d.map((p) => new En(p));
      return ue(i, { code: P.invalid_union, unionErrors: h }), Ne;
    }
  }
  get options() {
    return this._def.options;
  }
}
uu.create = (a, n) => new uu({ options: a, typeName: Me.ZodUnion, ...He(n) });
const Ya = (a) =>
  a instanceof fu
    ? Ya(a.schema)
    : a instanceof na
      ? Ya(a.innerType())
      : a instanceof du
        ? [a.value]
        : a instanceof kr
          ? a.options
          : a instanceof hu
            ? Ie.objectValues(a.enum)
            : a instanceof mu
              ? Ya(a._def.innerType)
              : a instanceof su
                ? [void 0]
                : a instanceof lu
                  ? [null]
                  : a instanceof ga
                    ? [void 0, ...Ya(a.unwrap())]
                    : a instanceof jr
                      ? [null, ...Ya(a.unwrap())]
                      : a instanceof Xh || a instanceof yu
                        ? Ya(a.unwrap())
                        : a instanceof pu
                          ? Ya(a._def.innerType)
                          : [];
class _c extends Ze {
  _parse(n) {
    const { ctx: i } = this._processInputParams(n);
    if (i.parsedType !== me.object)
      return (
        ue(i, {
          code: P.invalid_type,
          expected: me.object,
          received: i.parsedType,
        }),
        Ne
      );
    const s = this.discriminator,
      u = i.data[s],
      c = this.optionsMap.get(u);
    return c
      ? i.common.async
        ? c._parseAsync({ data: i.data, path: i.path, parent: i })
        : c._parseSync({ data: i.data, path: i.path, parent: i })
      : (ue(i, {
          code: P.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [s],
        }),
        Ne);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(n, i, s) {
    const u = new Map();
    for (const c of i) {
      const d = Ya(c.shape[n]);
      if (!d.length)
        throw new Error(
          `A discriminator value for key \`${n}\` could not be extracted from all schema options`,
        );
      for (const h of d) {
        if (u.has(h))
          throw new Error(
            `Discriminator property ${String(n)} has duplicate value ${String(h)}`,
          );
        u.set(h, c);
      }
    }
    return new _c({
      typeName: Me.ZodDiscriminatedUnion,
      discriminator: n,
      options: i,
      optionsMap: u,
      ...He(s),
    });
  }
}
function ch(a, n) {
  const i = Ga(a),
    s = Ga(n);
  if (a === n) return { valid: !0, data: a };
  if (i === me.object && s === me.object) {
    const u = Ie.objectKeys(n),
      c = Ie.objectKeys(a).filter((h) => u.indexOf(h) !== -1),
      d = { ...a, ...n };
    for (const h of c) {
      const p = ch(a[h], n[h]);
      if (!p.valid) return { valid: !1 };
      d[h] = p.data;
    }
    return { valid: !0, data: d };
  } else if (i === me.array && s === me.array) {
    if (a.length !== n.length) return { valid: !1 };
    const u = [];
    for (let c = 0; c < a.length; c++) {
      const d = a[c],
        h = n[c],
        p = ch(d, h);
      if (!p.valid) return { valid: !1 };
      u.push(p.data);
    }
    return { valid: !0, data: u };
  } else
    return i === me.date && s === me.date && +a == +n
      ? { valid: !0, data: a }
      : { valid: !1 };
}
class ou extends Ze {
  _parse(n) {
    const { status: i, ctx: s } = this._processInputParams(n),
      u = (c, d) => {
        if (uh(c) || uh(d)) return Ne;
        const h = ch(c.value, d.value);
        return h.valid
          ? ((oh(c) || oh(d)) && i.dirty(), { status: i.value, value: h.data })
          : (ue(s, { code: P.invalid_intersection_types }), Ne);
      };
    return s.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: s.data, path: s.path, parent: s }),
          this._def.right._parseAsync({
            data: s.data,
            path: s.path,
            parent: s,
          }),
        ]).then(([c, d]) => u(c, d))
      : u(
          this._def.left._parseSync({ data: s.data, path: s.path, parent: s }),
          this._def.right._parseSync({ data: s.data, path: s.path, parent: s }),
        );
  }
}
ou.create = (a, n, i) =>
  new ou({ left: a, right: n, typeName: Me.ZodIntersection, ...He(i) });
class xa extends Ze {
  _parse(n) {
    const { status: i, ctx: s } = this._processInputParams(n);
    if (s.parsedType !== me.array)
      return (
        ue(s, {
          code: P.invalid_type,
          expected: me.array,
          received: s.parsedType,
        }),
        Ne
      );
    if (s.data.length < this._def.items.length)
      return (
        ue(s, {
          code: P.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        Ne
      );
    !this._def.rest &&
      s.data.length > this._def.items.length &&
      (ue(s, {
        code: P.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      i.dirty());
    const c = [...s.data]
      .map((d, h) => {
        const p = this._def.items[h] || this._def.rest;
        return p ? p._parse(new ba(s, d, s.path, h)) : null;
      })
      .filter((d) => !!d);
    return s.common.async
      ? Promise.all(c).then((d) => Kt.mergeArray(i, d))
      : Kt.mergeArray(i, c);
  }
  get items() {
    return this._def.items;
  }
  rest(n) {
    return new xa({ ...this._def, rest: n });
  }
}
xa.create = (a, n) => {
  if (!Array.isArray(a))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new xa({ items: a, typeName: Me.ZodTuple, rest: null, ...He(n) });
};
class cu extends Ze {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(n) {
    const { status: i, ctx: s } = this._processInputParams(n);
    if (s.parsedType !== me.object)
      return (
        ue(s, {
          code: P.invalid_type,
          expected: me.object,
          received: s.parsedType,
        }),
        Ne
      );
    const u = [],
      c = this._def.keyType,
      d = this._def.valueType;
    for (const h in s.data)
      u.push({
        key: c._parse(new ba(s, h, s.path, h)),
        value: d._parse(new ba(s, s.data[h], s.path, h)),
        alwaysSet: h in s.data,
      });
    return s.common.async
      ? Kt.mergeObjectAsync(i, u)
      : Kt.mergeObjectSync(i, u);
  }
  get element() {
    return this._def.valueType;
  }
  static create(n, i, s) {
    return i instanceof Ze
      ? new cu({ keyType: n, valueType: i, typeName: Me.ZodRecord, ...He(s) })
      : new cu({
          keyType: ea.create(),
          valueType: n,
          typeName: Me.ZodRecord,
          ...He(i),
        });
  }
}
class uc extends Ze {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(n) {
    const { status: i, ctx: s } = this._processInputParams(n);
    if (s.parsedType !== me.map)
      return (
        ue(s, {
          code: P.invalid_type,
          expected: me.map,
          received: s.parsedType,
        }),
        Ne
      );
    const u = this._def.keyType,
      c = this._def.valueType,
      d = [...s.data.entries()].map(([h, p], m) => ({
        key: u._parse(new ba(s, h, s.path, [m, "key"])),
        value: c._parse(new ba(s, p, s.path, [m, "value"])),
      }));
    if (s.common.async) {
      const h = new Map();
      return Promise.resolve().then(async () => {
        for (const p of d) {
          const m = await p.key,
            g = await p.value;
          if (m.status === "aborted" || g.status === "aborted") return Ne;
          (m.status === "dirty" || g.status === "dirty") && i.dirty(),
            h.set(m.value, g.value);
        }
        return { status: i.value, value: h };
      });
    } else {
      const h = new Map();
      for (const p of d) {
        const m = p.key,
          g = p.value;
        if (m.status === "aborted" || g.status === "aborted") return Ne;
        (m.status === "dirty" || g.status === "dirty") && i.dirty(),
          h.set(m.value, g.value);
      }
      return { status: i.value, value: h };
    }
  }
}
uc.create = (a, n, i) =>
  new uc({ valueType: n, keyType: a, typeName: Me.ZodMap, ...He(i) });
class Ti extends Ze {
  _parse(n) {
    const { status: i, ctx: s } = this._processInputParams(n);
    if (s.parsedType !== me.set)
      return (
        ue(s, {
          code: P.invalid_type,
          expected: me.set,
          received: s.parsedType,
        }),
        Ne
      );
    const u = this._def;
    u.minSize !== null &&
      s.data.size < u.minSize.value &&
      (ue(s, {
        code: P.too_small,
        minimum: u.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: u.minSize.message,
      }),
      i.dirty()),
      u.maxSize !== null &&
        s.data.size > u.maxSize.value &&
        (ue(s, {
          code: P.too_big,
          maximum: u.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: u.maxSize.message,
        }),
        i.dirty());
    const c = this._def.valueType;
    function d(p) {
      const m = new Set();
      for (const g of p) {
        if (g.status === "aborted") return Ne;
        g.status === "dirty" && i.dirty(), m.add(g.value);
      }
      return { status: i.value, value: m };
    }
    const h = [...s.data.values()].map((p, m) =>
      c._parse(new ba(s, p, s.path, m)),
    );
    return s.common.async ? Promise.all(h).then((p) => d(p)) : d(h);
  }
  min(n, i) {
    return new Ti({
      ...this._def,
      minSize: { value: n, message: xe.toString(i) },
    });
  }
  max(n, i) {
    return new Ti({
      ...this._def,
      maxSize: { value: n, message: xe.toString(i) },
    });
  }
  size(n, i) {
    return this.min(n, i).max(n, i);
  }
  nonempty(n) {
    return this.min(1, n);
  }
}
Ti.create = (a, n) =>
  new Ti({
    valueType: a,
    minSize: null,
    maxSize: null,
    typeName: Me.ZodSet,
    ...He(n),
  });
class Es extends Ze {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(n) {
    const { ctx: i } = this._processInputParams(n);
    if (i.parsedType !== me.function)
      return (
        ue(i, {
          code: P.invalid_type,
          expected: me.function,
          received: i.parsedType,
        }),
        Ne
      );
    function s(h, p) {
      return rc({
        data: h,
        path: i.path,
        errorMaps: [
          i.common.contextualErrorMap,
          i.schemaErrorMap,
          ac(),
          Hs,
        ].filter((m) => !!m),
        issueData: { code: P.invalid_arguments, argumentsError: p },
      });
    }
    function u(h, p) {
      return rc({
        data: h,
        path: i.path,
        errorMaps: [
          i.common.contextualErrorMap,
          i.schemaErrorMap,
          ac(),
          Hs,
        ].filter((m) => !!m),
        issueData: { code: P.invalid_return_type, returnTypeError: p },
      });
    }
    const c = { errorMap: i.common.contextualErrorMap },
      d = i.data;
    if (this._def.returns instanceof qs) {
      const h = this;
      return rn(async function (...p) {
        const m = new En([]),
          g = await h._def.args.parseAsync(p, c).catch((b) => {
            throw (m.addIssue(s(p, b)), m);
          }),
          x = await Reflect.apply(d, this, g);
        return await h._def.returns._def.type.parseAsync(x, c).catch((b) => {
          throw (m.addIssue(u(x, b)), m);
        });
      });
    } else {
      const h = this;
      return rn(function (...p) {
        const m = h._def.args.safeParse(p, c);
        if (!m.success) throw new En([s(p, m.error)]);
        const g = Reflect.apply(d, this, m.data),
          x = h._def.returns.safeParse(g, c);
        if (!x.success) throw new En([u(g, x.error)]);
        return x.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...n) {
    return new Es({ ...this._def, args: xa.create(n).rest(Si.create()) });
  }
  returns(n) {
    return new Es({ ...this._def, returns: n });
  }
  implement(n) {
    return this.parse(n);
  }
  strictImplement(n) {
    return this.parse(n);
  }
  static create(n, i, s) {
    return new Es({
      args: n || xa.create([]).rest(Si.create()),
      returns: i || Si.create(),
      typeName: Me.ZodFunction,
      ...He(s),
    });
  }
}
class fu extends Ze {
  get schema() {
    return this._def.getter();
  }
  _parse(n) {
    const { ctx: i } = this._processInputParams(n);
    return this._def.getter()._parse({ data: i.data, path: i.path, parent: i });
  }
}
fu.create = (a, n) => new fu({ getter: a, typeName: Me.ZodLazy, ...He(n) });
class du extends Ze {
  _parse(n) {
    if (n.data !== this._def.value) {
      const i = this._getOrReturnCtx(n);
      return (
        ue(i, {
          received: i.data,
          code: P.invalid_literal,
          expected: this._def.value,
        }),
        Ne
      );
    }
    return { status: "valid", value: n.data };
  }
  get value() {
    return this._def.value;
  }
}
du.create = (a, n) => new du({ value: a, typeName: Me.ZodLiteral, ...He(n) });
function e0(a, n) {
  return new kr({ values: a, typeName: Me.ZodEnum, ...He(n) });
}
class kr extends Ze {
  constructor() {
    super(...arguments), Pl.set(this, void 0);
  }
  _parse(n) {
    if (typeof n.data != "string") {
      const i = this._getOrReturnCtx(n),
        s = this._def.values;
      return (
        ue(i, {
          expected: Ie.joinValues(s),
          received: i.parsedType,
          code: P.invalid_type,
        }),
        Ne
      );
    }
    if (
      (ic(this, Pl) || Jb(this, Pl, new Set(this._def.values)),
      !ic(this, Pl).has(n.data))
    ) {
      const i = this._getOrReturnCtx(n),
        s = this._def.values;
      return (
        ue(i, { received: i.data, code: P.invalid_enum_value, options: s }), Ne
      );
    }
    return rn(n.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const n = {};
    for (const i of this._def.values) n[i] = i;
    return n;
  }
  get Values() {
    const n = {};
    for (const i of this._def.values) n[i] = i;
    return n;
  }
  get Enum() {
    const n = {};
    for (const i of this._def.values) n[i] = i;
    return n;
  }
  extract(n, i = this._def) {
    return kr.create(n, { ...this._def, ...i });
  }
  exclude(n, i = this._def) {
    return kr.create(
      this.options.filter((s) => !n.includes(s)),
      { ...this._def, ...i },
    );
  }
}
Pl = new WeakMap();
kr.create = e0;
class hu extends Ze {
  constructor() {
    super(...arguments), Wl.set(this, void 0);
  }
  _parse(n) {
    const i = Ie.getValidEnumValues(this._def.values),
      s = this._getOrReturnCtx(n);
    if (s.parsedType !== me.string && s.parsedType !== me.number) {
      const u = Ie.objectValues(i);
      return (
        ue(s, {
          expected: Ie.joinValues(u),
          received: s.parsedType,
          code: P.invalid_type,
        }),
        Ne
      );
    }
    if (
      (ic(this, Wl) ||
        Jb(this, Wl, new Set(Ie.getValidEnumValues(this._def.values))),
      !ic(this, Wl).has(n.data))
    ) {
      const u = Ie.objectValues(i);
      return (
        ue(s, { received: s.data, code: P.invalid_enum_value, options: u }), Ne
      );
    }
    return rn(n.data);
  }
  get enum() {
    return this._def.values;
  }
}
Wl = new WeakMap();
hu.create = (a, n) =>
  new hu({ values: a, typeName: Me.ZodNativeEnum, ...He(n) });
class qs extends Ze {
  unwrap() {
    return this._def.type;
  }
  _parse(n) {
    const { ctx: i } = this._processInputParams(n);
    if (i.parsedType !== me.promise && i.common.async === !1)
      return (
        ue(i, {
          code: P.invalid_type,
          expected: me.promise,
          received: i.parsedType,
        }),
        Ne
      );
    const s = i.parsedType === me.promise ? i.data : Promise.resolve(i.data);
    return rn(
      s.then((u) =>
        this._def.type.parseAsync(u, {
          path: i.path,
          errorMap: i.common.contextualErrorMap,
        }),
      ),
    );
  }
}
qs.create = (a, n) => new qs({ type: a, typeName: Me.ZodPromise, ...He(n) });
class na extends Ze {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Me.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(n) {
    const { status: i, ctx: s } = this._processInputParams(n),
      u = this._def.effect || null,
      c = {
        addIssue: (d) => {
          ue(s, d), d.fatal ? i.abort() : i.dirty();
        },
        get path() {
          return s.path;
        },
      };
    if (((c.addIssue = c.addIssue.bind(c)), u.type === "preprocess")) {
      const d = u.transform(s.data, c);
      if (s.common.async)
        return Promise.resolve(d).then(async (h) => {
          if (i.value === "aborted") return Ne;
          const p = await this._def.schema._parseAsync({
            data: h,
            path: s.path,
            parent: s,
          });
          return p.status === "aborted"
            ? Ne
            : p.status === "dirty" || i.value === "dirty"
              ? vs(p.value)
              : p;
        });
      {
        if (i.value === "aborted") return Ne;
        const h = this._def.schema._parseSync({
          data: d,
          path: s.path,
          parent: s,
        });
        return h.status === "aborted"
          ? Ne
          : h.status === "dirty" || i.value === "dirty"
            ? vs(h.value)
            : h;
      }
    }
    if (u.type === "refinement") {
      const d = (h) => {
        const p = u.refinement(h, c);
        if (s.common.async) return Promise.resolve(p);
        if (p instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return h;
      };
      if (s.common.async === !1) {
        const h = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s,
        });
        return h.status === "aborted"
          ? Ne
          : (h.status === "dirty" && i.dirty(),
            d(h.value),
            { status: i.value, value: h.value });
      } else
        return this._def.schema
          ._parseAsync({ data: s.data, path: s.path, parent: s })
          .then((h) =>
            h.status === "aborted"
              ? Ne
              : (h.status === "dirty" && i.dirty(),
                d(h.value).then(() => ({ status: i.value, value: h.value }))),
          );
    }
    if (u.type === "transform")
      if (s.common.async === !1) {
        const d = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s,
        });
        if (!wi(d)) return d;
        const h = u.transform(d.value, c);
        if (h instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return { status: i.value, value: h };
      } else
        return this._def.schema
          ._parseAsync({ data: s.data, path: s.path, parent: s })
          .then((d) =>
            wi(d)
              ? Promise.resolve(u.transform(d.value, c)).then((h) => ({
                  status: i.value,
                  value: h,
                }))
              : d,
          );
    Ie.assertNever(u);
  }
}
na.create = (a, n, i) =>
  new na({ schema: a, typeName: Me.ZodEffects, effect: n, ...He(i) });
na.createWithPreprocess = (a, n, i) =>
  new na({
    schema: n,
    effect: { type: "preprocess", transform: a },
    typeName: Me.ZodEffects,
    ...He(i),
  });
class ga extends Ze {
  _parse(n) {
    return this._getType(n) === me.undefined
      ? rn(void 0)
      : this._def.innerType._parse(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ga.create = (a, n) =>
  new ga({ innerType: a, typeName: Me.ZodOptional, ...He(n) });
class jr extends Ze {
  _parse(n) {
    return this._getType(n) === me.null
      ? rn(null)
      : this._def.innerType._parse(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
jr.create = (a, n) =>
  new jr({ innerType: a, typeName: Me.ZodNullable, ...He(n) });
class mu extends Ze {
  _parse(n) {
    const { ctx: i } = this._processInputParams(n);
    let s = i.data;
    return (
      i.parsedType === me.undefined && (s = this._def.defaultValue()),
      this._def.innerType._parse({ data: s, path: i.path, parent: i })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
mu.create = (a, n) =>
  new mu({
    innerType: a,
    typeName: Me.ZodDefault,
    defaultValue: typeof n.default == "function" ? n.default : () => n.default,
    ...He(n),
  });
class pu extends Ze {
  _parse(n) {
    const { ctx: i } = this._processInputParams(n),
      s = { ...i, common: { ...i.common, issues: [] } },
      u = this._def.innerType._parse({
        data: s.data,
        path: s.path,
        parent: { ...s },
      });
    return ru(u)
      ? u.then((c) => ({
          status: "valid",
          value:
            c.status === "valid"
              ? c.value
              : this._def.catchValue({
                  get error() {
                    return new En(s.common.issues);
                  },
                  input: s.data,
                }),
        }))
      : {
          status: "valid",
          value:
            u.status === "valid"
              ? u.value
              : this._def.catchValue({
                  get error() {
                    return new En(s.common.issues);
                  },
                  input: s.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
pu.create = (a, n) =>
  new pu({
    innerType: a,
    typeName: Me.ZodCatch,
    catchValue: typeof n.catch == "function" ? n.catch : () => n.catch,
    ...He(n),
  });
class oc extends Ze {
  _parse(n) {
    if (this._getType(n) !== me.nan) {
      const s = this._getOrReturnCtx(n);
      return (
        ue(s, {
          code: P.invalid_type,
          expected: me.nan,
          received: s.parsedType,
        }),
        Ne
      );
    }
    return { status: "valid", value: n.data };
  }
}
oc.create = (a) => new oc({ typeName: Me.ZodNaN, ...He(a) });
const AE = Symbol("zod_brand");
class Xh extends Ze {
  _parse(n) {
    const { ctx: i } = this._processInputParams(n),
      s = i.data;
    return this._def.type._parse({ data: s, path: i.path, parent: i });
  }
  unwrap() {
    return this._def.type;
  }
}
class Au extends Ze {
  _parse(n) {
    const { status: i, ctx: s } = this._processInputParams(n);
    if (s.common.async)
      return (async () => {
        const c = await this._def.in._parseAsync({
          data: s.data,
          path: s.path,
          parent: s,
        });
        return c.status === "aborted"
          ? Ne
          : c.status === "dirty"
            ? (i.dirty(), vs(c.value))
            : this._def.out._parseAsync({
                data: c.value,
                path: s.path,
                parent: s,
              });
      })();
    {
      const u = this._def.in._parseSync({
        data: s.data,
        path: s.path,
        parent: s,
      });
      return u.status === "aborted"
        ? Ne
        : u.status === "dirty"
          ? (i.dirty(), { status: "dirty", value: u.value })
          : this._def.out._parseSync({
              data: u.value,
              path: s.path,
              parent: s,
            });
    }
  }
  static create(n, i) {
    return new Au({ in: n, out: i, typeName: Me.ZodPipeline });
  }
}
class yu extends Ze {
  _parse(n) {
    const i = this._def.innerType._parse(n),
      s = (u) => (wi(u) && (u.value = Object.freeze(u.value)), u);
    return ru(i) ? i.then((u) => s(u)) : s(i);
  }
  unwrap() {
    return this._def.innerType;
  }
}
yu.create = (a, n) =>
  new yu({ innerType: a, typeName: Me.ZodReadonly, ...He(n) });
function t0(a, n = {}, i) {
  return a
    ? Vs.create().superRefine((s, u) => {
        var c, d;
        if (!a(s)) {
          const h =
              typeof n == "function"
                ? n(s)
                : typeof n == "string"
                  ? { message: n }
                  : n,
            p =
              (d = (c = h.fatal) !== null && c !== void 0 ? c : i) !== null &&
              d !== void 0
                ? d
                : !0,
            m = typeof h == "string" ? { message: h } : h;
          u.addIssue({ code: "custom", ...m, fatal: p });
        }
      })
    : Vs.create();
}
const OE = { object: pt.lazycreate };
var Me;
(function (a) {
  (a.ZodString = "ZodString"),
    (a.ZodNumber = "ZodNumber"),
    (a.ZodNaN = "ZodNaN"),
    (a.ZodBigInt = "ZodBigInt"),
    (a.ZodBoolean = "ZodBoolean"),
    (a.ZodDate = "ZodDate"),
    (a.ZodSymbol = "ZodSymbol"),
    (a.ZodUndefined = "ZodUndefined"),
    (a.ZodNull = "ZodNull"),
    (a.ZodAny = "ZodAny"),
    (a.ZodUnknown = "ZodUnknown"),
    (a.ZodNever = "ZodNever"),
    (a.ZodVoid = "ZodVoid"),
    (a.ZodArray = "ZodArray"),
    (a.ZodObject = "ZodObject"),
    (a.ZodUnion = "ZodUnion"),
    (a.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (a.ZodIntersection = "ZodIntersection"),
    (a.ZodTuple = "ZodTuple"),
    (a.ZodRecord = "ZodRecord"),
    (a.ZodMap = "ZodMap"),
    (a.ZodSet = "ZodSet"),
    (a.ZodFunction = "ZodFunction"),
    (a.ZodLazy = "ZodLazy"),
    (a.ZodLiteral = "ZodLiteral"),
    (a.ZodEnum = "ZodEnum"),
    (a.ZodEffects = "ZodEffects"),
    (a.ZodNativeEnum = "ZodNativeEnum"),
    (a.ZodOptional = "ZodOptional"),
    (a.ZodNullable = "ZodNullable"),
    (a.ZodDefault = "ZodDefault"),
    (a.ZodCatch = "ZodCatch"),
    (a.ZodPromise = "ZodPromise"),
    (a.ZodBranded = "ZodBranded"),
    (a.ZodPipeline = "ZodPipeline"),
    (a.ZodReadonly = "ZodReadonly");
})(Me || (Me = {}));
const CE = (a, n = { message: `Input not instance of ${a.name}` }) =>
    t0((i) => i instanceof a, n),
  n0 = ea.create,
  a0 = zr.create,
  DE = oc.create,
  ME = Ur.create,
  r0 = iu.create,
  NE = Ei.create,
  zE = sc.create,
  UE = su.create,
  kE = lu.create,
  jE = Vs.create,
  LE = Si.create,
  BE = Ja.create,
  HE = lc.create,
  VE = ta.create,
  qE = pt.create,
  ZE = pt.strictCreate,
  YE = uu.create,
  QE = _c.create,
  GE = ou.create,
  FE = xa.create,
  XE = cu.create,
  KE = uc.create,
  $E = Ti.create,
  JE = Es.create,
  PE = fu.create,
  WE = du.create,
  IE = kr.create,
  eT = hu.create,
  tT = qs.create,
  fv = na.create,
  nT = ga.create,
  aT = jr.create,
  rT = na.createWithPreprocess,
  iT = Au.create,
  sT = () => n0().optional(),
  lT = () => a0().optional(),
  uT = () => r0().optional(),
  oT = {
    string: (a) => ea.create({ ...a, coerce: !0 }),
    number: (a) => zr.create({ ...a, coerce: !0 }),
    boolean: (a) => iu.create({ ...a, coerce: !0 }),
    bigint: (a) => Ur.create({ ...a, coerce: !0 }),
    date: (a) => Ei.create({ ...a, coerce: !0 }),
  },
  cT = Ne;
var fi = Object.freeze({
  __proto__: null,
  defaultErrorMap: Hs,
  setErrorMap: rE,
  getErrorMap: ac,
  makeIssue: rc,
  EMPTY_PATH: iE,
  addIssueToContext: ue,
  ParseStatus: Kt,
  INVALID: Ne,
  DIRTY: vs,
  OK: rn,
  isAborted: uh,
  isDirty: oh,
  isValid: wi,
  isAsync: ru,
  get util() {
    return Ie;
  },
  get objectUtil() {
    return lh;
  },
  ZodParsedType: me,
  getParsedType: Ga,
  ZodType: Ze,
  datetimeRegex: Ib,
  ZodString: ea,
  ZodNumber: zr,
  ZodBigInt: Ur,
  ZodBoolean: iu,
  ZodDate: Ei,
  ZodSymbol: sc,
  ZodUndefined: su,
  ZodNull: lu,
  ZodAny: Vs,
  ZodUnknown: Si,
  ZodNever: Ja,
  ZodVoid: lc,
  ZodArray: ta,
  ZodObject: pt,
  ZodUnion: uu,
  ZodDiscriminatedUnion: _c,
  ZodIntersection: ou,
  ZodTuple: xa,
  ZodRecord: cu,
  ZodMap: uc,
  ZodSet: Ti,
  ZodFunction: Es,
  ZodLazy: fu,
  ZodLiteral: du,
  ZodEnum: kr,
  ZodNativeEnum: hu,
  ZodPromise: qs,
  ZodEffects: na,
  ZodTransformer: na,
  ZodOptional: ga,
  ZodNullable: jr,
  ZodDefault: mu,
  ZodCatch: pu,
  ZodNaN: oc,
  BRAND: AE,
  ZodBranded: Xh,
  ZodPipeline: Au,
  ZodReadonly: yu,
  custom: t0,
  Schema: Ze,
  ZodSchema: Ze,
  late: OE,
  get ZodFirstPartyTypeKind() {
    return Me;
  },
  coerce: oT,
  any: jE,
  array: VE,
  bigint: ME,
  boolean: r0,
  date: NE,
  discriminatedUnion: QE,
  effect: fv,
  enum: IE,
  function: JE,
  instanceof: CE,
  intersection: GE,
  lazy: PE,
  literal: WE,
  map: KE,
  nan: DE,
  nativeEnum: eT,
  never: BE,
  null: kE,
  nullable: aT,
  number: a0,
  object: qE,
  oboolean: uT,
  onumber: lT,
  optional: nT,
  ostring: sT,
  pipeline: iT,
  preprocess: rT,
  promise: tT,
  record: XE,
  set: $E,
  strictObject: ZE,
  string: n0,
  symbol: zE,
  transformer: fv,
  tuple: FE,
  undefined: UE,
  union: YE,
  unknown: LE,
  void: HE,
  NEVER: cT,
  ZodIssueCode: P,
  quotelessJson: aE,
  ZodError: En,
});
const fT = fi.object({
  email: fi.string().email({ message: "Please enter a valid email address." }),
  password: fi
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
  userName: fi
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
});
var Fs = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(a) {
      return (
        this.listeners.add(a),
        this.onSubscribe(),
        () => {
          this.listeners.delete(a), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Ri = typeof window > "u" || "Deno" in globalThis;
function Vn() {}
function dT(a, n) {
  return typeof a == "function" ? a(n) : a;
}
function fh(a) {
  return typeof a == "number" && a >= 0 && a !== 1 / 0;
}
function i0(a, n) {
  return Math.max(a + (n || 0) - Date.now(), 0);
}
function Ts(a, n) {
  return typeof a == "function" ? a(n) : a;
}
function Wn(a, n) {
  return typeof a == "function" ? a(n) : a;
}
function dv(a, n) {
  const {
    type: i = "all",
    exact: s,
    fetchStatus: u,
    predicate: c,
    queryKey: d,
    stale: h,
  } = a;
  if (d) {
    if (s) {
      if (n.queryHash !== Kh(d, n.options)) return !1;
    } else if (!gu(n.queryKey, d)) return !1;
  }
  if (i !== "all") {
    const p = n.isActive();
    if ((i === "active" && !p) || (i === "inactive" && p)) return !1;
  }
  return !(
    (typeof h == "boolean" && n.isStale() !== h) ||
    (u && u !== n.state.fetchStatus) ||
    (c && !c(n))
  );
}
function hv(a, n) {
  const { exact: i, status: s, predicate: u, mutationKey: c } = a;
  if (c) {
    if (!n.options.mutationKey) return !1;
    if (i) {
      if (Ai(n.options.mutationKey) !== Ai(c)) return !1;
    } else if (!gu(n.options.mutationKey, c)) return !1;
  }
  return !((s && n.state.status !== s) || (u && !u(n)));
}
function Kh(a, n) {
  return ((n == null ? void 0 : n.queryKeyHashFn) || Ai)(a);
}
function Ai(a) {
  return JSON.stringify(a, (n, i) =>
    dh(i)
      ? Object.keys(i)
          .sort()
          .reduce((s, u) => ((s[u] = i[u]), s), {})
      : i,
  );
}
function gu(a, n) {
  return a === n
    ? !0
    : typeof a != typeof n
      ? !1
      : a && n && typeof a == "object" && typeof n == "object"
        ? !Object.keys(n).some((i) => !gu(a[i], n[i]))
        : !1;
}
function s0(a, n) {
  if (a === n) return a;
  const i = mv(a) && mv(n);
  if (i || (dh(a) && dh(n))) {
    const s = i ? a : Object.keys(a),
      u = s.length,
      c = i ? n : Object.keys(n),
      d = c.length,
      h = i ? [] : {};
    let p = 0;
    for (let m = 0; m < d; m++) {
      const g = i ? m : c[m];
      ((!i && s.includes(g)) || i) && a[g] === void 0 && n[g] === void 0
        ? ((h[g] = void 0), p++)
        : ((h[g] = s0(a[g], n[g])), h[g] === a[g] && a[g] !== void 0 && p++);
    }
    return u === d && p === u ? a : h;
  }
  return n;
}
function cc(a, n) {
  if (!n || Object.keys(a).length !== Object.keys(n).length) return !1;
  for (const i in a) if (a[i] !== n[i]) return !1;
  return !0;
}
function mv(a) {
  return Array.isArray(a) && a.length === Object.keys(a).length;
}
function dh(a) {
  if (!pv(a)) return !1;
  const n = a.constructor;
  if (n === void 0) return !0;
  const i = n.prototype;
  return !(
    !pv(i) ||
    !i.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(a) !== Object.prototype
  );
}
function pv(a) {
  return Object.prototype.toString.call(a) === "[object Object]";
}
function hT(a) {
  return new Promise((n) => {
    setTimeout(n, a);
  });
}
function hh(a, n, i) {
  return typeof i.structuralSharing == "function"
    ? i.structuralSharing(a, n)
    : i.structuralSharing !== !1
      ? s0(a, n)
      : n;
}
function mT(a, n, i = 0) {
  const s = [...a, n];
  return i && s.length > i ? s.slice(1) : s;
}
function pT(a, n, i = 0) {
  const s = [n, ...a];
  return i && s.length > i ? s.slice(0, -1) : s;
}
var $h = Symbol();
function l0(a, n) {
  return !a.queryFn && n != null && n.initialPromise
    ? () => n.initialPromise
    : !a.queryFn || a.queryFn === $h
      ? () => Promise.reject(new Error(`Missing queryFn: '${a.queryHash}'`))
      : a.queryFn;
}
var hi,
  wr,
  Rs,
  Lv,
  yT =
    ((Lv = class extends Fs {
      constructor() {
        super();
        Oe(this, hi);
        Oe(this, wr);
        Oe(this, Rs);
        fe(this, Rs, (n) => {
          if (!Ri && window.addEventListener) {
            const i = () => n();
            return (
              window.addEventListener("visibilitychange", i, !1),
              () => {
                window.removeEventListener("visibilitychange", i);
              }
            );
          }
        });
      }
      onSubscribe() {
        w(this, wr) || this.setEventListener(w(this, Rs));
      }
      onUnsubscribe() {
        var n;
        this.hasListeners() ||
          ((n = w(this, wr)) == null || n.call(this), fe(this, wr, void 0));
      }
      setEventListener(n) {
        var i;
        fe(this, Rs, n),
          (i = w(this, wr)) == null || i.call(this),
          fe(
            this,
            wr,
            n((s) => {
              typeof s == "boolean" ? this.setFocused(s) : this.onFocus();
            }),
          );
      }
      setFocused(n) {
        w(this, hi) !== n && (fe(this, hi, n), this.onFocus());
      }
      onFocus() {
        const n = this.isFocused();
        this.listeners.forEach((i) => {
          i(n);
        });
      }
      isFocused() {
        var n;
        return typeof w(this, hi) == "boolean"
          ? w(this, hi)
          : ((n = globalThis.document) == null ? void 0 : n.visibilityState) !==
              "hidden";
      }
    }),
    (hi = new WeakMap()),
    (wr = new WeakMap()),
    (Rs = new WeakMap()),
    Lv),
  Jh = new yT(),
  As,
  Er,
  Os,
  Bv,
  gT =
    ((Bv = class extends Fs {
      constructor() {
        super();
        Oe(this, As, !0);
        Oe(this, Er);
        Oe(this, Os);
        fe(this, Os, (n) => {
          if (!Ri && window.addEventListener) {
            const i = () => n(!0),
              s = () => n(!1);
            return (
              window.addEventListener("online", i, !1),
              window.addEventListener("offline", s, !1),
              () => {
                window.removeEventListener("online", i),
                  window.removeEventListener("offline", s);
              }
            );
          }
        });
      }
      onSubscribe() {
        w(this, Er) || this.setEventListener(w(this, Os));
      }
      onUnsubscribe() {
        var n;
        this.hasListeners() ||
          ((n = w(this, Er)) == null || n.call(this), fe(this, Er, void 0));
      }
      setEventListener(n) {
        var i;
        fe(this, Os, n),
          (i = w(this, Er)) == null || i.call(this),
          fe(this, Er, n(this.setOnline.bind(this)));
      }
      setOnline(n) {
        w(this, As) !== n &&
          (fe(this, As, n),
          this.listeners.forEach((s) => {
            s(n);
          }));
      }
      isOnline() {
        return w(this, As);
      }
    }),
    (As = new WeakMap()),
    (Er = new WeakMap()),
    (Os = new WeakMap()),
    Bv),
  fc = new gT();
function mh() {
  let a, n;
  const i = new Promise((u, c) => {
    (a = u), (n = c);
  });
  (i.status = "pending"), i.catch(() => {});
  function s(u) {
    Object.assign(i, u), delete i.resolve, delete i.reject;
  }
  return (
    (i.resolve = (u) => {
      s({ status: "fulfilled", value: u }), a(u);
    }),
    (i.reject = (u) => {
      s({ status: "rejected", reason: u }), n(u);
    }),
    i
  );
}
function vT(a) {
  return Math.min(1e3 * 2 ** a, 3e4);
}
function u0(a) {
  return (a ?? "online") === "online" ? fc.isOnline() : !0;
}
var o0 = class extends Error {
  constructor(a) {
    super("CancelledError"),
      (this.revert = a == null ? void 0 : a.revert),
      (this.silent = a == null ? void 0 : a.silent);
  }
};
function $d(a) {
  return a instanceof o0;
}
function c0(a) {
  let n = !1,
    i = 0,
    s = !1,
    u;
  const c = mh(),
    d = (O) => {
      var R;
      s || (A(new o0(O)), (R = a.abort) == null || R.call(a));
    },
    h = () => {
      n = !0;
    },
    p = () => {
      n = !1;
    },
    m = () =>
      Jh.isFocused() &&
      (a.networkMode === "always" || fc.isOnline()) &&
      a.canRun(),
    g = () => u0(a.networkMode) && a.canRun(),
    x = (O) => {
      var R;
      s ||
        ((s = !0),
        (R = a.onSuccess) == null || R.call(a, O),
        u == null || u(),
        c.resolve(O));
    },
    A = (O) => {
      var R;
      s ||
        ((s = !0),
        (R = a.onError) == null || R.call(a, O),
        u == null || u(),
        c.reject(O));
    },
    b = () =>
      new Promise((O) => {
        var R;
        (u = (j) => {
          (s || m()) && O(j);
        }),
          (R = a.onPause) == null || R.call(a);
      }).then(() => {
        var O;
        (u = void 0), s || (O = a.onContinue) == null || O.call(a);
      }),
    T = () => {
      if (s) return;
      let O;
      const R = i === 0 ? a.initialPromise : void 0;
      try {
        O = R ?? a.fn();
      } catch (j) {
        O = Promise.reject(j);
      }
      Promise.resolve(O)
        .then(x)
        .catch((j) => {
          var le;
          if (s) return;
          const L = a.retry ?? (Ri ? 0 : 3),
            V = a.retryDelay ?? vT,
            se = typeof V == "function" ? V(i, j) : V,
            G =
              L === !0 ||
              (typeof L == "number" && i < L) ||
              (typeof L == "function" && L(i, j));
          if (n || !G) {
            A(j);
            return;
          }
          i++,
            (le = a.onFail) == null || le.call(a, i, j),
            hT(se)
              .then(() => (m() ? void 0 : b()))
              .then(() => {
                n ? A(j) : T();
              });
        });
    };
  return {
    promise: c,
    cancel: d,
    continue: () => (u == null || u(), c),
    cancelRetry: h,
    continueRetry: p,
    canStart: g,
    start: () => (g() ? T() : b().then(T), c),
  };
}
function bT() {
  let a = [],
    n = 0,
    i = (h) => {
      h();
    },
    s = (h) => {
      h();
    },
    u = (h) => setTimeout(h, 0);
  const c = (h) => {
      n
        ? a.push(h)
        : u(() => {
            i(h);
          });
    },
    d = () => {
      const h = a;
      (a = []),
        h.length &&
          u(() => {
            s(() => {
              h.forEach((p) => {
                i(p);
              });
            });
          });
    };
  return {
    batch: (h) => {
      let p;
      n++;
      try {
        p = h();
      } finally {
        n--, n || d();
      }
      return p;
    },
    batchCalls:
      (h) =>
      (...p) => {
        c(() => {
          h(...p);
        });
      },
    schedule: c,
    setNotifyFunction: (h) => {
      i = h;
    },
    setBatchNotifyFunction: (h) => {
      s = h;
    },
    setScheduler: (h) => {
      u = h;
    },
  };
}
var zt = bT(),
  mi,
  Hv,
  f0 =
    ((Hv = class {
      constructor() {
        Oe(this, mi);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          fh(this.gcTime) &&
            fe(
              this,
              mi,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            );
      }
      updateGcTime(a) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          a ?? (Ri ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        w(this, mi) && (clearTimeout(w(this, mi)), fe(this, mi, void 0));
      }
    }),
    (mi = new WeakMap()),
    Hv),
  Cs,
  Ds,
  Hn,
  pi,
  Ft,
  bu,
  yi,
  Jn,
  Qa,
  Vv,
  xT =
    ((Vv = class extends f0 {
      constructor(n) {
        super();
        Oe(this, Jn);
        Oe(this, Cs);
        Oe(this, Ds);
        Oe(this, Hn);
        Oe(this, pi);
        Oe(this, Ft);
        Oe(this, bu);
        Oe(this, yi);
        fe(this, yi, !1),
          fe(this, bu, n.defaultOptions),
          this.setOptions(n.options),
          (this.observers = []),
          fe(this, pi, n.client),
          fe(this, Hn, w(this, pi).getQueryCache()),
          (this.queryKey = n.queryKey),
          (this.queryHash = n.queryHash),
          fe(this, Cs, ST(this.options)),
          (this.state = n.state ?? w(this, Cs)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var n;
        return (n = w(this, Ft)) == null ? void 0 : n.promise;
      }
      setOptions(n) {
        (this.options = { ...w(this, bu), ...n }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          w(this, Hn).remove(this);
      }
      setData(n, i) {
        const s = hh(this.state.data, n, this.options);
        return (
          qe(this, Jn, Qa).call(this, {
            data: s,
            type: "success",
            dataUpdatedAt: i == null ? void 0 : i.updatedAt,
            manual: i == null ? void 0 : i.manual,
          }),
          s
        );
      }
      setState(n, i) {
        qe(this, Jn, Qa).call(this, {
          type: "setState",
          state: n,
          setStateOptions: i,
        });
      }
      cancel(n) {
        var s, u;
        const i = (s = w(this, Ft)) == null ? void 0 : s.promise;
        return (
          (u = w(this, Ft)) == null || u.cancel(n),
          i ? i.then(Vn).catch(Vn) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(w(this, Cs));
      }
      isActive() {
        return this.observers.some((n) => Wn(n.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === $h ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
            ? this.observers.some((n) => n.getCurrentResult().isStale)
            : this.state.data === void 0;
      }
      isStaleByTime(n = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !i0(this.state.dataUpdatedAt, n)
        );
      }
      onFocus() {
        var i;
        const n = this.observers.find((s) => s.shouldFetchOnWindowFocus());
        n == null || n.refetch({ cancelRefetch: !1 }),
          (i = w(this, Ft)) == null || i.continue();
      }
      onOnline() {
        var i;
        const n = this.observers.find((s) => s.shouldFetchOnReconnect());
        n == null || n.refetch({ cancelRefetch: !1 }),
          (i = w(this, Ft)) == null || i.continue();
      }
      addObserver(n) {
        this.observers.includes(n) ||
          (this.observers.push(n),
          this.clearGcTimeout(),
          w(this, Hn).notify({
            type: "observerAdded",
            query: this,
            observer: n,
          }));
      }
      removeObserver(n) {
        this.observers.includes(n) &&
          ((this.observers = this.observers.filter((i) => i !== n)),
          this.observers.length ||
            (w(this, Ft) &&
              (w(this, yi)
                ? w(this, Ft).cancel({ revert: !0 })
                : w(this, Ft).cancelRetry()),
            this.scheduleGc()),
          w(this, Hn).notify({
            type: "observerRemoved",
            query: this,
            observer: n,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          qe(this, Jn, Qa).call(this, { type: "invalidate" });
      }
      fetch(n, i) {
        var p, m, g;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && i != null && i.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (w(this, Ft))
            return w(this, Ft).continueRetry(), w(this, Ft).promise;
        }
        if ((n && this.setOptions(n), !this.options.queryFn)) {
          const x = this.observers.find((A) => A.options.queryFn);
          x && this.setOptions(x.options);
        }
        const s = new AbortController(),
          u = (x) => {
            Object.defineProperty(x, "signal", {
              enumerable: !0,
              get: () => (fe(this, yi, !0), s.signal),
            });
          },
          c = () => {
            const x = l0(this.options, i),
              A = {
                client: w(this, pi),
                queryKey: this.queryKey,
                meta: this.meta,
              };
            return (
              u(A),
              fe(this, yi, !1),
              this.options.persister ? this.options.persister(x, A, this) : x(A)
            );
          },
          d = {
            fetchOptions: i,
            options: this.options,
            queryKey: this.queryKey,
            client: w(this, pi),
            state: this.state,
            fetchFn: c,
          };
        u(d),
          (p = this.options.behavior) == null || p.onFetch(d, this),
          fe(this, Ds, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((m = d.fetchOptions) == null ? void 0 : m.meta)) &&
            qe(this, Jn, Qa).call(this, {
              type: "fetch",
              meta: (g = d.fetchOptions) == null ? void 0 : g.meta,
            });
        const h = (x) => {
          var A, b, T, O;
          ($d(x) && x.silent) ||
            qe(this, Jn, Qa).call(this, { type: "error", error: x }),
            $d(x) ||
              ((b = (A = w(this, Hn).config).onError) == null ||
                b.call(A, x, this),
              (O = (T = w(this, Hn).config).onSettled) == null ||
                O.call(T, this.state.data, x, this)),
            this.scheduleGc();
        };
        return (
          fe(
            this,
            Ft,
            c0({
              initialPromise: i == null ? void 0 : i.initialPromise,
              fn: d.fetchFn,
              abort: s.abort.bind(s),
              onSuccess: (x) => {
                var A, b, T, O;
                if (x === void 0) {
                  h(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(x);
                } catch (R) {
                  h(R);
                  return;
                }
                (b = (A = w(this, Hn).config).onSuccess) == null ||
                  b.call(A, x, this),
                  (O = (T = w(this, Hn).config).onSettled) == null ||
                    O.call(T, x, this.state.error, this),
                  this.scheduleGc();
              },
              onError: h,
              onFail: (x, A) => {
                qe(this, Jn, Qa).call(this, {
                  type: "failed",
                  failureCount: x,
                  error: A,
                });
              },
              onPause: () => {
                qe(this, Jn, Qa).call(this, { type: "pause" });
              },
              onContinue: () => {
                qe(this, Jn, Qa).call(this, { type: "continue" });
              },
              retry: d.options.retry,
              retryDelay: d.options.retryDelay,
              networkMode: d.options.networkMode,
              canRun: () => !0,
            }),
          ),
          w(this, Ft).start()
        );
      }
    }),
    (Cs = new WeakMap()),
    (Ds = new WeakMap()),
    (Hn = new WeakMap()),
    (pi = new WeakMap()),
    (Ft = new WeakMap()),
    (bu = new WeakMap()),
    (yi = new WeakMap()),
    (Jn = new WeakSet()),
    (Qa = function (n) {
      const i = (s) => {
        switch (n.type) {
          case "failed":
            return {
              ...s,
              fetchFailureCount: n.failureCount,
              fetchFailureReason: n.error,
            };
          case "pause":
            return { ...s, fetchStatus: "paused" };
          case "continue":
            return { ...s, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...s,
              ...d0(s.data, this.options),
              fetchMeta: n.meta ?? null,
            };
          case "success":
            return {
              ...s,
              data: n.data,
              dataUpdateCount: s.dataUpdateCount + 1,
              dataUpdatedAt: n.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!n.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const u = n.error;
            return $d(u) && u.revert && w(this, Ds)
              ? { ...w(this, Ds), fetchStatus: "idle" }
              : {
                  ...s,
                  error: u,
                  errorUpdateCount: s.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: s.fetchFailureCount + 1,
                  fetchFailureReason: u,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...s, isInvalidated: !0 };
          case "setState":
            return { ...s, ...n.state };
        }
      };
      (this.state = i(this.state)),
        zt.batch(() => {
          this.observers.forEach((s) => {
            s.onQueryUpdate();
          }),
            w(this, Hn).notify({ query: this, type: "updated", action: n });
        });
    }),
    Vv);
function d0(a, n) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: u0(n.networkMode) ? "fetching" : "paused",
    ...(a === void 0 && { error: null, status: "pending" }),
  };
}
function ST(a) {
  const n =
      typeof a.initialData == "function" ? a.initialData() : a.initialData,
    i = n !== void 0,
    s = i
      ? typeof a.initialDataUpdatedAt == "function"
        ? a.initialDataUpdatedAt()
        : a.initialDataUpdatedAt
      : 0;
  return {
    data: n,
    dataUpdateCount: 0,
    dataUpdatedAt: i ? (s ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: i ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var fa,
  qv,
  _T =
    ((qv = class extends Fs {
      constructor(n = {}) {
        super();
        Oe(this, fa);
        (this.config = n), fe(this, fa, new Map());
      }
      build(n, i, s) {
        const u = i.queryKey,
          c = i.queryHash ?? Kh(u, i);
        let d = this.get(c);
        return (
          d ||
            ((d = new xT({
              client: n,
              queryKey: u,
              queryHash: c,
              options: n.defaultQueryOptions(i),
              state: s,
              defaultOptions: n.getQueryDefaults(u),
            })),
            this.add(d)),
          d
        );
      }
      add(n) {
        w(this, fa).has(n.queryHash) ||
          (w(this, fa).set(n.queryHash, n),
          this.notify({ type: "added", query: n }));
      }
      remove(n) {
        const i = w(this, fa).get(n.queryHash);
        i &&
          (n.destroy(),
          i === n && w(this, fa).delete(n.queryHash),
          this.notify({ type: "removed", query: n }));
      }
      clear() {
        zt.batch(() => {
          this.getAll().forEach((n) => {
            this.remove(n);
          });
        });
      }
      get(n) {
        return w(this, fa).get(n);
      }
      getAll() {
        return [...w(this, fa).values()];
      }
      find(n) {
        const i = { exact: !0, ...n };
        return this.getAll().find((s) => dv(i, s));
      }
      findAll(n = {}) {
        const i = this.getAll();
        return Object.keys(n).length > 0 ? i.filter((s) => dv(n, s)) : i;
      }
      notify(n) {
        zt.batch(() => {
          this.listeners.forEach((i) => {
            i(n);
          });
        });
      }
      onFocus() {
        zt.batch(() => {
          this.getAll().forEach((n) => {
            n.onFocus();
          });
        });
      }
      onOnline() {
        zt.batch(() => {
          this.getAll().forEach((n) => {
            n.onOnline();
          });
        });
      }
    }),
    (fa = new WeakMap()),
    qv),
  da,
  tn,
  gi,
  ha,
  Sr,
  Zv,
  wT =
    ((Zv = class extends f0 {
      constructor(n) {
        super();
        Oe(this, ha);
        Oe(this, da);
        Oe(this, tn);
        Oe(this, gi);
        (this.mutationId = n.mutationId),
          fe(this, tn, n.mutationCache),
          fe(this, da, []),
          (this.state = n.state || h0()),
          this.setOptions(n.options),
          this.scheduleGc();
      }
      setOptions(n) {
        (this.options = n), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(n) {
        w(this, da).includes(n) ||
          (w(this, da).push(n),
          this.clearGcTimeout(),
          w(this, tn).notify({
            type: "observerAdded",
            mutation: this,
            observer: n,
          }));
      }
      removeObserver(n) {
        fe(
          this,
          da,
          w(this, da).filter((i) => i !== n),
        ),
          this.scheduleGc(),
          w(this, tn).notify({
            type: "observerRemoved",
            mutation: this,
            observer: n,
          });
      }
      optionalRemove() {
        w(this, da).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : w(this, tn).remove(this));
      }
      continue() {
        var n;
        return (
          ((n = w(this, gi)) == null ? void 0 : n.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(n) {
        var u, c, d, h, p, m, g, x, A, b, T, O, R, j, L, V, se, G, le, we;
        fe(
          this,
          gi,
          c0({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(n)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (Se, F) => {
              qe(this, ha, Sr).call(this, {
                type: "failed",
                failureCount: Se,
                error: F,
              });
            },
            onPause: () => {
              qe(this, ha, Sr).call(this, { type: "pause" });
            },
            onContinue: () => {
              qe(this, ha, Sr).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => w(this, tn).canRun(this),
          }),
        );
        const i = this.state.status === "pending",
          s = !w(this, gi).canStart();
        try {
          if (!i) {
            qe(this, ha, Sr).call(this, {
              type: "pending",
              variables: n,
              isPaused: s,
            }),
              await ((c = (u = w(this, tn).config).onMutate) == null
                ? void 0
                : c.call(u, n, this));
            const F = await ((h = (d = this.options).onMutate) == null
              ? void 0
              : h.call(d, n));
            F !== this.state.context &&
              qe(this, ha, Sr).call(this, {
                type: "pending",
                context: F,
                variables: n,
                isPaused: s,
              });
          }
          const Se = await w(this, gi).start();
          return (
            await ((m = (p = w(this, tn).config).onSuccess) == null
              ? void 0
              : m.call(p, Se, n, this.state.context, this)),
            await ((x = (g = this.options).onSuccess) == null
              ? void 0
              : x.call(g, Se, n, this.state.context)),
            await ((b = (A = w(this, tn).config).onSettled) == null
              ? void 0
              : b.call(
                  A,
                  Se,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                )),
            await ((O = (T = this.options).onSettled) == null
              ? void 0
              : O.call(T, Se, null, n, this.state.context)),
            qe(this, ha, Sr).call(this, { type: "success", data: Se }),
            Se
          );
        } catch (Se) {
          try {
            throw (
              (await ((j = (R = w(this, tn).config).onError) == null
                ? void 0
                : j.call(R, Se, n, this.state.context, this)),
              await ((V = (L = this.options).onError) == null
                ? void 0
                : V.call(L, Se, n, this.state.context)),
              await ((G = (se = w(this, tn).config).onSettled) == null
                ? void 0
                : G.call(
                    se,
                    void 0,
                    Se,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((we = (le = this.options).onSettled) == null
                ? void 0
                : we.call(le, void 0, Se, n, this.state.context)),
              Se)
            );
          } finally {
            qe(this, ha, Sr).call(this, { type: "error", error: Se });
          }
        } finally {
          w(this, tn).runNext(this);
        }
      }
    }),
    (da = new WeakMap()),
    (tn = new WeakMap()),
    (gi = new WeakMap()),
    (ha = new WeakSet()),
    (Sr = function (n) {
      const i = (s) => {
        switch (n.type) {
          case "failed":
            return {
              ...s,
              failureCount: n.failureCount,
              failureReason: n.error,
            };
          case "pause":
            return { ...s, isPaused: !0 };
          case "continue":
            return { ...s, isPaused: !1 };
          case "pending":
            return {
              ...s,
              context: n.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: n.isPaused,
              status: "pending",
              variables: n.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...s,
              data: n.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...s,
              data: void 0,
              error: n.error,
              failureCount: s.failureCount + 1,
              failureReason: n.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = i(this.state)),
        zt.batch(() => {
          w(this, da).forEach((s) => {
            s.onMutationUpdate(n);
          }),
            w(this, tn).notify({ mutation: this, type: "updated", action: n });
        });
    }),
    Zv);
function h0() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Fa,
  Pn,
  xu,
  Yv,
  ET =
    ((Yv = class extends Fs {
      constructor(n = {}) {
        super();
        Oe(this, Fa);
        Oe(this, Pn);
        Oe(this, xu);
        (this.config = n),
          fe(this, Fa, new Set()),
          fe(this, Pn, new Map()),
          fe(this, xu, 0);
      }
      build(n, i, s) {
        const u = new wT({
          mutationCache: this,
          mutationId: ++Vo(this, xu)._,
          options: n.defaultMutationOptions(i),
          state: s,
        });
        return this.add(u), u;
      }
      add(n) {
        w(this, Fa).add(n);
        const i = Yo(n);
        if (typeof i == "string") {
          const s = w(this, Pn).get(i);
          s ? s.push(n) : w(this, Pn).set(i, [n]);
        }
        this.notify({ type: "added", mutation: n });
      }
      remove(n) {
        if (w(this, Fa).delete(n)) {
          const i = Yo(n);
          if (typeof i == "string") {
            const s = w(this, Pn).get(i);
            if (s)
              if (s.length > 1) {
                const u = s.indexOf(n);
                u !== -1 && s.splice(u, 1);
              } else s[0] === n && w(this, Pn).delete(i);
          }
        }
        this.notify({ type: "removed", mutation: n });
      }
      canRun(n) {
        const i = Yo(n);
        if (typeof i == "string") {
          const s = w(this, Pn).get(i),
            u =
              s == null ? void 0 : s.find((c) => c.state.status === "pending");
          return !u || u === n;
        } else return !0;
      }
      runNext(n) {
        var s;
        const i = Yo(n);
        if (typeof i == "string") {
          const u =
            (s = w(this, Pn).get(i)) == null
              ? void 0
              : s.find((c) => c !== n && c.state.isPaused);
          return (u == null ? void 0 : u.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        zt.batch(() => {
          w(this, Fa).forEach((n) => {
            this.notify({ type: "removed", mutation: n });
          }),
            w(this, Fa).clear(),
            w(this, Pn).clear();
        });
      }
      getAll() {
        return Array.from(w(this, Fa));
      }
      find(n) {
        const i = { exact: !0, ...n };
        return this.getAll().find((s) => hv(i, s));
      }
      findAll(n = {}) {
        return this.getAll().filter((i) => hv(n, i));
      }
      notify(n) {
        zt.batch(() => {
          this.listeners.forEach((i) => {
            i(n);
          });
        });
      }
      resumePausedMutations() {
        const n = this.getAll().filter((i) => i.state.isPaused);
        return zt.batch(() =>
          Promise.all(n.map((i) => i.continue().catch(Vn))),
        );
      }
    }),
    (Fa = new WeakMap()),
    (Pn = new WeakMap()),
    (xu = new WeakMap()),
    Yv);
function Yo(a) {
  var n;
  return (n = a.options.scope) == null ? void 0 : n.id;
}
function yv(a) {
  return {
    onFetch: (n, i) => {
      var g, x, A, b, T;
      const s = n.options,
        u =
          (A =
            (x = (g = n.fetchOptions) == null ? void 0 : g.meta) == null
              ? void 0
              : x.fetchMore) == null
            ? void 0
            : A.direction,
        c = ((b = n.state.data) == null ? void 0 : b.pages) || [],
        d = ((T = n.state.data) == null ? void 0 : T.pageParams) || [];
      let h = { pages: [], pageParams: [] },
        p = 0;
      const m = async () => {
        let O = !1;
        const R = (V) => {
            Object.defineProperty(V, "signal", {
              enumerable: !0,
              get: () => (
                n.signal.aborted
                  ? (O = !0)
                  : n.signal.addEventListener("abort", () => {
                      O = !0;
                    }),
                n.signal
              ),
            });
          },
          j = l0(n.options, n.fetchOptions),
          L = async (V, se, G) => {
            if (O) return Promise.reject();
            if (se == null && V.pages.length) return Promise.resolve(V);
            const le = {
              client: n.client,
              queryKey: n.queryKey,
              pageParam: se,
              direction: G ? "backward" : "forward",
              meta: n.options.meta,
            };
            R(le);
            const we = await j(le),
              { maxPages: Se } = n.options,
              F = G ? pT : mT;
            return {
              pages: F(V.pages, we, Se),
              pageParams: F(V.pageParams, se, Se),
            };
          };
        if (u && c.length) {
          const V = u === "backward",
            se = V ? TT : gv,
            G = { pages: c, pageParams: d },
            le = se(s, G);
          h = await L(G, le, V);
        } else {
          const V = a ?? c.length;
          do {
            const se = p === 0 ? (d[0] ?? s.initialPageParam) : gv(s, h);
            if (p > 0 && se == null) break;
            (h = await L(h, se)), p++;
          } while (p < V);
        }
        return h;
      };
      n.options.persister
        ? (n.fetchFn = () => {
            var O, R;
            return (R = (O = n.options).persister) == null
              ? void 0
              : R.call(
                  O,
                  m,
                  {
                    client: n.client,
                    queryKey: n.queryKey,
                    meta: n.options.meta,
                    signal: n.signal,
                  },
                  i,
                );
          })
        : (n.fetchFn = m);
    },
  };
}
function gv(a, { pages: n, pageParams: i }) {
  const s = n.length - 1;
  return n.length > 0 ? a.getNextPageParam(n[s], n, i[s], i) : void 0;
}
function TT(a, { pages: n, pageParams: i }) {
  var s;
  return n.length > 0
    ? (s = a.getPreviousPageParam) == null
      ? void 0
      : s.call(a, n[0], n, i[0], i)
    : void 0;
}
var St,
  Tr,
  Rr,
  Ms,
  Ns,
  Ar,
  zs,
  Us,
  Qv,
  RT =
    ((Qv = class {
      constructor(a = {}) {
        Oe(this, St);
        Oe(this, Tr);
        Oe(this, Rr);
        Oe(this, Ms);
        Oe(this, Ns);
        Oe(this, Ar);
        Oe(this, zs);
        Oe(this, Us);
        fe(this, St, a.queryCache || new _T()),
          fe(this, Tr, a.mutationCache || new ET()),
          fe(this, Rr, a.defaultOptions || {}),
          fe(this, Ms, new Map()),
          fe(this, Ns, new Map()),
          fe(this, Ar, 0);
      }
      mount() {
        Vo(this, Ar)._++,
          w(this, Ar) === 1 &&
            (fe(
              this,
              zs,
              Jh.subscribe(async (a) => {
                a &&
                  (await this.resumePausedMutations(), w(this, St).onFocus());
              }),
            ),
            fe(
              this,
              Us,
              fc.subscribe(async (a) => {
                a &&
                  (await this.resumePausedMutations(), w(this, St).onOnline());
              }),
            ));
      }
      unmount() {
        var a, n;
        Vo(this, Ar)._--,
          w(this, Ar) === 0 &&
            ((a = w(this, zs)) == null || a.call(this),
            fe(this, zs, void 0),
            (n = w(this, Us)) == null || n.call(this),
            fe(this, Us, void 0));
      }
      isFetching(a) {
        return w(this, St).findAll({ ...a, fetchStatus: "fetching" }).length;
      }
      isMutating(a) {
        return w(this, Tr).findAll({ ...a, status: "pending" }).length;
      }
      getQueryData(a) {
        var i;
        const n = this.defaultQueryOptions({ queryKey: a });
        return (i = w(this, St).get(n.queryHash)) == null
          ? void 0
          : i.state.data;
      }
      ensureQueryData(a) {
        const n = this.defaultQueryOptions(a),
          i = w(this, St).build(this, n),
          s = i.state.data;
        return s === void 0
          ? this.fetchQuery(a)
          : (a.revalidateIfStale &&
              i.isStaleByTime(Ts(n.staleTime, i)) &&
              this.prefetchQuery(n),
            Promise.resolve(s));
      }
      getQueriesData(a) {
        return w(this, St)
          .findAll(a)
          .map(({ queryKey: n, state: i }) => {
            const s = i.data;
            return [n, s];
          });
      }
      setQueryData(a, n, i) {
        const s = this.defaultQueryOptions({ queryKey: a }),
          u = w(this, St).get(s.queryHash),
          c = u == null ? void 0 : u.state.data,
          d = dT(n, c);
        if (d !== void 0)
          return w(this, St)
            .build(this, s)
            .setData(d, { ...i, manual: !0 });
      }
      setQueriesData(a, n, i) {
        return zt.batch(() =>
          w(this, St)
            .findAll(a)
            .map(({ queryKey: s }) => [s, this.setQueryData(s, n, i)]),
        );
      }
      getQueryState(a) {
        var i;
        const n = this.defaultQueryOptions({ queryKey: a });
        return (i = w(this, St).get(n.queryHash)) == null ? void 0 : i.state;
      }
      removeQueries(a) {
        const n = w(this, St);
        zt.batch(() => {
          n.findAll(a).forEach((i) => {
            n.remove(i);
          });
        });
      }
      resetQueries(a, n) {
        const i = w(this, St),
          s = { type: "active", ...a };
        return zt.batch(
          () => (
            i.findAll(a).forEach((u) => {
              u.reset();
            }),
            this.refetchQueries(s, n)
          ),
        );
      }
      cancelQueries(a, n = {}) {
        const i = { revert: !0, ...n },
          s = zt.batch(() =>
            w(this, St)
              .findAll(a)
              .map((u) => u.cancel(i)),
          );
        return Promise.all(s).then(Vn).catch(Vn);
      }
      invalidateQueries(a, n = {}) {
        return zt.batch(() => {
          if (
            (w(this, St)
              .findAll(a)
              .forEach((s) => {
                s.invalidate();
              }),
            (a == null ? void 0 : a.refetchType) === "none")
          )
            return Promise.resolve();
          const i = {
            ...a,
            type:
              (a == null ? void 0 : a.refetchType) ??
              (a == null ? void 0 : a.type) ??
              "active",
          };
          return this.refetchQueries(i, n);
        });
      }
      refetchQueries(a, n = {}) {
        const i = { ...n, cancelRefetch: n.cancelRefetch ?? !0 },
          s = zt.batch(() =>
            w(this, St)
              .findAll(a)
              .filter((u) => !u.isDisabled())
              .map((u) => {
                let c = u.fetch(void 0, i);
                return (
                  i.throwOnError || (c = c.catch(Vn)),
                  u.state.fetchStatus === "paused" ? Promise.resolve() : c
                );
              }),
          );
        return Promise.all(s).then(Vn);
      }
      fetchQuery(a) {
        const n = this.defaultQueryOptions(a);
        n.retry === void 0 && (n.retry = !1);
        const i = w(this, St).build(this, n);
        return i.isStaleByTime(Ts(n.staleTime, i))
          ? i.fetch(n)
          : Promise.resolve(i.state.data);
      }
      prefetchQuery(a) {
        return this.fetchQuery(a).then(Vn).catch(Vn);
      }
      fetchInfiniteQuery(a) {
        return (a.behavior = yv(a.pages)), this.fetchQuery(a);
      }
      prefetchInfiniteQuery(a) {
        return this.fetchInfiniteQuery(a).then(Vn).catch(Vn);
      }
      ensureInfiniteQueryData(a) {
        return (a.behavior = yv(a.pages)), this.ensureQueryData(a);
      }
      resumePausedMutations() {
        return fc.isOnline()
          ? w(this, Tr).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return w(this, St);
      }
      getMutationCache() {
        return w(this, Tr);
      }
      getDefaultOptions() {
        return w(this, Rr);
      }
      setDefaultOptions(a) {
        fe(this, Rr, a);
      }
      setQueryDefaults(a, n) {
        w(this, Ms).set(Ai(a), { queryKey: a, defaultOptions: n });
      }
      getQueryDefaults(a) {
        const n = [...w(this, Ms).values()],
          i = {};
        return (
          n.forEach((s) => {
            gu(a, s.queryKey) && Object.assign(i, s.defaultOptions);
          }),
          i
        );
      }
      setMutationDefaults(a, n) {
        w(this, Ns).set(Ai(a), { mutationKey: a, defaultOptions: n });
      }
      getMutationDefaults(a) {
        const n = [...w(this, Ns).values()];
        let i = {};
        return (
          n.forEach((s) => {
            gu(a, s.mutationKey) && (i = { ...i, ...s.defaultOptions });
          }),
          i
        );
      }
      defaultQueryOptions(a) {
        if (a._defaulted) return a;
        const n = {
          ...w(this, Rr).queries,
          ...this.getQueryDefaults(a.queryKey),
          ...a,
          _defaulted: !0,
        };
        return (
          n.queryHash || (n.queryHash = Kh(n.queryKey, n)),
          n.refetchOnReconnect === void 0 &&
            (n.refetchOnReconnect = n.networkMode !== "always"),
          n.throwOnError === void 0 && (n.throwOnError = !!n.suspense),
          !n.networkMode && n.persister && (n.networkMode = "offlineFirst"),
          n.queryFn === $h && (n.enabled = !1),
          n
        );
      }
      defaultMutationOptions(a) {
        return a != null && a._defaulted
          ? a
          : {
              ...w(this, Rr).mutations,
              ...((a == null ? void 0 : a.mutationKey) &&
                this.getMutationDefaults(a.mutationKey)),
              ...a,
              _defaulted: !0,
            };
      }
      clear() {
        w(this, St).clear(), w(this, Tr).clear();
      }
    }),
    (St = new WeakMap()),
    (Tr = new WeakMap()),
    (Rr = new WeakMap()),
    (Ms = new WeakMap()),
    (Ns = new WeakMap()),
    (Ar = new WeakMap()),
    (zs = new WeakMap()),
    (Us = new WeakMap()),
    Qv),
  mn,
  $e,
  Su,
  nn,
  vi,
  ks,
  Or,
  ma,
  _u,
  js,
  Ls,
  bi,
  xi,
  Cr,
  Bs,
  it,
  Il,
  ph,
  yh,
  gh,
  vh,
  bh,
  xh,
  Sh,
  m0,
  Gv,
  AT =
    ((Gv = class extends Fs {
      constructor(n, i) {
        super();
        Oe(this, it);
        Oe(this, mn);
        Oe(this, $e);
        Oe(this, Su);
        Oe(this, nn);
        Oe(this, vi);
        Oe(this, ks);
        Oe(this, Or);
        Oe(this, ma);
        Oe(this, _u);
        Oe(this, js);
        Oe(this, Ls);
        Oe(this, bi);
        Oe(this, xi);
        Oe(this, Cr);
        Oe(this, Bs, new Set());
        (this.options = i),
          fe(this, mn, n),
          fe(this, ma, null),
          fe(this, Or, mh()),
          this.options.experimental_prefetchInRender ||
            w(this, Or).reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled",
              ),
            ),
          this.bindMethods(),
          this.setOptions(i);
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (w(this, $e).addObserver(this),
          vv(w(this, $e), this.options)
            ? qe(this, it, Il).call(this)
            : this.updateResult(),
          qe(this, it, vh).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return _h(w(this, $e), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return _h(w(this, $e), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        (this.listeners = new Set()),
          qe(this, it, bh).call(this),
          qe(this, it, xh).call(this),
          w(this, $e).removeObserver(this);
      }
      setOptions(n, i) {
        const s = this.options,
          u = w(this, $e);
        if (
          ((this.options = w(this, mn).defaultQueryOptions(n)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != "boolean" &&
            typeof this.options.enabled != "function" &&
            typeof Wn(this.options.enabled, w(this, $e)) != "boolean")
        )
          throw new Error(
            "Expected enabled to be a boolean or a callback that returns a boolean",
          );
        qe(this, it, Sh).call(this),
          w(this, $e).setOptions(this.options),
          s._defaulted &&
            !cc(this.options, s) &&
            w(this, mn)
              .getQueryCache()
              .notify({
                type: "observerOptionsUpdated",
                query: w(this, $e),
                observer: this,
              });
        const c = this.hasListeners();
        c && bv(w(this, $e), u, this.options, s) && qe(this, it, Il).call(this),
          this.updateResult(i),
          c &&
            (w(this, $e) !== u ||
              Wn(this.options.enabled, w(this, $e)) !==
                Wn(s.enabled, w(this, $e)) ||
              Ts(this.options.staleTime, w(this, $e)) !==
                Ts(s.staleTime, w(this, $e))) &&
            qe(this, it, ph).call(this);
        const d = qe(this, it, yh).call(this);
        c &&
          (w(this, $e) !== u ||
            Wn(this.options.enabled, w(this, $e)) !==
              Wn(s.enabled, w(this, $e)) ||
            d !== w(this, Cr)) &&
          qe(this, it, gh).call(this, d);
      }
      getOptimisticResult(n) {
        const i = w(this, mn).getQueryCache().build(w(this, mn), n),
          s = this.createResult(i, n);
        return (
          CT(this, s) &&
            (fe(this, nn, s),
            fe(this, ks, this.options),
            fe(this, vi, w(this, $e).state)),
          s
        );
      }
      getCurrentResult() {
        return w(this, nn);
      }
      trackResult(n, i) {
        const s = {};
        return (
          Object.keys(n).forEach((u) => {
            Object.defineProperty(s, u, {
              configurable: !1,
              enumerable: !0,
              get: () => (this.trackProp(u), i == null || i(u), n[u]),
            });
          }),
          s
        );
      }
      trackProp(n) {
        w(this, Bs).add(n);
      }
      getCurrentQuery() {
        return w(this, $e);
      }
      refetch({ ...n } = {}) {
        return this.fetch({ ...n });
      }
      fetchOptimistic(n) {
        const i = w(this, mn).defaultQueryOptions(n),
          s = w(this, mn).getQueryCache().build(w(this, mn), i);
        return s.fetch().then(() => this.createResult(s, i));
      }
      fetch(n) {
        return qe(this, it, Il)
          .call(this, { ...n, cancelRefetch: n.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), w(this, nn)));
      }
      createResult(n, i) {
        var Se;
        const s = w(this, $e),
          u = this.options,
          c = w(this, nn),
          d = w(this, vi),
          h = w(this, ks),
          m = n !== s ? n.state : w(this, Su),
          { state: g } = n;
        let x = { ...g },
          A = !1,
          b;
        if (i._optimisticResults) {
          const F = this.hasListeners(),
            pe = !F && vv(n, i),
            Fe = F && bv(n, s, i, u);
          (pe || Fe) && (x = { ...x, ...d0(g.data, n.options) }),
            i._optimisticResults === "isRestoring" && (x.fetchStatus = "idle");
        }
        let { error: T, errorUpdatedAt: O, status: R } = x;
        if (i.select && x.data !== void 0)
          if (
            c &&
            x.data === (d == null ? void 0 : d.data) &&
            i.select === w(this, _u)
          )
            b = w(this, js);
          else
            try {
              fe(this, _u, i.select),
                (b = i.select(x.data)),
                (b = hh(c == null ? void 0 : c.data, b, i)),
                fe(this, js, b),
                fe(this, ma, null);
            } catch (F) {
              fe(this, ma, F);
            }
        else b = x.data;
        if (i.placeholderData !== void 0 && b === void 0 && R === "pending") {
          let F;
          if (
            c != null &&
            c.isPlaceholderData &&
            i.placeholderData === (h == null ? void 0 : h.placeholderData)
          )
            F = c.data;
          else if (
            ((F =
              typeof i.placeholderData == "function"
                ? i.placeholderData(
                    (Se = w(this, Ls)) == null ? void 0 : Se.state.data,
                    w(this, Ls),
                  )
                : i.placeholderData),
            i.select && F !== void 0)
          )
            try {
              (F = i.select(F)), fe(this, ma, null);
            } catch (pe) {
              fe(this, ma, pe);
            }
          F !== void 0 &&
            ((R = "success"),
            (b = hh(c == null ? void 0 : c.data, F, i)),
            (A = !0));
        }
        w(this, ma) &&
          ((T = w(this, ma)),
          (b = w(this, js)),
          (O = Date.now()),
          (R = "error"));
        const j = x.fetchStatus === "fetching",
          L = R === "pending",
          V = R === "error",
          se = L && j,
          G = b !== void 0,
          we = {
            status: R,
            fetchStatus: x.fetchStatus,
            isPending: L,
            isSuccess: R === "success",
            isError: V,
            isInitialLoading: se,
            isLoading: se,
            data: b,
            dataUpdatedAt: x.dataUpdatedAt,
            error: T,
            errorUpdatedAt: O,
            failureCount: x.fetchFailureCount,
            failureReason: x.fetchFailureReason,
            errorUpdateCount: x.errorUpdateCount,
            isFetched: x.dataUpdateCount > 0 || x.errorUpdateCount > 0,
            isFetchedAfterMount:
              x.dataUpdateCount > m.dataUpdateCount ||
              x.errorUpdateCount > m.errorUpdateCount,
            isFetching: j,
            isRefetching: j && !L,
            isLoadingError: V && !G,
            isPaused: x.fetchStatus === "paused",
            isPlaceholderData: A,
            isRefetchError: V && G,
            isStale: Ph(n, i),
            refetch: this.refetch,
            promise: w(this, Or),
          };
        if (this.options.experimental_prefetchInRender) {
          const F = (ye) => {
              we.status === "error"
                ? ye.reject(we.error)
                : we.data !== void 0 && ye.resolve(we.data);
            },
            pe = () => {
              const ye = fe(this, Or, (we.promise = mh()));
              F(ye);
            },
            Fe = w(this, Or);
          switch (Fe.status) {
            case "pending":
              n.queryHash === s.queryHash && F(Fe);
              break;
            case "fulfilled":
              (we.status === "error" || we.data !== Fe.value) && pe();
              break;
            case "rejected":
              (we.status !== "error" || we.error !== Fe.reason) && pe();
              break;
          }
        }
        return we;
      }
      updateResult(n) {
        const i = w(this, nn),
          s = this.createResult(w(this, $e), this.options);
        if (
          (fe(this, vi, w(this, $e).state),
          fe(this, ks, this.options),
          w(this, vi).data !== void 0 && fe(this, Ls, w(this, $e)),
          cc(s, i))
        )
          return;
        fe(this, nn, s);
        const u = {},
          c = () => {
            if (!i) return !0;
            const { notifyOnChangeProps: d } = this.options,
              h = typeof d == "function" ? d() : d;
            if (h === "all" || (!h && !w(this, Bs).size)) return !0;
            const p = new Set(h ?? w(this, Bs));
            return (
              this.options.throwOnError && p.add("error"),
              Object.keys(w(this, nn)).some((m) => {
                const g = m;
                return w(this, nn)[g] !== i[g] && p.has(g);
              })
            );
          };
        (n == null ? void 0 : n.listeners) !== !1 && c() && (u.listeners = !0),
          qe(this, it, m0).call(this, { ...u, ...n });
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && qe(this, it, vh).call(this);
      }
    }),
    (mn = new WeakMap()),
    ($e = new WeakMap()),
    (Su = new WeakMap()),
    (nn = new WeakMap()),
    (vi = new WeakMap()),
    (ks = new WeakMap()),
    (Or = new WeakMap()),
    (ma = new WeakMap()),
    (_u = new WeakMap()),
    (js = new WeakMap()),
    (Ls = new WeakMap()),
    (bi = new WeakMap()),
    (xi = new WeakMap()),
    (Cr = new WeakMap()),
    (Bs = new WeakMap()),
    (it = new WeakSet()),
    (Il = function (n) {
      qe(this, it, Sh).call(this);
      let i = w(this, $e).fetch(this.options, n);
      return (n != null && n.throwOnError) || (i = i.catch(Vn)), i;
    }),
    (ph = function () {
      qe(this, it, bh).call(this);
      const n = Ts(this.options.staleTime, w(this, $e));
      if (Ri || w(this, nn).isStale || !fh(n)) return;
      const s = i0(w(this, nn).dataUpdatedAt, n) + 1;
      fe(
        this,
        bi,
        setTimeout(() => {
          w(this, nn).isStale || this.updateResult();
        }, s),
      );
    }),
    (yh = function () {
      return (
        (typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(w(this, $e))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (gh = function (n) {
      qe(this, it, xh).call(this),
        fe(this, Cr, n),
        !(
          Ri ||
          Wn(this.options.enabled, w(this, $e)) === !1 ||
          !fh(w(this, Cr)) ||
          w(this, Cr) === 0
        ) &&
          fe(
            this,
            xi,
            setInterval(
              () => {
                (this.options.refetchIntervalInBackground || Jh.isFocused()) &&
                  qe(this, it, Il).call(this);
              },
              w(this, Cr),
            ),
          );
    }),
    (vh = function () {
      qe(this, it, ph).call(this),
        qe(this, it, gh).call(this, qe(this, it, yh).call(this));
    }),
    (bh = function () {
      w(this, bi) && (clearTimeout(w(this, bi)), fe(this, bi, void 0));
    }),
    (xh = function () {
      w(this, xi) && (clearInterval(w(this, xi)), fe(this, xi, void 0));
    }),
    (Sh = function () {
      const n = w(this, mn).getQueryCache().build(w(this, mn), this.options);
      if (n === w(this, $e)) return;
      const i = w(this, $e);
      fe(this, $e, n),
        fe(this, Su, n.state),
        this.hasListeners() &&
          (i == null || i.removeObserver(this), n.addObserver(this));
    }),
    (m0 = function (n) {
      zt.batch(() => {
        n.listeners &&
          this.listeners.forEach((i) => {
            i(w(this, nn));
          }),
          w(this, mn)
            .getQueryCache()
            .notify({ query: w(this, $e), type: "observerResultsUpdated" });
      });
    }),
    Gv);
function OT(a, n) {
  return (
    Wn(n.enabled, a) !== !1 &&
    a.state.data === void 0 &&
    !(a.state.status === "error" && n.retryOnMount === !1)
  );
}
function vv(a, n) {
  return OT(a, n) || (a.state.data !== void 0 && _h(a, n, n.refetchOnMount));
}
function _h(a, n, i) {
  if (Wn(n.enabled, a) !== !1) {
    const s = typeof i == "function" ? i(a) : i;
    return s === "always" || (s !== !1 && Ph(a, n));
  }
  return !1;
}
function bv(a, n, i, s) {
  return (
    (a !== n || Wn(s.enabled, a) === !1) &&
    (!i.suspense || a.state.status !== "error") &&
    Ph(a, i)
  );
}
function Ph(a, n) {
  return Wn(n.enabled, a) !== !1 && a.isStaleByTime(Ts(n.staleTime, a));
}
function CT(a, n) {
  return !cc(a.getCurrentResult(), n);
}
var Dr,
  Mr,
  pn,
  Xa,
  $a,
  Ko,
  wh,
  Fv,
  DT =
    ((Fv = class extends Fs {
      constructor(i, s) {
        super();
        Oe(this, $a);
        Oe(this, Dr);
        Oe(this, Mr);
        Oe(this, pn);
        Oe(this, Xa);
        fe(this, Dr, i),
          this.setOptions(s),
          this.bindMethods(),
          qe(this, $a, Ko).call(this);
      }
      bindMethods() {
        (this.mutate = this.mutate.bind(this)),
          (this.reset = this.reset.bind(this));
      }
      setOptions(i) {
        var u;
        const s = this.options;
        (this.options = w(this, Dr).defaultMutationOptions(i)),
          cc(this.options, s) ||
            w(this, Dr)
              .getMutationCache()
              .notify({
                type: "observerOptionsUpdated",
                mutation: w(this, pn),
                observer: this,
              }),
          s != null &&
          s.mutationKey &&
          this.options.mutationKey &&
          Ai(s.mutationKey) !== Ai(this.options.mutationKey)
            ? this.reset()
            : ((u = w(this, pn)) == null ? void 0 : u.state.status) ===
                "pending" && w(this, pn).setOptions(this.options);
      }
      onUnsubscribe() {
        var i;
        this.hasListeners() ||
          (i = w(this, pn)) == null ||
          i.removeObserver(this);
      }
      onMutationUpdate(i) {
        qe(this, $a, Ko).call(this), qe(this, $a, wh).call(this, i);
      }
      getCurrentResult() {
        return w(this, Mr);
      }
      reset() {
        var i;
        (i = w(this, pn)) == null || i.removeObserver(this),
          fe(this, pn, void 0),
          qe(this, $a, Ko).call(this),
          qe(this, $a, wh).call(this);
      }
      mutate(i, s) {
        var u;
        return (
          fe(this, Xa, s),
          (u = w(this, pn)) == null || u.removeObserver(this),
          fe(
            this,
            pn,
            w(this, Dr).getMutationCache().build(w(this, Dr), this.options),
          ),
          w(this, pn).addObserver(this),
          w(this, pn).execute(i)
        );
      }
    }),
    (Dr = new WeakMap()),
    (Mr = new WeakMap()),
    (pn = new WeakMap()),
    (Xa = new WeakMap()),
    ($a = new WeakSet()),
    (Ko = function () {
      var s;
      const i = ((s = w(this, pn)) == null ? void 0 : s.state) ?? h0();
      fe(this, Mr, {
        ...i,
        isPending: i.status === "pending",
        isSuccess: i.status === "success",
        isError: i.status === "error",
        isIdle: i.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      });
    }),
    (wh = function (i) {
      zt.batch(() => {
        var s, u, c, d, h, p, m, g;
        if (w(this, Xa) && this.hasListeners()) {
          const x = w(this, Mr).variables,
            A = w(this, Mr).context;
          (i == null ? void 0 : i.type) === "success"
            ? ((u = (s = w(this, Xa)).onSuccess) == null ||
                u.call(s, i.data, x, A),
              (d = (c = w(this, Xa)).onSettled) == null ||
                d.call(c, i.data, null, x, A))
            : (i == null ? void 0 : i.type) === "error" &&
              ((p = (h = w(this, Xa)).onError) == null ||
                p.call(h, i.error, x, A),
              (g = (m = w(this, Xa)).onSettled) == null ||
                g.call(m, void 0, i.error, x, A));
        }
        this.listeners.forEach((x) => {
          x(w(this, Mr));
        });
      });
    }),
    Fv),
  p0 = N.createContext(void 0),
  y0 = (a) => {
    const n = N.useContext(p0);
    if (!n)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return n;
  },
  MT = ({ client: a, children: n }) => (
    N.useEffect(
      () => (
        a.mount(),
        () => {
          a.unmount();
        }
      ),
      [a],
    ),
    I.jsx(p0.Provider, { value: a, children: n })
  ),
  g0 = N.createContext(!1),
  NT = () => N.useContext(g0);
g0.Provider;
function zT() {
  let a = !1;
  return {
    clearReset: () => {
      a = !1;
    },
    reset: () => {
      a = !0;
    },
    isReset: () => a,
  };
}
var UT = N.createContext(zT()),
  kT = () => N.useContext(UT);
function v0(a, n) {
  return typeof a == "function" ? a(...n) : !!a;
}
function Eh() {}
var jT = (a, n) => {
    (a.suspense || a.throwOnError || a.experimental_prefetchInRender) &&
      (n.isReset() || (a.retryOnMount = !1));
  },
  LT = (a) => {
    N.useEffect(() => {
      a.clearReset();
    }, [a]);
  },
  BT = ({
    result: a,
    errorResetBoundary: n,
    throwOnError: i,
    query: s,
    suspense: u,
  }) =>
    a.isError &&
    !n.isReset() &&
    !a.isFetching &&
    s &&
    ((u && a.data === void 0) || v0(i, [a.error, s])),
  HT = (a) => {
    const n = a.staleTime;
    a.suspense &&
      ((a.staleTime =
        typeof n == "function"
          ? (...i) => Math.max(n(...i), 1e3)
          : Math.max(n ?? 1e3, 1e3)),
      typeof a.gcTime == "number" && (a.gcTime = Math.max(a.gcTime, 1e3)));
  },
  VT = (a, n) => a.isLoading && a.isFetching && !n,
  qT = (a, n) => (a == null ? void 0 : a.suspense) && n.isPending,
  xv = (a, n, i) =>
    n.fetchOptimistic(a).catch(() => {
      i.clearReset();
    });
function ZT(a, n, i) {
  var x, A, b, T, O;
  const s = y0(),
    u = NT(),
    c = kT(),
    d = s.defaultQueryOptions(a);
  (A =
    (x = s.getDefaultOptions().queries) == null
      ? void 0
      : x._experimental_beforeQuery) == null || A.call(x, d),
    (d._optimisticResults = u ? "isRestoring" : "optimistic"),
    HT(d),
    jT(d, c),
    LT(c);
  const h = !s.getQueryCache().get(d.queryHash),
    [p] = N.useState(() => new n(s, d)),
    m = p.getOptimisticResult(d),
    g = !u && a.subscribed !== !1;
  if (
    (N.useSyncExternalStore(
      N.useCallback(
        (R) => {
          const j = g ? p.subscribe(zt.batchCalls(R)) : Eh;
          return p.updateResult(), j;
        },
        [p, g],
      ),
      () => p.getCurrentResult(),
      () => p.getCurrentResult(),
    ),
    N.useEffect(() => {
      p.setOptions(d, { listeners: !1 });
    }, [d, p]),
    qT(d, m))
  )
    throw xv(d, p, c);
  if (
    BT({
      result: m,
      errorResetBoundary: c,
      throwOnError: d.throwOnError,
      query: s.getQueryCache().get(d.queryHash),
      suspense: d.suspense,
    })
  )
    throw m.error;
  if (
    ((T =
      (b = s.getDefaultOptions().queries) == null
        ? void 0
        : b._experimental_afterQuery) == null || T.call(b, d, m),
    d.experimental_prefetchInRender && !Ri && VT(m, u))
  ) {
    const R = h
      ? xv(d, p, c)
      : (O = s.getQueryCache().get(d.queryHash)) == null
        ? void 0
        : O.promise;
    R == null ||
      R.catch(Eh).finally(() => {
        p.updateResult();
      });
  }
  return d.notifyOnChangeProps ? m : p.trackResult(m);
}
function YT(a, n) {
  return ZT(a, AT);
}
function b0(a, n) {
  const i = y0(),
    [s] = N.useState(() => new DT(i, a));
  N.useEffect(() => {
    s.setOptions(a);
  }, [s, a]);
  const u = N.useSyncExternalStore(
      N.useCallback((d) => s.subscribe(zt.batchCalls(d)), [s]),
      () => s.getCurrentResult(),
      () => s.getCurrentResult(),
    ),
    c = N.useCallback(
      (d, h) => {
        s.mutate(d, h).catch(Eh);
      },
      [s],
    );
  if (u.error && v0(s.options.throwOnError, [u.error])) throw u.error;
  return { ...u, mutate: c, mutateAsync: u.mutate };
}
function x0(a, n) {
  return function () {
    return a.apply(n, arguments);
  };
}
const { toString: QT } = Object.prototype,
  { getPrototypeOf: Wh } = Object,
  wc = ((a) => (n) => {
    const i = QT.call(n);
    return a[i] || (a[i] = i.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  aa = (a) => ((a = a.toLowerCase()), (n) => wc(n) === a),
  Ec = (a) => (n) => typeof n === a,
  { isArray: Xs } = Array,
  vu = Ec("undefined");
function GT(a) {
  return (
    a !== null &&
    !vu(a) &&
    a.constructor !== null &&
    !vu(a.constructor) &&
    Tn(a.constructor.isBuffer) &&
    a.constructor.isBuffer(a)
  );
}
const S0 = aa("ArrayBuffer");
function FT(a) {
  let n;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (n = ArrayBuffer.isView(a))
      : (n = a && a.buffer && S0(a.buffer)),
    n
  );
}
const XT = Ec("string"),
  Tn = Ec("function"),
  _0 = Ec("number"),
  Tc = (a) => a !== null && typeof a == "object",
  KT = (a) => a === !0 || a === !1,
  $o = (a) => {
    if (wc(a) !== "object") return !1;
    const n = Wh(a);
    return (
      (n === null ||
        n === Object.prototype ||
        Object.getPrototypeOf(n) === null) &&
      !(Symbol.toStringTag in a) &&
      !(Symbol.iterator in a)
    );
  },
  $T = aa("Date"),
  JT = aa("File"),
  PT = aa("Blob"),
  WT = aa("FileList"),
  IT = (a) => Tc(a) && Tn(a.pipe),
  eR = (a) => {
    let n;
    return (
      a &&
      ((typeof FormData == "function" && a instanceof FormData) ||
        (Tn(a.append) &&
          ((n = wc(a)) === "formdata" ||
            (n === "object" &&
              Tn(a.toString) &&
              a.toString() === "[object FormData]"))))
    );
  },
  tR = aa("URLSearchParams"),
  [nR, aR, rR, iR] = ["ReadableStream", "Request", "Response", "Headers"].map(
    aa,
  ),
  sR = (a) =>
    a.trim ? a.trim() : a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ou(a, n, { allOwnKeys: i = !1 } = {}) {
  if (a === null || typeof a > "u") return;
  let s, u;
  if ((typeof a != "object" && (a = [a]), Xs(a)))
    for (s = 0, u = a.length; s < u; s++) n.call(null, a[s], s, a);
  else {
    const c = i ? Object.getOwnPropertyNames(a) : Object.keys(a),
      d = c.length;
    let h;
    for (s = 0; s < d; s++) (h = c[s]), n.call(null, a[h], h, a);
  }
}
function w0(a, n) {
  n = n.toLowerCase();
  const i = Object.keys(a);
  let s = i.length,
    u;
  for (; s-- > 0; ) if (((u = i[s]), n === u.toLowerCase())) return u;
  return null;
}
const di =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  E0 = (a) => !vu(a) && a !== di;
function Th() {
  const { caseless: a } = (E0(this) && this) || {},
    n = {},
    i = (s, u) => {
      const c = (a && w0(n, u)) || u;
      $o(n[c]) && $o(s)
        ? (n[c] = Th(n[c], s))
        : $o(s)
          ? (n[c] = Th({}, s))
          : Xs(s)
            ? (n[c] = s.slice())
            : (n[c] = s);
    };
  for (let s = 0, u = arguments.length; s < u; s++)
    arguments[s] && Ou(arguments[s], i);
  return n;
}
const lR = (a, n, i, { allOwnKeys: s } = {}) => (
    Ou(
      n,
      (u, c) => {
        i && Tn(u) ? (a[c] = x0(u, i)) : (a[c] = u);
      },
      { allOwnKeys: s },
    ),
    a
  ),
  uR = (a) => (a.charCodeAt(0) === 65279 && (a = a.slice(1)), a),
  oR = (a, n, i, s) => {
    (a.prototype = Object.create(n.prototype, s)),
      (a.prototype.constructor = a),
      Object.defineProperty(a, "super", { value: n.prototype }),
      i && Object.assign(a.prototype, i);
  },
  cR = (a, n, i, s) => {
    let u, c, d;
    const h = {};
    if (((n = n || {}), a == null)) return n;
    do {
      for (u = Object.getOwnPropertyNames(a), c = u.length; c-- > 0; )
        (d = u[c]), (!s || s(d, a, n)) && !h[d] && ((n[d] = a[d]), (h[d] = !0));
      a = i !== !1 && Wh(a);
    } while (a && (!i || i(a, n)) && a !== Object.prototype);
    return n;
  },
  fR = (a, n, i) => {
    (a = String(a)),
      (i === void 0 || i > a.length) && (i = a.length),
      (i -= n.length);
    const s = a.indexOf(n, i);
    return s !== -1 && s === i;
  },
  dR = (a) => {
    if (!a) return null;
    if (Xs(a)) return a;
    let n = a.length;
    if (!_0(n)) return null;
    const i = new Array(n);
    for (; n-- > 0; ) i[n] = a[n];
    return i;
  },
  hR = (
    (a) => (n) =>
      a && n instanceof a
  )(typeof Uint8Array < "u" && Wh(Uint8Array)),
  mR = (a, n) => {
    const s = (a && a[Symbol.iterator]).call(a);
    let u;
    for (; (u = s.next()) && !u.done; ) {
      const c = u.value;
      n.call(a, c[0], c[1]);
    }
  },
  pR = (a, n) => {
    let i;
    const s = [];
    for (; (i = a.exec(n)) !== null; ) s.push(i);
    return s;
  },
  yR = aa("HTMLFormElement"),
  gR = (a) =>
    a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (i, s, u) {
      return s.toUpperCase() + u;
    }),
  Sv = (
    ({ hasOwnProperty: a }) =>
    (n, i) =>
      a.call(n, i)
  )(Object.prototype),
  vR = aa("RegExp"),
  T0 = (a, n) => {
    const i = Object.getOwnPropertyDescriptors(a),
      s = {};
    Ou(i, (u, c) => {
      let d;
      (d = n(u, c, a)) !== !1 && (s[c] = d || u);
    }),
      Object.defineProperties(a, s);
  },
  bR = (a) => {
    T0(a, (n, i) => {
      if (Tn(a) && ["arguments", "caller", "callee"].indexOf(i) !== -1)
        return !1;
      const s = a[i];
      if (Tn(s)) {
        if (((n.enumerable = !1), "writable" in n)) {
          n.writable = !1;
          return;
        }
        n.set ||
          (n.set = () => {
            throw Error("Can not rewrite read-only method '" + i + "'");
          });
      }
    });
  },
  xR = (a, n) => {
    const i = {},
      s = (u) => {
        u.forEach((c) => {
          i[c] = !0;
        });
      };
    return Xs(a) ? s(a) : s(String(a).split(n)), i;
  },
  SR = () => {},
  _R = (a, n) => (a != null && Number.isFinite((a = +a)) ? a : n),
  Jd = "abcdefghijklmnopqrstuvwxyz",
  _v = "0123456789",
  R0 = { DIGIT: _v, ALPHA: Jd, ALPHA_DIGIT: Jd + Jd.toUpperCase() + _v },
  wR = (a = 16, n = R0.ALPHA_DIGIT) => {
    let i = "";
    const { length: s } = n;
    for (; a--; ) i += n[(Math.random() * s) | 0];
    return i;
  };
function ER(a) {
  return !!(
    a &&
    Tn(a.append) &&
    a[Symbol.toStringTag] === "FormData" &&
    a[Symbol.iterator]
  );
}
const TR = (a) => {
    const n = new Array(10),
      i = (s, u) => {
        if (Tc(s)) {
          if (n.indexOf(s) >= 0) return;
          if (!("toJSON" in s)) {
            n[u] = s;
            const c = Xs(s) ? [] : {};
            return (
              Ou(s, (d, h) => {
                const p = i(d, u + 1);
                !vu(p) && (c[h] = p);
              }),
              (n[u] = void 0),
              c
            );
          }
        }
        return s;
      };
    return i(a, 0);
  },
  RR = aa("AsyncFunction"),
  AR = (a) => a && (Tc(a) || Tn(a)) && Tn(a.then) && Tn(a.catch),
  A0 = ((a, n) =>
    a
      ? setImmediate
      : n
        ? ((i, s) => (
            di.addEventListener(
              "message",
              ({ source: u, data: c }) => {
                u === di && c === i && s.length && s.shift()();
              },
              !1,
            ),
            (u) => {
              s.push(u), di.postMessage(i, "*");
            }
          ))(`axios@${Math.random()}`, [])
        : (i) => setTimeout(i))(
    typeof setImmediate == "function",
    Tn(di.postMessage),
  ),
  OR =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(di)
      : (typeof process < "u" && process.nextTick) || A0,
  B = {
    isArray: Xs,
    isArrayBuffer: S0,
    isBuffer: GT,
    isFormData: eR,
    isArrayBufferView: FT,
    isString: XT,
    isNumber: _0,
    isBoolean: KT,
    isObject: Tc,
    isPlainObject: $o,
    isReadableStream: nR,
    isRequest: aR,
    isResponse: rR,
    isHeaders: iR,
    isUndefined: vu,
    isDate: $T,
    isFile: JT,
    isBlob: PT,
    isRegExp: vR,
    isFunction: Tn,
    isStream: IT,
    isURLSearchParams: tR,
    isTypedArray: hR,
    isFileList: WT,
    forEach: Ou,
    merge: Th,
    extend: lR,
    trim: sR,
    stripBOM: uR,
    inherits: oR,
    toFlatObject: cR,
    kindOf: wc,
    kindOfTest: aa,
    endsWith: fR,
    toArray: dR,
    forEachEntry: mR,
    matchAll: pR,
    isHTMLForm: yR,
    hasOwnProperty: Sv,
    hasOwnProp: Sv,
    reduceDescriptors: T0,
    freezeMethods: bR,
    toObjectSet: xR,
    toCamelCase: gR,
    noop: SR,
    toFiniteNumber: _R,
    findKey: w0,
    global: di,
    isContextDefined: E0,
    ALPHABET: R0,
    generateString: wR,
    isSpecCompliantForm: ER,
    toJSONObject: TR,
    isAsyncFn: RR,
    isThenable: AR,
    setImmediate: A0,
    asap: OR,
  };
function Be(a, n, i, s, u) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = a),
    (this.name = "AxiosError"),
    n && (this.code = n),
    i && (this.config = i),
    s && (this.request = s),
    u && ((this.response = u), (this.status = u.status ? u.status : null));
}
B.inherits(Be, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: B.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const O0 = Be.prototype,
  C0 = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((a) => {
  C0[a] = { value: a };
});
Object.defineProperties(Be, C0);
Object.defineProperty(O0, "isAxiosError", { value: !0 });
Be.from = (a, n, i, s, u, c) => {
  const d = Object.create(O0);
  return (
    B.toFlatObject(
      a,
      d,
      function (p) {
        return p !== Error.prototype;
      },
      (h) => h !== "isAxiosError",
    ),
    Be.call(d, a.message, n, i, s, u),
    (d.cause = a),
    (d.name = a.name),
    c && Object.assign(d, c),
    d
  );
};
const CR = null;
function Rh(a) {
  return B.isPlainObject(a) || B.isArray(a);
}
function D0(a) {
  return B.endsWith(a, "[]") ? a.slice(0, -2) : a;
}
function wv(a, n, i) {
  return a
    ? a
        .concat(n)
        .map(function (u, c) {
          return (u = D0(u)), !i && c ? "[" + u + "]" : u;
        })
        .join(i ? "." : "")
    : n;
}
function DR(a) {
  return B.isArray(a) && !a.some(Rh);
}
const MR = B.toFlatObject(B, {}, null, function (n) {
  return /^is[A-Z]/.test(n);
});
function Rc(a, n, i) {
  if (!B.isObject(a)) throw new TypeError("target must be an object");
  (n = n || new FormData()),
    (i = B.toFlatObject(
      i,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (O, R) {
        return !B.isUndefined(R[O]);
      },
    ));
  const s = i.metaTokens,
    u = i.visitor || g,
    c = i.dots,
    d = i.indexes,
    p = (i.Blob || (typeof Blob < "u" && Blob)) && B.isSpecCompliantForm(n);
  if (!B.isFunction(u)) throw new TypeError("visitor must be a function");
  function m(T) {
    if (T === null) return "";
    if (B.isDate(T)) return T.toISOString();
    if (!p && B.isBlob(T))
      throw new Be("Blob is not supported. Use a Buffer instead.");
    return B.isArrayBuffer(T) || B.isTypedArray(T)
      ? p && typeof Blob == "function"
        ? new Blob([T])
        : Buffer.from(T)
      : T;
  }
  function g(T, O, R) {
    let j = T;
    if (T && !R && typeof T == "object") {
      if (B.endsWith(O, "{}"))
        (O = s ? O : O.slice(0, -2)), (T = JSON.stringify(T));
      else if (
        (B.isArray(T) && DR(T)) ||
        ((B.isFileList(T) || B.endsWith(O, "[]")) && (j = B.toArray(T)))
      )
        return (
          (O = D0(O)),
          j.forEach(function (V, se) {
            !(B.isUndefined(V) || V === null) &&
              n.append(
                d === !0 ? wv([O], se, c) : d === null ? O : O + "[]",
                m(V),
              );
          }),
          !1
        );
    }
    return Rh(T) ? !0 : (n.append(wv(R, O, c), m(T)), !1);
  }
  const x = [],
    A = Object.assign(MR, {
      defaultVisitor: g,
      convertValue: m,
      isVisitable: Rh,
    });
  function b(T, O) {
    if (!B.isUndefined(T)) {
      if (x.indexOf(T) !== -1)
        throw Error("Circular reference detected in " + O.join("."));
      x.push(T),
        B.forEach(T, function (j, L) {
          (!(B.isUndefined(j) || j === null) &&
            u.call(n, j, B.isString(L) ? L.trim() : L, O, A)) === !0 &&
            b(j, O ? O.concat(L) : [L]);
        }),
        x.pop();
    }
  }
  if (!B.isObject(a)) throw new TypeError("data must be an object");
  return b(a), n;
}
function Ev(a) {
  const n = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g, function (s) {
    return n[s];
  });
}
function Ih(a, n) {
  (this._pairs = []), a && Rc(a, this, n);
}
const M0 = Ih.prototype;
M0.append = function (n, i) {
  this._pairs.push([n, i]);
};
M0.toString = function (n) {
  const i = n
    ? function (s) {
        return n.call(this, s, Ev);
      }
    : Ev;
  return this._pairs
    .map(function (u) {
      return i(u[0]) + "=" + i(u[1]);
    }, "")
    .join("&");
};
function NR(a) {
  return encodeURIComponent(a)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function N0(a, n, i) {
  if (!n) return a;
  const s = (i && i.encode) || NR;
  B.isFunction(i) && (i = { serialize: i });
  const u = i && i.serialize;
  let c;
  if (
    (u
      ? (c = u(n, i))
      : (c = B.isURLSearchParams(n) ? n.toString() : new Ih(n, i).toString(s)),
    c)
  ) {
    const d = a.indexOf("#");
    d !== -1 && (a = a.slice(0, d)),
      (a += (a.indexOf("?") === -1 ? "?" : "&") + c);
  }
  return a;
}
class Tv {
  constructor() {
    this.handlers = [];
  }
  use(n, i, s) {
    return (
      this.handlers.push({
        fulfilled: n,
        rejected: i,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(n) {
    this.handlers[n] && (this.handlers[n] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(n) {
    B.forEach(this.handlers, function (s) {
      s !== null && n(s);
    });
  }
}
const z0 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  zR = typeof URLSearchParams < "u" ? URLSearchParams : Ih,
  UR = typeof FormData < "u" ? FormData : null,
  kR = typeof Blob < "u" ? Blob : null,
  jR = {
    isBrowser: !0,
    classes: { URLSearchParams: zR, FormData: UR, Blob: kR },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  em = typeof window < "u" && typeof document < "u",
  Ah = (typeof navigator == "object" && navigator) || void 0,
  LR =
    em &&
    (!Ah || ["ReactNative", "NativeScript", "NS"].indexOf(Ah.product) < 0),
  BR =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  HR = (em && window.location.href) || "http://localhost",
  VR = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: em,
        hasStandardBrowserEnv: LR,
        hasStandardBrowserWebWorkerEnv: BR,
        navigator: Ah,
        origin: HR,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Xt = { ...VR, ...jR };
function qR(a, n) {
  return Rc(
    a,
    new Xt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (i, s, u, c) {
          return Xt.isNode && B.isBuffer(i)
            ? (this.append(s, i.toString("base64")), !1)
            : c.defaultVisitor.apply(this, arguments);
        },
      },
      n,
    ),
  );
}
function ZR(a) {
  return B.matchAll(/\w+|\[(\w*)]/g, a).map((n) =>
    n[0] === "[]" ? "" : n[1] || n[0],
  );
}
function YR(a) {
  const n = {},
    i = Object.keys(a);
  let s;
  const u = i.length;
  let c;
  for (s = 0; s < u; s++) (c = i[s]), (n[c] = a[c]);
  return n;
}
function U0(a) {
  function n(i, s, u, c) {
    let d = i[c++];
    if (d === "__proto__") return !0;
    const h = Number.isFinite(+d),
      p = c >= i.length;
    return (
      (d = !d && B.isArray(u) ? u.length : d),
      p
        ? (B.hasOwnProp(u, d) ? (u[d] = [u[d], s]) : (u[d] = s), !h)
        : ((!u[d] || !B.isObject(u[d])) && (u[d] = []),
          n(i, s, u[d], c) && B.isArray(u[d]) && (u[d] = YR(u[d])),
          !h)
    );
  }
  if (B.isFormData(a) && B.isFunction(a.entries)) {
    const i = {};
    return (
      B.forEachEntry(a, (s, u) => {
        n(ZR(s), u, i, 0);
      }),
      i
    );
  }
  return null;
}
function QR(a, n, i) {
  if (B.isString(a))
    try {
      return (n || JSON.parse)(a), B.trim(a);
    } catch (s) {
      if (s.name !== "SyntaxError") throw s;
    }
  return (i || JSON.stringify)(a);
}
const Cu = {
  transitional: z0,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (n, i) {
      const s = i.getContentType() || "",
        u = s.indexOf("application/json") > -1,
        c = B.isObject(n);
      if ((c && B.isHTMLForm(n) && (n = new FormData(n)), B.isFormData(n)))
        return u ? JSON.stringify(U0(n)) : n;
      if (
        B.isArrayBuffer(n) ||
        B.isBuffer(n) ||
        B.isStream(n) ||
        B.isFile(n) ||
        B.isBlob(n) ||
        B.isReadableStream(n)
      )
        return n;
      if (B.isArrayBufferView(n)) return n.buffer;
      if (B.isURLSearchParams(n))
        return (
          i.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          n.toString()
        );
      let h;
      if (c) {
        if (s.indexOf("application/x-www-form-urlencoded") > -1)
          return qR(n, this.formSerializer).toString();
        if ((h = B.isFileList(n)) || s.indexOf("multipart/form-data") > -1) {
          const p = this.env && this.env.FormData;
          return Rc(
            h ? { "files[]": n } : n,
            p && new p(),
            this.formSerializer,
          );
        }
      }
      return c || u ? (i.setContentType("application/json", !1), QR(n)) : n;
    },
  ],
  transformResponse: [
    function (n) {
      const i = this.transitional || Cu.transitional,
        s = i && i.forcedJSONParsing,
        u = this.responseType === "json";
      if (B.isResponse(n) || B.isReadableStream(n)) return n;
      if (n && B.isString(n) && ((s && !this.responseType) || u)) {
        const d = !(i && i.silentJSONParsing) && u;
        try {
          return JSON.parse(n);
        } catch (h) {
          if (d)
            throw h.name === "SyntaxError"
              ? Be.from(h, Be.ERR_BAD_RESPONSE, this, null, this.response)
              : h;
        }
      }
      return n;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Xt.classes.FormData, Blob: Xt.classes.Blob },
  validateStatus: function (n) {
    return n >= 200 && n < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
B.forEach(["delete", "get", "head", "post", "put", "patch"], (a) => {
  Cu.headers[a] = {};
});
const GR = B.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  FR = (a) => {
    const n = {};
    let i, s, u;
    return (
      a &&
        a
          .split(
            `
`,
          )
          .forEach(function (d) {
            (u = d.indexOf(":")),
              (i = d.substring(0, u).trim().toLowerCase()),
              (s = d.substring(u + 1).trim()),
              !(!i || (n[i] && GR[i])) &&
                (i === "set-cookie"
                  ? n[i]
                    ? n[i].push(s)
                    : (n[i] = [s])
                  : (n[i] = n[i] ? n[i] + ", " + s : s));
          }),
      n
    );
  },
  Rv = Symbol("internals");
function $l(a) {
  return a && String(a).trim().toLowerCase();
}
function Jo(a) {
  return a === !1 || a == null ? a : B.isArray(a) ? a.map(Jo) : String(a);
}
function XR(a) {
  const n = Object.create(null),
    i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = i.exec(a)); ) n[s[1]] = s[2];
  return n;
}
const KR = (a) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());
function Pd(a, n, i, s, u) {
  if (B.isFunction(s)) return s.call(this, n, i);
  if ((u && (n = i), !!B.isString(n))) {
    if (B.isString(s)) return n.indexOf(s) !== -1;
    if (B.isRegExp(s)) return s.test(n);
  }
}
function $R(a) {
  return a
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (n, i, s) => i.toUpperCase() + s);
}
function JR(a, n) {
  const i = B.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(a, s + i, {
      value: function (u, c, d) {
        return this[s].call(this, n, u, c, d);
      },
      configurable: !0,
    });
  });
}
let vn = class {
  constructor(n) {
    n && this.set(n);
  }
  set(n, i, s) {
    const u = this;
    function c(h, p, m) {
      const g = $l(p);
      if (!g) throw new Error("header name must be a non-empty string");
      const x = B.findKey(u, g);
      (!x || u[x] === void 0 || m === !0 || (m === void 0 && u[x] !== !1)) &&
        (u[x || p] = Jo(h));
    }
    const d = (h, p) => B.forEach(h, (m, g) => c(m, g, p));
    if (B.isPlainObject(n) || n instanceof this.constructor) d(n, i);
    else if (B.isString(n) && (n = n.trim()) && !KR(n)) d(FR(n), i);
    else if (B.isHeaders(n)) for (const [h, p] of n.entries()) c(p, h, s);
    else n != null && c(i, n, s);
    return this;
  }
  get(n, i) {
    if (((n = $l(n)), n)) {
      const s = B.findKey(this, n);
      if (s) {
        const u = this[s];
        if (!i) return u;
        if (i === !0) return XR(u);
        if (B.isFunction(i)) return i.call(this, u, s);
        if (B.isRegExp(i)) return i.exec(u);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, i) {
    if (((n = $l(n)), n)) {
      const s = B.findKey(this, n);
      return !!(s && this[s] !== void 0 && (!i || Pd(this, this[s], s, i)));
    }
    return !1;
  }
  delete(n, i) {
    const s = this;
    let u = !1;
    function c(d) {
      if (((d = $l(d)), d)) {
        const h = B.findKey(s, d);
        h && (!i || Pd(s, s[h], h, i)) && (delete s[h], (u = !0));
      }
    }
    return B.isArray(n) ? n.forEach(c) : c(n), u;
  }
  clear(n) {
    const i = Object.keys(this);
    let s = i.length,
      u = !1;
    for (; s--; ) {
      const c = i[s];
      (!n || Pd(this, this[c], c, n, !0)) && (delete this[c], (u = !0));
    }
    return u;
  }
  normalize(n) {
    const i = this,
      s = {};
    return (
      B.forEach(this, (u, c) => {
        const d = B.findKey(s, c);
        if (d) {
          (i[d] = Jo(u)), delete i[c];
          return;
        }
        const h = n ? $R(c) : String(c).trim();
        h !== c && delete i[c], (i[h] = Jo(u)), (s[h] = !0);
      }),
      this
    );
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const i = Object.create(null);
    return (
      B.forEach(this, (s, u) => {
        s != null && s !== !1 && (i[u] = n && B.isArray(s) ? s.join(", ") : s);
      }),
      i
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([n, i]) => n + ": " + i).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(n) {
    return n instanceof this ? n : new this(n);
  }
  static concat(n, ...i) {
    const s = new this(n);
    return i.forEach((u) => s.set(u)), s;
  }
  static accessor(n) {
    const s = (this[Rv] = this[Rv] = { accessors: {} }).accessors,
      u = this.prototype;
    function c(d) {
      const h = $l(d);
      s[h] || (JR(u, d), (s[h] = !0));
    }
    return B.isArray(n) ? n.forEach(c) : c(n), this;
  }
};
vn.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
B.reduceDescriptors(vn.prototype, ({ value: a }, n) => {
  let i = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => a,
    set(s) {
      this[i] = s;
    },
  };
});
B.freezeMethods(vn);
function Wd(a, n) {
  const i = this || Cu,
    s = n || i,
    u = vn.from(s.headers);
  let c = s.data;
  return (
    B.forEach(a, function (h) {
      c = h.call(i, c, u.normalize(), n ? n.status : void 0);
    }),
    u.normalize(),
    c
  );
}
function k0(a) {
  return !!(a && a.__CANCEL__);
}
function Ks(a, n, i) {
  Be.call(this, a ?? "canceled", Be.ERR_CANCELED, n, i),
    (this.name = "CanceledError");
}
B.inherits(Ks, Be, { __CANCEL__: !0 });
function j0(a, n, i) {
  const s = i.config.validateStatus;
  !i.status || !s || s(i.status)
    ? a(i)
    : n(
        new Be(
          "Request failed with status code " + i.status,
          [Be.ERR_BAD_REQUEST, Be.ERR_BAD_RESPONSE][
            Math.floor(i.status / 100) - 4
          ],
          i.config,
          i.request,
          i,
        ),
      );
}
function PR(a) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(a);
  return (n && n[1]) || "";
}
function WR(a, n) {
  a = a || 10;
  const i = new Array(a),
    s = new Array(a);
  let u = 0,
    c = 0,
    d;
  return (
    (n = n !== void 0 ? n : 1e3),
    function (p) {
      const m = Date.now(),
        g = s[c];
      d || (d = m), (i[u] = p), (s[u] = m);
      let x = c,
        A = 0;
      for (; x !== u; ) (A += i[x++]), (x = x % a);
      if (((u = (u + 1) % a), u === c && (c = (c + 1) % a), m - d < n)) return;
      const b = g && m - g;
      return b ? Math.round((A * 1e3) / b) : void 0;
    }
  );
}
function IR(a, n) {
  let i = 0,
    s = 1e3 / n,
    u,
    c;
  const d = (m, g = Date.now()) => {
    (i = g), (u = null), c && (clearTimeout(c), (c = null)), a.apply(null, m);
  };
  return [
    (...m) => {
      const g = Date.now(),
        x = g - i;
      x >= s
        ? d(m, g)
        : ((u = m),
          c ||
            (c = setTimeout(() => {
              (c = null), d(u);
            }, s - x)));
    },
    () => u && d(u),
  ];
}
const dc = (a, n, i = 3) => {
    let s = 0;
    const u = WR(50, 250);
    return IR((c) => {
      const d = c.loaded,
        h = c.lengthComputable ? c.total : void 0,
        p = d - s,
        m = u(p),
        g = d <= h;
      s = d;
      const x = {
        loaded: d,
        total: h,
        progress: h ? d / h : void 0,
        bytes: p,
        rate: m || void 0,
        estimated: m && h && g ? (h - d) / m : void 0,
        event: c,
        lengthComputable: h != null,
        [n ? "download" : "upload"]: !0,
      };
      a(x);
    }, i);
  },
  Av = (a, n) => {
    const i = a != null;
    return [(s) => n[0]({ lengthComputable: i, total: a, loaded: s }), n[1]];
  },
  Ov =
    (a) =>
    (...n) =>
      B.asap(() => a(...n)),
  eA = Xt.hasStandardBrowserEnv
    ? ((a, n) => (i) => (
        (i = new URL(i, Xt.origin)),
        a.protocol === i.protocol &&
          a.host === i.host &&
          (n || a.port === i.port)
      ))(
        new URL(Xt.origin),
        Xt.navigator && /(msie|trident)/i.test(Xt.navigator.userAgent),
      )
    : () => !0,
  tA = Xt.hasStandardBrowserEnv
    ? {
        write(a, n, i, s, u, c) {
          const d = [a + "=" + encodeURIComponent(n)];
          B.isNumber(i) && d.push("expires=" + new Date(i).toGMTString()),
            B.isString(s) && d.push("path=" + s),
            B.isString(u) && d.push("domain=" + u),
            c === !0 && d.push("secure"),
            (document.cookie = d.join("; "));
        },
        read(a) {
          const n = document.cookie.match(
            new RegExp("(^|;\\s*)(" + a + ")=([^;]*)"),
          );
          return n ? decodeURIComponent(n[3]) : null;
        },
        remove(a) {
          this.write(a, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function nA(a) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(a);
}
function aA(a, n) {
  return n ? a.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : a;
}
function L0(a, n) {
  return a && !nA(n) ? aA(a, n) : n;
}
const Cv = (a) => (a instanceof vn ? { ...a } : a);
function Oi(a, n) {
  n = n || {};
  const i = {};
  function s(m, g, x, A) {
    return B.isPlainObject(m) && B.isPlainObject(g)
      ? B.merge.call({ caseless: A }, m, g)
      : B.isPlainObject(g)
        ? B.merge({}, g)
        : B.isArray(g)
          ? g.slice()
          : g;
  }
  function u(m, g, x, A) {
    if (B.isUndefined(g)) {
      if (!B.isUndefined(m)) return s(void 0, m, x, A);
    } else return s(m, g, x, A);
  }
  function c(m, g) {
    if (!B.isUndefined(g)) return s(void 0, g);
  }
  function d(m, g) {
    if (B.isUndefined(g)) {
      if (!B.isUndefined(m)) return s(void 0, m);
    } else return s(void 0, g);
  }
  function h(m, g, x) {
    if (x in n) return s(m, g);
    if (x in a) return s(void 0, m);
  }
  const p = {
    url: c,
    method: c,
    data: c,
    baseURL: d,
    transformRequest: d,
    transformResponse: d,
    paramsSerializer: d,
    timeout: d,
    timeoutMessage: d,
    withCredentials: d,
    withXSRFToken: d,
    adapter: d,
    responseType: d,
    xsrfCookieName: d,
    xsrfHeaderName: d,
    onUploadProgress: d,
    onDownloadProgress: d,
    decompress: d,
    maxContentLength: d,
    maxBodyLength: d,
    beforeRedirect: d,
    transport: d,
    httpAgent: d,
    httpsAgent: d,
    cancelToken: d,
    socketPath: d,
    responseEncoding: d,
    validateStatus: h,
    headers: (m, g, x) => u(Cv(m), Cv(g), x, !0),
  };
  return (
    B.forEach(Object.keys(Object.assign({}, a, n)), function (g) {
      const x = p[g] || u,
        A = x(a[g], n[g], g);
      (B.isUndefined(A) && x !== h) || (i[g] = A);
    }),
    i
  );
}
const B0 = (a) => {
    const n = Oi({}, a);
    let {
      data: i,
      withXSRFToken: s,
      xsrfHeaderName: u,
      xsrfCookieName: c,
      headers: d,
      auth: h,
    } = n;
    (n.headers = d = vn.from(d)),
      (n.url = N0(L0(n.baseURL, n.url), a.params, a.paramsSerializer)),
      h &&
        d.set(
          "Authorization",
          "Basic " +
            btoa(
              (h.username || "") +
                ":" +
                (h.password ? unescape(encodeURIComponent(h.password)) : ""),
            ),
        );
    let p;
    if (B.isFormData(i)) {
      if (Xt.hasStandardBrowserEnv || Xt.hasStandardBrowserWebWorkerEnv)
        d.setContentType(void 0);
      else if ((p = d.getContentType()) !== !1) {
        const [m, ...g] = p
          ? p
              .split(";")
              .map((x) => x.trim())
              .filter(Boolean)
          : [];
        d.setContentType([m || "multipart/form-data", ...g].join("; "));
      }
    }
    if (
      Xt.hasStandardBrowserEnv &&
      (s && B.isFunction(s) && (s = s(n)), s || (s !== !1 && eA(n.url)))
    ) {
      const m = u && c && tA.read(c);
      m && d.set(u, m);
    }
    return n;
  },
  rA = typeof XMLHttpRequest < "u",
  iA =
    rA &&
    function (a) {
      return new Promise(function (i, s) {
        const u = B0(a);
        let c = u.data;
        const d = vn.from(u.headers).normalize();
        let { responseType: h, onUploadProgress: p, onDownloadProgress: m } = u,
          g,
          x,
          A,
          b,
          T;
        function O() {
          b && b(),
            T && T(),
            u.cancelToken && u.cancelToken.unsubscribe(g),
            u.signal && u.signal.removeEventListener("abort", g);
        }
        let R = new XMLHttpRequest();
        R.open(u.method.toUpperCase(), u.url, !0), (R.timeout = u.timeout);
        function j() {
          if (!R) return;
          const V = vn.from(
              "getAllResponseHeaders" in R && R.getAllResponseHeaders(),
            ),
            G = {
              data:
                !h || h === "text" || h === "json"
                  ? R.responseText
                  : R.response,
              status: R.status,
              statusText: R.statusText,
              headers: V,
              config: a,
              request: R,
            };
          j0(
            function (we) {
              i(we), O();
            },
            function (we) {
              s(we), O();
            },
            G,
          ),
            (R = null);
        }
        "onloadend" in R
          ? (R.onloadend = j)
          : (R.onreadystatechange = function () {
              !R ||
                R.readyState !== 4 ||
                (R.status === 0 &&
                  !(R.responseURL && R.responseURL.indexOf("file:") === 0)) ||
                setTimeout(j);
            }),
          (R.onabort = function () {
            R &&
              (s(new Be("Request aborted", Be.ECONNABORTED, a, R)), (R = null));
          }),
          (R.onerror = function () {
            s(new Be("Network Error", Be.ERR_NETWORK, a, R)), (R = null);
          }),
          (R.ontimeout = function () {
            let se = u.timeout
              ? "timeout of " + u.timeout + "ms exceeded"
              : "timeout exceeded";
            const G = u.transitional || z0;
            u.timeoutErrorMessage && (se = u.timeoutErrorMessage),
              s(
                new Be(
                  se,
                  G.clarifyTimeoutError ? Be.ETIMEDOUT : Be.ECONNABORTED,
                  a,
                  R,
                ),
              ),
              (R = null);
          }),
          c === void 0 && d.setContentType(null),
          "setRequestHeader" in R &&
            B.forEach(d.toJSON(), function (se, G) {
              R.setRequestHeader(G, se);
            }),
          B.isUndefined(u.withCredentials) ||
            (R.withCredentials = !!u.withCredentials),
          h && h !== "json" && (R.responseType = u.responseType),
          m && (([A, T] = dc(m, !0)), R.addEventListener("progress", A)),
          p &&
            R.upload &&
            (([x, b] = dc(p)),
            R.upload.addEventListener("progress", x),
            R.upload.addEventListener("loadend", b)),
          (u.cancelToken || u.signal) &&
            ((g = (V) => {
              R &&
                (s(!V || V.type ? new Ks(null, a, R) : V),
                R.abort(),
                (R = null));
            }),
            u.cancelToken && u.cancelToken.subscribe(g),
            u.signal &&
              (u.signal.aborted ? g() : u.signal.addEventListener("abort", g)));
        const L = PR(u.url);
        if (L && Xt.protocols.indexOf(L) === -1) {
          s(new Be("Unsupported protocol " + L + ":", Be.ERR_BAD_REQUEST, a));
          return;
        }
        R.send(c || null);
      });
    },
  sA = (a, n) => {
    const { length: i } = (a = a ? a.filter(Boolean) : []);
    if (n || i) {
      let s = new AbortController(),
        u;
      const c = function (m) {
        if (!u) {
          (u = !0), h();
          const g = m instanceof Error ? m : this.reason;
          s.abort(
            g instanceof Be ? g : new Ks(g instanceof Error ? g.message : g),
          );
        }
      };
      let d =
        n &&
        setTimeout(() => {
          (d = null), c(new Be(`timeout ${n} of ms exceeded`, Be.ETIMEDOUT));
        }, n);
      const h = () => {
        a &&
          (d && clearTimeout(d),
          (d = null),
          a.forEach((m) => {
            m.unsubscribe
              ? m.unsubscribe(c)
              : m.removeEventListener("abort", c);
          }),
          (a = null));
      };
      a.forEach((m) => m.addEventListener("abort", c));
      const { signal: p } = s;
      return (p.unsubscribe = () => B.asap(h)), p;
    }
  },
  lA = function* (a, n) {
    let i = a.byteLength;
    if (i < n) {
      yield a;
      return;
    }
    let s = 0,
      u;
    for (; s < i; ) (u = s + n), yield a.slice(s, u), (s = u);
  },
  uA = async function* (a, n) {
    for await (const i of oA(a)) yield* lA(i, n);
  },
  oA = async function* (a) {
    if (a[Symbol.asyncIterator]) {
      yield* a;
      return;
    }
    const n = a.getReader();
    try {
      for (;;) {
        const { done: i, value: s } = await n.read();
        if (i) break;
        yield s;
      }
    } finally {
      await n.cancel();
    }
  },
  Dv = (a, n, i, s) => {
    const u = uA(a, n);
    let c = 0,
      d,
      h = (p) => {
        d || ((d = !0), s && s(p));
      };
    return new ReadableStream(
      {
        async pull(p) {
          try {
            const { done: m, value: g } = await u.next();
            if (m) {
              h(), p.close();
              return;
            }
            let x = g.byteLength;
            if (i) {
              let A = (c += x);
              i(A);
            }
            p.enqueue(new Uint8Array(g));
          } catch (m) {
            throw (h(m), m);
          }
        },
        cancel(p) {
          return h(p), u.return();
        },
      },
      { highWaterMark: 2 },
    );
  },
  Ac =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  H0 = Ac && typeof ReadableStream == "function",
  cA =
    Ac &&
    (typeof TextEncoder == "function"
      ? (
          (a) => (n) =>
            a.encode(n)
        )(new TextEncoder())
      : async (a) => new Uint8Array(await new Response(a).arrayBuffer())),
  V0 = (a, ...n) => {
    try {
      return !!a(...n);
    } catch {
      return !1;
    }
  },
  fA =
    H0 &&
    V0(() => {
      let a = !1;
      const n = new Request(Xt.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (a = !0), "half";
        },
      }).headers.has("Content-Type");
      return a && !n;
    }),
  Mv = 64 * 1024,
  Oh = H0 && V0(() => B.isReadableStream(new Response("").body)),
  hc = { stream: Oh && ((a) => a.body) };
Ac &&
  ((a) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((n) => {
      !hc[n] &&
        (hc[n] = B.isFunction(a[n])
          ? (i) => i[n]()
          : (i, s) => {
              throw new Be(
                `Response type '${n}' is not supported`,
                Be.ERR_NOT_SUPPORT,
                s,
              );
            });
    });
  })(new Response());
const dA = async (a) => {
    if (a == null) return 0;
    if (B.isBlob(a)) return a.size;
    if (B.isSpecCompliantForm(a))
      return (
        await new Request(Xt.origin, { method: "POST", body: a }).arrayBuffer()
      ).byteLength;
    if (B.isArrayBufferView(a) || B.isArrayBuffer(a)) return a.byteLength;
    if ((B.isURLSearchParams(a) && (a = a + ""), B.isString(a)))
      return (await cA(a)).byteLength;
  },
  hA = async (a, n) => {
    const i = B.toFiniteNumber(a.getContentLength());
    return i ?? dA(n);
  },
  mA =
    Ac &&
    (async (a) => {
      let {
        url: n,
        method: i,
        data: s,
        signal: u,
        cancelToken: c,
        timeout: d,
        onDownloadProgress: h,
        onUploadProgress: p,
        responseType: m,
        headers: g,
        withCredentials: x = "same-origin",
        fetchOptions: A,
      } = B0(a);
      m = m ? (m + "").toLowerCase() : "text";
      let b = sA([u, c && c.toAbortSignal()], d),
        T;
      const O =
        b &&
        b.unsubscribe &&
        (() => {
          b.unsubscribe();
        });
      let R;
      try {
        if (
          p &&
          fA &&
          i !== "get" &&
          i !== "head" &&
          (R = await hA(g, s)) !== 0
        ) {
          let G = new Request(n, { method: "POST", body: s, duplex: "half" }),
            le;
          if (
            (B.isFormData(s) &&
              (le = G.headers.get("content-type")) &&
              g.setContentType(le),
            G.body)
          ) {
            const [we, Se] = Av(R, dc(Ov(p)));
            s = Dv(G.body, Mv, we, Se);
          }
        }
        B.isString(x) || (x = x ? "include" : "omit");
        const j = "credentials" in Request.prototype;
        T = new Request(n, {
          ...A,
          signal: b,
          method: i.toUpperCase(),
          headers: g.normalize().toJSON(),
          body: s,
          duplex: "half",
          credentials: j ? x : void 0,
        });
        let L = await fetch(T);
        const V = Oh && (m === "stream" || m === "response");
        if (Oh && (h || (V && O))) {
          const G = {};
          ["status", "statusText", "headers"].forEach((F) => {
            G[F] = L[F];
          });
          const le = B.toFiniteNumber(L.headers.get("content-length")),
            [we, Se] = (h && Av(le, dc(Ov(h), !0))) || [];
          L = new Response(
            Dv(L.body, Mv, we, () => {
              Se && Se(), O && O();
            }),
            G,
          );
        }
        m = m || "text";
        let se = await hc[B.findKey(hc, m) || "text"](L, a);
        return (
          !V && O && O(),
          await new Promise((G, le) => {
            j0(G, le, {
              data: se,
              headers: vn.from(L.headers),
              status: L.status,
              statusText: L.statusText,
              config: a,
              request: T,
            });
          })
        );
      } catch (j) {
        throw (
          (O && O(),
          j && j.name === "TypeError" && /fetch/i.test(j.message)
            ? Object.assign(new Be("Network Error", Be.ERR_NETWORK, a, T), {
                cause: j.cause || j,
              })
            : Be.from(j, j && j.code, a, T))
        );
      }
    }),
  Ch = { http: CR, xhr: iA, fetch: mA };
B.forEach(Ch, (a, n) => {
  if (a) {
    try {
      Object.defineProperty(a, "name", { value: n });
    } catch {}
    Object.defineProperty(a, "adapterName", { value: n });
  }
});
const Nv = (a) => `- ${a}`,
  pA = (a) => B.isFunction(a) || a === null || a === !1,
  q0 = {
    getAdapter: (a) => {
      a = B.isArray(a) ? a : [a];
      const { length: n } = a;
      let i, s;
      const u = {};
      for (let c = 0; c < n; c++) {
        i = a[c];
        let d;
        if (
          ((s = i),
          !pA(i) && ((s = Ch[(d = String(i)).toLowerCase()]), s === void 0))
        )
          throw new Be(`Unknown adapter '${d}'`);
        if (s) break;
        u[d || "#" + c] = s;
      }
      if (!s) {
        const c = Object.entries(u).map(
          ([h, p]) =>
            `adapter ${h} ` +
            (p === !1
              ? "is not supported by the environment"
              : "is not available in the build"),
        );
        let d = n
          ? c.length > 1
            ? `since :
` +
              c.map(Nv).join(`
`)
            : " " + Nv(c[0])
          : "as no adapter specified";
        throw new Be(
          "There is no suitable adapter to dispatch the request " + d,
          "ERR_NOT_SUPPORT",
        );
      }
      return s;
    },
    adapters: Ch,
  };
function Id(a) {
  if (
    (a.cancelToken && a.cancelToken.throwIfRequested(),
    a.signal && a.signal.aborted)
  )
    throw new Ks(null, a);
}
function zv(a) {
  return (
    Id(a),
    (a.headers = vn.from(a.headers)),
    (a.data = Wd.call(a, a.transformRequest)),
    ["post", "put", "patch"].indexOf(a.method) !== -1 &&
      a.headers.setContentType("application/x-www-form-urlencoded", !1),
    q0
      .getAdapter(a.adapter || Cu.adapter)(a)
      .then(
        function (s) {
          return (
            Id(a),
            (s.data = Wd.call(a, a.transformResponse, s)),
            (s.headers = vn.from(s.headers)),
            s
          );
        },
        function (s) {
          return (
            k0(s) ||
              (Id(a),
              s &&
                s.response &&
                ((s.response.data = Wd.call(
                  a,
                  a.transformResponse,
                  s.response,
                )),
                (s.response.headers = vn.from(s.response.headers)))),
            Promise.reject(s)
          );
        },
      )
  );
}
const Z0 = "1.7.9",
  Oc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (a, n) => {
    Oc[a] = function (s) {
      return typeof s === a || "a" + (n < 1 ? "n " : " ") + a;
    };
  },
);
const Uv = {};
Oc.transitional = function (n, i, s) {
  function u(c, d) {
    return (
      "[Axios v" +
      Z0 +
      "] Transitional option '" +
      c +
      "'" +
      d +
      (s ? ". " + s : "")
    );
  }
  return (c, d, h) => {
    if (n === !1)
      throw new Be(
        u(d, " has been removed" + (i ? " in " + i : "")),
        Be.ERR_DEPRECATED,
      );
    return (
      i &&
        !Uv[d] &&
        ((Uv[d] = !0),
        console.warn(
          u(
            d,
            " has been deprecated since v" +
              i +
              " and will be removed in the near future",
          ),
        )),
      n ? n(c, d, h) : !0
    );
  };
};
Oc.spelling = function (n) {
  return (i, s) => (console.warn(`${s} is likely a misspelling of ${n}`), !0);
};
function yA(a, n, i) {
  if (typeof a != "object")
    throw new Be("options must be an object", Be.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(a);
  let u = s.length;
  for (; u-- > 0; ) {
    const c = s[u],
      d = n[c];
    if (d) {
      const h = a[c],
        p = h === void 0 || d(h, c, a);
      if (p !== !0)
        throw new Be("option " + c + " must be " + p, Be.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (i !== !0) throw new Be("Unknown option " + c, Be.ERR_BAD_OPTION);
  }
}
const Po = { assertOptions: yA, validators: Oc },
  ca = Po.validators;
let _i = class {
  constructor(n) {
    (this.defaults = n),
      (this.interceptors = { request: new Tv(), response: new Tv() });
  }
  async request(n, i) {
    try {
      return await this._request(n, i);
    } catch (s) {
      if (s instanceof Error) {
        let u = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(u)
          : (u = new Error());
        const c = u.stack ? u.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack
            ? c &&
              !String(s.stack).endsWith(c.replace(/^.+\n.+\n/, "")) &&
              (s.stack +=
                `
` + c)
            : (s.stack = c);
        } catch {}
      }
      throw s;
    }
  }
  _request(n, i) {
    typeof n == "string" ? ((i = i || {}), (i.url = n)) : (i = n || {}),
      (i = Oi(this.defaults, i));
    const { transitional: s, paramsSerializer: u, headers: c } = i;
    s !== void 0 &&
      Po.assertOptions(
        s,
        {
          silentJSONParsing: ca.transitional(ca.boolean),
          forcedJSONParsing: ca.transitional(ca.boolean),
          clarifyTimeoutError: ca.transitional(ca.boolean),
        },
        !1,
      ),
      u != null &&
        (B.isFunction(u)
          ? (i.paramsSerializer = { serialize: u })
          : Po.assertOptions(
              u,
              { encode: ca.function, serialize: ca.function },
              !0,
            )),
      Po.assertOptions(
        i,
        {
          baseUrl: ca.spelling("baseURL"),
          withXsrfToken: ca.spelling("withXSRFToken"),
        },
        !0,
      ),
      (i.method = (i.method || this.defaults.method || "get").toLowerCase());
    let d = c && B.merge(c.common, c[i.method]);
    c &&
      B.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (T) => {
          delete c[T];
        },
      ),
      (i.headers = vn.concat(d, c));
    const h = [];
    let p = !0;
    this.interceptors.request.forEach(function (O) {
      (typeof O.runWhen == "function" && O.runWhen(i) === !1) ||
        ((p = p && O.synchronous), h.unshift(O.fulfilled, O.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function (O) {
      m.push(O.fulfilled, O.rejected);
    });
    let g,
      x = 0,
      A;
    if (!p) {
      const T = [zv.bind(this), void 0];
      for (
        T.unshift.apply(T, h),
          T.push.apply(T, m),
          A = T.length,
          g = Promise.resolve(i);
        x < A;

      )
        g = g.then(T[x++], T[x++]);
      return g;
    }
    A = h.length;
    let b = i;
    for (x = 0; x < A; ) {
      const T = h[x++],
        O = h[x++];
      try {
        b = T(b);
      } catch (R) {
        O.call(this, R);
        break;
      }
    }
    try {
      g = zv.call(this, b);
    } catch (T) {
      return Promise.reject(T);
    }
    for (x = 0, A = m.length; x < A; ) g = g.then(m[x++], m[x++]);
    return g;
  }
  getUri(n) {
    n = Oi(this.defaults, n);
    const i = L0(n.baseURL, n.url);
    return N0(i, n.params, n.paramsSerializer);
  }
};
B.forEach(["delete", "get", "head", "options"], function (n) {
  _i.prototype[n] = function (i, s) {
    return this.request(
      Oi(s || {}, { method: n, url: i, data: (s || {}).data }),
    );
  };
});
B.forEach(["post", "put", "patch"], function (n) {
  function i(s) {
    return function (c, d, h) {
      return this.request(
        Oi(h || {}, {
          method: n,
          headers: s ? { "Content-Type": "multipart/form-data" } : {},
          url: c,
          data: d,
        }),
      );
    };
  }
  (_i.prototype[n] = i()), (_i.prototype[n + "Form"] = i(!0));
});
let gA = class Y0 {
  constructor(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    let i;
    this.promise = new Promise(function (c) {
      i = c;
    });
    const s = this;
    this.promise.then((u) => {
      if (!s._listeners) return;
      let c = s._listeners.length;
      for (; c-- > 0; ) s._listeners[c](u);
      s._listeners = null;
    }),
      (this.promise.then = (u) => {
        let c;
        const d = new Promise((h) => {
          s.subscribe(h), (c = h);
        }).then(u);
        return (
          (d.cancel = function () {
            s.unsubscribe(c);
          }),
          d
        );
      }),
      n(function (c, d, h) {
        s.reason || ((s.reason = new Ks(c, d, h)), i(s.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(n) {
    if (this.reason) {
      n(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(n) : (this._listeners = [n]);
  }
  unsubscribe(n) {
    if (!this._listeners) return;
    const i = this._listeners.indexOf(n);
    i !== -1 && this._listeners.splice(i, 1);
  }
  toAbortSignal() {
    const n = new AbortController(),
      i = (s) => {
        n.abort(s);
      };
    return (
      this.subscribe(i),
      (n.signal.unsubscribe = () => this.unsubscribe(i)),
      n.signal
    );
  }
  static source() {
    let n;
    return {
      token: new Y0(function (u) {
        n = u;
      }),
      cancel: n,
    };
  }
};
function vA(a) {
  return function (i) {
    return a.apply(null, i);
  };
}
function bA(a) {
  return B.isObject(a) && a.isAxiosError === !0;
}
const Dh = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Dh).forEach(([a, n]) => {
  Dh[n] = a;
});
function Q0(a) {
  const n = new _i(a),
    i = x0(_i.prototype.request, n);
  return (
    B.extend(i, _i.prototype, n, { allOwnKeys: !0 }),
    B.extend(i, n, null, { allOwnKeys: !0 }),
    (i.create = function (u) {
      return Q0(Oi(a, u));
    }),
    i
  );
}
const _t = Q0(Cu);
_t.Axios = _i;
_t.CanceledError = Ks;
_t.CancelToken = gA;
_t.isCancel = k0;
_t.VERSION = Z0;
_t.toFormData = Rc;
_t.AxiosError = Be;
_t.Cancel = _t.CanceledError;
_t.all = function (n) {
  return Promise.all(n);
};
_t.spread = vA;
_t.isAxiosError = bA;
_t.mergeConfig = Oi;
_t.AxiosHeaders = vn;
_t.formToJSON = (a) => U0(B.isHTMLForm(a) ? new FormData(a) : a);
_t.getAdapter = q0.getAdapter;
_t.HttpStatusCode = Dh;
_t.default = _t;
const {
    Axios: S2,
    AxiosError: _2,
    CanceledError: w2,
    isCancel: E2,
    CancelToken: T2,
    VERSION: R2,
    all: A2,
    Cancel: O2,
    isAxiosError: C2,
    spread: D2,
    toFormData: M2,
    AxiosHeaders: N2,
    HttpStatusCode: z2,
    formToJSON: U2,
    getAdapter: k2,
    mergeConfig: j2,
  } = _t,
  tm = _t.create({
    baseURL: "https://localhost:3000/api/v1",
    headers: { "Content-type": "application/json" },
    withCredentials: !0,
  });
var xA = (a) => {
    switch (a) {
      case "success":
        return wA;
      case "info":
        return TA;
      case "warning":
        return EA;
      case "error":
        return RA;
      default:
        return null;
    }
  },
  SA = Array(12).fill(0),
  _A = ({ visible: a, className: n }) =>
    X.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", n].filter(Boolean).join(" "),
        "data-visible": a,
      },
      X.createElement(
        "div",
        { className: "sonner-spinner" },
        SA.map((i, s) =>
          X.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${s}`,
          }),
        ),
      ),
    ),
  wA = X.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    X.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  EA = X.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    X.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  TA = X.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    X.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  RA = X.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    X.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  AA = X.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    X.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    X.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  OA = () => {
    let [a, n] = X.useState(document.hidden);
    return (
      X.useEffect(() => {
        let i = () => {
          n(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", i),
          () => window.removeEventListener("visibilitychange", i)
        );
      }, []),
      a
    );
  },
  Mh = 1,
  CA = class {
    constructor() {
      (this.subscribe = (a) => (
        this.subscribers.push(a),
        () => {
          let n = this.subscribers.indexOf(a);
          this.subscribers.splice(n, 1);
        }
      )),
        (this.publish = (a) => {
          this.subscribers.forEach((n) => n(a));
        }),
        (this.addToast = (a) => {
          this.publish(a), (this.toasts = [...this.toasts, a]);
        }),
        (this.create = (a) => {
          var n;
          let { message: i, ...s } = a,
            u =
              typeof (a == null ? void 0 : a.id) == "number" ||
              ((n = a.id) == null ? void 0 : n.length) > 0
                ? a.id
                : Mh++,
            c = this.toasts.find((h) => h.id === u),
            d = a.dismissible === void 0 ? !0 : a.dismissible;
          return (
            this.dismissedToasts.has(u) && this.dismissedToasts.delete(u),
            c
              ? (this.toasts = this.toasts.map((h) =>
                  h.id === u
                    ? (this.publish({ ...h, ...a, id: u, title: i }),
                      { ...h, ...a, id: u, dismissible: d, title: i })
                    : h,
                ))
              : this.addToast({ title: i, ...s, dismissible: d, id: u }),
            u
          );
        }),
        (this.dismiss = (a) => (
          this.dismissedToasts.add(a),
          a ||
            this.toasts.forEach((n) => {
              this.subscribers.forEach((i) => i({ id: n.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((n) => n({ id: a, dismiss: !0 })),
          a
        )),
        (this.message = (a, n) => this.create({ ...n, message: a })),
        (this.error = (a, n) =>
          this.create({ ...n, message: a, type: "error" })),
        (this.success = (a, n) =>
          this.create({ ...n, type: "success", message: a })),
        (this.info = (a, n) => this.create({ ...n, type: "info", message: a })),
        (this.warning = (a, n) =>
          this.create({ ...n, type: "warning", message: a })),
        (this.loading = (a, n) =>
          this.create({ ...n, type: "loading", message: a })),
        (this.promise = (a, n) => {
          if (!n) return;
          let i;
          n.loading !== void 0 &&
            (i = this.create({
              ...n,
              promise: a,
              type: "loading",
              message: n.loading,
              description:
                typeof n.description != "function" ? n.description : void 0,
            }));
          let s = a instanceof Promise ? a : a(),
            u = i !== void 0,
            c,
            d = s
              .then(async (p) => {
                if (((c = ["resolve", p]), X.isValidElement(p)))
                  (u = !1), this.create({ id: i, type: "default", message: p });
                else if (MA(p) && !p.ok) {
                  u = !1;
                  let m =
                      typeof n.error == "function"
                        ? await n.error(`HTTP error! status: ${p.status}`)
                        : n.error,
                    g =
                      typeof n.description == "function"
                        ? await n.description(`HTTP error! status: ${p.status}`)
                        : n.description;
                  this.create({
                    id: i,
                    type: "error",
                    message: m,
                    description: g,
                  });
                } else if (n.success !== void 0) {
                  u = !1;
                  let m =
                      typeof n.success == "function"
                        ? await n.success(p)
                        : n.success,
                    g =
                      typeof n.description == "function"
                        ? await n.description(p)
                        : n.description;
                  this.create({
                    id: i,
                    type: "success",
                    message: m,
                    description: g,
                  });
                }
              })
              .catch(async (p) => {
                if (((c = ["reject", p]), n.error !== void 0)) {
                  u = !1;
                  let m =
                      typeof n.error == "function" ? await n.error(p) : n.error,
                    g =
                      typeof n.description == "function"
                        ? await n.description(p)
                        : n.description;
                  this.create({
                    id: i,
                    type: "error",
                    message: m,
                    description: g,
                  });
                }
              })
              .finally(() => {
                var p;
                u && (this.dismiss(i), (i = void 0)),
                  (p = n.finally) == null || p.call(n);
              }),
            h = () =>
              new Promise((p, m) =>
                d.then(() => (c[0] === "reject" ? m(c[1]) : p(c[1]))).catch(m),
              );
          return typeof i != "string" && typeof i != "number"
            ? { unwrap: h }
            : Object.assign(i, { unwrap: h });
        }),
        (this.custom = (a, n) => {
          let i = (n == null ? void 0 : n.id) || Mh++;
          return this.create({ jsx: a(i), id: i, ...n }), i;
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((a) => !this.dismissedToasts.has(a.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set());
    }
  },
  gn = new CA(),
  DA = (a, n) => {
    let i = (n == null ? void 0 : n.id) || Mh++;
    return gn.addToast({ title: a, ...n, id: i }), i;
  },
  MA = (a) =>
    a &&
    typeof a == "object" &&
    "ok" in a &&
    typeof a.ok == "boolean" &&
    "status" in a &&
    typeof a.status == "number",
  NA = DA,
  zA = () => gn.toasts,
  UA = () => gn.getActiveToasts(),
  mc = Object.assign(
    NA,
    {
      success: gn.success,
      info: gn.info,
      warning: gn.warning,
      error: gn.error,
      custom: gn.custom,
      message: gn.message,
      promise: gn.promise,
      dismiss: gn.dismiss,
      loading: gn.loading,
    },
    { getHistory: zA, getToasts: UA },
  );
function kA(a, { insertAt: n } = {}) {
  if (typeof document > "u") return;
  let i = document.head || document.getElementsByTagName("head")[0],
    s = document.createElement("style");
  (s.type = "text/css"),
    n === "top" && i.firstChild
      ? i.insertBefore(s, i.firstChild)
      : i.appendChild(s),
    s.styleSheet
      ? (s.styleSheet.cssText = a)
      : s.appendChild(document.createTextNode(a));
}
kA(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Qo(a) {
  return a.label !== void 0;
}
var jA = 3,
  LA = "32px",
  BA = "16px",
  kv = 4e3,
  HA = 356,
  VA = 14,
  qA = 20,
  ZA = 200;
function $n(...a) {
  return a.filter(Boolean).join(" ");
}
function YA(a) {
  let [n, i] = a.split("-"),
    s = [];
  return n && s.push(n), i && s.push(i), s;
}
var QA = (a) => {
  var n, i, s, u, c, d, h, p, m, g, x;
  let {
      invert: A,
      toast: b,
      unstyled: T,
      interacting: O,
      setHeights: R,
      visibleToasts: j,
      heights: L,
      index: V,
      toasts: se,
      expanded: G,
      removeToast: le,
      defaultRichColors: we,
      closeButton: Se,
      style: F,
      cancelButtonStyle: pe,
      actionButtonStyle: Fe,
      className: ye = "",
      descriptionClassName: Ae = "",
      duration: be,
      position: ze,
      gap: K,
      loadingIcon: oe,
      expandByDefault: ee,
      classNames: ce,
      icons: _,
      closeButtonAriaLabel: Y = "Close toast",
      pauseWhenPageIsHidden: te,
    } = a,
    [ne, J] = X.useState(null),
    [Re, Te] = X.useState(null),
    [Ue, je] = X.useState(!1),
    [Je, nt] = X.useState(!1),
    [Ct, Zn] = X.useState(!1),
    [sn, wa] = X.useState(!1),
    [Br, ra] = X.useState(!1),
    [Di, E] = X.useState(0),
    [U, H] = X.useState(0),
    re = X.useRef(b.duration || be || kv),
    ae = X.useRef(null),
    W = X.useRef(null),
    ge = V === 0,
    Le = V + 1 <= j,
    Pe = b.type,
    st = b.dismissible !== !1,
    $t = b.className || "",
    $s = b.descriptionClassName || "",
    Yn = X.useMemo(
      () => L.findIndex((De) => De.toastId === b.id) || 0,
      [L, b.id],
    ),
    Hr = X.useMemo(() => {
      var De;
      return (De = b.closeButton) != null ? De : Se;
    }, [b.closeButton, Se]),
    Mi = X.useMemo(() => b.duration || be || kv, [b.duration, be]),
    Rn = X.useRef(0),
    gt = X.useRef(0),
    Vr = X.useRef(0),
    Jt = X.useRef(null),
    [Pt, Cc] = ze.split("-"),
    Du = X.useMemo(
      () => L.reduce((De, at, ot) => (ot >= Yn ? De : De + at.height), 0),
      [L, Yn],
    ),
    Mu = OA(),
    Ni = b.invert || A,
    Pa = Pe === "loading";
  (gt.current = X.useMemo(() => Yn * K + Du, [Yn, Du])),
    X.useEffect(() => {
      re.current = Mi;
    }, [Mi]),
    X.useEffect(() => {
      je(!0);
    }, []),
    X.useEffect(() => {
      let De = W.current;
      if (De) {
        let at = De.getBoundingClientRect().height;
        return (
          H(at),
          R((ot) => [
            { toastId: b.id, height: at, position: b.position },
            ...ot,
          ]),
          () => R((ot) => ot.filter((ln) => ln.toastId !== b.id))
        );
      }
    }, [R, b.id]),
    X.useLayoutEffect(() => {
      if (!Ue) return;
      let De = W.current,
        at = De.style.height;
      De.style.height = "auto";
      let ot = De.getBoundingClientRect().height;
      (De.style.height = at),
        H(ot),
        R((ln) =>
          ln.find((Wt) => Wt.toastId === b.id)
            ? ln.map((Wt) => (Wt.toastId === b.id ? { ...Wt, height: ot } : Wt))
            : [{ toastId: b.id, height: ot, position: b.position }, ...ln],
        );
    }, [Ue, b.title, b.description, R, b.id]);
  let Zt = X.useCallback(() => {
    nt(!0),
      E(gt.current),
      R((De) => De.filter((at) => at.toastId !== b.id)),
      setTimeout(() => {
        le(b);
      }, ZA);
  }, [b, le, R, gt]);
  X.useEffect(() => {
    if (
      (b.promise && Pe === "loading") ||
      b.duration === 1 / 0 ||
      b.type === "loading"
    )
      return;
    let De;
    return (
      G || O || (te && Mu)
        ? (() => {
            if (Vr.current < Rn.current) {
              let at = new Date().getTime() - Rn.current;
              re.current = re.current - at;
            }
            Vr.current = new Date().getTime();
          })()
        : re.current !== 1 / 0 &&
          ((Rn.current = new Date().getTime()),
          (De = setTimeout(() => {
            var at;
            (at = b.onAutoClose) == null || at.call(b, b), Zt();
          }, re.current))),
      () => clearTimeout(De)
    );
  }, [G, O, b, Pe, te, Mu, Zt]),
    X.useEffect(() => {
      b.delete && Zt();
    }, [Zt, b.delete]);
  function zi() {
    var De, at, ot;
    return _ != null && _.loading
      ? X.createElement(
          "div",
          {
            className: $n(
              ce == null ? void 0 : ce.loader,
              (De = b == null ? void 0 : b.classNames) == null
                ? void 0
                : De.loader,
              "sonner-loader",
            ),
            "data-visible": Pe === "loading",
          },
          _.loading,
        )
      : oe
        ? X.createElement(
            "div",
            {
              className: $n(
                ce == null ? void 0 : ce.loader,
                (at = b == null ? void 0 : b.classNames) == null
                  ? void 0
                  : at.loader,
                "sonner-loader",
              ),
              "data-visible": Pe === "loading",
            },
            oe,
          )
        : X.createElement(_A, {
            className: $n(
              ce == null ? void 0 : ce.loader,
              (ot = b == null ? void 0 : b.classNames) == null
                ? void 0
                : ot.loader,
            ),
            visible: Pe === "loading",
          });
  }
  return X.createElement(
    "li",
    {
      tabIndex: 0,
      ref: W,
      className: $n(
        ye,
        $t,
        ce == null ? void 0 : ce.toast,
        (n = b == null ? void 0 : b.classNames) == null ? void 0 : n.toast,
        ce == null ? void 0 : ce.default,
        ce == null ? void 0 : ce[Pe],
        (i = b == null ? void 0 : b.classNames) == null ? void 0 : i[Pe],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (s = b.richColors) != null ? s : we,
      "data-styled": !(b.jsx || b.unstyled || T),
      "data-mounted": Ue,
      "data-promise": !!b.promise,
      "data-swiped": Br,
      "data-removed": Je,
      "data-visible": Le,
      "data-y-position": Pt,
      "data-x-position": Cc,
      "data-index": V,
      "data-front": ge,
      "data-swiping": Ct,
      "data-dismissible": st,
      "data-type": Pe,
      "data-invert": Ni,
      "data-swipe-out": sn,
      "data-swipe-direction": Re,
      "data-expanded": !!(G || (ee && Ue)),
      style: {
        "--index": V,
        "--toasts-before": V,
        "--z-index": se.length - V,
        "--offset": `${Je ? Di : gt.current}px`,
        "--initial-height": ee ? "auto" : `${U}px`,
        ...F,
        ...b.style,
      },
      onDragEnd: () => {
        Zn(!1), J(null), (Jt.current = null);
      },
      onPointerDown: (De) => {
        Pa ||
          !st ||
          ((ae.current = new Date()),
          E(gt.current),
          De.target.setPointerCapture(De.pointerId),
          De.target.tagName !== "BUTTON" &&
            (Zn(!0), (Jt.current = { x: De.clientX, y: De.clientY })));
      },
      onPointerUp: () => {
        var De, at, ot, ln;
        if (sn || !st) return;
        Jt.current = null;
        let Wt = Number(
            ((De = W.current) == null
              ? void 0
              : De.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0,
          ),
          un = Number(
            ((at = W.current) == null
              ? void 0
              : at.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0,
          ),
          Ea =
            new Date().getTime() -
            ((ot = ae.current) == null ? void 0 : ot.getTime()),
          on = ne === "x" ? Wt : un,
          Qn = Math.abs(on) / Ea;
        if (Math.abs(on) >= qA || Qn > 0.11) {
          E(gt.current),
            (ln = b.onDismiss) == null || ln.call(b, b),
            Te(
              ne === "x" ? (Wt > 0 ? "right" : "left") : un > 0 ? "down" : "up",
            ),
            Zt(),
            wa(!0),
            ra(!1);
          return;
        }
        Zn(!1), J(null);
      },
      onPointerMove: (De) => {
        var at, ot, ln, Wt;
        if (
          !Jt.current ||
          !st ||
          ((at = window.getSelection()) == null
            ? void 0
            : at.toString().length) > 0
        )
          return;
        let un = De.clientY - Jt.current.y,
          Ea = De.clientX - Jt.current.x,
          on = (ot = a.swipeDirections) != null ? ot : YA(ze);
        !ne &&
          (Math.abs(Ea) > 1 || Math.abs(un) > 1) &&
          J(Math.abs(Ea) > Math.abs(un) ? "x" : "y");
        let Qn = { x: 0, y: 0 };
        ne === "y"
          ? (on.includes("top") || on.includes("bottom")) &&
            ((on.includes("top") && un < 0) ||
              (on.includes("bottom") && un > 0)) &&
            (Qn.y = un)
          : ne === "x" &&
            (on.includes("left") || on.includes("right")) &&
            ((on.includes("left") && Ea < 0) ||
              (on.includes("right") && Ea > 0)) &&
            (Qn.x = Ea),
          (Math.abs(Qn.x) > 0 || Math.abs(Qn.y) > 0) && ra(!0),
          (ln = W.current) == null ||
            ln.style.setProperty("--swipe-amount-x", `${Qn.x}px`),
          (Wt = W.current) == null ||
            Wt.style.setProperty("--swipe-amount-y", `${Qn.y}px`);
      },
    },
    Hr && !b.jsx
      ? X.createElement(
          "button",
          {
            "aria-label": Y,
            "data-disabled": Pa,
            "data-close-button": !0,
            onClick:
              Pa || !st
                ? () => {}
                : () => {
                    var De;
                    Zt(), (De = b.onDismiss) == null || De.call(b, b);
                  },
            className: $n(
              ce == null ? void 0 : ce.closeButton,
              (u = b == null ? void 0 : b.classNames) == null
                ? void 0
                : u.closeButton,
            ),
          },
          (c = _ == null ? void 0 : _.close) != null ? c : AA,
        )
      : null,
    b.jsx || N.isValidElement(b.title)
      ? b.jsx
        ? b.jsx
        : typeof b.title == "function"
          ? b.title()
          : b.title
      : X.createElement(
          X.Fragment,
          null,
          Pe || b.icon || b.promise
            ? X.createElement(
                "div",
                {
                  "data-icon": "",
                  className: $n(
                    ce == null ? void 0 : ce.icon,
                    (d = b == null ? void 0 : b.classNames) == null
                      ? void 0
                      : d.icon,
                  ),
                },
                b.promise || (b.type === "loading" && !b.icon)
                  ? b.icon || zi()
                  : null,
                b.type !== "loading"
                  ? b.icon || (_ == null ? void 0 : _[Pe]) || xA(Pe)
                  : null,
              )
            : null,
          X.createElement(
            "div",
            {
              "data-content": "",
              className: $n(
                ce == null ? void 0 : ce.content,
                (h = b == null ? void 0 : b.classNames) == null
                  ? void 0
                  : h.content,
              ),
            },
            X.createElement(
              "div",
              {
                "data-title": "",
                className: $n(
                  ce == null ? void 0 : ce.title,
                  (p = b == null ? void 0 : b.classNames) == null
                    ? void 0
                    : p.title,
                ),
              },
              typeof b.title == "function" ? b.title() : b.title,
            ),
            b.description
              ? X.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: $n(
                      Ae,
                      $s,
                      ce == null ? void 0 : ce.description,
                      (m = b == null ? void 0 : b.classNames) == null
                        ? void 0
                        : m.description,
                    ),
                  },
                  typeof b.description == "function"
                    ? b.description()
                    : b.description,
                )
              : null,
          ),
          N.isValidElement(b.cancel)
            ? b.cancel
            : b.cancel && Qo(b.cancel)
              ? X.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: b.cancelButtonStyle || pe,
                    onClick: (De) => {
                      var at, ot;
                      Qo(b.cancel) &&
                        st &&
                        ((ot = (at = b.cancel).onClick) == null ||
                          ot.call(at, De),
                        Zt());
                    },
                    className: $n(
                      ce == null ? void 0 : ce.cancelButton,
                      (g = b == null ? void 0 : b.classNames) == null
                        ? void 0
                        : g.cancelButton,
                    ),
                  },
                  b.cancel.label,
                )
              : null,
          N.isValidElement(b.action)
            ? b.action
            : b.action && Qo(b.action)
              ? X.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: b.actionButtonStyle || Fe,
                    onClick: (De) => {
                      var at, ot;
                      Qo(b.action) &&
                        ((ot = (at = b.action).onClick) == null ||
                          ot.call(at, De),
                        !De.defaultPrevented && Zt());
                    },
                    className: $n(
                      ce == null ? void 0 : ce.actionButton,
                      (x = b == null ? void 0 : b.classNames) == null
                        ? void 0
                        : x.actionButton,
                    ),
                  },
                  b.action.label,
                )
              : null,
        ),
  );
};
function jv() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let a = document.documentElement.getAttribute("dir");
  return a === "auto" || !a
    ? window.getComputedStyle(document.documentElement).direction
    : a;
}
function GA(a, n) {
  let i = {};
  return (
    [a, n].forEach((s, u) => {
      let c = u === 1,
        d = c ? "--mobile-offset" : "--offset",
        h = c ? BA : LA;
      function p(m) {
        ["top", "right", "bottom", "left"].forEach((g) => {
          i[`${d}-${g}`] = typeof m == "number" ? `${m}px` : m;
        });
      }
      typeof s == "number" || typeof s == "string"
        ? p(s)
        : typeof s == "object"
          ? ["top", "right", "bottom", "left"].forEach((m) => {
              s[m] === void 0
                ? (i[`${d}-${m}`] = h)
                : (i[`${d}-${m}`] =
                    typeof s[m] == "number" ? `${s[m]}px` : s[m]);
            })
          : p(h);
    }),
    i
  );
}
var FA = N.forwardRef(function (a, n) {
  let {
      invert: i,
      position: s = "bottom-right",
      hotkey: u = ["altKey", "KeyT"],
      expand: c,
      closeButton: d,
      className: h,
      offset: p,
      mobileOffset: m,
      theme: g = "light",
      richColors: x,
      duration: A,
      style: b,
      visibleToasts: T = jA,
      toastOptions: O,
      dir: R = jv(),
      gap: j = VA,
      loadingIcon: L,
      icons: V,
      containerAriaLabel: se = "Notifications",
      pauseWhenPageIsHidden: G,
    } = a,
    [le, we] = X.useState([]),
    Se = X.useMemo(
      () =>
        Array.from(
          new Set(
            [s].concat(le.filter((te) => te.position).map((te) => te.position)),
          ),
        ),
      [le, s],
    ),
    [F, pe] = X.useState([]),
    [Fe, ye] = X.useState(!1),
    [Ae, be] = X.useState(!1),
    [ze, K] = X.useState(
      g !== "system"
        ? g
        : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
    ),
    oe = X.useRef(null),
    ee = u.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    ce = X.useRef(null),
    _ = X.useRef(!1),
    Y = X.useCallback((te) => {
      we((ne) => {
        var J;
        return (
          ((J = ne.find((Re) => Re.id === te.id)) != null && J.delete) ||
            gn.dismiss(te.id),
          ne.filter(({ id: Re }) => Re !== te.id)
        );
      });
    }, []);
  return (
    X.useEffect(
      () =>
        gn.subscribe((te) => {
          if (te.dismiss) {
            we((ne) =>
              ne.map((J) => (J.id === te.id ? { ...J, delete: !0 } : J)),
            );
            return;
          }
          setTimeout(() => {
            Xw.flushSync(() => {
              we((ne) => {
                let J = ne.findIndex((Re) => Re.id === te.id);
                return J !== -1
                  ? [...ne.slice(0, J), { ...ne[J], ...te }, ...ne.slice(J + 1)]
                  : [te, ...ne];
              });
            });
          });
        }),
      [],
    ),
    X.useEffect(() => {
      if (g !== "system") {
        K(g);
        return;
      }
      if (
        (g === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? K("dark")
            : K("light")),
        typeof window > "u")
      )
        return;
      let te = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        te.addEventListener("change", ({ matches: ne }) => {
          K(ne ? "dark" : "light");
        });
      } catch {
        te.addListener(({ matches: J }) => {
          try {
            K(J ? "dark" : "light");
          } catch (Re) {
            console.error(Re);
          }
        });
      }
    }, [g]),
    X.useEffect(() => {
      le.length <= 1 && ye(!1);
    }, [le]),
    X.useEffect(() => {
      let te = (ne) => {
        var J, Re;
        u.every((Te) => ne[Te] || ne.code === Te) &&
          (ye(!0), (J = oe.current) == null || J.focus()),
          ne.code === "Escape" &&
            (document.activeElement === oe.current ||
              ((Re = oe.current) != null &&
                Re.contains(document.activeElement))) &&
            ye(!1);
      };
      return (
        document.addEventListener("keydown", te),
        () => document.removeEventListener("keydown", te)
      );
    }, [u]),
    X.useEffect(() => {
      if (oe.current)
        return () => {
          ce.current &&
            (ce.current.focus({ preventScroll: !0 }),
            (ce.current = null),
            (_.current = !1));
        };
    }, [oe.current]),
    X.createElement(
      "section",
      {
        ref: n,
        "aria-label": `${se} ${ee}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      Se.map((te, ne) => {
        var J;
        let [Re, Te] = te.split("-");
        return le.length
          ? X.createElement(
              "ol",
              {
                key: te,
                dir: R === "auto" ? jv() : R,
                tabIndex: -1,
                ref: oe,
                className: h,
                "data-sonner-toaster": !0,
                "data-theme": ze,
                "data-y-position": Re,
                "data-lifted": Fe && le.length > 1 && !c,
                "data-x-position": Te,
                style: {
                  "--front-toast-height": `${((J = F[0]) == null ? void 0 : J.height) || 0}px`,
                  "--width": `${HA}px`,
                  "--gap": `${j}px`,
                  ...b,
                  ...GA(p, m),
                },
                onBlur: (Ue) => {
                  _.current &&
                    !Ue.currentTarget.contains(Ue.relatedTarget) &&
                    ((_.current = !1),
                    ce.current &&
                      (ce.current.focus({ preventScroll: !0 }),
                      (ce.current = null)));
                },
                onFocus: (Ue) => {
                  (Ue.target instanceof HTMLElement &&
                    Ue.target.dataset.dismissible === "false") ||
                    _.current ||
                    ((_.current = !0), (ce.current = Ue.relatedTarget));
                },
                onMouseEnter: () => ye(!0),
                onMouseMove: () => ye(!0),
                onMouseLeave: () => {
                  Ae || ye(!1);
                },
                onDragEnd: () => ye(!1),
                onPointerDown: (Ue) => {
                  (Ue.target instanceof HTMLElement &&
                    Ue.target.dataset.dismissible === "false") ||
                    be(!0);
                },
                onPointerUp: () => be(!1),
              },
              le
                .filter(
                  (Ue) => (!Ue.position && ne === 0) || Ue.position === te,
                )
                .map((Ue, je) => {
                  var Je, nt;
                  return X.createElement(QA, {
                    key: Ue.id,
                    icons: V,
                    index: je,
                    toast: Ue,
                    defaultRichColors: x,
                    duration:
                      (Je = O == null ? void 0 : O.duration) != null ? Je : A,
                    className: O == null ? void 0 : O.className,
                    descriptionClassName:
                      O == null ? void 0 : O.descriptionClassName,
                    invert: i,
                    visibleToasts: T,
                    closeButton:
                      (nt = O == null ? void 0 : O.closeButton) != null
                        ? nt
                        : d,
                    interacting: Ae,
                    position: te,
                    style: O == null ? void 0 : O.style,
                    unstyled: O == null ? void 0 : O.unstyled,
                    classNames: O == null ? void 0 : O.classNames,
                    cancelButtonStyle: O == null ? void 0 : O.cancelButtonStyle,
                    actionButtonStyle: O == null ? void 0 : O.actionButtonStyle,
                    removeToast: Y,
                    toasts: le.filter((Ct) => Ct.position == Ue.position),
                    heights: F.filter((Ct) => Ct.position == Ue.position),
                    setHeights: pe,
                    expandByDefault: c,
                    gap: j,
                    loadingIcon: L,
                    expanded: Fe,
                    pauseWhenPageIsHidden: G,
                    swipeDirections: a.swipeDirections,
                  });
                }),
            )
          : null;
      }),
    )
  );
});
const XA = () => {
    const {
      mutate: a,
      error: n,
      data: i,
      isPending: s,
    } = b0({
      mutationFn: async (u) => (await tm.post("/register", u)).data,
      onError: () =>
        mc.error("new user not created", {
          description: "There has been an error",
        }),
      onSuccess: (u) =>
        mc.success("New user created", {
          description: `The User ${u.userName} was successfully created`,
        }),
    });
    return {
      createNewUser: a,
      isLoading: s,
      errorCreateNewUser: n,
      newUserCreated: i,
    };
  },
  KA = (a) => {
    var n, i;
    return _t.isAxiosError(a)
      ? ((i = (n = a.response) == null ? void 0 : n.data) == null
          ? void 0
          : i.error) || "Server error"
      : a instanceof Error
        ? a.message
        : "Unknown error";
  },
  G0 = (a) => {
    const n = KA(a);
    return n.includes("password")
      ? ["password", { message: n }]
      : n.includes("name")
        ? ["userName", { message: n }]
        : n.includes("email")
          ? ["email", { message: n }]
          : ["root", { type: "400", message: n }];
  },
  $A = { email: "", password: "", userName: "" },
  JA = () => {
    const a = yc(),
      n = Cb({ resolver: Kb(fT), defaultValues: $A }),
      {
        isLoading: i,
        newUserCreated: s,
        createNewUser: u,
        errorCreateNewUser: c,
      } = XA();
    N.useEffect(() => {
      s != null && s.id && a("/profile");
    }, [s]),
      N.useEffect(() => {
        if (c) {
          const [h, p] = G0(c);
          n.setError(h, p);
        }
      }, [c]);
    function d(h) {
      u(h);
    }
    return {
      form: n,
      onSubmit: d,
      isLoading: i,
      errorCreateNewUser: c,
      newUserCreated: s,
    };
  },
  PA = () => {
    const { form: a, onSubmit: n } = JA();
    return I.jsx(Qb, {
      ...a,
      children: I.jsxs("form", {
        onSubmit: a.handleSubmit(n),
        className: "space-y-8",
        children: [
          I.jsx(nu, {
            control: a.control,
            name: "userName",
            render: ({ field: i }) =>
              I.jsxs(bs, {
                children: [
                  I.jsx(xs, { children: "Name" }),
                  I.jsx(Ss, {
                    children: I.jsx(ws, { placeholder: "Name", ...i }),
                  }),
                  I.jsx(_s, {}),
                ],
              }),
          }),
          I.jsx(nu, {
            control: a.control,
            name: "email",
            render: ({ field: i }) =>
              I.jsxs(bs, {
                children: [
                  I.jsx(xs, { children: "Email" }),
                  I.jsx(Ss, {
                    children: I.jsx(ws, { placeholder: "E-mail", ...i }),
                  }),
                  I.jsx(_s, {}),
                ],
              }),
          }),
          I.jsx(nu, {
            control: a.control,
            name: "password",
            render: ({ field: i }) =>
              I.jsxs(bs, {
                children: [
                  I.jsx(xs, { children: "Password" }),
                  I.jsx(Ss, {
                    children: I.jsx(ws, { placeholder: "Password", ...i }),
                  }),
                  I.jsx(_s, {}),
                ],
              }),
          }),
          I.jsx(Gh, {}),
          I.jsx(Fh, { type: "submit", children: "Submit" }),
        ],
      }),
    });
  },
  WA = fi.object({
    email: fi
      .string()
      .email({ message: "Please enter a valid email address." }),
    password: fi
      .string()
      .min(6, { message: "Password must be at least 6 characters." }),
  }),
  IA = () => {
    const {
      mutate: a,
      error: n,
      data: i,
      isPending: s,
    } = b0({
      mutationFn: async (u) => (await tm.post("/login", u)).data,
      onError: () =>
        mc.error("User not logged in", {
          description: "There has been an error",
        }),
      onSuccess: (u) => {
        mc.success("New user created", {
          description: `The User ${u.userName} was successfully created`,
        });
      },
    });
    return { errorLogin: n, loginHandler: a, isLoading: s, userLogged: i };
  },
  e2 = { email: "", password: "" },
  t2 = () => {
    const {
        loginHandler: a,
        errorLogin: n,
        isLoading: i,
        userLogged: s,
      } = IA(),
      u = yc(),
      c = Cb({ resolver: Kb(WA), defaultValues: e2 });
    function d(h) {
      a(h);
    }
    return (
      N.useEffect(() => {
        s != null && s.id && u("/profile");
      }, [s]),
      N.useEffect(() => {
        if (n) {
          const [h, p] = G0(n);
          c.setError(h, p);
        }
      }, [n]),
      { form: c, onSubmit: d, errorLogin: n, isLoading: i }
    );
  },
  n2 = () => {
    var i;
    const { form: a, onSubmit: n } = t2();
    return I.jsx(Qb, {
      ...a,
      children: I.jsxs("form", {
        onSubmit: a.handleSubmit(n),
        className: `space-y-8 ${(i = a.formState.errors) != null && i.root ? "text-destructive" : ""}`,
        children: [
          I.jsx(nu, {
            control: a.control,
            name: "email",
            render: ({ field: s }) =>
              I.jsxs(bs, {
                children: [
                  I.jsx(xs, { children: "Email" }),
                  I.jsx(Ss, {
                    children: I.jsx(ws, { placeholder: "E-mail", ...s }),
                  }),
                  I.jsx(_s, {}),
                ],
              }),
          }),
          I.jsx(nu, {
            control: a.control,
            name: "password",
            render: ({ field: s }) =>
              I.jsxs(bs, {
                children: [
                  I.jsx(xs, { children: "Password" }),
                  I.jsx(Ss, {
                    children: I.jsx(ws, { placeholder: "Password", ...s }),
                  }),
                  I.jsx(_s, {}),
                ],
              }),
          }),
          I.jsx(Gh, {}),
          I.jsx(Fh, { type: "submit", children: "Submit" }),
        ],
      }),
    });
  },
  a2 = () =>
    I.jsxs(I.Fragment, {
      children: [I.jsx(j_, { title: "Login" }), I.jsx(n2, {}), I.jsx(PA, {})],
    }),
  r2 = () =>
    I.jsx("div", {
      className: "container mx-auto p-4",
      children: I.jsx(sb, {}),
    }),
  i2 = () => I.jsx(sb, {}),
  s2 = () => {
    const a = yc(),
      {
        data: n,
        error: i,
        isLoading: s,
      } = YT({
        queryKey: ["profile"],
        queryFn: async () => (await tm.get("/profile")).data,
      });
    return (
      N.useEffect(() => {
        i && a("/");
      }, [i]),
      { profileData: n, errorProfileData: i, loadingProfile: s }
    );
  },
  l2 = () => {
    const { profileData: a, loadingProfile: n, errorProfileData: i } = s2();
    return (
      console.log(a, n, i),
      I.jsx("article", {
        children: I.jsx("h2", { children: a == null ? void 0 : a.userName }),
      })
    );
  },
  u2 = () => I.jsx(I.Fragment, { children: I.jsx(l2, {}) });
function o2() {
  return I.jsx(n_, {
    children: I.jsxs(Jl, {
      element: I.jsx(r2, {}),
      children: [
        I.jsx(Jl, { index: !0, path: "/", element: I.jsx(a2, {}) }),
        I.jsx(Jl, {
          element: I.jsx(i2, {}),
          children: I.jsx(Jl, {
            index: !0,
            path: "/profile",
            element: I.jsx(u2, {}),
          }),
        }),
      ],
    }),
  });
}
const c2 = new RT({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
        retry: !1,
        staleTime: 5 * 60 * 1e3,
      },
    },
  }),
  f2 = ({ children: a }) => I.jsx(MT, { client: c2, children: a });
var d2 = (a, n, i, s, u, c, d, h) => {
    let p = document.documentElement,
      m = ["light", "dark"];
    function g(b) {
      (Array.isArray(a) ? a : [a]).forEach((T) => {
        let O = T === "class",
          R = O && c ? u.map((j) => c[j] || j) : u;
        O
          ? (p.classList.remove(...R), p.classList.add(b))
          : p.setAttribute(T, b);
      }),
        x(b);
    }
    function x(b) {
      h && m.includes(b) && (p.style.colorScheme = b);
    }
    function A() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    if (s) g(s);
    else
      try {
        let b = localStorage.getItem(n) || i,
          T = d && b === "system" ? A() : b;
        g(T);
      } catch {}
  },
  h2 = N.createContext(void 0),
  m2 = { setTheme: (a) => {}, themes: [] },
  p2 = () => {
    var a;
    return (a = N.useContext(h2)) != null ? a : m2;
  };
N.memo(
  ({
    forcedTheme: a,
    storageKey: n,
    attribute: i,
    enableSystem: s,
    enableColorScheme: u,
    defaultTheme: c,
    value: d,
    themes: h,
    nonce: p,
    scriptProps: m,
  }) => {
    let g = JSON.stringify([i, n, c, a, h, d, s, u]).slice(1, -1);
    return N.createElement("script", {
      ...m,
      suppressHydrationWarning: !0,
      nonce: typeof window > "u" ? p : "",
      dangerouslySetInnerHTML: { __html: `(${d2.toString()})(${g})` },
    });
  },
);
const y2 = ({ ...a }) => {
  const { theme: n = "system" } = p2();
  return I.jsx(FA, {
    theme: n,
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton:
          "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton:
          "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
      },
    },
    ...a,
  });
};
cS.createRoot(document.getElementById("root")).render(
  I.jsx(N.StrictMode, {
    children: I.jsx(R_, {
      children: I.jsxs(f2, {
        children: [I.jsx(o2, {}), I.jsx(y2, { richColors: !0 })],
      }),
    }),
  }),
);
