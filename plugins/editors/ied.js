import { LitElement as Le, query as F, property as b, state as E, html as c, css as re, customElement as G, queryAsync as ni, eventOptions as Yi, queryAssignedNodes as Ji, unsafeCSS as er, svg as T } from "lit-element";
import { NodePart as kn, AttributePart as Dn, directive as tr, nothing as q, html as v, render as ir } from "lit-html";
import "@material/mwc-icon-button";
import "@material/mwc-dialog";
import "@material/mwc-formfield";
import { TextField as In } from "@material/mwc-textfield";
import { List as Nn } from "@material/mwc-list";
import "@material/mwc-icon";
import { Select as $n } from "@material/mwc-select";
import "@material/mwc-menu";
import "@material/mwc-switch";
import "@material/mwc-icon-button-toggle";
import "@material/mwc-button";
import "@material/mwc-textarea";
const _n = 1e3 * 60, Ht = "langChanged";
function Ln(e, t, i) {
  return Object.entries(Bt(t || {})).reduce((r, [n, a]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(Bt(a))), e);
}
function zn(e, t) {
  const i = e.split(".");
  let r = t.strings;
  for (; r != null && i.length > 0; )
    r = r[i.shift()];
  return r != null ? r.toString() : null;
}
function Bt(e) {
  return typeof e == "function" ? e() : e;
}
const Tn = () => ({
  loader: () => Promise.resolve({}),
  empty: (e) => `[${e}]`,
  lookup: zn,
  interpolate: Ln,
  translationCache: {}
});
let nt = Tn();
function Vn(e) {
  return nt = Object.assign(Object.assign({}, nt), e);
}
function Pn(e) {
  window.dispatchEvent(new CustomEvent(Ht, { detail: e }));
}
function Rn(e, t, i = nt) {
  Pn({
    previousStrings: i.strings,
    previousLang: i.lang,
    lang: i.lang = e,
    strings: i.strings = t
  });
}
function On(e, t) {
  const i = (r) => e(r.detail);
  return window.addEventListener(Ht, i, t), () => window.removeEventListener(Ht, i);
}
async function Fn(e, t = nt) {
  const i = await t.loader(e, t);
  t.translationCache = {}, Rn(e, i, t);
}
function l(e, t, i = nt) {
  let r = i.translationCache[e] || (i.translationCache[e] = i.lookup(e, i) || i.empty(e, i));
  return t = t != null ? Bt(t) : null, t != null ? i.interpolate(r, t, i) : r;
}
function rr(e) {
  return e instanceof kn ? e.startNode.isConnected : e instanceof Dn ? e.committer.element.isConnected : e.element.isConnected;
}
function qn(e) {
  for (const [t] of e)
    rr(t) || e.delete(t);
}
function Mn(e) {
  "requestIdleCallback" in window ? window.requestIdleCallback(e) : setTimeout(e);
}
function Hn(e, t) {
  setInterval(() => Mn(() => qn(e)), t);
}
const ai = /* @__PURE__ */ new Map();
function Bn() {
  On((e) => {
    for (const [t, i] of ai)
      rr(t) && nr(t, i, e);
  });
}
Bn();
Hn(ai, _n);
function nr(e, t, i) {
  const r = t(i);
  e.value !== r && (e.setValue(r), e.commit());
}
tr((e) => (t) => {
  ai.set(t, e), nr(t, e);
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
const ar = /* @__PURE__ */ new WeakMap(), kt = (e) => (...t) => {
  const i = e(...t);
  return ar.set(i, !0), i;
}, wi = (e) => typeof e == "function" && ar.has(e);
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
const Vt = {};
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
const or = (e) => e === null || !(typeof e == "object" || typeof e == "function");
class Dt {
  constructor(t) {
    this.value = void 0, this.committer = t;
  }
  setValue(t) {
    t !== Vt && (!or(t) || t !== this.value) && (this.value = t, wi(t) || (this.committer.dirty = !0));
  }
  commit() {
    for (; wi(this.value); ) {
      const t = this.value;
      this.value = Vt, t(this);
    }
    this.value !== Vt && this.committer.commit();
  }
}
class lr extends Dt {
}
let Gn = !1;
(() => {
  try {
    const e = {
      get capture() {
        return Gn = !0, !1;
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
var Gt = function(e, t) {
  return Gt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
    i.__proto__ = r;
  } || function(i, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
  }, Gt(e, t);
};
function sr(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Gt(e, t);
  function i() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i());
}
var qe = function() {
  return qe = Object.assign || function(t) {
    for (var i, r = 1, n = arguments.length; r < n; r++) {
      i = arguments[r];
      for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
    }
    return t;
  }, qe.apply(this, arguments);
};
function g(e, t, i, r) {
  var n = arguments.length, a = n < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, i, r);
  else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, i, a) : o(t, i)) || a);
  return n > 3 && a && Object.defineProperty(t, i, a), a;
}
function ht(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, i = t && e[t], r = 0;
  if (i) return i.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
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
function Wn(e, t) {
  var i = e.matches || e.webkitMatchesSelector || e.msMatchesSelector;
  return i.call(e, t);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Un = (e) => e.nodeType === Node.ELEMENT_NODE;
function jn(e) {
  return {
    addClass: (t) => {
      e.classList.add(t);
    },
    removeClass: (t) => {
      e.classList.remove(t);
    },
    hasClass: (t) => e.classList.contains(t)
  };
}
const cr = () => {
}, Kn = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", cr, Kn);
document.removeEventListener("x", cr);
const dr = (e = window.document) => {
  let t = e.activeElement;
  const i = [];
  if (!t)
    return i;
  for (; t && (i.push(t), t.shadowRoot); )
    t = t.shadowRoot.activeElement;
  return i;
}, Zn = (e) => {
  const t = dr();
  if (!t.length)
    return !1;
  const i = t[t.length - 1], r = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let n = [];
  const a = (o) => {
    n = o.composedPath();
  };
  return document.body.addEventListener("check-if-focused", a), i.dispatchEvent(r), document.body.removeEventListener("check-if-focused", a), n.indexOf(e) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class oi extends Le {
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
var li = (
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
var Xn = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Qn = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Ci = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function Yn(e, t, i) {
  if (!e)
    return { x: 0, y: 0 };
  var r = t.x, n = t.y, a = r + i.left, o = n + i.top, s, d;
  if (e.type === "touchstart") {
    var u = e;
    s = u.changedTouches[0].pageX - a, d = u.changedTouches[0].pageY - o;
  } else {
    var p = e;
    s = p.pageX - a, d = p.pageY - o;
  }
  return { x: s, y: d };
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
var Ei = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], ki = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], ft = [], Jn = (
  /** @class */
  function(e) {
    sr(t, e);
    function t(i) {
      var r = e.call(this, qe(qe({}, t.defaultAdapter), i)) || this;
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
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return Xn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return Qn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return Ci;
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
      var i = this, r = this.supportsPressRipple();
      if (this.registerRootHandlers(r), r) {
        var n = t.cssClasses, a = n.ROOT, o = n.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.addClass(a), i.adapter.isUnbounded() && (i.adapter.addClass(o), i.layoutInternal());
        });
      }
    }, t.prototype.destroy = function() {
      var i = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(t.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(t.cssClasses.FG_DEACTIVATION));
        var r = t.cssClasses, n = r.ROOT, a = r.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.removeClass(n), i.adapter.removeClass(a), i.removeCssVars();
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
      var r = t.cssClasses.UNBOUNDED;
      i ? this.adapter.addClass(r) : this.adapter.removeClass(r);
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
      var r, n;
      if (i) {
        try {
          for (var a = ht(Ei), o = a.next(); !o.done; o = a.next()) {
            var s = o.value;
            this.adapter.registerInteractionHandler(s, this.activateHandler);
          }
        } catch (d) {
          r = { error: d };
        } finally {
          try {
            o && !o.done && (n = a.return) && n.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, t.prototype.registerDeactivationHandlers = function(i) {
      var r, n;
      if (i.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var a = ht(ki), o = a.next(); !o.done; o = a.next()) {
            var s = o.value;
            this.adapter.registerDocumentInteractionHandler(s, this.deactivateHandler);
          }
        } catch (d) {
          r = { error: d };
        } finally {
          try {
            o && !o.done && (n = a.return) && n.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
    }, t.prototype.deregisterRootHandlers = function() {
      var i, r;
      try {
        for (var n = ht(Ei), a = n.next(); !a.done; a = n.next()) {
          var o = a.value;
          this.adapter.deregisterInteractionHandler(o, this.activateHandler);
        }
      } catch (s) {
        i = { error: s };
      } finally {
        try {
          a && !a.done && (r = n.return) && r.call(n);
        } finally {
          if (i) throw i.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, t.prototype.deregisterDeactivationHandlers = function() {
      var i, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var n = ht(ki), a = n.next(); !a.done; a = n.next()) {
          var o = a.value;
          this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler);
        }
      } catch (s) {
        i = { error: s };
      } finally {
        try {
          a && !a.done && (r = n.return) && r.call(n);
        } finally {
          if (i) throw i.error;
        }
      }
    }, t.prototype.removeCssVars = function() {
      var i = this, r = t.strings, n = Object.keys(r);
      n.forEach(function(a) {
        a.indexOf("VAR_") === 0 && i.adapter.updateCssVariable(r[a], null);
      });
    }, t.prototype.activateImpl = function(i) {
      var r = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var n = this.activationState;
        if (!n.isActivated) {
          var a = this.previousActivationEvent, o = a && i !== void 0 && a.type !== i.type;
          if (!o) {
            n.isActivated = !0, n.isProgrammatic = i === void 0, n.activationEvent = i, n.wasActivatedByPointer = n.isProgrammatic ? !1 : i !== void 0 && (i.type === "mousedown" || i.type === "touchstart" || i.type === "pointerdown");
            var s = i !== void 0 && ft.length > 0 && ft.some(function(d) {
              return r.adapter.containsEventTarget(d);
            });
            if (s) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (ft.push(i.target), this.registerDeactivationHandlers(i)), n.wasElementMadeActive = this.checkElementMadeActive(i), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              ft = [], !n.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (n.wasElementMadeActive = r.checkElementMadeActive(i), n.wasElementMadeActive && r.animateActivation()), n.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, t.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, t.prototype.animateActivation = function() {
      var i = this, r = t.strings, n = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, o = t.cssClasses, s = o.FG_DEACTIVATION, d = o.FG_ACTIVATION, u = t.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var p = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var y = this.getFgTranslationCoordinates(), S = y.startPoint, w = y.endPoint;
        p = S.x + "px, " + S.y + "px", h = w.x + "px, " + w.y + "px";
      }
      this.adapter.updateCssVariable(n, p), this.adapter.updateCssVariable(a, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(s), this.adapter.computeBoundingRect(), this.adapter.addClass(d), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, u);
    }, t.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, r = i.activationEvent, n = i.wasActivatedByPointer, a;
      n ? a = Yn(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      var i = this, r = t.cssClasses.FG_DEACTIVATION, n = this.activationState, a = n.hasDeactivationUXRun, o = n.isActivated, s = a || !o;
      s && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        i.adapter.removeClass(r);
      }, Ci.FG_DEACTIVATION_MS));
    }, t.prototype.rmBoundedActivationClasses = function() {
      var i = t.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(i), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, t.prototype.resetActivationState = function() {
      var i = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return i.previousActivationEvent = void 0;
      }, t.numbers.TAP_DELAY_MS);
    }, t.prototype.deactivateImpl = function() {
      var i = this, r = this.activationState;
      if (r.isActivated) {
        var n = qe({}, r);
        r.isProgrammatic ? (requestAnimationFrame(function() {
          i.animateDeactivation(n);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          i.activationState.hasDeactivationUXRun = !0, i.animateDeactivation(n), i.resetActivationState();
        }));
      }
    }, t.prototype.animateDeactivation = function(i) {
      var r = i.wasActivatedByPointer, n = i.wasElementMadeActive;
      (r || n) && this.runDeactivationUXLogicIfReady();
    }, t.prototype.layoutInternal = function() {
      var i = this;
      this.frame = this.adapter.computeBoundingRect();
      var r = Math.max(this.frame.height, this.frame.width), n = function() {
        var o = Math.sqrt(Math.pow(i.frame.width, 2) + Math.pow(i.frame.height, 2));
        return o + t.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : n();
      var a = Math.floor(r * t.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, t.prototype.updateLayoutCssVars = function() {
      var i = t.strings, r = i.VAR_FG_SIZE, n = i.VAR_LEFT, a = i.VAR_TOP, o = i.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(o, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(n, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, t;
  }(li)
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
class ea {
  constructor(t) {
    this.classes = /* @__PURE__ */ new Set(), this.changed = !1, this.element = t;
    const i = (t.getAttribute("class") || "").split(/\s+/);
    for (const r of i)
      this.classes.add(r);
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
const Di = /* @__PURE__ */ new WeakMap(), Be = kt((e) => (t) => {
  if (!(t instanceof Dt) || t instanceof lr || t.committer.name !== "class" || t.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = t, { element: r } = i;
  let n = Di.get(t);
  n === void 0 && (r.setAttribute("class", i.strings.join(" ")), Di.set(t, n = /* @__PURE__ */ new Set()));
  const a = r.classList || new ea(r);
  n.forEach((o) => {
    o in e || (a.remove(o), n.delete(o));
  });
  for (const o in e) {
    const s = e[o];
    s != n.has(o) && (s ? (a.add(o), n.add(o)) : (a.remove(o), n.delete(o)));
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
const Ii = /* @__PURE__ */ new WeakMap(), ta = kt((e) => (t) => {
  if (!(t instanceof Dt) || t instanceof lr || t.committer.name !== "style" || t.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = t, { style: r } = i.element;
  let n = Ii.get(t);
  n === void 0 && (r.cssText = i.strings.join(" "), Ii.set(t, n = /* @__PURE__ */ new Set())), n.forEach((a) => {
    a in e || (n.delete(a), a.indexOf("-") === -1 ? r[a] = null : r.removeProperty(a));
  });
  for (const a in e)
    n.add(a), a.indexOf("-") === -1 ? r[a] = e[a] : r.setProperty(a, e[a]);
});
class j extends oi {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Jn;
  }
  get isActive() {
    return Wn(this.parentElement || this, ":active");
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
    const t = this.activated && (this.primary || !this.accent), i = this.selected && (this.primary || !this.accent), r = {
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
    return c`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Be(r)}"
          style="${ta({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
g([
  F(".mdc-ripple-surface")
], j.prototype, "mdcRoot", void 0);
g([
  b({ type: Boolean })
], j.prototype, "primary", void 0);
g([
  b({ type: Boolean })
], j.prototype, "accent", void 0);
g([
  b({ type: Boolean })
], j.prototype, "unbounded", void 0);
g([
  b({ type: Boolean })
], j.prototype, "disabled", void 0);
g([
  b({ type: Boolean })
], j.prototype, "activated", void 0);
g([
  b({ type: Boolean })
], j.prototype, "selected", void 0);
g([
  b({ type: Boolean })
], j.prototype, "internalUseStateLayerCustomProperties", void 0);
g([
  E()
], j.prototype, "hovering", void 0);
g([
  E()
], j.prototype, "bgFocused", void 0);
g([
  E()
], j.prototype, "fgActivation", void 0);
g([
  E()
], j.prototype, "fgDeactivation", void 0);
g([
  E()
], j.prototype, "fgScale", void 0);
g([
  E()
], j.prototype, "fgSize", void 0);
g([
  E()
], j.prototype, "translateStart", void 0);
g([
  E()
], j.prototype, "translateEnd", void 0);
g([
  E()
], j.prototype, "leftPos", void 0);
g([
  E()
], j.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ia = re`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let Wt = class extends j {
};
Wt.styles = [ia];
Wt = g([
  G("mwc-ripple")
], Wt);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function ra(e, t, i) {
  const r = e.constructor;
  if (!i) {
    const s = `__${t}`;
    if (i = r.getPropertyDescriptor(t, s), !i)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const n = i;
  let a = "";
  if (!n.set)
    throw new Error(`@ariaProperty requires a setter for ${t}`);
  const o = {
    configurable: !0,
    enumerable: !0,
    set(s) {
      a === "" && (a = r.getPropertyOptions(t).attribute), this.hasAttribute(a) && this.removeAttribute(a), n.set.call(this, s);
    }
  };
  return n.get && (o.get = function() {
    return n.get.call(this);
  }), o;
}
function st(e, t, i) {
  if (t !== void 0)
    return ra(e, t, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class si extends oi {
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
si.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ci {
  constructor(t) {
    this.startPress = (i) => {
      t().then((r) => {
        r && r.startPress(i);
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
const Pt = /* @__PURE__ */ new WeakMap(), pe = kt((e) => (t) => {
  const i = Pt.get(t);
  if (e === void 0 && t instanceof Dt) {
    if (i !== void 0 || !Pt.has(t)) {
      const r = t.committer.name;
      t.committer.element.removeAttribute(r);
    }
  } else e !== i && t.setValue(e);
  Pt.set(t, e);
});
class K extends si {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new ci(() => (this.shouldRenderRipple = !0, this.ripple.then((t) => this.rippleElement = t), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(t) {
    const i = t.get("indeterminate"), r = t.get("checked"), n = t.get("disabled");
    if (i !== void 0 || r !== void 0 || n !== void 0) {
      const a = this.calculateAnimationStateName(!!r, !!i, !!n), o = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${a}-${o}`;
    }
    super.update(t);
  }
  calculateAnimationStateName(t, i, r) {
    return r ? "disabled" : i ? "indeterminate" : t ? "checked" : "unchecked";
  }
  // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? c`<mwc-ripple
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
    }, r = this.indeterminate ? "mixed" : void 0;
    return c`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Be(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${pe(this.name)}"
              aria-checked="${pe(r)}"
              aria-label="${pe(this.ariaLabel)}"
              aria-labelledby="${pe(this.ariaLabelledBy)}"
              aria-describedby="${pe(this.ariaDescribedBy)}"
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
g([
  F(".mdc-checkbox")
], K.prototype, "mdcRoot", void 0);
g([
  F("input")
], K.prototype, "formElement", void 0);
g([
  b({ type: Boolean, reflect: !0 })
], K.prototype, "checked", void 0);
g([
  b({ type: Boolean })
], K.prototype, "indeterminate", void 0);
g([
  b({ type: Boolean, reflect: !0 })
], K.prototype, "disabled", void 0);
g([
  b({ type: String, reflect: !0 })
], K.prototype, "name", void 0);
g([
  b({ type: String })
], K.prototype, "value", void 0);
g([
  st,
  b({ type: String, attribute: "aria-label" })
], K.prototype, "ariaLabel", void 0);
g([
  st,
  b({ type: String, attribute: "aria-labelledby" })
], K.prototype, "ariaLabelledBy", void 0);
g([
  st,
  b({ type: String, attribute: "aria-describedby" })
], K.prototype, "ariaDescribedBy", void 0);
g([
  b({ type: Boolean })
], K.prototype, "reducedTouchTarget", void 0);
g([
  E()
], K.prototype, "animationClass", void 0);
g([
  E()
], K.prototype, "shouldRenderRipple", void 0);
g([
  E()
], K.prototype, "focused", void 0);
g([
  E()
], K.prototype, "useStateLayerCustomProperties", void 0);
g([
  ni("mwc-ripple")
], K.prototype, "ripple", void 0);
g([
  Yi({ passive: !0 })
], K.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const na = re`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let Ut = class extends K {
};
Ut.styles = [na];
Ut = g([
  G("mwc-checkbox")
], Ut);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ye = (e) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (t, i) => {
    if (t.constructor._observers) {
      if (!t.constructor.hasOwnProperty("_observers")) {
        const r = t.constructor._observers;
        t.constructor._observers = /* @__PURE__ */ new Map(), r.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (n, a) => t.constructor._observers.set(a, n)
        );
      }
    } else {
      t.constructor._observers = /* @__PURE__ */ new Map();
      const r = t.updated;
      t.updated = function(n) {
        r.call(this, n), n.forEach((a, o) => {
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
class Z extends Le {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new ci(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const t = this.renderText(), i = this.graphic ? this.renderGraphic() : c``, r = this.hasMeta ? this.renderMeta() : c``;
    return c`
      ${this.renderRipple()}
      ${i}
      ${t}
      ${r}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? c`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? c`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const t = {
      multi: this.multipleGraphics
    };
    return c`
      <span class="mdc-deprecated-list-item__graphic material-icons ${Be(t)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return c`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const t = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return c`
      <span class="mdc-deprecated-list-item__text">
        ${t}
      </span>`;
  }
  renderSingleLine() {
    return c`<slot></slot>`;
  }
  renderTwoline() {
    return c`
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
    const r = () => {
      window.removeEventListener(t, r), this.rippleHandlers.endPress();
    };
    window.addEventListener(t, r), this.rippleHandlers.startPress(i);
  }
  fireRequestSelected(t, i) {
    if (this.noninteractive)
      return;
    const r = new CustomEvent("request-selected", { bubbles: !0, composed: !0, detail: { source: i, selected: t } });
    this.dispatchEvent(r);
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
g([
  F("slot")
], Z.prototype, "slotElement", void 0);
g([
  ni("mwc-ripple")
], Z.prototype, "ripple", void 0);
g([
  b({ type: String })
], Z.prototype, "value", void 0);
g([
  b({ type: String, reflect: !0 })
], Z.prototype, "group", void 0);
g([
  b({ type: Number, reflect: !0 })
], Z.prototype, "tabindex", void 0);
g([
  b({ type: Boolean, reflect: !0 }),
  ye(function(e) {
    e ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], Z.prototype, "disabled", void 0);
g([
  b({ type: Boolean, reflect: !0 })
], Z.prototype, "twoline", void 0);
g([
  b({ type: Boolean, reflect: !0 })
], Z.prototype, "activated", void 0);
g([
  b({ type: String, reflect: !0 })
], Z.prototype, "graphic", void 0);
g([
  b({ type: Boolean })
], Z.prototype, "multipleGraphics", void 0);
g([
  b({ type: Boolean })
], Z.prototype, "hasMeta", void 0);
g([
  b({ type: Boolean, reflect: !0 }),
  ye(function(e) {
    e ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], Z.prototype, "noninteractive", void 0);
g([
  b({ type: Boolean, reflect: !0 }),
  ye(function(e) {
    const t = this.getAttribute("role"), i = t === "gridcell" || t === "option" || t === "row" || t === "tab";
    if (i && e ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(e, "property");
  })
], Z.prototype, "selected", void 0);
g([
  E()
], Z.prototype, "shouldRenderRipple", void 0);
g([
  E()
], Z.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ct extends Z {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const t = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : c``, n = this.hasMeta && this.left ? this.renderMeta() : c``, a = this.renderRipple();
    return c`
      ${a}
      ${r}
      ${this.left ? "" : i}
      <span class=${Be(t)}>
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
  async onChange(t) {
    const i = t.target;
    this.selected === i.checked || (this._skipPropRequest = !0, this.selected = i.checked, await this.updateComplete, this._skipPropRequest = !1);
  }
}
g([
  F("slot")
], ct.prototype, "slotElement", void 0);
g([
  F("mwc-checkbox")
], ct.prototype, "checkboxElement", void 0);
g([
  b({ type: Boolean })
], ct.prototype, "left", void 0);
g([
  b({ type: String, reflect: !0 })
], ct.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ur = re`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const di = re`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Xe = class extends ct {
};
Xe.styles = [di, ur];
Xe = g([
  G("mwc-check-list-item")
], Xe);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ni = Symbol("selection controller");
class aa {
  constructor() {
    this.selected = null, this.ordered = null, this.set = /* @__PURE__ */ new Set();
  }
}
class ui {
  constructor(t) {
    this.sets = {}, this.focusedSet = null, this.mouseIsDown = !1, this.updating = !1, t.addEventListener("keydown", (i) => {
      this.keyDownHandler(i);
    }), t.addEventListener("mousedown", () => {
      this.mousedownHandler();
    }), t.addEventListener("mouseup", () => {
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
  static getController(t) {
    const r = !("global" in t) || "global" in t && t.global ? document : t.getRootNode();
    let n = r[Ni];
    return n === void 0 && (n = new ui(r), r[Ni] = n), n;
  }
  keyDownHandler(t) {
    const i = t.target;
    "checked" in i && this.has(i) && (t.key == "ArrowRight" || t.key == "ArrowDown" ? this.selectNext(i) : (t.key == "ArrowLeft" || t.key == "ArrowUp") && this.selectPrevious(i));
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
  has(t) {
    return this.getSet(t.name).set.has(t);
  }
  /**
   * Selects and returns the controlled element previous to the given element in
   * document position order. See
   * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
   *
   * @param element element relative from which preceding element is fetched
   */
  selectPrevious(t) {
    const i = this.getOrdered(t), r = i.indexOf(t), n = i[r - 1] || i[i.length - 1];
    return this.select(n), n;
  }
  /**
   * Selects and returns the controlled element next to the given element in
   * document position order. See
   * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
   *
   * @param element element relative from which following element is fetched
   */
  selectNext(t) {
    const i = this.getOrdered(t), r = i.indexOf(t), n = i[r + 1] || i[0];
    return this.select(n), n;
  }
  select(t) {
    t.click();
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
  focus(t) {
    if (this.mouseIsDown)
      return;
    const i = this.getSet(t.name), r = this.focusedSet;
    this.focusedSet = i, r != i && i.selected && i.selected != t && i.selected.focus();
  }
  /**
   * @return Returns true if atleast one radio is selected in the radio group.
   */
  isAnySelected(t) {
    const i = this.getSet(t.name);
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
  getOrdered(t) {
    const i = this.getSet(t.name);
    return i.ordered || (i.ordered = Array.from(i.set), i.ordered.sort((r, n) => r.compareDocumentPosition(n) == Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0)), i.ordered;
  }
  /**
   * Gets the selection set of the given name and creates one if it does not yet
   * exist.
   *
   * @param name Name of set
   */
  getSet(t) {
    return this.sets[t] || (this.sets[t] = new aa()), this.sets[t];
  }
  /**
   * Register the element in the selection controller.
   *
   * @param element Element to register. Registers in set of `element.name`.
   */
  register(t) {
    const i = t.name || t.getAttribute("name") || "", r = this.getSet(i);
    r.set.add(t), r.ordered = null;
  }
  /**
   * Unregister the element from selection controller.
   *
   * @param element Element to register. Registers in set of `element.name`.
   */
  unregister(t) {
    const i = this.getSet(t.name);
    i.set.delete(t), i.ordered = null, i.selected == t && (i.selected = null);
  }
  /**
   * Unselects other elements in element's set if element is checked. Noop
   * otherwise.
   *
   * @param element Element from which to calculate selection controller update.
   */
  update(t) {
    if (this.updating)
      return;
    this.updating = !0;
    const i = this.getSet(t.name);
    if (t.checked) {
      for (const r of i.set)
        r != t && (r.checked = !1);
      i.selected = t;
    }
    if (this.isAnySelected(t))
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
var oa = {
  NATIVE_CONTROL_SELECTOR: ".mdc-radio__native-control"
}, la = {
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
var sa = (
  /** @class */
  function(e) {
    sr(t, e);
    function t(i) {
      return e.call(this, qe(qe({}, t.defaultAdapter), i)) || this;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return la;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return oa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
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
    }), t.prototype.setDisabled = function(i) {
      var r = t.cssClasses.DISABLED;
      this.adapter.setNativeControlDisabled(i), i ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, t;
  }(li)
);
class Y extends si {
  constructor() {
    super(...arguments), this._checked = !1, this.useStateLayerCustomProperties = !1, this.global = !1, this.disabled = !1, this.value = "", this.name = "", this.reducedTouchTarget = !1, this.mdcFoundationClass = sa, this.formElementTabIndex = 0, this.focused = !1, this.shouldRenderRipple = !1, this.rippleElement = null, this.rippleHandlers = new ci(() => (this.shouldRenderRipple = !0, this.ripple.then((t) => {
      this.rippleElement = t;
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
  set checked(t) {
    var i, r;
    const n = this._checked;
    t !== n && (this._checked = t, this.formElement && (this.formElement.checked = t), (i = this._selectionController) === null || i === void 0 || i.update(this), t === !1 && ((r = this.formElement) === null || r === void 0 || r.blur()), this.requestUpdate("checked", n), this.dispatchEvent(new Event("checked", { bubbles: !0, composed: !0 })));
  }
  _handleUpdatedValue(t) {
    this.formElement.value = t;
  }
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? c`<mwc-ripple unbounded accent
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
        .disabled="${this.disabled}"></mwc-ripple>` : "";
  }
  get isRippleActive() {
    var t;
    return ((t = this.rippleElement) === null || t === void 0 ? void 0 : t.isActive) || !1;
  }
  connectedCallback() {
    super.connectedCallback(), this._selectionController = ui.getController(this), this._selectionController.register(this), this._selectionController.update(this);
  }
  disconnectedCallback() {
    this._selectionController.unregister(this), this._selectionController = void 0;
  }
  focus() {
    this.formElement.focus();
  }
  createAdapter() {
    return Object.assign(Object.assign({}, jn(this.mdcRoot)), { setNativeControlDisabled: (t) => {
      this.formElement.disabled = t;
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
    const t = {
      "mdc-radio--touch": !this.reducedTouchTarget,
      "mdc-ripple-upgraded--background-focused": this.focused,
      "mdc-radio--disabled": this.disabled
    };
    return c`
      <div class="mdc-radio ${Be(t)}">
        <input
          tabindex="${this.formElementTabIndex}"
          class="mdc-radio__native-control"
          type="radio"
          name="${this.name}"
          aria-label="${pe(this.ariaLabel)}"
          aria-labelledby="${pe(this.ariaLabelledBy)}"
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
  changeHandler() {
    this.checked = this.formElement.checked;
  }
}
g([
  F(".mdc-radio")
], Y.prototype, "mdcRoot", void 0);
g([
  F("input")
], Y.prototype, "formElement", void 0);
g([
  E()
], Y.prototype, "useStateLayerCustomProperties", void 0);
g([
  b({ type: Boolean })
], Y.prototype, "global", void 0);
g([
  b({ type: Boolean, reflect: !0 })
], Y.prototype, "checked", null);
g([
  b({ type: Boolean }),
  ye(function(e) {
    this.mdcFoundation.setDisabled(e);
  })
], Y.prototype, "disabled", void 0);
g([
  b({ type: String }),
  ye(function(e) {
    this._handleUpdatedValue(e);
  })
], Y.prototype, "value", void 0);
g([
  b({ type: String })
], Y.prototype, "name", void 0);
g([
  b({ type: Boolean })
], Y.prototype, "reducedTouchTarget", void 0);
g([
  b({ type: Number })
], Y.prototype, "formElementTabIndex", void 0);
g([
  E()
], Y.prototype, "focused", void 0);
g([
  E()
], Y.prototype, "shouldRenderRipple", void 0);
g([
  ni("mwc-ripple")
], Y.prototype, "ripple", void 0);
g([
  st,
  b({ attribute: "aria-label" })
], Y.prototype, "ariaLabel", void 0);
g([
  st,
  b({ attribute: "aria-labelledby" })
], Y.prototype, "ariaLabelledBy", void 0);
g([
  Yi({ passive: !0 })
], Y.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ca = re`.mdc-touch-target-wrapper{display:inline}.mdc-radio{padding:calc((40px - 20px) / 2)}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio .mdc-radio__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background::before{top:calc(-1 * (40px - 20px) / 2);left:calc(-1 * (40px - 20px) / 2);width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:calc((40px - 40px) / 2);right:calc((40px - 40px) / 2);left:calc((40px - 40px) / 2);width:40px;height:40px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:GrayText}}.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host{display:inline-block;outline:none}.mdc-radio{vertical-align:bottom}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}`;
let jt = class extends Y {
};
jt.styles = [ca];
jt = g([
  G("mwc-radio")
], jt);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class dt extends Z {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control", this._changeFromClick = !1;
  }
  render() {
    const t = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : c``, n = this.hasMeta && this.left ? this.renderMeta() : c``, a = this.renderRipple();
    return c`
      ${a}
      ${r}
      ${this.left ? "" : i}
      <mwc-radio
          global
          class=${Be(t)}
          tabindex=${this.tabindex}
          name=${pe(this.group === null ? void 0 : this.group)}
          .checked=${this.selected}
          ?disabled=${this.disabled}
          @checked=${this.onChange}>
      </mwc-radio>
      ${this.left ? i : ""}
      ${n}`;
  }
  onClick() {
    this._changeFromClick = !0, super.onClick();
  }
  async onChange(t) {
    const i = t.target;
    this.selected === i.checked || (this._skipPropRequest = !0, this.selected = i.checked, await this.updateComplete, this._skipPropRequest = !1, this._changeFromClick || this.fireRequestSelected(this.selected, "interaction")), this._changeFromClick = !1;
  }
}
g([
  F("slot")
], dt.prototype, "slotElement", void 0);
g([
  F("mwc-radio")
], dt.prototype, "radioElement", void 0);
g([
  b({ type: Boolean })
], dt.prototype, "left", void 0);
g([
  b({ type: String, reflect: !0 })
], dt.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Kt = class extends dt {
};
Kt.styles = [di, ur];
Kt = g([
  G("mwc-radio-list-item")
], Kt);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Zt = class extends Z {
};
Zt.styles = [di];
Zt = g([
  G("mwc-list-item")
], Zt);
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
var k = {
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
}, ne = /* @__PURE__ */ new Set();
ne.add(k.BACKSPACE);
ne.add(k.ENTER);
ne.add(k.SPACEBAR);
ne.add(k.PAGE_UP);
ne.add(k.PAGE_DOWN);
ne.add(k.END);
ne.add(k.HOME);
ne.add(k.ARROW_LEFT);
ne.add(k.ARROW_UP);
ne.add(k.ARROW_RIGHT);
ne.add(k.ARROW_DOWN);
ne.add(k.DELETE);
ne.add(k.ESCAPE);
ne.add(k.TAB);
var ce = {
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
}, ae = /* @__PURE__ */ new Map();
ae.set(ce.BACKSPACE, k.BACKSPACE);
ae.set(ce.ENTER, k.ENTER);
ae.set(ce.SPACEBAR, k.SPACEBAR);
ae.set(ce.PAGE_UP, k.PAGE_UP);
ae.set(ce.PAGE_DOWN, k.PAGE_DOWN);
ae.set(ce.END, k.END);
ae.set(ce.HOME, k.HOME);
ae.set(ce.ARROW_LEFT, k.ARROW_LEFT);
ae.set(ce.ARROW_UP, k.ARROW_UP);
ae.set(ce.ARROW_RIGHT, k.ARROW_RIGHT);
ae.set(ce.ARROW_DOWN, k.ARROW_DOWN);
ae.set(ce.DELETE, k.DELETE);
ae.set(ce.ESCAPE, k.ESCAPE);
ae.set(ce.TAB, k.TAB);
var ze = /* @__PURE__ */ new Set();
ze.add(k.PAGE_UP);
ze.add(k.PAGE_DOWN);
ze.add(k.END);
ze.add(k.HOME);
ze.add(k.ARROW_LEFT);
ze.add(k.ARROW_UP);
ze.add(k.ARROW_RIGHT);
ze.add(k.ARROW_DOWN);
function De(e) {
  var t = e.key;
  if (ne.has(t))
    return t;
  var i = ae.get(e.keyCode);
  return i || k.UNKNOWN;
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
var Ie, Se, O = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Ie = {}, Ie["" + O.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Ie["" + O.LIST_ITEM_CLASS] = "mdc-list-item", Ie["" + O.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Ie["" + O.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Ie["" + O.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Ie["" + O.ROOT] = "mdc-list";
var Ke = (Se = {}, Se["" + O.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", Se["" + O.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", Se["" + O.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", Se["" + O.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", Se["" + O.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", Se["" + O.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", Se["" + O.ROOT] = "mdc-deprecated-list", Se), bt = {
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
    .` + O.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + O.LIST_ITEM_CLASS + ` a,
    .` + Ke[O.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ke[O.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + O.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + O.LIST_ITEM_CLASS + ` a,
    .` + O.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + O.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Ke[O.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ke[O.LIST_ITEM_CLASS] + ` a,
    .` + Ke[O.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Ke[O.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, se = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Xt = (e, t) => e - t, da = (e, t) => {
  const i = Array.from(e), r = Array.from(t), n = { added: [], removed: [] }, a = i.sort(Xt), o = r.sort(Xt);
  let s = 0, d = 0;
  for (; s < a.length || d < o.length; ) {
    const u = a[s], p = o[d];
    if (u === p) {
      s++, d++;
      continue;
    }
    if (u !== void 0 && (p === void 0 || u < p)) {
      n.removed.push(u), s++;
      continue;
    }
    if (p !== void 0 && (u === void 0 || p < u)) {
      n.added.push(p), d++;
      continue;
    }
  }
  return n;
}, ua = ["input", "button", "textarea", "select"];
function rt(e) {
  return e instanceof Set;
}
const Rt = (e) => {
  const t = e === se.UNSET_INDEX ? /* @__PURE__ */ new Set() : e;
  return rt(t) ? new Set(t) : /* @__PURE__ */ new Set([t]);
};
class mi extends li {
  constructor(t) {
    super(Object.assign(Object.assign({}, mi.defaultAdapter), t)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = se.UNSET_INDEX, this.focusedItemIndex_ = se.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return bt;
  }
  static get numbers() {
    return se;
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
      if (!rt(i)) {
        const r = i === se.UNSET_INDEX;
        this.selectedIndex_ = r ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
    } else if (rt(i))
      if (i.size) {
        const r = Array.from(i).sort(Xt);
        this.selectedIndex_ = r[0];
      } else
        this.selectedIndex_ = se.UNSET_INDEX;
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
    this.isIndexValid_(t) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(Rt(t)) : this.setSingleSelectionAtIndex_(t));
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
  handleKeydown(t, i, r) {
    const n = De(t) === "ArrowLeft", a = De(t) === "ArrowUp", o = De(t) === "ArrowRight", s = De(t) === "ArrowDown", d = De(t) === "Home", u = De(t) === "End", p = De(t) === "Enter", h = De(t) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      a || u ? (t.preventDefault(), this.focusLastElement()) : (s || d) && (t.preventDefault(), this.focusFirstElement());
      return;
    }
    let y = this.adapter.getFocusedElementIndex();
    if (y === -1 && (y = r, y < 0))
      return;
    let S;
    if (this.isVertical_ && s || !this.isVertical_ && o)
      this.preventDefaultEvent(t), S = this.focusNextElement(y);
    else if (this.isVertical_ && a || !this.isVertical_ && n)
      this.preventDefaultEvent(t), S = this.focusPrevElement(y);
    else if (d)
      this.preventDefaultEvent(t), S = this.focusFirstElement();
    else if (u)
      this.preventDefaultEvent(t), S = this.focusLastElement();
    else if ((p || h) && i) {
      const w = t.target;
      if (w && w.tagName === "A" && p)
        return;
      this.preventDefaultEvent(t), this.setSelectedIndexOnAction_(y, !0);
    }
    this.focusedItemIndex_ = y, S !== void 0 && (this.setTabindexAtIndex_(S), this.focusedItemIndex_ = S);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(t, i, r) {
    t !== se.UNSET_INDEX && (this.setSelectedIndexOnAction_(t, i, r), this.setTabindexAtIndex_(t), this.focusedItemIndex_ = t);
  }
  /**
   * Focuses the next element on the list.
   */
  focusNextElement(t) {
    const i = this.adapter.getListItemCount();
    let r = t + 1;
    if (r >= i)
      if (this.wrapFocus_)
        r = 0;
      else
        return t;
    return this.adapter.focusItemAtIndex(r), r;
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
    const r = `${t.target.tagName}`.toLowerCase();
    ua.indexOf(r) === -1 && t.preventDefault();
  }
  setSingleSelectionAtIndex_(t, i = !0) {
    this.selectedIndex_ !== t && (this.selectedIndex_ !== se.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), i && this.adapter.setSelectedStateForElementIndex(t, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(t, !0), this.setAriaForSingleSelectionAtIndex_(t), this.selectedIndex_ = t, this.adapter.notifySelected(t));
  }
  setMultiSelectionAtIndex_(t, i = !0) {
    const r = Rt(this.selectedIndex_), n = da(r, t);
    if (!(!n.removed.length && !n.added.length)) {
      for (const a of n.removed)
        i && this.adapter.setSelectedStateForElementIndex(a, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(a, !1);
      for (const a of n.added)
        i && this.adapter.setSelectedStateForElementIndex(a, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(a, !0);
      this.selectedIndex_ = t, this.adapter.notifySelected(t, n);
    }
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(t) {
    this.selectedIndex_ === se.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(t, bt.ARIA_CURRENT));
    const i = this.ariaCurrentAttrValue_ !== null, r = i ? bt.ARIA_CURRENT : bt.ARIA_SELECTED;
    this.selectedIndex_ !== se.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, r, "false");
    const n = i ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(t, r, n);
  }
  setTabindexAtIndex_(t) {
    this.focusedItemIndex_ === se.UNSET_INDEX && t !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== t && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(t, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let t = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== se.UNSET_INDEX ? t = this.selectedIndex_ : rt(this.selectedIndex_) && this.selectedIndex_.size > 0 && (t = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(t);
  }
  isIndexValid_(t) {
    if (t instanceof Set) {
      if (!this.isMulti_)
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      if (t.size === 0)
        return !0;
      {
        let i = !1;
        for (const r of t)
          if (i = this.isIndexInRange_(r), i)
            break;
        return i;
      }
    } else if (typeof t == "number") {
      if (this.isMulti_)
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + t);
      return t === se.UNSET_INDEX || this.isIndexInRange_(t);
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
  setSelectedIndexOnAction_(t, i, r) {
    if (this.adapter.getDisabledStateForElementIndex(t))
      return;
    let n = t;
    this.isMulti_ && (n = /* @__PURE__ */ new Set([t])), this.isIndexValid_(n) && (this.isMulti_ ? this.toggleMultiAtIndex(t, r, i) : i || r ? this.setSingleSelectionAtIndex_(t, i) : this.selectedIndex_ === t && this.setSingleSelectionAtIndex_(se.UNSET_INDEX), i && this.adapter.notifyAction(t));
  }
  toggleMultiAtIndex(t, i, r = !0) {
    let n = !1;
    i === void 0 ? n = !this.adapter.getSelectedStateForElementIndex(t) : n = i;
    const a = Rt(this.selectedIndex_);
    n ? a.add(t) : a.delete(t), this.setMultiSelectionAtIndex_(a, r);
  }
}
function ma(e, t = 50) {
  let i;
  return function(r = !0) {
    clearTimeout(i), i = setTimeout(() => {
      e(r);
    }, t);
  };
}
const gt = (e) => e.hasAttribute("mwc-list-item");
function pa() {
  const e = this.itemsReadyResolver;
  this.itemsReady = new Promise((t) => this.itemsReadyResolver = t), e();
}
class de extends oi {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = mi, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const t = ma(this.layout.bind(this));
    this.debouncedLayout = (i = !0) => {
      pa.call(this), t(i);
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
    const i = (t = this.assignedElements) !== null && t !== void 0 ? t : [], r = [];
    for (const o of i)
      gt(o) && (r.push(o), o._managingList = this), o.hasAttribute("divider") && !o.hasAttribute("role") && o.setAttribute("role", "separator");
    this.items_ = r;
    const n = /* @__PURE__ */ new Set();
    if (this.items_.forEach((o, s) => {
      this.itemRoles ? o.setAttribute("role", this.itemRoles) : o.removeAttribute("role"), o.selected && n.add(s);
    }), this.multi)
      this.select(n);
    else {
      const o = n.size ? n.entries().next().value[1] : -1;
      this.select(o);
    }
    const a = new Event("items-updated", { bubbles: !0, composed: !0 });
    this.dispatchEvent(a);
  }
  get selected() {
    const t = this.index;
    if (!rt(t))
      return t === -1 ? null : this.items[t];
    const i = [];
    for (const r of t)
      i.push(this.items[r]);
    return i;
  }
  get index() {
    return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
  }
  render() {
    const t = this.innerRole === null ? void 0 : this.innerRole, i = this.innerAriaLabel === null ? void 0 : this.innerAriaLabel, r = this.rootTabbable ? "0" : "-1";
    return c`
      <!-- @ts-ignore -->
      <ul
          tabindex=${r}
          role="${pe(t)}"
          aria-label="${pe(i)}"
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
    return this.emptyMessage !== void 0 && i.length === 0 ? c`
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
      const i = this.getIndexOfTarget(t), r = t.target, n = gt(r);
      this.mdcFoundation.handleKeydown(t, n, i);
    }
  }
  onRequestSelected(t) {
    if (this.mdcFoundation) {
      let i = this.getIndexOfTarget(t);
      if (i === -1 && (this.layout(), i = this.getIndexOfTarget(t), i === -1) || this.items[i].disabled)
        return;
      const n = t.detail.selected, a = t.detail.source;
      this.mdcFoundation.handleSingleSelection(i, a === "interaction", n), t.stopPropagation();
    }
  }
  getIndexOfTarget(t) {
    const i = this.items, r = t.composedPath();
    for (const n of r) {
      let a = -1;
      if (Un(n) && gt(n) && (a = i.indexOf(n)), a !== -1)
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
        const n = this.items[t];
        return n ? n.getAttribute(i) : "";
      },
      setAttributeForElementIndex: (t, i, r) => {
        if (!this.mdcRoot)
          return;
        const n = this.items[t];
        n && n.setAttribute(i, r);
      },
      focusItemAtIndex: (t) => {
        const i = this.items[t];
        i && i.focus();
      },
      setTabIndexForElementIndex: (t, i) => {
        const r = this.items[t];
        r && (r.tabindex = i);
      },
      notifyAction: (t) => {
        const i = { bubbles: !0, composed: !0 };
        i.detail = { index: t };
        const r = new CustomEvent("action", i);
        this.dispatchEvent(r);
      },
      notifySelected: (t, i) => {
        const r = { bubbles: !0, composed: !0 };
        r.detail = { index: t, diff: i };
        const n = new CustomEvent("selected", r);
        this.dispatchEvent(n);
      },
      isFocusInsideList: () => Zn(this),
      isRootFocused: () => {
        const t = this.mdcRoot;
        return t.getRootNode().activeElement === t;
      },
      setDisabledStateForElementIndex: (t, i) => {
        const r = this.items[t];
        r && (r.disabled = i);
      },
      getDisabledStateForElementIndex: (t) => {
        const i = this.items[t];
        return i ? i.disabled : !1;
      },
      setSelectedStateForElementIndex: (t, i) => {
        const r = this.items[t];
        r && (r.selected = i);
      },
      getSelectedStateForElementIndex: (t) => {
        const i = this.items[t];
        return i ? i.selected : !1;
      },
      setActivatedStateForElementIndex: (t, i) => {
        const r = this.items[t];
        r && (r.activated = i);
      }
    }, this.mdcAdapter;
  }
  selectUi(t, i = !1) {
    const r = this.items[t];
    r && (r.selected = !0, r.activated = i);
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
    for (const r of this.items)
      r.tabindex = -1;
    i && (this.noninteractive ? this.previousTabindex || (this.previousTabindex = i) : i.tabindex = 0), this.itemsReadyResolver();
  }
  getFocusedItemIndex() {
    if (!this.mdcRoot || !this.items.length)
      return -1;
    const t = dr();
    if (!t.length)
      return -1;
    for (let i = t.length - 1; i >= 0; i--) {
      const r = t[i];
      if (gt(r))
        return this.items.indexOf(r);
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
g([
  b({ type: String })
], de.prototype, "emptyMessage", void 0);
g([
  F(".mdc-deprecated-list")
], de.prototype, "mdcRoot", void 0);
g([
  Ji("", !0, "*")
], de.prototype, "assignedElements", void 0);
g([
  Ji("", !0, '[tabindex="0"]')
], de.prototype, "tabbableElements", void 0);
g([
  b({ type: Boolean }),
  ye(function(e) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(e);
  })
], de.prototype, "activatable", void 0);
g([
  b({ type: Boolean }),
  ye(function(e, t) {
    this.mdcFoundation && this.mdcFoundation.setMulti(e), t !== void 0 && this.layout();
  })
], de.prototype, "multi", void 0);
g([
  b({ type: Boolean }),
  ye(function(e) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(e);
  })
], de.prototype, "wrapFocus", void 0);
g([
  b({ type: String }),
  ye(function(e, t) {
    t !== void 0 && this.updateItems();
  })
], de.prototype, "itemRoles", void 0);
g([
  b({ type: String })
], de.prototype, "innerRole", void 0);
g([
  b({ type: String })
], de.prototype, "innerAriaLabel", void 0);
g([
  b({ type: Boolean })
], de.prototype, "rootTabbable", void 0);
g([
  b({ type: Boolean, reflect: !0 }),
  ye(function(e) {
    var t, i;
    if (e) {
      const r = (i = (t = this.tabbableElements) === null || t === void 0 ? void 0 : t[0]) !== null && i !== void 0 ? i : null;
      this.previousTabindex = r, r && r.setAttribute("tabindex", "-1");
    } else !e && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], de.prototype, "noninteractive", void 0);
var ha = Object.defineProperty, fa = Object.getOwnPropertyDescriptor, Ge = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? fa(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && ha(t, i, n), n;
};
function Qt(e) {
  return !e.closest("filtered-list") || !e.parentElement || e.parentElement instanceof he ? e : Qt(e.parentElement);
}
function ba(e, t) {
  const i = e.innerText + `
`, r = Array.from(e.children).map((s) => s.innerText).join(`
`), n = e.value, a = (i + r + n).toUpperCase(), o = t.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  o.length === 1 && o[0] === "" || o.every((s) => new RegExp(
    `*${s}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(a)) ? Qt(e).classList.remove("hidden") : Qt(e).classList.add("hidden");
}
let he = class extends de {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((e) => e instanceof Xe);
  }
  get isAllSelected() {
    return this.items.filter((e) => !e.disabled).filter((e) => e instanceof Xe).every((e) => e.selected);
  }
  get isSomeSelected() {
    return this.items.filter((e) => !e.disabled).filter((e) => e instanceof Xe).some((e) => e.selected);
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
      (e) => ba(e, this.searchField.value)
    );
  }
  onListItemConnected(e) {
    super.onListItemConnected(e), this.requestUpdate();
  }
  update(e) {
    super.update(e), this.onFilterInput();
  }
  renderCheckAll() {
    return this.existCheckListItem && !this.disableCheckAll ? c`<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
      this.onCheckAll();
    }}
          ></mwc-checkbox
        ></mwc-formfield>` : c``;
  }
  render() {
    return c`<div id="tfcontainer">
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
he.styles = re`
    ${er(Nn.styles)}

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
Ge([
  b({ type: String })
], he.prototype, "searchFieldLabel", 2);
Ge([
  b({ type: Boolean })
], he.prototype, "disableCheckAll", 2);
Ge([
  E()
], he.prototype, "existCheckListItem", 1);
Ge([
  E()
], he.prototype, "isAllSelected", 1);
Ge([
  E()
], he.prototype, "isSomeSelected", 1);
Ge([
  F("mwc-textfield")
], he.prototype, "searchField", 2);
he = Ge([
  G("filtered-list")
], he);
var ga = Object.defineProperty, ya = Object.getOwnPropertyDescriptor, ut = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? ya(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && ga(t, i, n), n;
};
let Me = class extends he {
  constructor() {
    super(...arguments), this.disabled = !1;
  }
  toggleList() {
    this.filterDialog.show();
  }
  onClosing() {
    const e = [];
    this.selected && (this.selected instanceof Array ? this.selected.forEach((t) => e.push(t.value)) : e.push(this.selected.value), this.dispatchEvent(va(e)));
  }
  render() {
    return c`
      <mwc-icon-button
        icon="${this.icon}"
        @click="${this.toggleList}"
        ?disabled="${this.disabled}"
      >
        <slot name="icon"></slot>
      </mwc-icon-button>
      <mwc-dialog
        id="filterDialog"
        heading="${this.header ? this.header : l("filter")}"
        scrimClickAction=""
        @closing="${() => this.onClosing()}"
      >
        ${super.render()}
        <mwc-button slot="primaryAction" dialogAction="close">
          ${l("close")}
        </mwc-button>
      </mwc-dialog>
    `;
  }
};
Me.styles = re`
    ${er(he.styles)}

    mwc-icon-button {
      color: var(--mdc-theme-on-surface);
    }

    mwc-dialog {
      --mdc-dialog-max-height: calc(100vh - 150px);
    }
  `;
ut([
  b()
], Me.prototype, "header", 2);
ut([
  b()
], Me.prototype, "icon", 2);
ut([
  b({ type: Boolean })
], Me.prototype, "disabled", 2);
ut([
  F("#filterDialog")
], Me.prototype, "filterDialog", 2);
Me = ut([
  G("oscd-filter-button")
], Me);
function va(e, t) {
  return new CustomEvent("selected-items-changed", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { selectedItems: e, ...t?.detail }
  });
}
var Sa = Object.defineProperty, xa = Object.getOwnPropertyDescriptor, Je = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? xa(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && Sa(t, i, n), n;
};
function mr(e, t) {
  const i = e.nodeType === Node.ELEMENT_NODE ? e.closest(t) : null;
  if (i) return i;
  const r = e.getRootNode();
  return r instanceof ShadowRoot ? mr(r.host, t) : null;
}
let _e = class extends Le {
  constructor() {
    super(...arguments), this.secondary = !1, this.highlighted = !1, this.level = 1;
  }
  async firstUpdated() {
    this.tabIndex = 0;
    const e = mr(this.parentNode, "action-pane");
    e && (this.level = e.level + 1), this.level = Math.floor(this.level);
  }
  renderHeader() {
    const e = c`<span
        ><slot name="icon"
          >${this.icon ? c`<mwc-icon>${this.icon}</mwc-icon>` : q}</slot
        ></span
      >
      ${this.label ?? q}
      <nav><slot name="action"></slot></nav>`, t = Math.floor(Math.max(this.level, 1)), i = typeof this.label == "string" ? this.label : "";
    switch (t) {
      case 1:
        return c`<h1 title="${i}">${e}</h1>`;
      case 2:
        return c`<h2 title="${i}">${e}</h2>`;
      case 3:
        return c`<h3 title="${i}">${e}</h3>`;
      default:
        return c`<h4 title="${i}">${e}</h4>`;
    }
  }
  render() {
    return c`<section
      class="${Be({
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
_e.styles = re`
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
Je([
  b({ type: String })
], _e.prototype, "label", 2);
Je([
  b({ type: String })
], _e.prototype, "icon", 2);
Je([
  b({ type: Boolean })
], _e.prototype, "secondary", 2);
Je([
  b({ type: Boolean })
], _e.prototype, "highlighted", 2);
Je([
  b({ type: Number })
], _e.prototype, "level", 2);
_e = Je([
  G("action-pane")
], _e);
function N(e, t, i) {
  const r = e.createElementNS(e.documentElement.namespaceURI, t);
  return Object.entries(i).filter(([n, a]) => a !== null).forEach(([n, a]) => r.setAttribute(n, a)), r;
}
function V(e, t) {
  const i = e.cloneNode(!1);
  return Object.entries(t).forEach(([r, n]) => {
    n === null ? i.removeAttribute(r) : i.setAttribute(r, n);
  }), i;
}
function X(e, t) {
  return !e || !t ? [] : Array.from(e.children).filter(
    (i) => i.tagName === t
  );
}
var Aa = Object.defineProperty, wa = Object.getOwnPropertyDescriptor, fe = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? wa(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && Aa(t, i, n), n;
};
let te = class extends In {
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
    return this.multipliers.length && this.unit ? c`<div style="position:relative;">
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
      </div>` : c``;
  }
  renderMulplierList() {
    return c`${this.multipliers.map(
      (e) => c`<mwc-list-item ?selected=${e === this.multiplier}
          >${e === null ? l("textfield.noMultiplier") : e}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? c`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : c``;
  }
  render() {
    return c`
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
fe([
  b({ type: Boolean })
], te.prototype, "nullable", 2);
fe([
  b({ type: Array })
], te.prototype, "multipliers", 2);
fe([
  b({ type: String })
], te.prototype, "multiplier", 1);
fe([
  b({ type: String })
], te.prototype, "unit", 2);
fe([
  E()
], te.prototype, "null", 1);
fe([
  b({ type: String })
], te.prototype, "maybeValue", 1);
fe([
  b({ type: String })
], te.prototype, "defaultValue", 2);
fe([
  b({ type: Array })
], te.prototype, "reservedValues", 2);
fe([
  F("mwc-switch")
], te.prototype, "nullSwitch", 2);
fe([
  F("mwc-menu")
], te.prototype, "multiplierMenu", 2);
fe([
  F("mwc-icon-button")
], te.prototype, "multiplierButton", 2);
te = fe([
  G("wizard-textfield")
], te);
var Ca = Object.defineProperty, Ea = Object.getOwnPropertyDescriptor, We = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Ea(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && Ca(t, i, n), n;
};
let Ce = class extends $n {
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
    return this.nullable ? c`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : c``;
  }
  render() {
    return c`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
We([
  b({ type: Boolean })
], Ce.prototype, "nullable", 2);
We([
  E()
], Ce.prototype, "null", 1);
We([
  b({ type: String })
], Ce.prototype, "maybeValue", 1);
We([
  b({ type: String })
], Ce.prototype, "defaultValue", 2);
We([
  b({ type: Array })
], Ce.prototype, "reservedValues", 2);
We([
  F("mwc-switch")
], Ce.prototype, "nullSwitch", 2);
Ce = We([
  G("wizard-select")
], Ce);
var ka = Object.defineProperty, Da = Object.getOwnPropertyDescriptor, me = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Da(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && ka(t, i, n), n;
};
let ie = class extends Le {
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
    return this.nullable ? c`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : c``;
  }
  render() {
    return c`
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
me([
  b({ type: String })
], ie.prototype, "label", 2);
me([
  b({ type: String })
], ie.prototype, "helper", 2);
me([
  b({ type: Boolean })
], ie.prototype, "nullable", 2);
me([
  b({ type: Boolean })
], ie.prototype, "defaultChecked", 2);
me([
  b({ type: String })
], ie.prototype, "maybeValue", 1);
me([
  b({ type: Boolean })
], ie.prototype, "disabled", 2);
me([
  E()
], ie.prototype, "null", 1);
me([
  E()
], ie.prototype, "checked", 1);
me([
  E()
], ie.prototype, "deactivateCheckbox", 2);
me([
  E()
], ie.prototype, "formfieldLabel", 1);
me([
  F("mwc-switch")
], ie.prototype, "nullSwitch", 2);
me([
  F("mwc-checkbox")
], ie.prototype, "checkbox", 2);
ie = me([
  G("wizard-checkbox")
], ie);
function Ia(e) {
  return typeof e == "function";
}
function f(e) {
  return e instanceof te || e instanceof Ce || e instanceof ie ? e.maybeValue : e.value ?? null;
}
function pi(e) {
  return e instanceof te ? e.multiplier : null;
}
function U(e, t) {
  if (!e)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...t,
      detail: { wizard: null, ...t?.detail }
    });
  const i = Ia(e) ? e : () => e;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { wizard: i, ...t?.detail }
  });
}
function Ue(e) {
  return U(e, { detail: { subwizard: !0 } });
}
function Na(e) {
  let t = "", i = e.parentElement;
  for (; i?.getAttribute("name"); )
    t = "/" + i.getAttribute("name") + t, i = i.parentElement;
  return t;
}
function M(e) {
  const t = e.getAttribute("name");
  return t || void 0;
}
function $a(e) {
  const t = e.getAttribute("ldName");
  return t || void 0;
}
function Te(e) {
  const t = e.getAttribute("desc");
  return t || void 0;
}
function He(e) {
  const t = e.getAttribute("inst");
  return t || void 0;
}
function ee(e) {
  const t = e.split(">"), i = t.pop() ?? "";
  return [t.join(">"), i];
}
const B = ":not(*)";
function _a(e) {
  return `${e.getAttribute("version")}	${e.getAttribute("revision")}`;
}
function La(e, t) {
  const [i, r] = t.split("	");
  return !i || !r ? B : `${e}[version="${i}"][revision="${r}"]`;
}
function $i(e) {
  return z(e.parentElement) + ">" + e.getAttribute("connectivityNode");
}
function _i(e, t) {
  const [i, r] = ee(t), n = W[e].parents.flatMap(
    (a) => J(a, i).split(",")
  );
  return Q(
    n,
    [">"],
    [`${e}[connectivityNode="${r}"]`]
  ).map((a) => a.join("")).join(",");
}
function za(e) {
  const [t, i, r, n, a, o] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((s) => e.getAttribute(s));
  return t === "None" ? `${z(e.parentElement)}>(${n} ${o} ${a})` : `${t} ${i || "(Client)"}/${r ?? ""} ${n} ${a ?? ""}`;
}
function Ta(e, t) {
  if (t.endsWith(")")) {
    const [y, S] = ee(t), [w, D, P] = S.substring(1, S.length - 1).split(" ");
    if (!w || !D) return B;
    const C = W[e].parents.flatMap(
      (oe) => J(oe, y).split(",")
    );
    return Q(
      C,
      [">"],
      [`${e}[iedName="None"][lnClass="${w}"][lnType="${D}"][lnInst="${P}"]`]
    ).map((oe) => oe.join("")).join(",");
  }
  const [i, r, n, a, o] = t.split(/[ /]/);
  if (!i || !r || !a) return B;
  const [
    s,
    d,
    u,
    p,
    h
  ] = [
    [`[iedName="${i}"]`],
    r === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${r}"]`],
    n ? [`[prefix="${n}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    o ? [`[lnInst="${o}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return Q(
    [e],
    s,
    d,
    u,
    p,
    h
  ).map((y) => y.join("")).join(",");
}
function Va(e) {
  return `${z(e.parentElement)}>${e.getAttribute(
    "iedName"
  )} ${e.getAttribute("apName")}`;
}
function Pa(e, t) {
  const [i, r] = ee(t), [n, a] = r.split(" ");
  return `${J(
    "IED",
    i
  )}>${e}[iedName="${n}"][apName="${a}"]`;
}
function Ra(e) {
  return `${z(e.parentElement)}>${e.getAttribute("associationID") ?? ""}`;
}
function Oa(e, t) {
  const [i, r] = ee(t);
  return r ? `${J(
    "Server",
    i
  )}>${e}[associationID="${r}"]` : B;
}
function Fa(e) {
  return `${z(e.closest("IED"))}>>${e.getAttribute("inst")}`;
}
function qa(e, t) {
  const [i, r] = t.split(">>");
  return r ? `IED[name="${i}"] ${e}[inst="${r}"]` : B;
}
function Ma(e) {
  const t = e.textContent, [i, r, n, a, o] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((s) => e.getAttribute(s));
  return `${z(e.parentElement)}>${t} ${i || ""} ${r || ""}/${n ?? ""} ${a ?? ""} ${o ?? ""}`;
}
function Ha(e, t) {
  const [i, r] = ee(t), [n, a, o, s, d, u] = r.split(/[ /]/), [
    p,
    h,
    y,
    S,
    w,
    D
  ] = [
    W[e].parents.flatMap(
      (P) => J(P, i).split(",")
    ),
    [`${n}`],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${d}"]`],
    u ? [`[lnInst="${u}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return Q(
    p,
    [">"],
    [e],
    h,
    y,
    S,
    w,
    D
  ).map((P) => P.join("")).join(",");
}
function Ba(e) {
  const [t, i, r, n, a, o, s, d] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((p) => e.getAttribute(p)), u = `${t}/${i ?? ""} ${r} ${n ?? ""}.${a} ${o || ""}`;
  return `${z(e.parentElement)}>${u} (${s}${d ? " [" + d + "]" : ""})`;
}
function Ga(e, t) {
  const [i, r] = ee(t), [n, a, o, s] = r.split(/[ /.]/), d = r.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), u = d && d[1] ? d[1] : "", p = d && d[2] ? d[2] : "", h = r.match(/\(([A-Z]{2})/), y = r.match(/ \[([0-9]{1,2})\]/), S = h && h[1] ? h[1] : "", w = y && y[1] ? y[1] : "", [
    D,
    P,
    C,
    oe,
    ve,
    ke,
    Lt,
    zt,
    Tt
  ] = [
    W[e].parents.flatMap(
      (et) => J(et, i).split(",")
    ),
    [`[ldInst="${n}"]`],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    s ? [`[lnInst="${s}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${u}"]`],
    p ? [`[daName="${p}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${S}"]`],
    w ? [`[ix="${w}"]`] : [":not([ix])", '[ix=""]']
  ];
  return Q(
    D,
    [">"],
    [e],
    P,
    C,
    oe,
    ve,
    ke,
    Lt,
    zt,
    Tt
  ).map((et) => et.join("")).join(",");
}
function Wa(e) {
  if (!e.parentElement) return NaN;
  const t = z(e.parentElement), i = e.getAttribute("iedName"), r = e.getAttribute("intAddr"), n = Array.from(
    e.parentElement.querySelectorAll(`ExtRef[intAddr="${r}"]`)
  ).indexOf(e);
  if (r) return `${t}>${r}[${n}]`;
  const [
    a,
    o,
    s,
    d,
    u,
    p,
    h,
    y,
    S,
    w,
    D,
    P
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
  ].map((ve) => e.getAttribute(ve)), C = P ? `${h}:${P} ${y ?? ""}/${S ?? ""} ${w ?? ""} ${D ?? ""}` : "", oe = `${i} ${a}/${o ?? ""} ${s} ${d ?? ""} ${u} ${p || ""}`;
  return `${t}>${C ? C + " " : ""}${oe}${r ? `@${r}` : ""}`;
}
function Ua(e, t) {
  const [i, r] = ee(t), n = W[e].parents.flatMap(
    (tt) => J(tt, i).split(",")
  );
  if (r.endsWith("]")) {
    const [tt] = r.split("["), Cn = [`[intAddr="${tt}"]`];
    return Q(n, [">"], [e], Cn).map((En) => En.join("")).join(",");
  }
  let a, o, s, d, u, p, h, y, S, w, D, P, C, oe;
  !r.includes(":") && !r.includes("@") ? [a, o, s, d, u, p, h] = r.split(/[ /]/) : r.includes(":") && !r.includes("@") ? [
    y,
    S,
    w,
    D,
    P,
    C,
    a,
    o,
    s,
    d,
    u,
    p,
    h
  ] = r.split(/[ /:]/) : !r.includes(":") && r.includes("@") ? [a, o, s, d, u, p, h, oe] = r.split(/[ /@]/) : [
    y,
    S,
    w,
    D,
    P,
    C,
    a,
    o,
    s,
    d,
    u,
    p,
    h,
    oe
  ] = r.split(/[ /:@]/);
  const [
    ve,
    ke,
    Lt,
    zt,
    Tt,
    et,
    bn,
    gn,
    yn,
    vn,
    Sn,
    xn,
    An,
    wn
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])"],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    d ? [`[lnClass="${d}"]`] : [":not([lnClass])"],
    u ? [`[lnInst="${u}"]`] : [":not([lnInst])", '[lnInst=""]'],
    p ? [`[doName="${p}"]`] : [":not([doName])"],
    h ? [`[daName="${h}"]`] : [":not([daName])", '[daName=""]'],
    y ? [`[serviceType="${y}"]`] : [":not([serviceType])", '[serviceType=""]'],
    S ? [`[srcCBName="${S}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    w ? [`[srcLDInst="${w}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    D ? [`[srcPrefix="${D}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    P ? [`[srcLNClass="${P}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    C ? [`[srcLNInst="${C}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    oe ? [`[intAddr="${oe}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return Q(
    n,
    [">"],
    [e],
    ve,
    ke,
    Lt,
    zt,
    Tt,
    et,
    bn,
    gn,
    yn,
    vn,
    Sn,
    xn,
    An,
    wn
  ).map((tt) => tt.join("")).join(",");
}
function ja(e) {
  const [t, i, r] = ["prefix", "lnClass", "inst"].map(
    (n) => e.getAttribute(n)
  );
  return `${z(e.parentElement)}>${t ?? ""} ${i} ${r}`;
}
function Ka(e, t) {
  const [i, r] = ee(t), n = W[e].parents.flatMap(
    (h) => J(h, i).split(",")
  ), [a, o, s] = r.split(" ");
  if (!o) return B;
  const [d, u, p] = [
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    [`[inst="${s}"]`]
  ];
  return Q(
    n,
    [">"],
    [e],
    d,
    u,
    p
  ).map((h) => h.join("")).join(",");
}
function Za(e) {
  const [t, i, r, n, a, o] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((s) => e.getAttribute(s));
  return `${z(e.parentElement)}>${i} ${t || ""} ${r}/${n ?? ""} ${a} ${o}`;
}
function Xa(e, t) {
  const [i, r] = ee(t), n = W[e].parents.flatMap(
    (C) => J(C, i).split(",")
  ), [a, o, s, d, u, p] = r.split(/[ /]/), [
    h,
    y,
    S,
    w,
    D,
    P
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])", '[iedName=""]'],
    o ? [`[apRef="${o}"]`] : [":not([apRef])", '[apRef=""]'],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    d ? [`[prefix="${d}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${u}"]`],
    p ? [`[lnInst="${p}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return Q(
    n,
    [">"],
    [e],
    h,
    y,
    S,
    w,
    D,
    P
  ).map((C) => C.join("")).join(",");
}
function Li(e) {
  const [t, i] = ["name", "ix"].map((r) => e.getAttribute(r));
  return `${z(e.parentElement)}>${t}${i ? "[" + i + "]" : ""}`;
}
function Yt(e, t, i = -1) {
  i === -1 && (i = t.split(">").length);
  const [r, n] = ee(t), [a, o, s, d] = n.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!o) return B;
  if (i === 0) return `${e}[name="${o}"]`;
  const u = W[e].parents.flatMap(
    (y) => y === "SDI" ? Yt(y, r, i - 1).split(",") : J(y, r).split(",")
  ).filter((y) => !y.startsWith(B));
  if (u.length === 0) return B;
  const [p, h] = [
    [`[name="${o}"]`],
    d ? [`[ix="${d}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return Q(
    u,
    [">"],
    [e],
    p,
    h
  ).map((y) => y.join("")).join(",");
}
function Qa(e) {
  if (!e.parentElement) return NaN;
  const t = e.getAttribute("sGroup"), i = Array.from(e.parentElement.children).filter((r) => r.getAttribute("sGroup") === t).findIndex((r) => r.isSameNode(e));
  return `${z(e.parentElement)}>${t ? t + "." : ""} ${i}`;
}
function Ya(e, t) {
  const [i, r] = ee(t), [n, a] = r.split(" "), o = parseFloat(a), s = W[e].parents.flatMap(
    (p) => J(p, i).split(",")
  ), [d, u] = [
    n ? [`[sGroup="${n}"]`] : [""],
    o ? [`:nth-child(${o + 1})`] : [""]
  ];
  return Q(
    s,
    [">"],
    [e],
    d,
    u
  ).map((p) => p.join("")).join(",");
}
function Ja(e) {
  const [t, i] = ["iedName", "apName"].map(
    (r) => e.getAttribute(r)
  );
  return `${t} ${i}`;
}
function eo(e, t) {
  const [i, r] = t.split(" ");
  return !i || !r ? B : `${e}[iedName="${i}"][apName="${r}"]`;
}
function zi(e) {
  const [t, i] = ["ldInst", "cbName"].map(
    (r) => e.getAttribute(r)
  );
  return `${t} ${i}`;
}
function Ti(e, t) {
  const [i, r] = t.split(" ");
  return !i || !r ? B : `${e}[ldInst="${i}"][cbName="${r}"]`;
}
function to(e) {
  if (!e.parentElement) return NaN;
  if (!e.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const t = e.getAttribute("type");
  return e.parentElement.children.length > 1 && t !== "Connection" && t !== "RedConn" ? NaN : `${z(e.parentElement)}>${t}`;
}
function io(e, t) {
  const [i, r] = ee(t), [n, a] = [
    W[e].parents.flatMap(
      (o) => J(o, i).split(",")
    ),
    r ? [`[type="${r}"]`] : [""]
  ];
  return Q(n, [">"], [e], a).map((o) => o.join("")).join(",");
}
function ro(e) {
  if (!e.parentElement) return NaN;
  const t = e.parentElement, i = e.getAttribute("type");
  if (t.tagName === "PhysConn")
    return `${z(e.parentElement)}>${i}`;
  const r = Array.from(e.parentElement.children).filter((n) => n.getAttribute("type") === i).findIndex((n) => n.isSameNode(e));
  return `${z(e.parentElement)}>${i} [${r}]`;
}
function no(e, t) {
  const [i, r] = ee(t), [n] = r.split(" "), a = r && r.match(/\[([0-9]+)\]/) && r.match(/\[([0-9]+)\]/)[1] ? parseFloat(r.match(/\[([0-9]+)\]/)[1]) : NaN, [o, s, d] = [
    W[e].parents.flatMap(
      (u) => J(u, i).split(",")
    ),
    [`[type="${n}"]`],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return Q(
    o,
    [">"],
    [e],
    s,
    d
  ).map((u) => u.join("")).join(",");
}
function ao(e) {
  return `${z(e.parentElement)}>${e.getAttribute("ord")}`;
}
function oo(e, t) {
  const [i, r] = ee(t);
  return `${J("EnumType", i)}>${e}[ord="${r}"]`;
}
function lo(e) {
  return `${z(e.parentElement)}>${e.getAttribute("type") || "8-MMS"}	${e.textContent}`;
}
function so(e, t) {
  const [i, r] = ee(t), [n, a] = r.split("	"), [o] = [
    W[e].parents.flatMap(
      (s) => J(s, i).split(",")
    )
  ];
  return Q(
    o,
    [">"],
    [e],
    [`[type="${n}"]`],
    [">"],
    [a]
  ).map((s) => s.join("")).join(",");
}
function co() {
  return "";
}
function uo() {
  return ":root";
}
function $(e) {
  return e.parentElement.tagName === "SCL" ? e.getAttribute("name") : `${z(e.parentElement)}>${e.getAttribute("name")}`;
}
function I(e, t, i = -1) {
  i === -1 && (i = t.split(">").length);
  const [r, n] = ee(t);
  if (!n) return B;
  if (i === 0) return `${e}[name="${n}"]`;
  const a = W[e].parents;
  if (!a) return B;
  const o = a.flatMap(
    (s) => W[s].selector === W.Substation.selector ? I(s, r, i - 1).split(",") : J(s, r).split(",")
  ).filter((s) => !s.startsWith(B));
  return o.length === 0 ? B : Q(o, [">"], [e], [`[name="${n}"]`]).map((s) => s.join("")).join(",");
}
function x(e) {
  return z(e.parentElement).toString();
}
function A(e, t) {
  const i = W[e].parents;
  if (!i) return B;
  const r = i.flatMap((n) => J(n, t).split(",")).filter((n) => !n.startsWith(B));
  return r.length === 0 ? B : Q(r, [">"], [e]).map((n) => n.join("")).join(",");
}
function yt(e) {
  return `#${e.id}`;
}
function vt(e, t) {
  const i = t.replace(/^#/, "");
  return i ? `${e}[id="${i}"]` : B;
}
const pr = [
  "TransformerWinding",
  "ConductingEquipment"
], hr = [
  "GeneralEquipment",
  "PowerTransformer",
  ...pr
], Jt = ["Substation", "VoltageLevel", "Bay"], fr = ["Process", "Line"], br = ["EqSubFunction", "EqFunction"], mo = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...hr,
  ...Jt,
  ...fr,
  ...br
], gr = ["ConnectivityNode", ...mo], po = ["GOOSESecurity", "SMVSecurity"], ho = ["SubNetwork", ...po, ...gr], fo = ["BDA", "DA"], bo = ["SampledValueControl", "GSEControl"], go = ["LogControl", "ReportControl"], yo = [...bo, ...go], vo = ["GSE", "SMV"], So = [
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
  ...yo,
  ...vo,
  ...fo
], Fe = ["LN0", "LN"], xo = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Ao = ["Subject", "IssuerName"], wo = ["MinTime", "MaxTime"], Co = ["LNodeType", "DOType", "DAType", "EnumType"], Eo = [
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
], ko = ["DynDataSet", "ConfDataSet"], Do = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...ko
], Io = ["ConfLogControl", "ConfSigRef"], No = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], $o = ["SCL", ...ho, ...So, ...Co], yr = [
  ...$o,
  ...xo,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Ao,
  ...wo,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...Fe,
  ...Eo,
  "DynAssociation",
  "SettingGroups",
  ...Do,
  ...Io,
  ...No,
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
], _o = new Set(yr);
function hi(e) {
  return _o.has(e);
}
const It = ["Text", "Private"], Ne = [...It], H = [...It], St = [...It], Vi = [...H, "Val"], vr = [...Ne, "LNode"], $e = [...vr], ei = [...$e], Ot = [
  ...$e,
  "PowerTransformer",
  "GeneralEquipment"
], Pi = [
  ...ei,
  "Terminal"
], Ri = [...H, "Address"], Sr = [...Ne], Oi = [...Sr, "IEDName"], Fi = [
  ...H,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], qi = [
  ...$e,
  "GeneralEquipment",
  "Function"
], Mi = [...Sr, "TrgOps"], Hi = [
  ...$e,
  "GeneralEquipment",
  "EqSubFunction"
], W = {
  AccessControl: {
    identity: x,
    selector: A,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: $,
    selector: I,
    parents: ["IED"],
    children: [
      ...Ne,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: x,
    selector: A,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: Ra,
    selector: Oa,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: x,
    selector: A,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: $,
    selector: I,
    parents: ["DAType"],
    children: [...Vi]
  },
  BitRate: {
    identity: x,
    selector: A,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: $,
    selector: I,
    parents: ["VoltageLevel"],
    children: [
      ...Ot,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: Za,
    selector: Xa,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: x,
    selector: A,
    parents: ["SCL"],
    children: [...H, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: $,
    selector: I,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...Pi,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: x,
    selector: A,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: Ja,
    selector: eo,
    parents: ["SubNetwork"],
    children: [...H, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: $,
    selector: I,
    parents: ["Bay", "Line"],
    children: [...vr]
  },
  DA: {
    identity: $,
    selector: I,
    parents: ["DOType"],
    children: [...Vi]
  },
  DAI: {
    identity: Li,
    selector: Yt,
    parents: ["DOI", "SDI"],
    children: [...H, "Val"]
  },
  DAType: {
    identity: yt,
    selector: vt,
    parents: ["DataTypeTemplates"],
    children: [...St, "BDA", "ProtNs"]
  },
  DO: {
    identity: $,
    selector: I,
    parents: ["LNodeType"],
    children: [...H]
  },
  DOI: {
    identity: $,
    selector: I,
    parents: [...Fe],
    children: [...H, "SDI", "DAI"]
  },
  DOType: {
    identity: yt,
    selector: vt,
    parents: ["DataTypeTemplates"],
    children: [...St, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: $,
    selector: I,
    parents: [...Fe],
    children: [...Ne, "FCDA"]
  },
  DataSetDirectory: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: x,
    selector: A,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: yt,
    selector: vt,
    parents: ["DataTypeTemplates"],
    children: [...St, "EnumVal"]
  },
  EnumVal: {
    identity: ao,
    selector: oo,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: $,
    selector: I,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...Hi]
  },
  EqSubFunction: {
    identity: $,
    selector: I,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...Hi]
  },
  ExtRef: {
    identity: Wa,
    selector: Ua,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: Ba,
    selector: Ga,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: $,
    selector: I,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...$e,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: $,
    selector: I,
    parents: [
      "SubFunction",
      "Function",
      ...fr,
      ...br,
      ...Jt
    ],
    children: [...ei, "EqFunction"]
  },
  GetCBValues: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: $,
    selector: I,
    parents: ["AccessPoint"],
    children: [...Ne, "Subject", "IssuerName"]
  },
  GSE: {
    identity: zi,
    selector: Ti,
    parents: ["ConnectedAP"],
    children: [...Ri, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: $,
    selector: I,
    parents: ["LN0"],
    children: [...Oi, "Protocol"]
  },
  GSESettings: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: x,
    selector: A,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: x,
    selector: A,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: _a,
    selector: La,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: $,
    selector: I,
    parents: ["SCL"],
    children: [...H, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: Ma,
    selector: Ha,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: x,
    selector: A,
    parents: [...Fe],
    children: [...H, "ExtRef"]
  },
  IssuerName: {
    identity: x,
    selector: A,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: Va,
    selector: Pa,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: Fa,
    selector: qa,
    parents: ["Server"],
    children: [...H, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: ja,
    selector: Ka,
    parents: ["AccessPoint", "LDevice"],
    children: [...Fi]
  },
  LN0: {
    identity: x,
    selector: A,
    parents: ["LDevice"],
    children: [
      ...Fi,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: za,
    selector: Ta,
    parents: [...gr],
    children: [...H]
  },
  LNodeType: {
    identity: yt,
    selector: vt,
    parents: ["DataTypeTemplates"],
    children: [...St, "DO"]
  },
  Line: {
    identity: $,
    selector: I,
    parents: ["Process", "SCL"],
    children: [
      ...qi,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: $,
    selector: I,
    parents: [...Fe],
    children: [...H]
  },
  LogControl: {
    identity: $,
    selector: I,
    parents: [...Fe],
    children: [...Mi]
  },
  LogSettings: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: x,
    selector: A,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: x,
    selector: A,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: x,
    selector: A,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: $i,
    selector: _i,
    parents: ["TransformerWinding"],
    children: [...H]
  },
  OptFields: {
    identity: x,
    selector: A,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: ro,
    selector: no,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: to,
    selector: io,
    parents: ["ConnectedAP"],
    children: [...H, "P"]
  },
  PowerTransformer: {
    identity: $,
    selector: I,
    parents: [...Jt],
    children: [
      ...ei,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => B,
    parents: [],
    children: []
  },
  Process: {
    identity: $,
    selector: I,
    parents: ["Process", "SCL"],
    children: [
      ...qi,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: lo,
    selector: so,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: x,
    selector: A,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: $,
    selector: I,
    parents: [...Fe],
    children: [...Mi, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: x,
    selector: A,
    parents: ["ReportControl"],
    children: [...H, "ClientLN"]
  },
  SamplesPerSec: {
    identity: x,
    selector: A,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: $,
    selector: I,
    parents: ["LN0"],
    children: [...Oi, "SmvOpts"]
  },
  SecPerSamples: {
    identity: x,
    selector: A,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: co,
    selector: uo,
    parents: [],
    children: [
      ...It,
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
    identity: Li,
    selector: Yt,
    parents: ["DOI", "SDI"],
    children: [...H, "SDI", "DAI"]
  },
  SDO: {
    identity: $,
    selector: I,
    parents: ["DOType"],
    children: [...Ne]
  },
  Server: {
    identity: x,
    selector: A,
    parents: ["AccessPoint"],
    children: [
      ...H,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: x,
    selector: A,
    parents: ["AccessPoint"],
    children: [...H]
  },
  Services: {
    identity: x,
    selector: A,
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
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: x,
    selector: A,
    parents: ["LN0"],
    children: [...H]
  },
  SettingGroups: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: x,
    selector: A,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: x,
    selector: A,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: zi,
    selector: Ti,
    parents: ["ConnectedAP"],
    children: [...Ri]
  },
  SmvOpts: {
    identity: x,
    selector: A,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: $,
    selector: I,
    parents: ["AccessPoint"],
    children: [...Ne, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: $,
    selector: I,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...pr
    ],
    children: [...$e, "EqFunction"]
  },
  SubFunction: {
    identity: $,
    selector: I,
    parents: ["SubFunction", "Function"],
    children: [
      ...$e,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: $,
    selector: I,
    parents: ["Communication"],
    children: [...Ne, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: x,
    selector: A,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: $,
    selector: I,
    parents: ["SCL"],
    children: [...Ot, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: $,
    selector: I,
    parents: ["TransformerWinding"],
    children: [...$e, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: $i,
    selector: _i,
    parents: [...hr],
    children: [...H]
  },
  Text: {
    identity: x,
    selector: A,
    parents: yr.filter((e) => e !== "Text" && e !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: x,
    selector: A,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: $,
    selector: I,
    parents: ["PowerTransformer"],
    children: [
      ...Pi,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: x,
    selector: A,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: Qa,
    selector: Ya,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: x,
    selector: A,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: x,
    selector: A,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: $,
    selector: I,
    parents: ["Substation"],
    children: [...Ot, "Voltage", "Bay", "Function"]
  }
};
function J(e, t) {
  return typeof t != "string" ? B : hi(e) ? W[e].selector(e, t) : e;
}
function Ae(e, t, i) {
  if (typeof i != "string" || !hi(t)) return null;
  const r = e.querySelector(W[t].selector(t, i));
  return r === null || ue(r) ? r : Array.from(
    e.querySelectorAll(W[t].selector(t, i))
  ).find(ue) ?? null;
}
function z(e) {
  if (e === null) return NaN;
  if (e.closest("Private")) return NaN;
  const t = e.tagName;
  return hi(t) ? W[t].identity(e) : NaN;
}
tr((e) => (t) => {
  Object.keys(e).length ? t.setValue(e) : t.setValue("");
});
const at = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  decimal: "[+\\-]?[0-9]+(([.][0-9]*)?|([.][0-9]+))",
  unsigned: "[+]?[0-9]+(([.][0-9]*)?|([.][0-9]+))"
};
function xr(e, t) {
  return typeof e == "string" && typeof t == "string" ? e.localeCompare(t) : typeof e == "object" && typeof t == "string" ? (e.getAttribute("name") ?? "").localeCompare(t) : typeof e == "string" && typeof t == "object" ? e.localeCompare(t.getAttribute("name")) : typeof e == "object" && typeof t == "object" ? (e.getAttribute("name") ?? "").localeCompare(
    t.getAttribute("name") ?? ""
  ) : 0;
}
function Q(...e) {
  return e.reduce(
    (t, i) => t.flatMap((r) => i.map((n) => [r, n].flat())),
    [[]]
  );
}
function Ar(e, t = /* @__PURE__ */ new WeakSet()) {
  if (t.has(e)) return 1 / 0;
  switch (e?.constructor) {
    case Object:
    case Array:
      return t.add(e), 1 + Math.max(
        -1,
        ...Object.values(e).map((i) => Ar(i, t))
      );
    default:
      return 0;
  }
}
function ue(e) {
  return !e.closest("Private");
}
const Lo = 99, zo = Array(Lo).fill(1).map((e, t) => `${t + 1}`);
function To(e) {
  const t = /* @__PURE__ */ new Map();
  return (i) => {
    if (!t.has(i)) {
      const r = new Set(
        X(e, "LNode").filter((n) => n.getAttribute("lnClass") === i).map((n) => n.getAttribute("lnInst"))
      );
      t.set(i, () => {
        const n = zo.find((a) => !r.has(a));
        return n && r.add(n), n;
      });
    }
    return t.get(i)();
  };
}
const Vo = T`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4.93,4.93C3.12,6.74 2,9.24 2,12C2,14.76 3.12,17.26 4.93,19.07L6.34,17.66C4.89,16.22 4,14.22 4,12C4,9.79 4.89,7.78 6.34,6.34L4.93,4.93M19.07,4.93L17.66,6.34C19.11,7.78 20,9.79 20,12C20,14.22 19.11,16.22 17.66,17.66L19.07,19.07C20.88,17.26 22,14.76 22,12C22,9.24 20.88,6.74 19.07,4.93M7.76,7.76C6.67,8.85 6,10.35 6,12C6,13.65 6.67,15.15 7.76,16.24L9.17,14.83C8.45,14.11 8,13.11 8,12C8,10.89 8.45,9.89 9.17,9.17L7.76,7.76M16.24,7.76L14.83,9.17C15.55,9.89 16,10.89 16,12C16,13.11 15.55,14.11 14.83,14.83L16.24,16.24C17.33,15.15 18,13.65 18,12C18,10.35 17.33,8.85 16.24,7.76M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z" />
</svg>`, Po = T`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4,1H20A1,1 0 0,1 21,2V6A1,1 0 0,1 20,7H4A1,1 0 0,1 3,6V2A1,1 0 0,1 4,1M4,9H20A1,1 0 0,1 21,10V14A1,1 0 0,1 20,15H4A1,1 0 0,1 3,14V10A1,1 0 0,1 4,9M4,17H20A1,1 0 0,1 21,18V22A1,1 0 0,1 20,23H4A1,1 0 0,1 3,22V18A1,1 0 0,1 4,17M9,5H10V3H9V5M9,13H10V11H9V13M9,21H10V19H9V21M5,3V5H7V3H5M5,11V13H7V11H5M5,19V21H7V19H5Z" />
</svg>`, Ro = T`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M13,13H18V15H13M13,9H18V11H13M6.91,7.41L11.5,12L6.91,16.6L5.5,15.18L8.68,12L5.5,8.82M5,3C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5Z" />
</svg>`;
function Oo(e) {
  const t = Fo(e);
  return t ? {
    title: l("wizard.title.edit", { tagName: "Services" }),
    content: [...t],
    element: e
  } : null;
}
function Fo(e) {
  const t = {
    logSettings: {
      cbName: e.querySelector("LogSettings")?.getAttribute("cbName") ?? null,
      datSet: e.querySelector("LogSettings")?.getAttribute("datSet") ?? null,
      logEna: e.querySelector("LogSettings")?.getAttribute("logEna") ?? null,
      intgPd: e.querySelector("LogSettings")?.getAttribute("trgOps") ?? null,
      trgOps: e.querySelector("LogSettings")?.getAttribute("intgPd") ?? null
    },
    confLogControl: {
      max: e.querySelector("ConfLogControl")?.getAttribute("max") ?? null
    },
    dataSet: {
      max: e.querySelector("ConfDataSet")?.getAttribute("max") ?? Array.from(
        e.parentElement?.querySelectorAll("DataSet") || []
      ).length.toString(),
      maxAttributes: e.querySelector("ConfDataSet")?.getAttribute("maxAttributes") ?? null,
      modify: e.querySelector("ConfDataSet")?.getAttribute("modify") ?? "true"
    },
    clientServices: {
      readLog: e.querySelector("ClientServices")?.getAttribute("readLog") ?? null
    },
    sGEdit: {
      resvTms: e.querySelector("SettingGroups > SGEdit")?.getAttribute("resvTms") || null
    },
    confSG: {
      resvTms: e.querySelector("SettingGroups > ConfSG")?.getAttribute("resvTms") || null
    }
  };
  return je(t) ? null : [
    L("Log Control Configuration"),
    ..._([
      {
        kind: "Select",
        label: "cbName",
        maybeValue: t.logSettings.cbName,
        helper: "Whether log control block name is configurable offline (Conf) or fixed (Fix)",
        values: ["Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "datSet",
        maybeValue: t.logSettings.datSet,
        helper: "Whether log control blocks data set and its structure is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "logEna",
        maybeValue: t.logSettings.logEna,
        helper: "Whether log control blocks attribute logEna is configurable offline (Conf), online (Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "trgOps",
        maybeValue: t.logSettings.trgOps,
        helper: "Whether log control blocks trigger options are configurable offline (Conf), online(Dyn) or are fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "intgPd",
        maybeValue: t.logSettings.intgPd,
        helper: "Whether log control blocks integrity period is configurable offlien (Conf), online (Dyn), or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      }
    ]),
    L("Log Capabilities"),
    ..._([
      {
        kind: "TextField",
        label: "Max",
        required: !0,
        helper: "The maximum number of log control blocks instantiable by system configuration tool",
        maybeValue: t.confLogControl.max
      }
    ]),
    L("Client Capabilities"),
    ..._([
      {
        kind: "Checkbox",
        label: "read Log",
        nullable: !0,
        helper: "Whether IED supports services to handle logs as a client (see IEC 61850-7-2 for further information)",
        maybeValue: t.clientServices.readLog
      }
    ]),
    L("DataSet Configuration"),
    ..._([
      {
        kind: "TextField",
        label: "Max",
        nullable: !1,
        helper: "The maximum allow data sets in this IED",
        maybeValue: t.dataSet.max
      },
      {
        kind: "TextField",
        label: "Max attributes",
        nullable: !0,
        helper: "The maximum number of FCDA elements per DataSet",
        maybeValue: t.dataSet.maxAttributes
      },
      {
        kind: "Checkbox",
        label: "Modify",
        helper: "Whether DataSet can be modified by SCT",
        maybeValue: t.dataSet.modify
      }
    ]),
    L("Setting Group"),
    ..._([
      {
        kind: "Checkbox",
        label: "SGEdit",
        nullable: !0,
        helper: "Whether IED allows manipulating editable setting groups online",
        maybeValue: t.sGEdit.resvTms
      },
      {
        kind: "Checkbox",
        label: "ConfSG",
        nullable: !0,
        helper: "Whether IED accepts the system configuration tool to configure the number of setting groups",
        maybeValue: t.confSG.resvTms
      }
    ])
  ];
}
function qo(e) {
  const t = Mo(e);
  return t ? {
    title: l("wizard.title.edit", { tagName: "Report Settings" }),
    content: [...t],
    element: e
  } : null;
}
function Mo(e) {
  const t = {
    reportSettings: {
      cbName: e.querySelector("ReportSettings")?.getAttribute("cbName") ?? null,
      datSet: e.querySelector("ReportSettings")?.getAttribute("datSet") ?? null,
      rptID: e.querySelector("ReportSettings")?.getAttribute("rptID") ?? null,
      optFields: e.querySelector("ReportSettings")?.getAttribute("optFields") ?? null,
      bufTime: e.querySelector("ReportSettings")?.getAttribute("bufTime") ?? null,
      trgOps: e.querySelector("ReportSettings")?.getAttribute("trgOps") ?? null,
      intgPd: e.querySelector("ReportSettings")?.getAttribute("intgPd") ?? null,
      resvTms: e.querySelector("ReportSettings")?.getAttribute("resvTms") ?? null,
      owner: e.querySelector("ReportSettings")?.getAttribute("owner") ?? null
    },
    confReportControl: {
      max: e.querySelector("ConfReportControl")?.getAttribute("max") ?? null,
      bufMode: e.querySelector("ConfReportControl")?.getAttribute("bufMode") ?? null,
      maxBuf: e.querySelector("ConfReportControl")?.getAttribute("maxBuf") ?? null,
      bufConf: e.querySelector("ConfReportControl")?.getAttribute("bufConf") ?? null
    },
    clientServices: {
      maxReports: e.querySelector("ClientServices")?.getAttribute("maxReports") ?? null,
      bufReport: e.querySelector("ClientServices")?.getAttribute("bufReport") ?? null,
      unbufReport: e.querySelector("ClientServices")?.getAttribute("unbufReport") ?? null
    },
    dynDataSet: {
      max: e.querySelector("DynDataSet")?.getAttribute("max") ?? null,
      maxAttributes: e.querySelector("DynDataSet")?.getAttribute("maxAttributes") ?? null
    }
  };
  return je(t) ? null : [
    L("Control Block Configuration"),
    ..._([
      {
        kind: "Select",
        label: "cbName",
        maybeValue: t.reportSettings.cbName,
        helper: "Whether report control block name is configurable offline (Conf) or fixed (Fix)",
        values: ["Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "datSet",
        maybeValue: t.reportSettings.datSet,
        helper: "Whether report control blocks data set and its structure is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "rptID",
        maybeValue: t.reportSettings.rptID,
        helper: "Whether report control blocks ID is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "optFields",
        maybeValue: t.reportSettings.optFields,
        helper: "Whether report control blocks optional fields are configurable offline (Conf), online(Dyn) or are fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "bufTime",
        maybeValue: t.reportSettings.bufTime,
        helper: "Whether report control blocks bufTime attribute is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "trgOps",
        maybeValue: t.reportSettings.trgOps,
        helper: "Whether report control blocks trigger options are configurable offline (Conf), online(Dyn) or are fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "intgPd",
        maybeValue: t.reportSettings.intgPd,
        helper: "Whether report control blocks integrity period is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "resvTms",
        helper: "Whether reserve time exists in all buffered report control blocks",
        maybeValue: t.reportSettings.resvTms?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "owner",
        helper: "Whether owner attribute exists on all buffered report control blocks",
        maybeValue: t.reportSettings.owner?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    L("Publisher Capabilities"),
    ..._([
      {
        kind: "TextField",
        label: "max",
        required: !0,
        helper: "The maximum number of report control blocks instantiable by system configuration tool",
        maybeValue: t.confReportControl.max?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Select",
        label: "bufMode",
        maybeValue: t.confReportControl.bufMode,
        helper: "Whether buffered, unbuffered or both type of report control block can be created by system configuration tool",
        values: ["unbuffered", "buffered", "both"],
        default: "both",
        nullable: !0
      },
      {
        kind: "TextField",
        label: "maxBuf",
        required: !1,
        helper: "The maximum number of BUFFERED report control blocks instantiable by system configuration tool",
        maybeValue: t.confReportControl.maxBuf?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "bufConf",
        helper: "Whether buffered attribute can be configured by system configuration tool",
        maybeValue: t.confReportControl.bufConf?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    L("Client Capabilities"),
    ..._([
      {
        kind: "TextField",
        label: "maxReports",
        required: !0,
        helper: "The maximal number of report control blocks the client can work with",
        maybeValue: t.clientServices.maxReports?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "bufReport",
        helper: "Whether the IED can use buffered report control blocks as a client",
        maybeValue: t.clientServices.bufReport?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "unbufReport",
        helper: "Whether the IED can use un-buffered report control blocks as a client",
        maybeValue: t.clientServices.unbufReport?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    L("Dynamic Reporting/DataSets"),
    ..._([
      {
        kind: "TextField",
        label: "max",
        required: !0,
        helper: "The maximum number data sets (including preconfigured once)",
        maybeValue: t.dynDataSet.max?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "TextField",
        label: "maxAttributes",
        required: !1,
        helper: "The maximum number of data entries (FCDA) allowed within a dynamic data set",
        maybeValue: t.dynDataSet.maxAttributes?.toString() ?? null,
        nullable: !0
      }
    ])
  ];
}
function Ho(e) {
  const t = Bo(e);
  return t ? {
    title: l("wizard.title.edit", { tagName: "GSE Control" }),
    content: [...t],
    element: e
  } : null;
}
function Bo(e) {
  const t = {
    gseSettings: {
      cbName: e.querySelector("GSESettings")?.getAttribute("cbName") ?? null,
      datSet: e.querySelector("GSESettings")?.getAttribute("datSet") ?? null,
      appID: e.querySelector("GSESettings")?.getAttribute("appID") ?? null,
      dataLabel: e.querySelector("GSESettings")?.getAttribute("dataLabel") ?? null,
      kdaParticipant: e.querySelector("GSESettings")?.getAttribute("kdaParticipant") ?? null,
      signature: e.querySelector("GSESettings > McSecurity")?.getAttribute("signature") ?? null,
      encryption: e.querySelector("GSESettings > McSecurity")?.getAttribute("encryption") ?? null
    },
    goose: {
      max: e.querySelector("GOOSE")?.getAttribute("max") ?? null,
      fixedOffs: e.querySelector("GOOSE")?.getAttribute("fixedOffs") ?? null,
      goose: e.querySelector("GOOSE")?.getAttribute("goose") ?? null,
      rGOOSE: e.querySelector("GOOSE")?.getAttribute("rGOOSE") ?? null
    },
    clientServices: {
      maxGOOSE: e.querySelector("ClientServices")?.getAttribute("maxGOOSE") ?? null,
      goose: e.querySelector("ClientServices")?.getAttribute("goose") ?? null,
      rGOOSE: e.querySelector("ClientServices")?.getAttribute("rGOOSE") ?? null,
      gsse: e.querySelector("ClientServices")?.getAttribute("gsse") ?? null
    },
    supSubscription: {
      maxGo: e.querySelector("SupSubscription")?.getAttribute("maxGo") ?? null,
      maxSv: e.querySelector("SupSubscription")?.getAttribute("maxSv") ?? null
    },
    gsse: {
      max: e.querySelector("GSSE")?.getAttribute("max") ?? null
    }
  };
  return je(t) ? null : [
    L("Control Block Configuration"),
    ..._([
      {
        kind: "Select",
        label: "cbName",
        maybeValue: t.gseSettings.cbName,
        helper: "Whether GSE control block (GOOSE) name is configurable offline (Conf) or fixed (Fix)",
        values: ["Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "datSet",
        maybeValue: t.gseSettings.datSet,
        helper: "Whether GSE control blocks (GOOSE) data set and its structure is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "appID",
        maybeValue: t.gseSettings.appID,
        helper: "Whether GSE control blocks (GOOSE) ID is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "dataLabel",
        maybeValue: t.gseSettings.dataLabel,
        helper: "Deprecated!: Whether GSSE object reference is configurable offline (Conf), online(Dyn) or are fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "kdaParticipant",
        maybeValue: t.gseSettings.kdaParticipant,
        helper: "Whether key delivery assurance (KDA) is supported by the server",
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "signature",
        helper: "Whether calculation of a signature is supported for each GOOSE",
        maybeValue: t.gseSettings.signature,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "encryption",
        helper: "Whether message encryption is supported for each GOOSE",
        maybeValue: t.gseSettings.encryption,
        nullable: !0,
        default: !1
      }
    ]),
    L("Publisher Capabilities"),
    ..._([
      {
        kind: "TextField",
        label: "max",
        required: !0,
        helper: "The maximum number of configurable GOOSE control blocks. 0 means no GOOSE publishing supported",
        maybeValue: t.goose.max?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "fixedOffs",
        maybeValue: t.goose.fixedOffs,
        helper: "Whether encoding with fixed offsets is configurable for each GSE control block (GOOSE). See also IEC 61850-8-1",
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "goose",
        helper: "Whether GOOSE publishing is supported",
        maybeValue: t.goose.goose,
        nullable: !0,
        default: !0
      },
      {
        kind: "Checkbox",
        label: "rGOOSE",
        helper: "Whether GOOSE with network layer 3 (IP) is supported",
        maybeValue: t.goose.rGOOSE,
        nullable: !0,
        default: !1
      }
    ]),
    L("Subscription Capabilities"),
    ..._([
      {
        kind: "Checkbox",
        label: "goose",
        helper: "Whether the IED supports client side GOOSE related services",
        maybeValue: t.clientServices.goose?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "TextField",
        label: "maxGOOSE",
        required: !0,
        helper: "The maximal number of GOOSEs the client can subscribe to",
        maybeValue: t.clientServices.maxGOOSE?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "rGOOSE",
        helper: "The maximal number of GOOSEs with network layer 3 the client can subscribe to",
        maybeValue: t.clientServices.rGOOSE?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "gsse",
        helper: "Whether the IED supports client side GSSE related services",
        maybeValue: t.clientServices.gsse?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    L("Supervision Capabilities"),
    ..._([
      {
        kind: "TextField",
        label: "maxGo",
        required: !1,
        helper: "The maximum number of GOOSE supervision supported by this IED (LGOS)",
        maybeValue: t.supSubscription.maxGo?.toString() ?? null,
        nullable: !0
      }
    ]),
    L("GSSE Capabilities"),
    ..._([
      {
        kind: "TextField",
        label: "max",
        required: !0,
        helper: "The maximum number of GSSE supported as publisher. 0 means IED can only subscribe on GSSE messages",
        maybeValue: t.gsse.max?.toString() ?? null,
        nullable: !0
      }
    ])
  ];
}
function Go(e) {
  const t = Wo(e);
  return t ? {
    title: l("wizard.title.edit", { tagName: "Networking" }),
    content: [...t],
    element: e
  } : null;
}
function Wo(e) {
  const t = {
    fileHandling: {
      mms: e.querySelector("FileHandling")?.getAttribute("mms") ?? null,
      ftp: e.querySelector("FileHandling")?.getAttribute("ftp") ?? null,
      ftps: e.querySelector("FileHandling")?.getAttribute("ftps") ?? null
    },
    timeSyncProt: {
      sntp: e.querySelector("TimeSyncProt")?.getAttribute("sntp") ?? null,
      iec61850_9_3: e.querySelector("TimeSyncProt")?.getAttribute("iec61850_9_3") ?? null,
      c37_238: e.querySelector("TimeSyncProt")?.getAttribute("c37_238") ?? null,
      other: e.querySelector("TimeSyncProt")?.getAttribute("other") ?? null
    },
    cs_TimeSyncProt: {
      sntp: e.querySelector("ClientServices > TimeSyncProt")?.getAttribute("sntp") ?? null,
      iec61850_9_3: e.querySelector("ClientServices > TimeSyncProt")?.getAttribute("iec61850_9_3") ?? null,
      c37_238: e.querySelector("ClientServices > TimeSyncProt")?.getAttribute("c37_238") ?? null,
      other: e.querySelector("ClientServices > TimeSyncProt")?.getAttribute("other") ?? null
    },
    cs_McSecurity: {
      signature: e.querySelector("ClientServices > McSecurity")?.getAttribute("signature") ?? null,
      encryption: e.querySelector("ClientServices > McSecurity")?.getAttribute("encryption") ?? null
    },
    redProt: {
      hsr: e.querySelector("RedProt")?.getAttribute("hsr") ?? null,
      prp: e.querySelector("RedProt")?.getAttribute("prp") ?? null,
      rstp: e.querySelector("RedProt")?.getAttribute("rstp") ?? null
    },
    commProt: {
      ipv6: e.querySelector("CommProt")?.getAttribute("ipv6") ?? null
    }
  };
  return je(t) ? null : [
    L("File Handling"),
    ..._([
      {
        kind: "Checkbox",
        label: "mms",
        helper: "Whether the IED supports file transfer as defined by the manufacturer messaging service (MMS)",
        maybeValue: t.fileHandling.mms?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "ftp",
        helper: "Whether the IED supports file transfer service (FTP)",
        maybeValue: t.fileHandling.ftp?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "ftps",
        helper: "Whether the IED supports encrypted file transfer service (FTPS)",
        maybeValue: t.fileHandling.ftps?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    L("Time Server Capabilities"),
    ..._([
      {
        kind: "Checkbox",
        label: "sntp",
        helper: "Whether the IED supports simple network time protocol as time-server",
        maybeValue: t.timeSyncProt.sntp?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "iec61850_9_3",
        helper: "Whether the IED supports precision time protocol (PTP) acc. to IEC 61850-9-3 as time-server",
        maybeValue: t.timeSyncProt.iec61850_9_3?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "c37_238",
        helper: "Whether the IED supports precision time protocol (PTP) acc. to C37.238 as time-server",
        maybeValue: t.timeSyncProt.c37_238?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "other",
        helper: "Whether IED support other type of synchronization as time-server (e.g. PPS)",
        maybeValue: t.timeSyncProt.other?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    L("Time Client Capabilities"),
    ..._([
      {
        kind: "Checkbox",
        label: "sntp",
        helper: "Whether the IED supports simple network time protocol as time-client",
        maybeValue: t.cs_TimeSyncProt.sntp?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "iec61850_9_3",
        helper: "Whether the IED supports precision time protocol (PTP) acc. to IEC 61850-9-3 as time-client",
        maybeValue: t.cs_TimeSyncProt.iec61850_9_3?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "c37_238",
        helper: "Whether the IED supports precision time protocol (PTP) acc. to C37.238 as time-client",
        maybeValue: t.cs_TimeSyncProt.c37_238?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "other",
        helper: "Whether IED support other type of synchronization as time-client (e.g. PPS)",
        maybeValue: t.cs_TimeSyncProt.other?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    L("Multicast Security on Server"),
    ..._([
      {
        kind: "Checkbox",
        label: "signature",
        helper: "Whether calculation of a signature is supported for SMV/GOOSE on this IED/access point",
        maybeValue: t.cs_McSecurity.signature?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "encryption",
        helper: "Whether message encryption is supported for SMV/GOOSE on this IED/access point",
        maybeValue: t.cs_McSecurity.encryption?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    L("Redundancy Protocols"),
    ..._([
      {
        kind: "Checkbox",
        label: "hsr",
        helper: "Whether the IED supports redundancy protocol HSR",
        maybeValue: t.redProt.hsr?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "prp",
        helper: "Whether the IED supports redundancy protocol PRP",
        maybeValue: t.redProt.prp?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "rstp",
        helper: "Whether the IED supports redundancy protocol RSTP",
        maybeValue: t.redProt.rstp?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    L("Others"),
    ..._([
      {
        kind: "Checkbox",
        label: "ipv6",
        helper: "Whether the IED supports IP version 6",
        maybeValue: t.commProt.ipv6?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ])
  ];
}
function Uo(e) {
  const t = jo(e);
  return t ? {
    title: l("wizard.title.edit", { tagName: "Sampled Values" }),
    content: [...t],
    element: e
  } : null;
}
function jo(e) {
  const t = {
    controlBlockConfiguration: {
      cbName: e.querySelector("SMVSettings")?.getAttribute("cbName") ?? null,
      datSet: e.querySelector("SMVSettings")?.getAttribute("datSet") ?? null,
      svID: e.querySelector("SMVSettings")?.getAttribute("svID") ?? null,
      optFields: e.querySelector("SMVSettings")?.getAttribute("optFields") ?? null,
      smpRate: e.querySelector("SMVSettings")?.getAttribute("smpRate") ?? null,
      nofASDU: e.querySelector("SMVSettings")?.getAttribute("nofASDU") ?? null,
      samplesPerSec: e.querySelector("SMVSettings")?.getAttribute("samplesPerSec") ?? null,
      synchSrcId: e.querySelector("SMVSettings")?.getAttribute("synchSrcId") ?? null,
      pdcTimeStamp: e.querySelector("SMVSettings")?.getAttribute("pdcTimeStamp") ?? null,
      kdaParticipant: e.querySelector("SMVSettings")?.getAttribute("kdaParticipant") ?? null,
      signature: e.querySelector("SMVSettings > McSecurity")?.getAttribute("signature") ?? null,
      encryption: e.querySelector("SMVSettings > McSecurity")?.getAttribute("encryption") ?? null,
      smpRateVal: e.querySelector("SMVSettings>SmpRate")?.childNodes[0]?.nodeValue ?? null,
      samplesPerSecVal: e.querySelector("SMVSettings > SamplesPerSec")?.childNodes[0]?.nodeValue ?? null,
      secPerSamplesVal: e.querySelector("SMVSettings > SecPerSamples")?.childNodes[0]?.nodeValue ?? null
    },
    publisherCapabilities: {
      max: e.querySelector("SMVsc")?.getAttribute("max") ?? null,
      delivery: e.querySelector("SMVsc")?.getAttribute("delivery") ?? null,
      deliveryConf: e.querySelector("SMVsc")?.getAttribute("deliveryConf") ?? null,
      sv: e.querySelector("SMVsc")?.getAttribute("sv") ?? null,
      rSV: e.querySelector("SMVsc")?.getAttribute("rSV") ?? null
    },
    subscriptionCapabilities: {
      sv: e.querySelector("ClientServices")?.getAttribute("sv") ?? null,
      maxSMV: e.querySelector("ClientServices")?.getAttribute("maxSMV") ?? null,
      rSV: e.querySelector("ClientServices")?.getAttribute("rSV") ?? null
    },
    superVisionCapabilities: {
      maxSv: e.querySelector("SupSubscription")?.getAttribute("maxSv") ?? null
    }
  };
  return je(t) ? null : [
    L("Control Block Configuration"),
    ..._([
      {
        kind: "Select",
        label: "cbName",
        maybeValue: t.controlBlockConfiguration.cbName,
        helper: "Whether SMV control block name is configurable offline (Conf) or fixed (Fix)",
        values: ["Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "datSet",
        maybeValue: t.controlBlockConfiguration.datSet,
        helper: "Whether SMV control blocks data set and its structure is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "svID",
        maybeValue: t.controlBlockConfiguration.svID,
        helper: "Whether SMV control blocks ID is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "optFields",
        maybeValue: t.controlBlockConfiguration.optFields,
        helper: "Whether SMV control blocks optional fields are configurable offline (Conf), online(Dyn) or are fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "smpRate",
        maybeValue: t.controlBlockConfiguration.smpRate,
        helper: "Whether SMV control blocks attribute smpRate is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "nofASDU",
        maybeValue: t.controlBlockConfiguration.nofASDU,
        helper: "Whether SMV control blocks attribute noASDU (number of timesstapms per packet) is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "samplesPerSec",
        helper: "Whether SMV supported sample rate definition as SamplesPerSec or SecPerSamples",
        maybeValue: t.controlBlockConfiguration.samplesPerSec?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "synchSrcId",
        helper: "Whether grandmaster clock ID can be included in the SMV",
        maybeValue: t.controlBlockConfiguration.synchSrcId?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "pdcTimeStamp",
        helper: "Whether the PDC timestamp can be included into SMV",
        maybeValue: t.controlBlockConfiguration.pdcTimeStamp?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "kdaParticipant",
        helper: "Whether server supports key delivery assurance (KDA)",
        maybeValue: t.controlBlockConfiguration.kdaParticipant?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "signature",
        helper: "Whether calculation of a signature is supported for each GOOSE",
        maybeValue: t.controlBlockConfiguration.signature?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "encryption",
        helper: "Whether message encryption is supported for each GOOSE",
        maybeValue: t.controlBlockConfiguration.encryption?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "TextField",
        label: "SmpRate",
        required: !0,
        helper: "Defines the implemented SmpRate in the IED",
        maybeValue: t.controlBlockConfiguration.smpRateVal?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "TextField",
        label: "SamplesPerSec",
        required: !0,
        helper: "Defines the implemented SamplesPerSec in the IED",
        maybeValue: t.controlBlockConfiguration.samplesPerSecVal?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "TextField",
        label: "SecPerSamples",
        required: !0,
        helper: "Defines the implemented SecPerSamples in the IED",
        maybeValue: t.controlBlockConfiguration.secPerSamplesVal?.toString() ?? null,
        nullable: !0
      }
    ]),
    L("Publisher Capabilities"),
    ..._([
      {
        kind: "TextField",
        label: "max",
        required: !0,
        helper: "The maximum number of SMV control blocks the IED can publish",
        maybeValue: t.publisherCapabilities.max?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Select",
        label: "delivery",
        maybeValue: t.publisherCapabilities.delivery,
        helper: "Whether the IED supports publishing of muslticast, unicast or both types of SMV streams",
        values: ["unicast", "multicast", "both"],
        default: "multicast",
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "deliveryConf",
        helper: "Whether the system configurator is allowed to configure SMV control blocks",
        maybeValue: t.publisherCapabilities.deliveryConf?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "sv",
        helper: "Whether IED supports layer 2 sampled value streams",
        maybeValue: t.publisherCapabilities.sv?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "rSV",
        helper: "Whether the IED supports layer 3 sampled value streams",
        maybeValue: t.publisherCapabilities.rSV?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    L("Client Capabilities"),
    ..._([
      {
        kind: "Checkbox",
        label: "sv",
        helper: "Whether the IED supports client side SMV related services",
        maybeValue: t.subscriptionCapabilities.sv?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "TextField",
        label: "maxSMV",
        required: !1,
        helper: "The maximal number of layer 2 sampled value streams the client can subscribe to",
        maybeValue: t.subscriptionCapabilities.maxSMV?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "rSV",
        helper: "The maximal number of layer 3 sampled value streams the client can subscribe to",
        maybeValue: t.subscriptionCapabilities.rSV?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    L("Dynamic Reporting/DataSets"),
    ..._([
      {
        kind: "TextField",
        label: "maxSv",
        required: !1,
        helper: "The maximum number of SMV supervision supported by this IED (LSVS)",
        maybeValue: t.superVisionCapabilities.maxSv?.toString() ?? null,
        nullable: !0
      }
    ])
  ];
}
function Ko(e) {
  const t = Zo(e);
  return t ? {
    title: l("wizard.title.edit", { tagName: "Client Server Services" }),
    content: [...t],
    element: e
  } : null;
}
function Zo(e) {
  const t = {
    dynamicAssociations: {
      max: e.querySelector("DynAssociation")?.getAttribute("max") ?? null
    },
    discoverCapabilities: {
      getDirectory: e.querySelector("GetDirectory") ? "true" : null,
      getDataObjectDefinition: e.querySelector("GetDataObjectDefinition") ? "true" : null,
      dataObjectDirectory: e.querySelector("DataObjectDirectory") ? "true" : null,
      getDataSetValue: e.querySelector("GetDataSetValue") ? "true" : null,
      setDataSetValue: e.querySelector("SetDataSetValue") ? "true" : null,
      setDataSetDirectory: e.querySelector("DataSetDirectory") ? "true" : null,
      readWrite: e.querySelector("ReadWrite") ? "true" : null
    },
    functionalNaming: {
      confLdName: e.querySelector("ConfLdName") ? "true" : null,
      supportsLdName: e.querySelector("ClientServices")?.getAttribute("supportsLdName") ?? null
    },
    clientCapabilities: {
      maxAttributes: e.querySelector("ClientServices")?.getAttribute("maxAttributes") ?? null,
      timerActivatedControl: e.querySelector("TimerActivatedControl") ? "true" : null,
      getCBValues: e.querySelector("GetCBValues") ? "true" : null,
      GSEDir: e.querySelector("GSEDir") ? "true" : null
    },
    valKindManipulationConfig: {
      setToRO: e.querySelector("ValueHandling")?.getAttribute("setToRO") ?? null
    },
    signalReferenceConfig: {
      max: e.querySelector("ConfSigRef")?.getAttribute("max") ?? null
    }
  };
  return je(t) ? null : [
    L("Dynamic Associations"),
    ..._([
      {
        kind: "TextField",
        label: "max",
        required: !1,
        helper: "The maximum number of guaranteed parallel association with the IED. If missing, no association is possible",
        maybeValue: t.dynamicAssociations.max?.toString() ?? null,
        nullable: !0
      }
    ]),
    L("Discover Capabilities"),
    ..._([
      {
        kind: "Checkbox",
        label: "GetDirectory",
        helper: "Whether IED supports GetServerDirectory, GetLogicalDeviceDirectory, GetLogicalNodeDirectory",
        maybeValue: t.discoverCapabilities.getDirectory,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "GetDataObjectDefinition",
        helper: "Whether IED supports the service GetDataDefinition",
        maybeValue: t.discoverCapabilities.getDataObjectDefinition,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "DataObjectDirectory",
        helper: "Whether IED supports the service GetDataDirectory",
        maybeValue: t.discoverCapabilities.dataObjectDirectory,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "GetDataSetValue",
        helper: "Whether IED supports the service GetDataSetValues",
        maybeValue: t.discoverCapabilities.getDataSetValue,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "SetDataSetValue",
        helper: "Whether IED supports the service SetDataSetValue",
        maybeValue: t.discoverCapabilities.setDataSetValue,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "SetDataSetDirectory",
        helper: "Whether IED supports the service SetDataSetDirectory",
        maybeValue: t.discoverCapabilities.setDataSetDirectory,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "ReadWrite",
        helper: "Whether IED supports the service GetData, SetData, and the Operate services",
        maybeValue: t.discoverCapabilities.readWrite,
        nullable: !0,
        default: !1
      }
    ]),
    L("Functional Naming"),
    ..._([
      {
        kind: "Checkbox",
        label: "ConfLdName",
        helper: "Whether the IED allows defining the attribute ldName in logical devices (LDevice)",
        maybeValue: t.functionalNaming.confLdName,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "supportsLdName",
        helper: "Whether the IED understands the logical device (LDevice) name (ldName) setting as a client",
        maybeValue: t.functionalNaming.supportsLdName,
        nullable: !0,
        default: !1
      }
    ]),
    L("Client Capabilities"),
    ..._([
      {
        kind: "TextField",
        label: "maxAttributes",
        required: !1,
        helper: "The maximum receivable data attributes (across all data sets)",
        maybeValue: t.clientCapabilities.maxAttributes?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "TimerActivatedControl",
        helper: "Whether IED supports time activated control",
        maybeValue: t.clientCapabilities.timerActivatedControl,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "GetCBValues",
        helper: "Whether IED can read control blocks online",
        maybeValue: t.clientCapabilities.getCBValues,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "GSEDir",
        helper: "Whether IED supports GSE directory services acc. to IEC 61850-7-2",
        maybeValue: t.clientCapabilities.GSEDir,
        nullable: !0,
        default: !1
      }
    ]),
    L("ValKind Manipulation Configuration"),
    ..._([
      {
        kind: "Checkbox",
        label: "setToRO",
        helper: "Whether valKind attribute in DA/BDA element that are Set can be modified to RO (only for function constrains for CF, DC, SP)",
        maybeValue: t.valKindManipulationConfig.setToRO,
        nullable: !0,
        default: !1
      }
    ]),
    L("Signal Reference Configuration"),
    ..._([
      {
        kind: "TextField",
        label: "max",
        required: !1,
        helper: "The maximum object references that the IED can create (instantiation only by IED Configuration Tool)",
        maybeValue: t.signalReferenceConfig.max?.toString() ?? null,
        nullable: !0
      }
    ])
  ];
}
function je(e, t = [null, void 0, ""]) {
  return (e === null ? [!1] : Object.keys(e).flatMap((i) => {
    const r = e[i];
    return typeof r == "object" ? je(r) : [t.includes(r)];
  })).includes(!0);
}
function Xo(e) {
  let t = v``;
  switch (e.kind) {
    case "TextField":
    default:
      t = v`<wizard-textfield
        label=${e.label}
        .maybeValue=${e.maybeValue}
        .helper=${e.helper || ""}
        ?required=${e.required}
        .validationMessage=${e.validationMessage || ""}
        .pattern=${e.pattern || ""}
        .defaultValue=${e.default || ""}
        ?dialogInitialFocus=${e.dialogInitialFocus}
        ?nullable=${e.nullable}
        disabled
      ></wizard-textfield>`;
      break;
    case "Checkbox":
      t = v`<wizard-checkbox
        label=${e.label}
        .maybeValue=${e.maybeValue}
        .helper=${e.helper || ""}
        ?defaultValue=${e.default}
        ?dialogInitialFocus=${e.dialogInitialFocus}
        ?nullable=${e.nullable}
        disabled
      ></wizard-checkbox>`;
      break;
    case "Select":
      t = v`<wizard-select
        label=${e.label}
        .maybeValue=${e.maybeValue}
        .validationMessage=${e.valadationMessage || ""}
        .defaultValue=${e.default || ""}
        ?dialogInitialFocus=${e.dialogInitialFocus}
        ?nullable=${e.nullable}
        disabled
      >
        ${e.values.map((i) => v`<mwc-list-item .value=${i}>
            ${i}
          </mwc-list-item>`)}
      </wizard-select>`;
      break;
  }
  return t;
}
function _(e) {
  return e.map((t) => Xo(t));
}
function L(e) {
  return v`<wizard-divider .header=${e}></wizard-divider>`;
}
function wr(e) {
  return [
    Oo(e),
    qo(e),
    Ho(e),
    Go(e),
    Uo(e),
    Ko(e)
  ].filter((t) => t !== null).map((t) => t);
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
const Bi = /* @__PURE__ */ new WeakMap(), Gi = 2147483647, Cr = kt((...e) => (t) => {
  let i = Bi.get(t);
  i === void 0 && (i = {
    lastRenderedIndex: Gi,
    values: []
  }, Bi.set(t, i));
  const r = i.values;
  let n = r.length;
  i.values = e;
  for (let a = 0; a < e.length && !(a > i.lastRenderedIndex); a++) {
    const o = e[a];
    if (or(o) || typeof o.then != "function") {
      t.setValue(o), i.lastRenderedIndex = a;
      break;
    }
    a < n && o === r[a] || (i.lastRenderedIndex = Gi, n = 0, Promise.resolve(o).then((s) => {
      const d = i.values.indexOf(o);
      d > -1 && d < i.lastRenderedIndex && (i.lastRenderedIndex = d, t.setValue(s), t.commit());
    }));
  }
});
function Qo(e, t) {
  const i = {};
  return Array.from(e.attributes).forEach((r) => {
    i[r.name] = r.value;
  }), { element: e, oldAttributes: i, newAttributes: t };
}
function Nt(e, t = "user", i) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { action: e, initiator: t, ...i?.detail }
  });
}
const Er = {
  IED: [
    {
      attributeName: "iedName",
      filter: Oe("Association")
    },
    {
      attributeName: "iedName",
      filter: Oe("ClientLN")
    },
    {
      attributeName: "iedName",
      filter: Oe("ConnectedAP")
    },
    {
      attributeName: "iedName",
      filter: Oe("ExtRef")
    },
    {
      attributeName: "iedName",
      filter: Oe("KDC")
    },
    {
      attributeName: "iedName",
      filter: Oe("LNode")
    },
    {
      attributeName: null,
      filter: Ft("GSEControl > IEDName")
    },
    {
      attributeName: null,
      filter: Ft("SampledValueControl > IEDName")
    },
    {
      attributeName: null,
      filter: Ft("LN > DOI > DAI > Val")
    }
  ],
  Substation: [
    {
      attributeName: "substationName",
      filter: Oe("Terminal")
    }
  ],
  VoltageLevel: [
    {
      attributeName: "voltageLevelName",
      filter: Wi("Terminal", {
        Substation: "substationName"
      })
    }
  ],
  Bay: [
    {
      attributeName: "bayName",
      filter: Wi("Terminal", {
        Substation: "substationName",
        VoltageLevel: "voltageLevelName"
      })
    }
  ]
};
function Oe(e) {
  return function(i, r, n) {
    return `${e}[${r}="${n}"]`;
  };
}
function Ft(e) {
  return function() {
    return `${e}`;
  };
}
function Wi(e, t) {
  return function(r, n, a) {
    return `${e}${Object.entries(t).map(([o, s]) => {
      const d = r.closest(o);
      if (d && d.hasAttribute("name")) {
        const u = d.getAttribute("name");
        return `[${s}="${u}"]`;
      }
      return null;
    }).join("")}[${n}="${a}"]`;
  };
}
function Yo(e, t, i) {
  const r = e.cloneNode(!1);
  return r.setAttribute(t, i), r;
}
function kr(e, t) {
  const i = e.cloneNode(!1);
  return i.textContent = t, i;
}
function fi(e, t, i) {
  if (t === null || t === i)
    return [];
  const r = Er[e.tagName];
  if (r === void 0)
    return [];
  const n = [];
  return r.forEach((a) => {
    const o = a.filter(e, a.attributeName, t);
    a.attributeName ? Array.from(e.ownerDocument.querySelectorAll(`${o}`)).filter(ue).forEach((s) => {
      const d = Yo(
        s,
        a.attributeName,
        i
      );
      n.push({ old: { element: s }, new: { element: d } });
    }) : Array.from(e.ownerDocument.querySelectorAll(`${o}`)).filter((s) => s.textContent === t).filter(ue).forEach((s) => {
      const d = kr(s, i);
      n.push({ old: { element: s }, new: { element: d } });
    });
  }), e.tagName === "IED" && n.push(...Jo(e, t, i)), n;
}
function Jo(e, t, i) {
  const r = [];
  return e.ownerDocument.querySelectorAll("IED").forEach((a) => {
    const o = Array.from(
      a.querySelectorAll(
        ':scope > AccessPoint > Server > LDevice > LN[lnClass="LGOS"] > DOI > DAI > Val, :scope > AccessPoint > Server > LDevice > LN[lnClass="LSVS"] > DOI > DAI > Val'
      )
    );
    if (o.length === 0) return;
    const s = a.querySelector(
      `:scope > AccessPoint > Server > LDevice > LN0 > Inputs > ExtRef[iedName="${t}"][srcCBName]`
    ), d = s?.getAttribute("srcLDInst") + "/" + s?.getAttribute("srcLNClass") + "." + s?.getAttribute("srcCBName");
    for (let u of o)
      if (t + d === u.textContent.trim()) {
        const p = kr(
          u,
          i + d
        );
        r.push({
          old: { element: u },
          new: { element: p }
        });
        break;
      }
  }), r;
}
function Dr(e) {
  const t = M(e) ?? null;
  if (t === null)
    return [];
  const i = Er[e.tagName];
  if (i === void 0)
    return [];
  const r = [];
  return i.forEach((n) => {
    const a = n.filter(e, n.attributeName, t);
    n.attributeName ? Array.from(e.ownerDocument.querySelectorAll(`${a}`)).filter(ue).forEach((o) => {
      r.push({ old: { parent: o.parentElement, element: o } });
    }) : Array.from(e.ownerDocument.querySelectorAll(`${a}`)).filter((o) => o.textContent === t).filter(ue).forEach((o) => {
      o.parentElement && r.push({
        old: {
          parent: o.parentElement.parentElement,
          element: o.parentElement
        }
      });
    });
  }), r;
}
function Ir(e) {
  return (t) => {
    const i = f(t.find((a) => a.label === "name")), r = f(t.find((a) => a.label === "desc"));
    if (i === e.getAttribute("name") && r === e.getAttribute("desc"))
      return [];
    const n = V(e, { name: i, desc: r });
    return [{ old: { element: e }, new: { element: n } }];
  };
}
function el(e, t) {
  return (i) => {
    const r = f(i.find((d) => d.label === "name")), n = e.getAttribute("name"), a = f(i.find((d) => d.label === "desc"));
    if (r === n && a === e.getAttribute("desc"))
      return [];
    const o = V(e, { name: r, desc: a }), s = {
      actions: [],
      title: l(t, { name: r })
    };
    return s.actions.push({
      old: { element: e },
      new: { element: o }
    }), s.actions.push(...fi(e, n, r)), s.actions.length ? [s] : [];
  };
}
function Nr(e, t) {
  return (i) => {
    const r = {};
    if (tl(r, e, i), Object.keys(r).length == 0)
      return [];
    il(e, r);
    const n = f(i.find((o) => o.label === "name")), a = {
      actions: [],
      title: l(t, { name: n })
    };
    return a.actions.push(Qo(e, r)), a.actions.push(
      ...fi(e, e.getAttribute("name"), n)
    ), a.actions.length ? [a] : [];
  };
}
function tl(e, t, i) {
  const r = f(i.find((a) => a.label === "name")), n = f(i.find((a) => a.label === "desc"));
  r !== t.getAttribute("name") && (e.name = r), n !== t.getAttribute("desc") && (e.desc = n);
}
function il(e, t) {
  const i = Object.keys(t);
  return Array.from(e.attributes).filter((r) => !i.includes(r.name)).forEach((r) => {
    t[r.name] = r.value;
  }), t;
}
function $r(e, t) {
  return [
    v`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("bay.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    v`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${l("bay.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function rl(e) {
  return (t) => {
    const i = f(t.find((o) => o.label === "name")), r = f(t.find((o) => o.label === "desc")), n = N(e.ownerDocument, "Bay", {
      name: i,
      desc: r
    });
    return [{
      new: {
        parent: e,
        element: n
      }
    }];
  };
}
function nl(e) {
  return [
    {
      title: l("bay.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: l("add"),
        action: rl(e)
      },
      content: $r("", "")
    }
  ];
}
function al(e) {
  return [
    {
      title: l("bay.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: el(
          e,
          "bay.action.updateBay"
        )
      },
      content: $r(
        e.getAttribute("name"),
        e.getAttribute("desc")
      )
    }
  ];
}
const ti = {
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
function ol(e) {
  if (!e) return null;
  const [t, i, r, n, a] = [
    "lnInst",
    "lnClass",
    "iedName",
    "ldInst",
    "prefix"
  ].map((p) => e?.getAttribute(p)), o = [`IED[name="${r}"]`, "IED"], s = ["AccessPoint > Server"], d = [
    `LDevice[inst="${n}"] > LN[inst="${t}"][lnClass="${i}"]`
  ], u = a && a !== "" ? [`[prefix="${a}"]`] : ['[prefix=""]', ":not(prefix)"];
  return e.ownerDocument.querySelector(
    Q(
      o,
      [" > "],
      s,
      [" > "],
      d,
      u
    ).map((p) => p.join("")).join(",")
  );
}
function _r(e) {
  const t = e?.ownerDocument, i = e.getAttribute("lnType"), r = e.getAttribute("lnClass"), n = t.querySelector(
    `DataTypeTemplates > LNodeType[id="${i}"][lnClass="${r}"] > DO[name="SwTyp"]`
  );
  if (n) {
    const a = n.getAttribute("type");
    return t.querySelector(
      `DataTypeTemplates > DOType[id="${a}"] > DA[name="stVal"] > Val`
    )?.innerHTML.trim();
  }
}
function ll(e) {
  const t = e.querySelector(
    'DOI[name="SwTyp"] > DAI[name="stVal"]'
  );
  return t ? t.querySelector("Val")?.innerHTML.trim() : _r(e);
}
function sl(e) {
  return Array.from(e.querySelectorAll("Terminal")).some(
    (t) => t.getAttribute("cNodeName") === "grounded"
  );
}
function cl(e) {
  const t = e.querySelector('LNode[lnClass="XSWI"]'), i = ol(t);
  let r;
  return i ? r = ll(i) : t && (r = _r(t)), r ? ["Earthing Switch", "High Speed Earthing Switch"].includes(r) : !1;
}
function dl(e) {
  return e.getAttribute("type") === "DIS" && (sl(e) || cl(e)) ? "ERS" : e.getAttribute("type") ?? "";
}
function ul(e) {
  return ti[dl(e)] ?? l("conductingequipment.unknownType");
}
function ml(e, t) {
  return e === "create" ? c`<mwc-select
        style="--mdc-menu-max-height: 196px;"
        required
        label="type"
        helper="${l("conductingequipment.wizard.typeHelper")}"
        validationMessage="${l("textfield.required")}"
      >
        ${Object.keys(ti).map(
    (i) => c`<mwc-list-item value="${i}">${ti[i]}</mwc-list-item>`
  )}
      </mwc-select>` : c`<mwc-select
        label="type"
        helper="${l("conductingequipment.wizard.typeHelper")}"
        validationMessage="${l("textfield.required")}"
        disabled
      >
        <mwc-list-item selected value="0">${t}</mwc-list-item>
      </mwc-select>`;
}
function Lr(e, t, i, r, n) {
  return [
    ml(i, r),
    c`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("conductingequipment.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${n}
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${l("conductingequipment.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function pl(e) {
  return (t) => {
    const i = f(t.find((D) => D.label === "name")), r = f(t.find((D) => D.label === "desc")), n = f(t.find((D) => D.label === "type")), a = n === "ERS" ? "DIS" : n, o = N(e.ownerDocument, "ConductingEquipment", {
      name: i,
      type: a,
      desc: r
    });
    if (n !== "ERS") return [{ new: { parent: e, element: o } }];
    const s = e.closest("VoltageLevel")?.querySelector('ConnectivityNode[name="grounded"]'), d = s ? s.closest("Substation")?.getAttribute("name") ?? null : e.closest("Substation")?.getAttribute("name") ?? null, u = s ? s.closest("VoltageLevel")?.getAttribute("name") ?? null : e.closest("VoltageLevel")?.getAttribute("name") ?? null, p = s ? s.closest("Bay")?.getAttribute("name") ?? null : e.closest("Bay")?.getAttribute("name") ?? null, h = p && u && d ? d + "/" + u + "/" + p + "/grounded" : null;
    o.appendChild(
      N(e.ownerDocument, "Terminal", {
        name: "T1",
        cNodeName: "grounded",
        substationName: d,
        voltageLevelName: u,
        bayName: p,
        connectivityNode: h
      })
    );
    const y = {
      new: {
        parent: e,
        element: o
      }
    };
    if (s) return [y];
    const S = N(
      e.ownerDocument,
      "ConnectivityNode",
      {
        name: "grounded",
        pathName: h
      }
    );
    return [y, {
      new: {
        parent: e,
        element: S
      }
    }];
  };
}
function zr(e, t) {
  return Array.from(e.querySelectorAll("ConductingEquipment")).filter(ue).map((i) => i.getAttribute("name") ?? "").filter((i) => t && i !== t);
}
function hl(e) {
  const t = zr(e);
  return [
    {
      title: l("conductingequipment.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: l("add"),
        action: pl(e)
      },
      content: Lr(
        "",
        "",
        "create",
        "",
        t
      )
    }
  ];
}
function fl(e) {
  const t = zr(
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
        action: Ir(e)
      },
      content: Lr(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        "edit",
        ul(e),
        t
      )
    }
  ];
}
function bl(e, t, i) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("connectivitynode.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${i}
      readonly
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="pathName"
      .maybeValue=${t}
      helper="${l("connectivitynode.wizard.pathNameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function gl(e) {
  const t = Array.from(
    e.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(ue).map((i) => i.getAttribute("name") ?? "").filter((i) => i !== e.getAttribute("name"));
  return [
    {
      title: l("connectivitynode.wizard.title.edit"),
      element: e,
      content: bl(
        e.getAttribute("name"),
        e.getAttribute("pathName"),
        t
      )
    }
  ];
}
var yl = Object.defineProperty, vl = Object.getOwnPropertyDescriptor, Ee = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? vl(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && yl(t, i, n), n;
};
const Sl = c`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${l("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let ge = class extends Le {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (e) => ({
      path: e,
      header: c`<h2>${"/" + e.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return Ar(this.selection);
  }
  get paths() {
    return this.getPaths();
  }
  set paths(e) {
    const t = {};
    for (const i of e) {
      let r = t;
      for (const n of i)
        Object.prototype.hasOwnProperty.call(r, n) || (r[n] = {}), r = r[n];
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
    let t = Object.keys(this.selection).map((r) => [r]), i = e ?? this.depth - 1;
    for (; i-- > 0; )
      t = t.flatMap((r) => {
        let n = this.selection;
        for (const o of r) n = n[o];
        const a = Object.keys(n).map((o) => r.concat(o));
        return a.length === 0 ? [r] : a;
      });
    return e === void 0 ? t : t.filter((r) => r.length > e);
  }
  multiSelect(e, t, i) {
    let r = this.selection;
    for (const n of t) r = r[n];
    r && r[i] ? delete r[i] : r[i] = {};
  }
  singleSelect(e, t, i) {
    this.path[t.length] === i ? this.path = t : this.path = t.concat(i);
  }
  async select(e, t) {
    const i = e.target.selected.value;
    this.multi ? this.multiSelect(e, t, i) : this.singleSelect(e, t, i), this.requestUpdate(), await this.updateComplete, await new Promise((r) => setTimeout(r, 250)), this.container.scrollLeft = 1e3 * this.depth;
  }
  renderDirectory(e, t) {
    return c`<filtered-list
      @selected=${(i) => this.select(i, e)}
      searchFieldLabel="${this.getTitle(e)}"
    >
      ${t.map(
      (i) => c`<mwc-list-item
            value="${i}"
            ?activated=${this.getPaths(e.length).map((r) => JSON.stringify(r)).includes(JSON.stringify(e.concat(i)))}
            >${this.getDisplayString(i, e)}</mwc-list-item
          >`
    )}
    </filtered-list>`;
  }
  async renderColumn(e) {
    const i = this.getPaths(e).map((n) => this.read(n)), r = [];
    for await (const { header: n, entries: a, path: o } of i)
      (n || a.length > 0) && r.push(
        c`${pe(n)} ${this.renderDirectory(o, a)}`
      );
    return r.length === 0 ? c`` : c`<div class="column">${r}</div>`;
  }
  render() {
    const e = new Array(this.depth).fill(0).map((t, i) => this.renderColumn(i));
    return this.loaded = Promise.allSettled(e).then(), c`<div class="pane">
      ${e.map((t) => Cr(t, Sl))}
    </div>`;
  }
};
ge.styles = re`
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
Ee([
  b({ type: Object })
], ge.prototype, "selection", 2);
Ee([
  b({ type: Boolean })
], ge.prototype, "multi", 2);
Ee([
  b({ type: Number })
], ge.prototype, "depth", 1);
Ee([
  b({ type: Array })
], ge.prototype, "paths", 1);
Ee([
  b({ type: Array })
], ge.prototype, "path", 1);
Ee([
  b({ attribute: !1 })
], ge.prototype, "read", 2);
Ee([
  b({ attribute: !1 })
], ge.prototype, "loaded", 2);
Ee([
  F("div")
], ge.prototype, "container", 2);
ge = Ee([
  G("finder-list")
], ge);
function xl(e) {
  return e.startsWith("IED:") ? e.replace(/^.*:/, "").trim() : e.startsWith("LN0:") ? "LLN0" : e.replace(/^.*>/, "").trim();
}
function Al(e, t) {
  return async (i) => {
    const [r, n] = i[i.length - 1]?.split(": ", 2), a = Ae(e, r, n);
    return a ? {
      path: i,
      header: void 0,
      entries: t(a).map(
        (o) => `${o.tagName}: ${z(o)}`
      )
    } : { path: i, header: c`<p>${l("error")}</p>`, entries: [] };
  };
}
function Tr(e) {
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
function wl(e) {
  return c`<finder-list
    multi
    .paths=${[["Server: " + z(e)]]}
    .read=${Al(e.ownerDocument, Tr)}
    .getDisplayString=${xl}
    .getTitle=${(t) => t[t.length - 1]}
  ></finder-list>`;
}
function Cl(e, t) {
  const [i, r] = t[t.length - 1].split(": "), n = Ae(e.ownerDocument, i, r);
  if (!n || Tr(n).length > 0) return;
  const a = t.find((P) => P.startsWith("LN"));
  if (!a) return;
  const [o, s] = a.split(": "), d = Ae(e.ownerDocument, o, s);
  if (!d) return;
  const u = d.closest("LDevice")?.getAttribute("inst"), p = d.getAttribute("prefix") ?? "", h = d.getAttribute("lnClass"), y = d.getAttribute("inst") && d.getAttribute("inst") !== "" ? d.getAttribute("inst") : null;
  let S = "", w = "", D = "";
  for (const P of t) {
    const [C, oe] = P.split(": ");
    if (!["DO", "DA", "SDO", "BDA"].includes(C)) continue;
    const ve = Ae(e.ownerDocument, C, oe);
    if (!ve) return;
    const ke = ve.getAttribute("name");
    C === "DO" && (S = ke), C === "SDO" && (S = S + "." + ke), C === "DA" && (w = ke, D = ve.getAttribute("fc") ?? ""), C === "BDA" && (w = w + "." + ke);
  }
  if (!(!u || !h || !S || !w || !D))
    return N(e.ownerDocument, "FCDA", {
      ldInst: u,
      prefix: p,
      lnClass: h,
      lnInst: y,
      doName: S,
      daName: w,
      fc: D
    });
}
function El(e) {
  return (t, i) => {
    const n = i.shadowRoot.querySelector("finder-list")?.paths ?? [], a = [];
    for (const o of n) {
      const s = Cl(e, o);
      s && a.push({
        new: {
          parent: e,
          element: s,
          reference: null
        }
      });
    }
    return a;
  };
}
function Vr(e) {
  const t = e.closest("Server");
  return [
    {
      title: l("wizard.title.add", { tagName: "FCDA" }),
      primary: {
        label: "add",
        icon: "add",
        action: El(e)
      },
      content: [t ? wl(t) : c``]
    }
  ];
}
const we = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  asciName: "[A-Za-z][0-9,A-Z,a-z_]*",
  abstractDataAttributeName: "((T)|(Test)|(Check)|(SIUnit)|(Oper)|(SBO)|(SBOw)|(Cancel)|[a-z][0-9A-Za-z]*)"
}, bi = {
  cbName: 32,
  abstracDaName: 60
};
function qt(e, t) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { ...e, ...t?.detail }
  });
}
function kl(e) {
  return (t, i, r) => {
    const n = r.items.filter((s) => s.selected).map((s) => s.value).map((s) => Ae(e.ownerDocument, "LNodeType", s)).filter((s) => s !== null), a = To(e);
    return n.map((s) => {
      const d = s.getAttribute("lnClass");
      if (!d) return null;
      const u = a(d);
      if (!u) {
        i.dispatchEvent(
          qt({
            kind: "error",
            title: l("lnode.log.title", { lnClass: d }),
            message: l("lnode.log.nonuniquelninst")
          })
        );
        return;
      }
      const p = X(e, "LNode").some(
        (w) => w.getAttribute("lnClass") === "LLN0"
      );
      if (d === "LLN0" && p) {
        i.dispatchEvent(
          qt({
            kind: "error",
            title: l("lnode.log.title", { lnClass: d }),
            message: l("lnode.log.uniqueln0", { lnClass: d })
          })
        );
        return;
      }
      const h = X(e, "LNode").some(
        (w) => w.getAttribute("lnClass") === "LPHD"
      );
      if (d === "LPHD" && h) {
        i.dispatchEvent(
          qt({
            kind: "error",
            title: l("lnode.log.title", { lnClass: d }),
            message: l("lnode.log.uniqueln0", { lnClass: d })
          })
        );
        return;
      }
      const y = d === "LLN0" ? "" : u, S = N(e.ownerDocument, "LNode", {
        iedName: "None",
        ldInst: null,
        prefix: null,
        lnClass: d,
        lnInst: y,
        lnType: s.getAttribute("id")
      });
      return { new: { parent: e, element: S } };
    }).filter((s) => s);
  };
}
function Dl(e) {
  return (t) => {
    t.dispatchEvent(U()), t.dispatchEvent(U(Or(e)));
  };
}
function Pr(e) {
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
          action: Dl(e)
        }
      ],
      primary: {
        icon: "save",
        label: l("save"),
        action: kl(e)
      },
      content: [
        v`<filtered-list multi
          >${t.map((i) => {
          const r = i.getAttribute("lnClass") === "LLN0" && X(e, "LNode").some(
            (n) => n.getAttribute("lnClass") === "LLN0"
          ) || i.getAttribute("lnClass") === "LPHD" && X(e, "LNode").some(
            (n) => n.getAttribute("lnClass") === "LPHD"
          );
          return v`<mwc-check-list-item
              twoline
              value="${z(i)}"
              ?disabled=${r}
              ><span>${i.getAttribute("lnClass")}</span
              ><span slot="secondary"
                >${r ? l("lnode.wizard.uniquewarning") : z(i)}</span
              ></mwc-check-list-item
            >`;
        })}</filtered-list
        >`
      ]
    }
  ];
}
const Il = {
  CBR: ["CSWI", "CILO", "XCBR"],
  DIS: ["CSWI", "CILO", "XSWI"],
  VTR: ["TVTR"],
  CTR: ["TCTR"],
  Bay: ["LLN0"],
  VoltageLevel: ["LLN0"],
  Substation: ["LLN0"]
};
function Rr(e, t) {
  return e.disabled !== t.disabled ? t.disabled ? -1 : 1 : e.preferred !== t.preferred ? e.preferred ? -1 : 1 : e.selected !== t.selected ? e.selected ? -1 : 1 : 0;
}
const Nl = "Client LN";
function Ui(e, t) {
  return Array.from(e.getElementsByTagName("LNode")).filter((i) => !i.closest("Private")).filter((i) => gi(t, i))[0] ?? null;
}
function gi(e, t) {
  return (t.getAttribute("iedName") ?? "") === (e.closest("IED")?.getAttribute("name") ?? "") && (t.getAttribute("ldInst") ?? "") === (e.closest("LDevice")?.getAttribute("inst") ?? "") && (t.getAttribute("prefix") ?? "") === (e.getAttribute("prefix") ?? "") && (t.getAttribute("lnClass") ?? "") === (e.getAttribute("lnClass") ?? "") && (t.getAttribute("lnInst") ?? "") === (e.getAttribute("inst") ?? "");
}
function $l(e, t) {
  const i = N(e.ownerDocument, "LNode", {
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
function _l(e, t) {
  return {
    old: {
      parent: e,
      element: t,
      reference: t.nextElementSibling
    }
  };
}
function Ll(e, t) {
  return e.some((i) => gi(i, t));
}
function zl(e, t) {
  return t.some((i) => gi(e, i));
}
function Tl(e) {
  return (t, i, r) => {
    const n = r.items.filter((d) => d.selected).map((d) => d.value).map((d) => {
      const u = Ae(e.ownerDocument, "LN0", d);
      return u || Ae(e.ownerDocument, "LN", d);
    }).filter((d) => d !== null), a = X(e, "LNode").filter(
      ue
    ), o = a.filter((d) => !Ll(n, d)).map((d) => _l(e, d)), s = n.filter((d) => !zl(d, a)).map((d) => $l(e, d));
    return o.concat(s);
  };
}
function Vl(e, t) {
  return e.parentElement?.parentElement?.nextElementSibling?.querySelector(
    t
  ) ?? null;
}
function Pl(e, t) {
  if (!(e.target instanceof de)) return;
  const i = Vl(e.target, "#lnList");
  if (i === null) return;
  const r = t.ownerDocument, o = e.target.selected.flatMap(
    (s) => Array.from(
      r.querySelectorAll(
        `:root > IED[name="${s.value}"] > AccessPoint > LN,:root > IED[name="${s.value}"] > AccessPoint > Server > LDevice > LN,:root > IED[name="${s.value}"] > AccessPoint > Server > LDevice > LN0`
      )
    ).filter((d) => !d.closest("Private"))
  ).filter((s) => s !== null).map((s) => {
    const d = Il[t.getAttribute("type") ? t.getAttribute("type") ?? "" : t.tagName ?? ""]?.includes(s.getAttribute("lnClass") ?? "") ?? !1, u = Ui(t.ownerDocument, s), p = u?.parentElement === t;
    return {
      selected: p,
      disabled: u !== null && !p,
      prefered: d,
      element: s
    };
  }).sort(Rr).map((s) => v`<mwc-check-list-item
      ?selected=${s.selected}
      ?disabled=${s.disabled}
      value="${z(s.element)}"
      twoline
      ><span
        >${s.element.getAttribute("prefix") ?? ""}${s.element.getAttribute("lnClass")}${s.element.getAttribute(
    "inst"
  ) ?? ""}
        ${s.disabled ? v` <mwc-icon style="--mdc-icon-size: 1em;"
                >account_tree</mwc-icon
              >
              ${Na(Ui(r, s.element))}` : ""}</span
      ><span slot="secondary"
        >${s.element.closest("IED")?.getAttribute("name") ?? ""} |
        ${s.element.closest("LDevice") ? s.element.closest("LDevice")?.getAttribute("inst") : Nl}</span
      ></mwc-check-list-item
    >`);
  ir(v`${o}`, i);
}
function Rl(e) {
  const t = e.ownerDocument;
  return t.querySelectorAll(":root > IED").length > 0 ? v`<filtered-list
      disableCheckAll
      multi
      id="iedList"
      @selected=${(i) => Pl(i, e)}
      >${Array.from(t.querySelectorAll(":root > IED")).map((i) => i.getAttribute("name")).map((i) => ({
    selected: Array.from(e.children).filter((r) => !r.closest("Private")).filter(
      (r) => r.tagName === "LNode" && r.getAttribute("iedName") === i
    ).length > 0,
    iedName: i
  })).sort(Rr).map(
    (i) => v`<mwc-check-list-item
              value="${i.iedName ?? ""}"
              ?selected=${i.selected}
              >${i.iedName}</mwc-check-list-item
            >`
  )}</filtered-list
    >` : v`<mwc-list-item noninteractive graphic="icon">
      <span>${l("lnode.wizard.placeholder")}</span>
      <mwc-icon slot="graphic">info</mwc-icon>
    </mwc-list-item>`;
}
function Ol(e) {
  return (t) => {
    t.dispatchEvent(U()), t.dispatchEvent(U(Pr(e)));
  };
}
function Or(e) {
  return [
    {
      title: l("lnode.wizard.title.selectIEDs"),
      menuActions: [
        {
          icon: "",
          label: l("lnode.wizard.instance"),
          action: Ol(e)
        }
      ],
      content: [Rl(e)]
    },
    {
      initial: Array.from(e.children).some(
        (t) => t.tagName === "LNode"
      ),
      title: l("lnode.wizard.title.selectLNs"),
      primary: {
        icon: "save",
        label: l("save"),
        action: Tl(e)
      },
      content: [v`<filtered-list multi id="lnList"></filtered-list>`]
    }
  ];
}
function Fl(e) {
  return e.tagName === "Function" || e.tagName === "SubFunction" || e.tagName === "EqFunction" || e.tagName === "EqSubFunction" ? Pr(e) : Or(e);
}
function ql(e) {
  const t = e.iedName !== "None";
  return [
    v`<wizard-textfield
      label="iedName"
      .maybeValue=${e.iedName}
      helper="${l("scl.iedName")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    v`<wizard-textfield
      label="ldInst"
      .maybeValue=${e.ldInst}
      helper="${l("scl.ldInst")}"
      helperPersistent
      nullable
      disabled
    ></wizard-textfield>`,
    v`<wizard-textfield
      label="prefix"
      .maybeValue=${e.prefix}
      helper="${l("scl.prefix")}"
      pattern="${we.asciName}"
      maxLength="11"
      helperPersistent
      nullable
      ?disabled=${t}
    ></wizard-textfield>`,
    v`<wizard-textfield
      label="lnClass"
      .maybeValue=${e.lnClass}
      helper="${l("scl.lnClass")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    v`<wizard-textfield
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
function Ml(e) {
  return (t) => {
    const i = {}, r = ["iedName", "ldInst", "prefix", "lnClass", "lnInst"];
    r.forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    let n = null;
    if (r.some((a) => i[a] !== e.getAttribute(a))) {
      const a = V(e, i);
      return n = {
        old: { element: e },
        new: { element: a }
      }, [n];
    }
    return [];
  };
}
function Hl(e) {
  const [t, i, r, n, a] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((s) => e.getAttribute(s)), o = X(
    e.parentElement,
    "LNode"
  ).filter(
    (s) => s !== e && s.getAttribute("lnClass") === e.getAttribute("lnClass")
  ).map((s) => s.getAttribute("lnInst"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "LNode" }),
      element: e,
      primary: {
        label: l("save"),
        icon: "save",
        action: Ml(e)
      },
      content: [
        ...ql({
          iedName: t,
          ldInst: i,
          prefix: r,
          lnClass: n,
          lnInst: a,
          reservedLnInst: o
        })
      ]
    }
  ];
}
function Bl(e) {
  return Object.entries(e).map(
    ([t, i]) => c`<wizard-checkbox
        label="${t}"
        .maybeValue=${i}
        nullable
        helper="${l(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function Gl(e) {
  return (t) => {
    const i = f(t.find((h) => h.label === "seqNum")), r = f(t.find((h) => h.label === "timeStamp")), n = f(t.find((h) => h.label === "dataSet")), a = f(t.find((h) => h.label === "reasonCode")), o = f(t.find((h) => h.label === "dataRef")), s = f(t.find((h) => h.label === "entryID")), d = f(t.find((h) => h.label === "configRef")), u = f(t.find((h) => h.label === "bufOvfl"));
    if (i === e.getAttribute("seqNum") && r === e.getAttribute("timeStamp") && n === e.getAttribute("dataSet") && a === e.getAttribute("reasonCode") && o === e.getAttribute("dataRef") && s === e.getAttribute("entryID") && d === e.getAttribute("configRef") && u === e.getAttribute("bufOvfl"))
      return [];
    const p = V(e, {
      seqNum: i,
      timeStamp: r,
      dataSet: n,
      reasonCode: a,
      dataRef: o,
      entryID: s,
      configRef: d,
      bufOvfl: u
    });
    return [{ old: { element: e }, new: { element: p } }];
  };
}
function Wl(e) {
  const [
    t,
    i,
    r,
    n,
    a,
    o,
    s,
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
        action: Gl(e)
      },
      content: Bl({
        seqNum: t,
        timeStamp: i,
        dataSet: r,
        reasonCode: n,
        dataRef: a,
        entryID: o,
        configRef: s,
        bufOvfl: d
      })
    }
  ];
}
let Ul = 1, Fr = 1, qr = 1;
function jl(e, t) {
  return t.parentElement?.querySelectorAll(
    `LN[lnClass="CSWI"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="CILO"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="XCBR"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="XSWI"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""}`
  ).forEach((i) => {
    e.appendChild(
      N(t.ownerDocument, "LNode", {
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
function Mr(e) {
  return e.parentElement?.querySelector(
    `LN[lnClass="XCBR"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""}`
  ) ? "CBR" : "DIS";
}
function Kl(e) {
  return e.getAttribute("prefix") && e.getAttribute("inst") ? e.getAttribute("prefix") + e.getAttribute("inst") : e.getAttribute("inst") && Mr(e) === "CBR" ? "QA" + Fr++ : "QB" + qr++;
}
function Zl(e, t) {
  if (Array.from(
    e.querySelectorAll('DOI[name="Pos"] > DAI[name="ctlModel"] > Val')
  ).filter((r) => t.includes(r.innerHTML.trim())).length)
    return !0;
  const i = e.ownerDocument;
  return Array.from(
    i.querySelectorAll(
      `DataTypeTemplates > LNodeType[id="${e.getAttribute(
        "lnType"
      )}"] > DO[name="Pos"]`
    )
  ).map((r) => r.getAttribute("type")).flatMap(
    (r) => Array.from(
      i.querySelectorAll(
        `DOType[id="${r}"] > DA[name="ctlModel"] > Val`
      )
    )
  ).filter((r) => t.includes(r.innerHTML.trim())).length > 0;
}
function Xl(e) {
  return Array.from(
    e.querySelectorAll('AccessPoint > Server > LDevice > LN[lnClass="CSWI"]')
  );
}
function Ql(e, t) {
  return e.parentElement ? Xl(e).filter((i) => Zl(i, t)) : [];
}
function Yl(e, t) {
  const i = Ql(e, t);
  if (Fr = 1, qr = 1, i.length) {
    const r = N(e.ownerDocument, "Bay", {
      name: "Q" + Ul++,
      desc: "Bay for controller " + e.getAttribute("name")
    });
    return i.map((a) => jl(
      N(e.ownerDocument, "ConductingEquipment", {
        name: Kl(a),
        type: Mr(a)
      }),
      a
    )).forEach((a) => r.appendChild(a)), r;
  }
  return null;
}
function Jl(e, t) {
  return (i, r, n) => {
    const a = [], o = n.selected.map(
      (u) => u.value
    ), s = N(e, "VoltageLevel", {
      name: "E1",
      desc: "guessed by OpenSCD",
      nomFreq: "50.0",
      numPhases: "3"
    }), d = N(e, "Voltage", {
      unit: "V",
      multiplier: "k"
    });
    return d.textContent = "110.00", s.appendChild(d), a.push({
      new: { parent: e.querySelector("SCL"), element: t }
    }), a.push({
      new: {
        parent: t,
        element: s
      }
    }), Array.from(e.querySelectorAll(":root > IED")).sort(xr).map((u) => Yl(u, o)).forEach((u) => {
      u && a.push({ new: { parent: s, element: u } });
    }), a;
  };
}
function es(e, t) {
  return [
    {
      title: l("guess.wizard.title"),
      primary: {
        icon: "play_arrow",
        label: l("guess.wizard.primary"),
        action: Jl(e, t)
      },
      content: [
        c`<p>${l("guess.wizard.description")}</p>`,
        c`<mwc-list multi id="ctlModelList"
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
const ts = {
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
}, is = {
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
}, ji = { en: is, de: ts };
async function rs(e) {
  return Object.keys(ji).includes(e) ? ji[e] : {};
}
Vn({ loader: rs, empty: (e) => e });
const Hr = localStorage.getItem("language") || "en";
console.log("SETTING LANGUAGE TO", Hr);
Fn(Hr);
function Br(e, t, i) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("substation.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${l("substation.wizard.descHelper")}"
    ></wizard-textfield>`,
    i ? c`<mwc-formfield label="${l("guess.wizard.primary")}">
          <mwc-checkbox></mwc-checkbox>
        </mwc-formfield>` : c``
  ];
}
function ns(e) {
  return (t, i) => {
    const r = f(t.find((s) => s.label === "name")), n = f(t.find((s) => s.label === "desc")), a = i.shadowRoot?.querySelector("mwc-checkbox")?.checked;
    e.ownerDocument.createElement("Substation");
    const o = N(e.ownerDocument, "Substation", {
      name: r,
      desc: n
    });
    return a ? [() => es(e.ownerDocument, o)] : [{ new: { parent: e, element: o } }];
  };
}
function as(e) {
  const t = e.ownerDocument.querySelector("Substation") === null && e.tagName === "SCL";
  return [
    {
      title: l("substation.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: l("add"),
        action: ns(e)
      },
      content: Br("", "", t)
    }
  ];
}
function os(e) {
  return [
    {
      title: l("substation.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: Nr(
          e,
          "substation.action.updatesubstation"
        )
      },
      content: Br(
        e.getAttribute("name") ?? "",
        e.getAttribute("desc"),
        !1
      )
    }
  ];
}
function ls(e, t, i, r) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("terminal.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${r}
      readonly
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="connectivityNode"
      .maybeValue=${t}
      helper="${l("terminal.wizard.connectivityNodeHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      readonly
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="cNodeName"
      .maybeValue=${i}
      helper="${l("terminal.wizard.cNodeNameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function ss(e) {
  const t = Array.from(
    e.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(ue).map((i) => i.getAttribute("name") ?? "").filter((i) => i !== e.getAttribute("name"));
  return [
    {
      title: l("terminal.wizard.title.edit"),
      element: e,
      content: ls(
        e.getAttribute("name"),
        e.getAttribute("connectivityNode"),
        e.getAttribute("cNodeName"),
        t
      )
    }
  ];
}
const xt = {
  nomFreq: "50",
  numPhases: "3",
  Voltage: "110",
  multiplier: "k"
};
function Gr(e, t, i, r, n, a) {
  return [
    v`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("voltagelevel.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    v`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${l("voltagelevel.wizard.descHelper")}"
    ></wizard-textfield>`,
    v`<wizard-textfield
      label="nomFreq"
      .maybeValue=${i}
      nullable
      helper="${l("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      required
      validationMessage="${l("textfield.nonempty")}"
      pattern="${at.unsigned}"
    ></wizard-textfield>`,
    v`<wizard-textfield
      label="numPhases"
      .maybeValue=${r}
      nullable
      helper="${l("voltagelevel.wizard.numPhaseHelper")}"
      suffix="#"
      required
      validationMessage="${l("textfield.nonempty")}"
      type="number"
      min="1"
      max="255"
    ></wizard-textfield>`,
    v`<wizard-textfield
      label="Voltage"
      .maybeValue=${n}
      nullable
      unit="V"
      .multipliers=${[null, "G", "M", "k", "", "m"]}
      .multiplier=${a}
      helper="${l("voltagelevel.wizard.voltageHelper")}"
      required
      validationMessage="${l("textfield.nonempty")}"
      pattern="${at.decimal}"
    ></wizard-textfield>`
  ];
}
function cs(e) {
  return (t) => {
    const i = f(t.find((u) => u.label === "name")), r = f(t.find((u) => u.label === "desc")), n = f(t.find((u) => u.label === "nomFreq")), a = f(t.find((u) => u.label === "numPhases")), o = f(t.find((u) => u.label === "Voltage")), s = pi(t.find((u) => u.label === "Voltage")), d = N(e.ownerDocument, "VoltageLevel", {
      name: i,
      desc: r,
      nomFreq: n,
      numPhases: a
    });
    if (o !== null) {
      const u = N(e.ownerDocument, "Voltage", {
        unit: "V",
        multiplier: s
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
function ds(e) {
  return [
    {
      title: l("voltagelevel.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: l("add"),
        action: cs(e)
      },
      content: Gr(
        "",
        "",
        xt.nomFreq,
        xt.numPhases,
        xt.Voltage,
        xt.multiplier
      )
    }
  ];
}
function us(e, t, i, r) {
  if (e === null) {
    const a = N(r.ownerDocument, "Voltage", {
      unit: "V",
      multiplier: i
    });
    return a.textContent = t, {
      new: {
        parent: r,
        element: a,
        reference: r.firstElementChild
      }
    };
  }
  if (t === null)
    return {
      old: {
        parent: r,
        element: e,
        reference: e.nextSibling
      }
    };
  const n = V(e, { multiplier: i });
  return n.textContent = t, {
    old: { element: e },
    new: { element: n }
  };
}
function ms(e) {
  return (t) => {
    const i = t.find((h) => h.label === "name").value, r = f(t.find((h) => h.label === "desc")), n = f(t.find((h) => h.label === "nomFreq")), a = f(t.find((h) => h.label === "numPhases")), o = f(t.find((h) => h.label === "Voltage")), s = pi(t.find((h) => h.label === "Voltage"));
    let d, u;
    if (i === e.getAttribute("name") && r === e.getAttribute("desc") && n === e.getAttribute("nomFreq") && a === e.getAttribute("numPhases"))
      d = null;
    else {
      const h = V(e, {
        name: i,
        desc: r,
        nomFreq: n,
        numPhases: a
      });
      d = { old: { element: e }, new: { element: h } };
    }
    o === (e.querySelector("VoltageLevel > Voltage")?.textContent?.trim() ?? null) && s === (e.querySelector("VoltageLevel > Voltage")?.getAttribute("multiplier") ?? null) ? u = null : u = us(
      e.querySelector("VoltageLevel > Voltage"),
      o,
      s,
      d?.new.element ?? e
    );
    const p = {
      actions: [],
      title: l("voltagelevel.action.updateVoltagelevel", { name: i })
    };
    return d && p.actions.push(d), u && p.actions.push(u), p.actions.push(
      ...fi(e, e.getAttribute("name"), i)
    ), p.actions.length ? [p] : [];
  };
}
function ps(e) {
  return [
    {
      title: l("voltagelevel.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: ms(e)
      },
      content: Gr(
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
const Wr = "PTR";
function hs(e) {
  return (t) => {
    const i = f(t.find((o) => o.label === "name")), r = f(t.find((o) => o.label === "desc")), n = N(e.ownerDocument, "PowerTransformer", {
      name: i,
      desc: r,
      type: Wr
    });
    return [{
      new: {
        parent: e,
        element: n
      }
    }];
  };
}
function Ur(e, t, i, r) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("powertransformer.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${r}
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${l("powertransformer.wizard.descHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="type"
      .maybeValue=${i}
      disabled
      helper="${l("powertransformer.wizard.typeHelper")}"
    ></wizard-textfield>`
  ];
}
function jr(e, t) {
  return Array.from(e.querySelectorAll("PowerTransformer")).filter(ue).map((i) => i.getAttribute("name") ?? "").filter((i) => t && i !== t);
}
function fs(e) {
  const t = jr(e);
  return [
    {
      title: l("powertransformer.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: l("add"),
        action: hs(e)
      },
      content: Ur(
        "",
        null,
        Wr,
        t
      )
    }
  ];
}
function bs(e) {
  const t = jr(
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
        action: Ir(e)
      },
      content: Ur(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        e.getAttribute("type"),
        t
      )
    }
  ];
}
function gs(e) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${l("subnetwork.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${l("subnetwork.wizard.descHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      nullable
      helper="${l("subnetwork.wizard.typeHelper")}"
      pattern="${at.normalizedString}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="BitRate"
      .maybeValue=${e.BitRate}
      nullable
      unit="b/s"
      .multipliers=${[null, "M"]}
      .multiplier=${e.multiplier}
      helper="${l("subnetwork.wizard.bitrateHelper")}"
      required
      validationMessage="${l("textfield.nonempty")}"
      pattern="${at.decimal}"
    ></wizard-textfield>`
  ];
}
function ys(e, t, i, r) {
  if (e === null) {
    const a = N(r.ownerDocument, "BitRate", {
      unit: "b/s"
    });
    return i && a.setAttribute("multiplier", i), t && (a.textContent = t), {
      new: {
        parent: r,
        element: a,
        reference: r.firstElementChild
      }
    };
  }
  if (t === null)
    return {
      old: {
        parent: r,
        element: e,
        reference: e.nextSibling
      }
    };
  const n = V(e, { multiplier: i });
  return n.textContent = t, {
    old: { element: e },
    new: { element: n }
  };
}
function vs(e) {
  return (t) => {
    const i = t.find((p) => p.label === "name").value, r = f(t.find((p) => p.label === "desc")), n = f(t.find((p) => p.label === "type")), a = f(t.find((p) => p.label === "BitRate")), o = pi(t.find((p) => p.label === "BitRate"));
    let s, d;
    if (i === e.getAttribute("name") && r === e.getAttribute("desc") && n === e.getAttribute("type"))
      s = null;
    else {
      const p = V(e, { name: i, desc: r, type: n });
      s = { old: { element: e }, new: { element: p } };
    }
    a === (e.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null) && o === (e.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null) ? d = null : d = ys(
      e.querySelector("SubNetwork > BitRate"),
      a,
      o,
      s?.new.element ?? e
    );
    const u = [];
    return s && u.push(s), d && u.push(d), u;
  };
}
function Ss(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = e.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null, a = e.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null;
  return [
    {
      title: l("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: l("save"),
        action: vs(e)
      },
      content: gs({ name: t, desc: i, type: r, BitRate: n, multiplier: a })
    }
  ];
}
const xs = [
  "ldInst",
  "lnClass",
  "lnInst",
  "prefix",
  "doName",
  "daName"
];
function As(e) {
  return xs.map(
    (t) => e.getAttribute(t) ? `[${t}="${e.getAttribute(
      t
    )}"]` : ""
  ).join("");
}
const ws = ["srcLDInst", "srcLNClass", "srcLNInst", "srcCBName"];
function Cs(e) {
  return ws.map(
    (t) => e.getAttribute(t) ? `[${t}="${e.getAttribute(t)}"]` : ""
  ).join("");
}
function Es(e) {
  if (!e.length) return [];
  const t = [], i = {};
  for (const r of e) {
    const n = r.old.element, a = r.old.parent, o = z(a);
    i[o] || (i[o] = a.cloneNode(!0));
    const s = i[o].querySelector(
      `ExtRef${n.getAttribute("iedName") ? `[iedName="${n.getAttribute("iedName")}"]` : ""}${As(n)}${n.getAttribute("serviceType") ? `[serviceType="${n.getAttribute("serviceType")}"]` : ""}${Cs(n)}`
    );
    s && i[o].removeChild(s);
  }
  return Object.entries(i).forEach(([r, n]) => {
    if (n.children.length == 0) {
      const a = e[0].old.parent.ownerDocument, o = Ae(a, "Inputs", r);
      o && o.parentElement && t.push({
        old: { parent: o.parentElement, element: o }
      });
    }
  }), t;
}
const ks = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function Ds(e, t, i, r, n, a, o, s, d) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("ied.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${d}
      pattern="${ks}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${l("ied.wizard.descHelper")}"
      pattern="${we.normalizedString}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="type"
      .maybeValue=${i || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="manufacturer"
      .maybeValue=${r || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="configVersion"
      .maybeValue=${n || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="originalSclVersion"
      .maybeValue=${a || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="engRight"
      .maybeValue=${o || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="owner"
      .maybeValue=${s || "-"}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function Is(e) {
  return [
    c` <section>
      <h1>${l("ied.wizard.title.references")}</h1>
      <mwc-list>
        ${e.map((t) => {
      const i = t.old.element;
      return c` <mwc-list-item noninteractive twoline>
            <span>${i.tagName}</span>
            <span slot="secondary"
              >${z(t.old.element)}</span
            >
          </mwc-list-item>`;
    })}
      </mwc-list>
    </section>`
  ];
}
function Ns(e) {
  return (e.getAttribute("originalSclVersion") ?? "").concat(e.getAttribute("originalSclRevision") ?? "").concat(e.getAttribute("originalSclRelease") ?? "");
}
function $s(e) {
  return Array.from(e.parentNode.querySelectorAll("IED")).filter(ue).map((t) => t.getAttribute("name") ?? "").filter((t) => t !== e.getAttribute("name"));
}
function _s(e) {
  return (t, i) => {
    i.dispatchEvent(U());
    const r = Dr(e), n = r.filter(
      (d) => d.old.element.tagName === "ExtRef"
    ), a = Es(n), o = e.getAttribute("name") ?? "Unknown", s = {
      actions: [],
      title: l("ied.action.deleteied", { name: o })
    };
    return s.actions.push({
      old: { parent: e.parentElement, element: e }
    }), s.actions.push(...r), s.actions.push(...a), [s];
  };
}
function Kr(e) {
  const t = Dr(e);
  return t.length > 0 ? [
    {
      title: l("ied.wizard.title.delete"),
      content: Is(t),
      primary: {
        icon: "delete",
        label: l("remove"),
        action: _s(e)
      }
    }
  ] : null;
}
function Ls(e) {
  function t(i) {
    return (r) => {
      const n = Kr(i);
      n && r.dispatchEvent(Ue(() => n)), r.dispatchEvent(
        Nt({ old: { parent: i.parentElement, element: i } })
      ), r.dispatchEvent(U());
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
        action: Nr(
          e,
          "ied.action.updateied"
        )
      },
      content: Ds(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        e.getAttribute("type"),
        e.getAttribute("manufacturer"),
        e.getAttribute("configVersion"),
        Ns(e),
        e.getAttribute("engRight"),
        e.getAttribute("owner"),
        $s(e)
      )
    }
  ];
}
const zs = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function Ts(e, t, i, r) {
  return [
    t ? c`<wizard-textfield
          label="ldName"
          .maybeValue=${e}
          helper="${l("ldevice.wizard.noNameSupportHelper")}"
          helperPersistent
          readOnly
          disabled
        ></wizard-textfield>` : c`<wizard-textfield
          label="ldName"
          .maybeValue=${e}
          nullable
          helper="${l("ldevice.wizard.nameHelper")}"
          validationMessage="${l("textfield.required")}"
          dialogInitialFocus
          pattern="${zs}"
        ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${i}
      nullable
      helper="${l("ldevice.wizard.descHelper")}"
      pattern="${we.normalizedString}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="ldInst"
      .maybeValue=${r}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function Vs(e) {
  return !!e.closest("IED")?.querySelector("Services > ConfLdName");
}
function Ps(e) {
  return (t) => {
    const i = {}, r = ["ldName", "desc"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some((n) => i[n] !== e.getAttribute(n))) {
      const n = V(e, i);
      return [
        {
          old: { element: e },
          new: { element: n }
        }
      ];
    }
    return [];
  };
}
function Rs(e) {
  return [
    {
      title: l("ldevice.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: Ps(e)
      },
      content: Ts(
        e.getAttribute("ldName"),
        !Vs(e),
        e.getAttribute("desc"),
        e.getAttribute("inst")
      )
    }
  ];
}
function Os(e) {
  return Object.entries(e).map(
    ([t, i]) => c`<wizard-checkbox
        label="${t}"
        .maybeValue=${i}
        nullable
        helper="${l(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function Fs(e) {
  return (t) => {
    const i = f(t.find((u) => u.label === "dchg")), r = f(t.find((u) => u.label === "qchg")), n = f(t.find((u) => u.label === "dupd")), a = f(t.find((u) => u.label === "period")), o = f(t.find((u) => u.label === "gi"));
    if (i === e.getAttribute("dchg") && r === e.getAttribute("qchg") && n === e.getAttribute("dupd") && a === e.getAttribute("period") && o === e.getAttribute("gi"))
      return [];
    const s = V(e, {
      dchg: i,
      qchg: r,
      dupd: n,
      period: a,
      gi: o
    });
    return [{ old: { element: e }, new: { element: s } }];
  };
}
function qs(e) {
  const [t, i, r, n, a] = [
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
        action: Fs(e)
      },
      content: Os({ dchg: t, qchg: i, dupd: r, period: n, gi: a })
    }
  ];
}
const Ms = [
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
], Hs = [
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
], Bs = ["Spec", "Conf", "RO", "Set"], Gs = ["SmpPerPeriod", "SmpPerSec", "SecPerSmp"], Zr = [
  "None",
  "Signature",
  "SignatureAndEncryption"
];
function Ws(e, t, i) {
  if (!e.target || !e.target.parentElement) return;
  const r = e.target.selected?.value;
  if (e.target.parentElement.querySelector(
    'wizard-select[label="bType"]'
  ).value !== "Enum") return;
  const a = Array.from(
    t.querySelectorAll(`EnumType[id="${r}"] > EnumVal`)
  ).map(
    (s) => v`<mwc-list-item
        value="${s.textContent?.trim() ?? ""}"
        ?selected=${s.textContent?.trim() === i}
        >${s.textContent?.trim()}</mwc-list-item
      >`
  ), o = e.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  ir(v`${a}`, o), o.requestUpdate();
}
function Us(e, t, i) {
  const r = e.target.selected.value, n = e.target.parentElement.querySelector(
    'wizard-select[label="type"]'
  );
  n.disabled = !(r === "Enum" || r === "Struct");
  const a = [];
  Array.from(n.children).forEach((d) => {
    const u = d;
    u.disabled = !d.classList.contains(r), u.noninteractive = !d.classList.contains(r), u.style.display = d.classList.contains(r) ? "" : "none", u.disabled || a.push(u);
  }), n.value = a.length ? a[0].value : "";
  const o = e.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  r === "Enum" ? o.style.display = "" : o.style.display = "none";
  const s = e.target.parentElement.querySelector(
    'wizard-textfield[label="Val"]'
  );
  r === "Enum" || r === "Struct" ? s.style.display = "none" : s.style.display = "", o.requestUpdate(), s.requestUpdate(), n.requestUpdate();
}
function js(e, t, i, r, n, a, o, s, d, u) {
  return [
    v`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("scl.name")}"
      required
      pattern="${we.abstractDataAttributeName}"
      maxLength="${bi.abstracDaName}"
      dialogInitialFocus
    >
      ></wizard-textfield
    >`,
    v`<wizard-textfield
      label="desc"
      helper="${l("scl.desc")}"
      .maybeValue=${t}
      nullable
      pattern="${we.normalizedString}"
    ></wizard-textfield>`,
    v`<wizard-select
      fixedMenuPosition
      label="bType"
      .value=${i}
      helper="${l("scl.bType")}"
      required
      @selected=${(p) => Us(p)}
      >${Hs.map(
      (p) => v`<mwc-list-item value="${p}"
            >${p}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    v`<wizard-select
      label="type"
      .maybeValue=${n}
      helper="${l("scl.type")}"
      fixedMenuPosition
      @selected=${(p) => Ws(p, u, d)}
      >${r.map(
      (p) => v`<mwc-list-item
            class="${p.tagName === "EnumType" ? "Enum" : "Struct"}"
            value=${p.id}
            >${p.id}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    v`<wizard-textfield
      label="sAddr"
      .maybeValue=${a}
      helper="${l("scl.sAddr")}"
      nullable
      pattern="${we.normalizedString}"
    ></wizard-textfield>`,
    v`<wizard-select
      label="valKind"
      .maybeValue=${o}
      helper="${l("scl.valKind")}"
      nullable
      required
      fixedMenuPosition
      >${Bs.map(
      (p) => v`<mwc-list-item value="${p}"
            >${p}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    v`<wizard-checkbox
      label="valImport"
      .maybeValue=${s}
      helper="${l("scl.valImport")}"
      nullable
      required
    ></wizard-checkbox>`,
    v`<wizard-select
      label="Val"
      .maybeValue=${d}
      helper="${l("scl.Val")}"
      nullable
      >${Array.from(
      u.querySelectorAll(`EnumType > EnumVal[id="${n}"]`)
    ).map(
      (p) => v`<mwc-list-item value="${p.textContent?.trim() ?? ""}"
            >${p.textContent?.trim()}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    v`<wizard-textfield
      label="Val"
      .maybeValue=${d}
      helper="${l("scl.Val")}"
      nullable
    ></wizard-textfield>`
  ];
}
function Ks(e, t, i, r) {
  return [
    v`<wizard-select
      label="fc"
      .maybeValue=${e}
      helper="${l("scl.fc")}"
      required
      fixedMenuPosition
      >${Ms.map(
      (n) => v`<mwc-list-item value="${n}">${n}</mwc-list-item>`
    )}</wizard-select
    >`,
    v`<wizard-checkbox
      label="dchg"
      .maybeValue=${t}
      helper="${l("scl.dchg")}"
      nullable
    ></wizard-checkbox>`,
    v`<wizard-checkbox
      label="qchg"
      .maybeValue=${i}
      helper="${l("scl.qchg")}"
      nullable
    ></wizard-checkbox>`,
    v`<wizard-checkbox
      label="dupd"
      .maybeValue=${r}
      helper="${l("scl.dupd")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function Zs(e) {
  return (t) => {
    const i = f(t.find((C) => C.label === "name")), r = f(t.find((C) => C.label === "desc")), n = f(t.find((C) => C.label === "bType")), a = n === "Enum" || n === "Struct" ? f(t.find((C) => C.label === "type")) : null, o = f(t.find((C) => C.label === "sAddr")), s = f(t.find((C) => C.label === "valKind")), d = f(t.find((C) => C.label === "valImport")), u = t.find(
      (C) => C.label === "Val" && C.style.display !== "none"
    ), p = u ? f(u) : null, h = f(t.find((C) => C.label === "fc")) ?? "", y = f(t.find((C) => C.label === "dchg")), S = f(t.find((C) => C.label === "qchg")), w = f(t.find((C) => C.label === "dupd")), D = [], P = N(e.ownerDocument, "DA", {
      name: i,
      desc: r,
      bType: n,
      type: a,
      sAddr: o,
      valKind: s,
      valImport: d,
      fc: h,
      dchg: y,
      qchg: S,
      dupd: w
    });
    if (p !== null) {
      const C = N(e.ownerDocument, "Val", {});
      C.textContent = p, P.appendChild(C);
    }
    return D.push({
      new: {
        parent: e,
        element: P
      }
    }), D;
  };
}
function Xs(e) {
  const t = e.ownerDocument, i = "", r = null, n = "", a = null, o = null, s = null, d = null, u = null, p = "", h = null, y = null, S = null, w = Array.from(t.querySelectorAll("DAType, EnumType")).filter(ue).filter((P) => P.getAttribute("id")), D = e.closest("DataTypeTemplates");
  return [
    {
      title: l("da.wizard.title.edit"),
      primary: {
        icon: "",
        label: l("save"),
        action: Zs(e)
      },
      content: [
        ...js(
          i,
          r,
          n,
          w,
          a,
          o,
          d,
          u,
          s,
          D
        ),
        ...Ks(p, h, y, S)
      ]
    }
  ];
}
const le = (e, t) => e === null ? "" : t;
function Qe() {
  return {
    BOOLEAN: e(),
    Enum: t(),
    FLOAT32: i("FLOAT32", -4294967296, 2 ** 32 - 1),
    FLOAT64: i("FLOAT64", -18446744073709552e3, 2 ** 64 - 1),
    INT8: r("INT8", -256, 2 ** 8 - 1),
    INT16: r("INT16", -65536, 2 ** 16 - 1),
    INT24: r("INT24", -16777216, 2 ** 24 - 1),
    INT32: r("INT32", -4294967296, 2 ** 32 - 1),
    INT64: r("INT64", -18446744073709552e3, 2 ** 64 - 1),
    INT128: r("INT128", -3402823669209385e23, 2 ** 128 - 1),
    INT8U: r("INT8U", 0, 2 ** 8 - 1),
    INT16U: r("INT16U", 0, 2 ** 16 - 1),
    INT24U: r("INT24U", 0, 2 ** 24 - 1),
    INT32U: r("INT32U", 0, 2 ** 32 - 1),
    Timestamp: n(),
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
      render: (d, u, p = null) => (p ? [...Array(p)] : [p]).map((h, y) => v`<wizard-select
            id="Val${le(h, `${y + 1}`)}"
            label="Val${le(h, ` for sGroup ${y + 1}`)}"
            .maybeValue=${o(u)}
            fixedMenuPosition
          >
            <mwc-list-item value="true">true</mwc-list-item>
            <mwc-list-item value="false">false</mwc-list-item>
          </wizard-select>`),
      value: (d, u) => f(
        d.find((p) => p.id === `Val${u || ""}`)
      )
    };
  }
  function t() {
    return {
      render: (d, u, p = null) => (p ? [...Array(p)] : [p]).map((h, y) => v`<wizard-select
            id="Val${le(h, `${y + 1}`)}"
            label="Val${le(h, ` for sGroup ${y + 1}`)}"
            .maybeValue=${o(u)}
            fixedMenuPosition
          >
            ${s(d).map((S) => v`<mwc-list-item value="${S}"
                >${S}</mwc-list-item
              >`)}
          </wizard-select>`),
      value: (d, u) => f(
        d.find((p) => p.id === `Val${u || ""}`)
      )
    };
  }
  function i(d, u, p) {
    return {
      render: (h, y, S = null) => (S ? [...Array(S)] : [S]).map((w, D) => v`<wizard-textfield
            id="Val${le(w, `${D + 1}`)}"
            label="Val${le(w, ` for sGroup ${D + 1}`)}"
            .maybeValue=${o(y)}
            helper="${l("dai.wizard.valueHelper", { type: d })}"
            type="number"
            min=${u}
            max=${p}
            step="0.1"
          >
          </wizard-textfield>`),
      value: (h, y) => f(
        h.find((S) => S.id === `Val${y || ""}`)
      )
    };
  }
  function r(d, u, p) {
    return {
      render: (h, y, S = null) => (S ? [...Array(S)] : [S]).map((w, D) => v`<wizard-textfield
            id="Val${le(w, `${D + 1}`)}"
            label="Val${le(w, ` for sGroup ${D + 1}`)}"
            .maybeValue=${o(y)}
            helper="${l("dai.wizard.valueHelper", { type: d })}"
            type="number"
            min=${u}
            max=${p}
          >
          </wizard-textfield>`),
      value: (h, y) => f(
        h.find((S) => S.id === `Val${y || ""}`)
      )
    };
  }
  function n() {
    return {
      render: (d, u, p = null) => {
        const h = o(u);
        return (p ? [...Array(p)] : [p]).reduce(
          (y, S, w) => y.concat([
            v`<wizard-textfield
                id="ValDate${le(S, `${w + 1}`)}"
                label="Val (Date)${le(S, ` for sGroup ${w + 1}`)}"
                .maybeValue=${Qs(h)}
                type="date"
              >
              </wizard-textfield>`,
            v`<wizard-textfield
                id="ValTime${le(S, `${w + 1}`)}"
                label="Val (Time)${le(S, ` for sGroup ${w + 1}`)}"
                .maybeValue=${Ys(h)}
                type="time"
                step="1"
              >
              </wizard-textfield>`
          ]),
          []
        );
      },
      value: (d, u) => {
        const p = [`ValDate${u || ""}`, `ValTime${u || ""}`].map(
          (S) => f(d.find((w) => w.id === S))
        ), h = p[0] ? p[0] : "0000-00-00", y = p[1] ? p[1] : "00:00:00";
        return h + "T" + y + ".000";
      }
    };
  }
  function a(d, u) {
    return {
      render: (p, h, y = null) => (y ? [...Array(y)] : [y]).map((S, w) => v`<wizard-textfield
            id="Val${le(S, ` ${w + 1}`)}"
            label="Val${le(S, ` for sGroup ${w + 1}`)}"
            .maybeValue=${o(h)}
            helper="${l("dai.wizard.valueHelper", { type: d })}"
            maxLength=${u}
            type="text"
          >
          </wizard-textfield>`),
      value: (p, h) => f(
        p.find((y) => y.id === `Val${h || ""}`)
      )
    };
  }
  function o(d) {
    return (d?.querySelector("Val") ? d?.querySelector("Val") : d)?.textContent?.trim() ?? "";
  }
  function s(d) {
    const u = d.getAttribute("type"), p = [];
    return Array.from(
      d.ownerDocument.querySelectorAll(
        `EnumType[id="${u}"] > EnumVal`
      )
    ).filter(
      (h) => h.textContent && h.textContent !== ""
    ).sort(
      (h, y) => parseInt(h.getAttribute("ord") ?? "0") - parseInt(y.getAttribute("ord") ?? "0")
    ).forEach((h) => {
      p.push(h.textContent ?? "");
    }), p;
  }
}
function Qs(e) {
  let i = e.split("T")[0];
  return /^\d{4}-\d{2}-\d{2}$/.test(i) || (i = null), i === "0000-00-00" && (i = null), i;
}
function Ys(e) {
  const t = e.split("T");
  let i = null;
  return t.length == 2 && (i = t[1], i.length > 8 && (i = i.substring(0, 8)), /^\d{2}:\d{2}:\d{2}$/.test(i) || (i = null), i === "00:00:00" && (i = null)), i;
}
const Ze = "http://www.iec.ch/61850/2003/SCL";
function Js(e, t) {
  return (i) => {
    const r = e.getAttribute("bType"), n = Qe()[r].value(i), a = t.parentElement?.getAttribute("name") ?? "", o = {
      actions: [],
      title: l("dai.action.updatedai", { daiName: a })
    }, s = t.cloneNode(!1);
    return s.textContent = n, o.actions.push({
      old: { element: t },
      new: { element: s }
    }), [o];
  };
}
function ec(e, t, i, r, n) {
  return (a) => {
    const o = t.getAttribute("bType");
    if (n)
      Array.from(r.querySelectorAll("Val")).forEach(
        (u) => u.remove()
      ), [...Array(n)].forEach((u, p) => {
        const h = Qe()[o].value(
          a,
          p + 1
        ), y = e.ownerDocument.createElementNS(
          Ze,
          "Val"
        );
        y.textContent = h, y.setAttribute("sGroup", `${p + 1}`), r.append(y);
      });
    else {
      const u = Qe()[o].value(a);
      let p = r.querySelector("Val");
      p || (p = e.ownerDocument.createElementNS(Ze, "Val"), r.append(p)), p.textContent = u;
    }
    const s = r.getAttribute("name");
    return [{
      actions: [{ new: { parent: e, element: i } }],
      title: l("dai.action.createdai", { daiName: s })
    }];
  };
}
function Xr(e, t, i = null) {
  const r = e.getAttribute("bType"), n = e.querySelector("Val")?.textContent?.trim() ?? "";
  return [
    c` ${Qe()[r].render(
      e,
      t,
      i
    )}
    ${n ? c`<wizard-textfield
          id="daVal"
          label="DA Template Value"
          .maybeValue=${n}
          readonly
          disabled
        >
        </wizard-textfield>` : q}`
  ];
}
function tc(e, t) {
  let i = t;
  t.tagName === "BDA" && (i = t.getRootNode().querySelector(
    `DOType>DA[type="${t.parentElement.id}"]`
  ));
  const r = i.getAttribute("fc") ?? "", o = e.closest("IED")?.querySelector("SettingControl")?.getAttribute("numOfSGs") ?? "", s = parseInt(o);
  return (r === "SG" || r === "SE") && o !== "" && !isNaN(s) ? s : void 0;
}
function ic(e, t, i) {
  const r = tc(e, i), n = t.tagName === "DAI" ? t : t.querySelector("DAI");
  return [
    {
      title: l("dai.wizard.title.create", {
        daiName: n?.getAttribute("name") ?? ""
      }),
      element: n,
      primary: {
        icon: "edit",
        label: l("save"),
        action: ec(
          e,
          i,
          t,
          n,
          r
        )
      },
      content: Xr(
        i,
        n,
        r
      )
    }
  ];
}
function rc(e, t) {
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
        action: Js(e, t)
      },
      content: Xr(e, t)
    }
  ];
}
function nc(e) {
  return (t) => {
    t.dispatchEvent(Ue(() => Vr(e)));
  };
}
function ac(e) {
  return (t, i) => {
    const r = t.find((u) => u.label === "name").value, n = f(t.find((u) => u.label === "desc")), a = e.getAttribute("name"), o = [];
    if (!(r === a && n === e.getAttribute("desc"))) {
      const u = V(e, { name: r, desc: n });
      o.push({
        old: { element: e },
        new: { element: u }
      });
    }
    const s = r !== a ? Array.from(
      e.parentElement?.querySelectorAll(
        `ReportControlBock[datSet=${a}], GSEControl[datSet=${a}],SampledValueControl[datSet=${a}] `
      ) ?? []
    ).map((u) => {
      const p = V(u, { datSet: r });
      return { old: { element: u }, new: { element: p } };
    }) : [];
    return [
      ...Array.from(
        i.shadowRoot.querySelectorAll(
          "filtered-list > mwc-check-list-item:not([selected])"
        )
      ).map((u) => Ae(e, "FCDA", u.value)).filter((u) => u).map((u) => ({
        old: {
          parent: e,
          element: u,
          reference: u.nextSibling
        }
      })),
      ...o,
      ...s
    ];
  };
}
function Qr(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc");
  return [
    {
      title: l("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: l("save"),
        icon: "save",
        action: ac(e)
      },
      menuActions: [
        {
          icon: "add",
          label: l("dataset.fcda.add"),
          action: nc(e)
        }
      ],
      content: [
        c`<wizard-textfield
          label="name"
          .maybeValue=${t}
          helper="${l("scl.name")}"
          required
          disabled="true"
        >
        </wizard-textfield>`,
        c`<wizard-textfield
          label="desc"
          .maybeValue=${i}
          helper="${l("scl.desc")}"
          nullable
          required
        >
        </wizard-textfield>`,
        c`<filtered-list multi
          >${Array.from(e.querySelectorAll("FCDA")).map(
          (r) => c`<mwc-check-list-item selected value="${z(r)}"
                >${z(r).split(">").pop()}</mwc-check-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
const R = {
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
}, oc = {
  IP: R.IP,
  "IP-SUBNET": R.IP,
  "IP-GATEWAY": R.IP,
  "OSI-TSEL": R.OSI,
  "OSI-SSEL": R.OSI,
  "OSI-PSEL": R.OSI,
  "OSI-AP-Title": R.OSIAPi,
  "OSI-AP-Invoke": R.OSId,
  "OSI-AE-Qualifier": R.OSId,
  "OSI-AE-Invoke": R.OSId,
  "MAC-Address": R.MAC,
  APPID: R.APPID,
  "VLAN-ID": R.VLANid,
  "VLAN-PRIORITY": R.VLANp,
  "OSI-NSAP": R.OSI,
  "SNTP-Port": R.port,
  "MMS-Port": R.port,
  DNSName: "[^ ]*",
  "UDP-Port": R.port,
  "TCP-Port": R.port,
  "C37-118-IP-Port": "102[5-9]|10[3-9][0-9]|1[1-9][0-9][0-9]|[2-9][0-9]{3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]",
  IPv6: R.IPv6,
  "IPv6-SUBNET": R.IPv6sub,
  "IPv6-GATEWAY": R.IPv6,
  IPv6FlowLabel: "[0-9a-fA-F]{1,5}",
  IPv6ClassOfTraffic: "[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]",
  "IPv6-IGMPv3Src": R.IPv6,
  "IP-IGMPv3Sr": R.IP,
  "IP-ClassOfTraffic": R.OSI
}, lc = {
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
function Yr(e) {
  return [
    v`<mwc-formfield label="${l("connectedap.wizard.addschemainsttype")}">
      <mwc-checkbox
        id="instType"
        ?checked="${e.hasInstType}"
      ></mwc-checkbox>
    </mwc-formfield>`,
    v`${Object.entries(e.attributes).map(
      ([t, i]) => v`<wizard-textfield
          label="${t}"
          ?nullable=${lc[t]}
          .maybeValue=${i}
          pattern="${pe(oc[t])}"
          required
        ></wizard-textfield>`
    )}`
  ];
}
function sc(e, t) {
  return e.querySelectorAll("P").length !== t.querySelectorAll("P").length ? !1 : Array.from(e.querySelectorAll("P")).filter(
    (i) => !t.querySelector(`Address > P[type="${i.getAttribute("type")}"]`)?.isEqualNode(i)
  ).length === 0;
}
function cc(e, t, i) {
  const r = N(t.ownerDocument, "Address", {});
  return Object.entries(e).filter(([n, a]) => a !== null).forEach(([n, a]) => {
    const o = n, s = N(t.ownerDocument, "P", { type: o });
    i && s.setAttributeNS(
      "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:type",
      "tP_" + n
    ), s.textContent = a, r.appendChild(s);
  }), r;
}
function Jr(e, t, i) {
  const r = [], n = cc(t, e, i), a = e.querySelector("Address");
  return a !== null && !sc(a, n) ? (r.push({
    old: {
      parent: e,
      element: a,
      reference: a.nextSibling
    }
  }), r.push({
    new: {
      parent: e,
      element: n,
      reference: a.nextSibling
    }
  })) : a === null && r.push({
    new: {
      parent: e,
      element: n
    }
  }), r;
}
function Ki(e, t, i, r) {
  if (t === null) {
    const a = N(r.ownerDocument, e, {
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
        element: t,
        reference: t.nextSibling
      }
    };
  const n = t.cloneNode(!1);
  return n.textContent = i, {
    old: { element: t },
    new: { element: n }
  };
}
function dc(e) {
  return (t, i) => {
    const r = {
      actions: [],
      title: l("gse.action.addaddress", {
        identity: z(e)
      })
    }, n = i.shadowRoot?.querySelector("#instType")?.checked ?? !1, a = {};
    a["MAC-Address"] = f(
      t.find((u) => u.label === "MAC-Address")
    ), a.APPID = f(t.find((u) => u.label === "APPID")), a["VLAN-ID"] = f(
      t.find((u) => u.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = f(
      t.find((u) => u.label === "VLAN-PRIORITY")
    ), Jr(e, a, n).forEach((u) => {
      r.actions.push(u);
    });
    const s = f(t.find((u) => u.label === "MinTime")), d = f(t.find((u) => u.label === "MaxTime"));
    return s !== (e.querySelector("MinTime")?.textContent?.trim() ?? null) && r.actions.push(
      Ki(
        "MinTime",
        e.querySelector("MinTime"),
        s,
        e
      )
    ), d !== (e.querySelector("MaxTime")?.textContent?.trim() ?? null) && r.actions.push(
      Ki(
        "MaxTime",
        e.querySelector("MaxTime"),
        d,
        e
      )
    ), [r];
  };
}
function uc(e) {
  const t = e.querySelector("MinTime")?.innerHTML.trim() ?? null, i = e.querySelector("MaxTime")?.innerHTML.trim() ?? null, r = Array.from(e.querySelectorAll("Address > P")).some(
    (a) => a.getAttribute("xsi:type")
  ), n = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((a) => {
    n[a] || (n[a] = e.querySelector(`Address > P[type="${a}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: l("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: l("save"),
        icon: "save",
        action: dc(e)
      },
      content: [
        ...Yr({ hasInstType: r, attributes: n }),
        c`<wizard-textfield
          label="MinTime"
          .maybeValue=${t}
          nullable
          suffix="ms"
          type="number"
        ></wizard-textfield>`,
        c`<wizard-textfield
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
function en(e) {
  const t = e.getAttribute("name"), i = e.closest("IED")?.getAttribute("name"), r = e.closest("AccessPoint")?.getAttribute("name"), n = e.closest("LDevice")?.getAttribute("inst");
  return e.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${r}"] > GSE[ldInst="${n}"][cbName="${t}"]`
  );
}
function mc(e) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      pattern="${we.asciName}"
      maxLength="${bi.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    c`<wizard-select
      label="type"
      .maybeValue=${e.type}
      helper="${l("scl.type")}"
      nullable
      required
      >${["GOOSE", "GSSE"].map(
      (t) => c`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`,
    c`<wizard-textfield
      label="appID"
      .maybeValue=${e.appID}
      helper="${l("scl.id")}"
      required
      validationMessage="${l("textfield.nonempty")}"
    ></wizard-textfield>`,
    c`<wizard-checkbox
      label="fixedOffs"
      .maybeValue=${e.fixedOffs}
      nullable
      helper="${l("scl.fixedOffs")}"
    ></wizard-checkbox>`,
    c`<wizard-select
      label="securityEnabled"
      .maybeValue=${e.securityEnabled}
      nullable
      required
      helper="${l("scl.securityEnable")}"
      >${Zr.map(
      (t) => c`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function pc(e) {
  if (!e.parentElement) return null;
  const t = e.parentElement.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), i = en(e), r = Array.from(
    e.parentElement?.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    ) ?? []
  ).filter(
    (s) => s.getAttribute("datSet") === t?.getAttribute("name")
  ).length <= 1, n = [];
  n.push({
    old: {
      parent: e.parentElement,
      element: e,
      reference: e.nextSibling
    }
  }), t && r && n.push({
    old: {
      parent: e.parentElement,
      element: t,
      reference: t.nextSibling
    }
  }), i && n.push({
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
    actions: n
  };
}
function hc(e) {
  return (t) => {
    const i = pc(e);
    i && t.dispatchEvent(Nt(i)), t.dispatchEvent(U());
  };
}
function fc(e) {
  return (t) => {
    t.dispatchEvent(Ue(() => Qr(e)));
  };
}
function bc(e) {
  return (t) => {
    t.dispatchEvent(Ue(() => uc(e)));
  };
}
function gc(e) {
  return (t) => {
    const i = t.find((u) => u.label === "name").value, r = f(t.find((u) => u.label === "desc")), n = f(t.find((u) => u.label === "type")), a = f(t.find((u) => u.label === "appID")), o = f(t.find((u) => u.label === "fixedOffs")), s = f(
      t.find((u) => u.label === "securityEnabled")
    );
    if (i === e.getAttribute("name") && r === e.getAttribute("desc") && n === e.getAttribute("type") && a === e.getAttribute("appID") && o === e.getAttribute("fixedOffs") && s === e.getAttribute("securityEnabled"))
      return [];
    const d = V(e, {
      name: i,
      desc: r,
      type: n,
      appID: a,
      fixedOffs: o,
      securityEnabled: s
    });
    return [{ old: { element: e }, new: { element: d } }];
  };
}
function yc(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = e.getAttribute("appID"), a = e.getAttribute("fixedOffs"), o = e.getAttribute("securityEnabled"), s = en(e), d = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), u = [];
  return u.push({
    icon: "delete",
    label: l("remove"),
    action: hc(e)
  }), d && u.push({
    icon: "edit",
    label: l("scl.DataSet"),
    action: fc(d)
  }), s && u.push({
    icon: "edit",
    label: l("scl.Communication"),
    action: bc(s)
  }), [
    {
      title: l("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: l("save"),
        action: gc(e)
      },
      menuActions: u,
      content: [
        ...mc({
          name: t,
          desc: i,
          type: r,
          appID: n,
          fixedOffs: a,
          securityEnabled: o
        })
      ]
    }
  ];
}
function Ve(e) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      helper="${l("scl.type")}"
      nullable
    ></wizard-textfield>`
  ];
}
function vc(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "type"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some((n) => i[n] !== e.getAttribute(n))) {
      const n = V(e, i);
      return [
        {
          old: { element: e },
          new: { element: n }
        }
      ];
    }
    return [];
  };
}
function Sc(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = X(
    e.parentElement,
    "Function"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: vc(e)
      },
      content: [
        ...Ve({
          name: t,
          desc: i,
          type: r,
          reservedNames: n
        })
      ]
    }
  ];
}
function xc(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    const n = N(
      e.ownerDocument,
      "Function",
      i
    );
    return [{ new: { parent: e, element: n } }];
  };
}
function Ac(e) {
  const t = "", n = Array.from(e.querySelectorAll("Function")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: l("wizard.title.add", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: xc(e)
      },
      content: [
        ...Ve({
          name: t,
          desc: null,
          type: null,
          reservedNames: n
        })
      ]
    }
  ];
}
function wc(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "type"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some((n) => i[n] !== e.getAttribute(n))) {
      const n = V(e, i);
      return [
        {
          old: { element: e },
          new: { element: n }
        }
      ];
    }
    return [];
  };
}
function Cc(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = X(
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
        action: wc(e)
      },
      content: [
        ...Ve({
          name: t,
          desc: i,
          type: r,
          reservedNames: n
        })
      ]
    }
  ];
}
function Ec(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    const n = N(
      e.ownerDocument,
      "EqSubFunction",
      i
    );
    return [{ new: { parent: e, element: n } }];
  };
}
function kc(e) {
  const t = "", n = Array.from(
    e.querySelectorAll("EqSubFunction")
  ).map((a) => a.getAttribute("name"));
  return [
    {
      title: l("wizard.title.add", { tagName: "EqSubFunction" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Ec(e)
      },
      content: [
        ...Ve({
          name: t,
          desc: null,
          type: null,
          reservedNames: n
        })
      ]
    }
  ];
}
function Dc(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "type"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some((n) => i[n] !== e.getAttribute(n))) {
      const n = V(e, i);
      return [
        {
          old: { element: e },
          new: { element: n }
        }
      ];
    }
    return [];
  };
}
function Ic(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = X(
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
        action: Dc(e)
      },
      content: [
        ...Ve({
          name: t,
          desc: i,
          type: r,
          reservedNames: n
        })
      ]
    }
  ];
}
function Nc(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    const n = N(
      e.ownerDocument,
      "EqFunction",
      i
    );
    return [{ new: { parent: e, element: n } }];
  };
}
function $c(e) {
  const t = "", n = Array.from(e.querySelectorAll("EqFunction")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: l("wizard.title.add", { tagName: "EqFunction" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Nc(e)
      },
      content: [
        ...Ve({
          name: t,
          desc: null,
          type: null,
          reservedNames: n
        })
      ]
    }
  ];
}
function _c(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "type"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some(
      (n) => i[n] !== e.getAttribute(n)
    )) {
      const n = V(e, i);
      return [
        {
          old: { element: e },
          new: { element: n }
        }
      ];
    }
    return [];
  };
}
function Lc(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = X(
    e.parentElement,
    "SubFunction"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: _c(e)
      },
      content: [
        ...Ve({
          name: t,
          desc: i,
          type: r,
          reservedNames: n
        })
      ]
    }
  ];
}
function zc(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    const n = N(
      e.ownerDocument,
      "SubFunction",
      i
    );
    return [{ new: { parent: e, element: n } }];
  };
}
function Tc(e) {
  const t = "", n = Array.from(e.querySelectorAll("SubFunction")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: l("wizard.title.add", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: zc(e)
      },
      content: [
        ...Ve({
          name: t,
          desc: null,
          type: null,
          reservedNames: n
        })
      ]
    }
  ];
}
function Vc(e) {
  return (t, i) => {
    const r = {
      actions: [],
      title: l("smv.action.addaddress", {
        identity: z(e)
      })
    }, n = i.shadowRoot?.querySelector("#instType")?.checked, a = {};
    a["MAC-Address"] = f(
      t.find((s) => s.label === "MAC-Address")
    ), a.APPID = f(t.find((s) => s.label === "APPID")), a["VLAN-ID"] = f(
      t.find((s) => s.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = f(
      t.find((s) => s.label === "VLAN-PRIORITY")
    );
    const o = Jr(e, a, n);
    return o.length ? (o.forEach((s) => {
      r.actions.push(s);
    }), [r]) : [];
  };
}
function Pc(e) {
  const t = Array.from(e.querySelectorAll("Address > P")).some(
    (r) => r.getAttribute("xsi:type")
  ), i = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((r) => {
    i[r] || (i[r] = e.querySelector(`Address > P[type="${r}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: l("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: l("save"),
        icon: "edit",
        action: Vc(e)
      },
      content: [...Yr({ hasInstType: t, attributes: i })]
    }
  ];
}
function Rc(e) {
  return Object.entries(e).map(
    ([t, i]) => c`<wizard-checkbox
        label="${t}"
        .maybeValue=${i}
        nullable
        helper="${l(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function Oc(e) {
  return (t) => {
    const i = {}, r = [
      "refreshTime",
      "sampleRate",
      "dataSet",
      "security",
      "synchSourceId"
    ];
    if (r.forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    }), !r.some((a) => i[a] !== e.getAttribute(a)))
      return [];
    const n = V(e, i);
    return [{ old: { element: e }, new: { element: n } }];
  };
}
function Fc(e) {
  const [t, i, r, n, a] = [
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
        action: Oc(e)
      },
      content: [
        ...Rc({
          refreshTime: t,
          sampleRate: i,
          dataSet: r,
          security: n,
          synchSourceId: a
        })
      ]
    }
  ];
}
function tn(e) {
  const t = e.getAttribute("name"), i = e.closest("IED")?.getAttribute("name"), r = e.closest("AccessPoint")?.getAttribute("name"), n = e.closest("LDevice")?.getAttribute("inst");
  return e.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${r}"] > SMV[ldInst="${n}"][cbName="${t}"]`
  ) ?? null;
}
function qc(e) {
  if (!e.parentElement) return null;
  const t = e.parentElement.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), i = tn(e), r = Array.from(
    e.parentElement.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    )
  ).filter(
    (s) => s.getAttribute("datSet") === t?.getAttribute("name")
  ).length <= 1, n = [];
  n.push({
    old: {
      parent: e.parentElement,
      element: e
    }
  }), t && r && n.push({
    old: {
      parent: e.parentElement,
      element: t
    }
  }), i && n.push({
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
    actions: n
  };
}
function Mc(e) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      pattern="${we.asciName}"
      maxLength="${bi.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      pattern="${we.normalizedString}"
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    e.multicast === "true" ? c`` : c`<wizard-checkbox
          label="multicast"
          .maybeValue=${e.multicast}
          helper="${l("scl.multicast")}"
          disabled
        ></wizard-checkbox>`,
    c`<wizard-textfield
      label="smvID"
      .maybeValue=${e.smvID}
      helper="${l("scl.id")}"
      required
      validationMessage="${l("textfield.nonempty")}"
    ></wizard-textfield>`,
    c`<wizard-select
      label="smpMod"
      .maybeValue=${e.smpMod}
      nullable
      required
      helper="${l("scl.smpMod")}"
      >${Gs.map(
      (t) => c`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`,
    c`<wizard-textfield
      label="smpRate"
      .maybeValue=${e.smpRate}
      helper="${l("scl.smpRate")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="nofASDU"
      .maybeValue=${e.nofASDU}
      helper="${l("scl.nofASDU")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    c`<wizard-select
      label="securityEnabled"
      .maybeValue=${e.securityEnabled}
      nullable
      required
      helper="${l("scl.securityEnable")}"
      >${Zr.map(
      (t) => c`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function Hc(e) {
  return (t) => {
    const i = qc(e);
    i && t.dispatchEvent(Nt(i)), t.dispatchEvent(U());
  };
}
function Bc(e) {
  return (t) => {
    t.dispatchEvent(Ue(() => Qr(e)));
  };
}
function Gc(e) {
  return (t) => {
    t.dispatchEvent(Ue(() => Fc(e)));
  };
}
function Wc(e) {
  return (t) => {
    t.dispatchEvent(Ue(() => Pc(e)));
  };
}
function Uc(e) {
  return (t) => {
    const i = {}, r = [
      "name",
      "desc",
      "multicast",
      "smvID",
      "smpMod",
      "smpRate",
      "nofASDU",
      "securityEnabled"
    ];
    r.forEach((o) => {
      if (o === "multicast" && !t.find((d) => d.label === o)) {
        i.multicast = "true";
        return;
      }
      i[o] = f(t.find((d) => d.label === o));
    });
    let n = null;
    if (r.some((o) => i[o] !== e.getAttribute(o))) {
      const o = V(e, i);
      n = {
        old: { element: e },
        new: { element: o }
      };
    }
    const a = [];
    return n && a.push(n), a;
  };
}
function jc(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("multicast"), n = e.getAttribute("smvID"), a = e.getAttribute("smpMod"), o = e.getAttribute("smpRate"), s = e.getAttribute("nofASDU"), d = e.getAttribute("securityEnabled"), u = tn(e), p = e.querySelector("SmvOpts"), h = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), y = [];
  return y.push({
    icon: "delete",
    label: l("remove"),
    action: Hc(e)
  }), h && y.push({
    icon: "edit",
    label: l("scl.DataSet"),
    action: Bc(h)
  }), p && y.push({
    icon: "edit",
    label: l("scl.SmvOpts"),
    action: Gc(p)
  }), u && y.push({
    icon: "edit",
    label: l("scl.Communication"),
    action: Wc(u)
  }), [
    {
      title: l("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: l("save"),
        action: Uc(e)
      },
      menuActions: y,
      content: [
        ...Mc({
          name: t,
          desc: i,
          multicast: r,
          smvID: n,
          smpMod: a,
          smpRate: o,
          nofASDU: s,
          securityEnabled: d
        })
      ]
    }
  ];
}
function rn(e) {
  return [
    v`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      .reservedValues=${e.reservedNames}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    v`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    v`<wizard-select
      label="phase"
      fixedMenuPosition
      .maybeValue=${e.phase}
      nullable
      helper="${l("scl.phase")}"
    >
      ${["A", "B", "C", "N", "all", "none", "AB", "BC", "CA"].map(
      (t) => v`<mwc-list-item value="${t}">
            ${t.charAt(0).toUpperCase() + t.slice(1)}
          </mwc-list-item>`
    )}
    </wizard-select> `,
    v`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      nullable
      helper="${l("scl.virtual")}"
    ></wizard-checkbox>`
  ];
}
function Kc(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "phase", "virtual"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some(
      (n) => i[n] !== e.getAttribute(n)
    )) {
      const n = V(e, i);
      return [
        {
          old: { element: e },
          new: { element: n }
        }
      ];
    }
    return [];
  };
}
function Zc(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("phase"), n = e.getAttribute("virtual"), a = X(
    e.parentElement,
    "SubEquipment"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Kc(e)
      },
      content: [
        ...rn({
          name: t,
          desc: i,
          phase: r,
          virtual: n,
          reservedNames: a
        })
      ]
    }
  ];
}
function Xc(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "phase", "virtual"].forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    const n = N(
      e.ownerDocument,
      "SubEquipment",
      i
    );
    return [{ new: { parent: e, element: n } }];
  };
}
function Qc(e) {
  const t = "", a = Array.from(e.querySelectorAll("SubEquipment")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: l("wizard.title.add", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Xc(e)
      },
      content: [
        ...rn({
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
function Yc(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = e.getAttribute("virtual"), a = X(
    e.parentElement,
    "GeneralEquipment"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Jc(e)
      },
      content: [
        ...nn({
          name: t,
          desc: i,
          type: r,
          virtual: n,
          reservedNames: a
        })
      ]
    }
  ];
}
function Jc(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "type", "virtual"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some(
      (n) => i[n] !== e.getAttribute(n)
    )) {
      const n = V(e, i);
      return [
        {
          old: { element: e },
          new: { element: n }
        }
      ];
    }
    return [];
  };
}
function nn(e) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      helper="${l("scl.type")}"
      minLength="${3}"
      pattern="AXN|BAT|MOT|FAN|FIL|PMP|TNK|VLV|E[A-Z]*"
      required
    ></wizard-textfield>`,
    c`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${l("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function ed(e) {
  const t = "", a = Array.from(
    e.querySelectorAll("GeneralEquipment")
  ).map((o) => o.getAttribute("name"));
  return [
    {
      title: l("wizard.title.add", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: td(e)
      },
      content: [
        ...nn({
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
function td(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    const n = N(
      e.ownerDocument,
      "GeneralEquipment",
      i
    );
    return [{ new: { parent: e, element: n } }];
  };
}
function id(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = f(
        t.find((o) => o.label === a)
      );
    });
    const n = N(
      e.ownerDocument,
      "TransformerWinding",
      i
    );
    return [{ new: { parent: e, element: n } }];
  };
}
function rd(e) {
  const t = "", a = Array.from(
    e.querySelectorAll("TransformerWinding")
  ).map((o) => o.getAttribute("name"));
  return [
    {
      title: l("wizard.title.add", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: id(e)
      },
      content: [
        ...an({
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
function nd(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "type", "virtual"];
    if (r.forEach((n) => {
      i[n] = f(
        t.find((a) => a.label === n)
      );
    }), r.some(
      (n) => i[n] !== e.getAttribute(n)
    )) {
      const n = V(e, i);
      return [
        {
          old: { element: e },
          new: { element: n }
        }
      ];
    }
    return [];
  };
}
function an(e) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      disabled
      helper="${l("scl.type")}"
    ></wizard-textfield>`,
    c`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${l("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function ad(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = e.getAttribute("virtual"), a = X(
    e.parentElement,
    "TransformerWinding"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: nd(e)
      },
      content: [
        ...an({
          name: t,
          desc: i,
          type: r,
          virtual: n,
          reservedNames: a
        })
      ]
    }
  ];
}
function od(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    const n = N(
      e.ownerDocument,
      "TapChanger",
      i
    );
    return [{ new: { parent: e, element: n } }];
  };
}
function ld(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "type", "virtual"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some(
      (n) => i[n] !== e.getAttribute(n)
    )) {
      const n = V(e, i);
      return [
        {
          old: { element: e },
          new: { element: n }
        }
      ];
    }
    return [];
  };
}
function on(e) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      disabled
      helper="${l("scl.type")}"
    ></wizard-textfield>`,
    c`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${l("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function sd(e) {
  const t = "", r = "LTC", a = Array.from(e.querySelectorAll("TapChanger")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: l("wizard.title.add", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: od(e)
      },
      content: [
        ...on({
          name: t,
          desc: null,
          type: r,
          virtual: null,
          reservedNames: a
        })
      ]
    }
  ];
}
function cd(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = e.getAttribute("virtual"), a = X(
    e.parentElement,
    "TapChanger"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: ld(e)
      },
      content: [
        ...on({
          name: t,
          desc: i,
          type: r,
          virtual: n,
          reservedNames: a
        })
      ]
    }
  ];
}
function ln(e, t, i, r, n) {
  return [
    v`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${l("line.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    v`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${l("line.wizard.descHelper")}"
    ></wizard-textfield>`,
    v`<wizard-textfield
      label="type"
      .maybeValue=${i}
      nullable
      helper="${l("line.wizard.typeHelper")}"
    ></wizard-textfield>`,
    v`<wizard-textfield
      label="nomFreq"
      .maybeValue=${r}
      nullable
      helper="${l("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      validationMessage="${l("textfield.nonempty")}"
      pattern="${at.unsigned}"
    ></wizard-textfield>`,
    v`<wizard-textfield
      label="numPhases"
      .maybeValue=${n}
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
function dd(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "nomFreq", "numPhases"].forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    const n = N(e.ownerDocument, "Line", i);
    return [{ new: { parent: e, element: n } }];
  };
}
function ud(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "type", "nomFreq", "numPhases"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some((n) => i[n] !== e.getAttribute(n))) {
      const n = V(e, i);
      return [
        {
          old: { element: e },
          new: { element: n }
        }
      ];
    }
    return [];
  };
}
function md(e) {
  return [
    {
      title: l("wizard.title.add", { tagName: "Line" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: dd(e)
      },
      content: [...ln("", "", "", "", "")]
    }
  ];
}
function pd(e) {
  return [
    {
      title: l("line.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: ud(e)
      },
      content: ln(
        e.getAttribute("name") ?? "",
        e.getAttribute("desc"),
        e.getAttribute("type"),
        e.getAttribute("nomFreq"),
        e.getAttribute("numPhases")
      )
    }
  ];
}
function hd(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    const n = N(e.ownerDocument, "Process", i);
    return [{ new: { parent: e, element: n } }];
  };
}
function fd(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "type"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some(
      (n) => i[n] !== e.getAttribute(n)
    )) {
      const n = V(e, i);
      return [
        {
          old: { element: e },
          new: { element: n }
        }
      ];
    }
    return [];
  };
}
function sn(e) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      nullable
      helper="${l("scl.type")}"
    ></wizard-textfield>`
  ];
}
function bd(e) {
  const t = "", i = "", r = "", n = X(
    e.parentElement,
    "Process"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: l("wizard.title.add", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: hd(e)
      },
      content: [
        ...sn({
          name: t,
          desc: i,
          type: r,
          reservedNames: n
        })
      ]
    }
  ];
}
function gd(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = X(
    e.parentElement,
    "Process"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: fd(e)
      },
      content: [
        ...sn({
          name: t,
          desc: i,
          type: r,
          reservedNames: n
        })
      ]
    }
  ];
}
function yd(e, t, i, r, n) {
  return [
    c`<wizard-textfield
      label="lnType"
      .maybeValue=${e}
      readonly
      required
      helper="${l("ln.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${l("ln.wizard.descHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="prefix"
      nullable
      readonly
      .maybeValue=${i}
      helper="${l("ln.wizard.prefixHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${r}
      helper="${l("ln.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="inst"
      .maybeValue=${n}
      readonly
      helper="${l("ln.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function vd(e) {
  return (t) => {
    const i = {}, r = ["lnType", "desc", "prefix", "lnClass", "inst"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some((n) => i[n] !== e.getAttribute(n))) {
      const n = V(e, i);
      return [
        {
          old: { element: e },
          new: { element: n }
        }
      ];
    }
    return [];
  };
}
function Sd(e) {
  return [
    {
      title: l("ln.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: vd(e)
      },
      content: yd(
        e.getAttribute("lnType"),
        e.getAttribute("desc"),
        e.getAttribute("prefix"),
        e.getAttribute("lnClass"),
        e.getAttribute("inst")
      )
    }
  ];
}
function xd(e, t, i, r) {
  return [
    c`<wizard-textfield
      label="lnType"
      .maybeValue=${e}
      readonly
      required
      helper="${l("ln0.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${l("ln0.wizard.descHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${i}
      helper="${l("ln0.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="inst"
      .maybeValue=${r}
      readonly
      helper="${l("ln0.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function Ad(e) {
  return (t) => {
    const i = {}, r = ["lnType", "desc", "lnClass", "inst"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some((n) => i[n] !== e.getAttribute(n))) {
      const n = V(e, i);
      return [
        {
          old: { element: e },
          new: { element: n }
        }
      ];
    }
    return [];
  };
}
function wd(e) {
  return [
    {
      title: l("ln0.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: Ad(e)
      },
      content: xd(
        e.getAttribute("lnType"),
        e.getAttribute("desc"),
        e.getAttribute("lnClass"),
        e.getAttribute("inst")
      )
    }
  ];
}
function m() {
}
const $t = {
  AccessControl: {
    edit: m,
    create: m
  },
  AccessPoint: {
    edit: m,
    create: m
  },
  Address: {
    edit: m,
    create: m
  },
  Association: {
    edit: m,
    create: m
  },
  Authentication: {
    edit: m,
    create: m
  },
  BDA: {
    edit: m,
    create: m
  },
  BitRate: {
    edit: m,
    create: m
  },
  Bay: {
    edit: al,
    create: nl
  },
  ClientLN: {
    edit: m,
    create: m
  },
  ClientServices: {
    edit: m,
    create: m
  },
  CommProt: {
    edit: m,
    create: m
  },
  Communication: {
    edit: m,
    create: m
  },
  ConductingEquipment: {
    edit: fl,
    create: hl
  },
  ConfDataSet: {
    edit: m,
    create: m
  },
  ConfLdName: {
    edit: m,
    create: m
  },
  ConfLNs: {
    edit: m,
    create: m
  },
  ConfLogControl: {
    edit: m,
    create: m
  },
  ConfReportControl: {
    edit: m,
    create: m
  },
  ConfSG: {
    edit: m,
    create: m
  },
  ConfSigRef: {
    edit: m,
    create: m
  },
  ConnectedAP: {
    edit: m,
    create: m
  },
  ConnectivityNode: {
    edit: gl,
    create: m
  },
  DA: {
    edit: Xs,
    create: m
  },
  DAI: {
    edit: rc,
    create: m
  },
  DAType: {
    edit: m,
    create: m
  },
  DO: {
    edit: m,
    create: m
  },
  DOI: {
    edit: m,
    create: m
  },
  DOType: {
    edit: m,
    create: m
  },
  DataObjectDirectory: {
    edit: m,
    create: m
  },
  DataSet: {
    edit: m,
    create: m
  },
  DataSetDirectory: {
    edit: m,
    create: m
  },
  DataTypeTemplates: {
    edit: m,
    create: m
  },
  DynAssociation: {
    edit: m,
    create: m
  },
  DynDataSet: {
    edit: m,
    create: m
  },
  EnumType: {
    edit: m,
    create: m
  },
  EnumVal: {
    edit: m,
    create: m
  },
  EqFunction: {
    edit: Ic,
    create: $c
  },
  EqSubFunction: {
    edit: Cc,
    create: kc
  },
  ExtRef: {
    edit: m,
    create: m
  },
  FCDA: {
    edit: m,
    create: Vr
  },
  FileHandling: {
    edit: m,
    create: m
  },
  Function: {
    edit: Sc,
    create: Ac
  },
  GeneralEquipment: {
    edit: Yc,
    create: ed
  },
  GetCBValues: {
    edit: m,
    create: m
  },
  GetDataObjectDefinition: {
    edit: m,
    create: m
  },
  GetDataSetValue: {
    edit: m,
    create: m
  },
  GetDirectory: {
    edit: m,
    create: m
  },
  GOOSE: {
    edit: m,
    create: m
  },
  GOOSESecurity: {
    edit: m,
    create: m
  },
  GSE: {
    edit: m,
    create: m
  },
  GSEDir: {
    edit: m,
    create: m
  },
  GSEControl: {
    edit: yc,
    create: m
  },
  GSESettings: {
    edit: m,
    create: m
  },
  GSSE: {
    edit: m,
    create: m
  },
  Header: {
    edit: m,
    create: m
  },
  History: {
    edit: m,
    create: m
  },
  Hitem: {
    edit: m,
    create: m
  },
  IED: {
    edit: Ls,
    create: m
  },
  IEDName: {
    edit: m,
    create: m
  },
  Inputs: {
    edit: m,
    create: m
  },
  IssuerName: {
    edit: m,
    create: m
  },
  KDC: {
    edit: m,
    create: m
  },
  LDevice: {
    edit: Rs,
    create: m
  },
  LN: {
    edit: Sd,
    create: m
  },
  LN0: {
    edit: wd,
    create: m
  },
  LNode: {
    edit: Hl,
    create: Fl
  },
  LNodeType: {
    edit: m,
    create: m
  },
  Line: {
    edit: pd,
    create: md
  },
  Log: {
    edit: m,
    create: m
  },
  LogControl: {
    edit: m,
    create: m
  },
  LogSettings: {
    edit: m,
    create: m
  },
  MaxTime: {
    edit: m,
    create: m
  },
  McSecurity: {
    edit: m,
    create: m
  },
  MinTime: {
    edit: m,
    create: m
  },
  NeutralPoint: {
    edit: m,
    create: m
  },
  OptFields: {
    edit: Wl,
    create: m
  },
  P: {
    edit: m,
    create: m
  },
  PhysConn: {
    edit: m,
    create: m
  },
  PowerTransformer: {
    edit: bs,
    create: fs
  },
  Private: {
    edit: m,
    create: m
  },
  Process: {
    edit: gd,
    create: bd
  },
  ProtNs: {
    edit: m,
    create: m
  },
  Protocol: {
    edit: m,
    create: m
  },
  ReadWrite: {
    edit: m,
    create: m
  },
  RedProt: {
    edit: m,
    create: m
  },
  ReportControl: {
    edit: m,
    create: m
  },
  ReportSettings: {
    edit: m,
    create: m
  },
  RptEnabled: {
    edit: m,
    create: m
  },
  SamplesPerSec: {
    edit: m,
    create: m
  },
  SampledValueControl: {
    edit: jc,
    create: m
  },
  SecPerSamples: {
    edit: m,
    create: m
  },
  SCL: {
    edit: m,
    create: m
  },
  SDI: {
    edit: m,
    create: m
  },
  SDO: {
    edit: m,
    create: m
  },
  Server: {
    edit: m,
    create: m
  },
  ServerAt: {
    edit: m,
    create: m
  },
  Services: {
    edit: m,
    create: m
  },
  SetDataSetValue: {
    edit: m,
    create: m
  },
  SettingControl: {
    edit: m,
    create: m
  },
  SettingGroups: {
    edit: m,
    create: m
  },
  SGEdit: {
    edit: m,
    create: m
  },
  SmpRate: {
    edit: m,
    create: m
  },
  SMV: {
    edit: m,
    create: m
  },
  SmvOpts: {
    edit: m,
    create: m
  },
  SMVsc: {
    edit: m,
    create: m
  },
  SMVSecurity: {
    edit: m,
    create: m
  },
  SMVSettings: {
    edit: m,
    create: m
  },
  SubEquipment: {
    edit: Zc,
    create: Qc
  },
  SubFunction: {
    edit: Lc,
    create: Tc
  },
  SubNetwork: {
    edit: Ss,
    create: m
  },
  Subject: {
    edit: m,
    create: m
  },
  Substation: {
    edit: os,
    create: as
  },
  SupSubscription: {
    edit: m,
    create: m
  },
  TapChanger: {
    edit: cd,
    create: sd
  },
  Terminal: {
    edit: ss,
    create: m
  },
  Text: {
    edit: m,
    create: m
  },
  TimerActivatedControl: {
    edit: m,
    create: m
  },
  TimeSyncProt: {
    edit: m,
    create: m
  },
  TransformerWinding: {
    edit: ad,
    create: rd
  },
  TrgOps: {
    edit: qs,
    create: m
  },
  Val: {
    edit: m,
    create: m
  },
  ValueHandling: {
    edit: m,
    create: m
  },
  Voltage: {
    edit: m,
    create: m
  },
  VoltageLevel: {
    edit: ps,
    create: ds
  }
};
var Cd = Object.defineProperty, mt = (e, t, i, r) => {
  for (var n = void 0, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = o(t, i, n) || n);
  return n && Cd(t, i, n), n;
};
class be extends Le {
  constructor() {
    super(), this.editCount = -1, this.ancestors = [], this.addEventListener("focus", (t) => {
      t.stopPropagation();
      const i = this.ancestors.map(
        (r) => Mt(r)
      );
      i.push(Mt(this.element)), this.dispatchEvent(Zi(i));
    }), this.addEventListener("blur", () => {
      this.dispatchEvent(
        Zi(
          this.ancestors.map((t) => Mt(t))
        )
      );
    });
  }
}
mt([
  b()
], be.prototype, "doc");
mt([
  b({ type: Number })
], be.prototype, "editCount");
mt([
  b({ attribute: !1 })
], be.prototype, "element");
mt([
  b()
], be.prototype, "nsdoc");
mt([
  b()
], be.prototype, "ancestors");
function xe(e, t) {
  return e.find((i) => i.tagName === t) ?? null;
}
function cn(e) {
  let t = xe(e, "LN0");
  return t || (t = xe(e, "LN")), t;
}
function yi(e) {
  if (e && e.hasAttribute("type")) {
    const t = e.getAttribute("type");
    return e.closest("SCL").querySelector(`:root > DataTypeTemplates > DOType[id="${t}"]`);
  }
  return null;
}
function dn(e, t) {
  if (e) {
    const i = M(t);
    return t.getAttribute("bType") == "Struct" ? e.querySelector(`:scope > SDI[name="${i}"]`) : e.querySelector(`:scope > DAI[name="${i}"]`);
  }
  return null;
}
function Mt(e) {
  switch (e.tagName) {
    case "LN":
    case "LN0":
      return e.getAttribute("lnClass");
    case "LDevice":
      return M(e) ?? He(e);
    case "Server":
      return "Server";
    default:
      return e.getAttribute("name");
  }
}
function ii(e) {
  return Array.from(e.querySelectorAll("Val"));
}
function Zi(e, t) {
  return new CustomEvent("full-element-path", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { elementNames: e, ...t?.detail }
  });
}
function Xi(e) {
  return ii(e).length !== 0 ? `${ii(e).map((i) => i.textContent ?? "").join(", ")}` : "-";
}
function Ed(e, t, i, r) {
  const n = xe(i, "IED"), a = xe(i, "AccessPoint"), o = xe(i, "LDevice"), s = cn(i), d = xe(i, "DO"), u = yi(d);
  return [
    c`
      <mwc-textarea
        label="${l("iededitor.wizard.nsdocDescription")}"
        value="${r.getDataDescription(e, i).label}"
        rows="3"
        cols="50"
        id="nsdocDescription"
        readonly
        disabled
      >
      </mwc-textarea>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.daName")}"
        value="${M(e) ?? "-"}"
        id="daName"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.daiDescription")}"
        value="${t ? Te(t) ?? "-" : "-"}"
        id="daiDescription"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.daFc")}"
        value="${e.getAttribute("fc") ?? "-"}"
        id="daFc"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.daBType")}"
        value="${e.getAttribute("bType") ?? "-"}"
        id="daBType"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.daValue")}"
        value="${Xi(t || e)}"
        id="daValue"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c` <br /> `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.doName")}"
        value="${d ? M(d) ?? "-" : "-"}"
        id="doName"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.doCdc")}"
        value="${u?.getAttribute("cdc") ?? "-"}"
        id="doCdc"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c` <br /> `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.lnPrefix")}"
        value="${s ? s.getAttribute("prefix") ?? "-" : "-"}"
        id="lnPrefix"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("scl.lnClass")}"
        value="${s ? r.getDataDescription(s, i).label : "-"}"
        id="lnPrefix"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.lnInst")}"
        value="${s ? He(s) ?? "-" : "-"}"
        id="lnInst"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c` <br /> `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.lDevice")}"
        value="${o ? M(o) ?? He(o) ?? "-" : "-"}"
        id="lDevice"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.accessPoint")}"
        value="${a ? M(a) ?? "-" : "-"}"
        id="accessPoint"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.ied")}"
        value="${n ? M(n) ?? "-" : "-"}"
        id="ied"
        readonly
        disabled
      >
      </mwc-textfield>
    `
  ];
}
function kd(e, t, i, r) {
  return [
    {
      title: l("iededitor.wizard.daTitle"),
      content: [...Ed(e, t, i, r)]
    }
  ];
}
function un(e, t) {
  const i = t.shift();
  if (t.length > 0) {
    let r;
    return i.tagName === "DO" ? r = e.querySelector(
      `DOI[name="${i.getAttribute("name")}"]`
    ) : r = e.querySelector(
      `SDI[name="${i.getAttribute("name")}"]`
    ), r ? un(
      r,
      t
    ) : (t.unshift(i), [e, t]);
  } else
    return [e, [i]];
}
function mn(e) {
  const t = e.shift();
  if (e.length > 0) {
    let i;
    t.tagName === "DO" ? i = t.ownerDocument.createElementNS(Ze, "DOI") : i = t.ownerDocument.createElementNS(Ze, "SDI"), i.setAttribute("name", t?.getAttribute("name") ?? "");
    const r = mn(e);
    return i.append(r), i;
  } else {
    const i = t.ownerDocument.createElementNS(
      Ze,
      "Val"
    ), r = t.querySelector("Val");
    r && (i.textContent = r.textContent);
    const n = t.ownerDocument.createElementNS(
      Ze,
      "DAI"
    );
    return n.setAttribute("name", t?.getAttribute("name") ?? ""), n.append(i), n;
  }
}
var Dd = Object.defineProperty, Id = Object.getOwnPropertyDescriptor, vi = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Id(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && Dd(t, i, n), n;
};
let ot = class extends be {
  header() {
    const e = M(this.element), t = this.element.getAttribute("bType") ?? q, i = this.element.getAttribute("fc");
    return this.instanceElement ? c`<b>${e}</b> &mdash; ${t}${i ? c` [${i}]` : ""}` : c`${e} &mdash; ${t}${i ? c` [${i}]` : ""}`;
  }
  /**
   * Get the nested (B)DA element(s) if available.
   * @returns The nested (B)DA element(s) of this (B)DA container.
   */
  getBDAElements() {
    const e = this.element.getAttribute("type") ?? void 0, t = this.element.closest("SCL").querySelector(
      `:root > DataTypeTemplates > DAType[id="${e}"]`
    );
    return t != null ? Array.from(t.querySelectorAll(":scope > BDA")) : [];
  }
  /**
   * Use the list of ancestor to retrieve the list from DO to the current (B)DA Element.
   * This structure is used to create the initialized structure from (DOI/SDI/DAI).
   *
   * @returns The list from the DO Element to the current (B)DA Element.
   */
  getTemplateStructure() {
    const e = this.ancestors.filter(
      (i) => i.tagName == "DO"
    )[0], t = this.ancestors.slice(
      this.ancestors.indexOf(e)
    );
    return t.push(this.element), t;
  }
  openCreateWizard() {
    const e = this.ancestors.filter(
      (a) => ["LN0", "LN"].includes(a.tagName)
    )[0], t = this.getTemplateStructure(), [i, r] = un(e, t), n = mn(r);
    if (n) {
      const a = ic(i, n, this.element);
      a && this.dispatchEvent(U(a));
    }
  }
  openEditWizard(e) {
    const t = $t.DAI.edit(this.element, e);
    t && this.dispatchEvent(U(t));
  }
  getValueDisplayString(e) {
    const t = e.getAttribute("sGroup"), i = t ? `SG${t}: ` : "", r = e.textContent?.trim();
    return `${i}${r}`;
  }
  renderVal() {
    const e = this.element.getAttribute("bType"), t = this.instanceElement ?? this.element;
    return !!this.instanceElement?.querySelector("Val") ? ii(t).map(
      (r) => c`<div style="display: flex; flex-direction: row;">
            <div style="display: flex; align-items: center; flex: auto;">
              <h4>${this.getValueDisplayString(r)}</h4>
            </div>
            <div style="display: flex; align-items: center;">
              <mwc-icon-button
                icon="edit"
                .disabled="${!Qe()[e]}"
                @click=${() => this.openEditWizard(r)}
              >
              </mwc-icon-button>
            </div>
          </div>`
    ) : [
      c`<div style="display: flex; flex-direction: row;">
            <div style="display: flex; align-items: center; flex: auto;">
              <h4></h4>
            </div>
            <div style="display: flex; align-items: center;">
              <mwc-icon-button
                icon="add"
                .disabled="${!Qe()[e]}"
                @click=${() => this.openCreateWizard()}
              >
              </mwc-icon-button>
            </div>
          </div>`
    ];
  }
  render() {
    const e = this.element.getAttribute("bType");
    return c`
      <action-pane
        .label="${this.header()}"
        icon="${this.instanceElement != null ? "done" : ""}"
      >
        <abbr slot="action">
          <mwc-icon-button
            title=${this.nsdoc.getDataDescription(this.element, this.ancestors).label}
            icon="info"
            @click=${() => this.dispatchEvent(
      U(
        kd(
          this.element,
          this.instanceElement,
          this.ancestors,
          this.nsdoc
        )
      )
    )}
          ></mwc-icon-button>
        </abbr>
        ${e === "Struct" ? c` <abbr
              slot="action"
              title="${l("iededitor.toggleChildElements")}"
            >
              <mwc-icon-button-toggle
                id="toggleButton"
                onIcon="keyboard_arrow_up"
                offIcon="keyboard_arrow_down"
                @click=${() => this.requestUpdate()}
              >
              </mwc-icon-button-toggle>
            </abbr>` : c`${this.renderVal()}`}
        ${this.toggleButton?.on && e === "Struct" ? this.getBDAElements().map(
      (t) => c`<da-container
                  .editCount=${this.editCount}
                  .doc=${this.doc}
                  .element=${t}
                  .instanceElement=${dn(
        this.instanceElement,
        t
      )}
                  .nsdoc=${this.nsdoc}
                  .ancestors=${[...this.ancestors, this.element]}
                >
                </da-container>`
    ) : q}
      </action-pane>
    `;
  }
};
ot.styles = re`
    h4 {
      color: var(--mdc-theme-on-surface);
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      margin: 0px;
      padding-left: 0.3em;
      word-break: break-word;
      white-space: pre-wrap;
    }

    mwc-icon-button {
      color: var(--mdc-theme-on-surface);
    }
  `;
vi([
  b({ attribute: !1 })
], ot.prototype, "instanceElement", 2);
vi([
  F("#toggleButton")
], ot.prototype, "toggleButton", 2);
ot = vi([
  G("da-container")
], ot);
function Nd(e, t, i, r) {
  const n = xe(i, "IED"), a = xe(i, "AccessPoint"), o = xe(i, "LDevice"), s = cn(i), d = yi(e);
  return [
    c`
      <mwc-textarea
        label="${l("iededitor.wizard.nsdocDescription")}"
        value="${r.getDataDescription(e, i).label}"
        rows="3"
        cols="50"
        id="nsdocDescription"
        readonly
        disabled
      >
      </mwc-textarea>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.doName")}"
        value="${M(e) ?? "-"}"
        id="doName"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.doiDescription")}"
        value="${t ? Te(t) ?? "-" : "-"}"
        id="doiDescription"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.doCdc")}"
        value="${d?.getAttribute("cdc") ?? "-"}"
        id="doCdc"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c` <br /> `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.lnPrefix")}"
        value="${s ? s.getAttribute("prefix") ?? "-" : "-"}"
        id="ln"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("scl.lnClass")}"
        value="${s ? r.getDataDescription(s, i).label : "-"}"
        id="lnPrefix"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.lnInst")}"
        value="${s ? He(s) ?? "-" : "-"}"
        id="lnInst"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c` <br /> `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.lDevice")}"
        value="${o ? M(o) ?? He(o) ?? "-" : "-"}"
        id="lDevice"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.accessPoint")}"
        value="${a ? M(a) ?? "-" : "-"}"
        id="accessPoint"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    c`
      <mwc-textfield
        label="${l("iededitor.wizard.ied")}"
        value="${n ? M(n) ?? "-" : "-"}"
        id="ied"
        readonly
        disabled
      >
      </mwc-textfield>
    `
  ];
}
function $d(e, t, i, r) {
  return [
    {
      title: l("iededitor.wizard.doTitle"),
      content: [...Nd(e, t, i, r)]
    }
  ];
}
var _d = Object.defineProperty, Ld = Object.getOwnPropertyDescriptor, Si = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Ld(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && _d(t, i, n), n;
};
let At = class extends be {
  header() {
    const e = M(this.element), t = Te(this.element);
    return this.instanceElement != null ? c`<b>${e}${t ? c` &mdash; ${t}` : q}</b>` : c`${e}${t ? c` &mdash; ${t}` : q}`;
  }
  /**
   * Get the nested SDO element(s).
   * @returns The nested SDO element(s) of this DO container.
   */
  getDOElements() {
    const e = yi(this.element);
    return e != null ? Array.from(e.querySelectorAll(":scope > SDO")) : [];
  }
  /**
   * Get the nested (B)DA element(s).
   * @returns The nested (B)DA element(s) of this DO container.
   */
  getDAElements() {
    const e = this.element.getAttribute("type") ?? void 0, t = this.element.closest("SCL").querySelector(`:root > DataTypeTemplates > DOType[id="${e}"]`);
    return t != null ? Array.from(t.querySelectorAll(":scope > DA")) : [];
  }
  /**
   * Get the instance element (SDI) of a (S)DO element (if available)
   * @param dO - The (S)DO object to search with.
   * @returns The optional SDI element.
   */
  getInstanceDOElement(e) {
    const t = M(e);
    return this.instanceElement ? this.instanceElement.querySelector(
      `:scope > SDI[name="${t}"]`
    ) : null;
  }
  render() {
    const e = this.getDAElements(), t = this.getDOElements();
    return c`<action-pane
      .label="${this.header()}"
      icon="${this.instanceElement != null ? "done" : ""}"
    >
      <abbr slot="action">
        <mwc-icon-button
          title=${this.nsdoc.getDataDescription(this.element).label}
          icon="info"
          @click=${() => this.dispatchEvent(
      U(
        $d(
          this.element,
          this.instanceElement,
          this.ancestors,
          this.nsdoc
        )
      )
    )}
        ></mwc-icon-button>
      </abbr>
      ${e.length > 0 || t.length > 0 ? c`<abbr
            slot="action"
            title="${l("iededitor.toggleChildElements")}"
          >
            <mwc-icon-button-toggle
              id="toggleButton"
              onIcon="keyboard_arrow_up"
              offIcon="keyboard_arrow_down"
              @click=${() => this.requestUpdate()}
            ></mwc-icon-button-toggle>
          </abbr>` : q}
      ${this.toggleButton?.on ? e.map(
      (i) => c`<da-container
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${i}
                .instanceElement=${dn(
        this.instanceElement,
        i
      )}
                .nsdoc=${this.nsdoc}
                .ancestors=${[...this.ancestors, this.element]}
              ></da-container>`
    ) : q}
      ${this.toggleButton?.on ? t.map(
      (i) => c`<do-container
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${i}
                .instanceElement=${this.getInstanceDOElement(i)}
                .nsdoc=${this.nsdoc}
                .ancestors=${[...this.ancestors, this.element]}
              ></do-container>`
    ) : q}
    </action-pane> `;
  }
};
Si([
  b({ attribute: !1 })
], At.prototype, "instanceElement", 2);
Si([
  F("#toggleButton")
], At.prototype, "toggleButton", 2);
At = Si([
  G("do-container")
], At);
var zd = Object.defineProperty, Td = Object.getOwnPropertyDescriptor, pn = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Td(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && zd(t, i, n), n;
};
let ri = class extends be {
  header() {
    const e = this.element.getAttribute("prefix"), t = He(this.element), i = this.element.getAttribute("desc"), r = this.nsdoc.getDataDescription(this.element);
    return c`${e != null ? c`${e} &mdash; ` : q}
    ${r.label} ${t ? c` &mdash; ${t}` : q}
    ${i ? c` &mdash; ${i}` : q}`;
  }
  /**
   * Get the DO child elements of this LN(0) section.
   * @returns The DO child elements, or an empty array if none are found.
   */
  getDOElements() {
    const e = this.element.getAttribute("lnType") ?? void 0, t = this.element.closest("SCL").querySelector(`:root > DataTypeTemplates > LNodeType[id="${e}"]`);
    return t != null ? Array.from(t.querySelectorAll(":scope > DO")) : [];
  }
  /**
   * Get the instance element (DOI) of a DO element (if available)
   * @param dO - The DO object to use.
   * @returns The optional DOI object.
   */
  getInstanceElement(e) {
    const t = M(e);
    return this.element.querySelector(`:scope > DOI[name="${t}"]`);
  }
  openEditWizard() {
    const e = this.element.tagName === "LN" ? "LN" : "LN0", t = $t[e].edit(this.element);
    t && this.dispatchEvent(U(t));
  }
  render() {
    const e = this.getDOElements();
    return c`<action-pane .label="${Cr(this.header())}">
      ${e.length > 0 ? c`<abbr slot="action">
          <mwc-icon-button
            slot="action"
            mini
            icon="edit"
            @click="${() => this.openEditWizard()}}"
          ></mwc-icon-button>
        </abbr>
        <abbr
            slot="action"
            title="${l("iededitor.toggleChildElements")}"
          >
            <mwc-icon-button-toggle
              id="toggleButton"
              onIcon="keyboard_arrow_up"
              offIcon="keyboard_arrow_down"
              @click=${() => this.requestUpdate()}
            ></mwc-icon-button-toggle>
          </abbr>` : q}
      ${this.toggleButton?.on ? e.map(
      (t) => c`<do-container
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${t}
              .instanceElement=${this.getInstanceElement(t)}
              .nsdoc=${this.nsdoc}
              .ancestors=${[...this.ancestors, this.element]}
            ></do-container> `
    ) : q}
    </action-pane>`;
  }
};
pn([
  F("#toggleButton")
], ri.prototype, "toggleButton", 2);
ri = pn([
  G("ln-container")
], ri);
var Vd = Object.defineProperty, Pd = Object.getOwnPropertyDescriptor, _t = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Pd(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && Vd(t, i, n), n;
};
let Ye = class extends be {
  constructor() {
    super(...arguments), this.selectedLNClasses = [];
  }
  openEditWizard() {
    const e = $t.LDevice.edit(this.element);
    e && this.dispatchEvent(U(e));
  }
  header() {
    const e = M(this.element) ?? He(this.element), t = Te(this.element), i = $a(this.element);
    return c`${e}${t ? c` &mdash; ${t}` : q}${i ? c` &mdash; ${i}` : q}`;
  }
  firstUpdated() {
    this.requestUpdate();
  }
  updated(e) {
    super.updated(e), e.has("selectedLNClasses") && this.requestUpdate("lnElements");
  }
  get lnElements() {
    return Array.from(this.element.querySelectorAll(":scope > LN,LN0")).filter(
      (e) => {
        const t = e.getAttribute("lnClass") ?? "";
        return this.selectedLNClasses.includes(t);
      }
    );
  }
  render() {
    const e = this.lnElements;
    return c`<action-pane .label="${this.header()}">
      <mwc-icon slot="icon">${Ro}</mwc-icon>
      <abbr slot="action" title="${l("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button>
      </abbr>
      ${e.length > 0 ? c`<abbr
            slot="action"
            title="${l("iededitor.toggleChildElements")}"
          >
            <mwc-icon-button-toggle
              on
              id="toggleButton"
              onIcon="keyboard_arrow_up"
              offIcon="keyboard_arrow_down"
              @click=${() => this.requestUpdate()}
            ></mwc-icon-button-toggle>
          </abbr>` : q}
      <div id="lnContainer">
        ${this.toggleButton?.on ? e.map(
      (t) => c`<ln-container
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
                .nsdoc=${this.nsdoc}
                .ancestors=${[...this.ancestors, this.element]}
              ></ln-container> `
    ) : q}
      </div>
    </action-pane>`;
  }
};
Ye.styles = re`
    #lnContainer {
      display: grid;
      grid-gap: 12px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(316px, auto));
    }

    abbr {
      text-decoration: none;
    }

    @media (max-width: 387px) {
      #lnContainer {
        grid-template-columns: repeat(auto-fit, minmax(196px, auto));
      }
    }
  `;
_t([
  b()
], Ye.prototype, "selectedLNClasses", 2);
_t([
  F("#toggleButton")
], Ye.prototype, "toggleButton", 2);
_t([
  E()
], Ye.prototype, "lnElements", 1);
Ye = _t([
  G("ldevice-container")
], Ye);
var Rd = Object.defineProperty, Od = Object.getOwnPropertyDescriptor, xi = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Od(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && Rd(t, i, n), n;
};
let wt = class extends be {
  constructor() {
    super(...arguments), this.selectedLNClasses = [];
  }
  header() {
    const e = Te(this.element);
    return c`Server${e ? c` &mdash; ${e}` : q}`;
  }
  updated(e) {
    super.updated(e), e.has("selectedLNClasses") && this.requestUpdate("lDeviceElements");
  }
  get lDeviceElements() {
    return Array.from(this.element.querySelectorAll(":scope > LDevice")).filter(
      (e) => Array.from(e.querySelectorAll(":scope > LN,LN0")).filter(
        (t) => {
          const i = t.getAttribute("lnClass") ?? "";
          return this.selectedLNClasses.includes(i);
        }
      ).length > 0
    );
  }
  render() {
    return c`<action-pane .label="${this.header()}">
      <mwc-icon slot="icon">${Po}</mwc-icon>
      ${this.lDeviceElements.map(
      (e) => c`<ldevice-container
            .editCount=${this.editCount}
            .doc=${this.doc}
            .element=${e}
            .nsdoc=${this.nsdoc}
            .selectedLNClasses=${this.selectedLNClasses}
            .ancestors=${[...this.ancestors, this.element]}
          ></ldevice-container>`
    )}
    </action-pane>`;
  }
};
xi([
  b()
], wt.prototype, "selectedLNClasses", 2);
xi([
  E()
], wt.prototype, "lDeviceElements", 1);
wt = xi([
  G("server-container")
], wt);
var Fd = Object.defineProperty, qd = Object.getOwnPropertyDescriptor, Ai = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? qd(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && Fd(t, i, n), n;
};
let lt = class extends be {
  constructor() {
    super(...arguments), this.selectedLNClasses = [];
  }
  updated(e) {
    super.updated(e), e.has("selectedLNClasses") && this.requestUpdate("lnElements");
  }
  renderServicesIcon() {
    const e = this.element.querySelector("Services");
    return e ? c` <abbr slot="action" title="${l("iededitor.settings")}">
      <mwc-icon-button
        icon="settings"
        @click=${() => this.openSettingsWizard(e)}
      ></mwc-icon-button>
    </abbr>` : c``;
  }
  openSettingsWizard(e) {
    const t = wr(e);
    t && this.dispatchEvent(U(t));
  }
  get lnElements() {
    return Array.from(this.element.querySelectorAll(":scope > LN")).filter(
      (e) => {
        const t = e.getAttribute("lnClass") ?? "";
        return this.selectedLNClasses.includes(t);
      }
    );
  }
  header() {
    const e = M(this.element), t = Te(this.element);
    return c`${e}${t ? c` &mdash; ${t}` : q}`;
  }
  render() {
    const e = this.lnElements;
    return c`<action-pane .label="${this.header()}">
      <mwc-icon slot="icon">${Vo}</mwc-icon>
      ${this.renderServicesIcon()}
      ${Array.from(this.element.querySelectorAll(":scope > Server")).map(
      (t) => c`<server-container
            .editCount=${this.editCount}
            .doc=${this.doc}
            .element=${t}
            .nsdoc=${this.nsdoc}
            .selectedLNClasses=${this.selectedLNClasses}
            .ancestors=${[...this.ancestors, this.element]}
          ></server-container>`
    )}
      <div id="lnContainer">
        ${e.map(
      (t) => c`<ln-container
            .editCount=${this.editCount}
            .doc=${this.doc}
            .element=${t}
            .nsdoc=${this.nsdoc}
            .ancestors=${[...this.ancestors, this.element]}
          ></ln-container>`
    )}
      </div>
    </action-pane>`;
  }
};
lt.styles = re`
    #lnContainer {
      display: grid;
      grid-gap: 12px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(316px, auto));
    }

    @media (max-width: 387px) {
      #lnContainer {
        grid-template-columns: repeat(auto-fit, minmax(196px, auto));
      }
    }
  `;
Ai([
  b()
], lt.prototype, "selectedLNClasses", 2);
Ai([
  E()
], lt.prototype, "lnElements", 1);
lt = Ai([
  G("access-point-container")
], lt);
var Md = Object.defineProperty, Hd = Object.getOwnPropertyDescriptor, hn = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Hd(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && Md(t, i, n), n;
};
let Ct = class extends be {
  constructor() {
    super(...arguments), this.selectedLNClasses = [];
  }
  openEditWizard() {
    const e = $t.IED.edit(this.element);
    e && this.dispatchEvent(U(e));
  }
  renderServicesIcon() {
    const e = this.element.querySelector("Services");
    return e ? c` <abbr slot="action" title="${l("iededitor.settings")}">
      <mwc-icon-button
        icon="settings"
        @click=${() => this.openSettingsWizard(e)}
      ></mwc-icon-button>
    </abbr>` : c``;
  }
  openSettingsWizard(e) {
    const t = wr(e);
    t && this.dispatchEvent(U(t));
  }
  removeIED() {
    const e = Kr(this.element);
    e ? this.dispatchEvent(U(() => e)) : this.dispatchEvent(
      Nt({
        old: { parent: this.element.parentElement, element: this.element }
      })
    );
  }
  header() {
    const e = M(this.element), t = Te(this.element);
    return c`${e}${t ? c` &mdash; ${t}` : q}`;
  }
  render() {
    return c` <action-pane .label="${this.header()}">
      <mwc-icon slot="icon">developer_board</mwc-icon>
      <abbr slot="action" title="${l("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.removeIED()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${l("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button>
      </abbr>
      ${this.renderServicesIcon()}
      ${Array.from(this.element.querySelectorAll(":scope > AccessPoint")).map(
      (e) => c`<access-point-container
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
          .nsdoc=${this.nsdoc}
          .selectedLNClasses=${this.selectedLNClasses}
          .ancestors=${[this.element]}
        ></access-point-container>`
    )}
    </action-pane>`;
  }
};
Ct.styles = re`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
hn([
  b()
], Ct.prototype, "selectedLNClasses", 2);
Ct = hn([
  G("ied-container")
], Ct);
var Bd = Object.defineProperty, Gd = Object.getOwnPropertyDescriptor, fn = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Gd(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && Bd(t, i, n), n;
};
let Et = class extends Le {
  constructor() {
    super(), this.elementNames = [];
    const e = this.closest("section");
    e && e.addEventListener("full-element-path", (t) => {
      this.elementNames = t.detail.elementNames;
    });
  }
  render() {
    return c`
      <h3>${this.elementNames.join(" / ")}</h3>
    `;
  }
};
Et.styles = re`
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
    }`;
fn([
  E()
], Et.prototype, "elementNames", 2);
Et = fn([
  G("element-path")
], Et);
c`<svg
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
const pt = {
  action: T`<path d="M0 0h24v24H0z" fill="none"></path><path d="M13 3c-4.97 0-9
  4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7
  7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0
  9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" fill="currentColor"></path>`,
  dAIcon: T`<path fill="currentColor" d="m4.2 0c-2.31 0-4.2 1.89-4.2 4.2v11.6c0 2.31 1.89 4.2 4.2 4.2h18.1c2.31 0 4.2-1.89 4.2-4.2v-11.6c0-2.31-1.89-4.2-4.2-4.2zm0 1.89h18.1c1.29 0 2.3 1.01 2.3 2.3v11.6c0 1.29-1.01 2.31-2.3 2.31h-18.1c-1.29 0-2.3-1.01-2.3-2.31v-11.6c0-1.29 1.01-2.3 2.3-2.3z"/><path fill="currentColor" d="m12.5 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path fill="currentColor" d="m19.7 15-0.74-2.56h-3.18l-0.74 2.56h-1.75l3.04-10h2.06l3.03 10zm-1.13-4.13-0.823-2.88-0.379-1.46q-0.0947 0.412-0.178 0.739-0.0829 0.327-1.02 3.59z"/>`,
  dOIcon: T`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m12.1 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path d="m21.6 9.97q0 1.56-0.515 2.75-0.515 1.19-1.47 1.82-0.959 0.625-2.24 0.625-1.97 0-3.08-1.39-1.11-1.39-1.11-3.81 0-2.41 1.11-3.76t3.1-1.35 3.1 1.36q1.12 1.36 1.12 3.74zm-1.78 0q0-1.62-0.639-2.54-0.639-0.923-1.79-0.923-1.17 0-1.81 0.916-0.639 0.909-0.639 2.54 0 1.65 0.651 2.6 0.657 0.945 1.79 0.945 1.17 0 1.81-0.923 0.639-0.923 0.639-2.62z"/>`,
  enumIcon: T`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m5.37 15v-10h6.56v1.62h-4.81v2.51h4.45v1.62h-4.45v2.64h5.06v1.62z"/><path d="m18.5 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  info: T`<path d="M0 0h24v24H0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"></path>`,
  warning: T`<path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="currentColor"></path>`,
  error: T`<path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z" fill="currentColor"></path><path d="M11 7h2v7h-2z" fill="currentColor"></path><circle cx="12" cy="16" r="1" fill="currentColor"></circle>`,
  gooseIcon: T`<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  lNIcon: T`<path stroke="currentColor" stroke-width="1.89" fill="none" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path fill="currentColor" d="m5.71 15v-10h1.75v8.39h4.47v1.62z"/><path fill="currentColor" d="m18.2 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  logIcon: T`<path fill="currentColor" d="M9,7H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  reportIcon: T`<path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,16.41 7.58,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  smvIcon: T`<path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`
};
T`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${pt.gooseIcon}</svg>`;
T`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${pt.reportIcon}</svg>`;
T`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${pt.smvIcon}</svg>`;
T`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${pt.logIcon}</svg>`;
T`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z" />
</svg>`;
T`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M21,14V4H3V14H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M4,5H15V10H4V5M16,5H20V7H16V5M20,8V13H16V8H20M4,11H9V13H4V11M10,11H15V13H10V11Z" />
</svg>`;
T`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4,1C2.89,1 2,1.89 2,3V7C2,8.11 2.89,9 4,9H1V11H13V9H10C11.11,9 12,8.11 12,7V3C12,1.89 11.11,1 10,1H4M4,3H10V7H4V3M14,13C12.89,13 12,13.89 12,15V19C12,20.11 12.89,21 14,21H11V23H23V21H20C21.11,21 22,20.11 22,19V15C22,13.89 21.11,13 20,13H14M3.88,13.46L2.46,14.88L4.59,17L2.46,19.12L3.88,20.54L6,18.41L8.12,20.54L9.54,19.12L7.41,17L9.54,14.88L8.12,13.46L6,15.59L3.88,13.46M14,15H20V19H14V15Z" />
</svg>`;
const Qi = {
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
it("dAIcon"), it("dOIcon"), it("enumIcon"), it("lNIcon");
function it(e) {
  if (e === "reset") return c``;
  const t = Qi[e]?.height ?? 24, i = Qi[e]?.width ?? 24;
  return c`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 ${i} ${t}"
    width="${i}"
  >
    ${pt[e]}
  </svg> `;
}
c`<svg
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
c`<svg
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
c`<svg
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
c`<svg
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
c`<svg
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
c`<svg
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
c`<svg
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
c`<svg
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
c`<svg
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
c`<svg
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
c`<svg
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
c`<svg
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
c` <svg
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
T`
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
  </svg>`;
T`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
T`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
T`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
T`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
T`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
var Wd = Object.defineProperty, Ud = Object.getOwnPropertyDescriptor, Pe = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Ud(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (n = (r ? o(t, i, n) : o(n)) || n);
  return r && n && Wd(t, i, n), n;
};
class Re extends Le {
  constructor() {
    super(...arguments), this.editCount = -1, this.selectedIEDs = [], this.selectedLNClasses = [], this.lNClassListOpenedOnce = !1;
  }
  get iedList() {
    return this.doc ? Array.from(this.doc.querySelectorAll(":root > IED")).sort(
      (t, i) => xr(t, i)
    ) : [];
  }
  get lnClassList() {
    const t = this.selectedIed, i = [];
    return t ? Array.from(t.querySelectorAll("LN0, LN")).filter((r) => r.hasAttribute("lnClass")).filter((r) => {
      const n = r.getAttribute("lnClass") ?? "";
      return i.includes(n) ? !1 : (i.push(n), !0);
    }).sort((r, n) => {
      const a = r.getAttribute("lnClass") ?? "", o = n.getAttribute("lnClass") ?? "";
      return a.localeCompare(o);
    }).map((r) => {
      const n = r.getAttribute("lnClass"), a = this.nsdoc.getDataDescription(r).label;
      return [n, a];
    }) : [];
  }
  get selectedIed() {
    if (this.selectedIEDs.length >= 1)
      return this.iedList.find((i) => {
        const r = M(i);
        return this.selectedIEDs[0] === r;
      });
  }
  updated(t) {
    if (super.updated(t), t.has("doc") || t.has("editCount") || t.has("nsdoc")) {
      if (this.doc?.querySelector(
        `IED[name="${this.selectedIEDs[0]}"]`
      )) return;
      this.selectedIEDs = [], this.selectedLNClasses = [], this.lNClassListOpenedOnce = !1;
      const n = this.iedList;
      if (n.length > 0) {
        const a = M(n[0]);
        a && (this.selectedIEDs = [a]);
      }
    }
  }
  calcSelectedLNClasses() {
    const t = this.selectedLNClasses.length > 0, i = this.lnClassList.map((n) => n[0]);
    let r = i;
    return t && (r = i.filter(
      (n) => this.selectedLNClasses.includes(n)
    )), r;
  }
  render() {
    const t = this.iedList;
    return t.length > 0 ? c`<section>
        <div class="header">
          <h1>${l("filters")}:</h1>

          <oscd-filter-button
            id="iedFilter"
            icon="developer_board"
            .header=${l("iededitor.iedSelector")}
            @selected-items-changed="${(i) => {
      ((a, o) => a.length === o.length && a.every((s, d) => s === o[d]))(
        this.selectedIEDs,
        i.detail.selectedItems
      ) || (this.lNClassListOpenedOnce = !1, this.selectedIEDs = i.detail.selectedItems, this.selectedLNClasses = [], this.requestUpdate("selectedIed"));
    }}"
          >
            ${t.map((i) => {
      const r = M(i), n = Te(i), a = i.getAttribute("type"), o = i.getAttribute("manufacturer");
      return c` <mwc-radio-list-item
                value="${r}"
                ?twoline="${a && o}"
                ?selected="${this.selectedIEDs.includes(r ?? "")}"
              >
                ${r} ${n ? c` (${n})` : c``}
                <span slot="secondary">
                  ${a} ${a && o ? c`&mdash;` : q}
                  ${o}
                </span>
              </mwc-radio-list-item>`;
    })}
          </oscd-filter-button>

          <oscd-filter-button
            id="lnClassesFilter"
            multi="true"
            .header="${l("iededitor.lnFilter")}"
            @selected-items-changed="${(i) => {
      this.selectedLNClasses = i.detail.selectedItems, this.requestUpdate("selectedIed");
    }}"
          >
            <span slot="icon">${it("lNIcon")}</span>
            ${this.lnClassList.map((i) => {
      const r = i[0], n = i[1];
      return c`<mwc-check-list-item
                value="${r}"
                ?selected="${this.selectedLNClasses.includes(r)}"
              >
                ${n}
              </mwc-check-list-item>`;
    })}
          </oscd-filter-button>

          <element-path class="elementPath"></element-path>
        </div>

        <ied-container
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${this.selectedIed}
          .selectedLNClasses=${this.calcSelectedLNClasses()}
          .nsdoc=${this.nsdoc}
        ></ied-container>
      </section>` : c`<h1>
      <span style="color: var(--base1)">${l("iededitor.missing")}</span>
    </h1>`;
  }
  static {
    this.styles = re`
    :host {
      width: 100vw;
    }

    section {
      padding: 8px 12px 16px;
    }

    .header {
      display: flex;
    }

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

    .elementPath {
      margin-left: auto;
      padding-right: 12px;
    }
  `;
  }
}
Pe([
  b()
], Re.prototype, "doc", 2);
Pe([
  b({ type: Number })
], Re.prototype, "editCount", 2);
Pe([
  b()
], Re.prototype, "nsdoc", 2);
Pe([
  E()
], Re.prototype, "selectedIEDs", 2);
Pe([
  E()
], Re.prototype, "selectedLNClasses", 2);
Pe([
  E()
], Re.prototype, "iedList", 1);
Pe([
  E()
], Re.prototype, "lnClassList", 1);
Pe([
  E()
], Re.prototype, "selectedIed", 1);
export {
  Re as default
};
