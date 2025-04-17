import { NodePart as gn, AttributePart as yn, directive as ei, html as w, render as ti, nothing as vn } from "lit-html";
import { LitElement as je, query as K, property as A, state as P, html as p, css as $e, customElement as he, queryAsync as ii, eventOptions as Sn, queryAssignedNodes as ni, unsafeCSS as An } from "lit-element";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
import { TextField as wn } from "@material/mwc-textfield";
import { Select as xn } from "@material/mwc-select";
import "@material/mwc-formfield";
import "@material/mwc-icon";
import { List as En } from "@material/mwc-list";
import "@material/mwc-button";
const In = 1e3 * 60, st = "langChanged";
function Nn(e, t, i) {
  return Object.entries(ct(t || {})).reduce((n, [r, a]) => n.replace(new RegExp(`{{[  ]*${r}[  ]*}}`, "gm"), String(ct(a))), e);
}
function kn(e, t) {
  const i = e.split(".");
  let n = t.strings;
  for (; n != null && i.length > 0; )
    n = n[i.shift()];
  return n != null ? n.toString() : null;
}
function ct(e) {
  return typeof e == "function" ? e() : e;
}
const Cn = () => ({
  loader: () => Promise.resolve({}),
  empty: (e) => `[${e}]`,
  lookup: kn,
  interpolate: Nn,
  translationCache: {}
});
let Re = Cn();
function Dn(e) {
  return Re = Object.assign(Object.assign({}, Re), e);
}
function zn(e) {
  window.dispatchEvent(new CustomEvent(st, { detail: e }));
}
function $n(e, t, i = Re) {
  zn({
    previousStrings: i.strings,
    previousLang: i.lang,
    lang: i.lang = e,
    strings: i.strings = t
  });
}
function Tn(e, t) {
  const i = (n) => e(n.detail);
  return window.addEventListener(st, i, t), () => window.removeEventListener(st, i);
}
async function Ln(e, t = Re) {
  const i = await t.loader(e, t);
  t.translationCache = {}, $n(e, i, t);
}
function s(e, t, i = Re) {
  let n = i.translationCache[e] || (i.translationCache[e] = i.lookup(e, i) || i.empty(e, i));
  return t = t != null ? ct(t) : null, t != null ? i.interpolate(n, t, i) : n;
}
function ri(e) {
  return e instanceof gn ? e.startNode.isConnected : e instanceof yn ? e.committer.element.isConnected : e.element.isConnected;
}
function _n(e) {
  for (const [t] of e)
    ri(t) || e.delete(t);
}
function Pn(e) {
  "requestIdleCallback" in window ? window.requestIdleCallback(e) : setTimeout(e);
}
function Rn(e, t) {
  setInterval(() => Pn(() => _n(e)), t);
}
const vt = /* @__PURE__ */ new Map();
function Vn() {
  Tn((e) => {
    for (const [t, i] of vt)
      ri(t) && ai(t, i, e);
  });
}
Vn();
Rn(vt, In);
function ai(e, t, i) {
  const n = t(i);
  e.value !== n && (e.setValue(n), e.commit());
}
ei((e) => (t) => {
  vt.set(t, e), ai(t, e);
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
const oi = /* @__PURE__ */ new WeakMap(), Ke = (e) => (...t) => {
  const i = e(...t);
  return oi.set(i, !0), i;
}, Dt = (e) => typeof e == "function" && oi.has(e);
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
const tt = {};
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
const si = (e) => e === null || !(typeof e == "object" || typeof e == "function");
class Xe {
  constructor(t) {
    this.value = void 0, this.committer = t;
  }
  setValue(t) {
    t !== tt && (!si(t) || t !== this.value) && (this.value = t, Dt(t) || (this.committer.dirty = !0));
  }
  commit() {
    for (; Dt(this.value); ) {
      const t = this.value;
      this.value = tt, t(this);
    }
    this.value !== tt && this.committer.commit();
  }
}
class ci extends Xe {
}
let Fn = !1;
(() => {
  try {
    const e = {
      get capture() {
        return Fn = !0, !1;
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
var lt = function(e, t) {
  return lt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, n) {
    i.__proto__ = n;
  } || function(i, n) {
    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (i[r] = n[r]);
  }, lt(e, t);
};
function On(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  lt(e, t);
  function i() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i());
}
var _e = function() {
  return _e = Object.assign || function(t) {
    for (var i, n = 1, r = arguments.length; n < r; n++) {
      i = arguments[n];
      for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
    }
    return t;
  }, _e.apply(this, arguments);
};
function g(e, t, i, n) {
  var r = arguments.length, a = r < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, i) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, i, n);
  else for (var c = e.length - 1; c >= 0; c--) (o = e[c]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, i, a) : o(t, i)) || a);
  return r > 3 && a && Object.defineProperty(t, i, a), a;
}
function Oe(e) {
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
function qn(e, t) {
  var i = e.matches || e.webkitMatchesSelector || e.msMatchesSelector;
  return i.call(e, t);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Mn = (e) => e.nodeType === Node.ELEMENT_NODE, li = () => {
}, Hn = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", li, Hn);
document.removeEventListener("x", li);
const di = (e = window.document) => {
  let t = e.activeElement;
  const i = [];
  if (!t)
    return i;
  for (; t && (i.push(t), t.shadowRoot); )
    t = t.shadowRoot.activeElement;
  return i;
}, Bn = (e) => {
  const t = di();
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
class St extends je {
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
var ui = (
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
var Gn = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Wn = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, zt = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function Un(e, t, i) {
  if (!e)
    return { x: 0, y: 0 };
  var n = t.x, r = t.y, a = n + i.left, o = r + i.top, c, l;
  if (e.type === "touchstart") {
    var u = e;
    c = u.changedTouches[0].pageX - a, l = u.changedTouches[0].pageY - o;
  } else {
    var m = e;
    c = m.pageX - a, l = m.pageY - o;
  }
  return { x: c, y: l };
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
var $t = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Tt = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], qe = [], jn = (
  /** @class */
  function(e) {
    On(t, e);
    function t(i) {
      var n = e.call(this, _e(_e({}, t.defaultAdapter), i)) || this;
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
        return Gn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return Wn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return zt;
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
          for (var a = Oe($t), o = a.next(); !o.done; o = a.next()) {
            var c = o.value;
            this.adapter.registerInteractionHandler(c, this.activateHandler);
          }
        } catch (l) {
          n = { error: l };
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
          for (var a = Oe(Tt), o = a.next(); !o.done; o = a.next()) {
            var c = o.value;
            this.adapter.registerDocumentInteractionHandler(c, this.deactivateHandler);
          }
        } catch (l) {
          n = { error: l };
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
        for (var r = Oe($t), a = r.next(); !a.done; a = r.next()) {
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
        for (var r = Oe(Tt), a = r.next(); !a.done; a = r.next()) {
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
            var c = i !== void 0 && qe.length > 0 && qe.some(function(l) {
              return n.adapter.containsEventTarget(l);
            });
            if (c) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (qe.push(i.target), this.registerDeactivationHandlers(i)), r.wasElementMadeActive = this.checkElementMadeActive(i), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              qe = [], !r.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (r.wasElementMadeActive = n.checkElementMadeActive(i), r.wasElementMadeActive && n.animateActivation()), r.wasElementMadeActive || (n.activationState = n.defaultActivationState());
            });
          }
        }
      }
    }, t.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, t.prototype.animateActivation = function() {
      var i = this, n = t.strings, r = n.VAR_FG_TRANSLATE_START, a = n.VAR_FG_TRANSLATE_END, o = t.cssClasses, c = o.FG_DEACTIVATION, l = o.FG_ACTIVATION, u = t.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var m = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var b = this.getFgTranslationCoordinates(), y = b.startPoint, x = b.endPoint;
        m = y.x + "px, " + y.y + "px", h = x.x + "px, " + x.y + "px";
      }
      this.adapter.updateCssVariable(r, m), this.adapter.updateCssVariable(a, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(c), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, u);
    }, t.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, n = i.activationEvent, r = i.wasActivatedByPointer, a;
      r ? a = Un(n, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      }, zt.FG_DEACTIVATION_MS));
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
        var r = _e({}, n);
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
  }(ui)
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
class Kn {
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
const Lt = /* @__PURE__ */ new WeakMap(), Ze = Ke((e) => (t) => {
  if (!(t instanceof Xe) || t instanceof ci || t.committer.name !== "class" || t.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = t, { element: n } = i;
  let r = Lt.get(t);
  r === void 0 && (n.setAttribute("class", i.strings.join(" ")), Lt.set(t, r = /* @__PURE__ */ new Set()));
  const a = n.classList || new Kn(n);
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
const _t = /* @__PURE__ */ new WeakMap(), Xn = Ke((e) => (t) => {
  if (!(t instanceof Xe) || t instanceof ci || t.committer.name !== "style" || t.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = t, { style: n } = i.element;
  let r = _t.get(t);
  r === void 0 && (n.cssText = i.strings.join(" "), _t.set(t, r = /* @__PURE__ */ new Set())), r.forEach((a) => {
    a in e || (r.delete(a), a.indexOf("-") === -1 ? n[a] = null : n.removeProperty(a));
  });
  for (const a in e)
    r.add(a), a.indexOf("-") === -1 ? n[a] = e[a] : n.setProperty(a, e[a]);
});
class O extends St {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = jn;
  }
  get isActive() {
    return qn(this.parentElement || this, ":active");
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
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Ze(n)}"
          style="${Xn({
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
  K(".mdc-ripple-surface")
], O.prototype, "mdcRoot", void 0);
g([
  A({ type: Boolean })
], O.prototype, "primary", void 0);
g([
  A({ type: Boolean })
], O.prototype, "accent", void 0);
g([
  A({ type: Boolean })
], O.prototype, "unbounded", void 0);
g([
  A({ type: Boolean })
], O.prototype, "disabled", void 0);
g([
  A({ type: Boolean })
], O.prototype, "activated", void 0);
g([
  A({ type: Boolean })
], O.prototype, "selected", void 0);
g([
  A({ type: Boolean })
], O.prototype, "internalUseStateLayerCustomProperties", void 0);
g([
  P()
], O.prototype, "hovering", void 0);
g([
  P()
], O.prototype, "bgFocused", void 0);
g([
  P()
], O.prototype, "fgActivation", void 0);
g([
  P()
], O.prototype, "fgDeactivation", void 0);
g([
  P()
], O.prototype, "fgScale", void 0);
g([
  P()
], O.prototype, "fgSize", void 0);
g([
  P()
], O.prototype, "translateStart", void 0);
g([
  P()
], O.prototype, "translateEnd", void 0);
g([
  P()
], O.prototype, "leftPos", void 0);
g([
  P()
], O.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Zn = $e`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let dt = class extends O {
};
dt.styles = [Zn];
dt = g([
  he("mwc-ripple")
], dt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ae = (e) => (
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
          const l = this.constructor._observers.get(o);
          l !== void 0 && l.call(this, this[o], a);
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
class mi {
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
class B extends je {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new mi(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
      <span class="mdc-deprecated-list-item__graphic material-icons ${Ze(t)}">
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
g([
  K("slot")
], B.prototype, "slotElement", void 0);
g([
  ii("mwc-ripple")
], B.prototype, "ripple", void 0);
g([
  A({ type: String })
], B.prototype, "value", void 0);
g([
  A({ type: String, reflect: !0 })
], B.prototype, "group", void 0);
g([
  A({ type: Number, reflect: !0 })
], B.prototype, "tabindex", void 0);
g([
  A({ type: Boolean, reflect: !0 }),
  Ae(function(e) {
    e ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], B.prototype, "disabled", void 0);
g([
  A({ type: Boolean, reflect: !0 })
], B.prototype, "twoline", void 0);
g([
  A({ type: Boolean, reflect: !0 })
], B.prototype, "activated", void 0);
g([
  A({ type: String, reflect: !0 })
], B.prototype, "graphic", void 0);
g([
  A({ type: Boolean })
], B.prototype, "multipleGraphics", void 0);
g([
  A({ type: Boolean })
], B.prototype, "hasMeta", void 0);
g([
  A({ type: Boolean, reflect: !0 }),
  Ae(function(e) {
    e ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], B.prototype, "noninteractive", void 0);
g([
  A({ type: Boolean, reflect: !0 }),
  Ae(function(e) {
    const t = this.getAttribute("role"), i = t === "gridcell" || t === "option" || t === "row" || t === "tab";
    if (i && e ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(e, "property");
  })
], B.prototype, "selected", void 0);
g([
  P()
], B.prototype, "shouldRenderRipple", void 0);
g([
  P()
], B.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const pi = $e`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ut = class extends B {
};
ut.styles = [pi];
ut = g([
  he("mwc-list-item")
], ut);
var Qn = Object.defineProperty, Yn = Object.getOwnPropertyDescriptor, re = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Yn(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && Qn(t, i, r), r;
};
let U = class extends wn {
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
    return this.reservedValues && this.reservedValues.some((e) => e === this.value) ? (this.setCustomValidity(s("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
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
          >${e === null ? s("textfield.noMultiplier") : e}</mwc-list-item
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
re([
  A({ type: Boolean })
], U.prototype, "nullable", 2);
re([
  A({ type: Array })
], U.prototype, "multipliers", 2);
re([
  A({ type: String })
], U.prototype, "multiplier", 1);
re([
  A({ type: String })
], U.prototype, "unit", 2);
re([
  P()
], U.prototype, "null", 1);
re([
  A({ type: String })
], U.prototype, "maybeValue", 1);
re([
  A({ type: String })
], U.prototype, "defaultValue", 2);
re([
  A({ type: Array })
], U.prototype, "reservedValues", 2);
re([
  K("mwc-switch")
], U.prototype, "nullSwitch", 2);
re([
  K("mwc-menu")
], U.prototype, "multiplierMenu", 2);
re([
  K("mwc-icon-button")
], U.prototype, "multiplierButton", 2);
U = re([
  he("wizard-textfield")
], U);
function C(e, t, i) {
  const n = e.createElementNS(e.documentElement.namespaceURI, t);
  return Object.entries(i).filter(([r, a]) => a !== null).forEach(([r, a]) => n.setAttribute(r, a)), n;
}
function $(e, t) {
  const i = e.cloneNode(!1);
  return Object.entries(t).forEach(([n, r]) => {
    r === null ? i.removeAttribute(n) : i.setAttribute(n, r);
  }), i;
}
function M(e, t) {
  return !e || !t ? [] : Array.from(e.children).filter(
    (i) => i.tagName === t
  );
}
var Jn = Object.defineProperty, er = Object.getOwnPropertyDescriptor, Ne = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? er(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && Jn(t, i, r), r;
};
let me = class extends xn {
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
Ne([
  A({ type: Boolean })
], me.prototype, "nullable", 2);
Ne([
  P()
], me.prototype, "null", 1);
Ne([
  A({ type: String })
], me.prototype, "maybeValue", 1);
Ne([
  A({ type: String })
], me.prototype, "defaultValue", 2);
Ne([
  A({ type: Array })
], me.prototype, "reservedValues", 2);
Ne([
  K("mwc-switch")
], me.prototype, "nullSwitch", 2);
me = Ne([
  he("wizard-select")
], me);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function tr(e, t, i) {
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
function At(e, t, i) {
  if (t !== void 0)
    return tr(e, t, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class hi extends St {
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
hi.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const it = /* @__PURE__ */ new WeakMap(), le = Ke((e) => (t) => {
  const i = it.get(t);
  if (e === void 0 && t instanceof Xe) {
    if (i !== void 0 || !it.has(t)) {
      const n = t.committer.name;
      t.committer.element.removeAttribute(n);
    }
  } else e !== i && t.setValue(e);
  it.set(t, e);
});
class q extends hi {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new mi(() => (this.shouldRenderRipple = !0, this.ripple.then((t) => this.rippleElement = t), this.ripple));
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
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Ze(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${le(this.name)}"
              aria-checked="${le(n)}"
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
  K(".mdc-checkbox")
], q.prototype, "mdcRoot", void 0);
g([
  K("input")
], q.prototype, "formElement", void 0);
g([
  A({ type: Boolean, reflect: !0 })
], q.prototype, "checked", void 0);
g([
  A({ type: Boolean })
], q.prototype, "indeterminate", void 0);
g([
  A({ type: Boolean, reflect: !0 })
], q.prototype, "disabled", void 0);
g([
  A({ type: String, reflect: !0 })
], q.prototype, "name", void 0);
g([
  A({ type: String })
], q.prototype, "value", void 0);
g([
  At,
  A({ type: String, attribute: "aria-label" })
], q.prototype, "ariaLabel", void 0);
g([
  At,
  A({ type: String, attribute: "aria-labelledby" })
], q.prototype, "ariaLabelledBy", void 0);
g([
  At,
  A({ type: String, attribute: "aria-describedby" })
], q.prototype, "ariaDescribedBy", void 0);
g([
  A({ type: Boolean })
], q.prototype, "reducedTouchTarget", void 0);
g([
  P()
], q.prototype, "animationClass", void 0);
g([
  P()
], q.prototype, "shouldRenderRipple", void 0);
g([
  P()
], q.prototype, "focused", void 0);
g([
  P()
], q.prototype, "useStateLayerCustomProperties", void 0);
g([
  ii("mwc-ripple")
], q.prototype, "ripple", void 0);
g([
  Sn({ passive: !0 })
], q.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ir = $e`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let mt = class extends q {
};
mt.styles = [ir];
mt = g([
  he("mwc-checkbox")
], mt);
var nr = Object.defineProperty, rr = Object.getOwnPropertyDescriptor, ne = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? rr(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && nr(t, i, r), r;
};
let j = class extends je {
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
ne([
  A({ type: String })
], j.prototype, "label", 2);
ne([
  A({ type: String })
], j.prototype, "helper", 2);
ne([
  A({ type: Boolean })
], j.prototype, "nullable", 2);
ne([
  A({ type: Boolean })
], j.prototype, "defaultChecked", 2);
ne([
  A({ type: String })
], j.prototype, "maybeValue", 1);
ne([
  A({ type: Boolean })
], j.prototype, "disabled", 2);
ne([
  P()
], j.prototype, "null", 1);
ne([
  P()
], j.prototype, "checked", 1);
ne([
  P()
], j.prototype, "deactivateCheckbox", 2);
ne([
  P()
], j.prototype, "formfieldLabel", 1);
ne([
  K("mwc-switch")
], j.prototype, "nullSwitch", 2);
ne([
  K("mwc-checkbox")
], j.prototype, "checkbox", 2);
j = ne([
  he("wizard-checkbox")
], j);
function ar(e) {
  return typeof e == "function";
}
function f(e) {
  return e instanceof U || e instanceof me || e instanceof j ? e.maybeValue : e.value ?? null;
}
function wt(e) {
  return e instanceof U ? e.multiplier : null;
}
function pe(e, t) {
  if (!e)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...t,
      detail: { wizard: null, ...t?.detail }
    });
  const i = ar(e) ? e : () => e;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { wizard: i, ...t?.detail }
  });
}
function ke(e) {
  return pe(e, { detail: { subwizard: !0 } });
}
function or(e) {
  let t = "", i = e.parentElement;
  for (; i?.getAttribute("name"); )
    t = "/" + i.getAttribute("name") + t, i = i.parentElement;
  return t;
}
function sr(e) {
  const t = e.getAttribute("name");
  return t || void 0;
}
function W(e) {
  const t = e.split(">"), i = t.pop() ?? "";
  return [t.join(">"), i];
}
const V = ":not(*)";
function cr(e) {
  return `${e.getAttribute("version")}	${e.getAttribute("revision")}`;
}
function lr(e, t) {
  const [i, n] = t.split("	");
  return !i || !n ? V : `${e}[version="${i}"][revision="${n}"]`;
}
function Pt(e) {
  return z(e.parentElement) + ">" + e.getAttribute("connectivityNode");
}
function Rt(e, t) {
  const [i, n] = W(t), r = F[e].parents.flatMap(
    (a) => G(a, i).split(",")
  );
  return H(
    r,
    [">"],
    [`${e}[connectivityNode="${n}"]`]
  ).map((a) => a.join("")).join(",");
}
function dr(e) {
  const [t, i, n, r, a, o] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((c) => e.getAttribute(c));
  return t === "None" ? `${z(e.parentElement)}>(${r} ${o} ${a})` : `${t} ${i || "(Client)"}/${n ?? ""} ${r} ${a ?? ""}`;
}
function ur(e, t) {
  if (t.endsWith(")")) {
    const [b, y] = W(t), [x, N, T] = y.substring(1, y.length - 1).split(" ");
    if (!x || !N) return V;
    const E = F[e].parents.flatMap(
      (Q) => G(Q, b).split(",")
    );
    return H(
      E,
      [">"],
      [`${e}[iedName="None"][lnClass="${x}"][lnType="${N}"][lnInst="${T}"]`]
    ).map((Q) => Q.join("")).join(",");
  }
  const [i, n, r, a, o] = t.split(/[ /]/);
  if (!i || !n || !a) return V;
  const [
    c,
    l,
    u,
    m,
    h
  ] = [
    [`[iedName="${i}"]`],
    n === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${n}"]`],
    r ? [`[prefix="${r}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    o ? [`[lnInst="${o}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return H(
    [e],
    c,
    l,
    u,
    m,
    h
  ).map((b) => b.join("")).join(",");
}
function mr(e) {
  return `${z(e.parentElement)}>${e.getAttribute(
    "iedName"
  )} ${e.getAttribute("apName")}`;
}
function pr(e, t) {
  const [i, n] = W(t), [r, a] = n.split(" ");
  return `${G(
    "IED",
    i
  )}>${e}[iedName="${r}"][apName="${a}"]`;
}
function hr(e) {
  return `${z(e.parentElement)}>${e.getAttribute("associationID") ?? ""}`;
}
function fr(e, t) {
  const [i, n] = W(t);
  return n ? `${G(
    "Server",
    i
  )}>${e}[associationID="${n}"]` : V;
}
function br(e) {
  return `${z(e.closest("IED"))}>>${e.getAttribute("inst")}`;
}
function gr(e, t) {
  const [i, n] = t.split(">>");
  return n ? `IED[name="${i}"] ${e}[inst="${n}"]` : V;
}
function yr(e) {
  const t = e.textContent, [i, n, r, a, o] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((c) => e.getAttribute(c));
  return `${z(e.parentElement)}>${t} ${i || ""} ${n || ""}/${r ?? ""} ${a ?? ""} ${o ?? ""}`;
}
function vr(e, t) {
  const [i, n] = W(t), [r, a, o, c, l, u] = n.split(/[ /]/), [
    m,
    h,
    b,
    y,
    x,
    N
  ] = [
    F[e].parents.flatMap(
      (T) => G(T, i).split(",")
    ),
    [`${r}`],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${l}"]`],
    u ? [`[lnInst="${u}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return H(
    m,
    [">"],
    [e],
    h,
    b,
    y,
    x,
    N
  ).map((T) => T.join("")).join(",");
}
function Sr(e) {
  const [t, i, n, r, a, o, c, l] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((m) => e.getAttribute(m)), u = `${t}/${i ?? ""} ${n} ${r ?? ""}.${a} ${o || ""}`;
  return `${z(e.parentElement)}>${u} (${c}${l ? " [" + l + "]" : ""})`;
}
function Ar(e, t) {
  const [i, n] = W(t), [r, a, o, c] = n.split(/[ /.]/), l = n.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), u = l && l[1] ? l[1] : "", m = l && l[2] ? l[2] : "", h = n.match(/\(([A-Z]{2})/), b = n.match(/ \[([0-9]{1,2})\]/), y = h && h[1] ? h[1] : "", x = b && b[1] ? b[1] : "", [
    N,
    T,
    E,
    Q,
    se,
    be,
    Ye,
    Je,
    et
  ] = [
    F[e].parents.flatMap(
      (Te) => G(Te, i).split(",")
    ),
    [`[ldInst="${r}"]`],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    c ? [`[lnInst="${c}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${u}"]`],
    m ? [`[daName="${m}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${y}"]`],
    x ? [`[ix="${x}"]`] : [":not([ix])", '[ix=""]']
  ];
  return H(
    N,
    [">"],
    [e],
    T,
    E,
    Q,
    se,
    be,
    Ye,
    Je,
    et
  ).map((Te) => Te.join("")).join(",");
}
function wr(e) {
  if (!e.parentElement) return NaN;
  const t = z(e.parentElement), i = e.getAttribute("iedName"), n = e.getAttribute("intAddr"), r = Array.from(
    e.parentElement.querySelectorAll(`ExtRef[intAddr="${n}"]`)
  ).indexOf(e);
  if (n) return `${t}>${n}[${r}]`;
  const [
    a,
    o,
    c,
    l,
    u,
    m,
    h,
    b,
    y,
    x,
    N,
    T
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
  ].map((se) => e.getAttribute(se)), E = T ? `${h}:${T} ${b ?? ""}/${y ?? ""} ${x ?? ""} ${N ?? ""}` : "", Q = `${i} ${a}/${o ?? ""} ${c} ${l ?? ""} ${u} ${m || ""}`;
  return `${t}>${E ? E + " " : ""}${Q}${n ? `@${n}` : ""}`;
}
function xr(e, t) {
  const [i, n] = W(t), r = F[e].parents.flatMap(
    (Le) => G(Le, i).split(",")
  );
  if (n.endsWith("]")) {
    const [Le] = n.split("["), fn = [`[intAddr="${Le}"]`];
    return H(r, [">"], [e], fn).map((bn) => bn.join("")).join(",");
  }
  let a, o, c, l, u, m, h, b, y, x, N, T, E, Q;
  !n.includes(":") && !n.includes("@") ? [a, o, c, l, u, m, h] = n.split(/[ /]/) : n.includes(":") && !n.includes("@") ? [
    b,
    y,
    x,
    N,
    T,
    E,
    a,
    o,
    c,
    l,
    u,
    m,
    h
  ] = n.split(/[ /:]/) : !n.includes(":") && n.includes("@") ? [a, o, c, l, u, m, h, Q] = n.split(/[ /@]/) : [
    b,
    y,
    x,
    N,
    T,
    E,
    a,
    o,
    c,
    l,
    u,
    m,
    h,
    Q
  ] = n.split(/[ /:@]/);
  const [
    se,
    be,
    Ye,
    Je,
    et,
    Te,
    sn,
    cn,
    ln,
    dn,
    un,
    mn,
    pn,
    hn
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])"],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    l ? [`[lnClass="${l}"]`] : [":not([lnClass])"],
    u ? [`[lnInst="${u}"]`] : [":not([lnInst])", '[lnInst=""]'],
    m ? [`[doName="${m}"]`] : [":not([doName])"],
    h ? [`[daName="${h}"]`] : [":not([daName])", '[daName=""]'],
    b ? [`[serviceType="${b}"]`] : [":not([serviceType])", '[serviceType=""]'],
    y ? [`[srcCBName="${y}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    x ? [`[srcLDInst="${x}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    N ? [`[srcPrefix="${N}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    T ? [`[srcLNClass="${T}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    E ? [`[srcLNInst="${E}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    Q ? [`[intAddr="${Q}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return H(
    r,
    [">"],
    [e],
    se,
    be,
    Ye,
    Je,
    et,
    Te,
    sn,
    cn,
    ln,
    dn,
    un,
    mn,
    pn,
    hn
  ).map((Le) => Le.join("")).join(",");
}
function Er(e) {
  const [t, i, n] = ["prefix", "lnClass", "inst"].map(
    (r) => e.getAttribute(r)
  );
  return `${z(e.parentElement)}>${t ?? ""} ${i} ${n}`;
}
function Ir(e, t) {
  const [i, n] = W(t), r = F[e].parents.flatMap(
    (h) => G(h, i).split(",")
  ), [a, o, c] = n.split(" ");
  if (!o) return V;
  const [l, u, m] = [
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    [`[inst="${c}"]`]
  ];
  return H(
    r,
    [">"],
    [e],
    l,
    u,
    m
  ).map((h) => h.join("")).join(",");
}
function Nr(e) {
  const [t, i, n, r, a, o] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((c) => e.getAttribute(c));
  return `${z(e.parentElement)}>${i} ${t || ""} ${n}/${r ?? ""} ${a} ${o}`;
}
function kr(e, t) {
  const [i, n] = W(t), r = F[e].parents.flatMap(
    (E) => G(E, i).split(",")
  ), [a, o, c, l, u, m] = n.split(/[ /]/), [
    h,
    b,
    y,
    x,
    N,
    T
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])", '[iedName=""]'],
    o ? [`[apRef="${o}"]`] : [":not([apRef])", '[apRef=""]'],
    c ? [`[ldInst="${c}"]`] : [":not([ldInst])", '[ldInst=""]'],
    l ? [`[prefix="${l}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${u}"]`],
    m ? [`[lnInst="${m}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return H(
    r,
    [">"],
    [e],
    h,
    b,
    y,
    x,
    N,
    T
  ).map((E) => E.join("")).join(",");
}
function Vt(e) {
  const [t, i] = ["name", "ix"].map((n) => e.getAttribute(n));
  return `${z(e.parentElement)}>${t}${i ? "[" + i + "]" : ""}`;
}
function pt(e, t, i = -1) {
  i === -1 && (i = t.split(">").length);
  const [n, r] = W(t), [a, o, c, l] = r.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!o) return V;
  if (i === 0) return `${e}[name="${o}"]`;
  const u = F[e].parents.flatMap(
    (b) => b === "SDI" ? pt(b, n, i - 1).split(",") : G(b, n).split(",")
  ).filter((b) => !b.startsWith(V));
  if (u.length === 0) return V;
  const [m, h] = [
    [`[name="${o}"]`],
    l ? [`[ix="${l}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return H(
    u,
    [">"],
    [e],
    m,
    h
  ).map((b) => b.join("")).join(",");
}
function Cr(e) {
  if (!e.parentElement) return NaN;
  const t = e.getAttribute("sGroup"), i = Array.from(e.parentElement.children).filter((n) => n.getAttribute("sGroup") === t).findIndex((n) => n.isSameNode(e));
  return `${z(e.parentElement)}>${t ? t + "." : ""} ${i}`;
}
function Dr(e, t) {
  const [i, n] = W(t), [r, a] = n.split(" "), o = parseFloat(a), c = F[e].parents.flatMap(
    (m) => G(m, i).split(",")
  ), [l, u] = [
    r ? [`[sGroup="${r}"]`] : [""],
    o ? [`:nth-child(${o + 1})`] : [""]
  ];
  return H(
    c,
    [">"],
    [e],
    l,
    u
  ).map((m) => m.join("")).join(",");
}
function zr(e) {
  const [t, i] = ["iedName", "apName"].map(
    (n) => e.getAttribute(n)
  );
  return `${t} ${i}`;
}
function $r(e, t) {
  const [i, n] = t.split(" ");
  return !i || !n ? V : `${e}[iedName="${i}"][apName="${n}"]`;
}
function Ft(e) {
  const [t, i] = ["ldInst", "cbName"].map(
    (n) => e.getAttribute(n)
  );
  return `${t} ${i}`;
}
function Ot(e, t) {
  const [i, n] = t.split(" ");
  return !i || !n ? V : `${e}[ldInst="${i}"][cbName="${n}"]`;
}
function Tr(e) {
  if (!e.parentElement) return NaN;
  if (!e.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const t = e.getAttribute("type");
  return e.parentElement.children.length > 1 && t !== "Connection" && t !== "RedConn" ? NaN : `${z(e.parentElement)}>${t}`;
}
function Lr(e, t) {
  const [i, n] = W(t), [r, a] = [
    F[e].parents.flatMap(
      (o) => G(o, i).split(",")
    ),
    n ? [`[type="${n}"]`] : [""]
  ];
  return H(r, [">"], [e], a).map((o) => o.join("")).join(",");
}
function _r(e) {
  if (!e.parentElement) return NaN;
  const t = e.parentElement, i = e.getAttribute("type");
  if (t.tagName === "PhysConn")
    return `${z(e.parentElement)}>${i}`;
  const n = Array.from(e.parentElement.children).filter((r) => r.getAttribute("type") === i).findIndex((r) => r.isSameNode(e));
  return `${z(e.parentElement)}>${i} [${n}]`;
}
function Pr(e, t) {
  const [i, n] = W(t), [r] = n.split(" "), a = n && n.match(/\[([0-9]+)\]/) && n.match(/\[([0-9]+)\]/)[1] ? parseFloat(n.match(/\[([0-9]+)\]/)[1]) : NaN, [o, c, l] = [
    F[e].parents.flatMap(
      (u) => G(u, i).split(",")
    ),
    [`[type="${r}"]`],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return H(
    o,
    [">"],
    [e],
    c,
    l
  ).map((u) => u.join("")).join(",");
}
function Rr(e) {
  return `${z(e.parentElement)}>${e.getAttribute("ord")}`;
}
function Vr(e, t) {
  const [i, n] = W(t);
  return `${G("EnumType", i)}>${e}[ord="${n}"]`;
}
function Fr(e) {
  return `${z(e.parentElement)}>${e.getAttribute("type") || "8-MMS"}	${e.textContent}`;
}
function Or(e, t) {
  const [i, n] = W(t), [r, a] = n.split("	"), [o] = [
    F[e].parents.flatMap(
      (c) => G(c, i).split(",")
    )
  ];
  return H(
    o,
    [">"],
    [e],
    [`[type="${r}"]`],
    [">"],
    [a]
  ).map((c) => c.join("")).join(",");
}
function qr() {
  return "";
}
function Mr() {
  return ":root";
}
function D(e) {
  return e.parentElement.tagName === "SCL" ? e.getAttribute("name") : `${z(e.parentElement)}>${e.getAttribute("name")}`;
}
function k(e, t, i = -1) {
  i === -1 && (i = t.split(">").length);
  const [n, r] = W(t);
  if (!r) return V;
  if (i === 0) return `${e}[name="${r}"]`;
  const a = F[e].parents;
  if (!a) return V;
  const o = a.flatMap(
    (c) => F[c].selector === F.Substation.selector ? k(c, n, i - 1).split(",") : G(c, n).split(",")
  ).filter((c) => !c.startsWith(V));
  return o.length === 0 ? V : H(o, [">"], [e], [`[name="${r}"]`]).map((c) => c.join("")).join(",");
}
function v(e) {
  return z(e.parentElement).toString();
}
function S(e, t) {
  const i = F[e].parents;
  if (!i) return V;
  const n = i.flatMap((r) => G(r, t).split(",")).filter((r) => !r.startsWith(V));
  return n.length === 0 ? V : H(n, [">"], [e]).map((r) => r.join("")).join(",");
}
function Me(e) {
  return `#${e.id}`;
}
function He(e, t) {
  const i = t.replace(/^#/, "");
  return i ? `${e}[id="${i}"]` : V;
}
const fi = [
  "TransformerWinding",
  "ConductingEquipment"
], bi = [
  "GeneralEquipment",
  "PowerTransformer",
  ...fi
], ht = ["Substation", "VoltageLevel", "Bay"], gi = ["Process", "Line"], yi = ["EqSubFunction", "EqFunction"], Hr = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...bi,
  ...ht,
  ...gi,
  ...yi
], vi = ["ConnectivityNode", ...Hr], Br = ["GOOSESecurity", "SMVSecurity"], Gr = ["SubNetwork", ...Br, ...vi], Wr = ["BDA", "DA"], Ur = ["SampledValueControl", "GSEControl"], jr = ["LogControl", "ReportControl"], Kr = [...Ur, ...jr], Xr = ["GSE", "SMV"], Zr = [
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
  ...Kr,
  ...Xr,
  ...Wr
], Ie = ["LN0", "LN"], Qr = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Yr = ["Subject", "IssuerName"], Jr = ["MinTime", "MaxTime"], ea = ["LNodeType", "DOType", "DAType", "EnumType"], ta = [
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
], ia = ["DynDataSet", "ConfDataSet"], na = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...ia
], ra = ["ConfLogControl", "ConfSigRef"], aa = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], oa = ["SCL", ...Gr, ...Zr, ...ea], Si = [
  ...oa,
  ...Qr,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Yr,
  ...Jr,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...Ie,
  ...ta,
  "DynAssociation",
  "SettingGroups",
  ...na,
  ...ra,
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
], sa = new Set(Si);
function xt(e) {
  return sa.has(e);
}
const Qe = ["Text", "Private"], ve = [...Qe], R = [...Qe], Be = [...Qe], qt = [...R, "Val"], Ai = [...ve, "LNode"], Se = [...Ai], ft = [...Se], nt = [
  ...Se,
  "PowerTransformer",
  "GeneralEquipment"
], Mt = [
  ...ft,
  "Terminal"
], Ht = [...R, "Address"], wi = [...ve], Bt = [...wi, "IEDName"], Gt = [
  ...R,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], Wt = [
  ...Se,
  "GeneralEquipment",
  "Function"
], Ut = [...wi, "TrgOps"], jt = [
  ...Se,
  "GeneralEquipment",
  "EqSubFunction"
], F = {
  AccessControl: {
    identity: v,
    selector: S,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: D,
    selector: k,
    parents: ["IED"],
    children: [
      ...ve,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: v,
    selector: S,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: hr,
    selector: fr,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: v,
    selector: S,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: D,
    selector: k,
    parents: ["DAType"],
    children: [...qt]
  },
  BitRate: {
    identity: v,
    selector: S,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: D,
    selector: k,
    parents: ["VoltageLevel"],
    children: [
      ...nt,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: Nr,
    selector: kr,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: v,
    selector: S,
    parents: ["SCL"],
    children: [...R, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: D,
    selector: k,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...Mt,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: v,
    selector: S,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: zr,
    selector: $r,
    parents: ["SubNetwork"],
    children: [...R, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: D,
    selector: k,
    parents: ["Bay", "Line"],
    children: [...Ai]
  },
  DA: {
    identity: D,
    selector: k,
    parents: ["DOType"],
    children: [...qt]
  },
  DAI: {
    identity: Vt,
    selector: pt,
    parents: ["DOI", "SDI"],
    children: [...R, "Val"]
  },
  DAType: {
    identity: Me,
    selector: He,
    parents: ["DataTypeTemplates"],
    children: [...Be, "BDA", "ProtNs"]
  },
  DO: {
    identity: D,
    selector: k,
    parents: ["LNodeType"],
    children: [...R]
  },
  DOI: {
    identity: D,
    selector: k,
    parents: [...Ie],
    children: [...R, "SDI", "DAI"]
  },
  DOType: {
    identity: Me,
    selector: He,
    parents: ["DataTypeTemplates"],
    children: [...Be, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: D,
    selector: k,
    parents: [...Ie],
    children: [...ve, "FCDA"]
  },
  DataSetDirectory: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: v,
    selector: S,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: Me,
    selector: He,
    parents: ["DataTypeTemplates"],
    children: [...Be, "EnumVal"]
  },
  EnumVal: {
    identity: Rr,
    selector: Vr,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: D,
    selector: k,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...jt]
  },
  EqSubFunction: {
    identity: D,
    selector: k,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...jt]
  },
  ExtRef: {
    identity: wr,
    selector: xr,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: Sr,
    selector: Ar,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: D,
    selector: k,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...Se,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: D,
    selector: k,
    parents: [
      "SubFunction",
      "Function",
      ...gi,
      ...yi,
      ...ht
    ],
    children: [...ft, "EqFunction"]
  },
  GetCBValues: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: D,
    selector: k,
    parents: ["AccessPoint"],
    children: [...ve, "Subject", "IssuerName"]
  },
  GSE: {
    identity: Ft,
    selector: Ot,
    parents: ["ConnectedAP"],
    children: [...Ht, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: D,
    selector: k,
    parents: ["LN0"],
    children: [...Bt, "Protocol"]
  },
  GSESettings: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: v,
    selector: S,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: v,
    selector: S,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: cr,
    selector: lr,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: D,
    selector: k,
    parents: ["SCL"],
    children: [...R, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: yr,
    selector: vr,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: v,
    selector: S,
    parents: [...Ie],
    children: [...R, "ExtRef"]
  },
  IssuerName: {
    identity: v,
    selector: S,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: mr,
    selector: pr,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: br,
    selector: gr,
    parents: ["Server"],
    children: [...R, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: Er,
    selector: Ir,
    parents: ["AccessPoint", "LDevice"],
    children: [...Gt]
  },
  LN0: {
    identity: v,
    selector: S,
    parents: ["LDevice"],
    children: [
      ...Gt,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: dr,
    selector: ur,
    parents: [...vi],
    children: [...R]
  },
  LNodeType: {
    identity: Me,
    selector: He,
    parents: ["DataTypeTemplates"],
    children: [...Be, "DO"]
  },
  Line: {
    identity: D,
    selector: k,
    parents: ["Process", "SCL"],
    children: [
      ...Wt,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: D,
    selector: k,
    parents: [...Ie],
    children: [...R]
  },
  LogControl: {
    identity: D,
    selector: k,
    parents: [...Ie],
    children: [...Ut]
  },
  LogSettings: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: v,
    selector: S,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: v,
    selector: S,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: v,
    selector: S,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: Pt,
    selector: Rt,
    parents: ["TransformerWinding"],
    children: [...R]
  },
  OptFields: {
    identity: v,
    selector: S,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: _r,
    selector: Pr,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: Tr,
    selector: Lr,
    parents: ["ConnectedAP"],
    children: [...R, "P"]
  },
  PowerTransformer: {
    identity: D,
    selector: k,
    parents: [...ht],
    children: [
      ...ft,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => V,
    parents: [],
    children: []
  },
  Process: {
    identity: D,
    selector: k,
    parents: ["Process", "SCL"],
    children: [
      ...Wt,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: Fr,
    selector: Or,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: v,
    selector: S,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: D,
    selector: k,
    parents: [...Ie],
    children: [...Ut, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: v,
    selector: S,
    parents: ["ReportControl"],
    children: [...R, "ClientLN"]
  },
  SamplesPerSec: {
    identity: v,
    selector: S,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: D,
    selector: k,
    parents: ["LN0"],
    children: [...Bt, "SmvOpts"]
  },
  SecPerSamples: {
    identity: v,
    selector: S,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: qr,
    selector: Mr,
    parents: [],
    children: [
      ...Qe,
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
    identity: Vt,
    selector: pt,
    parents: ["DOI", "SDI"],
    children: [...R, "SDI", "DAI"]
  },
  SDO: {
    identity: D,
    selector: k,
    parents: ["DOType"],
    children: [...ve]
  },
  Server: {
    identity: v,
    selector: S,
    parents: ["AccessPoint"],
    children: [
      ...R,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: v,
    selector: S,
    parents: ["AccessPoint"],
    children: [...R]
  },
  Services: {
    identity: v,
    selector: S,
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
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: v,
    selector: S,
    parents: ["LN0"],
    children: [...R]
  },
  SettingGroups: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: v,
    selector: S,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: v,
    selector: S,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: Ft,
    selector: Ot,
    parents: ["ConnectedAP"],
    children: [...Ht]
  },
  SmvOpts: {
    identity: v,
    selector: S,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: D,
    selector: k,
    parents: ["AccessPoint"],
    children: [...ve, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: D,
    selector: k,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...fi
    ],
    children: [...Se, "EqFunction"]
  },
  SubFunction: {
    identity: D,
    selector: k,
    parents: ["SubFunction", "Function"],
    children: [
      ...Se,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: D,
    selector: k,
    parents: ["Communication"],
    children: [...ve, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: v,
    selector: S,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: D,
    selector: k,
    parents: ["SCL"],
    children: [...nt, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: D,
    selector: k,
    parents: ["TransformerWinding"],
    children: [...Se, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: Pt,
    selector: Rt,
    parents: [...bi],
    children: [...R]
  },
  Text: {
    identity: v,
    selector: S,
    parents: Si.filter((e) => e !== "Text" && e !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: v,
    selector: S,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: D,
    selector: k,
    parents: ["PowerTransformer"],
    children: [
      ...Mt,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: v,
    selector: S,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: Cr,
    selector: Dr,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: v,
    selector: S,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: v,
    selector: S,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: D,
    selector: k,
    parents: ["Substation"],
    children: [...nt, "Voltage", "Bay", "Function"]
  }
};
function G(e, t) {
  return typeof t != "string" ? V : xt(e) ? F[e].selector(e, t) : e;
}
function de(e, t, i) {
  if (typeof i != "string" || !xt(t)) return null;
  const n = e.querySelector(F[t].selector(t, i));
  return n === null || ie(n) ? n : Array.from(
    e.querySelectorAll(F[t].selector(t, i))
  ).find(ie) ?? null;
}
function z(e) {
  if (e === null) return NaN;
  if (e.closest("Private")) return NaN;
  const t = e.tagName;
  return xt(t) ? F[t].identity(e) : NaN;
}
ei((e) => (t) => {
  Object.keys(e).length ? t.setValue(e) : t.setValue("");
});
const Ve = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  decimal: "[+\\-]?[0-9]+(([.][0-9]*)?|([.][0-9]+))",
  unsigned: "[+]?[0-9]+(([.][0-9]*)?|([.][0-9]+))"
};
function ca(e, t) {
  return typeof e == "string" && typeof t == "string" ? e.localeCompare(t) : typeof e == "object" && typeof t == "string" ? (e.getAttribute("name") ?? "").localeCompare(t) : typeof e == "string" && typeof t == "object" ? e.localeCompare(t.getAttribute("name")) : typeof e == "object" && typeof t == "object" ? (e.getAttribute("name") ?? "").localeCompare(
    t.getAttribute("name") ?? ""
  ) : 0;
}
function H(...e) {
  return e.reduce(
    (t, i) => t.flatMap((n) => i.map((r) => [n, r].flat())),
    [[]]
  );
}
function xi(e, t = /* @__PURE__ */ new WeakSet()) {
  if (t.has(e)) return 1 / 0;
  switch (e?.constructor) {
    case Object:
    case Array:
      return t.add(e), 1 + Math.max(
        -1,
        ...Object.values(e).map((i) => xi(i, t))
      );
    default:
      return 0;
  }
}
function ie(e) {
  return !e.closest("Private");
}
const la = 99, da = Array(la).fill(1).map((e, t) => `${t + 1}`);
function ua(e) {
  const t = /* @__PURE__ */ new Map();
  return (i) => {
    if (!t.has(i)) {
      const n = new Set(
        M(e, "LNode").filter((r) => r.getAttribute("lnClass") === i).map((r) => r.getAttribute("lnInst"))
      );
      t.set(i, () => {
        const r = da.find((a) => !n.has(a));
        return r && n.add(r), r;
      });
    }
    return t.get(i)();
  };
}
function ma(e, t) {
  const i = {};
  return Array.from(e.attributes).forEach((n) => {
    i[n.name] = n.value;
  }), { element: e, oldAttributes: i, newAttributes: t };
}
function Et(e, t = "user", i) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { action: e, initiator: t, ...i?.detail }
  });
}
const Ei = {
  IED: [
    {
      attributeName: "iedName",
      filter: Ee("Association")
    },
    {
      attributeName: "iedName",
      filter: Ee("ClientLN")
    },
    {
      attributeName: "iedName",
      filter: Ee("ConnectedAP")
    },
    {
      attributeName: "iedName",
      filter: Ee("ExtRef")
    },
    {
      attributeName: "iedName",
      filter: Ee("KDC")
    },
    {
      attributeName: "iedName",
      filter: Ee("LNode")
    },
    {
      attributeName: null,
      filter: rt("GSEControl > IEDName")
    },
    {
      attributeName: null,
      filter: rt("SampledValueControl > IEDName")
    },
    {
      attributeName: null,
      filter: rt("LN > DOI > DAI > Val")
    }
  ],
  Substation: [
    {
      attributeName: "substationName",
      filter: Ee("Terminal")
    }
  ],
  VoltageLevel: [
    {
      attributeName: "voltageLevelName",
      filter: Kt("Terminal", {
        Substation: "substationName"
      })
    }
  ],
  Bay: [
    {
      attributeName: "bayName",
      filter: Kt("Terminal", {
        Substation: "substationName",
        VoltageLevel: "voltageLevelName"
      })
    }
  ]
};
function Ee(e) {
  return function(i, n, r) {
    return `${e}[${n}="${r}"]`;
  };
}
function rt(e) {
  return function() {
    return `${e}`;
  };
}
function Kt(e, t) {
  return function(n, r, a) {
    return `${e}${Object.entries(t).map(([o, c]) => {
      const l = n.closest(o);
      if (l && l.hasAttribute("name")) {
        const u = l.getAttribute("name");
        return `[${c}="${u}"]`;
      }
      return null;
    }).join("")}[${r}="${a}"]`;
  };
}
function pa(e, t, i) {
  const n = e.cloneNode(!1);
  return n.setAttribute(t, i), n;
}
function Ii(e, t) {
  const i = e.cloneNode(!1);
  return i.textContent = t, i;
}
function It(e, t, i) {
  if (t === null || t === i)
    return [];
  const n = Ei[e.tagName];
  if (n === void 0)
    return [];
  const r = [];
  return n.forEach((a) => {
    const o = a.filter(e, a.attributeName, t);
    a.attributeName ? Array.from(e.ownerDocument.querySelectorAll(`${o}`)).filter(ie).forEach((c) => {
      const l = pa(
        c,
        a.attributeName,
        i
      );
      r.push({ old: { element: c }, new: { element: l } });
    }) : Array.from(e.ownerDocument.querySelectorAll(`${o}`)).filter((c) => c.textContent === t).filter(ie).forEach((c) => {
      const l = Ii(c, i);
      r.push({ old: { element: c }, new: { element: l } });
    });
  }), e.tagName === "IED" && r.push(...ha(e, t, i)), r;
}
function ha(e, t, i) {
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
    ), l = c?.getAttribute("srcLDInst") + "/" + c?.getAttribute("srcLNClass") + "." + c?.getAttribute("srcCBName");
    for (let u of o)
      if (t + l === u.textContent.trim()) {
        const m = Ii(
          u,
          i + l
        );
        n.push({
          old: { element: u },
          new: { element: m }
        });
        break;
      }
  }), n;
}
function Ni(e) {
  const t = sr(e) ?? null;
  if (t === null)
    return [];
  const i = Ei[e.tagName];
  if (i === void 0)
    return [];
  const n = [];
  return i.forEach((r) => {
    const a = r.filter(e, r.attributeName, t);
    r.attributeName ? Array.from(e.ownerDocument.querySelectorAll(`${a}`)).filter(ie).forEach((o) => {
      n.push({ old: { parent: o.parentElement, element: o } });
    }) : Array.from(e.ownerDocument.querySelectorAll(`${a}`)).filter((o) => o.textContent === t).filter(ie).forEach((o) => {
      o.parentElement && n.push({
        old: {
          parent: o.parentElement.parentElement,
          element: o.parentElement
        }
      });
    });
  }), n;
}
function ki(e) {
  return (t) => {
    const i = f(t.find((a) => a.label === "name")), n = f(t.find((a) => a.label === "desc"));
    if (i === e.getAttribute("name") && n === e.getAttribute("desc"))
      return [];
    const r = $(e, { name: i, desc: n });
    return [{ old: { element: e }, new: { element: r } }];
  };
}
function fa(e, t) {
  return (i) => {
    const n = f(i.find((l) => l.label === "name")), r = e.getAttribute("name"), a = f(i.find((l) => l.label === "desc"));
    if (n === r && a === e.getAttribute("desc"))
      return [];
    const o = $(e, { name: n, desc: a }), c = {
      actions: [],
      title: s(t, { name: n })
    };
    return c.actions.push({
      old: { element: e },
      new: { element: o }
    }), c.actions.push(...It(e, r, n)), c.actions.length ? [c] : [];
  };
}
function Ci(e, t) {
  return (i) => {
    const n = {};
    if (ba(n, e, i), Object.keys(n).length == 0)
      return [];
    ga(e, n);
    const r = f(i.find((o) => o.label === "name")), a = {
      actions: [],
      title: s(t, { name: r })
    };
    return a.actions.push(ma(e, n)), a.actions.push(
      ...It(e, e.getAttribute("name"), r)
    ), a.actions.length ? [a] : [];
  };
}
function ba(e, t, i) {
  const n = f(i.find((a) => a.label === "name")), r = f(i.find((a) => a.label === "desc"));
  n !== t.getAttribute("name") && (e.name = n), r !== t.getAttribute("desc") && (e.desc = r);
}
function ga(e, t) {
  const i = Object.keys(t);
  return Array.from(e.attributes).filter((n) => !i.includes(n.name)).forEach((n) => {
    t[n.name] = n.value;
  }), t;
}
function Di(e, t) {
  return [
    w`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${s("bay.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${s("bay.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function ya(e) {
  return (t) => {
    const i = f(t.find((o) => o.label === "name")), n = f(t.find((o) => o.label === "desc")), r = C(e.ownerDocument, "Bay", {
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
function va(e) {
  return [
    {
      title: s("bay.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: s("add"),
        action: ya(e)
      },
      content: Di("", "")
    }
  ];
}
function Sa(e) {
  return [
    {
      title: s("bay.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: s("save"),
        action: fa(
          e,
          "bay.action.updateBay"
        )
      },
      content: Di(
        e.getAttribute("name"),
        e.getAttribute("desc")
      )
    }
  ];
}
const bt = {
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
function Aa(e) {
  if (!e) return null;
  const [t, i, n, r, a] = [
    "lnInst",
    "lnClass",
    "iedName",
    "ldInst",
    "prefix"
  ].map((m) => e?.getAttribute(m)), o = [`IED[name="${n}"]`, "IED"], c = ["AccessPoint > Server"], l = [
    `LDevice[inst="${r}"] > LN[inst="${t}"][lnClass="${i}"]`
  ], u = a && a !== "" ? [`[prefix="${a}"]`] : ['[prefix=""]', ":not(prefix)"];
  return e.ownerDocument.querySelector(
    H(
      o,
      [" > "],
      c,
      [" > "],
      l,
      u
    ).map((m) => m.join("")).join(",")
  );
}
function zi(e) {
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
function wa(e) {
  const t = e.querySelector(
    'DOI[name="SwTyp"] > DAI[name="stVal"]'
  );
  return t ? t.querySelector("Val")?.innerHTML.trim() : zi(e);
}
function xa(e) {
  return Array.from(e.querySelectorAll("Terminal")).some(
    (t) => t.getAttribute("cNodeName") === "grounded"
  );
}
function Ea(e) {
  const t = e.querySelector('LNode[lnClass="XSWI"]'), i = Aa(t);
  let n;
  return i ? n = wa(i) : t && (n = zi(t)), n ? ["Earthing Switch", "High Speed Earthing Switch"].includes(n) : !1;
}
function Ia(e) {
  return e.getAttribute("type") === "DIS" && (xa(e) || Ea(e)) ? "ERS" : e.getAttribute("type") ?? "";
}
function Na(e) {
  return bt[Ia(e)] ?? s("conductingequipment.unknownType");
}
function ka(e, t) {
  return e === "create" ? p`<mwc-select
        style="--mdc-menu-max-height: 196px;"
        required
        label="type"
        helper="${s("conductingequipment.wizard.typeHelper")}"
        validationMessage="${s("textfield.required")}"
      >
        ${Object.keys(bt).map(
    (i) => p`<mwc-list-item value="${i}">${bt[i]}</mwc-list-item>`
  )}
      </mwc-select>` : p`<mwc-select
        label="type"
        helper="${s("conductingequipment.wizard.typeHelper")}"
        validationMessage="${s("textfield.required")}"
        disabled
      >
        <mwc-list-item selected value="0">${t}</mwc-list-item>
      </mwc-select>`;
}
function $i(e, t, i, n, r) {
  return [
    ka(i, n),
    p`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${s("conductingequipment.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${r}
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${s("conductingequipment.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function Ca(e) {
  return (t) => {
    const i = f(t.find((N) => N.label === "name")), n = f(t.find((N) => N.label === "desc")), r = f(t.find((N) => N.label === "type")), a = r === "ERS" ? "DIS" : r, o = C(e.ownerDocument, "ConductingEquipment", {
      name: i,
      type: a,
      desc: n
    });
    if (r !== "ERS") return [{ new: { parent: e, element: o } }];
    const c = e.closest("VoltageLevel")?.querySelector('ConnectivityNode[name="grounded"]'), l = c ? c.closest("Substation")?.getAttribute("name") ?? null : e.closest("Substation")?.getAttribute("name") ?? null, u = c ? c.closest("VoltageLevel")?.getAttribute("name") ?? null : e.closest("VoltageLevel")?.getAttribute("name") ?? null, m = c ? c.closest("Bay")?.getAttribute("name") ?? null : e.closest("Bay")?.getAttribute("name") ?? null, h = m && u && l ? l + "/" + u + "/" + m + "/grounded" : null;
    o.appendChild(
      C(e.ownerDocument, "Terminal", {
        name: "T1",
        cNodeName: "grounded",
        substationName: l,
        voltageLevelName: u,
        bayName: m,
        connectivityNode: h
      })
    );
    const b = {
      new: {
        parent: e,
        element: o
      }
    };
    if (c) return [b];
    const y = C(
      e.ownerDocument,
      "ConnectivityNode",
      {
        name: "grounded",
        pathName: h
      }
    );
    return [b, {
      new: {
        parent: e,
        element: y
      }
    }];
  };
}
function Ti(e, t) {
  return Array.from(e.querySelectorAll("ConductingEquipment")).filter(ie).map((i) => i.getAttribute("name") ?? "").filter((i) => t && i !== t);
}
function Da(e) {
  const t = Ti(e);
  return [
    {
      title: s("conductingequipment.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: s("add"),
        action: Ca(e)
      },
      content: $i(
        "",
        "",
        "create",
        "",
        t
      )
    }
  ];
}
function za(e) {
  const t = Ti(
    e.parentNode,
    e.getAttribute("name")
  );
  return [
    {
      title: s("conductingequipment.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: s("save"),
        action: ki(e)
      },
      content: $i(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        "edit",
        Na(e),
        t
      )
    }
  ];
}
function $a(e, t, i) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${s("connectivitynode.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${i}
      readonly
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="pathName"
      .maybeValue=${t}
      helper="${s("connectivitynode.wizard.pathNameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function Ta(e) {
  const t = Array.from(
    e.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(ie).map((i) => i.getAttribute("name") ?? "").filter((i) => i !== e.getAttribute("name"));
  return [
    {
      title: s("connectivitynode.wizard.title.edit"),
      element: e,
      content: $a(
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
const Xt = /* @__PURE__ */ new WeakMap(), Zt = 2147483647, La = Ke((...e) => (t) => {
  let i = Xt.get(t);
  i === void 0 && (i = {
    lastRenderedIndex: Zt,
    values: []
  }, Xt.set(t, i));
  const n = i.values;
  let r = n.length;
  i.values = e;
  for (let a = 0; a < e.length && !(a > i.lastRenderedIndex); a++) {
    const o = e[a];
    if (si(o) || typeof o.then != "function") {
      t.setValue(o), i.lastRenderedIndex = a;
      break;
    }
    a < r && o === n[a] || (i.lastRenderedIndex = Zt, r = 0, Promise.resolve(o).then((c) => {
      const l = i.values.indexOf(o);
      l > -1 && l < i.lastRenderedIndex && (i.lastRenderedIndex = l, t.setValue(c), t.commit());
    }));
  }
});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Fe extends B {
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
      <span class=${Ze(t)}>
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
g([
  K("slot")
], Fe.prototype, "slotElement", void 0);
g([
  K("mwc-checkbox")
], Fe.prototype, "checkboxElement", void 0);
g([
  A({ type: Boolean })
], Fe.prototype, "left", void 0);
g([
  A({ type: String, reflect: !0 })
], Fe.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const _a = $e`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ze = class extends Fe {
};
ze.styles = [pi, _a];
ze = g([
  he("mwc-check-list-item")
], ze);
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
var I = {
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
}, X = /* @__PURE__ */ new Set();
X.add(I.BACKSPACE);
X.add(I.ENTER);
X.add(I.SPACEBAR);
X.add(I.PAGE_UP);
X.add(I.PAGE_DOWN);
X.add(I.END);
X.add(I.HOME);
X.add(I.ARROW_LEFT);
X.add(I.ARROW_UP);
X.add(I.ARROW_RIGHT);
X.add(I.ARROW_DOWN);
X.add(I.DELETE);
X.add(I.ESCAPE);
X.add(I.TAB);
var ee = {
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
}, Z = /* @__PURE__ */ new Map();
Z.set(ee.BACKSPACE, I.BACKSPACE);
Z.set(ee.ENTER, I.ENTER);
Z.set(ee.SPACEBAR, I.SPACEBAR);
Z.set(ee.PAGE_UP, I.PAGE_UP);
Z.set(ee.PAGE_DOWN, I.PAGE_DOWN);
Z.set(ee.END, I.END);
Z.set(ee.HOME, I.HOME);
Z.set(ee.ARROW_LEFT, I.ARROW_LEFT);
Z.set(ee.ARROW_UP, I.ARROW_UP);
Z.set(ee.ARROW_RIGHT, I.ARROW_RIGHT);
Z.set(ee.ARROW_DOWN, I.ARROW_DOWN);
Z.set(ee.DELETE, I.DELETE);
Z.set(ee.ESCAPE, I.ESCAPE);
Z.set(ee.TAB, I.TAB);
var we = /* @__PURE__ */ new Set();
we.add(I.PAGE_UP);
we.add(I.PAGE_DOWN);
we.add(I.END);
we.add(I.HOME);
we.add(I.ARROW_LEFT);
we.add(I.ARROW_UP);
we.add(I.ARROW_RIGHT);
we.add(I.ARROW_DOWN);
function ge(e) {
  var t = e.key;
  if (X.has(t))
    return t;
  var i = Z.get(e.keyCode);
  return i || I.UNKNOWN;
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
var ye, ce, _ = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
ye = {}, ye["" + _.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", ye["" + _.LIST_ITEM_CLASS] = "mdc-list-item", ye["" + _.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", ye["" + _.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", ye["" + _.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", ye["" + _.ROOT] = "mdc-list";
var De = (ce = {}, ce["" + _.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", ce["" + _.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", ce["" + _.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", ce["" + _.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", ce["" + _.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", ce["" + _.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", ce["" + _.ROOT] = "mdc-deprecated-list", ce), Ge = {
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
    .` + De[_.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + De[_.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + _.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + _.LIST_ITEM_CLASS + ` a,
    .` + _.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + _.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + De[_.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + De[_.LIST_ITEM_CLASS] + ` a,
    .` + De[_.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + De[_.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, J = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const gt = (e, t) => e - t, Pa = (e, t) => {
  const i = Array.from(e), n = Array.from(t), r = { added: [], removed: [] }, a = i.sort(gt), o = n.sort(gt);
  let c = 0, l = 0;
  for (; c < a.length || l < o.length; ) {
    const u = a[c], m = o[l];
    if (u === m) {
      c++, l++;
      continue;
    }
    if (u !== void 0 && (m === void 0 || u < m)) {
      r.removed.push(u), c++;
      continue;
    }
    if (m !== void 0 && (u === void 0 || m < u)) {
      r.added.push(m), l++;
      continue;
    }
  }
  return r;
}, Ra = ["input", "button", "textarea", "select"];
function Pe(e) {
  return e instanceof Set;
}
const at = (e) => {
  const t = e === J.UNSET_INDEX ? /* @__PURE__ */ new Set() : e;
  return Pe(t) ? new Set(t) : /* @__PURE__ */ new Set([t]);
};
class Nt extends ui {
  constructor(t) {
    super(Object.assign(Object.assign({}, Nt.defaultAdapter), t)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = J.UNSET_INDEX, this.focusedItemIndex_ = J.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return Ge;
  }
  static get numbers() {
    return J;
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
      if (!Pe(i)) {
        const n = i === J.UNSET_INDEX;
        this.selectedIndex_ = n ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
    } else if (Pe(i))
      if (i.size) {
        const n = Array.from(i).sort(gt);
        this.selectedIndex_ = n[0];
      } else
        this.selectedIndex_ = J.UNSET_INDEX;
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
    this.isIndexValid_(t) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(at(t)) : this.setSingleSelectionAtIndex_(t));
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
    const r = ge(t) === "ArrowLeft", a = ge(t) === "ArrowUp", o = ge(t) === "ArrowRight", c = ge(t) === "ArrowDown", l = ge(t) === "Home", u = ge(t) === "End", m = ge(t) === "Enter", h = ge(t) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      a || u ? (t.preventDefault(), this.focusLastElement()) : (c || l) && (t.preventDefault(), this.focusFirstElement());
      return;
    }
    let b = this.adapter.getFocusedElementIndex();
    if (b === -1 && (b = n, b < 0))
      return;
    let y;
    if (this.isVertical_ && c || !this.isVertical_ && o)
      this.preventDefaultEvent(t), y = this.focusNextElement(b);
    else if (this.isVertical_ && a || !this.isVertical_ && r)
      this.preventDefaultEvent(t), y = this.focusPrevElement(b);
    else if (l)
      this.preventDefaultEvent(t), y = this.focusFirstElement();
    else if (u)
      this.preventDefaultEvent(t), y = this.focusLastElement();
    else if ((m || h) && i) {
      const x = t.target;
      if (x && x.tagName === "A" && m)
        return;
      this.preventDefaultEvent(t), this.setSelectedIndexOnAction_(b, !0);
    }
    this.focusedItemIndex_ = b, y !== void 0 && (this.setTabindexAtIndex_(y), this.focusedItemIndex_ = y);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(t, i, n) {
    t !== J.UNSET_INDEX && (this.setSelectedIndexOnAction_(t, i, n), this.setTabindexAtIndex_(t), this.focusedItemIndex_ = t);
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
    Ra.indexOf(n) === -1 && t.preventDefault();
  }
  setSingleSelectionAtIndex_(t, i = !0) {
    this.selectedIndex_ !== t && (this.selectedIndex_ !== J.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), i && this.adapter.setSelectedStateForElementIndex(t, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(t, !0), this.setAriaForSingleSelectionAtIndex_(t), this.selectedIndex_ = t, this.adapter.notifySelected(t));
  }
  setMultiSelectionAtIndex_(t, i = !0) {
    const n = at(this.selectedIndex_), r = Pa(n, t);
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
    this.selectedIndex_ === J.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(t, Ge.ARIA_CURRENT));
    const i = this.ariaCurrentAttrValue_ !== null, n = i ? Ge.ARIA_CURRENT : Ge.ARIA_SELECTED;
    this.selectedIndex_ !== J.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, n, "false");
    const r = i ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(t, n, r);
  }
  setTabindexAtIndex_(t) {
    this.focusedItemIndex_ === J.UNSET_INDEX && t !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== t && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(t, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let t = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== J.UNSET_INDEX ? t = this.selectedIndex_ : Pe(this.selectedIndex_) && this.selectedIndex_.size > 0 && (t = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(t);
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
      return t === J.UNSET_INDEX || this.isIndexInRange_(t);
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
    this.isMulti_ && (r = /* @__PURE__ */ new Set([t])), this.isIndexValid_(r) && (this.isMulti_ ? this.toggleMultiAtIndex(t, n, i) : i || n ? this.setSingleSelectionAtIndex_(t, i) : this.selectedIndex_ === t && this.setSingleSelectionAtIndex_(J.UNSET_INDEX), i && this.adapter.notifyAction(t));
  }
  toggleMultiAtIndex(t, i, n = !0) {
    let r = !1;
    i === void 0 ? r = !this.adapter.getSelectedStateForElementIndex(t) : r = i;
    const a = at(this.selectedIndex_);
    r ? a.add(t) : a.delete(t), this.setMultiSelectionAtIndex_(a, n);
  }
}
function Va(e, t = 50) {
  let i;
  return function(n = !0) {
    clearTimeout(i), i = setTimeout(() => {
      e(n);
    }, t);
  };
}
const We = (e) => e.hasAttribute("mwc-list-item");
function Fa() {
  const e = this.itemsReadyResolver;
  this.itemsReady = new Promise((t) => this.itemsReadyResolver = t), e();
}
class te extends St {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = Nt, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const t = Va(this.layout.bind(this));
    this.debouncedLayout = (i = !0) => {
      Fa.call(this), t(i);
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
      We(o) && (n.push(o), o._managingList = this), o.hasAttribute("divider") && !o.hasAttribute("role") && o.setAttribute("role", "separator");
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
    if (!Pe(t))
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
          role="${le(t)}"
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
      const i = this.getIndexOfTarget(t), n = t.target, r = We(n);
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
      if (Mn(r) && We(r) && (a = i.indexOf(r)), a !== -1)
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
      isFocusInsideList: () => Bn(this),
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
    const t = di();
    if (!t.length)
      return -1;
    for (let i = t.length - 1; i >= 0; i--) {
      const n = t[i];
      if (We(n))
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
g([
  A({ type: String })
], te.prototype, "emptyMessage", void 0);
g([
  K(".mdc-deprecated-list")
], te.prototype, "mdcRoot", void 0);
g([
  ni("", !0, "*")
], te.prototype, "assignedElements", void 0);
g([
  ni("", !0, '[tabindex="0"]')
], te.prototype, "tabbableElements", void 0);
g([
  A({ type: Boolean }),
  Ae(function(e) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(e);
  })
], te.prototype, "activatable", void 0);
g([
  A({ type: Boolean }),
  Ae(function(e, t) {
    this.mdcFoundation && this.mdcFoundation.setMulti(e), t !== void 0 && this.layout();
  })
], te.prototype, "multi", void 0);
g([
  A({ type: Boolean }),
  Ae(function(e) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(e);
  })
], te.prototype, "wrapFocus", void 0);
g([
  A({ type: String }),
  Ae(function(e, t) {
    t !== void 0 && this.updateItems();
  })
], te.prototype, "itemRoles", void 0);
g([
  A({ type: String })
], te.prototype, "innerRole", void 0);
g([
  A({ type: String })
], te.prototype, "innerAriaLabel", void 0);
g([
  A({ type: Boolean })
], te.prototype, "rootTabbable", void 0);
g([
  A({ type: Boolean, reflect: !0 }),
  Ae(function(e) {
    var t, i;
    if (e) {
      const n = (i = (t = this.tabbableElements) === null || t === void 0 ? void 0 : t[0]) !== null && i !== void 0 ? i : null;
      this.previousTabindex = n, n && n.setAttribute("tabindex", "-1");
    } else !e && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], te.prototype, "noninteractive", void 0);
var Oa = Object.defineProperty, qa = Object.getOwnPropertyDescriptor, Ce = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? qa(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && Oa(t, i, r), r;
};
function yt(e) {
  return !e.closest("filtered-list") || !e.parentElement || e.parentElement instanceof oe ? e : yt(e.parentElement);
}
function Ma(e, t) {
  const i = e.innerText + `
`, n = Array.from(e.children).map((c) => c.innerText).join(`
`), r = e.value, a = (i + n + r).toUpperCase(), o = t.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  o.length === 1 && o[0] === "" || o.every((c) => new RegExp(
    `*${c}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(a)) ? yt(e).classList.remove("hidden") : yt(e).classList.add("hidden");
}
let oe = class extends te {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((e) => e instanceof ze);
  }
  get isAllSelected() {
    return this.items.filter((e) => !e.disabled).filter((e) => e instanceof ze).every((e) => e.selected);
  }
  get isSomeSelected() {
    return this.items.filter((e) => !e.disabled).filter((e) => e instanceof ze).some((e) => e.selected);
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
      (e) => Ma(e, this.searchField.value)
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
        <abbr title="${this.searchFieldLabel ?? s("filter")}"
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
oe.styles = $e`
    ${An(En.styles)}

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
Ce([
  A({ type: String })
], oe.prototype, "searchFieldLabel", 2);
Ce([
  A({ type: Boolean })
], oe.prototype, "disableCheckAll", 2);
Ce([
  P()
], oe.prototype, "existCheckListItem", 1);
Ce([
  P()
], oe.prototype, "isAllSelected", 1);
Ce([
  P()
], oe.prototype, "isSomeSelected", 1);
Ce([
  K("mwc-textfield")
], oe.prototype, "searchField", 2);
oe = Ce([
  he("filtered-list")
], oe);
var Ha = Object.defineProperty, Ba = Object.getOwnPropertyDescriptor, fe = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Ba(t, i) : t, a = e.length - 1, o; a >= 0; a--)
    (o = e[a]) && (r = (n ? o(t, i, r) : o(r)) || r);
  return n && r && Ha(t, i, r), r;
};
const Ga = p`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${s("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let ae = class extends je {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (e) => ({
      path: e,
      header: p`<h2>${"/" + e.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return xi(this.selection);
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
        p`${le(r)} ${this.renderDirectory(o, a)}`
      );
    return n.length === 0 ? p`` : p`<div class="column">${n}</div>`;
  }
  render() {
    const e = new Array(this.depth).fill(0).map((t, i) => this.renderColumn(i));
    return this.loaded = Promise.allSettled(e).then(), p`<div class="pane">
      ${e.map((t) => La(t, Ga))}
    </div>`;
  }
};
ae.styles = $e`
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
fe([
  A({ type: Object })
], ae.prototype, "selection", 2);
fe([
  A({ type: Boolean })
], ae.prototype, "multi", 2);
fe([
  A({ type: Number })
], ae.prototype, "depth", 1);
fe([
  A({ type: Array })
], ae.prototype, "paths", 1);
fe([
  A({ type: Array })
], ae.prototype, "path", 1);
fe([
  A({ attribute: !1 })
], ae.prototype, "read", 2);
fe([
  A({ attribute: !1 })
], ae.prototype, "loaded", 2);
fe([
  K("div")
], ae.prototype, "container", 2);
ae = fe([
  he("finder-list")
], ae);
function Wa(e) {
  return e.startsWith("IED:") ? e.replace(/^.*:/, "").trim() : e.startsWith("LN0:") ? "LLN0" : e.replace(/^.*>/, "").trim();
}
function Ua(e, t) {
  return async (i) => {
    const [n, r] = i[i.length - 1]?.split(": ", 2), a = de(e, n, r);
    return a ? {
      path: i,
      header: void 0,
      entries: t(a).map(
        (o) => `${o.tagName}: ${z(o)}`
      )
    } : { path: i, header: p`<p>${s("error")}</p>`, entries: [] };
  };
}
function Li(e) {
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
function ja(e) {
  return p`<finder-list
    multi
    .paths=${[["Server: " + z(e)]]}
    .read=${Ua(e.ownerDocument, Li)}
    .getDisplayString=${Wa}
    .getTitle=${(t) => t[t.length - 1]}
  ></finder-list>`;
}
function Ka(e, t) {
  const [i, n] = t[t.length - 1].split(": "), r = de(e.ownerDocument, i, n);
  if (!r || Li(r).length > 0) return;
  const a = t.find((T) => T.startsWith("LN"));
  if (!a) return;
  const [o, c] = a.split(": "), l = de(e.ownerDocument, o, c);
  if (!l) return;
  const u = l.closest("LDevice")?.getAttribute("inst"), m = l.getAttribute("prefix") ?? "", h = l.getAttribute("lnClass"), b = l.getAttribute("inst") && l.getAttribute("inst") !== "" ? l.getAttribute("inst") : null;
  let y = "", x = "", N = "";
  for (const T of t) {
    const [E, Q] = T.split(": ");
    if (!["DO", "DA", "SDO", "BDA"].includes(E)) continue;
    const se = de(e.ownerDocument, E, Q);
    if (!se) return;
    const be = se.getAttribute("name");
    E === "DO" && (y = be), E === "SDO" && (y = y + "." + be), E === "DA" && (x = be, N = se.getAttribute("fc") ?? ""), E === "BDA" && (x = x + "." + be);
  }
  if (!(!u || !h || !y || !x || !N))
    return C(e.ownerDocument, "FCDA", {
      ldInst: u,
      prefix: m,
      lnClass: h,
      lnInst: b,
      doName: y,
      daName: x,
      fc: N
    });
}
function Xa(e) {
  return (t, i) => {
    const r = i.shadowRoot.querySelector("finder-list")?.paths ?? [], a = [];
    for (const o of r) {
      const c = Ka(e, o);
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
function _i(e) {
  const t = e.closest("Server");
  return [
    {
      title: s("wizard.title.add", { tagName: "FCDA" }),
      primary: {
        label: "add",
        icon: "add",
        action: Xa(e)
      },
      content: [t ? ja(t) : p``]
    }
  ];
}
const ue = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  asciName: "[A-Za-z][0-9,A-Z,a-z_]*",
  abstractDataAttributeName: "((T)|(Test)|(Check)|(SIUnit)|(Oper)|(SBO)|(SBOw)|(Cancel)|[a-z][0-9A-Za-z]*)"
}, kt = {
  cbName: 32,
  abstracDaName: 60
};
function ot(e, t) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { ...e, ...t?.detail }
  });
}
function Za(e) {
  return (t, i, n) => {
    const r = n.items.filter((c) => c.selected).map((c) => c.value).map((c) => de(e.ownerDocument, "LNodeType", c)).filter((c) => c !== null), a = ua(e);
    return r.map((c) => {
      const l = c.getAttribute("lnClass");
      if (!l) return null;
      const u = a(l);
      if (!u) {
        i.dispatchEvent(
          ot({
            kind: "error",
            title: s("lnode.log.title", { lnClass: l }),
            message: s("lnode.log.nonuniquelninst")
          })
        );
        return;
      }
      const m = M(e, "LNode").some(
        (x) => x.getAttribute("lnClass") === "LLN0"
      );
      if (l === "LLN0" && m) {
        i.dispatchEvent(
          ot({
            kind: "error",
            title: s("lnode.log.title", { lnClass: l }),
            message: s("lnode.log.uniqueln0", { lnClass: l })
          })
        );
        return;
      }
      const h = M(e, "LNode").some(
        (x) => x.getAttribute("lnClass") === "LPHD"
      );
      if (l === "LPHD" && h) {
        i.dispatchEvent(
          ot({
            kind: "error",
            title: s("lnode.log.title", { lnClass: l }),
            message: s("lnode.log.uniqueln0", { lnClass: l })
          })
        );
        return;
      }
      const b = l === "LLN0" ? "" : u, y = C(e.ownerDocument, "LNode", {
        iedName: "None",
        ldInst: null,
        prefix: null,
        lnClass: l,
        lnInst: b,
        lnType: c.getAttribute("id")
      });
      return { new: { parent: e, element: y } };
    }).filter((c) => c);
  };
}
function Qa(e) {
  return (t) => {
    t.dispatchEvent(pe()), t.dispatchEvent(pe(Vi(e)));
  };
}
function Pi(e) {
  const t = Array.from(
    e.ownerDocument.querySelectorAll("LNodeType")
  );
  return [
    {
      title: s("lnode.wizard.title.selectLNodeTypes"),
      menuActions: [
        {
          icon: "",
          label: s("lnode.wizard.reference"),
          action: Qa(e)
        }
      ],
      primary: {
        icon: "save",
        label: s("save"),
        action: Za(e)
      },
      content: [
        w`<filtered-list multi
          >${t.map((i) => {
          const n = i.getAttribute("lnClass") === "LLN0" && M(e, "LNode").some(
            (r) => r.getAttribute("lnClass") === "LLN0"
          ) || i.getAttribute("lnClass") === "LPHD" && M(e, "LNode").some(
            (r) => r.getAttribute("lnClass") === "LPHD"
          );
          return w`<mwc-check-list-item
              twoline
              value="${z(i)}"
              ?disabled=${n}
              ><span>${i.getAttribute("lnClass")}</span
              ><span slot="secondary"
                >${n ? s("lnode.wizard.uniquewarning") : z(i)}</span
              ></mwc-check-list-item
            >`;
        })}</filtered-list
        >`
      ]
    }
  ];
}
const Ya = {
  CBR: ["CSWI", "CILO", "XCBR"],
  DIS: ["CSWI", "CILO", "XSWI"],
  VTR: ["TVTR"],
  CTR: ["TCTR"],
  Bay: ["LLN0"],
  VoltageLevel: ["LLN0"],
  Substation: ["LLN0"]
};
function Ri(e, t) {
  return e.disabled !== t.disabled ? t.disabled ? -1 : 1 : e.preferred !== t.preferred ? e.preferred ? -1 : 1 : e.selected !== t.selected ? e.selected ? -1 : 1 : 0;
}
const Ja = "Client LN";
function Qt(e, t) {
  return Array.from(e.getElementsByTagName("LNode")).filter((i) => !i.closest("Private")).filter((i) => Ct(t, i))[0] ?? null;
}
function Ct(e, t) {
  return (t.getAttribute("iedName") ?? "") === (e.closest("IED")?.getAttribute("name") ?? "") && (t.getAttribute("ldInst") ?? "") === (e.closest("LDevice")?.getAttribute("inst") ?? "") && (t.getAttribute("prefix") ?? "") === (e.getAttribute("prefix") ?? "") && (t.getAttribute("lnClass") ?? "") === (e.getAttribute("lnClass") ?? "") && (t.getAttribute("lnInst") ?? "") === (e.getAttribute("inst") ?? "");
}
function eo(e, t) {
  const i = C(e.ownerDocument, "LNode", {
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
function to(e, t) {
  return {
    old: {
      parent: e,
      element: t,
      reference: t.nextElementSibling
    }
  };
}
function io(e, t) {
  return e.some((i) => Ct(i, t));
}
function no(e, t) {
  return t.some((i) => Ct(e, i));
}
function ro(e) {
  return (t, i, n) => {
    const r = n.items.filter((l) => l.selected).map((l) => l.value).map((l) => {
      const u = de(e.ownerDocument, "LN0", l);
      return u || de(e.ownerDocument, "LN", l);
    }).filter((l) => l !== null), a = M(e, "LNode").filter(
      ie
    ), o = a.filter((l) => !io(r, l)).map((l) => to(e, l)), c = r.filter((l) => !no(l, a)).map((l) => eo(e, l));
    return o.concat(c);
  };
}
function ao(e, t) {
  return e.parentElement?.parentElement?.nextElementSibling?.querySelector(
    t
  ) ?? null;
}
function oo(e, t) {
  if (!(e.target instanceof te)) return;
  const i = ao(e.target, "#lnList");
  if (i === null) return;
  const n = t.ownerDocument, o = e.target.selected.flatMap(
    (c) => Array.from(
      n.querySelectorAll(
        `:root > IED[name="${c.value}"] > AccessPoint > LN,:root > IED[name="${c.value}"] > AccessPoint > Server > LDevice > LN,:root > IED[name="${c.value}"] > AccessPoint > Server > LDevice > LN0`
      )
    ).filter((l) => !l.closest("Private"))
  ).filter((c) => c !== null).map((c) => {
    const l = Ya[t.getAttribute("type") ? t.getAttribute("type") ?? "" : t.tagName ?? ""]?.includes(c.getAttribute("lnClass") ?? "") ?? !1, u = Qt(t.ownerDocument, c), m = u?.parentElement === t;
    return {
      selected: m,
      disabled: u !== null && !m,
      prefered: l,
      element: c
    };
  }).sort(Ri).map((c) => w`<mwc-check-list-item
      ?selected=${c.selected}
      ?disabled=${c.disabled}
      value="${z(c.element)}"
      twoline
      ><span
        >${c.element.getAttribute("prefix") ?? ""}${c.element.getAttribute("lnClass")}${c.element.getAttribute(
    "inst"
  ) ?? ""}
        ${c.disabled ? w` <mwc-icon style="--mdc-icon-size: 1em;"
                >account_tree</mwc-icon
              >
              ${or(Qt(n, c.element))}` : ""}</span
      ><span slot="secondary"
        >${c.element.closest("IED")?.getAttribute("name") ?? ""} |
        ${c.element.closest("LDevice") ? c.element.closest("LDevice")?.getAttribute("inst") : Ja}</span
      ></mwc-check-list-item
    >`);
  ti(w`${o}`, i);
}
function so(e) {
  const t = e.ownerDocument;
  return t.querySelectorAll(":root > IED").length > 0 ? w`<filtered-list
      disableCheckAll
      multi
      id="iedList"
      @selected=${(i) => oo(i, e)}
      >${Array.from(t.querySelectorAll(":root > IED")).map((i) => i.getAttribute("name")).map((i) => ({
    selected: Array.from(e.children).filter((n) => !n.closest("Private")).filter(
      (n) => n.tagName === "LNode" && n.getAttribute("iedName") === i
    ).length > 0,
    iedName: i
  })).sort(Ri).map(
    (i) => w`<mwc-check-list-item
              value="${i.iedName ?? ""}"
              ?selected=${i.selected}
              >${i.iedName}</mwc-check-list-item
            >`
  )}</filtered-list
    >` : w`<mwc-list-item noninteractive graphic="icon">
      <span>${s("lnode.wizard.placeholder")}</span>
      <mwc-icon slot="graphic">info</mwc-icon>
    </mwc-list-item>`;
}
function co(e) {
  return (t) => {
    t.dispatchEvent(pe()), t.dispatchEvent(pe(Pi(e)));
  };
}
function Vi(e) {
  return [
    {
      title: s("lnode.wizard.title.selectIEDs"),
      menuActions: [
        {
          icon: "",
          label: s("lnode.wizard.instance"),
          action: co(e)
        }
      ],
      content: [so(e)]
    },
    {
      initial: Array.from(e.children).some(
        (t) => t.tagName === "LNode"
      ),
      title: s("lnode.wizard.title.selectLNs"),
      primary: {
        icon: "save",
        label: s("save"),
        action: ro(e)
      },
      content: [w`<filtered-list multi id="lnList"></filtered-list>`]
    }
  ];
}
function lo(e) {
  return e.tagName === "Function" || e.tagName === "SubFunction" || e.tagName === "EqFunction" || e.tagName === "EqSubFunction" ? Pi(e) : Vi(e);
}
function uo(e) {
  const t = e.iedName !== "None";
  return [
    w`<wizard-textfield
      label="iedName"
      .maybeValue=${e.iedName}
      helper="${s("scl.iedName")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="ldInst"
      .maybeValue=${e.ldInst}
      helper="${s("scl.ldInst")}"
      helperPersistent
      nullable
      disabled
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="prefix"
      .maybeValue=${e.prefix}
      helper="${s("scl.prefix")}"
      pattern="${ue.asciName}"
      maxLength="11"
      helperPersistent
      nullable
      ?disabled=${t}
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="lnClass"
      .maybeValue=${e.lnClass}
      helper="${s("scl.lnClass")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="lnInst"
      .maybeValue=${e.lnInst}
      helper="${s("scl.lnInst")}"
      helperPersistent
      type="number"
      min="1"
      max="99"
      .reservedValues=${e.reservedLnInst}
      ?disabled=${t}
    ></wizard-textfield>`
  ];
}
function mo(e) {
  return (t) => {
    const i = {}, n = ["iedName", "ldInst", "prefix", "lnClass", "lnInst"];
    n.forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    let r = null;
    if (n.some((a) => i[a] !== e.getAttribute(a))) {
      const a = $(e, i);
      return r = {
        old: { element: e },
        new: { element: a }
      }, [r];
    }
    return [];
  };
}
function po(e) {
  const [t, i, n, r, a] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((c) => e.getAttribute(c)), o = M(
    e.parentElement,
    "LNode"
  ).filter(
    (c) => c !== e && c.getAttribute("lnClass") === e.getAttribute("lnClass")
  ).map((c) => c.getAttribute("lnInst"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "LNode" }),
      element: e,
      primary: {
        label: s("save"),
        icon: "save",
        action: mo(e)
      },
      content: [
        ...uo({
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
function ho(e) {
  return Object.entries(e).map(
    ([t, i]) => p`<wizard-checkbox
        label="${t}"
        .maybeValue=${i}
        nullable
        helper="${s(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function fo(e) {
  return (t) => {
    const i = f(t.find((h) => h.label === "seqNum")), n = f(t.find((h) => h.label === "timeStamp")), r = f(t.find((h) => h.label === "dataSet")), a = f(t.find((h) => h.label === "reasonCode")), o = f(t.find((h) => h.label === "dataRef")), c = f(t.find((h) => h.label === "entryID")), l = f(t.find((h) => h.label === "configRef")), u = f(t.find((h) => h.label === "bufOvfl"));
    if (i === e.getAttribute("seqNum") && n === e.getAttribute("timeStamp") && r === e.getAttribute("dataSet") && a === e.getAttribute("reasonCode") && o === e.getAttribute("dataRef") && c === e.getAttribute("entryID") && l === e.getAttribute("configRef") && u === e.getAttribute("bufOvfl"))
      return [];
    const m = $(e, {
      seqNum: i,
      timeStamp: n,
      dataSet: r,
      reasonCode: a,
      dataRef: o,
      entryID: c,
      configRef: l,
      bufOvfl: u
    });
    return [{ old: { element: e }, new: { element: m } }];
  };
}
function bo(e) {
  const [
    t,
    i,
    n,
    r,
    a,
    o,
    c,
    l
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
      title: s("wizard.title.edit", { tagName: e.tagName }),
      primary: {
        icon: "save",
        label: s("save"),
        action: fo(e)
      },
      content: ho({
        seqNum: t,
        timeStamp: i,
        dataSet: n,
        reasonCode: r,
        dataRef: a,
        entryID: o,
        configRef: c,
        bufOvfl: l
      })
    }
  ];
}
let go = 1, Fi = 1, Oi = 1;
function yo(e, t) {
  return t.parentElement?.querySelectorAll(
    `LN[lnClass="CSWI"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="CILO"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="XCBR"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="XSWI"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""}`
  ).forEach((i) => {
    e.appendChild(
      C(t.ownerDocument, "LNode", {
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
function qi(e) {
  return e.parentElement?.querySelector(
    `LN[lnClass="XCBR"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""}`
  ) ? "CBR" : "DIS";
}
function vo(e) {
  return e.getAttribute("prefix") && e.getAttribute("inst") ? e.getAttribute("prefix") + e.getAttribute("inst") : e.getAttribute("inst") && qi(e) === "CBR" ? "QA" + Fi++ : "QB" + Oi++;
}
function So(e, t) {
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
function Ao(e) {
  return Array.from(
    e.querySelectorAll('AccessPoint > Server > LDevice > LN[lnClass="CSWI"]')
  );
}
function wo(e, t) {
  return e.parentElement ? Ao(e).filter((i) => So(i, t)) : [];
}
function xo(e, t) {
  const i = wo(e, t);
  if (Fi = 1, Oi = 1, i.length) {
    const n = C(e.ownerDocument, "Bay", {
      name: "Q" + go++,
      desc: "Bay for controller " + e.getAttribute("name")
    });
    return i.map((a) => yo(
      C(e.ownerDocument, "ConductingEquipment", {
        name: vo(a),
        type: qi(a)
      }),
      a
    )).forEach((a) => n.appendChild(a)), n;
  }
  return null;
}
function Eo(e, t) {
  return (i, n, r) => {
    const a = [], o = r.selected.map(
      (u) => u.value
    ), c = C(e, "VoltageLevel", {
      name: "E1",
      desc: "guessed by OpenSCD",
      nomFreq: "50.0",
      numPhases: "3"
    }), l = C(e, "Voltage", {
      unit: "V",
      multiplier: "k"
    });
    return l.textContent = "110.00", c.appendChild(l), a.push({
      new: { parent: e.querySelector("SCL"), element: t }
    }), a.push({
      new: {
        parent: t,
        element: c
      }
    }), Array.from(e.querySelectorAll(":root > IED")).sort(ca).map((u) => xo(u, o)).forEach((u) => {
      u && a.push({ new: { parent: c, element: u } });
    }), a;
  };
}
function Io(e, t) {
  return [
    {
      title: s("guess.wizard.title"),
      primary: {
        icon: "play_arrow",
        label: s("guess.wizard.primary"),
        action: Eo(e, t)
      },
      content: [
        p`<p>${s("guess.wizard.description")}</p>`,
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
const No = {
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
}, ko = {
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
}, Yt = { en: ko, de: No };
async function Co(e) {
  return Object.keys(Yt).includes(e) ? Yt[e] : {};
}
Dn({ loader: Co, empty: (e) => e });
const Mi = localStorage.getItem("language") || "en";
console.log("SETTING LANGUAGE TO", Mi);
Ln(Mi);
function Hi(e, t, i) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${s("substation.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${s("substation.wizard.descHelper")}"
    ></wizard-textfield>`,
    i ? p`<mwc-formfield label="${s("guess.wizard.primary")}">
          <mwc-checkbox></mwc-checkbox>
        </mwc-formfield>` : p``
  ];
}
function Do(e) {
  return (t, i) => {
    const n = f(t.find((c) => c.label === "name")), r = f(t.find((c) => c.label === "desc")), a = i.shadowRoot?.querySelector("mwc-checkbox")?.checked;
    e.ownerDocument.createElement("Substation");
    const o = C(e.ownerDocument, "Substation", {
      name: n,
      desc: r
    });
    return a ? [() => Io(e.ownerDocument, o)] : [{ new: { parent: e, element: o } }];
  };
}
function zo(e) {
  const t = e.ownerDocument.querySelector("Substation") === null && e.tagName === "SCL";
  return [
    {
      title: s("substation.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: s("add"),
        action: Do(e)
      },
      content: Hi("", "", t)
    }
  ];
}
function $o(e) {
  return [
    {
      title: s("substation.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: s("save"),
        action: Ci(
          e,
          "substation.action.updatesubstation"
        )
      },
      content: Hi(
        e.getAttribute("name") ?? "",
        e.getAttribute("desc"),
        !1
      )
    }
  ];
}
function To(e, t, i, n) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${s("terminal.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${n}
      readonly
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="connectivityNode"
      .maybeValue=${t}
      helper="${s("terminal.wizard.connectivityNodeHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      readonly
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="cNodeName"
      .maybeValue=${i}
      helper="${s("terminal.wizard.cNodeNameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function Lo(e) {
  const t = Array.from(
    e.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(ie).map((i) => i.getAttribute("name") ?? "").filter((i) => i !== e.getAttribute("name"));
  return [
    {
      title: s("terminal.wizard.title.edit"),
      element: e,
      content: To(
        e.getAttribute("name"),
        e.getAttribute("connectivityNode"),
        e.getAttribute("cNodeName"),
        t
      )
    }
  ];
}
const Ue = {
  nomFreq: "50",
  numPhases: "3",
  Voltage: "110",
  multiplier: "k"
};
function Bi(e, t, i, n, r, a) {
  return [
    w`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${s("voltagelevel.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${s("voltagelevel.wizard.descHelper")}"
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="nomFreq"
      .maybeValue=${i}
      nullable
      helper="${s("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      required
      validationMessage="${s("textfield.nonempty")}"
      pattern="${Ve.unsigned}"
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="numPhases"
      .maybeValue=${n}
      nullable
      helper="${s("voltagelevel.wizard.numPhaseHelper")}"
      suffix="#"
      required
      validationMessage="${s("textfield.nonempty")}"
      type="number"
      min="1"
      max="255"
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="Voltage"
      .maybeValue=${r}
      nullable
      unit="V"
      .multipliers=${[null, "G", "M", "k", "", "m"]}
      .multiplier=${a}
      helper="${s("voltagelevel.wizard.voltageHelper")}"
      required
      validationMessage="${s("textfield.nonempty")}"
      pattern="${Ve.decimal}"
    ></wizard-textfield>`
  ];
}
function _o(e) {
  return (t) => {
    const i = f(t.find((u) => u.label === "name")), n = f(t.find((u) => u.label === "desc")), r = f(t.find((u) => u.label === "nomFreq")), a = f(t.find((u) => u.label === "numPhases")), o = f(t.find((u) => u.label === "Voltage")), c = wt(t.find((u) => u.label === "Voltage")), l = C(e.ownerDocument, "VoltageLevel", {
      name: i,
      desc: n,
      nomFreq: r,
      numPhases: a
    });
    if (o !== null) {
      const u = C(e.ownerDocument, "Voltage", {
        unit: "V",
        multiplier: c
      });
      u.textContent = o, l.appendChild(u);
    }
    return [
      {
        new: {
          parent: e,
          element: l
        }
      }
    ];
  };
}
function Po(e) {
  return [
    {
      title: s("voltagelevel.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: s("add"),
        action: _o(e)
      },
      content: Bi(
        "",
        "",
        Ue.nomFreq,
        Ue.numPhases,
        Ue.Voltage,
        Ue.multiplier
      )
    }
  ];
}
function Ro(e, t, i, n) {
  if (e === null) {
    const a = C(n.ownerDocument, "Voltage", {
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
  const r = $(e, { multiplier: i });
  return r.textContent = t, {
    old: { element: e },
    new: { element: r }
  };
}
function Vo(e) {
  return (t) => {
    const i = t.find((h) => h.label === "name").value, n = f(t.find((h) => h.label === "desc")), r = f(t.find((h) => h.label === "nomFreq")), a = f(t.find((h) => h.label === "numPhases")), o = f(t.find((h) => h.label === "Voltage")), c = wt(t.find((h) => h.label === "Voltage"));
    let l, u;
    if (i === e.getAttribute("name") && n === e.getAttribute("desc") && r === e.getAttribute("nomFreq") && a === e.getAttribute("numPhases"))
      l = null;
    else {
      const h = $(e, {
        name: i,
        desc: n,
        nomFreq: r,
        numPhases: a
      });
      l = { old: { element: e }, new: { element: h } };
    }
    o === (e.querySelector("VoltageLevel > Voltage")?.textContent?.trim() ?? null) && c === (e.querySelector("VoltageLevel > Voltage")?.getAttribute("multiplier") ?? null) ? u = null : u = Ro(
      e.querySelector("VoltageLevel > Voltage"),
      o,
      c,
      l?.new.element ?? e
    );
    const m = {
      actions: [],
      title: s("voltagelevel.action.updateVoltagelevel", { name: i })
    };
    return l && m.actions.push(l), u && m.actions.push(u), m.actions.push(
      ...It(e, e.getAttribute("name"), i)
    ), m.actions.length ? [m] : [];
  };
}
function Fo(e) {
  return [
    {
      title: s("voltagelevel.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: s("save"),
        action: Vo(e)
      },
      content: Bi(
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
const Gi = "PTR";
function Oo(e) {
  return (t) => {
    const i = f(t.find((o) => o.label === "name")), n = f(t.find((o) => o.label === "desc")), r = C(e.ownerDocument, "PowerTransformer", {
      name: i,
      desc: n,
      type: Gi
    });
    return [{
      new: {
        parent: e,
        element: r
      }
    }];
  };
}
function Wi(e, t, i, n) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${s("powertransformer.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${n}
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${s("powertransformer.wizard.descHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${i}
      disabled
      helper="${s("powertransformer.wizard.typeHelper")}"
    ></wizard-textfield>`
  ];
}
function Ui(e, t) {
  return Array.from(e.querySelectorAll("PowerTransformer")).filter(ie).map((i) => i.getAttribute("name") ?? "").filter((i) => t && i !== t);
}
function qo(e) {
  const t = Ui(e);
  return [
    {
      title: s("powertransformer.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: s("add"),
        action: Oo(e)
      },
      content: Wi(
        "",
        null,
        Gi,
        t
      )
    }
  ];
}
function Mo(e) {
  const t = Ui(
    e.parentNode,
    e.getAttribute("name")
  );
  return [
    {
      title: s("powertransformer.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: s("save"),
        action: ki(e)
      },
      content: Wi(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        e.getAttribute("type"),
        t
      )
    }
  ];
}
function Ho(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${s("subnetwork.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${s("subnetwork.wizard.descHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      nullable
      helper="${s("subnetwork.wizard.typeHelper")}"
      pattern="${Ve.normalizedString}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="BitRate"
      .maybeValue=${e.BitRate}
      nullable
      unit="b/s"
      .multipliers=${[null, "M"]}
      .multiplier=${e.multiplier}
      helper="${s("subnetwork.wizard.bitrateHelper")}"
      required
      validationMessage="${s("textfield.nonempty")}"
      pattern="${Ve.decimal}"
    ></wizard-textfield>`
  ];
}
function Bo(e, t, i, n) {
  if (e === null) {
    const a = C(n.ownerDocument, "BitRate", {
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
  const r = $(e, { multiplier: i });
  return r.textContent = t, {
    old: { element: e },
    new: { element: r }
  };
}
function Go(e) {
  return (t) => {
    const i = t.find((m) => m.label === "name").value, n = f(t.find((m) => m.label === "desc")), r = f(t.find((m) => m.label === "type")), a = f(t.find((m) => m.label === "BitRate")), o = wt(t.find((m) => m.label === "BitRate"));
    let c, l;
    if (i === e.getAttribute("name") && n === e.getAttribute("desc") && r === e.getAttribute("type"))
      c = null;
    else {
      const m = $(e, { name: i, desc: n, type: r });
      c = { old: { element: e }, new: { element: m } };
    }
    a === (e.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null) && o === (e.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null) ? l = null : l = Bo(
      e.querySelector("SubNetwork > BitRate"),
      a,
      o,
      c?.new.element ?? e
    );
    const u = [];
    return c && u.push(c), l && u.push(l), u;
  };
}
function Wo(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = e.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null, a = e.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null;
  return [
    {
      title: s("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: s("save"),
        action: Go(e)
      },
      content: Ho({ name: t, desc: i, type: n, BitRate: r, multiplier: a })
    }
  ];
}
const Uo = [
  "ldInst",
  "lnClass",
  "lnInst",
  "prefix",
  "doName",
  "daName"
];
function jo(e) {
  return Uo.map(
    (t) => e.getAttribute(t) ? `[${t}="${e.getAttribute(
      t
    )}"]` : ""
  ).join("");
}
const Ko = ["srcLDInst", "srcLNClass", "srcLNInst", "srcCBName"];
function Xo(e) {
  return Ko.map(
    (t) => e.getAttribute(t) ? `[${t}="${e.getAttribute(t)}"]` : ""
  ).join("");
}
function Zo(e) {
  if (!e.length) return [];
  const t = [], i = {};
  for (const n of e) {
    const r = n.old.element, a = n.old.parent, o = z(a);
    i[o] || (i[o] = a.cloneNode(!0));
    const c = i[o].querySelector(
      `ExtRef${r.getAttribute("iedName") ? `[iedName="${r.getAttribute("iedName")}"]` : ""}${jo(r)}${r.getAttribute("serviceType") ? `[serviceType="${r.getAttribute("serviceType")}"]` : ""}${Xo(r)}`
    );
    c && i[o].removeChild(c);
  }
  return Object.entries(i).forEach(([n, r]) => {
    if (r.children.length == 0) {
      const a = e[0].old.parent.ownerDocument, o = de(a, "Inputs", n);
      o && o.parentElement && t.push({
        old: { parent: o.parentElement, element: o }
      });
    }
  }), t;
}
const Qo = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function Yo(e, t, i, n, r, a, o, c, l) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${s("ied.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${l}
      pattern="${Qo}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${s("ied.wizard.descHelper")}"
      pattern="${ue.normalizedString}"
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
function Jo(e) {
  return [
    p` <section>
      <h1>${s("ied.wizard.title.references")}</h1>
      <mwc-list>
        ${e.map((t) => {
      const i = t.old.element;
      return p` <mwc-list-item noninteractive twoline>
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
function es(e) {
  return (e.getAttribute("originalSclVersion") ?? "").concat(e.getAttribute("originalSclRevision") ?? "").concat(e.getAttribute("originalSclRelease") ?? "");
}
function ts(e) {
  return Array.from(e.parentNode.querySelectorAll("IED")).filter(ie).map((t) => t.getAttribute("name") ?? "").filter((t) => t !== e.getAttribute("name"));
}
function is(e) {
  return (t, i) => {
    i.dispatchEvent(pe());
    const n = Ni(e), r = n.filter(
      (l) => l.old.element.tagName === "ExtRef"
    ), a = Zo(r), o = e.getAttribute("name") ?? "Unknown", c = {
      actions: [],
      title: s("ied.action.deleteied", { name: o })
    };
    return c.actions.push({
      old: { parent: e.parentElement, element: e }
    }), c.actions.push(...n), c.actions.push(...a), [c];
  };
}
function ns(e) {
  const t = Ni(e);
  return t.length > 0 ? [
    {
      title: s("ied.wizard.title.delete"),
      content: Jo(t),
      primary: {
        icon: "delete",
        label: s("remove"),
        action: is(e)
      }
    }
  ] : null;
}
function rs(e) {
  function t(i) {
    return (n) => {
      const r = ns(i);
      r && n.dispatchEvent(ke(() => r)), n.dispatchEvent(
        Et({ old: { parent: i.parentElement, element: i } })
      ), n.dispatchEvent(pe());
    };
  }
  return [
    {
      title: s("ied.wizard.title.edit"),
      element: e,
      menuActions: [
        {
          icon: "delete",
          label: s("remove"),
          action: t(e)
        }
      ],
      primary: {
        icon: "edit",
        label: s("save"),
        action: Ci(
          e,
          "ied.action.updateied"
        )
      },
      content: Yo(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        e.getAttribute("type"),
        e.getAttribute("manufacturer"),
        e.getAttribute("configVersion"),
        es(e),
        e.getAttribute("engRight"),
        e.getAttribute("owner"),
        ts(e)
      )
    }
  ];
}
const as = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function os(e, t, i, n) {
  return [
    t ? p`<wizard-textfield
          label="ldName"
          .maybeValue=${e}
          helper="${s("ldevice.wizard.noNameSupportHelper")}"
          helperPersistent
          readOnly
          disabled
        ></wizard-textfield>` : p`<wizard-textfield
          label="ldName"
          .maybeValue=${e}
          nullable
          helper="${s("ldevice.wizard.nameHelper")}"
          validationMessage="${s("textfield.required")}"
          dialogInitialFocus
          pattern="${as}"
        ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${i}
      nullable
      helper="${s("ldevice.wizard.descHelper")}"
      pattern="${ue.normalizedString}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="ldInst"
      .maybeValue=${n}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function ss(e) {
  return !!e.closest("IED")?.querySelector("Services > ConfLdName");
}
function cs(e) {
  return (t) => {
    const i = {}, n = ["ldName", "desc"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = $(e, i);
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
function ls(e) {
  return [
    {
      title: s("ldevice.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: s("save"),
        action: cs(e)
      },
      content: os(
        e.getAttribute("ldName"),
        !ss(e),
        e.getAttribute("desc"),
        e.getAttribute("inst")
      )
    }
  ];
}
function ds(e) {
  return Object.entries(e).map(
    ([t, i]) => p`<wizard-checkbox
        label="${t}"
        .maybeValue=${i}
        nullable
        helper="${s(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function us(e) {
  return (t) => {
    const i = f(t.find((u) => u.label === "dchg")), n = f(t.find((u) => u.label === "qchg")), r = f(t.find((u) => u.label === "dupd")), a = f(t.find((u) => u.label === "period")), o = f(t.find((u) => u.label === "gi"));
    if (i === e.getAttribute("dchg") && n === e.getAttribute("qchg") && r === e.getAttribute("dupd") && a === e.getAttribute("period") && o === e.getAttribute("gi"))
      return [];
    const c = $(e, {
      dchg: i,
      qchg: n,
      dupd: r,
      period: a,
      gi: o
    });
    return [{ old: { element: e }, new: { element: c } }];
  };
}
function ms(e) {
  const [t, i, n, r, a] = [
    "dchg",
    "qchg",
    "dupd",
    "period",
    "gi"
  ].map((o) => e.getAttribute(o));
  return [
    {
      title: s("wizard.title.edit", { tagName: e.tagName }),
      primary: {
        icon: "save",
        label: s("save"),
        action: us(e)
      },
      content: ds({ dchg: t, qchg: i, dupd: n, period: r, gi: a })
    }
  ];
}
const ps = [
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
], hs = [
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
], fs = ["Spec", "Conf", "RO", "Set"], bs = ["SmpPerPeriod", "SmpPerSec", "SecPerSmp"], ji = [
  "None",
  "Signature",
  "SignatureAndEncryption"
];
function gs(e, t, i) {
  if (!e.target || !e.target.parentElement) return;
  const n = e.target.selected?.value;
  if (e.target.parentElement.querySelector(
    'wizard-select[label="bType"]'
  ).value !== "Enum") return;
  const a = Array.from(
    t.querySelectorAll(`EnumType[id="${n}"] > EnumVal`)
  ).map(
    (c) => w`<mwc-list-item
        value="${c.textContent?.trim() ?? ""}"
        ?selected=${c.textContent?.trim() === i}
        >${c.textContent?.trim()}</mwc-list-item
      >`
  ), o = e.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  ti(w`${a}`, o), o.requestUpdate();
}
function ys(e, t, i) {
  const n = e.target.selected.value, r = e.target.parentElement.querySelector(
    'wizard-select[label="type"]'
  );
  r.disabled = !(n === "Enum" || n === "Struct");
  const a = [];
  Array.from(r.children).forEach((l) => {
    const u = l;
    u.disabled = !l.classList.contains(n), u.noninteractive = !l.classList.contains(n), u.style.display = l.classList.contains(n) ? "" : "none", u.disabled || a.push(u);
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
function vs(e, t, i, n, r, a, o, c, l, u) {
  return [
    w`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${s("scl.name")}"
      required
      pattern="${ue.abstractDataAttributeName}"
      maxLength="${kt.abstracDaName}"
      dialogInitialFocus
    >
      ></wizard-textfield
    >`,
    w`<wizard-textfield
      label="desc"
      helper="${s("scl.desc")}"
      .maybeValue=${t}
      nullable
      pattern="${ue.normalizedString}"
    ></wizard-textfield>`,
    w`<wizard-select
      fixedMenuPosition
      label="bType"
      .value=${i}
      helper="${s("scl.bType")}"
      required
      @selected=${(m) => ys(m)}
      >${hs.map(
      (m) => w`<mwc-list-item value="${m}"
            >${m}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    w`<wizard-select
      label="type"
      .maybeValue=${r}
      helper="${s("scl.type")}"
      fixedMenuPosition
      @selected=${(m) => gs(m, u, l)}
      >${n.map(
      (m) => w`<mwc-list-item
            class="${m.tagName === "EnumType" ? "Enum" : "Struct"}"
            value=${m.id}
            >${m.id}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    w`<wizard-textfield
      label="sAddr"
      .maybeValue=${a}
      helper="${s("scl.sAddr")}"
      nullable
      pattern="${ue.normalizedString}"
    ></wizard-textfield>`,
    w`<wizard-select
      label="valKind"
      .maybeValue=${o}
      helper="${s("scl.valKind")}"
      nullable
      required
      fixedMenuPosition
      >${fs.map(
      (m) => w`<mwc-list-item value="${m}"
            >${m}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    w`<wizard-checkbox
      label="valImport"
      .maybeValue=${c}
      helper="${s("scl.valImport")}"
      nullable
      required
    ></wizard-checkbox>`,
    w`<wizard-select
      label="Val"
      .maybeValue=${l}
      helper="${s("scl.Val")}"
      nullable
      >${Array.from(
      u.querySelectorAll(`EnumType > EnumVal[id="${r}"]`)
    ).map(
      (m) => w`<mwc-list-item value="${m.textContent?.trim() ?? ""}"
            >${m.textContent?.trim()}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    w`<wizard-textfield
      label="Val"
      .maybeValue=${l}
      helper="${s("scl.Val")}"
      nullable
    ></wizard-textfield>`
  ];
}
function Ss(e, t, i, n) {
  return [
    w`<wizard-select
      label="fc"
      .maybeValue=${e}
      helper="${s("scl.fc")}"
      required
      fixedMenuPosition
      >${ps.map(
      (r) => w`<mwc-list-item value="${r}">${r}</mwc-list-item>`
    )}</wizard-select
    >`,
    w`<wizard-checkbox
      label="dchg"
      .maybeValue=${t}
      helper="${s("scl.dchg")}"
      nullable
    ></wizard-checkbox>`,
    w`<wizard-checkbox
      label="qchg"
      .maybeValue=${i}
      helper="${s("scl.qchg")}"
      nullable
    ></wizard-checkbox>`,
    w`<wizard-checkbox
      label="dupd"
      .maybeValue=${n}
      helper="${s("scl.dupd")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function As(e) {
  return (t) => {
    const i = f(t.find((E) => E.label === "name")), n = f(t.find((E) => E.label === "desc")), r = f(t.find((E) => E.label === "bType")), a = r === "Enum" || r === "Struct" ? f(t.find((E) => E.label === "type")) : null, o = f(t.find((E) => E.label === "sAddr")), c = f(t.find((E) => E.label === "valKind")), l = f(t.find((E) => E.label === "valImport")), u = t.find(
      (E) => E.label === "Val" && E.style.display !== "none"
    ), m = u ? f(u) : null, h = f(t.find((E) => E.label === "fc")) ?? "", b = f(t.find((E) => E.label === "dchg")), y = f(t.find((E) => E.label === "qchg")), x = f(t.find((E) => E.label === "dupd")), N = [], T = C(e.ownerDocument, "DA", {
      name: i,
      desc: n,
      bType: r,
      type: a,
      sAddr: o,
      valKind: c,
      valImport: l,
      fc: h,
      dchg: b,
      qchg: y,
      dupd: x
    });
    if (m !== null) {
      const E = C(e.ownerDocument, "Val", {});
      E.textContent = m, T.appendChild(E);
    }
    return N.push({
      new: {
        parent: e,
        element: T
      }
    }), N;
  };
}
function ws(e) {
  const t = e.ownerDocument, i = "", n = null, r = "", a = null, o = null, c = null, l = null, u = null, m = "", h = null, b = null, y = null, x = Array.from(t.querySelectorAll("DAType, EnumType")).filter(ie).filter((T) => T.getAttribute("id")), N = e.closest("DataTypeTemplates");
  return [
    {
      title: s("da.wizard.title.edit"),
      primary: {
        icon: "",
        label: s("save"),
        action: As(e)
      },
      content: [
        ...vs(
          i,
          n,
          r,
          x,
          a,
          o,
          l,
          u,
          c,
          N
        ),
        ...Ss(m, h, b, y)
      ]
    }
  ];
}
const Y = (e, t) => e === null ? "" : t;
function Ki() {
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
      render: (l, u, m = null) => (m ? [...Array(m)] : [m]).map((h, b) => w`<wizard-select
            id="Val${Y(h, `${b + 1}`)}"
            label="Val${Y(h, ` for sGroup ${b + 1}`)}"
            .maybeValue=${o(u)}
            fixedMenuPosition
          >
            <mwc-list-item value="true">true</mwc-list-item>
            <mwc-list-item value="false">false</mwc-list-item>
          </wizard-select>`),
      value: (l, u) => f(
        l.find((m) => m.id === `Val${u || ""}`)
      )
    };
  }
  function t() {
    return {
      render: (l, u, m = null) => (m ? [...Array(m)] : [m]).map((h, b) => w`<wizard-select
            id="Val${Y(h, `${b + 1}`)}"
            label="Val${Y(h, ` for sGroup ${b + 1}`)}"
            .maybeValue=${o(u)}
            fixedMenuPosition
          >
            ${c(l).map((y) => w`<mwc-list-item value="${y}"
                >${y}</mwc-list-item
              >`)}
          </wizard-select>`),
      value: (l, u) => f(
        l.find((m) => m.id === `Val${u || ""}`)
      )
    };
  }
  function i(l, u, m) {
    return {
      render: (h, b, y = null) => (y ? [...Array(y)] : [y]).map((x, N) => w`<wizard-textfield
            id="Val${Y(x, `${N + 1}`)}"
            label="Val${Y(x, ` for sGroup ${N + 1}`)}"
            .maybeValue=${o(b)}
            helper="${s("dai.wizard.valueHelper", { type: l })}"
            type="number"
            min=${u}
            max=${m}
            step="0.1"
          >
          </wizard-textfield>`),
      value: (h, b) => f(
        h.find((y) => y.id === `Val${b || ""}`)
      )
    };
  }
  function n(l, u, m) {
    return {
      render: (h, b, y = null) => (y ? [...Array(y)] : [y]).map((x, N) => w`<wizard-textfield
            id="Val${Y(x, `${N + 1}`)}"
            label="Val${Y(x, ` for sGroup ${N + 1}`)}"
            .maybeValue=${o(b)}
            helper="${s("dai.wizard.valueHelper", { type: l })}"
            type="number"
            min=${u}
            max=${m}
          >
          </wizard-textfield>`),
      value: (h, b) => f(
        h.find((y) => y.id === `Val${b || ""}`)
      )
    };
  }
  function r() {
    return {
      render: (l, u, m = null) => {
        const h = o(u);
        return (m ? [...Array(m)] : [m]).reduce(
          (b, y, x) => b.concat([
            w`<wizard-textfield
                id="ValDate${Y(y, `${x + 1}`)}"
                label="Val (Date)${Y(y, ` for sGroup ${x + 1}`)}"
                .maybeValue=${xs(h)}
                type="date"
              >
              </wizard-textfield>`,
            w`<wizard-textfield
                id="ValTime${Y(y, `${x + 1}`)}"
                label="Val (Time)${Y(y, ` for sGroup ${x + 1}`)}"
                .maybeValue=${Es(h)}
                type="time"
                step="1"
              >
              </wizard-textfield>`
          ]),
          []
        );
      },
      value: (l, u) => {
        const m = [`ValDate${u || ""}`, `ValTime${u || ""}`].map(
          (y) => f(l.find((x) => x.id === y))
        ), h = m[0] ? m[0] : "0000-00-00", b = m[1] ? m[1] : "00:00:00";
        return h + "T" + b + ".000";
      }
    };
  }
  function a(l, u) {
    return {
      render: (m, h, b = null) => (b ? [...Array(b)] : [b]).map((y, x) => w`<wizard-textfield
            id="Val${Y(y, ` ${x + 1}`)}"
            label="Val${Y(y, ` for sGroup ${x + 1}`)}"
            .maybeValue=${o(h)}
            helper="${s("dai.wizard.valueHelper", { type: l })}"
            maxLength=${u}
            type="text"
          >
          </wizard-textfield>`),
      value: (m, h) => f(
        m.find((b) => b.id === `Val${h || ""}`)
      )
    };
  }
  function o(l) {
    return (l?.querySelector("Val") ? l?.querySelector("Val") : l)?.textContent?.trim() ?? "";
  }
  function c(l) {
    const u = l.getAttribute("type"), m = [];
    return Array.from(
      l.ownerDocument.querySelectorAll(
        `EnumType[id="${u}"] > EnumVal`
      )
    ).filter(
      (h) => h.textContent && h.textContent !== ""
    ).sort(
      (h, b) => parseInt(h.getAttribute("ord") ?? "0") - parseInt(b.getAttribute("ord") ?? "0")
    ).forEach((h) => {
      m.push(h.textContent ?? "");
    }), m;
  }
}
function xs(e) {
  let i = e.split("T")[0];
  return /^\d{4}-\d{2}-\d{2}$/.test(i) || (i = null), i === "0000-00-00" && (i = null), i;
}
function Es(e) {
  const t = e.split("T");
  let i = null;
  return t.length == 2 && (i = t[1], i.length > 8 && (i = i.substring(0, 8)), /^\d{2}:\d{2}:\d{2}$/.test(i) || (i = null), i === "00:00:00" && (i = null)), i;
}
function Is(e, t) {
  return (i) => {
    const n = e.getAttribute("bType"), r = Ki()[n].value(i), a = t.parentElement?.getAttribute("name") ?? "", o = {
      actions: [],
      title: s("dai.action.updatedai", { daiName: a })
    }, c = t.cloneNode(!1);
    return c.textContent = r, o.actions.push({
      old: { element: t },
      new: { element: c }
    }), [o];
  };
}
function Ns(e, t, i = null) {
  const n = e.getAttribute("bType"), r = e.querySelector("Val")?.textContent?.trim() ?? "";
  return [
    p` ${Ki()[n].render(
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
        </wizard-textfield>` : vn}`
  ];
}
function ks(e, t) {
  const i = t?.tagName === "DAI" ? t?.getAttribute("name") ?? "" : t?.parentElement?.getAttribute("name") ?? "";
  return [
    {
      title: s("dai.wizard.title.edit", {
        daiName: i
      }),
      element: t,
      primary: {
        icon: "edit",
        label: s("save"),
        action: Is(e, t)
      },
      content: Ns(e, t)
    }
  ];
}
function Cs(e) {
  return (t) => {
    t.dispatchEvent(ke(() => _i(e)));
  };
}
function Ds(e) {
  return (t, i) => {
    const n = t.find((u) => u.label === "name").value, r = f(t.find((u) => u.label === "desc")), a = e.getAttribute("name"), o = [];
    if (!(n === a && r === e.getAttribute("desc"))) {
      const u = $(e, { name: n, desc: r });
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
      const m = $(u, { datSet: n });
      return { old: { element: u }, new: { element: m } };
    }) : [];
    return [
      ...Array.from(
        i.shadowRoot.querySelectorAll(
          "filtered-list > mwc-check-list-item:not([selected])"
        )
      ).map((u) => de(e, "FCDA", u.value)).filter((u) => u).map((u) => ({
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
function Xi(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc");
  return [
    {
      title: s("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: s("save"),
        icon: "save",
        action: Ds(e)
      },
      menuActions: [
        {
          icon: "add",
          label: s("dataset.fcda.add"),
          action: Cs(e)
        }
      ],
      content: [
        p`<wizard-textfield
          label="name"
          .maybeValue=${t}
          helper="${s("scl.name")}"
          required
          disabled="true"
        >
        </wizard-textfield>`,
        p`<wizard-textfield
          label="desc"
          .maybeValue=${i}
          helper="${s("scl.desc")}"
          nullable
          required
        >
        </wizard-textfield>`,
        p`<filtered-list multi
          >${Array.from(e.querySelectorAll("FCDA")).map(
          (n) => p`<mwc-check-list-item selected value="${z(n)}"
                >${z(n).split(">").pop()}</mwc-check-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
const L = {
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
}, zs = {
  IP: L.IP,
  "IP-SUBNET": L.IP,
  "IP-GATEWAY": L.IP,
  "OSI-TSEL": L.OSI,
  "OSI-SSEL": L.OSI,
  "OSI-PSEL": L.OSI,
  "OSI-AP-Title": L.OSIAPi,
  "OSI-AP-Invoke": L.OSId,
  "OSI-AE-Qualifier": L.OSId,
  "OSI-AE-Invoke": L.OSId,
  "MAC-Address": L.MAC,
  APPID: L.APPID,
  "VLAN-ID": L.VLANid,
  "VLAN-PRIORITY": L.VLANp,
  "OSI-NSAP": L.OSI,
  "SNTP-Port": L.port,
  "MMS-Port": L.port,
  DNSName: "[^ ]*",
  "UDP-Port": L.port,
  "TCP-Port": L.port,
  "C37-118-IP-Port": "102[5-9]|10[3-9][0-9]|1[1-9][0-9][0-9]|[2-9][0-9]{3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]",
  IPv6: L.IPv6,
  "IPv6-SUBNET": L.IPv6sub,
  "IPv6-GATEWAY": L.IPv6,
  IPv6FlowLabel: "[0-9a-fA-F]{1,5}",
  IPv6ClassOfTraffic: "[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]",
  "IPv6-IGMPv3Src": L.IPv6,
  "IP-IGMPv3Sr": L.IP,
  "IP-ClassOfTraffic": L.OSI
}, $s = {
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
function Zi(e) {
  return [
    w`<mwc-formfield label="${s("connectedap.wizard.addschemainsttype")}">
      <mwc-checkbox
        id="instType"
        ?checked="${e.hasInstType}"
      ></mwc-checkbox>
    </mwc-formfield>`,
    w`${Object.entries(e.attributes).map(
      ([t, i]) => w`<wizard-textfield
          label="${t}"
          ?nullable=${$s[t]}
          .maybeValue=${i}
          pattern="${le(zs[t])}"
          required
        ></wizard-textfield>`
    )}`
  ];
}
function Ts(e, t) {
  return e.querySelectorAll("P").length !== t.querySelectorAll("P").length ? !1 : Array.from(e.querySelectorAll("P")).filter(
    (i) => !t.querySelector(`Address > P[type="${i.getAttribute("type")}"]`)?.isEqualNode(i)
  ).length === 0;
}
function Ls(e, t, i) {
  const n = C(t.ownerDocument, "Address", {});
  return Object.entries(e).filter(([r, a]) => a !== null).forEach(([r, a]) => {
    const o = r, c = C(t.ownerDocument, "P", { type: o });
    i && c.setAttributeNS(
      "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:type",
      "tP_" + r
    ), c.textContent = a, n.appendChild(c);
  }), n;
}
function Qi(e, t, i) {
  const n = [], r = Ls(t, e, i), a = e.querySelector("Address");
  return a !== null && !Ts(a, r) ? (n.push({
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
function Jt(e, t, i, n) {
  if (t === null) {
    const a = C(n.ownerDocument, e, {
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
function _s(e) {
  return (t, i) => {
    const n = {
      actions: [],
      title: s("gse.action.addaddress", {
        identity: z(e)
      })
    }, r = i.shadowRoot?.querySelector("#instType")?.checked ?? !1, a = {};
    a["MAC-Address"] = f(
      t.find((u) => u.label === "MAC-Address")
    ), a.APPID = f(t.find((u) => u.label === "APPID")), a["VLAN-ID"] = f(
      t.find((u) => u.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = f(
      t.find((u) => u.label === "VLAN-PRIORITY")
    ), Qi(e, a, r).forEach((u) => {
      n.actions.push(u);
    });
    const c = f(t.find((u) => u.label === "MinTime")), l = f(t.find((u) => u.label === "MaxTime"));
    return c !== (e.querySelector("MinTime")?.textContent?.trim() ?? null) && n.actions.push(
      Jt(
        "MinTime",
        e.querySelector("MinTime"),
        c,
        e
      )
    ), l !== (e.querySelector("MaxTime")?.textContent?.trim() ?? null) && n.actions.push(
      Jt(
        "MaxTime",
        e.querySelector("MaxTime"),
        l,
        e
      )
    ), [n];
  };
}
function Ps(e) {
  const t = e.querySelector("MinTime")?.innerHTML.trim() ?? null, i = e.querySelector("MaxTime")?.innerHTML.trim() ?? null, n = Array.from(e.querySelectorAll("Address > P")).some(
    (a) => a.getAttribute("xsi:type")
  ), r = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((a) => {
    r[a] || (r[a] = e.querySelector(`Address > P[type="${a}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: s("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: s("save"),
        icon: "save",
        action: _s(e)
      },
      content: [
        ...Zi({ hasInstType: n, attributes: r }),
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
function Yi(e) {
  const t = e.getAttribute("name"), i = e.closest("IED")?.getAttribute("name"), n = e.closest("AccessPoint")?.getAttribute("name"), r = e.closest("LDevice")?.getAttribute("inst");
  return e.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${n}"] > GSE[ldInst="${r}"][cbName="${t}"]`
  );
}
function Rs(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${s("scl.name")}"
      required
      validationMessage="${s("textfield.required")}"
      pattern="${ue.asciName}"
      maxLength="${kt.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${s("scl.desc")}"
    ></wizard-textfield>`,
    p`<wizard-select
      label="type"
      .maybeValue=${e.type}
      helper="${s("scl.type")}"
      nullable
      required
      >${["GOOSE", "GSSE"].map(
      (t) => p`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`,
    p`<wizard-textfield
      label="appID"
      .maybeValue=${e.appID}
      helper="${s("scl.id")}"
      required
      validationMessage="${s("textfield.nonempty")}"
    ></wizard-textfield>`,
    p`<wizard-checkbox
      label="fixedOffs"
      .maybeValue=${e.fixedOffs}
      nullable
      helper="${s("scl.fixedOffs")}"
    ></wizard-checkbox>`,
    p`<wizard-select
      label="securityEnabled"
      .maybeValue=${e.securityEnabled}
      nullable
      required
      helper="${s("scl.securityEnable")}"
      >${ji.map(
      (t) => p`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function Vs(e) {
  if (!e.parentElement) return null;
  const t = e.parentElement.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), i = Yi(e), n = Array.from(
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
    title: s("controlblock.action.remove", {
      type: e.tagName,
      name: a,
      iedName: o
    }),
    actions: r
  };
}
function Fs(e) {
  return (t) => {
    const i = Vs(e);
    i && t.dispatchEvent(Et(i)), t.dispatchEvent(pe());
  };
}
function Os(e) {
  return (t) => {
    t.dispatchEvent(ke(() => Xi(e)));
  };
}
function qs(e) {
  return (t) => {
    t.dispatchEvent(ke(() => Ps(e)));
  };
}
function Ms(e) {
  return (t) => {
    const i = t.find((u) => u.label === "name").value, n = f(t.find((u) => u.label === "desc")), r = f(t.find((u) => u.label === "type")), a = f(t.find((u) => u.label === "appID")), o = f(t.find((u) => u.label === "fixedOffs")), c = f(
      t.find((u) => u.label === "securityEnabled")
    );
    if (i === e.getAttribute("name") && n === e.getAttribute("desc") && r === e.getAttribute("type") && a === e.getAttribute("appID") && o === e.getAttribute("fixedOffs") && c === e.getAttribute("securityEnabled"))
      return [];
    const l = $(e, {
      name: i,
      desc: n,
      type: r,
      appID: a,
      fixedOffs: o,
      securityEnabled: c
    });
    return [{ old: { element: e }, new: { element: l } }];
  };
}
function Hs(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = e.getAttribute("appID"), a = e.getAttribute("fixedOffs"), o = e.getAttribute("securityEnabled"), c = Yi(e), l = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), u = [];
  return u.push({
    icon: "delete",
    label: s("remove"),
    action: Fs(e)
  }), l && u.push({
    icon: "edit",
    label: s("scl.DataSet"),
    action: Os(l)
  }), c && u.push({
    icon: "edit",
    label: s("scl.Communication"),
    action: qs(c)
  }), [
    {
      title: s("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: s("save"),
        action: Ms(e)
      },
      menuActions: u,
      content: [
        ...Rs({
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
function xe(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${s("scl.name")}"
      required
      validationMessage="${s("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${s("scl.desc")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      helper="${s("scl.type")}"
      nullable
    ></wizard-textfield>`
  ];
}
function Bs(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = $(e, i);
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
function Gs(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = M(
    e.parentElement,
    "Function"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Bs(e)
      },
      content: [
        ...xe({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Ws(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    const r = C(
      e.ownerDocument,
      "Function",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function Us(e) {
  const t = "", r = Array.from(e.querySelectorAll("Function")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: s("wizard.title.add", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Ws(e)
      },
      content: [
        ...xe({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function js(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = $(e, i);
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
function Ks(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = M(
    e.parentElement,
    "EqSubFunction"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "EqSubFunction" }),
      element: e,
      primary: {
        icon: "save",
        label: s("save"),
        action: js(e)
      },
      content: [
        ...xe({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Xs(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    const r = C(
      e.ownerDocument,
      "EqSubFunction",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function Zs(e) {
  const t = "", r = Array.from(
    e.querySelectorAll("EqSubFunction")
  ).map((a) => a.getAttribute("name"));
  return [
    {
      title: s("wizard.title.add", { tagName: "EqSubFunction" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Xs(e)
      },
      content: [
        ...xe({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function Qs(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = $(e, i);
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
function Ys(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = M(
    e.parentElement,
    "EqFunction"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "EqFunction" }),
      element: e,
      primary: {
        icon: "save",
        label: s("save"),
        action: Qs(e)
      },
      content: [
        ...xe({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Js(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    const r = C(
      e.ownerDocument,
      "EqFunction",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function ec(e) {
  const t = "", r = Array.from(e.querySelectorAll("EqFunction")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: s("wizard.title.add", { tagName: "EqFunction" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Js(e)
      },
      content: [
        ...xe({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function tc(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = $(e, i);
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
function ic(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = M(
    e.parentElement,
    "SubFunction"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: tc(e)
      },
      content: [
        ...xe({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function nc(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    const r = C(
      e.ownerDocument,
      "SubFunction",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function rc(e) {
  const t = "", r = Array.from(e.querySelectorAll("SubFunction")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: s("wizard.title.add", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: nc(e)
      },
      content: [
        ...xe({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function ac(e) {
  return (t, i) => {
    const n = {
      actions: [],
      title: s("smv.action.addaddress", {
        identity: z(e)
      })
    }, r = i.shadowRoot?.querySelector("#instType")?.checked, a = {};
    a["MAC-Address"] = f(
      t.find((c) => c.label === "MAC-Address")
    ), a.APPID = f(t.find((c) => c.label === "APPID")), a["VLAN-ID"] = f(
      t.find((c) => c.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = f(
      t.find((c) => c.label === "VLAN-PRIORITY")
    );
    const o = Qi(e, a, r);
    return o.length ? (o.forEach((c) => {
      n.actions.push(c);
    }), [n]) : [];
  };
}
function oc(e) {
  const t = Array.from(e.querySelectorAll("Address > P")).some(
    (n) => n.getAttribute("xsi:type")
  ), i = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((n) => {
    i[n] || (i[n] = e.querySelector(`Address > P[type="${n}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: s("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: s("save"),
        icon: "edit",
        action: ac(e)
      },
      content: [...Zi({ hasInstType: t, attributes: i })]
    }
  ];
}
function sc(e) {
  return Object.entries(e).map(
    ([t, i]) => p`<wizard-checkbox
        label="${t}"
        .maybeValue=${i}
        nullable
        helper="${s(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function cc(e) {
  return (t) => {
    const i = {}, n = [
      "refreshTime",
      "sampleRate",
      "dataSet",
      "security",
      "synchSourceId"
    ];
    if (n.forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    }), !n.some((a) => i[a] !== e.getAttribute(a)))
      return [];
    const r = $(e, i);
    return [{ old: { element: e }, new: { element: r } }];
  };
}
function lc(e) {
  const [t, i, n, r, a] = [
    "refreshTime",
    "sampleRate",
    "dataSet",
    "security",
    "synchSourceId"
  ].map((o) => e.getAttribute(o));
  return [
    {
      title: s("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: s("save"),
        action: cc(e)
      },
      content: [
        ...sc({
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
function Ji(e) {
  const t = e.getAttribute("name"), i = e.closest("IED")?.getAttribute("name"), n = e.closest("AccessPoint")?.getAttribute("name"), r = e.closest("LDevice")?.getAttribute("inst");
  return e.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${n}"] > SMV[ldInst="${r}"][cbName="${t}"]`
  ) ?? null;
}
function dc(e) {
  if (!e.parentElement) return null;
  const t = e.parentElement.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), i = Ji(e), n = Array.from(
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
    title: s("controlblock.action.remove", {
      type: e.tagName,
      name: a,
      iedName: o
    }),
    actions: r
  };
}
function uc(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${s("scl.name")}"
      required
      validationMessage="${s("textfield.required")}"
      pattern="${ue.asciName}"
      maxLength="${kt.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      pattern="${ue.normalizedString}"
      helper="${s("scl.desc")}"
    ></wizard-textfield>`,
    e.multicast === "true" ? p`` : p`<wizard-checkbox
          label="multicast"
          .maybeValue=${e.multicast}
          helper="${s("scl.multicast")}"
          disabled
        ></wizard-checkbox>`,
    p`<wizard-textfield
      label="smvID"
      .maybeValue=${e.smvID}
      helper="${s("scl.id")}"
      required
      validationMessage="${s("textfield.nonempty")}"
    ></wizard-textfield>`,
    p`<wizard-select
      label="smpMod"
      .maybeValue=${e.smpMod}
      nullable
      required
      helper="${s("scl.smpMod")}"
      >${bs.map(
      (t) => p`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`,
    p`<wizard-textfield
      label="smpRate"
      .maybeValue=${e.smpRate}
      helper="${s("scl.smpRate")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="nofASDU"
      .maybeValue=${e.nofASDU}
      helper="${s("scl.nofASDU")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    p`<wizard-select
      label="securityEnabled"
      .maybeValue=${e.securityEnabled}
      nullable
      required
      helper="${s("scl.securityEnable")}"
      >${ji.map(
      (t) => p`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function mc(e) {
  return (t) => {
    const i = dc(e);
    i && t.dispatchEvent(Et(i)), t.dispatchEvent(pe());
  };
}
function pc(e) {
  return (t) => {
    t.dispatchEvent(ke(() => Xi(e)));
  };
}
function hc(e) {
  return (t) => {
    t.dispatchEvent(ke(() => lc(e)));
  };
}
function fc(e) {
  return (t) => {
    t.dispatchEvent(ke(() => oc(e)));
  };
}
function bc(e) {
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
      if (o === "multicast" && !t.find((l) => l.label === o)) {
        i.multicast = "true";
        return;
      }
      i[o] = f(t.find((l) => l.label === o));
    });
    let r = null;
    if (n.some((o) => i[o] !== e.getAttribute(o))) {
      const o = $(e, i);
      r = {
        old: { element: e },
        new: { element: o }
      };
    }
    const a = [];
    return r && a.push(r), a;
  };
}
function gc(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("multicast"), r = e.getAttribute("smvID"), a = e.getAttribute("smpMod"), o = e.getAttribute("smpRate"), c = e.getAttribute("nofASDU"), l = e.getAttribute("securityEnabled"), u = Ji(e), m = e.querySelector("SmvOpts"), h = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), b = [];
  return b.push({
    icon: "delete",
    label: s("remove"),
    action: mc(e)
  }), h && b.push({
    icon: "edit",
    label: s("scl.DataSet"),
    action: pc(h)
  }), m && b.push({
    icon: "edit",
    label: s("scl.SmvOpts"),
    action: hc(m)
  }), u && b.push({
    icon: "edit",
    label: s("scl.Communication"),
    action: fc(u)
  }), [
    {
      title: s("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: s("save"),
        action: bc(e)
      },
      menuActions: b,
      content: [
        ...uc({
          name: t,
          desc: i,
          multicast: n,
          smvID: r,
          smpMod: a,
          smpRate: o,
          nofASDU: c,
          securityEnabled: l
        })
      ]
    }
  ];
}
function en(e) {
  return [
    w`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      .reservedValues=${e.reservedNames}
      helper="${s("scl.name")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${s("scl.desc")}"
    ></wizard-textfield>`,
    w`<wizard-select
      label="phase"
      fixedMenuPosition
      .maybeValue=${e.phase}
      nullable
      helper="${s("scl.phase")}"
    >
      ${["A", "B", "C", "N", "all", "none", "AB", "BC", "CA"].map(
      (t) => w`<mwc-list-item value="${t}">
            ${t.charAt(0).toUpperCase() + t.slice(1)}
          </mwc-list-item>`
    )}
    </wizard-select> `,
    w`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      nullable
      helper="${s("scl.virtual")}"
    ></wizard-checkbox>`
  ];
}
function yc(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "phase", "virtual"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = $(e, i);
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
function vc(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("phase"), r = e.getAttribute("virtual"), a = M(
    e.parentElement,
    "SubEquipment"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: yc(e)
      },
      content: [
        ...en({
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
function Sc(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "phase", "virtual"].forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    const r = C(
      e.ownerDocument,
      "SubEquipment",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function Ac(e) {
  const t = "", a = Array.from(e.querySelectorAll("SubEquipment")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: s("wizard.title.add", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Sc(e)
      },
      content: [
        ...en({
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
function wc(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = e.getAttribute("virtual"), a = M(
    e.parentElement,
    "GeneralEquipment"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: xc(e)
      },
      content: [
        ...tn({
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
function xc(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = $(e, i);
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
function tn(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${s("scl.name")}"
      required
      validationMessage="${s("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${s("scl.desc")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      helper="${s("scl.type")}"
      minLength="${3}"
      pattern="AXN|BAT|MOT|FAN|FIL|PMP|TNK|VLV|E[A-Z]*"
      required
    ></wizard-textfield>`,
    p`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${s("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function Ec(e) {
  const t = "", a = Array.from(
    e.querySelectorAll("GeneralEquipment")
  ).map((o) => o.getAttribute("name"));
  return [
    {
      title: s("wizard.title.add", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Ic(e)
      },
      content: [
        ...tn({
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
function Ic(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    const r = C(
      e.ownerDocument,
      "GeneralEquipment",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function Nc(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = f(
        t.find((o) => o.label === a)
      );
    });
    const r = C(
      e.ownerDocument,
      "TransformerWinding",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function kc(e) {
  const t = "", a = Array.from(
    e.querySelectorAll("TransformerWinding")
  ).map((o) => o.getAttribute("name"));
  return [
    {
      title: s("wizard.title.add", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Nc(e)
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
function Cc(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = f(
        t.find((a) => a.label === r)
      );
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = $(e, i);
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
function nn(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${s("scl.name")}"
      required
      validationMessage="${s("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${s("scl.desc")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      disabled
      helper="${s("scl.type")}"
    ></wizard-textfield>`,
    p`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${s("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function Dc(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = e.getAttribute("virtual"), a = M(
    e.parentElement,
    "TransformerWinding"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Cc(e)
      },
      content: [
        ...nn({
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
function zc(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    const r = C(
      e.ownerDocument,
      "TapChanger",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function $c(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = $(e, i);
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
function rn(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${s("scl.name")}"
      required
      validationMessage="${s("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${s("scl.desc")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      disabled
      helper="${s("scl.type")}"
    ></wizard-textfield>`,
    p`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${s("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function Tc(e) {
  const t = "", n = "LTC", a = Array.from(e.querySelectorAll("TapChanger")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: s("wizard.title.add", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: zc(e)
      },
      content: [
        ...rn({
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
function Lc(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = e.getAttribute("virtual"), a = M(
    e.parentElement,
    "TapChanger"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: $c(e)
      },
      content: [
        ...rn({
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
function an(e, t, i, n, r) {
  return [
    w`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${s("line.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${s("line.wizard.descHelper")}"
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="type"
      .maybeValue=${i}
      nullable
      helper="${s("line.wizard.typeHelper")}"
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="nomFreq"
      .maybeValue=${n}
      nullable
      helper="${s("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      validationMessage="${s("textfield.nonempty")}"
      pattern="${Ve.unsigned}"
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="numPhases"
      .maybeValue=${r}
      nullable
      helper="${s("voltagelevel.wizard.numPhaseHelper")}"
      suffix="#"
      validationMessage="${s("textfield.nonempty")}"
      type="number"
      min="1"
      max="255"
    ></wizard-textfield>`
  ];
}
function _c(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "nomFreq", "numPhases"].forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    const r = C(e.ownerDocument, "Line", i);
    return [{ new: { parent: e, element: r } }];
  };
}
function Pc(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type", "nomFreq", "numPhases"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = $(e, i);
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
function Rc(e) {
  return [
    {
      title: s("wizard.title.add", { tagName: "Line" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: _c(e)
      },
      content: [...an("", "", "", "", "")]
    }
  ];
}
function Vc(e) {
  return [
    {
      title: s("line.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: s("save"),
        action: Pc(e)
      },
      content: an(
        e.getAttribute("name") ?? "",
        e.getAttribute("desc"),
        e.getAttribute("type"),
        e.getAttribute("nomFreq"),
        e.getAttribute("numPhases")
      )
    }
  ];
}
function Fc(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((o) => o.label === a));
    });
    const r = C(e.ownerDocument, "Process", i);
    return [{ new: { parent: e, element: r } }];
  };
}
function Oc(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = $(e, i);
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
function on(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${s("scl.name")}"
      required
      validationMessage="${s("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${s("scl.desc")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      nullable
      helper="${s("scl.type")}"
    ></wizard-textfield>`
  ];
}
function qc(e) {
  const t = "", i = "", n = "", r = M(
    e.parentElement,
    "Process"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: s("wizard.title.add", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Fc(e)
      },
      content: [
        ...on({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Mc(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = M(
    e.parentElement,
    "Process"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Oc(e)
      },
      content: [
        ...on({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Hc(e, t, i, n, r) {
  return [
    p`<wizard-textfield
      label="lnType"
      .maybeValue=${e}
      readonly
      required
      helper="${s("ln.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${s("ln.wizard.descHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="prefix"
      nullable
      readonly
      .maybeValue=${i}
      helper="${s("ln.wizard.prefixHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${n}
      helper="${s("ln.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="inst"
      .maybeValue=${r}
      readonly
      helper="${s("ln.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function Bc(e) {
  return (t) => {
    const i = {}, n = ["lnType", "desc", "prefix", "lnClass", "inst"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = $(e, i);
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
function Gc(e) {
  return [
    {
      title: s("ln.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: s("save"),
        action: Bc(e)
      },
      content: Hc(
        e.getAttribute("lnType"),
        e.getAttribute("desc"),
        e.getAttribute("prefix"),
        e.getAttribute("lnClass"),
        e.getAttribute("inst")
      )
    }
  ];
}
function Wc(e, t, i, n) {
  return [
    p`<wizard-textfield
      label="lnType"
      .maybeValue=${e}
      readonly
      required
      helper="${s("ln0.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${s("ln0.wizard.descHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${i}
      helper="${s("ln0.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="inst"
      .maybeValue=${n}
      readonly
      helper="${s("ln0.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function Uc(e) {
  return (t) => {
    const i = {}, n = ["lnType", "desc", "lnClass", "inst"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = $(e, i);
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
function jc(e) {
  return [
    {
      title: s("ln0.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: s("save"),
        action: Uc(e)
      },
      content: Wc(
        e.getAttribute("lnType"),
        e.getAttribute("desc"),
        e.getAttribute("lnClass"),
        e.getAttribute("inst")
      )
    }
  ];
}
function d() {
}
const ll = {
  AccessControl: {
    edit: d,
    create: d
  },
  AccessPoint: {
    edit: d,
    create: d
  },
  Address: {
    edit: d,
    create: d
  },
  Association: {
    edit: d,
    create: d
  },
  Authentication: {
    edit: d,
    create: d
  },
  BDA: {
    edit: d,
    create: d
  },
  BitRate: {
    edit: d,
    create: d
  },
  Bay: {
    edit: Sa,
    create: va
  },
  ClientLN: {
    edit: d,
    create: d
  },
  ClientServices: {
    edit: d,
    create: d
  },
  CommProt: {
    edit: d,
    create: d
  },
  Communication: {
    edit: d,
    create: d
  },
  ConductingEquipment: {
    edit: za,
    create: Da
  },
  ConfDataSet: {
    edit: d,
    create: d
  },
  ConfLdName: {
    edit: d,
    create: d
  },
  ConfLNs: {
    edit: d,
    create: d
  },
  ConfLogControl: {
    edit: d,
    create: d
  },
  ConfReportControl: {
    edit: d,
    create: d
  },
  ConfSG: {
    edit: d,
    create: d
  },
  ConfSigRef: {
    edit: d,
    create: d
  },
  ConnectedAP: {
    edit: d,
    create: d
  },
  ConnectivityNode: {
    edit: Ta,
    create: d
  },
  DA: {
    edit: ws,
    create: d
  },
  DAI: {
    edit: ks,
    create: d
  },
  DAType: {
    edit: d,
    create: d
  },
  DO: {
    edit: d,
    create: d
  },
  DOI: {
    edit: d,
    create: d
  },
  DOType: {
    edit: d,
    create: d
  },
  DataObjectDirectory: {
    edit: d,
    create: d
  },
  DataSet: {
    edit: d,
    create: d
  },
  DataSetDirectory: {
    edit: d,
    create: d
  },
  DataTypeTemplates: {
    edit: d,
    create: d
  },
  DynAssociation: {
    edit: d,
    create: d
  },
  DynDataSet: {
    edit: d,
    create: d
  },
  EnumType: {
    edit: d,
    create: d
  },
  EnumVal: {
    edit: d,
    create: d
  },
  EqFunction: {
    edit: Ys,
    create: ec
  },
  EqSubFunction: {
    edit: Ks,
    create: Zs
  },
  ExtRef: {
    edit: d,
    create: d
  },
  FCDA: {
    edit: d,
    create: _i
  },
  FileHandling: {
    edit: d,
    create: d
  },
  Function: {
    edit: Gs,
    create: Us
  },
  GeneralEquipment: {
    edit: wc,
    create: Ec
  },
  GetCBValues: {
    edit: d,
    create: d
  },
  GetDataObjectDefinition: {
    edit: d,
    create: d
  },
  GetDataSetValue: {
    edit: d,
    create: d
  },
  GetDirectory: {
    edit: d,
    create: d
  },
  GOOSE: {
    edit: d,
    create: d
  },
  GOOSESecurity: {
    edit: d,
    create: d
  },
  GSE: {
    edit: d,
    create: d
  },
  GSEDir: {
    edit: d,
    create: d
  },
  GSEControl: {
    edit: Hs,
    create: d
  },
  GSESettings: {
    edit: d,
    create: d
  },
  GSSE: {
    edit: d,
    create: d
  },
  Header: {
    edit: d,
    create: d
  },
  History: {
    edit: d,
    create: d
  },
  Hitem: {
    edit: d,
    create: d
  },
  IED: {
    edit: rs,
    create: d
  },
  IEDName: {
    edit: d,
    create: d
  },
  Inputs: {
    edit: d,
    create: d
  },
  IssuerName: {
    edit: d,
    create: d
  },
  KDC: {
    edit: d,
    create: d
  },
  LDevice: {
    edit: ls,
    create: d
  },
  LN: {
    edit: Gc,
    create: d
  },
  LN0: {
    edit: jc,
    create: d
  },
  LNode: {
    edit: po,
    create: lo
  },
  LNodeType: {
    edit: d,
    create: d
  },
  Line: {
    edit: Vc,
    create: Rc
  },
  Log: {
    edit: d,
    create: d
  },
  LogControl: {
    edit: d,
    create: d
  },
  LogSettings: {
    edit: d,
    create: d
  },
  MaxTime: {
    edit: d,
    create: d
  },
  McSecurity: {
    edit: d,
    create: d
  },
  MinTime: {
    edit: d,
    create: d
  },
  NeutralPoint: {
    edit: d,
    create: d
  },
  OptFields: {
    edit: bo,
    create: d
  },
  P: {
    edit: d,
    create: d
  },
  PhysConn: {
    edit: d,
    create: d
  },
  PowerTransformer: {
    edit: Mo,
    create: qo
  },
  Private: {
    edit: d,
    create: d
  },
  Process: {
    edit: Mc,
    create: qc
  },
  ProtNs: {
    edit: d,
    create: d
  },
  Protocol: {
    edit: d,
    create: d
  },
  ReadWrite: {
    edit: d,
    create: d
  },
  RedProt: {
    edit: d,
    create: d
  },
  ReportControl: {
    edit: d,
    create: d
  },
  ReportSettings: {
    edit: d,
    create: d
  },
  RptEnabled: {
    edit: d,
    create: d
  },
  SamplesPerSec: {
    edit: d,
    create: d
  },
  SampledValueControl: {
    edit: gc,
    create: d
  },
  SecPerSamples: {
    edit: d,
    create: d
  },
  SCL: {
    edit: d,
    create: d
  },
  SDI: {
    edit: d,
    create: d
  },
  SDO: {
    edit: d,
    create: d
  },
  Server: {
    edit: d,
    create: d
  },
  ServerAt: {
    edit: d,
    create: d
  },
  Services: {
    edit: d,
    create: d
  },
  SetDataSetValue: {
    edit: d,
    create: d
  },
  SettingControl: {
    edit: d,
    create: d
  },
  SettingGroups: {
    edit: d,
    create: d
  },
  SGEdit: {
    edit: d,
    create: d
  },
  SmpRate: {
    edit: d,
    create: d
  },
  SMV: {
    edit: d,
    create: d
  },
  SmvOpts: {
    edit: d,
    create: d
  },
  SMVsc: {
    edit: d,
    create: d
  },
  SMVSecurity: {
    edit: d,
    create: d
  },
  SMVSettings: {
    edit: d,
    create: d
  },
  SubEquipment: {
    edit: vc,
    create: Ac
  },
  SubFunction: {
    edit: ic,
    create: rc
  },
  SubNetwork: {
    edit: Wo,
    create: d
  },
  Subject: {
    edit: d,
    create: d
  },
  Substation: {
    edit: $o,
    create: zo
  },
  SupSubscription: {
    edit: d,
    create: d
  },
  TapChanger: {
    edit: Lc,
    create: Tc
  },
  Terminal: {
    edit: Lo,
    create: d
  },
  Text: {
    edit: d,
    create: d
  },
  TimerActivatedControl: {
    edit: d,
    create: d
  },
  TimeSyncProt: {
    edit: d,
    create: d
  },
  TransformerWinding: {
    edit: Dc,
    create: kc
  },
  TrgOps: {
    edit: ms,
    create: d
  },
  Val: {
    edit: d,
    create: d
  },
  ValueHandling: {
    edit: d,
    create: d
  },
  Voltage: {
    edit: d,
    create: d
  },
  VoltageLevel: {
    edit: Fo,
    create: Po
  }
};
export {
  d as emptyWizard,
  ll as wizards
};
