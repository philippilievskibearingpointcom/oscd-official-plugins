import { NodePart as $t, AttributePart as Dt, directive as Ye, html as ue } from "lit-html";
import { Select as Pt } from "@material/mwc-select";
import { LitElement as Ae, query as H, property as m, state as x, html as v, css as we, customElement as K, queryAsync as et, eventOptions as Nt } from "lit-element";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
import { TextField as Lt } from "@material/mwc-textfield";
import "@material/mwc-formfield";
const Et = 1e3 * 60, Le = "langChanged";
function Rt(t, e, i) {
  return Object.entries(ye(e || {})).reduce((r, [c, n]) => r.replace(new RegExp(`{{[  ]*${c}[  ]*}}`, "gm"), String(ye(n))), t);
}
function Ft(t, e) {
  const i = t.split(".");
  let r = e.strings;
  for (; r != null && i.length > 0; )
    r = r[i.shift()];
  return r != null ? r.toString() : null;
}
function ye(t) {
  return typeof t == "function" ? t() : t;
}
const Ot = () => ({
  loader: () => Promise.resolve({}),
  empty: (t) => `[${t}]`,
  lookup: Ft,
  interpolate: Rt,
  translationCache: {}
});
let Mt = Ot();
function Tt(t, e) {
  const i = (r) => t(r.detail);
  return window.addEventListener(Le, i, e), () => window.removeEventListener(Le, i);
}
function Z(t, e, i = Mt) {
  let r = i.translationCache[t] || (i.translationCache[t] = i.lookup(t, i) || i.empty(t, i));
  return e = e != null ? ye(e) : null, e != null ? i.interpolate(r, e, i) : r;
}
function tt(t) {
  return t instanceof $t ? t.startNode.isConnected : t instanceof Dt ? t.committer.element.isConnected : t.element.isConnected;
}
function zt(t) {
  for (const [e] of t)
    tt(e) || t.delete(e);
}
function Gt(t) {
  "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t);
}
function Vt(t, e) {
  setInterval(() => Gt(() => zt(t)), e);
}
const Ie = /* @__PURE__ */ new Map();
function Ht() {
  Tt((t) => {
    for (const [e, i] of Ie)
      tt(e) && it(e, i, t);
  });
}
Ht();
Vt(Ie, Et);
function it(t, e, i) {
  const r = e(i);
  t.value !== r && (t.setValue(r), t.commit());
}
Ye((t) => (e) => {
  Ie.set(e, t), it(e, t);
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
const rt = /* @__PURE__ */ new WeakMap(), $e = (t) => (...e) => {
  const i = t(...e);
  return rt.set(i, !0), i;
}, Ee = (t) => typeof t == "function" && rt.has(t);
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
const he = {};
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
const Bt = (t) => t === null || !(typeof t == "object" || typeof t == "function");
class oe {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== he && (!Bt(e) || e !== this.value) && (this.value = e, Ee(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; Ee(this.value); ) {
      const e = this.value;
      this.value = he, e(this);
    }
    this.value !== he && this.committer.commit();
  }
}
class ct extends oe {
}
let qt = !1;
(() => {
  try {
    const t = {
      get capture() {
        return qt = !0, !1;
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
function Re(t, e, i) {
  const r = t.createElementNS(t.documentElement.namespaceURI, e);
  return Object.entries(i).filter(([c, n]) => n !== null).forEach(([c, n]) => r.setAttribute(c, n)), r;
}
var ge = function(t, e) {
  return ge = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
    i.__proto__ = r;
  } || function(i, r) {
    for (var c in r) Object.prototype.hasOwnProperty.call(r, c) && (i[c] = r[c]);
  }, ge(t, e);
};
function jt(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ge(t, e);
  function i() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
}
var ee = function() {
  return ee = Object.assign || function(e) {
    for (var i, r = 1, c = arguments.length; r < c; r++) {
      i = arguments[r];
      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    }
    return e;
  }, ee.apply(this, arguments);
};
function l(t, e, i, r) {
  var c = arguments.length, n = c < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, i) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(t, e, i, r);
  else for (var o = t.length - 1; o >= 0; o--) (a = t[o]) && (n = (c < 3 ? a(n) : c > 3 ? a(e, i, n) : a(e, i)) || n);
  return c > 3 && n && Object.defineProperty(e, i, n), n;
}
function te(t) {
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
function Ut(t, e) {
  var i = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return i.call(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const nt = () => {
}, Wt = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", nt, Wt);
document.removeEventListener("x", nt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class at extends Ae {
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
var Xt = (
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
var Zt = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Kt = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Fe = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function Qt(t, e, i) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, c = e.y, n = r + i.left, a = c + i.top, o, p;
  if (t.type === "touchstart") {
    var u = t;
    o = u.changedTouches[0].pageX - n, p = u.changedTouches[0].pageY - a;
  } else {
    var h = t;
    o = h.pageX - n, p = h.pageY - a;
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
var Oe = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Me = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], ie = [], Jt = (
  /** @class */
  function(t) {
    jt(e, t);
    function e(i) {
      var r = t.call(this, ee(ee({}, e.defaultAdapter), i)) || this;
      return r.activationAnimationHasEnded = !1, r.activationTimer = 0, r.fgDeactivationRemovalTimer = 0, r.fgScale = "0", r.frame = { width: 0, height: 0 }, r.initialSize = 0, r.layoutFrame = 0, r.maxRadius = 0, r.unboundedCoords = { left: 0, top: 0 }, r.activationState = r.defaultActivationState(), r.activationTimerCallback = function() {
        r.activationAnimationHasEnded = !0, r.runDeactivationUXLogicIfReady();
      }, r.activateHandler = function(c) {
        r.activateImpl(c);
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
        return Zt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Kt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Fe;
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
        var c = e.cssClasses, n = c.ROOT, a = c.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.addClass(n), i.adapter.isUnbounded() && (i.adapter.addClass(a), i.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var i = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var r = e.cssClasses, c = r.ROOT, n = r.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.removeClass(c), i.adapter.removeClass(n), i.removeCssVars();
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
      var r, c;
      if (i) {
        try {
          for (var n = te(Oe), a = n.next(); !a.done; a = n.next()) {
            var o = a.value;
            this.adapter.registerInteractionHandler(o, this.activateHandler);
          }
        } catch (p) {
          r = { error: p };
        } finally {
          try {
            a && !a.done && (c = n.return) && c.call(n);
          } finally {
            if (r) throw r.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(i) {
      var r, c;
      if (i.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var n = te(Me), a = n.next(); !a.done; a = n.next()) {
            var o = a.value;
            this.adapter.registerDocumentInteractionHandler(o, this.deactivateHandler);
          }
        } catch (p) {
          r = { error: p };
        } finally {
          try {
            a && !a.done && (c = n.return) && c.call(n);
          } finally {
            if (r) throw r.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var i, r;
      try {
        for (var c = te(Oe), n = c.next(); !n.done; n = c.next()) {
          var a = n.value;
          this.adapter.deregisterInteractionHandler(a, this.activateHandler);
        }
      } catch (o) {
        i = { error: o };
      } finally {
        try {
          n && !n.done && (r = c.return) && r.call(c);
        } finally {
          if (i) throw i.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var i, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var c = te(Me), n = c.next(); !n.done; n = c.next()) {
          var a = n.value;
          this.adapter.deregisterDocumentInteractionHandler(a, this.deactivateHandler);
        }
      } catch (o) {
        i = { error: o };
      } finally {
        try {
          n && !n.done && (r = c.return) && r.call(c);
        } finally {
          if (i) throw i.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var i = this, r = e.strings, c = Object.keys(r);
      c.forEach(function(n) {
        n.indexOf("VAR_") === 0 && i.adapter.updateCssVariable(r[n], null);
      });
    }, e.prototype.activateImpl = function(i) {
      var r = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var c = this.activationState;
        if (!c.isActivated) {
          var n = this.previousActivationEvent, a = n && i !== void 0 && n.type !== i.type;
          if (!a) {
            c.isActivated = !0, c.isProgrammatic = i === void 0, c.activationEvent = i, c.wasActivatedByPointer = c.isProgrammatic ? !1 : i !== void 0 && (i.type === "mousedown" || i.type === "touchstart" || i.type === "pointerdown");
            var o = i !== void 0 && ie.length > 0 && ie.some(function(p) {
              return r.adapter.containsEventTarget(p);
            });
            if (o) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (ie.push(i.target), this.registerDeactivationHandlers(i)), c.wasElementMadeActive = this.checkElementMadeActive(i), c.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              ie = [], !c.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (c.wasElementMadeActive = r.checkElementMadeActive(i), c.wasElementMadeActive && r.animateActivation()), c.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var i = this, r = e.strings, c = r.VAR_FG_TRANSLATE_START, n = r.VAR_FG_TRANSLATE_END, a = e.cssClasses, o = a.FG_DEACTIVATION, p = a.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var h = "", g = "";
      if (!this.adapter.isUnbounded()) {
        var y = this.getFgTranslationCoordinates(), I = y.startPoint, A = y.endPoint;
        h = I.x + "px, " + I.y + "px", g = A.x + "px, " + A.y + "px";
      }
      this.adapter.updateCssVariable(c, h), this.adapter.updateCssVariable(n, g), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(o), this.adapter.computeBoundingRect(), this.adapter.addClass(p), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, r = i.activationEvent, c = i.wasActivatedByPointer, n;
      c ? n = Qt(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : n = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, n = {
        x: n.x - this.initialSize / 2,
        y: n.y - this.initialSize / 2
      };
      var a = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: n, endPoint: a };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var i = this, r = e.cssClasses.FG_DEACTIVATION, c = this.activationState, n = c.hasDeactivationUXRun, a = c.isActivated, o = n || !a;
      o && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        i.adapter.removeClass(r);
      }, Fe.FG_DEACTIVATION_MS));
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
        var c = ee({}, r);
        r.isProgrammatic ? (requestAnimationFrame(function() {
          i.animateDeactivation(c);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          i.activationState.hasDeactivationUXRun = !0, i.animateDeactivation(c), i.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(i) {
      var r = i.wasActivatedByPointer, c = i.wasElementMadeActive;
      (r || c) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var i = this;
      this.frame = this.adapter.computeBoundingRect();
      var r = Math.max(this.frame.height, this.frame.width), c = function() {
        var a = Math.sqrt(Math.pow(i.frame.width, 2) + Math.pow(i.frame.height, 2));
        return a + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : c();
      var n = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && n % 2 !== 0 ? this.initialSize = n - 1 : this.initialSize = n, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var i = e.strings, r = i.VAR_FG_SIZE, c = i.VAR_LEFT, n = i.VAR_TOP, a = i.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(a, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(c, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(n, this.unboundedCoords.top + "px"));
    }, e;
  }(Xt)
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
class Yt {
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
const Te = /* @__PURE__ */ new WeakMap(), De = $e((t) => (e) => {
  if (!(e instanceof oe) || e instanceof ct || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = e, { element: r } = i;
  let c = Te.get(e);
  c === void 0 && (r.setAttribute("class", i.strings.join(" ")), Te.set(e, c = /* @__PURE__ */ new Set()));
  const n = r.classList || new Yt(r);
  c.forEach((a) => {
    a in t || (n.remove(a), c.delete(a));
  });
  for (const a in t) {
    const o = t[a];
    o != c.has(a) && (o ? (n.add(a), c.add(a)) : (n.remove(a), c.delete(a)));
  }
  typeof n.commit == "function" && n.commit();
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
const ze = /* @__PURE__ */ new WeakMap(), ei = $e((t) => (e) => {
  if (!(e instanceof oe) || e instanceof ct || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = e, { style: r } = i.element;
  let c = ze.get(e);
  c === void 0 && (r.cssText = i.strings.join(" "), ze.set(e, c = /* @__PURE__ */ new Set())), c.forEach((n) => {
    n in t || (c.delete(n), n.indexOf("-") === -1 ? r[n] = null : r.removeProperty(n));
  });
  for (const n in t)
    c.add(n), n.indexOf("-") === -1 ? r[n] = t[n] : r.setProperty(n, t[n]);
});
class w extends at {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Jt;
  }
  get isActive() {
    return Ut(this.parentElement || this, ":active");
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
    return v`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${De(r)}"
          style="${ei({
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
  H(".mdc-ripple-surface")
], w.prototype, "mdcRoot", void 0);
l([
  m({ type: Boolean })
], w.prototype, "primary", void 0);
l([
  m({ type: Boolean })
], w.prototype, "accent", void 0);
l([
  m({ type: Boolean })
], w.prototype, "unbounded", void 0);
l([
  m({ type: Boolean })
], w.prototype, "disabled", void 0);
l([
  m({ type: Boolean })
], w.prototype, "activated", void 0);
l([
  m({ type: Boolean })
], w.prototype, "selected", void 0);
l([
  m({ type: Boolean })
], w.prototype, "internalUseStateLayerCustomProperties", void 0);
l([
  x()
], w.prototype, "hovering", void 0);
l([
  x()
], w.prototype, "bgFocused", void 0);
l([
  x()
], w.prototype, "fgActivation", void 0);
l([
  x()
], w.prototype, "fgDeactivation", void 0);
l([
  x()
], w.prototype, "fgScale", void 0);
l([
  x()
], w.prototype, "fgSize", void 0);
l([
  x()
], w.prototype, "translateStart", void 0);
l([
  x()
], w.prototype, "translateEnd", void 0);
l([
  x()
], w.prototype, "leftPos", void 0);
l([
  x()
], w.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ti = we`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let ve = class extends w {
};
ve.styles = [ti];
ve = l([
  K("mwc-ripple")
], ve);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Pe = (t) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e, i) => {
    if (e.constructor._observers) {
      if (!e.constructor.hasOwnProperty("_observers")) {
        const r = e.constructor._observers;
        e.constructor._observers = /* @__PURE__ */ new Map(), r.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (c, n) => e.constructor._observers.set(n, c)
        );
      }
    } else {
      e.constructor._observers = /* @__PURE__ */ new Map();
      const r = e.updated;
      e.updated = function(c) {
        r.call(this, c), c.forEach((n, a) => {
          const p = this.constructor._observers.get(a);
          p !== void 0 && p.call(this, this[a], n);
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
class ot {
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
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class E extends Ae {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new ot(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const e = this.renderText(), i = this.graphic ? this.renderGraphic() : v``, r = this.hasMeta ? this.renderMeta() : v``;
    return v`
      ${this.renderRipple()}
      ${i}
      ${e}
      ${r}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? v`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? v`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return v`
      <span class="mdc-deprecated-list-item__graphic material-icons ${De(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return v`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return v`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return v`<slot></slot>`;
  }
  renderTwoline() {
    return v`
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
l([
  H("slot")
], E.prototype, "slotElement", void 0);
l([
  et("mwc-ripple")
], E.prototype, "ripple", void 0);
l([
  m({ type: String })
], E.prototype, "value", void 0);
l([
  m({ type: String, reflect: !0 })
], E.prototype, "group", void 0);
l([
  m({ type: Number, reflect: !0 })
], E.prototype, "tabindex", void 0);
l([
  m({ type: Boolean, reflect: !0 }),
  Pe(function(t) {
    t ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], E.prototype, "disabled", void 0);
l([
  m({ type: Boolean, reflect: !0 })
], E.prototype, "twoline", void 0);
l([
  m({ type: Boolean, reflect: !0 })
], E.prototype, "activated", void 0);
l([
  m({ type: String, reflect: !0 })
], E.prototype, "graphic", void 0);
l([
  m({ type: Boolean })
], E.prototype, "multipleGraphics", void 0);
l([
  m({ type: Boolean })
], E.prototype, "hasMeta", void 0);
l([
  m({ type: Boolean, reflect: !0 }),
  Pe(function(t) {
    t ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], E.prototype, "noninteractive", void 0);
l([
  m({ type: Boolean, reflect: !0 }),
  Pe(function(t) {
    const e = this.getAttribute("role"), i = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (i && t ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(t, "property");
  })
], E.prototype, "selected", void 0);
l([
  x()
], E.prototype, "shouldRenderRipple", void 0);
l([
  x()
], E.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ii = we`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ke = class extends E {
};
ke.styles = [ii];
ke = l([
  K("mwc-list-item")
], ke);
var ri = Object.defineProperty, ci = Object.getOwnPropertyDescriptor, V = (t, e, i, r) => {
  for (var c = r > 1 ? void 0 : r ? ci(e, i) : e, n = t.length - 1, a; n >= 0; n--)
    (a = t[n]) && (c = (r ? a(e, i, c) : a(c)) || c);
  return r && c && ri(e, i, c), c;
};
let T = class extends Lt {
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
    return this.reservedValues && this.reservedValues.some((t) => t === this.value) ? (this.setCustomValidity(Z("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? v`<div style="position:relative;">
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
      </div>` : v``;
  }
  renderMulplierList() {
    return v`${this.multipliers.map(
      (t) => v`<mwc-list-item ?selected=${t === this.multiplier}
          >${t === null ? Z("textfield.noMultiplier") : t}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? v`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : v``;
  }
  render() {
    return v`
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
V([
  m({ type: Boolean })
], T.prototype, "nullable", 2);
V([
  m({ type: Array })
], T.prototype, "multipliers", 2);
V([
  m({ type: String })
], T.prototype, "multiplier", 1);
V([
  m({ type: String })
], T.prototype, "unit", 2);
V([
  x()
], T.prototype, "null", 1);
V([
  m({ type: String })
], T.prototype, "maybeValue", 1);
V([
  m({ type: String })
], T.prototype, "defaultValue", 2);
V([
  m({ type: Array })
], T.prototype, "reservedValues", 2);
V([
  H("mwc-switch")
], T.prototype, "nullSwitch", 2);
V([
  H("mwc-menu")
], T.prototype, "multiplierMenu", 2);
V([
  H("mwc-icon-button")
], T.prototype, "multiplierButton", 2);
T = V([
  K("wizard-textfield")
], T);
var ni = Object.defineProperty, ai = Object.getOwnPropertyDescriptor, W = (t, e, i, r) => {
  for (var c = r > 1 ? void 0 : r ? ai(e, i) : e, n = t.length - 1, a; n >= 0; n--)
    (a = t[n]) && (c = (r ? a(e, i, c) : a(c)) || c);
  return r && c && ni(e, i, c), c;
};
let B = class extends Pt {
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
    return this.nullable ? v`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : v``;
  }
  render() {
    return v`
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
], B.prototype, "nullable", 2);
W([
  x()
], B.prototype, "null", 1);
W([
  m({ type: String })
], B.prototype, "maybeValue", 1);
W([
  m({ type: String })
], B.prototype, "defaultValue", 2);
W([
  m({ type: Array })
], B.prototype, "reservedValues", 2);
W([
  H("mwc-switch")
], B.prototype, "nullSwitch", 2);
B = W([
  K("wizard-select")
], B);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function oi(t, e, i) {
  const r = t.constructor;
  if (!i) {
    const o = `__${e}`;
    if (i = r.getPropertyDescriptor(e, o), !i)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const c = i;
  let n = "";
  if (!c.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const a = {
    configurable: !0,
    enumerable: !0,
    set(o) {
      n === "" && (n = r.getPropertyOptions(e).attribute), this.hasAttribute(n) && this.removeAttribute(n), c.set.call(this, o);
    }
  };
  return c.get && (a.get = function() {
    return c.get.call(this);
  }), a;
}
function Ne(t, e, i) {
  if (e !== void 0)
    return oi(t, e, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class st extends at {
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
st.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const fe = /* @__PURE__ */ new WeakMap(), X = $e((t) => (e) => {
  const i = fe.get(e);
  if (t === void 0 && e instanceof oe) {
    if (i !== void 0 || !fe.has(e)) {
      const r = e.committer.name;
      e.committer.element.removeAttribute(r);
    }
  } else t !== i && e.setValue(t);
  fe.set(e, t);
});
class D extends st {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new ot(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(e) {
    const i = e.get("indeterminate"), r = e.get("checked"), c = e.get("disabled");
    if (i !== void 0 || r !== void 0 || c !== void 0) {
      const n = this.calculateAnimationStateName(!!r, !!i, !!c), a = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${n}-${a}`;
    }
    super.update(e);
  }
  calculateAnimationStateName(e, i, r) {
    return r ? "disabled" : i ? "indeterminate" : e ? "checked" : "unchecked";
  }
  // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? v`<mwc-ripple
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
    return v`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${De(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${X(this.name)}"
              aria-checked="${X(r)}"
              aria-label="${X(this.ariaLabel)}"
              aria-labelledby="${X(this.ariaLabelledBy)}"
              aria-describedby="${X(this.ariaDescribedBy)}"
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
l([
  H(".mdc-checkbox")
], D.prototype, "mdcRoot", void 0);
l([
  H("input")
], D.prototype, "formElement", void 0);
l([
  m({ type: Boolean, reflect: !0 })
], D.prototype, "checked", void 0);
l([
  m({ type: Boolean })
], D.prototype, "indeterminate", void 0);
l([
  m({ type: Boolean, reflect: !0 })
], D.prototype, "disabled", void 0);
l([
  m({ type: String, reflect: !0 })
], D.prototype, "name", void 0);
l([
  m({ type: String })
], D.prototype, "value", void 0);
l([
  Ne,
  m({ type: String, attribute: "aria-label" })
], D.prototype, "ariaLabel", void 0);
l([
  Ne,
  m({ type: String, attribute: "aria-labelledby" })
], D.prototype, "ariaLabelledBy", void 0);
l([
  Ne,
  m({ type: String, attribute: "aria-describedby" })
], D.prototype, "ariaDescribedBy", void 0);
l([
  m({ type: Boolean })
], D.prototype, "reducedTouchTarget", void 0);
l([
  x()
], D.prototype, "animationClass", void 0);
l([
  x()
], D.prototype, "shouldRenderRipple", void 0);
l([
  x()
], D.prototype, "focused", void 0);
l([
  x()
], D.prototype, "useStateLayerCustomProperties", void 0);
l([
  et("mwc-ripple")
], D.prototype, "ripple", void 0);
l([
  Nt({ passive: !0 })
], D.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const si = we`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let xe = class extends D {
};
xe.styles = [si];
xe = l([
  K("mwc-checkbox")
], xe);
var di = Object.defineProperty, li = Object.getOwnPropertyDescriptor, z = (t, e, i, r) => {
  for (var c = r > 1 ? void 0 : r ? li(e, i) : e, n = t.length - 1, a; n >= 0; n--)
    (a = t[n]) && (c = (r ? a(e, i, c) : a(c)) || c);
  return r && c && di(e, i, c), c;
};
let M = class extends Ae {
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
    return this.nullable ? v`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : v``;
  }
  render() {
    return v`
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
], M.prototype, "label", 2);
z([
  m({ type: String })
], M.prototype, "helper", 2);
z([
  m({ type: Boolean })
], M.prototype, "nullable", 2);
z([
  m({ type: Boolean })
], M.prototype, "defaultChecked", 2);
z([
  m({ type: String })
], M.prototype, "maybeValue", 1);
z([
  m({ type: Boolean })
], M.prototype, "disabled", 2);
z([
  x()
], M.prototype, "null", 1);
z([
  x()
], M.prototype, "checked", 1);
z([
  x()
], M.prototype, "deactivateCheckbox", 2);
z([
  x()
], M.prototype, "formfieldLabel", 1);
z([
  H("mwc-switch")
], M.prototype, "nullSwitch", 2);
z([
  H("mwc-checkbox")
], M.prototype, "checkbox", 2);
M = z([
  K("wizard-checkbox")
], M);
function re(t) {
  return t instanceof T || t instanceof B || t instanceof M ? t.maybeValue : t.value ?? null;
}
function R(t) {
  const e = t.split(">"), i = e.pop() ?? "";
  return [e.join(">"), i];
}
const _ = ":not(*)";
function pi(t) {
  return `${t.getAttribute("version")}	${t.getAttribute("revision")}`;
}
function mi(t, e) {
  const [i, r] = e.split("	");
  return !i || !r ? _ : `${t}[version="${i}"][revision="${r}"]`;
}
function Ge(t) {
  return C(t.parentElement) + ">" + t.getAttribute("connectivityNode");
}
function Ve(t, e) {
  const [i, r] = R(e), c = $[t].parents.flatMap(
    (n) => N(n, i).split(",")
  );
  return L(
    c,
    [">"],
    [`${t}[connectivityNode="${r}"]`]
  ).map((n) => n.join("")).join(",");
}
function ui(t) {
  const [e, i, r, c, n, a] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((o) => t.getAttribute(o));
  return e === "None" ? `${C(t.parentElement)}>(${c} ${a} ${n})` : `${e} ${i || "(Client)"}/${r ?? ""} ${c} ${n ?? ""}`;
}
function hi(t, e) {
  if (e.endsWith(")")) {
    const [y, I] = R(e), [A, F, P] = I.substring(1, I.length - 1).split(" ");
    if (!A || !F) return _;
    const O = $[t].parents.flatMap(
      (G) => N(G, y).split(",")
    );
    return L(
      O,
      [">"],
      [`${t}[iedName="None"][lnClass="${A}"][lnType="${F}"][lnInst="${P}"]`]
    ).map((G) => G.join("")).join(",");
  }
  const [i, r, c, n, a] = e.split(/[ /]/);
  if (!i || !r || !n) return _;
  const [
    o,
    p,
    u,
    h,
    g
  ] = [
    [`[iedName="${i}"]`],
    r === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${r}"]`],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${n}"]`],
    a ? [`[lnInst="${a}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return L(
    [t],
    o,
    p,
    u,
    h,
    g
  ).map((y) => y.join("")).join(",");
}
function fi(t) {
  return `${C(t.parentElement)}>${t.getAttribute(
    "iedName"
  )} ${t.getAttribute("apName")}`;
}
function bi(t, e) {
  const [i, r] = R(e), [c, n] = r.split(" ");
  return `${N(
    "IED",
    i
  )}>${t}[iedName="${c}"][apName="${n}"]`;
}
function yi(t) {
  return `${C(t.parentElement)}>${t.getAttribute("associationID") ?? ""}`;
}
function gi(t, e) {
  const [i, r] = R(e);
  return r ? `${N(
    "Server",
    i
  )}>${t}[associationID="${r}"]` : _;
}
function vi(t) {
  return `${C(t.closest("IED"))}>>${t.getAttribute("inst")}`;
}
function ki(t, e) {
  const [i, r] = e.split(">>");
  return r ? `IED[name="${i}"] ${t}[inst="${r}"]` : _;
}
function xi(t) {
  const e = t.textContent, [i, r, c, n, a] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => t.getAttribute(o));
  return `${C(t.parentElement)}>${e} ${i || ""} ${r || ""}/${c ?? ""} ${n ?? ""} ${a ?? ""}`;
}
function Si(t, e) {
  const [i, r] = R(e), [c, n, a, o, p, u] = r.split(/[ /]/), [
    h,
    g,
    y,
    I,
    A,
    F
  ] = [
    $[t].parents.flatMap(
      (P) => N(P, i).split(",")
    ),
    [`${c}`],
    n ? [`[apRef="${n}"]`] : [":not([apRef])", '[apRef=""]'],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${p}"]`],
    u ? [`[lnInst="${u}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return L(
    h,
    [">"],
    [t],
    g,
    y,
    I,
    A,
    F
  ).map((P) => P.join("")).join(",");
}
function _i(t) {
  const [e, i, r, c, n, a, o, p] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((h) => t.getAttribute(h)), u = `${e}/${i ?? ""} ${r} ${c ?? ""}.${n} ${a || ""}`;
  return `${C(t.parentElement)}>${u} (${o}${p ? " [" + p + "]" : ""})`;
}
function Ci(t, e) {
  const [i, r] = R(e), [c, n, a, o] = r.split(/[ /.]/), p = r.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), u = p && p[1] ? p[1] : "", h = p && p[2] ? p[2] : "", g = r.match(/\(([A-Z]{2})/), y = r.match(/ \[([0-9]{1,2})\]/), I = g && g[1] ? g[1] : "", A = y && y[1] ? y[1] : "", [
    F,
    P,
    O,
    G,
    Q,
    de,
    le,
    pe,
    me
  ] = [
    $[t].parents.flatMap(
      (J) => N(J, i).split(",")
    ),
    [`[ldInst="${c}"]`],
    n ? [`[prefix="${n}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    o ? [`[lnInst="${o}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${u}"]`],
    h ? [`[daName="${h}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${I}"]`],
    A ? [`[ix="${A}"]`] : [":not([ix])", '[ix=""]']
  ];
  return L(
    F,
    [">"],
    [t],
    P,
    O,
    G,
    Q,
    de,
    le,
    pe,
    me
  ).map((J) => J.join("")).join(",");
}
function Ai(t) {
  if (!t.parentElement) return NaN;
  const e = C(t.parentElement), i = t.getAttribute("iedName"), r = t.getAttribute("intAddr"), c = Array.from(
    t.parentElement.querySelectorAll(`ExtRef[intAddr="${r}"]`)
  ).indexOf(t);
  if (r) return `${e}>${r}[${c}]`;
  const [
    n,
    a,
    o,
    p,
    u,
    h,
    g,
    y,
    I,
    A,
    F,
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
  ].map((Q) => t.getAttribute(Q)), O = P ? `${g}:${P} ${y ?? ""}/${I ?? ""} ${A ?? ""} ${F ?? ""}` : "", G = `${i} ${n}/${a ?? ""} ${o} ${p ?? ""} ${u} ${h || ""}`;
  return `${e}>${O ? O + " " : ""}${G}${r ? `@${r}` : ""}`;
}
function wi(t, e) {
  const [i, r] = R(e), c = $[t].parents.flatMap(
    (Y) => N(Y, i).split(",")
  );
  if (r.endsWith("]")) {
    const [Y] = r.split("["), wt = [`[intAddr="${Y}"]`];
    return L(c, [">"], [t], wt).map((It) => It.join("")).join(",");
  }
  let n, a, o, p, u, h, g, y, I, A, F, P, O, G;
  !r.includes(":") && !r.includes("@") ? [n, a, o, p, u, h, g] = r.split(/[ /]/) : r.includes(":") && !r.includes("@") ? [
    y,
    I,
    A,
    F,
    P,
    O,
    n,
    a,
    o,
    p,
    u,
    h,
    g
  ] = r.split(/[ /:]/) : !r.includes(":") && r.includes("@") ? [n, a, o, p, u, h, g, G] = r.split(/[ /@]/) : [
    y,
    I,
    A,
    F,
    P,
    O,
    n,
    a,
    o,
    p,
    u,
    h,
    g,
    G
  ] = r.split(/[ /:@]/);
  const [
    Q,
    de,
    le,
    pe,
    me,
    J,
    gt,
    vt,
    kt,
    xt,
    St,
    _t,
    Ct,
    At
  ] = [
    n ? [`[iedName="${n}"]`] : [":not([iedName])"],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    p ? [`[lnClass="${p}"]`] : [":not([lnClass])"],
    u ? [`[lnInst="${u}"]`] : [":not([lnInst])", '[lnInst=""]'],
    h ? [`[doName="${h}"]`] : [":not([doName])"],
    g ? [`[daName="${g}"]`] : [":not([daName])", '[daName=""]'],
    y ? [`[serviceType="${y}"]`] : [":not([serviceType])", '[serviceType=""]'],
    I ? [`[srcCBName="${I}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    A ? [`[srcLDInst="${A}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    F ? [`[srcPrefix="${F}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    P ? [`[srcLNClass="${P}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    O ? [`[srcLNInst="${O}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    G ? [`[intAddr="${G}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return L(
    c,
    [">"],
    [t],
    Q,
    de,
    le,
    pe,
    me,
    J,
    gt,
    vt,
    kt,
    xt,
    St,
    _t,
    Ct,
    At
  ).map((Y) => Y.join("")).join(",");
}
function Ii(t) {
  const [e, i, r] = ["prefix", "lnClass", "inst"].map(
    (c) => t.getAttribute(c)
  );
  return `${C(t.parentElement)}>${e ?? ""} ${i} ${r}`;
}
function $i(t, e) {
  const [i, r] = R(e), c = $[t].parents.flatMap(
    (g) => N(g, i).split(",")
  ), [n, a, o] = r.split(" ");
  if (!a) return _;
  const [p, u, h] = [
    n ? [`[prefix="${n}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    [`[inst="${o}"]`]
  ];
  return L(
    c,
    [">"],
    [t],
    p,
    u,
    h
  ).map((g) => g.join("")).join(",");
}
function Di(t) {
  const [e, i, r, c, n, a] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => t.getAttribute(o));
  return `${C(t.parentElement)}>${i} ${e || ""} ${r}/${c ?? ""} ${n} ${a}`;
}
function Pi(t, e) {
  const [i, r] = R(e), c = $[t].parents.flatMap(
    (O) => N(O, i).split(",")
  ), [n, a, o, p, u, h] = r.split(/[ /]/), [
    g,
    y,
    I,
    A,
    F,
    P
  ] = [
    n ? [`[iedName="${n}"]`] : [":not([iedName])", '[iedName=""]'],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    p ? [`[prefix="${p}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${u}"]`],
    h ? [`[lnInst="${h}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return L(
    c,
    [">"],
    [t],
    g,
    y,
    I,
    A,
    F,
    P
  ).map((O) => O.join("")).join(",");
}
function He(t) {
  const [e, i] = ["name", "ix"].map((r) => t.getAttribute(r));
  return `${C(t.parentElement)}>${e}${i ? "[" + i + "]" : ""}`;
}
function Se(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [r, c] = R(e), [n, a, o, p] = c.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!a) return _;
  if (i === 0) return `${t}[name="${a}"]`;
  const u = $[t].parents.flatMap(
    (y) => y === "SDI" ? Se(y, r, i - 1).split(",") : N(y, r).split(",")
  ).filter((y) => !y.startsWith(_));
  if (u.length === 0) return _;
  const [h, g] = [
    [`[name="${a}"]`],
    p ? [`[ix="${p}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return L(
    u,
    [">"],
    [t],
    h,
    g
  ).map((y) => y.join("")).join(",");
}
function Ni(t) {
  if (!t.parentElement) return NaN;
  const e = t.getAttribute("sGroup"), i = Array.from(t.parentElement.children).filter((r) => r.getAttribute("sGroup") === e).findIndex((r) => r.isSameNode(t));
  return `${C(t.parentElement)}>${e ? e + "." : ""} ${i}`;
}
function Li(t, e) {
  const [i, r] = R(e), [c, n] = r.split(" "), a = parseFloat(n), o = $[t].parents.flatMap(
    (h) => N(h, i).split(",")
  ), [p, u] = [
    c ? [`[sGroup="${c}"]`] : [""],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return L(
    o,
    [">"],
    [t],
    p,
    u
  ).map((h) => h.join("")).join(",");
}
function Ei(t) {
  const [e, i] = ["iedName", "apName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function Ri(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? _ : `${t}[iedName="${i}"][apName="${r}"]`;
}
function Be(t) {
  const [e, i] = ["ldInst", "cbName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function qe(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? _ : `${t}[ldInst="${i}"][cbName="${r}"]`;
}
function Fi(t) {
  if (!t.parentElement) return NaN;
  if (!t.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = t.getAttribute("type");
  return t.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${C(t.parentElement)}>${e}`;
}
function Oi(t, e) {
  const [i, r] = R(e), [c, n] = [
    $[t].parents.flatMap(
      (a) => N(a, i).split(",")
    ),
    r ? [`[type="${r}"]`] : [""]
  ];
  return L(c, [">"], [t], n).map((a) => a.join("")).join(",");
}
function Mi(t) {
  if (!t.parentElement) return NaN;
  const e = t.parentElement, i = t.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${C(t.parentElement)}>${i}`;
  const r = Array.from(t.parentElement.children).filter((c) => c.getAttribute("type") === i).findIndex((c) => c.isSameNode(t));
  return `${C(t.parentElement)}>${i} [${r}]`;
}
function Ti(t, e) {
  const [i, r] = R(e), [c] = r.split(" "), n = r && r.match(/\[([0-9]+)\]/) && r.match(/\[([0-9]+)\]/)[1] ? parseFloat(r.match(/\[([0-9]+)\]/)[1]) : NaN, [a, o, p] = [
    $[t].parents.flatMap(
      (u) => N(u, i).split(",")
    ),
    [`[type="${c}"]`],
    n ? [`:nth-child(${n + 1})`] : [""]
  ];
  return L(
    a,
    [">"],
    [t],
    o,
    p
  ).map((u) => u.join("")).join(",");
}
function zi(t) {
  return `${C(t.parentElement)}>${t.getAttribute("ord")}`;
}
function Gi(t, e) {
  const [i, r] = R(e);
  return `${N("EnumType", i)}>${t}[ord="${r}"]`;
}
function Vi(t) {
  return `${C(t.parentElement)}>${t.getAttribute("type") || "8-MMS"}	${t.textContent}`;
}
function Hi(t, e) {
  const [i, r] = R(e), [c, n] = r.split("	"), [a] = [
    $[t].parents.flatMap(
      (o) => N(o, i).split(",")
    )
  ];
  return L(
    a,
    [">"],
    [t],
    [`[type="${c}"]`],
    [">"],
    [n]
  ).map((o) => o.join("")).join(",");
}
function Bi() {
  return "";
}
function qi() {
  return ":root";
}
function b(t) {
  return t.parentElement.tagName === "SCL" ? t.getAttribute("name") : `${C(t.parentElement)}>${t.getAttribute("name")}`;
}
function f(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [r, c] = R(e);
  if (!c) return _;
  if (i === 0) return `${t}[name="${c}"]`;
  const n = $[t].parents;
  if (!n) return _;
  const a = n.flatMap(
    (o) => $[o].selector === $.Substation.selector ? f(o, r, i - 1).split(",") : N(o, r).split(",")
  ).filter((o) => !o.startsWith(_));
  return a.length === 0 ? _ : L(a, [">"], [t], [`[name="${c}"]`]).map((o) => o.join("")).join(",");
}
function s(t) {
  return C(t.parentElement).toString();
}
function d(t, e) {
  const i = $[t].parents;
  if (!i) return _;
  const r = i.flatMap((c) => N(c, e).split(",")).filter((c) => !c.startsWith(_));
  return r.length === 0 ? _ : L(r, [">"], [t]).map((c) => c.join("")).join(",");
}
function ce(t) {
  return `#${t.id}`;
}
function ne(t, e) {
  const i = e.replace(/^#/, "");
  return i ? `${t}[id="${i}"]` : _;
}
const dt = [
  "TransformerWinding",
  "ConductingEquipment"
], lt = [
  "GeneralEquipment",
  "PowerTransformer",
  ...dt
], _e = ["Substation", "VoltageLevel", "Bay"], pt = ["Process", "Line"], mt = ["EqSubFunction", "EqFunction"], ji = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...lt,
  ..._e,
  ...pt,
  ...mt
], ut = ["ConnectivityNode", ...ji], Ui = ["GOOSESecurity", "SMVSecurity"], Wi = ["SubNetwork", ...Ui, ...ut], Xi = ["BDA", "DA"], Zi = ["SampledValueControl", "GSEControl"], Ki = ["LogControl", "ReportControl"], Qi = [...Zi, ...Ki], Ji = ["GSE", "SMV"], Yi = [
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
  ...Qi,
  ...Ji,
  ...Xi
], U = ["LN0", "LN"], er = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], tr = ["Subject", "IssuerName"], ir = ["MinTime", "MaxTime"], rr = ["LNodeType", "DOType", "DAType", "EnumType"], cr = [
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
], nr = ["DynDataSet", "ConfDataSet"], ar = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...nr
], or = ["ConfLogControl", "ConfSigRef"], sr = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], dr = ["SCL", ...Wi, ...Yi, ...rr], ht = [
  ...dr,
  ...er,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...tr,
  ...ir,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...U,
  ...cr,
  "DynAssociation",
  "SettingGroups",
  ...ar,
  ...or,
  ...sr,
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
], lr = new Set(ht);
function ft(t) {
  return lr.has(t);
}
const se = ["Text", "Private"], q = [...se], S = [...se], ae = [...se], je = [...S, "Val"], bt = [...q, "LNode"], j = [...bt], Ce = [...j], be = [
  ...j,
  "PowerTransformer",
  "GeneralEquipment"
], Ue = [
  ...Ce,
  "Terminal"
], We = [...S, "Address"], yt = [...q], Xe = [...yt, "IEDName"], Ze = [
  ...S,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], Ke = [
  ...j,
  "GeneralEquipment",
  "Function"
], Qe = [...yt, "TrgOps"], Je = [
  ...j,
  "GeneralEquipment",
  "EqSubFunction"
], $ = {
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
      ...q,
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
    identity: yi,
    selector: gi,
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
    children: [...je]
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
    identity: Di,
    selector: Pi,
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
      ...Ue,
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
    identity: Ei,
    selector: Ri,
    parents: ["SubNetwork"],
    children: [...S, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: b,
    selector: f,
    parents: ["Bay", "Line"],
    children: [...bt]
  },
  DA: {
    identity: b,
    selector: f,
    parents: ["DOType"],
    children: [...je]
  },
  DAI: {
    identity: He,
    selector: Se,
    parents: ["DOI", "SDI"],
    children: [...S, "Val"]
  },
  DAType: {
    identity: ce,
    selector: ne,
    parents: ["DataTypeTemplates"],
    children: [...ae, "BDA", "ProtNs"]
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
    identity: ce,
    selector: ne,
    parents: ["DataTypeTemplates"],
    children: [...ae, "SDO", "DA"]
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
    children: [...q, "FCDA"]
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
    identity: ce,
    selector: ne,
    parents: ["DataTypeTemplates"],
    children: [...ae, "EnumVal"]
  },
  EnumVal: {
    identity: zi,
    selector: Gi,
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
    children: [...Je]
  },
  EqSubFunction: {
    identity: b,
    selector: f,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...Je]
  },
  ExtRef: {
    identity: Ai,
    selector: wi,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: _i,
    selector: Ci,
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
      ...j,
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
      ...pt,
      ...mt,
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
    children: [...q, "Subject", "IssuerName"]
  },
  GSE: {
    identity: Be,
    selector: qe,
    parents: ["ConnectedAP"],
    children: [...We, "MinTime", "MaxTime"]
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
    children: [...Xe, "Protocol"]
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
    identity: pi,
    selector: mi,
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
    identity: xi,
    selector: Si,
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
    identity: fi,
    selector: bi,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: vi,
    selector: ki,
    parents: ["Server"],
    children: [...S, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: Ii,
    selector: $i,
    parents: ["AccessPoint", "LDevice"],
    children: [...Ze]
  },
  LN0: {
    identity: s,
    selector: d,
    parents: ["LDevice"],
    children: [
      ...Ze,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: ui,
    selector: hi,
    parents: [...ut],
    children: [...S]
  },
  LNodeType: {
    identity: ce,
    selector: ne,
    parents: ["DataTypeTemplates"],
    children: [...ae, "DO"]
  },
  Line: {
    identity: b,
    selector: f,
    parents: ["Process", "SCL"],
    children: [
      ...Ke,
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
    identity: Ge,
    selector: Ve,
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
    identity: Mi,
    selector: Ti,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: Fi,
    selector: Oi,
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
      ...Ke,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: Vi,
    selector: Hi,
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
    children: [...Xe, "SmvOpts"]
  },
  SecPerSamples: {
    identity: s,
    selector: d,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: Bi,
    selector: qi,
    parents: [],
    children: [
      ...se,
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
    children: [...q]
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
    identity: Be,
    selector: qe,
    parents: ["ConnectedAP"],
    children: [...We]
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
    children: [...q, "Subject", "IssuerName"]
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
      ...dt
    ],
    children: [...j, "EqFunction"]
  },
  SubFunction: {
    identity: b,
    selector: f,
    parents: ["SubFunction", "Function"],
    children: [
      ...j,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: b,
    selector: f,
    parents: ["Communication"],
    children: [...q, "BitRate", "ConnectedAP"]
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
    children: [...j, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: Ge,
    selector: Ve,
    parents: [...lt],
    children: [...S]
  },
  Text: {
    identity: s,
    selector: d,
    parents: ht.filter((t) => t !== "Text" && t !== "Private"),
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
      ...Ue,
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
    identity: Ni,
    selector: Li,
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
function N(t, e) {
  return typeof e != "string" ? _ : ft(t) ? $[t].selector(t, e) : t;
}
function C(t) {
  if (t === null) return NaN;
  if (t.closest("Private")) return NaN;
  const e = t.tagName;
  return ft(e) ? $[e].identity(t) : NaN;
}
Ye((t) => (e) => {
  Object.keys(t).length ? e.setValue(t) : e.setValue("");
});
function L(...t) {
  return t.reduce(
    (e, i) => e.flatMap((r) => i.map((c) => [r, c].flat())),
    [[]]
  );
}
const pr = 99;
Array(pr).fill(1).map((t, e) => `${e + 1}`);
const k = {
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
}, mr = {
  IP: k.IP,
  "IP-SUBNET": k.IP,
  "IP-GATEWAY": k.IP,
  "OSI-TSEL": k.OSI,
  "OSI-SSEL": k.OSI,
  "OSI-PSEL": k.OSI,
  "OSI-AP-Title": k.OSIAPi,
  "OSI-AP-Invoke": k.OSId,
  "OSI-AE-Qualifier": k.OSId,
  "OSI-AE-Invoke": k.OSId,
  "MAC-Address": k.MAC,
  APPID: k.APPID,
  "VLAN-ID": k.VLANid,
  "VLAN-PRIORITY": k.VLANp,
  "OSI-NSAP": k.OSI,
  "SNTP-Port": k.port,
  "MMS-Port": k.port,
  DNSName: "[^ ]*",
  "UDP-Port": k.port,
  "TCP-Port": k.port,
  "C37-118-IP-Port": "102[5-9]|10[3-9][0-9]|1[1-9][0-9][0-9]|[2-9][0-9]{3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]",
  IPv6: k.IPv6,
  "IPv6-SUBNET": k.IPv6sub,
  "IPv6-GATEWAY": k.IPv6,
  IPv6FlowLabel: "[0-9a-fA-F]{1,5}",
  IPv6ClassOfTraffic: "[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]",
  "IPv6-IGMPv3Src": k.IPv6,
  "IP-IGMPv3Sr": k.IP,
  "IP-ClassOfTraffic": k.OSI
}, ur = {
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
function hr(t) {
  return [
    ue`<mwc-formfield label="${Z("connectedap.wizard.addschemainsttype")}">
      <mwc-checkbox
        id="instType"
        ?checked="${t.hasInstType}"
      ></mwc-checkbox>
    </mwc-formfield>`,
    ue`${Object.entries(t.attributes).map(
      ([e, i]) => ue`<wizard-textfield
          label="${e}"
          ?nullable=${ur[e]}
          .maybeValue=${i}
          pattern="${X(mr[e])}"
          required
        ></wizard-textfield>`
    )}`
  ];
}
function fr(t, e) {
  return t.querySelectorAll("P").length !== e.querySelectorAll("P").length ? !1 : Array.from(t.querySelectorAll("P")).filter(
    (i) => !e.querySelector(`Address > P[type="${i.getAttribute("type")}"]`)?.isEqualNode(i)
  ).length === 0;
}
function br(t, e, i) {
  const r = Re(e.ownerDocument, "Address", {});
  return Object.entries(t).filter(([c, n]) => n !== null).forEach(([c, n]) => {
    const a = c, o = Re(e.ownerDocument, "P", { type: a });
    i && o.setAttributeNS(
      "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:type",
      "tP_" + c
    ), o.textContent = n, r.appendChild(o);
  }), r;
}
function yr(t, e, i) {
  const r = [], c = br(e, t, i), n = t.querySelector("Address");
  return n !== null && !fr(n, c) ? (r.push({
    old: {
      parent: t,
      element: n,
      reference: n.nextSibling
    }
  }), r.push({
    new: {
      parent: t,
      element: c,
      reference: n.nextSibling
    }
  })) : n === null && r.push({
    new: {
      parent: t,
      element: c
    }
  }), r;
}
function gr(t) {
  return (e, i) => {
    const r = {
      actions: [],
      title: Z("smv.action.addaddress", {
        identity: C(t)
      })
    }, c = i.shadowRoot?.querySelector("#instType")?.checked, n = {};
    n["MAC-Address"] = re(
      e.find((o) => o.label === "MAC-Address")
    ), n.APPID = re(e.find((o) => o.label === "APPID")), n["VLAN-ID"] = re(
      e.find((o) => o.label === "VLAN-ID")
    ), n["VLAN-PRIORITY"] = re(
      e.find((o) => o.label === "VLAN-PRIORITY")
    );
    const a = yr(t, n, c);
    return a.length ? (a.forEach((o) => {
      r.actions.push(o);
    }), [r]) : [];
  };
}
function Pr(t) {
  const e = Array.from(t.querySelectorAll("Address > P")).some(
    (r) => r.getAttribute("xsi:type")
  ), i = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((r) => {
    i[r] || (i[r] = t.querySelector(`Address > P[type="${r}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: Z("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        label: Z("save"),
        icon: "edit",
        action: gr(t)
      },
      content: [...hr({ hasInstType: e, attributes: i })]
    }
  ];
}
export {
  Pr as editSMvWizard,
  gr as updateSmvAction
};
