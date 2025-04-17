import { LitElement as ve, query as R, property as p, state as C, html as d, css as te, customElement as X, queryAsync as Nt, eventOptions as Ai, queryAssignedNodes as wi, unsafeCSS as sr, svg as E } from "lit-element";
import { NodePart as or, AttributePart as cr, directive as ki, nothing as dr, html as dt } from "lit-html";
import "@material/mwc-formfield";
import "@material/mwc-icon";
import { List as lr } from "@material/mwc-list";
import { TextField as ur } from "@material/mwc-textfield";
import { Select as pr } from "@material/mwc-select";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
import "@material/mwc-button";
const mr = 1e3 * 60, ft = "langChanged";
function hr(t, e, i) {
  return Object.entries(bt(e || {})).reduce((r, [n, a]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(bt(a))), t);
}
function fr(t, e) {
  const i = t.split(".");
  let r = e.strings;
  for (; r != null && i.length > 0; )
    r = r[i.shift()];
  return r != null ? r.toString() : null;
}
function bt(t) {
  return typeof t == "function" ? t() : t;
}
const br = () => ({
  loader: () => Promise.resolve({}),
  empty: (t) => `[${t}]`,
  lookup: fr,
  interpolate: hr,
  translationCache: {}
});
let Me = br();
function gr(t) {
  return Me = Object.assign(Object.assign({}, Me), t);
}
function vr(t) {
  window.dispatchEvent(new CustomEvent(ft, { detail: t }));
}
function yr(t, e, i = Me) {
  vr({
    previousStrings: i.strings,
    previousLang: i.lang,
    lang: i.lang = t,
    strings: i.strings = e
  });
}
function Sr(t, e) {
  const i = (r) => t(r.detail);
  return window.addEventListener(ft, i, e), () => window.removeEventListener(ft, i);
}
async function xr(t, e = Me) {
  const i = await e.loader(t, e);
  e.translationCache = {}, yr(t, i, e);
}
function g(t, e, i = Me) {
  let r = i.translationCache[t] || (i.translationCache[t] = i.lookup(t, i) || i.empty(t, i));
  return e = e != null ? bt(e) : null, e != null ? i.interpolate(r, e, i) : r;
}
function Ci(t) {
  return t instanceof or ? t.startNode.isConnected : t instanceof cr ? t.committer.element.isConnected : t.element.isConnected;
}
function Ar(t) {
  for (const [e] of t)
    Ci(e) || t.delete(e);
}
function wr(t) {
  "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t);
}
function kr(t, e) {
  setInterval(() => wr(() => Ar(t)), e);
}
const Lt = /* @__PURE__ */ new Map();
function Cr() {
  Sr((t) => {
    for (const [e, i] of Lt)
      Ci(e) && _i(e, i, t);
  });
}
Cr();
kr(Lt, mr);
function _i(t, e, i) {
  const r = e(i);
  t.value !== r && (t.setValue(r), t.commit());
}
ki((t) => (e) => {
  Lt.set(e, t), _i(e, t);
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
const Ei = /* @__PURE__ */ new WeakMap(), et = (t) => (...e) => {
  const i = t(...e);
  return Ei.set(i, !0), i;
}, Ut = (t) => typeof t == "function" && Ei.has(t);
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
const lt = {};
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
window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (t) => t });
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
const Ii = (t) => t === null || !(typeof t == "object" || typeof t == "function");
class tt {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== lt && (!Ii(e) || e !== this.value) && (this.value = e, Ut(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; Ut(this.value); ) {
      const e = this.value;
      this.value = lt, e(this);
    }
    this.value !== lt && this.committer.commit();
  }
}
class Di extends tt {
}
let _r = !1;
(() => {
  try {
    const t = {
      get capture() {
        return _r = !0, !1;
      }
    };
    window.addEventListener("test", t, t), window.removeEventListener("test", t, t);
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
var gt = function(t, e) {
  return gt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
    i.__proto__ = r;
  } || function(i, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
  }, gt(t, e);
};
function Ni(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  gt(t, e);
  function i() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
}
var Ae = function() {
  return Ae = Object.assign || function(e) {
    for (var i, r = 1, n = arguments.length; r < n; r++) {
      i = arguments[r];
      for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
    }
    return e;
  }, Ae.apply(this, arguments);
};
function u(t, e, i, r) {
  var n = arguments.length, a = n < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(t, e, i, r);
  else for (var o = t.length - 1; o >= 0; o--) (s = t[o]) && (a = (n < 3 ? s(a) : n > 3 ? s(e, i, a) : s(e, i)) || a);
  return n > 3 && a && Object.defineProperty(e, i, a), a;
}
function je(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, i = e && t[e], r = 0;
  if (i) return i.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
function Er(t, e) {
  var i = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return i.call(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ir = (t) => t.nodeType === Node.ELEMENT_NODE;
function Dr(t) {
  return {
    addClass: (e) => {
      t.classList.add(e);
    },
    removeClass: (e) => {
      t.classList.remove(e);
    },
    hasClass: (e) => t.classList.contains(e)
  };
}
const Li = () => {
}, Nr = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", Li, Nr);
document.removeEventListener("x", Li);
const Ti = (t = window.document) => {
  let e = t.activeElement;
  const i = [];
  if (!e)
    return i;
  for (; e && (i.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return i;
}, Lr = (t) => {
  const e = Ti();
  if (!e.length)
    return !1;
  const i = e[e.length - 1], r = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let n = [];
  const a = (s) => {
    n = s.composedPath();
  };
  return document.body.addEventListener("check-if-focused", a), i.dispatchEvent(r), document.body.removeEventListener("check-if-focused", a), n.indexOf(t) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Tt extends ve {
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
var Rt = (
  /** @class */
  function() {
    function t(e) {
      e === void 0 && (e = {}), this.adapter = e;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.init = function() {
    }, t.prototype.destroy = function() {
    }, t;
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
var Tr = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Rr = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, jt = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function Pr(t, e, i) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, n = e.y, a = r + i.left, s = n + i.top, o, l;
  if (t.type === "touchstart") {
    var c = t;
    o = c.changedTouches[0].pageX - a, l = c.changedTouches[0].pageY - s;
  } else {
    var f = t;
    o = f.pageX - a, l = f.pageY - s;
  }
  return { x: o, y: l };
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
var Wt = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Kt = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], We = [], $r = (
  /** @class */
  function(t) {
    Ni(e, t);
    function e(i) {
      var r = t.call(this, Ae(Ae({}, e.defaultAdapter), i)) || this;
      return r.activationAnimationHasEnded = !1, r.activationTimer = 0, r.fgDeactivationRemovalTimer = 0, r.fgScale = "0", r.frame = { width: 0, height: 0 }, r.initialSize = 0, r.layoutFrame = 0, r.maxRadius = 0, r.unboundedCoords = { left: 0, top: 0 }, r.activationState = r.defaultActivationState(), r.activationTimerCallback = function() {
        r.activationAnimationHasEnded = !0, r.runDeactivationUXLogicIfReady();
      }, r.activateHandler = function(n) {
        r.activateImpl(n);
      }, r.deactivateHandler = function() {
        r.deactivateImpl();
      }, r.focusHandler = function() {
        r.handleFocus();
      }, r.blurHandler = function() {
        r.handleBlur();
      }, r.resizeHandler = function() {
        r.layout();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Tr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Rr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return jt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
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
    }), e.prototype.init = function() {
      var i = this, r = this.supportsPressRipple();
      if (this.registerRootHandlers(r), r) {
        var n = e.cssClasses, a = n.ROOT, s = n.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.addClass(a), i.adapter.isUnbounded() && (i.adapter.addClass(s), i.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var i = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var r = e.cssClasses, n = r.ROOT, a = r.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.removeClass(n), i.adapter.removeClass(a), i.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, e.prototype.activate = function(i) {
      this.activateImpl(i);
    }, e.prototype.deactivate = function() {
      this.deactivateImpl();
    }, e.prototype.layout = function() {
      var i = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        i.layoutInternal(), i.layoutFrame = 0;
      });
    }, e.prototype.setUnbounded = function(i) {
      var r = e.cssClasses.UNBOUNDED;
      i ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.handleFocus = function() {
      var i = this;
      requestAnimationFrame(function() {
        return i.adapter.addClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.handleBlur = function() {
      var i = this;
      requestAnimationFrame(function() {
        return i.adapter.removeClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.supportsPressRipple = function() {
      return this.adapter.browserSupportsCssVars();
    }, e.prototype.defaultActivationState = function() {
      return {
        activationEvent: void 0,
        hasDeactivationUXRun: !1,
        isActivated: !1,
        isProgrammatic: !1,
        wasActivatedByPointer: !1,
        wasElementMadeActive: !1
      };
    }, e.prototype.registerRootHandlers = function(i) {
      var r, n;
      if (i) {
        try {
          for (var a = je(Wt), s = a.next(); !s.done; s = a.next()) {
            var o = s.value;
            this.adapter.registerInteractionHandler(o, this.activateHandler);
          }
        } catch (l) {
          r = { error: l };
        } finally {
          try {
            s && !s.done && (n = a.return) && n.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(i) {
      var r, n;
      if (i.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var a = je(Kt), s = a.next(); !s.done; s = a.next()) {
            var o = s.value;
            this.adapter.registerDocumentInteractionHandler(o, this.deactivateHandler);
          }
        } catch (l) {
          r = { error: l };
        } finally {
          try {
            s && !s.done && (n = a.return) && n.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var i, r;
      try {
        for (var n = je(Wt), a = n.next(); !a.done; a = n.next()) {
          var s = a.value;
          this.adapter.deregisterInteractionHandler(s, this.activateHandler);
        }
      } catch (o) {
        i = { error: o };
      } finally {
        try {
          a && !a.done && (r = n.return) && r.call(n);
        } finally {
          if (i) throw i.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var i, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var n = je(Kt), a = n.next(); !a.done; a = n.next()) {
          var s = a.value;
          this.adapter.deregisterDocumentInteractionHandler(s, this.deactivateHandler);
        }
      } catch (o) {
        i = { error: o };
      } finally {
        try {
          a && !a.done && (r = n.return) && r.call(n);
        } finally {
          if (i) throw i.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var i = this, r = e.strings, n = Object.keys(r);
      n.forEach(function(a) {
        a.indexOf("VAR_") === 0 && i.adapter.updateCssVariable(r[a], null);
      });
    }, e.prototype.activateImpl = function(i) {
      var r = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var n = this.activationState;
        if (!n.isActivated) {
          var a = this.previousActivationEvent, s = a && i !== void 0 && a.type !== i.type;
          if (!s) {
            n.isActivated = !0, n.isProgrammatic = i === void 0, n.activationEvent = i, n.wasActivatedByPointer = n.isProgrammatic ? !1 : i !== void 0 && (i.type === "mousedown" || i.type === "touchstart" || i.type === "pointerdown");
            var o = i !== void 0 && We.length > 0 && We.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (o) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (We.push(i.target), this.registerDeactivationHandlers(i)), n.wasElementMadeActive = this.checkElementMadeActive(i), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              We = [], !n.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (n.wasElementMadeActive = r.checkElementMadeActive(i), n.wasElementMadeActive && r.animateActivation()), n.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var i = this, r = e.strings, n = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, s = e.cssClasses, o = s.FG_DEACTIVATION, l = s.FG_ACTIVATION, c = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var f = "", v = "";
      if (!this.adapter.isUnbounded()) {
        var b = this.getFgTranslationCoordinates(), y = b.startPoint, k = b.endPoint;
        f = y.x + "px, " + y.y + "px", v = k.x + "px, " + k.y + "px";
      }
      this.adapter.updateCssVariable(n, f), this.adapter.updateCssVariable(a, v), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(o), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, c);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, r = i.activationEvent, n = i.wasActivatedByPointer, a;
      n ? a = Pr(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, a = {
        x: a.x - this.initialSize / 2,
        y: a.y - this.initialSize / 2
      };
      var s = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: a, endPoint: s };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var i = this, r = e.cssClasses.FG_DEACTIVATION, n = this.activationState, a = n.hasDeactivationUXRun, s = n.isActivated, o = a || !s;
      o && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        i.adapter.removeClass(r);
      }, jt.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var i = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(i), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var i = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return i.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var i = this, r = this.activationState;
      if (r.isActivated) {
        var n = Ae({}, r);
        r.isProgrammatic ? (requestAnimationFrame(function() {
          i.animateDeactivation(n);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          i.activationState.hasDeactivationUXRun = !0, i.animateDeactivation(n), i.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(i) {
      var r = i.wasActivatedByPointer, n = i.wasElementMadeActive;
      (r || n) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var i = this;
      this.frame = this.adapter.computeBoundingRect();
      var r = Math.max(this.frame.height, this.frame.width), n = function() {
        var s = Math.sqrt(Math.pow(i.frame.width, 2) + Math.pow(i.frame.height, 2));
        return s + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : n();
      var a = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var i = e.strings, r = i.VAR_FG_SIZE, n = i.VAR_LEFT, a = i.VAR_TOP, s = i.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(s, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(n, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, e;
  }(Rt)
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
class Or {
  constructor(e) {
    this.classes = /* @__PURE__ */ new Set(), this.changed = !1, this.element = e;
    const i = (e.getAttribute("class") || "").split(/\s+/);
    for (const r of i)
      this.classes.add(r);
  }
  add(e) {
    this.classes.add(e), this.changed = !0;
  }
  remove(e) {
    this.classes.delete(e), this.changed = !0;
  }
  commit() {
    if (this.changed) {
      let e = "";
      this.classes.forEach((i) => e += i + " "), this.element.setAttribute("class", e);
    }
  }
}
const Zt = /* @__PURE__ */ new WeakMap(), Ne = et((t) => (e) => {
  if (!(e instanceof tt) || e instanceof Di || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = e, { element: r } = i;
  let n = Zt.get(e);
  n === void 0 && (r.setAttribute("class", i.strings.join(" ")), Zt.set(e, n = /* @__PURE__ */ new Set()));
  const a = r.classList || new Or(r);
  n.forEach((s) => {
    s in t || (a.remove(s), n.delete(s));
  });
  for (const s in t) {
    const o = t[s];
    o != n.has(s) && (o ? (a.add(s), n.add(s)) : (a.remove(s), n.delete(s)));
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
const Xt = /* @__PURE__ */ new WeakMap(), zr = et((t) => (e) => {
  if (!(e instanceof tt) || e instanceof Di || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = e, { style: r } = i.element;
  let n = Xt.get(e);
  n === void 0 && (r.cssText = i.strings.join(" "), Xt.set(e, n = /* @__PURE__ */ new Set())), n.forEach((a) => {
    a in t || (n.delete(a), a.indexOf("-") === -1 ? r[a] = null : r.removeProperty(a));
  });
  for (const a in t)
    n.add(a), a.indexOf("-") === -1 ? r[a] = t[a] : r.setProperty(a, t[a]);
});
class O extends Tt {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = $r;
  }
  get isActive() {
    return Er(this.parentElement || this, ":active");
  }
  createAdapter() {
    return {
      browserSupportsCssVars: () => !0,
      isUnbounded: () => this.unbounded,
      isSurfaceActive: () => this.isActive,
      isSurfaceDisabled: () => this.disabled,
      addClass: (e) => {
        switch (e) {
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
      removeClass: (e) => {
        switch (e) {
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
      updateCssVariable: (e, i) => {
        switch (e) {
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
  startPress(e) {
    this.waitForFoundation(() => {
      this.mdcFoundation.activate(e);
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
  waitForFoundation(e) {
    this.mdcFoundation ? e() : this.updateComplete.then(e);
  }
  update(e) {
    e.has("disabled") && this.disabled && this.endHover(), super.update(e);
  }
  /** @soyTemplate */
  render() {
    const e = this.activated && (this.primary || !this.accent), i = this.selected && (this.primary || !this.accent), r = {
      "mdc-ripple-surface--accent": this.accent,
      "mdc-ripple-surface--primary--activated": e,
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
    return d`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Ne(r)}"
          style="${zr({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
u([
  R(".mdc-ripple-surface")
], O.prototype, "mdcRoot", void 0);
u([
  p({ type: Boolean })
], O.prototype, "primary", void 0);
u([
  p({ type: Boolean })
], O.prototype, "accent", void 0);
u([
  p({ type: Boolean })
], O.prototype, "unbounded", void 0);
u([
  p({ type: Boolean })
], O.prototype, "disabled", void 0);
u([
  p({ type: Boolean })
], O.prototype, "activated", void 0);
u([
  p({ type: Boolean })
], O.prototype, "selected", void 0);
u([
  p({ type: Boolean })
], O.prototype, "internalUseStateLayerCustomProperties", void 0);
u([
  C()
], O.prototype, "hovering", void 0);
u([
  C()
], O.prototype, "bgFocused", void 0);
u([
  C()
], O.prototype, "fgActivation", void 0);
u([
  C()
], O.prototype, "fgDeactivation", void 0);
u([
  C()
], O.prototype, "fgScale", void 0);
u([
  C()
], O.prototype, "fgSize", void 0);
u([
  C()
], O.prototype, "translateStart", void 0);
u([
  C()
], O.prototype, "translateEnd", void 0);
u([
  C()
], O.prototype, "leftPos", void 0);
u([
  C()
], O.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Mr = te`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let vt = class extends O {
};
vt.styles = [Mr];
vt = u([
  X("mwc-ripple")
], vt);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Vr(t, e, i) {
  const r = t.constructor;
  if (!i) {
    const o = `__${e}`;
    if (i = r.getPropertyDescriptor(e, o), !i)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const n = i;
  let a = "";
  if (!n.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const s = {
    configurable: !0,
    enumerable: !0,
    set(o) {
      a === "" && (a = r.getPropertyOptions(e).attribute), this.hasAttribute(a) && this.removeAttribute(a), n.set.call(this, o);
    }
  };
  return n.get && (s.get = function() {
    return n.get.call(this);
  }), s;
}
function Fe(t, e, i) {
  if (e !== void 0)
    return Vr(t, e, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Pt extends Tt {
  click() {
    this.formElement && (this.formElement.focus(), this.formElement.click());
  }
  setAriaLabel(e) {
    this.formElement && this.formElement.setAttribute("aria-label", e);
  }
  firstUpdated() {
    super.firstUpdated(), this.shadowRoot && this.mdcRoot.addEventListener("change", (e) => {
      this.dispatchEvent(new Event("change", e));
    });
  }
}
Pt.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const oe = (t) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e, i) => {
    if (e.constructor._observers) {
      if (!e.constructor.hasOwnProperty("_observers")) {
        const r = e.constructor._observers;
        e.constructor._observers = /* @__PURE__ */ new Map(), r.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (n, a) => e.constructor._observers.set(a, n)
        );
      }
    } else {
      e.constructor._observers = /* @__PURE__ */ new Map();
      const r = e.updated;
      e.updated = function(n) {
        r.call(this, n), n.forEach((a, s) => {
          const l = this.constructor._observers.get(s);
          l !== void 0 && l.call(this, this[s], a);
        });
      };
    }
    e.constructor._observers.set(i, t);
  }
);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Qt = Symbol("selection controller");
class Hr {
  constructor() {
    this.selected = null, this.ordered = null, this.set = /* @__PURE__ */ new Set();
  }
}
class $t {
  constructor(e) {
    this.sets = {}, this.focusedSet = null, this.mouseIsDown = !1, this.updating = !1, e.addEventListener("keydown", (i) => {
      this.keyDownHandler(i);
    }), e.addEventListener("mousedown", () => {
      this.mousedownHandler();
    }), e.addEventListener("mouseup", () => {
      this.mouseupHandler();
    });
  }
  /**
   * Get a controller for the given element. If no controller exists, one will
   * be created. Defaults to getting the controller scoped to the element's root
   * node shadow root unless `element.global` is true. Then, it will get a
   * `window.document`-scoped controller.
   *
   * @param element Element from which to get / create a SelectionController. If
   *     `element.global` is true, it gets a selection controller scoped to
   *     `window.document`.
   */
  static getController(e) {
    const r = !("global" in e) || "global" in e && e.global ? document : e.getRootNode();
    let n = r[Qt];
    return n === void 0 && (n = new $t(r), r[Qt] = n), n;
  }
  keyDownHandler(e) {
    const i = e.target;
    "checked" in i && this.has(i) && (e.key == "ArrowRight" || e.key == "ArrowDown" ? this.selectNext(i) : (e.key == "ArrowLeft" || e.key == "ArrowUp") && this.selectPrevious(i));
  }
  mousedownHandler() {
    this.mouseIsDown = !0;
  }
  mouseupHandler() {
    this.mouseIsDown = !1;
  }
  /**
   * Whether or not the controller controls  the given element.
   *
   * @param element element to check
   */
  has(e) {
    return this.getSet(e.name).set.has(e);
  }
  /**
   * Selects and returns the controlled element previous to the given element in
   * document position order. See
   * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
   *
   * @param element element relative from which preceding element is fetched
   */
  selectPrevious(e) {
    const i = this.getOrdered(e), r = i.indexOf(e), n = i[r - 1] || i[i.length - 1];
    return this.select(n), n;
  }
  /**
   * Selects and returns the controlled element next to the given element in
   * document position order. See
   * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
   *
   * @param element element relative from which following element is fetched
   */
  selectNext(e) {
    const i = this.getOrdered(e), r = i.indexOf(e), n = i[r + 1] || i[0];
    return this.select(n), n;
  }
  select(e) {
    e.click();
  }
  /**
   * Focuses the selected element in the given element's selection set. User's
   * mouse selection will override this focus.
   *
   * @param element Element from which selection set is derived and subsequently
   *     focused.
   * @deprecated update() method now handles focus management by setting
   *     appropriate tabindex to form element.
   */
  focus(e) {
    if (this.mouseIsDown)
      return;
    const i = this.getSet(e.name), r = this.focusedSet;
    this.focusedSet = i, r != i && i.selected && i.selected != e && i.selected.focus();
  }
  /**
   * @return Returns true if atleast one radio is selected in the radio group.
   */
  isAnySelected(e) {
    const i = this.getSet(e.name);
    for (const r of i.set)
      if (r.checked)
        return !0;
    return !1;
  }
  /**
   * Returns the elements in the given element's selection set in document
   * position order.
   * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
   *
   * @param element Element from which selection set is derived and subsequently
   *     ordered.
   */
  getOrdered(e) {
    const i = this.getSet(e.name);
    return i.ordered || (i.ordered = Array.from(i.set), i.ordered.sort((r, n) => r.compareDocumentPosition(n) == Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0)), i.ordered;
  }
  /**
   * Gets the selection set of the given name and creates one if it does not yet
   * exist.
   *
   * @param name Name of set
   */
  getSet(e) {
    return this.sets[e] || (this.sets[e] = new Hr()), this.sets[e];
  }
  /**
   * Register the element in the selection controller.
   *
   * @param element Element to register. Registers in set of `element.name`.
   */
  register(e) {
    const i = e.name || e.getAttribute("name") || "", r = this.getSet(i);
    r.set.add(e), r.ordered = null;
  }
  /**
   * Unregister the element from selection controller.
   *
   * @param element Element to register. Registers in set of `element.name`.
   */
  unregister(e) {
    const i = this.getSet(e.name);
    i.set.delete(e), i.ordered = null, i.selected == e && (i.selected = null);
  }
  /**
   * Unselects other elements in element's set if element is checked. Noop
   * otherwise.
   *
   * @param element Element from which to calculate selection controller update.
   */
  update(e) {
    if (this.updating)
      return;
    this.updating = !0;
    const i = this.getSet(e.name);
    if (e.checked) {
      for (const r of i.set)
        r != e && (r.checked = !1);
      i.selected = e;
    }
    if (this.isAnySelected(e))
      for (const r of i.set) {
        if (r.formElementTabIndex === void 0)
          break;
        r.formElementTabIndex = r.checked ? 0 : -1;
      }
    this.updating = !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ot {
  constructor(e) {
    this.startPress = (i) => {
      e().then((r) => {
        r && r.startPress(i);
      });
    }, this.endPress = () => {
      e().then((i) => {
        i && i.endPress();
      });
    }, this.startFocus = () => {
      e().then((i) => {
        i && i.startFocus();
      });
    }, this.endFocus = () => {
      e().then((i) => {
        i && i.endFocus();
      });
    }, this.startHover = () => {
      e().then((i) => {
        i && i.startHover();
      });
    }, this.endHover = () => {
      e().then((i) => {
        i && i.endHover();
      });
    };
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
var Fr = {
  NATIVE_CONTROL_SELECTOR: ".mdc-radio__native-control"
}, Gr = {
  DISABLED: "mdc-radio--disabled",
  ROOT: "mdc-radio"
};
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
var Br = (
  /** @class */
  function(t) {
    Ni(e, t);
    function e(i) {
      return t.call(this, Ae(Ae({}, e.defaultAdapter), i)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Gr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Fr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          setNativeControlDisabled: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.setDisabled = function(i) {
      var r = e.cssClasses.DISABLED;
      this.adapter.setNativeControlDisabled(i), i ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e;
  }(Rt)
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
const ut = /* @__PURE__ */ new WeakMap(), re = et((t) => (e) => {
  const i = ut.get(e);
  if (t === void 0 && e instanceof tt) {
    if (i !== void 0 || !ut.has(e)) {
      const r = e.committer.name;
      e.committer.element.removeAttribute(r);
    }
  } else t !== i && e.setValue(t);
  ut.set(e, t);
});
class M extends Pt {
  constructor() {
    super(...arguments), this._checked = !1, this.useStateLayerCustomProperties = !1, this.global = !1, this.disabled = !1, this.value = "", this.name = "", this.reducedTouchTarget = !1, this.mdcFoundationClass = Br, this.formElementTabIndex = 0, this.focused = !1, this.shouldRenderRipple = !1, this.rippleElement = null, this.rippleHandlers = new Ot(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => {
      this.rippleElement = e;
    }), this.ripple));
  }
  get checked() {
    return this._checked;
  }
  /**
   * We define our own getter/setter for `checked` because we need to track
   * changes to it synchronously.
   *
   * The order in which the `checked` property is set across radio buttons
   * within the same group is very important. However, we can't rely on
   * UpdatingElement's `updated` callback to observe these changes (which is
   * also what the `@observer` decorator uses), because it batches changes to
   * all properties.
   *
   * Consider:
   *
   *   radio1.disabled = true;
   *   radio2.checked = true;
   *   radio1.checked = true;
   *
   * In this case we'd first see all changes for radio1, and then for radio2,
   * and we couldn't tell that radio1 was the most recently checked.
   */
  set checked(e) {
    var i, r;
    const n = this._checked;
    e !== n && (this._checked = e, this.formElement && (this.formElement.checked = e), (i = this._selectionController) === null || i === void 0 || i.update(this), e === !1 && ((r = this.formElement) === null || r === void 0 || r.blur()), this.requestUpdate("checked", n), this.dispatchEvent(new Event("checked", { bubbles: !0, composed: !0 })));
  }
  _handleUpdatedValue(e) {
    this.formElement.value = e;
  }
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? d`<mwc-ripple unbounded accent
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
        .disabled="${this.disabled}"></mwc-ripple>` : "";
  }
  get isRippleActive() {
    var e;
    return ((e = this.rippleElement) === null || e === void 0 ? void 0 : e.isActive) || !1;
  }
  connectedCallback() {
    super.connectedCallback(), this._selectionController = $t.getController(this), this._selectionController.register(this), this._selectionController.update(this);
  }
  disconnectedCallback() {
    this._selectionController.unregister(this), this._selectionController = void 0;
  }
  focus() {
    this.formElement.focus();
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Dr(this.mdcRoot)), { setNativeControlDisabled: (e) => {
      this.formElement.disabled = e;
    } });
  }
  handleFocus() {
    this.focused = !0, this.handleRippleFocus();
  }
  handleClick() {
    this.formElement.focus();
  }
  handleBlur() {
    this.focused = !1, this.formElement.blur(), this.rippleHandlers.endFocus();
  }
  /**
   * @soyTemplate
   * @soyAttributes radioAttributes: input
   * @soyClasses radioClasses: .mdc-radio
   */
  render() {
    const e = {
      "mdc-radio--touch": !this.reducedTouchTarget,
      "mdc-ripple-upgraded--background-focused": this.focused,
      "mdc-radio--disabled": this.disabled
    };
    return d`
      <div class="mdc-radio ${Ne(e)}">
        <input
          tabindex="${this.formElementTabIndex}"
          class="mdc-radio__native-control"
          type="radio"
          name="${this.name}"
          aria-label="${re(this.ariaLabel)}"
          aria-labelledby="${re(this.ariaLabelledBy)}"
          .checked="${this.checked}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          @change="${this.changeHandler}"
          @focus="${this.handleFocus}"
          @click="${this.handleClick}"
          @blur="${this.handleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-radio__background">
          <div class="mdc-radio__outer-circle"></div>
          <div class="mdc-radio__inner-circle"></div>
        </div>
        ${this.renderRipple()}
      </div>`;
  }
  handleRippleMouseDown(e) {
    const i = () => {
      window.removeEventListener("mouseup", i), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", i), this.rippleHandlers.startPress(e);
  }
  handleRippleTouchStart(e) {
    this.rippleHandlers.startPress(e);
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
  changeHandler() {
    this.checked = this.formElement.checked;
  }
}
u([
  R(".mdc-radio")
], M.prototype, "mdcRoot", void 0);
u([
  R("input")
], M.prototype, "formElement", void 0);
u([
  C()
], M.prototype, "useStateLayerCustomProperties", void 0);
u([
  p({ type: Boolean })
], M.prototype, "global", void 0);
u([
  p({ type: Boolean, reflect: !0 })
], M.prototype, "checked", null);
u([
  p({ type: Boolean }),
  oe(function(t) {
    this.mdcFoundation.setDisabled(t);
  })
], M.prototype, "disabled", void 0);
u([
  p({ type: String }),
  oe(function(t) {
    this._handleUpdatedValue(t);
  })
], M.prototype, "value", void 0);
u([
  p({ type: String })
], M.prototype, "name", void 0);
u([
  p({ type: Boolean })
], M.prototype, "reducedTouchTarget", void 0);
u([
  p({ type: Number })
], M.prototype, "formElementTabIndex", void 0);
u([
  C()
], M.prototype, "focused", void 0);
u([
  C()
], M.prototype, "shouldRenderRipple", void 0);
u([
  Nt("mwc-ripple")
], M.prototype, "ripple", void 0);
u([
  Fe,
  p({ attribute: "aria-label" })
], M.prototype, "ariaLabel", void 0);
u([
  Fe,
  p({ attribute: "aria-labelledby" })
], M.prototype, "ariaLabelledBy", void 0);
u([
  Ai({ passive: !0 })
], M.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const qr = te`.mdc-touch-target-wrapper{display:inline}.mdc-radio{padding:calc((40px - 20px) / 2)}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio .mdc-radio__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background::before{top:calc(-1 * (40px - 20px) / 2);left:calc(-1 * (40px - 20px) / 2);width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:calc((40px - 40px) / 2);right:calc((40px - 40px) / 2);left:calc((40px - 40px) / 2);width:40px;height:40px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:GrayText}}.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host{display:inline-block;outline:none}.mdc-radio{vertical-align:bottom}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}`;
let yt = class extends M {
};
yt.styles = [qr];
yt = u([
  X("mwc-radio")
], yt);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class V extends ve {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new Ot(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
        cb: (e) => {
          const i = e.type;
          this.onDown(i === "mousedown" ? "mouseup" : "touchend", e);
        }
      }
    ];
  }
  get text() {
    const e = this.textContent;
    return e ? e.trim() : "";
  }
  render() {
    const e = this.renderText(), i = this.graphic ? this.renderGraphic() : d``, r = this.hasMeta ? this.renderMeta() : d``;
    return d`
      ${this.renderRipple()}
      ${i}
      ${e}
      ${r}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? d`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? d`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return d`
      <span class="mdc-deprecated-list-item__graphic material-icons ${Ne(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return d`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return d`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return d`<slot></slot>`;
  }
  renderTwoline() {
    return d`
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
  onDown(e, i) {
    const r = () => {
      window.removeEventListener(e, r), this.rippleHandlers.endPress();
    };
    window.addEventListener(e, r), this.rippleHandlers.startPress(i);
  }
  fireRequestSelected(e, i) {
    if (this.noninteractive)
      return;
    const r = new CustomEvent("request-selected", { bubbles: !0, composed: !0, detail: { source: i, selected: e } });
    this.dispatchEvent(r);
  }
  connectedCallback() {
    super.connectedCallback(), this.noninteractive || this.setAttribute("mwc-list-item", "");
    for (const e of this.listeners)
      for (const i of e.eventNames)
        e.target.addEventListener(i, e.cb, { passive: !0 });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const e of this.listeners)
      for (const i of e.eventNames)
        e.target.removeEventListener(i, e.cb);
    this._managingList && (this._managingList.debouncedLayout ? this._managingList.debouncedLayout(!0) : this._managingList.layout(!0));
  }
  // composed flag, event fire through shadow root and up through composed tree
  firstUpdated() {
    const e = new Event("list-item-rendered", { bubbles: !0, composed: !0 });
    this.dispatchEvent(e);
  }
}
u([
  R("slot")
], V.prototype, "slotElement", void 0);
u([
  Nt("mwc-ripple")
], V.prototype, "ripple", void 0);
u([
  p({ type: String })
], V.prototype, "value", void 0);
u([
  p({ type: String, reflect: !0 })
], V.prototype, "group", void 0);
u([
  p({ type: Number, reflect: !0 })
], V.prototype, "tabindex", void 0);
u([
  p({ type: Boolean, reflect: !0 }),
  oe(function(t) {
    t ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], V.prototype, "disabled", void 0);
u([
  p({ type: Boolean, reflect: !0 })
], V.prototype, "twoline", void 0);
u([
  p({ type: Boolean, reflect: !0 })
], V.prototype, "activated", void 0);
u([
  p({ type: String, reflect: !0 })
], V.prototype, "graphic", void 0);
u([
  p({ type: Boolean })
], V.prototype, "multipleGraphics", void 0);
u([
  p({ type: Boolean })
], V.prototype, "hasMeta", void 0);
u([
  p({ type: Boolean, reflect: !0 }),
  oe(function(t) {
    t ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], V.prototype, "noninteractive", void 0);
u([
  p({ type: Boolean, reflect: !0 }),
  oe(function(t) {
    const e = this.getAttribute("role"), i = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (i && t ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(t, "property");
  })
], V.prototype, "selected", void 0);
u([
  C()
], V.prototype, "shouldRenderRipple", void 0);
u([
  C()
], V.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ri = te`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let St = class extends V {
};
St.styles = [Ri];
St = u([
  X("mwc-list-item")
], St);
class z extends Pt {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new Ot(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(e) {
    const i = e.get("indeterminate"), r = e.get("checked"), n = e.get("disabled");
    if (i !== void 0 || r !== void 0 || n !== void 0) {
      const a = this.calculateAnimationStateName(!!r, !!i, !!n), s = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${a}-${s}`;
    }
    super.update(e);
  }
  calculateAnimationStateName(e, i, r) {
    return r ? "disabled" : i ? "indeterminate" : e ? "checked" : "unchecked";
  }
  // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? d`<mwc-ripple
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
    const e = this.indeterminate || this.checked, i = {
      "mdc-checkbox--disabled": this.disabled,
      "mdc-checkbox--selected": e,
      "mdc-checkbox--touch": !this.reducedTouchTarget,
      "mdc-ripple-upgraded--background-focused": this.focused,
      // transition animiation classes
      "mdc-checkbox--anim-checked-indeterminate": this.animationClass == "checked-indeterminate",
      "mdc-checkbox--anim-checked-unchecked": this.animationClass == "checked-unchecked",
      "mdc-checkbox--anim-indeterminate-checked": this.animationClass == "indeterminate-checked",
      "mdc-checkbox--anim-indeterminate-unchecked": this.animationClass == "indeterminate-unchecked",
      "mdc-checkbox--anim-unchecked-checked": this.animationClass == "unchecked-checked",
      "mdc-checkbox--anim-unchecked-indeterminate": this.animationClass == "unchecked-indeterminate"
    }, r = this.indeterminate ? "mixed" : void 0;
    return d`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Ne(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${re(this.name)}"
              aria-checked="${re(r)}"
              aria-label="${re(this.ariaLabel)}"
              aria-labelledby="${re(this.ariaLabelledBy)}"
              aria-describedby="${re(this.ariaDescribedBy)}"
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
  handleRippleMouseDown(e) {
    const i = () => {
      window.removeEventListener("mouseup", i), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", i), this.rippleHandlers.startPress(e);
  }
  handleRippleTouchStart(e) {
    this.rippleHandlers.startPress(e);
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
    var e;
    return ((e = this.rippleElement) === null || e === void 0 ? void 0 : e.isActive) || !1;
  }
}
u([
  R(".mdc-checkbox")
], z.prototype, "mdcRoot", void 0);
u([
  R("input")
], z.prototype, "formElement", void 0);
u([
  p({ type: Boolean, reflect: !0 })
], z.prototype, "checked", void 0);
u([
  p({ type: Boolean })
], z.prototype, "indeterminate", void 0);
u([
  p({ type: Boolean, reflect: !0 })
], z.prototype, "disabled", void 0);
u([
  p({ type: String, reflect: !0 })
], z.prototype, "name", void 0);
u([
  p({ type: String })
], z.prototype, "value", void 0);
u([
  Fe,
  p({ type: String, attribute: "aria-label" })
], z.prototype, "ariaLabel", void 0);
u([
  Fe,
  p({ type: String, attribute: "aria-labelledby" })
], z.prototype, "ariaLabelledBy", void 0);
u([
  Fe,
  p({ type: String, attribute: "aria-describedby" })
], z.prototype, "ariaDescribedBy", void 0);
u([
  p({ type: Boolean })
], z.prototype, "reducedTouchTarget", void 0);
u([
  C()
], z.prototype, "animationClass", void 0);
u([
  C()
], z.prototype, "shouldRenderRipple", void 0);
u([
  C()
], z.prototype, "focused", void 0);
u([
  C()
], z.prototype, "useStateLayerCustomProperties", void 0);
u([
  Nt("mwc-ripple")
], z.prototype, "ripple", void 0);
u([
  Ai({ passive: !0 })
], z.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ur = te`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let xt = class extends z {
};
xt.styles = [Ur];
xt = u([
  X("mwc-checkbox")
], xt);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ge extends V {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : d``, n = this.hasMeta && this.left ? this.renderMeta() : d``, a = this.renderRipple();
    return d`
      ${a}
      ${r}
      ${this.left ? "" : i}
      <span class=${Ne(e)}>
        <mwc-checkbox
            reducedTouchTarget
            tabindex=${this.tabindex}
            .checked=${this.selected}
            ?disabled=${this.disabled}
            @change=${this.onChange}>
        </mwc-checkbox>
      </span>
      ${this.left ? i : ""}
      ${n}`;
  }
  async onChange(e) {
    const i = e.target;
    this.selected === i.checked || (this._skipPropRequest = !0, this.selected = i.checked, await this.updateComplete, this._skipPropRequest = !1);
  }
}
u([
  R("slot")
], Ge.prototype, "slotElement", void 0);
u([
  R("mwc-checkbox")
], Ge.prototype, "checkboxElement", void 0);
u([
  p({ type: Boolean })
], Ge.prototype, "left", void 0);
u([
  p({ type: String, reflect: !0 })
], Ge.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const jr = te`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Ee = class extends Ge {
};
Ee.styles = [Ri, jr];
Ee = u([
  X("mwc-check-list-item")
], Ee);
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
var S = {
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
}, q = /* @__PURE__ */ new Set();
q.add(S.BACKSPACE);
q.add(S.ENTER);
q.add(S.SPACEBAR);
q.add(S.PAGE_UP);
q.add(S.PAGE_DOWN);
q.add(S.END);
q.add(S.HOME);
q.add(S.ARROW_LEFT);
q.add(S.ARROW_UP);
q.add(S.ARROW_RIGHT);
q.add(S.ARROW_DOWN);
q.add(S.DELETE);
q.add(S.ESCAPE);
q.add(S.TAB);
var Z = {
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
}, U = /* @__PURE__ */ new Map();
U.set(Z.BACKSPACE, S.BACKSPACE);
U.set(Z.ENTER, S.ENTER);
U.set(Z.SPACEBAR, S.SPACEBAR);
U.set(Z.PAGE_UP, S.PAGE_UP);
U.set(Z.PAGE_DOWN, S.PAGE_DOWN);
U.set(Z.END, S.END);
U.set(Z.HOME, S.HOME);
U.set(Z.ARROW_LEFT, S.ARROW_LEFT);
U.set(Z.ARROW_UP, S.ARROW_UP);
U.set(Z.ARROW_RIGHT, S.ARROW_RIGHT);
U.set(Z.ARROW_DOWN, S.ARROW_DOWN);
U.set(Z.DELETE, S.DELETE);
U.set(Z.ESCAPE, S.ESCAPE);
U.set(Z.TAB, S.TAB);
var ye = /* @__PURE__ */ new Set();
ye.add(S.PAGE_UP);
ye.add(S.PAGE_DOWN);
ye.add(S.END);
ye.add(S.HOME);
ye.add(S.ARROW_LEFT);
ye.add(S.ARROW_UP);
ye.add(S.ARROW_RIGHT);
ye.add(S.ARROW_DOWN);
function me(t) {
  var e = t.key;
  if (q.has(e))
    return e;
  var i = U.get(t.keyCode);
  return i || S.UNKNOWN;
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
var he, de, I = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
he = {}, he["" + I.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", he["" + I.LIST_ITEM_CLASS] = "mdc-list-item", he["" + I.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", he["" + I.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", he["" + I.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", he["" + I.ROOT] = "mdc-list";
var Ce = (de = {}, de["" + I.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", de["" + I.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", de["" + I.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", de["" + I.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", de["" + I.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", de["" + I.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", de["" + I.ROOT] = "mdc-deprecated-list", de), Ke = {
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
    .` + I.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + I.LIST_ITEM_CLASS + ` a,
    .` + Ce[I.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ce[I.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + I.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + I.LIST_ITEM_CLASS + ` a,
    .` + I.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + I.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Ce[I.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ce[I.LIST_ITEM_CLASS] + ` a,
    .` + Ce[I.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Ce[I.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, W = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const At = (t, e) => t - e, Wr = (t, e) => {
  const i = Array.from(t), r = Array.from(e), n = { added: [], removed: [] }, a = i.sort(At), s = r.sort(At);
  let o = 0, l = 0;
  for (; o < a.length || l < s.length; ) {
    const c = a[o], f = s[l];
    if (c === f) {
      o++, l++;
      continue;
    }
    if (c !== void 0 && (f === void 0 || c < f)) {
      n.removed.push(c), o++;
      continue;
    }
    if (f !== void 0 && (c === void 0 || f < c)) {
      n.added.push(f), l++;
      continue;
    }
  }
  return n;
}, Kr = ["input", "button", "textarea", "select"];
function $e(t) {
  return t instanceof Set;
}
const pt = (t) => {
  const e = t === W.UNSET_INDEX ? /* @__PURE__ */ new Set() : t;
  return $e(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class zt extends Rt {
  constructor(e) {
    super(Object.assign(Object.assign({}, zt.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = W.UNSET_INDEX, this.focusedItemIndex_ = W.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return Ke;
  }
  static get numbers() {
    return W;
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
  setWrapFocus(e) {
    this.wrapFocus_ = e;
  }
  /**
   * Sets the private wrapFocus_ variable.
   */
  setMulti(e) {
    this.isMulti_ = e;
    const i = this.selectedIndex_;
    if (e) {
      if (!$e(i)) {
        const r = i === W.UNSET_INDEX;
        this.selectedIndex_ = r ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
    } else if ($e(i))
      if (i.size) {
        const r = Array.from(i).sort(At);
        this.selectedIndex_ = r[0];
      } else
        this.selectedIndex_ = W.UNSET_INDEX;
  }
  /**
   * Sets the isVertical_ private variable.
   */
  setVerticalOrientation(e) {
    this.isVertical_ = e;
  }
  /**
   * Sets the useActivatedClass_ private variable.
   */
  setUseActivatedClass(e) {
    this.useActivatedClass_ = e;
  }
  getSelectedIndex() {
    return this.selectedIndex_;
  }
  setSelectedIndex(e) {
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(pt(e)) : this.setSingleSelectionAtIndex_(e));
  }
  /**
   * Focus in handler for the list items.
   */
  handleFocusIn(e, i) {
    i >= 0 && this.adapter.setTabIndexForElementIndex(i, 0);
  }
  /**
   * Focus out handler for the list items.
   */
  handleFocusOut(e, i) {
    i >= 0 && this.adapter.setTabIndexForElementIndex(i, -1), setTimeout(() => {
      this.adapter.isFocusInsideList() || this.setTabindexToFirstSelectedItem_();
    }, 0);
  }
  /**
   * Key handler for the list.
   */
  handleKeydown(e, i, r) {
    const n = me(e) === "ArrowLeft", a = me(e) === "ArrowUp", s = me(e) === "ArrowRight", o = me(e) === "ArrowDown", l = me(e) === "Home", c = me(e) === "End", f = me(e) === "Enter", v = me(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      a || c ? (e.preventDefault(), this.focusLastElement()) : (o || l) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let b = this.adapter.getFocusedElementIndex();
    if (b === -1 && (b = r, b < 0))
      return;
    let y;
    if (this.isVertical_ && o || !this.isVertical_ && s)
      this.preventDefaultEvent(e), y = this.focusNextElement(b);
    else if (this.isVertical_ && a || !this.isVertical_ && n)
      this.preventDefaultEvent(e), y = this.focusPrevElement(b);
    else if (l)
      this.preventDefaultEvent(e), y = this.focusFirstElement();
    else if (c)
      this.preventDefaultEvent(e), y = this.focusLastElement();
    else if ((f || v) && i) {
      const k = e.target;
      if (k && k.tagName === "A" && f)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(b, !0);
    }
    this.focusedItemIndex_ = b, y !== void 0 && (this.setTabindexAtIndex_(y), this.focusedItemIndex_ = y);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, i, r) {
    e !== W.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, i, r), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
  }
  /**
   * Focuses the next element on the list.
   */
  focusNextElement(e) {
    const i = this.adapter.getListItemCount();
    let r = e + 1;
    if (r >= i)
      if (this.wrapFocus_)
        r = 0;
      else
        return e;
    return this.adapter.focusItemAtIndex(r), r;
  }
  /**
   * Focuses the previous element on the list.
   */
  focusPrevElement(e) {
    let i = e - 1;
    if (i < 0)
      if (this.wrapFocus_)
        i = this.adapter.getListItemCount() - 1;
      else
        return e;
    return this.adapter.focusItemAtIndex(i), i;
  }
  focusFirstElement() {
    return this.adapter.focusItemAtIndex(0), 0;
  }
  focusLastElement() {
    const e = this.adapter.getListItemCount() - 1;
    return this.adapter.focusItemAtIndex(e), e;
  }
  /**
   * @param itemIndex Index of the list item
   * @param isEnabled Sets the list item to enabled or disabled.
   */
  setEnabled(e, i) {
    this.isIndexValid_(e) && this.adapter.setDisabledStateForElementIndex(e, !i);
  }
  /**
   * Ensures that preventDefault is only called if the containing element
   * doesn't consume the event, and it will cause an unintended scroll.
   */
  preventDefaultEvent(e) {
    const r = `${e.target.tagName}`.toLowerCase();
    Kr.indexOf(r) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, i = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== W.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), i && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, i = !0) {
    const r = pt(this.selectedIndex_), n = Wr(r, e);
    if (!(!n.removed.length && !n.added.length)) {
      for (const a of n.removed)
        i && this.adapter.setSelectedStateForElementIndex(a, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(a, !1);
      for (const a of n.added)
        i && this.adapter.setSelectedStateForElementIndex(a, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(a, !0);
      this.selectedIndex_ = e, this.adapter.notifySelected(e, n);
    }
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(e) {
    this.selectedIndex_ === W.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, Ke.ARIA_CURRENT));
    const i = this.ariaCurrentAttrValue_ !== null, r = i ? Ke.ARIA_CURRENT : Ke.ARIA_SELECTED;
    this.selectedIndex_ !== W.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, r, "false");
    const n = i ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, r, n);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === W.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== W.UNSET_INDEX ? e = this.selectedIndex_ : $e(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
  }
  isIndexValid_(e) {
    if (e instanceof Set) {
      if (!this.isMulti_)
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      if (e.size === 0)
        return !0;
      {
        let i = !1;
        for (const r of e)
          if (i = this.isIndexInRange_(r), i)
            break;
        return i;
      }
    } else if (typeof e == "number") {
      if (this.isMulti_)
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + e);
      return e === W.UNSET_INDEX || this.isIndexInRange_(e);
    } else
      return !1;
  }
  isIndexInRange_(e) {
    const i = this.adapter.getListItemCount();
    return e >= 0 && e < i;
  }
  /**
   * Sets selected index on user action, toggles checkbox / radio based on
   * toggleCheckbox value. User interaction should not toggle list item(s) when
   * disabled.
   */
  setSelectedIndexOnAction_(e, i, r) {
    if (this.adapter.getDisabledStateForElementIndex(e))
      return;
    let n = e;
    this.isMulti_ && (n = /* @__PURE__ */ new Set([e])), this.isIndexValid_(n) && (this.isMulti_ ? this.toggleMultiAtIndex(e, r, i) : i || r ? this.setSingleSelectionAtIndex_(e, i) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(W.UNSET_INDEX), i && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, i, r = !0) {
    let n = !1;
    i === void 0 ? n = !this.adapter.getSelectedStateForElementIndex(e) : n = i;
    const a = pt(this.selectedIndex_);
    n ? a.add(e) : a.delete(e), this.setMultiSelectionAtIndex_(a, r);
  }
}
function Zr(t, e = 50) {
  let i;
  return function(r = !0) {
    clearTimeout(i), i = setTimeout(() => {
      t(r);
    }, e);
  };
}
const Ze = (t) => t.hasAttribute("mwc-list-item");
function Xr() {
  const t = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), t();
}
class Q extends Tt {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = zt, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = Zr(this.layout.bind(this));
    this.debouncedLayout = (i = !0) => {
      Xr.call(this), e(i);
    };
  }
  // tslint:disable:ban-ts-ignore
  async getUpdateComplete() {
    const e = await super.getUpdateComplete();
    return await this.itemsReady, e;
  }
  get items() {
    return this.items_;
  }
  updateItems() {
    var e;
    const i = (e = this.assignedElements) !== null && e !== void 0 ? e : [], r = [];
    for (const s of i)
      Ze(s) && (r.push(s), s._managingList = this), s.hasAttribute("divider") && !s.hasAttribute("role") && s.setAttribute("role", "separator");
    this.items_ = r;
    const n = /* @__PURE__ */ new Set();
    if (this.items_.forEach((s, o) => {
      this.itemRoles ? s.setAttribute("role", this.itemRoles) : s.removeAttribute("role"), s.selected && n.add(o);
    }), this.multi)
      this.select(n);
    else {
      const s = n.size ? n.entries().next().value[1] : -1;
      this.select(s);
    }
    const a = new Event("items-updated", { bubbles: !0, composed: !0 });
    this.dispatchEvent(a);
  }
  get selected() {
    const e = this.index;
    if (!$e(e))
      return e === -1 ? null : this.items[e];
    const i = [];
    for (const r of e)
      i.push(this.items[r]);
    return i;
  }
  get index() {
    return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
  }
  render() {
    const e = this.innerRole === null ? void 0 : this.innerRole, i = this.innerAriaLabel === null ? void 0 : this.innerAriaLabel, r = this.rootTabbable ? "0" : "-1";
    return d`
      <!-- @ts-ignore -->
      <ul
          tabindex=${r}
          role="${re(e)}"
          aria-label="${re(i)}"
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
    var e;
    const i = (e = this.assignedElements) !== null && e !== void 0 ? e : [];
    return this.emptyMessage !== void 0 && i.length === 0 ? d`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      ` : null;
  }
  firstUpdated() {
    super.firstUpdated(), this.items.length || (this.mdcFoundation.setMulti(this.multi), this.layout());
  }
  onFocusIn(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const i = this.getIndexOfTarget(e);
      this.mdcFoundation.handleFocusIn(e, i);
    }
  }
  onFocusOut(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const i = this.getIndexOfTarget(e);
      this.mdcFoundation.handleFocusOut(e, i);
    }
  }
  onKeydown(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const i = this.getIndexOfTarget(e), r = e.target, n = Ze(r);
      this.mdcFoundation.handleKeydown(e, n, i);
    }
  }
  onRequestSelected(e) {
    if (this.mdcFoundation) {
      let i = this.getIndexOfTarget(e);
      if (i === -1 && (this.layout(), i = this.getIndexOfTarget(e), i === -1) || this.items[i].disabled)
        return;
      const n = e.detail.selected, a = e.detail.source;
      this.mdcFoundation.handleSingleSelection(i, a === "interaction", n), e.stopPropagation();
    }
  }
  getIndexOfTarget(e) {
    const i = this.items, r = e.composedPath();
    for (const n of r) {
      let a = -1;
      if (Ir(n) && Ze(n) && (a = i.indexOf(n)), a !== -1)
        return a;
    }
    return -1;
  }
  createAdapter() {
    return this.mdcAdapter = {
      getListItemCount: () => this.mdcRoot ? this.items.length : 0,
      getFocusedElementIndex: this.getFocusedItemIndex,
      getAttributeForElementIndex: (e, i) => {
        if (!this.mdcRoot)
          return "";
        const n = this.items[e];
        return n ? n.getAttribute(i) : "";
      },
      setAttributeForElementIndex: (e, i, r) => {
        if (!this.mdcRoot)
          return;
        const n = this.items[e];
        n && n.setAttribute(i, r);
      },
      focusItemAtIndex: (e) => {
        const i = this.items[e];
        i && i.focus();
      },
      setTabIndexForElementIndex: (e, i) => {
        const r = this.items[e];
        r && (r.tabindex = i);
      },
      notifyAction: (e) => {
        const i = { bubbles: !0, composed: !0 };
        i.detail = { index: e };
        const r = new CustomEvent("action", i);
        this.dispatchEvent(r);
      },
      notifySelected: (e, i) => {
        const r = { bubbles: !0, composed: !0 };
        r.detail = { index: e, diff: i };
        const n = new CustomEvent("selected", r);
        this.dispatchEvent(n);
      },
      isFocusInsideList: () => Lr(this),
      isRootFocused: () => {
        const e = this.mdcRoot;
        return e.getRootNode().activeElement === e;
      },
      setDisabledStateForElementIndex: (e, i) => {
        const r = this.items[e];
        r && (r.disabled = i);
      },
      getDisabledStateForElementIndex: (e) => {
        const i = this.items[e];
        return i ? i.disabled : !1;
      },
      setSelectedStateForElementIndex: (e, i) => {
        const r = this.items[e];
        r && (r.selected = i);
      },
      getSelectedStateForElementIndex: (e) => {
        const i = this.items[e];
        return i ? i.selected : !1;
      },
      setActivatedStateForElementIndex: (e, i) => {
        const r = this.items[e];
        r && (r.activated = i);
      }
    }, this.mdcAdapter;
  }
  selectUi(e, i = !1) {
    const r = this.items[e];
    r && (r.selected = !0, r.activated = i);
  }
  deselectUi(e) {
    const i = this.items[e];
    i && (i.selected = !1, i.activated = !1);
  }
  select(e) {
    this.mdcFoundation && this.mdcFoundation.setSelectedIndex(e);
  }
  toggle(e, i) {
    this.multi && this.mdcFoundation.toggleMultiAtIndex(e, i);
  }
  onListItemConnected(e) {
    const i = e.target;
    this.layout(this.items.indexOf(i) === -1);
  }
  layout(e = !0) {
    e && this.updateItems();
    const i = this.items[0];
    for (const r of this.items)
      r.tabindex = -1;
    i && (this.noninteractive ? this.previousTabindex || (this.previousTabindex = i) : i.tabindex = 0), this.itemsReadyResolver();
  }
  getFocusedItemIndex() {
    if (!this.mdcRoot || !this.items.length)
      return -1;
    const e = Ti();
    if (!e.length)
      return -1;
    for (let i = e.length - 1; i >= 0; i--) {
      const r = e[i];
      if (Ze(r))
        return this.items.indexOf(r);
    }
    return -1;
  }
  focusItemAtIndex(e) {
    for (const i of this.items)
      if (i.tabindex === 0) {
        i.tabindex = -1;
        break;
      }
    this.items[e].tabindex = 0, this.items[e].focus();
  }
  focus() {
    const e = this.mdcRoot;
    e && e.focus();
  }
  blur() {
    const e = this.mdcRoot;
    e && e.blur();
  }
}
u([
  p({ type: String })
], Q.prototype, "emptyMessage", void 0);
u([
  R(".mdc-deprecated-list")
], Q.prototype, "mdcRoot", void 0);
u([
  wi("", !0, "*")
], Q.prototype, "assignedElements", void 0);
u([
  wi("", !0, '[tabindex="0"]')
], Q.prototype, "tabbableElements", void 0);
u([
  p({ type: Boolean }),
  oe(function(t) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(t);
  })
], Q.prototype, "activatable", void 0);
u([
  p({ type: Boolean }),
  oe(function(t, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(t), e !== void 0 && this.layout();
  })
], Q.prototype, "multi", void 0);
u([
  p({ type: Boolean }),
  oe(function(t) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(t);
  })
], Q.prototype, "wrapFocus", void 0);
u([
  p({ type: String }),
  oe(function(t, e) {
    e !== void 0 && this.updateItems();
  })
], Q.prototype, "itemRoles", void 0);
u([
  p({ type: String })
], Q.prototype, "innerRole", void 0);
u([
  p({ type: String })
], Q.prototype, "innerAriaLabel", void 0);
u([
  p({ type: Boolean })
], Q.prototype, "rootTabbable", void 0);
u([
  p({ type: Boolean, reflect: !0 }),
  oe(function(t) {
    var e, i;
    if (t) {
      const r = (i = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && i !== void 0 ? i : null;
      this.previousTabindex = r, r && r.setAttribute("tabindex", "-1");
    } else !t && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], Q.prototype, "noninteractive", void 0);
var Qr = Object.defineProperty, Yr = Object.getOwnPropertyDescriptor, we = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Yr(e, i) : e, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (n = (r ? s(e, i, n) : s(n)) || n);
  return r && n && Qr(e, i, n), n;
};
function wt(t) {
  return !t.closest("filtered-list") || !t.parentElement || t.parentElement instanceof se ? t : wt(t.parentElement);
}
function Jr(t, e) {
  const i = t.innerText + `
`, r = Array.from(t.children).map((o) => o.innerText).join(`
`), n = t.value, a = (i + r + n).toUpperCase(), s = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  s.length === 1 && s[0] === "" || s.every((o) => new RegExp(
    `*${o}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(a)) ? wt(t).classList.remove("hidden") : wt(t).classList.add("hidden");
}
let se = class extends Q {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((t) => t instanceof Ee);
  }
  get isAllSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof Ee).every((t) => t.selected);
  }
  get isSomeSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof Ee).some((t) => t.selected);
  }
  onCheckAll() {
    const t = !this.isAllSelected;
    this.items.filter((e) => !e.disabled && !e.classList.contains("hidden")).forEach((e) => e.selected = t);
  }
  onFilterInput() {
    Array.from(
      this.querySelectorAll(
        "mwc-list-item, mwc-check-list-item, mwc-radio-list-item"
      )
    ).forEach(
      (t) => Jr(t, this.searchField.value)
    );
  }
  onListItemConnected(t) {
    super.onListItemConnected(t), this.requestUpdate();
  }
  update(t) {
    super.update(t), this.onFilterInput();
  }
  renderCheckAll() {
    return this.existCheckListItem && !this.disableCheckAll ? d`<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
      this.onCheckAll();
    }}
          ></mwc-checkbox
        ></mwc-formfield>` : d``;
  }
  render() {
    return d`<div id="tfcontainer">
        <abbr title="${this.searchFieldLabel ?? g("filter")}"
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
se.styles = te`
    ${sr(lr.styles)}

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
we([
  p({ type: String })
], se.prototype, "searchFieldLabel", 2);
we([
  p({ type: Boolean })
], se.prototype, "disableCheckAll", 2);
we([
  C()
], se.prototype, "existCheckListItem", 1);
we([
  C()
], se.prototype, "isAllSelected", 1);
we([
  C()
], se.prototype, "isSomeSelected", 1);
we([
  R("mwc-textfield")
], se.prototype, "searchField", 2);
se = we([
  X("filtered-list")
], se);
function ge(t, e, i) {
  const r = t.createElementNS(t.documentElement.namespaceURI, e);
  return Object.entries(i).filter(([n, a]) => a !== null).forEach(([n, a]) => r.setAttribute(n, a)), r;
}
function kt(t, e) {
  const i = t.cloneNode(!1);
  return Object.entries(e).forEach(([r, n]) => {
    n === null ? i.removeAttribute(r) : i.setAttribute(r, n);
  }), i;
}
var en = Object.defineProperty, tn = Object.getOwnPropertyDescriptor, ie = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? tn(e, i) : e, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (n = (r ? s(e, i, n) : s(n)) || n);
  return r && n && en(e, i, n), n;
};
let K = class extends ur {
  constructor() {
    super(), this.nullable = !1, this.multipliers = [null, ""], this.multiplierIndex = 0, this.unit = "", this.isNull = !1, this.defaultValue = "", this.reservedValues = [], this.disabledSwitch = !1, this.nulled = null, this.disabledSwitch = this.hasAttribute("disabled");
  }
  get multiplier() {
    return this.unit == "" ? null : this.multipliers[this.multiplierIndex] ?? this.multipliers[0] ?? null;
  }
  set multiplier(t) {
    const e = this.multipliers.indexOf(t);
    e >= 0 && (this.multiplierIndex = e), this.suffix = (this.multiplier ?? "") + this.unit;
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(t) {
    !this.nullable || t === this.isNull || (this.isNull = t, this.null ? this.disable() : this.enable());
  }
  get maybeValue() {
    return this.null ? null : this.value;
  }
  set maybeValue(t) {
    t === null ? this.null = !0 : (this.null = !1, this.value = t);
  }
  selectMultiplier(t) {
    this.multiplier = this.multipliers[t.detail.index];
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
    return this.reservedValues && this.reservedValues.some((t) => t === this.value) ? (this.setCustomValidity(g("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? d`<div style="position:relative;">
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
      </div>` : d``;
  }
  renderMulplierList() {
    return d`${this.multipliers.map(
      (t) => d`<mwc-list-item ?selected=${t === this.multiplier}
          >${t === null ? g("textfield.noMultiplier") : t}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? d`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : d``;
  }
  render() {
    return d`
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
ie([
  p({ type: Boolean })
], K.prototype, "nullable", 2);
ie([
  p({ type: Array })
], K.prototype, "multipliers", 2);
ie([
  p({ type: String })
], K.prototype, "multiplier", 1);
ie([
  p({ type: String })
], K.prototype, "unit", 2);
ie([
  C()
], K.prototype, "null", 1);
ie([
  p({ type: String })
], K.prototype, "maybeValue", 1);
ie([
  p({ type: String })
], K.prototype, "defaultValue", 2);
ie([
  p({ type: Array })
], K.prototype, "reservedValues", 2);
ie([
  R("mwc-switch")
], K.prototype, "nullSwitch", 2);
ie([
  R("mwc-menu")
], K.prototype, "multiplierMenu", 2);
ie([
  R("mwc-icon-button")
], K.prototype, "multiplierButton", 2);
K = ie([
  X("wizard-textfield")
], K);
var rn = Object.defineProperty, nn = Object.getOwnPropertyDescriptor, ke = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? nn(e, i) : e, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (n = (r ? s(e, i, n) : s(n)) || n);
  return r && n && rn(e, i, n), n;
};
let le = class extends pr {
  constructor() {
    super(), this.nullable = !1, this.isNull = !1, this.defaultValue = "", this.reservedValues = [], this.disabledSwitch = !1, this.nulled = null, this.disabledSwitch = this.hasAttribute("disabled");
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(t) {
    !this.nullable || t === this.isNull || (this.isNull = t, this.null ? this.disable() : this.enable());
  }
  get maybeValue() {
    return this.null ? null : this.value;
  }
  set maybeValue(t) {
    t === null ? this.null = !0 : (this.null = !1, this.value = t);
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
    return this.nullable ? d`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : d``;
  }
  render() {
    return d`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
ke([
  p({ type: Boolean })
], le.prototype, "nullable", 2);
ke([
  C()
], le.prototype, "null", 1);
ke([
  p({ type: String })
], le.prototype, "maybeValue", 1);
ke([
  p({ type: String })
], le.prototype, "defaultValue", 2);
ke([
  p({ type: Array })
], le.prototype, "reservedValues", 2);
ke([
  R("mwc-switch")
], le.prototype, "nullSwitch", 2);
le = ke([
  X("wizard-select")
], le);
var an = Object.defineProperty, sn = Object.getOwnPropertyDescriptor, Y = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? sn(e, i) : e, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (n = (r ? s(e, i, n) : s(n)) || n);
  return r && n && an(e, i, n), n;
};
let B = class extends ve {
  constructor() {
    super(...arguments), this.label = "", this.helper = "", this.nullable = !1, this.defaultChecked = !1, this.disabled = !1, this.isNull = !1, this.initChecked = !1, this.deactivateCheckbox = !1, this.nulled = null;
  }
  get maybeValue() {
    return this.null ? null : this.checked ? "true" : "false";
  }
  set maybeValue(t) {
    t === null ? this.null = !0 : (this.null = !1, this.checked = t === "true");
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(t) {
    !this.nullable || t === this.isNull || (this.isNull = t, this.null ? this.disable() : this.enable());
  }
  get checked() {
    return this.checkbox?.checked ?? this.initChecked;
  }
  set checked(t) {
    this.checkbox ? this.checkbox.checked = t : this.initChecked = t;
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
    return this.nullable ? d`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : d``;
  }
  render() {
    return d`
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
Y([
  p({ type: String })
], B.prototype, "label", 2);
Y([
  p({ type: String })
], B.prototype, "helper", 2);
Y([
  p({ type: Boolean })
], B.prototype, "nullable", 2);
Y([
  p({ type: Boolean })
], B.prototype, "defaultChecked", 2);
Y([
  p({ type: String })
], B.prototype, "maybeValue", 1);
Y([
  p({ type: Boolean })
], B.prototype, "disabled", 2);
Y([
  C()
], B.prototype, "null", 1);
Y([
  C()
], B.prototype, "checked", 1);
Y([
  C()
], B.prototype, "deactivateCheckbox", 2);
Y([
  C()
], B.prototype, "formfieldLabel", 1);
Y([
  R("mwc-switch")
], B.prototype, "nullSwitch", 2);
Y([
  R("mwc-checkbox")
], B.prototype, "checkbox", 2);
B = Y([
  X("wizard-checkbox")
], B);
function on(t) {
  return typeof t == "function";
}
function J(t) {
  return t instanceof K || t instanceof le || t instanceof B ? t.maybeValue : t.value ?? null;
}
function Mt(t, e) {
  if (!t)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const i = on(t) ? t : () => t;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: i, ...e?.detail }
  });
}
function Vt(t) {
  return Mt(t, { detail: { subwizard: !0 } });
}
function it(t) {
  const e = t.documentElement;
  return (e.getAttribute("version") ?? "2003") + (e.getAttribute("revision") ?? "") + (e.getAttribute("release") ?? "");
}
function Pi(t) {
  const e = t.getAttribute("name");
  return e || void 0;
}
function G(t) {
  const e = t.split(">"), i = e.pop() ?? "";
  return [e.join(">"), i];
}
const T = ":not(*)";
function cn(t) {
  return `${t.getAttribute("version")}	${t.getAttribute("revision")}`;
}
function dn(t, e) {
  const [i, r] = e.split("	");
  return !i || !r ? T : `${t}[version="${i}"][revision="${r}"]`;
}
function Yt(t) {
  return w(t.parentElement) + ">" + t.getAttribute("connectivityNode");
}
function Jt(t, e) {
  const [i, r] = G(e), n = P[t].parents.flatMap(
    (a) => H(a, i).split(",")
  );
  return F(
    n,
    [">"],
    [`${t}[connectivityNode="${r}"]`]
  ).map((a) => a.join("")).join(",");
}
function ln(t) {
  const [e, i, r, n, a, s] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((o) => t.getAttribute(o));
  return e === "None" ? `${w(t.parentElement)}>(${n} ${s} ${a})` : `${e} ${i || "(Client)"}/${r ?? ""} ${n} ${a ?? ""}`;
}
function un(t, e) {
  if (e.endsWith(")")) {
    const [b, y] = G(e), [k, $, N] = y.substring(1, y.length - 1).split(" ");
    if (!k || !$) return T;
    const D = P[t].parents.flatMap(
      (j) => H(j, b).split(",")
    );
    return F(
      D,
      [">"],
      [`${t}[iedName="None"][lnClass="${k}"][lnType="${$}"][lnInst="${N}"]`]
    ).map((j) => j.join("")).join(",");
  }
  const [i, r, n, a, s] = e.split(/[ /]/);
  if (!i || !r || !a) return T;
  const [
    o,
    l,
    c,
    f,
    v
  ] = [
    [`[iedName="${i}"]`],
    r === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${r}"]`],
    n ? [`[prefix="${n}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    s ? [`[lnInst="${s}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return F(
    [t],
    o,
    l,
    c,
    f,
    v
  ).map((b) => b.join("")).join(",");
}
function pn(t) {
  return `${w(t.parentElement)}>${t.getAttribute(
    "iedName"
  )} ${t.getAttribute("apName")}`;
}
function mn(t, e) {
  const [i, r] = G(e), [n, a] = r.split(" ");
  return `${H(
    "IED",
    i
  )}>${t}[iedName="${n}"][apName="${a}"]`;
}
function hn(t) {
  return `${w(t.parentElement)}>${t.getAttribute("associationID") ?? ""}`;
}
function fn(t, e) {
  const [i, r] = G(e);
  return r ? `${H(
    "Server",
    i
  )}>${t}[associationID="${r}"]` : T;
}
function bn(t) {
  return `${w(t.closest("IED"))}>>${t.getAttribute("inst")}`;
}
function gn(t, e) {
  const [i, r] = e.split(">>");
  return r ? `IED[name="${i}"] ${t}[inst="${r}"]` : T;
}
function vn(t) {
  const e = t.textContent, [i, r, n, a, s] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => t.getAttribute(o));
  return `${w(t.parentElement)}>${e} ${i || ""} ${r || ""}/${n ?? ""} ${a ?? ""} ${s ?? ""}`;
}
function yn(t, e) {
  const [i, r] = G(e), [n, a, s, o, l, c] = r.split(/[ /]/), [
    f,
    v,
    b,
    y,
    k,
    $
  ] = [
    P[t].parents.flatMap(
      (N) => H(N, i).split(",")
    ),
    [`${n}`],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${l}"]`],
    c ? [`[lnInst="${c}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return F(
    f,
    [">"],
    [t],
    v,
    b,
    y,
    k,
    $
  ).map((N) => N.join("")).join(",");
}
function Sn(t) {
  const [e, i, r, n, a, s, o, l] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((f) => t.getAttribute(f)), c = `${e}/${i ?? ""} ${r} ${n ?? ""}.${a} ${s || ""}`;
  return `${w(t.parentElement)}>${c} (${o}${l ? " [" + l + "]" : ""})`;
}
function xn(t, e) {
  const [i, r] = G(e), [n, a, s, o] = r.split(/[ /.]/), l = r.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), c = l && l[1] ? l[1] : "", f = l && l[2] ? l[2] : "", v = r.match(/\(([A-Z]{2})/), b = r.match(/ \[([0-9]{1,2})\]/), y = v && v[1] ? v[1] : "", k = b && b[1] ? b[1] : "", [
    $,
    N,
    D,
    j,
    ce,
    pe,
    st,
    ot,
    ct
  ] = [
    P[t].parents.flatMap(
      (Le) => H(Le, i).split(",")
    ),
    [`[ldInst="${n}"]`],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    o ? [`[lnInst="${o}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${c}"]`],
    f ? [`[daName="${f}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${y}"]`],
    k ? [`[ix="${k}"]`] : [":not([ix])", '[ix=""]']
  ];
  return F(
    $,
    [">"],
    [t],
    N,
    D,
    j,
    ce,
    pe,
    st,
    ot,
    ct
  ).map((Le) => Le.join("")).join(",");
}
function An(t) {
  if (!t.parentElement) return NaN;
  const e = w(t.parentElement), i = t.getAttribute("iedName"), r = t.getAttribute("intAddr"), n = Array.from(
    t.parentElement.querySelectorAll(`ExtRef[intAddr="${r}"]`)
  ).indexOf(t);
  if (r) return `${e}>${r}[${n}]`;
  const [
    a,
    s,
    o,
    l,
    c,
    f,
    v,
    b,
    y,
    k,
    $,
    N
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
  ].map((ce) => t.getAttribute(ce)), D = N ? `${v}:${N} ${b ?? ""}/${y ?? ""} ${k ?? ""} ${$ ?? ""}` : "", j = `${i} ${a}/${s ?? ""} ${o} ${l ?? ""} ${c} ${f || ""}`;
  return `${e}>${D ? D + " " : ""}${j}${r ? `@${r}` : ""}`;
}
function wn(t, e) {
  const [i, r] = G(e), n = P[t].parents.flatMap(
    (Te) => H(Te, i).split(",")
  );
  if (r.endsWith("]")) {
    const [Te] = r.split("["), nr = [`[intAddr="${Te}"]`];
    return F(n, [">"], [t], nr).map((ar) => ar.join("")).join(",");
  }
  let a, s, o, l, c, f, v, b, y, k, $, N, D, j;
  !r.includes(":") && !r.includes("@") ? [a, s, o, l, c, f, v] = r.split(/[ /]/) : r.includes(":") && !r.includes("@") ? [
    b,
    y,
    k,
    $,
    N,
    D,
    a,
    s,
    o,
    l,
    c,
    f,
    v
  ] = r.split(/[ /:]/) : !r.includes(":") && r.includes("@") ? [a, s, o, l, c, f, v, j] = r.split(/[ /@]/) : [
    b,
    y,
    k,
    $,
    N,
    D,
    a,
    s,
    o,
    l,
    c,
    f,
    v,
    j
  ] = r.split(/[ /:@]/);
  const [
    ce,
    pe,
    st,
    ot,
    ct,
    Le,
    Xi,
    Qi,
    Yi,
    Ji,
    er,
    tr,
    ir,
    rr
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])"],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    l ? [`[lnClass="${l}"]`] : [":not([lnClass])"],
    c ? [`[lnInst="${c}"]`] : [":not([lnInst])", '[lnInst=""]'],
    f ? [`[doName="${f}"]`] : [":not([doName])"],
    v ? [`[daName="${v}"]`] : [":not([daName])", '[daName=""]'],
    b ? [`[serviceType="${b}"]`] : [":not([serviceType])", '[serviceType=""]'],
    y ? [`[srcCBName="${y}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    k ? [`[srcLDInst="${k}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    $ ? [`[srcPrefix="${$}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    N ? [`[srcLNClass="${N}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    D ? [`[srcLNInst="${D}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    j ? [`[intAddr="${j}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return F(
    n,
    [">"],
    [t],
    ce,
    pe,
    st,
    ot,
    ct,
    Le,
    Xi,
    Qi,
    Yi,
    Ji,
    er,
    tr,
    ir,
    rr
  ).map((Te) => Te.join("")).join(",");
}
function kn(t) {
  const [e, i, r] = ["prefix", "lnClass", "inst"].map(
    (n) => t.getAttribute(n)
  );
  return `${w(t.parentElement)}>${e ?? ""} ${i} ${r}`;
}
function Cn(t, e) {
  const [i, r] = G(e), n = P[t].parents.flatMap(
    (v) => H(v, i).split(",")
  ), [a, s, o] = r.split(" ");
  if (!s) return T;
  const [l, c, f] = [
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    [`[inst="${o}"]`]
  ];
  return F(
    n,
    [">"],
    [t],
    l,
    c,
    f
  ).map((v) => v.join("")).join(",");
}
function _n(t) {
  const [e, i, r, n, a, s] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => t.getAttribute(o));
  return `${w(t.parentElement)}>${i} ${e || ""} ${r}/${n ?? ""} ${a} ${s}`;
}
function En(t, e) {
  const [i, r] = G(e), n = P[t].parents.flatMap(
    (D) => H(D, i).split(",")
  ), [a, s, o, l, c, f] = r.split(/[ /]/), [
    v,
    b,
    y,
    k,
    $,
    N
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])", '[iedName=""]'],
    s ? [`[apRef="${s}"]`] : [":not([apRef])", '[apRef=""]'],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    l ? [`[prefix="${l}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    f ? [`[lnInst="${f}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return F(
    n,
    [">"],
    [t],
    v,
    b,
    y,
    k,
    $,
    N
  ).map((D) => D.join("")).join(",");
}
function ei(t) {
  const [e, i] = ["name", "ix"].map((r) => t.getAttribute(r));
  return `${w(t.parentElement)}>${e}${i ? "[" + i + "]" : ""}`;
}
function Ct(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [r, n] = G(e), [a, s, o, l] = n.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!s) return T;
  if (i === 0) return `${t}[name="${s}"]`;
  const c = P[t].parents.flatMap(
    (b) => b === "SDI" ? Ct(b, r, i - 1).split(",") : H(b, r).split(",")
  ).filter((b) => !b.startsWith(T));
  if (c.length === 0) return T;
  const [f, v] = [
    [`[name="${s}"]`],
    l ? [`[ix="${l}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return F(
    c,
    [">"],
    [t],
    f,
    v
  ).map((b) => b.join("")).join(",");
}
function In(t) {
  if (!t.parentElement) return NaN;
  const e = t.getAttribute("sGroup"), i = Array.from(t.parentElement.children).filter((r) => r.getAttribute("sGroup") === e).findIndex((r) => r.isSameNode(t));
  return `${w(t.parentElement)}>${e ? e + "." : ""} ${i}`;
}
function Dn(t, e) {
  const [i, r] = G(e), [n, a] = r.split(" "), s = parseFloat(a), o = P[t].parents.flatMap(
    (f) => H(f, i).split(",")
  ), [l, c] = [
    n ? [`[sGroup="${n}"]`] : [""],
    s ? [`:nth-child(${s + 1})`] : [""]
  ];
  return F(
    o,
    [">"],
    [t],
    l,
    c
  ).map((f) => f.join("")).join(",");
}
function Nn(t) {
  const [e, i] = ["iedName", "apName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function Ln(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? T : `${t}[iedName="${i}"][apName="${r}"]`;
}
function ti(t) {
  const [e, i] = ["ldInst", "cbName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function ii(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? T : `${t}[ldInst="${i}"][cbName="${r}"]`;
}
function Tn(t) {
  if (!t.parentElement) return NaN;
  if (!t.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = t.getAttribute("type");
  return t.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${w(t.parentElement)}>${e}`;
}
function Rn(t, e) {
  const [i, r] = G(e), [n, a] = [
    P[t].parents.flatMap(
      (s) => H(s, i).split(",")
    ),
    r ? [`[type="${r}"]`] : [""]
  ];
  return F(n, [">"], [t], a).map((s) => s.join("")).join(",");
}
function Pn(t) {
  if (!t.parentElement) return NaN;
  const e = t.parentElement, i = t.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${w(t.parentElement)}>${i}`;
  const r = Array.from(t.parentElement.children).filter((n) => n.getAttribute("type") === i).findIndex((n) => n.isSameNode(t));
  return `${w(t.parentElement)}>${i} [${r}]`;
}
function $n(t, e) {
  const [i, r] = G(e), [n] = r.split(" "), a = r && r.match(/\[([0-9]+)\]/) && r.match(/\[([0-9]+)\]/)[1] ? parseFloat(r.match(/\[([0-9]+)\]/)[1]) : NaN, [s, o, l] = [
    P[t].parents.flatMap(
      (c) => H(c, i).split(",")
    ),
    [`[type="${n}"]`],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return F(
    s,
    [">"],
    [t],
    o,
    l
  ).map((c) => c.join("")).join(",");
}
function On(t) {
  return `${w(t.parentElement)}>${t.getAttribute("ord")}`;
}
function zn(t, e) {
  const [i, r] = G(e);
  return `${H("EnumType", i)}>${t}[ord="${r}"]`;
}
function Mn(t) {
  return `${w(t.parentElement)}>${t.getAttribute("type") || "8-MMS"}	${t.textContent}`;
}
function Vn(t, e) {
  const [i, r] = G(e), [n, a] = r.split("	"), [s] = [
    P[t].parents.flatMap(
      (o) => H(o, i).split(",")
    )
  ];
  return F(
    s,
    [">"],
    [t],
    [`[type="${n}"]`],
    [">"],
    [a]
  ).map((o) => o.join("")).join(",");
}
function Hn() {
  return "";
}
function Fn() {
  return ":root";
}
function A(t) {
  return t.parentElement.tagName === "SCL" ? t.getAttribute("name") : `${w(t.parentElement)}>${t.getAttribute("name")}`;
}
function x(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [r, n] = G(e);
  if (!n) return T;
  if (i === 0) return `${t}[name="${n}"]`;
  const a = P[t].parents;
  if (!a) return T;
  const s = a.flatMap(
    (o) => P[o].selector === P.Substation.selector ? x(o, r, i - 1).split(",") : H(o, r).split(",")
  ).filter((o) => !o.startsWith(T));
  return s.length === 0 ? T : F(s, [">"], [t], [`[name="${n}"]`]).map((o) => o.join("")).join(",");
}
function m(t) {
  return w(t.parentElement).toString();
}
function h(t, e) {
  const i = P[t].parents;
  if (!i) return T;
  const r = i.flatMap((n) => H(n, e).split(",")).filter((n) => !n.startsWith(T));
  return r.length === 0 ? T : F(r, [">"], [t]).map((n) => n.join("")).join(",");
}
function Xe(t) {
  return `#${t.id}`;
}
function Qe(t, e) {
  const i = e.replace(/^#/, "");
  return i ? `${t}[id="${i}"]` : T;
}
const $i = [
  "TransformerWinding",
  "ConductingEquipment"
], Oi = [
  "GeneralEquipment",
  "PowerTransformer",
  ...$i
], _t = ["Substation", "VoltageLevel", "Bay"], zi = ["Process", "Line"], Mi = ["EqSubFunction", "EqFunction"], Gn = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Oi,
  ..._t,
  ...zi,
  ...Mi
], Vi = ["ConnectivityNode", ...Gn], Bn = ["GOOSESecurity", "SMVSecurity"], qn = ["SubNetwork", ...Bn, ...Vi], Un = ["BDA", "DA"], jn = ["SampledValueControl", "GSEControl"], Wn = ["LogControl", "ReportControl"], Kn = [...jn, ...Wn], Zn = ["GSE", "SMV"], Xn = [
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
  ...Kn,
  ...Zn,
  ...Un
], Se = ["LN0", "LN"], Qn = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Yn = ["Subject", "IssuerName"], Jn = ["MinTime", "MaxTime"], ea = ["LNodeType", "DOType", "DAType", "EnumType"], ta = [
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
], ia = ["DynDataSet", "ConfDataSet"], ra = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...ia
], na = ["ConfLogControl", "ConfSigRef"], aa = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], sa = ["SCL", ...qn, ...Xn, ...ea], Hi = [
  ...sa,
  ...Qn,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Yn,
  ...Jn,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...Se,
  ...ta,
  "DynAssociation",
  "SettingGroups",
  ...ra,
  ...na,
  ...aa,
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
], oa = new Set(Hi);
function Ht(t) {
  return oa.has(t);
}
const rt = ["Text", "Private"], fe = [...rt], L = [...rt], Ye = [...rt], ri = [...L, "Val"], Fi = [...fe, "LNode"], be = [...Fi], Et = [...be], mt = [
  ...be,
  "PowerTransformer",
  "GeneralEquipment"
], ni = [
  ...Et,
  "Terminal"
], ai = [...L, "Address"], Gi = [...fe], si = [...Gi, "IEDName"], oi = [
  ...L,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], ci = [
  ...be,
  "GeneralEquipment",
  "Function"
], di = [...Gi, "TrgOps"], li = [
  ...be,
  "GeneralEquipment",
  "EqSubFunction"
], P = {
  AccessControl: {
    identity: m,
    selector: h,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: A,
    selector: x,
    parents: ["IED"],
    children: [
      ...fe,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: m,
    selector: h,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: hn,
    selector: fn,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: m,
    selector: h,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: A,
    selector: x,
    parents: ["DAType"],
    children: [...ri]
  },
  BitRate: {
    identity: m,
    selector: h,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: A,
    selector: x,
    parents: ["VoltageLevel"],
    children: [
      ...mt,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: _n,
    selector: En,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: m,
    selector: h,
    parents: ["SCL"],
    children: [...L, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: A,
    selector: x,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...ni,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: m,
    selector: h,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: Nn,
    selector: Ln,
    parents: ["SubNetwork"],
    children: [...L, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: A,
    selector: x,
    parents: ["Bay", "Line"],
    children: [...Fi]
  },
  DA: {
    identity: A,
    selector: x,
    parents: ["DOType"],
    children: [...ri]
  },
  DAI: {
    identity: ei,
    selector: Ct,
    parents: ["DOI", "SDI"],
    children: [...L, "Val"]
  },
  DAType: {
    identity: Xe,
    selector: Qe,
    parents: ["DataTypeTemplates"],
    children: [...Ye, "BDA", "ProtNs"]
  },
  DO: {
    identity: A,
    selector: x,
    parents: ["LNodeType"],
    children: [...L]
  },
  DOI: {
    identity: A,
    selector: x,
    parents: [...Se],
    children: [...L, "SDI", "DAI"]
  },
  DOType: {
    identity: Xe,
    selector: Qe,
    parents: ["DataTypeTemplates"],
    children: [...Ye, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: A,
    selector: x,
    parents: [...Se],
    children: [...fe, "FCDA"]
  },
  DataSetDirectory: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: m,
    selector: h,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: Xe,
    selector: Qe,
    parents: ["DataTypeTemplates"],
    children: [...Ye, "EnumVal"]
  },
  EnumVal: {
    identity: On,
    selector: zn,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: A,
    selector: x,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...li]
  },
  EqSubFunction: {
    identity: A,
    selector: x,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...li]
  },
  ExtRef: {
    identity: An,
    selector: wn,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: Sn,
    selector: xn,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: A,
    selector: x,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...be,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: A,
    selector: x,
    parents: [
      "SubFunction",
      "Function",
      ...zi,
      ...Mi,
      ..._t
    ],
    children: [...Et, "EqFunction"]
  },
  GetCBValues: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: A,
    selector: x,
    parents: ["AccessPoint"],
    children: [...fe, "Subject", "IssuerName"]
  },
  GSE: {
    identity: ti,
    selector: ii,
    parents: ["ConnectedAP"],
    children: [...ai, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: A,
    selector: x,
    parents: ["LN0"],
    children: [...si, "Protocol"]
  },
  GSESettings: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: m,
    selector: h,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: m,
    selector: h,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: cn,
    selector: dn,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: A,
    selector: x,
    parents: ["SCL"],
    children: [...L, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: vn,
    selector: yn,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: m,
    selector: h,
    parents: [...Se],
    children: [...L, "ExtRef"]
  },
  IssuerName: {
    identity: m,
    selector: h,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: pn,
    selector: mn,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: bn,
    selector: gn,
    parents: ["Server"],
    children: [...L, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: kn,
    selector: Cn,
    parents: ["AccessPoint", "LDevice"],
    children: [...oi]
  },
  LN0: {
    identity: m,
    selector: h,
    parents: ["LDevice"],
    children: [
      ...oi,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: ln,
    selector: un,
    parents: [...Vi],
    children: [...L]
  },
  LNodeType: {
    identity: Xe,
    selector: Qe,
    parents: ["DataTypeTemplates"],
    children: [...Ye, "DO"]
  },
  Line: {
    identity: A,
    selector: x,
    parents: ["Process", "SCL"],
    children: [
      ...ci,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: A,
    selector: x,
    parents: [...Se],
    children: [...L]
  },
  LogControl: {
    identity: A,
    selector: x,
    parents: [...Se],
    children: [...di]
  },
  LogSettings: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: m,
    selector: h,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: m,
    selector: h,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: m,
    selector: h,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: Yt,
    selector: Jt,
    parents: ["TransformerWinding"],
    children: [...L]
  },
  OptFields: {
    identity: m,
    selector: h,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: Pn,
    selector: $n,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: Tn,
    selector: Rn,
    parents: ["ConnectedAP"],
    children: [...L, "P"]
  },
  PowerTransformer: {
    identity: A,
    selector: x,
    parents: [..._t],
    children: [
      ...Et,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => T,
    parents: [],
    children: []
  },
  Process: {
    identity: A,
    selector: x,
    parents: ["Process", "SCL"],
    children: [
      ...ci,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: Mn,
    selector: Vn,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: m,
    selector: h,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: A,
    selector: x,
    parents: [...Se],
    children: [...di, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: m,
    selector: h,
    parents: ["ReportControl"],
    children: [...L, "ClientLN"]
  },
  SamplesPerSec: {
    identity: m,
    selector: h,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: A,
    selector: x,
    parents: ["LN0"],
    children: [...si, "SmvOpts"]
  },
  SecPerSamples: {
    identity: m,
    selector: h,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: Hn,
    selector: Fn,
    parents: [],
    children: [
      ...rt,
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
    identity: ei,
    selector: Ct,
    parents: ["DOI", "SDI"],
    children: [...L, "SDI", "DAI"]
  },
  SDO: {
    identity: A,
    selector: x,
    parents: ["DOType"],
    children: [...fe]
  },
  Server: {
    identity: m,
    selector: h,
    parents: ["AccessPoint"],
    children: [
      ...L,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: m,
    selector: h,
    parents: ["AccessPoint"],
    children: [...L]
  },
  Services: {
    identity: m,
    selector: h,
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
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: m,
    selector: h,
    parents: ["LN0"],
    children: [...L]
  },
  SettingGroups: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: m,
    selector: h,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: m,
    selector: h,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: ti,
    selector: ii,
    parents: ["ConnectedAP"],
    children: [...ai]
  },
  SmvOpts: {
    identity: m,
    selector: h,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: A,
    selector: x,
    parents: ["AccessPoint"],
    children: [...fe, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: A,
    selector: x,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...$i
    ],
    children: [...be, "EqFunction"]
  },
  SubFunction: {
    identity: A,
    selector: x,
    parents: ["SubFunction", "Function"],
    children: [
      ...be,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: A,
    selector: x,
    parents: ["Communication"],
    children: [...fe, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: m,
    selector: h,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: A,
    selector: x,
    parents: ["SCL"],
    children: [...mt, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: A,
    selector: x,
    parents: ["TransformerWinding"],
    children: [...be, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: Yt,
    selector: Jt,
    parents: [...Oi],
    children: [...L]
  },
  Text: {
    identity: m,
    selector: h,
    parents: Hi.filter((t) => t !== "Text" && t !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: m,
    selector: h,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: A,
    selector: x,
    parents: ["PowerTransformer"],
    children: [
      ...ni,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: m,
    selector: h,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: In,
    selector: Dn,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: m,
    selector: h,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: m,
    selector: h,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: A,
    selector: x,
    parents: ["Substation"],
    children: [...mt, "Voltage", "Bay", "Function"]
  }
};
function H(t, e) {
  return typeof e != "string" ? T : Ht(t) ? P[t].selector(t, e) : t;
}
function Ie(t, e, i) {
  if (typeof i != "string" || !Ht(e)) return null;
  const r = t.querySelector(P[e].selector(e, i));
  return r === null || ui(r) ? r : Array.from(
    t.querySelectorAll(P[e].selector(e, i))
  ).find(ui) ?? null;
}
function w(t) {
  if (t === null) return NaN;
  if (t.closest("Private")) return NaN;
  const e = t.tagName;
  return Ht(e) ? P[e].identity(t) : NaN;
}
ki((t) => (e) => {
  Object.keys(t).length ? e.setValue(t) : e.setValue("");
});
function ca(t, e) {
  return typeof t == "string" && typeof e == "string" ? t.localeCompare(e) : typeof t == "object" && typeof e == "string" ? (t.getAttribute("name") ?? "").localeCompare(e) : typeof t == "string" && typeof e == "object" ? t.localeCompare(e.getAttribute("name")) : typeof t == "object" && typeof e == "object" ? (t.getAttribute("name") ?? "").localeCompare(
    e.getAttribute("name") ?? ""
  ) : 0;
}
function F(...t) {
  return t.reduce(
    (e, i) => e.flatMap((r) => i.map((n) => [r, n].flat())),
    [[]]
  );
}
function Bi(t, e = /* @__PURE__ */ new WeakSet()) {
  if (e.has(t)) return 1 / 0;
  switch (t?.constructor) {
    case Object:
    case Array:
      return e.add(t), 1 + Math.max(
        -1,
        ...Object.values(t).map((i) => Bi(i, e))
      );
    default:
      return 0;
  }
}
function ui(t) {
  return !t.closest("Private");
}
const da = 99, la = Array(da).fill(1).map((t, e) => `${e + 1}`);
function ua(t) {
  const e = new Set(t.map((i) => i.getAttribute("inst") || ""));
  return la.find((i) => !e.has(i));
}
function It(t, e = "user", i) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { action: t, initiator: e, ...i?.detail }
  });
}
function pi(t, e, i) {
  return new CustomEvent("goose-select", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { gseControl: t, dataset: e, ...i?.detail }
  });
}
function pa(t, e) {
  return new CustomEvent("goose-subscription", {
    bubbles: !0,
    composed: !0,
    detail: { element: t, subscribeStatus: e }
  });
}
const ma = [
  "ldInst",
  "lnClass",
  "lnInst",
  "prefix",
  "doName",
  "daName"
];
function qi(t) {
  return ma.map(
    (e) => t.getAttribute(e) ? `[${e}="${t.getAttribute(
      e
    )}"]` : ""
  ).join("");
}
const ha = ["srcLDInst", "srcLNClass", "srcLNInst", "srcCBName"];
function fa(t) {
  return ha.map(
    (e) => t.getAttribute(e) ? `[${e}="${t.getAttribute(e)}"]` : ""
  ).join("");
}
function ba(t) {
  if (!t.length) return [];
  const e = [], i = {};
  for (const r of t) {
    const n = r.old.element, a = r.old.parent, s = w(a);
    i[s] || (i[s] = a.cloneNode(!0));
    const o = i[s].querySelector(
      `ExtRef${n.getAttribute("iedName") ? `[iedName="${n.getAttribute("iedName")}"]` : ""}${qi(n)}${n.getAttribute("serviceType") ? `[serviceType="${n.getAttribute("serviceType")}"]` : ""}${fa(n)}`
    );
    o && i[s].removeChild(o);
  }
  return Object.entries(i).forEach(([r, n]) => {
    if (n.children.length == 0) {
      const a = t[0].old.parent.ownerDocument, s = Ie(a, "Inputs", r);
      s && s.parentElement && e.push({
        old: { parent: s.parentElement, element: s }
      });
    }
  }), e;
}
const Oe = "http://www.iec.ch/61850/2003/SCL";
var ga = Object.defineProperty, va = (t, e, i, r) => {
  for (var n = void 0, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (n = s(e, i, n) || n);
  return n && ga(e, i, n), n;
}, ee = /* @__PURE__ */ ((t) => (t[t.PUBLISHER = 0] = "PUBLISHER", t[t.SUBSCRIBER = 1] = "SUBSCRIBER", t))(ee || {}), ae = /* @__PURE__ */ ((t) => (t[t.Full = 0] = "Full", t[t.Partial = 1] = "Partial", t[t.None = 2] = "None", t))(ae || {});
function mi(t, e) {
  return new CustomEvent("view", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { view: t, ...e?.detail }
  });
}
function hi(t, e) {
  return new CustomEvent("ied-select", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { ied: t, ...e?.detail }
  });
}
function ya(t, e, i) {
  return !!ze(t, e, i);
}
function ze(t, e, i) {
  function r(s, o) {
    return s === "srcLNClass" && o === "LLN0" ? "" : o ? `[${s}="${o}"]` : "";
  }
  const n = e.closest("IED")?.getAttribute("name");
  if (!n)
    return;
  let a = "";
  return i && it(e.ownerDocument) !== "2003" && (a = `[serviceType="${Dt[i.tagName]}"]`, a += r(
    "srcLDInst",
    i.closest("LDevice")?.getAttribute("inst") ?? null
  ), a += r(
    "srcLNClass",
    i.closest("LN0,LN")?.getAttribute("lnClass") ?? null
  ), a += r(
    "srcLNInst",
    i.closest("LN0,LN")?.getAttribute("inst") ?? null
  ), a += r(
    "srcCBName",
    i.getAttribute("name") ?? null
  )), Array.from(
    t.querySelectorAll(
      `ExtRef[iedName="${n}"]${qi(e)}${a}`
    )
  ).find((s) => !s.hasAttribute("intAddr"));
}
function Sa(t, e) {
  const i = t.querySelector(
    `LN[lnClass="${e}"]`
  );
  if (i === null) return !1;
  const r = e === "LGOS" ? "GoCBRef" : "SvCBRef", n = i.querySelector(`DOI[name="${r}"]>DAI[name="setSrcRef"]`)?.getAttribute("valKind"), a = i.querySelector(`DOI[name="${r}"]>DAI[name="setSrcRef"]`)?.getAttribute("valImport");
  if ((n === "RO" || n === "Conf") && a === "true")
    return !0;
  const s = i?.ownerDocument, o = i.getAttribute("lnType"), l = i.getAttribute("lnClass"), c = s.querySelector(
    `DataTypeTemplates > LNodeType[id="${o}"][lnClass="${l}"] > DO[name="${l === "LGOS" ? "GoCBRef" : "SvCBRef"}"]`
  );
  if (c) {
    const f = c.getAttribute("type"), v = s.querySelector(
      `DataTypeTemplates > DOType[id="${f}"] > DA[name="setSrcRef"]`
    );
    if (v)
      return (v.getAttribute("valKind") === "Conf" || v.getAttribute("valKind") === "RO") && v.getAttribute("valImport") === "true";
  }
  return !1;
}
function xa(t, e) {
  const i = t?.tagName === "GSEControl" ? "LGOS" : "LSVS";
  if (!t || !e || !wa(t, e, i))
    return [];
  const r = ka(
    t,
    e,
    i
  );
  if (!r || !Sa(e, i))
    return [];
  const n = [];
  if (!r.parentElement) {
    const c = e.querySelector(
      `LN[lnClass="${i}"]`
    )?.parentElement;
    c && n.push({
      new: {
        parent: c,
        element: r,
        reference: c.querySelector(
          `LN[lnClass="${i}"]:last-child`
        )?.nextElementSibling
      }
    });
  }
  const a = i === "LGOS" ? "GoCBRef" : "SvCBRef";
  let s = r.querySelector(`DOI[name="${a}"]`);
  s || (s = e.ownerDocument.createElementNS(
    Oe,
    "DOI"
  ), s.setAttribute("name", a), n.push({
    new: {
      parent: r,
      element: s
    }
  }));
  let o = r.querySelector(
    `DOI[name="${a}"]>DAI[name="setSrcRef"]`
  );
  if (!o) {
    o = e.ownerDocument.createElementNS(
      Oe,
      "DAI"
    );
    const c = e.querySelector(
      `LN[lnClass="${i}"]>DOI[name="${a}"]>DAI[name="setSrcRef"]`
    );
    o.setAttribute("name", "setSrcRef"), c?.hasAttribute("valKind") && o.setAttribute("valKind", c.getAttribute("valKind")), c?.hasAttribute("valImport") && o.setAttribute(
      "valImport",
      c.getAttribute("valImport")
    ), n.push({
      new: {
        parent: s,
        element: o
      }
    });
  }
  let l = r.querySelector("Val");
  return l || (l = e.ownerDocument.createElementNS(
    Oe,
    "Val"
  )), l.textContent = Ft(t), n.push({
    new: {
      parent: o,
      element: l
    }
  }), n;
}
function nt(t, e, i) {
  const r = e === "GSEControl" ? "LGOS" : "LSVS", n = r === "LGOS" ? "GoCBRef" : "SvCBRef", a = `LN[lnClass="${r}"]>DOI[name="${n}"]>DAI[name="setSrcRef"]>Val,LN0[lnClass="${r}"]>DOI[name="${n}"]>DAI[name="setSrcRef"]>Val`;
  return i ? t.querySelector(a) : Array.from(t.querySelectorAll(a));
}
function Aa(t, e) {
  if (!t || !e) return [];
  const i = nt(
    e,
    t.tagName
  ).find((a) => a.textContent == Ft(t));
  if (!i) return [];
  const r = i.closest("LN0, LN");
  return !r || !r.parentElement ? [] : r.querySelector(
    'Private[type="OpenSCD.create"]'
  ) ? [
    {
      old: {
        parent: r.parentElement,
        element: r
      }
    }
  ] : [
    {
      old: {
        parent: r,
        element: i.closest("DOI")
      }
    }
  ];
}
function wa(t, e, i) {
  return !(it(e.ownerDocument) === "2003" || e.querySelector(`LN[lnClass="${i}"]`) === null || nt(e, t.tagName).find(
    (r) => r.textContent == Ft(t)
  ) || _a(e, t) <= Ca(e, t));
}
function ka(t, e, i) {
  let r = Array.from(
    e.querySelectorAll(`LN[lnClass="${i}"]`)
  ).find((a) => {
    const s = i === "LGOS" ? "GoCBRef" : "SvCBRef";
    return a.querySelector(
      `DOI[name="${s}"]>DAI[name="setSrcRef"]>Val`
    ) === null || a.querySelector(
      `DOI[name="${s}"]>DAI[name="setSrcRef"]>Val`
    )?.textContent === "";
  });
  if (!r) {
    r = e.ownerDocument.createElementNS(
      Oe,
      "LN"
    );
    const a = e.ownerDocument.createElementNS(
      Oe,
      "Private"
    );
    a.setAttribute("type", "OpenSCD.create"), r.appendChild(a), r.setAttribute("lnClass", i);
    const s = nt(
      e,
      t.tagName,
      !0
    )?.closest("LN");
    if (!s) return null;
    r.setAttribute(
      "lnType",
      s?.getAttribute("lnType") ?? ""
    );
  }
  if ((r.getAttribute("inst") ?? "") === "") {
    const a = ua(
      Array.from(
        e.querySelectorAll(`LN[lnClass="${i}"]`)
      )
    );
    if (!a) return null;
    r.setAttribute("inst", a);
  }
  return r;
}
function fi(t, e) {
  const r = t.closest("LN,LN0").querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  );
  let n;
  return Array.from(
    e?.querySelectorAll("LN0 > Inputs, LN > Inputs")
  ).some((a) => (Array.from(r.querySelectorAll("FCDA")).some((s) => {
    const o = ze(a, s, t);
    return o ? (n = o, !0) : !1;
  }), n !== void 0)), n !== void 0 ? n : null;
}
function bi(t) {
  if (t === null) return null;
  const e = ["iedName", "serviceType", "srcPrefix", "srcCBName"], [i, r, n, a] = e.map(
    (y) => t.getAttribute(y) ?? ""
  ), s = r === "GOOSE" ? "LGOS" : "LSVS", o = s === "LGOS" ? 'DOI[name="GoCBRef"]' : 'DOI[name="SvCBRef"]', l = t.getAttribute("srcLDInst") ?? t.getAttribute("ldInst"), c = t.getAttribute("srcLNClass") ?? "LLN0", f = `${i}${n}${l}/${c}.${a}`, v = t.closest("IED")?.getAttribute("name"), b = Array.from(
    t.ownerDocument.querySelector(`IED[name="${v}"]`).querySelectorAll(
      `LN[lnClass="${s}"]>${o}>DAI[name="setSrcRef"]>Val`
    )
  ).find((y) => y.textContent === f);
  return b !== void 0 ? b.closest("LN") : null;
}
function Ca(t, e) {
  return nt(
    t,
    e.tagName
  ).filter((r) => r.textContent !== "").length;
}
function _a(t, e) {
  const i = e.tagName === "GSEControl" ? "maxGo" : "maxSv", r = parseInt(
    t.querySelector("Services>SupSubscription")?.getAttribute(i) ?? "0",
    10
  );
  return isNaN(r) ? 0 : r;
}
function Ft(t) {
  if (!t) return null;
  const e = t.closest("LN,LN0"), i = e?.getAttribute("prefix") ?? "", r = e?.getAttribute("lnClass"), n = e?.getAttribute("inst") ?? "", a = t.closest("LDevice")?.getAttribute("inst"), s = t.closest("IED")?.getAttribute("name"), o = t.getAttribute("name");
  return !o && !s && !a && !r ? null : `${s}${a}/${i}${r}${n}.${o}`;
}
function Ea(t, e) {
  const i = t.closest("IED")?.getAttribute("name"), [r, n, a, s] = [
    "ldInst",
    "lnClass",
    "lnInst",
    "doName"
  ].map((v) => t.getAttribute(v));
  if (!i || !r || !n || !a || !s)
    return !1;
  if (it(t.ownerDocument) === "2003" || e === void 0)
    return !0;
  const o = e.closest("LDevice")?.getAttribute("inst"), l = e.closest("LN0,LN")?.getAttribute("lnClass"), c = e.closest("LN0,LN")?.getAttribute("inst"), f = e.getAttribute("name");
  return !(!o || !l || !f || typeof c != "string");
}
const Dt = {
  ReportControl: "Report",
  GSEControl: "GOOSE",
  SampledValueControl: "SMV"
};
function Ia(t, e) {
  const i = e.closest("IED")?.getAttribute("name") ?? null, [r, n, a, s, o, l] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName"
  ].map((k) => e.getAttribute(k));
  if (it(e.ownerDocument) === "2003")
    return ge(e.ownerDocument, "ExtRef", {
      iedName: i,
      ldInst: r,
      lnClass: a,
      lnInst: s,
      prefix: n,
      doName: o,
      daName: l
    });
  if (!t || !Dt[t.tagName])
    return ge(e.ownerDocument, "ExtRef", {
      iedName: i,
      serviceType: "Poll",
      ldInst: r,
      lnClass: a,
      lnInst: s,
      prefix: n,
      doName: o,
      daName: l
    });
  const c = t.closest("LDevice")?.getAttribute("inst") ?? "", f = t.closest("LN0,LN")?.getAttribute("prefix") ?? "", v = t.closest("LN0,LN")?.getAttribute("lnClass") ?? "", b = t.closest("LN0,LN")?.getAttribute("inst"), y = t.getAttribute("name") ?? "";
  return ge(e.ownerDocument, "ExtRef", {
    iedName: i,
    serviceType: Dt[t.tagName],
    ldInst: r,
    lnClass: a,
    lnInst: s,
    prefix: n,
    doName: o,
    daName: l,
    srcLDInst: c,
    srcPrefix: f,
    srcLNClass: v,
    srcLNInst: b || null,
    srcCBName: y
  });
}
function Ui(t) {
  return t ? Array.from(t.querySelectorAll(":root > IED")).sort(
    (e, i) => ca(e, i)
  ) : [];
}
class ji extends ve {
  constructor() {
    super(...arguments), this.subscribedElements = [], this.availableElements = [];
  }
  updated() {
    this.subscriberWrapper && this.subscriberWrapper.scrollTo(0, 0);
  }
  resetElements() {
    this.subscribedElements = [], this.availableElements = [];
  }
}
va([
  R("div")
], ji.prototype, "subscriberWrapper");
const Gt = te`
  :host(.moving) section {
    opacity: 0.3;
  }

  section {
    background-color: var(--mdc-theme-surface);
    transition: all 200ms linear;
    outline-color: var(--mdc-theme-primary);
    outline-style: solid;
    outline-width: 0px;
    opacity: 1;
  }

  section:focus {
    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  }

  section:focus-within {
    outline-width: 2px;
    transition: all 250ms linear;
  }

  h1,
  h2,
  h3 {
    color: var(--mdc-theme-on-surface);
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0px;
    line-height: 48px;
    padding-left: 0.3em;
    transition: background-color 150ms linear;
  }

  section:focus-within > h1,
  section:focus-within > h2,
  section:focus-within > h3 {
    color: var(--mdc-theme-surface);
    background-color: var(--mdc-theme-primary);
    transition: background-color 200ms linear;
  }

  h1 > nav,
  h2 > nav,
  h3 > nav,
  h1 > abbr > mwc-icon-button,
  h2 > abbr > mwc-icon-button,
  h3 > abbr > mwc-icon-button {
    float: right;
  }

  abbr[title] {
    border-bottom: none !important;
    cursor: inherit !important;
    text-decoration: none !important;
  }

  mwc-list-item[noninteractive] {
    font-weight: 500;
  }
`;
var Da = Object.defineProperty, Na = Object.getOwnPropertyDescriptor, Bt = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Na(e, i) : e, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (n = (r ? s(e, i, n) : s(n)) || n);
  return r && n && Da(e, i, n), n;
};
let _e = ee.PUBLISHER, Ve = class extends ji {
  constructor() {
    super(), this.editCount = -1, this.onIEDSelectEvent = this.onIEDSelectEvent.bind(this), this.onGOOSESelectEvent = this.onGOOSESelectEvent.bind(this), this.onGooseSubscriptionEvent = this.onGooseSubscriptionEvent.bind(this), this.onViewChange = this.onViewChange.bind(this);
    const t = this.closest(".container");
    t && (t.addEventListener("ied-select", this.onIEDSelectEvent), t.addEventListener("goose-select", this.onGOOSESelectEvent), t.addEventListener(
      "goose-subscription",
      this.onGooseSubscriptionEvent
    ), t.addEventListener("view", this.onViewChange));
  }
  async onIEDSelectEvent(t) {
    if (!t.detail.ied) return;
    this.currentSelectedIed = t.detail.ied, this.resetElements();
    const e = this.currentSelectedIed.querySelectorAll(
      "LN0 > Inputs, LN > Inputs"
    );
    Array.from(this.doc.querySelectorAll("GSEControl")).filter((i) => i.hasAttribute("datSet")).forEach((i) => {
      const r = i.closest("IED");
      if (r.getAttribute("name") == this.currentSelectedIed?.getAttribute("name"))
        return;
      if (e.length == 0) {
        this.availableElements.push({ element: i });
        return;
      }
      let n = 0;
      const a = r.querySelector(
        `DataSet[name="${i.getAttribute("datSet")}"]`
      );
      if (a) {
        if (a.querySelectorAll("FCDA").forEach((s) => {
          e.forEach((o) => {
            ze(o, s, i) && n++;
          });
        }), n == 0) {
          this.availableElements.push({ element: i });
          return;
        }
        n >= a.querySelectorAll("FCDA").length ? this.subscribedElements.push({ element: i }) : this.availableElements.push({ element: i, partial: !0 });
      }
    }), this.requestUpdate();
  }
  async onGOOSESelectEvent(t) {
    !t.detail.dataset || !t.detail.gseControl || (this.currentSelectedGseControl = t.detail.gseControl, this.currentUsedDataset = t.detail.dataset, this.currentGooseIedName = this.currentSelectedGseControl?.closest("IED")?.getAttribute("name"), this.resetElements(), Array.from(this.doc.querySelectorAll(":root > IED")).filter((e) => e.getAttribute("name") != this.currentGooseIedName).forEach((e) => {
      const i = e.querySelectorAll("LN0 > Inputs, LN > Inputs");
      let r = 0;
      if (!i) {
        this.availableElements.push({ element: e });
        return;
      }
      if (this.currentUsedDataset.querySelectorAll("FCDA").forEach((n) => {
        i.forEach((a) => {
          ze(a, n, this.currentSelectedGseControl) && r++;
        });
      }), r == 0) {
        this.availableElements.push({ element: e });
        return;
      }
      r >= this.currentUsedDataset.querySelectorAll("FCDA").length ? this.subscribedElements.push({ element: e }) : this.availableElements.push({ element: e, partial: !0 });
    }), this.requestUpdate());
  }
  async onGooseSubscriptionEvent(t) {
    let e = t.detail.element;
    if (_e == ee.SUBSCRIBER) {
      const i = t.detail.element.getAttribute("datSet");
      this.currentUsedDataset = t.detail.element.parentElement?.querySelector(
        `DataSet[name="${i}"]`
      ), this.currentSelectedGseControl = t.detail.element, this.currentGooseIedName = t.detail.element.closest("IED")?.getAttribute("name"), e = this.currentSelectedIed;
    }
    switch (t.detail.subscribeStatus) {
      case ae.Full: {
        this.unsubscribe(e);
        break;
      }
      case ae.Partial: {
        this.subscribe(e);
        break;
      }
      case ae.None: {
        this.subscribe(e);
        break;
      }
    }
  }
  async onViewChange(t) {
    _e = t.detail.view, this.currentSelectedIed = void 0, this.currentSelectedGseControl = void 0, this.resetElements(), this.requestUpdate();
  }
  async subscribe(t) {
    if (!t.querySelector("LN0")) return;
    let e = t.querySelector("LN0 > Inputs");
    e || (e = ge(t.ownerDocument, "Inputs", {}));
    const i = {
      actions: [],
      title: g("subscription.connect")
    };
    this.currentUsedDataset.querySelectorAll("FCDA").forEach((n) => {
      if (!ya(e, n, this.currentSelectedGseControl) && Ea(n, this.currentSelectedGseControl)) {
        const a = Ia(
          this.currentSelectedGseControl,
          n
        );
        e?.parentElement ? i.actions.push({
          new: { parent: e, element: a }
        }) : e?.appendChild(a);
      }
    });
    const r = xa(
      this.currentSelectedGseControl,
      t
    );
    if (e.parentElement)
      i.actions.concat(r);
    else {
      const n = [
        {
          new: { parent: t.querySelector("LN0"), element: e }
        }
      ];
      i.actions = n.concat(r);
    }
    this.dispatchEvent(It(i));
  }
  async unsubscribe(t) {
    const e = [];
    t.querySelectorAll("LN0 > Inputs, LN > Inputs").forEach((i) => {
      this.currentUsedDataset.querySelectorAll("FCDA").forEach((r) => {
        const n = ze(i, r, this.currentSelectedGseControl);
        n && e.push({ old: { parent: i, element: n } });
      });
    }), e.push(...ba(e)), e.push(
      ...Aa(this.currentSelectedGseControl, t)
    ), this.dispatchEvent(
      It({
        title: g("subscription.disconnect"),
        actions: e
      })
    );
  }
  renderSubscriber(t, e) {
    let i = null, r = null;
    return t !== ae.None && (_e === ee.PUBLISHER ? (i = fi(
      this.currentSelectedGseControl,
      e
    ), r = bi(i)) : (i = fi(
      e,
      this.currentSelectedIed
    ), r = bi(i))), d` <mwc-list-item
      @click=${() => {
      this.dispatchEvent(
        pa(e, t ?? ae.None)
      );
    }}
      graphic="avatar"
      ?hasMeta=${r !== null}
    >
      <span
        >${_e == ee.PUBLISHER ? e.getAttribute("name") : e.getAttribute("name") + ` (${e.closest("IED")?.getAttribute("name")})`}</span
      >
      <mwc-icon slot="graphic"
        >${t == ae.Full ? d`clear` : d`add`}</mwc-icon
      >
      ${r !== null ? d`<mwc-icon title="${w(r)}" slot="meta"
            >monitor_heart</mwc-icon
          >` : dr}
    </mwc-list-item>`;
  }
  renderUnSubscribers(t) {
    return d`<mwc-list-item
        noninteractive
        value="${t.map((e) => {
      const i = w(e.element);
      return typeof i == "string" ? i : "";
    }).join(" ")}"
      >
        <span>${g("subscription.subscriber.availableToSubscribe")}</span>
      </mwc-list-item>
      <li divider role="separator"></li>
      ${t.length > 0 ? t.map(
      (e) => this.renderSubscriber(ae.None, e.element)
    ) : d`<mwc-list-item graphic="avatar" noninteractive>
            <span>${g("subscription.none")}</span>
          </mwc-list-item>`}`;
  }
  renderPartiallySubscribers(t) {
    return d`<mwc-list-item
        noninteractive
        value="${t.map((e) => {
      const i = w(e.element);
      return typeof i == "string" ? i : "";
    }).join(" ")}"
      >
        <span>${g("subscription.subscriber.partiallySubscribed")}</span>
      </mwc-list-item>
      <li divider role="separator"></li>
      ${t.length > 0 ? t.map(
      (e) => this.renderSubscriber(ae.Partial, e.element)
    ) : d`<mwc-list-item graphic="avatar" noninteractive>
            <span>${g("subscription.none")}</span>
          </mwc-list-item>`}`;
  }
  renderFullSubscribers() {
    return d`<mwc-list-item
        noninteractive
        value="${this.subscribedElements.map((t) => {
      const e = w(t.element);
      return typeof e == "string" ? e : "";
    }).join(" ")}"
      >
        <span>${g("subscription.subscriber.subscribed")}</span>
      </mwc-list-item>
      <li divider role="separator"></li>
      ${this.subscribedElements.length > 0 ? this.subscribedElements.map(
      (t) => this.renderSubscriber(ae.Full, t.element)
    ) : d`<mwc-list-item graphic="avatar" noninteractive>
            <span>${g("subscription.none")}</span>
          </mwc-list-item>`}`;
  }
  renderTitle() {
    const t = this.currentSelectedGseControl?.getAttribute("name") ?? void 0;
    return _e == ee.PUBLISHER ? d`<h1>
          ${g("subscription.goose.publisher.subscriberTitle", {
      selected: t ? this.currentGooseIedName + " > " + t : "GOOSE"
    })}
        </h1>` : d`<h1>
          ${g("subscription.goose.subscriber.publisherTitle", {
      selected: this.currentSelectedIed ? this.currentSelectedIed.getAttribute("name") : "IED"
    })}
        </h1>`;
  }
  firstUpdated() {
    this.currentSelectedIed = void 0;
  }
  render() {
    return d`
      <section tabindex="0">
        ${this.renderTitle()}
        ${this.availableElements.length != 0 || this.subscribedElements.length != 0 ? d`<div class="wrapper">
              <filtered-list>
                ${this.renderFullSubscribers()}
                ${this.renderPartiallySubscribers(
      this.availableElements.filter((t) => t.partial)
    )}
                ${this.renderUnSubscribers(
      this.availableElements.filter((t) => !t.partial)
    )}
              </filtered-list>
            </div>` : d`<mwc-list>
              <mwc-list-item noninteractive>
                <span>${_e == ee.PUBLISHER ? g("subscription.subscriber.noControlBlockSelected") : g("subscription.subscriber.noIedSelected")}</span>
              </mwc-list-item>
            </mwc-list>
          </div>`}
      </section>
    `;
  }
};
Ve.styles = te`
    ${Gt}

    .wrapper {
      height: 100vh;
      overflow-y: scroll;
    }
  `;
Bt([
  p({ attribute: !1 })
], Ve.prototype, "doc", 2);
Bt([
  p({ type: Number })
], Ve.prototype, "editCount", 2);
Ve = Bt([
  X("subscriber-list-goose")
], Ve);
d`<svg
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
</svg>`;
const Be = {
  action: E`<path d="M0 0h24v24H0z" fill="none"></path><path d="M13 3c-4.97 0-9
  4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7
  7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0
  9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" fill="currentColor"></path>`,
  dAIcon: E`<path fill="currentColor" d="m4.2 0c-2.31 0-4.2 1.89-4.2 4.2v11.6c0 2.31 1.89 4.2 4.2 4.2h18.1c2.31 0 4.2-1.89 4.2-4.2v-11.6c0-2.31-1.89-4.2-4.2-4.2zm0 1.89h18.1c1.29 0 2.3 1.01 2.3 2.3v11.6c0 1.29-1.01 2.31-2.3 2.31h-18.1c-1.29 0-2.3-1.01-2.3-2.31v-11.6c0-1.29 1.01-2.3 2.3-2.3z"/><path fill="currentColor" d="m12.5 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path fill="currentColor" d="m19.7 15-0.74-2.56h-3.18l-0.74 2.56h-1.75l3.04-10h2.06l3.03 10zm-1.13-4.13-0.823-2.88-0.379-1.46q-0.0947 0.412-0.178 0.739-0.0829 0.327-1.02 3.59z"/>`,
  dOIcon: E`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m12.1 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path d="m21.6 9.97q0 1.56-0.515 2.75-0.515 1.19-1.47 1.82-0.959 0.625-2.24 0.625-1.97 0-3.08-1.39-1.11-1.39-1.11-3.81 0-2.41 1.11-3.76t3.1-1.35 3.1 1.36q1.12 1.36 1.12 3.74zm-1.78 0q0-1.62-0.639-2.54-0.639-0.923-1.79-0.923-1.17 0-1.81 0.916-0.639 0.909-0.639 2.54 0 1.65 0.651 2.6 0.657 0.945 1.79 0.945 1.17 0 1.81-0.923 0.639-0.923 0.639-2.62z"/>`,
  enumIcon: E`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m5.37 15v-10h6.56v1.62h-4.81v2.51h4.45v1.62h-4.45v2.64h5.06v1.62z"/><path d="m18.5 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  info: E`<path d="M0 0h24v24H0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"></path>`,
  warning: E`<path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="currentColor"></path>`,
  error: E`<path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z" fill="currentColor"></path><path d="M11 7h2v7h-2z" fill="currentColor"></path><circle cx="12" cy="16" r="1" fill="currentColor"></circle>`,
  gooseIcon: E`<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  lNIcon: E`<path stroke="currentColor" stroke-width="1.89" fill="none" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path fill="currentColor" d="m5.71 15v-10h1.75v8.39h4.47v1.62z"/><path fill="currentColor" d="m18.2 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  logIcon: E`<path fill="currentColor" d="M9,7H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  reportIcon: E`<path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,16.41 7.58,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  smvIcon: E`<path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`
}, La = E`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Be.gooseIcon}</svg>`;
E`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Be.reportIcon}</svg>`;
E`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Be.smvIcon}</svg>`;
E`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Be.logIcon}</svg>`;
E`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z" />
</svg>`;
E`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M21,14V4H3V14H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M4,5H15V10H4V5M16,5H20V7H16V5M20,8V13H16V8H20M4,11H9V13H4V11M10,11H15V13H10V11Z" />
</svg>`;
E`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4,1C2.89,1 2,1.89 2,3V7C2,8.11 2.89,9 4,9H1V11H13V9H10C11.11,9 12,8.11 12,7V3C12,1.89 11.11,1 10,1H4M4,3H10V7H4V3M14,13C12.89,13 12,13.89 12,15V19C12,20.11 12.89,21 14,21H11V23H23V21H20C21.11,21 22,20.11 22,19V15C22,13.89 21.11,13 20,13H14M3.88,13.46L2.46,14.88L4.59,17L2.46,19.12L3.88,20.54L6,18.41L8.12,20.54L9.54,19.12L7.41,17L9.54,14.88L8.12,13.46L6,15.59L3.88,13.46M14,15H20V19H14V15Z" />
</svg>`;
const gi = {
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
Je("dAIcon"), Je("dOIcon"), Je("enumIcon"), Je("lNIcon");
function Je(t) {
  if (t === "reset") return d``;
  const e = gi[t]?.height ?? 24, i = gi[t]?.width ?? 24;
  return d`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${e}"
    viewBox="0 0 ${i} ${e}"
    width="${i}"
  >
    ${Be[t]}
  </svg> `;
}
d`<svg
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
d`<svg
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
d`<svg
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
d`<svg
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
d`<svg
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
</svg>`;
d`<svg
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
</svg>`;
d`<svg
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
</svg>`;
d`<svg
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
</svg>`;
d`<svg
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
</svg>`;
d`<svg
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
</svg>`;
d`<svg
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
</svg>`;
d`<svg
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
d` <svg
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
E`
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
  </svg>`;
E`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
E`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
E`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
E`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
E`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
const vi = /* @__PURE__ */ new WeakMap(), yi = 2147483647, Ta = et((...t) => (e) => {
  let i = vi.get(e);
  i === void 0 && (i = {
    lastRenderedIndex: yi,
    values: []
  }, vi.set(e, i));
  const r = i.values;
  let n = r.length;
  i.values = t;
  for (let a = 0; a < t.length && !(a > i.lastRenderedIndex); a++) {
    const s = t[a];
    if (Ii(s) || typeof s.then != "function") {
      e.setValue(s), i.lastRenderedIndex = a;
      break;
    }
    a < n && s === r[a] || (i.lastRenderedIndex = yi, n = 0, Promise.resolve(s).then((o) => {
      const l = i.values.indexOf(s);
      l > -1 && l < i.lastRenderedIndex && (i.lastRenderedIndex = l, e.setValue(o), e.commit());
    }));
  }
});
var Ra = Object.defineProperty, Pa = Object.getOwnPropertyDescriptor, ue = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Pa(e, i) : e, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (n = (r ? s(e, i, n) : s(n)) || n);
  return r && n && Ra(e, i, n), n;
};
const $a = d`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${g("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let ne = class extends ve {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (t) => ({
      path: t,
      header: d`<h2>${"/" + t.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return Bi(this.selection);
  }
  get paths() {
    return this.getPaths();
  }
  set paths(t) {
    const e = {};
    for (const i of t) {
      let r = e;
      for (const n of i)
        Object.prototype.hasOwnProperty.call(r, n) || (r[n] = {}), r = r[n];
    }
    this.selection = e;
  }
  get path() {
    return this.paths[0] ?? [];
  }
  set path(t) {
    this.paths = [t];
  }
  getTitle(t) {
    return t.join("/");
  }
  getDisplayString(t, e) {
    return t;
  }
  getPaths(t) {
    let e = Object.keys(this.selection).map((r) => [r]), i = t ?? this.depth - 1;
    for (; i-- > 0; )
      e = e.flatMap((r) => {
        let n = this.selection;
        for (const s of r) n = n[s];
        const a = Object.keys(n).map((s) => r.concat(s));
        return a.length === 0 ? [r] : a;
      });
    return t === void 0 ? e : e.filter((r) => r.length > t);
  }
  multiSelect(t, e, i) {
    let r = this.selection;
    for (const n of e) r = r[n];
    r && r[i] ? delete r[i] : r[i] = {};
  }
  singleSelect(t, e, i) {
    this.path[e.length] === i ? this.path = e : this.path = e.concat(i);
  }
  async select(t, e) {
    const i = t.target.selected.value;
    this.multi ? this.multiSelect(t, e, i) : this.singleSelect(t, e, i), this.requestUpdate(), await this.updateComplete, await new Promise((r) => setTimeout(r, 250)), this.container.scrollLeft = 1e3 * this.depth;
  }
  renderDirectory(t, e) {
    return d`<filtered-list
      @selected=${(i) => this.select(i, t)}
      searchFieldLabel="${this.getTitle(t)}"
    >
      ${e.map(
      (i) => d`<mwc-list-item
            value="${i}"
            ?activated=${this.getPaths(t.length).map((r) => JSON.stringify(r)).includes(JSON.stringify(t.concat(i)))}
            >${this.getDisplayString(i, t)}</mwc-list-item
          >`
    )}
    </filtered-list>`;
  }
  async renderColumn(t) {
    const i = this.getPaths(t).map((n) => this.read(n)), r = [];
    for await (const { header: n, entries: a, path: s } of i)
      (n || a.length > 0) && r.push(
        d`${re(n)} ${this.renderDirectory(s, a)}`
      );
    return r.length === 0 ? d`` : d`<div class="column">${r}</div>`;
  }
  render() {
    const t = new Array(this.depth).fill(0).map((e, i) => this.renderColumn(i));
    return this.loaded = Promise.allSettled(t).then(), d`<div class="pane">
      ${t.map((e) => Ta(e, $a))}
    </div>`;
  }
};
ne.styles = te`
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
ue([
  p({ type: Object })
], ne.prototype, "selection", 2);
ue([
  p({ type: Boolean })
], ne.prototype, "multi", 2);
ue([
  p({ type: Number })
], ne.prototype, "depth", 1);
ue([
  p({ type: Array })
], ne.prototype, "paths", 1);
ue([
  p({ type: Array })
], ne.prototype, "path", 1);
ue([
  p({ attribute: !1 })
], ne.prototype, "read", 2);
ue([
  p({ attribute: !1 })
], ne.prototype, "loaded", 2);
ue([
  R("div")
], ne.prototype, "container", 2);
ne = ue([
  X("finder-list")
], ne);
function Oa(t) {
  return t.startsWith("IED:") ? t.replace(/^.*:/, "").trim() : t.startsWith("LN0:") ? "LLN0" : t.replace(/^.*>/, "").trim();
}
function za(t, e) {
  return async (i) => {
    const [r, n] = i[i.length - 1]?.split(": ", 2), a = Ie(t, r, n);
    return a ? {
      path: i,
      header: void 0,
      entries: e(a).map(
        (s) => `${s.tagName}: ${w(s)}`
      )
    } : { path: i, header: d`<p>${g("error")}</p>`, entries: [] };
  };
}
function Wi(t) {
  if (["LDevice", "Server"].includes(t.tagName))
    return Array.from(t.children).filter(
      (i) => i.tagName === "LDevice" || i.tagName === "LN0" || i.tagName === "LN"
    );
  const e = t.tagName === "LN" || t.tagName === "LN0" ? t.getAttribute("lnType") : t.getAttribute("type");
  return Array.from(
    t.ownerDocument.querySelectorAll(
      `LNodeType[id="${e}"] > DO, DOType[id="${e}"] > SDO, DOType[id="${e}"] > DA, DAType[id="${e}"] > BDA`
    )
  );
}
function Ma(t) {
  return d`<finder-list
    multi
    .paths=${[["Server: " + w(t)]]}
    .read=${za(t.ownerDocument, Wi)}
    .getDisplayString=${Oa}
    .getTitle=${(e) => e[e.length - 1]}
  ></finder-list>`;
}
function Va(t, e) {
  const [i, r] = e[e.length - 1].split(": "), n = Ie(t.ownerDocument, i, r);
  if (!n || Wi(n).length > 0) return;
  const a = e.find((N) => N.startsWith("LN"));
  if (!a) return;
  const [s, o] = a.split(": "), l = Ie(t.ownerDocument, s, o);
  if (!l) return;
  const c = l.closest("LDevice")?.getAttribute("inst"), f = l.getAttribute("prefix") ?? "", v = l.getAttribute("lnClass"), b = l.getAttribute("inst") && l.getAttribute("inst") !== "" ? l.getAttribute("inst") : null;
  let y = "", k = "", $ = "";
  for (const N of e) {
    const [D, j] = N.split(": ");
    if (!["DO", "DA", "SDO", "BDA"].includes(D)) continue;
    const ce = Ie(t.ownerDocument, D, j);
    if (!ce) return;
    const pe = ce.getAttribute("name");
    D === "DO" && (y = pe), D === "SDO" && (y = y + "." + pe), D === "DA" && (k = pe, $ = ce.getAttribute("fc") ?? ""), D === "BDA" && (k = k + "." + pe);
  }
  if (!(!c || !v || !y || !k || !$))
    return ge(t.ownerDocument, "FCDA", {
      ldInst: c,
      prefix: f,
      lnClass: v,
      lnInst: b,
      doName: y,
      daName: k,
      fc: $
    });
}
function Ha(t) {
  return (e, i) => {
    const n = i.shadowRoot.querySelector("finder-list")?.paths ?? [], a = [];
    for (const s of n) {
      const o = Va(t, s);
      o && a.push({
        new: {
          parent: t,
          element: o,
          reference: null
        }
      });
    }
    return a;
  };
}
function Fa(t) {
  const e = t.closest("Server");
  return [
    {
      title: g("wizard.title.add", { tagName: "FCDA" }),
      primary: {
        label: "add",
        icon: "add",
        action: Ha(t)
      },
      content: [e ? Ma(e) : d``]
    }
  ];
}
const Ga = {
  asciName: "[A-Za-z][0-9,A-Z,a-z_]*"
}, Ba = {
  cbName: 32
}, qa = {
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
}, Ua = {
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
}, Si = { en: Ua, de: qa };
async function ja(t) {
  return Object.keys(Si).includes(t) ? Si[t] : {};
}
gr({ loader: ja, empty: (t) => t });
const Ki = localStorage.getItem("language") || "en";
console.log("SETTING LANGUAGE TO", Ki);
xr(Ki);
const Wa = [
  "None",
  "Signature",
  "SignatureAndEncryption"
];
function Ka(t) {
  return (e) => {
    e.dispatchEvent(Vt(() => Fa(t)));
  };
}
function Za(t) {
  return (e, i) => {
    const r = e.find((c) => c.label === "name").value, n = J(e.find((c) => c.label === "desc")), a = t.getAttribute("name"), s = [];
    if (!(r === a && n === t.getAttribute("desc"))) {
      const c = kt(t, { name: r, desc: n });
      s.push({
        old: { element: t },
        new: { element: c }
      });
    }
    const o = r !== a ? Array.from(
      t.parentElement?.querySelectorAll(
        `ReportControlBock[datSet=${a}], GSEControl[datSet=${a}],SampledValueControl[datSet=${a}] `
      ) ?? []
    ).map((c) => {
      const f = kt(c, { datSet: r });
      return { old: { element: c }, new: { element: f } };
    }) : [];
    return [
      ...Array.from(
        i.shadowRoot.querySelectorAll(
          "filtered-list > mwc-check-list-item:not([selected])"
        )
      ).map((c) => Ie(t, "FCDA", c.value)).filter((c) => c).map((c) => ({
        old: {
          parent: t,
          element: c,
          reference: c.nextSibling
        }
      })),
      ...s,
      ...o
    ];
  };
}
function Xa(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc");
  return [
    {
      title: g("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        label: g("save"),
        icon: "save",
        action: Za(t)
      },
      menuActions: [
        {
          icon: "add",
          label: g("dataset.fcda.add"),
          action: Ka(t)
        }
      ],
      content: [
        d`<wizard-textfield
          label="name"
          .maybeValue=${e}
          helper="${g("scl.name")}"
          required
          disabled="true"
        >
        </wizard-textfield>`,
        d`<wizard-textfield
          label="desc"
          .maybeValue=${i}
          helper="${g("scl.desc")}"
          nullable
          required
        >
        </wizard-textfield>`,
        d`<filtered-list multi
          >${Array.from(t.querySelectorAll("FCDA")).map(
          (r) => d`<mwc-check-list-item selected value="${w(r)}"
                >${w(r).split(">").pop()}</mwc-check-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
const _ = {
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
}, Qa = {
  IP: _.IP,
  "IP-SUBNET": _.IP,
  "IP-GATEWAY": _.IP,
  "OSI-TSEL": _.OSI,
  "OSI-SSEL": _.OSI,
  "OSI-PSEL": _.OSI,
  "OSI-AP-Title": _.OSIAPi,
  "OSI-AP-Invoke": _.OSId,
  "OSI-AE-Qualifier": _.OSId,
  "OSI-AE-Invoke": _.OSId,
  "MAC-Address": _.MAC,
  APPID: _.APPID,
  "VLAN-ID": _.VLANid,
  "VLAN-PRIORITY": _.VLANp,
  "OSI-NSAP": _.OSI,
  "SNTP-Port": _.port,
  "MMS-Port": _.port,
  DNSName: "[^ ]*",
  "UDP-Port": _.port,
  "TCP-Port": _.port,
  "C37-118-IP-Port": "102[5-9]|10[3-9][0-9]|1[1-9][0-9][0-9]|[2-9][0-9]{3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]",
  IPv6: _.IPv6,
  "IPv6-SUBNET": _.IPv6sub,
  "IPv6-GATEWAY": _.IPv6,
  IPv6FlowLabel: "[0-9a-fA-F]{1,5}",
  IPv6ClassOfTraffic: "[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]",
  "IPv6-IGMPv3Src": _.IPv6,
  "IP-IGMPv3Sr": _.IP,
  "IP-ClassOfTraffic": _.OSI
}, Ya = {
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
function Ja(t) {
  return [
    dt`<mwc-formfield label="${g("connectedap.wizard.addschemainsttype")}">
      <mwc-checkbox
        id="instType"
        ?checked="${t.hasInstType}"
      ></mwc-checkbox>
    </mwc-formfield>`,
    dt`${Object.entries(t.attributes).map(
      ([e, i]) => dt`<wizard-textfield
          label="${e}"
          ?nullable=${Ya[e]}
          .maybeValue=${i}
          pattern="${re(Qa[e])}"
          required
        ></wizard-textfield>`
    )}`
  ];
}
function es(t, e) {
  return t.querySelectorAll("P").length !== e.querySelectorAll("P").length ? !1 : Array.from(t.querySelectorAll("P")).filter(
    (i) => !e.querySelector(`Address > P[type="${i.getAttribute("type")}"]`)?.isEqualNode(i)
  ).length === 0;
}
function ts(t, e, i) {
  const r = ge(e.ownerDocument, "Address", {});
  return Object.entries(t).filter(([n, a]) => a !== null).forEach(([n, a]) => {
    const s = n, o = ge(e.ownerDocument, "P", { type: s });
    i && o.setAttributeNS(
      "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:type",
      "tP_" + n
    ), o.textContent = a, r.appendChild(o);
  }), r;
}
function is(t, e, i) {
  const r = [], n = ts(e, t, i), a = t.querySelector("Address");
  return a !== null && !es(a, n) ? (r.push({
    old: {
      parent: t,
      element: a,
      reference: a.nextSibling
    }
  }), r.push({
    new: {
      parent: t,
      element: n,
      reference: a.nextSibling
    }
  })) : a === null && r.push({
    new: {
      parent: t,
      element: n
    }
  }), r;
}
function xi(t, e, i, r) {
  if (e === null) {
    const a = ge(r.ownerDocument, t, {
      unit: "s",
      multiplier: "m"
    });
    return a.textContent = i, {
      new: {
        parent: r,
        element: a,
        reference: r.firstElementChild
      }
    };
  }
  if (i === null)
    return {
      old: {
        parent: r,
        element: e,
        reference: e.nextSibling
      }
    };
  const n = e.cloneNode(!1);
  return n.textContent = i, {
    old: { element: e },
    new: { element: n }
  };
}
function rs(t) {
  return (e, i) => {
    const r = {
      actions: [],
      title: g("gse.action.addaddress", {
        identity: w(t)
      })
    }, n = i.shadowRoot?.querySelector("#instType")?.checked ?? !1, a = {};
    a["MAC-Address"] = J(
      e.find((c) => c.label === "MAC-Address")
    ), a.APPID = J(e.find((c) => c.label === "APPID")), a["VLAN-ID"] = J(
      e.find((c) => c.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = J(
      e.find((c) => c.label === "VLAN-PRIORITY")
    ), is(t, a, n).forEach((c) => {
      r.actions.push(c);
    });
    const o = J(e.find((c) => c.label === "MinTime")), l = J(e.find((c) => c.label === "MaxTime"));
    return o !== (t.querySelector("MinTime")?.textContent?.trim() ?? null) && r.actions.push(
      xi(
        "MinTime",
        t.querySelector("MinTime"),
        o,
        t
      )
    ), l !== (t.querySelector("MaxTime")?.textContent?.trim() ?? null) && r.actions.push(
      xi(
        "MaxTime",
        t.querySelector("MaxTime"),
        l,
        t
      )
    ), [r];
  };
}
function ns(t) {
  const e = t.querySelector("MinTime")?.innerHTML.trim() ?? null, i = t.querySelector("MaxTime")?.innerHTML.trim() ?? null, r = Array.from(t.querySelectorAll("Address > P")).some(
    (a) => a.getAttribute("xsi:type")
  ), n = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((a) => {
    n[a] || (n[a] = t.querySelector(`Address > P[type="${a}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: g("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        label: g("save"),
        icon: "save",
        action: rs(t)
      },
      content: [
        ...Ja({ hasInstType: r, attributes: n }),
        d`<wizard-textfield
          label="MinTime"
          .maybeValue=${e}
          nullable
          suffix="ms"
          type="number"
        ></wizard-textfield>`,
        d`<wizard-textfield
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
function Zi(t) {
  const e = t.getAttribute("name"), i = t.closest("IED")?.getAttribute("name"), r = t.closest("AccessPoint")?.getAttribute("name"), n = t.closest("LDevice")?.getAttribute("inst");
  return t.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${r}"] > GSE[ldInst="${n}"][cbName="${e}"]`
  );
}
function as(t) {
  return [
    d`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${g("scl.name")}"
      required
      validationMessage="${g("textfield.required")}"
      pattern="${Ga.asciName}"
      maxLength="${Ba.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${g("scl.desc")}"
    ></wizard-textfield>`,
    d`<wizard-select
      label="type"
      .maybeValue=${t.type}
      helper="${g("scl.type")}"
      nullable
      required
      >${["GOOSE", "GSSE"].map(
      (e) => d`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`,
    d`<wizard-textfield
      label="appID"
      .maybeValue=${t.appID}
      helper="${g("scl.id")}"
      required
      validationMessage="${g("textfield.nonempty")}"
    ></wizard-textfield>`,
    d`<wizard-checkbox
      label="fixedOffs"
      .maybeValue=${t.fixedOffs}
      nullable
      helper="${g("scl.fixedOffs")}"
    ></wizard-checkbox>`,
    d`<wizard-select
      label="securityEnabled"
      .maybeValue=${t.securityEnabled}
      nullable
      required
      helper="${g("scl.securityEnable")}"
      >${Wa.map(
      (e) => d`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function ss(t) {
  if (!t.parentElement) return null;
  const e = t.parentElement.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), i = Zi(t), r = Array.from(
    t.parentElement?.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    ) ?? []
  ).filter(
    (o) => o.getAttribute("datSet") === e?.getAttribute("name")
  ).length <= 1, n = [];
  n.push({
    old: {
      parent: t.parentElement,
      element: t,
      reference: t.nextSibling
    }
  }), e && r && n.push({
    old: {
      parent: t.parentElement,
      element: e,
      reference: e.nextSibling
    }
  }), i && n.push({
    old: {
      parent: i.parentElement,
      element: i,
      reference: i.nextSibling
    }
  });
  const a = t.getAttribute("name"), s = t.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: g("controlblock.action.remove", {
      type: t.tagName,
      name: a,
      iedName: s
    }),
    actions: n
  };
}
function os(t) {
  return (e) => {
    const i = ss(t);
    i && e.dispatchEvent(It(i)), e.dispatchEvent(Mt());
  };
}
function cs(t) {
  return (e) => {
    e.dispatchEvent(Vt(() => Xa(t)));
  };
}
function ds(t) {
  return (e) => {
    e.dispatchEvent(Vt(() => ns(t)));
  };
}
function ls(t) {
  return (e) => {
    const i = e.find((c) => c.label === "name").value, r = J(e.find((c) => c.label === "desc")), n = J(e.find((c) => c.label === "type")), a = J(e.find((c) => c.label === "appID")), s = J(e.find((c) => c.label === "fixedOffs")), o = J(
      e.find((c) => c.label === "securityEnabled")
    );
    if (i === t.getAttribute("name") && r === t.getAttribute("desc") && n === t.getAttribute("type") && a === t.getAttribute("appID") && s === t.getAttribute("fixedOffs") && o === t.getAttribute("securityEnabled"))
      return [];
    const l = kt(t, {
      name: i,
      desc: r,
      type: n,
      appID: a,
      fixedOffs: s,
      securityEnabled: o
    });
    return [{ old: { element: t }, new: { element: l } }];
  };
}
function us(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), r = t.getAttribute("type"), n = t.getAttribute("appID"), a = t.getAttribute("fixedOffs"), s = t.getAttribute("securityEnabled"), o = Zi(t), l = t.parentElement?.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), c = [];
  return c.push({
    icon: "delete",
    label: g("remove"),
    action: os(t)
  }), l && c.push({
    icon: "edit",
    label: g("scl.DataSet"),
    action: cs(l)
  }), o && c.push({
    icon: "edit",
    label: g("scl.Communication"),
    action: ds(o)
  }), [
    {
      title: g("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: g("save"),
        action: ls(t)
      },
      menuActions: c,
      content: [
        ...as({
          name: e,
          desc: i,
          type: r,
          appID: n,
          fixedOffs: a,
          securityEnabled: s
        })
      ]
    }
  ];
}
function ps() {
}
const ms = {
  GSEControl: {
    edit: us,
    create: ps
  }
};
var hs = Object.defineProperty, fs = Object.getOwnPropertyDescriptor, qt = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? fs(e, i) : e, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (n = (r ? s(e, i, n) : s(n)) || n);
  return r && n && hs(e, i, n), n;
};
let xe, Re;
function bs() {
  xe = void 0, Re = void 0;
}
addEventListener("open-doc", bs);
let He = class extends ve {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
  onSelect(t) {
    if (t == xe) return;
    const i = t.parentElement?.querySelector(
      `DataSet[name=${t.getAttribute("datSet")}]`
    );
    xe = t, Re = i, this.dispatchEvent(
      pi(xe, Re)
    ), this.requestUpdate();
  }
  renderGoose(t) {
    return d`<mwc-list-item
      @click=${() => this.onSelect(t)}
      graphic="large"
      hasMeta
      value="${w(t)}"
    >
      <mwc-icon slot="graphic">${La}</mwc-icon>
      <span>${t.getAttribute("name")}</span>
      <mwc-icon-button
        class="${Ne({
      hidden: t !== xe
    })}"
        slot="meta"
        icon="edit"
        @click=${() => this.openEditWizard(t)}
      ></mwc-icon-button>
    </mwc-list-item>`;
  }
  openEditWizard(t) {
    const e = ms.GSEControl.edit(t);
    e && this.dispatchEvent(Mt(e));
  }
  updated() {
    this.dispatchEvent(
      pi(xe, Re ?? void 0)
    );
  }
  firstUpdated() {
    xe = void 0, Re = void 0;
  }
  render() {
    return d` <section tabindex="0">
      <h1>${g("subscription.goose.publisher.title")}</h1>
      <filtered-list activatable>
        ${Ui(this.doc).map(
      (t) => d`
              <mwc-list-item
                noninteractive
                graphic="icon"
                value="${Array.from(t.querySelectorAll("GSEControl")).filter((e) => e.hasAttribute("datSet")).map((e) => {
        const i = w(e);
        return typeof i == "string" ? i : "";
      }).join(" ")}"
              >
                <span>${Pi(t)}</span>
                <mwc-icon slot="graphic">developer_board</mwc-icon>
              </mwc-list-item>
              <li divider role="separator"></li>
              ${Array.from(
        t.querySelectorAll(
          ":scope > AccessPoint > Server > LDevice > LN0 > GSEControl"
        )
      ).filter((e) => e.hasAttribute("datSet")).map((e) => this.renderGoose(e))}
            `
    )}
      </filtered-list>
    </section>`;
  }
};
He.styles = te`
    ${Gt}

    mwc-list-item {
      --mdc-list-item-meta-size: 48px;
    }

    mwc-icon-button.hidden {
      display: none;
    }

    mwc-list-item.hidden[noninteractive] + li[divider] {
      display: none;
    }
  `;
qt([
  p({ attribute: !1 })
], He.prototype, "doc", 2);
qt([
  p({ type: Number })
], He.prototype, "editCount", 2);
He = qt([
  X("goose-list")
], He);
var gs = Object.defineProperty, vs = Object.getOwnPropertyDescriptor, at = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? vs(e, i) : e, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (n = (r ? s(e, i, n) : s(n)) || n);
  return r && n && gs(e, i, n), n;
};
let Pe;
function ys() {
  Pe = void 0;
}
addEventListener("open-doc", ys);
let De = class extends ve {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
  onIedSelect(t) {
    Pe = t, this.dispatchEvent(hi(Pe));
  }
  updated() {
    this.dispatchEvent(hi(Pe));
  }
  firstUpdated() {
    Pe = void 0;
  }
  render() {
    return d` <section tabindex="0">
      <h1>
        ${g(`subscription.${this.serviceType}.subscriber.iedListTitle`)}
      </h1>
      <filtered-list activatable>
        ${Ui(this.doc).map(
      (t) => d`
              <mwc-list-item
                @click=${() => this.onIedSelect(t)}
                graphic="icon"
              >
                <span>${Pi(t)}</span>
                <mwc-icon slot="graphic">developer_board</mwc-icon>
              </mwc-list-item>
            `
    )}
      </filtered-list>
    </section>`;
  }
};
De.styles = te`
    ${Gt}
  `;
at([
  p()
], De.prototype, "doc", 2);
at([
  p({ type: Number })
], De.prototype, "editCount", 2);
at([
  p({ type: String })
], De.prototype, "serviceType", 2);
De = at([
  X("ied-list")
], De);
var Ss = Object.defineProperty, qe = (t, e, i, r) => {
  for (var n = void 0, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (n = s(e, i, n) || n);
  return n && Ss(e, i, n), n;
};
let ht = ee.PUBLISHER;
class Ue extends ve {
  constructor() {
    super(), this.editCount = -1, this.addEventListener("view", (e) => {
      ht = e.detail.view, this.requestUpdate();
    });
  }
  firstUpdated() {
    ht == ee.PUBLISHER ? this.goosePublisherView.setAttribute("checked", "") : this.gooseSubscriberView.setAttribute("checked", "");
  }
  render() {
    return d`<div>
      <mwc-formfield label="${g("subscription.goose.view.publisherView")}">
        <mwc-radio
          id="goosePublisherView"
          name="view"
          value="goose"
          @click=${() => this.listDiv.dispatchEvent(mi(ee.PUBLISHER))}
        ></mwc-radio>
      </mwc-formfield>
      <mwc-formfield label="${g("subscription.goose.view.subscriberView")}">
        <mwc-radio
          id="gooseSubscriberView"
          name="view"
          value="ied"
          @click=${() => this.listDiv.dispatchEvent(mi(ee.SUBSCRIBER))}
        ></mwc-radio>
      </mwc-formfield>
      <div class="container">
        ${ht == ee.PUBLISHER ? d`<goose-list
              class="row"
              .editCount=${this.editCount}
              .doc=${this.doc}
            ></goose-list>` : d`<ied-list
              class="row"
              .editCount=${this.editCount}
              .doc=${this.doc}
              serviceType="goose"
            ></ied-list>`}
        <subscriber-list-goose
          class="row"
          .editCount=${this.editCount}
          .doc=${this.doc}
        ></subscriber-list-goose>
      </div>
    </div>`;
  }
  static {
    this.styles = te`
    :host {
      width: 100vw;
    }

    .container {
      display: flex;
      padding: 8px 6px 16px;
      height: 86vh;
    }

    .row {
      flex: 50%;
      margin: 0px 6px 0px;
      min-width: 300px;
      height: 100%;
      overflow-y: scroll;
    }
  `;
  }
}
qe([
  p()
], Ue.prototype, "doc");
qe([
  p({ type: Number })
], Ue.prototype, "editCount");
qe([
  R("#goosePublisherView")
], Ue.prototype, "goosePublisherView");
qe([
  R("#gooseSubscriberView")
], Ue.prototype, "gooseSubscriberView");
qe([
  R('div[class="container"]')
], Ue.prototype, "listDiv");
export {
  Ue as default
};
