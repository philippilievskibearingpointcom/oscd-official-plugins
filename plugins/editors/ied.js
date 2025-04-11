import { LitElement as Pe, query as k, property as p, state as D, html as s, css as j, customElement as z, queryAsync as At, eventOptions as We, queryAssignedNodes as un, unsafeCSS as xr, svg as U } from "lit-element";
import { get as d, registerTranslateConfig as ja, use as Ka } from "lit-translate";
import { nothing as W, directive as Xa, html as A, render as vr } from "lit-html";
var Vi = function(t, e) {
  return Vi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, n) {
    i.__proto__ = n;
  } || function(i, n) {
    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (i[r] = n[r]);
  }, Vi(t, e);
};
function Me(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Vi(t, e);
  function i() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
}
var Z = function() {
  return Z = Object.assign || function(e) {
    for (var i, n = 1, r = arguments.length; n < r; n++) {
      i = arguments[n];
      for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
    }
    return e;
  }, Z.apply(this, arguments);
};
function c(t, e, i, n) {
  var r = arguments.length, a = r < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, i) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(t, e, i, n);
  else for (var l = t.length - 1; l >= 0; l--) (o = t[l]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
  return r > 3 && a && Object.defineProperty(e, i, a), a;
}
function Xe(t) {
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
function Za(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var i = t; i; ) {
    if (mn(i, e))
      return i;
    i = i.parentElement;
  }
  return null;
}
function mn(t, e) {
  var i = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return i.call(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const _r = (t) => t.nodeType === Node.ELEMENT_NODE;
function Ot(t) {
  return {
    addClass: (e) => {
      t.classList.add(e);
    },
    removeClass: (e) => {
      t.classList.remove(e);
    },
    hasClass: (e) => t.classList.contains(e)
  };
}
const wr = () => {
}, Ya = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", wr, Ya);
document.removeEventListener("x", wr);
const pn = (t = window.document) => {
  let e = t.activeElement;
  const i = [];
  if (!e)
    return i;
  for (; e && (i.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return i;
}, Sr = (t) => {
  const e = pn();
  if (!e.length)
    return !1;
  const i = e[e.length - 1], n = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let r = [];
  const a = (o) => {
    r = o.composedPath();
  };
  return document.body.addEventListener("check-if-focused", a), i.dispatchEvent(n), document.body.removeEventListener("check-if-focused", a), r.indexOf(t) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ct extends Pe {
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
var Oe = (
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
var Qa = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Ja = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Dn = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function eo(t, e, i) {
  if (!t)
    return { x: 0, y: 0 };
  var n = e.x, r = e.y, a = n + i.left, o = r + i.top, l, u;
  if (t.type === "touchstart") {
    var m = t;
    l = m.changedTouches[0].pageX - a, u = m.changedTouches[0].pageY - o;
  } else {
    var f = t;
    l = f.pageX - a, u = f.pageY - o;
  }
  return { x: l, y: u };
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
var Tn = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Nn = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], ai = [], to = (
  /** @class */
  function(t) {
    Me(e, t);
    function e(i) {
      var n = t.call(this, Z(Z({}, e.defaultAdapter), i)) || this;
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
        return Qa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ja;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Dn;
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
        var r = e.cssClasses, a = r.ROOT, o = r.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.addClass(a), i.adapter.isUnbounded() && (i.adapter.addClass(o), i.layoutInternal());
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
          for (var a = Xe(Tn), o = a.next(); !o.done; o = a.next()) {
            var l = o.value;
            this.adapter.registerInteractionHandler(l, this.activateHandler);
          }
        } catch (u) {
          n = { error: u };
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
    }, e.prototype.registerDeactivationHandlers = function(i) {
      var n, r;
      if (i.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var a = Xe(Nn), o = a.next(); !o.done; o = a.next()) {
            var l = o.value;
            this.adapter.registerDocumentInteractionHandler(l, this.deactivateHandler);
          }
        } catch (u) {
          n = { error: u };
        } finally {
          try {
            o && !o.done && (r = a.return) && r.call(a);
          } finally {
            if (n) throw n.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var i, n;
      try {
        for (var r = Xe(Tn), a = r.next(); !a.done; a = r.next()) {
          var o = a.value;
          this.adapter.deregisterInteractionHandler(o, this.activateHandler);
        }
      } catch (l) {
        i = { error: l };
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
        for (var r = Xe(Nn), a = r.next(); !a.done; a = r.next()) {
          var o = a.value;
          this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler);
        }
      } catch (l) {
        i = { error: l };
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
          var a = this.previousActivationEvent, o = a && i !== void 0 && a.type !== i.type;
          if (!o) {
            r.isActivated = !0, r.isProgrammatic = i === void 0, r.activationEvent = i, r.wasActivatedByPointer = r.isProgrammatic ? !1 : i !== void 0 && (i.type === "mousedown" || i.type === "touchstart" || i.type === "pointerdown");
            var l = i !== void 0 && ai.length > 0 && ai.some(function(u) {
              return n.adapter.containsEventTarget(u);
            });
            if (l) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (ai.push(i.target), this.registerDeactivationHandlers(i)), r.wasElementMadeActive = this.checkElementMadeActive(i), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              ai = [], !r.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (r.wasElementMadeActive = n.checkElementMadeActive(i), r.wasElementMadeActive && n.animateActivation()), r.wasElementMadeActive || (n.activationState = n.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var i = this, n = e.strings, r = n.VAR_FG_TRANSLATE_START, a = n.VAR_FG_TRANSLATE_END, o = e.cssClasses, l = o.FG_DEACTIVATION, u = o.FG_ACTIVATION, m = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var f = "", y = "";
      if (!this.adapter.isUnbounded()) {
        var g = this.getFgTranslationCoordinates(), b = g.startPoint, x = g.endPoint;
        f = b.x + "px, " + b.y + "px", y = x.x + "px, " + x.y + "px";
      }
      this.adapter.updateCssVariable(r, f), this.adapter.updateCssVariable(a, y), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(l), this.adapter.computeBoundingRect(), this.adapter.addClass(u), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, m);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, n = i.activationEvent, r = i.wasActivatedByPointer, a;
      r ? a = eo(n, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var i = this, n = e.cssClasses.FG_DEACTIVATION, r = this.activationState, a = r.hasDeactivationUXRun, o = r.isActivated, l = a || !o;
      l && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(n), this.fgDeactivationRemovalTimer = setTimeout(function() {
        i.adapter.removeClass(n);
      }, Dn.FG_DEACTIVATION_MS));
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
        var r = Z({}, n);
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
        var o = Math.sqrt(Math.pow(i.frame.width, 2) + Math.pow(i.frame.height, 2));
        return o + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? n : r();
      var a = Math.floor(n * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var i = e.strings, n = i.VAR_FG_SIZE, r = i.VAR_LEFT, a = i.VAR_TOP, o = i.VAR_FG_SCALE;
      this.adapter.updateCssVariable(n, this.initialSize + "px"), this.adapter.updateCssVariable(o, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(r, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, e;
  }(Oe)
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
const Ar = /* @__PURE__ */ new WeakMap(), zt = (t) => (...e) => {
  const i = t(...e);
  return Ar.set(i, !0), i;
}, jt = (t) => typeof t == "function" && Ar.has(t);
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
const Ln = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, io = (t, e, i = null) => {
  for (; e !== i; ) {
    const n = e.nextSibling;
    t.removeChild(e), e = n;
  }
};
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
const qe = {}, $n = {};
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
const hn = `{{lit-${String(Math.random()).slice(2)}}}`, no = `<!--${hn}-->`, ro = "$lit$", ao = (t) => t.index !== -1, Ht = () => document.createComment(""), oo = (
  // eslint-disable-next-line no-control-regex
  /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/
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
class Rn {
  constructor(e, i, n) {
    this.__parts = [], this.template = e, this.processor = i, this.options = n;
  }
  update(e) {
    let i = 0;
    for (const n of this.__parts)
      n !== void 0 && n.setValue(e[i]), i++;
    for (const n of this.__parts)
      n !== void 0 && n.commit();
  }
  _clone() {
    const e = Ln ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), i = [], n = this.template.parts, r = document.createTreeWalker(e, 133, null, !1);
    let a = 0, o = 0, l, u = r.nextNode();
    for (; a < n.length; ) {
      if (l = n[a], !ao(l)) {
        this.__parts.push(void 0), a++;
        continue;
      }
      for (; o < l.index; )
        o++, u.nodeName === "TEMPLATE" && (i.push(u), r.currentNode = u.content), (u = r.nextNode()) === null && (r.currentNode = i.pop(), u = r.nextNode());
      if (l.type === "node") {
        const m = this.processor.handleTextExpression(this.options);
        m.insertAfterNode(u.previousSibling), this.__parts.push(m);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(u, l.name, l.strings, this.options));
      a++;
    }
    return Ln && (document.adoptNode(e), customElements.upgrade(e)), e;
  }
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
const On = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (t) => t }), lo = ` ${hn} `;
class so {
  constructor(e, i, n, r) {
    this.strings = e, this.values = i, this.type = n, this.processor = r;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */
  getHTML() {
    const e = this.strings.length - 1;
    let i = "", n = !1;
    for (let r = 0; r < e; r++) {
      const a = this.strings[r], o = a.lastIndexOf("<!--");
      n = (o > -1 || n) && a.indexOf("-->", o + 1) === -1;
      const l = oo.exec(a);
      l === null ? i += a + (n ? lo : no) : i += a.substr(0, l.index) + l[1] + l[2] + ro + l[3] + hn;
    }
    return i += this.strings[e], i;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let i = this.getHTML();
    return On !== void 0 && (i = On.createHTML(i)), e.innerHTML = i, e;
  }
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
const fn = (t) => t === null || !(typeof t == "object" || typeof t == "function"), co = (t) => Array.isArray(t) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(t && t[Symbol.iterator]);
let Ft = class {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== qe && (!fn(e) || e !== this.value) && (this.value = e, jt(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; jt(this.value); ) {
      const e = this.value;
      this.value = qe, e(this);
    }
    this.value !== qe && this.committer.commit();
  }
};
class wi {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(Ht()), this.endNode = e.appendChild(Ht());
  }
  /**
   * Inserts this part after the `ref` node (between `ref` and `ref`'s next
   * sibling). Both `ref` and its next sibling must be static, unchanging nodes
   * such as those that appear in a literal section of a template.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterNode(e) {
    this.startNode = e, this.endNode = e.nextSibling;
  }
  /**
   * Appends this part into a parent part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendIntoPart(e) {
    e.__insert(this.startNode = Ht()), e.__insert(this.endNode = Ht());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = Ht()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; jt(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = qe, i(this);
    }
    const e = this.__pendingValue;
    e !== qe && (fn(e) ? e !== this.value && this.__commitText(e) : e instanceof so ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : co(e) ? this.__commitIterable(e) : e === $n ? (this.value = $n, this.clear()) : this.__commitText(e));
  }
  __insert(e) {
    this.endNode.parentNode.insertBefore(e, this.endNode);
  }
  __commitNode(e) {
    this.value !== e && (this.clear(), this.__insert(e), this.value = e);
  }
  __commitText(e) {
    const i = this.startNode.nextSibling;
    e = e ?? "";
    const n = typeof e == "string" ? e : String(e);
    i === this.endNode.previousSibling && i.nodeType === 3 ? i.data = n : this.__commitNode(document.createTextNode(n)), this.value = e;
  }
  __commitTemplateResult(e) {
    const i = this.options.templateFactory(e);
    if (this.value instanceof Rn && this.value.template === i)
      this.value.update(e.values);
    else {
      const n = new Rn(i, e.processor, this.options), r = n._clone();
      n.update(e.values), this.__commitNode(r), this.value = n;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const i = this.value;
    let n = 0, r;
    for (const a of e)
      r = i[n], r === void 0 && (r = new wi(this.options), i.push(r), n === 0 ? r.appendIntoPart(this) : r.insertAfterPart(i[n - 1])), r.setValue(a), r.commit(), n++;
    n < i.length && (i.length = n, this.clear(r && r.endNode));
  }
  clear(e = this.startNode) {
    io(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
let Er = class {
  constructor(e, i, n) {
    if (this.value = void 0, this.__pendingValue = void 0, n.length !== 2 || n[0] !== "" || n[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = i, this.strings = n;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; jt(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = qe, i(this);
    }
    if (this.__pendingValue === qe)
      return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = qe;
  }
};
class Yt extends Ft {
}
let Cr = !1;
(() => {
  try {
    const t = {
      get capture() {
        return Cr = !0, !1;
      }
    };
    window.addEventListener("test", t, t), window.removeEventListener("test", t, t);
  } catch {
  }
})();
let Ir = class {
  constructor(e, i, n) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = i, this.eventContext = n, this.__boundHandleEvent = (r) => this.handleEvent(r);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; jt(this.__pendingValue); ) {
      const a = this.__pendingValue;
      this.__pendingValue = qe, a(this);
    }
    if (this.__pendingValue === qe)
      return;
    const e = this.__pendingValue, i = this.value, n = e == null || i != null && (e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive), r = e != null && (i == null || n);
    n && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), r && (this.__options = uo(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = qe;
  }
  handleEvent(e) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
};
const uo = (t) => t && (Cr ? { capture: t.capture, passive: t.passive, once: t.once } : t.capture);
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
class mo {
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
const zn = /* @__PURE__ */ new WeakMap(), ne = zt((t) => (e) => {
  if (!(e instanceof Ft) || e instanceof Yt || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = e, { element: n } = i;
  let r = zn.get(e);
  r === void 0 && (n.setAttribute("class", i.strings.join(" ")), zn.set(e, r = /* @__PURE__ */ new Set()));
  const a = n.classList || new mo(n);
  r.forEach((o) => {
    o in t || (a.remove(o), r.delete(o));
  });
  for (const o in t) {
    const l = t[o];
    l != r.has(o) && (l ? (a.add(o), r.add(o)) : (a.remove(o), r.delete(o)));
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
const Fn = /* @__PURE__ */ new WeakMap(), kr = zt((t) => (e) => {
  if (!(e instanceof Ft) || e instanceof Yt || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = e, { style: n } = i.element;
  let r = Fn.get(e);
  r === void 0 && (n.cssText = i.strings.join(" "), Fn.set(e, r = /* @__PURE__ */ new Set())), r.forEach((a) => {
    a in t || (r.delete(a), a.indexOf("-") === -1 ? n[a] = null : n.removeProperty(a));
  });
  for (const a in t)
    r.add(a), a.indexOf("-") === -1 ? n[a] = t[a] : n.setProperty(a, t[a]);
});
class pe extends ct {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = to;
  }
  get isActive() {
    return mn(this.parentElement || this, ":active");
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
    return s`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${ne(n)}"
          style="${kr({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
c([
  k(".mdc-ripple-surface")
], pe.prototype, "mdcRoot", void 0);
c([
  p({ type: Boolean })
], pe.prototype, "primary", void 0);
c([
  p({ type: Boolean })
], pe.prototype, "accent", void 0);
c([
  p({ type: Boolean })
], pe.prototype, "unbounded", void 0);
c([
  p({ type: Boolean })
], pe.prototype, "disabled", void 0);
c([
  p({ type: Boolean })
], pe.prototype, "activated", void 0);
c([
  p({ type: Boolean })
], pe.prototype, "selected", void 0);
c([
  p({ type: Boolean })
], pe.prototype, "internalUseStateLayerCustomProperties", void 0);
c([
  D()
], pe.prototype, "hovering", void 0);
c([
  D()
], pe.prototype, "bgFocused", void 0);
c([
  D()
], pe.prototype, "fgActivation", void 0);
c([
  D()
], pe.prototype, "fgDeactivation", void 0);
c([
  D()
], pe.prototype, "fgScale", void 0);
c([
  D()
], pe.prototype, "fgSize", void 0);
c([
  D()
], pe.prototype, "translateStart", void 0);
c([
  D()
], pe.prototype, "translateEnd", void 0);
c([
  D()
], pe.prototype, "leftPos", void 0);
c([
  D()
], pe.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const po = j`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let Pi = class extends pe {
};
Pi.styles = [po];
Pi = c([
  z("mwc-ripple")
], Pi);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function ho(t, e, i) {
  const n = t.constructor;
  if (!i) {
    const l = `__${e}`;
    if (i = n.getPropertyDescriptor(e, l), !i)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const r = i;
  let a = "";
  if (!r.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const o = {
    configurable: !0,
    enumerable: !0,
    set(l) {
      a === "" && (a = n.getPropertyOptions(e).attribute), this.hasAttribute(a) && this.removeAttribute(a), r.set.call(this, l);
    }
  };
  return r.get && (o.get = function() {
    return r.get.call(this);
  }), o;
}
function it(t, e, i) {
  if (e !== void 0)
    return ho(t, e, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Je extends ct {
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
Je.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Et {
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
const Ii = /* @__PURE__ */ new WeakMap(), O = zt((t) => (e) => {
  const i = Ii.get(e);
  if (t === void 0 && e instanceof Ft) {
    if (i !== void 0 || !Ii.has(e)) {
      const n = e.committer.name;
      e.committer.element.removeAttribute(n);
    }
  } else t !== i && e.setValue(t);
  Ii.set(e, t);
});
class he extends Je {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new Et(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(e) {
    const i = e.get("indeterminate"), n = e.get("checked"), r = e.get("disabled");
    if (i !== void 0 || n !== void 0 || r !== void 0) {
      const a = this.calculateAnimationStateName(!!n, !!i, !!r), o = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${a}-${o}`;
    }
    super.update(e);
  }
  calculateAnimationStateName(e, i, n) {
    return n ? "disabled" : i ? "indeterminate" : e ? "checked" : "unchecked";
  }
  // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? s`<mwc-ripple
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
    return s`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${ne(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${O(this.name)}"
              aria-checked="${O(n)}"
              aria-label="${O(this.ariaLabel)}"
              aria-labelledby="${O(this.ariaLabelledBy)}"
              aria-describedby="${O(this.ariaDescribedBy)}"
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
c([
  k(".mdc-checkbox")
], he.prototype, "mdcRoot", void 0);
c([
  k("input")
], he.prototype, "formElement", void 0);
c([
  p({ type: Boolean, reflect: !0 })
], he.prototype, "checked", void 0);
c([
  p({ type: Boolean })
], he.prototype, "indeterminate", void 0);
c([
  p({ type: Boolean, reflect: !0 })
], he.prototype, "disabled", void 0);
c([
  p({ type: String, reflect: !0 })
], he.prototype, "name", void 0);
c([
  p({ type: String })
], he.prototype, "value", void 0);
c([
  it,
  p({ type: String, attribute: "aria-label" })
], he.prototype, "ariaLabel", void 0);
c([
  it,
  p({ type: String, attribute: "aria-labelledby" })
], he.prototype, "ariaLabelledBy", void 0);
c([
  it,
  p({ type: String, attribute: "aria-describedby" })
], he.prototype, "ariaDescribedBy", void 0);
c([
  p({ type: Boolean })
], he.prototype, "reducedTouchTarget", void 0);
c([
  D()
], he.prototype, "animationClass", void 0);
c([
  D()
], he.prototype, "shouldRenderRipple", void 0);
c([
  D()
], he.prototype, "focused", void 0);
c([
  D()
], he.prototype, "useStateLayerCustomProperties", void 0);
c([
  At("mwc-ripple")
], he.prototype, "ripple", void 0);
c([
  We({ passive: !0 })
], he.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const fo = j`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let Mi = class extends he {
};
Mi.styles = [fo];
Mi = c([
  z("mwc-checkbox")
], Mi);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const P = (t) => (
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
        n.call(this, r), r.forEach((a, o) => {
          const u = this.constructor._observers.get(o);
          u !== void 0 && u.call(this, this[o], a);
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
class fe extends Pe {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new Et(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const e = this.renderText(), i = this.graphic ? this.renderGraphic() : s``, n = this.hasMeta ? this.renderMeta() : s``;
    return s`
      ${this.renderRipple()}
      ${i}
      ${e}
      ${n}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? s`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? s`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return s`
      <span class="mdc-deprecated-list-item__graphic material-icons ${ne(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return s`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return s`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return s`<slot></slot>`;
  }
  renderTwoline() {
    return s`
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
c([
  k("slot")
], fe.prototype, "slotElement", void 0);
c([
  At("mwc-ripple")
], fe.prototype, "ripple", void 0);
c([
  p({ type: String })
], fe.prototype, "value", void 0);
c([
  p({ type: String, reflect: !0 })
], fe.prototype, "group", void 0);
c([
  p({ type: Number, reflect: !0 })
], fe.prototype, "tabindex", void 0);
c([
  p({ type: Boolean, reflect: !0 }),
  P(function(t) {
    t ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], fe.prototype, "disabled", void 0);
c([
  p({ type: Boolean, reflect: !0 })
], fe.prototype, "twoline", void 0);
c([
  p({ type: Boolean, reflect: !0 })
], fe.prototype, "activated", void 0);
c([
  p({ type: String, reflect: !0 })
], fe.prototype, "graphic", void 0);
c([
  p({ type: Boolean })
], fe.prototype, "multipleGraphics", void 0);
c([
  p({ type: Boolean })
], fe.prototype, "hasMeta", void 0);
c([
  p({ type: Boolean, reflect: !0 }),
  P(function(t) {
    t ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], fe.prototype, "noninteractive", void 0);
c([
  p({ type: Boolean, reflect: !0 }),
  P(function(t) {
    const e = this.getAttribute("role"), i = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (i && t ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(t, "property");
  })
], fe.prototype, "selected", void 0);
c([
  D()
], fe.prototype, "shouldRenderRipple", void 0);
c([
  D()
], fe.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Qt extends fe {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), n = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : s``, r = this.hasMeta && this.left ? this.renderMeta() : s``, a = this.renderRipple();
    return s`
      ${a}
      ${n}
      ${this.left ? "" : i}
      <span class=${ne(e)}>
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
c([
  k("slot")
], Qt.prototype, "slotElement", void 0);
c([
  k("mwc-checkbox")
], Qt.prototype, "checkboxElement", void 0);
c([
  p({ type: Boolean })
], Qt.prototype, "left", void 0);
c([
  p({ type: String, reflect: !0 })
], Qt.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Dr = j`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const bn = j`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Lt = class extends Qt {
};
Lt.styles = [bn, Dr];
Lt = c([
  z("mwc-check-list-item")
], Lt);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Vn = Symbol("selection controller");
class bo {
  constructor() {
    this.selected = null, this.ordered = null, this.set = /* @__PURE__ */ new Set();
  }
}
class gn {
  constructor(e) {
    this.sets = {}, this.focusedSet = null, this.mouseIsDown = !1, this.updating = !1, e.addEventListener("keydown", (i) => {
      this.keyDownHandler(i);
    }), e.addEventListener("mousedown", () => {
      this.mousedownHandler();
    }), e.addEventListener("mouseup", () => {
      this.mouseupHandler();
    });
  }
  /**
   * Get a controller for the given element. If no controller exists, one will
   * be created. Defaults to getting the controller scoped to the element's root
   * node shadow root unless `element.global` is true. Then, it will get a
   * `window.document`-scoped controller.
   *
   * @param element Element from which to get / create a SelectionController. If
   *     `element.global` is true, it gets a selection controller scoped to
   *     `window.document`.
   */
  static getController(e) {
    const n = !("global" in e) || "global" in e && e.global ? document : e.getRootNode();
    let r = n[Vn];
    return r === void 0 && (r = new gn(n), n[Vn] = r), r;
  }
  keyDownHandler(e) {
    const i = e.target;
    "checked" in i && this.has(i) && (e.key == "ArrowRight" || e.key == "ArrowDown" ? this.selectNext(i) : (e.key == "ArrowLeft" || e.key == "ArrowUp") && this.selectPrevious(i));
  }
  mousedownHandler() {
    this.mouseIsDown = !0;
  }
  mouseupHandler() {
    this.mouseIsDown = !1;
  }
  /**
   * Whether or not the controller controls  the given element.
   *
   * @param element element to check
   */
  has(e) {
    return this.getSet(e.name).set.has(e);
  }
  /**
   * Selects and returns the controlled element previous to the given element in
   * document position order. See
   * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
   *
   * @param element element relative from which preceding element is fetched
   */
  selectPrevious(e) {
    const i = this.getOrdered(e), n = i.indexOf(e), r = i[n - 1] || i[i.length - 1];
    return this.select(r), r;
  }
  /**
   * Selects and returns the controlled element next to the given element in
   * document position order. See
   * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
   *
   * @param element element relative from which following element is fetched
   */
  selectNext(e) {
    const i = this.getOrdered(e), n = i.indexOf(e), r = i[n + 1] || i[0];
    return this.select(r), r;
  }
  select(e) {
    e.click();
  }
  /**
   * Focuses the selected element in the given element's selection set. User's
   * mouse selection will override this focus.
   *
   * @param element Element from which selection set is derived and subsequently
   *     focused.
   * @deprecated update() method now handles focus management by setting
   *     appropriate tabindex to form element.
   */
  focus(e) {
    if (this.mouseIsDown)
      return;
    const i = this.getSet(e.name), n = this.focusedSet;
    this.focusedSet = i, n != i && i.selected && i.selected != e && i.selected.focus();
  }
  /**
   * @return Returns true if atleast one radio is selected in the radio group.
   */
  isAnySelected(e) {
    const i = this.getSet(e.name);
    for (const n of i.set)
      if (n.checked)
        return !0;
    return !1;
  }
  /**
   * Returns the elements in the given element's selection set in document
   * position order.
   * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
   *
   * @param element Element from which selection set is derived and subsequently
   *     ordered.
   */
  getOrdered(e) {
    const i = this.getSet(e.name);
    return i.ordered || (i.ordered = Array.from(i.set), i.ordered.sort((n, r) => n.compareDocumentPosition(r) == Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0)), i.ordered;
  }
  /**
   * Gets the selection set of the given name and creates one if it does not yet
   * exist.
   *
   * @param name Name of set
   */
  getSet(e) {
    return this.sets[e] || (this.sets[e] = new bo()), this.sets[e];
  }
  /**
   * Register the element in the selection controller.
   *
   * @param element Element to register. Registers in set of `element.name`.
   */
  register(e) {
    const i = e.name || e.getAttribute("name") || "", n = this.getSet(i);
    n.set.add(e), n.ordered = null;
  }
  /**
   * Unregister the element from selection controller.
   *
   * @param element Element to register. Registers in set of `element.name`.
   */
  unregister(e) {
    const i = this.getSet(e.name);
    i.set.delete(e), i.ordered = null, i.selected == e && (i.selected = null);
  }
  /**
   * Unselects other elements in element's set if element is checked. Noop
   * otherwise.
   *
   * @param element Element from which to calculate selection controller update.
   */
  update(e) {
    if (this.updating)
      return;
    this.updating = !0;
    const i = this.getSet(e.name);
    if (e.checked) {
      for (const n of i.set)
        n != e && (n.checked = !1);
      i.selected = e;
    }
    if (this.isAnySelected(e))
      for (const n of i.set) {
        if (n.formElementTabIndex === void 0)
          break;
        n.formElementTabIndex = n.checked ? 0 : -1;
      }
    this.updating = !1;
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
var go = {
  NATIVE_CONTROL_SELECTOR: ".mdc-radio__native-control"
}, yo = {
  DISABLED: "mdc-radio--disabled",
  ROOT: "mdc-radio"
};
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
var xo = (
  /** @class */
  function(t) {
    Me(e, t);
    function e(i) {
      return t.call(this, Z(Z({}, e.defaultAdapter), i)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return yo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return go;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          setNativeControlDisabled: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.setDisabled = function(i) {
      var n = e.cssClasses.DISABLED;
      this.adapter.setNativeControlDisabled(i), i ? this.adapter.addClass(n) : this.adapter.removeClass(n);
    }, e;
  }(Oe)
);
class ye extends Je {
  constructor() {
    super(...arguments), this._checked = !1, this.useStateLayerCustomProperties = !1, this.global = !1, this.disabled = !1, this.value = "", this.name = "", this.reducedTouchTarget = !1, this.mdcFoundationClass = xo, this.formElementTabIndex = 0, this.focused = !1, this.shouldRenderRipple = !1, this.rippleElement = null, this.rippleHandlers = new Et(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => {
      this.rippleElement = e;
    }), this.ripple));
  }
  get checked() {
    return this._checked;
  }
  /**
   * We define our own getter/setter for `checked` because we need to track
   * changes to it synchronously.
   *
   * The order in which the `checked` property is set across radio buttons
   * within the same group is very important. However, we can't rely on
   * UpdatingElement's `updated` callback to observe these changes (which is
   * also what the `@observer` decorator uses), because it batches changes to
   * all properties.
   *
   * Consider:
   *
   *   radio1.disabled = true;
   *   radio2.checked = true;
   *   radio1.checked = true;
   *
   * In this case we'd first see all changes for radio1, and then for radio2,
   * and we couldn't tell that radio1 was the most recently checked.
   */
  set checked(e) {
    var i, n;
    const r = this._checked;
    e !== r && (this._checked = e, this.formElement && (this.formElement.checked = e), (i = this._selectionController) === null || i === void 0 || i.update(this), e === !1 && ((n = this.formElement) === null || n === void 0 || n.blur()), this.requestUpdate("checked", r), this.dispatchEvent(new Event("checked", { bubbles: !0, composed: !0 })));
  }
  _handleUpdatedValue(e) {
    this.formElement.value = e;
  }
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? s`<mwc-ripple unbounded accent
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
        .disabled="${this.disabled}"></mwc-ripple>` : "";
  }
  get isRippleActive() {
    var e;
    return ((e = this.rippleElement) === null || e === void 0 ? void 0 : e.isActive) || !1;
  }
  connectedCallback() {
    super.connectedCallback(), this._selectionController = gn.getController(this), this._selectionController.register(this), this._selectionController.update(this);
  }
  disconnectedCallback() {
    this._selectionController.unregister(this), this._selectionController = void 0;
  }
  focus() {
    this.formElement.focus();
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Ot(this.mdcRoot)), { setNativeControlDisabled: (e) => {
      this.formElement.disabled = e;
    } });
  }
  handleFocus() {
    this.focused = !0, this.handleRippleFocus();
  }
  handleClick() {
    this.formElement.focus();
  }
  handleBlur() {
    this.focused = !1, this.formElement.blur(), this.rippleHandlers.endFocus();
  }
  /**
   * @soyTemplate
   * @soyAttributes radioAttributes: input
   * @soyClasses radioClasses: .mdc-radio
   */
  render() {
    const e = {
      "mdc-radio--touch": !this.reducedTouchTarget,
      "mdc-ripple-upgraded--background-focused": this.focused,
      "mdc-radio--disabled": this.disabled
    };
    return s`
      <div class="mdc-radio ${ne(e)}">
        <input
          tabindex="${this.formElementTabIndex}"
          class="mdc-radio__native-control"
          type="radio"
          name="${this.name}"
          aria-label="${O(this.ariaLabel)}"
          aria-labelledby="${O(this.ariaLabelledBy)}"
          .checked="${this.checked}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          @change="${this.changeHandler}"
          @focus="${this.handleFocus}"
          @click="${this.handleClick}"
          @blur="${this.handleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-radio__background">
          <div class="mdc-radio__outer-circle"></div>
          <div class="mdc-radio__inner-circle"></div>
        </div>
        ${this.renderRipple()}
      </div>`;
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
  changeHandler() {
    this.checked = this.formElement.checked;
  }
}
c([
  k(".mdc-radio")
], ye.prototype, "mdcRoot", void 0);
c([
  k("input")
], ye.prototype, "formElement", void 0);
c([
  D()
], ye.prototype, "useStateLayerCustomProperties", void 0);
c([
  p({ type: Boolean })
], ye.prototype, "global", void 0);
c([
  p({ type: Boolean, reflect: !0 })
], ye.prototype, "checked", null);
c([
  p({ type: Boolean }),
  P(function(t) {
    this.mdcFoundation.setDisabled(t);
  })
], ye.prototype, "disabled", void 0);
c([
  p({ type: String }),
  P(function(t) {
    this._handleUpdatedValue(t);
  })
], ye.prototype, "value", void 0);
c([
  p({ type: String })
], ye.prototype, "name", void 0);
c([
  p({ type: Boolean })
], ye.prototype, "reducedTouchTarget", void 0);
c([
  p({ type: Number })
], ye.prototype, "formElementTabIndex", void 0);
c([
  D()
], ye.prototype, "focused", void 0);
c([
  D()
], ye.prototype, "shouldRenderRipple", void 0);
c([
  At("mwc-ripple")
], ye.prototype, "ripple", void 0);
c([
  it,
  p({ attribute: "aria-label" })
], ye.prototype, "ariaLabel", void 0);
c([
  it,
  p({ attribute: "aria-labelledby" })
], ye.prototype, "ariaLabelledBy", void 0);
c([
  We({ passive: !0 })
], ye.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const vo = j`.mdc-touch-target-wrapper{display:inline}.mdc-radio{padding:calc((40px - 20px) / 2)}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio .mdc-radio__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background::before{top:calc(-1 * (40px - 20px) / 2);left:calc(-1 * (40px - 20px) / 2);width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:calc((40px - 40px) / 2);right:calc((40px - 40px) / 2);left:calc((40px - 40px) / 2);width:40px;height:40px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:GrayText}}.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host{display:inline-block;outline:none}.mdc-radio{vertical-align:bottom}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}`;
let Hi = class extends ye {
};
Hi.styles = [vo];
Hi = c([
  z("mwc-radio")
], Hi);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Jt extends fe {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control", this._changeFromClick = !1;
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), n = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : s``, r = this.hasMeta && this.left ? this.renderMeta() : s``, a = this.renderRipple();
    return s`
      ${a}
      ${n}
      ${this.left ? "" : i}
      <mwc-radio
          global
          class=${ne(e)}
          tabindex=${this.tabindex}
          name=${O(this.group === null ? void 0 : this.group)}
          .checked=${this.selected}
          ?disabled=${this.disabled}
          @checked=${this.onChange}>
      </mwc-radio>
      ${this.left ? i : ""}
      ${r}`;
  }
  onClick() {
    this._changeFromClick = !0, super.onClick();
  }
  async onChange(e) {
    const i = e.target;
    this.selected === i.checked || (this._skipPropRequest = !0, this.selected = i.checked, await this.updateComplete, this._skipPropRequest = !1, this._changeFromClick || this.fireRequestSelected(this.selected, "interaction")), this._changeFromClick = !1;
  }
}
c([
  k("slot")
], Jt.prototype, "slotElement", void 0);
c([
  k("mwc-radio")
], Jt.prototype, "radioElement", void 0);
c([
  p({ type: Boolean })
], Jt.prototype, "left", void 0);
c([
  p({ type: String, reflect: !0 })
], Jt.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Bi = class extends Jt {
};
Bi.styles = [bn, Dr];
Bi = c([
  z("mwc-radio-list-item")
], Bi);
class nt extends Pe {
  constructor() {
    super(...arguments), this.disabled = !1, this.icon = "", this.shouldRenderRipple = !1, this.rippleHandlers = new Et(() => (this.shouldRenderRipple = !0, this.ripple));
  }
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? s`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>` : "";
  }
  focus() {
    const e = this.buttonElement;
    e && (this.rippleHandlers.startFocus(), e.focus());
  }
  blur() {
    const e = this.buttonElement;
    e && (this.rippleHandlers.endFocus(), e.blur());
  }
  /** @soyTemplate */
  render() {
    return s`<button
        class="mdc-icon-button"
        aria-label="${this.ariaLabel || this.icon}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}"
    >${this.renderRipple()}
    <i class="material-icons">${this.icon}</i>
    <span
      ><slot></slot
    ></span>
  </button>`;
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
}
c([
  p({ type: Boolean, reflect: !0 })
], nt.prototype, "disabled", void 0);
c([
  p({ type: String })
], nt.prototype, "icon", void 0);
c([
  it,
  p({ type: String, attribute: "aria-label" })
], nt.prototype, "ariaLabel", void 0);
c([
  k("button")
], nt.prototype, "buttonElement", void 0);
c([
  At("mwc-ripple")
], nt.prototype, "ripple", void 0);
c([
  D()
], nt.prototype, "shouldRenderRipple", void 0);
c([
  We({ passive: !0 })
], nt.prototype, "handleRippleMouseDown", null);
c([
  We({ passive: !0 })
], nt.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Tr = j`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button--touch{margin-top:0px;margin-bottom:0px}:host{display:inline-block;outline:none;--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host([disabled]){pointer-events:none}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button>i{position:absolute;top:0;padding-top:inherit}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let qi = class extends nt {
};
qi.styles = [Tr];
qi = c([
  z("mwc-icon-button")
], qi);
/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(() => {
  var t, e, i;
  const n = Symbol(), r = Symbol(), a = Symbol(), o = Symbol(), l = Symbol(), u = Symbol(), m = Symbol(), f = Symbol(), y = Symbol(), g = Symbol(), b = Symbol(), x = Symbol(), _ = Symbol();
  class I {
    constructor() {
      this[t] = [], this[e] = [], this[i] = /* @__PURE__ */ new Set();
    }
    destructor() {
      this[y](this[a]);
      const w = this;
      w[n] = null, w[a] = null, w[r] = null;
    }
    get top() {
      const w = this[n];
      return w[w.length - 1] || null;
    }
    push(w) {
      !w || w === this.top || (this.remove(w), this[u](w), this[n].push(w));
    }
    remove(w) {
      const T = this[n].indexOf(w);
      return T === -1 ? !1 : (this[n].splice(T, 1), T === this[n].length && this[u](this.top), !0);
    }
    pop() {
      const w = this.top;
      return w && this.remove(w), w;
    }
    has(w) {
      return this[n].indexOf(w) !== -1;
    }
    /**
     * Sets `inert` to all document elements except the new top element, its
     * parents, and its distributed content.
     */
    [(t = n, e = a, i = r, u)](w) {
      const T = this[r], N = this[a];
      if (!w) {
        this[y](N), T.clear(), this[a] = [];
        return;
      }
      const R = this[g](w);
      if (R[R.length - 1].parentNode !== document.body)
        throw Error("Non-connected element cannot be a blocking element");
      this[a] = R;
      const Q = this[b](w);
      if (!N.length) {
        this[f](R, Q, T);
        return;
      }
      let oe = N.length - 1, ee = R.length - 1;
      for (; oe > 0 && ee > 0 && N[oe] === R[ee]; )
        oe--, ee--;
      N[oe] !== R[ee] && this[m](N[oe], R[ee]), oe > 0 && this[y](N.slice(0, oe)), ee > 0 && this[f](R.slice(0, ee), Q, null);
    }
    /**
     * Swaps inertness between two sibling elements.
     * Sets the property `inert` over the attribute since the inert spec
     * doesn't specify if it should be reflected.
     * https://html.spec.whatwg.org/multipage/interaction.html#inert
     */
    [m](w, T) {
      const N = w[o];
      this[x](w) && !w.inert && (w.inert = !0, N.add(w)), N.has(T) && (T.inert = !1, N.delete(T)), T[l] = w[l], T[o] = N, w[l] = void 0, w[o] = void 0;
    }
    /**
     * Restores original inertness to the siblings of the elements.
     * Sets the property `inert` over the attribute since the inert spec
     * doesn't specify if it should be reflected.
     * https://html.spec.whatwg.org/multipage/interaction.html#inert
     */
    [y](w) {
      for (const T of w) {
        T[l].disconnect(), T[l] = void 0;
        const R = T[o];
        for (const Q of R)
          Q.inert = !1;
        T[o] = void 0;
      }
    }
    /**
     * Inerts the siblings of the elements except the elements to skip. Stores
     * the inerted siblings into the element's symbol `_siblingsToRestore`.
     * Pass `toKeepInert` to collect the already inert elements.
     * Sets the property `inert` over the attribute since the inert spec
     * doesn't specify if it should be reflected.
     * https://html.spec.whatwg.org/multipage/interaction.html#inert
     */
    [f](w, T, N) {
      for (const R of w) {
        const Q = R.parentNode, oe = Q.children, ee = /* @__PURE__ */ new Set();
        for (let Pt = 0; Pt < oe.length; Pt++) {
          const je = oe[Pt];
          je === R || !this[x](je) || T && T.has(je) || (N && je.inert ? N.add(je) : (je.inert = !0, ee.add(je)));
        }
        R[o] = ee;
        const at = new MutationObserver(this[_].bind(this));
        R[l] = at;
        let $e = Q;
        const ve = $e;
        ve.__shady && ve.host && ($e = ve.host), at.observe($e, {
          childList: !0
        });
      }
    }
    /**
     * Handles newly added/removed nodes by toggling their inertness.
     * It also checks if the current top Blocking Element has been removed,
     * notifying and removing it.
     */
    [_](w) {
      const T = this[a], N = this[r];
      for (const R of w) {
        const Q = R.target.host || R.target, oe = Q === document.body ? T.length : T.indexOf(Q), ee = T[oe - 1], at = ee[o];
        for (let $e = 0; $e < R.removedNodes.length; $e++) {
          const ve = R.removedNodes[$e];
          if (ve === ee) {
            console.info("Detected removal of the top Blocking Element."), this.pop();
            return;
          }
          at.has(ve) && (ve.inert = !1, at.delete(ve));
        }
        for (let $e = 0; $e < R.addedNodes.length; $e++) {
          const ve = R.addedNodes[$e];
          this[x](ve) && (N && ve.inert ? N.add(ve) : (ve.inert = !0, at.add(ve)));
        }
      }
    }
    /**
     * Returns if the element is inertable.
     */
    [x](w) {
      return /^(style|template|script)$/.test(w.localName) === !1;
    }
    /**
     * Returns the list of newParents of an element, starting from element
     * (included) up to `document.body` (excluded).
     */
    [g](w) {
      const T = [];
      let N = w;
      for (; N && N !== document.body; ) {
        if (N.nodeType === Node.ELEMENT_NODE && T.push(N), N.assignedSlot) {
          for (; N = N.assignedSlot; )
            T.push(N);
          N = T.pop();
          continue;
        }
        N = N.parentNode || N.host;
      }
      return T;
    }
    /**
     * Returns the distributed children of the element's shadow root.
     * Returns null if the element doesn't have a shadow root.
     */
    [b](w) {
      const T = w.shadowRoot;
      if (!T)
        return null;
      const N = /* @__PURE__ */ new Set();
      let R, Q, oe;
      const ee = T.querySelectorAll("slot");
      if (ee.length && ee[0].assignedNodes)
        for (R = 0; R < ee.length; R++)
          for (oe = ee[R].assignedNodes({
            flatten: !0
          }), Q = 0; Q < oe.length; Q++)
            oe[Q].nodeType === Node.ELEMENT_NODE && N.add(oe[Q]);
      return N;
    }
  }
  document.$blockingElements = new I();
})();
var Pn = {}, Mn;
function _o() {
  if (Mn) return Pn;
  Mn = 1;
  var t = /* @__PURE__ */ function() {
    function i(n, r) {
      for (var a = 0; a < r.length; a++) {
        var o = r[a];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, o.key, o);
      }
    }
    return function(n, r, a) {
      return r && i(n.prototype, r), a && i(n, a), n;
    };
  }();
  function e(i, n) {
    if (!(i instanceof n))
      throw new TypeError("Cannot call a class as a function");
  }
  return function() {
    if (typeof window > "u" || typeof Element > "u")
      return;
    var i = Array.prototype.slice, n = Element.prototype.matches || Element.prototype.msMatchesSelector, r = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "video", "[contenteditable]"].join(","), a = function() {
      function y(g, b) {
        e(this, y), this._inertManager = b, this._rootElement = g, this._managedNodes = /* @__PURE__ */ new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, { attributes: !0, childList: !0, subtree: !0 });
      }
      return t(y, [{
        key: "destructor",
        value: function() {
          this._observer.disconnect(), this._rootElement && (this._savedAriaHidden !== null ? this._rootElement.setAttribute("aria-hidden", this._savedAriaHidden) : this._rootElement.removeAttribute("aria-hidden")), this._managedNodes.forEach(function(b) {
            this._unmanageNode(b.node);
          }, this), this._observer = /** @type {?} */
          null, this._rootElement = /** @type {?} */
          null, this._managedNodes = /** @type {?} */
          null, this._inertManager = /** @type {?} */
          null;
        }
        /**
         * @return {!Set<!InertNode>} A copy of this InertRoot's managed nodes set.
         */
      }, {
        key: "_makeSubtreeUnfocusable",
        /**
         * @param {!Node} startNode
         */
        value: function(b) {
          var x = this;
          u(b, function(w) {
            return x._visitNode(w);
          });
          var _ = document.activeElement;
          if (!document.body.contains(b)) {
            for (var I = b, S = void 0; I; ) {
              if (I.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                S = /** @type {!ShadowRoot} */
                I;
                break;
              }
              I = I.parentNode;
            }
            S && (_ = S.activeElement);
          }
          b.contains(_) && (_.blur(), _ === document.activeElement && document.body.focus());
        }
        /**
         * @param {!Node} node
         */
      }, {
        key: "_visitNode",
        value: function(b) {
          if (b.nodeType === Node.ELEMENT_NODE) {
            var x = (
              /** @type {!HTMLElement} */
              b
            );
            x !== this._rootElement && x.hasAttribute("inert") && this._adoptInertRoot(x), (n.call(x, r) || x.hasAttribute("tabindex")) && this._manageNode(x);
          }
        }
        /**
         * Register the given node with this InertRoot and with InertManager.
         * @param {!Node} node
         */
      }, {
        key: "_manageNode",
        value: function(b) {
          var x = this._inertManager.register(b, this);
          this._managedNodes.add(x);
        }
        /**
         * Unregister the given node with this InertRoot and with InertManager.
         * @param {!Node} node
         */
      }, {
        key: "_unmanageNode",
        value: function(b) {
          var x = this._inertManager.deregister(b, this);
          x && this._managedNodes.delete(x);
        }
        /**
         * Unregister the entire subtree starting at `startNode`.
         * @param {!Node} startNode
         */
      }, {
        key: "_unmanageSubtree",
        value: function(b) {
          var x = this;
          u(b, function(_) {
            return x._unmanageNode(_);
          });
        }
        /**
         * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
         * @param {!HTMLElement} node
         */
      }, {
        key: "_adoptInertRoot",
        value: function(b) {
          var x = this._inertManager.getInertRoot(b);
          x || (this._inertManager.setInert(b, !0), x = this._inertManager.getInertRoot(b)), x.managedNodes.forEach(function(_) {
            this._manageNode(_.node);
          }, this);
        }
        /**
         * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
         * @param {!Array<!MutationRecord>} records
         * @param {!MutationObserver} self
         */
      }, {
        key: "_onMutation",
        value: function(b, x) {
          b.forEach(function(_) {
            var I = (
              /** @type {!HTMLElement} */
              _.target
            );
            if (_.type === "childList")
              i.call(_.addedNodes).forEach(function(w) {
                this._makeSubtreeUnfocusable(w);
              }, this), i.call(_.removedNodes).forEach(function(w) {
                this._unmanageSubtree(w);
              }, this);
            else if (_.type === "attributes") {
              if (_.attributeName === "tabindex")
                this._manageNode(I);
              else if (I !== this._rootElement && _.attributeName === "inert" && I.hasAttribute("inert")) {
                this._adoptInertRoot(I);
                var S = this._inertManager.getInertRoot(I);
                this._managedNodes.forEach(function(w) {
                  I.contains(w.node) && S._manageNode(w.node);
                });
              }
            }
          }, this);
        }
      }, {
        key: "managedNodes",
        get: function() {
          return new Set(this._managedNodes);
        }
        /** @return {boolean} */
      }, {
        key: "hasSavedAriaHidden",
        get: function() {
          return this._savedAriaHidden !== null;
        }
        /** @param {?string} ariaHidden */
      }, {
        key: "savedAriaHidden",
        set: function(b) {
          this._savedAriaHidden = b;
        },
        get: function() {
          return this._savedAriaHidden;
        }
      }]), y;
    }(), o = function() {
      function y(g, b) {
        e(this, y), this._node = g, this._overrodeFocusMethod = !1, this._inertRoots = /* @__PURE__ */ new Set([b]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable();
      }
      return t(y, [{
        key: "destructor",
        value: function() {
          if (this._throwIfDestroyed(), this._node && this._node.nodeType === Node.ELEMENT_NODE) {
            var b = (
              /** @type {!HTMLElement} */
              this._node
            );
            this._savedTabIndex !== null ? b.setAttribute("tabindex", this._savedTabIndex) : b.removeAttribute("tabindex"), this._overrodeFocusMethod && delete b.focus;
          }
          this._node = /** @type {?} */
          null, this._inertRoots = /** @type {?} */
          null, this._destroyed = !0;
        }
        /**
         * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
         * If the object has been destroyed, any attempt to access it will cause an exception.
         */
      }, {
        key: "_throwIfDestroyed",
        /**
         * Throw if user tries to access destroyed InertNode.
         */
        value: function() {
          if (this.destroyed)
            throw new Error("Trying to access destroyed InertNode");
        }
        /** @return {boolean} */
      }, {
        key: "ensureUntabbable",
        /** Save the existing tabindex value and make the node untabbable and unfocusable */
        value: function() {
          if (this.node.nodeType === Node.ELEMENT_NODE) {
            var b = (
              /** @type {!HTMLElement} */
              this.node
            );
            if (n.call(b, r)) {
              if (
                /** @type {!HTMLElement} */
                b.tabIndex === -1 && this.hasSavedTabIndex
              )
                return;
              b.hasAttribute("tabindex") && (this._savedTabIndex = /** @type {!HTMLElement} */
              b.tabIndex), b.setAttribute("tabindex", "-1"), b.nodeType === Node.ELEMENT_NODE && (b.focus = function() {
              }, this._overrodeFocusMethod = !0);
            } else b.hasAttribute("tabindex") && (this._savedTabIndex = /** @type {!HTMLElement} */
            b.tabIndex, b.removeAttribute("tabindex"));
          }
        }
        /**
         * Add another inert root to this inert node's set of managing inert roots.
         * @param {!InertRoot} inertRoot
         */
      }, {
        key: "addInertRoot",
        value: function(b) {
          this._throwIfDestroyed(), this._inertRoots.add(b);
        }
        /**
         * Remove the given inert root from this inert node's set of managing inert roots.
         * If the set of managing inert roots becomes empty, this node is no longer inert,
         * so the object should be destroyed.
         * @param {!InertRoot} inertRoot
         */
      }, {
        key: "removeInertRoot",
        value: function(b) {
          this._throwIfDestroyed(), this._inertRoots.delete(b), this._inertRoots.size === 0 && this.destructor();
        }
      }, {
        key: "destroyed",
        get: function() {
          return (
            /** @type {!InertNode} */
            this._destroyed
          );
        }
      }, {
        key: "hasSavedTabIndex",
        get: function() {
          return this._savedTabIndex !== null;
        }
        /** @return {!Node} */
      }, {
        key: "node",
        get: function() {
          return this._throwIfDestroyed(), this._node;
        }
        /** @param {?number} tabIndex */
      }, {
        key: "savedTabIndex",
        set: function(b) {
          this._throwIfDestroyed(), this._savedTabIndex = b;
        },
        get: function() {
          return this._throwIfDestroyed(), this._savedTabIndex;
        }
      }]), y;
    }(), l = function() {
      function y(g) {
        if (e(this, y), !g)
          throw new Error("Missing required argument; InertManager needs to wrap a document.");
        this._document = g, this._managedNodes = /* @__PURE__ */ new Map(), this._inertRoots = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), m(g.head || g.body || g.documentElement), g.readyState === "loading" ? g.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
      }
      return t(y, [{
        key: "setInert",
        value: function(b, x) {
          if (x) {
            if (this._inertRoots.has(b))
              return;
            var _ = new a(b, this);
            if (b.setAttribute("inert", ""), this._inertRoots.set(b, _), !this._document.body.contains(b))
              for (var I = b.parentNode; I; )
                I.nodeType === 11 && m(I), I = I.parentNode;
          } else {
            if (!this._inertRoots.has(b))
              return;
            var S = this._inertRoots.get(b);
            S.destructor(), this._inertRoots.delete(b), b.removeAttribute("inert");
          }
        }
        /**
         * Get the InertRoot object corresponding to the given inert root element, if any.
         * @param {!Node} element
         * @return {!InertRoot|undefined}
         */
      }, {
        key: "getInertRoot",
        value: function(b) {
          return this._inertRoots.get(b);
        }
        /**
         * Register the given InertRoot as managing the given node.
         * In the case where the node has a previously existing inert root, this inert root will
         * be added to its set of inert roots.
         * @param {!Node} node
         * @param {!InertRoot} inertRoot
         * @return {!InertNode} inertNode
         */
      }, {
        key: "register",
        value: function(b, x) {
          var _ = this._managedNodes.get(b);
          return _ !== void 0 ? _.addInertRoot(x) : _ = new o(b, x), this._managedNodes.set(b, _), _;
        }
        /**
         * De-register the given InertRoot as managing the given inert node.
         * Removes the inert root from the InertNode's set of managing inert roots, and remove the inert
         * node from the InertManager's set of managed nodes if it is destroyed.
         * If the node is not currently managed, this is essentially a no-op.
         * @param {!Node} node
         * @param {!InertRoot} inertRoot
         * @return {?InertNode} The potentially destroyed InertNode associated with this node, if any.
         */
      }, {
        key: "deregister",
        value: function(b, x) {
          var _ = this._managedNodes.get(b);
          return _ ? (_.removeInertRoot(x), _.destroyed && this._managedNodes.delete(b), _) : null;
        }
        /**
         * Callback used when document has finished loading.
         */
      }, {
        key: "_onDocumentLoaded",
        value: function() {
          var b = i.call(this._document.querySelectorAll("[inert]"));
          b.forEach(function(x) {
            this.setInert(x, !0);
          }, this), this._observer.observe(this._document.body || this._document.documentElement, { attributes: !0, subtree: !0, childList: !0 });
        }
        /**
         * Callback used when mutation observer detects attribute changes.
         * @param {!Array<!MutationRecord>} records
         * @param {!MutationObserver} self
         */
      }, {
        key: "_watchForInert",
        value: function(b, x) {
          var _ = this;
          b.forEach(function(I) {
            switch (I.type) {
              case "childList":
                i.call(I.addedNodes).forEach(function(T) {
                  if (T.nodeType === Node.ELEMENT_NODE) {
                    var N = i.call(T.querySelectorAll("[inert]"));
                    n.call(T, "[inert]") && N.unshift(T), N.forEach(function(R) {
                      this.setInert(R, !0);
                    }, _);
                  }
                }, _);
                break;
              case "attributes":
                if (I.attributeName !== "inert")
                  return;
                var S = (
                  /** @type {!HTMLElement} */
                  I.target
                ), w = S.hasAttribute("inert");
                _.setInert(S, w);
                break;
            }
          }, this);
        }
      }]), y;
    }();
    function u(y, g, b) {
      if (y.nodeType == Node.ELEMENT_NODE) {
        var x = (
          /** @type {!HTMLElement} */
          y
        );
        g && g(x);
        var _ = (
          /** @type {!HTMLElement} */
          x.shadowRoot
        );
        if (_) {
          u(_, g);
          return;
        }
        if (x.localName == "content") {
          for (var I = (
            /** @type {!HTMLContentElement} */
            x
          ), S = I.getDistributedNodes ? I.getDistributedNodes() : [], w = 0; w < S.length; w++)
            u(S[w], g);
          return;
        }
        if (x.localName == "slot") {
          for (var T = (
            /** @type {!HTMLSlotElement} */
            x
          ), N = T.assignedNodes ? T.assignedNodes({ flatten: !0 }) : [], R = 0; R < N.length; R++)
            u(N[R], g);
          return;
        }
      }
      for (var Q = y.firstChild; Q != null; )
        u(Q, g), Q = Q.nextSibling;
    }
    function m(y) {
      if (!y.querySelector("style#inert-style, link#inert-style")) {
        var g = document.createElement("style");
        g.setAttribute("id", "inert-style"), g.textContent = `
[inert] {
  pointer-events: none;
  cursor: default;
}

[inert], [inert] * {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
`, y.appendChild(g);
      }
    }
    if (!HTMLElement.prototype.hasOwnProperty("inert")) {
      var f = new l(document);
      Object.defineProperty(HTMLElement.prototype, "inert", {
        enumerable: !0,
        /** @this {!HTMLElement} */
        get: function() {
          return this.hasAttribute("inert");
        },
        /** @this {!HTMLElement} */
        set: function(g) {
          f.setInert(this, g);
        }
      });
    }
  }(), Pn;
}
_o();
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
var G = {
  CLOSING: "mdc-dialog--closing",
  OPEN: "mdc-dialog--open",
  OPENING: "mdc-dialog--opening",
  SCROLLABLE: "mdc-dialog--scrollable",
  SCROLL_LOCK: "mdc-dialog-scroll-lock",
  STACKED: "mdc-dialog--stacked",
  FULLSCREEN: "mdc-dialog--fullscreen",
  // Class for showing a scroll divider on full-screen dialog header element.
  // Should only be displayed on scrollable content, when the dialog content is
  // scrolled "underneath" the header.
  SCROLL_DIVIDER_HEADER: "mdc-dialog-scroll-divider-header",
  // Class for showing a scroll divider on a full-screen dialog footer element.
  // Should only be displayed on scrolalble content, when the dialog content is
  // obscured "underneath" the footer.
  SCROLL_DIVIDER_FOOTER: "mdc-dialog-scroll-divider-footer",
  // The "surface scrim" is a scrim covering only the surface of a dialog. This
  // is used in situations where a confirmation dialog is shown over an already
  // opened full-screen dialog. On larger screen-sizes, the full-screen dialog
  // is sized as a modal and so in these situations we display a "surface scrim"
  // to prevent a "double scrim" (where the scrim from the secondary
  // confirmation dialog would overlap with the scrim from the full-screen
  // dialog).
  SURFACE_SCRIM_SHOWN: "mdc-dialog__surface-scrim--shown",
  // "Showing" animating class for the surface-scrim.
  SURFACE_SCRIM_SHOWING: "mdc-dialog__surface-scrim--showing",
  // "Hiding" animating class for the surface-scrim.
  SURFACE_SCRIM_HIDING: "mdc-dialog__surface-scrim--hiding",
  // Class to hide a dialog's scrim (used in conjunction with a surface-scrim).
  // Note that we only hide the original scrim rather than removing it entirely
  // to prevent interactions with the content behind this scrim, and to capture
  // scrim clicks.
  SCRIM_HIDDEN: "mdc-dialog__scrim--hidden"
}, Bt = {
  ACTION_ATTRIBUTE: "data-mdc-dialog-action",
  BUTTON_DEFAULT_ATTRIBUTE: "data-mdc-dialog-button-default",
  BUTTON_SELECTOR: ".mdc-dialog__button",
  CLOSED_EVENT: "MDCDialog:closed",
  CLOSE_ACTION: "close",
  CLOSING_EVENT: "MDCDialog:closing",
  CONTAINER_SELECTOR: ".mdc-dialog__container",
  CONTENT_SELECTOR: ".mdc-dialog__content",
  DESTROY_ACTION: "destroy",
  INITIAL_FOCUS_ATTRIBUTE: "data-mdc-dialog-initial-focus",
  OPENED_EVENT: "MDCDialog:opened",
  OPENING_EVENT: "MDCDialog:opening",
  SCRIM_SELECTOR: ".mdc-dialog__scrim",
  SUPPRESS_DEFAULT_PRESS_SELECTOR: [
    "textarea",
    ".mdc-menu .mdc-list-item",
    ".mdc-menu .mdc-deprecated-list-item"
  ].join(", "),
  SURFACE_SELECTOR: ".mdc-dialog__surface"
}, ki = {
  DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
  DIALOG_ANIMATION_OPEN_TIME_MS: 150
};
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
var wo = (
  /** @class */
  function() {
    function t() {
      this.rafIDs = /* @__PURE__ */ new Map();
    }
    return t.prototype.request = function(e, i) {
      var n = this;
      this.cancel(e);
      var r = requestAnimationFrame(function(a) {
        n.rafIDs.delete(e), i(a);
      });
      this.rafIDs.set(e, r);
    }, t.prototype.cancel = function(e) {
      var i = this.rafIDs.get(e);
      i && (cancelAnimationFrame(i), this.rafIDs.delete(e));
    }, t.prototype.cancelAll = function() {
      var e = this;
      this.rafIDs.forEach(function(i, n) {
        e.cancel(n);
      });
    }, t.prototype.getQueue = function() {
      var e = [];
      return this.rafIDs.forEach(function(i, n) {
        e.push(n);
      }), e;
    }, t;
  }()
);
/**
 * @license
 * Copyright 2017 Google Inc.
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
var hi;
(function(t) {
  t.POLL_SCROLL_POS = "poll_scroll_position", t.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(hi || (hi = {}));
var So = (
  /** @class */
  function(t) {
    Me(e, t);
    function e(i) {
      var n = t.call(this, Z(Z({}, e.defaultAdapter), i)) || this;
      return n.dialogOpen = !1, n.isFullscreen = !1, n.animationFrame = 0, n.animationTimer = 0, n.escapeKeyAction = Bt.CLOSE_ACTION, n.scrimClickAction = Bt.CLOSE_ACTION, n.autoStackButtons = !0, n.areButtonsStacked = !1, n.suppressDefaultPressSelector = Bt.SUPPRESS_DEFAULT_PRESS_SELECTOR, n.animFrame = new wo(), n.contentScrollHandler = function() {
        n.handleScrollEvent();
      }, n.windowResizeHandler = function() {
        n.layout();
      }, n.windowOrientationChangeHandler = function() {
        n.layout();
      }, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return G;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Bt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ki;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addBodyClass: function() {
          },
          addClass: function() {
          },
          areButtonsStacked: function() {
            return !1;
          },
          clickDefaultButton: function() {
          },
          eventTargetMatches: function() {
            return !1;
          },
          getActionFromEvent: function() {
            return "";
          },
          getInitialFocusEl: function() {
            return null;
          },
          hasClass: function() {
            return !1;
          },
          isContentScrollable: function() {
            return !1;
          },
          notifyClosed: function() {
          },
          notifyClosing: function() {
          },
          notifyOpened: function() {
          },
          notifyOpening: function() {
          },
          releaseFocus: function() {
          },
          removeBodyClass: function() {
          },
          removeClass: function() {
          },
          reverseButtons: function() {
          },
          trapFocus: function() {
          },
          registerContentEventHandler: function() {
          },
          deregisterContentEventHandler: function() {
          },
          isScrollableContentAtTop: function() {
            return !1;
          },
          isScrollableContentAtBottom: function() {
            return !1;
          },
          registerWindowEventHandler: function() {
          },
          deregisterWindowEventHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.hasClass(G.STACKED) && this.setAutoStackButtons(!1), this.isFullscreen = this.adapter.hasClass(G.FULLSCREEN);
    }, e.prototype.destroy = function() {
      this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    }, e.prototype.open = function(i) {
      var n = this;
      this.dialogOpen = !0, this.adapter.notifyOpening(), this.adapter.addClass(G.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), i && i.isAboveFullscreenDialog && this.adapter.addClass(G.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(function() {
        n.adapter.addClass(G.OPEN), n.adapter.addBodyClass(G.SCROLL_LOCK), n.layout(), n.animationTimer = setTimeout(function() {
          n.handleAnimationTimerEnd(), n.adapter.trapFocus(n.adapter.getInitialFocusEl()), n.adapter.notifyOpened();
        }, ki.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(i) {
      var n = this;
      i === void 0 && (i = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(i), this.adapter.addClass(G.CLOSING), this.adapter.removeClass(G.OPEN), this.adapter.removeBodyClass(G.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        n.adapter.releaseFocus(), n.handleAnimationTimerEnd(), n.adapter.notifyClosed(i);
      }, ki.DIALOG_ANIMATION_CLOSE_TIME_MS));
    }, e.prototype.showSurfaceScrim = function() {
      var i = this;
      this.adapter.addClass(G.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(function() {
        i.adapter.addClass(G.SURFACE_SCRIM_SHOWN);
      });
    }, e.prototype.hideSurfaceScrim = function() {
      this.adapter.removeClass(G.SURFACE_SCRIM_SHOWN), this.adapter.addClass(G.SURFACE_SCRIM_HIDING);
    }, e.prototype.handleSurfaceScrimTransitionEnd = function() {
      this.adapter.removeClass(G.SURFACE_SCRIM_HIDING), this.adapter.removeClass(G.SURFACE_SCRIM_SHOWING);
    }, e.prototype.isOpen = function() {
      return this.dialogOpen;
    }, e.prototype.getEscapeKeyAction = function() {
      return this.escapeKeyAction;
    }, e.prototype.setEscapeKeyAction = function(i) {
      this.escapeKeyAction = i;
    }, e.prototype.getScrimClickAction = function() {
      return this.scrimClickAction;
    }, e.prototype.setScrimClickAction = function(i) {
      this.scrimClickAction = i;
    }, e.prototype.getAutoStackButtons = function() {
      return this.autoStackButtons;
    }, e.prototype.setAutoStackButtons = function(i) {
      this.autoStackButtons = i;
    }, e.prototype.getSuppressDefaultPressSelector = function() {
      return this.suppressDefaultPressSelector;
    }, e.prototype.setSuppressDefaultPressSelector = function(i) {
      this.suppressDefaultPressSelector = i;
    }, e.prototype.layout = function() {
      var i = this;
      this.animFrame.request(hi.POLL_LAYOUT_CHANGE, function() {
        i.layoutInternal();
      });
    }, e.prototype.handleClick = function(i) {
      var n = this.adapter.eventTargetMatches(i.target, Bt.SCRIM_SELECTOR);
      if (n && this.scrimClickAction !== "")
        this.close(this.scrimClickAction);
      else {
        var r = this.adapter.getActionFromEvent(i);
        r && this.close(r);
      }
    }, e.prototype.handleKeydown = function(i) {
      var n = i.key === "Enter" || i.keyCode === 13;
      if (n) {
        var r = this.adapter.getActionFromEvent(i);
        if (!r) {
          var a = i.composedPath ? i.composedPath()[0] : i.target, o = this.suppressDefaultPressSelector ? !this.adapter.eventTargetMatches(a, this.suppressDefaultPressSelector) : !0;
          n && o && this.adapter.clickDefaultButton();
        }
      }
    }, e.prototype.handleDocumentKeydown = function(i) {
      var n = i.key === "Escape" || i.keyCode === 27;
      n && this.escapeKeyAction !== "" && this.close(this.escapeKeyAction);
    }, e.prototype.handleScrollEvent = function() {
      var i = this;
      this.animFrame.request(hi.POLL_SCROLL_POS, function() {
        i.toggleScrollDividerHeader(), i.toggleScrollDividerFooter();
      });
    }, e.prototype.layoutInternal = function() {
      this.autoStackButtons && this.detectStackedButtons(), this.toggleScrollableClasses();
    }, e.prototype.handleAnimationTimerEnd = function() {
      this.animationTimer = 0, this.adapter.removeClass(G.OPENING), this.adapter.removeClass(G.CLOSING);
    }, e.prototype.runNextAnimationFrame = function(i) {
      var n = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        n.animationFrame = 0, clearTimeout(n.animationTimer), n.animationTimer = setTimeout(i, 0);
      });
    }, e.prototype.detectStackedButtons = function() {
      this.adapter.removeClass(G.STACKED);
      var i = this.adapter.areButtonsStacked();
      i && this.adapter.addClass(G.STACKED), i !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = i);
    }, e.prototype.toggleScrollableClasses = function() {
      this.adapter.removeClass(G.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(G.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
    }, e.prototype.toggleScrollDividerHeader = function() {
      this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(G.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(G.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(G.SCROLL_DIVIDER_HEADER);
    }, e.prototype.toggleScrollDividerFooter = function() {
      this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(G.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(G.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(G.SCROLL_DIVIDER_FOOTER);
    }, e;
  }(Oe)
);
/**
 * @license
 * Copyright 2019 Google Inc.
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
function oi(t) {
  return t === void 0 && (t = window), Ao(t) ? { passive: !0 } : !1;
}
function Ao(t) {
  t === void 0 && (t = window);
  var e = !1;
  try {
    var i = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        return e = !0, !1;
      }
    }, n = function() {
    };
    t.document.addEventListener("test", n, i), t.document.removeEventListener("test", n, i);
  } catch {
    e = !1;
  }
  return e;
}
const Di = document.$blockingElements;
class _e extends ct {
  constructor() {
    super(...arguments), this.hideActions = !1, this.stacked = !1, this.heading = "", this.scrimClickAction = "close", this.escapeKeyAction = "close", this.open = !1, this.defaultAction = "close", this.actionAttribute = "dialogAction", this.initialFocusAttribute = "dialogInitialFocus", this.initialSupressDefaultPressSelector = "", this.mdcFoundationClass = So, this.boundHandleClick = null, this.boundHandleKeydown = null, this.boundHandleDocumentKeydown = null;
  }
  set suppressDefaultPressSelector(e) {
    this.mdcFoundation ? this.mdcFoundation.setSuppressDefaultPressSelector(e) : this.initialSupressDefaultPressSelector = e;
  }
  get suppressDefaultPressSelector() {
    return this.mdcFoundation ? this.mdcFoundation.getSuppressDefaultPressSelector() : this.initialSupressDefaultPressSelector;
  }
  get primaryButton() {
    let e = this.primarySlot.assignedNodes();
    e = e.filter((n) => n instanceof HTMLElement);
    const i = e[0];
    return i || null;
  }
  emitNotification(e, i) {
    const n = { detail: i ? { action: i } : {} }, r = new CustomEvent(e, n);
    this.dispatchEvent(r);
  }
  getInitialFocusEl() {
    const e = `[${this.initialFocusAttribute}]`, i = this.querySelector(e);
    if (i)
      return i;
    const r = this.primarySlot.assignedNodes({ flatten: !0 }), a = this.searchNodeTreesForAttribute(r, this.initialFocusAttribute);
    if (a)
      return a;
    const l = this.secondarySlot.assignedNodes({ flatten: !0 }), u = this.searchNodeTreesForAttribute(l, this.initialFocusAttribute);
    if (u)
      return u;
    const f = this.contentSlot.assignedNodes({ flatten: !0 });
    return this.searchNodeTreesForAttribute(f, this.initialFocusAttribute);
  }
  searchNodeTreesForAttribute(e, i) {
    for (const n of e)
      if (n instanceof HTMLElement) {
        if (n.hasAttribute(i))
          return n;
        {
          const r = n.querySelector(`[${i}]`);
          if (r)
            return r;
        }
      }
    return null;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Ot(this.mdcRoot)), { addBodyClass: () => document.body.style.overflow = "hidden", removeBodyClass: () => document.body.style.overflow = "", areButtonsStacked: () => this.stacked, clickDefaultButton: () => {
      const e = this.primaryButton;
      e && e.click();
    }, eventTargetMatches: (e, i) => e ? mn(e, i) : !1, getActionFromEvent: (e) => {
      if (!e.target)
        return "";
      const i = Za(e.target, `[${this.actionAttribute}]`);
      return i && i.getAttribute(this.actionAttribute);
    }, getInitialFocusEl: () => this.getInitialFocusEl(), isContentScrollable: () => {
      const e = this.contentElement;
      return e ? e.scrollHeight > e.offsetHeight : !1;
    }, notifyClosed: (e) => this.emitNotification("closed", e), notifyClosing: (e) => {
      this.closingDueToDisconnect || (this.open = !1), this.emitNotification("closing", e);
    }, notifyOpened: () => this.emitNotification("opened"), notifyOpening: () => {
      this.open = !0, this.emitNotification("opening");
    }, reverseButtons: () => {
    }, releaseFocus: () => {
      Di.remove(this);
    }, trapFocus: (e) => {
      this.isConnected && (Di.push(this), e && e.focus());
    }, registerContentEventHandler: (e, i) => {
      this.contentElement.addEventListener(e, i);
    }, deregisterContentEventHandler: (e, i) => {
      this.contentElement.removeEventListener(e, i);
    }, isScrollableContentAtTop: () => {
      const e = this.contentElement;
      return e ? e.scrollTop === 0 : !1;
    }, isScrollableContentAtBottom: () => {
      const e = this.contentElement;
      return e ? Math.ceil(e.scrollHeight - e.scrollTop) === e.clientHeight : !1;
    }, registerWindowEventHandler: (e, i) => {
      window.addEventListener(e, i, oi());
    }, deregisterWindowEventHandler: (e, i) => {
      window.removeEventListener(e, i, oi());
    } });
  }
  render() {
    const e = {
      [G.STACKED]: this.stacked
    };
    let i = s``;
    this.heading && (i = this.renderHeading());
    const n = {
      "mdc-dialog__actions": !this.hideActions
    };
    return s`
    <div class="mdc-dialog ${ne(e)}"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="title"
        aria-describedby="content">
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          ${i}
          <div id="content" class="mdc-dialog__content">
            <slot id="contentSlot"></slot>
          </div>
          <footer
              id="actions"
              class="${ne(n)}">
            <span>
              <slot name="secondaryAction"></slot>
            </span>
            <span>
             <slot name="primaryAction"></slot>
            </span>
          </footer>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>`;
  }
  renderHeading() {
    return s`
      <h2 id="title" class="mdc-dialog__title">${this.heading}</h2>`;
  }
  firstUpdated() {
    super.firstUpdated(), this.mdcFoundation.setAutoStackButtons(!0), this.initialSupressDefaultPressSelector ? this.suppressDefaultPressSelector = this.initialSupressDefaultPressSelector : this.suppressDefaultPressSelector = [
      this.suppressDefaultPressSelector,
      "mwc-textarea",
      "mwc-menu mwc-list-item",
      "mwc-select mwc-list-item"
    ].join(", "), this.boundHandleClick = this.mdcFoundation.handleClick.bind(this.mdcFoundation), this.boundHandleKeydown = this.mdcFoundation.handleKeydown.bind(this.mdcFoundation), this.boundHandleDocumentKeydown = this.mdcFoundation.handleDocumentKeydown.bind(this.mdcFoundation);
  }
  connectedCallback() {
    super.connectedCallback(), this.open && this.mdcFoundation && !this.mdcFoundation.isOpen() && (this.setEventListeners(), this.mdcFoundation.open());
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.open && this.mdcFoundation && (this.removeEventListeners(), this.closingDueToDisconnect = !0, this.mdcFoundation.close(this.currentAction || this.defaultAction), this.closingDueToDisconnect = !1, this.currentAction = void 0, Di.remove(this));
  }
  forceLayout() {
    this.mdcFoundation.layout();
  }
  focus() {
    const e = this.getInitialFocusEl();
    e && e.focus();
  }
  blur() {
    if (!this.shadowRoot)
      return;
    const e = this.shadowRoot.activeElement;
    if (e)
      e instanceof HTMLElement && e.blur();
    else {
      const i = this.getRootNode(), n = i instanceof Document ? i.activeElement : null;
      n instanceof HTMLElement && n.blur();
    }
  }
  setEventListeners() {
    this.boundHandleClick && this.mdcRoot.addEventListener("click", this.boundHandleClick), this.boundHandleKeydown && this.mdcRoot.addEventListener("keydown", this.boundHandleKeydown, oi()), this.boundHandleDocumentKeydown && document.addEventListener("keydown", this.boundHandleDocumentKeydown, oi());
  }
  removeEventListeners() {
    this.boundHandleClick && this.mdcRoot.removeEventListener("click", this.boundHandleClick), this.boundHandleKeydown && this.mdcRoot.removeEventListener("keydown", this.boundHandleKeydown), this.boundHandleDocumentKeydown && document.removeEventListener("keydown", this.boundHandleDocumentKeydown);
  }
  close() {
    this.open = !1;
  }
  show() {
    this.open = !0;
  }
}
c([
  k(".mdc-dialog")
], _e.prototype, "mdcRoot", void 0);
c([
  k('slot[name="primaryAction"]')
], _e.prototype, "primarySlot", void 0);
c([
  k('slot[name="secondaryAction"]')
], _e.prototype, "secondarySlot", void 0);
c([
  k("#contentSlot")
], _e.prototype, "contentSlot", void 0);
c([
  k(".mdc-dialog__content")
], _e.prototype, "contentElement", void 0);
c([
  k(".mdc-container")
], _e.prototype, "conatinerElement", void 0);
c([
  p({ type: Boolean })
], _e.prototype, "hideActions", void 0);
c([
  p({ type: Boolean }),
  P(function() {
    this.forceLayout();
  })
], _e.prototype, "stacked", void 0);
c([
  p({ type: String })
], _e.prototype, "heading", void 0);
c([
  p({ type: String }),
  P(function(t) {
    this.mdcFoundation.setScrimClickAction(t);
  })
], _e.prototype, "scrimClickAction", void 0);
c([
  p({ type: String }),
  P(function(t) {
    this.mdcFoundation.setEscapeKeyAction(t);
  })
], _e.prototype, "escapeKeyAction", void 0);
c([
  p({ type: Boolean, reflect: !0 }),
  P(function(t) {
    this.mdcFoundation && this.isConnected && (t ? (this.setEventListeners(), this.mdcFoundation.open()) : (this.removeEventListeners(), this.mdcFoundation.close(this.currentAction || this.defaultAction), this.currentAction = void 0));
  })
], _e.prototype, "open", void 0);
c([
  p()
], _e.prototype, "defaultAction", void 0);
c([
  p()
], _e.prototype, "actionAttribute", void 0);
c([
  p()
], _e.prototype, "initialFocusAttribute", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Eo = j`.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__surface-scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6)}.mdc-dialog .mdc-dialog__close{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-dialog .mdc-dialog__close:hover .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions,.mdc-dialog.mdc-dialog--scrollable.mdc-dialog-scroll-divider-footer .mdc-dialog__actions{border-color:rgba(0,0,0,.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:1px solid rgba(0,0,0,.12);margin-bottom:0}.mdc-dialog.mdc-dialog-scroll-divider-header.mdc-dialog--fullscreen .mdc-dialog__header{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}@media(max-width: 960px)and (max-height: 1440px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;max-width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 1023px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:calc(100vw - 112px)}}@media(max-width: 720px)and (max-height: 1023px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:560px}}@media(max-width: 720px)and (max-height: 1023px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (max-height: 1023px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px)and (max-height: 1023px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100%;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(max-width: 600px)and (max-height: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px)and (min-height: 1440px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0,0,0,.12);display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;line-height:normal;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid transparent;display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid transparent}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:0.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, 0.03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit);flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;-webkit-overflow-scrolling:touch}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1;z-index:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}#actions:not(.mdc-dialog__actions){display:none}.mdc-dialog__surface{box-shadow:var(--mdc-dialog-box-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}@media(min-width: 560px){.mdc-dialog .mdc-dialog__surface{max-width:560px;max-width:var(--mdc-dialog-max-width, 560px)}}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0, 0, 0, 0.32);background-color:var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32))}.mdc-dialog .mdc-dialog__title{color:rgba(0, 0, 0, 0.87);color:var(--mdc-dialog-heading-ink-color, rgba(0, 0, 0, 0.87))}.mdc-dialog .mdc-dialog__content{color:rgba(0, 0, 0, 0.6);color:var(--mdc-dialog-content-ink-color, rgba(0, 0, 0, 0.6))}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12))}.mdc-dialog .mdc-dialog__surface{min-width:280px;min-width:var(--mdc-dialog-min-width, 280px)}.mdc-dialog .mdc-dialog__surface{max-height:var(--mdc-dialog-max-height, calc(100% - 32px))}#actions ::slotted(*){margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){margin-left:0;margin-right:8px}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){text-align:left}.mdc-dialog--stacked #actions{flex-direction:column-reverse}.mdc-dialog--stacked #actions *:not(:last-child) ::slotted(*){flex-basis:.000000001px;margin-top:12px}`;
let Gi = class extends _e {
};
Gi.styles = [Eo];
Gi = c([
  z("mwc-dialog")
], Gi);
/**
 * @license
 * Copyright 2017 Google Inc.
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
var Co = {
  ROOT: "mdc-form-field"
}, Io = {
  LABEL_SELECTOR: ".mdc-form-field > label"
};
/**
 * @license
 * Copyright 2017 Google Inc.
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
var ko = (
  /** @class */
  function(t) {
    Me(e, t);
    function e(i) {
      var n = t.call(this, Z(Z({}, e.defaultAdapter), i)) || this;
      return n.click = function() {
        n.handleClick();
      }, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Co;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Io;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          activateInputRipple: function() {
          },
          deactivateInputRipple: function() {
          },
          deregisterInteractionHandler: function() {
          },
          registerInteractionHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerInteractionHandler("click", this.click);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterInteractionHandler("click", this.click);
    }, e.prototype.handleClick = function() {
      var i = this;
      this.adapter.activateInputRipple(), requestAnimationFrame(function() {
        i.adapter.deactivateInputRipple();
      });
    }, e;
  }(Oe)
);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ut extends ct {
  constructor() {
    super(...arguments), this.alignEnd = !1, this.spaceBetween = !1, this.nowrap = !1, this.label = "", this.mdcFoundationClass = ko;
  }
  createAdapter() {
    return {
      registerInteractionHandler: (e, i) => {
        this.labelEl.addEventListener(e, i);
      },
      deregisterInteractionHandler: (e, i) => {
        this.labelEl.removeEventListener(e, i);
      },
      activateInputRipple: async () => {
        const e = this.input;
        if (e instanceof Je) {
          const i = await e.ripple;
          i && i.startPress();
        }
      },
      deactivateInputRipple: async () => {
        const e = this.input;
        if (e instanceof Je) {
          const i = await e.ripple;
          i && i.endPress();
        }
      }
    };
  }
  get input() {
    var e, i;
    return (i = (e = this.slottedInputs) === null || e === void 0 ? void 0 : e[0]) !== null && i !== void 0 ? i : null;
  }
  render() {
    const e = {
      "mdc-form-field--align-end": this.alignEnd,
      "mdc-form-field--space-between": this.spaceBetween,
      "mdc-form-field--nowrap": this.nowrap
    };
    return s`
      <div class="mdc-form-field ${ne(e)}">
        <slot></slot>
        <label class="mdc-label"
               @click="${this._labelClick}">${this.label}</label>
      </div>`;
  }
  _labelClick() {
    const e = this.input;
    e && (e.focus(), e.click());
  }
}
c([
  p({ type: Boolean })
], ut.prototype, "alignEnd", void 0);
c([
  p({ type: Boolean })
], ut.prototype, "spaceBetween", void 0);
c([
  p({ type: Boolean })
], ut.prototype, "nowrap", void 0);
c([
  p({ type: String }),
  P(async function(t) {
    const e = this.input;
    e && (e.localName === "input" ? e.setAttribute("aria-label", t) : e instanceof Je && (await e.updateComplete, e.setAriaLabel(t)));
  })
], ut.prototype, "label", void 0);
c([
  k(".mdc-form-field")
], ut.prototype, "mdcRoot", void 0);
c([
  un("", !0, "*")
], ut.prototype, "slottedInputs", void 0);
c([
  k("label")
], ut.prototype, "labelEl", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Do = j`.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch[dir=rtl]){margin-left:10px}`;
let Wi = class extends ut {
};
Wi.styles = [Do];
Wi = c([
  z("mwc-formfield")
], Wi);
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
var To = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Hn = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, No = {
  NO_LABEL: "mdc-notched-outline--no-label",
  OUTLINE_NOTCHED: "mdc-notched-outline--notched",
  OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"
};
/**
 * @license
 * Copyright 2017 Google Inc.
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
var Lo = (
  /** @class */
  function(t) {
    Me(e, t);
    function e(i) {
      return t.call(this, Z(Z({}, e.defaultAdapter), i)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return To;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return No;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Hn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          setNotchWidthProperty: function() {
          },
          removeNotchWidthProperty: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.notch = function(i) {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      i > 0 && (i += Hn.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(i), this.adapter.addClass(n);
    }, e.prototype.closeNotch = function() {
      var i = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(i), this.adapter.removeNotchWidthProperty();
    }, e;
  }(Oe)
);
class ei extends ct {
  constructor() {
    super(...arguments), this.mdcFoundationClass = Lo, this.width = 0, this.open = !1, this.lastOpen = this.open;
  }
  createAdapter() {
    return {
      addClass: (e) => this.mdcRoot.classList.add(e),
      removeClass: (e) => this.mdcRoot.classList.remove(e),
      setNotchWidthProperty: (e) => this.notchElement.style.setProperty("width", `${e}px`),
      removeNotchWidthProperty: () => this.notchElement.style.removeProperty("width")
    };
  }
  openOrClose(e, i) {
    this.mdcFoundation && (e && i !== void 0 ? this.mdcFoundation.notch(i) : this.mdcFoundation.closeNotch());
  }
  render() {
    this.openOrClose(this.open, this.width);
    const e = ne({
      "mdc-notched-outline--notched": this.open
    });
    return s`
      <span class="mdc-notched-outline ${e}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`;
  }
}
c([
  k(".mdc-notched-outline")
], ei.prototype, "mdcRoot", void 0);
c([
  p({ type: Number })
], ei.prototype, "width", void 0);
c([
  p({ type: Boolean, reflect: !0 })
], ei.prototype, "open", void 0);
c([
  k(".mdc-notched-outline__notch")
], ei.prototype, "notchElement", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const $o = j`.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host([dir=rtl]){text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`;
let Ui = class extends ei {
};
Ui.styles = [$o];
Ui = c([
  z("mwc-notched-outline")
], Ui);
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
var Ro = {
  LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
  LABEL_REQUIRED: "mdc-floating-label--required",
  LABEL_SHAKE: "mdc-floating-label--shake",
  ROOT: "mdc-floating-label"
};
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
var Oo = (
  /** @class */
  function(t) {
    Me(e, t);
    function e(i) {
      var n = t.call(this, Z(Z({}, e.defaultAdapter), i)) || this;
      return n.shakeAnimationEndHandler = function() {
        n.handleShakeAnimationEnd();
      }, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ro;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          getWidth: function() {
            return 0;
          },
          registerInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, e.prototype.getWidth = function() {
      return this.adapter.getWidth();
    }, e.prototype.shake = function(i) {
      var n = e.cssClasses.LABEL_SHAKE;
      i ? this.adapter.addClass(n) : this.adapter.removeClass(n);
    }, e.prototype.float = function(i) {
      var n = e.cssClasses, r = n.LABEL_FLOAT_ABOVE, a = n.LABEL_SHAKE;
      i ? this.adapter.addClass(r) : (this.adapter.removeClass(r), this.adapter.removeClass(a));
    }, e.prototype.setRequired = function(i) {
      var n = e.cssClasses.LABEL_REQUIRED;
      i ? this.adapter.addClass(n) : this.adapter.removeClass(n);
    }, e.prototype.handleShakeAnimationEnd = function() {
      var i = e.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(i);
    }, e;
  }(Oe)
);
/**
 * @license
 * Copyright (c) 2021 The Polymer Project Authors. All rights reserved.
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
const et = {
  ATTRIBUTE: 1,
  CHILD: 2,
  PROPERTY: 3,
  BOOLEAN_ATTRIBUTE: 4,
  EVENT: 5
};
class zo {
  constructor(e) {
    this.type = et.CHILD, this.options = e.options, this.legacyPart = e;
  }
  get parentNode() {
    return this.legacyPart.startNode.parentNode;
  }
  get startNode() {
    return this.legacyPart.startNode;
  }
  get endNode() {
    return this.legacyPart.endNode;
  }
}
class Fo {
  constructor(e) {
    this.legacyPart = e, this.type = e instanceof Yt ? et.PROPERTY : et.ATTRIBUTE;
  }
  get options() {
  }
  get name() {
    return this.legacyPart.committer.name;
  }
  get element() {
    return this.legacyPart.committer.element;
  }
  /**
   * If this attribute part represents an interpolation, this contains the
   * static strings of the interpolation. For single-value, complete bindings,
   * this is undefined.
   */
  get strings() {
    return this.legacyPart.committer.strings;
  }
  get tagName() {
    return this.element.tagName;
  }
}
class Vo {
  constructor(e) {
    this.type = et.BOOLEAN_ATTRIBUTE, this.legacyPart = e;
  }
  get options() {
  }
  get name() {
    return this.legacyPart.name;
  }
  get element() {
    return this.legacyPart.element;
  }
  /**
   * If this attribute part represents an interpolation, this contains the
   * static strings of the interpolation. For single-value, complete bindings,
   * this is undefined.
   */
  get strings() {
    return this.legacyPart.strings;
  }
  get tagName() {
    return this.element.tagName;
  }
}
class Po {
  constructor(e) {
    this.type = et.EVENT, this.legacyPart = e;
  }
  get options() {
  }
  get name() {
    return this.legacyPart.eventName;
  }
  get element() {
    return this.legacyPart.element;
  }
  /**
   * If this attribute part represents an interpolation, this contains the
   * static strings of the interpolation. For single-value, complete bindings,
   * this is undefined.
   */
  get strings() {
  }
  get tagName() {
    return this.element.tagName;
  }
  handleEvent(e) {
    this.legacyPart.handleEvent(e);
  }
}
function Mo(t) {
  if (t instanceof wi)
    return new zo(t);
  if (t instanceof Ir)
    return new Po(t);
  if (t instanceof Er)
    return new Vo(t);
  if (t instanceof Yt || t instanceof Ft)
    return new Fo(t);
  throw new Error("Unknown part type");
}
class Nr {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(e) {
  }
  update(e, i) {
    return this.render(...i);
  }
}
function Lr(t) {
  const e = /* @__PURE__ */ new WeakMap();
  return zt((...n) => (r) => {
    const a = e.get(r);
    let o, l;
    a === void 0 ? (o = Mo(r), l = new t(o), e.set(r, [o, l])) : (o = a[0], l = a[1]), r.setValue(l.update(o, n)), r.commit();
  });
}
const Ho = (t) => ({
  addClass: (e) => t.classList.add(e),
  removeClass: (e) => t.classList.remove(e),
  getWidth: () => t.scrollWidth,
  registerInteractionHandler: (e, i) => {
    t.addEventListener(e, i);
  },
  deregisterInteractionHandler: (e, i) => {
    t.removeEventListener(e, i);
  }
});
class Bo extends Nr {
  constructor(e) {
    switch (super(e), this.foundation = null, this.previousPart = null, e.type) {
      // Only allow Attribute and Part bindings
      case et.ATTRIBUTE:
      case et.PROPERTY:
        break;
      default:
        throw new Error("FloatingLabel directive only support attribute and property parts");
    }
  }
  /**
   * There is no PropertyPart in Lit 2 so far. For more info see:
   * https://github.com/lit/lit/issues/1863
   */
  update(e, [i]) {
    if (e !== this.previousPart) {
      this.foundation && this.foundation.destroy(), this.previousPart = e;
      const n = e.element;
      n.classList.add("mdc-floating-label");
      const r = Ho(n);
      this.foundation = new Oo(r), this.foundation.init();
    }
    return this.render(i);
  }
  render(e) {
    return this.foundation;
  }
}
const $r = Lr(Bo);
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
var gt = {
  LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
  LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"
};
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
var qo = (
  /** @class */
  function(t) {
    Me(e, t);
    function e(i) {
      var n = t.call(this, Z(Z({}, e.defaultAdapter), i)) || this;
      return n.transitionEndHandler = function(r) {
        n.handleTransitionEnd(r);
      }, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return gt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          setStyle: function() {
          },
          registerEventHandler: function() {
          },
          deregisterEventHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerEventHandler("transitionend", this.transitionEndHandler);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler);
    }, e.prototype.activate = function() {
      this.adapter.removeClass(gt.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(gt.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(i) {
      this.adapter.setStyle("transform-origin", i + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(gt.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(i) {
      var n = this.adapter.hasClass(gt.LINE_RIPPLE_DEACTIVATING);
      i.propertyName === "opacity" && n && (this.adapter.removeClass(gt.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(gt.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(Oe)
);
const Go = (t) => ({
  addClass: (e) => t.classList.add(e),
  removeClass: (e) => t.classList.remove(e),
  hasClass: (e) => t.classList.contains(e),
  setStyle: (e, i) => t.style.setProperty(e, i),
  registerEventHandler: (e, i) => {
    t.addEventListener(e, i);
  },
  deregisterEventHandler: (e, i) => {
    t.removeEventListener(e, i);
  }
});
class Wo extends Nr {
  constructor(e) {
    switch (super(e), this.previousPart = null, this.foundation = null, e.type) {
      case et.ATTRIBUTE:
      case et.PROPERTY:
        return;
      default:
        throw new Error("LineRipple only support attribute and property parts.");
    }
  }
  /**
   * There is no PropertyPart in Lit 2 so far. For more info see:
   * https://github.com/lit/lit/issues/1863
   */
  update(e, i) {
    if (this.previousPart !== e) {
      this.foundation && this.foundation.destroy(), this.previousPart = e;
      const n = e.element;
      n.classList.add("mdc-line-ripple");
      const r = Go(n);
      this.foundation = new qo(r), this.foundation.init();
    }
    return this.render();
  }
  render() {
    return this.foundation;
  }
}
const Rr = Lr(Wo);
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
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  INPUT_SELECTOR: ".mdc-text-field__input",
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-text-field__icon--leading",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  PREFIX_SELECTOR: ".mdc-text-field__affix--prefix",
  SUFFIX_SELECTOR: ".mdc-text-field__affix--suffix",
  TRAILING_ICON_SELECTOR: ".mdc-text-field__icon--trailing"
}, Uo = {
  DISABLED: "mdc-text-field--disabled",
  FOCUSED: "mdc-text-field--focused",
  HELPER_LINE: "mdc-text-field-helper-line",
  INVALID: "mdc-text-field--invalid",
  LABEL_FLOATING: "mdc-text-field--label-floating",
  NO_LABEL: "mdc-text-field--no-label",
  OUTLINED: "mdc-text-field--outlined",
  ROOT: "mdc-text-field",
  TEXTAREA: "mdc-text-field--textarea",
  WITH_LEADING_ICON: "mdc-text-field--with-leading-icon",
  WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon"
}, Bn = {
  LABEL_SCALE: 0.75
}, jo = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Ko = [
  "color",
  "date",
  "datetime-local",
  "month",
  "range",
  "time",
  "week"
];
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
var qn = ["mousedown", "touchstart"], Gn = ["click", "keydown"], Xo = (
  /** @class */
  function(t) {
    Me(e, t);
    function e(i, n) {
      n === void 0 && (n = {});
      var r = t.call(this, Z(Z({}, e.defaultAdapter), i)) || this;
      return r.isFocused = !1, r.receivedUserInput = !1, r.valid = !0, r.useNativeValidation = !0, r.validateOnValueChange = !0, r.helperText = n.helperText, r.characterCounter = n.characterCounter, r.leadingIcon = n.leadingIcon, r.trailingIcon = n.trailingIcon, r.inputFocusHandler = function() {
        r.activateFocus();
      }, r.inputBlurHandler = function() {
        r.deactivateFocus();
      }, r.inputInputHandler = function() {
        r.handleInput();
      }, r.setPointerXOffset = function(a) {
        r.setTransformOrigin(a);
      }, r.textFieldInteractionHandler = function() {
        r.handleTextFieldInteraction();
      }, r.validationAttributeChangeHandler = function(a) {
        r.handleValidationAttributeChange(a);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Uo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ti;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Bn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var i = this.getNativeInput().type;
        return Ko.indexOf(i) >= 0;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldFloat", {
      get: function() {
        return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() || this.isBadInput();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldShake", {
      get: function() {
        return !this.isFocused && !this.isValid() && !!this.getValue();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCTextFieldAdapter} for typing information on parameters and
       * return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !0;
          },
          setInputAttr: function() {
          },
          removeInputAttr: function() {
          },
          registerTextFieldInteractionHandler: function() {
          },
          deregisterTextFieldInteractionHandler: function() {
          },
          registerInputInteractionHandler: function() {
          },
          deregisterInputInteractionHandler: function() {
          },
          registerValidationAttributeChangeHandler: function() {
            return new MutationObserver(function() {
            });
          },
          deregisterValidationAttributeChangeHandler: function() {
          },
          getNativeInput: function() {
            return null;
          },
          isFocused: function() {
            return !1;
          },
          activateLineRipple: function() {
          },
          deactivateLineRipple: function() {
          },
          setLineRippleTransformOrigin: function() {
          },
          shakeLabel: function() {
          },
          floatLabel: function() {
          },
          setLabelRequired: function() {
          },
          hasLabel: function() {
            return !1;
          },
          getLabelWidth: function() {
            return 0;
          },
          hasOutline: function() {
            return !1;
          },
          notchOutline: function() {
          },
          closeOutline: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var i, n, r, a;
      this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = Xe(qn), l = o.next(); !l.done; l = o.next()) {
          var u = l.value;
          this.adapter.registerInputInteractionHandler(u, this.setPointerXOffset);
        }
      } catch (y) {
        i = { error: y };
      } finally {
        try {
          l && !l.done && (n = o.return) && n.call(o);
        } finally {
          if (i) throw i.error;
        }
      }
      try {
        for (var m = Xe(Gn), f = m.next(); !f.done; f = m.next()) {
          var u = f.value;
          this.adapter.registerTextFieldInteractionHandler(u, this.textFieldInteractionHandler);
        }
      } catch (y) {
        r = { error: y };
      } finally {
        try {
          f && !f.done && (a = m.return) && a.call(m);
        } finally {
          if (r) throw r.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var i, n, r, a;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = Xe(qn), l = o.next(); !l.done; l = o.next()) {
          var u = l.value;
          this.adapter.deregisterInputInteractionHandler(u, this.setPointerXOffset);
        }
      } catch (y) {
        i = { error: y };
      } finally {
        try {
          l && !l.done && (n = o.return) && n.call(o);
        } finally {
          if (i) throw i.error;
        }
      }
      try {
        for (var m = Xe(Gn), f = m.next(); !f.done; f = m.next()) {
          var u = f.value;
          this.adapter.deregisterTextFieldInteractionHandler(u, this.textFieldInteractionHandler);
        }
      } catch (y) {
        r = { error: y };
      } finally {
        try {
          f && !f.done && (a = m.return) && a.call(m);
        } finally {
          if (r) throw r.error;
        }
      }
      this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    }, e.prototype.handleTextFieldInteraction = function() {
      var i = this.adapter.getNativeInput();
      i && i.disabled || (this.receivedUserInput = !0);
    }, e.prototype.handleValidationAttributeChange = function(i) {
      var n = this;
      i.some(function(r) {
        return jo.indexOf(r) > -1 ? (n.styleValidity(!0), n.adapter.setLabelRequired(n.getNativeInput().required), !0) : !1;
      }), i.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(i) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (i) {
          var n = this.adapter.getLabelWidth() * Bn.LABEL_SCALE;
          this.adapter.notchOutline(n);
        } else
          this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(i) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var n = i.touches, r = n ? n[0] : i, a = r.target.getBoundingClientRect(), o = r.clientX - a.left;
        this.adapter.setLineRippleTransformOrigin(o);
      }
    }, e.prototype.handleInput = function() {
      this.autoCompleteFocus(), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.autoCompleteFocus = function() {
      this.receivedUserInput || this.activateFocus();
    }, e.prototype.deactivateFocus = function() {
      this.isFocused = !1, this.adapter.deactivateLineRipple();
      var i = this.isValid();
      this.styleValidity(i), this.styleFocused(this.isFocused), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput = !1);
    }, e.prototype.getValue = function() {
      return this.getNativeInput().value;
    }, e.prototype.setValue = function(i) {
      if (this.getValue() !== i && (this.getNativeInput().value = i), this.setcharacterCounter(i.length), this.validateOnValueChange) {
        var n = this.isValid();
        this.styleValidity(n);
      }
      this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.validateOnValueChange && this.adapter.shakeLabel(this.shouldShake));
    }, e.prototype.isValid = function() {
      return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    }, e.prototype.setValid = function(i) {
      this.valid = i, this.styleValidity(i);
      var n = !i && !this.isFocused && !!this.getValue();
      this.adapter.hasLabel() && this.adapter.shakeLabel(n);
    }, e.prototype.setValidateOnValueChange = function(i) {
      this.validateOnValueChange = i;
    }, e.prototype.getValidateOnValueChange = function() {
      return this.validateOnValueChange;
    }, e.prototype.setUseNativeValidation = function(i) {
      this.useNativeValidation = i;
    }, e.prototype.isDisabled = function() {
      return this.getNativeInput().disabled;
    }, e.prototype.setDisabled = function(i) {
      this.getNativeInput().disabled = i, this.styleDisabled(i);
    }, e.prototype.setHelperTextContent = function(i) {
      this.helperText && this.helperText.setContent(i);
    }, e.prototype.setLeadingIconAriaLabel = function(i) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(i);
    }, e.prototype.setLeadingIconContent = function(i) {
      this.leadingIcon && this.leadingIcon.setContent(i);
    }, e.prototype.setTrailingIconAriaLabel = function(i) {
      this.trailingIcon && this.trailingIcon.setAriaLabel(i);
    }, e.prototype.setTrailingIconContent = function(i) {
      this.trailingIcon && this.trailingIcon.setContent(i);
    }, e.prototype.setcharacterCounter = function(i) {
      if (this.characterCounter) {
        var n = this.getNativeInput().maxLength;
        if (n === -1)
          throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
        this.characterCounter.setCounterValue(i, n);
      }
    }, e.prototype.isBadInput = function() {
      return this.getNativeInput().validity.badInput || !1;
    }, e.prototype.isNativeInputValid = function() {
      return this.getNativeInput().validity.valid;
    }, e.prototype.styleValidity = function(i) {
      var n = e.cssClasses.INVALID;
      if (i ? this.adapter.removeClass(n) : this.adapter.addClass(n), this.helperText) {
        this.helperText.setValidity(i);
        var r = this.helperText.isValidation();
        if (!r)
          return;
        var a = this.helperText.isVisible(), o = this.helperText.getId();
        a && o ? this.adapter.setInputAttr(Ti.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr(Ti.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.styleFocused = function(i) {
      var n = e.cssClasses.FOCUSED;
      i ? this.adapter.addClass(n) : this.adapter.removeClass(n);
    }, e.prototype.styleDisabled = function(i) {
      var n = e.cssClasses, r = n.DISABLED, a = n.INVALID;
      i ? (this.adapter.addClass(r), this.adapter.removeClass(a)) : this.adapter.removeClass(r), this.leadingIcon && this.leadingIcon.setDisabled(i), this.trailingIcon && this.trailingIcon.setDisabled(i);
    }, e.prototype.styleFloating = function(i) {
      var n = e.cssClasses.LABEL_FLOATING;
      i ? this.adapter.addClass(n) : this.adapter.removeClass(n);
    }, e.prototype.getNativeInput = function() {
      var i = this.adapter ? this.adapter.getNativeInput() : null;
      return i || {
        disabled: !1,
        maxLength: -1,
        required: !1,
        type: "input",
        validity: {
          badInput: !1,
          valid: !0
        },
        value: ""
      };
    }, e;
  }(Oe)
);
/**
 * @license
 * Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
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
const Or = zt((t) => (e) => {
  let i;
  if (e instanceof Ir || e instanceof wi)
    throw new Error("The `live` directive is not allowed on text or event bindings");
  if (e instanceof Er)
    Wn(e.strings), i = e.element.hasAttribute(e.name), e.value = i;
  else {
    const { element: n, name: r, strings: a } = e.committer;
    if (Wn(a), e instanceof Yt) {
      if (i = n[r], i === t)
        return;
    } else e instanceof Ft && (i = n.getAttribute(r));
    if (i === String(t))
      return;
  }
  e.setValue(t);
}), Wn = (t) => {
  if (t.length !== 2 || t[0] !== "" || t[1] !== "")
    throw new Error("`live` bindings can only contain a single expression");
}, Zo = ["touchstart", "touchmove", "scroll", "mousewheel"], Un = (t = {}) => {
  const e = {};
  for (const i in t)
    e[i] = t[i];
  return Object.assign({ badInput: !1, customError: !1, patternMismatch: !1, rangeOverflow: !1, rangeUnderflow: !1, stepMismatch: !1, tooLong: !1, tooShort: !1, typeMismatch: !1, valid: !0, valueMissing: !1 }, e);
};
class $ extends Je {
  constructor() {
    super(...arguments), this.mdcFoundationClass = Xo, this.value = "", this.type = "text", this.placeholder = "", this.label = "", this.icon = "", this.iconTrailing = "", this.disabled = !1, this.required = !1, this.minLength = -1, this.maxLength = -1, this.outlined = !1, this.helper = "", this.validateOnInitialRender = !1, this.validationMessage = "", this.autoValidate = !1, this.pattern = "", this.min = "", this.max = "", this.step = null, this.size = null, this.helperPersistent = !1, this.charCounter = !1, this.endAligned = !1, this.prefix = "", this.suffix = "", this.name = "", this.readOnly = !1, this.autocapitalize = "", this.outlineOpen = !1, this.outlineWidth = 0, this.isUiValid = !0, this.focused = !1, this._validity = Un(), this.validityTransform = null;
  }
  get validity() {
    return this._checkValidity(this.value), this._validity;
  }
  get willValidate() {
    return this.formElement.willValidate;
  }
  get selectionStart() {
    return this.formElement.selectionStart;
  }
  get selectionEnd() {
    return this.formElement.selectionEnd;
  }
  focus() {
    const e = new CustomEvent("focus");
    this.formElement.dispatchEvent(e), this.formElement.focus();
  }
  blur() {
    const e = new CustomEvent("blur");
    this.formElement.dispatchEvent(e), this.formElement.blur();
  }
  select() {
    this.formElement.select();
  }
  setSelectionRange(e, i, n) {
    this.formElement.setSelectionRange(e, i, n);
  }
  update(e) {
    e.has("autoValidate") && this.mdcFoundation && this.mdcFoundation.setValidateOnValueChange(this.autoValidate), e.has("value") && typeof this.value != "string" && (this.value = `${this.value}`), super.update(e);
  }
  /** @soyTemplate */
  render() {
    const e = this.charCounter && this.maxLength !== -1, i = !!this.helper || !!this.validationMessage || e, n = {
      "mdc-text-field--disabled": this.disabled,
      "mdc-text-field--no-label": !this.label,
      "mdc-text-field--filled": !this.outlined,
      "mdc-text-field--outlined": this.outlined,
      "mdc-text-field--with-leading-icon": this.icon,
      "mdc-text-field--with-trailing-icon": this.iconTrailing,
      "mdc-text-field--end-aligned": this.endAligned
    };
    return s`
      <label class="mdc-text-field ${ne(n)}">
        ${this.renderRipple()}
        ${this.outlined ? this.renderOutline() : this.renderLabel()}
        ${this.renderLeadingIcon()}
        ${this.renderPrefix()}
        ${this.renderInput(i)}
        ${this.renderSuffix()}
        ${this.renderTrailingIcon()}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(i, e)}
    `;
  }
  updated(e) {
    e.has("value") && e.get("value") !== void 0 && (this.mdcFoundation.setValue(this.value), this.autoValidate && this.reportValidity());
  }
  /** @soyTemplate */
  renderRipple() {
    return this.outlined ? "" : s`
      <span class="mdc-text-field__ripple"></span>
    `;
  }
  /** @soyTemplate */
  renderOutline() {
    return this.outlined ? s`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>` : "";
  }
  /** @soyTemplate */
  renderLabel() {
    return this.label ? s`
      <span
          .floatingLabelFoundation=${$r(this.label)}
          id="label">${this.label}</span>
    ` : "";
  }
  /** @soyTemplate */
  renderLeadingIcon() {
    return this.icon ? this.renderIcon(this.icon) : "";
  }
  /** @soyTemplate */
  renderTrailingIcon() {
    return this.iconTrailing ? this.renderIcon(this.iconTrailing, !0) : "";
  }
  /** @soyTemplate */
  renderIcon(e, i = !1) {
    return s`<i class="material-icons mdc-text-field__icon ${ne({
      "mdc-text-field__icon--leading": !i,
      "mdc-text-field__icon--trailing": i
    })}">${e}</i>`;
  }
  /** @soyTemplate */
  renderPrefix() {
    return this.prefix ? this.renderAffix(this.prefix) : "";
  }
  /** @soyTemplate */
  renderSuffix() {
    return this.suffix ? this.renderAffix(this.suffix, !0) : "";
  }
  /** @soyTemplate */
  renderAffix(e, i = !1) {
    return s`<span class="mdc-text-field__affix ${ne({
      "mdc-text-field__affix--prefix": !i,
      "mdc-text-field__affix--suffix": i
    })}">
        ${e}</span>`;
  }
  /** @soyTemplate */
  renderInput(e) {
    const i = this.minLength === -1 ? void 0 : this.minLength, n = this.maxLength === -1 ? void 0 : this.maxLength, r = this.autocapitalize ? this.autocapitalize : void 0, a = this.validationMessage && !this.isUiValid, o = this.label ? "label" : void 0, l = e ? "helper-text" : void 0, u = this.focused || this.helperPersistent || a ? "helper-text" : void 0;
    return s`
      <input
          aria-labelledby=${O(o)}
          aria-controls="${O(l)}"
          aria-describedby="${O(u)}"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${Or(this.value)}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${O(i)}"
          maxlength="${O(n)}"
          pattern="${O(this.pattern ? this.pattern : void 0)}"
          min="${O(this.min === "" ? void 0 : this.min)}"
          max="${O(this.max === "" ? void 0 : this.max)}"
          step="${O(this.step === null ? void 0 : this.step)}"
          size="${O(this.size === null ? void 0 : this.size)}"
          name="${O(this.name === "" ? void 0 : this.name)}"
          inputmode="${O(this.inputMode)}"
          autocapitalize="${O(r)}"
          @input="${this.handleInputChange}"
          @focus="${this.onInputFocus}"
          @blur="${this.onInputBlur}">`;
  }
  /** @soyTemplate */
  renderLineRipple() {
    return this.outlined ? "" : s`
      <span .lineRippleFoundation=${Rr()}></span>
    `;
  }
  /** @soyTemplate */
  renderHelperText(e, i) {
    const n = this.validationMessage && !this.isUiValid, r = {
      "mdc-text-field-helper-text--persistent": this.helperPersistent,
      "mdc-text-field-helper-text--validation-msg": n
    }, a = this.focused || this.helperPersistent || n ? void 0 : "true", o = n ? this.validationMessage : this.helper;
    return e ? s`
      <div class="mdc-text-field-helper-line">
        <div id="helper-text"
             aria-hidden="${O(a)}"
             class="mdc-text-field-helper-text ${ne(r)}"
             >${o}</div>
        ${this.renderCharCounter(i)}
      </div>` : "";
  }
  /** @soyTemplate */
  renderCharCounter(e) {
    const i = Math.min(this.value.length, this.maxLength);
    return e ? s`
      <span class="mdc-text-field-character-counter"
            >${i} / ${this.maxLength}</span>` : "";
  }
  onInputFocus() {
    this.focused = !0;
  }
  onInputBlur() {
    this.focused = !1, this.reportValidity();
  }
  checkValidity() {
    const e = this._checkValidity(this.value);
    if (!e) {
      const i = new Event("invalid", { bubbles: !1, cancelable: !0 });
      this.dispatchEvent(i);
    }
    return e;
  }
  reportValidity() {
    const e = this.checkValidity();
    return this.mdcFoundation.setValid(e), this.isUiValid = e, e;
  }
  _checkValidity(e) {
    const i = this.formElement.validity;
    let n = Un(i);
    if (this.validityTransform) {
      const r = this.validityTransform(e, n);
      n = Object.assign(Object.assign({}, n), r), this.mdcFoundation.setUseNativeValidation(!1);
    } else
      this.mdcFoundation.setUseNativeValidation(!0);
    return this._validity = n, this._validity.valid;
  }
  setCustomValidity(e) {
    this.validationMessage = e, this.formElement.setCustomValidity(e);
  }
  handleInputChange() {
    this.value = this.formElement.value;
  }
  createAdapter() {
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.getRootAdapterMethods()), this.getInputAdapterMethods()), this.getLabelAdapterMethods()), this.getLineRippleAdapterMethods()), this.getOutlineAdapterMethods());
  }
  getRootAdapterMethods() {
    return Object.assign({ registerTextFieldInteractionHandler: (e, i) => this.addEventListener(e, i), deregisterTextFieldInteractionHandler: (e, i) => this.removeEventListener(e, i), registerValidationAttributeChangeHandler: (e) => {
      const i = (a) => a.map((o) => o.attributeName).filter((o) => o), n = new MutationObserver((a) => {
        e(i(a));
      }), r = { attributes: !0 };
      return n.observe(this.formElement, r), n;
    }, deregisterValidationAttributeChangeHandler: (e) => e.disconnect() }, Ot(this.mdcRoot));
  }
  getInputAdapterMethods() {
    return {
      getNativeInput: () => this.formElement,
      // since HelperTextFoundation is not used, aria-describedby a11y logic
      // is implemented in render method instead of these adapter methods
      setInputAttr: () => {
      },
      removeInputAttr: () => {
      },
      isFocused: () => this.shadowRoot ? this.shadowRoot.activeElement === this.formElement : !1,
      registerInputInteractionHandler: (e, i) => this.formElement.addEventListener(e, i, { passive: e in Zo }),
      deregisterInputInteractionHandler: (e, i) => this.formElement.removeEventListener(e, i)
    };
  }
  getLabelAdapterMethods() {
    return {
      floatLabel: (e) => this.labelElement && this.labelElement.floatingLabelFoundation.float(e),
      getLabelWidth: () => this.labelElement ? this.labelElement.floatingLabelFoundation.getWidth() : 0,
      hasLabel: () => !!this.labelElement,
      shakeLabel: (e) => this.labelElement && this.labelElement.floatingLabelFoundation.shake(e),
      setLabelRequired: (e) => {
        this.labelElement && this.labelElement.floatingLabelFoundation.setRequired(e);
      }
    };
  }
  getLineRippleAdapterMethods() {
    return {
      activateLineRipple: () => {
        this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.activate();
      },
      deactivateLineRipple: () => {
        this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.deactivate();
      },
      setLineRippleTransformOrigin: (e) => {
        this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.setRippleCenter(e);
      }
    };
  }
  // tslint:disable:ban-ts-ignore
  async getUpdateComplete() {
    var e;
    const i = await super.getUpdateComplete();
    return await ((e = this.outlineElement) === null || e === void 0 ? void 0 : e.updateComplete), i;
  }
  // tslint:enable:ban-ts-ignore
  firstUpdated() {
    var e;
    super.firstUpdated(), this.mdcFoundation.setValidateOnValueChange(this.autoValidate), this.validateOnInitialRender && this.reportValidity(), (e = this.outlineElement) === null || e === void 0 || e.updateComplete.then(() => {
      var i;
      this.outlineWidth = ((i = this.labelElement) === null || i === void 0 ? void 0 : i.floatingLabelFoundation.getWidth()) || 0;
    });
  }
  getOutlineAdapterMethods() {
    return {
      closeOutline: () => this.outlineElement && (this.outlineOpen = !1),
      hasOutline: () => !!this.outlineElement,
      notchOutline: (e) => {
        this.outlineElement && !this.outlineOpen && (this.outlineWidth = e, this.outlineOpen = !0);
      }
    };
  }
  async layout() {
    await this.updateComplete;
    const e = this.labelElement;
    if (!e) {
      this.outlineOpen = !1;
      return;
    }
    const i = !!this.label && !!this.value;
    if (e.floatingLabelFoundation.float(i), !this.outlined)
      return;
    this.outlineOpen = i, await this.updateComplete;
    const n = e.floatingLabelFoundation.getWidth();
    this.outlineOpen && (this.outlineWidth = n, await this.updateComplete);
  }
}
c([
  k(".mdc-text-field")
], $.prototype, "mdcRoot", void 0);
c([
  k("input")
], $.prototype, "formElement", void 0);
c([
  k(".mdc-floating-label")
], $.prototype, "labelElement", void 0);
c([
  k(".mdc-line-ripple")
], $.prototype, "lineRippleElement", void 0);
c([
  k("mwc-notched-outline")
], $.prototype, "outlineElement", void 0);
c([
  k(".mdc-notched-outline__notch")
], $.prototype, "notchElement", void 0);
c([
  p({ type: String })
], $.prototype, "value", void 0);
c([
  p({ type: String })
], $.prototype, "type", void 0);
c([
  p({ type: String })
], $.prototype, "placeholder", void 0);
c([
  p({ type: String }),
  P(function(t, e) {
    e !== void 0 && this.label !== e && this.layout();
  })
], $.prototype, "label", void 0);
c([
  p({ type: String })
], $.prototype, "icon", void 0);
c([
  p({ type: String })
], $.prototype, "iconTrailing", void 0);
c([
  p({ type: Boolean, reflect: !0 })
], $.prototype, "disabled", void 0);
c([
  p({ type: Boolean })
], $.prototype, "required", void 0);
c([
  p({ type: Number })
], $.prototype, "minLength", void 0);
c([
  p({ type: Number })
], $.prototype, "maxLength", void 0);
c([
  p({ type: Boolean, reflect: !0 }),
  P(function(t, e) {
    e !== void 0 && this.outlined !== e && this.layout();
  })
], $.prototype, "outlined", void 0);
c([
  p({ type: String })
], $.prototype, "helper", void 0);
c([
  p({ type: Boolean })
], $.prototype, "validateOnInitialRender", void 0);
c([
  p({ type: String })
], $.prototype, "validationMessage", void 0);
c([
  p({ type: Boolean })
], $.prototype, "autoValidate", void 0);
c([
  p({ type: String })
], $.prototype, "pattern", void 0);
c([
  p({ type: String })
], $.prototype, "min", void 0);
c([
  p({ type: String })
], $.prototype, "max", void 0);
c([
  p({ type: Number })
], $.prototype, "step", void 0);
c([
  p({ type: Number })
], $.prototype, "size", void 0);
c([
  p({ type: Boolean })
], $.prototype, "helperPersistent", void 0);
c([
  p({ type: Boolean })
], $.prototype, "charCounter", void 0);
c([
  p({ type: Boolean })
], $.prototype, "endAligned", void 0);
c([
  p({ type: String })
], $.prototype, "prefix", void 0);
c([
  p({ type: String })
], $.prototype, "suffix", void 0);
c([
  p({ type: String })
], $.prototype, "name", void 0);
c([
  p({ type: String })
], $.prototype, "inputMode", void 0);
c([
  p({ type: Boolean })
], $.prototype, "readOnly", void 0);
c([
  p({ type: String })
], $.prototype, "autocapitalize", void 0);
c([
  D()
], $.prototype, "outlineOpen", void 0);
c([
  D()
], $.prototype, "outlineWidth", void 0);
c([
  D()
], $.prototype, "isUiValid", void 0);
c([
  D()
], $.prototype, "focused", void 0);
c([
  We({ passive: !0 })
], $.prototype, "handleInputChange", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const zr = j`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{content:none}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38) )}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-error-color, var(--mdc-theme-error, #b00020) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let fi = class extends $ {
};
fi.styles = [zr];
fi = c([
  z("mwc-textfield")
], fi);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ji = class extends fe {
};
ji.styles = [bn];
ji = c([
  z("mwc-list-item")
], ji);
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
var L = {
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
}, ke = /* @__PURE__ */ new Set();
ke.add(L.BACKSPACE);
ke.add(L.ENTER);
ke.add(L.SPACEBAR);
ke.add(L.PAGE_UP);
ke.add(L.PAGE_DOWN);
ke.add(L.END);
ke.add(L.HOME);
ke.add(L.ARROW_LEFT);
ke.add(L.ARROW_UP);
ke.add(L.ARROW_RIGHT);
ke.add(L.ARROW_DOWN);
ke.add(L.DELETE);
ke.add(L.ESCAPE);
ke.add(L.TAB);
var Le = {
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
}, De = /* @__PURE__ */ new Map();
De.set(Le.BACKSPACE, L.BACKSPACE);
De.set(Le.ENTER, L.ENTER);
De.set(Le.SPACEBAR, L.SPACEBAR);
De.set(Le.PAGE_UP, L.PAGE_UP);
De.set(Le.PAGE_DOWN, L.PAGE_DOWN);
De.set(Le.END, L.END);
De.set(Le.HOME, L.HOME);
De.set(Le.ARROW_LEFT, L.ARROW_LEFT);
De.set(Le.ARROW_UP, L.ARROW_UP);
De.set(Le.ARROW_RIGHT, L.ARROW_RIGHT);
De.set(Le.ARROW_DOWN, L.ARROW_DOWN);
De.set(Le.DELETE, L.DELETE);
De.set(Le.ESCAPE, L.ESCAPE);
De.set(Le.TAB, L.TAB);
var mt = /* @__PURE__ */ new Set();
mt.add(L.PAGE_UP);
mt.add(L.PAGE_DOWN);
mt.add(L.END);
mt.add(L.HOME);
mt.add(L.ARROW_LEFT);
mt.add(L.ARROW_UP);
mt.add(L.ARROW_RIGHT);
mt.add(L.ARROW_DOWN);
function re(t) {
  var e = t.key;
  if (ke.has(e))
    return e;
  var i = De.get(t.keyCode);
  return i || L.UNKNOWN;
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
var ot, Ke, X = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
ot = {}, ot["" + X.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", ot["" + X.LIST_ITEM_CLASS] = "mdc-list-item", ot["" + X.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", ot["" + X.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", ot["" + X.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", ot["" + X.ROOT] = "mdc-list";
var Tt = (Ke = {}, Ke["" + X.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", Ke["" + X.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", Ke["" + X.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", Ke["" + X.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", Ke["" + X.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", Ke["" + X.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", Ke["" + X.ROOT] = "mdc-deprecated-list", Ke), li = {
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
    .` + X.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + X.LIST_ITEM_CLASS + ` a,
    .` + Tt[X.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Tt[X.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + X.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + X.LIST_ITEM_CLASS + ` a,
    .` + X.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + X.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Tt[X.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Tt[X.LIST_ITEM_CLASS] + ` a,
    .` + Tt[X.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Tt[X.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, Ae = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ki = (t, e) => t - e, Yo = (t, e) => {
  const i = Array.from(t), n = Array.from(e), r = { added: [], removed: [] }, a = i.sort(Ki), o = n.sort(Ki);
  let l = 0, u = 0;
  for (; l < a.length || u < o.length; ) {
    const m = a[l], f = o[u];
    if (m === f) {
      l++, u++;
      continue;
    }
    if (m !== void 0 && (f === void 0 || m < f)) {
      r.removed.push(m), l++;
      continue;
    }
    if (f !== void 0 && (m === void 0 || f < m)) {
      r.added.push(f), u++;
      continue;
    }
  }
  return r;
}, Qo = ["input", "button", "textarea", "select"];
function Ut(t) {
  return t instanceof Set;
}
const Ni = (t) => {
  const e = t === Ae.UNSET_INDEX ? /* @__PURE__ */ new Set() : t;
  return Ut(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class yn extends Oe {
  constructor(e) {
    super(Object.assign(Object.assign({}, yn.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = Ae.UNSET_INDEX, this.focusedItemIndex_ = Ae.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return li;
  }
  static get numbers() {
    return Ae;
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
      if (!Ut(i)) {
        const n = i === Ae.UNSET_INDEX;
        this.selectedIndex_ = n ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
    } else if (Ut(i))
      if (i.size) {
        const n = Array.from(i).sort(Ki);
        this.selectedIndex_ = n[0];
      } else
        this.selectedIndex_ = Ae.UNSET_INDEX;
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
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(Ni(e)) : this.setSingleSelectionAtIndex_(e));
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
    const r = re(e) === "ArrowLeft", a = re(e) === "ArrowUp", o = re(e) === "ArrowRight", l = re(e) === "ArrowDown", u = re(e) === "Home", m = re(e) === "End", f = re(e) === "Enter", y = re(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      a || m ? (e.preventDefault(), this.focusLastElement()) : (l || u) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let g = this.adapter.getFocusedElementIndex();
    if (g === -1 && (g = n, g < 0))
      return;
    let b;
    if (this.isVertical_ && l || !this.isVertical_ && o)
      this.preventDefaultEvent(e), b = this.focusNextElement(g);
    else if (this.isVertical_ && a || !this.isVertical_ && r)
      this.preventDefaultEvent(e), b = this.focusPrevElement(g);
    else if (u)
      this.preventDefaultEvent(e), b = this.focusFirstElement();
    else if (m)
      this.preventDefaultEvent(e), b = this.focusLastElement();
    else if ((f || y) && i) {
      const x = e.target;
      if (x && x.tagName === "A" && f)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(g, !0);
    }
    this.focusedItemIndex_ = g, b !== void 0 && (this.setTabindexAtIndex_(b), this.focusedItemIndex_ = b);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, i, n) {
    e !== Ae.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, i, n), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
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
    Qo.indexOf(n) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, i = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== Ae.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), i && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, i = !0) {
    const n = Ni(this.selectedIndex_), r = Yo(n, e);
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
    this.selectedIndex_ === Ae.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, li.ARIA_CURRENT));
    const i = this.ariaCurrentAttrValue_ !== null, n = i ? li.ARIA_CURRENT : li.ARIA_SELECTED;
    this.selectedIndex_ !== Ae.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, n, "false");
    const r = i ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, n, r);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === Ae.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== Ae.UNSET_INDEX ? e = this.selectedIndex_ : Ut(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
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
      return e === Ae.UNSET_INDEX || this.isIndexInRange_(e);
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
    this.isMulti_ && (r = /* @__PURE__ */ new Set([e])), this.isIndexValid_(r) && (this.isMulti_ ? this.toggleMultiAtIndex(e, n, i) : i || n ? this.setSingleSelectionAtIndex_(e, i) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(Ae.UNSET_INDEX), i && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, i, n = !0) {
    let r = !1;
    i === void 0 ? r = !this.adapter.getSelectedStateForElementIndex(e) : r = i;
    const a = Ni(this.selectedIndex_);
    r ? a.add(e) : a.delete(e), this.setMultiSelectionAtIndex_(a, n);
  }
}
function Jo(t, e = 50) {
  let i;
  return function(n = !0) {
    clearTimeout(i), i = setTimeout(() => {
      t(n);
    }, e);
  };
}
const di = (t) => t.hasAttribute("mwc-list-item");
function el() {
  const t = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), t();
}
class Te extends ct {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = yn, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = Jo(this.layout.bind(this));
    this.debouncedLayout = (i = !0) => {
      el.call(this), e(i);
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
    for (const o of i)
      di(o) && (n.push(o), o._managingList = this), o.hasAttribute("divider") && !o.hasAttribute("role") && o.setAttribute("role", "separator");
    this.items_ = n;
    const r = /* @__PURE__ */ new Set();
    if (this.items_.forEach((o, l) => {
      this.itemRoles ? o.setAttribute("role", this.itemRoles) : o.removeAttribute("role"), o.selected && r.add(l);
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
    const e = this.index;
    if (!Ut(e))
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
    return s`
      <!-- @ts-ignore -->
      <ul
          tabindex=${n}
          role="${O(e)}"
          aria-label="${O(i)}"
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
    return this.emptyMessage !== void 0 && i.length === 0 ? s`
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
      const i = this.getIndexOfTarget(e), n = e.target, r = di(n);
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
      if (_r(r) && di(r) && (a = i.indexOf(r)), a !== -1)
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
      isFocusInsideList: () => Sr(this),
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
    const e = pn();
    if (!e.length)
      return -1;
    for (let i = e.length - 1; i >= 0; i--) {
      const n = e[i];
      if (di(n))
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
c([
  p({ type: String })
], Te.prototype, "emptyMessage", void 0);
c([
  k(".mdc-deprecated-list")
], Te.prototype, "mdcRoot", void 0);
c([
  un("", !0, "*")
], Te.prototype, "assignedElements", void 0);
c([
  un("", !0, '[tabindex="0"]')
], Te.prototype, "tabbableElements", void 0);
c([
  p({ type: Boolean }),
  P(function(t) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(t);
  })
], Te.prototype, "activatable", void 0);
c([
  p({ type: Boolean }),
  P(function(t, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(t), e !== void 0 && this.layout();
  })
], Te.prototype, "multi", void 0);
c([
  p({ type: Boolean }),
  P(function(t) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(t);
  })
], Te.prototype, "wrapFocus", void 0);
c([
  p({ type: String }),
  P(function(t, e) {
    e !== void 0 && this.updateItems();
  })
], Te.prototype, "itemRoles", void 0);
c([
  p({ type: String })
], Te.prototype, "innerRole", void 0);
c([
  p({ type: String })
], Te.prototype, "innerAriaLabel", void 0);
c([
  p({ type: Boolean })
], Te.prototype, "rootTabbable", void 0);
c([
  p({ type: Boolean, reflect: !0 }),
  P(function(t) {
    var e, i;
    if (t) {
      const n = (i = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && i !== void 0 ? i : null;
      this.previousTabindex = n, n && n.setAttribute("tabindex", "-1");
    } else !t && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], Te.prototype, "noninteractive", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const tl = j`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let bi = class extends Te {
};
bi.styles = [tl];
bi = c([
  z("mwc-list")
], bi);
var il = Object.defineProperty, nl = Object.getOwnPropertyDescriptor, Ct = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? nl(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && il(e, i, r), r;
};
function Xi(t) {
  return !t.closest("filtered-list") || !t.parentElement || t.parentElement instanceof Ve ? t : Xi(t.parentElement);
}
function rl(t, e) {
  const i = t.innerText + `
`, n = Array.from(t.children).map((l) => l.innerText).join(`
`), r = t.value, a = (i + n + r).toUpperCase(), o = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  o.length === 1 && o[0] === "" || o.every((l) => new RegExp(
    `*${l}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(a)) ? Xi(t).classList.remove("hidden") : Xi(t).classList.add("hidden");
}
let Ve = class extends Te {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((t) => t instanceof Lt);
  }
  get isAllSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof Lt).every((t) => t.selected);
  }
  get isSomeSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof Lt).some((t) => t.selected);
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
      (t) => rl(t, this.searchField.value)
    );
  }
  onListItemConnected(t) {
    super.onListItemConnected(t), this.requestUpdate();
  }
  update(t) {
    super.update(t), this.onFilterInput();
  }
  renderCheckAll() {
    return this.existCheckListItem && !this.disableCheckAll ? s`<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
      this.onCheckAll();
    }}
          ></mwc-checkbox
        ></mwc-formfield>` : s``;
  }
  render() {
    return s`<div id="tfcontainer">
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
Ve.styles = j`
    ${xr(bi.styles)}

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
Ct([
  p({ type: String })
], Ve.prototype, "searchFieldLabel", 2);
Ct([
  p({ type: Boolean })
], Ve.prototype, "disableCheckAll", 2);
Ct([
  D()
], Ve.prototype, "existCheckListItem", 1);
Ct([
  D()
], Ve.prototype, "isAllSelected", 1);
Ct([
  D()
], Ve.prototype, "isSomeSelected", 1);
Ct([
  k("mwc-textfield")
], Ve.prototype, "searchField", 2);
Ve = Ct([
  z("filtered-list")
], Ve);
var al = Object.defineProperty, ol = Object.getOwnPropertyDescriptor, ti = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? ol(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && al(e, i, r), r;
};
let wt = class extends Ve {
  constructor() {
    super(...arguments), this.disabled = !1;
  }
  toggleList() {
    this.filterDialog.show();
  }
  onClosing() {
    const t = [];
    this.selected && (this.selected instanceof Array ? this.selected.forEach((e) => t.push(e.value)) : t.push(this.selected.value), this.dispatchEvent(ll(t)));
  }
  render() {
    return s`
      <mwc-icon-button
        icon="${this.icon}"
        @click="${this.toggleList}"
        ?disabled="${this.disabled}"
      >
        <slot name="icon"></slot>
      </mwc-icon-button>
      <mwc-dialog
        id="filterDialog"
        heading="${this.header ? this.header : d("filter")}"
        scrimClickAction=""
        @closing="${() => this.onClosing()}"
      >
        ${super.render()}
        <mwc-button slot="primaryAction" dialogAction="close">
          ${d("close")}
        </mwc-button>
      </mwc-dialog>
    `;
  }
};
wt.styles = j`
    ${xr(Ve.styles)}

    mwc-icon-button {
      color: var(--mdc-theme-on-surface);
    }

    mwc-dialog {
      --mdc-dialog-max-height: calc(100vh - 150px);
    }
  `;
ti([
  p()
], wt.prototype, "header", 2);
ti([
  p()
], wt.prototype, "icon", 2);
ti([
  p({ type: Boolean })
], wt.prototype, "disabled", 2);
ti([
  k("#filterDialog")
], wt.prototype, "filterDialog", 2);
wt = ti([
  z("oscd-filter-button")
], wt);
function ll(t, e) {
  return new CustomEvent("selected-items-changed", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { selectedItems: t, ...e?.detail }
  });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const dl = j`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;
let Zi = class extends Pe {
  /** @soyTemplate */
  render() {
    return s`<slot></slot>`;
  }
};
Zi.styles = [dl];
Zi = c([
  z("mwc-icon")
], Zi);
var sl = Object.defineProperty, cl = Object.getOwnPropertyDescriptor, Vt = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? cl(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && sl(e, i, r), r;
};
function Fr(t, e) {
  const i = t.nodeType === Node.ELEMENT_NODE ? t.closest(e) : null;
  if (i) return i;
  const n = t.getRootNode();
  return n instanceof ShadowRoot ? Fr(n.host, e) : null;
}
let st = class extends Pe {
  constructor() {
    super(...arguments), this.secondary = !1, this.highlighted = !1, this.level = 1;
  }
  async firstUpdated() {
    this.tabIndex = 0;
    const t = Fr(this.parentNode, "action-pane");
    t && (this.level = t.level + 1), this.level = Math.floor(this.level);
  }
  renderHeader() {
    const t = s`<span
        ><slot name="icon"
          >${this.icon ? s`<mwc-icon>${this.icon}</mwc-icon>` : W}</slot
        ></span
      >
      ${this.label ?? W}
      <nav><slot name="action"></slot></nav>`, e = Math.floor(Math.max(this.level, 1)), i = typeof this.label == "string" ? this.label : "";
    switch (e) {
      case 1:
        return s`<h1 title="${i}">${t}</h1>`;
      case 2:
        return s`<h2 title="${i}">${t}</h2>`;
      case 3:
        return s`<h3 title="${i}">${t}</h3>`;
      default:
        return s`<h4 title="${i}">${t}</h4>`;
    }
  }
  render() {
    return s`<section
      class="${ne({
      secondary: this.secondary,
      highlighted: this.highlighted,
      contrasted: this.level % 2 === 0
    })}"
    >
      ${this.renderHeader()}
      <div><slot></slot></div>
    </section>`;
  }
};
st.styles = j`
    :host {
      outline: none;
    }

    :host(:focus-within) section {
      box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
      outline-width: 4px;
      transition: all 250ms linear;
    }

    section {
      background-color: var(--mdc-theme-surface);
      transition: all 200ms linear;
      outline-style: solid;
      margin: 0px;
      outline-width: 0px;
      outline-color: var(--mdc-theme-primary);
    }

    section.secondary {
      outline-color: var(--mdc-theme-secondary);
    }

    section > div {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 8px 12px 16px;
      clear: right;
    }

    .highlighted {
      outline-style: dotted;
      outline-width: 2px;
    }

    :host(:focus-within) .highlighted {
      outline-style: solid;
    }

    .contrasted {
      background-color: var(--mdc-theme-on-primary);
    }

    h1,
    h2,
    h3,
    h4 {
      color: var(--mdc-theme-on-surface);
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      overflow: clip visible;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0px;
      line-height: 52px;
      padding-left: 0.3em;
    }

    nav {
      float: right;
    }

    mwc-icon {
      vertical-align: middle;
      position: relative;
      top: -0.1em;
      --mdc-icon-size: 1em;
    }

    ::slotted([slot='icon']) {
      vertical-align: middle;
      position: relative;
      top: -0.1em;
      --mdc-icon-size: 1em;
    }
  `;
Vt([
  p({ type: String })
], st.prototype, "label", 2);
Vt([
  p({ type: String })
], st.prototype, "icon", 2);
Vt([
  p({ type: Boolean })
], st.prototype, "secondary", 2);
Vt([
  p({ type: Boolean })
], st.prototype, "highlighted", 2);
Vt([
  p({ type: Number })
], st.prototype, "level", 2);
st = Vt([
  z("action-pane")
], st);
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
var ul = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, ml = {
  CLOSED_EVENT: "MDCMenuSurface:closed",
  CLOSING_EVENT: "MDCMenuSurface:closing",
  OPENED_EVENT: "MDCMenuSurface:opened",
  FOCUSABLE_ELEMENTS: [
    "button:not(:disabled)",
    '[href]:not([aria-disabled="true"])',
    "input:not(:disabled)",
    "select:not(:disabled)",
    "textarea:not(:disabled)",
    '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'
  ].join(", ")
}, si = {
  /** Total duration of menu-surface open animation. */
  TRANSITION_OPEN_DURATION: 120,
  /** Total duration of menu-surface close animation. */
  TRANSITION_CLOSE_DURATION: 75,
  /** Margin left to the edge of the viewport when menu-surface is at maximum possible height. Also used as a viewport margin. */
  MARGIN_TO_EDGE: 32,
  /** Ratio of anchor width to menu-surface width for switching from corner positioning to center positioning. */
  ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67
}, ie;
(function(t) {
  t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL";
})(ie || (ie = {}));
var Ee;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})(Ee || (Ee = {}));
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
var Vr = (
  /** @class */
  function(t) {
    Me(e, t);
    function e(i) {
      var n = t.call(this, Z(Z({}, e.defaultAdapter), i)) || this;
      return n.isSurfaceOpen = !1, n.isQuickOpen = !1, n.isHoistedElement = !1, n.isFixedPosition = !1, n.isHorizontallyCenteredOnViewport = !1, n.maxHeight = 0, n.openAnimationEndTimerId = 0, n.closeAnimationEndTimerId = 0, n.animationRequestId = 0, n.anchorCorner = Ee.TOP_START, n.originCorner = Ee.TOP_START, n.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, n.position = { x: 0, y: 0 }, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ul;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ml;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return si;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return Ee;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          hasAnchor: function() {
            return !1;
          },
          isElementInContainer: function() {
            return !1;
          },
          isFocused: function() {
            return !1;
          },
          isRtl: function() {
            return !1;
          },
          getInnerDimensions: function() {
            return { height: 0, width: 0 };
          },
          getAnchorDimensions: function() {
            return null;
          },
          getWindowDimensions: function() {
            return { height: 0, width: 0 };
          },
          getBodyDimensions: function() {
            return { height: 0, width: 0 };
          },
          getWindowScroll: function() {
            return { x: 0, y: 0 };
          },
          setPosition: function() {
          },
          setMaxHeight: function() {
          },
          setTransformOrigin: function() {
          },
          saveFocus: function() {
          },
          restoreFocus: function() {
          },
          notifyClose: function() {
          },
          notifyOpen: function() {
          },
          notifyClosing: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var i = e.cssClasses, n = i.ROOT, r = i.OPEN;
      if (!this.adapter.hasClass(n))
        throw new Error(n + " class required in root element.");
      this.adapter.hasClass(r) && (this.isSurfaceOpen = !0);
    }, e.prototype.destroy = function() {
      clearTimeout(this.openAnimationEndTimerId), clearTimeout(this.closeAnimationEndTimerId), cancelAnimationFrame(this.animationRequestId);
    }, e.prototype.setAnchorCorner = function(i) {
      this.anchorCorner = i;
    }, e.prototype.flipCornerHorizontally = function() {
      this.originCorner = this.originCorner ^ ie.RIGHT;
    }, e.prototype.setAnchorMargin = function(i) {
      this.anchorMargin.top = i.top || 0, this.anchorMargin.right = i.right || 0, this.anchorMargin.bottom = i.bottom || 0, this.anchorMargin.left = i.left || 0;
    }, e.prototype.setIsHoisted = function(i) {
      this.isHoistedElement = i;
    }, e.prototype.setFixedPosition = function(i) {
      this.isFixedPosition = i;
    }, e.prototype.setAbsolutePosition = function(i, n) {
      this.position.x = this.isFinite(i) ? i : 0, this.position.y = this.isFinite(n) ? n : 0;
    }, e.prototype.setIsHorizontallyCenteredOnViewport = function(i) {
      this.isHorizontallyCenteredOnViewport = i;
    }, e.prototype.setQuickOpen = function(i) {
      this.isQuickOpen = i;
    }, e.prototype.setMaxHeight = function(i) {
      this.maxHeight = i;
    }, e.prototype.isOpen = function() {
      return this.isSurfaceOpen;
    }, e.prototype.open = function() {
      var i = this;
      this.isSurfaceOpen || (this.adapter.saveFocus(), this.isQuickOpen ? (this.isSurfaceOpen = !0, this.adapter.addClass(e.cssClasses.OPEN), this.dimensions = this.adapter.getInnerDimensions(), this.autoposition(), this.adapter.notifyOpen()) : (this.adapter.addClass(e.cssClasses.ANIMATING_OPEN), this.animationRequestId = requestAnimationFrame(function() {
        i.dimensions = i.adapter.getInnerDimensions(), i.autoposition(), i.adapter.addClass(e.cssClasses.OPEN), i.openAnimationEndTimerId = setTimeout(function() {
          i.openAnimationEndTimerId = 0, i.adapter.removeClass(e.cssClasses.ANIMATING_OPEN), i.adapter.notifyOpen();
        }, si.TRANSITION_OPEN_DURATION);
      }), this.isSurfaceOpen = !0));
    }, e.prototype.close = function(i) {
      var n = this;
      if (i === void 0 && (i = !1), !!this.isSurfaceOpen) {
        if (this.adapter.notifyClosing(), this.isQuickOpen) {
          this.isSurfaceOpen = !1, i || this.maybeRestoreFocus(), this.adapter.removeClass(e.cssClasses.OPEN), this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), this.adapter.notifyClose();
          return;
        }
        this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED), requestAnimationFrame(function() {
          n.adapter.removeClass(e.cssClasses.OPEN), n.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), n.closeAnimationEndTimerId = setTimeout(function() {
            n.closeAnimationEndTimerId = 0, n.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED), n.adapter.notifyClose();
          }, si.TRANSITION_CLOSE_DURATION);
        }), this.isSurfaceOpen = !1, i || this.maybeRestoreFocus();
      }
    }, e.prototype.handleBodyClick = function(i) {
      var n = i.target;
      this.adapter.isElementInContainer(n) || this.close();
    }, e.prototype.handleKeydown = function(i) {
      var n = i.keyCode, r = i.key, a = r === "Escape" || n === 27;
      a && this.close();
    }, e.prototype.autoposition = function() {
      var i;
      this.measurements = this.getAutoLayoutmeasurements();
      var n = this.getoriginCorner(), r = this.getMenuSurfaceMaxHeight(n), a = this.hasBit(n, ie.BOTTOM) ? "bottom" : "top", o = this.hasBit(n, ie.RIGHT) ? "right" : "left", l = this.getHorizontalOriginOffset(n), u = this.getVerticalOriginOffset(n), m = this.measurements, f = m.anchorSize, y = m.surfaceSize, g = (i = {}, i[o] = l, i[a] = u, i);
      f.width / y.width > si.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (o = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(g), this.adapter.setTransformOrigin(o + " " + a), this.adapter.setPosition(g), this.adapter.setMaxHeight(r ? r + "px" : ""), this.hasBit(n, ie.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
    }, e.prototype.getAutoLayoutmeasurements = function() {
      var i = this.adapter.getAnchorDimensions(), n = this.adapter.getBodyDimensions(), r = this.adapter.getWindowDimensions(), a = this.adapter.getWindowScroll();
      return i || (i = {
        top: this.position.y,
        right: this.position.x,
        bottom: this.position.y,
        left: this.position.x,
        width: 0,
        height: 0
      }), {
        anchorSize: i,
        bodySize: n,
        surfaceSize: this.dimensions,
        viewportDistance: {
          // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
          top: i.top,
          right: r.width - i.right,
          bottom: r.height - i.bottom,
          left: i.left
          // tslint:enable:object-literal-sort-keys
        },
        viewportSize: r,
        windowScroll: a
      };
    }, e.prototype.getoriginCorner = function() {
      var i = this.originCorner, n = this.measurements, r = n.viewportDistance, a = n.anchorSize, o = n.surfaceSize, l = e.numbers.MARGIN_TO_EDGE, u = this.hasBit(this.anchorCorner, ie.BOTTOM), m, f;
      u ? (m = r.top - l + this.anchorMargin.bottom, f = r.bottom - l - this.anchorMargin.bottom) : (m = r.top - l + this.anchorMargin.top, f = r.bottom - l + a.height - this.anchorMargin.top);
      var y = f - o.height > 0;
      !y && m > f && (i = this.setBit(i, ie.BOTTOM));
      var g = this.adapter.isRtl(), b = this.hasBit(this.anchorCorner, ie.FLIP_RTL), x = this.hasBit(this.anchorCorner, ie.RIGHT) || this.hasBit(i, ie.RIGHT), _ = !1;
      g && b ? _ = !x : _ = x;
      var I, S;
      _ ? (I = r.left + a.width + this.anchorMargin.right, S = r.right - this.anchorMargin.right) : (I = r.left + this.anchorMargin.left, S = r.right + a.width - this.anchorMargin.left);
      var w = I - o.width > 0, T = S - o.width > 0, N = this.hasBit(i, ie.FLIP_RTL) && this.hasBit(i, ie.RIGHT);
      return T && N && g || !w && N ? i = this.unsetBit(i, ie.RIGHT) : (w && _ && g || w && !_ && x || !T && I >= S) && (i = this.setBit(i, ie.RIGHT)), i;
    }, e.prototype.getMenuSurfaceMaxHeight = function(i) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var n = this.measurements.viewportDistance, r = 0, a = this.hasBit(i, ie.BOTTOM), o = this.hasBit(this.anchorCorner, ie.BOTTOM), l = e.numbers.MARGIN_TO_EDGE;
      return a ? (r = n.top + this.anchorMargin.top - l, o || (r += this.measurements.anchorSize.height)) : (r = n.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - l, o && (r -= this.measurements.anchorSize.height)), r;
    }, e.prototype.getHorizontalOriginOffset = function(i) {
      var n = this.measurements.anchorSize, r = this.hasBit(i, ie.RIGHT), a = this.hasBit(this.anchorCorner, ie.RIGHT);
      if (r) {
        var o = a ? n.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? o - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : o;
      }
      return a ? n.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(i) {
      var n = this.measurements.anchorSize, r = this.hasBit(i, ie.BOTTOM), a = this.hasBit(this.anchorCorner, ie.BOTTOM), o = 0;
      return r ? o = a ? n.height - this.anchorMargin.top : -this.anchorMargin.bottom : o = a ? n.height + this.anchorMargin.bottom : this.anchorMargin.top, o;
    }, e.prototype.adjustPositionForHoistedElement = function(i) {
      var n, r, a = this.measurements, o = a.windowScroll, l = a.viewportDistance, u = a.surfaceSize, m = a.viewportSize, f = Object.keys(i);
      try {
        for (var y = Xe(f), g = y.next(); !g.done; g = y.next()) {
          var b = g.value, x = i[b] || 0;
          if (this.isHorizontallyCenteredOnViewport && (b === "left" || b === "right")) {
            i[b] = (m.width - u.width) / 2;
            continue;
          }
          x += l[b], this.isFixedPosition || (b === "top" ? x += o.y : b === "bottom" ? x -= o.y : b === "left" ? x += o.x : x -= o.x), i[b] = x;
        }
      } catch (_) {
        n = { error: _ };
      } finally {
        try {
          g && !g.done && (r = y.return) && r.call(y);
        } finally {
          if (n) throw n.error;
        }
      }
    }, e.prototype.maybeRestoreFocus = function() {
      var i = this.adapter.isFocused(), n = document.activeElement && this.adapter.isElementInContainer(document.activeElement);
      (i || n) && this.adapter.restoreFocus();
    }, e.prototype.hasBit = function(i, n) {
      return !!(i & n);
    }, e.prototype.setBit = function(i, n) {
      return i | n;
    }, e.prototype.unsetBit = function(i, n) {
      return i ^ n;
    }, e.prototype.isFinite = function(i) {
      return typeof i == "number" && isFinite(i);
    }, e;
  }(Oe)
);
const pl = {
  TOP_LEFT: Ee.TOP_LEFT,
  TOP_RIGHT: Ee.TOP_RIGHT,
  BOTTOM_LEFT: Ee.BOTTOM_LEFT,
  BOTTOM_RIGHT: Ee.BOTTOM_RIGHT,
  TOP_START: Ee.TOP_START,
  TOP_END: Ee.TOP_END,
  BOTTOM_START: Ee.BOTTOM_START,
  BOTTOM_END: Ee.BOTTOM_END
};
class ce extends ct {
  constructor() {
    super(...arguments), this.mdcFoundationClass = Vr, this.absolute = !1, this.fullwidth = !1, this.fixed = !1, this.x = null, this.y = null, this.quick = !1, this.open = !1, this.stayOpenOnBodyClick = !1, this.bitwiseCorner = Ee.TOP_START, this.previousMenuCorner = null, this.menuCorner = "START", this.corner = "TOP_START", this.styleTop = "", this.styleLeft = "", this.styleRight = "", this.styleBottom = "", this.styleMaxHeight = "", this.styleTransformOrigin = "", this.anchor = null, this.previouslyFocused = null, this.previousAnchor = null, this.onBodyClickBound = () => {
    };
  }
  render() {
    const e = {
      "mdc-menu-surface--fixed": this.fixed,
      "mdc-menu-surface--fullwidth": this.fullwidth
    }, i = {
      top: this.styleTop,
      left: this.styleLeft,
      right: this.styleRight,
      bottom: this.styleBottom,
      "max-height": this.styleMaxHeight,
      "transform-origin": this.styleTransformOrigin
    };
    return s`
      <div
          class="mdc-menu-surface ${ne(e)}"
          style="${kr(i)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Ot(this.mdcRoot)), { hasAnchor: () => !!this.anchor, notifyClose: () => {
      const e = { bubbles: !0, composed: !0 }, i = new CustomEvent("closed", e);
      this.open = !1, this.mdcRoot.dispatchEvent(i);
    }, notifyClosing: () => {
      const e = { bubbles: !0, composed: !0 }, i = new CustomEvent("closing", e);
      this.mdcRoot.dispatchEvent(i);
    }, notifyOpen: () => {
      const e = { bubbles: !0, composed: !0 }, i = new CustomEvent("opened", e);
      this.open = !0, this.mdcRoot.dispatchEvent(i);
    }, isElementInContainer: () => !1, isRtl: () => this.mdcRoot ? getComputedStyle(this.mdcRoot).direction === "rtl" : !1, setTransformOrigin: (e) => {
      this.mdcRoot && (this.styleTransformOrigin = e);
    }, isFocused: () => Sr(this), saveFocus: () => {
      const e = pn(), i = e.length;
      i || (this.previouslyFocused = null), this.previouslyFocused = e[i - 1];
    }, restoreFocus: () => {
      this.previouslyFocused && "focus" in this.previouslyFocused && this.previouslyFocused.focus();
    }, getInnerDimensions: () => {
      const e = this.mdcRoot;
      return e ? { width: e.offsetWidth, height: e.offsetHeight } : { width: 0, height: 0 };
    }, getAnchorDimensions: () => {
      const e = this.anchor;
      return e ? e.getBoundingClientRect() : null;
    }, getBodyDimensions: () => ({
      width: document.body.clientWidth,
      height: document.body.clientHeight
    }), getWindowDimensions: () => ({
      width: window.innerWidth,
      height: window.innerHeight
    }), getWindowScroll: () => ({
      x: window.pageXOffset,
      y: window.pageYOffset
    }), setPosition: (e) => {
      this.mdcRoot && (this.styleLeft = "left" in e ? `${e.left}px` : "", this.styleRight = "right" in e ? `${e.right}px` : "", this.styleTop = "top" in e ? `${e.top}px` : "", this.styleBottom = "bottom" in e ? `${e.bottom}px` : "");
    }, setMaxHeight: async (e) => {
      this.mdcRoot && (this.styleMaxHeight = e, await this.updateComplete, this.styleMaxHeight = `var(--mdc-menu-max-height, ${e})`);
    } });
  }
  onKeydown(e) {
    this.mdcFoundation && this.mdcFoundation.handleKeydown(e);
  }
  onBodyClick(e) {
    if (this.stayOpenOnBodyClick)
      return;
    e.composedPath().indexOf(this) === -1 && this.close();
  }
  registerBodyClick() {
    this.onBodyClickBound = this.onBodyClick.bind(this), document.body.addEventListener("click", this.onBodyClickBound, { passive: !0, capture: !0 });
  }
  deregisterBodyClick() {
    document.body.removeEventListener("click", this.onBodyClickBound, { capture: !0 });
  }
  close() {
    this.open = !1;
  }
  show() {
    this.open = !0;
  }
}
c([
  k(".mdc-menu-surface")
], ce.prototype, "mdcRoot", void 0);
c([
  k("slot")
], ce.prototype, "slotElement", void 0);
c([
  p({ type: Boolean }),
  P(function(t) {
    this.mdcFoundation && !this.fixed && this.mdcFoundation.setIsHoisted(t);
  })
], ce.prototype, "absolute", void 0);
c([
  p({ type: Boolean })
], ce.prototype, "fullwidth", void 0);
c([
  p({ type: Boolean }),
  P(function(t) {
    this.mdcFoundation && !this.absolute && this.mdcFoundation.setFixedPosition(t);
  })
], ce.prototype, "fixed", void 0);
c([
  p({ type: Number }),
  P(function(t) {
    this.mdcFoundation && this.y !== null && t !== null && (this.mdcFoundation.setAbsolutePosition(t, this.y), this.mdcFoundation.setAnchorMargin({ left: t, top: this.y, right: -t, bottom: this.y }));
  })
], ce.prototype, "x", void 0);
c([
  p({ type: Number }),
  P(function(t) {
    this.mdcFoundation && this.x !== null && t !== null && (this.mdcFoundation.setAbsolutePosition(this.x, t), this.mdcFoundation.setAnchorMargin({ left: this.x, top: t, right: -this.x, bottom: t }));
  })
], ce.prototype, "y", void 0);
c([
  p({ type: Boolean }),
  P(function(t) {
    this.mdcFoundation && this.mdcFoundation.setQuickOpen(t);
  })
], ce.prototype, "quick", void 0);
c([
  p({ type: Boolean, reflect: !0 }),
  P(function(t, e) {
    this.mdcFoundation && (t ? this.mdcFoundation.open() : e !== void 0 && this.mdcFoundation.close());
  })
], ce.prototype, "open", void 0);
c([
  p({ type: Boolean })
], ce.prototype, "stayOpenOnBodyClick", void 0);
c([
  D(),
  P(function(t) {
    this.mdcFoundation && (t ? this.mdcFoundation.setAnchorCorner(t) : this.mdcFoundation.setAnchorCorner(t));
  })
], ce.prototype, "bitwiseCorner", void 0);
c([
  p({ type: String }),
  P(function(t) {
    if (this.mdcFoundation) {
      const e = t === "START" || t === "END", i = this.previousMenuCorner === null, n = !i && t !== this.previousMenuCorner;
      e && (n || i && t === "END") && (this.bitwiseCorner = this.bitwiseCorner ^ ie.RIGHT, this.mdcFoundation.flipCornerHorizontally(), this.previousMenuCorner = t);
    }
  })
], ce.prototype, "menuCorner", void 0);
c([
  p({ type: String }),
  P(function(t) {
    if (this.mdcFoundation && t) {
      let e = pl[t];
      this.menuCorner === "END" && (e = e ^ ie.RIGHT), this.bitwiseCorner = e;
    }
  })
], ce.prototype, "corner", void 0);
c([
  D()
], ce.prototype, "styleTop", void 0);
c([
  D()
], ce.prototype, "styleLeft", void 0);
c([
  D()
], ce.prototype, "styleRight", void 0);
c([
  D()
], ce.prototype, "styleBottom", void 0);
c([
  D()
], ce.prototype, "styleMaxHeight", void 0);
c([
  D()
], ce.prototype, "styleTransformOrigin", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const hl = j`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Yi = class extends ce {
};
Yi.styles = [hl];
Yi = c([
  z("mwc-menu-surface")
], Yi);
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
var Li = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, qt = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected"
}, fl = {
  FOCUS_ROOT_INDEX: -1
}, _t;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(_t || (_t = {}));
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
var bl = (
  /** @class */
  function(t) {
    Me(e, t);
    function e(i) {
      var n = t.call(this, Z(Z({}, e.defaultAdapter), i)) || this;
      return n.closeAnimationEndTimerId = 0, n.defaultFocusState = _t.LIST_ROOT, n.selectedIndex = -1, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Li;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return qt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return fl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClassToElementAtIndex: function() {
          },
          removeClassFromElementAtIndex: function() {
          },
          addAttributeToElementAtIndex: function() {
          },
          removeAttributeFromElementAtIndex: function() {
          },
          elementContainsClass: function() {
            return !1;
          },
          closeSurface: function() {
          },
          getElementIndex: function() {
            return -1;
          },
          notifySelected: function() {
          },
          getMenuItemCount: function() {
            return 0;
          },
          focusItemAtIndex: function() {
          },
          focusListRoot: function() {
          },
          getSelectedSiblingOfItemAtIndex: function() {
            return -1;
          },
          isSelectableItemAtIndex: function() {
            return !1;
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.destroy = function() {
      this.closeAnimationEndTimerId && clearTimeout(this.closeAnimationEndTimerId), this.adapter.closeSurface();
    }, e.prototype.handleKeydown = function(i) {
      var n = i.key, r = i.keyCode, a = n === "Tab" || r === 9;
      a && this.adapter.closeSurface(
        /** skipRestoreFocus */
        !0
      );
    }, e.prototype.handleItemAction = function(i) {
      var n = this, r = this.adapter.getElementIndex(i);
      r < 0 || (this.adapter.notifySelected({ index: r }), this.adapter.closeSurface(), this.closeAnimationEndTimerId = setTimeout(function() {
        var a = n.adapter.getElementIndex(i);
        a >= 0 && n.adapter.isSelectableItemAtIndex(a) && n.setSelectedIndex(a);
      }, Vr.numbers.TRANSITION_CLOSE_DURATION));
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case _t.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case _t.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case _t.NONE:
          break;
        default:
          this.adapter.focusListRoot();
          break;
      }
    }, e.prototype.setDefaultFocusState = function(i) {
      this.defaultFocusState = i;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(i) {
      if (this.validatedIndex(i), !this.adapter.isSelectableItemAtIndex(i))
        throw new Error("MDCMenuFoundation: No selection group at specified index.");
      var n = this.adapter.getSelectedSiblingOfItemAtIndex(i);
      n >= 0 && (this.adapter.removeAttributeFromElementAtIndex(n, qt.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(n, Li.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(i, Li.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(i, qt.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = i;
    }, e.prototype.setEnabled = function(i, n) {
      this.validatedIndex(i), n ? (this.adapter.removeClassFromElementAtIndex(i, X.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(i, qt.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(i, X.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(i, qt.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(i) {
      var n = this.adapter.getMenuItemCount(), r = i >= 0 && i < n;
      if (!r)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(Oe)
);
class ue extends ct {
  constructor() {
    super(...arguments), this.mdcFoundationClass = bl, this.listElement_ = null, this.anchor = null, this.open = !1, this.quick = !1, this.wrapFocus = !1, this.innerRole = "menu", this.corner = "TOP_START", this.x = null, this.y = null, this.absolute = !1, this.multi = !1, this.activatable = !1, this.fixed = !1, this.forceGroupSelection = !1, this.fullwidth = !1, this.menuCorner = "START", this.stayOpenOnBodyClick = !1, this.defaultFocus = "LIST_ROOT", this._listUpdateComplete = null;
  }
  get listElement() {
    return this.listElement_ ? this.listElement_ : (this.listElement_ = this.renderRoot.querySelector("mwc-list"), this.listElement_);
  }
  get items() {
    const e = this.listElement;
    return e ? e.items : [];
  }
  get index() {
    const e = this.listElement;
    return e ? e.index : -1;
  }
  get selected() {
    const e = this.listElement;
    return e ? e.selected : null;
  }
  render() {
    const e = this.innerRole === "menu" ? "menuitem" : "option";
    return s`
      <mwc-menu-surface
          ?hidden=${!this.open}
          .anchor=${this.anchor}
          .open=${this.open}
          .quick=${this.quick}
          .corner=${this.corner}
          .x=${this.x}
          .y=${this.y}
          .absolute=${this.absolute}
          .fixed=${this.fixed}
          .fullwidth=${this.fullwidth}
          .menuCorner=${this.menuCorner}
          ?stayOpenOnBodyClick=${this.stayOpenOnBodyClick}
          class="mdc-menu mdc-menu-surface"
          @closed=${this.onClosed}
          @opened=${this.onOpened}
          @keydown=${this.onKeydown}>
        <mwc-list
          rootTabbable
          .innerRole=${this.innerRole}
          .multi=${this.multi}
          class="mdc-deprecated-list"
          .itemRoles=${e}
          .wrapFocus=${this.wrapFocus}
          .activatable=${this.activatable}
          @action=${this.onAction}>
        <slot></slot>
      </mwc-list>
    </mwc-menu-surface>`;
  }
  createAdapter() {
    return {
      addClassToElementAtIndex: (e, i) => {
        const n = this.listElement;
        if (!n)
          return;
        const r = n.items[e];
        r && (i === "mdc-menu-item--selected" ? this.forceGroupSelection && !r.selected && n.toggle(e, !0) : r.classList.add(i));
      },
      removeClassFromElementAtIndex: (e, i) => {
        const n = this.listElement;
        if (!n)
          return;
        const r = n.items[e];
        r && (i === "mdc-menu-item--selected" ? r.selected && n.toggle(e, !1) : r.classList.remove(i));
      },
      addAttributeToElementAtIndex: (e, i, n) => {
        const r = this.listElement;
        if (!r)
          return;
        const a = r.items[e];
        a && a.setAttribute(i, n);
      },
      removeAttributeFromElementAtIndex: (e, i) => {
        const n = this.listElement;
        if (!n)
          return;
        const r = n.items[e];
        r && r.removeAttribute(i);
      },
      elementContainsClass: (e, i) => e.classList.contains(i),
      closeSurface: () => {
        this.open = !1;
      },
      getElementIndex: (e) => {
        const i = this.listElement;
        return i ? i.items.indexOf(e) : -1;
      },
      notifySelected: () => {
      },
      getMenuItemCount: () => {
        const e = this.listElement;
        return e ? e.items.length : 0;
      },
      focusItemAtIndex: (e) => {
        const i = this.listElement;
        if (!i)
          return;
        const n = i.items[e];
        n && n.focus();
      },
      focusListRoot: () => {
        this.listElement && this.listElement.focus();
      },
      getSelectedSiblingOfItemAtIndex: (e) => {
        const i = this.listElement;
        if (!i)
          return -1;
        const n = i.items[e];
        if (!n || !n.group)
          return -1;
        for (let r = 0; r < i.items.length; r++) {
          if (r === e)
            continue;
          const a = i.items[r];
          if (a.selected && a.group === n.group)
            return r;
        }
        return -1;
      },
      isSelectableItemAtIndex: (e) => {
        const i = this.listElement;
        if (!i)
          return !1;
        const n = i.items[e];
        return n ? n.hasAttribute("group") : !1;
      }
    };
  }
  onKeydown(e) {
    this.mdcFoundation && this.mdcFoundation.handleKeydown(e);
  }
  onAction(e) {
    const i = this.listElement;
    if (this.mdcFoundation && i) {
      const n = e.detail.index, r = i.items[n];
      r && this.mdcFoundation.handleItemAction(r);
    }
  }
  onOpened() {
    this.open = !0, this.mdcFoundation && this.mdcFoundation.handleMenuSurfaceOpened();
  }
  onClosed() {
    this.open = !1;
  }
  // tslint:disable:ban-ts-ignore
  async getUpdateComplete() {
    return await this._listUpdateComplete, await super.getUpdateComplete();
  }
  // tslint:enable:ban-ts-ignore
  async firstUpdated() {
    super.firstUpdated();
    const e = this.listElement;
    e && (this._listUpdateComplete = e.updateComplete, await this._listUpdateComplete);
  }
  select(e) {
    const i = this.listElement;
    i && i.select(e);
  }
  close() {
    this.open = !1;
  }
  show() {
    this.open = !0;
  }
  getFocusedItemIndex() {
    const e = this.listElement;
    return e ? e.getFocusedItemIndex() : -1;
  }
  focusItemAtIndex(e) {
    const i = this.listElement;
    i && i.focusItemAtIndex(e);
  }
  layout(e = !0) {
    const i = this.listElement;
    i && i.layout(e);
  }
}
c([
  k(".mdc-menu")
], ue.prototype, "mdcRoot", void 0);
c([
  k("slot")
], ue.prototype, "slotElement", void 0);
c([
  p({ type: Object })
], ue.prototype, "anchor", void 0);
c([
  p({ type: Boolean, reflect: !0 })
], ue.prototype, "open", void 0);
c([
  p({ type: Boolean })
], ue.prototype, "quick", void 0);
c([
  p({ type: Boolean })
], ue.prototype, "wrapFocus", void 0);
c([
  p({ type: String })
], ue.prototype, "innerRole", void 0);
c([
  p({ type: String })
], ue.prototype, "corner", void 0);
c([
  p({ type: Number })
], ue.prototype, "x", void 0);
c([
  p({ type: Number })
], ue.prototype, "y", void 0);
c([
  p({ type: Boolean })
], ue.prototype, "absolute", void 0);
c([
  p({ type: Boolean })
], ue.prototype, "multi", void 0);
c([
  p({ type: Boolean })
], ue.prototype, "activatable", void 0);
c([
  p({ type: Boolean })
], ue.prototype, "fixed", void 0);
c([
  p({ type: Boolean })
], ue.prototype, "forceGroupSelection", void 0);
c([
  p({ type: Boolean })
], ue.prototype, "fullwidth", void 0);
c([
  p({ type: String })
], ue.prototype, "menuCorner", void 0);
c([
  p({ type: Boolean })
], ue.prototype, "stayOpenOnBodyClick", void 0);
c([
  p({ type: String }),
  P(function(t) {
    this.mdcFoundation && this.mdcFoundation.setDefaultFocusState(_t[t]);
  })
], ue.prototype, "defaultFocus", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const gl = j`mwc-list ::slotted([mwc-list-item]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Qi = class extends ue {
};
Qi.styles = [gl];
Qi = c([
  z("mwc-menu")
], Qi);
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
var yl = ["input", "button", "textarea", "select"], jn = function(t) {
  var e = t.target;
  if (e) {
    var i = ("" + e.tagName).toLowerCase();
    yl.indexOf(i) === -1 && t.preventDefault();
  }
};
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
function xl() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function Kn(t, e) {
  for (var i = /* @__PURE__ */ new Map(), n = 0; n < t; n++) {
    var r = e(n).trim();
    if (r) {
      var a = r[0].toLowerCase();
      i.has(a) || i.set(a, []), i.get(a).push({ text: r.toLowerCase(), index: n });
    }
  }
  return i.forEach(function(o) {
    o.sort(function(l, u) {
      return l.index - u.index;
    });
  }), i;
}
function Ji(t, e) {
  var i = t.nextChar, n = t.focusItemAtIndex, r = t.sortedIndexByFirstChar, a = t.focusedItemIndex, o = t.skipFocus, l = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    wl(e);
  }, Ae.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + i;
  var u;
  return e.typeaheadBuffer.length === 1 ? u = vl(r, a, l, e) : u = _l(r, l, e), u !== -1 && !o && n(u), u;
}
function vl(t, e, i, n) {
  var r = n.typeaheadBuffer[0], a = t.get(r);
  if (!a)
    return -1;
  if (r === n.currentFirstChar && a[n.sortedIndexCursor].index === e) {
    n.sortedIndexCursor = (n.sortedIndexCursor + 1) % a.length;
    var o = a[n.sortedIndexCursor].index;
    if (!i(o))
      return o;
  }
  n.currentFirstChar = r;
  var l = -1, u;
  for (u = 0; u < a.length; u++)
    if (!i(a[u].index)) {
      l = u;
      break;
    }
  for (; u < a.length; u++)
    if (a[u].index > e && !i(a[u].index)) {
      l = u;
      break;
    }
  return l !== -1 ? (n.sortedIndexCursor = l, a[n.sortedIndexCursor].index) : -1;
}
function _l(t, e, i) {
  var n = i.typeaheadBuffer[0], r = t.get(n);
  if (!r)
    return -1;
  var a = r[i.sortedIndexCursor];
  if (a.text.lastIndexOf(i.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  for (var o = (i.sortedIndexCursor + 1) % r.length, l = -1; o !== i.sortedIndexCursor; ) {
    var u = r[o], m = u.text.lastIndexOf(i.typeaheadBuffer, 0) === 0, f = !e(u.index);
    if (m && f) {
      l = o;
      break;
    }
    o = (o + 1) % r.length;
  }
  return l !== -1 ? (i.sortedIndexCursor = l, r[i.sortedIndexCursor].index) : -1;
}
function Pr(t) {
  return t.typeaheadBuffer.length > 0;
}
function wl(t) {
  t.typeaheadBuffer = "";
}
function Sl(t, e) {
  var i = t.event, n = t.isTargetListItem, r = t.focusedItemIndex, a = t.focusItemAtIndex, o = t.sortedIndexByFirstChar, l = t.isItemAtIndexDisabled, u = re(i) === "ArrowLeft", m = re(i) === "ArrowUp", f = re(i) === "ArrowRight", y = re(i) === "ArrowDown", g = re(i) === "Home", b = re(i) === "End", x = re(i) === "Enter", _ = re(i) === "Spacebar";
  if (i.ctrlKey || i.metaKey || u || m || f || y || g || b || x)
    return -1;
  var I = !_ && i.key.length === 1;
  if (I) {
    jn(i);
    var S = {
      focusItemAtIndex: a,
      focusedItemIndex: r,
      nextChar: i.key.toLowerCase(),
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: l
    };
    return Ji(S, e);
  }
  if (!_)
    return -1;
  n && jn(i);
  var w = n && Pr(e);
  if (w) {
    var S = {
      focusItemAtIndex: a,
      focusedItemIndex: r,
      nextChar: " ",
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: l
    };
    return Ji(S, e);
  }
  return -1;
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
var te = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, $i = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  ARIA_SELECTED_ATTR: "aria-selected",
  CHANGE_EVENT: "MDCSelect:change",
  HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-select__icon",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  MENU_SELECTOR: ".mdc-select__menu",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  SELECTED_TEXT_SELECTOR: ".mdc-select__selected-text",
  SELECT_ANCHOR_SELECTOR: ".mdc-select__anchor",
  VALUE_ATTR: "data-value"
}, yt = {
  LABEL_SCALE: 0.75,
  UNSET_INDEX: -1,
  CLICK_DEBOUNCE_TIMEOUT_MS: 330
};
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
var Al = (
  /** @class */
  function(t) {
    Me(e, t);
    function e(i, n) {
      n === void 0 && (n = {});
      var r = t.call(this, Z(Z({}, e.defaultAdapter), i)) || this;
      return r.disabled = !1, r.isMenuOpen = !1, r.useDefaultValidation = !0, r.customValidity = !0, r.lastSelectedIndex = yt.UNSET_INDEX, r.clickDebounceTimeout = 0, r.recentlyClicked = !1, r.leadingIcon = n.leadingIcon, r.helperText = n.helperText, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return te;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return yt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return $i;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCSelectAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          activateBottomLine: function() {
          },
          deactivateBottomLine: function() {
          },
          getSelectedIndex: function() {
            return -1;
          },
          setSelectedIndex: function() {
          },
          hasLabel: function() {
            return !1;
          },
          floatLabel: function() {
          },
          getLabelWidth: function() {
            return 0;
          },
          setLabelRequired: function() {
          },
          hasOutline: function() {
            return !1;
          },
          notchOutline: function() {
          },
          closeOutline: function() {
          },
          setRippleCenter: function() {
          },
          notifyChange: function() {
          },
          setSelectedText: function() {
          },
          isSelectAnchorFocused: function() {
            return !1;
          },
          getSelectAnchorAttr: function() {
            return "";
          },
          setSelectAnchorAttr: function() {
          },
          removeSelectAnchorAttr: function() {
          },
          addMenuClass: function() {
          },
          removeMenuClass: function() {
          },
          openMenu: function() {
          },
          closeMenu: function() {
          },
          getAnchorElement: function() {
            return null;
          },
          setMenuAnchorElement: function() {
          },
          setMenuAnchorCorner: function() {
          },
          setMenuWrapFocus: function() {
          },
          focusMenuItemAtIndex: function() {
          },
          getMenuItemCount: function() {
            return 0;
          },
          getMenuItemValues: function() {
            return [];
          },
          getMenuItemTextAtIndex: function() {
            return "";
          },
          isTypeaheadInProgress: function() {
            return !1;
          },
          typeaheadMatchItem: function() {
            return -1;
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getSelectedIndex = function() {
      return this.adapter.getSelectedIndex();
    }, e.prototype.setSelectedIndex = function(i, n, r) {
      n === void 0 && (n = !1), r === void 0 && (r = !1), !(i >= this.adapter.getMenuItemCount()) && (i === yt.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(i).trim()), this.adapter.setSelectedIndex(i), n && this.adapter.closeMenu(), !r && this.lastSelectedIndex !== i && this.handleChange(), this.lastSelectedIndex = i);
    }, e.prototype.setValue = function(i, n) {
      n === void 0 && (n = !1);
      var r = this.adapter.getMenuItemValues().indexOf(i);
      this.setSelectedIndex(
        r,
        /** closeMenu */
        !1,
        n
      );
    }, e.prototype.getValue = function() {
      var i = this.adapter.getSelectedIndex(), n = this.adapter.getMenuItemValues();
      return i !== yt.UNSET_INDEX ? n[i] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(i) {
      this.disabled = i, this.disabled ? (this.adapter.addClass(te.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(te.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(te.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(i) {
      this.helperText && this.helperText.setContent(i);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var i = this.getValue().length > 0, n = this.adapter.hasClass(te.FOCUSED), r = i || n, a = this.adapter.hasClass(te.REQUIRED);
        this.notchOutline(r), this.adapter.floatLabel(r), this.adapter.setLabelRequired(a);
      }
    }, e.prototype.layoutOptions = function() {
      var i = this.adapter.getMenuItemValues(), n = i.indexOf(this.getValue());
      this.setSelectedIndex(
        n,
        /** closeMenu */
        !1,
        /** skipNotify */
        !0
      );
    }, e.prototype.handleMenuOpened = function() {
      if (this.adapter.getMenuItemValues().length !== 0) {
        var i = this.getSelectedIndex(), n = i >= 0 ? i : 0;
        this.adapter.focusMenuItemAtIndex(n);
      }
    }, e.prototype.handleMenuClosing = function() {
      this.adapter.setSelectAnchorAttr("aria-expanded", "false");
    }, e.prototype.handleMenuClosed = function() {
      this.adapter.removeClass(te.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var i = this.adapter.hasClass(te.REQUIRED);
      i && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(i) {
      this.setSelectedIndex(
        i,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(te.FOCUSED), this.layout(), this.adapter.activateBottomLine();
    }, e.prototype.handleBlur = function() {
      this.isMenuOpen || this.blur();
    }, e.prototype.handleClick = function(i) {
      if (!(this.disabled || this.recentlyClicked)) {
        if (this.setClickDebounceTimeout(), this.isMenuOpen) {
          this.adapter.closeMenu();
          return;
        }
        this.adapter.setRippleCenter(i), this.openMenu();
      }
    }, e.prototype.handleKeydown = function(i) {
      if (!(this.isMenuOpen || !this.adapter.hasClass(te.FOCUSED))) {
        var n = re(i) === L.ENTER, r = re(i) === L.SPACEBAR, a = re(i) === L.ARROW_UP, o = re(i) === L.ARROW_DOWN, l = i.ctrlKey || i.metaKey;
        if (!l && (!r && i.key && i.key.length === 1 || r && this.adapter.isTypeaheadInProgress())) {
          var u = r ? " " : i.key, m = this.adapter.typeaheadMatchItem(u, this.getSelectedIndex());
          m >= 0 && this.setSelectedIndex(m), i.preventDefault();
          return;
        }
        !n && !r && !a && !o || (a && this.getSelectedIndex() > 0 ? this.setSelectedIndex(this.getSelectedIndex() - 1) : o && this.getSelectedIndex() < this.adapter.getMenuItemCount() - 1 && this.setSelectedIndex(this.getSelectedIndex() + 1), this.openMenu(), i.preventDefault());
      }
    }, e.prototype.notchOutline = function(i) {
      if (this.adapter.hasOutline()) {
        var n = this.adapter.hasClass(te.FOCUSED);
        if (i) {
          var r = yt.LABEL_SCALE, a = this.adapter.getLabelWidth() * r;
          this.adapter.notchOutline(a);
        } else n || this.adapter.closeOutline();
      }
    }, e.prototype.setLeadingIconAriaLabel = function(i) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(i);
    }, e.prototype.setLeadingIconContent = function(i) {
      this.leadingIcon && this.leadingIcon.setContent(i);
    }, e.prototype.getUseDefaultValidation = function() {
      return this.useDefaultValidation;
    }, e.prototype.setUseDefaultValidation = function(i) {
      this.useDefaultValidation = i;
    }, e.prototype.setValid = function(i) {
      this.useDefaultValidation || (this.customValidity = i), this.adapter.setSelectAnchorAttr("aria-invalid", (!i).toString()), i ? (this.adapter.removeClass(te.INVALID), this.adapter.removeMenuClass(te.MENU_INVALID)) : (this.adapter.addClass(te.INVALID), this.adapter.addMenuClass(te.MENU_INVALID)), this.syncHelperTextValidity(i);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(te.REQUIRED) && !this.adapter.hasClass(te.DISABLED) ? this.getSelectedIndex() !== yt.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(i) {
      i ? this.adapter.addClass(te.REQUIRED) : this.adapter.removeClass(te.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", i.toString()), this.adapter.setLabelRequired(i);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var i = this.adapter.getAnchorElement();
      i && (this.adapter.setMenuAnchorElement(i), this.adapter.setMenuAnchorCorner(Ee.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(te.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(te.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(te.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var i = this.adapter.hasClass(te.REQUIRED);
      i && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(i) {
      if (this.helperText) {
        this.helperText.setValidity(i);
        var n = this.helperText.isVisible(), r = this.helperText.getId();
        n && r ? this.adapter.setSelectAnchorAttr($i.ARIA_DESCRIBEDBY, r) : this.adapter.removeSelectAnchorAttr($i.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var i = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        i.recentlyClicked = !1;
      }, yt.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(Oe)
);
const Xn = (t = {}) => {
  const e = {};
  for (const i in t)
    e[i] = t[i];
  return Object.assign({ badInput: !1, customError: !1, patternMismatch: !1, rangeOverflow: !1, rangeUnderflow: !1, stepMismatch: !1, tooLong: !1, tooShort: !1, typeMismatch: !1, valid: !0, valueMissing: !1 }, e);
};
class K extends Je {
  constructor() {
    super(...arguments), this.mdcFoundationClass = Al, this.disabled = !1, this.outlined = !1, this.label = "", this.outlineOpen = !1, this.outlineWidth = 0, this.value = "", this.selectedText = "", this.icon = "", this.menuOpen = !1, this.helper = "", this.validateOnInitialRender = !1, this.validationMessage = "", this.required = !1, this.naturalMenuWidth = !1, this.isUiValid = !0, this.fixedMenuPosition = !1, this.typeaheadState = xl(), this.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), this.menuElement_ = null, this.listeners = [], this.onBodyClickBound = () => {
    }, this._menuUpdateComplete = null, this.valueSetDirectly = !1, this.validityTransform = null, this._validity = Xn();
  }
  get items() {
    return this.menuElement_ || (this.menuElement_ = this.menuElement), this.menuElement_ ? this.menuElement_.items : [];
  }
  get selected() {
    const e = this.menuElement;
    return e ? e.selected : null;
  }
  get index() {
    const e = this.menuElement;
    return e ? e.index : -1;
  }
  get shouldRenderHelperText() {
    return !!this.helper || !!this.validationMessage;
  }
  get validity() {
    return this._checkValidity(this.value), this._validity;
  }
  render() {
    const e = {
      "mdc-select--disabled": this.disabled,
      "mdc-select--no-label": !this.label,
      "mdc-select--filled": !this.outlined,
      "mdc-select--outlined": this.outlined,
      "mdc-select--with-leading-icon": !!this.icon,
      "mdc-select--required": this.required,
      "mdc-select--invalid": !this.isUiValid
    }, i = {
      "mdc-select__menu--invalid": !this.isUiValid
    }, n = this.label ? "label" : void 0, r = this.shouldRenderHelperText ? "helper-text" : void 0;
    return s`
      <div
          class="mdc-select ${ne(e)}">
        <input
            class="formElement"
            .value=${this.value}
            hidden
            ?required=${this.required}>
        <!-- @ts-ignore -->
        <div class="mdc-select__anchor"
            aria-autocomplete="none"
            role="combobox"
            aria-expanded=${this.menuOpen}
            aria-invalid=${!this.isUiValid}
            aria-haspopup="listbox"
            aria-labelledby=${O(n)}
            aria-required=${this.required}
            aria-describedby=${O(r)}
            @click=${this.onClick}
            @focus=${this.onFocus}
            @blur=${this.onBlur}
            @keydown=${this.onKeydown}>
          ${this.renderRipple()}
          ${this.outlined ? this.renderOutline() : this.renderLabel()}
          ${this.renderLeadingIcon()}
          <span class="mdc-select__selected-text-container">
            <span class="mdc-select__selected-text">${this.selectedText}</span>
          </span>
          <span class="mdc-select__dropdown-icon">
            <svg
                class="mdc-select__dropdown-icon-graphic"
                viewBox="7 10 10 5"
                focusable="false">
              <polygon
                  class="mdc-select__dropdown-icon-inactive"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 10 12 15 17 10">
              </polygon>
              <polygon
                  class="mdc-select__dropdown-icon-active"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 15 12 10 17 15">
              </polygon>
            </svg>
          </span>
          ${this.renderLineRipple()}
        </div>
        <mwc-menu
            innerRole="listbox"
            wrapFocus
            class="mdc-select__menu mdc-menu mdc-menu-surface ${ne(i)}"
            activatable
            .fullwidth=${this.fixedMenuPosition ? !1 : !this.naturalMenuWidth}
            .open=${this.menuOpen}
            .anchor=${this.anchorElement}
            .fixed=${this.fixedMenuPosition}
            @selected=${this.onSelected}
            @opened=${this.onOpened}
            @closed=${this.onClosed}
            @items-updated=${this.onItemsUpdated}
            @keydown=${this.handleTypeahead}>
          <slot></slot>
        </mwc-menu>
      </div>
      ${this.renderHelperText()}`;
  }
  renderRipple() {
    return this.outlined ? W : s`
      <span class="mdc-select__ripple"></span>
    `;
  }
  renderOutline() {
    return this.outlined ? s`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>` : W;
  }
  renderLabel() {
    return this.label ? s`
      <span
          .floatingLabelFoundation=${$r(this.label)}
          id="label">${this.label}</span>
    ` : W;
  }
  renderLeadingIcon() {
    return this.icon ? s`<mwc-icon class="mdc-select__icon"><div>${this.icon}</div></mwc-icon>` : W;
  }
  renderLineRipple() {
    return this.outlined ? W : s`
      <span .lineRippleFoundation=${Rr()}></span>
    `;
  }
  renderHelperText() {
    if (!this.shouldRenderHelperText)
      return W;
    const e = this.validationMessage && !this.isUiValid;
    return s`
        <p
          class="mdc-select-helper-text ${ne({
      "mdc-select-helper-text--validation-msg": e
    })}"
          id="helper-text">${e ? this.validationMessage : this.helper}</p>`;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Ot(this.mdcRoot)), { activateBottomLine: () => {
      this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.activate();
    }, deactivateBottomLine: () => {
      this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.deactivate();
    }, hasLabel: () => !!this.label, floatLabel: (e) => {
      this.labelElement && this.labelElement.floatingLabelFoundation.float(e);
    }, getLabelWidth: () => this.labelElement ? this.labelElement.floatingLabelFoundation.getWidth() : 0, setLabelRequired: (e) => {
      this.labelElement && this.labelElement.floatingLabelFoundation.setRequired(e);
    }, hasOutline: () => this.outlined, notchOutline: (e) => {
      this.outlineElement && !this.outlineOpen && (this.outlineWidth = e, this.outlineOpen = !0);
    }, closeOutline: () => {
      this.outlineElement && (this.outlineOpen = !1);
    }, setRippleCenter: (e) => {
      this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.setRippleCenter(e);
    }, notifyChange: async (e) => {
      if (!this.valueSetDirectly && e === this.value)
        return;
      this.valueSetDirectly = !1, this.value = e, await this.updateComplete;
      const i = new Event("change", { bubbles: !0 });
      this.dispatchEvent(i);
    }, setSelectedText: (e) => this.selectedText = e, isSelectAnchorFocused: () => {
      const e = this.anchorElement;
      return e ? e.getRootNode().activeElement === e : !1;
    }, getSelectAnchorAttr: (e) => {
      const i = this.anchorElement;
      return i ? i.getAttribute(e) : null;
    }, setSelectAnchorAttr: (e, i) => {
      const n = this.anchorElement;
      n && n.setAttribute(e, i);
    }, removeSelectAnchorAttr: (e) => {
      const i = this.anchorElement;
      i && i.removeAttribute(e);
    }, openMenu: () => {
      this.menuOpen = !0;
    }, closeMenu: () => {
      this.menuOpen = !1;
    }, addMenuClass: () => {
    }, removeMenuClass: () => {
    }, getAnchorElement: () => this.anchorElement, setMenuAnchorElement: () => {
    }, setMenuAnchorCorner: () => {
      const e = this.menuElement;
      e && (e.corner = "BOTTOM_START");
    }, setMenuWrapFocus: (e) => {
      const i = this.menuElement;
      i && (i.wrapFocus = e);
    }, focusMenuItemAtIndex: (e) => {
      const i = this.menuElement;
      if (!i)
        return;
      const n = i.items[e];
      n && n.focus();
    }, getMenuItemCount: () => {
      const e = this.menuElement;
      return e ? e.items.length : 0;
    }, getMenuItemValues: () => {
      const e = this.menuElement;
      return e ? e.items.map((n) => n.value) : [];
    }, getMenuItemTextAtIndex: (e) => {
      const i = this.menuElement;
      if (!i)
        return "";
      const n = i.items[e];
      return n ? n.text : "";
    }, getSelectedIndex: () => this.index, setSelectedIndex: () => {
    }, isTypeaheadInProgress: () => Pr(this.typeaheadState), typeaheadMatchItem: (e, i) => {
      if (!this.menuElement)
        return -1;
      const n = {
        focusItemAtIndex: (a) => {
          this.menuElement.focusItemAtIndex(a);
        },
        focusedItemIndex: i || this.menuElement.getFocusedItemIndex(),
        nextChar: e,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus: !1,
        isItemAtIndexDisabled: (a) => this.items[a].disabled
      }, r = Ji(n, this.typeaheadState);
      return r !== -1 && this.select(r), r;
    } });
  }
  checkValidity() {
    const e = this._checkValidity(this.value);
    if (!e) {
      const i = new Event("invalid", { bubbles: !1, cancelable: !0 });
      this.dispatchEvent(i);
    }
    return e;
  }
  reportValidity() {
    const e = this.checkValidity();
    return this.isUiValid = e, e;
  }
  _checkValidity(e) {
    const i = this.formElement.validity;
    let n = Xn(i);
    if (this.validityTransform) {
      const r = this.validityTransform(e, n);
      n = Object.assign(Object.assign({}, n), r);
    }
    return this._validity = n, this._validity.valid;
  }
  setCustomValidity(e) {
    this.validationMessage = e, this.formElement.setCustomValidity(e);
  }
  // tslint:disable:ban-ts-ignore
  async getUpdateComplete() {
    return await this._menuUpdateComplete, await super.getUpdateComplete();
  }
  // tslint:enable:ban-ts-ignore
  async firstUpdated() {
    const e = this.menuElement;
    if (e && (this._menuUpdateComplete = e.updateComplete, await this._menuUpdateComplete), super.firstUpdated(), this.mdcFoundation.isValid = () => !0, this.mdcFoundation.setValid = () => {
    }, this.mdcFoundation.setDisabled(this.disabled), this.validateOnInitialRender && this.reportValidity(), !this.selected) {
      !this.items.length && this.slotElement && this.slotElement.assignedNodes({ flatten: !0 }).length && (await new Promise((n) => requestAnimationFrame(n)), await this.layout());
      const i = this.items.length && this.items[0].value === "";
      if (!this.value && i) {
        this.select(0);
        return;
      }
      this.selectByValue(this.value);
    }
    this.sortedIndexByFirstChar = Kn(this.items.length, (i) => this.items[i].text);
  }
  onItemsUpdated() {
    this.sortedIndexByFirstChar = Kn(this.items.length, (e) => this.items[e].text);
  }
  select(e) {
    const i = this.menuElement;
    i && i.select(e);
  }
  selectByValue(e) {
    let i = -1;
    for (let n = 0; n < this.items.length; n++)
      if (this.items[n].value === e) {
        i = n;
        break;
      }
    this.valueSetDirectly = !0, this.select(i), this.mdcFoundation.handleChange();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const e of this.listeners)
      e.target.removeEventListener(e.name, e.cb);
  }
  focus() {
    const e = new CustomEvent("focus"), i = this.anchorElement;
    i && (i.dispatchEvent(e), i.focus());
  }
  blur() {
    const e = new CustomEvent("blur"), i = this.anchorElement;
    i && (i.dispatchEvent(e), i.blur());
  }
  onFocus() {
    this.mdcFoundation && this.mdcFoundation.handleFocus();
  }
  onBlur() {
    this.mdcFoundation && this.mdcFoundation.handleBlur();
    const e = this.menuElement;
    e && !e.open && this.reportValidity();
  }
  onClick(e) {
    if (this.mdcFoundation) {
      this.focus();
      const i = e.target.getBoundingClientRect();
      let n = 0;
      "touches" in e ? n = e.touches[0].clientX : n = e.clientX;
      const r = n - i.left;
      this.mdcFoundation.handleClick(r);
    }
  }
  onKeydown(e) {
    const i = re(e) === L.ARROW_UP, n = re(e) === L.ARROW_DOWN;
    if (n || i) {
      const r = i && this.index > 0, a = n && this.index < this.items.length - 1;
      r ? this.select(this.index - 1) : a && this.select(this.index + 1), e.preventDefault(), this.mdcFoundation.openMenu();
      return;
    }
    this.mdcFoundation.handleKeydown(e);
  }
  // must capture to run before list foundation captures event
  handleTypeahead(e) {
    if (!this.menuElement)
      return;
    const i = this.menuElement.getFocusedItemIndex(), n = _r(e.target) ? e.target : null, r = n ? n.hasAttribute("mwc-list-item") : !1, a = {
      event: e,
      focusItemAtIndex: (o) => {
        this.menuElement.focusItemAtIndex(o);
      },
      focusedItemIndex: i,
      isTargetListItem: r,
      sortedIndexByFirstChar: this.sortedIndexByFirstChar,
      isItemAtIndexDisabled: (o) => this.items[o].disabled
    };
    Sl(a, this.typeaheadState);
  }
  async onSelected(e) {
    this.mdcFoundation || await this.updateComplete, this.mdcFoundation.handleMenuItemAction(e.detail.index);
    const i = this.items[e.detail.index];
    i && (this.value = i.value);
  }
  onOpened() {
    this.mdcFoundation && (this.menuOpen = !0, this.mdcFoundation.handleMenuOpened());
  }
  onClosed() {
    this.mdcFoundation && (this.menuOpen = !1, this.mdcFoundation.handleMenuClosed());
  }
  async layout(e = !0) {
    this.mdcFoundation && this.mdcFoundation.layout(), await this.updateComplete;
    const i = this.menuElement;
    i && i.layout(e);
    const n = this.labelElement;
    if (!n) {
      this.outlineOpen = !1;
      return;
    }
    const r = !!this.label && !!this.value;
    if (n.floatingLabelFoundation.float(r), !this.outlined)
      return;
    this.outlineOpen = r, await this.updateComplete;
    const a = n.floatingLabelFoundation.getWidth();
    this.outlineOpen && (this.outlineWidth = a);
  }
  async layoutOptions() {
    this.mdcFoundation && this.mdcFoundation.layoutOptions();
  }
}
c([
  k(".mdc-select")
], K.prototype, "mdcRoot", void 0);
c([
  k(".formElement")
], K.prototype, "formElement", void 0);
c([
  k("slot")
], K.prototype, "slotElement", void 0);
c([
  k("select")
], K.prototype, "nativeSelectElement", void 0);
c([
  k("input")
], K.prototype, "nativeInputElement", void 0);
c([
  k(".mdc-line-ripple")
], K.prototype, "lineRippleElement", void 0);
c([
  k(".mdc-floating-label")
], K.prototype, "labelElement", void 0);
c([
  k("mwc-notched-outline")
], K.prototype, "outlineElement", void 0);
c([
  k(".mdc-menu")
], K.prototype, "menuElement", void 0);
c([
  k(".mdc-select__anchor")
], K.prototype, "anchorElement", void 0);
c([
  p({ type: Boolean, attribute: "disabled", reflect: !0 }),
  P(function(t) {
    this.mdcFoundation && this.mdcFoundation.setDisabled(t);
  })
], K.prototype, "disabled", void 0);
c([
  p({ type: Boolean }),
  P(function(t, e) {
    e !== void 0 && this.outlined !== e && this.layout(!1);
  })
], K.prototype, "outlined", void 0);
c([
  p({ type: String }),
  P(function(t, e) {
    e !== void 0 && this.label !== e && this.layout(!1);
  })
], K.prototype, "label", void 0);
c([
  D()
], K.prototype, "outlineOpen", void 0);
c([
  D()
], K.prototype, "outlineWidth", void 0);
c([
  p({ type: String }),
  P(function(t) {
    if (this.mdcFoundation) {
      const e = this.selected === null && !!t, i = this.selected && this.selected.value !== t;
      (e || i) && this.selectByValue(t), this.reportValidity();
    }
  })
], K.prototype, "value", void 0);
c([
  D()
], K.prototype, "selectedText", void 0);
c([
  p({ type: String })
], K.prototype, "icon", void 0);
c([
  D()
], K.prototype, "menuOpen", void 0);
c([
  p({ type: String })
], K.prototype, "helper", void 0);
c([
  p({ type: Boolean })
], K.prototype, "validateOnInitialRender", void 0);
c([
  p({ type: String })
], K.prototype, "validationMessage", void 0);
c([
  p({ type: Boolean })
], K.prototype, "required", void 0);
c([
  p({ type: Boolean })
], K.prototype, "naturalMenuWidth", void 0);
c([
  D()
], K.prototype, "isUiValid", void 0);
c([
  p({ type: Boolean })
], K.prototype, "fixedMenuPosition", void 0);
c([
  We({ capture: !0 })
], K.prototype, "handleTypeahead", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const El = j`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-select{display:inline-flex;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87)}.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-select.mdc-select--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#6200ee;fill:var(--mdc-theme-primary, #6200ee)}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:rgba(0, 0, 0, 0.54)}.mdc-select.mdc-select--disabled .mdc-select__icon{color:rgba(0, 0, 0, 0.38)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:red}.mdc-select.mdc-select--disabled .mdc-floating-label{color:GrayText}.mdc-select.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}.mdc-select.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select.mdc-select--disabled .mdc-notched-outline__trailing{border-color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__icon{color:GrayText}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:GrayText}}.mdc-select .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:0;padding-right:0}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.mdc-select .mdc-select__icon{width:24px;height:24px;font-size:24px}.mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item,.mdc-select .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:12px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic,.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:12px;margin-right:0}.mdc-select__dropdown-icon{margin-left:12px;margin-right:12px;display:inline-flex;position:relative;align-self:center;align-items:center;justify-content:center;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic{width:41.6666666667%;height:20.8333333333%}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;transition:opacity 100.5ms linear 49.5ms}.mdc-select__anchor{width:200px;min-width:0;flex:1 1 auto;position:relative;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-select__selected-text-container{display:flex;appearance:none;pointer-events:none;box-sizing:border-box;width:auto;min-width:0;flex-grow:1;height:28px;border:none;outline:none;padding:0;background-color:transparent;color:inherit}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;width:100%;text-align:left}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{text-align:right}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item{padding-left:12px;padding-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item,.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:12px;padding-right:12px}.mdc-select__menu .mdc-deprecated-list .mdc-select__icon{margin-left:0;margin-right:0}[dir=rtl] .mdc-select__menu .mdc-deprecated-list .mdc-select__icon,.mdc-select__menu .mdc-deprecated-list .mdc-select__icon[dir=rtl]{margin-left:0;margin-right:0}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select--filled .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.mdc-select--filled .mdc-select__anchor::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor::before{display:none}.mdc-select--filled .mdc-select__anchor{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-select--filled:not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke}.mdc-select--filled.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-select--filled:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--filled.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-select--filled .mdc-menu-surface--is-open-below{border-top-left-radius:0px;border-top-right-radius:0px}.mdc-select--filled.mdc-select--focused.mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-select--filled .mdc-floating-label,.mdc-select--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined{border:none}.mdc-select--outlined .mdc-select__anchor{height:56px}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-56px{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-select--outlined .mdc-select__anchor{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-select--outlined+.mdc-select-helper-text{margin-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-select--outlined .mdc-select__anchor{display:flex;align-items:baseline;overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--outlined .mdc-select__anchor::before{display:none}.mdc-select--outlined .mdc-select__selected-text-container{display:flex;border:none;z-index:1;background-color:transparent}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;left:4px;right:initial}[dir=rtl] .mdc-select--outlined .mdc-floating-label,.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake,.mdc-select--outlined.mdc-select--with-leading-icon[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 96px)}.mdc-select--outlined .mdc-menu-surface{margin-bottom:8px}.mdc-select--outlined.mdc-select--no-label .mdc-menu-surface,.mdc-select--outlined .mdc-menu-surface--is-open-below{margin-bottom:0}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-select__anchor .mdc-select__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-select__anchor .mdc-select__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-select__anchor:hover .mdc-select__ripple::before,.mdc-select__anchor.mdc-ripple-surface--hover .mdc-select__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select-helper-text{margin:0;margin-left:16px;margin-right:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal}[dir=rtl] .mdc-select-helper-text,.mdc-select-helper-text[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;user-select:none;flex-shrink:0;align-self:center;background-color:transparent;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex="-1"]{cursor:default;pointer-events:none}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-block;vertical-align:top;outline:none}.mdc-select{width:100%}[hidden]{display:none}.mdc-select__icon{z-index:2}.mdc-select--with-leading-icon{--mdc-list-item-graphic-margin: calc( 48px - var(--mdc-list-item-graphic-size, 24px) - var(--mdc-list-side-padding, 16px) )}.mdc-select .mdc-select__anchor .mdc-select__selected-text{overflow:hidden}.mdc-select .mdc-select__anchor *{display:inline-flex}.mdc-select .mdc-select__anchor .mdc-floating-label{display:inline-block}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-idle-border-color, rgba(0, 0, 0, 0.38) );--mdc-notched-outline-notch-offset: 1px}:host(:not([disabled]):hover) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87);color:var(--mdc-select-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-select-idle-line-color, rgba(0, 0, 0, 0.42))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-select-hover-line-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke;background-color:var(--mdc-select-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-select__dropdown-icon{fill:var(--mdc-select-error-dropdown-icon-color, var(--mdc-select-error-color, var(--mdc-theme-error, #b00020)))}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label,:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label::after{color:var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}.mdc-select__menu--invalid{--mdc-theme-primary: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.6);color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54);fill:var(--mdc-select-dropdown-icon-color, rgba(0, 0, 0, 0.54))}:host(:not([disabled])) .mdc-select.mdc-select--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px;--mdc-notched-outline-notch-offset: 2px}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-select__dropdown-icon{fill:rgba(98,0,238,.87);fill:var(--mdc-select-focused-dropdown-icon-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-select:not(.mdc-select--outlined).mdc-select--disabled .mdc-select__anchor{background-color:#fafafa;background-color:var(--mdc-select-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-select.mdc-select--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-select .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38);fill:var(--mdc-select-disabled-dropdown-icon-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select-helper-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let gi = class extends K {
};
gi.styles = [El];
gi = c([
  z("mwc-select")
], gi);
function V(t, e, i) {
  const n = t.createElementNS(t.documentElement.namespaceURI, e);
  return Object.entries(i).filter(([r, a]) => a !== null).forEach(([r, a]) => n.setAttribute(r, a)), n;
}
function Y(t, e) {
  const i = t.cloneNode(!1);
  return Object.entries(e).forEach(([n, r]) => {
    r === null ? i.removeAttribute(n) : i.setAttribute(n, r);
  }), i;
}
function be(t, e) {
  return !t || !e ? [] : Array.from(t.children).filter(
    (i) => i.tagName === e
  );
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
var Gt = {
  /** Class used for a switch that is in the "checked" (on) position. */
  CHECKED: "mdc-switch--checked",
  /** Class used for a switch that is disabled. */
  DISABLED: "mdc-switch--disabled"
}, Zn = {
  /** Aria attribute for checked or unchecked state of switch */
  ARIA_CHECKED_ATTR: "aria-checked",
  /** A CSS selector used to locate the native HTML control for the switch.  */
  NATIVE_CONTROL_SELECTOR: ".mdc-switch__native-control",
  /** A CSS selector used to locate the ripple surface element for the switch. */
  RIPPLE_SURFACE_SELECTOR: ".mdc-switch__thumb-underlay"
};
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
var Cl = (
  /** @class */
  function(t) {
    Me(e, t);
    function e(i) {
      return t.call(this, Z(Z({}, e.defaultAdapter), i)) || this;
    }
    return Object.defineProperty(e, "strings", {
      /** The string constants used by the switch. */
      get: function() {
        return Zn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      /** The CSS classes used by the switch. */
      get: function() {
        return Gt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /** The default Adapter for the switch. */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          setNativeControlChecked: function() {
          },
          setNativeControlDisabled: function() {
          },
          setNativeControlAttr: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.setChecked = function(i) {
      this.adapter.setNativeControlChecked(i), this.updateAriaChecked(i), this.updateCheckedStyling(i);
    }, e.prototype.setDisabled = function(i) {
      this.adapter.setNativeControlDisabled(i), i ? this.adapter.addClass(Gt.DISABLED) : this.adapter.removeClass(Gt.DISABLED);
    }, e.prototype.handleChange = function(i) {
      var n = i.target;
      this.updateAriaChecked(n.checked), this.updateCheckedStyling(n.checked);
    }, e.prototype.updateCheckedStyling = function(i) {
      i ? this.adapter.addClass(Gt.CHECKED) : this.adapter.removeClass(Gt.CHECKED);
    }, e.prototype.updateAriaChecked = function(i) {
      this.adapter.setNativeControlAttr(Zn.ARIA_CHECKED_ATTR, "" + !!i);
    }, e;
  }(Oe)
);
class Ue extends Je {
  constructor() {
    super(...arguments), this.checked = !1, this.disabled = !1, this.shouldRenderRipple = !1, this.mdcFoundationClass = Cl, this.rippleHandlers = new Et(() => (this.shouldRenderRipple = !0, this.ripple));
  }
  changeHandler(e) {
    this.mdcFoundation.handleChange(e), this.checked = this.formElement.checked;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Ot(this.mdcRoot)), { setNativeControlChecked: (e) => {
      this.formElement.checked = e;
    }, setNativeControlDisabled: (e) => {
      this.formElement.disabled = e;
    }, setNativeControlAttr: (e, i) => {
      this.formElement.setAttribute(e, i);
    } });
  }
  renderRipple() {
    return this.shouldRenderRipple ? s`
        <mwc-ripple
          .accent="${this.checked}"
          .disabled="${this.disabled}"
          unbounded>
        </mwc-ripple>` : "";
  }
  focus() {
    const e = this.formElement;
    e && (this.rippleHandlers.startFocus(), e.focus());
  }
  blur() {
    const e = this.formElement;
    e && (this.rippleHandlers.endFocus(), e.blur());
  }
  render() {
    return s`
      <div class="mdc-switch">
        <div class="mdc-switch__track"></div>
        <div class="mdc-switch__thumb-underlay">
          ${this.renderRipple()}
          <div class="mdc-switch__thumb">
            <input
              type="checkbox"
              id="basic-switch"
              class="mdc-switch__native-control"
              role="switch"
              aria-label="${O(this.ariaLabel)}"
              aria-labelledby="${O(this.ariaLabelledBy)}"
              @change="${this.changeHandler}"
              @focus="${this.handleRippleFocus}"
              @blur="${this.handleRippleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
          </div>
        </div>
      </div>`;
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
}
c([
  p({ type: Boolean }),
  P(function(t) {
    this.mdcFoundation.setChecked(t);
  })
], Ue.prototype, "checked", void 0);
c([
  p({ type: Boolean }),
  P(function(t) {
    this.mdcFoundation.setDisabled(t);
  })
], Ue.prototype, "disabled", void 0);
c([
  it,
  p({ attribute: "aria-label" })
], Ue.prototype, "ariaLabel", void 0);
c([
  it,
  p({ attribute: "aria-labelledby" })
], Ue.prototype, "ariaLabelledBy", void 0);
c([
  k(".mdc-switch")
], Ue.prototype, "mdcRoot", void 0);
c([
  k("input")
], Ue.prototype, "formElement", void 0);
c([
  At("mwc-ripple")
], Ue.prototype, "ripple", void 0);
c([
  D()
], Ue.prototype, "shouldRenderRipple", void 0);
c([
  We({ passive: !0 })
], Ue.prototype, "handleRippleMouseDown", null);
c([
  We({ passive: !0 })
], Ue.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Il = j`.mdc-switch__thumb-underlay{left:-14px;right:initial;top:-17px;width:48px;height:48px}[dir=rtl] .mdc-switch__thumb-underlay,.mdc-switch__thumb-underlay[dir=rtl]{left:initial;right:-14px}.mdc-switch__native-control{width:64px;height:48px}.mdc-switch{display:inline-block;position:relative;outline:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-color:#fff;border-color:var(--mdc-theme-surface, #fff)}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;margin:0;opacity:0;cursor:pointer;pointer-events:auto;transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-switch__native-control,.mdc-switch__native-control[dir=rtl]{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:36px;height:14px;border:1px solid transparent;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb-underlay{display:flex;position:absolute;align-items:center;justify-content:center;transform:translateX(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl]{transform:translateX(-16px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__native-control[dir=rtl]{transform:translateX(16px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent}`;
let en = class extends Ue {
};
en.styles = [Il];
en = c([
  z("mwc-switch")
], en);
var kl = Object.defineProperty, Dl = Object.getOwnPropertyDescriptor, He = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Dl(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && kl(e, i, r), r;
};
let Ce = class extends fi {
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
    return this.reservedValues && this.reservedValues.some((t) => t === this.value) ? (this.setCustomValidity(d("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? s`<div style="position:relative;">
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
      </div>` : s``;
  }
  renderMulplierList() {
    return s`${this.multipliers.map(
      (t) => s`<mwc-list-item ?selected=${t === this.multiplier}
          >${t === null ? d("textfield.noMultiplier") : t}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? s`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : s``;
  }
  render() {
    return s`
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
He([
  p({ type: Boolean })
], Ce.prototype, "nullable", 2);
He([
  p({ type: Array })
], Ce.prototype, "multipliers", 2);
He([
  p({ type: String })
], Ce.prototype, "multiplier", 1);
He([
  p({ type: String })
], Ce.prototype, "unit", 2);
He([
  D()
], Ce.prototype, "null", 1);
He([
  p({ type: String })
], Ce.prototype, "maybeValue", 1);
He([
  p({ type: String })
], Ce.prototype, "defaultValue", 2);
He([
  p({ type: Array })
], Ce.prototype, "reservedValues", 2);
He([
  k("mwc-switch")
], Ce.prototype, "nullSwitch", 2);
He([
  k("mwc-menu")
], Ce.prototype, "multiplierMenu", 2);
He([
  k("mwc-icon-button")
], Ce.prototype, "multiplierButton", 2);
Ce = He([
  z("wizard-textfield")
], Ce);
var Tl = Object.defineProperty, Nl = Object.getOwnPropertyDescriptor, It = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Nl(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Tl(e, i, r), r;
};
let tt = class extends gi {
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
    return this.nullable ? s`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : s``;
  }
  render() {
    return s`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
It([
  p({ type: Boolean })
], tt.prototype, "nullable", 2);
It([
  D()
], tt.prototype, "null", 1);
It([
  p({ type: String })
], tt.prototype, "maybeValue", 1);
It([
  p({ type: String })
], tt.prototype, "defaultValue", 2);
It([
  p({ type: Array })
], tt.prototype, "reservedValues", 2);
It([
  k("mwc-switch")
], tt.prototype, "nullSwitch", 2);
tt = It([
  z("wizard-select")
], tt);
var Ll = Object.defineProperty, $l = Object.getOwnPropertyDescriptor, ze = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? $l(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Ll(e, i, r), r;
};
let Ie = class extends Pe {
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
    return this.nullable ? s`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : s``;
  }
  render() {
    return s`
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
ze([
  p({ type: String })
], Ie.prototype, "label", 2);
ze([
  p({ type: String })
], Ie.prototype, "helper", 2);
ze([
  p({ type: Boolean })
], Ie.prototype, "nullable", 2);
ze([
  p({ type: Boolean })
], Ie.prototype, "defaultChecked", 2);
ze([
  p({ type: String })
], Ie.prototype, "maybeValue", 1);
ze([
  p({ type: Boolean })
], Ie.prototype, "disabled", 2);
ze([
  D()
], Ie.prototype, "null", 1);
ze([
  D()
], Ie.prototype, "checked", 1);
ze([
  D()
], Ie.prototype, "deactivateCheckbox", 2);
ze([
  D()
], Ie.prototype, "formfieldLabel", 1);
ze([
  k("mwc-switch")
], Ie.prototype, "nullSwitch", 2);
ze([
  k("mwc-checkbox")
], Ie.prototype, "checkbox", 2);
Ie = ze([
  z("wizard-checkbox")
], Ie);
function Rl(t) {
  return typeof t == "function";
}
function v(t) {
  return t instanceof Ce || t instanceof tt || t instanceof Ie ? t.maybeValue : t.value ?? null;
}
function xn(t) {
  return t instanceof Ce ? t.multiplier : null;
}
function me(t, e) {
  if (!t)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const i = Rl(t) ? t : () => t;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: i, ...e?.detail }
  });
}
function kt(t) {
  return me(t, { detail: { subwizard: !0 } });
}
function Ol(t) {
  let e = "", i = t.parentElement;
  for (; i?.getAttribute("name"); )
    e = "/" + i.getAttribute("name") + e, i = i.parentElement;
  return e;
}
function ae(t) {
  const e = t.getAttribute("name");
  return e || void 0;
}
function zl(t) {
  const e = t.getAttribute("ldName");
  return e || void 0;
}
function pt(t) {
  const e = t.getAttribute("desc");
  return e || void 0;
}
function St(t) {
  const e = t.getAttribute("inst");
  return e || void 0;
}
function we(t) {
  const e = t.split(">"), i = e.pop() ?? "";
  return [e.join(">"), i];
}
const de = ":not(*)";
function Fl(t) {
  return `${t.getAttribute("version")}	${t.getAttribute("revision")}`;
}
function Vl(t, e) {
  const [i, n] = e.split("	");
  return !i || !n ? de : `${t}[version="${i}"][revision="${n}"]`;
}
function Yn(t) {
  return q(t.parentElement) + ">" + t.getAttribute("connectivityNode");
}
function Qn(t, e) {
  const [i, n] = we(e), r = se[t].parents.flatMap(
    (a) => xe(a, i).split(",")
  );
  return ge(
    r,
    [">"],
    [`${t}[connectivityNode="${n}"]`]
  ).map((a) => a.join("")).join(",");
}
function Pl(t) {
  const [e, i, n, r, a, o] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((l) => t.getAttribute(l));
  return e === "None" ? `${q(t.parentElement)}>(${r} ${o} ${a})` : `${e} ${i || "(Client)"}/${n ?? ""} ${r} ${a ?? ""}`;
}
function Ml(t, e) {
  if (e.endsWith(")")) {
    const [g, b] = we(e), [x, _, I] = b.substring(1, b.length - 1).split(" ");
    if (!x || !_) return de;
    const S = se[t].parents.flatMap(
      (w) => xe(w, g).split(",")
    );
    return ge(
      S,
      [">"],
      [`${t}[iedName="None"][lnClass="${x}"][lnType="${_}"][lnInst="${I}"]`]
    ).map((w) => w.join("")).join(",");
  }
  const [i, n, r, a, o] = e.split(/[ /]/);
  if (!i || !n || !a) return de;
  const [
    l,
    u,
    m,
    f,
    y
  ] = [
    [`[iedName="${i}"]`],
    n === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${n}"]`],
    r ? [`[prefix="${r}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    o ? [`[lnInst="${o}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return ge(
    [t],
    l,
    u,
    m,
    f,
    y
  ).map((g) => g.join("")).join(",");
}
function Hl(t) {
  return `${q(t.parentElement)}>${t.getAttribute(
    "iedName"
  )} ${t.getAttribute("apName")}`;
}
function Bl(t, e) {
  const [i, n] = we(e), [r, a] = n.split(" ");
  return `${xe(
    "IED",
    i
  )}>${t}[iedName="${r}"][apName="${a}"]`;
}
function ql(t) {
  return `${q(t.parentElement)}>${t.getAttribute("associationID") ?? ""}`;
}
function Gl(t, e) {
  const [i, n] = we(e);
  return n ? `${xe(
    "Server",
    i
  )}>${t}[associationID="${n}"]` : de;
}
function Wl(t) {
  return `${q(t.closest("IED"))}>>${t.getAttribute("inst")}`;
}
function Ul(t, e) {
  const [i, n] = e.split(">>");
  return n ? `IED[name="${i}"] ${t}[inst="${n}"]` : de;
}
function jl(t) {
  const e = t.textContent, [i, n, r, a, o] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((l) => t.getAttribute(l));
  return `${q(t.parentElement)}>${e} ${i || ""} ${n || ""}/${r ?? ""} ${a ?? ""} ${o ?? ""}`;
}
function Kl(t, e) {
  const [i, n] = we(e), [r, a, o, l, u, m] = n.split(/[ /]/), [
    f,
    y,
    g,
    b,
    x,
    _
  ] = [
    se[t].parents.flatMap(
      (I) => xe(I, i).split(",")
    ),
    [`${r}`],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    l ? [`[prefix="${l}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${u}"]`],
    m ? [`[lnInst="${m}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return ge(
    f,
    [">"],
    [t],
    y,
    g,
    b,
    x,
    _
  ).map((I) => I.join("")).join(",");
}
function Xl(t) {
  const [e, i, n, r, a, o, l, u] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((f) => t.getAttribute(f)), m = `${e}/${i ?? ""} ${n} ${r ?? ""}.${a} ${o || ""}`;
  return `${q(t.parentElement)}>${m} (${l}${u ? " [" + u + "]" : ""})`;
}
function Zl(t, e) {
  const [i, n] = we(e), [r, a, o, l] = n.split(/[ /.]/), u = n.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), m = u && u[1] ? u[1] : "", f = u && u[2] ? u[2] : "", y = n.match(/\(([A-Z]{2})/), g = n.match(/ \[([0-9]{1,2})\]/), b = y && y[1] ? y[1] : "", x = g && g[1] ? g[1] : "", [
    _,
    I,
    S,
    w,
    T,
    N,
    R,
    Q,
    oe
  ] = [
    se[t].parents.flatMap(
      (ee) => xe(ee, i).split(",")
    ),
    [`[ldInst="${r}"]`],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    l ? [`[lnInst="${l}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${m}"]`],
    f ? [`[daName="${f}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${b}"]`],
    x ? [`[ix="${x}"]`] : [":not([ix])", '[ix=""]']
  ];
  return ge(
    _,
    [">"],
    [t],
    I,
    S,
    w,
    T,
    N,
    R,
    Q,
    oe
  ).map((ee) => ee.join("")).join(",");
}
function Yl(t) {
  if (!t.parentElement) return NaN;
  const e = q(t.parentElement), i = t.getAttribute("iedName"), n = t.getAttribute("intAddr"), r = Array.from(
    t.parentElement.querySelectorAll(`ExtRef[intAddr="${n}"]`)
  ).indexOf(t);
  if (n) return `${e}>${n}[${r}]`;
  const [
    a,
    o,
    l,
    u,
    m,
    f,
    y,
    g,
    b,
    x,
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
  ].map((T) => t.getAttribute(T)), S = I ? `${y}:${I} ${g ?? ""}/${b ?? ""} ${x ?? ""} ${_ ?? ""}` : "", w = `${i} ${a}/${o ?? ""} ${l} ${u ?? ""} ${m} ${f || ""}`;
  return `${e}>${S ? S + " " : ""}${w}${n ? `@${n}` : ""}`;
}
function Ql(t, e) {
  const [i, n] = we(e), r = se[t].parents.flatMap(
    (Mt) => xe(Mt, i).split(",")
  );
  if (n.endsWith("]")) {
    const [Mt] = n.split("["), Wa = [`[intAddr="${Mt}"]`];
    return ge(r, [">"], [t], Wa).map((Ua) => Ua.join("")).join(",");
  }
  let a, o, l, u, m, f, y, g, b, x, _, I, S, w;
  !n.includes(":") && !n.includes("@") ? [a, o, l, u, m, f, y] = n.split(/[ /]/) : n.includes(":") && !n.includes("@") ? [
    g,
    b,
    x,
    _,
    I,
    S,
    a,
    o,
    l,
    u,
    m,
    f,
    y
  ] = n.split(/[ /:]/) : !n.includes(":") && n.includes("@") ? [a, o, l, u, m, f, y, w] = n.split(/[ /@]/) : [
    g,
    b,
    x,
    _,
    I,
    S,
    a,
    o,
    l,
    u,
    m,
    f,
    y,
    w
  ] = n.split(/[ /:@]/);
  const [
    T,
    N,
    R,
    Q,
    oe,
    ee,
    at,
    $e,
    ve,
    Pt,
    je,
    Ba,
    qa,
    Ga
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])"],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    l ? [`[prefix="${l}"]`] : [":not([prefix])", '[prefix=""]'],
    u ? [`[lnClass="${u}"]`] : [":not([lnClass])"],
    m ? [`[lnInst="${m}"]`] : [":not([lnInst])", '[lnInst=""]'],
    f ? [`[doName="${f}"]`] : [":not([doName])"],
    y ? [`[daName="${y}"]`] : [":not([daName])", '[daName=""]'],
    g ? [`[serviceType="${g}"]`] : [":not([serviceType])", '[serviceType=""]'],
    b ? [`[srcCBName="${b}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    x ? [`[srcLDInst="${x}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    _ ? [`[srcPrefix="${_}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    I ? [`[srcLNClass="${I}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    S ? [`[srcLNInst="${S}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    w ? [`[intAddr="${w}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return ge(
    r,
    [">"],
    [t],
    T,
    N,
    R,
    Q,
    oe,
    ee,
    at,
    $e,
    ve,
    Pt,
    je,
    Ba,
    qa,
    Ga
  ).map((Mt) => Mt.join("")).join(",");
}
function Jl(t) {
  const [e, i, n] = ["prefix", "lnClass", "inst"].map(
    (r) => t.getAttribute(r)
  );
  return `${q(t.parentElement)}>${e ?? ""} ${i} ${n}`;
}
function ed(t, e) {
  const [i, n] = we(e), r = se[t].parents.flatMap(
    (y) => xe(y, i).split(",")
  ), [a, o, l] = n.split(" ");
  if (!o) return de;
  const [u, m, f] = [
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    [`[inst="${l}"]`]
  ];
  return ge(
    r,
    [">"],
    [t],
    u,
    m,
    f
  ).map((y) => y.join("")).join(",");
}
function td(t) {
  const [e, i, n, r, a, o] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((l) => t.getAttribute(l));
  return `${q(t.parentElement)}>${i} ${e || ""} ${n}/${r ?? ""} ${a} ${o}`;
}
function id(t, e) {
  const [i, n] = we(e), r = se[t].parents.flatMap(
    (S) => xe(S, i).split(",")
  ), [a, o, l, u, m, f] = n.split(/[ /]/), [
    y,
    g,
    b,
    x,
    _,
    I
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])", '[iedName=""]'],
    o ? [`[apRef="${o}"]`] : [":not([apRef])", '[apRef=""]'],
    l ? [`[ldInst="${l}"]`] : [":not([ldInst])", '[ldInst=""]'],
    u ? [`[prefix="${u}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${m}"]`],
    f ? [`[lnInst="${f}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return ge(
    r,
    [">"],
    [t],
    y,
    g,
    b,
    x,
    _,
    I
  ).map((S) => S.join("")).join(",");
}
function Jn(t) {
  const [e, i] = ["name", "ix"].map((n) => t.getAttribute(n));
  return `${q(t.parentElement)}>${e}${i ? "[" + i + "]" : ""}`;
}
function tn(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [n, r] = we(e), [a, o, l, u] = r.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!o) return de;
  if (i === 0) return `${t}[name="${o}"]`;
  const m = se[t].parents.flatMap(
    (g) => g === "SDI" ? tn(g, n, i - 1).split(",") : xe(g, n).split(",")
  ).filter((g) => !g.startsWith(de));
  if (m.length === 0) return de;
  const [f, y] = [
    [`[name="${o}"]`],
    u ? [`[ix="${u}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return ge(
    m,
    [">"],
    [t],
    f,
    y
  ).map((g) => g.join("")).join(",");
}
function nd(t) {
  if (!t.parentElement) return NaN;
  const e = t.getAttribute("sGroup"), i = Array.from(t.parentElement.children).filter((n) => n.getAttribute("sGroup") === e).findIndex((n) => n.isSameNode(t));
  return `${q(t.parentElement)}>${e ? e + "." : ""} ${i}`;
}
function rd(t, e) {
  const [i, n] = we(e), [r, a] = n.split(" "), o = parseFloat(a), l = se[t].parents.flatMap(
    (f) => xe(f, i).split(",")
  ), [u, m] = [
    r ? [`[sGroup="${r}"]`] : [""],
    o ? [`:nth-child(${o + 1})`] : [""]
  ];
  return ge(
    l,
    [">"],
    [t],
    u,
    m
  ).map((f) => f.join("")).join(",");
}
function ad(t) {
  const [e, i] = ["iedName", "apName"].map(
    (n) => t.getAttribute(n)
  );
  return `${e} ${i}`;
}
function od(t, e) {
  const [i, n] = e.split(" ");
  return !i || !n ? de : `${t}[iedName="${i}"][apName="${n}"]`;
}
function er(t) {
  const [e, i] = ["ldInst", "cbName"].map(
    (n) => t.getAttribute(n)
  );
  return `${e} ${i}`;
}
function tr(t, e) {
  const [i, n] = e.split(" ");
  return !i || !n ? de : `${t}[ldInst="${i}"][cbName="${n}"]`;
}
function ld(t) {
  if (!t.parentElement) return NaN;
  if (!t.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = t.getAttribute("type");
  return t.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${q(t.parentElement)}>${e}`;
}
function dd(t, e) {
  const [i, n] = we(e), [r, a] = [
    se[t].parents.flatMap(
      (o) => xe(o, i).split(",")
    ),
    n ? [`[type="${n}"]`] : [""]
  ];
  return ge(r, [">"], [t], a).map((o) => o.join("")).join(",");
}
function sd(t) {
  if (!t.parentElement) return NaN;
  const e = t.parentElement, i = t.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${q(t.parentElement)}>${i}`;
  const n = Array.from(t.parentElement.children).filter((r) => r.getAttribute("type") === i).findIndex((r) => r.isSameNode(t));
  return `${q(t.parentElement)}>${i} [${n}]`;
}
function cd(t, e) {
  const [i, n] = we(e), [r] = n.split(" "), a = n && n.match(/\[([0-9]+)\]/) && n.match(/\[([0-9]+)\]/)[1] ? parseFloat(n.match(/\[([0-9]+)\]/)[1]) : NaN, [o, l, u] = [
    se[t].parents.flatMap(
      (m) => xe(m, i).split(",")
    ),
    [`[type="${r}"]`],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return ge(
    o,
    [">"],
    [t],
    l,
    u
  ).map((m) => m.join("")).join(",");
}
function ud(t) {
  return `${q(t.parentElement)}>${t.getAttribute("ord")}`;
}
function md(t, e) {
  const [i, n] = we(e);
  return `${xe("EnumType", i)}>${t}[ord="${n}"]`;
}
function pd(t) {
  return `${q(t.parentElement)}>${t.getAttribute("type") || "8-MMS"}	${t.textContent}`;
}
function hd(t, e) {
  const [i, n] = we(e), [r, a] = n.split("	"), [o] = [
    se[t].parents.flatMap(
      (l) => xe(l, i).split(",")
    )
  ];
  return ge(
    o,
    [">"],
    [t],
    [`[type="${r}"]`],
    [">"],
    [a]
  ).map((l) => l.join("")).join(",");
}
function fd() {
  return "";
}
function bd() {
  return ":root";
}
function M(t) {
  return t.parentElement.tagName === "SCL" ? t.getAttribute("name") : `${q(t.parentElement)}>${t.getAttribute("name")}`;
}
function F(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [n, r] = we(e);
  if (!r) return de;
  if (i === 0) return `${t}[name="${r}"]`;
  const a = se[t].parents;
  if (!a) return de;
  const o = a.flatMap(
    (l) => se[l].selector === se.Substation.selector ? F(l, n, i - 1).split(",") : xe(l, n).split(",")
  ).filter((l) => !l.startsWith(de));
  return o.length === 0 ? de : ge(o, [">"], [t], [`[name="${r}"]`]).map((l) => l.join("")).join(",");
}
function E(t) {
  return q(t.parentElement).toString();
}
function C(t, e) {
  const i = se[t].parents;
  if (!i) return de;
  const n = i.flatMap((r) => xe(r, e).split(",")).filter((r) => !r.startsWith(de));
  return n.length === 0 ? de : ge(n, [">"], [t]).map((r) => r.join("")).join(",");
}
function ci(t) {
  return `#${t.id}`;
}
function ui(t, e) {
  const i = e.replace(/^#/, "");
  return i ? `${t}[id="${i}"]` : de;
}
const Mr = [
  "TransformerWinding",
  "ConductingEquipment"
], Hr = [
  "GeneralEquipment",
  "PowerTransformer",
  ...Mr
], nn = ["Substation", "VoltageLevel", "Bay"], Br = ["Process", "Line"], qr = ["EqSubFunction", "EqFunction"], gd = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Hr,
  ...nn,
  ...Br,
  ...qr
], Gr = ["ConnectivityNode", ...gd], yd = ["GOOSESecurity", "SMVSecurity"], xd = ["SubNetwork", ...yd, ...Gr], vd = ["BDA", "DA"], _d = ["SampledValueControl", "GSEControl"], wd = ["LogControl", "ReportControl"], Sd = [..._d, ...wd], Ad = ["GSE", "SMV"], Ed = [
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
  ...Sd,
  ...Ad,
  ...vd
], vt = ["LN0", "LN"], Cd = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Id = ["Subject", "IssuerName"], kd = ["MinTime", "MaxTime"], Dd = ["LNodeType", "DOType", "DAType", "EnumType"], Td = [
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
], Nd = ["DynDataSet", "ConfDataSet"], Ld = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...Nd
], $d = ["ConfLogControl", "ConfSigRef"], Rd = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], Od = ["SCL", ...xd, ...Ed, ...Dd], Wr = [
  ...Od,
  ...Cd,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Id,
  ...kd,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...vt,
  ...Td,
  "DynAssociation",
  "SettingGroups",
  ...Ld,
  ...$d,
  ...Rd,
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
], zd = new Set(Wr);
function vn(t) {
  return zd.has(t);
}
const Si = ["Text", "Private"], lt = [...Si], le = [...Si], mi = [...Si], ir = [...le, "Val"], Ur = [...lt, "LNode"], dt = [...Ur], rn = [...dt], Ri = [
  ...dt,
  "PowerTransformer",
  "GeneralEquipment"
], nr = [
  ...rn,
  "Terminal"
], rr = [...le, "Address"], jr = [...lt], ar = [...jr, "IEDName"], or = [
  ...le,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], lr = [
  ...dt,
  "GeneralEquipment",
  "Function"
], dr = [...jr, "TrgOps"], sr = [
  ...dt,
  "GeneralEquipment",
  "EqSubFunction"
], se = {
  AccessControl: {
    identity: E,
    selector: C,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: M,
    selector: F,
    parents: ["IED"],
    children: [
      ...lt,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: E,
    selector: C,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: ql,
    selector: Gl,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: E,
    selector: C,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: M,
    selector: F,
    parents: ["DAType"],
    children: [...ir]
  },
  BitRate: {
    identity: E,
    selector: C,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: M,
    selector: F,
    parents: ["VoltageLevel"],
    children: [
      ...Ri,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: td,
    selector: id,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: E,
    selector: C,
    parents: ["SCL"],
    children: [...le, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: M,
    selector: F,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...nr,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: E,
    selector: C,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: ad,
    selector: od,
    parents: ["SubNetwork"],
    children: [...le, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: M,
    selector: F,
    parents: ["Bay", "Line"],
    children: [...Ur]
  },
  DA: {
    identity: M,
    selector: F,
    parents: ["DOType"],
    children: [...ir]
  },
  DAI: {
    identity: Jn,
    selector: tn,
    parents: ["DOI", "SDI"],
    children: [...le, "Val"]
  },
  DAType: {
    identity: ci,
    selector: ui,
    parents: ["DataTypeTemplates"],
    children: [...mi, "BDA", "ProtNs"]
  },
  DO: {
    identity: M,
    selector: F,
    parents: ["LNodeType"],
    children: [...le]
  },
  DOI: {
    identity: M,
    selector: F,
    parents: [...vt],
    children: [...le, "SDI", "DAI"]
  },
  DOType: {
    identity: ci,
    selector: ui,
    parents: ["DataTypeTemplates"],
    children: [...mi, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: M,
    selector: F,
    parents: [...vt],
    children: [...lt, "FCDA"]
  },
  DataSetDirectory: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: E,
    selector: C,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: ci,
    selector: ui,
    parents: ["DataTypeTemplates"],
    children: [...mi, "EnumVal"]
  },
  EnumVal: {
    identity: ud,
    selector: md,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: M,
    selector: F,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...sr]
  },
  EqSubFunction: {
    identity: M,
    selector: F,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...sr]
  },
  ExtRef: {
    identity: Yl,
    selector: Ql,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: Xl,
    selector: Zl,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: M,
    selector: F,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...dt,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: M,
    selector: F,
    parents: [
      "SubFunction",
      "Function",
      ...Br,
      ...qr,
      ...nn
    ],
    children: [...rn, "EqFunction"]
  },
  GetCBValues: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: M,
    selector: F,
    parents: ["AccessPoint"],
    children: [...lt, "Subject", "IssuerName"]
  },
  GSE: {
    identity: er,
    selector: tr,
    parents: ["ConnectedAP"],
    children: [...rr, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: M,
    selector: F,
    parents: ["LN0"],
    children: [...ar, "Protocol"]
  },
  GSESettings: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: E,
    selector: C,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: E,
    selector: C,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: Fl,
    selector: Vl,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: M,
    selector: F,
    parents: ["SCL"],
    children: [...le, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: jl,
    selector: Kl,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: E,
    selector: C,
    parents: [...vt],
    children: [...le, "ExtRef"]
  },
  IssuerName: {
    identity: E,
    selector: C,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: Hl,
    selector: Bl,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: Wl,
    selector: Ul,
    parents: ["Server"],
    children: [...le, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: Jl,
    selector: ed,
    parents: ["AccessPoint", "LDevice"],
    children: [...or]
  },
  LN0: {
    identity: E,
    selector: C,
    parents: ["LDevice"],
    children: [
      ...or,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: Pl,
    selector: Ml,
    parents: [...Gr],
    children: [...le]
  },
  LNodeType: {
    identity: ci,
    selector: ui,
    parents: ["DataTypeTemplates"],
    children: [...mi, "DO"]
  },
  Line: {
    identity: M,
    selector: F,
    parents: ["Process", "SCL"],
    children: [
      ...lr,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: M,
    selector: F,
    parents: [...vt],
    children: [...le]
  },
  LogControl: {
    identity: M,
    selector: F,
    parents: [...vt],
    children: [...dr]
  },
  LogSettings: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: E,
    selector: C,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: E,
    selector: C,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: E,
    selector: C,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: Yn,
    selector: Qn,
    parents: ["TransformerWinding"],
    children: [...le]
  },
  OptFields: {
    identity: E,
    selector: C,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: sd,
    selector: cd,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: ld,
    selector: dd,
    parents: ["ConnectedAP"],
    children: [...le, "P"]
  },
  PowerTransformer: {
    identity: M,
    selector: F,
    parents: [...nn],
    children: [
      ...rn,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => de,
    parents: [],
    children: []
  },
  Process: {
    identity: M,
    selector: F,
    parents: ["Process", "SCL"],
    children: [
      ...lr,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: pd,
    selector: hd,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: E,
    selector: C,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: M,
    selector: F,
    parents: [...vt],
    children: [...dr, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: E,
    selector: C,
    parents: ["ReportControl"],
    children: [...le, "ClientLN"]
  },
  SamplesPerSec: {
    identity: E,
    selector: C,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: M,
    selector: F,
    parents: ["LN0"],
    children: [...ar, "SmvOpts"]
  },
  SecPerSamples: {
    identity: E,
    selector: C,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: fd,
    selector: bd,
    parents: [],
    children: [
      ...Si,
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
    identity: Jn,
    selector: tn,
    parents: ["DOI", "SDI"],
    children: [...le, "SDI", "DAI"]
  },
  SDO: {
    identity: M,
    selector: F,
    parents: ["DOType"],
    children: [...lt]
  },
  Server: {
    identity: E,
    selector: C,
    parents: ["AccessPoint"],
    children: [
      ...le,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: E,
    selector: C,
    parents: ["AccessPoint"],
    children: [...le]
  },
  Services: {
    identity: E,
    selector: C,
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
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: E,
    selector: C,
    parents: ["LN0"],
    children: [...le]
  },
  SettingGroups: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: E,
    selector: C,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: E,
    selector: C,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: er,
    selector: tr,
    parents: ["ConnectedAP"],
    children: [...rr]
  },
  SmvOpts: {
    identity: E,
    selector: C,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: M,
    selector: F,
    parents: ["AccessPoint"],
    children: [...lt, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: M,
    selector: F,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...Mr
    ],
    children: [...dt, "EqFunction"]
  },
  SubFunction: {
    identity: M,
    selector: F,
    parents: ["SubFunction", "Function"],
    children: [
      ...dt,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: M,
    selector: F,
    parents: ["Communication"],
    children: [...lt, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: E,
    selector: C,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: M,
    selector: F,
    parents: ["SCL"],
    children: [...Ri, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: M,
    selector: F,
    parents: ["TransformerWinding"],
    children: [...dt, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: Yn,
    selector: Qn,
    parents: [...Hr],
    children: [...le]
  },
  Text: {
    identity: E,
    selector: C,
    parents: Wr.filter((t) => t !== "Text" && t !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: E,
    selector: C,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: M,
    selector: F,
    parents: ["PowerTransformer"],
    children: [
      ...nr,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: E,
    selector: C,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: nd,
    selector: rd,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: E,
    selector: C,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: E,
    selector: C,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: M,
    selector: F,
    parents: ["Substation"],
    children: [...Ri, "Voltage", "Bay", "Function"]
  }
};
function xe(t, e) {
  return typeof e != "string" ? de : vn(t) ? se[t].selector(t, e) : t;
}
function Ye(t, e, i) {
  if (typeof i != "string" || !vn(e)) return null;
  const n = t.querySelector(se[e].selector(e, i));
  return n === null || Re(n) ? n : Array.from(
    t.querySelectorAll(se[e].selector(e, i))
  ).find(Re) ?? null;
}
function q(t) {
  if (t === null) return NaN;
  if (t.closest("Private")) return NaN;
  const e = t.tagName;
  return vn(e) ? se[e].identity(t) : NaN;
}
Xa((t) => (e) => {
  Object.keys(t).length ? e.setValue(t) : e.setValue("");
});
const Kt = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  decimal: "[+\\-]?[0-9]+(([.][0-9]*)?|([.][0-9]+))",
  unsigned: "[+]?[0-9]+(([.][0-9]*)?|([.][0-9]+))"
};
function Kr(t, e) {
  return typeof t == "string" && typeof e == "string" ? t.localeCompare(e) : typeof t == "object" && typeof e == "string" ? (t.getAttribute("name") ?? "").localeCompare(e) : typeof t == "string" && typeof e == "object" ? t.localeCompare(e.getAttribute("name")) : typeof t == "object" && typeof e == "object" ? (t.getAttribute("name") ?? "").localeCompare(
    e.getAttribute("name") ?? ""
  ) : 0;
}
function ge(...t) {
  return t.reduce(
    (e, i) => e.flatMap((n) => i.map((r) => [n, r].flat())),
    [[]]
  );
}
function Xr(t, e = /* @__PURE__ */ new WeakSet()) {
  if (e.has(t)) return 1 / 0;
  switch (t?.constructor) {
    case Object:
    case Array:
      return e.add(t), 1 + Math.max(
        -1,
        ...Object.values(t).map((i) => Xr(i, e))
      );
    default:
      return 0;
  }
}
function Re(t) {
  return !t.closest("Private");
}
const Fd = 99, Vd = Array(Fd).fill(1).map((t, e) => `${e + 1}`);
function Pd(t) {
  const e = /* @__PURE__ */ new Map();
  return (i) => {
    if (!e.has(i)) {
      const n = new Set(
        be(t, "LNode").filter((r) => r.getAttribute("lnClass") === i).map((r) => r.getAttribute("lnInst"))
      );
      e.set(i, () => {
        const r = Vd.find((a) => !n.has(a));
        return r && n.add(r), r;
      });
    }
    return e.get(i)();
  };
}
const Md = U`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4.93,4.93C3.12,6.74 2,9.24 2,12C2,14.76 3.12,17.26 4.93,19.07L6.34,17.66C4.89,16.22 4,14.22 4,12C4,9.79 4.89,7.78 6.34,6.34L4.93,4.93M19.07,4.93L17.66,6.34C19.11,7.78 20,9.79 20,12C20,14.22 19.11,16.22 17.66,17.66L19.07,19.07C20.88,17.26 22,14.76 22,12C22,9.24 20.88,6.74 19.07,4.93M7.76,7.76C6.67,8.85 6,10.35 6,12C6,13.65 6.67,15.15 7.76,16.24L9.17,14.83C8.45,14.11 8,13.11 8,12C8,10.89 8.45,9.89 9.17,9.17L7.76,7.76M16.24,7.76L14.83,9.17C15.55,9.89 16,10.89 16,12C16,13.11 15.55,14.11 14.83,14.83L16.24,16.24C17.33,15.15 18,13.65 18,12C18,10.35 17.33,8.85 16.24,7.76M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z" />
</svg>`, Hd = U`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4,1H20A1,1 0 0,1 21,2V6A1,1 0 0,1 20,7H4A1,1 0 0,1 3,6V2A1,1 0 0,1 4,1M4,9H20A1,1 0 0,1 21,10V14A1,1 0 0,1 20,15H4A1,1 0 0,1 3,14V10A1,1 0 0,1 4,9M4,17H20A1,1 0 0,1 21,18V22A1,1 0 0,1 20,23H4A1,1 0 0,1 3,22V18A1,1 0 0,1 4,17M9,5H10V3H9V5M9,13H10V11H9V13M9,21H10V19H9V21M5,3V5H7V3H5M5,11V13H7V11H5M5,19V21H7V19H5Z" />
</svg>`, Bd = U`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M13,13H18V15H13M13,9H18V11H13M6.91,7.41L11.5,12L6.91,16.6L5.5,15.18L8.68,12L5.5,8.82M5,3C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5Z" />
</svg>`;
function qd(t) {
  const e = Gd(t);
  return e ? {
    title: d("wizard.title.edit", { tagName: "Services" }),
    content: [...e],
    element: t
  } : null;
}
function Gd(t) {
  const e = {
    logSettings: {
      cbName: t.querySelector("LogSettings")?.getAttribute("cbName") ?? null,
      datSet: t.querySelector("LogSettings")?.getAttribute("datSet") ?? null,
      logEna: t.querySelector("LogSettings")?.getAttribute("logEna") ?? null,
      intgPd: t.querySelector("LogSettings")?.getAttribute("trgOps") ?? null,
      trgOps: t.querySelector("LogSettings")?.getAttribute("intgPd") ?? null
    },
    confLogControl: {
      max: t.querySelector("ConfLogControl")?.getAttribute("max") ?? null
    },
    dataSet: {
      max: t.querySelector("ConfDataSet")?.getAttribute("max") ?? Array.from(
        t.parentElement?.querySelectorAll("DataSet") || []
      ).length.toString(),
      maxAttributes: t.querySelector("ConfDataSet")?.getAttribute("maxAttributes") ?? null,
      modify: t.querySelector("ConfDataSet")?.getAttribute("modify") ?? "true"
    },
    clientServices: {
      readLog: t.querySelector("ClientServices")?.getAttribute("readLog") ?? null
    },
    sGEdit: {
      resvTms: t.querySelector("SettingGroups > SGEdit")?.getAttribute("resvTms") || null
    },
    confSG: {
      resvTms: t.querySelector("SettingGroups > ConfSG")?.getAttribute("resvTms") || null
    }
  };
  return Dt(e) ? null : [
    B("Log Control Configuration"),
    ...H([
      {
        kind: "Select",
        label: "cbName",
        maybeValue: e.logSettings.cbName,
        helper: "Whether log control block name is configurable offline (Conf) or fixed (Fix)",
        values: ["Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "datSet",
        maybeValue: e.logSettings.datSet,
        helper: "Whether log control blocks data set and its structure is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "logEna",
        maybeValue: e.logSettings.logEna,
        helper: "Whether log control blocks attribute logEna is configurable offline (Conf), online (Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "trgOps",
        maybeValue: e.logSettings.trgOps,
        helper: "Whether log control blocks trigger options are configurable offline (Conf), online(Dyn) or are fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "intgPd",
        maybeValue: e.logSettings.intgPd,
        helper: "Whether log control blocks integrity period is configurable offlien (Conf), online (Dyn), or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      }
    ]),
    B("Log Capabilities"),
    ...H([
      {
        kind: "TextField",
        label: "Max",
        required: !0,
        helper: "The maximum number of log control blocks instantiable by system configuration tool",
        maybeValue: e.confLogControl.max
      }
    ]),
    B("Client Capabilities"),
    ...H([
      {
        kind: "Checkbox",
        label: "read Log",
        nullable: !0,
        helper: "Whether IED supports services to handle logs as a client (see IEC 61850-7-2 for further information)",
        maybeValue: e.clientServices.readLog
      }
    ]),
    B("DataSet Configuration"),
    ...H([
      {
        kind: "TextField",
        label: "Max",
        nullable: !1,
        helper: "The maximum allow data sets in this IED",
        maybeValue: e.dataSet.max
      },
      {
        kind: "TextField",
        label: "Max attributes",
        nullable: !0,
        helper: "The maximum number of FCDA elements per DataSet",
        maybeValue: e.dataSet.maxAttributes
      },
      {
        kind: "Checkbox",
        label: "Modify",
        helper: "Whether DataSet can be modified by SCT",
        maybeValue: e.dataSet.modify
      }
    ]),
    B("Setting Group"),
    ...H([
      {
        kind: "Checkbox",
        label: "SGEdit",
        nullable: !0,
        helper: "Whether IED allows manipulating editable setting groups online",
        maybeValue: e.sGEdit.resvTms
      },
      {
        kind: "Checkbox",
        label: "ConfSG",
        nullable: !0,
        helper: "Whether IED accepts the system configuration tool to configure the number of setting groups",
        maybeValue: e.confSG.resvTms
      }
    ])
  ];
}
function Wd(t) {
  const e = Ud(t);
  return e ? {
    title: d("wizard.title.edit", { tagName: "Report Settings" }),
    content: [...e],
    element: t
  } : null;
}
function Ud(t) {
  const e = {
    reportSettings: {
      cbName: t.querySelector("ReportSettings")?.getAttribute("cbName") ?? null,
      datSet: t.querySelector("ReportSettings")?.getAttribute("datSet") ?? null,
      rptID: t.querySelector("ReportSettings")?.getAttribute("rptID") ?? null,
      optFields: t.querySelector("ReportSettings")?.getAttribute("optFields") ?? null,
      bufTime: t.querySelector("ReportSettings")?.getAttribute("bufTime") ?? null,
      trgOps: t.querySelector("ReportSettings")?.getAttribute("trgOps") ?? null,
      intgPd: t.querySelector("ReportSettings")?.getAttribute("intgPd") ?? null,
      resvTms: t.querySelector("ReportSettings")?.getAttribute("resvTms") ?? null,
      owner: t.querySelector("ReportSettings")?.getAttribute("owner") ?? null
    },
    confReportControl: {
      max: t.querySelector("ConfReportControl")?.getAttribute("max") ?? null,
      bufMode: t.querySelector("ConfReportControl")?.getAttribute("bufMode") ?? null,
      maxBuf: t.querySelector("ConfReportControl")?.getAttribute("maxBuf") ?? null,
      bufConf: t.querySelector("ConfReportControl")?.getAttribute("bufConf") ?? null
    },
    clientServices: {
      maxReports: t.querySelector("ClientServices")?.getAttribute("maxReports") ?? null,
      bufReport: t.querySelector("ClientServices")?.getAttribute("bufReport") ?? null,
      unbufReport: t.querySelector("ClientServices")?.getAttribute("unbufReport") ?? null
    },
    dynDataSet: {
      max: t.querySelector("DynDataSet")?.getAttribute("max") ?? null,
      maxAttributes: t.querySelector("DynDataSet")?.getAttribute("maxAttributes") ?? null
    }
  };
  return Dt(e) ? null : [
    B("Control Block Configuration"),
    ...H([
      {
        kind: "Select",
        label: "cbName",
        maybeValue: e.reportSettings.cbName,
        helper: "Whether report control block name is configurable offline (Conf) or fixed (Fix)",
        values: ["Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "datSet",
        maybeValue: e.reportSettings.datSet,
        helper: "Whether report control blocks data set and its structure is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "rptID",
        maybeValue: e.reportSettings.rptID,
        helper: "Whether report control blocks ID is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "optFields",
        maybeValue: e.reportSettings.optFields,
        helper: "Whether report control blocks optional fields are configurable offline (Conf), online(Dyn) or are fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "bufTime",
        maybeValue: e.reportSettings.bufTime,
        helper: "Whether report control blocks bufTime attribute is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "trgOps",
        maybeValue: e.reportSettings.trgOps,
        helper: "Whether report control blocks trigger options are configurable offline (Conf), online(Dyn) or are fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "intgPd",
        maybeValue: e.reportSettings.intgPd,
        helper: "Whether report control blocks integrity period is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "resvTms",
        helper: "Whether reserve time exists in all buffered report control blocks",
        maybeValue: e.reportSettings.resvTms?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "owner",
        helper: "Whether owner attribute exists on all buffered report control blocks",
        maybeValue: e.reportSettings.owner?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    B("Publisher Capabilities"),
    ...H([
      {
        kind: "TextField",
        label: "max",
        required: !0,
        helper: "The maximum number of report control blocks instantiable by system configuration tool",
        maybeValue: e.confReportControl.max?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Select",
        label: "bufMode",
        maybeValue: e.confReportControl.bufMode,
        helper: "Whether buffered, unbuffered or both type of report control block can be created by system configuration tool",
        values: ["unbuffered", "buffered", "both"],
        default: "both",
        nullable: !0
      },
      {
        kind: "TextField",
        label: "maxBuf",
        required: !1,
        helper: "The maximum number of BUFFERED report control blocks instantiable by system configuration tool",
        maybeValue: e.confReportControl.maxBuf?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "bufConf",
        helper: "Whether buffered attribute can be configured by system configuration tool",
        maybeValue: e.confReportControl.bufConf?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    B("Client Capabilities"),
    ...H([
      {
        kind: "TextField",
        label: "maxReports",
        required: !0,
        helper: "The maximal number of report control blocks the client can work with",
        maybeValue: e.clientServices.maxReports?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "bufReport",
        helper: "Whether the IED can use buffered report control blocks as a client",
        maybeValue: e.clientServices.bufReport?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "unbufReport",
        helper: "Whether the IED can use un-buffered report control blocks as a client",
        maybeValue: e.clientServices.unbufReport?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    B("Dynamic Reporting/DataSets"),
    ...H([
      {
        kind: "TextField",
        label: "max",
        required: !0,
        helper: "The maximum number data sets (including preconfigured once)",
        maybeValue: e.dynDataSet.max?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "TextField",
        label: "maxAttributes",
        required: !1,
        helper: "The maximum number of data entries (FCDA) allowed within a dynamic data set",
        maybeValue: e.dynDataSet.maxAttributes?.toString() ?? null,
        nullable: !0
      }
    ])
  ];
}
function jd(t) {
  const e = Kd(t);
  return e ? {
    title: d("wizard.title.edit", { tagName: "GSE Control" }),
    content: [...e],
    element: t
  } : null;
}
function Kd(t) {
  const e = {
    gseSettings: {
      cbName: t.querySelector("GSESettings")?.getAttribute("cbName") ?? null,
      datSet: t.querySelector("GSESettings")?.getAttribute("datSet") ?? null,
      appID: t.querySelector("GSESettings")?.getAttribute("appID") ?? null,
      dataLabel: t.querySelector("GSESettings")?.getAttribute("dataLabel") ?? null,
      kdaParticipant: t.querySelector("GSESettings")?.getAttribute("kdaParticipant") ?? null,
      signature: t.querySelector("GSESettings > McSecurity")?.getAttribute("signature") ?? null,
      encryption: t.querySelector("GSESettings > McSecurity")?.getAttribute("encryption") ?? null
    },
    goose: {
      max: t.querySelector("GOOSE")?.getAttribute("max") ?? null,
      fixedOffs: t.querySelector("GOOSE")?.getAttribute("fixedOffs") ?? null,
      goose: t.querySelector("GOOSE")?.getAttribute("goose") ?? null,
      rGOOSE: t.querySelector("GOOSE")?.getAttribute("rGOOSE") ?? null
    },
    clientServices: {
      maxGOOSE: t.querySelector("ClientServices")?.getAttribute("maxGOOSE") ?? null,
      goose: t.querySelector("ClientServices")?.getAttribute("goose") ?? null,
      rGOOSE: t.querySelector("ClientServices")?.getAttribute("rGOOSE") ?? null,
      gsse: t.querySelector("ClientServices")?.getAttribute("gsse") ?? null
    },
    supSubscription: {
      maxGo: t.querySelector("SupSubscription")?.getAttribute("maxGo") ?? null,
      maxSv: t.querySelector("SupSubscription")?.getAttribute("maxSv") ?? null
    },
    gsse: {
      max: t.querySelector("GSSE")?.getAttribute("max") ?? null
    }
  };
  return Dt(e) ? null : [
    B("Control Block Configuration"),
    ...H([
      {
        kind: "Select",
        label: "cbName",
        maybeValue: e.gseSettings.cbName,
        helper: "Whether GSE control block (GOOSE) name is configurable offline (Conf) or fixed (Fix)",
        values: ["Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "datSet",
        maybeValue: e.gseSettings.datSet,
        helper: "Whether GSE control blocks (GOOSE) data set and its structure is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "appID",
        maybeValue: e.gseSettings.appID,
        helper: "Whether GSE control blocks (GOOSE) ID is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "dataLabel",
        maybeValue: e.gseSettings.dataLabel,
        helper: "Deprecated!: Whether GSSE object reference is configurable offline (Conf), online(Dyn) or are fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "kdaParticipant",
        maybeValue: e.gseSettings.kdaParticipant,
        helper: "Whether key delivery assurance (KDA) is supported by the server",
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "signature",
        helper: "Whether calculation of a signature is supported for each GOOSE",
        maybeValue: e.gseSettings.signature,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "encryption",
        helper: "Whether message encryption is supported for each GOOSE",
        maybeValue: e.gseSettings.encryption,
        nullable: !0,
        default: !1
      }
    ]),
    B("Publisher Capabilities"),
    ...H([
      {
        kind: "TextField",
        label: "max",
        required: !0,
        helper: "The maximum number of configurable GOOSE control blocks. 0 means no GOOSE publishing supported",
        maybeValue: e.goose.max?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "fixedOffs",
        maybeValue: e.goose.fixedOffs,
        helper: "Whether encoding with fixed offsets is configurable for each GSE control block (GOOSE). See also IEC 61850-8-1",
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "goose",
        helper: "Whether GOOSE publishing is supported",
        maybeValue: e.goose.goose,
        nullable: !0,
        default: !0
      },
      {
        kind: "Checkbox",
        label: "rGOOSE",
        helper: "Whether GOOSE with network layer 3 (IP) is supported",
        maybeValue: e.goose.rGOOSE,
        nullable: !0,
        default: !1
      }
    ]),
    B("Subscription Capabilities"),
    ...H([
      {
        kind: "Checkbox",
        label: "goose",
        helper: "Whether the IED supports client side GOOSE related services",
        maybeValue: e.clientServices.goose?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "TextField",
        label: "maxGOOSE",
        required: !0,
        helper: "The maximal number of GOOSEs the client can subscribe to",
        maybeValue: e.clientServices.maxGOOSE?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "rGOOSE",
        helper: "The maximal number of GOOSEs with network layer 3 the client can subscribe to",
        maybeValue: e.clientServices.rGOOSE?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "gsse",
        helper: "Whether the IED supports client side GSSE related services",
        maybeValue: e.clientServices.gsse?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    B("Supervision Capabilities"),
    ...H([
      {
        kind: "TextField",
        label: "maxGo",
        required: !1,
        helper: "The maximum number of GOOSE supervision supported by this IED (LGOS)",
        maybeValue: e.supSubscription.maxGo?.toString() ?? null,
        nullable: !0
      }
    ]),
    B("GSSE Capabilities"),
    ...H([
      {
        kind: "TextField",
        label: "max",
        required: !0,
        helper: "The maximum number of GSSE supported as publisher. 0 means IED can only subscribe on GSSE messages",
        maybeValue: e.gsse.max?.toString() ?? null,
        nullable: !0
      }
    ])
  ];
}
function Xd(t) {
  const e = Zd(t);
  return e ? {
    title: d("wizard.title.edit", { tagName: "Networking" }),
    content: [...e],
    element: t
  } : null;
}
function Zd(t) {
  const e = {
    fileHandling: {
      mms: t.querySelector("FileHandling")?.getAttribute("mms") ?? null,
      ftp: t.querySelector("FileHandling")?.getAttribute("ftp") ?? null,
      ftps: t.querySelector("FileHandling")?.getAttribute("ftps") ?? null
    },
    timeSyncProt: {
      sntp: t.querySelector("TimeSyncProt")?.getAttribute("sntp") ?? null,
      iec61850_9_3: t.querySelector("TimeSyncProt")?.getAttribute("iec61850_9_3") ?? null,
      c37_238: t.querySelector("TimeSyncProt")?.getAttribute("c37_238") ?? null,
      other: t.querySelector("TimeSyncProt")?.getAttribute("other") ?? null
    },
    cs_TimeSyncProt: {
      sntp: t.querySelector("ClientServices > TimeSyncProt")?.getAttribute("sntp") ?? null,
      iec61850_9_3: t.querySelector("ClientServices > TimeSyncProt")?.getAttribute("iec61850_9_3") ?? null,
      c37_238: t.querySelector("ClientServices > TimeSyncProt")?.getAttribute("c37_238") ?? null,
      other: t.querySelector("ClientServices > TimeSyncProt")?.getAttribute("other") ?? null
    },
    cs_McSecurity: {
      signature: t.querySelector("ClientServices > McSecurity")?.getAttribute("signature") ?? null,
      encryption: t.querySelector("ClientServices > McSecurity")?.getAttribute("encryption") ?? null
    },
    redProt: {
      hsr: t.querySelector("RedProt")?.getAttribute("hsr") ?? null,
      prp: t.querySelector("RedProt")?.getAttribute("prp") ?? null,
      rstp: t.querySelector("RedProt")?.getAttribute("rstp") ?? null
    },
    commProt: {
      ipv6: t.querySelector("CommProt")?.getAttribute("ipv6") ?? null
    }
  };
  return Dt(e) ? null : [
    B("File Handling"),
    ...H([
      {
        kind: "Checkbox",
        label: "mms",
        helper: "Whether the IED supports file transfer as defined by the manufacturer messaging service (MMS)",
        maybeValue: e.fileHandling.mms?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "ftp",
        helper: "Whether the IED supports file transfer service (FTP)",
        maybeValue: e.fileHandling.ftp?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "ftps",
        helper: "Whether the IED supports encrypted file transfer service (FTPS)",
        maybeValue: e.fileHandling.ftps?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    B("Time Server Capabilities"),
    ...H([
      {
        kind: "Checkbox",
        label: "sntp",
        helper: "Whether the IED supports simple network time protocol as time-server",
        maybeValue: e.timeSyncProt.sntp?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "iec61850_9_3",
        helper: "Whether the IED supports precision time protocol (PTP) acc. to IEC 61850-9-3 as time-server",
        maybeValue: e.timeSyncProt.iec61850_9_3?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "c37_238",
        helper: "Whether the IED supports precision time protocol (PTP) acc. to C37.238 as time-server",
        maybeValue: e.timeSyncProt.c37_238?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "other",
        helper: "Whether IED support other type of synchronization as time-server (e.g. PPS)",
        maybeValue: e.timeSyncProt.other?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    B("Time Client Capabilities"),
    ...H([
      {
        kind: "Checkbox",
        label: "sntp",
        helper: "Whether the IED supports simple network time protocol as time-client",
        maybeValue: e.cs_TimeSyncProt.sntp?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "iec61850_9_3",
        helper: "Whether the IED supports precision time protocol (PTP) acc. to IEC 61850-9-3 as time-client",
        maybeValue: e.cs_TimeSyncProt.iec61850_9_3?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "c37_238",
        helper: "Whether the IED supports precision time protocol (PTP) acc. to C37.238 as time-client",
        maybeValue: e.cs_TimeSyncProt.c37_238?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "other",
        helper: "Whether IED support other type of synchronization as time-client (e.g. PPS)",
        maybeValue: e.cs_TimeSyncProt.other?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    B("Multicast Security on Server"),
    ...H([
      {
        kind: "Checkbox",
        label: "signature",
        helper: "Whether calculation of a signature is supported for SMV/GOOSE on this IED/access point",
        maybeValue: e.cs_McSecurity.signature?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "encryption",
        helper: "Whether message encryption is supported for SMV/GOOSE on this IED/access point",
        maybeValue: e.cs_McSecurity.encryption?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    B("Redundancy Protocols"),
    ...H([
      {
        kind: "Checkbox",
        label: "hsr",
        helper: "Whether the IED supports redundancy protocol HSR",
        maybeValue: e.redProt.hsr?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "prp",
        helper: "Whether the IED supports redundancy protocol PRP",
        maybeValue: e.redProt.prp?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "rstp",
        helper: "Whether the IED supports redundancy protocol RSTP",
        maybeValue: e.redProt.rstp?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    B("Others"),
    ...H([
      {
        kind: "Checkbox",
        label: "ipv6",
        helper: "Whether the IED supports IP version 6",
        maybeValue: e.commProt.ipv6?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ])
  ];
}
function Yd(t) {
  const e = Qd(t);
  return e ? {
    title: d("wizard.title.edit", { tagName: "Sampled Values" }),
    content: [...e],
    element: t
  } : null;
}
function Qd(t) {
  const e = {
    controlBlockConfiguration: {
      cbName: t.querySelector("SMVSettings")?.getAttribute("cbName") ?? null,
      datSet: t.querySelector("SMVSettings")?.getAttribute("datSet") ?? null,
      svID: t.querySelector("SMVSettings")?.getAttribute("svID") ?? null,
      optFields: t.querySelector("SMVSettings")?.getAttribute("optFields") ?? null,
      smpRate: t.querySelector("SMVSettings")?.getAttribute("smpRate") ?? null,
      nofASDU: t.querySelector("SMVSettings")?.getAttribute("nofASDU") ?? null,
      samplesPerSec: t.querySelector("SMVSettings")?.getAttribute("samplesPerSec") ?? null,
      synchSrcId: t.querySelector("SMVSettings")?.getAttribute("synchSrcId") ?? null,
      pdcTimeStamp: t.querySelector("SMVSettings")?.getAttribute("pdcTimeStamp") ?? null,
      kdaParticipant: t.querySelector("SMVSettings")?.getAttribute("kdaParticipant") ?? null,
      signature: t.querySelector("SMVSettings > McSecurity")?.getAttribute("signature") ?? null,
      encryption: t.querySelector("SMVSettings > McSecurity")?.getAttribute("encryption") ?? null,
      smpRateVal: t.querySelector("SMVSettings>SmpRate")?.childNodes[0]?.nodeValue ?? null,
      samplesPerSecVal: t.querySelector("SMVSettings > SamplesPerSec")?.childNodes[0]?.nodeValue ?? null,
      secPerSamplesVal: t.querySelector("SMVSettings > SecPerSamples")?.childNodes[0]?.nodeValue ?? null
    },
    publisherCapabilities: {
      max: t.querySelector("SMVsc")?.getAttribute("max") ?? null,
      delivery: t.querySelector("SMVsc")?.getAttribute("delivery") ?? null,
      deliveryConf: t.querySelector("SMVsc")?.getAttribute("deliveryConf") ?? null,
      sv: t.querySelector("SMVsc")?.getAttribute("sv") ?? null,
      rSV: t.querySelector("SMVsc")?.getAttribute("rSV") ?? null
    },
    subscriptionCapabilities: {
      sv: t.querySelector("ClientServices")?.getAttribute("sv") ?? null,
      maxSMV: t.querySelector("ClientServices")?.getAttribute("maxSMV") ?? null,
      rSV: t.querySelector("ClientServices")?.getAttribute("rSV") ?? null
    },
    superVisionCapabilities: {
      maxSv: t.querySelector("SupSubscription")?.getAttribute("maxSv") ?? null
    }
  };
  return Dt(e) ? null : [
    B("Control Block Configuration"),
    ...H([
      {
        kind: "Select",
        label: "cbName",
        maybeValue: e.controlBlockConfiguration.cbName,
        helper: "Whether SMV control block name is configurable offline (Conf) or fixed (Fix)",
        values: ["Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "datSet",
        maybeValue: e.controlBlockConfiguration.datSet,
        helper: "Whether SMV control blocks data set and its structure is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "svID",
        maybeValue: e.controlBlockConfiguration.svID,
        helper: "Whether SMV control blocks ID is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "optFields",
        maybeValue: e.controlBlockConfiguration.optFields,
        helper: "Whether SMV control blocks optional fields are configurable offline (Conf), online(Dyn) or are fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "smpRate",
        maybeValue: e.controlBlockConfiguration.smpRate,
        helper: "Whether SMV control blocks attribute smpRate is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Dyn", "Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Select",
        label: "nofASDU",
        maybeValue: e.controlBlockConfiguration.nofASDU,
        helper: "Whether SMV control blocks attribute noASDU (number of timesstapms per packet) is configurable offline (Conf), online(Dyn) or is fixed (Fix)",
        values: ["Conf", "Fix"],
        default: "Fix",
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "samplesPerSec",
        helper: "Whether SMV supported sample rate definition as SamplesPerSec or SecPerSamples",
        maybeValue: e.controlBlockConfiguration.samplesPerSec?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "synchSrcId",
        helper: "Whether grandmaster clock ID can be included in the SMV",
        maybeValue: e.controlBlockConfiguration.synchSrcId?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "pdcTimeStamp",
        helper: "Whether the PDC timestamp can be included into SMV",
        maybeValue: e.controlBlockConfiguration.pdcTimeStamp?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "kdaParticipant",
        helper: "Whether server supports key delivery assurance (KDA)",
        maybeValue: e.controlBlockConfiguration.kdaParticipant?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "signature",
        helper: "Whether calculation of a signature is supported for each GOOSE",
        maybeValue: e.controlBlockConfiguration.signature?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "encryption",
        helper: "Whether message encryption is supported for each GOOSE",
        maybeValue: e.controlBlockConfiguration.encryption?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "TextField",
        label: "SmpRate",
        required: !0,
        helper: "Defines the implemented SmpRate in the IED",
        maybeValue: e.controlBlockConfiguration.smpRateVal?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "TextField",
        label: "SamplesPerSec",
        required: !0,
        helper: "Defines the implemented SamplesPerSec in the IED",
        maybeValue: e.controlBlockConfiguration.samplesPerSecVal?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "TextField",
        label: "SecPerSamples",
        required: !0,
        helper: "Defines the implemented SecPerSamples in the IED",
        maybeValue: e.controlBlockConfiguration.secPerSamplesVal?.toString() ?? null,
        nullable: !0
      }
    ]),
    B("Publisher Capabilities"),
    ...H([
      {
        kind: "TextField",
        label: "max",
        required: !0,
        helper: "The maximum number of SMV control blocks the IED can publish",
        maybeValue: e.publisherCapabilities.max?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Select",
        label: "delivery",
        maybeValue: e.publisherCapabilities.delivery,
        helper: "Whether the IED supports publishing of muslticast, unicast or both types of SMV streams",
        values: ["unicast", "multicast", "both"],
        default: "multicast",
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "deliveryConf",
        helper: "Whether the system configurator is allowed to configure SMV control blocks",
        maybeValue: e.publisherCapabilities.deliveryConf?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "sv",
        helper: "Whether IED supports layer 2 sampled value streams",
        maybeValue: e.publisherCapabilities.sv?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "rSV",
        helper: "Whether the IED supports layer 3 sampled value streams",
        maybeValue: e.publisherCapabilities.rSV?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    B("Client Capabilities"),
    ...H([
      {
        kind: "Checkbox",
        label: "sv",
        helper: "Whether the IED supports client side SMV related services",
        maybeValue: e.subscriptionCapabilities.sv?.toString() ?? null,
        nullable: !0,
        default: !1
      },
      {
        kind: "TextField",
        label: "maxSMV",
        required: !1,
        helper: "The maximal number of layer 2 sampled value streams the client can subscribe to",
        maybeValue: e.subscriptionCapabilities.maxSMV?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "rSV",
        helper: "The maximal number of layer 3 sampled value streams the client can subscribe to",
        maybeValue: e.subscriptionCapabilities.rSV?.toString() ?? null,
        nullable: !0,
        default: !1
      }
    ]),
    B("Dynamic Reporting/DataSets"),
    ...H([
      {
        kind: "TextField",
        label: "maxSv",
        required: !1,
        helper: "The maximum number of SMV supervision supported by this IED (LSVS)",
        maybeValue: e.superVisionCapabilities.maxSv?.toString() ?? null,
        nullable: !0
      }
    ])
  ];
}
function Jd(t) {
  const e = es(t);
  return e ? {
    title: d("wizard.title.edit", { tagName: "Client Server Services" }),
    content: [...e],
    element: t
  } : null;
}
function es(t) {
  const e = {
    dynamicAssociations: {
      max: t.querySelector("DynAssociation")?.getAttribute("max") ?? null
    },
    discoverCapabilities: {
      getDirectory: t.querySelector("GetDirectory") ? "true" : null,
      getDataObjectDefinition: t.querySelector("GetDataObjectDefinition") ? "true" : null,
      dataObjectDirectory: t.querySelector("DataObjectDirectory") ? "true" : null,
      getDataSetValue: t.querySelector("GetDataSetValue") ? "true" : null,
      setDataSetValue: t.querySelector("SetDataSetValue") ? "true" : null,
      setDataSetDirectory: t.querySelector("DataSetDirectory") ? "true" : null,
      readWrite: t.querySelector("ReadWrite") ? "true" : null
    },
    functionalNaming: {
      confLdName: t.querySelector("ConfLdName") ? "true" : null,
      supportsLdName: t.querySelector("ClientServices")?.getAttribute("supportsLdName") ?? null
    },
    clientCapabilities: {
      maxAttributes: t.querySelector("ClientServices")?.getAttribute("maxAttributes") ?? null,
      timerActivatedControl: t.querySelector("TimerActivatedControl") ? "true" : null,
      getCBValues: t.querySelector("GetCBValues") ? "true" : null,
      GSEDir: t.querySelector("GSEDir") ? "true" : null
    },
    valKindManipulationConfig: {
      setToRO: t.querySelector("ValueHandling")?.getAttribute("setToRO") ?? null
    },
    signalReferenceConfig: {
      max: t.querySelector("ConfSigRef")?.getAttribute("max") ?? null
    }
  };
  return Dt(e) ? null : [
    B("Dynamic Associations"),
    ...H([
      {
        kind: "TextField",
        label: "max",
        required: !1,
        helper: "The maximum number of guaranteed parallel association with the IED. If missing, no association is possible",
        maybeValue: e.dynamicAssociations.max?.toString() ?? null,
        nullable: !0
      }
    ]),
    B("Discover Capabilities"),
    ...H([
      {
        kind: "Checkbox",
        label: "GetDirectory",
        helper: "Whether IED supports GetServerDirectory, GetLogicalDeviceDirectory, GetLogicalNodeDirectory",
        maybeValue: e.discoverCapabilities.getDirectory,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "GetDataObjectDefinition",
        helper: "Whether IED supports the service GetDataDefinition",
        maybeValue: e.discoverCapabilities.getDataObjectDefinition,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "DataObjectDirectory",
        helper: "Whether IED supports the service GetDataDirectory",
        maybeValue: e.discoverCapabilities.dataObjectDirectory,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "GetDataSetValue",
        helper: "Whether IED supports the service GetDataSetValues",
        maybeValue: e.discoverCapabilities.getDataSetValue,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "SetDataSetValue",
        helper: "Whether IED supports the service SetDataSetValue",
        maybeValue: e.discoverCapabilities.setDataSetValue,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "SetDataSetDirectory",
        helper: "Whether IED supports the service SetDataSetDirectory",
        maybeValue: e.discoverCapabilities.setDataSetDirectory,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "ReadWrite",
        helper: "Whether IED supports the service GetData, SetData, and the Operate services",
        maybeValue: e.discoverCapabilities.readWrite,
        nullable: !0,
        default: !1
      }
    ]),
    B("Functional Naming"),
    ...H([
      {
        kind: "Checkbox",
        label: "ConfLdName",
        helper: "Whether the IED allows defining the attribute ldName in logical devices (LDevice)",
        maybeValue: e.functionalNaming.confLdName,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "supportsLdName",
        helper: "Whether the IED understands the logical device (LDevice) name (ldName) setting as a client",
        maybeValue: e.functionalNaming.supportsLdName,
        nullable: !0,
        default: !1
      }
    ]),
    B("Client Capabilities"),
    ...H([
      {
        kind: "TextField",
        label: "maxAttributes",
        required: !1,
        helper: "The maximum receivable data attributes (across all data sets)",
        maybeValue: e.clientCapabilities.maxAttributes?.toString() ?? null,
        nullable: !0
      },
      {
        kind: "Checkbox",
        label: "TimerActivatedControl",
        helper: "Whether IED supports time activated control",
        maybeValue: e.clientCapabilities.timerActivatedControl,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "GetCBValues",
        helper: "Whether IED can read control blocks online",
        maybeValue: e.clientCapabilities.getCBValues,
        nullable: !0,
        default: !1
      },
      {
        kind: "Checkbox",
        label: "GSEDir",
        helper: "Whether IED supports GSE directory services acc. to IEC 61850-7-2",
        maybeValue: e.clientCapabilities.GSEDir,
        nullable: !0,
        default: !1
      }
    ]),
    B("ValKind Manipulation Configuration"),
    ...H([
      {
        kind: "Checkbox",
        label: "setToRO",
        helper: "Whether valKind attribute in DA/BDA element that are Set can be modified to RO (only for function constrains for CF, DC, SP)",
        maybeValue: e.valKindManipulationConfig.setToRO,
        nullable: !0,
        default: !1
      }
    ]),
    B("Signal Reference Configuration"),
    ...H([
      {
        kind: "TextField",
        label: "max",
        required: !1,
        helper: "The maximum object references that the IED can create (instantiation only by IED Configuration Tool)",
        maybeValue: e.signalReferenceConfig.max?.toString() ?? null,
        nullable: !0
      }
    ])
  ];
}
function Dt(t, e = [null, void 0, ""]) {
  return (t === null ? [!1] : Object.keys(t).flatMap((i) => {
    const n = t[i];
    return typeof n == "object" ? Dt(n) : [e.includes(n)];
  })).includes(!0);
}
function ts(t) {
  let e = A``;
  switch (t.kind) {
    case "TextField":
    default:
      e = A`<wizard-textfield
        label=${t.label}
        .maybeValue=${t.maybeValue}
        .helper=${t.helper || ""}
        ?required=${t.required}
        .validationMessage=${t.validationMessage || ""}
        .pattern=${t.pattern || ""}
        .defaultValue=${t.default || ""}
        ?dialogInitialFocus=${t.dialogInitialFocus}
        ?nullable=${t.nullable}
        disabled
      ></wizard-textfield>`;
      break;
    case "Checkbox":
      e = A`<wizard-checkbox
        label=${t.label}
        .maybeValue=${t.maybeValue}
        .helper=${t.helper || ""}
        ?defaultValue=${t.default}
        ?dialogInitialFocus=${t.dialogInitialFocus}
        ?nullable=${t.nullable}
        disabled
      ></wizard-checkbox>`;
      break;
    case "Select":
      e = A`<wizard-select
        label=${t.label}
        .maybeValue=${t.maybeValue}
        .validationMessage=${t.valadationMessage || ""}
        .defaultValue=${t.default || ""}
        ?dialogInitialFocus=${t.dialogInitialFocus}
        ?nullable=${t.nullable}
        disabled
      >
        ${t.values.map((i) => A`<mwc-list-item .value=${i}>
            ${i}
          </mwc-list-item>`)}
      </wizard-select>`;
      break;
  }
  return e;
}
function H(t) {
  return t.map((e) => ts(e));
}
function B(t) {
  return A`<wizard-divider .header=${t}></wizard-divider>`;
}
function Zr(t) {
  return [
    qd(t),
    Wd(t),
    jd(t),
    Xd(t),
    Yd(t),
    Jd(t)
  ].filter((e) => e !== null).map((e) => e);
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
const cr = /* @__PURE__ */ new WeakMap(), ur = 2147483647, Yr = zt((...t) => (e) => {
  let i = cr.get(e);
  i === void 0 && (i = {
    lastRenderedIndex: ur,
    values: []
  }, cr.set(e, i));
  const n = i.values;
  let r = n.length;
  i.values = t;
  for (let a = 0; a < t.length && !(a > i.lastRenderedIndex); a++) {
    const o = t[a];
    if (fn(o) || typeof o.then != "function") {
      e.setValue(o), i.lastRenderedIndex = a;
      break;
    }
    a < r && o === n[a] || (i.lastRenderedIndex = ur, r = 0, Promise.resolve(o).then((l) => {
      const u = i.values.indexOf(o);
      u > -1 && u < i.lastRenderedIndex && (i.lastRenderedIndex = u, e.setValue(l), e.commit());
    }));
  }
});
class Fe extends Pe {
  constructor() {
    super(...arguments), this.disabled = !1, this.onIcon = "", this.offIcon = "", this.on = !1, this.shouldRenderRipple = !1, this.rippleHandlers = new Et(() => (this.shouldRenderRipple = !0, this.ripple));
  }
  handleClick() {
    this.on = !this.on, this.dispatchEvent(new CustomEvent("icon-button-toggle-change", { detail: { isOn: this.on }, bubbles: !0 }));
  }
  click() {
    this.mdcRoot.focus(), this.mdcRoot.click();
  }
  focus() {
    this.rippleHandlers.startFocus(), this.mdcRoot.focus();
  }
  blur() {
    this.rippleHandlers.endFocus(), this.mdcRoot.blur();
  }
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? s`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>` : "";
  }
  /** @soyTemplate */
  render() {
    const e = {
      "mdc-icon-button--on": this.on
    }, i = this.ariaLabelOn !== void 0 && this.ariaLabelOff !== void 0, n = i ? void 0 : this.on, r = i ? this.on ? this.ariaLabelOn : this.ariaLabelOff : this.ariaLabel;
    return s`<button
          class="mdc-icon-button ${ne(e)}"
          aria-pressed="${O(n)}"
          aria-label="${O(r)}"
          @click="${this.handleClick}"
          ?disabled="${this.disabled}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}"
        >${this.renderRipple()}
        <span class="mdc-icon-button__icon"
          ><slot name="offIcon"
            ><i class="material-icons">${this.offIcon}</i
          ></slot
        ></span>
        <span class="mdc-icon-button__icon mdc-icon-button__icon--on"
          ><slot name="onIcon"
            ><i class="material-icons">${this.onIcon}</i
          ></slot
        ></span>
      </button>`;
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
}
c([
  k(".mdc-icon-button")
], Fe.prototype, "mdcRoot", void 0);
c([
  it,
  p({ type: String, attribute: "aria-label" })
], Fe.prototype, "ariaLabel", void 0);
c([
  p({ type: Boolean, reflect: !0 })
], Fe.prototype, "disabled", void 0);
c([
  p({ type: String })
], Fe.prototype, "onIcon", void 0);
c([
  p({ type: String })
], Fe.prototype, "offIcon", void 0);
c([
  p({ type: String })
], Fe.prototype, "ariaLabelOn", void 0);
c([
  p({ type: String })
], Fe.prototype, "ariaLabelOff", void 0);
c([
  p({ type: Boolean, reflect: !0 })
], Fe.prototype, "on", void 0);
c([
  At("mwc-ripple")
], Fe.prototype, "ripple", void 0);
c([
  D()
], Fe.prototype, "shouldRenderRipple", void 0);
c([
  We({ passive: !0 })
], Fe.prototype, "handleRippleMouseDown", null);
c([
  We({ passive: !0 })
], Fe.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let an = class extends Fe {
};
an.styles = [Tr];
an = c([
  z("mwc-icon-button-toggle")
], an);
function is(t, e) {
  const i = {};
  return Array.from(t.attributes).forEach((n) => {
    i[n.name] = n.value;
  }), { element: t, oldAttributes: i, newAttributes: e };
}
function Ai(t, e = "user", i) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { action: t, initiator: e, ...i?.detail }
  });
}
const Qr = {
  IED: [
    {
      attributeName: "iedName",
      filter: xt("Association")
    },
    {
      attributeName: "iedName",
      filter: xt("ClientLN")
    },
    {
      attributeName: "iedName",
      filter: xt("ConnectedAP")
    },
    {
      attributeName: "iedName",
      filter: xt("ExtRef")
    },
    {
      attributeName: "iedName",
      filter: xt("KDC")
    },
    {
      attributeName: "iedName",
      filter: xt("LNode")
    },
    {
      attributeName: null,
      filter: Oi("GSEControl > IEDName")
    },
    {
      attributeName: null,
      filter: Oi("SampledValueControl > IEDName")
    },
    {
      attributeName: null,
      filter: Oi("LN > DOI > DAI > Val")
    }
  ],
  Substation: [
    {
      attributeName: "substationName",
      filter: xt("Terminal")
    }
  ],
  VoltageLevel: [
    {
      attributeName: "voltageLevelName",
      filter: mr("Terminal", {
        Substation: "substationName"
      })
    }
  ],
  Bay: [
    {
      attributeName: "bayName",
      filter: mr("Terminal", {
        Substation: "substationName",
        VoltageLevel: "voltageLevelName"
      })
    }
  ]
};
function xt(t) {
  return function(i, n, r) {
    return `${t}[${n}="${r}"]`;
  };
}
function Oi(t) {
  return function() {
    return `${t}`;
  };
}
function mr(t, e) {
  return function(n, r, a) {
    return `${t}${Object.entries(e).map(([o, l]) => {
      const u = n.closest(o);
      if (u && u.hasAttribute("name")) {
        const m = u.getAttribute("name");
        return `[${l}="${m}"]`;
      }
      return null;
    }).join("")}[${r}="${a}"]`;
  };
}
function ns(t, e, i) {
  const n = t.cloneNode(!1);
  return n.setAttribute(e, i), n;
}
function Jr(t, e) {
  const i = t.cloneNode(!1);
  return i.textContent = e, i;
}
function _n(t, e, i) {
  if (e === null || e === i)
    return [];
  const n = Qr[t.tagName];
  if (n === void 0)
    return [];
  const r = [];
  return n.forEach((a) => {
    const o = a.filter(t, a.attributeName, e);
    a.attributeName ? Array.from(t.ownerDocument.querySelectorAll(`${o}`)).filter(Re).forEach((l) => {
      const u = ns(
        l,
        a.attributeName,
        i
      );
      r.push({ old: { element: l }, new: { element: u } });
    }) : Array.from(t.ownerDocument.querySelectorAll(`${o}`)).filter((l) => l.textContent === e).filter(Re).forEach((l) => {
      const u = Jr(l, i);
      r.push({ old: { element: l }, new: { element: u } });
    });
  }), t.tagName === "IED" && r.push(...rs(t, e, i)), r;
}
function rs(t, e, i) {
  const n = [];
  return t.ownerDocument.querySelectorAll("IED").forEach((a) => {
    const o = Array.from(
      a.querySelectorAll(
        ':scope > AccessPoint > Server > LDevice > LN[lnClass="LGOS"] > DOI > DAI > Val, :scope > AccessPoint > Server > LDevice > LN[lnClass="LSVS"] > DOI > DAI > Val'
      )
    );
    if (o.length === 0) return;
    const l = a.querySelector(
      `:scope > AccessPoint > Server > LDevice > LN0 > Inputs > ExtRef[iedName="${e}"][srcCBName]`
    ), u = l?.getAttribute("srcLDInst") + "/" + l?.getAttribute("srcLNClass") + "." + l?.getAttribute("srcCBName");
    for (let m of o)
      if (e + u === m.textContent.trim()) {
        const f = Jr(
          m,
          i + u
        );
        n.push({
          old: { element: m },
          new: { element: f }
        });
        break;
      }
  }), n;
}
function ea(t) {
  const e = ae(t) ?? null;
  if (e === null)
    return [];
  const i = Qr[t.tagName];
  if (i === void 0)
    return [];
  const n = [];
  return i.forEach((r) => {
    const a = r.filter(t, r.attributeName, e);
    r.attributeName ? Array.from(t.ownerDocument.querySelectorAll(`${a}`)).filter(Re).forEach((o) => {
      n.push({ old: { parent: o.parentElement, element: o } });
    }) : Array.from(t.ownerDocument.querySelectorAll(`${a}`)).filter((o) => o.textContent === e).filter(Re).forEach((o) => {
      o.parentElement && n.push({
        old: {
          parent: o.parentElement.parentElement,
          element: o.parentElement
        }
      });
    });
  }), n;
}
function ta(t) {
  return (e) => {
    const i = v(e.find((a) => a.label === "name")), n = v(e.find((a) => a.label === "desc"));
    if (i === t.getAttribute("name") && n === t.getAttribute("desc"))
      return [];
    const r = Y(t, { name: i, desc: n });
    return [{ old: { element: t }, new: { element: r } }];
  };
}
function as(t, e) {
  return (i) => {
    const n = v(i.find((u) => u.label === "name")), r = t.getAttribute("name"), a = v(i.find((u) => u.label === "desc"));
    if (n === r && a === t.getAttribute("desc"))
      return [];
    const o = Y(t, { name: n, desc: a }), l = {
      actions: [],
      title: d(e, { name: n })
    };
    return l.actions.push({
      old: { element: t },
      new: { element: o }
    }), l.actions.push(..._n(t, r, n)), l.actions.length ? [l] : [];
  };
}
function ia(t, e) {
  return (i) => {
    const n = {};
    if (os(n, t, i), Object.keys(n).length == 0)
      return [];
    ls(t, n);
    const r = v(i.find((o) => o.label === "name")), a = {
      actions: [],
      title: d(e, { name: r })
    };
    return a.actions.push(is(t, n)), a.actions.push(
      ..._n(t, t.getAttribute("name"), r)
    ), a.actions.length ? [a] : [];
  };
}
function os(t, e, i) {
  const n = v(i.find((a) => a.label === "name")), r = v(i.find((a) => a.label === "desc"));
  n !== e.getAttribute("name") && (t.name = n), r !== e.getAttribute("desc") && (t.desc = r);
}
function ls(t, e) {
  const i = Object.keys(e);
  return Array.from(t.attributes).filter((n) => !i.includes(n.name)).forEach((n) => {
    e[n.name] = n.value;
  }), e;
}
function na(t, e) {
  return [
    A`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${d("bay.wizard.nameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    A`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${d("bay.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function ds(t) {
  return (e) => {
    const i = v(e.find((o) => o.label === "name")), n = v(e.find((o) => o.label === "desc")), r = V(t.ownerDocument, "Bay", {
      name: i,
      desc: n
    });
    return [{
      new: {
        parent: t,
        element: r
      }
    }];
  };
}
function ss(t) {
  return [
    {
      title: d("bay.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: d("add"),
        action: ds(t)
      },
      content: na("", "")
    }
  ];
}
function cs(t) {
  return [
    {
      title: d("bay.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: d("save"),
        action: as(
          t,
          "bay.action.updateBay"
        )
      },
      content: na(
        t.getAttribute("name"),
        t.getAttribute("desc")
      )
    }
  ];
}
const on = {
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
function us(t) {
  if (!t) return null;
  const [e, i, n, r, a] = [
    "lnInst",
    "lnClass",
    "iedName",
    "ldInst",
    "prefix"
  ].map((f) => t?.getAttribute(f)), o = [`IED[name="${n}"]`, "IED"], l = ["AccessPoint > Server"], u = [
    `LDevice[inst="${r}"] > LN[inst="${e}"][lnClass="${i}"]`
  ], m = a && a !== "" ? [`[prefix="${a}"]`] : ['[prefix=""]', ":not(prefix)"];
  return t.ownerDocument.querySelector(
    ge(
      o,
      [" > "],
      l,
      [" > "],
      u,
      m
    ).map((f) => f.join("")).join(",")
  );
}
function ra(t) {
  const e = t?.ownerDocument, i = t.getAttribute("lnType"), n = t.getAttribute("lnClass"), r = e.querySelector(
    `DataTypeTemplates > LNodeType[id="${i}"][lnClass="${n}"] > DO[name="SwTyp"]`
  );
  if (r) {
    const a = r.getAttribute("type");
    return e.querySelector(
      `DataTypeTemplates > DOType[id="${a}"] > DA[name="stVal"] > Val`
    )?.innerHTML.trim();
  }
}
function ms(t) {
  const e = t.querySelector(
    'DOI[name="SwTyp"] > DAI[name="stVal"]'
  );
  return e ? e.querySelector("Val")?.innerHTML.trim() : ra(t);
}
function ps(t) {
  return Array.from(t.querySelectorAll("Terminal")).some(
    (e) => e.getAttribute("cNodeName") === "grounded"
  );
}
function hs(t) {
  const e = t.querySelector('LNode[lnClass="XSWI"]'), i = us(e);
  let n;
  return i ? n = ms(i) : e && (n = ra(e)), n ? ["Earthing Switch", "High Speed Earthing Switch"].includes(n) : !1;
}
function fs(t) {
  return t.getAttribute("type") === "DIS" && (ps(t) || hs(t)) ? "ERS" : t.getAttribute("type") ?? "";
}
function bs(t) {
  return on[fs(t)] ?? d("conductingequipment.unknownType");
}
function gs(t, e) {
  return t === "create" ? s`<mwc-select
        style="--mdc-menu-max-height: 196px;"
        required
        label="type"
        helper="${d("conductingequipment.wizard.typeHelper")}"
        validationMessage="${d("textfield.required")}"
      >
        ${Object.keys(on).map(
    (i) => s`<mwc-list-item value="${i}">${on[i]}</mwc-list-item>`
  )}
      </mwc-select>` : s`<mwc-select
        label="type"
        helper="${d("conductingequipment.wizard.typeHelper")}"
        validationMessage="${d("textfield.required")}"
        disabled
      >
        <mwc-list-item selected value="0">${e}</mwc-list-item>
      </mwc-select>`;
}
function aa(t, e, i, n, r) {
  return [
    gs(i, n),
    s`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${d("conductingequipment.wizard.nameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${r}
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${d("conductingequipment.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function ys(t) {
  return (e) => {
    const i = v(e.find((_) => _.label === "name")), n = v(e.find((_) => _.label === "desc")), r = v(e.find((_) => _.label === "type")), a = r === "ERS" ? "DIS" : r, o = V(t.ownerDocument, "ConductingEquipment", {
      name: i,
      type: a,
      desc: n
    });
    if (r !== "ERS") return [{ new: { parent: t, element: o } }];
    const l = t.closest("VoltageLevel")?.querySelector('ConnectivityNode[name="grounded"]'), u = l ? l.closest("Substation")?.getAttribute("name") ?? null : t.closest("Substation")?.getAttribute("name") ?? null, m = l ? l.closest("VoltageLevel")?.getAttribute("name") ?? null : t.closest("VoltageLevel")?.getAttribute("name") ?? null, f = l ? l.closest("Bay")?.getAttribute("name") ?? null : t.closest("Bay")?.getAttribute("name") ?? null, y = f && m && u ? u + "/" + m + "/" + f + "/grounded" : null;
    o.appendChild(
      V(t.ownerDocument, "Terminal", {
        name: "T1",
        cNodeName: "grounded",
        substationName: u,
        voltageLevelName: m,
        bayName: f,
        connectivityNode: y
      })
    );
    const g = {
      new: {
        parent: t,
        element: o
      }
    };
    if (l) return [g];
    const b = V(
      t.ownerDocument,
      "ConnectivityNode",
      {
        name: "grounded",
        pathName: y
      }
    );
    return [g, {
      new: {
        parent: t,
        element: b
      }
    }];
  };
}
function oa(t, e) {
  return Array.from(t.querySelectorAll("ConductingEquipment")).filter(Re).map((i) => i.getAttribute("name") ?? "").filter((i) => e && i !== e);
}
function xs(t) {
  const e = oa(t);
  return [
    {
      title: d("conductingequipment.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: d("add"),
        action: ys(t)
      },
      content: aa(
        "",
        "",
        "create",
        "",
        e
      )
    }
  ];
}
function vs(t) {
  const e = oa(
    t.parentNode,
    t.getAttribute("name")
  );
  return [
    {
      title: d("conductingequipment.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: d("save"),
        action: ta(t)
      },
      content: aa(
        t.getAttribute("name"),
        t.getAttribute("desc"),
        "edit",
        bs(t),
        e
      )
    }
  ];
}
function _s(t, e, i) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${d("connectivitynode.wizard.nameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${i}
      readonly
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="pathName"
      .maybeValue=${e}
      helper="${d("connectivitynode.wizard.pathNameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function ws(t) {
  const e = Array.from(
    t.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(Re).map((i) => i.getAttribute("name") ?? "").filter((i) => i !== t.getAttribute("name"));
  return [
    {
      title: d("connectivitynode.wizard.title.edit"),
      element: t,
      content: _s(
        t.getAttribute("name"),
        t.getAttribute("pathName"),
        e
      )
    }
  ];
}
var Ss = Object.defineProperty, As = Object.getOwnPropertyDescriptor, rt = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? As(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Ss(e, i, r), r;
};
const Es = s`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${d("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let Ge = class extends Pe {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (t) => ({
      path: t,
      header: s`<h2>${"/" + t.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return Xr(this.selection);
  }
  get paths() {
    return this.getPaths();
  }
  set paths(t) {
    const e = {};
    for (const i of t) {
      let n = e;
      for (const r of i)
        Object.prototype.hasOwnProperty.call(n, r) || (n[r] = {}), n = n[r];
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
    let e = Object.keys(this.selection).map((n) => [n]), i = t ?? this.depth - 1;
    for (; i-- > 0; )
      e = e.flatMap((n) => {
        let r = this.selection;
        for (const o of n) r = r[o];
        const a = Object.keys(r).map((o) => n.concat(o));
        return a.length === 0 ? [n] : a;
      });
    return t === void 0 ? e : e.filter((n) => n.length > t);
  }
  multiSelect(t, e, i) {
    let n = this.selection;
    for (const r of e) n = n[r];
    n && n[i] ? delete n[i] : n[i] = {};
  }
  singleSelect(t, e, i) {
    this.path[e.length] === i ? this.path = e : this.path = e.concat(i);
  }
  async select(t, e) {
    const i = t.target.selected.value;
    this.multi ? this.multiSelect(t, e, i) : this.singleSelect(t, e, i), this.requestUpdate(), await this.updateComplete, await new Promise((n) => setTimeout(n, 250)), this.container.scrollLeft = 1e3 * this.depth;
  }
  renderDirectory(t, e) {
    return s`<filtered-list
      @selected=${(i) => this.select(i, t)}
      searchFieldLabel="${this.getTitle(t)}"
    >
      ${e.map(
      (i) => s`<mwc-list-item
            value="${i}"
            ?activated=${this.getPaths(t.length).map((n) => JSON.stringify(n)).includes(JSON.stringify(t.concat(i)))}
            >${this.getDisplayString(i, t)}</mwc-list-item
          >`
    )}
    </filtered-list>`;
  }
  async renderColumn(t) {
    const i = this.getPaths(t).map((r) => this.read(r)), n = [];
    for await (const { header: r, entries: a, path: o } of i)
      (r || a.length > 0) && n.push(
        s`${O(r)} ${this.renderDirectory(o, a)}`
      );
    return n.length === 0 ? s`` : s`<div class="column">${n}</div>`;
  }
  render() {
    const t = new Array(this.depth).fill(0).map((e, i) => this.renderColumn(i));
    return this.loaded = Promise.allSettled(t).then(), s`<div class="pane">
      ${t.map((e) => Yr(e, Es))}
    </div>`;
  }
};
Ge.styles = j`
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
rt([
  p({ type: Object })
], Ge.prototype, "selection", 2);
rt([
  p({ type: Boolean })
], Ge.prototype, "multi", 2);
rt([
  p({ type: Number })
], Ge.prototype, "depth", 1);
rt([
  p({ type: Array })
], Ge.prototype, "paths", 1);
rt([
  p({ type: Array })
], Ge.prototype, "path", 1);
rt([
  p({ attribute: !1 })
], Ge.prototype, "read", 2);
rt([
  p({ attribute: !1 })
], Ge.prototype, "loaded", 2);
rt([
  k("div")
], Ge.prototype, "container", 2);
Ge = rt([
  z("finder-list")
], Ge);
function Cs(t) {
  return t.startsWith("IED:") ? t.replace(/^.*:/, "").trim() : t.startsWith("LN0:") ? "LLN0" : t.replace(/^.*>/, "").trim();
}
function Is(t, e) {
  return async (i) => {
    const [n, r] = i[i.length - 1]?.split(": ", 2), a = Ye(t, n, r);
    return a ? {
      path: i,
      header: void 0,
      entries: e(a).map(
        (o) => `${o.tagName}: ${q(o)}`
      )
    } : { path: i, header: s`<p>${d("error")}</p>`, entries: [] };
  };
}
function la(t) {
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
function ks(t) {
  return s`<finder-list
    multi
    .paths=${[["Server: " + q(t)]]}
    .read=${Is(t.ownerDocument, la)}
    .getDisplayString=${Cs}
    .getTitle=${(e) => e[e.length - 1]}
  ></finder-list>`;
}
function Ds(t, e) {
  const [i, n] = e[e.length - 1].split(": "), r = Ye(t.ownerDocument, i, n);
  if (!r || la(r).length > 0) return;
  const a = e.find((I) => I.startsWith("LN"));
  if (!a) return;
  const [o, l] = a.split(": "), u = Ye(t.ownerDocument, o, l);
  if (!u) return;
  const m = u.closest("LDevice")?.getAttribute("inst"), f = u.getAttribute("prefix") ?? "", y = u.getAttribute("lnClass"), g = u.getAttribute("inst") && u.getAttribute("inst") !== "" ? u.getAttribute("inst") : null;
  let b = "", x = "", _ = "";
  for (const I of e) {
    const [S, w] = I.split(": ");
    if (!["DO", "DA", "SDO", "BDA"].includes(S)) continue;
    const T = Ye(t.ownerDocument, S, w);
    if (!T) return;
    const N = T.getAttribute("name");
    S === "DO" && (b = N), S === "SDO" && (b = b + "." + N), S === "DA" && (x = N, _ = T.getAttribute("fc") ?? ""), S === "BDA" && (x = x + "." + N);
  }
  if (!(!m || !y || !b || !x || !_))
    return V(t.ownerDocument, "FCDA", {
      ldInst: m,
      prefix: f,
      lnClass: y,
      lnInst: g,
      doName: b,
      daName: x,
      fc: _
    });
}
function Ts(t) {
  return (e, i) => {
    const r = i.shadowRoot.querySelector("finder-list")?.paths ?? [], a = [];
    for (const o of r) {
      const l = Ds(t, o);
      l && a.push({
        new: {
          parent: t,
          element: l,
          reference: null
        }
      });
    }
    return a;
  };
}
function da(t) {
  const e = t.closest("Server");
  return [
    {
      title: d("wizard.title.add", { tagName: "FCDA" }),
      primary: {
        label: "add",
        icon: "add",
        action: Ts(t)
      },
      content: [e ? ks(e) : s``]
    }
  ];
}
const Qe = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  asciName: "[A-Za-z][0-9,A-Z,a-z_]*",
  abstractDataAttributeName: "((T)|(Test)|(Check)|(SIUnit)|(Oper)|(SBO)|(SBOw)|(Cancel)|[a-z][0-9A-Za-z]*)"
}, wn = {
  cbName: 32,
  abstracDaName: 60
};
function zi(t, e) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { ...t, ...e?.detail }
  });
}
function Ns(t) {
  return (e, i, n) => {
    const r = n.items.filter((l) => l.selected).map((l) => l.value).map((l) => Ye(t.ownerDocument, "LNodeType", l)).filter((l) => l !== null), a = Pd(t);
    return r.map((l) => {
      const u = l.getAttribute("lnClass");
      if (!u) return null;
      const m = a(u);
      if (!m) {
        i.dispatchEvent(
          zi({
            kind: "error",
            title: d("lnode.log.title", { lnClass: u }),
            message: d("lnode.log.nonuniquelninst")
          })
        );
        return;
      }
      const f = be(t, "LNode").some(
        (x) => x.getAttribute("lnClass") === "LLN0"
      );
      if (u === "LLN0" && f) {
        i.dispatchEvent(
          zi({
            kind: "error",
            title: d("lnode.log.title", { lnClass: u }),
            message: d("lnode.log.uniqueln0", { lnClass: u })
          })
        );
        return;
      }
      const y = be(t, "LNode").some(
        (x) => x.getAttribute("lnClass") === "LPHD"
      );
      if (u === "LPHD" && y) {
        i.dispatchEvent(
          zi({
            kind: "error",
            title: d("lnode.log.title", { lnClass: u }),
            message: d("lnode.log.uniqueln0", { lnClass: u })
          })
        );
        return;
      }
      const g = u === "LLN0" ? "" : m, b = V(t.ownerDocument, "LNode", {
        iedName: "None",
        ldInst: null,
        prefix: null,
        lnClass: u,
        lnInst: g,
        lnType: l.getAttribute("id")
      });
      return { new: { parent: t, element: b } };
    }).filter((l) => l);
  };
}
function Ls(t) {
  return (e) => {
    e.dispatchEvent(me()), e.dispatchEvent(me(ua(t)));
  };
}
function sa(t) {
  const e = Array.from(
    t.ownerDocument.querySelectorAll("LNodeType")
  );
  return [
    {
      title: d("lnode.wizard.title.selectLNodeTypes"),
      menuActions: [
        {
          icon: "",
          label: d("lnode.wizard.reference"),
          action: Ls(t)
        }
      ],
      primary: {
        icon: "save",
        label: d("save"),
        action: Ns(t)
      },
      content: [
        A`<filtered-list multi
          >${e.map((i) => {
          const n = i.getAttribute("lnClass") === "LLN0" && be(t, "LNode").some(
            (r) => r.getAttribute("lnClass") === "LLN0"
          ) || i.getAttribute("lnClass") === "LPHD" && be(t, "LNode").some(
            (r) => r.getAttribute("lnClass") === "LPHD"
          );
          return A`<mwc-check-list-item
              twoline
              value="${q(i)}"
              ?disabled=${n}
              ><span>${i.getAttribute("lnClass")}</span
              ><span slot="secondary"
                >${n ? d("lnode.wizard.uniquewarning") : q(i)}</span
              ></mwc-check-list-item
            >`;
        })}</filtered-list
        >`
      ]
    }
  ];
}
const $s = {
  CBR: ["CSWI", "CILO", "XCBR"],
  DIS: ["CSWI", "CILO", "XSWI"],
  VTR: ["TVTR"],
  CTR: ["TCTR"],
  Bay: ["LLN0"],
  VoltageLevel: ["LLN0"],
  Substation: ["LLN0"]
};
function ca(t, e) {
  return t.disabled !== e.disabled ? e.disabled ? -1 : 1 : t.preferred !== e.preferred ? t.preferred ? -1 : 1 : t.selected !== e.selected ? t.selected ? -1 : 1 : 0;
}
const Rs = "Client LN";
function pr(t, e) {
  return Array.from(t.getElementsByTagName("LNode")).filter((i) => !i.closest("Private")).filter((i) => Sn(e, i))[0] ?? null;
}
function Sn(t, e) {
  return (e.getAttribute("iedName") ?? "") === (t.closest("IED")?.getAttribute("name") ?? "") && (e.getAttribute("ldInst") ?? "") === (t.closest("LDevice")?.getAttribute("inst") ?? "") && (e.getAttribute("prefix") ?? "") === (t.getAttribute("prefix") ?? "") && (e.getAttribute("lnClass") ?? "") === (t.getAttribute("lnClass") ?? "") && (e.getAttribute("lnInst") ?? "") === (t.getAttribute("inst") ?? "");
}
function Os(t, e) {
  const i = V(t.ownerDocument, "LNode", {
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
function zs(t, e) {
  return {
    old: {
      parent: t,
      element: e,
      reference: e.nextElementSibling
    }
  };
}
function Fs(t, e) {
  return t.some((i) => Sn(i, e));
}
function Vs(t, e) {
  return e.some((i) => Sn(t, i));
}
function Ps(t) {
  return (e, i, n) => {
    const r = n.items.filter((u) => u.selected).map((u) => u.value).map((u) => {
      const m = Ye(t.ownerDocument, "LN0", u);
      return m || Ye(t.ownerDocument, "LN", u);
    }).filter((u) => u !== null), a = be(t, "LNode").filter(
      Re
    ), o = a.filter((u) => !Fs(r, u)).map((u) => zs(t, u)), l = r.filter((u) => !Vs(u, a)).map((u) => Os(t, u));
    return o.concat(l);
  };
}
function Ms(t, e) {
  return t.parentElement?.parentElement?.nextElementSibling?.querySelector(
    e
  ) ?? null;
}
function Hs(t, e) {
  if (!(t.target instanceof Te)) return;
  const i = Ms(t.target, "#lnList");
  if (i === null) return;
  const n = e.ownerDocument, o = t.target.selected.flatMap(
    (l) => Array.from(
      n.querySelectorAll(
        `:root > IED[name="${l.value}"] > AccessPoint > LN,:root > IED[name="${l.value}"] > AccessPoint > Server > LDevice > LN,:root > IED[name="${l.value}"] > AccessPoint > Server > LDevice > LN0`
      )
    ).filter((u) => !u.closest("Private"))
  ).filter((l) => l !== null).map((l) => {
    const u = $s[e.getAttribute("type") ? e.getAttribute("type") ?? "" : e.tagName ?? ""]?.includes(l.getAttribute("lnClass") ?? "") ?? !1, m = pr(e.ownerDocument, l), f = m?.parentElement === e;
    return {
      selected: f,
      disabled: m !== null && !f,
      prefered: u,
      element: l
    };
  }).sort(ca).map((l) => A`<mwc-check-list-item
      ?selected=${l.selected}
      ?disabled=${l.disabled}
      value="${q(l.element)}"
      twoline
      ><span
        >${l.element.getAttribute("prefix") ?? ""}${l.element.getAttribute("lnClass")}${l.element.getAttribute(
    "inst"
  ) ?? ""}
        ${l.disabled ? A` <mwc-icon style="--mdc-icon-size: 1em;"
                >account_tree</mwc-icon
              >
              ${Ol(pr(n, l.element))}` : ""}</span
      ><span slot="secondary"
        >${l.element.closest("IED")?.getAttribute("name") ?? ""} |
        ${l.element.closest("LDevice") ? l.element.closest("LDevice")?.getAttribute("inst") : Rs}</span
      ></mwc-check-list-item
    >`);
  vr(A`${o}`, i);
}
function Bs(t) {
  const e = t.ownerDocument;
  return e.querySelectorAll(":root > IED").length > 0 ? A`<filtered-list
      disableCheckAll
      multi
      id="iedList"
      @selected=${(i) => Hs(i, t)}
      >${Array.from(e.querySelectorAll(":root > IED")).map((i) => i.getAttribute("name")).map((i) => ({
    selected: Array.from(t.children).filter((n) => !n.closest("Private")).filter(
      (n) => n.tagName === "LNode" && n.getAttribute("iedName") === i
    ).length > 0,
    iedName: i
  })).sort(ca).map(
    (i) => A`<mwc-check-list-item
              value="${i.iedName ?? ""}"
              ?selected=${i.selected}
              >${i.iedName}</mwc-check-list-item
            >`
  )}</filtered-list
    >` : A`<mwc-list-item noninteractive graphic="icon">
      <span>${d("lnode.wizard.placeholder")}</span>
      <mwc-icon slot="graphic">info</mwc-icon>
    </mwc-list-item>`;
}
function qs(t) {
  return (e) => {
    e.dispatchEvent(me()), e.dispatchEvent(me(sa(t)));
  };
}
function ua(t) {
  return [
    {
      title: d("lnode.wizard.title.selectIEDs"),
      menuActions: [
        {
          icon: "",
          label: d("lnode.wizard.instance"),
          action: qs(t)
        }
      ],
      content: [Bs(t)]
    },
    {
      initial: Array.from(t.children).some(
        (e) => e.tagName === "LNode"
      ),
      title: d("lnode.wizard.title.selectLNs"),
      primary: {
        icon: "save",
        label: d("save"),
        action: Ps(t)
      },
      content: [A`<filtered-list multi id="lnList"></filtered-list>`]
    }
  ];
}
function Gs(t) {
  return t.tagName === "Function" || t.tagName === "SubFunction" || t.tagName === "EqFunction" || t.tagName === "EqSubFunction" ? sa(t) : ua(t);
}
function Ws(t) {
  const e = t.iedName !== "None";
  return [
    A`<wizard-textfield
      label="iedName"
      .maybeValue=${t.iedName}
      helper="${d("scl.iedName")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    A`<wizard-textfield
      label="ldInst"
      .maybeValue=${t.ldInst}
      helper="${d("scl.ldInst")}"
      helperPersistent
      nullable
      disabled
    ></wizard-textfield>`,
    A`<wizard-textfield
      label="prefix"
      .maybeValue=${t.prefix}
      helper="${d("scl.prefix")}"
      pattern="${Qe.asciName}"
      maxLength="11"
      helperPersistent
      nullable
      ?disabled=${e}
    ></wizard-textfield>`,
    A`<wizard-textfield
      label="lnClass"
      .maybeValue=${t.lnClass}
      helper="${d("scl.lnClass")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    A`<wizard-textfield
      label="lnInst"
      .maybeValue=${t.lnInst}
      helper="${d("scl.lnInst")}"
      helperPersistent
      type="number"
      min="1"
      max="99"
      .reservedValues=${t.reservedLnInst}
      ?disabled=${e}
    ></wizard-textfield>`
  ];
}
function Us(t) {
  return (e) => {
    const i = {}, n = ["iedName", "ldInst", "prefix", "lnClass", "lnInst"];
    n.forEach((a) => {
      i[a] = v(e.find((o) => o.label === a));
    });
    let r = null;
    if (n.some((a) => i[a] !== t.getAttribute(a))) {
      const a = Y(t, i);
      return r = {
        old: { element: t },
        new: { element: a }
      }, [r];
    }
    return [];
  };
}
function js(t) {
  const [e, i, n, r, a] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((l) => t.getAttribute(l)), o = be(
    t.parentElement,
    "LNode"
  ).filter(
    (l) => l !== t && l.getAttribute("lnClass") === t.getAttribute("lnClass")
  ).map((l) => l.getAttribute("lnInst"));
  return [
    {
      title: d("wizard.title.edit", { tagName: "LNode" }),
      element: t,
      primary: {
        label: d("save"),
        icon: "save",
        action: Us(t)
      },
      content: [
        ...Ws({
          iedName: e,
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
function Ks(t) {
  return Object.entries(t).map(
    ([e, i]) => s`<wizard-checkbox
        label="${e}"
        .maybeValue=${i}
        nullable
        helper="${d(`scl.${e}`)}"
      ></wizard-checkbox>`
  );
}
function Xs(t) {
  return (e) => {
    const i = v(e.find((y) => y.label === "seqNum")), n = v(e.find((y) => y.label === "timeStamp")), r = v(e.find((y) => y.label === "dataSet")), a = v(e.find((y) => y.label === "reasonCode")), o = v(e.find((y) => y.label === "dataRef")), l = v(e.find((y) => y.label === "entryID")), u = v(e.find((y) => y.label === "configRef")), m = v(e.find((y) => y.label === "bufOvfl"));
    if (i === t.getAttribute("seqNum") && n === t.getAttribute("timeStamp") && r === t.getAttribute("dataSet") && a === t.getAttribute("reasonCode") && o === t.getAttribute("dataRef") && l === t.getAttribute("entryID") && u === t.getAttribute("configRef") && m === t.getAttribute("bufOvfl"))
      return [];
    const f = Y(t, {
      seqNum: i,
      timeStamp: n,
      dataSet: r,
      reasonCode: a,
      dataRef: o,
      entryID: l,
      configRef: u,
      bufOvfl: m
    });
    return [{ old: { element: t }, new: { element: f } }];
  };
}
function Zs(t) {
  const [
    e,
    i,
    n,
    r,
    a,
    o,
    l,
    u
  ] = [
    "seqNum",
    "timeStamp",
    "dataSet",
    "reasonCode",
    "dataRef",
    "entryID",
    "configRef",
    "bufOvfl"
  ].map((m) => t.getAttribute(m));
  return [
    {
      title: d("wizard.title.edit", { tagName: t.tagName }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Xs(t)
      },
      content: Ks({
        seqNum: e,
        timeStamp: i,
        dataSet: n,
        reasonCode: r,
        dataRef: a,
        entryID: o,
        configRef: l,
        bufOvfl: u
      })
    }
  ];
}
let Ys = 1, ma = 1, pa = 1;
function Qs(t, e) {
  return e.parentElement?.querySelectorAll(
    `LN[lnClass="CSWI"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""},LN[lnClass="CILO"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""},LN[lnClass="XCBR"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""},LN[lnClass="XSWI"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""}`
  ).forEach((i) => {
    t.appendChild(
      V(e.ownerDocument, "LNode", {
        iedName: i.parentElement?.parentElement?.parentElement?.parentElement?.getAttribute(
          "name"
        ) ?? null,
        ldInst: e.parentElement?.getAttribute("inst") ?? null,
        prefix: i.getAttribute("prefix"),
        lnClass: i.getAttribute("lnClass"),
        lnInst: i.getAttribute("inst")
      })
    );
  }), t;
}
function ha(t) {
  return t.parentElement?.querySelector(
    `LN[lnClass="XCBR"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""}`
  ) ? "CBR" : "DIS";
}
function Js(t) {
  return t.getAttribute("prefix") && t.getAttribute("inst") ? t.getAttribute("prefix") + t.getAttribute("inst") : t.getAttribute("inst") && ha(t) === "CBR" ? "QA" + ma++ : "QB" + pa++;
}
function ec(t, e) {
  if (Array.from(
    t.querySelectorAll('DOI[name="Pos"] > DAI[name="ctlModel"] > Val')
  ).filter((n) => e.includes(n.innerHTML.trim())).length)
    return !0;
  const i = t.ownerDocument;
  return Array.from(
    i.querySelectorAll(
      `DataTypeTemplates > LNodeType[id="${t.getAttribute(
        "lnType"
      )}"] > DO[name="Pos"]`
    )
  ).map((n) => n.getAttribute("type")).flatMap(
    (n) => Array.from(
      i.querySelectorAll(
        `DOType[id="${n}"] > DA[name="ctlModel"] > Val`
      )
    )
  ).filter((n) => e.includes(n.innerHTML.trim())).length > 0;
}
function tc(t) {
  return Array.from(
    t.querySelectorAll('AccessPoint > Server > LDevice > LN[lnClass="CSWI"]')
  );
}
function ic(t, e) {
  return t.parentElement ? tc(t).filter((i) => ec(i, e)) : [];
}
function nc(t, e) {
  const i = ic(t, e);
  if (ma = 1, pa = 1, i.length) {
    const n = V(t.ownerDocument, "Bay", {
      name: "Q" + Ys++,
      desc: "Bay for controller " + t.getAttribute("name")
    });
    return i.map((a) => Qs(
      V(t.ownerDocument, "ConductingEquipment", {
        name: Js(a),
        type: ha(a)
      }),
      a
    )).forEach((a) => n.appendChild(a)), n;
  }
  return null;
}
function rc(t, e) {
  return (i, n, r) => {
    const a = [], o = r.selected.map(
      (m) => m.value
    ), l = V(t, "VoltageLevel", {
      name: "E1",
      desc: "guessed by OpenSCD",
      nomFreq: "50.0",
      numPhases: "3"
    }), u = V(t, "Voltage", {
      unit: "V",
      multiplier: "k"
    });
    return u.textContent = "110.00", l.appendChild(u), a.push({
      new: { parent: t.querySelector("SCL"), element: e }
    }), a.push({
      new: {
        parent: e,
        element: l
      }
    }), Array.from(t.querySelectorAll(":root > IED")).sort(Kr).map((m) => nc(m, o)).forEach((m) => {
      m && a.push({ new: { parent: l, element: m } });
    }), a;
  };
}
function ac(t, e) {
  return [
    {
      title: d("guess.wizard.title"),
      primary: {
        icon: "play_arrow",
        label: d("guess.wizard.primary"),
        action: rc(t, e)
      },
      content: [
        s`<p>${d("guess.wizard.description")}</p>`,
        s`<mwc-list multi id="ctlModelList"
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
function fa(t, e, i) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${d("substation.wizard.nameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${d("substation.wizard.descHelper")}"
    ></wizard-textfield>`,
    i ? s`<mwc-formfield label="${d("guess.wizard.primary")}">
          <mwc-checkbox></mwc-checkbox>
        </mwc-formfield>` : s``
  ];
}
function oc(t) {
  return (e, i) => {
    const n = v(e.find((l) => l.label === "name")), r = v(e.find((l) => l.label === "desc")), a = i.shadowRoot?.querySelector("mwc-checkbox")?.checked;
    t.ownerDocument.createElement("Substation");
    const o = V(t.ownerDocument, "Substation", {
      name: n,
      desc: r
    });
    return a ? [() => ac(t.ownerDocument, o)] : [{ new: { parent: t, element: o } }];
  };
}
function lc(t) {
  const e = t.ownerDocument.querySelector("Substation") === null && t.tagName === "SCL";
  return [
    {
      title: d("substation.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: d("add"),
        action: oc(t)
      },
      content: fa("", "", e)
    }
  ];
}
function dc(t) {
  return [
    {
      title: d("substation.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: d("save"),
        action: ia(
          t,
          "substation.action.updatesubstation"
        )
      },
      content: fa(
        t.getAttribute("name") ?? "",
        t.getAttribute("desc"),
        !1
      )
    }
  ];
}
function sc(t, e, i, n) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${d("terminal.wizard.nameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${n}
      readonly
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="connectivityNode"
      .maybeValue=${e}
      helper="${d("terminal.wizard.connectivityNodeHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      readonly
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="cNodeName"
      .maybeValue=${i}
      helper="${d("terminal.wizard.cNodeNameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function cc(t) {
  const e = Array.from(
    t.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(Re).map((i) => i.getAttribute("name") ?? "").filter((i) => i !== t.getAttribute("name"));
  return [
    {
      title: d("terminal.wizard.title.edit"),
      element: t,
      content: sc(
        t.getAttribute("name"),
        t.getAttribute("connectivityNode"),
        t.getAttribute("cNodeName"),
        e
      )
    }
  ];
}
const pi = {
  nomFreq: "50",
  numPhases: "3",
  Voltage: "110",
  multiplier: "k"
};
function ba(t, e, i, n, r, a) {
  return [
    A`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${d("voltagelevel.wizard.nameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    A`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${d("voltagelevel.wizard.descHelper")}"
    ></wizard-textfield>`,
    A`<wizard-textfield
      label="nomFreq"
      .maybeValue=${i}
      nullable
      helper="${d("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      required
      validationMessage="${d("textfield.nonempty")}"
      pattern="${Kt.unsigned}"
    ></wizard-textfield>`,
    A`<wizard-textfield
      label="numPhases"
      .maybeValue=${n}
      nullable
      helper="${d("voltagelevel.wizard.numPhaseHelper")}"
      suffix="#"
      required
      validationMessage="${d("textfield.nonempty")}"
      type="number"
      min="1"
      max="255"
    ></wizard-textfield>`,
    A`<wizard-textfield
      label="Voltage"
      .maybeValue=${r}
      nullable
      unit="V"
      .multipliers=${[null, "G", "M", "k", "", "m"]}
      .multiplier=${a}
      helper="${d("voltagelevel.wizard.voltageHelper")}"
      required
      validationMessage="${d("textfield.nonempty")}"
      pattern="${Kt.decimal}"
    ></wizard-textfield>`
  ];
}
function uc(t) {
  return (e) => {
    const i = v(e.find((m) => m.label === "name")), n = v(e.find((m) => m.label === "desc")), r = v(e.find((m) => m.label === "nomFreq")), a = v(e.find((m) => m.label === "numPhases")), o = v(e.find((m) => m.label === "Voltage")), l = xn(e.find((m) => m.label === "Voltage")), u = V(t.ownerDocument, "VoltageLevel", {
      name: i,
      desc: n,
      nomFreq: r,
      numPhases: a
    });
    if (o !== null) {
      const m = V(t.ownerDocument, "Voltage", {
        unit: "V",
        multiplier: l
      });
      m.textContent = o, u.appendChild(m);
    }
    return [
      {
        new: {
          parent: t,
          element: u
        }
      }
    ];
  };
}
function mc(t) {
  return [
    {
      title: d("voltagelevel.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: d("add"),
        action: uc(t)
      },
      content: ba(
        "",
        "",
        pi.nomFreq,
        pi.numPhases,
        pi.Voltage,
        pi.multiplier
      )
    }
  ];
}
function pc(t, e, i, n) {
  if (t === null) {
    const a = V(n.ownerDocument, "Voltage", {
      unit: "V",
      multiplier: i
    });
    return a.textContent = e, {
      new: {
        parent: n,
        element: a,
        reference: n.firstElementChild
      }
    };
  }
  if (e === null)
    return {
      old: {
        parent: n,
        element: t,
        reference: t.nextSibling
      }
    };
  const r = Y(t, { multiplier: i });
  return r.textContent = e, {
    old: { element: t },
    new: { element: r }
  };
}
function hc(t) {
  return (e) => {
    const i = e.find((y) => y.label === "name").value, n = v(e.find((y) => y.label === "desc")), r = v(e.find((y) => y.label === "nomFreq")), a = v(e.find((y) => y.label === "numPhases")), o = v(e.find((y) => y.label === "Voltage")), l = xn(e.find((y) => y.label === "Voltage"));
    let u, m;
    if (i === t.getAttribute("name") && n === t.getAttribute("desc") && r === t.getAttribute("nomFreq") && a === t.getAttribute("numPhases"))
      u = null;
    else {
      const y = Y(t, {
        name: i,
        desc: n,
        nomFreq: r,
        numPhases: a
      });
      u = { old: { element: t }, new: { element: y } };
    }
    o === (t.querySelector("VoltageLevel > Voltage")?.textContent?.trim() ?? null) && l === (t.querySelector("VoltageLevel > Voltage")?.getAttribute("multiplier") ?? null) ? m = null : m = pc(
      t.querySelector("VoltageLevel > Voltage"),
      o,
      l,
      u?.new.element ?? t
    );
    const f = {
      actions: [],
      title: d("voltagelevel.action.updateVoltagelevel", { name: i })
    };
    return u && f.actions.push(u), m && f.actions.push(m), f.actions.push(
      ..._n(t, t.getAttribute("name"), i)
    ), f.actions.length ? [f] : [];
  };
}
function fc(t) {
  return [
    {
      title: d("voltagelevel.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: d("save"),
        action: hc(t)
      },
      content: ba(
        t.getAttribute("name") ?? "",
        t.getAttribute("desc"),
        t.getAttribute("nomFreq"),
        t.getAttribute("numPhases"),
        t.querySelector("VoltageLevel > Voltage")?.textContent?.trim() ?? null,
        t.querySelector("VoltageLevel > Voltage")?.getAttribute("multiplier") ?? null
      )
    }
  ];
}
const ga = "PTR";
function bc(t) {
  return (e) => {
    const i = v(e.find((o) => o.label === "name")), n = v(e.find((o) => o.label === "desc")), r = V(t.ownerDocument, "PowerTransformer", {
      name: i,
      desc: n,
      type: ga
    });
    return [{
      new: {
        parent: t,
        element: r
      }
    }];
  };
}
function ya(t, e, i, n) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${d("powertransformer.wizard.nameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${n}
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${d("powertransformer.wizard.descHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="type"
      .maybeValue=${i}
      disabled
      helper="${d("powertransformer.wizard.typeHelper")}"
    ></wizard-textfield>`
  ];
}
function xa(t, e) {
  return Array.from(t.querySelectorAll("PowerTransformer")).filter(Re).map((i) => i.getAttribute("name") ?? "").filter((i) => e && i !== e);
}
function gc(t) {
  const e = xa(t);
  return [
    {
      title: d("powertransformer.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: d("add"),
        action: bc(t)
      },
      content: ya(
        "",
        null,
        ga,
        e
      )
    }
  ];
}
function yc(t) {
  const e = xa(
    t.parentNode,
    t.getAttribute("name")
  );
  return [
    {
      title: d("powertransformer.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: d("save"),
        action: ta(t)
      },
      content: ya(
        t.getAttribute("name"),
        t.getAttribute("desc"),
        t.getAttribute("type"),
        e
      )
    }
  ];
}
function xc(t) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${d("subnetwork.wizard.nameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${d("subnetwork.wizard.descHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      nullable
      helper="${d("subnetwork.wizard.typeHelper")}"
      pattern="${Kt.normalizedString}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="BitRate"
      .maybeValue=${t.BitRate}
      nullable
      unit="b/s"
      .multipliers=${[null, "M"]}
      .multiplier=${t.multiplier}
      helper="${d("subnetwork.wizard.bitrateHelper")}"
      required
      validationMessage="${d("textfield.nonempty")}"
      pattern="${Kt.decimal}"
    ></wizard-textfield>`
  ];
}
function vc(t, e, i, n) {
  if (t === null) {
    const a = V(n.ownerDocument, "BitRate", {
      unit: "b/s"
    });
    return i && a.setAttribute("multiplier", i), e && (a.textContent = e), {
      new: {
        parent: n,
        element: a,
        reference: n.firstElementChild
      }
    };
  }
  if (e === null)
    return {
      old: {
        parent: n,
        element: t,
        reference: t.nextSibling
      }
    };
  const r = Y(t, { multiplier: i });
  return r.textContent = e, {
    old: { element: t },
    new: { element: r }
  };
}
function _c(t) {
  return (e) => {
    const i = e.find((f) => f.label === "name").value, n = v(e.find((f) => f.label === "desc")), r = v(e.find((f) => f.label === "type")), a = v(e.find((f) => f.label === "BitRate")), o = xn(e.find((f) => f.label === "BitRate"));
    let l, u;
    if (i === t.getAttribute("name") && n === t.getAttribute("desc") && r === t.getAttribute("type"))
      l = null;
    else {
      const f = Y(t, { name: i, desc: n, type: r });
      l = { old: { element: t }, new: { element: f } };
    }
    a === (t.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null) && o === (t.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null) ? u = null : u = vc(
      t.querySelector("SubNetwork > BitRate"),
      a,
      o,
      l?.new.element ?? t
    );
    const m = [];
    return l && m.push(l), u && m.push(u), m;
  };
}
function wc(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = t.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null, a = t.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null;
  return [
    {
      title: d("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: d("save"),
        action: _c(t)
      },
      content: xc({ name: e, desc: i, type: n, BitRate: r, multiplier: a })
    }
  ];
}
const Sc = [
  "ldInst",
  "lnClass",
  "lnInst",
  "prefix",
  "doName",
  "daName"
];
function Ac(t) {
  return Sc.map(
    (e) => t.getAttribute(e) ? `[${e}="${t.getAttribute(
      e
    )}"]` : ""
  ).join("");
}
const Ec = ["srcLDInst", "srcLNClass", "srcLNInst", "srcCBName"];
function Cc(t) {
  return Ec.map(
    (e) => t.getAttribute(e) ? `[${e}="${t.getAttribute(e)}"]` : ""
  ).join("");
}
function Ic(t) {
  if (!t.length) return [];
  const e = [], i = {};
  for (const n of t) {
    const r = n.old.element, a = n.old.parent, o = q(a);
    i[o] || (i[o] = a.cloneNode(!0));
    const l = i[o].querySelector(
      `ExtRef${r.getAttribute("iedName") ? `[iedName="${r.getAttribute("iedName")}"]` : ""}${Ac(r)}${r.getAttribute("serviceType") ? `[serviceType="${r.getAttribute("serviceType")}"]` : ""}${Cc(r)}`
    );
    l && i[o].removeChild(l);
  }
  return Object.entries(i).forEach(([n, r]) => {
    if (r.children.length == 0) {
      const a = t[0].old.parent.ownerDocument, o = Ye(a, "Inputs", n);
      o && o.parentElement && e.push({
        old: { parent: o.parentElement, element: o }
      });
    }
  }), e;
}
const kc = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function Dc(t, e, i, n, r, a, o, l, u) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${d("ied.wizard.nameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${u}
      pattern="${kc}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${d("ied.wizard.descHelper")}"
      pattern="${Qe.normalizedString}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="type"
      .maybeValue=${i || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="manufacturer"
      .maybeValue=${n || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="configVersion"
      .maybeValue=${r || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="originalSclVersion"
      .maybeValue=${a || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="engRight"
      .maybeValue=${o || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="owner"
      .maybeValue=${l || "-"}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function Tc(t) {
  return [
    s` <section>
      <h1>${d("ied.wizard.title.references")}</h1>
      <mwc-list>
        ${t.map((e) => {
      const i = e.old.element;
      return s` <mwc-list-item noninteractive twoline>
            <span>${i.tagName}</span>
            <span slot="secondary"
              >${q(e.old.element)}</span
            >
          </mwc-list-item>`;
    })}
      </mwc-list>
    </section>`
  ];
}
function Nc(t) {
  return (t.getAttribute("originalSclVersion") ?? "").concat(t.getAttribute("originalSclRevision") ?? "").concat(t.getAttribute("originalSclRelease") ?? "");
}
function Lc(t) {
  return Array.from(t.parentNode.querySelectorAll("IED")).filter(Re).map((e) => e.getAttribute("name") ?? "").filter((e) => e !== t.getAttribute("name"));
}
function $c(t) {
  return (e, i) => {
    i.dispatchEvent(me());
    const n = ea(t), r = n.filter(
      (u) => u.old.element.tagName === "ExtRef"
    ), a = Ic(r), o = t.getAttribute("name") ?? "Unknown", l = {
      actions: [],
      title: d("ied.action.deleteied", { name: o })
    };
    return l.actions.push({
      old: { parent: t.parentElement, element: t }
    }), l.actions.push(...n), l.actions.push(...a), [l];
  };
}
function va(t) {
  const e = ea(t);
  return e.length > 0 ? [
    {
      title: d("ied.wizard.title.delete"),
      content: Tc(e),
      primary: {
        icon: "delete",
        label: d("remove"),
        action: $c(t)
      }
    }
  ] : null;
}
function Rc(t) {
  function e(i) {
    return (n) => {
      const r = va(i);
      r && n.dispatchEvent(kt(() => r)), n.dispatchEvent(
        Ai({ old: { parent: i.parentElement, element: i } })
      ), n.dispatchEvent(me());
    };
  }
  return [
    {
      title: d("ied.wizard.title.edit"),
      element: t,
      menuActions: [
        {
          icon: "delete",
          label: d("remove"),
          action: e(t)
        }
      ],
      primary: {
        icon: "edit",
        label: d("save"),
        action: ia(
          t,
          "ied.action.updateied"
        )
      },
      content: Dc(
        t.getAttribute("name"),
        t.getAttribute("desc"),
        t.getAttribute("type"),
        t.getAttribute("manufacturer"),
        t.getAttribute("configVersion"),
        Nc(t),
        t.getAttribute("engRight"),
        t.getAttribute("owner"),
        Lc(t)
      )
    }
  ];
}
const Oc = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function zc(t, e, i, n) {
  return [
    e ? s`<wizard-textfield
          label="ldName"
          .maybeValue=${t}
          helper="${d("ldevice.wizard.noNameSupportHelper")}"
          helperPersistent
          readOnly
          disabled
        ></wizard-textfield>` : s`<wizard-textfield
          label="ldName"
          .maybeValue=${t}
          nullable
          helper="${d("ldevice.wizard.nameHelper")}"
          validationMessage="${d("textfield.required")}"
          dialogInitialFocus
          pattern="${Oc}"
        ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${i}
      nullable
      helper="${d("ldevice.wizard.descHelper")}"
      pattern="${Qe.normalizedString}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="ldInst"
      .maybeValue=${n}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function Fc(t) {
  return !!t.closest("IED")?.querySelector("Services > ConfLdName");
}
function Vc(t) {
  return (e) => {
    const i = {}, n = ["ldName", "desc"];
    if (n.forEach((r) => {
      i[r] = v(e.find((a) => a.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = Y(t, i);
      return [
        {
          old: { element: t },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Pc(t) {
  return [
    {
      title: d("ldevice.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: d("save"),
        action: Vc(t)
      },
      content: zc(
        t.getAttribute("ldName"),
        !Fc(t),
        t.getAttribute("desc"),
        t.getAttribute("inst")
      )
    }
  ];
}
function Mc(t) {
  return Object.entries(t).map(
    ([e, i]) => s`<wizard-checkbox
        label="${e}"
        .maybeValue=${i}
        nullable
        helper="${d(`scl.${e}`)}"
      ></wizard-checkbox>`
  );
}
function Hc(t) {
  return (e) => {
    const i = v(e.find((m) => m.label === "dchg")), n = v(e.find((m) => m.label === "qchg")), r = v(e.find((m) => m.label === "dupd")), a = v(e.find((m) => m.label === "period")), o = v(e.find((m) => m.label === "gi"));
    if (i === t.getAttribute("dchg") && n === t.getAttribute("qchg") && r === t.getAttribute("dupd") && a === t.getAttribute("period") && o === t.getAttribute("gi"))
      return [];
    const l = Y(t, {
      dchg: i,
      qchg: n,
      dupd: r,
      period: a,
      gi: o
    });
    return [{ old: { element: t }, new: { element: l } }];
  };
}
function Bc(t) {
  const [e, i, n, r, a] = [
    "dchg",
    "qchg",
    "dupd",
    "period",
    "gi"
  ].map((o) => t.getAttribute(o));
  return [
    {
      title: d("wizard.title.edit", { tagName: t.tagName }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Hc(t)
      },
      content: Mc({ dchg: e, qchg: i, dupd: n, period: r, gi: a })
    }
  ];
}
class Se extends Pe {
  constructor() {
    super(...arguments), this.raised = !1, this.unelevated = !1, this.outlined = !1, this.dense = !1, this.disabled = !1, this.trailingIcon = !1, this.fullwidth = !1, this.icon = "", this.label = "", this.expandContent = !1, this.shouldRenderRipple = !1, this.rippleHandlers = new Et(() => (this.shouldRenderRipple = !0, this.ripple));
  }
  /** @soyTemplate */
  renderOverlay() {
    return s``;
  }
  /** @soyTemplate */
  renderRipple() {
    const e = this.raised || this.unelevated;
    return this.shouldRenderRipple ? s`<mwc-ripple class="ripple" .primary="${!e}" .disabled="${this.disabled}"></mwc-ripple>` : "";
  }
  focus() {
    const e = this.buttonElement;
    e && (this.rippleHandlers.startFocus(), e.focus());
  }
  blur() {
    const e = this.buttonElement;
    e && (this.rippleHandlers.endFocus(), e.blur());
  }
  /** @soyTemplate classMap */
  getRenderClasses() {
    return ne({
      "mdc-button--raised": this.raised,
      "mdc-button--unelevated": this.unelevated,
      "mdc-button--outlined": this.outlined,
      "mdc-button--dense": this.dense
    });
  }
  /**
   * @soyTemplate
   * @soyAttributes buttonAttributes: #button
   * @soyClasses buttonClasses: #button
   */
  render() {
    return s`
      <button
          id="button"
          class="mdc-button ${this.getRenderClasses()}"
          ?disabled="${this.disabled}"
          aria-label="${this.label || this.icon}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderOverlay()}
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon && !this.trailingIcon ? this.renderIcon() : ""}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="slot-container ${ne({
      flex: this.expandContent
    })}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon && this.trailingIcon ? this.renderIcon() : ""}
          </slot>
        </span>
      </button>`;
  }
  /** @soyTemplate */
  renderIcon() {
    return s`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`;
  }
  handleRippleActivate(e) {
    const i = () => {
      window.removeEventListener("mouseup", i), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", i), this.rippleHandlers.startPress(e);
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
}
Se.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
c([
  p({ type: Boolean, reflect: !0 })
], Se.prototype, "raised", void 0);
c([
  p({ type: Boolean, reflect: !0 })
], Se.prototype, "unelevated", void 0);
c([
  p({ type: Boolean, reflect: !0 })
], Se.prototype, "outlined", void 0);
c([
  p({ type: Boolean })
], Se.prototype, "dense", void 0);
c([
  p({ type: Boolean, reflect: !0 })
], Se.prototype, "disabled", void 0);
c([
  p({ type: Boolean, attribute: "trailingicon" })
], Se.prototype, "trailingIcon", void 0);
c([
  p({ type: Boolean, reflect: !0 })
], Se.prototype, "fullwidth", void 0);
c([
  p({ type: String })
], Se.prototype, "icon", void 0);
c([
  p({ type: String })
], Se.prototype, "label", void 0);
c([
  p({ type: Boolean })
], Se.prototype, "expandContent", void 0);
c([
  k("#button")
], Se.prototype, "buttonElement", void 0);
c([
  At("mwc-ripple")
], Se.prototype, "ripple", void 0);
c([
  D()
], Se.prototype, "shouldRenderRipple", void 0);
c([
  We({ passive: !0 })
], Se.prototype, "handleRippleActivate", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const qc = j`.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;font-size:1.125rem;height:1.125rem;vertical-align:top;width:1.125rem}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{border-style:solid}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 8px 0 8px}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px;height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined .mdc-button__touch{left:-1px;width:calc(100% + 2 * 1px)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;font-size:1.125rem;height:1.125rem;vertical-align:top;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{display:none}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;
let ln = class extends Se {
};
ln.styles = [qc];
ln = c([
  z("mwc-button")
], ln);
const Gc = [
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
], Wc = [
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
], Uc = ["Spec", "Conf", "RO", "Set"], jc = ["SmpPerPeriod", "SmpPerSec", "SecPerSmp"], _a = [
  "None",
  "Signature",
  "SignatureAndEncryption"
];
function Kc(t, e, i) {
  if (!t.target || !t.target.parentElement) return;
  const n = t.target.selected?.value;
  if (t.target.parentElement.querySelector(
    'wizard-select[label="bType"]'
  ).value !== "Enum") return;
  const a = Array.from(
    e.querySelectorAll(`EnumType[id="${n}"] > EnumVal`)
  ).map(
    (l) => A`<mwc-list-item
        value="${l.textContent?.trim() ?? ""}"
        ?selected=${l.textContent?.trim() === i}
        >${l.textContent?.trim()}</mwc-list-item
      >`
  ), o = t.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  vr(A`${a}`, o), o.requestUpdate();
}
function Xc(t, e, i) {
  const n = t.target.selected.value, r = t.target.parentElement.querySelector(
    'wizard-select[label="type"]'
  );
  r.disabled = !(n === "Enum" || n === "Struct");
  const a = [];
  Array.from(r.children).forEach((u) => {
    const m = u;
    m.disabled = !u.classList.contains(n), m.noninteractive = !u.classList.contains(n), m.style.display = u.classList.contains(n) ? "" : "none", m.disabled || a.push(m);
  }), r.value = a.length ? a[0].value : "";
  const o = t.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  n === "Enum" ? o.style.display = "" : o.style.display = "none";
  const l = t.target.parentElement.querySelector(
    'wizard-textfield[label="Val"]'
  );
  n === "Enum" || n === "Struct" ? l.style.display = "none" : l.style.display = "", o.requestUpdate(), l.requestUpdate(), r.requestUpdate();
}
function Zc(t, e, i, n, r, a, o, l, u, m) {
  return [
    A`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${d("scl.name")}"
      required
      pattern="${Qe.abstractDataAttributeName}"
      maxLength="${wn.abstracDaName}"
      dialogInitialFocus
    >
      ></wizard-textfield
    >`,
    A`<wizard-textfield
      label="desc"
      helper="${d("scl.desc")}"
      .maybeValue=${e}
      nullable
      pattern="${Qe.normalizedString}"
    ></wizard-textfield>`,
    A`<wizard-select
      fixedMenuPosition
      label="bType"
      .value=${i}
      helper="${d("scl.bType")}"
      required
      @selected=${(f) => Xc(f)}
      >${Wc.map(
      (f) => A`<mwc-list-item value="${f}"
            >${f}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    A`<wizard-select
      label="type"
      .maybeValue=${r}
      helper="${d("scl.type")}"
      fixedMenuPosition
      @selected=${(f) => Kc(f, m, u)}
      >${n.map(
      (f) => A`<mwc-list-item
            class="${f.tagName === "EnumType" ? "Enum" : "Struct"}"
            value=${f.id}
            >${f.id}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    A`<wizard-textfield
      label="sAddr"
      .maybeValue=${a}
      helper="${d("scl.sAddr")}"
      nullable
      pattern="${Qe.normalizedString}"
    ></wizard-textfield>`,
    A`<wizard-select
      label="valKind"
      .maybeValue=${o}
      helper="${d("scl.valKind")}"
      nullable
      required
      fixedMenuPosition
      >${Uc.map(
      (f) => A`<mwc-list-item value="${f}"
            >${f}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    A`<wizard-checkbox
      label="valImport"
      .maybeValue=${l}
      helper="${d("scl.valImport")}"
      nullable
      required
    ></wizard-checkbox>`,
    A`<wizard-select
      label="Val"
      .maybeValue=${u}
      helper="${d("scl.Val")}"
      nullable
      >${Array.from(
      m.querySelectorAll(`EnumType > EnumVal[id="${r}"]`)
    ).map(
      (f) => A`<mwc-list-item value="${f.textContent?.trim() ?? ""}"
            >${f.textContent?.trim()}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    A`<wizard-textfield
      label="Val"
      .maybeValue=${u}
      helper="${d("scl.Val")}"
      nullable
    ></wizard-textfield>`
  ];
}
function Yc(t, e, i, n) {
  return [
    A`<wizard-select
      label="fc"
      .maybeValue=${t}
      helper="${d("scl.fc")}"
      required
      fixedMenuPosition
      >${Gc.map(
      (r) => A`<mwc-list-item value="${r}">${r}</mwc-list-item>`
    )}</wizard-select
    >`,
    A`<wizard-checkbox
      label="dchg"
      .maybeValue=${e}
      helper="${d("scl.dchg")}"
      nullable
    ></wizard-checkbox>`,
    A`<wizard-checkbox
      label="qchg"
      .maybeValue=${i}
      helper="${d("scl.qchg")}"
      nullable
    ></wizard-checkbox>`,
    A`<wizard-checkbox
      label="dupd"
      .maybeValue=${n}
      helper="${d("scl.dupd")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function Qc(t) {
  return (e) => {
    const i = v(e.find((S) => S.label === "name")), n = v(e.find((S) => S.label === "desc")), r = v(e.find((S) => S.label === "bType")), a = r === "Enum" || r === "Struct" ? v(e.find((S) => S.label === "type")) : null, o = v(e.find((S) => S.label === "sAddr")), l = v(e.find((S) => S.label === "valKind")), u = v(e.find((S) => S.label === "valImport")), m = e.find(
      (S) => S.label === "Val" && S.style.display !== "none"
    ), f = m ? v(m) : null, y = v(e.find((S) => S.label === "fc")) ?? "", g = v(e.find((S) => S.label === "dchg")), b = v(e.find((S) => S.label === "qchg")), x = v(e.find((S) => S.label === "dupd")), _ = [], I = V(t.ownerDocument, "DA", {
      name: i,
      desc: n,
      bType: r,
      type: a,
      sAddr: o,
      valKind: l,
      valImport: u,
      fc: y,
      dchg: g,
      qchg: b,
      dupd: x
    });
    if (f !== null) {
      const S = V(t.ownerDocument, "Val", {});
      S.textContent = f, I.appendChild(S);
    }
    return _.push({
      new: {
        parent: t,
        element: I
      }
    }), _;
  };
}
function Jc(t) {
  const e = t.ownerDocument, i = "", n = null, r = "", a = null, o = null, l = null, u = null, m = null, f = "", y = null, g = null, b = null, x = Array.from(e.querySelectorAll("DAType, EnumType")).filter(Re).filter((I) => I.getAttribute("id")), _ = t.closest("DataTypeTemplates");
  return [
    {
      title: d("da.wizard.title.edit"),
      primary: {
        icon: "",
        label: d("save"),
        action: Qc(t)
      },
      content: [
        ...Zc(
          i,
          n,
          r,
          x,
          a,
          o,
          u,
          m,
          l,
          _
        ),
        ...Yc(f, y, g, b)
      ]
    }
  ];
}
const Ne = (t, e) => t === null ? "" : e;
function $t() {
  return {
    BOOLEAN: t(),
    Enum: e(),
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
  function t() {
    return {
      render: (u, m, f = null) => (f ? [...Array(f)] : [f]).map((y, g) => A`<wizard-select
            id="Val${Ne(y, `${g + 1}`)}"
            label="Val${Ne(y, ` for sGroup ${g + 1}`)}"
            .maybeValue=${o(m)}
            fixedMenuPosition
          >
            <mwc-list-item value="true">true</mwc-list-item>
            <mwc-list-item value="false">false</mwc-list-item>
          </wizard-select>`),
      value: (u, m) => v(
        u.find((f) => f.id === `Val${m || ""}`)
      )
    };
  }
  function e() {
    return {
      render: (u, m, f = null) => (f ? [...Array(f)] : [f]).map((y, g) => A`<wizard-select
            id="Val${Ne(y, `${g + 1}`)}"
            label="Val${Ne(y, ` for sGroup ${g + 1}`)}"
            .maybeValue=${o(m)}
            fixedMenuPosition
          >
            ${l(u).map((b) => A`<mwc-list-item value="${b}"
                >${b}</mwc-list-item
              >`)}
          </wizard-select>`),
      value: (u, m) => v(
        u.find((f) => f.id === `Val${m || ""}`)
      )
    };
  }
  function i(u, m, f) {
    return {
      render: (y, g, b = null) => (b ? [...Array(b)] : [b]).map((x, _) => A`<wizard-textfield
            id="Val${Ne(x, `${_ + 1}`)}"
            label="Val${Ne(x, ` for sGroup ${_ + 1}`)}"
            .maybeValue=${o(g)}
            helper="${d("dai.wizard.valueHelper", { type: u })}"
            type="number"
            min=${m}
            max=${f}
            step="0.1"
          >
          </wizard-textfield>`),
      value: (y, g) => v(
        y.find((b) => b.id === `Val${g || ""}`)
      )
    };
  }
  function n(u, m, f) {
    return {
      render: (y, g, b = null) => (b ? [...Array(b)] : [b]).map((x, _) => A`<wizard-textfield
            id="Val${Ne(x, `${_ + 1}`)}"
            label="Val${Ne(x, ` for sGroup ${_ + 1}`)}"
            .maybeValue=${o(g)}
            helper="${d("dai.wizard.valueHelper", { type: u })}"
            type="number"
            min=${m}
            max=${f}
          >
          </wizard-textfield>`),
      value: (y, g) => v(
        y.find((b) => b.id === `Val${g || ""}`)
      )
    };
  }
  function r() {
    return {
      render: (u, m, f = null) => {
        const y = o(m);
        return (f ? [...Array(f)] : [f]).reduce(
          (g, b, x) => g.concat([
            A`<wizard-textfield
                id="ValDate${Ne(b, `${x + 1}`)}"
                label="Val (Date)${Ne(b, ` for sGroup ${x + 1}`)}"
                .maybeValue=${eu(y)}
                type="date"
              >
              </wizard-textfield>`,
            A`<wizard-textfield
                id="ValTime${Ne(b, `${x + 1}`)}"
                label="Val (Time)${Ne(b, ` for sGroup ${x + 1}`)}"
                .maybeValue=${tu(y)}
                type="time"
                step="1"
              >
              </wizard-textfield>`
          ]),
          []
        );
      },
      value: (u, m) => {
        const f = [`ValDate${m || ""}`, `ValTime${m || ""}`].map(
          (b) => v(u.find((x) => x.id === b))
        ), y = f[0] ? f[0] : "0000-00-00", g = f[1] ? f[1] : "00:00:00";
        return y + "T" + g + ".000";
      }
    };
  }
  function a(u, m) {
    return {
      render: (f, y, g = null) => (g ? [...Array(g)] : [g]).map((b, x) => A`<wizard-textfield
            id="Val${Ne(b, ` ${x + 1}`)}"
            label="Val${Ne(b, ` for sGroup ${x + 1}`)}"
            .maybeValue=${o(y)}
            helper="${d("dai.wizard.valueHelper", { type: u })}"
            maxLength=${m}
            type="text"
          >
          </wizard-textfield>`),
      value: (f, y) => v(
        f.find((g) => g.id === `Val${y || ""}`)
      )
    };
  }
  function o(u) {
    return (u?.querySelector("Val") ? u?.querySelector("Val") : u)?.textContent?.trim() ?? "";
  }
  function l(u) {
    const m = u.getAttribute("type"), f = [];
    return Array.from(
      u.ownerDocument.querySelectorAll(
        `EnumType[id="${m}"] > EnumVal`
      )
    ).filter(
      (y) => y.textContent && y.textContent !== ""
    ).sort(
      (y, g) => parseInt(y.getAttribute("ord") ?? "0") - parseInt(g.getAttribute("ord") ?? "0")
    ).forEach((y) => {
      f.push(y.textContent ?? "");
    }), f;
  }
}
function eu(t) {
  let i = t.split("T")[0];
  return /^\d{4}-\d{2}-\d{2}$/.test(i) || (i = null), i === "0000-00-00" && (i = null), i;
}
function tu(t) {
  const e = t.split("T");
  let i = null;
  return e.length == 2 && (i = e[1], i.length > 8 && (i = i.substring(0, 8)), /^\d{2}:\d{2}:\d{2}$/.test(i) || (i = null), i === "00:00:00" && (i = null)), i;
}
const Nt = "http://www.iec.ch/61850/2003/SCL";
function iu(t, e) {
  return (i) => {
    const n = t.getAttribute("bType"), r = $t()[n].value(i), a = e.parentElement?.getAttribute("name") ?? "", o = {
      actions: [],
      title: d("dai.action.updatedai", { daiName: a })
    }, l = e.cloneNode(!1);
    return l.textContent = r, o.actions.push({
      old: { element: e },
      new: { element: l }
    }), [o];
  };
}
function nu(t, e, i, n, r) {
  return (a) => {
    const o = e.getAttribute("bType");
    if (r)
      Array.from(n.querySelectorAll("Val")).forEach(
        (m) => m.remove()
      ), [...Array(r)].forEach((m, f) => {
        const y = $t()[o].value(
          a,
          f + 1
        ), g = t.ownerDocument.createElementNS(
          Nt,
          "Val"
        );
        g.textContent = y, g.setAttribute("sGroup", `${f + 1}`), n.append(g);
      });
    else {
      const m = $t()[o].value(a);
      let f = n.querySelector("Val");
      f || (f = t.ownerDocument.createElementNS(Nt, "Val"), n.append(f)), f.textContent = m;
    }
    const l = n.getAttribute("name");
    return [{
      actions: [{ new: { parent: t, element: i } }],
      title: d("dai.action.createdai", { daiName: l })
    }];
  };
}
function wa(t, e, i = null) {
  const n = t.getAttribute("bType"), r = t.querySelector("Val")?.textContent?.trim() ?? "";
  return [
    s` ${$t()[n].render(
      t,
      e,
      i
    )}
    ${r ? s`<wizard-textfield
          id="daVal"
          label="DA Template Value"
          .maybeValue=${r}
          readonly
          disabled
        >
        </wizard-textfield>` : W}`
  ];
}
function ru(t, e) {
  let i = e;
  e.tagName === "BDA" && (i = e.getRootNode().querySelector(
    `DOType>DA[type="${e.parentElement.id}"]`
  ));
  const n = i.getAttribute("fc") ?? "", o = t.closest("IED")?.querySelector("SettingControl")?.getAttribute("numOfSGs") ?? "", l = parseInt(o);
  return (n === "SG" || n === "SE") && o !== "" && !isNaN(l) ? l : void 0;
}
function au(t, e, i) {
  const n = ru(t, i), r = e.tagName === "DAI" ? e : e.querySelector("DAI");
  return [
    {
      title: d("dai.wizard.title.create", {
        daiName: r?.getAttribute("name") ?? ""
      }),
      element: r,
      primary: {
        icon: "edit",
        label: d("save"),
        action: nu(
          t,
          i,
          e,
          r,
          n
        )
      },
      content: wa(
        i,
        r,
        n
      )
    }
  ];
}
function ou(t, e) {
  const i = e?.tagName === "DAI" ? e?.getAttribute("name") ?? "" : e?.parentElement?.getAttribute("name") ?? "";
  return [
    {
      title: d("dai.wizard.title.edit", {
        daiName: i
      }),
      element: e,
      primary: {
        icon: "edit",
        label: d("save"),
        action: iu(t, e)
      },
      content: wa(t, e)
    }
  ];
}
function lu(t) {
  return (e) => {
    e.dispatchEvent(kt(() => da(t)));
  };
}
function du(t) {
  return (e, i) => {
    const n = e.find((m) => m.label === "name").value, r = v(e.find((m) => m.label === "desc")), a = t.getAttribute("name"), o = [];
    if (!(n === a && r === t.getAttribute("desc"))) {
      const m = Y(t, { name: n, desc: r });
      o.push({
        old: { element: t },
        new: { element: m }
      });
    }
    const l = n !== a ? Array.from(
      t.parentElement?.querySelectorAll(
        `ReportControlBock[datSet=${a}], GSEControl[datSet=${a}],SampledValueControl[datSet=${a}] `
      ) ?? []
    ).map((m) => {
      const f = Y(m, { datSet: n });
      return { old: { element: m }, new: { element: f } };
    }) : [];
    return [
      ...Array.from(
        i.shadowRoot.querySelectorAll(
          "filtered-list > mwc-check-list-item:not([selected])"
        )
      ).map((m) => Ye(t, "FCDA", m.value)).filter((m) => m).map((m) => ({
        old: {
          parent: t,
          element: m,
          reference: m.nextSibling
        }
      })),
      ...o,
      ...l
    ];
  };
}
function Sa(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc");
  return [
    {
      title: d("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        label: d("save"),
        icon: "save",
        action: du(t)
      },
      menuActions: [
        {
          icon: "add",
          label: d("dataset.fcda.add"),
          action: lu(t)
        }
      ],
      content: [
        s`<wizard-textfield
          label="name"
          .maybeValue=${e}
          helper="${d("scl.name")}"
          required
          disabled="true"
        >
        </wizard-textfield>`,
        s`<wizard-textfield
          label="desc"
          .maybeValue=${i}
          helper="${d("scl.desc")}"
          nullable
          required
        >
        </wizard-textfield>`,
        s`<filtered-list multi
          >${Array.from(t.querySelectorAll("FCDA")).map(
          (n) => s`<mwc-check-list-item selected value="${q(n)}"
                >${q(n).split(">").pop()}</mwc-check-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
const J = {
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
}, su = {
  IP: J.IP,
  "IP-SUBNET": J.IP,
  "IP-GATEWAY": J.IP,
  "OSI-TSEL": J.OSI,
  "OSI-SSEL": J.OSI,
  "OSI-PSEL": J.OSI,
  "OSI-AP-Title": J.OSIAPi,
  "OSI-AP-Invoke": J.OSId,
  "OSI-AE-Qualifier": J.OSId,
  "OSI-AE-Invoke": J.OSId,
  "MAC-Address": J.MAC,
  APPID: J.APPID,
  "VLAN-ID": J.VLANid,
  "VLAN-PRIORITY": J.VLANp,
  "OSI-NSAP": J.OSI,
  "SNTP-Port": J.port,
  "MMS-Port": J.port,
  DNSName: "[^ ]*",
  "UDP-Port": J.port,
  "TCP-Port": J.port,
  "C37-118-IP-Port": "102[5-9]|10[3-9][0-9]|1[1-9][0-9][0-9]|[2-9][0-9]{3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]",
  IPv6: J.IPv6,
  "IPv6-SUBNET": J.IPv6sub,
  "IPv6-GATEWAY": J.IPv6,
  IPv6FlowLabel: "[0-9a-fA-F]{1,5}",
  IPv6ClassOfTraffic: "[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]",
  "IPv6-IGMPv3Src": J.IPv6,
  "IP-IGMPv3Sr": J.IP,
  "IP-ClassOfTraffic": J.OSI
}, cu = {
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
function Aa(t) {
  return [
    A`<mwc-formfield label="${d("connectedap.wizard.addschemainsttype")}">
      <mwc-checkbox
        id="instType"
        ?checked="${t.hasInstType}"
      ></mwc-checkbox>
    </mwc-formfield>`,
    A`${Object.entries(t.attributes).map(
      ([e, i]) => A`<wizard-textfield
          label="${e}"
          ?nullable=${cu[e]}
          .maybeValue=${i}
          pattern="${O(su[e])}"
          required
        ></wizard-textfield>`
    )}`
  ];
}
function uu(t, e) {
  return t.querySelectorAll("P").length !== e.querySelectorAll("P").length ? !1 : Array.from(t.querySelectorAll("P")).filter(
    (i) => !e.querySelector(`Address > P[type="${i.getAttribute("type")}"]`)?.isEqualNode(i)
  ).length === 0;
}
function mu(t, e, i) {
  const n = V(e.ownerDocument, "Address", {});
  return Object.entries(t).filter(([r, a]) => a !== null).forEach(([r, a]) => {
    const o = r, l = V(e.ownerDocument, "P", { type: o });
    i && l.setAttributeNS(
      "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:type",
      "tP_" + r
    ), l.textContent = a, n.appendChild(l);
  }), n;
}
function Ea(t, e, i) {
  const n = [], r = mu(e, t, i), a = t.querySelector("Address");
  return a !== null && !uu(a, r) ? (n.push({
    old: {
      parent: t,
      element: a,
      reference: a.nextSibling
    }
  }), n.push({
    new: {
      parent: t,
      element: r,
      reference: a.nextSibling
    }
  })) : a === null && n.push({
    new: {
      parent: t,
      element: r
    }
  }), n;
}
function hr(t, e, i, n) {
  if (e === null) {
    const a = V(n.ownerDocument, t, {
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
        element: e,
        reference: e.nextSibling
      }
    };
  const r = e.cloneNode(!1);
  return r.textContent = i, {
    old: { element: e },
    new: { element: r }
  };
}
function pu(t) {
  return (e, i) => {
    const n = {
      actions: [],
      title: d("gse.action.addaddress", {
        identity: q(t)
      })
    }, r = i.shadowRoot?.querySelector("#instType")?.checked ?? !1, a = {};
    a["MAC-Address"] = v(
      e.find((m) => m.label === "MAC-Address")
    ), a.APPID = v(e.find((m) => m.label === "APPID")), a["VLAN-ID"] = v(
      e.find((m) => m.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = v(
      e.find((m) => m.label === "VLAN-PRIORITY")
    ), Ea(t, a, r).forEach((m) => {
      n.actions.push(m);
    });
    const l = v(e.find((m) => m.label === "MinTime")), u = v(e.find((m) => m.label === "MaxTime"));
    return l !== (t.querySelector("MinTime")?.textContent?.trim() ?? null) && n.actions.push(
      hr(
        "MinTime",
        t.querySelector("MinTime"),
        l,
        t
      )
    ), u !== (t.querySelector("MaxTime")?.textContent?.trim() ?? null) && n.actions.push(
      hr(
        "MaxTime",
        t.querySelector("MaxTime"),
        u,
        t
      )
    ), [n];
  };
}
function hu(t) {
  const e = t.querySelector("MinTime")?.innerHTML.trim() ?? null, i = t.querySelector("MaxTime")?.innerHTML.trim() ?? null, n = Array.from(t.querySelectorAll("Address > P")).some(
    (a) => a.getAttribute("xsi:type")
  ), r = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((a) => {
    r[a] || (r[a] = t.querySelector(`Address > P[type="${a}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: d("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        label: d("save"),
        icon: "save",
        action: pu(t)
      },
      content: [
        ...Aa({ hasInstType: n, attributes: r }),
        s`<wizard-textfield
          label="MinTime"
          .maybeValue=${e}
          nullable
          suffix="ms"
          type="number"
        ></wizard-textfield>`,
        s`<wizard-textfield
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
function Ca(t) {
  const e = t.getAttribute("name"), i = t.closest("IED")?.getAttribute("name"), n = t.closest("AccessPoint")?.getAttribute("name"), r = t.closest("LDevice")?.getAttribute("inst");
  return t.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${n}"] > GSE[ldInst="${r}"][cbName="${e}"]`
  );
}
function fu(t) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      pattern="${Qe.asciName}"
      maxLength="${wn.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    s`<wizard-select
      label="type"
      .maybeValue=${t.type}
      helper="${d("scl.type")}"
      nullable
      required
      >${["GOOSE", "GSSE"].map(
      (e) => s`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`,
    s`<wizard-textfield
      label="appID"
      .maybeValue=${t.appID}
      helper="${d("scl.id")}"
      required
      validationMessage="${d("textfield.nonempty")}"
    ></wizard-textfield>`,
    s`<wizard-checkbox
      label="fixedOffs"
      .maybeValue=${t.fixedOffs}
      nullable
      helper="${d("scl.fixedOffs")}"
    ></wizard-checkbox>`,
    s`<wizard-select
      label="securityEnabled"
      .maybeValue=${t.securityEnabled}
      nullable
      required
      helper="${d("scl.securityEnable")}"
      >${_a.map(
      (e) => s`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function bu(t) {
  if (!t.parentElement) return null;
  const e = t.parentElement.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), i = Ca(t), n = Array.from(
    t.parentElement?.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    ) ?? []
  ).filter(
    (l) => l.getAttribute("datSet") === e?.getAttribute("name")
  ).length <= 1, r = [];
  r.push({
    old: {
      parent: t.parentElement,
      element: t,
      reference: t.nextSibling
    }
  }), e && n && r.push({
    old: {
      parent: t.parentElement,
      element: e,
      reference: e.nextSibling
    }
  }), i && r.push({
    old: {
      parent: i.parentElement,
      element: i,
      reference: i.nextSibling
    }
  });
  const a = t.getAttribute("name"), o = t.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: d("controlblock.action.remove", {
      type: t.tagName,
      name: a,
      iedName: o
    }),
    actions: r
  };
}
function gu(t) {
  return (e) => {
    const i = bu(t);
    i && e.dispatchEvent(Ai(i)), e.dispatchEvent(me());
  };
}
function yu(t) {
  return (e) => {
    e.dispatchEvent(kt(() => Sa(t)));
  };
}
function xu(t) {
  return (e) => {
    e.dispatchEvent(kt(() => hu(t)));
  };
}
function vu(t) {
  return (e) => {
    const i = e.find((m) => m.label === "name").value, n = v(e.find((m) => m.label === "desc")), r = v(e.find((m) => m.label === "type")), a = v(e.find((m) => m.label === "appID")), o = v(e.find((m) => m.label === "fixedOffs")), l = v(
      e.find((m) => m.label === "securityEnabled")
    );
    if (i === t.getAttribute("name") && n === t.getAttribute("desc") && r === t.getAttribute("type") && a === t.getAttribute("appID") && o === t.getAttribute("fixedOffs") && l === t.getAttribute("securityEnabled"))
      return [];
    const u = Y(t, {
      name: i,
      desc: n,
      type: r,
      appID: a,
      fixedOffs: o,
      securityEnabled: l
    });
    return [{ old: { element: t }, new: { element: u } }];
  };
}
function _u(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = t.getAttribute("appID"), a = t.getAttribute("fixedOffs"), o = t.getAttribute("securityEnabled"), l = Ca(t), u = t.parentElement?.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), m = [];
  return m.push({
    icon: "delete",
    label: d("remove"),
    action: gu(t)
  }), u && m.push({
    icon: "edit",
    label: d("scl.DataSet"),
    action: yu(u)
  }), l && m.push({
    icon: "edit",
    label: d("scl.Communication"),
    action: xu(l)
  }), [
    {
      title: d("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: d("save"),
        action: vu(t)
      },
      menuActions: m,
      content: [
        ...fu({
          name: e,
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
function ht(t) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      .reservedValues=${t.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      helper="${d("scl.type")}"
      nullable
    ></wizard-textfield>`
  ];
}
function wu(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = v(e.find((a) => a.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = Y(t, i);
      return [
        {
          old: { element: t },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Su(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = be(
    t.parentElement,
    "Function"
  ).filter((a) => a !== t).map((a) => a.getAttribute("name"));
  return [
    {
      title: d("wizard.title.edit", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: wu(t)
      },
      content: [
        ...ht({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Au(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = v(e.find((o) => o.label === a));
    });
    const r = V(
      t.ownerDocument,
      "Function",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function Eu(t) {
  const e = "", r = Array.from(t.querySelectorAll("Function")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: d("wizard.title.add", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Au(t)
      },
      content: [
        ...ht({
          name: e,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function Cu(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = v(e.find((a) => a.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = Y(t, i);
      return [
        {
          old: { element: t },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Iu(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = be(
    t.parentElement,
    "EqSubFunction"
  ).filter((a) => a !== t).map((a) => a.getAttribute("name"));
  return [
    {
      title: d("wizard.title.edit", { tagName: "EqSubFunction" }),
      element: t,
      primary: {
        icon: "save",
        label: d("save"),
        action: Cu(t)
      },
      content: [
        ...ht({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function ku(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = v(e.find((o) => o.label === a));
    });
    const r = V(
      t.ownerDocument,
      "EqSubFunction",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function Du(t) {
  const e = "", r = Array.from(
    t.querySelectorAll("EqSubFunction")
  ).map((a) => a.getAttribute("name"));
  return [
    {
      title: d("wizard.title.add", { tagName: "EqSubFunction" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: ku(t)
      },
      content: [
        ...ht({
          name: e,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function Tu(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = v(e.find((a) => a.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = Y(t, i);
      return [
        {
          old: { element: t },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Nu(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = be(
    t.parentElement,
    "EqFunction"
  ).filter((a) => a !== t).map((a) => a.getAttribute("name"));
  return [
    {
      title: d("wizard.title.edit", { tagName: "EqFunction" }),
      element: t,
      primary: {
        icon: "save",
        label: d("save"),
        action: Tu(t)
      },
      content: [
        ...ht({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Lu(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = v(e.find((o) => o.label === a));
    });
    const r = V(
      t.ownerDocument,
      "EqFunction",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function $u(t) {
  const e = "", r = Array.from(t.querySelectorAll("EqFunction")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: d("wizard.title.add", { tagName: "EqFunction" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Lu(t)
      },
      content: [
        ...ht({
          name: e,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function Ru(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = v(e.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = Y(t, i);
      return [
        {
          old: { element: t },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Ou(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = be(
    t.parentElement,
    "SubFunction"
  ).filter((a) => a !== t).map((a) => a.getAttribute("name"));
  return [
    {
      title: d("wizard.title.edit", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Ru(t)
      },
      content: [
        ...ht({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function zu(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = v(e.find((o) => o.label === a));
    });
    const r = V(
      t.ownerDocument,
      "SubFunction",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function Fu(t) {
  const e = "", r = Array.from(t.querySelectorAll("SubFunction")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: d("wizard.title.add", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: zu(t)
      },
      content: [
        ...ht({
          name: e,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function Vu(t) {
  return (e, i) => {
    const n = {
      actions: [],
      title: d("smv.action.addaddress", {
        identity: q(t)
      })
    }, r = i.shadowRoot?.querySelector("#instType")?.checked, a = {};
    a["MAC-Address"] = v(
      e.find((l) => l.label === "MAC-Address")
    ), a.APPID = v(e.find((l) => l.label === "APPID")), a["VLAN-ID"] = v(
      e.find((l) => l.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = v(
      e.find((l) => l.label === "VLAN-PRIORITY")
    );
    const o = Ea(t, a, r);
    return o.length ? (o.forEach((l) => {
      n.actions.push(l);
    }), [n]) : [];
  };
}
function Pu(t) {
  const e = Array.from(t.querySelectorAll("Address > P")).some(
    (n) => n.getAttribute("xsi:type")
  ), i = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((n) => {
    i[n] || (i[n] = t.querySelector(`Address > P[type="${n}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: d("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        label: d("save"),
        icon: "edit",
        action: Vu(t)
      },
      content: [...Aa({ hasInstType: e, attributes: i })]
    }
  ];
}
function Mu(t) {
  return Object.entries(t).map(
    ([e, i]) => s`<wizard-checkbox
        label="${e}"
        .maybeValue=${i}
        nullable
        helper="${d(`scl.${e}`)}"
      ></wizard-checkbox>`
  );
}
function Hu(t) {
  return (e) => {
    const i = {}, n = [
      "refreshTime",
      "sampleRate",
      "dataSet",
      "security",
      "synchSourceId"
    ];
    if (n.forEach((a) => {
      i[a] = v(e.find((o) => o.label === a));
    }), !n.some((a) => i[a] !== t.getAttribute(a)))
      return [];
    const r = Y(t, i);
    return [{ old: { element: t }, new: { element: r } }];
  };
}
function Bu(t) {
  const [e, i, n, r, a] = [
    "refreshTime",
    "sampleRate",
    "dataSet",
    "security",
    "synchSourceId"
  ].map((o) => t.getAttribute(o));
  return [
    {
      title: d("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: d("save"),
        action: Hu(t)
      },
      content: [
        ...Mu({
          refreshTime: e,
          sampleRate: i,
          dataSet: n,
          security: r,
          synchSourceId: a
        })
      ]
    }
  ];
}
function Ia(t) {
  const e = t.getAttribute("name"), i = t.closest("IED")?.getAttribute("name"), n = t.closest("AccessPoint")?.getAttribute("name"), r = t.closest("LDevice")?.getAttribute("inst");
  return t.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${n}"] > SMV[ldInst="${r}"][cbName="${e}"]`
  ) ?? null;
}
function qu(t) {
  if (!t.parentElement) return null;
  const e = t.parentElement.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), i = Ia(t), n = Array.from(
    t.parentElement.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    )
  ).filter(
    (l) => l.getAttribute("datSet") === e?.getAttribute("name")
  ).length <= 1, r = [];
  r.push({
    old: {
      parent: t.parentElement,
      element: t
    }
  }), e && n && r.push({
    old: {
      parent: t.parentElement,
      element: e
    }
  }), i && r.push({
    old: {
      parent: i.parentElement,
      element: i
    }
  });
  const a = t.getAttribute("name"), o = t.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: d("controlblock.action.remove", {
      type: t.tagName,
      name: a,
      iedName: o
    }),
    actions: r
  };
}
function Gu(t) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      pattern="${Qe.asciName}"
      maxLength="${wn.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      pattern="${Qe.normalizedString}"
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    t.multicast === "true" ? s`` : s`<wizard-checkbox
          label="multicast"
          .maybeValue=${t.multicast}
          helper="${d("scl.multicast")}"
          disabled
        ></wizard-checkbox>`,
    s`<wizard-textfield
      label="smvID"
      .maybeValue=${t.smvID}
      helper="${d("scl.id")}"
      required
      validationMessage="${d("textfield.nonempty")}"
    ></wizard-textfield>`,
    s`<wizard-select
      label="smpMod"
      .maybeValue=${t.smpMod}
      nullable
      required
      helper="${d("scl.smpMod")}"
      >${jc.map(
      (e) => s`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`,
    s`<wizard-textfield
      label="smpRate"
      .maybeValue=${t.smpRate}
      helper="${d("scl.smpRate")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="nofASDU"
      .maybeValue=${t.nofASDU}
      helper="${d("scl.nofASDU")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    s`<wizard-select
      label="securityEnabled"
      .maybeValue=${t.securityEnabled}
      nullable
      required
      helper="${d("scl.securityEnable")}"
      >${_a.map(
      (e) => s`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function Wu(t) {
  return (e) => {
    const i = qu(t);
    i && e.dispatchEvent(Ai(i)), e.dispatchEvent(me());
  };
}
function Uu(t) {
  return (e) => {
    e.dispatchEvent(kt(() => Sa(t)));
  };
}
function ju(t) {
  return (e) => {
    e.dispatchEvent(kt(() => Bu(t)));
  };
}
function Ku(t) {
  return (e) => {
    e.dispatchEvent(kt(() => Pu(t)));
  };
}
function Xu(t) {
  return (e) => {
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
      if (o === "multicast" && !e.find((u) => u.label === o)) {
        i.multicast = "true";
        return;
      }
      i[o] = v(e.find((u) => u.label === o));
    });
    let r = null;
    if (n.some((o) => i[o] !== t.getAttribute(o))) {
      const o = Y(t, i);
      r = {
        old: { element: t },
        new: { element: o }
      };
    }
    const a = [];
    return r && a.push(r), a;
  };
}
function Zu(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("multicast"), r = t.getAttribute("smvID"), a = t.getAttribute("smpMod"), o = t.getAttribute("smpRate"), l = t.getAttribute("nofASDU"), u = t.getAttribute("securityEnabled"), m = Ia(t), f = t.querySelector("SmvOpts"), y = t.parentElement?.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), g = [];
  return g.push({
    icon: "delete",
    label: d("remove"),
    action: Wu(t)
  }), y && g.push({
    icon: "edit",
    label: d("scl.DataSet"),
    action: Uu(y)
  }), f && g.push({
    icon: "edit",
    label: d("scl.SmvOpts"),
    action: ju(f)
  }), m && g.push({
    icon: "edit",
    label: d("scl.Communication"),
    action: Ku(m)
  }), [
    {
      title: d("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: d("save"),
        action: Xu(t)
      },
      menuActions: g,
      content: [
        ...Gu({
          name: e,
          desc: i,
          multicast: n,
          smvID: r,
          smpMod: a,
          smpRate: o,
          nofASDU: l,
          securityEnabled: u
        })
      ]
    }
  ];
}
function ka(t) {
  return [
    A`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      .reservedValues=${t.reservedNames}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    A`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    A`<wizard-select
      label="phase"
      fixedMenuPosition
      .maybeValue=${t.phase}
      nullable
      helper="${d("scl.phase")}"
    >
      ${["A", "B", "C", "N", "all", "none", "AB", "BC", "CA"].map(
      (e) => A`<mwc-list-item value="${e}">
            ${e.charAt(0).toUpperCase() + e.slice(1)}
          </mwc-list-item>`
    )}
    </wizard-select> `,
    A`<wizard-checkbox
      label="virtual"
      .maybeValue=${t.virtual}
      nullable
      helper="${d("scl.virtual")}"
    ></wizard-checkbox>`
  ];
}
function Yu(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "phase", "virtual"];
    if (n.forEach((r) => {
      i[r] = v(e.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = Y(t, i);
      return [
        {
          old: { element: t },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Qu(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("phase"), r = t.getAttribute("virtual"), a = be(
    t.parentElement,
    "SubEquipment"
  ).filter((o) => o !== t).map((o) => o.getAttribute("name"));
  return [
    {
      title: d("wizard.title.edit", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Yu(t)
      },
      content: [
        ...ka({
          name: e,
          desc: i,
          phase: n,
          virtual: r,
          reservedNames: a
        })
      ]
    }
  ];
}
function Ju(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "phase", "virtual"].forEach((a) => {
      i[a] = v(e.find((o) => o.label === a));
    });
    const r = V(
      t.ownerDocument,
      "SubEquipment",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function em(t) {
  const e = "", a = Array.from(t.querySelectorAll("SubEquipment")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: d("wizard.title.add", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Ju(t)
      },
      content: [
        ...ka({
          name: e,
          desc: null,
          phase: null,
          virtual: null,
          reservedNames: a
        })
      ]
    }
  ];
}
function tm(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = t.getAttribute("virtual"), a = be(
    t.parentElement,
    "GeneralEquipment"
  ).filter((o) => o !== t).map((o) => o.getAttribute("name"));
  return [
    {
      title: d("wizard.title.edit", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: im(t)
      },
      content: [
        ...Da({
          name: e,
          desc: i,
          type: n,
          virtual: r,
          reservedNames: a
        })
      ]
    }
  ];
}
function im(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = v(e.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = Y(t, i);
      return [
        {
          old: { element: t },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Da(t) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      .reservedValues=${t.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      helper="${d("scl.type")}"
      minLength="${3}"
      pattern="AXN|BAT|MOT|FAN|FIL|PMP|TNK|VLV|E[A-Z]*"
      required
    ></wizard-textfield>`,
    s`<wizard-checkbox
      label="virtual"
      .maybeValue=${t.virtual}
      helper="${d("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function nm(t) {
  const e = "", a = Array.from(
    t.querySelectorAll("GeneralEquipment")
  ).map((o) => o.getAttribute("name"));
  return [
    {
      title: d("wizard.title.add", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: rm(t)
      },
      content: [
        ...Da({
          name: e,
          desc: null,
          type: null,
          virtual: null,
          reservedNames: a
        })
      ]
    }
  ];
}
function rm(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = v(e.find((o) => o.label === a));
    });
    const r = V(
      t.ownerDocument,
      "GeneralEquipment",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function am(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = v(
        e.find((o) => o.label === a)
      );
    });
    const r = V(
      t.ownerDocument,
      "TransformerWinding",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function om(t) {
  const e = "", a = Array.from(
    t.querySelectorAll("TransformerWinding")
  ).map((o) => o.getAttribute("name"));
  return [
    {
      title: d("wizard.title.add", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: am(t)
      },
      content: [
        ...Ta({
          name: e,
          desc: null,
          type: null,
          virtual: null,
          reservedNames: a
        })
      ]
    }
  ];
}
function lm(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = v(
        e.find((a) => a.label === r)
      );
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = Y(t, i);
      return [
        {
          old: { element: t },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Ta(t) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      .reservedValues=${t.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      disabled
      helper="${d("scl.type")}"
    ></wizard-textfield>`,
    s`<wizard-checkbox
      label="virtual"
      .maybeValue=${t.virtual}
      helper="${d("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function dm(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = t.getAttribute("virtual"), a = be(
    t.parentElement,
    "TransformerWinding"
  ).filter((o) => o !== t).map((o) => o.getAttribute("name"));
  return [
    {
      title: d("wizard.title.edit", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: lm(t)
      },
      content: [
        ...Ta({
          name: e,
          desc: i,
          type: n,
          virtual: r,
          reservedNames: a
        })
      ]
    }
  ];
}
function sm(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = v(e.find((o) => o.label === a));
    });
    const r = V(
      t.ownerDocument,
      "TapChanger",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function cm(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = v(e.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = Y(t, i);
      return [
        {
          old: { element: t },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Na(t) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      .reservedValues=${t.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      disabled
      helper="${d("scl.type")}"
    ></wizard-textfield>`,
    s`<wizard-checkbox
      label="virtual"
      .maybeValue=${t.virtual}
      helper="${d("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function um(t) {
  const e = "", n = "LTC", a = Array.from(t.querySelectorAll("TapChanger")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: d("wizard.title.add", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: sm(t)
      },
      content: [
        ...Na({
          name: e,
          desc: null,
          type: n,
          virtual: null,
          reservedNames: a
        })
      ]
    }
  ];
}
function mm(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = t.getAttribute("virtual"), a = be(
    t.parentElement,
    "TapChanger"
  ).filter((o) => o !== t).map((o) => o.getAttribute("name"));
  return [
    {
      title: d("wizard.title.edit", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: cm(t)
      },
      content: [
        ...Na({
          name: e,
          desc: i,
          type: n,
          virtual: r,
          reservedNames: a
        })
      ]
    }
  ];
}
function La(t, e, i, n, r) {
  return [
    A`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${d("line.wizard.nameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    A`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${d("line.wizard.descHelper")}"
    ></wizard-textfield>`,
    A`<wizard-textfield
      label="type"
      .maybeValue=${i}
      nullable
      helper="${d("line.wizard.typeHelper")}"
    ></wizard-textfield>`,
    A`<wizard-textfield
      label="nomFreq"
      .maybeValue=${n}
      nullable
      helper="${d("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      validationMessage="${d("textfield.nonempty")}"
      pattern="${Kt.unsigned}"
    ></wizard-textfield>`,
    A`<wizard-textfield
      label="numPhases"
      .maybeValue=${r}
      nullable
      helper="${d("voltagelevel.wizard.numPhaseHelper")}"
      suffix="#"
      validationMessage="${d("textfield.nonempty")}"
      type="number"
      min="1"
      max="255"
    ></wizard-textfield>`
  ];
}
function pm(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type", "nomFreq", "numPhases"].forEach((a) => {
      i[a] = v(e.find((o) => o.label === a));
    });
    const r = V(t.ownerDocument, "Line", i);
    return [{ new: { parent: t, element: r } }];
  };
}
function hm(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type", "nomFreq", "numPhases"];
    if (n.forEach((r) => {
      i[r] = v(e.find((a) => a.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = Y(t, i);
      return [
        {
          old: { element: t },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function fm(t) {
  return [
    {
      title: d("wizard.title.add", { tagName: "Line" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: pm(t)
      },
      content: [...La("", "", "", "", "")]
    }
  ];
}
function bm(t) {
  return [
    {
      title: d("line.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: d("save"),
        action: hm(t)
      },
      content: La(
        t.getAttribute("name") ?? "",
        t.getAttribute("desc"),
        t.getAttribute("type"),
        t.getAttribute("nomFreq"),
        t.getAttribute("numPhases")
      )
    }
  ];
}
function gm(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = v(e.find((o) => o.label === a));
    });
    const r = V(t.ownerDocument, "Process", i);
    return [{ new: { parent: t, element: r } }];
  };
}
function ym(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = v(e.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = Y(t, i);
      return [
        {
          old: { element: t },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function $a(t) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      .reservedValues=${t.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      nullable
      helper="${d("scl.type")}"
    ></wizard-textfield>`
  ];
}
function xm(t) {
  const e = "", i = "", n = "", r = be(
    t.parentElement,
    "Process"
  ).filter((a) => a !== t).map((a) => a.getAttribute("name"));
  return [
    {
      title: d("wizard.title.add", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: gm(t)
      },
      content: [
        ...$a({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function vm(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = be(
    t.parentElement,
    "Process"
  ).filter((a) => a !== t).map((a) => a.getAttribute("name"));
  return [
    {
      title: d("wizard.title.edit", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: ym(t)
      },
      content: [
        ...$a({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function _m(t, e, i, n, r) {
  return [
    s`<wizard-textfield
      label="lnType"
      .maybeValue=${t}
      readonly
      required
      helper="${d("ln.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${d("ln.wizard.descHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="prefix"
      nullable
      readonly
      .maybeValue=${i}
      helper="${d("ln.wizard.prefixHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${n}
      helper="${d("ln.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="inst"
      .maybeValue=${r}
      readonly
      helper="${d("ln.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function wm(t) {
  return (e) => {
    const i = {}, n = ["lnType", "desc", "prefix", "lnClass", "inst"];
    if (n.forEach((r) => {
      i[r] = v(e.find((a) => a.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = Y(t, i);
      return [
        {
          old: { element: t },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Sm(t) {
  return [
    {
      title: d("ln.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: d("save"),
        action: wm(t)
      },
      content: _m(
        t.getAttribute("lnType"),
        t.getAttribute("desc"),
        t.getAttribute("prefix"),
        t.getAttribute("lnClass"),
        t.getAttribute("inst")
      )
    }
  ];
}
function Am(t, e, i, n) {
  return [
    s`<wizard-textfield
      label="lnType"
      .maybeValue=${t}
      readonly
      required
      helper="${d("ln0.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${d("ln0.wizard.descHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${i}
      helper="${d("ln0.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="inst"
      .maybeValue=${n}
      readonly
      helper="${d("ln0.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function Em(t) {
  return (e) => {
    const i = {}, n = ["lnType", "desc", "lnClass", "inst"];
    if (n.forEach((r) => {
      i[r] = v(e.find((a) => a.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = Y(t, i);
      return [
        {
          old: { element: t },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Cm(t) {
  return [
    {
      title: d("ln0.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: d("save"),
        action: Em(t)
      },
      content: Am(
        t.getAttribute("lnType"),
        t.getAttribute("desc"),
        t.getAttribute("lnClass"),
        t.getAttribute("inst")
      )
    }
  ];
}
function h() {
}
const Ei = {
  AccessControl: {
    edit: h,
    create: h
  },
  AccessPoint: {
    edit: h,
    create: h
  },
  Address: {
    edit: h,
    create: h
  },
  Association: {
    edit: h,
    create: h
  },
  Authentication: {
    edit: h,
    create: h
  },
  BDA: {
    edit: h,
    create: h
  },
  BitRate: {
    edit: h,
    create: h
  },
  Bay: {
    edit: cs,
    create: ss
  },
  ClientLN: {
    edit: h,
    create: h
  },
  ClientServices: {
    edit: h,
    create: h
  },
  CommProt: {
    edit: h,
    create: h
  },
  Communication: {
    edit: h,
    create: h
  },
  ConductingEquipment: {
    edit: vs,
    create: xs
  },
  ConfDataSet: {
    edit: h,
    create: h
  },
  ConfLdName: {
    edit: h,
    create: h
  },
  ConfLNs: {
    edit: h,
    create: h
  },
  ConfLogControl: {
    edit: h,
    create: h
  },
  ConfReportControl: {
    edit: h,
    create: h
  },
  ConfSG: {
    edit: h,
    create: h
  },
  ConfSigRef: {
    edit: h,
    create: h
  },
  ConnectedAP: {
    edit: h,
    create: h
  },
  ConnectivityNode: {
    edit: ws,
    create: h
  },
  DA: {
    edit: Jc,
    create: h
  },
  DAI: {
    edit: ou,
    create: h
  },
  DAType: {
    edit: h,
    create: h
  },
  DO: {
    edit: h,
    create: h
  },
  DOI: {
    edit: h,
    create: h
  },
  DOType: {
    edit: h,
    create: h
  },
  DataObjectDirectory: {
    edit: h,
    create: h
  },
  DataSet: {
    edit: h,
    create: h
  },
  DataSetDirectory: {
    edit: h,
    create: h
  },
  DataTypeTemplates: {
    edit: h,
    create: h
  },
  DynAssociation: {
    edit: h,
    create: h
  },
  DynDataSet: {
    edit: h,
    create: h
  },
  EnumType: {
    edit: h,
    create: h
  },
  EnumVal: {
    edit: h,
    create: h
  },
  EqFunction: {
    edit: Nu,
    create: $u
  },
  EqSubFunction: {
    edit: Iu,
    create: Du
  },
  ExtRef: {
    edit: h,
    create: h
  },
  FCDA: {
    edit: h,
    create: da
  },
  FileHandling: {
    edit: h,
    create: h
  },
  Function: {
    edit: Su,
    create: Eu
  },
  GeneralEquipment: {
    edit: tm,
    create: nm
  },
  GetCBValues: {
    edit: h,
    create: h
  },
  GetDataObjectDefinition: {
    edit: h,
    create: h
  },
  GetDataSetValue: {
    edit: h,
    create: h
  },
  GetDirectory: {
    edit: h,
    create: h
  },
  GOOSE: {
    edit: h,
    create: h
  },
  GOOSESecurity: {
    edit: h,
    create: h
  },
  GSE: {
    edit: h,
    create: h
  },
  GSEDir: {
    edit: h,
    create: h
  },
  GSEControl: {
    edit: _u,
    create: h
  },
  GSESettings: {
    edit: h,
    create: h
  },
  GSSE: {
    edit: h,
    create: h
  },
  Header: {
    edit: h,
    create: h
  },
  History: {
    edit: h,
    create: h
  },
  Hitem: {
    edit: h,
    create: h
  },
  IED: {
    edit: Rc,
    create: h
  },
  IEDName: {
    edit: h,
    create: h
  },
  Inputs: {
    edit: h,
    create: h
  },
  IssuerName: {
    edit: h,
    create: h
  },
  KDC: {
    edit: h,
    create: h
  },
  LDevice: {
    edit: Pc,
    create: h
  },
  LN: {
    edit: Sm,
    create: h
  },
  LN0: {
    edit: Cm,
    create: h
  },
  LNode: {
    edit: js,
    create: Gs
  },
  LNodeType: {
    edit: h,
    create: h
  },
  Line: {
    edit: bm,
    create: fm
  },
  Log: {
    edit: h,
    create: h
  },
  LogControl: {
    edit: h,
    create: h
  },
  LogSettings: {
    edit: h,
    create: h
  },
  MaxTime: {
    edit: h,
    create: h
  },
  McSecurity: {
    edit: h,
    create: h
  },
  MinTime: {
    edit: h,
    create: h
  },
  NeutralPoint: {
    edit: h,
    create: h
  },
  OptFields: {
    edit: Zs,
    create: h
  },
  P: {
    edit: h,
    create: h
  },
  PhysConn: {
    edit: h,
    create: h
  },
  PowerTransformer: {
    edit: yc,
    create: gc
  },
  Private: {
    edit: h,
    create: h
  },
  Process: {
    edit: vm,
    create: xm
  },
  ProtNs: {
    edit: h,
    create: h
  },
  Protocol: {
    edit: h,
    create: h
  },
  ReadWrite: {
    edit: h,
    create: h
  },
  RedProt: {
    edit: h,
    create: h
  },
  ReportControl: {
    edit: h,
    create: h
  },
  ReportSettings: {
    edit: h,
    create: h
  },
  RptEnabled: {
    edit: h,
    create: h
  },
  SamplesPerSec: {
    edit: h,
    create: h
  },
  SampledValueControl: {
    edit: Zu,
    create: h
  },
  SecPerSamples: {
    edit: h,
    create: h
  },
  SCL: {
    edit: h,
    create: h
  },
  SDI: {
    edit: h,
    create: h
  },
  SDO: {
    edit: h,
    create: h
  },
  Server: {
    edit: h,
    create: h
  },
  ServerAt: {
    edit: h,
    create: h
  },
  Services: {
    edit: h,
    create: h
  },
  SetDataSetValue: {
    edit: h,
    create: h
  },
  SettingControl: {
    edit: h,
    create: h
  },
  SettingGroups: {
    edit: h,
    create: h
  },
  SGEdit: {
    edit: h,
    create: h
  },
  SmpRate: {
    edit: h,
    create: h
  },
  SMV: {
    edit: h,
    create: h
  },
  SmvOpts: {
    edit: h,
    create: h
  },
  SMVsc: {
    edit: h,
    create: h
  },
  SMVSecurity: {
    edit: h,
    create: h
  },
  SMVSettings: {
    edit: h,
    create: h
  },
  SubEquipment: {
    edit: Qu,
    create: em
  },
  SubFunction: {
    edit: Ou,
    create: Fu
  },
  SubNetwork: {
    edit: wc,
    create: h
  },
  Subject: {
    edit: h,
    create: h
  },
  Substation: {
    edit: dc,
    create: lc
  },
  SupSubscription: {
    edit: h,
    create: h
  },
  TapChanger: {
    edit: mm,
    create: um
  },
  Terminal: {
    edit: cc,
    create: h
  },
  Text: {
    edit: h,
    create: h
  },
  TimerActivatedControl: {
    edit: h,
    create: h
  },
  TimeSyncProt: {
    edit: h,
    create: h
  },
  TransformerWinding: {
    edit: dm,
    create: om
  },
  TrgOps: {
    edit: Bc,
    create: h
  },
  Val: {
    edit: h,
    create: h
  },
  ValueHandling: {
    edit: h,
    create: h
  },
  Voltage: {
    edit: h,
    create: h
  },
  VoltageLevel: {
    edit: fc,
    create: mc
  }
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Im = {
  fromAttribute(t) {
    return t === null ? !1 : t === "" ? !0 : t;
  },
  toAttribute(t) {
    return typeof t == "boolean" ? t ? "" : null : t;
  }
};
class ii extends $ {
  constructor() {
    super(...arguments), this.rows = 2, this.cols = 20, this.charCounter = !1;
  }
  /** @soyTemplate */
  render() {
    const e = this.charCounter && this.maxLength !== -1, i = e && this.charCounter === "internal", n = e && !i, r = !!this.helper || !!this.validationMessage || n, a = {
      "mdc-text-field--disabled": this.disabled,
      "mdc-text-field--no-label": !this.label,
      "mdc-text-field--filled": !this.outlined,
      "mdc-text-field--outlined": this.outlined,
      "mdc-text-field--end-aligned": this.endAligned,
      "mdc-text-field--with-internal-counter": i
    };
    return s`
      <label class="mdc-text-field mdc-text-field--textarea ${ne(a)}">
        ${this.renderRipple()}
        ${this.outlined ? this.renderOutline() : this.renderLabel()}
        ${this.renderInput()}
        ${this.renderCharCounter(i)}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(r, n)}
    `;
  }
  /** @soyTemplate */
  renderInput() {
    const e = this.label ? "label" : void 0, i = this.minLength === -1 ? void 0 : this.minLength, n = this.maxLength === -1 ? void 0 : this.maxLength, r = this.autocapitalize ? this.autocapitalize : void 0;
    return s`
      <textarea
          aria-labelledby=${O(e)}
          class="mdc-text-field__input"
          .value="${Or(this.value)}"
          rows="${this.rows}"
          cols="${this.cols}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${O(i)}"
          maxlength="${O(n)}"
          name="${O(this.name === "" ? void 0 : this.name)}"
          inputmode="${O(this.inputMode)}"
          autocapitalize="${O(r)}"
          @input="${this.handleInputChange}"
          @blur="${this.onInputBlur}">
      </textarea>`;
  }
}
c([
  k("textarea")
], ii.prototype, "formElement", void 0);
c([
  p({ type: Number })
], ii.prototype, "rows", void 0);
c([
  p({ type: Number })
], ii.prototype, "cols", void 0);
c([
  p({ converter: Im })
], ii.prototype, "charCounter", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const km = j`.mdc-text-field{height:100%}.mdc-text-field__input{resize:none}`;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let dn = class extends ii {
};
dn.styles = [zr, km];
dn = c([
  z("mwc-textarea")
], dn);
var Dm = Object.defineProperty, ni = (t, e, i, n) => {
  for (var r = void 0, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = o(e, i, r) || r);
  return r && Dm(e, i, r), r;
};
class Be extends Pe {
  constructor() {
    super(), this.editCount = -1, this.ancestors = [], this.addEventListener("focus", (e) => {
      e.stopPropagation();
      const i = this.ancestors.map(
        (n) => Fi(n)
      );
      i.push(Fi(this.element)), this.dispatchEvent(fr(i));
    }), this.addEventListener("blur", () => {
      this.dispatchEvent(
        fr(
          this.ancestors.map((e) => Fi(e))
        )
      );
    });
  }
}
ni([
  p()
], Be.prototype, "doc");
ni([
  p({ type: Number })
], Be.prototype, "editCount");
ni([
  p({ attribute: !1 })
], Be.prototype, "element");
ni([
  p()
], Be.prototype, "nsdoc");
ni([
  p()
], Be.prototype, "ancestors");
function Ze(t, e) {
  return t.find((i) => i.tagName === e) ?? null;
}
function Ra(t) {
  let e = Ze(t, "LN0");
  return e || (e = Ze(t, "LN")), e;
}
function An(t) {
  if (t && t.hasAttribute("type")) {
    const e = t.getAttribute("type");
    return t.closest("SCL").querySelector(`:root > DataTypeTemplates > DOType[id="${e}"]`);
  }
  return null;
}
function Oa(t, e) {
  if (t) {
    const i = ae(e);
    return e.getAttribute("bType") == "Struct" ? t.querySelector(`:scope > SDI[name="${i}"]`) : t.querySelector(`:scope > DAI[name="${i}"]`);
  }
  return null;
}
function Fi(t) {
  switch (t.tagName) {
    case "LN":
    case "LN0":
      return t.getAttribute("lnClass");
    case "LDevice":
      return ae(t) ?? St(t);
    case "Server":
      return "Server";
    default:
      return t.getAttribute("name");
  }
}
function sn(t) {
  return Array.from(t.querySelectorAll("Val"));
}
function fr(t, e) {
  return new CustomEvent("full-element-path", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { elementNames: t, ...e?.detail }
  });
}
function br(t) {
  return sn(t).length !== 0 ? `${sn(t).map((i) => i.textContent ?? "").join(", ")}` : "-";
}
function Tm(t, e, i, n) {
  const r = Ze(i, "IED"), a = Ze(i, "AccessPoint"), o = Ze(i, "LDevice"), l = Ra(i), u = Ze(i, "DO"), m = An(u);
  return [
    s`
      <mwc-textarea
        label="${d("iededitor.wizard.nsdocDescription")}"
        value="${n.getDataDescription(t, i).label}"
        rows="3"
        cols="50"
        id="nsdocDescription"
        readonly
        disabled
      >
      </mwc-textarea>
    `,
    s`
      <mwc-textfield
        label="${d("iededitor.wizard.daName")}"
        value="${ae(t) ?? "-"}"
        id="daName"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    s`
      <mwc-textfield
        label="${d("iededitor.wizard.daiDescription")}"
        value="${e ? pt(e) ?? "-" : "-"}"
        id="daiDescription"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    s`
      <mwc-textfield
        label="${d("iededitor.wizard.daFc")}"
        value="${t.getAttribute("fc") ?? "-"}"
        id="daFc"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    s`
      <mwc-textfield
        label="${d("iededitor.wizard.daBType")}"
        value="${t.getAttribute("bType") ?? "-"}"
        id="daBType"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    s`
      <mwc-textfield
        label="${d("iededitor.wizard.daValue")}"
        value="${br(e || t)}"
        id="daValue"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    s` <br /> `,
    s`
      <mwc-textfield
        label="${d("iededitor.wizard.doName")}"
        value="${u ? ae(u) ?? "-" : "-"}"
        id="doName"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    s`
      <mwc-textfield
        label="${d("iededitor.wizard.doCdc")}"
        value="${m?.getAttribute("cdc") ?? "-"}"
        id="doCdc"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    s` <br /> `,
    s`
      <mwc-textfield
        label="${d("iededitor.wizard.lnPrefix")}"
        value="${l ? l.getAttribute("prefix") ?? "-" : "-"}"
        id="lnPrefix"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    s`
      <mwc-textfield
        label="${d("scl.lnClass")}"
        value="${l ? n.getDataDescription(l, i).label : "-"}"
        id="lnPrefix"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    s`
      <mwc-textfield
        label="${d("iededitor.wizard.lnInst")}"
        value="${l ? St(l) ?? "-" : "-"}"
        id="lnInst"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    s` <br /> `,
    s`
      <mwc-textfield
        label="${d("iededitor.wizard.lDevice")}"
        value="${o ? ae(o) ?? St(o) ?? "-" : "-"}"
        id="lDevice"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    s`
      <mwc-textfield
        label="${d("iededitor.wizard.accessPoint")}"
        value="${a ? ae(a) ?? "-" : "-"}"
        id="accessPoint"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    s`
      <mwc-textfield
        label="${d("iededitor.wizard.ied")}"
        value="${r ? ae(r) ?? "-" : "-"}"
        id="ied"
        readonly
        disabled
      >
      </mwc-textfield>
    `
  ];
}
function Nm(t, e, i, n) {
  return [
    {
      title: d("iededitor.wizard.daTitle"),
      content: [...Tm(t, e, i, n)]
    }
  ];
}
function za(t, e) {
  const i = e.shift();
  if (e.length > 0) {
    let n;
    return i.tagName === "DO" ? n = t.querySelector(
      `DOI[name="${i.getAttribute("name")}"]`
    ) : n = t.querySelector(
      `SDI[name="${i.getAttribute("name")}"]`
    ), n ? za(
      n,
      e
    ) : (e.unshift(i), [t, e]);
  } else
    return [t, [i]];
}
function Fa(t) {
  const e = t.shift();
  if (t.length > 0) {
    let i;
    e.tagName === "DO" ? i = e.ownerDocument.createElementNS(Nt, "DOI") : i = e.ownerDocument.createElementNS(Nt, "SDI"), i.setAttribute("name", e?.getAttribute("name") ?? "");
    const n = Fa(t);
    return i.append(n), i;
  } else {
    const i = e.ownerDocument.createElementNS(
      Nt,
      "Val"
    ), n = e.querySelector("Val");
    n && (i.textContent = n.textContent);
    const r = e.ownerDocument.createElementNS(
      Nt,
      "DAI"
    );
    return r.setAttribute("name", e?.getAttribute("name") ?? ""), r.append(i), r;
  }
}
var Lm = Object.defineProperty, $m = Object.getOwnPropertyDescriptor, En = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? $m(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Lm(e, i, r), r;
};
let Xt = class extends Be {
  header() {
    const t = ae(this.element), e = this.element.getAttribute("bType") ?? W, i = this.element.getAttribute("fc");
    return this.instanceElement ? s`<b>${t}</b> &mdash; ${e}${i ? s` [${i}]` : ""}` : s`${t} &mdash; ${e}${i ? s` [${i}]` : ""}`;
  }
  /**
   * Get the nested (B)DA element(s) if available.
   * @returns The nested (B)DA element(s) of this (B)DA container.
   */
  getBDAElements() {
    const t = this.element.getAttribute("type") ?? void 0, e = this.element.closest("SCL").querySelector(
      `:root > DataTypeTemplates > DAType[id="${t}"]`
    );
    return e != null ? Array.from(e.querySelectorAll(":scope > BDA")) : [];
  }
  /**
   * Use the list of ancestor to retrieve the list from DO to the current (B)DA Element.
   * This structure is used to create the initialized structure from (DOI/SDI/DAI).
   *
   * @returns The list from the DO Element to the current (B)DA Element.
   */
  getTemplateStructure() {
    const t = this.ancestors.filter(
      (i) => i.tagName == "DO"
    )[0], e = this.ancestors.slice(
      this.ancestors.indexOf(t)
    );
    return e.push(this.element), e;
  }
  openCreateWizard() {
    const t = this.ancestors.filter(
      (a) => ["LN0", "LN"].includes(a.tagName)
    )[0], e = this.getTemplateStructure(), [i, n] = za(t, e), r = Fa(n);
    if (r) {
      const a = au(i, r, this.element);
      a && this.dispatchEvent(me(a));
    }
  }
  openEditWizard(t) {
    const e = Ei.DAI.edit(this.element, t);
    e && this.dispatchEvent(me(e));
  }
  getValueDisplayString(t) {
    const e = t.getAttribute("sGroup"), i = e ? `SG${e}: ` : "", n = t.textContent?.trim();
    return `${i}${n}`;
  }
  renderVal() {
    const t = this.element.getAttribute("bType"), e = this.instanceElement ?? this.element;
    return !!this.instanceElement?.querySelector("Val") ? sn(e).map(
      (n) => s`<div style="display: flex; flex-direction: row;">
            <div style="display: flex; align-items: center; flex: auto;">
              <h4>${this.getValueDisplayString(n)}</h4>
            </div>
            <div style="display: flex; align-items: center;">
              <mwc-icon-button
                icon="edit"
                .disabled="${!$t()[t]}"
                @click=${() => this.openEditWizard(n)}
              >
              </mwc-icon-button>
            </div>
          </div>`
    ) : [
      s`<div style="display: flex; flex-direction: row;">
            <div style="display: flex; align-items: center; flex: auto;">
              <h4></h4>
            </div>
            <div style="display: flex; align-items: center;">
              <mwc-icon-button
                icon="add"
                .disabled="${!$t()[t]}"
                @click=${() => this.openCreateWizard()}
              >
              </mwc-icon-button>
            </div>
          </div>`
    ];
  }
  render() {
    const t = this.element.getAttribute("bType");
    return s`
      <action-pane
        .label="${this.header()}"
        icon="${this.instanceElement != null ? "done" : ""}"
      >
        <abbr slot="action">
          <mwc-icon-button
            title=${this.nsdoc.getDataDescription(this.element, this.ancestors).label}
            icon="info"
            @click=${() => this.dispatchEvent(
      me(
        Nm(
          this.element,
          this.instanceElement,
          this.ancestors,
          this.nsdoc
        )
      )
    )}
          ></mwc-icon-button>
        </abbr>
        ${t === "Struct" ? s` <abbr
              slot="action"
              title="${d("iededitor.toggleChildElements")}"
            >
              <mwc-icon-button-toggle
                id="toggleButton"
                onIcon="keyboard_arrow_up"
                offIcon="keyboard_arrow_down"
                @click=${() => this.requestUpdate()}
              >
              </mwc-icon-button-toggle>
            </abbr>` : s`${this.renderVal()}`}
        ${this.toggleButton?.on && t === "Struct" ? this.getBDAElements().map(
      (e) => s`<da-container
                  .editCount=${this.editCount}
                  .doc=${this.doc}
                  .element=${e}
                  .instanceElement=${Oa(
        this.instanceElement,
        e
      )}
                  .nsdoc=${this.nsdoc}
                  .ancestors=${[...this.ancestors, this.element]}
                >
                </da-container>`
    ) : W}
      </action-pane>
    `;
  }
};
Xt.styles = j`
    h4 {
      color: var(--mdc-theme-on-surface);
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      margin: 0px;
      padding-left: 0.3em;
      word-break: break-word;
      white-space: pre-wrap;
    }

    mwc-icon-button {
      color: var(--mdc-theme-on-surface);
    }
  `;
En([
  p({ attribute: !1 })
], Xt.prototype, "instanceElement", 2);
En([
  k("#toggleButton")
], Xt.prototype, "toggleButton", 2);
Xt = En([
  z("da-container")
], Xt);
function Rm(t, e, i, n) {
  const r = Ze(i, "IED"), a = Ze(i, "AccessPoint"), o = Ze(i, "LDevice"), l = Ra(i), u = An(t);
  return [
    s`
      <mwc-textarea
        label="${d("iededitor.wizard.nsdocDescription")}"
        value="${n.getDataDescription(t, i).label}"
        rows="3"
        cols="50"
        id="nsdocDescription"
        readonly
        disabled
      >
      </mwc-textarea>
    `,
    s`
      <mwc-textfield
        label="${d("iededitor.wizard.doName")}"
        value="${ae(t) ?? "-"}"
        id="doName"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    s`
      <mwc-textfield
        label="${d("iededitor.wizard.doiDescription")}"
        value="${e ? pt(e) ?? "-" : "-"}"
        id="doiDescription"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    s`
      <mwc-textfield
        label="${d("iededitor.wizard.doCdc")}"
        value="${u?.getAttribute("cdc") ?? "-"}"
        id="doCdc"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    s` <br /> `,
    s`
      <mwc-textfield
        label="${d("iededitor.wizard.lnPrefix")}"
        value="${l ? l.getAttribute("prefix") ?? "-" : "-"}"
        id="ln"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    s`
      <mwc-textfield
        label="${d("scl.lnClass")}"
        value="${l ? n.getDataDescription(l, i).label : "-"}"
        id="lnPrefix"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    s`
      <mwc-textfield
        label="${d("iededitor.wizard.lnInst")}"
        value="${l ? St(l) ?? "-" : "-"}"
        id="lnInst"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    s` <br /> `,
    s`
      <mwc-textfield
        label="${d("iededitor.wizard.lDevice")}"
        value="${o ? ae(o) ?? St(o) ?? "-" : "-"}"
        id="lDevice"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    s`
      <mwc-textfield
        label="${d("iededitor.wizard.accessPoint")}"
        value="${a ? ae(a) ?? "-" : "-"}"
        id="accessPoint"
        readonly
        disabled
      >
      </mwc-textfield>
    `,
    s`
      <mwc-textfield
        label="${d("iededitor.wizard.ied")}"
        value="${r ? ae(r) ?? "-" : "-"}"
        id="ied"
        readonly
        disabled
      >
      </mwc-textfield>
    `
  ];
}
function Om(t, e, i, n) {
  return [
    {
      title: d("iededitor.wizard.doTitle"),
      content: [...Rm(t, e, i, n)]
    }
  ];
}
var zm = Object.defineProperty, Fm = Object.getOwnPropertyDescriptor, Cn = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Fm(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && zm(e, i, r), r;
};
let yi = class extends Be {
  header() {
    const t = ae(this.element), e = pt(this.element);
    return this.instanceElement != null ? s`<b>${t}${e ? s` &mdash; ${e}` : W}</b>` : s`${t}${e ? s` &mdash; ${e}` : W}`;
  }
  /**
   * Get the nested SDO element(s).
   * @returns The nested SDO element(s) of this DO container.
   */
  getDOElements() {
    const t = An(this.element);
    return t != null ? Array.from(t.querySelectorAll(":scope > SDO")) : [];
  }
  /**
   * Get the nested (B)DA element(s).
   * @returns The nested (B)DA element(s) of this DO container.
   */
  getDAElements() {
    const t = this.element.getAttribute("type") ?? void 0, e = this.element.closest("SCL").querySelector(`:root > DataTypeTemplates > DOType[id="${t}"]`);
    return e != null ? Array.from(e.querySelectorAll(":scope > DA")) : [];
  }
  /**
   * Get the instance element (SDI) of a (S)DO element (if available)
   * @param dO - The (S)DO object to search with.
   * @returns The optional SDI element.
   */
  getInstanceDOElement(t) {
    const e = ae(t);
    return this.instanceElement ? this.instanceElement.querySelector(
      `:scope > SDI[name="${e}"]`
    ) : null;
  }
  render() {
    const t = this.getDAElements(), e = this.getDOElements();
    return s`<action-pane
      .label="${this.header()}"
      icon="${this.instanceElement != null ? "done" : ""}"
    >
      <abbr slot="action">
        <mwc-icon-button
          title=${this.nsdoc.getDataDescription(this.element).label}
          icon="info"
          @click=${() => this.dispatchEvent(
      me(
        Om(
          this.element,
          this.instanceElement,
          this.ancestors,
          this.nsdoc
        )
      )
    )}
        ></mwc-icon-button>
      </abbr>
      ${t.length > 0 || e.length > 0 ? s`<abbr
            slot="action"
            title="${d("iededitor.toggleChildElements")}"
          >
            <mwc-icon-button-toggle
              id="toggleButton"
              onIcon="keyboard_arrow_up"
              offIcon="keyboard_arrow_down"
              @click=${() => this.requestUpdate()}
            ></mwc-icon-button-toggle>
          </abbr>` : W}
      ${this.toggleButton?.on ? t.map(
      (i) => s`<da-container
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${i}
                .instanceElement=${Oa(
        this.instanceElement,
        i
      )}
                .nsdoc=${this.nsdoc}
                .ancestors=${[...this.ancestors, this.element]}
              ></da-container>`
    ) : W}
      ${this.toggleButton?.on ? e.map(
      (i) => s`<do-container
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${i}
                .instanceElement=${this.getInstanceDOElement(i)}
                .nsdoc=${this.nsdoc}
                .ancestors=${[...this.ancestors, this.element]}
              ></do-container>`
    ) : W}
    </action-pane> `;
  }
};
Cn([
  p({ attribute: !1 })
], yi.prototype, "instanceElement", 2);
Cn([
  k("#toggleButton")
], yi.prototype, "toggleButton", 2);
yi = Cn([
  z("do-container")
], yi);
var Vm = Object.defineProperty, Pm = Object.getOwnPropertyDescriptor, Va = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Pm(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Vm(e, i, r), r;
};
let cn = class extends Be {
  header() {
    const t = this.element.getAttribute("prefix"), e = St(this.element), i = this.element.getAttribute("desc"), n = this.nsdoc.getDataDescription(this.element);
    return s`${t != null ? s`${t} &mdash; ` : W}
    ${n.label} ${e ? s` &mdash; ${e}` : W}
    ${i ? s` &mdash; ${i}` : W}`;
  }
  /**
   * Get the DO child elements of this LN(0) section.
   * @returns The DO child elements, or an empty array if none are found.
   */
  getDOElements() {
    const t = this.element.getAttribute("lnType") ?? void 0, e = this.element.closest("SCL").querySelector(`:root > DataTypeTemplates > LNodeType[id="${t}"]`);
    return e != null ? Array.from(e.querySelectorAll(":scope > DO")) : [];
  }
  /**
   * Get the instance element (DOI) of a DO element (if available)
   * @param dO - The DO object to use.
   * @returns The optional DOI object.
   */
  getInstanceElement(t) {
    const e = ae(t);
    return this.element.querySelector(`:scope > DOI[name="${e}"]`);
  }
  openEditWizard() {
    const t = this.element.tagName === "LN" ? "LN" : "LN0", e = Ei[t].edit(this.element);
    e && this.dispatchEvent(me(e));
  }
  render() {
    const t = this.getDOElements();
    return s`<action-pane .label="${Yr(this.header())}">
      ${t.length > 0 ? s`<abbr slot="action">
          <mwc-icon-button
            slot="action"
            mini
            icon="edit"
            @click="${() => this.openEditWizard()}}"
          ></mwc-icon-button>
        </abbr>
        <abbr
            slot="action"
            title="${d("iededitor.toggleChildElements")}"
          >
            <mwc-icon-button-toggle
              id="toggleButton"
              onIcon="keyboard_arrow_up"
              offIcon="keyboard_arrow_down"
              @click=${() => this.requestUpdate()}
            ></mwc-icon-button-toggle>
          </abbr>` : W}
      ${this.toggleButton?.on ? t.map(
      (e) => s`<do-container
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${e}
              .instanceElement=${this.getInstanceElement(e)}
              .nsdoc=${this.nsdoc}
              .ancestors=${[...this.ancestors, this.element]}
            ></do-container> `
    ) : W}
    </action-pane>`;
  }
};
Va([
  k("#toggleButton")
], cn.prototype, "toggleButton", 2);
cn = Va([
  z("ln-container")
], cn);
var Mm = Object.defineProperty, Hm = Object.getOwnPropertyDescriptor, Ci = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Hm(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Mm(e, i, r), r;
};
let Rt = class extends Be {
  constructor() {
    super(...arguments), this.selectedLNClasses = [];
  }
  openEditWizard() {
    const t = Ei.LDevice.edit(this.element);
    t && this.dispatchEvent(me(t));
  }
  header() {
    const t = ae(this.element) ?? St(this.element), e = pt(this.element), i = zl(this.element);
    return s`${t}${e ? s` &mdash; ${e}` : W}${i ? s` &mdash; ${i}` : W}`;
  }
  firstUpdated() {
    this.requestUpdate();
  }
  updated(t) {
    super.updated(t), t.has("selectedLNClasses") && this.requestUpdate("lnElements");
  }
  get lnElements() {
    return Array.from(this.element.querySelectorAll(":scope > LN,LN0")).filter(
      (t) => {
        const e = t.getAttribute("lnClass") ?? "";
        return this.selectedLNClasses.includes(e);
      }
    );
  }
  render() {
    const t = this.lnElements;
    return s`<action-pane .label="${this.header()}">
      <mwc-icon slot="icon">${Bd}</mwc-icon>
      <abbr slot="action" title="${d("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button>
      </abbr>
      ${t.length > 0 ? s`<abbr
            slot="action"
            title="${d("iededitor.toggleChildElements")}"
          >
            <mwc-icon-button-toggle
              on
              id="toggleButton"
              onIcon="keyboard_arrow_up"
              offIcon="keyboard_arrow_down"
              @click=${() => this.requestUpdate()}
            ></mwc-icon-button-toggle>
          </abbr>` : W}
      <div id="lnContainer">
        ${this.toggleButton?.on ? t.map(
      (e) => s`<ln-container
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
                .nsdoc=${this.nsdoc}
                .ancestors=${[...this.ancestors, this.element]}
              ></ln-container> `
    ) : W}
      </div>
    </action-pane>`;
  }
};
Rt.styles = j`
    #lnContainer {
      display: grid;
      grid-gap: 12px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(316px, auto));
    }

    abbr {
      text-decoration: none;
    }

    @media (max-width: 387px) {
      #lnContainer {
        grid-template-columns: repeat(auto-fit, minmax(196px, auto));
      }
    }
  `;
Ci([
  p()
], Rt.prototype, "selectedLNClasses", 2);
Ci([
  k("#toggleButton")
], Rt.prototype, "toggleButton", 2);
Ci([
  D()
], Rt.prototype, "lnElements", 1);
Rt = Ci([
  z("ldevice-container")
], Rt);
var Bm = Object.defineProperty, qm = Object.getOwnPropertyDescriptor, In = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? qm(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Bm(e, i, r), r;
};
let xi = class extends Be {
  constructor() {
    super(...arguments), this.selectedLNClasses = [];
  }
  header() {
    const t = pt(this.element);
    return s`Server${t ? s` &mdash; ${t}` : W}`;
  }
  updated(t) {
    super.updated(t), t.has("selectedLNClasses") && this.requestUpdate("lDeviceElements");
  }
  get lDeviceElements() {
    return Array.from(this.element.querySelectorAll(":scope > LDevice")).filter(
      (t) => Array.from(t.querySelectorAll(":scope > LN,LN0")).filter(
        (e) => {
          const i = e.getAttribute("lnClass") ?? "";
          return this.selectedLNClasses.includes(i);
        }
      ).length > 0
    );
  }
  render() {
    return s`<action-pane .label="${this.header()}">
      <mwc-icon slot="icon">${Hd}</mwc-icon>
      ${this.lDeviceElements.map(
      (t) => s`<ldevice-container
            .editCount=${this.editCount}
            .doc=${this.doc}
            .element=${t}
            .nsdoc=${this.nsdoc}
            .selectedLNClasses=${this.selectedLNClasses}
            .ancestors=${[...this.ancestors, this.element]}
          ></ldevice-container>`
    )}
    </action-pane>`;
  }
};
In([
  p()
], xi.prototype, "selectedLNClasses", 2);
In([
  D()
], xi.prototype, "lDeviceElements", 1);
xi = In([
  z("server-container")
], xi);
var Gm = Object.defineProperty, Wm = Object.getOwnPropertyDescriptor, kn = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Wm(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Gm(e, i, r), r;
};
let Zt = class extends Be {
  constructor() {
    super(...arguments), this.selectedLNClasses = [];
  }
  updated(t) {
    super.updated(t), t.has("selectedLNClasses") && this.requestUpdate("lnElements");
  }
  renderServicesIcon() {
    const t = this.element.querySelector("Services");
    return t ? s` <abbr slot="action" title="${d("iededitor.settings")}">
      <mwc-icon-button
        icon="settings"
        @click=${() => this.openSettingsWizard(t)}
      ></mwc-icon-button>
    </abbr>` : s``;
  }
  openSettingsWizard(t) {
    const e = Zr(t);
    e && this.dispatchEvent(me(e));
  }
  get lnElements() {
    return Array.from(this.element.querySelectorAll(":scope > LN")).filter(
      (t) => {
        const e = t.getAttribute("lnClass") ?? "";
        return this.selectedLNClasses.includes(e);
      }
    );
  }
  header() {
    const t = ae(this.element), e = pt(this.element);
    return s`${t}${e ? s` &mdash; ${e}` : W}`;
  }
  render() {
    const t = this.lnElements;
    return s`<action-pane .label="${this.header()}">
      <mwc-icon slot="icon">${Md}</mwc-icon>
      ${this.renderServicesIcon()}
      ${Array.from(this.element.querySelectorAll(":scope > Server")).map(
      (e) => s`<server-container
            .editCount=${this.editCount}
            .doc=${this.doc}
            .element=${e}
            .nsdoc=${this.nsdoc}
            .selectedLNClasses=${this.selectedLNClasses}
            .ancestors=${[...this.ancestors, this.element]}
          ></server-container>`
    )}
      <div id="lnContainer">
        ${t.map(
      (e) => s`<ln-container
            .editCount=${this.editCount}
            .doc=${this.doc}
            .element=${e}
            .nsdoc=${this.nsdoc}
            .ancestors=${[...this.ancestors, this.element]}
          ></ln-container>`
    )}
      </div>
    </action-pane>`;
  }
};
Zt.styles = j`
    #lnContainer {
      display: grid;
      grid-gap: 12px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(316px, auto));
    }

    @media (max-width: 387px) {
      #lnContainer {
        grid-template-columns: repeat(auto-fit, minmax(196px, auto));
      }
    }
  `;
kn([
  p()
], Zt.prototype, "selectedLNClasses", 2);
kn([
  D()
], Zt.prototype, "lnElements", 1);
Zt = kn([
  z("access-point-container")
], Zt);
var Um = Object.defineProperty, jm = Object.getOwnPropertyDescriptor, Pa = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? jm(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Um(e, i, r), r;
};
let vi = class extends Be {
  constructor() {
    super(...arguments), this.selectedLNClasses = [];
  }
  openEditWizard() {
    const t = Ei.IED.edit(this.element);
    t && this.dispatchEvent(me(t));
  }
  renderServicesIcon() {
    const t = this.element.querySelector("Services");
    return t ? s` <abbr slot="action" title="${d("iededitor.settings")}">
      <mwc-icon-button
        icon="settings"
        @click=${() => this.openSettingsWizard(t)}
      ></mwc-icon-button>
    </abbr>` : s``;
  }
  openSettingsWizard(t) {
    const e = Zr(t);
    e && this.dispatchEvent(me(e));
  }
  removeIED() {
    const t = va(this.element);
    t ? this.dispatchEvent(me(() => t)) : this.dispatchEvent(
      Ai({
        old: { parent: this.element.parentElement, element: this.element }
      })
    );
  }
  header() {
    const t = ae(this.element), e = pt(this.element);
    return s`${t}${e ? s` &mdash; ${e}` : W}`;
  }
  render() {
    return s` <action-pane .label="${this.header()}">
      <mwc-icon slot="icon">developer_board</mwc-icon>
      <abbr slot="action" title="${d("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.removeIED()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${d("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button>
      </abbr>
      ${this.renderServicesIcon()}
      ${Array.from(this.element.querySelectorAll(":scope > AccessPoint")).map(
      (t) => s`<access-point-container
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          .nsdoc=${this.nsdoc}
          .selectedLNClasses=${this.selectedLNClasses}
          .ancestors=${[this.element]}
        ></access-point-container>`
    )}
    </action-pane>`;
  }
};
vi.styles = j`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
Pa([
  p()
], vi.prototype, "selectedLNClasses", 2);
vi = Pa([
  z("ied-container")
], vi);
var Km = Object.defineProperty, Xm = Object.getOwnPropertyDescriptor, Ma = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Xm(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Km(e, i, r), r;
};
let _i = class extends Pe {
  constructor() {
    super(), this.elementNames = [];
    const t = this.closest("section");
    t && t.addEventListener("full-element-path", (e) => {
      this.elementNames = e.detail.elementNames;
    });
  }
  render() {
    return s`
      <h3>${this.elementNames.join(" / ")}</h3>
    `;
  }
};
_i.styles = j`
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
    }`;
Ma([
  D()
], _i.prototype, "elementNames", 2);
_i = Ma([
  z("element-path")
], _i);
s`<svg
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
const ri = {
  action: U`<path d="M0 0h24v24H0z" fill="none"></path><path d="M13 3c-4.97 0-9
  4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7
  7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0
  9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" fill="currentColor"></path>`,
  dAIcon: U`<path fill="currentColor" d="m4.2 0c-2.31 0-4.2 1.89-4.2 4.2v11.6c0 2.31 1.89 4.2 4.2 4.2h18.1c2.31 0 4.2-1.89 4.2-4.2v-11.6c0-2.31-1.89-4.2-4.2-4.2zm0 1.89h18.1c1.29 0 2.3 1.01 2.3 2.3v11.6c0 1.29-1.01 2.31-2.3 2.31h-18.1c-1.29 0-2.3-1.01-2.3-2.31v-11.6c0-1.29 1.01-2.3 2.3-2.3z"/><path fill="currentColor" d="m12.5 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path fill="currentColor" d="m19.7 15-0.74-2.56h-3.18l-0.74 2.56h-1.75l3.04-10h2.06l3.03 10zm-1.13-4.13-0.823-2.88-0.379-1.46q-0.0947 0.412-0.178 0.739-0.0829 0.327-1.02 3.59z"/>`,
  dOIcon: U`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m12.1 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path d="m21.6 9.97q0 1.56-0.515 2.75-0.515 1.19-1.47 1.82-0.959 0.625-2.24 0.625-1.97 0-3.08-1.39-1.11-1.39-1.11-3.81 0-2.41 1.11-3.76t3.1-1.35 3.1 1.36q1.12 1.36 1.12 3.74zm-1.78 0q0-1.62-0.639-2.54-0.639-0.923-1.79-0.923-1.17 0-1.81 0.916-0.639 0.909-0.639 2.54 0 1.65 0.651 2.6 0.657 0.945 1.79 0.945 1.17 0 1.81-0.923 0.639-0.923 0.639-2.62z"/>`,
  enumIcon: U`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m5.37 15v-10h6.56v1.62h-4.81v2.51h4.45v1.62h-4.45v2.64h5.06v1.62z"/><path d="m18.5 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  info: U`<path d="M0 0h24v24H0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"></path>`,
  warning: U`<path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="currentColor"></path>`,
  error: U`<path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z" fill="currentColor"></path><path d="M11 7h2v7h-2z" fill="currentColor"></path><circle cx="12" cy="16" r="1" fill="currentColor"></circle>`,
  gooseIcon: U`<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  lNIcon: U`<path stroke="currentColor" stroke-width="1.89" fill="none" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path fill="currentColor" d="m5.71 15v-10h1.75v8.39h4.47v1.62z"/><path fill="currentColor" d="m18.2 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  logIcon: U`<path fill="currentColor" d="M9,7H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  reportIcon: U`<path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,16.41 7.58,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  smvIcon: U`<path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`
};
U`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${ri.gooseIcon}</svg>`;
U`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${ri.reportIcon}</svg>`;
U`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${ri.smvIcon}</svg>`;
U`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${ri.logIcon}</svg>`;
U`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z" />
</svg>`;
U`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M21,14V4H3V14H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M4,5H15V10H4V5M16,5H20V7H16V5M20,8V13H16V8H20M4,11H9V13H4V11M10,11H15V13H10V11Z" />
</svg>`;
U`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4,1C2.89,1 2,1.89 2,3V7C2,8.11 2.89,9 4,9H1V11H13V9H10C11.11,9 12,8.11 12,7V3C12,1.89 11.11,1 10,1H4M4,3H10V7H4V3M14,13C12.89,13 12,13.89 12,15V19C12,20.11 12.89,21 14,21H11V23H23V21H20C21.11,21 22,20.11 22,19V15C22,13.89 21.11,13 20,13H14M3.88,13.46L2.46,14.88L4.59,17L2.46,19.12L3.88,20.54L6,18.41L8.12,20.54L9.54,19.12L7.41,17L9.54,14.88L8.12,13.46L6,15.59L3.88,13.46M14,15H20V19H14V15Z" />
</svg>`;
const gr = {
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
Wt("dAIcon"), Wt("dOIcon"), Wt("enumIcon"), Wt("lNIcon");
function Wt(t) {
  if (t === "reset") return s``;
  const e = gr[t]?.height ?? 24, i = gr[t]?.width ?? 24;
  return s`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${e}"
    viewBox="0 0 ${i} ${e}"
    width="${i}"
  >
    ${ri[t]}
  </svg> `;
}
s`<svg
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
s`<svg
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
s`<svg
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
s`<svg
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
s`<svg
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
s`<svg
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
s`<svg
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
s`<svg
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
s`<svg
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
s`<svg
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
s`<svg
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
s`<svg
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
s` <svg
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
U`
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
  </svg>`;
U`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
U`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
U`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
U`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
U`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
const Zm = {
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
}, Ym = {
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
}, yr = { en: Ym, de: Zm };
async function Qm(t) {
  return Object.keys(yr).includes(t) ? yr[t] : {};
}
ja({ loader: Qm, empty: (t) => t });
const Ha = localStorage.getItem("language") || "en";
console.log("SETTING LANGUAGE TO", Ha);
Ka(Ha);
var Jm = Object.defineProperty, ep = Object.getOwnPropertyDescriptor, ft = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? ep(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Jm(e, i, r), r;
};
class bt extends Pe {
  constructor() {
    super(...arguments), this.editCount = -1, this.selectedIEDs = [], this.selectedLNClasses = [], this.lNClassListOpenedOnce = !1;
  }
  get iedList() {
    return this.doc ? Array.from(this.doc.querySelectorAll(":root > IED")).sort(
      (e, i) => Kr(e, i)
    ) : [];
  }
  get lnClassList() {
    const e = this.selectedIed, i = [];
    return e ? Array.from(e.querySelectorAll("LN0, LN")).filter((n) => n.hasAttribute("lnClass")).filter((n) => {
      const r = n.getAttribute("lnClass") ?? "";
      return i.includes(r) ? !1 : (i.push(r), !0);
    }).sort((n, r) => {
      const a = n.getAttribute("lnClass") ?? "", o = r.getAttribute("lnClass") ?? "";
      return a.localeCompare(o);
    }).map((n) => {
      const r = n.getAttribute("lnClass"), a = this.nsdoc.getDataDescription(n).label;
      return [r, a];
    }) : [];
  }
  get selectedIed() {
    if (this.selectedIEDs.length >= 1)
      return this.iedList.find((i) => {
        const n = ae(i);
        return this.selectedIEDs[0] === n;
      });
  }
  updated(e) {
    if (super.updated(e), e.has("doc") || e.has("editCount") || e.has("nsdoc")) {
      if (this.doc?.querySelector(
        `IED[name="${this.selectedIEDs[0]}"]`
      )) return;
      this.selectedIEDs = [], this.selectedLNClasses = [], this.lNClassListOpenedOnce = !1;
      const r = this.iedList;
      if (r.length > 0) {
        const a = ae(r[0]);
        a && (this.selectedIEDs = [a]);
      }
    }
  }
  calcSelectedLNClasses() {
    const e = this.selectedLNClasses.length > 0, i = this.lnClassList.map((r) => r[0]);
    let n = i;
    return e && (n = i.filter(
      (r) => this.selectedLNClasses.includes(r)
    )), n;
  }
  render() {
    const e = this.iedList;
    return e.length > 0 ? s`<section>
        <div class="header">
          <h1>${d("filters")}:</h1>

          <oscd-filter-button
            id="iedFilter"
            icon="developer_board"
            .header=${d("iededitor.iedSelector")}
            @selected-items-changed="${(i) => {
      ((a, o) => a.length === o.length && a.every((l, u) => l === o[u]))(
        this.selectedIEDs,
        i.detail.selectedItems
      ) || (this.lNClassListOpenedOnce = !1, this.selectedIEDs = i.detail.selectedItems, this.selectedLNClasses = [], this.requestUpdate("selectedIed"));
    }}"
          >
            ${e.map((i) => {
      const n = ae(i), r = pt(i), a = i.getAttribute("type"), o = i.getAttribute("manufacturer");
      return s` <mwc-radio-list-item
                value="${n}"
                ?twoline="${a && o}"
                ?selected="${this.selectedIEDs.includes(n ?? "")}"
              >
                ${n} ${r ? s` (${r})` : s``}
                <span slot="secondary">
                  ${a} ${a && o ? s`&mdash;` : W}
                  ${o}
                </span>
              </mwc-radio-list-item>`;
    })}
          </oscd-filter-button>

          <oscd-filter-button
            id="lnClassesFilter"
            multi="true"
            .header="${d("iededitor.lnFilter")}"
            @selected-items-changed="${(i) => {
      this.selectedLNClasses = i.detail.selectedItems, this.requestUpdate("selectedIed");
    }}"
          >
            <span slot="icon">${Wt("lNIcon")}</span>
            ${this.lnClassList.map((i) => {
      const n = i[0], r = i[1];
      return s`<mwc-check-list-item
                value="${n}"
                ?selected="${this.selectedLNClasses.includes(n)}"
              >
                ${r}
              </mwc-check-list-item>`;
    })}
          </oscd-filter-button>

          <element-path class="elementPath"></element-path>
        </div>

        <ied-container
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${this.selectedIed}
          .selectedLNClasses=${this.calcSelectedLNClasses()}
          .nsdoc=${this.nsdoc}
        ></ied-container>
      </section>` : s`<h1>
      <span style="color: var(--base1)">${d("iededitor.missing")}</span>
    </h1>`;
  }
  static {
    this.styles = j`
    :host {
      width: 100vw;
    }

    section {
      padding: 8px 12px 16px;
    }

    .header {
      display: flex;
    }

    h1 {
      color: var(--mdc-theme-on-surface);
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0px;
      line-height: 48px;
      padding-left: 0.3em;
    }

    .elementPath {
      margin-left: auto;
      padding-right: 12px;
    }
  `;
  }
}
ft([
  p()
], bt.prototype, "doc", 2);
ft([
  p({ type: Number })
], bt.prototype, "editCount", 2);
ft([
  p()
], bt.prototype, "nsdoc", 2);
ft([
  D()
], bt.prototype, "selectedIEDs", 2);
ft([
  D()
], bt.prototype, "selectedLNClasses", 2);
ft([
  D()
], bt.prototype, "iedList", 1);
ft([
  D()
], bt.prototype, "lnClassList", 1);
ft([
  D()
], bt.prototype, "selectedIed", 1);
export {
  bt as default
};
