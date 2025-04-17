import { LitElement as Ee, query as M, property as g, state as $, html as p, css as me, customElement as le, queryAsync as xi, eventOptions as Un, svg as V, queryAssignedNodes as Ci, unsafeCSS as jn } from "lit-element";
import { NodePart as Kn, AttributePart as Zn, directive as Ni, html as w, render as Ei, nothing as ct } from "lit-html";
import "@material/mwc-icon";
import { List as Xn } from "@material/mwc-list";
import "@material/mwc-menu";
import "@material/mwc-icon-button";
import { Select as Qn } from "@material/mwc-select";
import "@material/mwc-switch";
import { TextField as Yn } from "@material/mwc-textfield";
import "@material/mwc-formfield";
import "@material/mwc-button";
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
const Ii = /* @__PURE__ */ new WeakMap(), dt = (e) => (...t) => {
  const i = e(...t);
  return Ii.set(i, !0), i;
}, jt = (e) => typeof e == "function" && Ii.has(e);
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
const gt = {};
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
const ki = (e) => e === null || !(typeof e == "object" || typeof e == "function");
class ut {
  constructor(t) {
    this.value = void 0, this.committer = t;
  }
  setValue(t) {
    t !== gt && (!ki(t) || t !== this.value) && (this.value = t, jt(t) || (this.committer.dirty = !0));
  }
  commit() {
    for (; jt(this.value); ) {
      const t = this.value;
      this.value = gt, t(this);
    }
    this.value !== gt && this.committer.commit();
  }
}
class Di extends ut {
}
let Jn = !1;
(() => {
  try {
    const e = {
      get capture() {
        return Jn = !0, !1;
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
class er {
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
const Kt = /* @__PURE__ */ new WeakMap(), Te = dt((e) => (t) => {
  if (!(t instanceof ut) || t instanceof Di || t.committer.name !== "class" || t.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = t, { element: n } = i;
  let r = Kt.get(t);
  r === void 0 && (n.setAttribute("class", i.strings.join(" ")), Kt.set(t, r = /* @__PURE__ */ new Set()));
  const a = n.classList || new er(n);
  r.forEach((s) => {
    s in e || (a.remove(s), r.delete(s));
  });
  for (const s in e) {
    const o = e[s];
    o != r.has(s) && (o ? (a.add(s), r.add(s)) : (a.remove(s), r.delete(s)));
  }
  typeof a.commit == "function" && a.commit();
}), tr = 1e3 * 60, xt = "langChanged";
function ir(e, t, i) {
  return Object.entries(Ct(t || {})).reduce((n, [r, a]) => n.replace(new RegExp(`{{[  ]*${r}[  ]*}}`, "gm"), String(Ct(a))), e);
}
function nr(e, t) {
  const i = e.split(".");
  let n = t.strings;
  for (; n != null && i.length > 0; )
    n = n[i.shift()];
  return n != null ? n.toString() : null;
}
function Ct(e) {
  return typeof e == "function" ? e() : e;
}
const rr = () => ({
  loader: () => Promise.resolve({}),
  empty: (e) => `[${e}]`,
  lookup: nr,
  interpolate: ir,
  translationCache: {}
});
let Ue = rr();
function ar(e) {
  return Ue = Object.assign(Object.assign({}, Ue), e);
}
function sr(e) {
  window.dispatchEvent(new CustomEvent(xt, { detail: e }));
}
function or(e, t, i = Ue) {
  sr({
    previousStrings: i.strings,
    previousLang: i.lang,
    lang: i.lang = e,
    strings: i.strings = t
  });
}
function cr(e, t) {
  const i = (n) => e(n.detail);
  return window.addEventListener(xt, i, t), () => window.removeEventListener(xt, i);
}
async function lr(e, t = Ue) {
  const i = await t.loader(e, t);
  t.translationCache = {}, or(e, i, t);
}
function c(e, t, i = Ue) {
  let n = i.translationCache[e] || (i.translationCache[e] = i.lookup(e, i) || i.empty(e, i));
  return t = t != null ? Ct(t) : null, t != null ? i.interpolate(n, t, i) : n;
}
function Li(e) {
  return e instanceof Kn ? e.startNode.isConnected : e instanceof Zn ? e.committer.element.isConnected : e.element.isConnected;
}
function dr(e) {
  for (const [t] of e)
    Li(t) || e.delete(t);
}
function ur(e) {
  "requestIdleCallback" in window ? window.requestIdleCallback(e) : setTimeout(e);
}
function pr(e, t) {
  setInterval(() => ur(() => dr(e)), t);
}
const Vt = /* @__PURE__ */ new Map();
function mr() {
  cr((e) => {
    for (const [t, i] of Vt)
      Li(t) && $i(t, i, e);
  });
}
mr();
pr(Vt, tr);
function $i(e, t, i) {
  const n = t(i);
  e.value !== n && (e.setValue(n), e.commit());
}
Ni((e) => (t) => {
  Vt.set(t, e), $i(t, e);
});
var Nt = function(e, t) {
  return Nt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, n) {
    i.__proto__ = n;
  } || function(i, n) {
    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (i[r] = n[r]);
  }, Nt(e, t);
};
function hr(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Nt(e, t);
  function i() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i());
}
var Be = function() {
  return Be = Object.assign || function(t) {
    for (var i, n = 1, r = arguments.length; n < r; n++) {
      i = arguments[n];
      for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
    }
    return t;
  }, Be.apply(this, arguments);
};
function v(e, t, i, n) {
  var r = arguments.length, a = r < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, i) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, i, n);
  else for (var o = e.length - 1; o >= 0; o--) (s = e[o]) && (a = (r < 3 ? s(a) : r > 3 ? s(t, i, a) : s(t, i)) || a);
  return r > 3 && a && Object.defineProperty(t, i, a), a;
}
function Ye(e) {
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
function fr(e, t) {
  var i = e.matches || e.webkitMatchesSelector || e.msMatchesSelector;
  return i.call(e, t);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const br = (e) => e.nodeType === Node.ELEMENT_NODE, zi = () => {
}, gr = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", zi, gr);
document.removeEventListener("x", zi);
const Ti = (e = window.document) => {
  let t = e.activeElement;
  const i = [];
  if (!t)
    return i;
  for (; t && (i.push(t), t.shadowRoot); )
    t = t.shadowRoot.activeElement;
  return i;
}, yr = (e) => {
  const t = Ti();
  if (!t.length)
    return !1;
  const i = t[t.length - 1], n = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let r = [];
  const a = (s) => {
    r = s.composedPath();
  };
  return document.body.addEventListener("check-if-focused", a), i.dispatchEvent(n), document.body.removeEventListener("check-if-focused", a), r.indexOf(e) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Rt extends Ee {
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
var _i = (
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
var vr = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Sr = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Zt = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function Ar(e, t, i) {
  if (!e)
    return { x: 0, y: 0 };
  var n = t.x, r = t.y, a = n + i.left, s = r + i.top, o, l;
  if (e.type === "touchstart") {
    var d = e;
    o = d.changedTouches[0].pageX - a, l = d.changedTouches[0].pageY - s;
  } else {
    var m = e;
    o = m.pageX - a, l = m.pageY - s;
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
var Xt = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Qt = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Je = [], wr = (
  /** @class */
  function(e) {
    hr(t, e);
    function t(i) {
      var n = e.call(this, Be(Be({}, t.defaultAdapter), i)) || this;
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
        return vr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return Sr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return Zt;
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
        var r = t.cssClasses, a = r.ROOT, s = r.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.addClass(a), i.adapter.isUnbounded() && (i.adapter.addClass(s), i.layoutInternal());
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
          for (var a = Ye(Xt), s = a.next(); !s.done; s = a.next()) {
            var o = s.value;
            this.adapter.registerInteractionHandler(o, this.activateHandler);
          }
        } catch (l) {
          n = { error: l };
        } finally {
          try {
            s && !s.done && (r = a.return) && r.call(a);
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
          for (var a = Ye(Qt), s = a.next(); !s.done; s = a.next()) {
            var o = s.value;
            this.adapter.registerDocumentInteractionHandler(o, this.deactivateHandler);
          }
        } catch (l) {
          n = { error: l };
        } finally {
          try {
            s && !s.done && (r = a.return) && r.call(a);
          } finally {
            if (n) throw n.error;
          }
        }
    }, t.prototype.deregisterRootHandlers = function() {
      var i, n;
      try {
        for (var r = Ye(Xt), a = r.next(); !a.done; a = r.next()) {
          var s = a.value;
          this.adapter.deregisterInteractionHandler(s, this.activateHandler);
        }
      } catch (o) {
        i = { error: o };
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
        for (var r = Ye(Qt), a = r.next(); !a.done; a = r.next()) {
          var s = a.value;
          this.adapter.deregisterDocumentInteractionHandler(s, this.deactivateHandler);
        }
      } catch (o) {
        i = { error: o };
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
          var a = this.previousActivationEvent, s = a && i !== void 0 && a.type !== i.type;
          if (!s) {
            r.isActivated = !0, r.isProgrammatic = i === void 0, r.activationEvent = i, r.wasActivatedByPointer = r.isProgrammatic ? !1 : i !== void 0 && (i.type === "mousedown" || i.type === "touchstart" || i.type === "pointerdown");
            var o = i !== void 0 && Je.length > 0 && Je.some(function(l) {
              return n.adapter.containsEventTarget(l);
            });
            if (o) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (Je.push(i.target), this.registerDeactivationHandlers(i)), r.wasElementMadeActive = this.checkElementMadeActive(i), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Je = [], !r.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (r.wasElementMadeActive = n.checkElementMadeActive(i), r.wasElementMadeActive && n.animateActivation()), r.wasElementMadeActive || (n.activationState = n.defaultActivationState());
            });
          }
        }
      }
    }, t.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, t.prototype.animateActivation = function() {
      var i = this, n = t.strings, r = n.VAR_FG_TRANSLATE_START, a = n.VAR_FG_TRANSLATE_END, s = t.cssClasses, o = s.FG_DEACTIVATION, l = s.FG_ACTIVATION, d = t.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var m = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var b = this.getFgTranslationCoordinates(), y = b.startPoint, x = b.endPoint;
        m = y.x + "px, " + y.y + "px", h = x.x + "px, " + x.y + "px";
      }
      this.adapter.updateCssVariable(r, m), this.adapter.updateCssVariable(a, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(o), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, d);
    }, t.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, n = i.activationEvent, r = i.wasActivatedByPointer, a;
      r ? a = Ar(n, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
    }, t.prototype.runDeactivationUXLogicIfReady = function() {
      var i = this, n = t.cssClasses.FG_DEACTIVATION, r = this.activationState, a = r.hasDeactivationUXRun, s = r.isActivated, o = a || !s;
      o && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(n), this.fgDeactivationRemovalTimer = setTimeout(function() {
        i.adapter.removeClass(n);
      }, Zt.FG_DEACTIVATION_MS));
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
        var r = Be({}, n);
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
        var s = Math.sqrt(Math.pow(i.frame.width, 2) + Math.pow(i.frame.height, 2));
        return s + t.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? n : r();
      var a = Math.floor(n * t.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, t.prototype.updateLayoutCssVars = function() {
      var i = t.strings, n = i.VAR_FG_SIZE, r = i.VAR_LEFT, a = i.VAR_TOP, s = i.VAR_FG_SCALE;
      this.adapter.updateCssVariable(n, this.initialSize + "px"), this.adapter.updateCssVariable(s, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(r, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, t;
  }(_i)
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
const Yt = /* @__PURE__ */ new WeakMap(), xr = dt((e) => (t) => {
  if (!(t instanceof ut) || t instanceof Di || t.committer.name !== "style" || t.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = t, { style: n } = i.element;
  let r = Yt.get(t);
  r === void 0 && (n.cssText = i.strings.join(" "), Yt.set(t, r = /* @__PURE__ */ new Set())), r.forEach((a) => {
    a in e || (r.delete(a), a.indexOf("-") === -1 ? n[a] = null : n.removeProperty(a));
  });
  for (const a in e)
    r.add(a), a.indexOf("-") === -1 ? n[a] = e[a] : n.setProperty(a, e[a]);
});
class q extends Rt {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = wr;
  }
  get isActive() {
    return fr(this.parentElement || this, ":active");
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
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Te(n)}"
          style="${xr({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
v([
  M(".mdc-ripple-surface")
], q.prototype, "mdcRoot", void 0);
v([
  g({ type: Boolean })
], q.prototype, "primary", void 0);
v([
  g({ type: Boolean })
], q.prototype, "accent", void 0);
v([
  g({ type: Boolean })
], q.prototype, "unbounded", void 0);
v([
  g({ type: Boolean })
], q.prototype, "disabled", void 0);
v([
  g({ type: Boolean })
], q.prototype, "activated", void 0);
v([
  g({ type: Boolean })
], q.prototype, "selected", void 0);
v([
  g({ type: Boolean })
], q.prototype, "internalUseStateLayerCustomProperties", void 0);
v([
  $()
], q.prototype, "hovering", void 0);
v([
  $()
], q.prototype, "bgFocused", void 0);
v([
  $()
], q.prototype, "fgActivation", void 0);
v([
  $()
], q.prototype, "fgDeactivation", void 0);
v([
  $()
], q.prototype, "fgScale", void 0);
v([
  $()
], q.prototype, "fgSize", void 0);
v([
  $()
], q.prototype, "translateStart", void 0);
v([
  $()
], q.prototype, "translateEnd", void 0);
v([
  $()
], q.prototype, "leftPos", void 0);
v([
  $()
], q.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Cr = me`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let Et = class extends q {
};
Et.styles = [Cr];
Et = v([
  le("mwc-ripple")
], Et);
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
        n.call(this, r), r.forEach((a, s) => {
          const l = this.constructor._observers.get(s);
          l !== void 0 && l.call(this, this[s], a);
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
class Vi {
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
class W extends Ee {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new Vi(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
      <span class="mdc-deprecated-list-item__graphic material-icons ${Te(t)}">
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
v([
  M("slot")
], W.prototype, "slotElement", void 0);
v([
  xi("mwc-ripple")
], W.prototype, "ripple", void 0);
v([
  g({ type: String })
], W.prototype, "value", void 0);
v([
  g({ type: String, reflect: !0 })
], W.prototype, "group", void 0);
v([
  g({ type: Number, reflect: !0 })
], W.prototype, "tabindex", void 0);
v([
  g({ type: Boolean, reflect: !0 }),
  Ie(function(e) {
    e ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], W.prototype, "disabled", void 0);
v([
  g({ type: Boolean, reflect: !0 })
], W.prototype, "twoline", void 0);
v([
  g({ type: Boolean, reflect: !0 })
], W.prototype, "activated", void 0);
v([
  g({ type: String, reflect: !0 })
], W.prototype, "graphic", void 0);
v([
  g({ type: Boolean })
], W.prototype, "multipleGraphics", void 0);
v([
  g({ type: Boolean })
], W.prototype, "hasMeta", void 0);
v([
  g({ type: Boolean, reflect: !0 }),
  Ie(function(e) {
    e ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], W.prototype, "noninteractive", void 0);
v([
  g({ type: Boolean, reflect: !0 }),
  Ie(function(e) {
    const t = this.getAttribute("role"), i = t === "gridcell" || t === "option" || t === "row" || t === "tab";
    if (i && e ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(e, "property");
  })
], W.prototype, "selected", void 0);
v([
  $()
], W.prototype, "shouldRenderRipple", void 0);
v([
  $()
], W.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ri = me`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let It = class extends W {
};
It.styles = [Ri];
It = v([
  le("mwc-list-item")
], It);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Nr(e, t, i) {
  const n = e.constructor;
  if (!i) {
    const o = `__${t}`;
    if (i = n.getPropertyDescriptor(t, o), !i)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const r = i;
  let a = "";
  if (!r.set)
    throw new Error(`@ariaProperty requires a setter for ${t}`);
  const s = {
    configurable: !0,
    enumerable: !0,
    set(o) {
      a === "" && (a = n.getPropertyOptions(t).attribute), this.hasAttribute(a) && this.removeAttribute(a), r.set.call(this, o);
    }
  };
  return r.get && (s.get = function() {
    return r.get.call(this);
  }), s;
}
function Pt(e, t, i) {
  if (t !== void 0)
    return Nr(e, t, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Pi extends Rt {
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
Pi.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const yt = /* @__PURE__ */ new WeakMap(), be = dt((e) => (t) => {
  const i = yt.get(t);
  if (e === void 0 && t instanceof ut) {
    if (i !== void 0 || !yt.has(t)) {
      const n = t.committer.name;
      t.committer.element.removeAttribute(n);
    }
  } else e !== i && t.setValue(e);
  yt.set(t, e);
});
class H extends Pi {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new Vi(() => (this.shouldRenderRipple = !0, this.ripple.then((t) => this.rippleElement = t), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(t) {
    const i = t.get("indeterminate"), n = t.get("checked"), r = t.get("disabled");
    if (i !== void 0 || n !== void 0 || r !== void 0) {
      const a = this.calculateAnimationStateName(!!n, !!i, !!r), s = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${a}-${s}`;
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
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Te(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${be(this.name)}"
              aria-checked="${be(n)}"
              aria-label="${be(this.ariaLabel)}"
              aria-labelledby="${be(this.ariaLabelledBy)}"
              aria-describedby="${be(this.ariaDescribedBy)}"
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
v([
  M(".mdc-checkbox")
], H.prototype, "mdcRoot", void 0);
v([
  M("input")
], H.prototype, "formElement", void 0);
v([
  g({ type: Boolean, reflect: !0 })
], H.prototype, "checked", void 0);
v([
  g({ type: Boolean })
], H.prototype, "indeterminate", void 0);
v([
  g({ type: Boolean, reflect: !0 })
], H.prototype, "disabled", void 0);
v([
  g({ type: String, reflect: !0 })
], H.prototype, "name", void 0);
v([
  g({ type: String })
], H.prototype, "value", void 0);
v([
  Pt,
  g({ type: String, attribute: "aria-label" })
], H.prototype, "ariaLabel", void 0);
v([
  Pt,
  g({ type: String, attribute: "aria-labelledby" })
], H.prototype, "ariaLabelledBy", void 0);
v([
  Pt,
  g({ type: String, attribute: "aria-describedby" })
], H.prototype, "ariaDescribedBy", void 0);
v([
  g({ type: Boolean })
], H.prototype, "reducedTouchTarget", void 0);
v([
  $()
], H.prototype, "animationClass", void 0);
v([
  $()
], H.prototype, "shouldRenderRipple", void 0);
v([
  $()
], H.prototype, "focused", void 0);
v([
  $()
], H.prototype, "useStateLayerCustomProperties", void 0);
v([
  xi("mwc-ripple")
], H.prototype, "ripple", void 0);
v([
  Un({ passive: !0 })
], H.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Er = me`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let kt = class extends H {
};
kt.styles = [Er];
kt = v([
  le("mwc-checkbox")
], kt);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ze extends W {
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
      <span class=${Te(t)}>
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
v([
  M("slot")
], Ze.prototype, "slotElement", void 0);
v([
  M("mwc-checkbox")
], Ze.prototype, "checkboxElement", void 0);
v([
  g({ type: Boolean })
], Ze.prototype, "left", void 0);
v([
  g({ type: String, reflect: !0 })
], Ze.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ir = me`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Fe = class extends Ze {
};
Fe.styles = [Ri, Ir];
Fe = v([
  le("mwc-check-list-item")
], Fe);
function E(e, t, i) {
  const n = e.createElementNS(e.documentElement.namespaceURI, t);
  return Object.entries(i).filter(([r, a]) => a !== null).forEach(([r, a]) => n.setAttribute(r, a)), n;
}
function z(e, t) {
  const i = e.cloneNode(!1);
  return Object.entries(t).forEach(([n, r]) => {
    r === null ? i.removeAttribute(n) : i.setAttribute(n, r);
  }), i;
}
function B(e, t) {
  return !e || !t ? [] : Array.from(e.children).filter(
    (i) => i.tagName === t
  );
}
var kr = Object.defineProperty, Dr = Object.getOwnPropertyDescriptor, oe = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Dr(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (r = (n ? s(t, i, r) : s(r)) || r);
  return n && r && kr(t, i, r), r;
};
let K = class extends Yn {
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
    return this.reservedValues && this.reservedValues.some((e) => e === this.value) ? (this.setCustomValidity(c("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
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
          >${e === null ? c("textfield.noMultiplier") : e}</mwc-list-item
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
oe([
  g({ type: Boolean })
], K.prototype, "nullable", 2);
oe([
  g({ type: Array })
], K.prototype, "multipliers", 2);
oe([
  g({ type: String })
], K.prototype, "multiplier", 1);
oe([
  g({ type: String })
], K.prototype, "unit", 2);
oe([
  $()
], K.prototype, "null", 1);
oe([
  g({ type: String })
], K.prototype, "maybeValue", 1);
oe([
  g({ type: String })
], K.prototype, "defaultValue", 2);
oe([
  g({ type: Array })
], K.prototype, "reservedValues", 2);
oe([
  M("mwc-switch")
], K.prototype, "nullSwitch", 2);
oe([
  M("mwc-menu")
], K.prototype, "multiplierMenu", 2);
oe([
  M("mwc-icon-button")
], K.prototype, "multiplierButton", 2);
K = oe([
  le("wizard-textfield")
], K);
var Lr = Object.defineProperty, $r = Object.getOwnPropertyDescriptor, _e = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? $r(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (r = (n ? s(t, i, r) : s(r)) || r);
  return n && r && Lr(t, i, r), r;
};
let ve = class extends Qn {
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
_e([
  g({ type: Boolean })
], ve.prototype, "nullable", 2);
_e([
  $()
], ve.prototype, "null", 1);
_e([
  g({ type: String })
], ve.prototype, "maybeValue", 1);
_e([
  g({ type: String })
], ve.prototype, "defaultValue", 2);
_e([
  g({ type: Array })
], ve.prototype, "reservedValues", 2);
_e([
  M("mwc-switch")
], ve.prototype, "nullSwitch", 2);
ve = _e([
  le("wizard-select")
], ve);
var zr = Object.defineProperty, Tr = Object.getOwnPropertyDescriptor, ae = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Tr(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (r = (n ? s(t, i, r) : s(r)) || r);
  return n && r && zr(t, i, r), r;
};
let Z = class extends Ee {
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
ae([
  g({ type: String })
], Z.prototype, "label", 2);
ae([
  g({ type: String })
], Z.prototype, "helper", 2);
ae([
  g({ type: Boolean })
], Z.prototype, "nullable", 2);
ae([
  g({ type: Boolean })
], Z.prototype, "defaultChecked", 2);
ae([
  g({ type: String })
], Z.prototype, "maybeValue", 1);
ae([
  g({ type: Boolean })
], Z.prototype, "disabled", 2);
ae([
  $()
], Z.prototype, "null", 1);
ae([
  $()
], Z.prototype, "checked", 1);
ae([
  $()
], Z.prototype, "deactivateCheckbox", 2);
ae([
  $()
], Z.prototype, "formfieldLabel", 1);
ae([
  M("mwc-switch")
], Z.prototype, "nullSwitch", 2);
ae([
  M("mwc-checkbox")
], Z.prototype, "checkbox", 2);
Z = ae([
  le("wizard-checkbox")
], Z);
function _r(e) {
  return typeof e == "function";
}
function f(e) {
  return e instanceof K || e instanceof ve || e instanceof Z ? e.maybeValue : e.value ?? null;
}
function Ot(e) {
  return e instanceof K ? e.multiplier : null;
}
function de(e, t) {
  if (!e)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...t,
      detail: { wizard: null, ...t?.detail }
    });
  const i = _r(e) ? e : () => e;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { wizard: i, ...t?.detail }
  });
}
function Ve(e) {
  return de(e, { detail: { subwizard: !0 } });
}
function Vr(e) {
  let t = "", i = e.parentElement;
  for (; i?.getAttribute("name"); )
    t = "/" + i.getAttribute("name") + t, i = i.parentElement;
  return t;
}
function Xe(e) {
  const t = e.documentElement;
  return (t.getAttribute("version") ?? "2003") + (t.getAttribute("revision") ?? "") + (t.getAttribute("release") ?? "");
}
function Oi(e) {
  const t = e.getAttribute("name");
  return t || void 0;
}
function Jt(e) {
  const t = e.getAttribute("desc");
  return t || void 0;
}
function j(e) {
  const t = e.split(">"), i = t.pop() ?? "";
  return [t.join(">"), i];
}
const O = ":not(*)";
function Rr(e) {
  return `${e.getAttribute("version")}	${e.getAttribute("revision")}`;
}
function Pr(e, t) {
  const [i, n] = t.split("	");
  return !i || !n ? O : `${e}[version="${i}"][revision="${n}"]`;
}
function ei(e) {
  return N(e.parentElement) + ">" + e.getAttribute("connectivityNode");
}
function ti(e, t) {
  const [i, n] = j(t), r = F[e].parents.flatMap(
    (a) => U(a, i).split(",")
  );
  return G(
    r,
    [">"],
    [`${e}[connectivityNode="${n}"]`]
  ).map((a) => a.join("")).join(",");
}
function Or(e) {
  const [t, i, n, r, a, s] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((o) => e.getAttribute(o));
  return t === "None" ? `${N(e.parentElement)}>(${r} ${s} ${a})` : `${t} ${i || "(Client)"}/${n ?? ""} ${r} ${a ?? ""}`;
}
function Fr(e, t) {
  if (t.endsWith(")")) {
    const [b, y] = j(t), [x, k, T] = y.substring(1, y.length - 1).split(" ");
    if (!x || !k) return O;
    const C = F[e].parents.flatMap(
      (J) => U(J, b).split(",")
    );
    return G(
      C,
      [">"],
      [`${e}[iedName="None"][lnClass="${x}"][lnType="${k}"][lnInst="${T}"]`]
    ).map((J) => J.join("")).join(",");
  }
  const [i, n, r, a, s] = t.split(/[ /]/);
  if (!i || !n || !a) return O;
  const [
    o,
    l,
    d,
    m,
    h
  ] = [
    [`[iedName="${i}"]`],
    n === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${n}"]`],
    r ? [`[prefix="${r}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    s ? [`[lnInst="${s}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return G(
    [e],
    o,
    l,
    d,
    m,
    h
  ).map((b) => b.join("")).join(",");
}
function Mr(e) {
  return `${N(e.parentElement)}>${e.getAttribute(
    "iedName"
  )} ${e.getAttribute("apName")}`;
}
function qr(e, t) {
  const [i, n] = j(t), [r, a] = n.split(" ");
  return `${U(
    "IED",
    i
  )}>${e}[iedName="${r}"][apName="${a}"]`;
}
function Hr(e) {
  return `${N(e.parentElement)}>${e.getAttribute("associationID") ?? ""}`;
}
function Br(e, t) {
  const [i, n] = j(t);
  return n ? `${U(
    "Server",
    i
  )}>${e}[associationID="${n}"]` : O;
}
function Gr(e) {
  return `${N(e.closest("IED"))}>>${e.getAttribute("inst")}`;
}
function Wr(e, t) {
  const [i, n] = t.split(">>");
  return n ? `IED[name="${i}"] ${e}[inst="${n}"]` : O;
}
function Ur(e) {
  const t = e.textContent, [i, n, r, a, s] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => e.getAttribute(o));
  return `${N(e.parentElement)}>${t} ${i || ""} ${n || ""}/${r ?? ""} ${a ?? ""} ${s ?? ""}`;
}
function jr(e, t) {
  const [i, n] = j(t), [r, a, s, o, l, d] = n.split(/[ /]/), [
    m,
    h,
    b,
    y,
    x,
    k
  ] = [
    F[e].parents.flatMap(
      (T) => U(T, i).split(",")
    ),
    [`${r}`],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${l}"]`],
    d ? [`[lnInst="${d}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return G(
    m,
    [">"],
    [e],
    h,
    b,
    y,
    x,
    k
  ).map((T) => T.join("")).join(",");
}
function Kr(e) {
  const [t, i, n, r, a, s, o, l] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((m) => e.getAttribute(m)), d = `${t}/${i ?? ""} ${n} ${r ?? ""}.${a} ${s || ""}`;
  return `${N(e.parentElement)}>${d} (${o}${l ? " [" + l + "]" : ""})`;
}
function Zr(e, t) {
  const [i, n] = j(t), [r, a, s, o] = n.split(/[ /.]/), l = n.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), d = l && l[1] ? l[1] : "", m = l && l[2] ? l[2] : "", h = n.match(/\(([A-Z]{2})/), b = n.match(/ \[([0-9]{1,2})\]/), y = h && h[1] ? h[1] : "", x = b && b[1] ? b[1] : "", [
    k,
    T,
    C,
    J,
    he,
    Ae,
    ht,
    ft,
    bt
  ] = [
    F[e].parents.flatMap(
      (Me) => U(Me, i).split(",")
    ),
    [`[ldInst="${r}"]`],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    o ? [`[lnInst="${o}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${d}"]`],
    m ? [`[daName="${m}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${y}"]`],
    x ? [`[ix="${x}"]`] : [":not([ix])", '[ix=""]']
  ];
  return G(
    k,
    [">"],
    [e],
    T,
    C,
    J,
    he,
    Ae,
    ht,
    ft,
    bt
  ).map((Me) => Me.join("")).join(",");
}
function Xr(e) {
  if (!e.parentElement) return NaN;
  const t = N(e.parentElement), i = e.getAttribute("iedName"), n = e.getAttribute("intAddr"), r = Array.from(
    e.parentElement.querySelectorAll(`ExtRef[intAddr="${n}"]`)
  ).indexOf(e);
  if (n) return `${t}>${n}[${r}]`;
  const [
    a,
    s,
    o,
    l,
    d,
    m,
    h,
    b,
    y,
    x,
    k,
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
  ].map((he) => e.getAttribute(he)), C = T ? `${h}:${T} ${b ?? ""}/${y ?? ""} ${x ?? ""} ${k ?? ""}` : "", J = `${i} ${a}/${s ?? ""} ${o} ${l ?? ""} ${d} ${m || ""}`;
  return `${t}>${C ? C + " " : ""}${J}${n ? `@${n}` : ""}`;
}
function Qr(e, t) {
  const [i, n] = j(t), r = F[e].parents.flatMap(
    (qe) => U(qe, i).split(",")
  );
  if (n.endsWith("]")) {
    const [qe] = n.split("["), Gn = [`[intAddr="${qe}"]`];
    return G(r, [">"], [e], Gn).map((Wn) => Wn.join("")).join(",");
  }
  let a, s, o, l, d, m, h, b, y, x, k, T, C, J;
  !n.includes(":") && !n.includes("@") ? [a, s, o, l, d, m, h] = n.split(/[ /]/) : n.includes(":") && !n.includes("@") ? [
    b,
    y,
    x,
    k,
    T,
    C,
    a,
    s,
    o,
    l,
    d,
    m,
    h
  ] = n.split(/[ /:]/) : !n.includes(":") && n.includes("@") ? [a, s, o, l, d, m, h, J] = n.split(/[ /@]/) : [
    b,
    y,
    x,
    k,
    T,
    C,
    a,
    s,
    o,
    l,
    d,
    m,
    h,
    J
  ] = n.split(/[ /:@]/);
  const [
    he,
    Ae,
    ht,
    ft,
    bt,
    Me,
    Rn,
    Pn,
    On,
    Fn,
    Mn,
    qn,
    Hn,
    Bn
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])"],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    l ? [`[lnClass="${l}"]`] : [":not([lnClass])"],
    d ? [`[lnInst="${d}"]`] : [":not([lnInst])", '[lnInst=""]'],
    m ? [`[doName="${m}"]`] : [":not([doName])"],
    h ? [`[daName="${h}"]`] : [":not([daName])", '[daName=""]'],
    b ? [`[serviceType="${b}"]`] : [":not([serviceType])", '[serviceType=""]'],
    y ? [`[srcCBName="${y}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    x ? [`[srcLDInst="${x}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    k ? [`[srcPrefix="${k}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    T ? [`[srcLNClass="${T}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    C ? [`[srcLNInst="${C}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    J ? [`[intAddr="${J}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return G(
    r,
    [">"],
    [e],
    he,
    Ae,
    ht,
    ft,
    bt,
    Me,
    Rn,
    Pn,
    On,
    Fn,
    Mn,
    qn,
    Hn,
    Bn
  ).map((qe) => qe.join("")).join(",");
}
function Yr(e) {
  const [t, i, n] = ["prefix", "lnClass", "inst"].map(
    (r) => e.getAttribute(r)
  );
  return `${N(e.parentElement)}>${t ?? ""} ${i} ${n}`;
}
function Jr(e, t) {
  const [i, n] = j(t), r = F[e].parents.flatMap(
    (h) => U(h, i).split(",")
  ), [a, s, o] = n.split(" ");
  if (!s) return O;
  const [l, d, m] = [
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    [`[inst="${o}"]`]
  ];
  return G(
    r,
    [">"],
    [e],
    l,
    d,
    m
  ).map((h) => h.join("")).join(",");
}
function ea(e) {
  const [t, i, n, r, a, s] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => e.getAttribute(o));
  return `${N(e.parentElement)}>${i} ${t || ""} ${n}/${r ?? ""} ${a} ${s}`;
}
function ta(e, t) {
  const [i, n] = j(t), r = F[e].parents.flatMap(
    (C) => U(C, i).split(",")
  ), [a, s, o, l, d, m] = n.split(/[ /]/), [
    h,
    b,
    y,
    x,
    k,
    T
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])", '[iedName=""]'],
    s ? [`[apRef="${s}"]`] : [":not([apRef])", '[apRef=""]'],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    l ? [`[prefix="${l}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${d}"]`],
    m ? [`[lnInst="${m}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return G(
    r,
    [">"],
    [e],
    h,
    b,
    y,
    x,
    k,
    T
  ).map((C) => C.join("")).join(",");
}
function ii(e) {
  const [t, i] = ["name", "ix"].map((n) => e.getAttribute(n));
  return `${N(e.parentElement)}>${t}${i ? "[" + i + "]" : ""}`;
}
function Dt(e, t, i = -1) {
  i === -1 && (i = t.split(">").length);
  const [n, r] = j(t), [a, s, o, l] = r.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!s) return O;
  if (i === 0) return `${e}[name="${s}"]`;
  const d = F[e].parents.flatMap(
    (b) => b === "SDI" ? Dt(b, n, i - 1).split(",") : U(b, n).split(",")
  ).filter((b) => !b.startsWith(O));
  if (d.length === 0) return O;
  const [m, h] = [
    [`[name="${s}"]`],
    l ? [`[ix="${l}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return G(
    d,
    [">"],
    [e],
    m,
    h
  ).map((b) => b.join("")).join(",");
}
function ia(e) {
  if (!e.parentElement) return NaN;
  const t = e.getAttribute("sGroup"), i = Array.from(e.parentElement.children).filter((n) => n.getAttribute("sGroup") === t).findIndex((n) => n.isSameNode(e));
  return `${N(e.parentElement)}>${t ? t + "." : ""} ${i}`;
}
function na(e, t) {
  const [i, n] = j(t), [r, a] = n.split(" "), s = parseFloat(a), o = F[e].parents.flatMap(
    (m) => U(m, i).split(",")
  ), [l, d] = [
    r ? [`[sGroup="${r}"]`] : [""],
    s ? [`:nth-child(${s + 1})`] : [""]
  ];
  return G(
    o,
    [">"],
    [e],
    l,
    d
  ).map((m) => m.join("")).join(",");
}
function ra(e) {
  const [t, i] = ["iedName", "apName"].map(
    (n) => e.getAttribute(n)
  );
  return `${t} ${i}`;
}
function aa(e, t) {
  const [i, n] = t.split(" ");
  return !i || !n ? O : `${e}[iedName="${i}"][apName="${n}"]`;
}
function ni(e) {
  const [t, i] = ["ldInst", "cbName"].map(
    (n) => e.getAttribute(n)
  );
  return `${t} ${i}`;
}
function ri(e, t) {
  const [i, n] = t.split(" ");
  return !i || !n ? O : `${e}[ldInst="${i}"][cbName="${n}"]`;
}
function sa(e) {
  if (!e.parentElement) return NaN;
  if (!e.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const t = e.getAttribute("type");
  return e.parentElement.children.length > 1 && t !== "Connection" && t !== "RedConn" ? NaN : `${N(e.parentElement)}>${t}`;
}
function oa(e, t) {
  const [i, n] = j(t), [r, a] = [
    F[e].parents.flatMap(
      (s) => U(s, i).split(",")
    ),
    n ? [`[type="${n}"]`] : [""]
  ];
  return G(r, [">"], [e], a).map((s) => s.join("")).join(",");
}
function ca(e) {
  if (!e.parentElement) return NaN;
  const t = e.parentElement, i = e.getAttribute("type");
  if (t.tagName === "PhysConn")
    return `${N(e.parentElement)}>${i}`;
  const n = Array.from(e.parentElement.children).filter((r) => r.getAttribute("type") === i).findIndex((r) => r.isSameNode(e));
  return `${N(e.parentElement)}>${i} [${n}]`;
}
function la(e, t) {
  const [i, n] = j(t), [r] = n.split(" "), a = n && n.match(/\[([0-9]+)\]/) && n.match(/\[([0-9]+)\]/)[1] ? parseFloat(n.match(/\[([0-9]+)\]/)[1]) : NaN, [s, o, l] = [
    F[e].parents.flatMap(
      (d) => U(d, i).split(",")
    ),
    [`[type="${r}"]`],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return G(
    s,
    [">"],
    [e],
    o,
    l
  ).map((d) => d.join("")).join(",");
}
function da(e) {
  return `${N(e.parentElement)}>${e.getAttribute("ord")}`;
}
function ua(e, t) {
  const [i, n] = j(t);
  return `${U("EnumType", i)}>${e}[ord="${n}"]`;
}
function pa(e) {
  return `${N(e.parentElement)}>${e.getAttribute("type") || "8-MMS"}	${e.textContent}`;
}
function ma(e, t) {
  const [i, n] = j(t), [r, a] = n.split("	"), [s] = [
    F[e].parents.flatMap(
      (o) => U(o, i).split(",")
    )
  ];
  return G(
    s,
    [">"],
    [e],
    [`[type="${r}"]`],
    [">"],
    [a]
  ).map((o) => o.join("")).join(",");
}
function ha() {
  return "";
}
function fa() {
  return ":root";
}
function L(e) {
  return e.parentElement.tagName === "SCL" ? e.getAttribute("name") : `${N(e.parentElement)}>${e.getAttribute("name")}`;
}
function D(e, t, i = -1) {
  i === -1 && (i = t.split(">").length);
  const [n, r] = j(t);
  if (!r) return O;
  if (i === 0) return `${e}[name="${r}"]`;
  const a = F[e].parents;
  if (!a) return O;
  const s = a.flatMap(
    (o) => F[o].selector === F.Substation.selector ? D(o, n, i - 1).split(",") : U(o, n).split(",")
  ).filter((o) => !o.startsWith(O));
  return s.length === 0 ? O : G(s, [">"], [e], [`[name="${r}"]`]).map((o) => o.join("")).join(",");
}
function S(e) {
  return N(e.parentElement).toString();
}
function A(e, t) {
  const i = F[e].parents;
  if (!i) return O;
  const n = i.flatMap((r) => U(r, t).split(",")).filter((r) => !r.startsWith(O));
  return n.length === 0 ? O : G(n, [">"], [e]).map((r) => r.join("")).join(",");
}
function et(e) {
  return `#${e.id}`;
}
function tt(e, t) {
  const i = t.replace(/^#/, "");
  return i ? `${e}[id="${i}"]` : O;
}
const Fi = [
  "TransformerWinding",
  "ConductingEquipment"
], Mi = [
  "GeneralEquipment",
  "PowerTransformer",
  ...Fi
], Lt = ["Substation", "VoltageLevel", "Bay"], qi = ["Process", "Line"], Hi = ["EqSubFunction", "EqFunction"], ba = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Mi,
  ...Lt,
  ...qi,
  ...Hi
], Bi = ["ConnectivityNode", ...ba], ga = ["GOOSESecurity", "SMVSecurity"], ya = ["SubNetwork", ...ga, ...Bi], va = ["BDA", "DA"], Sa = ["SampledValueControl", "GSEControl"], Aa = ["LogControl", "ReportControl"], wa = [...Sa, ...Aa], xa = ["GSE", "SMV"], Ca = [
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
  ...wa,
  ...xa,
  ...va
], ze = ["LN0", "LN"], Na = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Ea = ["Subject", "IssuerName"], Ia = ["MinTime", "MaxTime"], ka = ["LNodeType", "DOType", "DAType", "EnumType"], Da = [
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
], La = ["DynDataSet", "ConfDataSet"], $a = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...La
], za = ["ConfLogControl", "ConfSigRef"], Ta = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], _a = ["SCL", ...ya, ...Ca, ...ka], Gi = [
  ..._a,
  ...Na,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Ea,
  ...Ia,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...ze,
  ...Da,
  "DynAssociation",
  "SettingGroups",
  ...$a,
  ...za,
  ...Ta,
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
], Va = new Set(Gi);
function Ft(e) {
  return Va.has(e);
}
const pt = ["Text", "Private"], Ce = [...pt], P = [...pt], it = [...pt], ai = [...P, "Val"], Wi = [...Ce, "LNode"], Ne = [...Wi], $t = [...Ne], vt = [
  ...Ne,
  "PowerTransformer",
  "GeneralEquipment"
], si = [
  ...$t,
  "Terminal"
], oi = [...P, "Address"], Ui = [...Ce], ci = [...Ui, "IEDName"], li = [
  ...P,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], di = [
  ...Ne,
  "GeneralEquipment",
  "Function"
], ui = [...Ui, "TrgOps"], pi = [
  ...Ne,
  "GeneralEquipment",
  "EqSubFunction"
], F = {
  AccessControl: {
    identity: S,
    selector: A,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: L,
    selector: D,
    parents: ["IED"],
    children: [
      ...Ce,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: S,
    selector: A,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: Hr,
    selector: Br,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: S,
    selector: A,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: L,
    selector: D,
    parents: ["DAType"],
    children: [...ai]
  },
  BitRate: {
    identity: S,
    selector: A,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: L,
    selector: D,
    parents: ["VoltageLevel"],
    children: [
      ...vt,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: ea,
    selector: ta,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: S,
    selector: A,
    parents: ["SCL"],
    children: [...P, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: L,
    selector: D,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...si,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: S,
    selector: A,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: ra,
    selector: aa,
    parents: ["SubNetwork"],
    children: [...P, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: L,
    selector: D,
    parents: ["Bay", "Line"],
    children: [...Wi]
  },
  DA: {
    identity: L,
    selector: D,
    parents: ["DOType"],
    children: [...ai]
  },
  DAI: {
    identity: ii,
    selector: Dt,
    parents: ["DOI", "SDI"],
    children: [...P, "Val"]
  },
  DAType: {
    identity: et,
    selector: tt,
    parents: ["DataTypeTemplates"],
    children: [...it, "BDA", "ProtNs"]
  },
  DO: {
    identity: L,
    selector: D,
    parents: ["LNodeType"],
    children: [...P]
  },
  DOI: {
    identity: L,
    selector: D,
    parents: [...ze],
    children: [...P, "SDI", "DAI"]
  },
  DOType: {
    identity: et,
    selector: tt,
    parents: ["DataTypeTemplates"],
    children: [...it, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: L,
    selector: D,
    parents: [...ze],
    children: [...Ce, "FCDA"]
  },
  DataSetDirectory: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: S,
    selector: A,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: et,
    selector: tt,
    parents: ["DataTypeTemplates"],
    children: [...it, "EnumVal"]
  },
  EnumVal: {
    identity: da,
    selector: ua,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: L,
    selector: D,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...pi]
  },
  EqSubFunction: {
    identity: L,
    selector: D,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...pi]
  },
  ExtRef: {
    identity: Xr,
    selector: Qr,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: Kr,
    selector: Zr,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: L,
    selector: D,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...Ne,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: L,
    selector: D,
    parents: [
      "SubFunction",
      "Function",
      ...qi,
      ...Hi,
      ...Lt
    ],
    children: [...$t, "EqFunction"]
  },
  GetCBValues: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: L,
    selector: D,
    parents: ["AccessPoint"],
    children: [...Ce, "Subject", "IssuerName"]
  },
  GSE: {
    identity: ni,
    selector: ri,
    parents: ["ConnectedAP"],
    children: [...oi, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: L,
    selector: D,
    parents: ["LN0"],
    children: [...ci, "Protocol"]
  },
  GSESettings: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: S,
    selector: A,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: S,
    selector: A,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: Rr,
    selector: Pr,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: L,
    selector: D,
    parents: ["SCL"],
    children: [...P, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: Ur,
    selector: jr,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: S,
    selector: A,
    parents: [...ze],
    children: [...P, "ExtRef"]
  },
  IssuerName: {
    identity: S,
    selector: A,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: Mr,
    selector: qr,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: Gr,
    selector: Wr,
    parents: ["Server"],
    children: [...P, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: Yr,
    selector: Jr,
    parents: ["AccessPoint", "LDevice"],
    children: [...li]
  },
  LN0: {
    identity: S,
    selector: A,
    parents: ["LDevice"],
    children: [
      ...li,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: Or,
    selector: Fr,
    parents: [...Bi],
    children: [...P]
  },
  LNodeType: {
    identity: et,
    selector: tt,
    parents: ["DataTypeTemplates"],
    children: [...it, "DO"]
  },
  Line: {
    identity: L,
    selector: D,
    parents: ["Process", "SCL"],
    children: [
      ...di,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: L,
    selector: D,
    parents: [...ze],
    children: [...P]
  },
  LogControl: {
    identity: L,
    selector: D,
    parents: [...ze],
    children: [...ui]
  },
  LogSettings: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: S,
    selector: A,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: S,
    selector: A,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: S,
    selector: A,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: ei,
    selector: ti,
    parents: ["TransformerWinding"],
    children: [...P]
  },
  OptFields: {
    identity: S,
    selector: A,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: ca,
    selector: la,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: sa,
    selector: oa,
    parents: ["ConnectedAP"],
    children: [...P, "P"]
  },
  PowerTransformer: {
    identity: L,
    selector: D,
    parents: [...Lt],
    children: [
      ...$t,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => O,
    parents: [],
    children: []
  },
  Process: {
    identity: L,
    selector: D,
    parents: ["Process", "SCL"],
    children: [
      ...di,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: pa,
    selector: ma,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: S,
    selector: A,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: L,
    selector: D,
    parents: [...ze],
    children: [...ui, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: S,
    selector: A,
    parents: ["ReportControl"],
    children: [...P, "ClientLN"]
  },
  SamplesPerSec: {
    identity: S,
    selector: A,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: L,
    selector: D,
    parents: ["LN0"],
    children: [...ci, "SmvOpts"]
  },
  SecPerSamples: {
    identity: S,
    selector: A,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: ha,
    selector: fa,
    parents: [],
    children: [
      ...pt,
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
    identity: ii,
    selector: Dt,
    parents: ["DOI", "SDI"],
    children: [...P, "SDI", "DAI"]
  },
  SDO: {
    identity: L,
    selector: D,
    parents: ["DOType"],
    children: [...Ce]
  },
  Server: {
    identity: S,
    selector: A,
    parents: ["AccessPoint"],
    children: [
      ...P,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: S,
    selector: A,
    parents: ["AccessPoint"],
    children: [...P]
  },
  Services: {
    identity: S,
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
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: S,
    selector: A,
    parents: ["LN0"],
    children: [...P]
  },
  SettingGroups: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: S,
    selector: A,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: S,
    selector: A,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: ni,
    selector: ri,
    parents: ["ConnectedAP"],
    children: [...oi]
  },
  SmvOpts: {
    identity: S,
    selector: A,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: L,
    selector: D,
    parents: ["AccessPoint"],
    children: [...Ce, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: L,
    selector: D,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...Fi
    ],
    children: [...Ne, "EqFunction"]
  },
  SubFunction: {
    identity: L,
    selector: D,
    parents: ["SubFunction", "Function"],
    children: [
      ...Ne,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: L,
    selector: D,
    parents: ["Communication"],
    children: [...Ce, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: S,
    selector: A,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: L,
    selector: D,
    parents: ["SCL"],
    children: [...vt, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: L,
    selector: D,
    parents: ["TransformerWinding"],
    children: [...Ne, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: ei,
    selector: ti,
    parents: [...Mi],
    children: [...P]
  },
  Text: {
    identity: S,
    selector: A,
    parents: Gi.filter((e) => e !== "Text" && e !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: S,
    selector: A,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: L,
    selector: D,
    parents: ["PowerTransformer"],
    children: [
      ...si,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: S,
    selector: A,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: ia,
    selector: na,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: S,
    selector: A,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: S,
    selector: A,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: L,
    selector: D,
    parents: ["Substation"],
    children: [...vt, "Voltage", "Bay", "Function"]
  }
};
function U(e, t) {
  return typeof t != "string" ? O : Ft(e) ? F[e].selector(e, t) : e;
}
function ge(e, t, i) {
  if (typeof i != "string" || !Ft(t)) return null;
  const n = e.querySelector(F[t].selector(t, i));
  return n === null || ie(n) ? n : Array.from(
    e.querySelectorAll(F[t].selector(t, i))
  ).find(ie) ?? null;
}
function N(e) {
  if (e === null) return NaN;
  if (e.closest("Private")) return NaN;
  const t = e.tagName;
  return Ft(t) ? F[t].identity(e) : NaN;
}
Ni((e) => (t) => {
  Object.keys(e).length ? t.setValue(e) : t.setValue("");
});
const je = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  decimal: "[+\\-]?[0-9]+(([.][0-9]*)?|([.][0-9]+))",
  unsigned: "[+]?[0-9]+(([.][0-9]*)?|([.][0-9]+))"
};
function Ra(e, t) {
  return typeof e == "string" && typeof t == "string" ? e.localeCompare(t) : typeof e == "object" && typeof t == "string" ? (e.getAttribute("name") ?? "").localeCompare(t) : typeof e == "string" && typeof t == "object" ? e.localeCompare(t.getAttribute("name")) : typeof e == "object" && typeof t == "object" ? (e.getAttribute("name") ?? "").localeCompare(
    t.getAttribute("name") ?? ""
  ) : 0;
}
function G(...e) {
  return e.reduce(
    (t, i) => t.flatMap((n) => i.map((r) => [n, r].flat())),
    [[]]
  );
}
function ji(e, t = /* @__PURE__ */ new WeakSet()) {
  if (t.has(e)) return 1 / 0;
  switch (e?.constructor) {
    case Object:
    case Array:
      return t.add(e), 1 + Math.max(
        -1,
        ...Object.values(e).map((i) => ji(i, t))
      );
    default:
      return 0;
  }
}
function ie(e) {
  return !e.closest("Private");
}
const Pa = 99, Ki = Array(Pa).fill(1).map((e, t) => `${t + 1}`);
function Oa(e) {
  const t = /* @__PURE__ */ new Map();
  return (i) => {
    if (!t.has(i)) {
      const n = new Set(
        B(e, "LNode").filter((r) => r.getAttribute("lnClass") === i).map((r) => r.getAttribute("lnInst"))
      );
      t.set(i, () => {
        const r = Ki.find((a) => !n.has(a));
        return r && n.add(r), r;
      });
    }
    return t.get(i)();
  };
}
function Fa(e) {
  const t = new Set(e.map((i) => i.getAttribute("inst") || ""));
  return Ki.find((i) => !t.has(i));
}
p`<svg
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
const Qe = {
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
}, Ma = V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Qe.gooseIcon}</svg>`;
V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Qe.reportIcon}</svg>`;
const qa = V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Qe.smvIcon}</svg>`;
V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Qe.logIcon}</svg>`;
V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z" />
</svg>`;
V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M21,14V4H3V14H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M4,5H15V10H4V5M16,5H20V7H16V5M20,8V13H16V8H20M4,11H9V13H4V11M10,11H15V13H10V11Z" />
</svg>`;
V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4,1C2.89,1 2,1.89 2,3V7C2,8.11 2.89,9 4,9H1V11H13V9H10C11.11,9 12,8.11 12,7V3C12,1.89 11.11,1 10,1H4M4,3H10V7H4V3M14,13C12.89,13 12,13.89 12,15V19C12,20.11 12.89,21 14,21H11V23H23V21H20C21.11,21 22,20.11 22,19V15C22,13.89 21.11,13 20,13H14M3.88,13.46L2.46,14.88L4.59,17L2.46,19.12L3.88,20.54L6,18.41L8.12,20.54L9.54,19.12L7.41,17L9.54,14.88L8.12,13.46L6,15.59L3.88,13.46M14,15H20V19H14V15Z" />
</svg>`;
const mi = {
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
nt("dAIcon"), nt("dOIcon"), nt("enumIcon"), nt("lNIcon");
function nt(e) {
  if (e === "reset") return p``;
  const t = mi[e]?.height ?? 24, i = mi[e]?.width ?? 24;
  return p`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 ${i} ${t}"
    width="${i}"
  >
    ${Qe[e]}
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
    d="M20.41,3.59c-.78-.78-2.05-.78-2.83,0-.59.59-.73,1.47-.43,2.19l-1.49,1.49c-1.02-.79-2.29-1.27-3.67-1.27-3.31,0-6,2.69-6,6,0,1.38.48,2.66,1.27,3.67l-1.49,1.49c-.73-.31-1.6-.17-2.19.43-.78.78-.78,2.05,0,2.83.78.78,2.05.78,2.83,0,.59-.59.73-1.47.43-2.19l1.49-1.49c1.02.79,2.29,1.27,3.67,1.27,3.31,0,6-2.69,6-6,0-1.38-.48-2.66-1.27-3.67l1.49-1.49c.73.31,1.6.17,2.19-.43.78-.78.78-2.05,0-2.83ZM12,16c-2.21,0-4-1.79-4-4s1.79-4,4-4,4,1.79,4,4-1.79,4-4,4Z"
  />
</svg>`;
p`<svg
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
p`<svg
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
function Ha(e, t) {
  const i = {};
  return Array.from(e.attributes).forEach((n) => {
    i[n.name] = n.value;
  }), { element: e, oldAttributes: i, newAttributes: t };
}
function Ke(e, t = "user", i) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { action: e, initiator: t, ...i?.detail }
  });
}
const Zi = {
  IED: [
    {
      attributeName: "iedName",
      filter: $e("Association")
    },
    {
      attributeName: "iedName",
      filter: $e("ClientLN")
    },
    {
      attributeName: "iedName",
      filter: $e("ConnectedAP")
    },
    {
      attributeName: "iedName",
      filter: $e("ExtRef")
    },
    {
      attributeName: "iedName",
      filter: $e("KDC")
    },
    {
      attributeName: "iedName",
      filter: $e("LNode")
    },
    {
      attributeName: null,
      filter: St("GSEControl > IEDName")
    },
    {
      attributeName: null,
      filter: St("SampledValueControl > IEDName")
    },
    {
      attributeName: null,
      filter: St("LN > DOI > DAI > Val")
    }
  ],
  Substation: [
    {
      attributeName: "substationName",
      filter: $e("Terminal")
    }
  ],
  VoltageLevel: [
    {
      attributeName: "voltageLevelName",
      filter: hi("Terminal", {
        Substation: "substationName"
      })
    }
  ],
  Bay: [
    {
      attributeName: "bayName",
      filter: hi("Terminal", {
        Substation: "substationName",
        VoltageLevel: "voltageLevelName"
      })
    }
  ]
};
function $e(e) {
  return function(i, n, r) {
    return `${e}[${n}="${r}"]`;
  };
}
function St(e) {
  return function() {
    return `${e}`;
  };
}
function hi(e, t) {
  return function(n, r, a) {
    return `${e}${Object.entries(t).map(([s, o]) => {
      const l = n.closest(s);
      if (l && l.hasAttribute("name")) {
        const d = l.getAttribute("name");
        return `[${o}="${d}"]`;
      }
      return null;
    }).join("")}[${r}="${a}"]`;
  };
}
function Ba(e, t, i) {
  const n = e.cloneNode(!1);
  return n.setAttribute(t, i), n;
}
function Xi(e, t) {
  const i = e.cloneNode(!1);
  return i.textContent = t, i;
}
function Mt(e, t, i) {
  if (t === null || t === i)
    return [];
  const n = Zi[e.tagName];
  if (n === void 0)
    return [];
  const r = [];
  return n.forEach((a) => {
    const s = a.filter(e, a.attributeName, t);
    a.attributeName ? Array.from(e.ownerDocument.querySelectorAll(`${s}`)).filter(ie).forEach((o) => {
      const l = Ba(
        o,
        a.attributeName,
        i
      );
      r.push({ old: { element: o }, new: { element: l } });
    }) : Array.from(e.ownerDocument.querySelectorAll(`${s}`)).filter((o) => o.textContent === t).filter(ie).forEach((o) => {
      const l = Xi(o, i);
      r.push({ old: { element: o }, new: { element: l } });
    });
  }), e.tagName === "IED" && r.push(...Ga(e, t, i)), r;
}
function Ga(e, t, i) {
  const n = [];
  return e.ownerDocument.querySelectorAll("IED").forEach((a) => {
    const s = Array.from(
      a.querySelectorAll(
        ':scope > AccessPoint > Server > LDevice > LN[lnClass="LGOS"] > DOI > DAI > Val, :scope > AccessPoint > Server > LDevice > LN[lnClass="LSVS"] > DOI > DAI > Val'
      )
    );
    if (s.length === 0) return;
    const o = a.querySelector(
      `:scope > AccessPoint > Server > LDevice > LN0 > Inputs > ExtRef[iedName="${t}"][srcCBName]`
    ), l = o?.getAttribute("srcLDInst") + "/" + o?.getAttribute("srcLNClass") + "." + o?.getAttribute("srcCBName");
    for (let d of s)
      if (t + l === d.textContent.trim()) {
        const m = Xi(
          d,
          i + l
        );
        n.push({
          old: { element: d },
          new: { element: m }
        });
        break;
      }
  }), n;
}
function Qi(e) {
  const t = Oi(e) ?? null;
  if (t === null)
    return [];
  const i = Zi[e.tagName];
  if (i === void 0)
    return [];
  const n = [];
  return i.forEach((r) => {
    const a = r.filter(e, r.attributeName, t);
    r.attributeName ? Array.from(e.ownerDocument.querySelectorAll(`${a}`)).filter(ie).forEach((s) => {
      n.push({ old: { parent: s.parentElement, element: s } });
    }) : Array.from(e.ownerDocument.querySelectorAll(`${a}`)).filter((s) => s.textContent === t).filter(ie).forEach((s) => {
      s.parentElement && n.push({
        old: {
          parent: s.parentElement.parentElement,
          element: s.parentElement
        }
      });
    });
  }), n;
}
function Yi(e) {
  return (t) => {
    const i = f(t.find((a) => a.label === "name")), n = f(t.find((a) => a.label === "desc"));
    if (i === e.getAttribute("name") && n === e.getAttribute("desc"))
      return [];
    const r = z(e, { name: i, desc: n });
    return [{ old: { element: e }, new: { element: r } }];
  };
}
function Wa(e, t) {
  return (i) => {
    const n = f(i.find((l) => l.label === "name")), r = e.getAttribute("name"), a = f(i.find((l) => l.label === "desc"));
    if (n === r && a === e.getAttribute("desc"))
      return [];
    const s = z(e, { name: n, desc: a }), o = {
      actions: [],
      title: c(t, { name: n })
    };
    return o.actions.push({
      old: { element: e },
      new: { element: s }
    }), o.actions.push(...Mt(e, r, n)), o.actions.length ? [o] : [];
  };
}
function Ji(e, t) {
  return (i) => {
    const n = {};
    if (Ua(n, e, i), Object.keys(n).length == 0)
      return [];
    ja(e, n);
    const r = f(i.find((s) => s.label === "name")), a = {
      actions: [],
      title: c(t, { name: r })
    };
    return a.actions.push(Ha(e, n)), a.actions.push(
      ...Mt(e, e.getAttribute("name"), r)
    ), a.actions.length ? [a] : [];
  };
}
function Ua(e, t, i) {
  const n = f(i.find((a) => a.label === "name")), r = f(i.find((a) => a.label === "desc"));
  n !== t.getAttribute("name") && (e.name = n), r !== t.getAttribute("desc") && (e.desc = r);
}
function ja(e, t) {
  const i = Object.keys(t);
  return Array.from(e.attributes).filter((n) => !i.includes(n.name)).forEach((n) => {
    t[n.name] = n.value;
  }), t;
}
function en(e, t) {
  return [
    w`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("bay.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${c("bay.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function Ka(e) {
  return (t) => {
    const i = f(t.find((s) => s.label === "name")), n = f(t.find((s) => s.label === "desc")), r = E(e.ownerDocument, "Bay", {
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
function Za(e) {
  return [
    {
      title: c("bay.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: c("add"),
        action: Ka(e)
      },
      content: en("", "")
    }
  ];
}
function Xa(e) {
  return [
    {
      title: c("bay.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: c("save"),
        action: Wa(
          e,
          "bay.action.updateBay"
        )
      },
      content: en(
        e.getAttribute("name"),
        e.getAttribute("desc")
      )
    }
  ];
}
const zt = {
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
function Qa(e) {
  if (!e) return null;
  const [t, i, n, r, a] = [
    "lnInst",
    "lnClass",
    "iedName",
    "ldInst",
    "prefix"
  ].map((m) => e?.getAttribute(m)), s = [`IED[name="${n}"]`, "IED"], o = ["AccessPoint > Server"], l = [
    `LDevice[inst="${r}"] > LN[inst="${t}"][lnClass="${i}"]`
  ], d = a && a !== "" ? [`[prefix="${a}"]`] : ['[prefix=""]', ":not(prefix)"];
  return e.ownerDocument.querySelector(
    G(
      s,
      [" > "],
      o,
      [" > "],
      l,
      d
    ).map((m) => m.join("")).join(",")
  );
}
function tn(e) {
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
function Ya(e) {
  const t = e.querySelector(
    'DOI[name="SwTyp"] > DAI[name="stVal"]'
  );
  return t ? t.querySelector("Val")?.innerHTML.trim() : tn(e);
}
function Ja(e) {
  return Array.from(e.querySelectorAll("Terminal")).some(
    (t) => t.getAttribute("cNodeName") === "grounded"
  );
}
function es(e) {
  const t = e.querySelector('LNode[lnClass="XSWI"]'), i = Qa(t);
  let n;
  return i ? n = Ya(i) : t && (n = tn(t)), n ? ["Earthing Switch", "High Speed Earthing Switch"].includes(n) : !1;
}
function ts(e) {
  return e.getAttribute("type") === "DIS" && (Ja(e) || es(e)) ? "ERS" : e.getAttribute("type") ?? "";
}
function is(e) {
  return zt[ts(e)] ?? c("conductingequipment.unknownType");
}
function ns(e, t) {
  return e === "create" ? p`<mwc-select
        style="--mdc-menu-max-height: 196px;"
        required
        label="type"
        helper="${c("conductingequipment.wizard.typeHelper")}"
        validationMessage="${c("textfield.required")}"
      >
        ${Object.keys(zt).map(
    (i) => p`<mwc-list-item value="${i}">${zt[i]}</mwc-list-item>`
  )}
      </mwc-select>` : p`<mwc-select
        label="type"
        helper="${c("conductingequipment.wizard.typeHelper")}"
        validationMessage="${c("textfield.required")}"
        disabled
      >
        <mwc-list-item selected value="0">${t}</mwc-list-item>
      </mwc-select>`;
}
function nn(e, t, i, n, r) {
  return [
    ns(i, n),
    p`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("conductingequipment.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${r}
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${c("conductingequipment.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function rs(e) {
  return (t) => {
    const i = f(t.find((k) => k.label === "name")), n = f(t.find((k) => k.label === "desc")), r = f(t.find((k) => k.label === "type")), a = r === "ERS" ? "DIS" : r, s = E(e.ownerDocument, "ConductingEquipment", {
      name: i,
      type: a,
      desc: n
    });
    if (r !== "ERS") return [{ new: { parent: e, element: s } }];
    const o = e.closest("VoltageLevel")?.querySelector('ConnectivityNode[name="grounded"]'), l = o ? o.closest("Substation")?.getAttribute("name") ?? null : e.closest("Substation")?.getAttribute("name") ?? null, d = o ? o.closest("VoltageLevel")?.getAttribute("name") ?? null : e.closest("VoltageLevel")?.getAttribute("name") ?? null, m = o ? o.closest("Bay")?.getAttribute("name") ?? null : e.closest("Bay")?.getAttribute("name") ?? null, h = m && d && l ? l + "/" + d + "/" + m + "/grounded" : null;
    s.appendChild(
      E(e.ownerDocument, "Terminal", {
        name: "T1",
        cNodeName: "grounded",
        substationName: l,
        voltageLevelName: d,
        bayName: m,
        connectivityNode: h
      })
    );
    const b = {
      new: {
        parent: e,
        element: s
      }
    };
    if (o) return [b];
    const y = E(
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
function rn(e, t) {
  return Array.from(e.querySelectorAll("ConductingEquipment")).filter(ie).map((i) => i.getAttribute("name") ?? "").filter((i) => t && i !== t);
}
function as(e) {
  const t = rn(e);
  return [
    {
      title: c("conductingequipment.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: c("add"),
        action: rs(e)
      },
      content: nn(
        "",
        "",
        "create",
        "",
        t
      )
    }
  ];
}
function ss(e) {
  const t = rn(
    e.parentNode,
    e.getAttribute("name")
  );
  return [
    {
      title: c("conductingequipment.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: c("save"),
        action: Yi(e)
      },
      content: nn(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        "edit",
        is(e),
        t
      )
    }
  ];
}
function os(e, t, i) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("connectivitynode.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${i}
      readonly
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="pathName"
      .maybeValue=${t}
      helper="${c("connectivitynode.wizard.pathNameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function cs(e) {
  const t = Array.from(
    e.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(ie).map((i) => i.getAttribute("name") ?? "").filter((i) => i !== e.getAttribute("name"));
  return [
    {
      title: c("connectivitynode.wizard.title.edit"),
      element: e,
      content: os(
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
const fi = /* @__PURE__ */ new WeakMap(), bi = 2147483647, ls = dt((...e) => (t) => {
  let i = fi.get(t);
  i === void 0 && (i = {
    lastRenderedIndex: bi,
    values: []
  }, fi.set(t, i));
  const n = i.values;
  let r = n.length;
  i.values = e;
  for (let a = 0; a < e.length && !(a > i.lastRenderedIndex); a++) {
    const s = e[a];
    if (ki(s) || typeof s.then != "function") {
      t.setValue(s), i.lastRenderedIndex = a;
      break;
    }
    a < r && s === n[a] || (i.lastRenderedIndex = bi, r = 0, Promise.resolve(s).then((o) => {
      const l = i.values.indexOf(s);
      l > -1 && l < i.lastRenderedIndex && (i.lastRenderedIndex = l, t.setValue(o), t.commit());
    }));
  }
});
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
}, Q = /* @__PURE__ */ new Set();
Q.add(I.BACKSPACE);
Q.add(I.ENTER);
Q.add(I.SPACEBAR);
Q.add(I.PAGE_UP);
Q.add(I.PAGE_DOWN);
Q.add(I.END);
Q.add(I.HOME);
Q.add(I.ARROW_LEFT);
Q.add(I.ARROW_UP);
Q.add(I.ARROW_RIGHT);
Q.add(I.ARROW_DOWN);
Q.add(I.DELETE);
Q.add(I.ESCAPE);
Q.add(I.TAB);
var ne = {
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
}, Y = /* @__PURE__ */ new Map();
Y.set(ne.BACKSPACE, I.BACKSPACE);
Y.set(ne.ENTER, I.ENTER);
Y.set(ne.SPACEBAR, I.SPACEBAR);
Y.set(ne.PAGE_UP, I.PAGE_UP);
Y.set(ne.PAGE_DOWN, I.PAGE_DOWN);
Y.set(ne.END, I.END);
Y.set(ne.HOME, I.HOME);
Y.set(ne.ARROW_LEFT, I.ARROW_LEFT);
Y.set(ne.ARROW_UP, I.ARROW_UP);
Y.set(ne.ARROW_RIGHT, I.ARROW_RIGHT);
Y.set(ne.ARROW_DOWN, I.ARROW_DOWN);
Y.set(ne.DELETE, I.DELETE);
Y.set(ne.ESCAPE, I.ESCAPE);
Y.set(ne.TAB, I.TAB);
var ke = /* @__PURE__ */ new Set();
ke.add(I.PAGE_UP);
ke.add(I.PAGE_DOWN);
ke.add(I.END);
ke.add(I.HOME);
ke.add(I.ARROW_LEFT);
ke.add(I.ARROW_UP);
ke.add(I.ARROW_RIGHT);
ke.add(I.ARROW_DOWN);
function we(e) {
  var t = e.key;
  if (Q.has(t))
    return t;
  var i = Y.get(e.keyCode);
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
var xe, fe, R = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
xe = {}, xe["" + R.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", xe["" + R.LIST_ITEM_CLASS] = "mdc-list-item", xe["" + R.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", xe["" + R.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", xe["" + R.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", xe["" + R.ROOT] = "mdc-list";
var Pe = (fe = {}, fe["" + R.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", fe["" + R.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", fe["" + R.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", fe["" + R.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", fe["" + R.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", fe["" + R.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", fe["" + R.ROOT] = "mdc-deprecated-list", fe), rt = {
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
    .` + R.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + R.LIST_ITEM_CLASS + ` a,
    .` + Pe[R.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Pe[R.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + R.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + R.LIST_ITEM_CLASS + ` a,
    .` + R.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + R.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Pe[R.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Pe[R.LIST_ITEM_CLASS] + ` a,
    .` + Pe[R.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Pe[R.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, te = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Tt = (e, t) => e - t, ds = (e, t) => {
  const i = Array.from(e), n = Array.from(t), r = { added: [], removed: [] }, a = i.sort(Tt), s = n.sort(Tt);
  let o = 0, l = 0;
  for (; o < a.length || l < s.length; ) {
    const d = a[o], m = s[l];
    if (d === m) {
      o++, l++;
      continue;
    }
    if (d !== void 0 && (m === void 0 || d < m)) {
      r.removed.push(d), o++;
      continue;
    }
    if (m !== void 0 && (d === void 0 || m < d)) {
      r.added.push(m), l++;
      continue;
    }
  }
  return r;
}, us = ["input", "button", "textarea", "select"];
function Ge(e) {
  return e instanceof Set;
}
const At = (e) => {
  const t = e === te.UNSET_INDEX ? /* @__PURE__ */ new Set() : e;
  return Ge(t) ? new Set(t) : /* @__PURE__ */ new Set([t]);
};
class qt extends _i {
  constructor(t) {
    super(Object.assign(Object.assign({}, qt.defaultAdapter), t)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = te.UNSET_INDEX, this.focusedItemIndex_ = te.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return rt;
  }
  static get numbers() {
    return te;
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
      if (!Ge(i)) {
        const n = i === te.UNSET_INDEX;
        this.selectedIndex_ = n ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
    } else if (Ge(i))
      if (i.size) {
        const n = Array.from(i).sort(Tt);
        this.selectedIndex_ = n[0];
      } else
        this.selectedIndex_ = te.UNSET_INDEX;
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
    this.isIndexValid_(t) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(At(t)) : this.setSingleSelectionAtIndex_(t));
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
    const r = we(t) === "ArrowLeft", a = we(t) === "ArrowUp", s = we(t) === "ArrowRight", o = we(t) === "ArrowDown", l = we(t) === "Home", d = we(t) === "End", m = we(t) === "Enter", h = we(t) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      a || d ? (t.preventDefault(), this.focusLastElement()) : (o || l) && (t.preventDefault(), this.focusFirstElement());
      return;
    }
    let b = this.adapter.getFocusedElementIndex();
    if (b === -1 && (b = n, b < 0))
      return;
    let y;
    if (this.isVertical_ && o || !this.isVertical_ && s)
      this.preventDefaultEvent(t), y = this.focusNextElement(b);
    else if (this.isVertical_ && a || !this.isVertical_ && r)
      this.preventDefaultEvent(t), y = this.focusPrevElement(b);
    else if (l)
      this.preventDefaultEvent(t), y = this.focusFirstElement();
    else if (d)
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
    t !== te.UNSET_INDEX && (this.setSelectedIndexOnAction_(t, i, n), this.setTabindexAtIndex_(t), this.focusedItemIndex_ = t);
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
    us.indexOf(n) === -1 && t.preventDefault();
  }
  setSingleSelectionAtIndex_(t, i = !0) {
    this.selectedIndex_ !== t && (this.selectedIndex_ !== te.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), i && this.adapter.setSelectedStateForElementIndex(t, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(t, !0), this.setAriaForSingleSelectionAtIndex_(t), this.selectedIndex_ = t, this.adapter.notifySelected(t));
  }
  setMultiSelectionAtIndex_(t, i = !0) {
    const n = At(this.selectedIndex_), r = ds(n, t);
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
    this.selectedIndex_ === te.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(t, rt.ARIA_CURRENT));
    const i = this.ariaCurrentAttrValue_ !== null, n = i ? rt.ARIA_CURRENT : rt.ARIA_SELECTED;
    this.selectedIndex_ !== te.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, n, "false");
    const r = i ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(t, n, r);
  }
  setTabindexAtIndex_(t) {
    this.focusedItemIndex_ === te.UNSET_INDEX && t !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== t && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(t, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let t = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== te.UNSET_INDEX ? t = this.selectedIndex_ : Ge(this.selectedIndex_) && this.selectedIndex_.size > 0 && (t = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(t);
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
      return t === te.UNSET_INDEX || this.isIndexInRange_(t);
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
    this.isMulti_ && (r = /* @__PURE__ */ new Set([t])), this.isIndexValid_(r) && (this.isMulti_ ? this.toggleMultiAtIndex(t, n, i) : i || n ? this.setSingleSelectionAtIndex_(t, i) : this.selectedIndex_ === t && this.setSingleSelectionAtIndex_(te.UNSET_INDEX), i && this.adapter.notifyAction(t));
  }
  toggleMultiAtIndex(t, i, n = !0) {
    let r = !1;
    i === void 0 ? r = !this.adapter.getSelectedStateForElementIndex(t) : r = i;
    const a = At(this.selectedIndex_);
    r ? a.add(t) : a.delete(t), this.setMultiSelectionAtIndex_(a, n);
  }
}
function ps(e, t = 50) {
  let i;
  return function(n = !0) {
    clearTimeout(i), i = setTimeout(() => {
      e(n);
    }, t);
  };
}
const at = (e) => e.hasAttribute("mwc-list-item");
function ms() {
  const e = this.itemsReadyResolver;
  this.itemsReady = new Promise((t) => this.itemsReadyResolver = t), e();
}
class re extends Rt {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = qt, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const t = ps(this.layout.bind(this));
    this.debouncedLayout = (i = !0) => {
      ms.call(this), t(i);
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
    for (const s of i)
      at(s) && (n.push(s), s._managingList = this), s.hasAttribute("divider") && !s.hasAttribute("role") && s.setAttribute("role", "separator");
    this.items_ = n;
    const r = /* @__PURE__ */ new Set();
    if (this.items_.forEach((s, o) => {
      this.itemRoles ? s.setAttribute("role", this.itemRoles) : s.removeAttribute("role"), s.selected && r.add(o);
    }), this.multi)
      this.select(r);
    else {
      const s = r.size ? r.entries().next().value[1] : -1;
      this.select(s);
    }
    const a = new Event("items-updated", { bubbles: !0, composed: !0 });
    this.dispatchEvent(a);
  }
  get selected() {
    const t = this.index;
    if (!Ge(t))
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
          role="${be(t)}"
          aria-label="${be(i)}"
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
      const i = this.getIndexOfTarget(t), n = t.target, r = at(n);
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
      if (br(r) && at(r) && (a = i.indexOf(r)), a !== -1)
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
      isFocusInsideList: () => yr(this),
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
    const t = Ti();
    if (!t.length)
      return -1;
    for (let i = t.length - 1; i >= 0; i--) {
      const n = t[i];
      if (at(n))
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
v([
  g({ type: String })
], re.prototype, "emptyMessage", void 0);
v([
  M(".mdc-deprecated-list")
], re.prototype, "mdcRoot", void 0);
v([
  Ci("", !0, "*")
], re.prototype, "assignedElements", void 0);
v([
  Ci("", !0, '[tabindex="0"]')
], re.prototype, "tabbableElements", void 0);
v([
  g({ type: Boolean }),
  Ie(function(e) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(e);
  })
], re.prototype, "activatable", void 0);
v([
  g({ type: Boolean }),
  Ie(function(e, t) {
    this.mdcFoundation && this.mdcFoundation.setMulti(e), t !== void 0 && this.layout();
  })
], re.prototype, "multi", void 0);
v([
  g({ type: Boolean }),
  Ie(function(e) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(e);
  })
], re.prototype, "wrapFocus", void 0);
v([
  g({ type: String }),
  Ie(function(e, t) {
    t !== void 0 && this.updateItems();
  })
], re.prototype, "itemRoles", void 0);
v([
  g({ type: String })
], re.prototype, "innerRole", void 0);
v([
  g({ type: String })
], re.prototype, "innerAriaLabel", void 0);
v([
  g({ type: Boolean })
], re.prototype, "rootTabbable", void 0);
v([
  g({ type: Boolean, reflect: !0 }),
  Ie(function(e) {
    var t, i;
    if (e) {
      const n = (i = (t = this.tabbableElements) === null || t === void 0 ? void 0 : t[0]) !== null && i !== void 0 ? i : null;
      this.previousTabindex = n, n && n.setAttribute("tabindex", "-1");
    } else !e && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], re.prototype, "noninteractive", void 0);
var hs = Object.defineProperty, fs = Object.getOwnPropertyDescriptor, Re = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? fs(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (r = (n ? s(t, i, r) : s(r)) || r);
  return n && r && hs(t, i, r), r;
};
function _t(e) {
  return !e.closest("filtered-list") || !e.parentElement || e.parentElement instanceof ue ? e : _t(e.parentElement);
}
function bs(e, t) {
  const i = e.innerText + `
`, n = Array.from(e.children).map((o) => o.innerText).join(`
`), r = e.value, a = (i + n + r).toUpperCase(), s = t.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  s.length === 1 && s[0] === "" || s.every((o) => new RegExp(
    `*${o}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(a)) ? _t(e).classList.remove("hidden") : _t(e).classList.add("hidden");
}
let ue = class extends re {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((e) => e instanceof Fe);
  }
  get isAllSelected() {
    return this.items.filter((e) => !e.disabled).filter((e) => e instanceof Fe).every((e) => e.selected);
  }
  get isSomeSelected() {
    return this.items.filter((e) => !e.disabled).filter((e) => e instanceof Fe).some((e) => e.selected);
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
      (e) => bs(e, this.searchField.value)
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
        <abbr title="${this.searchFieldLabel ?? c("filter")}"
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
ue.styles = me`
    ${jn(Xn.styles)}

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
Re([
  g({ type: String })
], ue.prototype, "searchFieldLabel", 2);
Re([
  g({ type: Boolean })
], ue.prototype, "disableCheckAll", 2);
Re([
  $()
], ue.prototype, "existCheckListItem", 1);
Re([
  $()
], ue.prototype, "isAllSelected", 1);
Re([
  $()
], ue.prototype, "isSomeSelected", 1);
Re([
  M("mwc-textfield")
], ue.prototype, "searchField", 2);
ue = Re([
  le("filtered-list")
], ue);
var gs = Object.defineProperty, ys = Object.getOwnPropertyDescriptor, Se = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? ys(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (r = (n ? s(t, i, r) : s(r)) || r);
  return n && r && gs(t, i, r), r;
};
const vs = p`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${c("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let ce = class extends Ee {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (e) => ({
      path: e,
      header: p`<h2>${"/" + e.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return ji(this.selection);
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
        for (const s of n) r = r[s];
        const a = Object.keys(r).map((s) => n.concat(s));
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
    for await (const { header: r, entries: a, path: s } of i)
      (r || a.length > 0) && n.push(
        p`${be(r)} ${this.renderDirectory(s, a)}`
      );
    return n.length === 0 ? p`` : p`<div class="column">${n}</div>`;
  }
  render() {
    const e = new Array(this.depth).fill(0).map((t, i) => this.renderColumn(i));
    return this.loaded = Promise.allSettled(e).then(), p`<div class="pane">
      ${e.map((t) => ls(t, vs))}
    </div>`;
  }
};
ce.styles = me`
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
Se([
  g({ type: Object })
], ce.prototype, "selection", 2);
Se([
  g({ type: Boolean })
], ce.prototype, "multi", 2);
Se([
  g({ type: Number })
], ce.prototype, "depth", 1);
Se([
  g({ type: Array })
], ce.prototype, "paths", 1);
Se([
  g({ type: Array })
], ce.prototype, "path", 1);
Se([
  g({ attribute: !1 })
], ce.prototype, "read", 2);
Se([
  g({ attribute: !1 })
], ce.prototype, "loaded", 2);
Se([
  M("div")
], ce.prototype, "container", 2);
ce = Se([
  le("finder-list")
], ce);
function Ss(e) {
  return e.startsWith("IED:") ? e.replace(/^.*:/, "").trim() : e.startsWith("LN0:") ? "LLN0" : e.replace(/^.*>/, "").trim();
}
function As(e, t) {
  return async (i) => {
    const [n, r] = i[i.length - 1]?.split(": ", 2), a = ge(e, n, r);
    return a ? {
      path: i,
      header: void 0,
      entries: t(a).map(
        (s) => `${s.tagName}: ${N(s)}`
      )
    } : { path: i, header: p`<p>${c("error")}</p>`, entries: [] };
  };
}
function an(e) {
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
function ws(e) {
  return p`<finder-list
    multi
    .paths=${[["Server: " + N(e)]]}
    .read=${As(e.ownerDocument, an)}
    .getDisplayString=${Ss}
    .getTitle=${(t) => t[t.length - 1]}
  ></finder-list>`;
}
function xs(e, t) {
  const [i, n] = t[t.length - 1].split(": "), r = ge(e.ownerDocument, i, n);
  if (!r || an(r).length > 0) return;
  const a = t.find((T) => T.startsWith("LN"));
  if (!a) return;
  const [s, o] = a.split(": "), l = ge(e.ownerDocument, s, o);
  if (!l) return;
  const d = l.closest("LDevice")?.getAttribute("inst"), m = l.getAttribute("prefix") ?? "", h = l.getAttribute("lnClass"), b = l.getAttribute("inst") && l.getAttribute("inst") !== "" ? l.getAttribute("inst") : null;
  let y = "", x = "", k = "";
  for (const T of t) {
    const [C, J] = T.split(": ");
    if (!["DO", "DA", "SDO", "BDA"].includes(C)) continue;
    const he = ge(e.ownerDocument, C, J);
    if (!he) return;
    const Ae = he.getAttribute("name");
    C === "DO" && (y = Ae), C === "SDO" && (y = y + "." + Ae), C === "DA" && (x = Ae, k = he.getAttribute("fc") ?? ""), C === "BDA" && (x = x + "." + Ae);
  }
  if (!(!d || !h || !y || !x || !k))
    return E(e.ownerDocument, "FCDA", {
      ldInst: d,
      prefix: m,
      lnClass: h,
      lnInst: b,
      doName: y,
      daName: x,
      fc: k
    });
}
function Cs(e) {
  return (t, i) => {
    const r = i.shadowRoot.querySelector("finder-list")?.paths ?? [], a = [];
    for (const s of r) {
      const o = xs(e, s);
      o && a.push({
        new: {
          parent: e,
          element: o,
          reference: null
        }
      });
    }
    return a;
  };
}
function sn(e) {
  const t = e.closest("Server");
  return [
    {
      title: c("wizard.title.add", { tagName: "FCDA" }),
      primary: {
        label: "add",
        icon: "add",
        action: Cs(e)
      },
      content: [t ? ws(t) : p``]
    }
  ];
}
const ye = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  asciName: "[A-Za-z][0-9,A-Z,a-z_]*",
  abstractDataAttributeName: "((T)|(Test)|(Check)|(SIUnit)|(Oper)|(SBO)|(SBOw)|(Cancel)|[a-z][0-9A-Za-z]*)"
}, Ht = {
  cbName: 32,
  abstracDaName: 60
};
function wt(e, t) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { ...e, ...t?.detail }
  });
}
function Ns(e) {
  return (t, i, n) => {
    const r = n.items.filter((o) => o.selected).map((o) => o.value).map((o) => ge(e.ownerDocument, "LNodeType", o)).filter((o) => o !== null), a = Oa(e);
    return r.map((o) => {
      const l = o.getAttribute("lnClass");
      if (!l) return null;
      const d = a(l);
      if (!d) {
        i.dispatchEvent(
          wt({
            kind: "error",
            title: c("lnode.log.title", { lnClass: l }),
            message: c("lnode.log.nonuniquelninst")
          })
        );
        return;
      }
      const m = B(e, "LNode").some(
        (x) => x.getAttribute("lnClass") === "LLN0"
      );
      if (l === "LLN0" && m) {
        i.dispatchEvent(
          wt({
            kind: "error",
            title: c("lnode.log.title", { lnClass: l }),
            message: c("lnode.log.uniqueln0", { lnClass: l })
          })
        );
        return;
      }
      const h = B(e, "LNode").some(
        (x) => x.getAttribute("lnClass") === "LPHD"
      );
      if (l === "LPHD" && h) {
        i.dispatchEvent(
          wt({
            kind: "error",
            title: c("lnode.log.title", { lnClass: l }),
            message: c("lnode.log.uniqueln0", { lnClass: l })
          })
        );
        return;
      }
      const b = l === "LLN0" ? "" : d, y = E(e.ownerDocument, "LNode", {
        iedName: "None",
        ldInst: null,
        prefix: null,
        lnClass: l,
        lnInst: b,
        lnType: o.getAttribute("id")
      });
      return { new: { parent: e, element: y } };
    }).filter((o) => o);
  };
}
function Es(e) {
  return (t) => {
    t.dispatchEvent(de()), t.dispatchEvent(de(ln(e)));
  };
}
function on(e) {
  const t = Array.from(
    e.ownerDocument.querySelectorAll("LNodeType")
  );
  return [
    {
      title: c("lnode.wizard.title.selectLNodeTypes"),
      menuActions: [
        {
          icon: "",
          label: c("lnode.wizard.reference"),
          action: Es(e)
        }
      ],
      primary: {
        icon: "save",
        label: c("save"),
        action: Ns(e)
      },
      content: [
        w`<filtered-list multi
          >${t.map((i) => {
          const n = i.getAttribute("lnClass") === "LLN0" && B(e, "LNode").some(
            (r) => r.getAttribute("lnClass") === "LLN0"
          ) || i.getAttribute("lnClass") === "LPHD" && B(e, "LNode").some(
            (r) => r.getAttribute("lnClass") === "LPHD"
          );
          return w`<mwc-check-list-item
              twoline
              value="${N(i)}"
              ?disabled=${n}
              ><span>${i.getAttribute("lnClass")}</span
              ><span slot="secondary"
                >${n ? c("lnode.wizard.uniquewarning") : N(i)}</span
              ></mwc-check-list-item
            >`;
        })}</filtered-list
        >`
      ]
    }
  ];
}
const Is = {
  CBR: ["CSWI", "CILO", "XCBR"],
  DIS: ["CSWI", "CILO", "XSWI"],
  VTR: ["TVTR"],
  CTR: ["TCTR"],
  Bay: ["LLN0"],
  VoltageLevel: ["LLN0"],
  Substation: ["LLN0"]
};
function cn(e, t) {
  return e.disabled !== t.disabled ? t.disabled ? -1 : 1 : e.preferred !== t.preferred ? e.preferred ? -1 : 1 : e.selected !== t.selected ? e.selected ? -1 : 1 : 0;
}
const ks = "Client LN";
function gi(e, t) {
  return Array.from(e.getElementsByTagName("LNode")).filter((i) => !i.closest("Private")).filter((i) => Bt(t, i))[0] ?? null;
}
function Bt(e, t) {
  return (t.getAttribute("iedName") ?? "") === (e.closest("IED")?.getAttribute("name") ?? "") && (t.getAttribute("ldInst") ?? "") === (e.closest("LDevice")?.getAttribute("inst") ?? "") && (t.getAttribute("prefix") ?? "") === (e.getAttribute("prefix") ?? "") && (t.getAttribute("lnClass") ?? "") === (e.getAttribute("lnClass") ?? "") && (t.getAttribute("lnInst") ?? "") === (e.getAttribute("inst") ?? "");
}
function Ds(e, t) {
  const i = E(e.ownerDocument, "LNode", {
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
function Ls(e, t) {
  return {
    old: {
      parent: e,
      element: t,
      reference: t.nextElementSibling
    }
  };
}
function $s(e, t) {
  return e.some((i) => Bt(i, t));
}
function zs(e, t) {
  return t.some((i) => Bt(e, i));
}
function Ts(e) {
  return (t, i, n) => {
    const r = n.items.filter((l) => l.selected).map((l) => l.value).map((l) => {
      const d = ge(e.ownerDocument, "LN0", l);
      return d || ge(e.ownerDocument, "LN", l);
    }).filter((l) => l !== null), a = B(e, "LNode").filter(
      ie
    ), s = a.filter((l) => !$s(r, l)).map((l) => Ls(e, l)), o = r.filter((l) => !zs(l, a)).map((l) => Ds(e, l));
    return s.concat(o);
  };
}
function _s(e, t) {
  return e.parentElement?.parentElement?.nextElementSibling?.querySelector(
    t
  ) ?? null;
}
function Vs(e, t) {
  if (!(e.target instanceof re)) return;
  const i = _s(e.target, "#lnList");
  if (i === null) return;
  const n = t.ownerDocument, s = e.target.selected.flatMap(
    (o) => Array.from(
      n.querySelectorAll(
        `:root > IED[name="${o.value}"] > AccessPoint > LN,:root > IED[name="${o.value}"] > AccessPoint > Server > LDevice > LN,:root > IED[name="${o.value}"] > AccessPoint > Server > LDevice > LN0`
      )
    ).filter((l) => !l.closest("Private"))
  ).filter((o) => o !== null).map((o) => {
    const l = Is[t.getAttribute("type") ? t.getAttribute("type") ?? "" : t.tagName ?? ""]?.includes(o.getAttribute("lnClass") ?? "") ?? !1, d = gi(t.ownerDocument, o), m = d?.parentElement === t;
    return {
      selected: m,
      disabled: d !== null && !m,
      prefered: l,
      element: o
    };
  }).sort(cn).map((o) => w`<mwc-check-list-item
      ?selected=${o.selected}
      ?disabled=${o.disabled}
      value="${N(o.element)}"
      twoline
      ><span
        >${o.element.getAttribute("prefix") ?? ""}${o.element.getAttribute("lnClass")}${o.element.getAttribute(
    "inst"
  ) ?? ""}
        ${o.disabled ? w` <mwc-icon style="--mdc-icon-size: 1em;"
                >account_tree</mwc-icon
              >
              ${Vr(gi(n, o.element))}` : ""}</span
      ><span slot="secondary"
        >${o.element.closest("IED")?.getAttribute("name") ?? ""} |
        ${o.element.closest("LDevice") ? o.element.closest("LDevice")?.getAttribute("inst") : ks}</span
      ></mwc-check-list-item
    >`);
  Ei(w`${s}`, i);
}
function Rs(e) {
  const t = e.ownerDocument;
  return t.querySelectorAll(":root > IED").length > 0 ? w`<filtered-list
      disableCheckAll
      multi
      id="iedList"
      @selected=${(i) => Vs(i, e)}
      >${Array.from(t.querySelectorAll(":root > IED")).map((i) => i.getAttribute("name")).map((i) => ({
    selected: Array.from(e.children).filter((n) => !n.closest("Private")).filter(
      (n) => n.tagName === "LNode" && n.getAttribute("iedName") === i
    ).length > 0,
    iedName: i
  })).sort(cn).map(
    (i) => w`<mwc-check-list-item
              value="${i.iedName ?? ""}"
              ?selected=${i.selected}
              >${i.iedName}</mwc-check-list-item
            >`
  )}</filtered-list
    >` : w`<mwc-list-item noninteractive graphic="icon">
      <span>${c("lnode.wizard.placeholder")}</span>
      <mwc-icon slot="graphic">info</mwc-icon>
    </mwc-list-item>`;
}
function Ps(e) {
  return (t) => {
    t.dispatchEvent(de()), t.dispatchEvent(de(on(e)));
  };
}
function ln(e) {
  return [
    {
      title: c("lnode.wizard.title.selectIEDs"),
      menuActions: [
        {
          icon: "",
          label: c("lnode.wizard.instance"),
          action: Ps(e)
        }
      ],
      content: [Rs(e)]
    },
    {
      initial: Array.from(e.children).some(
        (t) => t.tagName === "LNode"
      ),
      title: c("lnode.wizard.title.selectLNs"),
      primary: {
        icon: "save",
        label: c("save"),
        action: Ts(e)
      },
      content: [w`<filtered-list multi id="lnList"></filtered-list>`]
    }
  ];
}
function Os(e) {
  return e.tagName === "Function" || e.tagName === "SubFunction" || e.tagName === "EqFunction" || e.tagName === "EqSubFunction" ? on(e) : ln(e);
}
function Fs(e) {
  const t = e.iedName !== "None";
  return [
    w`<wizard-textfield
      label="iedName"
      .maybeValue=${e.iedName}
      helper="${c("scl.iedName")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="ldInst"
      .maybeValue=${e.ldInst}
      helper="${c("scl.ldInst")}"
      helperPersistent
      nullable
      disabled
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="prefix"
      .maybeValue=${e.prefix}
      helper="${c("scl.prefix")}"
      pattern="${ye.asciName}"
      maxLength="11"
      helperPersistent
      nullable
      ?disabled=${t}
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="lnClass"
      .maybeValue=${e.lnClass}
      helper="${c("scl.lnClass")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="lnInst"
      .maybeValue=${e.lnInst}
      helper="${c("scl.lnInst")}"
      helperPersistent
      type="number"
      min="1"
      max="99"
      .reservedValues=${e.reservedLnInst}
      ?disabled=${t}
    ></wizard-textfield>`
  ];
}
function Ms(e) {
  return (t) => {
    const i = {}, n = ["iedName", "ldInst", "prefix", "lnClass", "lnInst"];
    n.forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    let r = null;
    if (n.some((a) => i[a] !== e.getAttribute(a))) {
      const a = z(e, i);
      return r = {
        old: { element: e },
        new: { element: a }
      }, [r];
    }
    return [];
  };
}
function qs(e) {
  const [t, i, n, r, a] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => e.getAttribute(o)), s = B(
    e.parentElement,
    "LNode"
  ).filter(
    (o) => o !== e && o.getAttribute("lnClass") === e.getAttribute("lnClass")
  ).map((o) => o.getAttribute("lnInst"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "LNode" }),
      element: e,
      primary: {
        label: c("save"),
        icon: "save",
        action: Ms(e)
      },
      content: [
        ...Fs({
          iedName: t,
          ldInst: i,
          prefix: n,
          lnClass: r,
          lnInst: a,
          reservedLnInst: s
        })
      ]
    }
  ];
}
function Hs(e) {
  return Object.entries(e).map(
    ([t, i]) => p`<wizard-checkbox
        label="${t}"
        .maybeValue=${i}
        nullable
        helper="${c(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function Bs(e) {
  return (t) => {
    const i = f(t.find((h) => h.label === "seqNum")), n = f(t.find((h) => h.label === "timeStamp")), r = f(t.find((h) => h.label === "dataSet")), a = f(t.find((h) => h.label === "reasonCode")), s = f(t.find((h) => h.label === "dataRef")), o = f(t.find((h) => h.label === "entryID")), l = f(t.find((h) => h.label === "configRef")), d = f(t.find((h) => h.label === "bufOvfl"));
    if (i === e.getAttribute("seqNum") && n === e.getAttribute("timeStamp") && r === e.getAttribute("dataSet") && a === e.getAttribute("reasonCode") && s === e.getAttribute("dataRef") && o === e.getAttribute("entryID") && l === e.getAttribute("configRef") && d === e.getAttribute("bufOvfl"))
      return [];
    const m = z(e, {
      seqNum: i,
      timeStamp: n,
      dataSet: r,
      reasonCode: a,
      dataRef: s,
      entryID: o,
      configRef: l,
      bufOvfl: d
    });
    return [{ old: { element: e }, new: { element: m } }];
  };
}
function Gs(e) {
  const [
    t,
    i,
    n,
    r,
    a,
    s,
    o,
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
  ].map((d) => e.getAttribute(d));
  return [
    {
      title: c("wizard.title.edit", { tagName: e.tagName }),
      primary: {
        icon: "save",
        label: c("save"),
        action: Bs(e)
      },
      content: Hs({
        seqNum: t,
        timeStamp: i,
        dataSet: n,
        reasonCode: r,
        dataRef: a,
        entryID: s,
        configRef: o,
        bufOvfl: l
      })
    }
  ];
}
let Ws = 1, dn = 1, un = 1;
function Us(e, t) {
  return t.parentElement?.querySelectorAll(
    `LN[lnClass="CSWI"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="CILO"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="XCBR"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="XSWI"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""}`
  ).forEach((i) => {
    e.appendChild(
      E(t.ownerDocument, "LNode", {
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
function pn(e) {
  return e.parentElement?.querySelector(
    `LN[lnClass="XCBR"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""}`
  ) ? "CBR" : "DIS";
}
function js(e) {
  return e.getAttribute("prefix") && e.getAttribute("inst") ? e.getAttribute("prefix") + e.getAttribute("inst") : e.getAttribute("inst") && pn(e) === "CBR" ? "QA" + dn++ : "QB" + un++;
}
function Ks(e, t) {
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
function Zs(e) {
  return Array.from(
    e.querySelectorAll('AccessPoint > Server > LDevice > LN[lnClass="CSWI"]')
  );
}
function Xs(e, t) {
  return e.parentElement ? Zs(e).filter((i) => Ks(i, t)) : [];
}
function Qs(e, t) {
  const i = Xs(e, t);
  if (dn = 1, un = 1, i.length) {
    const n = E(e.ownerDocument, "Bay", {
      name: "Q" + Ws++,
      desc: "Bay for controller " + e.getAttribute("name")
    });
    return i.map((a) => Us(
      E(e.ownerDocument, "ConductingEquipment", {
        name: js(a),
        type: pn(a)
      }),
      a
    )).forEach((a) => n.appendChild(a)), n;
  }
  return null;
}
function Ys(e, t) {
  return (i, n, r) => {
    const a = [], s = r.selected.map(
      (d) => d.value
    ), o = E(e, "VoltageLevel", {
      name: "E1",
      desc: "guessed by OpenSCD",
      nomFreq: "50.0",
      numPhases: "3"
    }), l = E(e, "Voltage", {
      unit: "V",
      multiplier: "k"
    });
    return l.textContent = "110.00", o.appendChild(l), a.push({
      new: { parent: e.querySelector("SCL"), element: t }
    }), a.push({
      new: {
        parent: t,
        element: o
      }
    }), Array.from(e.querySelectorAll(":root > IED")).sort(Ra).map((d) => Qs(d, s)).forEach((d) => {
      d && a.push({ new: { parent: o, element: d } });
    }), a;
  };
}
function Js(e, t) {
  return [
    {
      title: c("guess.wizard.title"),
      primary: {
        icon: "play_arrow",
        label: c("guess.wizard.primary"),
        action: Ys(e, t)
      },
      content: [
        p`<p>${c("guess.wizard.description")}</p>`,
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
const eo = {
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
}, to = {
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
}, yi = { en: to, de: eo };
async function io(e) {
  return Object.keys(yi).includes(e) ? yi[e] : {};
}
ar({ loader: io, empty: (e) => e });
const mn = localStorage.getItem("language") || "en";
console.log("SETTING LANGUAGE TO", mn);
lr(mn);
function hn(e, t, i) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("substation.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${c("substation.wizard.descHelper")}"
    ></wizard-textfield>`,
    i ? p`<mwc-formfield label="${c("guess.wizard.primary")}">
          <mwc-checkbox></mwc-checkbox>
        </mwc-formfield>` : p``
  ];
}
function no(e) {
  return (t, i) => {
    const n = f(t.find((o) => o.label === "name")), r = f(t.find((o) => o.label === "desc")), a = i.shadowRoot?.querySelector("mwc-checkbox")?.checked;
    e.ownerDocument.createElement("Substation");
    const s = E(e.ownerDocument, "Substation", {
      name: n,
      desc: r
    });
    return a ? [() => Js(e.ownerDocument, s)] : [{ new: { parent: e, element: s } }];
  };
}
function ro(e) {
  const t = e.ownerDocument.querySelector("Substation") === null && e.tagName === "SCL";
  return [
    {
      title: c("substation.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: c("add"),
        action: no(e)
      },
      content: hn("", "", t)
    }
  ];
}
function ao(e) {
  return [
    {
      title: c("substation.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: c("save"),
        action: Ji(
          e,
          "substation.action.updatesubstation"
        )
      },
      content: hn(
        e.getAttribute("name") ?? "",
        e.getAttribute("desc"),
        !1
      )
    }
  ];
}
function so(e, t, i, n) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("terminal.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${n}
      readonly
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="connectivityNode"
      .maybeValue=${t}
      helper="${c("terminal.wizard.connectivityNodeHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      readonly
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="cNodeName"
      .maybeValue=${i}
      helper="${c("terminal.wizard.cNodeNameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function oo(e) {
  const t = Array.from(
    e.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(ie).map((i) => i.getAttribute("name") ?? "").filter((i) => i !== e.getAttribute("name"));
  return [
    {
      title: c("terminal.wizard.title.edit"),
      element: e,
      content: so(
        e.getAttribute("name"),
        e.getAttribute("connectivityNode"),
        e.getAttribute("cNodeName"),
        t
      )
    }
  ];
}
const st = {
  nomFreq: "50",
  numPhases: "3",
  Voltage: "110",
  multiplier: "k"
};
function fn(e, t, i, n, r, a) {
  return [
    w`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("voltagelevel.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${c("voltagelevel.wizard.descHelper")}"
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="nomFreq"
      .maybeValue=${i}
      nullable
      helper="${c("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      required
      validationMessage="${c("textfield.nonempty")}"
      pattern="${je.unsigned}"
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="numPhases"
      .maybeValue=${n}
      nullable
      helper="${c("voltagelevel.wizard.numPhaseHelper")}"
      suffix="#"
      required
      validationMessage="${c("textfield.nonempty")}"
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
      helper="${c("voltagelevel.wizard.voltageHelper")}"
      required
      validationMessage="${c("textfield.nonempty")}"
      pattern="${je.decimal}"
    ></wizard-textfield>`
  ];
}
function co(e) {
  return (t) => {
    const i = f(t.find((d) => d.label === "name")), n = f(t.find((d) => d.label === "desc")), r = f(t.find((d) => d.label === "nomFreq")), a = f(t.find((d) => d.label === "numPhases")), s = f(t.find((d) => d.label === "Voltage")), o = Ot(t.find((d) => d.label === "Voltage")), l = E(e.ownerDocument, "VoltageLevel", {
      name: i,
      desc: n,
      nomFreq: r,
      numPhases: a
    });
    if (s !== null) {
      const d = E(e.ownerDocument, "Voltage", {
        unit: "V",
        multiplier: o
      });
      d.textContent = s, l.appendChild(d);
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
function lo(e) {
  return [
    {
      title: c("voltagelevel.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: c("add"),
        action: co(e)
      },
      content: fn(
        "",
        "",
        st.nomFreq,
        st.numPhases,
        st.Voltage,
        st.multiplier
      )
    }
  ];
}
function uo(e, t, i, n) {
  if (e === null) {
    const a = E(n.ownerDocument, "Voltage", {
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
  const r = z(e, { multiplier: i });
  return r.textContent = t, {
    old: { element: e },
    new: { element: r }
  };
}
function po(e) {
  return (t) => {
    const i = t.find((h) => h.label === "name").value, n = f(t.find((h) => h.label === "desc")), r = f(t.find((h) => h.label === "nomFreq")), a = f(t.find((h) => h.label === "numPhases")), s = f(t.find((h) => h.label === "Voltage")), o = Ot(t.find((h) => h.label === "Voltage"));
    let l, d;
    if (i === e.getAttribute("name") && n === e.getAttribute("desc") && r === e.getAttribute("nomFreq") && a === e.getAttribute("numPhases"))
      l = null;
    else {
      const h = z(e, {
        name: i,
        desc: n,
        nomFreq: r,
        numPhases: a
      });
      l = { old: { element: e }, new: { element: h } };
    }
    s === (e.querySelector("VoltageLevel > Voltage")?.textContent?.trim() ?? null) && o === (e.querySelector("VoltageLevel > Voltage")?.getAttribute("multiplier") ?? null) ? d = null : d = uo(
      e.querySelector("VoltageLevel > Voltage"),
      s,
      o,
      l?.new.element ?? e
    );
    const m = {
      actions: [],
      title: c("voltagelevel.action.updateVoltagelevel", { name: i })
    };
    return l && m.actions.push(l), d && m.actions.push(d), m.actions.push(
      ...Mt(e, e.getAttribute("name"), i)
    ), m.actions.length ? [m] : [];
  };
}
function mo(e) {
  return [
    {
      title: c("voltagelevel.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: c("save"),
        action: po(e)
      },
      content: fn(
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
const bn = "PTR";
function ho(e) {
  return (t) => {
    const i = f(t.find((s) => s.label === "name")), n = f(t.find((s) => s.label === "desc")), r = E(e.ownerDocument, "PowerTransformer", {
      name: i,
      desc: n,
      type: bn
    });
    return [{
      new: {
        parent: e,
        element: r
      }
    }];
  };
}
function gn(e, t, i, n) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("powertransformer.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${n}
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${c("powertransformer.wizard.descHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${i}
      disabled
      helper="${c("powertransformer.wizard.typeHelper")}"
    ></wizard-textfield>`
  ];
}
function yn(e, t) {
  return Array.from(e.querySelectorAll("PowerTransformer")).filter(ie).map((i) => i.getAttribute("name") ?? "").filter((i) => t && i !== t);
}
function fo(e) {
  const t = yn(e);
  return [
    {
      title: c("powertransformer.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: c("add"),
        action: ho(e)
      },
      content: gn(
        "",
        null,
        bn,
        t
      )
    }
  ];
}
function bo(e) {
  const t = yn(
    e.parentNode,
    e.getAttribute("name")
  );
  return [
    {
      title: c("powertransformer.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: c("save"),
        action: Yi(e)
      },
      content: gn(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        e.getAttribute("type"),
        t
      )
    }
  ];
}
function go(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${c("subnetwork.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${c("subnetwork.wizard.descHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      nullable
      helper="${c("subnetwork.wizard.typeHelper")}"
      pattern="${je.normalizedString}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="BitRate"
      .maybeValue=${e.BitRate}
      nullable
      unit="b/s"
      .multipliers=${[null, "M"]}
      .multiplier=${e.multiplier}
      helper="${c("subnetwork.wizard.bitrateHelper")}"
      required
      validationMessage="${c("textfield.nonempty")}"
      pattern="${je.decimal}"
    ></wizard-textfield>`
  ];
}
function yo(e, t, i, n) {
  if (e === null) {
    const a = E(n.ownerDocument, "BitRate", {
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
  const r = z(e, { multiplier: i });
  return r.textContent = t, {
    old: { element: e },
    new: { element: r }
  };
}
function vo(e) {
  return (t) => {
    const i = t.find((m) => m.label === "name").value, n = f(t.find((m) => m.label === "desc")), r = f(t.find((m) => m.label === "type")), a = f(t.find((m) => m.label === "BitRate")), s = Ot(t.find((m) => m.label === "BitRate"));
    let o, l;
    if (i === e.getAttribute("name") && n === e.getAttribute("desc") && r === e.getAttribute("type"))
      o = null;
    else {
      const m = z(e, { name: i, desc: n, type: r });
      o = { old: { element: e }, new: { element: m } };
    }
    a === (e.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null) && s === (e.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null) ? l = null : l = yo(
      e.querySelector("SubNetwork > BitRate"),
      a,
      s,
      o?.new.element ?? e
    );
    const d = [];
    return o && d.push(o), l && d.push(l), d;
  };
}
function So(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = e.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null, a = e.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null;
  return [
    {
      title: c("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: c("save"),
        action: vo(e)
      },
      content: go({ name: t, desc: i, type: n, BitRate: r, multiplier: a })
    }
  ];
}
const Ao = [
  "ldInst",
  "lnClass",
  "lnInst",
  "prefix",
  "doName",
  "daName"
];
function vn(e) {
  return Ao.map(
    (t) => e.getAttribute(t) ? `[${t}="${e.getAttribute(
      t
    )}"]` : ""
  ).join("");
}
const wo = ["srcLDInst", "srcLNClass", "srcLNInst", "srcCBName"];
function xo(e) {
  return wo.map(
    (t) => e.getAttribute(t) ? `[${t}="${e.getAttribute(t)}"]` : ""
  ).join("");
}
function Sn(e) {
  if (!e.length) return [];
  const t = [], i = {};
  for (const n of e) {
    const r = n.old.element, a = n.old.parent, s = N(a);
    i[s] || (i[s] = a.cloneNode(!0));
    const o = i[s].querySelector(
      `ExtRef${r.getAttribute("iedName") ? `[iedName="${r.getAttribute("iedName")}"]` : ""}${vn(r)}${r.getAttribute("serviceType") ? `[serviceType="${r.getAttribute("serviceType")}"]` : ""}${xo(r)}`
    );
    o && i[s].removeChild(o);
  }
  return Object.entries(i).forEach(([n, r]) => {
    if (r.children.length == 0) {
      const a = e[0].old.parent.ownerDocument, s = ge(a, "Inputs", n);
      s && s.parentElement && t.push({
        old: { parent: s.parentElement, element: s }
      });
    }
  }), t;
}
const Co = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function No(e, t, i, n, r, a, s, o, l) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("ied.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${l}
      pattern="${Co}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${c("ied.wizard.descHelper")}"
      pattern="${ye.normalizedString}"
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
      .maybeValue=${s || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="owner"
      .maybeValue=${o || "-"}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function Eo(e) {
  return [
    p` <section>
      <h1>${c("ied.wizard.title.references")}</h1>
      <mwc-list>
        ${e.map((t) => {
      const i = t.old.element;
      return p` <mwc-list-item noninteractive twoline>
            <span>${i.tagName}</span>
            <span slot="secondary"
              >${N(t.old.element)}</span
            >
          </mwc-list-item>`;
    })}
      </mwc-list>
    </section>`
  ];
}
function Io(e) {
  return (e.getAttribute("originalSclVersion") ?? "").concat(e.getAttribute("originalSclRevision") ?? "").concat(e.getAttribute("originalSclRelease") ?? "");
}
function ko(e) {
  return Array.from(e.parentNode.querySelectorAll("IED")).filter(ie).map((t) => t.getAttribute("name") ?? "").filter((t) => t !== e.getAttribute("name"));
}
function Do(e) {
  return (t, i) => {
    i.dispatchEvent(de());
    const n = Qi(e), r = n.filter(
      (l) => l.old.element.tagName === "ExtRef"
    ), a = Sn(r), s = e.getAttribute("name") ?? "Unknown", o = {
      actions: [],
      title: c("ied.action.deleteied", { name: s })
    };
    return o.actions.push({
      old: { parent: e.parentElement, element: e }
    }), o.actions.push(...n), o.actions.push(...a), [o];
  };
}
function Lo(e) {
  const t = Qi(e);
  return t.length > 0 ? [
    {
      title: c("ied.wizard.title.delete"),
      content: Eo(t),
      primary: {
        icon: "delete",
        label: c("remove"),
        action: Do(e)
      }
    }
  ] : null;
}
function $o(e) {
  function t(i) {
    return (n) => {
      const r = Lo(i);
      r && n.dispatchEvent(Ve(() => r)), n.dispatchEvent(
        Ke({ old: { parent: i.parentElement, element: i } })
      ), n.dispatchEvent(de());
    };
  }
  return [
    {
      title: c("ied.wizard.title.edit"),
      element: e,
      menuActions: [
        {
          icon: "delete",
          label: c("remove"),
          action: t(e)
        }
      ],
      primary: {
        icon: "edit",
        label: c("save"),
        action: Ji(
          e,
          "ied.action.updateied"
        )
      },
      content: No(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        e.getAttribute("type"),
        e.getAttribute("manufacturer"),
        e.getAttribute("configVersion"),
        Io(e),
        e.getAttribute("engRight"),
        e.getAttribute("owner"),
        ko(e)
      )
    }
  ];
}
const zo = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function To(e, t, i, n) {
  return [
    t ? p`<wizard-textfield
          label="ldName"
          .maybeValue=${e}
          helper="${c("ldevice.wizard.noNameSupportHelper")}"
          helperPersistent
          readOnly
          disabled
        ></wizard-textfield>` : p`<wizard-textfield
          label="ldName"
          .maybeValue=${e}
          nullable
          helper="${c("ldevice.wizard.nameHelper")}"
          validationMessage="${c("textfield.required")}"
          dialogInitialFocus
          pattern="${zo}"
        ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${i}
      nullable
      helper="${c("ldevice.wizard.descHelper")}"
      pattern="${ye.normalizedString}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="ldInst"
      .maybeValue=${n}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function _o(e) {
  return !!e.closest("IED")?.querySelector("Services > ConfLdName");
}
function Vo(e) {
  return (t) => {
    const i = {}, n = ["ldName", "desc"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = z(e, i);
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
function Ro(e) {
  return [
    {
      title: c("ldevice.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: c("save"),
        action: Vo(e)
      },
      content: To(
        e.getAttribute("ldName"),
        !_o(e),
        e.getAttribute("desc"),
        e.getAttribute("inst")
      )
    }
  ];
}
function Po(e) {
  return Object.entries(e).map(
    ([t, i]) => p`<wizard-checkbox
        label="${t}"
        .maybeValue=${i}
        nullable
        helper="${c(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function Oo(e) {
  return (t) => {
    const i = f(t.find((d) => d.label === "dchg")), n = f(t.find((d) => d.label === "qchg")), r = f(t.find((d) => d.label === "dupd")), a = f(t.find((d) => d.label === "period")), s = f(t.find((d) => d.label === "gi"));
    if (i === e.getAttribute("dchg") && n === e.getAttribute("qchg") && r === e.getAttribute("dupd") && a === e.getAttribute("period") && s === e.getAttribute("gi"))
      return [];
    const o = z(e, {
      dchg: i,
      qchg: n,
      dupd: r,
      period: a,
      gi: s
    });
    return [{ old: { element: e }, new: { element: o } }];
  };
}
function Fo(e) {
  const [t, i, n, r, a] = [
    "dchg",
    "qchg",
    "dupd",
    "period",
    "gi"
  ].map((s) => e.getAttribute(s));
  return [
    {
      title: c("wizard.title.edit", { tagName: e.tagName }),
      primary: {
        icon: "save",
        label: c("save"),
        action: Oo(e)
      },
      content: Po({ dchg: t, qchg: i, dupd: n, period: r, gi: a })
    }
  ];
}
const Mo = [
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
], qo = [
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
], Ho = ["Spec", "Conf", "RO", "Set"], Bo = ["SmpPerPeriod", "SmpPerSec", "SecPerSmp"], An = [
  "None",
  "Signature",
  "SignatureAndEncryption"
];
function Go(e, t, i) {
  if (!e.target || !e.target.parentElement) return;
  const n = e.target.selected?.value;
  if (e.target.parentElement.querySelector(
    'wizard-select[label="bType"]'
  ).value !== "Enum") return;
  const a = Array.from(
    t.querySelectorAll(`EnumType[id="${n}"] > EnumVal`)
  ).map(
    (o) => w`<mwc-list-item
        value="${o.textContent?.trim() ?? ""}"
        ?selected=${o.textContent?.trim() === i}
        >${o.textContent?.trim()}</mwc-list-item
      >`
  ), s = e.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  Ei(w`${a}`, s), s.requestUpdate();
}
function Wo(e, t, i) {
  const n = e.target.selected.value, r = e.target.parentElement.querySelector(
    'wizard-select[label="type"]'
  );
  r.disabled = !(n === "Enum" || n === "Struct");
  const a = [];
  Array.from(r.children).forEach((l) => {
    const d = l;
    d.disabled = !l.classList.contains(n), d.noninteractive = !l.classList.contains(n), d.style.display = l.classList.contains(n) ? "" : "none", d.disabled || a.push(d);
  }), r.value = a.length ? a[0].value : "";
  const s = e.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  n === "Enum" ? s.style.display = "" : s.style.display = "none";
  const o = e.target.parentElement.querySelector(
    'wizard-textfield[label="Val"]'
  );
  n === "Enum" || n === "Struct" ? o.style.display = "none" : o.style.display = "", s.requestUpdate(), o.requestUpdate(), r.requestUpdate();
}
function Uo(e, t, i, n, r, a, s, o, l, d) {
  return [
    w`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("scl.name")}"
      required
      pattern="${ye.abstractDataAttributeName}"
      maxLength="${Ht.abstracDaName}"
      dialogInitialFocus
    >
      ></wizard-textfield
    >`,
    w`<wizard-textfield
      label="desc"
      helper="${c("scl.desc")}"
      .maybeValue=${t}
      nullable
      pattern="${ye.normalizedString}"
    ></wizard-textfield>`,
    w`<wizard-select
      fixedMenuPosition
      label="bType"
      .value=${i}
      helper="${c("scl.bType")}"
      required
      @selected=${(m) => Wo(m)}
      >${qo.map(
      (m) => w`<mwc-list-item value="${m}"
            >${m}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    w`<wizard-select
      label="type"
      .maybeValue=${r}
      helper="${c("scl.type")}"
      fixedMenuPosition
      @selected=${(m) => Go(m, d, l)}
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
      helper="${c("scl.sAddr")}"
      nullable
      pattern="${ye.normalizedString}"
    ></wizard-textfield>`,
    w`<wizard-select
      label="valKind"
      .maybeValue=${s}
      helper="${c("scl.valKind")}"
      nullable
      required
      fixedMenuPosition
      >${Ho.map(
      (m) => w`<mwc-list-item value="${m}"
            >${m}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    w`<wizard-checkbox
      label="valImport"
      .maybeValue=${o}
      helper="${c("scl.valImport")}"
      nullable
      required
    ></wizard-checkbox>`,
    w`<wizard-select
      label="Val"
      .maybeValue=${l}
      helper="${c("scl.Val")}"
      nullable
      >${Array.from(
      d.querySelectorAll(`EnumType > EnumVal[id="${r}"]`)
    ).map(
      (m) => w`<mwc-list-item value="${m.textContent?.trim() ?? ""}"
            >${m.textContent?.trim()}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    w`<wizard-textfield
      label="Val"
      .maybeValue=${l}
      helper="${c("scl.Val")}"
      nullable
    ></wizard-textfield>`
  ];
}
function jo(e, t, i, n) {
  return [
    w`<wizard-select
      label="fc"
      .maybeValue=${e}
      helper="${c("scl.fc")}"
      required
      fixedMenuPosition
      >${Mo.map(
      (r) => w`<mwc-list-item value="${r}">${r}</mwc-list-item>`
    )}</wizard-select
    >`,
    w`<wizard-checkbox
      label="dchg"
      .maybeValue=${t}
      helper="${c("scl.dchg")}"
      nullable
    ></wizard-checkbox>`,
    w`<wizard-checkbox
      label="qchg"
      .maybeValue=${i}
      helper="${c("scl.qchg")}"
      nullable
    ></wizard-checkbox>`,
    w`<wizard-checkbox
      label="dupd"
      .maybeValue=${n}
      helper="${c("scl.dupd")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function Ko(e) {
  return (t) => {
    const i = f(t.find((C) => C.label === "name")), n = f(t.find((C) => C.label === "desc")), r = f(t.find((C) => C.label === "bType")), a = r === "Enum" || r === "Struct" ? f(t.find((C) => C.label === "type")) : null, s = f(t.find((C) => C.label === "sAddr")), o = f(t.find((C) => C.label === "valKind")), l = f(t.find((C) => C.label === "valImport")), d = t.find(
      (C) => C.label === "Val" && C.style.display !== "none"
    ), m = d ? f(d) : null, h = f(t.find((C) => C.label === "fc")) ?? "", b = f(t.find((C) => C.label === "dchg")), y = f(t.find((C) => C.label === "qchg")), x = f(t.find((C) => C.label === "dupd")), k = [], T = E(e.ownerDocument, "DA", {
      name: i,
      desc: n,
      bType: r,
      type: a,
      sAddr: s,
      valKind: o,
      valImport: l,
      fc: h,
      dchg: b,
      qchg: y,
      dupd: x
    });
    if (m !== null) {
      const C = E(e.ownerDocument, "Val", {});
      C.textContent = m, T.appendChild(C);
    }
    return k.push({
      new: {
        parent: e,
        element: T
      }
    }), k;
  };
}
function Zo(e) {
  const t = e.ownerDocument, i = "", n = null, r = "", a = null, s = null, o = null, l = null, d = null, m = "", h = null, b = null, y = null, x = Array.from(t.querySelectorAll("DAType, EnumType")).filter(ie).filter((T) => T.getAttribute("id")), k = e.closest("DataTypeTemplates");
  return [
    {
      title: c("da.wizard.title.edit"),
      primary: {
        icon: "",
        label: c("save"),
        action: Ko(e)
      },
      content: [
        ...Uo(
          i,
          n,
          r,
          x,
          a,
          s,
          l,
          d,
          o,
          k
        ),
        ...jo(m, h, b, y)
      ]
    }
  ];
}
const ee = (e, t) => e === null ? "" : t;
function wn() {
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
      render: (l, d, m = null) => (m ? [...Array(m)] : [m]).map((h, b) => w`<wizard-select
            id="Val${ee(h, `${b + 1}`)}"
            label="Val${ee(h, ` for sGroup ${b + 1}`)}"
            .maybeValue=${s(d)}
            fixedMenuPosition
          >
            <mwc-list-item value="true">true</mwc-list-item>
            <mwc-list-item value="false">false</mwc-list-item>
          </wizard-select>`),
      value: (l, d) => f(
        l.find((m) => m.id === `Val${d || ""}`)
      )
    };
  }
  function t() {
    return {
      render: (l, d, m = null) => (m ? [...Array(m)] : [m]).map((h, b) => w`<wizard-select
            id="Val${ee(h, `${b + 1}`)}"
            label="Val${ee(h, ` for sGroup ${b + 1}`)}"
            .maybeValue=${s(d)}
            fixedMenuPosition
          >
            ${o(l).map((y) => w`<mwc-list-item value="${y}"
                >${y}</mwc-list-item
              >`)}
          </wizard-select>`),
      value: (l, d) => f(
        l.find((m) => m.id === `Val${d || ""}`)
      )
    };
  }
  function i(l, d, m) {
    return {
      render: (h, b, y = null) => (y ? [...Array(y)] : [y]).map((x, k) => w`<wizard-textfield
            id="Val${ee(x, `${k + 1}`)}"
            label="Val${ee(x, ` for sGroup ${k + 1}`)}"
            .maybeValue=${s(b)}
            helper="${c("dai.wizard.valueHelper", { type: l })}"
            type="number"
            min=${d}
            max=${m}
            step="0.1"
          >
          </wizard-textfield>`),
      value: (h, b) => f(
        h.find((y) => y.id === `Val${b || ""}`)
      )
    };
  }
  function n(l, d, m) {
    return {
      render: (h, b, y = null) => (y ? [...Array(y)] : [y]).map((x, k) => w`<wizard-textfield
            id="Val${ee(x, `${k + 1}`)}"
            label="Val${ee(x, ` for sGroup ${k + 1}`)}"
            .maybeValue=${s(b)}
            helper="${c("dai.wizard.valueHelper", { type: l })}"
            type="number"
            min=${d}
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
      render: (l, d, m = null) => {
        const h = s(d);
        return (m ? [...Array(m)] : [m]).reduce(
          (b, y, x) => b.concat([
            w`<wizard-textfield
                id="ValDate${ee(y, `${x + 1}`)}"
                label="Val (Date)${ee(y, ` for sGroup ${x + 1}`)}"
                .maybeValue=${Xo(h)}
                type="date"
              >
              </wizard-textfield>`,
            w`<wizard-textfield
                id="ValTime${ee(y, `${x + 1}`)}"
                label="Val (Time)${ee(y, ` for sGroup ${x + 1}`)}"
                .maybeValue=${Qo(h)}
                type="time"
                step="1"
              >
              </wizard-textfield>`
          ]),
          []
        );
      },
      value: (l, d) => {
        const m = [`ValDate${d || ""}`, `ValTime${d || ""}`].map(
          (y) => f(l.find((x) => x.id === y))
        ), h = m[0] ? m[0] : "0000-00-00", b = m[1] ? m[1] : "00:00:00";
        return h + "T" + b + ".000";
      }
    };
  }
  function a(l, d) {
    return {
      render: (m, h, b = null) => (b ? [...Array(b)] : [b]).map((y, x) => w`<wizard-textfield
            id="Val${ee(y, ` ${x + 1}`)}"
            label="Val${ee(y, ` for sGroup ${x + 1}`)}"
            .maybeValue=${s(h)}
            helper="${c("dai.wizard.valueHelper", { type: l })}"
            maxLength=${d}
            type="text"
          >
          </wizard-textfield>`),
      value: (m, h) => f(
        m.find((b) => b.id === `Val${h || ""}`)
      )
    };
  }
  function s(l) {
    return (l?.querySelector("Val") ? l?.querySelector("Val") : l)?.textContent?.trim() ?? "";
  }
  function o(l) {
    const d = l.getAttribute("type"), m = [];
    return Array.from(
      l.ownerDocument.querySelectorAll(
        `EnumType[id="${d}"] > EnumVal`
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
function Xo(e) {
  let i = e.split("T")[0];
  return /^\d{4}-\d{2}-\d{2}$/.test(i) || (i = null), i === "0000-00-00" && (i = null), i;
}
function Qo(e) {
  const t = e.split("T");
  let i = null;
  return t.length == 2 && (i = t[1], i.length > 8 && (i = i.substring(0, 8)), /^\d{2}:\d{2}:\d{2}$/.test(i) || (i = null), i === "00:00:00" && (i = null)), i;
}
const We = "http://www.iec.ch/61850/2003/SCL";
function Yo(e, t) {
  return (i) => {
    const n = e.getAttribute("bType"), r = wn()[n].value(i), a = t.parentElement?.getAttribute("name") ?? "", s = {
      actions: [],
      title: c("dai.action.updatedai", { daiName: a })
    }, o = t.cloneNode(!1);
    return o.textContent = r, s.actions.push({
      old: { element: t },
      new: { element: o }
    }), [s];
  };
}
function Jo(e, t, i = null) {
  const n = e.getAttribute("bType"), r = e.querySelector("Val")?.textContent?.trim() ?? "";
  return [
    p` ${wn()[n].render(
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
        </wizard-textfield>` : ct}`
  ];
}
function ec(e, t) {
  const i = t?.tagName === "DAI" ? t?.getAttribute("name") ?? "" : t?.parentElement?.getAttribute("name") ?? "";
  return [
    {
      title: c("dai.wizard.title.edit", {
        daiName: i
      }),
      element: t,
      primary: {
        icon: "edit",
        label: c("save"),
        action: Yo(e, t)
      },
      content: Jo(e, t)
    }
  ];
}
function tc(e) {
  return (t) => {
    t.dispatchEvent(Ve(() => sn(e)));
  };
}
function ic(e) {
  return (t, i) => {
    const n = t.find((d) => d.label === "name").value, r = f(t.find((d) => d.label === "desc")), a = e.getAttribute("name"), s = [];
    if (!(n === a && r === e.getAttribute("desc"))) {
      const d = z(e, { name: n, desc: r });
      s.push({
        old: { element: e },
        new: { element: d }
      });
    }
    const o = n !== a ? Array.from(
      e.parentElement?.querySelectorAll(
        `ReportControlBock[datSet=${a}], GSEControl[datSet=${a}],SampledValueControl[datSet=${a}] `
      ) ?? []
    ).map((d) => {
      const m = z(d, { datSet: n });
      return { old: { element: d }, new: { element: m } };
    }) : [];
    return [
      ...Array.from(
        i.shadowRoot.querySelectorAll(
          "filtered-list > mwc-check-list-item:not([selected])"
        )
      ).map((d) => ge(e, "FCDA", d.value)).filter((d) => d).map((d) => ({
        old: {
          parent: e,
          element: d,
          reference: d.nextSibling
        }
      })),
      ...s,
      ...o
    ];
  };
}
function xn(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc");
  return [
    {
      title: c("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: c("save"),
        icon: "save",
        action: ic(e)
      },
      menuActions: [
        {
          icon: "add",
          label: c("dataset.fcda.add"),
          action: tc(e)
        }
      ],
      content: [
        p`<wizard-textfield
          label="name"
          .maybeValue=${t}
          helper="${c("scl.name")}"
          required
          disabled="true"
        >
        </wizard-textfield>`,
        p`<wizard-textfield
          label="desc"
          .maybeValue=${i}
          helper="${c("scl.desc")}"
          nullable
          required
        >
        </wizard-textfield>`,
        p`<filtered-list multi
          >${Array.from(e.querySelectorAll("FCDA")).map(
          (n) => p`<mwc-check-list-item selected value="${N(n)}"
                >${N(n).split(">").pop()}</mwc-check-list-item
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
}, nc = {
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
}, rc = {
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
function Cn(e) {
  return [
    w`<mwc-formfield label="${c("connectedap.wizard.addschemainsttype")}">
      <mwc-checkbox
        id="instType"
        ?checked="${e.hasInstType}"
      ></mwc-checkbox>
    </mwc-formfield>`,
    w`${Object.entries(e.attributes).map(
      ([t, i]) => w`<wizard-textfield
          label="${t}"
          ?nullable=${rc[t]}
          .maybeValue=${i}
          pattern="${be(nc[t])}"
          required
        ></wizard-textfield>`
    )}`
  ];
}
function ac(e, t) {
  return e.querySelectorAll("P").length !== t.querySelectorAll("P").length ? !1 : Array.from(e.querySelectorAll("P")).filter(
    (i) => !t.querySelector(`Address > P[type="${i.getAttribute("type")}"]`)?.isEqualNode(i)
  ).length === 0;
}
function sc(e, t, i) {
  const n = E(t.ownerDocument, "Address", {});
  return Object.entries(e).filter(([r, a]) => a !== null).forEach(([r, a]) => {
    const s = r, o = E(t.ownerDocument, "P", { type: s });
    i && o.setAttributeNS(
      "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:type",
      "tP_" + r
    ), o.textContent = a, n.appendChild(o);
  }), n;
}
function Nn(e, t, i) {
  const n = [], r = sc(t, e, i), a = e.querySelector("Address");
  return a !== null && !ac(a, r) ? (n.push({
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
function vi(e, t, i, n) {
  if (t === null) {
    const a = E(n.ownerDocument, e, {
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
function oc(e) {
  return (t, i) => {
    const n = {
      actions: [],
      title: c("gse.action.addaddress", {
        identity: N(e)
      })
    }, r = i.shadowRoot?.querySelector("#instType")?.checked ?? !1, a = {};
    a["MAC-Address"] = f(
      t.find((d) => d.label === "MAC-Address")
    ), a.APPID = f(t.find((d) => d.label === "APPID")), a["VLAN-ID"] = f(
      t.find((d) => d.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = f(
      t.find((d) => d.label === "VLAN-PRIORITY")
    ), Nn(e, a, r).forEach((d) => {
      n.actions.push(d);
    });
    const o = f(t.find((d) => d.label === "MinTime")), l = f(t.find((d) => d.label === "MaxTime"));
    return o !== (e.querySelector("MinTime")?.textContent?.trim() ?? null) && n.actions.push(
      vi(
        "MinTime",
        e.querySelector("MinTime"),
        o,
        e
      )
    ), l !== (e.querySelector("MaxTime")?.textContent?.trim() ?? null) && n.actions.push(
      vi(
        "MaxTime",
        e.querySelector("MaxTime"),
        l,
        e
      )
    ), [n];
  };
}
function cc(e) {
  const t = e.querySelector("MinTime")?.innerHTML.trim() ?? null, i = e.querySelector("MaxTime")?.innerHTML.trim() ?? null, n = Array.from(e.querySelectorAll("Address > P")).some(
    (a) => a.getAttribute("xsi:type")
  ), r = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((a) => {
    r[a] || (r[a] = e.querySelector(`Address > P[type="${a}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: c("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: c("save"),
        icon: "save",
        action: oc(e)
      },
      content: [
        ...Cn({ hasInstType: n, attributes: r }),
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
function En(e) {
  const t = e.getAttribute("name"), i = e.closest("IED")?.getAttribute("name"), n = e.closest("AccessPoint")?.getAttribute("name"), r = e.closest("LDevice")?.getAttribute("inst");
  return e.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${n}"] > GSE[ldInst="${r}"][cbName="${t}"]`
  );
}
function lc(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${c("scl.name")}"
      required
      validationMessage="${c("textfield.required")}"
      pattern="${ye.asciName}"
      maxLength="${Ht.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${c("scl.desc")}"
    ></wizard-textfield>`,
    p`<wizard-select
      label="type"
      .maybeValue=${e.type}
      helper="${c("scl.type")}"
      nullable
      required
      >${["GOOSE", "GSSE"].map(
      (t) => p`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`,
    p`<wizard-textfield
      label="appID"
      .maybeValue=${e.appID}
      helper="${c("scl.id")}"
      required
      validationMessage="${c("textfield.nonempty")}"
    ></wizard-textfield>`,
    p`<wizard-checkbox
      label="fixedOffs"
      .maybeValue=${e.fixedOffs}
      nullable
      helper="${c("scl.fixedOffs")}"
    ></wizard-checkbox>`,
    p`<wizard-select
      label="securityEnabled"
      .maybeValue=${e.securityEnabled}
      nullable
      required
      helper="${c("scl.securityEnable")}"
      >${An.map(
      (t) => p`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function dc(e) {
  if (!e.parentElement) return null;
  const t = e.parentElement.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), i = En(e), n = Array.from(
    e.parentElement?.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    ) ?? []
  ).filter(
    (o) => o.getAttribute("datSet") === t?.getAttribute("name")
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
  const a = e.getAttribute("name"), s = e.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: c("controlblock.action.remove", {
      type: e.tagName,
      name: a,
      iedName: s
    }),
    actions: r
  };
}
function uc(e) {
  return (t) => {
    const i = dc(e);
    i && t.dispatchEvent(Ke(i)), t.dispatchEvent(de());
  };
}
function pc(e) {
  return (t) => {
    t.dispatchEvent(Ve(() => xn(e)));
  };
}
function mc(e) {
  return (t) => {
    t.dispatchEvent(Ve(() => cc(e)));
  };
}
function hc(e) {
  return (t) => {
    const i = t.find((d) => d.label === "name").value, n = f(t.find((d) => d.label === "desc")), r = f(t.find((d) => d.label === "type")), a = f(t.find((d) => d.label === "appID")), s = f(t.find((d) => d.label === "fixedOffs")), o = f(
      t.find((d) => d.label === "securityEnabled")
    );
    if (i === e.getAttribute("name") && n === e.getAttribute("desc") && r === e.getAttribute("type") && a === e.getAttribute("appID") && s === e.getAttribute("fixedOffs") && o === e.getAttribute("securityEnabled"))
      return [];
    const l = z(e, {
      name: i,
      desc: n,
      type: r,
      appID: a,
      fixedOffs: s,
      securityEnabled: o
    });
    return [{ old: { element: e }, new: { element: l } }];
  };
}
function fc(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = e.getAttribute("appID"), a = e.getAttribute("fixedOffs"), s = e.getAttribute("securityEnabled"), o = En(e), l = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), d = [];
  return d.push({
    icon: "delete",
    label: c("remove"),
    action: uc(e)
  }), l && d.push({
    icon: "edit",
    label: c("scl.DataSet"),
    action: pc(l)
  }), o && d.push({
    icon: "edit",
    label: c("scl.Communication"),
    action: mc(o)
  }), [
    {
      title: c("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: c("save"),
        action: hc(e)
      },
      menuActions: d,
      content: [
        ...lc({
          name: t,
          desc: i,
          type: n,
          appID: r,
          fixedOffs: a,
          securityEnabled: s
        })
      ]
    }
  ];
}
function De(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${c("scl.name")}"
      required
      validationMessage="${c("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${c("scl.desc")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      helper="${c("scl.type")}"
      nullable
    ></wizard-textfield>`
  ];
}
function bc(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = z(e, i);
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
function gc(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = B(
    e.parentElement,
    "Function"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: bc(e)
      },
      content: [
        ...De({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function yc(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    const r = E(
      e.ownerDocument,
      "Function",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function vc(e) {
  const t = "", r = Array.from(e.querySelectorAll("Function")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: c("wizard.title.add", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: yc(e)
      },
      content: [
        ...De({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function Sc(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = z(e, i);
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
function Ac(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = B(
    e.parentElement,
    "EqSubFunction"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "EqSubFunction" }),
      element: e,
      primary: {
        icon: "save",
        label: c("save"),
        action: Sc(e)
      },
      content: [
        ...De({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function wc(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    const r = E(
      e.ownerDocument,
      "EqSubFunction",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function xc(e) {
  const t = "", r = Array.from(
    e.querySelectorAll("EqSubFunction")
  ).map((a) => a.getAttribute("name"));
  return [
    {
      title: c("wizard.title.add", { tagName: "EqSubFunction" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: wc(e)
      },
      content: [
        ...De({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function Cc(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = z(e, i);
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
function Nc(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = B(
    e.parentElement,
    "EqFunction"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "EqFunction" }),
      element: e,
      primary: {
        icon: "save",
        label: c("save"),
        action: Cc(e)
      },
      content: [
        ...De({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Ec(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    const r = E(
      e.ownerDocument,
      "EqFunction",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function Ic(e) {
  const t = "", r = Array.from(e.querySelectorAll("EqFunction")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: c("wizard.title.add", { tagName: "EqFunction" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: Ec(e)
      },
      content: [
        ...De({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function kc(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = z(e, i);
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
function Dc(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = B(
    e.parentElement,
    "SubFunction"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: kc(e)
      },
      content: [
        ...De({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Lc(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    const r = E(
      e.ownerDocument,
      "SubFunction",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function $c(e) {
  const t = "", r = Array.from(e.querySelectorAll("SubFunction")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: c("wizard.title.add", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: Lc(e)
      },
      content: [
        ...De({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function zc(e) {
  return (t, i) => {
    const n = {
      actions: [],
      title: c("smv.action.addaddress", {
        identity: N(e)
      })
    }, r = i.shadowRoot?.querySelector("#instType")?.checked, a = {};
    a["MAC-Address"] = f(
      t.find((o) => o.label === "MAC-Address")
    ), a.APPID = f(t.find((o) => o.label === "APPID")), a["VLAN-ID"] = f(
      t.find((o) => o.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = f(
      t.find((o) => o.label === "VLAN-PRIORITY")
    );
    const s = Nn(e, a, r);
    return s.length ? (s.forEach((o) => {
      n.actions.push(o);
    }), [n]) : [];
  };
}
function Tc(e) {
  const t = Array.from(e.querySelectorAll("Address > P")).some(
    (n) => n.getAttribute("xsi:type")
  ), i = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((n) => {
    i[n] || (i[n] = e.querySelector(`Address > P[type="${n}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: c("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: c("save"),
        icon: "edit",
        action: zc(e)
      },
      content: [...Cn({ hasInstType: t, attributes: i })]
    }
  ];
}
function _c(e) {
  return Object.entries(e).map(
    ([t, i]) => p`<wizard-checkbox
        label="${t}"
        .maybeValue=${i}
        nullable
        helper="${c(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function Vc(e) {
  return (t) => {
    const i = {}, n = [
      "refreshTime",
      "sampleRate",
      "dataSet",
      "security",
      "synchSourceId"
    ];
    if (n.forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    }), !n.some((a) => i[a] !== e.getAttribute(a)))
      return [];
    const r = z(e, i);
    return [{ old: { element: e }, new: { element: r } }];
  };
}
function Rc(e) {
  const [t, i, n, r, a] = [
    "refreshTime",
    "sampleRate",
    "dataSet",
    "security",
    "synchSourceId"
  ].map((s) => e.getAttribute(s));
  return [
    {
      title: c("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: c("save"),
        action: Vc(e)
      },
      content: [
        ..._c({
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
function In(e) {
  const t = e.getAttribute("name"), i = e.closest("IED")?.getAttribute("name"), n = e.closest("AccessPoint")?.getAttribute("name"), r = e.closest("LDevice")?.getAttribute("inst");
  return e.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${n}"] > SMV[ldInst="${r}"][cbName="${t}"]`
  ) ?? null;
}
function Pc(e) {
  if (!e.parentElement) return null;
  const t = e.parentElement.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), i = In(e), n = Array.from(
    e.parentElement.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    )
  ).filter(
    (o) => o.getAttribute("datSet") === t?.getAttribute("name")
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
  const a = e.getAttribute("name"), s = e.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: c("controlblock.action.remove", {
      type: e.tagName,
      name: a,
      iedName: s
    }),
    actions: r
  };
}
function Oc(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${c("scl.name")}"
      required
      validationMessage="${c("textfield.required")}"
      pattern="${ye.asciName}"
      maxLength="${Ht.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      pattern="${ye.normalizedString}"
      helper="${c("scl.desc")}"
    ></wizard-textfield>`,
    e.multicast === "true" ? p`` : p`<wizard-checkbox
          label="multicast"
          .maybeValue=${e.multicast}
          helper="${c("scl.multicast")}"
          disabled
        ></wizard-checkbox>`,
    p`<wizard-textfield
      label="smvID"
      .maybeValue=${e.smvID}
      helper="${c("scl.id")}"
      required
      validationMessage="${c("textfield.nonempty")}"
    ></wizard-textfield>`,
    p`<wizard-select
      label="smpMod"
      .maybeValue=${e.smpMod}
      nullable
      required
      helper="${c("scl.smpMod")}"
      >${Bo.map(
      (t) => p`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`,
    p`<wizard-textfield
      label="smpRate"
      .maybeValue=${e.smpRate}
      helper="${c("scl.smpRate")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="nofASDU"
      .maybeValue=${e.nofASDU}
      helper="${c("scl.nofASDU")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    p`<wizard-select
      label="securityEnabled"
      .maybeValue=${e.securityEnabled}
      nullable
      required
      helper="${c("scl.securityEnable")}"
      >${An.map(
      (t) => p`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function Fc(e) {
  return (t) => {
    const i = Pc(e);
    i && t.dispatchEvent(Ke(i)), t.dispatchEvent(de());
  };
}
function Mc(e) {
  return (t) => {
    t.dispatchEvent(Ve(() => xn(e)));
  };
}
function qc(e) {
  return (t) => {
    t.dispatchEvent(Ve(() => Rc(e)));
  };
}
function Hc(e) {
  return (t) => {
    t.dispatchEvent(Ve(() => Tc(e)));
  };
}
function Bc(e) {
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
    n.forEach((s) => {
      if (s === "multicast" && !t.find((l) => l.label === s)) {
        i.multicast = "true";
        return;
      }
      i[s] = f(t.find((l) => l.label === s));
    });
    let r = null;
    if (n.some((s) => i[s] !== e.getAttribute(s))) {
      const s = z(e, i);
      r = {
        old: { element: e },
        new: { element: s }
      };
    }
    const a = [];
    return r && a.push(r), a;
  };
}
function Gc(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("multicast"), r = e.getAttribute("smvID"), a = e.getAttribute("smpMod"), s = e.getAttribute("smpRate"), o = e.getAttribute("nofASDU"), l = e.getAttribute("securityEnabled"), d = In(e), m = e.querySelector("SmvOpts"), h = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), b = [];
  return b.push({
    icon: "delete",
    label: c("remove"),
    action: Fc(e)
  }), h && b.push({
    icon: "edit",
    label: c("scl.DataSet"),
    action: Mc(h)
  }), m && b.push({
    icon: "edit",
    label: c("scl.SmvOpts"),
    action: qc(m)
  }), d && b.push({
    icon: "edit",
    label: c("scl.Communication"),
    action: Hc(d)
  }), [
    {
      title: c("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: c("save"),
        action: Bc(e)
      },
      menuActions: b,
      content: [
        ...Oc({
          name: t,
          desc: i,
          multicast: n,
          smvID: r,
          smpMod: a,
          smpRate: s,
          nofASDU: o,
          securityEnabled: l
        })
      ]
    }
  ];
}
function kn(e) {
  return [
    w`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      .reservedValues=${e.reservedNames}
      helper="${c("scl.name")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${c("scl.desc")}"
    ></wizard-textfield>`,
    w`<wizard-select
      label="phase"
      fixedMenuPosition
      .maybeValue=${e.phase}
      nullable
      helper="${c("scl.phase")}"
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
      helper="${c("scl.virtual")}"
    ></wizard-checkbox>`
  ];
}
function Wc(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "phase", "virtual"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = z(e, i);
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
function Uc(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("phase"), r = e.getAttribute("virtual"), a = B(
    e.parentElement,
    "SubEquipment"
  ).filter((s) => s !== e).map((s) => s.getAttribute("name"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: Wc(e)
      },
      content: [
        ...kn({
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
function jc(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "phase", "virtual"].forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    const r = E(
      e.ownerDocument,
      "SubEquipment",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function Kc(e) {
  const t = "", a = Array.from(e.querySelectorAll("SubEquipment")).map(
    (s) => s.getAttribute("name")
  );
  return [
    {
      title: c("wizard.title.add", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: jc(e)
      },
      content: [
        ...kn({
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
function Zc(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = e.getAttribute("virtual"), a = B(
    e.parentElement,
    "GeneralEquipment"
  ).filter((s) => s !== e).map((s) => s.getAttribute("name"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: Xc(e)
      },
      content: [
        ...Dn({
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
function Xc(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = z(e, i);
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
function Dn(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${c("scl.name")}"
      required
      validationMessage="${c("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${c("scl.desc")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      helper="${c("scl.type")}"
      minLength="${3}"
      pattern="AXN|BAT|MOT|FAN|FIL|PMP|TNK|VLV|E[A-Z]*"
      required
    ></wizard-textfield>`,
    p`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${c("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function Qc(e) {
  const t = "", a = Array.from(
    e.querySelectorAll("GeneralEquipment")
  ).map((s) => s.getAttribute("name"));
  return [
    {
      title: c("wizard.title.add", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: Yc(e)
      },
      content: [
        ...Dn({
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
function Yc(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    const r = E(
      e.ownerDocument,
      "GeneralEquipment",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function Jc(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = f(
        t.find((s) => s.label === a)
      );
    });
    const r = E(
      e.ownerDocument,
      "TransformerWinding",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function el(e) {
  const t = "", a = Array.from(
    e.querySelectorAll("TransformerWinding")
  ).map((s) => s.getAttribute("name"));
  return [
    {
      title: c("wizard.title.add", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: Jc(e)
      },
      content: [
        ...Ln({
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
function tl(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = f(
        t.find((a) => a.label === r)
      );
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = z(e, i);
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
function Ln(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${c("scl.name")}"
      required
      validationMessage="${c("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${c("scl.desc")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      disabled
      helper="${c("scl.type")}"
    ></wizard-textfield>`,
    p`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${c("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function il(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = e.getAttribute("virtual"), a = B(
    e.parentElement,
    "TransformerWinding"
  ).filter((s) => s !== e).map((s) => s.getAttribute("name"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: tl(e)
      },
      content: [
        ...Ln({
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
function nl(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    const r = E(
      e.ownerDocument,
      "TapChanger",
      i
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function rl(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = z(e, i);
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
function $n(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${c("scl.name")}"
      required
      validationMessage="${c("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${c("scl.desc")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      disabled
      helper="${c("scl.type")}"
    ></wizard-textfield>`,
    p`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${c("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function al(e) {
  const t = "", n = "LTC", a = Array.from(e.querySelectorAll("TapChanger")).map(
    (s) => s.getAttribute("name")
  );
  return [
    {
      title: c("wizard.title.add", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: nl(e)
      },
      content: [
        ...$n({
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
function sl(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = e.getAttribute("virtual"), a = B(
    e.parentElement,
    "TapChanger"
  ).filter((s) => s !== e).map((s) => s.getAttribute("name"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: rl(e)
      },
      content: [
        ...$n({
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
function zn(e, t, i, n, r) {
  return [
    w`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${c("line.wizard.nameHelper")}"
      required
      validationMessage="${c("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${c("line.wizard.descHelper")}"
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="type"
      .maybeValue=${i}
      nullable
      helper="${c("line.wizard.typeHelper")}"
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="nomFreq"
      .maybeValue=${n}
      nullable
      helper="${c("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      validationMessage="${c("textfield.nonempty")}"
      pattern="${je.unsigned}"
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="numPhases"
      .maybeValue=${r}
      nullable
      helper="${c("voltagelevel.wizard.numPhaseHelper")}"
      suffix="#"
      validationMessage="${c("textfield.nonempty")}"
      type="number"
      min="1"
      max="255"
    ></wizard-textfield>`
  ];
}
function ol(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "nomFreq", "numPhases"].forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    const r = E(e.ownerDocument, "Line", i);
    return [{ new: { parent: e, element: r } }];
  };
}
function cl(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type", "nomFreq", "numPhases"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = z(e, i);
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
function ll(e) {
  return [
    {
      title: c("wizard.title.add", { tagName: "Line" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: ol(e)
      },
      content: [...zn("", "", "", "", "")]
    }
  ];
}
function dl(e) {
  return [
    {
      title: c("line.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: c("save"),
        action: cl(e)
      },
      content: zn(
        e.getAttribute("name") ?? "",
        e.getAttribute("desc"),
        e.getAttribute("type"),
        e.getAttribute("nomFreq"),
        e.getAttribute("numPhases")
      )
    }
  ];
}
function ul(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    const r = E(e.ownerDocument, "Process", i);
    return [{ new: { parent: e, element: r } }];
  };
}
function pl(e) {
  return (t) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== e.getAttribute(r)
    )) {
      const r = z(e, i);
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
function Tn(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${c("scl.name")}"
      required
      validationMessage="${c("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${c("scl.desc")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      nullable
      helper="${c("scl.type")}"
    ></wizard-textfield>`
  ];
}
function ml(e) {
  const t = "", i = "", n = "", r = B(
    e.parentElement,
    "Process"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: c("wizard.title.add", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: ul(e)
      },
      content: [
        ...Tn({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function hl(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = B(
    e.parentElement,
    "Process"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: c("wizard.title.edit", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: c("save"),
        action: pl(e)
      },
      content: [
        ...Tn({
          name: t,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function fl(e, t, i, n, r) {
  return [
    p`<wizard-textfield
      label="lnType"
      .maybeValue=${e}
      readonly
      required
      helper="${c("ln.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${c("ln.wizard.descHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="prefix"
      nullable
      readonly
      .maybeValue=${i}
      helper="${c("ln.wizard.prefixHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${n}
      helper="${c("ln.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="inst"
      .maybeValue=${r}
      readonly
      helper="${c("ln.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function bl(e) {
  return (t) => {
    const i = {}, n = ["lnType", "desc", "prefix", "lnClass", "inst"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = z(e, i);
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
function gl(e) {
  return [
    {
      title: c("ln.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: c("save"),
        action: bl(e)
      },
      content: fl(
        e.getAttribute("lnType"),
        e.getAttribute("desc"),
        e.getAttribute("prefix"),
        e.getAttribute("lnClass"),
        e.getAttribute("inst")
      )
    }
  ];
}
function yl(e, t, i, n) {
  return [
    p`<wizard-textfield
      label="lnType"
      .maybeValue=${e}
      readonly
      required
      helper="${c("ln0.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${c("ln0.wizard.descHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${i}
      helper="${c("ln0.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="inst"
      .maybeValue=${n}
      readonly
      helper="${c("ln0.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function vl(e) {
  return (t) => {
    const i = {}, n = ["lnType", "desc", "lnClass", "inst"];
    if (n.forEach((r) => {
      i[r] = f(t.find((a) => a.label === r));
    }), n.some((r) => i[r] !== e.getAttribute(r))) {
      const r = z(e, i);
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
function Sl(e) {
  return [
    {
      title: c("ln0.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: c("save"),
        action: vl(e)
      },
      content: yl(
        e.getAttribute("lnType"),
        e.getAttribute("desc"),
        e.getAttribute("lnClass"),
        e.getAttribute("inst")
      )
    }
  ];
}
function u() {
}
const Al = {
  AccessControl: {
    edit: u,
    create: u
  },
  AccessPoint: {
    edit: u,
    create: u
  },
  Address: {
    edit: u,
    create: u
  },
  Association: {
    edit: u,
    create: u
  },
  Authentication: {
    edit: u,
    create: u
  },
  BDA: {
    edit: u,
    create: u
  },
  BitRate: {
    edit: u,
    create: u
  },
  Bay: {
    edit: Xa,
    create: Za
  },
  ClientLN: {
    edit: u,
    create: u
  },
  ClientServices: {
    edit: u,
    create: u
  },
  CommProt: {
    edit: u,
    create: u
  },
  Communication: {
    edit: u,
    create: u
  },
  ConductingEquipment: {
    edit: ss,
    create: as
  },
  ConfDataSet: {
    edit: u,
    create: u
  },
  ConfLdName: {
    edit: u,
    create: u
  },
  ConfLNs: {
    edit: u,
    create: u
  },
  ConfLogControl: {
    edit: u,
    create: u
  },
  ConfReportControl: {
    edit: u,
    create: u
  },
  ConfSG: {
    edit: u,
    create: u
  },
  ConfSigRef: {
    edit: u,
    create: u
  },
  ConnectedAP: {
    edit: u,
    create: u
  },
  ConnectivityNode: {
    edit: cs,
    create: u
  },
  DA: {
    edit: Zo,
    create: u
  },
  DAI: {
    edit: ec,
    create: u
  },
  DAType: {
    edit: u,
    create: u
  },
  DO: {
    edit: u,
    create: u
  },
  DOI: {
    edit: u,
    create: u
  },
  DOType: {
    edit: u,
    create: u
  },
  DataObjectDirectory: {
    edit: u,
    create: u
  },
  DataSet: {
    edit: u,
    create: u
  },
  DataSetDirectory: {
    edit: u,
    create: u
  },
  DataTypeTemplates: {
    edit: u,
    create: u
  },
  DynAssociation: {
    edit: u,
    create: u
  },
  DynDataSet: {
    edit: u,
    create: u
  },
  EnumType: {
    edit: u,
    create: u
  },
  EnumVal: {
    edit: u,
    create: u
  },
  EqFunction: {
    edit: Nc,
    create: Ic
  },
  EqSubFunction: {
    edit: Ac,
    create: xc
  },
  ExtRef: {
    edit: u,
    create: u
  },
  FCDA: {
    edit: u,
    create: sn
  },
  FileHandling: {
    edit: u,
    create: u
  },
  Function: {
    edit: gc,
    create: vc
  },
  GeneralEquipment: {
    edit: Zc,
    create: Qc
  },
  GetCBValues: {
    edit: u,
    create: u
  },
  GetDataObjectDefinition: {
    edit: u,
    create: u
  },
  GetDataSetValue: {
    edit: u,
    create: u
  },
  GetDirectory: {
    edit: u,
    create: u
  },
  GOOSE: {
    edit: u,
    create: u
  },
  GOOSESecurity: {
    edit: u,
    create: u
  },
  GSE: {
    edit: u,
    create: u
  },
  GSEDir: {
    edit: u,
    create: u
  },
  GSEControl: {
    edit: fc,
    create: u
  },
  GSESettings: {
    edit: u,
    create: u
  },
  GSSE: {
    edit: u,
    create: u
  },
  Header: {
    edit: u,
    create: u
  },
  History: {
    edit: u,
    create: u
  },
  Hitem: {
    edit: u,
    create: u
  },
  IED: {
    edit: $o,
    create: u
  },
  IEDName: {
    edit: u,
    create: u
  },
  Inputs: {
    edit: u,
    create: u
  },
  IssuerName: {
    edit: u,
    create: u
  },
  KDC: {
    edit: u,
    create: u
  },
  LDevice: {
    edit: Ro,
    create: u
  },
  LN: {
    edit: gl,
    create: u
  },
  LN0: {
    edit: Sl,
    create: u
  },
  LNode: {
    edit: qs,
    create: Os
  },
  LNodeType: {
    edit: u,
    create: u
  },
  Line: {
    edit: dl,
    create: ll
  },
  Log: {
    edit: u,
    create: u
  },
  LogControl: {
    edit: u,
    create: u
  },
  LogSettings: {
    edit: u,
    create: u
  },
  MaxTime: {
    edit: u,
    create: u
  },
  McSecurity: {
    edit: u,
    create: u
  },
  MinTime: {
    edit: u,
    create: u
  },
  NeutralPoint: {
    edit: u,
    create: u
  },
  OptFields: {
    edit: Gs,
    create: u
  },
  P: {
    edit: u,
    create: u
  },
  PhysConn: {
    edit: u,
    create: u
  },
  PowerTransformer: {
    edit: bo,
    create: fo
  },
  Private: {
    edit: u,
    create: u
  },
  Process: {
    edit: hl,
    create: ml
  },
  ProtNs: {
    edit: u,
    create: u
  },
  Protocol: {
    edit: u,
    create: u
  },
  ReadWrite: {
    edit: u,
    create: u
  },
  RedProt: {
    edit: u,
    create: u
  },
  ReportControl: {
    edit: u,
    create: u
  },
  ReportSettings: {
    edit: u,
    create: u
  },
  RptEnabled: {
    edit: u,
    create: u
  },
  SamplesPerSec: {
    edit: u,
    create: u
  },
  SampledValueControl: {
    edit: Gc,
    create: u
  },
  SecPerSamples: {
    edit: u,
    create: u
  },
  SCL: {
    edit: u,
    create: u
  },
  SDI: {
    edit: u,
    create: u
  },
  SDO: {
    edit: u,
    create: u
  },
  Server: {
    edit: u,
    create: u
  },
  ServerAt: {
    edit: u,
    create: u
  },
  Services: {
    edit: u,
    create: u
  },
  SetDataSetValue: {
    edit: u,
    create: u
  },
  SettingControl: {
    edit: u,
    create: u
  },
  SettingGroups: {
    edit: u,
    create: u
  },
  SGEdit: {
    edit: u,
    create: u
  },
  SmpRate: {
    edit: u,
    create: u
  },
  SMV: {
    edit: u,
    create: u
  },
  SmvOpts: {
    edit: u,
    create: u
  },
  SMVsc: {
    edit: u,
    create: u
  },
  SMVSecurity: {
    edit: u,
    create: u
  },
  SMVSettings: {
    edit: u,
    create: u
  },
  SubEquipment: {
    edit: Uc,
    create: Kc
  },
  SubFunction: {
    edit: Dc,
    create: $c
  },
  SubNetwork: {
    edit: So,
    create: u
  },
  Subject: {
    edit: u,
    create: u
  },
  Substation: {
    edit: ao,
    create: ro
  },
  SupSubscription: {
    edit: u,
    create: u
  },
  TapChanger: {
    edit: sl,
    create: al
  },
  Terminal: {
    edit: oo,
    create: u
  },
  Text: {
    edit: u,
    create: u
  },
  TimerActivatedControl: {
    edit: u,
    create: u
  },
  TimeSyncProt: {
    edit: u,
    create: u
  },
  TransformerWinding: {
    edit: il,
    create: el
  },
  TrgOps: {
    edit: Fo,
    create: u
  },
  Val: {
    edit: u,
    create: u
  },
  ValueHandling: {
    edit: u,
    create: u
  },
  Voltage: {
    edit: u,
    create: u
  },
  VoltageLevel: {
    edit: mo,
    create: lo
  }
};
var wl = Object.defineProperty, xl = (e, t, i, n) => {
  for (var r = void 0, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (r = s(t, i, r) || r);
  return r && wl(t, i, r), r;
};
function Cl(e, t, i) {
  return new CustomEvent("fcda-select", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { control: e, fcda: t, ...i?.detail }
  });
}
function Si(e, t, i) {
  return new CustomEvent("subscription-changed", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { control: e, fcda: t, ...i?.detail }
  });
}
function Ai(e) {
  return `${e.getAttribute("doName")}${e.hasAttribute("doName") && e.hasAttribute("daName") ? "." : ""}${e.getAttribute("daName")}`;
}
function wi(e) {
  return `${e.getAttribute("ldInst")} ${e.hasAttribute("ldInst") ? "/" : ""}${e.getAttribute("prefix") ? ` ${e.getAttribute("prefix")}` : ""} ${e.getAttribute("lnClass")} ${e.getAttribute(
    "lnInst"
  )}`;
}
function Nl(e, t, i) {
  return !!_n(e, t, i);
}
function _n(e, t, i) {
  function n(s, o) {
    return s === "srcLNClass" && o === "LLN0" ? "" : o ? `[${s}="${o}"]` : "";
  }
  const r = t.closest("IED")?.getAttribute("name");
  if (!r)
    return;
  let a = "";
  return i && Xe(t.ownerDocument) !== "2003" && (a = `[serviceType="${lt[i.tagName]}"]`, a += n(
    "srcLDInst",
    i.closest("LDevice")?.getAttribute("inst") ?? null
  ), a += n(
    "srcLNClass",
    i.closest("LN0,LN")?.getAttribute("lnClass") ?? null
  ), a += n(
    "srcLNInst",
    i.closest("LN0,LN")?.getAttribute("inst") ?? null
  ), a += n(
    "srcCBName",
    i.getAttribute("name") ?? null
  )), Array.from(
    e.querySelectorAll(
      `ExtRef[iedName="${r}"]${vn(t)}${a}`
    )
  ).find((s) => !s.hasAttribute("intAddr"));
}
function El(e) {
  const [t, i, n, r, a, s] = [
    "srcCBName",
    "srcLDInst",
    "srcLNClass",
    "iedName",
    "srcPrefix",
    "srcLNInst"
  ].map((o) => e.getAttribute(o));
  return !Array.from(
    e.closest("IED")?.getElementsByTagName("ExtRef") ?? []
  ).filter(ie).some(
    (o) => (o.getAttribute("srcCBName") ?? "") === (t ?? "") && (o.getAttribute("srcLDInst") ?? "") === (i ?? "") && (o.getAttribute("srcLNClass") ?? "") === (n ?? "") && (o.getAttribute("iedName") ?? "") === (r ?? "") && (o.getAttribute("srcPrefix") ?? "") === (a ?? "") && (o.getAttribute("srcLNInst") ?? "") === (s ?? "") && o !== e
  );
}
function Il(e, t) {
  const i = e.querySelector(
    `LN[lnClass="${t}"]`
  );
  if (i === null) return !1;
  const n = t === "LGOS" ? "GoCBRef" : "SvCBRef", r = i.querySelector(`DOI[name="${n}"]>DAI[name="setSrcRef"]`)?.getAttribute("valKind"), a = i.querySelector(`DOI[name="${n}"]>DAI[name="setSrcRef"]`)?.getAttribute("valImport");
  if ((r === "RO" || r === "Conf") && a === "true")
    return !0;
  const s = i?.ownerDocument, o = i.getAttribute("lnType"), l = i.getAttribute("lnClass"), d = s.querySelector(
    `DataTypeTemplates > LNodeType[id="${o}"][lnClass="${l}"] > DO[name="${l === "LGOS" ? "GoCBRef" : "SvCBRef"}"]`
  );
  if (d) {
    const m = d.getAttribute("type"), h = s.querySelector(
      `DataTypeTemplates > DOType[id="${m}"] > DA[name="setSrcRef"]`
    );
    if (h)
      return (h.getAttribute("valKind") === "Conf" || h.getAttribute("valKind") === "RO") && h.getAttribute("valImport") === "true";
  }
  return !1;
}
function kl(e, t) {
  const i = e?.tagName === "GSEControl" ? "LGOS" : "LSVS";
  if (!e || !t || !Ll(e, t, i))
    return [];
  const n = $l(
    e,
    t,
    i
  );
  if (!n || !Il(t, i))
    return [];
  const r = [];
  if (!n.parentElement) {
    const d = t.querySelector(
      `LN[lnClass="${i}"]`
    )?.parentElement;
    d && r.push({
      new: {
        parent: d,
        element: n,
        reference: d.querySelector(
          `LN[lnClass="${i}"]:last-child`
        )?.nextElementSibling
      }
    });
  }
  const a = i === "LGOS" ? "GoCBRef" : "SvCBRef";
  let s = n.querySelector(`DOI[name="${a}"]`);
  s || (s = t.ownerDocument.createElementNS(
    We,
    "DOI"
  ), s.setAttribute("name", a), r.push({
    new: {
      parent: n,
      element: s
    }
  }));
  let o = n.querySelector(
    `DOI[name="${a}"]>DAI[name="setSrcRef"]`
  );
  if (!o) {
    o = t.ownerDocument.createElementNS(
      We,
      "DAI"
    );
    const d = t.querySelector(
      `LN[lnClass="${i}"]>DOI[name="${a}"]>DAI[name="setSrcRef"]`
    );
    o.setAttribute("name", "setSrcRef"), d?.hasAttribute("valKind") && o.setAttribute("valKind", d.getAttribute("valKind")), d?.hasAttribute("valImport") && o.setAttribute(
      "valImport",
      d.getAttribute("valImport")
    ), r.push({
      new: {
        parent: s,
        element: o
      }
    });
  }
  let l = n.querySelector("Val");
  return l || (l = t.ownerDocument.createElementNS(
    We,
    "Val"
  )), l.textContent = Gt(e), r.push({
    new: {
      parent: o,
      element: l
    }
  }), r;
}
function mt(e, t, i) {
  const n = t === "GSEControl" ? "LGOS" : "LSVS", r = n === "LGOS" ? "GoCBRef" : "SvCBRef", a = `LN[lnClass="${n}"]>DOI[name="${r}"]>DAI[name="setSrcRef"]>Val,LN0[lnClass="${n}"]>DOI[name="${r}"]>DAI[name="setSrcRef"]>Val`;
  return i ? e.querySelector(a) : Array.from(e.querySelectorAll(a));
}
function Dl(e, t) {
  if (!e || !t) return [];
  const i = mt(
    t,
    e.tagName
  ).find((a) => a.textContent == Gt(e));
  if (!i) return [];
  const n = i.closest("LN0, LN");
  return !n || !n.parentElement ? [] : n.querySelector(
    'Private[type="OpenSCD.create"]'
  ) ? [
    {
      old: {
        parent: n.parentElement,
        element: n
      }
    }
  ] : [
    {
      old: {
        parent: n,
        element: i.closest("DOI")
      }
    }
  ];
}
function Ll(e, t, i) {
  return !(Xe(t.ownerDocument) === "2003" || t.querySelector(`LN[lnClass="${i}"]`) === null || mt(t, e.tagName).find(
    (n) => n.textContent == Gt(e)
  ) || _l(t, e) <= Tl(t, e));
}
function $l(e, t, i) {
  let n = Array.from(
    t.querySelectorAll(`LN[lnClass="${i}"]`)
  ).find((a) => {
    const s = i === "LGOS" ? "GoCBRef" : "SvCBRef";
    return a.querySelector(
      `DOI[name="${s}"]>DAI[name="setSrcRef"]>Val`
    ) === null || a.querySelector(
      `DOI[name="${s}"]>DAI[name="setSrcRef"]>Val`
    )?.textContent === "";
  });
  if (!n) {
    n = t.ownerDocument.createElementNS(
      We,
      "LN"
    );
    const a = t.ownerDocument.createElementNS(
      We,
      "Private"
    );
    a.setAttribute("type", "OpenSCD.create"), n.appendChild(a), n.setAttribute("lnClass", i);
    const s = mt(
      t,
      e.tagName,
      !0
    )?.closest("LN");
    if (!s) return null;
    n.setAttribute(
      "lnType",
      s?.getAttribute("lnType") ?? ""
    );
  }
  if ((n.getAttribute("inst") ?? "") === "") {
    const a = Fa(
      Array.from(
        t.querySelectorAll(`LN[lnClass="${i}"]`)
      )
    );
    if (!a) return null;
    n.setAttribute("inst", a);
  }
  return n;
}
function zl(e) {
  if (e === null) return null;
  const t = ["iedName", "serviceType", "srcPrefix", "srcCBName"], [i, n, r, a] = t.map(
    (y) => e.getAttribute(y) ?? ""
  ), s = n === "GOOSE" ? "LGOS" : "LSVS", o = s === "LGOS" ? 'DOI[name="GoCBRef"]' : 'DOI[name="SvCBRef"]', l = e.getAttribute("srcLDInst") ?? e.getAttribute("ldInst"), d = e.getAttribute("srcLNClass") ?? "LLN0", m = `${i}${r}${l}/${d}.${a}`, h = e.closest("IED")?.getAttribute("name"), b = Array.from(
    e.ownerDocument.querySelector(`IED[name="${h}"]`).querySelectorAll(
      `LN[lnClass="${s}"]>${o}>DAI[name="setSrcRef"]>Val`
    )
  ).find((y) => y.textContent === m);
  return b !== void 0 ? b.closest("LN") : null;
}
function Tl(e, t) {
  return mt(
    e,
    t.tagName
  ).filter((n) => n.textContent !== "").length;
}
function _l(e, t) {
  const i = t.tagName === "GSEControl" ? "maxGo" : "maxSv", n = parseInt(
    e.querySelector("Services>SupSubscription")?.getAttribute(i) ?? "0",
    10
  );
  return isNaN(n) ? 0 : n;
}
function Gt(e) {
  if (!e) return null;
  const t = e.closest("LN,LN0"), i = t?.getAttribute("prefix") ?? "", n = t?.getAttribute("lnClass"), r = t?.getAttribute("inst") ?? "", a = e.closest("LDevice")?.getAttribute("inst"), s = e.closest("IED")?.getAttribute("name"), o = e.getAttribute("name");
  return !o && !s && !a && !n ? null : `${s}${a}/${i}${n}${r}.${o}`;
}
function Vl(e, t) {
  const i = e.closest("IED")?.getAttribute("name"), [n, r, a, s] = [
    "ldInst",
    "lnClass",
    "lnInst",
    "doName"
  ].map((h) => e.getAttribute(h));
  if (!i || !n || !r || !a || !s)
    return !1;
  if (Xe(e.ownerDocument) === "2003" || t === void 0)
    return !0;
  const o = t.closest("LDevice")?.getAttribute("inst"), l = t.closest("LN0,LN")?.getAttribute("lnClass"), d = t.closest("LN0,LN")?.getAttribute("inst"), m = t.getAttribute("name");
  return !(!o || !l || !m || typeof d != "string");
}
const lt = {
  ReportControl: "Report",
  GSEControl: "GOOSE",
  SampledValueControl: "SMV"
};
function Rl(e, t) {
  const i = t.closest("IED")?.getAttribute("name") ?? null, [n, r, a, s, o, l] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName"
  ].map((x) => t.getAttribute(x));
  if (Xe(t.ownerDocument) === "2003")
    return E(t.ownerDocument, "ExtRef", {
      iedName: i,
      ldInst: n,
      lnClass: a,
      lnInst: s,
      prefix: r,
      doName: o,
      daName: l
    });
  if (!e || !lt[e.tagName])
    return E(t.ownerDocument, "ExtRef", {
      iedName: i,
      serviceType: "Poll",
      ldInst: n,
      lnClass: a,
      lnInst: s,
      prefix: r,
      doName: o,
      daName: l
    });
  const d = e.closest("LDevice")?.getAttribute("inst") ?? "", m = e.closest("LN0,LN")?.getAttribute("prefix") ?? "", h = e.closest("LN0,LN")?.getAttribute("lnClass") ?? "", b = e.closest("LN0,LN")?.getAttribute("inst"), y = e.getAttribute("name") ?? "";
  return E(t.ownerDocument, "ExtRef", {
    iedName: i,
    serviceType: lt[e.tagName],
    ldInst: n,
    lnClass: a,
    lnInst: s,
    prefix: r,
    doName: o,
    daName: l,
    srcLDInst: d,
    srcPrefix: m,
    srcLNClass: h,
    srcLNInst: b || null,
    srcCBName: y
  });
}
class Pl extends Ee {
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
xl([
  M("div")
], Pl.prototype, "subscriberWrapper");
const Vn = me`
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
function Oe(e, t, i) {
  return (e?.getAttribute(i) ?? "") === (t?.getAttribute(i) ?? "");
}
function He(e, t, i, n) {
  return (e?.getAttribute(t) ?? "") === (i?.getAttribute(n) ?? "");
}
function Ol(e, t, i) {
  if (Xe(i.ownerDocument) === "2003")
    return !0;
  const n = t?.closest("LDevice") ?? void 0, r = t?.closest("LN0") ?? void 0, a = !i.hasAttribute("srcLNClass"), o = r?.getAttribute("lnClass") === "LLN0" && a;
  return (i.getAttribute("serviceType") ?? "") === lt[e] && He(
    i,
    "srcLDInst",
    n,
    "inst"
  ) && He(
    i,
    "scrPrefix",
    r,
    "prefix"
  ) && (o || He(
    i,
    "srcLNClass",
    r,
    "lnClass"
  )) && He(i, "srcLNInst", r, "inst") && He(
    i,
    "srcCBName",
    t,
    "name"
  );
}
function Fl(e, t, i, n) {
  return n.getAttribute("iedName") === i?.closest("IED")?.getAttribute("name") && Oe(i, n, "ldInst") && Oe(i, n, "prefix") && Oe(i, n, "lnClass") && Oe(i, n, "lnInst") && Oe(i, n, "doName") && Oe(i, n, "daName") && Ol(e, t, n);
}
function Ml(e, t, i) {
  return Array.from(e.querySelectorAll("ExtRef")).filter(
    (n) => i && n.hasAttribute("intAddr") || !i && !n.hasAttribute("intAddr")
  ).filter((n) => n.closest("IED") !== t?.closest("IED"));
}
function ot(e, t, i, n, r) {
  return Ml(
    e,
    i,
    r
  ).filter(
    (a) => Fl(t, n, i, a)
  );
}
var ql = Object.defineProperty, Hl = Object.getOwnPropertyDescriptor, se = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Hl(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (r = (n ? s(t, i, r) : s(r)) || r);
  return n && r && ql(t, i, r), r;
};
let X = class extends Ee {
  constructor() {
    super(), this.editCount = -1, this.extRefCounters = /* @__PURE__ */ new Map(), this.iconControlLookup = {
      SampledValueControl: qa,
      GSEControl: Ma
    }, this.resetSelection = this.resetSelection.bind(this), parent.addEventListener("open-doc", this.resetSelection);
    const e = this.closest(".container");
    e && (this.resetExtRefCount = this.resetExtRefCount.bind(this), e.addEventListener("subscription-changed", this.resetExtRefCount));
  }
  get hideSubscribed() {
    return localStorage.getItem(
      `fcda-binding-list-${this.includeLaterBinding ? "later-binding" : "data-binding"}-${this.controlTag}$hideSubscribed`
    ) === "true";
  }
  set hideSubscribed(e) {
    const t = this.hideSubscribed;
    localStorage.setItem(
      `fcda-binding-list-${this.includeLaterBinding ? "later-binding" : "data-binding"}-${this.controlTag}$hideSubscribed`,
      `${e}`
    ), this.requestUpdate("hideSubscribed", t);
  }
  get hideNotSubscribed() {
    return localStorage.getItem(
      `fcda-binding-list-${this.includeLaterBinding ? "later-binding" : "data-binding"}-${this.controlTag}$hideNotSubscribed`
    ) === "true";
  }
  set hideNotSubscribed(e) {
    const t = this.hideNotSubscribed;
    localStorage.setItem(
      `fcda-binding-list-${this.includeLaterBinding ? "later-binding" : "data-binding"}-${this.controlTag}$hideNotSubscribed`,
      `${e}`
    ), this.requestUpdate("hideNotSubscribed", t);
  }
  getControlElements() {
    return this.doc ? Array.from(this.doc.querySelectorAll(`LN0 > ${this.controlTag}`)) : [];
  }
  getFcdaElements(e) {
    const t = e.parentElement;
    return t ? Array.from(
      t.querySelectorAll(
        `:scope > DataSet[name=${e.getAttribute(
          "datSet"
        )}] > FCDA`
      )
    ) : [];
  }
  resetExtRefCount(e) {
    if (e.detail.control && e.detail.fcda) {
      const t = `${N(e.detail.control)} ${N(
        e.detail.fcda
      )}`;
      this.extRefCounters.delete(t);
    }
  }
  getExtRefCount(e, t) {
    const i = `${N(t)} ${N(
      e
    )}`;
    if (!this.extRefCounters.has(i)) {
      const n = ot(
        this.doc.getRootNode(),
        this.controlTag,
        e,
        t,
        this.includeLaterBinding
      ).length;
      this.extRefCounters.set(i, n);
    }
    return this.extRefCounters.get(i);
  }
  openEditWizard(e) {
    const t = Al[this.controlTag].edit(e);
    t && this.dispatchEvent(de(t));
  }
  resetSelection() {
    this.selectedControlElement = void 0, this.selectedFcdaElement = void 0;
  }
  onFcdaSelect(e, t) {
    this.resetSelection(), this.selectedControlElement = e, this.selectedFcdaElement = t;
  }
  updated(e) {
    super.updated(e), (e.has("doc") || e.has("selectedControlElement") || e.has("selectedFcdaElement")) && this.dispatchEvent(
      Cl(
        this.selectedControlElement,
        this.selectedFcdaElement
      )
    ), e.has("doc") && (this.extRefCounters = /* @__PURE__ */ new Map());
  }
  renderFCDA(e, t) {
    const i = this.getExtRefCount(t, e);
    return p`<mwc-list-item
      graphic="large"
      ?hasMeta=${i !== 0}
      twoline
      class="${Te({
      subitem: !0,
      "show-subscribed": i !== 0,
      "show-not-subscribed": i === 0
    })}"
      @click=${() => this.onFcdaSelect(e, t)}
      value="${N(e)}
             ${N(t)}"
    >
      <span>${Ai(t)}</span>
      <span slot="secondary">${wi(t)}</span>
      <mwc-icon slot="graphic">subdirectory_arrow_right</mwc-icon>
      ${i !== 0 ? p`<span slot="meta">${i}</span>` : ct}
    </mwc-list-item>`;
  }
  updateBaseFilterState() {
    this.hideSubscribed ? this.controlBlockList.classList.remove("show-subscribed") : this.controlBlockList.classList.add("show-subscribed"), this.hideNotSubscribed ? this.controlBlockList.classList.remove("show-not-subscribed") : this.controlBlockList.classList.add("show-not-subscribed");
  }
  firstUpdated() {
    this.actionsMenu.anchor = this.actionsMenuIcon, this.actionsMenu.addEventListener("closed", () => {
      this.hideSubscribed = !this.actionsMenu.index.has(0), this.hideNotSubscribed = !this.actionsMenu.index.has(1), this.updateBaseFilterState();
    }), this.updateBaseFilterState();
  }
  renderTitle() {
    const e = {
      "filter-off": this.hideSubscribed || this.hideNotSubscribed
    };
    return p`<h1>
      ${c(`subscription.${this.controlTag}.controlBlockList.title`)}
      <mwc-icon-button
        class="actions-menu-icon ${Te(e)}"
        icon="filter_list"
        @click=${() => {
      this.actionsMenu.open ? this.actionsMenu.close() : this.actionsMenu.show();
    }}
      ></mwc-icon-button>
      <mwc-menu
        multi
        class="actions-menu"
        corner="BOTTOM_RIGHT"
        menuCorner="END"
      >
        <mwc-check-list-item
          class="filter-subscribed"
          left
          ?selected=${!this.hideSubscribed}
        >
          <span>${c("subscription.subscriber.subscribed")}</span>
        </mwc-check-list-item>
        <mwc-check-list-item
          class="filter-not-subscribed"
          left
          ?selected=${!this.hideNotSubscribed}
        >
          <span>${c("subscription.subscriber.notSubscribed")}</span>
        </mwc-check-list-item>
      </mwc-menu>
    </h1> `;
  }
  renderControls(e) {
    return p`<filtered-list class="control-block-list" activatable>
      ${e.filter((t) => this.getFcdaElements(t).length).map((t) => {
      const i = this.getFcdaElements(t), n = i.some(
        (s) => this.getExtRefCount(s, t) !== 0
      ), r = i.some(
        (s) => this.getExtRefCount(s, t) === 0
      );
      return p`
            <mwc-list-item
              noninteractive
              class="${Te({
        control: !0,
        "show-subscribed": n,
        "show-not-subscribed": r
      })}"
              graphic="icon"
              twoline
              hasMeta
              value="${N(t)}${i.map(
        (s) => `
                        ${Ai(s)}
                        ${wi(s)}
                        ${N(s)}`
      ).join("")}"
            >
              <mwc-icon-button
                slot="meta"
                icon="edit"
                class="interactive"
                @click=${() => this.openEditWizard(t)}
              ></mwc-icon-button>
              <span
                >${Oi(t)}
                ${Jt(t) ? p`${Jt(t)}` : ct}</span
              >
              <span slot="secondary">${N(t)}</span>
              <mwc-icon slot="graphic"
                >${this.iconControlLookup[this.controlTag]}</mwc-icon
              >
            </mwc-list-item>
            <li divider role="separator"></li>
            ${i.map(
        (s) => this.renderFCDA(t, s)
      )}
          `;
    })}
    </filtered-list>`;
  }
  render() {
    const e = this.getControlElements();
    return p`<section tabindex="0">
      ${this.renderTitle()}
      ${e ? this.renderControls(e) : p`<h4>${c("subscription.subscriber.notSubscribed")}</h4> `}
    </section>`;
  }
};
X.styles = me`
    ${Vn}

    mwc-list-item.hidden[noninteractive] + li[divider] {
      display: none;
    }

    mwc-list-item {
      --mdc-list-item-meta-size: 48px;
    }

    section {
      position: relative;
    }

    .actions-menu-icon {
      float: right;
    }

    .actions-menu-icon.filter-off {
      color: var(--secondary);
      background-color: var(--mdc-theme-background);
    }

    /* Filtering rules for control blocks end up implementing logic to allow
    very fast CSS response. The following rules appear to be minimal but can be
    hard to understand intuitively for the multiple conditions. If modifying,
    it is suggested to create a truth-table to check for side-effects */

    /* remove all control blocks if no filters */
    filtered-list.control-block-list:not(.show-subscribed, .show-not-subscribed)
      mwc-list-item {
      display: none;
    }

    /* remove control blocks taking care to respect multiple conditions */
    filtered-list.control-block-list.show-not-subscribed:not(.show-subscribed)
      mwc-list-item.control.show-subscribed:not(.show-not-subscribed) {
      display: none;
    }

    filtered-list.control-block-list.show-subscribed:not(.show-not-subscribed)
      mwc-list-item.control.show-not-subscribed:not(.show-subscribed) {
      display: none;
    }

    /* remove fcdas if not part of filter */
    filtered-list.control-block-list:not(.show-not-subscribed)
      mwc-list-item.subitem.show-not-subscribed {
      display: none;
    }

    filtered-list.control-block-list:not(.show-subscribed)
      mwc-list-item.subitem.show-subscribed {
      display: none;
    }

    .interactive {
      pointer-events: all;
    }

    .subitem {
      padding-left: var(--mdc-list-side-padding, 16px);
    }
  `;
se([
  g({ attribute: !1 })
], X.prototype, "doc", 2);
se([
  g({ type: Number })
], X.prototype, "editCount", 2);
se([
  g()
], X.prototype, "controlTag", 2);
se([
  g()
], X.prototype, "includeLaterBinding", 2);
se([
  $()
], X.prototype, "selectedControlElement", 2);
se([
  $()
], X.prototype, "selectedFcdaElement", 2);
se([
  $()
], X.prototype, "extRefCounters", 2);
se([
  g({
    type: Boolean,
    hasChanged() {
      return !1;
    }
  })
], X.prototype, "hideSubscribed", 1);
se([
  g({
    type: Boolean,
    hasChanged() {
      return !1;
    }
  })
], X.prototype, "hideNotSubscribed", 1);
se([
  M(".actions-menu")
], X.prototype, "actionsMenu", 2);
se([
  M(".actions-menu-icon")
], X.prototype, "actionsMenuIcon", 2);
se([
  M(".control-block-list")
], X.prototype, "controlBlockList", 2);
X = se([
  le("fcda-binding-list")
], X);
var Bl = Object.defineProperty, Gl = Object.getOwnPropertyDescriptor, Le = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Gl(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (r = (n ? s(t, i, r) : s(r)) || r);
  return n && r && Bl(t, i, r), r;
};
let pe = class extends Ee {
  constructor() {
    super(), this.editCount = -1;
    const e = this.closest(".container");
    e && (this.onFcdaSelectEvent = this.onFcdaSelectEvent.bind(this), e.addEventListener("fcda-select", this.onFcdaSelectEvent));
  }
  getLNElements() {
    return this.doc ? Array.from(
      this.doc.querySelectorAll("LDevice > LN0, LDevice > LN")
    ).filter((e) => e.closest("IED") !== this.currentIedElement) : [];
  }
  getSubscribedLNElements() {
    return this.getLNElements().filter(
      (e) => ot(
        e,
        this.controlTag,
        this.currentSelectedFcdaElement,
        this.currentSelectedControlElement,
        !1
      ).length > 0
    );
  }
  getAvailableLNElements() {
    return this.getLNElements().filter(
      (e) => ot(
        e,
        this.controlTag,
        this.currentSelectedFcdaElement,
        this.currentSelectedControlElement,
        !1
      ).length == 0
    );
  }
  async onFcdaSelectEvent(e) {
    this.currentSelectedControlElement = e.detail.control, this.currentSelectedFcdaElement = e.detail.fcda, this.currentIedElement = this.currentSelectedFcdaElement ? this.currentSelectedFcdaElement.closest("IED") ?? void 0 : void 0;
  }
  subscribe(e) {
    if (!this.currentIedElement || !this.currentSelectedFcdaElement || !this.currentSelectedControlElement)
      return null;
    const t = {
      actions: [],
      title: c("subscription.connect")
    };
    let i = e.querySelector(":scope > Inputs");
    if (i || (i = E(e.ownerDocument, "Inputs", {}), t.actions.push({
      new: { parent: e, element: i }
    })), !Nl(
      i,
      this.currentSelectedFcdaElement,
      this.currentSelectedControlElement
    ) && Vl(
      this.currentSelectedFcdaElement,
      this.currentSelectedControlElement
    )) {
      const r = Rl(
        this.currentSelectedControlElement,
        this.currentSelectedFcdaElement
      );
      t.actions.push({
        new: { parent: i, element: r }
      });
    }
    const n = e.closest("IED") || void 0;
    return t.actions.push(
      ...kl(
        this.currentSelectedControlElement,
        n
      )
    ), t;
  }
  unsubscribe(e) {
    if (!this.currentIedElement || !this.currentSelectedFcdaElement || !this.currentSelectedControlElement)
      return null;
    const t = [], i = e.querySelector(":scope > Inputs"), n = _n(
      i,
      this.currentSelectedFcdaElement,
      this.currentSelectedControlElement
    );
    n && t.push({ old: { parent: i, element: n } }), t.push(...Sn(t));
    const r = e.closest("IED") || void 0;
    return n && El(n) && t.push(
      ...Dl(
        this.currentSelectedControlElement,
        r
      )
    ), {
      title: c("subscription.disconnect"),
      actions: t
    };
  }
  bindingNotSupported(e) {
    return (e.closest("IED").querySelector(
      ":scope > AccessPoint > Services > ClientServices, :scope > Services > ClientServices"
    )?.getAttribute("noIctBinding") ?? "false") === "true";
  }
  buildLNTitle(e) {
    const t = e.getAttribute("prefix"), i = e.getAttribute("inst"), n = this.nsdoc.getDataDescription(e);
    return `${t ? `${t} - ` : ""}${n.label} ${i ? ` - ${i}` : ""}`;
  }
  renderTitle() {
    return p`<h1>${c("subscription.binding.extRefList.title")}</h1>`;
  }
  renderSubscribedLN(e) {
    const t = ot(
      e,
      this.controlTag,
      this.currentSelectedFcdaElement,
      this.currentSelectedControlElement,
      !1
    ), i = zl(t[0]);
    return p`<mwc-list-item
      graphic="large"
      ?hasMeta=${i !== null}
      ?disabled=${this.bindingNotSupported(e)}
      twoline
      value="${N(e)}"
      @click=${() => {
      const n = this.unsubscribe(e);
      n && (this.dispatchEvent(Ke(n)), this.dispatchEvent(
        Si(
          this.currentSelectedControlElement,
          this.currentSelectedFcdaElement
        )
      ));
    }}
    >
      <span>${this.buildLNTitle(e)}</span>
      <span slot="secondary"> ${N(e.closest("LDevice"))} </span>
      <mwc-icon slot="graphic">close</mwc-icon>
      ${i !== null ? p`<mwc-icon title="${N(i)}" slot="meta"
            >monitor_heart</mwc-icon
          >` : ct}</mwc-list-item
    >`;
  }
  renderSubscribedLNs() {
    const e = this.getSubscribedLNElements();
    return p`
      <mwc-list-item
        noninteractive
        value="${e.map(
      (t) => this.buildLNTitle(t) + " " + N(t.closest("LDevice"))
    ).join(" ")}"
      >
        <span>${c("subscription.subscriber.subscribed")}</span>
      </mwc-list-item>
      <li divider role="separator"></li>
      ${e.length > 0 ? p`${e.map((t) => this.renderSubscribedLN(t))}` : p`<mwc-list-item graphic="large" noninteractive>
            ${c("subscription.binding.extRefList.noSubscribedLNs")}
          </mwc-list-item>`}
    `;
  }
  renderAvailableLNs() {
    const e = this.getAvailableLNElements();
    return p`
      <mwc-list-item
        noninteractive
        value="${e.map(
      (t) => this.buildLNTitle(t) + " " + N(t.closest("LDevice"))
    ).join(" ")}"
      >
        <span> ${c("subscription.subscriber.availableToSubscribe")} </span>
      </mwc-list-item>
      <li divider role="separator"></li>
      ${e.length > 0 ? p`${e.map(
      (t) => p` <mwc-list-item
              graphic="large"
              ?disabled=${this.bindingNotSupported(t)}
              twoline
              value="${N(t)}"
              @click=${() => {
        const i = this.subscribe(t);
        i && (this.dispatchEvent(Ke(i)), this.dispatchEvent(
          Si(
            this.currentSelectedControlElement,
            this.currentSelectedFcdaElement
          )
        ));
      }}
            >
              <span>${this.buildLNTitle(t)}</span>
              <span slot="secondary">
                ${N(t.closest("LDevice"))}
              </span>
              <mwc-icon slot="graphic">add</mwc-icon>
            </mwc-list-item>`
    )}` : p`<mwc-list-item graphic="large" noninteractive>
            ${c("subscription.binding.extRefList.noAvailableLNs")}
          </mwc-list-item>`}
    `;
  }
  render() {
    return p` <section tabindex="0">
      ${this.currentSelectedControlElement && this.currentSelectedFcdaElement ? p`
            ${this.renderTitle()}
            <filtered-list>
              ${this.renderSubscribedLNs()} ${this.renderAvailableLNs()}
            </filtered-list>
          ` : p`
            <h1>${c("subscription.binding.extRefList.noSelection")}</h1>
          `}
    </section>`;
  }
};
pe.styles = me`
    ${Vn}

    mwc-list-item.hidden[noninteractive] + li[divider] {
      display: none;
    }
  `;
Le([
  g({ attribute: !1 })
], pe.prototype, "doc", 2);
Le([
  g({ type: Number })
], pe.prototype, "editCount", 2);
Le([
  g()
], pe.prototype, "nsdoc", 2);
Le([
  g()
], pe.prototype, "controlTag", 2);
Le([
  $()
], pe.prototype, "currentSelectedControlElement", 2);
Le([
  $()
], pe.prototype, "currentSelectedFcdaElement", 2);
Le([
  $()
], pe.prototype, "currentIedElement", 2);
pe = Le([
  le("extref-ln-binding-list")
], pe);
var Wl = Object.defineProperty, Wt = (e, t, i, n) => {
  for (var r = void 0, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (r = s(t, i, r) || r);
  return r && Wl(t, i, r), r;
};
class Ut extends Ee {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
  render() {
    return p`<div>
      <div class="container">
        <fcda-binding-list
          class="column"
          controlTag="SampledValueControl"
          .includeLaterBinding="${!1}"
          .editCount=${this.editCount}
          .doc="${this.doc}"
        >
        </fcda-binding-list>
        <extref-ln-binding-list
          class="column"
          controlTag="SampledValueControl"
          .editCount=${this.editCount}
          .doc="${this.doc}"
          .nsdoc="${this.nsdoc}"
        >
        </extref-ln-binding-list>
      </div>
    </div>`;
  }
  static {
    this.styles = me`
    :host {
      width: 100vw;
    }

    .container {
      display: flex;
      padding: 8px 6px 16px;
      height: calc(100vh - 136px);
    }

    .column {
      flex: 50%;
      margin: 0px 6px 0px;
      min-width: 300px;
      height: 100%;
      overflow-y: auto;
    }
  `;
  }
}
Wt([
  g({ attribute: !1 })
], Ut.prototype, "doc");
Wt([
  g({ type: Number })
], Ut.prototype, "editCount");
Wt([
  g()
], Ut.prototype, "nsdoc");
export {
  Ut as default
};
