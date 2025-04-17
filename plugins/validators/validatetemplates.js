import { LitElement as ce, query as q, property as m, state as k, html as x, css as Ae, customElement as X, queryAsync as it, eventOptions as Mt } from "lit-element";
import { NodePart as Tt, AttributePart as Ot, directive as rt } from "lit-html";
import { Select as zt } from "@material/mwc-select";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
import { TextField as Gt } from "@material/mwc-textfield";
import "@material/mwc-formfield";
const Bt = 1e3 * 60, Fe = "langChanged";
function qt(e, t, i) {
  return Object.entries(ye(t || {})).reduce((r, [n, c]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(ye(c))), e);
}
function Ht(e, t) {
  const i = e.split(".");
  let r = t.strings;
  for (; r != null && i.length > 0; )
    r = r[i.shift()];
  return r != null ? r.toString() : null;
}
function ye(e) {
  return typeof e == "function" ? e() : e;
}
const Vt = () => ({
  loader: () => Promise.resolve({}),
  empty: (e) => `[${e}]`,
  lookup: Ht,
  interpolate: qt,
  translationCache: {}
});
let jt = Vt();
function Ut(e, t) {
  const i = (r) => e(r.detail);
  return window.addEventListener(Fe, i, t), () => window.removeEventListener(Fe, i);
}
function M(e, t, i = jt) {
  let r = i.translationCache[e] || (i.translationCache[e] = i.lookup(e, i) || i.empty(e, i));
  return t = t != null ? ye(t) : null, t != null ? i.interpolate(r, t, i) : r;
}
function nt(e) {
  return e instanceof Tt ? e.startNode.isConnected : e instanceof Ot ? e.committer.element.isConnected : e.element.isConnected;
}
function Wt(e) {
  for (const [t] of e)
    nt(t) || e.delete(t);
}
function Xt(e) {
  "requestIdleCallback" in window ? window.requestIdleCallback(e) : setTimeout(e);
}
function Zt(e, t) {
  setInterval(() => Xt(() => Wt(e)), t);
}
const we = /* @__PURE__ */ new Map();
function Kt() {
  Ut((e) => {
    for (const [t, i] of we)
      nt(t) && ct(t, i, e);
  });
}
Kt();
Zt(we, Bt);
function ct(e, t, i) {
  const r = t(i);
  e.value !== r && (e.setValue(r), e.commit());
}
rt((e) => (t) => {
  we.set(t, e), ct(t, e);
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
const at = /* @__PURE__ */ new WeakMap(), De = (e) => (...t) => {
  const i = e(...t);
  return at.set(i, !0), i;
}, Pe = (e) => typeof e == "function" && at.has(e);
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
const ue = {};
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
const Jt = (e) => e === null || !(typeof e == "object" || typeof e == "function");
class ae {
  constructor(t) {
    this.value = void 0, this.committer = t;
  }
  setValue(t) {
    t !== ue && (!Jt(t) || t !== this.value) && (this.value = t, Pe(t) || (this.committer.dirty = !0));
  }
  commit() {
    for (; Pe(this.value); ) {
      const t = this.value;
      this.value = ue, t(this);
    }
    this.value !== ue && this.committer.commit();
  }
}
class ot extends ae {
}
let Qt = !1;
(() => {
  try {
    const e = {
      get capture() {
        return Qt = !0, !1;
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
function Yt(e, t) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { ...e, ...t?.detail }
  });
}
function he(e, t) {
  return new CustomEvent("issue", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { ...e, ...t?.detail }
  });
}
var ge = function(e, t) {
  return ge = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
    i.__proto__ = r;
  } || function(i, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
  }, ge(e, t);
};
function ei(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  ge(e, t);
  function i() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i());
}
var Y = function() {
  return Y = Object.assign || function(t) {
    for (var i, r = 1, n = arguments.length; r < n; r++) {
      i = arguments[r];
      for (var c in i) Object.prototype.hasOwnProperty.call(i, c) && (t[c] = i[c]);
    }
    return t;
  }, Y.apply(this, arguments);
};
function l(e, t, i, r) {
  var n = arguments.length, c = n < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") c = Reflect.decorate(e, t, i, r);
  else for (var o = e.length - 1; o >= 0; o--) (a = e[o]) && (c = (n < 3 ? a(c) : n > 3 ? a(t, i, c) : a(t, i)) || c);
  return n > 3 && c && Object.defineProperty(t, i, c), c;
}
function ee(e) {
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
function ti(e, t) {
  var i = e.matches || e.webkitMatchesSelector || e.msMatchesSelector;
  return i.call(e, t);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const st = () => {
}, ii = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", st, ii);
document.removeEventListener("x", st);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class dt extends ce {
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
var ri = (
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
var ni = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, ci = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Me = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function ai(e, t, i) {
  if (!e)
    return { x: 0, y: 0 };
  var r = t.x, n = t.y, c = r + i.left, a = n + i.top, o, p;
  if (e.type === "touchstart") {
    var u = e;
    o = u.changedTouches[0].pageX - c, p = u.changedTouches[0].pageY - a;
  } else {
    var h = e;
    o = h.pageX - c, p = h.pageY - a;
  }
  return { x: o, y: p };
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
var Te = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Oe = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], te = [], oi = (
  /** @class */
  function(e) {
    ei(t, e);
    function t(i) {
      var r = e.call(this, Y(Y({}, t.defaultAdapter), i)) || this;
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
        return ni;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return ci;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return Me;
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
        var n = t.cssClasses, c = n.ROOT, a = n.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.addClass(c), i.adapter.isUnbounded() && (i.adapter.addClass(a), i.layoutInternal());
        });
      }
    }, t.prototype.destroy = function() {
      var i = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(t.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(t.cssClasses.FG_DEACTIVATION));
        var r = t.cssClasses, n = r.ROOT, c = r.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.removeClass(n), i.adapter.removeClass(c), i.removeCssVars();
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
          for (var c = ee(Te), a = c.next(); !a.done; a = c.next()) {
            var o = a.value;
            this.adapter.registerInteractionHandler(o, this.activateHandler);
          }
        } catch (p) {
          r = { error: p };
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
    }, t.prototype.registerDeactivationHandlers = function(i) {
      var r, n;
      if (i.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var c = ee(Oe), a = c.next(); !a.done; a = c.next()) {
            var o = a.value;
            this.adapter.registerDocumentInteractionHandler(o, this.deactivateHandler);
          }
        } catch (p) {
          r = { error: p };
        } finally {
          try {
            a && !a.done && (n = c.return) && n.call(c);
          } finally {
            if (r) throw r.error;
          }
        }
    }, t.prototype.deregisterRootHandlers = function() {
      var i, r;
      try {
        for (var n = ee(Te), c = n.next(); !c.done; c = n.next()) {
          var a = c.value;
          this.adapter.deregisterInteractionHandler(a, this.activateHandler);
        }
      } catch (o) {
        i = { error: o };
      } finally {
        try {
          c && !c.done && (r = n.return) && r.call(n);
        } finally {
          if (i) throw i.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, t.prototype.deregisterDeactivationHandlers = function() {
      var i, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var n = ee(Oe), c = n.next(); !c.done; c = n.next()) {
          var a = c.value;
          this.adapter.deregisterDocumentInteractionHandler(a, this.deactivateHandler);
        }
      } catch (o) {
        i = { error: o };
      } finally {
        try {
          c && !c.done && (r = n.return) && r.call(n);
        } finally {
          if (i) throw i.error;
        }
      }
    }, t.prototype.removeCssVars = function() {
      var i = this, r = t.strings, n = Object.keys(r);
      n.forEach(function(c) {
        c.indexOf("VAR_") === 0 && i.adapter.updateCssVariable(r[c], null);
      });
    }, t.prototype.activateImpl = function(i) {
      var r = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var n = this.activationState;
        if (!n.isActivated) {
          var c = this.previousActivationEvent, a = c && i !== void 0 && c.type !== i.type;
          if (!a) {
            n.isActivated = !0, n.isProgrammatic = i === void 0, n.activationEvent = i, n.wasActivatedByPointer = n.isProgrammatic ? !1 : i !== void 0 && (i.type === "mousedown" || i.type === "touchstart" || i.type === "pointerdown");
            var o = i !== void 0 && te.length > 0 && te.some(function(p) {
              return r.adapter.containsEventTarget(p);
            });
            if (o) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (te.push(i.target), this.registerDeactivationHandlers(i)), n.wasElementMadeActive = this.checkElementMadeActive(i), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              te = [], !n.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (n.wasElementMadeActive = r.checkElementMadeActive(i), n.wasElementMadeActive && r.animateActivation()), n.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, t.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, t.prototype.animateActivation = function() {
      var i = this, r = t.strings, n = r.VAR_FG_TRANSLATE_START, c = r.VAR_FG_TRANSLATE_END, a = t.cssClasses, o = a.FG_DEACTIVATION, p = a.FG_ACTIVATION, u = t.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var h = "", v = "";
      if (!this.adapter.isUnbounded()) {
        var y = this.getFgTranslationCoordinates(), w = y.startPoint, C = y.endPoint;
        h = w.x + "px, " + w.y + "px", v = C.x + "px, " + C.y + "px";
      }
      this.adapter.updateCssVariable(n, h), this.adapter.updateCssVariable(c, v), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(o), this.adapter.computeBoundingRect(), this.adapter.addClass(p), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, u);
    }, t.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, r = i.activationEvent, n = i.wasActivatedByPointer, c;
      n ? c = ai(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : c = {
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
    }, t.prototype.runDeactivationUXLogicIfReady = function() {
      var i = this, r = t.cssClasses.FG_DEACTIVATION, n = this.activationState, c = n.hasDeactivationUXRun, a = n.isActivated, o = c || !a;
      o && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        i.adapter.removeClass(r);
      }, Me.FG_DEACTIVATION_MS));
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
        var n = Y({}, r);
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
        var a = Math.sqrt(Math.pow(i.frame.width, 2) + Math.pow(i.frame.height, 2));
        return a + t.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : n();
      var c = Math.floor(r * t.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && c % 2 !== 0 ? this.initialSize = c - 1 : this.initialSize = c, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, t.prototype.updateLayoutCssVars = function() {
      var i = t.strings, r = i.VAR_FG_SIZE, n = i.VAR_LEFT, c = i.VAR_TOP, a = i.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(a, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(n, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(c, this.unboundedCoords.top + "px"));
    }, t;
  }(ri)
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
class si {
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
const ze = /* @__PURE__ */ new WeakMap(), $e = De((e) => (t) => {
  if (!(t instanceof ae) || t instanceof ot || t.committer.name !== "class" || t.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = t, { element: r } = i;
  let n = ze.get(t);
  n === void 0 && (r.setAttribute("class", i.strings.join(" ")), ze.set(t, n = /* @__PURE__ */ new Set()));
  const c = r.classList || new si(r);
  n.forEach((a) => {
    a in e || (c.remove(a), n.delete(a));
  });
  for (const a in e) {
    const o = e[a];
    o != n.has(a) && (o ? (c.add(a), n.add(a)) : (c.remove(a), n.delete(a)));
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
const Ge = /* @__PURE__ */ new WeakMap(), di = De((e) => (t) => {
  if (!(t instanceof ae) || t instanceof ot || t.committer.name !== "style" || t.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = t, { style: r } = i.element;
  let n = Ge.get(t);
  n === void 0 && (r.cssText = i.strings.join(" "), Ge.set(t, n = /* @__PURE__ */ new Set())), n.forEach((c) => {
    c in e || (n.delete(c), c.indexOf("-") === -1 ? r[c] = null : r.removeProperty(c));
  });
  for (const c in e)
    n.add(c), c.indexOf("-") === -1 ? r[c] = e[c] : r.setProperty(c, e[c]);
});
class A extends dt {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = oi;
  }
  get isActive() {
    return ti(this.parentElement || this, ":active");
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
    return x`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${$e(r)}"
          style="${di({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
l([
  q(".mdc-ripple-surface")
], A.prototype, "mdcRoot", void 0);
l([
  m({ type: Boolean })
], A.prototype, "primary", void 0);
l([
  m({ type: Boolean })
], A.prototype, "accent", void 0);
l([
  m({ type: Boolean })
], A.prototype, "unbounded", void 0);
l([
  m({ type: Boolean })
], A.prototype, "disabled", void 0);
l([
  m({ type: Boolean })
], A.prototype, "activated", void 0);
l([
  m({ type: Boolean })
], A.prototype, "selected", void 0);
l([
  m({ type: Boolean })
], A.prototype, "internalUseStateLayerCustomProperties", void 0);
l([
  k()
], A.prototype, "hovering", void 0);
l([
  k()
], A.prototype, "bgFocused", void 0);
l([
  k()
], A.prototype, "fgActivation", void 0);
l([
  k()
], A.prototype, "fgDeactivation", void 0);
l([
  k()
], A.prototype, "fgScale", void 0);
l([
  k()
], A.prototype, "fgSize", void 0);
l([
  k()
], A.prototype, "translateStart", void 0);
l([
  k()
], A.prototype, "translateEnd", void 0);
l([
  k()
], A.prototype, "leftPos", void 0);
l([
  k()
], A.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const li = Ae`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let ve = class extends A {
};
ve.styles = [li];
ve = l([
  X("mwc-ripple")
], ve);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ie = (e) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (t, i) => {
    if (t.constructor._observers) {
      if (!t.constructor.hasOwnProperty("_observers")) {
        const r = t.constructor._observers;
        t.constructor._observers = /* @__PURE__ */ new Map(), r.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (n, c) => t.constructor._observers.set(c, n)
        );
      }
    } else {
      t.constructor._observers = /* @__PURE__ */ new Map();
      const r = t.updated;
      t.updated = function(n) {
        r.call(this, n), n.forEach((c, a) => {
          const p = this.constructor._observers.get(a);
          p !== void 0 && p.call(this, this[a], c);
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
class lt {
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
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class L extends ce {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new lt(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const t = this.renderText(), i = this.graphic ? this.renderGraphic() : x``, r = this.hasMeta ? this.renderMeta() : x``;
    return x`
      ${this.renderRipple()}
      ${i}
      ${t}
      ${r}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? x`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? x`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const t = {
      multi: this.multipleGraphics
    };
    return x`
      <span class="mdc-deprecated-list-item__graphic material-icons ${$e(t)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return x`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const t = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return x`
      <span class="mdc-deprecated-list-item__text">
        ${t}
      </span>`;
  }
  renderSingleLine() {
    return x`<slot></slot>`;
  }
  renderTwoline() {
    return x`
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
l([
  q("slot")
], L.prototype, "slotElement", void 0);
l([
  it("mwc-ripple")
], L.prototype, "ripple", void 0);
l([
  m({ type: String })
], L.prototype, "value", void 0);
l([
  m({ type: String, reflect: !0 })
], L.prototype, "group", void 0);
l([
  m({ type: Number, reflect: !0 })
], L.prototype, "tabindex", void 0);
l([
  m({ type: Boolean, reflect: !0 }),
  Ie(function(e) {
    e ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], L.prototype, "disabled", void 0);
l([
  m({ type: Boolean, reflect: !0 })
], L.prototype, "twoline", void 0);
l([
  m({ type: Boolean, reflect: !0 })
], L.prototype, "activated", void 0);
l([
  m({ type: String, reflect: !0 })
], L.prototype, "graphic", void 0);
l([
  m({ type: Boolean })
], L.prototype, "multipleGraphics", void 0);
l([
  m({ type: Boolean })
], L.prototype, "hasMeta", void 0);
l([
  m({ type: Boolean, reflect: !0 }),
  Ie(function(e) {
    e ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], L.prototype, "noninteractive", void 0);
l([
  m({ type: Boolean, reflect: !0 }),
  Ie(function(e) {
    const t = this.getAttribute("role"), i = t === "gridcell" || t === "option" || t === "row" || t === "tab";
    if (i && e ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(e, "property");
  })
], L.prototype, "selected", void 0);
l([
  k()
], L.prototype, "shouldRenderRipple", void 0);
l([
  k()
], L.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const pi = Ae`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let xe = class extends L {
};
xe.styles = [pi];
xe = l([
  X("mwc-list-item")
], xe);
var mi = Object.defineProperty, ui = Object.getOwnPropertyDescriptor, B = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? ui(t, i) : t, c = e.length - 1, a; c >= 0; c--)
    (a = e[c]) && (n = (r ? a(t, i, n) : a(n)) || n);
  return r && n && mi(t, i, n), n;
};
let O = class extends Gt {
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
    return this.reservedValues && this.reservedValues.some((e) => e === this.value) ? (this.setCustomValidity(M("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? x`<div style="position:relative;">
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
      </div>` : x``;
  }
  renderMulplierList() {
    return x`${this.multipliers.map(
      (e) => x`<mwc-list-item ?selected=${e === this.multiplier}
          >${e === null ? M("textfield.noMultiplier") : e}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? x`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : x``;
  }
  render() {
    return x`
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
B([
  m({ type: Boolean })
], O.prototype, "nullable", 2);
B([
  m({ type: Array })
], O.prototype, "multipliers", 2);
B([
  m({ type: String })
], O.prototype, "multiplier", 1);
B([
  m({ type: String })
], O.prototype, "unit", 2);
B([
  k()
], O.prototype, "null", 1);
B([
  m({ type: String })
], O.prototype, "maybeValue", 1);
B([
  m({ type: String })
], O.prototype, "defaultValue", 2);
B([
  m({ type: Array })
], O.prototype, "reservedValues", 2);
B([
  q("mwc-switch")
], O.prototype, "nullSwitch", 2);
B([
  q("mwc-menu")
], O.prototype, "multiplierMenu", 2);
B([
  q("mwc-icon-button")
], O.prototype, "multiplierButton", 2);
O = B([
  X("wizard-textfield")
], O);
var hi = Object.defineProperty, fi = Object.getOwnPropertyDescriptor, W = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? fi(t, i) : t, c = e.length - 1, a; c >= 0; c--)
    (a = e[c]) && (n = (r ? a(t, i, n) : a(n)) || n);
  return r && n && hi(t, i, n), n;
};
let j = class extends zt {
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
    return this.nullable ? x`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : x``;
  }
  render() {
    return x`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
W([
  m({ type: Boolean })
], j.prototype, "nullable", 2);
W([
  k()
], j.prototype, "null", 1);
W([
  m({ type: String })
], j.prototype, "maybeValue", 1);
W([
  m({ type: String })
], j.prototype, "defaultValue", 2);
W([
  m({ type: Array })
], j.prototype, "reservedValues", 2);
W([
  q("mwc-switch")
], j.prototype, "nullSwitch", 2);
j = W([
  X("wizard-select")
], j);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function bi(e, t, i) {
  const r = e.constructor;
  if (!i) {
    const o = `__${t}`;
    if (i = r.getPropertyDescriptor(t, o), !i)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const n = i;
  let c = "";
  if (!n.set)
    throw new Error(`@ariaProperty requires a setter for ${t}`);
  const a = {
    configurable: !0,
    enumerable: !0,
    set(o) {
      c === "" && (c = r.getPropertyOptions(t).attribute), this.hasAttribute(c) && this.removeAttribute(c), n.set.call(this, o);
    }
  };
  return n.get && (a.get = function() {
    return n.get.call(this);
  }), a;
}
function Ne(e, t, i) {
  if (t !== void 0)
    return bi(e, t, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class pt extends dt {
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
pt.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const fe = /* @__PURE__ */ new WeakMap(), Q = De((e) => (t) => {
  const i = fe.get(t);
  if (e === void 0 && t instanceof ae) {
    if (i !== void 0 || !fe.has(t)) {
      const r = t.committer.name;
      t.committer.element.removeAttribute(r);
    }
  } else e !== i && t.setValue(e);
  fe.set(t, e);
});
class $ extends pt {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new lt(() => (this.shouldRenderRipple = !0, this.ripple.then((t) => this.rippleElement = t), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(t) {
    const i = t.get("indeterminate"), r = t.get("checked"), n = t.get("disabled");
    if (i !== void 0 || r !== void 0 || n !== void 0) {
      const c = this.calculateAnimationStateName(!!r, !!i, !!n), a = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${c}-${a}`;
    }
    super.update(t);
  }
  calculateAnimationStateName(t, i, r) {
    return r ? "disabled" : i ? "indeterminate" : t ? "checked" : "unchecked";
  }
  // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? x`<mwc-ripple
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
    return x`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${$e(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${Q(this.name)}"
              aria-checked="${Q(r)}"
              aria-label="${Q(this.ariaLabel)}"
              aria-labelledby="${Q(this.ariaLabelledBy)}"
              aria-describedby="${Q(this.ariaDescribedBy)}"
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
l([
  q(".mdc-checkbox")
], $.prototype, "mdcRoot", void 0);
l([
  q("input")
], $.prototype, "formElement", void 0);
l([
  m({ type: Boolean, reflect: !0 })
], $.prototype, "checked", void 0);
l([
  m({ type: Boolean })
], $.prototype, "indeterminate", void 0);
l([
  m({ type: Boolean, reflect: !0 })
], $.prototype, "disabled", void 0);
l([
  m({ type: String, reflect: !0 })
], $.prototype, "name", void 0);
l([
  m({ type: String })
], $.prototype, "value", void 0);
l([
  Ne,
  m({ type: String, attribute: "aria-label" })
], $.prototype, "ariaLabel", void 0);
l([
  Ne,
  m({ type: String, attribute: "aria-labelledby" })
], $.prototype, "ariaLabelledBy", void 0);
l([
  Ne,
  m({ type: String, attribute: "aria-describedby" })
], $.prototype, "ariaDescribedBy", void 0);
l([
  m({ type: Boolean })
], $.prototype, "reducedTouchTarget", void 0);
l([
  k()
], $.prototype, "animationClass", void 0);
l([
  k()
], $.prototype, "shouldRenderRipple", void 0);
l([
  k()
], $.prototype, "focused", void 0);
l([
  k()
], $.prototype, "useStateLayerCustomProperties", void 0);
l([
  it("mwc-ripple")
], $.prototype, "ripple", void 0);
l([
  Mt({ passive: !0 })
], $.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const yi = Ae`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let ke = class extends $ {
};
ke.styles = [yi];
ke = l([
  X("mwc-checkbox")
], ke);
var gi = Object.defineProperty, vi = Object.getOwnPropertyDescriptor, z = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? vi(t, i) : t, c = e.length - 1, a; c >= 0; c--)
    (a = e[c]) && (n = (r ? a(t, i, n) : a(n)) || n);
  return r && n && gi(t, i, n), n;
};
let T = class extends ce {
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
    return this.nullable ? x`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : x``;
  }
  render() {
    return x`
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
z([
  m({ type: String })
], T.prototype, "label", 2);
z([
  m({ type: String })
], T.prototype, "helper", 2);
z([
  m({ type: Boolean })
], T.prototype, "nullable", 2);
z([
  m({ type: Boolean })
], T.prototype, "defaultChecked", 2);
z([
  m({ type: String })
], T.prototype, "maybeValue", 1);
z([
  m({ type: Boolean })
], T.prototype, "disabled", 2);
z([
  k()
], T.prototype, "null", 1);
z([
  k()
], T.prototype, "checked", 1);
z([
  k()
], T.prototype, "deactivateCheckbox", 2);
z([
  k()
], T.prototype, "formfieldLabel", 1);
z([
  q("mwc-switch")
], T.prototype, "nullSwitch", 2);
z([
  q("mwc-checkbox")
], T.prototype, "checkbox", 2);
T = z([
  X("wizard-checkbox")
], T);
function R(e) {
  const t = e.split(">"), i = t.pop() ?? "";
  return [t.join(">"), i];
}
const _ = ":not(*)";
function xi(e) {
  return `${e.getAttribute("version")}	${e.getAttribute("revision")}`;
}
function ki(e, t) {
  const [i, r] = t.split("	");
  return !i || !r ? _ : `${e}[version="${i}"][revision="${r}"]`;
}
function Be(e) {
  return g(e.parentElement) + ">" + e.getAttribute("connectivityNode");
}
function qe(e, t) {
  const [i, r] = R(t), n = D[e].parents.flatMap(
    (c) => N(c, i).split(",")
  );
  return E(
    n,
    [">"],
    [`${e}[connectivityNode="${r}"]`]
  ).map((c) => c.join("")).join(",");
}
function Si(e) {
  const [t, i, r, n, c, a] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((o) => e.getAttribute(o));
  return t === "None" ? `${g(e.parentElement)}>(${n} ${a} ${c})` : `${t} ${i || "(Client)"}/${r ?? ""} ${n} ${c ?? ""}`;
}
function _i(e, t) {
  if (t.endsWith(")")) {
    const [y, w] = R(t), [C, F, I] = w.substring(1, w.length - 1).split(" ");
    if (!C || !F) return _;
    const P = D[e].parents.flatMap(
      (G) => N(G, y).split(",")
    );
    return E(
      P,
      [">"],
      [`${e}[iedName="None"][lnClass="${C}"][lnType="${F}"][lnInst="${I}"]`]
    ).map((G) => G.join("")).join(",");
  }
  const [i, r, n, c, a] = t.split(/[ /]/);
  if (!i || !r || !c) return _;
  const [
    o,
    p,
    u,
    h,
    v
  ] = [
    [`[iedName="${i}"]`],
    r === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${r}"]`],
    n ? [`[prefix="${n}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    a ? [`[lnInst="${a}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return E(
    [e],
    o,
    p,
    u,
    h,
    v
  ).map((y) => y.join("")).join(",");
}
function Ci(e) {
  return `${g(e.parentElement)}>${e.getAttribute(
    "iedName"
  )} ${e.getAttribute("apName")}`;
}
function Ai(e, t) {
  const [i, r] = R(t), [n, c] = r.split(" ");
  return `${N(
    "IED",
    i
  )}>${e}[iedName="${n}"][apName="${c}"]`;
}
function wi(e) {
  return `${g(e.parentElement)}>${e.getAttribute("associationID") ?? ""}`;
}
function Di(e, t) {
  const [i, r] = R(t);
  return r ? `${N(
    "Server",
    i
  )}>${e}[associationID="${r}"]` : _;
}
function $i(e) {
  return `${g(e.closest("IED"))}>>${e.getAttribute("inst")}`;
}
function Ii(e, t) {
  const [i, r] = t.split(">>");
  return r ? `IED[name="${i}"] ${e}[inst="${r}"]` : _;
}
function Ni(e) {
  const t = e.textContent, [i, r, n, c, a] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => e.getAttribute(o));
  return `${g(e.parentElement)}>${t} ${i || ""} ${r || ""}/${n ?? ""} ${c ?? ""} ${a ?? ""}`;
}
function Ei(e, t) {
  const [i, r] = R(t), [n, c, a, o, p, u] = r.split(/[ /]/), [
    h,
    v,
    y,
    w,
    C,
    F
  ] = [
    D[e].parents.flatMap(
      (I) => N(I, i).split(",")
    ),
    [`${n}`],
    c ? [`[apRef="${c}"]`] : [":not([apRef])", '[apRef=""]'],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${p}"]`],
    u ? [`[lnInst="${u}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return E(
    h,
    [">"],
    [e],
    v,
    y,
    w,
    C,
    F
  ).map((I) => I.join("")).join(",");
}
function Li(e) {
  const [t, i, r, n, c, a, o, p] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((h) => e.getAttribute(h)), u = `${t}/${i ?? ""} ${r} ${n ?? ""}.${c} ${a || ""}`;
  return `${g(e.parentElement)}>${u} (${o}${p ? " [" + p + "]" : ""})`;
}
function Ri(e, t) {
  const [i, r] = R(t), [n, c, a, o] = r.split(/[ /.]/), p = r.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), u = p && p[1] ? p[1] : "", h = p && p[2] ? p[2] : "", v = r.match(/\(([A-Z]{2})/), y = r.match(/ \[([0-9]{1,2})\]/), w = v && v[1] ? v[1] : "", C = y && y[1] ? y[1] : "", [
    F,
    I,
    P,
    G,
    Z,
    de,
    le,
    pe,
    me
  ] = [
    D[e].parents.flatMap(
      (K) => N(K, i).split(",")
    ),
    [`[ldInst="${n}"]`],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    o ? [`[lnInst="${o}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${u}"]`],
    h ? [`[daName="${h}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${w}"]`],
    C ? [`[ix="${C}"]`] : [":not([ix])", '[ix=""]']
  ];
  return E(
    F,
    [">"],
    [e],
    I,
    P,
    G,
    Z,
    de,
    le,
    pe,
    me
  ).map((K) => K.join("")).join(",");
}
function Fi(e) {
  if (!e.parentElement) return NaN;
  const t = g(e.parentElement), i = e.getAttribute("iedName"), r = e.getAttribute("intAddr"), n = Array.from(
    e.parentElement.querySelectorAll(`ExtRef[intAddr="${r}"]`)
  ).indexOf(e);
  if (r) return `${t}>${r}[${n}]`;
  const [
    c,
    a,
    o,
    p,
    u,
    h,
    v,
    y,
    w,
    C,
    F,
    I
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
  ].map((Z) => e.getAttribute(Z)), P = I ? `${v}:${I} ${y ?? ""}/${w ?? ""} ${C ?? ""} ${F ?? ""}` : "", G = `${i} ${c}/${a ?? ""} ${o} ${p ?? ""} ${u} ${h || ""}`;
  return `${t}>${P ? P + " " : ""}${G}${r ? `@${r}` : ""}`;
}
function Pi(e, t) {
  const [i, r] = R(t), n = D[e].parents.flatMap(
    (J) => N(J, i).split(",")
  );
  if (r.endsWith("]")) {
    const [J] = r.split("["), Ft = [`[intAddr="${J}"]`];
    return E(n, [">"], [e], Ft).map((Pt) => Pt.join("")).join(",");
  }
  let c, a, o, p, u, h, v, y, w, C, F, I, P, G;
  !r.includes(":") && !r.includes("@") ? [c, a, o, p, u, h, v] = r.split(/[ /]/) : r.includes(":") && !r.includes("@") ? [
    y,
    w,
    C,
    F,
    I,
    P,
    c,
    a,
    o,
    p,
    u,
    h,
    v
  ] = r.split(/[ /:]/) : !r.includes(":") && r.includes("@") ? [c, a, o, p, u, h, v, G] = r.split(/[ /@]/) : [
    y,
    w,
    C,
    F,
    I,
    P,
    c,
    a,
    o,
    p,
    u,
    h,
    v,
    G
  ] = r.split(/[ /:@]/);
  const [
    Z,
    de,
    le,
    pe,
    me,
    K,
    wt,
    Dt,
    $t,
    It,
    Nt,
    Et,
    Lt,
    Rt
  ] = [
    c ? [`[iedName="${c}"]`] : [":not([iedName])"],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    p ? [`[lnClass="${p}"]`] : [":not([lnClass])"],
    u ? [`[lnInst="${u}"]`] : [":not([lnInst])", '[lnInst=""]'],
    h ? [`[doName="${h}"]`] : [":not([doName])"],
    v ? [`[daName="${v}"]`] : [":not([daName])", '[daName=""]'],
    y ? [`[serviceType="${y}"]`] : [":not([serviceType])", '[serviceType=""]'],
    w ? [`[srcCBName="${w}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    C ? [`[srcLDInst="${C}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    F ? [`[srcPrefix="${F}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    I ? [`[srcLNClass="${I}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    P ? [`[srcLNInst="${P}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    G ? [`[intAddr="${G}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return E(
    n,
    [">"],
    [e],
    Z,
    de,
    le,
    pe,
    me,
    K,
    wt,
    Dt,
    $t,
    It,
    Nt,
    Et,
    Lt,
    Rt
  ).map((J) => J.join("")).join(",");
}
function Mi(e) {
  const [t, i, r] = ["prefix", "lnClass", "inst"].map(
    (n) => e.getAttribute(n)
  );
  return `${g(e.parentElement)}>${t ?? ""} ${i} ${r}`;
}
function Ti(e, t) {
  const [i, r] = R(t), n = D[e].parents.flatMap(
    (v) => N(v, i).split(",")
  ), [c, a, o] = r.split(" ");
  if (!a) return _;
  const [p, u, h] = [
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    [`[inst="${o}"]`]
  ];
  return E(
    n,
    [">"],
    [e],
    p,
    u,
    h
  ).map((v) => v.join("")).join(",");
}
function Oi(e) {
  const [t, i, r, n, c, a] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => e.getAttribute(o));
  return `${g(e.parentElement)}>${i} ${t || ""} ${r}/${n ?? ""} ${c} ${a}`;
}
function zi(e, t) {
  const [i, r] = R(t), n = D[e].parents.flatMap(
    (P) => N(P, i).split(",")
  ), [c, a, o, p, u, h] = r.split(/[ /]/), [
    v,
    y,
    w,
    C,
    F,
    I
  ] = [
    c ? [`[iedName="${c}"]`] : [":not([iedName])", '[iedName=""]'],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    p ? [`[prefix="${p}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${u}"]`],
    h ? [`[lnInst="${h}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return E(
    n,
    [">"],
    [e],
    v,
    y,
    w,
    C,
    F,
    I
  ).map((P) => P.join("")).join(",");
}
function He(e) {
  const [t, i] = ["name", "ix"].map((r) => e.getAttribute(r));
  return `${g(e.parentElement)}>${t}${i ? "[" + i + "]" : ""}`;
}
function Se(e, t, i = -1) {
  i === -1 && (i = t.split(">").length);
  const [r, n] = R(t), [c, a, o, p] = n.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!a) return _;
  if (i === 0) return `${e}[name="${a}"]`;
  const u = D[e].parents.flatMap(
    (y) => y === "SDI" ? Se(y, r, i - 1).split(",") : N(y, r).split(",")
  ).filter((y) => !y.startsWith(_));
  if (u.length === 0) return _;
  const [h, v] = [
    [`[name="${a}"]`],
    p ? [`[ix="${p}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return E(
    u,
    [">"],
    [e],
    h,
    v
  ).map((y) => y.join("")).join(",");
}
function Gi(e) {
  if (!e.parentElement) return NaN;
  const t = e.getAttribute("sGroup"), i = Array.from(e.parentElement.children).filter((r) => r.getAttribute("sGroup") === t).findIndex((r) => r.isSameNode(e));
  return `${g(e.parentElement)}>${t ? t + "." : ""} ${i}`;
}
function Bi(e, t) {
  const [i, r] = R(t), [n, c] = r.split(" "), a = parseFloat(c), o = D[e].parents.flatMap(
    (h) => N(h, i).split(",")
  ), [p, u] = [
    n ? [`[sGroup="${n}"]`] : [""],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return E(
    o,
    [">"],
    [e],
    p,
    u
  ).map((h) => h.join("")).join(",");
}
function qi(e) {
  const [t, i] = ["iedName", "apName"].map(
    (r) => e.getAttribute(r)
  );
  return `${t} ${i}`;
}
function Hi(e, t) {
  const [i, r] = t.split(" ");
  return !i || !r ? _ : `${e}[iedName="${i}"][apName="${r}"]`;
}
function Ve(e) {
  const [t, i] = ["ldInst", "cbName"].map(
    (r) => e.getAttribute(r)
  );
  return `${t} ${i}`;
}
function je(e, t) {
  const [i, r] = t.split(" ");
  return !i || !r ? _ : `${e}[ldInst="${i}"][cbName="${r}"]`;
}
function Vi(e) {
  if (!e.parentElement) return NaN;
  if (!e.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const t = e.getAttribute("type");
  return e.parentElement.children.length > 1 && t !== "Connection" && t !== "RedConn" ? NaN : `${g(e.parentElement)}>${t}`;
}
function ji(e, t) {
  const [i, r] = R(t), [n, c] = [
    D[e].parents.flatMap(
      (a) => N(a, i).split(",")
    ),
    r ? [`[type="${r}"]`] : [""]
  ];
  return E(n, [">"], [e], c).map((a) => a.join("")).join(",");
}
function Ui(e) {
  if (!e.parentElement) return NaN;
  const t = e.parentElement, i = e.getAttribute("type");
  if (t.tagName === "PhysConn")
    return `${g(e.parentElement)}>${i}`;
  const r = Array.from(e.parentElement.children).filter((n) => n.getAttribute("type") === i).findIndex((n) => n.isSameNode(e));
  return `${g(e.parentElement)}>${i} [${r}]`;
}
function Wi(e, t) {
  const [i, r] = R(t), [n] = r.split(" "), c = r && r.match(/\[([0-9]+)\]/) && r.match(/\[([0-9]+)\]/)[1] ? parseFloat(r.match(/\[([0-9]+)\]/)[1]) : NaN, [a, o, p] = [
    D[e].parents.flatMap(
      (u) => N(u, i).split(",")
    ),
    [`[type="${n}"]`],
    c ? [`:nth-child(${c + 1})`] : [""]
  ];
  return E(
    a,
    [">"],
    [e],
    o,
    p
  ).map((u) => u.join("")).join(",");
}
function Xi(e) {
  return `${g(e.parentElement)}>${e.getAttribute("ord")}`;
}
function Zi(e, t) {
  const [i, r] = R(t);
  return `${N("EnumType", i)}>${e}[ord="${r}"]`;
}
function Ki(e) {
  return `${g(e.parentElement)}>${e.getAttribute("type") || "8-MMS"}	${e.textContent}`;
}
function Ji(e, t) {
  const [i, r] = R(t), [n, c] = r.split("	"), [a] = [
    D[e].parents.flatMap(
      (o) => N(o, i).split(",")
    )
  ];
  return E(
    a,
    [">"],
    [e],
    [`[type="${n}"]`],
    [">"],
    [c]
  ).map((o) => o.join("")).join(",");
}
function Qi() {
  return "";
}
function Yi() {
  return ":root";
}
function b(e) {
  return e.parentElement.tagName === "SCL" ? e.getAttribute("name") : `${g(e.parentElement)}>${e.getAttribute("name")}`;
}
function f(e, t, i = -1) {
  i === -1 && (i = t.split(">").length);
  const [r, n] = R(t);
  if (!n) return _;
  if (i === 0) return `${e}[name="${n}"]`;
  const c = D[e].parents;
  if (!c) return _;
  const a = c.flatMap(
    (o) => D[o].selector === D.Substation.selector ? f(o, r, i - 1).split(",") : N(o, r).split(",")
  ).filter((o) => !o.startsWith(_));
  return a.length === 0 ? _ : E(a, [">"], [e], [`[name="${n}"]`]).map((o) => o.join("")).join(",");
}
function s(e) {
  return g(e.parentElement).toString();
}
function d(e, t) {
  const i = D[e].parents;
  if (!i) return _;
  const r = i.flatMap((n) => N(n, t).split(",")).filter((n) => !n.startsWith(_));
  return r.length === 0 ? _ : E(r, [">"], [e]).map((n) => n.join("")).join(",");
}
function ie(e) {
  return `#${e.id}`;
}
function re(e, t) {
  const i = t.replace(/^#/, "");
  return i ? `${e}[id="${i}"]` : _;
}
const mt = [
  "TransformerWinding",
  "ConductingEquipment"
], ut = [
  "GeneralEquipment",
  "PowerTransformer",
  ...mt
], _e = ["Substation", "VoltageLevel", "Bay"], ht = ["Process", "Line"], ft = ["EqSubFunction", "EqFunction"], er = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...ut,
  ..._e,
  ...ht,
  ...ft
], bt = ["ConnectivityNode", ...er], tr = ["GOOSESecurity", "SMVSecurity"], ir = ["SubNetwork", ...tr, ...bt], rr = ["BDA", "DA"], nr = ["SampledValueControl", "GSEControl"], cr = ["LogControl", "ReportControl"], ar = [...nr, ...cr], or = ["GSE", "SMV"], sr = [
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
  ...ar,
  ...or,
  ...rr
], U = ["LN0", "LN"], dr = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], lr = ["Subject", "IssuerName"], pr = ["MinTime", "MaxTime"], mr = ["LNodeType", "DOType", "DAType", "EnumType"], ur = [
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
], hr = ["DynDataSet", "ConfDataSet"], fr = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...hr
], br = ["ConfLogControl", "ConfSigRef"], yr = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], gr = ["SCL", ...ir, ...sr, ...mr], yt = [
  ...gr,
  ...dr,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...lr,
  ...pr,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...U,
  ...ur,
  "DynAssociation",
  "SettingGroups",
  ...fr,
  ...br,
  ...yr,
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
], vr = new Set(yt);
function gt(e) {
  return vr.has(e);
}
const oe = ["Text", "Private"], H = [...oe], S = [...oe], ne = [...oe], Ue = [...S, "Val"], vt = [...H, "LNode"], V = [...vt], Ce = [...V], be = [
  ...V,
  "PowerTransformer",
  "GeneralEquipment"
], We = [
  ...Ce,
  "Terminal"
], Xe = [...S, "Address"], xt = [...H], Ze = [...xt, "IEDName"], Ke = [
  ...S,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], Je = [
  ...V,
  "GeneralEquipment",
  "Function"
], Qe = [...xt, "TrgOps"], Ye = [
  ...V,
  "GeneralEquipment",
  "EqSubFunction"
], D = {
  AccessControl: {
    identity: s,
    selector: d,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: b,
    selector: f,
    parents: ["IED"],
    children: [
      ...H,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: s,
    selector: d,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: wi,
    selector: Di,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: s,
    selector: d,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: b,
    selector: f,
    parents: ["DAType"],
    children: [...Ue]
  },
  BitRate: {
    identity: s,
    selector: d,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: b,
    selector: f,
    parents: ["VoltageLevel"],
    children: [
      ...be,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: Oi,
    selector: zi,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: s,
    selector: d,
    parents: ["SCL"],
    children: [...S, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: b,
    selector: f,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...We,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: s,
    selector: d,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: qi,
    selector: Hi,
    parents: ["SubNetwork"],
    children: [...S, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: b,
    selector: f,
    parents: ["Bay", "Line"],
    children: [...vt]
  },
  DA: {
    identity: b,
    selector: f,
    parents: ["DOType"],
    children: [...Ue]
  },
  DAI: {
    identity: He,
    selector: Se,
    parents: ["DOI", "SDI"],
    children: [...S, "Val"]
  },
  DAType: {
    identity: ie,
    selector: re,
    parents: ["DataTypeTemplates"],
    children: [...ne, "BDA", "ProtNs"]
  },
  DO: {
    identity: b,
    selector: f,
    parents: ["LNodeType"],
    children: [...S]
  },
  DOI: {
    identity: b,
    selector: f,
    parents: [...U],
    children: [...S, "SDI", "DAI"]
  },
  DOType: {
    identity: ie,
    selector: re,
    parents: ["DataTypeTemplates"],
    children: [...ne, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: b,
    selector: f,
    parents: [...U],
    children: [...H, "FCDA"]
  },
  DataSetDirectory: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: s,
    selector: d,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: ie,
    selector: re,
    parents: ["DataTypeTemplates"],
    children: [...ne, "EnumVal"]
  },
  EnumVal: {
    identity: Xi,
    selector: Zi,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: b,
    selector: f,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...Ye]
  },
  EqSubFunction: {
    identity: b,
    selector: f,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...Ye]
  },
  ExtRef: {
    identity: Fi,
    selector: Pi,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: Li,
    selector: Ri,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: b,
    selector: f,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...V,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: b,
    selector: f,
    parents: [
      "SubFunction",
      "Function",
      ...ht,
      ...ft,
      ..._e
    ],
    children: [...Ce, "EqFunction"]
  },
  GetCBValues: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: b,
    selector: f,
    parents: ["AccessPoint"],
    children: [...H, "Subject", "IssuerName"]
  },
  GSE: {
    identity: Ve,
    selector: je,
    parents: ["ConnectedAP"],
    children: [...Xe, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: b,
    selector: f,
    parents: ["LN0"],
    children: [...Ze, "Protocol"]
  },
  GSESettings: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: s,
    selector: d,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: s,
    selector: d,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: xi,
    selector: ki,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: b,
    selector: f,
    parents: ["SCL"],
    children: [...S, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: Ni,
    selector: Ei,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: s,
    selector: d,
    parents: [...U],
    children: [...S, "ExtRef"]
  },
  IssuerName: {
    identity: s,
    selector: d,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: Ci,
    selector: Ai,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: $i,
    selector: Ii,
    parents: ["Server"],
    children: [...S, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: Mi,
    selector: Ti,
    parents: ["AccessPoint", "LDevice"],
    children: [...Ke]
  },
  LN0: {
    identity: s,
    selector: d,
    parents: ["LDevice"],
    children: [
      ...Ke,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: Si,
    selector: _i,
    parents: [...bt],
    children: [...S]
  },
  LNodeType: {
    identity: ie,
    selector: re,
    parents: ["DataTypeTemplates"],
    children: [...ne, "DO"]
  },
  Line: {
    identity: b,
    selector: f,
    parents: ["Process", "SCL"],
    children: [
      ...Je,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: b,
    selector: f,
    parents: [...U],
    children: [...S]
  },
  LogControl: {
    identity: b,
    selector: f,
    parents: [...U],
    children: [...Qe]
  },
  LogSettings: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: s,
    selector: d,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: s,
    selector: d,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: s,
    selector: d,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: Be,
    selector: qe,
    parents: ["TransformerWinding"],
    children: [...S]
  },
  OptFields: {
    identity: s,
    selector: d,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: Ui,
    selector: Wi,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: Vi,
    selector: ji,
    parents: ["ConnectedAP"],
    children: [...S, "P"]
  },
  PowerTransformer: {
    identity: b,
    selector: f,
    parents: [..._e],
    children: [
      ...Ce,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => _,
    parents: [],
    children: []
  },
  Process: {
    identity: b,
    selector: f,
    parents: ["Process", "SCL"],
    children: [
      ...Je,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: Ki,
    selector: Ji,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: s,
    selector: d,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: b,
    selector: f,
    parents: [...U],
    children: [...Qe, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: s,
    selector: d,
    parents: ["ReportControl"],
    children: [...S, "ClientLN"]
  },
  SamplesPerSec: {
    identity: s,
    selector: d,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: b,
    selector: f,
    parents: ["LN0"],
    children: [...Ze, "SmvOpts"]
  },
  SecPerSamples: {
    identity: s,
    selector: d,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: Qi,
    selector: Yi,
    parents: [],
    children: [
      ...oe,
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
    identity: He,
    selector: Se,
    parents: ["DOI", "SDI"],
    children: [...S, "SDI", "DAI"]
  },
  SDO: {
    identity: b,
    selector: f,
    parents: ["DOType"],
    children: [...H]
  },
  Server: {
    identity: s,
    selector: d,
    parents: ["AccessPoint"],
    children: [
      ...S,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: s,
    selector: d,
    parents: ["AccessPoint"],
    children: [...S]
  },
  Services: {
    identity: s,
    selector: d,
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
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: s,
    selector: d,
    parents: ["LN0"],
    children: [...S]
  },
  SettingGroups: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: s,
    selector: d,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: s,
    selector: d,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: Ve,
    selector: je,
    parents: ["ConnectedAP"],
    children: [...Xe]
  },
  SmvOpts: {
    identity: s,
    selector: d,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: b,
    selector: f,
    parents: ["AccessPoint"],
    children: [...H, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: b,
    selector: f,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...mt
    ],
    children: [...V, "EqFunction"]
  },
  SubFunction: {
    identity: b,
    selector: f,
    parents: ["SubFunction", "Function"],
    children: [
      ...V,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: b,
    selector: f,
    parents: ["Communication"],
    children: [...H, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: s,
    selector: d,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: b,
    selector: f,
    parents: ["SCL"],
    children: [...be, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: b,
    selector: f,
    parents: ["TransformerWinding"],
    children: [...V, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: Be,
    selector: qe,
    parents: [...ut],
    children: [...S]
  },
  Text: {
    identity: s,
    selector: d,
    parents: yt.filter((e) => e !== "Text" && e !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: s,
    selector: d,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: b,
    selector: f,
    parents: ["PowerTransformer"],
    children: [
      ...We,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: s,
    selector: d,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: Gi,
    selector: Bi,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: s,
    selector: d,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: s,
    selector: d,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: b,
    selector: f,
    parents: ["Substation"],
    children: [...be, "Voltage", "Bay", "Function"]
  }
};
function N(e, t) {
  return typeof t != "string" ? _ : gt(e) ? D[e].selector(e, t) : e;
}
function g(e) {
  if (e === null) return NaN;
  if (e.closest("Private")) return NaN;
  const t = e.tagName;
  return gt(t) ? D[t].identity(e) : NaN;
}
rt((e) => (t) => {
  Object.keys(e).length ? t.setValue(e) : t.setValue("");
});
function E(...e) {
  return e.reduce(
    (t, i) => t.flatMap((r) => i.map((n) => [r, n].flat())),
    [[]]
  );
}
const xr = 99;
Array(xr).fill(1).map((e, t) => `${t + 1}`);
async function et(e) {
  return Ct(e) ? [
    {
      title: M("validator.templates.missingAttribute", {
        attr: "type",
        element: e.tagName
      }),
      message: `${g(e)}`
    }
  ] : At(e) === null ? [
    {
      title: M("validator.templates.missingReference", {
        tag: "DO",
        name: e.getAttribute("name")
      }),
      message: `${g(e)}`
    }
  ] : [];
}
const kt = fetch("public/xml/IEC_61850-7-4_2007B3.nsd").then((e) => e.text()).then((e) => new DOMParser().parseFromString(e, "application/xml")), St = fetch("public/xml/IEC_61850-7-3_2007B3.nsd").then((e) => e.text()).then((e) => new DOMParser().parseFromString(e, "application/xml"));
fetch("public/xml/IEC_61850-7-2_2007B3.nsd").then((e) => e.text()).then((e) => new DOMParser().parseFromString(e, "application/xml"));
const _t = fetch("public/xml/IEC_61850-8-1_2003A2.nsd").then((e) => e.text()).then((e) => new DOMParser().parseFromString(e, "application/xml"));
async function kr(e, t) {
  const i = await St, r = i.querySelector(`CDC[name="${e}"] > DataAttribute[name="${t}"]`)?.getAttribute("type");
  return Array.from(
    i.querySelectorAll(
      `ConstructedAttributes > ConstructedAttribute[name="${r}"] > SubDataAttribute[presCond="M"]`
    )
  );
}
async function Sr(e) {
  const t = await _t;
  return Array.from(
    t.querySelectorAll(
      `ServiceConstructedAttributes > ServiceConstructedAttribute[name="${e}"] >  SubDataAttribute[presCond="M"]`
    )
  );
}
async function _r(e) {
  const t = e.getAttribute("id");
  if (!t) return [];
  const i = e.closest("DataTypeTemplates")?.querySelector(`DOType > DA[type="${t}"]`), r = i?.getAttribute("name");
  if (r && ["Oper", "SBOw", "SBO", "Cancel"].includes(r))
    return await Sr(r);
  const n = i?.parentElement?.getAttribute("cdc");
  return kr(n, r);
}
async function Cr(e) {
  return (await _r(e)).map(
    (n) => n.getAttribute("name")
  ).filter(
    (n) => !e.querySelector(`BDA[name="${n}"]`)
  ).map((n) => ({
    title: M("validator.templates.mandatoryChild", {
      tag: "DAType",
      id: e.getAttribute("id"),
      childTag: "BDA",
      childId: n
    }),
    message: `${g(e)}`
  }));
}
async function Ar(e) {
  const t = [];
  if (e.tagName !== "DAType") return [];
  const i = await Cr(e), r = await se(e);
  return t.concat(i, r);
}
async function tt(e) {
  return Ct(e) ? [
    {
      title: M("validator.templates.missingAttribute", {
        attr: "type",
        element: e.tagName
      }),
      message: `${g(e)}`
    }
  ] : At(e) === null ? [
    {
      title: M("validator.templates.missingReference", {
        tag: "DO",
        name: e.getAttribute("name")
      }),
      message: `${g(e)}`
    }
  ] : [];
}
async function wr(e, t) {
  return !e || !t ? null : Ee(await kt, e).flatMap(
    (r) => Array.from(r.querySelectorAll("DataObject"))
  ).find((r) => r.getAttribute("name") === t) ?? null;
}
async function Dr(e) {
  const t = e.getAttribute("id");
  if (!t) return null;
  const i = e.closest("DataTypeTemplates")?.querySelector(
    `LNodeType > DO[type="${t}"], LNodeType > SDO[type="${t}"]`
  ), r = i?.getAttribute("name"), c = i?.parentElement?.getAttribute("lnClass");
  return await wr(c, r);
}
function $r(e) {
  return !e || e === "status-only" ? [] : e.includes("direct") ? ["MOctrl"] : e.includes("normal") ? ["MOctrl", "MOsbo", "MOsboNormal"] : e.includes("enhanced") ? ["MOctrl", "MOsbo", "MOsboEnhanced"] : [];
}
async function Ir(e, t) {
  const i = await St, r = await _t, n = Array.from(
    i.querySelectorAll(`CDC[name="${t}"] > DataAttribute[presCond="M"]`)
  ), c = $r(
    e.querySelector('DA[name="ctlModel"] > Val')?.textContent?.trim()
  ), a = Array.from(
    r.querySelectorAll(`ServiceCDC[cdc="${t}"] > ServiceDataAttribute`)
  ).filter((o) => c.includes(o.getAttribute("presCond")));
  return n.concat(a);
}
async function Nr(e, t) {
  const i = await Dr(e);
  return i && t !== i.getAttribute("type") ? [
    {
      title: M("validator.templates.incorrectAttribute", {
        attr: "cdc",
        element: "DOType"
      }),
      message: `${g(e)}`
    }
  ] : [];
}
async function Er(e, t) {
  const i = [];
  return (await Ir(e, t)).map(
    (n) => n.getAttribute("name")
  ).forEach((n) => {
    e.querySelector(`DA[name="${n}"]`) || i.push({
      title: M("validator.templates.mandatoryChild", {
        tag: "Common Data Class",
        id: t,
        childTag: "DA",
        childId: n
      }),
      message: `${g(e)}`
    });
  }), i;
}
async function Lr(e) {
  const t = [];
  if (e.tagName !== "DOType") return [];
  const i = e.getAttribute("cdc");
  if (!i)
    return [
      {
        title: M("validator.templates.missingAttribute", {
          attr: "cdc",
          element: e.tagName
        }),
        message: `${g(e)}`
      }
    ];
  const r = await Nr(e, i), n = await Er(e, i), c = await se(e);
  return t.concat(n, c, r);
}
async function Rr(e) {
  return Ee(await kt, e).flatMap(
    (i) => Array.from(i.querySelectorAll('DataObject[presCond="M"]'))
  );
}
async function Fr(e, t) {
  const i = [];
  return (await (await Rr(t)).map((n) => n.getAttribute("name"))).forEach((n) => {
    e.querySelector(`DO[name="${n}"]`) || i.push({
      title: M("validator.templates.mandatoryChild", {
        tag: "lnClass",
        id: t,
        childTag: "DO",
        childId: n
      }),
      message: `${g(e)} > ${n}`
    });
  }), i;
}
async function Pr(e) {
  const t = [], i = e.getAttribute("lnClass");
  if (!i)
    return [
      {
        title: M("validator.templates.missingAttribute", {
          attr: "lnClass",
          element: e.tagName
        }),
        message: `${g(e)}`
      }
    ];
  const r = await Fr(e, i), n = await se(e);
  return t.concat(r, n);
}
fetch("public/xml/IEC_61850-7-4_2007B3.nsd").then((e) => e.text()).then((e) => new DOMParser().parseFromString(e, "application/xml"));
fetch("public/xml/IEC_61850-7-3_2007B3.nsd").then((e) => e.text()).then((e) => new DOMParser().parseFromString(e, "application/xml"));
fetch("public/xml/IEC_61850-7-2_2007B3.nsd").then((e) => e.text()).then((e) => new DOMParser().parseFromString(e, "application/xml"));
fetch("public/xml/IEC_61850-8-1_2003A2.nsd").then((e) => e.text()).then((e) => new DOMParser().parseFromString(e, "application/xml"));
function Ct(e) {
  const t = e.tagName, i = t === "DO" || t === "SDO" || (t === "DA" || t === "BDA") && (e.getAttribute("bType") === "Enum" || e.getAttribute("bType") === "Struct"), r = !e.getAttribute("type");
  return i && r;
}
function At(e) {
  const t = e.getAttribute("bType") === "Struct", i = e.getAttribute("bType") === "Enum", n = e.tagName === "DO" || e.tagName === "SDO" ? "DOType" : t || i ? t ? "DAType" : "EnumType" : null;
  if (n)
    return e.closest("DataTypeTemplates")?.querySelector(
      `${n}[id="${e.getAttribute("type")}"]`
    ) ?? null;
}
function Ee(e, t) {
  if (t === "") return [];
  const i = Ee(
    e,
    e.querySelector(`LNClass[name="${t}"], AbstractLNClass[name="${t}"]`)?.getAttribute("base") ?? ""
  );
  return Array.from(
    e.querySelectorAll(
      `LNClass[name="${t}"], AbstractLNClass[name="${t}"]`
    )
  ).concat(i);
}
async function se(e) {
  const t = [], i = Array.from(e.children);
  for (const r of i) {
    const n = Mr[r.tagName];
    if (!n) continue;
    const c = await n(r);
    if (c.length)
      for (const a of c) t.push(a);
  }
  return t;
}
const Mr = {
  LNodeType: Pr,
  DOType: Lr,
  DAType: Ar,
  DO: tt,
  SDO: tt,
  DA: et,
  BDA: et
};
var Tr = Object.defineProperty, Le = (e, t, i, r) => {
  for (var n = void 0, c = e.length - 1, a; c >= 0; c--)
    (a = e[c]) && (n = a(t, i, n) || n);
  return n && Tr(t, i, n), n;
};
class Re extends ce {
  dispatch(t) {
    const i = t.kind, r = t.title, n = t.message;
    i ? this.dispatchEvent(Yt(t)) : this.dispatchEvent(
      he({
        validatorId: this.pluginId,
        title: r,
        message: n
      })
    );
  }
  async validate() {
    const [t, i, r] = [
      this.doc.documentElement.getAttribute("version") ?? "",
      this.doc.documentElement.getAttribute("revision") ?? "",
      this.doc.documentElement.getAttribute("release") ?? ""
    ];
    if (!(t === "2007" && i === "B" && Number(r) > 3)) {
      this.dispatchEvent(
        he({
          validatorId: this.pluginId,
          title: M("diag.missingnsd"),
          message: ""
        })
      );
      return;
    }
    const n = this.doc.querySelector("DataTypeTemplates");
    if (!n) return;
    const c = await se(n);
    c.length === 0 && c.push({
      title: M("diag.zeroissues")
    }), c.forEach(
      (a) => this.dispatchEvent(
        he({
          ...a,
          validatorId: this.pluginId
        })
      )
    );
  }
}
Le([
  m({ attribute: !1 })
], Re.prototype, "doc");
Le([
  m()
], Re.prototype, "docName");
Le([
  m()
], Re.prototype, "pluginId");
export {
  Re as default
};
