import { LitElement as Ce, query as M, property as u, state as k, html as b, css as ue, customElement as ie, queryAsync as St, eventOptions as Jt, queryAssignedNodes as _t, unsafeCSS as Yt } from "lit-element";
import { NodePart as ei, AttributePart as ti, directive as kt } from "lit-html";
import "@material/mwc-formfield";
import { TextField as ii } from "@material/mwc-textfield";
import { List as ri } from "@material/mwc-list";
import { Select as ni } from "@material/mwc-select";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
const ci = 1e3 * 60, tt = "langChanged";
function ai(i, e, t) {
  return Object.entries(Ge(e || {})).reduce((r, [n, c]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(Ge(c))), i);
}
function si(i, e) {
  const t = i.split(".");
  let r = e.strings;
  for (; r != null && t.length > 0; )
    r = r[t.shift()];
  return r != null ? r.toString() : null;
}
function Ge(i) {
  return typeof i == "function" ? i() : i;
}
const oi = () => ({
  loader: () => Promise.resolve({}),
  empty: (i) => `[${i}]`,
  lookup: si,
  interpolate: ai,
  translationCache: {}
});
let di = oi();
function li(i, e) {
  const t = (r) => i(r.detail);
  return window.addEventListener(tt, t, e), () => window.removeEventListener(tt, t);
}
function pe(i, e, t = di) {
  let r = t.translationCache[i] || (t.translationCache[i] = t.lookup(i, t) || t.empty(i, t));
  return e = e != null ? Ge(e) : null, e != null ? t.interpolate(r, e, t) : r;
}
function At(i) {
  return i instanceof ei ? i.startNode.isConnected : i instanceof ti ? i.committer.element.isConnected : i.element.isConnected;
}
function pi(i) {
  for (const [e] of i)
    At(e) || i.delete(e);
}
function ui(i) {
  "requestIdleCallback" in window ? window.requestIdleCallback(i) : setTimeout(i);
}
function mi(i, e) {
  setInterval(() => ui(() => pi(i)), e);
}
const Ke = /* @__PURE__ */ new Map();
function hi() {
  li((i) => {
    for (const [e, t] of Ke)
      At(e) && It(e, t, i);
  });
}
hi();
mi(Ke, ci);
function It(i, e, t) {
  const r = e(t);
  i.value !== r && (i.setValue(r), i.commit());
}
kt((i) => (e) => {
  Ke.set(e, i), It(e, i);
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
const Et = /* @__PURE__ */ new WeakMap(), Ze = (i) => (...e) => {
  const t = i(...e);
  return Et.set(t, !0), t;
}, it = (i) => typeof i == "function" && Et.has(i);
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
const Ne = {};
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
window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (i) => i });
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
const fi = (i) => i === null || !(typeof i == "object" || typeof i == "function");
class we {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== Ne && (!fi(e) || e !== this.value) && (this.value = e, it(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; it(this.value); ) {
      const e = this.value;
      this.value = Ne, e(this);
    }
    this.value !== Ne && this.committer.commit();
  }
}
class Ct extends we {
}
let bi = !1;
(() => {
  try {
    const i = {
      get capture() {
        return bi = !0, !1;
      }
    };
    window.addEventListener("test", i, i), window.removeEventListener("test", i, i);
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
var ze = function(i, e) {
  return ze = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, ze(i, e);
};
function gi(i, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ze(i, e);
  function t() {
    this.constructor = i;
  }
  i.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var be = function() {
  return be = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, be.apply(this, arguments);
};
function d(i, e, t, r) {
  var n = arguments.length, c = n < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, t) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") c = Reflect.decorate(i, e, t, r);
  else for (var s = i.length - 1; s >= 0; s--) (a = i[s]) && (c = (n < 3 ? a(c) : n > 3 ? a(e, t, c) : a(e, t)) || c);
  return n > 3 && c && Object.defineProperty(e, t, c), c;
}
function ve(i) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && i[e], r = 0;
  if (t) return t.call(i);
  if (i && typeof i.length == "number") return {
    next: function() {
      return i && r >= i.length && (i = void 0), { value: i && i[r++], done: !i };
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
function yi(i, e) {
  var t = i.matches || i.webkitMatchesSelector || i.msMatchesSelector;
  return t.call(i, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const vi = (i) => i.nodeType === Node.ELEMENT_NODE, wt = () => {
}, xi = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", wt, xi);
document.removeEventListener("x", wt);
const Rt = (i = window.document) => {
  let e = i.activeElement;
  const t = [];
  if (!e)
    return t;
  for (; e && (t.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return t;
}, Si = (i) => {
  const e = Rt();
  if (!e.length)
    return !1;
  const t = e[e.length - 1], r = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let n = [];
  const c = (a) => {
    n = a.composedPath();
  };
  return document.body.addEventListener("check-if-focused", c), t.dispatchEvent(r), document.body.removeEventListener("check-if-focused", c), n.indexOf(i) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Qe extends Ce {
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
var Lt = (
  /** @class */
  function() {
    function i(e) {
      e === void 0 && (e = {}), this.adapter = e;
    }
    return Object.defineProperty(i, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.init = function() {
    }, i.prototype.destroy = function() {
    }, i;
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
var _i = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, ki = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, rt = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function Ai(i, e, t) {
  if (!i)
    return { x: 0, y: 0 };
  var r = e.x, n = e.y, c = r + t.left, a = n + t.top, s, o;
  if (i.type === "touchstart") {
    var m = i;
    s = m.changedTouches[0].pageX - c, o = m.changedTouches[0].pageY - a;
  } else {
    var h = i;
    s = h.pageX - c, o = h.pageY - a;
  }
  return { x: s, y: o };
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
var nt = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], ct = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], xe = [], Ii = (
  /** @class */
  function(i) {
    gi(e, i);
    function e(t) {
      var r = i.call(this, be(be({}, e.defaultAdapter), t)) || this;
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
        return _i;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ki;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return rt;
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
      var t = this, r = this.supportsPressRipple();
      if (this.registerRootHandlers(r), r) {
        var n = e.cssClasses, c = n.ROOT, a = n.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(c), t.adapter.isUnbounded() && (t.adapter.addClass(a), t.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var t = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var r = e.cssClasses, n = r.ROOT, c = r.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.removeClass(n), t.adapter.removeClass(c), t.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, e.prototype.activate = function(t) {
      this.activateImpl(t);
    }, e.prototype.deactivate = function() {
      this.deactivateImpl();
    }, e.prototype.layout = function() {
      var t = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        t.layoutInternal(), t.layoutFrame = 0;
      });
    }, e.prototype.setUnbounded = function(t) {
      var r = e.cssClasses.UNBOUNDED;
      t ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.handleFocus = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.addClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.handleBlur = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.removeClass(e.cssClasses.BG_FOCUSED);
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
    }, e.prototype.registerRootHandlers = function(t) {
      var r, n;
      if (t) {
        try {
          for (var c = ve(nt), a = c.next(); !a.done; a = c.next()) {
            var s = a.value;
            this.adapter.registerInteractionHandler(s, this.activateHandler);
          }
        } catch (o) {
          r = { error: o };
        } finally {
          try {
            a && !a.done && (n = c.return) && n.call(c);
          } finally {
            if (r) throw r.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(t) {
      var r, n;
      if (t.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var c = ve(ct), a = c.next(); !a.done; a = c.next()) {
            var s = a.value;
            this.adapter.registerDocumentInteractionHandler(s, this.deactivateHandler);
          }
        } catch (o) {
          r = { error: o };
        } finally {
          try {
            a && !a.done && (n = c.return) && n.call(c);
          } finally {
            if (r) throw r.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, r;
      try {
        for (var n = ve(nt), c = n.next(); !c.done; c = n.next()) {
          var a = c.value;
          this.adapter.deregisterInteractionHandler(a, this.activateHandler);
        }
      } catch (s) {
        t = { error: s };
      } finally {
        try {
          c && !c.done && (r = n.return) && r.call(n);
        } finally {
          if (t) throw t.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var t, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var n = ve(ct), c = n.next(); !c.done; c = n.next()) {
          var a = c.value;
          this.adapter.deregisterDocumentInteractionHandler(a, this.deactivateHandler);
        }
      } catch (s) {
        t = { error: s };
      } finally {
        try {
          c && !c.done && (r = n.return) && r.call(n);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var t = this, r = e.strings, n = Object.keys(r);
      n.forEach(function(c) {
        c.indexOf("VAR_") === 0 && t.adapter.updateCssVariable(r[c], null);
      });
    }, e.prototype.activateImpl = function(t) {
      var r = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var n = this.activationState;
        if (!n.isActivated) {
          var c = this.previousActivationEvent, a = c && t !== void 0 && c.type !== t.type;
          if (!a) {
            n.isActivated = !0, n.isProgrammatic = t === void 0, n.activationEvent = t, n.wasActivatedByPointer = n.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var s = t !== void 0 && xe.length > 0 && xe.some(function(o) {
              return r.adapter.containsEventTarget(o);
            });
            if (s) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (xe.push(t.target), this.registerDeactivationHandlers(t)), n.wasElementMadeActive = this.checkElementMadeActive(t), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              xe = [], !n.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (n.wasElementMadeActive = r.checkElementMadeActive(t), n.wasElementMadeActive && r.animateActivation()), n.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, r = e.strings, n = r.VAR_FG_TRANSLATE_START, c = r.VAR_FG_TRANSLATE_END, a = e.cssClasses, s = a.FG_DEACTIVATION, o = a.FG_ACTIVATION, m = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var h = "", x = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), S = f.startPoint, A = f.endPoint;
        h = S.x + "px, " + S.y + "px", x = A.x + "px, " + A.y + "px";
      }
      this.adapter.updateCssVariable(n, h), this.adapter.updateCssVariable(c, x), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(s), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, m);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, r = t.activationEvent, n = t.wasActivatedByPointer, c;
      n ? c = Ai(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : c = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, c = {
        x: c.x - this.initialSize / 2,
        y: c.y - this.initialSize / 2
      };
      var a = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: c, endPoint: a };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var t = this, r = e.cssClasses.FG_DEACTIVATION, n = this.activationState, c = n.hasDeactivationUXRun, a = n.isActivated, s = c || !a;
      s && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(r);
      }, rt.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var t = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(t), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var t = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return t.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var t = this, r = this.activationState;
      if (r.isActivated) {
        var n = be({}, r);
        r.isProgrammatic ? (requestAnimationFrame(function() {
          t.animateDeactivation(n);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          t.activationState.hasDeactivationUXRun = !0, t.animateDeactivation(n), t.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(t) {
      var r = t.wasActivatedByPointer, n = t.wasElementMadeActive;
      (r || n) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var t = this;
      this.frame = this.adapter.computeBoundingRect();
      var r = Math.max(this.frame.height, this.frame.width), n = function() {
        var a = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return a + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : n();
      var c = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && c % 2 !== 0 ? this.initialSize = c - 1 : this.initialSize = c, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, r = t.VAR_FG_SIZE, n = t.VAR_LEFT, c = t.VAR_TOP, a = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(a, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(n, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(c, this.unboundedCoords.top + "px"));
    }, e;
  }(Lt)
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
class Ei {
  constructor(e) {
    this.classes = /* @__PURE__ */ new Set(), this.changed = !1, this.element = e;
    const t = (e.getAttribute("class") || "").split(/\s+/);
    for (const r of t)
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
      this.classes.forEach((t) => e += t + " "), this.element.setAttribute("class", e);
    }
  }
}
const at = /* @__PURE__ */ new WeakMap(), Re = Ze((i) => (e) => {
  if (!(e instanceof we) || e instanceof Ct || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: t } = e, { element: r } = t;
  let n = at.get(e);
  n === void 0 && (r.setAttribute("class", t.strings.join(" ")), at.set(e, n = /* @__PURE__ */ new Set()));
  const c = r.classList || new Ei(r);
  n.forEach((a) => {
    a in i || (c.remove(a), n.delete(a));
  });
  for (const a in i) {
    const s = i[a];
    s != n.has(a) && (s ? (c.add(a), n.add(a)) : (c.remove(a), n.delete(a)));
  }
  typeof c.commit == "function" && c.commit();
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
const st = /* @__PURE__ */ new WeakMap(), Ci = Ze((i) => (e) => {
  if (!(e instanceof we) || e instanceof Ct || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: t } = e, { style: r } = t.element;
  let n = st.get(e);
  n === void 0 && (r.cssText = t.strings.join(" "), st.set(e, n = /* @__PURE__ */ new Set())), n.forEach((c) => {
    c in i || (n.delete(c), c.indexOf("-") === -1 ? r[c] = null : r.removeProperty(c));
  });
  for (const c in i)
    n.add(c), c.indexOf("-") === -1 ? r[c] = i[c] : r.setProperty(c, i[c]);
});
class R extends Qe {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Ii;
  }
  get isActive() {
    return yi(this.parentElement || this, ":active");
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
      updateCssVariable: (e, t) => {
        switch (e) {
          case "--mdc-ripple-fg-scale":
            this.fgScale = t;
            break;
          case "--mdc-ripple-fg-size":
            this.fgSize = t;
            break;
          case "--mdc-ripple-fg-translate-end":
            this.translateEnd = t;
            break;
          case "--mdc-ripple-fg-translate-start":
            this.translateStart = t;
            break;
          case "--mdc-ripple-left":
            this.leftPos = t;
            break;
          case "--mdc-ripple-top":
            this.topPos = t;
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
    const e = this.activated && (this.primary || !this.accent), t = this.selected && (this.primary || !this.accent), r = {
      "mdc-ripple-surface--accent": this.accent,
      "mdc-ripple-surface--primary--activated": e,
      "mdc-ripple-surface--accent--activated": this.accent && this.activated,
      "mdc-ripple-surface--primary--selected": t,
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
    return b`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Re(r)}"
          style="${Ci({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
d([
  M(".mdc-ripple-surface")
], R.prototype, "mdcRoot", void 0);
d([
  u({ type: Boolean })
], R.prototype, "primary", void 0);
d([
  u({ type: Boolean })
], R.prototype, "accent", void 0);
d([
  u({ type: Boolean })
], R.prototype, "unbounded", void 0);
d([
  u({ type: Boolean })
], R.prototype, "disabled", void 0);
d([
  u({ type: Boolean })
], R.prototype, "activated", void 0);
d([
  u({ type: Boolean })
], R.prototype, "selected", void 0);
d([
  u({ type: Boolean })
], R.prototype, "internalUseStateLayerCustomProperties", void 0);
d([
  k()
], R.prototype, "hovering", void 0);
d([
  k()
], R.prototype, "bgFocused", void 0);
d([
  k()
], R.prototype, "fgActivation", void 0);
d([
  k()
], R.prototype, "fgDeactivation", void 0);
d([
  k()
], R.prototype, "fgScale", void 0);
d([
  k()
], R.prototype, "fgSize", void 0);
d([
  k()
], R.prototype, "translateStart", void 0);
d([
  k()
], R.prototype, "translateEnd", void 0);
d([
  k()
], R.prototype, "leftPos", void 0);
d([
  k()
], R.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const wi = ue`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let Be = class extends R {
};
Be.styles = [wi];
Be = d([
  ie("mwc-ripple")
], Be);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Ri(i, e, t) {
  const r = i.constructor;
  if (!t) {
    const s = `__${e}`;
    if (t = r.getPropertyDescriptor(e, s), !t)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const n = t;
  let c = "";
  if (!n.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const a = {
    configurable: !0,
    enumerable: !0,
    set(s) {
      c === "" && (c = r.getPropertyOptions(e).attribute), this.hasAttribute(c) && this.removeAttribute(c), n.set.call(this, s);
    }
  };
  return n.get && (a.get = function() {
    return n.get.call(this);
  }), a;
}
function Je(i, e, t) {
  if (e !== void 0)
    return Ri(i, e, t);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Dt extends Qe {
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
Dt.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Tt {
  constructor(e) {
    this.startPress = (t) => {
      e().then((r) => {
        r && r.startPress(t);
      });
    }, this.endPress = () => {
      e().then((t) => {
        t && t.endPress();
      });
    }, this.startFocus = () => {
      e().then((t) => {
        t && t.startFocus();
      });
    }, this.endFocus = () => {
      e().then((t) => {
        t && t.endFocus();
      });
    }, this.startHover = () => {
      e().then((t) => {
        t && t.startHover();
      });
    }, this.endHover = () => {
      e().then((t) => {
        t && t.endHover();
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
const Pe = /* @__PURE__ */ new WeakMap(), ae = Ze((i) => (e) => {
  const t = Pe.get(e);
  if (i === void 0 && e instanceof we) {
    if (t !== void 0 || !Pe.has(e)) {
      const r = e.committer.name;
      e.committer.element.removeAttribute(r);
    }
  } else i !== t && e.setValue(i);
  Pe.set(e, i);
});
class L extends Dt {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new Tt(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(e) {
    const t = e.get("indeterminate"), r = e.get("checked"), n = e.get("disabled");
    if (t !== void 0 || r !== void 0 || n !== void 0) {
      const c = this.calculateAnimationStateName(!!r, !!t, !!n), a = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${c}-${a}`;
    }
    super.update(e);
  }
  calculateAnimationStateName(e, t, r) {
    return r ? "disabled" : t ? "indeterminate" : e ? "checked" : "unchecked";
  }
  // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? b`<mwc-ripple
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
    const e = this.indeterminate || this.checked, t = {
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
    return b`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Re(t)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${ae(this.name)}"
              aria-checked="${ae(r)}"
              aria-label="${ae(this.ariaLabel)}"
              aria-labelledby="${ae(this.ariaLabelledBy)}"
              aria-describedby="${ae(this.ariaDescribedBy)}"
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
    const t = () => {
      window.removeEventListener("mouseup", t), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", t), this.rippleHandlers.startPress(e);
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
d([
  M(".mdc-checkbox")
], L.prototype, "mdcRoot", void 0);
d([
  M("input")
], L.prototype, "formElement", void 0);
d([
  u({ type: Boolean, reflect: !0 })
], L.prototype, "checked", void 0);
d([
  u({ type: Boolean })
], L.prototype, "indeterminate", void 0);
d([
  u({ type: Boolean, reflect: !0 })
], L.prototype, "disabled", void 0);
d([
  u({ type: String, reflect: !0 })
], L.prototype, "name", void 0);
d([
  u({ type: String })
], L.prototype, "value", void 0);
d([
  Je,
  u({ type: String, attribute: "aria-label" })
], L.prototype, "ariaLabel", void 0);
d([
  Je,
  u({ type: String, attribute: "aria-labelledby" })
], L.prototype, "ariaLabelledBy", void 0);
d([
  Je,
  u({ type: String, attribute: "aria-describedby" })
], L.prototype, "ariaDescribedBy", void 0);
d([
  u({ type: Boolean })
], L.prototype, "reducedTouchTarget", void 0);
d([
  k()
], L.prototype, "animationClass", void 0);
d([
  k()
], L.prototype, "shouldRenderRipple", void 0);
d([
  k()
], L.prototype, "focused", void 0);
d([
  k()
], L.prototype, "useStateLayerCustomProperties", void 0);
d([
  St("mwc-ripple")
], L.prototype, "ripple", void 0);
d([
  Jt({ passive: !0 })
], L.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Li = ue`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let He = class extends L {
};
He.styles = [Li];
He = d([
  ie("mwc-checkbox")
], He);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const re = (i) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e, t) => {
    if (e.constructor._observers) {
      if (!e.constructor.hasOwnProperty("_observers")) {
        const r = e.constructor._observers;
        e.constructor._observers = /* @__PURE__ */ new Map(), r.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (n, c) => e.constructor._observers.set(c, n)
        );
      }
    } else {
      e.constructor._observers = /* @__PURE__ */ new Map();
      const r = e.updated;
      e.updated = function(n) {
        r.call(this, n), n.forEach((c, a) => {
          const o = this.constructor._observers.get(a);
          o !== void 0 && o.call(this, this[a], c);
        });
      };
    }
    e.constructor._observers.set(t, i);
  }
);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class T extends Ce {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new Tt(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
          const t = e.type;
          this.onDown(t === "mousedown" ? "mouseup" : "touchend", e);
        }
      }
    ];
  }
  get text() {
    const e = this.textContent;
    return e ? e.trim() : "";
  }
  render() {
    const e = this.renderText(), t = this.graphic ? this.renderGraphic() : b``, r = this.hasMeta ? this.renderMeta() : b``;
    return b`
      ${this.renderRipple()}
      ${t}
      ${e}
      ${r}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? b`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? b`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return b`
      <span class="mdc-deprecated-list-item__graphic material-icons ${Re(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return b`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return b`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return b`<slot></slot>`;
  }
  renderTwoline() {
    return b`
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
  onDown(e, t) {
    const r = () => {
      window.removeEventListener(e, r), this.rippleHandlers.endPress();
    };
    window.addEventListener(e, r), this.rippleHandlers.startPress(t);
  }
  fireRequestSelected(e, t) {
    if (this.noninteractive)
      return;
    const r = new CustomEvent("request-selected", { bubbles: !0, composed: !0, detail: { source: t, selected: e } });
    this.dispatchEvent(r);
  }
  connectedCallback() {
    super.connectedCallback(), this.noninteractive || this.setAttribute("mwc-list-item", "");
    for (const e of this.listeners)
      for (const t of e.eventNames)
        e.target.addEventListener(t, e.cb, { passive: !0 });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const e of this.listeners)
      for (const t of e.eventNames)
        e.target.removeEventListener(t, e.cb);
    this._managingList && (this._managingList.debouncedLayout ? this._managingList.debouncedLayout(!0) : this._managingList.layout(!0));
  }
  // composed flag, event fire through shadow root and up through composed tree
  firstUpdated() {
    const e = new Event("list-item-rendered", { bubbles: !0, composed: !0 });
    this.dispatchEvent(e);
  }
}
d([
  M("slot")
], T.prototype, "slotElement", void 0);
d([
  St("mwc-ripple")
], T.prototype, "ripple", void 0);
d([
  u({ type: String })
], T.prototype, "value", void 0);
d([
  u({ type: String, reflect: !0 })
], T.prototype, "group", void 0);
d([
  u({ type: Number, reflect: !0 })
], T.prototype, "tabindex", void 0);
d([
  u({ type: Boolean, reflect: !0 }),
  re(function(i) {
    i ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], T.prototype, "disabled", void 0);
d([
  u({ type: Boolean, reflect: !0 })
], T.prototype, "twoline", void 0);
d([
  u({ type: Boolean, reflect: !0 })
], T.prototype, "activated", void 0);
d([
  u({ type: String, reflect: !0 })
], T.prototype, "graphic", void 0);
d([
  u({ type: Boolean })
], T.prototype, "multipleGraphics", void 0);
d([
  u({ type: Boolean })
], T.prototype, "hasMeta", void 0);
d([
  u({ type: Boolean, reflect: !0 }),
  re(function(i) {
    i ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], T.prototype, "noninteractive", void 0);
d([
  u({ type: Boolean, reflect: !0 }),
  re(function(i) {
    const e = this.getAttribute("role"), t = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (t && i ? this.setAttribute("aria-selected", "true") : t && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(i, "property");
  })
], T.prototype, "selected", void 0);
d([
  k()
], T.prototype, "shouldRenderRipple", void 0);
d([
  k()
], T.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ye extends T {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, t = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : b``, n = this.hasMeta && this.left ? this.renderMeta() : b``, c = this.renderRipple();
    return b`
      ${c}
      ${r}
      ${this.left ? "" : t}
      <span class=${Re(e)}>
        <mwc-checkbox
            reducedTouchTarget
            tabindex=${this.tabindex}
            .checked=${this.selected}
            ?disabled=${this.disabled}
            @change=${this.onChange}>
        </mwc-checkbox>
      </span>
      ${this.left ? t : ""}
      ${n}`;
  }
  async onChange(e) {
    const t = e.target;
    this.selected === t.checked || (this._skipPropRequest = !0, this.selected = t.checked, await this.updateComplete, this._skipPropRequest = !1);
  }
}
d([
  M("slot")
], ye.prototype, "slotElement", void 0);
d([
  M("mwc-checkbox")
], ye.prototype, "checkboxElement", void 0);
d([
  u({ type: Boolean })
], ye.prototype, "left", void 0);
d([
  u({ type: String, reflect: !0 })
], ye.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Di = ue`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const $t = ue`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let le = class extends ye {
};
le.styles = [$t, Di];
le = d([
  ie("mwc-check-list-item")
], le);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Ve = class extends T {
};
Ve.styles = [$t];
Ve = d([
  ie("mwc-list-item")
], Ve);
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
var g = {
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
}, G = /* @__PURE__ */ new Set();
G.add(g.BACKSPACE);
G.add(g.ENTER);
G.add(g.SPACEBAR);
G.add(g.PAGE_UP);
G.add(g.PAGE_DOWN);
G.add(g.END);
G.add(g.HOME);
G.add(g.ARROW_LEFT);
G.add(g.ARROW_UP);
G.add(g.ARROW_RIGHT);
G.add(g.ARROW_DOWN);
G.add(g.DELETE);
G.add(g.ESCAPE);
G.add(g.TAB);
var V = {
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
}, z = /* @__PURE__ */ new Map();
z.set(V.BACKSPACE, g.BACKSPACE);
z.set(V.ENTER, g.ENTER);
z.set(V.SPACEBAR, g.SPACEBAR);
z.set(V.PAGE_UP, g.PAGE_UP);
z.set(V.PAGE_DOWN, g.PAGE_DOWN);
z.set(V.END, g.END);
z.set(V.HOME, g.HOME);
z.set(V.ARROW_LEFT, g.ARROW_LEFT);
z.set(V.ARROW_UP, g.ARROW_UP);
z.set(V.ARROW_RIGHT, g.ARROW_RIGHT);
z.set(V.ARROW_DOWN, g.ARROW_DOWN);
z.set(V.DELETE, g.DELETE);
z.set(V.ESCAPE, g.ESCAPE);
z.set(V.TAB, g.TAB);
var ne = /* @__PURE__ */ new Set();
ne.add(g.PAGE_UP);
ne.add(g.PAGE_DOWN);
ne.add(g.END);
ne.add(g.HOME);
ne.add(g.ARROW_LEFT);
ne.add(g.ARROW_UP);
ne.add(g.ARROW_RIGHT);
ne.add(g.ARROW_DOWN);
function Q(i) {
  var e = i.key;
  if (G.has(e))
    return e;
  var t = z.get(i.keyCode);
  return t || g.UNKNOWN;
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
var J, Z, _ = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
J = {}, J["" + _.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", J["" + _.LIST_ITEM_CLASS] = "mdc-list-item", J["" + _.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", J["" + _.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", J["" + _.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", J["" + _.ROOT] = "mdc-list";
var de = (Z = {}, Z["" + _.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", Z["" + _.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", Z["" + _.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", Z["" + _.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", Z["" + _.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", Z["" + _.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", Z["" + _.ROOT] = "mdc-deprecated-list", Z), Se = {
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
    .` + _.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + _.LIST_ITEM_CLASS + ` a,
    .` + de[_.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + de[_.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + _.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + _.LIST_ITEM_CLASS + ` a,
    .` + _.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + _.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + de[_.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + de[_.LIST_ITEM_CLASS] + ` a,
    .` + de[_.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + de[_.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, B = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ue = (i, e) => i - e, Ti = (i, e) => {
  const t = Array.from(i), r = Array.from(e), n = { added: [], removed: [] }, c = t.sort(Ue), a = r.sort(Ue);
  let s = 0, o = 0;
  for (; s < c.length || o < a.length; ) {
    const m = c[s], h = a[o];
    if (m === h) {
      s++, o++;
      continue;
    }
    if (m !== void 0 && (h === void 0 || m < h)) {
      n.removed.push(m), s++;
      continue;
    }
    if (h !== void 0 && (m === void 0 || h < m)) {
      n.added.push(h), o++;
      continue;
    }
  }
  return n;
}, $i = ["input", "button", "textarea", "select"];
function ge(i) {
  return i instanceof Set;
}
const Oe = (i) => {
  const e = i === B.UNSET_INDEX ? /* @__PURE__ */ new Set() : i;
  return ge(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class Ye extends Lt {
  constructor(e) {
    super(Object.assign(Object.assign({}, Ye.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = B.UNSET_INDEX, this.focusedItemIndex_ = B.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return Se;
  }
  static get numbers() {
    return B;
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
    const t = this.selectedIndex_;
    if (e) {
      if (!ge(t)) {
        const r = t === B.UNSET_INDEX;
        this.selectedIndex_ = r ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([t]);
      }
    } else if (ge(t))
      if (t.size) {
        const r = Array.from(t).sort(Ue);
        this.selectedIndex_ = r[0];
      } else
        this.selectedIndex_ = B.UNSET_INDEX;
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
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(Oe(e)) : this.setSingleSelectionAtIndex_(e));
  }
  /**
   * Focus in handler for the list items.
   */
  handleFocusIn(e, t) {
    t >= 0 && this.adapter.setTabIndexForElementIndex(t, 0);
  }
  /**
   * Focus out handler for the list items.
   */
  handleFocusOut(e, t) {
    t >= 0 && this.adapter.setTabIndexForElementIndex(t, -1), setTimeout(() => {
      this.adapter.isFocusInsideList() || this.setTabindexToFirstSelectedItem_();
    }, 0);
  }
  /**
   * Key handler for the list.
   */
  handleKeydown(e, t, r) {
    const n = Q(e) === "ArrowLeft", c = Q(e) === "ArrowUp", a = Q(e) === "ArrowRight", s = Q(e) === "ArrowDown", o = Q(e) === "Home", m = Q(e) === "End", h = Q(e) === "Enter", x = Q(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      c || m ? (e.preventDefault(), this.focusLastElement()) : (s || o) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let f = this.adapter.getFocusedElementIndex();
    if (f === -1 && (f = r, f < 0))
      return;
    let S;
    if (this.isVertical_ && s || !this.isVertical_ && a)
      this.preventDefaultEvent(e), S = this.focusNextElement(f);
    else if (this.isVertical_ && c || !this.isVertical_ && n)
      this.preventDefaultEvent(e), S = this.focusPrevElement(f);
    else if (o)
      this.preventDefaultEvent(e), S = this.focusFirstElement();
    else if (m)
      this.preventDefaultEvent(e), S = this.focusLastElement();
    else if ((h || x) && t) {
      const A = e.target;
      if (A && A.tagName === "A" && h)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(f, !0);
    }
    this.focusedItemIndex_ = f, S !== void 0 && (this.setTabindexAtIndex_(S), this.focusedItemIndex_ = S);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, t, r) {
    e !== B.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, t, r), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
  }
  /**
   * Focuses the next element on the list.
   */
  focusNextElement(e) {
    const t = this.adapter.getListItemCount();
    let r = e + 1;
    if (r >= t)
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
    let t = e - 1;
    if (t < 0)
      if (this.wrapFocus_)
        t = this.adapter.getListItemCount() - 1;
      else
        return e;
    return this.adapter.focusItemAtIndex(t), t;
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
  setEnabled(e, t) {
    this.isIndexValid_(e) && this.adapter.setDisabledStateForElementIndex(e, !t);
  }
  /**
   * Ensures that preventDefault is only called if the containing element
   * doesn't consume the event, and it will cause an unintended scroll.
   */
  preventDefaultEvent(e) {
    const r = `${e.target.tagName}`.toLowerCase();
    $i.indexOf(r) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, t = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== B.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), t && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, t = !0) {
    const r = Oe(this.selectedIndex_), n = Ti(r, e);
    if (!(!n.removed.length && !n.added.length)) {
      for (const c of n.removed)
        t && this.adapter.setSelectedStateForElementIndex(c, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(c, !1);
      for (const c of n.added)
        t && this.adapter.setSelectedStateForElementIndex(c, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(c, !0);
      this.selectedIndex_ = e, this.adapter.notifySelected(e, n);
    }
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(e) {
    this.selectedIndex_ === B.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, Se.ARIA_CURRENT));
    const t = this.ariaCurrentAttrValue_ !== null, r = t ? Se.ARIA_CURRENT : Se.ARIA_SELECTED;
    this.selectedIndex_ !== B.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, r, "false");
    const n = t ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, r, n);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === B.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== B.UNSET_INDEX ? e = this.selectedIndex_ : ge(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
  }
  isIndexValid_(e) {
    if (e instanceof Set) {
      if (!this.isMulti_)
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      if (e.size === 0)
        return !0;
      {
        let t = !1;
        for (const r of e)
          if (t = this.isIndexInRange_(r), t)
            break;
        return t;
      }
    } else if (typeof e == "number") {
      if (this.isMulti_)
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + e);
      return e === B.UNSET_INDEX || this.isIndexInRange_(e);
    } else
      return !1;
  }
  isIndexInRange_(e) {
    const t = this.adapter.getListItemCount();
    return e >= 0 && e < t;
  }
  /**
   * Sets selected index on user action, toggles checkbox / radio based on
   * toggleCheckbox value. User interaction should not toggle list item(s) when
   * disabled.
   */
  setSelectedIndexOnAction_(e, t, r) {
    if (this.adapter.getDisabledStateForElementIndex(e))
      return;
    let n = e;
    this.isMulti_ && (n = /* @__PURE__ */ new Set([e])), this.isIndexValid_(n) && (this.isMulti_ ? this.toggleMultiAtIndex(e, r, t) : t || r ? this.setSingleSelectionAtIndex_(e, t) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(B.UNSET_INDEX), t && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, t, r = !0) {
    let n = !1;
    t === void 0 ? n = !this.adapter.getSelectedStateForElementIndex(e) : n = t;
    const c = Oe(this.selectedIndex_);
    n ? c.add(e) : c.delete(e), this.setMultiSelectionAtIndex_(c, r);
  }
}
function Fi(i, e = 50) {
  let t;
  return function(r = !0) {
    clearTimeout(t), t = setTimeout(() => {
      i(r);
    }, e);
  };
}
const _e = (i) => i.hasAttribute("mwc-list-item");
function Ni() {
  const i = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), i();
}
class q extends Qe {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = Ye, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = Fi(this.layout.bind(this));
    this.debouncedLayout = (t = !0) => {
      Ni.call(this), e(t);
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
    const t = (e = this.assignedElements) !== null && e !== void 0 ? e : [], r = [];
    for (const a of t)
      _e(a) && (r.push(a), a._managingList = this), a.hasAttribute("divider") && !a.hasAttribute("role") && a.setAttribute("role", "separator");
    this.items_ = r;
    const n = /* @__PURE__ */ new Set();
    if (this.items_.forEach((a, s) => {
      this.itemRoles ? a.setAttribute("role", this.itemRoles) : a.removeAttribute("role"), a.selected && n.add(s);
    }), this.multi)
      this.select(n);
    else {
      const a = n.size ? n.entries().next().value[1] : -1;
      this.select(a);
    }
    const c = new Event("items-updated", { bubbles: !0, composed: !0 });
    this.dispatchEvent(c);
  }
  get selected() {
    const e = this.index;
    if (!ge(e))
      return e === -1 ? null : this.items[e];
    const t = [];
    for (const r of e)
      t.push(this.items[r]);
    return t;
  }
  get index() {
    return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
  }
  render() {
    const e = this.innerRole === null ? void 0 : this.innerRole, t = this.innerAriaLabel === null ? void 0 : this.innerAriaLabel, r = this.rootTabbable ? "0" : "-1";
    return b`
      <!-- @ts-ignore -->
      <ul
          tabindex=${r}
          role="${ae(e)}"
          aria-label="${ae(t)}"
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
    const t = (e = this.assignedElements) !== null && e !== void 0 ? e : [];
    return this.emptyMessage !== void 0 && t.length === 0 ? b`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      ` : null;
  }
  firstUpdated() {
    super.firstUpdated(), this.items.length || (this.mdcFoundation.setMulti(this.multi), this.layout());
  }
  onFocusIn(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const t = this.getIndexOfTarget(e);
      this.mdcFoundation.handleFocusIn(e, t);
    }
  }
  onFocusOut(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const t = this.getIndexOfTarget(e);
      this.mdcFoundation.handleFocusOut(e, t);
    }
  }
  onKeydown(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const t = this.getIndexOfTarget(e), r = e.target, n = _e(r);
      this.mdcFoundation.handleKeydown(e, n, t);
    }
  }
  onRequestSelected(e) {
    if (this.mdcFoundation) {
      let t = this.getIndexOfTarget(e);
      if (t === -1 && (this.layout(), t = this.getIndexOfTarget(e), t === -1) || this.items[t].disabled)
        return;
      const n = e.detail.selected, c = e.detail.source;
      this.mdcFoundation.handleSingleSelection(t, c === "interaction", n), e.stopPropagation();
    }
  }
  getIndexOfTarget(e) {
    const t = this.items, r = e.composedPath();
    for (const n of r) {
      let c = -1;
      if (vi(n) && _e(n) && (c = t.indexOf(n)), c !== -1)
        return c;
    }
    return -1;
  }
  createAdapter() {
    return this.mdcAdapter = {
      getListItemCount: () => this.mdcRoot ? this.items.length : 0,
      getFocusedElementIndex: this.getFocusedItemIndex,
      getAttributeForElementIndex: (e, t) => {
        if (!this.mdcRoot)
          return "";
        const n = this.items[e];
        return n ? n.getAttribute(t) : "";
      },
      setAttributeForElementIndex: (e, t, r) => {
        if (!this.mdcRoot)
          return;
        const n = this.items[e];
        n && n.setAttribute(t, r);
      },
      focusItemAtIndex: (e) => {
        const t = this.items[e];
        t && t.focus();
      },
      setTabIndexForElementIndex: (e, t) => {
        const r = this.items[e];
        r && (r.tabindex = t);
      },
      notifyAction: (e) => {
        const t = { bubbles: !0, composed: !0 };
        t.detail = { index: e };
        const r = new CustomEvent("action", t);
        this.dispatchEvent(r);
      },
      notifySelected: (e, t) => {
        const r = { bubbles: !0, composed: !0 };
        r.detail = { index: e, diff: t };
        const n = new CustomEvent("selected", r);
        this.dispatchEvent(n);
      },
      isFocusInsideList: () => Si(this),
      isRootFocused: () => {
        const e = this.mdcRoot;
        return e.getRootNode().activeElement === e;
      },
      setDisabledStateForElementIndex: (e, t) => {
        const r = this.items[e];
        r && (r.disabled = t);
      },
      getDisabledStateForElementIndex: (e) => {
        const t = this.items[e];
        return t ? t.disabled : !1;
      },
      setSelectedStateForElementIndex: (e, t) => {
        const r = this.items[e];
        r && (r.selected = t);
      },
      getSelectedStateForElementIndex: (e) => {
        const t = this.items[e];
        return t ? t.selected : !1;
      },
      setActivatedStateForElementIndex: (e, t) => {
        const r = this.items[e];
        r && (r.activated = t);
      }
    }, this.mdcAdapter;
  }
  selectUi(e, t = !1) {
    const r = this.items[e];
    r && (r.selected = !0, r.activated = t);
  }
  deselectUi(e) {
    const t = this.items[e];
    t && (t.selected = !1, t.activated = !1);
  }
  select(e) {
    this.mdcFoundation && this.mdcFoundation.setSelectedIndex(e);
  }
  toggle(e, t) {
    this.multi && this.mdcFoundation.toggleMultiAtIndex(e, t);
  }
  onListItemConnected(e) {
    const t = e.target;
    this.layout(this.items.indexOf(t) === -1);
  }
  layout(e = !0) {
    e && this.updateItems();
    const t = this.items[0];
    for (const r of this.items)
      r.tabindex = -1;
    t && (this.noninteractive ? this.previousTabindex || (this.previousTabindex = t) : t.tabindex = 0), this.itemsReadyResolver();
  }
  getFocusedItemIndex() {
    if (!this.mdcRoot || !this.items.length)
      return -1;
    const e = Rt();
    if (!e.length)
      return -1;
    for (let t = e.length - 1; t >= 0; t--) {
      const r = e[t];
      if (_e(r))
        return this.items.indexOf(r);
    }
    return -1;
  }
  focusItemAtIndex(e) {
    for (const t of this.items)
      if (t.tabindex === 0) {
        t.tabindex = -1;
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
d([
  u({ type: String })
], q.prototype, "emptyMessage", void 0);
d([
  M(".mdc-deprecated-list")
], q.prototype, "mdcRoot", void 0);
d([
  _t("", !0, "*")
], q.prototype, "assignedElements", void 0);
d([
  _t("", !0, '[tabindex="0"]')
], q.prototype, "tabbableElements", void 0);
d([
  u({ type: Boolean }),
  re(function(i) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(i);
  })
], q.prototype, "activatable", void 0);
d([
  u({ type: Boolean }),
  re(function(i, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(i), e !== void 0 && this.layout();
  })
], q.prototype, "multi", void 0);
d([
  u({ type: Boolean }),
  re(function(i) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(i);
  })
], q.prototype, "wrapFocus", void 0);
d([
  u({ type: String }),
  re(function(i, e) {
    e !== void 0 && this.updateItems();
  })
], q.prototype, "itemRoles", void 0);
d([
  u({ type: String })
], q.prototype, "innerRole", void 0);
d([
  u({ type: String })
], q.prototype, "innerAriaLabel", void 0);
d([
  u({ type: Boolean })
], q.prototype, "rootTabbable", void 0);
d([
  u({ type: Boolean, reflect: !0 }),
  re(function(i) {
    var e, t;
    if (i) {
      const r = (t = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && t !== void 0 ? t : null;
      this.previousTabindex = r, r && r.setAttribute("tabindex", "-1");
    } else !i && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], q.prototype, "noninteractive", void 0);
var Pi = Object.defineProperty, Oi = Object.getOwnPropertyDescriptor, se = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Oi(e, t) : e, c = i.length - 1, a; c >= 0; c--)
    (a = i[c]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && Pi(e, t, n), n;
};
function qe(i) {
  return !i.closest("filtered-list") || !i.parentElement || i.parentElement instanceof K ? i : qe(i.parentElement);
}
function Mi(i, e) {
  const t = i.innerText + `
`, r = Array.from(i.children).map((s) => s.innerText).join(`
`), n = i.value, c = (t + r + n).toUpperCase(), a = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  a.length === 1 && a[0] === "" || a.every((s) => new RegExp(
    `*${s}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(c)) ? qe(i).classList.remove("hidden") : qe(i).classList.add("hidden");
}
let K = class extends q {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((i) => i instanceof le);
  }
  get isAllSelected() {
    return this.items.filter((i) => !i.disabled).filter((i) => i instanceof le).every((i) => i.selected);
  }
  get isSomeSelected() {
    return this.items.filter((i) => !i.disabled).filter((i) => i instanceof le).some((i) => i.selected);
  }
  onCheckAll() {
    const i = !this.isAllSelected;
    this.items.filter((e) => !e.disabled && !e.classList.contains("hidden")).forEach((e) => e.selected = i);
  }
  onFilterInput() {
    Array.from(
      this.querySelectorAll(
        "mwc-list-item, mwc-check-list-item, mwc-radio-list-item"
      )
    ).forEach(
      (i) => Mi(i, this.searchField.value)
    );
  }
  onListItemConnected(i) {
    super.onListItemConnected(i), this.requestUpdate();
  }
  update(i) {
    super.update(i), this.onFilterInput();
  }
  renderCheckAll() {
    return this.existCheckListItem && !this.disableCheckAll ? b`<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
      this.onCheckAll();
    }}
          ></mwc-checkbox
        ></mwc-formfield>` : b``;
  }
  render() {
    return b`<div id="tfcontainer">
        <abbr title="${this.searchFieldLabel ?? pe("filter")}"
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
K.styles = ue`
    ${Yt(ri.styles)}

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
se([
  u({ type: String })
], K.prototype, "searchFieldLabel", 2);
se([
  u({ type: Boolean })
], K.prototype, "disableCheckAll", 2);
se([
  k()
], K.prototype, "existCheckListItem", 1);
se([
  k()
], K.prototype, "isAllSelected", 1);
se([
  k()
], K.prototype, "isSomeSelected", 1);
se([
  M("mwc-textfield")
], K.prototype, "searchField", 2);
K = se([
  ie("filtered-list")
], K);
function Gi(i, e) {
  const t = i.cloneNode(!1);
  return Object.entries(e).forEach(([r, n]) => {
    n === null ? t.removeAttribute(r) : t.setAttribute(r, n);
  }), t;
}
var zi = Object.defineProperty, Bi = Object.getOwnPropertyDescriptor, X = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Bi(e, t) : e, c = i.length - 1, a; c >= 0; c--)
    (a = i[c]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && zi(e, t, n), n;
};
let U = class extends ii {
  constructor() {
    super(), this.nullable = !1, this.multipliers = [null, ""], this.multiplierIndex = 0, this.unit = "", this.isNull = !1, this.defaultValue = "", this.reservedValues = [], this.disabledSwitch = !1, this.nulled = null, this.disabledSwitch = this.hasAttribute("disabled");
  }
  get multiplier() {
    return this.unit == "" ? null : this.multipliers[this.multiplierIndex] ?? this.multipliers[0] ?? null;
  }
  set multiplier(i) {
    const e = this.multipliers.indexOf(i);
    e >= 0 && (this.multiplierIndex = e), this.suffix = (this.multiplier ?? "") + this.unit;
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(i) {
    !this.nullable || i === this.isNull || (this.isNull = i, this.null ? this.disable() : this.enable());
  }
  get maybeValue() {
    return this.null ? null : this.value;
  }
  set maybeValue(i) {
    i === null ? this.null = !0 : (this.null = !1, this.value = i);
  }
  selectMultiplier(i) {
    this.multiplier = this.multipliers[i.detail.index];
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
    return this.reservedValues && this.reservedValues.some((i) => i === this.value) ? (this.setCustomValidity(pe("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? b`<div style="position:relative;">
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
      </div>` : b``;
  }
  renderMulplierList() {
    return b`${this.multipliers.map(
      (i) => b`<mwc-list-item ?selected=${i === this.multiplier}
          >${i === null ? pe("textfield.noMultiplier") : i}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? b`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : b``;
  }
  render() {
    return b`
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
X([
  u({ type: Boolean })
], U.prototype, "nullable", 2);
X([
  u({ type: Array })
], U.prototype, "multipliers", 2);
X([
  u({ type: String })
], U.prototype, "multiplier", 1);
X([
  u({ type: String })
], U.prototype, "unit", 2);
X([
  k()
], U.prototype, "null", 1);
X([
  u({ type: String })
], U.prototype, "maybeValue", 1);
X([
  u({ type: String })
], U.prototype, "defaultValue", 2);
X([
  u({ type: Array })
], U.prototype, "reservedValues", 2);
X([
  M("mwc-switch")
], U.prototype, "nullSwitch", 2);
X([
  M("mwc-menu")
], U.prototype, "multiplierMenu", 2);
X([
  M("mwc-icon-button")
], U.prototype, "multiplierButton", 2);
U = X([
  ie("wizard-textfield")
], U);
var Hi = Object.defineProperty, Vi = Object.getOwnPropertyDescriptor, oe = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Vi(e, t) : e, c = i.length - 1, a; c >= 0; c--)
    (a = i[c]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && Hi(e, t, n), n;
};
let te = class extends ni {
  constructor() {
    super(), this.nullable = !1, this.isNull = !1, this.defaultValue = "", this.reservedValues = [], this.disabledSwitch = !1, this.nulled = null, this.disabledSwitch = this.hasAttribute("disabled");
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(i) {
    !this.nullable || i === this.isNull || (this.isNull = i, this.null ? this.disable() : this.enable());
  }
  get maybeValue() {
    return this.null ? null : this.value;
  }
  set maybeValue(i) {
    i === null ? this.null = !0 : (this.null = !1, this.value = i);
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
    return this.nullable ? b`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : b``;
  }
  render() {
    return b`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
oe([
  u({ type: Boolean })
], te.prototype, "nullable", 2);
oe([
  k()
], te.prototype, "null", 1);
oe([
  u({ type: String })
], te.prototype, "maybeValue", 1);
oe([
  u({ type: String })
], te.prototype, "defaultValue", 2);
oe([
  u({ type: Array })
], te.prototype, "reservedValues", 2);
oe([
  M("mwc-switch")
], te.prototype, "nullSwitch", 2);
te = oe([
  ie("wizard-select")
], te);
var Ui = Object.defineProperty, qi = Object.getOwnPropertyDescriptor, j = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? qi(e, t) : e, c = i.length - 1, a; c >= 0; c--)
    (a = i[c]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && Ui(e, t, n), n;
};
let H = class extends Ce {
  constructor() {
    super(...arguments), this.label = "", this.helper = "", this.nullable = !1, this.defaultChecked = !1, this.disabled = !1, this.isNull = !1, this.initChecked = !1, this.deactivateCheckbox = !1, this.nulled = null;
  }
  get maybeValue() {
    return this.null ? null : this.checked ? "true" : "false";
  }
  set maybeValue(i) {
    i === null ? this.null = !0 : (this.null = !1, this.checked = i === "true");
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(i) {
    !this.nullable || i === this.isNull || (this.isNull = i, this.null ? this.disable() : this.enable());
  }
  get checked() {
    return this.checkbox?.checked ?? this.initChecked;
  }
  set checked(i) {
    this.checkbox ? this.checkbox.checked = i : this.initChecked = i;
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
    return this.nullable ? b`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : b``;
  }
  render() {
    return b`
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
j([
  u({ type: String })
], H.prototype, "label", 2);
j([
  u({ type: String })
], H.prototype, "helper", 2);
j([
  u({ type: Boolean })
], H.prototype, "nullable", 2);
j([
  u({ type: Boolean })
], H.prototype, "defaultChecked", 2);
j([
  u({ type: String })
], H.prototype, "maybeValue", 1);
j([
  u({ type: Boolean })
], H.prototype, "disabled", 2);
j([
  k()
], H.prototype, "null", 1);
j([
  k()
], H.prototype, "checked", 1);
j([
  k()
], H.prototype, "deactivateCheckbox", 2);
j([
  k()
], H.prototype, "formfieldLabel", 1);
j([
  M("mwc-switch")
], H.prototype, "nullSwitch", 2);
j([
  M("mwc-checkbox")
], H.prototype, "checkbox", 2);
H = j([
  ie("wizard-checkbox")
], H);
function ji(i) {
  return typeof i == "function";
}
function Wi(i, e) {
  if (!i)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const t = ji(i) ? i : () => i;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: t, ...e?.detail }
  });
}
function N(i) {
  const e = i.split(">"), t = e.pop() ?? "";
  return [e.join(">"), t];
}
const E = ":not(*)";
function Xi(i) {
  return `${i.getAttribute("version")}	${i.getAttribute("revision")}`;
}
function Ki(i, e) {
  const [t, r] = e.split("	");
  return !t || !r ? E : `${i}[version="${t}"][revision="${r}"]`;
}
function ot(i) {
  return w(i.parentElement) + ">" + i.getAttribute("connectivityNode");
}
function dt(i, e) {
  const [t, r] = N(e), n = C[i].parents.flatMap(
    (c) => $(c, t).split(",")
  );
  return F(
    n,
    [">"],
    [`${i}[connectivityNode="${r}"]`]
  ).map((c) => c.join("")).join(",");
}
function Zi(i) {
  const [e, t, r, n, c, a] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((s) => i.getAttribute(s));
  return e === "None" ? `${w(i.parentElement)}>(${n} ${a} ${c})` : `${e} ${t || "(Client)"}/${r ?? ""} ${n} ${c ?? ""}`;
}
function Qi(i, e) {
  if (e.endsWith(")")) {
    const [f, S] = N(e), [A, P, D] = S.substring(1, S.length - 1).split(" ");
    if (!A || !P) return E;
    const O = C[i].parents.flatMap(
      (W) => $(W, f).split(",")
    );
    return F(
      O,
      [">"],
      [`${i}[iedName="None"][lnClass="${A}"][lnType="${P}"][lnInst="${D}"]`]
    ).map((W) => W.join("")).join(",");
  }
  const [t, r, n, c, a] = e.split(/[ /]/);
  if (!t || !r || !c) return E;
  const [
    s,
    o,
    m,
    h,
    x
  ] = [
    [`[iedName="${t}"]`],
    r === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${r}"]`],
    n ? [`[prefix="${n}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    a ? [`[lnInst="${a}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return F(
    [i],
    s,
    o,
    m,
    h,
    x
  ).map((f) => f.join("")).join(",");
}
function Ji(i) {
  return `${w(i.parentElement)}>${i.getAttribute(
    "iedName"
  )} ${i.getAttribute("apName")}`;
}
function Yi(i, e) {
  const [t, r] = N(e), [n, c] = r.split(" ");
  return `${$(
    "IED",
    t
  )}>${i}[iedName="${n}"][apName="${c}"]`;
}
function er(i) {
  return `${w(i.parentElement)}>${i.getAttribute("associationID") ?? ""}`;
}
function tr(i, e) {
  const [t, r] = N(e);
  return r ? `${$(
    "Server",
    t
  )}>${i}[associationID="${r}"]` : E;
}
function ir(i) {
  return `${w(i.closest("IED"))}>>${i.getAttribute("inst")}`;
}
function rr(i, e) {
  const [t, r] = e.split(">>");
  return r ? `IED[name="${t}"] ${i}[inst="${r}"]` : E;
}
function nr(i) {
  const e = i.textContent, [t, r, n, c, a] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((s) => i.getAttribute(s));
  return `${w(i.parentElement)}>${e} ${t || ""} ${r || ""}/${n ?? ""} ${c ?? ""} ${a ?? ""}`;
}
function cr(i, e) {
  const [t, r] = N(e), [n, c, a, s, o, m] = r.split(/[ /]/), [
    h,
    x,
    f,
    S,
    A,
    P
  ] = [
    C[i].parents.flatMap(
      (D) => $(D, t).split(",")
    ),
    [`${n}`],
    c ? [`[apRef="${c}"]`] : [":not([apRef])", '[apRef=""]'],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    m ? [`[lnInst="${m}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return F(
    h,
    [">"],
    [i],
    x,
    f,
    S,
    A,
    P
  ).map((D) => D.join("")).join(",");
}
function ar(i) {
  const [e, t, r, n, c, a, s, o] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((h) => i.getAttribute(h)), m = `${e}/${t ?? ""} ${r} ${n ?? ""}.${c} ${a || ""}`;
  return `${w(i.parentElement)}>${m} (${s}${o ? " [" + o + "]" : ""})`;
}
function sr(i, e) {
  const [t, r] = N(e), [n, c, a, s] = r.split(/[ /.]/), o = r.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), m = o && o[1] ? o[1] : "", h = o && o[2] ? o[2] : "", x = r.match(/\(([A-Z]{2})/), f = r.match(/ \[([0-9]{1,2})\]/), S = x && x[1] ? x[1] : "", A = f && f[1] ? f[1] : "", [
    P,
    D,
    O,
    W,
    me,
    De,
    Te,
    $e,
    Fe
  ] = [
    C[i].parents.flatMap(
      (he) => $(he, t).split(",")
    ),
    [`[ldInst="${n}"]`],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    s ? [`[lnInst="${s}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${m}"]`],
    h ? [`[daName="${h}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${S}"]`],
    A ? [`[ix="${A}"]`] : [":not([ix])", '[ix=""]']
  ];
  return F(
    P,
    [">"],
    [i],
    D,
    O,
    W,
    me,
    De,
    Te,
    $e,
    Fe
  ).map((he) => he.join("")).join(",");
}
function or(i) {
  if (!i.parentElement) return NaN;
  const e = w(i.parentElement), t = i.getAttribute("iedName"), r = i.getAttribute("intAddr"), n = Array.from(
    i.parentElement.querySelectorAll(`ExtRef[intAddr="${r}"]`)
  ).indexOf(i);
  if (r) return `${e}>${r}[${n}]`;
  const [
    c,
    a,
    s,
    o,
    m,
    h,
    x,
    f,
    S,
    A,
    P,
    D
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
  ].map((me) => i.getAttribute(me)), O = D ? `${x}:${D} ${f ?? ""}/${S ?? ""} ${A ?? ""} ${P ?? ""}` : "", W = `${t} ${c}/${a ?? ""} ${s} ${o ?? ""} ${m} ${h || ""}`;
  return `${e}>${O ? O + " " : ""}${W}${r ? `@${r}` : ""}`;
}
function dr(i, e) {
  const [t, r] = N(e), n = C[i].parents.flatMap(
    (fe) => $(fe, t).split(",")
  );
  if (r.endsWith("]")) {
    const [fe] = r.split("["), Zt = [`[intAddr="${fe}"]`];
    return F(n, [">"], [i], Zt).map((Qt) => Qt.join("")).join(",");
  }
  let c, a, s, o, m, h, x, f, S, A, P, D, O, W;
  !r.includes(":") && !r.includes("@") ? [c, a, s, o, m, h, x] = r.split(/[ /]/) : r.includes(":") && !r.includes("@") ? [
    f,
    S,
    A,
    P,
    D,
    O,
    c,
    a,
    s,
    o,
    m,
    h,
    x
  ] = r.split(/[ /:]/) : !r.includes(":") && r.includes("@") ? [c, a, s, o, m, h, x, W] = r.split(/[ /@]/) : [
    f,
    S,
    A,
    P,
    D,
    O,
    c,
    a,
    s,
    o,
    m,
    h,
    x,
    W
  ] = r.split(/[ /:@]/);
  const [
    me,
    De,
    Te,
    $e,
    Fe,
    he,
    Ht,
    Vt,
    Ut,
    qt,
    jt,
    Wt,
    Xt,
    Kt
  ] = [
    c ? [`[iedName="${c}"]`] : [":not([iedName])"],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    o ? [`[lnClass="${o}"]`] : [":not([lnClass])"],
    m ? [`[lnInst="${m}"]`] : [":not([lnInst])", '[lnInst=""]'],
    h ? [`[doName="${h}"]`] : [":not([doName])"],
    x ? [`[daName="${x}"]`] : [":not([daName])", '[daName=""]'],
    f ? [`[serviceType="${f}"]`] : [":not([serviceType])", '[serviceType=""]'],
    S ? [`[srcCBName="${S}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    A ? [`[srcLDInst="${A}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    P ? [`[srcPrefix="${P}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    D ? [`[srcLNClass="${D}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    O ? [`[srcLNInst="${O}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    W ? [`[intAddr="${W}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return F(
    n,
    [">"],
    [i],
    me,
    De,
    Te,
    $e,
    Fe,
    he,
    Ht,
    Vt,
    Ut,
    qt,
    jt,
    Wt,
    Xt,
    Kt
  ).map((fe) => fe.join("")).join(",");
}
function lr(i) {
  const [e, t, r] = ["prefix", "lnClass", "inst"].map(
    (n) => i.getAttribute(n)
  );
  return `${w(i.parentElement)}>${e ?? ""} ${t} ${r}`;
}
function pr(i, e) {
  const [t, r] = N(e), n = C[i].parents.flatMap(
    (x) => $(x, t).split(",")
  ), [c, a, s] = r.split(" ");
  if (!a) return E;
  const [o, m, h] = [
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    [`[inst="${s}"]`]
  ];
  return F(
    n,
    [">"],
    [i],
    o,
    m,
    h
  ).map((x) => x.join("")).join(",");
}
function ur(i) {
  const [e, t, r, n, c, a] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((s) => i.getAttribute(s));
  return `${w(i.parentElement)}>${t} ${e || ""} ${r}/${n ?? ""} ${c} ${a}`;
}
function mr(i, e) {
  const [t, r] = N(e), n = C[i].parents.flatMap(
    (O) => $(O, t).split(",")
  ), [c, a, s, o, m, h] = r.split(/[ /]/), [
    x,
    f,
    S,
    A,
    P,
    D
  ] = [
    c ? [`[iedName="${c}"]`] : [":not([iedName])", '[iedName=""]'],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${m}"]`],
    h ? [`[lnInst="${h}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return F(
    n,
    [">"],
    [i],
    x,
    f,
    S,
    A,
    P,
    D
  ).map((O) => O.join("")).join(",");
}
function lt(i) {
  const [e, t] = ["name", "ix"].map((r) => i.getAttribute(r));
  return `${w(i.parentElement)}>${e}${t ? "[" + t + "]" : ""}`;
}
function je(i, e, t = -1) {
  t === -1 && (t = e.split(">").length);
  const [r, n] = N(e), [c, a, s, o] = n.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!a) return E;
  if (t === 0) return `${i}[name="${a}"]`;
  const m = C[i].parents.flatMap(
    (f) => f === "SDI" ? je(f, r, t - 1).split(",") : $(f, r).split(",")
  ).filter((f) => !f.startsWith(E));
  if (m.length === 0) return E;
  const [h, x] = [
    [`[name="${a}"]`],
    o ? [`[ix="${o}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return F(
    m,
    [">"],
    [i],
    h,
    x
  ).map((f) => f.join("")).join(",");
}
function hr(i) {
  if (!i.parentElement) return NaN;
  const e = i.getAttribute("sGroup"), t = Array.from(i.parentElement.children).filter((r) => r.getAttribute("sGroup") === e).findIndex((r) => r.isSameNode(i));
  return `${w(i.parentElement)}>${e ? e + "." : ""} ${t}`;
}
function fr(i, e) {
  const [t, r] = N(e), [n, c] = r.split(" "), a = parseFloat(c), s = C[i].parents.flatMap(
    (h) => $(h, t).split(",")
  ), [o, m] = [
    n ? [`[sGroup="${n}"]`] : [""],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return F(
    s,
    [">"],
    [i],
    o,
    m
  ).map((h) => h.join("")).join(",");
}
function br(i) {
  const [e, t] = ["iedName", "apName"].map(
    (r) => i.getAttribute(r)
  );
  return `${e} ${t}`;
}
function gr(i, e) {
  const [t, r] = e.split(" ");
  return !t || !r ? E : `${i}[iedName="${t}"][apName="${r}"]`;
}
function pt(i) {
  const [e, t] = ["ldInst", "cbName"].map(
    (r) => i.getAttribute(r)
  );
  return `${e} ${t}`;
}
function ut(i, e) {
  const [t, r] = e.split(" ");
  return !t || !r ? E : `${i}[ldInst="${t}"][cbName="${r}"]`;
}
function yr(i) {
  if (!i.parentElement) return NaN;
  if (!i.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = i.getAttribute("type");
  return i.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${w(i.parentElement)}>${e}`;
}
function vr(i, e) {
  const [t, r] = N(e), [n, c] = [
    C[i].parents.flatMap(
      (a) => $(a, t).split(",")
    ),
    r ? [`[type="${r}"]`] : [""]
  ];
  return F(n, [">"], [i], c).map((a) => a.join("")).join(",");
}
function xr(i) {
  if (!i.parentElement) return NaN;
  const e = i.parentElement, t = i.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${w(i.parentElement)}>${t}`;
  const r = Array.from(i.parentElement.children).filter((n) => n.getAttribute("type") === t).findIndex((n) => n.isSameNode(i));
  return `${w(i.parentElement)}>${t} [${r}]`;
}
function Sr(i, e) {
  const [t, r] = N(e), [n] = r.split(" "), c = r && r.match(/\[([0-9]+)\]/) && r.match(/\[([0-9]+)\]/)[1] ? parseFloat(r.match(/\[([0-9]+)\]/)[1]) : NaN, [a, s, o] = [
    C[i].parents.flatMap(
      (m) => $(m, t).split(",")
    ),
    [`[type="${n}"]`],
    c ? [`:nth-child(${c + 1})`] : [""]
  ];
  return F(
    a,
    [">"],
    [i],
    s,
    o
  ).map((m) => m.join("")).join(",");
}
function _r(i) {
  return `${w(i.parentElement)}>${i.getAttribute("ord")}`;
}
function kr(i, e) {
  const [t, r] = N(e);
  return `${$("EnumType", t)}>${i}[ord="${r}"]`;
}
function Ar(i) {
  return `${w(i.parentElement)}>${i.getAttribute("type") || "8-MMS"}	${i.textContent}`;
}
function Ir(i, e) {
  const [t, r] = N(e), [n, c] = r.split("	"), [a] = [
    C[i].parents.flatMap(
      (s) => $(s, t).split(",")
    )
  ];
  return F(
    a,
    [">"],
    [i],
    [`[type="${n}"]`],
    [">"],
    [c]
  ).map((s) => s.join("")).join(",");
}
function Er() {
  return "";
}
function Cr() {
  return ":root";
}
function v(i) {
  return i.parentElement.tagName === "SCL" ? i.getAttribute("name") : `${w(i.parentElement)}>${i.getAttribute("name")}`;
}
function y(i, e, t = -1) {
  t === -1 && (t = e.split(">").length);
  const [r, n] = N(e);
  if (!n) return E;
  if (t === 0) return `${i}[name="${n}"]`;
  const c = C[i].parents;
  if (!c) return E;
  const a = c.flatMap(
    (s) => C[s].selector === C.Substation.selector ? y(s, r, t - 1).split(",") : $(s, r).split(",")
  ).filter((s) => !s.startsWith(E));
  return a.length === 0 ? E : F(a, [">"], [i], [`[name="${n}"]`]).map((s) => s.join("")).join(",");
}
function l(i) {
  return w(i.parentElement).toString();
}
function p(i, e) {
  const t = C[i].parents;
  if (!t) return E;
  const r = t.flatMap((n) => $(n, e).split(",")).filter((n) => !n.startsWith(E));
  return r.length === 0 ? E : F(r, [">"], [i]).map((n) => n.join("")).join(",");
}
function ke(i) {
  return `#${i.id}`;
}
function Ae(i, e) {
  const t = e.replace(/^#/, "");
  return t ? `${i}[id="${t}"]` : E;
}
const Ft = [
  "TransformerWinding",
  "ConductingEquipment"
], Nt = [
  "GeneralEquipment",
  "PowerTransformer",
  ...Ft
], We = ["Substation", "VoltageLevel", "Bay"], Pt = ["Process", "Line"], Ot = ["EqSubFunction", "EqFunction"], wr = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Nt,
  ...We,
  ...Pt,
  ...Ot
], Mt = ["ConnectivityNode", ...wr], Rr = ["GOOSESecurity", "SMVSecurity"], Lr = ["SubNetwork", ...Rr, ...Mt], Dr = ["BDA", "DA"], Tr = ["SampledValueControl", "GSEControl"], $r = ["LogControl", "ReportControl"], Fr = [...Tr, ...$r], Nr = ["GSE", "SMV"], Pr = [
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
  ...Fr,
  ...Nr,
  ...Dr
], ce = ["LN0", "LN"], Or = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Mr = ["Subject", "IssuerName"], Gr = ["MinTime", "MaxTime"], zr = ["LNodeType", "DOType", "DAType", "EnumType"], Br = [
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
], Hr = ["DynDataSet", "ConfDataSet"], Vr = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...Hr
], Ur = ["ConfLogControl", "ConfSigRef"], qr = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], jr = ["SCL", ...Lr, ...Pr, ...zr], Gt = [
  ...jr,
  ...Or,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Mr,
  ...Gr,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...ce,
  ...Br,
  "DynAssociation",
  "SettingGroups",
  ...Vr,
  ...Ur,
  ...qr,
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
], Wr = new Set(Gt);
function et(i) {
  return Wr.has(i);
}
const Le = ["Text", "Private"], Y = [...Le], I = [...Le], Ie = [...Le], mt = [...I, "Val"], zt = [...Y, "LNode"], ee = [...zt], Xe = [...ee], Me = [
  ...ee,
  "PowerTransformer",
  "GeneralEquipment"
], ht = [
  ...Xe,
  "Terminal"
], ft = [...I, "Address"], Bt = [...Y], bt = [...Bt, "IEDName"], gt = [
  ...I,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], yt = [
  ...ee,
  "GeneralEquipment",
  "Function"
], vt = [...Bt, "TrgOps"], xt = [
  ...ee,
  "GeneralEquipment",
  "EqSubFunction"
], C = {
  AccessControl: {
    identity: l,
    selector: p,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: v,
    selector: y,
    parents: ["IED"],
    children: [
      ...Y,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: l,
    selector: p,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: er,
    selector: tr,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: l,
    selector: p,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: v,
    selector: y,
    parents: ["DAType"],
    children: [...mt]
  },
  BitRate: {
    identity: l,
    selector: p,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: v,
    selector: y,
    parents: ["VoltageLevel"],
    children: [
      ...Me,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: ur,
    selector: mr,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: l,
    selector: p,
    parents: ["SCL"],
    children: [...I, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: v,
    selector: y,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...ht,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: l,
    selector: p,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: br,
    selector: gr,
    parents: ["SubNetwork"],
    children: [...I, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: v,
    selector: y,
    parents: ["Bay", "Line"],
    children: [...zt]
  },
  DA: {
    identity: v,
    selector: y,
    parents: ["DOType"],
    children: [...mt]
  },
  DAI: {
    identity: lt,
    selector: je,
    parents: ["DOI", "SDI"],
    children: [...I, "Val"]
  },
  DAType: {
    identity: ke,
    selector: Ae,
    parents: ["DataTypeTemplates"],
    children: [...Ie, "BDA", "ProtNs"]
  },
  DO: {
    identity: v,
    selector: y,
    parents: ["LNodeType"],
    children: [...I]
  },
  DOI: {
    identity: v,
    selector: y,
    parents: [...ce],
    children: [...I, "SDI", "DAI"]
  },
  DOType: {
    identity: ke,
    selector: Ae,
    parents: ["DataTypeTemplates"],
    children: [...Ie, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: v,
    selector: y,
    parents: [...ce],
    children: [...Y, "FCDA"]
  },
  DataSetDirectory: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: l,
    selector: p,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: ke,
    selector: Ae,
    parents: ["DataTypeTemplates"],
    children: [...Ie, "EnumVal"]
  },
  EnumVal: {
    identity: _r,
    selector: kr,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: v,
    selector: y,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...xt]
  },
  EqSubFunction: {
    identity: v,
    selector: y,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...xt]
  },
  ExtRef: {
    identity: or,
    selector: dr,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: ar,
    selector: sr,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: v,
    selector: y,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...ee,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: v,
    selector: y,
    parents: [
      "SubFunction",
      "Function",
      ...Pt,
      ...Ot,
      ...We
    ],
    children: [...Xe, "EqFunction"]
  },
  GetCBValues: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: v,
    selector: y,
    parents: ["AccessPoint"],
    children: [...Y, "Subject", "IssuerName"]
  },
  GSE: {
    identity: pt,
    selector: ut,
    parents: ["ConnectedAP"],
    children: [...ft, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: v,
    selector: y,
    parents: ["LN0"],
    children: [...bt, "Protocol"]
  },
  GSESettings: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: l,
    selector: p,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: l,
    selector: p,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: Xi,
    selector: Ki,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: v,
    selector: y,
    parents: ["SCL"],
    children: [...I, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: nr,
    selector: cr,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: l,
    selector: p,
    parents: [...ce],
    children: [...I, "ExtRef"]
  },
  IssuerName: {
    identity: l,
    selector: p,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: Ji,
    selector: Yi,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: ir,
    selector: rr,
    parents: ["Server"],
    children: [...I, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: lr,
    selector: pr,
    parents: ["AccessPoint", "LDevice"],
    children: [...gt]
  },
  LN0: {
    identity: l,
    selector: p,
    parents: ["LDevice"],
    children: [
      ...gt,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: Zi,
    selector: Qi,
    parents: [...Mt],
    children: [...I]
  },
  LNodeType: {
    identity: ke,
    selector: Ae,
    parents: ["DataTypeTemplates"],
    children: [...Ie, "DO"]
  },
  Line: {
    identity: v,
    selector: y,
    parents: ["Process", "SCL"],
    children: [
      ...yt,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: v,
    selector: y,
    parents: [...ce],
    children: [...I]
  },
  LogControl: {
    identity: v,
    selector: y,
    parents: [...ce],
    children: [...vt]
  },
  LogSettings: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: l,
    selector: p,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: l,
    selector: p,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: l,
    selector: p,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: ot,
    selector: dt,
    parents: ["TransformerWinding"],
    children: [...I]
  },
  OptFields: {
    identity: l,
    selector: p,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: xr,
    selector: Sr,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: yr,
    selector: vr,
    parents: ["ConnectedAP"],
    children: [...I, "P"]
  },
  PowerTransformer: {
    identity: v,
    selector: y,
    parents: [...We],
    children: [
      ...Xe,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => E,
    parents: [],
    children: []
  },
  Process: {
    identity: v,
    selector: y,
    parents: ["Process", "SCL"],
    children: [
      ...yt,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: Ar,
    selector: Ir,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: l,
    selector: p,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: v,
    selector: y,
    parents: [...ce],
    children: [...vt, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: l,
    selector: p,
    parents: ["ReportControl"],
    children: [...I, "ClientLN"]
  },
  SamplesPerSec: {
    identity: l,
    selector: p,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: v,
    selector: y,
    parents: ["LN0"],
    children: [...bt, "SmvOpts"]
  },
  SecPerSamples: {
    identity: l,
    selector: p,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: Er,
    selector: Cr,
    parents: [],
    children: [
      ...Le,
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
    identity: lt,
    selector: je,
    parents: ["DOI", "SDI"],
    children: [...I, "SDI", "DAI"]
  },
  SDO: {
    identity: v,
    selector: y,
    parents: ["DOType"],
    children: [...Y]
  },
  Server: {
    identity: l,
    selector: p,
    parents: ["AccessPoint"],
    children: [
      ...I,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: l,
    selector: p,
    parents: ["AccessPoint"],
    children: [...I]
  },
  Services: {
    identity: l,
    selector: p,
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
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: l,
    selector: p,
    parents: ["LN0"],
    children: [...I]
  },
  SettingGroups: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: l,
    selector: p,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: l,
    selector: p,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: pt,
    selector: ut,
    parents: ["ConnectedAP"],
    children: [...ft]
  },
  SmvOpts: {
    identity: l,
    selector: p,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: v,
    selector: y,
    parents: ["AccessPoint"],
    children: [...Y, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: v,
    selector: y,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...Ft
    ],
    children: [...ee, "EqFunction"]
  },
  SubFunction: {
    identity: v,
    selector: y,
    parents: ["SubFunction", "Function"],
    children: [
      ...ee,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: v,
    selector: y,
    parents: ["Communication"],
    children: [...Y, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: l,
    selector: p,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: v,
    selector: y,
    parents: ["SCL"],
    children: [...Me, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: v,
    selector: y,
    parents: ["TransformerWinding"],
    children: [...ee, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: ot,
    selector: dt,
    parents: [...Nt],
    children: [...I]
  },
  Text: {
    identity: l,
    selector: p,
    parents: Gt.filter((i) => i !== "Text" && i !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: l,
    selector: p,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: v,
    selector: y,
    parents: ["PowerTransformer"],
    children: [
      ...ht,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: l,
    selector: p,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: hr,
    selector: fr,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: l,
    selector: p,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: v,
    selector: y,
    parents: ["Substation"],
    children: [...Me, "Voltage", "Bay", "Function"]
  }
};
function $(i, e) {
  return typeof e != "string" ? E : et(i) ? C[i].selector(i, e) : i;
}
function Xr(i, e, t) {
  if (typeof t != "string" || !et(e)) return null;
  const r = i.querySelector(C[e].selector(e, t));
  return r === null || Ee(r) ? r : Array.from(
    i.querySelectorAll(C[e].selector(e, t))
  ).find(Ee) ?? null;
}
function w(i) {
  if (i === null) return NaN;
  if (i.closest("Private")) return NaN;
  const e = i.tagName;
  return et(e) ? C[e].identity(i) : NaN;
}
kt((i) => (e) => {
  Object.keys(i).length ? e.setValue(i) : e.setValue("");
});
function F(...i) {
  return i.reduce(
    (e, t) => e.flatMap((r) => t.map((n) => [r, n].flat())),
    [[]]
  );
}
function Ee(i) {
  return !i.closest("Private");
}
const Kr = 99;
Array(Kr).fill(1).map((i, e) => `${e + 1}`);
var Zr = Object.defineProperty, Qr = (i, e, t, r) => {
  for (var n = void 0, c = i.length - 1, a; c >= 0; c--)
    (a = i[c]) && (n = a(e, t, n) || n);
  return n && Zr(e, t, n), n;
};
function Jr(i, e) {
  const t = i.getAttribute("name"), r = i.getAttribute("manufacturer");
  return !t || r !== "SEL" ? [] : Array.from(i.getElementsByTagName("DAI")).filter((n) => Ee(n)).filter((n) => n.getAttributeNS(
    "http://www.selinc.com/2006/61850",
    "datasrc"
  )?.startsWith("db:")).map((n) => {
    const c = n.getAttributeNS(
      "http://www.selinc.com/2006/61850",
      "datasrc"
    ), a = c ? c.replace("db:", "") : null, s = e.find((o) => o[2] === a && o[1] === t)?.[0] ?? null;
    return s ? { desc: s, tag: "DAI", identity: w(n) } : null;
  }).filter((n) => n);
}
function Yr(i) {
  return (e, t, r) => {
    const c = r.selected.map((a) => {
      const s = a.querySelector("span").textContent, [o, m] = a.value.split(" | "), h = Xr(i, o, m), x = Gi(h, { desc: s });
      return { old: { element: h }, new: { element: x } };
    });
    return [
      {
        title: pe("updatedesc.sel"),
        actions: c
      }
    ];
  };
}
function en(i, e) {
  return [
    {
      title: pe("wizard.title.add", { tagName: "desc" }),
      primary: {
        label: pe("save"),
        icon: "save",
        action: Yr(i)
      },
      content: [
        b`<filtered-list multi
          >${Array.from(
          e.map(
            (t) => b`<mwc-check-list-item
                  twoline
                  selected
                  value="${t.tag + " | " + t.identity}"
                  ><span>${t.desc}</span
                  ><span slot="secondary"
                    >${t.tag + " | " + t.identity}</span
                  ></mwc-check-list-item
                >`
          )
        )}</filtered-list
        >`
      ]
    }
  ];
}
function tn(i, e) {
  const t = '"', r = "\\", n = [];
  let c = !1;
  for (let a = 0, s = 0, o = 0; o < i.length; o++) {
    const m = i[o], h = i[o + 1];
    if (n[a] = n[a] || [], n[a][s] = n[a][s] || "", m === r) {
      n[a][s] += h, ++o;
      continue;
    }
    if (m === t) {
      c = !c;
      continue;
    }
    if (!c) {
      if (m === e) {
        ++s, n[a][s] = "";
        continue;
      }
      if (m === `
` || m === "\r") {
        ++a, s = 0, m === "\r" && h === `
` && ++o;
        continue;
      }
    }
    n[a][s] += m;
  }
  return n;
}
function rn(i) {
  let e = 0, t = 0;
  const r = '"';
  let n = !1;
  for (const c of i) {
    if (c === r) {
      n = !n;
      continue;
    }
    if (!n) {
      if (c === ";") {
        t++;
        continue;
      }
      if (c === ",") {
        e++;
        continue;
      }
    }
  }
  return e > t ? "," : ";";
}
class nn extends Ce {
  processSignalList(e) {
    const t = tn(e, rn(e)), r = Array.from(this.doc.querySelectorAll("IED")).filter((n) => Ee(n)).flatMap((n) => Jr(n, t));
    this.dispatchEvent(Wi(en(this.doc, r)));
  }
  async onFileInput(e) {
    const t = e.target?.files?.item(0) ?? !1;
    t && this.processSignalList(await t.text());
  }
  /** Entry point for this plug-in */
  async run() {
    this.pluginFileUI.click();
  }
  render() {
    return b`<input @click=${(e) => e.target.value = ""} @change=${(e) => this.onFileInput(
      e
    )} id="plugin-input" accept=".csv" type="file"></input>`;
  }
  static {
    this.styles = ue`
    input {
      width: 0;
      height: 0;
      opacity: 0;
    }
  `;
  }
}
Qr([
  M("#plugin-input")
], nn.prototype, "pluginFileUI");
export {
  nn as default
};
