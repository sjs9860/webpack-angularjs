(function(f) { // function a
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = f() // b
	} else if (typeof define === "function" && define.amd) {
		define([], f) // b
	} else {
		var g;
		if (typeof window !== "undefined") {
			g = window
		} else if (typeof global !== "undefined") {
			g = global
		} else if (typeof self !== "undefined") {
			g = self
		} else {
			g = this
		}
		g.dummy_bundle = f() // b
	}
} //
)(function() { // function b
  var define, module, exports;
  return (function() { // function c
    function r(e, n, t) { // function d
			function o(i, f) { // function e
				if (!n[i]) {
					if (!e[i]) {
						var c = "function" == typeof require && require;
						if (!f && c)
							return c(i, !0);
						if (u)
							return u(i, !0);
						var a = new Error("Cannot find module '" + i + "'");
						throw a.code = "MODULE_NOT_FOUND",
						a
					}
					var p = n[i] = {
						exports: {}
					};
					e[i][0].call(p.exports, function(r) {
						var n = e[i][1][r];
						return o(n || r)
					}, p, p.exports, r, e, n, t)
				}
				return n[i].exports
			}
			for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)
				o(t[i]);
			return o
		}
    return r
  })()({
    1: [function(require, module, exports) { // function f
      'use strict';

			module.exports = {
        dummy: 'dummy',
        bundle: function() {
          console.log('bundle function');
        }
      }
    },
    {}]
  }, {}, [1])(1)
})