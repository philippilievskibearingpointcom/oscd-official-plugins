import { LitElement as Pe, query as H, property as b, state as D, html as m, css as ke, customElement as ce, queryAsync as $t, eventOptions as ki, queryAssignedNodes as Lt, unsafeCSS as _i } from "lit-element";
import { NodePart as Ai, AttributePart as Ci, directive as Nt } from "lit-html";
import "@material/mwc-button";
import "@material/mwc-formfield";
import "@material/mwc-switch";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import { TextField as Ei } from "@material/mwc-textfield";
import { Select as Ii } from "@material/mwc-select";
import { List as wi } from "@material/mwc-list";
import "@material/mwc-icon";
const Di = 1e3 * 60, dt = "langChanged";
function Ri(t, e, i) {
  return Object.entries(Ke(e || {})).reduce((r, [n, c]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(Ke(c))), t);
}
function $i(t, e) {
  const i = t.split(".");
  let r = e.strings;
  for (; r != null && i.length > 0; )
    r = r[i.shift()];
  return r != null ? r.toString() : null;
}
function Ke(t) {
  return typeof t == "function" ? t() : t;
}
const Li = () => ({
  loader: () => Promise.resolve({}),
  empty: (t) => `[${t}]`,
  lookup: $i,
  interpolate: Ri,
  translationCache: {}
});
let Ni = Li();
function Ti(t, e) {
  const i = (r) => t(r.detail);
  return window.addEventListener(dt, i, e), () => window.removeEventListener(dt, i);
}
function y(t, e, i = Ni) {
  let r = i.translationCache[t] || (i.translationCache[t] = i.lookup(t, i) || i.empty(t, i));
  return e = e != null ? Ke(e) : null, e != null ? i.interpolate(r, e, i) : r;
}
function Tt(t) {
  return t instanceof Ai ? t.startNode.isConnected : t instanceof Ci ? t.committer.element.isConnected : t.element.isConnected;
}
function Fi(t) {
  for (const [e] of t)
    Tt(e) || t.delete(e);
}
function Oi(t) {
  "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t);
}
function Pi(t, e) {
  setInterval(() => Oi(() => Fi(t)), e);
}
const ct = /* @__PURE__ */ new Map();
function Mi() {
  Ti((t) => {
    for (const [e, i] of ct)
      Tt(e) && Ft(e, i, t);
  });
}
Mi();
Pi(ct, Di);
function Ft(t, e, i) {
  const r = e(i);
  t.value !== r && (t.setValue(r), t.commit());
}
Nt((t) => (e) => {
  ct.set(e, t), Ft(e, t);
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
const Ot = /* @__PURE__ */ new WeakMap(), Me = (t) => (...e) => {
  const i = t(...e);
  return Ot.set(i, !0), i;
}, lt = (t) => typeof t == "function" && Ot.has(t);
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
const He = {};
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
const Pt = (t) => t === null || !(typeof t == "object" || typeof t == "function");
class ze {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== He && (!Pt(e) || e !== this.value) && (this.value = e, lt(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; lt(this.value); ) {
      const e = this.value;
      this.value = He, e(this);
    }
    this.value !== He && this.committer.commit();
  }
}
class Mt extends ze {
}
let zi = !1;
(() => {
  try {
    const t = {
      get capture() {
        return zi = !0, !1;
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
var Ze = function(t, e) {
  return Ze = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
    i.__proto__ = r;
  } || function(i, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
  }, Ze(t, e);
};
function qi(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Ze(t, e);
  function i() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
}
var Ee = function() {
  return Ee = Object.assign || function(e) {
    for (var i, r = 1, n = arguments.length; r < n; r++) {
      i = arguments[r];
      for (var c in i) Object.prototype.hasOwnProperty.call(i, c) && (e[c] = i[c]);
    }
    return e;
  }, Ee.apply(this, arguments);
};
function u(t, e, i, r) {
  var n = arguments.length, c = n < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, i) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") c = Reflect.decorate(t, e, i, r);
  else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (c = (n < 3 ? a(c) : n > 3 ? a(e, i, c) : a(e, i)) || c);
  return n > 3 && c && Object.defineProperty(e, i, c), c;
}
function De(t) {
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
function Bi(t, e) {
  var i = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return i.call(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Gi = (t) => t.nodeType === Node.ELEMENT_NODE, zt = () => {
}, Vi = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", zt, Vi);
document.removeEventListener("x", zt);
const qt = (t = window.document) => {
  let e = t.activeElement;
  const i = [];
  if (!e)
    return i;
  for (; e && (i.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return i;
}, Hi = (t) => {
  const e = qt();
  if (!e.length)
    return !1;
  const i = e[e.length - 1], r = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let n = [];
  const c = (a) => {
    n = a.composedPath();
  };
  return document.body.addEventListener("check-if-focused", c), i.dispatchEvent(r), document.body.removeEventListener("check-if-focused", c), n.indexOf(t) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class at extends Pe {
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
var Bt = (
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
var Ui = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Wi = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, pt = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function ji(t, e, i) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, n = e.y, c = r + i.left, a = n + i.top, s, o;
  if (t.type === "touchstart") {
    var d = t;
    s = d.changedTouches[0].pageX - c, o = d.changedTouches[0].pageY - a;
  } else {
    var l = t;
    s = l.pageX - c, o = l.pageY - a;
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
var ut = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], mt = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Re = [], Xi = (
  /** @class */
  function(t) {
    qi(e, t);
    function e(i) {
      var r = t.call(this, Ee(Ee({}, e.defaultAdapter), i)) || this;
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
        return Ui;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Wi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return pt;
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
        var n = e.cssClasses, c = n.ROOT, a = n.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.addClass(c), i.adapter.isUnbounded() && (i.adapter.addClass(a), i.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var i = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var r = e.cssClasses, n = r.ROOT, c = r.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.removeClass(n), i.adapter.removeClass(c), i.removeCssVars();
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
          for (var c = De(ut), a = c.next(); !a.done; a = c.next()) {
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
    }, e.prototype.registerDeactivationHandlers = function(i) {
      var r, n;
      if (i.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var c = De(mt), a = c.next(); !a.done; a = c.next()) {
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
      var i, r;
      try {
        for (var n = De(ut), c = n.next(); !c.done; c = n.next()) {
          var a = c.value;
          this.adapter.deregisterInteractionHandler(a, this.activateHandler);
        }
      } catch (s) {
        i = { error: s };
      } finally {
        try {
          c && !c.done && (r = n.return) && r.call(n);
        } finally {
          if (i) throw i.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var i, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var n = De(mt), c = n.next(); !c.done; c = n.next()) {
          var a = c.value;
          this.adapter.deregisterDocumentInteractionHandler(a, this.deactivateHandler);
        }
      } catch (s) {
        i = { error: s };
      } finally {
        try {
          c && !c.done && (r = n.return) && r.call(n);
        } finally {
          if (i) throw i.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var i = this, r = e.strings, n = Object.keys(r);
      n.forEach(function(c) {
        c.indexOf("VAR_") === 0 && i.adapter.updateCssVariable(r[c], null);
      });
    }, e.prototype.activateImpl = function(i) {
      var r = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var n = this.activationState;
        if (!n.isActivated) {
          var c = this.previousActivationEvent, a = c && i !== void 0 && c.type !== i.type;
          if (!a) {
            n.isActivated = !0, n.isProgrammatic = i === void 0, n.activationEvent = i, n.wasActivatedByPointer = n.isProgrammatic ? !1 : i !== void 0 && (i.type === "mousedown" || i.type === "touchstart" || i.type === "pointerdown");
            var s = i !== void 0 && Re.length > 0 && Re.some(function(o) {
              return r.adapter.containsEventTarget(o);
            });
            if (s) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (Re.push(i.target), this.registerDeactivationHandlers(i)), n.wasElementMadeActive = this.checkElementMadeActive(i), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Re = [], !n.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (n.wasElementMadeActive = r.checkElementMadeActive(i), n.wasElementMadeActive && r.animateActivation()), n.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var i = this, r = e.strings, n = r.VAR_FG_TRANSLATE_START, c = r.VAR_FG_TRANSLATE_END, a = e.cssClasses, s = a.FG_DEACTIVATION, o = a.FG_ACTIVATION, d = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var l = "", p = "";
      if (!this.adapter.isUnbounded()) {
        var g = this.getFgTranslationCoordinates(), v = g.startPoint, x = g.endPoint;
        l = v.x + "px, " + v.y + "px", p = x.x + "px, " + x.y + "px";
      }
      this.adapter.updateCssVariable(n, l), this.adapter.updateCssVariable(c, p), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(s), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, d);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, r = i.activationEvent, n = i.wasActivatedByPointer, c;
      n ? c = ji(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : c = {
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
      var i = this, r = e.cssClasses.FG_DEACTIVATION, n = this.activationState, c = n.hasDeactivationUXRun, a = n.isActivated, s = c || !a;
      s && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        i.adapter.removeClass(r);
      }, pt.FG_DEACTIVATION_MS));
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
        var n = Ee({}, r);
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
        var a = Math.sqrt(Math.pow(i.frame.width, 2) + Math.pow(i.frame.height, 2));
        return a + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : n();
      var c = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && c % 2 !== 0 ? this.initialSize = c - 1 : this.initialSize = c, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var i = e.strings, r = i.VAR_FG_SIZE, n = i.VAR_LEFT, c = i.VAR_TOP, a = i.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(a, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(n, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(c, this.unboundedCoords.top + "px"));
    }, e;
  }(Bt)
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
class Ki {
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
const ht = /* @__PURE__ */ new WeakMap(), qe = Me((t) => (e) => {
  if (!(e instanceof ze) || e instanceof Mt || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = e, { element: r } = i;
  let n = ht.get(e);
  n === void 0 && (r.setAttribute("class", i.strings.join(" ")), ht.set(e, n = /* @__PURE__ */ new Set()));
  const c = r.classList || new Ki(r);
  n.forEach((a) => {
    a in t || (c.remove(a), n.delete(a));
  });
  for (const a in t) {
    const s = t[a];
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
const ft = /* @__PURE__ */ new WeakMap(), Zi = Me((t) => (e) => {
  if (!(e instanceof ze) || e instanceof Mt || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = e, { style: r } = i.element;
  let n = ft.get(e);
  n === void 0 && (r.cssText = i.strings.join(" "), ft.set(e, n = /* @__PURE__ */ new Set())), n.forEach((c) => {
    c in t || (n.delete(c), c.indexOf("-") === -1 ? r[c] = null : r.removeProperty(c));
  });
  for (const c in t)
    n.add(c), c.indexOf("-") === -1 ? r[c] = t[c] : r.setProperty(c, t[c]);
});
class O extends at {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Xi;
  }
  get isActive() {
    return Bi(this.parentElement || this, ":active");
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
    return m`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${qe(r)}"
          style="${Zi({
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
  H(".mdc-ripple-surface")
], O.prototype, "mdcRoot", void 0);
u([
  b({ type: Boolean })
], O.prototype, "primary", void 0);
u([
  b({ type: Boolean })
], O.prototype, "accent", void 0);
u([
  b({ type: Boolean })
], O.prototype, "unbounded", void 0);
u([
  b({ type: Boolean })
], O.prototype, "disabled", void 0);
u([
  b({ type: Boolean })
], O.prototype, "activated", void 0);
u([
  b({ type: Boolean })
], O.prototype, "selected", void 0);
u([
  b({ type: Boolean })
], O.prototype, "internalUseStateLayerCustomProperties", void 0);
u([
  D()
], O.prototype, "hovering", void 0);
u([
  D()
], O.prototype, "bgFocused", void 0);
u([
  D()
], O.prototype, "fgActivation", void 0);
u([
  D()
], O.prototype, "fgDeactivation", void 0);
u([
  D()
], O.prototype, "fgScale", void 0);
u([
  D()
], O.prototype, "fgSize", void 0);
u([
  D()
], O.prototype, "translateStart", void 0);
u([
  D()
], O.prototype, "translateEnd", void 0);
u([
  D()
], O.prototype, "leftPos", void 0);
u([
  D()
], O.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ji = ke`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let Je = class extends O {
};
Je.styles = [Ji];
Je = u([
  ce("mwc-ripple")
], Je);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const me = (t) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e, i) => {
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
    e.constructor._observers.set(i, t);
  }
);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Gt {
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
class q extends Pe {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new Gt(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const e = this.renderText(), i = this.graphic ? this.renderGraphic() : m``, r = this.hasMeta ? this.renderMeta() : m``;
    return m`
      ${this.renderRipple()}
      ${i}
      ${e}
      ${r}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? m`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? m`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return m`
      <span class="mdc-deprecated-list-item__graphic material-icons ${qe(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return m`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return m`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return m`<slot></slot>`;
  }
  renderTwoline() {
    return m`
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
  H("slot")
], q.prototype, "slotElement", void 0);
u([
  $t("mwc-ripple")
], q.prototype, "ripple", void 0);
u([
  b({ type: String })
], q.prototype, "value", void 0);
u([
  b({ type: String, reflect: !0 })
], q.prototype, "group", void 0);
u([
  b({ type: Number, reflect: !0 })
], q.prototype, "tabindex", void 0);
u([
  b({ type: Boolean, reflect: !0 }),
  me(function(t) {
    t ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], q.prototype, "disabled", void 0);
u([
  b({ type: Boolean, reflect: !0 })
], q.prototype, "twoline", void 0);
u([
  b({ type: Boolean, reflect: !0 })
], q.prototype, "activated", void 0);
u([
  b({ type: String, reflect: !0 })
], q.prototype, "graphic", void 0);
u([
  b({ type: Boolean })
], q.prototype, "multipleGraphics", void 0);
u([
  b({ type: Boolean })
], q.prototype, "hasMeta", void 0);
u([
  b({ type: Boolean, reflect: !0 }),
  me(function(t) {
    t ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], q.prototype, "noninteractive", void 0);
u([
  b({ type: Boolean, reflect: !0 }),
  me(function(t) {
    const e = this.getAttribute("role"), i = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (i && t ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(t, "property");
  })
], q.prototype, "selected", void 0);
u([
  D()
], q.prototype, "shouldRenderRipple", void 0);
u([
  D()
], q.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Vt = ke`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Qe = class extends q {
};
Qe.styles = [Vt];
Qe = u([
  ce("mwc-list-item")
], Qe);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Qi(t, e, i) {
  const r = t.constructor;
  if (!i) {
    const s = `__${e}`;
    if (i = r.getPropertyDescriptor(e, s), !i)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const n = i;
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
function st(t, e, i) {
  if (e !== void 0)
    return Qi(t, e, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ht extends at {
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
Ht.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const Ue = /* @__PURE__ */ new WeakMap(), le = Me((t) => (e) => {
  const i = Ue.get(e);
  if (t === void 0 && e instanceof ze) {
    if (i !== void 0 || !Ue.has(e)) {
      const r = e.committer.name;
      e.committer.element.removeAttribute(r);
    }
  } else t !== i && e.setValue(t);
  Ue.set(e, t);
});
class P extends Ht {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new Gt(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(e) {
    const i = e.get("indeterminate"), r = e.get("checked"), n = e.get("disabled");
    if (i !== void 0 || r !== void 0 || n !== void 0) {
      const c = this.calculateAnimationStateName(!!r, !!i, !!n), a = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${c}-${a}`;
    }
    super.update(e);
  }
  calculateAnimationStateName(e, i, r) {
    return r ? "disabled" : i ? "indeterminate" : e ? "checked" : "unchecked";
  }
  // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? m`<mwc-ripple
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
    return m`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${qe(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${le(this.name)}"
              aria-checked="${le(r)}"
              aria-label="${le(this.ariaLabel)}"
              aria-labelledby="${le(this.ariaLabelledBy)}"
              aria-describedby="${le(this.ariaDescribedBy)}"
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
  H(".mdc-checkbox")
], P.prototype, "mdcRoot", void 0);
u([
  H("input")
], P.prototype, "formElement", void 0);
u([
  b({ type: Boolean, reflect: !0 })
], P.prototype, "checked", void 0);
u([
  b({ type: Boolean })
], P.prototype, "indeterminate", void 0);
u([
  b({ type: Boolean, reflect: !0 })
], P.prototype, "disabled", void 0);
u([
  b({ type: String, reflect: !0 })
], P.prototype, "name", void 0);
u([
  b({ type: String })
], P.prototype, "value", void 0);
u([
  st,
  b({ type: String, attribute: "aria-label" })
], P.prototype, "ariaLabel", void 0);
u([
  st,
  b({ type: String, attribute: "aria-labelledby" })
], P.prototype, "ariaLabelledBy", void 0);
u([
  st,
  b({ type: String, attribute: "aria-describedby" })
], P.prototype, "ariaDescribedBy", void 0);
u([
  b({ type: Boolean })
], P.prototype, "reducedTouchTarget", void 0);
u([
  D()
], P.prototype, "animationClass", void 0);
u([
  D()
], P.prototype, "shouldRenderRipple", void 0);
u([
  D()
], P.prototype, "focused", void 0);
u([
  D()
], P.prototype, "useStateLayerCustomProperties", void 0);
u([
  $t("mwc-ripple")
], P.prototype, "ripple", void 0);
u([
  ki({ passive: !0 })
], P.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Yi = ke`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let Ye = class extends P {
};
Ye.styles = [Yi];
Ye = u([
  ce("mwc-checkbox")
], Ye);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class we extends q {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : m``, n = this.hasMeta && this.left ? this.renderMeta() : m``, c = this.renderRipple();
    return m`
      ${c}
      ${r}
      ${this.left ? "" : i}
      <span class=${qe(e)}>
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
  H("slot")
], we.prototype, "slotElement", void 0);
u([
  H("mwc-checkbox")
], we.prototype, "checkboxElement", void 0);
u([
  b({ type: Boolean })
], we.prototype, "left", void 0);
u([
  b({ type: String, reflect: !0 })
], we.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const er = ke`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let xe = class extends we {
};
xe.styles = [Vt, er];
xe = u([
  ce("mwc-check-list-item")
], xe);
var tr = Object.defineProperty, ir = Object.getOwnPropertyDescriptor, Q = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? ir(e, i) : e, c = t.length - 1, a; c >= 0; c--)
    (a = t[c]) && (n = (r ? a(e, i, n) : a(n)) || n);
  return r && n && tr(e, i, n), n;
};
let V = class extends Pe {
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
    return this.nullable ? m`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : m``;
  }
  render() {
    return m`
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
Q([
  b({ type: String })
], V.prototype, "label", 2);
Q([
  b({ type: String })
], V.prototype, "helper", 2);
Q([
  b({ type: Boolean })
], V.prototype, "nullable", 2);
Q([
  b({ type: Boolean })
], V.prototype, "defaultChecked", 2);
Q([
  b({ type: String })
], V.prototype, "maybeValue", 1);
Q([
  b({ type: Boolean })
], V.prototype, "disabled", 2);
Q([
  D()
], V.prototype, "null", 1);
Q([
  D()
], V.prototype, "checked", 1);
Q([
  D()
], V.prototype, "deactivateCheckbox", 2);
Q([
  D()
], V.prototype, "formfieldLabel", 1);
Q([
  H("mwc-switch")
], V.prototype, "nullSwitch", 2);
Q([
  H("mwc-checkbox")
], V.prototype, "checkbox", 2);
V = Q([
  ce("wizard-checkbox")
], V);
var rr = Object.defineProperty, nr = Object.getOwnPropertyDescriptor, ee = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? nr(e, i) : e, c = t.length - 1, a; c >= 0; c--)
    (a = t[c]) && (n = (r ? a(e, i, n) : a(n)) || n);
  return r && n && rr(e, i, n), n;
};
let K = class extends Ei {
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
    return this.reservedValues && this.reservedValues.some((t) => t === this.value) ? (this.setCustomValidity(y("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? m`<div style="position:relative;">
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
      </div>` : m``;
  }
  renderMulplierList() {
    return m`${this.multipliers.map(
      (t) => m`<mwc-list-item ?selected=${t === this.multiplier}
          >${t === null ? y("textfield.noMultiplier") : t}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? m`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : m``;
  }
  render() {
    return m`
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
ee([
  b({ type: Boolean })
], K.prototype, "nullable", 2);
ee([
  b({ type: Array })
], K.prototype, "multipliers", 2);
ee([
  b({ type: String })
], K.prototype, "multiplier", 1);
ee([
  b({ type: String })
], K.prototype, "unit", 2);
ee([
  D()
], K.prototype, "null", 1);
ee([
  b({ type: String })
], K.prototype, "maybeValue", 1);
ee([
  b({ type: String })
], K.prototype, "defaultValue", 2);
ee([
  b({ type: Array })
], K.prototype, "reservedValues", 2);
ee([
  H("mwc-switch")
], K.prototype, "nullSwitch", 2);
ee([
  H("mwc-menu")
], K.prototype, "multiplierMenu", 2);
ee([
  H("mwc-icon-button")
], K.prototype, "multiplierButton", 2);
K = ee([
  ce("wizard-textfield")
], K);
var cr = Object.defineProperty, ar = Object.getOwnPropertyDescriptor, ge = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? ar(e, i) : e, c = t.length - 1, a; c >= 0; c--)
    (a = t[c]) && (n = (r ? a(e, i, n) : a(n)) || n);
  return r && n && cr(e, i, n), n;
};
let ne = class extends Ii {
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
    return this.nullable ? m`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : m``;
  }
  render() {
    return m`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
ge([
  b({ type: Boolean })
], ne.prototype, "nullable", 2);
ge([
  D()
], ne.prototype, "null", 1);
ge([
  b({ type: String })
], ne.prototype, "maybeValue", 1);
ge([
  b({ type: String })
], ne.prototype, "defaultValue", 2);
ge([
  b({ type: Array })
], ne.prototype, "reservedValues", 2);
ge([
  H("mwc-switch")
], ne.prototype, "nullSwitch", 2);
ne = ge([
  ce("wizard-select")
], ne);
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
}, U = /* @__PURE__ */ new Set();
U.add(S.BACKSPACE);
U.add(S.ENTER);
U.add(S.SPACEBAR);
U.add(S.PAGE_UP);
U.add(S.PAGE_DOWN);
U.add(S.END);
U.add(S.HOME);
U.add(S.ARROW_LEFT);
U.add(S.ARROW_UP);
U.add(S.ARROW_RIGHT);
U.add(S.ARROW_DOWN);
U.add(S.DELETE);
U.add(S.ESCAPE);
U.add(S.TAB);
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
}, W = /* @__PURE__ */ new Map();
W.set(Z.BACKSPACE, S.BACKSPACE);
W.set(Z.ENTER, S.ENTER);
W.set(Z.SPACEBAR, S.SPACEBAR);
W.set(Z.PAGE_UP, S.PAGE_UP);
W.set(Z.PAGE_DOWN, S.PAGE_DOWN);
W.set(Z.END, S.END);
W.set(Z.HOME, S.HOME);
W.set(Z.ARROW_LEFT, S.ARROW_LEFT);
W.set(Z.ARROW_UP, S.ARROW_UP);
W.set(Z.ARROW_RIGHT, S.ARROW_RIGHT);
W.set(Z.ARROW_DOWN, S.ARROW_DOWN);
W.set(Z.DELETE, S.DELETE);
W.set(Z.ESCAPE, S.ESCAPE);
W.set(Z.TAB, S.TAB);
var he = /* @__PURE__ */ new Set();
he.add(S.PAGE_UP);
he.add(S.PAGE_DOWN);
he.add(S.END);
he.add(S.HOME);
he.add(S.ARROW_LEFT);
he.add(S.ARROW_UP);
he.add(S.ARROW_RIGHT);
he.add(S.ARROW_DOWN);
function se(t) {
  var e = t.key;
  if (U.has(e))
    return e;
  var i = W.get(t.keyCode);
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
var oe, re, w = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
oe = {}, oe["" + w.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", oe["" + w.LIST_ITEM_CLASS] = "mdc-list-item", oe["" + w.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", oe["" + w.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", oe["" + w.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", oe["" + w.ROOT] = "mdc-list";
var ve = (re = {}, re["" + w.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", re["" + w.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", re["" + w.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", re["" + w.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", re["" + w.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", re["" + w.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", re["" + w.ROOT] = "mdc-deprecated-list", re), $e = {
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
    .` + w.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + w.LIST_ITEM_CLASS + ` a,
    .` + ve[w.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + ve[w.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + w.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + w.LIST_ITEM_CLASS + ` a,
    .` + w.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + w.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + ve[w.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + ve[w.LIST_ITEM_CLASS] + ` a,
    .` + ve[w.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + ve[w.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, X = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const et = (t, e) => t - e, sr = (t, e) => {
  const i = Array.from(t), r = Array.from(e), n = { added: [], removed: [] }, c = i.sort(et), a = r.sort(et);
  let s = 0, o = 0;
  for (; s < c.length || o < a.length; ) {
    const d = c[s], l = a[o];
    if (d === l) {
      s++, o++;
      continue;
    }
    if (d !== void 0 && (l === void 0 || d < l)) {
      n.removed.push(d), s++;
      continue;
    }
    if (l !== void 0 && (d === void 0 || l < d)) {
      n.added.push(l), o++;
      continue;
    }
  }
  return n;
}, or = ["input", "button", "textarea", "select"];
function Ie(t) {
  return t instanceof Set;
}
const We = (t) => {
  const e = t === X.UNSET_INDEX ? /* @__PURE__ */ new Set() : t;
  return Ie(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class ot extends Bt {
  constructor(e) {
    super(Object.assign(Object.assign({}, ot.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = X.UNSET_INDEX, this.focusedItemIndex_ = X.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return $e;
  }
  static get numbers() {
    return X;
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
      if (!Ie(i)) {
        const r = i === X.UNSET_INDEX;
        this.selectedIndex_ = r ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
    } else if (Ie(i))
      if (i.size) {
        const r = Array.from(i).sort(et);
        this.selectedIndex_ = r[0];
      } else
        this.selectedIndex_ = X.UNSET_INDEX;
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
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(We(e)) : this.setSingleSelectionAtIndex_(e));
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
    const n = se(e) === "ArrowLeft", c = se(e) === "ArrowUp", a = se(e) === "ArrowRight", s = se(e) === "ArrowDown", o = se(e) === "Home", d = se(e) === "End", l = se(e) === "Enter", p = se(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      c || d ? (e.preventDefault(), this.focusLastElement()) : (s || o) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let g = this.adapter.getFocusedElementIndex();
    if (g === -1 && (g = r, g < 0))
      return;
    let v;
    if (this.isVertical_ && s || !this.isVertical_ && a)
      this.preventDefaultEvent(e), v = this.focusNextElement(g);
    else if (this.isVertical_ && c || !this.isVertical_ && n)
      this.preventDefaultEvent(e), v = this.focusPrevElement(g);
    else if (o)
      this.preventDefaultEvent(e), v = this.focusFirstElement();
    else if (d)
      this.preventDefaultEvent(e), v = this.focusLastElement();
    else if ((l || p) && i) {
      const x = e.target;
      if (x && x.tagName === "A" && l)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(g, !0);
    }
    this.focusedItemIndex_ = g, v !== void 0 && (this.setTabindexAtIndex_(v), this.focusedItemIndex_ = v);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, i, r) {
    e !== X.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, i, r), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
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
    or.indexOf(r) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, i = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== X.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), i && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, i = !0) {
    const r = We(this.selectedIndex_), n = sr(r, e);
    if (!(!n.removed.length && !n.added.length)) {
      for (const c of n.removed)
        i && this.adapter.setSelectedStateForElementIndex(c, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(c, !1);
      for (const c of n.added)
        i && this.adapter.setSelectedStateForElementIndex(c, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(c, !0);
      this.selectedIndex_ = e, this.adapter.notifySelected(e, n);
    }
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(e) {
    this.selectedIndex_ === X.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, $e.ARIA_CURRENT));
    const i = this.ariaCurrentAttrValue_ !== null, r = i ? $e.ARIA_CURRENT : $e.ARIA_SELECTED;
    this.selectedIndex_ !== X.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, r, "false");
    const n = i ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, r, n);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === X.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== X.UNSET_INDEX ? e = this.selectedIndex_ : Ie(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
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
      return e === X.UNSET_INDEX || this.isIndexInRange_(e);
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
    this.isMulti_ && (n = /* @__PURE__ */ new Set([e])), this.isIndexValid_(n) && (this.isMulti_ ? this.toggleMultiAtIndex(e, r, i) : i || r ? this.setSingleSelectionAtIndex_(e, i) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(X.UNSET_INDEX), i && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, i, r = !0) {
    let n = !1;
    i === void 0 ? n = !this.adapter.getSelectedStateForElementIndex(e) : n = i;
    const c = We(this.selectedIndex_);
    n ? c.add(e) : c.delete(e), this.setMultiSelectionAtIndex_(c, r);
  }
}
function dr(t, e = 50) {
  let i;
  return function(r = !0) {
    clearTimeout(i), i = setTimeout(() => {
      t(r);
    }, e);
  };
}
const Le = (t) => t.hasAttribute("mwc-list-item");
function lr() {
  const t = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), t();
}
class Y extends at {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = ot, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = dr(this.layout.bind(this));
    this.debouncedLayout = (i = !0) => {
      lr.call(this), e(i);
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
    for (const a of i)
      Le(a) && (r.push(a), a._managingList = this), a.hasAttribute("divider") && !a.hasAttribute("role") && a.setAttribute("role", "separator");
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
    if (!Ie(e))
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
    return m`
      <!-- @ts-ignore -->
      <ul
          tabindex=${r}
          role="${le(e)}"
          aria-label="${le(i)}"
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
    return this.emptyMessage !== void 0 && i.length === 0 ? m`
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
      const i = this.getIndexOfTarget(e), r = e.target, n = Le(r);
      this.mdcFoundation.handleKeydown(e, n, i);
    }
  }
  onRequestSelected(e) {
    if (this.mdcFoundation) {
      let i = this.getIndexOfTarget(e);
      if (i === -1 && (this.layout(), i = this.getIndexOfTarget(e), i === -1) || this.items[i].disabled)
        return;
      const n = e.detail.selected, c = e.detail.source;
      this.mdcFoundation.handleSingleSelection(i, c === "interaction", n), e.stopPropagation();
    }
  }
  getIndexOfTarget(e) {
    const i = this.items, r = e.composedPath();
    for (const n of r) {
      let c = -1;
      if (Gi(n) && Le(n) && (c = i.indexOf(n)), c !== -1)
        return c;
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
      isFocusInsideList: () => Hi(this),
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
    const e = qt();
    if (!e.length)
      return -1;
    for (let i = e.length - 1; i >= 0; i--) {
      const r = e[i];
      if (Le(r))
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
  b({ type: String })
], Y.prototype, "emptyMessage", void 0);
u([
  H(".mdc-deprecated-list")
], Y.prototype, "mdcRoot", void 0);
u([
  Lt("", !0, "*")
], Y.prototype, "assignedElements", void 0);
u([
  Lt("", !0, '[tabindex="0"]')
], Y.prototype, "tabbableElements", void 0);
u([
  b({ type: Boolean }),
  me(function(t) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(t);
  })
], Y.prototype, "activatable", void 0);
u([
  b({ type: Boolean }),
  me(function(t, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(t), e !== void 0 && this.layout();
  })
], Y.prototype, "multi", void 0);
u([
  b({ type: Boolean }),
  me(function(t) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(t);
  })
], Y.prototype, "wrapFocus", void 0);
u([
  b({ type: String }),
  me(function(t, e) {
    e !== void 0 && this.updateItems();
  })
], Y.prototype, "itemRoles", void 0);
u([
  b({ type: String })
], Y.prototype, "innerRole", void 0);
u([
  b({ type: String })
], Y.prototype, "innerAriaLabel", void 0);
u([
  b({ type: Boolean })
], Y.prototype, "rootTabbable", void 0);
u([
  b({ type: Boolean, reflect: !0 }),
  me(function(t) {
    var e, i;
    if (t) {
      const r = (i = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && i !== void 0 ? i : null;
      this.previousTabindex = r, r && r.setAttribute("tabindex", "-1");
    } else !t && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], Y.prototype, "noninteractive", void 0);
var pr = Object.defineProperty, ur = Object.getOwnPropertyDescriptor, ye = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? ur(e, i) : e, c = t.length - 1, a; c >= 0; c--)
    (a = t[c]) && (n = (r ? a(e, i, n) : a(n)) || n);
  return r && n && pr(e, i, n), n;
};
function tt(t) {
  return !t.closest("filtered-list") || !t.parentElement || t.parentElement instanceof ie ? t : tt(t.parentElement);
}
function mr(t, e) {
  const i = t.innerText + `
`, r = Array.from(t.children).map((s) => s.innerText).join(`
`), n = t.value, c = (i + r + n).toUpperCase(), a = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  a.length === 1 && a[0] === "" || a.every((s) => new RegExp(
    `*${s}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(c)) ? tt(t).classList.remove("hidden") : tt(t).classList.add("hidden");
}
let ie = class extends Y {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((t) => t instanceof xe);
  }
  get isAllSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof xe).every((t) => t.selected);
  }
  get isSomeSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof xe).some((t) => t.selected);
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
      (t) => mr(t, this.searchField.value)
    );
  }
  onListItemConnected(t) {
    super.onListItemConnected(t), this.requestUpdate();
  }
  update(t) {
    super.update(t), this.onFilterInput();
  }
  renderCheckAll() {
    return this.existCheckListItem && !this.disableCheckAll ? m`<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
      this.onCheckAll();
    }}
          ></mwc-checkbox
        ></mwc-formfield>` : m``;
  }
  render() {
    return m`<div id="tfcontainer">
        <abbr title="${this.searchFieldLabel ?? y("filter")}"
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
ie.styles = ke`
    ${_i(wi.styles)}

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
ye([
  b({ type: String })
], ie.prototype, "searchFieldLabel", 2);
ye([
  b({ type: Boolean })
], ie.prototype, "disableCheckAll", 2);
ye([
  D()
], ie.prototype, "existCheckListItem", 1);
ye([
  D()
], ie.prototype, "isAllSelected", 1);
ye([
  D()
], ie.prototype, "isSomeSelected", 1);
ye([
  H("mwc-textfield")
], ie.prototype, "searchField", 2);
ie = ye([
  ce("filtered-list")
], ie);
function be(t, e, i) {
  const r = t.createElementNS(t.documentElement.namespaceURI, e);
  return Object.entries(i).filter(([n, c]) => c !== null).forEach(([n, c]) => r.setAttribute(n, c)), r;
}
function Se(t, e) {
  const i = t.cloneNode(!1);
  return Object.entries(e).forEach(([r, n]) => {
    n === null ? i.removeAttribute(r) : i.setAttribute(r, n);
  }), i;
}
function Ut(t, e, i = 1) {
  const r = "new" + e + i;
  return t.querySelector(`:scope > ${e}[name="${r}"]`) ? Ut(t, e, ++i) : r;
}
function hr(t) {
  return typeof t == "function";
}
function F(t) {
  return t instanceof K || t instanceof ne || t instanceof V ? t.maybeValue : t.value ?? null;
}
function Wt(t, e) {
  if (!t)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const i = hr(t) ? t : () => t;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: i, ...e?.detail }
  });
}
function _e(t) {
  return Wt(t, { detail: { subwizard: !0 } });
}
function G(t) {
  const e = t.split(">"), i = e.pop() ?? "";
  return [e.join(">"), i];
}
const L = ":not(*)";
function fr(t) {
  return `${t.getAttribute("version")}	${t.getAttribute("revision")}`;
}
function br(t, e) {
  const [i, r] = e.split("	");
  return !i || !r ? L : `${t}[version="${i}"][revision="${r}"]`;
}
function bt(t) {
  return I(t.parentElement) + ">" + t.getAttribute("connectivityNode");
}
function gt(t, e) {
  const [i, r] = G(e), n = N[t].parents.flatMap(
    (c) => B(c, i).split(",")
  );
  return z(
    n,
    [">"],
    [`${t}[connectivityNode="${r}"]`]
  ).map((c) => c.join("")).join(",");
}
function gr(t) {
  const [e, i, r, n, c, a] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((s) => t.getAttribute(s));
  return e === "None" ? `${I(t.parentElement)}>(${n} ${a} ${c})` : `${e} ${i || "(Client)"}/${r ?? ""} ${n} ${c ?? ""}`;
}
function yr(t, e) {
  if (e.endsWith(")")) {
    const [g, v] = G(e), [x, k, C] = v.substring(1, v.length - 1).split(" ");
    if (!x || !k) return L;
    const E = N[t].parents.flatMap(
      (T) => B(T, g).split(",")
    );
    return z(
      E,
      [">"],
      [`${t}[iedName="None"][lnClass="${x}"][lnType="${k}"][lnInst="${C}"]`]
    ).map((T) => T.join("")).join(",");
  }
  const [i, r, n, c, a] = e.split(/[ /]/);
  if (!i || !r || !c) return L;
  const [
    s,
    o,
    d,
    l,
    p
  ] = [
    [`[iedName="${i}"]`],
    r === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${r}"]`],
    n ? [`[prefix="${n}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    a ? [`[lnInst="${a}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return z(
    [t],
    s,
    o,
    d,
    l,
    p
  ).map((g) => g.join("")).join(",");
}
function vr(t) {
  return `${I(t.parentElement)}>${t.getAttribute(
    "iedName"
  )} ${t.getAttribute("apName")}`;
}
function xr(t, e) {
  const [i, r] = G(e), [n, c] = r.split(" ");
  return `${B(
    "IED",
    i
  )}>${t}[iedName="${n}"][apName="${c}"]`;
}
function Sr(t) {
  return `${I(t.parentElement)}>${t.getAttribute("associationID") ?? ""}`;
}
function kr(t, e) {
  const [i, r] = G(e);
  return r ? `${B(
    "Server",
    i
  )}>${t}[associationID="${r}"]` : L;
}
function _r(t) {
  return `${I(t.closest("IED"))}>>${t.getAttribute("inst")}`;
}
function Ar(t, e) {
  const [i, r] = e.split(">>");
  return r ? `IED[name="${i}"] ${t}[inst="${r}"]` : L;
}
function Cr(t) {
  const e = t.textContent, [i, r, n, c, a] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((s) => t.getAttribute(s));
  return `${I(t.parentElement)}>${e} ${i || ""} ${r || ""}/${n ?? ""} ${c ?? ""} ${a ?? ""}`;
}
function Er(t, e) {
  const [i, r] = G(e), [n, c, a, s, o, d] = r.split(/[ /]/), [
    l,
    p,
    g,
    v,
    x,
    k
  ] = [
    N[t].parents.flatMap(
      (C) => B(C, i).split(",")
    ),
    [`${n}`],
    c ? [`[apRef="${c}"]`] : [":not([apRef])", '[apRef=""]'],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    d ? [`[lnInst="${d}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return z(
    l,
    [">"],
    [t],
    p,
    g,
    v,
    x,
    k
  ).map((C) => C.join("")).join(",");
}
function Ir(t) {
  const [e, i, r, n, c, a, s, o] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((l) => t.getAttribute(l)), d = `${e}/${i ?? ""} ${r} ${n ?? ""}.${c} ${a || ""}`;
  return `${I(t.parentElement)}>${d} (${s}${o ? " [" + o + "]" : ""})`;
}
function wr(t, e) {
  const [i, r] = G(e), [n, c, a, s] = r.split(/[ /.]/), o = r.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), d = o && o[1] ? o[1] : "", l = o && o[2] ? o[2] : "", p = r.match(/\(([A-Z]{2})/), g = r.match(/ \[([0-9]{1,2})\]/), v = p && p[1] ? p[1] : "", x = g && g[1] ? g[1] : "", [
    k,
    C,
    E,
    T,
    R,
    j,
    M,
    J,
    Ve
  ] = [
    N[t].parents.flatMap(
      (Ae) => B(Ae, i).split(",")
    ),
    [`[ldInst="${n}"]`],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    s ? [`[lnInst="${s}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${d}"]`],
    l ? [`[daName="${l}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${v}"]`],
    x ? [`[ix="${x}"]`] : [":not([ix])", '[ix=""]']
  ];
  return z(
    k,
    [">"],
    [t],
    C,
    E,
    T,
    R,
    j,
    M,
    J,
    Ve
  ).map((Ae) => Ae.join("")).join(",");
}
function Dr(t) {
  if (!t.parentElement) return NaN;
  const e = I(t.parentElement), i = t.getAttribute("iedName"), r = t.getAttribute("intAddr"), n = Array.from(
    t.parentElement.querySelectorAll(`ExtRef[intAddr="${r}"]`)
  ).indexOf(t);
  if (r) return `${e}>${r}[${n}]`;
  const [
    c,
    a,
    s,
    o,
    d,
    l,
    p,
    g,
    v,
    x,
    k,
    C
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
  ].map((R) => t.getAttribute(R)), E = C ? `${p}:${C} ${g ?? ""}/${v ?? ""} ${x ?? ""} ${k ?? ""}` : "", T = `${i} ${c}/${a ?? ""} ${s} ${o ?? ""} ${d} ${l || ""}`;
  return `${e}>${E ? E + " " : ""}${T}${r ? `@${r}` : ""}`;
}
function Rr(t, e) {
  const [i, r] = G(e), n = N[t].parents.flatMap(
    (Ce) => B(Ce, i).split(",")
  );
  if (r.endsWith("]")) {
    const [Ce] = r.split("["), xi = [`[intAddr="${Ce}"]`];
    return z(n, [">"], [t], xi).map((Si) => Si.join("")).join(",");
  }
  let c, a, s, o, d, l, p, g, v, x, k, C, E, T;
  !r.includes(":") && !r.includes("@") ? [c, a, s, o, d, l, p] = r.split(/[ /]/) : r.includes(":") && !r.includes("@") ? [
    g,
    v,
    x,
    k,
    C,
    E,
    c,
    a,
    s,
    o,
    d,
    l,
    p
  ] = r.split(/[ /:]/) : !r.includes(":") && r.includes("@") ? [c, a, s, o, d, l, p, T] = r.split(/[ /@]/) : [
    g,
    v,
    x,
    k,
    C,
    E,
    c,
    a,
    s,
    o,
    d,
    l,
    p,
    T
  ] = r.split(/[ /:@]/);
  const [
    R,
    j,
    M,
    J,
    Ve,
    Ae,
    ui,
    mi,
    hi,
    fi,
    bi,
    gi,
    yi,
    vi
  ] = [
    c ? [`[iedName="${c}"]`] : [":not([iedName])"],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    o ? [`[lnClass="${o}"]`] : [":not([lnClass])"],
    d ? [`[lnInst="${d}"]`] : [":not([lnInst])", '[lnInst=""]'],
    l ? [`[doName="${l}"]`] : [":not([doName])"],
    p ? [`[daName="${p}"]`] : [":not([daName])", '[daName=""]'],
    g ? [`[serviceType="${g}"]`] : [":not([serviceType])", '[serviceType=""]'],
    v ? [`[srcCBName="${v}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    x ? [`[srcLDInst="${x}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    k ? [`[srcPrefix="${k}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    C ? [`[srcLNClass="${C}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    E ? [`[srcLNInst="${E}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    T ? [`[intAddr="${T}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return z(
    n,
    [">"],
    [t],
    R,
    j,
    M,
    J,
    Ve,
    Ae,
    ui,
    mi,
    hi,
    fi,
    bi,
    gi,
    yi,
    vi
  ).map((Ce) => Ce.join("")).join(",");
}
function $r(t) {
  const [e, i, r] = ["prefix", "lnClass", "inst"].map(
    (n) => t.getAttribute(n)
  );
  return `${I(t.parentElement)}>${e ?? ""} ${i} ${r}`;
}
function Lr(t, e) {
  const [i, r] = G(e), n = N[t].parents.flatMap(
    (p) => B(p, i).split(",")
  ), [c, a, s] = r.split(" ");
  if (!a) return L;
  const [o, d, l] = [
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    [`[inst="${s}"]`]
  ];
  return z(
    n,
    [">"],
    [t],
    o,
    d,
    l
  ).map((p) => p.join("")).join(",");
}
function Nr(t) {
  const [e, i, r, n, c, a] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((s) => t.getAttribute(s));
  return `${I(t.parentElement)}>${i} ${e || ""} ${r}/${n ?? ""} ${c} ${a}`;
}
function Tr(t, e) {
  const [i, r] = G(e), n = N[t].parents.flatMap(
    (E) => B(E, i).split(",")
  ), [c, a, s, o, d, l] = r.split(/[ /]/), [
    p,
    g,
    v,
    x,
    k,
    C
  ] = [
    c ? [`[iedName="${c}"]`] : [":not([iedName])", '[iedName=""]'],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${d}"]`],
    l ? [`[lnInst="${l}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return z(
    n,
    [">"],
    [t],
    p,
    g,
    v,
    x,
    k,
    C
  ).map((E) => E.join("")).join(",");
}
function yt(t) {
  const [e, i] = ["name", "ix"].map((r) => t.getAttribute(r));
  return `${I(t.parentElement)}>${e}${i ? "[" + i + "]" : ""}`;
}
function it(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [r, n] = G(e), [c, a, s, o] = n.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!a) return L;
  if (i === 0) return `${t}[name="${a}"]`;
  const d = N[t].parents.flatMap(
    (g) => g === "SDI" ? it(g, r, i - 1).split(",") : B(g, r).split(",")
  ).filter((g) => !g.startsWith(L));
  if (d.length === 0) return L;
  const [l, p] = [
    [`[name="${a}"]`],
    o ? [`[ix="${o}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return z(
    d,
    [">"],
    [t],
    l,
    p
  ).map((g) => g.join("")).join(",");
}
function Fr(t) {
  if (!t.parentElement) return NaN;
  const e = t.getAttribute("sGroup"), i = Array.from(t.parentElement.children).filter((r) => r.getAttribute("sGroup") === e).findIndex((r) => r.isSameNode(t));
  return `${I(t.parentElement)}>${e ? e + "." : ""} ${i}`;
}
function Or(t, e) {
  const [i, r] = G(e), [n, c] = r.split(" "), a = parseFloat(c), s = N[t].parents.flatMap(
    (l) => B(l, i).split(",")
  ), [o, d] = [
    n ? [`[sGroup="${n}"]`] : [""],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return z(
    s,
    [">"],
    [t],
    o,
    d
  ).map((l) => l.join("")).join(",");
}
function Pr(t) {
  const [e, i] = ["iedName", "apName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function Mr(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? L : `${t}[iedName="${i}"][apName="${r}"]`;
}
function vt(t) {
  const [e, i] = ["ldInst", "cbName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function xt(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? L : `${t}[ldInst="${i}"][cbName="${r}"]`;
}
function zr(t) {
  if (!t.parentElement) return NaN;
  if (!t.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = t.getAttribute("type");
  return t.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${I(t.parentElement)}>${e}`;
}
function qr(t, e) {
  const [i, r] = G(e), [n, c] = [
    N[t].parents.flatMap(
      (a) => B(a, i).split(",")
    ),
    r ? [`[type="${r}"]`] : [""]
  ];
  return z(n, [">"], [t], c).map((a) => a.join("")).join(",");
}
function Br(t) {
  if (!t.parentElement) return NaN;
  const e = t.parentElement, i = t.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${I(t.parentElement)}>${i}`;
  const r = Array.from(t.parentElement.children).filter((n) => n.getAttribute("type") === i).findIndex((n) => n.isSameNode(t));
  return `${I(t.parentElement)}>${i} [${r}]`;
}
function Gr(t, e) {
  const [i, r] = G(e), [n] = r.split(" "), c = r && r.match(/\[([0-9]+)\]/) && r.match(/\[([0-9]+)\]/)[1] ? parseFloat(r.match(/\[([0-9]+)\]/)[1]) : NaN, [a, s, o] = [
    N[t].parents.flatMap(
      (d) => B(d, i).split(",")
    ),
    [`[type="${n}"]`],
    c ? [`:nth-child(${c + 1})`] : [""]
  ];
  return z(
    a,
    [">"],
    [t],
    s,
    o
  ).map((d) => d.join("")).join(",");
}
function Vr(t) {
  return `${I(t.parentElement)}>${t.getAttribute("ord")}`;
}
function Hr(t, e) {
  const [i, r] = G(e);
  return `${B("EnumType", i)}>${t}[ord="${r}"]`;
}
function Ur(t) {
  return `${I(t.parentElement)}>${t.getAttribute("type") || "8-MMS"}	${t.textContent}`;
}
function Wr(t, e) {
  const [i, r] = G(e), [n, c] = r.split("	"), [a] = [
    N[t].parents.flatMap(
      (s) => B(s, i).split(",")
    )
  ];
  return z(
    a,
    [">"],
    [t],
    [`[type="${n}"]`],
    [">"],
    [c]
  ).map((s) => s.join("")).join(",");
}
function jr() {
  return "";
}
function Xr() {
  return ":root";
}
function A(t) {
  return t.parentElement.tagName === "SCL" ? t.getAttribute("name") : `${I(t.parentElement)}>${t.getAttribute("name")}`;
}
function _(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [r, n] = G(e);
  if (!n) return L;
  if (i === 0) return `${t}[name="${n}"]`;
  const c = N[t].parents;
  if (!c) return L;
  const a = c.flatMap(
    (s) => N[s].selector === N.Substation.selector ? _(s, r, i - 1).split(",") : B(s, r).split(",")
  ).filter((s) => !s.startsWith(L));
  return a.length === 0 ? L : z(a, [">"], [t], [`[name="${n}"]`]).map((s) => s.join("")).join(",");
}
function h(t) {
  return I(t.parentElement).toString();
}
function f(t, e) {
  const i = N[t].parents;
  if (!i) return L;
  const r = i.flatMap((n) => B(n, e).split(",")).filter((n) => !n.startsWith(L));
  return r.length === 0 ? L : z(r, [">"], [t]).map((n) => n.join("")).join(",");
}
function Ne(t) {
  return `#${t.id}`;
}
function Te(t, e) {
  const i = e.replace(/^#/, "");
  return i ? `${t}[id="${i}"]` : L;
}
const jt = [
  "TransformerWinding",
  "ConductingEquipment"
], Xt = [
  "GeneralEquipment",
  "PowerTransformer",
  ...jt
], rt = ["Substation", "VoltageLevel", "Bay"], Kt = ["Process", "Line"], Zt = ["EqSubFunction", "EqFunction"], Kr = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Xt,
  ...rt,
  ...Kt,
  ...Zt
], Jt = ["ConnectivityNode", ...Kr], Zr = ["GOOSESecurity", "SMVSecurity"], Jr = ["SubNetwork", ...Zr, ...Jt], Qr = ["BDA", "DA"], Yr = ["SampledValueControl", "GSEControl"], en = ["LogControl", "ReportControl"], tn = [...Yr, ...en], rn = ["GSE", "SMV"], nn = [
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
  ...tn,
  ...rn,
  ...Qr
], fe = ["LN0", "LN"], cn = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], an = ["Subject", "IssuerName"], sn = ["MinTime", "MaxTime"], on = ["LNodeType", "DOType", "DAType", "EnumType"], dn = [
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
], ln = ["DynDataSet", "ConfDataSet"], pn = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...ln
], un = ["ConfLogControl", "ConfSigRef"], mn = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], hn = ["SCL", ...Jr, ...nn, ...on], Qt = [
  ...hn,
  ...cn,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...an,
  ...sn,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...fe,
  ...dn,
  "DynAssociation",
  "SettingGroups",
  ...pn,
  ...un,
  ...mn,
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
], fn = new Set(Qt);
function Be(t) {
  return fn.has(t);
}
const Ge = ["Text", "Private"], de = [...Ge], $ = [...Ge], Fe = [...Ge], St = [...$, "Val"], Yt = [...de, "LNode"], pe = [...Yt], nt = [...pe], je = [
  ...pe,
  "PowerTransformer",
  "GeneralEquipment"
], kt = [
  ...nt,
  "Terminal"
], _t = [...$, "Address"], ei = [...de], At = [...ei, "IEDName"], Ct = [
  ...$,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], Et = [
  ...pe,
  "GeneralEquipment",
  "Function"
], It = [...ei, "TrgOps"], wt = [
  ...pe,
  "GeneralEquipment",
  "EqSubFunction"
], N = {
  AccessControl: {
    identity: h,
    selector: f,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: A,
    selector: _,
    parents: ["IED"],
    children: [
      ...de,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: h,
    selector: f,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: Sr,
    selector: kr,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: h,
    selector: f,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: A,
    selector: _,
    parents: ["DAType"],
    children: [...St]
  },
  BitRate: {
    identity: h,
    selector: f,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: A,
    selector: _,
    parents: ["VoltageLevel"],
    children: [
      ...je,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: Nr,
    selector: Tr,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: h,
    selector: f,
    parents: ["SCL"],
    children: [...$, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: A,
    selector: _,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...kt,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: h,
    selector: f,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: Pr,
    selector: Mr,
    parents: ["SubNetwork"],
    children: [...$, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: A,
    selector: _,
    parents: ["Bay", "Line"],
    children: [...Yt]
  },
  DA: {
    identity: A,
    selector: _,
    parents: ["DOType"],
    children: [...St]
  },
  DAI: {
    identity: yt,
    selector: it,
    parents: ["DOI", "SDI"],
    children: [...$, "Val"]
  },
  DAType: {
    identity: Ne,
    selector: Te,
    parents: ["DataTypeTemplates"],
    children: [...Fe, "BDA", "ProtNs"]
  },
  DO: {
    identity: A,
    selector: _,
    parents: ["LNodeType"],
    children: [...$]
  },
  DOI: {
    identity: A,
    selector: _,
    parents: [...fe],
    children: [...$, "SDI", "DAI"]
  },
  DOType: {
    identity: Ne,
    selector: Te,
    parents: ["DataTypeTemplates"],
    children: [...Fe, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: A,
    selector: _,
    parents: [...fe],
    children: [...de, "FCDA"]
  },
  DataSetDirectory: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: h,
    selector: f,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: Ne,
    selector: Te,
    parents: ["DataTypeTemplates"],
    children: [...Fe, "EnumVal"]
  },
  EnumVal: {
    identity: Vr,
    selector: Hr,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: A,
    selector: _,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...wt]
  },
  EqSubFunction: {
    identity: A,
    selector: _,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...wt]
  },
  ExtRef: {
    identity: Dr,
    selector: Rr,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: Ir,
    selector: wr,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: A,
    selector: _,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...pe,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: A,
    selector: _,
    parents: [
      "SubFunction",
      "Function",
      ...Kt,
      ...Zt,
      ...rt
    ],
    children: [...nt, "EqFunction"]
  },
  GetCBValues: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: A,
    selector: _,
    parents: ["AccessPoint"],
    children: [...de, "Subject", "IssuerName"]
  },
  GSE: {
    identity: vt,
    selector: xt,
    parents: ["ConnectedAP"],
    children: [..._t, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: A,
    selector: _,
    parents: ["LN0"],
    children: [...At, "Protocol"]
  },
  GSESettings: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: h,
    selector: f,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: h,
    selector: f,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: fr,
    selector: br,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: A,
    selector: _,
    parents: ["SCL"],
    children: [...$, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: Cr,
    selector: Er,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: h,
    selector: f,
    parents: [...fe],
    children: [...$, "ExtRef"]
  },
  IssuerName: {
    identity: h,
    selector: f,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: vr,
    selector: xr,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: _r,
    selector: Ar,
    parents: ["Server"],
    children: [...$, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: $r,
    selector: Lr,
    parents: ["AccessPoint", "LDevice"],
    children: [...Ct]
  },
  LN0: {
    identity: h,
    selector: f,
    parents: ["LDevice"],
    children: [
      ...Ct,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: gr,
    selector: yr,
    parents: [...Jt],
    children: [...$]
  },
  LNodeType: {
    identity: Ne,
    selector: Te,
    parents: ["DataTypeTemplates"],
    children: [...Fe, "DO"]
  },
  Line: {
    identity: A,
    selector: _,
    parents: ["Process", "SCL"],
    children: [
      ...Et,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: A,
    selector: _,
    parents: [...fe],
    children: [...$]
  },
  LogControl: {
    identity: A,
    selector: _,
    parents: [...fe],
    children: [...It]
  },
  LogSettings: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: h,
    selector: f,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: h,
    selector: f,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: h,
    selector: f,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: bt,
    selector: gt,
    parents: ["TransformerWinding"],
    children: [...$]
  },
  OptFields: {
    identity: h,
    selector: f,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: Br,
    selector: Gr,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: zr,
    selector: qr,
    parents: ["ConnectedAP"],
    children: [...$, "P"]
  },
  PowerTransformer: {
    identity: A,
    selector: _,
    parents: [...rt],
    children: [
      ...nt,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => L,
    parents: [],
    children: []
  },
  Process: {
    identity: A,
    selector: _,
    parents: ["Process", "SCL"],
    children: [
      ...Et,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: Ur,
    selector: Wr,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: h,
    selector: f,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: A,
    selector: _,
    parents: [...fe],
    children: [...It, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: h,
    selector: f,
    parents: ["ReportControl"],
    children: [...$, "ClientLN"]
  },
  SamplesPerSec: {
    identity: h,
    selector: f,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: A,
    selector: _,
    parents: ["LN0"],
    children: [...At, "SmvOpts"]
  },
  SecPerSamples: {
    identity: h,
    selector: f,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: jr,
    selector: Xr,
    parents: [],
    children: [
      ...Ge,
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
    identity: yt,
    selector: it,
    parents: ["DOI", "SDI"],
    children: [...$, "SDI", "DAI"]
  },
  SDO: {
    identity: A,
    selector: _,
    parents: ["DOType"],
    children: [...de]
  },
  Server: {
    identity: h,
    selector: f,
    parents: ["AccessPoint"],
    children: [
      ...$,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: h,
    selector: f,
    parents: ["AccessPoint"],
    children: [...$]
  },
  Services: {
    identity: h,
    selector: f,
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
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: h,
    selector: f,
    parents: ["LN0"],
    children: [...$]
  },
  SettingGroups: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: h,
    selector: f,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: h,
    selector: f,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: vt,
    selector: xt,
    parents: ["ConnectedAP"],
    children: [..._t]
  },
  SmvOpts: {
    identity: h,
    selector: f,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: A,
    selector: _,
    parents: ["AccessPoint"],
    children: [...de, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: A,
    selector: _,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...jt
    ],
    children: [...pe, "EqFunction"]
  },
  SubFunction: {
    identity: A,
    selector: _,
    parents: ["SubFunction", "Function"],
    children: [
      ...pe,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: A,
    selector: _,
    parents: ["Communication"],
    children: [...de, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: h,
    selector: f,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: A,
    selector: _,
    parents: ["SCL"],
    children: [...je, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: A,
    selector: _,
    parents: ["TransformerWinding"],
    children: [...pe, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: bt,
    selector: gt,
    parents: [...Xt],
    children: [...$]
  },
  Text: {
    identity: h,
    selector: f,
    parents: Qt.filter((t) => t !== "Text" && t !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: h,
    selector: f,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: A,
    selector: _,
    parents: ["PowerTransformer"],
    children: [
      ...kt,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: h,
    selector: f,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: Fr,
    selector: Or,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: h,
    selector: f,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: A,
    selector: _,
    parents: ["Substation"],
    children: [...je, "Voltage", "Bay", "Function"]
  }
};
function bn(t, e) {
  const i = t.tagName, r = Array.from(t.children);
  if (i === "Services" || i === "SettingGroups" || !Be(i))
    return r.find((s) => s.tagName === e) ?? null;
  const n = N[i]?.children ?? [];
  let c = n.findIndex((s) => s === e);
  if (c < 0) return null;
  let a;
  for (; c < n.length && !a; )
    a = r.find((s) => s.tagName === n[c]), c++;
  return a ?? null;
}
function B(t, e) {
  return typeof e != "string" ? L : Be(t) ? N[t].selector(t, e) : t;
}
function ue(t, e, i) {
  if (typeof i != "string" || !Be(e)) return null;
  const r = t.querySelector(N[e].selector(e, i));
  return r === null || Oe(r) ? r : Array.from(
    t.querySelectorAll(N[e].selector(e, i))
  ).find(Oe) ?? null;
}
function I(t) {
  if (t === null) return NaN;
  if (t.closest("Private")) return NaN;
  const e = t.tagName;
  return Be(e) ? N[e].identity(t) : NaN;
}
Nt((t) => (e) => {
  Object.keys(t).length ? e.setValue(t) : e.setValue("");
});
function z(...t) {
  return t.reduce(
    (e, i) => e.flatMap((r) => i.map((n) => [r, n].flat())),
    [[]]
  );
}
function ti(t, e = /* @__PURE__ */ new WeakSet()) {
  if (e.has(t)) return 1 / 0;
  switch (t?.constructor) {
    case Object:
    case Array:
      return e.add(t), 1 + Math.max(
        -1,
        ...Object.values(t).map((i) => ti(i, e))
      );
    default:
      return 0;
  }
}
function Oe(t) {
  return !t.closest("Private");
}
const gn = 99;
Array(gn).fill(1).map((t, e) => `${e + 1}`);
function yn(t, e = "user", i) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { action: t, initiator: e, ...i?.detail }
  });
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
const Dt = /* @__PURE__ */ new WeakMap(), Rt = 2147483647, vn = Me((...t) => (e) => {
  let i = Dt.get(e);
  i === void 0 && (i = {
    lastRenderedIndex: Rt,
    values: []
  }, Dt.set(e, i));
  const r = i.values;
  let n = r.length;
  i.values = t;
  for (let c = 0; c < t.length && !(c > i.lastRenderedIndex); c++) {
    const a = t[c];
    if (Pt(a) || typeof a.then != "function") {
      e.setValue(a), i.lastRenderedIndex = c;
      break;
    }
    c < n && a === r[c] || (i.lastRenderedIndex = Rt, n = 0, Promise.resolve(a).then((s) => {
      const o = i.values.indexOf(a);
      o > -1 && o < i.lastRenderedIndex && (i.lastRenderedIndex = o, e.setValue(s), e.commit());
    }));
  }
});
var xn = Object.defineProperty, Sn = Object.getOwnPropertyDescriptor, ae = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Sn(e, i) : e, c = t.length - 1, a; c >= 0; c--)
    (a = t[c]) && (n = (r ? a(e, i, n) : a(n)) || n);
  return r && n && xn(e, i, n), n;
};
const kn = m`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${y("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let te = class extends Pe {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (t) => ({
      path: t,
      header: m`<h2>${"/" + t.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return ti(this.selection);
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
        for (const a of r) n = n[a];
        const c = Object.keys(n).map((a) => r.concat(a));
        return c.length === 0 ? [r] : c;
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
    return m`<filtered-list
      @selected=${(i) => this.select(i, t)}
      searchFieldLabel="${this.getTitle(t)}"
    >
      ${e.map(
      (i) => m`<mwc-list-item
            value="${i}"
            ?activated=${this.getPaths(t.length).map((r) => JSON.stringify(r)).includes(JSON.stringify(t.concat(i)))}
            >${this.getDisplayString(i, t)}</mwc-list-item
          >`
    )}
    </filtered-list>`;
  }
  async renderColumn(t) {
    const i = this.getPaths(t).map((n) => this.read(n)), r = [];
    for await (const { header: n, entries: c, path: a } of i)
      (n || c.length > 0) && r.push(
        m`${le(n)} ${this.renderDirectory(a, c)}`
      );
    return r.length === 0 ? m`` : m`<div class="column">${r}</div>`;
  }
  render() {
    const t = new Array(this.depth).fill(0).map((e, i) => this.renderColumn(i));
    return this.loaded = Promise.allSettled(t).then(), m`<div class="pane">
      ${t.map((e) => vn(e, kn))}
    </div>`;
  }
};
te.styles = ke`
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
ae([
  b({ type: Object })
], te.prototype, "selection", 2);
ae([
  b({ type: Boolean })
], te.prototype, "multi", 2);
ae([
  b({ type: Number })
], te.prototype, "depth", 1);
ae([
  b({ type: Array })
], te.prototype, "paths", 1);
ae([
  b({ type: Array })
], te.prototype, "path", 1);
ae([
  b({ attribute: !1 })
], te.prototype, "read", 2);
ae([
  b({ attribute: !1 })
], te.prototype, "loaded", 2);
ae([
  H("div")
], te.prototype, "container", 2);
te = ae([
  ce("finder-list")
], te);
function ii(t) {
  return t.startsWith("IED:") ? t.replace(/^.*:/, "").trim() : t.startsWith("LN0:") ? "LLN0" : t.replace(/^.*>/, "").trim();
}
function ri(t, e) {
  return async (i) => {
    const [r, n] = i[i.length - 1]?.split(": ", 2), c = ue(t, r, n);
    return c ? {
      path: i,
      header: void 0,
      entries: e(c).map(
        (a) => `${a.tagName}: ${I(a)}`
      )
    } : { path: i, header: m`<p>${y("error")}</p>`, entries: [] };
  };
}
function _n(t) {
  return t.tagName === "SCL" ? Array.from(t.querySelectorAll("IED")).filter(Oe) : [];
}
function An(t) {
  return m`<finder-list
    path="${JSON.stringify(["SCL: "])}"
    .read=${ri(t, _n)}
    .getDisplayString=${ii}
    .getTitle=${(e) => e[e.length - 1]}
  ></finder-list>`;
}
function ni(t) {
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
function ci(t) {
  return m`<finder-list
    multi
    .paths=${[["Server: " + I(t)]]}
    .read=${ri(t.ownerDocument, ni)}
    .getDisplayString=${ii}
    .getTitle=${(e) => e[e.length - 1]}
  ></finder-list>`;
}
const Cn = {
  asciName: "[A-Za-z][0-9,A-Z,a-z_]*"
}, En = {
  cbName: 32
};
function ai(t, e) {
  const [i, r] = e[e.length - 1].split(": "), n = ue(t.ownerDocument, i, r);
  if (!n || ni(n).length > 0) return;
  const c = e.find((C) => C.startsWith("LN"));
  if (!c) return;
  const [a, s] = c.split(": "), o = ue(t.ownerDocument, a, s);
  if (!o) return;
  const d = o.closest("LDevice")?.getAttribute("inst"), l = o.getAttribute("prefix") ?? "", p = o.getAttribute("lnClass"), g = o.getAttribute("inst") && o.getAttribute("inst") !== "" ? o.getAttribute("inst") : null;
  let v = "", x = "", k = "";
  for (const C of e) {
    const [E, T] = C.split(": ");
    if (!["DO", "DA", "SDO", "BDA"].includes(E)) continue;
    const R = ue(t.ownerDocument, E, T);
    if (!R) return;
    const j = R.getAttribute("name");
    E === "DO" && (v = j), E === "SDO" && (v = v + "." + j), E === "DA" && (x = j, k = R.getAttribute("fc") ?? ""), E === "BDA" && (x = x + "." + j);
  }
  if (!(!d || !p || !v || !x || !k))
    return be(t.ownerDocument, "FCDA", {
      ldInst: d,
      prefix: l,
      lnClass: p,
      lnInst: g,
      doName: v,
      daName: x,
      fc: k
    });
}
function In(t) {
  return (e, i) => {
    const n = i.shadowRoot.querySelector("finder-list")?.paths ?? [], c = [];
    for (const a of n) {
      const s = ai(t, a);
      s && c.push({
        new: {
          parent: t,
          element: s,
          reference: null
        }
      });
    }
    return c;
  };
}
function wn(t) {
  const e = t.closest("Server");
  return [
    {
      title: y("wizard.title.add", { tagName: "FCDA" }),
      primary: {
        label: "add",
        icon: "add",
        action: In(t)
      },
      content: [e ? ci(e) : m``]
    }
  ];
}
function Dn(t) {
  return (e) => {
    e.dispatchEvent(_e(() => wn(t)));
  };
}
function Rn(t) {
  return (e, i) => {
    const r = e.find((d) => d.label === "name").value, n = F(e.find((d) => d.label === "desc")), c = t.getAttribute("name"), a = [];
    if (!(r === c && n === t.getAttribute("desc"))) {
      const d = Se(t, { name: r, desc: n });
      a.push({
        old: { element: t },
        new: { element: d }
      });
    }
    const s = r !== c ? Array.from(
      t.parentElement?.querySelectorAll(
        `ReportControlBock[datSet=${c}], GSEControl[datSet=${c}],SampledValueControl[datSet=${c}] `
      ) ?? []
    ).map((d) => {
      const l = Se(d, { datSet: r });
      return { old: { element: d }, new: { element: l } };
    }) : [];
    return [
      ...Array.from(
        i.shadowRoot.querySelectorAll(
          "filtered-list > mwc-check-list-item:not([selected])"
        )
      ).map((d) => ue(t, "FCDA", d.value)).filter((d) => d).map((d) => ({
        old: {
          parent: t,
          element: d,
          reference: d.nextSibling
        }
      })),
      ...a,
      ...s
    ];
  };
}
function $n(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc");
  return [
    {
      title: y("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        label: y("save"),
        icon: "save",
        action: Rn(t)
      },
      menuActions: [
        {
          icon: "add",
          label: y("dataset.fcda.add"),
          action: Dn(t)
        }
      ],
      content: [
        m`<wizard-textfield
          label="name"
          .maybeValue=${e}
          helper="${y("scl.name")}"
          required
          disabled="true"
        >
        </wizard-textfield>`,
        m`<wizard-textfield
          label="desc"
          .maybeValue=${i}
          helper="${y("scl.desc")}"
          nullable
          required
        >
        </wizard-textfield>`,
        m`<filtered-list multi
          >${Array.from(t.querySelectorAll("FCDA")).map(
          (r) => m`<mwc-check-list-item selected value="${I(r)}"
                >${I(r).split(">").pop()}</mwc-check-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
function si(t) {
  return Object.entries(t).map(
    ([e, i]) => m`<wizard-checkbox
        label="${e}"
        .maybeValue=${i}
        nullable
        helper="${y(`scl.${e}`)}"
      ></wizard-checkbox>`
  );
}
function Ln(t) {
  return (e) => {
    const i = F(e.find((p) => p.label === "seqNum")), r = F(e.find((p) => p.label === "timeStamp")), n = F(e.find((p) => p.label === "dataSet")), c = F(e.find((p) => p.label === "reasonCode")), a = F(e.find((p) => p.label === "dataRef")), s = F(e.find((p) => p.label === "entryID")), o = F(e.find((p) => p.label === "configRef")), d = F(e.find((p) => p.label === "bufOvfl"));
    if (i === t.getAttribute("seqNum") && r === t.getAttribute("timeStamp") && n === t.getAttribute("dataSet") && c === t.getAttribute("reasonCode") && a === t.getAttribute("dataRef") && s === t.getAttribute("entryID") && o === t.getAttribute("configRef") && d === t.getAttribute("bufOvfl"))
      return [];
    const l = Se(t, {
      seqNum: i,
      timeStamp: r,
      dataSet: n,
      reasonCode: c,
      dataRef: a,
      entryID: s,
      configRef: o,
      bufOvfl: d
    });
    return [{ old: { element: t }, new: { element: l } }];
  };
}
function Nn(t) {
  const [
    e,
    i,
    r,
    n,
    c,
    a,
    s,
    o
  ] = [
    "seqNum",
    "timeStamp",
    "dataSet",
    "reasonCode",
    "dataRef",
    "entryID",
    "configRef",
    "bufOvfl"
  ].map((d) => t.getAttribute(d));
  return [
    {
      title: y("wizard.title.edit", { tagName: t.tagName }),
      primary: {
        icon: "save",
        label: y("save"),
        action: Ln(t)
      },
      content: si({
        seqNum: e,
        timeStamp: i,
        dataSet: r,
        reasonCode: n,
        dataRef: c,
        entryID: a,
        configRef: s,
        bufOvfl: o
      })
    }
  ];
}
function oi(t) {
  return Object.entries(t).map(
    ([e, i]) => m`<wizard-checkbox
        label="${e}"
        .maybeValue=${i}
        nullable
        helper="${y(`scl.${e}`)}"
      ></wizard-checkbox>`
  );
}
function Tn(t) {
  return (e) => {
    const i = F(e.find((d) => d.label === "dchg")), r = F(e.find((d) => d.label === "qchg")), n = F(e.find((d) => d.label === "dupd")), c = F(e.find((d) => d.label === "period")), a = F(e.find((d) => d.label === "gi"));
    if (i === t.getAttribute("dchg") && r === t.getAttribute("qchg") && n === t.getAttribute("dupd") && c === t.getAttribute("period") && a === t.getAttribute("gi"))
      return [];
    const s = Se(t, {
      dchg: i,
      qchg: r,
      dupd: n,
      period: c,
      gi: a
    });
    return [{ old: { element: t }, new: { element: s } }];
  };
}
function Fn(t) {
  const [e, i, r, n, c] = [
    "dchg",
    "qchg",
    "dupd",
    "period",
    "gi"
  ].map((a) => t.getAttribute(a));
  return [
    {
      title: y("wizard.title.edit", { tagName: t.tagName }),
      primary: {
        icon: "save",
        label: y("save"),
        action: Tn(t)
      },
      content: oi({ dchg: e, qchg: i, dupd: r, period: n, gi: c })
    }
  ];
}
function Xe(t) {
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
function di(t, e) {
  const [i, r, n, c, a, s, o] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc"
  ].map((R) => t.getAttribute(R));
  if (!e.querySelector(`LDevice[inst="${i}"]`)) return !1;
  const l = r ? [`[prefix="${r}"]`] : ['[prefix=""]', ":not([prefix])"], p = c ? [`[inst="${c}"]`] : ['[inst=""]', ":not([inst])"], g = z(
    ["LN0", "LN"],
    l,
    [`[lnClass="${n}"]`],
    p
  ).map((R) => R.join("")).join(","), v = e.querySelector(g);
  if (!v) return !1;
  const x = a?.split(".");
  if (!x) return !1;
  let k = v;
  for (const R of x)
    if (k = Xe(k).find(
      (j) => j.getAttribute("name") === R
    ), !k) return !1;
  const C = s?.split("."), E = Xe(k).some(
    (R) => R.getAttribute("fc") === o
  );
  if (!C && E) return !0;
  if (!C) return !1;
  let T = "";
  for (const R of C)
    if (k = Xe(k).find(
      (j) => j.getAttribute("name") === R
    ), k?.getAttribute("fc") && (T = k.getAttribute("fc")), !k) return !1;
  return T === o;
}
function li(t) {
  return [
    m`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${y("scl.name")}"
      required
      validationMessage="${y("textfield.required")}"
      pattern="${Cn.asciName}"
      maxLength="${En.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${y("scl.desc")}"
    ></wizard-textfield>`,
    m`<wizard-checkbox
      label="buffered"
      .maybeValue=${t.buffered}
      helper="${y("scl.buffered")}"
    ></wizard-checkbox>`,
    m`<wizard-textfield
      label="rptID"
      .maybeValue=${t.rptID}
      nullable
      required
      helper="${y("report.rptID")}"
    ></wizard-textfield>`,
    m`<wizard-checkbox
      label="indexed"
      .maybeValue=${t.indexed}
      nullable
      helper="${y("scl.indexed")}"
    ></wizard-checkbox>`,
    m`<wizard-textfield
      label="max Clients"
      .maybeValue=${t.max}
      helper="${y("scl.maxReport")}"
      nullable
      type="number"
      suffix="#"
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="bufTime"
      .maybeValue=${t.bufTime}
      helper="${y("scl.bufTime")}"
      nullable
      required
      type="number"
      min="0"
      suffix="ms"
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="intgPd"
      .maybeValue=${t.intgPd}
      helper="${y("scl.intgPd")}"
      nullable
      required
      type="number"
      min="0"
      suffix="ms"
    ></wizard-textfield>`
  ];
}
function On(t) {
  return (e, i) => {
    const r = {};
    [
      "name",
      "desc",
      "buffered",
      "rptID",
      "indexed",
      "bufTime",
      "intgPd"
    ].forEach((M) => {
      r[M] = F(e.find((J) => J.label === M));
    }), r.confRev = "1";
    const c = r.name + "sDataSet";
    r.datSet = c;
    const a = be(
      t.ownerDocument,
      "ReportControl",
      r
    ), s = {};
    [
      "seqNum",
      "timeStamp",
      "dataSet",
      "reasonCode",
      "dataRef",
      "entryID",
      "configRef",
      "bufOvfl"
    ].forEach((M) => {
      s[M] = F(e.find((J) => J.label === M));
    });
    const d = be(
      t.ownerDocument,
      "OptFields",
      s
    ), l = {};
    ["dchg", "qchg", "dupd", "period", "gi"].forEach((M) => {
      l[M] = F(e.find((J) => J.label === M));
    });
    const g = be(t.ownerDocument, "TrgOps", l), v = F(e.find((M) => M.label === "max Clients")), x = v ? be(t.ownerDocument, "RptEnabled", {
      max: v
    }) : null;
    a.appendChild(g), a.appendChild(d), x && a.appendChild(x);
    const k = be(t.ownerDocument, "DataSet", {
      name: c
    }), E = i.shadowRoot.querySelector("finder-list")?.paths ?? [];
    for (const M of E) {
      const J = ai(t, M);
      J && k.appendChild(J);
    }
    const T = r.name, R = t.closest("IED").getAttribute("name");
    return [{
      title: y("controlblock.action.add", {
        type: "Report",
        name: T,
        iedName: R
      }),
      actions: [
        { new: { parent: t, element: a } },
        { new: { parent: t, element: k } }
      ]
    }];
  };
}
function pi(t) {
  const e = t.closest("Server"), i = Ut(t, "ReportControl");
  return [
    {
      title: y("wizard.title.add", { tagName: "ReportControl" }),
      content: li({
        name: i,
        desc: null,
        buffered: "true",
        rptID: null,
        indexed: "true",
        max: "5",
        bufTime: "100",
        intgPd: "1000"
      })
    },
    {
      title: y("scl.TrgOps"),
      content: oi({ dchg: "true", qchg: "true", dupd: "true", period: "true", gi: "false" })
    },
    {
      title: y("scl.OptFields"),
      content: si({
        seqNum: "true",
        timeStamp: "true",
        dataSet: "true",
        reasonCode: "true",
        dataRef: "true",
        entryID: "true",
        configRef: "true",
        bufOvfl: "true"
      })
    },
    {
      title: y("dataset.fcda.add"),
      primary: {
        icon: "save",
        label: y("save"),
        action: On(t)
      },
      content: [e ? ci(e) : m``]
    }
  ];
}
function Pn(t) {
  return (e, i) => {
    const n = i.shadowRoot?.querySelector("finder-list")?.path ?? [];
    if (n.length === 0) return [];
    const [c, a] = n.pop().split(": ");
    if (c !== "IED") return [];
    const s = ue(t, c, a);
    if (!s) return [];
    const o = s.querySelector("LN0");
    return o ? [() => pi(o)] : [];
  };
}
function Mn(t) {
  return [
    {
      title: y("report.wizard.location"),
      primary: {
        icon: "",
        label: y("next"),
        action: Pn(t)
      },
      content: [An(t)]
    }
  ];
}
function zn(t) {
  return () => t.tagName === "IED" && t.querySelector("LN0") ? [() => pi(t.querySelector("LN0"))] : [() => Mn(t.ownerDocument)];
}
function qn(t) {
  if (!t.parentElement) return null;
  const e = t.parentElement.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), i = Array.from(
    t.parentElement.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    )
  ).filter(
    (a) => a.getAttribute("datSet") === e?.getAttribute("name")
  ).length <= 1, r = [];
  r.push({
    old: {
      parent: t.parentElement,
      element: t,
      reference: t.nextSibling
    }
  }), e && i && r.push({
    old: {
      parent: t.parentElement,
      element: e,
      reference: e.nextSibling
    }
  });
  const n = t.getAttribute("name"), c = t.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: y("controlblock.action.remove", { type: "Report", name: n, iedName: c }),
    actions: r
  };
}
function Bn(t, e, i) {
  if (t === null) {
    const n = be(i.ownerDocument, "RptEnabled", {
      max: e
    });
    return {
      new: {
        parent: i,
        element: n,
        reference: bn(i, "RptEnabled")
      }
    };
  }
  const r = Se(t, { max: e });
  return {
    old: { element: t },
    new: { element: r }
  };
}
function Gn(t) {
  return (e, i) => {
    const r = t.ownerDocument, n = i.shadowRoot?.querySelector("filtered-list")?.selected, c = [];
    return n.forEach((a) => {
      const s = ue(r, "IED", a.value);
      if (!s) return;
      const o = s.querySelector("LN0");
      if (!o) return [];
      const d = t.parentElement?.querySelector(
        `DataSet[name="${t.getAttribute("datSet")}"]`
      );
      if (d && o.querySelector(
        `DataSet[name="${d.getAttribute("name")}"]`
      ))
        return [];
      if (o.querySelector(
        `ReportControl[name="${t.getAttribute("name")}"]`
      ))
        return [];
      const l = d?.cloneNode(!0);
      if (Array.from(l.querySelectorAll("FCDA")).forEach((x) => {
        di(x, s) || l.removeChild(x);
      }), l.children.length === 0) return [];
      const p = t.cloneNode(!0), g = t.closest("IED")?.getAttribute("name"), v = s.getAttribute("name");
      c.push({
        title: `ReportControl copied from ${g} to ${v}`,
        actions: [
          { new: { parent: o, element: l } },
          { new: { parent: o, element: p } }
        ]
      });
    }), c;
  };
}
function Vn(t, e) {
  const i = t.parentElement?.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), r = t.closest("IED")?.getAttribute("name") === e.getAttribute("name"), n = e.querySelector("AccessPoint > Server > LDevice > LN0"), c = !!n?.querySelector(
    `ReportControl[name="${t.getAttribute("name")}"]`
  ), a = !!n?.querySelector(
    `DataSet[name="${i?.getAttribute("name")}"]`
  ), s = i?.cloneNode(!0);
  Array.from(s.querySelectorAll("FCDA")).forEach((p) => {
    di(p, e) || s.removeChild(p);
  });
  const o = s.children.length > 0, d = e.getAttribute("name");
  let l = "";
  return r ? l = y("controlblock.hints.source") : n ? a && !r ? l = y("controlblock.hints.exist", {
    type: "RerportControl",
    name: t.getAttribute("name")
  }) : c && !r ? l = y("controlblock.hints.exist", {
    type: "DataSet",
    name: t.getAttribute("name")
  }) : o ? l = y("controlBlock.hints.valid") : l = y("controlblock.hints.noMatchingData") : l = y("controlblock.hints.missingServer"), m`<mwc-check-list-item
    twoline
    value="${I(e)}"
    ?disabled=${r || !n || c || a || !o}
    ><span>${d}</span
    ><span slot="secondary">${l}</span></mwc-check-list-item
  >`;
}
function Hn(t) {
  return [
    {
      title: y("report.wizard.location"),
      primary: {
        icon: "save",
        label: y("save"),
        action: Gn(t)
      },
      content: [
        m`<filtered-list multi
          >${Array.from(t.ownerDocument.querySelectorAll("IED")).map(
          (e) => Vn(t, e)
        )}</filtered-list
        >`
      ]
    }
  ];
}
function Un(t) {
  return (e) => {
    e.dispatchEvent(
      _e(() => Hn(t))
    );
  };
}
function Wn(t) {
  return (e) => {
    const i = qn(t);
    i && e.dispatchEvent(yn(i)), e.dispatchEvent(Wt());
  };
}
function jn(t) {
  return (e) => {
    e.dispatchEvent(_e(() => $n(t)));
  };
}
function Xn(t) {
  return (e) => {
    e.dispatchEvent(_e(() => Fn(t)));
  };
}
function Kn(t) {
  return (e) => {
    e.dispatchEvent(_e(() => Nn(t)));
  };
}
function Zn(t) {
  return (e) => {
    const i = {}, r = [
      "name",
      "desc",
      "buffered",
      "rptID",
      "indexed",
      "bufTime",
      "intgPd"
    ];
    r.forEach((p) => {
      i[p] = F(e.find((g) => g.label === p));
    });
    let n = null;
    if (r.some((p) => i[p] !== t.getAttribute(p))) {
      const p = Se(t, i);
      n = {
        old: { element: t },
        new: { element: p }
      };
    }
    const c = F(e.find((p) => p.label === "max Clients"));
    let a = null;
    c !== (t.querySelector("RptEnabled")?.getAttribute("max") ?? null) && (a = Bn(
      t.querySelector("RptEnabled"),
      c,
      t
    ));
    const s = [];
    n && s.push(n), a && s.push(a);
    const o = i.name, d = t.closest("IED").getAttribute("name"), l = {
      title: y("controlblock.action.edit", {
        type: "Report",
        name: o,
        iedName: d
      }),
      actions: s
    };
    return s.length ? [l] : [];
  };
}
function Jn(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), r = t.getAttribute("buffered"), n = t.getAttribute("rptID"), c = t.getAttribute("indexed"), a = t.querySelector("RptEnabled")?.getAttribute("max") ?? null, s = t.getAttribute("bufTime"), o = t.getAttribute("intgPd"), d = t.querySelector("TrgOps"), l = t.querySelector("OptFields"), p = t.parentElement?.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), g = [];
  return g.push({
    icon: "delete",
    label: y("remove"),
    action: Wn(t)
  }), p && g.push({
    icon: "edit",
    label: y("scl.DataSet"),
    action: jn(p)
  }), d && g.push({
    icon: "edit",
    label: y("scl.TrgOps"),
    action: Xn(d)
  }), l && g.push({
    icon: "edit",
    label: y("scl.OptFields"),
    action: Kn(l)
  }), g.push({
    icon: "copy",
    label: y("controlblock.label.copy"),
    action: Un(t)
  }), [
    {
      title: y("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: y("save"),
        action: Zn(t)
      },
      menuActions: g,
      content: [
        ...li({
          name: e,
          desc: i,
          buffered: r,
          rptID: n,
          indexed: c,
          max: a,
          bufTime: s,
          intgPd: o
        })
      ]
    }
  ];
}
function mc(t) {
  const e = Array.from(
    t.querySelectorAll("ReportControl")
  ).filter(Oe), i = t.querySelector("LN0") ? {
    icon: "add",
    label: y("Report"),
    action: zn(t)
  } : void 0;
  return [
    {
      title: y("wizard.title.select", { tagName: "ReportControl" }),
      primary: i,
      content: [
        m`<filtered-list
          @selected=${(r) => {
          const n = r.target.selected.value, c = ue(t, "ReportControl", n);
          c && r.target?.dispatchEvent(
            _e(() => Jn(c))
          );
        }}
          >${e.map(
          (r) => m`<mwc-list-item twoline value="${I(r)}"
                ><span>${r.getAttribute("name")}</span
                ><span slot="secondary"
                  >${I(r)}</span
                ></mwc-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
export {
  pi as createReportControlWizard,
  Jn as editReportControlWizard,
  Wn as removeReportControl,
  qn as removeReportControlAction,
  Hn as reportControlCopyToIedSelector,
  Mn as reportControlParentSelector,
  mc as selectReportControlWizard
};
