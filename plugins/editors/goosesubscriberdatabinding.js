import { css as X, customElement as W, LitElement as Ce, html as m, query as C, property as f, state as E, queryAsync as St, queryAssignedNodes as Ei, eventOptions as je, svg as B, unsafeCSS as Yr } from "lit-element";
import { nothing as Le, directive as Qr, html as A, render as kn } from "lit-html";
import { get as d, registerTranslateConfig as Jr, use as ea } from "lit-translate";
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
const Nn = /* @__PURE__ */ new WeakMap(), ct = (t) => (...e) => {
  const i = t(...e);
  return Nn.set(i, !0), i;
}, wt = (t) => typeof t == "function" && Nn.has(t);
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
const Vi = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, ta = (t, e, i = null) => {
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
const Ee = {}, Pi = {};
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
const Ii = `{{lit-${String(Math.random()).slice(2)}}}`, ia = `<!--${Ii}-->`, na = "$lit$", ra = (t) => t.index !== -1, ft = () => document.createComment(""), aa = (
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
class Mi {
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
    const e = Vi ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), i = [], n = this.template.parts, r = document.createTreeWalker(e, 133, null, !1);
    let a = 0, o = 0, l, s = r.nextNode();
    for (; a < n.length; ) {
      if (l = n[a], !ra(l)) {
        this.__parts.push(void 0), a++;
        continue;
      }
      for (; o < l.index; )
        o++, s.nodeName === "TEMPLATE" && (i.push(s), r.currentNode = s.content), (s = r.nextNode()) === null && (r.currentNode = i.pop(), s = r.nextNode());
      if (l.type === "node") {
        const c = this.processor.handleTextExpression(this.options);
        c.insertAfterNode(s.previousSibling), this.__parts.push(c);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(s, l.name, l.strings, this.options));
      a++;
    }
    return Vi && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const Bi = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (t) => t }), oa = ` ${Ii} `;
class la {
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
      const l = aa.exec(a);
      l === null ? i += a + (n ? oa : ia) : i += a.substr(0, l.index) + l[1] + l[2] + na + l[3] + Ii;
    }
    return i += this.strings[e], i;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let i = this.getHTML();
    return Bi !== void 0 && (i = Bi.createHTML(i)), e.innerHTML = i, e;
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
const Ci = (t) => t === null || !(typeof t == "object" || typeof t == "function"), da = (t) => Array.isArray(t) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(t && t[Symbol.iterator]);
let ut = class {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== Ee && (!Ci(e) || e !== this.value) && (this.value = e, wt(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; wt(this.value); ) {
      const e = this.value;
      this.value = Ee, e(this);
    }
    this.value !== Ee && this.committer.commit();
  }
};
class Ut {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(ft()), this.endNode = e.appendChild(ft());
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
    e.__insert(this.startNode = ft()), e.__insert(this.endNode = ft());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = ft()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; wt(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = Ee, i(this);
    }
    const e = this.__pendingValue;
    e !== Ee && (Ci(e) ? e !== this.value && this.__commitText(e) : e instanceof la ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : da(e) ? this.__commitIterable(e) : e === Pi ? (this.value = Pi, this.clear()) : this.__commitText(e));
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
    if (this.value instanceof Mi && this.value.template === i)
      this.value.update(e.values);
    else {
      const n = new Mi(i, e.processor, this.options), r = n._clone();
      n.update(e.values), this.__commitNode(r), this.value = n;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const i = this.value;
    let n = 0, r;
    for (const a of e)
      r = i[n], r === void 0 && (r = new Ut(this.options), i.push(r), n === 0 ? r.appendIntoPart(this) : r.insertAfterPart(i[n - 1])), r.setValue(a), r.commit(), n++;
    n < i.length && (i.length = n, this.clear(r && r.endNode));
  }
  clear(e = this.startNode) {
    ta(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
let Ln = class {
  constructor(e, i, n) {
    if (this.value = void 0, this.__pendingValue = void 0, n.length !== 2 || n[0] !== "" || n[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = i, this.strings = n;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; wt(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = Ee, i(this);
    }
    if (this.__pendingValue === Ee)
      return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = Ee;
  }
};
class Et extends ut {
}
let Tn = !1;
(() => {
  try {
    const t = {
      get capture() {
        return Tn = !0, !1;
      }
    };
    window.addEventListener("test", t, t), window.removeEventListener("test", t, t);
  } catch {
  }
})();
let Dn = class {
  constructor(e, i, n) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = i, this.eventContext = n, this.__boundHandleEvent = (r) => this.handleEvent(r);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; wt(this.__pendingValue); ) {
      const a = this.__pendingValue;
      this.__pendingValue = Ee, a(this);
    }
    if (this.__pendingValue === Ee)
      return;
    const e = this.__pendingValue, i = this.value, n = e == null || i != null && (e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive), r = e != null && (i == null || n);
    n && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), r && (this.__options = sa(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = Ee;
  }
  handleEvent(e) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
};
const sa = (t) => t && (Tn ? { capture: t.capture, passive: t.passive, once: t.once } : t.capture);
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
class ca {
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
const Hi = /* @__PURE__ */ new WeakMap(), ee = ct((t) => (e) => {
  if (!(e instanceof ut) || e instanceof Et || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = e, { element: n } = i;
  let r = Hi.get(e);
  r === void 0 && (n.setAttribute("class", i.strings.join(" ")), Hi.set(e, r = /* @__PURE__ */ new Set()));
  const a = n.classList || new ca(n);
  r.forEach((o) => {
    o in t || (a.remove(o), r.delete(o));
  });
  for (const o in t) {
    const l = t[o];
    l != r.has(o) && (l ? (a.add(o), r.add(o)) : (a.remove(o), r.delete(o)));
  }
  typeof a.commit == "function" && a.commit();
});
var oi = function(t, e) {
  return oi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, n) {
    i.__proto__ = n;
  } || function(i, n) {
    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (i[r] = n[r]);
  }, oi(t, e);
};
function ze(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  oi(t, e);
  function i() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
}
var G = function() {
  return G = Object.assign || function(e) {
    for (var i, n = 1, r = arguments.length; n < r; n++) {
      i = arguments[n];
      for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
    }
    return e;
  }, G.apply(this, arguments);
};
function u(t, e, i, n) {
  var r = arguments.length, a = r < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, i) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(t, e, i, n);
  else for (var l = t.length - 1; l >= 0; l--) (o = t[l]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
  return r > 3 && a && Object.defineProperty(e, i, a), a;
}
function Oe(t) {
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
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ua = X`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;
let li = class extends Ce {
  /** @soyTemplate */
  render() {
    return m`<slot></slot>`;
  }
};
li.styles = [ua];
li = u([
  W("mwc-icon")
], li);
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
function ma(t, e) {
  var i = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return i.call(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const $n = (t) => t.nodeType === Node.ELEMENT_NODE;
function Wt(t) {
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
const zn = () => {
}, pa = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", zn, pa);
document.removeEventListener("x", zn);
const ki = (t = window.document) => {
  let e = t.activeElement;
  const i = [];
  if (!e)
    return i;
  for (; e && (i.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return i;
}, Rn = (t) => {
  const e = ki();
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
class nt extends Ce {
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
var ke = (
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
var ha = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, fa = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, qi = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function ba(t, e, i) {
  if (!t)
    return { x: 0, y: 0 };
  var n = e.x, r = e.y, a = n + i.left, o = r + i.top, l, s;
  if (t.type === "touchstart") {
    var c = t;
    l = c.changedTouches[0].pageX - a, s = c.changedTouches[0].pageY - o;
  } else {
    var h = t;
    l = h.pageX - a, s = h.pageY - o;
  }
  return { x: l, y: s };
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
var Gi = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Ui = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Tt = [], ga = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(i) {
      var n = t.call(this, G(G({}, e.defaultAdapter), i)) || this;
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
        return ha;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return fa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return qi;
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
          for (var a = Oe(Gi), o = a.next(); !o.done; o = a.next()) {
            var l = o.value;
            this.adapter.registerInteractionHandler(l, this.activateHandler);
          }
        } catch (s) {
          n = { error: s };
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
          for (var a = Oe(Ui), o = a.next(); !o.done; o = a.next()) {
            var l = o.value;
            this.adapter.registerDocumentInteractionHandler(l, this.deactivateHandler);
          }
        } catch (s) {
          n = { error: s };
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
        for (var r = Oe(Gi), a = r.next(); !a.done; a = r.next()) {
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
        for (var r = Oe(Ui), a = r.next(); !a.done; a = r.next()) {
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
            var l = i !== void 0 && Tt.length > 0 && Tt.some(function(s) {
              return n.adapter.containsEventTarget(s);
            });
            if (l) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (Tt.push(i.target), this.registerDeactivationHandlers(i)), r.wasElementMadeActive = this.checkElementMadeActive(i), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Tt = [], !r.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (r.wasElementMadeActive = n.checkElementMadeActive(i), r.wasElementMadeActive && n.animateActivation()), r.wasElementMadeActive || (n.activationState = n.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var i = this, n = e.strings, r = n.VAR_FG_TRANSLATE_START, a = n.VAR_FG_TRANSLATE_END, o = e.cssClasses, l = o.FG_DEACTIVATION, s = o.FG_ACTIVATION, c = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var h = "", b = "";
      if (!this.adapter.isUnbounded()) {
        var g = this.getFgTranslationCoordinates(), v = g.startPoint, y = g.endPoint;
        h = v.x + "px, " + v.y + "px", b = y.x + "px, " + y.y + "px";
      }
      this.adapter.updateCssVariable(r, h), this.adapter.updateCssVariable(a, b), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(l), this.adapter.computeBoundingRect(), this.adapter.addClass(s), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, c);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, n = i.activationEvent, r = i.wasActivatedByPointer, a;
      r ? a = ba(n, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      }, qi.FG_DEACTIVATION_MS));
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
        var r = G({}, n);
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
  }(ke)
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
const Wi = /* @__PURE__ */ new WeakMap(), On = ct((t) => (e) => {
  if (!(e instanceof ut) || e instanceof Et || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = e, { style: n } = i.element;
  let r = Wi.get(e);
  r === void 0 && (n.cssText = i.strings.join(" "), Wi.set(e, r = /* @__PURE__ */ new Set())), r.forEach((a) => {
    a in t || (r.delete(a), a.indexOf("-") === -1 ? n[a] = null : n.removeProperty(a));
  });
  for (const a in t)
    r.add(a), a.indexOf("-") === -1 ? n[a] = t[a] : n.setProperty(a, t[a]);
});
class te extends nt {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = ga;
  }
  get isActive() {
    return ma(this.parentElement || this, ":active");
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
    return m`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${ee(n)}"
          style="${On({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
u([
  C(".mdc-ripple-surface")
], te.prototype, "mdcRoot", void 0);
u([
  f({ type: Boolean })
], te.prototype, "primary", void 0);
u([
  f({ type: Boolean })
], te.prototype, "accent", void 0);
u([
  f({ type: Boolean })
], te.prototype, "unbounded", void 0);
u([
  f({ type: Boolean })
], te.prototype, "disabled", void 0);
u([
  f({ type: Boolean })
], te.prototype, "activated", void 0);
u([
  f({ type: Boolean })
], te.prototype, "selected", void 0);
u([
  f({ type: Boolean })
], te.prototype, "internalUseStateLayerCustomProperties", void 0);
u([
  E()
], te.prototype, "hovering", void 0);
u([
  E()
], te.prototype, "bgFocused", void 0);
u([
  E()
], te.prototype, "fgActivation", void 0);
u([
  E()
], te.prototype, "fgDeactivation", void 0);
u([
  E()
], te.prototype, "fgScale", void 0);
u([
  E()
], te.prototype, "fgSize", void 0);
u([
  E()
], te.prototype, "translateStart", void 0);
u([
  E()
], te.prototype, "translateEnd", void 0);
u([
  E()
], te.prototype, "leftPos", void 0);
u([
  E()
], te.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const xa = X`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let di = class extends te {
};
di.styles = [xa];
di = u([
  W("mwc-ripple")
], di);
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
          const s = this.constructor._observers.get(o);
          s !== void 0 && s.call(this, this[o], a);
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
class It {
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
class ae extends Ce {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new It(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const e = this.renderText(), i = this.graphic ? this.renderGraphic() : m``, n = this.hasMeta ? this.renderMeta() : m``;
    return m`
      ${this.renderRipple()}
      ${i}
      ${e}
      ${n}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? m`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? m`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return m`
      <span class="mdc-deprecated-list-item__graphic material-icons ${ee(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return m`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return m`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return m`<slot></slot>`;
  }
  renderTwoline() {
    return m`
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
u([
  C("slot")
], ae.prototype, "slotElement", void 0);
u([
  St("mwc-ripple")
], ae.prototype, "ripple", void 0);
u([
  f({ type: String })
], ae.prototype, "value", void 0);
u([
  f({ type: String, reflect: !0 })
], ae.prototype, "group", void 0);
u([
  f({ type: Number, reflect: !0 })
], ae.prototype, "tabindex", void 0);
u([
  f({ type: Boolean, reflect: !0 }),
  P(function(t) {
    t ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], ae.prototype, "disabled", void 0);
u([
  f({ type: Boolean, reflect: !0 })
], ae.prototype, "twoline", void 0);
u([
  f({ type: Boolean, reflect: !0 })
], ae.prototype, "activated", void 0);
u([
  f({ type: String, reflect: !0 })
], ae.prototype, "graphic", void 0);
u([
  f({ type: Boolean })
], ae.prototype, "multipleGraphics", void 0);
u([
  f({ type: Boolean })
], ae.prototype, "hasMeta", void 0);
u([
  f({ type: Boolean, reflect: !0 }),
  P(function(t) {
    t ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], ae.prototype, "noninteractive", void 0);
u([
  f({ type: Boolean, reflect: !0 }),
  P(function(t) {
    const e = this.getAttribute("role"), i = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (i && t ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(t, "property");
  })
], ae.prototype, "selected", void 0);
u([
  E()
], ae.prototype, "shouldRenderRipple", void 0);
u([
  E()
], ae.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Fn = X`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let si = class extends ae {
};
si.styles = [Fn];
si = u([
  W("mwc-list-item")
], si);
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
const Qt = /* @__PURE__ */ new WeakMap(), O = ct((t) => (e) => {
  const i = Qt.get(e);
  if (t === void 0 && e instanceof ut) {
    if (i !== void 0 || !Qt.has(e)) {
      const n = e.committer.name;
      e.committer.element.removeAttribute(n);
    }
  } else t !== i && e.setValue(t);
  Qt.set(e, t);
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
var N = {
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
}, he = /* @__PURE__ */ new Set();
he.add(N.BACKSPACE);
he.add(N.ENTER);
he.add(N.SPACEBAR);
he.add(N.PAGE_UP);
he.add(N.PAGE_DOWN);
he.add(N.END);
he.add(N.HOME);
he.add(N.ARROW_LEFT);
he.add(N.ARROW_UP);
he.add(N.ARROW_RIGHT);
he.add(N.ARROW_DOWN);
he.add(N.DELETE);
he.add(N.ESCAPE);
he.add(N.TAB);
var ve = {
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
}, fe = /* @__PURE__ */ new Map();
fe.set(ve.BACKSPACE, N.BACKSPACE);
fe.set(ve.ENTER, N.ENTER);
fe.set(ve.SPACEBAR, N.SPACEBAR);
fe.set(ve.PAGE_UP, N.PAGE_UP);
fe.set(ve.PAGE_DOWN, N.PAGE_DOWN);
fe.set(ve.END, N.END);
fe.set(ve.HOME, N.HOME);
fe.set(ve.ARROW_LEFT, N.ARROW_LEFT);
fe.set(ve.ARROW_UP, N.ARROW_UP);
fe.set(ve.ARROW_RIGHT, N.ARROW_RIGHT);
fe.set(ve.ARROW_DOWN, N.ARROW_DOWN);
fe.set(ve.DELETE, N.DELETE);
fe.set(ve.ESCAPE, N.ESCAPE);
fe.set(ve.TAB, N.TAB);
var Ke = /* @__PURE__ */ new Set();
Ke.add(N.PAGE_UP);
Ke.add(N.PAGE_DOWN);
Ke.add(N.END);
Ke.add(N.HOME);
Ke.add(N.ARROW_LEFT);
Ke.add(N.ARROW_UP);
Ke.add(N.ARROW_RIGHT);
Ke.add(N.ARROW_DOWN);
function U(t) {
  var e = t.key;
  if (he.has(e))
    return e;
  var i = fe.get(t.keyCode);
  return i || N.UNKNOWN;
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
var qe, Re, F = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
qe = {}, qe["" + F.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", qe["" + F.LIST_ITEM_CLASS] = "mdc-list-item", qe["" + F.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", qe["" + F.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", qe["" + F.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", qe["" + F.ROOT] = "mdc-list";
var lt = (Re = {}, Re["" + F.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", Re["" + F.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", Re["" + F.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", Re["" + F.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", Re["" + F.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", Re["" + F.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", Re["" + F.ROOT] = "mdc-deprecated-list", Re), Dt = {
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
    .` + F.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + F.LIST_ITEM_CLASS + ` a,
    .` + lt[F.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + lt[F.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + F.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + F.LIST_ITEM_CLASS + ` a,
    .` + F.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + F.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + lt[F.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + lt[F.LIST_ITEM_CLASS] + ` a,
    .` + lt[F.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + lt[F.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, se = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ci = (t, e) => t - e, va = (t, e) => {
  const i = Array.from(t), n = Array.from(e), r = { added: [], removed: [] }, a = i.sort(ci), o = n.sort(ci);
  let l = 0, s = 0;
  for (; l < a.length || s < o.length; ) {
    const c = a[l], h = o[s];
    if (c === h) {
      l++, s++;
      continue;
    }
    if (c !== void 0 && (h === void 0 || c < h)) {
      r.removed.push(c), l++;
      continue;
    }
    if (h !== void 0 && (c === void 0 || h < c)) {
      r.added.push(h), s++;
      continue;
    }
  }
  return r;
}, ya = ["input", "button", "textarea", "select"];
function vt(t) {
  return t instanceof Set;
}
const Jt = (t) => {
  const e = t === se.UNSET_INDEX ? /* @__PURE__ */ new Set() : t;
  return vt(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class Ni extends ke {
  constructor(e) {
    super(Object.assign(Object.assign({}, Ni.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = se.UNSET_INDEX, this.focusedItemIndex_ = se.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return Dt;
  }
  static get numbers() {
    return se;
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
      if (!vt(i)) {
        const n = i === se.UNSET_INDEX;
        this.selectedIndex_ = n ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
    } else if (vt(i))
      if (i.size) {
        const n = Array.from(i).sort(ci);
        this.selectedIndex_ = n[0];
      } else
        this.selectedIndex_ = se.UNSET_INDEX;
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
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(Jt(e)) : this.setSingleSelectionAtIndex_(e));
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
    const r = U(e) === "ArrowLeft", a = U(e) === "ArrowUp", o = U(e) === "ArrowRight", l = U(e) === "ArrowDown", s = U(e) === "Home", c = U(e) === "End", h = U(e) === "Enter", b = U(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      a || c ? (e.preventDefault(), this.focusLastElement()) : (l || s) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let g = this.adapter.getFocusedElementIndex();
    if (g === -1 && (g = n, g < 0))
      return;
    let v;
    if (this.isVertical_ && l || !this.isVertical_ && o)
      this.preventDefaultEvent(e), v = this.focusNextElement(g);
    else if (this.isVertical_ && a || !this.isVertical_ && r)
      this.preventDefaultEvent(e), v = this.focusPrevElement(g);
    else if (s)
      this.preventDefaultEvent(e), v = this.focusFirstElement();
    else if (c)
      this.preventDefaultEvent(e), v = this.focusLastElement();
    else if ((h || b) && i) {
      const y = e.target;
      if (y && y.tagName === "A" && h)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(g, !0);
    }
    this.focusedItemIndex_ = g, v !== void 0 && (this.setTabindexAtIndex_(v), this.focusedItemIndex_ = v);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, i, n) {
    e !== se.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, i, n), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
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
    ya.indexOf(n) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, i = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== se.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), i && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, i = !0) {
    const n = Jt(this.selectedIndex_), r = va(n, e);
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
    this.selectedIndex_ === se.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, Dt.ARIA_CURRENT));
    const i = this.ariaCurrentAttrValue_ !== null, n = i ? Dt.ARIA_CURRENT : Dt.ARIA_SELECTED;
    this.selectedIndex_ !== se.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, n, "false");
    const r = i ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, n, r);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === se.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== se.UNSET_INDEX ? e = this.selectedIndex_ : vt(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
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
      return e === se.UNSET_INDEX || this.isIndexInRange_(e);
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
    this.isMulti_ && (r = /* @__PURE__ */ new Set([e])), this.isIndexValid_(r) && (this.isMulti_ ? this.toggleMultiAtIndex(e, n, i) : i || n ? this.setSingleSelectionAtIndex_(e, i) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(se.UNSET_INDEX), i && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, i, n = !0) {
    let r = !1;
    i === void 0 ? r = !this.adapter.getSelectedStateForElementIndex(e) : r = i;
    const a = Jt(this.selectedIndex_);
    r ? a.add(e) : a.delete(e), this.setMultiSelectionAtIndex_(a, n);
  }
}
function wa(t, e = 50) {
  let i;
  return function(n = !0) {
    clearTimeout(i), i = setTimeout(() => {
      t(n);
    }, e);
  };
}
const $t = (t) => t.hasAttribute("mwc-list-item");
function _a() {
  const t = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), t();
}
class be extends nt {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = Ni, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = wa(this.layout.bind(this));
    this.debouncedLayout = (i = !0) => {
      _a.call(this), e(i);
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
      $t(o) && (n.push(o), o._managingList = this), o.hasAttribute("divider") && !o.hasAttribute("role") && o.setAttribute("role", "separator");
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
    if (!vt(e))
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
    return m`
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
    return this.emptyMessage !== void 0 && i.length === 0 ? m`
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
      const i = this.getIndexOfTarget(e), n = e.target, r = $t(n);
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
      if ($n(r) && $t(r) && (a = i.indexOf(r)), a !== -1)
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
      isFocusInsideList: () => Rn(this),
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
    const e = ki();
    if (!e.length)
      return -1;
    for (let i = e.length - 1; i >= 0; i--) {
      const n = e[i];
      if ($t(n))
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
u([
  f({ type: String })
], be.prototype, "emptyMessage", void 0);
u([
  C(".mdc-deprecated-list")
], be.prototype, "mdcRoot", void 0);
u([
  Ei("", !0, "*")
], be.prototype, "assignedElements", void 0);
u([
  Ei("", !0, '[tabindex="0"]')
], be.prototype, "tabbableElements", void 0);
u([
  f({ type: Boolean }),
  P(function(t) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(t);
  })
], be.prototype, "activatable", void 0);
u([
  f({ type: Boolean }),
  P(function(t, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(t), e !== void 0 && this.layout();
  })
], be.prototype, "multi", void 0);
u([
  f({ type: Boolean }),
  P(function(t) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(t);
  })
], be.prototype, "wrapFocus", void 0);
u([
  f({ type: String }),
  P(function(t, e) {
    e !== void 0 && this.updateItems();
  })
], be.prototype, "itemRoles", void 0);
u([
  f({ type: String })
], be.prototype, "innerRole", void 0);
u([
  f({ type: String })
], be.prototype, "innerAriaLabel", void 0);
u([
  f({ type: Boolean })
], be.prototype, "rootTabbable", void 0);
u([
  f({ type: Boolean, reflect: !0 }),
  P(function(t) {
    var e, i;
    if (t) {
      const n = (i = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && i !== void 0 ? i : null;
      this.previousTabindex = n, n && n.setAttribute("tabindex", "-1");
    } else !t && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], be.prototype, "noninteractive", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Aa = X`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Bt = class extends be {
};
Bt.styles = [Aa];
Bt = u([
  W("mwc-list")
], Bt);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Sa(t, e, i) {
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
function mt(t, e, i) {
  if (e !== void 0)
    return Sa(t, e, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class We extends nt {
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
We.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
class ie extends We {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new It(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
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
    return this.shouldRenderRipple ? m`<mwc-ripple
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
    return m`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${ee(i)}">
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
u([
  C(".mdc-checkbox")
], ie.prototype, "mdcRoot", void 0);
u([
  C("input")
], ie.prototype, "formElement", void 0);
u([
  f({ type: Boolean, reflect: !0 })
], ie.prototype, "checked", void 0);
u([
  f({ type: Boolean })
], ie.prototype, "indeterminate", void 0);
u([
  f({ type: Boolean, reflect: !0 })
], ie.prototype, "disabled", void 0);
u([
  f({ type: String, reflect: !0 })
], ie.prototype, "name", void 0);
u([
  f({ type: String })
], ie.prototype, "value", void 0);
u([
  mt,
  f({ type: String, attribute: "aria-label" })
], ie.prototype, "ariaLabel", void 0);
u([
  mt,
  f({ type: String, attribute: "aria-labelledby" })
], ie.prototype, "ariaLabelledBy", void 0);
u([
  mt,
  f({ type: String, attribute: "aria-describedby" })
], ie.prototype, "ariaDescribedBy", void 0);
u([
  f({ type: Boolean })
], ie.prototype, "reducedTouchTarget", void 0);
u([
  E()
], ie.prototype, "animationClass", void 0);
u([
  E()
], ie.prototype, "shouldRenderRipple", void 0);
u([
  E()
], ie.prototype, "focused", void 0);
u([
  E()
], ie.prototype, "useStateLayerCustomProperties", void 0);
u([
  St("mwc-ripple")
], ie.prototype, "ripple", void 0);
u([
  je({ passive: !0 })
], ie.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ea = X`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let ui = class extends ie {
};
ui.styles = [Ea];
ui = u([
  W("mwc-checkbox")
], ui);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ct extends ae {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), n = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : m``, r = this.hasMeta && this.left ? this.renderMeta() : m``, a = this.renderRipple();
    return m`
      ${a}
      ${n}
      ${this.left ? "" : i}
      <span class=${ee(e)}>
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
u([
  C("slot")
], Ct.prototype, "slotElement", void 0);
u([
  C("mwc-checkbox")
], Ct.prototype, "checkboxElement", void 0);
u([
  f({ type: Boolean })
], Ct.prototype, "left", void 0);
u([
  f({ type: String, reflect: !0 })
], Ct.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ia = X`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let st = class extends Ct {
};
st.styles = [Fn, Ia];
st = u([
  W("mwc-check-list-item")
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
var Ca = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, ka = {
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
}, zt = {
  /** Total duration of menu-surface open animation. */
  TRANSITION_OPEN_DURATION: 120,
  /** Total duration of menu-surface close animation. */
  TRANSITION_CLOSE_DURATION: 75,
  /** Margin left to the edge of the viewport when menu-surface is at maximum possible height. Also used as a viewport margin. */
  MARGIN_TO_EDGE: 32,
  /** Ratio of anchor width to menu-surface width for switching from corner positioning to center positioning. */
  ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67
}, q;
(function(t) {
  t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL";
})(q || (q = {}));
var ce;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})(ce || (ce = {}));
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
var Vn = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(i) {
      var n = t.call(this, G(G({}, e.defaultAdapter), i)) || this;
      return n.isSurfaceOpen = !1, n.isQuickOpen = !1, n.isHoistedElement = !1, n.isFixedPosition = !1, n.isHorizontallyCenteredOnViewport = !1, n.maxHeight = 0, n.openAnimationEndTimerId = 0, n.closeAnimationEndTimerId = 0, n.animationRequestId = 0, n.anchorCorner = ce.TOP_START, n.originCorner = ce.TOP_START, n.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, n.position = { x: 0, y: 0 }, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ca;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ka;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return zt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return ce;
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
      this.originCorner = this.originCorner ^ q.RIGHT;
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
        }, zt.TRANSITION_OPEN_DURATION);
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
          }, zt.TRANSITION_CLOSE_DURATION);
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
      var n = this.getoriginCorner(), r = this.getMenuSurfaceMaxHeight(n), a = this.hasBit(n, q.BOTTOM) ? "bottom" : "top", o = this.hasBit(n, q.RIGHT) ? "right" : "left", l = this.getHorizontalOriginOffset(n), s = this.getVerticalOriginOffset(n), c = this.measurements, h = c.anchorSize, b = c.surfaceSize, g = (i = {}, i[o] = l, i[a] = s, i);
      h.width / b.width > zt.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (o = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(g), this.adapter.setTransformOrigin(o + " " + a), this.adapter.setPosition(g), this.adapter.setMaxHeight(r ? r + "px" : ""), this.hasBit(n, q.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var i = this.originCorner, n = this.measurements, r = n.viewportDistance, a = n.anchorSize, o = n.surfaceSize, l = e.numbers.MARGIN_TO_EDGE, s = this.hasBit(this.anchorCorner, q.BOTTOM), c, h;
      s ? (c = r.top - l + this.anchorMargin.bottom, h = r.bottom - l - this.anchorMargin.bottom) : (c = r.top - l + this.anchorMargin.top, h = r.bottom - l + a.height - this.anchorMargin.top);
      var b = h - o.height > 0;
      !b && c > h && (i = this.setBit(i, q.BOTTOM));
      var g = this.adapter.isRtl(), v = this.hasBit(this.anchorCorner, q.FLIP_RTL), y = this.hasBit(this.anchorCorner, q.RIGHT) || this.hasBit(i, q.RIGHT), I = !1;
      g && v ? I = !y : I = y;
      var D, S;
      I ? (D = r.left + a.width + this.anchorMargin.right, S = r.right - this.anchorMargin.right) : (D = r.left + this.anchorMargin.left, S = r.right + a.width - this.anchorMargin.left);
      var Z = D - o.width > 0, _e = S - o.width > 0, Se = this.hasBit(i, q.FLIP_RTL) && this.hasBit(i, q.RIGHT);
      return _e && Se && g || !Z && Se ? i = this.unsetBit(i, q.RIGHT) : (Z && I && g || Z && !I && y || !_e && D >= S) && (i = this.setBit(i, q.RIGHT)), i;
    }, e.prototype.getMenuSurfaceMaxHeight = function(i) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var n = this.measurements.viewportDistance, r = 0, a = this.hasBit(i, q.BOTTOM), o = this.hasBit(this.anchorCorner, q.BOTTOM), l = e.numbers.MARGIN_TO_EDGE;
      return a ? (r = n.top + this.anchorMargin.top - l, o || (r += this.measurements.anchorSize.height)) : (r = n.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - l, o && (r -= this.measurements.anchorSize.height)), r;
    }, e.prototype.getHorizontalOriginOffset = function(i) {
      var n = this.measurements.anchorSize, r = this.hasBit(i, q.RIGHT), a = this.hasBit(this.anchorCorner, q.RIGHT);
      if (r) {
        var o = a ? n.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? o - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : o;
      }
      return a ? n.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(i) {
      var n = this.measurements.anchorSize, r = this.hasBit(i, q.BOTTOM), a = this.hasBit(this.anchorCorner, q.BOTTOM), o = 0;
      return r ? o = a ? n.height - this.anchorMargin.top : -this.anchorMargin.bottom : o = a ? n.height + this.anchorMargin.bottom : this.anchorMargin.top, o;
    }, e.prototype.adjustPositionForHoistedElement = function(i) {
      var n, r, a = this.measurements, o = a.windowScroll, l = a.viewportDistance, s = a.surfaceSize, c = a.viewportSize, h = Object.keys(i);
      try {
        for (var b = Oe(h), g = b.next(); !g.done; g = b.next()) {
          var v = g.value, y = i[v] || 0;
          if (this.isHorizontallyCenteredOnViewport && (v === "left" || v === "right")) {
            i[v] = (c.width - s.width) / 2;
            continue;
          }
          y += l[v], this.isFixedPosition || (v === "top" ? y += o.y : v === "bottom" ? y -= o.y : v === "left" ? y += o.x : y -= o.x), i[v] = y;
        }
      } catch (I) {
        n = { error: I };
      } finally {
        try {
          g && !g.done && (r = b.return) && r.call(b);
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
  }(ke)
);
const Na = {
  TOP_LEFT: ce.TOP_LEFT,
  TOP_RIGHT: ce.TOP_RIGHT,
  BOTTOM_LEFT: ce.BOTTOM_LEFT,
  BOTTOM_RIGHT: ce.BOTTOM_RIGHT,
  TOP_START: ce.TOP_START,
  TOP_END: ce.TOP_END,
  BOTTOM_START: ce.BOTTOM_START,
  BOTTOM_END: ce.BOTTOM_END
};
class Q extends nt {
  constructor() {
    super(...arguments), this.mdcFoundationClass = Vn, this.absolute = !1, this.fullwidth = !1, this.fixed = !1, this.x = null, this.y = null, this.quick = !1, this.open = !1, this.stayOpenOnBodyClick = !1, this.bitwiseCorner = ce.TOP_START, this.previousMenuCorner = null, this.menuCorner = "START", this.corner = "TOP_START", this.styleTop = "", this.styleLeft = "", this.styleRight = "", this.styleBottom = "", this.styleMaxHeight = "", this.styleTransformOrigin = "", this.anchor = null, this.previouslyFocused = null, this.previousAnchor = null, this.onBodyClickBound = () => {
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
    return m`
      <div
          class="mdc-menu-surface ${ee(e)}"
          style="${On(i)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Wt(this.mdcRoot)), { hasAnchor: () => !!this.anchor, notifyClose: () => {
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
    }, isFocused: () => Rn(this), saveFocus: () => {
      const e = ki(), i = e.length;
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
u([
  C(".mdc-menu-surface")
], Q.prototype, "mdcRoot", void 0);
u([
  C("slot")
], Q.prototype, "slotElement", void 0);
u([
  f({ type: Boolean }),
  P(function(t) {
    this.mdcFoundation && !this.fixed && this.mdcFoundation.setIsHoisted(t);
  })
], Q.prototype, "absolute", void 0);
u([
  f({ type: Boolean })
], Q.prototype, "fullwidth", void 0);
u([
  f({ type: Boolean }),
  P(function(t) {
    this.mdcFoundation && !this.absolute && this.mdcFoundation.setFixedPosition(t);
  })
], Q.prototype, "fixed", void 0);
u([
  f({ type: Number }),
  P(function(t) {
    this.mdcFoundation && this.y !== null && t !== null && (this.mdcFoundation.setAbsolutePosition(t, this.y), this.mdcFoundation.setAnchorMargin({ left: t, top: this.y, right: -t, bottom: this.y }));
  })
], Q.prototype, "x", void 0);
u([
  f({ type: Number }),
  P(function(t) {
    this.mdcFoundation && this.x !== null && t !== null && (this.mdcFoundation.setAbsolutePosition(this.x, t), this.mdcFoundation.setAnchorMargin({ left: this.x, top: t, right: -this.x, bottom: t }));
  })
], Q.prototype, "y", void 0);
u([
  f({ type: Boolean }),
  P(function(t) {
    this.mdcFoundation && this.mdcFoundation.setQuickOpen(t);
  })
], Q.prototype, "quick", void 0);
u([
  f({ type: Boolean, reflect: !0 }),
  P(function(t, e) {
    this.mdcFoundation && (t ? this.mdcFoundation.open() : e !== void 0 && this.mdcFoundation.close());
  })
], Q.prototype, "open", void 0);
u([
  f({ type: Boolean })
], Q.prototype, "stayOpenOnBodyClick", void 0);
u([
  E(),
  P(function(t) {
    this.mdcFoundation && (t ? this.mdcFoundation.setAnchorCorner(t) : this.mdcFoundation.setAnchorCorner(t));
  })
], Q.prototype, "bitwiseCorner", void 0);
u([
  f({ type: String }),
  P(function(t) {
    if (this.mdcFoundation) {
      const e = t === "START" || t === "END", i = this.previousMenuCorner === null, n = !i && t !== this.previousMenuCorner;
      e && (n || i && t === "END") && (this.bitwiseCorner = this.bitwiseCorner ^ q.RIGHT, this.mdcFoundation.flipCornerHorizontally(), this.previousMenuCorner = t);
    }
  })
], Q.prototype, "menuCorner", void 0);
u([
  f({ type: String }),
  P(function(t) {
    if (this.mdcFoundation && t) {
      let e = Na[t];
      this.menuCorner === "END" && (e = e ^ q.RIGHT), this.bitwiseCorner = e;
    }
  })
], Q.prototype, "corner", void 0);
u([
  E()
], Q.prototype, "styleTop", void 0);
u([
  E()
], Q.prototype, "styleLeft", void 0);
u([
  E()
], Q.prototype, "styleRight", void 0);
u([
  E()
], Q.prototype, "styleBottom", void 0);
u([
  E()
], Q.prototype, "styleMaxHeight", void 0);
u([
  E()
], Q.prototype, "styleTransformOrigin", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const La = X`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let mi = class extends Q {
};
mi.styles = [La];
mi = u([
  W("mwc-menu-surface")
], mi);
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
var ei = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, bt = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected"
}, Ta = {
  FOCUS_ROOT_INDEX: -1
}, it;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(it || (it = {}));
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
var Da = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(i) {
      var n = t.call(this, G(G({}, e.defaultAdapter), i)) || this;
      return n.closeAnimationEndTimerId = 0, n.defaultFocusState = it.LIST_ROOT, n.selectedIndex = -1, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ei;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return bt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ta;
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
      }, Vn.numbers.TRANSITION_CLOSE_DURATION));
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case it.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case it.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case it.NONE:
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
      n >= 0 && (this.adapter.removeAttributeFromElementAtIndex(n, bt.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(n, ei.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(i, ei.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(i, bt.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = i;
    }, e.prototype.setEnabled = function(i, n) {
      this.validatedIndex(i), n ? (this.adapter.removeClassFromElementAtIndex(i, F.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(i, bt.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(i, F.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(i, bt.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(i) {
      var n = this.adapter.getMenuItemCount(), r = i >= 0 && i < n;
      if (!r)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(ke)
);
class J extends nt {
  constructor() {
    super(...arguments), this.mdcFoundationClass = Da, this.listElement_ = null, this.anchor = null, this.open = !1, this.quick = !1, this.wrapFocus = !1, this.innerRole = "menu", this.corner = "TOP_START", this.x = null, this.y = null, this.absolute = !1, this.multi = !1, this.activatable = !1, this.fixed = !1, this.forceGroupSelection = !1, this.fullwidth = !1, this.menuCorner = "START", this.stayOpenOnBodyClick = !1, this.defaultFocus = "LIST_ROOT", this._listUpdateComplete = null;
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
    return m`
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
u([
  C(".mdc-menu")
], J.prototype, "mdcRoot", void 0);
u([
  C("slot")
], J.prototype, "slotElement", void 0);
u([
  f({ type: Object })
], J.prototype, "anchor", void 0);
u([
  f({ type: Boolean, reflect: !0 })
], J.prototype, "open", void 0);
u([
  f({ type: Boolean })
], J.prototype, "quick", void 0);
u([
  f({ type: Boolean })
], J.prototype, "wrapFocus", void 0);
u([
  f({ type: String })
], J.prototype, "innerRole", void 0);
u([
  f({ type: String })
], J.prototype, "corner", void 0);
u([
  f({ type: Number })
], J.prototype, "x", void 0);
u([
  f({ type: Number })
], J.prototype, "y", void 0);
u([
  f({ type: Boolean })
], J.prototype, "absolute", void 0);
u([
  f({ type: Boolean })
], J.prototype, "multi", void 0);
u([
  f({ type: Boolean })
], J.prototype, "activatable", void 0);
u([
  f({ type: Boolean })
], J.prototype, "fixed", void 0);
u([
  f({ type: Boolean })
], J.prototype, "forceGroupSelection", void 0);
u([
  f({ type: Boolean })
], J.prototype, "fullwidth", void 0);
u([
  f({ type: String })
], J.prototype, "menuCorner", void 0);
u([
  f({ type: Boolean })
], J.prototype, "stayOpenOnBodyClick", void 0);
u([
  f({ type: String }),
  P(function(t) {
    this.mdcFoundation && this.mdcFoundation.setDefaultFocusState(it[t]);
  })
], J.prototype, "defaultFocus", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const $a = X`mwc-list ::slotted([mwc-list-item]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let pi = class extends J {
};
pi.styles = [$a];
pi = u([
  W("mwc-menu")
], pi);
class Be extends Ce {
  constructor() {
    super(...arguments), this.disabled = !1, this.icon = "", this.shouldRenderRipple = !1, this.rippleHandlers = new It(() => (this.shouldRenderRipple = !0, this.ripple));
  }
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? m`
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
    return m`<button
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
u([
  f({ type: Boolean, reflect: !0 })
], Be.prototype, "disabled", void 0);
u([
  f({ type: String })
], Be.prototype, "icon", void 0);
u([
  mt,
  f({ type: String, attribute: "aria-label" })
], Be.prototype, "ariaLabel", void 0);
u([
  C("button")
], Be.prototype, "buttonElement", void 0);
u([
  St("mwc-ripple")
], Be.prototype, "ripple", void 0);
u([
  E()
], Be.prototype, "shouldRenderRipple", void 0);
u([
  je({ passive: !0 })
], Be.prototype, "handleRippleMouseDown", null);
u([
  je({ passive: !0 })
], Be.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const za = X`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button--touch{margin-top:0px;margin-bottom:0px}:host{display:inline-block;outline:none;--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host([disabled]){pointer-events:none}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button>i{position:absolute;top:0;padding-top:inherit}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let hi = class extends Be {
};
hi.styles = [za];
hi = u([
  W("mwc-icon-button")
], hi);
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
var Ra = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, ji = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Oa = {
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
var Fa = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(i) {
      return t.call(this, G(G({}, e.defaultAdapter), i)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Ra;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Oa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ji;
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
      i > 0 && (i += ji.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(i), this.adapter.addClass(n);
    }, e.prototype.closeNotch = function() {
      var i = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(i), this.adapter.removeNotchWidthProperty();
    }, e;
  }(ke)
);
class kt extends nt {
  constructor() {
    super(...arguments), this.mdcFoundationClass = Fa, this.width = 0, this.open = !1, this.lastOpen = this.open;
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
    const e = ee({
      "mdc-notched-outline--notched": this.open
    });
    return m`
      <span class="mdc-notched-outline ${e}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`;
  }
}
u([
  C(".mdc-notched-outline")
], kt.prototype, "mdcRoot", void 0);
u([
  f({ type: Number })
], kt.prototype, "width", void 0);
u([
  f({ type: Boolean, reflect: !0 })
], kt.prototype, "open", void 0);
u([
  C(".mdc-notched-outline__notch")
], kt.prototype, "notchElement", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Va = X`.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host([dir=rtl]){text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`;
let fi = class extends kt {
};
fi.styles = [Va];
fi = u([
  W("mwc-notched-outline")
], fi);
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
var Pa = ["input", "button", "textarea", "select"], Ki = function(t) {
  var e = t.target;
  if (e) {
    var i = ("" + e.tagName).toLowerCase();
    Pa.indexOf(i) === -1 && t.preventDefault();
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
function Ma() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function Xi(t, e) {
  for (var i = /* @__PURE__ */ new Map(), n = 0; n < t; n++) {
    var r = e(n).trim();
    if (r) {
      var a = r[0].toLowerCase();
      i.has(a) || i.set(a, []), i.get(a).push({ text: r.toLowerCase(), index: n });
    }
  }
  return i.forEach(function(o) {
    o.sort(function(l, s) {
      return l.index - s.index;
    });
  }), i;
}
function bi(t, e) {
  var i = t.nextChar, n = t.focusItemAtIndex, r = t.sortedIndexByFirstChar, a = t.focusedItemIndex, o = t.skipFocus, l = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    qa(e);
  }, se.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + i;
  var s;
  return e.typeaheadBuffer.length === 1 ? s = Ba(r, a, l, e) : s = Ha(r, l, e), s !== -1 && !o && n(s), s;
}
function Ba(t, e, i, n) {
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
  var l = -1, s;
  for (s = 0; s < a.length; s++)
    if (!i(a[s].index)) {
      l = s;
      break;
    }
  for (; s < a.length; s++)
    if (a[s].index > e && !i(a[s].index)) {
      l = s;
      break;
    }
  return l !== -1 ? (n.sortedIndexCursor = l, a[n.sortedIndexCursor].index) : -1;
}
function Ha(t, e, i) {
  var n = i.typeaheadBuffer[0], r = t.get(n);
  if (!r)
    return -1;
  var a = r[i.sortedIndexCursor];
  if (a.text.lastIndexOf(i.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  for (var o = (i.sortedIndexCursor + 1) % r.length, l = -1; o !== i.sortedIndexCursor; ) {
    var s = r[o], c = s.text.lastIndexOf(i.typeaheadBuffer, 0) === 0, h = !e(s.index);
    if (c && h) {
      l = o;
      break;
    }
    o = (o + 1) % r.length;
  }
  return l !== -1 ? (i.sortedIndexCursor = l, r[i.sortedIndexCursor].index) : -1;
}
function Pn(t) {
  return t.typeaheadBuffer.length > 0;
}
function qa(t) {
  t.typeaheadBuffer = "";
}
function Ga(t, e) {
  var i = t.event, n = t.isTargetListItem, r = t.focusedItemIndex, a = t.focusItemAtIndex, o = t.sortedIndexByFirstChar, l = t.isItemAtIndexDisabled, s = U(i) === "ArrowLeft", c = U(i) === "ArrowUp", h = U(i) === "ArrowRight", b = U(i) === "ArrowDown", g = U(i) === "Home", v = U(i) === "End", y = U(i) === "Enter", I = U(i) === "Spacebar";
  if (i.ctrlKey || i.metaKey || s || c || h || b || g || v || y)
    return -1;
  var D = !I && i.key.length === 1;
  if (D) {
    Ki(i);
    var S = {
      focusItemAtIndex: a,
      focusedItemIndex: r,
      nextChar: i.key.toLowerCase(),
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: l
    };
    return bi(S, e);
  }
  if (!I)
    return -1;
  n && Ki(i);
  var Z = n && Pn(e);
  if (Z) {
    var S = {
      focusItemAtIndex: a,
      focusedItemIndex: r,
      nextChar: " ",
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: l
    };
    return bi(S, e);
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
var Ua = {
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
var Wa = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(i) {
      var n = t.call(this, G(G({}, e.defaultAdapter), i)) || this;
      return n.shakeAnimationEndHandler = function() {
        n.handleShakeAnimationEnd();
      }, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ua;
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
  }(ke)
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
const Pe = {
  ATTRIBUTE: 1,
  CHILD: 2,
  PROPERTY: 3,
  BOOLEAN_ATTRIBUTE: 4,
  EVENT: 5
};
class ja {
  constructor(e) {
    this.type = Pe.CHILD, this.options = e.options, this.legacyPart = e;
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
class Ka {
  constructor(e) {
    this.legacyPart = e, this.type = e instanceof Et ? Pe.PROPERTY : Pe.ATTRIBUTE;
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
class Xa {
  constructor(e) {
    this.type = Pe.BOOLEAN_ATTRIBUTE, this.legacyPart = e;
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
class Za {
  constructor(e) {
    this.type = Pe.EVENT, this.legacyPart = e;
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
function Ya(t) {
  if (t instanceof Ut)
    return new ja(t);
  if (t instanceof Dn)
    return new Za(t);
  if (t instanceof Ln)
    return new Xa(t);
  if (t instanceof Et || t instanceof ut)
    return new Ka(t);
  throw new Error("Unknown part type");
}
class Mn {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(e) {
  }
  update(e, i) {
    return this.render(...i);
  }
}
function Bn(t) {
  const e = /* @__PURE__ */ new WeakMap();
  return ct((...n) => (r) => {
    const a = e.get(r);
    let o, l;
    a === void 0 ? (o = Ya(r), l = new t(o), e.set(r, [o, l])) : (o = a[0], l = a[1]), r.setValue(l.update(o, n)), r.commit();
  });
}
const Qa = (t) => ({
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
class Ja extends Mn {
  constructor(e) {
    switch (super(e), this.foundation = null, this.previousPart = null, e.type) {
      // Only allow Attribute and Part bindings
      case Pe.ATTRIBUTE:
      case Pe.PROPERTY:
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
      const r = Qa(n);
      this.foundation = new Wa(r), this.foundation.init();
    }
    return this.render(i);
  }
  render(e) {
    return this.foundation;
  }
}
const Hn = Bn(Ja);
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
var Qe = {
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
var eo = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(i) {
      var n = t.call(this, G(G({}, e.defaultAdapter), i)) || this;
      return n.transitionEndHandler = function(r) {
        n.handleTransitionEnd(r);
      }, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Qe;
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
      this.adapter.removeClass(Qe.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Qe.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(i) {
      this.adapter.setStyle("transform-origin", i + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(Qe.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(i) {
      var n = this.adapter.hasClass(Qe.LINE_RIPPLE_DEACTIVATING);
      i.propertyName === "opacity" && n && (this.adapter.removeClass(Qe.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Qe.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(ke)
);
const to = (t) => ({
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
class io extends Mn {
  constructor(e) {
    switch (super(e), this.previousPart = null, this.foundation = null, e.type) {
      case Pe.ATTRIBUTE:
      case Pe.PROPERTY:
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
      const r = to(n);
      this.foundation = new eo(r), this.foundation.init();
    }
    return this.render();
  }
  render() {
    return this.foundation;
  }
}
const qn = Bn(io);
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
var H = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, ti = {
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
}, Je = {
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
var no = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(i, n) {
      n === void 0 && (n = {});
      var r = t.call(this, G(G({}, e.defaultAdapter), i)) || this;
      return r.disabled = !1, r.isMenuOpen = !1, r.useDefaultValidation = !0, r.customValidity = !0, r.lastSelectedIndex = Je.UNSET_INDEX, r.clickDebounceTimeout = 0, r.recentlyClicked = !1, r.leadingIcon = n.leadingIcon, r.helperText = n.helperText, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return H;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Je;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ti;
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
      n === void 0 && (n = !1), r === void 0 && (r = !1), !(i >= this.adapter.getMenuItemCount()) && (i === Je.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(i).trim()), this.adapter.setSelectedIndex(i), n && this.adapter.closeMenu(), !r && this.lastSelectedIndex !== i && this.handleChange(), this.lastSelectedIndex = i);
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
      return i !== Je.UNSET_INDEX ? n[i] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(i) {
      this.disabled = i, this.disabled ? (this.adapter.addClass(H.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(H.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(H.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(i) {
      this.helperText && this.helperText.setContent(i);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var i = this.getValue().length > 0, n = this.adapter.hasClass(H.FOCUSED), r = i || n, a = this.adapter.hasClass(H.REQUIRED);
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
      this.adapter.removeClass(H.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var i = this.adapter.hasClass(H.REQUIRED);
      i && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(i) {
      this.setSelectedIndex(
        i,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(H.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(H.FOCUSED))) {
        var n = U(i) === N.ENTER, r = U(i) === N.SPACEBAR, a = U(i) === N.ARROW_UP, o = U(i) === N.ARROW_DOWN, l = i.ctrlKey || i.metaKey;
        if (!l && (!r && i.key && i.key.length === 1 || r && this.adapter.isTypeaheadInProgress())) {
          var s = r ? " " : i.key, c = this.adapter.typeaheadMatchItem(s, this.getSelectedIndex());
          c >= 0 && this.setSelectedIndex(c), i.preventDefault();
          return;
        }
        !n && !r && !a && !o || (a && this.getSelectedIndex() > 0 ? this.setSelectedIndex(this.getSelectedIndex() - 1) : o && this.getSelectedIndex() < this.adapter.getMenuItemCount() - 1 && this.setSelectedIndex(this.getSelectedIndex() + 1), this.openMenu(), i.preventDefault());
      }
    }, e.prototype.notchOutline = function(i) {
      if (this.adapter.hasOutline()) {
        var n = this.adapter.hasClass(H.FOCUSED);
        if (i) {
          var r = Je.LABEL_SCALE, a = this.adapter.getLabelWidth() * r;
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
      this.useDefaultValidation || (this.customValidity = i), this.adapter.setSelectAnchorAttr("aria-invalid", (!i).toString()), i ? (this.adapter.removeClass(H.INVALID), this.adapter.removeMenuClass(H.MENU_INVALID)) : (this.adapter.addClass(H.INVALID), this.adapter.addMenuClass(H.MENU_INVALID)), this.syncHelperTextValidity(i);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(H.REQUIRED) && !this.adapter.hasClass(H.DISABLED) ? this.getSelectedIndex() !== Je.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(i) {
      i ? this.adapter.addClass(H.REQUIRED) : this.adapter.removeClass(H.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", i.toString()), this.adapter.setLabelRequired(i);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var i = this.adapter.getAnchorElement();
      i && (this.adapter.setMenuAnchorElement(i), this.adapter.setMenuAnchorCorner(ce.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(H.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(H.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(H.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var i = this.adapter.hasClass(H.REQUIRED);
      i && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(i) {
      if (this.helperText) {
        this.helperText.setValidity(i);
        var n = this.helperText.isVisible(), r = this.helperText.getId();
        n && r ? this.adapter.setSelectAnchorAttr(ti.ARIA_DESCRIBEDBY, r) : this.adapter.removeSelectAnchorAttr(ti.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var i = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        i.recentlyClicked = !1;
      }, Je.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(ke)
);
const Zi = (t = {}) => {
  const e = {};
  for (const i in t)
    e[i] = t[i];
  return Object.assign({ badInput: !1, customError: !1, patternMismatch: !1, rangeOverflow: !1, rangeUnderflow: !1, stepMismatch: !1, tooLong: !1, tooShort: !1, typeMismatch: !1, valid: !0, valueMissing: !1 }, e);
};
class R extends We {
  constructor() {
    super(...arguments), this.mdcFoundationClass = no, this.disabled = !1, this.outlined = !1, this.label = "", this.outlineOpen = !1, this.outlineWidth = 0, this.value = "", this.selectedText = "", this.icon = "", this.menuOpen = !1, this.helper = "", this.validateOnInitialRender = !1, this.validationMessage = "", this.required = !1, this.naturalMenuWidth = !1, this.isUiValid = !0, this.fixedMenuPosition = !1, this.typeaheadState = Ma(), this.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), this.menuElement_ = null, this.listeners = [], this.onBodyClickBound = () => {
    }, this._menuUpdateComplete = null, this.valueSetDirectly = !1, this.validityTransform = null, this._validity = Zi();
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
    return m`
      <div
          class="mdc-select ${ee(e)}">
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
            class="mdc-select__menu mdc-menu mdc-menu-surface ${ee(i)}"
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
    return this.outlined ? Le : m`
      <span class="mdc-select__ripple"></span>
    `;
  }
  renderOutline() {
    return this.outlined ? m`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>` : Le;
  }
  renderLabel() {
    return this.label ? m`
      <span
          .floatingLabelFoundation=${Hn(this.label)}
          id="label">${this.label}</span>
    ` : Le;
  }
  renderLeadingIcon() {
    return this.icon ? m`<mwc-icon class="mdc-select__icon"><div>${this.icon}</div></mwc-icon>` : Le;
  }
  renderLineRipple() {
    return this.outlined ? Le : m`
      <span .lineRippleFoundation=${qn()}></span>
    `;
  }
  renderHelperText() {
    if (!this.shouldRenderHelperText)
      return Le;
    const e = this.validationMessage && !this.isUiValid;
    return m`
        <p
          class="mdc-select-helper-text ${ee({
      "mdc-select-helper-text--validation-msg": e
    })}"
          id="helper-text">${e ? this.validationMessage : this.helper}</p>`;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Wt(this.mdcRoot)), { activateBottomLine: () => {
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
    }, isTypeaheadInProgress: () => Pn(this.typeaheadState), typeaheadMatchItem: (e, i) => {
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
      }, r = bi(n, this.typeaheadState);
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
    let n = Zi(i);
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
    this.sortedIndexByFirstChar = Xi(this.items.length, (i) => this.items[i].text);
  }
  onItemsUpdated() {
    this.sortedIndexByFirstChar = Xi(this.items.length, (e) => this.items[e].text);
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
    const i = U(e) === N.ARROW_UP, n = U(e) === N.ARROW_DOWN;
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
    const i = this.menuElement.getFocusedItemIndex(), n = $n(e.target) ? e.target : null, r = n ? n.hasAttribute("mwc-list-item") : !1, a = {
      event: e,
      focusItemAtIndex: (o) => {
        this.menuElement.focusItemAtIndex(o);
      },
      focusedItemIndex: i,
      isTargetListItem: r,
      sortedIndexByFirstChar: this.sortedIndexByFirstChar,
      isItemAtIndexDisabled: (o) => this.items[o].disabled
    };
    Ga(a, this.typeaheadState);
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
u([
  C(".mdc-select")
], R.prototype, "mdcRoot", void 0);
u([
  C(".formElement")
], R.prototype, "formElement", void 0);
u([
  C("slot")
], R.prototype, "slotElement", void 0);
u([
  C("select")
], R.prototype, "nativeSelectElement", void 0);
u([
  C("input")
], R.prototype, "nativeInputElement", void 0);
u([
  C(".mdc-line-ripple")
], R.prototype, "lineRippleElement", void 0);
u([
  C(".mdc-floating-label")
], R.prototype, "labelElement", void 0);
u([
  C("mwc-notched-outline")
], R.prototype, "outlineElement", void 0);
u([
  C(".mdc-menu")
], R.prototype, "menuElement", void 0);
u([
  C(".mdc-select__anchor")
], R.prototype, "anchorElement", void 0);
u([
  f({ type: Boolean, attribute: "disabled", reflect: !0 }),
  P(function(t) {
    this.mdcFoundation && this.mdcFoundation.setDisabled(t);
  })
], R.prototype, "disabled", void 0);
u([
  f({ type: Boolean }),
  P(function(t, e) {
    e !== void 0 && this.outlined !== e && this.layout(!1);
  })
], R.prototype, "outlined", void 0);
u([
  f({ type: String }),
  P(function(t, e) {
    e !== void 0 && this.label !== e && this.layout(!1);
  })
], R.prototype, "label", void 0);
u([
  E()
], R.prototype, "outlineOpen", void 0);
u([
  E()
], R.prototype, "outlineWidth", void 0);
u([
  f({ type: String }),
  P(function(t) {
    if (this.mdcFoundation) {
      const e = this.selected === null && !!t, i = this.selected && this.selected.value !== t;
      (e || i) && this.selectByValue(t), this.reportValidity();
    }
  })
], R.prototype, "value", void 0);
u([
  E()
], R.prototype, "selectedText", void 0);
u([
  f({ type: String })
], R.prototype, "icon", void 0);
u([
  E()
], R.prototype, "menuOpen", void 0);
u([
  f({ type: String })
], R.prototype, "helper", void 0);
u([
  f({ type: Boolean })
], R.prototype, "validateOnInitialRender", void 0);
u([
  f({ type: String })
], R.prototype, "validationMessage", void 0);
u([
  f({ type: Boolean })
], R.prototype, "required", void 0);
u([
  f({ type: Boolean })
], R.prototype, "naturalMenuWidth", void 0);
u([
  E()
], R.prototype, "isUiValid", void 0);
u([
  f({ type: Boolean })
], R.prototype, "fixedMenuPosition", void 0);
u([
  je({ capture: !0 })
], R.prototype, "handleTypeahead", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ro = X`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-select{display:inline-flex;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87)}.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-select.mdc-select--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#6200ee;fill:var(--mdc-theme-primary, #6200ee)}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:rgba(0, 0, 0, 0.54)}.mdc-select.mdc-select--disabled .mdc-select__icon{color:rgba(0, 0, 0, 0.38)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:red}.mdc-select.mdc-select--disabled .mdc-floating-label{color:GrayText}.mdc-select.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}.mdc-select.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select.mdc-select--disabled .mdc-notched-outline__trailing{border-color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__icon{color:GrayText}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:GrayText}}.mdc-select .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:0;padding-right:0}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.mdc-select .mdc-select__icon{width:24px;height:24px;font-size:24px}.mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item,.mdc-select .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:12px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic,.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:12px;margin-right:0}.mdc-select__dropdown-icon{margin-left:12px;margin-right:12px;display:inline-flex;position:relative;align-self:center;align-items:center;justify-content:center;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic{width:41.6666666667%;height:20.8333333333%}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;transition:opacity 100.5ms linear 49.5ms}.mdc-select__anchor{width:200px;min-width:0;flex:1 1 auto;position:relative;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-select__selected-text-container{display:flex;appearance:none;pointer-events:none;box-sizing:border-box;width:auto;min-width:0;flex-grow:1;height:28px;border:none;outline:none;padding:0;background-color:transparent;color:inherit}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;width:100%;text-align:left}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{text-align:right}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item{padding-left:12px;padding-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item,.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:12px;padding-right:12px}.mdc-select__menu .mdc-deprecated-list .mdc-select__icon{margin-left:0;margin-right:0}[dir=rtl] .mdc-select__menu .mdc-deprecated-list .mdc-select__icon,.mdc-select__menu .mdc-deprecated-list .mdc-select__icon[dir=rtl]{margin-left:0;margin-right:0}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select--filled .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.mdc-select--filled .mdc-select__anchor::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor::before{display:none}.mdc-select--filled .mdc-select__anchor{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-select--filled:not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke}.mdc-select--filled.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-select--filled:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--filled.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-select--filled .mdc-menu-surface--is-open-below{border-top-left-radius:0px;border-top-right-radius:0px}.mdc-select--filled.mdc-select--focused.mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-select--filled .mdc-floating-label,.mdc-select--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined{border:none}.mdc-select--outlined .mdc-select__anchor{height:56px}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-56px{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-select--outlined .mdc-select__anchor{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-select--outlined+.mdc-select-helper-text{margin-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-select--outlined .mdc-select__anchor{display:flex;align-items:baseline;overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--outlined .mdc-select__anchor::before{display:none}.mdc-select--outlined .mdc-select__selected-text-container{display:flex;border:none;z-index:1;background-color:transparent}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;left:4px;right:initial}[dir=rtl] .mdc-select--outlined .mdc-floating-label,.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake,.mdc-select--outlined.mdc-select--with-leading-icon[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 96px)}.mdc-select--outlined .mdc-menu-surface{margin-bottom:8px}.mdc-select--outlined.mdc-select--no-label .mdc-menu-surface,.mdc-select--outlined .mdc-menu-surface--is-open-below{margin-bottom:0}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-select__anchor .mdc-select__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-select__anchor .mdc-select__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-select__anchor:hover .mdc-select__ripple::before,.mdc-select__anchor.mdc-ripple-surface--hover .mdc-select__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select-helper-text{margin:0;margin-left:16px;margin-right:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal}[dir=rtl] .mdc-select-helper-text,.mdc-select-helper-text[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;user-select:none;flex-shrink:0;align-self:center;background-color:transparent;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex="-1"]{cursor:default;pointer-events:none}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-block;vertical-align:top;outline:none}.mdc-select{width:100%}[hidden]{display:none}.mdc-select__icon{z-index:2}.mdc-select--with-leading-icon{--mdc-list-item-graphic-margin: calc( 48px - var(--mdc-list-item-graphic-size, 24px) - var(--mdc-list-side-padding, 16px) )}.mdc-select .mdc-select__anchor .mdc-select__selected-text{overflow:hidden}.mdc-select .mdc-select__anchor *{display:inline-flex}.mdc-select .mdc-select__anchor .mdc-floating-label{display:inline-block}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-idle-border-color, rgba(0, 0, 0, 0.38) );--mdc-notched-outline-notch-offset: 1px}:host(:not([disabled]):hover) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87);color:var(--mdc-select-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-select-idle-line-color, rgba(0, 0, 0, 0.42))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-select-hover-line-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke;background-color:var(--mdc-select-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-select__dropdown-icon{fill:var(--mdc-select-error-dropdown-icon-color, var(--mdc-select-error-color, var(--mdc-theme-error, #b00020)))}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label,:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label::after{color:var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}.mdc-select__menu--invalid{--mdc-theme-primary: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.6);color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54);fill:var(--mdc-select-dropdown-icon-color, rgba(0, 0, 0, 0.54))}:host(:not([disabled])) .mdc-select.mdc-select--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px;--mdc-notched-outline-notch-offset: 2px}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-select__dropdown-icon{fill:rgba(98,0,238,.87);fill:var(--mdc-select-focused-dropdown-icon-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-select:not(.mdc-select--outlined).mdc-select--disabled .mdc-select__anchor{background-color:#fafafa;background-color:var(--mdc-select-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-select.mdc-select--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-select .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38);fill:var(--mdc-select-disabled-dropdown-icon-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select-helper-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Ht = class extends R {
};
Ht.styles = [ro];
Ht = u([
  W("mwc-select")
], Ht);
function T(t, e, i) {
  const n = t.createElementNS(t.documentElement.namespaceURI, e);
  return Object.entries(i).filter(([r, a]) => a !== null).forEach(([r, a]) => n.setAttribute(r, a)), n;
}
function V(t, e) {
  const i = t.cloneNode(!1);
  return Object.entries(e).forEach(([n, r]) => {
    r === null ? i.removeAttribute(n) : i.setAttribute(n, r);
  }), i;
}
function ne(t, e) {
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
var gt = {
  /** Class used for a switch that is in the "checked" (on) position. */
  CHECKED: "mdc-switch--checked",
  /** Class used for a switch that is disabled. */
  DISABLED: "mdc-switch--disabled"
}, Yi = {
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
var ao = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(i) {
      return t.call(this, G(G({}, e.defaultAdapter), i)) || this;
    }
    return Object.defineProperty(e, "strings", {
      /** The string constants used by the switch. */
      get: function() {
        return Yi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      /** The CSS classes used by the switch. */
      get: function() {
        return gt;
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
      this.adapter.setNativeControlDisabled(i), i ? this.adapter.addClass(gt.DISABLED) : this.adapter.removeClass(gt.DISABLED);
    }, e.prototype.handleChange = function(i) {
      var n = i.target;
      this.updateAriaChecked(n.checked), this.updateCheckedStyling(n.checked);
    }, e.prototype.updateCheckedStyling = function(i) {
      i ? this.adapter.addClass(gt.CHECKED) : this.adapter.removeClass(gt.CHECKED);
    }, e.prototype.updateAriaChecked = function(i) {
      this.adapter.setNativeControlAttr(Yi.ARIA_CHECKED_ATTR, "" + !!i);
    }, e;
  }(ke)
);
class Ne extends We {
  constructor() {
    super(...arguments), this.checked = !1, this.disabled = !1, this.shouldRenderRipple = !1, this.mdcFoundationClass = ao, this.rippleHandlers = new It(() => (this.shouldRenderRipple = !0, this.ripple));
  }
  changeHandler(e) {
    this.mdcFoundation.handleChange(e), this.checked = this.formElement.checked;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Wt(this.mdcRoot)), { setNativeControlChecked: (e) => {
      this.formElement.checked = e;
    }, setNativeControlDisabled: (e) => {
      this.formElement.disabled = e;
    }, setNativeControlAttr: (e, i) => {
      this.formElement.setAttribute(e, i);
    } });
  }
  renderRipple() {
    return this.shouldRenderRipple ? m`
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
    return m`
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
u([
  f({ type: Boolean }),
  P(function(t) {
    this.mdcFoundation.setChecked(t);
  })
], Ne.prototype, "checked", void 0);
u([
  f({ type: Boolean }),
  P(function(t) {
    this.mdcFoundation.setDisabled(t);
  })
], Ne.prototype, "disabled", void 0);
u([
  mt,
  f({ attribute: "aria-label" })
], Ne.prototype, "ariaLabel", void 0);
u([
  mt,
  f({ attribute: "aria-labelledby" })
], Ne.prototype, "ariaLabelledBy", void 0);
u([
  C(".mdc-switch")
], Ne.prototype, "mdcRoot", void 0);
u([
  C("input")
], Ne.prototype, "formElement", void 0);
u([
  St("mwc-ripple")
], Ne.prototype, "ripple", void 0);
u([
  E()
], Ne.prototype, "shouldRenderRipple", void 0);
u([
  je({ passive: !0 })
], Ne.prototype, "handleRippleMouseDown", null);
u([
  je({ passive: !0 })
], Ne.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const oo = X`.mdc-switch__thumb-underlay{left:-14px;right:initial;top:-17px;width:48px;height:48px}[dir=rtl] .mdc-switch__thumb-underlay,.mdc-switch__thumb-underlay[dir=rtl]{left:initial;right:-14px}.mdc-switch__native-control{width:64px;height:48px}.mdc-switch{display:inline-block;position:relative;outline:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-color:#fff;border-color:var(--mdc-theme-surface, #fff)}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;margin:0;opacity:0;cursor:pointer;pointer-events:auto;transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-switch__native-control,.mdc-switch__native-control[dir=rtl]{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:36px;height:14px;border:1px solid transparent;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb-underlay{display:flex;position:absolute;align-items:center;justify-content:center;transform:translateX(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl]{transform:translateX(-16px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__native-control[dir=rtl]{transform:translateX(16px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent}`;
let gi = class extends Ne {
};
gi.styles = [oo];
gi = u([
  W("mwc-switch")
], gi);
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
var ii = {
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
}, lo = {
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
}, Qi = {
  LABEL_SCALE: 0.75
}, so = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], co = [
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
var Ji = ["mousedown", "touchstart"], en = ["click", "keydown"], uo = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(i, n) {
      n === void 0 && (n = {});
      var r = t.call(this, G(G({}, e.defaultAdapter), i)) || this;
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
        return lo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ii;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Qi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var i = this.getNativeInput().type;
        return co.indexOf(i) >= 0;
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
        for (var o = Oe(Ji), l = o.next(); !l.done; l = o.next()) {
          var s = l.value;
          this.adapter.registerInputInteractionHandler(s, this.setPointerXOffset);
        }
      } catch (b) {
        i = { error: b };
      } finally {
        try {
          l && !l.done && (n = o.return) && n.call(o);
        } finally {
          if (i) throw i.error;
        }
      }
      try {
        for (var c = Oe(en), h = c.next(); !h.done; h = c.next()) {
          var s = h.value;
          this.adapter.registerTextFieldInteractionHandler(s, this.textFieldInteractionHandler);
        }
      } catch (b) {
        r = { error: b };
      } finally {
        try {
          h && !h.done && (a = c.return) && a.call(c);
        } finally {
          if (r) throw r.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var i, n, r, a;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = Oe(Ji), l = o.next(); !l.done; l = o.next()) {
          var s = l.value;
          this.adapter.deregisterInputInteractionHandler(s, this.setPointerXOffset);
        }
      } catch (b) {
        i = { error: b };
      } finally {
        try {
          l && !l.done && (n = o.return) && n.call(o);
        } finally {
          if (i) throw i.error;
        }
      }
      try {
        for (var c = Oe(en), h = c.next(); !h.done; h = c.next()) {
          var s = h.value;
          this.adapter.deregisterTextFieldInteractionHandler(s, this.textFieldInteractionHandler);
        }
      } catch (b) {
        r = { error: b };
      } finally {
        try {
          h && !h.done && (a = c.return) && a.call(c);
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
        return so.indexOf(r) > -1 ? (n.styleValidity(!0), n.adapter.setLabelRequired(n.getNativeInput().required), !0) : !1;
      }), i.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(i) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (i) {
          var n = this.adapter.getLabelWidth() * Qi.LABEL_SCALE;
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
        a && o ? this.adapter.setInputAttr(ii.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr(ii.ARIA_DESCRIBEDBY);
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
  }(ke)
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
const mo = ct((t) => (e) => {
  let i;
  if (e instanceof Dn || e instanceof Ut)
    throw new Error("The `live` directive is not allowed on text or event bindings");
  if (e instanceof Ln)
    tn(e.strings), i = e.element.hasAttribute(e.name), e.value = i;
  else {
    const { element: n, name: r, strings: a } = e.committer;
    if (tn(a), e instanceof Et) {
      if (i = n[r], i === t)
        return;
    } else e instanceof ut && (i = n.getAttribute(r));
    if (i === String(t))
      return;
  }
  e.setValue(t);
}), tn = (t) => {
  if (t.length !== 2 || t[0] !== "" || t[1] !== "")
    throw new Error("`live` bindings can only contain a single expression");
}, po = ["touchstart", "touchmove", "scroll", "mousewheel"], nn = (t = {}) => {
  const e = {};
  for (const i in t)
    e[i] = t[i];
  return Object.assign({ badInput: !1, customError: !1, patternMismatch: !1, rangeOverflow: !1, rangeUnderflow: !1, stepMismatch: !1, tooLong: !1, tooShort: !1, typeMismatch: !1, valid: !0, valueMissing: !1 }, e);
};
class L extends We {
  constructor() {
    super(...arguments), this.mdcFoundationClass = uo, this.value = "", this.type = "text", this.placeholder = "", this.label = "", this.icon = "", this.iconTrailing = "", this.disabled = !1, this.required = !1, this.minLength = -1, this.maxLength = -1, this.outlined = !1, this.helper = "", this.validateOnInitialRender = !1, this.validationMessage = "", this.autoValidate = !1, this.pattern = "", this.min = "", this.max = "", this.step = null, this.size = null, this.helperPersistent = !1, this.charCounter = !1, this.endAligned = !1, this.prefix = "", this.suffix = "", this.name = "", this.readOnly = !1, this.autocapitalize = "", this.outlineOpen = !1, this.outlineWidth = 0, this.isUiValid = !0, this.focused = !1, this._validity = nn(), this.validityTransform = null;
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
    return m`
      <label class="mdc-text-field ${ee(n)}">
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
    return this.outlined ? "" : m`
      <span class="mdc-text-field__ripple"></span>
    `;
  }
  /** @soyTemplate */
  renderOutline() {
    return this.outlined ? m`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>` : "";
  }
  /** @soyTemplate */
  renderLabel() {
    return this.label ? m`
      <span
          .floatingLabelFoundation=${Hn(this.label)}
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
    return m`<i class="material-icons mdc-text-field__icon ${ee({
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
    return m`<span class="mdc-text-field__affix ${ee({
      "mdc-text-field__affix--prefix": !i,
      "mdc-text-field__affix--suffix": i
    })}">
        ${e}</span>`;
  }
  /** @soyTemplate */
  renderInput(e) {
    const i = this.minLength === -1 ? void 0 : this.minLength, n = this.maxLength === -1 ? void 0 : this.maxLength, r = this.autocapitalize ? this.autocapitalize : void 0, a = this.validationMessage && !this.isUiValid, o = this.label ? "label" : void 0, l = e ? "helper-text" : void 0, s = this.focused || this.helperPersistent || a ? "helper-text" : void 0;
    return m`
      <input
          aria-labelledby=${O(o)}
          aria-controls="${O(l)}"
          aria-describedby="${O(s)}"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${mo(this.value)}"
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
    return this.outlined ? "" : m`
      <span .lineRippleFoundation=${qn()}></span>
    `;
  }
  /** @soyTemplate */
  renderHelperText(e, i) {
    const n = this.validationMessage && !this.isUiValid, r = {
      "mdc-text-field-helper-text--persistent": this.helperPersistent,
      "mdc-text-field-helper-text--validation-msg": n
    }, a = this.focused || this.helperPersistent || n ? void 0 : "true", o = n ? this.validationMessage : this.helper;
    return e ? m`
      <div class="mdc-text-field-helper-line">
        <div id="helper-text"
             aria-hidden="${O(a)}"
             class="mdc-text-field-helper-text ${ee(r)}"
             >${o}</div>
        ${this.renderCharCounter(i)}
      </div>` : "";
  }
  /** @soyTemplate */
  renderCharCounter(e) {
    const i = Math.min(this.value.length, this.maxLength);
    return e ? m`
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
    let n = nn(i);
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
    }, deregisterValidationAttributeChangeHandler: (e) => e.disconnect() }, Wt(this.mdcRoot));
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
      registerInputInteractionHandler: (e, i) => this.formElement.addEventListener(e, i, { passive: e in po }),
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
u([
  C(".mdc-text-field")
], L.prototype, "mdcRoot", void 0);
u([
  C("input")
], L.prototype, "formElement", void 0);
u([
  C(".mdc-floating-label")
], L.prototype, "labelElement", void 0);
u([
  C(".mdc-line-ripple")
], L.prototype, "lineRippleElement", void 0);
u([
  C("mwc-notched-outline")
], L.prototype, "outlineElement", void 0);
u([
  C(".mdc-notched-outline__notch")
], L.prototype, "notchElement", void 0);
u([
  f({ type: String })
], L.prototype, "value", void 0);
u([
  f({ type: String })
], L.prototype, "type", void 0);
u([
  f({ type: String })
], L.prototype, "placeholder", void 0);
u([
  f({ type: String }),
  P(function(t, e) {
    e !== void 0 && this.label !== e && this.layout();
  })
], L.prototype, "label", void 0);
u([
  f({ type: String })
], L.prototype, "icon", void 0);
u([
  f({ type: String })
], L.prototype, "iconTrailing", void 0);
u([
  f({ type: Boolean, reflect: !0 })
], L.prototype, "disabled", void 0);
u([
  f({ type: Boolean })
], L.prototype, "required", void 0);
u([
  f({ type: Number })
], L.prototype, "minLength", void 0);
u([
  f({ type: Number })
], L.prototype, "maxLength", void 0);
u([
  f({ type: Boolean, reflect: !0 }),
  P(function(t, e) {
    e !== void 0 && this.outlined !== e && this.layout();
  })
], L.prototype, "outlined", void 0);
u([
  f({ type: String })
], L.prototype, "helper", void 0);
u([
  f({ type: Boolean })
], L.prototype, "validateOnInitialRender", void 0);
u([
  f({ type: String })
], L.prototype, "validationMessage", void 0);
u([
  f({ type: Boolean })
], L.prototype, "autoValidate", void 0);
u([
  f({ type: String })
], L.prototype, "pattern", void 0);
u([
  f({ type: String })
], L.prototype, "min", void 0);
u([
  f({ type: String })
], L.prototype, "max", void 0);
u([
  f({ type: Number })
], L.prototype, "step", void 0);
u([
  f({ type: Number })
], L.prototype, "size", void 0);
u([
  f({ type: Boolean })
], L.prototype, "helperPersistent", void 0);
u([
  f({ type: Boolean })
], L.prototype, "charCounter", void 0);
u([
  f({ type: Boolean })
], L.prototype, "endAligned", void 0);
u([
  f({ type: String })
], L.prototype, "prefix", void 0);
u([
  f({ type: String })
], L.prototype, "suffix", void 0);
u([
  f({ type: String })
], L.prototype, "name", void 0);
u([
  f({ type: String })
], L.prototype, "inputMode", void 0);
u([
  f({ type: Boolean })
], L.prototype, "readOnly", void 0);
u([
  f({ type: String })
], L.prototype, "autocapitalize", void 0);
u([
  E()
], L.prototype, "outlineOpen", void 0);
u([
  E()
], L.prototype, "outlineWidth", void 0);
u([
  E()
], L.prototype, "isUiValid", void 0);
u([
  E()
], L.prototype, "focused", void 0);
u([
  je({ passive: !0 })
], L.prototype, "handleInputChange", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ho = X`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{content:none}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38) )}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-error-color, var(--mdc-theme-error, #b00020) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let qt = class extends L {
};
qt.styles = [ho];
qt = u([
  W("mwc-textfield")
], qt);
var fo = Object.defineProperty, bo = Object.getOwnPropertyDescriptor, Ae = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? bo(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && fo(e, i, r), r;
};
let ue = class extends qt {
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
    return this.multipliers.length && this.unit ? m`<div style="position:relative;">
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
      </div>` : m``;
  }
  renderMulplierList() {
    return m`${this.multipliers.map(
      (t) => m`<mwc-list-item ?selected=${t === this.multiplier}
          >${t === null ? d("textfield.noMultiplier") : t}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? m`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : m``;
  }
  render() {
    return m`
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
Ae([
  f({ type: Boolean })
], ue.prototype, "nullable", 2);
Ae([
  f({ type: Array })
], ue.prototype, "multipliers", 2);
Ae([
  f({ type: String })
], ue.prototype, "multiplier", 1);
Ae([
  f({ type: String })
], ue.prototype, "unit", 2);
Ae([
  E()
], ue.prototype, "null", 1);
Ae([
  f({ type: String })
], ue.prototype, "maybeValue", 1);
Ae([
  f({ type: String })
], ue.prototype, "defaultValue", 2);
Ae([
  f({ type: Array })
], ue.prototype, "reservedValues", 2);
Ae([
  C("mwc-switch")
], ue.prototype, "nullSwitch", 2);
Ae([
  C("mwc-menu")
], ue.prototype, "multiplierMenu", 2);
Ae([
  C("mwc-icon-button")
], ue.prototype, "multiplierButton", 2);
ue = Ae([
  W("wizard-textfield")
], ue);
var go = Object.defineProperty, xo = Object.getOwnPropertyDescriptor, rt = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? xo(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && go(e, i, r), r;
};
let Me = class extends Ht {
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
    return this.nullable ? m`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : m``;
  }
  render() {
    return m`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
rt([
  f({ type: Boolean })
], Me.prototype, "nullable", 2);
rt([
  E()
], Me.prototype, "null", 1);
rt([
  f({ type: String })
], Me.prototype, "maybeValue", 1);
rt([
  f({ type: String })
], Me.prototype, "defaultValue", 2);
rt([
  f({ type: Array })
], Me.prototype, "reservedValues", 2);
rt([
  C("mwc-switch")
], Me.prototype, "nullSwitch", 2);
Me = rt([
  W("wizard-select")
], Me);
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
var vo = {
  ROOT: "mdc-form-field"
}, yo = {
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
var wo = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(i) {
      var n = t.call(this, G(G({}, e.defaultAdapter), i)) || this;
      return n.click = function() {
        n.handleClick();
      }, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return vo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return yo;
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
  }(ke)
);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Xe extends nt {
  constructor() {
    super(...arguments), this.alignEnd = !1, this.spaceBetween = !1, this.nowrap = !1, this.label = "", this.mdcFoundationClass = wo;
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
        if (e instanceof We) {
          const i = await e.ripple;
          i && i.startPress();
        }
      },
      deactivateInputRipple: async () => {
        const e = this.input;
        if (e instanceof We) {
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
    return m`
      <div class="mdc-form-field ${ee(e)}">
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
u([
  f({ type: Boolean })
], Xe.prototype, "alignEnd", void 0);
u([
  f({ type: Boolean })
], Xe.prototype, "spaceBetween", void 0);
u([
  f({ type: Boolean })
], Xe.prototype, "nowrap", void 0);
u([
  f({ type: String }),
  P(async function(t) {
    const e = this.input;
    e && (e.localName === "input" ? e.setAttribute("aria-label", t) : e instanceof We && (await e.updateComplete, e.setAriaLabel(t)));
  })
], Xe.prototype, "label", void 0);
u([
  C(".mdc-form-field")
], Xe.prototype, "mdcRoot", void 0);
u([
  Ei("", !0, "*")
], Xe.prototype, "slottedInputs", void 0);
u([
  C("label")
], Xe.prototype, "labelEl", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const _o = X`.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch[dir=rtl]){margin-left:10px}`;
let xi = class extends Xe {
};
xi.styles = [_o];
xi = u([
  W("mwc-formfield")
], xi);
var Ao = Object.defineProperty, So = Object.getOwnPropertyDescriptor, ye = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? So(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Ao(e, i, r), r;
};
let me = class extends Ce {
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
    return this.nullable ? m`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : m``;
  }
  render() {
    return m`
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
ye([
  f({ type: String })
], me.prototype, "label", 2);
ye([
  f({ type: String })
], me.prototype, "helper", 2);
ye([
  f({ type: Boolean })
], me.prototype, "nullable", 2);
ye([
  f({ type: Boolean })
], me.prototype, "defaultChecked", 2);
ye([
  f({ type: String })
], me.prototype, "maybeValue", 1);
ye([
  f({ type: Boolean })
], me.prototype, "disabled", 2);
ye([
  E()
], me.prototype, "null", 1);
ye([
  E()
], me.prototype, "checked", 1);
ye([
  E()
], me.prototype, "deactivateCheckbox", 2);
ye([
  E()
], me.prototype, "formfieldLabel", 1);
ye([
  C("mwc-switch")
], me.prototype, "nullSwitch", 2);
ye([
  C("mwc-checkbox")
], me.prototype, "checkbox", 2);
me = ye([
  W("wizard-checkbox")
], me);
function Eo(t) {
  return typeof t == "function";
}
function x(t) {
  return t instanceof ue || t instanceof Me || t instanceof me ? t.maybeValue : t.value ?? null;
}
function Li(t) {
  return t instanceof ue ? t.multiplier : null;
}
function Te(t, e) {
  if (!t)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const i = Eo(t) ? t : () => t;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: i, ...e?.detail }
  });
}
function at(t) {
  return Te(t, { detail: { subwizard: !0 } });
}
function Io(t) {
  let e = "", i = t.parentElement;
  for (; i?.getAttribute("name"); )
    e = "/" + i.getAttribute("name") + e, i = i.parentElement;
  return e;
}
function Nt(t) {
  const e = t.documentElement;
  return (e.getAttribute("version") ?? "2003") + (e.getAttribute("revision") ?? "") + (e.getAttribute("release") ?? "");
}
function Gn(t) {
  const e = t.getAttribute("name");
  return e || void 0;
}
function rn(t) {
  const e = t.getAttribute("desc");
  return e || void 0;
}
function le(t) {
  const e = t.split(">"), i = e.pop() ?? "";
  return [e.join(">"), i];
}
const K = ":not(*)";
function Co(t) {
  return `${t.getAttribute("version")}	${t.getAttribute("revision")}`;
}
function ko(t, e) {
  const [i, n] = e.split("	");
  return !i || !n ? K : `${t}[version="${i}"][revision="${n}"]`;
}
function an(t) {
  return k(t.parentElement) + ">" + t.getAttribute("connectivityNode");
}
function on(t, e) {
  const [i, n] = le(e), r = Y[t].parents.flatMap(
    (a) => oe(a, i).split(",")
  );
  return re(
    r,
    [">"],
    [`${t}[connectivityNode="${n}"]`]
  ).map((a) => a.join("")).join(",");
}
function No(t) {
  const [e, i, n, r, a, o] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((l) => t.getAttribute(l));
  return e === "None" ? `${k(t.parentElement)}>(${r} ${o} ${a})` : `${e} ${i || "(Client)"}/${n ?? ""} ${r} ${a ?? ""}`;
}
function Lo(t, e) {
  if (e.endsWith(")")) {
    const [g, v] = le(e), [y, I, D] = v.substring(1, v.length - 1).split(" ");
    if (!y || !I) return K;
    const S = Y[t].parents.flatMap(
      (Z) => oe(Z, g).split(",")
    );
    return re(
      S,
      [">"],
      [`${t}[iedName="None"][lnClass="${y}"][lnType="${I}"][lnInst="${D}"]`]
    ).map((Z) => Z.join("")).join(",");
  }
  const [i, n, r, a, o] = e.split(/[ /]/);
  if (!i || !n || !a) return K;
  const [
    l,
    s,
    c,
    h,
    b
  ] = [
    [`[iedName="${i}"]`],
    n === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${n}"]`],
    r ? [`[prefix="${r}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    o ? [`[lnInst="${o}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return re(
    [t],
    l,
    s,
    c,
    h,
    b
  ).map((g) => g.join("")).join(",");
}
function To(t) {
  return `${k(t.parentElement)}>${t.getAttribute(
    "iedName"
  )} ${t.getAttribute("apName")}`;
}
function Do(t, e) {
  const [i, n] = le(e), [r, a] = n.split(" ");
  return `${oe(
    "IED",
    i
  )}>${t}[iedName="${r}"][apName="${a}"]`;
}
function $o(t) {
  return `${k(t.parentElement)}>${t.getAttribute("associationID") ?? ""}`;
}
function zo(t, e) {
  const [i, n] = le(e);
  return n ? `${oe(
    "Server",
    i
  )}>${t}[associationID="${n}"]` : K;
}
function Ro(t) {
  return `${k(t.closest("IED"))}>>${t.getAttribute("inst")}`;
}
function Oo(t, e) {
  const [i, n] = e.split(">>");
  return n ? `IED[name="${i}"] ${t}[inst="${n}"]` : K;
}
function Fo(t) {
  const e = t.textContent, [i, n, r, a, o] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((l) => t.getAttribute(l));
  return `${k(t.parentElement)}>${e} ${i || ""} ${n || ""}/${r ?? ""} ${a ?? ""} ${o ?? ""}`;
}
function Vo(t, e) {
  const [i, n] = le(e), [r, a, o, l, s, c] = n.split(/[ /]/), [
    h,
    b,
    g,
    v,
    y,
    I
  ] = [
    Y[t].parents.flatMap(
      (D) => oe(D, i).split(",")
    ),
    [`${r}`],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    l ? [`[prefix="${l}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    c ? [`[lnInst="${c}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return re(
    h,
    [">"],
    [t],
    b,
    g,
    v,
    y,
    I
  ).map((D) => D.join("")).join(",");
}
function Po(t) {
  const [e, i, n, r, a, o, l, s] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((h) => t.getAttribute(h)), c = `${e}/${i ?? ""} ${n} ${r ?? ""}.${a} ${o || ""}`;
  return `${k(t.parentElement)}>${c} (${l}${s ? " [" + s + "]" : ""})`;
}
function Mo(t, e) {
  const [i, n] = le(e), [r, a, o, l] = n.split(/[ /.]/), s = n.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), c = s && s[1] ? s[1] : "", h = s && s[2] ? s[2] : "", b = n.match(/\(([A-Z]{2})/), g = n.match(/ \[([0-9]{1,2})\]/), v = b && b[1] ? b[1] : "", y = g && g[1] ? g[1] : "", [
    I,
    D,
    S,
    Z,
    _e,
    Se,
    Xt,
    Zt,
    Yt
  ] = [
    Y[t].parents.flatMap(
      (pt) => oe(pt, i).split(",")
    ),
    [`[ldInst="${r}"]`],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    l ? [`[lnInst="${l}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${c}"]`],
    h ? [`[daName="${h}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${v}"]`],
    y ? [`[ix="${y}"]`] : [":not([ix])", '[ix=""]']
  ];
  return re(
    I,
    [">"],
    [t],
    D,
    S,
    Z,
    _e,
    Se,
    Xt,
    Zt,
    Yt
  ).map((pt) => pt.join("")).join(",");
}
function Bo(t) {
  if (!t.parentElement) return NaN;
  const e = k(t.parentElement), i = t.getAttribute("iedName"), n = t.getAttribute("intAddr"), r = Array.from(
    t.parentElement.querySelectorAll(`ExtRef[intAddr="${n}"]`)
  ).indexOf(t);
  if (n) return `${e}>${n}[${r}]`;
  const [
    a,
    o,
    l,
    s,
    c,
    h,
    b,
    g,
    v,
    y,
    I,
    D
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
  ].map((_e) => t.getAttribute(_e)), S = D ? `${b}:${D} ${g ?? ""}/${v ?? ""} ${y ?? ""} ${I ?? ""}` : "", Z = `${i} ${a}/${o ?? ""} ${l} ${s ?? ""} ${c} ${h || ""}`;
  return `${e}>${S ? S + " " : ""}${Z}${n ? `@${n}` : ""}`;
}
function Ho(t, e) {
  const [i, n] = le(e), r = Y[t].parents.flatMap(
    (ht) => oe(ht, i).split(",")
  );
  if (n.endsWith("]")) {
    const [ht] = n.split("["), Xr = [`[intAddr="${ht}"]`];
    return re(r, [">"], [t], Xr).map((Zr) => Zr.join("")).join(",");
  }
  let a, o, l, s, c, h, b, g, v, y, I, D, S, Z;
  !n.includes(":") && !n.includes("@") ? [a, o, l, s, c, h, b] = n.split(/[ /]/) : n.includes(":") && !n.includes("@") ? [
    g,
    v,
    y,
    I,
    D,
    S,
    a,
    o,
    l,
    s,
    c,
    h,
    b
  ] = n.split(/[ /:]/) : !n.includes(":") && n.includes("@") ? [a, o, l, s, c, h, b, Z] = n.split(/[ /@]/) : [
    g,
    v,
    y,
    I,
    D,
    S,
    a,
    o,
    l,
    s,
    c,
    h,
    b,
    Z
  ] = n.split(/[ /:@]/);
  const [
    _e,
    Se,
    Xt,
    Zt,
    Yt,
    pt,
    Br,
    Hr,
    qr,
    Gr,
    Ur,
    Wr,
    jr,
    Kr
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])"],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    l ? [`[prefix="${l}"]`] : [":not([prefix])", '[prefix=""]'],
    s ? [`[lnClass="${s}"]`] : [":not([lnClass])"],
    c ? [`[lnInst="${c}"]`] : [":not([lnInst])", '[lnInst=""]'],
    h ? [`[doName="${h}"]`] : [":not([doName])"],
    b ? [`[daName="${b}"]`] : [":not([daName])", '[daName=""]'],
    g ? [`[serviceType="${g}"]`] : [":not([serviceType])", '[serviceType=""]'],
    v ? [`[srcCBName="${v}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    y ? [`[srcLDInst="${y}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    I ? [`[srcPrefix="${I}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    D ? [`[srcLNClass="${D}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    S ? [`[srcLNInst="${S}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    Z ? [`[intAddr="${Z}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return re(
    r,
    [">"],
    [t],
    _e,
    Se,
    Xt,
    Zt,
    Yt,
    pt,
    Br,
    Hr,
    qr,
    Gr,
    Ur,
    Wr,
    jr,
    Kr
  ).map((ht) => ht.join("")).join(",");
}
function qo(t) {
  const [e, i, n] = ["prefix", "lnClass", "inst"].map(
    (r) => t.getAttribute(r)
  );
  return `${k(t.parentElement)}>${e ?? ""} ${i} ${n}`;
}
function Go(t, e) {
  const [i, n] = le(e), r = Y[t].parents.flatMap(
    (b) => oe(b, i).split(",")
  ), [a, o, l] = n.split(" ");
  if (!o) return K;
  const [s, c, h] = [
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    [`[inst="${l}"]`]
  ];
  return re(
    r,
    [">"],
    [t],
    s,
    c,
    h
  ).map((b) => b.join("")).join(",");
}
function Uo(t) {
  const [e, i, n, r, a, o] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((l) => t.getAttribute(l));
  return `${k(t.parentElement)}>${i} ${e || ""} ${n}/${r ?? ""} ${a} ${o}`;
}
function Wo(t, e) {
  const [i, n] = le(e), r = Y[t].parents.flatMap(
    (S) => oe(S, i).split(",")
  ), [a, o, l, s, c, h] = n.split(/[ /]/), [
    b,
    g,
    v,
    y,
    I,
    D
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])", '[iedName=""]'],
    o ? [`[apRef="${o}"]`] : [":not([apRef])", '[apRef=""]'],
    l ? [`[ldInst="${l}"]`] : [":not([ldInst])", '[ldInst=""]'],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    h ? [`[lnInst="${h}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return re(
    r,
    [">"],
    [t],
    b,
    g,
    v,
    y,
    I,
    D
  ).map((S) => S.join("")).join(",");
}
function ln(t) {
  const [e, i] = ["name", "ix"].map((n) => t.getAttribute(n));
  return `${k(t.parentElement)}>${e}${i ? "[" + i + "]" : ""}`;
}
function vi(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [n, r] = le(e), [a, o, l, s] = r.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!o) return K;
  if (i === 0) return `${t}[name="${o}"]`;
  const c = Y[t].parents.flatMap(
    (g) => g === "SDI" ? vi(g, n, i - 1).split(",") : oe(g, n).split(",")
  ).filter((g) => !g.startsWith(K));
  if (c.length === 0) return K;
  const [h, b] = [
    [`[name="${o}"]`],
    s ? [`[ix="${s}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return re(
    c,
    [">"],
    [t],
    h,
    b
  ).map((g) => g.join("")).join(",");
}
function jo(t) {
  if (!t.parentElement) return NaN;
  const e = t.getAttribute("sGroup"), i = Array.from(t.parentElement.children).filter((n) => n.getAttribute("sGroup") === e).findIndex((n) => n.isSameNode(t));
  return `${k(t.parentElement)}>${e ? e + "." : ""} ${i}`;
}
function Ko(t, e) {
  const [i, n] = le(e), [r, a] = n.split(" "), o = parseFloat(a), l = Y[t].parents.flatMap(
    (h) => oe(h, i).split(",")
  ), [s, c] = [
    r ? [`[sGroup="${r}"]`] : [""],
    o ? [`:nth-child(${o + 1})`] : [""]
  ];
  return re(
    l,
    [">"],
    [t],
    s,
    c
  ).map((h) => h.join("")).join(",");
}
function Xo(t) {
  const [e, i] = ["iedName", "apName"].map(
    (n) => t.getAttribute(n)
  );
  return `${e} ${i}`;
}
function Zo(t, e) {
  const [i, n] = e.split(" ");
  return !i || !n ? K : `${t}[iedName="${i}"][apName="${n}"]`;
}
function dn(t) {
  const [e, i] = ["ldInst", "cbName"].map(
    (n) => t.getAttribute(n)
  );
  return `${e} ${i}`;
}
function sn(t, e) {
  const [i, n] = e.split(" ");
  return !i || !n ? K : `${t}[ldInst="${i}"][cbName="${n}"]`;
}
function Yo(t) {
  if (!t.parentElement) return NaN;
  if (!t.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = t.getAttribute("type");
  return t.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${k(t.parentElement)}>${e}`;
}
function Qo(t, e) {
  const [i, n] = le(e), [r, a] = [
    Y[t].parents.flatMap(
      (o) => oe(o, i).split(",")
    ),
    n ? [`[type="${n}"]`] : [""]
  ];
  return re(r, [">"], [t], a).map((o) => o.join("")).join(",");
}
function Jo(t) {
  if (!t.parentElement) return NaN;
  const e = t.parentElement, i = t.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${k(t.parentElement)}>${i}`;
  const n = Array.from(t.parentElement.children).filter((r) => r.getAttribute("type") === i).findIndex((r) => r.isSameNode(t));
  return `${k(t.parentElement)}>${i} [${n}]`;
}
function el(t, e) {
  const [i, n] = le(e), [r] = n.split(" "), a = n && n.match(/\[([0-9]+)\]/) && n.match(/\[([0-9]+)\]/)[1] ? parseFloat(n.match(/\[([0-9]+)\]/)[1]) : NaN, [o, l, s] = [
    Y[t].parents.flatMap(
      (c) => oe(c, i).split(",")
    ),
    [`[type="${r}"]`],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return re(
    o,
    [">"],
    [t],
    l,
    s
  ).map((c) => c.join("")).join(",");
}
function tl(t) {
  return `${k(t.parentElement)}>${t.getAttribute("ord")}`;
}
function il(t, e) {
  const [i, n] = le(e);
  return `${oe("EnumType", i)}>${t}[ord="${n}"]`;
}
function nl(t) {
  return `${k(t.parentElement)}>${t.getAttribute("type") || "8-MMS"}	${t.textContent}`;
}
function rl(t, e) {
  const [i, n] = le(e), [r, a] = n.split("	"), [o] = [
    Y[t].parents.flatMap(
      (l) => oe(l, i).split(",")
    )
  ];
  return re(
    o,
    [">"],
    [t],
    [`[type="${r}"]`],
    [">"],
    [a]
  ).map((l) => l.join("")).join(",");
}
function al() {
  return "";
}
function ol() {
  return ":root";
}
function z(t) {
  return t.parentElement.tagName === "SCL" ? t.getAttribute("name") : `${k(t.parentElement)}>${t.getAttribute("name")}`;
}
function $(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [n, r] = le(e);
  if (!r) return K;
  if (i === 0) return `${t}[name="${r}"]`;
  const a = Y[t].parents;
  if (!a) return K;
  const o = a.flatMap(
    (l) => Y[l].selector === Y.Substation.selector ? $(l, n, i - 1).split(",") : oe(l, n).split(",")
  ).filter((l) => !l.startsWith(K));
  return o.length === 0 ? K : re(o, [">"], [t], [`[name="${r}"]`]).map((l) => l.join("")).join(",");
}
function w(t) {
  return k(t.parentElement).toString();
}
function _(t, e) {
  const i = Y[t].parents;
  if (!i) return K;
  const n = i.flatMap((r) => oe(r, e).split(",")).filter((r) => !r.startsWith(K));
  return n.length === 0 ? K : re(n, [">"], [t]).map((r) => r.join("")).join(",");
}
function Rt(t) {
  return `#${t.id}`;
}
function Ot(t, e) {
  const i = e.replace(/^#/, "");
  return i ? `${t}[id="${i}"]` : K;
}
const Un = [
  "TransformerWinding",
  "ConductingEquipment"
], Wn = [
  "GeneralEquipment",
  "PowerTransformer",
  ...Un
], yi = ["Substation", "VoltageLevel", "Bay"], jn = ["Process", "Line"], Kn = ["EqSubFunction", "EqFunction"], ll = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Wn,
  ...yi,
  ...jn,
  ...Kn
], Xn = ["ConnectivityNode", ...ll], dl = ["GOOSESecurity", "SMVSecurity"], sl = ["SubNetwork", ...dl, ...Xn], cl = ["BDA", "DA"], ul = ["SampledValueControl", "GSEControl"], ml = ["LogControl", "ReportControl"], pl = [...ul, ...ml], hl = ["GSE", "SMV"], fl = [
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
  ...pl,
  ...hl,
  ...cl
], tt = ["LN0", "LN"], bl = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], gl = ["Subject", "IssuerName"], xl = ["MinTime", "MaxTime"], vl = ["LNodeType", "DOType", "DAType", "EnumType"], yl = [
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
], wl = ["DynDataSet", "ConfDataSet"], _l = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...wl
], Al = ["ConfLogControl", "ConfSigRef"], Sl = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], El = ["SCL", ...sl, ...fl, ...vl], Zn = [
  ...El,
  ...bl,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...gl,
  ...xl,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...tt,
  ...yl,
  "DynAssociation",
  "SettingGroups",
  ..._l,
  ...Al,
  ...Sl,
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
], Il = new Set(Zn);
function Ti(t) {
  return Il.has(t);
}
const jt = ["Text", "Private"], Ge = [...jt], j = [...jt], Ft = [...jt], cn = [...j, "Val"], Yn = [...Ge, "LNode"], Ue = [...Yn], wi = [...Ue], ni = [
  ...Ue,
  "PowerTransformer",
  "GeneralEquipment"
], un = [
  ...wi,
  "Terminal"
], mn = [...j, "Address"], Qn = [...Ge], pn = [...Qn, "IEDName"], hn = [
  ...j,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], fn = [
  ...Ue,
  "GeneralEquipment",
  "Function"
], bn = [...Qn, "TrgOps"], gn = [
  ...Ue,
  "GeneralEquipment",
  "EqSubFunction"
], Y = {
  AccessControl: {
    identity: w,
    selector: _,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: z,
    selector: $,
    parents: ["IED"],
    children: [
      ...Ge,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: w,
    selector: _,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: $o,
    selector: zo,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: w,
    selector: _,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: z,
    selector: $,
    parents: ["DAType"],
    children: [...cn]
  },
  BitRate: {
    identity: w,
    selector: _,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: z,
    selector: $,
    parents: ["VoltageLevel"],
    children: [
      ...ni,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: Uo,
    selector: Wo,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: w,
    selector: _,
    parents: ["SCL"],
    children: [...j, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: z,
    selector: $,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...un,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: w,
    selector: _,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: Xo,
    selector: Zo,
    parents: ["SubNetwork"],
    children: [...j, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: z,
    selector: $,
    parents: ["Bay", "Line"],
    children: [...Yn]
  },
  DA: {
    identity: z,
    selector: $,
    parents: ["DOType"],
    children: [...cn]
  },
  DAI: {
    identity: ln,
    selector: vi,
    parents: ["DOI", "SDI"],
    children: [...j, "Val"]
  },
  DAType: {
    identity: Rt,
    selector: Ot,
    parents: ["DataTypeTemplates"],
    children: [...Ft, "BDA", "ProtNs"]
  },
  DO: {
    identity: z,
    selector: $,
    parents: ["LNodeType"],
    children: [...j]
  },
  DOI: {
    identity: z,
    selector: $,
    parents: [...tt],
    children: [...j, "SDI", "DAI"]
  },
  DOType: {
    identity: Rt,
    selector: Ot,
    parents: ["DataTypeTemplates"],
    children: [...Ft, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: z,
    selector: $,
    parents: [...tt],
    children: [...Ge, "FCDA"]
  },
  DataSetDirectory: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: w,
    selector: _,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: Rt,
    selector: Ot,
    parents: ["DataTypeTemplates"],
    children: [...Ft, "EnumVal"]
  },
  EnumVal: {
    identity: tl,
    selector: il,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: z,
    selector: $,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...gn]
  },
  EqSubFunction: {
    identity: z,
    selector: $,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...gn]
  },
  ExtRef: {
    identity: Bo,
    selector: Ho,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: Po,
    selector: Mo,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: z,
    selector: $,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...Ue,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: z,
    selector: $,
    parents: [
      "SubFunction",
      "Function",
      ...jn,
      ...Kn,
      ...yi
    ],
    children: [...wi, "EqFunction"]
  },
  GetCBValues: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: z,
    selector: $,
    parents: ["AccessPoint"],
    children: [...Ge, "Subject", "IssuerName"]
  },
  GSE: {
    identity: dn,
    selector: sn,
    parents: ["ConnectedAP"],
    children: [...mn, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: z,
    selector: $,
    parents: ["LN0"],
    children: [...pn, "Protocol"]
  },
  GSESettings: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: w,
    selector: _,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: w,
    selector: _,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: Co,
    selector: ko,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: z,
    selector: $,
    parents: ["SCL"],
    children: [...j, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: Fo,
    selector: Vo,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: w,
    selector: _,
    parents: [...tt],
    children: [...j, "ExtRef"]
  },
  IssuerName: {
    identity: w,
    selector: _,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: To,
    selector: Do,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: Ro,
    selector: Oo,
    parents: ["Server"],
    children: [...j, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: qo,
    selector: Go,
    parents: ["AccessPoint", "LDevice"],
    children: [...hn]
  },
  LN0: {
    identity: w,
    selector: _,
    parents: ["LDevice"],
    children: [
      ...hn,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: No,
    selector: Lo,
    parents: [...Xn],
    children: [...j]
  },
  LNodeType: {
    identity: Rt,
    selector: Ot,
    parents: ["DataTypeTemplates"],
    children: [...Ft, "DO"]
  },
  Line: {
    identity: z,
    selector: $,
    parents: ["Process", "SCL"],
    children: [
      ...fn,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: z,
    selector: $,
    parents: [...tt],
    children: [...j]
  },
  LogControl: {
    identity: z,
    selector: $,
    parents: [...tt],
    children: [...bn]
  },
  LogSettings: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: w,
    selector: _,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: w,
    selector: _,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: w,
    selector: _,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: an,
    selector: on,
    parents: ["TransformerWinding"],
    children: [...j]
  },
  OptFields: {
    identity: w,
    selector: _,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: Jo,
    selector: el,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: Yo,
    selector: Qo,
    parents: ["ConnectedAP"],
    children: [...j, "P"]
  },
  PowerTransformer: {
    identity: z,
    selector: $,
    parents: [...yi],
    children: [
      ...wi,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => K,
    parents: [],
    children: []
  },
  Process: {
    identity: z,
    selector: $,
    parents: ["Process", "SCL"],
    children: [
      ...fn,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: nl,
    selector: rl,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: w,
    selector: _,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: z,
    selector: $,
    parents: [...tt],
    children: [...bn, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: w,
    selector: _,
    parents: ["ReportControl"],
    children: [...j, "ClientLN"]
  },
  SamplesPerSec: {
    identity: w,
    selector: _,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: z,
    selector: $,
    parents: ["LN0"],
    children: [...pn, "SmvOpts"]
  },
  SecPerSamples: {
    identity: w,
    selector: _,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: al,
    selector: ol,
    parents: [],
    children: [
      ...jt,
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
    identity: ln,
    selector: vi,
    parents: ["DOI", "SDI"],
    children: [...j, "SDI", "DAI"]
  },
  SDO: {
    identity: z,
    selector: $,
    parents: ["DOType"],
    children: [...Ge]
  },
  Server: {
    identity: w,
    selector: _,
    parents: ["AccessPoint"],
    children: [
      ...j,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: w,
    selector: _,
    parents: ["AccessPoint"],
    children: [...j]
  },
  Services: {
    identity: w,
    selector: _,
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
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: w,
    selector: _,
    parents: ["LN0"],
    children: [...j]
  },
  SettingGroups: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: w,
    selector: _,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: w,
    selector: _,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: dn,
    selector: sn,
    parents: ["ConnectedAP"],
    children: [...mn]
  },
  SmvOpts: {
    identity: w,
    selector: _,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: z,
    selector: $,
    parents: ["AccessPoint"],
    children: [...Ge, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: z,
    selector: $,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...Un
    ],
    children: [...Ue, "EqFunction"]
  },
  SubFunction: {
    identity: z,
    selector: $,
    parents: ["SubFunction", "Function"],
    children: [
      ...Ue,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: z,
    selector: $,
    parents: ["Communication"],
    children: [...Ge, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: w,
    selector: _,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: z,
    selector: $,
    parents: ["SCL"],
    children: [...ni, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: z,
    selector: $,
    parents: ["TransformerWinding"],
    children: [...Ue, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: an,
    selector: on,
    parents: [...Wn],
    children: [...j]
  },
  Text: {
    identity: w,
    selector: _,
    parents: Zn.filter((t) => t !== "Text" && t !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: w,
    selector: _,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: z,
    selector: $,
    parents: ["PowerTransformer"],
    children: [
      ...un,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: w,
    selector: _,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: jo,
    selector: Ko,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: w,
    selector: _,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: w,
    selector: _,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: z,
    selector: $,
    parents: ["Substation"],
    children: [...ni, "Voltage", "Bay", "Function"]
  }
};
function oe(t, e) {
  return typeof e != "string" ? K : Ti(t) ? Y[t].selector(t, e) : t;
}
function Fe(t, e, i) {
  if (typeof i != "string" || !Ti(e)) return null;
  const n = t.querySelector(Y[e].selector(e, i));
  return n === null || xe(n) ? n : Array.from(
    t.querySelectorAll(Y[e].selector(e, i))
  ).find(xe) ?? null;
}
function k(t) {
  if (t === null) return NaN;
  if (t.closest("Private")) return NaN;
  const e = t.tagName;
  return Ti(e) ? Y[e].identity(t) : NaN;
}
Qr((t) => (e) => {
  Object.keys(t).length ? e.setValue(t) : e.setValue("");
});
const _t = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  decimal: "[+\\-]?[0-9]+(([.][0-9]*)?|([.][0-9]+))",
  unsigned: "[+]?[0-9]+(([.][0-9]*)?|([.][0-9]+))"
};
function Cl(t, e) {
  return typeof t == "string" && typeof e == "string" ? t.localeCompare(e) : typeof t == "object" && typeof e == "string" ? (t.getAttribute("name") ?? "").localeCompare(e) : typeof t == "string" && typeof e == "object" ? t.localeCompare(e.getAttribute("name")) : typeof t == "object" && typeof e == "object" ? (t.getAttribute("name") ?? "").localeCompare(
    e.getAttribute("name") ?? ""
  ) : 0;
}
function re(...t) {
  return t.reduce(
    (e, i) => e.flatMap((n) => i.map((r) => [n, r].flat())),
    [[]]
  );
}
function Jn(t, e = /* @__PURE__ */ new WeakSet()) {
  if (e.has(t)) return 1 / 0;
  switch (t?.constructor) {
    case Object:
    case Array:
      return e.add(t), 1 + Math.max(
        -1,
        ...Object.values(t).map((i) => Jn(i, e))
      );
    default:
      return 0;
  }
}
function xe(t) {
  return !t.closest("Private");
}
const kl = 99, er = Array(kl).fill(1).map((t, e) => `${e + 1}`);
function Nl(t) {
  const e = /* @__PURE__ */ new Map();
  return (i) => {
    if (!e.has(i)) {
      const n = new Set(
        ne(t, "LNode").filter((r) => r.getAttribute("lnClass") === i).map((r) => r.getAttribute("lnInst"))
      );
      e.set(i, () => {
        const r = er.find((a) => !n.has(a));
        return r && n.add(r), r;
      });
    }
    return e.get(i)();
  };
}
function Ll(t) {
  const e = new Set(t.map((i) => i.getAttribute("inst") || ""));
  return er.find((i) => !e.has(i));
}
m`<svg
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
const Lt = {
  action: B`<path d="M0 0h24v24H0z" fill="none"></path><path d="M13 3c-4.97 0-9
  4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7
  7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0
  9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" fill="currentColor"></path>`,
  dAIcon: B`<path fill="currentColor" d="m4.2 0c-2.31 0-4.2 1.89-4.2 4.2v11.6c0 2.31 1.89 4.2 4.2 4.2h18.1c2.31 0 4.2-1.89 4.2-4.2v-11.6c0-2.31-1.89-4.2-4.2-4.2zm0 1.89h18.1c1.29 0 2.3 1.01 2.3 2.3v11.6c0 1.29-1.01 2.31-2.3 2.31h-18.1c-1.29 0-2.3-1.01-2.3-2.31v-11.6c0-1.29 1.01-2.3 2.3-2.3z"/><path fill="currentColor" d="m12.5 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path fill="currentColor" d="m19.7 15-0.74-2.56h-3.18l-0.74 2.56h-1.75l3.04-10h2.06l3.03 10zm-1.13-4.13-0.823-2.88-0.379-1.46q-0.0947 0.412-0.178 0.739-0.0829 0.327-1.02 3.59z"/>`,
  dOIcon: B`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m12.1 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path d="m21.6 9.97q0 1.56-0.515 2.75-0.515 1.19-1.47 1.82-0.959 0.625-2.24 0.625-1.97 0-3.08-1.39-1.11-1.39-1.11-3.81 0-2.41 1.11-3.76t3.1-1.35 3.1 1.36q1.12 1.36 1.12 3.74zm-1.78 0q0-1.62-0.639-2.54-0.639-0.923-1.79-0.923-1.17 0-1.81 0.916-0.639 0.909-0.639 2.54 0 1.65 0.651 2.6 0.657 0.945 1.79 0.945 1.17 0 1.81-0.923 0.639-0.923 0.639-2.62z"/>`,
  enumIcon: B`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m5.37 15v-10h6.56v1.62h-4.81v2.51h4.45v1.62h-4.45v2.64h5.06v1.62z"/><path d="m18.5 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  info: B`<path d="M0 0h24v24H0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"></path>`,
  warning: B`<path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="currentColor"></path>`,
  error: B`<path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z" fill="currentColor"></path><path d="M11 7h2v7h-2z" fill="currentColor"></path><circle cx="12" cy="16" r="1" fill="currentColor"></circle>`,
  gooseIcon: B`<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  lNIcon: B`<path stroke="currentColor" stroke-width="1.89" fill="none" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path fill="currentColor" d="m5.71 15v-10h1.75v8.39h4.47v1.62z"/><path fill="currentColor" d="m18.2 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  logIcon: B`<path fill="currentColor" d="M9,7H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  reportIcon: B`<path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,16.41 7.58,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  smvIcon: B`<path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`
}, Tl = B`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Lt.gooseIcon}</svg>`;
B`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Lt.reportIcon}</svg>`;
const Dl = B`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Lt.smvIcon}</svg>`;
B`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Lt.logIcon}</svg>`;
B`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z" />
</svg>`;
B`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M21,14V4H3V14H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M4,5H15V10H4V5M16,5H20V7H16V5M20,8V13H16V8H20M4,11H9V13H4V11M10,11H15V13H10V11Z" />
</svg>`;
B`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4,1C2.89,1 2,1.89 2,3V7C2,8.11 2.89,9 4,9H1V11H13V9H10C11.11,9 12,8.11 12,7V3C12,1.89 11.11,1 10,1H4M4,3H10V7H4V3M14,13C12.89,13 12,13.89 12,15V19C12,20.11 12.89,21 14,21H11V23H23V21H20C21.11,21 22,20.11 22,19V15C22,13.89 21.11,13 20,13H14M3.88,13.46L2.46,14.88L4.59,17L2.46,19.12L3.88,20.54L6,18.41L8.12,20.54L9.54,19.12L7.41,17L9.54,14.88L8.12,13.46L6,15.59L3.88,13.46M14,15H20V19H14V15Z" />
</svg>`;
const xn = {
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
Vt("dAIcon"), Vt("dOIcon"), Vt("enumIcon"), Vt("lNIcon");
function Vt(t) {
  if (t === "reset") return m``;
  const e = xn[t]?.height ?? 24, i = xn[t]?.width ?? 24;
  return m`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${e}"
    viewBox="0 0 ${i} ${e}"
    width="${i}"
  >
    ${Lt[t]}
  </svg> `;
}
m`<svg
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
m`<svg
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
m`<svg
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
m`<svg
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
m`<svg
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
m`<svg
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
m`<svg
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
m`<svg
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
m`<svg
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
m`<svg
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
m`<svg
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
m`<svg
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
m` <svg
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
B`
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
  </svg>`;
B`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
B`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
B`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
B`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
B`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
function $l(t, e) {
  const i = {};
  return Array.from(t.attributes).forEach((n) => {
    i[n.name] = n.value;
  }), { element: t, oldAttributes: i, newAttributes: e };
}
function At(t, e = "user", i) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { action: t, initiator: e, ...i?.detail }
  });
}
const tr = {
  IED: [
    {
      attributeName: "iedName",
      filter: et("Association")
    },
    {
      attributeName: "iedName",
      filter: et("ClientLN")
    },
    {
      attributeName: "iedName",
      filter: et("ConnectedAP")
    },
    {
      attributeName: "iedName",
      filter: et("ExtRef")
    },
    {
      attributeName: "iedName",
      filter: et("KDC")
    },
    {
      attributeName: "iedName",
      filter: et("LNode")
    },
    {
      attributeName: null,
      filter: ri("GSEControl > IEDName")
    },
    {
      attributeName: null,
      filter: ri("SampledValueControl > IEDName")
    },
    {
      attributeName: null,
      filter: ri("LN > DOI > DAI > Val")
    }
  ],
  Substation: [
    {
      attributeName: "substationName",
      filter: et("Terminal")
    }
  ],
  VoltageLevel: [
    {
      attributeName: "voltageLevelName",
      filter: vn("Terminal", {
        Substation: "substationName"
      })
    }
  ],
  Bay: [
    {
      attributeName: "bayName",
      filter: vn("Terminal", {
        Substation: "substationName",
        VoltageLevel: "voltageLevelName"
      })
    }
  ]
};
function et(t) {
  return function(i, n, r) {
    return `${t}[${n}="${r}"]`;
  };
}
function ri(t) {
  return function() {
    return `${t}`;
  };
}
function vn(t, e) {
  return function(n, r, a) {
    return `${t}${Object.entries(e).map(([o, l]) => {
      const s = n.closest(o);
      if (s && s.hasAttribute("name")) {
        const c = s.getAttribute("name");
        return `[${l}="${c}"]`;
      }
      return null;
    }).join("")}[${r}="${a}"]`;
  };
}
function zl(t, e, i) {
  const n = t.cloneNode(!1);
  return n.setAttribute(e, i), n;
}
function ir(t, e) {
  const i = t.cloneNode(!1);
  return i.textContent = e, i;
}
function Di(t, e, i) {
  if (e === null || e === i)
    return [];
  const n = tr[t.tagName];
  if (n === void 0)
    return [];
  const r = [];
  return n.forEach((a) => {
    const o = a.filter(t, a.attributeName, e);
    a.attributeName ? Array.from(t.ownerDocument.querySelectorAll(`${o}`)).filter(xe).forEach((l) => {
      const s = zl(
        l,
        a.attributeName,
        i
      );
      r.push({ old: { element: l }, new: { element: s } });
    }) : Array.from(t.ownerDocument.querySelectorAll(`${o}`)).filter((l) => l.textContent === e).filter(xe).forEach((l) => {
      const s = ir(l, i);
      r.push({ old: { element: l }, new: { element: s } });
    });
  }), t.tagName === "IED" && r.push(...Rl(t, e, i)), r;
}
function Rl(t, e, i) {
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
    ), s = l?.getAttribute("srcLDInst") + "/" + l?.getAttribute("srcLNClass") + "." + l?.getAttribute("srcCBName");
    for (let c of o)
      if (e + s === c.textContent.trim()) {
        const h = ir(
          c,
          i + s
        );
        n.push({
          old: { element: c },
          new: { element: h }
        });
        break;
      }
  }), n;
}
function nr(t) {
  const e = Gn(t) ?? null;
  if (e === null)
    return [];
  const i = tr[t.tagName];
  if (i === void 0)
    return [];
  const n = [];
  return i.forEach((r) => {
    const a = r.filter(t, r.attributeName, e);
    r.attributeName ? Array.from(t.ownerDocument.querySelectorAll(`${a}`)).filter(xe).forEach((o) => {
      n.push({ old: { parent: o.parentElement, element: o } });
    }) : Array.from(t.ownerDocument.querySelectorAll(`${a}`)).filter((o) => o.textContent === e).filter(xe).forEach((o) => {
      o.parentElement && n.push({
        old: {
          parent: o.parentElement.parentElement,
          element: o.parentElement
        }
      });
    });
  }), n;
}
function rr(t) {
  return (e) => {
    const i = x(e.find((a) => a.label === "name")), n = x(e.find((a) => a.label === "desc"));
    if (i === t.getAttribute("name") && n === t.getAttribute("desc"))
      return [];
    const r = V(t, { name: i, desc: n });
    return [{ old: { element: t }, new: { element: r } }];
  };
}
function Ol(t, e) {
  return (i) => {
    const n = x(i.find((s) => s.label === "name")), r = t.getAttribute("name"), a = x(i.find((s) => s.label === "desc"));
    if (n === r && a === t.getAttribute("desc"))
      return [];
    const o = V(t, { name: n, desc: a }), l = {
      actions: [],
      title: d(e, { name: n })
    };
    return l.actions.push({
      old: { element: t },
      new: { element: o }
    }), l.actions.push(...Di(t, r, n)), l.actions.length ? [l] : [];
  };
}
function ar(t, e) {
  return (i) => {
    const n = {};
    if (Fl(n, t, i), Object.keys(n).length == 0)
      return [];
    Vl(t, n);
    const r = x(i.find((o) => o.label === "name")), a = {
      actions: [],
      title: d(e, { name: r })
    };
    return a.actions.push($l(t, n)), a.actions.push(
      ...Di(t, t.getAttribute("name"), r)
    ), a.actions.length ? [a] : [];
  };
}
function Fl(t, e, i) {
  const n = x(i.find((a) => a.label === "name")), r = x(i.find((a) => a.label === "desc"));
  n !== e.getAttribute("name") && (t.name = n), r !== e.getAttribute("desc") && (t.desc = r);
}
function Vl(t, e) {
  const i = Object.keys(e);
  return Array.from(t.attributes).filter((n) => !i.includes(n.name)).forEach((n) => {
    e[n.name] = n.value;
  }), e;
}
function or(t, e) {
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
function Pl(t) {
  return (e) => {
    const i = x(e.find((o) => o.label === "name")), n = x(e.find((o) => o.label === "desc")), r = T(t.ownerDocument, "Bay", {
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
function Ml(t) {
  return [
    {
      title: d("bay.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: d("add"),
        action: Pl(t)
      },
      content: or("", "")
    }
  ];
}
function Bl(t) {
  return [
    {
      title: d("bay.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: d("save"),
        action: Ol(
          t,
          "bay.action.updateBay"
        )
      },
      content: or(
        t.getAttribute("name"),
        t.getAttribute("desc")
      )
    }
  ];
}
const _i = {
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
function Hl(t) {
  if (!t) return null;
  const [e, i, n, r, a] = [
    "lnInst",
    "lnClass",
    "iedName",
    "ldInst",
    "prefix"
  ].map((h) => t?.getAttribute(h)), o = [`IED[name="${n}"]`, "IED"], l = ["AccessPoint > Server"], s = [
    `LDevice[inst="${r}"] > LN[inst="${e}"][lnClass="${i}"]`
  ], c = a && a !== "" ? [`[prefix="${a}"]`] : ['[prefix=""]', ":not(prefix)"];
  return t.ownerDocument.querySelector(
    re(
      o,
      [" > "],
      l,
      [" > "],
      s,
      c
    ).map((h) => h.join("")).join(",")
  );
}
function lr(t) {
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
function ql(t) {
  const e = t.querySelector(
    'DOI[name="SwTyp"] > DAI[name="stVal"]'
  );
  return e ? e.querySelector("Val")?.innerHTML.trim() : lr(t);
}
function Gl(t) {
  return Array.from(t.querySelectorAll("Terminal")).some(
    (e) => e.getAttribute("cNodeName") === "grounded"
  );
}
function Ul(t) {
  const e = t.querySelector('LNode[lnClass="XSWI"]'), i = Hl(e);
  let n;
  return i ? n = ql(i) : e && (n = lr(e)), n ? ["Earthing Switch", "High Speed Earthing Switch"].includes(n) : !1;
}
function Wl(t) {
  return t.getAttribute("type") === "DIS" && (Gl(t) || Ul(t)) ? "ERS" : t.getAttribute("type") ?? "";
}
function jl(t) {
  return _i[Wl(t)] ?? d("conductingequipment.unknownType");
}
function Kl(t, e) {
  return t === "create" ? m`<mwc-select
        style="--mdc-menu-max-height: 196px;"
        required
        label="type"
        helper="${d("conductingequipment.wizard.typeHelper")}"
        validationMessage="${d("textfield.required")}"
      >
        ${Object.keys(_i).map(
    (i) => m`<mwc-list-item value="${i}">${_i[i]}</mwc-list-item>`
  )}
      </mwc-select>` : m`<mwc-select
        label="type"
        helper="${d("conductingequipment.wizard.typeHelper")}"
        validationMessage="${d("textfield.required")}"
        disabled
      >
        <mwc-list-item selected value="0">${e}</mwc-list-item>
      </mwc-select>`;
}
function dr(t, e, i, n, r) {
  return [
    Kl(i, n),
    m`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${d("conductingequipment.wizard.nameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${r}
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${d("conductingequipment.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function Xl(t) {
  return (e) => {
    const i = x(e.find((I) => I.label === "name")), n = x(e.find((I) => I.label === "desc")), r = x(e.find((I) => I.label === "type")), a = r === "ERS" ? "DIS" : r, o = T(t.ownerDocument, "ConductingEquipment", {
      name: i,
      type: a,
      desc: n
    });
    if (r !== "ERS") return [{ new: { parent: t, element: o } }];
    const l = t.closest("VoltageLevel")?.querySelector('ConnectivityNode[name="grounded"]'), s = l ? l.closest("Substation")?.getAttribute("name") ?? null : t.closest("Substation")?.getAttribute("name") ?? null, c = l ? l.closest("VoltageLevel")?.getAttribute("name") ?? null : t.closest("VoltageLevel")?.getAttribute("name") ?? null, h = l ? l.closest("Bay")?.getAttribute("name") ?? null : t.closest("Bay")?.getAttribute("name") ?? null, b = h && c && s ? s + "/" + c + "/" + h + "/grounded" : null;
    o.appendChild(
      T(t.ownerDocument, "Terminal", {
        name: "T1",
        cNodeName: "grounded",
        substationName: s,
        voltageLevelName: c,
        bayName: h,
        connectivityNode: b
      })
    );
    const g = {
      new: {
        parent: t,
        element: o
      }
    };
    if (l) return [g];
    const v = T(
      t.ownerDocument,
      "ConnectivityNode",
      {
        name: "grounded",
        pathName: b
      }
    );
    return [g, {
      new: {
        parent: t,
        element: v
      }
    }];
  };
}
function sr(t, e) {
  return Array.from(t.querySelectorAll("ConductingEquipment")).filter(xe).map((i) => i.getAttribute("name") ?? "").filter((i) => e && i !== e);
}
function Zl(t) {
  const e = sr(t);
  return [
    {
      title: d("conductingequipment.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: d("add"),
        action: Xl(t)
      },
      content: dr(
        "",
        "",
        "create",
        "",
        e
      )
    }
  ];
}
function Yl(t) {
  const e = sr(
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
        action: rr(t)
      },
      content: dr(
        t.getAttribute("name"),
        t.getAttribute("desc"),
        "edit",
        jl(t),
        e
      )
    }
  ];
}
function Ql(t, e, i) {
  return [
    m`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${d("connectivitynode.wizard.nameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${i}
      readonly
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="pathName"
      .maybeValue=${e}
      helper="${d("connectivitynode.wizard.pathNameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function Jl(t) {
  const e = Array.from(
    t.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(xe).map((i) => i.getAttribute("name") ?? "").filter((i) => i !== t.getAttribute("name"));
  return [
    {
      title: d("connectivitynode.wizard.title.edit"),
      element: t,
      content: Ql(
        t.getAttribute("name"),
        t.getAttribute("pathName"),
        e
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
const yn = /* @__PURE__ */ new WeakMap(), wn = 2147483647, ed = ct((...t) => (e) => {
  let i = yn.get(e);
  i === void 0 && (i = {
    lastRenderedIndex: wn,
    values: []
  }, yn.set(e, i));
  const n = i.values;
  let r = n.length;
  i.values = t;
  for (let a = 0; a < t.length && !(a > i.lastRenderedIndex); a++) {
    const o = t[a];
    if (Ci(o) || typeof o.then != "function") {
      e.setValue(o), i.lastRenderedIndex = a;
      break;
    }
    a < r && o === n[a] || (i.lastRenderedIndex = wn, r = 0, Promise.resolve(o).then((l) => {
      const s = i.values.indexOf(o);
      s > -1 && s < i.lastRenderedIndex && (i.lastRenderedIndex = s, e.setValue(l), e.commit());
    }));
  }
});
var td = Object.defineProperty, id = Object.getOwnPropertyDescriptor, ot = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? id(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && td(e, i, r), r;
};
function Ai(t) {
  return !t.closest("filtered-list") || !t.parentElement || t.parentElement instanceof De ? t : Ai(t.parentElement);
}
function nd(t, e) {
  const i = t.innerText + `
`, n = Array.from(t.children).map((l) => l.innerText).join(`
`), r = t.value, a = (i + n + r).toUpperCase(), o = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  o.length === 1 && o[0] === "" || o.every((l) => new RegExp(
    `*${l}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(a)) ? Ai(t).classList.remove("hidden") : Ai(t).classList.add("hidden");
}
let De = class extends be {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((t) => t instanceof st);
  }
  get isAllSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof st).every((t) => t.selected);
  }
  get isSomeSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof st).some((t) => t.selected);
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
      (t) => nd(t, this.searchField.value)
    );
  }
  onListItemConnected(t) {
    super.onListItemConnected(t), this.requestUpdate();
  }
  update(t) {
    super.update(t), this.onFilterInput();
  }
  renderCheckAll() {
    return this.existCheckListItem && !this.disableCheckAll ? m`<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
      this.onCheckAll();
    }}
          ></mwc-checkbox
        ></mwc-formfield>` : m``;
  }
  render() {
    return m`<div id="tfcontainer">
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
De.styles = X`
    ${Yr(Bt.styles)}

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
ot([
  f({ type: String })
], De.prototype, "searchFieldLabel", 2);
ot([
  f({ type: Boolean })
], De.prototype, "disableCheckAll", 2);
ot([
  E()
], De.prototype, "existCheckListItem", 1);
ot([
  E()
], De.prototype, "isAllSelected", 1);
ot([
  E()
], De.prototype, "isSomeSelected", 1);
ot([
  C("mwc-textfield")
], De.prototype, "searchField", 2);
De = ot([
  W("filtered-list")
], De);
var rd = Object.defineProperty, ad = Object.getOwnPropertyDescriptor, He = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? ad(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && rd(e, i, r), r;
};
const od = m`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${d("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let Ie = class extends Ce {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (t) => ({
      path: t,
      header: m`<h2>${"/" + t.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return Jn(this.selection);
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
    return m`<filtered-list
      @selected=${(i) => this.select(i, t)}
      searchFieldLabel="${this.getTitle(t)}"
    >
      ${e.map(
      (i) => m`<mwc-list-item
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
        m`${O(r)} ${this.renderDirectory(o, a)}`
      );
    return n.length === 0 ? m`` : m`<div class="column">${n}</div>`;
  }
  render() {
    const t = new Array(this.depth).fill(0).map((e, i) => this.renderColumn(i));
    return this.loaded = Promise.allSettled(t).then(), m`<div class="pane">
      ${t.map((e) => ed(e, od))}
    </div>`;
  }
};
Ie.styles = X`
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
He([
  f({ type: Object })
], Ie.prototype, "selection", 2);
He([
  f({ type: Boolean })
], Ie.prototype, "multi", 2);
He([
  f({ type: Number })
], Ie.prototype, "depth", 1);
He([
  f({ type: Array })
], Ie.prototype, "paths", 1);
He([
  f({ type: Array })
], Ie.prototype, "path", 1);
He([
  f({ attribute: !1 })
], Ie.prototype, "read", 2);
He([
  f({ attribute: !1 })
], Ie.prototype, "loaded", 2);
He([
  C("div")
], Ie.prototype, "container", 2);
Ie = He([
  W("finder-list")
], Ie);
function ld(t) {
  return t.startsWith("IED:") ? t.replace(/^.*:/, "").trim() : t.startsWith("LN0:") ? "LLN0" : t.replace(/^.*>/, "").trim();
}
function dd(t, e) {
  return async (i) => {
    const [n, r] = i[i.length - 1]?.split(": ", 2), a = Fe(t, n, r);
    return a ? {
      path: i,
      header: void 0,
      entries: e(a).map(
        (o) => `${o.tagName}: ${k(o)}`
      )
    } : { path: i, header: m`<p>${d("error")}</p>`, entries: [] };
  };
}
function cr(t) {
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
function sd(t) {
  return m`<finder-list
    multi
    .paths=${[["Server: " + k(t)]]}
    .read=${dd(t.ownerDocument, cr)}
    .getDisplayString=${ld}
    .getTitle=${(e) => e[e.length - 1]}
  ></finder-list>`;
}
function cd(t, e) {
  const [i, n] = e[e.length - 1].split(": "), r = Fe(t.ownerDocument, i, n);
  if (!r || cr(r).length > 0) return;
  const a = e.find((D) => D.startsWith("LN"));
  if (!a) return;
  const [o, l] = a.split(": "), s = Fe(t.ownerDocument, o, l);
  if (!s) return;
  const c = s.closest("LDevice")?.getAttribute("inst"), h = s.getAttribute("prefix") ?? "", b = s.getAttribute("lnClass"), g = s.getAttribute("inst") && s.getAttribute("inst") !== "" ? s.getAttribute("inst") : null;
  let v = "", y = "", I = "";
  for (const D of e) {
    const [S, Z] = D.split(": ");
    if (!["DO", "DA", "SDO", "BDA"].includes(S)) continue;
    const _e = Fe(t.ownerDocument, S, Z);
    if (!_e) return;
    const Se = _e.getAttribute("name");
    S === "DO" && (v = Se), S === "SDO" && (v = v + "." + Se), S === "DA" && (y = Se, I = _e.getAttribute("fc") ?? ""), S === "BDA" && (y = y + "." + Se);
  }
  if (!(!c || !b || !v || !y || !I))
    return T(t.ownerDocument, "FCDA", {
      ldInst: c,
      prefix: h,
      lnClass: b,
      lnInst: g,
      doName: v,
      daName: y,
      fc: I
    });
}
function ud(t) {
  return (e, i) => {
    const r = i.shadowRoot.querySelector("finder-list")?.paths ?? [], a = [];
    for (const o of r) {
      const l = cd(t, o);
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
function ur(t) {
  const e = t.closest("Server");
  return [
    {
      title: d("wizard.title.add", { tagName: "FCDA" }),
      primary: {
        label: "add",
        icon: "add",
        action: ud(t)
      },
      content: [e ? sd(e) : m``]
    }
  ];
}
const Ve = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  asciName: "[A-Za-z][0-9,A-Z,a-z_]*",
  abstractDataAttributeName: "((T)|(Test)|(Check)|(SIUnit)|(Oper)|(SBO)|(SBOw)|(Cancel)|[a-z][0-9A-Za-z]*)"
}, $i = {
  cbName: 32,
  abstracDaName: 60
};
function ai(t, e) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { ...t, ...e?.detail }
  });
}
function md(t) {
  return (e, i, n) => {
    const r = n.items.filter((l) => l.selected).map((l) => l.value).map((l) => Fe(t.ownerDocument, "LNodeType", l)).filter((l) => l !== null), a = Nl(t);
    return r.map((l) => {
      const s = l.getAttribute("lnClass");
      if (!s) return null;
      const c = a(s);
      if (!c) {
        i.dispatchEvent(
          ai({
            kind: "error",
            title: d("lnode.log.title", { lnClass: s }),
            message: d("lnode.log.nonuniquelninst")
          })
        );
        return;
      }
      const h = ne(t, "LNode").some(
        (y) => y.getAttribute("lnClass") === "LLN0"
      );
      if (s === "LLN0" && h) {
        i.dispatchEvent(
          ai({
            kind: "error",
            title: d("lnode.log.title", { lnClass: s }),
            message: d("lnode.log.uniqueln0", { lnClass: s })
          })
        );
        return;
      }
      const b = ne(t, "LNode").some(
        (y) => y.getAttribute("lnClass") === "LPHD"
      );
      if (s === "LPHD" && b) {
        i.dispatchEvent(
          ai({
            kind: "error",
            title: d("lnode.log.title", { lnClass: s }),
            message: d("lnode.log.uniqueln0", { lnClass: s })
          })
        );
        return;
      }
      const g = s === "LLN0" ? "" : c, v = T(t.ownerDocument, "LNode", {
        iedName: "None",
        ldInst: null,
        prefix: null,
        lnClass: s,
        lnInst: g,
        lnType: l.getAttribute("id")
      });
      return { new: { parent: t, element: v } };
    }).filter((l) => l);
  };
}
function pd(t) {
  return (e) => {
    e.dispatchEvent(Te()), e.dispatchEvent(Te(hr(t)));
  };
}
function mr(t) {
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
          action: pd(t)
        }
      ],
      primary: {
        icon: "save",
        label: d("save"),
        action: md(t)
      },
      content: [
        A`<filtered-list multi
          >${e.map((i) => {
          const n = i.getAttribute("lnClass") === "LLN0" && ne(t, "LNode").some(
            (r) => r.getAttribute("lnClass") === "LLN0"
          ) || i.getAttribute("lnClass") === "LPHD" && ne(t, "LNode").some(
            (r) => r.getAttribute("lnClass") === "LPHD"
          );
          return A`<mwc-check-list-item
              twoline
              value="${k(i)}"
              ?disabled=${n}
              ><span>${i.getAttribute("lnClass")}</span
              ><span slot="secondary"
                >${n ? d("lnode.wizard.uniquewarning") : k(i)}</span
              ></mwc-check-list-item
            >`;
        })}</filtered-list
        >`
      ]
    }
  ];
}
const hd = {
  CBR: ["CSWI", "CILO", "XCBR"],
  DIS: ["CSWI", "CILO", "XSWI"],
  VTR: ["TVTR"],
  CTR: ["TCTR"],
  Bay: ["LLN0"],
  VoltageLevel: ["LLN0"],
  Substation: ["LLN0"]
};
function pr(t, e) {
  return t.disabled !== e.disabled ? e.disabled ? -1 : 1 : t.preferred !== e.preferred ? t.preferred ? -1 : 1 : t.selected !== e.selected ? t.selected ? -1 : 1 : 0;
}
const fd = "Client LN";
function _n(t, e) {
  return Array.from(t.getElementsByTagName("LNode")).filter((i) => !i.closest("Private")).filter((i) => zi(e, i))[0] ?? null;
}
function zi(t, e) {
  return (e.getAttribute("iedName") ?? "") === (t.closest("IED")?.getAttribute("name") ?? "") && (e.getAttribute("ldInst") ?? "") === (t.closest("LDevice")?.getAttribute("inst") ?? "") && (e.getAttribute("prefix") ?? "") === (t.getAttribute("prefix") ?? "") && (e.getAttribute("lnClass") ?? "") === (t.getAttribute("lnClass") ?? "") && (e.getAttribute("lnInst") ?? "") === (t.getAttribute("inst") ?? "");
}
function bd(t, e) {
  const i = T(t.ownerDocument, "LNode", {
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
function gd(t, e) {
  return {
    old: {
      parent: t,
      element: e,
      reference: e.nextElementSibling
    }
  };
}
function xd(t, e) {
  return t.some((i) => zi(i, e));
}
function vd(t, e) {
  return e.some((i) => zi(t, i));
}
function yd(t) {
  return (e, i, n) => {
    const r = n.items.filter((s) => s.selected).map((s) => s.value).map((s) => {
      const c = Fe(t.ownerDocument, "LN0", s);
      return c || Fe(t.ownerDocument, "LN", s);
    }).filter((s) => s !== null), a = ne(t, "LNode").filter(
      xe
    ), o = a.filter((s) => !xd(r, s)).map((s) => gd(t, s)), l = r.filter((s) => !vd(s, a)).map((s) => bd(t, s));
    return o.concat(l);
  };
}
function wd(t, e) {
  return t.parentElement?.parentElement?.nextElementSibling?.querySelector(
    e
  ) ?? null;
}
function _d(t, e) {
  if (!(t.target instanceof be)) return;
  const i = wd(t.target, "#lnList");
  if (i === null) return;
  const n = e.ownerDocument, o = t.target.selected.flatMap(
    (l) => Array.from(
      n.querySelectorAll(
        `:root > IED[name="${l.value}"] > AccessPoint > LN,:root > IED[name="${l.value}"] > AccessPoint > Server > LDevice > LN,:root > IED[name="${l.value}"] > AccessPoint > Server > LDevice > LN0`
      )
    ).filter((s) => !s.closest("Private"))
  ).filter((l) => l !== null).map((l) => {
    const s = hd[e.getAttribute("type") ? e.getAttribute("type") ?? "" : e.tagName ?? ""]?.includes(l.getAttribute("lnClass") ?? "") ?? !1, c = _n(e.ownerDocument, l), h = c?.parentElement === e;
    return {
      selected: h,
      disabled: c !== null && !h,
      prefered: s,
      element: l
    };
  }).sort(pr).map((l) => A`<mwc-check-list-item
      ?selected=${l.selected}
      ?disabled=${l.disabled}
      value="${k(l.element)}"
      twoline
      ><span
        >${l.element.getAttribute("prefix") ?? ""}${l.element.getAttribute("lnClass")}${l.element.getAttribute(
    "inst"
  ) ?? ""}
        ${l.disabled ? A` <mwc-icon style="--mdc-icon-size: 1em;"
                >account_tree</mwc-icon
              >
              ${Io(_n(n, l.element))}` : ""}</span
      ><span slot="secondary"
        >${l.element.closest("IED")?.getAttribute("name") ?? ""} |
        ${l.element.closest("LDevice") ? l.element.closest("LDevice")?.getAttribute("inst") : fd}</span
      ></mwc-check-list-item
    >`);
  kn(A`${o}`, i);
}
function Ad(t) {
  const e = t.ownerDocument;
  return e.querySelectorAll(":root > IED").length > 0 ? A`<filtered-list
      disableCheckAll
      multi
      id="iedList"
      @selected=${(i) => _d(i, t)}
      >${Array.from(e.querySelectorAll(":root > IED")).map((i) => i.getAttribute("name")).map((i) => ({
    selected: Array.from(t.children).filter((n) => !n.closest("Private")).filter(
      (n) => n.tagName === "LNode" && n.getAttribute("iedName") === i
    ).length > 0,
    iedName: i
  })).sort(pr).map(
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
function Sd(t) {
  return (e) => {
    e.dispatchEvent(Te()), e.dispatchEvent(Te(mr(t)));
  };
}
function hr(t) {
  return [
    {
      title: d("lnode.wizard.title.selectIEDs"),
      menuActions: [
        {
          icon: "",
          label: d("lnode.wizard.instance"),
          action: Sd(t)
        }
      ],
      content: [Ad(t)]
    },
    {
      initial: Array.from(t.children).some(
        (e) => e.tagName === "LNode"
      ),
      title: d("lnode.wizard.title.selectLNs"),
      primary: {
        icon: "save",
        label: d("save"),
        action: yd(t)
      },
      content: [A`<filtered-list multi id="lnList"></filtered-list>`]
    }
  ];
}
function Ed(t) {
  return t.tagName === "Function" || t.tagName === "SubFunction" || t.tagName === "EqFunction" || t.tagName === "EqSubFunction" ? mr(t) : hr(t);
}
function Id(t) {
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
      pattern="${Ve.asciName}"
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
function Cd(t) {
  return (e) => {
    const i = {}, n = ["iedName", "ldInst", "prefix", "lnClass", "lnInst"];
    n.forEach((a) => {
      i[a] = x(e.find((o) => o.label === a));
    });
    let r = null;
    if (n.some((a) => i[a] !== t.getAttribute(a))) {
      const a = V(t, i);
      return r = {
        old: { element: t },
        new: { element: a }
      }, [r];
    }
    return [];
  };
}
function kd(t) {
  const [e, i, n, r, a] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((l) => t.getAttribute(l)), o = ne(
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
        action: Cd(t)
      },
      content: [
        ...Id({
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
function Nd(t) {
  return Object.entries(t).map(
    ([e, i]) => m`<wizard-checkbox
        label="${e}"
        .maybeValue=${i}
        nullable
        helper="${d(`scl.${e}`)}"
      ></wizard-checkbox>`
  );
}
function Ld(t) {
  return (e) => {
    const i = x(e.find((b) => b.label === "seqNum")), n = x(e.find((b) => b.label === "timeStamp")), r = x(e.find((b) => b.label === "dataSet")), a = x(e.find((b) => b.label === "reasonCode")), o = x(e.find((b) => b.label === "dataRef")), l = x(e.find((b) => b.label === "entryID")), s = x(e.find((b) => b.label === "configRef")), c = x(e.find((b) => b.label === "bufOvfl"));
    if (i === t.getAttribute("seqNum") && n === t.getAttribute("timeStamp") && r === t.getAttribute("dataSet") && a === t.getAttribute("reasonCode") && o === t.getAttribute("dataRef") && l === t.getAttribute("entryID") && s === t.getAttribute("configRef") && c === t.getAttribute("bufOvfl"))
      return [];
    const h = V(t, {
      seqNum: i,
      timeStamp: n,
      dataSet: r,
      reasonCode: a,
      dataRef: o,
      entryID: l,
      configRef: s,
      bufOvfl: c
    });
    return [{ old: { element: t }, new: { element: h } }];
  };
}
function Td(t) {
  const [
    e,
    i,
    n,
    r,
    a,
    o,
    l,
    s
  ] = [
    "seqNum",
    "timeStamp",
    "dataSet",
    "reasonCode",
    "dataRef",
    "entryID",
    "configRef",
    "bufOvfl"
  ].map((c) => t.getAttribute(c));
  return [
    {
      title: d("wizard.title.edit", { tagName: t.tagName }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Ld(t)
      },
      content: Nd({
        seqNum: e,
        timeStamp: i,
        dataSet: n,
        reasonCode: r,
        dataRef: a,
        entryID: o,
        configRef: l,
        bufOvfl: s
      })
    }
  ];
}
let Dd = 1, fr = 1, br = 1;
function $d(t, e) {
  return e.parentElement?.querySelectorAll(
    `LN[lnClass="CSWI"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""},LN[lnClass="CILO"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""},LN[lnClass="XCBR"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""},LN[lnClass="XSWI"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""}`
  ).forEach((i) => {
    t.appendChild(
      T(e.ownerDocument, "LNode", {
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
function gr(t) {
  return t.parentElement?.querySelector(
    `LN[lnClass="XCBR"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""}`
  ) ? "CBR" : "DIS";
}
function zd(t) {
  return t.getAttribute("prefix") && t.getAttribute("inst") ? t.getAttribute("prefix") + t.getAttribute("inst") : t.getAttribute("inst") && gr(t) === "CBR" ? "QA" + fr++ : "QB" + br++;
}
function Rd(t, e) {
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
function Od(t) {
  return Array.from(
    t.querySelectorAll('AccessPoint > Server > LDevice > LN[lnClass="CSWI"]')
  );
}
function Fd(t, e) {
  return t.parentElement ? Od(t).filter((i) => Rd(i, e)) : [];
}
function Vd(t, e) {
  const i = Fd(t, e);
  if (fr = 1, br = 1, i.length) {
    const n = T(t.ownerDocument, "Bay", {
      name: "Q" + Dd++,
      desc: "Bay for controller " + t.getAttribute("name")
    });
    return i.map((a) => $d(
      T(t.ownerDocument, "ConductingEquipment", {
        name: zd(a),
        type: gr(a)
      }),
      a
    )).forEach((a) => n.appendChild(a)), n;
  }
  return null;
}
function Pd(t, e) {
  return (i, n, r) => {
    const a = [], o = r.selected.map(
      (c) => c.value
    ), l = T(t, "VoltageLevel", {
      name: "E1",
      desc: "guessed by OpenSCD",
      nomFreq: "50.0",
      numPhases: "3"
    }), s = T(t, "Voltage", {
      unit: "V",
      multiplier: "k"
    });
    return s.textContent = "110.00", l.appendChild(s), a.push({
      new: { parent: t.querySelector("SCL"), element: e }
    }), a.push({
      new: {
        parent: e,
        element: l
      }
    }), Array.from(t.querySelectorAll(":root > IED")).sort(Cl).map((c) => Vd(c, o)).forEach((c) => {
      c && a.push({ new: { parent: l, element: c } });
    }), a;
  };
}
function Md(t, e) {
  return [
    {
      title: d("guess.wizard.title"),
      primary: {
        icon: "play_arrow",
        label: d("guess.wizard.primary"),
        action: Pd(t, e)
      },
      content: [
        m`<p>${d("guess.wizard.description")}</p>`,
        m`<mwc-list multi id="ctlModelList"
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
function xr(t, e, i) {
  return [
    m`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${d("substation.wizard.nameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${d("substation.wizard.descHelper")}"
    ></wizard-textfield>`,
    i ? m`<mwc-formfield label="${d("guess.wizard.primary")}">
          <mwc-checkbox></mwc-checkbox>
        </mwc-formfield>` : m``
  ];
}
function Bd(t) {
  return (e, i) => {
    const n = x(e.find((l) => l.label === "name")), r = x(e.find((l) => l.label === "desc")), a = i.shadowRoot?.querySelector("mwc-checkbox")?.checked;
    t.ownerDocument.createElement("Substation");
    const o = T(t.ownerDocument, "Substation", {
      name: n,
      desc: r
    });
    return a ? [() => Md(t.ownerDocument, o)] : [{ new: { parent: t, element: o } }];
  };
}
function Hd(t) {
  const e = t.ownerDocument.querySelector("Substation") === null && t.tagName === "SCL";
  return [
    {
      title: d("substation.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: d("add"),
        action: Bd(t)
      },
      content: xr("", "", e)
    }
  ];
}
function qd(t) {
  return [
    {
      title: d("substation.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: d("save"),
        action: ar(
          t,
          "substation.action.updatesubstation"
        )
      },
      content: xr(
        t.getAttribute("name") ?? "",
        t.getAttribute("desc"),
        !1
      )
    }
  ];
}
function Gd(t, e, i, n) {
  return [
    m`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${d("terminal.wizard.nameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${n}
      readonly
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="connectivityNode"
      .maybeValue=${e}
      helper="${d("terminal.wizard.connectivityNodeHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      readonly
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="cNodeName"
      .maybeValue=${i}
      helper="${d("terminal.wizard.cNodeNameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function Ud(t) {
  const e = Array.from(
    t.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(xe).map((i) => i.getAttribute("name") ?? "").filter((i) => i !== t.getAttribute("name"));
  return [
    {
      title: d("terminal.wizard.title.edit"),
      element: t,
      content: Gd(
        t.getAttribute("name"),
        t.getAttribute("connectivityNode"),
        t.getAttribute("cNodeName"),
        e
      )
    }
  ];
}
const Pt = {
  nomFreq: "50",
  numPhases: "3",
  Voltage: "110",
  multiplier: "k"
};
function vr(t, e, i, n, r, a) {
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
      pattern="${_t.unsigned}"
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
      pattern="${_t.decimal}"
    ></wizard-textfield>`
  ];
}
function Wd(t) {
  return (e) => {
    const i = x(e.find((c) => c.label === "name")), n = x(e.find((c) => c.label === "desc")), r = x(e.find((c) => c.label === "nomFreq")), a = x(e.find((c) => c.label === "numPhases")), o = x(e.find((c) => c.label === "Voltage")), l = Li(e.find((c) => c.label === "Voltage")), s = T(t.ownerDocument, "VoltageLevel", {
      name: i,
      desc: n,
      nomFreq: r,
      numPhases: a
    });
    if (o !== null) {
      const c = T(t.ownerDocument, "Voltage", {
        unit: "V",
        multiplier: l
      });
      c.textContent = o, s.appendChild(c);
    }
    return [
      {
        new: {
          parent: t,
          element: s
        }
      }
    ];
  };
}
function jd(t) {
  return [
    {
      title: d("voltagelevel.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: d("add"),
        action: Wd(t)
      },
      content: vr(
        "",
        "",
        Pt.nomFreq,
        Pt.numPhases,
        Pt.Voltage,
        Pt.multiplier
      )
    }
  ];
}
function Kd(t, e, i, n) {
  if (t === null) {
    const a = T(n.ownerDocument, "Voltage", {
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
  const r = V(t, { multiplier: i });
  return r.textContent = e, {
    old: { element: t },
    new: { element: r }
  };
}
function Xd(t) {
  return (e) => {
    const i = e.find((b) => b.label === "name").value, n = x(e.find((b) => b.label === "desc")), r = x(e.find((b) => b.label === "nomFreq")), a = x(e.find((b) => b.label === "numPhases")), o = x(e.find((b) => b.label === "Voltage")), l = Li(e.find((b) => b.label === "Voltage"));
    let s, c;
    if (i === t.getAttribute("name") && n === t.getAttribute("desc") && r === t.getAttribute("nomFreq") && a === t.getAttribute("numPhases"))
      s = null;
    else {
      const b = V(t, {
        name: i,
        desc: n,
        nomFreq: r,
        numPhases: a
      });
      s = { old: { element: t }, new: { element: b } };
    }
    o === (t.querySelector("VoltageLevel > Voltage")?.textContent?.trim() ?? null) && l === (t.querySelector("VoltageLevel > Voltage")?.getAttribute("multiplier") ?? null) ? c = null : c = Kd(
      t.querySelector("VoltageLevel > Voltage"),
      o,
      l,
      s?.new.element ?? t
    );
    const h = {
      actions: [],
      title: d("voltagelevel.action.updateVoltagelevel", { name: i })
    };
    return s && h.actions.push(s), c && h.actions.push(c), h.actions.push(
      ...Di(t, t.getAttribute("name"), i)
    ), h.actions.length ? [h] : [];
  };
}
function Zd(t) {
  return [
    {
      title: d("voltagelevel.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: d("save"),
        action: Xd(t)
      },
      content: vr(
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
const yr = "PTR";
function Yd(t) {
  return (e) => {
    const i = x(e.find((o) => o.label === "name")), n = x(e.find((o) => o.label === "desc")), r = T(t.ownerDocument, "PowerTransformer", {
      name: i,
      desc: n,
      type: yr
    });
    return [{
      new: {
        parent: t,
        element: r
      }
    }];
  };
}
function wr(t, e, i, n) {
  return [
    m`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${d("powertransformer.wizard.nameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${n}
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${d("powertransformer.wizard.descHelper")}"
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="type"
      .maybeValue=${i}
      disabled
      helper="${d("powertransformer.wizard.typeHelper")}"
    ></wizard-textfield>`
  ];
}
function _r(t, e) {
  return Array.from(t.querySelectorAll("PowerTransformer")).filter(xe).map((i) => i.getAttribute("name") ?? "").filter((i) => e && i !== e);
}
function Qd(t) {
  const e = _r(t);
  return [
    {
      title: d("powertransformer.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: d("add"),
        action: Yd(t)
      },
      content: wr(
        "",
        null,
        yr,
        e
      )
    }
  ];
}
function Jd(t) {
  const e = _r(
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
        action: rr(t)
      },
      content: wr(
        t.getAttribute("name"),
        t.getAttribute("desc"),
        t.getAttribute("type"),
        e
      )
    }
  ];
}
function es(t) {
  return [
    m`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${d("subnetwork.wizard.nameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${d("subnetwork.wizard.descHelper")}"
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      nullable
      helper="${d("subnetwork.wizard.typeHelper")}"
      pattern="${_t.normalizedString}"
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="BitRate"
      .maybeValue=${t.BitRate}
      nullable
      unit="b/s"
      .multipliers=${[null, "M"]}
      .multiplier=${t.multiplier}
      helper="${d("subnetwork.wizard.bitrateHelper")}"
      required
      validationMessage="${d("textfield.nonempty")}"
      pattern="${_t.decimal}"
    ></wizard-textfield>`
  ];
}
function ts(t, e, i, n) {
  if (t === null) {
    const a = T(n.ownerDocument, "BitRate", {
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
  const r = V(t, { multiplier: i });
  return r.textContent = e, {
    old: { element: t },
    new: { element: r }
  };
}
function is(t) {
  return (e) => {
    const i = e.find((h) => h.label === "name").value, n = x(e.find((h) => h.label === "desc")), r = x(e.find((h) => h.label === "type")), a = x(e.find((h) => h.label === "BitRate")), o = Li(e.find((h) => h.label === "BitRate"));
    let l, s;
    if (i === t.getAttribute("name") && n === t.getAttribute("desc") && r === t.getAttribute("type"))
      l = null;
    else {
      const h = V(t, { name: i, desc: n, type: r });
      l = { old: { element: t }, new: { element: h } };
    }
    a === (t.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null) && o === (t.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null) ? s = null : s = ts(
      t.querySelector("SubNetwork > BitRate"),
      a,
      o,
      l?.new.element ?? t
    );
    const c = [];
    return l && c.push(l), s && c.push(s), c;
  };
}
function ns(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = t.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null, a = t.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null;
  return [
    {
      title: d("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: d("save"),
        action: is(t)
      },
      content: es({ name: e, desc: i, type: n, BitRate: r, multiplier: a })
    }
  ];
}
const rs = [
  "ldInst",
  "lnClass",
  "lnInst",
  "prefix",
  "doName",
  "daName"
];
function Ar(t) {
  return rs.map(
    (e) => t.getAttribute(e) ? `[${e}="${t.getAttribute(
      e
    )}"]` : ""
  ).join("");
}
const as = ["srcLDInst", "srcLNClass", "srcLNInst", "srcCBName"];
function os(t) {
  return as.map(
    (e) => t.getAttribute(e) ? `[${e}="${t.getAttribute(e)}"]` : ""
  ).join("");
}
function Sr(t) {
  if (!t.length) return [];
  const e = [], i = {};
  for (const n of t) {
    const r = n.old.element, a = n.old.parent, o = k(a);
    i[o] || (i[o] = a.cloneNode(!0));
    const l = i[o].querySelector(
      `ExtRef${r.getAttribute("iedName") ? `[iedName="${r.getAttribute("iedName")}"]` : ""}${Ar(r)}${r.getAttribute("serviceType") ? `[serviceType="${r.getAttribute("serviceType")}"]` : ""}${os(r)}`
    );
    l && i[o].removeChild(l);
  }
  return Object.entries(i).forEach(([n, r]) => {
    if (r.children.length == 0) {
      const a = t[0].old.parent.ownerDocument, o = Fe(a, "Inputs", n);
      o && o.parentElement && e.push({
        old: { parent: o.parentElement, element: o }
      });
    }
  }), e;
}
const ls = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function ds(t, e, i, n, r, a, o, l, s) {
  return [
    m`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${d("ied.wizard.nameHelper")}"
      required
      validationMessage="${d("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${s}
      pattern="${ls}"
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${d("ied.wizard.descHelper")}"
      pattern="${Ve.normalizedString}"
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="type"
      .maybeValue=${i || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="manufacturer"
      .maybeValue=${n || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="configVersion"
      .maybeValue=${r || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="originalSclVersion"
      .maybeValue=${a || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="engRight"
      .maybeValue=${o || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="owner"
      .maybeValue=${l || "-"}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function ss(t) {
  return [
    m` <section>
      <h1>${d("ied.wizard.title.references")}</h1>
      <mwc-list>
        ${t.map((e) => {
      const i = e.old.element;
      return m` <mwc-list-item noninteractive twoline>
            <span>${i.tagName}</span>
            <span slot="secondary"
              >${k(e.old.element)}</span
            >
          </mwc-list-item>`;
    })}
      </mwc-list>
    </section>`
  ];
}
function cs(t) {
  return (t.getAttribute("originalSclVersion") ?? "").concat(t.getAttribute("originalSclRevision") ?? "").concat(t.getAttribute("originalSclRelease") ?? "");
}
function us(t) {
  return Array.from(t.parentNode.querySelectorAll("IED")).filter(xe).map((e) => e.getAttribute("name") ?? "").filter((e) => e !== t.getAttribute("name"));
}
function ms(t) {
  return (e, i) => {
    i.dispatchEvent(Te());
    const n = nr(t), r = n.filter(
      (s) => s.old.element.tagName === "ExtRef"
    ), a = Sr(r), o = t.getAttribute("name") ?? "Unknown", l = {
      actions: [],
      title: d("ied.action.deleteied", { name: o })
    };
    return l.actions.push({
      old: { parent: t.parentElement, element: t }
    }), l.actions.push(...n), l.actions.push(...a), [l];
  };
}
function ps(t) {
  const e = nr(t);
  return e.length > 0 ? [
    {
      title: d("ied.wizard.title.delete"),
      content: ss(e),
      primary: {
        icon: "delete",
        label: d("remove"),
        action: ms(t)
      }
    }
  ] : null;
}
function hs(t) {
  function e(i) {
    return (n) => {
      const r = ps(i);
      r && n.dispatchEvent(at(() => r)), n.dispatchEvent(
        At({ old: { parent: i.parentElement, element: i } })
      ), n.dispatchEvent(Te());
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
        action: ar(
          t,
          "ied.action.updateied"
        )
      },
      content: ds(
        t.getAttribute("name"),
        t.getAttribute("desc"),
        t.getAttribute("type"),
        t.getAttribute("manufacturer"),
        t.getAttribute("configVersion"),
        cs(t),
        t.getAttribute("engRight"),
        t.getAttribute("owner"),
        us(t)
      )
    }
  ];
}
const fs = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function bs(t, e, i, n) {
  return [
    e ? m`<wizard-textfield
          label="ldName"
          .maybeValue=${t}
          helper="${d("ldevice.wizard.noNameSupportHelper")}"
          helperPersistent
          readOnly
          disabled
        ></wizard-textfield>` : m`<wizard-textfield
          label="ldName"
          .maybeValue=${t}
          nullable
          helper="${d("ldevice.wizard.nameHelper")}"
          validationMessage="${d("textfield.required")}"
          dialogInitialFocus
          pattern="${fs}"
        ></wizard-textfield>`,
    m`<wizard-textfield
      label="desc"
      .maybeValue=${i}
      nullable
      helper="${d("ldevice.wizard.descHelper")}"
      pattern="${Ve.normalizedString}"
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="ldInst"
      .maybeValue=${n}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function gs(t) {
  return !!t.closest("IED")?.querySelector("Services > ConfLdName");
}
function xs(t) {
  return (e) => {
    const i = {}, n = ["ldName", "desc"];
    if (n.forEach((r) => {
      i[r] = x(e.find((a) => a.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = V(t, i);
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
function vs(t) {
  return [
    {
      title: d("ldevice.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: d("save"),
        action: xs(t)
      },
      content: bs(
        t.getAttribute("ldName"),
        !gs(t),
        t.getAttribute("desc"),
        t.getAttribute("inst")
      )
    }
  ];
}
function ys(t) {
  return Object.entries(t).map(
    ([e, i]) => m`<wizard-checkbox
        label="${e}"
        .maybeValue=${i}
        nullable
        helper="${d(`scl.${e}`)}"
      ></wizard-checkbox>`
  );
}
function ws(t) {
  return (e) => {
    const i = x(e.find((c) => c.label === "dchg")), n = x(e.find((c) => c.label === "qchg")), r = x(e.find((c) => c.label === "dupd")), a = x(e.find((c) => c.label === "period")), o = x(e.find((c) => c.label === "gi"));
    if (i === t.getAttribute("dchg") && n === t.getAttribute("qchg") && r === t.getAttribute("dupd") && a === t.getAttribute("period") && o === t.getAttribute("gi"))
      return [];
    const l = V(t, {
      dchg: i,
      qchg: n,
      dupd: r,
      period: a,
      gi: o
    });
    return [{ old: { element: t }, new: { element: l } }];
  };
}
function _s(t) {
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
        action: ws(t)
      },
      content: ys({ dchg: e, qchg: i, dupd: n, period: r, gi: a })
    }
  ];
}
class de extends Ce {
  constructor() {
    super(...arguments), this.raised = !1, this.unelevated = !1, this.outlined = !1, this.dense = !1, this.disabled = !1, this.trailingIcon = !1, this.fullwidth = !1, this.icon = "", this.label = "", this.expandContent = !1, this.shouldRenderRipple = !1, this.rippleHandlers = new It(() => (this.shouldRenderRipple = !0, this.ripple));
  }
  /** @soyTemplate */
  renderOverlay() {
    return m``;
  }
  /** @soyTemplate */
  renderRipple() {
    const e = this.raised || this.unelevated;
    return this.shouldRenderRipple ? m`<mwc-ripple class="ripple" .primary="${!e}" .disabled="${this.disabled}"></mwc-ripple>` : "";
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
    return ee({
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
    return m`
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
        <span class="slot-container ${ee({
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
    return m`
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
de.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
u([
  f({ type: Boolean, reflect: !0 })
], de.prototype, "raised", void 0);
u([
  f({ type: Boolean, reflect: !0 })
], de.prototype, "unelevated", void 0);
u([
  f({ type: Boolean, reflect: !0 })
], de.prototype, "outlined", void 0);
u([
  f({ type: Boolean })
], de.prototype, "dense", void 0);
u([
  f({ type: Boolean, reflect: !0 })
], de.prototype, "disabled", void 0);
u([
  f({ type: Boolean, attribute: "trailingicon" })
], de.prototype, "trailingIcon", void 0);
u([
  f({ type: Boolean, reflect: !0 })
], de.prototype, "fullwidth", void 0);
u([
  f({ type: String })
], de.prototype, "icon", void 0);
u([
  f({ type: String })
], de.prototype, "label", void 0);
u([
  f({ type: Boolean })
], de.prototype, "expandContent", void 0);
u([
  C("#button")
], de.prototype, "buttonElement", void 0);
u([
  St("mwc-ripple")
], de.prototype, "ripple", void 0);
u([
  E()
], de.prototype, "shouldRenderRipple", void 0);
u([
  je({ passive: !0 })
], de.prototype, "handleRippleActivate", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const As = X`.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;font-size:1.125rem;height:1.125rem;vertical-align:top;width:1.125rem}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{border-style:solid}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 8px 0 8px}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px;height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined .mdc-button__touch{left:-1px;width:calc(100% + 2 * 1px)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;font-size:1.125rem;height:1.125rem;vertical-align:top;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{display:none}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;
let Si = class extends de {
};
Si.styles = [As];
Si = u([
  W("mwc-button")
], Si);
const Ss = [
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
], Es = [
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
], Is = ["Spec", "Conf", "RO", "Set"], Cs = ["SmpPerPeriod", "SmpPerSec", "SecPerSmp"], Er = [
  "None",
  "Signature",
  "SignatureAndEncryption"
];
function ks(t, e, i) {
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
  kn(A`${a}`, o), o.requestUpdate();
}
function Ns(t, e, i) {
  const n = t.target.selected.value, r = t.target.parentElement.querySelector(
    'wizard-select[label="type"]'
  );
  r.disabled = !(n === "Enum" || n === "Struct");
  const a = [];
  Array.from(r.children).forEach((s) => {
    const c = s;
    c.disabled = !s.classList.contains(n), c.noninteractive = !s.classList.contains(n), c.style.display = s.classList.contains(n) ? "" : "none", c.disabled || a.push(c);
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
function Ls(t, e, i, n, r, a, o, l, s, c) {
  return [
    A`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${d("scl.name")}"
      required
      pattern="${Ve.abstractDataAttributeName}"
      maxLength="${$i.abstracDaName}"
      dialogInitialFocus
    >
      ></wizard-textfield
    >`,
    A`<wizard-textfield
      label="desc"
      helper="${d("scl.desc")}"
      .maybeValue=${e}
      nullable
      pattern="${Ve.normalizedString}"
    ></wizard-textfield>`,
    A`<wizard-select
      fixedMenuPosition
      label="bType"
      .value=${i}
      helper="${d("scl.bType")}"
      required
      @selected=${(h) => Ns(h)}
      >${Es.map(
      (h) => A`<mwc-list-item value="${h}"
            >${h}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    A`<wizard-select
      label="type"
      .maybeValue=${r}
      helper="${d("scl.type")}"
      fixedMenuPosition
      @selected=${(h) => ks(h, c, s)}
      >${n.map(
      (h) => A`<mwc-list-item
            class="${h.tagName === "EnumType" ? "Enum" : "Struct"}"
            value=${h.id}
            >${h.id}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    A`<wizard-textfield
      label="sAddr"
      .maybeValue=${a}
      helper="${d("scl.sAddr")}"
      nullable
      pattern="${Ve.normalizedString}"
    ></wizard-textfield>`,
    A`<wizard-select
      label="valKind"
      .maybeValue=${o}
      helper="${d("scl.valKind")}"
      nullable
      required
      fixedMenuPosition
      >${Is.map(
      (h) => A`<mwc-list-item value="${h}"
            >${h}</mwc-list-item
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
      .maybeValue=${s}
      helper="${d("scl.Val")}"
      nullable
      >${Array.from(
      c.querySelectorAll(`EnumType > EnumVal[id="${r}"]`)
    ).map(
      (h) => A`<mwc-list-item value="${h.textContent?.trim() ?? ""}"
            >${h.textContent?.trim()}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    A`<wizard-textfield
      label="Val"
      .maybeValue=${s}
      helper="${d("scl.Val")}"
      nullable
    ></wizard-textfield>`
  ];
}
function Ts(t, e, i, n) {
  return [
    A`<wizard-select
      label="fc"
      .maybeValue=${t}
      helper="${d("scl.fc")}"
      required
      fixedMenuPosition
      >${Ss.map(
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
function Ds(t) {
  return (e) => {
    const i = x(e.find((S) => S.label === "name")), n = x(e.find((S) => S.label === "desc")), r = x(e.find((S) => S.label === "bType")), a = r === "Enum" || r === "Struct" ? x(e.find((S) => S.label === "type")) : null, o = x(e.find((S) => S.label === "sAddr")), l = x(e.find((S) => S.label === "valKind")), s = x(e.find((S) => S.label === "valImport")), c = e.find(
      (S) => S.label === "Val" && S.style.display !== "none"
    ), h = c ? x(c) : null, b = x(e.find((S) => S.label === "fc")) ?? "", g = x(e.find((S) => S.label === "dchg")), v = x(e.find((S) => S.label === "qchg")), y = x(e.find((S) => S.label === "dupd")), I = [], D = T(t.ownerDocument, "DA", {
      name: i,
      desc: n,
      bType: r,
      type: a,
      sAddr: o,
      valKind: l,
      valImport: s,
      fc: b,
      dchg: g,
      qchg: v,
      dupd: y
    });
    if (h !== null) {
      const S = T(t.ownerDocument, "Val", {});
      S.textContent = h, D.appendChild(S);
    }
    return I.push({
      new: {
        parent: t,
        element: D
      }
    }), I;
  };
}
function $s(t) {
  const e = t.ownerDocument, i = "", n = null, r = "", a = null, o = null, l = null, s = null, c = null, h = "", b = null, g = null, v = null, y = Array.from(e.querySelectorAll("DAType, EnumType")).filter(xe).filter((D) => D.getAttribute("id")), I = t.closest("DataTypeTemplates");
  return [
    {
      title: d("da.wizard.title.edit"),
      primary: {
        icon: "",
        label: d("save"),
        action: Ds(t)
      },
      content: [
        ...Ls(
          i,
          n,
          r,
          y,
          a,
          o,
          s,
          c,
          l,
          I
        ),
        ...Ts(h, b, g, v)
      ]
    }
  ];
}
const ge = (t, e) => t === null ? "" : e;
function Ir() {
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
      render: (s, c, h = null) => (h ? [...Array(h)] : [h]).map((b, g) => A`<wizard-select
            id="Val${ge(b, `${g + 1}`)}"
            label="Val${ge(b, ` for sGroup ${g + 1}`)}"
            .maybeValue=${o(c)}
            fixedMenuPosition
          >
            <mwc-list-item value="true">true</mwc-list-item>
            <mwc-list-item value="false">false</mwc-list-item>
          </wizard-select>`),
      value: (s, c) => x(
        s.find((h) => h.id === `Val${c || ""}`)
      )
    };
  }
  function e() {
    return {
      render: (s, c, h = null) => (h ? [...Array(h)] : [h]).map((b, g) => A`<wizard-select
            id="Val${ge(b, `${g + 1}`)}"
            label="Val${ge(b, ` for sGroup ${g + 1}`)}"
            .maybeValue=${o(c)}
            fixedMenuPosition
          >
            ${l(s).map((v) => A`<mwc-list-item value="${v}"
                >${v}</mwc-list-item
              >`)}
          </wizard-select>`),
      value: (s, c) => x(
        s.find((h) => h.id === `Val${c || ""}`)
      )
    };
  }
  function i(s, c, h) {
    return {
      render: (b, g, v = null) => (v ? [...Array(v)] : [v]).map((y, I) => A`<wizard-textfield
            id="Val${ge(y, `${I + 1}`)}"
            label="Val${ge(y, ` for sGroup ${I + 1}`)}"
            .maybeValue=${o(g)}
            helper="${d("dai.wizard.valueHelper", { type: s })}"
            type="number"
            min=${c}
            max=${h}
            step="0.1"
          >
          </wizard-textfield>`),
      value: (b, g) => x(
        b.find((v) => v.id === `Val${g || ""}`)
      )
    };
  }
  function n(s, c, h) {
    return {
      render: (b, g, v = null) => (v ? [...Array(v)] : [v]).map((y, I) => A`<wizard-textfield
            id="Val${ge(y, `${I + 1}`)}"
            label="Val${ge(y, ` for sGroup ${I + 1}`)}"
            .maybeValue=${o(g)}
            helper="${d("dai.wizard.valueHelper", { type: s })}"
            type="number"
            min=${c}
            max=${h}
          >
          </wizard-textfield>`),
      value: (b, g) => x(
        b.find((v) => v.id === `Val${g || ""}`)
      )
    };
  }
  function r() {
    return {
      render: (s, c, h = null) => {
        const b = o(c);
        return (h ? [...Array(h)] : [h]).reduce(
          (g, v, y) => g.concat([
            A`<wizard-textfield
                id="ValDate${ge(v, `${y + 1}`)}"
                label="Val (Date)${ge(v, ` for sGroup ${y + 1}`)}"
                .maybeValue=${zs(b)}
                type="date"
              >
              </wizard-textfield>`,
            A`<wizard-textfield
                id="ValTime${ge(v, `${y + 1}`)}"
                label="Val (Time)${ge(v, ` for sGroup ${y + 1}`)}"
                .maybeValue=${Rs(b)}
                type="time"
                step="1"
              >
              </wizard-textfield>`
          ]),
          []
        );
      },
      value: (s, c) => {
        const h = [`ValDate${c || ""}`, `ValTime${c || ""}`].map(
          (v) => x(s.find((y) => y.id === v))
        ), b = h[0] ? h[0] : "0000-00-00", g = h[1] ? h[1] : "00:00:00";
        return b + "T" + g + ".000";
      }
    };
  }
  function a(s, c) {
    return {
      render: (h, b, g = null) => (g ? [...Array(g)] : [g]).map((v, y) => A`<wizard-textfield
            id="Val${ge(v, ` ${y + 1}`)}"
            label="Val${ge(v, ` for sGroup ${y + 1}`)}"
            .maybeValue=${o(b)}
            helper="${d("dai.wizard.valueHelper", { type: s })}"
            maxLength=${c}
            type="text"
          >
          </wizard-textfield>`),
      value: (h, b) => x(
        h.find((g) => g.id === `Val${b || ""}`)
      )
    };
  }
  function o(s) {
    return (s?.querySelector("Val") ? s?.querySelector("Val") : s)?.textContent?.trim() ?? "";
  }
  function l(s) {
    const c = s.getAttribute("type"), h = [];
    return Array.from(
      s.ownerDocument.querySelectorAll(
        `EnumType[id="${c}"] > EnumVal`
      )
    ).filter(
      (b) => b.textContent && b.textContent !== ""
    ).sort(
      (b, g) => parseInt(b.getAttribute("ord") ?? "0") - parseInt(g.getAttribute("ord") ?? "0")
    ).forEach((b) => {
      h.push(b.textContent ?? "");
    }), h;
  }
}
function zs(t) {
  let i = t.split("T")[0];
  return /^\d{4}-\d{2}-\d{2}$/.test(i) || (i = null), i === "0000-00-00" && (i = null), i;
}
function Rs(t) {
  const e = t.split("T");
  let i = null;
  return e.length == 2 && (i = e[1], i.length > 8 && (i = i.substring(0, 8)), /^\d{2}:\d{2}:\d{2}$/.test(i) || (i = null), i === "00:00:00" && (i = null)), i;
}
const yt = "http://www.iec.ch/61850/2003/SCL";
function Os(t, e) {
  return (i) => {
    const n = t.getAttribute("bType"), r = Ir()[n].value(i), a = e.parentElement?.getAttribute("name") ?? "", o = {
      actions: [],
      title: d("dai.action.updatedai", { daiName: a })
    }, l = e.cloneNode(!1);
    return l.textContent = r, o.actions.push({
      old: { element: e },
      new: { element: l }
    }), [o];
  };
}
function Fs(t, e, i = null) {
  const n = t.getAttribute("bType"), r = t.querySelector("Val")?.textContent?.trim() ?? "";
  return [
    m` ${Ir()[n].render(
      t,
      e,
      i
    )}
    ${r ? m`<wizard-textfield
          id="daVal"
          label="DA Template Value"
          .maybeValue=${r}
          readonly
          disabled
        >
        </wizard-textfield>` : Le}`
  ];
}
function Vs(t, e) {
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
        action: Os(t, e)
      },
      content: Fs(t, e)
    }
  ];
}
function Ps(t) {
  return (e) => {
    e.dispatchEvent(at(() => ur(t)));
  };
}
function Ms(t) {
  return (e, i) => {
    const n = e.find((c) => c.label === "name").value, r = x(e.find((c) => c.label === "desc")), a = t.getAttribute("name"), o = [];
    if (!(n === a && r === t.getAttribute("desc"))) {
      const c = V(t, { name: n, desc: r });
      o.push({
        old: { element: t },
        new: { element: c }
      });
    }
    const l = n !== a ? Array.from(
      t.parentElement?.querySelectorAll(
        `ReportControlBock[datSet=${a}], GSEControl[datSet=${a}],SampledValueControl[datSet=${a}] `
      ) ?? []
    ).map((c) => {
      const h = V(c, { datSet: n });
      return { old: { element: c }, new: { element: h } };
    }) : [];
    return [
      ...Array.from(
        i.shadowRoot.querySelectorAll(
          "filtered-list > mwc-check-list-item:not([selected])"
        )
      ).map((c) => Fe(t, "FCDA", c.value)).filter((c) => c).map((c) => ({
        old: {
          parent: t,
          element: c,
          reference: c.nextSibling
        }
      })),
      ...o,
      ...l
    ];
  };
}
function Cr(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc");
  return [
    {
      title: d("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        label: d("save"),
        icon: "save",
        action: Ms(t)
      },
      menuActions: [
        {
          icon: "add",
          label: d("dataset.fcda.add"),
          action: Ps(t)
        }
      ],
      content: [
        m`<wizard-textfield
          label="name"
          .maybeValue=${e}
          helper="${d("scl.name")}"
          required
          disabled="true"
        >
        </wizard-textfield>`,
        m`<wizard-textfield
          label="desc"
          .maybeValue=${i}
          helper="${d("scl.desc")}"
          nullable
          required
        >
        </wizard-textfield>`,
        m`<filtered-list multi
          >${Array.from(t.querySelectorAll("FCDA")).map(
          (n) => m`<mwc-check-list-item selected value="${k(n)}"
                >${k(n).split(">").pop()}</mwc-check-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
const M = {
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
}, Bs = {
  IP: M.IP,
  "IP-SUBNET": M.IP,
  "IP-GATEWAY": M.IP,
  "OSI-TSEL": M.OSI,
  "OSI-SSEL": M.OSI,
  "OSI-PSEL": M.OSI,
  "OSI-AP-Title": M.OSIAPi,
  "OSI-AP-Invoke": M.OSId,
  "OSI-AE-Qualifier": M.OSId,
  "OSI-AE-Invoke": M.OSId,
  "MAC-Address": M.MAC,
  APPID: M.APPID,
  "VLAN-ID": M.VLANid,
  "VLAN-PRIORITY": M.VLANp,
  "OSI-NSAP": M.OSI,
  "SNTP-Port": M.port,
  "MMS-Port": M.port,
  DNSName: "[^ ]*",
  "UDP-Port": M.port,
  "TCP-Port": M.port,
  "C37-118-IP-Port": "102[5-9]|10[3-9][0-9]|1[1-9][0-9][0-9]|[2-9][0-9]{3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]",
  IPv6: M.IPv6,
  "IPv6-SUBNET": M.IPv6sub,
  "IPv6-GATEWAY": M.IPv6,
  IPv6FlowLabel: "[0-9a-fA-F]{1,5}",
  IPv6ClassOfTraffic: "[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]",
  "IPv6-IGMPv3Src": M.IPv6,
  "IP-IGMPv3Sr": M.IP,
  "IP-ClassOfTraffic": M.OSI
}, Hs = {
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
function kr(t) {
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
          ?nullable=${Hs[e]}
          .maybeValue=${i}
          pattern="${O(Bs[e])}"
          required
        ></wizard-textfield>`
    )}`
  ];
}
function qs(t, e) {
  return t.querySelectorAll("P").length !== e.querySelectorAll("P").length ? !1 : Array.from(t.querySelectorAll("P")).filter(
    (i) => !e.querySelector(`Address > P[type="${i.getAttribute("type")}"]`)?.isEqualNode(i)
  ).length === 0;
}
function Gs(t, e, i) {
  const n = T(e.ownerDocument, "Address", {});
  return Object.entries(t).filter(([r, a]) => a !== null).forEach(([r, a]) => {
    const o = r, l = T(e.ownerDocument, "P", { type: o });
    i && l.setAttributeNS(
      "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:type",
      "tP_" + r
    ), l.textContent = a, n.appendChild(l);
  }), n;
}
function Nr(t, e, i) {
  const n = [], r = Gs(e, t, i), a = t.querySelector("Address");
  return a !== null && !qs(a, r) ? (n.push({
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
function An(t, e, i, n) {
  if (e === null) {
    const a = T(n.ownerDocument, t, {
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
function Us(t) {
  return (e, i) => {
    const n = {
      actions: [],
      title: d("gse.action.addaddress", {
        identity: k(t)
      })
    }, r = i.shadowRoot?.querySelector("#instType")?.checked ?? !1, a = {};
    a["MAC-Address"] = x(
      e.find((c) => c.label === "MAC-Address")
    ), a.APPID = x(e.find((c) => c.label === "APPID")), a["VLAN-ID"] = x(
      e.find((c) => c.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = x(
      e.find((c) => c.label === "VLAN-PRIORITY")
    ), Nr(t, a, r).forEach((c) => {
      n.actions.push(c);
    });
    const l = x(e.find((c) => c.label === "MinTime")), s = x(e.find((c) => c.label === "MaxTime"));
    return l !== (t.querySelector("MinTime")?.textContent?.trim() ?? null) && n.actions.push(
      An(
        "MinTime",
        t.querySelector("MinTime"),
        l,
        t
      )
    ), s !== (t.querySelector("MaxTime")?.textContent?.trim() ?? null) && n.actions.push(
      An(
        "MaxTime",
        t.querySelector("MaxTime"),
        s,
        t
      )
    ), [n];
  };
}
function Ws(t) {
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
        action: Us(t)
      },
      content: [
        ...kr({ hasInstType: n, attributes: r }),
        m`<wizard-textfield
          label="MinTime"
          .maybeValue=${e}
          nullable
          suffix="ms"
          type="number"
        ></wizard-textfield>`,
        m`<wizard-textfield
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
function Lr(t) {
  const e = t.getAttribute("name"), i = t.closest("IED")?.getAttribute("name"), n = t.closest("AccessPoint")?.getAttribute("name"), r = t.closest("LDevice")?.getAttribute("inst");
  return t.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${n}"] > GSE[ldInst="${r}"][cbName="${e}"]`
  );
}
function js(t) {
  return [
    m`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      pattern="${Ve.asciName}"
      maxLength="${$i.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    m`<wizard-select
      label="type"
      .maybeValue=${t.type}
      helper="${d("scl.type")}"
      nullable
      required
      >${["GOOSE", "GSSE"].map(
      (e) => m`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`,
    m`<wizard-textfield
      label="appID"
      .maybeValue=${t.appID}
      helper="${d("scl.id")}"
      required
      validationMessage="${d("textfield.nonempty")}"
    ></wizard-textfield>`,
    m`<wizard-checkbox
      label="fixedOffs"
      .maybeValue=${t.fixedOffs}
      nullable
      helper="${d("scl.fixedOffs")}"
    ></wizard-checkbox>`,
    m`<wizard-select
      label="securityEnabled"
      .maybeValue=${t.securityEnabled}
      nullable
      required
      helper="${d("scl.securityEnable")}"
      >${Er.map(
      (e) => m`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function Ks(t) {
  if (!t.parentElement) return null;
  const e = t.parentElement.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), i = Lr(t), n = Array.from(
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
function Xs(t) {
  return (e) => {
    const i = Ks(t);
    i && e.dispatchEvent(At(i)), e.dispatchEvent(Te());
  };
}
function Zs(t) {
  return (e) => {
    e.dispatchEvent(at(() => Cr(t)));
  };
}
function Ys(t) {
  return (e) => {
    e.dispatchEvent(at(() => Ws(t)));
  };
}
function Qs(t) {
  return (e) => {
    const i = e.find((c) => c.label === "name").value, n = x(e.find((c) => c.label === "desc")), r = x(e.find((c) => c.label === "type")), a = x(e.find((c) => c.label === "appID")), o = x(e.find((c) => c.label === "fixedOffs")), l = x(
      e.find((c) => c.label === "securityEnabled")
    );
    if (i === t.getAttribute("name") && n === t.getAttribute("desc") && r === t.getAttribute("type") && a === t.getAttribute("appID") && o === t.getAttribute("fixedOffs") && l === t.getAttribute("securityEnabled"))
      return [];
    const s = V(t, {
      name: i,
      desc: n,
      type: r,
      appID: a,
      fixedOffs: o,
      securityEnabled: l
    });
    return [{ old: { element: t }, new: { element: s } }];
  };
}
function Js(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = t.getAttribute("appID"), a = t.getAttribute("fixedOffs"), o = t.getAttribute("securityEnabled"), l = Lr(t), s = t.parentElement?.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), c = [];
  return c.push({
    icon: "delete",
    label: d("remove"),
    action: Xs(t)
  }), s && c.push({
    icon: "edit",
    label: d("scl.DataSet"),
    action: Zs(s)
  }), l && c.push({
    icon: "edit",
    label: d("scl.Communication"),
    action: Ys(l)
  }), [
    {
      title: d("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: d("save"),
        action: Qs(t)
      },
      menuActions: c,
      content: [
        ...js({
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
function Ze(t) {
  return [
    m`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      .reservedValues=${t.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      helper="${d("scl.type")}"
      nullable
    ></wizard-textfield>`
  ];
}
function ec(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = x(e.find((a) => a.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = V(t, i);
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
function tc(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = ne(
    t.parentElement,
    "Function"
  ).filter((a) => a !== t).map((a) => a.getAttribute("name"));
  return [
    {
      title: d("wizard.title.edit", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: ec(t)
      },
      content: [
        ...Ze({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function ic(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = x(e.find((o) => o.label === a));
    });
    const r = T(
      t.ownerDocument,
      "Function",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function nc(t) {
  const e = "", r = Array.from(t.querySelectorAll("Function")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: d("wizard.title.add", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: ic(t)
      },
      content: [
        ...Ze({
          name: e,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function rc(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = x(e.find((a) => a.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = V(t, i);
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
function ac(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = ne(
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
        action: rc(t)
      },
      content: [
        ...Ze({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function oc(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = x(e.find((o) => o.label === a));
    });
    const r = T(
      t.ownerDocument,
      "EqSubFunction",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function lc(t) {
  const e = "", r = Array.from(
    t.querySelectorAll("EqSubFunction")
  ).map((a) => a.getAttribute("name"));
  return [
    {
      title: d("wizard.title.add", { tagName: "EqSubFunction" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: oc(t)
      },
      content: [
        ...Ze({
          name: e,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function dc(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = x(e.find((a) => a.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = V(t, i);
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
function sc(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = ne(
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
        action: dc(t)
      },
      content: [
        ...Ze({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function cc(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = x(e.find((o) => o.label === a));
    });
    const r = T(
      t.ownerDocument,
      "EqFunction",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function uc(t) {
  const e = "", r = Array.from(t.querySelectorAll("EqFunction")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: d("wizard.title.add", { tagName: "EqFunction" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: cc(t)
      },
      content: [
        ...Ze({
          name: e,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function mc(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = x(e.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = V(t, i);
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
function pc(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = ne(
    t.parentElement,
    "SubFunction"
  ).filter((a) => a !== t).map((a) => a.getAttribute("name"));
  return [
    {
      title: d("wizard.title.edit", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: mc(t)
      },
      content: [
        ...Ze({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function hc(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = x(e.find((o) => o.label === a));
    });
    const r = T(
      t.ownerDocument,
      "SubFunction",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function fc(t) {
  const e = "", r = Array.from(t.querySelectorAll("SubFunction")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: d("wizard.title.add", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: hc(t)
      },
      content: [
        ...Ze({
          name: e,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function bc(t) {
  return (e, i) => {
    const n = {
      actions: [],
      title: d("smv.action.addaddress", {
        identity: k(t)
      })
    }, r = i.shadowRoot?.querySelector("#instType")?.checked, a = {};
    a["MAC-Address"] = x(
      e.find((l) => l.label === "MAC-Address")
    ), a.APPID = x(e.find((l) => l.label === "APPID")), a["VLAN-ID"] = x(
      e.find((l) => l.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = x(
      e.find((l) => l.label === "VLAN-PRIORITY")
    );
    const o = Nr(t, a, r);
    return o.length ? (o.forEach((l) => {
      n.actions.push(l);
    }), [n]) : [];
  };
}
function gc(t) {
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
        action: bc(t)
      },
      content: [...kr({ hasInstType: e, attributes: i })]
    }
  ];
}
function xc(t) {
  return Object.entries(t).map(
    ([e, i]) => m`<wizard-checkbox
        label="${e}"
        .maybeValue=${i}
        nullable
        helper="${d(`scl.${e}`)}"
      ></wizard-checkbox>`
  );
}
function vc(t) {
  return (e) => {
    const i = {}, n = [
      "refreshTime",
      "sampleRate",
      "dataSet",
      "security",
      "synchSourceId"
    ];
    if (n.forEach((a) => {
      i[a] = x(e.find((o) => o.label === a));
    }), !n.some((a) => i[a] !== t.getAttribute(a)))
      return [];
    const r = V(t, i);
    return [{ old: { element: t }, new: { element: r } }];
  };
}
function yc(t) {
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
        action: vc(t)
      },
      content: [
        ...xc({
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
function Tr(t) {
  const e = t.getAttribute("name"), i = t.closest("IED")?.getAttribute("name"), n = t.closest("AccessPoint")?.getAttribute("name"), r = t.closest("LDevice")?.getAttribute("inst");
  return t.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${n}"] > SMV[ldInst="${r}"][cbName="${e}"]`
  ) ?? null;
}
function wc(t) {
  if (!t.parentElement) return null;
  const e = t.parentElement.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), i = Tr(t), n = Array.from(
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
function _c(t) {
  return [
    m`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      pattern="${Ve.asciName}"
      maxLength="${$i.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      pattern="${Ve.normalizedString}"
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    t.multicast === "true" ? m`` : m`<wizard-checkbox
          label="multicast"
          .maybeValue=${t.multicast}
          helper="${d("scl.multicast")}"
          disabled
        ></wizard-checkbox>`,
    m`<wizard-textfield
      label="smvID"
      .maybeValue=${t.smvID}
      helper="${d("scl.id")}"
      required
      validationMessage="${d("textfield.nonempty")}"
    ></wizard-textfield>`,
    m`<wizard-select
      label="smpMod"
      .maybeValue=${t.smpMod}
      nullable
      required
      helper="${d("scl.smpMod")}"
      >${Cs.map(
      (e) => m`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`,
    m`<wizard-textfield
      label="smpRate"
      .maybeValue=${t.smpRate}
      helper="${d("scl.smpRate")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="nofASDU"
      .maybeValue=${t.nofASDU}
      helper="${d("scl.nofASDU")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    m`<wizard-select
      label="securityEnabled"
      .maybeValue=${t.securityEnabled}
      nullable
      required
      helper="${d("scl.securityEnable")}"
      >${Er.map(
      (e) => m`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function Ac(t) {
  return (e) => {
    const i = wc(t);
    i && e.dispatchEvent(At(i)), e.dispatchEvent(Te());
  };
}
function Sc(t) {
  return (e) => {
    e.dispatchEvent(at(() => Cr(t)));
  };
}
function Ec(t) {
  return (e) => {
    e.dispatchEvent(at(() => yc(t)));
  };
}
function Ic(t) {
  return (e) => {
    e.dispatchEvent(at(() => gc(t)));
  };
}
function Cc(t) {
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
      if (o === "multicast" && !e.find((s) => s.label === o)) {
        i.multicast = "true";
        return;
      }
      i[o] = x(e.find((s) => s.label === o));
    });
    let r = null;
    if (n.some((o) => i[o] !== t.getAttribute(o))) {
      const o = V(t, i);
      r = {
        old: { element: t },
        new: { element: o }
      };
    }
    const a = [];
    return r && a.push(r), a;
  };
}
function kc(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("multicast"), r = t.getAttribute("smvID"), a = t.getAttribute("smpMod"), o = t.getAttribute("smpRate"), l = t.getAttribute("nofASDU"), s = t.getAttribute("securityEnabled"), c = Tr(t), h = t.querySelector("SmvOpts"), b = t.parentElement?.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), g = [];
  return g.push({
    icon: "delete",
    label: d("remove"),
    action: Ac(t)
  }), b && g.push({
    icon: "edit",
    label: d("scl.DataSet"),
    action: Sc(b)
  }), h && g.push({
    icon: "edit",
    label: d("scl.SmvOpts"),
    action: Ec(h)
  }), c && g.push({
    icon: "edit",
    label: d("scl.Communication"),
    action: Ic(c)
  }), [
    {
      title: d("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: d("save"),
        action: Cc(t)
      },
      menuActions: g,
      content: [
        ..._c({
          name: e,
          desc: i,
          multicast: n,
          smvID: r,
          smpMod: a,
          smpRate: o,
          nofASDU: l,
          securityEnabled: s
        })
      ]
    }
  ];
}
function Dr(t) {
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
function Nc(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "phase", "virtual"];
    if (n.forEach((r) => {
      i[r] = x(e.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = V(t, i);
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
function Lc(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("phase"), r = t.getAttribute("virtual"), a = ne(
    t.parentElement,
    "SubEquipment"
  ).filter((o) => o !== t).map((o) => o.getAttribute("name"));
  return [
    {
      title: d("wizard.title.edit", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Nc(t)
      },
      content: [
        ...Dr({
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
function Tc(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "phase", "virtual"].forEach((a) => {
      i[a] = x(e.find((o) => o.label === a));
    });
    const r = T(
      t.ownerDocument,
      "SubEquipment",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function Dc(t) {
  const e = "", a = Array.from(t.querySelectorAll("SubEquipment")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: d("wizard.title.add", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Tc(t)
      },
      content: [
        ...Dr({
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
function $c(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = t.getAttribute("virtual"), a = ne(
    t.parentElement,
    "GeneralEquipment"
  ).filter((o) => o !== t).map((o) => o.getAttribute("name"));
  return [
    {
      title: d("wizard.title.edit", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: zc(t)
      },
      content: [
        ...$r({
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
function zc(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = x(e.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = V(t, i);
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
function $r(t) {
  return [
    m`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      .reservedValues=${t.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      helper="${d("scl.type")}"
      minLength="${3}"
      pattern="AXN|BAT|MOT|FAN|FIL|PMP|TNK|VLV|E[A-Z]*"
      required
    ></wizard-textfield>`,
    m`<wizard-checkbox
      label="virtual"
      .maybeValue=${t.virtual}
      helper="${d("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function Rc(t) {
  const e = "", a = Array.from(
    t.querySelectorAll("GeneralEquipment")
  ).map((o) => o.getAttribute("name"));
  return [
    {
      title: d("wizard.title.add", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Oc(t)
      },
      content: [
        ...$r({
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
function Oc(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = x(e.find((o) => o.label === a));
    });
    const r = T(
      t.ownerDocument,
      "GeneralEquipment",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function Fc(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = x(
        e.find((o) => o.label === a)
      );
    });
    const r = T(
      t.ownerDocument,
      "TransformerWinding",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function Vc(t) {
  const e = "", a = Array.from(
    t.querySelectorAll("TransformerWinding")
  ).map((o) => o.getAttribute("name"));
  return [
    {
      title: d("wizard.title.add", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Fc(t)
      },
      content: [
        ...zr({
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
function Pc(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = x(
        e.find((a) => a.label === r)
      );
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = V(t, i);
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
function zr(t) {
  return [
    m`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      .reservedValues=${t.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      disabled
      helper="${d("scl.type")}"
    ></wizard-textfield>`,
    m`<wizard-checkbox
      label="virtual"
      .maybeValue=${t.virtual}
      helper="${d("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function Mc(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = t.getAttribute("virtual"), a = ne(
    t.parentElement,
    "TransformerWinding"
  ).filter((o) => o !== t).map((o) => o.getAttribute("name"));
  return [
    {
      title: d("wizard.title.edit", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Pc(t)
      },
      content: [
        ...zr({
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
function Bc(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = x(e.find((o) => o.label === a));
    });
    const r = T(
      t.ownerDocument,
      "TapChanger",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function Hc(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = x(e.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = V(t, i);
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
function Rr(t) {
  return [
    m`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      .reservedValues=${t.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      disabled
      helper="${d("scl.type")}"
    ></wizard-textfield>`,
    m`<wizard-checkbox
      label="virtual"
      .maybeValue=${t.virtual}
      helper="${d("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function qc(t) {
  const e = "", n = "LTC", a = Array.from(t.querySelectorAll("TapChanger")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: d("wizard.title.add", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Bc(t)
      },
      content: [
        ...Rr({
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
function Gc(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = t.getAttribute("virtual"), a = ne(
    t.parentElement,
    "TapChanger"
  ).filter((o) => o !== t).map((o) => o.getAttribute("name"));
  return [
    {
      title: d("wizard.title.edit", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Hc(t)
      },
      content: [
        ...Rr({
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
function Or(t, e, i, n, r) {
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
      pattern="${_t.unsigned}"
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
function Uc(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type", "nomFreq", "numPhases"].forEach((a) => {
      i[a] = x(e.find((o) => o.label === a));
    });
    const r = T(t.ownerDocument, "Line", i);
    return [{ new: { parent: t, element: r } }];
  };
}
function Wc(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type", "nomFreq", "numPhases"];
    if (n.forEach((r) => {
      i[r] = x(e.find((a) => a.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = V(t, i);
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
function jc(t) {
  return [
    {
      title: d("wizard.title.add", { tagName: "Line" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Uc(t)
      },
      content: [...Or("", "", "", "", "")]
    }
  ];
}
function Kc(t) {
  return [
    {
      title: d("line.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: d("save"),
        action: Wc(t)
      },
      content: Or(
        t.getAttribute("name") ?? "",
        t.getAttribute("desc"),
        t.getAttribute("type"),
        t.getAttribute("nomFreq"),
        t.getAttribute("numPhases")
      )
    }
  ];
}
function Xc(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = x(e.find((o) => o.label === a));
    });
    const r = T(t.ownerDocument, "Process", i);
    return [{ new: { parent: t, element: r } }];
  };
}
function Zc(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = x(e.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = V(t, i);
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
function Fr(t) {
  return [
    m`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${d("scl.name")}"
      required
      validationMessage="${d("textfield.required")}"
      .reservedValues=${t.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${d("scl.desc")}"
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      nullable
      helper="${d("scl.type")}"
    ></wizard-textfield>`
  ];
}
function Yc(t) {
  const e = "", i = "", n = "", r = ne(
    t.parentElement,
    "Process"
  ).filter((a) => a !== t).map((a) => a.getAttribute("name"));
  return [
    {
      title: d("wizard.title.add", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Xc(t)
      },
      content: [
        ...Fr({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Qc(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = ne(
    t.parentElement,
    "Process"
  ).filter((a) => a !== t).map((a) => a.getAttribute("name"));
  return [
    {
      title: d("wizard.title.edit", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: d("save"),
        action: Zc(t)
      },
      content: [
        ...Fr({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Jc(t, e, i, n, r) {
  return [
    m`<wizard-textfield
      label="lnType"
      .maybeValue=${t}
      readonly
      required
      helper="${d("ln.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${d("ln.wizard.descHelper")}"
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="prefix"
      nullable
      readonly
      .maybeValue=${i}
      helper="${d("ln.wizard.prefixHelper")}"
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${n}
      helper="${d("ln.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="inst"
      .maybeValue=${r}
      readonly
      helper="${d("ln.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function eu(t) {
  return (e) => {
    const i = {}, n = ["lnType", "desc", "prefix", "lnClass", "inst"];
    if (n.forEach((r) => {
      i[r] = x(e.find((a) => a.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = V(t, i);
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
function tu(t) {
  return [
    {
      title: d("ln.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: d("save"),
        action: eu(t)
      },
      content: Jc(
        t.getAttribute("lnType"),
        t.getAttribute("desc"),
        t.getAttribute("prefix"),
        t.getAttribute("lnClass"),
        t.getAttribute("inst")
      )
    }
  ];
}
function iu(t, e, i, n) {
  return [
    m`<wizard-textfield
      label="lnType"
      .maybeValue=${t}
      readonly
      required
      helper="${d("ln0.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${d("ln0.wizard.descHelper")}"
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${i}
      helper="${d("ln0.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    m`<wizard-textfield
      label="inst"
      .maybeValue=${n}
      readonly
      helper="${d("ln0.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function nu(t) {
  return (e) => {
    const i = {}, n = ["lnType", "desc", "lnClass", "inst"];
    if (n.forEach((r) => {
      i[r] = x(e.find((a) => a.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = V(t, i);
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
function ru(t) {
  return [
    {
      title: d("ln0.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: d("save"),
        action: nu(t)
      },
      content: iu(
        t.getAttribute("lnType"),
        t.getAttribute("desc"),
        t.getAttribute("lnClass"),
        t.getAttribute("inst")
      )
    }
  ];
}
function p() {
}
const au = {
  AccessControl: {
    edit: p,
    create: p
  },
  AccessPoint: {
    edit: p,
    create: p
  },
  Address: {
    edit: p,
    create: p
  },
  Association: {
    edit: p,
    create: p
  },
  Authentication: {
    edit: p,
    create: p
  },
  BDA: {
    edit: p,
    create: p
  },
  BitRate: {
    edit: p,
    create: p
  },
  Bay: {
    edit: Bl,
    create: Ml
  },
  ClientLN: {
    edit: p,
    create: p
  },
  ClientServices: {
    edit: p,
    create: p
  },
  CommProt: {
    edit: p,
    create: p
  },
  Communication: {
    edit: p,
    create: p
  },
  ConductingEquipment: {
    edit: Yl,
    create: Zl
  },
  ConfDataSet: {
    edit: p,
    create: p
  },
  ConfLdName: {
    edit: p,
    create: p
  },
  ConfLNs: {
    edit: p,
    create: p
  },
  ConfLogControl: {
    edit: p,
    create: p
  },
  ConfReportControl: {
    edit: p,
    create: p
  },
  ConfSG: {
    edit: p,
    create: p
  },
  ConfSigRef: {
    edit: p,
    create: p
  },
  ConnectedAP: {
    edit: p,
    create: p
  },
  ConnectivityNode: {
    edit: Jl,
    create: p
  },
  DA: {
    edit: $s,
    create: p
  },
  DAI: {
    edit: Vs,
    create: p
  },
  DAType: {
    edit: p,
    create: p
  },
  DO: {
    edit: p,
    create: p
  },
  DOI: {
    edit: p,
    create: p
  },
  DOType: {
    edit: p,
    create: p
  },
  DataObjectDirectory: {
    edit: p,
    create: p
  },
  DataSet: {
    edit: p,
    create: p
  },
  DataSetDirectory: {
    edit: p,
    create: p
  },
  DataTypeTemplates: {
    edit: p,
    create: p
  },
  DynAssociation: {
    edit: p,
    create: p
  },
  DynDataSet: {
    edit: p,
    create: p
  },
  EnumType: {
    edit: p,
    create: p
  },
  EnumVal: {
    edit: p,
    create: p
  },
  EqFunction: {
    edit: sc,
    create: uc
  },
  EqSubFunction: {
    edit: ac,
    create: lc
  },
  ExtRef: {
    edit: p,
    create: p
  },
  FCDA: {
    edit: p,
    create: ur
  },
  FileHandling: {
    edit: p,
    create: p
  },
  Function: {
    edit: tc,
    create: nc
  },
  GeneralEquipment: {
    edit: $c,
    create: Rc
  },
  GetCBValues: {
    edit: p,
    create: p
  },
  GetDataObjectDefinition: {
    edit: p,
    create: p
  },
  GetDataSetValue: {
    edit: p,
    create: p
  },
  GetDirectory: {
    edit: p,
    create: p
  },
  GOOSE: {
    edit: p,
    create: p
  },
  GOOSESecurity: {
    edit: p,
    create: p
  },
  GSE: {
    edit: p,
    create: p
  },
  GSEDir: {
    edit: p,
    create: p
  },
  GSEControl: {
    edit: Js,
    create: p
  },
  GSESettings: {
    edit: p,
    create: p
  },
  GSSE: {
    edit: p,
    create: p
  },
  Header: {
    edit: p,
    create: p
  },
  History: {
    edit: p,
    create: p
  },
  Hitem: {
    edit: p,
    create: p
  },
  IED: {
    edit: hs,
    create: p
  },
  IEDName: {
    edit: p,
    create: p
  },
  Inputs: {
    edit: p,
    create: p
  },
  IssuerName: {
    edit: p,
    create: p
  },
  KDC: {
    edit: p,
    create: p
  },
  LDevice: {
    edit: vs,
    create: p
  },
  LN: {
    edit: tu,
    create: p
  },
  LN0: {
    edit: ru,
    create: p
  },
  LNode: {
    edit: kd,
    create: Ed
  },
  LNodeType: {
    edit: p,
    create: p
  },
  Line: {
    edit: Kc,
    create: jc
  },
  Log: {
    edit: p,
    create: p
  },
  LogControl: {
    edit: p,
    create: p
  },
  LogSettings: {
    edit: p,
    create: p
  },
  MaxTime: {
    edit: p,
    create: p
  },
  McSecurity: {
    edit: p,
    create: p
  },
  MinTime: {
    edit: p,
    create: p
  },
  NeutralPoint: {
    edit: p,
    create: p
  },
  OptFields: {
    edit: Td,
    create: p
  },
  P: {
    edit: p,
    create: p
  },
  PhysConn: {
    edit: p,
    create: p
  },
  PowerTransformer: {
    edit: Jd,
    create: Qd
  },
  Private: {
    edit: p,
    create: p
  },
  Process: {
    edit: Qc,
    create: Yc
  },
  ProtNs: {
    edit: p,
    create: p
  },
  Protocol: {
    edit: p,
    create: p
  },
  ReadWrite: {
    edit: p,
    create: p
  },
  RedProt: {
    edit: p,
    create: p
  },
  ReportControl: {
    edit: p,
    create: p
  },
  ReportSettings: {
    edit: p,
    create: p
  },
  RptEnabled: {
    edit: p,
    create: p
  },
  SamplesPerSec: {
    edit: p,
    create: p
  },
  SampledValueControl: {
    edit: kc,
    create: p
  },
  SecPerSamples: {
    edit: p,
    create: p
  },
  SCL: {
    edit: p,
    create: p
  },
  SDI: {
    edit: p,
    create: p
  },
  SDO: {
    edit: p,
    create: p
  },
  Server: {
    edit: p,
    create: p
  },
  ServerAt: {
    edit: p,
    create: p
  },
  Services: {
    edit: p,
    create: p
  },
  SetDataSetValue: {
    edit: p,
    create: p
  },
  SettingControl: {
    edit: p,
    create: p
  },
  SettingGroups: {
    edit: p,
    create: p
  },
  SGEdit: {
    edit: p,
    create: p
  },
  SmpRate: {
    edit: p,
    create: p
  },
  SMV: {
    edit: p,
    create: p
  },
  SmvOpts: {
    edit: p,
    create: p
  },
  SMVsc: {
    edit: p,
    create: p
  },
  SMVSecurity: {
    edit: p,
    create: p
  },
  SMVSettings: {
    edit: p,
    create: p
  },
  SubEquipment: {
    edit: Lc,
    create: Dc
  },
  SubFunction: {
    edit: pc,
    create: fc
  },
  SubNetwork: {
    edit: ns,
    create: p
  },
  Subject: {
    edit: p,
    create: p
  },
  Substation: {
    edit: qd,
    create: Hd
  },
  SupSubscription: {
    edit: p,
    create: p
  },
  TapChanger: {
    edit: Gc,
    create: qc
  },
  Terminal: {
    edit: Ud,
    create: p
  },
  Text: {
    edit: p,
    create: p
  },
  TimerActivatedControl: {
    edit: p,
    create: p
  },
  TimeSyncProt: {
    edit: p,
    create: p
  },
  TransformerWinding: {
    edit: Mc,
    create: Vc
  },
  TrgOps: {
    edit: _s,
    create: p
  },
  Val: {
    edit: p,
    create: p
  },
  ValueHandling: {
    edit: p,
    create: p
  },
  Voltage: {
    edit: p,
    create: p
  },
  VoltageLevel: {
    edit: Zd,
    create: jd
  }
};
var ou = Object.defineProperty, lu = (t, e, i, n) => {
  for (var r = void 0, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = o(e, i, r) || r);
  return r && ou(e, i, r), r;
};
function du(t, e, i) {
  return new CustomEvent("fcda-select", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { control: t, fcda: e, ...i?.detail }
  });
}
function Sn(t, e, i) {
  return new CustomEvent("subscription-changed", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { control: t, fcda: e, ...i?.detail }
  });
}
function En(t) {
  return `${t.getAttribute("doName")}${t.hasAttribute("doName") && t.hasAttribute("daName") ? "." : ""}${t.getAttribute("daName")}`;
}
function In(t) {
  return `${t.getAttribute("ldInst")} ${t.hasAttribute("ldInst") ? "/" : ""}${t.getAttribute("prefix") ? ` ${t.getAttribute("prefix")}` : ""} ${t.getAttribute("lnClass")} ${t.getAttribute(
    "lnInst"
  )}`;
}
function su(t, e, i) {
  return !!Vr(t, e, i);
}
function Vr(t, e, i) {
  function n(o, l) {
    return o === "srcLNClass" && l === "LLN0" ? "" : l ? `[${o}="${l}"]` : "";
  }
  const r = e.closest("IED")?.getAttribute("name");
  if (!r)
    return;
  let a = "";
  return i && Nt(e.ownerDocument) !== "2003" && (a = `[serviceType="${Gt[i.tagName]}"]`, a += n(
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
    t.querySelectorAll(
      `ExtRef[iedName="${r}"]${Ar(e)}${a}`
    )
  ).find((o) => !o.hasAttribute("intAddr"));
}
function cu(t) {
  const [e, i, n, r, a, o] = [
    "srcCBName",
    "srcLDInst",
    "srcLNClass",
    "iedName",
    "srcPrefix",
    "srcLNInst"
  ].map((l) => t.getAttribute(l));
  return !Array.from(
    t.closest("IED")?.getElementsByTagName("ExtRef") ?? []
  ).filter(xe).some(
    (l) => (l.getAttribute("srcCBName") ?? "") === (e ?? "") && (l.getAttribute("srcLDInst") ?? "") === (i ?? "") && (l.getAttribute("srcLNClass") ?? "") === (n ?? "") && (l.getAttribute("iedName") ?? "") === (r ?? "") && (l.getAttribute("srcPrefix") ?? "") === (a ?? "") && (l.getAttribute("srcLNInst") ?? "") === (o ?? "") && l !== t
  );
}
function uu(t, e) {
  const i = t.querySelector(
    `LN[lnClass="${e}"]`
  );
  if (i === null) return !1;
  const n = e === "LGOS" ? "GoCBRef" : "SvCBRef", r = i.querySelector(`DOI[name="${n}"]>DAI[name="setSrcRef"]`)?.getAttribute("valKind"), a = i.querySelector(`DOI[name="${n}"]>DAI[name="setSrcRef"]`)?.getAttribute("valImport");
  if ((r === "RO" || r === "Conf") && a === "true")
    return !0;
  const o = i?.ownerDocument, l = i.getAttribute("lnType"), s = i.getAttribute("lnClass"), c = o.querySelector(
    `DataTypeTemplates > LNodeType[id="${l}"][lnClass="${s}"] > DO[name="${s === "LGOS" ? "GoCBRef" : "SvCBRef"}"]`
  );
  if (c) {
    const h = c.getAttribute("type"), b = o.querySelector(
      `DataTypeTemplates > DOType[id="${h}"] > DA[name="setSrcRef"]`
    );
    if (b)
      return (b.getAttribute("valKind") === "Conf" || b.getAttribute("valKind") === "RO") && b.getAttribute("valImport") === "true";
  }
  return !1;
}
function mu(t, e) {
  const i = t?.tagName === "GSEControl" ? "LGOS" : "LSVS";
  if (!t || !e || !hu(t, e, i))
    return [];
  const n = fu(
    t,
    e,
    i
  );
  if (!n || !uu(e, i))
    return [];
  const r = [];
  if (!n.parentElement) {
    const c = e.querySelector(
      `LN[lnClass="${i}"]`
    )?.parentElement;
    c && r.push({
      new: {
        parent: c,
        element: n,
        reference: c.querySelector(
          `LN[lnClass="${i}"]:last-child`
        )?.nextElementSibling
      }
    });
  }
  const a = i === "LGOS" ? "GoCBRef" : "SvCBRef";
  let o = n.querySelector(`DOI[name="${a}"]`);
  o || (o = e.ownerDocument.createElementNS(
    yt,
    "DOI"
  ), o.setAttribute("name", a), r.push({
    new: {
      parent: n,
      element: o
    }
  }));
  let l = n.querySelector(
    `DOI[name="${a}"]>DAI[name="setSrcRef"]`
  );
  if (!l) {
    l = e.ownerDocument.createElementNS(
      yt,
      "DAI"
    );
    const c = e.querySelector(
      `LN[lnClass="${i}"]>DOI[name="${a}"]>DAI[name="setSrcRef"]`
    );
    l.setAttribute("name", "setSrcRef"), c?.hasAttribute("valKind") && l.setAttribute("valKind", c.getAttribute("valKind")), c?.hasAttribute("valImport") && l.setAttribute(
      "valImport",
      c.getAttribute("valImport")
    ), r.push({
      new: {
        parent: o,
        element: l
      }
    });
  }
  let s = n.querySelector("Val");
  return s || (s = e.ownerDocument.createElementNS(
    yt,
    "Val"
  )), s.textContent = Ri(t), r.push({
    new: {
      parent: l,
      element: s
    }
  }), r;
}
function Kt(t, e, i) {
  const n = e === "GSEControl" ? "LGOS" : "LSVS", r = n === "LGOS" ? "GoCBRef" : "SvCBRef", a = `LN[lnClass="${n}"]>DOI[name="${r}"]>DAI[name="setSrcRef"]>Val,LN0[lnClass="${n}"]>DOI[name="${r}"]>DAI[name="setSrcRef"]>Val`;
  return i ? t.querySelector(a) : Array.from(t.querySelectorAll(a));
}
function pu(t, e) {
  if (!t || !e) return [];
  const i = Kt(
    e,
    t.tagName
  ).find((a) => a.textContent == Ri(t));
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
function hu(t, e, i) {
  return !(Nt(e.ownerDocument) === "2003" || e.querySelector(`LN[lnClass="${i}"]`) === null || Kt(e, t.tagName).find(
    (n) => n.textContent == Ri(t)
  ) || xu(e, t) <= gu(e, t));
}
function fu(t, e, i) {
  let n = Array.from(
    e.querySelectorAll(`LN[lnClass="${i}"]`)
  ).find((a) => {
    const o = i === "LGOS" ? "GoCBRef" : "SvCBRef";
    return a.querySelector(
      `DOI[name="${o}"]>DAI[name="setSrcRef"]>Val`
    ) === null || a.querySelector(
      `DOI[name="${o}"]>DAI[name="setSrcRef"]>Val`
    )?.textContent === "";
  });
  if (!n) {
    n = e.ownerDocument.createElementNS(
      yt,
      "LN"
    );
    const a = e.ownerDocument.createElementNS(
      yt,
      "Private"
    );
    a.setAttribute("type", "OpenSCD.create"), n.appendChild(a), n.setAttribute("lnClass", i);
    const o = Kt(
      e,
      t.tagName,
      !0
    )?.closest("LN");
    if (!o) return null;
    n.setAttribute(
      "lnType",
      o?.getAttribute("lnType") ?? ""
    );
  }
  if ((n.getAttribute("inst") ?? "") === "") {
    const a = Ll(
      Array.from(
        e.querySelectorAll(`LN[lnClass="${i}"]`)
      )
    );
    if (!a) return null;
    n.setAttribute("inst", a);
  }
  return n;
}
function bu(t) {
  if (t === null) return null;
  const e = ["iedName", "serviceType", "srcPrefix", "srcCBName"], [i, n, r, a] = e.map(
    (v) => t.getAttribute(v) ?? ""
  ), o = n === "GOOSE" ? "LGOS" : "LSVS", l = o === "LGOS" ? 'DOI[name="GoCBRef"]' : 'DOI[name="SvCBRef"]', s = t.getAttribute("srcLDInst") ?? t.getAttribute("ldInst"), c = t.getAttribute("srcLNClass") ?? "LLN0", h = `${i}${r}${s}/${c}.${a}`, b = t.closest("IED")?.getAttribute("name"), g = Array.from(
    t.ownerDocument.querySelector(`IED[name="${b}"]`).querySelectorAll(
      `LN[lnClass="${o}"]>${l}>DAI[name="setSrcRef"]>Val`
    )
  ).find((v) => v.textContent === h);
  return g !== void 0 ? g.closest("LN") : null;
}
function gu(t, e) {
  return Kt(
    t,
    e.tagName
  ).filter((n) => n.textContent !== "").length;
}
function xu(t, e) {
  const i = e.tagName === "GSEControl" ? "maxGo" : "maxSv", n = parseInt(
    t.querySelector("Services>SupSubscription")?.getAttribute(i) ?? "0",
    10
  );
  return isNaN(n) ? 0 : n;
}
function Ri(t) {
  if (!t) return null;
  const e = t.closest("LN,LN0"), i = e?.getAttribute("prefix") ?? "", n = e?.getAttribute("lnClass"), r = e?.getAttribute("inst") ?? "", a = t.closest("LDevice")?.getAttribute("inst"), o = t.closest("IED")?.getAttribute("name"), l = t.getAttribute("name");
  return !l && !o && !a && !n ? null : `${o}${a}/${i}${n}${r}.${l}`;
}
function vu(t, e) {
  const i = t.closest("IED")?.getAttribute("name"), [n, r, a, o] = [
    "ldInst",
    "lnClass",
    "lnInst",
    "doName"
  ].map((b) => t.getAttribute(b));
  if (!i || !n || !r || !a || !o)
    return !1;
  if (Nt(t.ownerDocument) === "2003" || e === void 0)
    return !0;
  const l = e.closest("LDevice")?.getAttribute("inst"), s = e.closest("LN0,LN")?.getAttribute("lnClass"), c = e.closest("LN0,LN")?.getAttribute("inst"), h = e.getAttribute("name");
  return !(!l || !s || !h || typeof c != "string");
}
const Gt = {
  ReportControl: "Report",
  GSEControl: "GOOSE",
  SampledValueControl: "SMV"
};
function yu(t, e) {
  const i = e.closest("IED")?.getAttribute("name") ?? null, [n, r, a, o, l, s] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName"
  ].map((y) => e.getAttribute(y));
  if (Nt(e.ownerDocument) === "2003")
    return T(e.ownerDocument, "ExtRef", {
      iedName: i,
      ldInst: n,
      lnClass: a,
      lnInst: o,
      prefix: r,
      doName: l,
      daName: s
    });
  if (!t || !Gt[t.tagName])
    return T(e.ownerDocument, "ExtRef", {
      iedName: i,
      serviceType: "Poll",
      ldInst: n,
      lnClass: a,
      lnInst: o,
      prefix: r,
      doName: l,
      daName: s
    });
  const c = t.closest("LDevice")?.getAttribute("inst") ?? "", h = t.closest("LN0,LN")?.getAttribute("prefix") ?? "", b = t.closest("LN0,LN")?.getAttribute("lnClass") ?? "", g = t.closest("LN0,LN")?.getAttribute("inst"), v = t.getAttribute("name") ?? "";
  return T(e.ownerDocument, "ExtRef", {
    iedName: i,
    serviceType: Gt[t.tagName],
    ldInst: n,
    lnClass: a,
    lnInst: o,
    prefix: r,
    doName: l,
    daName: s,
    srcLDInst: c,
    srcPrefix: h,
    srcLNClass: b,
    srcLNInst: g || null,
    srcCBName: v
  });
}
class wu extends Ce {
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
lu([
  C("div")
], wu.prototype, "subscriberWrapper");
const Pr = X`
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
function dt(t, e, i) {
  return (t?.getAttribute(i) ?? "") === (e?.getAttribute(i) ?? "");
}
function xt(t, e, i, n) {
  return (t?.getAttribute(e) ?? "") === (i?.getAttribute(n) ?? "");
}
function _u(t, e, i) {
  if (Nt(i.ownerDocument) === "2003")
    return !0;
  const n = e?.closest("LDevice") ?? void 0, r = e?.closest("LN0") ?? void 0, a = !i.hasAttribute("srcLNClass"), l = r?.getAttribute("lnClass") === "LLN0" && a;
  return (i.getAttribute("serviceType") ?? "") === Gt[t] && xt(
    i,
    "srcLDInst",
    n,
    "inst"
  ) && xt(
    i,
    "scrPrefix",
    r,
    "prefix"
  ) && (l || xt(
    i,
    "srcLNClass",
    r,
    "lnClass"
  )) && xt(i, "srcLNInst", r, "inst") && xt(
    i,
    "srcCBName",
    e,
    "name"
  );
}
function Au(t, e, i, n) {
  return n.getAttribute("iedName") === i?.closest("IED")?.getAttribute("name") && dt(i, n, "ldInst") && dt(i, n, "prefix") && dt(i, n, "lnClass") && dt(i, n, "lnInst") && dt(i, n, "doName") && dt(i, n, "daName") && _u(t, e, n);
}
function Su(t, e, i) {
  return Array.from(t.querySelectorAll("ExtRef")).filter(
    (n) => i && n.hasAttribute("intAddr") || !i && !n.hasAttribute("intAddr")
  ).filter((n) => n.closest("IED") !== e?.closest("IED"));
}
function Mt(t, e, i, n, r) {
  return Su(
    t,
    i,
    r
  ).filter(
    (a) => Au(e, n, i, a)
  );
}
var Eu = Object.defineProperty, Iu = Object.getOwnPropertyDescriptor, we = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Iu(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Eu(e, i, r), r;
};
let pe = class extends Ce {
  constructor() {
    super(), this.editCount = -1, this.extRefCounters = /* @__PURE__ */ new Map(), this.iconControlLookup = {
      SampledValueControl: Dl,
      GSEControl: Tl
    }, this.resetSelection = this.resetSelection.bind(this), parent.addEventListener("open-doc", this.resetSelection);
    const t = this.closest(".container");
    t && (this.resetExtRefCount = this.resetExtRefCount.bind(this), t.addEventListener("subscription-changed", this.resetExtRefCount));
  }
  get hideSubscribed() {
    return localStorage.getItem(
      `fcda-binding-list-${this.includeLaterBinding ? "later-binding" : "data-binding"}-${this.controlTag}$hideSubscribed`
    ) === "true";
  }
  set hideSubscribed(t) {
    const e = this.hideSubscribed;
    localStorage.setItem(
      `fcda-binding-list-${this.includeLaterBinding ? "later-binding" : "data-binding"}-${this.controlTag}$hideSubscribed`,
      `${t}`
    ), this.requestUpdate("hideSubscribed", e);
  }
  get hideNotSubscribed() {
    return localStorage.getItem(
      `fcda-binding-list-${this.includeLaterBinding ? "later-binding" : "data-binding"}-${this.controlTag}$hideNotSubscribed`
    ) === "true";
  }
  set hideNotSubscribed(t) {
    const e = this.hideNotSubscribed;
    localStorage.setItem(
      `fcda-binding-list-${this.includeLaterBinding ? "later-binding" : "data-binding"}-${this.controlTag}$hideNotSubscribed`,
      `${t}`
    ), this.requestUpdate("hideNotSubscribed", e);
  }
  getControlElements() {
    return this.doc ? Array.from(this.doc.querySelectorAll(`LN0 > ${this.controlTag}`)) : [];
  }
  getFcdaElements(t) {
    const e = t.parentElement;
    return e ? Array.from(
      e.querySelectorAll(
        `:scope > DataSet[name=${t.getAttribute(
          "datSet"
        )}] > FCDA`
      )
    ) : [];
  }
  resetExtRefCount(t) {
    if (t.detail.control && t.detail.fcda) {
      const e = `${k(t.detail.control)} ${k(
        t.detail.fcda
      )}`;
      this.extRefCounters.delete(e);
    }
  }
  getExtRefCount(t, e) {
    const i = `${k(e)} ${k(
      t
    )}`;
    if (!this.extRefCounters.has(i)) {
      const n = Mt(
        this.doc.getRootNode(),
        this.controlTag,
        t,
        e,
        this.includeLaterBinding
      ).length;
      this.extRefCounters.set(i, n);
    }
    return this.extRefCounters.get(i);
  }
  openEditWizard(t) {
    const e = au[this.controlTag].edit(t);
    e && this.dispatchEvent(Te(e));
  }
  resetSelection() {
    this.selectedControlElement = void 0, this.selectedFcdaElement = void 0;
  }
  onFcdaSelect(t, e) {
    this.resetSelection(), this.selectedControlElement = t, this.selectedFcdaElement = e;
  }
  updated(t) {
    super.updated(t), (t.has("doc") || t.has("selectedControlElement") || t.has("selectedFcdaElement")) && this.dispatchEvent(
      du(
        this.selectedControlElement,
        this.selectedFcdaElement
      )
    ), t.has("doc") && (this.extRefCounters = /* @__PURE__ */ new Map());
  }
  renderFCDA(t, e) {
    const i = this.getExtRefCount(e, t);
    return m`<mwc-list-item
      graphic="large"
      ?hasMeta=${i !== 0}
      twoline
      class="${ee({
      subitem: !0,
      "show-subscribed": i !== 0,
      "show-not-subscribed": i === 0
    })}"
      @click=${() => this.onFcdaSelect(t, e)}
      value="${k(t)}
             ${k(e)}"
    >
      <span>${En(e)}</span>
      <span slot="secondary">${In(e)}</span>
      <mwc-icon slot="graphic">subdirectory_arrow_right</mwc-icon>
      ${i !== 0 ? m`<span slot="meta">${i}</span>` : Le}
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
    const t = {
      "filter-off": this.hideSubscribed || this.hideNotSubscribed
    };
    return m`<h1>
      ${d(`subscription.${this.controlTag}.controlBlockList.title`)}
      <mwc-icon-button
        class="actions-menu-icon ${ee(t)}"
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
          <span>${d("subscription.subscriber.subscribed")}</span>
        </mwc-check-list-item>
        <mwc-check-list-item
          class="filter-not-subscribed"
          left
          ?selected=${!this.hideNotSubscribed}
        >
          <span>${d("subscription.subscriber.notSubscribed")}</span>
        </mwc-check-list-item>
      </mwc-menu>
    </h1> `;
  }
  renderControls(t) {
    return m`<filtered-list class="control-block-list" activatable>
      ${t.filter((e) => this.getFcdaElements(e).length).map((e) => {
      const i = this.getFcdaElements(e), n = i.some(
        (o) => this.getExtRefCount(o, e) !== 0
      ), r = i.some(
        (o) => this.getExtRefCount(o, e) === 0
      );
      return m`
            <mwc-list-item
              noninteractive
              class="${ee({
        control: !0,
        "show-subscribed": n,
        "show-not-subscribed": r
      })}"
              graphic="icon"
              twoline
              hasMeta
              value="${k(e)}${i.map(
        (o) => `
                        ${En(o)}
                        ${In(o)}
                        ${k(o)}`
      ).join("")}"
            >
              <mwc-icon-button
                slot="meta"
                icon="edit"
                class="interactive"
                @click=${() => this.openEditWizard(e)}
              ></mwc-icon-button>
              <span
                >${Gn(e)}
                ${rn(e) ? m`${rn(e)}` : Le}</span
              >
              <span slot="secondary">${k(e)}</span>
              <mwc-icon slot="graphic"
                >${this.iconControlLookup[this.controlTag]}</mwc-icon
              >
            </mwc-list-item>
            <li divider role="separator"></li>
            ${i.map(
        (o) => this.renderFCDA(e, o)
      )}
          `;
    })}
    </filtered-list>`;
  }
  render() {
    const t = this.getControlElements();
    return m`<section tabindex="0">
      ${this.renderTitle()}
      ${t ? this.renderControls(t) : m`<h4>${d("subscription.subscriber.notSubscribed")}</h4> `}
    </section>`;
  }
};
pe.styles = X`
    ${Pr}

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
we([
  f({ attribute: !1 })
], pe.prototype, "doc", 2);
we([
  f({ type: Number })
], pe.prototype, "editCount", 2);
we([
  f()
], pe.prototype, "controlTag", 2);
we([
  f()
], pe.prototype, "includeLaterBinding", 2);
we([
  E()
], pe.prototype, "selectedControlElement", 2);
we([
  E()
], pe.prototype, "selectedFcdaElement", 2);
we([
  E()
], pe.prototype, "extRefCounters", 2);
we([
  f({
    type: Boolean,
    hasChanged() {
      return !1;
    }
  })
], pe.prototype, "hideSubscribed", 1);
we([
  f({
    type: Boolean,
    hasChanged() {
      return !1;
    }
  })
], pe.prototype, "hideNotSubscribed", 1);
we([
  C(".actions-menu")
], pe.prototype, "actionsMenu", 2);
we([
  C(".actions-menu-icon")
], pe.prototype, "actionsMenuIcon", 2);
we([
  C(".control-block-list")
], pe.prototype, "controlBlockList", 2);
pe = we([
  W("fcda-binding-list")
], pe);
var Cu = Object.defineProperty, ku = Object.getOwnPropertyDescriptor, Ye = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? ku(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Cu(e, i, r), r;
};
let $e = class extends Ce {
  constructor() {
    super(), this.editCount = -1;
    const t = this.closest(".container");
    t && (this.onFcdaSelectEvent = this.onFcdaSelectEvent.bind(this), t.addEventListener("fcda-select", this.onFcdaSelectEvent));
  }
  getLNElements() {
    return this.doc ? Array.from(
      this.doc.querySelectorAll("LDevice > LN0, LDevice > LN")
    ).filter((t) => t.closest("IED") !== this.currentIedElement) : [];
  }
  getSubscribedLNElements() {
    return this.getLNElements().filter(
      (t) => Mt(
        t,
        this.controlTag,
        this.currentSelectedFcdaElement,
        this.currentSelectedControlElement,
        !1
      ).length > 0
    );
  }
  getAvailableLNElements() {
    return this.getLNElements().filter(
      (t) => Mt(
        t,
        this.controlTag,
        this.currentSelectedFcdaElement,
        this.currentSelectedControlElement,
        !1
      ).length == 0
    );
  }
  async onFcdaSelectEvent(t) {
    this.currentSelectedControlElement = t.detail.control, this.currentSelectedFcdaElement = t.detail.fcda, this.currentIedElement = this.currentSelectedFcdaElement ? this.currentSelectedFcdaElement.closest("IED") ?? void 0 : void 0;
  }
  subscribe(t) {
    if (!this.currentIedElement || !this.currentSelectedFcdaElement || !this.currentSelectedControlElement)
      return null;
    const e = {
      actions: [],
      title: d("subscription.connect")
    };
    let i = t.querySelector(":scope > Inputs");
    if (i || (i = T(t.ownerDocument, "Inputs", {}), e.actions.push({
      new: { parent: t, element: i }
    })), !su(
      i,
      this.currentSelectedFcdaElement,
      this.currentSelectedControlElement
    ) && vu(
      this.currentSelectedFcdaElement,
      this.currentSelectedControlElement
    )) {
      const r = yu(
        this.currentSelectedControlElement,
        this.currentSelectedFcdaElement
      );
      e.actions.push({
        new: { parent: i, element: r }
      });
    }
    const n = t.closest("IED") || void 0;
    return e.actions.push(
      ...mu(
        this.currentSelectedControlElement,
        n
      )
    ), e;
  }
  unsubscribe(t) {
    if (!this.currentIedElement || !this.currentSelectedFcdaElement || !this.currentSelectedControlElement)
      return null;
    const e = [], i = t.querySelector(":scope > Inputs"), n = Vr(
      i,
      this.currentSelectedFcdaElement,
      this.currentSelectedControlElement
    );
    n && e.push({ old: { parent: i, element: n } }), e.push(...Sr(e));
    const r = t.closest("IED") || void 0;
    return n && cu(n) && e.push(
      ...pu(
        this.currentSelectedControlElement,
        r
      )
    ), {
      title: d("subscription.disconnect"),
      actions: e
    };
  }
  bindingNotSupported(t) {
    return (t.closest("IED").querySelector(
      ":scope > AccessPoint > Services > ClientServices, :scope > Services > ClientServices"
    )?.getAttribute("noIctBinding") ?? "false") === "true";
  }
  buildLNTitle(t) {
    const e = t.getAttribute("prefix"), i = t.getAttribute("inst"), n = this.nsdoc.getDataDescription(t);
    return `${e ? `${e} - ` : ""}${n.label} ${i ? ` - ${i}` : ""}`;
  }
  renderTitle() {
    return m`<h1>${d("subscription.binding.extRefList.title")}</h1>`;
  }
  renderSubscribedLN(t) {
    const e = Mt(
      t,
      this.controlTag,
      this.currentSelectedFcdaElement,
      this.currentSelectedControlElement,
      !1
    ), i = bu(e[0]);
    return m`<mwc-list-item
      graphic="large"
      ?hasMeta=${i !== null}
      ?disabled=${this.bindingNotSupported(t)}
      twoline
      value="${k(t)}"
      @click=${() => {
      const n = this.unsubscribe(t);
      n && (this.dispatchEvent(At(n)), this.dispatchEvent(
        Sn(
          this.currentSelectedControlElement,
          this.currentSelectedFcdaElement
        )
      ));
    }}
    >
      <span>${this.buildLNTitle(t)}</span>
      <span slot="secondary"> ${k(t.closest("LDevice"))} </span>
      <mwc-icon slot="graphic">close</mwc-icon>
      ${i !== null ? m`<mwc-icon title="${k(i)}" slot="meta"
            >monitor_heart</mwc-icon
          >` : Le}</mwc-list-item
    >`;
  }
  renderSubscribedLNs() {
    const t = this.getSubscribedLNElements();
    return m`
      <mwc-list-item
        noninteractive
        value="${t.map(
      (e) => this.buildLNTitle(e) + " " + k(e.closest("LDevice"))
    ).join(" ")}"
      >
        <span>${d("subscription.subscriber.subscribed")}</span>
      </mwc-list-item>
      <li divider role="separator"></li>
      ${t.length > 0 ? m`${t.map((e) => this.renderSubscribedLN(e))}` : m`<mwc-list-item graphic="large" noninteractive>
            ${d("subscription.binding.extRefList.noSubscribedLNs")}
          </mwc-list-item>`}
    `;
  }
  renderAvailableLNs() {
    const t = this.getAvailableLNElements();
    return m`
      <mwc-list-item
        noninteractive
        value="${t.map(
      (e) => this.buildLNTitle(e) + " " + k(e.closest("LDevice"))
    ).join(" ")}"
      >
        <span> ${d("subscription.subscriber.availableToSubscribe")} </span>
      </mwc-list-item>
      <li divider role="separator"></li>
      ${t.length > 0 ? m`${t.map(
      (e) => m` <mwc-list-item
              graphic="large"
              ?disabled=${this.bindingNotSupported(e)}
              twoline
              value="${k(e)}"
              @click=${() => {
        const i = this.subscribe(e);
        i && (this.dispatchEvent(At(i)), this.dispatchEvent(
          Sn(
            this.currentSelectedControlElement,
            this.currentSelectedFcdaElement
          )
        ));
      }}
            >
              <span>${this.buildLNTitle(e)}</span>
              <span slot="secondary">
                ${k(e.closest("LDevice"))}
              </span>
              <mwc-icon slot="graphic">add</mwc-icon>
            </mwc-list-item>`
    )}` : m`<mwc-list-item graphic="large" noninteractive>
            ${d("subscription.binding.extRefList.noAvailableLNs")}
          </mwc-list-item>`}
    `;
  }
  render() {
    return m` <section tabindex="0">
      ${this.currentSelectedControlElement && this.currentSelectedFcdaElement ? m`
            ${this.renderTitle()}
            <filtered-list>
              ${this.renderSubscribedLNs()} ${this.renderAvailableLNs()}
            </filtered-list>
          ` : m`
            <h1>${d("subscription.binding.extRefList.noSelection")}</h1>
          `}
    </section>`;
  }
};
$e.styles = X`
    ${Pr}

    mwc-list-item.hidden[noninteractive] + li[divider] {
      display: none;
    }
  `;
Ye([
  f({ attribute: !1 })
], $e.prototype, "doc", 2);
Ye([
  f({ type: Number })
], $e.prototype, "editCount", 2);
Ye([
  f()
], $e.prototype, "nsdoc", 2);
Ye([
  f()
], $e.prototype, "controlTag", 2);
Ye([
  E()
], $e.prototype, "currentSelectedControlElement", 2);
Ye([
  E()
], $e.prototype, "currentSelectedFcdaElement", 2);
Ye([
  E()
], $e.prototype, "currentIedElement", 2);
$e = Ye([
  W("extref-ln-binding-list")
], $e);
const Nu = {
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
}, Lu = {
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
}, Cn = { en: Lu, de: Nu };
async function Tu(t) {
  return Object.keys(Cn).includes(t) ? Cn[t] : {};
}
Jr({ loader: Tu, empty: (t) => t });
const Mr = localStorage.getItem("language") || "en";
console.log("SETTING LANGUAGE TO", Mr);
ea(Mr);
var Du = Object.defineProperty, Oi = (t, e, i, n) => {
  for (var r = void 0, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = o(e, i, r) || r);
  return r && Du(e, i, r), r;
};
class Fi extends Ce {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
  render() {
    return m`<div>
      <div class="container">
        <fcda-binding-list
          class="column"
          controlTag="GSEControl"
          .includeLaterBinding="${!1}"
          .editCount=${this.editCount}
          .doc="${this.doc}"
        >
        </fcda-binding-list>
        <extref-ln-binding-list
          class="column"
          controlTag="GSEControl"
          .editCount=${this.editCount}
          .doc="${this.doc}"
          .nsdoc="${this.nsdoc}"
        >
        </extref-ln-binding-list>
      </div>
    </div>`;
  }
  static {
    this.styles = X`
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
Oi([
  f({ attribute: !1 })
], Fi.prototype, "doc");
Oi([
  f({ type: Number })
], Fi.prototype, "editCount");
Oi([
  f()
], Fi.prototype, "nsdoc");
export {
  Fi as default
};
