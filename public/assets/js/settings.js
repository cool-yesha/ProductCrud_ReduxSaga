/* eslint-disable no-self-compare */
/* eslint-disable no-sequences */
/* eslint-disable no-new-func */
/* eslint-disable no-cond-assign */
/* eslint-disable eqeqeq */
/* eslint-disable default-case */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
!(function () {
  var t = {
      4963: function (t) {
        t.exports = function (t) {
          if ("function" != typeof t)
            throw TypeError(t + " is not a function!");
          return t;
        };
      },
      6793: function (t, n, e) {
        
        var r = e(4496)(!0);
        t.exports = function (t, n, e) {
          return n + (e ? r(t, n).length : 1);
        };
      },
      7007: function (t, n, e) {
        var r = e(5286);
        t.exports = function (t) {
          if (!r(t)) throw TypeError(t + " is not an object!");
          return t;
        };
      },
      1488: function (t, _n, e) {
        var r = e(2032),
          o = e(6314)("toStringTag"),
          i =
            "Arguments" ==
            r(
              (function () {
                return arguments;
              })()
            );
        t.exports = function (t) {
          var n, e, u;
          return void 0 === t
            ? "Undefined"
            : null === t
            ? "Null"
            : "string" ==
              typeof (e = (function (t, n) {
                try {
                  return t[n];
                } catch (t) {}
              })((n = Object(t)), o))
            ? e
            : i
            ? r(n)
            : "Object" == (u = r(n)) && "function" == typeof n.callee
            ? "Arguments"
            : u;
        };
      },
      2032: function (t) {
        var n = {}.toString;
        t.exports = function (t) {
          return n.call(t).slice(8, -1);
        };
      },
      5645: function (t) {
        var n = (t.exports = { version: "2.6.12" });
        "number" == typeof __e && (__e = n);
      },
      741: function (t, n, e) {
        var r = e(4963);
        t.exports = function (t, n, e) {
          if ((r(t), void 0 === n)) return t;
          switch (e) {
            case 1:
              return function (e) {
                return t.call(n, e);
              };
            case 2:
              return function (e, r) {
                return t.call(n, e, r);
              };
            case 3:
              return function (e, r, o) {
                return t.call(n, e, r, o);
              };
          }
          return function () {
            return t.apply(n, arguments);
          };
        };
      },
      1355: function (t) {
        t.exports = function (t) {
          if (null == t) throw TypeError("Can't call method on  " + t);
          return t;
        };
      },
      7057: function (t, _n, e) {
        t.exports = !e(4253)(function () {
          return (
            7 !=
            Object.defineProperty({}, "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
      },
      2457: function (t, _n, e) {
        var r = e(5286),
          o = e(3816).document,
          i = r(o) && r(o.createElement);
        t.exports = function (t) {
          return i ? o.createElement(t) : {};
        };
      },
      2985: function (t, n, e) {
        var r = e(3816),
          o = e(5645),
          i = e(7728),
          u = e(7234),
          c = e(741),
          a = function (t, n, e) {
            var l,
              f,
              s,
              p,
              v = t & a.F,
              h = t & a.G,
              d = t & a.S,
              g = t & a.P,
              x = t & a.B,
              y = h ? r : d ? r[n] || (r[n] = {}) : (r[n] || {}).prototype,
              m = h ? o : o[n] || (o[n] = {}),
              b = m.prototype || (m.prototype = {});
            for (l in (h && (e = n), e))
              (s = ((f = !v && y && void 0 !== y[l]) ? y : e)[l]),
                (p =
                  x && f
                    ? c(s, r)
                    : g && "function" == typeof s
                    ? c(Function.call, s)
                    : s),
                y && u(y, l, s, t & a.U),
                m[l] != s && i(m, l, p),
                g && b[l] != s && (b[l] = s);
          };
        (r.core = o),
          (a.F = 1),
          (a.G = 2),
          (a.S = 4),
          (a.P = 8),
          (a.B = 16),
          (a.W = 32),
          (a.U = 64),
          (a.R = 128),
          (t.exports = a);
      },
      4253: function (t) {
        t.exports = function (t) {
          try {
            return !!t();
          } catch (t) {
            return !0;
          }
        };
      },
      8082: function (t, _n, e) {
        
        e(8269);
        var r = e(7234),
          o = e(7728),
          i = e(4253),
          u = e(1355),
          c = e(6314),
          a = e(1165),
          l = c("species"),
          f = !i(function () {
            var t = /./;
            return (
              (t.exec = function () {
                var t = [];
                return (t.groups = { a: "7" }), t;
              }),
              "7" !== "".replace(t, "$<a>")
            );
          }),
          s = (function () {
            var t = /(?:)/,
              n = t.exec;
            t.exec = function () {
              return n.apply(this, arguments);
            };
            var e = "ab".split(t);
            return 2 === e.length && "a" === e[0] && "b" === e[1];
          })();
        t.exports = function (t, n, e) {
          var p = c(t),
            v = !i(function () {
              var n = {};
              return (
                (n[p] = function () {
                  return 7;
                }),
                7 != ""[t](n)
              );
            }),
            h = v
              ? !i(function () {
                  var n = !1,
                    e = /a/;
                  return (
                    (e.exec = function () {
                      return (n = !0), null;
                    }),
                    "split" === t &&
                      ((e.constructor = {}),
                      (e.constructor[l] = function () {
                        return e;
                      })),
                    e[p](""),
                    !n
                  );
                })
              : void 0;
          if (!v || !h || ("replace" === t && !f) || ("split" === t && !s)) {
            var d = /./[p],
              g = e(u, p, ""[t], function (t, n, e, r, o) {
                return n.exec === a
                  ? v && !o
                    ? { done: !0, value: d.call(n, e, r) }
                    : { done: !0, value: t.call(e, n, r) }
                  : { done: !1 };
              }),
              x = g[0],
              y = g[1];
            r(String.prototype, t, x),
              o(
                RegExp.prototype,
                p,
                2 == n
                  ? function (t, n) {
                      return y.call(t, this, n);
                    }
                  : function (t) {
                      return y.call(t, this);
                    }
              );
          }
        };
      },
      3218: function (t, _n, e) {
        
        var r = e(7007);
        t.exports = function () {
          var t = r(this),
            n = "";
          return (
            t.global && (n += "g"),
            t.ignoreCase && (n += "i"),
            t.multiline && (n += "m"),
            t.unicode && (n += "u"),
            t.sticky && (n += "y"),
            n
          );
        };
      },
      18: function (t, _n, e) {
        t.exports = e(3825)("native-function-to-string", Function.toString);
      },
      3816: function (t) {
        var n = (t.exports =
          "undefined" != typeof window && window.Math == Math
            ? window
            : "undefined" != typeof self && self.Math == Math
            ? self
            : Function("return this")());
        "number" == typeof __g && (__g = n);
      },
      9181: function (t) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
          return n.call(t, e);
        };
      },
      7728: function (t, _n, e) {
        var r = e(9275),
          o = e(681);
        t.exports = e(7057)
          ? function (t, n, e) {
              return r.f(t, n, o(1, e));
            }
          : function (t, n, e) {
              return (t[n] = e), t;
            };
      },
      1734: function (t, n, e) {
        t.exports =
          !e(7057) &&
          !e(4253)(function () {
            return (
              7 !=
              Object.defineProperty(e(2457)("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      5286: function (t) {
        t.exports = function (t) {
          return "object" == typeof t ? null !== t : "function" == typeof t;
        };
      },
      5364: function (t, n, e) {
        var r = e(5286),
          o = e(2032),
          i = e(6314)("match");
        t.exports = function (t) {
          var n;
          return r(t) && (void 0 !== (n = t[i]) ? !!n : "RegExp" == o(t));
        };
      },
      4461: function (t) {
        t.exports = !1;
      },
      9275: function (t, n, e) {
        var r = e(7007),
          o = e(1734),
          i = e(1689),
          u = Object.defineProperty;
        n.f = e(7057)
          ? Object.defineProperty
          : function (t, n, e) {
              if ((r(t), (n = i(n, !0)), r(e), o))
                try {
                  return u(t, n, e);
                } catch (t) {}
              if ("get" in e || "set" in e)
                throw TypeError("Accessors not supported!");
              return "value" in e && (t[n] = e.value), t;
            };
      },
      681: function (t) {
        t.exports = function (t, n) {
          return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: n,
          };
        };
      },
      7234: function (t, n, e) {
        var r = e(3816),
          o = e(7728),
          i = e(9181),
          u = e(3953)("src"),
          c = e(18),
          a = "toString",
          l = ("" + c).split(a);
        (e(5645).inspectSource = function (t) {
          return c.call(t);
        }),
          (t.exports = function (t, n, e, c) {
            var a = "function" == typeof e;
            a && (i(e, "name") || o(e, "name", n)),
              t[n] !== e &&
                (a &&
                  (i(e, u) || o(e, u, t[n] ? "" + t[n] : l.join(String(n)))),
                t === r
                  ? (t[n] = e)
                  : c
                  ? t[n]
                    ? (t[n] = e)
                    : o(t, n, e)
                  : (delete t[n], o(t, n, e)));
          })(Function.prototype, a, function () {
            return ("function" == typeof this && this[u]) || c.call(this);
          });
      },
      7787: function (t, _n, e) {
        
        var r = e(1488),
          o = RegExp.prototype.exec;
        t.exports = function (t, n) {
          var e = t.exec;
          if ("function" == typeof e) {
            var i = e.call(t, n);
            if ("object" != typeof i)
              throw new TypeError(
                "RegExp exec method returned something other than an Object or null"
              );
            return i;
          }
          if ("RegExp" !== r(t))
            throw new TypeError("RegExp#exec called on incompatible receiver");
          return o.call(t, n);
        };
      },
      1165: function (t, n, e) {
        
        var r,
          o,
          i = e(3218),
          u = RegExp.prototype.exec,
          c = String.prototype.replace,
          a = u,
          l =
            ((r = /a/),
            (o = /b*/g),
            u.call(r, "a"),
            u.call(o, "a"),
            0 !== r.lastIndex || 0 !== o.lastIndex),
          f = void 0 !== /()??/.exec("")[1];
        (l || f) &&
          (a = function (t) {
            var n,
              e,
              r,
              o,
              a = this;
            return (
              f && (e = new RegExp("^" + a.source + "$(?!\\s)", i.call(a))),
              l && (n = a.lastIndex),
              (r = u.call(a, t)),
              l && r && (a.lastIndex = a.global ? r.index + r[0].length : n),
              f &&
                r &&
                r.length > 1 &&
                c.call(r[0], e, function () {
                  for (o = 1; o < arguments.length - 2; o++)
                    void 0 === arguments[o] && (r[o] = void 0);
                }),
              r
            );
          }),
          (t.exports = a);
      },
      7195: function (t) {
        t.exports =
          Object.is ||
          function (t, n) {
            return t === n ? 0 !== t || 1 / t == 1 / n : t != t && n != n;
          };
      },
      3825: function (t, n, e) {
        var r = e(5645),
          o = e(3816),
          i = "__core-js_shared__",
          u = o[i] || (o[i] = {});
        (t.exports = function (t, n) {
          return u[t] || (u[t] = void 0 !== n ? n : {});
        })("versions", []).push({
          version: r.version,
          mode: e(4461) ? "pure" : "global",
          copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
        });
      },
      8364: function (t, n, e) {
        var r = e(7007),
          o = e(4963),
          i = e(6314)("species");
        t.exports = function (t, n) {
          var e,
            u = r(t).constructor;
          return void 0 === u || null == (e = r(u)[i]) ? n : o(e);
        };
      },
      4496: function (t, n, e) {
        var r = e(1467),
          o = e(1355);
        t.exports = function (t) {
          return function (n, e) {
            var i,
              u,
              c = String(o(n)),
              a = r(e),
              l = c.length;
            return a < 0 || a >= l
              ? t
                ? ""
                : void 0
              : (i = c.charCodeAt(a)) < 55296 ||
                i > 56319 ||
                a + 1 === l ||
                (u = c.charCodeAt(a + 1)) < 56320 ||
                u > 57343
              ? t
                ? c.charAt(a)
                : i
              : t
              ? c.slice(a, a + 2)
              : u - 56320 + ((i - 55296) << 10) + 65536;
          };
        };
      },
      1467: function (t) {
        var n = Math.ceil,
          e = Math.floor;
        t.exports = function (t) {
          return isNaN((t = +t)) ? 0 : (t > 0 ? e : n)(t);
        };
      },
      875: function (t, n, e) {
        var r = e(1467),
          o = Math.min;
        t.exports = function (t) {
          return t > 0 ? o(r(t), 9007199254740991) : 0;
        };
      },
      1689: function (t, n, e) {
        var r = e(5286);
        t.exports = function (t, n) {
          if (!r(t)) return t;
          var e, o;
          if (n && "function" == typeof (e = t.toString) && !r((o = e.call(t))))
            return o;
          if ("function" == typeof (e = t.valueOf) && !r((o = e.call(t))))
            return o;
          if (
            !n &&
            "function" == typeof (e = t.toString) &&
            !r((o = e.call(t)))
          )
            return o;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      3953: function (t) {
        var n = 0,
          e = Math.random();
        t.exports = function (t) {
          return "Symbol(".concat(
            void 0 === t ? "" : t,
            ")_",
            (++n + e).toString(36)
          );
        };
      },
      6314: function (t, n, e) {
        var r = e(3825)("wks"),
          o = e(3953),
          i = e(3816).Symbol,
          u = "function" == typeof i;
        (t.exports = function (t) {
          return r[t] || (r[t] = (u && i[t]) || (u ? i : o)("Symbol." + t));
        }).store = r;
      },
      8269: function (t, n, e) {
        
        var r = e(1165);
        e(2985)(
          { target: "RegExp", proto: !0, forced: r !== /./.exec },
          { exec: r }
        );
      },
      6142: function (t, n, e) {
        
        var r = e(7007),
          o = e(7195),
          i = e(7787);
        e(8082)("search", 1, function (t, n, e, u) {
          return [
            function (e) {
              var r = t(this),
                o = null == e ? void 0 : e[n];
              return void 0 !== o ? o.call(e, r) : new RegExp(e)[n](String(r));
            },
            function (t) {
              var n = u(e, t, this);
              if (n.done) return n.value;
              var c = r(t),
                a = String(this),
                l = c.lastIndex;
              o(l, 0) || (c.lastIndex = 0);
              var f = i(c, a);
              return (
                o(c.lastIndex, l) || (c.lastIndex = l),
                null === f ? -1 : f.index
              );
            },
          ];
        });
      },
      1876: function (t, n, e) {
        
        var r = e(5364),
          o = e(7007),
          i = e(8364),
          u = e(6793),
          c = e(875),
          a = e(7787),
          l = e(1165),
          f = e(4253),
          s = Math.min,
          p = [].push,
          v = 4294967295,
          h = !f(function () {
            RegExp(v, "y");
          });
        e(8082)("split", 2, function (t, n, e, f) {
          var d;
          return (
            (d =
              "c" == "abbc".split(/(b)*/)[1] ||
              4 != "test".split(/(?:)/, -1).length ||
              2 != "ab".split(/(?:ab)*/).length ||
              4 != ".".split(/(.?)(.?)/).length ||
              ".".split(/()()/).length > 1 ||
              "".split(/.?/).length
                ? function (t, n) {
                    var o = String(this);
                    if (void 0 === t && 0 === n) return [];
                    if (!r(t)) return e.call(o, t, n);
                    for (
                      var i,
                        u,
                        c,
                        a = [],
                        f =
                          (t.ignoreCase ? "i" : "") +
                          (t.multiline ? "m" : "") +
                          (t.unicode ? "u" : "") +
                          (t.sticky ? "y" : ""),
                        s = 0,
                        h = void 0 === n ? v : n >>> 0,
                        d = new RegExp(t.source, f + "g");
                      (i = l.call(d, o)) &&
                      !(
                        (u = d.lastIndex) > s &&
                        (a.push(o.slice(s, i.index)),
                        i.length > 1 &&
                          i.index < o.length &&
                          p.apply(a, i.slice(1)),
                        (c = i[0].length),
                        (s = u),
                        a.length >= h)
                      );

                    )
                      d.lastIndex === i.index && d.lastIndex++;
                    return (
                      s === o.length
                        ? (!c && d.test("")) || a.push("")
                        : a.push(o.slice(s)),
                      a.length > h ? a.slice(0, h) : a
                    );
                  }
                : "0".split(void 0, 0).length
                ? function (t, n) {
                    return void 0 === t && 0 === n ? [] : e.call(this, t, n);
                  }
                : e),
            [
              function (e, r) {
                var o = t(this),
                  i = null == e ? void 0 : e[n];
                return void 0 !== i ? i.call(e, o, r) : d.call(String(o), e, r);
              },
              function (t, n) {
                var r = f(d, t, this, n, d !== e);
                if (r.done) return r.value;
                var l = o(t),
                  p = String(this),
                  g = i(l, RegExp),
                  x = l.unicode,
                  y =
                    (l.ignoreCase ? "i" : "") +
                    (l.multiline ? "m" : "") +
                    (l.unicode ? "u" : "") +
                    (h ? "y" : "g"),
                  m = new g(h ? l : "^(?:" + l.source + ")", y),
                  b = void 0 === n ? v : n >>> 0;
                if (0 === b) return [];
                if (0 === p.length) return null === a(m, p) ? [p] : [];
                for (var w = 0, E = 0, S = []; E < p.length; ) {
                  m.lastIndex = h ? E : 0;
                  var j,
                    _ = a(m, h ? p : p.slice(E));
                  if (
                    null === _ ||
                    (j = s(c(m.lastIndex + (h ? 0 : E)), p.length)) === w
                  )
                    E = u(p, E, x);
                  else {
                    if ((S.push(p.slice(w, E)), S.length === b)) return S;
                    for (var O = 1; O <= _.length - 1; O++)
                      if ((S.push(_[O]), S.length === b)) return S;
                    E = w = j;
                  }
                }
                return S.push(p.slice(w)), S;
              },
            ]
          );
        });
      },
    },
    n = {};
  function e(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var i = (n[r] = { exports: {} });
    return t[r](i, i.exports, e), i.exports;
  }
  (e.n = function (t) {
    var n =
      t && t.__esModule
        ? function () {
            return t.default;
          }
        : function () {
            return t;
          };
    return e.d(n, { a: n }), n;
  }),
    (e.d = function (t, n) {
      for (var r in n)
        e.o(n, r) &&
          !e.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
    }),
    (e.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (function () {
      
      e(1876), e(6142);
      var t,
        n,
        r = document.createElement("link");
      (r.href =
        "css/" +
        ((t = (function (t) {
          for (
            var n = t + "=", e = document.cookie.split(";"), r = 0;
            r < e.length;
            r++
          ) {
            for (var o = e[r]; " " == o.charAt(0); )
              o = o.substring(1, o.length);
            if (0 == o.indexOf(n)) return o.substring(n.length, o.length);
          }
          return null;
        })("theme")),
        ((n = (function (t) {
          var n = void 0;
          return (
            location.search
              .substr(1)
              .split("&")
              .some(function (e) {
                return e.split("=")[0] == t && (n = e.split("=")[1]);
              }),
            n
          );
        })("theme"))
          ? ((function (t, n, e) {
              var r = "";
              if (e) {
                var o = new Date();
                o.setTime(o.getTime() + 24 * e * 60 * 60 * 1e3),
                  (r = "; expires=" + o.toUTCString());
              }
              document.cookie = t + "=" + (n || "") + r + "; path=/";
            })("theme", n, 7),
            n)
          : t || "modern") + ".css")),
        (r.type = "text/css"),
        (r.rel = "stylesheet"),
        document.getElementsByTagName("head")[0].appendChild(r);
    })();
})();
//# sourceMappingURL=settings.js.map
