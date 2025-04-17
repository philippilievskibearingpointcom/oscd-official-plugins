import { LitElement as de, query as z, property as u, state as $, html as f, css as le, customElement as ie, queryAsync as At, eventOptions as ci } from "lit-element";
import { NodePart as ai, AttributePart as oi, directive as It, svg as je } from "lit-html";
import "@material/mwc-dialog";
import "@material/mwc-list";
import "@material/mwc-formfield";
import "@material/mwc-icon";
import { Select as si } from "@material/mwc-select";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
import { TextField as di } from "@material/mwc-textfield";
const li = 1e3 * 60, Je = "langChanged";
function pi(t, e, i) {
  return Object.entries(Re(e || {})).reduce((r, [n, c]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(Re(c))), t);
}
function ui(t, e) {
  const i = t.split(".");
  let r = e.strings;
  for (; r != null && i.length > 0; )
    r = r[i.shift()];
  return r != null ? r.toString() : null;
}
function Re(t) {
  return typeof t == "function" ? t() : t;
}
const mi = () => ({
  loader: () => Promise.resolve({}),
  empty: (t) => `[${t}]`,
  lookup: ui,
  interpolate: pi,
  translationCache: {}
});
let hi = mi();
function fi(t, e) {
  const i = (r) => t(r.detail);
  return window.addEventListener(Je, i, e), () => window.removeEventListener(Je, i);
}
function V(t, e, i = hi) {
  let r = i.translationCache[t] || (i.translationCache[t] = i.lookup(t, i) || i.empty(t, i));
  return e = e != null ? Re(e) : null, e != null ? i.interpolate(r, e, i) : r;
}
function Dt(t) {
  return t instanceof ai ? t.startNode.isConnected : t instanceof oi ? t.committer.element.isConnected : t.element.isConnected;
}
function bi(t) {
  for (const [e] of t)
    Dt(e) || t.delete(e);
}
function gi(t) {
  "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t);
}
function yi(t, e) {
  setInterval(() => gi(() => bi(t)), e);
}
const Be = /* @__PURE__ */ new Map();
function vi() {
  fi((t) => {
    for (const [e, i] of Be)
      Dt(e) && Nt(e, i, t);
  });
}
vi();
yi(Be, li);
function Nt(t, e, i) {
  const r = e(i);
  t.value !== r && (t.setValue(r), t.commit());
}
It((t) => (e) => {
  Be.set(e, t), Nt(e, t);
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
const Lt = /* @__PURE__ */ new WeakMap(), xe = (t) => (...e) => {
  const i = t(...e);
  return Lt.set(i, !0), i;
}, Fe = (t) => typeof t == "function" && Lt.has(t);
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
const Qe = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, xi = (t, e, i = null, r = null) => {
  for (; e !== i; ) {
    const n = e.nextSibling;
    t.insertBefore(e, r), e = n;
  }
}, Et = (t, e, i = null) => {
  for (; e !== i; ) {
    const r = e.nextSibling;
    t.removeChild(e), e = r;
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
const oe = {}, Ye = {};
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
const qe = `{{lit-${String(Math.random()).slice(2)}}}`, ki = `<!--${qe}-->`, Si = "$lit$", _i = (t) => t.index !== -1, ee = () => document.createComment(""), wi = (
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
class et {
  constructor(e, i, r) {
    this.__parts = [], this.template = e, this.processor = i, this.options = r;
  }
  update(e) {
    let i = 0;
    for (const r of this.__parts)
      r !== void 0 && r.setValue(e[i]), i++;
    for (const r of this.__parts)
      r !== void 0 && r.commit();
  }
  _clone() {
    const e = Qe ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), i = [], r = this.template.parts, n = document.createTreeWalker(e, 133, null, !1);
    let c = 0, a = 0, o, s = n.nextNode();
    for (; c < r.length; ) {
      if (o = r[c], !_i(o)) {
        this.__parts.push(void 0), c++;
        continue;
      }
      for (; a < o.index; )
        a++, s.nodeName === "TEMPLATE" && (i.push(s), n.currentNode = s.content), (s = n.nextNode()) === null && (n.currentNode = i.pop(), s = n.nextNode());
      if (o.type === "node") {
        const m = this.processor.handleTextExpression(this.options);
        m.insertAfterNode(s.previousSibling), this.__parts.push(m);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(s, o.name, o.strings, this.options));
      c++;
    }
    return Qe && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const tt = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (t) => t }), Ci = ` ${qe} `;
class $i {
  constructor(e, i, r, n) {
    this.strings = e, this.values = i, this.type = r, this.processor = n;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */
  getHTML() {
    const e = this.strings.length - 1;
    let i = "", r = !1;
    for (let n = 0; n < e; n++) {
      const c = this.strings[n], a = c.lastIndexOf("<!--");
      r = (a > -1 || r) && c.indexOf("-->", a + 1) === -1;
      const o = wi.exec(c);
      o === null ? i += c + (r ? Ci : ki) : i += c.substr(0, o.index) + o[1] + o[2] + Si + o[3] + qe;
    }
    return i += this.strings[e], i;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let i = this.getHTML();
    return tt !== void 0 && (i = tt.createHTML(i)), e.innerHTML = i, e;
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
const Rt = (t) => t === null || !(typeof t == "object" || typeof t == "function"), Ai = (t) => Array.isArray(t) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(t && t[Symbol.iterator]);
class ke {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== oe && (!Rt(e) || e !== this.value) && (this.value = e, Fe(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; Fe(this.value); ) {
      const e = this.value;
      this.value = oe, e(this);
    }
    this.value !== oe && this.committer.commit();
  }
}
class Se {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(ee()), this.endNode = e.appendChild(ee());
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
    e.__insert(this.startNode = ee()), e.__insert(this.endNode = ee());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = ee()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; Fe(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = oe, i(this);
    }
    const e = this.__pendingValue;
    e !== oe && (Rt(e) ? e !== this.value && this.__commitText(e) : e instanceof $i ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : Ai(e) ? this.__commitIterable(e) : e === Ye ? (this.value = Ye, this.clear()) : this.__commitText(e));
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
    const r = typeof e == "string" ? e : String(e);
    i === this.endNode.previousSibling && i.nodeType === 3 ? i.data = r : this.__commitNode(document.createTextNode(r)), this.value = e;
  }
  __commitTemplateResult(e) {
    const i = this.options.templateFactory(e);
    if (this.value instanceof et && this.value.template === i)
      this.value.update(e.values);
    else {
      const r = new et(i, e.processor, this.options), n = r._clone();
      r.update(e.values), this.__commitNode(n), this.value = r;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const i = this.value;
    let r = 0, n;
    for (const c of e)
      n = i[r], n === void 0 && (n = new Se(this.options), i.push(n), r === 0 ? n.appendIntoPart(this) : n.insertAfterPart(i[r - 1])), n.setValue(c), n.commit(), r++;
    r < i.length && (i.length = r, this.clear(n && n.endNode));
  }
  clear(e = this.startNode) {
    Et(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class Ft extends ke {
}
let Ii = !1;
(() => {
  try {
    const t = {
      get capture() {
        return Ii = !0, !1;
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
var Pe = function(t, e) {
  return Pe = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
    i.__proto__ = r;
  } || function(i, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
  }, Pe(t, e);
};
function Di(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Pe(t, e);
  function i() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
}
var se = function() {
  return se = Object.assign || function(e) {
    for (var i, r = 1, n = arguments.length; r < n; r++) {
      i = arguments[r];
      for (var c in i) Object.prototype.hasOwnProperty.call(i, c) && (e[c] = i[c]);
    }
    return e;
  }, se.apply(this, arguments);
};
function h(t, e, i, r) {
  var n = arguments.length, c = n < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, i) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") c = Reflect.decorate(t, e, i, r);
  else for (var o = t.length - 1; o >= 0; o--) (a = t[o]) && (c = (n < 3 ? a(c) : n > 3 ? a(e, i, c) : a(e, i)) || c);
  return n > 3 && c && Object.defineProperty(e, i, c), c;
}
function ue(t) {
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
function Ni(t, e) {
  var i = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return i.call(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Pt = () => {
}, Li = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", Pt, Li);
document.removeEventListener("x", Pt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Mt extends de {
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
var Ei = (
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
var Ri = {
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
}, it = {
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
  var r = e.x, n = e.y, c = r + i.left, a = n + i.top, o, s;
  if (t.type === "touchstart") {
    var m = t;
    o = m.changedTouches[0].pageX - c, s = m.changedTouches[0].pageY - a;
  } else {
    var b = t;
    o = b.pageX - c, s = b.pageY - a;
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
var rt = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], nt = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], me = [], Mi = (
  /** @class */
  function(t) {
    Di(e, t);
    function e(i) {
      var r = t.call(this, se(se({}, e.defaultAdapter), i)) || this;
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
        return Ri;
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
        return it;
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
          for (var c = ue(rt), a = c.next(); !a.done; a = c.next()) {
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
    }, e.prototype.registerDeactivationHandlers = function(i) {
      var r, n;
      if (i.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var c = ue(nt), a = c.next(); !a.done; a = c.next()) {
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
    }, e.prototype.deregisterRootHandlers = function() {
      var i, r;
      try {
        for (var n = ue(rt), c = n.next(); !c.done; c = n.next()) {
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
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var i, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var n = ue(nt), c = n.next(); !c.done; c = n.next()) {
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
            var o = i !== void 0 && me.length > 0 && me.some(function(s) {
              return r.adapter.containsEventTarget(s);
            });
            if (o) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (me.push(i.target), this.registerDeactivationHandlers(i)), n.wasElementMadeActive = this.checkElementMadeActive(i), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              me = [], !n.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (n.wasElementMadeActive = r.checkElementMadeActive(i), n.wasElementMadeActive && r.animateActivation()), n.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var i = this, r = e.strings, n = r.VAR_FG_TRANSLATE_START, c = r.VAR_FG_TRANSLATE_END, a = e.cssClasses, o = a.FG_DEACTIVATION, s = a.FG_ACTIVATION, m = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var b = "", d = "";
      if (!this.adapter.isUnbounded()) {
        var g = this.getFgTranslationCoordinates(), y = g.startPoint, v = g.endPoint;
        b = y.x + "px, " + y.y + "px", d = v.x + "px, " + v.y + "px";
      }
      this.adapter.updateCssVariable(n, b), this.adapter.updateCssVariable(c, d), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(o), this.adapter.computeBoundingRect(), this.adapter.addClass(s), this.activationTimer = setTimeout(function() {
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
      var a = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: c, endPoint: a };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var i = this, r = e.cssClasses.FG_DEACTIVATION, n = this.activationState, c = n.hasDeactivationUXRun, a = n.isActivated, o = c || !a;
      o && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        i.adapter.removeClass(r);
      }, it.FG_DEACTIVATION_MS));
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
        var n = se({}, r);
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
  }(Ei)
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
class Hi {
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
const ct = /* @__PURE__ */ new WeakMap(), Ue = xe((t) => (e) => {
  if (!(e instanceof ke) || e instanceof Ft || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = e, { element: r } = i;
  let n = ct.get(e);
  n === void 0 && (r.setAttribute("class", i.strings.join(" ")), ct.set(e, n = /* @__PURE__ */ new Set()));
  const c = r.classList || new Hi(r);
  n.forEach((a) => {
    a in t || (c.remove(a), n.delete(a));
  });
  for (const a in t) {
    const o = t[a];
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
const at = /* @__PURE__ */ new WeakMap(), Vi = xe((t) => (e) => {
  if (!(e instanceof ke) || e instanceof Ft || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = e, { style: r } = i.element;
  let n = at.get(e);
  n === void 0 && (r.cssText = i.strings.join(" "), at.set(e, n = /* @__PURE__ */ new Set())), n.forEach((c) => {
    c in t || (n.delete(c), c.indexOf("-") === -1 ? r[c] = null : r.removeProperty(c));
  });
  for (const c in t)
    n.add(c), c.indexOf("-") === -1 ? r[c] = t[c] : r.setProperty(c, t[c]);
});
class N extends Mt {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Mi;
  }
  get isActive() {
    return Ni(this.parentElement || this, ":active");
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
    return f`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Ue(r)}"
          style="${Vi({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
h([
  z(".mdc-ripple-surface")
], N.prototype, "mdcRoot", void 0);
h([
  u({ type: Boolean })
], N.prototype, "primary", void 0);
h([
  u({ type: Boolean })
], N.prototype, "accent", void 0);
h([
  u({ type: Boolean })
], N.prototype, "unbounded", void 0);
h([
  u({ type: Boolean })
], N.prototype, "disabled", void 0);
h([
  u({ type: Boolean })
], N.prototype, "activated", void 0);
h([
  u({ type: Boolean })
], N.prototype, "selected", void 0);
h([
  u({ type: Boolean })
], N.prototype, "internalUseStateLayerCustomProperties", void 0);
h([
  $()
], N.prototype, "hovering", void 0);
h([
  $()
], N.prototype, "bgFocused", void 0);
h([
  $()
], N.prototype, "fgActivation", void 0);
h([
  $()
], N.prototype, "fgDeactivation", void 0);
h([
  $()
], N.prototype, "fgScale", void 0);
h([
  $()
], N.prototype, "fgSize", void 0);
h([
  $()
], N.prototype, "translateStart", void 0);
h([
  $()
], N.prototype, "translateEnd", void 0);
h([
  $()
], N.prototype, "leftPos", void 0);
h([
  $()
], N.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ti = le`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let Me = class extends N {
};
Me.styles = [Ti];
Me = h([
  ie("mwc-ripple")
], Me);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const We = (t) => (
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
          const s = this.constructor._observers.get(a);
          s !== void 0 && s.call(this, this[a], c);
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
class Ht {
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
class P extends de {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new Ht(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const e = this.renderText(), i = this.graphic ? this.renderGraphic() : f``, r = this.hasMeta ? this.renderMeta() : f``;
    return f`
      ${this.renderRipple()}
      ${i}
      ${e}
      ${r}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? f`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? f`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return f`
      <span class="mdc-deprecated-list-item__graphic material-icons ${Ue(e)}">
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
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return f`
      <span class="mdc-deprecated-list-item__text">
        ${e}
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
h([
  z("slot")
], P.prototype, "slotElement", void 0);
h([
  At("mwc-ripple")
], P.prototype, "ripple", void 0);
h([
  u({ type: String })
], P.prototype, "value", void 0);
h([
  u({ type: String, reflect: !0 })
], P.prototype, "group", void 0);
h([
  u({ type: Number, reflect: !0 })
], P.prototype, "tabindex", void 0);
h([
  u({ type: Boolean, reflect: !0 }),
  We(function(t) {
    t ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], P.prototype, "disabled", void 0);
h([
  u({ type: Boolean, reflect: !0 })
], P.prototype, "twoline", void 0);
h([
  u({ type: Boolean, reflect: !0 })
], P.prototype, "activated", void 0);
h([
  u({ type: String, reflect: !0 })
], P.prototype, "graphic", void 0);
h([
  u({ type: Boolean })
], P.prototype, "multipleGraphics", void 0);
h([
  u({ type: Boolean })
], P.prototype, "hasMeta", void 0);
h([
  u({ type: Boolean, reflect: !0 }),
  We(function(t) {
    t ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], P.prototype, "noninteractive", void 0);
h([
  u({ type: Boolean, reflect: !0 }),
  We(function(t) {
    const e = this.getAttribute("role"), i = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (i && t ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(t, "property");
  })
], P.prototype, "selected", void 0);
h([
  $()
], P.prototype, "shouldRenderRipple", void 0);
h([
  $()
], P.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Oi = le`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let He = class extends P {
};
He.styles = [Oi];
He = h([
  ie("mwc-list-item")
], He);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function zi(t, e, i) {
  const r = t.constructor;
  if (!i) {
    const o = `__${e}`;
    if (i = r.getPropertyDescriptor(e, o), !i)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const n = i;
  let c = "";
  if (!n.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const a = {
    configurable: !0,
    enumerable: !0,
    set(o) {
      c === "" && (c = r.getPropertyOptions(e).attribute), this.hasAttribute(c) && this.removeAttribute(c), n.set.call(this, o);
    }
  };
  return n.get && (a.get = function() {
    return n.get.call(this);
  }), a;
}
function Xe(t, e, i) {
  if (e !== void 0)
    return zi(t, e, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Vt extends Mt {
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
Vt.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const De = /* @__PURE__ */ new WeakMap(), ae = xe((t) => (e) => {
  const i = De.get(e);
  if (t === void 0 && e instanceof ke) {
    if (i !== void 0 || !De.has(e)) {
      const r = e.committer.name;
      e.committer.element.removeAttribute(r);
    }
  } else t !== i && e.setValue(t);
  De.set(e, t);
});
class L extends Vt {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new Ht(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
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
    return f`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Ue(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${ae(this.name)}"
              aria-checked="${ae(r)}"
              aria-label="${ae(this.ariaLabel)}"
              aria-labelledby="${ae(this.ariaLabelledBy)}"
              aria-describedby="${ae(this.ariaDescribedBy)}"
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
h([
  z(".mdc-checkbox")
], L.prototype, "mdcRoot", void 0);
h([
  z("input")
], L.prototype, "formElement", void 0);
h([
  u({ type: Boolean, reflect: !0 })
], L.prototype, "checked", void 0);
h([
  u({ type: Boolean })
], L.prototype, "indeterminate", void 0);
h([
  u({ type: Boolean, reflect: !0 })
], L.prototype, "disabled", void 0);
h([
  u({ type: String, reflect: !0 })
], L.prototype, "name", void 0);
h([
  u({ type: String })
], L.prototype, "value", void 0);
h([
  Xe,
  u({ type: String, attribute: "aria-label" })
], L.prototype, "ariaLabel", void 0);
h([
  Xe,
  u({ type: String, attribute: "aria-labelledby" })
], L.prototype, "ariaLabelledBy", void 0);
h([
  Xe,
  u({ type: String, attribute: "aria-describedby" })
], L.prototype, "ariaDescribedBy", void 0);
h([
  u({ type: Boolean })
], L.prototype, "reducedTouchTarget", void 0);
h([
  $()
], L.prototype, "animationClass", void 0);
h([
  $()
], L.prototype, "shouldRenderRipple", void 0);
h([
  $()
], L.prototype, "focused", void 0);
h([
  $()
], L.prototype, "useStateLayerCustomProperties", void 0);
h([
  At("mwc-ripple")
], L.prototype, "ripple", void 0);
h([
  ci({ passive: !0 })
], L.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Gi = le`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let Ve = class extends L {
};
Ve.styles = [Gi];
Ve = h([
  ie("mwc-checkbox")
], Ve);
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
const ot = (t, e) => {
  const i = t.startNode.parentNode, r = e === void 0 ? t.endNode : e.startNode, n = i.insertBefore(ee(), r);
  i.insertBefore(ee(), r);
  const c = new Se(t.options);
  return c.insertAfterNode(n), c;
}, Q = (t, e) => (t.setValue(e), t.commit(), t), Ne = (t, e, i) => {
  const r = t.startNode.parentNode, n = i ? i.startNode : t.endNode, c = e.endNode.nextSibling;
  c !== n && xi(r, e.startNode, c, n);
}, Le = (t) => {
  Et(t.startNode.parentNode, t.startNode, t.endNode.nextSibling);
}, st = (t, e, i) => {
  const r = /* @__PURE__ */ new Map();
  for (let n = e; n <= i; n++)
    r.set(t[n], n);
  return r;
}, dt = /* @__PURE__ */ new WeakMap(), lt = /* @__PURE__ */ new WeakMap(), he = xe((t, e, i) => {
  let r;
  return i === void 0 ? i = e : e !== void 0 && (r = e), (n) => {
    if (!(n instanceof Se))
      throw new Error("repeat can only be used in text bindings");
    const c = dt.get(n) || [], a = lt.get(n) || [], o = [], s = [], m = [];
    let b = 0;
    for (const w of t)
      m[b] = r ? r(w, b) : b, s[b] = i(w, b), b++;
    let d, g, y = 0, v = c.length - 1, x = 0, _ = s.length - 1;
    for (; y <= v && x <= _; )
      if (c[y] === null)
        y++;
      else if (c[v] === null)
        v--;
      else if (a[y] === m[x])
        o[x] = Q(c[y], s[x]), y++, x++;
      else if (a[v] === m[_])
        o[_] = Q(c[v], s[_]), v--, _--;
      else if (a[y] === m[_])
        o[_] = Q(c[y], s[_]), Ne(n, c[y], o[_ + 1]), y++, _--;
      else if (a[v] === m[x])
        o[x] = Q(c[v], s[x]), Ne(n, c[v], c[y]), v--, x++;
      else if (d === void 0 && (d = st(m, x, _), g = st(a, y, v)), !d.has(a[y]))
        Le(c[y]), y++;
      else if (!d.has(a[v]))
        Le(c[v]), v--;
      else {
        const w = g.get(m[x]), R = w !== void 0 ? c[w] : null;
        if (R === null) {
          const q = ot(n, c[y]);
          Q(q, s[x]), o[x] = q;
        } else
          o[x] = Q(R, s[x]), Ne(n, R, c[y]), c[w] = null;
        x++;
      }
    for (; x <= _; ) {
      const w = ot(n, o[_ + 1]);
      Q(w, s[x]), o[x++] = w;
    }
    for (; y <= v; ) {
      const w = c[y++];
      w !== null && Le(w);
    }
    dt.set(n, o), lt.set(n, m);
  };
});
var ji = Object.defineProperty, Bi = Object.getOwnPropertyDescriptor, G = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Bi(e, i) : e, c = t.length - 1, a; c >= 0; c--)
    (a = t[c]) && (n = (r ? a(e, i, n) : a(n)) || n);
  return r && n && ji(e, i, n), n;
};
let T = class extends di {
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
    return this.reservedValues && this.reservedValues.some((t) => t === this.value) ? (this.setCustomValidity(V("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
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
      (t) => f`<mwc-list-item ?selected=${t === this.multiplier}
          >${t === null ? V("textfield.noMultiplier") : t}</mwc-list-item
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
G([
  u({ type: Boolean })
], T.prototype, "nullable", 2);
G([
  u({ type: Array })
], T.prototype, "multipliers", 2);
G([
  u({ type: String })
], T.prototype, "multiplier", 1);
G([
  u({ type: String })
], T.prototype, "unit", 2);
G([
  $()
], T.prototype, "null", 1);
G([
  u({ type: String })
], T.prototype, "maybeValue", 1);
G([
  u({ type: String })
], T.prototype, "defaultValue", 2);
G([
  u({ type: Array })
], T.prototype, "reservedValues", 2);
G([
  z("mwc-switch")
], T.prototype, "nullSwitch", 2);
G([
  z("mwc-menu")
], T.prototype, "multiplierMenu", 2);
G([
  z("mwc-icon-button")
], T.prototype, "multiplierButton", 2);
T = G([
  ie("wizard-textfield")
], T);
var qi = Object.defineProperty, Ui = Object.getOwnPropertyDescriptor, re = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Ui(e, i) : e, c = t.length - 1, a; c >= 0; c--)
    (a = t[c]) && (n = (r ? a(e, i, n) : a(n)) || n);
  return r && n && qi(e, i, n), n;
};
let X = class extends si {
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
re([
  u({ type: Boolean })
], X.prototype, "nullable", 2);
re([
  $()
], X.prototype, "null", 1);
re([
  u({ type: String })
], X.prototype, "maybeValue", 1);
re([
  u({ type: String })
], X.prototype, "defaultValue", 2);
re([
  u({ type: Array })
], X.prototype, "reservedValues", 2);
re([
  z("mwc-switch")
], X.prototype, "nullSwitch", 2);
X = re([
  ie("wizard-select")
], X);
var Wi = Object.defineProperty, Xi = Object.getOwnPropertyDescriptor, O = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Xi(e, i) : e, c = t.length - 1, a; c >= 0; c--)
    (a = t[c]) && (n = (r ? a(e, i, n) : a(n)) || n);
  return r && n && Wi(e, i, n), n;
};
let H = class extends de {
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
O([
  u({ type: String })
], H.prototype, "label", 2);
O([
  u({ type: String })
], H.prototype, "helper", 2);
O([
  u({ type: Boolean })
], H.prototype, "nullable", 2);
O([
  u({ type: Boolean })
], H.prototype, "defaultChecked", 2);
O([
  u({ type: String })
], H.prototype, "maybeValue", 1);
O([
  u({ type: Boolean })
], H.prototype, "disabled", 2);
O([
  $()
], H.prototype, "null", 1);
O([
  $()
], H.prototype, "checked", 1);
O([
  $()
], H.prototype, "deactivateCheckbox", 2);
O([
  $()
], H.prototype, "formfieldLabel", 1);
O([
  z("mwc-switch")
], H.prototype, "nullSwitch", 2);
O([
  z("mwc-checkbox")
], H.prototype, "checkbox", 2);
H = O([
  ie("wizard-checkbox")
], H);
function Zi(t) {
  const e = t.getAttribute("name");
  return e || void 0;
}
function M(t) {
  const e = t.split(">"), i = e.pop() ?? "";
  return [e.join(">"), i];
}
const I = ":not(*)";
function Ki(t) {
  return `${t.getAttribute("version")}	${t.getAttribute("revision")}`;
}
function Ji(t, e) {
  const [i, r] = e.split("	");
  return !i || !r ? I : `${t}[version="${i}"][revision="${r}"]`;
}
function pt(t) {
  return C(t.parentElement) + ">" + t.getAttribute("connectivityNode");
}
function ut(t, e) {
  const [i, r] = M(e), n = D[t].parents.flatMap(
    (c) => E(c, i).split(",")
  );
  return F(
    n,
    [">"],
    [`${t}[connectivityNode="${r}"]`]
  ).map((c) => c.join("")).join(",");
}
function Qi(t) {
  const [e, i, r, n, c, a] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((o) => t.getAttribute(o));
  return e === "None" ? `${C(t.parentElement)}>(${n} ${a} ${c})` : `${e} ${i || "(Client)"}/${r ?? ""} ${n} ${c ?? ""}`;
}
function Yi(t, e) {
  if (e.endsWith(")")) {
    const [g, y] = M(e), [v, x, _] = y.substring(1, y.length - 1).split(" ");
    if (!v || !x) return I;
    const w = D[t].parents.flatMap(
      (R) => E(R, g).split(",")
    );
    return F(
      w,
      [">"],
      [`${t}[iedName="None"][lnClass="${v}"][lnType="${x}"][lnInst="${_}"]`]
    ).map((R) => R.join("")).join(",");
  }
  const [i, r, n, c, a] = e.split(/[ /]/);
  if (!i || !r || !c) return I;
  const [
    o,
    s,
    m,
    b,
    d
  ] = [
    [`[iedName="${i}"]`],
    r === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${r}"]`],
    n ? [`[prefix="${n}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    a ? [`[lnInst="${a}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return F(
    [t],
    o,
    s,
    m,
    b,
    d
  ).map((g) => g.join("")).join(",");
}
function er(t) {
  return `${C(t.parentElement)}>${t.getAttribute(
    "iedName"
  )} ${t.getAttribute("apName")}`;
}
function tr(t, e) {
  const [i, r] = M(e), [n, c] = r.split(" ");
  return `${E(
    "IED",
    i
  )}>${t}[iedName="${n}"][apName="${c}"]`;
}
function ir(t) {
  return `${C(t.parentElement)}>${t.getAttribute("associationID") ?? ""}`;
}
function rr(t, e) {
  const [i, r] = M(e);
  return r ? `${E(
    "Server",
    i
  )}>${t}[associationID="${r}"]` : I;
}
function nr(t) {
  return `${C(t.closest("IED"))}>>${t.getAttribute("inst")}`;
}
function cr(t, e) {
  const [i, r] = e.split(">>");
  return r ? `IED[name="${i}"] ${t}[inst="${r}"]` : I;
}
function ar(t) {
  const e = t.textContent, [i, r, n, c, a] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => t.getAttribute(o));
  return `${C(t.parentElement)}>${e} ${i || ""} ${r || ""}/${n ?? ""} ${c ?? ""} ${a ?? ""}`;
}
function or(t, e) {
  const [i, r] = M(e), [n, c, a, o, s, m] = r.split(/[ /]/), [
    b,
    d,
    g,
    y,
    v,
    x
  ] = [
    D[t].parents.flatMap(
      (_) => E(_, i).split(",")
    ),
    [`${n}`],
    c ? [`[apRef="${c}"]`] : [":not([apRef])", '[apRef=""]'],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    m ? [`[lnInst="${m}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return F(
    b,
    [">"],
    [t],
    d,
    g,
    y,
    v,
    x
  ).map((_) => _.join("")).join(",");
}
function sr(t) {
  const [e, i, r, n, c, a, o, s] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((b) => t.getAttribute(b)), m = `${e}/${i ?? ""} ${r} ${n ?? ""}.${c} ${a || ""}`;
  return `${C(t.parentElement)}>${m} (${o}${s ? " [" + s + "]" : ""})`;
}
function dr(t, e) {
  const [i, r] = M(e), [n, c, a, o] = r.split(/[ /.]/), s = r.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), m = s && s[1] ? s[1] : "", b = s && s[2] ? s[2] : "", d = r.match(/\(([A-Z]{2})/), g = r.match(/ \[([0-9]{1,2})\]/), y = d && d[1] ? d[1] : "", v = g && g[1] ? g[1] : "", [
    x,
    _,
    w,
    R,
    q,
    Ce,
    $e,
    Ae,
    Ie
  ] = [
    D[t].parents.flatMap(
      (ne) => E(ne, i).split(",")
    ),
    [`[ldInst="${n}"]`],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    o ? [`[lnInst="${o}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${m}"]`],
    b ? [`[daName="${b}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${y}"]`],
    v ? [`[ix="${v}"]`] : [":not([ix])", '[ix=""]']
  ];
  return F(
    x,
    [">"],
    [t],
    _,
    w,
    R,
    q,
    Ce,
    $e,
    Ae,
    Ie
  ).map((ne) => ne.join("")).join(",");
}
function lr(t) {
  if (!t.parentElement) return NaN;
  const e = C(t.parentElement), i = t.getAttribute("iedName"), r = t.getAttribute("intAddr"), n = Array.from(
    t.parentElement.querySelectorAll(`ExtRef[intAddr="${r}"]`)
  ).indexOf(t);
  if (r) return `${e}>${r}[${n}]`;
  const [
    c,
    a,
    o,
    s,
    m,
    b,
    d,
    g,
    y,
    v,
    x,
    _
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
  ].map((q) => t.getAttribute(q)), w = _ ? `${d}:${_} ${g ?? ""}/${y ?? ""} ${v ?? ""} ${x ?? ""}` : "", R = `${i} ${c}/${a ?? ""} ${o} ${s ?? ""} ${m} ${b || ""}`;
  return `${e}>${w ? w + " " : ""}${R}${r ? `@${r}` : ""}`;
}
function pr(t, e) {
  const [i, r] = M(e), n = D[t].parents.flatMap(
    (ce) => E(ce, i).split(",")
  );
  if (r.endsWith("]")) {
    const [ce] = r.split("["), ri = [`[intAddr="${ce}"]`];
    return F(n, [">"], [t], ri).map((ni) => ni.join("")).join(",");
  }
  let c, a, o, s, m, b, d, g, y, v, x, _, w, R;
  !r.includes(":") && !r.includes("@") ? [c, a, o, s, m, b, d] = r.split(/[ /]/) : r.includes(":") && !r.includes("@") ? [
    g,
    y,
    v,
    x,
    _,
    w,
    c,
    a,
    o,
    s,
    m,
    b,
    d
  ] = r.split(/[ /:]/) : !r.includes(":") && r.includes("@") ? [c, a, o, s, m, b, d, R] = r.split(/[ /@]/) : [
    g,
    y,
    v,
    x,
    _,
    w,
    c,
    a,
    o,
    s,
    m,
    b,
    d,
    R
  ] = r.split(/[ /:@]/);
  const [
    q,
    Ce,
    $e,
    Ae,
    Ie,
    ne,
    Zt,
    Kt,
    Jt,
    Qt,
    Yt,
    ei,
    ti,
    ii
  ] = [
    c ? [`[iedName="${c}"]`] : [":not([iedName])"],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    s ? [`[lnClass="${s}"]`] : [":not([lnClass])"],
    m ? [`[lnInst="${m}"]`] : [":not([lnInst])", '[lnInst=""]'],
    b ? [`[doName="${b}"]`] : [":not([doName])"],
    d ? [`[daName="${d}"]`] : [":not([daName])", '[daName=""]'],
    g ? [`[serviceType="${g}"]`] : [":not([serviceType])", '[serviceType=""]'],
    y ? [`[srcCBName="${y}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    v ? [`[srcLDInst="${v}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    x ? [`[srcPrefix="${x}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    _ ? [`[srcLNClass="${_}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    w ? [`[srcLNInst="${w}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    R ? [`[intAddr="${R}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return F(
    n,
    [">"],
    [t],
    q,
    Ce,
    $e,
    Ae,
    Ie,
    ne,
    Zt,
    Kt,
    Jt,
    Qt,
    Yt,
    ei,
    ti,
    ii
  ).map((ce) => ce.join("")).join(",");
}
function ur(t) {
  const [e, i, r] = ["prefix", "lnClass", "inst"].map(
    (n) => t.getAttribute(n)
  );
  return `${C(t.parentElement)}>${e ?? ""} ${i} ${r}`;
}
function mr(t, e) {
  const [i, r] = M(e), n = D[t].parents.flatMap(
    (d) => E(d, i).split(",")
  ), [c, a, o] = r.split(" ");
  if (!a) return I;
  const [s, m, b] = [
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    [`[inst="${o}"]`]
  ];
  return F(
    n,
    [">"],
    [t],
    s,
    m,
    b
  ).map((d) => d.join("")).join(",");
}
function hr(t) {
  const [e, i, r, n, c, a] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => t.getAttribute(o));
  return `${C(t.parentElement)}>${i} ${e || ""} ${r}/${n ?? ""} ${c} ${a}`;
}
function fr(t, e) {
  const [i, r] = M(e), n = D[t].parents.flatMap(
    (w) => E(w, i).split(",")
  ), [c, a, o, s, m, b] = r.split(/[ /]/), [
    d,
    g,
    y,
    v,
    x,
    _
  ] = [
    c ? [`[iedName="${c}"]`] : [":not([iedName])", '[iedName=""]'],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${m}"]`],
    b ? [`[lnInst="${b}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return F(
    n,
    [">"],
    [t],
    d,
    g,
    y,
    v,
    x,
    _
  ).map((w) => w.join("")).join(",");
}
function mt(t) {
  const [e, i] = ["name", "ix"].map((r) => t.getAttribute(r));
  return `${C(t.parentElement)}>${e}${i ? "[" + i + "]" : ""}`;
}
function Te(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [r, n] = M(e), [c, a, o, s] = n.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!a) return I;
  if (i === 0) return `${t}[name="${a}"]`;
  const m = D[t].parents.flatMap(
    (g) => g === "SDI" ? Te(g, r, i - 1).split(",") : E(g, r).split(",")
  ).filter((g) => !g.startsWith(I));
  if (m.length === 0) return I;
  const [b, d] = [
    [`[name="${a}"]`],
    s ? [`[ix="${s}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return F(
    m,
    [">"],
    [t],
    b,
    d
  ).map((g) => g.join("")).join(",");
}
function br(t) {
  if (!t.parentElement) return NaN;
  const e = t.getAttribute("sGroup"), i = Array.from(t.parentElement.children).filter((r) => r.getAttribute("sGroup") === e).findIndex((r) => r.isSameNode(t));
  return `${C(t.parentElement)}>${e ? e + "." : ""} ${i}`;
}
function gr(t, e) {
  const [i, r] = M(e), [n, c] = r.split(" "), a = parseFloat(c), o = D[t].parents.flatMap(
    (b) => E(b, i).split(",")
  ), [s, m] = [
    n ? [`[sGroup="${n}"]`] : [""],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return F(
    o,
    [">"],
    [t],
    s,
    m
  ).map((b) => b.join("")).join(",");
}
function yr(t) {
  const [e, i] = ["iedName", "apName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function vr(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? I : `${t}[iedName="${i}"][apName="${r}"]`;
}
function ht(t) {
  const [e, i] = ["ldInst", "cbName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function ft(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? I : `${t}[ldInst="${i}"][cbName="${r}"]`;
}
function xr(t) {
  if (!t.parentElement) return NaN;
  if (!t.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = t.getAttribute("type");
  return t.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${C(t.parentElement)}>${e}`;
}
function kr(t, e) {
  const [i, r] = M(e), [n, c] = [
    D[t].parents.flatMap(
      (a) => E(a, i).split(",")
    ),
    r ? [`[type="${r}"]`] : [""]
  ];
  return F(n, [">"], [t], c).map((a) => a.join("")).join(",");
}
function Sr(t) {
  if (!t.parentElement) return NaN;
  const e = t.parentElement, i = t.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${C(t.parentElement)}>${i}`;
  const r = Array.from(t.parentElement.children).filter((n) => n.getAttribute("type") === i).findIndex((n) => n.isSameNode(t));
  return `${C(t.parentElement)}>${i} [${r}]`;
}
function _r(t, e) {
  const [i, r] = M(e), [n] = r.split(" "), c = r && r.match(/\[([0-9]+)\]/) && r.match(/\[([0-9]+)\]/)[1] ? parseFloat(r.match(/\[([0-9]+)\]/)[1]) : NaN, [a, o, s] = [
    D[t].parents.flatMap(
      (m) => E(m, i).split(",")
    ),
    [`[type="${n}"]`],
    c ? [`:nth-child(${c + 1})`] : [""]
  ];
  return F(
    a,
    [">"],
    [t],
    o,
    s
  ).map((m) => m.join("")).join(",");
}
function wr(t) {
  return `${C(t.parentElement)}>${t.getAttribute("ord")}`;
}
function Cr(t, e) {
  const [i, r] = M(e);
  return `${E("EnumType", i)}>${t}[ord="${r}"]`;
}
function $r(t) {
  return `${C(t.parentElement)}>${t.getAttribute("type") || "8-MMS"}	${t.textContent}`;
}
function Ar(t, e) {
  const [i, r] = M(e), [n, c] = r.split("	"), [a] = [
    D[t].parents.flatMap(
      (o) => E(o, i).split(",")
    )
  ];
  return F(
    a,
    [">"],
    [t],
    [`[type="${n}"]`],
    [">"],
    [c]
  ).map((o) => o.join("")).join(",");
}
function Ir() {
  return "";
}
function Dr() {
  return ":root";
}
function S(t) {
  return t.parentElement.tagName === "SCL" ? t.getAttribute("name") : `${C(t.parentElement)}>${t.getAttribute("name")}`;
}
function k(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [r, n] = M(e);
  if (!n) return I;
  if (i === 0) return `${t}[name="${n}"]`;
  const c = D[t].parents;
  if (!c) return I;
  const a = c.flatMap(
    (o) => D[o].selector === D.Substation.selector ? k(o, r, i - 1).split(",") : E(o, r).split(",")
  ).filter((o) => !o.startsWith(I));
  return a.length === 0 ? I : F(a, [">"], [t], [`[name="${n}"]`]).map((o) => o.join("")).join(",");
}
function l(t) {
  return C(t.parentElement).toString();
}
function p(t, e) {
  const i = D[t].parents;
  if (!i) return I;
  const r = i.flatMap((n) => E(n, e).split(",")).filter((n) => !n.startsWith(I));
  return r.length === 0 ? I : F(r, [">"], [t]).map((n) => n.join("")).join(",");
}
function fe(t) {
  return `#${t.id}`;
}
function be(t, e) {
  const i = e.replace(/^#/, "");
  return i ? `${t}[id="${i}"]` : I;
}
const Tt = [
  "TransformerWinding",
  "ConductingEquipment"
], Ot = [
  "GeneralEquipment",
  "PowerTransformer",
  ...Tt
], Oe = ["Substation", "VoltageLevel", "Bay"], zt = ["Process", "Line"], Gt = ["EqSubFunction", "EqFunction"], Nr = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Ot,
  ...Oe,
  ...zt,
  ...Gt
], jt = ["ConnectivityNode", ...Nr], Lr = ["GOOSESecurity", "SMVSecurity"], Er = ["SubNetwork", ...Lr, ...jt], Rr = ["BDA", "DA"], Fr = ["SampledValueControl", "GSEControl"], Pr = ["LogControl", "ReportControl"], Mr = [...Fr, ...Pr], Hr = ["GSE", "SMV"], Vr = [
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
  ...Mr,
  ...Hr,
  ...Rr
], Y = ["LN0", "LN"], Tr = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Or = ["Subject", "IssuerName"], zr = ["MinTime", "MaxTime"], Gr = ["LNodeType", "DOType", "DAType", "EnumType"], jr = [
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
], Br = ["DynDataSet", "ConfDataSet"], qr = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...Br
], Ur = ["ConfLogControl", "ConfSigRef"], Wr = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], Xr = ["SCL", ...Er, ...Vr, ...Gr], Bt = [
  ...Xr,
  ...Tr,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Or,
  ...zr,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...Y,
  ...jr,
  "DynAssociation",
  "SettingGroups",
  ...qr,
  ...Ur,
  ...Wr,
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
], Zr = new Set(Bt);
function Ze(t) {
  return Zr.has(t);
}
const _e = ["Text", "Private"], U = [..._e], A = [..._e], ge = [..._e], bt = [...A, "Val"], qt = [...U, "LNode"], W = [...qt], ze = [...W], Ee = [
  ...W,
  "PowerTransformer",
  "GeneralEquipment"
], gt = [
  ...ze,
  "Terminal"
], yt = [...A, "Address"], Ut = [...U], vt = [...Ut, "IEDName"], xt = [
  ...A,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], kt = [
  ...W,
  "GeneralEquipment",
  "Function"
], St = [...Ut, "TrgOps"], _t = [
  ...W,
  "GeneralEquipment",
  "EqSubFunction"
], D = {
  AccessControl: {
    identity: l,
    selector: p,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: S,
    selector: k,
    parents: ["IED"],
    children: [
      ...U,
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
    identity: ir,
    selector: rr,
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
    identity: S,
    selector: k,
    parents: ["DAType"],
    children: [...bt]
  },
  BitRate: {
    identity: l,
    selector: p,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: S,
    selector: k,
    parents: ["VoltageLevel"],
    children: [
      ...Ee,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: hr,
    selector: fr,
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
    children: [...A, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: S,
    selector: k,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...gt,
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
    identity: yr,
    selector: vr,
    parents: ["SubNetwork"],
    children: [...A, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: S,
    selector: k,
    parents: ["Bay", "Line"],
    children: [...qt]
  },
  DA: {
    identity: S,
    selector: k,
    parents: ["DOType"],
    children: [...bt]
  },
  DAI: {
    identity: mt,
    selector: Te,
    parents: ["DOI", "SDI"],
    children: [...A, "Val"]
  },
  DAType: {
    identity: fe,
    selector: be,
    parents: ["DataTypeTemplates"],
    children: [...ge, "BDA", "ProtNs"]
  },
  DO: {
    identity: S,
    selector: k,
    parents: ["LNodeType"],
    children: [...A]
  },
  DOI: {
    identity: S,
    selector: k,
    parents: [...Y],
    children: [...A, "SDI", "DAI"]
  },
  DOType: {
    identity: fe,
    selector: be,
    parents: ["DataTypeTemplates"],
    children: [...ge, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: S,
    selector: k,
    parents: [...Y],
    children: [...U, "FCDA"]
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
    identity: fe,
    selector: be,
    parents: ["DataTypeTemplates"],
    children: [...ge, "EnumVal"]
  },
  EnumVal: {
    identity: wr,
    selector: Cr,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: S,
    selector: k,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [..._t]
  },
  EqSubFunction: {
    identity: S,
    selector: k,
    parents: ["EqSubFunction", "EqFunction"],
    children: [..._t]
  },
  ExtRef: {
    identity: lr,
    selector: pr,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: sr,
    selector: dr,
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
    identity: S,
    selector: k,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...W,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: S,
    selector: k,
    parents: [
      "SubFunction",
      "Function",
      ...zt,
      ...Gt,
      ...Oe
    ],
    children: [...ze, "EqFunction"]
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
    identity: S,
    selector: k,
    parents: ["AccessPoint"],
    children: [...U, "Subject", "IssuerName"]
  },
  GSE: {
    identity: ht,
    selector: ft,
    parents: ["ConnectedAP"],
    children: [...yt, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: S,
    selector: k,
    parents: ["LN0"],
    children: [...vt, "Protocol"]
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
    identity: Ki,
    selector: Ji,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: S,
    selector: k,
    parents: ["SCL"],
    children: [...A, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: ar,
    selector: or,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: l,
    selector: p,
    parents: [...Y],
    children: [...A, "ExtRef"]
  },
  IssuerName: {
    identity: l,
    selector: p,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: er,
    selector: tr,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: nr,
    selector: cr,
    parents: ["Server"],
    children: [...A, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: ur,
    selector: mr,
    parents: ["AccessPoint", "LDevice"],
    children: [...xt]
  },
  LN0: {
    identity: l,
    selector: p,
    parents: ["LDevice"],
    children: [
      ...xt,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: Qi,
    selector: Yi,
    parents: [...jt],
    children: [...A]
  },
  LNodeType: {
    identity: fe,
    selector: be,
    parents: ["DataTypeTemplates"],
    children: [...ge, "DO"]
  },
  Line: {
    identity: S,
    selector: k,
    parents: ["Process", "SCL"],
    children: [
      ...kt,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: S,
    selector: k,
    parents: [...Y],
    children: [...A]
  },
  LogControl: {
    identity: S,
    selector: k,
    parents: [...Y],
    children: [...St]
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
    identity: pt,
    selector: ut,
    parents: ["TransformerWinding"],
    children: [...A]
  },
  OptFields: {
    identity: l,
    selector: p,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: Sr,
    selector: _r,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: xr,
    selector: kr,
    parents: ["ConnectedAP"],
    children: [...A, "P"]
  },
  PowerTransformer: {
    identity: S,
    selector: k,
    parents: [...Oe],
    children: [
      ...ze,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => I,
    parents: [],
    children: []
  },
  Process: {
    identity: S,
    selector: k,
    parents: ["Process", "SCL"],
    children: [
      ...kt,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: $r,
    selector: Ar,
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
    identity: S,
    selector: k,
    parents: [...Y],
    children: [...St, "OptFields", "RptEnabled"]
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
    children: [...A, "ClientLN"]
  },
  SamplesPerSec: {
    identity: l,
    selector: p,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: S,
    selector: k,
    parents: ["LN0"],
    children: [...vt, "SmvOpts"]
  },
  SecPerSamples: {
    identity: l,
    selector: p,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: Ir,
    selector: Dr,
    parents: [],
    children: [
      ..._e,
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
    identity: mt,
    selector: Te,
    parents: ["DOI", "SDI"],
    children: [...A, "SDI", "DAI"]
  },
  SDO: {
    identity: S,
    selector: k,
    parents: ["DOType"],
    children: [...U]
  },
  Server: {
    identity: l,
    selector: p,
    parents: ["AccessPoint"],
    children: [
      ...A,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: l,
    selector: p,
    parents: ["AccessPoint"],
    children: [...A]
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
    children: [...A]
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
    identity: ht,
    selector: ft,
    parents: ["ConnectedAP"],
    children: [...yt]
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
    identity: S,
    selector: k,
    parents: ["AccessPoint"],
    children: [...U, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: S,
    selector: k,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...Tt
    ],
    children: [...W, "EqFunction"]
  },
  SubFunction: {
    identity: S,
    selector: k,
    parents: ["SubFunction", "Function"],
    children: [
      ...W,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: S,
    selector: k,
    parents: ["Communication"],
    children: [...U, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: l,
    selector: p,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: S,
    selector: k,
    parents: ["SCL"],
    children: [...Ee, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: l,
    selector: p,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: S,
    selector: k,
    parents: ["TransformerWinding"],
    children: [...W, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: pt,
    selector: ut,
    parents: [...Ot],
    children: [...A]
  },
  Text: {
    identity: l,
    selector: p,
    parents: Bt.filter((t) => t !== "Text" && t !== "Private"),
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
    identity: S,
    selector: k,
    parents: ["PowerTransformer"],
    children: [
      ...gt,
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
    identity: br,
    selector: gr,
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
    identity: S,
    selector: k,
    parents: ["Substation"],
    children: [...Ee, "Voltage", "Bay", "Function"]
  }
};
function E(t, e) {
  return typeof e != "string" ? I : Ze(t) ? D[t].selector(t, e) : t;
}
function Kr(t, e, i) {
  if (typeof i != "string" || !Ze(e)) return null;
  const r = t.querySelector(D[e].selector(e, i));
  return r === null || ye(r) ? r : Array.from(
    t.querySelectorAll(D[e].selector(e, i))
  ).find(ye) ?? null;
}
function C(t) {
  if (t === null) return NaN;
  if (t.closest("Private")) return NaN;
  const e = t.tagName;
  return Ze(e) ? D[e].identity(t) : NaN;
}
It((t) => (e) => {
  Object.keys(t).length ? e.setValue(t) : e.setValue("");
});
function wt(t, e) {
  return typeof t == "string" && typeof e == "string" ? t.localeCompare(e) : typeof t == "object" && typeof e == "string" ? (t.getAttribute("name") ?? "").localeCompare(e) : typeof t == "string" && typeof e == "object" ? t.localeCompare(e.getAttribute("name")) : typeof t == "object" && typeof e == "object" ? (t.getAttribute("name") ?? "").localeCompare(
    e.getAttribute("name") ?? ""
  ) : 0;
}
function F(...t) {
  return t.reduce(
    (e, i) => e.flatMap((r) => i.map((n) => [r, n].flat())),
    [[]]
  );
}
function ye(t) {
  return !t.closest("Private");
}
const Jr = 99;
Array(Jr).fill(1).map((t, e) => `${e + 1}`);
const Qr = je`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M9,7H15V9H11V11H15V13H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Yr = je`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M11,7H13A2,2 0 0,1 15,9V17H13V13H11V17H9V9A2,2 0 0,1 11,7M11,9V11H13V9H11M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
</svg>`, en = je`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M11,7H13A2,2 0 0,1 15,9V10H13V9H11V15H13V14H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, te = /* @__PURE__ */ new Map();
te.set("Attribute", Yr);
te.set("Content", en);
te.set("Element", Qr);
function ve(t, e, i) {
  const r = e === t ? ":scope" : Object.keys(i).find(
    (n) => Array.from(
      e.querySelectorAll(n)
    ).includes(t)
  );
  return r ? i[r] : void 0;
}
function Ge(t, e) {
  if (!e || !e.full)
    return !1;
  const i = e.full;
  return typeof i == "boolean" ? i : i(t);
}
function tn(t, e, i) {
  if (!i || !i.attributes || !i.attributes[e])
    return !1;
  const r = i.attributes[e];
  return typeof r == "boolean" ? r : r(t);
}
function Ct(t) {
  const e = C(t);
  return typeof e == "string" ? e : V("unidentifiable");
}
function rn(t, e, i, r) {
  const n = [], c = t.textContent?.trim() ?? "", a = e.textContent?.trim() ?? "";
  t.childElementCount === 0 && e.childElementCount === 0 && c !== a && (Ge(
    t,
    ve(
      t,
      r,
      i
    )
  ) || n.push([
    "value",
    { type: "Content", newValue: c, oldValue: a }
  ]));
  const o = new Set(
    e.getAttributeNames().concat(t.getAttributeNames())
  );
  for (const s of o)
    !tn(
      t,
      s,
      ve(
        t,
        r,
        i
      )
    ) && e.getAttribute(s) !== t.getAttribute(s) && n.push([
      s,
      {
        type: "Attribute",
        newValue: t.getAttribute(s),
        oldValue: e.getAttribute(s)
      }
    ]);
  return n;
}
function $t(t) {
  let e = C(t);
  return typeof e == "string" && (e = e.split(">").pop() ?? ""), e;
}
function nn(t, e) {
  return t.tagName === e.tagName && $t(t) === $t(e);
}
function cn(t, e, i, r, n) {
  const c = [], a = Array.from(t.children), o = Array.from(e.children);
  return a.forEach((s) => {
    if (!s.closest("Private") && !Ge(
      s,
      ve(
        s,
        r,
        i
      )
    )) {
      const b = o.findIndex(
        (g) => nn(s, g)
      ), d = b > -1 ? o[b] : null;
      d ? (o.splice(b, 1), c.push({
        type: "Element",
        newValue: s,
        oldValue: d
      })) : c.push({
        type: "Element",
        newValue: s,
        oldValue: null
      });
    }
  }), o.forEach((s) => {
    s.closest("Private") || Ge(
      s,
      ve(
        s,
        n,
        i
      )
    ) || c.push({
      type: "Element",
      newValue: null,
      oldValue: s
    });
  }), c;
}
function Wt(t, e, i = {}) {
  return an(
    t,
    e,
    i,
    t,
    e
  );
}
function an(t, e, i = {}, r, n) {
  let c = C(t).toString();
  c === "NaN" && (c = void 0), r = r || t, n = n || e;
  const a = rn(
    t,
    e,
    i,
    r
  ), o = cn(
    t,
    e,
    i,
    r,
    n
  ), s = [], m = [];
  o.forEach((d) => {
    !d.oldValue || !d.newValue ? s.push(d) : m.push(d);
  });
  const b = m.map((d) => Wt(d.newValue, d.oldValue, i)).filter((d) => d !== null);
  return b.length > 0 || a.length > 0 || s.length > 0 ? f` ${a.length > 0 || s.length > 0 ? f`<div class="container container--alt">
          <div class="list__container list__container--left">
            <mwc-list multi right nonInteractive>
              ${he(
    a,
    (d) => d,
    ([d, g]) => f`<mwc-list-item right twoLine graphic="icon">
                    ${g.oldValue !== null ? f`
                          <span>
                            ${d}:
                            ${g.oldValue === "" ? '""' : g.oldValue}
                          </span>
                          <span slot="secondary">${c}</span>
                          <mwc-icon slot="graphic">
                            ${te.get(g.type)}
                          </mwc-icon>
                        ` : ""}
                  </mwc-list-item>`
  )}
              ${he(
    s,
    (d) => d,
    (d) => f` <mwc-list-item right twoLine graphic="icon">
                    ${d.oldValue ? f`
                          <span>${d.oldValue.tagName}</span>
                          <span slot="secondary">
                            ${Ct(d.oldValue)}
                          </span>
                          <mwc-icon slot="graphic">
                            ${te.get(d.type)}
                          </mwc-icon>
                        ` : ""}
                  </mwc-list-item>`
  )}
            </mwc-list>
          </div>
          <div class="list__container">
            <mwc-list multi left nonInteractive>
              ${he(
    a,
    (d) => d,
    ([d, g]) => f` <mwc-list-item left twoLine graphic="icon">
                    ${g.newValue !== null ? f`
                          <span>
                            ${d}:
                            ${g.newValue === "" ? '""' : g.newValue}
                          </span>
                          <span slot="secondary">${c}</span>
                          <mwc-icon slot="graphic">
                            ${te.get(g.type)}
                          </mwc-icon>
                        ` : ""}
                  </mwc-list-item>`
  )}
              ${he(
    s,
    (d) => d,
    (d) => f` <mwc-list-item left twoLine graphic="icon">
                    ${d.newValue ? f`
                          <span>${d.newValue.tagName}</span>
                          <span slot="secondary">
                            ${Ct(d.newValue)}
                          </span>
                          <mwc-icon slot="graphic">
                            ${te.get(d.type)}
                          </mwc-icon>
                        ` : ""}
                  </mwc-list-item>`
  )}
            </mwc-list>
          </div>
        </div>` : ""}
    ${b}` : null;
}
var on = Object.defineProperty, sn = Object.getOwnPropertyDescriptor, B = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? sn(e, i) : e, c = t.length - 1, a; c >= 0; c--)
    (a = t[c]) && (n = (r ? a(e, i, n) : a(n)) || n);
  return r && n && on(e, i, n), n;
};
let j = class extends de {
  constructor() {
    super(...arguments), this.leftHandTitle = "", this.rightHandTitle = "", this.leftHandSubtitle = "", this.rightHandSubtitle = "", this.filterMutables = !0;
  }
  render() {
    return f`
      ${this.renderFilterCheckbox()}
      <div class="container container--alt">
        <div class="list__container list__container--left">
          <h3 class="mdc-dialog__title">${this.leftHandTitle}</h3>
          ${this.leftHandSubtitle && this.leftHandSubtitle.length > 0 ? f`<h5 class="mdc-dialog__title">${this.leftHandSubtitle}</h5> ` : ""}
        </div>
        <div class="list__container">
          <h3 class="mdc-dialog__title">${this.rightHandTitle}</h3>
          ${this.rightHandSubtitle && this.rightHandSubtitle.length > 0 ? f`<h5 class="mdc-dialog__title">
                ${this.rightHandSubtitle}
              </h5> ` : ""}
        </div>
      </div>
      ${this.leftHandObject && this.rightHandObject ? f`
            ${Wt(
      this.rightHandObject,
      this.leftHandObject,
      this.filterMutables ? this.filterToIgnore : {}
    )}
          ` : ""}
    `;
  }
  renderFilterCheckbox() {
    return this.filterToIgnore ? f`
        <div class="container">
          <div class="flex"></div>
          <mwc-formfield label="${V("compare.filterMutables")}">
            <mwc-checkbox
              ?checked=${this.filterMutables}
              @change=${() => this.filterMutables = !this.filterMutables}
            >
            </mwc-checkbox>
          </mwc-formfield>
        </div>
      ` : f``;
  }
};
j.styles = le`
    mwc-list-item {
      --mdc-list-item-graphic-margin: 0;
    }

    .mdc-dialog__title {
      padding: 0 16px;
    }

    .container {
      display: flex;
      gap: 4px;
    }

    .container--alt {
      background: var(--base2);
    }

    .list__container {
      width: 50%;
      background: var(--base3);
    }
    .list__container--left {
      text-align: right;
    }
    .flex {
      flex: 1;
    }

    mwc-list-item[right] {
      text-align: right;
      direction: rtl;
    }
  `;
B([
  u({ type: String })
], j.prototype, "leftHandTitle", 2);
B([
  u({ type: String })
], j.prototype, "rightHandTitle", 2);
B([
  u({ type: Object })
], j.prototype, "leftHandObject", 2);
B([
  u({ type: Object })
], j.prototype, "rightHandObject", 2);
B([
  u({ type: Object })
], j.prototype, "filterToIgnore", 2);
B([
  u({ type: String })
], j.prototype, "leftHandSubtitle", 2);
B([
  u({ type: String })
], j.prototype, "rightHandSubtitle", 2);
B([
  $()
], j.prototype, "filterMutables", 2);
j = B([
  ie("plain-compare-list")
], j);
function dn(t, e) {
  return new CustomEvent("pending-state", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { promise: t, ...e?.detail }
  });
}
var ln = Object.defineProperty, Z = (t, e, i, r) => {
  for (var n = void 0, c = t.length - 1, a; c >= 0; c--)
    (a = t[c]) && (n = a(e, i, n) || n);
  return n && ln(e, i, n), n;
};
const we = "LN[lnClass='TCTR']", Ke = "LN[lnClass='TVTR']", pe = "SDI[name='setMag'] Val", Xt = "DAI[name='setVal'] Val", K = {
  ":scope": {
    attributes: {
      name: !0
    }
  },
  P: {
    full: !0
  }
};
K[`${we} DOI[name='Rat'] ${pe}`] = {
  full: !0
};
K[`${we} DOI[name='ARtg'] ${pe}`] = {
  full: !0
};
K[`${we} DOI[name='ARtgNom'] ${pe}`] = {
  full: !0
};
K[`${we} DOI[name='ARtgSec'] ${Xt}`] = {
  full: !0
};
K[`${Ke} DOI[name='VRtg'] ${pe}`] = {
  full: !0
};
K[`${Ke} DOI[name='Rat'] ${pe}`] = {
  full: !0
};
K[`${Ke} DOI[name='VRtgSec'] ${Xt}`] = {
  full: !0
};
class J extends de {
  constructor() {
    super(...arguments), this.editCount = -1, this.templateDocName = "";
  }
  get ieds() {
    return this.doc ? Array.from(this.doc.querySelectorAll("IED")).filter(ye).sort(wt) : [];
  }
  get templateIeds() {
    return this.templateDoc ? Array.from(this.templateDoc.querySelectorAll("IED")).filter(ye).sort(wt) : [];
  }
  async run() {
    this.dialog.open = !0;
  }
  onClosed() {
    this.templateDoc = void 0, this.selectedProjectIed = void 0, this.selectedTemplateIed = void 0;
  }
  getSelectedListItem(e, i) {
    const n = this.shadowRoot.querySelector(`mwc-list[id='${i}']`).selected?.value;
    if (n)
      return Kr(e, "IED", n) ?? void 0;
  }
  async getTemplateFile(e) {
    const i = e.target?.files?.item(0) ?? !1;
    if (!i) return;
    this.templateDocName = i.name;
    const r = await i.text();
    this.templateDoc = new DOMParser().parseFromString(
      r,
      "application/xml"
    ), this.templateFileUI.onchange = null;
  }
  renderSelectIedButton() {
    return f`<mwc-button
      slot="primaryAction"
      icon="arrow_back"
      trailingIcon
      label="${V("compare-ied.selectIedButton")}"
      @click=${() => {
      this.selectedProjectIed = void 0, this.selectedTemplateIed = void 0;
    }}
    ></mwc-button>`;
  }
  renderCompareButton() {
    return f`<mwc-button
      slot="primaryAction"
      icon="compare_arrows"
      trailingIcon
      label="${V("compare.compareButton")}"
      @click=${() => {
      this.selectedProjectIed = this.getSelectedListItem(
        this.doc,
        "currentDocument"
      ), this.selectedTemplateIed = this.getSelectedListItem(
        this.templateDoc,
        "currentTemplate"
      );
    }}
    ></mwc-button>`;
  }
  renderCloseButton() {
    return f`<mwc-button
      slot="secondaryAction"
      dialogAction="close"
      label="${V("close")}"
      style="--mdc-theme-primary: var(--mdc-theme-error)"
    ></mwc-button>`;
  }
  renderCompare() {
    const e = C(this.selectedProjectIed), i = C(this.selectedTemplateIed);
    return f`<plain-compare-list
        .leftHandObject=${this.selectedProjectIed}
        .rightHandObject=${this.selectedTemplateIed}
        .leftHandTitle=${typeof e == "number" ? "" : e}
        .rightHandTitle=${typeof i == "number" ? "" : i}
        .leftHandSubtitle=${this.docName}
        .rightHandSubtitle=${this.templateDocName}
        .filterToIgnore=${K}
      ></plain-compare-list>
      ${this.renderSelectIedButton()} ${this.renderCloseButton()}`;
  }
  renderIEDList(e, i) {
    return f`<mwc-list id="${i}" activatable>
      ${e.map((r) => {
      const n = Zi(r);
      return f`<mwc-list-item value="${C(r)}" left>
          <span>${n}</span>
        </mwc-list-item>`;
    })}
    </mwc-list>`;
  }
  renderIEDLists() {
    return f`<div class="splitContainer">
        <div>
          <div>${V("compare-ied.projectIedTitle")}</div>
          <div class="iedList">
            ${this.renderIEDList(this.ieds, "currentDocument")}
          </div>
        </div>
        <div>
          <div>${V("compare-ied.templateIedTitle")}</div>
          <div class="iedList">
            ${this.renderIEDList(this.templateIeds, "currentTemplate")}
          </div>
        </div>
      </div>
      ${this.renderCompareButton()} ${this.renderCloseButton()}`;
  }
  renderSelectTemplateFile() {
    return f`<div>
        <input
          id="template-file"
          accept=".sed,.scd,.ssd,.isd,.iid,.cid,.icd"
          type="file"
          hidden
          required
          @change=${(e) => this.dispatchEvent(dn(this.getTemplateFile(e)))}
        />

        <mwc-button
          label="${V("compare-ied.selectTemplateButton")}"
          @click=${() => {
      this.shadowRoot.querySelector("#template-file")?.click();
    }}
        ></mwc-button>
      </div>
      ${this.renderCloseButton()}`;
  }
  renderDialog(e, i) {
    return f`<mwc-dialog heading="${i}" @closed=${this.onClosed}>
      ${e}
    </mwc-dialog>`;
  }
  render() {
    return this.doc ? this.selectedProjectIed && this.selectedTemplateIed ? this.renderDialog(
      this.renderCompare(),
      V("compare-ied.resultTitle")
    ) : this.templateDoc ? this.renderDialog(
      this.renderIEDLists(),
      V("compare-ied.selectIedTitle")
    ) : this.renderDialog(
      this.renderSelectTemplateFile(),
      V("compare-ied.selectProjectTitle")
    ) : f``;
  }
  static {
    this.styles = le`
    mwc-dialog {
      --mdc-dialog-min-width: 64vw;
    }

    .splitContainer {
      display: flex;
      padding: 8px 6px 16px;
      height: 64vh;
    }

    .iedList {
      flex: 50%;
      margin: 0px 6px 0px;
      min-width: 300px;
      height: 100%;
      overflow-y: auto;
    }

    .resultTitle {
      font-weight: bold;
    }
  `;
  }
}
Z([
  u({ attribute: !1 })
], J.prototype, "doc");
Z([
  u({ type: Number })
], J.prototype, "editCount");
Z([
  u({ attribute: !1 })
], J.prototype, "templateDoc");
Z([
  u({ attribute: !1 })
], J.prototype, "selectedProjectIed");
Z([
  u({ attribute: !1 })
], J.prototype, "selectedTemplateIed");
Z([
  z("mwc-dialog")
], J.prototype, "dialog");
Z([
  z("#template-file")
], J.prototype, "templateFileUI");
Z([
  u({ attribute: !1 })
], J.prototype, "docName");
export {
  J as default
};
