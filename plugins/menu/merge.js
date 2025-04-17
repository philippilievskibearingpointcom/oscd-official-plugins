import { LitElement as me, query as G, property as b, state as A, html as x, css as ne, customElement as J, queryAsync as ft, eventOptions as Kt } from "lit-element";
import { NodePart as Zt, AttributePart as Jt, directive as bt } from "lit-html";
import { Select as Qt } from "@material/mwc-select";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
import { TextField as Yt } from "@material/mwc-textfield";
import "@material/mwc-formfield";
import "@material/mwc-icon";
import "@material/mwc-list";
const ei = 1e3 * 60, Be = "langChanged";
function ti(t, e, i) {
  return Object.entries(Ae(e || {})).reduce((r, [n, c]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(Ae(c))), t);
}
function ii(t, e) {
  const i = t.split(".");
  let r = e.strings;
  for (; r != null && i.length > 0; )
    r = r[i.shift()];
  return r != null ? r.toString() : null;
}
function Ae(t) {
  return typeof t == "function" ? t() : t;
}
const ri = () => ({
  loader: () => Promise.resolve({}),
  empty: (t) => `[${t}]`,
  lookup: ii,
  interpolate: ti,
  translationCache: {}
});
let ni = ri();
function ci(t, e) {
  const i = (r) => t(r.detail);
  return window.addEventListener(Be, i, e), () => window.removeEventListener(Be, i);
}
function Z(t, e, i = ni) {
  let r = i.translationCache[t] || (i.translationCache[t] = i.lookup(t, i) || i.empty(t, i));
  return e = e != null ? Ae(e) : null, e != null ? i.interpolate(r, e, i) : r;
}
function gt(t) {
  return t instanceof Zt ? t.startNode.isConnected : t instanceof Jt ? t.committer.element.isConnected : t.element.isConnected;
}
function ai(t) {
  for (const [e] of t)
    gt(e) || t.delete(e);
}
function oi(t) {
  "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t);
}
function si(t, e) {
  setInterval(() => oi(() => ai(t)), e);
}
const Te = /* @__PURE__ */ new Map();
function di() {
  ci((t) => {
    for (const [e, i] of Te)
      gt(e) && yt(e, i, t);
  });
}
di();
si(Te, ei);
function yt(t, e, i) {
  const r = e(i);
  t.value !== r && (t.setValue(r), t.commit());
}
bt((t) => (e) => {
  Te.set(e, t), yt(e, t);
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
const vt = /* @__PURE__ */ new WeakMap(), ue = (t) => (...e) => {
  const i = t(...e);
  return vt.set(i, !0), i;
}, $e = (t) => typeof t == "function" && vt.has(t);
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
const Ve = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, li = (t, e, i = null, r = null) => {
  for (; e !== i; ) {
    const n = e.nextSibling;
    t.insertBefore(e, r), e = n;
  }
}, xt = (t, e, i = null) => {
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
const ie = {}, Oe = {};
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
const ze = `{{lit-${String(Math.random()).slice(2)}}}`, pi = `<!--${ze}-->`, mi = "$lit$", ui = (t) => t.index !== -1, K = () => document.createComment(""), hi = (
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
class qe {
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
    const e = Ve ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), i = [], r = this.template.parts, n = document.createTreeWalker(e, 133, null, !1);
    let c = 0, a = 0, o, d = n.nextNode();
    for (; c < r.length; ) {
      if (o = r[c], !ui(o)) {
        this.__parts.push(void 0), c++;
        continue;
      }
      for (; a < o.index; )
        a++, d.nodeName === "TEMPLATE" && (i.push(d), n.currentNode = d.content), (d = n.nextNode()) === null && (n.currentNode = i.pop(), d = n.nextNode());
      if (o.type === "node") {
        const h = this.processor.handleTextExpression(this.options);
        h.insertAfterNode(d.previousSibling), this.__parts.push(h);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(d, o.name, o.strings, this.options));
      c++;
    }
    return Ve && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const je = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (t) => t }), fi = ` ${ze} `;
class bi {
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
      const o = hi.exec(c);
      o === null ? i += c + (r ? fi : pi) : i += c.substr(0, o.index) + o[1] + o[2] + mi + o[3] + ze;
    }
    return i += this.strings[e], i;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let i = this.getHTML();
    return je !== void 0 && (i = je.createHTML(i)), e.innerHTML = i, e;
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
const kt = (t) => t === null || !(typeof t == "object" || typeof t == "function"), gi = (t) => Array.isArray(t) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(t && t[Symbol.iterator]);
class he {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== ie && (!kt(e) || e !== this.value) && (this.value = e, $e(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; $e(this.value); ) {
      const e = this.value;
      this.value = ie, e(this);
    }
    this.value !== ie && this.committer.commit();
  }
}
class fe {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(K()), this.endNode = e.appendChild(K());
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
    e.__insert(this.startNode = K()), e.__insert(this.endNode = K());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = K()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; $e(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = ie, i(this);
    }
    const e = this.__pendingValue;
    e !== ie && (kt(e) ? e !== this.value && this.__commitText(e) : e instanceof bi ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : gi(e) ? this.__commitIterable(e) : e === Oe ? (this.value = Oe, this.clear()) : this.__commitText(e));
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
    if (this.value instanceof qe && this.value.template === i)
      this.value.update(e.values);
    else {
      const r = new qe(i, e.processor, this.options), n = r._clone();
      r.update(e.values), this.__commitNode(n), this.value = r;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const i = this.value;
    let r = 0, n;
    for (const c of e)
      n = i[r], n === void 0 && (n = new fe(this.options), i.push(n), r === 0 ? n.appendIntoPart(this) : n.insertAfterPart(i[r - 1])), n.setValue(c), n.commit(), r++;
    r < i.length && (i.length = r, this.clear(n && n.endNode));
  }
  clear(e = this.startNode) {
    xt(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class St extends he {
}
let yi = !1;
(() => {
  try {
    const t = {
      get capture() {
        return yi = !0, !1;
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
var Ne = function(t, e) {
  return Ne = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
    i.__proto__ = r;
  } || function(i, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
  }, Ne(t, e);
};
function vi(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Ne(t, e);
  function i() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
}
var re = function() {
  return re = Object.assign || function(e) {
    for (var i, r = 1, n = arguments.length; r < n; r++) {
      i = arguments[r];
      for (var c in i) Object.prototype.hasOwnProperty.call(i, c) && (e[c] = i[c]);
    }
    return e;
  }, re.apply(this, arguments);
};
function m(t, e, i, r) {
  var n = arguments.length, c = n < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, i) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") c = Reflect.decorate(t, e, i, r);
  else for (var o = t.length - 1; o >= 0; o--) (a = t[o]) && (c = (n < 3 ? a(c) : n > 3 ? a(e, i, c) : a(e, i)) || c);
  return n > 3 && c && Object.defineProperty(e, i, c), c;
}
function ae(t) {
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
function xi(t, e) {
  var i = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return i.call(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const _t = () => {
}, ki = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", _t, ki);
document.removeEventListener("x", _t);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ct extends me {
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
var Si = (
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
var _i = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Ci = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Ue = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function wi(t, e, i) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, n = e.y, c = r + i.left, a = n + i.top, o, d;
  if (t.type === "touchstart") {
    var h = t;
    o = h.changedTouches[0].pageX - c, d = h.changedTouches[0].pageY - a;
  } else {
    var s = t;
    o = s.pageX - c, d = s.pageY - a;
  }
  return { x: o, y: d };
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
var We = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Xe = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], oe = [], Ai = (
  /** @class */
  function(t) {
    vi(e, t);
    function e(i) {
      var r = t.call(this, re(re({}, e.defaultAdapter), i)) || this;
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
        return _i;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ci;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ue;
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
          for (var c = ae(We), a = c.next(); !a.done; a = c.next()) {
            var o = a.value;
            this.adapter.registerInteractionHandler(o, this.activateHandler);
          }
        } catch (d) {
          r = { error: d };
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
          for (var c = ae(Xe), a = c.next(); !a.done; a = c.next()) {
            var o = a.value;
            this.adapter.registerDocumentInteractionHandler(o, this.deactivateHandler);
          }
        } catch (d) {
          r = { error: d };
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
        for (var n = ae(We), c = n.next(); !c.done; c = n.next()) {
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
        for (var n = ae(Xe), c = n.next(); !c.done; c = n.next()) {
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
            var o = i !== void 0 && oe.length > 0 && oe.some(function(d) {
              return r.adapter.containsEventTarget(d);
            });
            if (o) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (oe.push(i.target), this.registerDeactivationHandlers(i)), n.wasElementMadeActive = this.checkElementMadeActive(i), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              oe = [], !n.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (n.wasElementMadeActive = r.checkElementMadeActive(i), n.wasElementMadeActive && r.animateActivation()), n.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var i = this, r = e.strings, n = r.VAR_FG_TRANSLATE_START, c = r.VAR_FG_TRANSLATE_END, a = e.cssClasses, o = a.FG_DEACTIVATION, d = a.FG_ACTIVATION, h = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var s = "", f = "";
      if (!this.adapter.isUnbounded()) {
        var g = this.getFgTranslationCoordinates(), y = g.startPoint, u = g.endPoint;
        s = y.x + "px, " + y.y + "px", f = u.x + "px, " + u.y + "px";
      }
      this.adapter.updateCssVariable(n, s), this.adapter.updateCssVariable(c, f), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(o), this.adapter.computeBoundingRect(), this.adapter.addClass(d), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, h);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, r = i.activationEvent, n = i.wasActivatedByPointer, c;
      n ? c = wi(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : c = {
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
      }, Ue.FG_DEACTIVATION_MS));
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
        var n = re({}, r);
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
  }(Si)
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
class $i {
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
const Ke = /* @__PURE__ */ new WeakMap(), be = ue((t) => (e) => {
  if (!(e instanceof he) || e instanceof St || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = e, { element: r } = i;
  let n = Ke.get(e);
  n === void 0 && (r.setAttribute("class", i.strings.join(" ")), Ke.set(e, n = /* @__PURE__ */ new Set()));
  const c = r.classList || new $i(r);
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
const Ze = /* @__PURE__ */ new WeakMap(), Ni = ue((t) => (e) => {
  if (!(e instanceof he) || e instanceof St || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = e, { style: r } = i.element;
  let n = Ze.get(e);
  n === void 0 && (r.cssText = i.strings.join(" "), Ze.set(e, n = /* @__PURE__ */ new Set())), n.forEach((c) => {
    c in t || (n.delete(c), c.indexOf("-") === -1 ? r[c] = null : r.removeProperty(c));
  });
  for (const c in t)
    n.add(c), c.indexOf("-") === -1 ? r[c] = t[c] : r.setProperty(c, t[c]);
});
class I extends Ct {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Ai;
  }
  get isActive() {
    return xi(this.parentElement || this, ":active");
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
    return x`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${be(r)}"
          style="${Ni({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
m([
  G(".mdc-ripple-surface")
], I.prototype, "mdcRoot", void 0);
m([
  b({ type: Boolean })
], I.prototype, "primary", void 0);
m([
  b({ type: Boolean })
], I.prototype, "accent", void 0);
m([
  b({ type: Boolean })
], I.prototype, "unbounded", void 0);
m([
  b({ type: Boolean })
], I.prototype, "disabled", void 0);
m([
  b({ type: Boolean })
], I.prototype, "activated", void 0);
m([
  b({ type: Boolean })
], I.prototype, "selected", void 0);
m([
  b({ type: Boolean })
], I.prototype, "internalUseStateLayerCustomProperties", void 0);
m([
  A()
], I.prototype, "hovering", void 0);
m([
  A()
], I.prototype, "bgFocused", void 0);
m([
  A()
], I.prototype, "fgActivation", void 0);
m([
  A()
], I.prototype, "fgDeactivation", void 0);
m([
  A()
], I.prototype, "fgScale", void 0);
m([
  A()
], I.prototype, "fgSize", void 0);
m([
  A()
], I.prototype, "translateStart", void 0);
m([
  A()
], I.prototype, "translateEnd", void 0);
m([
  A()
], I.prototype, "leftPos", void 0);
m([
  A()
], I.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ii = ne`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let Ie = class extends I {
};
Ie.styles = [Ii];
Ie = m([
  J("mwc-ripple")
], Ie);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ge = (t) => (
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
          const d = this.constructor._observers.get(a);
          d !== void 0 && d.call(this, this[a], c);
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
class wt {
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
class L extends me {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new wt(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const e = this.renderText(), i = this.graphic ? this.renderGraphic() : x``, r = this.hasMeta ? this.renderMeta() : x``;
    return x`
      ${this.renderRipple()}
      ${i}
      ${e}
      ${r}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? x`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? x`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return x`
      <span class="mdc-deprecated-list-item__graphic material-icons ${be(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return x`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return x`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return x`<slot></slot>`;
  }
  renderTwoline() {
    return x`
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
m([
  G("slot")
], L.prototype, "slotElement", void 0);
m([
  ft("mwc-ripple")
], L.prototype, "ripple", void 0);
m([
  b({ type: String })
], L.prototype, "value", void 0);
m([
  b({ type: String, reflect: !0 })
], L.prototype, "group", void 0);
m([
  b({ type: Number, reflect: !0 })
], L.prototype, "tabindex", void 0);
m([
  b({ type: Boolean, reflect: !0 }),
  Ge(function(t) {
    t ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], L.prototype, "disabled", void 0);
m([
  b({ type: Boolean, reflect: !0 })
], L.prototype, "twoline", void 0);
m([
  b({ type: Boolean, reflect: !0 })
], L.prototype, "activated", void 0);
m([
  b({ type: String, reflect: !0 })
], L.prototype, "graphic", void 0);
m([
  b({ type: Boolean })
], L.prototype, "multipleGraphics", void 0);
m([
  b({ type: Boolean })
], L.prototype, "hasMeta", void 0);
m([
  b({ type: Boolean, reflect: !0 }),
  Ge(function(t) {
    t ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], L.prototype, "noninteractive", void 0);
m([
  b({ type: Boolean, reflect: !0 }),
  Ge(function(t) {
    const e = this.getAttribute("role"), i = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (i && t ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(t, "property");
  })
], L.prototype, "selected", void 0);
m([
  A()
], L.prototype, "shouldRenderRipple", void 0);
m([
  A()
], L.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const At = ne`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let De = class extends L {
};
De.styles = [At];
De = m([
  J("mwc-list-item")
], De);
var Di = Object.defineProperty, Ei = Object.getOwnPropertyDescriptor, B = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Ei(e, i) : e, c = t.length - 1, a; c >= 0; c--)
    (a = t[c]) && (n = (r ? a(e, i, n) : a(n)) || n);
  return r && n && Di(e, i, n), n;
};
let z = class extends Yt {
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
    return this.reservedValues && this.reservedValues.some((t) => t === this.value) ? (this.setCustomValidity(Z("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? x`<div style="position:relative;">
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
      </div>` : x``;
  }
  renderMulplierList() {
    return x`${this.multipliers.map(
      (t) => x`<mwc-list-item ?selected=${t === this.multiplier}
          >${t === null ? Z("textfield.noMultiplier") : t}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? x`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : x``;
  }
  render() {
    return x`
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
B([
  b({ type: Boolean })
], z.prototype, "nullable", 2);
B([
  b({ type: Array })
], z.prototype, "multipliers", 2);
B([
  b({ type: String })
], z.prototype, "multiplier", 1);
B([
  b({ type: String })
], z.prototype, "unit", 2);
B([
  A()
], z.prototype, "null", 1);
B([
  b({ type: String })
], z.prototype, "maybeValue", 1);
B([
  b({ type: String })
], z.prototype, "defaultValue", 2);
B([
  b({ type: Array })
], z.prototype, "reservedValues", 2);
B([
  G("mwc-switch")
], z.prototype, "nullSwitch", 2);
B([
  G("mwc-menu")
], z.prototype, "multiplierMenu", 2);
B([
  G("mwc-icon-button")
], z.prototype, "multiplierButton", 2);
z = B([
  J("wizard-textfield")
], z);
var Li = Object.defineProperty, Ri = Object.getOwnPropertyDescriptor, Q = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Ri(e, i) : e, c = t.length - 1, a; c >= 0; c--)
    (a = t[c]) && (n = (r ? a(e, i, n) : a(n)) || n);
  return r && n && Li(e, i, n), n;
};
let U = class extends Qt {
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
    return this.nullable ? x`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : x``;
  }
  render() {
    return x`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
Q([
  b({ type: Boolean })
], U.prototype, "nullable", 2);
Q([
  A()
], U.prototype, "null", 1);
Q([
  b({ type: String })
], U.prototype, "maybeValue", 1);
Q([
  b({ type: String })
], U.prototype, "defaultValue", 2);
Q([
  b({ type: Array })
], U.prototype, "reservedValues", 2);
Q([
  G("mwc-switch")
], U.prototype, "nullSwitch", 2);
U = Q([
  J("wizard-select")
], U);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Pi(t, e, i) {
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
function He(t, e, i) {
  if (e !== void 0)
    return Pi(t, e, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class $t extends Ct {
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
$t.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const Se = /* @__PURE__ */ new WeakMap(), te = ue((t) => (e) => {
  const i = Se.get(e);
  if (t === void 0 && e instanceof he) {
    if (i !== void 0 || !Se.has(e)) {
      const r = e.committer.name;
      e.committer.element.removeAttribute(r);
    }
  } else t !== i && e.setValue(t);
  Se.set(e, t);
});
class E extends $t {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new wt(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
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
    return this.shouldRenderRipple ? x`<mwc-ripple
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
    return x`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${be(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${te(this.name)}"
              aria-checked="${te(r)}"
              aria-label="${te(this.ariaLabel)}"
              aria-labelledby="${te(this.ariaLabelledBy)}"
              aria-describedby="${te(this.ariaDescribedBy)}"
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
m([
  G(".mdc-checkbox")
], E.prototype, "mdcRoot", void 0);
m([
  G("input")
], E.prototype, "formElement", void 0);
m([
  b({ type: Boolean, reflect: !0 })
], E.prototype, "checked", void 0);
m([
  b({ type: Boolean })
], E.prototype, "indeterminate", void 0);
m([
  b({ type: Boolean, reflect: !0 })
], E.prototype, "disabled", void 0);
m([
  b({ type: String, reflect: !0 })
], E.prototype, "name", void 0);
m([
  b({ type: String })
], E.prototype, "value", void 0);
m([
  He,
  b({ type: String, attribute: "aria-label" })
], E.prototype, "ariaLabel", void 0);
m([
  He,
  b({ type: String, attribute: "aria-labelledby" })
], E.prototype, "ariaLabelledBy", void 0);
m([
  He,
  b({ type: String, attribute: "aria-describedby" })
], E.prototype, "ariaDescribedBy", void 0);
m([
  b({ type: Boolean })
], E.prototype, "reducedTouchTarget", void 0);
m([
  A()
], E.prototype, "animationClass", void 0);
m([
  A()
], E.prototype, "shouldRenderRipple", void 0);
m([
  A()
], E.prototype, "focused", void 0);
m([
  A()
], E.prototype, "useStateLayerCustomProperties", void 0);
m([
  ft("mwc-ripple")
], E.prototype, "ripple", void 0);
m([
  Kt({ passive: !0 })
], E.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Fi = ne`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let Ee = class extends E {
};
Ee.styles = [Fi];
Ee = m([
  J("mwc-checkbox")
], Ee);
var Mi = Object.defineProperty, Ti = Object.getOwnPropertyDescriptor, H = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Ti(e, i) : e, c = t.length - 1, a; c >= 0; c--)
    (a = t[c]) && (n = (r ? a(e, i, n) : a(n)) || n);
  return r && n && Mi(e, i, n), n;
};
let T = class extends me {
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
    return this.nullable ? x`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : x``;
  }
  render() {
    return x`
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
H([
  b({ type: String })
], T.prototype, "label", 2);
H([
  b({ type: String })
], T.prototype, "helper", 2);
H([
  b({ type: Boolean })
], T.prototype, "nullable", 2);
H([
  b({ type: Boolean })
], T.prototype, "defaultChecked", 2);
H([
  b({ type: String })
], T.prototype, "maybeValue", 1);
H([
  b({ type: Boolean })
], T.prototype, "disabled", 2);
H([
  A()
], T.prototype, "null", 1);
H([
  A()
], T.prototype, "checked", 1);
H([
  A()
], T.prototype, "deactivateCheckbox", 2);
H([
  A()
], T.prototype, "formfieldLabel", 1);
H([
  G("mwc-switch")
], T.prototype, "nullSwitch", 2);
H([
  G("mwc-checkbox")
], T.prototype, "checkbox", 2);
T = H([
  J("wizard-checkbox")
], T);
function zi(t) {
  return typeof t == "function";
}
function Le(t, e) {
  if (!t)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const i = zi(t) ? t : () => t;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: i, ...e?.detail }
  });
}
function M(t) {
  const e = t.split(">"), i = e.pop() ?? "";
  return [e.join(">"), i];
}
const N = ":not(*)";
function Gi(t) {
  return `${t.getAttribute("version")}	${t.getAttribute("revision")}`;
}
function Hi(t, e) {
  const [i, r] = e.split("	");
  return !i || !r ? N : `${t}[version="${i}"][revision="${r}"]`;
}
function Je(t) {
  return w(t.parentElement) + ">" + t.getAttribute("connectivityNode");
}
function Qe(t, e) {
  const [i, r] = M(e), n = D[t].parents.flatMap(
    (c) => R(c, i).split(",")
  );
  return F(
    n,
    [">"],
    [`${t}[connectivityNode="${r}"]`]
  ).map((c) => c.join("")).join(",");
}
function Bi(t) {
  const [e, i, r, n, c, a] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((o) => t.getAttribute(o));
  return e === "None" ? `${w(t.parentElement)}>(${n} ${a} ${c})` : `${e} ${i || "(Client)"}/${r ?? ""} ${n} ${c ?? ""}`;
}
function Vi(t, e) {
  if (e.endsWith(")")) {
    const [g, y] = M(e), [u, v, _] = y.substring(1, y.length - 1).split(" ");
    if (!u || !v) return N;
    const C = D[t].parents.flatMap(
      (P) => R(P, g).split(",")
    );
    return F(
      C,
      [">"],
      [`${t}[iedName="None"][lnClass="${u}"][lnType="${v}"][lnInst="${_}"]`]
    ).map((P) => P.join("")).join(",");
  }
  const [i, r, n, c, a] = e.split(/[ /]/);
  if (!i || !r || !c) return N;
  const [
    o,
    d,
    h,
    s,
    f
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
    d,
    h,
    s,
    f
  ).map((g) => g.join("")).join(",");
}
function Oi(t) {
  return `${w(t.parentElement)}>${t.getAttribute(
    "iedName"
  )} ${t.getAttribute("apName")}`;
}
function qi(t, e) {
  const [i, r] = M(e), [n, c] = r.split(" ");
  return `${R(
    "IED",
    i
  )}>${t}[iedName="${n}"][apName="${c}"]`;
}
function ji(t) {
  return `${w(t.parentElement)}>${t.getAttribute("associationID") ?? ""}`;
}
function Ui(t, e) {
  const [i, r] = M(e);
  return r ? `${R(
    "Server",
    i
  )}>${t}[associationID="${r}"]` : N;
}
function Wi(t) {
  return `${w(t.closest("IED"))}>>${t.getAttribute("inst")}`;
}
function Xi(t, e) {
  const [i, r] = e.split(">>");
  return r ? `IED[name="${i}"] ${t}[inst="${r}"]` : N;
}
function Ki(t) {
  const e = t.textContent, [i, r, n, c, a] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => t.getAttribute(o));
  return `${w(t.parentElement)}>${e} ${i || ""} ${r || ""}/${n ?? ""} ${c ?? ""} ${a ?? ""}`;
}
function Zi(t, e) {
  const [i, r] = M(e), [n, c, a, o, d, h] = r.split(/[ /]/), [
    s,
    f,
    g,
    y,
    u,
    v
  ] = [
    D[t].parents.flatMap(
      (_) => R(_, i).split(",")
    ),
    [`${n}`],
    c ? [`[apRef="${c}"]`] : [":not([apRef])", '[apRef=""]'],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${d}"]`],
    h ? [`[lnInst="${h}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return F(
    s,
    [">"],
    [t],
    f,
    g,
    y,
    u,
    v
  ).map((_) => _.join("")).join(",");
}
function Ji(t) {
  const [e, i, r, n, c, a, o, d] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((s) => t.getAttribute(s)), h = `${e}/${i ?? ""} ${r} ${n ?? ""}.${c} ${a || ""}`;
  return `${w(t.parentElement)}>${h} (${o}${d ? " [" + d + "]" : ""})`;
}
function Qi(t, e) {
  const [i, r] = M(e), [n, c, a, o] = r.split(/[ /.]/), d = r.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), h = d && d[1] ? d[1] : "", s = d && d[2] ? d[2] : "", f = r.match(/\(([A-Z]{2})/), g = r.match(/ \[([0-9]{1,2})\]/), y = f && f[1] ? f[1] : "", u = g && g[1] ? g[1] : "", [
    v,
    _,
    C,
    P,
    V,
    ye,
    ve,
    xe,
    ke
  ] = [
    D[t].parents.flatMap(
      (Y) => R(Y, i).split(",")
    ),
    [`[ldInst="${n}"]`],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    o ? [`[lnInst="${o}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${h}"]`],
    s ? [`[daName="${s}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${y}"]`],
    u ? [`[ix="${u}"]`] : [":not([ix])", '[ix=""]']
  ];
  return F(
    v,
    [">"],
    [t],
    _,
    C,
    P,
    V,
    ye,
    ve,
    xe,
    ke
  ).map((Y) => Y.join("")).join(",");
}
function Yi(t) {
  if (!t.parentElement) return NaN;
  const e = w(t.parentElement), i = t.getAttribute("iedName"), r = t.getAttribute("intAddr"), n = Array.from(
    t.parentElement.querySelectorAll(`ExtRef[intAddr="${r}"]`)
  ).indexOf(t);
  if (r) return `${e}>${r}[${n}]`;
  const [
    c,
    a,
    o,
    d,
    h,
    s,
    f,
    g,
    y,
    u,
    v,
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
  ].map((V) => t.getAttribute(V)), C = _ ? `${f}:${_} ${g ?? ""}/${y ?? ""} ${u ?? ""} ${v ?? ""}` : "", P = `${i} ${c}/${a ?? ""} ${o} ${d ?? ""} ${h} ${s || ""}`;
  return `${e}>${C ? C + " " : ""}${P}${r ? `@${r}` : ""}`;
}
function er(t, e) {
  const [i, r] = M(e), n = D[t].parents.flatMap(
    (ee) => R(ee, i).split(",")
  );
  if (r.endsWith("]")) {
    const [ee] = r.split("["), Wt = [`[intAddr="${ee}"]`];
    return F(n, [">"], [t], Wt).map((Xt) => Xt.join("")).join(",");
  }
  let c, a, o, d, h, s, f, g, y, u, v, _, C, P;
  !r.includes(":") && !r.includes("@") ? [c, a, o, d, h, s, f] = r.split(/[ /]/) : r.includes(":") && !r.includes("@") ? [
    g,
    y,
    u,
    v,
    _,
    C,
    c,
    a,
    o,
    d,
    h,
    s,
    f
  ] = r.split(/[ /:]/) : !r.includes(":") && r.includes("@") ? [c, a, o, d, h, s, f, P] = r.split(/[ /@]/) : [
    g,
    y,
    u,
    v,
    _,
    C,
    c,
    a,
    o,
    d,
    h,
    s,
    f,
    P
  ] = r.split(/[ /:@]/);
  const [
    V,
    ye,
    ve,
    xe,
    ke,
    Y,
    Gt,
    Ht,
    Bt,
    Vt,
    Ot,
    qt,
    jt,
    Ut
  ] = [
    c ? [`[iedName="${c}"]`] : [":not([iedName])"],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    d ? [`[lnClass="${d}"]`] : [":not([lnClass])"],
    h ? [`[lnInst="${h}"]`] : [":not([lnInst])", '[lnInst=""]'],
    s ? [`[doName="${s}"]`] : [":not([doName])"],
    f ? [`[daName="${f}"]`] : [":not([daName])", '[daName=""]'],
    g ? [`[serviceType="${g}"]`] : [":not([serviceType])", '[serviceType=""]'],
    y ? [`[srcCBName="${y}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    u ? [`[srcLDInst="${u}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    v ? [`[srcPrefix="${v}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    _ ? [`[srcLNClass="${_}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    C ? [`[srcLNInst="${C}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    P ? [`[intAddr="${P}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return F(
    n,
    [">"],
    [t],
    V,
    ye,
    ve,
    xe,
    ke,
    Y,
    Gt,
    Ht,
    Bt,
    Vt,
    Ot,
    qt,
    jt,
    Ut
  ).map((ee) => ee.join("")).join(",");
}
function tr(t) {
  const [e, i, r] = ["prefix", "lnClass", "inst"].map(
    (n) => t.getAttribute(n)
  );
  return `${w(t.parentElement)}>${e ?? ""} ${i} ${r}`;
}
function ir(t, e) {
  const [i, r] = M(e), n = D[t].parents.flatMap(
    (f) => R(f, i).split(",")
  ), [c, a, o] = r.split(" ");
  if (!a) return N;
  const [d, h, s] = [
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    [`[inst="${o}"]`]
  ];
  return F(
    n,
    [">"],
    [t],
    d,
    h,
    s
  ).map((f) => f.join("")).join(",");
}
function rr(t) {
  const [e, i, r, n, c, a] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => t.getAttribute(o));
  return `${w(t.parentElement)}>${i} ${e || ""} ${r}/${n ?? ""} ${c} ${a}`;
}
function nr(t, e) {
  const [i, r] = M(e), n = D[t].parents.flatMap(
    (C) => R(C, i).split(",")
  ), [c, a, o, d, h, s] = r.split(/[ /]/), [
    f,
    g,
    y,
    u,
    v,
    _
  ] = [
    c ? [`[iedName="${c}"]`] : [":not([iedName])", '[iedName=""]'],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    d ? [`[prefix="${d}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${h}"]`],
    s ? [`[lnInst="${s}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return F(
    n,
    [">"],
    [t],
    f,
    g,
    y,
    u,
    v,
    _
  ).map((C) => C.join("")).join(",");
}
function Ye(t) {
  const [e, i] = ["name", "ix"].map((r) => t.getAttribute(r));
  return `${w(t.parentElement)}>${e}${i ? "[" + i + "]" : ""}`;
}
function Re(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [r, n] = M(e), [c, a, o, d] = n.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!a) return N;
  if (i === 0) return `${t}[name="${a}"]`;
  const h = D[t].parents.flatMap(
    (g) => g === "SDI" ? Re(g, r, i - 1).split(",") : R(g, r).split(",")
  ).filter((g) => !g.startsWith(N));
  if (h.length === 0) return N;
  const [s, f] = [
    [`[name="${a}"]`],
    d ? [`[ix="${d}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return F(
    h,
    [">"],
    [t],
    s,
    f
  ).map((g) => g.join("")).join(",");
}
function cr(t) {
  if (!t.parentElement) return NaN;
  const e = t.getAttribute("sGroup"), i = Array.from(t.parentElement.children).filter((r) => r.getAttribute("sGroup") === e).findIndex((r) => r.isSameNode(t));
  return `${w(t.parentElement)}>${e ? e + "." : ""} ${i}`;
}
function ar(t, e) {
  const [i, r] = M(e), [n, c] = r.split(" "), a = parseFloat(c), o = D[t].parents.flatMap(
    (s) => R(s, i).split(",")
  ), [d, h] = [
    n ? [`[sGroup="${n}"]`] : [""],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return F(
    o,
    [">"],
    [t],
    d,
    h
  ).map((s) => s.join("")).join(",");
}
function or(t) {
  const [e, i] = ["iedName", "apName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function sr(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? N : `${t}[iedName="${i}"][apName="${r}"]`;
}
function et(t) {
  const [e, i] = ["ldInst", "cbName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function tt(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? N : `${t}[ldInst="${i}"][cbName="${r}"]`;
}
function dr(t) {
  if (!t.parentElement) return NaN;
  if (!t.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = t.getAttribute("type");
  return t.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${w(t.parentElement)}>${e}`;
}
function lr(t, e) {
  const [i, r] = M(e), [n, c] = [
    D[t].parents.flatMap(
      (a) => R(a, i).split(",")
    ),
    r ? [`[type="${r}"]`] : [""]
  ];
  return F(n, [">"], [t], c).map((a) => a.join("")).join(",");
}
function pr(t) {
  if (!t.parentElement) return NaN;
  const e = t.parentElement, i = t.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${w(t.parentElement)}>${i}`;
  const r = Array.from(t.parentElement.children).filter((n) => n.getAttribute("type") === i).findIndex((n) => n.isSameNode(t));
  return `${w(t.parentElement)}>${i} [${r}]`;
}
function mr(t, e) {
  const [i, r] = M(e), [n] = r.split(" "), c = r && r.match(/\[([0-9]+)\]/) && r.match(/\[([0-9]+)\]/)[1] ? parseFloat(r.match(/\[([0-9]+)\]/)[1]) : NaN, [a, o, d] = [
    D[t].parents.flatMap(
      (h) => R(h, i).split(",")
    ),
    [`[type="${n}"]`],
    c ? [`:nth-child(${c + 1})`] : [""]
  ];
  return F(
    a,
    [">"],
    [t],
    o,
    d
  ).map((h) => h.join("")).join(",");
}
function ur(t) {
  return `${w(t.parentElement)}>${t.getAttribute("ord")}`;
}
function hr(t, e) {
  const [i, r] = M(e);
  return `${R("EnumType", i)}>${t}[ord="${r}"]`;
}
function fr(t) {
  return `${w(t.parentElement)}>${t.getAttribute("type") || "8-MMS"}	${t.textContent}`;
}
function br(t, e) {
  const [i, r] = M(e), [n, c] = r.split("	"), [a] = [
    D[t].parents.flatMap(
      (o) => R(o, i).split(",")
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
function gr() {
  return "";
}
function yr() {
  return ":root";
}
function S(t) {
  return t.parentElement.tagName === "SCL" ? t.getAttribute("name") : `${w(t.parentElement)}>${t.getAttribute("name")}`;
}
function k(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [r, n] = M(e);
  if (!n) return N;
  if (i === 0) return `${t}[name="${n}"]`;
  const c = D[t].parents;
  if (!c) return N;
  const a = c.flatMap(
    (o) => D[o].selector === D.Substation.selector ? k(o, r, i - 1).split(",") : R(o, r).split(",")
  ).filter((o) => !o.startsWith(N));
  return a.length === 0 ? N : F(a, [">"], [t], [`[name="${n}"]`]).map((o) => o.join("")).join(",");
}
function l(t) {
  return w(t.parentElement).toString();
}
function p(t, e) {
  const i = D[t].parents;
  if (!i) return N;
  const r = i.flatMap((n) => R(n, e).split(",")).filter((n) => !n.startsWith(N));
  return r.length === 0 ? N : F(r, [">"], [t]).map((n) => n.join("")).join(",");
}
function se(t) {
  return `#${t.id}`;
}
function de(t, e) {
  const i = e.replace(/^#/, "");
  return i ? `${t}[id="${i}"]` : N;
}
const Nt = [
  "TransformerWinding",
  "ConductingEquipment"
], It = [
  "GeneralEquipment",
  "PowerTransformer",
  ...Nt
], Pe = ["Substation", "VoltageLevel", "Bay"], Dt = ["Process", "Line"], Et = ["EqSubFunction", "EqFunction"], vr = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...It,
  ...Pe,
  ...Dt,
  ...Et
], Lt = ["ConnectivityNode", ...vr], xr = ["GOOSESecurity", "SMVSecurity"], kr = ["SubNetwork", ...xr, ...Lt], Sr = ["BDA", "DA"], _r = ["SampledValueControl", "GSEControl"], Cr = ["LogControl", "ReportControl"], wr = [..._r, ...Cr], Ar = ["GSE", "SMV"], $r = [
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
  ...wr,
  ...Ar,
  ...Sr
], X = ["LN0", "LN"], Nr = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Ir = ["Subject", "IssuerName"], Dr = ["MinTime", "MaxTime"], Er = ["LNodeType", "DOType", "DAType", "EnumType"], Lr = [
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
], Rr = ["DynDataSet", "ConfDataSet"], Pr = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...Rr
], Fr = ["ConfLogControl", "ConfSigRef"], Mr = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], Tr = ["SCL", ...kr, ...$r, ...Er], Rt = [
  ...Tr,
  ...Nr,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Ir,
  ...Dr,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...X,
  ...Lr,
  "DynAssociation",
  "SettingGroups",
  ...Pr,
  ...Fr,
  ...Mr,
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
], zr = new Set(Rt);
function Pt(t) {
  return zr.has(t);
}
const ge = ["Text", "Private"], O = [...ge], $ = [...ge], le = [...ge], it = [...$, "Val"], Ft = [...O, "LNode"], j = [...Ft], Fe = [...j], _e = [
  ...j,
  "PowerTransformer",
  "GeneralEquipment"
], rt = [
  ...Fe,
  "Terminal"
], nt = [...$, "Address"], Mt = [...O], ct = [...Mt, "IEDName"], at = [
  ...$,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], ot = [
  ...j,
  "GeneralEquipment",
  "Function"
], st = [...Mt, "TrgOps"], dt = [
  ...j,
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
      ...O,
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
    identity: ji,
    selector: Ui,
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
    children: [...it]
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
      ..._e,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: rr,
    selector: nr,
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
    children: [...$, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: S,
    selector: k,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...rt,
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
    identity: or,
    selector: sr,
    parents: ["SubNetwork"],
    children: [...$, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: S,
    selector: k,
    parents: ["Bay", "Line"],
    children: [...Ft]
  },
  DA: {
    identity: S,
    selector: k,
    parents: ["DOType"],
    children: [...it]
  },
  DAI: {
    identity: Ye,
    selector: Re,
    parents: ["DOI", "SDI"],
    children: [...$, "Val"]
  },
  DAType: {
    identity: se,
    selector: de,
    parents: ["DataTypeTemplates"],
    children: [...le, "BDA", "ProtNs"]
  },
  DO: {
    identity: S,
    selector: k,
    parents: ["LNodeType"],
    children: [...$]
  },
  DOI: {
    identity: S,
    selector: k,
    parents: [...X],
    children: [...$, "SDI", "DAI"]
  },
  DOType: {
    identity: se,
    selector: de,
    parents: ["DataTypeTemplates"],
    children: [...le, "SDO", "DA"]
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
    parents: [...X],
    children: [...O, "FCDA"]
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
    identity: se,
    selector: de,
    parents: ["DataTypeTemplates"],
    children: [...le, "EnumVal"]
  },
  EnumVal: {
    identity: ur,
    selector: hr,
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
    children: [...dt]
  },
  EqSubFunction: {
    identity: S,
    selector: k,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...dt]
  },
  ExtRef: {
    identity: Yi,
    selector: er,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: Ji,
    selector: Qi,
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
      ...j,
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
      ...Dt,
      ...Et,
      ...Pe
    ],
    children: [...Fe, "EqFunction"]
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
    children: [...O, "Subject", "IssuerName"]
  },
  GSE: {
    identity: et,
    selector: tt,
    parents: ["ConnectedAP"],
    children: [...nt, "MinTime", "MaxTime"]
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
    children: [...ct, "Protocol"]
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
    identity: Gi,
    selector: Hi,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: S,
    selector: k,
    parents: ["SCL"],
    children: [...$, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: Ki,
    selector: Zi,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: l,
    selector: p,
    parents: [...X],
    children: [...$, "ExtRef"]
  },
  IssuerName: {
    identity: l,
    selector: p,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: Oi,
    selector: qi,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: Wi,
    selector: Xi,
    parents: ["Server"],
    children: [...$, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: tr,
    selector: ir,
    parents: ["AccessPoint", "LDevice"],
    children: [...at]
  },
  LN0: {
    identity: l,
    selector: p,
    parents: ["LDevice"],
    children: [
      ...at,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: Bi,
    selector: Vi,
    parents: [...Lt],
    children: [...$]
  },
  LNodeType: {
    identity: se,
    selector: de,
    parents: ["DataTypeTemplates"],
    children: [...le, "DO"]
  },
  Line: {
    identity: S,
    selector: k,
    parents: ["Process", "SCL"],
    children: [
      ...ot,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: S,
    selector: k,
    parents: [...X],
    children: [...$]
  },
  LogControl: {
    identity: S,
    selector: k,
    parents: [...X],
    children: [...st]
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
    identity: Je,
    selector: Qe,
    parents: ["TransformerWinding"],
    children: [...$]
  },
  OptFields: {
    identity: l,
    selector: p,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: pr,
    selector: mr,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: dr,
    selector: lr,
    parents: ["ConnectedAP"],
    children: [...$, "P"]
  },
  PowerTransformer: {
    identity: S,
    selector: k,
    parents: [...Pe],
    children: [
      ...Fe,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => N,
    parents: [],
    children: []
  },
  Process: {
    identity: S,
    selector: k,
    parents: ["Process", "SCL"],
    children: [
      ...ot,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: fr,
    selector: br,
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
    parents: [...X],
    children: [...st, "OptFields", "RptEnabled"]
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
    children: [...$, "ClientLN"]
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
    children: [...ct, "SmvOpts"]
  },
  SecPerSamples: {
    identity: l,
    selector: p,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: gr,
    selector: yr,
    parents: [],
    children: [
      ...ge,
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
    identity: Ye,
    selector: Re,
    parents: ["DOI", "SDI"],
    children: [...$, "SDI", "DAI"]
  },
  SDO: {
    identity: S,
    selector: k,
    parents: ["DOType"],
    children: [...O]
  },
  Server: {
    identity: l,
    selector: p,
    parents: ["AccessPoint"],
    children: [
      ...$,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: l,
    selector: p,
    parents: ["AccessPoint"],
    children: [...$]
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
    children: [...$]
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
    identity: et,
    selector: tt,
    parents: ["ConnectedAP"],
    children: [...nt]
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
    children: [...O, "Subject", "IssuerName"]
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
      ...Nt
    ],
    children: [...j, "EqFunction"]
  },
  SubFunction: {
    identity: S,
    selector: k,
    parents: ["SubFunction", "Function"],
    children: [
      ...j,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: S,
    selector: k,
    parents: ["Communication"],
    children: [...O, "BitRate", "ConnectedAP"]
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
    children: [..._e, "VoltageLevel", "Function"]
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
    children: [...j, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: Je,
    selector: Qe,
    parents: [...It],
    children: [...$]
  },
  Text: {
    identity: l,
    selector: p,
    parents: Rt.filter((t) => t !== "Text" && t !== "Private"),
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
      ...rt,
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
    identity: cr,
    selector: ar,
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
    children: [..._e, "Voltage", "Bay", "Function"]
  }
};
function R(t, e) {
  return typeof e != "string" ? N : Pt(t) ? D[t].selector(t, e) : t;
}
function w(t) {
  if (t === null) return NaN;
  if (t.closest("Private")) return NaN;
  const e = t.tagName;
  return Pt(e) ? D[e].identity(t) : NaN;
}
function Tt(t, e) {
  return t.tagName === "Private" ? Tt(t.parentElement, e.parentElement) && t.isEqualNode(e) : t.tagName === e.tagName && w(t) === w(e);
}
function pe(t, e) {
  if (t.closest("Private") || e.closest("Private")) return t.isEqualNode(e);
  const i = new Set(
    t.getAttributeNames().concat(e.getAttributeNames())
  );
  for (const c of i)
    if (t.getAttribute(c) !== e.getAttribute(c)) return !1;
  if (t.childElementCount === 0)
    return e.childElementCount === 0 && t.textContent?.trim() === e.textContent?.trim();
  const r = Array.from(t.children), n = Array.from(e.children);
  for (const c of r) {
    const a = n.findIndex((o) => pe(c, o));
    if (a === -1) return !1;
    n.splice(a, 1);
  }
  for (const c of n)
    if (!r.find((a) => pe(c, a))) return !1;
  return !0;
}
bt((t) => (e) => {
  Object.keys(t).length ? e.setValue(t) : e.setValue("");
});
function F(...t) {
  return t.reduce(
    (e, i) => e.flatMap((r) => i.map((n) => [r, n].flat())),
    [[]]
  );
}
const Gr = 99;
Array(Gr).fill(1).map((t, e) => `${e + 1}`);
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
const lt = (t, e) => {
  const i = t.startNode.parentNode, r = e === void 0 ? t.endNode : e.startNode, n = i.insertBefore(K(), r);
  i.insertBefore(K(), r);
  const c = new fe(t.options);
  return c.insertAfterNode(n), c;
}, W = (t, e) => (t.setValue(e), t.commit(), t), Ce = (t, e, i) => {
  const r = t.startNode.parentNode, n = i ? i.startNode : t.endNode, c = e.endNode.nextSibling;
  c !== n && li(r, e.startNode, c, n);
}, we = (t) => {
  xt(t.startNode.parentNode, t.startNode, t.endNode.nextSibling);
}, pt = (t, e, i) => {
  const r = /* @__PURE__ */ new Map();
  for (let n = e; n <= i; n++)
    r.set(t[n], n);
  return r;
}, mt = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ new WeakMap(), ht = ue((t, e, i) => {
  let r;
  return i === void 0 ? i = e : e !== void 0 && (r = e), (n) => {
    if (!(n instanceof fe))
      throw new Error("repeat can only be used in text bindings");
    const c = mt.get(n) || [], a = ut.get(n) || [], o = [], d = [], h = [];
    let s = 0;
    for (const C of t)
      h[s] = r ? r(C, s) : s, d[s] = i(C, s), s++;
    let f, g, y = 0, u = c.length - 1, v = 0, _ = d.length - 1;
    for (; y <= u && v <= _; )
      if (c[y] === null)
        y++;
      else if (c[u] === null)
        u--;
      else if (a[y] === h[v])
        o[v] = W(c[y], d[v]), y++, v++;
      else if (a[u] === h[_])
        o[_] = W(c[u], d[_]), u--, _--;
      else if (a[y] === h[_])
        o[_] = W(c[y], d[_]), Ce(n, c[y], o[_ + 1]), y++, _--;
      else if (a[u] === h[v])
        o[v] = W(c[u], d[v]), Ce(n, c[u], c[y]), u--, v++;
      else if (f === void 0 && (f = pt(h, v, _), g = pt(a, y, u)), !f.has(a[y]))
        we(c[y]), y++;
      else if (!f.has(a[u]))
        we(c[u]), u--;
      else {
        const C = g.get(h[v]), P = C !== void 0 ? c[C] : null;
        if (P === null) {
          const V = lt(n, c[y]);
          W(V, d[v]), o[v] = V;
        } else
          o[v] = W(P, d[v]), Ce(n, P, c[y]), c[C] = null;
        v++;
      }
    for (; v <= _; ) {
      const C = lt(n, o[_ + 1]);
      W(C, d[v]), o[v++] = C;
    }
    for (; y <= u; ) {
      const C = c[y++];
      C !== null && we(C);
    }
    mt.set(n, o), ut.set(n, h);
  };
});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ce extends L {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : x``, n = this.hasMeta && this.left ? this.renderMeta() : x``, c = this.renderRipple();
    return x`
      ${c}
      ${r}
      ${this.left ? "" : i}
      <span class=${be(e)}>
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
m([
  G("slot")
], ce.prototype, "slotElement", void 0);
m([
  G("mwc-checkbox")
], ce.prototype, "checkboxElement", void 0);
m([
  b({ type: Boolean })
], ce.prototype, "left", void 0);
m([
  b({ type: String, reflect: !0 })
], ce.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Hr = ne`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Me = class extends ce {
};
Me.styles = [At, Hr];
Me = m([
  J("mwc-check-list-item")
], Me);
function q(t) {
  const e = w(t);
  return typeof e == "string" ? e.replace(/^>/, "") : Z("unidentifiable");
}
function Br(t, e, i, r, n) {
  return (c, a) => {
    const o = [], d = a.shadowRoot.querySelector("mwc-list"), h = d.selected.filter((u) => u.classList.contains("attr")).map((u) => t[u.value]), s = i.cloneNode(!1), f = h.length ? s : i;
    if (h.length) {
      i.childElementCount === 0 && (s.textContent = i.textContent);
      for (const [u, v] of h)
        u === "value" ? s.textContent = v.theirs : v.theirs === null ? s.removeAttribute(u) : s.setAttribute(u, v.theirs);
      o.push({ old: { element: i }, new: { element: s } });
    }
    let g = !1;
    const y = d.selected.filter((u) => u.classList.contains("child")).map((u) => e[u.value]);
    if (y.length)
      for (const u of y)
        u.ours ? u.theirs ? (g = !0, a.dispatchEvent(
          Le(
            zt(u.ours, u.theirs, {
              ...n,
              title: void 0
            })
          )
        )) : o.push({
          old: {
            parent: f,
            element: u.ours,
            reference: u.ours.nextSibling
          }
        }) : o.push({
          new: { parent: f, element: u.theirs }
        });
    return o.length === 0 && !g && a.dispatchEvent(Le()), [
      {
        actions: o,
        title: Z("merge.log", {
          sink: q(i),
          source: q(r),
          tag: i.tagName
        })
      }
    ];
  };
}
function zt(t, e, i) {
  const r = [], n = t.textContent ?? "", c = e.textContent ?? "";
  t.childElementCount === 0 && e.childElementCount === 0 && c !== n && r.push(["value", { ours: n, theirs: c }]);
  const a = new Set(
    e.getAttributeNames().concat(t.getAttributeNames())
  );
  for (const s of a)
    e.getAttribute(s) !== t.getAttribute(s) && r.push([
      s,
      {
        theirs: e.getAttribute(s),
        ours: t.getAttribute(s)
      }
    ]);
  const o = [], d = Array.from(t.children);
  return Array.from(e.children).forEach((s) => {
    const f = d.findIndex(
      (y) => Tt(s, y)
    ), g = f > -1 ? d[f] : null;
    g && d.splice(f, 1), !(g && pe(s, g)) && (!g || !pe(s, g)) && o.push({ theirs: s, ours: g });
  }), d.forEach((s) => o.push({ theirs: null, ours: s })), [
    {
      title: i?.title ?? Z("merge.defaultTitle", {
        sink: q(t),
        source: q(e),
        tag: t.tagName
      }),
      primary: {
        label: Z("merge.title"),
        icon: "merge_type",
        action: Br(r, o, t, e, i),
        auto: i?.auto?.(t, e) ?? !1
      },
      content: [
        x`
          <mwc-list multi>
            ${ht(
          r,
          (s) => s,
          ([s, f], g) => x`<mwc-check-list-item
                  value=${g}
                  class="attr"
                  twoline
                  left
                  hasMeta
                  .selected=${i?.selected?.(f) ?? !1}
                  .disabled=${i?.disabled?.(f) ?? !1}
                  style="--mdc-checkbox-checked-color: var(--mdc-theme-${f.ours ? f.theirs ? "secondary" : "error" : "primary"});"
                >
                  <span>${s}</span>
                  <span slot="secondary"
                    >${f.ours ?? ""}
                    ${f.ours && f.theirs ? x`&cularr;` : " "}
                    ${f.theirs ?? ""}</span
                  >
                  <mwc-icon slot="meta"
                    >${f.ours ? f.theirs ? "edit" : "delete" : "add"}</mwc-icon
                  >
                </mwc-check-list-item>`
        )}
            ${o.length ? x`<mwc-list-item noninteractive
                    >${Z("merge.children")}</mwc-list-item
                  >
                  <li padded divider role="separator"></li>` : ""}
            ${ht(
          o,
          (s) => s,
          (s, f) => x`<mwc-check-list-item
                  value=${f}
                  class="child"
                  twoline
                  left
                  hasMeta
                  .selected=${i?.selected?.(s) ?? !1}
                  .disabled=${i?.disabled?.(s) ?? !1}
                  style="--mdc-checkbox-checked-color: var(--mdc-theme-${s.ours ? s.theirs ? "secondary" : "error" : "primary"});"
                >
                  <span>${s.ours?.tagName ?? s.theirs?.tagName}</span>
                  <span slot="secondary"
                    >${s.ours ? q(s.ours) : ""}
                    ${s.ours && s.theirs && q(s.ours) + q(s.theirs) ? x`&cularr;` : " "}
                    ${s.theirs ? q(s.theirs) : ""}</span
                  >
                  <mwc-icon slot="meta"
                    >${s.ours ? s.theirs ? "merge_type" : "delete" : "add"}</mwc-icon
                  >
                </mwc-check-list-item>`
        )}
          </mwc-list>
        `
      ]
    }
  ];
}
var Vr = Object.defineProperty, Or = (t, e, i, r) => {
  for (var n = void 0, c = t.length - 1, a; c >= 0; c--)
    (a = t[c]) && (n = a(e, i, n) || n);
  return n && Vr(e, i, n), n;
};
class qr extends me {
  mergeDoc(e) {
    const i = e.target?.files?.item(0) ?? !1;
    i && i.text().then((r) => {
      const n = new DOMParser().parseFromString(r, "application/xml");
      this.dispatchEvent(
        Le(
          zt(this.doc.documentElement, n.documentElement)
        )
      );
    }), this.pluginFileUI.onchange = null;
  }
  async run() {
    this.pluginFileUI.click();
  }
  render() {
    return x`<input @click=${(e) => e.target.value = ""} @change=${this.mergeDoc} id="merge-plugin-input" accept=".sed,.scd,.ssd,.isd,.iid,.cid,.icd" type="file"></input>`;
  }
  static {
    this.styles = ne`
    input {
      width: 0;
      height: 0;
      opacity: 0;
    }
  `;
  }
}
Or([
  G("#merge-plugin-input")
], qr.prototype, "pluginFileUI");
export {
  qr as default
};
