import { LitElement as Ae, query as H, property as u, state as x, html as f, css as $e, customElement as K, queryAsync as it, eventOptions as Rt } from "lit-element";
import { NodePart as zt, AttributePart as Ft, directive as rt } from "lit-html";
import "@material/mwc-list";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
import { TextField as Pt } from "@material/mwc-textfield";
import { Select as Mt } from "@material/mwc-select";
import "@material/mwc-formfield";
const Vt = 1e3 * 60, Fe = "langChanged";
function Gt(e, t, i) {
  return Object.entries(ye(t || {})).reduce((r, [n, c]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(ye(c))), e);
}
function Tt(e, t) {
  const i = e.split(".");
  let r = t.strings;
  for (; r != null && i.length > 0; )
    r = r[i.shift()];
  return r != null ? r.toString() : null;
}
function ye(e) {
  return typeof e == "function" ? e() : e;
}
const Ot = () => ({
  loader: () => Promise.resolve({}),
  empty: (e) => `[${e}]`,
  lookup: Tt,
  interpolate: Gt,
  translationCache: {}
});
let Ht = Ot();
function Bt(e, t) {
  const i = (r) => e(r.detail);
  return window.addEventListener(Fe, i, t), () => window.removeEventListener(Fe, i);
}
function V(e, t, i = Ht) {
  let r = i.translationCache[e] || (i.translationCache[e] = i.lookup(e, i) || i.empty(e, i));
  return t = t != null ? ye(t) : null, t != null ? i.interpolate(r, t, i) : r;
}
function nt(e) {
  return e instanceof zt ? e.startNode.isConnected : e instanceof Ft ? e.committer.element.isConnected : e.element.isConnected;
}
function qt(e) {
  for (const [t] of e)
    nt(t) || e.delete(t);
}
function jt(e) {
  "requestIdleCallback" in window ? window.requestIdleCallback(e) : setTimeout(e);
}
function Ut(e, t) {
  setInterval(() => jt(() => qt(e)), t);
}
const De = /* @__PURE__ */ new Map();
function Wt() {
  Bt((e) => {
    for (const [t, i] of De)
      nt(t) && ct(t, i, e);
  });
}
Wt();
Ut(De, Vt);
function ct(e, t, i) {
  const r = t(i);
  e.value !== r && (e.setValue(r), e.commit());
}
rt((e) => (t) => {
  De.set(t, e), ct(t, e);
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
const at = /* @__PURE__ */ new WeakMap(), Ie = (e) => (...t) => {
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
const me = {};
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
const Xt = (e) => e === null || !(typeof e == "object" || typeof e == "function");
class oe {
  constructor(t) {
    this.value = void 0, this.committer = t;
  }
  setValue(t) {
    t !== me && (!Xt(t) || t !== this.value) && (this.value = t, Pe(t) || (this.committer.dirty = !0));
  }
  commit() {
    for (; Pe(this.value); ) {
      const t = this.value;
      this.value = me, t(this);
    }
    this.value !== me && this.committer.commit();
  }
}
class ot extends oe {
}
let Zt = !1;
(() => {
  try {
    const e = {
      get capture() {
        return Zt = !0, !1;
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
var ge = function(e, t) {
  return ge = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
    i.__proto__ = r;
  } || function(i, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
  }, ge(e, t);
};
function Kt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  ge(e, t);
  function i() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i());
}
var te = function() {
  return te = Object.assign || function(t) {
    for (var i, r = 1, n = arguments.length; r < n; r++) {
      i = arguments[r];
      for (var c in i) Object.prototype.hasOwnProperty.call(i, c) && (t[c] = i[c]);
    }
    return t;
  }, te.apply(this, arguments);
};
function p(e, t, i, r) {
  var n = arguments.length, c = n < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") c = Reflect.decorate(e, t, i, r);
  else for (var o = e.length - 1; o >= 0; o--) (a = e[o]) && (c = (n < 3 ? a(c) : n > 3 ? a(t, i, c) : a(t, i)) || c);
  return n > 3 && c && Object.defineProperty(t, i, c), c;
}
function ie(e) {
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
function Jt(e, t) {
  var i = e.matches || e.webkitMatchesSelector || e.msMatchesSelector;
  return i.call(e, t);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const st = () => {
}, Qt = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", st, Qt);
document.removeEventListener("x", st);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class dt extends Ae {
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
var Yt = (
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
var ei = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, ti = {
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
function ii(e, t, i) {
  if (!e)
    return { x: 0, y: 0 };
  var r = t.x, n = t.y, c = r + i.left, a = n + i.top, o, s;
  if (e.type === "touchstart") {
    var m = e;
    o = m.changedTouches[0].pageX - c, s = m.changedTouches[0].pageY - a;
  } else {
    var h = e;
    o = h.pageX - c, s = h.pageY - a;
  }
  return { x: o, y: s };
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
var Ve = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Ge = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], re = [], ri = (
  /** @class */
  function(e) {
    Kt(t, e);
    function t(i) {
      var r = e.call(this, te(te({}, t.defaultAdapter), i)) || this;
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
        return ei;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return ti;
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
          for (var c = ie(Ve), a = c.next(); !a.done; a = c.next()) {
            var o = a.value;
            this.adapter.registerInteractionHandler(o, this.activateHandler);
          }
        } catch (s) {
          r = { error: s };
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
          for (var c = ie(Ge), a = c.next(); !a.done; a = c.next()) {
            var o = a.value;
            this.adapter.registerDocumentInteractionHandler(o, this.deactivateHandler);
          }
        } catch (s) {
          r = { error: s };
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
        for (var n = ie(Ve), c = n.next(); !c.done; c = n.next()) {
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
        for (var n = ie(Ge), c = n.next(); !c.done; c = n.next()) {
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
            var o = i !== void 0 && re.length > 0 && re.some(function(s) {
              return r.adapter.containsEventTarget(s);
            });
            if (o) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (re.push(i.target), this.registerDeactivationHandlers(i)), n.wasElementMadeActive = this.checkElementMadeActive(i), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              re = [], !n.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (n.wasElementMadeActive = r.checkElementMadeActive(i), n.wasElementMadeActive && r.animateActivation()), n.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, t.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, t.prototype.animateActivation = function() {
      var i = this, r = t.strings, n = r.VAR_FG_TRANSLATE_START, c = r.VAR_FG_TRANSLATE_END, a = t.cssClasses, o = a.FG_DEACTIVATION, s = a.FG_ACTIVATION, m = t.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var h = "", v = "";
      if (!this.adapter.isUnbounded()) {
        var g = this.getFgTranslationCoordinates(), $ = g.startPoint, w = g.endPoint;
        h = $.x + "px, " + $.y + "px", v = w.x + "px, " + w.y + "px";
      }
      this.adapter.updateCssVariable(n, h), this.adapter.updateCssVariable(c, v), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(o), this.adapter.computeBoundingRect(), this.adapter.addClass(s), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, m);
    }, t.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, r = i.activationEvent, n = i.wasActivatedByPointer, c;
      n ? c = ii(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : c = {
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
        var n = te({}, r);
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
  }(Yt)
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
class ni {
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
const Te = /* @__PURE__ */ new WeakMap(), Ne = Ie((e) => (t) => {
  if (!(t instanceof oe) || t instanceof ot || t.committer.name !== "class" || t.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = t, { element: r } = i;
  let n = Te.get(t);
  n === void 0 && (r.setAttribute("class", i.strings.join(" ")), Te.set(t, n = /* @__PURE__ */ new Set()));
  const c = r.classList || new ni(r);
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
const Oe = /* @__PURE__ */ new WeakMap(), ci = Ie((e) => (t) => {
  if (!(t instanceof oe) || t instanceof ot || t.committer.name !== "style" || t.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = t, { style: r } = i.element;
  let n = Oe.get(t);
  n === void 0 && (r.cssText = i.strings.join(" "), Oe.set(t, n = /* @__PURE__ */ new Set())), n.forEach((c) => {
    c in e || (n.delete(c), c.indexOf("-") === -1 ? r[c] = null : r.removeProperty(c));
  });
  for (const c in e)
    n.add(c), c.indexOf("-") === -1 ? r[c] = e[c] : r.setProperty(c, e[c]);
});
class A extends dt {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = ri;
  }
  get isActive() {
    return Jt(this.parentElement || this, ":active");
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
    return f`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Ne(r)}"
          style="${ci({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
p([
  H(".mdc-ripple-surface")
], A.prototype, "mdcRoot", void 0);
p([
  u({ type: Boolean })
], A.prototype, "primary", void 0);
p([
  u({ type: Boolean })
], A.prototype, "accent", void 0);
p([
  u({ type: Boolean })
], A.prototype, "unbounded", void 0);
p([
  u({ type: Boolean })
], A.prototype, "disabled", void 0);
p([
  u({ type: Boolean })
], A.prototype, "activated", void 0);
p([
  u({ type: Boolean })
], A.prototype, "selected", void 0);
p([
  u({ type: Boolean })
], A.prototype, "internalUseStateLayerCustomProperties", void 0);
p([
  x()
], A.prototype, "hovering", void 0);
p([
  x()
], A.prototype, "bgFocused", void 0);
p([
  x()
], A.prototype, "fgActivation", void 0);
p([
  x()
], A.prototype, "fgDeactivation", void 0);
p([
  x()
], A.prototype, "fgScale", void 0);
p([
  x()
], A.prototype, "fgSize", void 0);
p([
  x()
], A.prototype, "translateStart", void 0);
p([
  x()
], A.prototype, "translateEnd", void 0);
p([
  x()
], A.prototype, "leftPos", void 0);
p([
  x()
], A.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ai = $e`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let ve = class extends A {
};
ve.styles = [ai];
ve = p([
  K("mwc-ripple")
], ve);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ee = (e) => (
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
          const s = this.constructor._observers.get(a);
          s !== void 0 && s.call(this, this[a], c);
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
class L extends Ae {
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
    const t = this.renderText(), i = this.graphic ? this.renderGraphic() : f``, r = this.hasMeta ? this.renderMeta() : f``;
    return f`
      ${this.renderRipple()}
      ${i}
      ${t}
      ${r}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? f`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? f`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const t = {
      multi: this.multipleGraphics
    };
    return f`
      <span class="mdc-deprecated-list-item__graphic material-icons ${Ne(t)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return f`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const t = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return f`
      <span class="mdc-deprecated-list-item__text">
        ${t}
      </span>`;
  }
  renderSingleLine() {
    return f`<slot></slot>`;
  }
  renderTwoline() {
    return f`
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
p([
  H("slot")
], L.prototype, "slotElement", void 0);
p([
  it("mwc-ripple")
], L.prototype, "ripple", void 0);
p([
  u({ type: String })
], L.prototype, "value", void 0);
p([
  u({ type: String, reflect: !0 })
], L.prototype, "group", void 0);
p([
  u({ type: Number, reflect: !0 })
], L.prototype, "tabindex", void 0);
p([
  u({ type: Boolean, reflect: !0 }),
  Ee(function(e) {
    e ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], L.prototype, "disabled", void 0);
p([
  u({ type: Boolean, reflect: !0 })
], L.prototype, "twoline", void 0);
p([
  u({ type: Boolean, reflect: !0 })
], L.prototype, "activated", void 0);
p([
  u({ type: String, reflect: !0 })
], L.prototype, "graphic", void 0);
p([
  u({ type: Boolean })
], L.prototype, "multipleGraphics", void 0);
p([
  u({ type: Boolean })
], L.prototype, "hasMeta", void 0);
p([
  u({ type: Boolean, reflect: !0 }),
  Ee(function(e) {
    e ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], L.prototype, "noninteractive", void 0);
p([
  u({ type: Boolean, reflect: !0 }),
  Ee(function(e) {
    const t = this.getAttribute("role"), i = t === "gridcell" || t === "option" || t === "row" || t === "tab";
    if (i && e ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(e, "property");
  })
], L.prototype, "selected", void 0);
p([
  x()
], L.prototype, "shouldRenderRipple", void 0);
p([
  x()
], L.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const oi = $e`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let xe = class extends L {
};
xe.styles = [oi];
xe = p([
  K("mwc-list-item")
], xe);
var si = Object.defineProperty, di = Object.getOwnPropertyDescriptor, O = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? di(t, i) : t, c = e.length - 1, a; c >= 0; c--)
    (a = e[c]) && (n = (r ? a(t, i, n) : a(n)) || n);
  return r && n && si(t, i, n), n;
};
let M = class extends Pt {
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
    return this.reservedValues && this.reservedValues.some((e) => e === this.value) ? (this.setCustomValidity(V("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? f`<div style="position:relative;">
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
      </div>` : f``;
  }
  renderMulplierList() {
    return f`${this.multipliers.map(
      (e) => f`<mwc-list-item ?selected=${e === this.multiplier}
          >${e === null ? V("textfield.noMultiplier") : e}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? f`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : f``;
  }
  render() {
    return f`
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
O([
  u({ type: Boolean })
], M.prototype, "nullable", 2);
O([
  u({ type: Array })
], M.prototype, "multipliers", 2);
O([
  u({ type: String })
], M.prototype, "multiplier", 1);
O([
  u({ type: String })
], M.prototype, "unit", 2);
O([
  x()
], M.prototype, "null", 1);
O([
  u({ type: String })
], M.prototype, "maybeValue", 1);
O([
  u({ type: String })
], M.prototype, "defaultValue", 2);
O([
  u({ type: Array })
], M.prototype, "reservedValues", 2);
O([
  H("mwc-switch")
], M.prototype, "nullSwitch", 2);
O([
  H("mwc-menu")
], M.prototype, "multiplierMenu", 2);
O([
  H("mwc-icon-button")
], M.prototype, "multiplierButton", 2);
M = O([
  K("wizard-textfield")
], M);
var li = Object.defineProperty, pi = Object.getOwnPropertyDescriptor, Z = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? pi(t, i) : t, c = e.length - 1, a; c >= 0; c--)
    (a = e[c]) && (n = (r ? a(t, i, n) : a(n)) || n);
  return r && n && li(t, i, n), n;
};
let B = class extends Mt {
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
    return this.nullable ? f`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : f``;
  }
  render() {
    return f`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
Z([
  u({ type: Boolean })
], B.prototype, "nullable", 2);
Z([
  x()
], B.prototype, "null", 1);
Z([
  u({ type: String })
], B.prototype, "maybeValue", 1);
Z([
  u({ type: String })
], B.prototype, "defaultValue", 2);
Z([
  u({ type: Array })
], B.prototype, "reservedValues", 2);
Z([
  H("mwc-switch")
], B.prototype, "nullSwitch", 2);
B = Z([
  K("wizard-select")
], B);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function ui(e, t, i) {
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
function Le(e, t, i) {
  if (t !== void 0)
    return ui(e, t, i);
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
const he = /* @__PURE__ */ new WeakMap(), ee = Ie((e) => (t) => {
  const i = he.get(t);
  if (e === void 0 && t instanceof oe) {
    if (i !== void 0 || !he.has(t)) {
      const r = t.committer.name;
      t.committer.element.removeAttribute(r);
    }
  } else e !== i && t.setValue(e);
  he.set(t, e);
});
class D extends pt {
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
    return this.shouldRenderRipple ? f`<mwc-ripple
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
    return f`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Ne(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${ee(this.name)}"
              aria-checked="${ee(r)}"
              aria-label="${ee(this.ariaLabel)}"
              aria-labelledby="${ee(this.ariaLabelledBy)}"
              aria-describedby="${ee(this.ariaDescribedBy)}"
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
p([
  H(".mdc-checkbox")
], D.prototype, "mdcRoot", void 0);
p([
  H("input")
], D.prototype, "formElement", void 0);
p([
  u({ type: Boolean, reflect: !0 })
], D.prototype, "checked", void 0);
p([
  u({ type: Boolean })
], D.prototype, "indeterminate", void 0);
p([
  u({ type: Boolean, reflect: !0 })
], D.prototype, "disabled", void 0);
p([
  u({ type: String, reflect: !0 })
], D.prototype, "name", void 0);
p([
  u({ type: String })
], D.prototype, "value", void 0);
p([
  Le,
  u({ type: String, attribute: "aria-label" })
], D.prototype, "ariaLabel", void 0);
p([
  Le,
  u({ type: String, attribute: "aria-labelledby" })
], D.prototype, "ariaLabelledBy", void 0);
p([
  Le,
  u({ type: String, attribute: "aria-describedby" })
], D.prototype, "ariaDescribedBy", void 0);
p([
  u({ type: Boolean })
], D.prototype, "reducedTouchTarget", void 0);
p([
  x()
], D.prototype, "animationClass", void 0);
p([
  x()
], D.prototype, "shouldRenderRipple", void 0);
p([
  x()
], D.prototype, "focused", void 0);
p([
  x()
], D.prototype, "useStateLayerCustomProperties", void 0);
p([
  it("mwc-ripple")
], D.prototype, "ripple", void 0);
p([
  Rt({ passive: !0 })
], D.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const mi = $e`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let ke = class extends D {
};
ke.styles = [mi];
ke = p([
  K("mwc-checkbox")
], ke);
var hi = Object.defineProperty, fi = Object.getOwnPropertyDescriptor, G = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? fi(t, i) : t, c = e.length - 1, a; c >= 0; c--)
    (a = e[c]) && (n = (r ? a(t, i, n) : a(n)) || n);
  return r && n && hi(t, i, n), n;
};
let P = class extends Ae {
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
    return this.nullable ? f`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : f``;
  }
  render() {
    return f`
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
G([
  u({ type: String })
], P.prototype, "label", 2);
G([
  u({ type: String })
], P.prototype, "helper", 2);
G([
  u({ type: Boolean })
], P.prototype, "nullable", 2);
G([
  u({ type: Boolean })
], P.prototype, "defaultChecked", 2);
G([
  u({ type: String })
], P.prototype, "maybeValue", 1);
G([
  u({ type: Boolean })
], P.prototype, "disabled", 2);
G([
  x()
], P.prototype, "null", 1);
G([
  x()
], P.prototype, "checked", 1);
G([
  x()
], P.prototype, "deactivateCheckbox", 2);
G([
  x()
], P.prototype, "formfieldLabel", 1);
G([
  H("mwc-switch")
], P.prototype, "nullSwitch", 2);
G([
  H("mwc-checkbox")
], P.prototype, "checkbox", 2);
P = G([
  K("wizard-checkbox")
], P);
function bi(e) {
  return typeof e == "function";
}
function Se(e) {
  return e instanceof M || e instanceof B || e instanceof P ? e.maybeValue : e.value ?? null;
}
function Re(e, t) {
  if (!e)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...t,
      detail: { wizard: null, ...t?.detail }
    });
  const i = bi(e) ? e : () => e;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { wizard: i, ...t?.detail }
  });
}
function yi(e) {
  return Re(e, { detail: { subwizard: !0 } });
}
function gi(e) {
  const t = e.getAttribute("name");
  return t || void 0;
}
function R(e) {
  const t = e.split(">"), i = t.pop() ?? "";
  return [t.join(">"), i];
}
const S = ":not(*)";
function vi(e) {
  return `${e.getAttribute("version")}	${e.getAttribute("revision")}`;
}
function xi(e, t) {
  const [i, r] = t.split("	");
  return !i || !r ? S : `${e}[version="${i}"][revision="${r}"]`;
}
function He(e) {
  return _(e.parentElement) + ">" + e.getAttribute("connectivityNode");
}
function Be(e, t) {
  const [i, r] = R(t), n = C[e].parents.flatMap(
    (c) => N(c, i).split(",")
  );
  return E(
    n,
    [">"],
    [`${e}[connectivityNode="${r}"]`]
  ).map((c) => c.join("")).join(",");
}
function ki(e) {
  const [t, i, r, n, c, a] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((o) => e.getAttribute(o));
  return t === "None" ? `${_(e.parentElement)}>(${n} ${a} ${c})` : `${t} ${i || "(Client)"}/${r ?? ""} ${n} ${c ?? ""}`;
}
function Si(e, t) {
  if (t.endsWith(")")) {
    const [g, $] = R(t), [w, z, I] = $.substring(1, $.length - 1).split(" ");
    if (!w || !z) return S;
    const F = C[e].parents.flatMap(
      (T) => N(T, g).split(",")
    );
    return E(
      F,
      [">"],
      [`${e}[iedName="None"][lnClass="${w}"][lnType="${z}"][lnInst="${I}"]`]
    ).map((T) => T.join("")).join(",");
  }
  const [i, r, n, c, a] = t.split(/[ /]/);
  if (!i || !r || !c) return S;
  const [
    o,
    s,
    m,
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
    s,
    m,
    h,
    v
  ).map((g) => g.join("")).join(",");
}
function _i(e) {
  return `${_(e.parentElement)}>${e.getAttribute(
    "iedName"
  )} ${e.getAttribute("apName")}`;
}
function Ci(e, t) {
  const [i, r] = R(t), [n, c] = r.split(" ");
  return `${N(
    "IED",
    i
  )}>${e}[iedName="${n}"][apName="${c}"]`;
}
function wi(e) {
  return `${_(e.parentElement)}>${e.getAttribute("associationID") ?? ""}`;
}
function Ai(e, t) {
  const [i, r] = R(t);
  return r ? `${N(
    "Server",
    i
  )}>${e}[associationID="${r}"]` : S;
}
function $i(e) {
  return `${_(e.closest("IED"))}>>${e.getAttribute("inst")}`;
}
function Di(e, t) {
  const [i, r] = t.split(">>");
  return r ? `IED[name="${i}"] ${e}[inst="${r}"]` : S;
}
function Ii(e) {
  const t = e.textContent, [i, r, n, c, a] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => e.getAttribute(o));
  return `${_(e.parentElement)}>${t} ${i || ""} ${r || ""}/${n ?? ""} ${c ?? ""} ${a ?? ""}`;
}
function Ni(e, t) {
  const [i, r] = R(t), [n, c, a, o, s, m] = r.split(/[ /]/), [
    h,
    v,
    g,
    $,
    w,
    z
  ] = [
    C[e].parents.flatMap(
      (I) => N(I, i).split(",")
    ),
    [`${n}`],
    c ? [`[apRef="${c}"]`] : [":not([apRef])", '[apRef=""]'],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    m ? [`[lnInst="${m}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return E(
    h,
    [">"],
    [e],
    v,
    g,
    $,
    w,
    z
  ).map((I) => I.join("")).join(",");
}
function Ei(e) {
  const [t, i, r, n, c, a, o, s] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((h) => e.getAttribute(h)), m = `${t}/${i ?? ""} ${r} ${n ?? ""}.${c} ${a || ""}`;
  return `${_(e.parentElement)}>${m} (${o}${s ? " [" + s + "]" : ""})`;
}
function Li(e, t) {
  const [i, r] = R(t), [n, c, a, o] = r.split(/[ /.]/), s = r.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), m = s && s[1] ? s[1] : "", h = s && s[2] ? s[2] : "", v = r.match(/\(([A-Z]{2})/), g = r.match(/ \[([0-9]{1,2})\]/), $ = v && v[1] ? v[1] : "", w = g && g[1] ? g[1] : "", [
    z,
    I,
    F,
    T,
    J,
    de,
    le,
    pe,
    ue
  ] = [
    C[e].parents.flatMap(
      (Q) => N(Q, i).split(",")
    ),
    [`[ldInst="${n}"]`],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    o ? [`[lnInst="${o}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${m}"]`],
    h ? [`[daName="${h}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${$}"]`],
    w ? [`[ix="${w}"]`] : [":not([ix])", '[ix=""]']
  ];
  return E(
    z,
    [">"],
    [e],
    I,
    F,
    T,
    J,
    de,
    le,
    pe,
    ue
  ).map((Q) => Q.join("")).join(",");
}
function Ri(e) {
  if (!e.parentElement) return NaN;
  const t = _(e.parentElement), i = e.getAttribute("iedName"), r = e.getAttribute("intAddr"), n = Array.from(
    e.parentElement.querySelectorAll(`ExtRef[intAddr="${r}"]`)
  ).indexOf(e);
  if (r) return `${t}>${r}[${n}]`;
  const [
    c,
    a,
    o,
    s,
    m,
    h,
    v,
    g,
    $,
    w,
    z,
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
  ].map((J) => e.getAttribute(J)), F = I ? `${v}:${I} ${g ?? ""}/${$ ?? ""} ${w ?? ""} ${z ?? ""}` : "", T = `${i} ${c}/${a ?? ""} ${o} ${s ?? ""} ${m} ${h || ""}`;
  return `${t}>${F ? F + " " : ""}${T}${r ? `@${r}` : ""}`;
}
function zi(e, t) {
  const [i, r] = R(t), n = C[e].parents.flatMap(
    (Y) => N(Y, i).split(",")
  );
  if (r.endsWith("]")) {
    const [Y] = r.split("["), Et = [`[intAddr="${Y}"]`];
    return E(n, [">"], [e], Et).map((Lt) => Lt.join("")).join(",");
  }
  let c, a, o, s, m, h, v, g, $, w, z, I, F, T;
  !r.includes(":") && !r.includes("@") ? [c, a, o, s, m, h, v] = r.split(/[ /]/) : r.includes(":") && !r.includes("@") ? [
    g,
    $,
    w,
    z,
    I,
    F,
    c,
    a,
    o,
    s,
    m,
    h,
    v
  ] = r.split(/[ /:]/) : !r.includes(":") && r.includes("@") ? [c, a, o, s, m, h, v, T] = r.split(/[ /@]/) : [
    g,
    $,
    w,
    z,
    I,
    F,
    c,
    a,
    o,
    s,
    m,
    h,
    v,
    T
  ] = r.split(/[ /:@]/);
  const [
    J,
    de,
    le,
    pe,
    ue,
    Q,
    _t,
    Ct,
    wt,
    At,
    $t,
    Dt,
    It,
    Nt
  ] = [
    c ? [`[iedName="${c}"]`] : [":not([iedName])"],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    s ? [`[lnClass="${s}"]`] : [":not([lnClass])"],
    m ? [`[lnInst="${m}"]`] : [":not([lnInst])", '[lnInst=""]'],
    h ? [`[doName="${h}"]`] : [":not([doName])"],
    v ? [`[daName="${v}"]`] : [":not([daName])", '[daName=""]'],
    g ? [`[serviceType="${g}"]`] : [":not([serviceType])", '[serviceType=""]'],
    $ ? [`[srcCBName="${$}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    w ? [`[srcLDInst="${w}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    z ? [`[srcPrefix="${z}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    I ? [`[srcLNClass="${I}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    F ? [`[srcLNInst="${F}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    T ? [`[intAddr="${T}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return E(
    n,
    [">"],
    [e],
    J,
    de,
    le,
    pe,
    ue,
    Q,
    _t,
    Ct,
    wt,
    At,
    $t,
    Dt,
    It,
    Nt
  ).map((Y) => Y.join("")).join(",");
}
function Fi(e) {
  const [t, i, r] = ["prefix", "lnClass", "inst"].map(
    (n) => e.getAttribute(n)
  );
  return `${_(e.parentElement)}>${t ?? ""} ${i} ${r}`;
}
function Pi(e, t) {
  const [i, r] = R(t), n = C[e].parents.flatMap(
    (v) => N(v, i).split(",")
  ), [c, a, o] = r.split(" ");
  if (!a) return S;
  const [s, m, h] = [
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    [`[inst="${o}"]`]
  ];
  return E(
    n,
    [">"],
    [e],
    s,
    m,
    h
  ).map((v) => v.join("")).join(",");
}
function Mi(e) {
  const [t, i, r, n, c, a] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => e.getAttribute(o));
  return `${_(e.parentElement)}>${i} ${t || ""} ${r}/${n ?? ""} ${c} ${a}`;
}
function Vi(e, t) {
  const [i, r] = R(t), n = C[e].parents.flatMap(
    (F) => N(F, i).split(",")
  ), [c, a, o, s, m, h] = r.split(/[ /]/), [
    v,
    g,
    $,
    w,
    z,
    I
  ] = [
    c ? [`[iedName="${c}"]`] : [":not([iedName])", '[iedName=""]'],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${m}"]`],
    h ? [`[lnInst="${h}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return E(
    n,
    [">"],
    [e],
    v,
    g,
    $,
    w,
    z,
    I
  ).map((F) => F.join("")).join(",");
}
function qe(e) {
  const [t, i] = ["name", "ix"].map((r) => e.getAttribute(r));
  return `${_(e.parentElement)}>${t}${i ? "[" + i + "]" : ""}`;
}
function _e(e, t, i = -1) {
  i === -1 && (i = t.split(">").length);
  const [r, n] = R(t), [c, a, o, s] = n.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!a) return S;
  if (i === 0) return `${e}[name="${a}"]`;
  const m = C[e].parents.flatMap(
    (g) => g === "SDI" ? _e(g, r, i - 1).split(",") : N(g, r).split(",")
  ).filter((g) => !g.startsWith(S));
  if (m.length === 0) return S;
  const [h, v] = [
    [`[name="${a}"]`],
    s ? [`[ix="${s}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return E(
    m,
    [">"],
    [e],
    h,
    v
  ).map((g) => g.join("")).join(",");
}
function Gi(e) {
  if (!e.parentElement) return NaN;
  const t = e.getAttribute("sGroup"), i = Array.from(e.parentElement.children).filter((r) => r.getAttribute("sGroup") === t).findIndex((r) => r.isSameNode(e));
  return `${_(e.parentElement)}>${t ? t + "." : ""} ${i}`;
}
function Ti(e, t) {
  const [i, r] = R(t), [n, c] = r.split(" "), a = parseFloat(c), o = C[e].parents.flatMap(
    (h) => N(h, i).split(",")
  ), [s, m] = [
    n ? [`[sGroup="${n}"]`] : [""],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return E(
    o,
    [">"],
    [e],
    s,
    m
  ).map((h) => h.join("")).join(",");
}
function Oi(e) {
  const [t, i] = ["iedName", "apName"].map(
    (r) => e.getAttribute(r)
  );
  return `${t} ${i}`;
}
function Hi(e, t) {
  const [i, r] = t.split(" ");
  return !i || !r ? S : `${e}[iedName="${i}"][apName="${r}"]`;
}
function je(e) {
  const [t, i] = ["ldInst", "cbName"].map(
    (r) => e.getAttribute(r)
  );
  return `${t} ${i}`;
}
function Ue(e, t) {
  const [i, r] = t.split(" ");
  return !i || !r ? S : `${e}[ldInst="${i}"][cbName="${r}"]`;
}
function Bi(e) {
  if (!e.parentElement) return NaN;
  if (!e.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const t = e.getAttribute("type");
  return e.parentElement.children.length > 1 && t !== "Connection" && t !== "RedConn" ? NaN : `${_(e.parentElement)}>${t}`;
}
function qi(e, t) {
  const [i, r] = R(t), [n, c] = [
    C[e].parents.flatMap(
      (a) => N(a, i).split(",")
    ),
    r ? [`[type="${r}"]`] : [""]
  ];
  return E(n, [">"], [e], c).map((a) => a.join("")).join(",");
}
function ji(e) {
  if (!e.parentElement) return NaN;
  const t = e.parentElement, i = e.getAttribute("type");
  if (t.tagName === "PhysConn")
    return `${_(e.parentElement)}>${i}`;
  const r = Array.from(e.parentElement.children).filter((n) => n.getAttribute("type") === i).findIndex((n) => n.isSameNode(e));
  return `${_(e.parentElement)}>${i} [${r}]`;
}
function Ui(e, t) {
  const [i, r] = R(t), [n] = r.split(" "), c = r && r.match(/\[([0-9]+)\]/) && r.match(/\[([0-9]+)\]/)[1] ? parseFloat(r.match(/\[([0-9]+)\]/)[1]) : NaN, [a, o, s] = [
    C[e].parents.flatMap(
      (m) => N(m, i).split(",")
    ),
    [`[type="${n}"]`],
    c ? [`:nth-child(${c + 1})`] : [""]
  ];
  return E(
    a,
    [">"],
    [e],
    o,
    s
  ).map((m) => m.join("")).join(",");
}
function Wi(e) {
  return `${_(e.parentElement)}>${e.getAttribute("ord")}`;
}
function Xi(e, t) {
  const [i, r] = R(t);
  return `${N("EnumType", i)}>${e}[ord="${r}"]`;
}
function Zi(e) {
  return `${_(e.parentElement)}>${e.getAttribute("type") || "8-MMS"}	${e.textContent}`;
}
function Ki(e, t) {
  const [i, r] = R(t), [n, c] = r.split("	"), [a] = [
    C[e].parents.flatMap(
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
function Ji() {
  return "";
}
function Qi() {
  return ":root";
}
function y(e) {
  return e.parentElement.tagName === "SCL" ? e.getAttribute("name") : `${_(e.parentElement)}>${e.getAttribute("name")}`;
}
function b(e, t, i = -1) {
  i === -1 && (i = t.split(">").length);
  const [r, n] = R(t);
  if (!n) return S;
  if (i === 0) return `${e}[name="${n}"]`;
  const c = C[e].parents;
  if (!c) return S;
  const a = c.flatMap(
    (o) => C[o].selector === C.Substation.selector ? b(o, r, i - 1).split(",") : N(o, r).split(",")
  ).filter((o) => !o.startsWith(S));
  return a.length === 0 ? S : E(a, [">"], [e], [`[name="${n}"]`]).map((o) => o.join("")).join(",");
}
function d(e) {
  return _(e.parentElement).toString();
}
function l(e, t) {
  const i = C[e].parents;
  if (!i) return S;
  const r = i.flatMap((n) => N(n, t).split(",")).filter((n) => !n.startsWith(S));
  return r.length === 0 ? S : E(r, [">"], [e]).map((n) => n.join("")).join(",");
}
function ne(e) {
  return `#${e.id}`;
}
function ce(e, t) {
  const i = t.replace(/^#/, "");
  return i ? `${e}[id="${i}"]` : S;
}
const ut = [
  "TransformerWinding",
  "ConductingEquipment"
], mt = [
  "GeneralEquipment",
  "PowerTransformer",
  ...ut
], Ce = ["Substation", "VoltageLevel", "Bay"], ht = ["Process", "Line"], ft = ["EqSubFunction", "EqFunction"], Yi = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...mt,
  ...Ce,
  ...ht,
  ...ft
], bt = ["ConnectivityNode", ...Yi], er = ["GOOSESecurity", "SMVSecurity"], tr = ["SubNetwork", ...er, ...bt], ir = ["BDA", "DA"], rr = ["SampledValueControl", "GSEControl"], nr = ["LogControl", "ReportControl"], cr = [...rr, ...nr], ar = ["GSE", "SMV"], or = [
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
  ...cr,
  ...ar,
  ...ir
], W = ["LN0", "LN"], sr = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], dr = ["Subject", "IssuerName"], lr = ["MinTime", "MaxTime"], pr = ["LNodeType", "DOType", "DAType", "EnumType"], ur = [
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
], mr = ["DynDataSet", "ConfDataSet"], hr = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...mr
], fr = ["ConfLogControl", "ConfSigRef"], br = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], yr = ["SCL", ...tr, ...or, ...pr], yt = [
  ...yr,
  ...sr,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...dr,
  ...lr,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...W,
  ...ur,
  "DynAssociation",
  "SettingGroups",
  ...hr,
  ...fr,
  ...br,
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
], gr = new Set(yt);
function ze(e) {
  return gr.has(e);
}
const se = ["Text", "Private"], q = [...se], k = [...se], ae = [...se], We = [...k, "Val"], gt = [...q, "LNode"], j = [...gt], we = [...j], fe = [
  ...j,
  "PowerTransformer",
  "GeneralEquipment"
], Xe = [
  ...we,
  "Terminal"
], Ze = [...k, "Address"], vt = [...q], Ke = [...vt, "IEDName"], Je = [
  ...k,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], Qe = [
  ...j,
  "GeneralEquipment",
  "Function"
], Ye = [...vt, "TrgOps"], et = [
  ...j,
  "GeneralEquipment",
  "EqSubFunction"
], C = {
  AccessControl: {
    identity: d,
    selector: l,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: y,
    selector: b,
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
    identity: d,
    selector: l,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: wi,
    selector: Ai,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: d,
    selector: l,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: y,
    selector: b,
    parents: ["DAType"],
    children: [...We]
  },
  BitRate: {
    identity: d,
    selector: l,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: y,
    selector: b,
    parents: ["VoltageLevel"],
    children: [
      ...fe,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: Mi,
    selector: Vi,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: d,
    selector: l,
    parents: ["SCL"],
    children: [...k, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: y,
    selector: b,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...Xe,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: d,
    selector: l,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: Oi,
    selector: Hi,
    parents: ["SubNetwork"],
    children: [...k, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: y,
    selector: b,
    parents: ["Bay", "Line"],
    children: [...gt]
  },
  DA: {
    identity: y,
    selector: b,
    parents: ["DOType"],
    children: [...We]
  },
  DAI: {
    identity: qe,
    selector: _e,
    parents: ["DOI", "SDI"],
    children: [...k, "Val"]
  },
  DAType: {
    identity: ne,
    selector: ce,
    parents: ["DataTypeTemplates"],
    children: [...ae, "BDA", "ProtNs"]
  },
  DO: {
    identity: y,
    selector: b,
    parents: ["LNodeType"],
    children: [...k]
  },
  DOI: {
    identity: y,
    selector: b,
    parents: [...W],
    children: [...k, "SDI", "DAI"]
  },
  DOType: {
    identity: ne,
    selector: ce,
    parents: ["DataTypeTemplates"],
    children: [...ae, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: y,
    selector: b,
    parents: [...W],
    children: [...q, "FCDA"]
  },
  DataSetDirectory: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: d,
    selector: l,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: ne,
    selector: ce,
    parents: ["DataTypeTemplates"],
    children: [...ae, "EnumVal"]
  },
  EnumVal: {
    identity: Wi,
    selector: Xi,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: y,
    selector: b,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...et]
  },
  EqSubFunction: {
    identity: y,
    selector: b,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...et]
  },
  ExtRef: {
    identity: Ri,
    selector: zi,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: Ei,
    selector: Li,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: y,
    selector: b,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...j,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: y,
    selector: b,
    parents: [
      "SubFunction",
      "Function",
      ...ht,
      ...ft,
      ...Ce
    ],
    children: [...we, "EqFunction"]
  },
  GetCBValues: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: y,
    selector: b,
    parents: ["AccessPoint"],
    children: [...q, "Subject", "IssuerName"]
  },
  GSE: {
    identity: je,
    selector: Ue,
    parents: ["ConnectedAP"],
    children: [...Ze, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: y,
    selector: b,
    parents: ["LN0"],
    children: [...Ke, "Protocol"]
  },
  GSESettings: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: d,
    selector: l,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: d,
    selector: l,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: vi,
    selector: xi,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: y,
    selector: b,
    parents: ["SCL"],
    children: [...k, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: Ii,
    selector: Ni,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: d,
    selector: l,
    parents: [...W],
    children: [...k, "ExtRef"]
  },
  IssuerName: {
    identity: d,
    selector: l,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: _i,
    selector: Ci,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: $i,
    selector: Di,
    parents: ["Server"],
    children: [...k, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: Fi,
    selector: Pi,
    parents: ["AccessPoint", "LDevice"],
    children: [...Je]
  },
  LN0: {
    identity: d,
    selector: l,
    parents: ["LDevice"],
    children: [
      ...Je,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: ki,
    selector: Si,
    parents: [...bt],
    children: [...k]
  },
  LNodeType: {
    identity: ne,
    selector: ce,
    parents: ["DataTypeTemplates"],
    children: [...ae, "DO"]
  },
  Line: {
    identity: y,
    selector: b,
    parents: ["Process", "SCL"],
    children: [
      ...Qe,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: y,
    selector: b,
    parents: [...W],
    children: [...k]
  },
  LogControl: {
    identity: y,
    selector: b,
    parents: [...W],
    children: [...Ye]
  },
  LogSettings: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: d,
    selector: l,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: d,
    selector: l,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: d,
    selector: l,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: He,
    selector: Be,
    parents: ["TransformerWinding"],
    children: [...k]
  },
  OptFields: {
    identity: d,
    selector: l,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: ji,
    selector: Ui,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: Bi,
    selector: qi,
    parents: ["ConnectedAP"],
    children: [...k, "P"]
  },
  PowerTransformer: {
    identity: y,
    selector: b,
    parents: [...Ce],
    children: [
      ...we,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => S,
    parents: [],
    children: []
  },
  Process: {
    identity: y,
    selector: b,
    parents: ["Process", "SCL"],
    children: [
      ...Qe,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: Zi,
    selector: Ki,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: d,
    selector: l,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: y,
    selector: b,
    parents: [...W],
    children: [...Ye, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: d,
    selector: l,
    parents: ["ReportControl"],
    children: [...k, "ClientLN"]
  },
  SamplesPerSec: {
    identity: d,
    selector: l,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: y,
    selector: b,
    parents: ["LN0"],
    children: [...Ke, "SmvOpts"]
  },
  SecPerSamples: {
    identity: d,
    selector: l,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: Ji,
    selector: Qi,
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
    identity: qe,
    selector: _e,
    parents: ["DOI", "SDI"],
    children: [...k, "SDI", "DAI"]
  },
  SDO: {
    identity: y,
    selector: b,
    parents: ["DOType"],
    children: [...q]
  },
  Server: {
    identity: d,
    selector: l,
    parents: ["AccessPoint"],
    children: [
      ...k,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: d,
    selector: l,
    parents: ["AccessPoint"],
    children: [...k]
  },
  Services: {
    identity: d,
    selector: l,
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
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: d,
    selector: l,
    parents: ["LN0"],
    children: [...k]
  },
  SettingGroups: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: d,
    selector: l,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: d,
    selector: l,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: je,
    selector: Ue,
    parents: ["ConnectedAP"],
    children: [...Ze]
  },
  SmvOpts: {
    identity: d,
    selector: l,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: y,
    selector: b,
    parents: ["AccessPoint"],
    children: [...q, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: y,
    selector: b,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...ut
    ],
    children: [...j, "EqFunction"]
  },
  SubFunction: {
    identity: y,
    selector: b,
    parents: ["SubFunction", "Function"],
    children: [
      ...j,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: y,
    selector: b,
    parents: ["Communication"],
    children: [...q, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: d,
    selector: l,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: y,
    selector: b,
    parents: ["SCL"],
    children: [...fe, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: y,
    selector: b,
    parents: ["TransformerWinding"],
    children: [...j, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: He,
    selector: Be,
    parents: [...mt],
    children: [...k]
  },
  Text: {
    identity: d,
    selector: l,
    parents: yt.filter((e) => e !== "Text" && e !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: d,
    selector: l,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: y,
    selector: b,
    parents: ["PowerTransformer"],
    children: [
      ...Xe,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: d,
    selector: l,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: Gi,
    selector: Ti,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: d,
    selector: l,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: d,
    selector: l,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: y,
    selector: b,
    parents: ["Substation"],
    children: [...fe, "Voltage", "Bay", "Function"]
  }
};
function N(e, t) {
  return typeof t != "string" ? S : ze(e) ? C[e].selector(e, t) : e;
}
function vr(e, t, i) {
  if (typeof i != "string" || !ze(t)) return null;
  const r = e.querySelector(C[t].selector(t, i));
  return r === null || X(r) ? r : Array.from(
    e.querySelectorAll(C[t].selector(t, i))
  ).find(X) ?? null;
}
function _(e) {
  if (e === null) return NaN;
  if (e.closest("Private")) return NaN;
  const t = e.tagName;
  return ze(t) ? C[t].identity(e) : NaN;
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
function X(e) {
  return !e.closest("Private");
}
const xr = 99;
Array(xr).fill(1).map((e, t) => `${t + 1}`);
function kr(e, t) {
  const i = {};
  return Array.from(e.attributes).forEach((r) => {
    i[r.name] = r.value;
  }), { element: e, oldAttributes: i, newAttributes: t };
}
function Sr(e, t = "user", i) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { action: e, initiator: t, ...i?.detail }
  });
}
const _r = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*"
}, xt = {
  IED: [
    {
      attributeName: "iedName",
      filter: U("Association")
    },
    {
      attributeName: "iedName",
      filter: U("ClientLN")
    },
    {
      attributeName: "iedName",
      filter: U("ConnectedAP")
    },
    {
      attributeName: "iedName",
      filter: U("ExtRef")
    },
    {
      attributeName: "iedName",
      filter: U("KDC")
    },
    {
      attributeName: "iedName",
      filter: U("LNode")
    },
    {
      attributeName: null,
      filter: be("GSEControl > IEDName")
    },
    {
      attributeName: null,
      filter: be("SampledValueControl > IEDName")
    },
    {
      attributeName: null,
      filter: be("LN > DOI > DAI > Val")
    }
  ],
  Substation: [
    {
      attributeName: "substationName",
      filter: U("Terminal")
    }
  ],
  VoltageLevel: [
    {
      attributeName: "voltageLevelName",
      filter: tt("Terminal", {
        Substation: "substationName"
      })
    }
  ],
  Bay: [
    {
      attributeName: "bayName",
      filter: tt("Terminal", {
        Substation: "substationName",
        VoltageLevel: "voltageLevelName"
      })
    }
  ]
};
function U(e) {
  return function(i, r, n) {
    return `${e}[${r}="${n}"]`;
  };
}
function be(e) {
  return function() {
    return `${e}`;
  };
}
function tt(e, t) {
  return function(r, n, c) {
    return `${e}${Object.entries(t).map(([a, o]) => {
      const s = r.closest(a);
      if (s && s.hasAttribute("name")) {
        const m = s.getAttribute("name");
        return `[${o}="${m}"]`;
      }
      return null;
    }).join("")}[${n}="${c}"]`;
  };
}
function Cr(e, t, i) {
  const r = e.cloneNode(!1);
  return r.setAttribute(t, i), r;
}
function kt(e, t) {
  const i = e.cloneNode(!1);
  return i.textContent = t, i;
}
function wr(e, t, i) {
  if (t === null || t === i)
    return [];
  const r = xt[e.tagName];
  if (r === void 0)
    return [];
  const n = [];
  return r.forEach((c) => {
    const a = c.filter(e, c.attributeName, t);
    c.attributeName ? Array.from(e.ownerDocument.querySelectorAll(`${a}`)).filter(X).forEach((o) => {
      const s = Cr(
        o,
        c.attributeName,
        i
      );
      n.push({ old: { element: o }, new: { element: s } });
    }) : Array.from(e.ownerDocument.querySelectorAll(`${a}`)).filter((o) => o.textContent === t).filter(X).forEach((o) => {
      const s = kt(o, i);
      n.push({ old: { element: o }, new: { element: s } });
    });
  }), e.tagName === "IED" && n.push(...Ar(e, t, i)), n;
}
function Ar(e, t, i) {
  const r = [];
  return e.ownerDocument.querySelectorAll("IED").forEach((c) => {
    const a = Array.from(
      c.querySelectorAll(
        ':scope > AccessPoint > Server > LDevice > LN[lnClass="LGOS"] > DOI > DAI > Val, :scope > AccessPoint > Server > LDevice > LN[lnClass="LSVS"] > DOI > DAI > Val'
      )
    );
    if (a.length === 0) return;
    const o = c.querySelector(
      `:scope > AccessPoint > Server > LDevice > LN0 > Inputs > ExtRef[iedName="${t}"][srcCBName]`
    ), s = o?.getAttribute("srcLDInst") + "/" + o?.getAttribute("srcLNClass") + "." + o?.getAttribute("srcCBName");
    for (let m of a)
      if (t + s === m.textContent.trim()) {
        const h = kt(
          m,
          i + s
        );
        r.push({
          old: { element: m },
          new: { element: h }
        });
        break;
      }
  }), r;
}
function St(e) {
  const t = gi(e) ?? null;
  if (t === null)
    return [];
  const i = xt[e.tagName];
  if (i === void 0)
    return [];
  const r = [];
  return i.forEach((n) => {
    const c = n.filter(e, n.attributeName, t);
    n.attributeName ? Array.from(e.ownerDocument.querySelectorAll(`${c}`)).filter(X).forEach((a) => {
      r.push({ old: { parent: a.parentElement, element: a } });
    }) : Array.from(e.ownerDocument.querySelectorAll(`${c}`)).filter((a) => a.textContent === t).filter(X).forEach((a) => {
      a.parentElement && r.push({
        old: {
          parent: a.parentElement.parentElement,
          element: a.parentElement
        }
      });
    });
  }), r;
}
function $r(e, t) {
  return (i) => {
    const r = {};
    if (Dr(r, e, i), Object.keys(r).length == 0)
      return [];
    Ir(e, r);
    const n = Se(i.find((a) => a.label === "name")), c = {
      actions: [],
      title: V(t, { name: n })
    };
    return c.actions.push(kr(e, r)), c.actions.push(
      ...wr(e, e.getAttribute("name"), n)
    ), c.actions.length ? [c] : [];
  };
}
function Dr(e, t, i) {
  const r = Se(i.find((c) => c.label === "name")), n = Se(i.find((c) => c.label === "desc"));
  r !== t.getAttribute("name") && (e.name = r), n !== t.getAttribute("desc") && (e.desc = n);
}
function Ir(e, t) {
  const i = Object.keys(t);
  return Array.from(e.attributes).filter((r) => !i.includes(r.name)).forEach((r) => {
    t[r.name] = r.value;
  }), t;
}
const Nr = [
  "ldInst",
  "lnClass",
  "lnInst",
  "prefix",
  "doName",
  "daName"
];
function Er(e) {
  return Nr.map(
    (t) => e.getAttribute(t) ? `[${t}="${e.getAttribute(
      t
    )}"]` : ""
  ).join("");
}
const Lr = ["srcLDInst", "srcLNClass", "srcLNInst", "srcCBName"];
function Rr(e) {
  return Lr.map(
    (t) => e.getAttribute(t) ? `[${t}="${e.getAttribute(t)}"]` : ""
  ).join("");
}
function zr(e) {
  if (!e.length) return [];
  const t = [], i = {};
  for (const r of e) {
    const n = r.old.element, c = r.old.parent, a = _(c);
    i[a] || (i[a] = c.cloneNode(!0));
    const o = i[a].querySelector(
      `ExtRef${n.getAttribute("iedName") ? `[iedName="${n.getAttribute("iedName")}"]` : ""}${Er(n)}${n.getAttribute("serviceType") ? `[serviceType="${n.getAttribute("serviceType")}"]` : ""}${Rr(n)}`
    );
    o && i[a].removeChild(o);
  }
  return Object.entries(i).forEach(([r, n]) => {
    if (n.children.length == 0) {
      const c = e[0].old.parent.ownerDocument, a = vr(c, "Inputs", r);
      a && a.parentElement && t.push({
        old: { parent: a.parentElement, element: a }
      });
    }
  }), t;
}
const Fr = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function Pr(e, t, i, r, n, c, a, o, s) {
  return [
    f`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${V("ied.wizard.nameHelper")}"
      required
      validationMessage="${V("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${s}
      pattern="${Fr}"
    ></wizard-textfield>`,
    f`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${V("ied.wizard.descHelper")}"
      pattern="${_r.normalizedString}"
    ></wizard-textfield>`,
    f`<wizard-textfield
      label="type"
      .maybeValue=${i || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    f`<wizard-textfield
      label="manufacturer"
      .maybeValue=${r || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    f`<wizard-textfield
      label="configVersion"
      .maybeValue=${n || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    f`<wizard-textfield
      label="originalSclVersion"
      .maybeValue=${c || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    f`<wizard-textfield
      label="engRight"
      .maybeValue=${a || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    f`<wizard-textfield
      label="owner"
      .maybeValue=${o || "-"}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function Mr(e) {
  return [
    f` <section>
      <h1>${V("ied.wizard.title.references")}</h1>
      <mwc-list>
        ${e.map((t) => {
      const i = t.old.element;
      return f` <mwc-list-item noninteractive twoline>
            <span>${i.tagName}</span>
            <span slot="secondary"
              >${_(t.old.element)}</span
            >
          </mwc-list-item>`;
    })}
      </mwc-list>
    </section>`
  ];
}
function Vr(e) {
  return (e.getAttribute("originalSclVersion") ?? "").concat(e.getAttribute("originalSclRevision") ?? "").concat(e.getAttribute("originalSclRelease") ?? "");
}
function Gr(e) {
  return Array.from(e.parentNode.querySelectorAll("IED")).filter(X).map((t) => t.getAttribute("name") ?? "").filter((t) => t !== e.getAttribute("name"));
}
function Tr(e) {
  return (t, i) => {
    i.dispatchEvent(Re());
    const r = St(e), n = r.filter(
      (s) => s.old.element.tagName === "ExtRef"
    ), c = zr(n), a = e.getAttribute("name") ?? "Unknown", o = {
      actions: [],
      title: V("ied.action.deleteied", { name: a })
    };
    return o.actions.push({
      old: { parent: e.parentElement, element: e }
    }), o.actions.push(...r), o.actions.push(...c), [o];
  };
}
function Or(e) {
  const t = St(e);
  return t.length > 0 ? [
    {
      title: V("ied.wizard.title.delete"),
      content: Mr(t),
      primary: {
        icon: "delete",
        label: V("remove"),
        action: Tr(e)
      }
    }
  ] : null;
}
function en(e) {
  function t(i) {
    return (r) => {
      const n = Or(i);
      n && r.dispatchEvent(yi(() => n)), r.dispatchEvent(
        Sr({ old: { parent: i.parentElement, element: i } })
      ), r.dispatchEvent(Re());
    };
  }
  return [
    {
      title: V("ied.wizard.title.edit"),
      element: e,
      menuActions: [
        {
          icon: "delete",
          label: V("remove"),
          action: t(e)
        }
      ],
      primary: {
        icon: "edit",
        label: V("save"),
        action: $r(
          e,
          "ied.action.updateied"
        )
      },
      content: Pr(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        e.getAttribute("type"),
        e.getAttribute("manufacturer"),
        e.getAttribute("configVersion"),
        Vr(e),
        e.getAttribute("engRight"),
        e.getAttribute("owner"),
        Gr(e)
      )
    }
  ];
}
export {
  en as editIEDWizard,
  Tr as removeIEDAndReferences,
  Or as removeIEDWizard,
  Pr as renderIEDWizard,
  Gr as reservedNamesIED
};
