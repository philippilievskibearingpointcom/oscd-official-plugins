import { LitElement as De, query as _, property as b, state as P, html as u, css as be, customElement as pe, queryAsync as pi, eventOptions as cn, queryAssignedNodes as mi, unsafeCSS as ln, queryAll as Nt, svg as z } from "lit-element";
import { NodePart as dn, AttributePart as un, directive as hi, html as T, render as pn } from "lit-html";
import { Select as mn } from "@material/mwc-select";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
import { TextField as hn } from "@material/mwc-textfield";
import "@material/mwc-formfield";
import "@material/mwc-button";
import "@material/mwc-icon";
import "@material/mwc-icon-button-toggle";
import { List as fn } from "@material/mwc-list";
var yt = function(e, t) {
  return yt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, n) {
    i.__proto__ = n;
  } || function(i, n) {
    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (i[r] = n[r]);
  }, yt(e, t);
};
function bn(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  yt(e, t);
  function i() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i());
}
var He = function() {
  return He = Object.assign || function(t) {
    for (var i, n = 1, r = arguments.length; n < r; n++) {
      i = arguments[n];
      for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
    }
    return t;
  }, He.apply(this, arguments);
};
function g(e, t, i, n) {
  var r = arguments.length, a = r < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, i) : n, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, i, n);
  else for (var o = e.length - 1; o >= 0; o--) (s = e[o]) && (a = (r < 3 ? s(a) : r > 3 ? s(t, i, a) : s(t, i)) || a);
  return r > 3 && a && Object.defineProperty(t, i, a), a;
}
function Ue(e) {
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
function gn(e, t) {
  var i = e.matches || e.webkitMatchesSelector || e.msMatchesSelector;
  return i.call(e, t);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const yn = (e) => e.nodeType === Node.ELEMENT_NODE, fi = () => {
}, vn = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", fi, vn);
document.removeEventListener("x", fi);
const bi = (e = window.document) => {
  let t = e.activeElement;
  const i = [];
  if (!t)
    return i;
  for (; t && (i.push(t), t.shadowRoot); )
    t = t.shadowRoot.activeElement;
  return i;
}, Sn = (e) => {
  const t = bi();
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
class Tt extends De {
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
var gi = (
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
var An = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, xn = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Vt = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function wn(e, t, i) {
  if (!e)
    return { x: 0, y: 0 };
  var n = t.x, r = t.y, a = n + i.left, s = r + i.top, o, c;
  if (e.type === "touchstart") {
    var l = e;
    o = l.changedTouches[0].pageX - a, c = l.changedTouches[0].pageY - s;
  } else {
    var p = e;
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
var Mt = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Ft = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], je = [], kn = (
  /** @class */
  function(e) {
    bn(t, e);
    function t(i) {
      var n = e.call(this, He(He({}, t.defaultAdapter), i)) || this;
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
        return An;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return xn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return Vt;
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
          for (var a = Ue(Mt), s = a.next(); !s.done; s = a.next()) {
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
    }, t.prototype.registerDeactivationHandlers = function(i) {
      var n, r;
      if (i.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var a = Ue(Ft), s = a.next(); !s.done; s = a.next()) {
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
    }, t.prototype.deregisterRootHandlers = function() {
      var i, n;
      try {
        for (var r = Ue(Mt), a = r.next(); !a.done; a = r.next()) {
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
        for (var r = Ue(Ft), a = r.next(); !a.done; a = r.next()) {
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
            var o = i !== void 0 && je.length > 0 && je.some(function(c) {
              return n.adapter.containsEventTarget(c);
            });
            if (o) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (je.push(i.target), this.registerDeactivationHandlers(i)), r.wasElementMadeActive = this.checkElementMadeActive(i), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              je = [], !r.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (r.wasElementMadeActive = n.checkElementMadeActive(i), r.wasElementMadeActive && n.animateActivation()), r.wasElementMadeActive || (n.activationState = n.defaultActivationState());
            });
          }
        }
      }
    }, t.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, t.prototype.animateActivation = function() {
      var i = this, n = t.strings, r = n.VAR_FG_TRANSLATE_START, a = n.VAR_FG_TRANSLATE_END, s = t.cssClasses, o = s.FG_DEACTIVATION, c = s.FG_ACTIVATION, l = t.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var p = "", f = "";
      if (!this.adapter.isUnbounded()) {
        var h = this.getFgTranslationCoordinates(), x = h.startPoint, S = h.endPoint;
        p = x.x + "px, " + x.y + "px", f = S.x + "px, " + S.y + "px";
      }
      this.adapter.updateCssVariable(r, p), this.adapter.updateCssVariable(a, f), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(o), this.adapter.computeBoundingRect(), this.adapter.addClass(c), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, l);
    }, t.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, n = i.activationEvent, r = i.wasActivatedByPointer, a;
      r ? a = wn(n, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      }, Vt.FG_DEACTIVATION_MS));
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
        var r = He({}, n);
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
  }(gi)
);
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
const yi = /* @__PURE__ */ new WeakMap(), it = (e) => (...t) => {
  const i = e(...t);
  return yi.set(i, !0), i;
}, Ht = (e) => typeof e == "function" && yi.has(e);
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
const mt = {};
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
const vi = (e) => e === null || !(typeof e == "object" || typeof e == "function");
class nt {
  constructor(t) {
    this.value = void 0, this.committer = t;
  }
  setValue(t) {
    t !== mt && (!vi(t) || t !== this.value) && (this.value = t, Ht(t) || (this.committer.dirty = !0));
  }
  commit() {
    for (; Ht(this.value); ) {
      const t = this.value;
      this.value = mt, t(this);
    }
    this.value !== mt && this.committer.commit();
  }
}
class Si extends nt {
}
let In = !1;
(() => {
  try {
    const e = {
      get capture() {
        return In = !0, !1;
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
class Cn {
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
const qt = /* @__PURE__ */ new WeakMap(), Oe = it((e) => (t) => {
  if (!(t instanceof nt) || t instanceof Si || t.committer.name !== "class" || t.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = t, { element: n } = i;
  let r = qt.get(t);
  r === void 0 && (n.setAttribute("class", i.strings.join(" ")), qt.set(t, r = /* @__PURE__ */ new Set()));
  const a = n.classList || new Cn(n);
  r.forEach((s) => {
    s in e || (a.remove(s), r.delete(s));
  });
  for (const s in e) {
    const o = e[s];
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
const Bt = /* @__PURE__ */ new WeakMap(), En = it((e) => (t) => {
  if (!(t instanceof nt) || t instanceof Si || t.committer.name !== "style" || t.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = t, { style: n } = i.element;
  let r = Bt.get(t);
  r === void 0 && (n.cssText = i.strings.join(" "), Bt.set(t, r = /* @__PURE__ */ new Set())), r.forEach((a) => {
    a in e || (r.delete(a), a.indexOf("-") === -1 ? n[a] = null : n.removeProperty(a));
  });
  for (const a in e)
    r.add(a), a.indexOf("-") === -1 ? n[a] = e[a] : n.setProperty(a, e[a]);
});
class H extends Tt {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = kn;
  }
  get isActive() {
    return gn(this.parentElement || this, ":active");
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
    return u`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Oe(n)}"
          style="${En({
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
  _(".mdc-ripple-surface")
], H.prototype, "mdcRoot", void 0);
g([
  b({ type: Boolean })
], H.prototype, "primary", void 0);
g([
  b({ type: Boolean })
], H.prototype, "accent", void 0);
g([
  b({ type: Boolean })
], H.prototype, "unbounded", void 0);
g([
  b({ type: Boolean })
], H.prototype, "disabled", void 0);
g([
  b({ type: Boolean })
], H.prototype, "activated", void 0);
g([
  b({ type: Boolean })
], H.prototype, "selected", void 0);
g([
  b({ type: Boolean })
], H.prototype, "internalUseStateLayerCustomProperties", void 0);
g([
  P()
], H.prototype, "hovering", void 0);
g([
  P()
], H.prototype, "bgFocused", void 0);
g([
  P()
], H.prototype, "fgActivation", void 0);
g([
  P()
], H.prototype, "fgDeactivation", void 0);
g([
  P()
], H.prototype, "fgScale", void 0);
g([
  P()
], H.prototype, "fgSize", void 0);
g([
  P()
], H.prototype, "translateStart", void 0);
g([
  P()
], H.prototype, "translateEnd", void 0);
g([
  P()
], H.prototype, "leftPos", void 0);
g([
  P()
], H.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Dn = be`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let vt = class extends H {
};
vt.styles = [Dn];
vt = g([
  pe("mwc-ripple")
], vt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ne = (e) => (
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
          const c = this.constructor._observers.get(s);
          c !== void 0 && c.call(this, this[s], a);
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
class Ai {
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
class U extends De {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new Ai(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const t = this.renderText(), i = this.graphic ? this.renderGraphic() : u``, n = this.hasMeta ? this.renderMeta() : u``;
    return u`
      ${this.renderRipple()}
      ${i}
      ${t}
      ${n}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? u`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? u`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const t = {
      multi: this.multipleGraphics
    };
    return u`
      <span class="mdc-deprecated-list-item__graphic material-icons ${Oe(t)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return u`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const t = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return u`
      <span class="mdc-deprecated-list-item__text">
        ${t}
      </span>`;
  }
  renderSingleLine() {
    return u`<slot></slot>`;
  }
  renderTwoline() {
    return u`
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
  _("slot")
], U.prototype, "slotElement", void 0);
g([
  pi("mwc-ripple")
], U.prototype, "ripple", void 0);
g([
  b({ type: String })
], U.prototype, "value", void 0);
g([
  b({ type: String, reflect: !0 })
], U.prototype, "group", void 0);
g([
  b({ type: Number, reflect: !0 })
], U.prototype, "tabindex", void 0);
g([
  b({ type: Boolean, reflect: !0 }),
  Ne(function(e) {
    e ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], U.prototype, "disabled", void 0);
g([
  b({ type: Boolean, reflect: !0 })
], U.prototype, "twoline", void 0);
g([
  b({ type: Boolean, reflect: !0 })
], U.prototype, "activated", void 0);
g([
  b({ type: String, reflect: !0 })
], U.prototype, "graphic", void 0);
g([
  b({ type: Boolean })
], U.prototype, "multipleGraphics", void 0);
g([
  b({ type: Boolean })
], U.prototype, "hasMeta", void 0);
g([
  b({ type: Boolean, reflect: !0 }),
  Ne(function(e) {
    e ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], U.prototype, "noninteractive", void 0);
g([
  b({ type: Boolean, reflect: !0 }),
  Ne(function(e) {
    const t = this.getAttribute("role"), i = t === "gridcell" || t === "option" || t === "row" || t === "tab";
    if (i && e ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(e, "property");
  })
], U.prototype, "selected", void 0);
g([
  P()
], U.prototype, "shouldRenderRipple", void 0);
g([
  P()
], U.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const xi = be`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let St = class extends U {
};
St.styles = [xi];
St = g([
  pe("mwc-list-item")
], St);
function re(e, t, i) {
  const n = e.createElementNS(e.documentElement.namespaceURI, t);
  return Object.entries(i).filter(([r, a]) => a !== null).forEach(([r, a]) => n.setAttribute(r, a)), n;
}
function q(e, t) {
  const i = e.cloneNode(!1);
  return Object.entries(t).forEach(([n, r]) => {
    r === null ? i.removeAttribute(n) : i.setAttribute(n, r);
  }), i;
}
const Nn = 1e3 * 60, At = "langChanged";
function Tn(e, t, i) {
  return Object.entries(xt(t || {})).reduce((n, [r, a]) => n.replace(new RegExp(`{{[  ]*${r}[  ]*}}`, "gm"), String(xt(a))), e);
}
function _n(e, t) {
  const i = e.split(".");
  let n = t.strings;
  for (; n != null && i.length > 0; )
    n = n[i.shift()];
  return n != null ? n.toString() : null;
}
function xt(e) {
  return typeof e == "function" ? e() : e;
}
const Ln = () => ({
  loader: () => Promise.resolve({}),
  empty: (e) => `[${e}]`,
  lookup: _n,
  interpolate: Tn,
  translationCache: {}
});
let Be = Ln();
function $n(e) {
  return Be = Object.assign(Object.assign({}, Be), e);
}
function zn(e) {
  window.dispatchEvent(new CustomEvent(At, { detail: e }));
}
function Rn(e, t, i = Be) {
  zn({
    previousStrings: i.strings,
    previousLang: i.lang,
    lang: i.lang = e,
    strings: i.strings = t
  });
}
function Pn(e, t) {
  const i = (n) => e(n.detail);
  return window.addEventListener(At, i, t), () => window.removeEventListener(At, i);
}
async function On(e, t = Be) {
  const i = await t.loader(e, t);
  t.translationCache = {}, Rn(e, i, t);
}
function d(e, t, i = Be) {
  let n = i.translationCache[e] || (i.translationCache[e] = i.lookup(e, i) || i.empty(e, i));
  return t = t != null ? xt(t) : null, t != null ? i.interpolate(n, t, i) : n;
}
function wi(e) {
  return e instanceof dn ? e.startNode.isConnected : e instanceof un ? e.committer.element.isConnected : e.element.isConnected;
}
function Vn(e) {
  for (const [t] of e)
    wi(t) || e.delete(t);
}
function Mn(e) {
  "requestIdleCallback" in window ? window.requestIdleCallback(e) : setTimeout(e);
}
function Fn(e, t) {
  setInterval(() => Mn(() => Vn(e)), t);
}
const _t = /* @__PURE__ */ new Map();
function Hn() {
  Pn((e) => {
    for (const [t, i] of _t)
      wi(t) && ki(t, i, e);
  });
}
Hn();
Fn(_t, Nn);
function ki(e, t, i) {
  const n = t(i);
  e.value !== n && (e.setValue(n), e.commit());
}
hi((e) => (t) => {
  _t.set(t, e), ki(t, e);
});
var qn = Object.defineProperty, Bn = Object.getOwnPropertyDescriptor, me = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Bn(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (r = (n ? s(t, i, r) : s(r)) || r);
  return n && r && qn(t, i, r), r;
};
let te = class extends hn {
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
    return this.reservedValues && this.reservedValues.some((e) => e === this.value) ? (this.setCustomValidity(d("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? u`<div style="position:relative;">
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
      </div>` : u``;
  }
  renderMulplierList() {
    return u`${this.multipliers.map(
      (e) => u`<mwc-list-item ?selected=${e === this.multiplier}
          >${e === null ? d("textfield.noMultiplier") : e}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? u`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : u``;
  }
  render() {
    return u`
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
me([
  b({ type: Boolean })
], te.prototype, "nullable", 2);
me([
  b({ type: Array })
], te.prototype, "multipliers", 2);
me([
  b({ type: String })
], te.prototype, "multiplier", 1);
me([
  b({ type: String })
], te.prototype, "unit", 2);
me([
  P()
], te.prototype, "null", 1);
me([
  b({ type: String })
], te.prototype, "maybeValue", 1);
me([
  b({ type: String })
], te.prototype, "defaultValue", 2);
me([
  b({ type: Array })
], te.prototype, "reservedValues", 2);
me([
  _("mwc-switch")
], te.prototype, "nullSwitch", 2);
me([
  _("mwc-menu")
], te.prototype, "multiplierMenu", 2);
me([
  _("mwc-icon-button")
], te.prototype, "multiplierButton", 2);
te = me([
  pe("wizard-textfield")
], te);
var Gn = Object.defineProperty, Un = Object.getOwnPropertyDescriptor, $e = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Un(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (r = (n ? s(t, i, r) : s(r)) || r);
  return n && r && Gn(t, i, r), r;
};
let xe = class extends mn {
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
    return this.nullable ? u`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : u``;
  }
  render() {
    return u`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
$e([
  b({ type: Boolean })
], xe.prototype, "nullable", 2);
$e([
  P()
], xe.prototype, "null", 1);
$e([
  b({ type: String })
], xe.prototype, "maybeValue", 1);
$e([
  b({ type: String })
], xe.prototype, "defaultValue", 2);
$e([
  b({ type: Array })
], xe.prototype, "reservedValues", 2);
$e([
  _("mwc-switch")
], xe.prototype, "nullSwitch", 2);
xe = $e([
  pe("wizard-select")
], xe);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function jn(e, t, i) {
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
function Lt(e, t, i) {
  if (t !== void 0)
    return jn(e, t, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ii extends Tt {
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
Ii.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const ht = /* @__PURE__ */ new WeakMap(), Ae = it((e) => (t) => {
  const i = ht.get(t);
  if (e === void 0 && t instanceof nt) {
    if (i !== void 0 || !ht.has(t)) {
      const n = t.committer.name;
      t.committer.element.removeAttribute(n);
    }
  } else e !== i && t.setValue(e);
  ht.set(t, e);
});
class B extends Ii {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new Ai(() => (this.shouldRenderRipple = !0, this.ripple.then((t) => this.rippleElement = t), this.ripple));
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
    return this.shouldRenderRipple ? u`<mwc-ripple
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
    return u`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Oe(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${Ae(this.name)}"
              aria-checked="${Ae(n)}"
              aria-label="${Ae(this.ariaLabel)}"
              aria-labelledby="${Ae(this.ariaLabelledBy)}"
              aria-describedby="${Ae(this.ariaDescribedBy)}"
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
  _(".mdc-checkbox")
], B.prototype, "mdcRoot", void 0);
g([
  _("input")
], B.prototype, "formElement", void 0);
g([
  b({ type: Boolean, reflect: !0 })
], B.prototype, "checked", void 0);
g([
  b({ type: Boolean })
], B.prototype, "indeterminate", void 0);
g([
  b({ type: Boolean, reflect: !0 })
], B.prototype, "disabled", void 0);
g([
  b({ type: String, reflect: !0 })
], B.prototype, "name", void 0);
g([
  b({ type: String })
], B.prototype, "value", void 0);
g([
  Lt,
  b({ type: String, attribute: "aria-label" })
], B.prototype, "ariaLabel", void 0);
g([
  Lt,
  b({ type: String, attribute: "aria-labelledby" })
], B.prototype, "ariaLabelledBy", void 0);
g([
  Lt,
  b({ type: String, attribute: "aria-describedby" })
], B.prototype, "ariaDescribedBy", void 0);
g([
  b({ type: Boolean })
], B.prototype, "reducedTouchTarget", void 0);
g([
  P()
], B.prototype, "animationClass", void 0);
g([
  P()
], B.prototype, "shouldRenderRipple", void 0);
g([
  P()
], B.prototype, "focused", void 0);
g([
  P()
], B.prototype, "useStateLayerCustomProperties", void 0);
g([
  pi("mwc-ripple")
], B.prototype, "ripple", void 0);
g([
  cn({ passive: !0 })
], B.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Wn = be`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let wt = class extends B {
};
wt.styles = [Wn];
wt = g([
  pe("mwc-checkbox")
], wt);
var Kn = Object.defineProperty, Zn = Object.getOwnPropertyDescriptor, ae = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Zn(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (r = (n ? s(t, i, r) : s(r)) || r);
  return n && r && Kn(t, i, r), r;
};
let Z = class extends De {
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
    return this.nullable ? u`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : u``;
  }
  render() {
    return u`
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
  b({ type: String })
], Z.prototype, "label", 2);
ae([
  b({ type: String })
], Z.prototype, "helper", 2);
ae([
  b({ type: Boolean })
], Z.prototype, "nullable", 2);
ae([
  b({ type: Boolean })
], Z.prototype, "defaultChecked", 2);
ae([
  b({ type: String })
], Z.prototype, "maybeValue", 1);
ae([
  b({ type: Boolean })
], Z.prototype, "disabled", 2);
ae([
  P()
], Z.prototype, "null", 1);
ae([
  P()
], Z.prototype, "checked", 1);
ae([
  P()
], Z.prototype, "deactivateCheckbox", 2);
ae([
  P()
], Z.prototype, "formfieldLabel", 1);
ae([
  _("mwc-switch")
], Z.prototype, "nullSwitch", 2);
ae([
  _("mwc-checkbox")
], Z.prototype, "checkbox", 2);
Z = ae([
  pe("wizard-checkbox")
], Z);
function Xn(e) {
  return typeof e == "function";
}
function m(e) {
  return e instanceof te || e instanceof xe || e instanceof Z ? e.maybeValue : e.value ?? null;
}
function ve(e, t) {
  if (!e)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...t,
      detail: { wizard: null, ...t?.detail }
    });
  const i = Xn(e) ? e : () => e;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { wizard: i, ...t?.detail }
  });
}
function L(e) {
  return ve(e, { detail: { subwizard: !0 } });
}
function W(e) {
  const t = e.split(">"), i = t.pop() ?? "";
  return [t.join(">"), i];
}
const V = ":not(*)";
function Qn(e) {
  return `${e.getAttribute("version")}	${e.getAttribute("revision")}`;
}
function Yn(e, t) {
  const [i, n] = t.split("	");
  return !i || !n ? V : `${e}[version="${i}"][revision="${n}"]`;
}
function Gt(e) {
  return I(e.parentElement) + ">" + e.getAttribute("connectivityNode");
}
function Ut(e, t) {
  const [i, n] = W(t), r = M[e].parents.flatMap(
    (a) => j(a, i).split(",")
  );
  return G(
    r,
    [">"],
    [`${e}[connectivityNode="${n}"]`]
  ).map((a) => a.join("")).join(",");
}
function Jn(e) {
  const [t, i, n, r, a, s] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((o) => e.getAttribute(o));
  return t === "None" ? `${I(e.parentElement)}>(${r} ${s} ${a})` : `${t} ${i || "(Client)"}/${n ?? ""} ${r} ${a ?? ""}`;
}
function er(e, t) {
  if (t.endsWith(")")) {
    const [h, x] = W(t), [S, k, C] = x.substring(1, x.length - 1).split(" ");
    if (!S || !k) return V;
    const A = M[e].parents.flatMap(
      (w) => j(w, h).split(",")
    );
    return G(
      A,
      [">"],
      [`${e}[iedName="None"][lnClass="${S}"][lnType="${k}"][lnInst="${C}"]`]
    ).map((w) => w.join("")).join(",");
  }
  const [i, n, r, a, s] = t.split(/[ /]/);
  if (!i || !n || !a) return V;
  const [
    o,
    c,
    l,
    p,
    f
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
    c,
    l,
    p,
    f
  ).map((h) => h.join("")).join(",");
}
function tr(e) {
  return `${I(e.parentElement)}>${e.getAttribute(
    "iedName"
  )} ${e.getAttribute("apName")}`;
}
function ir(e, t) {
  const [i, n] = W(t), [r, a] = n.split(" ");
  return `${j(
    "IED",
    i
  )}>${e}[iedName="${r}"][apName="${a}"]`;
}
function nr(e) {
  return `${I(e.parentElement)}>${e.getAttribute("associationID") ?? ""}`;
}
function rr(e, t) {
  const [i, n] = W(t);
  return n ? `${j(
    "Server",
    i
  )}>${e}[associationID="${n}"]` : V;
}
function ar(e) {
  return `${I(e.closest("IED"))}>>${e.getAttribute("inst")}`;
}
function sr(e, t) {
  const [i, n] = t.split(">>");
  return n ? `IED[name="${i}"] ${e}[inst="${n}"]` : V;
}
function or(e) {
  const t = e.textContent, [i, n, r, a, s] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => e.getAttribute(o));
  return `${I(e.parentElement)}>${t} ${i || ""} ${n || ""}/${r ?? ""} ${a ?? ""} ${s ?? ""}`;
}
function cr(e, t) {
  const [i, n] = W(t), [r, a, s, o, c, l] = n.split(/[ /]/), [
    p,
    f,
    h,
    x,
    S,
    k
  ] = [
    M[e].parents.flatMap(
      (C) => j(C, i).split(",")
    ),
    [`${r}`],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    l ? [`[lnInst="${l}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return G(
    p,
    [">"],
    [e],
    f,
    h,
    x,
    S,
    k
  ).map((C) => C.join("")).join(",");
}
function lr(e) {
  const [t, i, n, r, a, s, o, c] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((p) => e.getAttribute(p)), l = `${t}/${i ?? ""} ${n} ${r ?? ""}.${a} ${s || ""}`;
  return `${I(e.parentElement)}>${l} (${o}${c ? " [" + c + "]" : ""})`;
}
function dr(e, t) {
  const [i, n] = W(t), [r, a, s, o] = n.split(/[ /.]/), c = n.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), l = c && c[1] ? c[1] : "", p = c && c[2] ? c[2] : "", f = n.match(/\(([A-Z]{2})/), h = n.match(/ \[([0-9]{1,2})\]/), x = f && f[1] ? f[1] : "", S = h && h[1] ? h[1] : "", [
    k,
    C,
    A,
    w,
    F,
    le,
    dt,
    ut,
    pt
  ] = [
    M[e].parents.flatMap(
      (Me) => j(Me, i).split(",")
    ),
    [`[ldInst="${r}"]`],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    o ? [`[lnInst="${o}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${l}"]`],
    p ? [`[daName="${p}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${x}"]`],
    S ? [`[ix="${S}"]`] : [":not([ix])", '[ix=""]']
  ];
  return G(
    k,
    [">"],
    [e],
    C,
    A,
    w,
    F,
    le,
    dt,
    ut,
    pt
  ).map((Me) => Me.join("")).join(",");
}
function ur(e) {
  if (!e.parentElement) return NaN;
  const t = I(e.parentElement), i = e.getAttribute("iedName"), n = e.getAttribute("intAddr"), r = Array.from(
    e.parentElement.querySelectorAll(`ExtRef[intAddr="${n}"]`)
  ).indexOf(e);
  if (n) return `${t}>${n}[${r}]`;
  const [
    a,
    s,
    o,
    c,
    l,
    p,
    f,
    h,
    x,
    S,
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
  ].map((F) => e.getAttribute(F)), A = C ? `${f}:${C} ${h ?? ""}/${x ?? ""} ${S ?? ""} ${k ?? ""}` : "", w = `${i} ${a}/${s ?? ""} ${o} ${c ?? ""} ${l} ${p || ""}`;
  return `${t}>${A ? A + " " : ""}${w}${n ? `@${n}` : ""}`;
}
function pr(e, t) {
  const [i, n] = W(t), r = M[e].parents.flatMap(
    (Fe) => j(Fe, i).split(",")
  );
  if (n.endsWith("]")) {
    const [Fe] = n.split("["), sn = [`[intAddr="${Fe}"]`];
    return G(r, [">"], [e], sn).map((on) => on.join("")).join(",");
  }
  let a, s, o, c, l, p, f, h, x, S, k, C, A, w;
  !n.includes(":") && !n.includes("@") ? [a, s, o, c, l, p, f] = n.split(/[ /]/) : n.includes(":") && !n.includes("@") ? [
    h,
    x,
    S,
    k,
    C,
    A,
    a,
    s,
    o,
    c,
    l,
    p,
    f
  ] = n.split(/[ /:]/) : !n.includes(":") && n.includes("@") ? [a, s, o, c, l, p, f, w] = n.split(/[ /@]/) : [
    h,
    x,
    S,
    k,
    C,
    A,
    a,
    s,
    o,
    c,
    l,
    p,
    f,
    w
  ] = n.split(/[ /:@]/);
  const [
    F,
    le,
    dt,
    ut,
    pt,
    Me,
    Qi,
    Yi,
    Ji,
    en,
    tn,
    nn,
    rn,
    an
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])"],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    c ? [`[lnClass="${c}"]`] : [":not([lnClass])"],
    l ? [`[lnInst="${l}"]`] : [":not([lnInst])", '[lnInst=""]'],
    p ? [`[doName="${p}"]`] : [":not([doName])"],
    f ? [`[daName="${f}"]`] : [":not([daName])", '[daName=""]'],
    h ? [`[serviceType="${h}"]`] : [":not([serviceType])", '[serviceType=""]'],
    x ? [`[srcCBName="${x}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    S ? [`[srcLDInst="${S}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    k ? [`[srcPrefix="${k}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    C ? [`[srcLNClass="${C}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    A ? [`[srcLNInst="${A}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    w ? [`[intAddr="${w}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return G(
    r,
    [">"],
    [e],
    F,
    le,
    dt,
    ut,
    pt,
    Me,
    Qi,
    Yi,
    Ji,
    en,
    tn,
    nn,
    rn,
    an
  ).map((Fe) => Fe.join("")).join(",");
}
function mr(e) {
  const [t, i, n] = ["prefix", "lnClass", "inst"].map(
    (r) => e.getAttribute(r)
  );
  return `${I(e.parentElement)}>${t ?? ""} ${i} ${n}`;
}
function hr(e, t) {
  const [i, n] = W(t), r = M[e].parents.flatMap(
    (f) => j(f, i).split(",")
  ), [a, s, o] = n.split(" ");
  if (!s) return V;
  const [c, l, p] = [
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    [`[inst="${o}"]`]
  ];
  return G(
    r,
    [">"],
    [e],
    c,
    l,
    p
  ).map((f) => f.join("")).join(",");
}
function fr(e) {
  const [t, i, n, r, a, s] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => e.getAttribute(o));
  return `${I(e.parentElement)}>${i} ${t || ""} ${n}/${r ?? ""} ${a} ${s}`;
}
function br(e, t) {
  const [i, n] = W(t), r = M[e].parents.flatMap(
    (A) => j(A, i).split(",")
  ), [a, s, o, c, l, p] = n.split(/[ /]/), [
    f,
    h,
    x,
    S,
    k,
    C
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])", '[iedName=""]'],
    s ? [`[apRef="${s}"]`] : [":not([apRef])", '[apRef=""]'],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${l}"]`],
    p ? [`[lnInst="${p}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return G(
    r,
    [">"],
    [e],
    f,
    h,
    x,
    S,
    k,
    C
  ).map((A) => A.join("")).join(",");
}
function jt(e) {
  const [t, i] = ["name", "ix"].map((n) => e.getAttribute(n));
  return `${I(e.parentElement)}>${t}${i ? "[" + i + "]" : ""}`;
}
function kt(e, t, i = -1) {
  i === -1 && (i = t.split(">").length);
  const [n, r] = W(t), [a, s, o, c] = r.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!s) return V;
  if (i === 0) return `${e}[name="${s}"]`;
  const l = M[e].parents.flatMap(
    (h) => h === "SDI" ? kt(h, n, i - 1).split(",") : j(h, n).split(",")
  ).filter((h) => !h.startsWith(V));
  if (l.length === 0) return V;
  const [p, f] = [
    [`[name="${s}"]`],
    c ? [`[ix="${c}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return G(
    l,
    [">"],
    [e],
    p,
    f
  ).map((h) => h.join("")).join(",");
}
function gr(e) {
  if (!e.parentElement) return NaN;
  const t = e.getAttribute("sGroup"), i = Array.from(e.parentElement.children).filter((n) => n.getAttribute("sGroup") === t).findIndex((n) => n.isSameNode(e));
  return `${I(e.parentElement)}>${t ? t + "." : ""} ${i}`;
}
function yr(e, t) {
  const [i, n] = W(t), [r, a] = n.split(" "), s = parseFloat(a), o = M[e].parents.flatMap(
    (p) => j(p, i).split(",")
  ), [c, l] = [
    r ? [`[sGroup="${r}"]`] : [""],
    s ? [`:nth-child(${s + 1})`] : [""]
  ];
  return G(
    o,
    [">"],
    [e],
    c,
    l
  ).map((p) => p.join("")).join(",");
}
function vr(e) {
  const [t, i] = ["iedName", "apName"].map(
    (n) => e.getAttribute(n)
  );
  return `${t} ${i}`;
}
function Sr(e, t) {
  const [i, n] = t.split(" ");
  return !i || !n ? V : `${e}[iedName="${i}"][apName="${n}"]`;
}
function Wt(e) {
  const [t, i] = ["ldInst", "cbName"].map(
    (n) => e.getAttribute(n)
  );
  return `${t} ${i}`;
}
function Kt(e, t) {
  const [i, n] = t.split(" ");
  return !i || !n ? V : `${e}[ldInst="${i}"][cbName="${n}"]`;
}
function Ar(e) {
  if (!e.parentElement) return NaN;
  if (!e.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const t = e.getAttribute("type");
  return e.parentElement.children.length > 1 && t !== "Connection" && t !== "RedConn" ? NaN : `${I(e.parentElement)}>${t}`;
}
function xr(e, t) {
  const [i, n] = W(t), [r, a] = [
    M[e].parents.flatMap(
      (s) => j(s, i).split(",")
    ),
    n ? [`[type="${n}"]`] : [""]
  ];
  return G(r, [">"], [e], a).map((s) => s.join("")).join(",");
}
function wr(e) {
  if (!e.parentElement) return NaN;
  const t = e.parentElement, i = e.getAttribute("type");
  if (t.tagName === "PhysConn")
    return `${I(e.parentElement)}>${i}`;
  const n = Array.from(e.parentElement.children).filter((r) => r.getAttribute("type") === i).findIndex((r) => r.isSameNode(e));
  return `${I(e.parentElement)}>${i} [${n}]`;
}
function kr(e, t) {
  const [i, n] = W(t), [r] = n.split(" "), a = n && n.match(/\[([0-9]+)\]/) && n.match(/\[([0-9]+)\]/)[1] ? parseFloat(n.match(/\[([0-9]+)\]/)[1]) : NaN, [s, o, c] = [
    M[e].parents.flatMap(
      (l) => j(l, i).split(",")
    ),
    [`[type="${r}"]`],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return G(
    s,
    [">"],
    [e],
    o,
    c
  ).map((l) => l.join("")).join(",");
}
function Ir(e) {
  return `${I(e.parentElement)}>${e.getAttribute("ord")}`;
}
function Cr(e, t) {
  const [i, n] = W(t);
  return `${j("EnumType", i)}>${e}[ord="${n}"]`;
}
function Er(e) {
  return `${I(e.parentElement)}>${e.getAttribute("type") || "8-MMS"}	${e.textContent}`;
}
function Dr(e, t) {
  const [i, n] = W(t), [r, a] = n.split("	"), [s] = [
    M[e].parents.flatMap(
      (o) => j(o, i).split(",")
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
function Nr() {
  return "";
}
function Tr() {
  return ":root";
}
function N(e) {
  return e.parentElement.tagName === "SCL" ? e.getAttribute("name") : `${I(e.parentElement)}>${e.getAttribute("name")}`;
}
function D(e, t, i = -1) {
  i === -1 && (i = t.split(">").length);
  const [n, r] = W(t);
  if (!r) return V;
  if (i === 0) return `${e}[name="${r}"]`;
  const a = M[e].parents;
  if (!a) return V;
  const s = a.flatMap(
    (o) => M[o].selector === M.Substation.selector ? D(o, n, i - 1).split(",") : j(o, n).split(",")
  ).filter((o) => !o.startsWith(V));
  return s.length === 0 ? V : G(s, [">"], [e], [`[name="${r}"]`]).map((o) => o.join("")).join(",");
}
function y(e) {
  return I(e.parentElement).toString();
}
function v(e, t) {
  const i = M[e].parents;
  if (!i) return V;
  const n = i.flatMap((r) => j(r, t).split(",")).filter((r) => !r.startsWith(V));
  return n.length === 0 ? V : G(n, [">"], [e]).map((r) => r.join("")).join(",");
}
function We(e) {
  return `#${e.id}`;
}
function Ke(e, t) {
  const i = t.replace(/^#/, "");
  return i ? `${e}[id="${i}"]` : V;
}
const Ci = [
  "TransformerWinding",
  "ConductingEquipment"
], Ei = [
  "GeneralEquipment",
  "PowerTransformer",
  ...Ci
], It = ["Substation", "VoltageLevel", "Bay"], Di = ["Process", "Line"], Ni = ["EqSubFunction", "EqFunction"], _r = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Ei,
  ...It,
  ...Di,
  ...Ni
], Ti = ["ConnectivityNode", ..._r], Lr = ["GOOSESecurity", "SMVSecurity"], $r = ["SubNetwork", ...Lr, ...Ti], zr = ["BDA", "DA"], Rr = ["SampledValueControl", "GSEControl"], Pr = ["LogControl", "ReportControl"], Or = [...Rr, ...Pr], Vr = ["GSE", "SMV"], Mr = [
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
  ...Or,
  ...Vr,
  ...zr
], Le = ["LN0", "LN"], Fr = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Hr = ["Subject", "IssuerName"], qr = ["MinTime", "MaxTime"], Br = ["LNodeType", "DOType", "DAType", "EnumType"], Gr = [
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
], Ur = ["DynDataSet", "ConfDataSet"], jr = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...Ur
], Wr = ["ConfLogControl", "ConfSigRef"], Kr = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], Zr = ["SCL", ...$r, ...Mr, ...Br], _i = [
  ...Zr,
  ...Fr,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Hr,
  ...qr,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...Le,
  ...Gr,
  "DynAssociation",
  "SettingGroups",
  ...jr,
  ...Wr,
  ...Kr,
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
], Xr = new Set(_i);
function rt(e) {
  return Xr.has(e);
}
const at = ["Text", "Private"], Ce = [...at], O = [...at], Ze = [...at], Zt = [...O, "Val"], Li = [...Ce, "LNode"], Ee = [...Li], Ct = [...Ee], ft = [
  ...Ee,
  "PowerTransformer",
  "GeneralEquipment"
], Xt = [
  ...Ct,
  "Terminal"
], Qt = [...O, "Address"], $i = [...Ce], Yt = [...$i, "IEDName"], Jt = [
  ...O,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], ei = [
  ...Ee,
  "GeneralEquipment",
  "Function"
], ti = [...$i, "TrgOps"], ii = [
  ...Ee,
  "GeneralEquipment",
  "EqSubFunction"
], M = {
  AccessControl: {
    identity: y,
    selector: v,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: N,
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
    identity: y,
    selector: v,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: nr,
    selector: rr,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: y,
    selector: v,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: N,
    selector: D,
    parents: ["DAType"],
    children: [...Zt]
  },
  BitRate: {
    identity: y,
    selector: v,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: N,
    selector: D,
    parents: ["VoltageLevel"],
    children: [
      ...ft,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: fr,
    selector: br,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: y,
    selector: v,
    parents: ["SCL"],
    children: [...O, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: N,
    selector: D,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...Xt,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: y,
    selector: v,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: vr,
    selector: Sr,
    parents: ["SubNetwork"],
    children: [...O, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: N,
    selector: D,
    parents: ["Bay", "Line"],
    children: [...Li]
  },
  DA: {
    identity: N,
    selector: D,
    parents: ["DOType"],
    children: [...Zt]
  },
  DAI: {
    identity: jt,
    selector: kt,
    parents: ["DOI", "SDI"],
    children: [...O, "Val"]
  },
  DAType: {
    identity: We,
    selector: Ke,
    parents: ["DataTypeTemplates"],
    children: [...Ze, "BDA", "ProtNs"]
  },
  DO: {
    identity: N,
    selector: D,
    parents: ["LNodeType"],
    children: [...O]
  },
  DOI: {
    identity: N,
    selector: D,
    parents: [...Le],
    children: [...O, "SDI", "DAI"]
  },
  DOType: {
    identity: We,
    selector: Ke,
    parents: ["DataTypeTemplates"],
    children: [...Ze, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: N,
    selector: D,
    parents: [...Le],
    children: [...Ce, "FCDA"]
  },
  DataSetDirectory: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: y,
    selector: v,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: We,
    selector: Ke,
    parents: ["DataTypeTemplates"],
    children: [...Ze, "EnumVal"]
  },
  EnumVal: {
    identity: Ir,
    selector: Cr,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: N,
    selector: D,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...ii]
  },
  EqSubFunction: {
    identity: N,
    selector: D,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...ii]
  },
  ExtRef: {
    identity: ur,
    selector: pr,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: lr,
    selector: dr,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: N,
    selector: D,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...Ee,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: N,
    selector: D,
    parents: [
      "SubFunction",
      "Function",
      ...Di,
      ...Ni,
      ...It
    ],
    children: [...Ct, "EqFunction"]
  },
  GetCBValues: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: N,
    selector: D,
    parents: ["AccessPoint"],
    children: [...Ce, "Subject", "IssuerName"]
  },
  GSE: {
    identity: Wt,
    selector: Kt,
    parents: ["ConnectedAP"],
    children: [...Qt, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: N,
    selector: D,
    parents: ["LN0"],
    children: [...Yt, "Protocol"]
  },
  GSESettings: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: y,
    selector: v,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: y,
    selector: v,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: Qn,
    selector: Yn,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: N,
    selector: D,
    parents: ["SCL"],
    children: [...O, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: or,
    selector: cr,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: y,
    selector: v,
    parents: [...Le],
    children: [...O, "ExtRef"]
  },
  IssuerName: {
    identity: y,
    selector: v,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: tr,
    selector: ir,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: ar,
    selector: sr,
    parents: ["Server"],
    children: [...O, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: mr,
    selector: hr,
    parents: ["AccessPoint", "LDevice"],
    children: [...Jt]
  },
  LN0: {
    identity: y,
    selector: v,
    parents: ["LDevice"],
    children: [
      ...Jt,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: Jn,
    selector: er,
    parents: [...Ti],
    children: [...O]
  },
  LNodeType: {
    identity: We,
    selector: Ke,
    parents: ["DataTypeTemplates"],
    children: [...Ze, "DO"]
  },
  Line: {
    identity: N,
    selector: D,
    parents: ["Process", "SCL"],
    children: [
      ...ei,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: N,
    selector: D,
    parents: [...Le],
    children: [...O]
  },
  LogControl: {
    identity: N,
    selector: D,
    parents: [...Le],
    children: [...ti]
  },
  LogSettings: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: y,
    selector: v,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: y,
    selector: v,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: y,
    selector: v,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: Gt,
    selector: Ut,
    parents: ["TransformerWinding"],
    children: [...O]
  },
  OptFields: {
    identity: y,
    selector: v,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: wr,
    selector: kr,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: Ar,
    selector: xr,
    parents: ["ConnectedAP"],
    children: [...O, "P"]
  },
  PowerTransformer: {
    identity: N,
    selector: D,
    parents: [...It],
    children: [
      ...Ct,
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
    identity: N,
    selector: D,
    parents: ["Process", "SCL"],
    children: [
      ...ei,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: Er,
    selector: Dr,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: y,
    selector: v,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: N,
    selector: D,
    parents: [...Le],
    children: [...ti, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: y,
    selector: v,
    parents: ["ReportControl"],
    children: [...O, "ClientLN"]
  },
  SamplesPerSec: {
    identity: y,
    selector: v,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: N,
    selector: D,
    parents: ["LN0"],
    children: [...Yt, "SmvOpts"]
  },
  SecPerSamples: {
    identity: y,
    selector: v,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: Nr,
    selector: Tr,
    parents: [],
    children: [
      ...at,
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
    identity: jt,
    selector: kt,
    parents: ["DOI", "SDI"],
    children: [...O, "SDI", "DAI"]
  },
  SDO: {
    identity: N,
    selector: D,
    parents: ["DOType"],
    children: [...Ce]
  },
  Server: {
    identity: y,
    selector: v,
    parents: ["AccessPoint"],
    children: [
      ...O,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: y,
    selector: v,
    parents: ["AccessPoint"],
    children: [...O]
  },
  Services: {
    identity: y,
    selector: v,
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
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: y,
    selector: v,
    parents: ["LN0"],
    children: [...O]
  },
  SettingGroups: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: y,
    selector: v,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: y,
    selector: v,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: Wt,
    selector: Kt,
    parents: ["ConnectedAP"],
    children: [...Qt]
  },
  SmvOpts: {
    identity: y,
    selector: v,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: N,
    selector: D,
    parents: ["AccessPoint"],
    children: [...Ce, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: N,
    selector: D,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...Ci
    ],
    children: [...Ee, "EqFunction"]
  },
  SubFunction: {
    identity: N,
    selector: D,
    parents: ["SubFunction", "Function"],
    children: [
      ...Ee,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: N,
    selector: D,
    parents: ["Communication"],
    children: [...Ce, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: y,
    selector: v,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: N,
    selector: D,
    parents: ["SCL"],
    children: [...ft, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: N,
    selector: D,
    parents: ["TransformerWinding"],
    children: [...Ee, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: Gt,
    selector: Ut,
    parents: [...Ei],
    children: [...O]
  },
  Text: {
    identity: y,
    selector: v,
    parents: _i.filter((e) => e !== "Text" && e !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: y,
    selector: v,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: N,
    selector: D,
    parents: ["PowerTransformer"],
    children: [
      ...Xt,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: y,
    selector: v,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: gr,
    selector: yr,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: y,
    selector: v,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: y,
    selector: v,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: N,
    selector: D,
    parents: ["Substation"],
    children: [...ft, "Voltage", "Bay", "Function"]
  }
};
function Qr(e, t) {
  const i = e.tagName, n = Array.from(e.children);
  if (i === "Services" || i === "SettingGroups" || !rt(i))
    return n.find((o) => o.tagName === t) ?? null;
  const r = M[i]?.children ?? [];
  let a = r.findIndex((o) => o === t);
  if (a < 0) return null;
  let s;
  for (; a < r.length && !s; )
    s = n.find((o) => o.tagName === r[a]), a++;
  return s ?? null;
}
function j(e, t) {
  return typeof t != "string" ? V : rt(e) ? M[e].selector(e, t) : e;
}
function K(e, t, i) {
  if (typeof i != "string" || !rt(t)) return null;
  const n = e.querySelector(M[t].selector(t, i));
  return n === null || ne(n) ? n : Array.from(
    e.querySelectorAll(M[t].selector(t, i))
  ).find(ne) ?? null;
}
function I(e) {
  if (e === null) return NaN;
  if (e.closest("Private")) return NaN;
  const t = e.tagName;
  return rt(t) ? M[t].identity(e) : NaN;
}
hi((e) => (t) => {
  Object.keys(e).length ? t.setValue(e) : t.setValue("");
});
const Yr = "[:_A-Za-z]|[À-Ö]|[Ø-ö]|[ø-˿]|[Ͱ-ͽ]|[Ϳ-῿]|[‌-‍]|[⁰-↏]|[Ⰰ-⿯]|[、-퟿]|[豈-﷏]|[ﷰ-�]", Jr = Yr + "|[.0-9\\-]|·|[̀-ͯ]|[‿-⁀]", ea = "(" + Jr + ")+", de = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  nmToken: ea,
  alphanumericFirstUpperCase: "[A-Z][0-9,A-Z,a-z]*",
  lnClass: "(LLN0)|[A-Z]{4,4}"
};
function G(...e) {
  return e.reduce(
    (t, i) => t.flatMap((n) => i.map((r) => [n, r].flat())),
    [[]]
  );
}
function zi(e, t = /* @__PURE__ */ new WeakSet()) {
  if (t.has(e)) return 1 / 0;
  switch (e?.constructor) {
    case Object:
    case Array:
      return t.add(e), 1 + Math.max(
        -1,
        ...Object.values(e).map((i) => zi(i, t))
      );
    default:
      return 0;
  }
}
function ne(e) {
  return !e.closest("Private");
}
const ta = 99;
Array(ta).fill(1).map((e, t) => `${t + 1}`);
const st = be`
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
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ge extends U {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const t = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), n = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : u``, r = this.hasMeta && this.left ? this.renderMeta() : u``, a = this.renderRipple();
    return u`
      ${a}
      ${n}
      ${this.left ? "" : i}
      <span class=${Oe(t)}>
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
  _("slot")
], Ge.prototype, "slotElement", void 0);
g([
  _("mwc-checkbox")
], Ge.prototype, "checkboxElement", void 0);
g([
  b({ type: Boolean })
], Ge.prototype, "left", void 0);
g([
  b({ type: String, reflect: !0 })
], Ge.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ia = be`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Pe = class extends Ge {
};
Pe.styles = [xi, ia];
Pe = g([
  pe("mwc-check-list-item")
], Pe);
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
var E = {
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
}, Y = /* @__PURE__ */ new Set();
Y.add(E.BACKSPACE);
Y.add(E.ENTER);
Y.add(E.SPACEBAR);
Y.add(E.PAGE_UP);
Y.add(E.PAGE_DOWN);
Y.add(E.END);
Y.add(E.HOME);
Y.add(E.ARROW_LEFT);
Y.add(E.ARROW_UP);
Y.add(E.ARROW_RIGHT);
Y.add(E.ARROW_DOWN);
Y.add(E.DELETE);
Y.add(E.ESCAPE);
Y.add(E.TAB);
var ie = {
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
}, J = /* @__PURE__ */ new Map();
J.set(ie.BACKSPACE, E.BACKSPACE);
J.set(ie.ENTER, E.ENTER);
J.set(ie.SPACEBAR, E.SPACEBAR);
J.set(ie.PAGE_UP, E.PAGE_UP);
J.set(ie.PAGE_DOWN, E.PAGE_DOWN);
J.set(ie.END, E.END);
J.set(ie.HOME, E.HOME);
J.set(ie.ARROW_LEFT, E.ARROW_LEFT);
J.set(ie.ARROW_UP, E.ARROW_UP);
J.set(ie.ARROW_RIGHT, E.ARROW_RIGHT);
J.set(ie.ARROW_DOWN, E.ARROW_DOWN);
J.set(ie.DELETE, E.DELETE);
J.set(ie.ESCAPE, E.ESCAPE);
J.set(ie.TAB, E.TAB);
var Te = /* @__PURE__ */ new Set();
Te.add(E.PAGE_UP);
Te.add(E.PAGE_DOWN);
Te.add(E.END);
Te.add(E.HOME);
Te.add(E.ARROW_LEFT);
Te.add(E.ARROW_UP);
Te.add(E.ARROW_RIGHT);
Te.add(E.ARROW_DOWN);
function ke(e) {
  var t = e.key;
  if (Y.has(t))
    return t;
  var i = J.get(e.keyCode);
  return i || E.UNKNOWN;
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
var Ie, Se, R = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Ie = {}, Ie["" + R.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Ie["" + R.LIST_ITEM_CLASS] = "mdc-list-item", Ie["" + R.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Ie["" + R.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Ie["" + R.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Ie["" + R.ROOT] = "mdc-list";
var Re = (Se = {}, Se["" + R.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", Se["" + R.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", Se["" + R.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", Se["" + R.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", Se["" + R.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", Se["" + R.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", Se["" + R.ROOT] = "mdc-deprecated-list", Se), Xe = {
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
    .` + Re[R.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Re[R.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + R.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + R.LIST_ITEM_CLASS + ` a,
    .` + R.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + R.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Re[R.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Re[R.LIST_ITEM_CLASS] + ` a,
    .` + Re[R.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Re[R.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, ee = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Et = (e, t) => e - t, na = (e, t) => {
  const i = Array.from(e), n = Array.from(t), r = { added: [], removed: [] }, a = i.sort(Et), s = n.sort(Et);
  let o = 0, c = 0;
  for (; o < a.length || c < s.length; ) {
    const l = a[o], p = s[c];
    if (l === p) {
      o++, c++;
      continue;
    }
    if (l !== void 0 && (p === void 0 || l < p)) {
      r.removed.push(l), o++;
      continue;
    }
    if (p !== void 0 && (l === void 0 || p < l)) {
      r.added.push(p), c++;
      continue;
    }
  }
  return r;
}, ra = ["input", "button", "textarea", "select"];
function qe(e) {
  return e instanceof Set;
}
const bt = (e) => {
  const t = e === ee.UNSET_INDEX ? /* @__PURE__ */ new Set() : e;
  return qe(t) ? new Set(t) : /* @__PURE__ */ new Set([t]);
};
class $t extends gi {
  constructor(t) {
    super(Object.assign(Object.assign({}, $t.defaultAdapter), t)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = ee.UNSET_INDEX, this.focusedItemIndex_ = ee.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return Xe;
  }
  static get numbers() {
    return ee;
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
      if (!qe(i)) {
        const n = i === ee.UNSET_INDEX;
        this.selectedIndex_ = n ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
    } else if (qe(i))
      if (i.size) {
        const n = Array.from(i).sort(Et);
        this.selectedIndex_ = n[0];
      } else
        this.selectedIndex_ = ee.UNSET_INDEX;
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
    this.isIndexValid_(t) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(bt(t)) : this.setSingleSelectionAtIndex_(t));
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
    const r = ke(t) === "ArrowLeft", a = ke(t) === "ArrowUp", s = ke(t) === "ArrowRight", o = ke(t) === "ArrowDown", c = ke(t) === "Home", l = ke(t) === "End", p = ke(t) === "Enter", f = ke(t) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      a || l ? (t.preventDefault(), this.focusLastElement()) : (o || c) && (t.preventDefault(), this.focusFirstElement());
      return;
    }
    let h = this.adapter.getFocusedElementIndex();
    if (h === -1 && (h = n, h < 0))
      return;
    let x;
    if (this.isVertical_ && o || !this.isVertical_ && s)
      this.preventDefaultEvent(t), x = this.focusNextElement(h);
    else if (this.isVertical_ && a || !this.isVertical_ && r)
      this.preventDefaultEvent(t), x = this.focusPrevElement(h);
    else if (c)
      this.preventDefaultEvent(t), x = this.focusFirstElement();
    else if (l)
      this.preventDefaultEvent(t), x = this.focusLastElement();
    else if ((p || f) && i) {
      const S = t.target;
      if (S && S.tagName === "A" && p)
        return;
      this.preventDefaultEvent(t), this.setSelectedIndexOnAction_(h, !0);
    }
    this.focusedItemIndex_ = h, x !== void 0 && (this.setTabindexAtIndex_(x), this.focusedItemIndex_ = x);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(t, i, n) {
    t !== ee.UNSET_INDEX && (this.setSelectedIndexOnAction_(t, i, n), this.setTabindexAtIndex_(t), this.focusedItemIndex_ = t);
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
    ra.indexOf(n) === -1 && t.preventDefault();
  }
  setSingleSelectionAtIndex_(t, i = !0) {
    this.selectedIndex_ !== t && (this.selectedIndex_ !== ee.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), i && this.adapter.setSelectedStateForElementIndex(t, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(t, !0), this.setAriaForSingleSelectionAtIndex_(t), this.selectedIndex_ = t, this.adapter.notifySelected(t));
  }
  setMultiSelectionAtIndex_(t, i = !0) {
    const n = bt(this.selectedIndex_), r = na(n, t);
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
    this.selectedIndex_ === ee.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(t, Xe.ARIA_CURRENT));
    const i = this.ariaCurrentAttrValue_ !== null, n = i ? Xe.ARIA_CURRENT : Xe.ARIA_SELECTED;
    this.selectedIndex_ !== ee.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, n, "false");
    const r = i ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(t, n, r);
  }
  setTabindexAtIndex_(t) {
    this.focusedItemIndex_ === ee.UNSET_INDEX && t !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== t && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(t, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let t = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== ee.UNSET_INDEX ? t = this.selectedIndex_ : qe(this.selectedIndex_) && this.selectedIndex_.size > 0 && (t = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(t);
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
      return t === ee.UNSET_INDEX || this.isIndexInRange_(t);
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
    this.isMulti_ && (r = /* @__PURE__ */ new Set([t])), this.isIndexValid_(r) && (this.isMulti_ ? this.toggleMultiAtIndex(t, n, i) : i || n ? this.setSingleSelectionAtIndex_(t, i) : this.selectedIndex_ === t && this.setSingleSelectionAtIndex_(ee.UNSET_INDEX), i && this.adapter.notifyAction(t));
  }
  toggleMultiAtIndex(t, i, n = !0) {
    let r = !1;
    i === void 0 ? r = !this.adapter.getSelectedStateForElementIndex(t) : r = i;
    const a = bt(this.selectedIndex_);
    r ? a.add(t) : a.delete(t), this.setMultiSelectionAtIndex_(a, n);
  }
}
function aa(e, t = 50) {
  let i;
  return function(n = !0) {
    clearTimeout(i), i = setTimeout(() => {
      e(n);
    }, t);
  };
}
const Qe = (e) => e.hasAttribute("mwc-list-item");
function sa() {
  const e = this.itemsReadyResolver;
  this.itemsReady = new Promise((t) => this.itemsReadyResolver = t), e();
}
class se extends Tt {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = $t, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const t = aa(this.layout.bind(this));
    this.debouncedLayout = (i = !0) => {
      sa.call(this), t(i);
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
      Qe(s) && (n.push(s), s._managingList = this), s.hasAttribute("divider") && !s.hasAttribute("role") && s.setAttribute("role", "separator");
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
    if (!qe(t))
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
    return u`
      <!-- @ts-ignore -->
      <ul
          tabindex=${n}
          role="${Ae(t)}"
          aria-label="${Ae(i)}"
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
    return this.emptyMessage !== void 0 && i.length === 0 ? u`
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
      const i = this.getIndexOfTarget(t), n = t.target, r = Qe(n);
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
      if (yn(r) && Qe(r) && (a = i.indexOf(r)), a !== -1)
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
      isFocusInsideList: () => Sn(this),
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
    const t = bi();
    if (!t.length)
      return -1;
    for (let i = t.length - 1; i >= 0; i--) {
      const n = t[i];
      if (Qe(n))
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
  b({ type: String })
], se.prototype, "emptyMessage", void 0);
g([
  _(".mdc-deprecated-list")
], se.prototype, "mdcRoot", void 0);
g([
  mi("", !0, "*")
], se.prototype, "assignedElements", void 0);
g([
  mi("", !0, '[tabindex="0"]')
], se.prototype, "tabbableElements", void 0);
g([
  b({ type: Boolean }),
  Ne(function(e) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(e);
  })
], se.prototype, "activatable", void 0);
g([
  b({ type: Boolean }),
  Ne(function(e, t) {
    this.mdcFoundation && this.mdcFoundation.setMulti(e), t !== void 0 && this.layout();
  })
], se.prototype, "multi", void 0);
g([
  b({ type: Boolean }),
  Ne(function(e) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(e);
  })
], se.prototype, "wrapFocus", void 0);
g([
  b({ type: String }),
  Ne(function(e, t) {
    t !== void 0 && this.updateItems();
  })
], se.prototype, "itemRoles", void 0);
g([
  b({ type: String })
], se.prototype, "innerRole", void 0);
g([
  b({ type: String })
], se.prototype, "innerAriaLabel", void 0);
g([
  b({ type: Boolean })
], se.prototype, "rootTabbable", void 0);
g([
  b({ type: Boolean, reflect: !0 }),
  Ne(function(e) {
    var t, i;
    if (e) {
      const n = (i = (t = this.tabbableElements) === null || t === void 0 ? void 0 : t[0]) !== null && i !== void 0 ? i : null;
      this.previousTabindex = n, n && n.setAttribute("tabindex", "-1");
    } else !e && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], se.prototype, "noninteractive", void 0);
var oa = Object.defineProperty, ca = Object.getOwnPropertyDescriptor, ze = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? ca(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (r = (n ? s(t, i, r) : s(r)) || r);
  return n && r && oa(t, i, r), r;
};
function Dt(e) {
  return !e.closest("filtered-list") || !e.parentElement || e.parentElement instanceof ge ? e : Dt(e.parentElement);
}
function la(e, t) {
  const i = e.innerText + `
`, n = Array.from(e.children).map((o) => o.innerText).join(`
`), r = e.value, a = (i + n + r).toUpperCase(), s = t.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  s.length === 1 && s[0] === "" || s.every((o) => new RegExp(
    `*${o}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(a)) ? Dt(e).classList.remove("hidden") : Dt(e).classList.add("hidden");
}
let ge = class extends se {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((e) => e instanceof Pe);
  }
  get isAllSelected() {
    return this.items.filter((e) => !e.disabled).filter((e) => e instanceof Pe).every((e) => e.selected);
  }
  get isSomeSelected() {
    return this.items.filter((e) => !e.disabled).filter((e) => e instanceof Pe).some((e) => e.selected);
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
      (e) => la(e, this.searchField.value)
    );
  }
  onListItemConnected(e) {
    super.onListItemConnected(e), this.requestUpdate();
  }
  update(e) {
    super.update(e), this.onFilterInput();
  }
  renderCheckAll() {
    return this.existCheckListItem && !this.disableCheckAll ? u`<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
      this.onCheckAll();
    }}
          ></mwc-checkbox
        ></mwc-formfield>` : u``;
  }
  render() {
    return u`<div id="tfcontainer">
        <abbr title="${this.searchFieldLabel ?? d("filter")}"
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
ge.styles = be`
    ${ln(fn.styles)}

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
ze([
  b({ type: String })
], ge.prototype, "searchFieldLabel", 2);
ze([
  b({ type: Boolean })
], ge.prototype, "disableCheckAll", 2);
ze([
  P()
], ge.prototype, "existCheckListItem", 1);
ze([
  P()
], ge.prototype, "isAllSelected", 1);
ze([
  P()
], ge.prototype, "isSomeSelected", 1);
ze([
  _("mwc-textfield")
], ge.prototype, "searchField", 2);
ge = ze([
  pe("filtered-list")
], ge);
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
const ni = /* @__PURE__ */ new WeakMap(), ri = 2147483647, da = it((...e) => (t) => {
  let i = ni.get(t);
  i === void 0 && (i = {
    lastRenderedIndex: ri,
    values: []
  }, ni.set(t, i));
  const n = i.values;
  let r = n.length;
  i.values = e;
  for (let a = 0; a < e.length && !(a > i.lastRenderedIndex); a++) {
    const s = e[a];
    if (vi(s) || typeof s.then != "function") {
      t.setValue(s), i.lastRenderedIndex = a;
      break;
    }
    a < r && s === n[a] || (i.lastRenderedIndex = ri, r = 0, Promise.resolve(s).then((o) => {
      const c = i.values.indexOf(s);
      c > -1 && c < i.lastRenderedIndex && (i.lastRenderedIndex = c, t.setValue(o), t.commit());
    }));
  }
});
var ua = Object.defineProperty, pa = Object.getOwnPropertyDescriptor, we = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? pa(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (r = (n ? s(t, i, r) : s(r)) || r);
  return n && r && ua(t, i, r), r;
};
const ma = u`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${d("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let fe = class extends De {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (e) => ({
      path: e,
      header: u`<h2>${"/" + e.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return zi(this.selection);
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
    return u`<filtered-list
      @selected=${(i) => this.select(i, e)}
      searchFieldLabel="${this.getTitle(e)}"
    >
      ${t.map(
      (i) => u`<mwc-list-item
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
        u`${Ae(r)} ${this.renderDirectory(s, a)}`
      );
    return n.length === 0 ? u`` : u`<div class="column">${n}</div>`;
  }
  render() {
    const e = new Array(this.depth).fill(0).map((t, i) => this.renderColumn(i));
    return this.loaded = Promise.allSettled(e).then(), u`<div class="pane">
      ${e.map((t) => da(t, ma))}
    </div>`;
  }
};
fe.styles = be`
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
we([
  b({ type: Object })
], fe.prototype, "selection", 2);
we([
  b({ type: Boolean })
], fe.prototype, "multi", 2);
we([
  b({ type: Number })
], fe.prototype, "depth", 1);
we([
  b({ type: Array })
], fe.prototype, "paths", 1);
we([
  b({ type: Array })
], fe.prototype, "path", 1);
we([
  b({ attribute: !1 })
], fe.prototype, "read", 2);
we([
  b({ attribute: !1 })
], fe.prototype, "loaded", 2);
we([
  _("div")
], fe.prototype, "container", 2);
fe = we([
  pe("finder-list")
], fe);
function ha(e) {
  return e.startsWith("IED:") ? e.replace(/^.*:/, "").trim() : e.startsWith("LN0:") ? "LLN0" : e.replace(/^.*>/, "").trim();
}
function fa(e, t) {
  return async (i) => {
    const [n, r] = i[i.length - 1]?.split(": ", 2), a = K(e, n, r);
    return a ? {
      path: i,
      header: void 0,
      entries: t(a).map(
        (s) => `${s.tagName}: ${I(s)}`
      )
    } : { path: i, header: u`<p>${d("error")}</p>`, entries: [] };
  };
}
function Ri(e) {
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
function ba(e) {
  return u`<finder-list
    multi
    .paths=${[["Server: " + I(e)]]}
    .read=${fa(e.ownerDocument, Ri)}
    .getDisplayString=${ha}
    .getTitle=${(t) => t[t.length - 1]}
  ></finder-list>`;
}
function ga(e, t) {
  const [i, n] = t[t.length - 1].split(": "), r = K(e.ownerDocument, i, n);
  if (!r || Ri(r).length > 0) return;
  const a = t.find((C) => C.startsWith("LN"));
  if (!a) return;
  const [s, o] = a.split(": "), c = K(e.ownerDocument, s, o);
  if (!c) return;
  const l = c.closest("LDevice")?.getAttribute("inst"), p = c.getAttribute("prefix") ?? "", f = c.getAttribute("lnClass"), h = c.getAttribute("inst") && c.getAttribute("inst") !== "" ? c.getAttribute("inst") : null;
  let x = "", S = "", k = "";
  for (const C of t) {
    const [A, w] = C.split(": ");
    if (!["DO", "DA", "SDO", "BDA"].includes(A)) continue;
    const F = K(e.ownerDocument, A, w);
    if (!F) return;
    const le = F.getAttribute("name");
    A === "DO" && (x = le), A === "SDO" && (x = x + "." + le), A === "DA" && (S = le, k = F.getAttribute("fc") ?? ""), A === "BDA" && (S = S + "." + le);
  }
  if (!(!l || !f || !x || !S || !k))
    return re(e.ownerDocument, "FCDA", {
      ldInst: l,
      prefix: p,
      lnClass: f,
      lnInst: h,
      doName: x,
      daName: S,
      fc: k
    });
}
function ya(e) {
  return (t, i) => {
    const r = i.shadowRoot.querySelector("finder-list")?.paths ?? [], a = [];
    for (const s of r) {
      const o = ga(e, s);
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
function va(e) {
  const t = e.closest("Server");
  return [
    {
      title: d("wizard.title.add", { tagName: "FCDA" }),
      primary: {
        label: "add",
        icon: "add",
        action: ya(e)
      },
      content: [t ? ba(t) : u``]
    }
  ];
}
function Sa(e) {
  return (t) => {
    t.dispatchEvent(L(() => va(e)));
  };
}
function Aa(e) {
  return (t, i) => {
    const n = t.find((l) => l.label === "name").value, r = m(t.find((l) => l.label === "desc")), a = e.getAttribute("name"), s = [];
    if (!(n === a && r === e.getAttribute("desc"))) {
      const l = q(e, { name: n, desc: r });
      s.push({
        old: { element: e },
        new: { element: l }
      });
    }
    const o = n !== a ? Array.from(
      e.parentElement?.querySelectorAll(
        `ReportControlBock[datSet=${a}], GSEControl[datSet=${a}],SampledValueControl[datSet=${a}] `
      ) ?? []
    ).map((l) => {
      const p = q(l, { datSet: n });
      return { old: { element: l }, new: { element: p } };
    }) : [];
    return [
      ...Array.from(
        i.shadowRoot.querySelectorAll(
          "filtered-list > mwc-check-list-item:not([selected])"
        )
      ).map((l) => K(e, "FCDA", l.value)).filter((l) => l).map((l) => ({
        old: {
          parent: e,
          element: l,
          reference: l.nextSibling
        }
      })),
      ...s,
      ...o
    ];
  };
}
function ot(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc");
  return [
    {
      title: d("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: d("save"),
        icon: "save",
        action: Aa(e)
      },
      menuActions: [
        {
          icon: "add",
          label: d("dataset.fcda.add"),
          action: Sa(e)
        }
      ],
      content: [
        u`<wizard-textfield
          label="name"
          .maybeValue=${t}
          helper="${d("scl.name")}"
          required
          disabled="true"
        >
        </wizard-textfield>`,
        u`<wizard-textfield
          label="desc"
          .maybeValue=${i}
          helper="${d("scl.desc")}"
          nullable
          required
        >
        </wizard-textfield>`,
        u`<filtered-list multi
          >${Array.from(e.querySelectorAll("FCDA")).map(
          (n) => u`<mwc-check-list-item selected value="${I(n)}"
                >${I(n).split(">").pop()}</mwc-check-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
function he(e, t = "user", i) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { action: e, initiator: t, ...i?.detail }
  });
}
function Je(e) {
  const t = [];
  return e && e.forEach((i) => {
    t.push({
      old: {
        parent: i.parentElement,
        element: i,
        reference: i.nextSibling
      }
    });
  }), t;
}
function zt(e) {
  return e.sort((t, i) => {
    const n = I(t), r = I(i);
    return n < r ? -1 : n > r ? 1 : 0;
  });
}
function ai(e) {
  return Array.from(new Set(e));
}
var xa = Object.defineProperty, wa = Object.getOwnPropertyDescriptor, _e = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? wa(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (r = (n ? s(t, i, r) : s(r)) || r);
  return n && r && xa(t, i, r), r;
};
let ye = class extends De {
  constructor() {
    super(...arguments), this.disableDataSetClean = !1, this.unreferencedDataSets = [], this.selectedDatasetItems = [];
  }
  async firstUpdated() {
    this.dataSetList?.addEventListener("selected", () => {
      this.selectedDatasetItems = this.dataSetList.index;
    });
  }
  /**
   * Provide list item in the DataSet cleanup container.
   * @param dataSet - an unused SCL DataSet element.
   * @returns html for checklist item.
   */
  renderListItem(e) {
    return u` <mwc-check-list-item
      twoline
      class="checkListItem"
      value="${I(e)}"
      ><span class="unreferencedDataSet"
        >${e.getAttribute("name")}
      </span>
      <span>
        <mwc-icon-button
          label="Edit"
          icon="edit"
          class="editUnreferencedDataSet editItem"
          @click=${(t) => {
      t.stopPropagation(), t.target?.dispatchEvent(
        L(() => ot(e))
      );
    }}
        ></mwc-icon-button>
      </span>
      <span slot="secondary"
        >${e.closest("IED")?.getAttribute("name")}
        (${e.closest("IED")?.getAttribute("manufacturer") ?? "No manufacturer defined"})
        -
        ${e.closest("IED")?.getAttribute("type") ?? "No Type Defined"}</span
      >
    </mwc-check-list-item>`;
  }
  /**
   * Provide delete button the dataset cleanup container.
   * @returns html for the Delete Button of this container.
   */
  renderDeleteButton() {
    const e = this.selectedDatasetItems.size;
    return u` <mwc-button
      outlined
      icon="delete"
      class="deleteButton cleanupDeleteButton"
      label="${d(
      "cleanup.unreferencedDataSets.deleteButton"
    )} (${e || "0"})"
      ?disabled=${this.selectedDatasetItems.size === 0 || Array.isArray(this.selectedDatasetItems) && !this.selectedDatasetItems.length}
      @click=${(t) => {
      const i = Array.from(
        this.selectedDatasetItems.values()
      ).map((r) => this.unreferencedDataSets[r]);
      Je(i).forEach(
        (r) => t.target?.dispatchEvent(he(r))
      ), this.dataSetItems.forEach((r) => {
        r.selected = !1;
      });
    }}
    ></mwc-button>`;
  }
  /**
   * Render a user selectable table of unreferenced datasets if any exist, otherwise indicate this is not an issue.
   * @returns html for table and action button.
   */
  renderUnreferencedDataSets() {
    const e = [];
    return Array.from(this.doc?.querySelectorAll("DataSet") ?? []).filter(ne).forEach((t) => {
      const i = t.parentElement, n = t.getAttribute("name"), r = Array.from(
        i?.querySelectorAll(
          "GSEControl, ReportControl, SampledValueControl, LogControl"
        ) ?? []
      ).some((a) => a.getAttribute("datSet") === n);
      i && (!n || !r) && e.push(t);
    }), this.unreferencedDataSets = zt(e), u`
      <div>
        <h1>
          ${d("cleanup.unreferencedDataSets.title")}
          (${e.length})
          <abbr slot="action">
            <mwc-icon-button
              icon="info"
              title="${d("cleanup.unreferencedDataSets.tooltip")}"
            >
            </mwc-icon-button>
          </abbr>
        </h1>
        <filtered-list multi class="dataSetList"
          >${Array.from(
      this.unreferencedDataSets.map(
        (t) => u`${this.renderListItem(t)}`
      )
    )}
        </filtered-list>
      </div>
      <footer>${this.renderDeleteButton()}</footer>
    `;
  }
  render() {
    return u`
      <section tabindex="0">${this.renderUnreferencedDataSets()}</section>
    `;
  }
};
ye.styles = be`
    ${st}

    section {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    @media (max-width: 1200px) {
      footer {
        flex-direction: row;
      }

      mwc-check-list-item {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .editItem {
      --mdc-icon-size: 16px;
    }

    .editItem {
      visibility: hidden;
      opacity: 0;
    }

    .checkListItem:hover .editItem {
      visibility: visible;
      opacity: 1;
      transition: visibility 0s, opacity 0.5s linear;
    }

    .cleanupDeleteButton {
      float: right;
    }

    footer {
      margin: 16px;
      display: flex;
      flex-flow: row wrap;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      align-content: center;
    }

    filtered-list {
      max-height: 70vh;
      min-height: 20vh;
      overflow-y: scroll;
    }
  `;
_e([
  b({ attribute: !1 })
], ye.prototype, "doc", 2);
_e([
  b({ type: Boolean })
], ye.prototype, "disableDataSetClean", 2);
_e([
  b({ type: Array })
], ye.prototype, "unreferencedDataSets", 2);
_e([
  b({ attribute: !1 })
], ye.prototype, "selectedDatasetItems", 2);
_e([
  _(".deleteButton")
], ye.prototype, "cleanupButton", 2);
_e([
  _(".dataSetList")
], ye.prototype, "dataSetList", 2);
_e([
  Nt("mwc-check-list-item.checkListItem")
], ye.prototype, "dataSetItems", 2);
ye = _e([
  pe("cleanup-datasets")
], ye);
u`<svg
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
const Ve = {
  action: z`<path d="M0 0h24v24H0z" fill="none"></path><path d="M13 3c-4.97 0-9
  4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7
  7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0
  9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" fill="currentColor"></path>`,
  dAIcon: z`<path fill="currentColor" d="m4.2 0c-2.31 0-4.2 1.89-4.2 4.2v11.6c0 2.31 1.89 4.2 4.2 4.2h18.1c2.31 0 4.2-1.89 4.2-4.2v-11.6c0-2.31-1.89-4.2-4.2-4.2zm0 1.89h18.1c1.29 0 2.3 1.01 2.3 2.3v11.6c0 1.29-1.01 2.31-2.3 2.31h-18.1c-1.29 0-2.3-1.01-2.3-2.31v-11.6c0-1.29 1.01-2.3 2.3-2.3z"/><path fill="currentColor" d="m12.5 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path fill="currentColor" d="m19.7 15-0.74-2.56h-3.18l-0.74 2.56h-1.75l3.04-10h2.06l3.03 10zm-1.13-4.13-0.823-2.88-0.379-1.46q-0.0947 0.412-0.178 0.739-0.0829 0.327-1.02 3.59z"/>`,
  dOIcon: z`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m12.1 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path d="m21.6 9.97q0 1.56-0.515 2.75-0.515 1.19-1.47 1.82-0.959 0.625-2.24 0.625-1.97 0-3.08-1.39-1.11-1.39-1.11-3.81 0-2.41 1.11-3.76t3.1-1.35 3.1 1.36q1.12 1.36 1.12 3.74zm-1.78 0q0-1.62-0.639-2.54-0.639-0.923-1.79-0.923-1.17 0-1.81 0.916-0.639 0.909-0.639 2.54 0 1.65 0.651 2.6 0.657 0.945 1.79 0.945 1.17 0 1.81-0.923 0.639-0.923 0.639-2.62z"/>`,
  enumIcon: z`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m5.37 15v-10h6.56v1.62h-4.81v2.51h4.45v1.62h-4.45v2.64h5.06v1.62z"/><path d="m18.5 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  info: z`<path d="M0 0h24v24H0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"></path>`,
  warning: z`<path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="currentColor"></path>`,
  error: z`<path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z" fill="currentColor"></path><path d="M11 7h2v7h-2z" fill="currentColor"></path><circle cx="12" cy="16" r="1" fill="currentColor"></circle>`,
  gooseIcon: z`<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  lNIcon: z`<path stroke="currentColor" stroke-width="1.89" fill="none" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path fill="currentColor" d="m5.71 15v-10h1.75v8.39h4.47v1.62z"/><path fill="currentColor" d="m18.2 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  logIcon: z`<path fill="currentColor" d="M9,7H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  reportIcon: z`<path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,16.41 7.58,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  smvIcon: z`<path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`
}, ka = z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Ve.gooseIcon}</svg>`, Ia = z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Ve.reportIcon}</svg>`, Ca = z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Ve.smvIcon}</svg>`, Ea = z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Ve.logIcon}</svg>`, Da = {
  ReportControl: Ia,
  LogControl: Ea,
  GSEControl: ka,
  SampledValueControl: Ca
};
z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z" />
</svg>`;
z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M21,14V4H3V14H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M4,5H15V10H4V5M16,5H20V7H16V5M20,8V13H16V8H20M4,11H9V13H4V11M10,11H15V13H10V11Z" />
</svg>`;
z`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4,1C2.89,1 2,1.89 2,3V7C2,8.11 2.89,9 4,9H1V11H13V9H10C11.11,9 12,8.11 12,7V3C12,1.89 11.11,1 10,1H4M4,3H10V7H4V3M14,13C12.89,13 12,13.89 12,15V19C12,20.11 12.89,21 14,21H11V23H23V21H20C21.11,21 22,20.11 22,19V15C22,13.89 21.11,13 20,13H14M3.88,13.46L2.46,14.88L4.59,17L2.46,19.12L3.88,20.54L6,18.41L8.12,20.54L9.54,19.12L7.41,17L9.54,14.88L8.12,13.46L6,15.59L3.88,13.46M14,15H20V19H14V15Z" />
</svg>`;
const et = {
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
}, Na = {
  DAType: Ye("dAIcon"),
  DOType: Ye("dOIcon"),
  EnumType: Ye("enumIcon"),
  LNodeType: Ye("lNIcon")
};
function Ye(e) {
  if (e === "reset") return u``;
  const t = et[e]?.height ?? 24, i = et[e]?.width ?? 24;
  return u`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 ${i} ${t}"
    width="${i}"
  >
    ${Ve[e]}
  </svg> `;
}
function tt(e, t) {
  if (e === "reset") return u``;
  const i = et[e]?.height ?? 24, n = et[e]?.width ?? 24;
  return u`<svg
    slot="${t ? "onIcon" : "offIcon"}"
    xmlns="http://www.w3.org/2000/svg"
    height="${i}"
    viewBox="0 0 ${n} ${i}"
    width="${n}"
  >
    ${Ve[e]}
  </svg> `;
}
u`<svg
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
u`<svg
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
u`<svg
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
u`<svg
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
u`<svg
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
u`<svg
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
u`<svg
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
u`<svg
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
u`<svg
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
u`<svg
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
u`<svg
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
u`<svg
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
u` <svg
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
z`
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
  </svg>`;
z`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
z`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
z`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
z`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
z`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
const Ta = "[:_A-Za-z]|[À-Ö]|[Ø-ö]|[ø-˿]|[Ͱ-ͽ]|[Ϳ-῿]|[‌-‍]|[⁰-↏]|[Ⰰ-⿯]|[、-퟿]|[豈-﷏]|[ﷰ-�]", _a = Ta + "|[.0-9\\-]|·|[̀-ͯ]|[‿-⁀]", La = "(" + _a + ")+", ue = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  nmToken: La,
  asciName: "[A-Za-z][0-9,A-Z,a-z_]*",
  tRestrName1stL: "[a-z][0-9A-Za-z]*",
  abstractDataAttributeName: "((T)|(Test)|(Check)|(SIUnit)|(Oper)|(SBO)|(SBOw)|(Cancel)|[a-z][0-9A-Za-z]*)"
}, ct = {
  cbName: 32,
  abstracDaName: 60
}, $ = {
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
}, $a = {
  IP: $.IP,
  "IP-SUBNET": $.IP,
  "IP-GATEWAY": $.IP,
  "OSI-TSEL": $.OSI,
  "OSI-SSEL": $.OSI,
  "OSI-PSEL": $.OSI,
  "OSI-AP-Title": $.OSIAPi,
  "OSI-AP-Invoke": $.OSId,
  "OSI-AE-Qualifier": $.OSId,
  "OSI-AE-Invoke": $.OSId,
  "MAC-Address": $.MAC,
  APPID: $.APPID,
  "VLAN-ID": $.VLANid,
  "VLAN-PRIORITY": $.VLANp,
  "OSI-NSAP": $.OSI,
  "SNTP-Port": $.port,
  "MMS-Port": $.port,
  DNSName: "[^ ]*",
  "UDP-Port": $.port,
  "TCP-Port": $.port,
  "C37-118-IP-Port": "102[5-9]|10[3-9][0-9]|1[1-9][0-9][0-9]|[2-9][0-9]{3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]",
  IPv6: $.IPv6,
  "IPv6-SUBNET": $.IPv6sub,
  "IPv6-GATEWAY": $.IPv6,
  IPv6FlowLabel: "[0-9a-fA-F]{1,5}",
  IPv6ClassOfTraffic: "[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]",
  "IPv6-IGMPv3Src": $.IPv6,
  "IP-IGMPv3Sr": $.IP,
  "IP-ClassOfTraffic": $.OSI
}, za = {
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
function Pi(e) {
  return [
    T`<mwc-formfield label="${d("connectedap.wizard.addschemainsttype")}">
      <mwc-checkbox
        id="instType"
        ?checked="${e.hasInstType}"
      ></mwc-checkbox>
    </mwc-formfield>`,
    T`${Object.entries(e.attributes).map(
      ([t, i]) => T`<wizard-textfield
          label="${t}"
          ?nullable=${za[t]}
          .maybeValue=${i}
          pattern="${Ae($a[t])}"
          required
        ></wizard-textfield>`
    )}`
  ];
}
function Ra(e, t) {
  return e.querySelectorAll("P").length !== t.querySelectorAll("P").length ? !1 : Array.from(e.querySelectorAll("P")).filter(
    (i) => !t.querySelector(`Address > P[type="${i.getAttribute("type")}"]`)?.isEqualNode(i)
  ).length === 0;
}
function Pa(e, t, i) {
  const n = re(t.ownerDocument, "Address", {});
  return Object.entries(e).filter(([r, a]) => a !== null).forEach(([r, a]) => {
    const s = r, o = re(t.ownerDocument, "P", { type: s });
    i && o.setAttributeNS(
      "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:type",
      "tP_" + r
    ), o.textContent = a, n.appendChild(o);
  }), n;
}
function Oi(e, t, i) {
  const n = [], r = Pa(t, e, i), a = e.querySelector("Address");
  return a !== null && !Ra(a, r) ? (n.push({
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
function si(e, t, i, n) {
  if (t === null) {
    const a = re(n.ownerDocument, e, {
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
function Oa(e) {
  return (t, i) => {
    const n = {
      actions: [],
      title: d("gse.action.addaddress", {
        identity: I(e)
      })
    }, r = i.shadowRoot?.querySelector("#instType")?.checked ?? !1, a = {};
    a["MAC-Address"] = m(
      t.find((l) => l.label === "MAC-Address")
    ), a.APPID = m(t.find((l) => l.label === "APPID")), a["VLAN-ID"] = m(
      t.find((l) => l.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = m(
      t.find((l) => l.label === "VLAN-PRIORITY")
    ), Oi(e, a, r).forEach((l) => {
      n.actions.push(l);
    });
    const o = m(t.find((l) => l.label === "MinTime")), c = m(t.find((l) => l.label === "MaxTime"));
    return o !== (e.querySelector("MinTime")?.textContent?.trim() ?? null) && n.actions.push(
      si(
        "MinTime",
        e.querySelector("MinTime"),
        o,
        e
      )
    ), c !== (e.querySelector("MaxTime")?.textContent?.trim() ?? null) && n.actions.push(
      si(
        "MaxTime",
        e.querySelector("MaxTime"),
        c,
        e
      )
    ), [n];
  };
}
function Va(e) {
  const t = e.querySelector("MinTime")?.innerHTML.trim() ?? null, i = e.querySelector("MaxTime")?.innerHTML.trim() ?? null, n = Array.from(e.querySelectorAll("Address > P")).some(
    (a) => a.getAttribute("xsi:type")
  ), r = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((a) => {
    r[a] || (r[a] = e.querySelector(`Address > P[type="${a}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: d("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: d("save"),
        icon: "save",
        action: Oa(e)
      },
      content: [
        ...Pi({ hasInstType: n, attributes: r }),
        u`<wizard-textfield
          label="MinTime"
          .maybeValue=${t}
          nullable
          suffix="ms"
          type="number"
        ></wizard-textfield>`,
        u`<wizard-textfield
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
const Ma = [
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
], Fa = [
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
], Ha = ["Spec", "Conf", "RO", "Set"], qa = ["SmpPerPeriod", "SmpPerSec", "SecPerSmp"], Vi = [
  "None",
  "Signature",
  "SignatureAndEncryption"
];
function Rt(e) {
  const t = e.getAttribute("name"), i = e.closest("IED")?.getAttribute("name"), n = e.closest("AccessPoint")?.getAttribute("name"), r = e.closest("LDevice")?.getAttribute("inst");
  return e.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${n}"] > GSE[ldInst="${r}"][cbName="${t}"]`
  );
}
function Ba(e) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      pattern="${ue.asciName}"
      maxLength="${ct.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    u`<wizard-select
      label="type"
      .maybeValue=${e.type}
      helper="${d("scl.type")}"
      nullable
      required
      >${["GOOSE", "GSSE"].map(
      (t) => u`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`,
    u`<wizard-textfield
      label="appID"
      .maybeValue=${e.appID}
      helper="${d("scl.id")}"
      required
      validationMessage="${d("textfield.nonempty")}"
    ></wizard-textfield>`,
    u`<wizard-checkbox
      label="fixedOffs"
      .maybeValue=${e.fixedOffs}
      nullable
      helper="${d("scl.fixedOffs")}"
    ></wizard-checkbox>`,
    u`<wizard-select
      label="securityEnabled"
      .maybeValue=${e.securityEnabled}
      nullable
      required
      helper="${d("scl.securityEnable")}"
      >${Vi.map(
      (t) => u`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function Ga(e) {
  if (!e.parentElement) return null;
  const t = e.parentElement.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), i = Rt(e), n = Array.from(
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
    title: d("controlblock.action.remove", {
      type: e.tagName,
      name: a,
      iedName: s
    }),
    actions: r
  };
}
function Ua(e) {
  return (t) => {
    const i = Ga(e);
    i && t.dispatchEvent(he(i)), t.dispatchEvent(ve());
  };
}
function ja(e) {
  return (t) => {
    t.dispatchEvent(L(() => ot(e)));
  };
}
function Wa(e) {
  return (t) => {
    t.dispatchEvent(L(() => Va(e)));
  };
}
function Ka(e) {
  return (t) => {
    const i = t.find((l) => l.label === "name").value, n = m(t.find((l) => l.label === "desc")), r = m(t.find((l) => l.label === "type")), a = m(t.find((l) => l.label === "appID")), s = m(t.find((l) => l.label === "fixedOffs")), o = m(
      t.find((l) => l.label === "securityEnabled")
    );
    if (i === e.getAttribute("name") && n === e.getAttribute("desc") && r === e.getAttribute("type") && a === e.getAttribute("appID") && s === e.getAttribute("fixedOffs") && o === e.getAttribute("securityEnabled"))
      return [];
    const c = q(e, {
      name: i,
      desc: n,
      type: r,
      appID: a,
      fixedOffs: s,
      securityEnabled: o
    });
    return [{ old: { element: e }, new: { element: c } }];
  };
}
function Za(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("type"), r = e.getAttribute("appID"), a = e.getAttribute("fixedOffs"), s = e.getAttribute("securityEnabled"), o = Rt(e), c = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), l = [];
  return l.push({
    icon: "delete",
    label: d("remove"),
    action: Ua(e)
  }), c && l.push({
    icon: "edit",
    label: d("scl.DataSet"),
    action: ja(c)
  }), o && l.push({
    icon: "edit",
    label: d("scl.Communication"),
    action: Wa(o)
  }), [
    {
      title: d("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: d("save"),
        action: Ka(e)
      },
      menuActions: l,
      content: [
        ...Ba({
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
function Xa(e) {
  return Object.entries(e).map(
    ([t, i]) => u`<wizard-checkbox
        label="${t}"
        .maybeValue=${i}
        nullable
        helper="${d(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function Qa(e) {
  return (t) => {
    const i = m(t.find((f) => f.label === "seqNum")), n = m(t.find((f) => f.label === "timeStamp")), r = m(t.find((f) => f.label === "dataSet")), a = m(t.find((f) => f.label === "reasonCode")), s = m(t.find((f) => f.label === "dataRef")), o = m(t.find((f) => f.label === "entryID")), c = m(t.find((f) => f.label === "configRef")), l = m(t.find((f) => f.label === "bufOvfl"));
    if (i === e.getAttribute("seqNum") && n === e.getAttribute("timeStamp") && r === e.getAttribute("dataSet") && a === e.getAttribute("reasonCode") && s === e.getAttribute("dataRef") && o === e.getAttribute("entryID") && c === e.getAttribute("configRef") && l === e.getAttribute("bufOvfl"))
      return [];
    const p = q(e, {
      seqNum: i,
      timeStamp: n,
      dataSet: r,
      reasonCode: a,
      dataRef: s,
      entryID: o,
      configRef: c,
      bufOvfl: l
    });
    return [{ old: { element: e }, new: { element: p } }];
  };
}
function Ya(e) {
  const [
    t,
    i,
    n,
    r,
    a,
    s,
    o,
    c
  ] = [
    "seqNum",
    "timeStamp",
    "dataSet",
    "reasonCode",
    "dataRef",
    "entryID",
    "configRef",
    "bufOvfl"
  ].map((l) => e.getAttribute(l));
  return [
    {
      title: d("wizard.title.edit", { tagName: e.tagName }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Qa(e)
      },
      content: Xa({
        seqNum: t,
        timeStamp: i,
        dataSet: n,
        reasonCode: r,
        dataRef: a,
        entryID: s,
        configRef: o,
        bufOvfl: c
      })
    }
  ];
}
function Ja(e) {
  return Object.entries(e).map(
    ([t, i]) => u`<wizard-checkbox
        label="${t}"
        .maybeValue=${i}
        nullable
        helper="${d(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function es(e) {
  return (t) => {
    const i = m(t.find((l) => l.label === "dchg")), n = m(t.find((l) => l.label === "qchg")), r = m(t.find((l) => l.label === "dupd")), a = m(t.find((l) => l.label === "period")), s = m(t.find((l) => l.label === "gi"));
    if (i === e.getAttribute("dchg") && n === e.getAttribute("qchg") && r === e.getAttribute("dupd") && a === e.getAttribute("period") && s === e.getAttribute("gi"))
      return [];
    const o = q(e, {
      dchg: i,
      qchg: n,
      dupd: r,
      period: a,
      gi: s
    });
    return [{ old: { element: e }, new: { element: o } }];
  };
}
function ts(e) {
  const [t, i, n, r, a] = [
    "dchg",
    "qchg",
    "dupd",
    "period",
    "gi"
  ].map((s) => e.getAttribute(s));
  return [
    {
      title: d("wizard.title.edit", { tagName: e.tagName }),
      primary: {
        icon: "save",
        label: d("save"),
        action: es(e)
      },
      content: Ja({ dchg: t, qchg: i, dupd: n, period: r, gi: a })
    }
  ];
}
function gt(e) {
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
function Mi(e, t) {
  const [i, n, r, a, s, o, c] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc"
  ].map((F) => e.getAttribute(F));
  if (!t.querySelector(`LDevice[inst="${i}"]`)) return !1;
  const p = n ? [`[prefix="${n}"]`] : ['[prefix=""]', ":not([prefix])"], f = a ? [`[inst="${a}"]`] : ['[inst=""]', ":not([inst])"], h = G(
    ["LN0", "LN"],
    p,
    [`[lnClass="${r}"]`],
    f
  ).map((F) => F.join("")).join(","), x = t.querySelector(h);
  if (!x) return !1;
  const S = s?.split(".");
  if (!S) return !1;
  let k = x;
  for (const F of S)
    if (k = gt(k).find(
      (le) => le.getAttribute("name") === F
    ), !k) return !1;
  const C = o?.split("."), A = gt(k).some(
    (F) => F.getAttribute("fc") === c
  );
  if (!C && A) return !0;
  if (!C) return !1;
  let w = "";
  for (const F of C)
    if (k = gt(k).find(
      (le) => le.getAttribute("name") === F
    ), k?.getAttribute("fc") && (w = k.getAttribute("fc")), !k) return !1;
  return w === c;
}
function is(e) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      pattern="${ue.asciName}"
      maxLength="${ct.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    u`<wizard-checkbox
      label="buffered"
      .maybeValue=${e.buffered}
      helper="${d("scl.buffered")}"
    ></wizard-checkbox>`,
    u`<wizard-textfield
      label="rptID"
      .maybeValue=${e.rptID}
      nullable
      required
      helper="${d("report.rptID")}"
    ></wizard-textfield>`,
    u`<wizard-checkbox
      label="indexed"
      .maybeValue=${e.indexed}
      nullable
      helper="${d("scl.indexed")}"
    ></wizard-checkbox>`,
    u`<wizard-textfield
      label="max Clients"
      .maybeValue=${e.max}
      helper="${d("scl.maxReport")}"
      nullable
      type="number"
      suffix="#"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="bufTime"
      .maybeValue=${e.bufTime}
      helper="${d("scl.bufTime")}"
      nullable
      required
      type="number"
      min="0"
      suffix="ms"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="intgPd"
      .maybeValue=${e.intgPd}
      helper="${d("scl.intgPd")}"
      nullable
      required
      type="number"
      min="0"
      suffix="ms"
    ></wizard-textfield>`
  ];
}
function ns(e) {
  if (!e.parentElement) return null;
  const t = e.parentElement.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), i = Array.from(
    e.parentElement.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    )
  ).filter(
    (s) => s.getAttribute("datSet") === t?.getAttribute("name")
  ).length <= 1, n = [];
  n.push({
    old: {
      parent: e.parentElement,
      element: e,
      reference: e.nextSibling
    }
  }), t && i && n.push({
    old: {
      parent: e.parentElement,
      element: t,
      reference: t.nextSibling
    }
  });
  const r = e.getAttribute("name"), a = e.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: d("controlblock.action.remove", { type: "Report", name: r, iedName: a }),
    actions: n
  };
}
function rs(e, t, i) {
  if (e === null) {
    const r = re(i.ownerDocument, "RptEnabled", {
      max: t
    });
    return {
      new: {
        parent: i,
        element: r,
        reference: Qr(i, "RptEnabled")
      }
    };
  }
  const n = q(e, { max: t });
  return {
    old: { element: e },
    new: { element: n }
  };
}
function as(e) {
  return (t, i) => {
    const n = e.ownerDocument, r = i.shadowRoot?.querySelector("filtered-list")?.selected, a = [];
    return r.forEach((s) => {
      const o = K(n, "IED", s.value);
      if (!o) return;
      const c = o.querySelector("LN0");
      if (!c) return [];
      const l = e.parentElement?.querySelector(
        `DataSet[name="${e.getAttribute("datSet")}"]`
      );
      if (l && c.querySelector(
        `DataSet[name="${l.getAttribute("name")}"]`
      ))
        return [];
      if (c.querySelector(
        `ReportControl[name="${e.getAttribute("name")}"]`
      ))
        return [];
      const p = l?.cloneNode(!0);
      if (Array.from(p.querySelectorAll("FCDA")).forEach((S) => {
        Mi(S, o) || p.removeChild(S);
      }), p.children.length === 0) return [];
      const f = e.cloneNode(!0), h = e.closest("IED")?.getAttribute("name"), x = o.getAttribute("name");
      a.push({
        title: `ReportControl copied from ${h} to ${x}`,
        actions: [
          { new: { parent: c, element: p } },
          { new: { parent: c, element: f } }
        ]
      });
    }), a;
  };
}
function ss(e, t) {
  const i = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), n = e.closest("IED")?.getAttribute("name") === t.getAttribute("name"), r = t.querySelector("AccessPoint > Server > LDevice > LN0"), a = !!r?.querySelector(
    `ReportControl[name="${e.getAttribute("name")}"]`
  ), s = !!r?.querySelector(
    `DataSet[name="${i?.getAttribute("name")}"]`
  ), o = i?.cloneNode(!0);
  Array.from(o.querySelectorAll("FCDA")).forEach((f) => {
    Mi(f, t) || o.removeChild(f);
  });
  const c = o.children.length > 0, l = t.getAttribute("name");
  let p = "";
  return n ? p = d("controlblock.hints.source") : r ? s && !n ? p = d("controlblock.hints.exist", {
    type: "RerportControl",
    name: e.getAttribute("name")
  }) : a && !n ? p = d("controlblock.hints.exist", {
    type: "DataSet",
    name: e.getAttribute("name")
  }) : c ? p = d("controlBlock.hints.valid") : p = d("controlblock.hints.noMatchingData") : p = d("controlblock.hints.missingServer"), u`<mwc-check-list-item
    twoline
    value="${I(t)}"
    ?disabled=${n || !r || a || s || !c}
    ><span>${l}</span
    ><span slot="secondary">${p}</span></mwc-check-list-item
  >`;
}
function os(e) {
  return [
    {
      title: d("report.wizard.location"),
      primary: {
        icon: "save",
        label: d("save"),
        action: as(e)
      },
      content: [
        u`<filtered-list multi
          >${Array.from(e.ownerDocument.querySelectorAll("IED")).map(
          (t) => ss(e, t)
        )}</filtered-list
        >`
      ]
    }
  ];
}
function cs(e) {
  return (t) => {
    t.dispatchEvent(
      L(() => os(e))
    );
  };
}
function ls(e) {
  return (t) => {
    const i = ns(e);
    i && t.dispatchEvent(he(i)), t.dispatchEvent(ve());
  };
}
function ds(e) {
  return (t) => {
    t.dispatchEvent(L(() => ot(e)));
  };
}
function us(e) {
  return (t) => {
    t.dispatchEvent(L(() => ts(e)));
  };
}
function ps(e) {
  return (t) => {
    t.dispatchEvent(L(() => Ya(e)));
  };
}
function ms(e) {
  return (t) => {
    const i = {}, n = [
      "name",
      "desc",
      "buffered",
      "rptID",
      "indexed",
      "bufTime",
      "intgPd"
    ];
    n.forEach((f) => {
      i[f] = m(t.find((h) => h.label === f));
    });
    let r = null;
    if (n.some((f) => i[f] !== e.getAttribute(f))) {
      const f = q(e, i);
      r = {
        old: { element: e },
        new: { element: f }
      };
    }
    const a = m(t.find((f) => f.label === "max Clients"));
    let s = null;
    a !== (e.querySelector("RptEnabled")?.getAttribute("max") ?? null) && (s = rs(
      e.querySelector("RptEnabled"),
      a,
      e
    ));
    const o = [];
    r && o.push(r), s && o.push(s);
    const c = i.name, l = e.closest("IED").getAttribute("name"), p = {
      title: d("controlblock.action.edit", {
        type: "Report",
        name: c,
        iedName: l
      }),
      actions: o
    };
    return o.length ? [p] : [];
  };
}
function hs(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("buffered"), r = e.getAttribute("rptID"), a = e.getAttribute("indexed"), s = e.querySelector("RptEnabled")?.getAttribute("max") ?? null, o = e.getAttribute("bufTime"), c = e.getAttribute("intgPd"), l = e.querySelector("TrgOps"), p = e.querySelector("OptFields"), f = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), h = [];
  return h.push({
    icon: "delete",
    label: d("remove"),
    action: ls(e)
  }), f && h.push({
    icon: "edit",
    label: d("scl.DataSet"),
    action: ds(f)
  }), l && h.push({
    icon: "edit",
    label: d("scl.TrgOps"),
    action: us(l)
  }), p && h.push({
    icon: "edit",
    label: d("scl.OptFields"),
    action: ps(p)
  }), h.push({
    icon: "copy",
    label: d("controlblock.label.copy"),
    action: cs(e)
  }), [
    {
      title: d("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: d("save"),
        action: ms(e)
      },
      menuActions: h,
      content: [
        ...is({
          name: t,
          desc: i,
          buffered: n,
          rptID: r,
          indexed: a,
          max: s,
          bufTime: o,
          intgPd: c
        })
      ]
    }
  ];
}
function fs(e) {
  return (t, i) => {
    const n = {
      actions: [],
      title: d("smv.action.addaddress", {
        identity: I(e)
      })
    }, r = i.shadowRoot?.querySelector("#instType")?.checked, a = {};
    a["MAC-Address"] = m(
      t.find((o) => o.label === "MAC-Address")
    ), a.APPID = m(t.find((o) => o.label === "APPID")), a["VLAN-ID"] = m(
      t.find((o) => o.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = m(
      t.find((o) => o.label === "VLAN-PRIORITY")
    );
    const s = Oi(e, a, r);
    return s.length ? (s.forEach((o) => {
      n.actions.push(o);
    }), [n]) : [];
  };
}
function bs(e) {
  const t = Array.from(e.querySelectorAll("Address > P")).some(
    (n) => n.getAttribute("xsi:type")
  ), i = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((n) => {
    i[n] || (i[n] = e.querySelector(`Address > P[type="${n}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: d("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: d("save"),
        icon: "edit",
        action: fs(e)
      },
      content: [...Pi({ hasInstType: t, attributes: i })]
    }
  ];
}
function gs(e) {
  return Object.entries(e).map(
    ([t, i]) => u`<wizard-checkbox
        label="${t}"
        .maybeValue=${i}
        nullable
        helper="${d(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function ys(e) {
  return (t) => {
    const i = {}, n = [
      "refreshTime",
      "sampleRate",
      "dataSet",
      "security",
      "synchSourceId"
    ];
    if (n.forEach((a) => {
      i[a] = m(t.find((s) => s.label === a));
    }), !n.some((a) => i[a] !== e.getAttribute(a)))
      return [];
    const r = q(e, i);
    return [{ old: { element: e }, new: { element: r } }];
  };
}
function vs(e) {
  const [t, i, n, r, a] = [
    "refreshTime",
    "sampleRate",
    "dataSet",
    "security",
    "synchSourceId"
  ].map((s) => e.getAttribute(s));
  return [
    {
      title: d("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: d("save"),
        action: ys(e)
      },
      content: [
        ...gs({
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
function Pt(e) {
  const t = e.getAttribute("name"), i = e.closest("IED")?.getAttribute("name"), n = e.closest("AccessPoint")?.getAttribute("name"), r = e.closest("LDevice")?.getAttribute("inst");
  return e.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${n}"] > SMV[ldInst="${r}"][cbName="${t}"]`
  ) ?? null;
}
function Ss(e) {
  if (!e.parentElement) return null;
  const t = e.parentElement.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), i = Pt(e), n = Array.from(
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
    title: d("controlblock.action.remove", {
      type: e.tagName,
      name: a,
      iedName: s
    }),
    actions: r
  };
}
function As(e) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      pattern="${ue.asciName}"
      maxLength="${ct.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      pattern="${ue.normalizedString}"
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    e.multicast === "true" ? u`` : u`<wizard-checkbox
          label="multicast"
          .maybeValue=${e.multicast}
          helper="${d("scl.multicast")}"
          disabled
        ></wizard-checkbox>`,
    u`<wizard-textfield
      label="smvID"
      .maybeValue=${e.smvID}
      helper="${d("scl.id")}"
      required
      validationMessage="${d("textfield.nonempty")}"
    ></wizard-textfield>`,
    u`<wizard-select
      label="smpMod"
      .maybeValue=${e.smpMod}
      nullable
      required
      helper="${d("scl.smpMod")}"
      >${qa.map(
      (t) => u`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`,
    u`<wizard-textfield
      label="smpRate"
      .maybeValue=${e.smpRate}
      helper="${d("scl.smpRate")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="nofASDU"
      .maybeValue=${e.nofASDU}
      helper="${d("scl.nofASDU")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    u`<wizard-select
      label="securityEnabled"
      .maybeValue=${e.securityEnabled}
      nullable
      required
      helper="${d("scl.securityEnable")}"
      >${Vi.map(
      (t) => u`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function xs(e) {
  return (t) => {
    const i = Ss(e);
    i && t.dispatchEvent(he(i)), t.dispatchEvent(ve());
  };
}
function ws(e) {
  return (t) => {
    t.dispatchEvent(L(() => ot(e)));
  };
}
function ks(e) {
  return (t) => {
    t.dispatchEvent(L(() => vs(e)));
  };
}
function Is(e) {
  return (t) => {
    t.dispatchEvent(L(() => bs(e)));
  };
}
function Cs(e) {
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
      if (s === "multicast" && !t.find((c) => c.label === s)) {
        i.multicast = "true";
        return;
      }
      i[s] = m(t.find((c) => c.label === s));
    });
    let r = null;
    if (n.some((s) => i[s] !== e.getAttribute(s))) {
      const s = q(e, i);
      r = {
        old: { element: e },
        new: { element: s }
      };
    }
    const a = [];
    return r && a.push(r), a;
  };
}
function Es(e) {
  const t = e.getAttribute("name"), i = e.getAttribute("desc"), n = e.getAttribute("multicast"), r = e.getAttribute("smvID"), a = e.getAttribute("smpMod"), s = e.getAttribute("smpRate"), o = e.getAttribute("nofASDU"), c = e.getAttribute("securityEnabled"), l = Pt(e), p = e.querySelector("SmvOpts"), f = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), h = [];
  return h.push({
    icon: "delete",
    label: d("remove"),
    action: xs(e)
  }), f && h.push({
    icon: "edit",
    label: d("scl.DataSet"),
    action: ws(f)
  }), p && h.push({
    icon: "edit",
    label: d("scl.SmvOpts"),
    action: ks(p)
  }), l && h.push({
    icon: "edit",
    label: d("scl.Communication"),
    action: Is(l)
  }), [
    {
      title: d("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: d("save"),
        action: Cs(e)
      },
      menuActions: h,
      content: [
        ...As({
          name: t,
          desc: i,
          multicast: n,
          smvID: r,
          smpMod: a,
          smpRate: s,
          nofASDU: o,
          securityEnabled: c
        })
      ]
    }
  ];
}
var Ds = Object.defineProperty, Ns = Object.getOwnPropertyDescriptor, oe = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Ns(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (r = (n ? s(t, i, r) : s(r)) || r);
  return n && r && Ds(t, i, r), r;
};
const oi = {
  GSEControl: "gooseIcon",
  LogControl: "logIcon",
  SampledValueControl: "smvIcon",
  ReportControl: "reportIcon"
};
function ci(e) {
  return e.tagName === "GSEControl" ? Rt(e) : e.tagName === "SampledValueControl" ? Pt(e) : null;
}
let X = class extends De {
  constructor() {
    super(...arguments), this.disableControlClean = !1, this.unreferencedControls = [], this.selectedControlItems = [];
  }
  /**
   * Toggle the class hidden in the unused controls list for use by filter buttons.
   * @param selectorType - class for selection to toggle the hidden class used by the list.
   */
  toggleHiddenClass(e) {
    this.cleanupList.querySelectorAll(`.${e}`).forEach((t) => {
      t.classList.toggle("hiddenontypefilter"), t.hasAttribute("disabled") ? t.removeAttribute("disabled") : t.setAttribute("disabled", "true");
    });
  }
  /**
   * Initial update after container is loaded.
   */
  async firstUpdated() {
    this.cleanupList?.addEventListener("selected", () => {
      this.selectedControlItems = this.cleanupList.index;
    }), this.toggleHiddenClass("tReportControl");
  }
  /**
   * Create a button for filtering in the control block cleanup container.
   * @param controlType - SCL Control Type e.g. GSEControl.
   * @param initialState - boolean representing whether button is on or off.
   * @returns html for the icon button.
   */
  renderFilterIconButton(e, t = !0) {
    return u`<mwc-icon-button-toggle
      slot="graphic"
      label="filter"
      ?on=${t}
      class="t${e}Filter"
      @click="${(i) => {
      i.stopPropagation(), this.toggleHiddenClass(`t${e}`);
    }}"
      >${tt(oi[e], !0)}
      ${tt(oi[e], !1)}
    </mwc-icon-button-toggle> `;
  }
  /**
   * Provide list item in the control block cleanup container.
   * @param controlBlock - an unused SCL ControlBlock element.
   * @returns html for checklist item.
   */
  renderListItem(e) {
    return u`<mwc-check-list-item
      twoline
      class="${Oe({
      cleanupListItem: !0,
      tReportControl: e.tagName === "ReportControl",
      tLogControl: e.tagName === "LogControl",
      tGSEControl: e.tagName === "GSEControl",
      tSampledValueControl: e.tagName === "SampledValueControl"
    })}"
      value="${I(e)}"
      graphic="large"
      ><span class="unreferencedControl"
        >${e.getAttribute("name")}
      </span>
      <span>
        <mwc-icon-button
          label="warning"
          icon="warning_amber"
          class="cautionItem"
          title="${d(
      "cleanup.unreferencedControls.addressDefinitionTooltip"
    )}"
          ?disabled="${ci(e) === null}"
        >
        </mwc-icon-button>
      </span>
      <span>
        <mwc-icon-button
          label="Edit"
          icon="edit"
          class="editItem"
          ?disabled="${e.tagName === "LogControl"}"
          @click=${(t) => {
      t.stopPropagation(), e.tagName === "GSEControl" ? t.target?.dispatchEvent(
        L(Za(e))
      ) : e.tagName === "ReportControl" ? t.target?.dispatchEvent(
        L(hs(e))
      ) : e.tagName === "SampledValueControl" ? t.target?.dispatchEvent(
        L(Es(e))
      ) : e.tagName;
    }}
        ></mwc-icon-button>
      </span>
      <span slot="secondary"
        >${e.tagName} -
        ${e.closest("IED")?.getAttribute("name")}
        (${e.closest("IED")?.getAttribute("manufacturer") ?? "No manufacturer defined"})
        -
        ${e.closest("IED")?.getAttribute("type") ?? "No Type Defined"}</span
      >
      <mwc-icon slot="graphic"
        >${Da[e.tagName]}</mwc-icon
      >
    </mwc-check-list-item>`;
  }
  /**
   * Provide delete button the control block cleanup container.
   * @returns html for the Delete Button of this container.
   */
  renderDeleteButton() {
    const e = this.selectedControlItems.size;
    return u`<mwc-button
      outlined
      icon="delete"
      class="deleteButton"
      label="${d(
      "cleanup.unreferencedControls.deleteButton"
    )} (${e || "0"})"
      ?disabled=${this.selectedControlItems.size === 0 || Array.isArray(this.selectedControlItems) && !this.selectedControlItems.length}
      @click=${(t) => {
      const i = Array.from(
        this.selectedControlItems.values()
      ).map((a) => this.unreferencedControls[a]);
      let n = [];
      this.cleanupAddressCheckbox.checked === !0 && (n = Je(
        i.map((a) => ci(a)).filter(Boolean)
      )), Je(i).concat(n).forEach(
        (a) => t.target?.dispatchEvent(he(a))
      ), this.cleanupListItems.forEach((a) => {
        a.selected = !1;
      });
    }}
    ></mwc-button>`;
  }
  /**
   * Render a user selectable table of unreferenced datasets if any exist, otherwise indicate this is not an issue.
   * @returns html for table and action button.
   */
  renderUnreferencedControls() {
    const e = [];
    return Array.from(
      this.doc?.querySelectorAll(
        "GSEControl, ReportControl, SampledValueControl, LogControl"
      ) ?? []
    ).filter(ne).forEach((t) => {
      const i = t.parentElement, n = t.getAttribute("datSet"), r = i?.querySelector(`DataSet[name="${n}"]`);
      i && (!n || !r) && e.push(t);
    }), this.unreferencedControls = zt(e), u`
      <div>
        <h1>
          ${d("cleanup.unreferencedControls.title")}
          (${e.length})
          <abbr slot="action">
            <mwc-icon-button
              icon="info"
              title="${d("cleanup.unreferencedControls.tooltip")}"
            >
            </mwc-icon-button>
          </abbr>
        </h1>
        ${this.renderFilterIconButton("LogControl")}
        ${this.renderFilterIconButton("ReportControl", !1)}
        ${this.renderFilterIconButton("GSEControl")}
        ${this.renderFilterIconButton("SampledValueControl")}
        <filtered-list multi class="cleanupList"
          >${Array.from(e.map((t) => this.renderListItem(t)))}
        </filtered-list>
      </div>
      <footer>
        ${this.renderDeleteButton()}
        <mwc-formfield
          class="removeFromCommunication"
          label="${d(
      "cleanup.unreferencedControls.alsoRemoveFromCommunication"
    )}"
        >
          <mwc-checkbox
            checked
            class="cleanupAddressCheckbox"
            ?disabled=${this.selectedControlItems.size === 0 || Array.isArray(this.selectedControlItems) && !this.selectedControlItems.length}
          ></mwc-checkbox
        ></mwc-formfield>
      </footer>
    `;
  }
  render() {
    return u`
      <section tabindex="1">${this.renderUnreferencedControls()}</section>
    `;
  }
};
X.styles = be`
    ${st}

    section {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;
    }

    @media (max-width: 1200px) {
      footer {
        flex-direction: row;
      }

      mwc-check-list-item {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .editItem,
    .cautionItem {
      --mdc-icon-size: 16px;
    }

    .editItem {
      visibility: hidden;
      opacity: 0;
    }

    .cleanupListItem:hover .editItem {
      visibility: visible;
      opacity: 1;
      transition: visibility 0s, opacity 0.5s linear;
    }

    .cautionItem {
      color: var(--yellow);
    }

    .cautionItem[disabled],
    .editItem[disabled] {
      display: none;
    }

    .deleteButton {
      float: right;
    }

    footer {
      align-items: center;
      align-content: center;
      display: flex;
      flex-flow: row wrap;
      flex-direction: row-reverse;
      justify-content: space-between;
      margin: 16px;
    }

    filtered-list {
      min-height: 20vh;
      overflow-y: scroll;
    }

    .tGSEControlFilter[on],
    .tSampledValueControlFilter[on],
    .tLogControlFilter[on],
    .tReportControlFilter[on] {
      color: var(--secondary);
      opacity: 1;
    }

    /* Make sure to type filter here
    .hidden is set on string filter in filtered-list and must always filter*/
    .cleanupListItem.hiddenontypefilter:not(.hidden) {
      display: none;
    }

    /* filter disabled, Material Design guidelines for opacity */
    .tGSEControlFilter,
    .tSampledValueControlFilter,
    .tLogControlFilter,
    .tReportControlFilter {
      opacity: 0.38;
    }
  `;
oe([
  b({ attribute: !1 })
], X.prototype, "doc", 2);
oe([
  b({ type: Boolean })
], X.prototype, "disableControlClean", 2);
oe([
  b({ type: Array })
], X.prototype, "unreferencedControls", 2);
oe([
  b({ attribute: !1 })
], X.prototype, "selectedControlItems", 2);
oe([
  _(".deleteButton")
], X.prototype, "cleanButton", 2);
oe([
  _(".cleanupList")
], X.prototype, "cleanupList", 2);
oe([
  Nt("mwc-check-list-item.cleanupListItem")
], X.prototype, "cleanupListItems", 2);
oe([
  _(".cleanupAddressCheckbox")
], X.prototype, "cleanupAddressCheckbox", 2);
oe([
  _(".tGSEControlFilter")
], X.prototype, "cleanupGSEControlFilter", 2);
oe([
  _(".tSampledValueControlFilter")
], X.prototype, "cleanupSampledValueControlFilter", 2);
oe([
  _(".tLogControlFilter")
], X.prototype, "cleanupLogControlFilter", 2);
oe([
  _(".tReportControlFilter")
], X.prototype, "cleanupReportControlFilter", 2);
X = oe([
  pe("cleanup-control-blocks")
], X);
function Ts(e, t) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { ...e, ...t?.detail }
  });
}
function Fi(e) {
  return (t) => {
    t.dispatchEvent(
      he({ old: { parent: e.parentElement, element: e } })
    ), t.dispatchEvent(ve());
  };
}
function _s(e) {
  return (t) => {
    t.dispatchEvent(L(() => Hi({ parent: e })));
  };
}
function Ls(e) {
  return (t) => {
    const i = m(t.find((c) => c.label === "name")), n = m(t.find((c) => c.label === "desc")), r = m(t.find((c) => c.label === "type")), a = m(
      t.find((c) => c.label === "accessControl")
    ), s = m(t.find((c) => c.label === "transient")) !== "" ? m(t.find((c) => c.label === "transient")) : null;
    if (i === e.getAttribute("name") && n === e.getAttribute("desc") && r === e.getAttribute("type") && a === e.getAttribute("accessControl") && s === e.getAttribute("transient"))
      return [];
    const o = q(e, {
      name: i,
      desc: n,
      type: r,
      accessControl: a,
      transient: s
    });
    return [{ old: { element: e }, new: { element: o } }];
  };
}
function $s(e) {
  return (t) => {
    const i = m(t.find((l) => l.label === "name")), n = m(t.find((l) => l.label === "desc")), r = m(t.find((l) => l.label === "type")), a = m(
      t.find((l) => l.label === "accessControl")
    ), s = m(t.find((l) => l.label === "transient")) !== "" ? m(t.find((l) => l.label === "transient")) : null, o = [], c = re(e.ownerDocument, "DO", {
      name: i,
      desc: n,
      type: r,
      accessControl: a,
      transient: s
    });
    return o.push({
      new: {
        parent: e,
        element: c
      }
    }), o;
  };
}
function Hi(e) {
  const t = e.doc ? e.doc : e.parent.ownerDocument, i = K(t, "DO", e.identity ?? NaN), [
    n,
    r,
    a,
    s,
    o,
    c,
    l,
    p
  ] = i ? [
    d("do.wizard.title.edit"),
    Ls(i),
    i.getAttribute("type"),
    [
      {
        icon: "delete",
        label: d("remove"),
        action: Fi(i)
      }
    ],
    i.getAttribute("name"),
    i.getAttribute("desc"),
    i.getAttribute("accessControl"),
    i.getAttribute("transient")
  ] : [
    d("do.wizard.title.add"),
    $s(e.parent),
    null,
    void 0,
    "",
    null,
    null,
    null
  ], f = Array.from(t.querySelectorAll("DOType")).filter(ne).filter((h) => h.getAttribute("id"));
  return [
    {
      title: n,
      element: i ?? void 0,
      primary: { icon: "", label: d("save"), action: r },
      menuActions: s,
      content: [
        u`<wizard-textfield
          label="name"
          .maybeValue=${o}
          helper="${d("scl.name")}"
          required
          pattern="${de.alphanumericFirstUpperCase}"
          dialogInitialFocus
        >
          ></wizard-textfield
        >`,
        u`<wizard-textfield
          label="desc"
          helper="${d("scl.desc")}"
          .maybeValue=${c}
          nullable
          pattern="${de.normalizedString}"
        ></wizard-textfield>`,
        u`<mwc-select
          fixedMenuPosition
          label="type"
          required
          helper="${d("scl.type")}"
          >${f.map(
          (h) => u`<mwc-list-item
                value=${h.id}
                ?selected=${h.id === a}
                >${h.id}</mwc-list-item
              >`
        )}</mwc-select
        >`,
        u`<wizard-textfield
          label="accessControl"
          helper="${d("scl.accessControl")}"
          .maybeValue=${l}
          nullable
          pattern="${de.normalizedString}"
        ></wizard-textfield>`,
        u`<wizard-checkbox
          label="transient"
          .maybeValue="${p}"
          helper="${d("scl.transient")}"
          nullable
        ></wizard-checkbox>`
      ]
    }
  ];
}
function zs(e) {
  return (t) => {
    const i = m(t.find((c) => c.label === "id")), n = m(t.find((c) => c.label === "desc")), r = m(t.find((c) => c.label === "lnClass"));
    if (i === e.getAttribute("id") && n === e.getAttribute("desc") && r == e.getAttribute("lnClass"))
      return [];
    const a = q(e, { id: i, desc: n, lnClass: r }), s = [];
    s.push({ old: { element: e }, new: { element: a } });
    const o = e.getAttribute("id");
    return Array.from(
      e.ownerDocument.querySelectorAll(
        `LN0[lnType="${o}"], LN[lnType="${o}"]`
      )
    ).forEach((c) => {
      const l = c.cloneNode(!1);
      l.setAttribute("lnType", i), s.push({ old: { element: c }, new: { element: l } });
    }), [
      { title: d("lnodetype.action.edit", { oldId: o, newId: i }), actions: s }
    ];
  };
}
function Rs(e, t) {
  const i = K(t, "LNodeType", e);
  if (i)
    return [
      {
        title: d("lnodetype.wizard.title.edit"),
        element: i,
        primary: {
          icon: "",
          label: d("save"),
          action: zs(i)
        },
        menuActions: [
          {
            label: d("remove"),
            icon: "delete",
            action: Fi(i)
          },
          {
            label: d("scl.DO"),
            icon: "playlist_add",
            action: _s(i)
          }
        ],
        content: [
          u`<wizard-textfield
          label="id"
          helper="${d("scl.id")}"
          .maybeValue=${i.getAttribute("id")}
          required
          maxlength="127"
          minlength="1"
          pattern="${de.nmToken}"
          dialogInitialFocus
        ></wizard-textfield>`,
          u`<wizard-textfield
          label="desc"
          helper="${d("scl.desc")}"
          .maybeValue=${i.getAttribute("desc")}
          nullable
          pattern="${de.normalizedString}"
        ></wizard-textfield>`,
          u`<wizard-textfield
          label="lnClass"
          helper="${d("scl.lnClass")}"
          .maybeValue=${i.getAttribute("lnClass")}
          required
          pattern="${de.lnClass}"
        ></wizard-textfield>`,
          u`
          <mwc-list
            style="margin-top: 0px;"
            @selected=${(n) => {
            const r = Hi({
              identity: n.target.selected.value,
              doc: t
            });
            r && n.target.dispatchEvent(L(r));
          }}
          >
            ${Array.from(i.querySelectorAll("DO")).map(
            (n) => u`<mwc-list-item
                  twoline
                  tabindex="0"
                  value="${I(n)}"
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
function Ps(e, t, i) {
  if (!e.target || !e.target.parentElement) return;
  const n = e.target.selected?.value;
  if (e.target.parentElement.querySelector(
    'wizard-select[label="bType"]'
  ).value !== "Enum") return;
  const a = Array.from(
    t.querySelectorAll(`EnumType[id="${n}"] > EnumVal`)
  ).map(
    (o) => T`<mwc-list-item
        value="${o.textContent?.trim() ?? ""}"
        ?selected=${o.textContent?.trim() === i}
        >${o.textContent?.trim()}</mwc-list-item
      >`
  ), s = e.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  pn(T`${a}`, s), s.requestUpdate();
}
function Os(e, t, i) {
  const n = e.target.selected.value, r = e.target.parentElement.querySelector(
    'wizard-select[label="type"]'
  );
  r.disabled = !(n === "Enum" || n === "Struct");
  const a = [];
  Array.from(r.children).forEach((c) => {
    const l = c;
    l.disabled = !c.classList.contains(n), l.noninteractive = !c.classList.contains(n), l.style.display = c.classList.contains(n) ? "" : "none", l.disabled || a.push(l);
  }), i && t === n ? r.value = i : r.value = a.length ? a[0].value : "";
  const s = e.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  n === "Enum" ? s.style.display = "" : s.style.display = "none";
  const o = e.target.parentElement.querySelector(
    'wizard-textfield[label="Val"]'
  );
  n === "Enum" || n === "Struct" ? o.style.display = "none" : o.style.display = "", s.requestUpdate(), o.requestUpdate(), r.requestUpdate();
}
function lt(e, t, i, n, r, a, s, o, c, l) {
  return [
    T`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${d("scl.name")}"
      required
      pattern="${ue.abstractDataAttributeName}"
      maxLength="${ct.abstracDaName}"
      dialogInitialFocus
    >
      ></wizard-textfield
    >`,
    T`<wizard-textfield
      label="desc"
      helper="${d("scl.desc")}"
      .maybeValue=${t}
      nullable
      pattern="${ue.normalizedString}"
    ></wizard-textfield>`,
    T`<wizard-select
      fixedMenuPosition
      label="bType"
      .value=${i}
      helper="${d("scl.bType")}"
      required
      @selected=${(p) => Os(p, i, r)}
      >${Fa.map(
      (p) => T`<mwc-list-item value="${p}"
            >${p}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    T`<wizard-select
      label="type"
      .maybeValue=${r}
      helper="${d("scl.type")}"
      fixedMenuPosition
      @selected=${(p) => Ps(p, l, c)}
      >${n.map(
      (p) => T`<mwc-list-item
            class="${p.tagName === "EnumType" ? "Enum" : "Struct"}"
            value=${p.id}
            >${p.id}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    T`<wizard-textfield
      label="sAddr"
      .maybeValue=${a}
      helper="${d("scl.sAddr")}"
      nullable
      pattern="${ue.normalizedString}"
    ></wizard-textfield>`,
    T`<wizard-select
      label="valKind"
      .maybeValue=${s}
      helper="${d("scl.valKind")}"
      nullable
      required
      fixedMenuPosition
      >${Ha.map(
      (p) => T`<mwc-list-item value="${p}"
            >${p}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    T`<wizard-checkbox
      label="valImport"
      .maybeValue=${o}
      helper="${d("scl.valImport")}"
      nullable
      required
    ></wizard-checkbox>`,
    T`<wizard-select
      label="Val"
      .maybeValue=${c}
      helper="${d("scl.Val")}"
      nullable
      >${Array.from(
      l.querySelectorAll(`EnumType > EnumVal[id="${r}"]`)
    ).map(
      (p) => T`<mwc-list-item value="${p.textContent?.trim() ?? ""}"
            >${p.textContent?.trim()}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    T`<wizard-textfield
      label="Val"
      .maybeValue=${c}
      helper="${d("scl.Val")}"
      nullable
    ></wizard-textfield>`
  ];
}
function qi(e, t, i) {
  if (e === null) {
    const r = re(i.ownerDocument, "Val", {});
    return r.textContent = t, {
      new: {
        parent: i,
        element: r,
        reference: i.firstElementChild
      }
    };
  }
  if (t === null)
    return {
      old: {
        parent: i,
        element: e,
        reference: e.nextSibling
      }
    };
  const n = e.cloneNode(!1);
  return n.textContent = t, {
    old: { element: e },
    new: { element: n }
  };
}
function Vs(e) {
  return (t) => {
    t.dispatchEvent(
      he({ old: { parent: e.parentElement, element: e } })
    ), t.dispatchEvent(ve());
  };
}
function Ms(e) {
  return (t) => {
    const i = m(t.find((S) => S.label === "name")), n = m(t.find((S) => S.label === "desc")), r = m(t.find((S) => S.label === "bType")), a = r === "Enum" || r === "Struct" ? m(t.find((S) => S.label === "type")) : null, s = m(t.find((S) => S.label === "sAddr")), o = m(t.find((S) => S.label === "valKind")), c = m(t.find((S) => S.label === "valImport")), l = t.find(
      (S) => S.label === "Val" && S.style.display !== "none"
    ), p = l ? m(l) : null;
    let f, h;
    if (i === e.getAttribute("name") && n === e.getAttribute("desc") && r === e.getAttribute("bType") && a === e.getAttribute("type") && s === e.getAttribute("sAddr") && o === e.getAttribute("valKind") && c === e.getAttribute("valImprot"))
      f = null;
    else {
      const S = q(e, {
        name: i,
        desc: n,
        bType: r,
        type: a,
        sAddr: s,
        valKind: o,
        valImport: c
      });
      f = { old: { element: e }, new: { element: S } };
    }
    p === (e.querySelector("Val")?.textContent?.trim() ?? null) ? h = null : h = qi(
      e.querySelector("Val"),
      p,
      f?.new.element ?? e
    );
    const x = [];
    return f && x.push(f), h && x.push(h), x;
  };
}
function Fs(e) {
  const t = e.ownerDocument, i = e.getAttribute("type"), n = e.getAttribute("name"), r = e.getAttribute("desc"), a = e.getAttribute("bType") ?? "", s = e.getAttribute("sAddr"), o = e.querySelector("Val")?.innerHTML.trim() ?? null, c = e.getAttribute("valKind"), l = e.getAttribute("valImport"), p = Array.from(t.querySelectorAll("DAType, EnumType")).filter(ne).filter((h) => h.getAttribute("id")), f = e.closest("DataTypeTemplates");
  return [
    {
      title: d("bda.wizard.title.edit"),
      element: e,
      primary: {
        icon: "",
        label: d("save"),
        action: Ms(e)
      },
      menuActions: [
        {
          icon: "delete",
          label: d("remove"),
          action: Vs(e)
        }
      ],
      content: [
        ...lt(
          n,
          r,
          a,
          p,
          i,
          s,
          c,
          l,
          o,
          f
        )
      ]
    }
  ];
}
function Hs(e) {
  return (t) => {
    const i = m(t.find((h) => h.label === "name")), n = m(t.find((h) => h.label === "desc")), r = m(t.find((h) => h.label === "bType")), a = r === "Enum" || r === "Struct" ? m(t.find((h) => h.label === "type")) : null, s = m(t.find((h) => h.label === "sAddr")), o = m(t.find((h) => h.label === "valKind")) !== "" ? m(t.find((h) => h.label === "valKind")) : null, c = m(t.find((h) => h.label === "valImport")) !== "" ? m(t.find((h) => h.label === "valImport")) : null, l = t.find(
      (h) => h.label === "Val" && h.style.display !== "none"
    ), p = l ? m(l) : null, f = re(e.ownerDocument, "BDA", {
      name: i,
      desc: n,
      bType: r,
      type: a,
      sAddr: s,
      valKind: o,
      valImport: c
    });
    if (p !== null) {
      const h = re(e.ownerDocument, "Val", {});
      h.textContent = p, f.appendChild(h);
    }
    return [
      {
        new: {
          parent: e,
          element: f
        }
      }
    ];
  };
}
function qs(e) {
  const t = e.ownerDocument, i = "", n = null, r = "", a = null, s = null, o = null, c = null, l = null, p = Array.from(t.querySelectorAll("DAType, EnumType")).filter(ne).filter((h) => h.getAttribute("id")), f = e.closest("DataTypeTemplates");
  return [
    {
      title: d("bda.wizard.title.edit"),
      primary: {
        icon: "",
        label: d("save"),
        action: Hs(e)
      },
      content: [
        ...lt(
          i,
          n,
          r,
          p,
          a,
          s,
          c,
          l,
          o,
          f
        )
      ]
    }
  ];
}
function Bs(e) {
  return (t) => {
    t.dispatchEvent(
      he({ old: { parent: e.parentElement, element: e } })
    ), t.dispatchEvent(ve());
  };
}
function Gs(e) {
  return (t) => {
    t.dispatchEvent(L(() => qs(e)));
  };
}
function Us(e) {
  return (t) => {
    const i = m(t.find((o) => o.label === "id")), n = m(t.find((o) => o.label === "desc"));
    if (i === e.getAttribute("id") && n === e.getAttribute("desc"))
      return [];
    const r = q(e, { id: i, desc: n }), a = [];
    a.push({ old: { element: e }, new: { element: r } });
    const s = e.getAttribute("id");
    return Array.from(
      e.ownerDocument.querySelectorAll(
        `DOType > DA[type="${s}"], DAType > BDA[type="${s}"]`
      )
    ).forEach((o) => {
      const c = o.cloneNode(!1);
      c.setAttribute("type", i), a.push({ old: { element: o }, new: { element: c } });
    }), [
      { title: d("datype.action.edit", { oldId: s, newId: i }), actions: a }
    ];
  };
}
function js(e, t) {
  const i = K(t, "DAType", e);
  if (!i) return;
  const n = i.getAttribute("id"), r = i.getAttribute("desc");
  return [
    {
      title: d("datype.wizard.title.edit"),
      element: i ?? void 0,
      primary: {
        icon: "",
        label: d("save"),
        action: Us(i)
      },
      menuActions: [
        {
          label: d("remove"),
          icon: "delete",
          action: Bs(i)
        },
        {
          label: d("scl.DA"),
          icon: "playlist_add",
          action: Gs(i)
        }
      ],
      content: [
        u`<wizard-textfield
          label="id"
          helper="${d("scl.id")}"
          .maybeValue=${n}
          required
          maxlength="127"
          minlength="1"
          pattern="${de.nmToken}"
          dialogInitialFocus
        ></wizard-textfield>`,
        u`<wizard-textfield
          label="desc"
          helper="${d("scl.desc")}"
          .maybeValue=${r}
          nullable
          pattern="${de.normalizedString}"
        ></wizard-textfield>`,
        u`<mwc-list
          style="margin-top: 0px;"
          @selected=${(a) => {
          const s = a.target.selected.value, o = K(t, "BDA", s);
          o && a.target.dispatchEvent(L(Fs(o)));
        }}
        >
          ${Array.from(i.querySelectorAll("BDA")).map(
          (a) => u`<mwc-list-item twoline tabindex="0" value="${I(a)}"
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
function Ws(e) {
  return (t) => {
    t.dispatchEvent(
      he({ old: { parent: e.parentElement, element: e } })
    ), t.dispatchEvent(ve());
  };
}
function Bi(e, t, i, n) {
  return [
    T`<wizard-select
      label="fc"
      .maybeValue=${e}
      helper="${d("scl.fc")}"
      required
      fixedMenuPosition
      >${Ma.map(
      (r) => T`<mwc-list-item value="${r}">${r}</mwc-list-item>`
    )}</wizard-select
    >`,
    T`<wizard-checkbox
      label="dchg"
      .maybeValue=${t}
      helper="${d("scl.dchg")}"
      nullable
    ></wizard-checkbox>`,
    T`<wizard-checkbox
      label="qchg"
      .maybeValue=${i}
      helper="${d("scl.qchg")}"
      nullable
    ></wizard-checkbox>`,
    T`<wizard-checkbox
      label="dupd"
      .maybeValue=${n}
      helper="${d("scl.dupd")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function Ks(e) {
  return (t) => {
    const i = m(t.find((w) => w.label === "name")), n = m(t.find((w) => w.label === "desc")), r = m(t.find((w) => w.label === "bType")), a = r === "Enum" || r === "Struct" ? m(t.find((w) => w.label === "type")) : null, s = m(t.find((w) => w.label === "sAddr")), o = m(t.find((w) => w.label === "valKind")), c = m(t.find((w) => w.label === "valImport")), l = t.find(
      (w) => w.label === "Val" && w.style.display !== "none"
    ), p = l ? m(l) : null, f = m(t.find((w) => w.label === "fc")) ?? "", h = m(t.find((w) => w.label === "dchg")), x = m(t.find((w) => w.label === "qchg")), S = m(t.find((w) => w.label === "dupd"));
    let k, C;
    if (i === e.getAttribute("name") && n === e.getAttribute("desc") && r === e.getAttribute("bType") && a === e.getAttribute("type") && s === e.getAttribute("sAddr") && o === e.getAttribute("valKind") && c === e.getAttribute("valImprot") && f === e.getAttribute("fc") && h === e.getAttribute("dchg") && x === e.getAttribute("qchg") && S === e.getAttribute("dupd"))
      k = null;
    else {
      const w = q(e, {
        name: i,
        desc: n,
        bType: r,
        type: a,
        sAddr: s,
        valKind: o,
        valImport: c,
        fc: f,
        dchg: h,
        qchg: x,
        dupd: S
      });
      k = { old: { element: e }, new: { element: w } };
    }
    p === (e.querySelector("Val")?.textContent?.trim() ?? null) ? C = null : C = qi(
      e.querySelector("Val"),
      p,
      k?.new.element ?? e
    );
    const A = [];
    return k && A.push(k), C && A.push(C), A;
  };
}
function Zs(e) {
  const t = e.ownerDocument, i = e.getAttribute("name"), n = e.getAttribute("desc"), r = e.getAttribute("bType") ?? "", a = e.getAttribute("type"), s = e.getAttribute("sAddr"), o = e.querySelector("Val")?.innerHTML.trim() ?? null, c = e.getAttribute("valKind"), l = e.getAttribute("valImport"), p = e.getAttribute("fc") ?? "", f = e.getAttribute("dchg"), h = e.getAttribute("qchg"), x = e.getAttribute("dupd"), S = Array.from(t.querySelectorAll("DAType, EnumType")).filter(ne).filter((C) => C.getAttribute("id")), k = e.closest("DataTypeTemplates");
  return [
    {
      title: d("da.wizard.title.edit"),
      element: e ?? void 0,
      primary: {
        icon: "",
        label: d("save"),
        action: Ks(e)
      },
      menuActions: [
        {
          icon: "delete",
          label: d("remove"),
          action: Ws(e)
        }
      ],
      content: [
        ...lt(
          i,
          n,
          r,
          S,
          a,
          s,
          c,
          l,
          o,
          k
        ),
        ...Bi(p, f, h, x)
      ]
    }
  ];
}
function Xs(e) {
  return (t) => {
    const i = m(t.find((A) => A.label === "name")), n = m(t.find((A) => A.label === "desc")), r = m(t.find((A) => A.label === "bType")), a = r === "Enum" || r === "Struct" ? m(t.find((A) => A.label === "type")) : null, s = m(t.find((A) => A.label === "sAddr")), o = m(t.find((A) => A.label === "valKind")), c = m(t.find((A) => A.label === "valImport")), l = t.find(
      (A) => A.label === "Val" && A.style.display !== "none"
    ), p = l ? m(l) : null, f = m(t.find((A) => A.label === "fc")) ?? "", h = m(t.find((A) => A.label === "dchg")), x = m(t.find((A) => A.label === "qchg")), S = m(t.find((A) => A.label === "dupd")), k = [], C = re(e.ownerDocument, "DA", {
      name: i,
      desc: n,
      bType: r,
      type: a,
      sAddr: s,
      valKind: o,
      valImport: c,
      fc: f,
      dchg: h,
      qchg: x,
      dupd: S
    });
    if (p !== null) {
      const A = re(e.ownerDocument, "Val", {});
      A.textContent = p, C.appendChild(A);
    }
    return k.push({
      new: {
        parent: e,
        element: C
      }
    }), k;
  };
}
function Qs(e) {
  const t = e.ownerDocument, i = "", n = null, r = "", a = null, s = null, o = null, c = null, l = null, p = "", f = null, h = null, x = null, S = Array.from(t.querySelectorAll("DAType, EnumType")).filter(ne).filter((C) => C.getAttribute("id")), k = e.closest("DataTypeTemplates");
  return [
    {
      title: d("da.wizard.title.edit"),
      primary: {
        icon: "",
        label: d("save"),
        action: Xs(e)
      },
      content: [
        ...lt(
          i,
          n,
          r,
          S,
          a,
          s,
          c,
          l,
          o,
          k
        ),
        ...Bi(p, f, h, x)
      ]
    }
  ];
}
function Gi(e) {
  return (t) => {
    t.dispatchEvent(
      he({ old: { parent: e.parentElement, element: e } })
    ), t.dispatchEvent(ve());
  };
}
function Ys(e) {
  return (t) => {
    const i = m(t.find((o) => o.label === "name")), n = m(t.find((o) => o.label === "desc")), r = m(t.find((o) => o.label === "type")), a = [];
    if (i === e.getAttribute("name") && n === e.getAttribute("desc") && r === e.getAttribute("type"))
      return [];
    const s = q(e, { name: i, desc: n, type: r });
    return a.push({ old: { element: e }, new: { element: s } }), a;
  };
}
function Js(e) {
  return (t) => {
    const i = m(t.find((o) => o.label === "name")), n = m(t.find((o) => o.label === "desc")), r = m(t.find((o) => o.label === "type")), a = [], s = re(e.ownerDocument, "SDO", {
      name: i,
      desc: n,
      type: r
    });
    return a.push({
      new: {
        parent: e,
        element: s
      }
    }), a;
  };
}
function Ui(e) {
  const t = e.doc ? e.doc : e.parent.ownerDocument, i = K(t, "SDO", e.identity ?? NaN), [n, r, a, s, o, c] = i ? [
    d("sdo.wizard.title.edit"),
    Ys(i),
    i.getAttribute("type"),
    [{ icon: "delete", label: d("remove"), action: Gi(i) }],
    i.getAttribute("name"),
    i.getAttribute("desc")
  ] : [
    d("sdo.wizard.title.add"),
    Js(e.parent),
    null,
    void 0,
    "",
    null
  ], l = Array.from(t.querySelectorAll("DOType")).filter(ne).filter((p) => p.getAttribute("id"));
  return [
    {
      title: n,
      element: i ?? void 0,
      primary: { icon: "", label: d("save"), action: r },
      menuActions: s,
      content: [
        T`<wizard-textfield
          label="name"
          .maybeValue=${o}
          helper="${d("scl.name")}"
          required
          pattern="${ue.tRestrName1stL}"
          dialogInitialFocus
        >
          ></wizard-textfield
        >`,
        T`<wizard-textfield
          label="desc"
          helper="${d("scl.desc")}"
          .maybeValue=${c}
          nullable
          pattern="${ue.normalizedString}"
        ></wizard-textfield>`,
        T`<mwc-select
          fixedMenuPosition
          label="type"
          required
          helper="${d("scl.type")}"
          >${l.map(
          (p) => T`<mwc-list-item
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
function eo(e) {
  return (t) => {
    t.dispatchEvent(L(() => Ui({ parent: e })));
  };
}
function to(e) {
  return (t) => {
    t.dispatchEvent(L(() => Qs(e)));
  };
}
function io(e) {
  return (t) => {
    const i = m(t.find((c) => c.label === "id")), n = m(t.find((c) => c.label === "desc")), r = m(t.find((c) => c.label === "CDC"));
    if (i === e.getAttribute("id") && n === e.getAttribute("desc") && r == e.getAttribute("cdc"))
      return [];
    const a = q(e, { id: i, desc: n, cdc: r }), s = [];
    s.push({ old: { element: e }, new: { element: a } });
    const o = e.getAttribute("id");
    return Array.from(
      e.ownerDocument.querySelectorAll(
        `LNodeType > DO[type="${o}"], DOType > SDO[type="${o}"]`
      )
    ).forEach((c) => {
      const l = c.cloneNode(!1);
      l.setAttribute("type", i), s.push({ old: { element: c }, new: { element: l } });
    }), [
      { title: d("dotype.action.edit", { oldId: o, newId: i }), actions: s }
    ];
  };
}
function no(e, t) {
  const i = K(t, "DOType", e);
  if (i)
    return [
      {
        title: d("dotype.wizard.title.edit"),
        element: i,
        primary: {
          icon: "",
          label: d("save"),
          action: io(i)
        },
        menuActions: [
          {
            label: d("remove"),
            icon: "delete",
            action: Gi(i)
          },
          {
            label: d("scl.DO"),
            icon: "playlist_add",
            action: eo(i)
          },
          {
            label: d("scl.DA"),
            icon: "playlist_add",
            action: to(i)
          }
        ],
        content: [
          T`<wizard-textfield
          label="id"
          helper="${d("scl.id")}"
          .maybeValue=${i.getAttribute("id")}
          required
          maxlength="127"
          minlength="1"
          pattern="${ue.nmToken}"
          dialogInitialFocus
        ></wizard-textfield>`,
          T`<wizard-textfield
          label="desc"
          helper="${d("scl.desc")}"
          .maybeValue=${i.getAttribute("desc")}
          nullable
          pattern="${ue.normalizedString}"
        ></wizard-textfield>`,
          T`<wizard-textfield
          label="CDC"
          helper="${d("scl.CDC")}"
          .maybeValue=${i.getAttribute("cdc")}
          pattern="${ue.normalizedString}"
        ></wizard-textfield>`,
          T`
          <mwc-list
            style="margin-top: 0px;"
            @selected=${(n) => {
            const r = n.target.selected, a = n.target.selected.value, s = K(t, "DA", a), o = r.classList.contains("DA") ? s ? Zs(s) : void 0 : Ui({
              identity: r.value,
              doc: t
            });
            o && n.target.dispatchEvent(L(o));
          }}
          >
            ${Array.from(i.querySelectorAll("SDO, DA")).map(
            (n) => T`<mwc-list-item
                  twoline
                  tabindex="0"
                  class="${n.tagName === "DA" ? "DA" : "SDO"}"
                  value="${I(n)}"
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
function ji(e) {
  return (t) => {
    t.dispatchEvent(
      he({ old: { parent: e.parentElement, element: e } })
    ), t.dispatchEvent(ve());
  };
}
function Ot(e) {
  const t = Math.max(
    ...Array.from(e.children).map(
      (i) => parseInt(i.getAttribute("ord") ?? "-2", 10)
    )
  );
  return isFinite(t) ? (t + 1).toString(10) : "0";
}
function ro(e) {
  return (t) => {
    const i = m(t.find((o) => o.label === "value")), n = m(t.find((o) => o.label === "desc")), r = m(t.find((o) => o.label === "ord")) || Ot(e), a = re(e.ownerDocument, "EnumVal", {
      ord: r,
      desc: n
    });
    return a.textContent = i, [{
      new: {
        parent: e,
        element: a
      }
    }];
  };
}
function ao(e) {
  return (t) => {
    const i = m(t.find((s) => s.label === "value")) ?? "", n = m(t.find((s) => s.label === "desc")), r = m(t.find((s) => s.label === "ord")) || e.getAttribute("ord") || Ot(e.parentElement);
    if (i === e.textContent && n === e.getAttribute("desc") && r === e.getAttribute("ord"))
      return [];
    const a = q(e, { desc: n, ord: r });
    return a.textContent = i, [{ old: { element: e }, new: { element: a } }];
  };
}
function Wi(e) {
  const t = e.doc ? e.doc : e.parent.ownerDocument, i = K(
    t,
    "EnumVal",
    e.identity ?? NaN
  ), [n, r, a, s, o, c] = i ? [
    d("enum-val.wizard.title.edit"),
    ao(i),
    i.getAttribute("ord"),
    i.getAttribute("desc"),
    i.textContent,
    [
      {
        icon: "delete",
        label: d("remove"),
        action: ji(i)
      }
    ]
  ] : [
    d("enum-val.wizard.title.add"),
    ro(e.parent),
    Ot(e.parent),
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
        u`<wizard-textfield
          label="ord"
          helper="${d("scl.ord")}"
          .maybeValue=${a}
          required
          type="number"
        ></wizard-textfield>`,
        u`<wizard-textfield
          label="value"
          helper="${d("scl.value")}"
          .maybeValue=${o}
          pattern="${de.normalizedString}"
          dialogInitialFocus
        ></wizard-textfield>`,
        u`<wizard-textfield
          id="evDesc"
          label="desc"
          helper="${d("scl.desc")}"
          .maybeValue=${s}
          nullable
          pattern="${de.normalizedString}"
        ></wizard-textfield>`
      ]
    }
  ];
}
function so(e) {
  return (t) => {
    t.dispatchEvent(L(() => Wi({ parent: e })));
  };
}
function oo(e) {
  return (t) => {
    const i = m(t.find((o) => o.label === "id")), n = m(t.find((o) => o.label === "desc"));
    if (i === e.getAttribute("id") && n === e.getAttribute("desc"))
      return [];
    const r = q(e, { id: i, desc: n }), a = [];
    a.push({ old: { element: e }, new: { element: r } });
    const s = e.getAttribute("id");
    return Array.from(
      e.ownerDocument.querySelectorAll(
        `DOType > DA[type="${s}"], DAType > BDA[type="${s}"]`
      )
    ).forEach((o) => {
      const c = o.cloneNode(!1);
      c.setAttribute("type", i), a.push({ old: { element: o }, new: { element: c } });
    }), [{ title: d("enum.action.edit", { oldId: s, newId: i }), actions: a }];
  };
}
function co(e, t) {
  const i = K(t, "EnumType", e);
  if (i)
    return [
      {
        title: d("enum.wizard.title.edit"),
        element: i,
        primary: {
          icon: "",
          label: d("save"),
          action: oo(i)
        },
        menuActions: [
          {
            label: d("remove"),
            icon: "delete",
            action: ji(i)
          },
          {
            label: d("scl.EnumVal"),
            icon: "playlist_add",
            action: so(i)
          }
        ],
        content: [
          u`<wizard-textfield
          label="id"
          helper="${d("scl.id")}"
          .maybeValue=${i.getAttribute("id")}
          required
          maxlength="127"
          minlength="1"
          pattern="${de.nmToken}"
          dialogInitialFocus
        ></wizard-textfield>`,
          u`<wizard-textfield
          label="desc"
          helper="${d("scl.desc")}"
          .maybeValue=${i.getAttribute("desc")}
          nullable
          pattern="${de.normalizedString}"
        ></wizard-textfield>`,
          u`<mwc-list
          style="margin-top: 0px;"
          @selected=${(n) => {
            const r = Wi({
              identity: n.target.selected.value,
              doc: t
            });
            r && n.target.dispatchEvent(L(r));
          }}
          >${Array.from(i.querySelectorAll("EnumVal")).map(
            (n) => u`<mwc-list-item
                graphic="icon"
                hasMeta
                tabindex="0"
                value="${I(n)}"
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
var lo = Object.defineProperty, uo = Object.getOwnPropertyDescriptor, ce = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? uo(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (r = (n ? s(t, i, r) : s(r)) || r);
  return n && r && lo(t, i, r), r;
};
const li = {
  EnumType: "enumIcon",
  DAType: "dAIcon",
  DOType: "dOIcon",
  LNodeType: "lNIcon"
}, di = {
  EnumType: "enum-type",
  DAType: "da-type",
  DOType: "do-type",
  LNodeType: "lnode-type"
};
let Q = class extends De {
  constructor() {
    super(...arguments), this.disableControlClean = !1, this.unreferencedDataTypes = [], this.selectedDataTypeItems = [];
  }
  /**
   * Initial update after container is loaded.
   */
  async firstUpdated() {
    this.cleanupList?.addEventListener("selected", () => {
      this.selectedDataTypeItems = this.cleanupList.index;
    });
  }
  /**
   * Toggle the class hidden in the unused data type list for use by filter buttons to ensure selection works correctly.
   * @param selectorType - class for selection to toggle the hidden class used by the list.
   */
  toggleHiddenClass(e) {
    this.cleanupList.querySelectorAll(`.${e}`).forEach((t) => {
      t.classList.toggle("hiddenontypefilter"), t.hasAttribute("disabled") ? t.removeAttribute("disabled") : t.setAttribute("disabled", "true");
    });
  }
  /**
   * Create a button for filtering in the data type cleanup container.
   * @param dataType - SCL Data Type e.g. DOType.
   * @param initialState - boolean representing whether button is on or off.
   * @returns html for the icon button.
   */
  renderFilterIconButton(e, t = !0) {
    return u`<mwc-icon-button-toggle
      slot="graphic"
      label="filter"
      ?on=${t}
      class="t-${di[e]}-filter filter"
      @click=${() => {
      this.toggleHiddenClass(`t-${di[e]}`);
    }}
      >${tt(li[e], !0)}
      ${tt(li[e], !1)}
    </mwc-icon-button-toggle>`;
  }
  /**
   * Opens an editor for a given data type.
   * @param dType - SCL datatype element.
   */
  openDataTypeEditor(e) {
    e.tagName === "LNodeType" ? this.dispatchEvent(
      L(Rs(I(e), this.doc))
    ) : e.tagName === "DAType" ? this.dispatchEvent(
      L(js(I(e), this.doc))
    ) : e.tagName === "DOType" ? this.dispatchEvent(
      L(no(I(e), this.doc))
    ) : e.tagName === "EnumType" && this.dispatchEvent(
      L(co(I(e), this.doc))
    );
  }
  /**
   * Return secondary descriptive parameter for a data type.
   * @param dType - SCL datatype element.
   * @returns string with secondary descriptive parameter for a data type
   */
  getDataTypeSecondaryText(e) {
    return e.tagName === "LNodeType" ? e.getAttribute("lnClass") : e.tagName === "DAType" ? e.getAttribute("desc") : e.tagName === "DOType" ? e.getAttribute("cdc") : e.tagName === "EnumType" ? e.getAttribute("desc") : "Unknown";
  }
  /**
   * Provide list item in the data type cleanup container.
   * @param dType - an unused SCL DataType element (LNodeType, DOType, DAType EnumType).
   * @returns html for checklist item.
   */
  renderListItem(e) {
    return u`<mwc-check-list-item
      twoline
      class="${Oe({
      "cleanup-list-item": !0,
      "t-lnode-type": e.tagName === "LNodeType",
      "t-do-type": e.tagName === "DOType",
      "t-da-type": e.tagName === "DAType",
      "t-enum-type": e.tagName === "EnumType"
    })}"
      value="${I(e)}"
      graphic="large"
      ><span class="unreferenced-control">${e.getAttribute("id")} </span>
      <span>
        <mwc-icon-button
          label="Edit"
          icon="edit"
          class="edit-item"
          @click="${() => this.openDataTypeEditor(e)}"
        ></mwc-icon-button>
      </span>
      <span slot="secondary">${this.getDataTypeSecondaryText(e)} </span>
      <mwc-icon slot="graphic"
        >${Na[e.tagName]}</mwc-icon
      >
    </mwc-check-list-item>`;
  }
  /**
   * Recurses through all datatype templates and indexes their usage.
   * @returns a map of data type templates usage by id.
   */
  indexDataTypeTemplates(e) {
    const t = /* @__PURE__ */ new Map();
    return this.fetchTree(e).forEach((n) => {
      t.set(
        n,
        (t.get(n) || 0) + 1
      );
    }), t;
  }
  /**
   * Given a datatype reference return the appropriate datatype object or null.
   * @param element - the SCL Element for which a datatype is required.
   * @returns either the datatype or null.
   */
  getSubType(e) {
    const t = this.doc.querySelector(
      ":root > DataTypeTemplates"
    ), i = e.getAttribute("type");
    return e.tagName === "DO" || e.tagName === "SDO" ? t.querySelector(`DOType[id="${i}"]`) : (e.tagName === "DA" || e.tagName === "BDA") && e.getAttribute("bType") === "Struct" ? t.querySelector(`DAType[id="${i}"]`) : (e.tagName === "DA" || e.tagName === "BDA") && e.getAttribute("bType") === "Enum" ? t.querySelector(`EnumType[id="${i}"]`) : null;
  }
  /**
   * Recurses from an initial element to find all child references (with duplicates).
   * @param rootElement - root SCL Element for which all child datatype references are required.
   * @returns the id value for all SCL element datatypes traversed.
   */
  fetchTree(e) {
    const t = [...e], i = [], n = 3e5;
    for (; t.length > 0 && t.length <= n; ) {
      const r = t.pop();
      i.push(r.getAttribute("id")), Array.from(r.querySelectorAll("DO, SDO, DA, BDA")).filter(ne).forEach((s) => {
        const o = this.getSubType(s);
        o !== null && t.unshift(o);
      }), t.length >= n && this.dispatchEvent(
        Ts({
          kind: "error",
          title: d("cleanup.unreferencedDataTypes.title"),
          message: d("cleanup.unreferencedDataTypes.stackExceeded", {
            maxStackDepth: n.toString()
          })
        })
      );
    }
    return i;
  }
  /**
   * Get items from selection list and and any subtypes.
   * @returns An array of SCL elements representing selected items and subtypes as required.
   */
  getCleanItems() {
    const e = Array.from(
      this.selectedDataTypeItems.values()
    ).map((t) => this.unreferencedDataTypes[t]);
    if (this.cleanSubTypesCheckbox.checked === !0) {
      const t = this.doc.querySelector(
        ":root > DataTypeTemplates"
      ), i = Array.from(
        t.querySelectorAll("LNodeType")
      ), n = this.indexDataTypeTemplates(i);
      e.forEach((r) => {
        r.tagName === "LNodeType" && this.fetchTree([r]).forEach((s) => {
          n?.set(s, n.get(s) - 1);
        });
      }), e.forEach((r) => {
        ["DOType", "DAType"].includes(r.tagName) && ai(
          this.fetchTree([r])
        ).forEach((s) => {
          n.get(s) === void 0 && e.push(t.querySelector(`[id="${s}"]`));
        });
      }), n?.forEach((r, a) => {
        r <= 0 && e.push(
          t.querySelector(`[id="${a}"]`)
        );
      });
    }
    return e;
  }
  /**
   * Provide delete button the data type cleanup container.
   * @returns html for the Delete Button of this container.
   */
  renderDeleteButton() {
    return u`<mwc-button
      outlined
      icon="delete"
      class="delete-button"
      label="${d("cleanup.unreferencedDataTypes.deleteButton")} (${this.selectedDataTypeItems.size || "0"})"
      ?disabled=${this.selectedDataTypeItems.size === 0 || Array.isArray(this.selectedDataTypeItems) && !this.selectedDataTypeItems.length}
      @click=${() => {
      Je(this.getCleanItems()).forEach(
        (t) => this.dispatchEvent(he(t))
      ), this.cleanupListItems.forEach((t) => {
        t.selected = !1;
      });
    }}
    ></mwc-button>`;
  }
  /**
   * Find unused types by scanning the SCL and comparing with the DataTypeTemplates.
   * @param usedSelector - CSS selector for SCL type's instantiated name, e.g. LN, LN0.
   * @param keyAttributeName - attribute name for SCL types uniqueness guarantee, e.g. lnType.
   * @param templateSelector - CSS selector for SCL template element in DataTypeTemplate section.
   * @returns an array of unreferenced elements sorted by their identity string.
   */
  getUnusedType(e, t, i) {
    const n = ai(
      Array.from(this.doc?.querySelectorAll(e) ?? []).filter(ne).map((a) => a.getAttribute(t))
    ), r = [];
    return Array.from(
      this.doc?.querySelectorAll(`DataTypeTemplates > ${i}`) ?? []
    ).filter(ne).forEach((a) => {
      n.includes(a.getAttribute("id") ?? "Unknown") || r.push(a);
    }), zt(r);
  }
  /**
   * Find unused types by scanning the SCL and comparing with the DataTypeTemplates.
   * @returns an array of unreferenced elements
   */
  getUnusedTypes() {
    const e = this.getUnusedType(
      "LN, LN0",
      "lnType",
      "LNodeType"
    ), t = this.getUnusedType("DO, SDO", "type", "DOType"), i = this.getUnusedType(
      'DA[bType="Struct"], BDA[bType="Struct"]',
      "type",
      "DAType"
    ), n = this.getUnusedType(
      'DA[bType="Enum"], BDA[bType="Enum"]',
      "type",
      "EnumType"
    );
    return e.concat(
      t,
      i,
      n
    );
  }
  /**
   * Render a user selectable table of unreferenced DataTypes if any exist.
   * @returns html for table and action button.
   */
  renderUnreferencedDataTypes() {
    return this.unreferencedDataTypes = this.getUnusedTypes(), u`
      <div>
        <h1>
          ${d("cleanup.unreferencedDataTypes.title")}
          (${this.unreferencedDataTypes.length})
          <abbr slot="action">
            <mwc-icon-button
              icon="info"
              title="${d("cleanup.unreferencedDataTypes.tooltip")}"
            >
            </mwc-icon-button>
          </abbr>
        </h1>
        ${this.renderFilterIconButton("LNodeType")}
        ${this.renderFilterIconButton("DOType")}
        ${this.renderFilterIconButton("DAType")}
        ${this.renderFilterIconButton("EnumType")}
        <filtered-list multi class="cleanup-list"
          >${Array.from(
      this.unreferencedDataTypes.map((e) => this.renderListItem(e))
    )}
        </filtered-list>
      </div>
      <footer>
        ${this.renderDeleteButton()}
        <mwc-formfield
          class="remove-from-communication"
          label="${d("cleanup.unreferencedDataTypes.alsoRemoveSubTypes")}"
        >
          <mwc-checkbox checked class="clean-sub-types-checkbox"></mwc-checkbox
        ></mwc-formfield>
      </footer>
    `;
  }
  render() {
    return u`
      <section tabindex="1">${this.renderUnreferencedDataTypes()}</section>
    `;
  }
};
Q.styles = be`
    ${st}

    section {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;
    }

    @media (max-width: 1200px) {
      footer {
        flex-direction: row;
      }

      mwc-check-list-item {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .edit-item {
      --mdc-icon-size: 16px;
      visibility: hidden;
      opacity: 0;
    }

    .cleanup-list-item:hover .edit-item {
      visibility: visible;
      opacity: 1;
      transition: visibility 0s, opacity 0.5s linear;
    }

    .edit-item[disabled] {
      display: none;
    }

    .delete-button {
      float: right;
    }

    footer {
      align-items: center;
      align-content: center;
      display: flex;
      flex-flow: row wrap;
      flex-direction: row-reverse;
      justify-content: space-between;
      margin: 16px;
    }

    filtered-list {
      min-height: 20vh;
      overflow-y: scroll;
    }

    /* filter itself changes colour after click */
    .t-da-type-filter[on],
    .t-enum-type-filter[on],
    .t-lnode-type-filter[on],
    .t-do-type-filter[on] {
      color: var(--secondary);
      opacity: 1;
    }

    /* Make sure to type filter here
    .hidden is set on string filter in filtered-list and must always filter*/
    .cleanup-list-item.hiddenontypefilter:not(.hidden) {
      display: none;
    }

    /* filter disabled, Material Design guidelines for opacity */
    .t-da-type-filter,
    .t-enum-type-filter,
    .t-lnode-type-filter,
    .t-do-type-filter {
      opacity: 0.38;
    }
  `;
ce([
  b({ attribute: !1 })
], Q.prototype, "doc", 2);
ce([
  b({ type: Boolean })
], Q.prototype, "disableControlClean", 2);
ce([
  b({ type: Array })
], Q.prototype, "unreferencedDataTypes", 2);
ce([
  b({ attribute: !1 })
], Q.prototype, "selectedDataTypeItems", 2);
ce([
  _(".delete-button")
], Q.prototype, "cleanButton", 2);
ce([
  _(".cleanup-list")
], Q.prototype, "cleanupList", 2);
ce([
  Nt("mwc-check-list-item.cleanup-list-item")
], Q.prototype, "cleanupListItems", 2);
ce([
  _(".clean-sub-types-checkbox")
], Q.prototype, "cleanSubTypesCheckbox", 2);
ce([
  _(".t-da-type-filter")
], Q.prototype, "cleanupDATypeFilter", 2);
ce([
  _(".t-enum-type-filter")
], Q.prototype, "cleanupEnumTypeFilter", 2);
ce([
  _(".t-lnode-type-filter")
], Q.prototype, "cleanupLNodeTypeFilter", 2);
ce([
  _(".t-do-type-filter")
], Q.prototype, "cleanupDOTypeFilter", 2);
Q = ce([
  pe("cleanup-data-types")
], Q);
const po = {
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
}, mo = {
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
}, ui = { en: mo, de: po };
async function ho(e) {
  return Object.keys(ui).includes(e) ? ui[e] : {};
}
$n({ loader: ho, empty: (e) => e });
const Ki = localStorage.getItem("language") || "en";
console.log("SETTING LANGUAGE TO", Ki);
On(Ki);
var fo = Object.defineProperty, Zi = (e, t, i, n) => {
  for (var r = void 0, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (r = s(t, i, r) || r);
  return r && fo(t, i, r), r;
};
class Xi extends De {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
  render() {
    return u`
      <div class="cleanup">
        <cleanup-datasets .editCount=${this.editCount} .doc=${this.doc}></cleanup-datasets>
        <cleanup-control-blocks .editCount=${this.editCount} .doc=${this.doc}></cleanup-control-blocks>
        <cleanup-data-types .editCount=${this.editCount} .doc=${this.doc}></cleanup-data-types>
      </div>
    `;
  }
  static {
    this.styles = be`
    ${st}

    :host {
      width: 100vw;
    }

    @media (max-width: 799px) {
      .cleanup {
        flex-direction: column;
      }
    }

    @media (min-width: 800px) {
      .cleanup {
        max-height: 60vh;
      }
    }

    cleanup-datasets, cleanup-control-blocks, cleanup-data-types {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;
    }

    .cleanup {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding: 20px;
    }
  }
  `;
  }
}
Zi([
  b()
], Xi.prototype, "doc");
Zi([
  b({ type: Number })
], Xi.prototype, "editCount");
export {
  Xi as default
};
