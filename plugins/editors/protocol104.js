import { LitElement as be, query as T, property as p, state as C, html as c, css as q, customElement as z, queryAsync as Yt, eventOptions as an, queryAssignedNodes as on, unsafeCSS as er } from "lit-element";
import { NodePart as tr, AttributePart as ir, directive as sn, nothing as me } from "lit-html";
import "@material/mwc-fab";
import "@material/mwc-formfield";
import "@material/mwc-icon-button";
import "@material/mwc-icon";
import { Select as nr } from "@material/mwc-select";
import "@material/mwc-menu";
import "@material/mwc-switch";
import { TextField as rr } from "@material/mwc-textfield";
import { List as ar } from "@material/mwc-list";
import "@material/mwc-icon-button-toggle";
import "@material/mwc-textarea";
const or = 1e3 * 60, Ot = "langChanged";
function sr(t, e, i) {
  return Object.entries(Vt(e || {})).reduce((n, [r, a]) => n.replace(new RegExp(`{{[  ]*${r}[  ]*}}`, "gm"), String(Vt(a))), t);
}
function cr(t, e) {
  const i = t.split(".");
  let n = e.strings;
  for (; n != null && i.length > 0; )
    n = n[i.shift()];
  return n != null ? n.toString() : null;
}
function Vt(t) {
  return typeof t == "function" ? t() : t;
}
const dr = () => ({
  loader: () => Promise.resolve({}),
  empty: (t) => `[${t}]`,
  lookup: cr,
  interpolate: sr,
  translationCache: {}
});
let Xe = dr();
function lr(t) {
  return Xe = Object.assign(Object.assign({}, Xe), t);
}
function ur(t) {
  window.dispatchEvent(new CustomEvent(Ot, { detail: t }));
}
function pr(t, e, i = Xe) {
  ur({
    previousStrings: i.strings,
    previousLang: i.lang,
    lang: i.lang = t,
    strings: i.strings = e
  });
}
function mr(t, e) {
  const i = (n) => t(n.detail);
  return window.addEventListener(Ot, i, e), () => window.removeEventListener(Ot, i);
}
async function hr(t, e = Xe) {
  const i = await e.loader(t, e);
  e.translationCache = {}, pr(t, i, e);
}
function l(t, e, i = Xe) {
  let n = i.translationCache[t] || (i.translationCache[t] = i.lookup(t, i) || i.empty(t, i));
  return e = e != null ? Vt(e) : null, e != null ? i.interpolate(n, e, i) : n;
}
function cn(t) {
  return t instanceof tr ? t.startNode.isConnected : t instanceof ir ? t.committer.element.isConnected : t.element.isConnected;
}
function fr(t) {
  for (const [e] of t)
    cn(e) || t.delete(e);
}
function br(t) {
  "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t);
}
function gr(t, e) {
  setInterval(() => br(() => fr(t)), e);
}
const ei = /* @__PURE__ */ new Map();
function yr() {
  mr((t) => {
    for (const [e, i] of ei)
      cn(e) && dn(e, i, t);
  });
}
yr();
gr(ei, or);
function dn(t, e, i) {
  const n = e(i);
  t.value !== n && (t.setValue(n), t.commit());
}
sn((t) => (e) => {
  ei.set(e, t), dn(e, t);
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
const ln = /* @__PURE__ */ new WeakMap(), Qe = (t) => (...e) => {
  const i = t(...e);
  return ln.set(i, !0), i;
}, Ze = (t) => typeof t == "function" && ln.has(t);
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
const xi = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, vr = (t, e, i = null) => {
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
const oe = {}, Si = {};
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
const ti = `{{lit-${String(Math.random()).slice(2)}}}`, xr = `<!--${ti}-->`, Sr = "$lit$", wr = (t) => t.index !== -1, qe = () => document.createComment(""), kr = (
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
class wi {
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
    const e = xi ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), i = [], n = this.template.parts, r = document.createTreeWalker(e, 133, null, !1);
    let a = 0, o = 0, s, d = r.nextNode();
    for (; a < n.length; ) {
      if (s = n[a], !wr(s)) {
        this.__parts.push(void 0), a++;
        continue;
      }
      for (; o < s.index; )
        o++, d.nodeName === "TEMPLATE" && (i.push(d), r.currentNode = d.content), (d = r.nextNode()) === null && (r.currentNode = i.pop(), d = r.nextNode());
      if (s.type === "node") {
        const u = this.processor.handleTextExpression(this.options);
        u.insertAfterNode(d.previousSibling), this.__parts.push(u);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(d, s.name, s.strings, this.options));
      a++;
    }
    return xi && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const ki = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (t) => t }), Ar = ` ${ti} `;
class _r {
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
      const s = kr.exec(a);
      s === null ? i += a + (n ? Ar : xr) : i += a.substr(0, s.index) + s[1] + s[2] + Sr + s[3] + ti;
    }
    return i += this.strings[e], i;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let i = this.getHTML();
    return ki !== void 0 && (i = ki.createHTML(i)), e.innerHTML = i, e;
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
const ii = (t) => t === null || !(typeof t == "object" || typeof t == "function"), Er = (t) => Array.isArray(t) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(t && t[Symbol.iterator]);
class Je {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== oe && (!ii(e) || e !== this.value) && (this.value = e, Ze(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; Ze(this.value); ) {
      const e = this.value;
      this.value = oe, e(this);
    }
    this.value !== oe && this.committer.commit();
  }
}
class ni {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(qe()), this.endNode = e.appendChild(qe());
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
    e.__insert(this.startNode = qe()), e.__insert(this.endNode = qe());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = qe()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; Ze(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = oe, i(this);
    }
    const e = this.__pendingValue;
    e !== oe && (ii(e) ? e !== this.value && this.__commitText(e) : e instanceof _r ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : Er(e) ? this.__commitIterable(e) : e === Si ? (this.value = Si, this.clear()) : this.__commitText(e));
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
    if (this.value instanceof wi && this.value.template === i)
      this.value.update(e.values);
    else {
      const n = new wi(i, e.processor, this.options), r = n._clone();
      n.update(e.values), this.__commitNode(r), this.value = n;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const i = this.value;
    let n = 0, r;
    for (const a of e)
      r = i[n], r === void 0 && (r = new ni(this.options), i.push(r), n === 0 ? r.appendIntoPart(this) : r.insertAfterPart(i[n - 1])), r.setValue(a), r.commit(), n++;
    n < i.length && (i.length = n, this.clear(r && r.endNode));
  }
  clear(e = this.startNode) {
    vr(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class Cr {
  constructor(e, i, n) {
    if (this.value = void 0, this.__pendingValue = void 0, n.length !== 2 || n[0] !== "" || n[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = i, this.strings = n;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; Ze(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = oe, i(this);
    }
    if (this.__pendingValue === oe)
      return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = oe;
  }
}
class ri extends Je {
}
let un = !1;
(() => {
  try {
    const t = {
      get capture() {
        return un = !0, !1;
      }
    };
    window.addEventListener("test", t, t), window.removeEventListener("test", t, t);
  } catch {
  }
})();
class Nr {
  constructor(e, i, n) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = i, this.eventContext = n, this.__boundHandleEvent = (r) => this.handleEvent(r);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; Ze(this.__pendingValue); ) {
      const a = this.__pendingValue;
      this.__pendingValue = oe, a(this);
    }
    if (this.__pendingValue === oe)
      return;
    const e = this.__pendingValue, i = this.value, n = e == null || i != null && (e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive), r = e != null && (i == null || n);
    n && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), r && (this.__options = Ir(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = oe;
  }
  handleEvent(e) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
}
const Ir = (t) => t && (un ? { capture: t.capture, passive: t.passive, once: t.once } : t.capture);
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
var Mt = function(t, e) {
  return Mt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, n) {
    i.__proto__ = n;
  } || function(i, n) {
    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (i[r] = n[r]);
  }, Mt(t, e);
};
function pn(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Mt(t, e);
  function i() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
}
var Ie = function() {
  return Ie = Object.assign || function(e) {
    for (var i, n = 1, r = arguments.length; n < r; n++) {
      i = arguments[n];
      for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
    }
    return e;
  }, Ie.apply(this, arguments);
};
function m(t, e, i, n) {
  var r = arguments.length, a = r < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, i) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(t, e, i, n);
  else for (var s = t.length - 1; s >= 0; s--) (o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
  return r > 3 && a && Object.defineProperty(e, i, a), a;
}
function st(t) {
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
function Dr(t, e) {
  var i = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return i.call(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Tr = (t) => t.nodeType === Node.ELEMENT_NODE;
function Lr(t) {
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
const mn = () => {
}, $r = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", mn, $r);
document.removeEventListener("x", mn);
const hn = (t = window.document) => {
  let e = t.activeElement;
  const i = [];
  if (!e)
    return i;
  for (; e && (i.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return i;
}, Pr = (t) => {
  const e = hn();
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
class ai extends be {
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
var oi = (
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
var Rr = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, zr = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Ai = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function Or(t, e, i) {
  if (!t)
    return { x: 0, y: 0 };
  var n = e.x, r = e.y, a = n + i.left, o = r + i.top, s, d;
  if (t.type === "touchstart") {
    var u = t;
    s = u.changedTouches[0].pageX - a, d = u.changedTouches[0].pageY - o;
  } else {
    var h = t;
    s = h.pageX - a, d = h.pageY - o;
  }
  return { x: s, y: d };
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
var _i = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Ei = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], ct = [], Vr = (
  /** @class */
  function(t) {
    pn(e, t);
    function e(i) {
      var n = t.call(this, Ie(Ie({}, e.defaultAdapter), i)) || this;
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
        return Rr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return zr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ai;
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
          for (var a = st(_i), o = a.next(); !o.done; o = a.next()) {
            var s = o.value;
            this.adapter.registerInteractionHandler(s, this.activateHandler);
          }
        } catch (d) {
          n = { error: d };
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
          for (var a = st(Ei), o = a.next(); !o.done; o = a.next()) {
            var s = o.value;
            this.adapter.registerDocumentInteractionHandler(s, this.deactivateHandler);
          }
        } catch (d) {
          n = { error: d };
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
        for (var r = st(_i), a = r.next(); !a.done; a = r.next()) {
          var o = a.value;
          this.adapter.deregisterInteractionHandler(o, this.activateHandler);
        }
      } catch (s) {
        i = { error: s };
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
        for (var r = st(Ei), a = r.next(); !a.done; a = r.next()) {
          var o = a.value;
          this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler);
        }
      } catch (s) {
        i = { error: s };
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
            var s = i !== void 0 && ct.length > 0 && ct.some(function(d) {
              return n.adapter.containsEventTarget(d);
            });
            if (s) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (ct.push(i.target), this.registerDeactivationHandlers(i)), r.wasElementMadeActive = this.checkElementMadeActive(i), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              ct = [], !r.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (r.wasElementMadeActive = n.checkElementMadeActive(i), r.wasElementMadeActive && n.animateActivation()), r.wasElementMadeActive || (n.activationState = n.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var i = this, n = e.strings, r = n.VAR_FG_TRANSLATE_START, a = n.VAR_FG_TRANSLATE_END, o = e.cssClasses, s = o.FG_DEACTIVATION, d = o.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var h = "", f = "";
      if (!this.adapter.isUnbounded()) {
        var v = this.getFgTranslationCoordinates(), y = v.startPoint, S = v.endPoint;
        h = y.x + "px, " + y.y + "px", f = S.x + "px, " + S.y + "px";
      }
      this.adapter.updateCssVariable(r, h), this.adapter.updateCssVariable(a, f), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(s), this.adapter.computeBoundingRect(), this.adapter.addClass(d), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, n = i.activationEvent, r = i.wasActivatedByPointer, a;
      r ? a = Or(n, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      var i = this, n = e.cssClasses.FG_DEACTIVATION, r = this.activationState, a = r.hasDeactivationUXRun, o = r.isActivated, s = a || !o;
      s && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(n), this.fgDeactivationRemovalTimer = setTimeout(function() {
        i.adapter.removeClass(n);
      }, Ai.FG_DEACTIVATION_MS));
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
        var r = Ie({}, n);
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
  }(oi)
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
class Mr {
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
const Ci = /* @__PURE__ */ new WeakMap(), Me = Qe((t) => (e) => {
  if (!(e instanceof Je) || e instanceof ri || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = e, { element: n } = i;
  let r = Ci.get(e);
  r === void 0 && (n.setAttribute("class", i.strings.join(" ")), Ci.set(e, r = /* @__PURE__ */ new Set()));
  const a = n.classList || new Mr(n);
  r.forEach((o) => {
    o in t || (a.remove(o), r.delete(o));
  });
  for (const o in t) {
    const s = t[o];
    s != r.has(o) && (s ? (a.add(o), r.add(o)) : (a.remove(o), r.delete(o)));
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
const Ni = /* @__PURE__ */ new WeakMap(), Fr = Qe((t) => (e) => {
  if (!(e instanceof Je) || e instanceof ri || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = e, { style: n } = i.element;
  let r = Ni.get(e);
  r === void 0 && (n.cssText = i.strings.join(" "), Ni.set(e, r = /* @__PURE__ */ new Set())), r.forEach((a) => {
    a in t || (r.delete(a), a.indexOf("-") === -1 ? n[a] = null : n.removeProperty(a));
  });
  for (const a in t)
    r.add(a), a.indexOf("-") === -1 ? n[a] = t[a] : n.setProperty(a, t[a]);
});
class O extends ai {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Vr;
  }
  get isActive() {
    return Dr(this.parentElement || this, ":active");
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
    return c`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Me(n)}"
          style="${Fr({
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
  T(".mdc-ripple-surface")
], O.prototype, "mdcRoot", void 0);
m([
  p({ type: Boolean })
], O.prototype, "primary", void 0);
m([
  p({ type: Boolean })
], O.prototype, "accent", void 0);
m([
  p({ type: Boolean })
], O.prototype, "unbounded", void 0);
m([
  p({ type: Boolean })
], O.prototype, "disabled", void 0);
m([
  p({ type: Boolean })
], O.prototype, "activated", void 0);
m([
  p({ type: Boolean })
], O.prototype, "selected", void 0);
m([
  p({ type: Boolean })
], O.prototype, "internalUseStateLayerCustomProperties", void 0);
m([
  C()
], O.prototype, "hovering", void 0);
m([
  C()
], O.prototype, "bgFocused", void 0);
m([
  C()
], O.prototype, "fgActivation", void 0);
m([
  C()
], O.prototype, "fgDeactivation", void 0);
m([
  C()
], O.prototype, "fgScale", void 0);
m([
  C()
], O.prototype, "fgSize", void 0);
m([
  C()
], O.prototype, "translateStart", void 0);
m([
  C()
], O.prototype, "translateEnd", void 0);
m([
  C()
], O.prototype, "leftPos", void 0);
m([
  C()
], O.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Hr = q`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let Ft = class extends O {
};
Ft.styles = [Hr];
Ft = m([
  z("mwc-ripple")
], Ft);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Br(t, e, i) {
  const n = t.constructor;
  if (!i) {
    const s = `__${e}`;
    if (i = n.getPropertyDescriptor(e, s), !i)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const r = i;
  let a = "";
  if (!r.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const o = {
    configurable: !0,
    enumerable: !0,
    set(s) {
      a === "" && (a = n.getPropertyOptions(e).attribute), this.hasAttribute(a) && this.removeAttribute(a), r.set.call(this, s);
    }
  };
  return r.get && (o.get = function() {
    return r.get.call(this);
  }), o;
}
function Ye(t, e, i) {
  if (e !== void 0)
    return Br(t, e, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class si extends ai {
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
si.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const le = (t) => (
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
          const d = this.constructor._observers.get(o);
          d !== void 0 && d.call(this, this[o], a);
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
const Ii = Symbol("selection controller");
class Gr {
  constructor() {
    this.selected = null, this.ordered = null, this.set = /* @__PURE__ */ new Set();
  }
}
class ci {
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
    let r = n[Ii];
    return r === void 0 && (r = new ci(n), n[Ii] = r), r;
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
    return this.sets[e] || (this.sets[e] = new Gr()), this.sets[e];
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
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class di {
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
var qr = {
  NATIVE_CONTROL_SELECTOR: ".mdc-radio__native-control"
}, Ur = {
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
var jr = (
  /** @class */
  function(t) {
    pn(e, t);
    function e(i) {
      return t.call(this, Ie(Ie({}, e.defaultAdapter), i)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ur;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return qr;
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
  }(oi)
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
const Tt = /* @__PURE__ */ new WeakMap(), te = Qe((t) => (e) => {
  const i = Tt.get(e);
  if (t === void 0 && e instanceof Je) {
    if (i !== void 0 || !Tt.has(e)) {
      const n = e.committer.name;
      e.committer.element.removeAttribute(n);
    }
  } else t !== i && e.setValue(t);
  Tt.set(e, t);
});
class M extends si {
  constructor() {
    super(...arguments), this._checked = !1, this.useStateLayerCustomProperties = !1, this.global = !1, this.disabled = !1, this.value = "", this.name = "", this.reducedTouchTarget = !1, this.mdcFoundationClass = jr, this.formElementTabIndex = 0, this.focused = !1, this.shouldRenderRipple = !1, this.rippleElement = null, this.rippleHandlers = new di(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => {
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
    return this.shouldRenderRipple ? c`<mwc-ripple unbounded accent
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
        .disabled="${this.disabled}"></mwc-ripple>` : "";
  }
  get isRippleActive() {
    var e;
    return ((e = this.rippleElement) === null || e === void 0 ? void 0 : e.isActive) || !1;
  }
  connectedCallback() {
    super.connectedCallback(), this._selectionController = ci.getController(this), this._selectionController.register(this), this._selectionController.update(this);
  }
  disconnectedCallback() {
    this._selectionController.unregister(this), this._selectionController = void 0;
  }
  focus() {
    this.formElement.focus();
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Lr(this.mdcRoot)), { setNativeControlDisabled: (e) => {
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
    return c`
      <div class="mdc-radio ${Me(e)}">
        <input
          tabindex="${this.formElementTabIndex}"
          class="mdc-radio__native-control"
          type="radio"
          name="${this.name}"
          aria-label="${te(this.ariaLabel)}"
          aria-labelledby="${te(this.ariaLabelledBy)}"
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
m([
  T(".mdc-radio")
], M.prototype, "mdcRoot", void 0);
m([
  T("input")
], M.prototype, "formElement", void 0);
m([
  C()
], M.prototype, "useStateLayerCustomProperties", void 0);
m([
  p({ type: Boolean })
], M.prototype, "global", void 0);
m([
  p({ type: Boolean, reflect: !0 })
], M.prototype, "checked", null);
m([
  p({ type: Boolean }),
  le(function(t) {
    this.mdcFoundation.setDisabled(t);
  })
], M.prototype, "disabled", void 0);
m([
  p({ type: String }),
  le(function(t) {
    this._handleUpdatedValue(t);
  })
], M.prototype, "value", void 0);
m([
  p({ type: String })
], M.prototype, "name", void 0);
m([
  p({ type: Boolean })
], M.prototype, "reducedTouchTarget", void 0);
m([
  p({ type: Number })
], M.prototype, "formElementTabIndex", void 0);
m([
  C()
], M.prototype, "focused", void 0);
m([
  C()
], M.prototype, "shouldRenderRipple", void 0);
m([
  Yt("mwc-ripple")
], M.prototype, "ripple", void 0);
m([
  Ye,
  p({ attribute: "aria-label" })
], M.prototype, "ariaLabel", void 0);
m([
  Ye,
  p({ attribute: "aria-labelledby" })
], M.prototype, "ariaLabelledBy", void 0);
m([
  an({ passive: !0 })
], M.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Wr = q`.mdc-touch-target-wrapper{display:inline}.mdc-radio{padding:calc((40px - 20px) / 2)}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio .mdc-radio__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background::before{top:calc(-1 * (40px - 20px) / 2);left:calc(-1 * (40px - 20px) / 2);width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:calc((40px - 40px) / 2);right:calc((40px - 40px) / 2);left:calc((40px - 40px) / 2);width:40px;height:40px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:GrayText}}.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host{display:inline-block;outline:none}.mdc-radio{vertical-align:bottom}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}`;
let Ht = class extends M {
};
Ht.styles = [Wr];
Ht = m([
  z("mwc-radio")
], Ht);
var Kr = Object.defineProperty, Xr = Object.getOwnPropertyDescriptor, Fe = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Xr(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Kr(e, i, r), r;
};
let ke = class extends be {
  constructor() {
    super(...arguments), this.secondary = !1, this.highlighted = !1, this.hideActions = !1;
  }
  async firstUpdated() {
    this.tabIndex = 0;
  }
  renderIcon() {
    return c`<span>
      <slot name="icon"
        >${this.icon ? c`<mwc-icon>${this.icon}</mwc-icon>` : me}</slot
      ></span
    > `;
  }
  render() {
    return c`<header>${this.label ?? me}</header>
      <section>${this.renderIcon()}<slot name="action"></slot></section>
      <footer>${this.label ?? me}</footer>`;
  }
};
ke.styles = q`
    :host {
      display: flex;
      flex-direction: column;
      outline: none;
    }

    section {
      align-self: center;
    }

    ::slotted([slot='icon']),
    mwc-icon {
      display: block;
      color: var(--mdc-theme-on-surface);
      transition: transform 150ms linear, box-shadow 200ms linear;
      outline-color: var(--mdc-theme-primary);
      outline-style: solid;
      margin: 0px;
      outline-width: 0px;
      width: 64px;
      height: 64px;
      --mdc-icon-size: 64px;
    }

    :host([secondary]) ::slotted([slot='icon']),
    :host([secondary]) mwc-icon {
      outline-color: var(--mdc-theme-secondary);
    }

    :host([highlighted]) ::slotted([slot='icon']),
    :host([highlighted]) mwc-icon {
      outline-style: dotted;
      outline-width: 2px;
    }

    :host(:focus-within) ::slotted([slot='icon']),
    :host(:focus-within) mwc-icon {
      outline-style: solid;
      outline-width: 4px;
    }

    :host(:focus-within:not([hideActions])) ::slotted([slot='icon']),
    :host(:focus-within:not([hideActions])) mwc-icon {
      transform: scale(0.8);
      transition: all 250ms linear;
      box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
    }

    ::slotted([slot='icon']:hover),
    mwc-icon:hover {
      outline-style: dashed;
      outline-width: 2px;
      transition: transform 200ms linear, box-shadow 250ms linear;
    }

    ::slotted([slot='action']) {
      color: var(--mdc-theme-on-surface);
      transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 200ms linear;
      position: absolute;
      pointer-events: none;
      z-index: 1;
      opacity: 0;
      margin-top: -56px;
      margin-left: 8px;
    }

    :host(:focus-within) ::slotted([slot='action']) {
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 250ms linear;
      pointer-events: auto;
      opacity: 1;
    }

    :host(:focus-within) ::slotted([slot='action']:nth-of-type(1)) {
      transform: translate(0px, -52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(2)) {
      transform: translate(0px, 52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(3)) {
      transform: translate(52px, 0px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(4)) {
      transform: translate(-52px, 0px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(5)) {
      transform: translate(52px, -52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(6)) {
      transform: translate(-52px, 52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(7)) {
      transform: translate(-52px, -52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(8)) {
      transform: translate(52px, 52px);
    }

    footer {
      color: var(--mdc-theme-on-surface);
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0px;
      text-align: center;
      align-self: center;
      max-width: 100%;
      direction: rtl;
    }

    header {
      color: var(--mdc-theme-on-primary);
      background-color: var(--mdc-theme-primary);
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 1.2em;
      position: absolute;
      text-align: center;
      align-self: center;
      max-width: 100vw;
      padding: 4px 8px;
      border-radius: 4px;
      opacity: 0;
      transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 200ms linear;
    }

    :host([secondary]) header {
      background-color: var(--mdc-theme-secondary);
    }

    :host(:hover) header {
      position: absolute;
      opacity: 1;
      transform: translate(0, -40px);
      box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 250ms linear;
    }

    :host(:focus-within) header {
      position: absolute;
      opacity: 1;
      box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 250ms linear;
    }

    :host(:focus-within:not([hideActions])) header {
      transform: translate(0, -80px);
    }

    :host(:focus-within[hideActions]) header {
      transform: translate(0, -40px);
    }
  `;
Fe([
  p({ type: String })
], ke.prototype, "label", 2);
Fe([
  p({ type: String })
], ke.prototype, "icon", 2);
Fe([
  p({ type: Boolean })
], ke.prototype, "secondary", 2);
Fe([
  p({ type: Boolean })
], ke.prototype, "highlighted", 2);
Fe([
  p({ type: Boolean })
], ke.prototype, "hideActions", 2);
ke = Fe([
  z("action-icon")
], ke);
function ce(t, e, i) {
  const n = t.createElementNS(t.documentElement.namespaceURI, e);
  return Object.entries(i).filter(([r, a]) => a !== null).forEach(([r, a]) => n.setAttribute(r, a)), n;
}
function St(t, e) {
  const i = t.cloneNode(!1);
  return Object.entries(e).forEach(([n, r]) => {
    r === null ? i.removeAttribute(n) : i.setAttribute(n, r);
  }), i;
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class F extends be {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new di(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const e = this.renderText(), i = this.graphic ? this.renderGraphic() : c``, n = this.hasMeta ? this.renderMeta() : c``;
    return c`
      ${this.renderRipple()}
      ${i}
      ${e}
      ${n}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? c`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? c`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return c`
      <span class="mdc-deprecated-list-item__graphic material-icons ${Me(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return c`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return c`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return c`<slot></slot>`;
  }
  renderTwoline() {
    return c`
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
m([
  T("slot")
], F.prototype, "slotElement", void 0);
m([
  Yt("mwc-ripple")
], F.prototype, "ripple", void 0);
m([
  p({ type: String })
], F.prototype, "value", void 0);
m([
  p({ type: String, reflect: !0 })
], F.prototype, "group", void 0);
m([
  p({ type: Number, reflect: !0 })
], F.prototype, "tabindex", void 0);
m([
  p({ type: Boolean, reflect: !0 }),
  le(function(t) {
    t ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], F.prototype, "disabled", void 0);
m([
  p({ type: Boolean, reflect: !0 })
], F.prototype, "twoline", void 0);
m([
  p({ type: Boolean, reflect: !0 })
], F.prototype, "activated", void 0);
m([
  p({ type: String, reflect: !0 })
], F.prototype, "graphic", void 0);
m([
  p({ type: Boolean })
], F.prototype, "multipleGraphics", void 0);
m([
  p({ type: Boolean })
], F.prototype, "hasMeta", void 0);
m([
  p({ type: Boolean, reflect: !0 }),
  le(function(t) {
    t ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], F.prototype, "noninteractive", void 0);
m([
  p({ type: Boolean, reflect: !0 }),
  le(function(t) {
    const e = this.getAttribute("role"), i = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (i && t ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(t, "property");
  })
], F.prototype, "selected", void 0);
m([
  C()
], F.prototype, "shouldRenderRipple", void 0);
m([
  C()
], F.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const fn = q`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Bt = class extends F {
};
Bt.styles = [fn];
Bt = m([
  z("mwc-list-item")
], Bt);
var Zr = Object.defineProperty, Qr = Object.getOwnPropertyDescriptor, ae = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Qr(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Zr(e, i, r), r;
};
let j = class extends rr {
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
    return this.multipliers.length && this.unit ? c`<div style="position:relative;">
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
      </div>` : c``;
  }
  renderMulplierList() {
    return c`${this.multipliers.map(
      (t) => c`<mwc-list-item ?selected=${t === this.multiplier}
          >${t === null ? l("textfield.noMultiplier") : t}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? c`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : c``;
  }
  render() {
    return c`
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
ae([
  p({ type: Boolean })
], j.prototype, "nullable", 2);
ae([
  p({ type: Array })
], j.prototype, "multipliers", 2);
ae([
  p({ type: String })
], j.prototype, "multiplier", 1);
ae([
  p({ type: String })
], j.prototype, "unit", 2);
ae([
  C()
], j.prototype, "null", 1);
ae([
  p({ type: String })
], j.prototype, "maybeValue", 1);
ae([
  p({ type: String })
], j.prototype, "defaultValue", 2);
ae([
  p({ type: Array })
], j.prototype, "reservedValues", 2);
ae([
  T("mwc-switch")
], j.prototype, "nullSwitch", 2);
ae([
  T("mwc-menu")
], j.prototype, "multiplierMenu", 2);
ae([
  T("mwc-icon-button")
], j.prototype, "multiplierButton", 2);
j = ae([
  z("wizard-textfield")
], j);
var Jr = Object.defineProperty, Yr = Object.getOwnPropertyDescriptor, $e = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Yr(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Jr(e, i, r), r;
};
let he = class extends nr {
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
    return this.nullable ? c`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : c``;
  }
  render() {
    return c`
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
  p({ type: Boolean })
], he.prototype, "nullable", 2);
$e([
  C()
], he.prototype, "null", 1);
$e([
  p({ type: String })
], he.prototype, "maybeValue", 1);
$e([
  p({ type: String })
], he.prototype, "defaultValue", 2);
$e([
  p({ type: Array })
], he.prototype, "reservedValues", 2);
$e([
  T("mwc-switch")
], he.prototype, "nullSwitch", 2);
he = $e([
  z("wizard-select")
], he);
class V extends si {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new di(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
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
    return this.shouldRenderRipple ? c`<mwc-ripple
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
    return c`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Me(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${te(this.name)}"
              aria-checked="${te(n)}"
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
  T(".mdc-checkbox")
], V.prototype, "mdcRoot", void 0);
m([
  T("input")
], V.prototype, "formElement", void 0);
m([
  p({ type: Boolean, reflect: !0 })
], V.prototype, "checked", void 0);
m([
  p({ type: Boolean })
], V.prototype, "indeterminate", void 0);
m([
  p({ type: Boolean, reflect: !0 })
], V.prototype, "disabled", void 0);
m([
  p({ type: String, reflect: !0 })
], V.prototype, "name", void 0);
m([
  p({ type: String })
], V.prototype, "value", void 0);
m([
  Ye,
  p({ type: String, attribute: "aria-label" })
], V.prototype, "ariaLabel", void 0);
m([
  Ye,
  p({ type: String, attribute: "aria-labelledby" })
], V.prototype, "ariaLabelledBy", void 0);
m([
  Ye,
  p({ type: String, attribute: "aria-describedby" })
], V.prototype, "ariaDescribedBy", void 0);
m([
  p({ type: Boolean })
], V.prototype, "reducedTouchTarget", void 0);
m([
  C()
], V.prototype, "animationClass", void 0);
m([
  C()
], V.prototype, "shouldRenderRipple", void 0);
m([
  C()
], V.prototype, "focused", void 0);
m([
  C()
], V.prototype, "useStateLayerCustomProperties", void 0);
m([
  Yt("mwc-ripple")
], V.prototype, "ripple", void 0);
m([
  an({ passive: !0 })
], V.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ea = q`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let Gt = class extends V {
};
Gt.styles = [ea];
Gt = m([
  z("mwc-checkbox")
], Gt);
var ta = Object.defineProperty, ia = Object.getOwnPropertyDescriptor, ie = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? ia(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && ta(e, i, r), r;
};
let W = class extends be {
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
    return this.nullable ? c`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : c``;
  }
  render() {
    return c`
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
ie([
  p({ type: String })
], W.prototype, "label", 2);
ie([
  p({ type: String })
], W.prototype, "helper", 2);
ie([
  p({ type: Boolean })
], W.prototype, "nullable", 2);
ie([
  p({ type: Boolean })
], W.prototype, "defaultChecked", 2);
ie([
  p({ type: String })
], W.prototype, "maybeValue", 1);
ie([
  p({ type: Boolean })
], W.prototype, "disabled", 2);
ie([
  C()
], W.prototype, "null", 1);
ie([
  C()
], W.prototype, "checked", 1);
ie([
  C()
], W.prototype, "deactivateCheckbox", 2);
ie([
  C()
], W.prototype, "formfieldLabel", 1);
ie([
  T("mwc-switch")
], W.prototype, "nullSwitch", 2);
ie([
  T("mwc-checkbox")
], W.prototype, "checkbox", 2);
W = ie([
  z("wizard-checkbox")
], W);
function na(t) {
  return typeof t == "function";
}
function R(t) {
  return t instanceof j || t instanceof he || t instanceof W ? t.maybeValue : t.value ?? null;
}
function ra(t) {
  return t instanceof j ? t.multiplier : null;
}
function Q(t, e) {
  if (!t)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const i = na(t) ? t : () => t;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: i, ...e?.detail }
  });
}
function Ve(t) {
  return Q(t, { detail: { subwizard: !0 } });
}
function J(t) {
  const e = t.getAttribute("name");
  return e || void 0;
}
function aa(t) {
  const e = t.getAttribute("desc");
  return e || void 0;
}
function Di(t) {
  const e = t.getAttribute("inst");
  return e || void 0;
}
function U(t) {
  const e = t.split(">"), i = e.pop() ?? "";
  return [e.join(">"), i];
}
const $ = ":not(*)";
function oa(t) {
  return `${t.getAttribute("version")}	${t.getAttribute("revision")}`;
}
function sa(t, e) {
  const [i, n] = e.split("	");
  return !i || !n ? $ : `${t}[version="${i}"][revision="${n}"]`;
}
function Ti(t) {
  return N(t.parentElement) + ">" + t.getAttribute("connectivityNode");
}
function Li(t, e) {
  const [i, n] = U(e), r = P[t].parents.flatMap(
    (a) => H(a, i).split(",")
  );
  return G(
    r,
    [">"],
    [`${t}[connectivityNode="${n}"]`]
  ).map((a) => a.join("")).join(",");
}
function ca(t) {
  const [e, i, n, r, a, o] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((s) => t.getAttribute(s));
  return e === "None" ? `${N(t.parentElement)}>(${r} ${o} ${a})` : `${e} ${i || "(Client)"}/${n ?? ""} ${r} ${a ?? ""}`;
}
function da(t, e) {
  if (e.endsWith(")")) {
    const [v, y] = U(e), [S, x, w] = y.substring(1, y.length - 1).split(" ");
    if (!S || !x) return $;
    const D = P[t].parents.flatMap(
      (B) => H(B, v).split(",")
    );
    return G(
      D,
      [">"],
      [`${t}[iedName="None"][lnClass="${S}"][lnType="${x}"][lnInst="${w}"]`]
    ).map((B) => B.join("")).join(",");
  }
  const [i, n, r, a, o] = e.split(/[ /]/);
  if (!i || !n || !a) return $;
  const [
    s,
    d,
    u,
    h,
    f
  ] = [
    [`[iedName="${i}"]`],
    n === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${n}"]`],
    r ? [`[prefix="${r}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    o ? [`[lnInst="${o}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return G(
    [t],
    s,
    d,
    u,
    h,
    f
  ).map((v) => v.join("")).join(",");
}
function la(t) {
  return `${N(t.parentElement)}>${t.getAttribute(
    "iedName"
  )} ${t.getAttribute("apName")}`;
}
function ua(t, e) {
  const [i, n] = U(e), [r, a] = n.split(" ");
  return `${H(
    "IED",
    i
  )}>${t}[iedName="${r}"][apName="${a}"]`;
}
function pa(t) {
  return `${N(t.parentElement)}>${t.getAttribute("associationID") ?? ""}`;
}
function ma(t, e) {
  const [i, n] = U(e);
  return n ? `${H(
    "Server",
    i
  )}>${t}[associationID="${n}"]` : $;
}
function ha(t) {
  return `${N(t.closest("IED"))}>>${t.getAttribute("inst")}`;
}
function fa(t, e) {
  const [i, n] = e.split(">>");
  return n ? `IED[name="${i}"] ${t}[inst="${n}"]` : $;
}
function ba(t) {
  const e = t.textContent, [i, n, r, a, o] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((s) => t.getAttribute(s));
  return `${N(t.parentElement)}>${e} ${i || ""} ${n || ""}/${r ?? ""} ${a ?? ""} ${o ?? ""}`;
}
function ga(t, e) {
  const [i, n] = U(e), [r, a, o, s, d, u] = n.split(/[ /]/), [
    h,
    f,
    v,
    y,
    S,
    x
  ] = [
    P[t].parents.flatMap(
      (w) => H(w, i).split(",")
    ),
    [`${r}`],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${d}"]`],
    u ? [`[lnInst="${u}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return G(
    h,
    [">"],
    [t],
    f,
    v,
    y,
    S,
    x
  ).map((w) => w.join("")).join(",");
}
function ya(t) {
  const [e, i, n, r, a, o, s, d] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((h) => t.getAttribute(h)), u = `${e}/${i ?? ""} ${n} ${r ?? ""}.${a} ${o || ""}`;
  return `${N(t.parentElement)}>${u} (${s}${d ? " [" + d + "]" : ""})`;
}
function va(t, e) {
  const [i, n] = U(e), [r, a, o, s] = n.split(/[ /.]/), d = n.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), u = d && d[1] ? d[1] : "", h = d && d[2] ? d[2] : "", f = n.match(/\(([A-Z]{2})/), v = n.match(/ \[([0-9]{1,2})\]/), y = f && f[1] ? f[1] : "", S = v && v[1] ? v[1] : "", [
    x,
    w,
    D,
    B,
    Ce,
    Ct,
    Nt,
    It,
    Dt
  ] = [
    P[t].parents.flatMap(
      (Be) => H(Be, i).split(",")
    ),
    [`[ldInst="${r}"]`],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    s ? [`[lnInst="${s}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${u}"]`],
    h ? [`[daName="${h}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${y}"]`],
    S ? [`[ix="${S}"]`] : [":not([ix])", '[ix=""]']
  ];
  return G(
    x,
    [">"],
    [t],
    w,
    D,
    B,
    Ce,
    Ct,
    Nt,
    It,
    Dt
  ).map((Be) => Be.join("")).join(",");
}
function xa(t) {
  if (!t.parentElement) return NaN;
  const e = N(t.parentElement), i = t.getAttribute("iedName"), n = t.getAttribute("intAddr"), r = Array.from(
    t.parentElement.querySelectorAll(`ExtRef[intAddr="${n}"]`)
  ).indexOf(t);
  if (n) return `${e}>${n}[${r}]`;
  const [
    a,
    o,
    s,
    d,
    u,
    h,
    f,
    v,
    y,
    S,
    x,
    w
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
  ].map((Ce) => t.getAttribute(Ce)), D = w ? `${f}:${w} ${v ?? ""}/${y ?? ""} ${S ?? ""} ${x ?? ""}` : "", B = `${i} ${a}/${o ?? ""} ${s} ${d ?? ""} ${u} ${h || ""}`;
  return `${e}>${D ? D + " " : ""}${B}${n ? `@${n}` : ""}`;
}
function Sa(t, e) {
  const [i, n] = U(e), r = P[t].parents.flatMap(
    (Ge) => H(Ge, i).split(",")
  );
  if (n.endsWith("]")) {
    const [Ge] = n.split("["), Jn = [`[intAddr="${Ge}"]`];
    return G(r, [">"], [t], Jn).map((Yn) => Yn.join("")).join(",");
  }
  let a, o, s, d, u, h, f, v, y, S, x, w, D, B;
  !n.includes(":") && !n.includes("@") ? [a, o, s, d, u, h, f] = n.split(/[ /]/) : n.includes(":") && !n.includes("@") ? [
    v,
    y,
    S,
    x,
    w,
    D,
    a,
    o,
    s,
    d,
    u,
    h,
    f
  ] = n.split(/[ /:]/) : !n.includes(":") && n.includes("@") ? [a, o, s, d, u, h, f, B] = n.split(/[ /@]/) : [
    v,
    y,
    S,
    x,
    w,
    D,
    a,
    o,
    s,
    d,
    u,
    h,
    f,
    B
  ] = n.split(/[ /:@]/);
  const [
    Ce,
    Ct,
    Nt,
    It,
    Dt,
    Be,
    qn,
    Un,
    jn,
    Wn,
    Kn,
    Xn,
    Zn,
    Qn
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])"],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    d ? [`[lnClass="${d}"]`] : [":not([lnClass])"],
    u ? [`[lnInst="${u}"]`] : [":not([lnInst])", '[lnInst=""]'],
    h ? [`[doName="${h}"]`] : [":not([doName])"],
    f ? [`[daName="${f}"]`] : [":not([daName])", '[daName=""]'],
    v ? [`[serviceType="${v}"]`] : [":not([serviceType])", '[serviceType=""]'],
    y ? [`[srcCBName="${y}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    S ? [`[srcLDInst="${S}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    x ? [`[srcPrefix="${x}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    w ? [`[srcLNClass="${w}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    D ? [`[srcLNInst="${D}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    B ? [`[intAddr="${B}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return G(
    r,
    [">"],
    [t],
    Ce,
    Ct,
    Nt,
    It,
    Dt,
    Be,
    qn,
    Un,
    jn,
    Wn,
    Kn,
    Xn,
    Zn,
    Qn
  ).map((Ge) => Ge.join("")).join(",");
}
function wa(t) {
  const [e, i, n] = ["prefix", "lnClass", "inst"].map(
    (r) => t.getAttribute(r)
  );
  return `${N(t.parentElement)}>${e ?? ""} ${i} ${n}`;
}
function ka(t, e) {
  const [i, n] = U(e), r = P[t].parents.flatMap(
    (f) => H(f, i).split(",")
  ), [a, o, s] = n.split(" ");
  if (!o) return $;
  const [d, u, h] = [
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    [`[inst="${s}"]`]
  ];
  return G(
    r,
    [">"],
    [t],
    d,
    u,
    h
  ).map((f) => f.join("")).join(",");
}
function Aa(t) {
  const [e, i, n, r, a, o] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((s) => t.getAttribute(s));
  return `${N(t.parentElement)}>${i} ${e || ""} ${n}/${r ?? ""} ${a} ${o}`;
}
function _a(t, e) {
  const [i, n] = U(e), r = P[t].parents.flatMap(
    (D) => H(D, i).split(",")
  ), [a, o, s, d, u, h] = n.split(/[ /]/), [
    f,
    v,
    y,
    S,
    x,
    w
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])", '[iedName=""]'],
    o ? [`[apRef="${o}"]`] : [":not([apRef])", '[apRef=""]'],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    d ? [`[prefix="${d}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${u}"]`],
    h ? [`[lnInst="${h}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return G(
    r,
    [">"],
    [t],
    f,
    v,
    y,
    S,
    x,
    w
  ).map((D) => D.join("")).join(",");
}
function $i(t) {
  const [e, i] = ["name", "ix"].map((n) => t.getAttribute(n));
  return `${N(t.parentElement)}>${e}${i ? "[" + i + "]" : ""}`;
}
function qt(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [n, r] = U(e), [a, o, s, d] = r.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!o) return $;
  if (i === 0) return `${t}[name="${o}"]`;
  const u = P[t].parents.flatMap(
    (v) => v === "SDI" ? qt(v, n, i - 1).split(",") : H(v, n).split(",")
  ).filter((v) => !v.startsWith($));
  if (u.length === 0) return $;
  const [h, f] = [
    [`[name="${o}"]`],
    d ? [`[ix="${d}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return G(
    u,
    [">"],
    [t],
    h,
    f
  ).map((v) => v.join("")).join(",");
}
function Ea(t) {
  if (!t.parentElement) return NaN;
  const e = t.getAttribute("sGroup"), i = Array.from(t.parentElement.children).filter((n) => n.getAttribute("sGroup") === e).findIndex((n) => n.isSameNode(t));
  return `${N(t.parentElement)}>${e ? e + "." : ""} ${i}`;
}
function Ca(t, e) {
  const [i, n] = U(e), [r, a] = n.split(" "), o = parseFloat(a), s = P[t].parents.flatMap(
    (h) => H(h, i).split(",")
  ), [d, u] = [
    r ? [`[sGroup="${r}"]`] : [""],
    o ? [`:nth-child(${o + 1})`] : [""]
  ];
  return G(
    s,
    [">"],
    [t],
    d,
    u
  ).map((h) => h.join("")).join(",");
}
function Na(t) {
  const [e, i] = ["iedName", "apName"].map(
    (n) => t.getAttribute(n)
  );
  return `${e} ${i}`;
}
function Ia(t, e) {
  const [i, n] = e.split(" ");
  return !i || !n ? $ : `${t}[iedName="${i}"][apName="${n}"]`;
}
function Pi(t) {
  const [e, i] = ["ldInst", "cbName"].map(
    (n) => t.getAttribute(n)
  );
  return `${e} ${i}`;
}
function Ri(t, e) {
  const [i, n] = e.split(" ");
  return !i || !n ? $ : `${t}[ldInst="${i}"][cbName="${n}"]`;
}
function Da(t) {
  if (!t.parentElement) return NaN;
  if (!t.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = t.getAttribute("type");
  return t.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${N(t.parentElement)}>${e}`;
}
function Ta(t, e) {
  const [i, n] = U(e), [r, a] = [
    P[t].parents.flatMap(
      (o) => H(o, i).split(",")
    ),
    n ? [`[type="${n}"]`] : [""]
  ];
  return G(r, [">"], [t], a).map((o) => o.join("")).join(",");
}
function La(t) {
  if (!t.parentElement) return NaN;
  const e = t.parentElement, i = t.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${N(t.parentElement)}>${i}`;
  const n = Array.from(t.parentElement.children).filter((r) => r.getAttribute("type") === i).findIndex((r) => r.isSameNode(t));
  return `${N(t.parentElement)}>${i} [${n}]`;
}
function $a(t, e) {
  const [i, n] = U(e), [r] = n.split(" "), a = n && n.match(/\[([0-9]+)\]/) && n.match(/\[([0-9]+)\]/)[1] ? parseFloat(n.match(/\[([0-9]+)\]/)[1]) : NaN, [o, s, d] = [
    P[t].parents.flatMap(
      (u) => H(u, i).split(",")
    ),
    [`[type="${r}"]`],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return G(
    o,
    [">"],
    [t],
    s,
    d
  ).map((u) => u.join("")).join(",");
}
function Pa(t) {
  return `${N(t.parentElement)}>${t.getAttribute("ord")}`;
}
function Ra(t, e) {
  const [i, n] = U(e);
  return `${H("EnumType", i)}>${t}[ord="${n}"]`;
}
function za(t) {
  return `${N(t.parentElement)}>${t.getAttribute("type") || "8-MMS"}	${t.textContent}`;
}
function Oa(t, e) {
  const [i, n] = U(e), [r, a] = n.split("	"), [o] = [
    P[t].parents.flatMap(
      (s) => H(s, i).split(",")
    )
  ];
  return G(
    o,
    [">"],
    [t],
    [`[type="${r}"]`],
    [">"],
    [a]
  ).map((s) => s.join("")).join(",");
}
function Va() {
  return "";
}
function Ma() {
  return ":root";
}
function E(t) {
  return t.parentElement.tagName === "SCL" ? t.getAttribute("name") : `${N(t.parentElement)}>${t.getAttribute("name")}`;
}
function _(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [n, r] = U(e);
  if (!r) return $;
  if (i === 0) return `${t}[name="${r}"]`;
  const a = P[t].parents;
  if (!a) return $;
  const o = a.flatMap(
    (s) => P[s].selector === P.Substation.selector ? _(s, n, i - 1).split(",") : H(s, n).split(",")
  ).filter((s) => !s.startsWith($));
  return o.length === 0 ? $ : G(o, [">"], [t], [`[name="${r}"]`]).map((s) => s.join("")).join(",");
}
function b(t) {
  return N(t.parentElement).toString();
}
function g(t, e) {
  const i = P[t].parents;
  if (!i) return $;
  const n = i.flatMap((r) => H(r, e).split(",")).filter((r) => !r.startsWith($));
  return n.length === 0 ? $ : G(n, [">"], [t]).map((r) => r.join("")).join(",");
}
function dt(t) {
  return `#${t.id}`;
}
function lt(t, e) {
  const i = e.replace(/^#/, "");
  return i ? `${t}[id="${i}"]` : $;
}
const bn = [
  "TransformerWinding",
  "ConductingEquipment"
], gn = [
  "GeneralEquipment",
  "PowerTransformer",
  ...bn
], Ut = ["Substation", "VoltageLevel", "Bay"], yn = ["Process", "Line"], vn = ["EqSubFunction", "EqFunction"], Fa = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...gn,
  ...Ut,
  ...yn,
  ...vn
], xn = ["ConnectivityNode", ...Fa], Ha = ["GOOSESecurity", "SMVSecurity"], Ba = ["SubNetwork", ...Ha, ...xn], Ga = ["BDA", "DA"], qa = ["SampledValueControl", "GSEControl"], Ua = ["LogControl", "ReportControl"], ja = [...qa, ...Ua], Wa = ["GSE", "SMV"], Ka = [
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
  ...ja,
  ...Wa,
  ...Ga
], Ne = ["LN0", "LN"], Xa = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Za = ["Subject", "IssuerName"], Qa = ["MinTime", "MaxTime"], Ja = ["LNodeType", "DOType", "DAType", "EnumType"], Ya = [
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
], eo = ["DynDataSet", "ConfDataSet"], to = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...eo
], io = ["ConfLogControl", "ConfSigRef"], no = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], ro = ["SCL", ...Ba, ...Ka, ...Ja], Sn = [
  ...ro,
  ...Xa,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Za,
  ...Qa,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...Ne,
  ...Ya,
  "DynAssociation",
  "SettingGroups",
  ...to,
  ...io,
  ...no,
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
], ao = new Set(Sn);
function li(t) {
  return ao.has(t);
}
const wt = ["Text", "Private"], Se = [...wt], L = [...wt], ut = [...wt], zi = [...L, "Val"], wn = [...Se, "LNode"], we = [...wn], jt = [...we], Lt = [
  ...we,
  "PowerTransformer",
  "GeneralEquipment"
], Oi = [
  ...jt,
  "Terminal"
], Vi = [...L, "Address"], kn = [...Se], Mi = [...kn, "IEDName"], Fi = [
  ...L,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], Hi = [
  ...we,
  "GeneralEquipment",
  "Function"
], Bi = [...kn, "TrgOps"], Gi = [
  ...we,
  "GeneralEquipment",
  "EqSubFunction"
], P = {
  AccessControl: {
    identity: b,
    selector: g,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: E,
    selector: _,
    parents: ["IED"],
    children: [
      ...Se,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: b,
    selector: g,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: pa,
    selector: ma,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: b,
    selector: g,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: E,
    selector: _,
    parents: ["DAType"],
    children: [...zi]
  },
  BitRate: {
    identity: b,
    selector: g,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: E,
    selector: _,
    parents: ["VoltageLevel"],
    children: [
      ...Lt,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: Aa,
    selector: _a,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: b,
    selector: g,
    parents: ["SCL"],
    children: [...L, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: E,
    selector: _,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...Oi,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: b,
    selector: g,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: Na,
    selector: Ia,
    parents: ["SubNetwork"],
    children: [...L, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: E,
    selector: _,
    parents: ["Bay", "Line"],
    children: [...wn]
  },
  DA: {
    identity: E,
    selector: _,
    parents: ["DOType"],
    children: [...zi]
  },
  DAI: {
    identity: $i,
    selector: qt,
    parents: ["DOI", "SDI"],
    children: [...L, "Val"]
  },
  DAType: {
    identity: dt,
    selector: lt,
    parents: ["DataTypeTemplates"],
    children: [...ut, "BDA", "ProtNs"]
  },
  DO: {
    identity: E,
    selector: _,
    parents: ["LNodeType"],
    children: [...L]
  },
  DOI: {
    identity: E,
    selector: _,
    parents: [...Ne],
    children: [...L, "SDI", "DAI"]
  },
  DOType: {
    identity: dt,
    selector: lt,
    parents: ["DataTypeTemplates"],
    children: [...ut, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: E,
    selector: _,
    parents: [...Ne],
    children: [...Se, "FCDA"]
  },
  DataSetDirectory: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: b,
    selector: g,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: dt,
    selector: lt,
    parents: ["DataTypeTemplates"],
    children: [...ut, "EnumVal"]
  },
  EnumVal: {
    identity: Pa,
    selector: Ra,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: E,
    selector: _,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...Gi]
  },
  EqSubFunction: {
    identity: E,
    selector: _,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...Gi]
  },
  ExtRef: {
    identity: xa,
    selector: Sa,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: ya,
    selector: va,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: E,
    selector: _,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...we,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: E,
    selector: _,
    parents: [
      "SubFunction",
      "Function",
      ...yn,
      ...vn,
      ...Ut
    ],
    children: [...jt, "EqFunction"]
  },
  GetCBValues: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: E,
    selector: _,
    parents: ["AccessPoint"],
    children: [...Se, "Subject", "IssuerName"]
  },
  GSE: {
    identity: Pi,
    selector: Ri,
    parents: ["ConnectedAP"],
    children: [...Vi, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: E,
    selector: _,
    parents: ["LN0"],
    children: [...Mi, "Protocol"]
  },
  GSESettings: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: b,
    selector: g,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: b,
    selector: g,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: oa,
    selector: sa,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: E,
    selector: _,
    parents: ["SCL"],
    children: [...L, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: ba,
    selector: ga,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: b,
    selector: g,
    parents: [...Ne],
    children: [...L, "ExtRef"]
  },
  IssuerName: {
    identity: b,
    selector: g,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: la,
    selector: ua,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: ha,
    selector: fa,
    parents: ["Server"],
    children: [...L, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: wa,
    selector: ka,
    parents: ["AccessPoint", "LDevice"],
    children: [...Fi]
  },
  LN0: {
    identity: b,
    selector: g,
    parents: ["LDevice"],
    children: [
      ...Fi,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: ca,
    selector: da,
    parents: [...xn],
    children: [...L]
  },
  LNodeType: {
    identity: dt,
    selector: lt,
    parents: ["DataTypeTemplates"],
    children: [...ut, "DO"]
  },
  Line: {
    identity: E,
    selector: _,
    parents: ["Process", "SCL"],
    children: [
      ...Hi,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: E,
    selector: _,
    parents: [...Ne],
    children: [...L]
  },
  LogControl: {
    identity: E,
    selector: _,
    parents: [...Ne],
    children: [...Bi]
  },
  LogSettings: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: b,
    selector: g,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: b,
    selector: g,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: b,
    selector: g,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: Ti,
    selector: Li,
    parents: ["TransformerWinding"],
    children: [...L]
  },
  OptFields: {
    identity: b,
    selector: g,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: La,
    selector: $a,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: Da,
    selector: Ta,
    parents: ["ConnectedAP"],
    children: [...L, "P"]
  },
  PowerTransformer: {
    identity: E,
    selector: _,
    parents: [...Ut],
    children: [
      ...jt,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => $,
    parents: [],
    children: []
  },
  Process: {
    identity: E,
    selector: _,
    parents: ["Process", "SCL"],
    children: [
      ...Hi,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: za,
    selector: Oa,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: b,
    selector: g,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: E,
    selector: _,
    parents: [...Ne],
    children: [...Bi, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: b,
    selector: g,
    parents: ["ReportControl"],
    children: [...L, "ClientLN"]
  },
  SamplesPerSec: {
    identity: b,
    selector: g,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: E,
    selector: _,
    parents: ["LN0"],
    children: [...Mi, "SmvOpts"]
  },
  SecPerSamples: {
    identity: b,
    selector: g,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: Va,
    selector: Ma,
    parents: [],
    children: [
      ...wt,
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
    identity: $i,
    selector: qt,
    parents: ["DOI", "SDI"],
    children: [...L, "SDI", "DAI"]
  },
  SDO: {
    identity: E,
    selector: _,
    parents: ["DOType"],
    children: [...Se]
  },
  Server: {
    identity: b,
    selector: g,
    parents: ["AccessPoint"],
    children: [
      ...L,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: b,
    selector: g,
    parents: ["AccessPoint"],
    children: [...L]
  },
  Services: {
    identity: b,
    selector: g,
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
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: b,
    selector: g,
    parents: ["LN0"],
    children: [...L]
  },
  SettingGroups: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: b,
    selector: g,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: b,
    selector: g,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: Pi,
    selector: Ri,
    parents: ["ConnectedAP"],
    children: [...Vi]
  },
  SmvOpts: {
    identity: b,
    selector: g,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: E,
    selector: _,
    parents: ["AccessPoint"],
    children: [...Se, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: E,
    selector: _,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...bn
    ],
    children: [...we, "EqFunction"]
  },
  SubFunction: {
    identity: E,
    selector: _,
    parents: ["SubFunction", "Function"],
    children: [
      ...we,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: E,
    selector: _,
    parents: ["Communication"],
    children: [...Se, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: b,
    selector: g,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: E,
    selector: _,
    parents: ["SCL"],
    children: [...Lt, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: E,
    selector: _,
    parents: ["TransformerWinding"],
    children: [...we, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: Ti,
    selector: Li,
    parents: [...gn],
    children: [...L]
  },
  Text: {
    identity: b,
    selector: g,
    parents: Sn.filter((t) => t !== "Text" && t !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: b,
    selector: g,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: E,
    selector: _,
    parents: ["PowerTransformer"],
    children: [
      ...Oi,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: b,
    selector: g,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: Ea,
    selector: Ca,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: b,
    selector: g,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: b,
    selector: g,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: E,
    selector: _,
    parents: ["Substation"],
    children: [...Lt, "Voltage", "Bay", "Function"]
  }
};
function H(t, e) {
  return typeof e != "string" ? $ : li(t) ? P[t].selector(t, e) : t;
}
function An(t, e, i) {
  if (typeof i != "string" || !li(e)) return null;
  const n = t.querySelector(P[e].selector(e, i));
  return n === null || bt(n) ? n : Array.from(
    t.querySelectorAll(P[e].selector(e, i))
  ).find(bt) ?? null;
}
function N(t) {
  if (t === null) return NaN;
  if (t.closest("Private")) return NaN;
  const e = t.tagName;
  return li(e) ? P[e].identity(t) : NaN;
}
sn((t) => (e) => {
  Object.keys(t).length ? e.setValue(t) : e.setValue("");
});
const ft = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  decimal: "[+\\-]?[0-9]+(([.][0-9]*)?|([.][0-9]+))"
};
function De(t, e) {
  return typeof t == "string" && typeof e == "string" ? t.localeCompare(e) : typeof t == "object" && typeof e == "string" ? (t.getAttribute("name") ?? "").localeCompare(e) : typeof t == "string" && typeof e == "object" ? t.localeCompare(e.getAttribute("name")) : typeof t == "object" && typeof e == "object" ? (t.getAttribute("name") ?? "").localeCompare(
    e.getAttribute("name") ?? ""
  ) : 0;
}
function G(...t) {
  return t.reduce(
    (e, i) => e.flatMap((n) => i.map((r) => [n, r].flat())),
    [[]]
  );
}
function _n(t, e = /* @__PURE__ */ new WeakSet()) {
  if (e.has(t)) return 1 / 0;
  switch (t?.constructor) {
    case Object:
    case Array:
      return e.add(t), 1 + Math.max(
        -1,
        ...Object.values(t).map((i) => _n(i, e))
      );
    default:
      return 0;
  }
}
function bt(t) {
  return !t.closest("Private");
}
const oo = 99;
Array(oo).fill(1).map((t, e) => `${e + 1}`);
function et(t, e = "user", i) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { action: t, initiator: e, ...i?.detail }
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class tt extends F {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), n = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : c``, r = this.hasMeta && this.left ? this.renderMeta() : c``, a = this.renderRipple();
    return c`
      ${a}
      ${n}
      ${this.left ? "" : i}
      <span class=${Me(e)}>
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
m([
  T("slot")
], tt.prototype, "slotElement", void 0);
m([
  T("mwc-checkbox")
], tt.prototype, "checkboxElement", void 0);
m([
  p({ type: Boolean })
], tt.prototype, "left", void 0);
m([
  p({ type: String, reflect: !0 })
], tt.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const so = q`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Oe = class extends tt {
};
Oe.styles = [fn, so];
Oe = m([
  z("mwc-check-list-item")
], Oe);
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
var A = {
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
}, K = /* @__PURE__ */ new Set();
K.add(A.BACKSPACE);
K.add(A.ENTER);
K.add(A.SPACEBAR);
K.add(A.PAGE_UP);
K.add(A.PAGE_DOWN);
K.add(A.END);
K.add(A.HOME);
K.add(A.ARROW_LEFT);
K.add(A.ARROW_UP);
K.add(A.ARROW_RIGHT);
K.add(A.ARROW_DOWN);
K.add(A.DELETE);
K.add(A.ESCAPE);
K.add(A.TAB);
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
}, X = /* @__PURE__ */ new Map();
X.set(ee.BACKSPACE, A.BACKSPACE);
X.set(ee.ENTER, A.ENTER);
X.set(ee.SPACEBAR, A.SPACEBAR);
X.set(ee.PAGE_UP, A.PAGE_UP);
X.set(ee.PAGE_DOWN, A.PAGE_DOWN);
X.set(ee.END, A.END);
X.set(ee.HOME, A.HOME);
X.set(ee.ARROW_LEFT, A.ARROW_LEFT);
X.set(ee.ARROW_UP, A.ARROW_UP);
X.set(ee.ARROW_RIGHT, A.ARROW_RIGHT);
X.set(ee.ARROW_DOWN, A.ARROW_DOWN);
X.set(ee.DELETE, A.DELETE);
X.set(ee.ESCAPE, A.ESCAPE);
X.set(ee.TAB, A.TAB);
var _e = /* @__PURE__ */ new Set();
_e.add(A.PAGE_UP);
_e.add(A.PAGE_DOWN);
_e.add(A.END);
_e.add(A.HOME);
_e.add(A.ARROW_LEFT);
_e.add(A.ARROW_UP);
_e.add(A.ARROW_RIGHT);
_e.add(A.ARROW_DOWN);
function ye(t) {
  var e = t.key;
  if (K.has(e))
    return e;
  var i = X.get(t.keyCode);
  return i || A.UNKNOWN;
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
var ve, ue, I = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
ve = {}, ve["" + I.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", ve["" + I.LIST_ITEM_CLASS] = "mdc-list-item", ve["" + I.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", ve["" + I.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", ve["" + I.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", ve["" + I.ROOT] = "mdc-list";
var Re = (ue = {}, ue["" + I.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", ue["" + I.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", ue["" + I.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", ue["" + I.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", ue["" + I.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", ue["" + I.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", ue["" + I.ROOT] = "mdc-deprecated-list", ue), pt = {
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
    .` + I.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + I.LIST_ITEM_CLASS + ` a,
    .` + Re[I.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Re[I.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + I.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + I.LIST_ITEM_CLASS + ` a,
    .` + I.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + I.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Re[I.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Re[I.LIST_ITEM_CLASS] + ` a,
    .` + Re[I.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Re[I.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, Z = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Wt = (t, e) => t - e, co = (t, e) => {
  const i = Array.from(t), n = Array.from(e), r = { added: [], removed: [] }, a = i.sort(Wt), o = n.sort(Wt);
  let s = 0, d = 0;
  for (; s < a.length || d < o.length; ) {
    const u = a[s], h = o[d];
    if (u === h) {
      s++, d++;
      continue;
    }
    if (u !== void 0 && (h === void 0 || u < h)) {
      r.removed.push(u), s++;
      continue;
    }
    if (h !== void 0 && (u === void 0 || h < u)) {
      r.added.push(h), d++;
      continue;
    }
  }
  return r;
}, lo = ["input", "button", "textarea", "select"];
function Ke(t) {
  return t instanceof Set;
}
const $t = (t) => {
  const e = t === Z.UNSET_INDEX ? /* @__PURE__ */ new Set() : t;
  return Ke(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class ui extends oi {
  constructor(e) {
    super(Object.assign(Object.assign({}, ui.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = Z.UNSET_INDEX, this.focusedItemIndex_ = Z.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return pt;
  }
  static get numbers() {
    return Z;
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
      if (!Ke(i)) {
        const n = i === Z.UNSET_INDEX;
        this.selectedIndex_ = n ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
    } else if (Ke(i))
      if (i.size) {
        const n = Array.from(i).sort(Wt);
        this.selectedIndex_ = n[0];
      } else
        this.selectedIndex_ = Z.UNSET_INDEX;
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
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_($t(e)) : this.setSingleSelectionAtIndex_(e));
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
    const r = ye(e) === "ArrowLeft", a = ye(e) === "ArrowUp", o = ye(e) === "ArrowRight", s = ye(e) === "ArrowDown", d = ye(e) === "Home", u = ye(e) === "End", h = ye(e) === "Enter", f = ye(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      a || u ? (e.preventDefault(), this.focusLastElement()) : (s || d) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let v = this.adapter.getFocusedElementIndex();
    if (v === -1 && (v = n, v < 0))
      return;
    let y;
    if (this.isVertical_ && s || !this.isVertical_ && o)
      this.preventDefaultEvent(e), y = this.focusNextElement(v);
    else if (this.isVertical_ && a || !this.isVertical_ && r)
      this.preventDefaultEvent(e), y = this.focusPrevElement(v);
    else if (d)
      this.preventDefaultEvent(e), y = this.focusFirstElement();
    else if (u)
      this.preventDefaultEvent(e), y = this.focusLastElement();
    else if ((h || f) && i) {
      const S = e.target;
      if (S && S.tagName === "A" && h)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(v, !0);
    }
    this.focusedItemIndex_ = v, y !== void 0 && (this.setTabindexAtIndex_(y), this.focusedItemIndex_ = y);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, i, n) {
    e !== Z.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, i, n), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
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
    lo.indexOf(n) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, i = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== Z.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), i && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, i = !0) {
    const n = $t(this.selectedIndex_), r = co(n, e);
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
    this.selectedIndex_ === Z.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, pt.ARIA_CURRENT));
    const i = this.ariaCurrentAttrValue_ !== null, n = i ? pt.ARIA_CURRENT : pt.ARIA_SELECTED;
    this.selectedIndex_ !== Z.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, n, "false");
    const r = i ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, n, r);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === Z.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== Z.UNSET_INDEX ? e = this.selectedIndex_ : Ke(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
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
      return e === Z.UNSET_INDEX || this.isIndexInRange_(e);
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
    this.isMulti_ && (r = /* @__PURE__ */ new Set([e])), this.isIndexValid_(r) && (this.isMulti_ ? this.toggleMultiAtIndex(e, n, i) : i || n ? this.setSingleSelectionAtIndex_(e, i) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(Z.UNSET_INDEX), i && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, i, n = !0) {
    let r = !1;
    i === void 0 ? r = !this.adapter.getSelectedStateForElementIndex(e) : r = i;
    const a = $t(this.selectedIndex_);
    r ? a.add(e) : a.delete(e), this.setMultiSelectionAtIndex_(a, n);
  }
}
function uo(t, e = 50) {
  let i;
  return function(n = !0) {
    clearTimeout(i), i = setTimeout(() => {
      t(n);
    }, e);
  };
}
const mt = (t) => t.hasAttribute("mwc-list-item");
function po() {
  const t = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), t();
}
class ne extends ai {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = ui, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = uo(this.layout.bind(this));
    this.debouncedLayout = (i = !0) => {
      po.call(this), e(i);
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
      mt(o) && (n.push(o), o._managingList = this), o.hasAttribute("divider") && !o.hasAttribute("role") && o.setAttribute("role", "separator");
    this.items_ = n;
    const r = /* @__PURE__ */ new Set();
    if (this.items_.forEach((o, s) => {
      this.itemRoles ? o.setAttribute("role", this.itemRoles) : o.removeAttribute("role"), o.selected && r.add(s);
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
    if (!Ke(e))
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
    return c`
      <!-- @ts-ignore -->
      <ul
          tabindex=${n}
          role="${te(e)}"
          aria-label="${te(i)}"
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
    return this.emptyMessage !== void 0 && i.length === 0 ? c`
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
      const i = this.getIndexOfTarget(e), n = e.target, r = mt(n);
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
      if (Tr(r) && mt(r) && (a = i.indexOf(r)), a !== -1)
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
      isFocusInsideList: () => Pr(this),
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
    const e = hn();
    if (!e.length)
      return -1;
    for (let i = e.length - 1; i >= 0; i--) {
      const n = e[i];
      if (mt(n))
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
m([
  p({ type: String })
], ne.prototype, "emptyMessage", void 0);
m([
  T(".mdc-deprecated-list")
], ne.prototype, "mdcRoot", void 0);
m([
  on("", !0, "*")
], ne.prototype, "assignedElements", void 0);
m([
  on("", !0, '[tabindex="0"]')
], ne.prototype, "tabbableElements", void 0);
m([
  p({ type: Boolean }),
  le(function(t) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(t);
  })
], ne.prototype, "activatable", void 0);
m([
  p({ type: Boolean }),
  le(function(t, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(t), e !== void 0 && this.layout();
  })
], ne.prototype, "multi", void 0);
m([
  p({ type: Boolean }),
  le(function(t) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(t);
  })
], ne.prototype, "wrapFocus", void 0);
m([
  p({ type: String }),
  le(function(t, e) {
    e !== void 0 && this.updateItems();
  })
], ne.prototype, "itemRoles", void 0);
m([
  p({ type: String })
], ne.prototype, "innerRole", void 0);
m([
  p({ type: String })
], ne.prototype, "innerAriaLabel", void 0);
m([
  p({ type: Boolean })
], ne.prototype, "rootTabbable", void 0);
m([
  p({ type: Boolean, reflect: !0 }),
  le(function(t) {
    var e, i;
    if (t) {
      const n = (i = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && i !== void 0 ? i : null;
      this.previousTabindex = n, n && n.setAttribute("tabindex", "-1");
    } else !t && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], ne.prototype, "noninteractive", void 0);
var mo = Object.defineProperty, ho = Object.getOwnPropertyDescriptor, Pe = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? ho(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && mo(e, i, r), r;
};
function Kt(t) {
  return !t.closest("filtered-list") || !t.parentElement || t.parentElement instanceof de ? t : Kt(t.parentElement);
}
function fo(t, e) {
  const i = t.innerText + `
`, n = Array.from(t.children).map((s) => s.innerText).join(`
`), r = t.value, a = (i + n + r).toUpperCase(), o = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  o.length === 1 && o[0] === "" || o.every((s) => new RegExp(
    `*${s}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(a)) ? Kt(t).classList.remove("hidden") : Kt(t).classList.add("hidden");
}
let de = class extends ne {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((t) => t instanceof Oe);
  }
  get isAllSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof Oe).every((t) => t.selected);
  }
  get isSomeSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof Oe).some((t) => t.selected);
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
      (t) => fo(t, this.searchField.value)
    );
  }
  onListItemConnected(t) {
    super.onListItemConnected(t), this.requestUpdate();
  }
  update(t) {
    super.update(t), this.onFilterInput();
  }
  renderCheckAll() {
    return this.existCheckListItem && !this.disableCheckAll ? c`<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
      this.onCheckAll();
    }}
          ></mwc-checkbox
        ></mwc-formfield>` : c``;
  }
  render() {
    return c`<div id="tfcontainer">
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
de.styles = q`
    ${er(ar.styles)}

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
  p({ type: String })
], de.prototype, "searchFieldLabel", 2);
Pe([
  p({ type: Boolean })
], de.prototype, "disableCheckAll", 2);
Pe([
  C()
], de.prototype, "existCheckListItem", 1);
Pe([
  C()
], de.prototype, "isAllSelected", 1);
Pe([
  C()
], de.prototype, "isSomeSelected", 1);
Pe([
  T("mwc-textfield")
], de.prototype, "searchField", 2);
de = Pe([
  z("filtered-list")
], de);
const bo = [
  "IP",
  "IP-SUBNET",
  "W-FACTOR",
  "K-FACTOR",
  "TIMEOUT-0",
  "TIMEOUT-1",
  "TIMEOUT-2",
  "TIMEOUT-3"
], kt = [
  "W-FACTOR",
  "K-FACTOR",
  "TIMEOUT-0",
  "TIMEOUT-1",
  "TIMEOUT-2",
  "TIMEOUT-3"
], At = ["IP", "IP-SUBNET"], xe = {
  IP: "([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])[.]([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])[.]([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])[.]([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])",
  factor: "[1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9]|[1-3][0-2][0-7][0-6][0-7]",
  timeout: "[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]"
}, En = {
  IP: xe.IP,
  "IP-SUBNET": xe.IP,
  "W-FACTOR": xe.factor,
  "K-FACTOR": xe.factor,
  "TIMEOUT-0": xe.timeout,
  "TIMEOUT-1": xe.timeout,
  "TIMEOUT-2": xe.timeout,
  "TIMEOUT-3": xe.timeout
}, go = [
  "controlling-station",
  "controlled-station"
], Cn = {
  StationType: "protocol104.network.connectedAp.wizard.stationTypeHelper",
  IP: "protocol104.network.connectedAp.wizard.ipHelper",
  "IP-SUBNET": "protocol104.network.connectedAp.wizard.ipSubnetHelper",
  "W-FACTOR": "protocol104.network.connectedAp.wizard.wFactorHelper",
  "K-FACTOR": "protocol104.network.connectedAp.wizard.kFactorHelper",
  "TIMEOUT-0": "protocol104.network.connectedAp.wizard.timeout0Helper",
  "TIMEOUT-1": "protocol104.network.connectedAp.wizard.timeout1Helper",
  "TIMEOUT-2": "protocol104.network.connectedAp.wizard.timeout2Helper",
  "TIMEOUT-3": "protocol104.network.connectedAp.wizard.timeout3Helper"
}, yo = {
  "OSI-TSEL": 8,
  "OSI-SSEL": 16,
  "OSI-PSEL": 16,
  "OSI-AP-Invoke": 5,
  "OSI-AE-Qualifier": 5,
  "OSI-AE-Invoke": 5,
  "OSI-NSAP": 40,
  "IP-ClassOfTraffic": 2
};
function re(t, e) {
  let i = t;
  const n = [];
  do {
    let r;
    switch (i.tagName) {
      case "LN":
      case "LN0": {
        const a = i.getAttribute("prefix"), o = Di(i);
        r = `${a ? a + "-" : ""}${i.getAttribute(
          "lnClass"
        )}${o ? "-" + o : ""}`;
        break;
      }
      case "LDevice": {
        r = J(i) ?? Di(i);
        break;
      }
      default:
        r = J(i);
    }
    r && n.unshift(r), i = i.parentElement;
  } while (i && i.tagName != e);
  return n.join(" / ");
}
function _t(t) {
  const e = t.closest("LN0, LN");
  if (e) {
    const i = e.getAttribute("lnType"), n = t.getAttribute("name"), r = t.ownerDocument.querySelector(
      `:root > DataTypeTemplates > LNodeType[id="${i}"] > DO[name="${n}"]`
    );
    if (r)
      return it(r);
  }
  return null;
}
function it(t) {
  const e = Y(t), i = t.ownerDocument.querySelector(
    `:root > DataTypeTemplates > DOType[id="${e}"]`
  );
  return i ? i.getAttribute("cdc") : null;
}
const vo = [
  "casdu",
  "ioa",
  "ti",
  "expectedValue",
  "unitMultiplier",
  "scaleMultiplier",
  "scaleOffset",
  "inverted",
  "check"
];
function xo(t, e) {
  return vo.filter((i) => e.hasAttribute(i)).map((i) => {
    const n = e.getAttribute(i);
    if (i === "expectedValue") {
      const r = Nn(t, n);
      return `${i}: ${n}${r ? ` (${r})` : ""}`;
    } else
      return `${i}: ${n}`;
  }).join(", ");
}
function Y(t) {
  const e = t.getAttribute("type");
  return e || void 0;
}
function So(t, e) {
  const i = Y(t);
  return i ? t.ownerDocument.querySelector(
    `:root > DataTypeTemplates > DOType[id="${i}"] > DA[name="${e}"]`
  ) : null;
}
function wo(t, e) {
  const i = So(t, e);
  return i ? i.querySelector(":scope > Val")?.textContent ?? null : null;
}
function ko(t, e) {
  return t.querySelector(`:scope > DAI[name="${e}"]`);
}
function Ao(t, e) {
  const i = ko(t, e);
  return i ? i.querySelector(":scope > Val")?.textContent ?? null : null;
}
function _o(t, e) {
  return t.querySelector(`:scope > DOI[name="${e}"]`);
}
function Eo(t, e) {
  const i = t.getAttribute("lnType");
  return i ? t.ownerDocument.querySelector(
    `:root > DataTypeTemplates > LNodeType[id="${i}"] > DO[name="${e}"]`
  ) : null;
}
function Co(t) {
  const e = t.getAttribute("lnType");
  return e ? Array.from(
    t.ownerDocument.querySelectorAll(
      `:root > DataTypeTemplates > LNodeType[id="${e}"] > DO`
    )
  ) : [];
}
function pi(t, e) {
  const i = J(e);
  if (i) {
    const n = _o(t, i);
    return n ? Ao(n, "ctlModel") : wo(e, "ctlModel");
  }
  return null;
}
function No(t) {
  const e = [t];
  let i = t;
  if (i.parentElement)
    do
      i = i.parentElement, e.unshift(i);
    while (i.tagName !== "DOI" && i.parentElement);
  return e;
}
function Io(t, e) {
  const i = [];
  let n;
  return e.forEach((r) => {
    if (r.tagName === "DOI") {
      const o = r.closest("LN, LN0").getAttribute("lnType") ?? "";
      if (n = t.querySelector(
        `:root > DataTypeTemplates > LNodeType[id="${o}"]`
      ), n) {
        const s = r.getAttribute("name"), d = n.querySelector(
          `:scope > DO[name="${s}"]`
        );
        if (d) {
          i.push(d);
          const u = Y(d) ?? "";
          n = t.querySelector(
            `:root > DataTypeTemplates > DOType[id="${u}"]`
          );
        } else
          n = null;
      }
    } else if (["SDI", "DAI"].includes(r.tagName) && n) {
      const a = r.getAttribute("name"), o = n?.querySelector(
        `:scope > DA[name="${a}"], :scope > BDA[name="${a}"]`
      );
      if (o)
        if (i.push(o), o.getAttribute("bType") === "Struct") {
          const s = Y(r) ?? "";
          n = t.querySelector(
            `:root > DataTypeTemplates > DAType[id="${s}"]`
          );
        } else
          n = null;
      else
        n = null;
    }
  }), i;
}
function mi(t) {
  const e = No(t), i = Io(
    t.ownerDocument,
    e
  );
  if (i.length > 0) {
    const n = i.pop();
    if (["DA", "BDA"].includes(n.tagName))
      return n;
  }
}
function hi(t) {
  return t?.getAttribute("bType") === "Enum";
}
function Do(t) {
  const e = mi(t);
  return hi(e);
}
function Nn(t, e) {
  const i = mi(t);
  if (hi(i)) {
    const n = Y(i), r = t.ownerDocument.querySelector(
      `:root > DataTypeTemplates > EnumType[id="${n}"] > EnumVal[ord="${e}"]`
    );
    if (r)
      return r.textContent;
  }
  return null;
}
function To(t) {
  const e = [], i = mi(t);
  if (hi(i)) {
    const n = Y(i), r = t.ownerDocument.querySelectorAll(
      `:root > DataTypeTemplates > EnumType[id="${n}"] > EnumVal`
    );
    Array.from(r).filter((a) => a.getAttribute("ord")).map((a) => e.push(a.getAttribute("ord")));
  }
  return e;
}
function qi(t, e) {
  if (["LN0", "LN"].includes(e.tagName))
    return t;
  const i = [];
  let n = e;
  for (; n && !["LN0", "LN"].includes(n.tagName); )
    i.unshift(n), n = n?.parentElement;
  let r = t;
  for (; r != null && i.length > 0; ) {
    const a = i.shift();
    if (a) {
      const o = J(a);
      r = r.querySelector(
        `:scope > DOI[name="${o}"], :scope > SDI[name="${o}"], :scope > DAI[name="${o}"]`
      );
    } else
      r = null;
  }
  return r;
}
function Et(t, e) {
  return c`<wizard-textfield
    required
    label="${t}"
    pattern="${te(En[t])}"
    .maybeValue=${e ?? null}
    maxLength="${te(yo[t])}"
    helper="${l(Cn[t])}"
  ></wizard-textfield>`;
}
var ze = /* @__PURE__ */ ((t) => (t[t.VALUES = 0] = "VALUES", t[t.NETWORK = 1] = "NETWORK", t))(ze || {});
const In = "view-change-104-plugin";
function Ui(t) {
  return new CustomEvent(In, {
    bubbles: !0,
    composed: !0,
    detail: { view: t }
  });
}
function Lo(t, e, i) {
  return [
    {
      title: l("protocol104.network.logicLink.wizard.title.edit"),
      menuActions: [
        {
          icon: "delete",
          label: l("remove"),
          action: Po(t, e, i)
        }
      ],
      primary: {
        icon: "save",
        label: l("save"),
        action: Ro(t, e, i)
      },
      content: [
        c`<wizard-textfield
            readOnly
            label="${l(
          "protocol104.network.logicLink.wizard.logicLinkNumberLabel"
        )}"
            .maybeValue=${i}
          ></wizard-textfield>
          ${At.map(
          (n) => c`${Et(
            n,
            t.querySelector(
              `Address > P[type$="RG${e}-LL${i}-${n}"]`
            )?.innerHTML
          )}`
        )}`
      ]
    }
  ];
}
function $o(t, e, i) {
  let n = 1;
  for (; i.find((r) => r == n); )
    n++;
  return [
    {
      title: l("protocol104.network.logicLink.wizard.title.add"),
      primary: {
        icon: "",
        label: l("save"),
        action: zo(t, e, n)
      },
      content: [
        c`<wizard-textfield
            readOnly
            label="${l(
          "protocol104.network.logicLink.wizard.logicLinkNumberLabel"
        )}"
            value="${n}"
          ></wizard-textfield>
          ${At.map(
          (r) => c`${Et(r)}`
        )}`
      ]
    }
  ];
}
function Po(t, e, i) {
  return (n) => {
    const r = t.querySelector("Address"), a = {
      actions: [],
      title: l("protocol104.network.logicLink.wizard.removedLogicLink", {
        subNetworkName: t.parentElement.getAttribute("name"),
        apName: t.getAttribute("apName"),
        iedName: t.getAttribute("iedName")
      })
    };
    r.querySelectorAll(`P[type^="RG${e}-LL${i}-"]`).forEach((o) => {
      a.actions.push({
        old: {
          parent: r,
          element: o
        }
      });
    }), n.dispatchEvent(et(a)), n.dispatchEvent(Q());
  };
}
function Ro(t, e, i) {
  return (n) => {
    const r = [];
    return At.forEach((a) => {
      const o = R(n.find((d) => d.label === a)), s = t.querySelector(
        `Address > P[type="RG${e}-LL${i}-${a}"]`
      );
      if (s == null) {
        const d = ce(t.ownerDocument, "P", {
          type: `RG${e}-LL${i}-${a}`
        });
        d.textContent = R(n.find((u) => u.label === a)), r.push({
          new: {
            parent: t.querySelector("Address"),
            element: d
          }
        });
      } else if (o !== s?.textContent) {
        const d = St(s, {});
        d.textContent = o, r.push({
          old: {
            element: s
          },
          new: {
            element: d
          }
        });
      }
    }), r.length != 0 ? [
      {
        actions: r,
        title: l("protocol104.network.logicLink.wizard.editedLogicLink", {
          subNetworkName: t.parentElement.getAttribute("name"),
          apName: t.getAttribute("apName"),
          iedName: t.getAttribute("iedName")
        })
      }
    ] : [];
  };
}
function zo(t, e, i) {
  return (n) => {
    const r = {
      actions: [],
      title: l("protocol104.network.logicLink.wizard.addedLogicLink", {
        subNetworkName: t.parentElement.getAttribute("name"),
        apName: t.getAttribute("apName"),
        iedName: t.getAttribute("iedName")
      })
    };
    return At.forEach((a) => {
      const o = ce(t.ownerDocument, "P", {
        type: `RG${e}-LL${i}-${a}`
      });
      o.textContent = R(n.find((s) => s.label === a)), r.actions.push({
        new: {
          parent: t.querySelector("Address"),
          element: o
        }
      });
    }), [r];
  };
}
function Oo(t, e) {
  const i = Bo(t, e);
  return [
    {
      title: l("protocol104.network.redundancyGroup.wizard.title.edit"),
      menuActions: [
        {
          icon: "playlist_add",
          label: l("protocol104.network.redundancyGroup.wizard.addLogicLink"),
          action: (n) => {
            n.dispatchEvent(
              Ve(
                $o(t, e, i)
              )
            );
          }
        },
        {
          icon: "delete",
          label: l("remove"),
          action: Mo(t, e)
        }
      ],
      primary: {
        icon: "save",
        label: l("save"),
        action: Fo(t, e)
      },
      content: [
        c`<wizard-textfield
            readOnly
            label="${l(
          "protocol104.network.redundancyGroup.wizard.redundancyGroupNumberLabel"
        )}"
            .maybeValue=${e}
          ></wizard-textfield>
          ${kt.map(
          (n) => c`${Et(
            n,
            t.querySelector(
              `Address > P[type$="RG${e}-${n}"]`
            )?.innerHTML
          )}`
        )}
          <h3>
            ${l(
          "protocol104.network.redundancyGroup.wizard.logicLinkGroupTitle"
        )}
          </h3>
          <mwc-list
            @selected=${(n) => {
          n.target.dispatchEvent(
            Ve(
              () => Lo(
                t,
                e,
                i[n.detail.index]
              )
            )
          );
        }}
          >
            ${i.length != 0 ? i.map(
          (n) => c`<mwc-list-item>Logic Link ${n}</mwc-list-item>`
        ) : c`<p>
                  ${l(
          "protocol104.network.redundancyGroup.wizard.noLogicLinksAvailable"
        )}
                </p>`}
          </mwc-list>`
      ]
    }
  ];
}
function Vo(t, e) {
  let i = 1;
  for (; e.find((n) => n == i); )
    i++;
  return [
    {
      title: l("protocol104.network.redundancyGroup.wizard.title.add"),
      primary: {
        icon: "",
        label: l("save"),
        action: Ho(t, i)
      },
      content: [
        c`<wizard-textfield
            readOnly
            label="${l(
          "protocol104.network.redundancyGroup.wizard.redundancyGroupNumberLabel"
        )}"
            value="${i}"
          ></wizard-textfield>
          ${kt.map(
          (n) => c`${Et(n)}`
        )}`
      ]
    }
  ];
}
function Mo(t, e) {
  return (i) => {
    const n = t.querySelector("Address"), r = {
      actions: [],
      title: l(
        "protocol104.network.redundancyGroup.wizard.removedRedundancyGroup",
        {
          rGNumber: e,
          subNetworkName: t.parentElement.getAttribute("name"),
          apName: t.getAttribute("apName"),
          iedName: t.getAttribute("iedName")
        }
      )
    };
    n.querySelectorAll(`P[type^="RG${e}-"]`).forEach((a) => {
      r.actions.push({
        old: {
          parent: n,
          element: a
        }
      });
    }), i.dispatchEvent(et(r)), i.dispatchEvent(Q());
  };
}
function Fo(t, e) {
  return (i) => {
    const n = [];
    return kt.forEach((r) => {
      const a = R(i.find((s) => s.label === r)), o = t.querySelector(
        `Address > P[type="RG${e}-${r}"]`
      );
      if (o == null) {
        const s = ce(t.ownerDocument, "P", {
          type: `RG${e}-${r}`
        });
        s.textContent = a, n.push({
          new: {
            parent: t.querySelector("Address"),
            element: s
          }
        });
      } else if (a !== o?.textContent) {
        const s = St(o, {});
        s.textContent = a, n.push({
          old: {
            element: o
          },
          new: {
            element: s
          }
        });
      }
    }), n.length != 0 ? [
      {
        actions: n,
        title: l(
          "protocol104.network.redundancyGroup.wizard.editedRedundancyGroup",
          {
            rGNumber: e,
            subNetworkName: t.parentElement.getAttribute("name"),
            apName: t.getAttribute("apName"),
            iedName: t.getAttribute("iedName")
          }
        )
      }
    ] : [];
  };
}
function Ho(t, e) {
  return (i) => {
    const n = {
      actions: [],
      title: l(
        "protocol104.network.redundancyGroup.wizard.addedLRedundancyGroup",
        {
          rGNumber: e,
          subNetworkName: t.parentElement.getAttribute("name"),
          apName: t.getAttribute("apName"),
          iedName: t.getAttribute("iedName")
        }
      )
    };
    return kt.forEach((r) => {
      const a = ce(t.ownerDocument, "P", {
        type: `RG${e}-${r}`
      });
      a.textContent = R(i.find((o) => o.label === r)), n.actions.push({
        new: {
          parent: t.querySelector("Address"),
          element: a
        }
      });
    }), [n];
  };
}
function Bo(t, e) {
  const i = [];
  return t.querySelectorAll(`Address > P[type^="RG${e}-LL"]`).forEach((n) => {
    const r = Y(n)?.split("-")[1], a = Number(r?.substring(2));
    i.includes(a) || i.push(a);
  }), i.sort();
}
function Go(t, e) {
  return t.connected !== e.connected ? e.connected ? -1 : 1 : 0;
}
function qo(t) {
  return (e, i, n) => n ? n.selected.map((o) => o.value).map((o) => {
    const [s, d] = o.split(">");
    return {
      new: {
        parent: t,
        element: ce(t.ownerDocument, "ConnectedAP", {
          iedName: s,
          apName: d
        })
      }
    };
  }) : [];
}
function Uo(t) {
  const e = t.closest("IED")?.getAttribute("name"), i = t.getAttribute("name"), n = t.ownerDocument.querySelector(
    `ConnectedAP[iedName="${e}"][apName="${i}"]`
  );
  return (n && bt(n)) ?? !1;
}
function jo(t) {
  const e = t.ownerDocument, i = Array.from(e.querySelectorAll(":root > IED")).sort(De).flatMap(
    (n) => Array.from(n.querySelectorAll(":root > IED > AccessPoint"))
  ).map((n) => ({
    element: n,
    connected: Uo(n)
  })).sort(Go);
  return [
    {
      title: l("wizard.title.add", { tagName: "ConnectedAP" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: qo(t)
      },
      content: [
        c` <filtered-list id="apList" multi
          >${i.map((n) => {
          const r = N(n.element);
          return c`<mwc-check-list-item
              value="${r}"
              ?disabled=${n.connected}
              ><span>${r}</span></mwc-check-list-item
            >`;
        })}
        </filtered-list>`
      ]
    }
  ];
}
function Wo(t, e) {
  return Array.from(t.querySelectorAll("Address > P")).every(
    (i) => e.querySelector(`Address > P[type="${Y(i)}"]`)?.isEqualNode(i)
  );
}
function Ko(t, e, i) {
  const n = ce(e.ownerDocument, "Address", {});
  return t.filter((r) => R(r) !== null).forEach((r) => {
    const a = r.label, o = ce(e.ownerDocument, "P", { type: a });
    i && o.setAttributeNS(
      "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:type",
      "tP_" + a
    ), o.textContent = R(r), n.appendChild(o);
  }), n;
}
function Dn(t, e) {
  const i = Qo(t);
  return [
    {
      title: l("protocol104.network.connectedAp.wizard.title.edit"),
      element: t,
      menuActions: e ? [
        {
          icon: "playlist_add",
          label: l(
            "protocol104.network.connectedAp.wizard.addRedundancyGroup"
          ),
          action: Zo(t, i)
        }
      ] : void 0,
      primary: {
        icon: "save",
        label: l("save"),
        action: Xo(t, e)
      },
      content: [
        c`<mwc-formfield
            label="${l(
          "protocol104.network.connectedAp.wizard.redundancySwitchLabel"
        )}"
          >
            <mwc-switch
              id="redundancy"
              ?checked=${e}
              @change=${(n) => {
          n.target.dispatchEvent(Q()), n.target.dispatchEvent(
            Ve(
              () => Dn(t, !e)
            )
          );
        }}
            ></mwc-switch>
          </mwc-formfield>
          <wizard-divider></wizard-divider>
          ${Yo(t)}
          <wizard-select
            label="StationType"
            .maybeValue=${t.querySelector(
          'Address > P[type="StationType"]'
        )?.innerHTML ?? null}
            required
            fixedMenuPosition
            helper="${l(Cn.StationType)}"
          >
            ${go.map(
          (n) => c`<mwc-list-item value="${n}">${n}</mwc-list-item>`
        )}
          </wizard-select>
          ${e ? c`<h3>
                  ${l(
          "protocol104.network.connectedAp.wizard.redundancyGroupTitle"
        )}
                </h3>
                <mwc-list
                  @selected=${(n) => {
          n.target.dispatchEvent(
            Ve(
              () => Oo(
                t,
                i[n.detail.index]
              )
            )
          );
        }}
                >
                  ${i.length != 0 ? i.map(
          (n) => c`<mwc-list-item
                            >Redundancy Group ${n}</mwc-list-item
                          >`
        ) : c`<p>
                        ${l(
          "protocol104.network.connectedAp.wizard.noRedundancyGroupsAvailable"
        )}
                      </p>`}
                </mwc-list>` : c`${bo.map(
          (n) => c`${Jo(t, n)}`
        )}`} `
      ]
    }
  ];
}
function Xo(t, e) {
  return (i, n) => {
    const r = n.shadowRoot?.querySelector("#typeRestriction")?.checked ?? !1, a = Ko(i, t, r), o = t.querySelector("Address"), s = {
      actions: [],
      title: l("connectedap.action.addaddress", {
        iedName: t.getAttribute("iedName") ?? "",
        apName: t.getAttribute("apName") ?? ""
      })
    };
    if (e) {
      const d = R(
        i.find((f) => f.label === "StationType")
      ), u = o?.querySelector(
        'P[type="StationType"]'
      ), h = St(u, {});
      h.textContent = d, s.actions.push({
        old: {
          element: u
        },
        new: {
          element: h
        }
      });
    } else o !== null && !Wo(o, a) ? (s.actions.push({
      old: {
        parent: t,
        element: o
      }
    }), s.actions.push({
      new: {
        parent: t,
        element: a
      }
    })) : o === null && s.actions.push({
      new: {
        parent: t,
        element: a
      }
    });
    return s.actions.length ? [s] : [];
  };
}
function Zo(t, e) {
  return (i) => {
    i.dispatchEvent(
      Ve(Vo(t, e))
    );
  };
}
function Qo(t) {
  const e = [];
  return t.querySelectorAll('Address > P[type^="RG"]').forEach((i) => {
    const n = Y(i)?.split("-")[0], r = Number(n?.substring(2));
    e.includes(r) || e.push(r);
  }), e.sort();
}
function Jo(t, e) {
  return c`<wizard-textfield
    required
    label="${e}"
    pattern="${te(En[e])}"
    .maybeValue=${t.querySelector(`Address > P[type="${e}"]`)?.innerHTML ?? null}
  ></wizard-textfield>`;
}
function Yo(t) {
  return c`<mwc-formfield
    label="${l("connectedap.wizard.addschemainsttype")}"
    ><mwc-checkbox
      id="typeRestriction"
      ?checked=${es(t)}
    ></mwc-checkbox>
  </mwc-formfield>`;
}
function es(t) {
  return Array.from(t.querySelectorAll("Address > P")).filter((e) => bt(e)).some((e) => e.getAttribute("xsi:type"));
}
var ts = Object.defineProperty, Tn = (t, e, i, n) => {
  for (var r = void 0, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = o(e, i, r) || r);
  return r && ts(e, i, r), r;
};
class Ee extends be {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
}
Tn([
  p()
], Ee.prototype, "doc");
Tn([
  p({ type: Number })
], Ee.prototype, "editCount");
var is = Object.defineProperty, ns = Object.getOwnPropertyDescriptor, Ln = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? ns(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && is(e, i, r), r;
};
let Xt = class extends Ee {
  openEditWizard() {
    this.dispatchEvent(
      Q(
        () => Dn(
          this.element,
          this.element.querySelectorAll('Address > P[type^="RG"]').length > 0
        )
      )
    );
  }
  remove() {
    this.element && this.dispatchEvent(
      et({
        old: {
          parent: this.element.parentElement,
          element: this.element,
          reference: this.element.nextSibling
        }
      })
    );
  }
  render() {
    return c`
      <action-icon
        label="${this.element.getAttribute("apName") ?? "UNDEFINED"}"
        icon="settings_input_hdmi"
        ><mwc-fab
          slot="action"
          mini
          icon="edit"
          @click="${() => this.openEditWizard()}"
        ></mwc-fab>
        <mwc-fab
          slot="action"
          mini
          icon="delete"
          @click="${() => this.remove()}}"
        ></mwc-fab
      ></action-icon>
    `;
  }
};
Ln([
  p({ attribute: !1 })
], Xt.prototype, "element", 2);
Xt = Ln([
  z("connectedap-104-editor")
], Xt);
var rs = Object.defineProperty, as = Object.getOwnPropertyDescriptor, $n = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? as(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && rs(e, i, r), r;
};
let gt = class extends Ee {
  get bitrate() {
    const t = this.element.querySelector("BitRate");
    if (t === null) return null;
    const e = t.textContent ?? "", i = t.getAttribute("multiplier"), n = i === null ? "b/s" : " " + i + "b/s";
    return e ? e + n : null;
  }
  openConnectedAPwizard() {
    this.dispatchEvent(Q(jo(this.element)));
  }
  renderIedContainer() {
    return Array.from(this.element.querySelectorAll(":scope > ConnectedAP")).map((t) => t.getAttribute("iedName")).filter((t, e, i) => i.indexOf(t) === e).sort(De).map(
      (t) => c` <action-pane id="iedSection" label="${t}">
          ${Array.from(
        this.element.parentElement?.querySelectorAll(
          `:scope > SubNetwork > ConnectedAP[iedName="${t}"]`
        ) ?? []
      ).map(
        (e) => c`<connectedap-104-editor
                class="${e.parentElement !== this.element ? "disabled" : ""}"
                .editCount=${this.editCount}
                .doc="${this.doc}"
                .element=${e}
              ></connectedap-104-editor>`
      )}
        </action-pane>`
    );
  }
  subNetworkSpecs() {
    const t = Y(this.element) ?? null;
    return !t && !this.bitrate ? "" : `(${t}${t && this.bitrate ? ` — ${this.bitrate}` : ""})`;
  }
  header() {
    const t = this.element.getAttribute("desc") ?? null;
    return ` ${this.element.getAttribute("name") ?? void 0} ${t === null ? "" : `— ${t}`}
    ${this.subNetworkSpecs()}`;
  }
  render() {
    return c`<action-pane label="${this.header()}">
      <abbr slot="action" title="${l("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click="${() => this.openConnectedAPwizard()}"
        ></mwc-icon-button>
      </abbr>
      <div id="iedContainer">${this.renderIedContainer()}</div>
    </action-pane> `;
  }
};
gt.styles = q`
    #iedContainer {
      display: grid;
      box-sizing: border-box;
      gap: 12px;
      padding: 8px 12px 16px;
      grid-template-columns: repeat(auto-fit, minmax(150px, auto));
    }

    #iedSection:not(:focus):not(:focus-within) .disabled {
      display: none;
    }

    #iedSection .disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  `;
$n([
  p({ attribute: !1 })
], gt.prototype, "element", 2);
gt = $n([
  z("subnetwork-104-container")
], gt);
const Pt = {
  type: "104",
  bitrate: "100",
  multiplier: "M"
};
function os(t) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${l("subnetwork.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${l("subnetwork.wizard.descHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      nullable
      helper="${l("subnetwork.wizard.typeHelper")}"
      pattern="${ft.normalizedString}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="BitRate"
      .maybeValue=${t.BitRate}
      nullable
      unit="b/s"
      .multipliers=${[null, "M"]}
      .multiplier=${t.multiplier}
      helper="${l("subnetwork.wizard.bitrateHelper")}"
      required
      validationMessage="${l("textfield.nonempty")}"
      pattern="${ft.decimal}"
    ></wizard-textfield>`
  ];
}
function ss(t) {
  return (e) => {
    const i = R(e.find((u) => u.label === "name")), n = R(e.find((u) => u.label === "desc")), r = R(e.find((u) => u.label === "type")), a = R(e.find((u) => u.label === "BitRate")), o = ra(e.find((u) => u.label === "BitRate")), s = ce(t.ownerDocument, "SubNetwork", {
      name: i,
      desc: n,
      type: r
    });
    if (a !== null) {
      const u = ce(t.ownerDocument, "BitRate", {
        unit: "b/s",
        multiplier: o
      });
      u.textContent = a, s.appendChild(u);
    }
    return [{
      new: {
        parent: t,
        element: s
      }
    }];
  };
}
function cs(t) {
  return [
    {
      title: l("wizard.title.add", { tagName: "SubNetwork" }),
      primary: {
        icon: "add",
        label: l("add"),
        action: ss(t)
      },
      content: os({
        name: "",
        desc: "",
        type: Pt.type,
        BitRate: Pt.bitrate,
        multiplier: Pt.multiplier
      })
    }
  ];
}
var ds = Object.getOwnPropertyDescriptor, ls = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? ds(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = o(r) || r);
  return r;
};
let Zt = class extends Ee {
  getSubNetworkElements() {
    return Array.from(
      this.doc.querySelectorAll("Communication > SubNetwork") ?? []
    ).filter((t) => Y(t) === "104").sort((t, e) => De(t, e));
  }
  /** Opens a [[`WizardDialog`]] for creating a new `SubNetwork` element. */
  openCreateSubNetworkWizard() {
    const t = this.doc.querySelector(":root > Communication");
    t || this.dispatchEvent(
      et({
        new: {
          parent: this.doc.documentElement,
          element: ce(this.doc, "Communication", {})
        }
      })
    ), this.dispatchEvent(Q(cs(t)));
  }
  render() {
    return c`<mwc-fab
        extended
        icon="add"
        label="${l("subnetwork.wizard.title.add")}"
        @click=${() => this.openCreateSubNetworkWizard()}
      ></mwc-fab>
      <section>
        ${this.getSubNetworkElements().map(
      (t) => c`<subnetwork-104-container
              .doc="${this.doc}"
              .element=${t}
            ></subnetwork-104-container>`
    )}
      </section>`;
  }
};
Zt.styles = q`
    :host {
      width: 100vw;
    }

    mwc-fab {
      position: fixed;
      bottom: 32px;
      right: 32px;
    }

    subnetwork-104-container {
      margin: 8px 12px 16px;
    }
  `;
Zt = ls([
  z("network-104-container")
], Zt);
var us = Object.defineProperty, ps = Object.getOwnPropertyDescriptor, He = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? ps(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && us(e, i, r), r;
};
function Pn(t, e) {
  const i = t.nodeType === Node.ELEMENT_NODE ? t.closest(e) : null;
  if (i) return i;
  const n = t.getRootNode();
  return n instanceof ShadowRoot ? Pn(n.host, e) : null;
}
let Ae = class extends be {
  constructor() {
    super(...arguments), this.secondary = !1, this.highlighted = !1, this.level = 1;
  }
  async firstUpdated() {
    this.tabIndex = 0;
    const t = Pn(this.parentNode, "action-pane");
    t && (this.level = t.level + 1), this.level = Math.floor(this.level);
  }
  renderHeader() {
    const t = c`<span
        ><slot name="icon"
          >${this.icon ? c`<mwc-icon>${this.icon}</mwc-icon>` : me}</slot
        ></span
      >
      ${this.label ?? me}
      <nav><slot name="action"></slot></nav>`, e = Math.floor(Math.max(this.level, 1)), i = typeof this.label == "string" ? this.label : "";
    switch (e) {
      case 1:
        return c`<h1 title="${i}">${t}</h1>`;
      case 2:
        return c`<h2 title="${i}">${t}</h2>`;
      case 3:
        return c`<h3 title="${i}">${t}</h3>`;
      default:
        return c`<h4 title="${i}">${t}</h4>`;
    }
  }
  render() {
    return c`<section
      class="${Me({
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
Ae.styles = q`
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
He([
  p({ type: String })
], Ae.prototype, "label", 2);
He([
  p({ type: String })
], Ae.prototype, "icon", 2);
He([
  p({ type: Boolean })
], Ae.prototype, "secondary", 2);
He([
  p({ type: Boolean })
], Ae.prototype, "highlighted", 2);
He([
  p({ type: Number })
], Ae.prototype, "level", 2);
Ae = He([
  z("action-pane")
], Ae);
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
const ji = Qe((t) => (e) => {
  let i;
  if (e instanceof Nr || e instanceof ni)
    throw new Error("The `live` directive is not allowed on text or event bindings");
  if (e instanceof Cr)
    Wi(e.strings), i = e.element.hasAttribute(e.name), e.value = i;
  else {
    const { element: n, name: r, strings: a } = e.committer;
    if (Wi(a), e instanceof ri) {
      if (i = n[r], i === t)
        return;
    } else e instanceof Je && (i = n.getAttribute(r));
    if (i === String(t))
      return;
  }
  e.setValue(t);
}), Wi = (t) => {
  if (t.length !== 2 || t[0] !== "" || t[1] !== "")
    throw new Error("`live` bindings can only contain a single expression");
};
function ms(t, e) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { ...t, ...e?.detail }
  });
}
const je = "http://www.iec.ch/61850/2003/SCL", fe = "IEC_60870_5_104", Rn = "http://www.iec.ch/61850-80-1/2007/IEC_60870-5-104", Ki = "IEC_60870_5_104";
function fi(t) {
  const e = t.firstElementChild;
  e.hasAttribute("xmlns:" + Ki) || e.setAttributeNS(
    "http://www.w3.org/2000/xmlns/",
    "xmlns:" + Ki,
    Rn
  );
}
function hs(t) {
  return t.querySelector(`Private[type="${fe}"]`);
}
function fs(t) {
  const e = t.createElementNS(je, "Private");
  return e.setAttribute("type", fe), e;
}
function yt(t, e) {
  const i = t.createElementNS(Rn, "Address");
  return i.setAttribute("ti", e), i;
}
function zn(t, e) {
  const i = e.shift();
  if (e.length > 0) {
    let n;
    return i.tagName === "DO" ? n = t.querySelector(
      `DOI[name="${i.getAttribute("name")}"]`
    ) : n = t.querySelector(
      `SDI[name="${i.getAttribute("name")}"]`
    ), n ? zn(
      n,
      e
    ) : (e.unshift(i), [t, e]);
  } else
    return [t, [i]];
}
function On(t) {
  const e = t.shift();
  if (t.length > 0) {
    let i;
    e.tagName === "DO" ? i = e.ownerDocument.createElementNS(je, "DOI") : i = e.ownerDocument.createElementNS(je, "SDI"), i.setAttribute("name", e?.getAttribute("name") ?? "");
    const n = On(t);
    return i.append(n), i;
  } else {
    const i = e.ownerDocument.createElementNS(
      je,
      "Val"
    ), n = e.querySelector("Val");
    n && (i.textContent = n.textContent);
    const r = e.ownerDocument.createElementNS(
      je,
      "DAI"
    );
    return r.setAttribute("name", e?.getAttribute("name") ?? ""), r.append(i), r;
  }
}
const bs = [
  "ACD",
  "ACT",
  "APC",
  "ASG",
  "BAC",
  "BCR",
  "BSC",
  "CMV",
  "DEL",
  "DPC",
  "DPS",
  "ENC",
  "ENG",
  "ENS",
  "INC",
  "ING",
  "INS",
  "ISC",
  "MV",
  "SEC",
  "SPC",
  "SPG",
  "SPS",
  "WYE"
], bi = {
  ACD: {
    monitor: {
      30: {
        daPaths: [
          { path: ["general"] },
          { path: ["phsA"] },
          { path: ["phsB"] },
          { path: ["phsC"] },
          { path: ["neut"] }
        ],
        create: k,
        inverted: !0
      },
      40: {
        daPaths: [
          { path: ["general"] },
          { path: ["phsA"] },
          { path: ["phsB"] },
          { path: ["phsC"] },
          { path: ["neut"] }
        ],
        create: k
      }
    },
    control: {}
  },
  ACT: {
    monitor: {
      30: {
        daPaths: [
          { path: ["general"] },
          { path: ["phsA"] },
          { path: ["phsB"] },
          { path: ["phsC"] },
          { path: ["neut"] }
        ],
        create: k,
        inverted: !0
      },
      39: {
        daPaths: [{ path: ["general"] }],
        create: k
      }
    },
    control: {}
  },
  APC: {
    monitor: {
      36: {
        daPaths: [{ path: ["mxVal", "f"] }],
        create: k,
        inverted: !0
      }
    },
    control: {
      63: {
        daPaths: [{ path: ["Oper", "ctlVal", "f"] }],
        create: k,
        checkDaPaths: [{ path: ["Oper", "Check"] }],
        checkCreate: pe
      }
    }
  },
  ASG: {
    monitor: {
      63: {
        daPaths: [{ path: ["setMag", "f"] }],
        create: k,
        inverted: !0
      }
    },
    control: {}
  },
  BAC: {
    monitor: {
      36: {
        daPaths: [{ path: ["mxVal", "f"] }],
        create: k,
        inverted: !0
      }
    },
    control: {
      60: {
        daPaths: [{ path: ["Oper", "ctlVal"] }],
        create: k,
        checkDaPaths: [{ path: ["Oper", "Check"] }],
        checkCreate: pe
      }
    }
  },
  BCR: {
    monitor: {
      37: {
        daPaths: [{ path: ["actVal"] }, { path: ["frVal"] }],
        create: k,
        inverted: !0
      }
    },
    control: {}
  },
  BSC: {
    monitor: {
      32: {
        daPaths: [{ path: ["valWTr", "posVal"] }],
        create: k,
        inverted: !0
      }
    },
    control: {
      60: {
        daPaths: [{ path: ["Oper", "ctlVal"] }],
        create: k,
        checkDaPaths: [{ path: ["Oper", "Check"] }],
        checkCreate: pe
      }
    }
  },
  CMV: {
    monitor: {
      35: {
        daPaths: [{ path: ["mag", "i"] }, { path: ["ang", "i"] }],
        create: k,
        inverted: !0
      },
      36: {
        daPaths: [{ path: ["mag", "f"] }, { path: ["ang", "f"] }],
        create: k,
        inverted: !0
      }
    },
    control: {}
  },
  DEL: {
    monitor: {
      35: {
        daPaths: [
          { path: ["phsAB", "cVal", "mag", "f"] },
          { path: ["phsBC", "cVal", "mag", "f"] },
          { path: ["phsCA", "cVal", "mag", "f"] }
        ],
        create: k,
        inverted: !1
      },
      36: {
        daPaths: [
          { path: ["phsAB", "cVal", "mag", "f"] },
          { path: ["phsBC", "cVal", "mag", "f"] },
          { path: ["phsCA", "cVal", "mag", "f"] }
        ],
        create: k,
        inverted: !1
      }
    },
    control: {}
  },
  DPC: {
    monitor: {
      31: {
        daPaths: [{ path: ["stVal"] }],
        create: k,
        inverted: !0
      }
    },
    control: {
      59: {
        daPaths: [{ path: ["Oper", "ctlVal"] }],
        create: k,
        checkDaPaths: [{ path: ["Oper", "Check"] }],
        checkCreate: pe
      }
    }
  },
  DPS: {
    monitor: {
      31: {
        daPaths: [{ path: ["stVal"] }],
        create: k,
        inverted: !0
      }
    },
    control: {}
  },
  ENC: {
    monitor: {
      30: {
        daPaths: [{ path: ["stVal"] }],
        create: k,
        inverted: !0
      },
      35: {
        daPaths: [{ path: ["stVal"] }],
        create: k,
        inverted: !1
      }
    },
    control: {
      58: {
        daPaths: [{ path: ["Oper", "ctlVal"] }],
        create: Rt,
        checkDaPaths: [{ path: ["Oper", "Check"] }],
        checkCreate: pe
      },
      62: {
        daPaths: [{ path: ["Oper", "ctlVal"] }],
        create: Rt,
        checkDaPaths: [{ path: ["Oper", "Check"] }],
        checkCreate: pe
      }
    }
  },
  ENG: {
    monitor: {
      58: {
        daPaths: [{ path: ["setVal"] }],
        create: Rt,
        inverted: !0
      },
      62: {
        daPaths: [{ path: ["setVal"] }],
        create: k,
        inverted: !0
      }
    },
    control: {}
  },
  ENS: {
    monitor: {
      30: {
        daPaths: [{ path: ["stVal"] }],
        create: k,
        inverted: !0
      },
      35: {
        daPaths: [{ path: ["stVal"] }],
        create: k,
        inverted: !0
      }
    },
    control: {}
  },
  INC: {
    monitor: {
      35: {
        daPaths: [{ path: ["stVal"] }],
        create: k,
        inverted: !0
      }
    },
    control: {
      62: {
        daPaths: [{ path: ["Oper", "ctlVal"] }],
        create: k,
        checkDaPaths: [{ path: ["Oper", "Check"] }],
        checkCreate: pe
      }
    }
  },
  ING: {
    monitor: {
      62: {
        daPaths: [{ path: ["setVal"] }],
        create: k,
        inverted: !0
      }
    },
    control: {}
  },
  INS: {
    monitor: {
      30: {
        daPaths: [{ path: ["stVal"] }],
        create: k,
        inverted: !0
      },
      33: {
        daPaths: [{ path: ["stVal"] }],
        create: k,
        inverted: !0
      },
      35: {
        daPaths: [{ path: ["stVal"] }],
        create: k,
        inverted: !0
      }
    },
    control: {}
  },
  ISC: {
    monitor: {
      32: {
        daPaths: [{ path: ["valWTr", "posVal"] }],
        create: k,
        inverted: !0
      }
    },
    control: {
      62: {
        daPaths: [{ path: ["Oper", "ctlVal"] }],
        create: k,
        checkDaPaths: [{ path: ["Oper", "Check"] }],
        checkCreate: pe
      }
    }
  },
  MV: {
    monitor: {
      35: {
        daPaths: [{ path: ["mag", "i"] }],
        create: k,
        inverted: !0
      },
      36: {
        daPaths: [{ path: ["mag", "f"] }],
        create: k,
        inverted: !0
      }
    },
    control: {}
  },
  SEC: {
    monitor: {
      37: {
        daPaths: [{ path: ["cnt"] }],
        create: k,
        inverted: !0
      }
    },
    control: {}
  },
  SPC: {
    monitor: {
      30: {
        daPaths: [{ path: ["stVal"] }],
        create: k,
        inverted: !0
      }
    },
    control: {
      58: {
        daPaths: [{ path: ["Oper", "ctlVal"] }],
        create: k,
        checkDaPaths: [{ path: ["Oper", "Check"] }],
        checkCreate: pe
      }
    }
  },
  SPG: {
    monitor: {
      58: {
        daPaths: [{ path: ["setVal"] }],
        create: k,
        inverted: !0
      }
    },
    control: {}
  },
  SPS: {
    monitor: {
      30: {
        daPaths: [{ path: ["stVal"] }],
        create: k,
        inverted: !0
      }
    },
    control: {}
  },
  WYE: {
    monitor: {
      35: {
        daPaths: [
          { path: ["phsA", "cVal", "mag", "f"] },
          { path: ["phsB", "cVal", "mag", "f"] },
          { path: ["phsC", "cVal", "mag", "f"] }
        ],
        create: k,
        inverted: !1
      },
      36: {
        daPaths: [
          { path: ["phsA", "cVal", "mag", "f"] },
          { path: ["phsB", "cVal", "mag", "f"] },
          { path: ["phsC", "cVal", "mag", "f"] }
        ],
        create: k,
        inverted: !1
      }
    },
    control: {}
  }
};
function k(t, e, i, n, r, a, o) {
  const s = [], [d, u] = vi(
    t,
    e,
    i,
    n,
    a
  );
  return d.length > 0 && s.push(...d), u.length > 0 && (fi(t.ownerDocument), u.forEach((h) => {
    const f = Qt(
      h.ownerDocument,
      r,
      o
    );
    s.push(...gi(h, f));
  })), yi(n, t, e, i, s), s;
}
function Rt(t, e, i, n, r, a, o) {
  const s = [], [d, u] = vi(
    t,
    e,
    i,
    n,
    a
  );
  if (d.length > 0 && s.push(...d), u.length > 0) {
    fi(t.ownerDocument);
    const h = [];
    u.forEach((f) => {
      Do(f) ? To(f).forEach(
        (v) => h.push(
          ...Qt(
            f.ownerDocument,
            r,
            o,
            v
          )
        )
      ) : h.push(
        ...Qt(f.ownerDocument, r, o)
      ), s.push(...gi(f, h));
    });
  }
  return yi(n, t, e, i, s), s;
}
function pe(t, e, i, n, r, a) {
  const o = [], [s, d] = vi(
    t,
    e,
    i,
    n,
    a
  );
  return s.length > 0 && o.push(...s), d.length > 0 && (fi(t.ownerDocument), d.forEach((u) => {
    const h = yt(
      u.ownerDocument,
      r
    );
    h.setAttribute("check", "interlocking");
    const f = yt(
      u.ownerDocument,
      r
    );
    f.setAttribute("check", "synchrocheck"), o.push(
      ...gi(u, [
        h,
        f
      ])
    );
  })), yi(n, t, e, i, o), o;
}
function gi(t, e) {
  const i = [];
  let n = hs(t);
  return n ? e.forEach((r) => {
    i.push({
      new: { parent: n, element: r }
    });
  }) : (n = fs(t.ownerDocument), n.append(...e), i.push({ new: { parent: t, element: n } })), i;
}
function Qt(t, e, i, n) {
  const r = [], a = yt(t, e);
  if (n && a.setAttribute("expectedValue", n), r.push(a), i) {
    const o = yt(t, e);
    o.setAttribute("inverted", "true"), n && o.setAttribute("expectedValue", n), r.push(o);
  }
  return r;
}
function yi(t, e, i, n, r) {
  r.forEach((a) => {
    const o = a.new.element;
    let s;
    o.tagName === "Address" ? s = [o] : s = Array.from(o.querySelectorAll("Address"));
    const u = a.new.parent.closest("DAI");
    if (u) {
      const h = e.closest("IED"), f = i.querySelector(
        `:scope > DOI[name="${J(n)}"]`
      );
      s.forEach((v) => {
        t.dispatchEvent(
          Q(
            () => Mn(
              h,
              f,
              u,
              v
            )
          )
        );
      });
    }
  });
}
function gs(t, e) {
  let i = [t];
  const n = t.ownerDocument, r = Y(t) ?? "";
  let a = n.querySelector(`DOType[id="${r}"]`);
  return e.path.forEach((o) => {
    if (!a) {
      i = null;
      return;
    }
    const s = a.querySelector(
      `:scope > SDO[name="${o}"]`
    ), d = s?.getAttribute("type");
    d && (a = n.querySelector(`DOType[id="${d}"]`));
    const u = a.querySelector(
      `:scope > DA[name="${o}"], :scope > BDA[name="${o}"]`
    );
    if (u === null && s === null) {
      i = null;
      return;
    }
    if (i.push(s || u), s) return;
    if ((u.getAttribute("bType") ?? "") === "Struct") {
      const f = Y(u) ?? "";
      a = n.querySelector(`DAType[id="${f}"]`);
    } else
      a = null;
  }), i;
}
function vi(t, e, i, n, r) {
  const a = [], o = [];
  return r.forEach((s) => {
    const d = ys(i, s), u = e.querySelectorAll(d);
    if (u.length > 0)
      u.forEach((h) => {
        const f = qi(
          t,
          h
        );
        f ? a.push(f) : a.push(h);
      });
    else {
      const h = gs(i, s);
      if (h) {
        const [f, v] = zn(e, h), y = On(v);
        f.append(y);
        const S = qi(
          t,
          f
        );
        if (S && o.push({ new: { parent: S, element: y } }), y.tagName === "DAI")
          a.push(y);
        else {
          const x = y.querySelector("DAI");
          a.push(x);
        }
      } else {
        const f = it(i) ?? "", v = Y(i) ?? "";
        n.dispatchEvent(
          ms({
            kind: "error",
            title: l("protocol104.wizard.error.addAddressError", {
              structure: s.path.join(" > "),
              cdc: f,
              doType: v
            })
          })
        );
      }
    }
  }), [o, a];
}
function ys(t, e) {
  let n = `:scope > DOI[name="${J(t)}"] > `;
  return e.path.forEach((r, a) => {
    a < e.path.length - 1 ? n = `${n} SDI[name="${r}"] > ` : n = `${n} DAI[name="${r}"]`;
  }), n;
}
function Vn(t, e) {
  return t === "MV" && ["35", "36"].includes(e) || t === "INS" && e === "35";
}
function Jt(t, e) {
  return t === "MV" && ["35", "36"].includes(e);
}
function We(t) {
  switch (t) {
    case "1":
      return l("protocol104.values.signalNames.tiNumber1");
    case "3":
      return l("protocol104.values.signalNames.tiNumber3");
    case "5":
      return l("protocol104.values.signalNames.tiNumber5");
    case "7":
      return l("protocol104.values.signalNames.tiNumber7");
    case "9":
      return l("protocol104.values.signalNames.tiNumber9");
    case "11":
      return l("protocol104.values.signalNames.tiNumber11");
    case "13":
      return l("protocol104.values.signalNames.tiNumber13");
    case "15":
      return l("protocol104.values.signalNames.tiNumber15");
    case "20":
      return l("protocol104.values.signalNames.tiNumber20");
    case "21":
      return l("protocol104.values.signalNames.tiNumber21");
    case "30":
      return l("protocol104.values.signalNames.tiNumber30");
    case "31":
      return l("protocol104.values.signalNames.tiNumber31");
    case "32":
      return l("protocol104.values.signalNames.tiNumber32");
    case "33":
      return l("protocol104.values.signalNames.tiNumber33");
    case "34":
      return l("protocol104.values.signalNames.tiNumber34");
    case "35":
      return l("protocol104.values.signalNames.tiNumber35");
    case "36":
      return l("protocol104.values.signalNames.tiNumber36");
    case "37":
      return l("protocol104.values.signalNames.tiNumber37");
    case "38":
      return l("protocol104.values.signalNames.tiNumber38");
    case "39":
      return l("protocol104.values.signalNames.tiNumber39");
    case "40":
      return l("protocol104.values.signalNames.tiNumber40");
    case "45":
      return l("protocol104.values.signalNames.tiNumber45");
    case "46":
      return l("protocol104.values.signalNames.tiNumber46");
    case "47":
      return l("protocol104.values.signalNames.tiNumber47");
    case "48":
      return l("protocol104.values.signalNames.tiNumber48");
    case "49":
      return l("protocol104.values.signalNames.tiNumber49");
    case "50":
      return l("protocol104.values.signalNames.tiNumber50");
    case "51":
      return l("protocol104.values.signalNames.tiNumber51");
    case "58":
      return l("protocol104.values.signalNames.tiNumber58");
    case "59":
      return l("protocol104.values.signalNames.tiNumber59");
    case "60":
      return l("protocol104.values.signalNames.tiNumber60");
    case "61":
      return l("protocol104.values.signalNames.tiNumber61");
    case "62":
      return l("protocol104.values.signalNames.tiNumber62");
    case "63":
      return l("protocol104.values.signalNames.tiNumber63");
    case "64":
      return l("protocol104.values.signalNames.tiNumber64");
    default:
      return l("protocol104.values.signalNames.default");
  }
}
const vs = [
  "m",
  "k",
  "M",
  "mu",
  "y",
  "z",
  "a",
  "f",
  "p",
  "n",
  "c",
  "d",
  "da",
  "h",
  "G",
  "T",
  "P",
  "E",
  "Z",
  "Y"
];
function xs(t, e, i) {
  return (n) => {
    const r = _t(t) ?? "", a = r === "WYE" || r === "DEL" ? "CMV" : r, o = i.getAttribute("ti") ?? "", s = R(n.find((y) => y.label === "casdu")), d = R(n.find((y) => y.label === "ioa")), u = Vn(a, o) ? R(n.find((y) => y.label === "unitMultiplier")) : null, h = Jt(a, o) ? R(n.find((y) => y.label === "scaleMultiplier")) : null, f = Jt(a, o) ? R(n.find((y) => y.label === "scaleOffset")) : null;
    if (s === i.getAttribute("casdu") && d === i.getAttribute("ioa") && u === i.getAttribute("unitMultiplier") && h === i.getAttribute("scaleMultiplier") && f === i.getAttribute("scaleOffset"))
      return [];
    const v = St(i, {
      casdu: s,
      ioa: d,
      unitMultiplier: u,
      scaleMultiplier: h,
      scaleOffset: f
    });
    return [
      { old: { element: i }, new: { element: v } }
    ];
  };
}
function Mn(t, e, i, n) {
  function r() {
    const a = _t(e) ?? "", o = a === "WYE" || a === "DEL", s = o ? "CMV" : a, d = n.getAttribute("ti") ?? "";
    let u = n.getAttribute("casdu") ?? "";
    function h(y) {
      return t.querySelector(
        `Address[casdu="${u}"][ioa="${y}"]`
      ) ? (this.validationMessage = l("protocol104.wizard.error.ioaConflict"), {
        valid: !1,
        customError: !0
      }) : {};
    }
    const f = [
      c`<wizard-textfield
        label="IED"
        .maybeValue="${J(t)}"
        disabled
        readonly
      >
      </wizard-textfield>`,
      c`<mwc-textarea
        label="DOI"
        value="${re(e, "IED")}"
        rows="2"
        cols="40"
        readonly
        disabled
      >
      </mwc-textarea>`,
      c`<wizard-textfield
        label="cdc"
        .maybeValue="${s}"
        .helper="${o ? l("protocol104.mappedCmv", { cdc: a }) : ""}"
        .helperPersistent="${o}"
        disabled
        readonly
      >
      </wizard-textfield>`,
      c`<mwc-textarea
        label="DAI"
        value="${re(i, "DOI")}"
        rows="2"
        cols="40"
        readonly
        disabled
      >
      </mwc-textarea>`,
      c`<wizard-textfield
        label="casdu"
        @change="${(y) => {
        u = y.target.value ?? "";
      }}}"
        .maybeValue="${ji(n.getAttribute("casdu") ?? "")}"
        helper="${l("protocol104.wizard.casduHelper")}"
        required
      >
      </wizard-textfield>`,
      c`<wizard-textfield
        .validityTransform="${h}"
        label="ioa"
        .maybeValue="${ji(n.getAttribute("ioa") ?? "")}"
        helper="${l("protocol104.wizard.ioaHelper")}"
        required
      >
      </wizard-textfield>`,
      c`<wizard-textfield
        label="ti"
        .maybeValue=${d + " (" + We(d) + ")"}
        disabled
        readonly
      >
      </wizard-textfield>`
    ];
    Vn(s, d) && f.push(c`<wizard-select
        label="unitMultiplier"
        .maybeValue="${n.getAttribute("unitMultiplier")}"
        helper="${l("protocol104.wizard.unitMultiplierHelper")}"
        fixedMenuPosition
        nullable
      >
        ${vs.map(
      (y) => c`<mwc-list-item value="${y}">
              <span>${y}</span>
            </mwc-list-item>`
    )}
      </wizard-select>`), Jt(s, d) && (f.push(c`<wizard-textfield
        label="scaleMultiplier"
        .maybeValue="${n.getAttribute("scaleMultiplier")}"
        helper="${l("protocol104.wizard.scaleMultiplierHelper")}"
        pattern="${ft.decimal}"
        nullable
      >
      </wizard-textfield>`), f.push(c`<wizard-textfield
        label="scaleOffset"
        .maybeValue="${n.getAttribute("scaleOffset")}"
        helper="${l("protocol104.wizard.scaleOffsetHelper")}"
        pattern="${ft.decimal}"
        nullable
      >
      </wizard-textfield>`));
    const v = n.getAttribute("expectedValue");
    return v && (f.push(c`<wizard-textfield
        label="expectedValue"
        .maybeValue="${v}"
        disabled
        readonly
      >
      </wizard-textfield>`), f.push(c`<wizard-textfield
        label="enumValue"
        .maybeValue="${Nn(i, v)}"
        disabled
        readonly
      >
      </wizard-textfield>`)), n.hasAttribute("inverted") && f.push(c`<wizard-textfield
        label="inverted"
        .maybeValue="${n.getAttribute("inverted")}"
        disabled
        readonly
      >
      </wizard-textfield>`), n.hasAttribute("check") && f.push(c`<wizard-textfield
        label="check"
        .maybeValue="${n.getAttribute("check")}"
        disabled
        readonly
      >
      </wizard-textfield>`), f;
  }
  return [
    {
      title: l("protocol104.wizard.title.addressEdit"),
      element: n,
      primary: {
        icon: "edit",
        label: l("save"),
        action: xs(e, i, n)
      },
      content: r()
    }
  ];
}
function Ue(t, e) {
  return t.length > 0 ? c` <wizard-textfield
      label="${e}"
      .maybeValue=${t.join(", ")}
      disabled
      readonly
    >
    </wizard-textfield>` : c``;
}
function Ss(t) {
  const e = t.closest("IED"), i = re(t, "IED"), n = _t(t), r = n === "WYE" || n === "DEL" ? "CMV" : n, a = [
    c`<wizard-textfield
      label="IED"
      .maybeValue=${J(e)}
      disabled
      readonly
    >
    </wizard-textfield>`,
    c`<mwc-textarea
      label="DOI"
      value="${i}"
      rows="2"
      cols="40"
      readonly
      disabled
    >
    </mwc-textarea>`,
    c`<wizard-textfield
      label="Common Data Class"
      .maybeValue=${r}
      disabled
      readonly
    >
    </wizard-textfield>`
  ], o = t.closest("LN0, LN"), s = J(t);
  if (o && s) {
    const x = Eo(o, s);
    if (x) {
      const w = pi(o, x);
      w !== null && a.push(c` <wizard-textfield
          label="ctlModel"
          .maybeValue=${w}
          disabled
          readonly
        >
        </wizard-textfield>`);
    }
  }
  let d = [], u = [];
  const h = bi[r];
  a.push(c`<wizard-textfield
    label="104 Configuration available"
    .maybeValue=${h !== void 0}
    disabled
    readonly
  >
  </wizard-textfield>`), h && (d = Object.keys(h.monitor), u = Object.keys(h.control));
  let f = Array.from(
    t.querySelectorAll(
      `DAI > Private[type="${fe}"] > Address`
    )
  ).filter((x) => x.getAttribute("ti") !== "").map((x) => x.getAttribute("ti"));
  f = [...new Set(f)];
  const v = f.filter((x) => d.includes(x)), y = f.filter((x) => u.includes(x)), S = f.filter((x) => !v.includes(x)).filter((x) => !y.includes(x));
  return a.push(Ue(d, "Available Monitor TIs")), a.push(Ue(v, "Found Monitor TIs")), a.push(Ue(u, "Available Control TIs")), a.push(Ue(y, "Found Control TIs")), a.push(Ue(S, "Other TIs")), a;
}
function ws(t) {
  return (e) => {
    const i = t.querySelectorAll(
      `DAI > Private[type="${fe}"] > Address`
    );
    if (i.length > 0) {
      const n = {
        actions: [],
        title: l("protocol104.values.removedAddresses", {
          name: re(t, "SCL"),
          nrOfAddresses: i.length
        })
      };
      i.forEach((r) => {
        n.actions.push({
          old: {
            parent: r.parentElement,
            element: r
          }
        });
      }), e.dispatchEvent(et(n)), e.dispatchEvent(Q());
    }
  };
}
function ks(t) {
  return [
    {
      title: l("protocol104.wizard.title.doiInfo"),
      menuActions: [
        {
          label: l("protocol104.values.removeAddresses"),
          icon: "delete",
          action: ws(t)
        }
      ],
      content: Ss(t)
    }
  ];
}
var As = Object.defineProperty, _s = Object.getOwnPropertyDescriptor, nt = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? _s(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && As(e, i, r), r;
};
let Te = class extends Ee {
  get daiElements() {
    return Array.from(this.element.querySelectorAll("DAI")).filter(
      (t) => t.querySelector(
        `Private[type="${fe}"] > Address`
      ) !== null
    ).sort(
      (t, e) => re(t, "DOI").localeCompare(re(e, "DOI"))
    );
  }
  getAddressElements(t) {
    return Array.from(
      t.querySelectorAll(
        `Private[type="${fe}"] > Address`
      )
    ).sort(
      (e, i) => (e.getAttribute("casdu") ?? "").localeCompare(
        i.getAttribute("casdu") ?? ""
      ) && (e.getAttribute("ioa") ?? "").localeCompare(
        i.getAttribute("ioa") ?? ""
      )
    );
  }
  firstUpdated() {
    this.requestUpdate();
  }
  openEditAddressWizard(t, e) {
    const i = t.closest("DOI"), n = i.closest("IED");
    this.dispatchEvent(
      Q(
        Mn(n, i, t, e)
      )
    );
  }
  openEditTiWizard() {
    this.dispatchEvent(Q(ks(this.element)));
  }
  get header() {
    const t = re(this.element, "IED"), e = _t(this.element);
    return c`${t}${e ? c` (${e})` : me}`;
  }
  renderAddressList(t) {
    const e = this.getAddressElements(t);
    return c`${e.map((i) => c`
        <mwc-list-item graphic="icon" hasMeta>
          <span slot="graphic">&nbsp;</span>
          <span>${xo(t, i)}</span>
          <span slot="meta">
            <mwc-icon-button
              icon="edit"
              @click=${() => this.openEditAddressWizard(t, i)}
            >
            </mwc-icon-button>
          </span>
        </mwc-list-item>
      `)}`;
  }
  renderDaiList() {
    const t = this.daiElements;
    return c`${t.map((e) => c`
        <mwc-list-item noninteractive>
          <span>${re(e, "DOI")}</span>
        </mwc-list-item>
        ${this.renderAddressList(e)}
      `)}`;
  }
  render() {
    return c`
      <action-pane .label="${this.header}">
        <abbr slot="action" title="${l("edit")}">
          <mwc-icon-button
            icon="info"
            @click=${() => this.openEditTiWizard()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${l("protocol104.toggleChildElements")}">
          <mwc-icon-button-toggle
            id="toggleButton"
            on
            onIcon="keyboard_arrow_up"
            offIcon="keyboard_arrow_down"
            @click=${() => this.requestUpdate()}
          >
          </mwc-icon-button-toggle>
        </abbr>
        ${this.toggleButton?.on ? c` <mwc-list id="dailist"> ${this.renderDaiList()} </mwc-list>` : me}
      </action-pane>
    `;
  }
};
Te.styles = q`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    mwc-list-item {
      --mdc-list-item-meta-size: 48px;
    }
  `;
nt([
  p()
], Te.prototype, "element", 2);
nt([
  T("#toggleButton")
], Te.prototype, "toggleButton", 2);
nt([
  p()
], Te.prototype, "daiElements", 1);
nt([
  p()
], Te.prototype, "header", 1);
Te = nt([
  z("doi-104-container")
], Te);
var Es = Object.defineProperty, Cs = Object.getOwnPropertyDescriptor, rt = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Cs(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Es(e, i, r), r;
};
let Le = class extends Ee {
  get doiElements() {
    return Array.from(this.element.querySelectorAll("DOI")).filter(
      (t) => t.querySelector(
        `DAI > Private[type="${fe}"] > Address`
      ) !== null
    ).sort(
      (t, e) => re(t, "IED").localeCompare(re(e, "IED"))
    );
  }
  firstUpdated() {
    this.requestUpdate();
  }
  get header() {
    const t = J(this.element), e = aa(this.element);
    return c`${t}${e ? c` &mdash; ${e}` : me}`;
  }
  renderDoiList() {
    const t = this.doiElements;
    return c`${t.map((e) => c`
        <doi-104-container
          .editCount=${this.editCount}
          .doc="${this.doc}"
          .element="${e}"
        >
        </doi-104-container>
      `)}`;
  }
  render() {
    return c`
      <action-pane .label="${this.header}">
        <mwc-icon slot="icon">developer_board</mwc-icon>
        <abbr slot="action" title="${l("protocol104.toggleChildElements")}">
          <mwc-icon-button-toggle
            id="toggleButton"
            on
            onIcon="keyboard_arrow_up"
            offIcon="keyboard_arrow_down"
            @click=${() => this.requestUpdate()}
          >
          </mwc-icon-button-toggle>
        </abbr>
        ${this.toggleButton?.on ? c`${this.renderDoiList()}` : me}
      </action-pane>
    `;
  }
};
Le.styles = q`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
rt([
  p()
], Le.prototype, "element", 2);
rt([
  T("#toggleButton")
], Le.prototype, "toggleButton", 2);
rt([
  p()
], Le.prototype, "doiElements", 1);
rt([
  p()
], Le.prototype, "header", 1);
Le = rt([
  z("ied-104-container")
], Le);
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
const Xi = /* @__PURE__ */ new WeakMap(), Zi = 2147483647, Ns = Qe((...t) => (e) => {
  let i = Xi.get(e);
  i === void 0 && (i = {
    lastRenderedIndex: Zi,
    values: []
  }, Xi.set(e, i));
  const n = i.values;
  let r = n.length;
  i.values = t;
  for (let a = 0; a < t.length && !(a > i.lastRenderedIndex); a++) {
    const o = t[a];
    if (ii(o) || typeof o.then != "function") {
      e.setValue(o), i.lastRenderedIndex = a;
      break;
    }
    a < r && o === n[a] || (i.lastRenderedIndex = Zi, r = 0, Promise.resolve(o).then((s) => {
      const d = i.values.indexOf(o);
      d > -1 && d < i.lastRenderedIndex && (i.lastRenderedIndex = d, e.setValue(s), e.commit());
    }));
  }
});
var Is = Object.defineProperty, Ds = Object.getOwnPropertyDescriptor, ge = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Ds(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Is(e, i, r), r;
};
const Ts = c`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${l("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let se = class extends be {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (t) => ({
      path: t,
      header: c`<h2>${"/" + t.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return _n(this.selection);
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
    return c`<filtered-list
      @selected=${(i) => this.select(i, t)}
      searchFieldLabel="${this.getTitle(t)}"
    >
      ${e.map(
      (i) => c`<mwc-list-item
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
        c`${te(r)} ${this.renderDirectory(o, a)}`
      );
    return n.length === 0 ? c`` : c`<div class="column">${n}</div>`;
  }
  render() {
    const t = new Array(this.depth).fill(0).map((e, i) => this.renderColumn(i));
    return this.loaded = Promise.allSettled(t).then(), c`<div class="pane">
      ${t.map((e) => Ns(e, Ts))}
    </div>`;
  }
};
se.styles = q`
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
ge([
  p({ type: Object })
], se.prototype, "selection", 2);
ge([
  p({ type: Boolean })
], se.prototype, "multi", 2);
ge([
  p({ type: Number })
], se.prototype, "depth", 1);
ge([
  p({ type: Array })
], se.prototype, "paths", 1);
ge([
  p({ type: Array })
], se.prototype, "path", 1);
ge([
  p({ attribute: !1 })
], se.prototype, "read", 2);
ge([
  p({ attribute: !1 })
], se.prototype, "loaded", 2);
ge([
  T("div")
], se.prototype, "container", 2);
se = ge([
  z("finder-list")
], se);
function Ls(t) {
  return t.startsWith("IED:") ? t.replace(/^.*:/, "").trim() : t.startsWith("LN0:") ? "LLN0" : t.replace(/^.*>/, "").trim();
}
function $s(t, e) {
  return async (i) => {
    const [n, r] = i[i.length - 1]?.split(": ", 2), a = An(t, n, r);
    return a ? {
      path: i,
      header: void 0,
      entries: e(a).map(
        (o) => `${o.tagName}: ${N(o)}`
      )
    } : { path: i, header: c`<p>${l("error")}</p>`, entries: [] };
  };
}
var Ps = Object.defineProperty, Rs = Object.getOwnPropertyDescriptor, Fn = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Rs(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Ps(e, i, r), r;
};
let vt = class extends be {
  render() {
    return c` ${this.renderHeader()} ${this.renderSeparator()}`;
  }
  renderHeader() {
    return this.header ? c`<h4 class="header">${this.header}</h4>` : c``;
  }
  renderSeparator() {
    return c`<div role="separator"></div>`;
  }
};
vt.styles = q`
    div {
      height: 0px;
      margin: 10px 0px 10px 0px;
      border-top: none;
      border-right: none;
      border-left: none;
      border-image: initial;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    }
  `;
Fn([
  p({
    type: String
  })
], vt.prototype, "header", 2);
vt = Fn([
  z("wizard-divider")
], vt);
function Qi(t, e, i, n, r, a, o) {
  return o.create(
    t,
    e,
    i,
    n,
    r,
    o.daPaths,
    // If the TI Allows inverted and the Engineer selected it, true will be passed.
    o.inverted ? a : !1
  );
}
function Ji(t, e, i, n, r, a) {
  return a.checkDaPaths && a.checkCreate ? a.checkCreate(
    t,
    e,
    i,
    n,
    r,
    a.checkDaPaths
  ) : [];
}
function ht(t, e) {
  return t.shadowRoot?.querySelector(
    `mwc-switch[id="${e}"`
  )?.checked ?? !1;
}
function zs(t, e, i) {
  return (n, r) => {
    r.dispatchEvent(Q());
    const a = it(e) ?? "", o = bi[a], s = {
      actions: [],
      title: l("protocol104.values.addedAddress", {
        name: J(e) ?? "Unknown",
        lnName: re(t, "IED")
      })
    }, d = t.cloneNode(!0), u = R(n.find((y) => y.label === "monitorTi"))?.split(" (")[0] ?? "", h = ht(r, "monitorInverted"), f = o.monitor[u];
    if (f && s.actions.push(
      ...Qi(
        t,
        d,
        e,
        r,
        u,
        h,
        f
      )
    ), ht(r, "monitorCheck") && s.actions.push(
      ...Ji(
        t,
        d,
        e,
        r,
        u,
        f
      )
    ), i) {
      const y = pi(t, e);
      if (y !== null && y !== "status-only") {
        const S = R(n.find((B) => B.label === "controlTi"))?.split(
          " ("
        )[0] ?? "", x = ht(r, "controlInverted"), w = o.control[S];
        w && s.actions.push(
          ...Qi(
            t,
            d,
            e,
            r,
            S,
            x,
            w
          )
        ), ht(r, "controlCheck") && s.actions.push(
          ...Ji(
            t,
            d,
            e,
            r,
            S,
            w
          )
        );
      }
    }
    return s.actions.length > 0 ? [s] : (r.dispatchEvent(Q()), []);
  };
}
function Yi(t) {
  let e = !0;
  return Object.values(t).forEach((i) => {
    i.checkDaPaths && i.checkCreate && (e = !1);
  }), e;
}
function Os(t) {
  let e = !0;
  return Object.values(t).forEach((i) => {
    i.inverted === !0 && (e = !1);
  }), e;
}
function en(t, e) {
  let i = !0;
  const n = e.split(" (")[0];
  return isNaN(+n) || (i = !t[n].inverted), i;
}
function Vs(t, e) {
  const i = it(e) ?? "", n = i === "WYE" || i === "DEL", r = n ? "CMV" : i, a = bi[i], o = Object.keys(a.monitor), s = Object.keys(a.control);
  function d() {
    const u = J(e) ?? "", h = t.closest("IED"), f = re(t, "IED");
    function v(x) {
      const w = x.target.selected.value, D = x.target.parentElement.querySelector(
        'mwc-switch[id="monitorInverted"]'
      );
      D && (D.disabled = en(
        a.monitor,
        w
      ));
    }
    function y(x, w) {
      const D = x.target.selected.value, B = w ? "controlTi" : "monitorTi", Ce = x.target.parentElement.querySelector(
        `wizard-select[label="${B}"]`
      );
      Ce.maybeValue = w ? D === "30" ? "58" : "62" : D === "58" ? "30" : "35";
    }
    const S = [
      c`<wizard-textfield
        label="IED"
        .maybeValue="${J(h)}"
        disabled
        readonly
      >
      </wizard-textfield>`,
      c`<mwc-textarea
        label="LN(0)"
        value="${f}"
        rows="2"
        cols="40"
        readonly
        disabled
      >
      </mwc-textarea>`,
      c`<wizard-textfield
        label="DO"
        .maybeValue="${u}"
        disabled
        readonly
      >
      </wizard-textfield>`,
      c`<wizard-textfield
        label="Common Data Class"
        .maybeValue="${r}"
        .helper="${n ? l("protocol104.mappedCmv", { cdc: i }) : ""}"
        .helperPersistent="${n}"
        disabled
        readonly
      >
      </wizard-textfield>`
    ];
    if (o.length > 0) {
      S.push(c`<wizard-divider></wizard-divider>`);
      let x = !0;
      o.length > 1 ? S.push(
        c`<wizard-select
            label="monitorTi"
            helper="${l("protocol104.wizard.monitorTiHelper")}"
            fixedMenuPosition
            required
            @selected=${(w) => {
          v(w), r === "ENC" && y(w, !0);
        }}
          >
            ${o.map(
          (w) => c` <mwc-list-item value="${w}">
                  <span
                    >${w + " (" + We(w) + ")"}</span
                  >
                </mwc-list-item>`
        )}
          </wizard-select>`
      ) : (x = en(
        a.monitor,
        o[0]
      ), S.push(
        c`<wizard-textfield
            label="monitorTi"
            .maybeValue=${o[0] ? o[0] + " (" + We(o[0]) + ")" : ""}
            disabled
          >
          </wizard-textfield>`
      )), S.push(
        c`<mwc-formfield
          label="${l("protocol104.wizard.monitorInverted")}"
        >
          <mwc-switch
            id="monitorInverted"
            .disabled="${x}"
          >
          </mwc-switch>
        </mwc-formfield>`
      ), S.push(
        c`<mwc-formfield label="${l("protocol104.wizard.monitorCheck")}">
          <mwc-switch
            id="monitorCheck"
            .disabled="${Yi(a.monitor)}"
          >
          </mwc-switch>
        </mwc-formfield>`
      );
    }
    if (s.length > 0) {
      S.push(c` <wizard-divider></wizard-divider>`);
      const x = pi(t, e);
      x !== null && S.push(c` <wizard-textfield
          label="ctlModel"
          .maybeValue=${x}
          disabled
          readonly
        >
        </wizard-textfield>`), x !== null && x !== "status-only" && (s.length > 1 ? S.push(
        c` <wizard-select
              label="controlTi"
              helper="${l("protocol104.wizard.controlTiHelper")}"
              fixedMenuPosition
              required
              @selected=${(w) => {
          r === "ENC" && y(w, !1);
        }}
            >
              ${s.map(
          (w) => c` <mwc-list-item value="${w}">
                    <span
                      >${w + " (" + We(w) + ")"}</span
                    >
                  </mwc-list-item>`
        )}
            </wizard-select>`
      ) : S.push(
        c` <wizard-textfield
              label="controlTi"
              .maybeValue=${s[0] ? s[0] + " (" + We(s[0]) + ")" : ""}
              disabled
            >
            </wizard-textfield>`
      ), S.push(
        c` <mwc-formfield
            label="${l("protocol104.wizard.controlInverted")}"
          >
            <mwc-switch
              id="controlInverted"
              .disabled="${Os(a.control)}"
            >
            </mwc-switch>
          </mwc-formfield>`
      ), S.push(
        c` <mwc-formfield
            label="${l("protocol104.wizard.controlCheck")}"
          >
            <mwc-switch
              id="controlCheck"
              .disabled="${Yi(a.control)}"
            >
            </mwc-switch>
          </mwc-formfield>`
      ));
    }
    return S;
  }
  return [
    {
      title: l("wizard.title.add", { tagName: "Address" }),
      primary: {
        icon: "add",
        label: l("add"),
        action: zs(
          t,
          e,
          s.length > 0
        )
      },
      content: d()
    }
  ];
}
function Hn(t, e) {
  const i = it(e) ?? "";
  if (!bs.includes(i))
    return !1;
  const n = J(e);
  return t.querySelectorAll(
    `:scope > DOI[name="${n}"] DAI > Private[type="${fe}"] > Address`
  ).length <= 0;
}
function tn(t) {
  let e;
  return ["LN0", "LN"].includes(t.tagName) ? e = [t] : e = Array.from(t.querySelectorAll("LN0, LN")), e.filter(
    (i) => (
      // Check if there are available DO Elements that aren't initiated and supported by 104 protocol
      Co(i).filter(
        (n) => Hn(i, n)
      ).length > 0
    )
  ).length > 0;
}
function Ms(t) {
  let e;
  if (["LN0", "LN"].includes(t.tagName)) {
    const i = t.getAttribute("lnType") ?? "";
    e = Array.from(
      t.ownerDocument.querySelectorAll(
        `:root > DataTypeTemplates > LNodeType[id="${i}"] > DO`
      )
    ).filter((n) => Hn(t, n)).sort((n, r) => De(`${N(n)}`, `${N(r)}`));
  } else t.tagName === "AccessPoint" ? e = Array.from(t.querySelectorAll("LDevice, :scope > LN")).filter((i) => tn(i)).sort((i, n) => De(`${N(i)}`, `${N(n)}`)) : e = Array.from(t.children).filter(
    (i) => ["IED", "AccessPoint", "LN0", "LN"].includes(i.tagName)
  ).filter((i) => tn(i)).sort((i, n) => De(`${N(i)}`, `${N(n)}`));
  return e;
}
function Fs(t) {
  return (e, i) => {
    const r = i.shadowRoot?.querySelector("finder-list")?.path ?? [];
    if (r.length === 0) return [];
    const a = nn(t, r, ["DO"]), o = nn(t, r, ["LN0", "LN"]);
    return o && a && i.dispatchEvent(
      Ve(Vs(o, a))
    ), [];
  };
}
function nn(t, e, i) {
  const [n, r] = e.pop().split(": ");
  return i.includes(n) ? An(t, n, r) : null;
}
function Hs(t) {
  function e(i) {
    return c` <finder-list
      path="${JSON.stringify(["SCL: "])}"
      .read=${$s(i, Ms)}
      .getDisplayString=${Ls}
      .getTitle=${(n) => n[n.length - 1]}
    >
    </finder-list>`;
  }
  return [
    {
      title: l("wizard.title.select", { tagName: "DO(I)" }),
      primary: {
        icon: "",
        label: l("next"),
        action: Fs(t)
      },
      content: [e(t)]
    }
  ];
}
var Bs = Object.defineProperty, Gs = Object.getOwnPropertyDescriptor, Bn = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Gs(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Bs(e, i, r), r;
};
let xt = class extends Ee {
  get iedElements() {
    return Array.from(this.doc.querySelectorAll("IED")).filter(
      (t) => t.querySelectorAll(
        `DAI > Private[type="${fe}"] > Address`
      ).length > 0
    ).sort((t, e) => De(t, e));
  }
  /** Opens a [[`WizardDialog`]] for creating a new `Substation` element. */
  openCreateAddressWizard() {
    this.dispatchEvent(Q(Hs(this.doc)));
  }
  renderAddButton() {
    return c`<h1>
      <mwc-fab
        extended
        icon="add"
        label="${l("protocol104.wizard.title.addAddress")}"
        @click=${() => this.openCreateAddressWizard()}
      >
      </mwc-fab>
    </h1>`;
  }
  render() {
    const t = this.iedElements;
    return t.length > 0 ? c`
        ${t.map((e) => c`<ied-104-container
            .editCount=${this.editCount}
            .doc="${this.doc}"
            .element="${e}"
          ></ied-104-container>`)}
        ${this.renderAddButton()}
      ` : c` <h1>
        <span style="color: var(--base1)"
          >${l("protocol104.values.missing")}</span
        >
      </h1>
      ${this.renderAddButton()}`;
  }
};
xt.styles = q`
    mwc-fab {
      position: fixed;
      bottom: 32px;
      right: 32px;
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
  `;
Bn([
  p()
], xt.prototype, "iedElements", 1);
xt = Bn([
  z("values-104-container")
], xt);
const qs = {
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
}, Us = {
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
}, rn = { en: Us, de: qs };
async function js(t) {
  return Object.keys(rn).includes(t) ? rn[t] : {};
}
lr({ loader: js, empty: (t) => t });
const Gn = localStorage.getItem("language") || "en";
console.log("SETTING LANGUAGE TO", Gn);
hr(Gn);
var Ws = Object.defineProperty, at = (t, e, i, n) => {
  for (var r = void 0, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = o(e, i, r) || r);
  return r && Ws(e, i, r), r;
};
let zt = ze.VALUES;
class ot extends be {
  constructor() {
    super(), this.editCount = -1, this.addEventListener(In, (e) => {
      zt = e.detail.view, this.requestUpdate();
    });
  }
  firstUpdated() {
    zt == ze.VALUES ? this.byValuesRadio.setAttribute("checked", "") : this.byNetworkRadio.setAttribute("checked", "");
  }
  render() {
    return c` <section>
      <div>
        <mwc-formfield label="${l("protocol104.view.valuesView")}">
          <mwc-radio
            id="byValuesRadio"
            name="view"
            value="values"
            @checked=${() => this.listDiv.dispatchEvent(Ui(ze.VALUES))}
          ></mwc-radio>
        </mwc-formfield>
        <mwc-formfield label="${l("protocol104.view.networkView")}">
          <mwc-radio
            id="byNetworkRadio"
            name="view"
            value="network"
            @checked=${() => this.listDiv.dispatchEvent(Ui(ze.NETWORK))}
          ></mwc-radio>
        </mwc-formfield>
        <div id="containers">
          ${zt == ze.VALUES ? c`<values-104-container
                .editCount=${this.editCount}
                .doc=${this.doc}
              ></values-104-container>` : c`<network-104-container
                .editCount=${this.editCount}
                .doc=${this.doc}
              ></network-104-container>`}
        </div>
      </div>
    </section>`;
  }
  static {
    this.styles = q`
    :host {
      width: 100vw;
    }

    section {
      padding: 8px 12px 16px;
    }
  `;
  }
}
at([
  p()
], ot.prototype, "doc");
at([
  p({ type: Number })
], ot.prototype, "editCount");
at([
  T("#byValuesRadio")
], ot.prototype, "byValuesRadio");
at([
  T("#byNetworkRadio")
], ot.prototype, "byNetworkRadio");
at([
  T("div#containers")
], ot.prototype, "listDiv");
export {
  ot as default
};
