import { LitElement as Ie, query as M, property as g, state as z, html as p, css as pe, customElement as le, queryAsync as Ai, eventOptions as Gr, svg as V, queryAssignedNodes as Si, unsafeCSS as Wr } from "lit-element";
import { NodePart as Ur, AttributePart as jr, directive as wi, html as w, render as xi, nothing as Me } from "lit-html";
import "@material/mwc-icon";
import { List as Kr } from "@material/mwc-list";
import "@material/mwc-menu";
import "@material/mwc-icon-button";
import { Select as Zr } from "@material/mwc-select";
import "@material/mwc-switch";
import { TextField as Xr } from "@material/mwc-textfield";
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
const Ci = /* @__PURE__ */ new WeakMap(), lt = (e) => (...t) => {
  const i = e(...t);
  return Ci.set(i, !0), i;
}, Wt = (e) => typeof e == "function" && Ci.has(e);
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
const bt = {};
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
const Ni = (e) => e === null || !(typeof e == "object" || typeof e == "function");
class dt {
  constructor(t) {
    this.value = void 0, this.committer = t;
  }
  setValue(t) {
    t !== bt && (!Ni(t) || t !== this.value) && (this.value = t, Wt(t) || (this.committer.dirty = !0));
  }
  commit() {
    for (; Wt(this.value); ) {
      const t = this.value;
      this.value = bt, t(this);
    }
    this.value !== bt && this.committer.commit();
  }
}
class Ei extends dt {
}
let Qr = !1;
(() => {
  try {
    const e = {
      get capture() {
        return Qr = !0, !1;
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
class Yr {
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
const Ut = /* @__PURE__ */ new WeakMap(), Te = lt((e) => (t) => {
  if (!(t instanceof dt) || t instanceof Ei || t.committer.name !== "class" || t.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = t, { element: r } = i;
  let n = Ut.get(t);
  n === void 0 && (r.setAttribute("class", i.strings.join(" ")), Ut.set(t, n = /* @__PURE__ */ new Set()));
  const a = r.classList || new Yr(r);
  n.forEach((s) => {
    s in e || (a.remove(s), n.delete(s));
  });
  for (const s in e) {
    const c = e[s];
    c != n.has(s) && (c ? (a.add(s), n.add(s)) : (a.remove(s), n.delete(s)));
  }
  typeof a.commit == "function" && a.commit();
}), Jr = 1e3 * 60, wt = "langChanged";
function en(e, t, i) {
  return Object.entries(xt(t || {})).reduce((r, [n, a]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(xt(a))), e);
}
function tn(e, t) {
  const i = e.split(".");
  let r = t.strings;
  for (; r != null && i.length > 0; )
    r = r[i.shift()];
  return r != null ? r.toString() : null;
}
function xt(e) {
  return typeof e == "function" ? e() : e;
}
const rn = () => ({
  loader: () => Promise.resolve({}),
  empty: (e) => `[${e}]`,
  lookup: tn,
  interpolate: en,
  translationCache: {}
});
let Ke = rn();
function nn(e) {
  return Ke = Object.assign(Object.assign({}, Ke), e);
}
function an(e) {
  window.dispatchEvent(new CustomEvent(wt, { detail: e }));
}
function sn(e, t, i = Ke) {
  an({
    previousStrings: i.strings,
    previousLang: i.lang,
    lang: i.lang = e,
    strings: i.strings = t
  });
}
function on(e, t) {
  const i = (r) => e(r.detail);
  return window.addEventListener(wt, i, t), () => window.removeEventListener(wt, i);
}
async function cn(e, t = Ke) {
  const i = await t.loader(e, t);
  t.translationCache = {}, sn(e, i, t);
}
function o(e, t, i = Ke) {
  let r = i.translationCache[e] || (i.translationCache[e] = i.lookup(e, i) || i.empty(e, i));
  return t = t != null ? xt(t) : null, t != null ? i.interpolate(r, t, i) : r;
}
function Ii(e) {
  return e instanceof Ur ? e.startNode.isConnected : e instanceof jr ? e.committer.element.isConnected : e.element.isConnected;
}
function ln(e) {
  for (const [t] of e)
    Ii(t) || e.delete(t);
}
function dn(e) {
  "requestIdleCallback" in window ? window.requestIdleCallback(e) : setTimeout(e);
}
function un(e, t) {
  setInterval(() => dn(() => ln(e)), t);
}
const _t = /* @__PURE__ */ new Map();
function pn() {
  on((e) => {
    for (const [t, i] of _t)
      Ii(t) && ki(t, i, e);
  });
}
pn();
un(_t, Jr);
function ki(e, t, i) {
  const r = t(i);
  e.value !== r && (e.setValue(r), e.commit());
}
wi((e) => (t) => {
  _t.set(t, e), ki(t, e);
});
var Ct = function(e, t) {
  return Ct = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
    i.__proto__ = r;
  } || function(i, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
  }, Ct(e, t);
};
function mn(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Ct(e, t);
  function i() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i());
}
var We = function() {
  return We = Object.assign || function(t) {
    for (var i, r = 1, n = arguments.length; r < n; r++) {
      i = arguments[r];
      for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
    }
    return t;
  }, We.apply(this, arguments);
};
function v(e, t, i, r) {
  var n = arguments.length, a = n < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, i, r);
  else for (var c = e.length - 1; c >= 0; c--) (s = e[c]) && (a = (n < 3 ? s(a) : n > 3 ? s(t, i, a) : s(t, i)) || a);
  return n > 3 && a && Object.defineProperty(t, i, a), a;
}
function Je(e) {
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
function hn(e, t) {
  var i = e.matches || e.webkitMatchesSelector || e.msMatchesSelector;
  return i.call(e, t);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const fn = (e) => e.nodeType === Node.ELEMENT_NODE, Di = () => {
}, bn = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", Di, bn);
document.removeEventListener("x", Di);
const $i = (e = window.document) => {
  let t = e.activeElement;
  const i = [];
  if (!t)
    return i;
  for (; t && (i.push(t), t.shadowRoot); )
    t = t.shadowRoot.activeElement;
  return i;
}, gn = (e) => {
  const t = $i();
  if (!t.length)
    return !1;
  const i = t[t.length - 1], r = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let n = [];
  const a = (s) => {
    n = s.composedPath();
  };
  return document.body.addEventListener("check-if-focused", a), i.dispatchEvent(r), document.body.removeEventListener("check-if-focused", a), n.indexOf(e) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Vt extends Ie {
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
var Li = (
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
var yn = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, vn = {
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
function An(e, t, i) {
  if (!e)
    return { x: 0, y: 0 };
  var r = t.x, n = t.y, a = r + i.left, s = n + i.top, c, l;
  if (e.type === "touchstart") {
    var d = e;
    c = d.changedTouches[0].pageX - a, l = d.changedTouches[0].pageY - s;
  } else {
    var m = e;
    c = m.pageX - a, l = m.pageY - s;
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
var Kt = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Zt = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], et = [], Sn = (
  /** @class */
  function(e) {
    mn(t, e);
    function t(i) {
      var r = e.call(this, We(We({}, t.defaultAdapter), i)) || this;
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
        return yn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return vn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return jt;
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
        var n = t.cssClasses, a = n.ROOT, s = n.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.addClass(a), i.adapter.isUnbounded() && (i.adapter.addClass(s), i.layoutInternal());
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
          for (var a = Je(Kt), s = a.next(); !s.done; s = a.next()) {
            var c = s.value;
            this.adapter.registerInteractionHandler(c, this.activateHandler);
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
    }, t.prototype.registerDeactivationHandlers = function(i) {
      var r, n;
      if (i.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var a = Je(Zt), s = a.next(); !s.done; s = a.next()) {
            var c = s.value;
            this.adapter.registerDocumentInteractionHandler(c, this.deactivateHandler);
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
    }, t.prototype.deregisterRootHandlers = function() {
      var i, r;
      try {
        for (var n = Je(Kt), a = n.next(); !a.done; a = n.next()) {
          var s = a.value;
          this.adapter.deregisterInteractionHandler(s, this.activateHandler);
        }
      } catch (c) {
        i = { error: c };
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
        for (var n = Je(Zt), a = n.next(); !a.done; a = n.next()) {
          var s = a.value;
          this.adapter.deregisterDocumentInteractionHandler(s, this.deactivateHandler);
        }
      } catch (c) {
        i = { error: c };
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
          var a = this.previousActivationEvent, s = a && i !== void 0 && a.type !== i.type;
          if (!s) {
            n.isActivated = !0, n.isProgrammatic = i === void 0, n.activationEvent = i, n.wasActivatedByPointer = n.isProgrammatic ? !1 : i !== void 0 && (i.type === "mousedown" || i.type === "touchstart" || i.type === "pointerdown");
            var c = i !== void 0 && et.length > 0 && et.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (c) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (et.push(i.target), this.registerDeactivationHandlers(i)), n.wasElementMadeActive = this.checkElementMadeActive(i), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              et = [], !n.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (n.wasElementMadeActive = r.checkElementMadeActive(i), n.wasElementMadeActive && r.animateActivation()), n.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, t.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, t.prototype.animateActivation = function() {
      var i = this, r = t.strings, n = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, s = t.cssClasses, c = s.FG_DEACTIVATION, l = s.FG_ACTIVATION, d = t.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var m = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var b = this.getFgTranslationCoordinates(), y = b.startPoint, x = b.endPoint;
        m = y.x + "px, " + y.y + "px", h = x.x + "px, " + x.y + "px";
      }
      this.adapter.updateCssVariable(n, m), this.adapter.updateCssVariable(a, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(c), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, d);
    }, t.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, r = i.activationEvent, n = i.wasActivatedByPointer, a;
      n ? a = An(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      var i = this, r = t.cssClasses.FG_DEACTIVATION, n = this.activationState, a = n.hasDeactivationUXRun, s = n.isActivated, c = a || !s;
      c && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        i.adapter.removeClass(r);
      }, jt.FG_DEACTIVATION_MS));
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
        var n = We({}, r);
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
        var s = Math.sqrt(Math.pow(i.frame.width, 2) + Math.pow(i.frame.height, 2));
        return s + t.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : n();
      var a = Math.floor(r * t.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, t.prototype.updateLayoutCssVars = function() {
      var i = t.strings, r = i.VAR_FG_SIZE, n = i.VAR_LEFT, a = i.VAR_TOP, s = i.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(s, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(n, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, t;
  }(Li)
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
const Xt = /* @__PURE__ */ new WeakMap(), wn = lt((e) => (t) => {
  if (!(t instanceof dt) || t instanceof Ei || t.committer.name !== "style" || t.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = t, { style: r } = i.element;
  let n = Xt.get(t);
  n === void 0 && (r.cssText = i.strings.join(" "), Xt.set(t, n = /* @__PURE__ */ new Set())), n.forEach((a) => {
    a in e || (n.delete(a), a.indexOf("-") === -1 ? r[a] = null : r.removeProperty(a));
  });
  for (const a in e)
    n.add(a), a.indexOf("-") === -1 ? r[a] = e[a] : r.setProperty(a, e[a]);
});
class q extends Vt {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Sn;
  }
  get isActive() {
    return hn(this.parentElement || this, ":active");
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
    return p`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Te(r)}"
          style="${wn({
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
  z()
], q.prototype, "hovering", void 0);
v([
  z()
], q.prototype, "bgFocused", void 0);
v([
  z()
], q.prototype, "fgActivation", void 0);
v([
  z()
], q.prototype, "fgDeactivation", void 0);
v([
  z()
], q.prototype, "fgScale", void 0);
v([
  z()
], q.prototype, "fgSize", void 0);
v([
  z()
], q.prototype, "translateStart", void 0);
v([
  z()
], q.prototype, "translateEnd", void 0);
v([
  z()
], q.prototype, "leftPos", void 0);
v([
  z()
], q.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const xn = pe`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let Nt = class extends q {
};
Nt.styles = [xn];
Nt = v([
  le("mwc-ripple")
], Nt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ke = (e) => (
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
        r.call(this, n), n.forEach((a, s) => {
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
class zi {
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
class W extends Ie {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new zi(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const t = this.renderText(), i = this.graphic ? this.renderGraphic() : p``, r = this.hasMeta ? this.renderMeta() : p``;
    return p`
      ${this.renderRipple()}
      ${i}
      ${t}
      ${r}`;
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
v([
  M("slot")
], W.prototype, "slotElement", void 0);
v([
  Ai("mwc-ripple")
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
  ke(function(e) {
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
  ke(function(e) {
    e ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], W.prototype, "noninteractive", void 0);
v([
  g({ type: Boolean, reflect: !0 }),
  ke(function(e) {
    const t = this.getAttribute("role"), i = t === "gridcell" || t === "option" || t === "row" || t === "tab";
    if (i && e ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(e, "property");
  })
], W.prototype, "selected", void 0);
v([
  z()
], W.prototype, "shouldRenderRipple", void 0);
v([
  z()
], W.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ti = pe`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Et = class extends W {
};
Et.styles = [Ti];
Et = v([
  le("mwc-list-item")
], Et);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Cn(e, t, i) {
  const r = e.constructor;
  if (!i) {
    const c = `__${t}`;
    if (i = r.getPropertyDescriptor(t, c), !i)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const n = i;
  let a = "";
  if (!n.set)
    throw new Error(`@ariaProperty requires a setter for ${t}`);
  const s = {
    configurable: !0,
    enumerable: !0,
    set(c) {
      a === "" && (a = r.getPropertyOptions(t).attribute), this.hasAttribute(a) && this.removeAttribute(a), n.set.call(this, c);
    }
  };
  return n.get && (s.get = function() {
    return n.get.call(this);
  }), s;
}
function Pt(e, t, i) {
  if (t !== void 0)
    return Cn(e, t, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class _i extends Vt {
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
_i.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const gt = /* @__PURE__ */ new WeakMap(), fe = lt((e) => (t) => {
  const i = gt.get(t);
  if (e === void 0 && t instanceof dt) {
    if (i !== void 0 || !gt.has(t)) {
      const r = t.committer.name;
      t.committer.element.removeAttribute(r);
    }
  } else e !== i && t.setValue(e);
  gt.set(t, e);
});
class H extends _i {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new zi(() => (this.shouldRenderRipple = !0, this.ripple.then((t) => this.rippleElement = t), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(t) {
    const i = t.get("indeterminate"), r = t.get("checked"), n = t.get("disabled");
    if (i !== void 0 || r !== void 0 || n !== void 0) {
      const a = this.calculateAnimationStateName(!!r, !!i, !!n), s = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${a}-${s}`;
    }
    super.update(t);
  }
  calculateAnimationStateName(t, i, r) {
    return r ? "disabled" : i ? "indeterminate" : t ? "checked" : "unchecked";
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
    }, r = this.indeterminate ? "mixed" : void 0;
    return p`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Te(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${fe(this.name)}"
              aria-checked="${fe(r)}"
              aria-label="${fe(this.ariaLabel)}"
              aria-labelledby="${fe(this.ariaLabelledBy)}"
              aria-describedby="${fe(this.ariaDescribedBy)}"
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
  z()
], H.prototype, "animationClass", void 0);
v([
  z()
], H.prototype, "shouldRenderRipple", void 0);
v([
  z()
], H.prototype, "focused", void 0);
v([
  z()
], H.prototype, "useStateLayerCustomProperties", void 0);
v([
  Ai("mwc-ripple")
], H.prototype, "ripple", void 0);
v([
  Gr({ passive: !0 })
], H.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Nn = pe`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let It = class extends H {
};
It.styles = [Nn];
It = v([
  le("mwc-checkbox")
], It);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Qe extends W {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const t = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : p``, n = this.hasMeta && this.left ? this.renderMeta() : p``, a = this.renderRipple();
    return p`
      ${a}
      ${r}
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
      ${n}`;
  }
  async onChange(t) {
    const i = t.target;
    this.selected === i.checked || (this._skipPropRequest = !0, this.selected = i.checked, await this.updateComplete, this._skipPropRequest = !1);
  }
}
v([
  M("slot")
], Qe.prototype, "slotElement", void 0);
v([
  M("mwc-checkbox")
], Qe.prototype, "checkboxElement", void 0);
v([
  g({ type: Boolean })
], Qe.prototype, "left", void 0);
v([
  g({ type: String, reflect: !0 })
], Qe.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const En = pe`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let qe = class extends Qe {
};
qe.styles = [Ti, En];
qe = v([
  le("mwc-check-list-item")
], qe);
function D(e, t, i) {
  const r = e.createElementNS(e.documentElement.namespaceURI, t);
  return Object.entries(i).filter(([n, a]) => a !== null).forEach(([n, a]) => r.setAttribute(n, a)), r;
}
function L(e, t) {
  const i = e.cloneNode(!1);
  return Object.entries(t).forEach(([r, n]) => {
    n === null ? i.removeAttribute(r) : i.setAttribute(r, n);
  }), i;
}
function B(e, t) {
  return !e || !t ? [] : Array.from(e.children).filter(
    (i) => i.tagName === t
  );
}
var In = Object.defineProperty, kn = Object.getOwnPropertyDescriptor, oe = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? kn(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (n = (r ? s(t, i, n) : s(n)) || n);
  return r && n && In(t, i, n), n;
};
let K = class extends Xr {
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
    return this.reservedValues && this.reservedValues.some((e) => e === this.value) ? (this.setCustomValidity(o("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
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
          >${e === null ? o("textfield.noMultiplier") : e}</mwc-list-item
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
  z()
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
var Dn = Object.defineProperty, $n = Object.getOwnPropertyDescriptor, _e = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? $n(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (n = (r ? s(t, i, n) : s(n)) || n);
  return r && n && Dn(t, i, n), n;
};
let ye = class extends Zr {
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
], ye.prototype, "nullable", 2);
_e([
  z()
], ye.prototype, "null", 1);
_e([
  g({ type: String })
], ye.prototype, "maybeValue", 1);
_e([
  g({ type: String })
], ye.prototype, "defaultValue", 2);
_e([
  g({ type: Array })
], ye.prototype, "reservedValues", 2);
_e([
  M("mwc-switch")
], ye.prototype, "nullSwitch", 2);
ye = _e([
  le("wizard-select")
], ye);
var Ln = Object.defineProperty, zn = Object.getOwnPropertyDescriptor, ae = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? zn(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (n = (r ? s(t, i, n) : s(n)) || n);
  return r && n && Ln(t, i, n), n;
};
let Z = class extends Ie {
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
  z()
], Z.prototype, "null", 1);
ae([
  z()
], Z.prototype, "checked", 1);
ae([
  z()
], Z.prototype, "deactivateCheckbox", 2);
ae([
  z()
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
function Tn(e) {
  return typeof e == "function";
}
function f(e) {
  return e instanceof K || e instanceof ye || e instanceof Z ? e.maybeValue : e.value ?? null;
}
function Rt(e) {
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
  const i = Tn(e) ? e : () => e;
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
function _n(e) {
  let t = "", i = e.parentElement;
  for (; i?.getAttribute("name"); )
    t = "/" + i.getAttribute("name") + t, i = i.parentElement;
  return t;
}
function Ot(e) {
  const t = e.documentElement;
  return (t.getAttribute("version") ?? "2003") + (t.getAttribute("revision") ?? "") + (t.getAttribute("release") ?? "");
}
function Vi(e) {
  const t = e.getAttribute("name");
  return t || void 0;
}
function Ce(e) {
  const t = e.getAttribute("desc");
  return t || void 0;
}
function j(e) {
  const t = e.split(">"), i = t.pop() ?? "";
  return [t.join(">"), i];
}
const O = ":not(*)";
function Vn(e) {
  return `${e.getAttribute("version")}	${e.getAttribute("revision")}`;
}
function Pn(e, t) {
  const [i, r] = t.split("	");
  return !i || !r ? O : `${e}[version="${i}"][revision="${r}"]`;
}
function Qt(e) {
  return N(e.parentElement) + ">" + e.getAttribute("connectivityNode");
}
function Yt(e, t) {
  const [i, r] = j(t), n = F[e].parents.flatMap(
    (a) => U(a, i).split(",")
  );
  return G(
    n,
    [">"],
    [`${e}[connectivityNode="${r}"]`]
  ).map((a) => a.join("")).join(",");
}
function Rn(e) {
  const [t, i, r, n, a, s] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((c) => e.getAttribute(c));
  return t === "None" ? `${N(e.parentElement)}>(${n} ${s} ${a})` : `${t} ${i || "(Client)"}/${r ?? ""} ${n} ${a ?? ""}`;
}
function On(e, t) {
  if (t.endsWith(")")) {
    const [b, y] = j(t), [x, E, T] = y.substring(1, y.length - 1).split(" ");
    if (!x || !E) return O;
    const C = F[e].parents.flatMap(
      (J) => U(J, b).split(",")
    );
    return G(
      C,
      [">"],
      [`${e}[iedName="None"][lnClass="${x}"][lnType="${E}"][lnInst="${T}"]`]
    ).map((J) => J.join("")).join(",");
  }
  const [i, r, n, a, s] = t.split(/[ /]/);
  if (!i || !r || !a) return O;
  const [
    c,
    l,
    d,
    m,
    h
  ] = [
    [`[iedName="${i}"]`],
    r === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${r}"]`],
    n ? [`[prefix="${n}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    s ? [`[lnInst="${s}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return G(
    [e],
    c,
    l,
    d,
    m,
    h
  ).map((b) => b.join("")).join(",");
}
function Fn(e) {
  return `${N(e.parentElement)}>${e.getAttribute(
    "iedName"
  )} ${e.getAttribute("apName")}`;
}
function Mn(e, t) {
  const [i, r] = j(t), [n, a] = r.split(" ");
  return `${U(
    "IED",
    i
  )}>${e}[iedName="${n}"][apName="${a}"]`;
}
function qn(e) {
  return `${N(e.parentElement)}>${e.getAttribute("associationID") ?? ""}`;
}
function Hn(e, t) {
  const [i, r] = j(t);
  return r ? `${U(
    "Server",
    i
  )}>${e}[associationID="${r}"]` : O;
}
function Bn(e) {
  return `${N(e.closest("IED"))}>>${e.getAttribute("inst")}`;
}
function Gn(e, t) {
  const [i, r] = t.split(">>");
  return r ? `IED[name="${i}"] ${e}[inst="${r}"]` : O;
}
function Wn(e) {
  const t = e.textContent, [i, r, n, a, s] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((c) => e.getAttribute(c));
  return `${N(e.parentElement)}>${t} ${i || ""} ${r || ""}/${n ?? ""} ${a ?? ""} ${s ?? ""}`;
}
function Un(e, t) {
  const [i, r] = j(t), [n, a, s, c, l, d] = r.split(/[ /]/), [
    m,
    h,
    b,
    y,
    x,
    E
  ] = [
    F[e].parents.flatMap(
      (T) => U(T, i).split(",")
    ),
    [`${n}`],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
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
    E
  ).map((T) => T.join("")).join(",");
}
function jn(e) {
  const [t, i, r, n, a, s, c, l] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((m) => e.getAttribute(m)), d = `${t}/${i ?? ""} ${r} ${n ?? ""}.${a} ${s || ""}`;
  return `${N(e.parentElement)}>${d} (${c}${l ? " [" + l + "]" : ""})`;
}
function Kn(e, t) {
  const [i, r] = j(t), [n, a, s, c] = r.split(/[ /.]/), l = r.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), d = l && l[1] ? l[1] : "", m = l && l[2] ? l[2] : "", h = r.match(/\(([A-Z]{2})/), b = r.match(/ \[([0-9]{1,2})\]/), y = h && h[1] ? h[1] : "", x = b && b[1] ? b[1] : "", [
    E,
    T,
    C,
    J,
    me,
    Se,
    mt,
    ht,
    ft
  ] = [
    F[e].parents.flatMap(
      (He) => U(He, i).split(",")
    ),
    [`[ldInst="${n}"]`],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    c ? [`[lnInst="${c}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${d}"]`],
    m ? [`[daName="${m}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${y}"]`],
    x ? [`[ix="${x}"]`] : [":not([ix])", '[ix=""]']
  ];
  return G(
    E,
    [">"],
    [e],
    T,
    C,
    J,
    me,
    Se,
    mt,
    ht,
    ft
  ).map((He) => He.join("")).join(",");
}
function Zn(e) {
  if (!e.parentElement) return NaN;
  const t = N(e.parentElement), i = e.getAttribute("iedName"), r = e.getAttribute("intAddr"), n = Array.from(
    e.parentElement.querySelectorAll(`ExtRef[intAddr="${r}"]`)
  ).indexOf(e);
  if (r) return `${t}>${r}[${n}]`;
  const [
    a,
    s,
    c,
    l,
    d,
    m,
    h,
    b,
    y,
    x,
    E,
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
  ].map((me) => e.getAttribute(me)), C = T ? `${h}:${T} ${b ?? ""}/${y ?? ""} ${x ?? ""} ${E ?? ""}` : "", J = `${i} ${a}/${s ?? ""} ${c} ${l ?? ""} ${d} ${m || ""}`;
  return `${t}>${C ? C + " " : ""}${J}${r ? `@${r}` : ""}`;
}
function Xn(e, t) {
  const [i, r] = j(t), n = F[e].parents.flatMap(
    (Be) => U(Be, i).split(",")
  );
  if (r.endsWith("]")) {
    const [Be] = r.split("["), Hr = [`[intAddr="${Be}"]`];
    return G(n, [">"], [e], Hr).map((Br) => Br.join("")).join(",");
  }
  let a, s, c, l, d, m, h, b, y, x, E, T, C, J;
  !r.includes(":") && !r.includes("@") ? [a, s, c, l, d, m, h] = r.split(/[ /]/) : r.includes(":") && !r.includes("@") ? [
    b,
    y,
    x,
    E,
    T,
    C,
    a,
    s,
    c,
    l,
    d,
    m,
    h
  ] = r.split(/[ /:]/) : !r.includes(":") && r.includes("@") ? [a, s, c, l, d, m, h, J] = r.split(/[ /@]/) : [
    b,
    y,
    x,
    E,
    T,
    C,
    a,
    s,
    c,
    l,
    d,
    m,
    h,
    J
  ] = r.split(/[ /:@]/);
  const [
    me,
    Se,
    mt,
    ht,
    ft,
    He,
    _r,
    Vr,
    Pr,
    Rr,
    Or,
    Fr,
    Mr,
    qr
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])"],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    l ? [`[lnClass="${l}"]`] : [":not([lnClass])"],
    d ? [`[lnInst="${d}"]`] : [":not([lnInst])", '[lnInst=""]'],
    m ? [`[doName="${m}"]`] : [":not([doName])"],
    h ? [`[daName="${h}"]`] : [":not([daName])", '[daName=""]'],
    b ? [`[serviceType="${b}"]`] : [":not([serviceType])", '[serviceType=""]'],
    y ? [`[srcCBName="${y}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    x ? [`[srcLDInst="${x}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    E ? [`[srcPrefix="${E}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    T ? [`[srcLNClass="${T}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    C ? [`[srcLNInst="${C}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    J ? [`[intAddr="${J}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return G(
    n,
    [">"],
    [e],
    me,
    Se,
    mt,
    ht,
    ft,
    He,
    _r,
    Vr,
    Pr,
    Rr,
    Or,
    Fr,
    Mr,
    qr
  ).map((Be) => Be.join("")).join(",");
}
function Qn(e) {
  const [t, i, r] = ["prefix", "lnClass", "inst"].map(
    (n) => e.getAttribute(n)
  );
  return `${N(e.parentElement)}>${t ?? ""} ${i} ${r}`;
}
function Yn(e, t) {
  const [i, r] = j(t), n = F[e].parents.flatMap(
    (h) => U(h, i).split(",")
  ), [a, s, c] = r.split(" ");
  if (!s) return O;
  const [l, d, m] = [
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    [`[inst="${c}"]`]
  ];
  return G(
    n,
    [">"],
    [e],
    l,
    d,
    m
  ).map((h) => h.join("")).join(",");
}
function Jn(e) {
  const [t, i, r, n, a, s] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((c) => e.getAttribute(c));
  return `${N(e.parentElement)}>${i} ${t || ""} ${r}/${n ?? ""} ${a} ${s}`;
}
function ea(e, t) {
  const [i, r] = j(t), n = F[e].parents.flatMap(
    (C) => U(C, i).split(",")
  ), [a, s, c, l, d, m] = r.split(/[ /]/), [
    h,
    b,
    y,
    x,
    E,
    T
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])", '[iedName=""]'],
    s ? [`[apRef="${s}"]`] : [":not([apRef])", '[apRef=""]'],
    c ? [`[ldInst="${c}"]`] : [":not([ldInst])", '[ldInst=""]'],
    l ? [`[prefix="${l}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${d}"]`],
    m ? [`[lnInst="${m}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return G(
    n,
    [">"],
    [e],
    h,
    b,
    y,
    x,
    E,
    T
  ).map((C) => C.join("")).join(",");
}
function Jt(e) {
  const [t, i] = ["name", "ix"].map((r) => e.getAttribute(r));
  return `${N(e.parentElement)}>${t}${i ? "[" + i + "]" : ""}`;
}
function kt(e, t, i = -1) {
  i === -1 && (i = t.split(">").length);
  const [r, n] = j(t), [a, s, c, l] = n.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!s) return O;
  if (i === 0) return `${e}[name="${s}"]`;
  const d = F[e].parents.flatMap(
    (b) => b === "SDI" ? kt(b, r, i - 1).split(",") : U(b, r).split(",")
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
function ta(e) {
  if (!e.parentElement) return NaN;
  const t = e.getAttribute("sGroup"), i = Array.from(e.parentElement.children).filter((r) => r.getAttribute("sGroup") === t).findIndex((r) => r.isSameNode(e));
  return `${N(e.parentElement)}>${t ? t + "." : ""} ${i}`;
}
function ia(e, t) {
  const [i, r] = j(t), [n, a] = r.split(" "), s = parseFloat(a), c = F[e].parents.flatMap(
    (m) => U(m, i).split(",")
  ), [l, d] = [
    n ? [`[sGroup="${n}"]`] : [""],
    s ? [`:nth-child(${s + 1})`] : [""]
  ];
  return G(
    c,
    [">"],
    [e],
    l,
    d
  ).map((m) => m.join("")).join(",");
}
function ra(e) {
  const [t, i] = ["iedName", "apName"].map(
    (r) => e.getAttribute(r)
  );
  return `${t} ${i}`;
}
function na(e, t) {
  const [i, r] = t.split(" ");
  return !i || !r ? O : `${e}[iedName="${i}"][apName="${r}"]`;
}
function ei(e) {
  const [t, i] = ["ldInst", "cbName"].map(
    (r) => e.getAttribute(r)
  );
  return `${t} ${i}`;
}
function ti(e, t) {
  const [i, r] = t.split(" ");
  return !i || !r ? O : `${e}[ldInst="${i}"][cbName="${r}"]`;
}
function aa(e) {
  if (!e.parentElement) return NaN;
  if (!e.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const t = e.getAttribute("type");
  return e.parentElement.children.length > 1 && t !== "Connection" && t !== "RedConn" ? NaN : `${N(e.parentElement)}>${t}`;
}
function sa(e, t) {
  const [i, r] = j(t), [n, a] = [
    F[e].parents.flatMap(
      (s) => U(s, i).split(",")
    ),
    r ? [`[type="${r}"]`] : [""]
  ];
  return G(n, [">"], [e], a).map((s) => s.join("")).join(",");
}
function oa(e) {
  if (!e.parentElement) return NaN;
  const t = e.parentElement, i = e.getAttribute("type");
  if (t.tagName === "PhysConn")
    return `${N(e.parentElement)}>${i}`;
  const r = Array.from(e.parentElement.children).filter((n) => n.getAttribute("type") === i).findIndex((n) => n.isSameNode(e));
  return `${N(e.parentElement)}>${i} [${r}]`;
}
function ca(e, t) {
  const [i, r] = j(t), [n] = r.split(" "), a = r && r.match(/\[([0-9]+)\]/) && r.match(/\[([0-9]+)\]/)[1] ? parseFloat(r.match(/\[([0-9]+)\]/)[1]) : NaN, [s, c, l] = [
    F[e].parents.flatMap(
      (d) => U(d, i).split(",")
    ),
    [`[type="${n}"]`],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return G(
    s,
    [">"],
    [e],
    c,
    l
  ).map((d) => d.join("")).join(",");
}
function la(e) {
  return `${N(e.parentElement)}>${e.getAttribute("ord")}`;
}
function da(e, t) {
  const [i, r] = j(t);
  return `${U("EnumType", i)}>${e}[ord="${r}"]`;
}
function ua(e) {
  return `${N(e.parentElement)}>${e.getAttribute("type") || "8-MMS"}	${e.textContent}`;
}
function pa(e, t) {
  const [i, r] = j(t), [n, a] = r.split("	"), [s] = [
    F[e].parents.flatMap(
      (c) => U(c, i).split(",")
    )
  ];
  return G(
    s,
    [">"],
    [e],
    [`[type="${n}"]`],
    [">"],
    [a]
  ).map((c) => c.join("")).join(",");
}
function ma() {
  return "";
}
function ha() {
  return ":root";
}
function $(e) {
  return e.parentElement.tagName === "SCL" ? e.getAttribute("name") : `${N(e.parentElement)}>${e.getAttribute("name")}`;
}
function k(e, t, i = -1) {
  i === -1 && (i = t.split(">").length);
  const [r, n] = j(t);
  if (!n) return O;
  if (i === 0) return `${e}[name="${n}"]`;
  const a = F[e].parents;
  if (!a) return O;
  const s = a.flatMap(
    (c) => F[c].selector === F.Substation.selector ? k(c, r, i - 1).split(",") : U(c, r).split(",")
  ).filter((c) => !c.startsWith(O));
  return s.length === 0 ? O : G(s, [">"], [e], [`[name="${n}"]`]).map((c) => c.join("")).join(",");
}
function A(e) {
  return N(e.parentElement).toString();
}
function S(e, t) {
  const i = F[e].parents;
  if (!i) return O;
  const r = i.flatMap((n) => U(n, t).split(",")).filter((n) => !n.startsWith(O));
  return r.length === 0 ? O : G(r, [">"], [e]).map((n) => n.join("")).join(",");
}
function tt(e) {
  return `#${e.id}`;
}
function it(e, t) {
  const i = t.replace(/^#/, "");
  return i ? `${e}[id="${i}"]` : O;
}
const Pi = [
  "TransformerWinding",
  "ConductingEquipment"
], Ri = [
  "GeneralEquipment",
  "PowerTransformer",
  ...Pi
], Dt = ["Substation", "VoltageLevel", "Bay"], Oi = ["Process", "Line"], Fi = ["EqSubFunction", "EqFunction"], fa = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Ri,
  ...Dt,
  ...Oi,
  ...Fi
], Mi = ["ConnectivityNode", ...fa], ba = ["GOOSESecurity", "SMVSecurity"], ga = ["SubNetwork", ...ba, ...Mi], ya = ["BDA", "DA"], va = ["SampledValueControl", "GSEControl"], Aa = ["LogControl", "ReportControl"], Sa = [...va, ...Aa], wa = ["GSE", "SMV"], xa = [
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
  ...Sa,
  ...wa,
  ...ya
], ze = ["LN0", "LN"], Ca = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Na = ["Subject", "IssuerName"], Ea = ["MinTime", "MaxTime"], Ia = ["LNodeType", "DOType", "DAType", "EnumType"], ka = [
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
], Da = ["DynDataSet", "ConfDataSet"], $a = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...Da
], La = ["ConfLogControl", "ConfSigRef"], za = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], Ta = ["SCL", ...ga, ...xa, ...Ia], qi = [
  ...Ta,
  ...Ca,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Na,
  ...Ea,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...ze,
  ...ka,
  "DynAssociation",
  "SettingGroups",
  ...$a,
  ...La,
  ...za,
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
], _a = new Set(qi);
function Ft(e) {
  return _a.has(e);
}
const ut = ["Text", "Private"], Ne = [...ut], R = [...ut], rt = [...ut], ii = [...R, "Val"], Hi = [...Ne, "LNode"], Ee = [...Hi], $t = [...Ee], yt = [
  ...Ee,
  "PowerTransformer",
  "GeneralEquipment"
], ri = [
  ...$t,
  "Terminal"
], ni = [...R, "Address"], Bi = [...Ne], ai = [...Bi, "IEDName"], si = [
  ...R,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], oi = [
  ...Ee,
  "GeneralEquipment",
  "Function"
], ci = [...Bi, "TrgOps"], li = [
  ...Ee,
  "GeneralEquipment",
  "EqSubFunction"
], F = {
  AccessControl: {
    identity: A,
    selector: S,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: $,
    selector: k,
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
    identity: A,
    selector: S,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: qn,
    selector: Hn,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: A,
    selector: S,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: $,
    selector: k,
    parents: ["DAType"],
    children: [...ii]
  },
  BitRate: {
    identity: A,
    selector: S,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: $,
    selector: k,
    parents: ["VoltageLevel"],
    children: [
      ...yt,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: Jn,
    selector: ea,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: A,
    selector: S,
    parents: ["SCL"],
    children: [...R, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: $,
    selector: k,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...ri,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: A,
    selector: S,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: ra,
    selector: na,
    parents: ["SubNetwork"],
    children: [...R, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: $,
    selector: k,
    parents: ["Bay", "Line"],
    children: [...Hi]
  },
  DA: {
    identity: $,
    selector: k,
    parents: ["DOType"],
    children: [...ii]
  },
  DAI: {
    identity: Jt,
    selector: kt,
    parents: ["DOI", "SDI"],
    children: [...R, "Val"]
  },
  DAType: {
    identity: tt,
    selector: it,
    parents: ["DataTypeTemplates"],
    children: [...rt, "BDA", "ProtNs"]
  },
  DO: {
    identity: $,
    selector: k,
    parents: ["LNodeType"],
    children: [...R]
  },
  DOI: {
    identity: $,
    selector: k,
    parents: [...ze],
    children: [...R, "SDI", "DAI"]
  },
  DOType: {
    identity: tt,
    selector: it,
    parents: ["DataTypeTemplates"],
    children: [...rt, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: $,
    selector: k,
    parents: [...ze],
    children: [...Ne, "FCDA"]
  },
  DataSetDirectory: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: A,
    selector: S,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: tt,
    selector: it,
    parents: ["DataTypeTemplates"],
    children: [...rt, "EnumVal"]
  },
  EnumVal: {
    identity: la,
    selector: da,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: $,
    selector: k,
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
    identity: $,
    selector: k,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...li]
  },
  ExtRef: {
    identity: Zn,
    selector: Xn,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: jn,
    selector: Kn,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: $,
    selector: k,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...Ee,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: $,
    selector: k,
    parents: [
      "SubFunction",
      "Function",
      ...Oi,
      ...Fi,
      ...Dt
    ],
    children: [...$t, "EqFunction"]
  },
  GetCBValues: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: $,
    selector: k,
    parents: ["AccessPoint"],
    children: [...Ne, "Subject", "IssuerName"]
  },
  GSE: {
    identity: ei,
    selector: ti,
    parents: ["ConnectedAP"],
    children: [...ni, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: $,
    selector: k,
    parents: ["LN0"],
    children: [...ai, "Protocol"]
  },
  GSESettings: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: A,
    selector: S,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: A,
    selector: S,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: Vn,
    selector: Pn,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: $,
    selector: k,
    parents: ["SCL"],
    children: [...R, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: Wn,
    selector: Un,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: A,
    selector: S,
    parents: [...ze],
    children: [...R, "ExtRef"]
  },
  IssuerName: {
    identity: A,
    selector: S,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: Fn,
    selector: Mn,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: Bn,
    selector: Gn,
    parents: ["Server"],
    children: [...R, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: Qn,
    selector: Yn,
    parents: ["AccessPoint", "LDevice"],
    children: [...si]
  },
  LN0: {
    identity: A,
    selector: S,
    parents: ["LDevice"],
    children: [
      ...si,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: Rn,
    selector: On,
    parents: [...Mi],
    children: [...R]
  },
  LNodeType: {
    identity: tt,
    selector: it,
    parents: ["DataTypeTemplates"],
    children: [...rt, "DO"]
  },
  Line: {
    identity: $,
    selector: k,
    parents: ["Process", "SCL"],
    children: [
      ...oi,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: $,
    selector: k,
    parents: [...ze],
    children: [...R]
  },
  LogControl: {
    identity: $,
    selector: k,
    parents: [...ze],
    children: [...ci]
  },
  LogSettings: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: A,
    selector: S,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: A,
    selector: S,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: A,
    selector: S,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: Qt,
    selector: Yt,
    parents: ["TransformerWinding"],
    children: [...R]
  },
  OptFields: {
    identity: A,
    selector: S,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: oa,
    selector: ca,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: aa,
    selector: sa,
    parents: ["ConnectedAP"],
    children: [...R, "P"]
  },
  PowerTransformer: {
    identity: $,
    selector: k,
    parents: [...Dt],
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
    identity: $,
    selector: k,
    parents: ["Process", "SCL"],
    children: [
      ...oi,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: ua,
    selector: pa,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: A,
    selector: S,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: $,
    selector: k,
    parents: [...ze],
    children: [...ci, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: A,
    selector: S,
    parents: ["ReportControl"],
    children: [...R, "ClientLN"]
  },
  SamplesPerSec: {
    identity: A,
    selector: S,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: $,
    selector: k,
    parents: ["LN0"],
    children: [...ai, "SmvOpts"]
  },
  SecPerSamples: {
    identity: A,
    selector: S,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: ma,
    selector: ha,
    parents: [],
    children: [
      ...ut,
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
    identity: Jt,
    selector: kt,
    parents: ["DOI", "SDI"],
    children: [...R, "SDI", "DAI"]
  },
  SDO: {
    identity: $,
    selector: k,
    parents: ["DOType"],
    children: [...Ne]
  },
  Server: {
    identity: A,
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
    identity: A,
    selector: S,
    parents: ["AccessPoint"],
    children: [...R]
  },
  Services: {
    identity: A,
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
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: A,
    selector: S,
    parents: ["LN0"],
    children: [...R]
  },
  SettingGroups: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: A,
    selector: S,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: A,
    selector: S,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: ei,
    selector: ti,
    parents: ["ConnectedAP"],
    children: [...ni]
  },
  SmvOpts: {
    identity: A,
    selector: S,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: $,
    selector: k,
    parents: ["AccessPoint"],
    children: [...Ne, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: $,
    selector: k,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...Pi
    ],
    children: [...Ee, "EqFunction"]
  },
  SubFunction: {
    identity: $,
    selector: k,
    parents: ["SubFunction", "Function"],
    children: [
      ...Ee,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: $,
    selector: k,
    parents: ["Communication"],
    children: [...Ne, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: A,
    selector: S,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: $,
    selector: k,
    parents: ["SCL"],
    children: [...yt, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: $,
    selector: k,
    parents: ["TransformerWinding"],
    children: [...Ee, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: Qt,
    selector: Yt,
    parents: [...Ri],
    children: [...R]
  },
  Text: {
    identity: A,
    selector: S,
    parents: qi.filter((e) => e !== "Text" && e !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: A,
    selector: S,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: $,
    selector: k,
    parents: ["PowerTransformer"],
    children: [
      ...ri,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: A,
    selector: S,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: ta,
    selector: ia,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: A,
    selector: S,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: A,
    selector: S,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: $,
    selector: k,
    parents: ["Substation"],
    children: [...yt, "Voltage", "Bay", "Function"]
  }
};
function U(e, t) {
  return typeof t != "string" ? O : Ft(e) ? F[e].selector(e, t) : e;
}
function be(e, t, i) {
  if (typeof i != "string" || !Ft(t)) return null;
  const r = e.querySelector(F[t].selector(t, i));
  return r === null || ie(r) ? r : Array.from(
    e.querySelectorAll(F[t].selector(t, i))
  ).find(ie) ?? null;
}
function N(e) {
  if (e === null) return NaN;
  if (e.closest("Private")) return NaN;
  const t = e.tagName;
  return Ft(t) ? F[t].identity(e) : NaN;
}
wi((e) => (t) => {
  Object.keys(e).length ? t.setValue(e) : t.setValue("");
});
const Ze = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  decimal: "[+\\-]?[0-9]+(([.][0-9]*)?|([.][0-9]+))",
  unsigned: "[+]?[0-9]+(([.][0-9]*)?|([.][0-9]+))"
};
function Va(e, t) {
  return typeof e == "string" && typeof t == "string" ? e.localeCompare(t) : typeof e == "object" && typeof t == "string" ? (e.getAttribute("name") ?? "").localeCompare(t) : typeof e == "string" && typeof t == "object" ? e.localeCompare(t.getAttribute("name")) : typeof e == "object" && typeof t == "object" ? (e.getAttribute("name") ?? "").localeCompare(
    t.getAttribute("name") ?? ""
  ) : 0;
}
function G(...e) {
  return e.reduce(
    (t, i) => t.flatMap((r) => i.map((n) => [r, n].flat())),
    [[]]
  );
}
function Gi(e, t = /* @__PURE__ */ new WeakSet()) {
  if (t.has(e)) return 1 / 0;
  switch (e?.constructor) {
    case Object:
    case Array:
      return t.add(e), 1 + Math.max(
        -1,
        ...Object.values(e).map((i) => Gi(i, t))
      );
    default:
      return 0;
  }
}
function ie(e) {
  return !e.closest("Private");
}
const Pa = 99, Wi = Array(Pa).fill(1).map((e, t) => `${t + 1}`);
function Ra(e) {
  const t = /* @__PURE__ */ new Map();
  return (i) => {
    if (!t.has(i)) {
      const r = new Set(
        B(e, "LNode").filter((n) => n.getAttribute("lnClass") === i).map((n) => n.getAttribute("lnInst"))
      );
      t.set(i, () => {
        const n = Wi.find((a) => !r.has(a));
        return n && r.add(n), n;
      });
    }
    return t.get(i)();
  };
}
function Oa(e) {
  const t = new Set(e.map((i) => i.getAttribute("inst") || ""));
  return Wi.find((i) => !t.has(i));
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
const Ye = {
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
}, Fa = V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Ye.gooseIcon}</svg>`;
V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Ye.reportIcon}</svg>`;
const Ma = V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Ye.smvIcon}</svg>`;
V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Ye.logIcon}</svg>`;
V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z" />
</svg>`;
V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M21,14V4H3V14H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M4,5H15V10H4V5M16,5H20V7H16V5M20,8V13H16V8H20M4,11H9V13H4V11M10,11H15V13H10V11Z" />
</svg>`;
V`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4,1C2.89,1 2,1.89 2,3V7C2,8.11 2.89,9 4,9H1V11H13V9H10C11.11,9 12,8.11 12,7V3C12,1.89 11.11,1 10,1H4M4,3H10V7H4V3M14,13C12.89,13 12,13.89 12,15V19C12,20.11 12.89,21 14,21H11V23H23V21H20C21.11,21 22,20.11 22,19V15C22,13.89 21.11,13 20,13H14M3.88,13.46L2.46,14.88L4.59,17L2.46,19.12L3.88,20.54L6,18.41L8.12,20.54L9.54,19.12L7.41,17L9.54,14.88L8.12,13.46L6,15.59L3.88,13.46M14,15H20V19H14V15Z" />
</svg>`;
const di = {
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
  const t = di[e]?.height ?? 24, i = di[e]?.width ?? 24;
  return p`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 ${i} ${t}"
    width="${i}"
  >
    ${Ye[e]}
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
function qa(e, t) {
  const i = {};
  return Array.from(e.attributes).forEach((r) => {
    i[r.name] = r.value;
  }), { element: e, oldAttributes: i, newAttributes: t };
}
function Xe(e, t = "user", i) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { action: e, initiator: t, ...i?.detail }
  });
}
const Ui = {
  IED: [
    {
      attributeName: "iedName",
      filter: Le("Association")
    },
    {
      attributeName: "iedName",
      filter: Le("ClientLN")
    },
    {
      attributeName: "iedName",
      filter: Le("ConnectedAP")
    },
    {
      attributeName: "iedName",
      filter: Le("ExtRef")
    },
    {
      attributeName: "iedName",
      filter: Le("KDC")
    },
    {
      attributeName: "iedName",
      filter: Le("LNode")
    },
    {
      attributeName: null,
      filter: vt("GSEControl > IEDName")
    },
    {
      attributeName: null,
      filter: vt("SampledValueControl > IEDName")
    },
    {
      attributeName: null,
      filter: vt("LN > DOI > DAI > Val")
    }
  ],
  Substation: [
    {
      attributeName: "substationName",
      filter: Le("Terminal")
    }
  ],
  VoltageLevel: [
    {
      attributeName: "voltageLevelName",
      filter: ui("Terminal", {
        Substation: "substationName"
      })
    }
  ],
  Bay: [
    {
      attributeName: "bayName",
      filter: ui("Terminal", {
        Substation: "substationName",
        VoltageLevel: "voltageLevelName"
      })
    }
  ]
};
function Le(e) {
  return function(i, r, n) {
    return `${e}[${r}="${n}"]`;
  };
}
function vt(e) {
  return function() {
    return `${e}`;
  };
}
function ui(e, t) {
  return function(r, n, a) {
    return `${e}${Object.entries(t).map(([s, c]) => {
      const l = r.closest(s);
      if (l && l.hasAttribute("name")) {
        const d = l.getAttribute("name");
        return `[${c}="${d}"]`;
      }
      return null;
    }).join("")}[${n}="${a}"]`;
  };
}
function Ha(e, t, i) {
  const r = e.cloneNode(!1);
  return r.setAttribute(t, i), r;
}
function ji(e, t) {
  const i = e.cloneNode(!1);
  return i.textContent = t, i;
}
function Mt(e, t, i) {
  if (t === null || t === i)
    return [];
  const r = Ui[e.tagName];
  if (r === void 0)
    return [];
  const n = [];
  return r.forEach((a) => {
    const s = a.filter(e, a.attributeName, t);
    a.attributeName ? Array.from(e.ownerDocument.querySelectorAll(`${s}`)).filter(ie).forEach((c) => {
      const l = Ha(
        c,
        a.attributeName,
        i
      );
      n.push({ old: { element: c }, new: { element: l } });
    }) : Array.from(e.ownerDocument.querySelectorAll(`${s}`)).filter((c) => c.textContent === t).filter(ie).forEach((c) => {
      const l = ji(c, i);
      n.push({ old: { element: c }, new: { element: l } });
    });
  }), e.tagName === "IED" && n.push(...Ba(e, t, i)), n;
}
function Ba(e, t, i) {
  const r = [];
  return e.ownerDocument.querySelectorAll("IED").forEach((a) => {
    const s = Array.from(
      a.querySelectorAll(
        ':scope > AccessPoint > Server > LDevice > LN[lnClass="LGOS"] > DOI > DAI > Val, :scope > AccessPoint > Server > LDevice > LN[lnClass="LSVS"] > DOI > DAI > Val'
      )
    );
    if (s.length === 0) return;
    const c = a.querySelector(
      `:scope > AccessPoint > Server > LDevice > LN0 > Inputs > ExtRef[iedName="${t}"][srcCBName]`
    ), l = c?.getAttribute("srcLDInst") + "/" + c?.getAttribute("srcLNClass") + "." + c?.getAttribute("srcCBName");
    for (let d of s)
      if (t + l === d.textContent.trim()) {
        const m = ji(
          d,
          i + l
        );
        r.push({
          old: { element: d },
          new: { element: m }
        });
        break;
      }
  }), r;
}
function Ki(e) {
  const t = Vi(e) ?? null;
  if (t === null)
    return [];
  const i = Ui[e.tagName];
  if (i === void 0)
    return [];
  const r = [];
  return i.forEach((n) => {
    const a = n.filter(e, n.attributeName, t);
    n.attributeName ? Array.from(e.ownerDocument.querySelectorAll(`${a}`)).filter(ie).forEach((s) => {
      r.push({ old: { parent: s.parentElement, element: s } });
    }) : Array.from(e.ownerDocument.querySelectorAll(`${a}`)).filter((s) => s.textContent === t).filter(ie).forEach((s) => {
      s.parentElement && r.push({
        old: {
          parent: s.parentElement.parentElement,
          element: s.parentElement
        }
      });
    });
  }), r;
}
function Zi(e) {
  return (t) => {
    const i = f(t.find((a) => a.label === "name")), r = f(t.find((a) => a.label === "desc"));
    if (i === e.getAttribute("name") && r === e.getAttribute("desc"))
      return [];
    const n = L(e, { name: i, desc: r });
    return [{ old: { element: e }, new: { element: n } }];
  };
}
function Ga(e, t) {
  return (i) => {
    const r = f(i.find((l) => l.label === "name")), n = e.getAttribute("name"), a = f(i.find((l) => l.label === "desc"));
    if (r === n && a === e.getAttribute("desc"))
      return [];
    const s = L(e, { name: r, desc: a }), c = {
      actions: [],
      title: o(t, { name: r })
    };
    return c.actions.push({
      old: { element: e },
      new: { element: s }
    }), c.actions.push(...Mt(e, n, r)), c.actions.length ? [c] : [];
  };
}
function Xi(e, t) {
  return (i) => {
    const r = {};
    if (Wa(r, e, i), Object.keys(r).length == 0)
      return [];
    Ua(e, r);
    const n = f(i.find((s) => s.label === "name")), a = {
      actions: [],
      title: o(t, { name: n })
    };
    return a.actions.push(qa(e, r)), a.actions.push(
      ...Mt(e, e.getAttribute("name"), n)
    ), a.actions.length ? [a] : [];
  };
}
function Wa(e, t, i) {
  const r = f(i.find((a) => a.label === "name")), n = f(i.find((a) => a.label === "desc"));
  r !== t.getAttribute("name") && (e.name = r), n !== t.getAttribute("desc") && (e.desc = n);
}
function Ua(e, t) {
  const i = Object.keys(t);
  return Array.from(e.attributes).filter((r) => !i.includes(r.name)).forEach((r) => {
    t[r.name] = r.value;
  }), t;
}
function Qi(e, t) {
  return [
    w`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${o("bay.wizard.nameHelper")}"
      required
      validationMessage="${o("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${o("bay.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function ja(e) {
  return (t) => {
    const i = f(t.find((s) => s.label === "name")), r = f(t.find((s) => s.label === "desc")), n = D(e.ownerDocument, "Bay", {
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
function Ka(e) {
  return [
    {
      title: o("bay.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: o("add"),
        action: ja(e)
      },
      content: Qi("", "")
    }
  ];
}
function Za(e) {
  return [
    {
      title: o("bay.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: o("save"),
        action: Ga(
          e,
          "bay.action.updateBay"
        )
      },
      content: Qi(
        e.getAttribute("name"),
        e.getAttribute("desc")
      )
    }
  ];
}
const Lt = {
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
function Xa(e) {
  if (!e) return null;
  const [t, i, r, n, a] = [
    "lnInst",
    "lnClass",
    "iedName",
    "ldInst",
    "prefix"
  ].map((m) => e?.getAttribute(m)), s = [`IED[name="${r}"]`, "IED"], c = ["AccessPoint > Server"], l = [
    `LDevice[inst="${n}"] > LN[inst="${t}"][lnClass="${i}"]`
  ], d = a && a !== "" ? [`[prefix="${a}"]`] : ['[prefix=""]', ":not(prefix)"];
  return e.ownerDocument.querySelector(
    G(
      s,
      [" > "],
      c,
      [" > "],
      l,
      d
    ).map((m) => m.join("")).join(",")
  );
}
function Yi(e) {
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
function Qa(e) {
  const t = e.querySelector(
    'DOI[name="SwTyp"] > DAI[name="stVal"]'
  );
  return t ? t.querySelector("Val")?.innerHTML.trim() : Yi(e);
}
function Ya(e) {
  return Array.from(e.querySelectorAll("Terminal")).some(
    (t) => t.getAttribute("cNodeName") === "grounded"
  );
}
function Ja(e) {
  const t = e.querySelector('LNode[lnClass="XSWI"]'), i = Xa(t);
  let r;
  return i ? r = Qa(i) : t && (r = Yi(t)), r ? ["Earthing Switch", "High Speed Earthing Switch"].includes(r) : !1;
}
function es(e) {
  return e.getAttribute("type") === "DIS" && (Ya(e) || Ja(e)) ? "ERS" : e.getAttribute("type") ?? "";
}
function ts(e) {
  return Lt[es(e)] ?? o("conductingequipment.unknownType");
}
function is(e, t) {
  return e === "create" ? p`<mwc-select
        style="--mdc-menu-max-height: 196px;"
        required
        label="type"
        helper="${o("conductingequipment.wizard.typeHelper")}"
        validationMessage="${o("textfield.required")}"
      >
        ${Object.keys(Lt).map(
    (i) => p`<mwc-list-item value="${i}">${Lt[i]}</mwc-list-item>`
  )}
      </mwc-select>` : p`<mwc-select
        label="type"
        helper="${o("conductingequipment.wizard.typeHelper")}"
        validationMessage="${o("textfield.required")}"
        disabled
      >
        <mwc-list-item selected value="0">${t}</mwc-list-item>
      </mwc-select>`;
}
function Ji(e, t, i, r, n) {
  return [
    is(i, r),
    p`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${o("conductingequipment.wizard.nameHelper")}"
      required
      validationMessage="${o("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${n}
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${o("conductingequipment.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function rs(e) {
  return (t) => {
    const i = f(t.find((E) => E.label === "name")), r = f(t.find((E) => E.label === "desc")), n = f(t.find((E) => E.label === "type")), a = n === "ERS" ? "DIS" : n, s = D(e.ownerDocument, "ConductingEquipment", {
      name: i,
      type: a,
      desc: r
    });
    if (n !== "ERS") return [{ new: { parent: e, element: s } }];
    const c = e.closest("VoltageLevel")?.querySelector('ConnectivityNode[name="grounded"]'), l = c ? c.closest("Substation")?.getAttribute("name") ?? null : e.closest("Substation")?.getAttribute("name") ?? null, d = c ? c.closest("VoltageLevel")?.getAttribute("name") ?? null : e.closest("VoltageLevel")?.getAttribute("name") ?? null, m = c ? c.closest("Bay")?.getAttribute("name") ?? null : e.closest("Bay")?.getAttribute("name") ?? null, h = m && d && l ? l + "/" + d + "/" + m + "/grounded" : null;
    s.appendChild(
      D(e.ownerDocument, "Terminal", {
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
    if (c) return [b];
    const y = D(
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
function er(e, t) {
  return Array.from(e.querySelectorAll("ConductingEquipment")).filter(ie).map((i) => i.getAttribute("name") ?? "").filter((i) => t && i !== t);
}
function ns(e) {
  const t = er(e);
  return [
    {
      title: o("conductingequipment.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: o("add"),
        action: rs(e)
      },
      content: Ji(
        "",
        "",
        "create",
        "",
        t
      )
    }
  ];
}
function as(e) {
  const t = er(
    e.parentNode,
    e.getAttribute("name")
  );
  return [
    {
      title: o("conductingequipment.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: o("save"),
        action: Zi(e)
      },
      content: Ji(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        "edit",
        ts(e),
        t
      )
    }
  ];
}
function ss(e, t, i) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${o("connectivitynode.wizard.nameHelper")}"
      required
      validationMessage="${o("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${i}
      readonly
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="pathName"
      .maybeValue=${t}
      helper="${o("connectivitynode.wizard.pathNameHelper")}"
      required
      validationMessage="${o("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function os(e) {
  const t = Array.from(
    e.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(ie).map((i) => i.getAttribute("name") ?? "").filter((i) => i !== e.getAttribute("name"));
  return [
    {
      title: o("connectivitynode.wizard.title.edit"),
      element: e,
      content: ss(
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
const pi = /* @__PURE__ */ new WeakMap(), mi = 2147483647, cs = lt((...e) => (t) => {
  let i = pi.get(t);
  i === void 0 && (i = {
    lastRenderedIndex: mi,
    values: []
  }, pi.set(t, i));
  const r = i.values;
  let n = r.length;
  i.values = e;
  for (let a = 0; a < e.length && !(a > i.lastRenderedIndex); a++) {
    const s = e[a];
    if (Ni(s) || typeof s.then != "function") {
      t.setValue(s), i.lastRenderedIndex = a;
      break;
    }
    a < n && s === r[a] || (i.lastRenderedIndex = mi, n = 0, Promise.resolve(s).then((c) => {
      const l = i.values.indexOf(s);
      l > -1 && l < i.lastRenderedIndex && (i.lastRenderedIndex = l, t.setValue(c), t.commit());
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
var re = {
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
Y.set(re.BACKSPACE, I.BACKSPACE);
Y.set(re.ENTER, I.ENTER);
Y.set(re.SPACEBAR, I.SPACEBAR);
Y.set(re.PAGE_UP, I.PAGE_UP);
Y.set(re.PAGE_DOWN, I.PAGE_DOWN);
Y.set(re.END, I.END);
Y.set(re.HOME, I.HOME);
Y.set(re.ARROW_LEFT, I.ARROW_LEFT);
Y.set(re.ARROW_UP, I.ARROW_UP);
Y.set(re.ARROW_RIGHT, I.ARROW_RIGHT);
Y.set(re.ARROW_DOWN, I.ARROW_DOWN);
Y.set(re.DELETE, I.DELETE);
Y.set(re.ESCAPE, I.ESCAPE);
Y.set(re.TAB, I.TAB);
var De = /* @__PURE__ */ new Set();
De.add(I.PAGE_UP);
De.add(I.PAGE_DOWN);
De.add(I.END);
De.add(I.HOME);
De.add(I.ARROW_LEFT);
De.add(I.ARROW_UP);
De.add(I.ARROW_RIGHT);
De.add(I.ARROW_DOWN);
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
var xe, he, P = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
xe = {}, xe["" + P.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", xe["" + P.LIST_ITEM_CLASS] = "mdc-list-item", xe["" + P.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", xe["" + P.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", xe["" + P.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", xe["" + P.ROOT] = "mdc-list";
var Oe = (he = {}, he["" + P.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", he["" + P.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", he["" + P.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", he["" + P.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", he["" + P.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", he["" + P.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", he["" + P.ROOT] = "mdc-deprecated-list", he), at = {
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
    .` + P.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + P.LIST_ITEM_CLASS + ` a,
    .` + Oe[P.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Oe[P.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + P.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + P.LIST_ITEM_CLASS + ` a,
    .` + P.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + P.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Oe[P.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Oe[P.LIST_ITEM_CLASS] + ` a,
    .` + Oe[P.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Oe[P.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
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
const zt = (e, t) => e - t, ls = (e, t) => {
  const i = Array.from(e), r = Array.from(t), n = { added: [], removed: [] }, a = i.sort(zt), s = r.sort(zt);
  let c = 0, l = 0;
  for (; c < a.length || l < s.length; ) {
    const d = a[c], m = s[l];
    if (d === m) {
      c++, l++;
      continue;
    }
    if (d !== void 0 && (m === void 0 || d < m)) {
      n.removed.push(d), c++;
      continue;
    }
    if (m !== void 0 && (d === void 0 || m < d)) {
      n.added.push(m), l++;
      continue;
    }
  }
  return n;
}, ds = ["input", "button", "textarea", "select"];
function Ue(e) {
  return e instanceof Set;
}
const At = (e) => {
  const t = e === te.UNSET_INDEX ? /* @__PURE__ */ new Set() : e;
  return Ue(t) ? new Set(t) : /* @__PURE__ */ new Set([t]);
};
class qt extends Li {
  constructor(t) {
    super(Object.assign(Object.assign({}, qt.defaultAdapter), t)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = te.UNSET_INDEX, this.focusedItemIndex_ = te.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return at;
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
      if (!Ue(i)) {
        const r = i === te.UNSET_INDEX;
        this.selectedIndex_ = r ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
    } else if (Ue(i))
      if (i.size) {
        const r = Array.from(i).sort(zt);
        this.selectedIndex_ = r[0];
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
  handleKeydown(t, i, r) {
    const n = we(t) === "ArrowLeft", a = we(t) === "ArrowUp", s = we(t) === "ArrowRight", c = we(t) === "ArrowDown", l = we(t) === "Home", d = we(t) === "End", m = we(t) === "Enter", h = we(t) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      a || d ? (t.preventDefault(), this.focusLastElement()) : (c || l) && (t.preventDefault(), this.focusFirstElement());
      return;
    }
    let b = this.adapter.getFocusedElementIndex();
    if (b === -1 && (b = r, b < 0))
      return;
    let y;
    if (this.isVertical_ && c || !this.isVertical_ && s)
      this.preventDefaultEvent(t), y = this.focusNextElement(b);
    else if (this.isVertical_ && a || !this.isVertical_ && n)
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
  handleSingleSelection(t, i, r) {
    t !== te.UNSET_INDEX && (this.setSelectedIndexOnAction_(t, i, r), this.setTabindexAtIndex_(t), this.focusedItemIndex_ = t);
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
    ds.indexOf(r) === -1 && t.preventDefault();
  }
  setSingleSelectionAtIndex_(t, i = !0) {
    this.selectedIndex_ !== t && (this.selectedIndex_ !== te.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), i && this.adapter.setSelectedStateForElementIndex(t, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(t, !0), this.setAriaForSingleSelectionAtIndex_(t), this.selectedIndex_ = t, this.adapter.notifySelected(t));
  }
  setMultiSelectionAtIndex_(t, i = !0) {
    const r = At(this.selectedIndex_), n = ls(r, t);
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
    this.selectedIndex_ === te.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(t, at.ARIA_CURRENT));
    const i = this.ariaCurrentAttrValue_ !== null, r = i ? at.ARIA_CURRENT : at.ARIA_SELECTED;
    this.selectedIndex_ !== te.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, r, "false");
    const n = i ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(t, r, n);
  }
  setTabindexAtIndex_(t) {
    this.focusedItemIndex_ === te.UNSET_INDEX && t !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== t && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(t, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let t = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== te.UNSET_INDEX ? t = this.selectedIndex_ : Ue(this.selectedIndex_) && this.selectedIndex_.size > 0 && (t = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(t);
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
  setSelectedIndexOnAction_(t, i, r) {
    if (this.adapter.getDisabledStateForElementIndex(t))
      return;
    let n = t;
    this.isMulti_ && (n = /* @__PURE__ */ new Set([t])), this.isIndexValid_(n) && (this.isMulti_ ? this.toggleMultiAtIndex(t, r, i) : i || r ? this.setSingleSelectionAtIndex_(t, i) : this.selectedIndex_ === t && this.setSingleSelectionAtIndex_(te.UNSET_INDEX), i && this.adapter.notifyAction(t));
  }
  toggleMultiAtIndex(t, i, r = !0) {
    let n = !1;
    i === void 0 ? n = !this.adapter.getSelectedStateForElementIndex(t) : n = i;
    const a = At(this.selectedIndex_);
    n ? a.add(t) : a.delete(t), this.setMultiSelectionAtIndex_(a, r);
  }
}
function us(e, t = 50) {
  let i;
  return function(r = !0) {
    clearTimeout(i), i = setTimeout(() => {
      e(r);
    }, t);
  };
}
const st = (e) => e.hasAttribute("mwc-list-item");
function ps() {
  const e = this.itemsReadyResolver;
  this.itemsReady = new Promise((t) => this.itemsReadyResolver = t), e();
}
class ne extends Vt {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = qt, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const t = us(this.layout.bind(this));
    this.debouncedLayout = (i = !0) => {
      ps.call(this), t(i);
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
    for (const s of i)
      st(s) && (r.push(s), s._managingList = this), s.hasAttribute("divider") && !s.hasAttribute("role") && s.setAttribute("role", "separator");
    this.items_ = r;
    const n = /* @__PURE__ */ new Set();
    if (this.items_.forEach((s, c) => {
      this.itemRoles ? s.setAttribute("role", this.itemRoles) : s.removeAttribute("role"), s.selected && n.add(c);
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
    const t = this.index;
    if (!Ue(t))
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
    return p`
      <!-- @ts-ignore -->
      <ul
          tabindex=${r}
          role="${fe(t)}"
          aria-label="${fe(i)}"
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
      const i = this.getIndexOfTarget(t), r = t.target, n = st(r);
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
      if (fn(n) && st(n) && (a = i.indexOf(n)), a !== -1)
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
      isFocusInsideList: () => gn(this),
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
    const t = $i();
    if (!t.length)
      return -1;
    for (let i = t.length - 1; i >= 0; i--) {
      const r = t[i];
      if (st(r))
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
v([
  g({ type: String })
], ne.prototype, "emptyMessage", void 0);
v([
  M(".mdc-deprecated-list")
], ne.prototype, "mdcRoot", void 0);
v([
  Si("", !0, "*")
], ne.prototype, "assignedElements", void 0);
v([
  Si("", !0, '[tabindex="0"]')
], ne.prototype, "tabbableElements", void 0);
v([
  g({ type: Boolean }),
  ke(function(e) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(e);
  })
], ne.prototype, "activatable", void 0);
v([
  g({ type: Boolean }),
  ke(function(e, t) {
    this.mdcFoundation && this.mdcFoundation.setMulti(e), t !== void 0 && this.layout();
  })
], ne.prototype, "multi", void 0);
v([
  g({ type: Boolean }),
  ke(function(e) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(e);
  })
], ne.prototype, "wrapFocus", void 0);
v([
  g({ type: String }),
  ke(function(e, t) {
    t !== void 0 && this.updateItems();
  })
], ne.prototype, "itemRoles", void 0);
v([
  g({ type: String })
], ne.prototype, "innerRole", void 0);
v([
  g({ type: String })
], ne.prototype, "innerAriaLabel", void 0);
v([
  g({ type: Boolean })
], ne.prototype, "rootTabbable", void 0);
v([
  g({ type: Boolean, reflect: !0 }),
  ke(function(e) {
    var t, i;
    if (e) {
      const r = (i = (t = this.tabbableElements) === null || t === void 0 ? void 0 : t[0]) !== null && i !== void 0 ? i : null;
      this.previousTabindex = r, r && r.setAttribute("tabindex", "-1");
    } else !e && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], ne.prototype, "noninteractive", void 0);
var ms = Object.defineProperty, hs = Object.getOwnPropertyDescriptor, Pe = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? hs(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (n = (r ? s(t, i, n) : s(n)) || n);
  return r && n && ms(t, i, n), n;
};
function Tt(e) {
  return !e.closest("filtered-list") || !e.parentElement || e.parentElement instanceof ue ? e : Tt(e.parentElement);
}
function fs(e, t) {
  const i = e.innerText + `
`, r = Array.from(e.children).map((c) => c.innerText).join(`
`), n = e.value, a = (i + r + n).toUpperCase(), s = t.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  s.length === 1 && s[0] === "" || s.every((c) => new RegExp(
    `*${c}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(a)) ? Tt(e).classList.remove("hidden") : Tt(e).classList.add("hidden");
}
let ue = class extends ne {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((e) => e instanceof qe);
  }
  get isAllSelected() {
    return this.items.filter((e) => !e.disabled).filter((e) => e instanceof qe).every((e) => e.selected);
  }
  get isSomeSelected() {
    return this.items.filter((e) => !e.disabled).filter((e) => e instanceof qe).some((e) => e.selected);
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
      (e) => fs(e, this.searchField.value)
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
        <abbr title="${this.searchFieldLabel ?? o("filter")}"
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
ue.styles = pe`
    ${Wr(Kr.styles)}

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
Pe([
  g({ type: String })
], ue.prototype, "searchFieldLabel", 2);
Pe([
  g({ type: Boolean })
], ue.prototype, "disableCheckAll", 2);
Pe([
  z()
], ue.prototype, "existCheckListItem", 1);
Pe([
  z()
], ue.prototype, "isAllSelected", 1);
Pe([
  z()
], ue.prototype, "isSomeSelected", 1);
Pe([
  M("mwc-textfield")
], ue.prototype, "searchField", 2);
ue = Pe([
  le("filtered-list")
], ue);
var bs = Object.defineProperty, gs = Object.getOwnPropertyDescriptor, Ae = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? gs(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (n = (r ? s(t, i, n) : s(n)) || n);
  return r && n && bs(t, i, n), n;
};
const ys = p`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${o("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let ce = class extends Ie {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (e) => ({
      path: e,
      header: p`<h2>${"/" + e.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return Gi(this.selection);
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
        for (const s of r) n = n[s];
        const a = Object.keys(n).map((s) => r.concat(s));
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
    return p`<filtered-list
      @selected=${(i) => this.select(i, e)}
      searchFieldLabel="${this.getTitle(e)}"
    >
      ${t.map(
      (i) => p`<mwc-list-item
            value="${i}"
            ?activated=${this.getPaths(e.length).map((r) => JSON.stringify(r)).includes(JSON.stringify(e.concat(i)))}
            >${this.getDisplayString(i, e)}</mwc-list-item
          >`
    )}
    </filtered-list>`;
  }
  async renderColumn(e) {
    const i = this.getPaths(e).map((n) => this.read(n)), r = [];
    for await (const { header: n, entries: a, path: s } of i)
      (n || a.length > 0) && r.push(
        p`${fe(n)} ${this.renderDirectory(s, a)}`
      );
    return r.length === 0 ? p`` : p`<div class="column">${r}</div>`;
  }
  render() {
    const e = new Array(this.depth).fill(0).map((t, i) => this.renderColumn(i));
    return this.loaded = Promise.allSettled(e).then(), p`<div class="pane">
      ${e.map((t) => cs(t, ys))}
    </div>`;
  }
};
ce.styles = pe`
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
Ae([
  g({ type: Object })
], ce.prototype, "selection", 2);
Ae([
  g({ type: Boolean })
], ce.prototype, "multi", 2);
Ae([
  g({ type: Number })
], ce.prototype, "depth", 1);
Ae([
  g({ type: Array })
], ce.prototype, "paths", 1);
Ae([
  g({ type: Array })
], ce.prototype, "path", 1);
Ae([
  g({ attribute: !1 })
], ce.prototype, "read", 2);
Ae([
  g({ attribute: !1 })
], ce.prototype, "loaded", 2);
Ae([
  M("div")
], ce.prototype, "container", 2);
ce = Ae([
  le("finder-list")
], ce);
function vs(e) {
  return e.startsWith("IED:") ? e.replace(/^.*:/, "").trim() : e.startsWith("LN0:") ? "LLN0" : e.replace(/^.*>/, "").trim();
}
function As(e, t) {
  return async (i) => {
    const [r, n] = i[i.length - 1]?.split(": ", 2), a = be(e, r, n);
    return a ? {
      path: i,
      header: void 0,
      entries: t(a).map(
        (s) => `${s.tagName}: ${N(s)}`
      )
    } : { path: i, header: p`<p>${o("error")}</p>`, entries: [] };
  };
}
function tr(e) {
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
function Ss(e) {
  return p`<finder-list
    multi
    .paths=${[["Server: " + N(e)]]}
    .read=${As(e.ownerDocument, tr)}
    .getDisplayString=${vs}
    .getTitle=${(t) => t[t.length - 1]}
  ></finder-list>`;
}
function ws(e, t) {
  const [i, r] = t[t.length - 1].split(": "), n = be(e.ownerDocument, i, r);
  if (!n || tr(n).length > 0) return;
  const a = t.find((T) => T.startsWith("LN"));
  if (!a) return;
  const [s, c] = a.split(": "), l = be(e.ownerDocument, s, c);
  if (!l) return;
  const d = l.closest("LDevice")?.getAttribute("inst"), m = l.getAttribute("prefix") ?? "", h = l.getAttribute("lnClass"), b = l.getAttribute("inst") && l.getAttribute("inst") !== "" ? l.getAttribute("inst") : null;
  let y = "", x = "", E = "";
  for (const T of t) {
    const [C, J] = T.split(": ");
    if (!["DO", "DA", "SDO", "BDA"].includes(C)) continue;
    const me = be(e.ownerDocument, C, J);
    if (!me) return;
    const Se = me.getAttribute("name");
    C === "DO" && (y = Se), C === "SDO" && (y = y + "." + Se), C === "DA" && (x = Se, E = me.getAttribute("fc") ?? ""), C === "BDA" && (x = x + "." + Se);
  }
  if (!(!d || !h || !y || !x || !E))
    return D(e.ownerDocument, "FCDA", {
      ldInst: d,
      prefix: m,
      lnClass: h,
      lnInst: b,
      doName: y,
      daName: x,
      fc: E
    });
}
function xs(e) {
  return (t, i) => {
    const n = i.shadowRoot.querySelector("finder-list")?.paths ?? [], a = [];
    for (const s of n) {
      const c = ws(e, s);
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
function ir(e) {
  const t = e.closest("Server");
  return [
    {
      title: o("wizard.title.add", { tagName: "FCDA" }),
      primary: {
        label: "add",
        icon: "add",
        action: xs(e)
      },
      content: [t ? Ss(t) : p``]
    }
  ];
}
const ge = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  asciName: "[A-Za-z][0-9,A-Z,a-z_]*",
  abstractDataAttributeName: "((T)|(Test)|(Check)|(SIUnit)|(Oper)|(SBO)|(SBOw)|(Cancel)|[a-z][0-9A-Za-z]*)"
}, Ht = {
  cbName: 32,
  abstracDaName: 60
};
function St(e, t) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { ...e, ...t?.detail }
  });
}
function Cs(e) {
  return (t, i, r) => {
    const n = r.items.filter((c) => c.selected).map((c) => c.value).map((c) => be(e.ownerDocument, "LNodeType", c)).filter((c) => c !== null), a = Ra(e);
    return n.map((c) => {
      const l = c.getAttribute("lnClass");
      if (!l) return null;
      const d = a(l);
      if (!d) {
        i.dispatchEvent(
          St({
            kind: "error",
            title: o("lnode.log.title", { lnClass: l }),
            message: o("lnode.log.nonuniquelninst")
          })
        );
        return;
      }
      const m = B(e, "LNode").some(
        (x) => x.getAttribute("lnClass") === "LLN0"
      );
      if (l === "LLN0" && m) {
        i.dispatchEvent(
          St({
            kind: "error",
            title: o("lnode.log.title", { lnClass: l }),
            message: o("lnode.log.uniqueln0", { lnClass: l })
          })
        );
        return;
      }
      const h = B(e, "LNode").some(
        (x) => x.getAttribute("lnClass") === "LPHD"
      );
      if (l === "LPHD" && h) {
        i.dispatchEvent(
          St({
            kind: "error",
            title: o("lnode.log.title", { lnClass: l }),
            message: o("lnode.log.uniqueln0", { lnClass: l })
          })
        );
        return;
      }
      const b = l === "LLN0" ? "" : d, y = D(e.ownerDocument, "LNode", {
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
function Ns(e) {
  return (t) => {
    t.dispatchEvent(de()), t.dispatchEvent(de(ar(e)));
  };
}
function rr(e) {
  const t = Array.from(
    e.ownerDocument.querySelectorAll("LNodeType")
  );
  return [
    {
      title: o("lnode.wizard.title.selectLNodeTypes"),
      menuActions: [
        {
          icon: "",
          label: o("lnode.wizard.reference"),
          action: Ns(e)
        }
      ],
      primary: {
        icon: "save",
        label: o("save"),
        action: Cs(e)
      },
      content: [
        w`<filtered-list multi
          >${t.map((i) => {
          const r = i.getAttribute("lnClass") === "LLN0" && B(e, "LNode").some(
            (n) => n.getAttribute("lnClass") === "LLN0"
          ) || i.getAttribute("lnClass") === "LPHD" && B(e, "LNode").some(
            (n) => n.getAttribute("lnClass") === "LPHD"
          );
          return w`<mwc-check-list-item
              twoline
              value="${N(i)}"
              ?disabled=${r}
              ><span>${i.getAttribute("lnClass")}</span
              ><span slot="secondary"
                >${r ? o("lnode.wizard.uniquewarning") : N(i)}</span
              ></mwc-check-list-item
            >`;
        })}</filtered-list
        >`
      ]
    }
  ];
}
const Es = {
  CBR: ["CSWI", "CILO", "XCBR"],
  DIS: ["CSWI", "CILO", "XSWI"],
  VTR: ["TVTR"],
  CTR: ["TCTR"],
  Bay: ["LLN0"],
  VoltageLevel: ["LLN0"],
  Substation: ["LLN0"]
};
function nr(e, t) {
  return e.disabled !== t.disabled ? t.disabled ? -1 : 1 : e.preferred !== t.preferred ? e.preferred ? -1 : 1 : e.selected !== t.selected ? e.selected ? -1 : 1 : 0;
}
const Is = "Client LN";
function hi(e, t) {
  return Array.from(e.getElementsByTagName("LNode")).filter((i) => !i.closest("Private")).filter((i) => Bt(t, i))[0] ?? null;
}
function Bt(e, t) {
  return (t.getAttribute("iedName") ?? "") === (e.closest("IED")?.getAttribute("name") ?? "") && (t.getAttribute("ldInst") ?? "") === (e.closest("LDevice")?.getAttribute("inst") ?? "") && (t.getAttribute("prefix") ?? "") === (e.getAttribute("prefix") ?? "") && (t.getAttribute("lnClass") ?? "") === (e.getAttribute("lnClass") ?? "") && (t.getAttribute("lnInst") ?? "") === (e.getAttribute("inst") ?? "");
}
function ks(e, t) {
  const i = D(e.ownerDocument, "LNode", {
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
function Ds(e, t) {
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
function Ls(e, t) {
  return t.some((i) => Bt(e, i));
}
function zs(e) {
  return (t, i, r) => {
    const n = r.items.filter((l) => l.selected).map((l) => l.value).map((l) => {
      const d = be(e.ownerDocument, "LN0", l);
      return d || be(e.ownerDocument, "LN", l);
    }).filter((l) => l !== null), a = B(e, "LNode").filter(
      ie
    ), s = a.filter((l) => !$s(n, l)).map((l) => Ds(e, l)), c = n.filter((l) => !Ls(l, a)).map((l) => ks(e, l));
    return s.concat(c);
  };
}
function Ts(e, t) {
  return e.parentElement?.parentElement?.nextElementSibling?.querySelector(
    t
  ) ?? null;
}
function _s(e, t) {
  if (!(e.target instanceof ne)) return;
  const i = Ts(e.target, "#lnList");
  if (i === null) return;
  const r = t.ownerDocument, s = e.target.selected.flatMap(
    (c) => Array.from(
      r.querySelectorAll(
        `:root > IED[name="${c.value}"] > AccessPoint > LN,:root > IED[name="${c.value}"] > AccessPoint > Server > LDevice > LN,:root > IED[name="${c.value}"] > AccessPoint > Server > LDevice > LN0`
      )
    ).filter((l) => !l.closest("Private"))
  ).filter((c) => c !== null).map((c) => {
    const l = Es[t.getAttribute("type") ? t.getAttribute("type") ?? "" : t.tagName ?? ""]?.includes(c.getAttribute("lnClass") ?? "") ?? !1, d = hi(t.ownerDocument, c), m = d?.parentElement === t;
    return {
      selected: m,
      disabled: d !== null && !m,
      prefered: l,
      element: c
    };
  }).sort(nr).map((c) => w`<mwc-check-list-item
      ?selected=${c.selected}
      ?disabled=${c.disabled}
      value="${N(c.element)}"
      twoline
      ><span
        >${c.element.getAttribute("prefix") ?? ""}${c.element.getAttribute("lnClass")}${c.element.getAttribute(
    "inst"
  ) ?? ""}
        ${c.disabled ? w` <mwc-icon style="--mdc-icon-size: 1em;"
                >account_tree</mwc-icon
              >
              ${_n(hi(r, c.element))}` : ""}</span
      ><span slot="secondary"
        >${c.element.closest("IED")?.getAttribute("name") ?? ""} |
        ${c.element.closest("LDevice") ? c.element.closest("LDevice")?.getAttribute("inst") : Is}</span
      ></mwc-check-list-item
    >`);
  xi(w`${s}`, i);
}
function Vs(e) {
  const t = e.ownerDocument;
  return t.querySelectorAll(":root > IED").length > 0 ? w`<filtered-list
      disableCheckAll
      multi
      id="iedList"
      @selected=${(i) => _s(i, e)}
      >${Array.from(t.querySelectorAll(":root > IED")).map((i) => i.getAttribute("name")).map((i) => ({
    selected: Array.from(e.children).filter((r) => !r.closest("Private")).filter(
      (r) => r.tagName === "LNode" && r.getAttribute("iedName") === i
    ).length > 0,
    iedName: i
  })).sort(nr).map(
    (i) => w`<mwc-check-list-item
              value="${i.iedName ?? ""}"
              ?selected=${i.selected}
              >${i.iedName}</mwc-check-list-item
            >`
  )}</filtered-list
    >` : w`<mwc-list-item noninteractive graphic="icon">
      <span>${o("lnode.wizard.placeholder")}</span>
      <mwc-icon slot="graphic">info</mwc-icon>
    </mwc-list-item>`;
}
function Ps(e) {
  return (t) => {
    t.dispatchEvent(de()), t.dispatchEvent(de(rr(e)));
  };
}
function ar(e) {
  return [
    {
      title: o("lnode.wizard.title.selectIEDs"),
      menuActions: [
        {
          icon: "",
          label: o("lnode.wizard.instance"),
          action: Ps(e)
        }
      ],
      content: [Vs(e)]
    },
    {
      initial: Array.from(e.children).some(
        (t) => t.tagName === "LNode"
      ),
      title: o("lnode.wizard.title.selectLNs"),
      primary: {
        icon: "save",
        label: o("save"),
        action: zs(e)
      },
      content: [w`<filtered-list multi id="lnList"></filtered-list>`]
    }
  ];
}
function Rs(e) {
  return e.tagName === "Function" || e.tagName === "SubFunction" || e.tagName === "EqFunction" || e.tagName === "EqSubFunction" ? rr(e) : ar(e);
}
function Os(e) {
  const t = e.iedName !== "None";
  return [
    w`<wizard-textfield
      label="iedName"
      .maybeValue=${e.iedName}
      helper="${o("scl.iedName")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="ldInst"
      .maybeValue=${e.ldInst}
      helper="${o("scl.ldInst")}"
      helperPersistent
      nullable
      disabled
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="prefix"
      .maybeValue=${e.prefix}
      helper="${o("scl.prefix")}"
      pattern="${ge.asciName}"
      maxLength="11"
      helperPersistent
      nullable
      ?disabled=${t}
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="lnClass"
      .maybeValue=${e.lnClass}
      helper="${o("scl.lnClass")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="lnInst"
      .maybeValue=${e.lnInst}
      helper="${o("scl.lnInst")}"
      helperPersistent
      type="number"
      min="1"
      max="99"
      .reservedValues=${e.reservedLnInst}
      ?disabled=${t}
    ></wizard-textfield>`
  ];
}
function Fs(e) {
  return (t) => {
    const i = {}, r = ["iedName", "ldInst", "prefix", "lnClass", "lnInst"];
    r.forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    let n = null;
    if (r.some((a) => i[a] !== e.getAttribute(a))) {
      const a = L(e, i);
      return n = {
        old: { element: e },
        new: { element: a }
      }, [n];
    }
    return [];
  };
}
function Ms(e) {
  const [t, i, r, n, a] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((c) => e.getAttribute(c)), s = B(
    e.parentElement,
    "LNode"
  ).filter(
    (c) => c !== e && c.getAttribute("lnClass") === e.getAttribute("lnClass")
  ).map((c) => c.getAttribute("lnInst"));
  return [
    {
      title: o("wizard.title.edit", { tagName: "LNode" }),
      element: e,
      primary: {
        label: o("save"),
        icon: "save",
        action: Fs(e)
      },
      content: [
        ...Os({
          iedName: t,
          ldInst: i,
          prefix: r,
          lnClass: n,
          lnInst: a,
          reservedLnInst: s
        })
      ]
    }
  ];
}
function qs(e) {
  return Object.entries(e).map(
    ([t, i]) => p`<wizard-checkbox
        label="${t}"
        .maybeValue=${i}
        nullable
        helper="${o(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function Hs(e) {
  return (t) => {
    const i = f(t.find((h) => h.label === "seqNum")), r = f(t.find((h) => h.label === "timeStamp")), n = f(t.find((h) => h.label === "dataSet")), a = f(t.find((h) => h.label === "reasonCode")), s = f(t.find((h) => h.label === "dataRef")), c = f(t.find((h) => h.label === "entryID")), l = f(t.find((h) => h.label === "configRef")), d = f(t.find((h) => h.label === "bufOvfl"));
    if (i === e.getAttribute("seqNum") && r === e.getAttribute("timeStamp") && n === e.getAttribute("dataSet") && a === e.getAttribute("reasonCode") && s === e.getAttribute("dataRef") && c === e.getAttribute("entryID") && l === e.getAttribute("configRef") && d === e.getAttribute("bufOvfl"))
      return [];
    const m = L(e, {
      seqNum: i,
      timeStamp: r,
      dataSet: n,
      reasonCode: a,
      dataRef: s,
      entryID: c,
      configRef: l,
      bufOvfl: d
    });
    return [{ old: { element: e }, new: { element: m } }];
  };
}
function Bs(e) {
  const [
    t,
    i,
    r,
    n,
    a,
    s,
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
  ].map((d) => e.getAttribute(d));
  return [
    {
      title: o("wizard.title.edit", { tagName: e.tagName }),
      primary: {
        icon: "save",
        label: o("save"),
        action: Hs(e)
      },
      content: qs({
        seqNum: t,
        timeStamp: i,
        dataSet: r,
        reasonCode: n,
        dataRef: a,
        entryID: s,
        configRef: c,
        bufOvfl: l
      })
    }
  ];
}
let Gs = 1, sr = 1, or = 1;
function Ws(e, t) {
  return t.parentElement?.querySelectorAll(
    `LN[lnClass="CSWI"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="CILO"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="XCBR"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="XSWI"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""}`
  ).forEach((i) => {
    e.appendChild(
      D(t.ownerDocument, "LNode", {
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
function cr(e) {
  return e.parentElement?.querySelector(
    `LN[lnClass="XCBR"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""}`
  ) ? "CBR" : "DIS";
}
function Us(e) {
  return e.getAttribute("prefix") && e.getAttribute("inst") ? e.getAttribute("prefix") + e.getAttribute("inst") : e.getAttribute("inst") && cr(e) === "CBR" ? "QA" + sr++ : "QB" + or++;
}
function js(e, t) {
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
function Ks(e) {
  return Array.from(
    e.querySelectorAll('AccessPoint > Server > LDevice > LN[lnClass="CSWI"]')
  );
}
function Zs(e, t) {
  return e.parentElement ? Ks(e).filter((i) => js(i, t)) : [];
}
function Xs(e, t) {
  const i = Zs(e, t);
  if (sr = 1, or = 1, i.length) {
    const r = D(e.ownerDocument, "Bay", {
      name: "Q" + Gs++,
      desc: "Bay for controller " + e.getAttribute("name")
    });
    return i.map((a) => Ws(
      D(e.ownerDocument, "ConductingEquipment", {
        name: Us(a),
        type: cr(a)
      }),
      a
    )).forEach((a) => r.appendChild(a)), r;
  }
  return null;
}
function Qs(e, t) {
  return (i, r, n) => {
    const a = [], s = n.selected.map(
      (d) => d.value
    ), c = D(e, "VoltageLevel", {
      name: "E1",
      desc: "guessed by OpenSCD",
      nomFreq: "50.0",
      numPhases: "3"
    }), l = D(e, "Voltage", {
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
    }), Array.from(e.querySelectorAll(":root > IED")).sort(Va).map((d) => Xs(d, s)).forEach((d) => {
      d && a.push({ new: { parent: c, element: d } });
    }), a;
  };
}
function Ys(e, t) {
  return [
    {
      title: o("guess.wizard.title"),
      primary: {
        icon: "play_arrow",
        label: o("guess.wizard.primary"),
        action: Qs(e, t)
      },
      content: [
        p`<p>${o("guess.wizard.description")}</p>`,
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
const Js = {
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
}, eo = {
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
}, fi = { en: eo, de: Js };
async function to(e) {
  return Object.keys(fi).includes(e) ? fi[e] : {};
}
nn({ loader: to, empty: (e) => e });
const lr = localStorage.getItem("language") || "en";
console.log("SETTING LANGUAGE TO", lr);
cn(lr);
function dr(e, t, i) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${o("substation.wizard.nameHelper")}"
      required
      validationMessage="${o("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${o("substation.wizard.descHelper")}"
    ></wizard-textfield>`,
    i ? p`<mwc-formfield label="${o("guess.wizard.primary")}">
          <mwc-checkbox></mwc-checkbox>
        </mwc-formfield>` : p``
  ];
}
function io(e) {
  return (t, i) => {
    const r = f(t.find((c) => c.label === "name")), n = f(t.find((c) => c.label === "desc")), a = i.shadowRoot?.querySelector("mwc-checkbox")?.checked;
    e.ownerDocument.createElement("Substation");
    const s = D(e.ownerDocument, "Substation", {
      name: r,
      desc: n
    });
    return a ? [() => Ys(e.ownerDocument, s)] : [{ new: { parent: e, element: s } }];
  };
}
function ro(e) {
  const t = e.ownerDocument.querySelector("Substation") === null && e.tagName === "SCL";
  return [
    {
      title: o("substation.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: o("add"),
        action: io(e)
      },
      content: dr("", "", t)
    }
  ];
}
function no(e) {
  return [
    {
      title: o("substation.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: o("save"),
        action: Xi(
          e,
          "substation.action.updatesubstation"
        )
      },
      content: dr(
        e.getAttribute("name") ?? "",
        e.getAttribute("desc"),
        !1
      )
    }
  ];
}
function ao(e, t, i, r) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${o("terminal.wizard.nameHelper")}"
      required
      validationMessage="${o("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${r}
      readonly
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="connectivityNode"
      .maybeValue=${t}
      helper="${o("terminal.wizard.connectivityNodeHelper")}"
      required
      validationMessage="${o("textfield.required")}"
      readonly
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="cNodeName"
      .maybeValue=${i}
      helper="${o("terminal.wizard.cNodeNameHelper")}"
      required
      validationMessage="${o("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function so(e) {
  const t = Array.from(
    e.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(ie).map((i) => i.getAttribute("name") ?? "").filter((i) => i !== e.getAttribute("name"));
  return [
    {
      title: o("terminal.wizard.title.edit"),
      element: e,
      content: ao(
        e.getAttribute("name"),
        e.getAttribute("connectivityNode"),
        e.getAttribute("cNodeName"),
        t
      )
    }
  ];
}
const ot = {
  nomFreq: "50",
  numPhases: "3",
  Voltage: "110",
  multiplier: "k"
};
function ur(e, t, i, r, n, a) {
  return [
    w`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${o("voltagelevel.wizard.nameHelper")}"
      required
      validationMessage="${o("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${o("voltagelevel.wizard.descHelper")}"
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="nomFreq"
      .maybeValue=${i}
      nullable
      helper="${o("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      required
      validationMessage="${o("textfield.nonempty")}"
      pattern="${Ze.unsigned}"
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="numPhases"
      .maybeValue=${r}
      nullable
      helper="${o("voltagelevel.wizard.numPhaseHelper")}"
      suffix="#"
      required
      validationMessage="${o("textfield.nonempty")}"
      type="number"
      min="1"
      max="255"
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="Voltage"
      .maybeValue=${n}
      nullable
      unit="V"
      .multipliers=${[null, "G", "M", "k", "", "m"]}
      .multiplier=${a}
      helper="${o("voltagelevel.wizard.voltageHelper")}"
      required
      validationMessage="${o("textfield.nonempty")}"
      pattern="${Ze.decimal}"
    ></wizard-textfield>`
  ];
}
function oo(e) {
  return (t) => {
    const i = f(t.find((d) => d.label === "name")), r = f(t.find((d) => d.label === "desc")), n = f(t.find((d) => d.label === "nomFreq")), a = f(t.find((d) => d.label === "numPhases")), s = f(t.find((d) => d.label === "Voltage")), c = Rt(t.find((d) => d.label === "Voltage")), l = D(e.ownerDocument, "VoltageLevel", {
      name: i,
      desc: r,
      nomFreq: n,
      numPhases: a
    });
    if (s !== null) {
      const d = D(e.ownerDocument, "Voltage", {
        unit: "V",
        multiplier: c
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
function co(e) {
  return [
    {
      title: o("voltagelevel.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: o("add"),
        action: oo(e)
      },
      content: ur(
        "",
        "",
        ot.nomFreq,
        ot.numPhases,
        ot.Voltage,
        ot.multiplier
      )
    }
  ];
}
function lo(e, t, i, r) {
  if (e === null) {
    const a = D(r.ownerDocument, "Voltage", {
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
  const n = L(e, { multiplier: i });
  return n.textContent = t, {
    old: { element: e },
    new: { element: n }
  };
}
function uo(e) {
  return (t) => {
    const i = t.find((h) => h.label === "name").value, r = f(t.find((h) => h.label === "desc")), n = f(t.find((h) => h.label === "nomFreq")), a = f(t.find((h) => h.label === "numPhases")), s = f(t.find((h) => h.label === "Voltage")), c = Rt(t.find((h) => h.label === "Voltage"));
    let l, d;
    if (i === e.getAttribute("name") && r === e.getAttribute("desc") && n === e.getAttribute("nomFreq") && a === e.getAttribute("numPhases"))
      l = null;
    else {
      const h = L(e, {
        name: i,
        desc: r,
        nomFreq: n,
        numPhases: a
      });
      l = { old: { element: e }, new: { element: h } };
    }
    s === (e.querySelector("VoltageLevel > Voltage")?.textContent?.trim() ?? null) && c === (e.querySelector("VoltageLevel > Voltage")?.getAttribute("multiplier") ?? null) ? d = null : d = lo(
      e.querySelector("VoltageLevel > Voltage"),
      s,
      c,
      l?.new.element ?? e
    );
    const m = {
      actions: [],
      title: o("voltagelevel.action.updateVoltagelevel", { name: i })
    };
    return l && m.actions.push(l), d && m.actions.push(d), m.actions.push(
      ...Mt(e, e.getAttribute("name"), i)
    ), m.actions.length ? [m] : [];
  };
}
function po(e) {
  return [
    {
      title: o("voltagelevel.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: o("save"),
        action: uo(e)
      },
      content: ur(
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
const pr = "PTR";
function mo(e) {
  return (t) => {
    const i = f(t.find((s) => s.label === "name")), r = f(t.find((s) => s.label === "desc")), n = D(e.ownerDocument, "PowerTransformer", {
      name: i,
      desc: r,
      type: pr
    });
    return [{
      new: {
        parent: e,
        element: n
      }
    }];
  };
}
function mr(e, t, i, r) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${o("powertransformer.wizard.nameHelper")}"
      required
      validationMessage="${o("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${r}
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${o("powertransformer.wizard.descHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${i}
      disabled
      helper="${o("powertransformer.wizard.typeHelper")}"
    ></wizard-textfield>`
  ];
}
function hr(e, t) {
  return Array.from(e.querySelectorAll("PowerTransformer")).filter(ie).map((i) => i.getAttribute("name") ?? "").filter((i) => t && i !== t);
}
function ho(e) {
  const t = hr(e);
  return [
    {
      title: o("powertransformer.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: o("add"),
        action: mo(e)
      },
      content: mr(
        "",
        null,
        pr,
        t
      )
    }
  ];
}
function fo(e) {
  const t = hr(
    e.parentNode,
    e.getAttribute("name")
  );
  return [
    {
      title: o("powertransformer.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: o("save"),
        action: Zi(e)
      },
      content: mr(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        e.getAttribute("type"),
        t
      )
    }
  ];
}
function bo(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${o("subnetwork.wizard.nameHelper")}"
      required
      validationMessage="${o("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${o("subnetwork.wizard.descHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      nullable
      helper="${o("subnetwork.wizard.typeHelper")}"
      pattern="${Ze.normalizedString}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="BitRate"
      .maybeValue=${e.BitRate}
      nullable
      unit="b/s"
      .multipliers=${[null, "M"]}
      .multiplier=${e.multiplier}
      helper="${o("subnetwork.wizard.bitrateHelper")}"
      required
      validationMessage="${o("textfield.nonempty")}"
      pattern="${Ze.decimal}"
    ></wizard-textfield>`
  ];
}
function go(e, t, i, r) {
  if (e === null) {
    const a = D(r.ownerDocument, "BitRate", {
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
  const n = L(e, { multiplier: i });
  return n.textContent = t, {
    old: { element: e },
    new: { element: n }
  };
}
function yo(e) {
  return (t) => {
    const i = t.find((m) => m.label === "name").value, r = f(t.find((m) => m.label === "desc")), n = f(t.find((m) => m.label === "type")), a = f(t.find((m) => m.label === "BitRate")), s = Rt(t.find((m) => m.label === "BitRate"));
    let c, l;
    if (i === e.getAttribute("name") && r === e.getAttribute("desc") && n === e.getAttribute("type"))
      c = null;
    else {
      const m = L(e, { name: i, desc: r, type: n });
      c = { old: { element: e }, new: { element: m } };
    }
    a === (e.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null) && s === (e.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null) ? l = null : l = go(
      e.querySelector("SubNetwork > BitRate"),
      a,
      s,
      c?.new.element ?? e
    );
    const d = [];
    return c && d.push(c), l && d.push(l), d;
  };
}
function vo(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = e.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null, a = e.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null;
  return [
    {
      title: o("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: o("save"),
        action: yo(e)
      },
      content: bo({ name: t, desc: i, type: r, BitRate: n, multiplier: a })
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
function So(e) {
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
function Co(e) {
  if (!e.length) return [];
  const t = [], i = {};
  for (const r of e) {
    const n = r.old.element, a = r.old.parent, s = N(a);
    i[s] || (i[s] = a.cloneNode(!0));
    const c = i[s].querySelector(
      `ExtRef${n.getAttribute("iedName") ? `[iedName="${n.getAttribute("iedName")}"]` : ""}${So(n)}${n.getAttribute("serviceType") ? `[serviceType="${n.getAttribute("serviceType")}"]` : ""}${xo(n)}`
    );
    c && i[s].removeChild(c);
  }
  return Object.entries(i).forEach(([r, n]) => {
    if (n.children.length == 0) {
      const a = e[0].old.parent.ownerDocument, s = be(a, "Inputs", r);
      s && s.parentElement && t.push({
        old: { parent: s.parentElement, element: s }
      });
    }
  }), t;
}
const No = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function Eo(e, t, i, r, n, a, s, c, l) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${o("ied.wizard.nameHelper")}"
      required
      validationMessage="${o("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${l}
      pattern="${No}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${o("ied.wizard.descHelper")}"
      pattern="${ge.normalizedString}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${i || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="manufacturer"
      .maybeValue=${r || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="configVersion"
      .maybeValue=${n || "-"}
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
      .maybeValue=${c || "-"}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function Io(e) {
  return [
    p` <section>
      <h1>${o("ied.wizard.title.references")}</h1>
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
function ko(e) {
  return (e.getAttribute("originalSclVersion") ?? "").concat(e.getAttribute("originalSclRevision") ?? "").concat(e.getAttribute("originalSclRelease") ?? "");
}
function Do(e) {
  return Array.from(e.parentNode.querySelectorAll("IED")).filter(ie).map((t) => t.getAttribute("name") ?? "").filter((t) => t !== e.getAttribute("name"));
}
function $o(e) {
  return (t, i) => {
    i.dispatchEvent(de());
    const r = Ki(e), n = r.filter(
      (l) => l.old.element.tagName === "ExtRef"
    ), a = Co(n), s = e.getAttribute("name") ?? "Unknown", c = {
      actions: [],
      title: o("ied.action.deleteied", { name: s })
    };
    return c.actions.push({
      old: { parent: e.parentElement, element: e }
    }), c.actions.push(...r), c.actions.push(...a), [c];
  };
}
function Lo(e) {
  const t = Ki(e);
  return t.length > 0 ? [
    {
      title: o("ied.wizard.title.delete"),
      content: Io(t),
      primary: {
        icon: "delete",
        label: o("remove"),
        action: $o(e)
      }
    }
  ] : null;
}
function zo(e) {
  function t(i) {
    return (r) => {
      const n = Lo(i);
      n && r.dispatchEvent(Ve(() => n)), r.dispatchEvent(
        Xe({ old: { parent: i.parentElement, element: i } })
      ), r.dispatchEvent(de());
    };
  }
  return [
    {
      title: o("ied.wizard.title.edit"),
      element: e,
      menuActions: [
        {
          icon: "delete",
          label: o("remove"),
          action: t(e)
        }
      ],
      primary: {
        icon: "edit",
        label: o("save"),
        action: Xi(
          e,
          "ied.action.updateied"
        )
      },
      content: Eo(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        e.getAttribute("type"),
        e.getAttribute("manufacturer"),
        e.getAttribute("configVersion"),
        ko(e),
        e.getAttribute("engRight"),
        e.getAttribute("owner"),
        Do(e)
      )
    }
  ];
}
const To = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function _o(e, t, i, r) {
  return [
    t ? p`<wizard-textfield
          label="ldName"
          .maybeValue=${e}
          helper="${o("ldevice.wizard.noNameSupportHelper")}"
          helperPersistent
          readOnly
          disabled
        ></wizard-textfield>` : p`<wizard-textfield
          label="ldName"
          .maybeValue=${e}
          nullable
          helper="${o("ldevice.wizard.nameHelper")}"
          validationMessage="${o("textfield.required")}"
          dialogInitialFocus
          pattern="${To}"
        ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${i}
      nullable
      helper="${o("ldevice.wizard.descHelper")}"
      pattern="${ge.normalizedString}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="ldInst"
      .maybeValue=${r}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function Vo(e) {
  return !!e.closest("IED")?.querySelector("Services > ConfLdName");
}
function Po(e) {
  return (t) => {
    const i = {}, r = ["ldName", "desc"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some((n) => i[n] !== e.getAttribute(n))) {
      const n = L(e, i);
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
function Ro(e) {
  return [
    {
      title: o("ldevice.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: o("save"),
        action: Po(e)
      },
      content: _o(
        e.getAttribute("ldName"),
        !Vo(e),
        e.getAttribute("desc"),
        e.getAttribute("inst")
      )
    }
  ];
}
function Oo(e) {
  return Object.entries(e).map(
    ([t, i]) => p`<wizard-checkbox
        label="${t}"
        .maybeValue=${i}
        nullable
        helper="${o(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function Fo(e) {
  return (t) => {
    const i = f(t.find((d) => d.label === "dchg")), r = f(t.find((d) => d.label === "qchg")), n = f(t.find((d) => d.label === "dupd")), a = f(t.find((d) => d.label === "period")), s = f(t.find((d) => d.label === "gi"));
    if (i === e.getAttribute("dchg") && r === e.getAttribute("qchg") && n === e.getAttribute("dupd") && a === e.getAttribute("period") && s === e.getAttribute("gi"))
      return [];
    const c = L(e, {
      dchg: i,
      qchg: r,
      dupd: n,
      period: a,
      gi: s
    });
    return [{ old: { element: e }, new: { element: c } }];
  };
}
function Mo(e) {
  const [t, i, r, n, a] = [
    "dchg",
    "qchg",
    "dupd",
    "period",
    "gi"
  ].map((s) => e.getAttribute(s));
  return [
    {
      title: o("wizard.title.edit", { tagName: e.tagName }),
      primary: {
        icon: "save",
        label: o("save"),
        action: Fo(e)
      },
      content: Oo({ dchg: t, qchg: i, dupd: r, period: n, gi: a })
    }
  ];
}
const qo = [
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
], Ho = [
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
], Bo = ["Spec", "Conf", "RO", "Set"], Go = ["SmpPerPeriod", "SmpPerSec", "SecPerSmp"], fr = [
  "None",
  "Signature",
  "SignatureAndEncryption"
];
function Wo(e, t, i) {
  if (!e.target || !e.target.parentElement) return;
  const r = e.target.selected?.value;
  if (e.target.parentElement.querySelector(
    'wizard-select[label="bType"]'
  ).value !== "Enum") return;
  const a = Array.from(
    t.querySelectorAll(`EnumType[id="${r}"] > EnumVal`)
  ).map(
    (c) => w`<mwc-list-item
        value="${c.textContent?.trim() ?? ""}"
        ?selected=${c.textContent?.trim() === i}
        >${c.textContent?.trim()}</mwc-list-item
      >`
  ), s = e.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  xi(w`${a}`, s), s.requestUpdate();
}
function Uo(e, t, i) {
  const r = e.target.selected.value, n = e.target.parentElement.querySelector(
    'wizard-select[label="type"]'
  );
  n.disabled = !(r === "Enum" || r === "Struct");
  const a = [];
  Array.from(n.children).forEach((l) => {
    const d = l;
    d.disabled = !l.classList.contains(r), d.noninteractive = !l.classList.contains(r), d.style.display = l.classList.contains(r) ? "" : "none", d.disabled || a.push(d);
  }), n.value = a.length ? a[0].value : "";
  const s = e.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  r === "Enum" ? s.style.display = "" : s.style.display = "none";
  const c = e.target.parentElement.querySelector(
    'wizard-textfield[label="Val"]'
  );
  r === "Enum" || r === "Struct" ? c.style.display = "none" : c.style.display = "", s.requestUpdate(), c.requestUpdate(), n.requestUpdate();
}
function jo(e, t, i, r, n, a, s, c, l, d) {
  return [
    w`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${o("scl.name")}"
      required
      pattern="${ge.abstractDataAttributeName}"
      maxLength="${Ht.abstracDaName}"
      dialogInitialFocus
    >
      ></wizard-textfield
    >`,
    w`<wizard-textfield
      label="desc"
      helper="${o("scl.desc")}"
      .maybeValue=${t}
      nullable
      pattern="${ge.normalizedString}"
    ></wizard-textfield>`,
    w`<wizard-select
      fixedMenuPosition
      label="bType"
      .value=${i}
      helper="${o("scl.bType")}"
      required
      @selected=${(m) => Uo(m)}
      >${Ho.map(
      (m) => w`<mwc-list-item value="${m}"
            >${m}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    w`<wizard-select
      label="type"
      .maybeValue=${n}
      helper="${o("scl.type")}"
      fixedMenuPosition
      @selected=${(m) => Wo(m, d, l)}
      >${r.map(
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
      helper="${o("scl.sAddr")}"
      nullable
      pattern="${ge.normalizedString}"
    ></wizard-textfield>`,
    w`<wizard-select
      label="valKind"
      .maybeValue=${s}
      helper="${o("scl.valKind")}"
      nullable
      required
      fixedMenuPosition
      >${Bo.map(
      (m) => w`<mwc-list-item value="${m}"
            >${m}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    w`<wizard-checkbox
      label="valImport"
      .maybeValue=${c}
      helper="${o("scl.valImport")}"
      nullable
      required
    ></wizard-checkbox>`,
    w`<wizard-select
      label="Val"
      .maybeValue=${l}
      helper="${o("scl.Val")}"
      nullable
      >${Array.from(
      d.querySelectorAll(`EnumType > EnumVal[id="${n}"]`)
    ).map(
      (m) => w`<mwc-list-item value="${m.textContent?.trim() ?? ""}"
            >${m.textContent?.trim()}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    w`<wizard-textfield
      label="Val"
      .maybeValue=${l}
      helper="${o("scl.Val")}"
      nullable
    ></wizard-textfield>`
  ];
}
function Ko(e, t, i, r) {
  return [
    w`<wizard-select
      label="fc"
      .maybeValue=${e}
      helper="${o("scl.fc")}"
      required
      fixedMenuPosition
      >${qo.map(
      (n) => w`<mwc-list-item value="${n}">${n}</mwc-list-item>`
    )}</wizard-select
    >`,
    w`<wizard-checkbox
      label="dchg"
      .maybeValue=${t}
      helper="${o("scl.dchg")}"
      nullable
    ></wizard-checkbox>`,
    w`<wizard-checkbox
      label="qchg"
      .maybeValue=${i}
      helper="${o("scl.qchg")}"
      nullable
    ></wizard-checkbox>`,
    w`<wizard-checkbox
      label="dupd"
      .maybeValue=${r}
      helper="${o("scl.dupd")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function Zo(e) {
  return (t) => {
    const i = f(t.find((C) => C.label === "name")), r = f(t.find((C) => C.label === "desc")), n = f(t.find((C) => C.label === "bType")), a = n === "Enum" || n === "Struct" ? f(t.find((C) => C.label === "type")) : null, s = f(t.find((C) => C.label === "sAddr")), c = f(t.find((C) => C.label === "valKind")), l = f(t.find((C) => C.label === "valImport")), d = t.find(
      (C) => C.label === "Val" && C.style.display !== "none"
    ), m = d ? f(d) : null, h = f(t.find((C) => C.label === "fc")) ?? "", b = f(t.find((C) => C.label === "dchg")), y = f(t.find((C) => C.label === "qchg")), x = f(t.find((C) => C.label === "dupd")), E = [], T = D(e.ownerDocument, "DA", {
      name: i,
      desc: r,
      bType: n,
      type: a,
      sAddr: s,
      valKind: c,
      valImport: l,
      fc: h,
      dchg: b,
      qchg: y,
      dupd: x
    });
    if (m !== null) {
      const C = D(e.ownerDocument, "Val", {});
      C.textContent = m, T.appendChild(C);
    }
    return E.push({
      new: {
        parent: e,
        element: T
      }
    }), E;
  };
}
function Xo(e) {
  const t = e.ownerDocument, i = "", r = null, n = "", a = null, s = null, c = null, l = null, d = null, m = "", h = null, b = null, y = null, x = Array.from(t.querySelectorAll("DAType, EnumType")).filter(ie).filter((T) => T.getAttribute("id")), E = e.closest("DataTypeTemplates");
  return [
    {
      title: o("da.wizard.title.edit"),
      primary: {
        icon: "",
        label: o("save"),
        action: Zo(e)
      },
      content: [
        ...jo(
          i,
          r,
          n,
          x,
          a,
          s,
          l,
          d,
          c,
          E
        ),
        ...Ko(m, h, b, y)
      ]
    }
  ];
}
const ee = (e, t) => e === null ? "" : t;
function br() {
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
            ${c(l).map((y) => w`<mwc-list-item value="${y}"
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
      render: (h, b, y = null) => (y ? [...Array(y)] : [y]).map((x, E) => w`<wizard-textfield
            id="Val${ee(x, `${E + 1}`)}"
            label="Val${ee(x, ` for sGroup ${E + 1}`)}"
            .maybeValue=${s(b)}
            helper="${o("dai.wizard.valueHelper", { type: l })}"
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
  function r(l, d, m) {
    return {
      render: (h, b, y = null) => (y ? [...Array(y)] : [y]).map((x, E) => w`<wizard-textfield
            id="Val${ee(x, `${E + 1}`)}"
            label="Val${ee(x, ` for sGroup ${E + 1}`)}"
            .maybeValue=${s(b)}
            helper="${o("dai.wizard.valueHelper", { type: l })}"
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
  function n() {
    return {
      render: (l, d, m = null) => {
        const h = s(d);
        return (m ? [...Array(m)] : [m]).reduce(
          (b, y, x) => b.concat([
            w`<wizard-textfield
                id="ValDate${ee(y, `${x + 1}`)}"
                label="Val (Date)${ee(y, ` for sGroup ${x + 1}`)}"
                .maybeValue=${Qo(h)}
                type="date"
              >
              </wizard-textfield>`,
            w`<wizard-textfield
                id="ValTime${ee(y, `${x + 1}`)}"
                label="Val (Time)${ee(y, ` for sGroup ${x + 1}`)}"
                .maybeValue=${Yo(h)}
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
            helper="${o("dai.wizard.valueHelper", { type: l })}"
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
  function c(l) {
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
function Qo(e) {
  let i = e.split("T")[0];
  return /^\d{4}-\d{2}-\d{2}$/.test(i) || (i = null), i === "0000-00-00" && (i = null), i;
}
function Yo(e) {
  const t = e.split("T");
  let i = null;
  return t.length == 2 && (i = t[1], i.length > 8 && (i = i.substring(0, 8)), /^\d{2}:\d{2}:\d{2}$/.test(i) || (i = null), i === "00:00:00" && (i = null)), i;
}
const je = "http://www.iec.ch/61850/2003/SCL";
function Jo(e, t) {
  return (i) => {
    const r = e.getAttribute("bType"), n = br()[r].value(i), a = t.parentElement?.getAttribute("name") ?? "", s = {
      actions: [],
      title: o("dai.action.updatedai", { daiName: a })
    }, c = t.cloneNode(!1);
    return c.textContent = n, s.actions.push({
      old: { element: t },
      new: { element: c }
    }), [s];
  };
}
function ec(e, t, i = null) {
  const r = e.getAttribute("bType"), n = e.querySelector("Val")?.textContent?.trim() ?? "";
  return [
    p` ${br()[r].render(
      e,
      t,
      i
    )}
    ${n ? p`<wizard-textfield
          id="daVal"
          label="DA Template Value"
          .maybeValue=${n}
          readonly
          disabled
        >
        </wizard-textfield>` : Me}`
  ];
}
function tc(e, t) {
  const i = t?.tagName === "DAI" ? t?.getAttribute("name") ?? "" : t?.parentElement?.getAttribute("name") ?? "";
  return [
    {
      title: o("dai.wizard.title.edit", {
        daiName: i
      }),
      element: t,
      primary: {
        icon: "edit",
        label: o("save"),
        action: Jo(e, t)
      },
      content: ec(e, t)
    }
  ];
}
function ic(e) {
  return (t) => {
    t.dispatchEvent(Ve(() => ir(e)));
  };
}
function rc(e) {
  return (t, i) => {
    const r = t.find((d) => d.label === "name").value, n = f(t.find((d) => d.label === "desc")), a = e.getAttribute("name"), s = [];
    if (!(r === a && n === e.getAttribute("desc"))) {
      const d = L(e, { name: r, desc: n });
      s.push({
        old: { element: e },
        new: { element: d }
      });
    }
    const c = r !== a ? Array.from(
      e.parentElement?.querySelectorAll(
        `ReportControlBock[datSet=${a}], GSEControl[datSet=${a}],SampledValueControl[datSet=${a}] `
      ) ?? []
    ).map((d) => {
      const m = L(d, { datSet: r });
      return { old: { element: d }, new: { element: m } };
    }) : [];
    return [
      ...Array.from(
        i.shadowRoot.querySelectorAll(
          "filtered-list > mwc-check-list-item:not([selected])"
        )
      ).map((d) => be(e, "FCDA", d.value)).filter((d) => d).map((d) => ({
        old: {
          parent: e,
          element: d,
          reference: d.nextSibling
        }
      })),
      ...s,
      ...c
    ];
  };
}
function gr(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc");
  return [
    {
      title: o("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: o("save"),
        icon: "save",
        action: rc(e)
      },
      menuActions: [
        {
          icon: "add",
          label: o("dataset.fcda.add"),
          action: ic(e)
        }
      ],
      content: [
        p`<wizard-textfield
          label="name"
          .maybeValue=${t}
          helper="${o("scl.name")}"
          required
          disabled="true"
        >
        </wizard-textfield>`,
        p`<wizard-textfield
          label="desc"
          .maybeValue=${i}
          helper="${o("scl.desc")}"
          nullable
          required
        >
        </wizard-textfield>`,
        p`<filtered-list multi
          >${Array.from(e.querySelectorAll("FCDA")).map(
          (r) => p`<mwc-check-list-item selected value="${N(r)}"
                >${N(r).split(">").pop()}</mwc-check-list-item
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
}, ac = {
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
function yr(e) {
  return [
    w`<mwc-formfield label="${o("connectedap.wizard.addschemainsttype")}">
      <mwc-checkbox
        id="instType"
        ?checked="${e.hasInstType}"
      ></mwc-checkbox>
    </mwc-formfield>`,
    w`${Object.entries(e.attributes).map(
      ([t, i]) => w`<wizard-textfield
          label="${t}"
          ?nullable=${ac[t]}
          .maybeValue=${i}
          pattern="${fe(nc[t])}"
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
function oc(e, t, i) {
  const r = D(t.ownerDocument, "Address", {});
  return Object.entries(e).filter(([n, a]) => a !== null).forEach(([n, a]) => {
    const s = n, c = D(t.ownerDocument, "P", { type: s });
    i && c.setAttributeNS(
      "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:type",
      "tP_" + n
    ), c.textContent = a, r.appendChild(c);
  }), r;
}
function vr(e, t, i) {
  const r = [], n = oc(t, e, i), a = e.querySelector("Address");
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
function bi(e, t, i, r) {
  if (t === null) {
    const a = D(r.ownerDocument, e, {
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
function cc(e) {
  return (t, i) => {
    const r = {
      actions: [],
      title: o("gse.action.addaddress", {
        identity: N(e)
      })
    }, n = i.shadowRoot?.querySelector("#instType")?.checked ?? !1, a = {};
    a["MAC-Address"] = f(
      t.find((d) => d.label === "MAC-Address")
    ), a.APPID = f(t.find((d) => d.label === "APPID")), a["VLAN-ID"] = f(
      t.find((d) => d.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = f(
      t.find((d) => d.label === "VLAN-PRIORITY")
    ), vr(e, a, n).forEach((d) => {
      r.actions.push(d);
    });
    const c = f(t.find((d) => d.label === "MinTime")), l = f(t.find((d) => d.label === "MaxTime"));
    return c !== (e.querySelector("MinTime")?.textContent?.trim() ?? null) && r.actions.push(
      bi(
        "MinTime",
        e.querySelector("MinTime"),
        c,
        e
      )
    ), l !== (e.querySelector("MaxTime")?.textContent?.trim() ?? null) && r.actions.push(
      bi(
        "MaxTime",
        e.querySelector("MaxTime"),
        l,
        e
      )
    ), [r];
  };
}
function lc(e) {
  const t = e.querySelector("MinTime")?.innerHTML.trim() ?? null, i = e.querySelector("MaxTime")?.innerHTML.trim() ?? null, r = Array.from(e.querySelectorAll("Address > P")).some(
    (a) => a.getAttribute("xsi:type")
  ), n = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((a) => {
    n[a] || (n[a] = e.querySelector(`Address > P[type="${a}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: o("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: o("save"),
        icon: "save",
        action: cc(e)
      },
      content: [
        ...yr({ hasInstType: r, attributes: n }),
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
function Ar(e) {
  const t = e.getAttribute("name"), i = e.closest("IED")?.getAttribute("name"), r = e.closest("AccessPoint")?.getAttribute("name"), n = e.closest("LDevice")?.getAttribute("inst");
  return e.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${r}"] > GSE[ldInst="${n}"][cbName="${t}"]`
  );
}
function dc(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${o("scl.name")}"
      required
      validationMessage="${o("textfield.required")}"
      pattern="${ge.asciName}"
      maxLength="${Ht.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${o("scl.desc")}"
    ></wizard-textfield>`,
    p`<wizard-select
      label="type"
      .maybeValue=${e.type}
      helper="${o("scl.type")}"
      nullable
      required
      >${["GOOSE", "GSSE"].map(
      (t) => p`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`,
    p`<wizard-textfield
      label="appID"
      .maybeValue=${e.appID}
      helper="${o("scl.id")}"
      required
      validationMessage="${o("textfield.nonempty")}"
    ></wizard-textfield>`,
    p`<wizard-checkbox
      label="fixedOffs"
      .maybeValue=${e.fixedOffs}
      nullable
      helper="${o("scl.fixedOffs")}"
    ></wizard-checkbox>`,
    p`<wizard-select
      label="securityEnabled"
      .maybeValue=${e.securityEnabled}
      nullable
      required
      helper="${o("scl.securityEnable")}"
      >${fr.map(
      (t) => p`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function uc(e) {
  if (!e.parentElement) return null;
  const t = e.parentElement.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), i = Ar(e), r = Array.from(
    e.parentElement?.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    ) ?? []
  ).filter(
    (c) => c.getAttribute("datSet") === t?.getAttribute("name")
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
  const a = e.getAttribute("name"), s = e.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: o("controlblock.action.remove", {
      type: e.tagName,
      name: a,
      iedName: s
    }),
    actions: n
  };
}
function pc(e) {
  return (t) => {
    const i = uc(e);
    i && t.dispatchEvent(Xe(i)), t.dispatchEvent(de());
  };
}
function mc(e) {
  return (t) => {
    t.dispatchEvent(Ve(() => gr(e)));
  };
}
function hc(e) {
  return (t) => {
    t.dispatchEvent(Ve(() => lc(e)));
  };
}
function fc(e) {
  return (t) => {
    const i = t.find((d) => d.label === "name").value, r = f(t.find((d) => d.label === "desc")), n = f(t.find((d) => d.label === "type")), a = f(t.find((d) => d.label === "appID")), s = f(t.find((d) => d.label === "fixedOffs")), c = f(
      t.find((d) => d.label === "securityEnabled")
    );
    if (i === e.getAttribute("name") && r === e.getAttribute("desc") && n === e.getAttribute("type") && a === e.getAttribute("appID") && s === e.getAttribute("fixedOffs") && c === e.getAttribute("securityEnabled"))
      return [];
    const l = L(e, {
      name: i,
      desc: r,
      type: n,
      appID: a,
      fixedOffs: s,
      securityEnabled: c
    });
    return [{ old: { element: e }, new: { element: l } }];
  };
}
function bc(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = e.getAttribute("appID"), a = e.getAttribute("fixedOffs"), s = e.getAttribute("securityEnabled"), c = Ar(e), l = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), d = [];
  return d.push({
    icon: "delete",
    label: o("remove"),
    action: pc(e)
  }), l && d.push({
    icon: "edit",
    label: o("scl.DataSet"),
    action: mc(l)
  }), c && d.push({
    icon: "edit",
    label: o("scl.Communication"),
    action: hc(c)
  }), [
    {
      title: o("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: o("save"),
        action: fc(e)
      },
      menuActions: d,
      content: [
        ...dc({
          name: t,
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
function $e(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${o("scl.name")}"
      required
      validationMessage="${o("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${o("scl.desc")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      helper="${o("scl.type")}"
      nullable
    ></wizard-textfield>`
  ];
}
function gc(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "type"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some((n) => i[n] !== e.getAttribute(n))) {
      const n = L(e, i);
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
function yc(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = B(
    e.parentElement,
    "Function"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: o("wizard.title.edit", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: o("save"),
        action: gc(e)
      },
      content: [
        ...$e({
          name: t,
          desc: i,
          type: r,
          reservedNames: n
        })
      ]
    }
  ];
}
function vc(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    const n = D(
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
      title: o("wizard.title.add", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: o("save"),
        action: vc(e)
      },
      content: [
        ...$e({
          name: t,
          desc: null,
          type: null,
          reservedNames: n
        })
      ]
    }
  ];
}
function Sc(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "type"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some((n) => i[n] !== e.getAttribute(n))) {
      const n = L(e, i);
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
function wc(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = B(
    e.parentElement,
    "EqSubFunction"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: o("wizard.title.edit", { tagName: "EqSubFunction" }),
      element: e,
      primary: {
        icon: "save",
        label: o("save"),
        action: Sc(e)
      },
      content: [
        ...$e({
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
      i[a] = f(t.find((s) => s.label === a));
    });
    const n = D(
      e.ownerDocument,
      "EqSubFunction",
      i
    );
    return [{ new: { parent: e, element: n } }];
  };
}
function Cc(e) {
  const t = "", n = Array.from(
    e.querySelectorAll("EqSubFunction")
  ).map((a) => a.getAttribute("name"));
  return [
    {
      title: o("wizard.title.add", { tagName: "EqSubFunction" }),
      primary: {
        icon: "save",
        label: o("save"),
        action: xc(e)
      },
      content: [
        ...$e({
          name: t,
          desc: null,
          type: null,
          reservedNames: n
        })
      ]
    }
  ];
}
function Nc(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "type"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some((n) => i[n] !== e.getAttribute(n))) {
      const n = L(e, i);
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
function Ec(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = B(
    e.parentElement,
    "EqFunction"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: o("wizard.title.edit", { tagName: "EqFunction" }),
      element: e,
      primary: {
        icon: "save",
        label: o("save"),
        action: Nc(e)
      },
      content: [
        ...$e({
          name: t,
          desc: i,
          type: r,
          reservedNames: n
        })
      ]
    }
  ];
}
function Ic(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    const n = D(
      e.ownerDocument,
      "EqFunction",
      i
    );
    return [{ new: { parent: e, element: n } }];
  };
}
function kc(e) {
  const t = "", n = Array.from(e.querySelectorAll("EqFunction")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: o("wizard.title.add", { tagName: "EqFunction" }),
      primary: {
        icon: "save",
        label: o("save"),
        action: Ic(e)
      },
      content: [
        ...$e({
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
    }), r.some(
      (n) => i[n] !== e.getAttribute(n)
    )) {
      const n = L(e, i);
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
function $c(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = B(
    e.parentElement,
    "SubFunction"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: o("wizard.title.edit", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: o("save"),
        action: Dc(e)
      },
      content: [
        ...$e({
          name: t,
          desc: i,
          type: r,
          reservedNames: n
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
    const n = D(
      e.ownerDocument,
      "SubFunction",
      i
    );
    return [{ new: { parent: e, element: n } }];
  };
}
function zc(e) {
  const t = "", n = Array.from(e.querySelectorAll("SubFunction")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: o("wizard.title.add", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: o("save"),
        action: Lc(e)
      },
      content: [
        ...$e({
          name: t,
          desc: null,
          type: null,
          reservedNames: n
        })
      ]
    }
  ];
}
function Tc(e) {
  return (t, i) => {
    const r = {
      actions: [],
      title: o("smv.action.addaddress", {
        identity: N(e)
      })
    }, n = i.shadowRoot?.querySelector("#instType")?.checked, a = {};
    a["MAC-Address"] = f(
      t.find((c) => c.label === "MAC-Address")
    ), a.APPID = f(t.find((c) => c.label === "APPID")), a["VLAN-ID"] = f(
      t.find((c) => c.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = f(
      t.find((c) => c.label === "VLAN-PRIORITY")
    );
    const s = vr(e, a, n);
    return s.length ? (s.forEach((c) => {
      r.actions.push(c);
    }), [r]) : [];
  };
}
function _c(e) {
  const t = Array.from(e.querySelectorAll("Address > P")).some(
    (r) => r.getAttribute("xsi:type")
  ), i = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((r) => {
    i[r] || (i[r] = e.querySelector(`Address > P[type="${r}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: o("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: o("save"),
        icon: "edit",
        action: Tc(e)
      },
      content: [...yr({ hasInstType: t, attributes: i })]
    }
  ];
}
function Vc(e) {
  return Object.entries(e).map(
    ([t, i]) => p`<wizard-checkbox
        label="${t}"
        .maybeValue=${i}
        nullable
        helper="${o(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function Pc(e) {
  return (t) => {
    const i = {}, r = [
      "refreshTime",
      "sampleRate",
      "dataSet",
      "security",
      "synchSourceId"
    ];
    if (r.forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    }), !r.some((a) => i[a] !== e.getAttribute(a)))
      return [];
    const n = L(e, i);
    return [{ old: { element: e }, new: { element: n } }];
  };
}
function Rc(e) {
  const [t, i, r, n, a] = [
    "refreshTime",
    "sampleRate",
    "dataSet",
    "security",
    "synchSourceId"
  ].map((s) => e.getAttribute(s));
  return [
    {
      title: o("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: o("save"),
        action: Pc(e)
      },
      content: [
        ...Vc({
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
function Sr(e) {
  const t = e.getAttribute("name"), i = e.closest("IED")?.getAttribute("name"), r = e.closest("AccessPoint")?.getAttribute("name"), n = e.closest("LDevice")?.getAttribute("inst");
  return e.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${r}"] > SMV[ldInst="${n}"][cbName="${t}"]`
  ) ?? null;
}
function Oc(e) {
  if (!e.parentElement) return null;
  const t = e.parentElement.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), i = Sr(e), r = Array.from(
    e.parentElement.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    )
  ).filter(
    (c) => c.getAttribute("datSet") === t?.getAttribute("name")
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
  const a = e.getAttribute("name"), s = e.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: o("controlblock.action.remove", {
      type: e.tagName,
      name: a,
      iedName: s
    }),
    actions: n
  };
}
function Fc(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${o("scl.name")}"
      required
      validationMessage="${o("textfield.required")}"
      pattern="${ge.asciName}"
      maxLength="${Ht.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      pattern="${ge.normalizedString}"
      helper="${o("scl.desc")}"
    ></wizard-textfield>`,
    e.multicast === "true" ? p`` : p`<wizard-checkbox
          label="multicast"
          .maybeValue=${e.multicast}
          helper="${o("scl.multicast")}"
          disabled
        ></wizard-checkbox>`,
    p`<wizard-textfield
      label="smvID"
      .maybeValue=${e.smvID}
      helper="${o("scl.id")}"
      required
      validationMessage="${o("textfield.nonempty")}"
    ></wizard-textfield>`,
    p`<wizard-select
      label="smpMod"
      .maybeValue=${e.smpMod}
      nullable
      required
      helper="${o("scl.smpMod")}"
      >${Go.map(
      (t) => p`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`,
    p`<wizard-textfield
      label="smpRate"
      .maybeValue=${e.smpRate}
      helper="${o("scl.smpRate")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="nofASDU"
      .maybeValue=${e.nofASDU}
      helper="${o("scl.nofASDU")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    p`<wizard-select
      label="securityEnabled"
      .maybeValue=${e.securityEnabled}
      nullable
      required
      helper="${o("scl.securityEnable")}"
      >${fr.map(
      (t) => p`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function Mc(e) {
  return (t) => {
    const i = Oc(e);
    i && t.dispatchEvent(Xe(i)), t.dispatchEvent(de());
  };
}
function qc(e) {
  return (t) => {
    t.dispatchEvent(Ve(() => gr(e)));
  };
}
function Hc(e) {
  return (t) => {
    t.dispatchEvent(Ve(() => Rc(e)));
  };
}
function Bc(e) {
  return (t) => {
    t.dispatchEvent(Ve(() => _c(e)));
  };
}
function Gc(e) {
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
    r.forEach((s) => {
      if (s === "multicast" && !t.find((l) => l.label === s)) {
        i.multicast = "true";
        return;
      }
      i[s] = f(t.find((l) => l.label === s));
    });
    let n = null;
    if (r.some((s) => i[s] !== e.getAttribute(s))) {
      const s = L(e, i);
      n = {
        old: { element: e },
        new: { element: s }
      };
    }
    const a = [];
    return n && a.push(n), a;
  };
}
function Wc(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("multicast"), n = e.getAttribute("smvID"), a = e.getAttribute("smpMod"), s = e.getAttribute("smpRate"), c = e.getAttribute("nofASDU"), l = e.getAttribute("securityEnabled"), d = Sr(e), m = e.querySelector("SmvOpts"), h = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), b = [];
  return b.push({
    icon: "delete",
    label: o("remove"),
    action: Mc(e)
  }), h && b.push({
    icon: "edit",
    label: o("scl.DataSet"),
    action: qc(h)
  }), m && b.push({
    icon: "edit",
    label: o("scl.SmvOpts"),
    action: Hc(m)
  }), d && b.push({
    icon: "edit",
    label: o("scl.Communication"),
    action: Bc(d)
  }), [
    {
      title: o("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: o("save"),
        action: Gc(e)
      },
      menuActions: b,
      content: [
        ...Fc({
          name: t,
          desc: i,
          multicast: r,
          smvID: n,
          smpMod: a,
          smpRate: s,
          nofASDU: c,
          securityEnabled: l
        })
      ]
    }
  ];
}
function wr(e) {
  return [
    w`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      .reservedValues=${e.reservedNames}
      helper="${o("scl.name")}"
      required
      validationMessage="${o("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${o("scl.desc")}"
    ></wizard-textfield>`,
    w`<wizard-select
      label="phase"
      fixedMenuPosition
      .maybeValue=${e.phase}
      nullable
      helper="${o("scl.phase")}"
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
      helper="${o("scl.virtual")}"
    ></wizard-checkbox>`
  ];
}
function Uc(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "phase", "virtual"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some(
      (n) => i[n] !== e.getAttribute(n)
    )) {
      const n = L(e, i);
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
function jc(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("phase"), n = e.getAttribute("virtual"), a = B(
    e.parentElement,
    "SubEquipment"
  ).filter((s) => s !== e).map((s) => s.getAttribute("name"));
  return [
    {
      title: o("wizard.title.edit", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: o("save"),
        action: Uc(e)
      },
      content: [
        ...wr({
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
function Kc(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "phase", "virtual"].forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    const n = D(
      e.ownerDocument,
      "SubEquipment",
      i
    );
    return [{ new: { parent: e, element: n } }];
  };
}
function Zc(e) {
  const t = "", a = Array.from(e.querySelectorAll("SubEquipment")).map(
    (s) => s.getAttribute("name")
  );
  return [
    {
      title: o("wizard.title.add", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: o("save"),
        action: Kc(e)
      },
      content: [
        ...wr({
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
function Xc(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = e.getAttribute("virtual"), a = B(
    e.parentElement,
    "GeneralEquipment"
  ).filter((s) => s !== e).map((s) => s.getAttribute("name"));
  return [
    {
      title: o("wizard.title.edit", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: o("save"),
        action: Qc(e)
      },
      content: [
        ...xr({
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
function Qc(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "type", "virtual"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some(
      (n) => i[n] !== e.getAttribute(n)
    )) {
      const n = L(e, i);
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
function xr(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${o("scl.name")}"
      required
      validationMessage="${o("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${o("scl.desc")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      helper="${o("scl.type")}"
      minLength="${3}"
      pattern="AXN|BAT|MOT|FAN|FIL|PMP|TNK|VLV|E[A-Z]*"
      required
    ></wizard-textfield>`,
    p`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${o("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function Yc(e) {
  const t = "", a = Array.from(
    e.querySelectorAll("GeneralEquipment")
  ).map((s) => s.getAttribute("name"));
  return [
    {
      title: o("wizard.title.add", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: o("save"),
        action: Jc(e)
      },
      content: [
        ...xr({
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
function Jc(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    const n = D(
      e.ownerDocument,
      "GeneralEquipment",
      i
    );
    return [{ new: { parent: e, element: n } }];
  };
}
function el(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = f(
        t.find((s) => s.label === a)
      );
    });
    const n = D(
      e.ownerDocument,
      "TransformerWinding",
      i
    );
    return [{ new: { parent: e, element: n } }];
  };
}
function tl(e) {
  const t = "", a = Array.from(
    e.querySelectorAll("TransformerWinding")
  ).map((s) => s.getAttribute("name"));
  return [
    {
      title: o("wizard.title.add", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: o("save"),
        action: el(e)
      },
      content: [
        ...Cr({
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
function il(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "type", "virtual"];
    if (r.forEach((n) => {
      i[n] = f(
        t.find((a) => a.label === n)
      );
    }), r.some(
      (n) => i[n] !== e.getAttribute(n)
    )) {
      const n = L(e, i);
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
function Cr(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${o("scl.name")}"
      required
      validationMessage="${o("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${o("scl.desc")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      disabled
      helper="${o("scl.type")}"
    ></wizard-textfield>`,
    p`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${o("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function rl(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = e.getAttribute("virtual"), a = B(
    e.parentElement,
    "TransformerWinding"
  ).filter((s) => s !== e).map((s) => s.getAttribute("name"));
  return [
    {
      title: o("wizard.title.edit", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: o("save"),
        action: il(e)
      },
      content: [
        ...Cr({
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
function nl(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    const n = D(
      e.ownerDocument,
      "TapChanger",
      i
    );
    return [{ new: { parent: e, element: n } }];
  };
}
function al(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "type", "virtual"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some(
      (n) => i[n] !== e.getAttribute(n)
    )) {
      const n = L(e, i);
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
function Nr(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${o("scl.name")}"
      required
      validationMessage="${o("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${o("scl.desc")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      disabled
      helper="${o("scl.type")}"
    ></wizard-textfield>`,
    p`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${o("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function sl(e) {
  const t = "", r = "LTC", a = Array.from(e.querySelectorAll("TapChanger")).map(
    (s) => s.getAttribute("name")
  );
  return [
    {
      title: o("wizard.title.add", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: o("save"),
        action: nl(e)
      },
      content: [
        ...Nr({
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
function ol(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = e.getAttribute("virtual"), a = B(
    e.parentElement,
    "TapChanger"
  ).filter((s) => s !== e).map((s) => s.getAttribute("name"));
  return [
    {
      title: o("wizard.title.edit", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: o("save"),
        action: al(e)
      },
      content: [
        ...Nr({
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
function Er(e, t, i, r, n) {
  return [
    w`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${o("line.wizard.nameHelper")}"
      required
      validationMessage="${o("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${o("line.wizard.descHelper")}"
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="type"
      .maybeValue=${i}
      nullable
      helper="${o("line.wizard.typeHelper")}"
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="nomFreq"
      .maybeValue=${r}
      nullable
      helper="${o("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      validationMessage="${o("textfield.nonempty")}"
      pattern="${Ze.unsigned}"
    ></wizard-textfield>`,
    w`<wizard-textfield
      label="numPhases"
      .maybeValue=${n}
      nullable
      helper="${o("voltagelevel.wizard.numPhaseHelper")}"
      suffix="#"
      validationMessage="${o("textfield.nonempty")}"
      type="number"
      min="1"
      max="255"
    ></wizard-textfield>`
  ];
}
function cl(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type", "nomFreq", "numPhases"].forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    const n = D(e.ownerDocument, "Line", i);
    return [{ new: { parent: e, element: n } }];
  };
}
function ll(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "type", "nomFreq", "numPhases"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some((n) => i[n] !== e.getAttribute(n))) {
      const n = L(e, i);
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
function dl(e) {
  return [
    {
      title: o("wizard.title.add", { tagName: "Line" }),
      primary: {
        icon: "save",
        label: o("save"),
        action: cl(e)
      },
      content: [...Er("", "", "", "", "")]
    }
  ];
}
function ul(e) {
  return [
    {
      title: o("line.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: o("save"),
        action: ll(e)
      },
      content: Er(
        e.getAttribute("name") ?? "",
        e.getAttribute("desc"),
        e.getAttribute("type"),
        e.getAttribute("nomFreq"),
        e.getAttribute("numPhases")
      )
    }
  ];
}
function pl(e) {
  return (t) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = f(t.find((s) => s.label === a));
    });
    const n = D(e.ownerDocument, "Process", i);
    return [{ new: { parent: e, element: n } }];
  };
}
function ml(e) {
  return (t) => {
    const i = {}, r = ["name", "desc", "type"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some(
      (n) => i[n] !== e.getAttribute(n)
    )) {
      const n = L(e, i);
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
function Ir(e) {
  return [
    p`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${o("scl.name")}"
      required
      validationMessage="${o("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${o("scl.desc")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      nullable
      helper="${o("scl.type")}"
    ></wizard-textfield>`
  ];
}
function hl(e) {
  const t = "", i = "", r = "", n = B(
    e.parentElement,
    "Process"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: o("wizard.title.add", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: o("save"),
        action: pl(e)
      },
      content: [
        ...Ir({
          name: t,
          desc: i,
          type: r,
          reservedNames: n
        })
      ]
    }
  ];
}
function fl(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), r = e.getAttribute("type"), n = B(
    e.parentElement,
    "Process"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: o("wizard.title.edit", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: o("save"),
        action: ml(e)
      },
      content: [
        ...Ir({
          name: t,
          desc: i,
          type: r,
          reservedNames: n
        })
      ]
    }
  ];
}
function bl(e, t, i, r, n) {
  return [
    p`<wizard-textfield
      label="lnType"
      .maybeValue=${e}
      readonly
      required
      helper="${o("ln.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${o("ln.wizard.descHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="prefix"
      nullable
      readonly
      .maybeValue=${i}
      helper="${o("ln.wizard.prefixHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${r}
      helper="${o("ln.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="inst"
      .maybeValue=${n}
      readonly
      helper="${o("ln.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function gl(e) {
  return (t) => {
    const i = {}, r = ["lnType", "desc", "prefix", "lnClass", "inst"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some((n) => i[n] !== e.getAttribute(n))) {
      const n = L(e, i);
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
function yl(e) {
  return [
    {
      title: o("ln.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: o("save"),
        action: gl(e)
      },
      content: bl(
        e.getAttribute("lnType"),
        e.getAttribute("desc"),
        e.getAttribute("prefix"),
        e.getAttribute("lnClass"),
        e.getAttribute("inst")
      )
    }
  ];
}
function vl(e, t, i, r) {
  return [
    p`<wizard-textfield
      label="lnType"
      .maybeValue=${e}
      readonly
      required
      helper="${o("ln0.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${o("ln0.wizard.descHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${i}
      helper="${o("ln0.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    p`<wizard-textfield
      label="inst"
      .maybeValue=${r}
      readonly
      helper="${o("ln0.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function Al(e) {
  return (t) => {
    const i = {}, r = ["lnType", "desc", "lnClass", "inst"];
    if (r.forEach((n) => {
      i[n] = f(t.find((a) => a.label === n));
    }), r.some((n) => i[n] !== e.getAttribute(n))) {
      const n = L(e, i);
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
function Sl(e) {
  return [
    {
      title: o("ln0.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: o("save"),
        action: Al(e)
      },
      content: vl(
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
const wl = {
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
    edit: Za,
    create: Ka
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
    edit: as,
    create: ns
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
    edit: os,
    create: u
  },
  DA: {
    edit: Xo,
    create: u
  },
  DAI: {
    edit: tc,
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
    edit: Ec,
    create: kc
  },
  EqSubFunction: {
    edit: wc,
    create: Cc
  },
  ExtRef: {
    edit: u,
    create: u
  },
  FCDA: {
    edit: u,
    create: ir
  },
  FileHandling: {
    edit: u,
    create: u
  },
  Function: {
    edit: yc,
    create: Ac
  },
  GeneralEquipment: {
    edit: Xc,
    create: Yc
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
    edit: bc,
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
    edit: zo,
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
    edit: yl,
    create: u
  },
  LN0: {
    edit: Sl,
    create: u
  },
  LNode: {
    edit: Ms,
    create: Rs
  },
  LNodeType: {
    edit: u,
    create: u
  },
  Line: {
    edit: ul,
    create: dl
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
    edit: Bs,
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
    edit: fo,
    create: ho
  },
  Private: {
    edit: u,
    create: u
  },
  Process: {
    edit: fl,
    create: hl
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
    edit: Wc,
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
    edit: jc,
    create: Zc
  },
  SubFunction: {
    edit: $c,
    create: zc
  },
  SubNetwork: {
    edit: vo,
    create: u
  },
  Subject: {
    edit: u,
    create: u
  },
  Substation: {
    edit: no,
    create: ro
  },
  SupSubscription: {
    edit: u,
    create: u
  },
  TapChanger: {
    edit: ol,
    create: sl
  },
  Terminal: {
    edit: so,
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
    edit: rl,
    create: tl
  },
  TrgOps: {
    edit: Mo,
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
    edit: po,
    create: co
  }
};
var xl = Object.defineProperty, Cl = (e, t, i, r) => {
  for (var n = void 0, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (n = s(t, i, n) || n);
  return n && xl(t, i, n), n;
};
function Nl(e, t, i) {
  return new CustomEvent("fcda-select", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { control: e, fcda: t, ...i?.detail }
  });
}
function gi(e, t, i) {
  return new CustomEvent("subscription-changed", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { control: e, fcda: t, ...i?.detail }
  });
}
function yi(e) {
  return `${e.getAttribute("doName")}${e.hasAttribute("doName") && e.hasAttribute("daName") ? "." : ""}${e.getAttribute("daName")}`;
}
function vi(e) {
  return `${e.getAttribute("ldInst")} ${e.hasAttribute("ldInst") ? "/" : ""}${e.getAttribute("prefix") ? ` ${e.getAttribute("prefix")}` : ""} ${e.getAttribute("lnClass")} ${e.getAttribute(
    "lnInst"
  )}`;
}
function El(e) {
  const [t, i, r, n, a, s] = [
    "srcCBName",
    "srcLDInst",
    "srcLNClass",
    "iedName",
    "srcPrefix",
    "srcLNInst"
  ].map((c) => e.getAttribute(c));
  return !Array.from(
    e.closest("IED")?.getElementsByTagName("ExtRef") ?? []
  ).filter(ie).some(
    (c) => (c.getAttribute("srcCBName") ?? "") === (t ?? "") && (c.getAttribute("srcLDInst") ?? "") === (i ?? "") && (c.getAttribute("srcLNClass") ?? "") === (r ?? "") && (c.getAttribute("iedName") ?? "") === (n ?? "") && (c.getAttribute("srcPrefix") ?? "") === (a ?? "") && (c.getAttribute("srcLNInst") ?? "") === (s ?? "") && c !== e
  );
}
function Il(e, t) {
  const i = e.querySelector(
    `LN[lnClass="${t}"]`
  );
  if (i === null) return !1;
  const r = t === "LGOS" ? "GoCBRef" : "SvCBRef", n = i.querySelector(`DOI[name="${r}"]>DAI[name="setSrcRef"]`)?.getAttribute("valKind"), a = i.querySelector(`DOI[name="${r}"]>DAI[name="setSrcRef"]`)?.getAttribute("valImport");
  if ((n === "RO" || n === "Conf") && a === "true")
    return !0;
  const s = i?.ownerDocument, c = i.getAttribute("lnType"), l = i.getAttribute("lnClass"), d = s.querySelector(
    `DataTypeTemplates > LNodeType[id="${c}"][lnClass="${l}"] > DO[name="${l === "LGOS" ? "GoCBRef" : "SvCBRef"}"]`
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
  if (!e || !t || !$l(e, t, i))
    return [];
  const r = Ll(
    e,
    t,
    i
  );
  if (!r || !Il(t, i))
    return [];
  const n = [];
  if (!r.parentElement) {
    const d = t.querySelector(
      `LN[lnClass="${i}"]`
    )?.parentElement;
    d && n.push({
      new: {
        parent: d,
        element: r,
        reference: d.querySelector(
          `LN[lnClass="${i}"]:last-child`
        )?.nextElementSibling
      }
    });
  }
  const a = i === "LGOS" ? "GoCBRef" : "SvCBRef";
  let s = r.querySelector(`DOI[name="${a}"]`);
  s || (s = t.ownerDocument.createElementNS(
    je,
    "DOI"
  ), s.setAttribute("name", a), n.push({
    new: {
      parent: r,
      element: s
    }
  }));
  let c = r.querySelector(
    `DOI[name="${a}"]>DAI[name="setSrcRef"]`
  );
  if (!c) {
    c = t.ownerDocument.createElementNS(
      je,
      "DAI"
    );
    const d = t.querySelector(
      `LN[lnClass="${i}"]>DOI[name="${a}"]>DAI[name="setSrcRef"]`
    );
    c.setAttribute("name", "setSrcRef"), d?.hasAttribute("valKind") && c.setAttribute("valKind", d.getAttribute("valKind")), d?.hasAttribute("valImport") && c.setAttribute(
      "valImport",
      d.getAttribute("valImport")
    ), n.push({
      new: {
        parent: s,
        element: c
      }
    });
  }
  let l = r.querySelector("Val");
  return l || (l = t.ownerDocument.createElementNS(
    je,
    "Val"
  )), l.textContent = Gt(e), n.push({
    new: {
      parent: c,
      element: l
    }
  }), n;
}
function pt(e, t, i) {
  const r = t === "GSEControl" ? "LGOS" : "LSVS", n = r === "LGOS" ? "GoCBRef" : "SvCBRef", a = `LN[lnClass="${r}"]>DOI[name="${n}"]>DAI[name="setSrcRef"]>Val,LN0[lnClass="${r}"]>DOI[name="${n}"]>DAI[name="setSrcRef"]>Val`;
  return i ? e.querySelector(a) : Array.from(e.querySelectorAll(a));
}
function Dl(e, t) {
  if (!e || !t) return [];
  const i = pt(
    t,
    e.tagName
  ).find((a) => a.textContent == Gt(e));
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
function $l(e, t, i) {
  return !(Ot(t.ownerDocument) === "2003" || t.querySelector(`LN[lnClass="${i}"]`) === null || pt(t, e.tagName).find(
    (r) => r.textContent == Gt(e)
  ) || _l(t, e) <= Tl(t, e));
}
function Ll(e, t, i) {
  let r = Array.from(
    t.querySelectorAll(`LN[lnClass="${i}"]`)
  ).find((a) => {
    const s = i === "LGOS" ? "GoCBRef" : "SvCBRef";
    return a.querySelector(
      `DOI[name="${s}"]>DAI[name="setSrcRef"]>Val`
    ) === null || a.querySelector(
      `DOI[name="${s}"]>DAI[name="setSrcRef"]>Val`
    )?.textContent === "";
  });
  if (!r) {
    r = t.ownerDocument.createElementNS(
      je,
      "LN"
    );
    const a = t.ownerDocument.createElementNS(
      je,
      "Private"
    );
    a.setAttribute("type", "OpenSCD.create"), r.appendChild(a), r.setAttribute("lnClass", i);
    const s = pt(
      t,
      e.tagName,
      !0
    )?.closest("LN");
    if (!s) return null;
    r.setAttribute(
      "lnType",
      s?.getAttribute("lnType") ?? ""
    );
  }
  if ((r.getAttribute("inst") ?? "") === "") {
    const a = Oa(
      Array.from(
        t.querySelectorAll(`LN[lnClass="${i}"]`)
      )
    );
    if (!a) return null;
    r.setAttribute("inst", a);
  }
  return r;
}
function zl(e) {
  if (e === null) return null;
  const t = ["iedName", "serviceType", "srcPrefix", "srcCBName"], [i, r, n, a] = t.map(
    (y) => e.getAttribute(y) ?? ""
  ), s = r === "GOOSE" ? "LGOS" : "LSVS", c = s === "LGOS" ? 'DOI[name="GoCBRef"]' : 'DOI[name="SvCBRef"]', l = e.getAttribute("srcLDInst") ?? e.getAttribute("ldInst"), d = e.getAttribute("srcLNClass") ?? "LLN0", m = `${i}${n}${l}/${d}.${a}`, h = e.closest("IED")?.getAttribute("name"), b = Array.from(
    e.ownerDocument.querySelector(`IED[name="${h}"]`).querySelectorAll(
      `LN[lnClass="${s}"]>${c}>DAI[name="setSrcRef"]>Val`
    )
  ).find((y) => y.textContent === m);
  return b !== void 0 ? b.closest("LN") : null;
}
function Tl(e, t) {
  return pt(
    e,
    t.tagName
  ).filter((r) => r.textContent !== "").length;
}
function _l(e, t) {
  const i = t.tagName === "GSEControl" ? "maxGo" : "maxSv", r = parseInt(
    e.querySelector("Services>SupSubscription")?.getAttribute(i) ?? "0",
    10
  );
  return isNaN(r) ? 0 : r;
}
function Gt(e) {
  if (!e) return null;
  const t = e.closest("LN,LN0"), i = t?.getAttribute("prefix") ?? "", r = t?.getAttribute("lnClass"), n = t?.getAttribute("inst") ?? "", a = e.closest("LDevice")?.getAttribute("inst"), s = e.closest("IED")?.getAttribute("name"), c = e.getAttribute("name");
  return !c && !s && !a && !r ? null : `${s}${a}/${i}${r}${n}.${c}`;
}
const ct = {
  ReportControl: "Report",
  GSEControl: "GOOSE",
  SampledValueControl: "SMV"
};
function Vl(e, t, i) {
  const r = i.closest("IED")?.getAttribute("name") ?? null, [n, a, s, c, l, d] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName"
  ].map((E) => i.getAttribute(E));
  if (Ot(i.ownerDocument) === "2003")
    return L(e, {
      iedName: r,
      serviceType: null,
      ldInst: n,
      lnClass: s,
      lnInst: c,
      prefix: a,
      doName: l,
      daName: d,
      srcLDInst: null,
      srcPrefix: null,
      srcLNClass: null,
      srcLNInst: null,
      srcCBName: null
    });
  if (!t || !ct[t.tagName])
    return L(e, {
      iedName: r,
      serviceType: "Poll",
      ldInst: n,
      lnClass: s,
      lnInst: c,
      prefix: a,
      doName: l,
      daName: d,
      srcLDInst: null,
      srcPrefix: null,
      srcLNClass: null,
      srcLNInst: null,
      srcCBName: null
    });
  const m = t.closest("LDevice")?.getAttribute("inst") ?? "", h = t.closest("LN0,LN")?.getAttribute("prefix") ?? "", b = t.closest("LN0,LN")?.getAttribute("lnClass") ?? "", y = t.closest("LN0,LN")?.getAttribute("inst"), x = t.getAttribute("name") ?? "";
  return L(e, {
    iedName: r,
    serviceType: ct[t.tagName],
    ldInst: n,
    lnClass: s,
    lnInst: c,
    prefix: a,
    doName: l,
    daName: d,
    srcLDInst: m,
    srcPrefix: h,
    srcLNClass: b,
    srcLNInst: y || null,
    srcCBName: x
  });
}
class Pl extends Ie {
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
Cl([
  M("div")
], Pl.prototype, "subscriberWrapper");
const kr = pe`
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
function Dr(e, t, i) {
  const r = e.ownerDocument, n = r.querySelector(
    `LNodeType[id="${e.getAttribute("lnType")}"]`
  ), a = t.split(".");
  let s = n;
  for (const m of a) {
    const h = s?.querySelector(
      `DO[name="${m}"], SDO[name="${m}"]`
    );
    s = r.querySelector(`DOType[id="${h?.getAttribute("type")}"]`);
  }
  if (!s || !s.getAttribute("cdc")) return { cdc: null, bType: null };
  const c = s.getAttribute("cdc"), l = i.split(".");
  for (const m of l) {
    const h = s?.querySelector(
      `DA[name="${m}"], BDA[name="${m}"]`
    );
    s = l.indexOf(m) < l.length - 1 ? r.querySelector(`DAType[id="${h?.getAttribute("type")}"]`) : h;
  }
  return !s || !s.getAttribute("bType") ? { cdc: c, bType: null } : { bType: s.getAttribute("bType"), cdc: c };
}
function Rl(e) {
  const [t, i] = ["doName", "daName"].map(
    (a) => e.getAttribute(a)
  );
  if (!t || !i) return { cdc: null, bType: null };
  const r = e.closest("IED"), n = Array.from(
    r?.querySelectorAll(
      `LDevice[inst="${e.getAttribute(
        "ldInst"
      )}"] > LN, LDevice[inst="${e.getAttribute("inst")}"] LN0`
    ) ?? []
  ).find((a) => (a.getAttribute("prefix") ?? "") === (e.getAttribute("prefix") ?? "") && (a.getAttribute("lnClass") ?? "") === (e.getAttribute("lnClass") ?? "") && (a.getAttribute("inst") ?? "") === (e.getAttribute("lnInst") ?? ""));
  return n ? Dr(n, t, i) : { cdc: null, bType: null };
}
function Ol(e) {
  const [t, i, r] = ["pLN", "pDO", "pDA"].map(
    (a) => e.getAttribute(a)
  );
  if (!t || !i || !r) return { cdc: null, bType: null };
  const n = Array.from(
    e.closest("IED")?.querySelectorAll(`LN[lnClass="${t}"],LN0[lnClass="${t}"]`) ?? []
  );
  for (const a of n) {
    const s = Dr(a, i, r);
    if (s.cdc !== null && s.bType !== null) return s;
  }
  return { cdc: null, bType: null };
}
function Fe(e, t, i) {
  return (e?.getAttribute(i) ?? "") === (t?.getAttribute(i) ?? "");
}
function Ge(e, t, i, r) {
  return (e?.getAttribute(t) ?? "") === (i?.getAttribute(r) ?? "");
}
function Fl(e, t, i) {
  if (Ot(i.ownerDocument) === "2003")
    return !0;
  const r = t?.closest("LDevice") ?? void 0, n = t?.closest("LN0") ?? void 0, a = !i.hasAttribute("srcLNClass"), c = n?.getAttribute("lnClass") === "LLN0" && a;
  return (i.getAttribute("serviceType") ?? "") === ct[e] && Ge(
    i,
    "srcLDInst",
    r,
    "inst"
  ) && Ge(
    i,
    "scrPrefix",
    n,
    "prefix"
  ) && (c || Ge(
    i,
    "srcLNClass",
    n,
    "lnClass"
  )) && Ge(i, "srcLNInst", n, "inst") && Ge(
    i,
    "srcCBName",
    t,
    "name"
  );
}
function Ml(e, t, i, r) {
  return r.getAttribute("iedName") === i?.closest("IED")?.getAttribute("name") && Fe(i, r, "ldInst") && Fe(i, r, "prefix") && Fe(i, r, "lnClass") && Fe(i, r, "lnInst") && Fe(i, r, "doName") && Fe(i, r, "daName") && Fl(e, t, r);
}
function ql(e) {
  return e.hasAttribute("iedName") && e.hasAttribute("ldInst") && e.hasAttribute("prefix") && e.hasAttribute("lnClass") && e.hasAttribute("lnInst") && e.hasAttribute("doName") && e.hasAttribute("daName");
}
function $r(e, t, i) {
  return Array.from(e.querySelectorAll("ExtRef")).filter(
    (r) => i && r.hasAttribute("intAddr") || !i && !r.hasAttribute("intAddr")
  ).filter((r) => r.closest("IED") !== t?.closest("IED"));
}
function Lr(e, t, i, r, n) {
  return $r(
    e,
    i,
    n
  ).filter(
    (a) => Ml(t, r, i, a)
  );
}
var Hl = Object.defineProperty, Bl = Object.getOwnPropertyDescriptor, se = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Bl(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (n = (r ? s(t, i, n) : s(n)) || n);
  return r && n && Hl(t, i, n), n;
};
let X = class extends Ie {
  constructor() {
    super(), this.editCount = -1, this.extRefCounters = /* @__PURE__ */ new Map(), this.iconControlLookup = {
      SampledValueControl: Ma,
      GSEControl: Fa
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
      const r = Lr(
        this.doc.getRootNode(),
        this.controlTag,
        e,
        t,
        this.includeLaterBinding
      ).length;
      this.extRefCounters.set(i, r);
    }
    return this.extRefCounters.get(i);
  }
  openEditWizard(e) {
    const t = wl[this.controlTag].edit(e);
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
      Nl(
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
      <span>${yi(t)}</span>
      <span slot="secondary">${vi(t)}</span>
      <mwc-icon slot="graphic">subdirectory_arrow_right</mwc-icon>
      ${i !== 0 ? p`<span slot="meta">${i}</span>` : Me}
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
      ${o(`subscription.${this.controlTag}.controlBlockList.title`)}
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
          <span>${o("subscription.subscriber.subscribed")}</span>
        </mwc-check-list-item>
        <mwc-check-list-item
          class="filter-not-subscribed"
          left
          ?selected=${!this.hideNotSubscribed}
        >
          <span>${o("subscription.subscriber.notSubscribed")}</span>
        </mwc-check-list-item>
      </mwc-menu>
    </h1> `;
  }
  renderControls(e) {
    return p`<filtered-list class="control-block-list" activatable>
      ${e.filter((t) => this.getFcdaElements(t).length).map((t) => {
      const i = this.getFcdaElements(t), r = i.some(
        (s) => this.getExtRefCount(s, t) !== 0
      ), n = i.some(
        (s) => this.getExtRefCount(s, t) === 0
      );
      return p`
            <mwc-list-item
              noninteractive
              class="${Te({
        control: !0,
        "show-subscribed": r,
        "show-not-subscribed": n
      })}"
              graphic="icon"
              twoline
              hasMeta
              value="${N(t)}${i.map(
        (s) => `
                        ${yi(s)}
                        ${vi(s)}
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
                >${Vi(t)}
                ${Ce(t) ? p`${Ce(t)}` : Me}</span
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
      ${e ? this.renderControls(e) : p`<h4>${o("subscription.subscriber.notSubscribed")}</h4> `}
    </section>`;
  }
};
X.styles = pe`
    ${kr}

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
  z()
], X.prototype, "selectedControlElement", 2);
se([
  z()
], X.prototype, "selectedFcdaElement", 2);
se([
  z()
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
var Gl = Object.defineProperty, Wl = Object.getOwnPropertyDescriptor, Re = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Wl(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (n = (r ? s(t, i, n) : s(n)) || n);
  return r && n && Gl(t, i, n), n;
};
let ve = class extends Ie {
  constructor() {
    super(), this.editCount = -1, this.serviceTypeLookup = {
      GSEControl: "GOOSE",
      SampledValueControl: "SMV"
    };
    const e = this.closest(".container");
    e && (this.onFcdaSelectEvent = this.onFcdaSelectEvent.bind(this), e.addEventListener("fcda-select", this.onFcdaSelectEvent));
  }
  async onFcdaSelectEvent(e) {
    this.currentSelectedControlElement = e.detail.control, this.currentSelectedFcdaElement = e.detail.fcda, this.currentIedElement = this.currentSelectedFcdaElement ? this.currentSelectedFcdaElement.closest("IED") ?? void 0 : void 0;
  }
  /**
   * Check data consistency of source `FCDA` and sink `ExtRef` based on
   * `ExtRef`'s `pLN`, `pDO`, `pDA` and `pServT` attributes.
   * Consistent means `CDC` and `bType` of both ExtRef and FCDA is equal.
   * In case
   *  - `pLN`, `pDO`, `pDA` or `pServT` attributes are not present, allow subscribing
   *  - no CDC or bType can be extracted, do not allow subscribing
   *
   * @param extRef - The `ExtRef` Element to check against
   */
  unsupportedExtRefElement(e) {
    if (!e.hasAttribute("pLN") || !e.hasAttribute("pDO") || !e.hasAttribute("pDA") || !e.hasAttribute("pServT"))
      return !1;
    if (!this.currentSelectedFcdaElement) return !0;
    const t = Rl(this.currentSelectedFcdaElement), i = Ol(e);
    return t.cdc === null && i.cdc === null || t.bType === null && i.bType === null || ct[this.currentSelectedControlElement?.tagName ?? ""] !== e.getAttribute("pServT") ? !0 : t.cdc !== i.cdc || t.bType !== i.bType;
  }
  /**
   * Unsubscribing means removing a list of attributes from the ExtRef Element.
   *
   * @param extRefElement - The Ext Ref Element to clean from attributes.
   */
  unsubscribe(e) {
    if (!this.currentIedElement || !this.currentSelectedFcdaElement || !this.currentSelectedControlElement)
      return;
    const t = L(e, {
      iedName: null,
      ldInst: null,
      prefix: null,
      lnClass: null,
      lnInst: null,
      doName: null,
      daName: null,
      serviceType: null,
      srcLDInst: null,
      srcPrefix: null,
      srcLNClass: null,
      srcLNInst: null,
      srcCBName: null
    }), i = {
      old: { element: e },
      new: { element: t }
    }, r = e.closest("IED") || void 0, n = [];
    El(e) && n.push(
      ...Dl(
        this.currentSelectedControlElement,
        r
      )
    ), this.dispatchEvent(
      Xe({
        title: o("subscription.disconnect"),
        actions: [i, ...n]
      })
    ), this.dispatchEvent(
      gi(
        this.currentSelectedControlElement,
        this.currentSelectedFcdaElement
      )
    );
  }
  /**
   * Subscribing means copying a list of attributes from the FCDA Element (and others) to the ExtRef Element.
   *
   * @param extRefElement - The Ext Ref Element to add the attributes to.
   */
  subscribe(e) {
    if (!this.currentIedElement || !this.currentSelectedFcdaElement || !this.currentSelectedControlElement)
      return;
    const t = {
      actions: [],
      title: o("subscription.connect")
    }, i = {
      old: { element: e },
      new: {
        element: Vl(
          e,
          this.currentSelectedControlElement,
          this.currentSelectedFcdaElement
        )
      }
    };
    t.actions.push(i);
    const r = e.closest("IED") || void 0;
    t.actions.push(
      ...kl(
        this.currentSelectedControlElement,
        r
      )
    ), this.dispatchEvent(Xe(t)), this.dispatchEvent(
      gi(
        this.currentSelectedControlElement,
        this.currentSelectedFcdaElement
      )
    );
  }
  getSubscribedExtRefElements() {
    return Lr(
      this.doc.getRootNode(),
      this.controlTag,
      this.currentSelectedFcdaElement,
      this.currentSelectedControlElement,
      !0
    );
  }
  getAvailableExtRefElements() {
    return $r(
      this.doc.getRootNode(),
      this.currentSelectedFcdaElement,
      !0
    ).filter(
      (e) => !ql(e) && (!e.hasAttribute("serviceType") || e.getAttribute("serviceType") === this.serviceTypeLookup[this.controlTag])
    );
  }
  renderTitle() {
    return p`<h1>${o("subscription.laterBinding.extRefList.title")}</h1>`;
  }
  renderExtRefElement(e) {
    const t = zl(e);
    return p` <mwc-list-item
      graphic="large"
      ?hasMeta=${t !== null}
      twoline
      @click=${() => this.unsubscribe(e)}
      value="${N(e)}"
    >
      <span>
        ${e.getAttribute("intAddr")}
        ${Ce(e) ? p` (${Ce(e)})` : Me}
      </span>
      <span slot="secondary"
        >${N(e.parentElement)}${t !== null ? ` (${N(t)})` : ""}</span
      >
      <mwc-icon slot="graphic">swap_horiz</mwc-icon>
      ${t !== null ? p`<mwc-icon title="${N(t)}" slot="meta"
            >monitor_heart</mwc-icon
          >` : Me}
    </mwc-list-item>`;
  }
  renderSubscribedExtRefs() {
    const e = this.getSubscribedExtRefElements();
    return p`
      <mwc-list-item
        noninteractive
        value="${e.map(
      (t) => Ce(t) + " " + N(t)
    ).join(" ")}"
      >
        <span>${o("subscription.subscriber.subscribed")}</span>
      </mwc-list-item>
      <li divider role="separator"></li>
      ${e.length > 0 ? p`${e.map(
      (t) => this.renderExtRefElement(t)
    )}` : p`<mwc-list-item graphic="large" noninteractive>
            ${o("subscription.laterBinding.extRefList.noSubscribedExtRefs")}
          </mwc-list-item>`}
    `;
  }
  renderAvailableExtRefs() {
    const e = this.getAvailableExtRefElements();
    return p`
      <mwc-list-item
        noninteractive
        value="${e.map(
      (t) => Ce(t) + " " + N(t)
    ).join(" ")}"
      >
        <span> ${o("subscription.subscriber.availableToSubscribe")} </span>
      </mwc-list-item>
      <li divider role="separator"></li>
      ${e.length > 0 ? p`${e.map(
      (t) => p` <mwc-list-item
              graphic="large"
              ?disabled=${this.unsupportedExtRefElement(t)}
              twoline
              @click=${() => this.subscribe(t)}
              value="${N(t)}"
            >
              <span>
                ${t.getAttribute("intAddr")}
                ${Ce(t) ? p` (${Ce(t)})` : Me}
              </span>
              <span slot="secondary"
                >${N(t.parentElement)}</span
              >
              <mwc-icon slot="graphic">arrow_back</mwc-icon>
            </mwc-list-item>`
    )}` : p`<mwc-list-item graphic="large" noninteractive>
            ${o("subscription.laterBinding.extRefList.noAvailableExtRefs")}
          </mwc-list-item>`}
    `;
  }
  render() {
    return p` <section tabindex="0">
      ${this.currentSelectedControlElement && this.currentSelectedFcdaElement ? p`
            ${this.renderTitle()}
            <filtered-list>
              ${this.renderSubscribedExtRefs()} ${this.renderAvailableExtRefs()}
            </filtered-list>
          ` : p`
            <h1>${o("subscription.laterBinding.extRefList.noSelection")}</h1>
          `}
    </section>`;
  }
};
ve.styles = pe`
    ${kr}

    mwc-list-item.hidden[noninteractive] + li[divider] {
      display: none;
    }
  `;
Re([
  g({ attribute: !1 })
], ve.prototype, "doc", 2);
Re([
  g({ type: Number })
], ve.prototype, "editCount", 2);
Re([
  g()
], ve.prototype, "controlTag", 2);
Re([
  z()
], ve.prototype, "currentSelectedControlElement", 2);
Re([
  z()
], ve.prototype, "currentSelectedFcdaElement", 2);
Re([
  z()
], ve.prototype, "currentIedElement", 2);
ve = Re([
  le("extref-later-binding-list")
], ve);
var Ul = Object.defineProperty, zr = (e, t, i, r) => {
  for (var n = void 0, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (n = s(t, i, n) || n);
  return n && Ul(t, i, n), n;
};
class Tr extends Ie {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
  render() {
    return p`<div>
      <div class="container">
        <fcda-binding-list
          class="column"
          controlTag="SampledValueControl"
          .includeLaterBinding="${!0}"
          .editCount=${this.editCount} .doc="${this.doc}"
        >
        </fcda-binding-list>
        <extref-later-binding-list
          class="column"
          controlTag="SampledValueControl"
          .editCount=${this.editCount} .doc="${this.doc}"
        >
        </extref-later-binding-list>
      </div>
    </div>`;
  }
  static {
    this.styles = pe`
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
zr([
  g({ attribute: !1 })
], Tr.prototype, "doc");
zr([
  g({ type: Number })
], Tr.prototype, "editCount");
export {
  Tr as default
};
