import { LitElement as Ve, query as Z, property as v, state as L, html as h, css as ye, customElement as me, queryAsync as Gt, eventOptions as $i, queryAssignedNodes as Ut, unsafeCSS as zi } from "lit-element";
import { NodePart as Ri, AttributePart as Pi, directive as Wt, html as E, render as Oi } from "lit-html";
import "@material/mwc-fab";
import "@material/mwc-icon-button";
import { List as Fi } from "@material/mwc-list";
import "@material/mwc-formfield";
import { TextField as Vi } from "@material/mwc-textfield";
import { Select as Mi } from "@material/mwc-select";
import "@material/mwc-menu";
import "@material/mwc-switch";
import "@material/mwc-button";
const Hi = 1e3 * 60, et = "langChanged";
function Bi(t, e, i) {
  return Object.entries(tt(e || {})).reduce((n, [r, a]) => n.replace(new RegExp(`{{[  ]*${r}[  ]*}}`, "gm"), String(tt(a))), t);
}
function qi(t, e) {
  const i = t.split(".");
  let n = e.strings;
  for (; n != null && i.length > 0; )
    n = n[i.shift()];
  return n != null ? n.toString() : null;
}
function tt(t) {
  return typeof t == "function" ? t() : t;
}
const Gi = () => ({
  loader: () => Promise.resolve({}),
  empty: (t) => `[${t}]`,
  lookup: qi,
  interpolate: Bi,
  translationCache: {}
});
let _e = Gi();
function Ui(t) {
  return _e = Object.assign(Object.assign({}, _e), t);
}
function Wi(t) {
  window.dispatchEvent(new CustomEvent(et, { detail: t }));
}
function Ki(t, e, i = _e) {
  Wi({
    previousStrings: i.strings,
    previousLang: i.lang,
    lang: i.lang = t,
    strings: i.strings = e
  });
}
function ji(t, e) {
  const i = (n) => t(n.detail);
  return window.addEventListener(et, i, e), () => window.removeEventListener(et, i);
}
async function Xi(t, e = _e) {
  const i = await e.loader(t, e);
  e.translationCache = {}, Ki(t, i, e);
}
function l(t, e, i = _e) {
  let n = i.translationCache[t] || (i.translationCache[t] = i.lookup(t, i) || i.empty(t, i));
  return e = e != null ? tt(e) : null, e != null ? i.interpolate(n, e, i) : n;
}
function Kt(t) {
  return t instanceof Ri ? t.startNode.isConnected : t instanceof Pi ? t.committer.element.isConnected : t.element.isConnected;
}
function Zi(t) {
  for (const [e] of t)
    Kt(e) || t.delete(e);
}
function Qi(t) {
  "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t);
}
function Ji(t, e) {
  setInterval(() => Qi(() => Zi(t)), e);
}
const ut = /* @__PURE__ */ new Map();
function Yi() {
  ji((t) => {
    for (const [e, i] of ut)
      Kt(e) && jt(e, i, t);
  });
}
Yi();
Ji(ut, Hi);
function jt(t, e, i) {
  const n = e(i);
  t.value !== n && (t.setValue(n), t.commit());
}
Wt((t) => (e) => {
  ut.set(e, t), jt(e, t);
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
const Xt = /* @__PURE__ */ new WeakMap(), mt = (t) => (...e) => {
  const i = t(...e);
  return Xt.set(i, !0), i;
}, St = (t) => typeof t == "function" && Xt.has(t);
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
const Ze = {};
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
const en = (t) => t === null || !(typeof t == "object" || typeof t == "function");
class Me {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== Ze && (!en(e) || e !== this.value) && (this.value = e, St(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; St(this.value); ) {
      const e = this.value;
      this.value = Ze, e(this);
    }
    this.value !== Ze && this.committer.commit();
  }
}
class Zt extends Me {
}
let tn = !1;
(() => {
  try {
    const t = {
      get capture() {
        return tn = !0, !1;
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
var it = function(t, e) {
  return it = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, n) {
    i.__proto__ = n;
  } || function(i, n) {
    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (i[r] = n[r]);
  }, it(t, e);
};
function nn(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  it(t, e);
  function i() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
}
var De = function() {
  return De = Object.assign || function(e) {
    for (var i, n = 1, r = arguments.length; n < r; n++) {
      i = arguments[n];
      for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
    }
    return e;
  }, De.apply(this, arguments);
};
function b(t, e, i, n) {
  var r = arguments.length, a = r < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, i) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(t, e, i, n);
  else for (var o = t.length - 1; o >= 0; o--) (s = t[o]) && (a = (r < 3 ? s(a) : r > 3 ? s(e, i, a) : s(e, i)) || a);
  return r > 3 && a && Object.defineProperty(e, i, a), a;
}
function Ne(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, i = e && t[e], n = 0;
  if (i) return i.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
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
function rn(t, e) {
  var i = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return i.call(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const an = (t) => t.nodeType === Node.ELEMENT_NODE, Qt = () => {
}, sn = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", Qt, sn);
document.removeEventListener("x", Qt);
const Jt = (t = window.document) => {
  let e = t.activeElement;
  const i = [];
  if (!e)
    return i;
  for (; e && (i.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return i;
}, on = (t) => {
  const e = Jt();
  if (!e.length)
    return !1;
  const i = e[e.length - 1], n = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let r = [];
  const a = (s) => {
    r = s.composedPath();
  };
  return document.body.addEventListener("check-if-focused", a), i.dispatchEvent(n), document.body.removeEventListener("check-if-focused", a), r.indexOf(t) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ht extends Ve {
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
var cn = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, ln = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, At = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function dn(t, e, i) {
  if (!t)
    return { x: 0, y: 0 };
  var n = e.x, r = e.y, a = n + i.left, s = r + i.top, o, c;
  if (t.type === "touchstart") {
    var d = t;
    o = d.changedTouches[0].pageX - a, c = d.changedTouches[0].pageY - s;
  } else {
    var p = t;
    o = p.pageX - a, c = p.pageY - s;
  }
  return { x: o, y: c };
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
var xt = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], wt = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Le = [], pn = (
  /** @class */
  function(t) {
    nn(e, t);
    function e(i) {
      var n = t.call(this, De(De({}, e.defaultAdapter), i)) || this;
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
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return cn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ln;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return At;
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
      var i = this, n = this.supportsPressRipple();
      if (this.registerRootHandlers(n), n) {
        var r = e.cssClasses, a = r.ROOT, s = r.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.addClass(a), i.adapter.isUnbounded() && (i.adapter.addClass(s), i.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var i = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var n = e.cssClasses, r = n.ROOT, a = n.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.removeClass(r), i.adapter.removeClass(a), i.removeCssVars();
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
      var n = e.cssClasses.UNBOUNDED;
      i ? this.adapter.addClass(n) : this.adapter.removeClass(n);
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
      var n, r;
      if (i) {
        try {
          for (var a = Ne(xt), s = a.next(); !s.done; s = a.next()) {
            var o = s.value;
            this.adapter.registerInteractionHandler(o, this.activateHandler);
          }
        } catch (c) {
          n = { error: c };
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
    }, e.prototype.registerDeactivationHandlers = function(i) {
      var n, r;
      if (i.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var a = Ne(wt), s = a.next(); !s.done; s = a.next()) {
            var o = s.value;
            this.adapter.registerDocumentInteractionHandler(o, this.deactivateHandler);
          }
        } catch (c) {
          n = { error: c };
        } finally {
          try {
            s && !s.done && (r = a.return) && r.call(a);
          } finally {
            if (n) throw n.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var i, n;
      try {
        for (var r = Ne(xt), a = r.next(); !a.done; a = r.next()) {
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
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var i, n;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var r = Ne(wt), a = r.next(); !a.done; a = r.next()) {
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
    }, e.prototype.removeCssVars = function() {
      var i = this, n = e.strings, r = Object.keys(n);
      r.forEach(function(a) {
        a.indexOf("VAR_") === 0 && i.adapter.updateCssVariable(n[a], null);
      });
    }, e.prototype.activateImpl = function(i) {
      var n = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var r = this.activationState;
        if (!r.isActivated) {
          var a = this.previousActivationEvent, s = a && i !== void 0 && a.type !== i.type;
          if (!s) {
            r.isActivated = !0, r.isProgrammatic = i === void 0, r.activationEvent = i, r.wasActivatedByPointer = r.isProgrammatic ? !1 : i !== void 0 && (i.type === "mousedown" || i.type === "touchstart" || i.type === "pointerdown");
            var o = i !== void 0 && Le.length > 0 && Le.some(function(c) {
              return n.adapter.containsEventTarget(c);
            });
            if (o) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (Le.push(i.target), this.registerDeactivationHandlers(i)), r.wasElementMadeActive = this.checkElementMadeActive(i), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Le = [], !r.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (r.wasElementMadeActive = n.checkElementMadeActive(i), r.wasElementMadeActive && n.animateActivation()), r.wasElementMadeActive || (n.activationState = n.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var i = this, n = e.strings, r = n.VAR_FG_TRANSLATE_START, a = n.VAR_FG_TRANSLATE_END, s = e.cssClasses, o = s.FG_DEACTIVATION, c = s.FG_ACTIVATION, d = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var p = "", f = "";
      if (!this.adapter.isUnbounded()) {
        var u = this.getFgTranslationCoordinates(), A = u.startPoint, S = u.endPoint;
        p = A.x + "px, " + A.y + "px", f = S.x + "px, " + S.y + "px";
      }
      this.adapter.updateCssVariable(r, p), this.adapter.updateCssVariable(a, f), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(o), this.adapter.computeBoundingRect(), this.adapter.addClass(c), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, d);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, n = i.activationEvent, r = i.wasActivatedByPointer, a;
      r ? a = dn(n, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var i = this, n = e.cssClasses.FG_DEACTIVATION, r = this.activationState, a = r.hasDeactivationUXRun, s = r.isActivated, o = a || !s;
      o && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(n), this.fgDeactivationRemovalTimer = setTimeout(function() {
        i.adapter.removeClass(n);
      }, At.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var i = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(i), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var i = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return i.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var i = this, n = this.activationState;
      if (n.isActivated) {
        var r = De({}, n);
        n.isProgrammatic ? (requestAnimationFrame(function() {
          i.animateDeactivation(r);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          i.activationState.hasDeactivationUXRun = !0, i.animateDeactivation(r), i.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(i) {
      var n = i.wasActivatedByPointer, r = i.wasElementMadeActive;
      (n || r) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var i = this;
      this.frame = this.adapter.computeBoundingRect();
      var n = Math.max(this.frame.height, this.frame.width), r = function() {
        var s = Math.sqrt(Math.pow(i.frame.width, 2) + Math.pow(i.frame.height, 2));
        return s + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? n : r();
      var a = Math.floor(n * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var i = e.strings, n = i.VAR_FG_SIZE, r = i.VAR_LEFT, a = i.VAR_TOP, s = i.VAR_FG_SCALE;
      this.adapter.updateCssVariable(n, this.initialSize + "px"), this.adapter.updateCssVariable(s, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(r, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, e;
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
class un {
  constructor(e) {
    this.classes = /* @__PURE__ */ new Set(), this.changed = !1, this.element = e;
    const i = (e.getAttribute("class") || "").split(/\s+/);
    for (const n of i)
      this.classes.add(n);
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
const kt = /* @__PURE__ */ new WeakMap(), He = mt((t) => (e) => {
  if (!(e instanceof Me) || e instanceof Zt || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = e, { element: n } = i;
  let r = kt.get(e);
  r === void 0 && (n.setAttribute("class", i.strings.join(" ")), kt.set(e, r = /* @__PURE__ */ new Set()));
  const a = n.classList || new un(n);
  r.forEach((s) => {
    s in t || (a.remove(s), r.delete(s));
  });
  for (const s in t) {
    const o = t[s];
    o != r.has(s) && (o ? (a.add(s), r.add(s)) : (a.remove(s), r.delete(s)));
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
const Et = /* @__PURE__ */ new WeakMap(), mn = mt((t) => (e) => {
  if (!(e instanceof Me) || e instanceof Zt || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = e, { style: n } = i.element;
  let r = Et.get(e);
  r === void 0 && (n.cssText = i.strings.join(" "), Et.set(e, r = /* @__PURE__ */ new Set())), r.forEach((a) => {
    a in t || (r.delete(a), a.indexOf("-") === -1 ? n[a] = null : n.removeProperty(a));
  });
  for (const a in t)
    r.add(a), a.indexOf("-") === -1 ? n[a] = t[a] : n.setProperty(a, t[a]);
});
class P extends ht {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = pn;
  }
  get isActive() {
    return rn(this.parentElement || this, ":active");
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
    const e = this.activated && (this.primary || !this.accent), i = this.selected && (this.primary || !this.accent), n = {
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
    return h`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${He(n)}"
          style="${mn({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
b([
  Z(".mdc-ripple-surface")
], P.prototype, "mdcRoot", void 0);
b([
  v({ type: Boolean })
], P.prototype, "primary", void 0);
b([
  v({ type: Boolean })
], P.prototype, "accent", void 0);
b([
  v({ type: Boolean })
], P.prototype, "unbounded", void 0);
b([
  v({ type: Boolean })
], P.prototype, "disabled", void 0);
b([
  v({ type: Boolean })
], P.prototype, "activated", void 0);
b([
  v({ type: Boolean })
], P.prototype, "selected", void 0);
b([
  v({ type: Boolean })
], P.prototype, "internalUseStateLayerCustomProperties", void 0);
b([
  L()
], P.prototype, "hovering", void 0);
b([
  L()
], P.prototype, "bgFocused", void 0);
b([
  L()
], P.prototype, "fgActivation", void 0);
b([
  L()
], P.prototype, "fgDeactivation", void 0);
b([
  L()
], P.prototype, "fgScale", void 0);
b([
  L()
], P.prototype, "fgSize", void 0);
b([
  L()
], P.prototype, "translateStart", void 0);
b([
  L()
], P.prototype, "translateEnd", void 0);
b([
  L()
], P.prototype, "leftPos", void 0);
b([
  L()
], P.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const hn = ye`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let nt = class extends P {
};
nt.styles = [hn];
nt = b([
  me("mwc-ripple")
], nt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const he = (t) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e, i) => {
    if (e.constructor._observers) {
      if (!e.constructor.hasOwnProperty("_observers")) {
        const n = e.constructor._observers;
        e.constructor._observers = /* @__PURE__ */ new Map(), n.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (r, a) => e.constructor._observers.set(a, r)
        );
      }
    } else {
      e.constructor._observers = /* @__PURE__ */ new Map();
      const n = e.updated;
      e.updated = function(r) {
        n.call(this, r), r.forEach((a, s) => {
          const c = this.constructor._observers.get(s);
          c !== void 0 && c.call(this, this[s], a);
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
class ei {
  constructor(e) {
    this.startPress = (i) => {
      e().then((n) => {
        n && n.startPress(i);
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
class M extends Ve {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new ei(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const e = this.renderText(), i = this.graphic ? this.renderGraphic() : h``, n = this.hasMeta ? this.renderMeta() : h``;
    return h`
      ${this.renderRipple()}
      ${i}
      ${e}
      ${n}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? h`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? h`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return h`
      <span class="mdc-deprecated-list-item__graphic material-icons ${He(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return h`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return h`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return h`<slot></slot>`;
  }
  renderTwoline() {
    return h`
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
    const n = () => {
      window.removeEventListener(e, n), this.rippleHandlers.endPress();
    };
    window.addEventListener(e, n), this.rippleHandlers.startPress(i);
  }
  fireRequestSelected(e, i) {
    if (this.noninteractive)
      return;
    const n = new CustomEvent("request-selected", { bubbles: !0, composed: !0, detail: { source: i, selected: e } });
    this.dispatchEvent(n);
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
b([
  Z("slot")
], M.prototype, "slotElement", void 0);
b([
  Gt("mwc-ripple")
], M.prototype, "ripple", void 0);
b([
  v({ type: String })
], M.prototype, "value", void 0);
b([
  v({ type: String, reflect: !0 })
], M.prototype, "group", void 0);
b([
  v({ type: Number, reflect: !0 })
], M.prototype, "tabindex", void 0);
b([
  v({ type: Boolean, reflect: !0 }),
  he(function(t) {
    t ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], M.prototype, "disabled", void 0);
b([
  v({ type: Boolean, reflect: !0 })
], M.prototype, "twoline", void 0);
b([
  v({ type: Boolean, reflect: !0 })
], M.prototype, "activated", void 0);
b([
  v({ type: String, reflect: !0 })
], M.prototype, "graphic", void 0);
b([
  v({ type: Boolean })
], M.prototype, "multipleGraphics", void 0);
b([
  v({ type: Boolean })
], M.prototype, "hasMeta", void 0);
b([
  v({ type: Boolean, reflect: !0 }),
  he(function(t) {
    t ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], M.prototype, "noninteractive", void 0);
b([
  v({ type: Boolean, reflect: !0 }),
  he(function(t) {
    const e = this.getAttribute("role"), i = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (i && t ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(t, "property");
  })
], M.prototype, "selected", void 0);
b([
  L()
], M.prototype, "shouldRenderRipple", void 0);
b([
  L()
], M.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ti = ye`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let rt = class extends M {
};
rt.styles = [ti];
rt = b([
  me("mwc-list-item")
], rt);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function fn(t, e, i) {
  const n = t.constructor;
  if (!i) {
    const o = `__${e}`;
    if (i = n.getPropertyDescriptor(e, o), !i)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const r = i;
  let a = "";
  if (!r.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const s = {
    configurable: !0,
    enumerable: !0,
    set(o) {
      a === "" && (a = n.getPropertyOptions(e).attribute), this.hasAttribute(a) && this.removeAttribute(a), r.set.call(this, o);
    }
  };
  return r.get && (s.get = function() {
    return r.get.call(this);
  }), s;
}
function ft(t, e, i) {
  if (e !== void 0)
    return fn(t, e, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ii extends ht {
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
ii.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const Qe = /* @__PURE__ */ new WeakMap(), ge = mt((t) => (e) => {
  const i = Qe.get(e);
  if (t === void 0 && e instanceof Me) {
    if (i !== void 0 || !Qe.has(e)) {
      const n = e.committer.name;
      e.committer.element.removeAttribute(n);
    }
  } else t !== i && e.setValue(t);
  Qe.set(e, t);
});
class F extends ii {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new ei(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(e) {
    const i = e.get("indeterminate"), n = e.get("checked"), r = e.get("disabled");
    if (i !== void 0 || n !== void 0 || r !== void 0) {
      const a = this.calculateAnimationStateName(!!n, !!i, !!r), s = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${a}-${s}`;
    }
    super.update(e);
  }
  calculateAnimationStateName(e, i, n) {
    return n ? "disabled" : i ? "indeterminate" : e ? "checked" : "unchecked";
  }
  // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? h`<mwc-ripple
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
    }, n = this.indeterminate ? "mixed" : void 0;
    return h`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${He(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${ge(this.name)}"
              aria-checked="${ge(n)}"
              aria-label="${ge(this.ariaLabel)}"
              aria-labelledby="${ge(this.ariaLabelledBy)}"
              aria-describedby="${ge(this.ariaDescribedBy)}"
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
b([
  Z(".mdc-checkbox")
], F.prototype, "mdcRoot", void 0);
b([
  Z("input")
], F.prototype, "formElement", void 0);
b([
  v({ type: Boolean, reflect: !0 })
], F.prototype, "checked", void 0);
b([
  v({ type: Boolean })
], F.prototype, "indeterminate", void 0);
b([
  v({ type: Boolean, reflect: !0 })
], F.prototype, "disabled", void 0);
b([
  v({ type: String, reflect: !0 })
], F.prototype, "name", void 0);
b([
  v({ type: String })
], F.prototype, "value", void 0);
b([
  ft,
  v({ type: String, attribute: "aria-label" })
], F.prototype, "ariaLabel", void 0);
b([
  ft,
  v({ type: String, attribute: "aria-labelledby" })
], F.prototype, "ariaLabelledBy", void 0);
b([
  ft,
  v({ type: String, attribute: "aria-describedby" })
], F.prototype, "ariaDescribedBy", void 0);
b([
  v({ type: Boolean })
], F.prototype, "reducedTouchTarget", void 0);
b([
  L()
], F.prototype, "animationClass", void 0);
b([
  L()
], F.prototype, "shouldRenderRipple", void 0);
b([
  L()
], F.prototype, "focused", void 0);
b([
  L()
], F.prototype, "useStateLayerCustomProperties", void 0);
b([
  Gt("mwc-ripple")
], F.prototype, "ripple", void 0);
b([
  $i({ passive: !0 })
], F.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const bn = ye`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let at = class extends F {
};
at.styles = [bn];
at = b([
  me("mwc-checkbox")
], at);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Te extends M {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), n = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : h``, r = this.hasMeta && this.left ? this.renderMeta() : h``, a = this.renderRipple();
    return h`
      ${a}
      ${n}
      ${this.left ? "" : i}
      <span class=${He(e)}>
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
  async onChange(e) {
    const i = e.target;
    this.selected === i.checked || (this._skipPropRequest = !0, this.selected = i.checked, await this.updateComplete, this._skipPropRequest = !1);
  }
}
b([
  Z("slot")
], Te.prototype, "slotElement", void 0);
b([
  Z("mwc-checkbox")
], Te.prototype, "checkboxElement", void 0);
b([
  v({ type: Boolean })
], Te.prototype, "left", void 0);
b([
  v({ type: String, reflect: !0 })
], Te.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const gn = ye`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let we = class extends Te {
};
we.styles = [ti, gn];
we = b([
  me("mwc-check-list-item")
], we);
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
}, U = /* @__PURE__ */ new Set();
U.add(k.BACKSPACE);
U.add(k.ENTER);
U.add(k.SPACEBAR);
U.add(k.PAGE_UP);
U.add(k.PAGE_DOWN);
U.add(k.END);
U.add(k.HOME);
U.add(k.ARROW_LEFT);
U.add(k.ARROW_UP);
U.add(k.ARROW_RIGHT);
U.add(k.ARROW_DOWN);
U.add(k.DELETE);
U.add(k.ESCAPE);
U.add(k.TAB);
var Q = {
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
W.set(Q.BACKSPACE, k.BACKSPACE);
W.set(Q.ENTER, k.ENTER);
W.set(Q.SPACEBAR, k.SPACEBAR);
W.set(Q.PAGE_UP, k.PAGE_UP);
W.set(Q.PAGE_DOWN, k.PAGE_DOWN);
W.set(Q.END, k.END);
W.set(Q.HOME, k.HOME);
W.set(Q.ARROW_LEFT, k.ARROW_LEFT);
W.set(Q.ARROW_UP, k.ARROW_UP);
W.set(Q.ARROW_RIGHT, k.ARROW_RIGHT);
W.set(Q.ARROW_DOWN, k.ARROW_DOWN);
W.set(Q.DELETE, k.DELETE);
W.set(Q.ESCAPE, k.ESCAPE);
W.set(Q.TAB, k.TAB);
var fe = /* @__PURE__ */ new Set();
fe.add(k.PAGE_UP);
fe.add(k.PAGE_DOWN);
fe.add(k.END);
fe.add(k.HOME);
fe.add(k.ARROW_LEFT);
fe.add(k.ARROW_UP);
fe.add(k.ARROW_RIGHT);
fe.add(k.ARROW_DOWN);
function le(t) {
  var e = t.key;
  if (U.has(e))
    return e;
  var i = W.get(t.keyCode);
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
var de, ae, N = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
de = {}, de["" + N.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", de["" + N.LIST_ITEM_CLASS] = "mdc-list-item", de["" + N.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", de["" + N.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", de["" + N.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", de["" + N.ROOT] = "mdc-list";
var xe = (ae = {}, ae["" + N.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", ae["" + N.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", ae["" + N.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", ae["" + N.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", ae["" + N.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", ae["" + N.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", ae["" + N.ROOT] = "mdc-deprecated-list", ae), $e = {
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
    .` + N.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + N.LIST_ITEM_CLASS + ` a,
    .` + xe[N.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + xe[N.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + N.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + N.LIST_ITEM_CLASS + ` a,
    .` + N.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + N.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + xe[N.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + xe[N.LIST_ITEM_CLASS] + ` a,
    .` + xe[N.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + xe[N.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, K = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const st = (t, e) => t - e, yn = (t, e) => {
  const i = Array.from(t), n = Array.from(e), r = { added: [], removed: [] }, a = i.sort(st), s = n.sort(st);
  let o = 0, c = 0;
  for (; o < a.length || c < s.length; ) {
    const d = a[o], p = s[c];
    if (d === p) {
      o++, c++;
      continue;
    }
    if (d !== void 0 && (p === void 0 || d < p)) {
      r.removed.push(d), o++;
      continue;
    }
    if (p !== void 0 && (d === void 0 || p < d)) {
      r.added.push(p), c++;
      continue;
    }
  }
  return r;
}, vn = ["input", "button", "textarea", "select"];
function Ie(t) {
  return t instanceof Set;
}
const Je = (t) => {
  const e = t === K.UNSET_INDEX ? /* @__PURE__ */ new Set() : t;
  return Ie(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class bt extends Yt {
  constructor(e) {
    super(Object.assign(Object.assign({}, bt.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = K.UNSET_INDEX, this.focusedItemIndex_ = K.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return $e;
  }
  static get numbers() {
    return K;
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
        const n = i === K.UNSET_INDEX;
        this.selectedIndex_ = n ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
    } else if (Ie(i))
      if (i.size) {
        const n = Array.from(i).sort(st);
        this.selectedIndex_ = n[0];
      } else
        this.selectedIndex_ = K.UNSET_INDEX;
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
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(Je(e)) : this.setSingleSelectionAtIndex_(e));
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
  handleKeydown(e, i, n) {
    const r = le(e) === "ArrowLeft", a = le(e) === "ArrowUp", s = le(e) === "ArrowRight", o = le(e) === "ArrowDown", c = le(e) === "Home", d = le(e) === "End", p = le(e) === "Enter", f = le(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      a || d ? (e.preventDefault(), this.focusLastElement()) : (o || c) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let u = this.adapter.getFocusedElementIndex();
    if (u === -1 && (u = n, u < 0))
      return;
    let A;
    if (this.isVertical_ && o || !this.isVertical_ && s)
      this.preventDefaultEvent(e), A = this.focusNextElement(u);
    else if (this.isVertical_ && a || !this.isVertical_ && r)
      this.preventDefaultEvent(e), A = this.focusPrevElement(u);
    else if (c)
      this.preventDefaultEvent(e), A = this.focusFirstElement();
    else if (d)
      this.preventDefaultEvent(e), A = this.focusLastElement();
    else if ((p || f) && i) {
      const S = e.target;
      if (S && S.tagName === "A" && p)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(u, !0);
    }
    this.focusedItemIndex_ = u, A !== void 0 && (this.setTabindexAtIndex_(A), this.focusedItemIndex_ = A);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, i, n) {
    e !== K.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, i, n), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
  }
  /**
   * Focuses the next element on the list.
   */
  focusNextElement(e) {
    const i = this.adapter.getListItemCount();
    let n = e + 1;
    if (n >= i)
      if (this.wrapFocus_)
        n = 0;
      else
        return e;
    return this.adapter.focusItemAtIndex(n), n;
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
    const n = `${e.target.tagName}`.toLowerCase();
    vn.indexOf(n) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, i = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== K.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), i && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, i = !0) {
    const n = Je(this.selectedIndex_), r = yn(n, e);
    if (!(!r.removed.length && !r.added.length)) {
      for (const a of r.removed)
        i && this.adapter.setSelectedStateForElementIndex(a, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(a, !1);
      for (const a of r.added)
        i && this.adapter.setSelectedStateForElementIndex(a, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(a, !0);
      this.selectedIndex_ = e, this.adapter.notifySelected(e, r);
    }
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(e) {
    this.selectedIndex_ === K.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, $e.ARIA_CURRENT));
    const i = this.ariaCurrentAttrValue_ !== null, n = i ? $e.ARIA_CURRENT : $e.ARIA_SELECTED;
    this.selectedIndex_ !== K.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, n, "false");
    const r = i ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, n, r);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === K.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== K.UNSET_INDEX ? e = this.selectedIndex_ : Ie(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
  }
  isIndexValid_(e) {
    if (e instanceof Set) {
      if (!this.isMulti_)
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      if (e.size === 0)
        return !0;
      {
        let i = !1;
        for (const n of e)
          if (i = this.isIndexInRange_(n), i)
            break;
        return i;
      }
    } else if (typeof e == "number") {
      if (this.isMulti_)
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + e);
      return e === K.UNSET_INDEX || this.isIndexInRange_(e);
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
  setSelectedIndexOnAction_(e, i, n) {
    if (this.adapter.getDisabledStateForElementIndex(e))
      return;
    let r = e;
    this.isMulti_ && (r = /* @__PURE__ */ new Set([e])), this.isIndexValid_(r) && (this.isMulti_ ? this.toggleMultiAtIndex(e, n, i) : i || n ? this.setSingleSelectionAtIndex_(e, i) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(K.UNSET_INDEX), i && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, i, n = !0) {
    let r = !1;
    i === void 0 ? r = !this.adapter.getSelectedStateForElementIndex(e) : r = i;
    const a = Je(this.selectedIndex_);
    r ? a.add(e) : a.delete(e), this.setMultiSelectionAtIndex_(a, n);
  }
}
function Sn(t, e = 50) {
  let i;
  return function(n = !0) {
    clearTimeout(i), i = setTimeout(() => {
      t(n);
    }, e);
  };
}
const ze = (t) => t.hasAttribute("mwc-list-item");
function An() {
  const t = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), t();
}
class J extends ht {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = bt, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = Sn(this.layout.bind(this));
    this.debouncedLayout = (i = !0) => {
      An.call(this), e(i);
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
    const i = (e = this.assignedElements) !== null && e !== void 0 ? e : [], n = [];
    for (const s of i)
      ze(s) && (n.push(s), s._managingList = this), s.hasAttribute("divider") && !s.hasAttribute("role") && s.setAttribute("role", "separator");
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
    const e = this.index;
    if (!Ie(e))
      return e === -1 ? null : this.items[e];
    const i = [];
    for (const n of e)
      i.push(this.items[n]);
    return i;
  }
  get index() {
    return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
  }
  render() {
    const e = this.innerRole === null ? void 0 : this.innerRole, i = this.innerAriaLabel === null ? void 0 : this.innerAriaLabel, n = this.rootTabbable ? "0" : "-1";
    return h`
      <!-- @ts-ignore -->
      <ul
          tabindex=${n}
          role="${ge(e)}"
          aria-label="${ge(i)}"
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
    return this.emptyMessage !== void 0 && i.length === 0 ? h`
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
      const i = this.getIndexOfTarget(e), n = e.target, r = ze(n);
      this.mdcFoundation.handleKeydown(e, r, i);
    }
  }
  onRequestSelected(e) {
    if (this.mdcFoundation) {
      let i = this.getIndexOfTarget(e);
      if (i === -1 && (this.layout(), i = this.getIndexOfTarget(e), i === -1) || this.items[i].disabled)
        return;
      const r = e.detail.selected, a = e.detail.source;
      this.mdcFoundation.handleSingleSelection(i, a === "interaction", r), e.stopPropagation();
    }
  }
  getIndexOfTarget(e) {
    const i = this.items, n = e.composedPath();
    for (const r of n) {
      let a = -1;
      if (an(r) && ze(r) && (a = i.indexOf(r)), a !== -1)
        return a;
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
        const r = this.items[e];
        return r ? r.getAttribute(i) : "";
      },
      setAttributeForElementIndex: (e, i, n) => {
        if (!this.mdcRoot)
          return;
        const r = this.items[e];
        r && r.setAttribute(i, n);
      },
      focusItemAtIndex: (e) => {
        const i = this.items[e];
        i && i.focus();
      },
      setTabIndexForElementIndex: (e, i) => {
        const n = this.items[e];
        n && (n.tabindex = i);
      },
      notifyAction: (e) => {
        const i = { bubbles: !0, composed: !0 };
        i.detail = { index: e };
        const n = new CustomEvent("action", i);
        this.dispatchEvent(n);
      },
      notifySelected: (e, i) => {
        const n = { bubbles: !0, composed: !0 };
        n.detail = { index: e, diff: i };
        const r = new CustomEvent("selected", n);
        this.dispatchEvent(r);
      },
      isFocusInsideList: () => on(this),
      isRootFocused: () => {
        const e = this.mdcRoot;
        return e.getRootNode().activeElement === e;
      },
      setDisabledStateForElementIndex: (e, i) => {
        const n = this.items[e];
        n && (n.disabled = i);
      },
      getDisabledStateForElementIndex: (e) => {
        const i = this.items[e];
        return i ? i.disabled : !1;
      },
      setSelectedStateForElementIndex: (e, i) => {
        const n = this.items[e];
        n && (n.selected = i);
      },
      getSelectedStateForElementIndex: (e) => {
        const i = this.items[e];
        return i ? i.selected : !1;
      },
      setActivatedStateForElementIndex: (e, i) => {
        const n = this.items[e];
        n && (n.activated = i);
      }
    }, this.mdcAdapter;
  }
  selectUi(e, i = !1) {
    const n = this.items[e];
    n && (n.selected = !0, n.activated = i);
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
    for (const n of this.items)
      n.tabindex = -1;
    i && (this.noninteractive ? this.previousTabindex || (this.previousTabindex = i) : i.tabindex = 0), this.itemsReadyResolver();
  }
  getFocusedItemIndex() {
    if (!this.mdcRoot || !this.items.length)
      return -1;
    const e = Jt();
    if (!e.length)
      return -1;
    for (let i = e.length - 1; i >= 0; i--) {
      const n = e[i];
      if (ze(n))
        return this.items.indexOf(n);
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
b([
  v({ type: String })
], J.prototype, "emptyMessage", void 0);
b([
  Z(".mdc-deprecated-list")
], J.prototype, "mdcRoot", void 0);
b([
  Ut("", !0, "*")
], J.prototype, "assignedElements", void 0);
b([
  Ut("", !0, '[tabindex="0"]')
], J.prototype, "tabbableElements", void 0);
b([
  v({ type: Boolean }),
  he(function(t) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(t);
  })
], J.prototype, "activatable", void 0);
b([
  v({ type: Boolean }),
  he(function(t, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(t), e !== void 0 && this.layout();
  })
], J.prototype, "multi", void 0);
b([
  v({ type: Boolean }),
  he(function(t) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(t);
  })
], J.prototype, "wrapFocus", void 0);
b([
  v({ type: String }),
  he(function(t, e) {
    e !== void 0 && this.updateItems();
  })
], J.prototype, "itemRoles", void 0);
b([
  v({ type: String })
], J.prototype, "innerRole", void 0);
b([
  v({ type: String })
], J.prototype, "innerAriaLabel", void 0);
b([
  v({ type: Boolean })
], J.prototype, "rootTabbable", void 0);
b([
  v({ type: Boolean, reflect: !0 }),
  he(function(t) {
    var e, i;
    if (t) {
      const n = (i = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && i !== void 0 ? i : null;
      this.previousTabindex = n, n && n.setAttribute("tabindex", "-1");
    } else !t && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], J.prototype, "noninteractive", void 0);
var xn = Object.defineProperty, wn = Object.getOwnPropertyDescriptor, ve = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? wn(e, i) : e, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (r = (n ? s(e, i, r) : s(r)) || r);
  return n && r && xn(e, i, r), r;
};
function ot(t) {
  return !t.closest("filtered-list") || !t.parentElement || t.parentElement instanceof ne ? t : ot(t.parentElement);
}
function kn(t, e) {
  const i = t.innerText + `
`, n = Array.from(t.children).map((o) => o.innerText).join(`
`), r = t.value, a = (i + n + r).toUpperCase(), s = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  s.length === 1 && s[0] === "" || s.every((o) => new RegExp(
    `*${o}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(a)) ? ot(t).classList.remove("hidden") : ot(t).classList.add("hidden");
}
let ne = class extends J {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((t) => t instanceof we);
  }
  get isAllSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof we).every((t) => t.selected);
  }
  get isSomeSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof we).some((t) => t.selected);
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
      (t) => kn(t, this.searchField.value)
    );
  }
  onListItemConnected(t) {
    super.onListItemConnected(t), this.requestUpdate();
  }
  update(t) {
    super.update(t), this.onFilterInput();
  }
  renderCheckAll() {
    return this.existCheckListItem && !this.disableCheckAll ? h`<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
      this.onCheckAll();
    }}
          ></mwc-checkbox
        ></mwc-formfield>` : h``;
  }
  render() {
    return h`<div id="tfcontainer">
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
ne.styles = ye`
    ${zi(Fi.styles)}

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
ve([
  v({ type: String })
], ne.prototype, "searchFieldLabel", 2);
ve([
  v({ type: Boolean })
], ne.prototype, "disableCheckAll", 2);
ve([
  L()
], ne.prototype, "existCheckListItem", 1);
ve([
  L()
], ne.prototype, "isAllSelected", 1);
ve([
  L()
], ne.prototype, "isSomeSelected", 1);
ve([
  Z("mwc-textfield")
], ne.prototype, "searchField", 2);
ne = ve([
  me("filtered-list")
], ne);
function j(t, e, i) {
  const n = t.createElementNS(t.documentElement.namespaceURI, e);
  return Object.entries(i).filter(([r, a]) => a !== null).forEach(([r, a]) => n.setAttribute(r, a)), n;
}
function oe(t, e) {
  const i = t.cloneNode(!1);
  return Object.entries(e).forEach(([n, r]) => {
    r === null ? i.removeAttribute(n) : i.setAttribute(n, r);
  }), i;
}
function En(t, e) {
  return t ? Array.from(t.children).filter(
    (i) => i.tagName === e
  ) : [];
}
var Cn = Object.defineProperty, Dn = Object.getOwnPropertyDescriptor, ee = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Dn(e, i) : e, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (r = (n ? s(e, i, r) : s(r)) || r);
  return n && r && Cn(e, i, r), r;
};
let X = class extends Vi {
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
    return this.reservedValues && this.reservedValues.some((t) => t === this.value) ? (this.setCustomValidity(l("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? h`<div style="position:relative;">
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
      </div>` : h``;
  }
  renderMulplierList() {
    return h`${this.multipliers.map(
      (t) => h`<mwc-list-item ?selected=${t === this.multiplier}
          >${t === null ? l("textfield.noMultiplier") : t}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? h`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : h``;
  }
  render() {
    return h`
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
  v({ type: Boolean })
], X.prototype, "nullable", 2);
ee([
  v({ type: Array })
], X.prototype, "multipliers", 2);
ee([
  v({ type: String })
], X.prototype, "multiplier", 1);
ee([
  v({ type: String })
], X.prototype, "unit", 2);
ee([
  L()
], X.prototype, "null", 1);
ee([
  v({ type: String })
], X.prototype, "maybeValue", 1);
ee([
  v({ type: String })
], X.prototype, "defaultValue", 2);
ee([
  v({ type: Array })
], X.prototype, "reservedValues", 2);
ee([
  Z("mwc-switch")
], X.prototype, "nullSwitch", 2);
ee([
  Z("mwc-menu")
], X.prototype, "multiplierMenu", 2);
ee([
  Z("mwc-icon-button")
], X.prototype, "multiplierButton", 2);
X = ee([
  me("wizard-textfield")
], X);
var In = Object.defineProperty, _n = Object.getOwnPropertyDescriptor, Se = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? _n(e, i) : e, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (r = (n ? s(e, i, r) : s(r)) || r);
  return n && r && In(e, i, r), r;
};
let se = class extends Mi {
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
    return this.nullable ? h`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : h``;
  }
  render() {
    return h`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
Se([
  v({ type: Boolean })
], se.prototype, "nullable", 2);
Se([
  L()
], se.prototype, "null", 1);
Se([
  v({ type: String })
], se.prototype, "maybeValue", 1);
Se([
  v({ type: String })
], se.prototype, "defaultValue", 2);
Se([
  v({ type: Array })
], se.prototype, "reservedValues", 2);
Se([
  Z("mwc-switch")
], se.prototype, "nullSwitch", 2);
se = Se([
  me("wizard-select")
], se);
var Tn = Object.defineProperty, Nn = Object.getOwnPropertyDescriptor, Y = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Nn(e, i) : e, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (r = (n ? s(e, i, r) : s(r)) || r);
  return n && r && Tn(e, i, r), r;
};
let G = class extends Ve {
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
    return this.nullable ? h`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : h``;
  }
  render() {
    return h`
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
Y([
  v({ type: String })
], G.prototype, "label", 2);
Y([
  v({ type: String })
], G.prototype, "helper", 2);
Y([
  v({ type: Boolean })
], G.prototype, "nullable", 2);
Y([
  v({ type: Boolean })
], G.prototype, "defaultChecked", 2);
Y([
  v({ type: String })
], G.prototype, "maybeValue", 1);
Y([
  v({ type: Boolean })
], G.prototype, "disabled", 2);
Y([
  L()
], G.prototype, "null", 1);
Y([
  L()
], G.prototype, "checked", 1);
Y([
  L()
], G.prototype, "deactivateCheckbox", 2);
Y([
  L()
], G.prototype, "formfieldLabel", 1);
Y([
  Z("mwc-switch")
], G.prototype, "nullSwitch", 2);
Y([
  Z("mwc-checkbox")
], G.prototype, "checkbox", 2);
G = Y([
  me("wizard-checkbox")
], G);
function Ln(t) {
  return typeof t == "function";
}
function m(t) {
  return t instanceof X || t instanceof se || t instanceof G ? t.maybeValue : t.value ?? null;
}
function V(t, e) {
  if (!t)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const i = Ln(t) ? t : () => t;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: i, ...e?.detail }
  });
}
function ce(t) {
  return V(t, { detail: { subwizard: !0 } });
}
function q(t) {
  const e = t.split(">"), i = e.pop() ?? "";
  return [e.join(">"), i];
}
const z = ":not(*)";
function $n(t) {
  return `${t.getAttribute("version")}	${t.getAttribute("revision")}`;
}
function zn(t, e) {
  const [i, n] = e.split("	");
  return !i || !n ? z : `${t}[version="${i}"][revision="${n}"]`;
}
function Ct(t) {
  return T(t.parentElement) + ">" + t.getAttribute("connectivityNode");
}
function Dt(t, e) {
  const [i, n] = q(e), r = R[t].parents.flatMap(
    (a) => H(a, i).split(",")
  );
  return B(
    r,
    [">"],
    [`${t}[connectivityNode="${n}"]`]
  ).map((a) => a.join("")).join(",");
}
function Rn(t) {
  const [e, i, n, r, a, s] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((o) => t.getAttribute(o));
  return e === "None" ? `${T(t.parentElement)}>(${r} ${s} ${a})` : `${e} ${i || "(Client)"}/${n ?? ""} ${r} ${a ?? ""}`;
}
function Pn(t, e) {
  if (e.endsWith(")")) {
    const [u, A] = q(e), [S, _, I] = A.substring(1, A.length - 1).split(" ");
    if (!S || !_) return z;
    const x = R[t].parents.flatMap(
      (w) => H(w, u).split(",")
    );
    return B(
      x,
      [">"],
      [`${t}[iedName="None"][lnClass="${S}"][lnType="${_}"][lnInst="${I}"]`]
    ).map((w) => w.join("")).join(",");
  }
  const [i, n, r, a, s] = e.split(/[ /]/);
  if (!i || !n || !a) return z;
  const [
    o,
    c,
    d,
    p,
    f
  ] = [
    [`[iedName="${i}"]`],
    n === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${n}"]`],
    r ? [`[prefix="${r}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    s ? [`[lnInst="${s}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return B(
    [t],
    o,
    c,
    d,
    p,
    f
  ).map((u) => u.join("")).join(",");
}
function On(t) {
  return `${T(t.parentElement)}>${t.getAttribute(
    "iedName"
  )} ${t.getAttribute("apName")}`;
}
function Fn(t, e) {
  const [i, n] = q(e), [r, a] = n.split(" ");
  return `${H(
    "IED",
    i
  )}>${t}[iedName="${r}"][apName="${a}"]`;
}
function Vn(t) {
  return `${T(t.parentElement)}>${t.getAttribute("associationID") ?? ""}`;
}
function Mn(t, e) {
  const [i, n] = q(e);
  return n ? `${H(
    "Server",
    i
  )}>${t}[associationID="${n}"]` : z;
}
function Hn(t) {
  return `${T(t.closest("IED"))}>>${t.getAttribute("inst")}`;
}
function Bn(t, e) {
  const [i, n] = e.split(">>");
  return n ? `IED[name="${i}"] ${t}[inst="${n}"]` : z;
}
function qn(t) {
  const e = t.textContent, [i, n, r, a, s] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => t.getAttribute(o));
  return `${T(t.parentElement)}>${e} ${i || ""} ${n || ""}/${r ?? ""} ${a ?? ""} ${s ?? ""}`;
}
function Gn(t, e) {
  const [i, n] = q(e), [r, a, s, o, c, d] = n.split(/[ /]/), [
    p,
    f,
    u,
    A,
    S,
    _
  ] = [
    R[t].parents.flatMap(
      (I) => H(I, i).split(",")
    ),
    [`${r}`],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    d ? [`[lnInst="${d}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return B(
    p,
    [">"],
    [t],
    f,
    u,
    A,
    S,
    _
  ).map((I) => I.join("")).join(",");
}
function Un(t) {
  const [e, i, n, r, a, s, o, c] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((p) => t.getAttribute(p)), d = `${e}/${i ?? ""} ${n} ${r ?? ""}.${a} ${s || ""}`;
  return `${T(t.parentElement)}>${d} (${o}${c ? " [" + c + "]" : ""})`;
}
function Wn(t, e) {
  const [i, n] = q(e), [r, a, s, o] = n.split(/[ /.]/), c = n.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), d = c && c[1] ? c[1] : "", p = c && c[2] ? c[2] : "", f = n.match(/\(([A-Z]{2})/), u = n.match(/ \[([0-9]{1,2})\]/), A = f && f[1] ? f[1] : "", S = u && u[1] ? u[1] : "", [
    _,
    I,
    x,
    w,
    ke,
    We,
    Ke,
    je,
    Xe
  ] = [
    R[t].parents.flatMap(
      (Ee) => H(Ee, i).split(",")
    ),
    [`[ldInst="${r}"]`],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    o ? [`[lnInst="${o}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${d}"]`],
    p ? [`[daName="${p}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${A}"]`],
    S ? [`[ix="${S}"]`] : [":not([ix])", '[ix=""]']
  ];
  return B(
    _,
    [">"],
    [t],
    I,
    x,
    w,
    ke,
    We,
    Ke,
    je,
    Xe
  ).map((Ee) => Ee.join("")).join(",");
}
function Kn(t) {
  if (!t.parentElement) return NaN;
  const e = T(t.parentElement), i = t.getAttribute("iedName"), n = t.getAttribute("intAddr"), r = Array.from(
    t.parentElement.querySelectorAll(`ExtRef[intAddr="${n}"]`)
  ).indexOf(t);
  if (n) return `${e}>${n}[${r}]`;
  const [
    a,
    s,
    o,
    c,
    d,
    p,
    f,
    u,
    A,
    S,
    _,
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
  ].map((ke) => t.getAttribute(ke)), x = I ? `${f}:${I} ${u ?? ""}/${A ?? ""} ${S ?? ""} ${_ ?? ""}` : "", w = `${i} ${a}/${s ?? ""} ${o} ${c ?? ""} ${d} ${p || ""}`;
  return `${e}>${x ? x + " " : ""}${w}${n ? `@${n}` : ""}`;
}
function jn(t, e) {
  const [i, n] = q(e), r = R[t].parents.flatMap(
    (Ce) => H(Ce, i).split(",")
  );
  if (n.endsWith("]")) {
    const [Ce] = n.split("["), Ni = [`[intAddr="${Ce}"]`];
    return B(r, [">"], [t], Ni).map((Li) => Li.join("")).join(",");
  }
  let a, s, o, c, d, p, f, u, A, S, _, I, x, w;
  !n.includes(":") && !n.includes("@") ? [a, s, o, c, d, p, f] = n.split(/[ /]/) : n.includes(":") && !n.includes("@") ? [
    u,
    A,
    S,
    _,
    I,
    x,
    a,
    s,
    o,
    c,
    d,
    p,
    f
  ] = n.split(/[ /:]/) : !n.includes(":") && n.includes("@") ? [a, s, o, c, d, p, f, w] = n.split(/[ /@]/) : [
    u,
    A,
    S,
    _,
    I,
    x,
    a,
    s,
    o,
    c,
    d,
    p,
    f,
    w
  ] = n.split(/[ /:@]/);
  const [
    ke,
    We,
    Ke,
    je,
    Xe,
    Ee,
    wi,
    ki,
    Ei,
    Ci,
    Di,
    Ii,
    _i,
    Ti
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])"],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    c ? [`[lnClass="${c}"]`] : [":not([lnClass])"],
    d ? [`[lnInst="${d}"]`] : [":not([lnInst])", '[lnInst=""]'],
    p ? [`[doName="${p}"]`] : [":not([doName])"],
    f ? [`[daName="${f}"]`] : [":not([daName])", '[daName=""]'],
    u ? [`[serviceType="${u}"]`] : [":not([serviceType])", '[serviceType=""]'],
    A ? [`[srcCBName="${A}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    S ? [`[srcLDInst="${S}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    _ ? [`[srcPrefix="${_}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    I ? [`[srcLNClass="${I}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    x ? [`[srcLNInst="${x}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    w ? [`[intAddr="${w}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return B(
    r,
    [">"],
    [t],
    ke,
    We,
    Ke,
    je,
    Xe,
    Ee,
    wi,
    ki,
    Ei,
    Ci,
    Di,
    Ii,
    _i,
    Ti
  ).map((Ce) => Ce.join("")).join(",");
}
function Xn(t) {
  const [e, i, n] = ["prefix", "lnClass", "inst"].map(
    (r) => t.getAttribute(r)
  );
  return `${T(t.parentElement)}>${e ?? ""} ${i} ${n}`;
}
function Zn(t, e) {
  const [i, n] = q(e), r = R[t].parents.flatMap(
    (f) => H(f, i).split(",")
  ), [a, s, o] = n.split(" ");
  if (!s) return z;
  const [c, d, p] = [
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    [`[inst="${o}"]`]
  ];
  return B(
    r,
    [">"],
    [t],
    c,
    d,
    p
  ).map((f) => f.join("")).join(",");
}
function Qn(t) {
  const [e, i, n, r, a, s] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => t.getAttribute(o));
  return `${T(t.parentElement)}>${i} ${e || ""} ${n}/${r ?? ""} ${a} ${s}`;
}
function Jn(t, e) {
  const [i, n] = q(e), r = R[t].parents.flatMap(
    (x) => H(x, i).split(",")
  ), [a, s, o, c, d, p] = n.split(/[ /]/), [
    f,
    u,
    A,
    S,
    _,
    I
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])", '[iedName=""]'],
    s ? [`[apRef="${s}"]`] : [":not([apRef])", '[apRef=""]'],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${d}"]`],
    p ? [`[lnInst="${p}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return B(
    r,
    [">"],
    [t],
    f,
    u,
    A,
    S,
    _,
    I
  ).map((x) => x.join("")).join(",");
}
function It(t) {
  const [e, i] = ["name", "ix"].map((n) => t.getAttribute(n));
  return `${T(t.parentElement)}>${e}${i ? "[" + i + "]" : ""}`;
}
function ct(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [n, r] = q(e), [a, s, o, c] = r.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!s) return z;
  if (i === 0) return `${t}[name="${s}"]`;
  const d = R[t].parents.flatMap(
    (u) => u === "SDI" ? ct(u, n, i - 1).split(",") : H(u, n).split(",")
  ).filter((u) => !u.startsWith(z));
  if (d.length === 0) return z;
  const [p, f] = [
    [`[name="${s}"]`],
    c ? [`[ix="${c}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return B(
    d,
    [">"],
    [t],
    p,
    f
  ).map((u) => u.join("")).join(",");
}
function Yn(t) {
  if (!t.parentElement) return NaN;
  const e = t.getAttribute("sGroup"), i = Array.from(t.parentElement.children).filter((n) => n.getAttribute("sGroup") === e).findIndex((n) => n.isSameNode(t));
  return `${T(t.parentElement)}>${e ? e + "." : ""} ${i}`;
}
function er(t, e) {
  const [i, n] = q(e), [r, a] = n.split(" "), s = parseFloat(a), o = R[t].parents.flatMap(
    (p) => H(p, i).split(",")
  ), [c, d] = [
    r ? [`[sGroup="${r}"]`] : [""],
    s ? [`:nth-child(${s + 1})`] : [""]
  ];
  return B(
    o,
    [">"],
    [t],
    c,
    d
  ).map((p) => p.join("")).join(",");
}
function tr(t) {
  const [e, i] = ["iedName", "apName"].map(
    (n) => t.getAttribute(n)
  );
  return `${e} ${i}`;
}
function ir(t, e) {
  const [i, n] = e.split(" ");
  return !i || !n ? z : `${t}[iedName="${i}"][apName="${n}"]`;
}
function _t(t) {
  const [e, i] = ["ldInst", "cbName"].map(
    (n) => t.getAttribute(n)
  );
  return `${e} ${i}`;
}
function Tt(t, e) {
  const [i, n] = e.split(" ");
  return !i || !n ? z : `${t}[ldInst="${i}"][cbName="${n}"]`;
}
function nr(t) {
  if (!t.parentElement) return NaN;
  if (!t.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = t.getAttribute("type");
  return t.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${T(t.parentElement)}>${e}`;
}
function rr(t, e) {
  const [i, n] = q(e), [r, a] = [
    R[t].parents.flatMap(
      (s) => H(s, i).split(",")
    ),
    n ? [`[type="${n}"]`] : [""]
  ];
  return B(r, [">"], [t], a).map((s) => s.join("")).join(",");
}
function ar(t) {
  if (!t.parentElement) return NaN;
  const e = t.parentElement, i = t.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${T(t.parentElement)}>${i}`;
  const n = Array.from(t.parentElement.children).filter((r) => r.getAttribute("type") === i).findIndex((r) => r.isSameNode(t));
  return `${T(t.parentElement)}>${i} [${n}]`;
}
function sr(t, e) {
  const [i, n] = q(e), [r] = n.split(" "), a = n && n.match(/\[([0-9]+)\]/) && n.match(/\[([0-9]+)\]/)[1] ? parseFloat(n.match(/\[([0-9]+)\]/)[1]) : NaN, [s, o, c] = [
    R[t].parents.flatMap(
      (d) => H(d, i).split(",")
    ),
    [`[type="${r}"]`],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return B(
    s,
    [">"],
    [t],
    o,
    c
  ).map((d) => d.join("")).join(",");
}
function or(t) {
  return `${T(t.parentElement)}>${t.getAttribute("ord")}`;
}
function cr(t, e) {
  const [i, n] = q(e);
  return `${H("EnumType", i)}>${t}[ord="${n}"]`;
}
function lr(t) {
  return `${T(t.parentElement)}>${t.getAttribute("type") || "8-MMS"}	${t.textContent}`;
}
function dr(t, e) {
  const [i, n] = q(e), [r, a] = n.split("	"), [s] = [
    R[t].parents.flatMap(
      (o) => H(o, i).split(",")
    )
  ];
  return B(
    s,
    [">"],
    [t],
    [`[type="${r}"]`],
    [">"],
    [a]
  ).map((o) => o.join("")).join(",");
}
function pr() {
  return "";
}
function ur() {
  return ":root";
}
function D(t) {
  return t.parentElement.tagName === "SCL" ? t.getAttribute("name") : `${T(t.parentElement)}>${t.getAttribute("name")}`;
}
function C(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [n, r] = q(e);
  if (!r) return z;
  if (i === 0) return `${t}[name="${r}"]`;
  const a = R[t].parents;
  if (!a) return z;
  const s = a.flatMap(
    (o) => R[o].selector === R.Substation.selector ? C(o, n, i - 1).split(",") : H(o, n).split(",")
  ).filter((o) => !o.startsWith(z));
  return s.length === 0 ? z : B(s, [">"], [t], [`[name="${r}"]`]).map((o) => o.join("")).join(",");
}
function g(t) {
  return T(t.parentElement).toString();
}
function y(t, e) {
  const i = R[t].parents;
  if (!i) return z;
  const n = i.flatMap((r) => H(r, e).split(",")).filter((r) => !r.startsWith(z));
  return n.length === 0 ? z : B(n, [">"], [t]).map((r) => r.join("")).join(",");
}
function Re(t) {
  return `#${t.id}`;
}
function Pe(t, e) {
  const i = e.replace(/^#/, "");
  return i ? `${t}[id="${i}"]` : z;
}
const ni = [
  "TransformerWinding",
  "ConductingEquipment"
], ri = [
  "GeneralEquipment",
  "PowerTransformer",
  ...ni
], lt = ["Substation", "VoltageLevel", "Bay"], ai = ["Process", "Line"], si = ["EqSubFunction", "EqFunction"], mr = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...ri,
  ...lt,
  ...ai,
  ...si
], oi = ["ConnectivityNode", ...mr], hr = ["GOOSESecurity", "SMVSecurity"], fr = ["SubNetwork", ...hr, ...oi], br = ["BDA", "DA"], gr = ["SampledValueControl", "GSEControl"], yr = ["LogControl", "ReportControl"], vr = [...gr, ...yr], Sr = ["GSE", "SMV"], Ar = [
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
  ...vr,
  ...Sr,
  ...br
], be = ["LN0", "LN"], xr = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], wr = ["Subject", "IssuerName"], kr = ["MinTime", "MaxTime"], Er = ["LNodeType", "DOType", "DAType", "EnumType"], Cr = [
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
], Dr = ["DynDataSet", "ConfDataSet"], Ir = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...Dr
], _r = ["ConfLogControl", "ConfSigRef"], Tr = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], Nr = ["SCL", ...fr, ...Ar, ...Er], ci = [
  ...Nr,
  ...xr,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...wr,
  ...kr,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...be,
  ...Cr,
  "DynAssociation",
  "SettingGroups",
  ...Ir,
  ..._r,
  ...Tr,
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
], Lr = new Set(ci);
function gt(t) {
  return Lr.has(t);
}
const Be = ["Text", "Private"], pe = [...Be], $ = [...Be], Oe = [...Be], Nt = [...$, "Val"], li = [...pe, "LNode"], ue = [...li], dt = [...ue], Ye = [
  ...ue,
  "PowerTransformer",
  "GeneralEquipment"
], Lt = [
  ...dt,
  "Terminal"
], $t = [...$, "Address"], di = [...pe], zt = [...di, "IEDName"], Rt = [
  ...$,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], Pt = [
  ...ue,
  "GeneralEquipment",
  "Function"
], Ot = [...di, "TrgOps"], Ft = [
  ...ue,
  "GeneralEquipment",
  "EqSubFunction"
], R = {
  AccessControl: {
    identity: g,
    selector: y,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: D,
    selector: C,
    parents: ["IED"],
    children: [
      ...pe,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: g,
    selector: y,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: Vn,
    selector: Mn,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: g,
    selector: y,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: D,
    selector: C,
    parents: ["DAType"],
    children: [...Nt]
  },
  BitRate: {
    identity: g,
    selector: y,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: D,
    selector: C,
    parents: ["VoltageLevel"],
    children: [
      ...Ye,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: Qn,
    selector: Jn,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: g,
    selector: y,
    parents: ["SCL"],
    children: [...$, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: D,
    selector: C,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...Lt,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: g,
    selector: y,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: tr,
    selector: ir,
    parents: ["SubNetwork"],
    children: [...$, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: D,
    selector: C,
    parents: ["Bay", "Line"],
    children: [...li]
  },
  DA: {
    identity: D,
    selector: C,
    parents: ["DOType"],
    children: [...Nt]
  },
  DAI: {
    identity: It,
    selector: ct,
    parents: ["DOI", "SDI"],
    children: [...$, "Val"]
  },
  DAType: {
    identity: Re,
    selector: Pe,
    parents: ["DataTypeTemplates"],
    children: [...Oe, "BDA", "ProtNs"]
  },
  DO: {
    identity: D,
    selector: C,
    parents: ["LNodeType"],
    children: [...$]
  },
  DOI: {
    identity: D,
    selector: C,
    parents: [...be],
    children: [...$, "SDI", "DAI"]
  },
  DOType: {
    identity: Re,
    selector: Pe,
    parents: ["DataTypeTemplates"],
    children: [...Oe, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: D,
    selector: C,
    parents: [...be],
    children: [...pe, "FCDA"]
  },
  DataSetDirectory: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: g,
    selector: y,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: Re,
    selector: Pe,
    parents: ["DataTypeTemplates"],
    children: [...Oe, "EnumVal"]
  },
  EnumVal: {
    identity: or,
    selector: cr,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: D,
    selector: C,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...Ft]
  },
  EqSubFunction: {
    identity: D,
    selector: C,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...Ft]
  },
  ExtRef: {
    identity: Kn,
    selector: jn,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: Un,
    selector: Wn,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: D,
    selector: C,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...ue,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: D,
    selector: C,
    parents: [
      "SubFunction",
      "Function",
      ...ai,
      ...si,
      ...lt
    ],
    children: [...dt, "EqFunction"]
  },
  GetCBValues: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: D,
    selector: C,
    parents: ["AccessPoint"],
    children: [...pe, "Subject", "IssuerName"]
  },
  GSE: {
    identity: _t,
    selector: Tt,
    parents: ["ConnectedAP"],
    children: [...$t, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: D,
    selector: C,
    parents: ["LN0"],
    children: [...zt, "Protocol"]
  },
  GSESettings: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: g,
    selector: y,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: g,
    selector: y,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: $n,
    selector: zn,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: D,
    selector: C,
    parents: ["SCL"],
    children: [...$, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: qn,
    selector: Gn,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: g,
    selector: y,
    parents: [...be],
    children: [...$, "ExtRef"]
  },
  IssuerName: {
    identity: g,
    selector: y,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: On,
    selector: Fn,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: Hn,
    selector: Bn,
    parents: ["Server"],
    children: [...$, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: Xn,
    selector: Zn,
    parents: ["AccessPoint", "LDevice"],
    children: [...Rt]
  },
  LN0: {
    identity: g,
    selector: y,
    parents: ["LDevice"],
    children: [
      ...Rt,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: Rn,
    selector: Pn,
    parents: [...oi],
    children: [...$]
  },
  LNodeType: {
    identity: Re,
    selector: Pe,
    parents: ["DataTypeTemplates"],
    children: [...Oe, "DO"]
  },
  Line: {
    identity: D,
    selector: C,
    parents: ["Process", "SCL"],
    children: [
      ...Pt,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: D,
    selector: C,
    parents: [...be],
    children: [...$]
  },
  LogControl: {
    identity: D,
    selector: C,
    parents: [...be],
    children: [...Ot]
  },
  LogSettings: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: g,
    selector: y,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: g,
    selector: y,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: g,
    selector: y,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: Ct,
    selector: Dt,
    parents: ["TransformerWinding"],
    children: [...$]
  },
  OptFields: {
    identity: g,
    selector: y,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: ar,
    selector: sr,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: nr,
    selector: rr,
    parents: ["ConnectedAP"],
    children: [...$, "P"]
  },
  PowerTransformer: {
    identity: D,
    selector: C,
    parents: [...lt],
    children: [
      ...dt,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => z,
    parents: [],
    children: []
  },
  Process: {
    identity: D,
    selector: C,
    parents: ["Process", "SCL"],
    children: [
      ...Pt,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: lr,
    selector: dr,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: g,
    selector: y,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: D,
    selector: C,
    parents: [...be],
    children: [...Ot, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: g,
    selector: y,
    parents: ["ReportControl"],
    children: [...$, "ClientLN"]
  },
  SamplesPerSec: {
    identity: g,
    selector: y,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: D,
    selector: C,
    parents: ["LN0"],
    children: [...zt, "SmvOpts"]
  },
  SecPerSamples: {
    identity: g,
    selector: y,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: pr,
    selector: ur,
    parents: [],
    children: [
      ...Be,
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
    identity: It,
    selector: ct,
    parents: ["DOI", "SDI"],
    children: [...$, "SDI", "DAI"]
  },
  SDO: {
    identity: D,
    selector: C,
    parents: ["DOType"],
    children: [...pe]
  },
  Server: {
    identity: g,
    selector: y,
    parents: ["AccessPoint"],
    children: [
      ...$,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: g,
    selector: y,
    parents: ["AccessPoint"],
    children: [...$]
  },
  Services: {
    identity: g,
    selector: y,
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
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: g,
    selector: y,
    parents: ["LN0"],
    children: [...$]
  },
  SettingGroups: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: g,
    selector: y,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: g,
    selector: y,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: _t,
    selector: Tt,
    parents: ["ConnectedAP"],
    children: [...$t]
  },
  SmvOpts: {
    identity: g,
    selector: y,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: D,
    selector: C,
    parents: ["AccessPoint"],
    children: [...pe, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: D,
    selector: C,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...ni
    ],
    children: [...ue, "EqFunction"]
  },
  SubFunction: {
    identity: D,
    selector: C,
    parents: ["SubFunction", "Function"],
    children: [
      ...ue,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: D,
    selector: C,
    parents: ["Communication"],
    children: [...pe, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: g,
    selector: y,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: D,
    selector: C,
    parents: ["SCL"],
    children: [...Ye, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: D,
    selector: C,
    parents: ["TransformerWinding"],
    children: [...ue, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: Ct,
    selector: Dt,
    parents: [...ri],
    children: [...$]
  },
  Text: {
    identity: g,
    selector: y,
    parents: ci.filter((t) => t !== "Text" && t !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: g,
    selector: y,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: D,
    selector: C,
    parents: ["PowerTransformer"],
    children: [
      ...Lt,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: g,
    selector: y,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: Yn,
    selector: er,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: g,
    selector: y,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: g,
    selector: y,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: D,
    selector: C,
    parents: ["Substation"],
    children: [...Ye, "Voltage", "Bay", "Function"]
  }
};
function H(t, e) {
  return typeof e != "string" ? z : gt(t) ? R[t].selector(t, e) : t;
}
function ie(t, e, i) {
  if (typeof i != "string" || !gt(e)) return null;
  const n = t.querySelector(R[e].selector(e, i));
  return n === null || re(n) ? n : Array.from(
    t.querySelectorAll(R[e].selector(e, i))
  ).find(re) ?? null;
}
function T(t) {
  if (t === null) return NaN;
  if (t.closest("Private")) return NaN;
  const e = t.tagName;
  return gt(e) ? R[e].identity(t) : NaN;
}
Wt((t) => (e) => {
  Object.keys(t).length ? e.setValue(t) : e.setValue("");
});
const $r = "[:_A-Za-z]|[À-Ö]|[Ø-ö]|[ø-˿]|[Ͱ-ͽ]|[Ϳ-῿]|[‌-‍]|[⁰-↏]|[Ⰰ-⿯]|[、-퟿]|[豈-﷏]|[ﷰ-�]", zr = $r + "|[.0-9\\-]|·|[̀-ͯ]|[‿-⁀]", Rr = "(" + zr + ")+", O = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  nmToken: Rr,
  alphanumericFirstUpperCase: "[A-Z][0-9,A-Z,a-z]*",
  lnClass: "(LLN0)|[A-Z]{4,4}"
};
function B(...t) {
  return t.reduce(
    (e, i) => e.flatMap((n) => i.map((r) => [n, r].flat())),
    [[]]
  );
}
function re(t) {
  return !t.closest("Private");
}
const Pr = 99;
Array(Pr).fill(1).map((t, e) => `${e + 1}`);
function Ae(t, e = "user", i) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { action: t, initiator: e, ...i?.detail }
  });
}
const qe = "LNodeType, DOType, DAType, EnumType";
function Or(t, e) {
  return !t.some(
    (i) => i.new.parent === e.new.parent && i.new.element.getAttribute("id") === e.new.element.getAttribute("id")
  );
}
function yt(t) {
  const e = [];
  for (const i of t)
    Or(e, i) && e.push(i);
  return e;
}
function Ge(t, e) {
  const i = t.closest("DataTypeTemplates"), n = Array.from(e.querySelectorAll(qe)).filter(re).map((o) => o.getAttribute("id")), r = new Set(
    Array.from(t.children).map((o) => o.getAttribute("type")).filter((o) => o !== null).filter((o) => !n.includes(o))
  ), a = [];
  r.forEach((o) => {
    const c = i.querySelector(
      `LNodeType[id="${o}"],DOType[id="${o}"],DAType[id="${o}"],EnumType[id="${o}"]`
    );
    c !== null && re(c) && a.push(c);
  });
  const s = [];
  return a.flatMap((o) => Ge(o, e)).forEach((o) => s.push(o)), a.forEach((o) => {
    s.push({
      new: {
        parent: e,
        element: o.cloneNode(!0)
      }
    });
  }), s;
}
const Fr = ye`
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
`;
function pi(t) {
  return (e) => {
    e.dispatchEvent(
      Ae({ old: { parent: t.parentElement, element: t } })
    ), e.dispatchEvent(V());
  };
}
function vt(t) {
  const e = Math.max(
    ...Array.from(t.children).map(
      (i) => parseInt(i.getAttribute("ord") ?? "-2", 10)
    )
  );
  return isFinite(e) ? (e + 1).toString(10) : "0";
}
function Vr(t) {
  return (e) => {
    const i = m(e.find((o) => o.label === "value")), n = m(e.find((o) => o.label === "desc")), r = m(e.find((o) => o.label === "ord")) || vt(t), a = j(t.ownerDocument, "EnumVal", {
      ord: r,
      desc: n
    });
    return a.textContent = i, [{
      new: {
        parent: t,
        element: a
      }
    }];
  };
}
function Mr(t) {
  return (e) => {
    const i = m(e.find((s) => s.label === "value")) ?? "", n = m(e.find((s) => s.label === "desc")), r = m(e.find((s) => s.label === "ord")) || t.getAttribute("ord") || vt(t.parentElement);
    if (i === t.textContent && n === t.getAttribute("desc") && r === t.getAttribute("ord"))
      return [];
    const a = oe(t, { desc: n, ord: r });
    return a.textContent = i, [{ old: { element: t }, new: { element: a } }];
  };
}
function ui(t) {
  const e = t.doc ? t.doc : t.parent.ownerDocument, i = ie(
    e,
    "EnumVal",
    t.identity ?? NaN
  ), [n, r, a, s, o, c] = i ? [
    l("enum-val.wizard.title.edit"),
    Mr(i),
    i.getAttribute("ord"),
    i.getAttribute("desc"),
    i.textContent,
    [
      {
        icon: "delete",
        label: l("remove"),
        action: pi(i)
      }
    ]
  ] : [
    l("enum-val.wizard.title.add"),
    Vr(t.parent),
    vt(t.parent),
    null,
    // desc is uncommon on EnumVal
    "",
    void 0
  ];
  return [
    {
      title: n,
      element: i ?? void 0,
      primary: {
        icon: "",
        label: "Save",
        action: r
      },
      menuActions: c,
      content: [
        h`<wizard-textfield
          label="ord"
          helper="${l("scl.ord")}"
          .maybeValue=${a}
          required
          type="number"
        ></wizard-textfield>`,
        h`<wizard-textfield
          label="value"
          helper="${l("scl.value")}"
          .maybeValue=${o}
          pattern="${O.normalizedString}"
          dialogInitialFocus
        ></wizard-textfield>`,
        h`<wizard-textfield
          id="evDesc"
          label="desc"
          helper="${l("scl.desc")}"
          .maybeValue=${s}
          nullable
          pattern="${O.normalizedString}"
        ></wizard-textfield>`
      ]
    }
  ];
}
function Hr(t, e) {
  return (i) => {
    const n = m(i.find((c) => c.label === "id"));
    if (!n) return [];
    const r = m(i.find((c) => c.label === "desc")), a = i.find((c) => c.label === "values"), s = a.selected ? e.querySelector(`EnumType[id="${a.selected.value}"]`).cloneNode(!0) : j(t.ownerDocument, "EnumType", {});
    return s.setAttribute("id", n), r && s.setAttribute("desc", r), [{
      new: {
        parent: t,
        element: s
      }
    }];
  };
}
function Br(t, e) {
  return [
    {
      title: l("enum.wizard.title.add"),
      primary: {
        icon: "add",
        label: l("add"),
        action: Hr(t, e)
      },
      content: [
        h`<mwc-select
          style="--mdc-menu-max-height: 196px;"
          outlined
          icon="playlist_add_check"
          label="values"
          helper="Default enumerations"
        >
          ${Array.from(e.querySelectorAll("EnumType")).map(
          (i) => h`<mwc-list-item
                graphic="icon"
                hasMeta
                value="${i.getAttribute("id") ?? ""}"
                ><span>${i.getAttribute("id")}</span>
                <span slot="meta">${i.querySelectorAll("EnumVal").length}</span>
              </mwc-list-item>`
        )}
        </mwc-select>`,
        h`<wizard-textfield
          label="id"
          helper="${l("scl.id")}"
          .maybeValue=${""}
          required
          maxlength="127"
          minlength="1"
          pattern="${O.nmToken}"
          dialogInitialFocus
        ></wizard-textfield>`,
        h`<wizard-textfield
          label="desc"
          helper="${l("scl.desc")}"
          .maybeValue=${null}
          nullable
          pattern="${O.normalizedString}"
        ></wizard-textfield>`
      ]
    }
  ];
}
function qr(t) {
  return (e) => {
    e.dispatchEvent(ce(() => ui({ parent: t })));
  };
}
function Gr(t) {
  return (e) => {
    const i = m(e.find((o) => o.label === "id")), n = m(e.find((o) => o.label === "desc"));
    if (i === t.getAttribute("id") && n === t.getAttribute("desc"))
      return [];
    const r = oe(t, { id: i, desc: n }), a = [];
    a.push({ old: { element: t }, new: { element: r } });
    const s = t.getAttribute("id");
    return Array.from(
      t.ownerDocument.querySelectorAll(
        `DOType > DA[type="${s}"], DAType > BDA[type="${s}"]`
      )
    ).forEach((o) => {
      const c = o.cloneNode(!1);
      c.setAttribute("type", i), a.push({ old: { element: o }, new: { element: c } });
    }), [{ title: l("enum.action.edit", { oldId: s, newId: i }), actions: a }];
  };
}
function Vt(t, e) {
  const i = ie(e, "EnumType", t);
  if (i)
    return [
      {
        title: l("enum.wizard.title.edit"),
        element: i,
        primary: {
          icon: "",
          label: l("save"),
          action: Gr(i)
        },
        menuActions: [
          {
            label: l("remove"),
            icon: "delete",
            action: pi(i)
          },
          {
            label: l("scl.EnumVal"),
            icon: "playlist_add",
            action: qr(i)
          }
        ],
        content: [
          h`<wizard-textfield
          label="id"
          helper="${l("scl.id")}"
          .maybeValue=${i.getAttribute("id")}
          required
          maxlength="127"
          minlength="1"
          pattern="${O.nmToken}"
          dialogInitialFocus
        ></wizard-textfield>`,
          h`<wizard-textfield
          label="desc"
          helper="${l("scl.desc")}"
          .maybeValue=${i.getAttribute("desc")}
          nullable
          pattern="${O.normalizedString}"
        ></wizard-textfield>`,
          h`<mwc-list
          style="margin-top: 0px;"
          @selected=${(n) => {
            const r = ui({
              identity: n.target.selected.value,
              doc: e
            });
            r && n.target.dispatchEvent(ce(r));
          }}
          >${Array.from(i.querySelectorAll("EnumVal")).map(
            (n) => h`<mwc-list-item
                graphic="icon"
                hasMeta
                tabindex="0"
                value="${T(n)}"
              >
                <span>${n.textContent ?? ""}</span>
                <span slot="graphic"
                  >${n.getAttribute("ord") ?? "-1"}</span
                >
              </mwc-list-item>`
          )}</mwc-list
        > `
        ]
      }
    ];
}
const Ur = "[:_A-Za-z]|[À-Ö]|[Ø-ö]|[ø-˿]|[Ͱ-ͽ]|[Ϳ-῿]|[‌-‍]|[⁰-↏]|[Ⰰ-⿯]|[、-퟿]|[豈-﷏]|[ﷰ-�]", Wr = Ur + "|[.0-9\\-]|·|[̀-ͯ]|[‿-⁀]", Kr = "(" + Wr + ")+", te = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  nmToken: Kr,
  tRestrName1stL: "[a-z][0-9A-Za-z]*",
  abstractDataAttributeName: "((T)|(Test)|(Check)|(SIUnit)|(Oper)|(SBO)|(SBOw)|(Cancel)|[a-z][0-9A-Za-z]*)",
  cdc: "(SPS)|(DPS)|(INS)|(ENS)|(ACT)|(ACD)|(SEC)|(BCR)|(HST)|(VSS)|(MV)|(CMV)|(SAV)|(WYE)|(DEL)|(SEQ)|(HMV)|(HWYE)|(HDEL)|(SPC)|(DPC)|(INC)|(ENC)|(BSC)|(ISC)|(APC)|(BAC)|(SPG)|(ING)|(ENG)|(ORG)|(TSG)|(CUG)|(VSG)|(ASG)|(CURVE)|(CSG)|(DPL)|(LPL)|(CSD)|(CST)|(BTS)|(UTS)|(LTS)|(GTS)|(MTS)|(NTS)|(STS)|(CTS)|(OTS)|(VSD)"
}, jr = {
  abstracDaName: 60
}, Xr = [
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
], Zr = [
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
], Qr = ["Spec", "Conf", "RO", "Set"];
function Jr(t, e, i) {
  if (!t.target || !t.target.parentElement) return;
  const n = t.target.selected?.value;
  if (t.target.parentElement.querySelector(
    'wizard-select[label="bType"]'
  ).value !== "Enum") return;
  const a = Array.from(
    e.querySelectorAll(`EnumType[id="${n}"] > EnumVal`)
  ).map(
    (o) => E`<mwc-list-item
        value="${o.textContent?.trim() ?? ""}"
        ?selected=${o.textContent?.trim() === i}
        >${o.textContent?.trim()}</mwc-list-item
      >`
  ), s = t.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  Oi(E`${a}`, s), s.requestUpdate();
}
function Yr(t, e, i) {
  const n = t.target.selected.value, r = t.target.parentElement.querySelector(
    'wizard-select[label="type"]'
  );
  r.disabled = !(n === "Enum" || n === "Struct");
  const a = [];
  Array.from(r.children).forEach((c) => {
    const d = c;
    d.disabled = !c.classList.contains(n), d.noninteractive = !c.classList.contains(n), d.style.display = c.classList.contains(n) ? "" : "none", d.disabled || a.push(d);
  }), i && e === n ? r.value = i : r.value = a.length ? a[0].value : "";
  const s = t.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  n === "Enum" ? s.style.display = "" : s.style.display = "none";
  const o = t.target.parentElement.querySelector(
    'wizard-textfield[label="Val"]'
  );
  n === "Enum" || n === "Struct" ? o.style.display = "none" : o.style.display = "", s.requestUpdate(), o.requestUpdate(), r.requestUpdate();
}
function Ue(t, e, i, n, r, a, s, o, c, d) {
  return [
    E`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${l("scl.name")}"
      required
      pattern="${te.abstractDataAttributeName}"
      maxLength="${jr.abstracDaName}"
      dialogInitialFocus
    >
      ></wizard-textfield
    >`,
    E`<wizard-textfield
      label="desc"
      helper="${l("scl.desc")}"
      .maybeValue=${e}
      nullable
      pattern="${te.normalizedString}"
    ></wizard-textfield>`,
    E`<wizard-select
      fixedMenuPosition
      label="bType"
      .value=${i}
      helper="${l("scl.bType")}"
      required
      @selected=${(p) => Yr(p, i, r)}
      >${Zr.map(
      (p) => E`<mwc-list-item value="${p}"
            >${p}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    E`<wizard-select
      label="type"
      .maybeValue=${r}
      helper="${l("scl.type")}"
      fixedMenuPosition
      @selected=${(p) => Jr(p, d, c)}
      >${n.map(
      (p) => E`<mwc-list-item
            class="${p.tagName === "EnumType" ? "Enum" : "Struct"}"
            value=${p.id}
            >${p.id}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    E`<wizard-textfield
      label="sAddr"
      .maybeValue=${a}
      helper="${l("scl.sAddr")}"
      nullable
      pattern="${te.normalizedString}"
    ></wizard-textfield>`,
    E`<wizard-select
      label="valKind"
      .maybeValue=${s}
      helper="${l("scl.valKind")}"
      nullable
      required
      fixedMenuPosition
      >${Qr.map(
      (p) => E`<mwc-list-item value="${p}"
            >${p}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    E`<wizard-checkbox
      label="valImport"
      .maybeValue=${o}
      helper="${l("scl.valImport")}"
      nullable
      required
    ></wizard-checkbox>`,
    E`<wizard-select
      label="Val"
      .maybeValue=${c}
      helper="${l("scl.Val")}"
      nullable
      >${Array.from(
      d.querySelectorAll(`EnumType > EnumVal[id="${r}"]`)
    ).map(
      (p) => E`<mwc-list-item value="${p.textContent?.trim() ?? ""}"
            >${p.textContent?.trim()}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    E`<wizard-textfield
      label="Val"
      .maybeValue=${c}
      helper="${l("scl.Val")}"
      nullable
    ></wizard-textfield>`
  ];
}
function mi(t, e, i) {
  if (t === null) {
    const r = j(i.ownerDocument, "Val", {});
    return r.textContent = e, {
      new: {
        parent: i,
        element: r,
        reference: i.firstElementChild
      }
    };
  }
  if (e === null)
    return {
      old: {
        parent: i,
        element: t,
        reference: t.nextSibling
      }
    };
  const n = t.cloneNode(!1);
  return n.textContent = e, {
    old: { element: t },
    new: { element: n }
  };
}
function ea(t) {
  return (e) => {
    e.dispatchEvent(
      Ae({ old: { parent: t.parentElement, element: t } })
    ), e.dispatchEvent(V());
  };
}
function ta(t) {
  return (e) => {
    const i = m(e.find((S) => S.label === "name")), n = m(e.find((S) => S.label === "desc")), r = m(e.find((S) => S.label === "bType")), a = r === "Enum" || r === "Struct" ? m(e.find((S) => S.label === "type")) : null, s = m(e.find((S) => S.label === "sAddr")), o = m(e.find((S) => S.label === "valKind")), c = m(e.find((S) => S.label === "valImport")), d = e.find(
      (S) => S.label === "Val" && S.style.display !== "none"
    ), p = d ? m(d) : null;
    let f, u;
    if (i === t.getAttribute("name") && n === t.getAttribute("desc") && r === t.getAttribute("bType") && a === t.getAttribute("type") && s === t.getAttribute("sAddr") && o === t.getAttribute("valKind") && c === t.getAttribute("valImprot"))
      f = null;
    else {
      const S = oe(t, {
        name: i,
        desc: n,
        bType: r,
        type: a,
        sAddr: s,
        valKind: o,
        valImport: c
      });
      f = { old: { element: t }, new: { element: S } };
    }
    p === (t.querySelector("Val")?.textContent?.trim() ?? null) ? u = null : u = mi(
      t.querySelector("Val"),
      p,
      f?.new.element ?? t
    );
    const A = [];
    return f && A.push(f), u && A.push(u), A;
  };
}
function ia(t) {
  const e = t.ownerDocument, i = t.getAttribute("type"), n = t.getAttribute("name"), r = t.getAttribute("desc"), a = t.getAttribute("bType") ?? "", s = t.getAttribute("sAddr"), o = t.querySelector("Val")?.innerHTML.trim() ?? null, c = t.getAttribute("valKind"), d = t.getAttribute("valImport"), p = Array.from(e.querySelectorAll("DAType, EnumType")).filter(re).filter((u) => u.getAttribute("id")), f = t.closest("DataTypeTemplates");
  return [
    {
      title: l("bda.wizard.title.edit"),
      element: t,
      primary: {
        icon: "",
        label: l("save"),
        action: ta(t)
      },
      menuActions: [
        {
          icon: "delete",
          label: l("remove"),
          action: ea(t)
        }
      ],
      content: [
        ...Ue(
          n,
          r,
          a,
          p,
          i,
          s,
          c,
          d,
          o,
          f
        )
      ]
    }
  ];
}
function na(t) {
  return (e) => {
    const i = m(e.find((u) => u.label === "name")), n = m(e.find((u) => u.label === "desc")), r = m(e.find((u) => u.label === "bType")), a = r === "Enum" || r === "Struct" ? m(e.find((u) => u.label === "type")) : null, s = m(e.find((u) => u.label === "sAddr")), o = m(e.find((u) => u.label === "valKind")) !== "" ? m(e.find((u) => u.label === "valKind")) : null, c = m(e.find((u) => u.label === "valImport")) !== "" ? m(e.find((u) => u.label === "valImport")) : null, d = e.find(
      (u) => u.label === "Val" && u.style.display !== "none"
    ), p = d ? m(d) : null, f = j(t.ownerDocument, "BDA", {
      name: i,
      desc: n,
      bType: r,
      type: a,
      sAddr: s,
      valKind: o,
      valImport: c
    });
    if (p !== null) {
      const u = j(t.ownerDocument, "Val", {});
      u.textContent = p, f.appendChild(u);
    }
    return [
      {
        new: {
          parent: t,
          element: f
        }
      }
    ];
  };
}
function ra(t) {
  const e = t.ownerDocument, i = "", n = null, r = "", a = null, s = null, o = null, c = null, d = null, p = Array.from(e.querySelectorAll("DAType, EnumType")).filter(re).filter((u) => u.getAttribute("id")), f = t.closest("DataTypeTemplates");
  return [
    {
      title: l("bda.wizard.title.edit"),
      primary: {
        icon: "",
        label: l("save"),
        action: na(t)
      },
      content: [
        ...Ue(
          i,
          n,
          r,
          p,
          a,
          s,
          c,
          d,
          o,
          f
        )
      ]
    }
  ];
}
function aa(t) {
  return (e) => {
    e.dispatchEvent(
      Ae({ old: { parent: t.parentElement, element: t } })
    ), e.dispatchEvent(V());
  };
}
function sa(t) {
  return (e) => {
    e.dispatchEvent(ce(() => ra(t)));
  };
}
function oa(t) {
  return (e) => {
    const i = m(e.find((o) => o.label === "id")), n = m(e.find((o) => o.label === "desc"));
    if (i === t.getAttribute("id") && n === t.getAttribute("desc"))
      return [];
    const r = oe(t, { id: i, desc: n }), a = [];
    a.push({ old: { element: t }, new: { element: r } });
    const s = t.getAttribute("id");
    return Array.from(
      t.ownerDocument.querySelectorAll(
        `DOType > DA[type="${s}"], DAType > BDA[type="${s}"]`
      )
    ).forEach((o) => {
      const c = o.cloneNode(!1);
      c.setAttribute("type", i), a.push({ old: { element: o }, new: { element: c } });
    }), [
      { title: l("datype.action.edit", { oldId: s, newId: i }), actions: a }
    ];
  };
}
function Mt(t, e) {
  const i = ie(e, "DAType", t);
  if (!i) return;
  const n = i.getAttribute("id"), r = i.getAttribute("desc");
  return [
    {
      title: l("datype.wizard.title.edit"),
      element: i ?? void 0,
      primary: {
        icon: "",
        label: l("save"),
        action: oa(i)
      },
      menuActions: [
        {
          label: l("remove"),
          icon: "delete",
          action: aa(i)
        },
        {
          label: l("scl.DA"),
          icon: "playlist_add",
          action: sa(i)
        }
      ],
      content: [
        h`<wizard-textfield
          label="id"
          helper="${l("scl.id")}"
          .maybeValue=${n}
          required
          maxlength="127"
          minlength="1"
          pattern="${O.nmToken}"
          dialogInitialFocus
        ></wizard-textfield>`,
        h`<wizard-textfield
          label="desc"
          helper="${l("scl.desc")}"
          .maybeValue=${r}
          nullable
          pattern="${O.normalizedString}"
        ></wizard-textfield>`,
        h`<mwc-list
          style="margin-top: 0px;"
          @selected=${(a) => {
          const s = a.target.selected.value, o = ie(e, "BDA", s);
          o && a.target.dispatchEvent(ce(ia(o)));
        }}
        >
          ${Array.from(i.querySelectorAll("BDA")).map(
          (a) => h`<mwc-list-item twoline tabindex="0" value="${T(a)}"
                ><span>${a.getAttribute("name")}</span
                ><span slot="secondary"
                  >${a.getAttribute("bType") === "Enum" || a.getAttribute("bType") === "Struct" ? "#" + a.getAttribute("type") : a.getAttribute("bType")}</span
                ></mwc-list-item
              >`
        )}
        </mwc-list> `
      ]
    }
  ];
}
function ca(t, e) {
  return (i) => {
    const n = m(i.find((p) => p.label === "id"));
    if (!n) return [];
    if (Array.from(
      e.querySelectorAll(qe)
    ).some((p) => p.getAttribute("id") === n)) return [];
    const a = m(i.find((p) => p.label === "desc")), s = i.find((p) => p.label === "values"), o = s.selected ? e.querySelector(`DAType[id="${s.selected.value}"]`) : null, c = s.selected ? o.cloneNode(!0) : j(t.ownerDocument, "DAType", {});
    c.setAttribute("id", n), a && c.setAttribute("desc", a);
    const d = [];
    return o && Ge(o, t).forEach(
      (p) => d.push(p)
    ), d.push({
      new: {
        parent: t,
        element: c
      }
    }), yt(d);
  };
}
function la(t, e) {
  return [
    {
      title: l("datype.wizard.title.add"),
      primary: {
        icon: "add",
        label: l("add"),
        action: ca(t, e)
      },
      content: [
        h`<mwc-select
          fixedMenuPosition
          outlined
          icon="playlist_add_check"
          label="values"
          helper="Default enumerations"
        >
          ${Array.from(e.querySelectorAll("DAType")).map(
          (i) => h`<mwc-list-item
                graphic="icon"
                hasMeta
                value="${i.getAttribute("id") ?? ""}"
                ><span
                  >${i.getAttribute("id")?.replace("OpenSCD_", "")}</span
                >
                <span slot="meta"
                  >${i.querySelectorAll("BDA").length}</span
                >
              </mwc-list-item>`
        )}
        </mwc-select>`,
        h`<wizard-textfield
          label="id"
          helper="${l("scl.id")}"
          .maybeValue=${""}
          required
          maxlength="255"
          minlength="1"
          pattern="${O.nmToken}"
          dialogInitialFocus
        ></wizard-textfield>`,
        h`<wizard-textfield
          label="desc"
          helper="${l("scl.desc")}"
          .maybeValue=${null}
          nullable
          pattern="${O.normalizedString}"
        ></wizard-textfield>`
      ]
    }
  ];
}
function da(t) {
  return (e) => {
    e.dispatchEvent(
      Ae({ old: { parent: t.parentElement, element: t } })
    ), e.dispatchEvent(V());
  };
}
function hi(t, e, i, n) {
  return [
    E`<wizard-select
      label="fc"
      .maybeValue=${t}
      helper="${l("scl.fc")}"
      required
      fixedMenuPosition
      >${Xr.map(
      (r) => E`<mwc-list-item value="${r}">${r}</mwc-list-item>`
    )}</wizard-select
    >`,
    E`<wizard-checkbox
      label="dchg"
      .maybeValue=${e}
      helper="${l("scl.dchg")}"
      nullable
    ></wizard-checkbox>`,
    E`<wizard-checkbox
      label="qchg"
      .maybeValue=${i}
      helper="${l("scl.qchg")}"
      nullable
    ></wizard-checkbox>`,
    E`<wizard-checkbox
      label="dupd"
      .maybeValue=${n}
      helper="${l("scl.dupd")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function pa(t) {
  return (e) => {
    const i = m(e.find((w) => w.label === "name")), n = m(e.find((w) => w.label === "desc")), r = m(e.find((w) => w.label === "bType")), a = r === "Enum" || r === "Struct" ? m(e.find((w) => w.label === "type")) : null, s = m(e.find((w) => w.label === "sAddr")), o = m(e.find((w) => w.label === "valKind")), c = m(e.find((w) => w.label === "valImport")), d = e.find(
      (w) => w.label === "Val" && w.style.display !== "none"
    ), p = d ? m(d) : null, f = m(e.find((w) => w.label === "fc")) ?? "", u = m(e.find((w) => w.label === "dchg")), A = m(e.find((w) => w.label === "qchg")), S = m(e.find((w) => w.label === "dupd"));
    let _, I;
    if (i === t.getAttribute("name") && n === t.getAttribute("desc") && r === t.getAttribute("bType") && a === t.getAttribute("type") && s === t.getAttribute("sAddr") && o === t.getAttribute("valKind") && c === t.getAttribute("valImprot") && f === t.getAttribute("fc") && u === t.getAttribute("dchg") && A === t.getAttribute("qchg") && S === t.getAttribute("dupd"))
      _ = null;
    else {
      const w = oe(t, {
        name: i,
        desc: n,
        bType: r,
        type: a,
        sAddr: s,
        valKind: o,
        valImport: c,
        fc: f,
        dchg: u,
        qchg: A,
        dupd: S
      });
      _ = { old: { element: t }, new: { element: w } };
    }
    p === (t.querySelector("Val")?.textContent?.trim() ?? null) ? I = null : I = mi(
      t.querySelector("Val"),
      p,
      _?.new.element ?? t
    );
    const x = [];
    return _ && x.push(_), I && x.push(I), x;
  };
}
function ua(t) {
  const e = t.ownerDocument, i = t.getAttribute("name"), n = t.getAttribute("desc"), r = t.getAttribute("bType") ?? "", a = t.getAttribute("type"), s = t.getAttribute("sAddr"), o = t.querySelector("Val")?.innerHTML.trim() ?? null, c = t.getAttribute("valKind"), d = t.getAttribute("valImport"), p = t.getAttribute("fc") ?? "", f = t.getAttribute("dchg"), u = t.getAttribute("qchg"), A = t.getAttribute("dupd"), S = Array.from(e.querySelectorAll("DAType, EnumType")).filter(re).filter((I) => I.getAttribute("id")), _ = t.closest("DataTypeTemplates");
  return [
    {
      title: l("da.wizard.title.edit"),
      element: t ?? void 0,
      primary: {
        icon: "",
        label: l("save"),
        action: pa(t)
      },
      menuActions: [
        {
          icon: "delete",
          label: l("remove"),
          action: da(t)
        }
      ],
      content: [
        ...Ue(
          i,
          n,
          r,
          S,
          a,
          s,
          c,
          d,
          o,
          _
        ),
        ...hi(p, f, u, A)
      ]
    }
  ];
}
function ma(t) {
  return (e) => {
    const i = m(e.find((x) => x.label === "name")), n = m(e.find((x) => x.label === "desc")), r = m(e.find((x) => x.label === "bType")), a = r === "Enum" || r === "Struct" ? m(e.find((x) => x.label === "type")) : null, s = m(e.find((x) => x.label === "sAddr")), o = m(e.find((x) => x.label === "valKind")), c = m(e.find((x) => x.label === "valImport")), d = e.find(
      (x) => x.label === "Val" && x.style.display !== "none"
    ), p = d ? m(d) : null, f = m(e.find((x) => x.label === "fc")) ?? "", u = m(e.find((x) => x.label === "dchg")), A = m(e.find((x) => x.label === "qchg")), S = m(e.find((x) => x.label === "dupd")), _ = [], I = j(t.ownerDocument, "DA", {
      name: i,
      desc: n,
      bType: r,
      type: a,
      sAddr: s,
      valKind: o,
      valImport: c,
      fc: f,
      dchg: u,
      qchg: A,
      dupd: S
    });
    if (p !== null) {
      const x = j(t.ownerDocument, "Val", {});
      x.textContent = p, I.appendChild(x);
    }
    return _.push({
      new: {
        parent: t,
        element: I
      }
    }), _;
  };
}
function ha(t) {
  const e = t.ownerDocument, i = "", n = null, r = "", a = null, s = null, o = null, c = null, d = null, p = "", f = null, u = null, A = null, S = Array.from(e.querySelectorAll("DAType, EnumType")).filter(re).filter((I) => I.getAttribute("id")), _ = t.closest("DataTypeTemplates");
  return [
    {
      title: l("da.wizard.title.edit"),
      primary: {
        icon: "",
        label: l("save"),
        action: ma(t)
      },
      content: [
        ...Ue(
          i,
          n,
          r,
          S,
          a,
          s,
          c,
          d,
          o,
          _
        ),
        ...hi(p, f, u, A)
      ]
    }
  ];
}
function fi(t) {
  return (e) => {
    e.dispatchEvent(
      Ae({ old: { parent: t.parentElement, element: t } })
    ), e.dispatchEvent(V());
  };
}
function fa(t) {
  return (e) => {
    const i = m(e.find((o) => o.label === "name")), n = m(e.find((o) => o.label === "desc")), r = m(e.find((o) => o.label === "type")), a = [];
    if (i === t.getAttribute("name") && n === t.getAttribute("desc") && r === t.getAttribute("type"))
      return [];
    const s = oe(t, { name: i, desc: n, type: r });
    return a.push({ old: { element: t }, new: { element: s } }), a;
  };
}
function ba(t) {
  return (e) => {
    const i = m(e.find((o) => o.label === "name")), n = m(e.find((o) => o.label === "desc")), r = m(e.find((o) => o.label === "type")), a = [], s = j(t.ownerDocument, "SDO", {
      name: i,
      desc: n,
      type: r
    });
    return a.push({
      new: {
        parent: t,
        element: s
      }
    }), a;
  };
}
function bi(t) {
  const e = t.doc ? t.doc : t.parent.ownerDocument, i = ie(e, "SDO", t.identity ?? NaN), [n, r, a, s, o, c] = i ? [
    l("sdo.wizard.title.edit"),
    fa(i),
    i.getAttribute("type"),
    [{ icon: "delete", label: l("remove"), action: fi(i) }],
    i.getAttribute("name"),
    i.getAttribute("desc")
  ] : [
    l("sdo.wizard.title.add"),
    ba(t.parent),
    null,
    void 0,
    "",
    null
  ], d = Array.from(e.querySelectorAll("DOType")).filter(re).filter((p) => p.getAttribute("id"));
  return [
    {
      title: n,
      element: i ?? void 0,
      primary: { icon: "", label: l("save"), action: r },
      menuActions: s,
      content: [
        E`<wizard-textfield
          label="name"
          .maybeValue=${o}
          helper="${l("scl.name")}"
          required
          pattern="${te.tRestrName1stL}"
          dialogInitialFocus
        >
          ></wizard-textfield
        >`,
        E`<wizard-textfield
          label="desc"
          helper="${l("scl.desc")}"
          .maybeValue=${c}
          nullable
          pattern="${te.normalizedString}"
        ></wizard-textfield>`,
        E`<mwc-select
          fixedMenuPosition
          label="type"
          required
          helper="${l("scl.type")}"
          >${d.map(
          (p) => E`<mwc-list-item
                value=${p.id}
                ?selected=${p.id === a}
                >${p.id}</mwc-list-item
              >`
        )}</mwc-select
        >`
      ]
    }
  ];
}
function ga(t, e) {
  return (i) => {
    const n = m(i.find((f) => f.label === "id"));
    if (!n) return [];
    if (Array.from(
      e.querySelectorAll(qe)
    ).some((f) => f.getAttribute("id") === n)) return [];
    const a = m(i.find((f) => f.label === "desc")), s = m(i.find((f) => f.label === "cdc")), o = i.find((f) => f.label === "values"), c = o.selected ? e.querySelector(`DOType[id="${o.selected.value}"]`) : null, d = o.selected ? c.cloneNode(!0) : j(t.ownerDocument, "DOType", {});
    d.setAttribute("id", n), d.setAttribute("cdc", s), a && d.setAttribute("desc", a);
    const p = [];
    return c && Ge(c, t).forEach(
      (f) => p.push(f)
    ), p.push({
      new: {
        parent: t,
        element: d
      }
    }), yt(p);
  };
}
function ya(t, e) {
  const i = t.target.parentElement.querySelector(
    'wizard-textfield[label="cdc"]'
  ), n = t.target.value, r = e.querySelector(`DOType[id="${n}"]`)?.getAttribute("cdc") ?? null;
  r && (i.value = r), i.disabled = !0;
}
function va(t, e) {
  return [
    {
      title: l("dotype.wizard.title.add"),
      primary: {
        icon: "add",
        label: l("add"),
        action: ga(t, e)
      },
      content: [
        E`<mwc-select
          fixedMenuPosition
          outlined
          icon="playlist_add_check"
          label="values"
          helper="${l("dotype.wizard.enums")}"
          @selected=${(i) => ya(i, e)}
        >
          ${Array.from(e.querySelectorAll("DOType")).map(
          (i) => E`<mwc-list-item
                graphic="icon"
                hasMeta
                value="${i.getAttribute("id") ?? ""}"
                ><span
                  >${i.getAttribute("id")?.replace("OpenSCD_", "")}</span
                >
                <span slot="meta"
                  >${i.querySelectorAll("SDO,DA").length}</span
                >
              </mwc-list-item>`
        )}
        </mwc-select>`,
        E`<wizard-textfield
          label="id"
          helper="${l("scl.id")}"
          .maybeValue=${""}
          required
          maxlength="127"
          minlength="1"
          pattern="${te.nmToken}"
          dialogInitialFocus
        ></wizard-textfield>`,
        E`<wizard-textfield
          label="desc"
          helper="${l("scl.desc")}"
          .maybeValue=${null}
          nullable
          pattern="${te.normalizedString}"
        ></wizard-textfield>`,
        E`<wizard-textfield
          label="cdc"
          helper="${l("scl.CDC")}"
          required
          pattern="${te.cdc}"
        ></wizard-textfield>`
      ]
    }
  ];
}
function Sa(t) {
  return (e) => {
    e.dispatchEvent(ce(() => bi({ parent: t })));
  };
}
function Aa(t) {
  return (e) => {
    e.dispatchEvent(ce(() => ha(t)));
  };
}
function xa(t) {
  return (e) => {
    const i = m(e.find((c) => c.label === "id")), n = m(e.find((c) => c.label === "desc")), r = m(e.find((c) => c.label === "CDC"));
    if (i === t.getAttribute("id") && n === t.getAttribute("desc") && r == t.getAttribute("cdc"))
      return [];
    const a = oe(t, { id: i, desc: n, cdc: r }), s = [];
    s.push({ old: { element: t }, new: { element: a } });
    const o = t.getAttribute("id");
    return Array.from(
      t.ownerDocument.querySelectorAll(
        `LNodeType > DO[type="${o}"], DOType > SDO[type="${o}"]`
      )
    ).forEach((c) => {
      const d = c.cloneNode(!1);
      d.setAttribute("type", i), s.push({ old: { element: c }, new: { element: d } });
    }), [
      { title: l("dotype.action.edit", { oldId: o, newId: i }), actions: s }
    ];
  };
}
function Ht(t, e) {
  const i = ie(e, "DOType", t);
  if (i)
    return [
      {
        title: l("dotype.wizard.title.edit"),
        element: i,
        primary: {
          icon: "",
          label: l("save"),
          action: xa(i)
        },
        menuActions: [
          {
            label: l("remove"),
            icon: "delete",
            action: fi(i)
          },
          {
            label: l("scl.DO"),
            icon: "playlist_add",
            action: Sa(i)
          },
          {
            label: l("scl.DA"),
            icon: "playlist_add",
            action: Aa(i)
          }
        ],
        content: [
          E`<wizard-textfield
          label="id"
          helper="${l("scl.id")}"
          .maybeValue=${i.getAttribute("id")}
          required
          maxlength="127"
          minlength="1"
          pattern="${te.nmToken}"
          dialogInitialFocus
        ></wizard-textfield>`,
          E`<wizard-textfield
          label="desc"
          helper="${l("scl.desc")}"
          .maybeValue=${i.getAttribute("desc")}
          nullable
          pattern="${te.normalizedString}"
        ></wizard-textfield>`,
          E`<wizard-textfield
          label="CDC"
          helper="${l("scl.CDC")}"
          .maybeValue=${i.getAttribute("cdc")}
          pattern="${te.normalizedString}"
        ></wizard-textfield>`,
          E`
          <mwc-list
            style="margin-top: 0px;"
            @selected=${(n) => {
            const r = n.target.selected, a = n.target.selected.value, s = ie(e, "DA", a), o = r.classList.contains("DA") ? s ? ua(s) : void 0 : bi({
              identity: r.value,
              doc: e
            });
            o && n.target.dispatchEvent(ce(o));
          }}
          >
            ${Array.from(i.querySelectorAll("SDO, DA")).map(
            (n) => E`<mwc-list-item
                  twoline
                  tabindex="0"
                  class="${n.tagName === "DA" ? "DA" : "SDO"}"
                  value="${T(n)}"
                  ><span>${n.getAttribute("name")}</span
                  ><span slot="secondary"
                    >${n.tagName === "SDO" || n.getAttribute("bType") === "Enum" || n.getAttribute("bType") === "Struct" ? "#" + n.getAttribute("type") : n.getAttribute("bType")}</span
                  ></mwc-list-item
                >`
          )}
          </mwc-list>
        `
        ]
      }
    ];
}
function gi(t) {
  return (e) => {
    e.dispatchEvent(
      Ae({ old: { parent: t.parentElement, element: t } })
    ), e.dispatchEvent(V());
  };
}
function wa(t) {
  return (e) => {
    e.dispatchEvent(ce(() => yi({ parent: t })));
  };
}
function ka(t) {
  return (e) => {
    const i = m(e.find((c) => c.label === "name")), n = m(e.find((c) => c.label === "desc")), r = m(e.find((c) => c.label === "type")), a = m(
      e.find((c) => c.label === "accessControl")
    ), s = m(e.find((c) => c.label === "transient")) !== "" ? m(e.find((c) => c.label === "transient")) : null;
    if (i === t.getAttribute("name") && n === t.getAttribute("desc") && r === t.getAttribute("type") && a === t.getAttribute("accessControl") && s === t.getAttribute("transient"))
      return [];
    const o = oe(t, {
      name: i,
      desc: n,
      type: r,
      accessControl: a,
      transient: s
    });
    return [{ old: { element: t }, new: { element: o } }];
  };
}
function Ea(t) {
  return (e) => {
    const i = m(e.find((d) => d.label === "name")), n = m(e.find((d) => d.label === "desc")), r = m(e.find((d) => d.label === "type")), a = m(
      e.find((d) => d.label === "accessControl")
    ), s = m(e.find((d) => d.label === "transient")) !== "" ? m(e.find((d) => d.label === "transient")) : null, o = [], c = j(t.ownerDocument, "DO", {
      name: i,
      desc: n,
      type: r,
      accessControl: a,
      transient: s
    });
    return o.push({
      new: {
        parent: t,
        element: c
      }
    }), o;
  };
}
function yi(t) {
  const e = t.doc ? t.doc : t.parent.ownerDocument, i = ie(e, "DO", t.identity ?? NaN), [
    n,
    r,
    a,
    s,
    o,
    c,
    d,
    p
  ] = i ? [
    l("do.wizard.title.edit"),
    ka(i),
    i.getAttribute("type"),
    [
      {
        icon: "delete",
        label: l("remove"),
        action: gi(i)
      }
    ],
    i.getAttribute("name"),
    i.getAttribute("desc"),
    i.getAttribute("accessControl"),
    i.getAttribute("transient")
  ] : [
    l("do.wizard.title.add"),
    Ea(t.parent),
    null,
    void 0,
    "",
    null,
    null,
    null
  ], f = Array.from(e.querySelectorAll("DOType")).filter(re).filter((u) => u.getAttribute("id"));
  return [
    {
      title: n,
      element: i ?? void 0,
      primary: { icon: "", label: l("save"), action: r },
      menuActions: s,
      content: [
        h`<wizard-textfield
          label="name"
          .maybeValue=${o}
          helper="${l("scl.name")}"
          required
          pattern="${O.alphanumericFirstUpperCase}"
          dialogInitialFocus
        >
          ></wizard-textfield
        >`,
        h`<wizard-textfield
          label="desc"
          helper="${l("scl.desc")}"
          .maybeValue=${c}
          nullable
          pattern="${O.normalizedString}"
        ></wizard-textfield>`,
        h`<mwc-select
          fixedMenuPosition
          label="type"
          required
          helper="${l("scl.type")}"
          >${f.map(
          (u) => h`<mwc-list-item
                value=${u.id}
                ?selected=${u.id === a}
                >${u.id}</mwc-list-item
              >`
        )}</mwc-select
        >`,
        h`<wizard-textfield
          label="accessControl"
          helper="${l("scl.accessControl")}"
          .maybeValue=${d}
          nullable
          pattern="${O.normalizedString}"
        ></wizard-textfield>`,
        h`<wizard-checkbox
          label="transient"
          .maybeValue="${p}"
          helper="${l("scl.transient")}"
          nullable
        ></wizard-checkbox>`
      ]
    }
  ];
}
function vi(t, e, i) {
  if (e === "") return [];
  const n = !i || t.querySelector(
    `LNClass[name="${e}"], AbstractLNClass[name="${e}"]`
  ) ? t : i, r = Array.from(
    t.querySelectorAll(
      `LNClass[name="${e}"], AbstractLNClass[name="${e}"]`
    )
  ), a = Array.from(
    i?.querySelectorAll(
      `LNClass[name="${e}"], AbstractLNClass[name="${e}"]`
    ) ?? []
  );
  return vi(
    t,
    n.querySelector(`LNClass[name="${e}"], AbstractLNClass[name="${e}"]`)?.getAttribute("base") ?? "",
    i
  ).concat(r, a);
}
function pt(t, e, i) {
  return vi(t, e, i).flatMap(
    (r) => Array.from(r.querySelectorAll("DataObject"))
  );
}
function Ca(t, e) {
  return (i, n) => {
    const r = Array.from(
      n.shadowRoot.querySelectorAll("wizard-select")
    ).filter((s) => s.maybeValue), a = [];
    return r.forEach((s) => {
      const o = j(t.ownerDocument, "DO", {
        name: s.label,
        type: s.value
      });
      a.push({
        new: {
          parent: e,
          element: o
        }
      });
    }), a.push({
      new: {
        parent: t,
        element: e
      }
    }), a;
  };
}
function Da(t) {
  return (e, i) => {
    const n = e.getAttribute("id") ?? "", r = i.getAttribute("id") ?? "", a = n.includes(t), s = r.includes(t);
    return !a && s ? 1 : a && !s ? -1 : n.localeCompare(r);
  };
}
function Ia(t, e, i) {
  return [
    {
      title: l("lnodetype.wizard.title.select"),
      primary: {
        label: l("save"),
        icon: "",
        action: Ca(t, e)
      },
      content: i.map((n) => {
        const r = n.getAttribute("presCond"), a = n.getAttribute("name") ?? "", s = Array.from(
          t.closest("DataTypeTemplates").querySelectorAll(`DOType[cdc="${n.getAttribute("type")}"]`)
        ).sort(Da(a));
        return h`<wizard-select
          fixedMenuPosition
          naturalMenuWidth
          label="${a}"
          ?required=${r === "M"}
          ?nullable=${r !== "M"}
          .maybeValue=${null}
          >${s.map(
          (o) => h`<mwc-list-item value="${o.getAttribute("id")}"
                >${o.getAttribute("id")}</mwc-list-item
              >`
        )}</wizard-select
        >`;
      })
    }
  ];
}
function _a(t, e, i) {
  const n = [];
  return Ge(i, t).forEach(
    (r) => n.push(r)
  ), n.push({
    new: {
      parent: t,
      element: e
    }
  }), yt(n);
}
function Ta(t, e, i, n) {
  return (r, a) => {
    const s = m(r.find((A) => A.label === "id"));
    if (!s) return [];
    if (Array.from(
      e.querySelectorAll(qe)
    ).some((A) => A.getAttribute("id") === s)) return [];
    const c = m(r.find((A) => A.label === "desc")), d = r.find((A) => A.label === "lnClass")?.selected?.value, p = d ? ie(e, "LNodeType", d) : null, f = p ? p.cloneNode(!0) : j(t.ownerDocument, "LNodeType", {
      lnClass: d ?? ""
    });
    if (f.setAttribute("id", s), c && f.setAttribute("desc", c), p)
      return _a(t, f, p);
    const u = pt(i, d, n);
    return a.dispatchEvent(
      V(Ia(t, f, u))
    ), a.dispatchEvent(V()), [];
  };
}
function Na(t, e) {
  const i = t.target.selected?.value, n = i ? ie(e, "LNodeType", i) : null, r = t.target?.closest("mwc-dialog")?.querySelector('mwc-button[slot="primaryAction"]') ?? null;
  n ? (r?.setAttribute("label", l("save")), r?.setAttribute("icon", "save")) : (r?.setAttribute("label", l("next") + "..."), r?.setAttribute("icon", ""));
}
function La(t, e, i, n) {
  return [
    {
      title: l("lnodetype.wizard.title.add"),
      primary: {
        icon: "",
        label: l("next") + "...",
        action: Ta(t, e, i, n)
      },
      content: [
        h`<mwc-select
          id="lnclassnamelist"
          fixedMenuPosition
          outlined
          icon="playlist_add_check"
          label="lnClass"
          helper="Default logical nodes"
          required
          dialogInitialFocus
          @selected=${(r) => Na(r, e)}
        >
          <mwc-list-item noninteractive
            >Pre-defined lnClasses from templates</mwc-list-item
          >
          <li divider role="separator"></li>
          ${Array.from(e.querySelectorAll("LNodeType")).map(
          (r) => {
            const a = r.getAttribute("lnClass") ?? "", s = r.getAttribute("desc") ?? "";
            return h`<mwc-list-item
                twoline
                style="min-width:200px"
                graphic="icon"
                hasMeta
                value="${T(r)}"
                ><span>${a}</span>
                <span slot="secondary">${s}</span>
                <span slot="meta"
                  >${En(r, "DO").length}</span
                >
              </mwc-list-item>`;
          }
        )}
          <mwc-list-item noninteractive
            >Empty lnClasses from IEC 61850-7-4</mwc-list-item
          >
          <li divider role="separator"></li>
          ${Array.from(i.querySelectorAll("LNClasses > LNClass")).map(
          (r) => {
            const a = r.getAttribute("name") ?? "";
            return h`<mwc-list-item
                style="min-width:200px"
                graphic="icon"
                hasMeta
                value="${a}"
                ><span>${a}</span>
                <span slot="meta"
                  >${pt(i, a, n).length}</span
                >
              </mwc-list-item>`;
          }
        )}
          <mwc-list-item noninteractive
            >Empty lnClasses from IEC 61850-7-420</mwc-list-item
          >
          <li divider role="separator"></li>
          ${Array.from(n.querySelectorAll("LNClasses > LNClass")).map(
          (r) => {
            const a = r.getAttribute("name") ?? "";
            return h`<mwc-list-item
                style="min-width:200px"
                graphic="icon"
                hasMeta
                value="${a}"
                ><span>${a}</span>
                <span slot="meta"
                  >${pt(i, a, n).length}</span
                >
              </mwc-list-item>`;
          }
        )}
        </mwc-select>`,
        h`<wizard-textfield
          label="id"
          helper="${l("scl.id")}"
          .maybeValue=${""}
          required
          maxlength="127"
          minlength="1"
          pattern="${O.nmToken}"
        ></wizard-textfield>`,
        h`<wizard-textfield
          label="desc"
          helper="${l("scl.desc")}"
          .maybeValue=${null}
          nullable
          pattern="${O.normalizedString}"
        ></wizard-textfield>`
      ]
    }
  ];
}
function $a(t) {
  return (e) => {
    const i = m(e.find((c) => c.label === "id")), n = m(e.find((c) => c.label === "desc")), r = m(e.find((c) => c.label === "lnClass"));
    if (i === t.getAttribute("id") && n === t.getAttribute("desc") && r == t.getAttribute("lnClass"))
      return [];
    const a = oe(t, { id: i, desc: n, lnClass: r }), s = [];
    s.push({ old: { element: t }, new: { element: a } });
    const o = t.getAttribute("id");
    return Array.from(
      t.ownerDocument.querySelectorAll(
        `LN0[lnType="${o}"], LN[lnType="${o}"]`
      )
    ).forEach((c) => {
      const d = c.cloneNode(!1);
      d.setAttribute("lnType", i), s.push({ old: { element: c }, new: { element: d } });
    }), [
      { title: l("lnodetype.action.edit", { oldId: o, newId: i }), actions: s }
    ];
  };
}
function Bt(t, e) {
  const i = ie(e, "LNodeType", t);
  if (i)
    return [
      {
        title: l("lnodetype.wizard.title.edit"),
        element: i,
        primary: {
          icon: "",
          label: l("save"),
          action: $a(i)
        },
        menuActions: [
          {
            label: l("remove"),
            icon: "delete",
            action: gi(i)
          },
          {
            label: l("scl.DO"),
            icon: "playlist_add",
            action: wa(i)
          }
        ],
        content: [
          h`<wizard-textfield
          label="id"
          helper="${l("scl.id")}"
          .maybeValue=${i.getAttribute("id")}
          required
          maxlength="127"
          minlength="1"
          pattern="${O.nmToken}"
          dialogInitialFocus
        ></wizard-textfield>`,
          h`<wizard-textfield
          label="desc"
          helper="${l("scl.desc")}"
          .maybeValue=${i.getAttribute("desc")}
          nullable
          pattern="${O.normalizedString}"
        ></wizard-textfield>`,
          h`<wizard-textfield
          label="lnClass"
          helper="${l("scl.lnClass")}"
          .maybeValue=${i.getAttribute("lnClass")}
          required
          pattern="${O.lnClass}"
        ></wizard-textfield>`,
          h`
          <mwc-list
            style="margin-top: 0px;"
            @selected=${(n) => {
            const r = yi({
              identity: n.target.selected.value,
              doc: e
            });
            r && n.target.dispatchEvent(ce(r));
          }}
          >
            ${Array.from(i.querySelectorAll("DO")).map(
            (n) => h`<mwc-list-item
                  twoline
                  tabindex="0"
                  value="${T(n)}"
                  ><span>${n.getAttribute("name")}</span
                  ><span slot="secondary"
                    >${"#" + n.getAttribute("type")}</span
                  ></mwc-list-item
                >`
          )}
          </mwc-list>
        `
        ]
      }
    ];
}
const za = {
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
}, Ra = {
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
}, qt = { en: Ra, de: za };
async function Pa(t) {
  return Object.keys(qt).includes(t) ? qt[t] : {};
}
Ui({ loader: Pa, empty: (t) => t });
const Si = localStorage.getItem("language") || "en";
console.log("SETTING LANGUAGE TO", Si);
Xi(Si);
var Oa = Object.defineProperty, Ai = (t, e, i, n) => {
  for (var r = void 0, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (r = s(e, i, r) || r);
  return r && Oa(e, i, r), r;
};
const Fe = fetch("public/xml/templates.scd").then((t) => t.text()).then((t) => new DOMParser().parseFromString(t, "application/xml")), Fa = fetch("public/xml/IEC_61850-7-4_2007B3.nsd").then((t) => t.text()).then((t) => new DOMParser().parseFromString(t, "application/xml")), Va = fetch("public/xml/IEC_61850-7-420_2019A4.nsd").then((t) => t.text()).then((t) => new DOMParser().parseFromString(t, "application/xml"));
class xi extends Ve {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
  async openCreateLNodeTypeWizard() {
    this.createDataTypeTemplates(), this.dispatchEvent(
      V(
        La(
          this.doc.querySelector(":root > DataTypeTemplates"),
          await Fe,
          await Fa,
          await Va
        )
      )
    );
  }
  openLNodeTypeWizard(e) {
    Bt(e, this.doc) && this.dispatchEvent(
      V(() => Bt(e, this.doc))
    );
  }
  async openCreateDOTypeWizard() {
    this.createDataTypeTemplates(), this.dispatchEvent(
      V(
        va(
          this.doc.querySelector(":root > DataTypeTemplates"),
          await Fe
        )
      )
    );
  }
  openDOTypeWizard(e) {
    Ht(e, this.doc) && this.dispatchEvent(
      V(() => Ht(e, this.doc))
    );
  }
  openDATypeWizard(e) {
    Mt(e, this.doc) && this.dispatchEvent(
      V(() => Mt(e, this.doc))
    );
  }
  async openCreateDATypeWizard() {
    this.createDataTypeTemplates(), this.dispatchEvent(
      V(
        la(
          this.doc.querySelector(":root > DataTypeTemplates"),
          await Fe
        )
      )
    );
  }
  openEnumTypeWizard(e) {
    Vt(e, this.doc) && this.dispatchEvent(
      V(() => Vt(e, this.doc))
    );
  }
  async openCreateEnumWizard() {
    this.createDataTypeTemplates(), this.dispatchEvent(
      V(
        Br(
          this.doc.querySelector(":root > DataTypeTemplates"),
          await Fe
        )
      )
    );
  }
  createDataTypeTemplates() {
    this.doc.querySelector(":root > DataTypeTemplates") || this.dispatchEvent(
      Ae({
        new: {
          parent: this.doc.documentElement,
          element: j(this.doc, "DataTypeTemplates", {})
        }
      })
    );
  }
  render() {
    return this.doc?.querySelector(":root > DataTypeTemplates") ? h`
      <div id="containerTemplates">
        <section tabindex="0">
          <h1>
            ${l("scl.LNodeType")}
            <nav>
              <abbr title="${l("add")}">
                <mwc-icon-button
                  icon="playlist_add"
                  @click=${() => this.openCreateLNodeTypeWizard()}
                ></mwc-icon-button>
              </abbr>
            </nav>
          </h1>
          <filtered-list
            id="lnodetypelist"
            @action=${(e) => this.openLNodeTypeWizard(
      e.target.selected.value
    )}
          >
            ${Array.from(
      this.doc.querySelectorAll(
        ":root > DataTypeTemplates > LNodeType"
      ) ?? []
    ).map(
      (e) => h`<mwc-list-item
              twoline
              value="${T(e)}"
              tabindex="0"
              hasMeta
              ><span>${e.getAttribute("id")}</span
              ><span slot="secondary">${e.getAttribute(
        "lnClass"
      )}</span></span><span slot="meta"
                >${e.querySelectorAll("DO").length}</span
              ></mwc-list-item
            >`
    )}
          </filtered-list>
        </section>
        <section tabindex="0">
          <h1>
            ${l("scl.DOType")}
            <nav>
              <abbr title="${l("add")}">
                <mwc-icon-button
                  icon="playlist_add"
                  @click=${() => this.openCreateDOTypeWizard()}
                ></mwc-icon-button>
              </abbr>
            </nav>
          </h1>
          <filtered-list
            id="dotypelist"
            @action=${(e) => this.openDOTypeWizard(
      e.target.selected.value
    )}
          >
            ${Array.from(
      this.doc.querySelectorAll(":root > DataTypeTemplates > DOType") ?? []
    ).map(
      (e) => h`<mwc-list-item
                  twoline
                  value="${T(e)}"
                  tabindex="0"
                  hasMeta
                  ><span>${e.getAttribute("id")}</span
                  ><span slot="secondary">${e.getAttribute(
        "cdc"
      )}</span></span><span slot="meta"
                    >${e.querySelectorAll("SDO, DA").length}</span
                  ></mwc-list-item
                >`
    )}
          </filtered-list>
        </section>
        <section tabindex="0">
          <h1>
            ${l("scl.DAType")}
            <nav>
              <abbr title="${l("add")}">
                <mwc-icon-button
                  icon="playlist_add"
                  @click=${() => this.openCreateDATypeWizard()}
                ></mwc-icon-button>
              </abbr>
            </nav>
          </h1>
          <filtered-list
            id="datypelist"
            @action=${(e) => this.openDATypeWizard(
      e.target.selected.value
    )}
          >
            ${Array.from(
      this.doc.querySelectorAll(":root > DataTypeTemplates > DAType") ?? []
    ).map(
      (e) => h`<mwc-list-item
                  value="${T(e)}"
                  tabindex="0"
                  hasMeta
                  ><span>${e.getAttribute("id")}</span
                  ><span slot="meta"
                    >${e.querySelectorAll("BDA").length}</span
                  ></mwc-list-item
                >`
    )}
          </filtered-list>
        </section>
        <section tabindex="0">
          <h1>
            ${l("scl.EnumType")}
            <nav>
              <abbr title="${l("add")}">
                <mwc-icon-button
                  icon="playlist_add"
                  @click=${() => this.openCreateEnumWizard()}
                ></mwc-icon-button>
              </abbr>
            </nav>
          </h1>
          <filtered-list
            id="enumtypelist"
            @action=${(e) => this.openEnumTypeWizard(
      e.target.selected.value
    )}
          >
            ${Array.from(
      this.doc.querySelectorAll(
        ":root > DataTypeTemplates > EnumType"
      ) ?? []
    ).map(
      (e) => h`<mwc-list-item
                  value="${T(e)}"
                  tabindex="0"
                  hasMeta
                  ><span>${e.getAttribute("id")}</span
                  ><span slot="meta"
                    >${e.querySelectorAll("EnumVal").length}</span
                  ></mwc-list-item
                >`
    )}
          </filtered-list>
        </section>
      </div>
    ` : h`<h1>
        <span style="color: var(--base1)">${l("templates.missing")}</span>
        <mwc-fab
          extended
          icon="add"
          label="${l("templates.add")}"
          @click=${() => this.createDataTypeTemplates()}
        ></mwc-fab>
      </h1>`;
  }
  static {
    this.styles = ye`
    ${Fr}

    mwc-fab {
      position: fixed;
      bottom: 32px;
      right: 32px;
    }

    :host {
      width: 100vw;
    }

    #containerTemplates {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(316px, auto));
    }

    @media (max-width: 387px) {
      #containerTemplates {
        grid-template-columns: repeat(auto-fit, minmax(196px, auto));
      }
    }
  `;
  }
}
Ai([
  v({ attribute: !1 })
], xi.prototype, "doc");
Ai([
  v({ type: Number })
], xi.prototype, "editCount");
export {
  xi as default
};
