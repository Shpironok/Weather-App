/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);
	var myapp = angular.module('myapp', []);

	__webpack_require__(3)(myapp);
	__webpack_require__(4)(myapp);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	module.exports = angular;

/***/ },
/* 2 */
/***/ function(module, exports) {

	/*
	 AngularJS v1.1.4
	 (c) 2010-2012 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	"use strict";

	(function (M, V, s) {
	  'use strict';function gc() {
	    var b = M.angular;M.angular = hc;return b;
	  }function o(b, a, c) {
	    var d;if (b) if (I(b)) for (d in b) d != "prototype" && d != "length" && d != "name" && b.hasOwnProperty(d) && a.call(c, b[d], d);else if (b.forEach && b.forEach !== o) b.forEach(a, c);else if (!b || typeof b.length !== "number" ? 0 : typeof b.hasOwnProperty != "function" && typeof b.constructor != "function" || b instanceof P || ca && b instanceof ca || Da.call(b) !== "[object Object]" || typeof b.callee === "function") for (d = 0; d < b.length; d++) a.call(c, b[d], d);else for (d in b) b.hasOwnProperty(d) && a.call(c, b[d], d);return b;
	  }function rb(b) {
	    var a = [],
	        c;for (c in b) b.hasOwnProperty(c) && a.push(c);return a.sort();
	  }function ic(b, a, c) {
	    for (var d = rb(b), e = 0; e < d.length; e++) a.call(c, b[d[e]], d[e]);return d;
	  }function sb(b) {
	    return function (a, c) {
	      b(c, a);
	    };
	  }function Ea() {
	    for (var b = Z.length, a; b;) {
	      b--;a = Z[b].charCodeAt(0);if (a == 57) return Z[b] = "A", Z.join("");if (a == 90) Z[b] = "0";else return Z[b] = String.fromCharCode(a + 1), Z.join("");
	    }Z.unshift("0");return Z.join("");
	  }function y(b) {
	    o(arguments, function (a) {
	      a !== b && o(a, function (a, d) {
	        b[d] = a;
	      });
	    });return b;
	  }function K(b) {
	    return parseInt(b, 10);
	  }function Fa(b, a) {
	    return y(new (y(function () {}, { prototype: b }))(), a);
	  }function t() {}function pa(b) {
	    return b;
	  }function Q(b) {
	    return function () {
	      return b;
	    };
	  }function u(b) {
	    return typeof b == "undefined";
	  }function w(b) {
	    return typeof b != "undefined";
	  }function L(b) {
	    return b != null && typeof b == "object";
	  }function x(b) {
	    return typeof b == "string";
	  }function Za(b) {
	    return typeof b == "number";
	  }function qa(b) {
	    return Da.apply(b) == "[object Date]";
	  }
	  function C(b) {
	    return Da.apply(b) == "[object Array]";
	  }function I(b) {
	    return typeof b == "function";
	  }function ra(b) {
	    return b && b.document && b.location && b.alert && b.setInterval;
	  }function S(b) {
	    return x(b) ? b.replace(/^\s*/, "").replace(/\s*$/, "") : b;
	  }function jc(b) {
	    return b && (b.nodeName || b.bind && b.find);
	  }function $a(b, a, c) {
	    var d = [];o(b, function (b, f, i) {
	      d.push(a.call(c, b, f, i));
	    });return d;
	  }function Ga(b, a) {
	    if (b.indexOf) return b.indexOf(a);for (var c = 0; c < b.length; c++) if (a === b[c]) return c;return -1;
	  }function sa(b, a) {
	    var c = Ga(b, a);c >= 0 && b.splice(c, 1);return a;
	  }function W(b, a) {
	    if (ra(b) || b && b.$evalAsync && b.$watch) throw Error("Can't copy Window or Scope");if (a) {
	      if (b === a) throw Error("Can't copy equivalent objects or arrays");if (C(b)) for (var c = a.length = 0; c < b.length; c++) a.push(W(b[c]));else for (c in (o(a, function (b, c) {
	        delete a[c];
	      }), b)) a[c] = W(b[c]);
	    } else (a = b) && (C(b) ? a = W(b, []) : qa(b) ? a = new Date(b.getTime()) : L(b) && (a = W(b, {})));return a;
	  }function kc(b, a) {
	    var a = a || {},
	        c;for (c in b) b.hasOwnProperty(c) && c.substr(0, 2) !== "$$" && (a[c] = b[c]);return a;
	  }
	  function ja(b, a) {
	    if (b === a) return !0;if (b === null || a === null) return !1;if (b !== b && a !== a) return !0;var c = typeof b,
	        d;if (c == typeof a && c == "object") if (C(b)) {
	      if ((c = b.length) == a.length) {
	        for (d = 0; d < c; d++) if (!ja(b[d], a[d])) return !1;return !0;
	      }
	    } else if (qa(b)) return qa(a) && b.getTime() == a.getTime();else {
	      if (b && b.$evalAsync && b.$watch || a && a.$evalAsync && a.$watch || ra(b) || ra(a)) return !1;c = {};for (d in b) if (!(d.charAt(0) === "$" || I(b[d]))) {
	        if (!ja(b[d], a[d])) return !1;c[d] = !0;
	      }for (d in a) if (!c[d] && d.charAt(0) !== "$" && a[d] !== s && !I(a[d])) return !1;
	      return !0;
	    }return !1;
	  }function ab(b, a) {
	    var c = arguments.length > 2 ? ka.call(arguments, 2) : [];return I(a) && !(a instanceof RegExp) ? c.length ? function () {
	      return arguments.length ? a.apply(b, c.concat(ka.call(arguments, 0))) : a.apply(b, c);
	    } : function () {
	      return arguments.length ? a.apply(b, arguments) : a.call(b);
	    } : a;
	  }function lc(b, a) {
	    var c = a;/^\$+/.test(b) ? c = s : ra(a) ? c = "$WINDOW" : a && V === a ? c = "$DOCUMENT" : a && a.$evalAsync && a.$watch && (c = "$SCOPE");return c;
	  }function da(b, a) {
	    return JSON.stringify(b, lc, a ? "  " : null);
	  }function tb(b) {
	    return x(b) ? JSON.parse(b) : b;
	  }function Ha(b) {
	    b && b.length !== 0 ? (b = J("" + b), b = !(b == "f" || b == "0" || b == "false" || b == "no" || b == "n" || b == "[]")) : b = !1;return b;
	  }function ta(b) {
	    b = v(b).clone();try {
	      b.html("");
	    } catch (a) {}var c = v("<div>").append(b).html();try {
	      return b[0].nodeType === 3 ? J(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
	        return "<" + J(b);
	      });
	    } catch (d) {
	      return J(c);
	    }
	  }function bb(b) {
	    var a = {},
	        c,
	        d;o((b || "").split("&"), function (b) {
	      b && (c = b.split("="), d = decodeURIComponent(c[0]), a[d] = w(c[1]) ? decodeURIComponent(c[1]) : !0);
	    });
	    return a;
	  }function ub(b) {
	    var a = [];o(b, function (b, d) {
	      a.push(ua(d, !0) + (b === !0 ? "" : "=" + ua(b, !0)));
	    });return a.length ? a.join("&") : "";
	  }function cb(b) {
	    return ua(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
	  }function ua(b, a) {
	    return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, a ? "%20" : "+");
	  }function mc(b, a) {
	    function c(a) {
	      a && d.push(a);
	    }var d = [b],
	        e,
	        f,
	        i = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
	        h = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
	    o(i, function (a) {
	      i[a] = !0;c(V.getElementById(a));a = a.replace(":", "\\:");b.querySelectorAll && (o(b.querySelectorAll("." + a), c), o(b.querySelectorAll("." + a + "\\:"), c), o(b.querySelectorAll("[" + a + "]"), c));
	    });o(d, function (a) {
	      if (!e) {
	        var b = h.exec(" " + a.className + " ");b ? (e = a, f = (b[2] || "").replace(/\s+/g, ",")) : o(a.attributes, function (b) {
	          if (!e && i[b.name]) e = a, f = b.value;
	        });
	      }
	    });e && a(e, f ? [f] : []);
	  }function vb(b, a) {
	    var c = function c() {
	      b = v(b);a = a || [];a.unshift(["$provide", function (a) {
	        a.value("$rootElement", b);
	      }]);a.unshift("ng");
	      var c = wb(a);c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
	        a.$apply(function () {
	          b.data("$injector", d);c(b)(a);
	        });
	      }]);return c;
	    },
	        d = /^NG_DEFER_BOOTSTRAP!/;if (M && !d.test(M.name)) return c();M.name = M.name.replace(d, "");Ia.resumeBootstrap = function (b) {
	      o(b, function (b) {
	        a.push(b);
	      });c();
	    };
	  }function db(b, a) {
	    a = a || "_";return b.replace(nc, function (b, d) {
	      return (d ? a : "") + b.toLowerCase();
	    });
	  }function eb(b, a, c) {
	    if (!b) throw Error("Argument '" + (a || "?") + "' is " + (c || "required"));return b;
	  }function va(b, a, c) {
	    c && C(b) && (b = b[b.length - 1]);eb(I(b), a, "not a function, got " + (b && typeof b == "object" ? b.constructor.name || "Object" : typeof b));return b;
	  }function oc(b) {
	    function a(a, b, e) {
	      return a[b] || (a[b] = e());
	    }return a(a(b, "angular", Object), "module", function () {
	      var b = {};return function (d, e, f) {
	        e && b.hasOwnProperty(d) && (b[d] = null);return a(b, d, function () {
	          function a(c, d, e) {
	            return function () {
	              b[e || "push"]([c, d, arguments]);return m;
	            };
	          }if (!e) throw Error("No module: " + d);var b = [],
	              c = [],
	              g = a("$injector", "invoke"),
	              m = { _invokeQueue: b,
	            _runBlocks: c, requires: e, name: d, provider: a("$provide", "provider"), factory: a("$provide", "factory"), service: a("$provide", "service"), value: a("$provide", "value"), constant: a("$provide", "constant", "unshift"), animation: a("$animationProvider", "register"), filter: a("$filterProvider", "register"), controller: a("$controllerProvider", "register"), directive: a("$compileProvider", "directive"), config: g, run: function run(a) {
	              c.push(a);return this;
	            } };f && g(f);return m;
	        });
	      };
	    });
	  }function Ja(b) {
	    return b.replace(pc, function (a, b, d, e) {
	      return e ? d.toUpperCase() : d;
	    }).replace(qc, "Moz$1");
	  }function fb(b, a) {
	    function c() {
	      var e;for (var b = [this], c = a, i, h, j, g, m, k; b.length;) {
	        i = b.shift();h = 0;for (j = i.length; h < j; h++) {
	          g = v(i[h]);c ? g.triggerHandler("$destroy") : c = !c;m = 0;for (e = (k = g.children()).length, g = e; m < g; m++) b.push(ca(k[m]));
	        }
	      }return d.apply(this, arguments);
	    }var d = ca.fn[b],
	        d = d.$original || d;c.$original = d;ca.fn[b] = c;
	  }function P(b) {
	    if (b instanceof P) return b;if (!(this instanceof P)) {
	      if (x(b) && b.charAt(0) != "<") throw Error("selectors not implemented");return new P(b);
	    }if (x(b)) {
	      var a = V.createElement("div");a.innerHTML = "<div>&#160;</div>" + b;a.removeChild(a.firstChild);gb(this, a.childNodes);this.remove();
	    } else gb(this, b);
	  }function hb(b) {
	    return b.cloneNode(!0);
	  }function wa(b) {
	    xb(b);for (var a = 0, b = b.childNodes || []; a < b.length; a++) wa(b[a]);
	  }function yb(b, a, c) {
	    var d = $(b, "events");$(b, "handle") && (u(a) ? o(d, function (a, c) {
	      ib(b, c, a);delete d[c];
	    }) : u(c) ? (ib(b, a, d[a]), delete d[a]) : sa(d[a], c));
	  }function xb(b) {
	    var a = b[Ka],
	        c = La[a];c && (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), yb(b)), delete La[a], b[Ka] = s);
	  }function $(b, a, c) {
	    var d = b[Ka],
	        d = La[d || -1];if (w(c)) d || (b[Ka] = d = ++rc, d = La[d] = {}), d[a] = c;else return d && d[a];
	  }function zb(b, a, c) {
	    var d = $(b, "data"),
	        e = w(c),
	        f = !e && w(a),
	        i = f && !L(a);!d && !i && $(b, "data", d = {});if (e) d[a] = c;else if (f) if (i) return d && d[a];else y(d, a);else return d;
	  }function Ma(b, a) {
	    return (" " + b.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") > -1;
	  }function Ab(b, a) {
	    a && o(a.split(" "), function (a) {
	      b.className = S((" " + b.className + " ").replace(/[\n\t]/g, " ").replace(" " + S(a) + " ", " "));
	    });
	  }function Bb(b, a) {
	    a && o(a.split(" "), function (a) {
	      if (!Ma(b, a)) b.className = S(b.className + " " + S(a));
	    });
	  }function gb(b, a) {
	    if (a) for (var a = !a.nodeName && w(a.length) && !ra(a) ? a : [a], c = 0; c < a.length; c++) b.push(a[c]);
	  }function Cb(b, a) {
	    return Na(b, "$" + (a || "ngController") + "Controller");
	  }function Na(b, a, c) {
	    b = v(b);for (b[0].nodeType == 9 && (b = b.find("html")); b.length;) {
	      if (c = b.data(a)) return c;b = b.parent();
	    }
	  }function Db(b, a) {
	    var c = Oa[a.toLowerCase()];return c && Eb[b.nodeName] && c;
	  }function sc(b, a) {
	    var c = function c(_c, e) {
	      if (!_c.preventDefault) _c.preventDefault = function () {
	        _c.returnValue = !1;
	      };if (!_c.stopPropagation) _c.stopPropagation = function () {
	        _c.cancelBubble = !0;
	      };if (!_c.target) _c.target = _c.srcElement || V;if (u(_c.defaultPrevented)) {
	        var f = _c.preventDefault;_c.preventDefault = function () {
	          _c.defaultPrevented = !0;f.call(_c);
	        };_c.defaultPrevented = !1;
	      }_c.isDefaultPrevented = function () {
	        return _c.defaultPrevented;
	      };o(a[e || _c.type], function (a) {
	        a.call(b, _c);
	      });X <= 8 ? (_c.preventDefault = null, _c.stopPropagation = null, _c.isDefaultPrevented = null) : (delete _c.preventDefault, delete _c.stopPropagation, delete _c.isDefaultPrevented);
	    };
	    c.elem = b;return c;
	  }function la(b) {
	    var a = typeof b,
	        c;if (a == "object" && b !== null) if (typeof (c = b.$$hashKey) == "function") c = b.$$hashKey();else {
	      if (c === s) c = b.$$hashKey = Ea();
	    } else c = b;return a + ":" + c;
	  }function Pa(b) {
	    o(b, this.put, this);
	  }function Fb(b) {
	    var a, c;if (typeof b == "function") {
	      if (!(a = b.$inject)) a = [], c = b.toString().replace(tc, ""), c = c.match(uc), o(c[1].split(vc), function (b) {
	        b.replace(wc, function (b, c, d) {
	          a.push(d);
	        });
	      }), b.$inject = a;
	    } else C(b) ? (c = b.length - 1, va(b[c], "fn"), a = b.slice(0, c)) : va(b, "fn", !0);return a;
	  }function wb(b) {
	    function a(a) {
	      return function (b, c) {
	        if (L(b)) o(b, sb(a));else return a(b, c);
	      };
	    }function c(a, b) {
	      if (I(b) || C(b)) b = k.instantiate(b);if (!b.$get) throw Error("Provider " + a + " must define $get factory method.");return m[a + h] = b;
	    }function d(a, b) {
	      return c(a, { $get: b });
	    }function e(a) {
	      var b = [];o(a, function (a) {
	        if (!g.get(a)) if ((g.put(a, !0), x(a))) {
	          var c = xa(a);b = b.concat(e(c.requires)).concat(c._runBlocks);try {
	            for (var d = c._invokeQueue, c = 0, h = d.length; c < h; c++) {
	              var f = d[c],
	                  n = k.get(f[0]);n[f[1]].apply(n, f[2]);
	            }
	          } catch (j) {
	            throw (j.message && (j.message += " from " + a), j);
	          }
	        } else if (I(a)) try {
	          b.push(k.invoke(a));
	        } catch (i) {
	          throw (i.message && (i.message += " from " + a), i);
	        } else if (C(a)) try {
	          b.push(k.invoke(a));
	        } catch (l) {
	          throw (l.message && (l.message += " from " + String(a[a.length - 1])), l);
	        } else va(a, "module");
	      });return b;
	    }function f(a, b) {
	      function c(d) {
	        if (typeof d !== "string") throw Error("Service name expected");if (a.hasOwnProperty(d)) {
	          if (a[d] === i) throw Error("Circular dependency: " + j.join(" <- "));return a[d];
	        } else try {
	          return j.unshift(d), a[d] = i, a[d] = b(d);
	        } finally {
	          j.shift();
	        }
	      }function d(a, b, e) {
	        var g = [],
	            h = Fb(a),
	            f,
	            j,
	            n;j = 0;for (f = h.length; j < f; j++) n = h[j], g.push(e && e.hasOwnProperty(n) ? e[n] : c(n));a.$inject || (a = a[f]);switch (b ? -1 : g.length) {case 0:
	            return a();case 1:
	            return a(g[0]);case 2:
	            return a(g[0], g[1]);case 3:
	            return a(g[0], g[1], g[2]);case 4:
	            return a(g[0], g[1], g[2], g[3]);case 5:
	            return a(g[0], g[1], g[2], g[3], g[4]);case 6:
	            return a(g[0], g[1], g[2], g[3], g[4], g[5]);case 7:
	            return a(g[0], g[1], g[2], g[3], g[4], g[5], g[6]);case 8:
	            return a(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7]);case 9:
	            return a(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8]);case 10:
	            return a(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9]);default:
	            return a.apply(b, g);}
	      }return { invoke: d, instantiate: function instantiate(a, b) {
	          var c = function c() {},
	              e;c.prototype = (C(a) ? a[a.length - 1] : a).prototype;c = new c();e = d(a, c, b);return L(e) ? e : c;
	        }, get: c, annotate: Fb };
	    }var i = {},
	        h = "Provider",
	        j = [],
	        g = new Pa(),
	        m = { $provide: { provider: a(c), factory: a(d), service: a(function (a, b) {
	          return d(a, ["$injector", function (a) {
	            return a.instantiate(b);
	          }]);
	        }), value: a(function (a, b) {
	          return d(a, Q(b));
	        }),
	        constant: a(function (a, b) {
	          m[a] = b;l[a] = b;
	        }), decorator: function decorator(a, b) {
	          var c = k.get(a + h),
	              d = c.$get;c.$get = function () {
	            var a = q.invoke(d, c);return q.invoke(b, null, { $delegate: a });
	          };
	        } } },
	        k = m.$injector = f(m, function () {
	      throw Error("Unknown provider: " + j.join(" <- "));
	    }),
	        l = {},
	        q = l.$injector = f(l, function (a) {
	      a = k.get(a + h);return q.invoke(a.$get, a);
	    });o(e(b), function (a) {
	      q.invoke(a || t);
	    });return q;
	  }function xc() {
	    var b = !0;this.disableAutoScrolling = function () {
	      b = !1;
	    };this.$get = ["$window", "$location", "$rootScope", function (a, c, d) {
	      function e(a) {
	        var b = null;o(a, function (a) {
	          !b && J(a.nodeName) === "a" && (b = a);
	        });return b;
	      }function f() {
	        var b = c.hash(),
	            d;b ? (d = i.getElementById(b)) ? d.scrollIntoView() : (d = e(i.getElementsByName(b))) ? d.scrollIntoView() : b === "top" && a.scrollTo(0, 0) : a.scrollTo(0, 0);
	      }var i = a.document;b && d.$watch(function () {
	        return c.hash();
	      }, function () {
	        d.$evalAsync(f);
	      });return f;
	    }];
	  }function Gb(b) {
	    this.register = function (a, c) {
	      b.factory(Ja(a) + "Animation", c);
	    };this.$get = ["$injector", function (a) {
	      return function (b) {
	        if (b) try {
	          return a.get(Ja(b) + "Animation");
	        } catch (d) {}
	      };
	    }];
	  }
	  function yc(b, a, c, d) {
	    function e(a) {
	      try {
	        a.apply(null, ka.call(arguments, 1));
	      } finally {
	        if ((n--, n === 0)) for (; B.length;) try {
	          B.pop()();
	        } catch (b) {
	          c.error(b);
	        }
	      }
	    }function f(a, b) {
	      (function z() {
	        o(r, function (a) {
	          a();
	        });p = b(z, a);
	      })();
	    }function i() {
	      E != h.url() && (E = h.url(), o(G, function (a) {
	        a(h.url());
	      }));
	    }var h = this,
	        j = a[0],
	        g = b.location,
	        m = b.history,
	        k = b.setTimeout,
	        l = b.clearTimeout,
	        q = {};h.isMock = !1;var n = 0,
	        B = [];h.$$completeOutstandingRequest = e;h.$$incOutstandingRequestCount = function () {
	      n++;
	    };h.notifyWhenNoOutstandingRequests = function (a) {
	      o(r, function (a) {
	        a();
	      });n === 0 ? a() : B.push(a);
	    };var r = [],
	        p;h.addPollFn = function (a) {
	      u(p) && f(100, k);r.push(a);return a;
	    };var E = g.href,
	        D = a.find("base");h.url = function (a, b) {
	      if (a) {
	        if (E != a) return E = a, d.history ? b ? m.replaceState(null, "", a) : (m.pushState(null, "", a), D.attr("href", D.attr("href"))) : b ? g.replace(a) : g.href = a, h;
	      } else return g.href.replace(/%27/g, "'");
	    };var G = [],
	        R = !1;h.onUrlChange = function (a) {
	      R || (d.history && v(b).bind("popstate", i), d.hashchange ? v(b).bind("hashchange", i) : h.addPollFn(i), R = !0);G.push(a);return a;
	    };
	    h.baseHref = function () {
	      var a = D.attr("href");return a ? a.replace(/^https?\:\/\/[^\/]*/, "") : "";
	    };var A = {},
	        H = "",
	        F = h.baseHref();h.cookies = function (a, b) {
	      var d, e, g, h;if (a) if (b === s) j.cookie = escape(a) + "=;path=" + F + ";expires=Thu, 01 Jan 1970 00:00:00 GMT";else {
	        if (x(b)) d = (j.cookie = escape(a) + "=" + escape(b) + ";path=" + F).length + 1, d > 4096 && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!");
	      } else {
	        if (j.cookie !== H) {
	          H = j.cookie;d = H.split("; ");A = {};for (g = 0; g < d.length; g++) e = d[g], h = e.indexOf("="), h > 0 && (A[unescape(e.substring(0, h))] = unescape(e.substring(h + 1)));
	        }return A;
	      }
	    };h.defer = function (a, b) {
	      var c;n++;c = k(function () {
	        delete q[c];e(a);
	      }, b || 0);q[c] = !0;return c;
	    };h.defer.cancel = function (a) {
	      return q[a] ? (delete q[a], l(a), e(t), !0) : !1;
	    };
	  }function zc() {
	    this.$get = ["$window", "$log", "$sniffer", "$document", function (b, a, c, d) {
	      return new yc(b, d, a, c);
	    }];
	  }function Ac() {
	    this.$get = function () {
	      function b(b, d) {
	        function e(a) {
	          if (a != k) {
	            if (l) {
	              if (l == a) l = a.n;
	            } else l = a;f(a.n, a.p);f(a, k);k = a;k.n = null;
	          }
	        }function f(a, b) {
	          if (a != b) {
	            if (a) a.p = b;if (b) b.n = a;
	          }
	        }if (b in a) throw Error("cacheId " + b + " taken");var i = 0,
	            h = y({}, d, { id: b }),
	            j = {},
	            g = d && d.capacity || Number.MAX_VALUE,
	            m = {},
	            k = null,
	            l = null;return a[b] = { put: function put(a, b) {
	            var c = m[a] || (m[a] = { key: a });e(c);if (!u(b)) return a in j || i++, j[a] = b, i > g && this.remove(l.key), b;
	          }, get: function get(a) {
	            var b = m[a];if (b) return e(b), j[a];
	          }, remove: function remove(a) {
	            var b = m[a];if (b) {
	              if (b == k) k = b.p;if (b == l) l = b.n;f(b.n, b.p);delete m[a];delete j[a];i--;
	            }
	          }, removeAll: function removeAll() {
	            j = {};i = 0;m = {};k = l = null;
	          }, destroy: function destroy() {
	            m = h = j = null;delete a[b];
	          }, info: function info() {
	            return y({}, h, { size: i });
	          } };
	      }var a = {};b.info = function () {
	        var b = {};o(a, function (a, e) {
	          b[e] = a.info();
	        });return b;
	      };b.get = function (b) {
	        return a[b];
	      };return b;
	    };
	  }function Bc() {
	    this.$get = ["$cacheFactory", function (b) {
	      return b("templates");
	    }];
	  }function Hb(b) {
	    var a = {},
	        c = "Directive",
	        d = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,
	        e = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/,
	        f = "Template must have exactly one root element. was: ",
	        i = /^\s*(https?|ftp|mailto|file):/;this.directive = function j(d, e) {
	      x(d) ? (eb(e, "directive"), a.hasOwnProperty(d) || (a[d] = [], b.factory(d + c, ["$injector", "$exceptionHandler", function (b, c) {
	        var e = [];o(a[d], function (a) {
	          try {
	            var f = b.invoke(a);if (I(f)) f = { compile: Q(f) };else if (!f.compile && f.link) f.compile = Q(f.link);f.priority = f.priority || 0;f.name = f.name || d;f.require = f.require || f.controller && f.name;f.restrict = f.restrict || "A";e.push(f);
	          } catch (j) {
	            c(j);
	          }
	        });return e;
	      }])), a[d].push(e)) : o(d, sb(j));return this;
	    };this.urlSanitizationWhitelist = function (a) {
	      return w(a) ? (i = a, this) : i;
	    };this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", function (b, g, m, k, l, q, n, B, r) {
	      function p(a, b, c) {
	        a instanceof v || (a = v(a));o(a, function (b, c) {
	          b.nodeType == 3 && b.nodeValue.match(/\S+/) && (a[c] = v(b).wrap("<span></span>").parent()[0]);
	        });var d = D(a, b, a, c);return function (b, c) {
	          eb(b, "scope");for (var e = c ? za.clone.call(a) : a, g = 0, f = e.length; g < f; g++) {
	            var j = e[g];(j.nodeType == 1 || j.nodeType == 9) && e.eq(g).data("$scope", b);
	          }E(e, "ng-scope");c && c(e, b);d && d(b, e, e);return e;
	        };
	      }
	      function E(a, b) {
	        try {
	          a.addClass(b);
	        } catch (c) {}
	      }function D(a, b, c, d) {
	        function e(a, c, d, f) {
	          var j,
	              i,
	              l,
	              m,
	              n,
	              k,
	              q,
	              p = [];n = 0;for (k = c.length; n < k; n++) p.push(c[n]);q = n = 0;for (k = g.length; n < k; q++) i = p[q], c = g[n++], j = g[n++], c ? (c.scope ? (l = a.$new(L(c.scope)), v(i).data("$scope", l)) : l = a, (m = c.transclude) || !f && b ? c(j, l, i, d, (function (b) {
	            return function (c) {
	              var d = a.$new();d.$$transcluded = !0;return b(d, c).bind("$destroy", ab(d, d.$destroy));
	            };
	          })(m || b)) : c(j, l, i, s, f)) : j && j(a, i.childNodes, s, f);
	        }for (var g = [], f, j, i, l = 0; l < a.length; l++) j = new ya(), f = G(a[l], [], j, d), j = (f = f.length ? R(f, a[l], j, b, c) : null) && f.terminal || !a[l].childNodes || !a[l].childNodes.length ? null : D(a[l].childNodes, f ? f.transclude : b), g.push(f), g.push(j), i = i || f || j;return i ? e : null;
	      }function G(a, b, c, g) {
	        var f = c.$attr,
	            j;switch (a.nodeType) {case 1:
	            A(b, aa(jb(a).toLowerCase()), "E", g);var i, l, n;j = a.attributes;for (var m = 0, k = j && j.length; m < k; m++) if ((i = j[m], i.specified)) l = i.name, n = aa(l), ha.test(n) && (l = n.substr(6).toLowerCase()), n = aa(l.toLowerCase()), f[n] = l, c[n] = i = S(X && l == "href" ? decodeURIComponent(a.getAttribute(l, 2)) : i.value), Db(a, n) && (c[n] = !0), z(a, b, i, n), A(b, n, "A", g);a = a.className;if (x(a) && a !== "") for (; j = e.exec(a);) n = aa(j[2]), A(b, n, "C", g) && (c[n] = S(j[3])), a = a.substr(j.index + j[0].length);break;case 3:
	            ga(b, a.nodeValue);break;case 8:
	            try {
	              if (j = d.exec(a.nodeValue)) n = aa(j[1]), A(b, n, "M", g) && (c[n] = S(j[2]));
	            } catch (q) {}}b.sort(N);return b;
	      }function R(a, b, c, d, e) {
	        function j(a, b) {
	          if (a) a.require = z.require, B.push(a);if (b) b.require = z.require, r.push(b);
	        }function i(a, b) {
	          var c,
	              d = "data",
	              e = !1;if (x(a)) {
	            for (; (c = a.charAt(0)) == "^" || c == "?";) a = a.substr(1), c == "^" && (d = "inheritedData"), e = e || c == "?";c = b[d]("$" + a + "Controller");if (!c && !e) throw Error("No controller: " + a);
	          } else C(a) && (c = [], o(a, function (a) {
	            c.push(i(a, b));
	          }));return c;
	        }function l(a, d, e, f, j) {
	          var k, p, D, G, H;k = b === e ? c : kc(c, new ya(v(e), c.$attr));p = k.$$element;if (ba) {
	            var z = /^\s*([@=&])(\??)\s*(\w*)\s*$/,
	                F = d.$parent || d;o(ba.scope, function (a, b) {
	              var c = a.match(z) || [],
	                  e = c[3] || b,
	                  f = c[2] == "?",
	                  c = c[1],
	                  j,
	                  l,
	                  i;d.$$isolateBindings[b] = c + e;switch (c) {case "@":
	                  k.$observe(e, function (a) {
	                    d[b] = a;
	                  });k.$$observers[e].$$scope = F;k[e] && (d[b] = g(k[e])(F));break;case "=":
	                  if (f && !k[e]) break;l = q(k[e]);i = l.assign || function () {
	                    j = d[b] = l(F);throw Error(Ib + k[e] + " (directive: " + ba.name + ")");
	                  };j = d[b] = l(F);d.$watch(function () {
	                    var a = l(F);a !== d[b] && (a !== j ? j = d[b] = a : i(F, a = j = d[b]));return a;
	                  });break;case "&":
	                  l = q(k[e]);d[b] = function (a) {
	                    return l(F, a);
	                  };break;default:
	                  throw Error("Invalid isolate scope definition for directive " + ba.name + ": " + a);}
	            });
	          }ha && o(ha, function (a) {
	            var b = { $scope: d, $element: p, $attrs: k, $transclude: j };H = a.controller;H == "@" && (H = k[a.name]);p.data("$" + a.name + "Controller", n(H, b));
	          });f = 0;for (D = B.length; f < D; f++) try {
	            G = B[f], G(d, p, k, G.require && i(G.require, p));
	          } catch (E) {
	            m(E, ta(p));
	          }a && a(d, e.childNodes, s, j);f = 0;for (D = r.length; f < D; f++) try {
	            G = r[f], G(d, p, k, G.require && i(G.require, p));
	          } catch (N) {
	            m(N, ta(p));
	          }
	        }for (var k = -Number.MAX_VALUE, B = [], r = [], D = null, ba = null, N = null, A = c.$$element = v(b), z, T, R, ga, ia = d, ha, t, y, w = 0, u = a.length; w < u; w++) {
	          z = a[w];R = s;if (k > z.priority) break;if (y = z.scope) ea("isolated scope", ba, z, A), L(y) && (E(A, "ng-isolate-scope"), ba = z), E(A, "ng-scope"), D = D || z;T = z.name;if (y = z.controller) ha = ha || {}, ea("'" + T + "' controller", ha[T], z, A), ha[T] = z;if (y = z.transclude) ea("transclusion", ga, z, A), ga = z, k = z.priority, y == "element" ? (R = v(b), A = c.$$element = v(V.createComment(" " + T + ": " + c[T] + " ")), b = A[0], fa(e, v(R[0]), b), ia = p(R, d, k)) : (R = v(hb(b)).contents(), A.html(""), ia = p(R, d));if (z.template) if ((ea("template", N, z, A), N = z, y = I(z.template) ? z.template(A, c) : z.template, y = Jb(y), z.replace)) {
	            R = v("<div>" + S(y) + "</div>").contents();b = R[0];if (R.length != 1 || b.nodeType !== 1) throw Error(f + y);fa(e, A, b);T = { $attr: {} };a = a.concat(G(b, a.splice(w + 1, a.length - (w + 1)), T));H(c, T);u = a.length;
	          } else A.html(y);if (z.templateUrl) ea("template", N, z, A), N = z, l = F(a.splice(w, a.length - w), l, A, c, e, z.replace, ia), u = a.length;else if (z.compile) try {
	            t = z.compile(A, c, ia), I(t) ? j(null, t) : t && j(t.pre, t.post);
	          } catch (J) {
	            m(J, ta(A));
	          }if (z.terminal) l.terminal = !0, k = Math.max(k, z.priority);
	        }l.scope = D && D.scope;l.transclude = ga && ia;return l;
	      }function A(d, e, g, f) {
	        var l = !1;if (a.hasOwnProperty(e)) for (var i, e = b.get(e + c), n = 0, k = e.length; n < k; n++) try {
	          if ((i = e[n], (f === s || f > i.priority) && i.restrict.indexOf(g) != -1)) d.push(i), l = !0;
	        } catch (q) {
	          m(q);
	        }return l;
	      }function H(a, b) {
	        var c = b.$attr,
	            d = a.$attr,
	            e = a.$$element;o(a, function (d, e) {
	          e.charAt(0) != "$" && (b[e] && (d += (e === "style" ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]));
	        });o(b, function (b, g) {
	          g == "class" ? (E(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : g == "style" ? e.attr("style", e.attr("style") + ";" + b) : g.charAt(0) != "$" && !a.hasOwnProperty(g) && (a[g] = b, d[g] = c[g]);
	        });
	      }function F(a, b, c, d, e, g, j) {
	        var i = [],
	            n,
	            m,
	            q = c[0],
	            p = a.shift(),
	            ya = y({}, p, { controller: null, templateUrl: null, transclude: null, scope: null }),
	            p = I(p.templateUrl) ? p.templateUrl(c, d) : p.templateUrl;c.html("");k.get(p, { cache: l }).success(function (l) {
	          var k,
	              p,
	              l = Jb(l);if (g) {
	            p = v("<div>" + S(l) + "</div>").contents();k = p[0];if (p.length != 1 || k.nodeType !== 1) throw Error(f + l);l = { $attr: {} };fa(e, c, k);G(k, a, l);H(d, l);
	          } else k = q, c.html(l);a.unshift(ya);n = R(a, k, d, j);for (m = D(c[0].childNodes, j); i.length;) {
	            var B = i.shift(),
	                l = i.shift();p = i.shift();var r = i.shift(),
	                F = k;l !== q && (F = hb(k), fa(p, v(l), F));n(function () {
	              b(m, B, F, e, r);
	            }, B, F, e, r);
	          }i = null;
	        }).error(function (a, b, c, d) {
	          throw Error("Failed to load template: " + d.url);
	        });return function (a, c, d, e, g) {
	          i ? (i.push(c), i.push(d), i.push(e), i.push(g)) : n(function () {
	            b(m, c, d, e, g);
	          }, c, d, e, g);
	        };
	      }function N(a, b) {
	        return b.priority - a.priority;
	      }function ea(a, b, c, d) {
	        if (b) throw Error("Multiple directives [" + b.name + ", " + c.name + "] asking for " + a + " on: " + ta(d));
	      }function ga(a, b) {
	        var c = g(b, !0);c && a.push({ priority: 0, compile: Q(function (a, b) {
	            var d = b.parent(),
	                e = d.data("$binding") || [];e.push(c);E(d.data("$binding", e), "ng-binding");a.$watch(c, function (a) {
	              b[0].nodeValue = a;
	            });
	          }) });
	      }function z(a, b, c, d) {
	        var e = g(c, !0);e && b.push({ priority: 100, compile: Q(function (a, b, c) {
	            b = c.$$observers || (c.$$observers = {});if (e = g(c[d], !0)) c[d] = e(a), (b[d] || (b[d] = [])).$$inter = !0, (c.$$observers && c.$$observers[d].$$scope || a).$watch(e, function (a) {
	              c.$set(d, a);
	            });
	          }) });
	      }function fa(a, b, c) {
	        var d = b[0],
	            e = d.parentNode,
	            g,
	            f;if (a) {
	          g = 0;for (f = a.length; g < f; g++) if (a[g] == d) {
	            a[g] = c;break;
	          }
	        }e && e.replaceChild(c, d);c[v.expando] = d[v.expando];b[0] = c;
	      }var ya = function ya(a, b) {
	        this.$$element = a;this.$attr = b || {};
	      };ya.prototype = { $normalize: aa, $set: function $set(a, b, c, d) {
	          var e = Db(this.$$element[0], a),
	              g = this.$$observers;e && (this.$$element.prop(a, b), d = e);this[a] = b;d ? this.$attr[a] = d : (d = this.$attr[a]) || (this.$attr[a] = d = db(a, "-"));if (jb(this.$$element[0]) === "A" && a === "href") ba.setAttribute("href", b), e = ba.href, e.match(i) || (this[a] = b = "unsafe:" + e);c !== !1 && (b === null || b === s ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));g && o(g[a], function (a) {
	            try {
	              a(b);
	            } catch (c) {
	              m(c);
	            }
	          });
	        }, $observe: function $observe(a, b) {
	          var c = this,
	              d = c.$$observers || (c.$$observers = {}),
	              e = d[a] || (d[a] = []);e.push(b);B.$evalAsync(function () {
	            e.$$inter || b(c[a]);
	          });return b;
	        } };var ba = r[0].createElement("a"),
	          T = g.startSymbol(),
	          ia = g.endSymbol(),
	          Jb = T == "{{" || ia == "}}" ? pa : function (a) {
	        return a.replace(/\{\{/g, T).replace(/}}/g, ia);
	      },
	          ha = /^ngAttr[A-Z]/;return p;
	    }];
	  }function aa(b) {
	    return Ja(b.replace(Cc, ""));
	  }function Dc() {
	    var b = {};this.register = function (a, c) {
	      L(a) ? y(b, a) : b[a] = c;
	    };this.$get = ["$injector", "$window", function (a, c) {
	      return function (d, e) {
	        if (x(d)) {
	          var f = d,
	              d = b.hasOwnProperty(f) ? b[f] : kb(e.$scope, f, !0) || kb(c, f, !0);va(d, f, !0);
	        }return a.instantiate(d, e);
	      };
	    }];
	  }function Ec() {
	    this.$get = ["$window", function (b) {
	      return v(b.document);
	    }];
	  }function Fc() {
	    this.$get = ["$log", function (b) {
	      return function (a, c) {
	        b.error.apply(b, arguments);
	      };
	    }];
	  }function Gc() {
	    var b = "{{",
	        a = "}}";this.startSymbol = function (a) {
	      return a ? (b = a, this) : b;
	    };this.endSymbol = function (b) {
	      return b ? (a = b, this) : a;
	    };this.$get = ["$parse", "$exceptionHandler", function (c, d) {
	      function e(e, j) {
	        for (var g, m, k = 0, l = [], q = e.length, n = !1, B = []; k < q;) (g = e.indexOf(b, k)) != -1 && (m = e.indexOf(a, g + f)) != -1 ? (k != g && l.push(e.substring(k, g)), l.push(k = c(n = e.substring(g + f, m))), k.exp = n, k = m + i, n = !0) : (k != q && l.push(e.substring(k)), k = q);if (!(q = l.length)) l.push(""), q = 1;if (!j || n) return B.length = q, k = function (a) {
	          try {
	            for (var b = 0, c = q, g; b < c; b++) {
	              if (typeof (g = l[b]) == "function") g = g(a), g == null || g == s ? g = "" : typeof g != "string" && (g = da(g));B[b] = g;
	            }return B.join("");
	          } catch (f) {
	            d(Error("Error while interpolating: " + e + "\n" + f.toString()));
	          }
	        }, k.exp = e, k.parts = l, k;
	      }var f = b.length,
	          i = a.length;e.startSymbol = function () {
	        return b;
	      };e.endSymbol = function () {
	        return a;
	      };return e;
	    }];
	  }function Kb(b) {
	    for (var b = b.split("/"), a = b.length; a--;) b[a] = cb(b[a]);return b.join("/");
	  }function Aa(b, a) {
	    var c = lb.exec(b),
	        c = { protocol: c[1], host: c[3], port: K(c[5]) || Ba[c[1]] || null, path: c[6] || "/", search: c[8], hash: c[10] };if (a) a.$$protocol = c.protocol, a.$$host = c.host, a.$$port = c.port;return c;
	  }function ma(b, a, c) {
	    return b + "://" + a + (c == Ba[b] ? "" : ":" + c);
	  }function Hc(b, a, c) {
	    var d = Aa(b);return decodeURIComponent(d.path) != a || u(d.hash) || d.hash.indexOf(c) !== 0 ? b : ma(d.protocol, d.host, d.port) + a.substr(0, a.lastIndexOf("/")) + d.hash.substr(c.length);
	  }function Ic(b, a, c) {
	    var d = Aa(b);if (decodeURIComponent(d.path) == a && !u(d.hash) && d.hash.indexOf(c) === 0) return b;else {
	      var e = d.search && "?" + d.search || "",
	          f = d.hash && "#" + d.hash || "",
	          i = a.substr(0, a.lastIndexOf("/")),
	          h = d.path.substr(i.length);if (d.path.indexOf(i) !== 0) throw Error('Invalid url "' + b + '", missing path prefix "' + i + '" !');return ma(d.protocol, d.host, d.port) + a + "#" + c + h + e + f;
	    }
	  }function mb(b, a, c) {
	    a = a || "";this.$$parse = function (b) {
	      var c = Aa(b, this);if (c.path.indexOf(a) !== 0) throw Error('Invalid url "' + b + '", missing path prefix "' + a + '" !');this.$$path = decodeURIComponent(c.path.substr(a.length));this.$$search = bb(c.search);this.$$hash = c.hash && decodeURIComponent(c.hash) || "";this.$$compose();
	    };this.$$compose = function () {
	      var b = ub(this.$$search),
	          c = this.$$hash ? "#" + cb(this.$$hash) : "";this.$$url = Kb(this.$$path) + (b ? "?" + b : "") + c;this.$$absUrl = ma(this.$$protocol, this.$$host, this.$$port) + a + this.$$url;
	    };this.$$rewriteAppUrl = function (a) {
	      if (a.indexOf(c) == 0) return a;
	    };this.$$parse(b);
	  }function Qa(b, a, c) {
	    var d;this.$$parse = function (b) {
	      var c = Aa(b, this);if (c.hash && c.hash.indexOf(a) !== 0) throw Error('Invalid url "' + b + '", missing hash prefix "' + a + '" !');d = c.path + (c.search ? "?" + c.search : "");c = Jc.exec((c.hash || "").substr(a.length));this.$$path = c[1] ? (c[1].charAt(0) == "/" ? "" : "/") + decodeURIComponent(c[1]) : "";this.$$search = bb(c[3]);this.$$hash = c[5] && decodeURIComponent(c[5]) || "";this.$$compose();
	    };this.$$compose = function () {
	      var b = ub(this.$$search),
	          c = this.$$hash ? "#" + cb(this.$$hash) : "";this.$$url = Kb(this.$$path) + (b ? "?" + b : "") + c;this.$$absUrl = ma(this.$$protocol, this.$$host, this.$$port) + d + (this.$$url ? "#" + a + this.$$url : "");
	    };this.$$rewriteAppUrl = function (a) {
	      if (a.indexOf(c) == 0) return a;
	    };this.$$parse(b);
	  }function Lb(b, a, c, d) {
	    Qa.apply(this, arguments);this.$$rewriteAppUrl = function (b) {
	      if (b.indexOf(c) == 0) return c + d + "#" + a + b.substr(c.length);
	    };
	  }function Ra(b) {
	    return function () {
	      return this[b];
	    };
	  }function Mb(b, a) {
	    return function (c) {
	      if (u(c)) return this[b];this[b] = a(c);this.$$compose();return this;
	    };
	  }function Kc() {
	    var b = "",
	        a = !1;this.hashPrefix = function (a) {
	      return w(a) ? (b = a, this) : b;
	    };this.html5Mode = function (b) {
	      return w(b) ? (a = b, this) : a;
	    };this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function (c, d, e, f) {
	      function i(a) {
	        c.$broadcast("$locationChangeSuccess", h.absUrl(), a);
	      }var h,
	          j,
	          g,
	          m = d.url(),
	          k = Aa(m);a ? (j = d.baseHref() || "/", g = j.substr(0, j.lastIndexOf("/")), k = ma(k.protocol, k.host, k.port) + g + "/", h = e.history ? new mb(Hc(m, j, b), g, k) : new Lb(Ic(m, j, b), b, k, j.substr(g.length + 1))) : (k = ma(k.protocol, k.host, k.port) + (k.path || "") + (k.search ? "?" + k.search : "") + "#" + b + "/", h = new Qa(m, b, k));f.bind("click", function (a) {
	        if (!a.ctrlKey && !(a.metaKey || a.which == 2)) {
	          for (var b = v(a.target); J(b[0].nodeName) !== "a";) if (b[0] === f[0] || !(b = b.parent())[0]) return;var d = b.prop("href"),
	              e = h.$$rewriteAppUrl(d);d && !b.attr("target") && e && (h.$$parse(e), c.$apply(), a.preventDefault(), M.angular["ff-684208-preventDefault"] = !0);
	        }
	      });h.absUrl() != m && d.url(h.absUrl(), !0);d.onUrlChange(function (a) {
	        h.absUrl() != a && (c.$evalAsync(function () {
	          var b = h.absUrl();h.$$parse(a);i(b);
	        }), c.$$phase || c.$digest());
	      });var l = 0;c.$watch(function () {
	        var a = d.url(),
	            b = h.$$replace;if (!l || a != h.absUrl()) l++, c.$evalAsync(function () {
	          c.$broadcast("$locationChangeStart", h.absUrl(), a).defaultPrevented ? h.$$parse(a) : (d.url(h.absUrl(), b), i(a));
	        });h.$$replace = !1;return l;
	      });return h;
	    }];
	  }function Lc() {
	    var b = !0,
	        a = this;this.debugEnabled = function (a) {
	      return w(a) ? (b = a, this) : b;
	    };this.$get = ["$window", function (c) {
	      function d(a) {
	        a instanceof Error && (a.stack ? a = a.message && a.stack.indexOf(a.message) === -1 ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));return a;
	      }function e(a) {
	        var b = c.console || {},
	            e = b[a] || b.log || t;return e.apply ? function () {
	          var a = [];o(arguments, function (b) {
	            a.push(d(b));
	          });return e.apply(b, a);
	        } : function (a, b) {
	          e(a, b);
	        };
	      }return { log: e("log"), warn: e("warn"), info: e("info"), error: e("error"), debug: (function () {
	          var c = e("debug");return function () {
	            b && c.apply(a, arguments);
	          };
	        })() };
	    }];
	  }function Mc(b, a) {
	    function c(a) {
	      return a.indexOf(r) != -1;
	    }function d(a) {
	      a = a || 1;return n + a < b.length ? b.charAt(n + a) : !1;
	    }function e(a) {
	      return "0" <= a && a <= "9";
	    }function f(a) {
	      return a == " " || a == "\r" || a == "\t" || a == "\n" || a == "\u000b" || a == " ";
	    }function i(a) {
	      return "a" <= a && a <= "z" || "A" <= a && a <= "Z" || "_" == a || a == "$";
	    }function h(a) {
	      return a == "-" || a == "+" || e(a);
	    }function j(a, c, d) {
	      d = d || n;throw Error("Lexer Error: " + a + " at column" + (w(c) ? "s " + c + "-" + n + " [" + b.substring(c, d) + "]" : " " + d) + " in expression [" + b + "].");
	    }function g() {
	      for (var a = "", c = n; n < b.length;) {
	        var g = J(b.charAt(n));if (g == "." || e(g)) a += g;else {
	          var f = d();if (g == "e" && h(f)) a += g;else if (h(g) && f && e(f) && a.charAt(a.length - 1) == "e") a += g;else if (h(g) && (!f || !e(f)) && a.charAt(a.length - 1) == "e") j("Invalid exponent");else break;
	        }n++;
	      }a *= 1;l.push({ index: c, text: a, json: !0, fn: function fn() {
	          return a;
	        } });
	    }function m() {
	      for (var c = "", d = n, g, h, j; n < b.length;) {
	        var k = b.charAt(n);if (k == "." || i(k) || e(k)) k == "." && (g = n), c += k;else break;n++;
	      }if (g) for (h = n; h < b.length;) {
	        k = b.charAt(h);if (k == "(") {
	          j = c.substr(g - d + 1);c = c.substr(0, g - d);n = h;break;
	        }if (f(k)) h++;else break;
	      }d = { index: d, text: c };if (Ca.hasOwnProperty(c)) d.fn = d.json = Ca[c];else {
	        var m = Nb(c, a);d.fn = y(function (a, b) {
	          return m(a, b);
	        }, { assign: function assign(a, b) {
	            return Ob(a, c, b);
	          } });
	      }l.push(d);j && (l.push({ index: g, text: ".", json: !1 }), l.push({ index: g + 1, text: j, json: !1 }));
	    }function k(a) {
	      var c = n;n++;for (var d = "", e = a, g = !1; n < b.length;) {
	        var h = b.charAt(n);e += h;if (g) h == "u" ? (h = b.substring(n + 1, n + 5), h.match(/[\da-f]{4}/i) || j("Invalid unicode escape [\\u" + h + "]"), n += 4, d += String.fromCharCode(parseInt(h, 16))) : (g = Nc[h], d += g ? g : h), g = !1;else if (h == "\\") g = !0;else if (h == a) {
	          n++;l.push({ index: c,
	            text: e, string: d, json: !0, fn: function fn() {
	              return d;
	            } });return;
	        } else d += h;n++;
	      }j("Unterminated quote", c);
	    }for (var l = [], q, n = 0, B = [], r, p = ":"; n < b.length;) {
	      r = b.charAt(n);if (c("\"'")) k(r);else if (e(r) || c(".") && e(d())) g();else if (i(r)) {
	        if ((m(), "{,".indexOf(p) != -1 && B[0] == "{" && (q = l[l.length - 1]))) q.json = q.text.indexOf(".") == -1;
	      } else if (c("(){}[].,;:")) l.push({ index: n, text: r, json: ":[,".indexOf(p) != -1 && c("{[") || c("}]:,") }), c("{[") && B.unshift(r), c("}]") && B.shift(), n++;else if (f(r)) {
	        n++;continue;
	      } else {
	        var E = r + d(),
	            D = E + d(2),
	            G = Ca[r],
	            o = Ca[E],
	            A = Ca[D];A ? (l.push({ index: n, text: D, fn: A }), n += 3) : o ? (l.push({ index: n, text: E, fn: o }), n += 2) : G ? (l.push({ index: n, text: r, fn: G, json: "[,:".indexOf(p) != -1 && c("+-") }), n += 1) : j("Unexpected next character ", n, n + 1);
	      }p = r;
	    }return l;
	  }function Oc(b, a, c, d) {
	    function e(a, c) {
	      throw Error("Syntax Error: Token '" + c.text + "' " + a + " at column " + (c.index + 1) + " of the expression [" + b + "] starting at [" + b.substring(c.index) + "].");
	    }function f() {
	      if (F.length === 0) throw Error("Unexpected end of expression: " + b);return F[0];
	    }function i(a, b, c, d) {
	      if (F.length > 0) {
	        var e = F[0],
	            g = e.text;if (g == a || g == b || g == c || g == d || !a && !b && !c && !d) return e;
	      }return !1;
	    }function h(b, c, d, g) {
	      return (b = i(b, c, d, g)) ? (a && !b.json && e("is not valid json", b), F.shift(), b) : !1;
	    }function j(a) {
	      h(a) || e("is unexpected, expecting [" + a + "]", i());
	    }function g(a, b) {
	      return y(function (c, d) {
	        return a(c, d, b);
	      }, { constant: b.constant });
	    }function m(a, b, c) {
	      return y(function (d, e) {
	        return b(d, e, a, c);
	      }, { constant: a.constant && c.constant });
	    }function k() {
	      for (var a = [];;) if ((F.length > 0 && !i("}", ")", ";", "]") && a.push(fa()), !h(";"))) return a.length == 1 ? a[0] : function (b, c) {
	        for (var d, e = 0; e < a.length; e++) {
	          var g = a[e];g && (d = g(b, c));
	        }return d;
	      };
	    }function l() {
	      for (var a = h(), b = c(a.text), d = [];;) if (a = h(":")) d.push(N());else {
	        var e = function e(a, c, e) {
	          for (var e = [e], g = 0; g < d.length; g++) e.push(d[g](a, c));return b.apply(a, e);
	        };return function () {
	          return e;
	        };
	      }
	    }function q() {
	      for (var a = n(), b;;) if (b = h("||")) a = m(a, b.fn, n());else return a;
	    }function n() {
	      var a = B(),
	          b;if (b = h("&&")) a = m(a, b.fn, n());return a;
	    }function B() {
	      var a = r(),
	          b;if (b = h("==", "!=", "===", "!==")) a = m(a, b.fn, B());return a;
	    }function r() {
	      var a;a = p();for (var b; b = h("+", "-");) a = m(a, b.fn, p());if (b = h("<", ">", "<=", ">=")) a = m(a, b.fn, r());return a;
	    }function p() {
	      for (var a = E(), b; b = h("*", "/", "%");) a = m(a, b.fn, E());return a;
	    }function E() {
	      var a;return h("+") ? D() : (a = h("-")) ? m(A, a.fn, E()) : (a = h("!")) ? g(a.fn, E()) : D();
	    }function D() {
	      var a;if (h("(")) a = fa(), j(")");else if (h("[")) a = G();else if (h("{")) a = o();else {
	        var b = h();(a = b.fn) || e("not a primary expression", b);if (b.json) a.constant = a.literal = !0;
	      }for (var c; b = h("(", "[", ".");) b.text === "(" ? (a = ea(a, c), c = null) : b.text === "[" ? (c = a, a = z(a)) : b.text === "." ? (c = a, a = ga(a)) : e("IMPOSSIBLE");return a;
	    }function G() {
	      var a = [],
	          b = !0;if (f().text != "]") {
	        do {
	          var c = N();a.push(c);c.constant || (b = !1);
	        } while (h(","));
	      }j("]");return y(function (b, c) {
	        for (var d = [], e = 0; e < a.length; e++) d.push(a[e](b, c));return d;
	      }, { literal: !0, constant: b });
	    }function o() {
	      var a = [],
	          b = !0;if (f().text != "}") {
	        do {
	          var c = h(),
	              c = c.string || c.text;j(":");var d = N();a.push({ key: c, value: d });d.constant || (b = !1);
	        } while (h(","));
	      }j("}");return y(function (b, c) {
	        for (var d = {}, e = 0; e < a.length; e++) {
	          var g = a[e],
	              h = g.value(b, c);d[g.key] = h;
	        }return d;
	      }, { literal: !0, constant: b });
	    }var A = Q(0),
	        H,
	        F = Mc(b, d),
	        N = function N() {
	      var a = q(),
	          c,
	          d;return (d = h("=")) ? (a.assign || e("implies assignment but [" + b.substring(0, d.index) + "] can not be assigned to", d), c = q(), function (b, d) {
	        return a.assign(b, c(b, d), d);
	      }) : a;
	    },
	        ea = function ea(a, b) {
	      var c = [];if (f().text != ")") {
	        do c.push(N()); while (h(","));
	      }j(")");return function (d, e) {
	        for (var g = [], h = b ? b(d, e) : d, f = 0; f < c.length; f++) g.push(c[f](d, e));f = a(d, e) || t;return f.apply ? f.apply(h, g) : f(g[0], g[1], g[2], g[3], g[4]);
	      };
	    },
	        ga = function ga(a) {
	      var b = h().text,
	          c = Nb(b, d);return y(function (b, d) {
	        return c(a(b, d), d);
	      }, { assign: function assign(c, d, e) {
	          return Ob(a(c, e), b, d);
	        } });
	    },
	        z = function z(a) {
	      var b = N();j("]");return y(function (c, d) {
	        var e = a(c, d),
	            g = b(c, d),
	            h;if (!e) return s;if ((e = e[g]) && e.then) {
	          h = e;if (!("$$v" in e)) h.$$v = s, h.then(function (a) {
	            h.$$v = a;
	          });e = e.$$v;
	        }return e;
	      }, { assign: function assign(c, d, e) {
	          return a(c, e)[b(c, e)] = d;
	        } });
	    },
	        fa = function fa() {
	      for (var a = N(), b;;) if (b = h("|")) a = m(a, b.fn, l());else return a;
	    };a ? (N = q, ea = ga = z = fa = function () {
	      e("is not valid json", { text: b, index: 0 });
	    }, H = D()) : H = k();F.length !== 0 && e("is an unexpected token", F[0]);H.literal = !!H.literal;H.constant = !!H.constant;return H;
	  }function Ob(b, a, c) {
	    for (var a = a.split("."), d = 0; a.length > 1; d++) {
	      var e = a.shift(),
	          f = b[e];f || (f = {}, b[e] = f);b = f;
	    }return b[a.shift()] = c;
	  }function kb(b, a, c) {
	    if (!a) return b;for (var a = a.split("."), d, e = b, f = a.length, i = 0; i < f; i++) d = a[i], b && (b = (e = b)[d]);return !c && I(b) ? ab(e, b) : b;
	  }function Pb(b, a, c, d, e) {
	    return function (f, i) {
	      var h = i && i.hasOwnProperty(b) ? i : f,
	          j;if (h === null || h === s) return h;
	      if ((h = h[b]) && h.then) {
	        if (!("$$v" in h)) j = h, j.$$v = s, j.then(function (a) {
	          j.$$v = a;
	        });h = h.$$v;
	      }if (!a || h === null || h === s) return h;if ((h = h[a]) && h.then) {
	        if (!("$$v" in h)) j = h, j.$$v = s, j.then(function (a) {
	          j.$$v = a;
	        });h = h.$$v;
	      }if (!c || h === null || h === s) return h;if ((h = h[c]) && h.then) {
	        if (!("$$v" in h)) j = h, j.$$v = s, j.then(function (a) {
	          j.$$v = a;
	        });h = h.$$v;
	      }if (!d || h === null || h === s) return h;if ((h = h[d]) && h.then) {
	        if (!("$$v" in h)) j = h, j.$$v = s, j.then(function (a) {
	          j.$$v = a;
	        });h = h.$$v;
	      }if (!e || h === null || h === s) return h;if ((h = h[e]) && h.then) {
	        if (!("$$v" in h)) j = h, j.$$v = s, j.then(function (a) {
	          j.$$v = a;
	        });h = h.$$v;
	      }return h;
	    };
	  }function Nb(b, a) {
	    if (nb.hasOwnProperty(b)) return nb[b];var c = b.split("."),
	        d = c.length,
	        e;if (a) e = d < 6 ? Pb(c[0], c[1], c[2], c[3], c[4]) : function (a, b) {
	      var e = 0,
	          g;do g = Pb(c[e++], c[e++], c[e++], c[e++], c[e++])(a, b), b = s, a = g; while (e < d);return g;
	    };else {
	      var f = "var l, fn, p;\n";o(c, function (a, b) {
	        f += "if(s === null || s === undefined) return s;\nl=s;\ns=" + (b ? "s" : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n';
	      });
	      f += "return s;";e = Function("s", "k", f);e.toString = function () {
	        return f;
	      };
	    }return nb[b] = e;
	  }function Pc() {
	    var b = {};this.$get = ["$filter", "$sniffer", function (a, c) {
	      return function (d) {
	        switch (typeof d) {case "string":
	            return b.hasOwnProperty(d) ? b[d] : b[d] = Oc(d, !1, a, c.csp);case "function":
	            return d;default:
	            return t;}
	      };
	    }];
	  }function Qc() {
	    this.$get = ["$rootScope", "$exceptionHandler", function (b, a) {
	      return Rc(function (a) {
	        b.$evalAsync(a);
	      }, a);
	    }];
	  }function Rc(b, a) {
	    function c(a) {
	      return a;
	    }function d(a) {
	      return i(a);
	    }var e = function e() {
	      var h = [],
	          j,
	          g;return g = { resolve: function resolve(a) {
	          if (h) {
	            var c = h;h = s;j = f(a);c.length && b(function () {
	              for (var a, b = 0, d = c.length; b < d; b++) a = c[b], j.then(a[0], a[1]);
	            });
	          }
	        }, reject: function reject(a) {
	          g.resolve(i(a));
	        }, promise: { then: function then(b, g) {
	            var f = e(),
	                i = function i(d) {
	              try {
	                f.resolve((b || c)(d));
	              } catch (e) {
	                a(e), f.reject(e);
	              }
	            },
	                n = function n(b) {
	              try {
	                f.resolve((g || d)(b));
	              } catch (c) {
	                a(c), f.reject(c);
	              }
	            };h ? h.push([i, n]) : j.then(i, n);return f.promise;
	          } } };
	    },
	        f = function f(a) {
	      return a && a.then ? a : { then: function then(c) {
	          var d = e();b(function () {
	            d.resolve(c(a));
	          });return d.promise;
	        } };
	    },
	        i = function i(a) {
	      return { then: function then(c, g) {
	          var f = e();b(function () {
	            f.resolve((g || d)(a));
	          });return f.promise;
	        } };
	    };return { defer: e, reject: i, when: function when(h, j, g) {
	        var m = e(),
	            k,
	            l = function l(b) {
	          try {
	            return (j || c)(b);
	          } catch (d) {
	            return a(d), i(d);
	          }
	        },
	            q = function q(b) {
	          try {
	            return (g || d)(b);
	          } catch (c) {
	            return a(c), i(c);
	          }
	        };b(function () {
	          f(h).then(function (a) {
	            k || (k = !0, m.resolve(f(a).then(l, q)));
	          }, function (a) {
	            k || (k = !0, m.resolve(q(a)));
	          });
	        });return m.promise;
	      }, all: function all(a) {
	        var b = e(),
	            c = 0,
	            d = C(a) ? [] : {};o(a, function (a, e) {
	          c++;f(a).then(function (a) {
	            d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
	          }, function (a) {
	            d.hasOwnProperty(e) || b.reject(a);
	          });
	        });c === 0 && b.resolve(d);return b.promise;
	      } };
	  }function Sc() {
	    var b = {};this.when = function (a, c) {
	      b[a] = y({ reloadOnSearch: !0, caseInsensitiveMatch: !1 }, c);if (a) {
	        var d = a[a.length - 1] == "/" ? a.substr(0, a.length - 1) : a + "/";b[d] = { redirectTo: a };
	      }return this;
	    };this.otherwise = function (a) {
	      this.when(null, a);return this;
	    };this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", function (a, c, d, e, f, i, h) {
	      function j(a, b, c) {
	        for (var b = "^" + b.replace(/[-\/\\^$:*+?.()|[\]{}]/g, "\\$&") + "$", d = "", e = [], g = {}, f = /\\([:*])(\w+)/g, h, j = 0; (h = f.exec(b)) !== null;) {
	          d += b.slice(j, h.index);switch (h[1]) {case ":":
	              d += "([^\\/]*)";break;case "*":
	              d += "(.*)";}e.push(h[2]);j = f.lastIndex;
	        }d += b.substr(j);var i = a.match(RegExp(d, c.caseInsensitiveMatch ? "i" : ""));i && o(e, function (a, b) {
	          g[a] = i[b + 1];
	        });return i ? g : null;
	      }function g() {
	        var b = m(),
	            g = q.current;if (b && g && b.$$route === g.$$route && ja(b.pathParams, g.pathParams) && !b.reloadOnSearch && !l) g.params = b.params, W(g.params, d), a.$broadcast("$routeUpdate", g);else if (b || g) l = !1, a.$broadcast("$routeChangeStart", b, g), (q.current = b) && b.redirectTo && (x(b.redirectTo) ? c.path(k(b.redirectTo, b.params)).search(b.params).replace() : c.url(b.redirectTo(b.pathParams, c.path(), c.search())).replace()), e.when(b).then(function () {
	          if (b) {
	            var a = y({}, b.resolve),
	                c;o(a, function (b, c) {
	              a[c] = x(b) ? f.get(b) : f.invoke(b);
	            });if (w(c = b.template)) I(c) && (c = c(b.params));else if (w(c = b.templateUrl)) if ((I(c) && (c = c(b.params)), w(c))) b.loadedTemplateUrl = c, c = i.get(c, { cache: h }).then(function (a) {
	              return a.data;
	            });
	            w(c) && (a.$template = c);return e.all(a);
	          }
	        }).then(function (c) {
	          if (b == q.current) {
	            if (b) b.locals = c, W(b.params, d);a.$broadcast("$routeChangeSuccess", b, g);
	          }
	        }, function (c) {
	          b == q.current && a.$broadcast("$routeChangeError", b, g, c);
	        });
	      }function m() {
	        var a, d;o(b, function (b, e) {
	          if (!d && (a = j(c.path(), e, b))) d = Fa(b, { params: y({}, c.search(), a), pathParams: a }), d.$$route = b;
	        });return d || b[null] && Fa(b[null], { params: {}, pathParams: {} });
	      }function k(a, b) {
	        var c = [];o((a || "").split(":"), function (a, d) {
	          if (d == 0) c.push(a);else {
	            var e = a.match(/(\w+)(.*)/),
	                g = e[1];c.push(b[g]);c.push(e[2] || "");delete b[g];
	          }
	        });return c.join("");
	      }var l = !1,
	          q = { routes: b, reload: function reload() {
	          l = !0;a.$evalAsync(g);
	        } };a.$on("$locationChangeSuccess", g);return q;
	    }];
	  }function Tc() {
	    this.$get = Q({});
	  }function Uc() {
	    var b = 10;this.digestTtl = function (a) {
	      arguments.length && (b = a);return b;
	    };this.$get = ["$injector", "$exceptionHandler", "$parse", function (a, c, d) {
	      function e() {
	        this.$id = Ea();this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
	        this["this"] = this.$root = this;this.$$destroyed = !1;this.$$asyncQueue = [];this.$$listeners = {};this.$$isolateBindings = {};
	      }function f(a) {
	        if (j.$$phase) throw Error(j.$$phase + " already in progress");j.$$phase = a;
	      }function i(a, b) {
	        var c = d(a);va(c, b);return c;
	      }function h() {}e.prototype = { $new: function $new(a) {
	          if (I(a)) throw Error("API-CHANGE: Use $controller to instantiate controllers.");a ? (a = new e(), a.$root = this.$root) : (a = function () {}, a.prototype = this, a = new a(), a.$id = Ea());a["this"] = a;a.$$listeners = {};a.$parent = this;a.$$watchers = a.$$nextSibling = a.$$childHead = a.$$childTail = null;a.$$prevSibling = this.$$childTail;this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;return a;
	        }, $watch: function $watch(a, b, c) {
	          var d = i(a, "watch"),
	              e = this.$$watchers,
	              f = { fn: b, last: h, get: d, exp: a, eq: !!c };if (!I(b)) {
	            var j = i(b || t, "listener");f.fn = function (a, b, c) {
	              j(c);
	            };
	          }if (typeof a == "string" && d.constant) {
	            var r = f.fn;f.fn = function (a, b, c) {
	              r.call(this, a, b, c);sa(e, f);
	            };
	          }if (!e) e = this.$$watchers = [];e.unshift(f);return function () {
	            sa(e, f);
	          };
	        }, $watchCollection: function $watchCollection(a, b) {
	          var c = this,
	              e,
	              f,
	              h = 0,
	              j = d(a),
	              i = [],
	              p = {},
	              o = 0;return this.$watch(function () {
	            f = j(c);var a, b;if (L(f)) if (C(f)) {
	              if (e !== i) e = i, o = e.length = 0, h++;a = f.length;if (o !== a) h++, e.length = o = a;for (b = 0; b < a; b++) e[b] !== f[b] && (h++, e[b] = f[b]);
	            } else {
	              e !== p && (e = p = {}, o = 0, h++);a = 0;for (b in f) f.hasOwnProperty(b) && (a++, e.hasOwnProperty(b) ? e[b] !== f[b] && (h++, e[b] = f[b]) : (o++, e[b] = f[b], h++));if (o > a) for (b in (h++, e)) e.hasOwnProperty(b) && !f.hasOwnProperty(b) && (o--, delete e[b]);
	            } else e !== f && (e = f, h++);return h;
	          }, function () {
	            b(f, e, c);
	          });
	        }, $digest: function $digest() {
	          var a,
	              d,
	              e,
	              i,
	              q = this.$$asyncQueue,
	              n,
	              o,
	              r = b,
	              p,
	              E = [],
	              D,
	              G;f("$digest");do {
	            o = !1;for (p = this; q.length;) try {
	              p.$eval(q.shift());
	            } catch (s) {
	              c(s);
	            }do {
	              if (i = p.$$watchers) for (n = i.length; n--;) try {
	                if ((a = i[n], (d = a.get(p)) !== (e = a.last) && !(a.eq ? ja(d, e) : typeof d == "number" && typeof e == "number" && isNaN(d) && isNaN(e)))) o = !0, a.last = a.eq ? W(d) : d, a.fn(d, e === h ? d : e, p), r < 5 && (D = 4 - r, E[D] || (E[D] = []), G = I(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp, G += "; newVal: " + da(d) + "; oldVal: " + da(e), E[D].push(G));
	              } catch (A) {
	                c(A);
	              }if (!(i = p.$$childHead || p !== this && p.$$nextSibling)) for (; p !== this && !(i = p.$$nextSibling);) p = p.$parent;
	            } while (p = i);if (o && ! r--) throw (j.$$phase = null, Error(b + " $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: " + da(E)));
	          } while (o || q.length);j.$$phase = null;
	        }, $destroy: function $destroy() {
	          if (!(j == this || this.$$destroyed)) {
	            var a = this.$parent;this.$broadcast("$destroy");this.$$destroyed = !0;if (a.$$childHead == this) a.$$childHead = this.$$nextSibling;if (a.$$childTail == this) a.$$childTail = this.$$prevSibling;
	            if (this.$$prevSibling) this.$$prevSibling.$$nextSibling = this.$$nextSibling;if (this.$$nextSibling) this.$$nextSibling.$$prevSibling = this.$$prevSibling;this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
	          }
	        }, $eval: function $eval(a, b) {
	          return d(a)(this, b);
	        }, $evalAsync: function $evalAsync(a) {
	          this.$$asyncQueue.push(a);
	        }, $apply: function $apply(a) {
	          try {
	            return f("$apply"), this.$eval(a);
	          } catch (b) {
	            c(b);
	          } finally {
	            j.$$phase = null;try {
	              j.$digest();
	            } catch (d) {
	              throw (c(d), d);
	            }
	          }
	        }, $on: function $on(a, b) {
	          var c = this.$$listeners[a];
	          c || (this.$$listeners[a] = c = []);c.push(b);return function () {
	            c[Ga(c, b)] = null;
	          };
	        }, $emit: function $emit(a, b) {
	          var d = [],
	              e,
	              f = this,
	              h = !1,
	              i = { name: a, targetScope: f, stopPropagation: function stopPropagation() {
	              h = !0;
	            }, preventDefault: function preventDefault() {
	              i.defaultPrevented = !0;
	            }, defaultPrevented: !1 },
	              j = [i].concat(ka.call(arguments, 1)),
	              p,
	              o;do {
	            e = f.$$listeners[a] || d;i.currentScope = f;p = 0;for (o = e.length; p < o; p++) if (e[p]) try {
	              if ((e[p].apply(null, j), h)) return i;
	            } catch (D) {
	              c(D);
	            } else e.splice(p, 1), p--, o--;f = f.$parent;
	          } while (f);return i;
	        }, $broadcast: function $broadcast(a, b) {
	          var d = this,
	              e = this,
	              f = { name: a, targetScope: this, preventDefault: function preventDefault() {
	              f.defaultPrevented = !0;
	            }, defaultPrevented: !1 },
	              h = [f].concat(ka.call(arguments, 1)),
	              i,
	              j;do {
	            d = e;f.currentScope = d;e = d.$$listeners[a] || [];i = 0;for (j = e.length; i < j; i++) if (e[i]) try {
	              e[i].apply(null, h);
	            } catch (p) {
	              c(p);
	            } else e.splice(i, 1), i--, j--;if (!(e = d.$$childHead || d !== this && d.$$nextSibling)) for (; d !== this && !(e = d.$$nextSibling);) d = d.$parent;
	          } while (d = e);return f;
	        } };var j = new e();return j;
	    }];
	  }function Vc() {
	    this.$get = ["$window", "$document", function (b, a) {
	      var c = {},
	          d = K((/android (\d+)/.exec(J((b.navigator || {}).userAgent)) || [])[1]),
	          e = a[0] || {},
	          f,
	          i = /^(Moz|webkit|O|ms)(?=[A-Z])/,
	          h = e.body && e.body.style,
	          j = !1;if (h) {
	        for (var g in h) if (j = i.exec(g)) {
	          f = j[0];f = f.substr(0, 1).toUpperCase() + f.substr(1);break;
	        }j = !!(f + "Transition" in h);
	      }return { history: !(!b.history || !b.history.pushState || d < 4), hashchange: "onhashchange" in b && (!e.documentMode || e.documentMode > 7), hasEvent: function hasEvent(a) {
	          if (a == "input" && X == 9) return !1;if (u(c[a])) {
	            var b = e.createElement("div");c[a] = "on" + a in b;
	          }return c[a];
	        },
	        csp: e.securityPolicy ? e.securityPolicy.isActive : !1, vendorPrefix: f, supportsTransitions: j };
	    }];
	  }function Wc() {
	    this.$get = Q(M);
	  }function Qb(b) {
	    var a = {},
	        c,
	        d,
	        e;if (!b) return a;o(b.split("\n"), function (b) {
	      e = b.indexOf(":");c = J(S(b.substr(0, e)));d = S(b.substr(e + 1));c && (a[c] ? a[c] += ", " + d : a[c] = d);
	    });return a;
	  }function Xc(b, a) {
	    var c = Yc.exec(b);if (c == null) return !0;var d = { protocol: c[2], host: c[4], port: K(c[6]) || Ba[c[2]] || null, relativeProtocol: c[2] === s || c[2] === "" },
	        c = lb.exec(a),
	        c = { protocol: c[1], host: c[3], port: K(c[5]) || Ba[c[1]] || null };return (d.protocol == c.protocol || d.relativeProtocol) && d.host == c.host && (d.port == c.port || d.relativeProtocol && c.port == Ba[c.protocol]);
	  }function Rb(b) {
	    var a = L(b) ? b : s;return function (c) {
	      a || (a = Qb(b));return c ? a[J(c)] || null : a;
	    };
	  }function Sb(b, a, c) {
	    if (I(c)) return c(b, a);o(c, function (c) {
	      b = c(b, a);
	    });return b;
	  }function Zc() {
	    var b = /^\s*(\[|\{[^\{])/,
	        a = /[\}\]]\s*$/,
	        c = /^\)\]\}',?\n/,
	        d = this.defaults = { transformResponse: [function (d) {
	        x(d) && (d = d.replace(c, ""), b.test(d) && a.test(d) && (d = tb(d, !0)));return d;
	      }], transformRequest: [function (a) {
	        return L(a) && Da.apply(a) !== "[object File]" ? da(a) : a;
	      }], headers: { common: { Accept: "application/json, text/plain, */*" }, post: { "Content-Type": "application/json;charset=utf-8" }, put: { "Content-Type": "application/json;charset=utf-8" } }, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN" },
	        e = this.interceptors = [],
	        f = this.responseInterceptors = [];this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (a, b, c, g, m, k) {
	      function l(a) {
	        function c(a) {
	          var b = y({}, a, { data: Sb(a.data, a.headers, e.transformResponse) });
	          return 200 <= a.status && a.status < 300 ? b : m.reject(b);
	        }var e = { transformRequest: d.transformRequest, transformResponse: d.transformResponse },
	            g = {};y(e, a);e.headers = g;e.method = na(e.method);y(g, d.headers.common, d.headers[J(e.method)], a.headers);(a = Xc(e.url, b.url()) ? b.cookies()[e.xsrfCookieName || d.xsrfCookieName] : s) && (g[e.xsrfHeaderName || d.xsrfHeaderName] = a);var f = [function (a) {
	          var b = Sb(a.data, Rb(g), a.transformRequest);u(a.data) && delete g["Content-Type"];if (u(a.withCredentials) && !u(d.withCredentials)) a.withCredentials = d.withCredentials;return q(a, b, g).then(c, c);
	        }, s],
	            j = m.when(e);for (o(r, function (a) {
	          (a.request || a.requestError) && f.unshift(a.request, a.requestError);(a.response || a.responseError) && f.push(a.response, a.responseError);
	        }); f.length;) var a = f.shift(), i = f.shift(), j = j.then(a, i);j.success = function (a) {
	          j.then(function (b) {
	            a(b.data, b.status, b.headers, e);
	          });return j;
	        };j.error = function (a) {
	          j.then(null, function (b) {
	            a(b.data, b.status, b.headers, e);
	          });return j;
	        };return j;
	      }function q(b, c, e) {
	        function f(a, b, c) {
	          o && (200 <= a && a < 300 ? o.put(s, [a, b, Qb(c)]) : o.remove(s));h(b, a, c);g.$apply();
	        }function h(a, c, d) {
	          c = Math.max(c, 0);(200 <= c && c < 300 ? k.resolve : k.reject)({ data: a, status: c, headers: Rb(d), config: b });
	        }function j() {
	          var a = Ga(l.pendingRequests, b);a !== -1 && l.pendingRequests.splice(a, 1);
	        }var k = m.defer(),
	            q = k.promise,
	            o,
	            r,
	            s = n(b.url, b.params);l.pendingRequests.push(b);q.then(j, j);if ((b.cache || d.cache) && b.cache !== !1 && b.method == "GET") o = L(b.cache) ? b.cache : L(d.cache) ? d.cache : B;if (o) if (r = o.get(s)) if (r.then) return r.then(j, j), r;else C(r) ? h(r[1], r[0], W(r[2])) : h(r, 200, {});else o.put(s, q);r || a(b.method, s, c, f, e, b.timeout, b.withCredentials, b.responseType);return q;
	      }function n(a, b) {
	        if (!b) return a;var c = [];ic(b, function (a, b) {
	          a == null || a == s || (C(a) || (a = [a]), o(a, function (a) {
	            L(a) && (a = da(a));c.push(ua(b) + "=" + ua(a));
	          }));
	        });return a + (a.indexOf("?") == -1 ? "?" : "&") + c.join("&");
	      }var B = c("$http"),
	          r = [];o(e, function (a) {
	        r.unshift(x(a) ? k.get(a) : k.invoke(a));
	      });o(f, function (a, b) {
	        var c = x(a) ? k.get(a) : k.invoke(a);r.splice(b, 0, { response: function response(a) {
	            return c(m.when(a));
	          }, responseError: function responseError(a) {
	            return c(m.reject(a));
	          } });
	      });
	      l.pendingRequests = [];(function (a) {
	        o(arguments, function (a) {
	          l[a] = function (b, c) {
	            return l(y(c || {}, { method: a, url: b }));
	          };
	        });
	      })("get", "delete", "head", "jsonp");(function (a) {
	        o(arguments, function (a) {
	          l[a] = function (b, c, d) {
	            return l(y(d || {}, { method: a, url: b, data: c }));
	          };
	        });
	      })("post", "put");l.defaults = d;return l;
	    }];
	  }function $c() {
	    this.$get = ["$browser", "$window", "$document", function (b, a, c) {
	      return ad(b, bd, b.defer, a.angular.callbacks, c[0], a.location.protocol.replace(":", ""));
	    }];
	  }function ad(b, a, c, d, e, f) {
	    function i(a, b) {
	      var c = e.createElement("script"),
	          d = function d() {
	        e.body.removeChild(c);b && b();
	      };c.type = "text/javascript";c.src = a;X ? c.onreadystatechange = function () {
	        /loaded|complete/.test(c.readyState) && d();
	      } : c.onload = c.onerror = d;e.body.appendChild(c);
	    }return function (e, j, g, m, k, l, q, n) {
	      function B(a, c, d, e) {
	        c = (j.match(lb) || ["", f])[1] == "file" ? d ? 200 : 404 : c;a(c == 1223 ? 204 : c, d, e);b.$$completeOutstandingRequest(t);
	      }b.$$incOutstandingRequestCount();j = j || b.url();if (J(e) == "jsonp") {
	        var r = "_" + (d.counter++).toString(36);d[r] = function (a) {
	          d[r].data = a;
	        };i(j.replace("JSON_CALLBACK", "angular.callbacks." + r), function () {
	          d[r].data ? B(m, 200, d[r].data) : B(m, -2);delete d[r];
	        });
	      } else {
	        var p = new a();p.open(e, j, !0);o(k, function (a, b) {
	          a && p.setRequestHeader(b, a);
	        });var s;p.onreadystatechange = function () {
	          if (p.readyState == 4) {
	            var a = p.getAllResponseHeaders(),
	                b = ["Cache-Control", "Content-Language", "Content-Type", "Expires", "Last-Modified", "Pragma"];a || (a = "", o(b, function (b) {
	              var c = p.getResponseHeader(b);c && (a += b + ": " + c + "\n");
	            }));B(m, s || p.status, p.responseType ? p.response : p.responseText, a);
	          }
	        };if (q) p.withCredentials = !0;if (n) p.responseType = n;p.send(g || "");l > 0 && c(function () {
	          s = -1;p.abort();
	        }, l);
	      }
	    };
	  }function cd() {
	    this.$get = function () {
	      return { id: "en-us", NUMBER_FORMATS: { DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [{ minInt: 1, minFrac: 0, maxFrac: 3, posPre: "", posSuf: "", negPre: "-", negSuf: "", gSize: 3, lgSize: 3 }, { minInt: 1, minFrac: 2, maxFrac: 2, posPre: "¤", posSuf: "", negPre: "(¤", negSuf: ")", gSize: 3, lgSize: 3 }], CURRENCY_SYM: "$" }, DATETIME_FORMATS: { MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
	          SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), AMPMS: ["AM", "PM"], medium: "MMM d, y h:mm:ss a", "short": "M/d/yy h:mm a", fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y", mediumDate: "MMM d, y", shortDate: "M/d/yy", mediumTime: "h:mm:ss a", shortTime: "h:mm a" }, pluralCat: function pluralCat(b) {
	          return b === 1 ? "one" : "other";
	        } };
	    };
	  }function dd() {
	    this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function (b, a, c, d) {
	      function e(e, h, j) {
	        var g = c.defer(),
	            m = g.promise,
	            k = w(j) && !j,
	            h = a.defer(function () {
	          try {
	            g.resolve(e());
	          } catch (a) {
	            g.reject(a), d(a);
	          }k || b.$apply();
	        }, h),
	            j = function j() {
	          delete f[m.$$timeoutId];
	        };m.$$timeoutId = h;f[h] = g;m.then(j, j);return m;
	      }var f = {};e.cancel = function (b) {
	        return b && b.$$timeoutId in f ? (f[b.$$timeoutId].reject("canceled"), a.defer.cancel(b.$$timeoutId)) : !1;
	      };return e;
	    }];
	  }function Tb(b) {
	    function a(a, e) {
	      return b.factory(a + c, e);
	    }var c = "Filter";this.register = a;this.$get = ["$injector", function (a) {
	      return function (b) {
	        return a.get(b + c);
	      };
	    }];a("currency", Ub);a("date", Vb);a("filter", ed);a("json", fd);a("limitTo", gd);a("lowercase", hd);a("number", Wb);a("orderBy", Xb);a("uppercase", id);
	  }function ed() {
	    return function (b, a, c) {
	      if (!C(b)) return b;var d = [];d.check = function (a) {
	        for (var b = 0; b < d.length; b++) if (!d[b](a)) return !1;return !0;
	      };switch (typeof c) {case "function":
	          break;case "boolean":
	          if (c == !0) {
	            c = function (a, b) {
	              return Ia.equals(a, b);
	            };break;
	          }default:
	          c = function (a, b) {
	            b = ("" + b).toLowerCase();return ("" + a).toLowerCase().indexOf(b) > -1;
	          };}var e = function e(a, b) {
	        if (typeof b == "string" && b.charAt(0) === "!") return !e(a, b.substr(1));switch (typeof a) {case "boolean":case "number":case "string":
	            return c(a, b);case "object":
	            switch (typeof b) {case "object":
	                return c(a, b);default:
	                for (var d in a) if (d.charAt(0) !== "$" && e(a[d], b)) return !0;}return !1;case "array":
	            for (d = 0; d < a.length; d++) if (e(a[d], b)) return !0;return !1;default:
	            return !1;}
	      };switch (typeof a) {case "boolean":case "number":case "string":
	          a = { $: a };case "object":
	          for (var f in a) f == "$" ? (function () {
	            if (a[f]) {
	              var b = f;d.push(function (c) {
	                return e(c, a[b]);
	              });
	            }
	          })() : (function () {
	            if (a[f]) {
	              var b = f;d.push(function (c) {
	                return e(kb(c, b), a[b]);
	              });
	            }
	          })();break;case "function":
	          d.push(a);break;default:
	          return b;}for (var i = [], h = 0; h < b.length; h++) {
	        var j = b[h];d.check(j) && i.push(j);
	      }return i;
	    };
	  }function Ub(b) {
	    var a = b.NUMBER_FORMATS;return function (b, d) {
	      if (u(d)) d = a.CURRENCY_SYM;return Yb(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, 2).replace(/\u00A4/g, d);
	    };
	  }function Wb(b) {
	    var a = b.NUMBER_FORMATS;return function (b, d) {
	      return Yb(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d);
	    };
	  }function Yb(b, a, c, d, e) {
	    if (isNaN(b) || !isFinite(b)) return "";var f = b < 0,
	        b = Math.abs(b),
	        i = b + "",
	        h = "",
	        j = [],
	        g = !1;if (i.indexOf("e") !== -1) {
	      var m = i.match(/([\d\.]+)e(-?)(\d+)/);m && m[2] == "-" && m[3] > e + 1 ? i = "0" : (h = i, g = !0);
	    }if (!g) {
	      i = (i.split(Zb)[1] || "").length;u(e) && (e = Math.min(Math.max(a.minFrac, i), a.maxFrac));var i = Math.pow(10, e),
	          b = Math.round(b * i) / i,
	          b = ("" + b).split(Zb),
	          i = b[0],
	          b = b[1] || "",
	          g = 0,
	          m = a.lgSize,
	          k = a.gSize;if (i.length >= m + k) for (var g = i.length - m, l = 0; l < g; l++) (g - l) % k === 0 && l !== 0 && (h += c), h += i.charAt(l);for (l = g; l < i.length; l++) (i.length - l) % m === 0 && l !== 0 && (h += c), h += i.charAt(l);for (; b.length < e;) b += "0";e && e !== "0" && (h += d + b.substr(0, e));
	    }j.push(f ? a.negPre : a.posPre);j.push(h);j.push(f ? a.negSuf : a.posSuf);return j.join("");
	  }function ob(b, a, c) {
	    var d = "";b < 0 && (d = "-", b = -b);for (b = "" + b; b.length < a;) b = "0" + b;c && (b = b.substr(b.length - a));return d + b;
	  }function O(b, a, c, d) {
	    return function (e) {
	      e = e["get" + b]();if (c > 0 || e > -c) e += c;e === 0 && c == -12 && (e = 12);return ob(e, a, d);
	    };
	  }function Sa(b, a) {
	    return function (c, d) {
	      var e = c["get" + b](),
	          f = na(a ? "SHORT" + b : b);return d[f][e];
	    };
	  }function Vb(b) {
	    function a(a) {
	      var b;if (b = a.match(c)) {
	        var a = new Date(0),
	            f = 0,
	            i = 0,
	            h = b[8] ? a.setUTCFullYear : a.setFullYear,
	            j = b[8] ? a.setUTCHours : a.setHours;b[9] && (f = K(b[9] + b[10]), i = K(b[9] + b[11]));h.call(a, K(b[1]), K(b[2]) - 1, K(b[3]));j.call(a, K(b[4] || 0) - f, K(b[5] || 0) - i, K(b[6] || 0), K(b[7] || 0));
	      }return a;
	    }var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function (c, e) {
	      var f = "",
	          i = [],
	          h,
	          j,
	          e = e || "mediumDate",
	          e = b.DATETIME_FORMATS[e] || e;x(c) && (c = jd.test(c) ? K(c) : a(c));Za(c) && (c = new Date(c));if (!qa(c)) return c;for (; e;) (j = kd.exec(e)) ? (i = i.concat(ka.call(j, 1)), e = i.pop()) : (i.push(e), e = null);o(i, function (a) {
	        h = ld[a];f += h ? h(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'");
	      });return f;
	    };
	  }function fd() {
	    return function (b) {
	      return da(b, !0);
	    };
	  }function gd() {
	    return function (b, a) {
	      if (!C(b) && !x(b)) return b;a = K(a);if (x(b)) return a ? a >= 0 ? b.slice(0, a) : b.slice(a, b.length) : "";var c = [],
	          d,
	          e;a > b.length ? a = b.length : a < -b.length && (a = -b.length);a > 0 ? (d = 0, e = a) : (d = b.length + a, e = b.length);for (; d < e; d++) c.push(b[d]);return c;
	    };
	  }function Xb(b) {
	    return function (a, c, d) {
	      function e(a, b) {
	        return Ha(b) ? function (b, c) {
	          return a(c, b);
	        } : a;
	      }if (!C(a)) return a;if (!c) return a;for (var c = C(c) ? c : [c], c = $a(c, function (a) {
	        var c = !1,
	            d = a || pa;if (x(a)) {
	          if (a.charAt(0) == "+" || a.charAt(0) == "-") c = a.charAt(0) == "-", a = a.substring(1);d = b(a);
	        }return e(function (a, b) {
	          var c;c = d(a);var e = d(b),
	              f = typeof c,
	              h = typeof e;f == h ? (f == "string" && (c = c.toLowerCase()), f == "string" && (e = e.toLowerCase()), c = c === e ? 0 : c < e ? -1 : 1) : c = f < h ? -1 : 1;return c;
	        }, c);
	      }), f = [], i = 0; i < a.length; i++) f.push(a[i]);return f.sort(e(function (a, b) {
	        for (var d = 0; d < c.length; d++) {
	          var e = c[d](a, b);if (e !== 0) return e;
	        }return 0;
	      }, d));
	    };
	  }function Y(b) {
	    I(b) && (b = { link: b });b.restrict = b.restrict || "AC";return Q(b);
	  }function $b(b, a) {
	    function c(a, c) {
	      c = c ? "-" + db(c, "-") : "";b.removeClass((a ? Ta : Ua) + c).addClass((a ? Ua : Ta) + c);
	    }var d = this,
	        e = b.parent().controller("form") || Va,
	        f = 0,
	        i = d.$error = {},
	        h = [];d.$name = a.name;d.$dirty = !1;d.$pristine = !0;d.$valid = !0;d.$invalid = !1;e.$addControl(d);b.addClass(oa);c(!0);d.$addControl = function (a) {
	      h.push(a);a.$name && !d.hasOwnProperty(a.$name) && (d[a.$name] = a);
	    };d.$removeControl = function (a) {
	      a.$name && d[a.$name] === a && delete d[a.$name];o(i, function (b, c) {
	        d.$setValidity(c, !0, a);
	      });sa(h, a);
	    };d.$setValidity = function (a, b, h) {
	      var k = i[a];if (b) {
	        if (k && (sa(k, h), !k.length)) {
	          f--;if (!f) c(b), d.$valid = !0, d.$invalid = !1;i[a] = !1;c(!0, a);e.$setValidity(a, !0, d);
	        }
	      } else {
	        f || c(b);if (k) {
	          if (Ga(k, h) != -1) return;
	        } else i[a] = k = [], f++, c(!1, a), e.$setValidity(a, !1, d);k.push(h);d.$valid = !1;d.$invalid = !0;
	      }
	    };d.$setDirty = function () {
	      b.removeClass(oa).addClass(Wa);d.$dirty = !0;d.$pristine = !1;e.$setDirty();
	    };d.$setPristine = function () {
	      b.removeClass(Wa).addClass(oa);d.$dirty = !1;d.$pristine = !0;o(h, function (a) {
	        a.$setPristine();
	      });
	    };
	  }function U(b) {
	    return u(b) || b === "" || b === null || b !== b;
	  }function Xa(b, a, c, d, e, f) {
	    var i = function i() {
	      var e = a.val();if (Ha(c.ngTrim || "T")) e = S(e);d.$viewValue !== e && b.$apply(function () {
	        d.$setViewValue(e);
	      });
	    };if (e.hasEvent("input")) a.bind("input", i);else {
	      var h;a.bind("keydown", function (a) {
	        a = a.keyCode;a === 91 || 15 < a && a < 19 || 37 <= a && a <= 40 || h || (h = f.defer(function () {
	          i();h = null;
	        }));
	      });a.bind("change", i);
	    }d.$render = function () {
	      a.val(U(d.$viewValue) ? "" : d.$viewValue);
	    };var j = c.ngPattern,
	        g = function g(a, b) {
	      return U(b) || a.test(b) ? (d.$setValidity("pattern", !0), b) : (d.$setValidity("pattern", !1), s);
	    };j && (j.match(/^\/(.*)\/$/) ? (j = RegExp(j.substr(1, j.length - 2)), e = function (a) {
	      return g(j, a);
	    }) : e = function (a) {
	      var c = b.$eval(j);if (!c || !c.test) throw Error("Expected " + j + " to be a RegExp but was " + c);return g(c, a);
	    }, d.$formatters.push(e), d.$parsers.push(e));if (c.ngMinlength) {
	      var m = K(c.ngMinlength),
	          e = function e(a) {
	        return !U(a) && a.length < m ? (d.$setValidity("minlength", !1), s) : (d.$setValidity("minlength", !0), a);
	      };d.$parsers.push(e);d.$formatters.push(e);
	    }if (c.ngMaxlength) {
	      var k = K(c.ngMaxlength),
	          e = function e(a) {
	        return !U(a) && a.length > k ? (d.$setValidity("maxlength", !1), s) : (d.$setValidity("maxlength", !0), a);
	      };d.$parsers.push(e);d.$formatters.push(e);
	    }
	  }function pb(b, a) {
	    b = "ngClass" + b;return Y(function (c, d, e) {
	      function f(b) {
	        if (a === !0 || c.$index % 2 === a) j && b !== j && i(j), h(b);j = b;
	      }function i(a) {
	        L(a) && !C(a) && (a = $a(a, function (a, b) {
	          if (a) return b;
	        }));d.removeClass(C(a) ? a.join(" ") : a);
	      }function h(a) {
	        L(a) && !C(a) && (a = $a(a, function (a, b) {
	          if (a) return b;
	        }));a && d.addClass(C(a) ? a.join(" ") : a);
	      }var j = s;c.$watch(e[b], f, !0);e.$observe("class", function () {
	        var a = c.$eval(e[b]);f(a, a);
	      });b !== "ngClass" && c.$watch("$index", function (d, f) {
	        var j = d % 2;j !== f % 2 && (j == a ? h(c.$eval(e[b])) : i(c.$eval(e[b])));
	      });
	    });
	  }var J = function J(b) {
	    return x(b) ? b.toLowerCase() : b;
	  },
	      na = function na(b) {
	    return x(b) ? b.toUpperCase() : b;
	  },
	      X = K((/msie (\d+)/.exec(J(navigator.userAgent)) || [])[1]),
	      v,
	      ca,
	      ka = [].slice,
	      Ya = [].push,
	      Da = Object.prototype.toString,
	      hc = M.angular,
	      Ia = M.angular || (M.angular = {}),
	      xa,
	      jb,
	      Z = ["0", "0", "0"];t.$inject = [];pa.$inject = [];jb = X < 9 ? function (b) {
	    b = b.nodeName ? b : b[0];return b.scopeName && b.scopeName != "HTML" ? na(b.scopeName + ":" + b.nodeName) : b.nodeName;
	  } : function (b) {
	    return b.nodeName ? b.nodeName : b[0].nodeName;
	  };var nc = /[A-Z]/g,
	      md = { full: "1.1.4", major: 1, minor: 1, dot: 4, codeName: "quantum-manipulation" },
	      La = P.cache = {},
	      Ka = P.expando = "ng-" + new Date().getTime(),
	      rc = 1,
	      ac = M.document.addEventListener ? function (b, a, c) {
	    b.addEventListener(a, c, !1);
	  } : function (b, a, c) {
	    b.attachEvent("on" + a, c);
	  },
	      ib = M.document.removeEventListener ? function (b, a, c) {
	    b.removeEventListener(a, c, !1);
	  } : function (b, a, c) {
	    b.detachEvent("on" + a, c);
	  },
	      pc = /([\:\-\_]+(.))/g,
	      qc = /^moz([A-Z])/,
	      za = P.prototype = { ready: function ready(b) {
	      function a() {
	        c || (c = !0, b());
	      }var c = !1;V.readyState === "complete" ? setTimeout(a) : (this.bind("DOMContentLoaded", a), P(M).bind("load", a));
	    }, toString: function toString() {
	      var b = [];o(this, function (a) {
	        b.push("" + a);
	      });return "[" + b.join(", ") + "]";
	    }, eq: function eq(b) {
	      return b >= 0 ? v(this[b]) : v(this[this.length + b]);
	    }, length: 0, push: Ya, sort: [].sort, splice: [].splice },
	      Oa = {};o("multiple,selected,checked,disabled,readOnly,required,open".split(","), function (b) {
	    Oa[J(b)] = b;
	  });var Eb = {};o("input,select,option,textarea,button,form,details".split(","), function (b) {
	    Eb[na(b)] = !0;
	  });o({ data: zb, inheritedData: Na, scope: function scope(b) {
	      return Na(b, "$scope");
	    }, controller: Cb, injector: function injector(b) {
	      return Na(b, "$injector");
	    },
	    removeAttr: function removeAttr(b, a) {
	      b.removeAttribute(a);
	    }, hasClass: Ma, css: function css(b, a, c) {
	      a = Ja(a);if (w(c)) b.style[a] = c;else {
	        var d;X <= 8 && (d = b.currentStyle && b.currentStyle[a], d === "" && (d = "auto"));d = d || b.style[a];X <= 8 && (d = d === "" ? s : d);return d;
	      }
	    }, attr: function attr(b, a, c) {
	      var d = J(a);if (Oa[d]) if (w(c)) c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));else return b[a] || (b.attributes.getNamedItem(a) || t).specified ? d : s;else if (w(c)) b.setAttribute(a, c);else if (b.getAttribute) return b = b.getAttribute(a, 2), b === null ? s : b;
	    }, prop: function prop(b, a, c) {
	      if (w(c)) b[a] = c;else return b[a];
	    }, text: y(X < 9 ? function (b, a) {
	      if (b.nodeType == 1) {
	        if (u(a)) return b.innerText;b.innerText = a;
	      } else {
	        if (u(a)) return b.nodeValue;b.nodeValue = a;
	      }
	    } : function (b, a) {
	      if (u(a)) return b.textContent;b.textContent = a;
	    }, { $dv: "" }), val: function val(b, a) {
	      if (u(a)) return b.value;b.value = a;
	    }, html: function html(b, a) {
	      if (u(a)) return b.innerHTML;for (var c = 0, d = b.childNodes; c < d.length; c++) wa(d[c]);b.innerHTML = a;
	    } }, function (b, a) {
	    P.prototype[a] = function (a, d) {
	      var e, f;if ((b.length == 2 && b !== Ma && b !== Cb ? a : d) === s) if (L(a)) {
	        for (e = 0; e < this.length; e++) if (b === zb) b(this[e], a);else for (f in a) b(this[e], f, a[f]);return this;
	      } else {
	        if (this.length) return b(this[0], a, d);
	      } else {
	        for (e = 0; e < this.length; e++) b(this[e], a, d);return this;
	      }return b.$dv;
	    };
	  });o({ removeData: xb, dealoc: wa, bind: function a(c, d, e) {
	      var f = $(c, "events"),
	          i = $(c, "handle");f || $(c, "events", f = {});i || $(c, "handle", i = sc(c, f));o(d.split(" "), function (d) {
	        var j = f[d];if (!j) {
	          if (d == "mouseenter" || d == "mouseleave") {
	            var g = 0;f.mouseenter = [];f.mouseleave = [];a(c, "mouseover", function (a) {
	              g++;g == 1 && i(a, "mouseenter");
	            });a(c, "mouseout", function (a) {
	              g--;g == 0 && i(a, "mouseleave");
	            });
	          } else ac(c, d, i), f[d] = [];j = f[d];
	        }j.push(e);
	      });
	    }, unbind: yb, replaceWith: function replaceWith(a, c) {
	      var d,
	          e = a.parentNode;wa(a);o(new P(c), function (c) {
	        d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);d = c;
	      });
	    }, children: function children(a) {
	      var c = [];o(a.childNodes, function (a) {
	        a.nodeType === 1 && c.push(a);
	      });return c;
	    }, contents: function contents(a) {
	      return a.childNodes || [];
	    }, append: function append(a, c) {
	      o(new P(c), function (c) {
	        (a.nodeType === 1 || a.nodeType === 11) && a.appendChild(c);
	      });
	    }, prepend: function prepend(a, c) {
	      if (a.nodeType === 1) {
	        var d = a.firstChild;o(new P(c), function (c) {
	          d ? a.insertBefore(c, d) : (a.appendChild(c), d = c);
	        });
	      }
	    }, wrap: function wrap(a, c) {
	      var c = v(c)[0],
	          d = a.parentNode;d && d.replaceChild(c, a);c.appendChild(a);
	    }, remove: function remove(a) {
	      wa(a);var c = a.parentNode;c && c.removeChild(a);
	    }, after: function after(a, c) {
	      var d = a,
	          e = a.parentNode;o(new P(c), function (a) {
	        e.insertBefore(a, d.nextSibling);d = a;
	      });
	    }, addClass: Bb, removeClass: Ab, toggleClass: function toggleClass(a, c, d) {
	      u(d) && (d = !Ma(a, c));(d ? Bb : Ab)(a, c);
	    }, parent: function parent(a) {
	      return (a = a.parentNode) && a.nodeType !== 11 ? a : null;
	    }, next: function next(a) {
	      if (a.nextElementSibling) return a.nextElementSibling;for (a = a.nextSibling; a != null && a.nodeType !== 1;) a = a.nextSibling;return a;
	    }, find: function find(a, c) {
	      return a.getElementsByTagName(c);
	    }, clone: hb, triggerHandler: function triggerHandler(a, c) {
	      var d = ($(a, "events") || {})[c];o(d, function (c) {
	        c.call(a, null);
	      });
	    } }, function (a, c) {
	    P.prototype[c] = function (c, e) {
	      for (var f, i = 0; i < this.length; i++) f == s ? (f = a(this[i], c, e), f !== s && (f = v(f))) : gb(f, a(this[i], c, e));
	      return f == s ? this : f;
	    };
	  });Pa.prototype = { put: function put(a, c) {
	      this[la(a)] = c;
	    }, get: function get(a) {
	      return this[la(a)];
	    }, remove: function remove(a) {
	      var c = this[a = la(a)];delete this[a];return c;
	    } };var uc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
	      vc = /,/,
	      wc = /^\s*(_?)(\S+?)\1\s*$/,
	      tc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;Gb.$inject = ["$provide"];var nd = function nd() {
	    this.$get = ["$animation", "$window", "$sniffer", function (a, c, d) {
	      function e(a) {
	        a.css("display", "");
	      }function f(a) {
	        a.css("display", "none");
	      }function i(a, c, d) {
	        d ? d.after(a) : c.append(a);
	      }
	      function h(a) {
	        a.remove();
	      }function j(a, c, d) {
	        i(a, c, d);
	      }return function (g, m) {
	        function k(e, f, h) {
	          var i = l && g.$eval(l),
	              e = l ? L(i) ? i[e] : i + "-" + e : "",
	              j = (i = a(e)) && i.setup,
	              k = i && i.start;if (e) {
	            var m = e + "-setup",
	                q = e + "-start";return function (a, e, g) {
	              function i() {
	                h(a, e, g);a.removeClass(m);a.removeClass(q);
	              }if (!d.supportsTransitions && !j && !k) f(a, e, g), h(a, e, g);else {
	                a.addClass(m);f(a, e, g);if (a.length == 0) return i();var l = (j || t)(a);c.setTimeout(function () {
	                  a.addClass(q);if (k) k(a, i, l);else if (I(c.getComputedStyle)) {
	                    var e = d.vendorPrefix + "Transition",
	                        f = 0;o(a, function (a) {
	                      a = c.getComputedStyle(a) || {};f = Math.max(parseFloat(a.transitionDuration) || parseFloat(a[e + "Duration"]) || 0, f);
	                    });c.setTimeout(i, f * 1E3);
	                  } else i();
	                }, 1);
	              }
	            };
	          } else return function (a, c, d) {
	            f(a, c, d);h(a, c, d);
	          };
	        }var l = m.ngAnimate,
	            q = {};q.enter = k("enter", i, t);q.leave = k("leave", t, h);q.move = k("move", j, t);q.show = k("show", e, t);q.hide = k("hide", t, f);return q;
	      };
	    }];
	  },
	      Ib = "Non-assignable model expression: ";Hb.$inject = ["$provide"];var Cc = /^(x[\:\-_]|data[\:\-_])/i,
	      lb = /^([^:]+):\/\/(\w+:{0,1}\w*@)?(\{?[\w\.-]*\}?)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,
	      bc = /^([^\?#]*)?(\?([^#]*))?(#(.*))?$/,
	      Jc = bc,
	      Ba = { http: 80, https: 443, ftp: 21 };mb.prototype = { $$replace: !1, absUrl: Ra("$$absUrl"), url: function url(a, c) {
	      if (u(a)) return this.$$url;var d = bc.exec(a);d[1] && this.path(decodeURIComponent(d[1]));if (d[2] || d[1]) this.search(d[3] || "");this.hash(d[5] || "", c);return this;
	    }, protocol: Ra("$$protocol"), host: Ra("$$host"), port: Ra("$$port"), path: Mb("$$path", function (a) {
	      return a.charAt(0) == "/" ? a : "/" + a;
	    }), search: function search(a, c) {
	      if (u(a)) return this.$$search;w(c) ? c === null ? delete this.$$search[a] : this.$$search[a] = c : this.$$search = x(a) ? bb(a) : a;this.$$compose();return this;
	    }, hash: Mb("$$hash", pa), replace: function replace() {
	      this.$$replace = !0;return this;
	    } };Qa.prototype = Fa(mb.prototype);Lb.prototype = Fa(Qa.prototype);var Ca = { "null": function _null() {
	      return null;
	    }, "true": function _true() {
	      return !0;
	    }, "false": function _false() {
	      return !1;
	    }, undefined: t, "+": function _(a, c, d, e) {
	      d = d(a, c);e = e(a, c);return w(d) ? w(e) ? d + e : d : w(e) ? e : s;
	    }, "-": function _(a, c, d, e) {
	      d = d(a, c);e = e(a, c);return (w(d) ? d : 0) - (w(e) ? e : 0);
	    }, "*": function _(a, c, d, e) {
	      return d(a, c) * e(a, c);
	    },
	    "/": function _(a, c, d, e) {
	      return d(a, c) / e(a, c);
	    }, "%": function _(a, c, d, e) {
	      return d(a, c) % e(a, c);
	    }, "^": function _(a, c, d, e) {
	      return d(a, c) ^ e(a, c);
	    }, "=": t, "===": function _(a, c, d, e) {
	      return d(a, c) === e(a, c);
	    }, "!==": function _(a, c, d, e) {
	      return d(a, c) !== e(a, c);
	    }, "==": function _(a, c, d, e) {
	      return d(a, c) == e(a, c);
	    }, "!=": function _(a, c, d, e) {
	      return d(a, c) != e(a, c);
	    }, "<": function _(a, c, d, e) {
	      return d(a, c) < e(a, c);
	    }, ">": function _(a, c, d, e) {
	      return d(a, c) > e(a, c);
	    }, "<=": function _(a, c, d, e) {
	      return d(a, c) <= e(a, c);
	    }, ">=": function _(a, c, d, e) {
	      return d(a, c) >= e(a, c);
	    }, "&&": function _(a, c, d, e) {
	      return d(a, c) && e(a, c);
	    }, "||": function _(a, c, d, e) {
	      return d(a, c) || e(a, c);
	    }, "&": function _(a, c, d, e) {
	      return d(a, c) & e(a, c);
	    }, "|": function _(a, c, d, e) {
	      return e(a, c)(a, c, d(a, c));
	    }, "!": function _(a, c, d) {
	      return !d(a, c);
	    } },
	      Nc = { n: "\n", f: "\f", r: "\r", t: "\t", v: "\u000b", "'": "'", '"': '"' },
	      nb = {},
	      Yc = /^(([^:]+):)?\/\/(\w+:{0,1}\w*@)?([\w\.-]*)?(:([0-9]+))?(.*)$/,
	      bd = M.XMLHttpRequest || function () {
	    try {
	      return new ActiveXObject("Msxml2.XMLHTTP.6.0");
	    } catch (a) {}try {
	      return new ActiveXObject("Msxml2.XMLHTTP.3.0");
	    } catch (c) {}try {
	      return new ActiveXObject("Msxml2.XMLHTTP");
	    } catch (d) {}throw Error("This browser does not support XMLHttpRequest.");
	  };Tb.$inject = ["$provide"];Ub.$inject = ["$locale"];Wb.$inject = ["$locale"];var Zb = ".",
	      ld = { yyyy: O("FullYear", 4), yy: O("FullYear", 2, 0, !0), y: O("FullYear", 1), MMMM: Sa("Month"), MMM: Sa("Month", !0), MM: O("Month", 2, 1), M: O("Month", 1, 1), dd: O("Date", 2), d: O("Date", 1), HH: O("Hours", 2), H: O("Hours", 1), hh: O("Hours", 2, -12), h: O("Hours", 1, -12), mm: O("Minutes", 2), m: O("Minutes", 1), ss: O("Seconds", 2), s: O("Seconds", 1), sss: O("Milliseconds", 3), EEEE: Sa("Day"), EEE: Sa("Day", !0), a: function a(_a, c) {
	      return _a.getHours() < 12 ? c.AMPMS[0] : c.AMPMS[1];
	    },
	    Z: function Z(a) {
	      var a = -1 * a.getTimezoneOffset(),
	          c = a >= 0 ? "+" : "";c += ob(Math[a > 0 ? "floor" : "ceil"](a / 60), 2) + ob(Math.abs(a % 60), 2);return c;
	    } },
	      kd = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
	      jd = /^\d+$/;Vb.$inject = ["$locale"];var hd = Q(J),
	      id = Q(na);Xb.$inject = ["$parse"];var od = Q({ restrict: "E", compile: function compile(a, c) {
	      X <= 8 && (!c.href && !c.name && c.$set("href", ""), a.append(V.createComment("IE fix")));return function (a, c) {
	        c.bind("click", function (a) {
	          c.attr("href") || a.preventDefault();
	        });
	      };
	    } }),
	      qb = {};o(Oa, function (a, c) {
	    var d = aa("ng-" + c);qb[d] = function () {
	      return { priority: 100, compile: function compile() {
	          return function (a, f, i) {
	            a.$watch(i[d], function (a) {
	              i.$set(c, !!a);
	            });
	          };
	        } };
	    };
	  });o(["src", "href"], function (a) {
	    var c = aa("ng-" + a);qb[c] = function () {
	      return { priority: 99, link: function link(d, e, f) {
	          f.$observe(c, function (c) {
	            c && (f.$set(a, c), X && e.prop(a, f[a]));
	          });
	        } };
	    };
	  });var Va = { $addControl: t, $removeControl: t, $setValidity: t, $setDirty: t, $setPristine: t };$b.$inject = ["$element", "$attrs", "$scope"];var Ya = function Ya(a) {
	    return ["$timeout", function (c) {
	      var d = { name: "form", restrict: "E", controller: $b, compile: function compile() {
	          return { pre: function pre(a, d, i, h) {
	              if (!i.action) {
	                var j = function j(a) {
	                  a.preventDefault ? a.preventDefault() : a.returnValue = !1;
	                };ac(d[0], "submit", j);d.bind("$destroy", function () {
	                  c(function () {
	                    ib(d[0], "submit", j);
	                  }, 0, !1);
	                });
	              }var g = d.parent().controller("form"),
	                  m = i.name || i.ngForm;m && (a[m] = h);g && d.bind("$destroy", function () {
	                g.$removeControl(h);m && (a[m] = s);y(h, Va);
	              });
	            } };
	        } };return a ? y(W(d), { restrict: "EAC" }) : d;
	    }];
	  },
	      pd = Ya(),
	      qd = Ya(!0),
	      rd = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
	      sd = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
	      td = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
	      cc = { text: Xa, number: function number(a, c, d, e, f, i) {
	      Xa(a, c, d, e, f, i);e.$parsers.push(function (a) {
	        var c = U(a);return c || td.test(a) ? (e.$setValidity("number", !0), a === "" ? null : c ? a : parseFloat(a)) : (e.$setValidity("number", !1), s);
	      });e.$formatters.push(function (a) {
	        return U(a) ? "" : "" + a;
	      });if (d.min) {
	        var h = parseFloat(d.min),
	            a = function a(_a2) {
	          return !U(_a2) && _a2 < h ? (e.$setValidity("min", !1), s) : (e.$setValidity("min", !0), _a2);
	        };e.$parsers.push(a);
	        e.$formatters.push(a);
	      }if (d.max) {
	        var j = parseFloat(d.max),
	            d = function d(a) {
	          return !U(a) && a > j ? (e.$setValidity("max", !1), s) : (e.$setValidity("max", !0), a);
	        };e.$parsers.push(d);e.$formatters.push(d);
	      }e.$formatters.push(function (a) {
	        return U(a) || Za(a) ? (e.$setValidity("number", !0), a) : (e.$setValidity("number", !1), s);
	      });
	    }, url: function url(a, c, d, e, f, i) {
	      Xa(a, c, d, e, f, i);a = function (a) {
	        return U(a) || rd.test(a) ? (e.$setValidity("url", !0), a) : (e.$setValidity("url", !1), s);
	      };e.$formatters.push(a);e.$parsers.push(a);
	    }, email: function email(a, c, d, e, f, i) {
	      Xa(a, c, d, e, f, i);a = function (a) {
	        return U(a) || sd.test(a) ? (e.$setValidity("email", !0), a) : (e.$setValidity("email", !1), s);
	      };e.$formatters.push(a);e.$parsers.push(a);
	    }, radio: function radio(a, c, d, e) {
	      u(d.name) && c.attr("name", Ea());c.bind("click", function () {
	        c[0].checked && a.$apply(function () {
	          e.$setViewValue(d.value);
	        });
	      });e.$render = function () {
	        c[0].checked = d.value == e.$viewValue;
	      };d.$observe("value", e.$render);
	    }, checkbox: function checkbox(a, c, d, e) {
	      var f = d.ngTrueValue,
	          i = d.ngFalseValue;x(f) || (f = !0);x(i) || (i = !1);c.bind("click", function () {
	        a.$apply(function () {
	          e.$setViewValue(c[0].checked);
	        });
	      });e.$render = function () {
	        c[0].checked = e.$viewValue;
	      };e.$formatters.push(function (a) {
	        return a === f;
	      });e.$parsers.push(function (a) {
	        return a ? f : i;
	      });
	    }, hidden: t, button: t, submit: t, reset: t },
	      dc = ["$browser", "$sniffer", function (a, c) {
	    return { restrict: "E", require: "?ngModel", link: function link(d, e, f, i) {
	        i && (cc[J(f.type)] || cc.text)(d, e, f, i, c, a);
	      } };
	  }],
	      Ua = "ng-valid",
	      Ta = "ng-invalid",
	      oa = "ng-pristine",
	      Wa = "ng-dirty",
	      ud = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", function (a, c, d, e, f) {
	    function i(a, c) {
	      c = c ? "-" + db(c, "-") : "";e.removeClass((a ? Ta : Ua) + c).addClass((a ? Ua : Ta) + c);
	    }this.$modelValue = this.$viewValue = Number.NaN;this.$parsers = [];this.$formatters = [];this.$viewChangeListeners = [];this.$pristine = !0;this.$dirty = !1;this.$valid = !0;this.$invalid = !1;this.$name = d.name;var h = f(d.ngModel),
	        j = h.assign;if (!j) throw Error(Ib + d.ngModel + " (" + ta(e) + ")");this.$render = t;var g = e.inheritedData("$formController") || Va,
	        m = 0,
	        k = this.$error = {};e.addClass(oa);i(!0);this.$setValidity = function (a, c) {
	      if (k[a] !== !c) {
	        if (c) {
	          if ((k[a] && m--, !m)) i(!0), this.$valid = !0, this.$invalid = !1;
	        } else i(!1), this.$invalid = !0, this.$valid = !1, m++;k[a] = !c;i(c, a);g.$setValidity(a, c, this);
	      }
	    };this.$setPristine = function () {
	      this.$dirty = !1;this.$pristine = !0;e.removeClass(Wa).addClass(oa);
	    };this.$setViewValue = function (d) {
	      this.$viewValue = d;if (this.$pristine) this.$dirty = !0, this.$pristine = !1, e.removeClass(oa).addClass(Wa), g.$setDirty();o(this.$parsers, function (a) {
	        d = a(d);
	      });if (this.$modelValue !== d) this.$modelValue = d, j(a, d), o(this.$viewChangeListeners, function (a) {
	        try {
	          a();
	        } catch (d) {
	          c(d);
	        }
	      });
	    };var l = this;a.$watch(function () {
	      var c = h(a);if (l.$modelValue !== c) {
	        var d = l.$formatters,
	            e = d.length;for (l.$modelValue = c; e--;) c = d[e](c);if (l.$viewValue !== c) l.$viewValue = c, l.$render();
	      }
	    });
	  }],
	      vd = function vd() {
	    return { require: ["ngModel", "^?form"], controller: ud, link: function link(a, c, d, e) {
	        var f = e[0],
	            i = e[1] || Va;i.$addControl(f);c.bind("$destroy", function () {
	          i.$removeControl(f);
	        });
	      } };
	  },
	      wd = Q({ require: "ngModel", link: function link(a, c, d, e) {
	      e.$viewChangeListeners.push(function () {
	        a.$eval(d.ngChange);
	      });
	    } }),
	      ec = function ec() {
	    return { require: "?ngModel", link: function link(a, c, d, e) {
	        if (e) {
	          d.required = !0;var f = function f(a) {
	            if (d.required && (U(a) || a === !1)) e.$setValidity("required", !1);else return e.$setValidity("required", !0), a;
	          };e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required", function () {
	            f(e.$viewValue);
	          });
	        }
	      } };
	  },
	      xd = function xd() {
	    return { require: "ngModel", link: function link(a, c, d, e) {
	        var f = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ",";e.$parsers.push(function (a) {
	          var c = [];a && o(a.split(f), function (a) {
	            a && c.push(S(a));
	          });
	          return c;
	        });e.$formatters.push(function (a) {
	          return C(a) ? a.join(", ") : s;
	        });
	      } };
	  },
	      yd = /^(true|false|\d+)$/,
	      zd = function zd() {
	    return { priority: 100, compile: function compile(a, c) {
	        return yd.test(c.ngValue) ? function (a, c, f) {
	          f.$set("value", a.$eval(f.ngValue));
	        } : function (a, c, f) {
	          a.$watch(f.ngValue, function (a) {
	            f.$set("value", a, !1);
	          });
	        };
	      } };
	  },
	      Ad = Y(function (a, c, d) {
	    c.addClass("ng-binding").data("$binding", d.ngBind);a.$watch(d.ngBind, function (a) {
	      c.text(a == s ? "" : a);
	    });
	  }),
	      Bd = ["$interpolate", function (a) {
	    return function (c, d, e) {
	      c = a(d.attr(e.$attr.ngBindTemplate));
	      d.addClass("ng-binding").data("$binding", c);e.$observe("ngBindTemplate", function (a) {
	        d.text(a);
	      });
	    };
	  }],
	      Cd = [function () {
	    return function (a, c, d) {
	      c.addClass("ng-binding").data("$binding", d.ngBindHtmlUnsafe);a.$watch(d.ngBindHtmlUnsafe, function (a) {
	        c.html(a || "");
	      });
	    };
	  }],
	      Dd = pb("", !0),
	      Ed = pb("Odd", 0),
	      Fd = pb("Even", 1),
	      Gd = Y({ compile: function compile(a, c) {
	      c.$set("ngCloak", s);a.removeClass("ng-cloak");
	    } }),
	      Hd = [function () {
	    return { scope: !0, controller: "@" };
	  }],
	      Id = ["$sniffer", function (a) {
	    return { priority: 1E3, compile: function compile() {
	        a.csp = !0;
	      } };
	  }],
	      fc = {};o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress".split(" "), function (a) {
	    var c = aa("ng-" + a);fc[c] = ["$parse", function (d) {
	      return function (e, f, i) {
	        var h = d(i[c]);f.bind(J(a), function (a) {
	          e.$apply(function () {
	            h(e, { $event: a });
	          });
	        });
	      };
	    }];
	  });var Jd = Y(function (a, c, d) {
	    c.bind("submit", function () {
	      a.$apply(d.ngSubmit);
	    });
	  }),
	      Kd = ["$http", "$templateCache", "$anchorScroll", "$compile", "$animator", function (a, c, d, e, f) {
	    return { restrict: "ECA", terminal: !0, compile: function compile(i, h) {
	        var j = h.ngInclude || h.src,
	            g = h.onload || "",
	            m = h.autoscroll;return function (h, i, o) {
	          var n = f(h, o),
	              s = 0,
	              r,
	              p = function p() {
	            r && (r.$destroy(), r = null);n.leave(i.contents(), i);
	          };h.$watch(j, function (f) {
	            var j = ++s;f ? a.get(f, { cache: c }).success(function (a) {
	              j === s && (r && r.$destroy(), r = h.$new(), n.leave(i.contents(), i), a = v("<div/>").html(a).contents(), n.enter(a, i), e(a)(r), w(m) && (!m || h.$eval(m)) && d(), r.$emit("$includeContentLoaded"), h.$eval(g));
	            }).error(function () {
	              j === s && p();
	            }) : p();
	          });
	        };
	      } };
	  }],
	      Ld = Y({ compile: function compile() {
	      return { pre: function pre(a, c, d) {
	          a.$eval(d.ngInit);
	        } };
	    } }),
	      Md = Y({ terminal: !0, priority: 1E3 }),
	      Nd = ["$locale", "$interpolate", function (a, c) {
	    var d = /{}/g;return { restrict: "EA", link: function link(e, f, i) {
	        var h = i.count,
	            j = f.attr(i.$attr.when),
	            g = i.offset || 0,
	            m = e.$eval(j),
	            k = {},
	            l = c.startSymbol(),
	            q = c.endSymbol();o(m, function (a, e) {
	          k[e] = c(a.replace(d, l + h + "-" + g + q));
	        });e.$watch(function () {
	          var c = parseFloat(e.$eval(h));return isNaN(c) ? "" : (m[c] || (c = a.pluralCat(c - g)), k[c](e, f, !0));
	        }, function (a) {
	          f.text(a);
	        });
	      } };
	  }],
	      Od = ["$parse", "$animator", function (a, c) {
	    return { transclude: "element",
	      priority: 1E3, terminal: !0, compile: function compile(d, e, f) {
	        return function (d, e, j) {
	          var g = c(d, j),
	              m = j.ngRepeat,
	              k = m.match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/),
	              l,
	              q,
	              n,
	              s,
	              r,
	              p = { $id: la };if (!k) throw Error("Expected ngRepeat in form of '_item_ in _collection_[ track by _id_]' but got '" + m + "'.");j = k[1];n = k[2];(k = k[4]) ? (l = a(k), q = function (a, c, e) {
	            r && (p[r] = a);p[s] = c;p.$index = e;return l(d, p);
	          }) : q = function (a, c) {
	            return la(c);
	          };k = j.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if (!k) throw Error("'item' in 'item in collection' should be identifier or (key, value) but got '" + j + "'.");s = k[3] || k[1];r = k[2];var y = {};d.$watchCollection(n, function (a) {
	            var c,
	                j,
	                k = e,
	                l,
	                n = {},
	                p,
	                t,
	                v,
	                z,
	                w,
	                u,
	                x = [];if (C(a)) w = a;else {
	              w = [];for (v in a) a.hasOwnProperty(v) && v.charAt(0) != "$" && w.push(v);w.sort();
	            }p = w.length;j = x.length = w.length;for (c = 0; c < j; c++) if ((v = a === w ? c : w[c], z = a[v], l = q(v, z, c), u = y[l])) delete y[l], n[l] = u, x[c] = u;else if (n.hasOwnProperty(l)) throw (o(x, function (a) {
	              a && a.element && (y[a.id] = a);
	            }), Error("Duplicates in a repeater are not allowed. Repeater: " + m));else x[c] = { id: l };for (v in y) if (y.hasOwnProperty(v)) u = y[v], g.leave(u.element), u.element[0].$$NG_REMOVED = !0, u.scope.$destroy();c = 0;for (j = w.length; c < j; c++) {
	              v = a === w ? c : w[c];z = a[v];u = x[c];if (u.element) {
	                t = u.scope;l = k[0];do l = l.nextSibling; while (l && l.$$NG_REMOVED);u.element[0] != l && g.move(u.element, null, k);k = u.element;
	              } else t = d.$new();t[s] = z;r && (t[r] = v);t.$index = c;t.$first = c === 0;t.$last = c === p - 1;t.$middle = !(t.$first || t.$last);u.element || f(t, function (a) {
	                g.enter(a, null, k);k = a;u.scope = t;u.element = a;n[u.id] = u;
	              });
	            }y = n;
	          });
	        };
	      } };
	  }],
	      Pd = ["$animator", function (a) {
	    return function (c, d, e) {
	      var f = a(c, e);c.$watch(e.ngShow, function (a) {
	        f[Ha(a) ? "show" : "hide"](d);
	      });
	    };
	  }],
	      Qd = ["$animator", function (a) {
	    return function (c, d, e) {
	      var f = a(c, e);c.$watch(e.ngHide, function (a) {
	        f[Ha(a) ? "hide" : "show"](d);
	      });
	    };
	  }],
	      Rd = Y(function (a, c, d) {
	    a.$watch(d.ngStyle, function (a, d) {
	      d && a !== d && o(d, function (a, d) {
	        c.css(d, "");
	      });a && c.css(a);
	    }, !0);
	  }),
	      Sd = ["$animator", function (a) {
	    return { restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
	        this.cases = {};
	      }], link: function link(c, d, e, f) {
	        var i = a(c, e),
	            h,
	            j,
	            g = [];c.$watch(e.ngSwitch || e.on, function (a) {
	          for (var d = 0, l = g.length; d < l; d++) g[d].$destroy(), i.leave(j[d]);j = [];g = [];if (h = f.cases["!" + a] || f.cases["?"]) c.$eval(e.change), o(h, function (a) {
	            var d = c.$new();g.push(d);a.transclude(d, function (c) {
	              var d = a.element;j.push(c);i.enter(c, d.parent(), d);
	            });
	          });
	        });
	      } };
	  }],
	      Td = Y({ transclude: "element", priority: 500, require: "^ngSwitch", compile: function compile(a, c, d) {
	      return function (a, f, i, h) {
	        h.cases["!" + c.ngSwitchWhen] = h.cases["!" + c.ngSwitchWhen] || [];h.cases["!" + c.ngSwitchWhen].push({ transclude: d, element: f });
	      };
	    } }),
	      Ud = Y({ transclude: "element", priority: 500, require: "^ngSwitch", compile: function compile(a, c, d) {
	      return function (a, c, i, h) {
	        h.cases["?"] = h.cases["?"] || [];h.cases["?"].push({ transclude: d, element: c });
	      };
	    } }),
	      Vd = Y({ controller: ["$transclude", "$element", function (a, c) {
	      a(function (a) {
	        c.append(a);
	      });
	    }] }),
	      Wd = ["$http", "$templateCache", "$route", "$anchorScroll", "$compile", "$controller", "$animator", function (a, c, d, e, f, i, h) {
	    return { restrict: "ECA", terminal: !0, link: function link(a, c, m) {
	        function k() {
	          var h = d.current && d.current.locals,
	              k = h && h.$template;
	          if (k) {
	            n.leave(c.contents(), c);l && (l.$destroy(), l = null);n.enter(v("<div></div>").html(k).contents(), c);var k = f(c.contents()),
	                m = d.current;l = m.scope = a.$new();if (m.controller) h.$scope = l, h = i(m.controller, h), c.children().data("$ngControllerController", h);k(l);l.$emit("$viewContentLoaded");l.$eval(o);e();
	          } else n.leave(c.contents(), c), l && (l.$destroy(), l = null);
	        }var l,
	            o = m.onload || "",
	            n = h(a, m);a.$on("$routeChangeSuccess", k);k();
	      } };
	  }],
	      Xd = ["$templateCache", function (a) {
	    return { restrict: "E", terminal: !0, compile: function compile(c, d) {
	        d.type == "text/ng-template" && a.put(d.id, c[0].text);
	      } };
	  }],
	      Yd = Q({ terminal: !0 }),
	      Zd = ["$compile", "$parse", function (a, c) {
	    var d = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/,
	        e = { $setViewValue: t };return { restrict: "E", require: ["select", "?ngModel"], controller: ["$element", "$scope", "$attrs", function (a, c, d) {
	        var j = this,
	            g = {},
	            m = e,
	            k;j.databound = d.ngModel;j.init = function (a, c, d) {
	          m = a;k = d;
	        };j.addOption = function (c) {
	          g[c] = !0;m.$viewValue == c && (a.val(c), k.parent() && k.remove());
	        };j.removeOption = function (a) {
	          this.hasOption(a) && (delete g[a], m.$viewValue == a && this.renderUnknownOption(a));
	        };j.renderUnknownOption = function (c) {
	          c = "? " + la(c) + " ?";k.val(c);a.prepend(k);a.val(c);k.prop("selected", !0);
	        };j.hasOption = function (a) {
	          return g.hasOwnProperty(a);
	        };c.$on("$destroy", function () {
	          j.renderUnknownOption = t;
	        });
	      }], link: function link(e, i, h, j) {
	        function g(a, c, d, e) {
	          d.$render = function () {
	            var a = d.$viewValue;e.hasOption(a) ? (x.parent() && x.remove(), c.val(a), a === "" && p.prop("selected", !0)) : u(a) && p ? c.val("") : e.renderUnknownOption(a);
	          };c.bind("change", function () {
	            a.$apply(function () {
	              x.parent() && x.remove();d.$setViewValue(c.val());
	            });
	          });
	        }function m(a, c, d) {
	          var e;d.$render = function () {
	            var a = new Pa(d.$viewValue);o(c.find("option"), function (c) {
	              c.selected = w(a.get(c.value));
	            });
	          };a.$watch(function () {
	            ja(e, d.$viewValue) || (e = W(d.$viewValue), d.$render());
	          });c.bind("change", function () {
	            a.$apply(function () {
	              var a = [];o(c.find("option"), function (c) {
	                c.selected && a.push(c.value);
	              });d.$setViewValue(a);
	            });
	          });
	        }
	        function k(e, f, h) {
	          function g() {
	            var a = { "": [] },
	                c = [""],
	                d,
	                i,
	                t,
	                v,
	                u;t = h.$modelValue;v = p(e) || [];var w = l ? rb(v) : v,
	                z,
	                x,
	                A;x = {};u = !1;var B, C;if (n) u = new Pa(t);else if (t === null || r) a[""].push({ selected: t === null, id: "", label: "" }), u = !0;for (A = 0; z = w.length, A < z; A++) {
	              x[k] = v[l ? x[l] = w[A] : A];d = m(e, x) || "";if (!(i = a[d])) i = a[d] = [], c.push(d);n ? d = u.remove(o(e, x)) != s : (d = t === o(e, x), u = u || d);B = j(e, x);B = B === s ? "" : B;i.push({ id: l ? w[A] : A, label: B, selected: d });
	            }!n && !u && a[""].unshift({ id: "?", label: "", selected: !0 });x = 0;for (w = c.length; x < w; x++) {
	              d = c[x];i = a[d];if (q.length <= x) t = { element: D.clone().attr("label", d), label: i.label }, v = [t], q.push(v), f.append(t.element);else if ((v = q[x], t = v[0], t.label != d)) t.element.attr("label", t.label = d);B = null;A = 0;for (z = i.length; A < z; A++) if ((d = i[A], u = v[A + 1])) {
	                B = u.element;if (u.label !== d.label) B.text(u.label = d.label);if (u.id !== d.id) B.val(u.id = d.id);if (u.element.selected !== d.selected) B.prop("selected", u.selected = d.selected);
	              } else d.id === "" && r ? C = r : (C = y.clone()).val(d.id).attr("selected", d.selected).text(d.label), v.push({ element: C,
	                label: d.label, id: d.id, selected: d.selected }), B ? B.after(C) : t.element.append(C), B = C;for (A++; v.length > A;) v.pop().element.remove();
	            }for (; q.length > x;) q.pop()[0].element.remove();
	          }var i;if (!(i = t.match(d))) throw Error("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '" + t + "'.");var j = c(i[2] || i[1]),
	              k = i[4] || i[6],
	              l = i[5],
	              m = c(i[3] || ""),
	              o = c(i[2] ? i[1] : k),
	              p = c(i[7]),
	              q = [[{ element: f, label: "" }]];r && (a(r)(e), r.removeClass("ng-scope"), r.remove());f.html("");f.bind("change", function () {
	            e.$apply(function () {
	              var a,
	                  c = p(e) || [],
	                  d = {},
	                  g,
	                  i,
	                  j,
	                  m,
	                  r,
	                  t;if (n) {
	                i = [];m = 0;for (t = q.length; m < t; m++) {
	                  a = q[m];j = 1;for (r = a.length; j < r; j++) if ((g = a[j].element)[0].selected) g = g.val(), l && (d[l] = g), d[k] = c[g], i.push(o(e, d));
	                }
	              } else g = f.val(), g == "?" ? i = s : g == "" ? i = null : (d[k] = c[g], l && (d[l] = g), i = o(e, d));h.$setViewValue(i);
	            });
	          });h.$render = g;e.$watch(g);
	        }if (j[1]) {
	          for (var l = j[0], q = j[1], n = h.multiple, t = h.ngOptions, r = !1, p, y = v(V.createElement("option")), D = v(V.createElement("optgroup")), x = y.clone(), j = 0, C = i.children(), A = C.length; j < A; j++) if (C[j].value == "") {
	            p = r = C.eq(j);break;
	          }l.init(q, r, x);if (n && (h.required || h.ngRequired)) {
	            var H = function H(a) {
	              q.$setValidity("required", !h.required || a && a.length);return a;
	            };q.$parsers.push(H);q.$formatters.unshift(H);h.$observe("required", function () {
	              H(q.$viewValue);
	            });
	          }t ? k(e, i, q) : n ? m(e, i, q) : g(e, i, q, l);
	        }
	      } };
	  }],
	      $d = ["$interpolate", function (a) {
	    var c = { addOption: t, removeOption: t };return { restrict: "E", priority: 100, compile: function compile(d, e) {
	        if (u(e.value)) {
	          var f = a(d.text(), !0);f || e.$set("value", d.text());
	        }return function (a, d, e) {
	          var g = d.parent(),
	              m = g.data("$selectController") || g.parent().data("$selectController");m && m.databound ? d.prop("selected", !1) : m = c;f ? a.$watch(f, function (a, c) {
	            e.$set("value", a);a !== c && m.removeOption(c);m.addOption(a);
	          }) : m.addOption(e.value);d.bind("$destroy", function () {
	            m.removeOption(e.value);
	          });
	        };
	      } };
	  }],
	      ae = Q({ restrict: "E", terminal: !0 });(ca = M.jQuery) ? (v = ca, y(ca.fn, { scope: za.scope, controller: za.controller, injector: za.injector, inheritedData: za.inheritedData }), fb("remove", !0), fb("empty"), fb("html")) : v = P;Ia.element = v;(function (a) {
	    y(a, { bootstrap: vb, copy: W, extend: y, equals: ja, element: v, forEach: o, injector: wb, noop: t, bind: ab, toJson: da, fromJson: tb, identity: pa, isUndefined: u, isDefined: w, isString: x, isFunction: I, isObject: L, isNumber: Za, isElement: jc, isArray: C, version: md, isDate: qa, lowercase: J, uppercase: na, callbacks: { counter: 0 }, noConflict: gc });xa = oc(M);try {
	      xa("ngLocale");
	    } catch (c) {
	      xa("ngLocale", []).provider("$locale", cd);
	    }xa("ng", ["ngLocale"], ["$provide", function (a) {
	      a.provider("$compile", Hb).directive({ a: od, input: dc, textarea: dc,
	        form: pd, script: Xd, select: Zd, style: ae, option: $d, ngBind: Ad, ngBindHtmlUnsafe: Cd, ngBindTemplate: Bd, ngClass: Dd, ngClassEven: Fd, ngClassOdd: Ed, ngCsp: Id, ngCloak: Gd, ngController: Hd, ngForm: qd, ngHide: Qd, ngInclude: Kd, ngInit: Ld, ngNonBindable: Md, ngPluralize: Nd, ngRepeat: Od, ngShow: Pd, ngSubmit: Jd, ngStyle: Rd, ngSwitch: Sd, ngSwitchWhen: Td, ngSwitchDefault: Ud, ngOptions: Yd, ngView: Wd, ngTransclude: Vd, ngModel: vd, ngList: xd, ngChange: wd, required: ec, ngRequired: ec, ngValue: zd }).directive(qb).directive(fc);a.provider({ $anchorScroll: xc,
	        $animation: Gb, $animator: nd, $browser: zc, $cacheFactory: Ac, $controller: Dc, $document: Ec, $exceptionHandler: Fc, $filter: Tb, $interpolate: Gc, $http: Zc, $httpBackend: $c, $location: Kc, $log: Lc, $parse: Pc, $route: Sc, $routeParams: Tc, $rootScope: Uc, $q: Qc, $sniffer: Vc, $templateCache: Bc, $timeout: dd, $window: Wc });
	    }]);
	  })(Ia);v(V).ready(function () {
	    mc(V, vb);
	  });
	})(window, document);angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>');

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function (myapp) {

	    // Создаем метод-фабрику для приема данных о погоде
	    myapp.factory('weatherService', function ($http) {
	        return {
	            getWeather: function getWeather(city, cnt) {
	                var weather = {},
	                    i = 0;
	                // Делаем запрос к API и сохраняем данные в переменной weather
	                $http.jsonp('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&mode=json&units=metric&cnt=' + cnt.count + '&callback=JSON_CALLBACK&APPID=b1cf72411725d1c622476781c219516c').success(function (data) {
	                    if (data) {
	                        if (data.list) {
	                            weather.days = [];
	                            angular.forEach(data.list, function (value, key) {
	                                weather.days.push({
	                                    "number": i,
	                                    "temp": {
	                                        "morn": value.temp.morn,
	                                        "day": value.temp.day,
	                                        "eve": value.temp.eve,
	                                        "night": value.temp.night,
	                                        "max": value.temp.max
	                                    },
	                                    "wind": value.speed,
	                                    "deg": value.deg,
	                                    "sky": value.weather[0].main
	                                });
	                                i++;
	                            });
	                        }
	                        weather.city = data.city.name;
	                    }
	                });
	                return weather;
	            }
	        };
	    });

	    // Создаем метод-фабрику для вывода списка городов
	    myapp.factory('citiesService', function ($http) {
	        return {
	            getCities: function getCities(city) {
	                var cities = {};
	                // Делаем запрос к API
	                $http.jsonp('https://api.vk.com/method/database.getCities?country_id=1&count=20&callback=JSON_CALLBACK&v=5.57&q=' + city).success(function (data) {
	                    cities.title = [];
	                    angular.forEach(data.response.items, function (value, key) {
	                        cities.title.push({ // сохраняем полученные данные
	                            "title": value.title
	                        });
	                    });
	                });
	                return cities;
	            }
	        };
	    });

	    // Округляем результат и добавляем в конец С
	    myapp.filter('temp', function ($filter) {
	        return function (input, precision) {
	            if (!precision) {
	                precision = 1;
	            }
	            var numberFilter = $filter('number');
	            return numberFilter(input, precision) + '°C';
	        };
	    });

	    // Создаем директиву для вывода погоды
	    myapp.directive('weatherDay', function () {
	        return {
	            restrict: 'E', replace: true, //для элемента weather-day, перезаписываем
	            scope: {
	                day: '=' // Атрибуту day передаем значение переменной
	            },
	            controller: function controller($scope) {
	                // Возвращаем дату
	                $scope.getDate = function () {
	                    var date = new Date();
	                    date.setDate(date.getDate() + $scope.day.number);
	                    return date;
	                };
	            },
	            templateUrl: "templates/wheather.html"
	        };
	    });

	    // Создаем директиву для вывода списка городов
	    myapp.directive('citiesTitle', function () {
	        return {
	            restrict: 'E', replace: true,
	            scope: {
	                citytitle: '='
	            },
	            template: "<option>{{ citytitle.title }}</option>"
	        };
	    });

	    // Создаем директиву для вывода иконок
	    myapp.directive('weatherIcon', function () {
	        return {
	            restrict: 'E', replace: true,
	            scope: {
	                sky: '@'
	            },
	            controller: function controller($scope) {
	                $scope.imgurl = function () {
	                    if ($scope.sky === "Clear") {
	                        return 'img/icon-1.png';
	                    } else if ($scope.sky === "Clouds") {
	                        return 'img/icon-2.png';
	                    } else if ($scope.sky === "Rain") {
	                        return 'img/icon-3.png';
	                    } else if ($scope.sky === "Snow") {
	                        return 'img/icon-4.png';
	                    }
	                };
	            },
	            template: '<img class="icon" ng-src="{{ imgurl() }}">'
	        };
	    });
	};

	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function (myapp) {

	    // контроллер для приложения

	    myapp.controller('WeatherCtrl', function ($scope, weatherService, citiesService) {
	        $scope.weather = weatherService.getWeather('Самара', 6); // Выводим погоду для города по умолчанию
	        $scope.countdays = [{ count: '1' }, { count: '2' }, { count: '3' }, { count: '4' }, { count: '5' }, { count: '6' }, { count: '7' }];
	        $scope.cnt = $scope.countdays[5];

	        $scope.load = function () {
	            //обрабатываем клик по кнопке "Показать"

	            if (!$scope.city) {} else {
	                $scope.weather = weatherService.getWeather($scope.city, $scope.cnt);
	            }
	        };

	        $scope.cities = function () {
	            // Обрабатываем изменение текстового поля
	            if ($scope.city.length > 3) {
	                $scope.citytitle = citiesService.getCities($scope.city);
	            }
	        };
	    });
	};

	module.exports = exports['default'];

/***/ }
/******/ ]);