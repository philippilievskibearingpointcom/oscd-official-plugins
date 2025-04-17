import { NodePart as di, AttributePart as li, directive as wt, html as V, render as pi } from "lit-html";
import "@material/mwc-icon";
import { LitElement as Ye, query as U, property as u, state as I, html as g, css as ve, customElement as ne, queryAsync as Lt, eventOptions as ui, queryAssignedNodes as Dt, unsafeCSS as mi } from "lit-element";
import "@material/mwc-formfield";
import { TextField as hi } from "@material/mwc-textfield";
import { List as fi } from "@material/mwc-list";
import { Select as bi } from "@material/mwc-select";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
const gi = 1e3 * 60, at = "langChanged";
function yi(t, e, i) {
  return Object.entries(Ge(e || {})).reduce((r, [n, c]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(Ge(c))), t);
}
function vi(t, e) {
  const i = t.split(".");
  let r = e.strings;
  for (; r != null && i.length > 0; )
    r = r[i.shift()];
  return r != null ? r.toString() : null;
}
function Ge(t) {
  return typeof t == "function" ? t() : t;
}
const xi = () => ({
  loader: () => Promise.resolve({}),
  empty: (t) => `[${t}]`,
  lookup: vi,
  interpolate: yi,
  translationCache: {}
});
let Si = xi();
function ki(t, e) {
  const i = (r) => t(r.detail);
  return window.addEventListener(at, i, e), () => window.removeEventListener(at, i);
}
function A(t, e, i = Si) {
  let r = i.translationCache[t] || (i.translationCache[t] = i.lookup(t, i) || i.empty(t, i));
  return e = e != null ? Ge(e) : null, e != null ? i.interpolate(r, e, i) : r;
}
function Rt(t) {
  return t instanceof di ? t.startNode.isConnected : t instanceof li ? t.committer.element.isConnected : t.element.isConnected;
}
function _i(t) {
  for (const [e] of t)
    Rt(e) || t.delete(e);
}
function Ai(t) {
  "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t);
}
function Ii(t, e) {
  setInterval(() => Ai(() => _i(t)), e);
}
const et = /* @__PURE__ */ new Map();
function Ei() {
  ki((t) => {
    for (const [e, i] of et)
      Rt(e) && $t(e, i, t);
  });
}
Ei();
Ii(et, gi);
function $t(t, e, i) {
  const r = e(i);
  t.value !== r && (t.setValue(r), t.commit());
}
wt((t) => (e) => {
  et.set(e, t), $t(e, t);
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
const Nt = /* @__PURE__ */ new WeakMap(), tt = (t) => (...e) => {
  const i = t(...e);
  return Nt.set(i, !0), i;
}, ot = (t) => typeof t == "function" && Nt.has(t);
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
const Pe = {};
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
const Ci = (t) => t === null || !(typeof t == "object" || typeof t == "function");
class Le {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== Pe && (!Ci(e) || e !== this.value) && (this.value = e, ot(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; ot(this.value); ) {
      const e = this.value;
      this.value = Pe, e(this);
    }
    this.value !== Pe && this.committer.commit();
  }
}
class Tt extends Le {
}
let wi = !1;
(() => {
  try {
    const t = {
      get capture() {
        return wi = !0, !1;
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
var He = function(t, e) {
  return He = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
    i.__proto__ = r;
  } || function(i, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
  }, He(t, e);
};
function Li(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  He(t, e);
  function i() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
}
var ge = function() {
  return ge = Object.assign || function(e) {
    for (var i, r = 1, n = arguments.length; r < n; r++) {
      i = arguments[r];
      for (var c in i) Object.prototype.hasOwnProperty.call(i, c) && (e[c] = i[c]);
    }
    return e;
  }, ge.apply(this, arguments);
};
function d(t, e, i, r) {
  var n = arguments.length, c = n < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") c = Reflect.decorate(t, e, i, r);
  else for (var a = t.length - 1; a >= 0; a--) (s = t[a]) && (c = (n < 3 ? s(c) : n > 3 ? s(e, i, c) : s(e, i)) || c);
  return n > 3 && c && Object.defineProperty(e, i, c), c;
}
function Se(t) {
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
function Di(t, e) {
  var i = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return i.call(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ri = (t) => t.nodeType === Node.ELEMENT_NODE, Ft = () => {
}, $i = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", Ft, $i);
document.removeEventListener("x", Ft);
const Pt = (t = window.document) => {
  let e = t.activeElement;
  const i = [];
  if (!e)
    return i;
  for (; e && (i.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return i;
}, Ni = (t) => {
  const e = Pt();
  if (!e.length)
    return !1;
  const i = e[e.length - 1], r = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let n = [];
  const c = (s) => {
    n = s.composedPath();
  };
  return document.body.addEventListener("check-if-focused", c), i.dispatchEvent(r), document.body.removeEventListener("check-if-focused", c), n.indexOf(t) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class it extends Ye {
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
var Ot = (
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
var Ti = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Fi = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, dt = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function Pi(t, e, i) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, n = e.y, c = r + i.left, s = n + i.top, a, o;
  if (t.type === "touchstart") {
    var m = t;
    a = m.changedTouches[0].pageX - c, o = m.changedTouches[0].pageY - s;
  } else {
    var h = t;
    a = h.pageX - c, o = h.pageY - s;
  }
  return { x: a, y: o };
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
var lt = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], pt = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], ke = [], Oi = (
  /** @class */
  function(t) {
    Li(e, t);
    function e(i) {
      var r = t.call(this, ge(ge({}, e.defaultAdapter), i)) || this;
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
        return Ti;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Fi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return dt;
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
        var n = e.cssClasses, c = n.ROOT, s = n.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.addClass(c), i.adapter.isUnbounded() && (i.adapter.addClass(s), i.layoutInternal());
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
          for (var c = Se(lt), s = c.next(); !s.done; s = c.next()) {
            var a = s.value;
            this.adapter.registerInteractionHandler(a, this.activateHandler);
          }
        } catch (o) {
          r = { error: o };
        } finally {
          try {
            s && !s.done && (n = c.return) && n.call(c);
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
          for (var c = Se(pt), s = c.next(); !s.done; s = c.next()) {
            var a = s.value;
            this.adapter.registerDocumentInteractionHandler(a, this.deactivateHandler);
          }
        } catch (o) {
          r = { error: o };
        } finally {
          try {
            s && !s.done && (n = c.return) && n.call(c);
          } finally {
            if (r) throw r.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var i, r;
      try {
        for (var n = Se(lt), c = n.next(); !c.done; c = n.next()) {
          var s = c.value;
          this.adapter.deregisterInteractionHandler(s, this.activateHandler);
        }
      } catch (a) {
        i = { error: a };
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
        for (var n = Se(pt), c = n.next(); !c.done; c = n.next()) {
          var s = c.value;
          this.adapter.deregisterDocumentInteractionHandler(s, this.deactivateHandler);
        }
      } catch (a) {
        i = { error: a };
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
          var c = this.previousActivationEvent, s = c && i !== void 0 && c.type !== i.type;
          if (!s) {
            n.isActivated = !0, n.isProgrammatic = i === void 0, n.activationEvent = i, n.wasActivatedByPointer = n.isProgrammatic ? !1 : i !== void 0 && (i.type === "mousedown" || i.type === "touchstart" || i.type === "pointerdown");
            var a = i !== void 0 && ke.length > 0 && ke.some(function(o) {
              return r.adapter.containsEventTarget(o);
            });
            if (a) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (ke.push(i.target), this.registerDeactivationHandlers(i)), n.wasElementMadeActive = this.checkElementMadeActive(i), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              ke = [], !n.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (n.wasElementMadeActive = r.checkElementMadeActive(i), n.wasElementMadeActive && r.animateActivation()), n.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var i = this, r = e.strings, n = r.VAR_FG_TRANSLATE_START, c = r.VAR_FG_TRANSLATE_END, s = e.cssClasses, a = s.FG_DEACTIVATION, o = s.FG_ACTIVATION, m = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var h = "", x = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), S = f.startPoint, k = f.endPoint;
        h = S.x + "px, " + S.y + "px", x = k.x + "px, " + k.y + "px";
      }
      this.adapter.updateCssVariable(n, h), this.adapter.updateCssVariable(c, x), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(a), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, m);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, r = i.activationEvent, n = i.wasActivatedByPointer, c;
      n ? c = Pi(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : c = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, c = {
        x: c.x - this.initialSize / 2,
        y: c.y - this.initialSize / 2
      };
      var s = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: c, endPoint: s };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var i = this, r = e.cssClasses.FG_DEACTIVATION, n = this.activationState, c = n.hasDeactivationUXRun, s = n.isActivated, a = c || !s;
      a && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        i.adapter.removeClass(r);
      }, dt.FG_DEACTIVATION_MS));
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
        var n = ge({}, r);
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
      var c = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && c % 2 !== 0 ? this.initialSize = c - 1 : this.initialSize = c, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var i = e.strings, r = i.VAR_FG_SIZE, n = i.VAR_LEFT, c = i.VAR_TOP, s = i.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(s, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(n, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(c, this.unboundedCoords.top + "px"));
    }, e;
  }(Ot)
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
class Mi {
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
const ut = /* @__PURE__ */ new WeakMap(), De = tt((t) => (e) => {
  if (!(e instanceof Le) || e instanceof Tt || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = e, { element: r } = i;
  let n = ut.get(e);
  n === void 0 && (r.setAttribute("class", i.strings.join(" ")), ut.set(e, n = /* @__PURE__ */ new Set()));
  const c = r.classList || new Mi(r);
  n.forEach((s) => {
    s in t || (c.remove(s), n.delete(s));
  });
  for (const s in t) {
    const a = t[s];
    a != n.has(s) && (a ? (c.add(s), n.add(s)) : (c.remove(s), n.delete(s)));
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
const mt = /* @__PURE__ */ new WeakMap(), zi = tt((t) => (e) => {
  if (!(e instanceof Le) || e instanceof Tt || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = e, { style: r } = i.element;
  let n = mt.get(e);
  n === void 0 && (r.cssText = i.strings.join(" "), mt.set(e, n = /* @__PURE__ */ new Set())), n.forEach((c) => {
    c in t || (n.delete(c), c.indexOf("-") === -1 ? r[c] = null : r.removeProperty(c));
  });
  for (const c in t)
    n.add(c), c.indexOf("-") === -1 ? r[c] = t[c] : r.setProperty(c, t[c]);
});
class D extends it {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Oi;
  }
  get isActive() {
    return Di(this.parentElement || this, ":active");
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
    return g`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${De(r)}"
          style="${zi({
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
  U(".mdc-ripple-surface")
], D.prototype, "mdcRoot", void 0);
d([
  u({ type: Boolean })
], D.prototype, "primary", void 0);
d([
  u({ type: Boolean })
], D.prototype, "accent", void 0);
d([
  u({ type: Boolean })
], D.prototype, "unbounded", void 0);
d([
  u({ type: Boolean })
], D.prototype, "disabled", void 0);
d([
  u({ type: Boolean })
], D.prototype, "activated", void 0);
d([
  u({ type: Boolean })
], D.prototype, "selected", void 0);
d([
  u({ type: Boolean })
], D.prototype, "internalUseStateLayerCustomProperties", void 0);
d([
  I()
], D.prototype, "hovering", void 0);
d([
  I()
], D.prototype, "bgFocused", void 0);
d([
  I()
], D.prototype, "fgActivation", void 0);
d([
  I()
], D.prototype, "fgDeactivation", void 0);
d([
  I()
], D.prototype, "fgScale", void 0);
d([
  I()
], D.prototype, "fgSize", void 0);
d([
  I()
], D.prototype, "translateStart", void 0);
d([
  I()
], D.prototype, "translateEnd", void 0);
d([
  I()
], D.prototype, "leftPos", void 0);
d([
  I()
], D.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Bi = ve`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let Ve = class extends D {
};
Ve.styles = [Bi];
Ve = d([
  ne("mwc-ripple")
], Ve);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Gi(t, e, i) {
  const r = t.constructor;
  if (!i) {
    const a = `__${e}`;
    if (i = r.getPropertyDescriptor(e, a), !i)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const n = i;
  let c = "";
  if (!n.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const s = {
    configurable: !0,
    enumerable: !0,
    set(a) {
      c === "" && (c = r.getPropertyOptions(e).attribute), this.hasAttribute(c) && this.removeAttribute(c), n.set.call(this, a);
    }
  };
  return n.get && (s.get = function() {
    return n.get.call(this);
  }), s;
}
function rt(t, e, i) {
  if (e !== void 0)
    return Gi(t, e, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Mt extends it {
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
Mt.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class zt {
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
const Oe = /* @__PURE__ */ new WeakMap(), oe = tt((t) => (e) => {
  const i = Oe.get(e);
  if (t === void 0 && e instanceof Le) {
    if (i !== void 0 || !Oe.has(e)) {
      const r = e.committer.name;
      e.committer.element.removeAttribute(r);
    }
  } else t !== i && e.setValue(t);
  Oe.set(e, t);
});
class R extends Mt {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new zt(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(e) {
    const i = e.get("indeterminate"), r = e.get("checked"), n = e.get("disabled");
    if (i !== void 0 || r !== void 0 || n !== void 0) {
      const c = this.calculateAnimationStateName(!!r, !!i, !!n), s = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${c}-${s}`;
    }
    super.update(e);
  }
  calculateAnimationStateName(e, i, r) {
    return r ? "disabled" : i ? "indeterminate" : e ? "checked" : "unchecked";
  }
  // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? g`<mwc-ripple
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
    return g`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${De(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${oe(this.name)}"
              aria-checked="${oe(r)}"
              aria-label="${oe(this.ariaLabel)}"
              aria-labelledby="${oe(this.ariaLabelledBy)}"
              aria-describedby="${oe(this.ariaDescribedBy)}"
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
d([
  U(".mdc-checkbox")
], R.prototype, "mdcRoot", void 0);
d([
  U("input")
], R.prototype, "formElement", void 0);
d([
  u({ type: Boolean, reflect: !0 })
], R.prototype, "checked", void 0);
d([
  u({ type: Boolean })
], R.prototype, "indeterminate", void 0);
d([
  u({ type: Boolean, reflect: !0 })
], R.prototype, "disabled", void 0);
d([
  u({ type: String, reflect: !0 })
], R.prototype, "name", void 0);
d([
  u({ type: String })
], R.prototype, "value", void 0);
d([
  rt,
  u({ type: String, attribute: "aria-label" })
], R.prototype, "ariaLabel", void 0);
d([
  rt,
  u({ type: String, attribute: "aria-labelledby" })
], R.prototype, "ariaLabelledBy", void 0);
d([
  rt,
  u({ type: String, attribute: "aria-describedby" })
], R.prototype, "ariaDescribedBy", void 0);
d([
  u({ type: Boolean })
], R.prototype, "reducedTouchTarget", void 0);
d([
  I()
], R.prototype, "animationClass", void 0);
d([
  I()
], R.prototype, "shouldRenderRipple", void 0);
d([
  I()
], R.prototype, "focused", void 0);
d([
  I()
], R.prototype, "useStateLayerCustomProperties", void 0);
d([
  Lt("mwc-ripple")
], R.prototype, "ripple", void 0);
d([
  ui({ passive: !0 })
], R.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Hi = ve`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let qe = class extends R {
};
qe.styles = [Hi];
qe = d([
  ne("mwc-checkbox")
], qe);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ce = (t) => (
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
        r.call(this, n), n.forEach((c, s) => {
          const o = this.constructor._observers.get(s);
          o !== void 0 && o.call(this, this[s], c);
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
class N extends Ye {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new zt(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const e = this.renderText(), i = this.graphic ? this.renderGraphic() : g``, r = this.hasMeta ? this.renderMeta() : g``;
    return g`
      ${this.renderRipple()}
      ${i}
      ${e}
      ${r}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? g`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? g`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return g`
      <span class="mdc-deprecated-list-item__graphic material-icons ${De(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return g`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return g`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return g`<slot></slot>`;
  }
  renderTwoline() {
    return g`
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
d([
  U("slot")
], N.prototype, "slotElement", void 0);
d([
  Lt("mwc-ripple")
], N.prototype, "ripple", void 0);
d([
  u({ type: String })
], N.prototype, "value", void 0);
d([
  u({ type: String, reflect: !0 })
], N.prototype, "group", void 0);
d([
  u({ type: Number, reflect: !0 })
], N.prototype, "tabindex", void 0);
d([
  u({ type: Boolean, reflect: !0 }),
  ce(function(t) {
    t ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], N.prototype, "disabled", void 0);
d([
  u({ type: Boolean, reflect: !0 })
], N.prototype, "twoline", void 0);
d([
  u({ type: Boolean, reflect: !0 })
], N.prototype, "activated", void 0);
d([
  u({ type: String, reflect: !0 })
], N.prototype, "graphic", void 0);
d([
  u({ type: Boolean })
], N.prototype, "multipleGraphics", void 0);
d([
  u({ type: Boolean })
], N.prototype, "hasMeta", void 0);
d([
  u({ type: Boolean, reflect: !0 }),
  ce(function(t) {
    t ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], N.prototype, "noninteractive", void 0);
d([
  u({ type: Boolean, reflect: !0 }),
  ce(function(t) {
    const e = this.getAttribute("role"), i = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (i && t ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(t, "property");
  })
], N.prototype, "selected", void 0);
d([
  I()
], N.prototype, "shouldRenderRipple", void 0);
d([
  I()
], N.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class xe extends N {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : g``, n = this.hasMeta && this.left ? this.renderMeta() : g``, c = this.renderRipple();
    return g`
      ${c}
      ${r}
      ${this.left ? "" : i}
      <span class=${De(e)}>
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
d([
  U("slot")
], xe.prototype, "slotElement", void 0);
d([
  U("mwc-checkbox")
], xe.prototype, "checkboxElement", void 0);
d([
  u({ type: Boolean })
], xe.prototype, "left", void 0);
d([
  u({ type: String, reflect: !0 })
], xe.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Vi = ve`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Bt = ve`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let me = class extends xe {
};
me.styles = [Bt, Vi];
me = d([
  ne("mwc-check-list-item")
], me);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Ue = class extends N {
};
Ue.styles = [Bt];
Ue = d([
  ne("mwc-list-item")
], Ue);
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
var b = {
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
}, B = /* @__PURE__ */ new Set();
B.add(b.BACKSPACE);
B.add(b.ENTER);
B.add(b.SPACEBAR);
B.add(b.PAGE_UP);
B.add(b.PAGE_DOWN);
B.add(b.END);
B.add(b.HOME);
B.add(b.ARROW_LEFT);
B.add(b.ARROW_UP);
B.add(b.ARROW_RIGHT);
B.add(b.ARROW_DOWN);
B.add(b.DELETE);
B.add(b.ESCAPE);
B.add(b.TAB);
var W = {
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
}, G = /* @__PURE__ */ new Map();
G.set(W.BACKSPACE, b.BACKSPACE);
G.set(W.ENTER, b.ENTER);
G.set(W.SPACEBAR, b.SPACEBAR);
G.set(W.PAGE_UP, b.PAGE_UP);
G.set(W.PAGE_DOWN, b.PAGE_DOWN);
G.set(W.END, b.END);
G.set(W.HOME, b.HOME);
G.set(W.ARROW_LEFT, b.ARROW_LEFT);
G.set(W.ARROW_UP, b.ARROW_UP);
G.set(W.ARROW_RIGHT, b.ARROW_RIGHT);
G.set(W.ARROW_DOWN, b.ARROW_DOWN);
G.set(W.DELETE, b.DELETE);
G.set(W.ESCAPE, b.ESCAPE);
G.set(W.TAB, b.TAB);
var se = /* @__PURE__ */ new Set();
se.add(b.PAGE_UP);
se.add(b.PAGE_DOWN);
se.add(b.END);
se.add(b.HOME);
se.add(b.ARROW_LEFT);
se.add(b.ARROW_UP);
se.add(b.ARROW_RIGHT);
se.add(b.ARROW_DOWN);
function ee(t) {
  var e = t.key;
  if (B.has(e))
    return e;
  var i = G.get(t.keyCode);
  return i || b.UNKNOWN;
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
var te, Q, _ = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
te = {}, te["" + _.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", te["" + _.LIST_ITEM_CLASS] = "mdc-list-item", te["" + _.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", te["" + _.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", te["" + _.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", te["" + _.ROOT] = "mdc-list";
var ue = (Q = {}, Q["" + _.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", Q["" + _.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", Q["" + _.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", Q["" + _.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", Q["" + _.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", Q["" + _.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", Q["" + _.ROOT] = "mdc-deprecated-list", Q), _e = {
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
    .` + ue[_.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + ue[_.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + _.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + _.LIST_ITEM_CLASS + ` a,
    .` + _.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + _.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + ue[_.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + ue[_.LIST_ITEM_CLASS] + ` a,
    .` + ue[_.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + ue[_.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, H = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const We = (t, e) => t - e, qi = (t, e) => {
  const i = Array.from(t), r = Array.from(e), n = { added: [], removed: [] }, c = i.sort(We), s = r.sort(We);
  let a = 0, o = 0;
  for (; a < c.length || o < s.length; ) {
    const m = c[a], h = s[o];
    if (m === h) {
      a++, o++;
      continue;
    }
    if (m !== void 0 && (h === void 0 || m < h)) {
      n.removed.push(m), a++;
      continue;
    }
    if (h !== void 0 && (m === void 0 || h < m)) {
      n.added.push(h), o++;
      continue;
    }
  }
  return n;
}, Ui = ["input", "button", "textarea", "select"];
function ye(t) {
  return t instanceof Set;
}
const Me = (t) => {
  const e = t === H.UNSET_INDEX ? /* @__PURE__ */ new Set() : t;
  return ye(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class nt extends Ot {
  constructor(e) {
    super(Object.assign(Object.assign({}, nt.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = H.UNSET_INDEX, this.focusedItemIndex_ = H.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return _e;
  }
  static get numbers() {
    return H;
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
      if (!ye(i)) {
        const r = i === H.UNSET_INDEX;
        this.selectedIndex_ = r ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
    } else if (ye(i))
      if (i.size) {
        const r = Array.from(i).sort(We);
        this.selectedIndex_ = r[0];
      } else
        this.selectedIndex_ = H.UNSET_INDEX;
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
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(Me(e)) : this.setSingleSelectionAtIndex_(e));
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
    const n = ee(e) === "ArrowLeft", c = ee(e) === "ArrowUp", s = ee(e) === "ArrowRight", a = ee(e) === "ArrowDown", o = ee(e) === "Home", m = ee(e) === "End", h = ee(e) === "Enter", x = ee(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      c || m ? (e.preventDefault(), this.focusLastElement()) : (a || o) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let f = this.adapter.getFocusedElementIndex();
    if (f === -1 && (f = r, f < 0))
      return;
    let S;
    if (this.isVertical_ && a || !this.isVertical_ && s)
      this.preventDefaultEvent(e), S = this.focusNextElement(f);
    else if (this.isVertical_ && c || !this.isVertical_ && n)
      this.preventDefaultEvent(e), S = this.focusPrevElement(f);
    else if (o)
      this.preventDefaultEvent(e), S = this.focusFirstElement();
    else if (m)
      this.preventDefaultEvent(e), S = this.focusLastElement();
    else if ((h || x) && i) {
      const k = e.target;
      if (k && k.tagName === "A" && h)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(f, !0);
    }
    this.focusedItemIndex_ = f, S !== void 0 && (this.setTabindexAtIndex_(S), this.focusedItemIndex_ = S);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, i, r) {
    e !== H.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, i, r), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
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
    Ui.indexOf(r) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, i = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== H.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), i && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, i = !0) {
    const r = Me(this.selectedIndex_), n = qi(r, e);
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
    this.selectedIndex_ === H.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, _e.ARIA_CURRENT));
    const i = this.ariaCurrentAttrValue_ !== null, r = i ? _e.ARIA_CURRENT : _e.ARIA_SELECTED;
    this.selectedIndex_ !== H.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, r, "false");
    const n = i ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, r, n);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === H.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== H.UNSET_INDEX ? e = this.selectedIndex_ : ye(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
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
      return e === H.UNSET_INDEX || this.isIndexInRange_(e);
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
    this.isMulti_ && (n = /* @__PURE__ */ new Set([e])), this.isIndexValid_(n) && (this.isMulti_ ? this.toggleMultiAtIndex(e, r, i) : i || r ? this.setSingleSelectionAtIndex_(e, i) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(H.UNSET_INDEX), i && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, i, r = !0) {
    let n = !1;
    i === void 0 ? n = !this.adapter.getSelectedStateForElementIndex(e) : n = i;
    const c = Me(this.selectedIndex_);
    n ? c.add(e) : c.delete(e), this.setMultiSelectionAtIndex_(c, r);
  }
}
function Wi(t, e = 50) {
  let i;
  return function(r = !0) {
    clearTimeout(i), i = setTimeout(() => {
      t(r);
    }, e);
  };
}
const Ae = (t) => t.hasAttribute("mwc-list-item");
function ji() {
  const t = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), t();
}
class j extends it {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = nt, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = Wi(this.layout.bind(this));
    this.debouncedLayout = (i = !0) => {
      ji.call(this), e(i);
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
      Ae(s) && (r.push(s), s._managingList = this), s.hasAttribute("divider") && !s.hasAttribute("role") && s.setAttribute("role", "separator");
    this.items_ = r;
    const n = /* @__PURE__ */ new Set();
    if (this.items_.forEach((s, a) => {
      this.itemRoles ? s.setAttribute("role", this.itemRoles) : s.removeAttribute("role"), s.selected && n.add(a);
    }), this.multi)
      this.select(n);
    else {
      const s = n.size ? n.entries().next().value[1] : -1;
      this.select(s);
    }
    const c = new Event("items-updated", { bubbles: !0, composed: !0 });
    this.dispatchEvent(c);
  }
  get selected() {
    const e = this.index;
    if (!ye(e))
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
    return g`
      <!-- @ts-ignore -->
      <ul
          tabindex=${r}
          role="${oe(e)}"
          aria-label="${oe(i)}"
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
    return this.emptyMessage !== void 0 && i.length === 0 ? g`
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
      const i = this.getIndexOfTarget(e), r = e.target, n = Ae(r);
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
      if (Ri(n) && Ae(n) && (c = i.indexOf(n)), c !== -1)
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
      isFocusInsideList: () => Ni(this),
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
    const e = Pt();
    if (!e.length)
      return -1;
    for (let i = e.length - 1; i >= 0; i--) {
      const r = e[i];
      if (Ae(r))
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
d([
  u({ type: String })
], j.prototype, "emptyMessage", void 0);
d([
  U(".mdc-deprecated-list")
], j.prototype, "mdcRoot", void 0);
d([
  Dt("", !0, "*")
], j.prototype, "assignedElements", void 0);
d([
  Dt("", !0, '[tabindex="0"]')
], j.prototype, "tabbableElements", void 0);
d([
  u({ type: Boolean }),
  ce(function(t) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(t);
  })
], j.prototype, "activatable", void 0);
d([
  u({ type: Boolean }),
  ce(function(t, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(t), e !== void 0 && this.layout();
  })
], j.prototype, "multi", void 0);
d([
  u({ type: Boolean }),
  ce(function(t) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(t);
  })
], j.prototype, "wrapFocus", void 0);
d([
  u({ type: String }),
  ce(function(t, e) {
    e !== void 0 && this.updateItems();
  })
], j.prototype, "itemRoles", void 0);
d([
  u({ type: String })
], j.prototype, "innerRole", void 0);
d([
  u({ type: String })
], j.prototype, "innerAriaLabel", void 0);
d([
  u({ type: Boolean })
], j.prototype, "rootTabbable", void 0);
d([
  u({ type: Boolean, reflect: !0 }),
  ce(function(t) {
    var e, i;
    if (t) {
      const r = (i = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && i !== void 0 ? i : null;
      this.previousTabindex = r, r && r.setAttribute("tabindex", "-1");
    } else !t && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], j.prototype, "noninteractive", void 0);
var Xi = Object.defineProperty, Ki = Object.getOwnPropertyDescriptor, le = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Ki(e, i) : e, c = t.length - 1, s; c >= 0; c--)
    (s = t[c]) && (n = (r ? s(e, i, n) : s(n)) || n);
  return r && n && Xi(e, i, n), n;
};
function je(t) {
  return !t.closest("filtered-list") || !t.parentElement || t.parentElement instanceof J ? t : je(t.parentElement);
}
function Zi(t, e) {
  const i = t.innerText + `
`, r = Array.from(t.children).map((a) => a.innerText).join(`
`), n = t.value, c = (i + r + n).toUpperCase(), s = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  s.length === 1 && s[0] === "" || s.every((a) => new RegExp(
    `*${a}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(c)) ? je(t).classList.remove("hidden") : je(t).classList.add("hidden");
}
let J = class extends j {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((t) => t instanceof me);
  }
  get isAllSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof me).every((t) => t.selected);
  }
  get isSomeSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof me).some((t) => t.selected);
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
      (t) => Zi(t, this.searchField.value)
    );
  }
  onListItemConnected(t) {
    super.onListItemConnected(t), this.requestUpdate();
  }
  update(t) {
    super.update(t), this.onFilterInput();
  }
  renderCheckAll() {
    return this.existCheckListItem && !this.disableCheckAll ? g`<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
      this.onCheckAll();
    }}
          ></mwc-checkbox
        ></mwc-formfield>` : g``;
  }
  render() {
    return g`<div id="tfcontainer">
        <abbr title="${this.searchFieldLabel ?? A("filter")}"
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
J.styles = ve`
    ${mi(fi.styles)}

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
le([
  u({ type: String })
], J.prototype, "searchFieldLabel", 2);
le([
  u({ type: Boolean })
], J.prototype, "disableCheckAll", 2);
le([
  I()
], J.prototype, "existCheckListItem", 1);
le([
  I()
], J.prototype, "isAllSelected", 1);
le([
  I()
], J.prototype, "isSomeSelected", 1);
le([
  U("mwc-textfield")
], J.prototype, "searchField", 2);
J = le([
  ne("filtered-list")
], J);
function Gt(t, e, i) {
  const r = t.createElementNS(t.documentElement.namespaceURI, e);
  return Object.entries(i).filter(([n, c]) => c !== null).forEach(([n, c]) => r.setAttribute(n, c)), r;
}
function Ji(t, e) {
  const i = t.cloneNode(!1);
  return Object.entries(e).forEach(([r, n]) => {
    n === null ? i.removeAttribute(r) : i.setAttribute(r, n);
  }), i;
}
function de(t, e) {
  return t ? Array.from(t.children).filter(
    (i) => i.tagName === e
  ) : [];
}
var Qi = Object.defineProperty, Yi = Object.getOwnPropertyDescriptor, Z = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Yi(e, i) : e, c = t.length - 1, s; c >= 0; c--)
    (s = t[c]) && (n = (r ? s(e, i, n) : s(n)) || n);
  return r && n && Qi(e, i, n), n;
};
let q = class extends hi {
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
    return this.reservedValues && this.reservedValues.some((t) => t === this.value) ? (this.setCustomValidity(A("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? g`<div style="position:relative;">
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
      </div>` : g``;
  }
  renderMulplierList() {
    return g`${this.multipliers.map(
      (t) => g`<mwc-list-item ?selected=${t === this.multiplier}
          >${t === null ? A("textfield.noMultiplier") : t}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? g`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : g``;
  }
  render() {
    return g`
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
Z([
  u({ type: Boolean })
], q.prototype, "nullable", 2);
Z([
  u({ type: Array })
], q.prototype, "multipliers", 2);
Z([
  u({ type: String })
], q.prototype, "multiplier", 1);
Z([
  u({ type: String })
], q.prototype, "unit", 2);
Z([
  I()
], q.prototype, "null", 1);
Z([
  u({ type: String })
], q.prototype, "maybeValue", 1);
Z([
  u({ type: String })
], q.prototype, "defaultValue", 2);
Z([
  u({ type: Array })
], q.prototype, "reservedValues", 2);
Z([
  U("mwc-switch")
], q.prototype, "nullSwitch", 2);
Z([
  U("mwc-menu")
], q.prototype, "multiplierMenu", 2);
Z([
  U("mwc-icon-button")
], q.prototype, "multiplierButton", 2);
q = Z([
  ne("wizard-textfield")
], q);
var er = Object.defineProperty, tr = Object.getOwnPropertyDescriptor, pe = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? tr(e, i) : e, c = t.length - 1, s; c >= 0; c--)
    (s = t[c]) && (n = (r ? s(e, i, n) : s(n)) || n);
  return r && n && er(e, i, n), n;
};
let Y = class extends bi {
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
    return this.nullable ? g`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : g``;
  }
  render() {
    return g`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
pe([
  u({ type: Boolean })
], Y.prototype, "nullable", 2);
pe([
  I()
], Y.prototype, "null", 1);
pe([
  u({ type: String })
], Y.prototype, "maybeValue", 1);
pe([
  u({ type: String })
], Y.prototype, "defaultValue", 2);
pe([
  u({ type: Array })
], Y.prototype, "reservedValues", 2);
pe([
  U("mwc-switch")
], Y.prototype, "nullSwitch", 2);
Y = pe([
  ne("wizard-select")
], Y);
var ir = Object.defineProperty, rr = Object.getOwnPropertyDescriptor, X = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? rr(e, i) : e, c = t.length - 1, s; c >= 0; c--)
    (s = t[c]) && (n = (r ? s(e, i, n) : s(n)) || n);
  return r && n && ir(e, i, n), n;
};
let z = class extends Ye {
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
    return this.nullable ? g`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : g``;
  }
  render() {
    return g`
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
X([
  u({ type: String })
], z.prototype, "label", 2);
X([
  u({ type: String })
], z.prototype, "helper", 2);
X([
  u({ type: Boolean })
], z.prototype, "nullable", 2);
X([
  u({ type: Boolean })
], z.prototype, "defaultChecked", 2);
X([
  u({ type: String })
], z.prototype, "maybeValue", 1);
X([
  u({ type: Boolean })
], z.prototype, "disabled", 2);
X([
  I()
], z.prototype, "null", 1);
X([
  I()
], z.prototype, "checked", 1);
X([
  I()
], z.prototype, "deactivateCheckbox", 2);
X([
  I()
], z.prototype, "formfieldLabel", 1);
X([
  U("mwc-switch")
], z.prototype, "nullSwitch", 2);
X([
  U("mwc-checkbox")
], z.prototype, "checkbox", 2);
z = X([
  ne("wizard-checkbox")
], z);
function nr(t) {
  return typeof t == "function";
}
function cr(t) {
  return t instanceof q || t instanceof Y || t instanceof z ? t.maybeValue : t.value ?? null;
}
function we(t, e) {
  if (!t)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const i = nr(t) ? t : () => t;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: i, ...e?.detail }
  });
}
function sr(t) {
  let e = "", i = t.parentElement;
  for (; i?.getAttribute("name"); )
    e = "/" + i.getAttribute("name") + e, i = i.parentElement;
  return e;
}
function P(t) {
  const e = t.split(">"), i = e.pop() ?? "";
  return [e.join(">"), i];
}
const w = ":not(*)";
function ar(t) {
  return `${t.getAttribute("version")}	${t.getAttribute("revision")}`;
}
function or(t, e) {
  const [i, r] = e.split("	");
  return !i || !r ? w : `${t}[version="${i}"][revision="${r}"]`;
}
function ht(t) {
  return E(t.parentElement) + ">" + t.getAttribute("connectivityNode");
}
function ft(t, e) {
  const [i, r] = P(e), n = L[t].parents.flatMap(
    (c) => T(c, i).split(",")
  );
  return F(
    n,
    [">"],
    [`${t}[connectivityNode="${r}"]`]
  ).map((c) => c.join("")).join(",");
}
function dr(t) {
  const [e, i, r, n, c, s] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((a) => t.getAttribute(a));
  return e === "None" ? `${E(t.parentElement)}>(${n} ${s} ${c})` : `${e} ${i || "(Client)"}/${r ?? ""} ${n} ${c ?? ""}`;
}
function lr(t, e) {
  if (e.endsWith(")")) {
    const [f, S] = P(e), [k, O, $] = S.substring(1, S.length - 1).split(" ");
    if (!k || !O) return w;
    const M = L[t].parents.flatMap(
      (K) => T(K, f).split(",")
    );
    return F(
      M,
      [">"],
      [`${t}[iedName="None"][lnClass="${k}"][lnType="${O}"][lnInst="${$}"]`]
    ).map((K) => K.join("")).join(",");
  }
  const [i, r, n, c, s] = e.split(/[ /]/);
  if (!i || !r || !c) return w;
  const [
    a,
    o,
    m,
    h,
    x
  ] = [
    [`[iedName="${i}"]`],
    r === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${r}"]`],
    n ? [`[prefix="${n}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    s ? [`[lnInst="${s}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return F(
    [t],
    a,
    o,
    m,
    h,
    x
  ).map((f) => f.join("")).join(",");
}
function pr(t) {
  return `${E(t.parentElement)}>${t.getAttribute(
    "iedName"
  )} ${t.getAttribute("apName")}`;
}
function ur(t, e) {
  const [i, r] = P(e), [n, c] = r.split(" ");
  return `${T(
    "IED",
    i
  )}>${t}[iedName="${n}"][apName="${c}"]`;
}
function mr(t) {
  return `${E(t.parentElement)}>${t.getAttribute("associationID") ?? ""}`;
}
function hr(t, e) {
  const [i, r] = P(e);
  return r ? `${T(
    "Server",
    i
  )}>${t}[associationID="${r}"]` : w;
}
function fr(t) {
  return `${E(t.closest("IED"))}>>${t.getAttribute("inst")}`;
}
function br(t, e) {
  const [i, r] = e.split(">>");
  return r ? `IED[name="${i}"] ${t}[inst="${r}"]` : w;
}
function gr(t) {
  const e = t.textContent, [i, r, n, c, s] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((a) => t.getAttribute(a));
  return `${E(t.parentElement)}>${e} ${i || ""} ${r || ""}/${n ?? ""} ${c ?? ""} ${s ?? ""}`;
}
function yr(t, e) {
  const [i, r] = P(e), [n, c, s, a, o, m] = r.split(/[ /]/), [
    h,
    x,
    f,
    S,
    k,
    O
  ] = [
    L[t].parents.flatMap(
      ($) => T($, i).split(",")
    ),
    [`${n}`],
    c ? [`[apRef="${c}"]`] : [":not([apRef])", '[apRef=""]'],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    m ? [`[lnInst="${m}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return F(
    h,
    [">"],
    [t],
    x,
    f,
    S,
    k,
    O
  ).map(($) => $.join("")).join(",");
}
function vr(t) {
  const [e, i, r, n, c, s, a, o] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((h) => t.getAttribute(h)), m = `${e}/${i ?? ""} ${r} ${n ?? ""}.${c} ${s || ""}`;
  return `${E(t.parentElement)}>${m} (${a}${o ? " [" + o + "]" : ""})`;
}
function xr(t, e) {
  const [i, r] = P(e), [n, c, s, a] = r.split(/[ /.]/), o = r.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), m = o && o[1] ? o[1] : "", h = o && o[2] ? o[2] : "", x = r.match(/\(([A-Z]{2})/), f = r.match(/ \[([0-9]{1,2})\]/), S = x && x[1] ? x[1] : "", k = f && f[1] ? f[1] : "", [
    O,
    $,
    M,
    K,
    he,
    $e,
    Ne,
    Te,
    Fe
  ] = [
    L[t].parents.flatMap(
      (fe) => T(fe, i).split(",")
    ),
    [`[ldInst="${n}"]`],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    a ? [`[lnInst="${a}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${m}"]`],
    h ? [`[daName="${h}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${S}"]`],
    k ? [`[ix="${k}"]`] : [":not([ix])", '[ix=""]']
  ];
  return F(
    O,
    [">"],
    [t],
    $,
    M,
    K,
    he,
    $e,
    Ne,
    Te,
    Fe
  ).map((fe) => fe.join("")).join(",");
}
function Sr(t) {
  if (!t.parentElement) return NaN;
  const e = E(t.parentElement), i = t.getAttribute("iedName"), r = t.getAttribute("intAddr"), n = Array.from(
    t.parentElement.querySelectorAll(`ExtRef[intAddr="${r}"]`)
  ).indexOf(t);
  if (r) return `${e}>${r}[${n}]`;
  const [
    c,
    s,
    a,
    o,
    m,
    h,
    x,
    f,
    S,
    k,
    O,
    $
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
  ].map((he) => t.getAttribute(he)), M = $ ? `${x}:${$} ${f ?? ""}/${S ?? ""} ${k ?? ""} ${O ?? ""}` : "", K = `${i} ${c}/${s ?? ""} ${a} ${o ?? ""} ${m} ${h || ""}`;
  return `${e}>${M ? M + " " : ""}${K}${r ? `@${r}` : ""}`;
}
function kr(t, e) {
  const [i, r] = P(e), n = L[t].parents.flatMap(
    (be) => T(be, i).split(",")
  );
  if (r.endsWith("]")) {
    const [be] = r.split("["), ai = [`[intAddr="${be}"]`];
    return F(n, [">"], [t], ai).map((oi) => oi.join("")).join(",");
  }
  let c, s, a, o, m, h, x, f, S, k, O, $, M, K;
  !r.includes(":") && !r.includes("@") ? [c, s, a, o, m, h, x] = r.split(/[ /]/) : r.includes(":") && !r.includes("@") ? [
    f,
    S,
    k,
    O,
    $,
    M,
    c,
    s,
    a,
    o,
    m,
    h,
    x
  ] = r.split(/[ /:]/) : !r.includes(":") && r.includes("@") ? [c, s, a, o, m, h, x, K] = r.split(/[ /@]/) : [
    f,
    S,
    k,
    O,
    $,
    M,
    c,
    s,
    a,
    o,
    m,
    h,
    x,
    K
  ] = r.split(/[ /:@]/);
  const [
    he,
    $e,
    Ne,
    Te,
    Fe,
    fe,
    Yt,
    ei,
    ti,
    ii,
    ri,
    ni,
    ci,
    si
  ] = [
    c ? [`[iedName="${c}"]`] : [":not([iedName])"],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    o ? [`[lnClass="${o}"]`] : [":not([lnClass])"],
    m ? [`[lnInst="${m}"]`] : [":not([lnInst])", '[lnInst=""]'],
    h ? [`[doName="${h}"]`] : [":not([doName])"],
    x ? [`[daName="${x}"]`] : [":not([daName])", '[daName=""]'],
    f ? [`[serviceType="${f}"]`] : [":not([serviceType])", '[serviceType=""]'],
    S ? [`[srcCBName="${S}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    k ? [`[srcLDInst="${k}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    O ? [`[srcPrefix="${O}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    $ ? [`[srcLNClass="${$}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    M ? [`[srcLNInst="${M}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    K ? [`[intAddr="${K}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return F(
    n,
    [">"],
    [t],
    he,
    $e,
    Ne,
    Te,
    Fe,
    fe,
    Yt,
    ei,
    ti,
    ii,
    ri,
    ni,
    ci,
    si
  ).map((be) => be.join("")).join(",");
}
function _r(t) {
  const [e, i, r] = ["prefix", "lnClass", "inst"].map(
    (n) => t.getAttribute(n)
  );
  return `${E(t.parentElement)}>${e ?? ""} ${i} ${r}`;
}
function Ar(t, e) {
  const [i, r] = P(e), n = L[t].parents.flatMap(
    (x) => T(x, i).split(",")
  ), [c, s, a] = r.split(" ");
  if (!s) return w;
  const [o, m, h] = [
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    [`[inst="${a}"]`]
  ];
  return F(
    n,
    [">"],
    [t],
    o,
    m,
    h
  ).map((x) => x.join("")).join(",");
}
function Ir(t) {
  const [e, i, r, n, c, s] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((a) => t.getAttribute(a));
  return `${E(t.parentElement)}>${i} ${e || ""} ${r}/${n ?? ""} ${c} ${s}`;
}
function Er(t, e) {
  const [i, r] = P(e), n = L[t].parents.flatMap(
    (M) => T(M, i).split(",")
  ), [c, s, a, o, m, h] = r.split(/[ /]/), [
    x,
    f,
    S,
    k,
    O,
    $
  ] = [
    c ? [`[iedName="${c}"]`] : [":not([iedName])", '[iedName=""]'],
    s ? [`[apRef="${s}"]`] : [":not([apRef])", '[apRef=""]'],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${m}"]`],
    h ? [`[lnInst="${h}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return F(
    n,
    [">"],
    [t],
    x,
    f,
    S,
    k,
    O,
    $
  ).map((M) => M.join("")).join(",");
}
function bt(t) {
  const [e, i] = ["name", "ix"].map((r) => t.getAttribute(r));
  return `${E(t.parentElement)}>${e}${i ? "[" + i + "]" : ""}`;
}
function Xe(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [r, n] = P(e), [c, s, a, o] = n.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!s) return w;
  if (i === 0) return `${t}[name="${s}"]`;
  const m = L[t].parents.flatMap(
    (f) => f === "SDI" ? Xe(f, r, i - 1).split(",") : T(f, r).split(",")
  ).filter((f) => !f.startsWith(w));
  if (m.length === 0) return w;
  const [h, x] = [
    [`[name="${s}"]`],
    o ? [`[ix="${o}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return F(
    m,
    [">"],
    [t],
    h,
    x
  ).map((f) => f.join("")).join(",");
}
function Cr(t) {
  if (!t.parentElement) return NaN;
  const e = t.getAttribute("sGroup"), i = Array.from(t.parentElement.children).filter((r) => r.getAttribute("sGroup") === e).findIndex((r) => r.isSameNode(t));
  return `${E(t.parentElement)}>${e ? e + "." : ""} ${i}`;
}
function wr(t, e) {
  const [i, r] = P(e), [n, c] = r.split(" "), s = parseFloat(c), a = L[t].parents.flatMap(
    (h) => T(h, i).split(",")
  ), [o, m] = [
    n ? [`[sGroup="${n}"]`] : [""],
    s ? [`:nth-child(${s + 1})`] : [""]
  ];
  return F(
    a,
    [">"],
    [t],
    o,
    m
  ).map((h) => h.join("")).join(",");
}
function Lr(t) {
  const [e, i] = ["iedName", "apName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function Dr(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? w : `${t}[iedName="${i}"][apName="${r}"]`;
}
function gt(t) {
  const [e, i] = ["ldInst", "cbName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function yt(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? w : `${t}[ldInst="${i}"][cbName="${r}"]`;
}
function Rr(t) {
  if (!t.parentElement) return NaN;
  if (!t.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = t.getAttribute("type");
  return t.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${E(t.parentElement)}>${e}`;
}
function $r(t, e) {
  const [i, r] = P(e), [n, c] = [
    L[t].parents.flatMap(
      (s) => T(s, i).split(",")
    ),
    r ? [`[type="${r}"]`] : [""]
  ];
  return F(n, [">"], [t], c).map((s) => s.join("")).join(",");
}
function Nr(t) {
  if (!t.parentElement) return NaN;
  const e = t.parentElement, i = t.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${E(t.parentElement)}>${i}`;
  const r = Array.from(t.parentElement.children).filter((n) => n.getAttribute("type") === i).findIndex((n) => n.isSameNode(t));
  return `${E(t.parentElement)}>${i} [${r}]`;
}
function Tr(t, e) {
  const [i, r] = P(e), [n] = r.split(" "), c = r && r.match(/\[([0-9]+)\]/) && r.match(/\[([0-9]+)\]/)[1] ? parseFloat(r.match(/\[([0-9]+)\]/)[1]) : NaN, [s, a, o] = [
    L[t].parents.flatMap(
      (m) => T(m, i).split(",")
    ),
    [`[type="${n}"]`],
    c ? [`:nth-child(${c + 1})`] : [""]
  ];
  return F(
    s,
    [">"],
    [t],
    a,
    o
  ).map((m) => m.join("")).join(",");
}
function Fr(t) {
  return `${E(t.parentElement)}>${t.getAttribute("ord")}`;
}
function Pr(t, e) {
  const [i, r] = P(e);
  return `${T("EnumType", i)}>${t}[ord="${r}"]`;
}
function Or(t) {
  return `${E(t.parentElement)}>${t.getAttribute("type") || "8-MMS"}	${t.textContent}`;
}
function Mr(t, e) {
  const [i, r] = P(e), [n, c] = r.split("	"), [s] = [
    L[t].parents.flatMap(
      (a) => T(a, i).split(",")
    )
  ];
  return F(
    s,
    [">"],
    [t],
    [`[type="${n}"]`],
    [">"],
    [c]
  ).map((a) => a.join("")).join(",");
}
function zr() {
  return "";
}
function Br() {
  return ":root";
}
function v(t) {
  return t.parentElement.tagName === "SCL" ? t.getAttribute("name") : `${E(t.parentElement)}>${t.getAttribute("name")}`;
}
function y(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [r, n] = P(e);
  if (!n) return w;
  if (i === 0) return `${t}[name="${n}"]`;
  const c = L[t].parents;
  if (!c) return w;
  const s = c.flatMap(
    (a) => L[a].selector === L.Substation.selector ? y(a, r, i - 1).split(",") : T(a, r).split(",")
  ).filter((a) => !a.startsWith(w));
  return s.length === 0 ? w : F(s, [">"], [t], [`[name="${n}"]`]).map((a) => a.join("")).join(",");
}
function l(t) {
  return E(t.parentElement).toString();
}
function p(t, e) {
  const i = L[t].parents;
  if (!i) return w;
  const r = i.flatMap((n) => T(n, e).split(",")).filter((n) => !n.startsWith(w));
  return r.length === 0 ? w : F(r, [">"], [t]).map((n) => n.join("")).join(",");
}
function Ie(t) {
  return `#${t.id}`;
}
function Ee(t, e) {
  const i = e.replace(/^#/, "");
  return i ? `${t}[id="${i}"]` : w;
}
const Ht = [
  "TransformerWinding",
  "ConductingEquipment"
], Vt = [
  "GeneralEquipment",
  "PowerTransformer",
  ...Ht
], Ke = ["Substation", "VoltageLevel", "Bay"], qt = ["Process", "Line"], Ut = ["EqSubFunction", "EqFunction"], Gr = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Vt,
  ...Ke,
  ...qt,
  ...Ut
], Wt = ["ConnectivityNode", ...Gr], Hr = ["GOOSESecurity", "SMVSecurity"], Vr = ["SubNetwork", ...Hr, ...Wt], qr = ["BDA", "DA"], Ur = ["SampledValueControl", "GSEControl"], Wr = ["LogControl", "ReportControl"], jr = [...Ur, ...Wr], Xr = ["GSE", "SMV"], Kr = [
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
  ...jr,
  ...Xr,
  ...qr
], ae = ["LN0", "LN"], Zr = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Jr = ["Subject", "IssuerName"], Qr = ["MinTime", "MaxTime"], Yr = ["LNodeType", "DOType", "DAType", "EnumType"], en = [
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
], tn = ["DynDataSet", "ConfDataSet"], rn = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...tn
], nn = ["ConfLogControl", "ConfSigRef"], cn = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], sn = ["SCL", ...Vr, ...Kr, ...Yr], jt = [
  ...sn,
  ...Zr,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Jr,
  ...Qr,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...ae,
  ...en,
  "DynAssociation",
  "SettingGroups",
  ...rn,
  ...nn,
  ...cn,
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
], an = new Set(jt);
function ct(t) {
  return an.has(t);
}
const Re = ["Text", "Private"], ie = [...Re], C = [...Re], Ce = [...Re], vt = [...C, "Val"], Xt = [...ie, "LNode"], re = [...Xt], Ze = [...re], ze = [
  ...re,
  "PowerTransformer",
  "GeneralEquipment"
], xt = [
  ...Ze,
  "Terminal"
], St = [...C, "Address"], Kt = [...ie], kt = [...Kt, "IEDName"], _t = [
  ...C,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], At = [
  ...re,
  "GeneralEquipment",
  "Function"
], It = [...Kt, "TrgOps"], Et = [
  ...re,
  "GeneralEquipment",
  "EqSubFunction"
], L = {
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
      ...ie,
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
    identity: mr,
    selector: hr,
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
    children: [...vt]
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
      ...ze,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: Ir,
    selector: Er,
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
    children: [...C, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: v,
    selector: y,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...xt,
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
    identity: Lr,
    selector: Dr,
    parents: ["SubNetwork"],
    children: [...C, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: v,
    selector: y,
    parents: ["Bay", "Line"],
    children: [...Xt]
  },
  DA: {
    identity: v,
    selector: y,
    parents: ["DOType"],
    children: [...vt]
  },
  DAI: {
    identity: bt,
    selector: Xe,
    parents: ["DOI", "SDI"],
    children: [...C, "Val"]
  },
  DAType: {
    identity: Ie,
    selector: Ee,
    parents: ["DataTypeTemplates"],
    children: [...Ce, "BDA", "ProtNs"]
  },
  DO: {
    identity: v,
    selector: y,
    parents: ["LNodeType"],
    children: [...C]
  },
  DOI: {
    identity: v,
    selector: y,
    parents: [...ae],
    children: [...C, "SDI", "DAI"]
  },
  DOType: {
    identity: Ie,
    selector: Ee,
    parents: ["DataTypeTemplates"],
    children: [...Ce, "SDO", "DA"]
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
    parents: [...ae],
    children: [...ie, "FCDA"]
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
    identity: Ie,
    selector: Ee,
    parents: ["DataTypeTemplates"],
    children: [...Ce, "EnumVal"]
  },
  EnumVal: {
    identity: Fr,
    selector: Pr,
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
    children: [...Et]
  },
  EqSubFunction: {
    identity: v,
    selector: y,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...Et]
  },
  ExtRef: {
    identity: Sr,
    selector: kr,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: vr,
    selector: xr,
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
      ...re,
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
      ...qt,
      ...Ut,
      ...Ke
    ],
    children: [...Ze, "EqFunction"]
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
    children: [...ie, "Subject", "IssuerName"]
  },
  GSE: {
    identity: gt,
    selector: yt,
    parents: ["ConnectedAP"],
    children: [...St, "MinTime", "MaxTime"]
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
    children: [...kt, "Protocol"]
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
    identity: ar,
    selector: or,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: v,
    selector: y,
    parents: ["SCL"],
    children: [...C, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: gr,
    selector: yr,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: l,
    selector: p,
    parents: [...ae],
    children: [...C, "ExtRef"]
  },
  IssuerName: {
    identity: l,
    selector: p,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: pr,
    selector: ur,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: fr,
    selector: br,
    parents: ["Server"],
    children: [...C, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: _r,
    selector: Ar,
    parents: ["AccessPoint", "LDevice"],
    children: [..._t]
  },
  LN0: {
    identity: l,
    selector: p,
    parents: ["LDevice"],
    children: [
      ..._t,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: dr,
    selector: lr,
    parents: [...Wt],
    children: [...C]
  },
  LNodeType: {
    identity: Ie,
    selector: Ee,
    parents: ["DataTypeTemplates"],
    children: [...Ce, "DO"]
  },
  Line: {
    identity: v,
    selector: y,
    parents: ["Process", "SCL"],
    children: [
      ...At,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: v,
    selector: y,
    parents: [...ae],
    children: [...C]
  },
  LogControl: {
    identity: v,
    selector: y,
    parents: [...ae],
    children: [...It]
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
    identity: ht,
    selector: ft,
    parents: ["TransformerWinding"],
    children: [...C]
  },
  OptFields: {
    identity: l,
    selector: p,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: Nr,
    selector: Tr,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: Rr,
    selector: $r,
    parents: ["ConnectedAP"],
    children: [...C, "P"]
  },
  PowerTransformer: {
    identity: v,
    selector: y,
    parents: [...Ke],
    children: [
      ...Ze,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => w,
    parents: [],
    children: []
  },
  Process: {
    identity: v,
    selector: y,
    parents: ["Process", "SCL"],
    children: [
      ...At,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: Or,
    selector: Mr,
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
    parents: [...ae],
    children: [...It, "OptFields", "RptEnabled"]
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
    children: [...C, "ClientLN"]
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
    children: [...kt, "SmvOpts"]
  },
  SecPerSamples: {
    identity: l,
    selector: p,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: zr,
    selector: Br,
    parents: [],
    children: [
      ...Re,
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
    identity: bt,
    selector: Xe,
    parents: ["DOI", "SDI"],
    children: [...C, "SDI", "DAI"]
  },
  SDO: {
    identity: v,
    selector: y,
    parents: ["DOType"],
    children: [...ie]
  },
  Server: {
    identity: l,
    selector: p,
    parents: ["AccessPoint"],
    children: [
      ...C,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: l,
    selector: p,
    parents: ["AccessPoint"],
    children: [...C]
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
    children: [...C]
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
    identity: gt,
    selector: yt,
    parents: ["ConnectedAP"],
    children: [...St]
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
    children: [...ie, "Subject", "IssuerName"]
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
      ...Ht
    ],
    children: [...re, "EqFunction"]
  },
  SubFunction: {
    identity: v,
    selector: y,
    parents: ["SubFunction", "Function"],
    children: [
      ...re,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: v,
    selector: y,
    parents: ["Communication"],
    children: [...ie, "BitRate", "ConnectedAP"]
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
    children: [...ze, "VoltageLevel", "Function"]
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
    children: [...re, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: ht,
    selector: ft,
    parents: [...Vt],
    children: [...C]
  },
  Text: {
    identity: l,
    selector: p,
    parents: jt.filter((t) => t !== "Text" && t !== "Private"),
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
      ...xt,
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
    identity: Cr,
    selector: wr,
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
    children: [...ze, "Voltage", "Bay", "Function"]
  }
};
function T(t, e) {
  return typeof e != "string" ? w : ct(t) ? L[t].selector(t, e) : t;
}
function Je(t, e, i) {
  if (typeof i != "string" || !ct(e)) return null;
  const r = t.querySelector(L[e].selector(e, i));
  return r === null || Qe(r) ? r : Array.from(
    t.querySelectorAll(L[e].selector(e, i))
  ).find(Qe) ?? null;
}
function E(t) {
  if (t === null) return NaN;
  if (t.closest("Private")) return NaN;
  const e = t.tagName;
  return ct(e) ? L[e].identity(t) : NaN;
}
wt((t) => (e) => {
  Object.keys(t).length ? e.setValue(t) : e.setValue("");
});
function F(...t) {
  return t.reduce(
    (e, i) => e.flatMap((r) => i.map((n) => [r, n].flat())),
    [[]]
  );
}
function Qe(t) {
  return !t.closest("Private");
}
const on = 99, dn = Array(on).fill(1).map((t, e) => `${e + 1}`);
function ln(t) {
  const e = /* @__PURE__ */ new Map();
  return (i) => {
    if (!e.has(i)) {
      const r = new Set(
        de(t, "LNode").filter((n) => n.getAttribute("lnClass") === i).map((n) => n.getAttribute("lnInst"))
      );
      e.set(i, () => {
        const n = dn.find((c) => !r.has(c));
        return n && r.add(n), n;
      });
    }
    return e.get(i)();
  };
}
const pn = {
  asciName: "[A-Za-z][0-9,A-Z,a-z_]*"
};
function Be(t, e) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { ...t, ...e?.detail }
  });
}
function un(t) {
  return (e, i, r) => {
    const n = r.items.filter((a) => a.selected).map((a) => a.value).map((a) => Je(t.ownerDocument, "LNodeType", a)).filter((a) => a !== null), c = ln(t);
    return n.map((a) => {
      const o = a.getAttribute("lnClass");
      if (!o) return null;
      const m = c(o);
      if (!m) {
        i.dispatchEvent(
          Be({
            kind: "error",
            title: A("lnode.log.title", { lnClass: o }),
            message: A("lnode.log.nonuniquelninst")
          })
        );
        return;
      }
      const h = de(t, "LNode").some(
        (k) => k.getAttribute("lnClass") === "LLN0"
      );
      if (o === "LLN0" && h) {
        i.dispatchEvent(
          Be({
            kind: "error",
            title: A("lnode.log.title", { lnClass: o }),
            message: A("lnode.log.uniqueln0", { lnClass: o })
          })
        );
        return;
      }
      const x = de(t, "LNode").some(
        (k) => k.getAttribute("lnClass") === "LPHD"
      );
      if (o === "LPHD" && x) {
        i.dispatchEvent(
          Be({
            kind: "error",
            title: A("lnode.log.title", { lnClass: o }),
            message: A("lnode.log.uniqueln0", { lnClass: o })
          })
        );
        return;
      }
      const f = o === "LLN0" ? "" : m, S = Gt(t.ownerDocument, "LNode", {
        iedName: "None",
        ldInst: null,
        prefix: null,
        lnClass: o,
        lnInst: f,
        lnType: a.getAttribute("id")
      });
      return { new: { parent: t, element: S } };
    }).filter((a) => a);
  };
}
function mn(t) {
  return (e) => {
    e.dispatchEvent(we()), e.dispatchEvent(we(Qt(t)));
  };
}
function Zt(t) {
  const e = Array.from(
    t.ownerDocument.querySelectorAll("LNodeType")
  );
  return [
    {
      title: A("lnode.wizard.title.selectLNodeTypes"),
      menuActions: [
        {
          icon: "",
          label: A("lnode.wizard.reference"),
          action: mn(t)
        }
      ],
      primary: {
        icon: "save",
        label: A("save"),
        action: un(t)
      },
      content: [
        V`<filtered-list multi
          >${e.map((i) => {
          const r = i.getAttribute("lnClass") === "LLN0" && de(t, "LNode").some(
            (n) => n.getAttribute("lnClass") === "LLN0"
          ) || i.getAttribute("lnClass") === "LPHD" && de(t, "LNode").some(
            (n) => n.getAttribute("lnClass") === "LPHD"
          );
          return V`<mwc-check-list-item
              twoline
              value="${E(i)}"
              ?disabled=${r}
              ><span>${i.getAttribute("lnClass")}</span
              ><span slot="secondary"
                >${r ? A("lnode.wizard.uniquewarning") : E(i)}</span
              ></mwc-check-list-item
            >`;
        })}</filtered-list
        >`
      ]
    }
  ];
}
const hn = {
  CBR: ["CSWI", "CILO", "XCBR"],
  DIS: ["CSWI", "CILO", "XSWI"],
  VTR: ["TVTR"],
  CTR: ["TCTR"],
  Bay: ["LLN0"],
  VoltageLevel: ["LLN0"],
  Substation: ["LLN0"]
};
function Jt(t, e) {
  return t.disabled !== e.disabled ? e.disabled ? -1 : 1 : t.preferred !== e.preferred ? t.preferred ? -1 : 1 : t.selected !== e.selected ? t.selected ? -1 : 1 : 0;
}
const fn = "Client LN";
function Ct(t, e) {
  return Array.from(t.getElementsByTagName("LNode")).filter((i) => !i.closest("Private")).filter((i) => st(e, i))[0] ?? null;
}
function st(t, e) {
  return (e.getAttribute("iedName") ?? "") === (t.closest("IED")?.getAttribute("name") ?? "") && (e.getAttribute("ldInst") ?? "") === (t.closest("LDevice")?.getAttribute("inst") ?? "") && (e.getAttribute("prefix") ?? "") === (t.getAttribute("prefix") ?? "") && (e.getAttribute("lnClass") ?? "") === (t.getAttribute("lnClass") ?? "") && (e.getAttribute("lnInst") ?? "") === (t.getAttribute("inst") ?? "");
}
function bn(t, e) {
  const i = Gt(t.ownerDocument, "LNode", {
    iedName: e.closest("IED")?.getAttribute("name") ?? "",
    ldInst: e.closest("LDevice")?.getAttribute("inst") ?? "",
    prefix: e.getAttribute("prefix") ?? "",
    lnClass: e.getAttribute("lnClass") ?? "",
    lnInst: e.getAttribute("inst") ?? ""
  });
  return {
    new: {
      parent: t,
      element: i
    }
  };
}
function gn(t, e) {
  return {
    old: {
      parent: t,
      element: e,
      reference: e.nextElementSibling
    }
  };
}
function yn(t, e) {
  return t.some((i) => st(i, e));
}
function vn(t, e) {
  return e.some((i) => st(t, i));
}
function xn(t) {
  return (e, i, r) => {
    const n = r.items.filter((o) => o.selected).map((o) => o.value).map((o) => {
      const m = Je(t.ownerDocument, "LN0", o);
      return m || Je(t.ownerDocument, "LN", o);
    }).filter((o) => o !== null), c = de(t, "LNode").filter(
      Qe
    ), s = c.filter((o) => !yn(n, o)).map((o) => gn(t, o)), a = n.filter((o) => !vn(o, c)).map((o) => bn(t, o));
    return s.concat(a);
  };
}
function Sn(t, e) {
  return t.parentElement?.parentElement?.nextElementSibling?.querySelector(
    e
  ) ?? null;
}
function kn(t, e) {
  if (!(t.target instanceof j)) return;
  const i = Sn(t.target, "#lnList");
  if (i === null) return;
  const r = e.ownerDocument, s = t.target.selected.flatMap(
    (a) => Array.from(
      r.querySelectorAll(
        `:root > IED[name="${a.value}"] > AccessPoint > LN,:root > IED[name="${a.value}"] > AccessPoint > Server > LDevice > LN,:root > IED[name="${a.value}"] > AccessPoint > Server > LDevice > LN0`
      )
    ).filter((o) => !o.closest("Private"))
  ).filter((a) => a !== null).map((a) => {
    const o = hn[e.getAttribute("type") ? e.getAttribute("type") ?? "" : e.tagName ?? ""]?.includes(a.getAttribute("lnClass") ?? "") ?? !1, m = Ct(e.ownerDocument, a), h = m?.parentElement === e;
    return {
      selected: h,
      disabled: m !== null && !h,
      prefered: o,
      element: a
    };
  }).sort(Jt).map((a) => V`<mwc-check-list-item
      ?selected=${a.selected}
      ?disabled=${a.disabled}
      value="${E(a.element)}"
      twoline
      ><span
        >${a.element.getAttribute("prefix") ?? ""}${a.element.getAttribute("lnClass")}${a.element.getAttribute(
    "inst"
  ) ?? ""}
        ${a.disabled ? V` <mwc-icon style="--mdc-icon-size: 1em;"
                >account_tree</mwc-icon
              >
              ${sr(Ct(r, a.element))}` : ""}</span
      ><span slot="secondary"
        >${a.element.closest("IED")?.getAttribute("name") ?? ""} |
        ${a.element.closest("LDevice") ? a.element.closest("LDevice")?.getAttribute("inst") : fn}</span
      ></mwc-check-list-item
    >`);
  pi(V`${s}`, i);
}
function _n(t) {
  const e = t.ownerDocument;
  return e.querySelectorAll(":root > IED").length > 0 ? V`<filtered-list
      disableCheckAll
      multi
      id="iedList"
      @selected=${(i) => kn(i, t)}
      >${Array.from(e.querySelectorAll(":root > IED")).map((i) => i.getAttribute("name")).map((i) => ({
    selected: Array.from(t.children).filter((r) => !r.closest("Private")).filter(
      (r) => r.tagName === "LNode" && r.getAttribute("iedName") === i
    ).length > 0,
    iedName: i
  })).sort(Jt).map(
    (i) => V`<mwc-check-list-item
              value="${i.iedName ?? ""}"
              ?selected=${i.selected}
              >${i.iedName}</mwc-check-list-item
            >`
  )}</filtered-list
    >` : V`<mwc-list-item noninteractive graphic="icon">
      <span>${A("lnode.wizard.placeholder")}</span>
      <mwc-icon slot="graphic">info</mwc-icon>
    </mwc-list-item>`;
}
function An(t) {
  return (e) => {
    e.dispatchEvent(we()), e.dispatchEvent(we(Zt(t)));
  };
}
function Qt(t) {
  return [
    {
      title: A("lnode.wizard.title.selectIEDs"),
      menuActions: [
        {
          icon: "",
          label: A("lnode.wizard.instance"),
          action: An(t)
        }
      ],
      content: [_n(t)]
    },
    {
      initial: Array.from(t.children).some(
        (e) => e.tagName === "LNode"
      ),
      title: A("lnode.wizard.title.selectLNs"),
      primary: {
        icon: "save",
        label: A("save"),
        action: xn(t)
      },
      content: [V`<filtered-list multi id="lnList"></filtered-list>`]
    }
  ];
}
function Gn(t) {
  return t.tagName === "Function" || t.tagName === "SubFunction" || t.tagName === "EqFunction" || t.tagName === "EqSubFunction" ? Zt(t) : Qt(t);
}
function In(t) {
  const e = t.iedName !== "None";
  return [
    V`<wizard-textfield
      label="iedName"
      .maybeValue=${t.iedName}
      helper="${A("scl.iedName")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    V`<wizard-textfield
      label="ldInst"
      .maybeValue=${t.ldInst}
      helper="${A("scl.ldInst")}"
      helperPersistent
      nullable
      disabled
    ></wizard-textfield>`,
    V`<wizard-textfield
      label="prefix"
      .maybeValue=${t.prefix}
      helper="${A("scl.prefix")}"
      pattern="${pn.asciName}"
      maxLength="11"
      helperPersistent
      nullable
      ?disabled=${e}
    ></wizard-textfield>`,
    V`<wizard-textfield
      label="lnClass"
      .maybeValue=${t.lnClass}
      helper="${A("scl.lnClass")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    V`<wizard-textfield
      label="lnInst"
      .maybeValue=${t.lnInst}
      helper="${A("scl.lnInst")}"
      helperPersistent
      type="number"
      min="1"
      max="99"
      .reservedValues=${t.reservedLnInst}
      ?disabled=${e}
    ></wizard-textfield>`
  ];
}
function En(t) {
  return (e) => {
    const i = {}, r = ["iedName", "ldInst", "prefix", "lnClass", "lnInst"];
    r.forEach((c) => {
      i[c] = cr(e.find((s) => s.label === c));
    });
    let n = null;
    if (r.some((c) => i[c] !== t.getAttribute(c))) {
      const c = Ji(t, i);
      return n = {
        old: { element: t },
        new: { element: c }
      }, [n];
    }
    return [];
  };
}
function Hn(t) {
  const [e, i, r, n, c] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((a) => t.getAttribute(a)), s = de(
    t.parentElement,
    "LNode"
  ).filter(
    (a) => a !== t && a.getAttribute("lnClass") === t.getAttribute("lnClass")
  ).map((a) => a.getAttribute("lnInst"));
  return [
    {
      title: A("wizard.title.edit", { tagName: "LNode" }),
      element: t,
      primary: {
        label: A("save"),
        icon: "save",
        action: En(t)
      },
      content: [
        ...In({
          iedName: e,
          ldInst: i,
          prefix: r,
          lnClass: n,
          lnInst: c,
          reservedLnInst: s
        })
      ]
    }
  ];
}
export {
  Hn as editLNodeWizard,
  Ct as getLNode,
  Gn as lNodeWizard,
  xn as lNodeWizardAction
};
