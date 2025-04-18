import { LitElement as $e, query as Y, property as y, state as B, html as p, css as we, customElement as pe, queryAsync as ia, eventOptions as Ko, queryAssignedNodes as na, unsafeCSS as Zo, svg as V } from "lit-element";
import { NodePart as Xo, AttributePart as Yo, directive as ra, nothing as zt, html as z, render as aa } from "lit-html";
import { Select as Qo } from "@material/mwc-select";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
import { TextField as Jo } from "@material/mwc-textfield";
import "@material/mwc-formfield";
import "@material/mwc-icon";
import "@material/mwc-fab";
import { List as es } from "@material/mwc-list";
import "@material/mwc-button";
function ts(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ut = { exports: {} }, hr;
function is() {
  if (hr) return Ut.exports;
  hr = 1, Ut.exports = e, Ut.exports.addWheelListener = e, Ut.exports.removeWheelListener = t;
  function e(i, n, r) {
    i.addEventListener("wheel", n, r);
  }
  function t(i, n, r) {
    i.removeEventListener("wheel", n, r);
  }
  return Ut.exports;
}
var Kt = { exports: {} }, Ki, fr;
function ns() {
  if (fr) return Ki;
  fr = 1;
  var e = 4, t = 1e-3, i = 1e-7, n = 10, r = 11, a = 1 / (r - 1), o = typeof Float32Array == "function";
  function c(C, E) {
    return 1 - 3 * E + 3 * C;
  }
  function d(C, E) {
    return 3 * E - 6 * C;
  }
  function u(C) {
    return 3 * C;
  }
  function m(C, E, x) {
    return ((c(E, x) * C + d(E, x)) * C + u(E)) * C;
  }
  function f(C, E, x) {
    return 3 * c(E, x) * C * C + 2 * d(E, x) * C + u(E);
  }
  function b(C, E, x, F, q) {
    var R, te, ke = 0;
    do
      te = E + (x - E) / 2, R = m(te, F, q) - C, R > 0 ? x = te : E = te;
    while (Math.abs(R) > i && ++ke < n);
    return te;
  }
  function A(C, E, x, F) {
    for (var q = 0; q < e; ++q) {
      var R = f(E, x, F);
      if (R === 0)
        return E;
      var te = m(E, x, F) - C;
      E -= te / R;
    }
    return E;
  }
  function S(C) {
    return C;
  }
  return Ki = function(E, x, F, q) {
    if (!(0 <= E && E <= 1 && 0 <= F && F <= 1))
      throw new Error("bezier x values must be in [0, 1] range");
    if (E === x && F === q)
      return S;
    for (var R = o ? new Float32Array(r) : new Array(r), te = 0; te < r; ++te)
      R[te] = m(te * a, E, F);
    function ke(T) {
      for (var I = 0, _ = 1, M = r - 1; _ !== M && R[_] <= T; ++_)
        I += a;
      --_;
      var ce = (T - R[_]) / (R[_ + 1] - R[_]), ne = I + ce * a, L = f(ne, E, F);
      return L >= t ? A(T, ne, E, F) : L === 0 ? ne : b(T, I, I + a, E, F);
    }
    return function(I) {
      return I === 0 ? 0 : I === 1 ? 1 : m(ke(I), x, q);
    };
  }, Ki;
}
var br;
function rs() {
  if (br) return Kt.exports;
  br = 1;
  var e = ns(), t = {
    ease: e(0.25, 0.1, 0.25, 1),
    easeIn: e(0.42, 0, 1, 1),
    easeOut: e(0, 0, 0.58, 1),
    easeInOut: e(0.42, 0, 0.58, 1),
    linear: e(0, 0, 1, 1)
  };
  Kt.exports = i, Kt.exports.makeAggregateRaf = c, Kt.exports.sharedScheduler = c();
  function i(d, u, m) {
    var f = /* @__PURE__ */ Object.create(null), b = /* @__PURE__ */ Object.create(null);
    m = m || {};
    var A = typeof m.easing == "function" ? m.easing : t[m.easing];
    A || (m.easing && console.warn("Unknown easing function in amator: " + m.easing), A = t.ease);
    var S = typeof m.step == "function" ? m.step : n, C = typeof m.done == "function" ? m.done : n, E = r(m.scheduler), x = Object.keys(u);
    x.forEach(function(_) {
      f[_] = d[_], b[_] = u[_] - d[_];
    });
    var F = typeof m.duration == "number" ? m.duration : 400, q = Math.max(1, F * 0.06), R, te = 0;
    return R = E.next(T), {
      cancel: ke
    };
    function ke() {
      E.cancel(R), R = 0;
    }
    function T() {
      var _ = A(te / q);
      te += 1, I(_), te <= q ? (R = E.next(T), S(d)) : (R = 0, setTimeout(function() {
        C(d);
      }, 0));
    }
    function I(_) {
      x.forEach(function(M) {
        d[M] = b[M] * _ + f[M];
      });
    }
  }
  function n() {
  }
  function r(d) {
    if (!d) {
      var u = typeof window < "u" && window.requestAnimationFrame;
      return u ? a() : o();
    }
    if (typeof d.next != "function") throw new Error("Scheduler is supposed to have next(cb) function");
    if (typeof d.cancel != "function") throw new Error("Scheduler is supposed to have cancel(handle) function");
    return d;
  }
  function a() {
    return {
      next: window.requestAnimationFrame.bind(window),
      cancel: window.cancelAnimationFrame.bind(window)
    };
  }
  function o() {
    return {
      next: function(d) {
        return setTimeout(d, 1e3 / 60);
      },
      cancel: function(d) {
        return clearTimeout(d);
      }
    };
  }
  function c() {
    var d = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), m = 0;
    return {
      next: b,
      cancel: b,
      clearAll: f
    };
    function f() {
      d.clear(), u.clear(), cancelAnimationFrame(m), m = 0;
    }
    function b(C) {
      u.add(C), A();
    }
    function A() {
      m || (m = requestAnimationFrame(S));
    }
    function S() {
      m = 0;
      var C = u;
      u = d, d = C, d.forEach(function(E) {
        E();
      }), d.clear();
    }
  }
  return Kt.exports;
}
var Zi, gr;
function as() {
  if (gr) return Zi;
  gr = 1, Zi = function(n) {
    t(n);
    var r = e(n);
    return n.on = r.on, n.off = r.off, n.fire = r.fire, n;
  };
  function e(i) {
    var n = /* @__PURE__ */ Object.create(null);
    return {
      on: function(r, a, o) {
        if (typeof a != "function")
          throw new Error("callback is expected to be a function");
        var c = n[r];
        return c || (c = n[r] = []), c.push({ callback: a, ctx: o }), i;
      },
      off: function(r, a) {
        var o = typeof r > "u";
        if (o)
          return n = /* @__PURE__ */ Object.create(null), i;
        if (n[r]) {
          var c = typeof a != "function";
          if (c)
            delete n[r];
          else
            for (var d = n[r], u = 0; u < d.length; ++u)
              d[u].callback === a && d.splice(u, 1);
        }
        return i;
      },
      fire: function(r) {
        var a = n[r];
        if (!a)
          return i;
        var o;
        arguments.length > 1 && (o = Array.prototype.splice.call(arguments, 1));
        for (var c = 0; c < a.length; ++c) {
          var d = a[c];
          d.callback.apply(d.ctx, o);
        }
        return i;
      }
    };
  }
  function t(i) {
    if (!i)
      throw new Error("Eventify cannot use falsy object as events subject");
    for (var n = ["on", "fire", "off"], r = 0; r < n.length; ++r)
      if (i.hasOwnProperty(n[r]))
        throw new Error("Subject cannot be eventified, since it already has property '" + n[r] + "'");
  }
  return Zi;
}
var Xi, yr;
function os() {
  if (yr) return Xi;
  yr = 1, Xi = e;
  function e(n, r, a) {
    typeof a != "object" && (a = {});
    var o = typeof a.minVelocity == "number" ? a.minVelocity : 5, c = typeof a.amplitude == "number" ? a.amplitude : 0.25, d = typeof a.cancelAnimationFrame == "function" ? a.cancelAnimationFrame : t(), u = typeof a.requestAnimationFrame == "function" ? a.requestAnimationFrame : i(), m, f, b = 342, A, S, C, E, x, F, q, R;
    return {
      start: ke,
      stop: I,
      cancel: te
    };
    function te() {
      d(A), d(R);
    }
    function ke() {
      m = n(), E = q = S = x = 0, f = /* @__PURE__ */ new Date(), d(A), d(R), A = u(T);
    }
    function T() {
      var M = Date.now(), ce = M - f;
      f = M;
      var ne = n(), L = ne.x - m.x, tt = ne.y - m.y;
      m = ne;
      var it = 1e3 / (1 + ce);
      S = 0.8 * L * it + 0.2 * S, x = 0.8 * tt * it + 0.2 * x, A = u(T);
    }
    function I() {
      d(A), d(R);
      var M = n();
      C = M.x, F = M.y, f = Date.now(), (S < -o || S > o) && (E = c * S, C += E), (x < -o || x > o) && (q = c * x, F += q), R = u(_);
    }
    function _() {
      var M = Date.now() - f, ce = !1, ne = 0, L = 0;
      E && (ne = -E * Math.exp(-M / b), ne > 0.5 || ne < -0.5 ? ce = !0 : ne = E = 0), q && (L = -q * Math.exp(-M / b), L > 0.5 || L < -0.5 ? ce = !0 : L = q = 0), ce && (r(C + ne, F + L), R = u(_));
    }
  }
  function t() {
    return typeof cancelAnimationFrame == "function" ? cancelAnimationFrame : clearTimeout;
  }
  function i() {
    return typeof requestAnimationFrame == "function" ? requestAnimationFrame : function(n) {
      return setTimeout(n, 16);
    };
  }
  return Xi;
}
var Yi, vr;
function ss() {
  if (vr) return Yi;
  vr = 1, Yi = e;
  function e(n) {
    if (n)
      return {
        capture: i,
        release: i
      };
    var r, a, o, c = !1;
    return {
      capture: d,
      release: u
    };
    function d(m) {
      c = !0, a = window.document.onselectstart, o = window.document.ondragstart, window.document.onselectstart = t, r = m, r.ondragstart = t;
    }
    function u() {
      c && (c = !1, window.document.onselectstart = a, r && (r.ondragstart = o));
    }
  }
  function t(n) {
    return n.stopPropagation(), !1;
  }
  function i() {
  }
  return Yi;
}
var Qi, wr;
function cs() {
  if (wr) return Qi;
  wr = 1, Qi = e;
  function e() {
    this.x = 0, this.y = 0, this.scale = 1;
  }
  return Qi;
}
var mi = { exports: {} }, Ar;
function ls() {
  if (Ar) return mi.exports;
  Ar = 1, mi.exports = e, mi.exports.canAttach = t;
  function e(i, n) {
    if (!t(i))
      throw new Error("svg element is required for svg.panzoom to work");
    var r = i.ownerSVGElement;
    if (!r)
      throw new Error(
        "Do not apply panzoom to the root <svg> element. Use its child instead (e.g. <g></g>). As of March 2016 only FireFox supported transform on the root element"
      );
    n.disableKeyboardInteraction || r.setAttribute("tabindex", 0);
    var a = {
      getBBox: c,
      getScreenCTM: d,
      getOwner: o,
      applyTransform: m,
      initTransform: u
    };
    return a;
    function o() {
      return r;
    }
    function c() {
      var f = i.getBBox();
      return {
        left: f.x,
        top: f.y,
        width: f.width,
        height: f.height
      };
    }
    function d() {
      var f = r.getCTM();
      return f || r.getScreenCTM();
    }
    function u(f) {
      var b = i.getCTM();
      b === null && (b = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix()), f.x = b.e, f.y = b.f, f.scale = b.a, r.removeAttributeNS(null, "viewBox");
    }
    function m(f) {
      i.setAttribute("transform", "matrix(" + f.scale + " 0 0 " + f.scale + " " + f.x + " " + f.y + ")");
    }
  }
  function t(i) {
    return i && i.ownerSVGElement && i.getCTM;
  }
  return mi.exports;
}
var hi = { exports: {} }, xr;
function ds() {
  if (xr) return hi.exports;
  xr = 1, hi.exports = e, hi.exports.canAttach = t;
  function e(i, n) {
    var r = t(i);
    if (!r)
      throw new Error("panzoom requires DOM element to be attached to the DOM tree");
    var a = i.parentElement;
    i.scrollTop = 0, n.disableKeyboardInteraction || a.setAttribute("tabindex", 0);
    var o = {
      getBBox: d,
      getOwner: c,
      applyTransform: u
    };
    return o;
    function c() {
      return a;
    }
    function d() {
      return {
        left: 0,
        top: 0,
        width: i.clientWidth,
        height: i.clientHeight
      };
    }
    function u(m) {
      i.style.transformOrigin = "0 0 0", i.style.transform = "matrix(" + m.scale + ", 0, 0, " + m.scale + ", " + m.x + ", " + m.y + ")";
    }
  }
  function t(i) {
    return i && i.parentElement && i.style;
  }
  return hi.exports;
}
var Ji, Sr;
function us() {
  if (Sr) return Ji;
  Sr = 1;
  var e = is(), t = rs(), i = as(), n = os(), r = ss(), a = r(), o = r(!0), c = cs(), d = ls(), u = ds(), m = 1, f = 1.75, b = 300, A = 200;
  Ji = S;
  function S(T, I) {
    I = I || {};
    var _ = I.controller;
    if (_ || (d.canAttach(T) ? _ = d(T, I) : u.canAttach(T) && (_ = u(T, I))), !_)
      throw new Error(
        "Cannot create panzoom for the current type of dom element"
      );
    var M = _.getOwner(), ce = { x: 0, y: 0 }, ne = !1, L = new c();
    _.initTransform && _.initTransform(L);
    var tt = typeof I.filterKey == "function" ? I.filterKey : x, it = typeof I.pinchSpeed == "number" ? I.pinchSpeed : 1, je = I.bounds, ie = typeof I.maxZoom == "number" ? I.maxZoom : Number.POSITIVE_INFINITY, ge = typeof I.minZoom == "number" ? I.minZoom : 0, Se = typeof I.boundsPadding == "number" ? I.boundsPadding : 0.05, ze = typeof I.zoomDoubleClickSpeed == "number" ? I.zoomDoubleClickSpeed : f, Pi = I.beforeWheel || x, Ot = I.beforeMouseDown || x, Mi = typeof I.zoomSpeed == "number" ? I.zoomSpeed : m, Ue = C(I.transformOrigin), Ri = I.enableTextSelection ? o : a;
    F(je), I.autocenter && So();
    var Ft, On = 0, Fn = 0, qt = 0, qn = null, Hn = /* @__PURE__ */ new Date(), Oi, Ht = !1, Bt = !1, Te, _e, Fi, qi, Hi, Me;
    "smoothScroll" in I && !I.smoothScroll ? Me = te() : Me = n(To, Ro, I.smoothScroll);
    var Bi, Gt, ai, oi = !1;
    Zn();
    var si = {
      dispose: Oo,
      moveBy: kt,
      moveTo: Gi,
      smoothMoveTo: Mo,
      centerOn: Po,
      zoomTo: ui,
      zoomAbs: ci,
      smoothZoom: di,
      smoothZoomAbs: jo,
      showRectangle: xo,
      pause: vo,
      resume: wo,
      isPaused: Ao,
      getTransform: Eo,
      getMinZoom: Co,
      setMinZoom: No,
      getMaxZoom: Io,
      setMaxZoom: ko,
      getTransformOrigin: Do,
      setTransformOrigin: $o,
      getZoomSpeed: Lo,
      setZoomSpeed: zo
    };
    i(si);
    var Bn = typeof I.initialX == "number" ? I.initialX : L.x, Gn = typeof I.initialY == "number" ? I.initialY : L.y, Wn = typeof I.initialZoom == "number" ? I.initialZoom : L.scale;
    return (Bn != L.x || Gn != L.y || Wn != L.scale) && ci(Bn, Gn, Wn), si;
    function vo() {
      Xn(), oi = !0;
    }
    function wo() {
      oi && (Zn(), oi = !1);
    }
    function Ao() {
      return oi;
    }
    function xo(h) {
      var v = M.getBoundingClientRect(), w = yt(v.width, v.height), k = h.right - h.left, H = h.bottom - h.top;
      if (!Number.isFinite(k) || !Number.isFinite(H))
        throw new Error("Invalid rectangle");
      var Z = w.x / k, X = w.y / H, de = Math.min(Z, X);
      L.x = -(h.left + k / 2) * de + w.x / 2, L.y = -(h.top + H / 2) * de + w.y / 2, L.scale = de;
    }
    function yt(h, v) {
      if (_.getScreenCTM) {
        var w = _.getScreenCTM(), k = w.a, H = w.d, Z = w.e, X = w.f;
        ce.x = h * k - Z, ce.y = v * H - X;
      } else
        ce.x = h, ce.y = v;
      return ce;
    }
    function So() {
      var h, v, w = 0, k = 0, H = Un();
      if (H)
        w = H.left, k = H.top, h = H.right - H.left, v = H.bottom - H.top;
      else {
        var Z = M.getBoundingClientRect();
        h = Z.width, v = Z.height;
      }
      var X = _.getBBox();
      if (!(X.width === 0 || X.height === 0)) {
        var de = v / X.height, $t = h / X.width, vt = Math.min($t, de);
        L.x = -(X.left + X.width / 2) * vt + h / 2 + w, L.y = -(X.top + X.height / 2) * vt + v / 2 + k, L.scale = vt;
      }
    }
    function Eo() {
      return L;
    }
    function Co() {
      return ge;
    }
    function No(h) {
      ge = h;
    }
    function Io() {
      return ie;
    }
    function ko(h) {
      ie = h;
    }
    function Do() {
      return Ue;
    }
    function $o(h) {
      Ue = C(h);
    }
    function Lo() {
      return Mi;
    }
    function zo(h) {
      if (!Number.isFinite(h))
        throw new Error("Zoom speed should be a number");
      Mi = h;
    }
    function To() {
      return {
        x: L.x,
        y: L.y
      };
    }
    function Gi(h, v) {
      L.x = h, L.y = v, Wi(), Dt("pan"), ji();
    }
    function jn(h, v) {
      Gi(L.x + h, L.y + v);
    }
    function Wi() {
      var h = Un();
      if (h) {
        var v = !1, w = _o(), k = h.left - w.right;
        return k > 0 && (L.x += k, v = !0), k = h.right - w.left, k < 0 && (L.x += k, v = !0), k = h.top - w.bottom, k > 0 && (L.y += k, v = !0), k = h.bottom - w.top, k < 0 && (L.y += k, v = !0), v;
      }
    }
    function Un() {
      if (je) {
        if (typeof je == "boolean") {
          var h = M.getBoundingClientRect(), v = h.width, w = h.height;
          return {
            left: v * Se,
            top: w * Se,
            right: v * (1 - Se),
            bottom: w * (1 - Se)
          };
        }
        return je;
      }
    }
    function _o() {
      var h = _.getBBox(), v = Vo(h.left, h.top);
      return {
        left: v.x,
        top: v.y,
        right: h.width * L.scale + v.x,
        bottom: h.height * L.scale + v.y
      };
    }
    function Vo(h, v) {
      return {
        x: h * L.scale + L.x,
        y: v * L.scale + L.y
      };
    }
    function ji() {
      ne = !0, Ft = window.requestAnimationFrame(Fo);
    }
    function Kn(h, v, w) {
      if (R(h) || R(v) || R(w))
        throw new Error("zoom requires valid numbers");
      var k = L.scale * w;
      if (k < ge) {
        if (L.scale === ge) return;
        w = ge / L.scale;
      }
      if (k > ie) {
        if (L.scale === ie) return;
        w = ie / L.scale;
      }
      var H = yt(h, v);
      if (L.x = H.x - w * (H.x - L.x), L.y = H.y - w * (H.y - L.y), je && Se === 1 && ge === 1)
        L.scale *= w, Wi();
      else {
        var Z = Wi();
        Z || (L.scale *= w);
      }
      Dt("zoom"), ji();
    }
    function ci(h, v, w) {
      var k = w / L.scale;
      Kn(h, v, k);
    }
    function Po(h) {
      var v = h.ownerSVGElement;
      if (!v)
        throw new Error("ui element is required to be within the scene");
      var w = h.getBoundingClientRect(), k = w.left + w.width / 2, H = w.top + w.height / 2, Z = v.getBoundingClientRect(), X = Z.width / 2 - k, de = Z.height / 2 - H;
      kt(X, de, !0);
    }
    function Mo(h, v) {
      kt(h - L.x, v - L.y, !0);
    }
    function kt(h, v, w) {
      if (!w)
        return jn(h, v);
      Bi && Bi.cancel();
      var k = { x: 0, y: 0 }, H = { x: h, y: v }, Z = 0, X = 0;
      Bi = t(k, H, {
        step: function(de) {
          jn(de.x - Z, de.y - X), Z = de.x, X = de.y;
        }
      });
    }
    function Ro(h, v) {
      pi(), Gi(h, v);
    }
    function Oo() {
      Xn();
    }
    function Zn() {
      M.addEventListener("mousedown", rr, { passive: !1 }), M.addEventListener("dblclick", nr, { passive: !1 }), M.addEventListener("touchstart", Qn, { passive: !1 }), M.addEventListener("keydown", Yn, { passive: !1 }), e.addWheelListener(M, lr, { passive: !1 }), ji();
    }
    function Xn() {
      e.removeWheelListener(M, lr), M.removeEventListener("mousedown", rr), M.removeEventListener("keydown", Yn), M.removeEventListener("dblclick", nr), M.removeEventListener("touchstart", Qn), Ft && (window.cancelAnimationFrame(Ft), Ft = 0), Me.cancel(), sr(), cr(), Ri.release(), Ui();
    }
    function Fo() {
      ne && qo();
    }
    function qo() {
      ne = !1, _.applyTransform(L), Dt("transform"), Ft = 0;
    }
    function Yn(h) {
      var v = 0, w = 0, k = 0;
      if (h.keyCode === 38 ? w = 1 : h.keyCode === 40 ? w = -1 : h.keyCode === 37 ? v = 1 : h.keyCode === 39 ? v = -1 : h.keyCode === 189 || h.keyCode === 109 ? k = 1 : (h.keyCode === 187 || h.keyCode === 107) && (k = -1), !tt(h, v, w, k)) {
        if (v || w) {
          h.preventDefault(), h.stopPropagation();
          var H = M.getBoundingClientRect(), Z = Math.min(H.width, H.height), X = 0.05, de = Z * X * v, $t = Z * X * w;
          kt(de, $t);
        }
        if (k) {
          var vt = dr(k * 100), Z = Ue ? jt() : Ho();
          ui(Z.x, Z.y, vt);
        }
      }
    }
    function Ho() {
      var h = M.getBoundingClientRect();
      return {
        x: h.width / 2,
        y: h.height / 2
      };
    }
    function Qn(h) {
      if (Bo(h), Wt(), h.touches.length === 1)
        return Wo(h, h.touches[0]);
      h.touches.length === 2 && (Hi = ir(h.touches[0], h.touches[1]), ai = !0, Jn());
    }
    function Bo(h) {
      I.onTouch && !I.onTouch(h) || (h.stopPropagation(), h.preventDefault());
    }
    function Go(h) {
      Wt(), !(I.onDoubleClick && !I.onDoubleClick(h)) && (h.preventDefault(), h.stopPropagation());
    }
    function Wo(h) {
      Fn = /* @__PURE__ */ new Date();
      var v = h.touches[0], w = Ke(v);
      Oi = w;
      var k = yt(w.x, w.y);
      Te = k.x, _e = k.y, Fi = Te, qi = _e, Me.cancel(), Jn();
    }
    function Jn() {
      Ht || (Ht = !0, document.addEventListener("touchmove", er), document.addEventListener("touchend", li), document.addEventListener("touchcancel", li));
    }
    function er(h) {
      if (h.touches.length === 1) {
        h.stopPropagation();
        var v = h.touches[0], w = Ke(v), k = yt(w.x, w.y), H = k.x - Te, Z = k.y - _e;
        H !== 0 && Z !== 0 && ur(), Te = k.x, _e = k.y, kt(H, Z);
      } else if (h.touches.length === 2) {
        ai = !0;
        var X = h.touches[0], de = h.touches[1], $t = ir(X, de), vt = 1 + ($t / Hi - 1) * it, pr = Ke(X), mr = Ke(de);
        if (Te = (pr.x + mr.x) / 2, _e = (pr.y + mr.y) / 2, Ue) {
          var w = jt();
          Te = w.x, _e = w.y;
        }
        ui(Te, _e, vt), Hi = $t, h.stopPropagation(), h.preventDefault();
      }
    }
    function Wt() {
      qt && (clearTimeout(qt), qt = 0);
    }
    function tr(h) {
      if (I.onClick) {
        Wt();
        var v = Te - Fi, w = _e - qi, k = Math.sqrt(v * v + w * w);
        k > 5 || (qt = setTimeout(function() {
          qt = 0, I.onClick(h);
        }, b));
      }
    }
    function li(h) {
      if (Wt(), h.touches.length > 0) {
        var v = Ke(h.touches[0]), w = yt(v.x, v.y);
        Te = w.x, _e = w.y;
      } else {
        var k = /* @__PURE__ */ new Date();
        if (k - On < b)
          if (Ue) {
            var v = jt();
            di(v.x, v.y, ze);
          } else
            di(Oi.x, Oi.y, ze);
        else k - Fn < A && tr(h);
        On = k, Ui(), cr();
      }
    }
    function ir(h, v) {
      var w = h.clientX - v.clientX, k = h.clientY - v.clientY;
      return Math.sqrt(w * w + k * k);
    }
    function nr(h) {
      Go(h);
      var v = Ke(h);
      Ue && (v = jt()), di(v.x, v.y, ze);
    }
    function rr(h) {
      if (Wt(), !Ot(h)) {
        if (qn = h, Hn = /* @__PURE__ */ new Date(), Ht)
          return h.stopPropagation(), !1;
        var v = h.button === 1 && window.event !== null || h.button === 0;
        if (v) {
          Me.cancel();
          var w = Ke(h), k = yt(w.x, w.y);
          return Fi = Te = k.x, qi = _e = k.y, document.addEventListener("mousemove", ar), document.addEventListener("mouseup", or), Ri.capture(h.target || h.srcElement), !1;
        }
      }
    }
    function ar(h) {
      if (!Ht) {
        ur();
        var v = Ke(h), w = yt(v.x, v.y), k = w.x - Te, H = w.y - _e;
        Te = w.x, _e = w.y, kt(k, H);
      }
    }
    function or() {
      var h = /* @__PURE__ */ new Date();
      h - Hn < A && tr(qn), Ri.release(), Ui(), sr();
    }
    function sr() {
      document.removeEventListener("mousemove", ar), document.removeEventListener("mouseup", or), Bt = !1;
    }
    function cr() {
      document.removeEventListener("touchmove", er), document.removeEventListener("touchend", li), document.removeEventListener("touchcancel", li), Bt = !1, ai = !1, Ht = !1;
    }
    function lr(h) {
      if (!Pi(h)) {
        Me.cancel();
        var v = h.deltaY;
        h.deltaMode > 0 && (v *= 100);
        var w = dr(v);
        if (w !== 1) {
          var k = Ue ? jt() : Ke(h);
          ui(k.x, k.y, w), h.preventDefault();
        }
      }
    }
    function Ke(h) {
      var v, w, k = M.getBoundingClientRect();
      return v = h.clientX - k.left, w = h.clientY - k.top, { x: v, y: w };
    }
    function di(h, v, w) {
      var k = L.scale, H = { scale: k }, Z = { scale: w * k };
      Me.cancel(), pi(), Gt = t(H, Z, {
        step: function(X) {
          ci(h, v, X.scale);
        },
        done: Uo
      });
    }
    function jo(h, v, w) {
      var k = L.scale, H = { scale: k }, Z = { scale: w };
      Me.cancel(), pi(), Gt = t(H, Z, {
        step: function(X) {
          ci(h, v, X.scale);
        }
      });
    }
    function jt() {
      var h = M.getBoundingClientRect();
      return {
        x: h.width * Ue.x,
        y: h.height * Ue.y
      };
    }
    function ui(h, v, w) {
      return Me.cancel(), pi(), Kn(h, v, w);
    }
    function pi() {
      Gt && (Gt.cancel(), Gt = null);
    }
    function dr(h) {
      var v = Math.sign(h), w = Math.min(0.25, Math.abs(Mi * h / 128));
      return 1 - v * w;
    }
    function ur() {
      Bt || (Dt("panstart"), Bt = !0, Me.start());
    }
    function Ui() {
      Bt && (ai || Me.stop(), Dt("panend"));
    }
    function Uo() {
      Dt("zoomend");
    }
    function Dt(h) {
      si.fire(h, si);
    }
  }
  function C(T) {
    if (T) {
      if (typeof T == "object")
        return (!q(T.x) || !q(T.y)) && E(T), T;
      E();
    }
  }
  function E(T) {
    throw console.error(T), new Error(
      [
        "Cannot parse transform origin.",
        "Some good examples:",
        '  "center center" can be achieved with {x: 0.5, y: 0.5}',
        '  "top center" can be achieved with {x: 0.5, y: 0}',
        '  "bottom right" can be achieved with {x: 1, y: 1}'
      ].join(`
`)
    );
  }
  function x() {
  }
  function F(T) {
    var I = typeof T;
    if (!(I === "undefined" || I === "boolean")) {
      var _ = q(T.left) && q(T.top) && q(T.bottom) && q(T.right);
      if (!_)
        throw new Error(
          "Bounds object is not valid. It can be: undefined, boolean (true|false) or an object {left, top, right, bottom}"
        );
    }
  }
  function q(T) {
    return Number.isFinite(T);
  }
  function R(T) {
    return Number.isNaN ? Number.isNaN(T) : T !== T;
  }
  function te() {
    return {
      start: x,
      stop: x,
      cancel: x
    };
  }
  function ke() {
    if (typeof document > "u") return;
    var T = document.getElementsByTagName("script");
    if (!T) return;
    for (var I, _ = 0; _ < T.length; ++_) {
      var M = T[_];
      if (M.src && M.src.match(/\bpanzoom(\.min)?\.js/)) {
        I = M;
        break;
      }
    }
    if (!I) return;
    var ce = I.getAttribute("query");
    if (!ce) return;
    var ne = I.getAttribute("name") || "pz", L = Date.now();
    tt();
    function tt() {
      var ie = document.querySelector(ce);
      if (!ie) {
        var ge = Date.now(), Se = ge - L;
        if (Se < 2e3) {
          setTimeout(tt, 100);
          return;
        }
        console.error("Cannot find the panzoom element", ne);
        return;
      }
      var ze = it(I);
      console.log(ze), window[ne] = S(ie, ze);
    }
    function it(ie) {
      for (var ge = ie.attributes, Se = {}, ze = 0; ze < ge.length; ++ze) {
        var Pi = ge[ze], Ot = je(Pi);
        Ot && (Se[Ot.name] = Ot.value);
      }
      return Se;
    }
    function je(ie) {
      if (ie.name) {
        var ge = ie.name[0] === "p" && ie.name[1] === "z" && ie.name[2] === "-";
        if (ge) {
          var Se = ie.name.substr(3), ze = JSON.parse(ie.value);
          return { name: Se, value: ze };
        }
      }
    }
  }
  return ke(), Ji;
}
var ps = us();
const ms = /* @__PURE__ */ ts(ps);
function W(e, t, i) {
  const n = e.createElementNS(e.documentElement.namespaceURI, t);
  return Object.entries(i).filter(([r, a]) => a !== null).forEach(([r, a]) => n.setAttribute(r, a)), n;
}
function U(e, t) {
  const i = e.cloneNode(!1);
  return Object.entries(t).forEach(([n, r]) => {
    r === null ? i.removeAttribute(n) : i.setAttribute(n, r);
  }), i;
}
function K(e, t) {
  return !e || !t ? [] : Array.from(e.children).filter(
    (i) => i.tagName === t
  );
}
const hs = 1e3 * 60, sn = "langChanged";
function fs(e, t, i) {
  return Object.entries(cn(t || {})).reduce((n, [r, a]) => n.replace(new RegExp(`{{[  ]*${r}[  ]*}}`, "gm"), String(cn(a))), e);
}
function bs(e, t) {
  const i = e.split(".");
  let n = t.strings;
  for (; n != null && i.length > 0; )
    n = n[i.shift()];
  return n != null ? n.toString() : null;
}
function cn(e) {
  return typeof e == "function" ? e() : e;
}
const gs = () => ({
  loader: () => Promise.resolve({}),
  empty: (e) => `[${e}]`,
  lookup: bs,
  interpolate: fs,
  translationCache: {}
});
let Qt = gs();
function ys(e) {
  return Qt = Object.assign(Object.assign({}, Qt), e);
}
function vs(e) {
  window.dispatchEvent(new CustomEvent(sn, { detail: e }));
}
function ws(e, t, i = Qt) {
  vs({
    previousStrings: i.strings,
    previousLang: i.lang,
    lang: i.lang = e,
    strings: i.strings = t
  });
}
function As(e, t) {
  const i = (n) => e(n.detail);
  return window.addEventListener(sn, i, t), () => window.removeEventListener(sn, i);
}
async function xs(e, t = Qt) {
  const i = await t.loader(e, t);
  t.translationCache = {}, ws(e, i, t);
}
function l(e, t, i = Qt) {
  let n = i.translationCache[e] || (i.translationCache[e] = i.lookup(e, i) || i.empty(e, i));
  return t = t != null ? cn(t) : null, t != null ? i.interpolate(n, t, i) : n;
}
function oa(e) {
  return e instanceof Xo ? e.startNode.isConnected : e instanceof Yo ? e.committer.element.isConnected : e.element.isConnected;
}
function Ss(e) {
  for (const [t] of e)
    oa(t) || e.delete(t);
}
function Es(e) {
  "requestIdleCallback" in window ? window.requestIdleCallback(e) : setTimeout(e);
}
function Cs(e, t) {
  setInterval(() => Es(() => Ss(e)), t);
}
const Sn = /* @__PURE__ */ new Map();
function Ns() {
  As((e) => {
    for (const [t, i] of Sn)
      oa(t) && sa(t, i, e);
  });
}
Ns();
Cs(Sn, hs);
function sa(e, t, i) {
  const n = t(i);
  e.value !== n && (e.setValue(n), e.commit());
}
ra((e) => (t) => {
  Sn.set(t, e), sa(t, e);
});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const ca = /* @__PURE__ */ new WeakMap(), Ci = (e) => (...t) => {
  const i = e(...t);
  return ca.set(i, !0), i;
}, Er = (e) => typeof e == "function" && ca.has(e);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const en = {};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
`${String(Math.random()).slice(2)}`;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (e) => e });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const la = (e) => e === null || !(typeof e == "object" || typeof e == "function");
class Ni {
  constructor(t) {
    this.value = void 0, this.committer = t;
  }
  setValue(t) {
    t !== en && (!la(t) || t !== this.value) && (this.value = t, Er(t) || (this.committer.dirty = !0));
  }
  commit() {
    for (; Er(this.value); ) {
      const t = this.value;
      this.value = en, t(this);
    }
    this.value !== en && this.committer.commit();
  }
}
class da extends Ni {
}
let Is = !1;
(() => {
  try {
    const e = {
      get capture() {
        return Is = !0, !1;
      }
    };
    window.addEventListener("test", e, e), window.removeEventListener("test", e, e);
  } catch {
  }
})();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
typeof window < "u" && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
var ln = function(e, t) {
  return ln = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, n) {
    i.__proto__ = n;
  } || function(i, n) {
    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (i[r] = n[r]);
  }, ln(e, t);
};
function ks(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  ln(e, t);
  function i() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i());
}
var Xt = function() {
  return Xt = Object.assign || function(t) {
    for (var i, n = 1, r = arguments.length; n < r; n++) {
      i = arguments[n];
      for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
    }
    return t;
  }, Xt.apply(this, arguments);
};
function N(e, t, i, n) {
  var r = arguments.length, a = r < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, i) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, i, n);
  else for (var c = e.length - 1; c >= 0; c--) (o = e[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, i, a) : o(t, i)) || a);
  return r > 3 && a && Object.defineProperty(t, i, a), a;
}
function fi(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, i = t && e[t], n = 0;
  if (i) return i.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function Ds(e, t) {
  var i = e.matches || e.webkitMatchesSelector || e.msMatchesSelector;
  return i.call(e, t);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const $s = (e) => e.nodeType === Node.ELEMENT_NODE, ua = () => {
}, Ls = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", ua, Ls);
document.removeEventListener("x", ua);
const pa = (e = window.document) => {
  let t = e.activeElement;
  const i = [];
  if (!t)
    return i;
  for (; t && (i.push(t), t.shadowRoot); )
    t = t.shadowRoot.activeElement;
  return i;
}, zs = (e) => {
  const t = pa();
  if (!t.length)
    return !1;
  const i = t[t.length - 1], n = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let r = [];
  const a = (o) => {
    r = o.composedPath();
  };
  return document.body.addEventListener("check-if-focused", a), i.dispatchEvent(n), document.body.removeEventListener("check-if-focused", a), r.indexOf(e) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class En extends $e {
  click() {
    if (this.mdcRoot) {
      this.mdcRoot.focus(), this.mdcRoot.click();
      return;
    }
    super.click();
  }
  /**
   * Create and attach the MDC Foundation to the instance
   */
  createFoundation() {
    this.mdcFoundation !== void 0 && this.mdcFoundation.destroy(), this.mdcFoundationClass && (this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter()), this.mdcFoundation.init());
  }
  firstUpdated() {
    this.createFoundation();
  }
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ma = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = {}), this.adapter = t;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
    }, e.prototype.destroy = function() {
    }, e;
  }()
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ts = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, _s = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Cr = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function Vs(e, t, i) {
  if (!e)
    return { x: 0, y: 0 };
  var n = t.x, r = t.y, a = n + i.left, o = r + i.top, c, d;
  if (e.type === "touchstart") {
    var u = e;
    c = u.changedTouches[0].pageX - a, d = u.changedTouches[0].pageY - o;
  } else {
    var m = e;
    c = m.pageX - a, d = m.pageY - o;
  }
  return { x: c, y: d };
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Nr = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Ir = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], bi = [], Ps = (
  /** @class */
  function(e) {
    ks(t, e);
    function t(i) {
      var n = e.call(this, Xt(Xt({}, t.defaultAdapter), i)) || this;
      return n.activationAnimationHasEnded = !1, n.activationTimer = 0, n.fgDeactivationRemovalTimer = 0, n.fgScale = "0", n.frame = { width: 0, height: 0 }, n.initialSize = 0, n.layoutFrame = 0, n.maxRadius = 0, n.unboundedCoords = { left: 0, top: 0 }, n.activationState = n.defaultActivationState(), n.activationTimerCallback = function() {
        n.activationAnimationHasEnded = !0, n.runDeactivationUXLogicIfReady();
      }, n.activateHandler = function(r) {
        n.activateImpl(r);
      }, n.deactivateHandler = function() {
        n.deactivateImpl();
      }, n.focusHandler = function() {
        n.handleFocus();
      }, n.blurHandler = function() {
        n.handleBlur();
      }, n.resizeHandler = function() {
        n.layout();
      }, n;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return Ts;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return _s;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return Cr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          browserSupportsCssVars: function() {
            return !0;
          },
          computeBoundingRect: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          containsEventTarget: function() {
            return !0;
          },
          deregisterDocumentInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          },
          deregisterResizeHandler: function() {
          },
          getWindowPageOffset: function() {
            return { x: 0, y: 0 };
          },
          isSurfaceActive: function() {
            return !0;
          },
          isSurfaceDisabled: function() {
            return !0;
          },
          isUnbounded: function() {
            return !0;
          },
          registerDocumentInteractionHandler: function() {
          },
          registerInteractionHandler: function() {
          },
          registerResizeHandler: function() {
          },
          removeClass: function() {
          },
          updateCssVariable: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.init = function() {
      var i = this, n = this.supportsPressRipple();
      if (this.registerRootHandlers(n), n) {
        var r = t.cssClasses, a = r.ROOT, o = r.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.addClass(a), i.adapter.isUnbounded() && (i.adapter.addClass(o), i.layoutInternal());
        });
      }
    }, t.prototype.destroy = function() {
      var i = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(t.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(t.cssClasses.FG_DEACTIVATION));
        var n = t.cssClasses, r = n.ROOT, a = n.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.removeClass(r), i.adapter.removeClass(a), i.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, t.prototype.activate = function(i) {
      this.activateImpl(i);
    }, t.prototype.deactivate = function() {
      this.deactivateImpl();
    }, t.prototype.layout = function() {
      var i = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        i.layoutInternal(), i.layoutFrame = 0;
      });
    }, t.prototype.setUnbounded = function(i) {
      var n = t.cssClasses.UNBOUNDED;
      i ? this.adapter.addClass(n) : this.adapter.removeClass(n);
    }, t.prototype.handleFocus = function() {
      var i = this;
      requestAnimationFrame(function() {
        return i.adapter.addClass(t.cssClasses.BG_FOCUSED);
      });
    }, t.prototype.handleBlur = function() {
      var i = this;
      requestAnimationFrame(function() {
        return i.adapter.removeClass(t.cssClasses.BG_FOCUSED);
      });
    }, t.prototype.supportsPressRipple = function() {
      return this.adapter.browserSupportsCssVars();
    }, t.prototype.defaultActivationState = function() {
      return {
        activationEvent: void 0,
        hasDeactivationUXRun: !1,
        isActivated: !1,
        isProgrammatic: !1,
        wasActivatedByPointer: !1,
        wasElementMadeActive: !1
      };
    }, t.prototype.registerRootHandlers = function(i) {
      var n, r;
      if (i) {
        try {
          for (var a = fi(Nr), o = a.next(); !o.done; o = a.next()) {
            var c = o.value;
            this.adapter.registerInteractionHandler(c, this.activateHandler);
          }
        } catch (d) {
          n = { error: d };
        } finally {
          try {
            o && !o.done && (r = a.return) && r.call(a);
          } finally {
            if (n) throw n.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, t.prototype.registerDeactivationHandlers = function(i) {
      var n, r;
      if (i.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var a = fi(Ir), o = a.next(); !o.done; o = a.next()) {
            var c = o.value;
            this.adapter.registerDocumentInteractionHandler(c, this.deactivateHandler);
          }
        } catch (d) {
          n = { error: d };
        } finally {
          try {
            o && !o.done && (r = a.return) && r.call(a);
          } finally {
            if (n) throw n.error;
          }
        }
    }, t.prototype.deregisterRootHandlers = function() {
      var i, n;
      try {
        for (var r = fi(Nr), a = r.next(); !a.done; a = r.next()) {
          var o = a.value;
          this.adapter.deregisterInteractionHandler(o, this.activateHandler);
        }
      } catch (c) {
        i = { error: c };
      } finally {
        try {
          a && !a.done && (n = r.return) && n.call(r);
        } finally {
          if (i) throw i.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, t.prototype.deregisterDeactivationHandlers = function() {
      var i, n;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var r = fi(Ir), a = r.next(); !a.done; a = r.next()) {
          var o = a.value;
          this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler);
        }
      } catch (c) {
        i = { error: c };
      } finally {
        try {
          a && !a.done && (n = r.return) && n.call(r);
        } finally {
          if (i) throw i.error;
        }
      }
    }, t.prototype.removeCssVars = function() {
      var i = this, n = t.strings, r = Object.keys(n);
      r.forEach(function(a) {
        a.indexOf("VAR_") === 0 && i.adapter.updateCssVariable(n[a], null);
      });
    }, t.prototype.activateImpl = function(i) {
      var n = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var r = this.activationState;
        if (!r.isActivated) {
          var a = this.previousActivationEvent, o = a && i !== void 0 && a.type !== i.type;
          if (!o) {
            r.isActivated = !0, r.isProgrammatic = i === void 0, r.activationEvent = i, r.wasActivatedByPointer = r.isProgrammatic ? !1 : i !== void 0 && (i.type === "mousedown" || i.type === "touchstart" || i.type === "pointerdown");
            var c = i !== void 0 && bi.length > 0 && bi.some(function(d) {
              return n.adapter.containsEventTarget(d);
            });
            if (c) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (bi.push(i.target), this.registerDeactivationHandlers(i)), r.wasElementMadeActive = this.checkElementMadeActive(i), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              bi = [], !r.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (r.wasElementMadeActive = n.checkElementMadeActive(i), r.wasElementMadeActive && n.animateActivation()), r.wasElementMadeActive || (n.activationState = n.defaultActivationState());
            });
          }
        }
      }
    }, t.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, t.prototype.animateActivation = function() {
      var i = this, n = t.strings, r = n.VAR_FG_TRANSLATE_START, a = n.VAR_FG_TRANSLATE_END, o = t.cssClasses, c = o.FG_DEACTIVATION, d = o.FG_ACTIVATION, u = t.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var m = "", f = "";
      if (!this.adapter.isUnbounded()) {
        var b = this.getFgTranslationCoordinates(), A = b.startPoint, S = b.endPoint;
        m = A.x + "px, " + A.y + "px", f = S.x + "px, " + S.y + "px";
      }
      this.adapter.updateCssVariable(r, m), this.adapter.updateCssVariable(a, f), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(c), this.adapter.computeBoundingRect(), this.adapter.addClass(d), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, u);
    }, t.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, n = i.activationEvent, r = i.wasActivatedByPointer, a;
      r ? a = Vs(n, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, a = {
        x: a.x - this.initialSize / 2,
        y: a.y - this.initialSize / 2
      };
      var o = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: a, endPoint: o };
    }, t.prototype.runDeactivationUXLogicIfReady = function() {
      var i = this, n = t.cssClasses.FG_DEACTIVATION, r = this.activationState, a = r.hasDeactivationUXRun, o = r.isActivated, c = a || !o;
      c && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(n), this.fgDeactivationRemovalTimer = setTimeout(function() {
        i.adapter.removeClass(n);
      }, Cr.FG_DEACTIVATION_MS));
    }, t.prototype.rmBoundedActivationClasses = function() {
      var i = t.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(i), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, t.prototype.resetActivationState = function() {
      var i = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return i.previousActivationEvent = void 0;
      }, t.numbers.TAP_DELAY_MS);
    }, t.prototype.deactivateImpl = function() {
      var i = this, n = this.activationState;
      if (n.isActivated) {
        var r = Xt({}, n);
        n.isProgrammatic ? (requestAnimationFrame(function() {
          i.animateDeactivation(r);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          i.activationState.hasDeactivationUXRun = !0, i.animateDeactivation(r), i.resetActivationState();
        }));
      }
    }, t.prototype.animateDeactivation = function(i) {
      var n = i.wasActivatedByPointer, r = i.wasElementMadeActive;
      (n || r) && this.runDeactivationUXLogicIfReady();
    }, t.prototype.layoutInternal = function() {
      var i = this;
      this.frame = this.adapter.computeBoundingRect();
      var n = Math.max(this.frame.height, this.frame.width), r = function() {
        var o = Math.sqrt(Math.pow(i.frame.width, 2) + Math.pow(i.frame.height, 2));
        return o + t.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? n : r();
      var a = Math.floor(n * t.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, t.prototype.updateLayoutCssVars = function() {
      var i = t.strings, n = i.VAR_FG_SIZE, r = i.VAR_LEFT, a = i.VAR_TOP, o = i.VAR_FG_SCALE;
      this.adapter.updateCssVariable(n, this.initialSize + "px"), this.adapter.updateCssVariable(o, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(r, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, t;
  }(ma)
);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class Ms {
  constructor(t) {
    this.classes = /* @__PURE__ */ new Set(), this.changed = !1, this.element = t;
    const i = (t.getAttribute("class") || "").split(/\s+/);
    for (const n of i)
      this.classes.add(n);
  }
  add(t) {
    this.classes.add(t), this.changed = !0;
  }
  remove(t) {
    this.classes.delete(t), this.changed = !0;
  }
  commit() {
    if (this.changed) {
      let t = "";
      this.classes.forEach((i) => t += i + " "), this.element.setAttribute("class", t);
    }
  }
}
const kr = /* @__PURE__ */ new WeakMap(), Vt = Ci((e) => (t) => {
  if (!(t instanceof Ni) || t instanceof da || t.committer.name !== "class" || t.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = t, { element: n } = i;
  let r = kr.get(t);
  r === void 0 && (n.setAttribute("class", i.strings.join(" ")), kr.set(t, r = /* @__PURE__ */ new Set()));
  const a = n.classList || new Ms(n);
  r.forEach((o) => {
    o in e || (a.remove(o), r.delete(o));
  });
  for (const o in e) {
    const c = e[o];
    c != r.has(o) && (c ? (a.add(o), r.add(o)) : (a.remove(o), r.delete(o)));
  }
  typeof a.commit == "function" && a.commit();
});
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Dr = /* @__PURE__ */ new WeakMap(), Rs = Ci((e) => (t) => {
  if (!(t instanceof Ni) || t instanceof da || t.committer.name !== "style" || t.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = t, { style: n } = i.element;
  let r = Dr.get(t);
  r === void 0 && (n.cssText = i.strings.join(" "), Dr.set(t, r = /* @__PURE__ */ new Set())), r.forEach((a) => {
    a in e || (r.delete(a), a.indexOf("-") === -1 ? n[a] = null : n.removeProperty(a));
  });
  for (const a in e)
    r.add(a), a.indexOf("-") === -1 ? n[a] = e[a] : n.setProperty(a, e[a]);
});
class se extends En {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Ps;
  }
  get isActive() {
    return Ds(this.parentElement || this, ":active");
  }
  createAdapter() {
    return {
      browserSupportsCssVars: () => !0,
      isUnbounded: () => this.unbounded,
      isSurfaceActive: () => this.isActive,
      isSurfaceDisabled: () => this.disabled,
      addClass: (t) => {
        switch (t) {
          case "mdc-ripple-upgraded--background-focused":
            this.bgFocused = !0;
            break;
          case "mdc-ripple-upgraded--foreground-activation":
            this.fgActivation = !0;
            break;
          case "mdc-ripple-upgraded--foreground-deactivation":
            this.fgDeactivation = !0;
            break;
        }
      },
      removeClass: (t) => {
        switch (t) {
          case "mdc-ripple-upgraded--background-focused":
            this.bgFocused = !1;
            break;
          case "mdc-ripple-upgraded--foreground-activation":
            this.fgActivation = !1;
            break;
          case "mdc-ripple-upgraded--foreground-deactivation":
            this.fgDeactivation = !1;
            break;
        }
      },
      containsEventTarget: () => !0,
      registerInteractionHandler: () => {
      },
      deregisterInteractionHandler: () => {
      },
      registerDocumentInteractionHandler: () => {
      },
      deregisterDocumentInteractionHandler: () => {
      },
      registerResizeHandler: () => {
      },
      deregisterResizeHandler: () => {
      },
      updateCssVariable: (t, i) => {
        switch (t) {
          case "--mdc-ripple-fg-scale":
            this.fgScale = i;
            break;
          case "--mdc-ripple-fg-size":
            this.fgSize = i;
            break;
          case "--mdc-ripple-fg-translate-end":
            this.translateEnd = i;
            break;
          case "--mdc-ripple-fg-translate-start":
            this.translateStart = i;
            break;
          case "--mdc-ripple-left":
            this.leftPos = i;
            break;
          case "--mdc-ripple-top":
            this.topPos = i;
            break;
        }
      },
      computeBoundingRect: () => (this.parentElement || this).getBoundingClientRect(),
      getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset })
    };
  }
  startPress(t) {
    this.waitForFoundation(() => {
      this.mdcFoundation.activate(t);
    });
  }
  endPress() {
    this.waitForFoundation(() => {
      this.mdcFoundation.deactivate();
    });
  }
  startFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleFocus();
    });
  }
  endFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleBlur();
    });
  }
  startHover() {
    this.hovering = !0;
  }
  endHover() {
    this.hovering = !1;
  }
  /**
   * Wait for the MDCFoundation to be created by `firstUpdated`
   */
  waitForFoundation(t) {
    this.mdcFoundation ? t() : this.updateComplete.then(t);
  }
  update(t) {
    t.has("disabled") && this.disabled && this.endHover(), super.update(t);
  }
  /** @soyTemplate */
  render() {
    const t = this.activated && (this.primary || !this.accent), i = this.selected && (this.primary || !this.accent), n = {
      "mdc-ripple-surface--accent": this.accent,
      "mdc-ripple-surface--primary--activated": t,
      "mdc-ripple-surface--accent--activated": this.accent && this.activated,
      "mdc-ripple-surface--primary--selected": i,
      "mdc-ripple-surface--accent--selected": this.accent && this.selected,
      "mdc-ripple-surface--disabled": this.disabled,
      "mdc-ripple-surface--hover": this.hovering,
      "mdc-ripple-surface--primary": this.primary,
      "mdc-ripple-surface--selected": this.selected,
      "mdc-ripple-upgraded--background-focused": this.bgFocused,
      "mdc-ripple-upgraded--foreground-activation": this.fgActivation,
      "mdc-ripple-upgraded--foreground-deactivation": this.fgDeactivation,
      "mdc-ripple-upgraded--unbounded": this.unbounded,
      "mdc-ripple-surface--internal-use-state-layer-custom-properties": this.internalUseStateLayerCustomProperties
    };
    return p`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Vt(n)}"
          style="${Rs({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
N([
  Y(".mdc-ripple-surface")
], se.prototype, "mdcRoot", void 0);
N([
  y({ type: Boolean })
], se.prototype, "primary", void 0);
N([
  y({ type: Boolean })
], se.prototype, "accent", void 0);
N([
  y({ type: Boolean })
], se.prototype, "unbounded", void 0);
N([
  y({ type: Boolean })
], se.prototype, "disabled", void 0);
N([
  y({ type: Boolean })
], se.prototype, "activated", void 0);
N([
  y({ type: Boolean })
], se.prototype, "selected", void 0);
N([
  y({ type: Boolean })
], se.prototype, "internalUseStateLayerCustomProperties", void 0);
N([
  B()
], se.prototype, "hovering", void 0);
N([
  B()
], se.prototype, "bgFocused", void 0);
N([
  B()
], se.prototype, "fgActivation", void 0);
N([
  B()
], se.prototype, "fgDeactivation", void 0);
N([
  B()
], se.prototype, "fgScale", void 0);
N([
  B()
], se.prototype, "fgSize", void 0);
N([
  B()
], se.prototype, "translateStart", void 0);
N([
  B()
], se.prototype, "translateEnd", void 0);
N([
  B()
], se.prototype, "leftPos", void 0);
N([
  B()
], se.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Os = we`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let dn = class extends se {
};
dn.styles = [Os];
dn = N([
  pe("mwc-ripple")
], dn);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const lt = (e) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (t, i) => {
    if (t.constructor._observers) {
      if (!t.constructor.hasOwnProperty("_observers")) {
        const n = t.constructor._observers;
        t.constructor._observers = /* @__PURE__ */ new Map(), n.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (r, a) => t.constructor._observers.set(a, r)
        );
      }
    } else {
      t.constructor._observers = /* @__PURE__ */ new Map();
      const n = t.updated;
      t.updated = function(r) {
        n.call(this, r), r.forEach((a, o) => {
          const d = this.constructor._observers.get(o);
          d !== void 0 && d.call(this, this[o], a);
        });
      };
    }
    t.constructor._observers.set(i, e);
  }
);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ha {
  constructor(t) {
    this.startPress = (i) => {
      t().then((n) => {
        n && n.startPress(i);
      });
    }, this.endPress = () => {
      t().then((i) => {
        i && i.endPress();
      });
    }, this.startFocus = () => {
      t().then((i) => {
        i && i.startFocus();
      });
    }, this.endFocus = () => {
      t().then((i) => {
        i && i.endFocus();
      });
    }, this.startHover = () => {
      t().then((i) => {
        i && i.startHover();
      });
    }, this.endHover = () => {
      t().then((i) => {
        i && i.endHover();
      });
    };
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class me extends $e {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new ha(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
      {
        target: this,
        eventNames: ["click"],
        cb: () => {
          this.onClick();
        }
      },
      {
        target: this,
        eventNames: ["mouseenter"],
        cb: this.rippleHandlers.startHover
      },
      {
        target: this,
        eventNames: ["mouseleave"],
        cb: this.rippleHandlers.endHover
      },
      {
        target: this,
        eventNames: ["focus"],
        cb: this.rippleHandlers.startFocus
      },
      {
        target: this,
        eventNames: ["blur"],
        cb: this.rippleHandlers.endFocus
      },
      {
        target: this,
        eventNames: ["mousedown", "touchstart"],
        cb: (t) => {
          const i = t.type;
          this.onDown(i === "mousedown" ? "mouseup" : "touchend", t);
        }
      }
    ];
  }
  get text() {
    const t = this.textContent;
    return t ? t.trim() : "";
  }
  render() {
    const t = this.renderText(), i = this.graphic ? this.renderGraphic() : p``, n = this.hasMeta ? this.renderMeta() : p``;
    return p`
      ${this.renderRipple()}
      ${i}
      ${t}
      ${n}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? p`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? p`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const t = {
      multi: this.multipleGraphics
    };
    return p`
      <span class="mdc-deprecated-list-item__graphic material-icons ${Vt(t)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return p`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const t = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return p`
      <span class="mdc-deprecated-list-item__text">
        ${t}
      </span>`;
  }
  renderSingleLine() {
    return p`<slot></slot>`;
  }
  renderTwoline() {
    return p`
      <span class="mdc-deprecated-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-deprecated-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `;
  }
  onClick() {
    this.fireRequestSelected(!this.selected, "interaction");
  }
  onDown(t, i) {
    const n = () => {
      window.removeEventListener(t, n), this.rippleHandlers.endPress();
    };
    window.addEventListener(t, n), this.rippleHandlers.startPress(i);
  }
  fireRequestSelected(t, i) {
    if (this.noninteractive)
      return;
    const n = new CustomEvent("request-selected", { bubbles: !0, composed: !0, detail: { source: i, selected: t } });
    this.dispatchEvent(n);
  }
  connectedCallback() {
    super.connectedCallback(), this.noninteractive || this.setAttribute("mwc-list-item", "");
    for (const t of this.listeners)
      for (const i of t.eventNames)
        t.target.addEventListener(i, t.cb, { passive: !0 });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const t of this.listeners)
      for (const i of t.eventNames)
        t.target.removeEventListener(i, t.cb);
    this._managingList && (this._managingList.debouncedLayout ? this._managingList.debouncedLayout(!0) : this._managingList.layout(!0));
  }
  // composed flag, event fire through shadow root and up through composed tree
  firstUpdated() {
    const t = new Event("list-item-rendered", { bubbles: !0, composed: !0 });
    this.dispatchEvent(t);
  }
}
N([
  Y("slot")
], me.prototype, "slotElement", void 0);
N([
  ia("mwc-ripple")
], me.prototype, "ripple", void 0);
N([
  y({ type: String })
], me.prototype, "value", void 0);
N([
  y({ type: String, reflect: !0 })
], me.prototype, "group", void 0);
N([
  y({ type: Number, reflect: !0 })
], me.prototype, "tabindex", void 0);
N([
  y({ type: Boolean, reflect: !0 }),
  lt(function(e) {
    e ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], me.prototype, "disabled", void 0);
N([
  y({ type: Boolean, reflect: !0 })
], me.prototype, "twoline", void 0);
N([
  y({ type: Boolean, reflect: !0 })
], me.prototype, "activated", void 0);
N([
  y({ type: String, reflect: !0 })
], me.prototype, "graphic", void 0);
N([
  y({ type: Boolean })
], me.prototype, "multipleGraphics", void 0);
N([
  y({ type: Boolean })
], me.prototype, "hasMeta", void 0);
N([
  y({ type: Boolean, reflect: !0 }),
  lt(function(e) {
    e ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], me.prototype, "noninteractive", void 0);
N([
  y({ type: Boolean, reflect: !0 }),
  lt(function(e) {
    const t = this.getAttribute("role"), i = t === "gridcell" || t === "option" || t === "row" || t === "tab";
    if (i && e ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(e, "property");
  })
], me.prototype, "selected", void 0);
N([
  B()
], me.prototype, "shouldRenderRipple", void 0);
N([
  B()
], me.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const fa = we`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let un = class extends me {
};
un.styles = [fa];
un = N([
  pe("mwc-list-item")
], un);
var Fs = Object.defineProperty, qs = Object.getOwnPropertyDescriptor, Pe = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? qs(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && Fs(t, i, r), r;
};
let ye = class extends Jo {
  constructor() {
    super(), this.nullable = !1, this.multipliers = [null, ""], this.multiplierIndex = 0, this.unit = "", this.isNull = !1, this.defaultValue = "", this.reservedValues = [], this.disabledSwitch = !1, this.nulled = null, this.disabledSwitch = this.hasAttribute("disabled");
  }
  get multiplier() {
    return this.unit == "" ? null : this.multipliers[this.multiplierIndex] ?? this.multipliers[0] ?? null;
  }
  set multiplier(e) {
    const t = this.multipliers.indexOf(e);
    t >= 0 && (this.multiplierIndex = t), this.suffix = (this.multiplier ?? "") + this.unit;
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(e) {
    !this.nullable || e === this.isNull || (this.isNull = e, this.null ? this.disable() : this.enable());
  }
  get maybeValue() {
    return this.null ? null : this.value;
  }
  set maybeValue(e) {
    e === null ? this.null = !0 : (this.null = !1, this.value = e);
  }
  selectMultiplier(e) {
    this.multiplier = this.multipliers[e.detail.index];
  }
  enable() {
    this.nulled !== null && (this.value = this.nulled, this.nulled = null, this.helperPersistent = !1, this.disabled = !1);
  }
  disable() {
    this.nulled === null && (this.nulled = this.value, this.value = this.defaultValue, this.helperPersistent = !0, this.disabled = !0);
  }
  async firstUpdated() {
    await super.firstUpdated(), this.multiplierMenu && (this.multiplierMenu.anchor = this.multiplierButton ?? null);
  }
  checkValidity() {
    return this.reservedValues && this.reservedValues.some((e) => e === this.value) ? (this.setCustomValidity(l("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? p`<div style="position:relative;">
        <mwc-icon-button
          style="margin:5px;"
          icon="more"
          ?disabled=${this.null || this.disabledSwitch}
          @click=${() => this.multiplierMenu?.show()}
        ></mwc-icon-button>
        <mwc-menu
          @selected=${this.selectMultiplier}
          fixed
          .anchor=${this.multiplierButton ?? null}
          >${this.renderMulplierList()}</mwc-menu
        >
      </div>` : p``;
  }
  renderMulplierList() {
    return p`${this.multipliers.map(
      (e) => p`<mwc-list-item ?selected=${e === this.multiplier}
          >${e === null ? l("textfield.noMultiplier") : e}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? p`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : p``;
  }
  render() {
    return p`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        ${this.renderUnitSelector()}
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
Pe([
  y({ type: Boolean })
], ye.prototype, "nullable", 2);
Pe([
  y({ type: Array })
], ye.prototype, "multipliers", 2);
Pe([
  y({ type: String })
], ye.prototype, "multiplier", 1);
Pe([
  y({ type: String })
], ye.prototype, "unit", 2);
Pe([
  B()
], ye.prototype, "null", 1);
Pe([
  y({ type: String })
], ye.prototype, "maybeValue", 1);
Pe([
  y({ type: String })
], ye.prototype, "defaultValue", 2);
Pe([
  y({ type: Array })
], ye.prototype, "reservedValues", 2);
Pe([
  Y("mwc-switch")
], ye.prototype, "nullSwitch", 2);
Pe([
  Y("mwc-menu")
], ye.prototype, "multiplierMenu", 2);
Pe([
  Y("mwc-icon-button")
], ye.prototype, "multiplierButton", 2);
ye = Pe([
  pe("wizard-textfield")
], ye);
var Hs = Object.defineProperty, Bs = Object.getOwnPropertyDescriptor, Ct = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Bs(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && Hs(t, i, r), r;
};
let Je = class extends Qo {
  constructor() {
    super(), this.nullable = !1, this.isNull = !1, this.defaultValue = "", this.reservedValues = [], this.disabledSwitch = !1, this.nulled = null, this.disabledSwitch = this.hasAttribute("disabled");
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(e) {
    !this.nullable || e === this.isNull || (this.isNull = e, this.null ? this.disable() : this.enable());
  }
  get maybeValue() {
    return this.null ? null : this.value;
  }
  set maybeValue(e) {
    e === null ? this.null = !0 : (this.null = !1, this.value = e);
  }
  enable() {
    this.nulled !== null && (this.value = this.nulled, this.nulled = null, this.disabled = !1);
  }
  disable() {
    this.nulled === null && (this.nulled = this.value, this.value = this.defaultValue, this.disabled = !0);
  }
  async firstUpdated() {
    await super.firstUpdated();
  }
  checkValidity() {
    return this.nullable && !this.nullSwitch?.checked ? !0 : super.checkValidity();
  }
  renderSwitch() {
    return this.nullable ? p`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : p``;
  }
  render() {
    return p`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
Ct([
  y({ type: Boolean })
], Je.prototype, "nullable", 2);
Ct([
  B()
], Je.prototype, "null", 1);
Ct([
  y({ type: String })
], Je.prototype, "maybeValue", 1);
Ct([
  y({ type: String })
], Je.prototype, "defaultValue", 2);
Ct([
  y({ type: Array })
], Je.prototype, "reservedValues", 2);
Ct([
  Y("mwc-switch")
], Je.prototype, "nullSwitch", 2);
Je = Ct([
  pe("wizard-select")
], Je);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Gs(e, t, i) {
  const n = e.constructor;
  if (!i) {
    const c = `__${t}`;
    if (i = n.getPropertyDescriptor(t, c), !i)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const r = i;
  let a = "";
  if (!r.set)
    throw new Error(`@ariaProperty requires a setter for ${t}`);
  const o = {
    configurable: !0,
    enumerable: !0,
    set(c) {
      a === "" && (a = n.getPropertyOptions(t).attribute), this.hasAttribute(a) && this.removeAttribute(a), r.set.call(this, c);
    }
  };
  return r.get && (o.get = function() {
    return r.get.call(this);
  }), o;
}
function Cn(e, t, i) {
  if (t !== void 0)
    return Gs(e, t, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ba extends En {
  click() {
    this.formElement && (this.formElement.focus(), this.formElement.click());
  }
  setAriaLabel(t) {
    this.formElement && this.formElement.setAttribute("aria-label", t);
  }
  firstUpdated() {
    super.firstUpdated(), this.shadowRoot && this.mdcRoot.addEventListener("change", (t) => {
      this.dispatchEvent(new Event("change", t));
    });
  }
}
ba.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const tn = /* @__PURE__ */ new WeakMap(), Xe = Ci((e) => (t) => {
  const i = tn.get(t);
  if (e === void 0 && t instanceof Ni) {
    if (i !== void 0 || !tn.has(t)) {
      const n = t.committer.name;
      t.committer.element.removeAttribute(n);
    }
  } else e !== i && t.setValue(e);
  tn.set(t, e);
});
class le extends ba {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new ha(() => (this.shouldRenderRipple = !0, this.ripple.then((t) => this.rippleElement = t), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(t) {
    const i = t.get("indeterminate"), n = t.get("checked"), r = t.get("disabled");
    if (i !== void 0 || n !== void 0 || r !== void 0) {
      const a = this.calculateAnimationStateName(!!n, !!i, !!r), o = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${a}-${o}`;
    }
    super.update(t);
  }
  calculateAnimationStateName(t, i, n) {
    return n ? "disabled" : i ? "indeterminate" : t ? "checked" : "unchecked";
  }
  // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? p`<mwc-ripple
        .disabled="${this.disabled}"
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
        unbounded></mwc-ripple>` : "";
  }
  /**
   * @soyTemplate
   * @soyAttributes checkboxAttributes: input
   * @soyClasses checkboxClasses: .mdc-checkbox
   */
  render() {
    const t = this.indeterminate || this.checked, i = {
      "mdc-checkbox--disabled": this.disabled,
      "mdc-checkbox--selected": t,
      "mdc-checkbox--touch": !this.reducedTouchTarget,
      "mdc-ripple-upgraded--background-focused": this.focused,
      // transition animiation classes
      "mdc-checkbox--anim-checked-indeterminate": this.animationClass == "checked-indeterminate",
      "mdc-checkbox--anim-checked-unchecked": this.animationClass == "checked-unchecked",
      "mdc-checkbox--anim-indeterminate-checked": this.animationClass == "indeterminate-checked",
      "mdc-checkbox--anim-indeterminate-unchecked": this.animationClass == "indeterminate-unchecked",
      "mdc-checkbox--anim-unchecked-checked": this.animationClass == "unchecked-checked",
      "mdc-checkbox--anim-unchecked-indeterminate": this.animationClass == "unchecked-indeterminate"
    }, n = this.indeterminate ? "mixed" : void 0;
    return p`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Vt(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${Xe(this.name)}"
              aria-checked="${Xe(n)}"
              aria-label="${Xe(this.ariaLabel)}"
              aria-labelledby="${Xe(this.ariaLabelledBy)}"
              aria-describedby="${Xe(this.ariaDescribedBy)}"
              data-indeterminate="${this.indeterminate ? "true" : "false"}"
              ?disabled="${this.disabled}"
              .indeterminate="${this.indeterminate}"
              .checked="${this.checked}"
              .value="${this.value}"
              @change="${this.handleChange}"
              @focus="${this.handleFocus}"
              @blur="${this.handleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-checkbox__background"
          @animationend="${this.resetAnimationClass}">
          <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
        ${this.renderRipple()}
      </div>`;
  }
  handleFocus() {
    this.focused = !0, this.handleRippleFocus();
  }
  handleBlur() {
    this.focused = !1, this.handleRippleBlur();
  }
  handleRippleMouseDown(t) {
    const i = () => {
      window.removeEventListener("mouseup", i), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", i), this.rippleHandlers.startPress(t);
  }
  handleRippleTouchStart(t) {
    this.rippleHandlers.startPress(t);
  }
  handleRippleDeactivate() {
    this.rippleHandlers.endPress();
  }
  handleRippleMouseEnter() {
    this.rippleHandlers.startHover();
  }
  handleRippleMouseLeave() {
    this.rippleHandlers.endHover();
  }
  handleRippleFocus() {
    this.rippleHandlers.startFocus();
  }
  handleRippleBlur() {
    this.rippleHandlers.endFocus();
  }
  handleChange() {
    this.checked = this.formElement.checked, this.indeterminate = this.formElement.indeterminate;
  }
  resetAnimationClass() {
    this.animationClass = "";
  }
  get isRippleActive() {
    var t;
    return ((t = this.rippleElement) === null || t === void 0 ? void 0 : t.isActive) || !1;
  }
}
N([
  Y(".mdc-checkbox")
], le.prototype, "mdcRoot", void 0);
N([
  Y("input")
], le.prototype, "formElement", void 0);
N([
  y({ type: Boolean, reflect: !0 })
], le.prototype, "checked", void 0);
N([
  y({ type: Boolean })
], le.prototype, "indeterminate", void 0);
N([
  y({ type: Boolean, reflect: !0 })
], le.prototype, "disabled", void 0);
N([
  y({ type: String, reflect: !0 })
], le.prototype, "name", void 0);
N([
  y({ type: String })
], le.prototype, "value", void 0);
N([
  Cn,
  y({ type: String, attribute: "aria-label" })
], le.prototype, "ariaLabel", void 0);
N([
  Cn,
  y({ type: String, attribute: "aria-labelledby" })
], le.prototype, "ariaLabelledBy", void 0);
N([
  Cn,
  y({ type: String, attribute: "aria-describedby" })
], le.prototype, "ariaDescribedBy", void 0);
N([
  y({ type: Boolean })
], le.prototype, "reducedTouchTarget", void 0);
N([
  B()
], le.prototype, "animationClass", void 0);
N([
  B()
], le.prototype, "shouldRenderRipple", void 0);
N([
  B()
], le.prototype, "focused", void 0);
N([
  B()
], le.prototype, "useStateLayerCustomProperties", void 0);
N([
  ia("mwc-ripple")
], le.prototype, "ripple", void 0);
N([
  Ko({ passive: !0 })
], le.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ws = we`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let pn = class extends le {
};
pn.styles = [Ws];
pn = N([
  pe("mwc-checkbox")
], pn);
var js = Object.defineProperty, Us = Object.getOwnPropertyDescriptor, Le = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Us(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && js(t, i, r), r;
};
let ve = class extends $e {
  constructor() {
    super(...arguments), this.label = "", this.helper = "", this.nullable = !1, this.defaultChecked = !1, this.disabled = !1, this.isNull = !1, this.initChecked = !1, this.deactivateCheckbox = !1, this.nulled = null;
  }
  get maybeValue() {
    return this.null ? null : this.checked ? "true" : "false";
  }
  set maybeValue(e) {
    e === null ? this.null = !0 : (this.null = !1, this.checked = e === "true");
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(e) {
    !this.nullable || e === this.isNull || (this.isNull = e, this.null ? this.disable() : this.enable());
  }
  get checked() {
    return this.checkbox?.checked ?? this.initChecked;
  }
  set checked(e) {
    this.checkbox ? this.checkbox.checked = e : this.initChecked = e;
  }
  get formfieldLabel() {
    return this.helper ? `${this.helper} (${this.label})` : this.label;
  }
  enable() {
    this.nulled !== null && (this.checked = this.nulled, this.nulled = null, this.deactivateCheckbox = !1);
  }
  disable() {
    this.nulled === null && (this.nulled = this.checked, this.checked = this.defaultChecked, this.deactivateCheckbox = !0);
  }
  firstUpdated() {
    this.requestUpdate();
  }
  renderSwitch() {
    return this.nullable ? p`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : p``;
  }
  render() {
    return p`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">
          <mwc-formfield
            label="${this.formfieldLabel}"
            style="${this.deactivateCheckbox || this.disabled ? "--mdc-theme-text-primary-on-background:rgba(0, 0, 0, 0.38)" : ""}"
            ><mwc-checkbox
              ?checked=${this.initChecked}
              ?disabled=${this.deactivateCheckbox || this.disabled}
            ></mwc-checkbox
          ></mwc-formfield>
        </div>
        <div style="display: flex; align-items: center;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
Le([
  y({ type: String })
], ve.prototype, "label", 2);
Le([
  y({ type: String })
], ve.prototype, "helper", 2);
Le([
  y({ type: Boolean })
], ve.prototype, "nullable", 2);
Le([
  y({ type: Boolean })
], ve.prototype, "defaultChecked", 2);
Le([
  y({ type: String })
], ve.prototype, "maybeValue", 1);
Le([
  y({ type: Boolean })
], ve.prototype, "disabled", 2);
Le([
  B()
], ve.prototype, "null", 1);
Le([
  B()
], ve.prototype, "checked", 1);
Le([
  B()
], ve.prototype, "deactivateCheckbox", 2);
Le([
  B()
], ve.prototype, "formfieldLabel", 1);
Le([
  Y("mwc-switch")
], ve.prototype, "nullSwitch", 2);
Le([
  Y("mwc-checkbox")
], ve.prototype, "checkbox", 2);
ve = Le([
  pe("wizard-checkbox")
], ve);
function Ks(e) {
  return typeof e == "function";
}
function g(e) {
  return e instanceof ye || e instanceof Je || e instanceof ve ? e.maybeValue : e.value ?? null;
}
function Nn(e) {
  return e instanceof ye ? e.multiplier : null;
}
function oe(e, t) {
  if (!e)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...t,
      detail: { wizard: null, ...t?.detail }
    });
  const i = Ks(e) ? e : () => e;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { wizard: i, ...t?.detail }
  });
}
function Nt(e) {
  return oe(e, { detail: { subwizard: !0 } });
}
function Zs(e) {
  let t = "", i = e.parentElement;
  for (; i?.getAttribute("name"); )
    t = "/" + i.getAttribute("name") + t, i = i.parentElement;
  return t;
}
function St(e) {
  const t = e.getAttribute("name");
  return t || void 0;
}
function mn(e) {
  const t = e.getAttribute("desc");
  return t || void 0;
}
function Ei(e) {
  const t = e.getAttribute("pathName");
  return t || void 0;
}
function be(e) {
  const t = e.split(">"), i = t.pop() ?? "";
  return [t.join(">"), i];
}
const ae = ":not(*)";
function Xs(e) {
  return `${e.getAttribute("version")}	${e.getAttribute("revision")}`;
}
function Ys(e, t) {
  const [i, n] = t.split("	");
  return !i || !n ? ae : `${e}[version="${i}"][revision="${n}"]`;
}
function $r(e) {
  return P(e.parentElement) + ">" + e.getAttribute("connectivityNode");
}
function Lr(e, t) {
  const [i, n] = be(t), r = ee[e].parents.flatMap(
    (a) => he(a, i).split(",")
  );
  return ue(
    r,
    [">"],
    [`${e}[connectivityNode="${n}"]`]
  ).map((a) => a.join("")).join(",");
}
function Qs(e) {
  const [t, i, n, r, a, o] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((c) => e.getAttribute(c));
  return t === "None" ? `${P(e.parentElement)}>(${r} ${o} ${a})` : `${t} ${i || "(Client)"}/${n ?? ""} ${r} ${a ?? ""}`;
}
function Js(e, t) {
  if (t.endsWith(")")) {
    const [b, A] = be(t), [S, C, E] = A.substring(1, A.length - 1).split(" ");
    if (!S || !C) return ae;
    const x = ee[e].parents.flatMap(
      (F) => he(F, b).split(",")
    );
    return ue(
      x,
      [">"],
      [`${e}[iedName="None"][lnClass="${S}"][lnType="${C}"][lnInst="${E}"]`]
    ).map((F) => F.join("")).join(",");
  }
  const [i, n, r, a, o] = t.split(/[ /]/);
  if (!i || !n || !a) return ae;
  const [
    c,
    d,
    u,
    m,
    f
  ] = [
    [`[iedName="${i}"]`],
    n === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${n}"]`],
    r ? [`[prefix="${r}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    o ? [`[lnInst="${o}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return ue(
    [e],
    c,
    d,
    u,
    m,
    f
  ).map((b) => b.join("")).join(",");
}
function ec(e) {
  return `${P(e.parentElement)}>${e.getAttribute(
    "iedName"
  )} ${e.getAttribute("apName")}`;
}
function tc(e, t) {
  const [i, n] = be(t), [r, a] = n.split(" ");
  return `${he(
    "IED",
    i
  )}>${e}[iedName="${r}"][apName="${a}"]`;
}
function ic(e) {
  return `${P(e.parentElement)}>${e.getAttribute("associationID") ?? ""}`;
}
function nc(e, t) {
  const [i, n] = be(t);
  return n ? `${he(
    "Server",
    i
  )}>${e}[associationID="${n}"]` : ae;
}
function rc(e) {
  return `${P(e.closest("IED"))}>>${e.getAttribute("inst")}`;
}
function ac(e, t) {
  const [i, n] = t.split(">>");
  return n ? `IED[name="${i}"] ${e}[inst="${n}"]` : ae;
}
function oc(e) {
  const t = e.textContent, [i, n, r, a, o] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((c) => e.getAttribute(c));
  return `${P(e.parentElement)}>${t} ${i || ""} ${n || ""}/${r ?? ""} ${a ?? ""} ${o ?? ""}`;
}
function sc(e, t) {
  const [i, n] = be(t), [r, a, o, c, d, u] = n.split(/[ /]/), [
    m,
    f,
    b,
    A,
    S,
    C
  ] = [
    ee[e].parents.flatMap(
      (E) => he(E, i).split(",")
    ),
    [`${r}`],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${d}"]`],
    u ? [`[lnInst="${u}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return ue(
    m,
    [">"],
    [e],
    f,
    b,
    A,
    S,
    C
  ).map((E) => E.join("")).join(",");
}
function cc(e) {
  const [t, i, n, r, a, o, c, d] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((m) => e.getAttribute(m)), u = `${t}/${i ?? ""} ${n} ${r ?? ""}.${a} ${o || ""}`;
  return `${P(e.parentElement)}>${u} (${c}${d ? " [" + d + "]" : ""})`;
}
function lc(e, t) {
  const [i, n] = be(t), [r, a, o, c] = n.split(/[ /.]/), d = n.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), u = d && d[1] ? d[1] : "", m = d && d[2] ? d[2] : "", f = n.match(/\(([A-Z]{2})/), b = n.match(/ \[([0-9]{1,2})\]/), A = f && f[1] ? f[1] : "", S = b && b[1] ? b[1] : "", [
    C,
    E,
    x,
    F,
    q,
    R,
    te,
    ke,
    T
  ] = [
    ee[e].parents.flatMap(
      (I) => he(I, i).split(",")
    ),
    [`[ldInst="${r}"]`],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    c ? [`[lnInst="${c}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${u}"]`],
    m ? [`[daName="${m}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${A}"]`],
    S ? [`[ix="${S}"]`] : [":not([ix])", '[ix=""]']
  ];
  return ue(
    C,
    [">"],
    [e],
    E,
    x,
    F,
    q,
    R,
    te,
    ke,
    T
  ).map((I) => I.join("")).join(",");
}
function dc(e) {
  if (!e.parentElement) return NaN;
  const t = P(e.parentElement), i = e.getAttribute("iedName"), n = e.getAttribute("intAddr"), r = Array.from(
    e.parentElement.querySelectorAll(`ExtRef[intAddr="${n}"]`)
  ).indexOf(e);
  if (n) return `${t}>${n}[${r}]`;
  const [
    a,
    o,
    c,
    d,
    u,
    m,
    f,
    b,
    A,
    S,
    C,
    E
  ] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "serviceType",
    "srcLDInst",
    "srcPrefix",
    "srcLNClass",
    "srcLNInst",
    "srcCBName"
  ].map((q) => e.getAttribute(q)), x = E ? `${f}:${E} ${b ?? ""}/${A ?? ""} ${S ?? ""} ${C ?? ""}` : "", F = `${i} ${a}/${o ?? ""} ${c} ${d ?? ""} ${u} ${m || ""}`;
  return `${t}>${x ? x + " " : ""}${F}${n ? `@${n}` : ""}`;
}
function uc(e, t) {
  const [i, n] = be(t), r = ee[e].parents.flatMap(
    (ie) => he(ie, i).split(",")
  );
  if (n.endsWith("]")) {
    const [ie] = n.split("["), ge = [`[intAddr="${ie}"]`];
    return ue(r, [">"], [e], ge).map((Se) => Se.join("")).join(",");
  }
  let a, o, c, d, u, m, f, b, A, S, C, E, x, F;
  !n.includes(":") && !n.includes("@") ? [a, o, c, d, u, m, f] = n.split(/[ /]/) : n.includes(":") && !n.includes("@") ? [
    b,
    A,
    S,
    C,
    E,
    x,
    a,
    o,
    c,
    d,
    u,
    m,
    f
  ] = n.split(/[ /:]/) : !n.includes(":") && n.includes("@") ? [a, o, c, d, u, m, f, F] = n.split(/[ /@]/) : [
    b,
    A,
    S,
    C,
    E,
    x,
    a,
    o,
    c,
    d,
    u,
    m,
    f,
    F
  ] = n.split(/[ /:@]/);
  const [
    q,
    R,
    te,
    ke,
    T,
    I,
    _,
    M,
    ce,
    ne,
    L,
    tt,
    it,
    je
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])"],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    d ? [`[lnClass="${d}"]`] : [":not([lnClass])"],
    u ? [`[lnInst="${u}"]`] : [":not([lnInst])", '[lnInst=""]'],
    m ? [`[doName="${m}"]`] : [":not([doName])"],
    f ? [`[daName="${f}"]`] : [":not([daName])", '[daName=""]'],
    b ? [`[serviceType="${b}"]`] : [":not([serviceType])", '[serviceType=""]'],
    A ? [`[srcCBName="${A}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    S ? [`[srcLDInst="${S}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    C ? [`[srcPrefix="${C}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    E ? [`[srcLNClass="${E}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    x ? [`[srcLNInst="${x}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    F ? [`[intAddr="${F}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return ue(
    r,
    [">"],
    [e],
    q,
    R,
    te,
    ke,
    T,
    I,
    _,
    M,
    ce,
    ne,
    L,
    tt,
    it,
    je
  ).map((ie) => ie.join("")).join(",");
}
function pc(e) {
  const [t, i, n] = ["prefix", "lnClass", "inst"].map(
    (r) => e.getAttribute(r)
  );
  return `${P(e.parentElement)}>${t ?? ""} ${i} ${n}`;
}
function mc(e, t) {
  const [i, n] = be(t), r = ee[e].parents.flatMap(
    (f) => he(f, i).split(",")
  ), [a, o, c] = n.split(" ");
  if (!o) return ae;
  const [d, u, m] = [
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    [`[inst="${c}"]`]
  ];
  return ue(
    r,
    [">"],
    [e],
    d,
    u,
    m
  ).map((f) => f.join("")).join(",");
}
function hc(e) {
  const [t, i, n, r, a, o] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((c) => e.getAttribute(c));
  return `${P(e.parentElement)}>${i} ${t || ""} ${n}/${r ?? ""} ${a} ${o}`;
}
function fc(e, t) {
  const [i, n] = be(t), r = ee[e].parents.flatMap(
    (x) => he(x, i).split(",")
  ), [a, o, c, d, u, m] = n.split(/[ /]/), [
    f,
    b,
    A,
    S,
    C,
    E
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])", '[iedName=""]'],
    o ? [`[apRef="${o}"]`] : [":not([apRef])", '[apRef=""]'],
    c ? [`[ldInst="${c}"]`] : [":not([ldInst])", '[ldInst=""]'],
    d ? [`[prefix="${d}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${u}"]`],
    m ? [`[lnInst="${m}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return ue(
    r,
    [">"],
    [e],
    f,
    b,
    A,
    S,
    C,
    E
  ).map((x) => x.join("")).join(",");
}
function zr(e) {
  const [t, i] = ["name", "ix"].map((n) => e.getAttribute(n));
  return `${P(e.parentElement)}>${t}${i ? "[" + i + "]" : ""}`;
}
function hn(e, t, i = -1) {
  i === -1 && (i = t.split(">").length);
  const [n, r] = be(t), [a, o, c, d] = r.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!o) return ae;
  if (i === 0) return `${e}[name="${o}"]`;
  const u = ee[e].parents.flatMap(
    (b) => b === "SDI" ? hn(b, n, i - 1).split(",") : he(b, n).split(",")
  ).filter((b) => !b.startsWith(ae));
  if (u.length === 0) return ae;
  const [m, f] = [
    [`[name="${o}"]`],
    d ? [`[ix="${d}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return ue(
    u,
    [">"],
    [e],
    m,
    f
  ).map((b) => b.join("")).join(",");
}
function bc(e) {
  if (!e.parentElement) return NaN;
  const t = e.getAttribute("sGroup"), i = Array.from(e.parentElement.children).filter((n) => n.getAttribute("sGroup") === t).findIndex((n) => n.isSameNode(e));
  return `${P(e.parentElement)}>${t ? t + "." : ""} ${i}`;
}
function gc(e, t) {
  const [i, n] = be(t), [r, a] = n.split(" "), o = parseFloat(a), c = ee[e].parents.flatMap(
    (m) => he(m, i).split(",")
  ), [d, u] = [
    r ? [`[sGroup="${r}"]`] : [""],
    o ? [`:nth-child(${o + 1})`] : [""]
  ];
  return ue(
    c,
    [">"],
    [e],
    d,
    u
  ).map((m) => m.join("")).join(",");
}
function yc(e) {
  const [t, i] = ["iedName", "apName"].map(
    (n) => e.getAttribute(n)
  );
  return `${t} ${i}`;
}
function vc(e, t) {
  const [i, n] = t.split(" ");
  return !i || !n ? ae : `${e}[iedName="${i}"][apName="${n}"]`;
}
function Tr(e) {
  const [t, i] = ["ldInst", "cbName"].map(
    (n) => e.getAttribute(n)
  );
  return `${t} ${i}`;
}
function _r(e, t) {
  const [i, n] = t.split(" ");
  return !i || !n ? ae : `${e}[ldInst="${i}"][cbName="${n}"]`;
}
function wc(e) {
  if (!e.parentElement) return NaN;
  if (!e.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const t = e.getAttribute("type");
  return e.parentElement.children.length > 1 && t !== "Connection" && t !== "RedConn" ? NaN : `${P(e.parentElement)}>${t}`;
}
function Ac(e, t) {
  const [i, n] = be(t), [r, a] = [
    ee[e].parents.flatMap(
      (o) => he(o, i).split(",")
    ),
    n ? [`[type="${n}"]`] : [""]
  ];
  return ue(r, [">"], [e], a).map((o) => o.join("")).join(",");
}
function xc(e) {
  if (!e.parentElement) return NaN;
  const t = e.parentElement, i = e.getAttribute("type");
  if (t.tagName === "PhysConn")
    return `${P(e.parentElement)}>${i}`;
  const n = Array.from(e.parentElement.children).filter((r) => r.getAttribute("type") === i).findIndex((r) => r.isSameNode(e));
  return `${P(e.parentElement)}>${i} [${n}]`;
}
function Sc(e, t) {
  const [i, n] = be(t), [r] = n.split(" "), a = n && n.match(/\[([0-9]+)\]/) && n.match(/\[([0-9]+)\]/)[1] ? parseFloat(n.match(/\[([0-9]+)\]/)[1]) : NaN, [o, c, d] = [
    ee[e].parents.flatMap(
      (u) => he(u, i).split(",")
    ),
    [`[type="${r}"]`],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return ue(
    o,
    [">"],
    [e],
    c,
    d
  ).map((u) => u.join("")).join(",");
}
function Ec(e) {
  return `${P(e.parentElement)}>${e.getAttribute("ord")}`;
}
function Cc(e, t) {
  const [i, n] = be(t);
  return `${he("EnumType", i)}>${e}[ord="${n}"]`;
}
function Nc(e) {
  return `${P(e.parentElement)}>${e.getAttribute("type") || "8-MMS"}	${e.textContent}`;
}
function Ic(e, t) {
  const [i, n] = be(t), [r, a] = n.split("	"), [o] = [
    ee[e].parents.flatMap(
      (c) => he(c, i).split(",")
    )
  ];
  return ue(
    o,
    [">"],
    [e],
    [`[type="${r}"]`],
    [">"],
    [a]
  ).map((c) => c.join("")).join(",");
}
function kc() {
  return "";
}
function Dc() {
  return ":root";
}
function j(e) {
  return e.parentElement.tagName === "SCL" ? e.getAttribute("name") : `${P(e.parentElement)}>${e.getAttribute("name")}`;
}
function G(e, t, i = -1) {
  i === -1 && (i = t.split(">").length);
  const [n, r] = be(t);
  if (!r) return ae;
  if (i === 0) return `${e}[name="${r}"]`;
  const a = ee[e].parents;
  if (!a) return ae;
  const o = a.flatMap(
    (c) => ee[c].selector === ee.Substation.selector ? G(c, n, i - 1).split(",") : he(c, n).split(",")
  ).filter((c) => !c.startsWith(ae));
  return o.length === 0 ? ae : ue(o, [">"], [e], [`[name="${r}"]`]).map((c) => c.join("")).join(",");
}
function D(e) {
  return P(e.parentElement).toString();
}
function $(e, t) {
  const i = ee[e].parents;
  if (!i) return ae;
  const n = i.flatMap((r) => he(r, t).split(",")).filter((r) => !r.startsWith(ae));
  return n.length === 0 ? ae : ue(n, [">"], [e]).map((r) => r.join("")).join(",");
}
function gi(e) {
  return `#${e.id}`;
}
function yi(e, t) {
  const i = t.replace(/^#/, "");
  return i ? `${e}[id="${i}"]` : ae;
}
const ga = [
  "TransformerWinding",
  "ConductingEquipment"
], ya = [
  "GeneralEquipment",
  "PowerTransformer",
  ...ga
], fn = ["Substation", "VoltageLevel", "Bay"], va = ["Process", "Line"], wa = ["EqSubFunction", "EqFunction"], $c = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...ya,
  ...fn,
  ...va,
  ...wa
], Aa = ["ConnectivityNode", ...$c], Lc = ["GOOSESecurity", "SMVSecurity"], zc = ["SubNetwork", ...Lc, ...Aa], Tc = ["BDA", "DA"], _c = ["SampledValueControl", "GSEControl"], Vc = ["LogControl", "ReportControl"], Pc = [..._c, ...Vc], Mc = ["GSE", "SMV"], Rc = [
  "ConnectedAP",
  "PhysConn",
  "SDO",
  "DO",
  "DAI",
  "SDI",
  "DOI",
  "Inputs",
  "RptEnabled",
  "Server",
  "ServerAt",
  "SettingControl",
  "Communication",
  "Log",
  "LDevice",
  "DataSet",
  "AccessPoint",
  "IED",
  "NeutralPoint",
  ...Pc,
  ...Mc,
  ...Tc
], xt = ["LN0", "LN"], Oc = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Fc = ["Subject", "IssuerName"], qc = ["MinTime", "MaxTime"], Hc = ["LNodeType", "DOType", "DAType", "EnumType"], Bc = [
  "FileHandling",
  "TimeSyncProt",
  "CommProt",
  "SGEdit",
  "ConfSG",
  "GetDirectory",
  "GetDataObjectDefinition",
  "DataObjectDirectory",
  "GetDataSetValue",
  "SetDataSetValue",
  "DataSetDirectory",
  "ReadWrite",
  "TimerActivatedControl",
  "GetCBValues",
  "GSEDir",
  "ConfLdName"
], Gc = ["DynDataSet", "ConfDataSet"], Wc = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...Gc
], jc = ["ConfLogControl", "ConfSigRef"], Uc = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], Kc = ["SCL", ...zc, ...Rc, ...Hc], xa = [
  ...Kc,
  ...Oc,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Fc,
  ...qc,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...xt,
  ...Bc,
  "DynAssociation",
  "SettingGroups",
  ...Wc,
  ...jc,
  ...Uc,
  "ConfLNs",
  "ClientServices",
  "SupSubscription",
  "ValueHandling",
  "RedProt",
  "McSecurity",
  "KDC",
  "Address",
  "P",
  "ProtNs",
  "EnumVal",
  "Terminal",
  "BitRate",
  "Authentication",
  "DataTypeTemplates",
  "History",
  "OptFields",
  "SmvOpts",
  "TrgOps",
  "SamplesPerSec",
  "SmpRate",
  "SecPerSamples"
], Zc = new Set(xa);
function In(e) {
  return Zc.has(e);
}
const Ii = ["Text", "Private"], at = [...Ii], re = [...Ii], vi = [...Ii], Vr = [...re, "Val"], Sa = [...at, "LNode"], ot = [...Sa], bn = [...ot], nn = [
  ...ot,
  "PowerTransformer",
  "GeneralEquipment"
], Pr = [
  ...bn,
  "Terminal"
], Mr = [...re, "Address"], Ea = [...at], Rr = [...Ea, "IEDName"], Or = [
  ...re,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], Fr = [
  ...ot,
  "GeneralEquipment",
  "Function"
], qr = [...Ea, "TrgOps"], Hr = [
  ...ot,
  "GeneralEquipment",
  "EqSubFunction"
], ee = {
  AccessControl: {
    identity: D,
    selector: $,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: j,
    selector: G,
    parents: ["IED"],
    children: [
      ...at,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: D,
    selector: $,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: ic,
    selector: nc,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: D,
    selector: $,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: j,
    selector: G,
    parents: ["DAType"],
    children: [...Vr]
  },
  BitRate: {
    identity: D,
    selector: $,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: j,
    selector: G,
    parents: ["VoltageLevel"],
    children: [
      ...nn,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: hc,
    selector: fc,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: D,
    selector: $,
    parents: ["SCL"],
    children: [...re, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: j,
    selector: G,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...Pr,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: D,
    selector: $,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: yc,
    selector: vc,
    parents: ["SubNetwork"],
    children: [...re, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: j,
    selector: G,
    parents: ["Bay", "Line"],
    children: [...Sa]
  },
  DA: {
    identity: j,
    selector: G,
    parents: ["DOType"],
    children: [...Vr]
  },
  DAI: {
    identity: zr,
    selector: hn,
    parents: ["DOI", "SDI"],
    children: [...re, "Val"]
  },
  DAType: {
    identity: gi,
    selector: yi,
    parents: ["DataTypeTemplates"],
    children: [...vi, "BDA", "ProtNs"]
  },
  DO: {
    identity: j,
    selector: G,
    parents: ["LNodeType"],
    children: [...re]
  },
  DOI: {
    identity: j,
    selector: G,
    parents: [...xt],
    children: [...re, "SDI", "DAI"]
  },
  DOType: {
    identity: gi,
    selector: yi,
    parents: ["DataTypeTemplates"],
    children: [...vi, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: j,
    selector: G,
    parents: [...xt],
    children: [...at, "FCDA"]
  },
  DataSetDirectory: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: D,
    selector: $,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: gi,
    selector: yi,
    parents: ["DataTypeTemplates"],
    children: [...vi, "EnumVal"]
  },
  EnumVal: {
    identity: Ec,
    selector: Cc,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: j,
    selector: G,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...Hr]
  },
  EqSubFunction: {
    identity: j,
    selector: G,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...Hr]
  },
  ExtRef: {
    identity: dc,
    selector: uc,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: cc,
    selector: lc,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: j,
    selector: G,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...ot,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: j,
    selector: G,
    parents: [
      "SubFunction",
      "Function",
      ...va,
      ...wa,
      ...fn
    ],
    children: [...bn, "EqFunction"]
  },
  GetCBValues: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: j,
    selector: G,
    parents: ["AccessPoint"],
    children: [...at, "Subject", "IssuerName"]
  },
  GSE: {
    identity: Tr,
    selector: _r,
    parents: ["ConnectedAP"],
    children: [...Mr, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: j,
    selector: G,
    parents: ["LN0"],
    children: [...Rr, "Protocol"]
  },
  GSESettings: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: D,
    selector: $,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: D,
    selector: $,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: Xs,
    selector: Ys,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: j,
    selector: G,
    parents: ["SCL"],
    children: [...re, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: oc,
    selector: sc,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: D,
    selector: $,
    parents: [...xt],
    children: [...re, "ExtRef"]
  },
  IssuerName: {
    identity: D,
    selector: $,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: ec,
    selector: tc,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: rc,
    selector: ac,
    parents: ["Server"],
    children: [...re, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: pc,
    selector: mc,
    parents: ["AccessPoint", "LDevice"],
    children: [...Or]
  },
  LN0: {
    identity: D,
    selector: $,
    parents: ["LDevice"],
    children: [
      ...Or,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: Qs,
    selector: Js,
    parents: [...Aa],
    children: [...re]
  },
  LNodeType: {
    identity: gi,
    selector: yi,
    parents: ["DataTypeTemplates"],
    children: [...vi, "DO"]
  },
  Line: {
    identity: j,
    selector: G,
    parents: ["Process", "SCL"],
    children: [
      ...Fr,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: j,
    selector: G,
    parents: [...xt],
    children: [...re]
  },
  LogControl: {
    identity: j,
    selector: G,
    parents: [...xt],
    children: [...qr]
  },
  LogSettings: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: D,
    selector: $,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: D,
    selector: $,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: D,
    selector: $,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: $r,
    selector: Lr,
    parents: ["TransformerWinding"],
    children: [...re]
  },
  OptFields: {
    identity: D,
    selector: $,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: xc,
    selector: Sc,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: wc,
    selector: Ac,
    parents: ["ConnectedAP"],
    children: [...re, "P"]
  },
  PowerTransformer: {
    identity: j,
    selector: G,
    parents: [...fn],
    children: [
      ...bn,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => ae,
    parents: [],
    children: []
  },
  Process: {
    identity: j,
    selector: G,
    parents: ["Process", "SCL"],
    children: [
      ...Fr,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: Nc,
    selector: Ic,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: D,
    selector: $,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: j,
    selector: G,
    parents: [...xt],
    children: [...qr, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: D,
    selector: $,
    parents: ["ReportControl"],
    children: [...re, "ClientLN"]
  },
  SamplesPerSec: {
    identity: D,
    selector: $,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: j,
    selector: G,
    parents: ["LN0"],
    children: [...Rr, "SmvOpts"]
  },
  SecPerSamples: {
    identity: D,
    selector: $,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: kc,
    selector: Dc,
    parents: [],
    children: [
      ...Ii,
      "Header",
      "Substation",
      "Communication",
      "IED",
      "DataTypeTemplates",
      "Line",
      "Process"
    ]
  },
  SDI: {
    identity: zr,
    selector: hn,
    parents: ["DOI", "SDI"],
    children: [...re, "SDI", "DAI"]
  },
  SDO: {
    identity: j,
    selector: G,
    parents: ["DOType"],
    children: [...at]
  },
  Server: {
    identity: D,
    selector: $,
    parents: ["AccessPoint"],
    children: [
      ...re,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: D,
    selector: $,
    parents: ["AccessPoint"],
    children: [...re]
  },
  Services: {
    identity: D,
    selector: $,
    parents: ["IED", "AccessPoint"],
    children: [
      "DynAssociation",
      "SettingGroups",
      "GetDirectory",
      "GetDataObjectDefinition",
      "DataObjectDirectory",
      "GetDataSetValue",
      "SetDataSetValue",
      "DataSetDirectory",
      "ConfDataSet",
      "DynDataSet",
      "ReadWrite",
      "TimerActivatedControl",
      "ConfReportControl",
      "GetCBValues",
      "ConfLogControl",
      "ReportSettings",
      "LogSettings",
      "GSESettings",
      "SMVSettings",
      "GSEDir",
      "GOOSE",
      "GSSE",
      "SMVsc",
      "FileHandling",
      "ConfLNs",
      "ClientServices",
      "ConfLdName",
      "SupSubscription",
      "ConfSigRef",
      "ValueHandling",
      "RedProt",
      "TimeSyncProt",
      "CommProt"
    ]
  },
  SetDataSetValue: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: D,
    selector: $,
    parents: ["LN0"],
    children: [...re]
  },
  SettingGroups: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: D,
    selector: $,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: D,
    selector: $,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: Tr,
    selector: _r,
    parents: ["ConnectedAP"],
    children: [...Mr]
  },
  SmvOpts: {
    identity: D,
    selector: $,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: j,
    selector: G,
    parents: ["AccessPoint"],
    children: [...at, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: j,
    selector: G,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...ga
    ],
    children: [...ot, "EqFunction"]
  },
  SubFunction: {
    identity: j,
    selector: G,
    parents: ["SubFunction", "Function"],
    children: [
      ...ot,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: j,
    selector: G,
    parents: ["Communication"],
    children: [...at, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: D,
    selector: $,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: j,
    selector: G,
    parents: ["SCL"],
    children: [...nn, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: j,
    selector: G,
    parents: ["TransformerWinding"],
    children: [...ot, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: $r,
    selector: Lr,
    parents: [...ya],
    children: [...re]
  },
  Text: {
    identity: D,
    selector: $,
    parents: xa.filter((e) => e !== "Text" && e !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: D,
    selector: $,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: j,
    selector: G,
    parents: ["PowerTransformer"],
    children: [
      ...Pr,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: D,
    selector: $,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: bc,
    selector: gc,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: D,
    selector: $,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: D,
    selector: $,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: j,
    selector: G,
    parents: ["Substation"],
    children: [...nn, "Voltage", "Bay", "Function"]
  }
};
function he(e, t) {
  return typeof t != "string" ? ae : In(e) ? ee[e].selector(e, t) : e;
}
function Ye(e, t, i) {
  if (typeof i != "string" || !In(t)) return null;
  const n = e.querySelector(ee[t].selector(t, i));
  return n === null || De(n) ? n : Array.from(
    e.querySelectorAll(ee[t].selector(t, i))
  ).find(De) ?? null;
}
function P(e) {
  if (e === null) return NaN;
  if (e.closest("Private")) return NaN;
  const t = e.tagName;
  return In(t) ? ee[t].identity(e) : NaN;
}
ra((e) => (t) => {
  Object.keys(e).length ? t.setValue(e) : t.setValue("");
});
const Jt = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  decimal: "[+\\-]?[0-9]+(([.][0-9]*)?|([.][0-9]+))",
  unsigned: "[+]?[0-9]+(([.][0-9]*)?|([.][0-9]+))"
};
function Ca(e, t) {
  return typeof e == "string" && typeof t == "string" ? e.localeCompare(t) : typeof e == "object" && typeof t == "string" ? (e.getAttribute("name") ?? "").localeCompare(t) : typeof e == "string" && typeof t == "object" ? e.localeCompare(t.getAttribute("name")) : typeof e == "object" && typeof t == "object" ? (e.getAttribute("name") ?? "").localeCompare(
    t.getAttribute("name") ?? ""
  ) : 0;
}
function ue(...e) {
  return e.reduce(
    (t, i) => t.flatMap((n) => i.map((r) => [n, r].flat())),
    [[]]
  );
}
function Na(e, t = /* @__PURE__ */ new WeakSet()) {
  if (t.has(e)) return 1 / 0;
  switch (e?.constructor) {
    case Object:
    case Array:
      return t.add(e), 1 + Math.max(
        -1,
        ...Object.values(e).map((i) => Na(i, t))
      );
    default:
      return 0;
  }
}
function De(e) {
  return !e.closest("Private");
}
const Xc = 99, Yc = Array(Xc).fill(1).map((e, t) => `${t + 1}`);
function Ia(e) {
  const t = /* @__PURE__ */ new Map();
  return (i) => {
    if (!t.has(i)) {
      const n = new Set(
        K(e, "LNode").filter((r) => r.getAttribute("lnClass") === i).map((r) => r.getAttribute("lnInst"))
      );
      t.set(i, () => {
        const r = Yc.find((a) => !n.has(a));
        return r && n.add(r), r;
      });
    }
    return t.get(i)();
  };
}
var Qc = Object.defineProperty, Jc = Object.getOwnPropertyDescriptor, Pt = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Jc(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && Qc(t, i, r), r;
};
function ka(e, t) {
  const i = e.nodeType === Node.ELEMENT_NODE ? e.closest(t) : null;
  if (i) return i;
  const n = e.getRootNode();
  return n instanceof ShadowRoot ? ka(n.host, t) : null;
}
let st = class extends $e {
  constructor() {
    super(...arguments), this.secondary = !1, this.highlighted = !1, this.level = 1;
  }
  async firstUpdated() {
    this.tabIndex = 0;
    const e = ka(this.parentNode, "action-pane");
    e && (this.level = e.level + 1), this.level = Math.floor(this.level);
  }
  renderHeader() {
    const e = p`<span
        ><slot name="icon"
          >${this.icon ? p`<mwc-icon>${this.icon}</mwc-icon>` : zt}</slot
        ></span
      >
      ${this.label ?? zt}
      <nav><slot name="action"></slot></nav>`, t = Math.floor(Math.max(this.level, 1)), i = typeof this.label == "string" ? this.label : "";
    switch (t) {
      case 1:
        return p`<h1 title="${i}">${e}</h1>`;
      case 2:
        return p`<h2 title="${i}">${e}</h2>`;
      case 3:
        return p`<h3 title="${i}">${e}</h3>`;
      default:
        return p`<h4 title="${i}">${e}</h4>`;
    }
  }
  render() {
    return p`<section
      class="${Vt({
      secondary: this.secondary,
      highlighted: this.highlighted,
      contrasted: this.level % 2 === 0
    })}"
    >
      ${this.renderHeader()}
      <div><slot></slot></div>
    </section>`;
  }
};
st.styles = we`
    :host {
      outline: none;
    }

    :host(:focus-within) section {
      box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
      outline-width: 4px;
      transition: all 250ms linear;
    }

    section {
      background-color: var(--mdc-theme-surface);
      transition: all 200ms linear;
      outline-style: solid;
      margin: 0px;
      outline-width: 0px;
      outline-color: var(--mdc-theme-primary);
    }

    section.secondary {
      outline-color: var(--mdc-theme-secondary);
    }

    section > div {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 8px 12px 16px;
      clear: right;
    }

    .highlighted {
      outline-style: dotted;
      outline-width: 2px;
    }

    :host(:focus-within) .highlighted {
      outline-style: solid;
    }

    .contrasted {
      background-color: var(--mdc-theme-on-primary);
    }

    h1,
    h2,
    h3,
    h4 {
      color: var(--mdc-theme-on-surface);
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      overflow: clip visible;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0px;
      line-height: 52px;
      padding-left: 0.3em;
    }

    nav {
      float: right;
    }

    mwc-icon {
      vertical-align: middle;
      position: relative;
      top: -0.1em;
      --mdc-icon-size: 1em;
    }

    ::slotted([slot='icon']) {
      vertical-align: middle;
      position: relative;
      top: -0.1em;
      --mdc-icon-size: 1em;
    }
  `;
Pt([
  y({ type: String })
], st.prototype, "label", 2);
Pt([
  y({ type: String })
], st.prototype, "icon", 2);
Pt([
  y({ type: Boolean })
], st.prototype, "secondary", 2);
Pt([
  y({ type: Boolean })
], st.prototype, "highlighted", 2);
Pt([
  y({ type: Number })
], st.prototype, "level", 2);
st = Pt([
  pe("action-pane")
], st);
function el(e, t) {
  const i = {};
  return Array.from(e.attributes).forEach((n) => {
    i[n.name] = n.value;
  }), { element: e, oldAttributes: i, newAttributes: t };
}
function Oe(e, t = "user", i) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { action: e, initiator: t, ...i?.detail }
  });
}
const Da = {
  IED: [
    {
      attributeName: "iedName",
      filter: wt("Association")
    },
    {
      attributeName: "iedName",
      filter: wt("ClientLN")
    },
    {
      attributeName: "iedName",
      filter: wt("ConnectedAP")
    },
    {
      attributeName: "iedName",
      filter: wt("ExtRef")
    },
    {
      attributeName: "iedName",
      filter: wt("KDC")
    },
    {
      attributeName: "iedName",
      filter: wt("LNode")
    },
    {
      attributeName: null,
      filter: rn("GSEControl > IEDName")
    },
    {
      attributeName: null,
      filter: rn("SampledValueControl > IEDName")
    },
    {
      attributeName: null,
      filter: rn("LN > DOI > DAI > Val")
    }
  ],
  Substation: [
    {
      attributeName: "substationName",
      filter: wt("Terminal")
    }
  ],
  VoltageLevel: [
    {
      attributeName: "voltageLevelName",
      filter: Br("Terminal", {
        Substation: "substationName"
      })
    }
  ],
  Bay: [
    {
      attributeName: "bayName",
      filter: Br("Terminal", {
        Substation: "substationName",
        VoltageLevel: "voltageLevelName"
      })
    }
  ]
};
function wt(e) {
  return function(i, n, r) {
    return `${e}[${n}="${r}"]`;
  };
}
function rn(e) {
  return function() {
    return `${e}`;
  };
}
function Br(e, t) {
  return function(n, r, a) {
    return `${e}${Object.entries(t).map(([o, c]) => {
      const d = n.closest(o);
      if (d && d.hasAttribute("name")) {
        const u = d.getAttribute("name");
        return `[${c}="${u}"]`;
      }
      return null;
    }).join("")}[${r}="${a}"]`;
  };
}
function tl(e, t, i) {
  const n = e.cloneNode(!1);
  return n.setAttribute(t, i), n;
}
function $a(e, t) {
  const i = e.cloneNode(!1);
  return i.textContent = t, i;
}
function kn(e, t, i) {
  if (t === null || t === i)
    return [];
  const n = Da[e.tagName];
  if (n === void 0)
    return [];
  const r = [];
  return n.forEach((a) => {
    const o = a.filter(e, a.attributeName, t);
    a.attributeName ? Array.from(e.ownerDocument.querySelectorAll(`${o}`)).filter(De).forEach((c) => {
      const d = tl(
        c,
        a.attributeName,
        i
      );
      r.push({ old: { element: c }, new: { element: d } });
    }) : Array.from(e.ownerDocument.querySelectorAll(`${o}`)).filter((c) => c.textContent === t).filter(De).forEach((c) => {
      const d = $a(c, i);
      r.push({ old: { element: c }, new: { element: d } });
    });
  }), e.tagName === "IED" && r.push(...il(e, t, i)), r;
}
function il(e, t, i) {
  const n = [];
  return e.ownerDocument.querySelectorAll("IED").forEach((a) => {
    const o = Array.from(
      a.querySelectorAll(
        ':scope > AccessPoint > Server > LDevice > LN[lnClass="LGOS"] > DOI > DAI > Val, :scope > AccessPoint > Server > LDevice > LN[lnClass="LSVS"] > DOI > DAI > Val'
      )
    );
    if (o.length === 0) return;
    const c = a.querySelector(
      `:scope > AccessPoint > Server > LDevice > LN0 > Inputs > ExtRef[iedName="${t}"][srcCBName]`
    ), d = c?.getAttribute("srcLDInst") + "/" + c?.getAttribute("srcLNClass") + "." + c?.getAttribute("srcCBName");
    for (let u of o)
      if (t + d === u.textContent.trim()) {
        const m = $a(
          u,
          i + d
        );
        n.push({
          old: { element: u },
          new: { element: m }
        });
        break;
      }
  }), n;
}
function La(e) {
  const t = St(e) ?? null;
  if (t === null)
    return [];
  const i = Da[e.tagName];
  if (i === void 0)
    return [];
  const n = [];
  return i.forEach((r) => {
    const a = r.filter(e, r.attributeName, t);
    r.attributeName ? Array.from(e.ownerDocument.querySelectorAll(`${a}`)).filter(De).forEach((o) => {
      n.push({ old: { parent: o.parentElement, element: o } });
    }) : Array.from(e.ownerDocument.querySelectorAll(`${a}`)).filter((o) => o.textContent === t).filter(De).forEach((o) => {
      o.parentElement && n.push({
        old: {
          parent: o.parentElement.parentElement,
          element: o.parentElement
        }
      });
    });
  }), n;
}
function za(e) {
  return (t) => {
    const i = g(t.find((a) => a.label === "name")), n = g(t.find((a) => a.label === "desc"));
    if (i === e.getAttribute("name") && n === e.getAttribute("desc"))
      return [];
    const r = U(e, { name: i, desc: n });
    return [{ old: { element: e }, new: { element: r } }];
  };
}
function nl(e, t) {
  return (i) => {
    const n = g(i.find((d) => d.label === "name")), r = e.getAttribute("name"), a = g(i.find((d) => d.label === "desc"));
    if (n === r && a === e.getAttribute("desc"))
      return [];
    const o = U(e, { name: n, desc: a }), c = {
      actions: [],
      title: l(t, { name: n })
    };
    return c.actions.push({
      old: { element: e },
      new: { element: o }
    }), c.actions.push(...kn(e, r, n)), c.actions.length ? [c] : [];
  };
}
function Ta(e, t) {
  return (i) => {
    const n = {};
    if (rl(n, e, i), Object.keys(n).length == 0)
      return [];
    al(e, n);
    const r = g(i.find((o) => o.label === "name")), a = {
      actions: [],
      title: l(t, { name: r })
    };
    return a.actions.push(el(e, n)), a.actions.push(
      ...kn(e, e.getAttribute("name"), r)
    ), a.actions.length ? [a] : [];
  };
}
function rl(e, t, i) {
  const n = g(i.find((a) => a.label === "name")), r = g(i.find((a) => a.label === "desc"));
  n !== t.getAttribute("name") && (e.name = n), r !== t.getAttribute("desc") && (e.desc = r);
}
function al(e, t) {
  const i = Object.keys(t);
  return Array.from(e.attributes).filter((n) => !i.includes(n.name)).forEach((n) => {
    t[n.name] = n.value;
  }), t;
}
function Dn(e, t) {
  return [
    z`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("bay.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    z`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${l("bay.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function ol(e) {
  return (t) => {
    const i = g(t.find((o) => o.label === "name")), n = g(t.find((o) => o.label === "desc")), r = W(e.ownerDocument, "Bay", {
      name: i,
      desc: n
    });
    return [{
      new: {
        parent: e,
        element: r
      }
    }];
  };
}
function sl(e) {
  return [
    {
      title: l("bay.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: l("add"),
        action: ol(e)
      },
      content: Dn("", "")
    }
  ];
}
function cl(e) {
  return [
    {
      title: l("bay.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: nl(
          e,
          "bay.action.updateBay"
        )
      },
      content: Dn(
        e.getAttribute("name"),
        e.getAttribute("desc")
      )
    }
  ];
}
const gn = {
  // standard
  CBR: "Circuit Breaker",
  DIS: "Disconnector",
  // custom
  ERS: "Earth Switch",
  CTR: "Current Transformer",
  VTR: "Voltage Transformer",
  AXN: "Auxiliary Network",
  BAT: "Battery",
  BSH: "Bushing",
  CAP: "Capacitor Bank",
  CON: "Converter",
  EFN: "Earth Fault Neutralizer",
  FAN: "Fan",
  GIL: "Gas Insulated Line",
  GEN: "Generator",
  IFL: "Infeeding Line",
  MOT: "Motor",
  RES: "Neutral Resistor",
  REA: "Reactor",
  PSH: "Power Shunt",
  CAB: "Power Cable",
  PMP: "Pump",
  LIN: "Power Overhead Line",
  RRC: "Rotating Reactive Component",
  SCR: "Semiconductor Controlled Rectifier",
  SAR: "Surge Arrester",
  SMC: "Synchronous Machine",
  TCF: "Thyristor Controlled Frequency Converter",
  TCR: "Thyristor Controlled Reactive Component"
};
function ll(e) {
  if (!e) return null;
  const [t, i, n, r, a] = [
    "lnInst",
    "lnClass",
    "iedName",
    "ldInst",
    "prefix"
  ].map((m) => e?.getAttribute(m)), o = [`IED[name="${n}"]`, "IED"], c = ["AccessPoint > Server"], d = [
    `LDevice[inst="${r}"] > LN[inst="${t}"][lnClass="${i}"]`
  ], u = a && a !== "" ? [`[prefix="${a}"]`] : ['[prefix=""]', ":not(prefix)"];
  return e.ownerDocument.querySelector(
    ue(
      o,
      [" > "],
      c,
      [" > "],
      d,
      u
    ).map((m) => m.join("")).join(",")
  );
}
function _a(e) {
  const t = e?.ownerDocument, i = e.getAttribute("lnType"), n = e.getAttribute("lnClass"), r = t.querySelector(
    `DataTypeTemplates > LNodeType[id="${i}"][lnClass="${n}"] > DO[name="SwTyp"]`
  );
  if (r) {
    const a = r.getAttribute("type");
    return t.querySelector(
      `DataTypeTemplates > DOType[id="${a}"] > DA[name="stVal"] > Val`
    )?.innerHTML.trim();
  }
}
function dl(e) {
  const t = e.querySelector(
    'DOI[name="SwTyp"] > DAI[name="stVal"]'
  );
  return t ? t.querySelector("Val")?.innerHTML.trim() : _a(e);
}
function ul(e) {
  return Array.from(e.querySelectorAll("Terminal")).some(
    (t) => t.getAttribute("cNodeName") === "grounded"
  );
}
function pl(e) {
  const t = e.querySelector('LNode[lnClass="XSWI"]'), i = ll(t);
  let n;
  return i ? n = dl(i) : t && (n = _a(t)), n ? ["Earthing Switch", "High Speed Earthing Switch"].includes(n) : !1;
}
function Va(e) {
  return e.getAttribute("type") === "DIS" && (ul(e) || pl(e)) ? "ERS" : e.getAttribute("type") ?? "";
}
function Pa(e) {
  return gn[Va(e)] ?? l("conductingequipment.unknownType");
}
function ml(e, t) {
  return e === "create" ? p`<mwc-select
        style="--mdc-menu-max-height: 196px;"
        required
        label="type"
        helper="${l("conductingequipment.wizard.typeHelper")}"
        validationMessage="${l("textfield.required")}"
      >
        ${Object.keys(gn).map(
    (i) => p`<mwc-list-item value="${i}">${gn[i]}</mwc-list-item>`
  )}
      </mwc-select>` : p`<mwc-select
        label="type"
        helper="${l("conductingequipment.wizard.typeHelper")}"
        validationMessage="${l("textfield.required")}"
        disabled
      >
        <mwc-list-item selected value="0">${t}</mwc-list-item>
      </mwc-select>`;
}
function $n(e, t, i, n, r) {
  return [
    ml(i, n),
    p`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("conductingequipment.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${r}
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${l("conductingequipment.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function hl(e) {
  return (t) => {
    const i = g(t.find((C) => C.label === "name")), n = g(t.find((C) => C.label === "desc")), r = g(t.find((C) => C.label === "type")), a = r === "ERS" ? "DIS" : r, o = W(e.ownerDocument, "ConductingEquipment", {
      name: i,
      type: a,
      desc: n
    });
    if (r !== "ERS") return [{ new: { parent: e, element: o } }];
    const c = e.closest("VoltageLevel")?.querySelector('ConnectivityNode[name="grounded"]'), d = c ? c.closest("Substation")?.getAttribute("name") ?? null : e.closest("Substation")?.getAttribute("name") ?? null, u = c ? c.closest("VoltageLevel")?.getAttribute("name") ?? null : e.closest("VoltageLevel")?.getAttribute("name") ?? null, m = c ? c.closest("Bay")?.getAttribute("name") ?? null : e.closest("Bay")?.getAttribute("name") ?? null, f = m && u && d ? d + "/" + u + "/" + m + "/grounded" : null;
    o.appendChild(
      W(e.ownerDocument, "Terminal", {
        name: "T1",
        cNodeName: "grounded",
        substationName: d,
        voltageLevelName: u,
        bayName: m,
        connectivityNode: f
      })
    );
    const b = {
      new: {
        parent: e,
        element: o
      }
    };
    if (c) return [b];
    const A = W(
      e.ownerDocument,
      "ConnectivityNode",
      {
        name: "grounded",
        pathName: f
      }
    );
    return [b, {
      new: {
        parent: e,
        element: A
      }
    }];
  };
}
function Ln(e, t) {
  return Array.from(e.querySelectorAll("ConductingEquipment")).filter(De).map((i) => i.getAttribute("name") ?? "").filter((i) => t && i !== t);
}
function fl(e) {
  const t = Ln(e);
  return [
    {
      title: l("conductingequipment.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: l("add"),
        action: hl(e)
      },
      content: $n(
        "",
        "",
        "create",
        "",
        t
      )
    }
  ];
}
function bl(e) {
  const t = Ln(
    e.parentNode,
    e.getAttribute("name")
  );
  return [
    {
      title: l("conductingequipment.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: za(e)
      },
      content: $n(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        "edit",
        Pa(e),
        t
      )
    }
  ];
}
function gl(e, t, i) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("connectivitynode.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${i}
      readonly
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="pathName"
      .maybeValue=${t}
      helper="${l("connectivitynode.wizard.pathNameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function Ma(e) {
  const t = Array.from(
    e.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(De).map((i) => i.getAttribute("name") ?? "").filter((i) => i !== e.getAttribute("name"));
  return [
    {
      title: l("connectivitynode.wizard.title.edit"),
      element: e,
      content: gl(
        e.getAttribute("name"),
        e.getAttribute("pathName"),
        t
      )
    }
  ];
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Gr = /* @__PURE__ */ new WeakMap(), Wr = 2147483647, yl = Ci((...e) => (t) => {
  let i = Gr.get(t);
  i === void 0 && (i = {
    lastRenderedIndex: Wr,
    values: []
  }, Gr.set(t, i));
  const n = i.values;
  let r = n.length;
  i.values = e;
  for (let a = 0; a < e.length && !(a > i.lastRenderedIndex); a++) {
    const o = e[a];
    if (la(o) || typeof o.then != "function") {
      t.setValue(o), i.lastRenderedIndex = a;
      break;
    }
    a < r && o === n[a] || (i.lastRenderedIndex = Wr, r = 0, Promise.resolve(o).then((c) => {
      const d = i.values.indexOf(o);
      d > -1 && d < i.lastRenderedIndex && (i.lastRenderedIndex = d, t.setValue(c), t.commit());
    }));
  }
});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ti extends me {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const t = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), n = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : p``, r = this.hasMeta && this.left ? this.renderMeta() : p``, a = this.renderRipple();
    return p`
      ${a}
      ${n}
      ${this.left ? "" : i}
      <span class=${Vt(t)}>
        <mwc-checkbox
            reducedTouchTarget
            tabindex=${this.tabindex}
            .checked=${this.selected}
            ?disabled=${this.disabled}
            @change=${this.onChange}>
        </mwc-checkbox>
      </span>
      ${this.left ? i : ""}
      ${r}`;
  }
  async onChange(t) {
    const i = t.target;
    this.selected === i.checked || (this._skipPropRequest = !0, this.selected = i.checked, await this.updateComplete, this._skipPropRequest = !1);
  }
}
N([
  Y("slot")
], ti.prototype, "slotElement", void 0);
N([
  Y("mwc-checkbox")
], ti.prototype, "checkboxElement", void 0);
N([
  y({ type: Boolean })
], ti.prototype, "left", void 0);
N([
  y({ type: String, reflect: !0 })
], ti.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const vl = we`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Tt = class extends ti {
};
Tt.styles = [fa, vl];
Tt = N([
  pe("mwc-check-list-item")
], Tt);
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var O = {
  UNKNOWN: "Unknown",
  BACKSPACE: "Backspace",
  ENTER: "Enter",
  SPACEBAR: "Spacebar",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
  END: "End",
  HOME: "Home",
  ARROW_LEFT: "ArrowLeft",
  ARROW_UP: "ArrowUp",
  ARROW_RIGHT: "ArrowRight",
  ARROW_DOWN: "ArrowDown",
  DELETE: "Delete",
  ESCAPE: "Escape",
  TAB: "Tab"
}, Ae = /* @__PURE__ */ new Set();
Ae.add(O.BACKSPACE);
Ae.add(O.ENTER);
Ae.add(O.SPACEBAR);
Ae.add(O.PAGE_UP);
Ae.add(O.PAGE_DOWN);
Ae.add(O.END);
Ae.add(O.HOME);
Ae.add(O.ARROW_LEFT);
Ae.add(O.ARROW_UP);
Ae.add(O.ARROW_RIGHT);
Ae.add(O.ARROW_DOWN);
Ae.add(O.DELETE);
Ae.add(O.ESCAPE);
Ae.add(O.TAB);
var Ne = {
  BACKSPACE: 8,
  ENTER: 13,
  SPACEBAR: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46,
  ESCAPE: 27,
  TAB: 9
}, xe = /* @__PURE__ */ new Map();
xe.set(Ne.BACKSPACE, O.BACKSPACE);
xe.set(Ne.ENTER, O.ENTER);
xe.set(Ne.SPACEBAR, O.SPACEBAR);
xe.set(Ne.PAGE_UP, O.PAGE_UP);
xe.set(Ne.PAGE_DOWN, O.PAGE_DOWN);
xe.set(Ne.END, O.END);
xe.set(Ne.HOME, O.HOME);
xe.set(Ne.ARROW_LEFT, O.ARROW_LEFT);
xe.set(Ne.ARROW_UP, O.ARROW_UP);
xe.set(Ne.ARROW_RIGHT, O.ARROW_RIGHT);
xe.set(Ne.ARROW_DOWN, O.ARROW_DOWN);
xe.set(Ne.DELETE, O.DELETE);
xe.set(Ne.ESCAPE, O.ESCAPE);
xe.set(Ne.TAB, O.TAB);
var dt = /* @__PURE__ */ new Set();
dt.add(O.PAGE_UP);
dt.add(O.PAGE_DOWN);
dt.add(O.END);
dt.add(O.HOME);
dt.add(O.ARROW_LEFT);
dt.add(O.ARROW_UP);
dt.add(O.ARROW_RIGHT);
dt.add(O.ARROW_DOWN);
function nt(e) {
  var t = e.key;
  if (Ae.has(t))
    return t;
  var i = xe.get(e.keyCode);
  return i || O.UNKNOWN;
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var rt, Ze, J = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
rt = {}, rt["" + J.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", rt["" + J.LIST_ITEM_CLASS] = "mdc-list-item", rt["" + J.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", rt["" + J.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", rt["" + J.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", rt["" + J.ROOT] = "mdc-list";
var Lt = (Ze = {}, Ze["" + J.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", Ze["" + J.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", Ze["" + J.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", Ze["" + J.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", Ze["" + J.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", Ze["" + J.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", Ze["" + J.ROOT] = "mdc-deprecated-list", Ze), wi = {
  ACTION_EVENT: "MDCList:action",
  ARIA_CHECKED: "aria-checked",
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: "aria-current",
  ARIA_DISABLED: "aria-disabled",
  ARIA_ORIENTATION: "aria-orientation",
  ARIA_ORIENTATION_HORIZONTAL: "horizontal",
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: "aria-selected",
  ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
  ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: `
    .` + J.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + J.LIST_ITEM_CLASS + ` a,
    .` + Lt[J.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Lt[J.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + J.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + J.LIST_ITEM_CLASS + ` a,
    .` + J.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + J.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Lt[J.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Lt[J.LIST_ITEM_CLASS] + ` a,
    .` + Lt[J.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Lt[J.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, Ce = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const yn = (e, t) => e - t, wl = (e, t) => {
  const i = Array.from(e), n = Array.from(t), r = { added: [], removed: [] }, a = i.sort(yn), o = n.sort(yn);
  let c = 0, d = 0;
  for (; c < a.length || d < o.length; ) {
    const u = a[c], m = o[d];
    if (u === m) {
      c++, d++;
      continue;
    }
    if (u !== void 0 && (m === void 0 || u < m)) {
      r.removed.push(u), c++;
      continue;
    }
    if (m !== void 0 && (u === void 0 || m < u)) {
      r.added.push(m), d++;
      continue;
    }
  }
  return r;
}, Al = ["input", "button", "textarea", "select"];
function Yt(e) {
  return e instanceof Set;
}
const an = (e) => {
  const t = e === Ce.UNSET_INDEX ? /* @__PURE__ */ new Set() : e;
  return Yt(t) ? new Set(t) : /* @__PURE__ */ new Set([t]);
};
class zn extends ma {
  constructor(t) {
    super(Object.assign(Object.assign({}, zn.defaultAdapter), t)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = Ce.UNSET_INDEX, this.focusedItemIndex_ = Ce.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return wi;
  }
  static get numbers() {
    return Ce;
  }
  static get defaultAdapter() {
    return {
      focusItemAtIndex: () => {
      },
      getFocusedElementIndex: () => 0,
      getListItemCount: () => 0,
      isFocusInsideList: () => !1,
      isRootFocused: () => !1,
      notifyAction: () => {
      },
      notifySelected: () => {
      },
      getSelectedStateForElementIndex: () => !1,
      setDisabledStateForElementIndex: () => {
      },
      getDisabledStateForElementIndex: () => !1,
      setSelectedStateForElementIndex: () => {
      },
      setActivatedStateForElementIndex: () => {
      },
      setTabIndexForElementIndex: () => {
      },
      setAttributeForElementIndex: () => {
      },
      getAttributeForElementIndex: () => null
    };
  }
  /**
   * Sets the private wrapFocus_ variable.
   */
  setWrapFocus(t) {
    this.wrapFocus_ = t;
  }
  /**
   * Sets the private wrapFocus_ variable.
   */
  setMulti(t) {
    this.isMulti_ = t;
    const i = this.selectedIndex_;
    if (t) {
      if (!Yt(i)) {
        const n = i === Ce.UNSET_INDEX;
        this.selectedIndex_ = n ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
    } else if (Yt(i))
      if (i.size) {
        const n = Array.from(i).sort(yn);
        this.selectedIndex_ = n[0];
      } else
        this.selectedIndex_ = Ce.UNSET_INDEX;
  }
  /**
   * Sets the isVertical_ private variable.
   */
  setVerticalOrientation(t) {
    this.isVertical_ = t;
  }
  /**
   * Sets the useActivatedClass_ private variable.
   */
  setUseActivatedClass(t) {
    this.useActivatedClass_ = t;
  }
  getSelectedIndex() {
    return this.selectedIndex_;
  }
  setSelectedIndex(t) {
    this.isIndexValid_(t) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(an(t)) : this.setSingleSelectionAtIndex_(t));
  }
  /**
   * Focus in handler for the list items.
   */
  handleFocusIn(t, i) {
    i >= 0 && this.adapter.setTabIndexForElementIndex(i, 0);
  }
  /**
   * Focus out handler for the list items.
   */
  handleFocusOut(t, i) {
    i >= 0 && this.adapter.setTabIndexForElementIndex(i, -1), setTimeout(() => {
      this.adapter.isFocusInsideList() || this.setTabindexToFirstSelectedItem_();
    }, 0);
  }
  /**
   * Key handler for the list.
   */
  handleKeydown(t, i, n) {
    const r = nt(t) === "ArrowLeft", a = nt(t) === "ArrowUp", o = nt(t) === "ArrowRight", c = nt(t) === "ArrowDown", d = nt(t) === "Home", u = nt(t) === "End", m = nt(t) === "Enter", f = nt(t) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      a || u ? (t.preventDefault(), this.focusLastElement()) : (c || d) && (t.preventDefault(), this.focusFirstElement());
      return;
    }
    let b = this.adapter.getFocusedElementIndex();
    if (b === -1 && (b = n, b < 0))
      return;
    let A;
    if (this.isVertical_ && c || !this.isVertical_ && o)
      this.preventDefaultEvent(t), A = this.focusNextElement(b);
    else if (this.isVertical_ && a || !this.isVertical_ && r)
      this.preventDefaultEvent(t), A = this.focusPrevElement(b);
    else if (d)
      this.preventDefaultEvent(t), A = this.focusFirstElement();
    else if (u)
      this.preventDefaultEvent(t), A = this.focusLastElement();
    else if ((m || f) && i) {
      const S = t.target;
      if (S && S.tagName === "A" && m)
        return;
      this.preventDefaultEvent(t), this.setSelectedIndexOnAction_(b, !0);
    }
    this.focusedItemIndex_ = b, A !== void 0 && (this.setTabindexAtIndex_(A), this.focusedItemIndex_ = A);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(t, i, n) {
    t !== Ce.UNSET_INDEX && (this.setSelectedIndexOnAction_(t, i, n), this.setTabindexAtIndex_(t), this.focusedItemIndex_ = t);
  }
  /**
   * Focuses the next element on the list.
   */
  focusNextElement(t) {
    const i = this.adapter.getListItemCount();
    let n = t + 1;
    if (n >= i)
      if (this.wrapFocus_)
        n = 0;
      else
        return t;
    return this.adapter.focusItemAtIndex(n), n;
  }
  /**
   * Focuses the previous element on the list.
   */
  focusPrevElement(t) {
    let i = t - 1;
    if (i < 0)
      if (this.wrapFocus_)
        i = this.adapter.getListItemCount() - 1;
      else
        return t;
    return this.adapter.focusItemAtIndex(i), i;
  }
  focusFirstElement() {
    return this.adapter.focusItemAtIndex(0), 0;
  }
  focusLastElement() {
    const t = this.adapter.getListItemCount() - 1;
    return this.adapter.focusItemAtIndex(t), t;
  }
  /**
   * @param itemIndex Index of the list item
   * @param isEnabled Sets the list item to enabled or disabled.
   */
  setEnabled(t, i) {
    this.isIndexValid_(t) && this.adapter.setDisabledStateForElementIndex(t, !i);
  }
  /**
   * Ensures that preventDefault is only called if the containing element
   * doesn't consume the event, and it will cause an unintended scroll.
   */
  preventDefaultEvent(t) {
    const n = `${t.target.tagName}`.toLowerCase();
    Al.indexOf(n) === -1 && t.preventDefault();
  }
  setSingleSelectionAtIndex_(t, i = !0) {
    this.selectedIndex_ !== t && (this.selectedIndex_ !== Ce.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), i && this.adapter.setSelectedStateForElementIndex(t, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(t, !0), this.setAriaForSingleSelectionAtIndex_(t), this.selectedIndex_ = t, this.adapter.notifySelected(t));
  }
  setMultiSelectionAtIndex_(t, i = !0) {
    const n = an(this.selectedIndex_), r = wl(n, t);
    if (!(!r.removed.length && !r.added.length)) {
      for (const a of r.removed)
        i && this.adapter.setSelectedStateForElementIndex(a, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(a, !1);
      for (const a of r.added)
        i && this.adapter.setSelectedStateForElementIndex(a, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(a, !0);
      this.selectedIndex_ = t, this.adapter.notifySelected(t, r);
    }
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(t) {
    this.selectedIndex_ === Ce.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(t, wi.ARIA_CURRENT));
    const i = this.ariaCurrentAttrValue_ !== null, n = i ? wi.ARIA_CURRENT : wi.ARIA_SELECTED;
    this.selectedIndex_ !== Ce.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, n, "false");
    const r = i ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(t, n, r);
  }
  setTabindexAtIndex_(t) {
    this.focusedItemIndex_ === Ce.UNSET_INDEX && t !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== t && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(t, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let t = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== Ce.UNSET_INDEX ? t = this.selectedIndex_ : Yt(this.selectedIndex_) && this.selectedIndex_.size > 0 && (t = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(t);
  }
  isIndexValid_(t) {
    if (t instanceof Set) {
      if (!this.isMulti_)
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      if (t.size === 0)
        return !0;
      {
        let i = !1;
        for (const n of t)
          if (i = this.isIndexInRange_(n), i)
            break;
        return i;
      }
    } else if (typeof t == "number") {
      if (this.isMulti_)
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + t);
      return t === Ce.UNSET_INDEX || this.isIndexInRange_(t);
    } else
      return !1;
  }
  isIndexInRange_(t) {
    const i = this.adapter.getListItemCount();
    return t >= 0 && t < i;
  }
  /**
   * Sets selected index on user action, toggles checkbox / radio based on
   * toggleCheckbox value. User interaction should not toggle list item(s) when
   * disabled.
   */
  setSelectedIndexOnAction_(t, i, n) {
    if (this.adapter.getDisabledStateForElementIndex(t))
      return;
    let r = t;
    this.isMulti_ && (r = /* @__PURE__ */ new Set([t])), this.isIndexValid_(r) && (this.isMulti_ ? this.toggleMultiAtIndex(t, n, i) : i || n ? this.setSingleSelectionAtIndex_(t, i) : this.selectedIndex_ === t && this.setSingleSelectionAtIndex_(Ce.UNSET_INDEX), i && this.adapter.notifyAction(t));
  }
  toggleMultiAtIndex(t, i, n = !0) {
    let r = !1;
    i === void 0 ? r = !this.adapter.getSelectedStateForElementIndex(t) : r = i;
    const a = an(this.selectedIndex_);
    r ? a.add(t) : a.delete(t), this.setMultiSelectionAtIndex_(a, n);
  }
}
function xl(e, t = 50) {
  let i;
  return function(n = !0) {
    clearTimeout(i), i = setTimeout(() => {
      e(n);
    }, t);
  };
}
const Ai = (e) => e.hasAttribute("mwc-list-item");
function Sl() {
  const e = this.itemsReadyResolver;
  this.itemsReady = new Promise((t) => this.itemsReadyResolver = t), e();
}
class Ie extends En {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = zn, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const t = xl(this.layout.bind(this));
    this.debouncedLayout = (i = !0) => {
      Sl.call(this), t(i);
    };
  }
  // tslint:disable:ban-ts-ignore
  async getUpdateComplete() {
    const t = await super.getUpdateComplete();
    return await this.itemsReady, t;
  }
  get items() {
    return this.items_;
  }
  updateItems() {
    var t;
    const i = (t = this.assignedElements) !== null && t !== void 0 ? t : [], n = [];
    for (const o of i)
      Ai(o) && (n.push(o), o._managingList = this), o.hasAttribute("divider") && !o.hasAttribute("role") && o.setAttribute("role", "separator");
    this.items_ = n;
    const r = /* @__PURE__ */ new Set();
    if (this.items_.forEach((o, c) => {
      this.itemRoles ? o.setAttribute("role", this.itemRoles) : o.removeAttribute("role"), o.selected && r.add(c);
    }), this.multi)
      this.select(r);
    else {
      const o = r.size ? r.entries().next().value[1] : -1;
      this.select(o);
    }
    const a = new Event("items-updated", { bubbles: !0, composed: !0 });
    this.dispatchEvent(a);
  }
  get selected() {
    const t = this.index;
    if (!Yt(t))
      return t === -1 ? null : this.items[t];
    const i = [];
    for (const n of t)
      i.push(this.items[n]);
    return i;
  }
  get index() {
    return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
  }
  render() {
    const t = this.innerRole === null ? void 0 : this.innerRole, i = this.innerAriaLabel === null ? void 0 : this.innerAriaLabel, n = this.rootTabbable ? "0" : "-1";
    return p`
      <!-- @ts-ignore -->
      <ul
          tabindex=${n}
          role="${Xe(t)}"
          aria-label="${Xe(i)}"
          class="mdc-deprecated-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
        ${this.renderPlaceholder()}
      </ul>
    `;
  }
  renderPlaceholder() {
    var t;
    const i = (t = this.assignedElements) !== null && t !== void 0 ? t : [];
    return this.emptyMessage !== void 0 && i.length === 0 ? p`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      ` : null;
  }
  firstUpdated() {
    super.firstUpdated(), this.items.length || (this.mdcFoundation.setMulti(this.multi), this.layout());
  }
  onFocusIn(t) {
    if (this.mdcFoundation && this.mdcRoot) {
      const i = this.getIndexOfTarget(t);
      this.mdcFoundation.handleFocusIn(t, i);
    }
  }
  onFocusOut(t) {
    if (this.mdcFoundation && this.mdcRoot) {
      const i = this.getIndexOfTarget(t);
      this.mdcFoundation.handleFocusOut(t, i);
    }
  }
  onKeydown(t) {
    if (this.mdcFoundation && this.mdcRoot) {
      const i = this.getIndexOfTarget(t), n = t.target, r = Ai(n);
      this.mdcFoundation.handleKeydown(t, r, i);
    }
  }
  onRequestSelected(t) {
    if (this.mdcFoundation) {
      let i = this.getIndexOfTarget(t);
      if (i === -1 && (this.layout(), i = this.getIndexOfTarget(t), i === -1) || this.items[i].disabled)
        return;
      const r = t.detail.selected, a = t.detail.source;
      this.mdcFoundation.handleSingleSelection(i, a === "interaction", r), t.stopPropagation();
    }
  }
  getIndexOfTarget(t) {
    const i = this.items, n = t.composedPath();
    for (const r of n) {
      let a = -1;
      if ($s(r) && Ai(r) && (a = i.indexOf(r)), a !== -1)
        return a;
    }
    return -1;
  }
  createAdapter() {
    return this.mdcAdapter = {
      getListItemCount: () => this.mdcRoot ? this.items.length : 0,
      getFocusedElementIndex: this.getFocusedItemIndex,
      getAttributeForElementIndex: (t, i) => {
        if (!this.mdcRoot)
          return "";
        const r = this.items[t];
        return r ? r.getAttribute(i) : "";
      },
      setAttributeForElementIndex: (t, i, n) => {
        if (!this.mdcRoot)
          return;
        const r = this.items[t];
        r && r.setAttribute(i, n);
      },
      focusItemAtIndex: (t) => {
        const i = this.items[t];
        i && i.focus();
      },
      setTabIndexForElementIndex: (t, i) => {
        const n = this.items[t];
        n && (n.tabindex = i);
      },
      notifyAction: (t) => {
        const i = { bubbles: !0, composed: !0 };
        i.detail = { index: t };
        const n = new CustomEvent("action", i);
        this.dispatchEvent(n);
      },
      notifySelected: (t, i) => {
        const n = { bubbles: !0, composed: !0 };
        n.detail = { index: t, diff: i };
        const r = new CustomEvent("selected", n);
        this.dispatchEvent(r);
      },
      isFocusInsideList: () => zs(this),
      isRootFocused: () => {
        const t = this.mdcRoot;
        return t.getRootNode().activeElement === t;
      },
      setDisabledStateForElementIndex: (t, i) => {
        const n = this.items[t];
        n && (n.disabled = i);
      },
      getDisabledStateForElementIndex: (t) => {
        const i = this.items[t];
        return i ? i.disabled : !1;
      },
      setSelectedStateForElementIndex: (t, i) => {
        const n = this.items[t];
        n && (n.selected = i);
      },
      getSelectedStateForElementIndex: (t) => {
        const i = this.items[t];
        return i ? i.selected : !1;
      },
      setActivatedStateForElementIndex: (t, i) => {
        const n = this.items[t];
        n && (n.activated = i);
      }
    }, this.mdcAdapter;
  }
  selectUi(t, i = !1) {
    const n = this.items[t];
    n && (n.selected = !0, n.activated = i);
  }
  deselectUi(t) {
    const i = this.items[t];
    i && (i.selected = !1, i.activated = !1);
  }
  select(t) {
    this.mdcFoundation && this.mdcFoundation.setSelectedIndex(t);
  }
  toggle(t, i) {
    this.multi && this.mdcFoundation.toggleMultiAtIndex(t, i);
  }
  onListItemConnected(t) {
    const i = t.target;
    this.layout(this.items.indexOf(i) === -1);
  }
  layout(t = !0) {
    t && this.updateItems();
    const i = this.items[0];
    for (const n of this.items)
      n.tabindex = -1;
    i && (this.noninteractive ? this.previousTabindex || (this.previousTabindex = i) : i.tabindex = 0), this.itemsReadyResolver();
  }
  getFocusedItemIndex() {
    if (!this.mdcRoot || !this.items.length)
      return -1;
    const t = pa();
    if (!t.length)
      return -1;
    for (let i = t.length - 1; i >= 0; i--) {
      const n = t[i];
      if (Ai(n))
        return this.items.indexOf(n);
    }
    return -1;
  }
  focusItemAtIndex(t) {
    for (const i of this.items)
      if (i.tabindex === 0) {
        i.tabindex = -1;
        break;
      }
    this.items[t].tabindex = 0, this.items[t].focus();
  }
  focus() {
    const t = this.mdcRoot;
    t && t.focus();
  }
  blur() {
    const t = this.mdcRoot;
    t && t.blur();
  }
}
N([
  y({ type: String })
], Ie.prototype, "emptyMessage", void 0);
N([
  Y(".mdc-deprecated-list")
], Ie.prototype, "mdcRoot", void 0);
N([
  na("", !0, "*")
], Ie.prototype, "assignedElements", void 0);
N([
  na("", !0, '[tabindex="0"]')
], Ie.prototype, "tabbableElements", void 0);
N([
  y({ type: Boolean }),
  lt(function(e) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(e);
  })
], Ie.prototype, "activatable", void 0);
N([
  y({ type: Boolean }),
  lt(function(e, t) {
    this.mdcFoundation && this.mdcFoundation.setMulti(e), t !== void 0 && this.layout();
  })
], Ie.prototype, "multi", void 0);
N([
  y({ type: Boolean }),
  lt(function(e) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(e);
  })
], Ie.prototype, "wrapFocus", void 0);
N([
  y({ type: String }),
  lt(function(e, t) {
    t !== void 0 && this.updateItems();
  })
], Ie.prototype, "itemRoles", void 0);
N([
  y({ type: String })
], Ie.prototype, "innerRole", void 0);
N([
  y({ type: String })
], Ie.prototype, "innerAriaLabel", void 0);
N([
  y({ type: Boolean })
], Ie.prototype, "rootTabbable", void 0);
N([
  y({ type: Boolean, reflect: !0 }),
  lt(function(e) {
    var t, i;
    if (e) {
      const n = (i = (t = this.tabbableElements) === null || t === void 0 ? void 0 : t[0]) !== null && i !== void 0 ? i : null;
      this.previousTabindex = n, n && n.setAttribute("tabindex", "-1");
    } else !e && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], Ie.prototype, "noninteractive", void 0);
var El = Object.defineProperty, Cl = Object.getOwnPropertyDescriptor, It = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Cl(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && El(t, i, r), r;
};
function vn(e) {
  return !e.closest("filtered-list") || !e.parentElement || e.parentElement instanceof Fe ? e : vn(e.parentElement);
}
function Nl(e, t) {
  const i = e.innerText + `
`, n = Array.from(e.children).map((c) => c.innerText).join(`
`), r = e.value, a = (i + n + r).toUpperCase(), o = t.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  o.length === 1 && o[0] === "" || o.every((c) => new RegExp(
    `*${c}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(a)) ? vn(e).classList.remove("hidden") : vn(e).classList.add("hidden");
}
let Fe = class extends Ie {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((e) => e instanceof Tt);
  }
  get isAllSelected() {
    return this.items.filter((e) => !e.disabled).filter((e) => e instanceof Tt).every((e) => e.selected);
  }
  get isSomeSelected() {
    return this.items.filter((e) => !e.disabled).filter((e) => e instanceof Tt).some((e) => e.selected);
  }
  onCheckAll() {
    const e = !this.isAllSelected;
    this.items.filter((t) => !t.disabled && !t.classList.contains("hidden")).forEach((t) => t.selected = e);
  }
  onFilterInput() {
    Array.from(
      this.querySelectorAll(
        "mwc-list-item, mwc-check-list-item, mwc-radio-list-item"
      )
    ).forEach(
      (e) => Nl(e, this.searchField.value)
    );
  }
  onListItemConnected(e) {
    super.onListItemConnected(e), this.requestUpdate();
  }
  update(e) {
    super.update(e), this.onFilterInput();
  }
  renderCheckAll() {
    return this.existCheckListItem && !this.disableCheckAll ? p`<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
      this.onCheckAll();
    }}
          ></mwc-checkbox
        ></mwc-formfield>` : p``;
  }
  render() {
    return p`<div id="tfcontainer">
        <abbr title="${this.searchFieldLabel ?? l("filter")}"
          ><mwc-textfield
            label="${this.searchFieldLabel ?? ""}"
            iconTrailing="search"
            outlined
            @input=${() => this.onFilterInput()}
          ></mwc-textfield
        ></abbr>
        ${this.renderCheckAll()}
      </div>
      ${super.render()}`;
  }
};
Fe.styles = we`
    ${Zo(es.styles)}

    #tfcontainer {
      display: flex;
      flex: auto;
    }

    ::slotted(.hidden) {
      display: none;
    }

    abbr {
      display: flex;
      flex: auto;
      margin: 8px;
      text-decoration: none;
      border-bottom: none;
    }

    mwc-textfield {
      width: 100%;
      --mdc-shape-small: 28px;
    }

    mwc-formfield.checkall {
      padding-right: 8px;
    }

    .mdc-list {
      padding-inline-start: 0px;
    }
  `;
It([
  y({ type: String })
], Fe.prototype, "searchFieldLabel", 2);
It([
  y({ type: Boolean })
], Fe.prototype, "disableCheckAll", 2);
It([
  B()
], Fe.prototype, "existCheckListItem", 1);
It([
  B()
], Fe.prototype, "isAllSelected", 1);
It([
  B()
], Fe.prototype, "isSomeSelected", 1);
It([
  Y("mwc-textfield")
], Fe.prototype, "searchField", 2);
Fe = It([
  pe("filtered-list")
], Fe);
var Il = Object.defineProperty, kl = Object.getOwnPropertyDescriptor, et = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? kl(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && Il(t, i, r), r;
};
const Dl = p`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${l("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let Re = class extends $e {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (e) => ({
      path: e,
      header: p`<h2>${"/" + e.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return Na(this.selection);
  }
  get paths() {
    return this.getPaths();
  }
  set paths(e) {
    const t = {};
    for (const i of e) {
      let n = t;
      for (const r of i)
        Object.prototype.hasOwnProperty.call(n, r) || (n[r] = {}), n = n[r];
    }
    this.selection = t;
  }
  get path() {
    return this.paths[0] ?? [];
  }
  set path(e) {
    this.paths = [e];
  }
  getTitle(e) {
    return e.join("/");
  }
  getDisplayString(e, t) {
    return e;
  }
  getPaths(e) {
    let t = Object.keys(this.selection).map((n) => [n]), i = e ?? this.depth - 1;
    for (; i-- > 0; )
      t = t.flatMap((n) => {
        let r = this.selection;
        for (const o of n) r = r[o];
        const a = Object.keys(r).map((o) => n.concat(o));
        return a.length === 0 ? [n] : a;
      });
    return e === void 0 ? t : t.filter((n) => n.length > e);
  }
  multiSelect(e, t, i) {
    let n = this.selection;
    for (const r of t) n = n[r];
    n && n[i] ? delete n[i] : n[i] = {};
  }
  singleSelect(e, t, i) {
    this.path[t.length] === i ? this.path = t : this.path = t.concat(i);
  }
  async select(e, t) {
    const i = e.target.selected.value;
    this.multi ? this.multiSelect(e, t, i) : this.singleSelect(e, t, i), this.requestUpdate(), await this.updateComplete, await new Promise((n) => setTimeout(n, 250)), this.container.scrollLeft = 1e3 * this.depth;
  }
  renderDirectory(e, t) {
    return p`<filtered-list
      @selected=${(i) => this.select(i, e)}
      searchFieldLabel="${this.getTitle(e)}"
    >
      ${t.map(
      (i) => p`<mwc-list-item
            value="${i}"
            ?activated=${this.getPaths(e.length).map((n) => JSON.stringify(n)).includes(JSON.stringify(e.concat(i)))}
            >${this.getDisplayString(i, e)}</mwc-list-item
          >`
    )}
    </filtered-list>`;
  }
  async renderColumn(e) {
    const i = this.getPaths(e).map((r) => this.read(r)), n = [];
    for await (const { header: r, entries: a, path: o } of i)
      (r || a.length > 0) && n.push(
        p`${Xe(r)} ${this.renderDirectory(o, a)}`
      );
    return n.length === 0 ? p`` : p`<div class="column">${n}</div>`;
  }
  render() {
    const e = new Array(this.depth).fill(0).map((t, i) => this.renderColumn(i));
    return this.loaded = Promise.allSettled(e).then(), p`<div class="pane">
      ${e.map((t) => yl(t, Dl))}
    </div>`;
  }
};
Re.styles = we`
    div.pane {
      display: flex;
      flex-direction: row;
      overflow: auto;
    }

    h2 {
      color: var(--mdc-theme-primary);
    }

    section {
      display: flex;
      flex-direction: column;
      width: max-content;
    }

    section > mwc-list {
      margin-top: 76px;
    }

    a {
      font-weight: 600;
      font-variant: small-caps;
      text-transform: lowercase;
      text-decoration: none;
      color: var(--mdc-theme-primary);
    }

    a:link {
      color: var(--mdc-theme-error);
    }

    a:visited {
      color: var(--mdc-theme-secondary);
    }
  `;
et([
  y({ type: Object })
], Re.prototype, "selection", 2);
et([
  y({ type: Boolean })
], Re.prototype, "multi", 2);
et([
  y({ type: Number })
], Re.prototype, "depth", 1);
et([
  y({ type: Array })
], Re.prototype, "paths", 1);
et([
  y({ type: Array })
], Re.prototype, "path", 1);
et([
  y({ attribute: !1 })
], Re.prototype, "read", 2);
et([
  y({ attribute: !1 })
], Re.prototype, "loaded", 2);
et([
  Y("div")
], Re.prototype, "container", 2);
Re = et([
  pe("finder-list")
], Re);
function $l(e) {
  return e.startsWith("IED:") ? e.replace(/^.*:/, "").trim() : e.startsWith("LN0:") ? "LLN0" : e.replace(/^.*>/, "").trim();
}
function Ll(e, t) {
  return async (i) => {
    const [n, r] = i[i.length - 1]?.split(": ", 2), a = Ye(e, n, r);
    return a ? {
      path: i,
      header: void 0,
      entries: t(a).map(
        (o) => `${o.tagName}: ${P(o)}`
      )
    } : { path: i, header: p`<p>${l("error")}</p>`, entries: [] };
  };
}
function Ra(e) {
  if (["LDevice", "Server"].includes(e.tagName))
    return Array.from(e.children).filter(
      (i) => i.tagName === "LDevice" || i.tagName === "LN0" || i.tagName === "LN"
    );
  const t = e.tagName === "LN" || e.tagName === "LN0" ? e.getAttribute("lnType") : e.getAttribute("type");
  return Array.from(
    e.ownerDocument.querySelectorAll(
      `LNodeType[id="${t}"] > DO, DOType[id="${t}"] > SDO, DOType[id="${t}"] > DA, DAType[id="${t}"] > BDA`
    )
  );
}
function zl(e) {
  return p`<finder-list
    multi
    .paths=${[["Server: " + P(e)]]}
    .read=${Ll(e.ownerDocument, Ra)}
    .getDisplayString=${$l}
    .getTitle=${(t) => t[t.length - 1]}
  ></finder-list>`;
}
function Tl(e, t) {
  const [i, n] = t[t.length - 1].split(": "), r = Ye(e.ownerDocument, i, n);
  if (!r || Ra(r).length > 0) return;
  const a = t.find((E) => E.startsWith("LN"));
  if (!a) return;
  const [o, c] = a.split(": "), d = Ye(e.ownerDocument, o, c);
  if (!d) return;
  const u = d.closest("LDevice")?.getAttribute("inst"), m = d.getAttribute("prefix") ?? "", f = d.getAttribute("lnClass"), b = d.getAttribute("inst") && d.getAttribute("inst") !== "" ? d.getAttribute("inst") : null;
  let A = "", S = "", C = "";
  for (const E of t) {
    const [x, F] = E.split(": ");
    if (!["DO", "DA", "SDO", "BDA"].includes(x)) continue;
    const q = Ye(e.ownerDocument, x, F);
    if (!q) return;
    const R = q.getAttribute("name");
    x === "DO" && (A = R), x === "SDO" && (A = A + "." + R), x === "DA" && (S = R, C = q.getAttribute("fc") ?? ""), x === "BDA" && (S = S + "." + R);
  }
  if (!(!u || !f || !A || !S || !C))
    return W(e.ownerDocument, "FCDA", {
      ldInst: u,
      prefix: m,
      lnClass: f,
      lnInst: b,
      doName: A,
      daName: S,
      fc: C
    });
}
function _l(e) {
  return (t, i) => {
    const r = i.shadowRoot.querySelector("finder-list")?.paths ?? [], a = [];
    for (const o of r) {
      const c = Tl(e, o);
      c && a.push({
        new: {
          parent: e,
          element: c,
          reference: null
        }
      });
    }
    return a;
  };
}
function Oa(e) {
  const t = e.closest("Server");
  return [
    {
      title: l("wizard.title.add", { tagName: "FCDA" }),
      primary: {
        label: "add",
        icon: "add",
        action: _l(e)
      },
      content: [t ? zl(t) : p``]
    }
  ];
}
const Qe = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  asciName: "[A-Za-z][0-9,A-Z,a-z_]*",
  abstractDataAttributeName: "((T)|(Test)|(Check)|(SIUnit)|(Oper)|(SBO)|(SBOw)|(Cancel)|[a-z][0-9A-Za-z]*)"
}, Tn = {
  cbName: 32,
  abstracDaName: 60
};
function on(e, t) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { ...e, ...t?.detail }
  });
}
function Vl(e) {
  return (t, i, n) => {
    const r = n.items.filter((c) => c.selected).map((c) => c.value).map((c) => Ye(e.ownerDocument, "LNodeType", c)).filter((c) => c !== null), a = Ia(e);
    return r.map((c) => {
      const d = c.getAttribute("lnClass");
      if (!d) return null;
      const u = a(d);
      if (!u) {
        i.dispatchEvent(
          on({
            kind: "error",
            title: l("lnode.log.title", { lnClass: d }),
            message: l("lnode.log.nonuniquelninst")
          })
        );
        return;
      }
      const m = K(e, "LNode").some(
        (S) => S.getAttribute("lnClass") === "LLN0"
      );
      if (d === "LLN0" && m) {
        i.dispatchEvent(
          on({
            kind: "error",
            title: l("lnode.log.title", { lnClass: d }),
            message: l("lnode.log.uniqueln0", { lnClass: d })
          })
        );
        return;
      }
      const f = K(e, "LNode").some(
        (S) => S.getAttribute("lnClass") === "LPHD"
      );
      if (d === "LPHD" && f) {
        i.dispatchEvent(
          on({
            kind: "error",
            title: l("lnode.log.title", { lnClass: d }),
            message: l("lnode.log.uniqueln0", { lnClass: d })
          })
        );
        return;
      }
      const b = d === "LLN0" ? "" : u, A = W(e.ownerDocument, "LNode", {
        iedName: "None",
        ldInst: null,
        prefix: null,
        lnClass: d,
        lnInst: b,
        lnType: c.getAttribute("id")
      });
      return { new: { parent: e, element: A } };
    }).filter((c) => c);
  };
}
function Pl(e) {
  return (t) => {
    t.dispatchEvent(oe()), t.dispatchEvent(oe(Ha(e)));
  };
}
function Fa(e) {
  const t = Array.from(
    e.ownerDocument.querySelectorAll("LNodeType")
  );
  return [
    {
      title: l("lnode.wizard.title.selectLNodeTypes"),
      menuActions: [
        {
          icon: "",
          label: l("lnode.wizard.reference"),
          action: Pl(e)
        }
      ],
      primary: {
        icon: "save",
        label: l("save"),
        action: Vl(e)
      },
      content: [
        z`<filtered-list multi
          >${t.map((i) => {
          const n = i.getAttribute("lnClass") === "LLN0" && K(e, "LNode").some(
            (r) => r.getAttribute("lnClass") === "LLN0"
          ) || i.getAttribute("lnClass") === "LPHD" && K(e, "LNode").some(
            (r) => r.getAttribute("lnClass") === "LPHD"
          );
          return z`<mwc-check-list-item
              twoline
              value="${P(i)}"
              ?disabled=${n}
              ><span>${i.getAttribute("lnClass")}</span
              ><span slot="secondary"
                >${n ? l("lnode.wizard.uniquewarning") : P(i)}</span
              ></mwc-check-list-item
            >`;
        })}</filtered-list
        >`
      ]
    }
  ];
}
const Ml = {
  CBR: ["CSWI", "CILO", "XCBR"],
  DIS: ["CSWI", "CILO", "XSWI"],
  VTR: ["TVTR"],
  CTR: ["TCTR"],
  Bay: ["LLN0"],
  VoltageLevel: ["LLN0"],
  Substation: ["LLN0"]
};
function qa(e, t) {
  return e.disabled !== t.disabled ? t.disabled ? -1 : 1 : e.preferred !== t.preferred ? e.preferred ? -1 : 1 : e.selected !== t.selected ? e.selected ? -1 : 1 : 0;
}
const Rl = "Client LN";
function jr(e, t) {
  return Array.from(e.getElementsByTagName("LNode")).filter((i) => !i.closest("Private")).filter((i) => _n(t, i))[0] ?? null;
}
function _n(e, t) {
  return (t.getAttribute("iedName") ?? "") === (e.closest("IED")?.getAttribute("name") ?? "") && (t.getAttribute("ldInst") ?? "") === (e.closest("LDevice")?.getAttribute("inst") ?? "") && (t.getAttribute("prefix") ?? "") === (e.getAttribute("prefix") ?? "") && (t.getAttribute("lnClass") ?? "") === (e.getAttribute("lnClass") ?? "") && (t.getAttribute("lnInst") ?? "") === (e.getAttribute("inst") ?? "");
}
function Ol(e, t) {
  const i = W(e.ownerDocument, "LNode", {
    iedName: t.closest("IED")?.getAttribute("name") ?? "",
    ldInst: t.closest("LDevice")?.getAttribute("inst") ?? "",
    prefix: t.getAttribute("prefix") ?? "",
    lnClass: t.getAttribute("lnClass") ?? "",
    lnInst: t.getAttribute("inst") ?? ""
  });
  return {
    new: {
      parent: e,
      element: i
    }
  };
}
function Fl(e, t) {
  return {
    old: {
      parent: e,
      element: t,
      reference: t.nextElementSibling
    }
  };
}
function ql(e, t) {
  return e.some((i) => _n(i, t));
}
function Hl(e, t) {
  return t.some((i) => _n(e, i));
}
function Bl(e) {
  return (t, i, n) => {
    const r = n.items.filter((d) => d.selected).map((d) => d.value).map((d) => {
      const u = Ye(e.ownerDocument, "LN0", d);
      return u || Ye(e.ownerDocument, "LN", d);
    }).filter((d) => d !== null), a = K(e, "LNode").filter(
      De
    ), o = a.filter((d) => !ql(r, d)).map((d) => Fl(e, d)), c = r.filter((d) => !Hl(d, a)).map((d) => Ol(e, d));
    return o.concat(c);
  };
}
function Gl(e, t) {
  return e.parentElement?.parentElement?.nextElementSibling?.querySelector(
    t
  ) ?? null;
}
function Wl(e, t) {
  if (!(e.target instanceof Ie)) return;
  const i = Gl(e.target, "#lnList");
  if (i === null) return;
  const n = t.ownerDocument, o = e.target.selected.flatMap(
    (c) => Array.from(
      n.querySelectorAll(
        `:root > IED[name="${c.value}"] > AccessPoint > LN,:root > IED[name="${c.value}"] > AccessPoint > Server > LDevice > LN,:root > IED[name="${c.value}"] > AccessPoint > Server > LDevice > LN0`
      )
    ).filter((d) => !d.closest("Private"))
  ).filter((c) => c !== null).map((c) => {
    const d = Ml[t.getAttribute("type") ? t.getAttribute("type") ?? "" : t.tagName ?? ""]?.includes(c.getAttribute("lnClass") ?? "") ?? !1, u = jr(t.ownerDocument, c), m = u?.parentElement === t;
    return {
      selected: m,
      disabled: u !== null && !m,
      prefered: d,
      element: c
    };
  }).sort(qa).map((c) => z`<mwc-check-list-item
      ?selected=${c.selected}
      ?disabled=${c.disabled}
      value="${P(c.element)}"
      twoline
      ><span
        >${c.element.getAttribute("prefix") ?? ""}${c.element.getAttribute("lnClass")}${c.element.getAttribute(
    "inst"
  ) ?? ""}
        ${c.disabled ? z` <mwc-icon style="--mdc-icon-size: 1em;"
                >account_tree</mwc-icon
              >
              ${Zs(jr(n, c.element))}` : ""}</span
      ><span slot="secondary"
        >${c.element.closest("IED")?.getAttribute("name") ?? ""} |
        ${c.element.closest("LDevice") ? c.element.closest("LDevice")?.getAttribute("inst") : Rl}</span
      ></mwc-check-list-item
    >`);
  aa(z`${o}`, i);
}
function jl(e) {
  const t = e.ownerDocument;
  return t.querySelectorAll(":root > IED").length > 0 ? z`<filtered-list
      disableCheckAll
      multi
      id="iedList"
      @selected=${(i) => Wl(i, e)}
      >${Array.from(t.querySelectorAll(":root > IED")).map((i) => i.getAttribute("name")).map((i) => ({
    selected: Array.from(e.children).filter((n) => !n.closest("Private")).filter(
      (n) => n.tagName === "LNode" && n.getAttribute("iedName") === i
    ).length > 0,
    iedName: i
  })).sort(qa).map(
    (i) => z`<mwc-check-list-item
              value="${i.iedName ?? ""}"
              ?selected=${i.selected}
              >${i.iedName}</mwc-check-list-item
            >`
  )}</filtered-list
    >` : z`<mwc-list-item noninteractive graphic="icon">
      <span>${l("lnode.wizard.placeholder")}</span>
      <mwc-icon slot="graphic">info</mwc-icon>
    </mwc-list-item>`;
}
function Ul(e) {
  return (t) => {
    t.dispatchEvent(oe()), t.dispatchEvent(oe(Fa(e)));
  };
}
function Ha(e) {
  return [
    {
      title: l("lnode.wizard.title.selectIEDs"),
      menuActions: [
        {
          icon: "",
          label: l("lnode.wizard.instance"),
          action: Ul(e)
        }
      ],
      content: [jl(e)]
    },
    {
      initial: Array.from(e.children).some(
        (t) => t.tagName === "LNode"
      ),
      title: l("lnode.wizard.title.selectLNs"),
      primary: {
        icon: "save",
        label: l("save"),
        action: Bl(e)
      },
      content: [z`<filtered-list multi id="lnList"></filtered-list>`]
    }
  ];
}
function Kl(e) {
  return e.tagName === "Function" || e.tagName === "SubFunction" || e.tagName === "EqFunction" || e.tagName === "EqSubFunction" ? Fa(e) : Ha(e);
}
function Zl(e) {
  const t = e.iedName !== "None";
  return [
    z`<wizard-textfield
      label="iedName"
      .maybeValue=${e.iedName}
      helper="${l("scl.iedName")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    z`<wizard-textfield
      label="ldInst"
      .maybeValue=${e.ldInst}
      helper="${l("scl.ldInst")}"
      helperPersistent
      nullable
      disabled
    ></wizard-textfield>`,
    z`<wizard-textfield
      label="prefix"
      .maybeValue=${e.prefix}
      helper="${l("scl.prefix")}"
      pattern="${Qe.asciName}"
      maxLength="11"
      helperPersistent
      nullable
      ?disabled=${t}
    ></wizard-textfield>`,
    z`<wizard-textfield
      label="lnClass"
      .maybeValue=${e.lnClass}
      helper="${l("scl.lnClass")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    z`<wizard-textfield
      label="lnInst"
      .maybeValue=${e.lnInst}
      helper="${l("scl.lnInst")}"
      helperPersistent
      type="number"
      min="1"
      max="99"
      .reservedValues=${e.reservedLnInst}
      ?disabled=${t}
    ></wizard-textfield>`
  ];
}
function Xl(e) {
  return (t) => {
    const i = {}, n = ["iedName", "ldInst", "prefix", "lnClass", "lnInst"];
    n.forEach((a) => {
      i[a] = g(t.find((o) => o.label === a));
    });
    let r = null;
    if (n.some((a) => i[a] !== e.getAttribute(a))) {
      const a = U(e, i);
      return r = {
        old: { element: e },
        new: { element: a }
      }, [r];
    }
    return [];
  };
}
function Yl(e) {
  const [t, i, n, r, a] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((c) => e.getAttribute(c)), o = K(
    e.parentElement,
    "LNode"
  ).filter(
    (c) => c !== e && c.getAttribute("lnClass") === e.getAttribute("lnClass")
  ).map((c) => c.getAttribute("lnInst"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "LNode" }),
      element: e,
      primary: {
        label: l("save"),
        icon: "save",
        action: Xl(e)
      },
      content: [
        ...Zl({
          iedName: t,
          ldInst: i,
          prefix: n,
          lnClass: r,
          lnInst: a,
          reservedLnInst: o
        })
      ]
    }
  ];
}
function Ql(e) {
  return Object.entries(e).map(
    ([t, i]) => p`<wizard-checkbox
        label="${t}"
        .maybeValue=${i}
        nullable
        helper="${l(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function Jl(e) {
  return (t) => {
    const i = g(t.find((f) => f.label === "seqNum")), n = g(t.find((f) => f.label === "timeStamp")), r = g(t.find((f) => f.label === "dataSet")), a = g(t.find((f) => f.label === "reasonCode")), o = g(t.find((f) => f.label === "dataRef")), c = g(t.find((f) => f.label === "entryID")), d = g(t.find((f) => f.label === "configRef")), u = g(t.find((f) => f.label === "bufOvfl"));
    if (i === e.getAttribute("seqNum") && n === e.getAttribute("timeStamp") && r === e.getAttribute("dataSet") && a === e.getAttribute("reasonCode") && o === e.getAttribute("dataRef") && c === e.getAttribute("entryID") && d === e.getAttribute("configRef") && u === e.getAttribute("bufOvfl"))
      return [];
    const m = U(e, {
      seqNum: i,
      timeStamp: n,
      dataSet: r,
      reasonCode: a,
      dataRef: o,
      entryID: c,
      configRef: d,
      bufOvfl: u
    });
    return [{ old: { element: e }, new: { element: m } }];
  };
}
function ed(e) {
  const [
    t,
    i,
    n,
    r,
    a,
    o,
    c,
    d
  ] = [
    "seqNum",
    "timeStamp",
    "dataSet",
    "reasonCode",
    "dataRef",
    "entryID",
    "configRef",
    "bufOvfl"
  ].map((u) => e.getAttribute(u));
  return [
    {
      title: l("wizard.title.edit", { tagName: e.tagName }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Jl(e)
      },
      content: Ql({
        seqNum: t,
        timeStamp: i,
        dataSet: n,
        reasonCode: r,
        dataRef: a,
        entryID: o,
        configRef: c,
        bufOvfl: d
      })
    }
  ];
}
let td = 1, Ba = 1, Ga = 1;
function id(e, t) {
  return t.parentElement?.querySelectorAll(
    `LN[lnClass="CSWI"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="CILO"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="XCBR"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="XSWI"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""}`
  ).forEach((i) => {
    e.appendChild(
      W(t.ownerDocument, "LNode", {
        iedName: i.parentElement?.parentElement?.parentElement?.parentElement?.getAttribute(
          "name"
        ) ?? null,
        ldInst: t.parentElement?.getAttribute("inst") ?? null,
        prefix: i.getAttribute("prefix"),
        lnClass: i.getAttribute("lnClass"),
        lnInst: i.getAttribute("inst")
      })
    );
  }), e;
}
function Wa(e) {
  return e.parentElement?.querySelector(
    `LN[lnClass="XCBR"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""}`
  ) ? "CBR" : "DIS";
}
function nd(e) {
  return e.getAttribute("prefix") && e.getAttribute("inst") ? e.getAttribute("prefix") + e.getAttribute("inst") : e.getAttribute("inst") && Wa(e) === "CBR" ? "QA" + Ba++ : "QB" + Ga++;
}
function rd(e, t) {
  if (Array.from(
    e.querySelectorAll('DOI[name="Pos"] > DAI[name="ctlModel"] > Val')
  ).filter((n) => t.includes(n.innerHTML.trim())).length)
    return !0;
  const i = e.ownerDocument;
  return Array.from(
    i.querySelectorAll(
      `DataTypeTemplates > LNodeType[id="${e.getAttribute(
        "lnType"
      )}"] > DO[name="Pos"]`
    )
  ).map((n) => n.getAttribute("type")).flatMap(
    (n) => Array.from(
      i.querySelectorAll(
        `DOType[id="${n}"] > DA[name="ctlModel"] > Val`
      )
    )
  ).filter((n) => t.includes(n.innerHTML.trim())).length > 0;
}
function ad(e) {
  return Array.from(
    e.querySelectorAll('AccessPoint > Server > LDevice > LN[lnClass="CSWI"]')
  );
}
function od(e, t) {
  return e.parentElement ? ad(e).filter((i) => rd(i, t)) : [];
}
function sd(e, t) {
  const i = od(e, t);
  if (Ba = 1, Ga = 1, i.length) {
    const n = W(e.ownerDocument, "Bay", {
      name: "Q" + td++,
      desc: "Bay for controller " + e.getAttribute("name")
    });
    return i.map((a) => id(
      W(e.ownerDocument, "ConductingEquipment", {
        name: nd(a),
        type: Wa(a)
      }),
      a
    )).forEach((a) => n.appendChild(a)), n;
  }
  return null;
}
function cd(e, t) {
  return (i, n, r) => {
    const a = [], o = r.selected.map(
      (u) => u.value
    ), c = W(e, "VoltageLevel", {
      name: "E1",
      desc: "guessed by OpenSCD",
      nomFreq: "50.0",
      numPhases: "3"
    }), d = W(e, "Voltage", {
      unit: "V",
      multiplier: "k"
    });
    return d.textContent = "110.00", c.appendChild(d), a.push({
      new: { parent: e.querySelector("SCL"), element: t }
    }), a.push({
      new: {
        parent: t,
        element: c
      }
    }), Array.from(e.querySelectorAll(":root > IED")).sort(Ca).map((u) => sd(u, o)).forEach((u) => {
      u && a.push({ new: { parent: c, element: u } });
    }), a;
  };
}
function ld(e, t) {
  return [
    {
      title: l("guess.wizard.title"),
      primary: {
        icon: "play_arrow",
        label: l("guess.wizard.primary"),
        action: cd(e, t)
      },
      content: [
        p`<p>${l("guess.wizard.description")}</p>`,
        p`<mwc-list multi id="ctlModelList"
          ><mwc-check-list-item value="status-only"
            >status-only</mwc-check-list-item
          ><mwc-check-list-item value="direct-with-normal-security"
            >direct-with-normal-security</mwc-check-list-item
          ><mwc-check-list-item value="direct-with-enhanced-security"
            >direct-with-enhanced-security</mwc-check-list-item
          ><mwc-check-list-item value="sbo-with-normal-security"
            >sbo-with-normal-security</mwc-check-list-item
          ><mwc-check-list-item selected value="sbo-with-enhanced-security"
            >sbo-with-enhanced-security</mwc-check-list-item
          ></mwc-list
        >`
      ]
    }
  ];
}
const dd = {
  scl: {
    id: "ID",
    name: "Name",
    desc: "Beschreibung",
    ord: "Rang",
    value: "Wert",
    EnumVal: "Enum Wert",
    EnumType: "Enum Typ",
    DA: "Datenattribut",
    DO: "Datenobjekt",
    DAType: "Datenattribut Typ",
    DOType: "Datenobjekt Typ",
    CDC: " Datenklasse nach 7-3",
    Report: "Report",
    LN: "Logischer Knoten",
    bType: "Basic type",
    type: "Type",
    sAddr: "Short address",
    valKind: "Value kind",
    valImport: "Import value",
    fc: "Funktionale Einschränkung",
    LNodeType: "Logischer Knoten Type",
    lnClass: "Klasse logischer Knoten",
    accessControl: "Zugriffskontrolle",
    transient: "Datenpunkt transient",
    Val: "Standardwert",
    dchg: "Detenänderung ist Auslöser",
    qchg: "Qualitätsanderung ist Auslöser",
    dupd: "Datenupdate ist Auslöser",
    period: "Periodisch übertragen",
    gi: "Manuelle Abfrage",
    fixedOffs: "Fester Offset",
    securityEnable: "Aktive Sicherungsmaßnahmen",
    DataSet: "Datensatz",
    Communication: "Kommunikation",
    TrgOps: "Triggerbedingungen",
    OptFields: "Optionale felder",
    multicast: "SMV nach IEC 61850 9-2",
    smpMod: "Abtast-Art",
    smpRate: "Abtastrate",
    nofASDU: "Abtastpunkte pro Datenpacket",
    seqNum: "Sequenznummer mitschicken",
    timeStamp: "Zeitstempel mitschicken",
    dataSet: "Datensatz-Reference mitschicken",
    reasonCode: "Was hat den Report getriggert?",
    dataRef: "Beschreibung der Datensatzes",
    entryID: "Entry ID mitschicken",
    configRef: "Konfigurations-Revision mitschicken",
    bufOvfl: "Überlauf des internen Speichers signalisieren",
    indexed: "Mehrere Instanzen möglich",
    buffered: "Gepufferter Report",
    maxReport: "Anzahl Instanzen",
    bufTime: "Min. Intervall zwischen zwei Reports",
    intgPd: "Intervall zwischen zwei periodischen Reports",
    SmvOpts: "Optionale Informationen",
    refreshTime: "Zeitstempel des Abtastwertes zu Telegram hinzufügen",
    sampleRate: "Abtastrate zu Telegram hinzufügen",
    security: "Potentiel in Zukunft für z.B. digitale Signature",
    synchSourceId: "Identität der Zeitquelle zu Telegram hinzufügen",
    SampledValueControl: "Sampled Value Kontrollblock",
    iedName: "Referenziertes IED",
    ldInst: "Referenziertes logisches Gerät",
    prefix: "Präfix des logischen Knotens",
    lnInst: "Instanz des logischen Knotens",
    virtual: "Virtuell",
    phase: "Phase"
  },
  settings: {
    title: "Einstellungen",
    language: "Sprache",
    languages: { de: "Deutsch", en: "Englisch (English)" },
    dark: "Dunkles Design",
    mode: "Profimodus",
    showieds: "Zeige IEDs im Substation-Editor",
    selectFileButton: "Datei auswählen",
    loadNsdTranslations: "NSDoc-Dateien hochladen",
    invalidFileNoIdFound: "Ungültiges NSDoc ({{ filename }}); kein 'id'-Attribut in der Datei gefunden",
    invalidNsdocVersion: "Die Version {{ id }} NSD ({{ nsdVersion }}) passt nicht zu der geladenen NSDoc ({{ filename }}, {{ nsdocVersion }})"
  },
  menu: {
    new: "Neues projekt",
    title: "Menü",
    viewLog: "Protokoll anzeigen",
    viewDiag: "Daignose anzeigen"
  },
  wizard: {
    title: {
      select: "{{tagName}} auswählen",
      edit: "{{tagName}} bearbeiten",
      add: "{{tagName}} hinzufügen"
    }
  },
  openSCD: {
    loading: "Lade Projekt {{ name }}",
    loaded: "{{ name }} geladen",
    readError: "{{ name }} Lesefehler",
    readAbort: "{{ name }} Leseabbruch"
  },
  zeroline: {
    iedsloading: "IEDs werden geladen...",
    showieds: "IEDs im Substation-Editor anzeigen/ausblenden",
    showfunctions: "Funktionselemente in der Ansicht filtern",
    commmap: "Kommunikationszuordnung",
    reportcontrol: "Reports anzeigen",
    gsecontrol: "GOOSEs anzeigen",
    smvcontrol: "Sampled Values anzeigen"
  },
  editing: {
    node: "Benutzerdefiniertes Objekt",
    created: "{{ name }} hinzugefügt",
    deleted: "{{ name }} entfernt",
    moved: "{{ name }} verschoben",
    updated: "{{ name }} bearbeitet",
    import: "{{name}} importiert",
    complex: "Mehrere Elemente bearbeitet",
    error: {
      create: "Konnte {{ name }} nicht hinzufügen",
      update: "Konnte {{ name }} nicht bearbeiten",
      move: "Konnte {{ name }} nicht verschieben",
      duplicate: "Konnte {{name}} nicht kopieren",
      nameClash: '{{ parent }} enthält bereits ein {{ child }} Kind namens "{{ name }}"',
      idClash: 'Das Projekt enthält bereits die ID "{{ id }}"'
    }
  },
  validator: {
    schema: {
      title: "Projekt validieren",
      valid: "{{ name }} erfolgreich validiert gegen XML-Schema",
      invalid: "{{ name }} Schema-Validierung fehlgeschlagen",
      fatal: "Fataler Validierungsfehler",
      loadError: "Konnte XML-Schema {{ name }} nicht laden"
    },
    templates: {
      title: "Templates validieren",
      mandatoryChild: "{{ tag }} {{ id }} fehlt ein obligatorisches {{ childTag }}-Kind {{ childId }}",
      missingAttribute: "Das Attribut {{attr}} ist verpflichted und fehlt in {{element}}",
      incorrectAttribute: "Das Attribut {{attr}} in Element {{element}} folgt nicht der Definition.",
      missingReference: '{{tag}} "{{name}}" hat eine ungültige Referenz - es fehlt der definierte Typ'
    }
  },
  textfield: {
    required: "Pflichtfeld",
    nonempty: "Darf nicht leer sein",
    noMultiplier: "keiner",
    unique: "Darf sich nicht wiederholen"
  },
  compare: {
    compareButton: "Starte Vergleich",
    attributes: "Attribute von {{ elementName }}",
    children: "Kindelemente von {{ elementName }}",
    filterMutables: "Projektspzifische Unterschiede ausblenden"
  },
  log: {
    name: "Protokoll",
    placeholder: "Hier werden Änderungen, Fehler und andere Meldungen angezeigt.",
    snackbar: {
      show: "Anzeigen",
      placeholder: "Keine Fehler"
    }
  },
  history: {
    name: "SCL History",
    placeholder: "Keine History",
    noEntries: "Keine Einträge in der SCL History"
  },
  diag: {
    name: "Daignoseübersicht",
    zeroissues: "Es konnten keine Fehler in dem Projekt gefunden werden.",
    placeholder: "Hier werden Validierungsfehler angezeigt.",
    missingnsd: "DataTypeTemplates können nicht validiert werden. Das Projekt muss die Version 2007B3 oder höher haben."
  },
  plugins: {
    heading: "Plug-ins",
    editor: "Editor",
    menu: "Menüeintrag",
    requireDoc: "Benötigt Dokument",
    top: "oben",
    middle: "mittig",
    bottom: "unten",
    validator: "Validator",
    add: {
      heading: "Benutzerdefinierte plug-in",
      warning: `Hier können Sie benutzerdefinierte plug-ins hinzufügen.
                OpenSCD übernimmt hierfür keine Gewähr.`,
      name: "Name",
      nameHelper: "Lokaler Name der plug-in (frei wählbar)",
      src: "URL",
      srcHelper: "Die plug-in-URL des Herstellers"
    }
  },
  substation: {
    name: "Schaltanlage",
    missing: "Keine Schaltanlage",
    wizard: {
      nameHelper: "Name der Schaltanlage",
      descHelper: "Beschreibung der Schaltanlage",
      title: {
        add: "Schaltanlage hinzufügen",
        edit: "Schaltanlage bearbeiten"
      }
    },
    action: {
      addvoltagelevel: "Spannungsebene hinzufügen",
      updatesubstation: 'Schaltanlage "{{name}}" bearbeitet'
    },
    clone: {
      redirect: "LNode mitnehmen",
      cloneclose: "Einmal klonen",
      cloneproc: "Mehrfach klonen",
      newname: "Klonname"
    }
  },
  iededitor: {
    iedSelector: "IED auswählen",
    lnFilter: "Filter für logische Knoten",
    missing: "Kein IED vorhanden",
    toggleChildElements: "Kindelemente umschalten",
    settings: "Services für IED or AccessPoint",
    wizard: {
      daTitle: "DA Informationen anzeigen",
      doTitle: "DO Informationen anzeigen",
      nsdocDescription: "NSDoc Beschreibung",
      doiDescription: "Beschreibung des DOI",
      daiDescription: "Beschreibung des DAI",
      ied: "IED",
      accessPoint: "Zugangspunkt",
      lDevice: "Logisches Gerät",
      lnPrefix: "LN Präfix",
      lnDescription: "LN Beschreibung",
      lnInst: "LN Instanz",
      doName: "DO Name",
      doCdc: "DO Common Data Class",
      daName: "DA Name",
      daFc: "DA Functional Constraint",
      daBType: "DA Typ",
      daValue: "DA Wert"
    }
  },
  ied: {
    wizard: {
      nameHelper: "Name des IED",
      descHelper: "Beschreibung des IED",
      title: {
        edit: "IED bearbeiten",
        delete: "IED mit Abhängigkeiten entfernen",
        references: "Gelöschte Abhängikeiten"
      }
    },
    action: {
      updateied: 'IED "{{name}}" bearbeitet',
      deleteied: 'IED "{{name}}" entfernt'
    }
  },
  ldevice: {
    wizard: {
      nameHelper: "Name des Logisches Gerät",
      noNameSupportHelper: "IED unterstützt keine funktionale Benennung",
      descHelper: "Beschreibung des Logisches Gerät",
      title: {
        edit: "Logisches Gerät bearbeiten"
      }
    }
  },
  ln: {
    wizard: {
      title: {
        edit: "LN bearbeiten"
      },
      descHelper: "Logical Node Beschreibung",
      lnTypeHelper: "Logical Node Typ",
      prefixHelper: "Prefix des Logical Nodes",
      lnClassHelper: "Logical Node Klasse",
      instHelper: "Instanz"
    }
  },
  ln0: {
    wizard: {
      title: {
        edit: "LN0 bearbeiten"
      },
      descHelper: "Logical Node Beschreibung",
      lnTypeHelper: "Logical Node Typ",
      lnClassHelper: "Logical Node Klasse",
      instHelper: "Instanz"
    }
  },
  powertransformer: {
    wizard: {
      nameHelper: "`Name des Leistungstransformators",
      descHelper: "Beschreibung des Leistungstransformators",
      typeHelper: "Type des Leistungstransformators",
      title: {
        add: "Leistungstransformator hinzufügen",
        edit: "Leistungstransformator bearbeiten"
      }
    }
  },
  voltagelevel: {
    name: "Spannungsebene",
    wizard: {
      nameHelper: "Name der Spannungsebene",
      descHelper: "Beschreibung der Spannungsebene",
      nomFreqHelper: "Nennfrequenz",
      numPhaseHelper: "Phasenanzahl",
      voltageHelper: "Nennspannung",
      title: {
        add: "Spannungsebene hinzufügen",
        edit: "Spannungsebene bearbeiten"
      }
    },
    action: {
      updateVoltagelevel: 'Spannungsebene "{{name}}" bearbeitet'
    }
  },
  line: {
    name: "Linie",
    wizard: {
      nameHelper: "Liniename",
      descHelper: "Beschreibung des Linies",
      typeHelper: "Type des Linies",
      title: {
        add: "Linie hinzufügen",
        edit: "Linie bearbeiten"
      }
    },
    action: {
      updateLine: 'Edited line "{{name}}"'
    }
  },
  process: {
    name: "Process",
    wizard: {
      nameHelper: "Processname",
      descHelper: "Beschreibung des Processes",
      typeHelper: "Type des Processes",
      title: {
        add: "Process hinzufügen",
        edit: "Process bearbeiten"
      }
    },
    action: {
      updateProcess: 'Edited Process "{{name}}"'
    }
  },
  bay: {
    name: "Feld",
    wizard: {
      nameHelper: "Feldname",
      descHelper: "Beschreibung des Feldes",
      title: {
        add: "Feld hinzufügen",
        edit: "Feld bearbeiten"
      }
    },
    action: {
      updateBay: 'Feld "{{name}}" bearbeitet'
    }
  },
  conductingequipment: {
    name: "Primärelement",
    wizard: {
      nameHelper: "Name des Primärelements",
      descHelper: "Beschreibung des Primärelements",
      typeHelper: "Type des Primärelements",
      title: {
        add: "Primärelement hinzufügen",
        edit: "Primärelement bearbeiten"
      }
    },
    unknownType: "Unbekannter Typ"
  },
  connectivitynode: {
    name: "Verbindungsknoten",
    wizard: {
      nameHelper: "Verbindungsknoten Name",
      pathNameHelper: "Verbindungsknoten Beschreibung",
      title: {
        add: "Verbindungsknoten hinzufügen",
        edit: "Verbindungsknoten bearbeiten"
      }
    }
  },
  terminal: {
    name: "Anschluss",
    wizard: {
      nameHelper: "Anschluss Name",
      connectivityNodeHelper: "Anschluss Verbindungsknoten",
      cNodeNameHelper: "Anschluss Verbindungsknoten Name",
      title: {
        add: "Anschlussknoten hinzufügen",
        edit: "Anschlussknoten bearbeiten"
      }
    }
  },
  templates: {
    name: "Data Type Templates",
    missing: "DataTypeTemplates fehlen",
    add: "DataTypeTemplates hinzufügen"
  },
  subscription: {
    none: "Keine Verbindung vorhanden",
    connect: "Daten-Attribut verbunden",
    disconnect: "Daten-Attribute Verbindung gelöst",
    subscriber: {
      subscribed: "Verbunden",
      notSubscribed: "Nicht Verbunden",
      availableToSubscribe: "Kann verbunden werden",
      partiallySubscribed: "Teilweise verbunden",
      noControlBlockSelected: "Keine Kontrollblock ausgewählt",
      noIedSelected: "Keine IED ausgewählt"
    },
    goose: {
      publisher: {
        title: "GOOSE-Publizierer",
        subscriberTitle: "Verbunden mit {{ selected }}"
      },
      subscriber: {
        iedListTitle: "Verbunden mit GOOSE Meldungen",
        publisherTitle: "GOOSE Nachricht verbunden mit {{ selected }}"
      },
      view: {
        publisherView: "Publisher | Subscriber",
        subscriberView: "Subscriber | Publisher"
      }
    },
    smv: {
      publisher: {
        title: "SampledValue-Publizierer",
        subscriberTitle: "Verbunden mit {{ selected }}"
      },
      subscriber: {
        iedListTitle: "Verbunden mit Sampled Values",
        publisherTitle: "Sampled Value  verbunden mit {{ selected }}"
      },
      view: {
        publisherView: "Publisher | Subscriber",
        subscriberView: "Subscriber | Publisher"
      }
    },
    binding: {
      extRefList: {
        title: "Logische Knoten für ausgewählten Daten-Attribute",
        noSelection: "Kein Daten-Attribute ausgewählt",
        noSubscribedLNs: "Kein Verbinding zu dem ausgewählten Daten-Attribute",
        noAvailableLNs: "Keine Verbindung zu dem ausgewählten Daten-Attribute möglich"
      }
    },
    laterBinding: {
      extRefList: {
        title: "Für Ausgewählte Daten-Attribut Verfügbare Verbindung",
        noSelection: "Kein Daten-Attribut ausgewählt",
        noSubscribedExtRefs: "Keine bestehenden Verbindungen",
        noAvailableExtRefs: "Keine verfügbaren Eingänge vorhanden"
      }
    },
    SampledValueControl: {
      controlBlockList: {
        title: "Sample Value Meldungen",
        noControlBlockFound: "Keine Sampled Values gefunden"
      }
    },
    GSEControl: {
      controlBlockList: {
        title: "GOOSE-Meldungen",
        noControlBlockFound: "Keine GOOSEs gefunden"
      }
    }
  },
  protocol104: {
    toggleChildElements: "Kindelemente umschalten",
    view: {
      valuesView: "Werte",
      networkView: "Netzwerk"
    },
    mappedCmv: 'Gemäß dem IEC 61850-80-1 Standard ist eine "{{ cdc }}" zuordnung über CMV erforderlich',
    values: {
      missing: "Kein IED mit 104 Adressen",
      removeAddresses: "Alle Adressen entfernen",
      removedAddresses: '{{ nrOfAddresses }} Addressen von DOI "{{ name }}" entfernt',
      addedAddress: '104-Addressen zu DO "{{ name }}" in LN(0) "{{ lnName }}" hinzugefügt',
      signalNames: {
        tiNumber1: "Einzelwertinformation",
        tiNumber3: "Zweipunktinformation",
        tiNumber5: "Stufenpositionsinformation",
        tiNumber7: "Bit string von 32 Bit",
        tiNumber9: "Gemessener Wert, normalisierter Wert",
        tiNumber11: "Gemessener Wert, skalierte Wert",
        tiNumber13: "Gemessener Wert, Kurz-Gleitkommazahl",
        tiNumber15: "Integrierte Summen",
        tiNumber20: "Verpackte Einzelwertinformation mit Statusänderungserkennung",
        tiNumber21: "Gemessener Wert, normalisierter Wert ohne Qualitätsbeschreibung",
        tiNumber30: "Einzelwertinformation mit Zeitstempel CP56Time2a",
        tiNumber31: "Zweipunktinformation mit Zeitstempel CP56Time2a",
        tiNumber32: "Stufenpositionsinformation mit Zeitstempel CP56Time2a",
        tiNumber33: "Bit string von 32 Bit mit Zeitstempel CP56Time2a",
        tiNumber34: "Gemessener Wert, normalisierter Wert mit Zeitstempel CP56Time2a",
        tiNumber35: "Gemessener Wert, skalierte Wert mit Zeitstempel CP56Time2a",
        tiNumber36: "Gemessener Wert, Kurz-Gleitkommazahl mit Zeitstempel CP56Time2a",
        tiNumber37: "Integrierte Summen mit Zeitstempel CP56Time2a",
        tiNumber38: "Ereignis von Schutzeinrichtung mit Zeitstempel CP56Time2a",
        tiNumber39: "Verpackte Startereignisse von Schutzeinrichtung mit Zeitstempel CP56Time2a",
        tiNumber40: "Verpackte Ausgangsschaltkreisinformationen von Schutzeinrichtung mit Zeitstempel CP56Time2a",
        tiNumber45: "Einzelbefehl",
        tiNumber46: "Doppelbefehl",
        tiNumber47: "Regelungsschritt-Befehl",
        tiNumber48: "Sollwertbefehl, normalisierter Wert",
        tiNumber49: "Sollwertbefehl, skalierte Wert",
        tiNumber50: "Sollwertbefehl, Kurz-Gleitkommazahl",
        tiNumber51: "Bit string von 32 Bit Befehl",
        tiNumber58: "Einzelbefehl mit Zeitstempel CP56Time2a",
        tiNumber59: "Doppelbefehl mit Zeitstempel CP56Time2a",
        tiNumber60: "Regelungsschritt-Befehl mit Zeitstempel CP56Time2a",
        tiNumber61: "Gemessener Wert, normalisierter Wert Befehl mit Zeitstempel CP56Time2a",
        tiNumber62: "Gemessener Wert, skalierte Wert Befehl mit Zeitstempel CP56Time2a",
        tiNumber63: "Gemessener Wert, Kurz-Gleitkommazahl Befehl mit Zeitstempel CP56Time2a",
        tiNumber64: "Bit string von 32 Bit Befehl mit Zeitstempel CP56Time2a",
        default: "Keine Beschreibung verfügbar"
      }
    },
    network: {
      connectedAp: {
        wizard: {
          title: {
            edit: "ConnectedAP bearbeiten"
          },
          redundancySwitchLabel: "Redundanz",
          redundancyGroupTitle: "Redundanzgruppen",
          noRedundancyGroupsAvailable: "Keine Redundanzgruppen verfügbar",
          addRedundancyGroup: "Redundanzruppe hinzufügen",
          stationTypeHelper: "Anlagentyp",
          ipHelper: "IP Adresse",
          ipSubnetHelper: "Subnetzmaske",
          wFactorHelper: "???",
          kFactorHelper: "???",
          timeout0Helper: "Time-out Verbindungsaufbau in Sekunden",
          timeout1Helper: "???",
          timeout2Helper: "???",
          timeout3Helper: "???"
        }
      },
      redundancyGroup: {
        wizard: {
          title: {
            edit: "Redundanzgruppe bearbeiten",
            add: "Redundanzgruppe hinzufügen"
          },
          redundancyGroupNumberLabel: "Redundanzgruppennummer",
          addedLRedundancyGroup: '??? {{ rGNumber }} ? SubNetwork[name="{{ subNetworkName }}"] > ConnectedAP[apName="{{ apName }}"][iedName="{{ iedName }}"]',
          editedRedundancyGroup: '??? {{ rGNumber }} ? SubNetwork[name="{{ subNetworkName }}"] > ConnectedAP[apName="{{ apName }}"][iedName="{{ iedName }}"]',
          removedRedundancyGroup: '??? {{ rGNumber }} ? SubNetwork[name="{{ subNetworkName }}"] > ConnectedAP[apName="{{ apName }}"][iedName="{{ iedName }}"]',
          logicLinkGroupTitle: "???",
          noLogicLinksAvailable: "???",
          addLogicLink: "???"
        }
      },
      logicLink: {
        wizard: {
          title: {
            edit: "???",
            add: "???"
          },
          logicLinkNumberLabel: "???",
          addedLogicLink: '??? SubNetwork[name="{{ subNetworkName }}"] > ConnectedAP[apName="{{ apName }}"][iedName="{{ iedName }}"]',
          editedLogicLink: '??? SubNetwork[name="{{ subNetworkName }}"] > ConnectedAP[apName="{{ apName }}"][iedName="{{ iedName }}"]',
          removedLogicLink: '??? SubNetwork[name="{{ subNetworkName }}"] > ConnectedAP[apName="{{ apName }}"][iedName="{{ iedName }}"]'
        }
      }
    },
    wizard: {
      title: {
        doiInfo: "DOI Information",
        addressEdit: "104-Adresse bearbeiten",
        addAddress: "104-Adresse hinzufügen"
      },
      error: {
        ioaConflict: "IOA-Konflikt innerhalb der CASDU-Nummer gefunden",
        addAddressError: 'Invalide Template Struktur, DAI kann nicht hinzugefügt werden (DO: "{{ doType }}", CDC: "{{ cdc }}", Structure: "{{ structure }}")'
      },
      casduHelper: "CASDU Wert",
      ioaHelper: "IOA Wert",
      monitorTiHelper: "TI Wert überwachen",
      monitorInverted: "???",
      monitorCheck: "???",
      controlTiHelper: "???",
      controlInverted: "???",
      controlCheck: "???",
      expectedValueHelper: "???",
      unitMultiplierHelper: "???",
      scaleMultiplierHelper: "???",
      scaleOffsetHelper: "???"
    }
  },
  "compare-ied": {
    selectProjectTitle: "Lade IEDs aus Vorlage",
    selectIedTitle: "IEDs zum Vergleich auswählen",
    resultTitle: "Vergleiche IED mit Vorlage",
    projectIedTitle: "IEDs im Projekt",
    templateIedTitle: "IEDs aus Vorlage",
    selectIedButton: "IED auswählen",
    selectTemplateButton: "Vorlage auswählen",
    noDiff: 'Keine Unterschiede zwischen IED Projekt "{{ projectIedName }}" und IED aus Vorlage "{{ templateIedName }}" gefunden'
  },
  "enum-val": {
    wizard: {
      title: {
        add: "EnumVal hinzufügen",
        edit: "EnumVal bearbeiten"
      }
    }
  },
  enum: {
    wizard: {
      title: {
        add: "EnumType hinzufügen",
        edit: "EnumType bearbeiten"
      }
    },
    action: {
      edit: 'DAType ID "{{oldId}}" und deren DA-Referenzen geändert zu {{newId}} '
    }
  },
  datype: {
    wizard: {
      title: {
        add: "DAType hinzufügen",
        edit: "DAType bearbeiten"
      }
    },
    action: {
      edit: 'EnumType ID "{{oldId}}" und deren DA-Referenzen geändert zu {{newId}} '
    }
  },
  bda: {
    wizard: {
      title: {
        add: "BDA hinzufügen",
        edit: "BDA bearbeiten"
      }
    }
  },
  da: {
    wizard: {
      title: {
        add: "Add DA",
        edit: "Edit DA"
      }
    }
  },
  dai: {
    wizard: {
      valueHelper: "Der Wert sollte vom Typ sein {{type}}",
      title: {
        create: 'DAI "{{daiName}}" hinzufügen',
        edit: 'DAI "{{daiName}}" bearbeiten'
      }
    },
    action: {
      createdai: 'DAI "{{daiName}}" hinzugefügt',
      updatedai: 'DAI "{{daiName}}" bearbeitet'
    }
  },
  sdo: {
    wizard: {
      title: {
        add: "SDO hinzufügen",
        edit: "SDO bearbeiten"
      }
    }
  },
  do: {
    wizard: {
      title: {
        add: "DO hinzufügen",
        edit: "DO bearbeiten"
      }
    }
  },
  dotype: {
    wizard: {
      title: {
        add: "DOType hinzufügen",
        edit: "DOType bearbeiten"
      },
      enums: "Standard Enumerations"
    },
    action: {
      edit: 'DOType ID "{{oldId}}" und deren DO-Referenzen geändert zu {{newId}} '
    }
  },
  lnodetype: {
    wizard: {
      title: {
        add: "LNodeType hinzufügen",
        edit: "LNodeType bearbeiten",
        select: "Data Objects auswählen"
      }
    },
    action: {
      edit: 'LNodeType ID "{{oldId}}" und deren LN-Referenzen geändert zu {{newId}} '
    },
    autoimport: "Vordefinierte OpenSCD LN Klasse verwenden",
    missinglnclass: "Vordefinierte LN Klasse fehlt"
  },
  lnode: {
    wizard: {
      title: {
        selectIEDs: "Auswahl IEDs",
        selectLDs: "Auswahl logische Geräte",
        selectLNs: "Auswahl logische Knoten",
        selectLNodeTypes: "Auswahl logische Knoten Type"
      },
      placeholder: "Bitte laden Sie eine SCL-Datei, die IED-Elemente enthält.",
      uniquewarning: "Logische Knoten Klasse existiert bereits",
      reference: "Referenz auf bestehenden logischen Knoten erstellen",
      instance: "Referenz auf logischen Knoten Typ erstellen"
    },
    log: {
      title: "LNode vom Type {{lnClass}} kann nicht hinzugefügt werden",
      nonuniquelninst: "Keine eindeutige Instanz (lnInst)",
      uniqueln0: "Nur eine Instanz von {{lnClass}} zulässig"
    },
    tooltip: "Referenz zu logischen Knoten erstellen"
  },
  guess: {
    wizard: {
      primary: "Inhalt erraten",
      title: "Auswahl Steuerungsmodel(ctlModel)",
      description: `Schaltgeräten im Feld können oftmals bestimmten Steuerungsmodellen zugeordnet werden. 
 Damit wird die Abschätzung oftmals genauer.`
    }
  },
  merge: {
    title: "Vereinigen",
    defaultTitle: "{{ tag }} {{ source }} mit {{ sink }} vereinigen",
    log: "{{ tag }} {{ source }} mit {{ sink }} vereinigt",
    children: "Kindelemente"
  },
  import: {
    title: "IEDs importieren",
    log: {
      successful: "IED {{name}} geladen",
      parsererror: "Parser Fehler",
      loaderror: "Datei kann nicht geladen werden",
      importerror: "IED Element kann nicht importiert werden",
      missingied: "Kein IED Element in der Datei",
      nouniqueied: "IED Element {{ name }} bereits geladen"
    }
  },
  communication: {
    name: "Netzwerkkonfiguration",
    missing: "Kein Subnetzwerk"
  },
  subnetwork: {
    name: "Subnetzwerk",
    wizard: {
      nameHelper: "Name des Subnetzwerkes",
      descHelper: "Beschreibung des Subnetzwerkes",
      typeHelper: "Netzwerktyp (Bsp. 8-MMS)",
      bitrateHelper: "Übertragungsrate",
      title: {
        add: "Subnetzwerk hinzufügen",
        edit: "Subnetzwerk bearbeiten"
      }
    }
  },
  connectedap: {
    name: "Schnittstelle",
    wizard: {
      addschemainsttype: "XMLSchema-instance type hinzufügen"
    },
    action: {
      addaddress: "Adressfeld bearbeitet ({{iedName}} - {{apName}})"
    }
  },
  gse: {
    action: {
      addaddress: "GSE bearbeitet ({{identity}})"
    },
    missingaccp: "AccessPoint is nicht verbunden. GSE kann nicht hinzugefügt werden."
  },
  smv: {
    action: {
      addaddress: "SMV bearbeitet ({{identity}})"
    },
    missingaccp: "AccessPoint is nicht verbunden. SMV kann nicht hinzugefügt werden."
  },
  subscriber: {
    title: "Subscriber Update",
    description: "GOOSE Ziele aktualisieren: ",
    nonewitems: "keine neuen IEDName Elemente notwendig",
    message: "{{updatenumber}} IEDName Element(e) hinzugefügt"
  },
  commmap: {
    title: "Kommunikationszuordnung",
    connectCB: "{{cbType}} verbinden",
    connectToIED: "Verbinden mit {{iedName}}",
    sourceIED: "Quellgerät",
    sinkIED: "Zielgerät"
  },
  updatesubstation: {
    title: "Schaltanlage aktualisieren"
  },
  code: {
    log: "Element im XML Editor angepasst:  {{id}}"
  },
  updatedesc: {
    abb: "Signalbeschreibungen zu ABB IEDs hinzugefügt",
    sel: "Signalbeschreibungen zu SEL IEDs hinzugefügt"
  },
  sld: {
    substationSelector: "Schaltanlage auswählen",
    wizard: {
      xCoordinateHelper: "X-Koordinate im Einphasenersatzschaltbild",
      yCoordinateHelper: "Y-Koordinate im Einphasenersatzschaltbild"
    }
  },
  dataset: {
    fcda: { add: "Daten-Attribute hinzufügen" },
    fcd: { add: "Daten-Objekte hinzufügen" }
  },
  report: {
    wizard: { location: "Ablageort der Reports wählen" },
    rptID: "Report-Kontrolblock Kennung"
  },
  cleanup: {
    unreferencedDataSets: {
      title: "Nicht referenzierte Datensätze",
      deleteButton: "Ausgewählten Datensatz entfernen",
      tooltip: "DatenSätze ohne Verweis auf einen zugehörigen GOOSE-, Log-, Report- oder Sampled Value Control Block"
    },
    unreferencedControls: {
      title: "Steuerblöcke mit einem fehlenden oder ungültigen Kontrollblock",
      deleteButton: "Ausgewählte Kontrollblöcke entfernen",
      tooltip: "Steuerblöcke ohne Verweis auf ein vorhandenes Datensatz. Das ist kein Fehler und eher üblich for allem für Reports",
      addressDefinitionTooltip: "Für diesen Kontrollblock existiert eine Adressdefinition im Abschnitt Kommunikation",
      alsoRemoveFromCommunication: "Kommunikation SMV/GSE mit entfernen"
    },
    unreferencedDataTypes: {
      title: "Nicht referenzierte Datentypen",
      deleteButton: "Ausgewählte Datentypen entfernen",
      tooltip: "Datentypen, die nicht in einem logischen Knoten oder einem anderen verwendeten Datentyp referenziert werden",
      alsoRemoveSubTypes: "Entfernen Sie auch Untertypen",
      stackExceeded: "Maximale Aufrufe überschritten. Maximal zulässig sind {{maxStackDepth}}. Nicht alle überflüßigen Datentypen sind entfernt und das Project is potentiel beschädigt."
    }
  },
  controlblock: {
    action: {
      edit: '{{type}} "{{name}}" in IED {{iedName}} bearbeitet',
      add: '{{type}} "{{name}}" zu IED {{iedName}} hinzugefügt',
      remove: '{{type}} "{{name}}" and referenzierte Element von IED {{iedName}} entfernt'
    },
    hints: {
      source: "Quell-IED",
      missingServer: "Kein Server vorhanden",
      exist: "{{type}} mit dem Namen {{name}} existiert",
      noMatchingData: "Keine Datenübereinstimmung",
      valid: "Kann kopiert werden"
    },
    label: {
      copy: "Kopie in anderen IEDs ertellen"
    }
  },
  gsecontrol: {
    wizard: { location: "Ablageort der GOOSE wählen" }
  },
  samvpledvaluecontrol: {
    wizard: {
      location: "Ablageort des Select Sampled Value Control Block wählen"
    }
  },
  publisher: {
    selectbutton: "{{type}} auswählen",
    nodataset: "Kein verbundener Datensatz",
    smv: {
      commsetting: "Kommunikationsparameter (SMV)",
      noconnectedap: "Fehlende Verbindung zu einem Netzwerk",
      smvopts: "Optionale Felder"
    }
  },
  exportCommunication: {
    noCommunicationSection: "Die Communication-Sektion ist leer."
  },
  add: "Hinzufügen",
  new: "Neu",
  remove: "Entfernen",
  edit: "Bearbeiten",
  move: "Verschieben",
  create: "Erstellen",
  save: "Speichern",
  saveAs: "Speichern unter",
  open: "Öffnen",
  reset: "Zurücksetzen",
  cancel: "Abbrechen",
  close: "Schließen",
  filter: "Filter",
  filters: "Filters",
  undo: "Rückgängig",
  redo: "Wiederholen",
  duplicate: "Klonen",
  connect: "Verbinden",
  disconnect: "Trennen",
  next: "Weiter"
}, ud = {
  scl: {
    id: "ID",
    name: "Name",
    desc: "Description",
    ord: "Ordinal",
    value: "Value",
    EnumVal: "Enum Value",
    EnumType: "Enum Type",
    DA: "Data attribute",
    DO: "Data object",
    DAType: "Data Attribute Type",
    DOType: "Data Object Type",
    CDC: "Common data class",
    Report: "Report",
    LN: "Logical Node",
    bType: "Basic type",
    type: "Type",
    sAddr: "Short address",
    valKind: "Value kind",
    valImport: "Import value",
    fc: "Function constraint",
    LNodeType: "Logical Node Type",
    lnClass: "Logical Node Class",
    accessControl: "Access control",
    transient: "Transient data",
    Val: "Default value",
    dchg: "Trigger on data change",
    qchg: "Trigger on quality change",
    dupd: "Trigger on data update",
    period: "Periodical Publishing",
    gi: "General Interrogation",
    fixedOffs: "Fixed offset",
    securityEnable: "Security enabled",
    DataSet: "Dataset",
    Communication: "Communication",
    TrgOps: "Trigger options",
    OptFields: "Optional fields",
    multicast: "SMV acc. to IEC 61850 9-2",
    smpMod: "Sample mode",
    smpRate: "Sample rate",
    nofASDU: "Samples per packet",
    seqNum: "Add Sequence Number",
    timeStamp: "Add Timestamp",
    dataSet: "Add DataSet Reference",
    reasonCode: "Add Trigger Reason",
    dataRef: "Add description of the payload",
    entryID: "Add Entry ID",
    configRef: "Add Configuration Revision",
    bufOvfl: "Add Buffered Overflow information",
    indexed: "Multiple instances possible",
    buffered: "Buffered Report",
    maxReport: "Number of Instances",
    bufTime: "Min. time between two Reports",
    intgPd: "Time between two periodic Reports",
    SmvOpts: "Optional Information",
    refreshTime: "Add timestamp to SMV packet",
    sampleRate: "Add sample rate to SMV packet",
    security: "Potential future use. e.g. digital signature",
    synchSourceId: "Add sync source id to SMV packet",
    SampledValueControl: "Sampled Value Control Block",
    iedName: "Referenced IED",
    ldInst: "Referenced Logical Device",
    prefix: "Prefix of the Logical Node",
    lnInst: "Instance of the Logical Node",
    virtual: "Virtual",
    phase: "Phase"
  },
  settings: {
    title: "Settings",
    language: "Language",
    languages: { de: "German (Deutsch)", en: "English" },
    dark: "Dark theme",
    mode: "Pro mode",
    showieds: "Show IEDs in substation editor",
    selectFileButton: "Select file",
    loadNsdTranslations: "Uploaded NSDoc files",
    invalidFileNoIdFound: "Invalid NSDoc ({{ filename }}); no 'id' attribute found in file",
    invalidNsdocVersion: "The version of {{ id }} NSD ({{ nsdVersion }}) does not correlate with the version of the corresponding NSDoc ({{ filename }}, {{ nsdocVersion }})"
  },
  menu: {
    new: "New project",
    title: "Menu",
    viewLog: "View log",
    viewDiag: "View diagnostics"
  },
  wizard: {
    title: {
      select: "Select {{tagName}}",
      edit: "Edit {{tagName}}",
      add: "Add {{tagName}}"
    }
  },
  openSCD: {
    loading: "Loading project {{ name }}",
    loaded: "{{ name }} loaded",
    readError: "Error reading {{ name }}",
    readAbort: "Aborted reading {{ name }}"
  },
  zeroline: {
    iedsloading: "Loading IEDs...",
    showieds: "Show/hide IEDs in substation editor",
    showfunctions: "Filter function type elements",
    commmap: "Communication mapping",
    reportcontrol: "Show all Reports",
    gsecontrol: "Show all GOOSEs",
    smvcontrol: "Show all Sampled Values"
  },
  editing: {
    node: "User defined object",
    created: "Added {{ name }}",
    deleted: "Removed {{ name }}",
    moved: "Moved {{ name }}",
    updated: "Edited {{ name }}",
    import: "Imported {{name}}",
    complex: "Multiple elements edited",
    error: {
      create: "Could not add {{ name }}",
      update: "Could not edit {{ name }}",
      move: "Could not move {{ name }}",
      duplicate: "Could not copy {{ name }}",
      nameClash: 'Parent {{ parent }} already contains a {{ child }} named "{{ name }}"',
      idClash: 'The project has already an ID "{{ id }}"'
    }
  },
  textfield: {
    required: "Required",
    nonempty: "Must not be empty",
    noMultiplier: "none",
    unique: "Must be unique"
  },
  compare: {
    compareButton: "Compare",
    attributes: "Attributes from {{ elementName }}",
    children: "Child elements from {{ elementName }}",
    filterMutables: "Filter project specific differences"
  },
  log: {
    name: "Log",
    placeholder: "Errors, warnings and other notifications will show up here.",
    snackbar: {
      show: "Show",
      placeholder: "No errors"
    }
  },
  history: {
    name: "SCL History",
    placeholder: "Edits will show up here",
    noEntries: "No SCL history entries"
  },
  diag: {
    name: "Diagnostics",
    zeroissues: "No errors found in the project",
    placeholder: "Issues found during validation will show up here",
    missingnsd: "Cannot validate DataTypeTemplates. The version of the project must be higher than or equal to 2007B3"
  },
  plugins: {
    heading: "Plug-ins",
    editor: "Editor tab",
    menu: "Menu entry",
    requireDoc: "Requires loaded document",
    top: "top",
    middle: "middle",
    bottom: "bottom",
    validator: "Validator",
    add: {
      heading: "Add custom plug-in",
      warning: `Here you may add remote plug-ins directly from a custom URL.
                You do this at your own risk.`,
      name: "Name",
      nameHelper: "Your preferred plug-in name",
      src: "URL",
      srcHelper: "The vendor supplied plug-in URL"
    }
  },
  validator: {
    schema: {
      title: "Validate project",
      valid: "{{ name }} XML schema validation successful",
      invalid: "{{ name }} XML schema validation failed",
      fatal: "Fatal validation error",
      loadError: "Could not load XML schema {{ name }}"
    },
    templates: {
      title: "Validate templates",
      mandatoryChild: "{{ tag }} {{ id }} is missing mandatory child {{ childTag }} {{ childId }}",
      missingAttribute: "The attribute {{attr}} is required but missing in {{element}}",
      incorrectAttribute: "The attribute {{attr}} is incorrect in the element {{element}}.",
      missingReference: "{{tag}}:{{name}} has a invalid reference - type attribute cannot be connected to a template"
    }
  },
  substation: {
    name: "Substation",
    missing: "No substation",
    wizard: {
      nameHelper: "Substation name",
      descHelper: "Substation description",
      title: {
        add: "Add substation",
        edit: "Edit substation"
      }
    },
    action: {
      addvoltagelevel: "Add voltage level",
      updatesubstation: 'Edited substation "{{name}}"'
    },
    clone: {
      redirect: "Redirect LNode's",
      cloneclose: "Clone once",
      cloneproc: "Clone multiple",
      newname: "Clone Name"
    }
  },
  iededitor: {
    iedSelector: "Select IED",
    lnFilter: "Logical Node Filter",
    missing: "No IED",
    toggleChildElements: "Toggle child elements",
    settings: "Show Services the IED/AccessPoint provides",
    wizard: {
      daTitle: "Show DA Info",
      doTitle: "Show DO Info",
      nsdocDescription: "NSDoc description",
      doiDescription: "Data object description",
      daiDescription: "Data attribute description",
      ied: "IED",
      accessPoint: "Access point",
      lDevice: "Logical device",
      lnPrefix: "Logical node prefix",
      lnDescription: "Logical node description",
      lnInst: "Logical node inst",
      doName: "Data object name",
      doCdc: "Data object common data class",
      daName: "Data attribute name",
      daFc: "Data attribute functional constraint",
      daBType: "Data attribute type",
      daValue: "Data attribute value"
    }
  },
  ied: {
    wizard: {
      nameHelper: "IED name",
      descHelper: "IED description",
      title: {
        edit: "Edit IED",
        delete: "Remove IED with references",
        references: "References to be removed"
      }
    },
    action: {
      updateied: 'Edited IED "{{name}}"',
      deleteied: 'Removed IED "{{name}}"'
    }
  },
  ldevice: {
    wizard: {
      nameHelper: "Logical device name",
      noNameSupportHelper: "IED doesn't support Functional Naming",
      descHelper: "Logical device description",
      title: {
        edit: "Edit logical device"
      }
    }
  },
  ln: {
    wizard: {
      title: {
        edit: "Edit LN"
      },
      descHelper: "Logical node description",
      lnTypeHelper: "Logical node type",
      prefixHelper: "Prefix of the logical node",
      lnClassHelper: "Logical node class",
      instHelper: "Instance"
    }
  },
  ln0: {
    wizard: {
      title: {
        edit: "Edit LN0"
      },
      descHelper: "Logical node description",
      lnTypeHelper: "Logical node type",
      lnClassHelper: "Logical node class",
      instHelper: "Instance"
    }
  },
  powertransformer: {
    wizard: {
      nameHelper: "Power transformer name",
      descHelper: "Power transformer description",
      typeHelper: "Power transformer type",
      title: {
        add: "Add power transformer",
        edit: "Edit power transformer"
      }
    }
  },
  voltagelevel: {
    name: "Voltage level",
    wizard: {
      nameHelper: "Voltage level name",
      descHelper: "Voltage level description",
      nomFreqHelper: "Nominal frequency",
      numPhaseHelper: "Number of phases",
      voltageHelper: "Nominal voltage",
      title: {
        add: "Add voltage level",
        edit: "Edit voltage level"
      }
    },
    action: {
      updateVoltagelevel: 'Edited voltagelevel "{{name}}"'
    }
  },
  line: {
    name: "Line",
    wizard: {
      nameHelper: "Line name",
      descHelper: "Line description",
      typeHelper: "Line type",
      title: {
        add: "Add line",
        edit: "Edit line"
      }
    },
    action: {
      updateLine: 'Edited line "{{name}}"'
    }
  },
  process: {
    name: "Process",
    wizard: {
      nameHelper: "Process name",
      descHelper: "Process description",
      typeHelper: "Process type",
      title: {
        add: "Add Process",
        edit: "Edit Process"
      }
    },
    action: {
      updateProcess: 'Edited Process "{{name}}"'
    }
  },
  bay: {
    name: "Bay",
    wizard: {
      nameHelper: "Bay name",
      descHelper: "Bay description",
      title: {
        add: "Add bay",
        edit: "Edit bay"
      }
    },
    action: {
      updateBay: 'Edited bay "{{name}}"'
    }
  },
  conductingequipment: {
    name: "Conducting Equipment",
    wizard: {
      nameHelper: "Conducting equipment name",
      descHelper: "Conducting equipment description",
      typeHelper: "Conducting equipment type",
      title: {
        add: "Add conducting equipment",
        edit: "Edit conducting equipment"
      }
    },
    unknownType: "Unknown type"
  },
  connectivitynode: {
    name: "Connectivity Node",
    wizard: {
      nameHelper: "Connectivity node name",
      pathNameHelper: "Connectivity node pathname",
      title: {
        add: "Add Connectivity node",
        edit: "Edit Connectivity node"
      }
    }
  },
  terminal: {
    name: "Terminal",
    wizard: {
      nameHelper: "Terminal name",
      connectivityNodeHelper: "Terminal connectivity node",
      cNodeNameHelper: "Terminal connectivity node name",
      title: {
        add: "Add Terminal",
        edit: "Edit Terminal"
      }
    }
  },
  templates: {
    name: "Data Type Templates",
    missing: "DataTypeTemplates missing",
    add: "Add DataTypeTemplates"
  },
  subscription: {
    none: "None",
    connect: "Connect data attribute",
    disconnect: "Disconnect data attribute",
    subscriber: {
      subscribed: "Subscribed",
      notSubscribed: "Not Subscribed",
      availableToSubscribe: "Available to subscribe",
      partiallySubscribed: "Partially subscribed",
      noControlBlockSelected: "No control block selected",
      noIedSelected: "No IED selected"
    },
    goose: {
      publisher: {
        title: "GOOSE Publishers",
        subscriberTitle: "IEDs subscribed to {{ selected }}"
      },
      subscriber: {
        iedListTitle: "GOOSE Subscribers",
        publisherTitle: "GOOSE Messages subscribed to {{selected}}"
      },
      view: {
        publisherView: "Publisher | Subscriber",
        subscriberView: "Subscriber | Publisher"
      }
    },
    smv: {
      publisher: {
        title: "Sampled Value Messages",
        subscriberTitle: "IEDs subscribed to {{ selected }}"
      },
      subscriber: {
        iedListTitle: "Sampled Value Subscribers",
        publisherTitle: "Sampled Value Messages subscribed to {{ selected }}"
      },
      view: {
        publisherView: "Publisher | Subscriber",
        subscriberView: "Subscriber | Publisher"
      }
    },
    binding: {
      extRefList: {
        title: "Logical nodes available for selected data attribute",
        noSelection: "No data attribute selected",
        noSubscribedLNs: "No subscribed logical nodes",
        noAvailableLNs: "No available logical nodes to subscribe"
      }
    },
    laterBinding: {
      extRefList: {
        title: "Inputs available for selected data attribute",
        noSelection: "No data attribute selected",
        noSubscribedExtRefs: "No subscribed inputs",
        noAvailableExtRefs: "No available inputs to subscribe"
      }
    },
    SampledValueControl: {
      controlBlockList: {
        title: "Sampled Value Messages",
        noControlBlockFound: "No Sampled Value Messages found"
      }
    },
    GSEControl: {
      controlBlockList: {
        title: "GOOSE Messages",
        noControlBlockFound: "No GOOSE Messages found"
      }
    }
  },
  protocol104: {
    toggleChildElements: "Toggle child elements",
    view: {
      valuesView: "Values",
      networkView: "Network"
    },
    mappedCmv: 'According to the IEC 61850-80-1 standard, "{{ cdc }}" mapping is required via CMV',
    values: {
      missing: "No IED with 104 Addresses",
      removeAddresses: "Remove all Addresses",
      removedAddresses: 'Removed Addresses from DOI "{{ name }}" ({{ nrOfAddresses }})',
      addedAddress: 'Added 104 Address(es) to DO "{{ name }}" on LN(0) "{{ lnName }}"',
      signalNames: {
        tiNumber1: "Single-point information",
        tiNumber3: "Double-point information",
        tiNumber5: "Step position information",
        tiNumber7: "Bit string of 32 bit",
        tiNumber9: "Measured value, normalized value",
        tiNumber11: "Measured value, scaled value",
        tiNumber13: "Measured value, short floating point number",
        tiNumber15: "Integrated totals",
        tiNumber20: "Packed single point information with status change detection",
        tiNumber21: "Measured value, normalized value without quality descriptor",
        tiNumber30: "Single-point information with time tag CP56Time2a",
        tiNumber31: "Double-point information with time tag CP56Time2a",
        tiNumber32: "Step position information with time tag CP56Time2a",
        tiNumber33: "Bit string of 32 bit with time tag CP56Time2a",
        tiNumber34: "Measured value, normalized value with time tag CP56Time2a",
        tiNumber35: "Measured value, scaled value with time tag CP56Time2a",
        tiNumber36: "Measured value, short floating point number with time tag CP56Time2a",
        tiNumber37: "Integrated totals with time tag CP56Time2a",
        tiNumber38: "Event of protection equipment with time tag CP56Time2a",
        tiNumber39: "Packed start events of protection equipment with time tag CP56Time2a",
        tiNumber40: "Packed output circuit information of protection equipment with time tag CP56Time2a",
        tiNumber45: "Single command",
        tiNumber46: "Double command",
        tiNumber47: "Regulating step command",
        tiNumber48: "Set-point Command, normalized value",
        tiNumber49: "Set-point Command, scaled value",
        tiNumber50: "Set-point Command, short floating point number",
        tiNumber51: "Bit string 32 bit command",
        tiNumber58: "Single command with time tag CP56Time2a",
        tiNumber59: "Double command with time tag CP56Time2a",
        tiNumber60: "Regulating step command with time tag CP56Time2a",
        tiNumber61: "Measured value, normalized value command with time tag CP56Time2a",
        tiNumber62: "Measured value, scaled value command with time tag CP56Time2a",
        tiNumber63: "Measured value, short floating point number command with time tag CP56Time2a",
        tiNumber64: "Bit string of 32 bit command with time tag CP56Time2a",
        default: "No description available"
      }
    },
    network: {
      connectedAp: {
        wizard: {
          title: {
            edit: "Edit ConnectedAP"
          },
          redundancySwitchLabel: "Redundancy",
          redundancyGroupTitle: "Redundancy Groups",
          noRedundancyGroupsAvailable: "No redundancy groups available",
          addRedundancyGroup: "Redundancy Group",
          stationTypeHelper: "Type of station",
          ipHelper: "IP address of the logical link",
          ipSubnetHelper: "Subnetwork mask of the IP address of the logical link",
          wFactorHelper: "W factor of the logical link",
          kFactorHelper: "K factor of the logical link",
          timeout0Helper: "Time-out in seconds of connection establishment",
          timeout1Helper: "Time-out in seconds of sent or test APDUs",
          timeout2Helper: "Time-out in seconds for acknowledges in case of no data messages",
          timeout3Helper: "Time-out in seconds for sending test frames in case of a long idle state"
        }
      },
      redundancyGroup: {
        wizard: {
          title: {
            edit: "Edit Redundancy Group",
            add: "Add Redundancy Group"
          },
          redundancyGroupNumberLabel: "Redundancy Group number",
          addedLRedundancyGroup: 'Added Redundancy Group {{ rGNumber }} from SubNetwork (name="{{ subNetworkName }}") and ConnectedAP (AccessPoint Name="{{ apName }}", IED Name="{{ iedName }}")',
          editedRedundancyGroup: 'Edited Redundancy Group {{ rGNumber }} from SubNetwork (name="{{ subNetworkName }}") and ConnectedAP (AccessPoint Name="{{ apName }}", IED Name="{{ iedName }}")',
          removedRedundancyGroup: 'Removed Redundancy Group {{ rGNumber }} from SubNetwork (name="{{ subNetworkName }}") and ConnectedAP (AccessPoint Name="{{ apName }}", IED Name="{{ iedName }}")',
          logicLinkGroupTitle: "Logic Links",
          noLogicLinksAvailable: "No Logic Links available",
          addLogicLink: "Logic Link"
        }
      },
      logicLink: {
        wizard: {
          title: {
            edit: "Edit Logic Link",
            add: "Add Logic Link"
          },
          logicLinkNumberLabel: "Logic Link number",
          addedLogicLink: 'Added Logic Link group to SubNetwork (name="{{ subNetworkName }}") and ConnectedAP (AccessPoint Name="{{ apName }}", IED Name="{{ iedName }}")',
          editedLogicLink: 'Edited Logic Link group from SubNetwork (name="{{ subNetworkName }}") and ConnectedAP (AccessPoint Name="{{ apName }}", IED Name="{{ iedName }}")',
          removedLogicLink: 'Removed Logic Link group from SubNetwork (name="{{ subNetworkName }}") and ConnectedAP (AccessPoint Name="{{ apName }}", IED Name="{{ iedName }}")'
        }
      }
    },
    wizard: {
      title: {
        doiInfo: "DOI Info",
        addressEdit: "Edit 104 Address",
        addAddress: "Add 104 Address"
      },
      error: {
        ioaConflict: "IOA conflict found within CASDU number",
        addAddressError: 'Invalid Template Structure, unable to create DAI Element. (DO: "{{ doType }}", CDC: "{{ cdc }}", DAI: "{{ structure }}")'
      },
      casduHelper: "CASDU Value",
      ioaHelper: "IOA Value",
      monitorTiHelper: "Monitor TI Value",
      monitorInverted: "Created Inverted Addresses (Monitor)",
      monitorCheck: "Create Check Addresses (Monitor)",
      controlTiHelper: "Control TI Value",
      controlInverted: "Created Inverted Addresses (Control)",
      controlCheck: "Create Check Addresses (Control)",
      expectedValueHelper: "Expected Value",
      unitMultiplierHelper: "Unit Multiplier",
      scaleMultiplierHelper: "Scale Multiplier",
      scaleOffsetHelper: "Scale Offset"
    }
  },
  "compare-ied": {
    selectProjectTitle: "Select template project to Compare IED with",
    selectIedTitle: "Select IED for comparison",
    resultTitle: "Compared IED with IED from template project",
    projectIedTitle: "IEDs in project",
    templateIedTitle: "IEDs in template project",
    selectIedButton: "Select IED",
    selectTemplateButton: "Select template project",
    noDiff: 'No differences between the project IED "{{ projectIedName }}" and template IED "{{ templateIedName }}"'
  },
  "enum-val": {
    wizard: {
      title: {
        add: "Add EnumVal",
        edit: "Edit EnumVal"
      }
    }
  },
  enum: {
    wizard: {
      title: {
        add: "Add EnumType",
        edit: "Edit EnumType"
      }
    },
    action: {
      edit: 'Change EnumType ID "{{oldId}}" and its DA references to {{newId}} '
    }
  },
  datype: {
    wizard: {
      title: {
        add: "Add DAType",
        edit: "Edit DAType"
      }
    },
    action: {
      edit: 'Change DAType ID "{{oldId}}" and its DA references to {{newId}} '
    }
  },
  bda: {
    wizard: {
      title: {
        add: "Add BDA",
        edit: "Edit BDA"
      }
    }
  },
  da: {
    wizard: {
      title: {
        add: "Add DA",
        edit: "Edit DA"
      }
    }
  },
  dai: {
    wizard: {
      valueHelper: "Value should be of type {{type}}",
      title: {
        create: 'Create DAI "{{daiName}}"',
        edit: 'Edit DAI "{{daiName}}"'
      }
    },
    action: {
      createdai: 'Created DAI "{{daiName}}"',
      updatedai: 'Edited DAI "{{daiName}}"'
    }
  },
  sdo: {
    wizard: {
      title: {
        add: "Add SDO",
        edit: "Edit SDO"
      }
    }
  },
  do: {
    wizard: {
      title: {
        add: "Add DO",
        edit: "Edit DO"
      }
    }
  },
  dotype: {
    wizard: {
      title: {
        add: "Add DOType",
        edit: "Edit DOType"
      },
      enums: "Default enumerations"
    },
    action: {
      edit: 'Change DOType ID "{{oldId}}" and its DO references to {{newId}} '
    }
  },
  lnodetype: {
    wizard: {
      title: {
        add: "Add LNodeType",
        edit: "Edit LNodeType",
        select: "Select Data Objects"
      }
    },
    action: {
      edit: 'Change LNodeType ID "{{oldId}}" and its LN references to {{newId}} '
    },
    autoimport: "Use LN class from OpenSCD template",
    missinglnclass: "Missing pre-defined LN class"
  },
  lnode: {
    wizard: {
      title: {
        selectIEDs: "Select IEDs",
        selectLDs: "Select logical devices",
        selectLNs: "Select logical nodes",
        selectLNodeTypes: "Select logical node types"
      },
      placeholder: "Please load an SCL file that contains IED elements.",
      uniquewarning: "Logical node class already exists",
      reference: "Add reference to existing logical node",
      instance: "Add reference to logical node type"
    },
    log: {
      title: "Cannot add LNode of class {{lnClass}}",
      nonuniquelninst: "Cannot find unique lnInst",
      uniqueln0: "Only one instance of {{lnClass}} allowed"
    },
    tooltip: "Create logical nodes reference"
  },
  guess: {
    wizard: {
      primary: "Guess content",
      title: "Select control model (ctlModel)",
      description: `IEDs often contain more controllable logical nodes than switchgear in the field. 
 You can select the control model(s) used specific for switchgear.`
    }
  },
  merge: {
    title: "Merge",
    defaultTitle: "Merge {{ source }} into {{ sink }} ({{ tag }})",
    log: "Merged {{ tag }} {{ source }} into {{ sink }}",
    children: "Child elements"
  },
  import: {
    title: "Import IEDs",
    log: {
      successful: "IED {{ name }} loaded",
      parsererror: "Parser error",
      loaderror: "Could not load file",
      importerror: "Could not import IED",
      missingied: "No IED element in the file",
      nouniqueied: "IED element {{ name }} already in the file"
    }
  },
  communication: {
    name: "Network Configuration",
    missing: "No subnetwork"
  },
  subnetwork: {
    name: "Subnetwork",
    wizard: {
      nameHelper: "Subnetwork name",
      descHelper: "Subnetwork description",
      typeHelper: "Network type (e.g. 8-MMS)",
      bitrateHelper: "Bit rate",
      title: {
        add: "Add subnetwork",
        edit: "Edit subnetwork"
      }
    }
  },
  connectedap: {
    name: "Connected access point",
    wizard: {
      addschemainsttype: "Add XMLSchema-instance type"
    },
    action: {
      addaddress: "Edit Address ({{iedName}} - {{apName}})"
    }
  },
  gse: {
    action: {
      addaddress: "Edit GSE ({{identity}})"
    },
    missingaccp: "AccessPoint is not connected. GSE cannot be created."
  },
  smv: {
    action: {
      addaddress: "Edit SMV ({{identity}})"
    },
    missingaccp: "AccessPoint is not connected. SMV cannot be created."
  },
  subscriber: {
    title: "Subscriber update",
    description: "Subscriber update: ",
    nonewitems: "no new IEDName elements to add",
    message: "{{updatenumber}} IEDName elements added to the project"
  },
  commmap: {
    title: "Communication mapping",
    connectCB: "Connect {{cbType}}",
    connectToIED: "Connect to {{iedName}}",
    sourceIED: "Source IED",
    sinkIED: "Sink IED"
  },
  updatesubstation: {
    title: "Update substation"
  },
  code: {
    log: "Changed element in XML editor: {{id}}"
  },
  updatedesc: {
    abb: "Added signal descriptions to ABB IEDs",
    sel: "Added signal descriptions to SEL IEDs"
  },
  sld: {
    substationSelector: "Select a substation",
    wizard: {
      xCoordinateHelper: "X-Coordinate for Single Line Diagram",
      yCoordinateHelper: "Y-Coordinate for Single Line Diagram"
    }
  },
  dataset: {
    fcda: { add: "Add Data Attributes" },
    fcd: { add: "Add Data Objects" }
  },
  report: {
    wizard: { location: "Select Report Control Location" },
    rptID: "Report control block identifier"
  },
  cleanup: {
    unreferencedDataSets: {
      title: "Unreferenced Datasets",
      deleteButton: "Remove Selected Datasets",
      tooltip: "Datasets without a reference to an associated GOOSE, Log, Report or Sampled Value Control Block"
    },
    unreferencedControls: {
      title: "Control Blocks with a Missing or Invalid Dataset",
      deleteButton: "Remove Selected Control Blocks",
      tooltip: "Control Blocks without a reference to an existing DataSet. Note that this is normal in an ICD file or for an MMS ReportControl with a dynamically allocated DataSet",
      addressDefinitionTooltip: "An address definition exists for this control block in the Communication section",
      alsoRemoveFromCommunication: "Also remove SMV/GSE Address"
    },
    unreferencedDataTypes: {
      title: "Unreferenced Data Types",
      deleteButton: "Remove Selected Data Types",
      tooltip: "Data Types which are not referenced in a Logical Node or other used Data Type",
      alsoRemoveSubTypes: "Also remove subtypes",
      stackExceeded: "Max Stack Length Exceeded. Maximum allowed is {{maxStackDepth}}. Datatype cleaning incomplete and file damage may have occurred."
    }
  },
  controlblock: {
    action: {
      edit: 'Edited {{type}} "{{name}}" in IED {{iedName}}',
      add: 'Added {{type}} "{{name}}" to IED {{iedName}}',
      remove: 'Removed {{type}} "{{name}}" and its referenced elements from IED {{iedName}}'
    },
    hints: {
      source: "Source IED",
      missingServer: "Not A Server",
      exist: "{{type}} with name {{name}} already exist",
      noMatchingData: "No matching data",
      valid: "Can be copied"
    },
    label: { copy: "Copy to other IEDs" }
  },
  gsecontrol: {
    wizard: { location: "Select GOOSE Control Block Location" }
  },
  samvpledvaluecontrol: {
    wizard: { location: "Select Sampled Value Control Block Location" }
  },
  publisher: {
    selectbutton: "Select other {{type}}",
    nodataset: "No DataSet referenced",
    smv: {
      commsetting: "Communication Settings (SMV)",
      noconnectedap: "No connection to SubNetwork",
      smvopts: "Optional Fields"
    }
  },
  exportCommunication: {
    noCommunicationSection: "No export as Communication section empty"
  },
  add: "Add",
  new: "New",
  remove: "Remove",
  edit: "Edit",
  move: "Move",
  create: "Create",
  save: "Save",
  saveAs: "Save as",
  open: "Open",
  reset: "Reset",
  cancel: "Cancel",
  close: "Close",
  filter: "Filter",
  filters: "Filters",
  undo: "Undo",
  redo: "Redo",
  duplicate: "Clone",
  connect: "Connect",
  disconnect: "Disconnect",
  next: "Next"
}, Ur = { en: ud, de: dd };
async function pd(e) {
  return Object.keys(Ur).includes(e) ? Ur[e] : {};
}
ys({ loader: pd, empty: (e) => e });
const ja = localStorage.getItem("language") || "en";
console.log("SETTING LANGUAGE TO", ja);
xs(ja);
function Ua(e, t, i) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("substation.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${l("substation.wizard.descHelper")}"
    ></wizard-textfield>`,
    i ? p`<mwc-formfield label="${l("guess.wizard.primary")}">
          <mwc-checkbox></mwc-checkbox>
        </mwc-formfield>` : p``
  ];
}
function md(e) {
  return (t, i) => {
    const n = g(t.find((c) => c.label === "name")), r = g(t.find((c) => c.label === "desc")), a = i.shadowRoot?.querySelector("mwc-checkbox")?.checked;
    e.ownerDocument.createElement("Substation");
    const o = W(e.ownerDocument, "Substation", {
      name: n,
      desc: r
    });
    return a ? [() => ld(e.ownerDocument, o)] : [{ new: { parent: e, element: o } }];
  };
}
function hd(e) {
  const t = e.ownerDocument.querySelector("Substation") === null && e.tagName === "SCL";
  return [
    {
      title: l("substation.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: l("add"),
        action: md(e)
      },
      content: Ua("", "", t)
    }
  ];
}
function fd(e) {
  return [
    {
      title: l("substation.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: Ta(
          e,
          "substation.action.updatesubstation"
        )
      },
      content: Ua(
        e.getAttribute("name") ?? "",
        e.getAttribute("desc"),
        !1
      )
    }
  ];
}
function bd(e, t, i, n) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("terminal.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${n}
      readonly
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="connectivityNode"
      .maybeValue=${t}
      helper="${l("terminal.wizard.connectivityNodeHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      readonly
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="cNodeName"
      .maybeValue=${i}
      helper="${l("terminal.wizard.cNodeNameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function Ka(e) {
  const t = Array.from(
    e.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(De).map((i) => i.getAttribute("name") ?? "").filter((i) => i !== e.getAttribute("name"));
  return [
    {
      title: l("terminal.wizard.title.edit"),
      element: e,
      content: bd(
        e.getAttribute("name"),
        e.getAttribute("connectivityNode"),
        e.getAttribute("cNodeName"),
        t
      )
    }
  ];
}
const xi = {
  nomFreq: "50",
  numPhases: "3",
  Voltage: "110",
  multiplier: "k"
};
function Za(e, t, i, n, r, a) {
  return [
    z`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("voltagelevel.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    z`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${l("voltagelevel.wizard.descHelper")}"
    ></wizard-textfield>`,
    z`<wizard-textfield
      label="nomFreq"
      .maybeValue=${i}
      nullable
      helper="${l("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      required
      validationMessage="${l("textfield.nonempty")}"
      pattern="${Jt.unsigned}"
    ></wizard-textfield>`,
    z`<wizard-textfield
      label="numPhases"
      .maybeValue=${n}
      nullable
      helper="${l("voltagelevel.wizard.numPhaseHelper")}"
      suffix="#"
      required
      validationMessage="${l("textfield.nonempty")}"
      type="number"
      min="1"
      max="255"
    ></wizard-textfield>`,
    z`<wizard-textfield
      label="Voltage"
      .maybeValue=${r}
      nullable
      unit="V"
      .multipliers=${[null, "G", "M", "k", "", "m"]}
      .multiplier=${a}
      helper="${l("voltagelevel.wizard.voltageHelper")}"
      required
      validationMessage="${l("textfield.nonempty")}"
      pattern="${Jt.decimal}"
    ></wizard-textfield>`
  ];
}
function gd(e) {
  return (t) => {
    const i = g(t.find((u) => u.label === "name")), n = g(t.find((u) => u.label === "desc")), r = g(t.find((u) => u.label === "nomFreq")), a = g(t.find((u) => u.label === "numPhases")), o = g(t.find((u) => u.label === "Voltage")), c = Nn(t.find((u) => u.label === "Voltage")), d = W(e.ownerDocument, "VoltageLevel", {
      name: i,
      desc: n,
      nomFreq: r,
      numPhases: a
    });
    if (o !== null) {
      const u = W(e.ownerDocument, "Voltage", {
        unit: "V",
        multiplier: c
      });
      u.textContent = o, d.appendChild(u);
    }
    return [
      {
        new: {
          parent: e,
          element: d
        }
      }
    ];
  };
}
function yd(e) {
  return [
    {
      title: l("voltagelevel.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: l("add"),
        action: gd(e)
      },
      content: Za(
        "",
        "",
        xi.nomFreq,
        xi.numPhases,
        xi.Voltage,
        xi.multiplier
      )
    }
  ];
}
function vd(e, t, i, n) {
  if (e === null) {
    const a = W(n.ownerDocument, "Voltage", {
      unit: "V",
      multiplier: i
    });
    return a.textContent = t, {
      new: {
        parent: n,
        element: a,
        reference: n.firstElementChild
      }
    };
  }
  if (t === null)
    return {
      old: {
        parent: n,
        element: e,
        reference: e.nextSibling
      }
    };
  const r = U(e, { multiplier: i });
  return r.textContent = t, {
    old: { element: e },
    new: { element: r }
  };
}
function wd(e) {
  return (t) => {
    const i = t.find((f) => f.label === "name").value, n = g(t.find((f) => f.label === "desc")), r = g(t.find((f) => f.label === "nomFreq")), a = g(t.find((f) => f.label === "numPhases")), o = g(t.find((f) => f.label === "Voltage")), c = Nn(t.find((f) => f.label === "Voltage"));
    let d, u;
    if (i === e.getAttribute("name") && n === e.getAttribute("desc") && r === e.getAttribute("nomFreq") && a === e.getAttribute("numPhases"))
      d = null;
    else {
      const f = U(e, {
        name: i,
        desc: n,
        nomFreq: r,
        numPhases: a
      });
      d = { old: { element: e }, new: { element: f } };
    }
    o === (e.querySelector("VoltageLevel > Voltage")?.textContent?.trim() ?? null) && c === (e.querySelector("VoltageLevel > Voltage")?.getAttribute("multiplier") ?? null) ? u = null : u = vd(
      e.querySelector("VoltageLevel > Voltage"),
      o,
      c,
      d?.new.element ?? e
    );
    const m = {
      actions: [],
      title: l("voltagelevel.action.updateVoltagelevel", { name: i })
    };
    return d && m.actions.push(d), u && m.actions.push(u), m.actions.push(
      ...kn(e, e.getAttribute("name"), i)
    ), m.actions.length ? [m] : [];
  };
}
function Ad(e) {
  return [
    {
      title: l("voltagelevel.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: wd(e)
      },
      content: Za(
        e.getAttribute("name") ?? "",
        e.getAttribute("desc"),
        e.getAttribute("nomFreq"),
        e.getAttribute("numPhases"),
        e.querySelector("VoltageLevel > Voltage")?.textContent?.trim() ?? null,
        e.querySelector("VoltageLevel > Voltage")?.getAttribute("multiplier") ?? null
      )
    }
  ];
}
const Xa = "PTR";
function xd(e) {
  return (t) => {
    const i = g(t.find((o) => o.label === "name")), n = g(t.find((o) => o.label === "desc")), r = W(e.ownerDocument, "PowerTransformer", {
      name: i,
      desc: n,
      type: Xa
    });
    return [{
      new: {
        parent: e,
        element: r
      }
    }];
  };
}
function Vn(e, t, i, n) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("powertransformer.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${n}
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${l("powertransformer.wizard.descHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${i}
      disabled
      helper="${l("powertransformer.wizard.typeHelper")}"
    ></wizard-textfield>`
  ];
}
function Pn(e, t) {
  return Array.from(e.querySelectorAll("PowerTransformer")).filter(De).map((i) => i.getAttribute("name") ?? "").filter((i) => t && i !== t);
}
function Sd(e) {
  const t = Pn(e);
  return [
    {
      title: l("powertransformer.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: l("add"),
        action: xd(e)
      },
      content: Vn(
        "",
        null,
        Xa,
        t
      )
    }
  ];
}
function Ed(e) {
  const t = Pn(
    e.parentNode,
    e.getAttribute("name")
  );
  return [
    {
      title: l("powertransformer.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: za(e)
      },
      content: Vn(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        e.getAttribute("type"),
        t
      )
    }
  ];
}
function Cd(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${l("subnetwork.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${l("subnetwork.wizard.descHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      nullable
      helper="${l("subnetwork.wizard.typeHelper")}"
      pattern="${Jt.normalizedString}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="BitRate"
      .maybeValue=${e.BitRate}
      nullable
      unit="b/s"
      .multipliers=${[null, "M"]}
      .multiplier=${e.multiplier}
      helper="${l("subnetwork.wizard.bitrateHelper")}"
      required
      validationMessage="${l("textfield.nonempty")}"
      pattern="${Jt.decimal}"
    ></wizard-textfield>`
  ];
}
function Nd(e, t, i, n) {
  if (e === null) {
    const a = W(n.ownerDocument, "BitRate", {
      unit: "b/s"
    });
    return i && a.setAttribute("multiplier", i), t && (a.textContent = t), {
      new: {
        parent: n,
        element: a,
        reference: n.firstElementChild
      }
    };
  }
  if (t === null)
    return {
      old: {
        parent: n,
        element: e,
        reference: e.nextSibling
      }
    };
  const r = U(e, { multiplier: i });
  return r.textContent = t, {
    old: { element: e },
    new: { element: r }
  };
}
function Id(e) {
  return (t) => {
    const i = t.find((m) => m.label === "name").value, n = g(t.find((m) => m.label === "desc")), r = g(t.find((m) => m.label === "type")), a = g(t.find((m) => m.label === "BitRate")), o = Nn(t.find((m) => m.label === "BitRate"));
    let c, d;
    if (i === e.getAttribute("name") && n === e.getAttribute("desc") && r === e.getAttribute("type"))
      c = null;
    else {
      const m = U(e, { name: i, desc: n, type: r });
      c = { old: { element: e }, new: { element: m } };
    }
    a === (e.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null) && o === (e.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null) ? d = null : d = Nd(
      e.querySelector("SubNetwork > BitRate"),
      a,
      o,
      c?.new.element ?? e
    );
    const u = [];
    return c && u.push(c), d && u.push(d), u;
  };
}
function kd(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = e.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null, a = e.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null;
  return [
    {
      title: l("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: l("save"),
        action: Id(e)
      },
      content: Cd({ name: t, desc: i, type: n, BitRate: r, multiplier: a })
    }
  ];
}
const Dd = [
  "ldInst",
  "lnClass",
  "lnInst",
  "prefix",
  "doName",
  "daName"
];
function $d(e) {
  return Dd.map(
    (t) => e.getAttribute(t) ? `[${t}="${e.getAttribute(
      t
    )}"]` : ""
  ).join("");
}
const Ld = ["srcLDInst", "srcLNClass", "srcLNInst", "srcCBName"];
function zd(e) {
  return Ld.map(
    (t) => e.getAttribute(t) ? `[${t}="${e.getAttribute(t)}"]` : ""
  ).join("");
}
function Td(e) {
  if (!e.length) return [];
  const t = [], i = {};
  for (const n of e) {
    const r = n.old.element, a = n.old.parent, o = P(a);
    i[o] || (i[o] = a.cloneNode(!0));
    const c = i[o].querySelector(
      `ExtRef${r.getAttribute("iedName") ? `[iedName="${r.getAttribute("iedName")}"]` : ""}${$d(r)}${r.getAttribute("serviceType") ? `[serviceType="${r.getAttribute("serviceType")}"]` : ""}${zd(r)}`
    );
    c && i[o].removeChild(c);
  }
  return Object.entries(i).forEach(([n, r]) => {
    if (r.children.length == 0) {
      const a = e[0].old.parent.ownerDocument, o = Ye(a, "Inputs", n);
      o && o.parentElement && t.push({
        old: { parent: o.parentElement, element: o }
      });
    }
  }), t;
}
const _d = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function Vd(e, t, i, n, r, a, o, c, d) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("ied.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${d}
      pattern="${_d}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${l("ied.wizard.descHelper")}"
      pattern="${Qe.normalizedString}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${i || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="manufacturer"
      .maybeValue=${n || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="configVersion"
      .maybeValue=${r || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="originalSclVersion"
      .maybeValue=${a || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="engRight"
      .maybeValue=${o || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="owner"
      .maybeValue=${c || "-"}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function Pd(e) {
  return [
    p` <section>
      <h1>${l("ied.wizard.title.references")}</h1>
      <mwc-list>
        ${e.map((t) => {
      const i = t.old.element;
      return p` <mwc-list-item noninteractive twoline>
            <span>${i.tagName}</span>
            <span slot="secondary"
              >${P(t.old.element)}</span
            >
          </mwc-list-item>`;
    })}
      </mwc-list>
    </section>`
  ];
}
function Md(e) {
  return (e.getAttribute("originalSclVersion") ?? "").concat(e.getAttribute("originalSclRevision") ?? "").concat(e.getAttribute("originalSclRelease") ?? "");
}
function Rd(e) {
  return Array.from(e.parentNode.querySelectorAll("IED")).filter(De).map((t) => t.getAttribute("name") ?? "").filter((t) => t !== e.getAttribute("name"));
}
function Od(e) {
  return (t, i) => {
    i.dispatchEvent(oe());
    const n = La(e), r = n.filter(
      (d) => d.old.element.tagName === "ExtRef"
    ), a = Td(r), o = e.getAttribute("name") ?? "Unknown", c = {
      actions: [],
      title: l("ied.action.deleteied", { name: o })
    };
    return c.actions.push({
      old: { parent: e.parentElement, element: e }
    }), c.actions.push(...n), c.actions.push(...a), [c];
  };
}
function Fd(e) {
  const t = La(e);
  return t.length > 0 ? [
    {
      title: l("ied.wizard.title.delete"),
      content: Pd(t),
      primary: {
        icon: "delete",
        label: l("remove"),
        action: Od(e)
      }
    }
  ] : null;
}
function qd(e) {
  function t(i) {
    return (n) => {
      const r = Fd(i);
      r && n.dispatchEvent(Nt(() => r)), n.dispatchEvent(
        Oe({ old: { parent: i.parentElement, element: i } })
      ), n.dispatchEvent(oe());
    };
  }
  return [
    {
      title: l("ied.wizard.title.edit"),
      element: e,
      menuActions: [
        {
          icon: "delete",
          label: l("remove"),
          action: t(e)
        }
      ],
      primary: {
        icon: "edit",
        label: l("save"),
        action: Ta(
          e,
          "ied.action.updateied"
        )
      },
      content: Vd(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        e.getAttribute("type"),
        e.getAttribute("manufacturer"),
        e.getAttribute("configVersion"),
        Md(e),
        e.getAttribute("engRight"),
        e.getAttribute("owner"),
        Rd(e)
      )
    }
  ];
}
const Hd = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function Bd(e, t, i, n) {
  return [
    t ? p`<wizard-textfield
          label="ldName"
          .maybeValue=${e}
          helper="${l("ldevice.wizard.noNameSupportHelper")}"
          helperPersistent
          readOnly
          disabled
        ></wizard-textfield>` : p`<wizard-textfield
          label="ldName"
          .maybeValue=${e}
          nullable
          helper="${l("ldevice.wizard.nameHelper")}"
          validationMessage="${l("textfield.required")}"
          dialogInitialFocus
          pattern="${Hd}"
        ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${i}
      nullable
      helper="${l("ldevice.wizard.descHelper")}"
      pattern="${Qe.normalizedString}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="ldInst"
      .maybeValue=${n}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function Gd(e) {
  return !!e.closest("IED")?.querySelector("Services > ConfLdName");
}
function Wd(e) {
  return (t) => {
    const i = {}, n = ["ldName", "desc"];
    if (n.forEach((r) => {
      i[r] = g(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = U(e, i);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function jd(e) {
  return [
    {
      title: l("ldevice.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: Wd(e)
      },
      content: Bd(
        e.getAttribute("ldName"),
        !Gd(e),
        e.getAttribute("desc"),
        e.getAttribute("inst")
      )
    }
  ];
}
function Ud(e) {
  return Object.entries(e).map(
    ([t, i]) => p`<wizard-checkbox
        label="${t}"
        .maybeValue=${i}
        nullable
        helper="${l(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function Kd(e) {
  return (t) => {
    const i = g(t.find((u) => u.label === "dchg")), n = g(t.find((u) => u.label === "qchg")), r = g(t.find((u) => u.label === "dupd")), a = g(t.find((u) => u.label === "period")), o = g(t.find((u) => u.label === "gi"));
    if (i === e.getAttribute("dchg") && n === e.getAttribute("qchg") && r === e.getAttribute("dupd") && a === e.getAttribute("period") && o === e.getAttribute("gi"))
      return [];
    const c = U(e, {
      dchg: i,
      qchg: n,
      dupd: r,
      period: a,
      gi: o
    });
    return [{ old: { element: e }, new: { element: c } }];
  };
}
function Zd(e) {
  const [t, i, n, r, a] = [
    "dchg",
    "qchg",
    "dupd",
    "period",
    "gi"
  ].map((o) => e.getAttribute(o));
  return [
    {
      title: l("wizard.title.edit", { tagName: e.tagName }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Kd(e)
      },
      content: Ud({ dchg: t, qchg: i, dupd: n, period: r, gi: a })
    }
  ];
}
const Xd = [
  "ST",
  "MX",
  "SP",
  "SV",
  "CF",
  "DC",
  "SG",
  "SE",
  "SR",
  "OR",
  "BL",
  "EX",
  "CO"
], Yd = [
  "BOOLEAN",
  "INT8",
  "INT16",
  "INT24",
  "INT32",
  "INT64",
  "INT128",
  "INT8U",
  "INT16U",
  "INT24U",
  "INT32U",
  "FLOAT32",
  "FLOAT64",
  "Enum",
  "Dbpos",
  "Tcmd",
  "Quality",
  "Timestamp",
  "VisString32",
  "VisString64",
  "VisString65",
  "VisString129",
  "VisString255",
  "Octet64",
  "Unicode255",
  "Struct",
  "EntryTime",
  "Check",
  "ObjRef",
  "Currency",
  "PhyComAddr",
  "TrgOps",
  "OptFlds",
  "SvOptFlds",
  "LogOptFlds",
  "EntryID",
  "Octet6",
  "Octet16"
], Qd = ["Spec", "Conf", "RO", "Set"], Jd = ["SmpPerPeriod", "SmpPerSec", "SecPerSmp"], Ya = [
  "None",
  "Signature",
  "SignatureAndEncryption"
];
function eu(e, t, i) {
  if (!e.target || !e.target.parentElement) return;
  const n = e.target.selected?.value;
  if (e.target.parentElement.querySelector(
    'wizard-select[label="bType"]'
  ).value !== "Enum") return;
  const a = Array.from(
    t.querySelectorAll(`EnumType[id="${n}"] > EnumVal`)
  ).map(
    (c) => z`<mwc-list-item
        value="${c.textContent?.trim() ?? ""}"
        ?selected=${c.textContent?.trim() === i}
        >${c.textContent?.trim()}</mwc-list-item
      >`
  ), o = e.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  aa(z`${a}`, o), o.requestUpdate();
}
function tu(e, t, i) {
  const n = e.target.selected.value, r = e.target.parentElement.querySelector(
    'wizard-select[label="type"]'
  );
  r.disabled = !(n === "Enum" || n === "Struct");
  const a = [];
  Array.from(r.children).forEach((d) => {
    const u = d;
    u.disabled = !d.classList.contains(n), u.noninteractive = !d.classList.contains(n), u.style.display = d.classList.contains(n) ? "" : "none", u.disabled || a.push(u);
  }), r.value = a.length ? a[0].value : "";
  const o = e.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  n === "Enum" ? o.style.display = "" : o.style.display = "none";
  const c = e.target.parentElement.querySelector(
    'wizard-textfield[label="Val"]'
  );
  n === "Enum" || n === "Struct" ? c.style.display = "none" : c.style.display = "", o.requestUpdate(), c.requestUpdate(), r.requestUpdate();
}
function iu(e, t, i, n, r, a, o, c, d, u) {
  return [
    z`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("scl.name")}"
      required
      pattern="${Qe.abstractDataAttributeName}"
      maxLength="${Tn.abstracDaName}"
      dialogInitialFocus
    >
      ></wizard-textfield
    >`,
    z`<wizard-textfield
      label="desc"
      helper="${l("scl.desc")}"
      .maybeValue=${t}
      nullable
      pattern="${Qe.normalizedString}"
    ></wizard-textfield>`,
    z`<wizard-select
      fixedMenuPosition
      label="bType"
      .value=${i}
      helper="${l("scl.bType")}"
      required
      @selected=${(m) => tu(m)}
      >${Yd.map(
      (m) => z`<mwc-list-item value="${m}"
            >${m}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    z`<wizard-select
      label="type"
      .maybeValue=${r}
      helper="${l("scl.type")}"
      fixedMenuPosition
      @selected=${(m) => eu(m, u, d)}
      >${n.map(
      (m) => z`<mwc-list-item
            class="${m.tagName === "EnumType" ? "Enum" : "Struct"}"
            value=${m.id}
            >${m.id}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    z`<wizard-textfield
      label="sAddr"
      .maybeValue=${a}
      helper="${l("scl.sAddr")}"
      nullable
      pattern="${Qe.normalizedString}"
    ></wizard-textfield>`,
    z`<wizard-select
      label="valKind"
      .maybeValue=${o}
      helper="${l("scl.valKind")}"
      nullable
      required
      fixedMenuPosition
      >${Qd.map(
      (m) => z`<mwc-list-item value="${m}"
            >${m}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    z`<wizard-checkbox
      label="valImport"
      .maybeValue=${c}
      helper="${l("scl.valImport")}"
      nullable
      required
    ></wizard-checkbox>`,
    z`<wizard-select
      label="Val"
      .maybeValue=${d}
      helper="${l("scl.Val")}"
      nullable
      >${Array.from(
      u.querySelectorAll(`EnumType > EnumVal[id="${r}"]`)
    ).map(
      (m) => z`<mwc-list-item value="${m.textContent?.trim() ?? ""}"
            >${m.textContent?.trim()}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    z`<wizard-textfield
      label="Val"
      .maybeValue=${d}
      helper="${l("scl.Val")}"
      nullable
    ></wizard-textfield>`
  ];
}
function nu(e, t, i, n) {
  return [
    z`<wizard-select
      label="fc"
      .maybeValue=${e}
      helper="${l("scl.fc")}"
      required
      fixedMenuPosition
      >${Xd.map(
      (r) => z`<mwc-list-item value="${r}">${r}</mwc-list-item>`
    )}</wizard-select
    >`,
    z`<wizard-checkbox
      label="dchg"
      .maybeValue=${t}
      helper="${l("scl.dchg")}"
      nullable
    ></wizard-checkbox>`,
    z`<wizard-checkbox
      label="qchg"
      .maybeValue=${i}
      helper="${l("scl.qchg")}"
      nullable
    ></wizard-checkbox>`,
    z`<wizard-checkbox
      label="dupd"
      .maybeValue=${n}
      helper="${l("scl.dupd")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function ru(e) {
  return (t) => {
    const i = g(t.find((x) => x.label === "name")), n = g(t.find((x) => x.label === "desc")), r = g(t.find((x) => x.label === "bType")), a = r === "Enum" || r === "Struct" ? g(t.find((x) => x.label === "type")) : null, o = g(t.find((x) => x.label === "sAddr")), c = g(t.find((x) => x.label === "valKind")), d = g(t.find((x) => x.label === "valImport")), u = t.find(
      (x) => x.label === "Val" && x.style.display !== "none"
    ), m = u ? g(u) : null, f = g(t.find((x) => x.label === "fc")) ?? "", b = g(t.find((x) => x.label === "dchg")), A = g(t.find((x) => x.label === "qchg")), S = g(t.find((x) => x.label === "dupd")), C = [], E = W(e.ownerDocument, "DA", {
      name: i,
      desc: n,
      bType: r,
      type: a,
      sAddr: o,
      valKind: c,
      valImport: d,
      fc: f,
      dchg: b,
      qchg: A,
      dupd: S
    });
    if (m !== null) {
      const x = W(e.ownerDocument, "Val", {});
      x.textContent = m, E.appendChild(x);
    }
    return C.push({
      new: {
        parent: e,
        element: E
      }
    }), C;
  };
}
function au(e) {
  const t = e.ownerDocument, i = "", n = null, r = "", a = null, o = null, c = null, d = null, u = null, m = "", f = null, b = null, A = null, S = Array.from(t.querySelectorAll("DAType, EnumType")).filter(De).filter((E) => E.getAttribute("id")), C = e.closest("DataTypeTemplates");
  return [
    {
      title: l("da.wizard.title.edit"),
      primary: {
        icon: "",
        label: l("save"),
        action: ru(e)
      },
      content: [
        ...iu(
          i,
          n,
          r,
          S,
          a,
          o,
          d,
          u,
          c,
          C
        ),
        ...nu(m, f, b, A)
      ]
    }
  ];
}
const Ee = (e, t) => e === null ? "" : t;
function Qa() {
  return {
    BOOLEAN: e(),
    Enum: t(),
    FLOAT32: i("FLOAT32", -4294967296, 2 ** 32 - 1),
    FLOAT64: i("FLOAT64", -18446744073709552e3, 2 ** 64 - 1),
    INT8: n("INT8", -256, 2 ** 8 - 1),
    INT16: n("INT16", -65536, 2 ** 16 - 1),
    INT24: n("INT24", -16777216, 2 ** 24 - 1),
    INT32: n("INT32", -4294967296, 2 ** 32 - 1),
    INT64: n("INT64", -18446744073709552e3, 2 ** 64 - 1),
    INT128: n("INT128", -3402823669209385e23, 2 ** 128 - 1),
    INT8U: n("INT8U", 0, 2 ** 8 - 1),
    INT16U: n("INT16U", 0, 2 ** 16 - 1),
    INT24U: n("INT24U", 0, 2 ** 24 - 1),
    INT32U: n("INT32U", 0, 2 ** 32 - 1),
    Timestamp: r(),
    VisString32: a("VisString32", 32),
    VisString64: a("VisString64", 64),
    VisString65: a("VisString65", 65),
    VisString129: a("VisString129", 129),
    VisString255: a("VisString255", 255),
    ObjRef: a("VisString129", 129),
    Currency: a("Currency", 3),
    Octet64: a("Octet64", 64 * 2),
    Octet6: a("Octet6", 6 * 2),
    Octet16: a("Octet16", 16 * 2)
  };
  function e() {
    return {
      render: (d, u, m = null) => (m ? [...Array(m)] : [m]).map((f, b) => z`<wizard-select
            id="Val${Ee(f, `${b + 1}`)}"
            label="Val${Ee(f, ` for sGroup ${b + 1}`)}"
            .maybeValue=${o(u)}
            fixedMenuPosition
          >
            <mwc-list-item value="true">true</mwc-list-item>
            <mwc-list-item value="false">false</mwc-list-item>
          </wizard-select>`),
      value: (d, u) => g(
        d.find((m) => m.id === `Val${u || ""}`)
      )
    };
  }
  function t() {
    return {
      render: (d, u, m = null) => (m ? [...Array(m)] : [m]).map((f, b) => z`<wizard-select
            id="Val${Ee(f, `${b + 1}`)}"
            label="Val${Ee(f, ` for sGroup ${b + 1}`)}"
            .maybeValue=${o(u)}
            fixedMenuPosition
          >
            ${c(d).map((A) => z`<mwc-list-item value="${A}"
                >${A}</mwc-list-item
              >`)}
          </wizard-select>`),
      value: (d, u) => g(
        d.find((m) => m.id === `Val${u || ""}`)
      )
    };
  }
  function i(d, u, m) {
    return {
      render: (f, b, A = null) => (A ? [...Array(A)] : [A]).map((S, C) => z`<wizard-textfield
            id="Val${Ee(S, `${C + 1}`)}"
            label="Val${Ee(S, ` for sGroup ${C + 1}`)}"
            .maybeValue=${o(b)}
            helper="${l("dai.wizard.valueHelper", { type: d })}"
            type="number"
            min=${u}
            max=${m}
            step="0.1"
          >
          </wizard-textfield>`),
      value: (f, b) => g(
        f.find((A) => A.id === `Val${b || ""}`)
      )
    };
  }
  function n(d, u, m) {
    return {
      render: (f, b, A = null) => (A ? [...Array(A)] : [A]).map((S, C) => z`<wizard-textfield
            id="Val${Ee(S, `${C + 1}`)}"
            label="Val${Ee(S, ` for sGroup ${C + 1}`)}"
            .maybeValue=${o(b)}
            helper="${l("dai.wizard.valueHelper", { type: d })}"
            type="number"
            min=${u}
            max=${m}
          >
          </wizard-textfield>`),
      value: (f, b) => g(
        f.find((A) => A.id === `Val${b || ""}`)
      )
    };
  }
  function r() {
    return {
      render: (d, u, m = null) => {
        const f = o(u);
        return (m ? [...Array(m)] : [m]).reduce(
          (b, A, S) => b.concat([
            z`<wizard-textfield
                id="ValDate${Ee(A, `${S + 1}`)}"
                label="Val (Date)${Ee(A, ` for sGroup ${S + 1}`)}"
                .maybeValue=${ou(f)}
                type="date"
              >
              </wizard-textfield>`,
            z`<wizard-textfield
                id="ValTime${Ee(A, `${S + 1}`)}"
                label="Val (Time)${Ee(A, ` for sGroup ${S + 1}`)}"
                .maybeValue=${su(f)}
                type="time"
                step="1"
              >
              </wizard-textfield>`
          ]),
          []
        );
      },
      value: (d, u) => {
        const m = [`ValDate${u || ""}`, `ValTime${u || ""}`].map(
          (A) => g(d.find((S) => S.id === A))
        ), f = m[0] ? m[0] : "0000-00-00", b = m[1] ? m[1] : "00:00:00";
        return f + "T" + b + ".000";
      }
    };
  }
  function a(d, u) {
    return {
      render: (m, f, b = null) => (b ? [...Array(b)] : [b]).map((A, S) => z`<wizard-textfield
            id="Val${Ee(A, ` ${S + 1}`)}"
            label="Val${Ee(A, ` for sGroup ${S + 1}`)}"
            .maybeValue=${o(f)}
            helper="${l("dai.wizard.valueHelper", { type: d })}"
            maxLength=${u}
            type="text"
          >
          </wizard-textfield>`),
      value: (m, f) => g(
        m.find((b) => b.id === `Val${f || ""}`)
      )
    };
  }
  function o(d) {
    return (d?.querySelector("Val") ? d?.querySelector("Val") : d)?.textContent?.trim() ?? "";
  }
  function c(d) {
    const u = d.getAttribute("type"), m = [];
    return Array.from(
      d.ownerDocument.querySelectorAll(
        `EnumType[id="${u}"] > EnumVal`
      )
    ).filter(
      (f) => f.textContent && f.textContent !== ""
    ).sort(
      (f, b) => parseInt(f.getAttribute("ord") ?? "0") - parseInt(b.getAttribute("ord") ?? "0")
    ).forEach((f) => {
      m.push(f.textContent ?? "");
    }), m;
  }
}
function ou(e) {
  let i = e.split("T")[0];
  return /^\d{4}-\d{2}-\d{2}$/.test(i) || (i = null), i === "0000-00-00" && (i = null), i;
}
function su(e) {
  const t = e.split("T");
  let i = null;
  return t.length == 2 && (i = t[1], i.length > 8 && (i = i.substring(0, 8)), /^\d{2}:\d{2}:\d{2}$/.test(i) || (i = null), i === "00:00:00" && (i = null)), i;
}
const cu = "http://www.iec.ch/61850/2003/SCL";
function At(e) {
  return e.namespaceURI === cu;
}
function lu(e, t) {
  return (i) => {
    const n = e.getAttribute("bType"), r = Qa()[n].value(i), a = t.parentElement?.getAttribute("name") ?? "", o = {
      actions: [],
      title: l("dai.action.updatedai", { daiName: a })
    }, c = t.cloneNode(!1);
    return c.textContent = r, o.actions.push({
      old: { element: t },
      new: { element: c }
    }), [o];
  };
}
function du(e, t, i = null) {
  const n = e.getAttribute("bType"), r = e.querySelector("Val")?.textContent?.trim() ?? "";
  return [
    p` ${Qa()[n].render(
      e,
      t,
      i
    )}
    ${r ? p`<wizard-textfield
          id="daVal"
          label="DA Template Value"
          .maybeValue=${r}
          readonly
          disabled
        >
        </wizard-textfield>` : zt}`
  ];
}
function uu(e, t) {
  const i = t?.tagName === "DAI" ? t?.getAttribute("name") ?? "" : t?.parentElement?.getAttribute("name") ?? "";
  return [
    {
      title: l("dai.wizard.title.edit", {
        daiName: i
      }),
      element: t,
      primary: {
        icon: "edit",
        label: l("save"),
        action: lu(e, t)
      },
      content: du(e, t)
    }
  ];
}
function pu(e) {
  return (t) => {
    t.dispatchEvent(Nt(() => Oa(e)));
  };
}
function mu(e) {
  return (t, i) => {
    const n = t.find((u) => u.label === "name").value, r = g(t.find((u) => u.label === "desc")), a = e.getAttribute("name"), o = [];
    if (!(n === a && r === e.getAttribute("desc"))) {
      const u = U(e, { name: n, desc: r });
      o.push({
        old: { element: e },
        new: { element: u }
      });
    }
    const c = n !== a ? Array.from(
      e.parentElement?.querySelectorAll(
        `ReportControlBock[datSet=${a}], GSEControl[datSet=${a}],SampledValueControl[datSet=${a}] `
      ) ?? []
    ).map((u) => {
      const m = U(u, { datSet: n });
      return { old: { element: u }, new: { element: m } };
    }) : [];
    return [
      ...Array.from(
        i.shadowRoot.querySelectorAll(
          "filtered-list > mwc-check-list-item:not([selected])"
        )
      ).map((u) => Ye(e, "FCDA", u.value)).filter((u) => u).map((u) => ({
        old: {
          parent: e,
          element: u,
          reference: u.nextSibling
        }
      })),
      ...o,
      ...c
    ];
  };
}
function Ja(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc");
  return [
    {
      title: l("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: l("save"),
        icon: "save",
        action: mu(e)
      },
      menuActions: [
        {
          icon: "add",
          label: l("dataset.fcda.add"),
          action: pu(e)
        }
      ],
      content: [
        p`<wizard-textfield
          label="name"
          .maybeValue=${t}
          helper="${l("scl.name")}"
          required
          disabled="true"
        >
        </wizard-textfield>`,
        p`<wizard-textfield
          label="desc"
          .maybeValue=${i}
          helper="${l("scl.desc")}"
          nullable
          required
        >
        </wizard-textfield>`,
        p`<filtered-list multi
          >${Array.from(e.querySelectorAll("FCDA")).map(
          (n) => p`<mwc-check-list-item selected value="${P(n)}"
                >${P(n).split(">").pop()}</mwc-check-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
const Q = {
  IP: "([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])[.]([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])[.]([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])[.]([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])",
  OSI: "[0-9A-F]+",
  OSId: "[0-9]+",
  OSIAPi: "[0-9,]+",
  MAC: "([0-9A-F]{2}-){5}[0-9A-F]{2}",
  APPID: "[0-9A-F]{4}",
  VLANp: "[0-7]",
  VLANid: "[0-9A-F]{3}",
  port: "0|([1-9][0-9]{0,3})|([1-5][0-9]{4,4})|(6[0-4][0-9]{3,3})|(65[0-4][0-9]{2,2})|(655[0-2][0-9])|(6553[0-5])",
  IPv6: "([0-9a-f]{1,4}:){7}[0-9a-f]{1,4}",
  IPv6sub: "/[1-9]|/[1-9][0-9]|/1[0-1][0-9]|/12[0-7]"
}, hu = {
  IP: Q.IP,
  "IP-SUBNET": Q.IP,
  "IP-GATEWAY": Q.IP,
  "OSI-TSEL": Q.OSI,
  "OSI-SSEL": Q.OSI,
  "OSI-PSEL": Q.OSI,
  "OSI-AP-Title": Q.OSIAPi,
  "OSI-AP-Invoke": Q.OSId,
  "OSI-AE-Qualifier": Q.OSId,
  "OSI-AE-Invoke": Q.OSId,
  "MAC-Address": Q.MAC,
  APPID: Q.APPID,
  "VLAN-ID": Q.VLANid,
  "VLAN-PRIORITY": Q.VLANp,
  "OSI-NSAP": Q.OSI,
  "SNTP-Port": Q.port,
  "MMS-Port": Q.port,
  DNSName: "[^ ]*",
  "UDP-Port": Q.port,
  "TCP-Port": Q.port,
  "C37-118-IP-Port": "102[5-9]|10[3-9][0-9]|1[1-9][0-9][0-9]|[2-9][0-9]{3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]",
  IPv6: Q.IPv6,
  "IPv6-SUBNET": Q.IPv6sub,
  "IPv6-GATEWAY": Q.IPv6,
  IPv6FlowLabel: "[0-9a-fA-F]{1,5}",
  IPv6ClassOfTraffic: "[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]",
  "IPv6-IGMPv3Src": Q.IPv6,
  "IP-IGMPv3Sr": Q.IP,
  "IP-ClassOfTraffic": Q.OSI
}, fu = {
  IP: !1,
  "IP-SUBNET": !1,
  "IP-GATEWAY": !0,
  "OSI-TSEL": !0,
  "OSI-SSEL": !0,
  "OSI-PSEL": !0,
  "OSI-AP-Title": !0,
  "OSI-AP-Invoke": !0,
  "OSI-AE-Qualifier": !0,
  "OSI-AE-Invoke": !0,
  "OSI-NSAP": !0,
  "MAC-Address": !1,
  APPID: !1,
  "VLAN-ID": !0,
  "VLAN-PRIORITY": !0,
  "SNTP-Port": !0,
  "MMS-Port": !0,
  DNSName: !0,
  "UDP-Port": !0,
  "TCP-Port": !0,
  "C37-118-IP-Port": !0,
  IPv6: !0,
  "IPv6-SUBNET": !0,
  "IPv6-GATEWAY": !0,
  IPv6FlowLabel: !0,
  IPv6ClassOfTraffic: !0,
  "IPv6-IGMPv3Src": !0,
  "IP-IGMPv3Sr": !0,
  "IP-ClassOfTraffic": !0
};
function eo(e) {
  return [
    z`<mwc-formfield label="${l("connectedap.wizard.addschemainsttype")}">
      <mwc-checkbox
        id="instType"
        ?checked="${e.hasInstType}"
      ></mwc-checkbox>
    </mwc-formfield>`,
    z`${Object.entries(e.attributes).map(
      ([t, i]) => z`<wizard-textfield
          label="${t}"
          ?nullable=${fu[t]}
          .maybeValue=${i}
          pattern="${Xe(hu[t])}"
          required
        ></wizard-textfield>`
    )}`
  ];
}
function bu(e, t) {
  return e.querySelectorAll("P").length !== t.querySelectorAll("P").length ? !1 : Array.from(e.querySelectorAll("P")).filter(
    (i) => !t.querySelector(`Address > P[type="${i.getAttribute("type")}"]`)?.isEqualNode(i)
  ).length === 0;
}
function gu(e, t, i) {
  const n = W(t.ownerDocument, "Address", {});
  return Object.entries(e).filter(([r, a]) => a !== null).forEach(([r, a]) => {
    const o = r, c = W(t.ownerDocument, "P", { type: o });
    i && c.setAttributeNS(
      "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:type",
      "tP_" + r
    ), c.textContent = a, n.appendChild(c);
  }), n;
}
function to(e, t, i) {
  const n = [], r = gu(t, e, i), a = e.querySelector("Address");
  return a !== null && !bu(a, r) ? (n.push({
    old: {
      parent: e,
      element: a,
      reference: a.nextSibling
    }
  }), n.push({
    new: {
      parent: e,
      element: r,
      reference: a.nextSibling
    }
  })) : a === null && n.push({
    new: {
      parent: e,
      element: r
    }
  }), n;
}
function Kr(e, t, i, n) {
  if (t === null) {
    const a = W(n.ownerDocument, e, {
      unit: "s",
      multiplier: "m"
    });
    return a.textContent = i, {
      new: {
        parent: n,
        element: a,
        reference: n.firstElementChild
      }
    };
  }
  if (i === null)
    return {
      old: {
        parent: n,
        element: t,
        reference: t.nextSibling
      }
    };
  const r = t.cloneNode(!1);
  return r.textContent = i, {
    old: { element: t },
    new: { element: r }
  };
}
function yu(e) {
  return (t, i) => {
    const n = {
      actions: [],
      title: l("gse.action.addaddress", {
        identity: P(e)
      })
    }, r = i.shadowRoot?.querySelector("#instType")?.checked ?? !1, a = {};
    a["MAC-Address"] = g(
      t.find((u) => u.label === "MAC-Address")
    ), a.APPID = g(t.find((u) => u.label === "APPID")), a["VLAN-ID"] = g(
      t.find((u) => u.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = g(
      t.find((u) => u.label === "VLAN-PRIORITY")
    ), to(e, a, r).forEach((u) => {
      n.actions.push(u);
    });
    const c = g(t.find((u) => u.label === "MinTime")), d = g(t.find((u) => u.label === "MaxTime"));
    return c !== (e.querySelector("MinTime")?.textContent?.trim() ?? null) && n.actions.push(
      Kr(
        "MinTime",
        e.querySelector("MinTime"),
        c,
        e
      )
    ), d !== (e.querySelector("MaxTime")?.textContent?.trim() ?? null) && n.actions.push(
      Kr(
        "MaxTime",
        e.querySelector("MaxTime"),
        d,
        e
      )
    ), [n];
  };
}
function vu(e) {
  const t = e.querySelector("MinTime")?.innerHTML.trim() ?? null, i = e.querySelector("MaxTime")?.innerHTML.trim() ?? null, n = Array.from(e.querySelectorAll("Address > P")).some(
    (a) => a.getAttribute("xsi:type")
  ), r = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((a) => {
    r[a] || (r[a] = e.querySelector(`Address > P[type="${a}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: l("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: l("save"),
        icon: "save",
        action: yu(e)
      },
      content: [
        ...eo({ hasInstType: n, attributes: r }),
        p`<wizard-textfield
          label="MinTime"
          .maybeValue=${t}
          nullable
          suffix="ms"
          type="number"
        ></wizard-textfield>`,
        p`<wizard-textfield
          label="MaxTime"
          .maybeValue=${i}
          nullable
          suffix="ms"
          type="number"
        ></wizard-textfield>`
      ]
    }
  ];
}
function io(e) {
  const t = e.getAttribute("name"), i = e.closest("IED")?.getAttribute("name"), n = e.closest("AccessPoint")?.getAttribute("name"), r = e.closest("LDevice")?.getAttribute("inst");
  return e.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${n}"] > GSE[ldInst="${r}"][cbName="${t}"]`
  );
}
function wu(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      pattern="${Qe.asciName}"
      maxLength="${Tn.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    p`<wizard-select
      label="type"
      .maybeValue=${e.type}
      helper="${l("scl.type")}"
      nullable
      required
      >${["GOOSE", "GSSE"].map(
      (t) => p`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`,
    p`<wizard-textfield
      label="appID"
      .maybeValue=${e.appID}
      helper="${l("scl.id")}"
      required
      validationMessage="${l("textfield.nonempty")}"
    ></wizard-textfield>`,
    p`<wizard-checkbox
      label="fixedOffs"
      .maybeValue=${e.fixedOffs}
      nullable
      helper="${l("scl.fixedOffs")}"
    ></wizard-checkbox>`,
    p`<wizard-select
      label="securityEnabled"
      .maybeValue=${e.securityEnabled}
      nullable
      required
      helper="${l("scl.securityEnable")}"
      >${Ya.map(
      (t) => p`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function Au(e) {
  if (!e.parentElement) return null;
  const t = e.parentElement.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), i = io(e), n = Array.from(
    e.parentElement?.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    ) ?? []
  ).filter(
    (c) => c.getAttribute("datSet") === t?.getAttribute("name")
  ).length <= 1, r = [];
  r.push({
    old: {
      parent: e.parentElement,
      element: e,
      reference: e.nextSibling
    }
  }), t && n && r.push({
    old: {
      parent: e.parentElement,
      element: t,
      reference: t.nextSibling
    }
  }), i && r.push({
    old: {
      parent: i.parentElement,
      element: i,
      reference: i.nextSibling
    }
  });
  const a = e.getAttribute("name"), o = e.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: l("controlblock.action.remove", {
      type: e.tagName,
      name: a,
      iedName: o
    }),
    actions: r
  };
}
function xu(e) {
  return (t) => {
    const i = Au(e);
    i && t.dispatchEvent(Oe(i)), t.dispatchEvent(oe());
  };
}
function Su(e) {
  return (t) => {
    t.dispatchEvent(Nt(() => Ja(e)));
  };
}
function Eu(e) {
  return (t) => {
    t.dispatchEvent(Nt(() => vu(e)));
  };
}
function Cu(e) {
  return (t) => {
    const i = t.find((u) => u.label === "name").value, n = g(t.find((u) => u.label === "desc")), r = g(t.find((u) => u.label === "type")), a = g(t.find((u) => u.label === "appID")), o = g(t.find((u) => u.label === "fixedOffs")), c = g(
      t.find((u) => u.label === "securityEnabled")
    );
    if (i === e.getAttribute("name") && n === e.getAttribute("desc") && r === e.getAttribute("type") && a === e.getAttribute("appID") && o === e.getAttribute("fixedOffs") && c === e.getAttribute("securityEnabled"))
      return [];
    const d = U(e, {
      name: i,
      desc: n,
      type: r,
      appID: a,
      fixedOffs: o,
      securityEnabled: c
    });
    return [{ old: { element: e }, new: { element: d } }];
  };
}
function Nu(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = e.getAttribute("appID"), a = e.getAttribute("fixedOffs"), o = e.getAttribute("securityEnabled"), c = io(e), d = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), u = [];
  return u.push({
    icon: "delete",
    label: l("remove"),
    action: xu(e)
  }), d && u.push({
    icon: "edit",
    label: l("scl.DataSet"),
    action: Su(d)
  }), c && u.push({
    icon: "edit",
    label: l("scl.Communication"),
    action: Eu(c)
  }), [
    {
      title: l("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: l("save"),
        action: Cu(e)
      },
      menuActions: u,
      content: [
        ...wu({
          name: t,
          desc: i,
          type: n,
          appID: r,
          fixedOffs: a,
          securityEnabled: o
        })
      ]
    }
  ];
}
function ut(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      helper="${l("scl.type")}"
      nullable
    ></wizard-textfield>`
  ];
}
function Iu(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = g(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = U(e, i);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function ku(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = K(
    e.parentElement,
    "Function"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Iu(e)
      },
      content: [
        ...ut({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Du(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = g(t.find((o) => o.label === a));
    });
    const r = W(
      e.ownerDocument,
      "Function",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function $u(e) {
  const t = "", r = Array.from(e.querySelectorAll("Function")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: l("wizard.title.add", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Du(e)
      },
      content: [
        ...ut({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function Lu(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = g(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = U(e, i);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function zu(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = K(
    e.parentElement,
    "EqSubFunction"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "EqSubFunction" }),
      element: e,
      primary: {
        icon: "save",
        label: l("save"),
        action: Lu(e)
      },
      content: [
        ...ut({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Tu(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = g(t.find((o) => o.label === a));
    });
    const r = W(
      e.ownerDocument,
      "EqSubFunction",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function _u(e) {
  const t = "", r = Array.from(
    e.querySelectorAll("EqSubFunction")
  ).map((a) => a.getAttribute("name"));
  return [
    {
      title: l("wizard.title.add", { tagName: "EqSubFunction" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Tu(e)
      },
      content: [
        ...ut({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function Vu(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = g(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = U(e, i);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Pu(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = K(
    e.parentElement,
    "EqFunction"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "EqFunction" }),
      element: e,
      primary: {
        icon: "save",
        label: l("save"),
        action: Vu(e)
      },
      content: [
        ...ut({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Mu(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = g(t.find((o) => o.label === a));
    });
    const r = W(
      e.ownerDocument,
      "EqFunction",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function Ru(e) {
  const t = "", r = Array.from(e.querySelectorAll("EqFunction")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: l("wizard.title.add", { tagName: "EqFunction" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Mu(e)
      },
      content: [
        ...ut({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function Ou(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = g(t.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = U(e, i);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Fu(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = K(
    e.parentElement,
    "SubFunction"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Ou(e)
      },
      content: [
        ...ut({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function qu(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = g(t.find((o) => o.label === a));
    });
    const r = W(
      e.ownerDocument,
      "SubFunction",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function Hu(e) {
  const t = "", r = Array.from(e.querySelectorAll("SubFunction")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: l("wizard.title.add", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: qu(e)
      },
      content: [
        ...ut({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function Bu(e) {
  return (t, i) => {
    const n = {
      actions: [],
      title: l("smv.action.addaddress", {
        identity: P(e)
      })
    }, r = i.shadowRoot?.querySelector("#instType")?.checked, a = {};
    a["MAC-Address"] = g(
      t.find((c) => c.label === "MAC-Address")
    ), a.APPID = g(t.find((c) => c.label === "APPID")), a["VLAN-ID"] = g(
      t.find((c) => c.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = g(
      t.find((c) => c.label === "VLAN-PRIORITY")
    );
    const o = to(e, a, r);
    return o.length ? (o.forEach((c) => {
      n.actions.push(c);
    }), [n]) : [];
  };
}
function Gu(e) {
  const t = Array.from(e.querySelectorAll("Address > P")).some(
    (n) => n.getAttribute("xsi:type")
  ), i = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((n) => {
    i[n] || (i[n] = e.querySelector(`Address > P[type="${n}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: l("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: l("save"),
        icon: "edit",
        action: Bu(e)
      },
      content: [...eo({ hasInstType: t, attributes: i })]
    }
  ];
}
function Wu(e) {
  return Object.entries(e).map(
    ([t, i]) => p`<wizard-checkbox
        label="${t}"
        .maybeValue=${i}
        nullable
        helper="${l(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function ju(e) {
  return (t) => {
    const i = {}, n = [
      "refreshTime",
      "sampleRate",
      "dataSet",
      "security",
      "synchSourceId"
    ];
    if (n.forEach((a) => {
      i[a] = g(t.find((o) => o.label === a));
    }), !n.some((a) => i[a] !== e.getAttribute(a)))
      return [];
    const r = U(e, i);
    return [{ old: { element: e }, new: { element: r } }];
  };
}
function Uu(e) {
  const [t, i, n, r, a] = [
    "refreshTime",
    "sampleRate",
    "dataSet",
    "security",
    "synchSourceId"
  ].map((o) => e.getAttribute(o));
  return [
    {
      title: l("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: l("save"),
        action: ju(e)
      },
      content: [
        ...Wu({
          refreshTime: t,
          sampleRate: i,
          dataSet: n,
          security: r,
          synchSourceId: a
        })
      ]
    }
  ];
}
function no(e) {
  const t = e.getAttribute("name"), i = e.closest("IED")?.getAttribute("name"), n = e.closest("AccessPoint")?.getAttribute("name"), r = e.closest("LDevice")?.getAttribute("inst");
  return e.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${n}"] > SMV[ldInst="${r}"][cbName="${t}"]`
  ) ?? null;
}
function Ku(e) {
  if (!e.parentElement) return null;
  const t = e.parentElement.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), i = no(e), n = Array.from(
    e.parentElement.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    )
  ).filter(
    (c) => c.getAttribute("datSet") === t?.getAttribute("name")
  ).length <= 1, r = [];
  r.push({
    old: {
      parent: e.parentElement,
      element: e
    }
  }), t && n && r.push({
    old: {
      parent: e.parentElement,
      element: t
    }
  }), i && r.push({
    old: {
      parent: i.parentElement,
      element: i
    }
  });
  const a = e.getAttribute("name"), o = e.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: l("controlblock.action.remove", {
      type: e.tagName,
      name: a,
      iedName: o
    }),
    actions: r
  };
}
function Zu(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      pattern="${Qe.asciName}"
      maxLength="${Tn.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      pattern="${Qe.normalizedString}"
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    e.multicast === "true" ? p`` : p`<wizard-checkbox
          label="multicast"
          .maybeValue=${e.multicast}
          helper="${l("scl.multicast")}"
          disabled
        ></wizard-checkbox>`,
    p`<wizard-textfield
      label="smvID"
      .maybeValue=${e.smvID}
      helper="${l("scl.id")}"
      required
      validationMessage="${l("textfield.nonempty")}"
    ></wizard-textfield>`,
    p`<wizard-select
      label="smpMod"
      .maybeValue=${e.smpMod}
      nullable
      required
      helper="${l("scl.smpMod")}"
      >${Jd.map(
      (t) => p`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`,
    p`<wizard-textfield
      label="smpRate"
      .maybeValue=${e.smpRate}
      helper="${l("scl.smpRate")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="nofASDU"
      .maybeValue=${e.nofASDU}
      helper="${l("scl.nofASDU")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    p`<wizard-select
      label="securityEnabled"
      .maybeValue=${e.securityEnabled}
      nullable
      required
      helper="${l("scl.securityEnable")}"
      >${Ya.map(
      (t) => p`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function Xu(e) {
  return (t) => {
    const i = Ku(e);
    i && t.dispatchEvent(Oe(i)), t.dispatchEvent(oe());
  };
}
function Yu(e) {
  return (t) => {
    t.dispatchEvent(Nt(() => Ja(e)));
  };
}
function Qu(e) {
  return (t) => {
    t.dispatchEvent(Nt(() => Uu(e)));
  };
}
function Ju(e) {
  return (t) => {
    t.dispatchEvent(Nt(() => Gu(e)));
  };
}
function ep(e) {
  return (t) => {
    const i = {}, n = [
      "name",
      "desc",
      "multicast",
      "smvID",
      "smpMod",
      "smpRate",
      "nofASDU",
      "securityEnabled"
    ];
    n.forEach((o) => {
      if (o === "multicast" && !t.find((d) => d.label === o)) {
        i.multicast = "true";
        return;
      }
      i[o] = g(t.find((d) => d.label === o));
    });
    let r = null;
    if (n.some((o) => i[o] !== e.getAttribute(o))) {
      const o = U(e, i);
      r = {
        old: { element: e },
        new: { element: o }
      };
    }
    const a = [];
    return r && a.push(r), a;
  };
}
function tp(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("multicast"), r = e.getAttribute("smvID"), a = e.getAttribute("smpMod"), o = e.getAttribute("smpRate"), c = e.getAttribute("nofASDU"), d = e.getAttribute("securityEnabled"), u = no(e), m = e.querySelector("SmvOpts"), f = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), b = [];
  return b.push({
    icon: "delete",
    label: l("remove"),
    action: Xu(e)
  }), f && b.push({
    icon: "edit",
    label: l("scl.DataSet"),
    action: Yu(f)
  }), m && b.push({
    icon: "edit",
    label: l("scl.SmvOpts"),
    action: Qu(m)
  }), u && b.push({
    icon: "edit",
    label: l("scl.Communication"),
    action: Ju(u)
  }), [
    {
      title: l("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: l("save"),
        action: ep(e)
      },
      menuActions: b,
      content: [
        ...Zu({
          name: t,
          desc: i,
          multicast: n,
          smvID: r,
          smpMod: a,
          smpRate: o,
          nofASDU: c,
          securityEnabled: d
        })
      ]
    }
  ];
}
function ro(e) {
  return [
    z`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      .reservedValues=${e.reservedNames}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    z`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    z`<wizard-select
      label="phase"
      fixedMenuPosition
      .maybeValue=${e.phase}
      nullable
      helper="${l("scl.phase")}"
    >
      ${["A", "B", "C", "N", "all", "none", "AB", "BC", "CA"].map(
      (t) => z`<mwc-list-item value="${t}">
            ${t.charAt(0).toUpperCase() + t.slice(1)}
          </mwc-list-item>`
    )}
    </wizard-select> `,
    z`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      nullable
      helper="${l("scl.virtual")}"
    ></wizard-checkbox>`
  ];
}
function ip(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "phase", "virtual"];
    if (n.forEach((r) => {
      i[r] = g(t.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = U(e, i);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function np(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("phase"), r = e.getAttribute("virtual"), a = K(
    e.parentElement,
    "SubEquipment"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: ip(e)
      },
      content: [
        ...ro({
          name: t,
          desc: i,
          phase: n,
          virtual: r,
          reservedNames: a
        })
      ]
    }
  ];
}
function rp(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "phase", "virtual"].forEach((a) => {
      i[a] = g(t.find((o) => o.label === a));
    });
    const r = W(
      e.ownerDocument,
      "SubEquipment",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function ap(e) {
  const t = "", a = Array.from(e.querySelectorAll("SubEquipment")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: l("wizard.title.add", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: rp(e)
      },
      content: [
        ...ro({
          name: t,
          desc: null,
          phase: null,
          virtual: null,
          reservedNames: a
        })
      ]
    }
  ];
}
function op(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = e.getAttribute("virtual"), a = K(
    e.parentElement,
    "GeneralEquipment"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: sp(e)
      },
      content: [
        ...ao({
          name: t,
          desc: i,
          type: n,
          virtual: r,
          reservedNames: a
        })
      ]
    }
  ];
}
function sp(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = g(t.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = U(e, i);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function ao(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      helper="${l("scl.type")}"
      minLength="${3}"
      pattern="AXN|BAT|MOT|FAN|FIL|PMP|TNK|VLV|E[A-Z]*"
      required
    ></wizard-textfield>`,
    p`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${l("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function cp(e) {
  const t = "", a = Array.from(
    e.querySelectorAll("GeneralEquipment")
  ).map((o) => o.getAttribute("name"));
  return [
    {
      title: l("wizard.title.add", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: lp(e)
      },
      content: [
        ...ao({
          name: t,
          desc: null,
          type: null,
          virtual: null,
          reservedNames: a
        })
      ]
    }
  ];
}
function lp(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = g(t.find((o) => o.label === a));
    });
    const r = W(
      e.ownerDocument,
      "GeneralEquipment",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function dp(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = g(
        t.find((o) => o.label === a)
      );
    });
    const r = W(
      e.ownerDocument,
      "TransformerWinding",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function up(e) {
  const t = "", a = Array.from(
    e.querySelectorAll("TransformerWinding")
  ).map((o) => o.getAttribute("name"));
  return [
    {
      title: l("wizard.title.add", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: dp(e)
      },
      content: [
        ...oo({
          name: t,
          desc: null,
          type: null,
          virtual: null,
          reservedNames: a
        })
      ]
    }
  ];
}
function pp(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = g(
        t.find((a) => a.label === r)
      );
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = U(e, i);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function oo(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      disabled
      helper="${l("scl.type")}"
    ></wizard-textfield>`,
    p`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${l("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function mp(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = e.getAttribute("virtual"), a = K(
    e.parentElement,
    "TransformerWinding"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: pp(e)
      },
      content: [
        ...oo({
          name: t,
          desc: i,
          type: n,
          virtual: r,
          reservedNames: a
        })
      ]
    }
  ];
}
function hp(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = g(t.find((o) => o.label === a));
    });
    const r = W(
      e.ownerDocument,
      "TapChanger",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function fp(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = g(t.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = U(e, i);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function so(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      disabled
      helper="${l("scl.type")}"
    ></wizard-textfield>`,
    p`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${l("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function bp(e) {
  const t = "", n = "LTC", a = Array.from(e.querySelectorAll("TapChanger")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: l("wizard.title.add", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: hp(e)
      },
      content: [
        ...so({
          name: t,
          desc: null,
          type: n,
          virtual: null,
          reservedNames: a
        })
      ]
    }
  ];
}
function gp(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = e.getAttribute("virtual"), a = K(
    e.parentElement,
    "TapChanger"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: fp(e)
      },
      content: [
        ...so({
          name: t,
          desc: i,
          type: n,
          virtual: r,
          reservedNames: a
        })
      ]
    }
  ];
}
function co(e, t, i, n, r) {
  return [
    z`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("line.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    z`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${l("line.wizard.descHelper")}"
    ></wizard-textfield>`,
    z`<wizard-textfield
      label="type"
      .maybeValue=${i}
      nullable
      helper="${l("line.wizard.typeHelper")}"
    ></wizard-textfield>`,
    z`<wizard-textfield
      label="nomFreq"
      .maybeValue=${n}
      nullable
      helper="${l("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      validationMessage="${l("textfield.nonempty")}"
      pattern="${Jt.unsigned}"
    ></wizard-textfield>`,
    z`<wizard-textfield
      label="numPhases"
      .maybeValue=${r}
      nullable
      helper="${l("voltagelevel.wizard.numPhaseHelper")}"
      suffix="#"
      validationMessage="${l("textfield.nonempty")}"
      type="number"
      min="1"
      max="255"
    ></wizard-textfield>`
  ];
}
function yp(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "nomFreq", "numPhases"].forEach((a) => {
      i[a] = g(t.find((o) => o.label === a));
    });
    const r = W(e.ownerDocument, "Line", i);
    return [{ new: { parent: e, element: r } }];
  };
}
function vp(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type", "nomFreq", "numPhases"];
    if (n.forEach((r) => {
      i[r] = g(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = U(e, i);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function wp(e) {
  return [
    {
      title: l("wizard.title.add", { tagName: "Line" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: yp(e)
      },
      content: [...co("", "", "", "", "")]
    }
  ];
}
function Ap(e) {
  return [
    {
      title: l("line.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: vp(e)
      },
      content: co(
        e.getAttribute("name") ?? "",
        e.getAttribute("desc"),
        e.getAttribute("type"),
        e.getAttribute("nomFreq"),
        e.getAttribute("numPhases")
      )
    }
  ];
}
function xp(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = g(t.find((o) => o.label === a));
    });
    const r = W(e.ownerDocument, "Process", i);
    return [{ new: { parent: e, element: r } }];
  };
}
function Sp(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = g(t.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = U(e, i);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function lo(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      nullable
      helper="${l("scl.type")}"
    ></wizard-textfield>`
  ];
}
function Ep(e) {
  const t = "", i = "", n = "", r = K(
    e.parentElement,
    "Process"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: l("wizard.title.add", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: xp(e)
      },
      content: [
        ...lo({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Cp(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = K(
    e.parentElement,
    "Process"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Sp(e)
      },
      content: [
        ...lo({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Np(e, t, i, n, r) {
  return [
    p`<wizard-textfield
      label="lnType"
      .maybeValue=${e}
      readonly
      required
      helper="${l("ln.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${l("ln.wizard.descHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="prefix"
      nullable
      readonly
      .maybeValue=${i}
      helper="${l("ln.wizard.prefixHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${n}
      helper="${l("ln.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="inst"
      .maybeValue=${r}
      readonly
      helper="${l("ln.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function Ip(e) {
  return (t) => {
    const i = {}, n = ["lnType", "desc", "prefix", "lnClass", "inst"];
    if (n.forEach((r) => {
      i[r] = g(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = U(e, i);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function kp(e) {
  return [
    {
      title: l("ln.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: Ip(e)
      },
      content: Np(
        e.getAttribute("lnType"),
        e.getAttribute("desc"),
        e.getAttribute("prefix"),
        e.getAttribute("lnClass"),
        e.getAttribute("inst")
      )
    }
  ];
}
function Dp(e, t, i, n) {
  return [
    p`<wizard-textfield
      label="lnType"
      .maybeValue=${e}
      readonly
      required
      helper="${l("ln0.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${l("ln0.wizard.descHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${i}
      helper="${l("ln0.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="inst"
      .maybeValue=${n}
      readonly
      helper="${l("ln0.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function $p(e) {
  return (t) => {
    const i = {}, n = ["lnType", "desc", "lnClass", "inst"];
    if (n.forEach((r) => {
      i[r] = g(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = U(e, i);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Lp(e) {
  return [
    {
      title: l("ln0.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: $p(e)
      },
      content: Dp(
        e.getAttribute("lnType"),
        e.getAttribute("desc"),
        e.getAttribute("lnClass"),
        e.getAttribute("inst")
      )
    }
  ];
}
function s() {
}
const fe = {
  AccessControl: {
    edit: s,
    create: s
  },
  AccessPoint: {
    edit: s,
    create: s
  },
  Address: {
    edit: s,
    create: s
  },
  Association: {
    edit: s,
    create: s
  },
  Authentication: {
    edit: s,
    create: s
  },
  BDA: {
    edit: s,
    create: s
  },
  BitRate: {
    edit: s,
    create: s
  },
  Bay: {
    edit: cl,
    create: sl
  },
  ClientLN: {
    edit: s,
    create: s
  },
  ClientServices: {
    edit: s,
    create: s
  },
  CommProt: {
    edit: s,
    create: s
  },
  Communication: {
    edit: s,
    create: s
  },
  ConductingEquipment: {
    edit: bl,
    create: fl
  },
  ConfDataSet: {
    edit: s,
    create: s
  },
  ConfLdName: {
    edit: s,
    create: s
  },
  ConfLNs: {
    edit: s,
    create: s
  },
  ConfLogControl: {
    edit: s,
    create: s
  },
  ConfReportControl: {
    edit: s,
    create: s
  },
  ConfSG: {
    edit: s,
    create: s
  },
  ConfSigRef: {
    edit: s,
    create: s
  },
  ConnectedAP: {
    edit: s,
    create: s
  },
  ConnectivityNode: {
    edit: Ma,
    create: s
  },
  DA: {
    edit: au,
    create: s
  },
  DAI: {
    edit: uu,
    create: s
  },
  DAType: {
    edit: s,
    create: s
  },
  DO: {
    edit: s,
    create: s
  },
  DOI: {
    edit: s,
    create: s
  },
  DOType: {
    edit: s,
    create: s
  },
  DataObjectDirectory: {
    edit: s,
    create: s
  },
  DataSet: {
    edit: s,
    create: s
  },
  DataSetDirectory: {
    edit: s,
    create: s
  },
  DataTypeTemplates: {
    edit: s,
    create: s
  },
  DynAssociation: {
    edit: s,
    create: s
  },
  DynDataSet: {
    edit: s,
    create: s
  },
  EnumType: {
    edit: s,
    create: s
  },
  EnumVal: {
    edit: s,
    create: s
  },
  EqFunction: {
    edit: Pu,
    create: Ru
  },
  EqSubFunction: {
    edit: zu,
    create: _u
  },
  ExtRef: {
    edit: s,
    create: s
  },
  FCDA: {
    edit: s,
    create: Oa
  },
  FileHandling: {
    edit: s,
    create: s
  },
  Function: {
    edit: ku,
    create: $u
  },
  GeneralEquipment: {
    edit: op,
    create: cp
  },
  GetCBValues: {
    edit: s,
    create: s
  },
  GetDataObjectDefinition: {
    edit: s,
    create: s
  },
  GetDataSetValue: {
    edit: s,
    create: s
  },
  GetDirectory: {
    edit: s,
    create: s
  },
  GOOSE: {
    edit: s,
    create: s
  },
  GOOSESecurity: {
    edit: s,
    create: s
  },
  GSE: {
    edit: s,
    create: s
  },
  GSEDir: {
    edit: s,
    create: s
  },
  GSEControl: {
    edit: Nu,
    create: s
  },
  GSESettings: {
    edit: s,
    create: s
  },
  GSSE: {
    edit: s,
    create: s
  },
  Header: {
    edit: s,
    create: s
  },
  History: {
    edit: s,
    create: s
  },
  Hitem: {
    edit: s,
    create: s
  },
  IED: {
    edit: qd,
    create: s
  },
  IEDName: {
    edit: s,
    create: s
  },
  Inputs: {
    edit: s,
    create: s
  },
  IssuerName: {
    edit: s,
    create: s
  },
  KDC: {
    edit: s,
    create: s
  },
  LDevice: {
    edit: jd,
    create: s
  },
  LN: {
    edit: kp,
    create: s
  },
  LN0: {
    edit: Lp,
    create: s
  },
  LNode: {
    edit: Yl,
    create: Kl
  },
  LNodeType: {
    edit: s,
    create: s
  },
  Line: {
    edit: Ap,
    create: wp
  },
  Log: {
    edit: s,
    create: s
  },
  LogControl: {
    edit: s,
    create: s
  },
  LogSettings: {
    edit: s,
    create: s
  },
  MaxTime: {
    edit: s,
    create: s
  },
  McSecurity: {
    edit: s,
    create: s
  },
  MinTime: {
    edit: s,
    create: s
  },
  NeutralPoint: {
    edit: s,
    create: s
  },
  OptFields: {
    edit: ed,
    create: s
  },
  P: {
    edit: s,
    create: s
  },
  PhysConn: {
    edit: s,
    create: s
  },
  PowerTransformer: {
    edit: Ed,
    create: Sd
  },
  Private: {
    edit: s,
    create: s
  },
  Process: {
    edit: Cp,
    create: Ep
  },
  ProtNs: {
    edit: s,
    create: s
  },
  Protocol: {
    edit: s,
    create: s
  },
  ReadWrite: {
    edit: s,
    create: s
  },
  RedProt: {
    edit: s,
    create: s
  },
  ReportControl: {
    edit: s,
    create: s
  },
  ReportSettings: {
    edit: s,
    create: s
  },
  RptEnabled: {
    edit: s,
    create: s
  },
  SamplesPerSec: {
    edit: s,
    create: s
  },
  SampledValueControl: {
    edit: tp,
    create: s
  },
  SecPerSamples: {
    edit: s,
    create: s
  },
  SCL: {
    edit: s,
    create: s
  },
  SDI: {
    edit: s,
    create: s
  },
  SDO: {
    edit: s,
    create: s
  },
  Server: {
    edit: s,
    create: s
  },
  ServerAt: {
    edit: s,
    create: s
  },
  Services: {
    edit: s,
    create: s
  },
  SetDataSetValue: {
    edit: s,
    create: s
  },
  SettingControl: {
    edit: s,
    create: s
  },
  SettingGroups: {
    edit: s,
    create: s
  },
  SGEdit: {
    edit: s,
    create: s
  },
  SmpRate: {
    edit: s,
    create: s
  },
  SMV: {
    edit: s,
    create: s
  },
  SmvOpts: {
    edit: s,
    create: s
  },
  SMVsc: {
    edit: s,
    create: s
  },
  SMVSecurity: {
    edit: s,
    create: s
  },
  SMVSettings: {
    edit: s,
    create: s
  },
  SubEquipment: {
    edit: np,
    create: ap
  },
  SubFunction: {
    edit: Fu,
    create: Hu
  },
  SubNetwork: {
    edit: kd,
    create: s
  },
  Subject: {
    edit: s,
    create: s
  },
  Substation: {
    edit: fd,
    create: hd
  },
  SupSubscription: {
    edit: s,
    create: s
  },
  TapChanger: {
    edit: gp,
    create: bp
  },
  Terminal: {
    edit: Ka,
    create: s
  },
  Text: {
    edit: s,
    create: s
  },
  TimerActivatedControl: {
    edit: s,
    create: s
  },
  TimeSyncProt: {
    edit: s,
    create: s
  },
  TransformerWinding: {
    edit: mp,
    create: up
  },
  TrgOps: {
    edit: Zd,
    create: s
  },
  Val: {
    edit: s,
    create: s
  },
  ValueHandling: {
    edit: s,
    create: s
  },
  Voltage: {
    edit: s,
    create: s
  },
  VoltageLevel: {
    edit: Ad,
    create: yd
  }
};
var zp = Object.defineProperty, Tp = Object.getOwnPropertyDescriptor, pt = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Tp(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && zp(t, i, r), r;
};
function _p(e) {
  return e ? ee[e.tagName].children.filter(
    (t) => fe[t].create !== s
  ) : [];
}
let qe = class extends $e {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const e = this.element.getAttribute("name"), t = this.element.getAttribute("desc"), i = this.element.getAttribute("type");
    return `${e}${t ? ` - ${t}` : ""}${i ? ` (${i})` : ""}`;
  }
  openEditWizard() {
    const e = fe.EqSubFunction.edit(this.element);
    e && this.dispatchEvent(oe(e));
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      Oe({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = fe[e].create(this.element);
    t && this.dispatchEvent(oe(t));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderLNodes() {
    const e = K(this.element, "LNode");
    return e.length ? p`<div class="container lnode">
          ${e.map(
      (t) => p`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : p``;
  }
  renderEqSubFunctions() {
    const e = K(
      this.element,
      "EqSubFunction"
    );
    return p` ${e.map(
      (t) => p`<eq-sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
        ></eq-sub-function-editor>`
    )}`;
  }
  renderAddButtons() {
    return _p(this.element).map(
      (e) => p`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return p`<action-pane label="${this.header}" icon="functions" secondary
      ><abbr slot="action" title="${l("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" title="${l("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${l("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        ></abbr
      >
      ${ki(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderEqSubFunctions()}</action-pane
    >`;
  }
};
qe.styles = we`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
pt([
  y({ attribute: !1 })
], qe.prototype, "doc", 2);
pt([
  y({ type: Number })
], qe.prototype, "editCount", 2);
pt([
  y({ attribute: !1 })
], qe.prototype, "element", 2);
pt([
  y({ type: Boolean })
], qe.prototype, "showfunctions", 2);
pt([
  B()
], qe.prototype, "header", 1);
pt([
  Y("mwc-menu")
], qe.prototype, "addMenu", 2);
pt([
  Y('mwc-icon-button[icon="playlist_add"]')
], qe.prototype, "addButton", 2);
qe = pt([
  pe("eq-sub-function-editor")
], qe);
var Vp = Object.defineProperty, Pp = Object.getOwnPropertyDescriptor, mt = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Pp(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && Vp(t, i, r), r;
};
function Mp(e) {
  return e ? ee[e.tagName].children.filter(
    (t) => fe[t].create !== s
  ) : [];
}
let He = class extends $e {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const e = this.element.getAttribute("name"), t = this.element.getAttribute("desc"), i = this.element.getAttribute("type");
    return `${e}${t ? ` - ${t}` : ""}${i ? ` (${i})` : ""}`;
  }
  openEditWizard() {
    const e = fe.EqFunction.edit(this.element);
    e && this.dispatchEvent(oe(e));
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      Oe({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = fe[e].create(this.element);
    t && this.dispatchEvent(oe(t));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderLNodes() {
    const e = K(this.element, "LNode");
    return e.length ? p`<div class="container lnode">
          ${e.map(
      (t) => p`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : p``;
  }
  renderEqSubFunctions() {
    const e = K(
      this.element,
      "EqSubFunction"
    );
    return p` ${e.map(
      (t) => p`<eq-sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></eq-sub-function-editor>`
    )}`;
  }
  renderAddButtons() {
    return Mp(this.element).map(
      (e) => p`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return p`<action-pane
      label="${this.header}"
      icon="functions"
      secondary
      highlighted
      ><abbr slot="action" title="${l("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" title="${l("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${l("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        ></abbr
      >
      ${ki(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderEqSubFunctions()}</action-pane
    >`;
  }
};
He.styles = we`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
mt([
  y({ attribute: !1 })
], He.prototype, "doc", 2);
mt([
  y({ type: Number })
], He.prototype, "editCount", 2);
mt([
  y({ attribute: !1 })
], He.prototype, "element", 2);
mt([
  y({ type: Boolean })
], He.prototype, "showfunctions", 2);
mt([
  B()
], He.prototype, "header", 1);
mt([
  Y("mwc-menu")
], He.prototype, "addMenu", 2);
mt([
  Y('mwc-icon-button[icon="playlist_add"]')
], He.prototype, "addButton", 2);
He = mt([
  pe("eq-function-editor")
], He);
var Rp = Object.defineProperty, Op = Object.getOwnPropertyDescriptor, Mt = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Op(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && Rp(t, i, r), r;
};
let ct = class extends $e {
  constructor() {
    super(...arguments), this.secondary = !1, this.highlighted = !1, this.hideActions = !1;
  }
  async firstUpdated() {
    this.tabIndex = 0;
  }
  renderIcon() {
    return p`<span>
      <slot name="icon"
        >${this.icon ? p`<mwc-icon>${this.icon}</mwc-icon>` : zt}</slot
      ></span
    > `;
  }
  render() {
    return p`<header>${this.label ?? zt}</header>
      <section>${this.renderIcon()}<slot name="action"></slot></section>
      <footer>${this.label ?? zt}</footer>`;
  }
};
ct.styles = we`
    :host {
      display: flex;
      flex-direction: column;
      outline: none;
    }

    section {
      align-self: center;
    }

    ::slotted([slot='icon']),
    mwc-icon {
      display: block;
      color: var(--mdc-theme-on-surface);
      transition: transform 150ms linear, box-shadow 200ms linear;
      outline-color: var(--mdc-theme-primary);
      outline-style: solid;
      margin: 0px;
      outline-width: 0px;
      width: 64px;
      height: 64px;
      --mdc-icon-size: 64px;
    }

    :host([secondary]) ::slotted([slot='icon']),
    :host([secondary]) mwc-icon {
      outline-color: var(--mdc-theme-secondary);
    }

    :host([highlighted]) ::slotted([slot='icon']),
    :host([highlighted]) mwc-icon {
      outline-style: dotted;
      outline-width: 2px;
    }

    :host(:focus-within) ::slotted([slot='icon']),
    :host(:focus-within) mwc-icon {
      outline-style: solid;
      outline-width: 4px;
    }

    :host(:focus-within:not([hideActions])) ::slotted([slot='icon']),
    :host(:focus-within:not([hideActions])) mwc-icon {
      transform: scale(0.8);
      transition: all 250ms linear;
      box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
    }

    ::slotted([slot='icon']:hover),
    mwc-icon:hover {
      outline-style: dashed;
      outline-width: 2px;
      transition: transform 200ms linear, box-shadow 250ms linear;
    }

    ::slotted([slot='action']) {
      color: var(--mdc-theme-on-surface);
      transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 200ms linear;
      position: absolute;
      pointer-events: none;
      z-index: 1;
      opacity: 0;
      margin-top: -56px;
      margin-left: 8px;
    }

    :host(:focus-within) ::slotted([slot='action']) {
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 250ms linear;
      pointer-events: auto;
      opacity: 1;
    }

    :host(:focus-within) ::slotted([slot='action']:nth-of-type(1)) {
      transform: translate(0px, -52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(2)) {
      transform: translate(0px, 52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(3)) {
      transform: translate(52px, 0px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(4)) {
      transform: translate(-52px, 0px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(5)) {
      transform: translate(52px, -52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(6)) {
      transform: translate(-52px, 52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(7)) {
      transform: translate(-52px, -52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(8)) {
      transform: translate(52px, 52px);
    }

    footer {
      color: var(--mdc-theme-on-surface);
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0px;
      text-align: center;
      align-self: center;
      max-width: 100%;
      direction: rtl;
    }

    header {
      color: var(--mdc-theme-on-primary);
      background-color: var(--mdc-theme-primary);
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 1.2em;
      position: absolute;
      text-align: center;
      align-self: center;
      max-width: 100vw;
      padding: 4px 8px;
      border-radius: 4px;
      opacity: 0;
      transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 200ms linear;
    }

    :host([secondary]) header {
      background-color: var(--mdc-theme-secondary);
    }

    :host(:hover) header {
      position: absolute;
      opacity: 1;
      transform: translate(0, -40px);
      box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 250ms linear;
    }

    :host(:focus-within) header {
      position: absolute;
      opacity: 1;
      box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 250ms linear;
    }

    :host(:focus-within:not([hideActions])) header {
      transform: translate(0, -80px);
    }

    :host(:focus-within[hideActions]) header {
      transform: translate(0, -40px);
    }
  `;
Mt([
  y({ type: String })
], ct.prototype, "label", 2);
Mt([
  y({ type: String })
], ct.prototype, "icon", 2);
Mt([
  y({ type: Boolean })
], ct.prototype, "secondary", 2);
Mt([
  y({ type: Boolean })
], ct.prototype, "highlighted", 2);
Mt([
  y({ type: Boolean })
], ct.prototype, "hideActions", 2);
ct = Mt([
  pe("action-icon")
], ct);
const uo = V`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Fp = V`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H13A2,2 0 0,1 15,9V17H13V13H11V17H9V9A2,2 0 0,1 11,7M11,9V11H13V9H11M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
</svg>`, qp = V`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H13A2,2 0 0,1 15,9V10H13V9H11V15H13V14H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Hp = V`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15V9H11V11H14V13H11V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Bp = V`<svg  viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Gp = V`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M14,7V9H13V15H14V17H10V15H11V9H10V7H14M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Wp = V`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M9,7H11V10.33L13,7H15L12,12L15,17H13L11,13.67V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, jp = V`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15A2,2 0 0,1 17,9V17H15V9H13V16H11V9H9V17H7V9A2,2 0 0,1 9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Up = V`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11A2,2 0 0,1 13,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Kp = V`<svg  viewBox="0 0 24 24">
    <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,7H13A2,2 0 0,1 15,9V15A2,2 0 0,1 13,17V19H11V17A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M11,9V15H13V9H11Z" />
</svg>`, Zp = V`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,16.41 7.58,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Xp = V`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Yp = V`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15V9H13V17H11V9H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Qp = V`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H11L12,9.5L13,7H15L13,12L15,17H13L12,14.5L11,17H9L11,12L9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Jp = V`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H11L12,10L13,7H15L13,13V17H11V13L9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, em = V`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15V9L11,15H15V17H9V15L13,9H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
var tm = Object.defineProperty, im = Object.getOwnPropertyDescriptor, Rt = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? im(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && tm(t, i, r), r;
};
function nm(e) {
  const t = e.getAttribute("lnClass")?.charAt(0) ?? "";
  return rm[t] ?? uo;
}
const rm = {
  L: uo,
  A: Fp,
  C: qp,
  F: Hp,
  G: Bp,
  I: Gp,
  K: Wp,
  M: jp,
  P: Up,
  Q: Kp,
  R: Zp,
  S: Xp,
  T: Yp,
  X: Qp,
  Y: Jp,
  Z: em
};
let Et = class extends $e {
  get header() {
    const e = this.element.getAttribute("prefix") ?? "", t = this.element.getAttribute("lnClass"), i = this.element.getAttribute("lnInst"), n = this.missingIedReference ? `${e} ${t} ${i}` : P(this.element);
    return typeof n == "string" ? n : "";
  }
  get missingIedReference() {
    return this.element.getAttribute("iedName") === "None";
  }
  get isIEDReference() {
    return this.element.getAttribute("iedName") !== "None";
  }
  cloneLNodeElement() {
    const e = this.element.getAttribute("lnClass");
    if (!e) return;
    const t = Ia(this.element.parentElement)(
      e
    );
    if (!t) return;
    const i = U(this.element, { lnInst: t });
    this.dispatchEvent(
      Oe({
        new: { parent: this.element.parentElement, element: i }
      })
    );
  }
  openEditWizard() {
    const e = fe.LNode.edit(this.element);
    e && this.dispatchEvent(oe(e));
  }
  remove() {
    this.element && this.dispatchEvent(
      Oe({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  render() {
    return p`<action-icon
      label="${this.header}"
      ?secondary=${this.missingIedReference}
      ?highlighted=${this.missingIedReference}
      ><mwc-icon slot="icon">${nm(this.element)}</mwc-icon
      ><mwc-fab
        slot="action"
        mini
        icon="edit"
        @click="${() => this.openEditWizard()}}"
      ></mwc-fab
      ><mwc-fab
        slot="action"
        mini
        icon="delete"
        @click="${() => this.remove()}}"
      ></mwc-fab
      >${this.isIEDReference ? p`` : p`<mwc-fab
            slot="action"
            mini
            icon="content_copy"
            @click=${() => this.cloneLNodeElement()}
          ></mwc-fab>`}
    </action-icon>`;
  }
};
Rt([
  y({ attribute: !1 })
], Et.prototype, "doc", 2);
Rt([
  y({ attribute: !1 })
], Et.prototype, "element", 2);
Rt([
  B()
], Et.prototype, "header", 1);
Rt([
  B()
], Et.prototype, "missingIedReference", 1);
Rt([
  B()
], Et.prototype, "isIEDReference", 1);
Et = Rt([
  pe("l-node-editor")
], Et);
const po = p`<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 25 25"
>
  <path
    d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"
    stroke="currentColor"
    fill="transparent"
    stroke-width="1.5"
    stroke-linecap="round"
  />
</svg>`, ii = {
  action: V`<path d="M0 0h24v24H0z" fill="none"></path><path d="M13 3c-4.97 0-9
  4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7
  7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0
  9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" fill="currentColor"></path>`,
  dAIcon: V`<path fill="currentColor" d="m4.2 0c-2.31 0-4.2 1.89-4.2 4.2v11.6c0 2.31 1.89 4.2 4.2 4.2h18.1c2.31 0 4.2-1.89 4.2-4.2v-11.6c0-2.31-1.89-4.2-4.2-4.2zm0 1.89h18.1c1.29 0 2.3 1.01 2.3 2.3v11.6c0 1.29-1.01 2.31-2.3 2.31h-18.1c-1.29 0-2.3-1.01-2.3-2.31v-11.6c0-1.29 1.01-2.3 2.3-2.3z"/><path fill="currentColor" d="m12.5 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path fill="currentColor" d="m19.7 15-0.74-2.56h-3.18l-0.74 2.56h-1.75l3.04-10h2.06l3.03 10zm-1.13-4.13-0.823-2.88-0.379-1.46q-0.0947 0.412-0.178 0.739-0.0829 0.327-1.02 3.59z"/>`,
  dOIcon: V`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m12.1 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path d="m21.6 9.97q0 1.56-0.515 2.75-0.515 1.19-1.47 1.82-0.959 0.625-2.24 0.625-1.97 0-3.08-1.39-1.11-1.39-1.11-3.81 0-2.41 1.11-3.76t3.1-1.35 3.1 1.36q1.12 1.36 1.12 3.74zm-1.78 0q0-1.62-0.639-2.54-0.639-0.923-1.79-0.923-1.17 0-1.81 0.916-0.639 0.909-0.639 2.54 0 1.65 0.651 2.6 0.657 0.945 1.79 0.945 1.17 0 1.81-0.923 0.639-0.923 0.639-2.62z"/>`,
  enumIcon: V`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m5.37 15v-10h6.56v1.62h-4.81v2.51h4.45v1.62h-4.45v2.64h5.06v1.62z"/><path d="m18.5 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  info: V`<path d="M0 0h24v24H0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"></path>`,
  warning: V`<path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="currentColor"></path>`,
  error: V`<path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z" fill="currentColor"></path><path d="M11 7h2v7h-2z" fill="currentColor"></path><circle cx="12" cy="16" r="1" fill="currentColor"></circle>`,
  gooseIcon: V`<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  lNIcon: V`<path stroke="currentColor" stroke-width="1.89" fill="none" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path fill="currentColor" d="m5.71 15v-10h1.75v8.39h4.47v1.62z"/><path fill="currentColor" d="m18.2 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  logIcon: V`<path fill="currentColor" d="M9,7H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  reportIcon: V`<path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,16.41 7.58,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  smvIcon: V`<path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`
};
V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${ii.gooseIcon}</svg>`;
V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${ii.reportIcon}</svg>`;
V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${ii.smvIcon}</svg>`;
V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${ii.logIcon}</svg>`;
V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z" />
</svg>`;
V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M21,14V4H3V14H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M4,5H15V10H4V5M16,5H20V7H16V5M20,8V13H16V8H20M4,11H9V13H4V11M10,11H15V13H10V11Z" />
</svg>`;
V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4,1C2.89,1 2,1.89 2,3V7C2,8.11 2.89,9 4,9H1V11H13V9H10C11.11,9 12,8.11 12,7V3C12,1.89 11.11,1 10,1H4M4,3H10V7H4V3M14,13C12.89,13 12,13.89 12,15V19C12,20.11 12.89,21 14,21H11V23H23V21H20C21.11,21 22,20.11 22,19V15C22,13.89 21.11,13 20,13H14M3.88,13.46L2.46,14.88L4.59,17L2.46,19.12L3.88,20.54L6,18.41L8.12,20.54L9.54,19.12L7.41,17L9.54,14.88L8.12,13.46L6,15.59L3.88,13.46M14,15H20V19H14V15Z" />
</svg>`;
const Zr = {
  dAIcon: {
    width: 26.5,
    height: 24
  },
  dOIcon: {
    width: 26.5,
    height: 24
  },
  enumIcon: {
    width: 26.5,
    height: 24
  },
  lNIcon: {
    width: 26.5,
    height: 24
  }
};
Si("dAIcon"), Si("dOIcon"), Si("enumIcon"), Si("lNIcon");
function Si(e) {
  if (e === "reset") return p``;
  const t = Zr[e]?.height ?? 24, i = Zr[e]?.width ?? 24;
  return p`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 ${i} ${t}"
    width="${i}"
  >
    ${ii[e]}
  </svg> `;
}
p`<svg
  xmlns="http://www.w3.org/2000/svg"
  slot="icon"
  width="25px"
  height="25px"
  style="margin-bottom:0px;"
>
  <rect
    width="8"
    height="8"
    x="8.5"
    y="2"
    rx="1"
    ry="1"
    fill="transparent"
    stroke="currentColor"
    stroke-width="1.5"
  />
  <rect
    width="8"
    height="8"
    x="2.5"
    y="15"
    rx="1"
    ry="1"
    fill="transparent"
    stroke="currentColor"
    stroke-width="1.5"
  />
  <rect
    width="8"
    height="8"
    x="15"
    y="15"
    rx="1"
    ry="1"
    fill="transparent"
    stroke="currentColor"
    stroke-width="1.5"
  />

  <line
    x1="2"
    y1="12.5"
    x2="23"
    y2="12.5"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-width="1.5"
  />
  <line
    x1="12.5"
    y1="10"
    x2="12.5"
    y2="12.5"
    stroke="currentColor"
    stroke-width="1.5"
  />
  <line
    x1="6.5"
    y1="12.5"
    x2="6.5"
    y2="15"
    stroke="currentColor"
    stroke-width="1.5"
  />
  <line
    x1="19"
    y1="12.5"
    x2="19"
    y2="15"
    stroke="currentColor"
    stroke-width="1.5"
  />
</svg>`;
p`<svg
  xmlns="http://www.w3.org/2000/svg"
  slot="icon"
  viewBox="0 0 25 25"
>
  <path
    d="M 2 9 L 12.5 2 L 23 9 L 21 9 L 21 21 L 4 21 L 4 9 Z"
    fill="transparent"
    stroke="currentColor"
    stroke-width="2"
    stroke-linejoin="round"
  />
  <path
    d="M 11 7 L 17.5 7 L 13.5 11 L 16.5 11 L 10 19 L 11.5 13 L 8.5 13 Z "
    fill="currentColor"
  />
</svg>`;
p`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
      }

      .cls-1,
      .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: currentColor;
        opacity: 0;
      }
    </style>
  </defs>
  <path
    class="cls-1"
    d="M11.13,20.06L3.63,6.93c-.27-.48-.11-1.09.37-1.36h0c.48-.27,1.09-.11,1.36.37l6.64,11.61,6.64-11.61c.27-.48.88-.65,1.36-.37h0c.48.27.65.88.37,1.36l-7.5,13.13c-.38.67-1.35.67-1.74,0Z"
  />
  <rect class="cls-2" width="24" height="24" />
</svg>`;
p`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
        stroke-width: 0px;
      }
    </style>
  </defs>
  <path
    class="cls-1"
    d="M7.75,8c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5h-1.25c0,.84.52,1.55,1.25,1.85v8.65h1.5v-8.65c.73-.3,1.25-1.01,1.25-1.85h-1.25v-1.5Z"
  />
  <path
    class="cls-1"
    d="M12.75,8c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5h-1.25c0,.84.52,1.55,1.25,1.85v8.65h1.5v-8.65c.73-.3,1.25-1.01,1.25-1.85h-1.25v-1.5Z"
  />
  <path
    class="cls-1"
    d="M17.75,8c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5h-1.25c0,.84.52,1.55,1.25,1.85v8.65h1.5v-8.65c.73-.3,1.25-1.01,1.25-1.85h-1.25v-1.5Z"
  />
  <path
    class="cls-1"
    d="M20,4H4c-1.1,0-2,.9-2,2v4c0,1.1.9,2,2,2v-6h16v6c1.1,0,2-.9,2-2v-4c0-1.1-.9-2-2-2Z"
  />
</svg>`;
const am = p`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
      }

      .cls-1,
      .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: #fff;
        opacity: 0;
      }
    </style>
  </defs>
  <g>
    <path
      class="cls-1"
      d="M12.71,15.29l-6.79-6.79c-.39-.39-1.02-.39-1.41,0-.39.39-.39,1.02,0,1.41l6.5,6.5v4.59c0,.55.45,1,1,1s1-.45,1-1v-5c0-.13-.03-.26-.08-.38-.05-.12-.12-.23-.22-.33Z"
    />
    <path
      class="cls-1"
      d="M14,6h-1v-3c0-.55-.45-1-1-1s-1,.45-1,1v3h-1c-.55,0-1,.45-1,1s.45,1,1,1h4c.55,0,1-.45,1-1s-.45-1-1-1Z"
    />
  </g>
  <rect class="cls-2" width="24" height="24" />
</svg>`, om = p`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
      }

      .cls-1,
      .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: #fff;
        opacity: 0;
      }
    </style>
  </defs>
  <g>
    <path
      class="cls-1"
      d="M12.71,15.29l-6.79-6.79c-.39-.39-1.02-.39-1.41,0-.39.39-.39,1.02,0,1.41l6.5,6.5v4.59c0,.55.45,1,1,1s1-.45,1-1v-5c0-.13-.03-.26-.08-.38-.05-.12-.12-.23-.22-.33Z"
    />
    <path
      class="cls-1"
      d="M13.41,7l1.29-1.29c.39-.39.39-1.02,0-1.41s-1.02-.39-1.41,0l-1.29,1.29-1.29-1.29c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41l1.29,1.29-1.29,1.29c-.39.39-.39,1.02,0,1.41.2.2.45.29.71.29s.51-.1.71-.29l1.29-1.29,1.29,1.29c.2.2.45.29.71.29s.51-.1.71-.29c.39-.39.39-1.02,0-1.41l-1.29-1.29Z"
    />
  </g>
  <rect class="cls-2" width="24" height="24" />
</svg>`, sm = p`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
      }

      .cls-1,
      .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: #fff;
        opacity: 0;
      }
    </style>
  </defs>
  <path
    class="cls-1"
    d="M19,12c0-3.53-2.61-6.43-6-6.92v-2.08c0-.55-.45-1-1-1s-1,.45-1,1v2.08c-3.39.49-6,3.39-6,6.92s2.61,6.43,6,6.92v2.08c0,.55.45,1,1,1s1-.45,1-1v-2.08c3.39-.49,6-3.39,6-6.92ZM7,12c0-2.42,1.72-4.44,4-4.9v9.8c-2.28-.46-4-2.48-4-4.9ZM13,16.9V7.1c2.28.46,4,2.48,4,4.9s-1.72,4.44-4,4.9Z"
  />
  <rect class="cls-2" width="24" height="24" />
</svg>`, cm = p`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
      }

      .cls-1,
      .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: #fff;
        opacity: 0;
      }
    </style>
  </defs>
  <path
    class="cls-1"
    d="M17,10c0-2.42-1.72-4.44-4-4.9v-2.1s0-1-1-1-1,1-1,1v2.1c-2.28.46-4,2.48-4,4.9,0,.71.15,1.39.42,2-.27.61-.42,1.29-.42,2,0,2.42,1.72,4.44,4,4.9v1.1h-1c-.55,0-1,.45-1,1s.45,1,1,1h4c.55,0,1-.45,1-1s-.45-1-1-1h-1v-1.1c2.28-.46,4-2.48,4-4.9,0-.71-.15-1.39-.42-2,.27-.61.42-1.29.42-2ZM12,7c1.66,0,3,1.34,3,3,0,0,0,.01,0,.02-.84-.63-1.87-1.02-3-1.02s-2.16.39-3,1.02c0,0,0-.01,0-.02,0-1.66,1.34-3,3-3ZM14.22,12c-.55.61-1.34,1-2.22,1s-1.67-.39-2.22-1c.55-.61,1.34-1,2.22-1s1.67.39,2.22,1ZM12,17c-1.66,0-3-1.34-3-3,0,0,0-.01,0-.02.84.63,1.87,1.02,3,1.02s2.16-.39,3-1.02c0,0,0,.01,0,.02,0,1.66-1.34,3-3,3Z"
  />
  <rect class="cls-2" width="24" height="24" />
</svg>`, lm = p`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
      }

      .cls-1,
      .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: #fff;
        opacity: 0;
      }
    </style>
  </defs>
  <g>
    <path
      class="cls-1"
      d="M13,20h-2c-.55,0-1,.45-1,1s.45,1,1,1h2c.55,0,1-.45,1-1s-.45-1-1-1Z"
    />
    <path
      class="cls-1"
      d="M15,16h-2v-5c0-.13-.03-.26-.08-.38-.05-.12-.12-.23-.22-.33L5.91,3.5c-.39-.39-1.02-.39-1.41,0-.39.39-.39,1.02,0,1.41l6.5,6.5v4.59h-2c-.55,0-1,.45-1,1s.45,1,1,1h6c.55,0,1-.45,1-1s-.45-1-1-1Z"
    />
    <path
      class="cls-1"
      d="M10,4h4c.55,0,1-.45,1-1s-.45-1-1-1h-4c-.55,0-1,.45-1,1s.45,1,1,1Z"
    />
  </g>
  <rect class="cls-2" width="24" height="24" />
</svg>`, mo = p`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
        stroke-width: 0px;
      }
    </style>
  </defs>
  <path
    class="cls-1"
    d="M20.41,3.59c-.78-.78-2.05-.78-2.83,0-.59.59-.73,1.47-.43,2.19l-1.49,1.49c-1.02-.79-2.29-1.27-3.67-1.27-3.31,0-6,2.69-6,6,0,1.38.48,2.66,1.27,3.67l-1.49,1.49c-.73-.31-1.6-.17-2.19.43-.78.78-.78,2.05,0,2.83.78.78,2.05.78,2.83,0,.59-.59.73-1.47.43-2.19l1.49-1.49c1.02.79,2.29,1.27,3.67,1.27,3.31,0,6-2.69,6-6,0-1.38-.48-2.66-1.27-3.67l1.49-1.49c.73.31,1.6.17,2.19-.43.78-.78.78-2.05,0-2.83ZM12,16c-2.21,0-4-1.79-4-4s1.79-4,4-4,4,1.79,4,4-1.79,4-4,4Z"
  />
</svg>`, dm = p`<svg
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
    stroke="currentColor"
    fill="currentColor"
    stroke-width="1"
    cx="12.5"
    cy="12.5"
    r="5"
  />
</svg>`, um = p`<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 25 25"
>
  <line
    x1="12.5"
    y1="2"
    x2="12.5"
    y2="5"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <circle
    cx="12.5"
    cy="10"
    r="5"
    stroke="currentColor"
    fill="transparent"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <circle
    cx="12.5"
    cy="15"
    r="5"
    stroke="currentColor"
    fill="transparent"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <line
    x1="12.5"
    y1="20"
    x2="12.5"
    y2="23"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
</svg>`;
p` <svg
  xmlns="http://www.w3.org/2000/svg"
  style="width:100px;height:100px"
  viewBox="0 0 25 25"
>
  <path
    d="M 2 9 L 12.5 2 L 23 9 L 21 9 L 21 21 L 4 21 L 4 9 Z"
    fill="#eee8d5"
    stroke="#6c71c4"
    stroke-width="2"
    stroke-linejoin="round"
  />
  <path
    d="M 11 7 L 17.5 7 L 13.5 11 L 16.5 11 L 10 19 L 11.5 13 L 8.5 13 Z "
    fill="#2aa198"
  />
</svg>`;
V`
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
  </svg>`;
V`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
V`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<defs>
  <style>
    .cls-1 {
      fill: currentColor;
    }

    .cls-1, .cls-2 {
      stroke-width: 0px;
    }

    .cls-2 {
      fill: currentColor;
      opacity: 0;
    }
  </style>
</defs>
<g>
  <path class="cls-1" d="M19.3,7.94l-6-5.14c-.75-.64-1.85-.65-2.6,0l-6,5.14c-.44.38-.7.93-.7,1.52v9.54c0,1.1.9,2,2,2h12c1.1,0,2-.9,2-2v-9.54c0-.58-.25-1.14-.7-1.52ZM18,19H6v-9.54l6-5.14,6,5.14v9.54Z"/>
  <path class="cls-1" d="M11.57,7.74l-3,5c-.09.15-.09.35,0,.5.09.16.26.25.44.25h2v3.5c0,.22.15.42.37.48.04.01.09.02.13.02.17,0,.34-.09.43-.24l3-5c.09-.15.09-.35,0-.5-.09-.16-.26-.25-.44-.25h-2v-3.5c0-.22-.15-.42-.37-.48-.22-.06-.45.03-.56.22Z"/>
</g>
<rect class="cls-2" y="0" width="24" height="24"/>
</svg>`;
V`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<defs>
  <style>
    .cls-1 {
      fill: currentColor;
    }

    .cls-1, .cls-2 {
      stroke-width: 0px;
    }

    .cls-2 {
      fill: currentColor;
      opacity: 0;
    }
  </style>
</defs>
<path class="cls-1" d="M14.39,11.93l-1.39.58v-1.84l2.15-.89c.51-.21.75-.8.54-1.31-.21-.51-.8-.75-1.31-.54l-1.39.58V3c0-.55-.45-1-1-1s-1,.45-1,1v6.33l-2.15.89c-.51.21-.75.8-.54,1.31.21.51.8.75,1.31.54l1.39-.58v1.84l-2.15.89c-.51.21-.75.8-.54,1.31.21.51.8.75,1.31.54l1.39-.58v5.5c0,.55.45,1,1,1s1-.45,1-1v-6.33l2.15-.89c.51-.21.75-.8.54-1.31-.21-.51-.8-.75-1.31-.54Z"/>
<rect class="cls-2" width="24" height="24"/>
</svg>`;
V`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<defs>
  <style>
    .cls-1 {
      fill: currentColor;
    }

    .cls-1, .cls-2 {
      stroke-width: 0px;
    }

    .cls-2 {
      fill: currentColor;
      opacity: 0;
    }
  </style>
</defs>
<path class="cls-1" d="M18.71,15.29c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41l.29.29h-5.59c0-1.1-.9-2-2-2h-2c-1.01,0-1.84.76-1.97,1.74-.61-.34-1.03-.99-1.03-1.74,0-1.1.9-2,2-2h5c0,1.1.9,2,2,2h2c1.1,0,2-.9,2-2v-.14c1.72-.45,3-2,3-3.86,0-2.21-1.79-4-4-4h-5c0-1.1-.9-2-2-2h-2c-1.1,0-2,.9-2,2h-2c-.55,0-1,.45-1,1s.45,1,1,1h2c0,1.1.9,2,2,2h2c1.1,0,2-.9,2-2h5c1.1,0,2,.9,2,2,0,.75-.42,1.39-1.03,1.74-.13-.98-.96-1.74-1.97-1.74h-2c-1.1,0-2,.9-2,2h-5c-2.21,0-4,1.79-4,4,0,1.86,1.28,3.41,3,3.86v.14c0,1.1.9,2,2,2h2c1.1,0,2-.9,2-2h5.59l-.29.29c-.39.39-.39,1.02,0,1.41.2.2.45.29.71.29s.51-.1.71-.29l2-2c.39-.39.39-1.02,0-1.41l-2-2ZM8,7v-2h2v2s-2,0-2,0ZM14,11h2v2s-2,0-2,0v-2ZM8,19v-2h2v2s-2,0-2,0Z"/>
<rect class="cls-2" y="0" width="24" height="24"/>
</svg>`;
V`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<defs>
  <style>
    .cls-1 {
      fill: currentColor;
    }

    .cls-1, .cls-2 {
      stroke-width: 0px;
    }

    .cls-2 {
      fill: currentColor;
      opacity: 0;
    }
  </style>
</defs>
<g>
  <path class="cls-1" d="M19,20h-2c-1.21,0-2.18-1.09-1.97-2.34.16-.98,1.09-1.66,2.08-1.66h-.11c.55,0,1-.45,1-1s-.42-.96-.95-.99c.04,0,.08-.01.12-.01h-.17c-1.21,0-2.18-1.09-1.97-2.34.16-.98,1.09-1.66,2.08-1.66h-.11c.55,0,1-.45,1-1s-.42-.96-.95-.99c.04,0,.08-.01.12-.01h-.17c-1.21,0-2.18-1.09-1.97-2.34.16-.98,1.09-1.66,2.08-1.66h1.89c.55,0,1-.45,1-1s-.45-1-1-1h-1.83c-2.09,0-3.95,1.53-4.15,3.61-.13,1.37.44,2.59,1.38,3.41-.76.64-1.28,1.55-1.38,2.59-.13,1.37.44,2.59,1.38,3.41-.76.64-1.28,1.55-1.38,2.59-.23,2.39,1.64,4.39,3.98,4.39h2c.55,0,1-.45,1-1s-.45-1-1-1Z"/>
  <path class="cls-1" d="M10.98,6.39c.23-2.39-1.64-4.39-3.98-4.39h-2c-.55,0-1,.45-1,1s.45,1,1,1h2c1.21,0,2.18,1.09,1.97,2.34-.16.98-1.09,1.66-2.08,1.66h.11c-.55,0-1,.45-1,1s.42.96.95.99c-.04,0-.08.01-.12.01h.17c1.21,0,2.18,1.09,1.97,2.34-.16.98-1.09,1.66-2.08,1.66h.11c-.55,0-1,.45-1,1,0,.28.11.53.29.71.17.17.4.27.65.28h0s.03.01.05.01c1.21,0,2.18,1.09,1.97,2.34-.16.98-1.09,1.66-2.08,1.66h-1.89c-.55,0-1,.45-1,1s.45,1,1,1h1.83c2.09,0,3.95-1.53,4.15-3.61.13-1.37-.44-2.59-1.38-3.41.76-.64,1.28-1.55,1.38-2.59.13-1.37-.44-2.59-1.38-3.41.76-.64,1.28-1.55,1.38-2.59Z"/>
  <path class="cls-1" d="M6.83,16h.17s-.03,0-.05-.01c-.04,0-.08.01-.12.01Z"/>
</g>
<rect class="cls-2" width="24" height="24"/>
</svg>`;
var pm = Object.defineProperty, mm = Object.getOwnPropertyDescriptor, ht = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? mm(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && pm(t, i, r), r;
};
function hm(e) {
  return e ? ee[e.tagName].children.filter(
    (t) => fe[t].create !== s
  ) : [];
}
let Be = class extends $e {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const e = this.element.getAttribute("name") ?? "", t = this.element.getAttribute("desc");
    return this.showfunctions ? `${e} ${t ? `—  ${t}` : ""}` : `${e}`;
  }
  openEditWizard() {
    const e = fe.GeneralEquipment.edit(this.element);
    e && this.dispatchEvent(oe(e));
  }
  openCreateWizard(e) {
    const t = fe[e].create(this.element);
    t && this.dispatchEvent(oe(t));
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      Oe({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  renderLNodes() {
    const e = K(this.element, "LNode");
    return e.length ? p`<div class="container lnode">
          ${e.map(
      (t) => p`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : p``;
  }
  renderEqFunctions() {
    const e = K(this.element, "EqFunction");
    return e.length ? p`${e.map(
      (t) => p` <eq-function-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${t}
            ></eq-function-editor>`
    )}` : p``;
  }
  renderAddButtons() {
    return hm(this.element).map(
      (e) => p`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return this.showfunctions ? p`<action-pane label=${this.header}>
        <abbr slot="action" title="${l("edit")}">
          <mwc-icon-button
            icon="edit"
            @click=${() => this.openEditWizard()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${l("remove")}">
          <mwc-icon-button
            icon="delete"
            @click=${() => this.remove()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" style="position:relative;" title="${l("add")}">
          <mwc-icon-button
            icon="playlist_add"
            @click=${() => this.addMenu.open = !0}
          ></mwc-icon-button
          ><mwc-menu
            corner="BOTTOM_RIGHT"
            menuCorner="END"
            @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
            >${this.renderAddButtons()}</mwc-menu
          ></abbr
        >
        ${this.renderLNodes()} ${this.renderEqFunctions()}
      </action-pane>` : p`<action-icon label=${this.header}>
      <mwc-icon slot="icon">${mo}</mwc-icon>
      <mwc-fab
        slot="action"
        mini
        icon="edit"
        @click="${() => this.openEditWizard()}}"
      ></mwc-fab>
      <mwc-fab
        slot="action"
        mini
        icon="delete"
        @click="${() => this.remove()}}"
      ></mwc-fab>
    </action-icon>`;
  }
};
Be.styles = we`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }
    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
ht([
  y({ attribute: !1 })
], Be.prototype, "doc", 2);
ht([
  y({ type: Number })
], Be.prototype, "editCount", 2);
ht([
  y({ attribute: !1 })
], Be.prototype, "element", 2);
ht([
  y({ type: Boolean })
], Be.prototype, "showfunctions", 2);
ht([
  B()
], Be.prototype, "header", 1);
ht([
  Y("mwc-menu")
], Be.prototype, "addMenu", 2);
ht([
  Y('mwc-icon-button[icon="playlist_add"]')
], Be.prototype, "addButton", 2);
Be = ht([
  pe("general-equipment-editor")
], Be);
var fm = Object.defineProperty, bm = Object.getOwnPropertyDescriptor, ft = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? bm(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && fm(t, i, r), r;
};
function gm(e) {
  return e ? ee[e.tagName].children.filter(
    (t) => fe[t].create !== s
  ) : [];
}
let Ge = class extends $e {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const e = this.element.getAttribute("name"), t = this.element.getAttribute("desc"), i = this.element.getAttribute("type");
    return `${e}${t ? ` - ${t}` : ""}${i ? ` (${i})` : ""}`;
  }
  openEditWizard() {
    const e = fe.SubFunction.edit(this.element);
    e && this.dispatchEvent(oe(e));
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      Oe({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = fe[e].create(this.element);
    t && this.dispatchEvent(oe(t));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderLNodes() {
    const e = K(this.element, "LNode");
    return e.length ? p`<div class="container lnode">
          ${e.map(
      (t) => p`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : p``;
  }
  renderSubFunctions() {
    const e = K(this.element, "SubFunction");
    return p` ${e.map(
      (t) => p`<sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></sub-function-editor>`
    )}`;
  }
  renderAddButtons() {
    return gm(this.element).map(
      (e) => p`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return p`<action-pane label="${this.header}" icon="functions" secondary
      ><abbr slot="action" title="${l("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" title="${l("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${l("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        >
      </abbr>
      ${ki(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderSubFunctions()}</action-pane
    >`;
  }
};
Ge.styles = we`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
ft([
  y({ attribute: !1 })
], Ge.prototype, "doc", 2);
ft([
  y({ type: Number })
], Ge.prototype, "editCount", 2);
ft([
  y({ attribute: !1 })
], Ge.prototype, "element", 2);
ft([
  y({ type: Boolean })
], Ge.prototype, "showfunctions", 2);
ft([
  B()
], Ge.prototype, "header", 1);
ft([
  Y("mwc-menu")
], Ge.prototype, "addMenu", 2);
ft([
  Y('mwc-icon-button[icon="playlist_add"]')
], Ge.prototype, "addButton", 2);
Ge = ft([
  pe("sub-function-editor")
], Ge);
var ym = Object.defineProperty, vm = Object.getOwnPropertyDescriptor, bt = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? vm(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && ym(t, i, r), r;
};
function wm(e) {
  return e ? ee[e.tagName].children.filter(
    (t) => fe[t].create !== s
  ) : [];
}
let We = class extends $e {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const e = this.element.getAttribute("name"), t = this.element.getAttribute("desc"), i = this.element.getAttribute("type");
    return `${e}${t ? ` - ${t}` : ""}${i ? ` (${i})` : ""}`;
  }
  openEditWizard() {
    const e = fe.Function.edit(this.element);
    e && this.dispatchEvent(oe(e));
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      Oe({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = fe[e].create(this.element);
    t && this.dispatchEvent(oe(t));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderLNodes() {
    const e = K(this.element, "LNode");
    return e.length ? p`<div class="container lnode">
          ${e.map(
      (t) => p`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : p``;
  }
  renderSubFunctions() {
    const e = K(this.element, "SubFunction");
    return p` ${e.map(
      (t) => p`<sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></sub-function-editor>`
    )}`;
  }
  renderAddButtons() {
    return wm(this.element).map(
      (e) => p`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return p`<action-pane
      label="${this.header}"
      icon="functions"
      secondary
      highlighted
      ><abbr slot="action" title="${l("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" title="${l("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${l("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        >
      </abbr>
      ${ki(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderSubFunctions()}</action-pane
    >`;
  }
};
We.styles = we`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
bt([
  y({ attribute: !1 })
], We.prototype, "doc", 2);
bt([
  y({ type: Number })
], We.prototype, "editCount", 2);
bt([
  y({ attribute: !1 })
], We.prototype, "element", 2);
bt([
  y({ type: Boolean })
], We.prototype, "showfunctions", 2);
bt([
  B()
], We.prototype, "header", 1);
bt([
  Y("mwc-menu")
], We.prototype, "addMenu", 2);
bt([
  Y('mwc-icon-button[icon="playlist_add"]')
], We.prototype, "addButton", 2);
We = bt([
  pe("function-editor")
], We);
function Am(e) {
  return xm[Va(e)] ?? mo;
}
function ki(e, t, i) {
  const n = K(
    t,
    "GeneralEquipment"
  );
  return n.length ? p` <div
        class="${Vt({
    content: !0,
    actionicon: !i
  })}"
      >
        ${n.map(
    (r) => p`<general-equipment-editor
              .doc=${e}
              .element=${r}
              ?showfunctions=${i}
            ></general-equipment-editor>`
  )}
      </div>` : p``;
}
const xm = {
  CBR: om,
  DIS: am,
  CTR: sm,
  VTR: cm,
  ERS: lm
}, Sm = [
  ":root",
  "Substation",
  "VoltageLevel",
  "Bay",
  "ConductingEquipment"
];
Object.fromEntries(
  Sm.map((e, t, i) => [e, i.slice(0, t + 1).join(" > ")])
);
we`
  abbr {
    text-decoration: none;
    border-bottom: none;
  }

  .ptrContent.actionicon {
    display: grid;
    grid-gap: 12px;
    padding: 8px 12px 16px;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(64px, auto));
  }

  .content.actionicon {
    display: grid;
    grid-gap: 12px;
    padding: 8px 12px 16px;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(64px, auto));
  }

  #iedcontainer {
    display: grid;
    grid-gap: 12px;
    padding: 8px 12px 16px;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(64px, auto));
  }

  .container.lnode {
    display: grid;
    grid-gap: 12px;
    padding: 8px 12px 16px;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(64px, auto));
  }

  mwc-dialog {
    display: flex;
    flex-direction: column;
  }

  mwc-dialog > * {
    display: block;
    margin-top: 16px;
  }

  powertransformer-editor[showfunctions] {
    margin: 4px 8px 16px;
  }

  general-equipment-editor[showfunctions] {
    margin: 4px 8px 16px;
  }

  .substation-editor-icon {
    width: 24px;
    height: 24px;
  }
`;
const _t = "http://www.iec.ch/61850/2003/SCLcoordinates", Xr = 2;
function wn(e) {
  const t = e.getAttributeNS(_t, "x"), i = e.getAttributeNS(_t, "y");
  return {
    x: t ? parseInt(t) * Xr : 0,
    y: i ? parseInt(i) * Xr : 0
  };
}
function ni(e) {
  if (!e.parentElement || e.parentElement?.tagName === "SCL")
    return wn(e);
  const t = ni(e.parentElement), i = wn(e);
  return {
    x: t.x + i.x,
    y: t.y + i.y
  };
}
function Yr(e) {
  return e.children.length === 1 && e.children[0].tagName === "ConnectivityNode";
}
function Em(e) {
  const t = e?.closest("Substation");
  if (!t) return [];
  const i = Ei(e) ?? "", [n, r, a] = i.split("/");
  return Array.from(t.getElementsByTagName("Terminal")).filter(
    (o) => o.getAttribute("connectivityNode") === i && o.getAttribute("cNodeName") === St(e) && (!o.hasAttribute("substationName") || o.getAttribute("substationName") === n) && (!o.hasAttribute("voltageLevelName") || o.getAttribute("voltageLevelName") === r) && (!o.hasAttribute("bayName") || o.getAttribute("bayName") === a)
  );
}
function ho(e) {
  if (e.tagName != "ConnectivityNode") return { x: 0, y: 0 };
  const t = e.closest("Substation"), i = Ei(e);
  let n = 0, r = 0, a = 0, o = 0;
  return Array.from(
    t.querySelectorAll("ConductingEquipment, PowerTransformer")
  ).filter(
    (c) => c.querySelector(`Terminal[connectivityNode="${i}"]`) != null
  ).forEach((c) => {
    n++;
    const { x: d, y: u } = ni(c);
    c.parentElement === e.parentElement && (r++, a += d), o += u;
  }), n === 0 ? { x: 0, y: 0 } : n === 1 ? { x: a + 1, y: o + 1 } : {
    x: Math.round(a / r),
    y: Math.round(o / n)
  };
}
function Cm(e, t, i) {
  let n = e.parentElement;
  for (; n; ) {
    if (n.contains(t))
      return n;
    n = n.parentElement;
  }
  return i;
}
function Nm(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function Im(e, t) {
  if (e.path.length === 0) return !1;
  const i = e.point.x, n = e.path[e.path.length - 1].x, r = !(i - n), a = !(e.point.x - t.point.x);
  return r !== a;
}
function km(e) {
  return e.filter((t, i, n) => {
    if (i === 0 || i === n.length - 1) return !0;
    const r = n[i].x - n[i - 1].x !== 0 ? "horizontal" : "vertical", a = n[i + 1].x - n[i].x !== 0 ? "horizontal" : "vertical";
    return r !== a;
  });
}
function Dm(e, t, i) {
  const n = i.dist, a = Im(i, e) ? Math.pow(t + 1, 2) : 0;
  if (n + t + a < e.dist) {
    e.dist = n + t + a;
    const o = [...i.path];
    o.push(i.point), e.path = o;
  }
}
function $m(e) {
  let t = Number.MAX_SAFE_INTEGER, i = null;
  for (const n of e)
    n.dist < t && (t = n.dist, i = n);
  return i;
}
function Lm(e, t) {
  t.dist = 0;
  const i = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  for (n.add(t); n.size != 0; ) {
    const r = $m(n);
    n.delete(r);
    for (const a of r.adjacent) {
      const o = e.find(
        (d) => d.point.x === a.point.x && d.point.y === a.point.y
      ), c = a.edgeWeight;
      o && !i.has(o) && (Dm(o, c, r), n.add(o));
    }
    i.add(r);
  }
  return [];
}
function fo(e, t) {
  const i = e.map(
    (a) => Math.abs(t.x - a.point.x) + Math.abs(t.y - a.point.y)
  ), n = Math.min(...i), r = i.indexOf(n);
  return e[r];
}
function zm(e, t) {
  const i = fo(e, t)?.point;
  if (!i) return;
  const n = {
    point: t,
    adjacent: [
      { point: i, edgeWeight: Nm(t, i) }
    ],
    dist: Number.MAX_SAFE_INTEGER,
    path: []
  };
  return e.push(n), n;
}
function Tm(e, t, i) {
  const n = zm(e, t), r = fo(e, i);
  if (!n || !r) return [];
  Lm(e, n);
  const a = r.path.concat(r.point);
  return km(a).concat([i]);
}
function Qr(e, t, i) {
  return e.find((n) => n.point.x === t && n.point.y === i);
}
function _m(e, t, i, n) {
  let r, a;
  return n === "prevX" ? (r = t.point.x - i, a = t.point.y) : n === "prevY" ? (r = t.point.x, a = t.point.y - i) : n === "nextX" ? (r = t.point.x + i, a = t.point.y) : (r = t.point.x, a = t.point.y + i), Qr(e, r, a) ? {
    point: Qr(e, r, a).point,
    edgeWeight: i
  } : null;
}
function Vm(e, t) {
  const i = [];
  for (let n = 0; n < e.length; n++)
    for (let r = 0; r < e[n].length; r++)
      e[n][r] === 0 && i.push({
        point: {
          x: r * t + t / 2,
          y: n * t + t / 2
        },
        adjacent: [],
        dist: Number.MAX_SAFE_INTEGER,
        path: []
      });
  for (const n of i) {
    const r = ["prevX", "prevY", "nextX", "nextY"].map((a) => _m(i, n, t, a)).filter((a) => a);
    n.adjacent = r;
  }
  return i;
}
function Pm(e, t, i) {
  const n = e.x > t.x ? e.x : t.x, r = e.y > t.y ? e.y : t.y, a = [];
  for (let o = 0; o <= Math.ceil(r / i) + 1; o++) {
    a[o] = [];
    for (let c = 0; c <= Math.ceil(n / i) + 1; c++)
      a[o][c] = 0;
  }
  return a[Math.floor(e.y / i)][Math.floor(e.x / i)] = 1, a[Math.floor(t.y / i)][Math.floor(t.x / i)] = 1, a;
}
function Mm(e, t, i) {
  const n = Math.min(
    Math.floor(e.x / i),
    Math.floor(t.x / i)
  ), r = Math.min(
    Math.floor(e.y / i),
    Math.floor(t.y / i)
  ), a = n > 1 ? n - 1 : 0, o = r > 1 ? r - 1 : 0, c = a * i, d = o * i;
  return [
    { x: e.x - c, y: e.y - d },
    { x: t.x - c, y: t.y - d }
  ];
}
function Rm(e, t, i, n, r) {
  if (t === n && i === r) return e;
  const a = t.x - n.x, o = t.y - n.y;
  return e.map((c) => ({ x: c.x + a, y: c.y + o }));
}
function Om(e, t, i, n) {
  if (e.x === t.x && e.y === t.y) return [];
  let r = e, a = t;
  n || ([r, a] = Mm(e, t, i), n = Pm(r, a, i));
  const o = Vm(n, i), c = Tm(o, r, a);
  return Rm(c, e, t, r, a);
}
const Ve = 64, ei = 50, An = 25, Fm = 6;
function ri(e) {
  const t = ni(e);
  return {
    x: t.x * Ve + (Ve - ei) / 2,
    y: t.y * Ve + (Ve - ei) / 2
  };
}
function bo(e) {
  const t = ni(e);
  return {
    x: t.x * Ve,
    y: t.y * Ve
  };
}
function go(e) {
  const t = ho(e);
  return {
    x: t.x * Ve + (Ve - An) / 2,
    y: t.y * Ve + (Ve - An) / 2
  };
}
function yo(e, t, i, n) {
  const r = n ?? Fm;
  switch (i) {
    case "top": {
      const a = e.x, o = e.y;
      return {
        x: a + t / 2,
        y: o - r
      };
    }
    case "bottom": {
      const a = e.x, o = e.y;
      return {
        x: a + t / 2,
        y: o + (t + r)
      };
    }
    case "left": {
      const a = e.x, o = e.y;
      return {
        x: a - r,
        y: o + t / 2
      };
    }
    case "right": {
      const a = e.x, o = e.y;
      return {
        x: a + (t + r),
        y: o + t / 2
      };
    }
    default:
      return e;
  }
}
function xn(e, t) {
  const i = ri(e);
  return yo(
    i,
    ei,
    t
  );
}
function qm(e, t) {
  const i = go(e);
  return yo(
    i,
    An,
    t,
    -8.333333333333334
  );
}
function gt(e) {
  const t = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "g"
  );
  t.setAttribute(
    "id",
    typeof P(e) == "string" ? P(e) : "unidentifiable"
  ), t.setAttribute("type", e.tagName);
  const i = mn(e);
  i && t.setAttribute("desc", i);
  const n = wn(e);
  return t.setAttribute("sxy:x", `${n.x}`), t.setAttribute("sxy:y", `${n.y}`), t;
}
function Hm(e) {
  return gt(e);
}
function Bm(e) {
  return gt(e);
}
function Gm(e) {
  return gt(e);
}
function Wm(e, t, i) {
  e.querySelectorAll(`g[id="${P(t)}"]`).forEach((n) => {
    const r = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g"
    );
    r.setAttribute("type", "BayLabel"), i && r.addEventListener("click", i), n.prepend(r);
    const a = n.getBBox(), o = Di(
      t.getAttribute("name") || "",
      { x: a.x, y: a.y - 20 },
      "medium"
    );
    r.append(o);
    const c = o.getBBox();
    new DOMParser().parseFromString(
      po.strings[0],
      "application/xml"
    ).querySelectorAll("circle,path,line").forEach((u) => {
      u.setAttribute(
        "transform",
        `translate(${c.x + c.width + 5},${c.y}) scale(0.75)`
      ), r.append(u);
    });
  });
}
function Di(e, t, i) {
  const n = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );
  return n.textContent = e, n.setAttribute(
    "style",
    `font-family: Roboto, sans-serif; font-weight: 300; font-size: ${i}`
  ), n.setAttribute("x", `${t.x}`), n.setAttribute("y", `${t.y}`), n;
}
function Jr(e, t, i) {
  const n = gt(e), r = typeof P(e) == "string" ? P(e) : "unidentifiable", a = e.closest(
    "ConductingEquipment, PowerTransformer"
  ), o = xn(
    a,
    t
  ), c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  return c.setAttribute("id", `${r}`), c.setAttribute("cx", `${o.x}`), c.setAttribute("cy", `${o.y}`), c.setAttribute("r", "2"), n.appendChild(c), i && n.addEventListener("click", i), n;
}
function jm(e, t) {
  const i = gt(e);
  i.setAttribute("type", "Busbar");
  const n = bo(e), r = document.createElementNS("http://www.w3.org/2000/svg", "line");
  return r.setAttribute("name", St(e)), r.setAttribute("stroke-width", "4"), r.setAttribute("stroke", "currentColor"), r.setAttribute("x1", `${n.x}`), r.setAttribute("y1", `${n.y}`), r.setAttribute("x2", `${t}`), r.setAttribute("y2", `${n.y}`), i.appendChild(r), i;
}
function Um(e, t, i) {
  e.querySelectorAll(`g[id="${P(t)}"]`).forEach((n) => {
    const r = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g"
    );
    r.setAttribute("type", "BusbarLabel"), i && r.addEventListener("click", i), n.prepend(r);
    const a = n.getBBox(), o = Di(
      t.getAttribute("name") || "",
      { x: a.x, y: a.y - 20 },
      "medium"
    );
    r.append(o);
    const c = o.getBBox();
    new DOMParser().parseFromString(
      po.strings[0],
      "application/xml"
    ).querySelectorAll("circle,path,line").forEach((u) => {
      u.setAttribute(
        "transform",
        `translate(${c.x + c.width + 5},${c.y}) scale(0.75)`
      ), r.append(u);
    });
  });
}
function Km(e, t) {
  const i = gt(e), n = ri(e);
  new DOMParser().parseFromString(
    Am(e).strings[0],
    "application/xml"
  ).querySelectorAll("circle,path,line").forEach((o) => {
    o.setAttribute(
      "transform",
      `translate(${n.x},${n.y}) scale(${ei / 25})`
    ), i.appendChild(o);
  });
  const a = Di(
    St(e),
    { x: n.x - 15, y: n.y + 30 },
    "x-small"
  );
  return i.appendChild(a), t && i.addEventListener("click", t), i;
}
function Zm(e, t) {
  const i = gt(e), n = ri(e);
  new DOMParser().parseFromString(
    um.strings[0],
    "application/xml"
  ).querySelectorAll("circle,path,line").forEach((o) => {
    o.setAttribute(
      "transform",
      `translate(${n.x},${n.y}) scale(${ei / 25})`
    ), i.appendChild(o);
  });
  const a = Di(
    St(e),
    { x: n.x - 15, y: n.y + 30 },
    "x-small"
  );
  return i.appendChild(a), t && i.addEventListener("click", t), i;
}
function Xm(e, t) {
  const i = gt(e), n = new DOMParser().parseFromString(
    dm.strings[0],
    "application/xml"
  ), r = go(e);
  return n.querySelectorAll("circle").forEach((a) => {
    a.setAttribute(
      "transform",
      `translate(${r.x},${r.y})`
    ), i.appendChild(a);
  }), t && i.addEventListener("click", t), i;
}
function Ym(e, t, i) {
  const n = Om(
    t,
    e,
    Ve
  ), r = document.createElementNS("http://www.w3.org/2000/svg", "path");
  let a = "";
  n.forEach(({ x: o, y: c }, d) => {
    d === 0 ? a = a + ` M ${o} ${c}` : a = a + ` L ${o} ${c}`;
  }), r.setAttribute("d", a), r.setAttribute("fill", "transparent"), r.setAttribute("stroke", "currentColor"), r.setAttribute("stroke-width", "1"), i.insertAdjacentElement("afterbegin", r);
}
function Qm(e, t, i) {
  const n = [e].concat([t]), r = document.createElementNS("http://www.w3.org/2000/svg", "path");
  let a = "";
  n.forEach(({ x: o, y: c }, d) => {
    d === 0 ? a = a + ` M ${o} ${c}` : a = a + ` L ${o} ${c}`;
  }), r.setAttribute("d", a), r.setAttribute("fill", "transparent"), r.setAttribute("stroke", "currentColor"), r.setAttribute("stroke-width", "1.5"), i.appendChild(r);
}
function Jm(e, t) {
  const i = ni(e), n = ho(t);
  return i.y < n.y && i.x < n.x ? { startDirection: "bottom", endDirection: "left" } : i.y < n.y && i.x > n.x ? { startDirection: "bottom", endDirection: "right" } : i.y < n.y && i.x === n.x ? { startDirection: "bottom", endDirection: "top" } : i.y > n.y && i.x < n.x ? { startDirection: "top", endDirection: "left" } : i.y > n.y && i.x > n.x ? { startDirection: "top", endDirection: "right" } : i.y > n.y && i.x === n.x ? { startDirection: "top", endDirection: "bottom" } : i.y === n.y && i.x > n.x ? { startDirection: "left", endDirection: "right" } : i.y === n.y && i.x < n.x ? { startDirection: "right", endDirection: "left" } : { startDirection: "bottom", endDirection: "top" };
}
function eh(e) {
  return Math.max(
    ...Array.from(
      e.querySelectorAll("ConductingEquipment, PowerTransformer")
    ).map((t) => ri(t).x)
  ) + Ve;
}
function $i(e) {
  return e.getAttribute("name");
}
function Li(e) {
  return e.getAttribute("desc");
}
function zi(e) {
  return e.getAttributeNS(_t, "x");
}
function Ti(e) {
  return e.getAttributeNS(_t, "y");
}
function ea(e) {
  if (e === null)
    return e;
  let t = Number(e);
  return (isNaN(t) || t < 0) && (t = 0), t.toString();
}
function ta(e, t, i) {
  i === null ? e.removeAttributeNS(_t, t) : e.setAttributeNS(_t, t, i);
}
function Mn(e) {
  return (t) => {
    const i = g(t.find((c) => c.label === "name")), n = g(t.find((c) => c.label === "desc")), r = g(t.find((c) => c.label === "xCoordinate")), a = g(t.find((c) => c.label === "yCoordinate"));
    if (i === $i(e) && n === Li(e) && r === zi(e) && a === Ti(e))
      return [];
    const o = U(e, { name: i, desc: n });
    return ta(o, "x", ea(r)), ta(o, "y", ea(a)), [{ old: { element: e }, new: { element: o } }];
  };
}
function Rn(e, t) {
  return [
    p`<wizard-textfield
      label="xCoordinate"
      nullable
      .maybeValue=${e}
      helper="${l("sld.wizard.xCoordinateHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="yCoordinate"
      .maybeValue=${t}
      nullable
      helper="${l("sld.wizard.yCoordinateHelper")}"
    ></wizard-textfield>`
  ];
}
function th(e, t, i, n) {
  return Dn(e, t).concat(
    Rn(i, n)
  );
}
function ih(e) {
  return [
    {
      title: l("bay.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: Mn(e)
      },
      content: th(
        $i(e),
        Li(e),
        zi(e),
        Ti(e)
      )
    }
  ];
}
function nh(e, t, i, n, r, a, o) {
  return $n(
    e,
    t,
    r,
    a,
    o
  ).concat(Rn(i, n));
}
function rh(e) {
  const t = Ln(
    e.parentNode,
    e.getAttribute("name")
  );
  return [
    {
      title: l("conductingequipment.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: Mn(e)
      },
      content: nh(
        $i(e),
        Li(e),
        zi(e),
        Ti(e),
        "edit",
        Pa(e),
        t
      )
    }
  ];
}
function ah(e, t, i, n, r, a) {
  return Vn(e, t, i, a).concat(
    Rn(n, r)
  );
}
function oh(e) {
  return [
    {
      title: l("powertransformer.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: Mn(e)
      },
      content: ah(
        $i(e),
        Li(e),
        e.getAttribute("type"),
        zi(e),
        Ti(e),
        Pn(e)
      )
    }
  ];
}
const sh = {
  AccessControl: {
    edit: s,
    create: s
  },
  AccessPoint: {
    edit: s,
    create: s
  },
  Address: {
    edit: s,
    create: s
  },
  Association: {
    edit: s,
    create: s
  },
  Authentication: {
    edit: s,
    create: s
  },
  BDA: {
    edit: s,
    create: s
  },
  BitRate: {
    edit: s,
    create: s
  },
  Bay: {
    edit: ih,
    create: s
  },
  ClientLN: {
    edit: s,
    create: s
  },
  ClientServices: {
    edit: s,
    create: s
  },
  CommProt: {
    edit: s,
    create: s
  },
  Communication: {
    edit: s,
    create: s
  },
  ConductingEquipment: {
    edit: rh,
    create: s
  },
  ConfDataSet: {
    edit: s,
    create: s
  },
  ConfLdName: {
    edit: s,
    create: s
  },
  ConfLNs: {
    edit: s,
    create: s
  },
  ConfLogControl: {
    edit: s,
    create: s
  },
  ConfReportControl: {
    edit: s,
    create: s
  },
  ConfSG: {
    edit: s,
    create: s
  },
  ConfSigRef: {
    edit: s,
    create: s
  },
  ConnectedAP: {
    edit: s,
    create: s
  },
  ConnectivityNode: {
    edit: Ma,
    create: s
  },
  DA: {
    edit: s,
    create: s
  },
  DAI: {
    edit: s,
    create: s
  },
  DAType: {
    edit: s,
    create: s
  },
  DO: {
    edit: s,
    create: s
  },
  DOI: {
    edit: s,
    create: s
  },
  DOType: {
    edit: s,
    create: s
  },
  DataObjectDirectory: {
    edit: s,
    create: s
  },
  DataSet: {
    edit: s,
    create: s
  },
  DataSetDirectory: {
    edit: s,
    create: s
  },
  DataTypeTemplates: {
    edit: s,
    create: s
  },
  DynAssociation: {
    edit: s,
    create: s
  },
  DynDataSet: {
    edit: s,
    create: s
  },
  EnumType: {
    edit: s,
    create: s
  },
  EnumVal: {
    edit: s,
    create: s
  },
  EqFunction: {
    edit: s,
    create: s
  },
  EqSubFunction: {
    edit: s,
    create: s
  },
  ExtRef: {
    edit: s,
    create: s
  },
  FCDA: {
    edit: s,
    create: s
  },
  FileHandling: {
    edit: s,
    create: s
  },
  Function: {
    edit: s,
    create: s
  },
  GeneralEquipment: {
    edit: s,
    create: s
  },
  GetCBValues: {
    edit: s,
    create: s
  },
  GetDataObjectDefinition: {
    edit: s,
    create: s
  },
  GetDataSetValue: {
    edit: s,
    create: s
  },
  GetDirectory: {
    edit: s,
    create: s
  },
  GOOSE: {
    edit: s,
    create: s
  },
  GOOSESecurity: {
    edit: s,
    create: s
  },
  GSE: {
    edit: s,
    create: s
  },
  GSEDir: {
    edit: s,
    create: s
  },
  GSEControl: {
    edit: s,
    create: s
  },
  GSESettings: {
    edit: s,
    create: s
  },
  GSSE: {
    edit: s,
    create: s
  },
  Header: {
    edit: s,
    create: s
  },
  History: {
    edit: s,
    create: s
  },
  Hitem: {
    edit: s,
    create: s
  },
  IED: {
    edit: s,
    create: s
  },
  IEDName: {
    edit: s,
    create: s
  },
  Inputs: {
    edit: s,
    create: s
  },
  IssuerName: {
    edit: s,
    create: s
  },
  KDC: {
    edit: s,
    create: s
  },
  LDevice: {
    edit: s,
    create: s
  },
  LN: {
    edit: s,
    create: s
  },
  LN0: {
    edit: s,
    create: s
  },
  LNode: {
    edit: s,
    create: s
  },
  LNodeType: {
    edit: s,
    create: s
  },
  Line: {
    edit: s,
    create: s
  },
  Log: {
    edit: s,
    create: s
  },
  LogControl: {
    edit: s,
    create: s
  },
  LogSettings: {
    edit: s,
    create: s
  },
  MaxTime: {
    edit: s,
    create: s
  },
  McSecurity: {
    edit: s,
    create: s
  },
  MinTime: {
    edit: s,
    create: s
  },
  NeutralPoint: {
    edit: s,
    create: s
  },
  OptFields: {
    edit: s,
    create: s
  },
  P: {
    edit: s,
    create: s
  },
  PhysConn: {
    edit: s,
    create: s
  },
  PowerTransformer: {
    edit: oh,
    create: s
  },
  Private: {
    edit: s,
    create: s
  },
  Process: {
    edit: s,
    create: s
  },
  ProtNs: {
    edit: s,
    create: s
  },
  Protocol: {
    edit: s,
    create: s
  },
  ReadWrite: {
    edit: s,
    create: s
  },
  RedProt: {
    edit: s,
    create: s
  },
  ReportControl: {
    edit: s,
    create: s
  },
  ReportSettings: {
    edit: s,
    create: s
  },
  RptEnabled: {
    edit: s,
    create: s
  },
  SamplesPerSec: {
    edit: s,
    create: s
  },
  SampledValueControl: {
    edit: s,
    create: s
  },
  SecPerSamples: {
    edit: s,
    create: s
  },
  SCL: {
    edit: s,
    create: s
  },
  SDI: {
    edit: s,
    create: s
  },
  SDO: {
    edit: s,
    create: s
  },
  Server: {
    edit: s,
    create: s
  },
  ServerAt: {
    edit: s,
    create: s
  },
  Services: {
    edit: s,
    create: s
  },
  SetDataSetValue: {
    edit: s,
    create: s
  },
  SettingControl: {
    edit: s,
    create: s
  },
  SettingGroups: {
    edit: s,
    create: s
  },
  SGEdit: {
    edit: s,
    create: s
  },
  SmpRate: {
    edit: s,
    create: s
  },
  SMV: {
    edit: s,
    create: s
  },
  SmvOpts: {
    edit: s,
    create: s
  },
  SMVsc: {
    edit: s,
    create: s
  },
  SMVSecurity: {
    edit: s,
    create: s
  },
  SMVSettings: {
    edit: s,
    create: s
  },
  SubEquipment: {
    edit: s,
    create: s
  },
  SubFunction: {
    edit: s,
    create: s
  },
  SubNetwork: {
    edit: s,
    create: s
  },
  Subject: {
    edit: s,
    create: s
  },
  Substation: {
    edit: s,
    create: s
  },
  SupSubscription: {
    edit: s,
    create: s
  },
  TapChanger: {
    edit: s,
    create: s
  },
  Terminal: {
    edit: Ka,
    create: s
  },
  Text: {
    edit: s,
    create: s
  },
  TimerActivatedControl: {
    edit: s,
    create: s
  },
  TimeSyncProt: {
    edit: s,
    create: s
  },
  TransformerWinding: {
    edit: s,
    create: s
  },
  TrgOps: {
    edit: s,
    create: s
  },
  Val: {
    edit: s,
    create: s
  },
  ValueHandling: {
    edit: s,
    create: s
  },
  Voltage: {
    edit: s,
    create: s
  },
  VoltageLevel: {
    edit: s,
    create: s
  }
};
var ch = Object.defineProperty, lh = Object.getOwnPropertyDescriptor, _i = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? lh(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && ch(t, i, r), r;
};
let Zt;
function dh() {
  Zt = void 0;
}
addEventListener("open-doc", dh);
class Vi extends $e {
  get substations() {
    return this.doc ? Array.from(this.doc.querySelectorAll(":root > Substation")).sort(
      (t, i) => Ca(t, i)
    ) : [];
  }
  set selectedSubstation(t) {
    Zt = t;
  }
  get selectedSubstation() {
    if (Zt === void 0) {
      const t = this.substations;
      t.length > 0 && (Zt = t[0]);
    }
    return Zt;
  }
  /**
   * Get all the Power Transformers from an element.
   */
  getPowerTransformers(t) {
    return Array.from(
      t.querySelectorAll("PowerTransformer")
    ).filter(At);
  }
  /**
   * Get all the Voltage Levels from the substation.
   */
  getVoltageLevels(t) {
    return Array.from(
      t.querySelectorAll("VoltageLevel")
    ).filter(At);
  }
  /**
   * Get all the BusBars from the voltage level.
   */
  getBusBars(t) {
    return Array.from(t.querySelectorAll("Bay")).filter(At).filter((i) => Yr(i));
  }
  /**
   * Get all the bays from the voltage level.
   */
  getBays(t) {
    return Array.from(t.querySelectorAll("Bay")).filter(At).filter((i) => !Yr(i));
  }
  /**
   * Get all the Conducting Equipment from a Bay.
   * @param bayElement - The Bay to search in.
   */
  getConductingEquipments(t) {
    return Array.from(
      t.querySelectorAll("ConductingEquipment")
    ).filter(At);
  }
  /**
   * Get all the Connectivity Nodes from a Bay/Busbar.
   * @param bayElement - The Bay/Busbar to search in.
   */
  getConnectivityNode(t) {
    return Array.from(t.querySelectorAll("ConnectivityNode")).filter(At).filter((i) => i.getAttribute("name") !== "grounded");
  }
  /**
   * Search for Equipment (ConductionEquipment or PowerTransformer) which has a terminal wth a connectivityNode
   * tha is the same as the passed pathName.
   * @param parentElement - The Element to search in for Equipment.
   * @param pathName      - The PathName to search for in the Terminal.
   */
  findEquipment(t, i) {
    return Array.from(
      t.querySelectorAll("ConductingEquipment, PowerTransformer")
    ).filter(At).filter(
      (n) => n.querySelector(`Terminal[connectivityNode="${i}"]`)
    );
  }
  /**
   * Draw all equipment and connections of the selected Substation.
   */
  drawSubstation(t) {
    const i = Hm(t);
    this.svg.appendChild(i), this.drawPowerTransformers(t, i), this.drawVoltageLevels(t, i);
  }
  /**
   * Draw all available `PowerTransformer`s of passed parent element.
   * Should only be a <g> element.
   * @param parentElement - The parent element to search for PowerTransformers.
   * @param parentGroup   - The SVG Group to which to add the PowerTransformer.
   */
  drawPowerTransformers(t, i) {
    this.getPowerTransformers(t).forEach(
      (n) => this.drawPowerTransformer(i, n)
    );
  }
  /**
   * Draw an SVG from the passed PowerTransformer Element.
   * Should only be a <g> element.
   * @param parentGroup             - The SVG Group to which to add the PowerTransformer.
   * @param powerTransformerElement - The PowerTransformer to draw.
   */
  drawPowerTransformer(t, i) {
    const n = Zm(
      i,
      (r) => this.openEditWizard(r, i)
    );
    t.appendChild(n);
  }
  /**
   * Draw all available Voltage Levels of the passed Substation Element.
   * Should only be a <g> element.
   *  @param substationElement - The substation containing the voltage levels.
   *  @param substationGroup   - The group to which to add the SVGs.
   */
  drawVoltageLevels(t, i) {
    this.getVoltageLevels(t).forEach((n) => {
      const r = Bm(n);
      i.appendChild(r), this.drawPowerTransformers(n, r), this.drawBays(n, r), this.drawBusBars(n, r);
    }), this.getVoltageLevels(t).forEach((n) => {
      this.getBusBars(n).forEach((r) => {
        this.drawBusBarConnections(t, this.svg, r), Um(
          this.svg,
          r,
          (a) => this.openEditWizard(a, r)
        );
      }), this.getBays(n).forEach((r) => {
        this.drawBayConnections(t, this.svg, r), Wm(
          this.svg,
          r,
          (a) => this.openEditWizard(a, r)
        );
      });
    });
  }
  /**
   * Draw all available Bays of the passed Voltage Level Element.
   * Should only be a <g> element.
   * @param voltageLevelElement - The Voltage Level containing the bays.
   * @param voltageLevelGroup   - The group to which to add the SVGs.
   * */
  drawBays(t, i) {
    this.getBays(t).forEach((n) => {
      const r = Gm(n);
      i.appendChild(r), this.drawPowerTransformers(n, r), this.drawConductingEquipments(n, r), this.drawConnectivityNodes(n, r);
    });
  }
  /**
   * Draw all available Conducting Equipments of the passed Bay Element.
   * Should only be a <g> element.
   * @param bayElement - The Bay containing the Conducting Equipment.
   * @param bayGroup   - The group to which to add the SVGs.
   */
  drawConductingEquipments(t, i) {
    this.getConductingEquipments(t).filter(
      (n) => Array.from(
        n.querySelectorAll("Terminal")
      ).filter(
        (r) => r.getAttribute("cNodeName") !== "grounded"
      ).length !== 0
    ).forEach((n) => {
      const r = Km(
        n,
        (a) => this.openEditWizard(a, n)
      );
      i.appendChild(r);
    });
  }
  /**
   * Draw all available Connectivity Nodes of the passed Bay Element.
   * @param bayElement - The Bay containing the Connectivity Nodes.
   * @param bayGroup   - The group to which to add the SVGs.
   * */
  drawConnectivityNodes(t, i) {
    this.getConnectivityNode(t).filter((n) => Em(n).length > 0).forEach((n) => {
      const r = Xm(
        n,
        (a) => this.openEditWizard(a, n)
      );
      i.appendChild(r);
    });
  }
  /**
   * Draw all connections between the different Equipment in the Bay and the Bay has with other Equipment outside
   * the bay.
   * @param rootElement - The Element containing all the other elements to which the Bay is connected.
   * @param rootGroup   - The SVG Element that contains all groups from the elements to add path to.
   * @param bayElement  - The Bay that holds the Connectivity Node to connect with.
   */
  drawBayConnections(t, i, n) {
    this.getConnectivityNode(n).forEach((r) => {
      this.findEquipment(t, Ei(r)).forEach(
        (a) => {
          const o = Cm(
            r,
            a,
            n
          ), c = Jm(a, r), d = xn(
            a,
            c.startDirection
          ), u = qm(
            r,
            c.endDirection
          );
          i.querySelectorAll(`g[id="${P(o)}"]`).forEach(
            (b) => Ym(
              u,
              d,
              b
            )
          );
          const m = a.querySelector(
            `Terminal[connectivityNode="${r.getAttribute("pathName")}"]`
          ), f = Jr(
            m,
            c.startDirection,
            (b) => this.openEditWizard(b, m)
          );
          i.querySelectorAll(`g[id="${P(a)}"]`).forEach((b) => b.appendChild(f));
        }
      );
    });
  }
  /**
   * Draw all available Busbars of the passed Voltage Level Element.
   * @param voltageLevelElement - The Voltage Level containing the Busbars.
   * @param voltageLevelGroup   - The group to which to add the SVGs.
   */
  drawBusBars(t, i) {
    this.getBusBars(t).forEach((n) => {
      const r = jm(
        n,
        eh(t)
      );
      i.appendChild(r);
    });
  }
  /**
   * Draw all the connections a Busbar has with other Equipment.
   * @param rootElement   - The Element containing all the other elements to which the Busbar is connected.
   * @param rootGroup     - The SVG Element that contains all groups from the elements to add path to.
   * @param busbarElement - The Busbar that holds the Connectivity Node to connect with.
   */
  drawBusBarConnections(t, i, n) {
    const r = Ei(n.children[0]), a = bo(n);
    this.findEquipment(t, r).forEach((o) => {
      const c = o.parentElement, d = ri(o), u = a.y < d.y ? "top" : "bottom", m = xn(
        o,
        u
      ), f = {
        x: m.x,
        y: a.y
      }, b = o.querySelector(
        `Terminal[connectivityNode="${r}"]`
      );
      i.querySelectorAll(`g[id="${P(c)}"]`).forEach(
        (S) => Qm(
          f,
          m,
          S
        )
      );
      const A = Jr(
        b,
        u,
        (S) => this.openEditWizard(S, b)
      );
      i.querySelectorAll(`g[id="${P(o)}"]`).forEach((S) => S.appendChild(A));
    });
  }
  /**
   * Remove all the child elements (and descendants) from the SVG Element, to have a clean start.
   */
  clearSVG() {
    for (; this.svg.firstChild; )
      this.svg.removeChild(this.svg.lastChild);
  }
  /**
   * Draw all the elements of the selected Substation.
   */
  drawSVGElements() {
    this.clearSVG();
    const t = this.selectedSubstation;
    if (t) {
      this.drawSubstation(t);
      const i = this.svg.getBBox();
      this.svg.setAttribute(
        "viewBox",
        i.x - 10 + " " + (i.y - 10) + " " + (i.width + 20) + " " + (i.height + 20)
      ), this.svg.setAttribute("width", i.width + 20 + "px"), this.svg.setAttribute("height", i.height + 20 + "px"), ms(this.panzoomContainer, {
        zoomSpeed: 0.2,
        maxZoom: 1.5,
        minZoom: 0.2,
        initialZoom: 0.5
      });
    }
  }
  /**
   * Open an Edit wizard for an element.
   * @param element - The element to show the wizard for.
   */
  openEditWizard(t, i) {
    const n = sh[i.tagName].edit(i);
    n && (this.dispatchEvent(oe(n)), t.stopPropagation());
  }
  updated(t) {
    super.updated(t), (t.has("doc") || t.has("selectedSubstation")) && this.drawSVGElements();
  }
  onSelect(t) {
    this.selectedSubstation = this.substations[t.detail.index], this.requestUpdate("selectedSubstation");
  }
  renderSubstationSelector() {
    const t = this.substations;
    if (t.length > 0) {
      if (t.length > 1)
        return p`
          <mwc-select
            id="substationSelector"
            label="${l("sld.substationSelector")}"
            @selected=${this.onSelect}
          >
            ${t.map((a) => {
          const o = St(a), c = mn(a);
          return p` <mwc-list-item
                value="${o}"
                ?selected=${a == this.selectedSubstation}
              >
                ${o}${c !== void 0 ? " (" + c + ")" : ""}
              </mwc-list-item>`;
        })}
          </mwc-select>
        `;
      const i = this.selectedSubstation, n = St(i), r = mn(i);
      return p`
        <mwc-textfield
          label="${l("substation.name")}"
          value="${n}${r !== void 0 ? " (" + r + ")" : ""}"
          id="selectedSubstation"
          readonly
          disabled
        >
        </mwc-textfield>
      `;
    }
    return p`
      <h1>
        <span id="noSubstationSelector">${l("substation.missing")}</span>
      </h1>
    `;
  }
  render() {
    return p` ${this.renderSubstationSelector()}

      <div class="sldContainer">
        <div id="panzoom">
          <svg xmlns="http://www.w3.org/2000/svg" id="svg"></svg>
        </div>
      </div>`;
  }
  static {
    this.styles = we`
    h1 {
      color: var(--mdc-theme-on-surface);
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0px;
      line-height: 48px;
      padding-left: 0.3em;
    }

    #substationSelector,
    #selectedSubstation {
      width: 35vw;
      margin: 0.67em 0 0 0.67em;
    }

    #noSubstationSelector {
      color: var(--base1);
    }

    .sldContainer {
      overflow: hidden;
    }

    g {
      pointer-events: bounding-box;
    }

    g[type='Bay'] > g[type='BayLabel'] {
      visibility: hidden;
    }
    g[type='Bay']:hover > g[type='BayLabel'] {
      visibility: visible;
    }

    g[type='Busbar'] > g[type='BusbarLabel'] {
      visibility: hidden;
    }
    g[type='Busbar'] > g[type='BusbarLabel'] > text,
    g[type='Busbar']:hover > g[type='BusbarLabel'] {
      visibility: visible;
    }

    g[type='Bay']:hover,
    g[type='Busbar']:hover,
    g[type='ConductingEquipment']:hover,
    g[type='ConnectivityNode']:hover,
    g[type='PowerTransformer']:hover,
    g[type='Terminal']:hover {
      outline: 2px dashed var(--mdc-theme-primary);
      transition: transform 200ms linear, box-shadow 250ms linear;
    }
  `;
  }
}
_i([
  y({ attribute: !1 })
], Vi.prototype, "doc", 2);
_i([
  Y("#panzoom")
], Vi.prototype, "panzoomContainer", 2);
_i([
  Y("#svg")
], Vi.prototype, "svg", 2);
_i([
  B()
], Vi.prototype, "selectedSubstation", 1);
export {
  Vi as default
};
