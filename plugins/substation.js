import { render as Fn, noChange as ds, NodePart as cs, AttributePart as us, directive as lo, nothing as Me, html as _ } from "lit-html";
import { LitElement as j, query as w, property as m, state as I, html as s, css as V, customElement as R, queryAsync as Gt, eventOptions as Ue, queryAssignedNodes as Bn, svg as O, unsafeCSS as ms } from "lit-element";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ti = window, Hn = Ti.ShadowRoot && (Ti.ShadyCSS === void 0 || Ti.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, qn = Symbol(), dr = /* @__PURE__ */ new WeakMap();
let co = class {
  constructor(e, i, n) {
    if (this._$cssResult$ = !0, n !== qn) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = i;
  }
  get styleSheet() {
    let e = this.o;
    const i = this.t;
    if (Hn && e === void 0) {
      const n = i !== void 0 && i.length === 1;
      n && (e = dr.get(i)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && dr.set(i, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const ps = (t) => new co(typeof t == "string" ? t : t + "", void 0, qn), hs = (t, ...e) => {
  const i = t.length === 1 ? t[0] : e.reduce((n, r, o) => n + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(r) + t[o + 1], t[0]);
  return new co(i, t, qn);
}, fs = (t, e) => {
  Hn ? t.adoptedStyleSheets = e.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet) : e.forEach((i) => {
    const n = document.createElement("style"), r = Ti.litNonce;
    r !== void 0 && n.setAttribute("nonce", r), n.textContent = i.cssText, t.appendChild(n);
  });
}, cr = Hn ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let i = "";
  for (const n of e.cssRules) i += n.cssText;
  return ps(i);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Ki;
const Di = window, ur = Di.trustedTypes, bs = ur ? ur.emptyScript : "", mr = Di.reactiveElementPolyfillSupport, un = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? bs : null;
      break;
    case Object:
    case Array:
      t = t == null ? t : JSON.stringify(t);
  }
  return t;
}, fromAttribute(t, e) {
  let i = t;
  switch (e) {
    case Boolean:
      i = t !== null;
      break;
    case Number:
      i = t === null ? null : Number(t);
      break;
    case Object:
    case Array:
      try {
        i = JSON.parse(t);
      } catch {
        i = null;
      }
  }
  return i;
} }, uo = (t, e) => e !== t && (e == e || t == t), Xi = { attribute: !0, type: String, converter: un, reflect: !1, hasChanged: uo }, mn = "finalized";
class Jt extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu();
  }
  static addInitializer(e) {
    var i;
    this.finalize(), ((i = this.h) !== null && i !== void 0 ? i : this.h = []).push(e);
  }
  static get observedAttributes() {
    this.finalize();
    const e = [];
    return this.elementProperties.forEach((i, n) => {
      const r = this._$Ep(n, i);
      r !== void 0 && (this._$Ev.set(r, n), e.push(r));
    }), e;
  }
  static createProperty(e, i = Xi) {
    if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(e, i), !i.noAccessor && !this.prototype.hasOwnProperty(e)) {
      const n = typeof e == "symbol" ? Symbol() : "__" + e, r = this.getPropertyDescriptor(e, n, i);
      r !== void 0 && Object.defineProperty(this.prototype, e, r);
    }
  }
  static getPropertyDescriptor(e, i, n) {
    return { get() {
      return this[i];
    }, set(r) {
      const o = this[e];
      this[i] = r, this.requestUpdate(e, o, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) || Xi;
  }
  static finalize() {
    if (this.hasOwnProperty(mn)) return !1;
    this[mn] = !0;
    const e = Object.getPrototypeOf(this);
    if (e.finalize(), e.h !== void 0 && (this.h = [...e.h]), this.elementProperties = new Map(e.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const i = this.properties, n = [...Object.getOwnPropertyNames(i), ...Object.getOwnPropertySymbols(i)];
      for (const r of n) this.createProperty(r, i[r]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(e) {
    const i = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const r of n) i.unshift(cr(r));
    } else e !== void 0 && i.push(cr(e));
    return i;
  }
  static _$Ep(e, i) {
    const n = i.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  _$Eu() {
    var e;
    this._$E_ = new Promise((i) => this.enableUpdating = i), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (e = this.constructor.h) === null || e === void 0 || e.forEach((i) => i(this));
  }
  addController(e) {
    var i, n;
    ((i = this._$ES) !== null && i !== void 0 ? i : this._$ES = []).push(e), this.renderRoot !== void 0 && this.isConnected && ((n = e.hostConnected) === null || n === void 0 || n.call(e));
  }
  removeController(e) {
    var i;
    (i = this._$ES) === null || i === void 0 || i.splice(this._$ES.indexOf(e) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((e, i) => {
      this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]), delete this[i]);
    });
  }
  createRenderRoot() {
    var e;
    const i = (e = this.shadowRoot) !== null && e !== void 0 ? e : this.attachShadow(this.constructor.shadowRootOptions);
    return fs(i, this.constructor.elementStyles), i;
  }
  connectedCallback() {
    var e;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$ES) === null || e === void 0 || e.forEach((i) => {
      var n;
      return (n = i.hostConnected) === null || n === void 0 ? void 0 : n.call(i);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$ES) === null || e === void 0 || e.forEach((i) => {
      var n;
      return (n = i.hostDisconnected) === null || n === void 0 ? void 0 : n.call(i);
    });
  }
  attributeChangedCallback(e, i, n) {
    this._$AK(e, n);
  }
  _$EO(e, i, n = Xi) {
    var r;
    const o = this.constructor._$Ep(e, n);
    if (o !== void 0 && n.reflect === !0) {
      const a = (((r = n.converter) === null || r === void 0 ? void 0 : r.toAttribute) !== void 0 ? n.converter : un).toAttribute(i, n.type);
      this._$El = e, a == null ? this.removeAttribute(o) : this.setAttribute(o, a), this._$El = null;
    }
  }
  _$AK(e, i) {
    var n;
    const r = this.constructor, o = r._$Ev.get(e);
    if (o !== void 0 && this._$El !== o) {
      const a = r.getPropertyOptions(o), d = typeof a.converter == "function" ? { fromAttribute: a.converter } : ((n = a.converter) === null || n === void 0 ? void 0 : n.fromAttribute) !== void 0 ? a.converter : un;
      this._$El = o, this[o] = d.fromAttribute(i, a.type), this._$El = null;
    }
  }
  requestUpdate(e, i, n) {
    let r = !0;
    e !== void 0 && (((n = n || this.constructor.getPropertyOptions(e)).hasChanged || uo)(this[e], i) ? (this._$AL.has(e) || this._$AL.set(e, i), n.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(e, n))) : r = !1), !this.isUpdatePending && r && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (i) {
      Promise.reject(i);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var e;
    if (!this.isUpdatePending) return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((r, o) => this[o] = r), this._$Ei = void 0);
    let i = !1;
    const n = this._$AL;
    try {
      i = this.shouldUpdate(n), i ? (this.willUpdate(n), (e = this._$ES) === null || e === void 0 || e.forEach((r) => {
        var o;
        return (o = r.hostUpdate) === null || o === void 0 ? void 0 : o.call(r);
      }), this.update(n)) : this._$Ek();
    } catch (r) {
      throw i = !1, this._$Ek(), r;
    }
    i && this._$AE(n);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var i;
    (i = this._$ES) === null || i === void 0 || i.forEach((n) => {
      var r;
      return (r = n.hostUpdated) === null || r === void 0 ? void 0 : r.call(n);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$EC !== void 0 && (this._$EC.forEach((i, n) => this._$EO(n, this[n], i)), this._$EC = void 0), this._$Ek();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}
Jt[mn] = !0, Jt.elementProperties = /* @__PURE__ */ new Map(), Jt.elementStyles = [], Jt.shadowRootOptions = { mode: "open" }, mr?.({ ReactiveElement: Jt }), ((Ki = Di.reactiveElementVersions) !== null && Ki !== void 0 ? Ki : Di.reactiveElementVersions = []).push("1.6.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Zi, Yi;
class pi extends Jt {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e, i;
    const n = super.createRenderRoot();
    return (e = (i = this.renderOptions).renderBefore) !== null && e !== void 0 || (i.renderBefore = n.firstChild), n;
  }
  update(e) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Fn(i, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!1);
  }
  render() {
    return ds;
  }
}
pi.finalized = !0, pi._$litElement$ = !0, (Zi = globalThis.litElementHydrateSupport) === null || Zi === void 0 || Zi.call(globalThis, { LitElement: pi });
const pr = globalThis.litElementPolyfillSupport;
pr?.({ LitElement: pi });
((Yi = globalThis.litElementVersions) !== null && Yi !== void 0 ? Yi : globalThis.litElementVersions = []).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const gs = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? { ...e, finisher(i) {
  i.createProperty(e.key, t);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() {
  typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
}, finisher(i) {
  i.createProperty(e.key, t);
} }, xs = (t, e, i) => {
  e.constructor.createProperty(i, t);
};
function mo(t) {
  return (e, i) => i !== void 0 ? xs(t, e, i) : gs(t, e);
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Qi;
((Qi = window.HTMLSlotElement) === null || Qi === void 0 ? void 0 : Qi.prototype.assignedElements) != null;
const vs = 1e3 * 60, pn = "langChanged";
function ys(t, e, i) {
  return Object.entries(hn(e || {})).reduce((n, [r, o]) => n.replace(new RegExp(`{{[  ]*${r}[  ]*}}`, "gm"), String(hn(o))), t);
}
function ws(t, e) {
  const i = t.split(".");
  let n = e.strings;
  for (; n != null && i.length > 0; )
    n = n[i.shift()];
  return n != null ? n.toString() : null;
}
function hn(t) {
  return typeof t == "function" ? t() : t;
}
const As = () => ({
  loader: () => Promise.resolve({}),
  empty: (t) => `[${t}]`,
  lookup: ws,
  interpolate: ys,
  translationCache: {}
});
let bi = As();
function _s(t) {
  return bi = Object.assign(Object.assign({}, bi), t);
}
function Es(t) {
  window.dispatchEvent(new CustomEvent(pn, { detail: t }));
}
function Ss(t, e, i = bi) {
  Es({
    previousStrings: i.strings,
    previousLang: i.lang,
    lang: i.lang = t,
    strings: i.strings = e
  });
}
function Cs(t, e) {
  const i = (n) => t(n.detail);
  return window.addEventListener(pn, i, e), () => window.removeEventListener(pn, i);
}
async function $s(t, e = bi) {
  const i = await e.loader(t, e);
  e.translationCache = {}, Ss(t, i, e);
}
function l(t, e, i = bi) {
  let n = i.translationCache[t] || (i.translationCache[t] = i.lookup(t, i) || i.empty(t, i));
  return e = e != null ? hn(e) : null, e != null ? i.interpolate(n, e, i) : n;
}
function po(t) {
  return t instanceof cs ? t.startNode.isConnected : t instanceof us ? t.committer.element.isConnected : t.element.isConnected;
}
function Is(t) {
  for (const [e] of t)
    po(e) || t.delete(e);
}
function Ns(t) {
  "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t);
}
function ks(t, e) {
  setInterval(() => Ns(() => Is(t)), e);
}
const Gn = /* @__PURE__ */ new Map();
function Ls() {
  Cs((t) => {
    for (const [e, i] of Gn)
      po(e) && ho(e, i, t);
  });
}
Ls();
ks(Gn, vs);
function ho(t, e, i) {
  const n = e(i);
  t.value !== n && (t.setValue(n), t.commit());
}
lo((t) => (e) => {
  Gn.set(e, t), ho(e, t);
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
const fo = /* @__PURE__ */ new WeakMap(), ti = (t) => (...e) => {
  const i = t(...e);
  return fo.set(i, !0), i;
}, gi = (t) => typeof t == "function" && fo.has(t);
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
const hr = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, Ts = (t, e, i = null) => {
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
const Ge = {}, fr = {};
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
const Wn = `{{lit-${String(Math.random()).slice(2)}}}`, Ds = `<!--${Wn}-->`, zs = "$lit$", Rs = (t) => t.index !== -1, di = () => document.createComment(""), Os = (
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
class br {
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
    const e = hr ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), i = [], n = this.template.parts, r = document.createTreeWalker(e, 133, null, !1);
    let o = 0, a = 0, d, c = r.nextNode();
    for (; o < n.length; ) {
      if (d = n[o], !Rs(d)) {
        this.__parts.push(void 0), o++;
        continue;
      }
      for (; a < d.index; )
        a++, c.nodeName === "TEMPLATE" && (i.push(c), r.currentNode = c.content), (c = r.nextNode()) === null && (r.currentNode = i.pop(), c = r.nextNode());
      if (d.type === "node") {
        const u = this.processor.handleTextExpression(this.options);
        u.insertAfterNode(c.previousSibling), this.__parts.push(u);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(c, d.name, d.strings, this.options));
      o++;
    }
    return hr && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const gr = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (t) => t }), Ps = ` ${Wn} `;
class Ms {
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
      const o = this.strings[r], a = o.lastIndexOf("<!--");
      n = (a > -1 || n) && o.indexOf("-->", a + 1) === -1;
      const d = Os.exec(o);
      d === null ? i += o + (n ? Ps : Ds) : i += o.substr(0, d.index) + d[1] + d[2] + zs + d[3] + Wn;
    }
    return i += this.strings[e], i;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let i = this.getHTML();
    return gr !== void 0 && (i = gr.createHTML(i)), e.innerHTML = i, e;
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
const Un = (t) => t === null || !(typeof t == "object" || typeof t == "function"), Vs = (t) => Array.isArray(t) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(t && t[Symbol.iterator]);
let ii = class {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== Ge && (!Un(e) || e !== this.value) && (this.value = e, gi(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; gi(this.value); ) {
      const e = this.value;
      this.value = Ge, e(this);
    }
    this.value !== Ge && this.committer.commit();
  }
};
class Mi {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(di()), this.endNode = e.appendChild(di());
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
    e.__insert(this.startNode = di()), e.__insert(this.endNode = di());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = di()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; gi(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = Ge, i(this);
    }
    const e = this.__pendingValue;
    e !== Ge && (Un(e) ? e !== this.value && this.__commitText(e) : e instanceof Ms ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : Vs(e) ? this.__commitIterable(e) : e === fr ? (this.value = fr, this.clear()) : this.__commitText(e));
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
    if (this.value instanceof br && this.value.template === i)
      this.value.update(e.values);
    else {
      const n = new br(i, e.processor, this.options), r = n._clone();
      n.update(e.values), this.__commitNode(r), this.value = n;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const i = this.value;
    let n = 0, r;
    for (const o of e)
      r = i[n], r === void 0 && (r = new Mi(this.options), i.push(r), n === 0 ? r.appendIntoPart(this) : r.insertAfterPart(i[n - 1])), r.setValue(o), r.commit(), n++;
    n < i.length && (i.length = n, this.clear(r && r.endNode));
  }
  clear(e = this.startNode) {
    Ts(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
let bo = class {
  constructor(e, i, n) {
    if (this.value = void 0, this.__pendingValue = void 0, n.length !== 2 || n[0] !== "" || n[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = i, this.strings = n;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; gi(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = Ge, i(this);
    }
    if (this.__pendingValue === Ge)
      return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = Ge;
  }
};
class vi extends ii {
}
let go = !1;
(() => {
  try {
    const t = {
      get capture() {
        return go = !0, !1;
      }
    };
    window.addEventListener("test", t, t), window.removeEventListener("test", t, t);
  } catch {
  }
})();
let xo = class {
  constructor(e, i, n) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = i, this.eventContext = n, this.__boundHandleEvent = (r) => this.handleEvent(r);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; gi(this.__pendingValue); ) {
      const o = this.__pendingValue;
      this.__pendingValue = Ge, o(this);
    }
    if (this.__pendingValue === Ge)
      return;
    const e = this.__pendingValue, i = this.value, n = e == null || i != null && (e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive), r = e != null && (i == null || n);
    n && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), r && (this.__options = Fs(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = Ge;
  }
  handleEvent(e) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
};
const Fs = (t) => t && (go ? { capture: t.capture, passive: t.passive, once: t.once } : t.capture);
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
var fn = function(t, e) {
  return fn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, n) {
    i.__proto__ = n;
  } || function(i, n) {
    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (i[r] = n[r]);
  }, fn(t, e);
};
function at(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  fn(t, e);
  function i() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
}
var re = function() {
  return re = Object.assign || function(e) {
    for (var i, n = 1, r = arguments.length; n < r; n++) {
      i = arguments[n];
      for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
    }
    return e;
  }, re.apply(this, arguments);
};
function p(t, e, i, n) {
  var r = arguments.length, o = r < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, i) : n, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(t, e, i, n);
  else for (var d = t.length - 1; d >= 0; d--) (a = t[d]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) : a(e, i)) || o);
  return r > 3 && o && Object.defineProperty(e, i, o), o;
}
function lt(t) {
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
function Bs(t, e) {
  var i = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return i.call(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const vo = (t) => t.nodeType === Node.ELEMENT_NODE;
function Vi(t) {
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
const yo = () => {
}, Hs = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", yo, Hs);
document.removeEventListener("x", yo);
const jn = (t = window.document) => {
  let e = t.activeElement;
  const i = [];
  if (!e)
    return i;
  for (; e && (i.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return i;
}, wo = (t) => {
  const e = jn();
  if (!e.length)
    return !1;
  const i = e[e.length - 1], n = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let r = [];
  const o = (a) => {
    r = a.composedPath();
  };
  return document.body.addEventListener("check-if-focused", o), i.dispatchEvent(n), document.body.removeEventListener("check-if-focused", o), r.indexOf(t) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Wt extends j {
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
var je = (
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
var qs = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Gs = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, xr = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function Ws(t, e, i) {
  if (!t)
    return { x: 0, y: 0 };
  var n = e.x, r = e.y, o = n + i.left, a = r + i.top, d, c;
  if (t.type === "touchstart") {
    var u = t;
    d = u.changedTouches[0].pageX - o, c = u.changedTouches[0].pageY - a;
  } else {
    var h = t;
    d = h.pageX - o, c = h.pageY - a;
  }
  return { x: d, y: c };
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
var vr = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], yr = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], _i = [], Us = (
  /** @class */
  function(t) {
    at(e, t);
    function e(i) {
      var n = t.call(this, re(re({}, e.defaultAdapter), i)) || this;
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
        return qs;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Gs;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return xr;
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
        var r = e.cssClasses, o = r.ROOT, a = r.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.addClass(o), i.adapter.isUnbounded() && (i.adapter.addClass(a), i.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var i = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var n = e.cssClasses, r = n.ROOT, o = n.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.removeClass(r), i.adapter.removeClass(o), i.removeCssVars();
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
          for (var o = lt(vr), a = o.next(); !a.done; a = o.next()) {
            var d = a.value;
            this.adapter.registerInteractionHandler(d, this.activateHandler);
          }
        } catch (c) {
          n = { error: c };
        } finally {
          try {
            a && !a.done && (r = o.return) && r.call(o);
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
          for (var o = lt(yr), a = o.next(); !a.done; a = o.next()) {
            var d = a.value;
            this.adapter.registerDocumentInteractionHandler(d, this.deactivateHandler);
          }
        } catch (c) {
          n = { error: c };
        } finally {
          try {
            a && !a.done && (r = o.return) && r.call(o);
          } finally {
            if (n) throw n.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var i, n;
      try {
        for (var r = lt(vr), o = r.next(); !o.done; o = r.next()) {
          var a = o.value;
          this.adapter.deregisterInteractionHandler(a, this.activateHandler);
        }
      } catch (d) {
        i = { error: d };
      } finally {
        try {
          o && !o.done && (n = r.return) && n.call(r);
        } finally {
          if (i) throw i.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var i, n;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var r = lt(yr), o = r.next(); !o.done; o = r.next()) {
          var a = o.value;
          this.adapter.deregisterDocumentInteractionHandler(a, this.deactivateHandler);
        }
      } catch (d) {
        i = { error: d };
      } finally {
        try {
          o && !o.done && (n = r.return) && n.call(r);
        } finally {
          if (i) throw i.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var i = this, n = e.strings, r = Object.keys(n);
      r.forEach(function(o) {
        o.indexOf("VAR_") === 0 && i.adapter.updateCssVariable(n[o], null);
      });
    }, e.prototype.activateImpl = function(i) {
      var n = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var r = this.activationState;
        if (!r.isActivated) {
          var o = this.previousActivationEvent, a = o && i !== void 0 && o.type !== i.type;
          if (!a) {
            r.isActivated = !0, r.isProgrammatic = i === void 0, r.activationEvent = i, r.wasActivatedByPointer = r.isProgrammatic ? !1 : i !== void 0 && (i.type === "mousedown" || i.type === "touchstart" || i.type === "pointerdown");
            var d = i !== void 0 && _i.length > 0 && _i.some(function(c) {
              return n.adapter.containsEventTarget(c);
            });
            if (d) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (_i.push(i.target), this.registerDeactivationHandlers(i)), r.wasElementMadeActive = this.checkElementMadeActive(i), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              _i = [], !r.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (r.wasElementMadeActive = n.checkElementMadeActive(i), r.wasElementMadeActive && n.animateActivation()), r.wasElementMadeActive || (n.activationState = n.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var i = this, n = e.strings, r = n.VAR_FG_TRANSLATE_START, o = n.VAR_FG_TRANSLATE_END, a = e.cssClasses, d = a.FG_DEACTIVATION, c = a.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var h = "", b = "";
      if (!this.adapter.isUnbounded()) {
        var g = this.getFgTranslationCoordinates(), v = g.startPoint, y = g.endPoint;
        h = v.x + "px, " + v.y + "px", b = y.x + "px, " + y.y + "px";
      }
      this.adapter.updateCssVariable(r, h), this.adapter.updateCssVariable(o, b), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(d), this.adapter.computeBoundingRect(), this.adapter.addClass(c), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, n = i.activationEvent, r = i.wasActivatedByPointer, o;
      r ? o = Ws(n, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : o = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, o = {
        x: o.x - this.initialSize / 2,
        y: o.y - this.initialSize / 2
      };
      var a = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: o, endPoint: a };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var i = this, n = e.cssClasses.FG_DEACTIVATION, r = this.activationState, o = r.hasDeactivationUXRun, a = r.isActivated, d = o || !a;
      d && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(n), this.fgDeactivationRemovalTimer = setTimeout(function() {
        i.adapter.removeClass(n);
      }, xr.FG_DEACTIVATION_MS));
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
        var r = re({}, n);
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
        var a = Math.sqrt(Math.pow(i.frame.width, 2) + Math.pow(i.frame.height, 2));
        return a + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? n : r();
      var o = Math.floor(n * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && o % 2 !== 0 ? this.initialSize = o - 1 : this.initialSize = o, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var i = e.strings, n = i.VAR_FG_SIZE, r = i.VAR_LEFT, o = i.VAR_TOP, a = i.VAR_FG_SCALE;
      this.adapter.updateCssVariable(n, this.initialSize + "px"), this.adapter.updateCssVariable(a, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(r, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(o, this.unboundedCoords.top + "px"));
    }, e;
  }(je)
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
class js {
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
const wr = /* @__PURE__ */ new WeakMap(), ne = ti((t) => (e) => {
  if (!(e instanceof ii) || e instanceof vi || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = e, { element: n } = i;
  let r = wr.get(e);
  r === void 0 && (n.setAttribute("class", i.strings.join(" ")), wr.set(e, r = /* @__PURE__ */ new Set()));
  const o = n.classList || new js(n);
  r.forEach((a) => {
    a in t || (o.remove(a), r.delete(a));
  });
  for (const a in t) {
    const d = t[a];
    d != r.has(a) && (d ? (o.add(a), r.add(a)) : (o.remove(a), r.delete(a)));
  }
  typeof o.commit == "function" && o.commit();
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
const Ar = /* @__PURE__ */ new WeakMap(), Ao = ti((t) => (e) => {
  if (!(e instanceof ii) || e instanceof vi || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = e, { style: n } = i.element;
  let r = Ar.get(e);
  r === void 0 && (n.cssText = i.strings.join(" "), Ar.set(e, r = /* @__PURE__ */ new Set())), r.forEach((o) => {
    o in t || (r.delete(o), o.indexOf("-") === -1 ? n[o] = null : n.removeProperty(o));
  });
  for (const o in t)
    r.add(o), o.indexOf("-") === -1 ? n[o] = t[o] : n.setProperty(o, t[o]);
});
class he extends Wt {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Us;
  }
  get isActive() {
    return Bs(this.parentElement || this, ":active");
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
          style="${Ao({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
p([
  w(".mdc-ripple-surface")
], he.prototype, "mdcRoot", void 0);
p([
  m({ type: Boolean })
], he.prototype, "primary", void 0);
p([
  m({ type: Boolean })
], he.prototype, "accent", void 0);
p([
  m({ type: Boolean })
], he.prototype, "unbounded", void 0);
p([
  m({ type: Boolean })
], he.prototype, "disabled", void 0);
p([
  m({ type: Boolean })
], he.prototype, "activated", void 0);
p([
  m({ type: Boolean })
], he.prototype, "selected", void 0);
p([
  m({ type: Boolean })
], he.prototype, "internalUseStateLayerCustomProperties", void 0);
p([
  I()
], he.prototype, "hovering", void 0);
p([
  I()
], he.prototype, "bgFocused", void 0);
p([
  I()
], he.prototype, "fgActivation", void 0);
p([
  I()
], he.prototype, "fgDeactivation", void 0);
p([
  I()
], he.prototype, "fgScale", void 0);
p([
  I()
], he.prototype, "fgSize", void 0);
p([
  I()
], he.prototype, "translateStart", void 0);
p([
  I()
], he.prototype, "translateEnd", void 0);
p([
  I()
], he.prototype, "leftPos", void 0);
p([
  I()
], he.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ks = V`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let bn = class extends he {
};
bn.styles = [Ks];
bn = p([
  R("mwc-ripple")
], bn);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ut {
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
class Le extends j {
  constructor() {
    super(...arguments), this.mini = !1, this.exited = !1, this.disabled = !1, this.extended = !1, this.showIconAtEnd = !1, this.reducedTouchTarget = !1, this.icon = "", this.label = "", this.shouldRenderRipple = !1, this.useStateLayerCustomProperties = !1, this.rippleHandlers = new Ut(() => (this.shouldRenderRipple = !0, this.ripple));
  }
  /**
   * @soyTemplate
   * @soyClasses fabClasses: .mdc-fab
   */
  render() {
    const e = this.mini && !this.reducedTouchTarget, i = {
      "mdc-fab--mini": this.mini,
      "mdc-fab--touch": e,
      "mdc-fab--exited": this.exited,
      "mdc-fab--extended": this.extended,
      "icon-end": this.showIconAtEnd
    }, n = this.label ? this.label : this.icon;
    return s`<button
          class="mdc-fab ${ne(i)}"
          ?disabled="${this.disabled}"
          aria-label="${n}"
          @mouseenter=${this.handleRippleMouseEnter}
          @mouseleave=${this.handleRippleMouseLeave}
          @focus=${this.handleRippleFocus}
          @blur=${this.handleRippleBlur}
          @mousedown=${this.handleRippleActivate}
          @touchstart=${this.handleRippleStartPress}
          @touchend=${this.handleRippleDeactivate}
          @touchcancel=${this.handleRippleDeactivate}><!--
        -->${this.renderBeforeRipple()}<!--
        -->${this.renderRipple()}<!--
        -->${this.showIconAtEnd ? this.renderLabel() : ""}<!--
        --><span class="material-icons mdc-fab__icon"><!--
          --><slot name="icon">${this.icon}</slot><!--
       --></span><!--
        -->${this.showIconAtEnd ? "" : this.renderLabel()}<!--
        -->${this.renderTouchTarget()}<!--
      --></button>`;
  }
  /** @soyTemplate */
  renderIcon() {
    return s``;
  }
  /** @soyTemplate */
  renderTouchTarget() {
    const e = this.mini && !this.reducedTouchTarget;
    return s`${e ? s`<div class="mdc-fab__touch"></div>` : ""}`;
  }
  /** @soyTemplate */
  renderLabel() {
    const e = this.label !== "" && this.extended;
    return s`${e ? s`<span class="mdc-fab__label">${this.label}</span>` : ""}`;
  }
  /** @soyTemplate */
  renderBeforeRipple() {
    return s``;
  }
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? s`<mwc-ripple class="ripple"
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
         ></mwc-ripple>` : "";
  }
  handleRippleActivate(e) {
    const i = () => {
      window.removeEventListener("mouseup", i), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", i), this.handleRippleStartPress(e);
  }
  handleRippleStartPress(e) {
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
Le.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
p([
  Gt("mwc-ripple")
], Le.prototype, "ripple", void 0);
p([
  m({ type: Boolean })
], Le.prototype, "mini", void 0);
p([
  m({ type: Boolean })
], Le.prototype, "exited", void 0);
p([
  m({ type: Boolean })
], Le.prototype, "disabled", void 0);
p([
  m({ type: Boolean })
], Le.prototype, "extended", void 0);
p([
  m({ type: Boolean })
], Le.prototype, "showIconAtEnd", void 0);
p([
  m({ type: Boolean })
], Le.prototype, "reducedTouchTarget", void 0);
p([
  m()
], Le.prototype, "icon", void 0);
p([
  m()
], Le.prototype, "label", void 0);
p([
  I()
], Le.prototype, "shouldRenderRipple", void 0);
p([
  I()
], Le.prototype, "useStateLayerCustomProperties", void 0);
p([
  Ue({ passive: !0 })
], Le.prototype, "handleRippleStartPress", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Xs = V`:host .mdc-fab .material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{outline:none;--mdc-ripple-color: currentcolor;user-select:none;-webkit-tap-highlight-color:transparent;display:inline-flex;-webkit-tap-highlight-color:transparent;display:inline-flex;outline:none;user-select:none}:host .mdc-touch-target-wrapper{display:inline}:host .mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}:host .mdc-fab{position:relative;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host .mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}:host .mdc-fab::-moz-focus-inner{padding:0;border:0}:host .mdc-fab:hover{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}:host .mdc-fab.mdc-ripple-upgraded--background-focused,:host .mdc-fab:not(.mdc-ripple-upgraded):focus{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}:host .mdc-fab:active,:host .mdc-fab:focus:active{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0,0,0,.12)}:host .mdc-fab:active,:host .mdc-fab:focus{outline:none}:host .mdc-fab:hover{cursor:pointer}:host .mdc-fab>svg{width:100%}:host .mdc-fab--mini{width:40px;height:40px}:host .mdc-fab--extended{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);border-radius:24px;padding-left:20px;padding-right:20px;width:auto;max-width:100%;height:48px;line-height:normal}:host .mdc-fab--extended .mdc-fab__ripple{border-radius:24px}:host .mdc-fab--extended .mdc-fab__icon{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] :host .mdc-fab--extended .mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}:host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] :host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}:host .mdc-fab--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}:host .mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}:host .mdc-fab::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}:host .mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}:host .mdc-fab__icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}:host .mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}:host .mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}:host .mdc-fab .mdc-fab__icon{width:24px;height:24px;font-size:24px}:host .mdc-fab,:host .mdc-fab:not(:disabled) .mdc-fab__icon,:host .mdc-fab:not(:disabled) .mdc-fab__label,:host .mdc-fab:disabled .mdc-fab__icon,:host .mdc-fab:disabled .mdc-fab__label{color:#fff;color:var(--mdc-theme-on-secondary, #fff)}:host .mdc-fab:not(.mdc-fab--extended){border-radius:50%}:host .mdc-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:50%}:host .mdc-fab{position:relative;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host .mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}:host .mdc-fab::-moz-focus-inner{padding:0;border:0}:host .mdc-fab:hover{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}:host .mdc-fab.mdc-ripple-upgraded--background-focused,:host .mdc-fab:not(.mdc-ripple-upgraded):focus{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}:host .mdc-fab:active,:host .mdc-fab:focus:active{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0,0,0,.12)}:host .mdc-fab:active,:host .mdc-fab:focus{outline:none}:host .mdc-fab:hover{cursor:pointer}:host .mdc-fab>svg{width:100%}:host .mdc-fab--mini{width:40px;height:40px}:host .mdc-fab--extended{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);border-radius:24px;padding-left:20px;padding-right:20px;width:auto;max-width:100%;height:48px;line-height:normal}:host .mdc-fab--extended .mdc-fab__ripple{border-radius:24px}:host .mdc-fab--extended .mdc-fab__icon{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] :host .mdc-fab--extended .mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}:host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] :host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}:host .mdc-fab--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}:host .mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}:host .mdc-fab::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}:host .mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}:host .mdc-fab__icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}:host .mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}:host .mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab .ripple{overflow:hidden}:host .mdc-fab:not(.mdc-fab--extended) .ripple{border-radius:50%}:host .mdc-fab .mdc-fab__label{z-index:0}:host .mdc-fab:not(.mdc-fab--extended) .ripple{border-radius:50%}:host .mdc-fab .mdc-fab__icon ::slotted(*){width:inherit;height:inherit;font-size:inherit}:host .mdc-fab--extended.mdc-fab--exited .mdc-fab__icon ::slotted(*){transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab{padding-top:0px;padding-top:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-right:0px;padding-right:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-bottom:0px;padding-bottom:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-left:0px;padding-left:max(0px, var(--mdc-fab-focus-outline-width, 0px));box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-fab-box-shadow, 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12))}:host .mdc-fab:not(:disabled).mdc-ripple-upgraded--background-focused,:host .mdc-fab:not(:disabled):not(.mdc-ripple-upgraded):focus{border-color:initial;border-color:var(--mdc-fab-focus-outline-color, initial)}:host .mdc-fab:not(:disabled).mdc-ripple-upgraded--background-focused,:host .mdc-fab:not(:disabled):not(.mdc-ripple-upgraded):focus{border-style:solid;border-width:var(--mdc-fab-focus-outline-width, 0px);padding-top:0px;padding-top:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-right:0px;padding-right:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-bottom:0px;padding-bottom:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-left:0px;padding-left:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1))}:host .mdc-fab:hover,:host .mdc-fab:focus{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-fab-box-shadow, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}:host .mdc-fab:active{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-fab-box-shadow, 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12))}:host .mdc-fab .ripple{overflow:hidden}:host .mdc-fab .mdc-fab__label{z-index:0}:host .mdc-fab:not(.mdc-fab--extended) .ripple{border-radius:50%}:host .mdc-fab.mdc-fab--extended .ripple{border-radius:24px}:host .mdc-fab .mdc-fab__icon{width:24px;width:var(--mdc-icon-size, 24px);height:24px;height:var(--mdc-icon-size, 24px);font-size:24px;font-size:var(--mdc-icon-size, 24px);transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform;display:inline-flex;align-items:center;justify-content:center}:host .mdc-fab.mdc-fab--extended{padding-top:0px;padding-top:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-right:20px;padding-right:max(var(--mdc-fab-extended-label-padding, 20px), var(--mdc-fab-focus-outline-width, 0px));padding-bottom:0px;padding-bottom:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-left:20px;padding-left:max(var(--mdc-fab-extended-label-padding, 20px), var(--mdc-fab-focus-outline-width, 0px))}:host .mdc-fab.mdc-fab--extended:not(:disabled).mdc-ripple-upgraded--background-focused,:host .mdc-fab.mdc-fab--extended:not(:disabled):not(.mdc-ripple-upgraded):focus{border-style:solid;border-width:var(--mdc-fab-focus-outline-width, 0px);padding-top:0px;padding-top:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-right:20px;padding-right:max(calc(var(--mdc-fab-extended-label-padding, 20px) - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(var(--mdc-fab-extended-label-padding, 20px) - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-bottom:0px;padding-bottom:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-left:20px;padding-left:max(calc(var(--mdc-fab-extended-label-padding, 20px) - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(var(--mdc-fab-extended-label-padding, 20px) - var(--mdc-fab-focus-outline-width, 0px)) * -1))}:host .mdc-fab.mdc-fab--extended.icon-end .mdc-fab__icon{margin-left:12px;margin-left:var(--mdc-fab-extended-icon-padding, 12px);margin-right:calc(12px - 20px);margin-right:calc(var(--mdc-fab-extended-icon-padding, 12px) - var(--mdc-fab-extended-label-padding, 20px))}[dir=rtl] :host .mdc-fab.mdc-fab--extended.icon-end .mdc-fab__icon,:host .mdc-fab.mdc-fab--extended.icon-end .mdc-fab__icon[dir=rtl]{margin-left:calc(12px - 20px);margin-left:calc(var(--mdc-fab-extended-icon-padding, 12px) - var(--mdc-fab-extended-label-padding, 20px));margin-right:12px;margin-right:var(--mdc-fab-extended-icon-padding, 12px)}`;
let gn = class extends Le {
};
gn.styles = [Xs];
gn = p([
  R("mwc-fab")
], gn);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Zs(t, e, i) {
  const n = t.constructor;
  if (!i) {
    const d = `__${e}`;
    if (i = n.getPropertyDescriptor(e, d), !i)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const r = i;
  let o = "";
  if (!r.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const a = {
    configurable: !0,
    enumerable: !0,
    set(d) {
      o === "" && (o = n.getPropertyOptions(e).attribute), this.hasAttribute(o) && this.removeAttribute(o), r.set.call(this, d);
    }
  };
  return r.get && (a.get = function() {
    return r.get.call(this);
  }), a;
}
function jt(t, e, i) {
  if (e !== void 0)
    return Zs(t, e, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
class mt extends j {
  constructor() {
    super(...arguments), this.disabled = !1, this.icon = "", this.shouldRenderRipple = !1, this.rippleHandlers = new Ut(() => (this.shouldRenderRipple = !0, this.ripple));
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
p([
  m({ type: Boolean, reflect: !0 })
], mt.prototype, "disabled", void 0);
p([
  m({ type: String })
], mt.prototype, "icon", void 0);
p([
  jt,
  m({ type: String, attribute: "aria-label" })
], mt.prototype, "ariaLabel", void 0);
p([
  w("button")
], mt.prototype, "buttonElement", void 0);
p([
  Gt("mwc-ripple")
], mt.prototype, "ripple", void 0);
p([
  I()
], mt.prototype, "shouldRenderRipple", void 0);
p([
  Ue({ passive: !0 })
], mt.prototype, "handleRippleMouseDown", null);
p([
  Ue({ passive: !0 })
], mt.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const _o = V`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button--touch{margin-top:0px;margin-bottom:0px}:host{display:inline-block;outline:none;--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host([disabled]){pointer-events:none}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button>i{position:absolute;top:0;padding-top:inherit}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let xn = class extends mt {
};
xn.styles = [_o];
xn = p([
  R("mwc-icon-button")
], xn);
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
const Ji = /* @__PURE__ */ new WeakMap(), U = ti((t) => (e) => {
  const i = Ji.get(e);
  if (t === void 0 && e instanceof ii) {
    if (i !== void 0 || !Ji.has(e)) {
      const n = e.committer.name;
      e.committer.element.removeAttribute(n);
    }
  } else t !== i && e.setValue(t);
  Ji.set(e, t);
});
class Re extends j {
  constructor() {
    super(...arguments), this.disabled = !1, this.onIcon = "", this.offIcon = "", this.on = !1, this.shouldRenderRipple = !1, this.rippleHandlers = new Ut(() => (this.shouldRenderRipple = !0, this.ripple));
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
          aria-pressed="${U(n)}"
          aria-label="${U(r)}"
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
p([
  w(".mdc-icon-button")
], Re.prototype, "mdcRoot", void 0);
p([
  jt,
  m({ type: String, attribute: "aria-label" })
], Re.prototype, "ariaLabel", void 0);
p([
  m({ type: Boolean, reflect: !0 })
], Re.prototype, "disabled", void 0);
p([
  m({ type: String })
], Re.prototype, "onIcon", void 0);
p([
  m({ type: String })
], Re.prototype, "offIcon", void 0);
p([
  m({ type: String })
], Re.prototype, "ariaLabelOn", void 0);
p([
  m({ type: String })
], Re.prototype, "ariaLabelOff", void 0);
p([
  m({ type: Boolean, reflect: !0 })
], Re.prototype, "on", void 0);
p([
  Gt("mwc-ripple")
], Re.prototype, "ripple", void 0);
p([
  I()
], Re.prototype, "shouldRenderRipple", void 0);
p([
  Ue({ passive: !0 })
], Re.prototype, "handleRippleMouseDown", null);
p([
  Ue({ passive: !0 })
], Re.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let vn = class extends Re {
};
vn.styles = [_o];
vn = p([
  R("mwc-icon-button-toggle")
], vn);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ys = V`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;
let yn = class extends j {
  /** @soyTemplate */
  render() {
    return s`<slot></slot>`;
  }
};
yn.styles = [Ys];
yn = p([
  R("mwc-icon")
], yn);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Z = (t) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e, i) => {
    if (e.constructor._observers) {
      if (!e.constructor.hasOwnProperty("_observers")) {
        const n = e.constructor._observers;
        e.constructor._observers = /* @__PURE__ */ new Map(), n.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (r, o) => e.constructor._observers.set(o, r)
        );
      }
    } else {
      e.constructor._observers = /* @__PURE__ */ new Map();
      const n = e.updated;
      e.updated = function(r) {
        n.call(this, r), r.forEach((o, a) => {
          const c = this.constructor._observers.get(a);
          c !== void 0 && c.call(this, this[a], o);
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
class xe extends j {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new Ut(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
p([
  w("slot")
], xe.prototype, "slotElement", void 0);
p([
  Gt("mwc-ripple")
], xe.prototype, "ripple", void 0);
p([
  m({ type: String })
], xe.prototype, "value", void 0);
p([
  m({ type: String, reflect: !0 })
], xe.prototype, "group", void 0);
p([
  m({ type: Number, reflect: !0 })
], xe.prototype, "tabindex", void 0);
p([
  m({ type: Boolean, reflect: !0 }),
  Z(function(t) {
    t ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], xe.prototype, "disabled", void 0);
p([
  m({ type: Boolean, reflect: !0 })
], xe.prototype, "twoline", void 0);
p([
  m({ type: Boolean, reflect: !0 })
], xe.prototype, "activated", void 0);
p([
  m({ type: String, reflect: !0 })
], xe.prototype, "graphic", void 0);
p([
  m({ type: Boolean })
], xe.prototype, "multipleGraphics", void 0);
p([
  m({ type: Boolean })
], xe.prototype, "hasMeta", void 0);
p([
  m({ type: Boolean, reflect: !0 }),
  Z(function(t) {
    t ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], xe.prototype, "noninteractive", void 0);
p([
  m({ type: Boolean, reflect: !0 }),
  Z(function(t) {
    const e = this.getAttribute("role"), i = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (i && t ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(t, "property");
  })
], xe.prototype, "selected", void 0);
p([
  I()
], xe.prototype, "shouldRenderRipple", void 0);
p([
  I()
], xe.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Eo = V`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let wn = class extends xe {
};
wn.styles = [Eo];
wn = p([
  R("mwc-list-item")
], wn);
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
var z = {
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
}, $e = /* @__PURE__ */ new Set();
$e.add(z.BACKSPACE);
$e.add(z.ENTER);
$e.add(z.SPACEBAR);
$e.add(z.PAGE_UP);
$e.add(z.PAGE_DOWN);
$e.add(z.END);
$e.add(z.HOME);
$e.add(z.ARROW_LEFT);
$e.add(z.ARROW_UP);
$e.add(z.ARROW_RIGHT);
$e.add(z.ARROW_DOWN);
$e.add(z.DELETE);
$e.add(z.ESCAPE);
$e.add(z.TAB);
var Te = {
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
}, Ie = /* @__PURE__ */ new Map();
Ie.set(Te.BACKSPACE, z.BACKSPACE);
Ie.set(Te.ENTER, z.ENTER);
Ie.set(Te.SPACEBAR, z.SPACEBAR);
Ie.set(Te.PAGE_UP, z.PAGE_UP);
Ie.set(Te.PAGE_DOWN, z.PAGE_DOWN);
Ie.set(Te.END, z.END);
Ie.set(Te.HOME, z.HOME);
Ie.set(Te.ARROW_LEFT, z.ARROW_LEFT);
Ie.set(Te.ARROW_UP, z.ARROW_UP);
Ie.set(Te.ARROW_RIGHT, z.ARROW_RIGHT);
Ie.set(Te.ARROW_DOWN, z.ARROW_DOWN);
Ie.set(Te.DELETE, z.DELETE);
Ie.set(Te.ESCAPE, z.ESCAPE);
Ie.set(Te.TAB, z.TAB);
var wt = /* @__PURE__ */ new Set();
wt.add(z.PAGE_UP);
wt.add(z.PAGE_DOWN);
wt.add(z.END);
wt.add(z.HOME);
wt.add(z.ARROW_LEFT);
wt.add(z.ARROW_UP);
wt.add(z.ARROW_RIGHT);
wt.add(z.ARROW_DOWN);
function oe(t) {
  var e = t.key;
  if ($e.has(e))
    return e;
  var i = Ie.get(t.keyCode);
  return i || z.UNKNOWN;
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
var ft, st, X = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
ft = {}, ft["" + X.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", ft["" + X.LIST_ITEM_CLASS] = "mdc-list-item", ft["" + X.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", ft["" + X.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", ft["" + X.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", ft["" + X.ROOT] = "mdc-list";
var Qt = (st = {}, st["" + X.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", st["" + X.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", st["" + X.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", st["" + X.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", st["" + X.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", st["" + X.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", st["" + X.ROOT] = "mdc-deprecated-list", st), Ei = {
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
    .` + Qt[X.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Qt[X.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + X.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + X.LIST_ITEM_CLASS + ` a,
    .` + X.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + X.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Qt[X.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Qt[X.LIST_ITEM_CLASS] + ` a,
    .` + Qt[X.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Qt[X.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, _e = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const An = (t, e) => t - e, Qs = (t, e) => {
  const i = Array.from(t), n = Array.from(e), r = { added: [], removed: [] }, o = i.sort(An), a = n.sort(An);
  let d = 0, c = 0;
  for (; d < o.length || c < a.length; ) {
    const u = o[d], h = a[c];
    if (u === h) {
      d++, c++;
      continue;
    }
    if (u !== void 0 && (h === void 0 || u < h)) {
      r.removed.push(u), d++;
      continue;
    }
    if (h !== void 0 && (u === void 0 || h < u)) {
      r.added.push(h), c++;
      continue;
    }
  }
  return r;
}, Js = ["input", "button", "textarea", "select"];
function hi(t) {
  return t instanceof Set;
}
const en = (t) => {
  const e = t === _e.UNSET_INDEX ? /* @__PURE__ */ new Set() : t;
  return hi(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class Kn extends je {
  constructor(e) {
    super(Object.assign(Object.assign({}, Kn.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = _e.UNSET_INDEX, this.focusedItemIndex_ = _e.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return Ei;
  }
  static get numbers() {
    return _e;
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
      if (!hi(i)) {
        const n = i === _e.UNSET_INDEX;
        this.selectedIndex_ = n ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
    } else if (hi(i))
      if (i.size) {
        const n = Array.from(i).sort(An);
        this.selectedIndex_ = n[0];
      } else
        this.selectedIndex_ = _e.UNSET_INDEX;
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
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(en(e)) : this.setSingleSelectionAtIndex_(e));
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
    const r = oe(e) === "ArrowLeft", o = oe(e) === "ArrowUp", a = oe(e) === "ArrowRight", d = oe(e) === "ArrowDown", c = oe(e) === "Home", u = oe(e) === "End", h = oe(e) === "Enter", b = oe(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      o || u ? (e.preventDefault(), this.focusLastElement()) : (d || c) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let g = this.adapter.getFocusedElementIndex();
    if (g === -1 && (g = n, g < 0))
      return;
    let v;
    if (this.isVertical_ && d || !this.isVertical_ && a)
      this.preventDefaultEvent(e), v = this.focusNextElement(g);
    else if (this.isVertical_ && o || !this.isVertical_ && r)
      this.preventDefaultEvent(e), v = this.focusPrevElement(g);
    else if (c)
      this.preventDefaultEvent(e), v = this.focusFirstElement();
    else if (u)
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
    e !== _e.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, i, n), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
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
    Js.indexOf(n) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, i = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== _e.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), i && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, i = !0) {
    const n = en(this.selectedIndex_), r = Qs(n, e);
    if (!(!r.removed.length && !r.added.length)) {
      for (const o of r.removed)
        i && this.adapter.setSelectedStateForElementIndex(o, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(o, !1);
      for (const o of r.added)
        i && this.adapter.setSelectedStateForElementIndex(o, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(o, !0);
      this.selectedIndex_ = e, this.adapter.notifySelected(e, r);
    }
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(e) {
    this.selectedIndex_ === _e.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, Ei.ARIA_CURRENT));
    const i = this.ariaCurrentAttrValue_ !== null, n = i ? Ei.ARIA_CURRENT : Ei.ARIA_SELECTED;
    this.selectedIndex_ !== _e.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, n, "false");
    const r = i ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, n, r);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === _e.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== _e.UNSET_INDEX ? e = this.selectedIndex_ : hi(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
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
      return e === _e.UNSET_INDEX || this.isIndexInRange_(e);
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
    this.isMulti_ && (r = /* @__PURE__ */ new Set([e])), this.isIndexValid_(r) && (this.isMulti_ ? this.toggleMultiAtIndex(e, n, i) : i || n ? this.setSingleSelectionAtIndex_(e, i) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(_e.UNSET_INDEX), i && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, i, n = !0) {
    let r = !1;
    i === void 0 ? r = !this.adapter.getSelectedStateForElementIndex(e) : r = i;
    const o = en(this.selectedIndex_);
    r ? o.add(e) : o.delete(e), this.setMultiSelectionAtIndex_(o, n);
  }
}
function el(t, e = 50) {
  let i;
  return function(n = !0) {
    clearTimeout(i), i = setTimeout(() => {
      t(n);
    }, e);
  };
}
const Si = (t) => t.hasAttribute("mwc-list-item");
function tl() {
  const t = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), t();
}
class Ne extends Wt {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = Kn, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = el(this.layout.bind(this));
    this.debouncedLayout = (i = !0) => {
      tl.call(this), e(i);
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
    for (const a of i)
      Si(a) && (n.push(a), a._managingList = this), a.hasAttribute("divider") && !a.hasAttribute("role") && a.setAttribute("role", "separator");
    this.items_ = n;
    const r = /* @__PURE__ */ new Set();
    if (this.items_.forEach((a, d) => {
      this.itemRoles ? a.setAttribute("role", this.itemRoles) : a.removeAttribute("role"), a.selected && r.add(d);
    }), this.multi)
      this.select(r);
    else {
      const a = r.size ? r.entries().next().value[1] : -1;
      this.select(a);
    }
    const o = new Event("items-updated", { bubbles: !0, composed: !0 });
    this.dispatchEvent(o);
  }
  get selected() {
    const e = this.index;
    if (!hi(e))
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
          role="${U(e)}"
          aria-label="${U(i)}"
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
      const i = this.getIndexOfTarget(e), n = e.target, r = Si(n);
      this.mdcFoundation.handleKeydown(e, r, i);
    }
  }
  onRequestSelected(e) {
    if (this.mdcFoundation) {
      let i = this.getIndexOfTarget(e);
      if (i === -1 && (this.layout(), i = this.getIndexOfTarget(e), i === -1) || this.items[i].disabled)
        return;
      const r = e.detail.selected, o = e.detail.source;
      this.mdcFoundation.handleSingleSelection(i, o === "interaction", r), e.stopPropagation();
    }
  }
  getIndexOfTarget(e) {
    const i = this.items, n = e.composedPath();
    for (const r of n) {
      let o = -1;
      if (vo(r) && Si(r) && (o = i.indexOf(r)), o !== -1)
        return o;
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
      isFocusInsideList: () => wo(this),
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
    const e = jn();
    if (!e.length)
      return -1;
    for (let i = e.length - 1; i >= 0; i--) {
      const n = e[i];
      if (Si(n))
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
p([
  m({ type: String })
], Ne.prototype, "emptyMessage", void 0);
p([
  w(".mdc-deprecated-list")
], Ne.prototype, "mdcRoot", void 0);
p([
  Bn("", !0, "*")
], Ne.prototype, "assignedElements", void 0);
p([
  Bn("", !0, '[tabindex="0"]')
], Ne.prototype, "tabbableElements", void 0);
p([
  m({ type: Boolean }),
  Z(function(t) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(t);
  })
], Ne.prototype, "activatable", void 0);
p([
  m({ type: Boolean }),
  Z(function(t, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(t), e !== void 0 && this.layout();
  })
], Ne.prototype, "multi", void 0);
p([
  m({ type: Boolean }),
  Z(function(t) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(t);
  })
], Ne.prototype, "wrapFocus", void 0);
p([
  m({ type: String }),
  Z(function(t, e) {
    e !== void 0 && this.updateItems();
  })
], Ne.prototype, "itemRoles", void 0);
p([
  m({ type: String })
], Ne.prototype, "innerRole", void 0);
p([
  m({ type: String })
], Ne.prototype, "innerAriaLabel", void 0);
p([
  m({ type: Boolean })
], Ne.prototype, "rootTabbable", void 0);
p([
  m({ type: Boolean, reflect: !0 }),
  Z(function(t) {
    var e, i;
    if (t) {
      const n = (i = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && i !== void 0 ? i : null;
      this.previousTabindex = n, n && n.setAttribute("tabindex", "-1");
    } else !t && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], Ne.prototype, "noninteractive", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const il = V`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let zi = class extends Ne {
};
zi.styles = [il];
zi = p([
  R("mwc-list")
], zi);
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
var nl = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, rl = {
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
}, Ci = {
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
var So = (
  /** @class */
  function(t) {
    at(e, t);
    function e(i) {
      var n = t.call(this, re(re({}, e.defaultAdapter), i)) || this;
      return n.isSurfaceOpen = !1, n.isQuickOpen = !1, n.isHoistedElement = !1, n.isFixedPosition = !1, n.isHorizontallyCenteredOnViewport = !1, n.maxHeight = 0, n.openAnimationEndTimerId = 0, n.closeAnimationEndTimerId = 0, n.animationRequestId = 0, n.anchorCorner = Ee.TOP_START, n.originCorner = Ee.TOP_START, n.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, n.position = { x: 0, y: 0 }, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return nl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return rl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ci;
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
        }, Ci.TRANSITION_OPEN_DURATION);
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
          }, Ci.TRANSITION_CLOSE_DURATION);
        }), this.isSurfaceOpen = !1, i || this.maybeRestoreFocus();
      }
    }, e.prototype.handleBodyClick = function(i) {
      var n = i.target;
      this.adapter.isElementInContainer(n) || this.close();
    }, e.prototype.handleKeydown = function(i) {
      var n = i.keyCode, r = i.key, o = r === "Escape" || n === 27;
      o && this.close();
    }, e.prototype.autoposition = function() {
      var i;
      this.measurements = this.getAutoLayoutmeasurements();
      var n = this.getoriginCorner(), r = this.getMenuSurfaceMaxHeight(n), o = this.hasBit(n, ie.BOTTOM) ? "bottom" : "top", a = this.hasBit(n, ie.RIGHT) ? "right" : "left", d = this.getHorizontalOriginOffset(n), c = this.getVerticalOriginOffset(n), u = this.measurements, h = u.anchorSize, b = u.surfaceSize, g = (i = {}, i[a] = d, i[o] = c, i);
      h.width / b.width > Ci.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (a = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(g), this.adapter.setTransformOrigin(a + " " + o), this.adapter.setPosition(g), this.adapter.setMaxHeight(r ? r + "px" : ""), this.hasBit(n, ie.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
    }, e.prototype.getAutoLayoutmeasurements = function() {
      var i = this.adapter.getAnchorDimensions(), n = this.adapter.getBodyDimensions(), r = this.adapter.getWindowDimensions(), o = this.adapter.getWindowScroll();
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
        windowScroll: o
      };
    }, e.prototype.getoriginCorner = function() {
      var i = this.originCorner, n = this.measurements, r = n.viewportDistance, o = n.anchorSize, a = n.surfaceSize, d = e.numbers.MARGIN_TO_EDGE, c = this.hasBit(this.anchorCorner, ie.BOTTOM), u, h;
      c ? (u = r.top - d + this.anchorMargin.bottom, h = r.bottom - d - this.anchorMargin.bottom) : (u = r.top - d + this.anchorMargin.top, h = r.bottom - d + o.height - this.anchorMargin.top);
      var b = h - a.height > 0;
      !b && u > h && (i = this.setBit(i, ie.BOTTOM));
      var g = this.adapter.isRtl(), v = this.hasBit(this.anchorCorner, ie.FLIP_RTL), y = this.hasBit(this.anchorCorner, ie.RIGHT) || this.hasBit(i, ie.RIGHT), E = !1;
      g && v ? E = !y : E = y;
      var k, A;
      E ? (k = r.left + o.width + this.anchorMargin.right, A = r.right - this.anchorMargin.right) : (k = r.left + this.anchorMargin.left, A = r.right + o.width - this.anchorMargin.left);
      var F = k - a.width > 0, W = A - a.width > 0, ee = this.hasBit(i, ie.FLIP_RTL) && this.hasBit(i, ie.RIGHT);
      return W && ee && g || !F && ee ? i = this.unsetBit(i, ie.RIGHT) : (F && E && g || F && !E && y || !W && k >= A) && (i = this.setBit(i, ie.RIGHT)), i;
    }, e.prototype.getMenuSurfaceMaxHeight = function(i) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var n = this.measurements.viewportDistance, r = 0, o = this.hasBit(i, ie.BOTTOM), a = this.hasBit(this.anchorCorner, ie.BOTTOM), d = e.numbers.MARGIN_TO_EDGE;
      return o ? (r = n.top + this.anchorMargin.top - d, a || (r += this.measurements.anchorSize.height)) : (r = n.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - d, a && (r -= this.measurements.anchorSize.height)), r;
    }, e.prototype.getHorizontalOriginOffset = function(i) {
      var n = this.measurements.anchorSize, r = this.hasBit(i, ie.RIGHT), o = this.hasBit(this.anchorCorner, ie.RIGHT);
      if (r) {
        var a = o ? n.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? a - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : a;
      }
      return o ? n.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(i) {
      var n = this.measurements.anchorSize, r = this.hasBit(i, ie.BOTTOM), o = this.hasBit(this.anchorCorner, ie.BOTTOM), a = 0;
      return r ? a = o ? n.height - this.anchorMargin.top : -this.anchorMargin.bottom : a = o ? n.height + this.anchorMargin.bottom : this.anchorMargin.top, a;
    }, e.prototype.adjustPositionForHoistedElement = function(i) {
      var n, r, o = this.measurements, a = o.windowScroll, d = o.viewportDistance, c = o.surfaceSize, u = o.viewportSize, h = Object.keys(i);
      try {
        for (var b = lt(h), g = b.next(); !g.done; g = b.next()) {
          var v = g.value, y = i[v] || 0;
          if (this.isHorizontallyCenteredOnViewport && (v === "left" || v === "right")) {
            i[v] = (u.width - c.width) / 2;
            continue;
          }
          y += d[v], this.isFixedPosition || (v === "top" ? y += a.y : v === "bottom" ? y -= a.y : v === "left" ? y += a.x : y -= a.x), i[v] = y;
        }
      } catch (E) {
        n = { error: E };
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
  }(je)
);
const ol = {
  TOP_LEFT: Ee.TOP_LEFT,
  TOP_RIGHT: Ee.TOP_RIGHT,
  BOTTOM_LEFT: Ee.BOTTOM_LEFT,
  BOTTOM_RIGHT: Ee.BOTTOM_RIGHT,
  TOP_START: Ee.TOP_START,
  TOP_END: Ee.TOP_END,
  BOTTOM_START: Ee.BOTTOM_START,
  BOTTOM_END: Ee.BOTTOM_END
};
class de extends Wt {
  constructor() {
    super(...arguments), this.mdcFoundationClass = So, this.absolute = !1, this.fullwidth = !1, this.fixed = !1, this.x = null, this.y = null, this.quick = !1, this.open = !1, this.stayOpenOnBodyClick = !1, this.bitwiseCorner = Ee.TOP_START, this.previousMenuCorner = null, this.menuCorner = "START", this.corner = "TOP_START", this.styleTop = "", this.styleLeft = "", this.styleRight = "", this.styleBottom = "", this.styleMaxHeight = "", this.styleTransformOrigin = "", this.anchor = null, this.previouslyFocused = null, this.previousAnchor = null, this.onBodyClickBound = () => {
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
          style="${Ao(i)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Vi(this.mdcRoot)), { hasAnchor: () => !!this.anchor, notifyClose: () => {
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
    }, isFocused: () => wo(this), saveFocus: () => {
      const e = jn(), i = e.length;
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
p([
  w(".mdc-menu-surface")
], de.prototype, "mdcRoot", void 0);
p([
  w("slot")
], de.prototype, "slotElement", void 0);
p([
  m({ type: Boolean }),
  Z(function(t) {
    this.mdcFoundation && !this.fixed && this.mdcFoundation.setIsHoisted(t);
  })
], de.prototype, "absolute", void 0);
p([
  m({ type: Boolean })
], de.prototype, "fullwidth", void 0);
p([
  m({ type: Boolean }),
  Z(function(t) {
    this.mdcFoundation && !this.absolute && this.mdcFoundation.setFixedPosition(t);
  })
], de.prototype, "fixed", void 0);
p([
  m({ type: Number }),
  Z(function(t) {
    this.mdcFoundation && this.y !== null && t !== null && (this.mdcFoundation.setAbsolutePosition(t, this.y), this.mdcFoundation.setAnchorMargin({ left: t, top: this.y, right: -t, bottom: this.y }));
  })
], de.prototype, "x", void 0);
p([
  m({ type: Number }),
  Z(function(t) {
    this.mdcFoundation && this.x !== null && t !== null && (this.mdcFoundation.setAbsolutePosition(this.x, t), this.mdcFoundation.setAnchorMargin({ left: this.x, top: t, right: -this.x, bottom: t }));
  })
], de.prototype, "y", void 0);
p([
  m({ type: Boolean }),
  Z(function(t) {
    this.mdcFoundation && this.mdcFoundation.setQuickOpen(t);
  })
], de.prototype, "quick", void 0);
p([
  m({ type: Boolean, reflect: !0 }),
  Z(function(t, e) {
    this.mdcFoundation && (t ? this.mdcFoundation.open() : e !== void 0 && this.mdcFoundation.close());
  })
], de.prototype, "open", void 0);
p([
  m({ type: Boolean })
], de.prototype, "stayOpenOnBodyClick", void 0);
p([
  I(),
  Z(function(t) {
    this.mdcFoundation && (t ? this.mdcFoundation.setAnchorCorner(t) : this.mdcFoundation.setAnchorCorner(t));
  })
], de.prototype, "bitwiseCorner", void 0);
p([
  m({ type: String }),
  Z(function(t) {
    if (this.mdcFoundation) {
      const e = t === "START" || t === "END", i = this.previousMenuCorner === null, n = !i && t !== this.previousMenuCorner;
      e && (n || i && t === "END") && (this.bitwiseCorner = this.bitwiseCorner ^ ie.RIGHT, this.mdcFoundation.flipCornerHorizontally(), this.previousMenuCorner = t);
    }
  })
], de.prototype, "menuCorner", void 0);
p([
  m({ type: String }),
  Z(function(t) {
    if (this.mdcFoundation && t) {
      let e = ol[t];
      this.menuCorner === "END" && (e = e ^ ie.RIGHT), this.bitwiseCorner = e;
    }
  })
], de.prototype, "corner", void 0);
p([
  I()
], de.prototype, "styleTop", void 0);
p([
  I()
], de.prototype, "styleLeft", void 0);
p([
  I()
], de.prototype, "styleRight", void 0);
p([
  I()
], de.prototype, "styleBottom", void 0);
p([
  I()
], de.prototype, "styleMaxHeight", void 0);
p([
  I()
], de.prototype, "styleTransformOrigin", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const al = V`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let _n = class extends de {
};
_n.styles = [al];
_n = p([
  R("mwc-menu-surface")
], _n);
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
var tn = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, ci = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected"
}, sl = {
  FOCUS_ROOT_INDEX: -1
}, Vt;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(Vt || (Vt = {}));
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
var ll = (
  /** @class */
  function(t) {
    at(e, t);
    function e(i) {
      var n = t.call(this, re(re({}, e.defaultAdapter), i)) || this;
      return n.closeAnimationEndTimerId = 0, n.defaultFocusState = Vt.LIST_ROOT, n.selectedIndex = -1, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return tn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ci;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return sl;
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
      var n = i.key, r = i.keyCode, o = n === "Tab" || r === 9;
      o && this.adapter.closeSurface(
        /** skipRestoreFocus */
        !0
      );
    }, e.prototype.handleItemAction = function(i) {
      var n = this, r = this.adapter.getElementIndex(i);
      r < 0 || (this.adapter.notifySelected({ index: r }), this.adapter.closeSurface(), this.closeAnimationEndTimerId = setTimeout(function() {
        var o = n.adapter.getElementIndex(i);
        o >= 0 && n.adapter.isSelectableItemAtIndex(o) && n.setSelectedIndex(o);
      }, So.numbers.TRANSITION_CLOSE_DURATION));
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Vt.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Vt.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Vt.NONE:
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
      n >= 0 && (this.adapter.removeAttributeFromElementAtIndex(n, ci.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(n, tn.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(i, tn.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(i, ci.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = i;
    }, e.prototype.setEnabled = function(i, n) {
      this.validatedIndex(i), n ? (this.adapter.removeClassFromElementAtIndex(i, X.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(i, ci.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(i, X.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(i, ci.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(i) {
      var n = this.adapter.getMenuItemCount(), r = i >= 0 && i < n;
      if (!r)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(je)
);
class ce extends Wt {
  constructor() {
    super(...arguments), this.mdcFoundationClass = ll, this.listElement_ = null, this.anchor = null, this.open = !1, this.quick = !1, this.wrapFocus = !1, this.innerRole = "menu", this.corner = "TOP_START", this.x = null, this.y = null, this.absolute = !1, this.multi = !1, this.activatable = !1, this.fixed = !1, this.forceGroupSelection = !1, this.fullwidth = !1, this.menuCorner = "START", this.stayOpenOnBodyClick = !1, this.defaultFocus = "LIST_ROOT", this._listUpdateComplete = null;
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
        const o = r.items[e];
        o && o.setAttribute(i, n);
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
          const o = i.items[r];
          if (o.selected && o.group === n.group)
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
p([
  w(".mdc-menu")
], ce.prototype, "mdcRoot", void 0);
p([
  w("slot")
], ce.prototype, "slotElement", void 0);
p([
  m({ type: Object })
], ce.prototype, "anchor", void 0);
p([
  m({ type: Boolean, reflect: !0 })
], ce.prototype, "open", void 0);
p([
  m({ type: Boolean })
], ce.prototype, "quick", void 0);
p([
  m({ type: Boolean })
], ce.prototype, "wrapFocus", void 0);
p([
  m({ type: String })
], ce.prototype, "innerRole", void 0);
p([
  m({ type: String })
], ce.prototype, "corner", void 0);
p([
  m({ type: Number })
], ce.prototype, "x", void 0);
p([
  m({ type: Number })
], ce.prototype, "y", void 0);
p([
  m({ type: Boolean })
], ce.prototype, "absolute", void 0);
p([
  m({ type: Boolean })
], ce.prototype, "multi", void 0);
p([
  m({ type: Boolean })
], ce.prototype, "activatable", void 0);
p([
  m({ type: Boolean })
], ce.prototype, "fixed", void 0);
p([
  m({ type: Boolean })
], ce.prototype, "forceGroupSelection", void 0);
p([
  m({ type: Boolean })
], ce.prototype, "fullwidth", void 0);
p([
  m({ type: String })
], ce.prototype, "menuCorner", void 0);
p([
  m({ type: Boolean })
], ce.prototype, "stayOpenOnBodyClick", void 0);
p([
  m({ type: String }),
  Z(function(t) {
    this.mdcFoundation && this.mdcFoundation.setDefaultFocusState(Vt[t]);
  })
], ce.prototype, "defaultFocus", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const dl = V`mwc-list ::slotted([mwc-list-item]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let En = class extends ce {
};
En.styles = [dl];
En = p([
  R("mwc-menu")
], En);
var cl = Object.defineProperty, ul = Object.getOwnPropertyDescriptor, ni = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? ul(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && cl(e, i, r), r;
};
let xt = class extends j {
  constructor() {
    super(...arguments), this.secondary = !1, this.highlighted = !1, this.hideActions = !1;
  }
  async firstUpdated() {
    this.tabIndex = 0;
  }
  renderIcon() {
    return s`<span>
      <slot name="icon"
        >${this.icon ? s`<mwc-icon>${this.icon}</mwc-icon>` : Me}</slot
      ></span
    > `;
  }
  render() {
    return s`<header>${this.label ?? Me}</header>
      <section>${this.renderIcon()}<slot name="action"></slot></section>
      <footer>${this.label ?? Me}</footer>`;
  }
};
xt.styles = V`
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
ni([
  m({ type: String })
], xt.prototype, "label", 2);
ni([
  m({ type: String })
], xt.prototype, "icon", 2);
ni([
  m({ type: Boolean })
], xt.prototype, "secondary", 2);
ni([
  m({ type: Boolean })
], xt.prototype, "highlighted", 2);
ni([
  m({ type: Boolean })
], xt.prototype, "hideActions", 2);
xt = ni([
  R("action-icon")
], xt);
var ml = Object.defineProperty, pl = Object.getOwnPropertyDescriptor, ri = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? pl(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && ml(e, i, r), r;
};
function Co(t, e) {
  const i = t.nodeType === Node.ELEMENT_NODE ? t.closest(e) : null;
  if (i) return i;
  const n = t.getRootNode();
  return n instanceof ShadowRoot ? Co(n.host, e) : null;
}
let vt = class extends j {
  constructor() {
    super(...arguments), this.secondary = !1, this.highlighted = !1, this.level = 1;
  }
  async firstUpdated() {
    this.tabIndex = 0;
    const t = Co(this.parentNode, "action-pane");
    t && (this.level = t.level + 1), this.level = Math.floor(this.level);
  }
  renderHeader() {
    const t = s`<span
        ><slot name="icon"
          >${this.icon ? s`<mwc-icon>${this.icon}</mwc-icon>` : Me}</slot
        ></span
      >
      ${this.label ?? Me}
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
vt.styles = V`
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
ri([
  m({ type: String })
], vt.prototype, "label", 2);
ri([
  m({ type: String })
], vt.prototype, "icon", 2);
ri([
  m({ type: Boolean })
], vt.prototype, "secondary", 2);
ri([
  m({ type: Boolean })
], vt.prototype, "highlighted", 2);
ri([
  m({ type: Number })
], vt.prototype, "level", 2);
vt = ri([
  R("action-pane")
], vt);
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
var hl = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, _r = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, fl = {
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
var bl = (
  /** @class */
  function(t) {
    at(e, t);
    function e(i) {
      return t.call(this, re(re({}, e.defaultAdapter), i)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return hl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return fl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return _r;
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
      i > 0 && (i += _r.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(i), this.adapter.addClass(n);
    }, e.prototype.closeNotch = function() {
      var i = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(i), this.adapter.removeNotchWidthProperty();
    }, e;
  }(je)
);
class yi extends Wt {
  constructor() {
    super(...arguments), this.mdcFoundationClass = bl, this.width = 0, this.open = !1, this.lastOpen = this.open;
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
p([
  w(".mdc-notched-outline")
], yi.prototype, "mdcRoot", void 0);
p([
  m({ type: Number })
], yi.prototype, "width", void 0);
p([
  m({ type: Boolean, reflect: !0 })
], yi.prototype, "open", void 0);
p([
  w(".mdc-notched-outline__notch")
], yi.prototype, "notchElement", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const gl = V`.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host([dir=rtl]){text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`;
let Sn = class extends yi {
};
Sn.styles = [gl];
Sn = p([
  R("mwc-notched-outline")
], Sn);
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
var xl = ["input", "button", "textarea", "select"], Er = function(t) {
  var e = t.target;
  if (e) {
    var i = ("" + e.tagName).toLowerCase();
    xl.indexOf(i) === -1 && t.preventDefault();
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
function vl() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function Sr(t, e) {
  for (var i = /* @__PURE__ */ new Map(), n = 0; n < t; n++) {
    var r = e(n).trim();
    if (r) {
      var o = r[0].toLowerCase();
      i.has(o) || i.set(o, []), i.get(o).push({ text: r.toLowerCase(), index: n });
    }
  }
  return i.forEach(function(a) {
    a.sort(function(d, c) {
      return d.index - c.index;
    });
  }), i;
}
function Cn(t, e) {
  var i = t.nextChar, n = t.focusItemAtIndex, r = t.sortedIndexByFirstChar, o = t.focusedItemIndex, a = t.skipFocus, d = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    Al(e);
  }, _e.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + i;
  var c;
  return e.typeaheadBuffer.length === 1 ? c = yl(r, o, d, e) : c = wl(r, d, e), c !== -1 && !a && n(c), c;
}
function yl(t, e, i, n) {
  var r = n.typeaheadBuffer[0], o = t.get(r);
  if (!o)
    return -1;
  if (r === n.currentFirstChar && o[n.sortedIndexCursor].index === e) {
    n.sortedIndexCursor = (n.sortedIndexCursor + 1) % o.length;
    var a = o[n.sortedIndexCursor].index;
    if (!i(a))
      return a;
  }
  n.currentFirstChar = r;
  var d = -1, c;
  for (c = 0; c < o.length; c++)
    if (!i(o[c].index)) {
      d = c;
      break;
    }
  for (; c < o.length; c++)
    if (o[c].index > e && !i(o[c].index)) {
      d = c;
      break;
    }
  return d !== -1 ? (n.sortedIndexCursor = d, o[n.sortedIndexCursor].index) : -1;
}
function wl(t, e, i) {
  var n = i.typeaheadBuffer[0], r = t.get(n);
  if (!r)
    return -1;
  var o = r[i.sortedIndexCursor];
  if (o.text.lastIndexOf(i.typeaheadBuffer, 0) === 0 && !e(o.index))
    return o.index;
  for (var a = (i.sortedIndexCursor + 1) % r.length, d = -1; a !== i.sortedIndexCursor; ) {
    var c = r[a], u = c.text.lastIndexOf(i.typeaheadBuffer, 0) === 0, h = !e(c.index);
    if (u && h) {
      d = a;
      break;
    }
    a = (a + 1) % r.length;
  }
  return d !== -1 ? (i.sortedIndexCursor = d, r[i.sortedIndexCursor].index) : -1;
}
function $o(t) {
  return t.typeaheadBuffer.length > 0;
}
function Al(t) {
  t.typeaheadBuffer = "";
}
function _l(t, e) {
  var i = t.event, n = t.isTargetListItem, r = t.focusedItemIndex, o = t.focusItemAtIndex, a = t.sortedIndexByFirstChar, d = t.isItemAtIndexDisabled, c = oe(i) === "ArrowLeft", u = oe(i) === "ArrowUp", h = oe(i) === "ArrowRight", b = oe(i) === "ArrowDown", g = oe(i) === "Home", v = oe(i) === "End", y = oe(i) === "Enter", E = oe(i) === "Spacebar";
  if (i.ctrlKey || i.metaKey || c || u || h || b || g || v || y)
    return -1;
  var k = !E && i.key.length === 1;
  if (k) {
    Er(i);
    var A = {
      focusItemAtIndex: o,
      focusedItemIndex: r,
      nextChar: i.key.toLowerCase(),
      sortedIndexByFirstChar: a,
      skipFocus: !1,
      isItemAtIndexDisabled: d
    };
    return Cn(A, e);
  }
  if (!E)
    return -1;
  n && Er(i);
  var F = n && $o(e);
  if (F) {
    var A = {
      focusItemAtIndex: o,
      focusedItemIndex: r,
      nextChar: " ",
      sortedIndexByFirstChar: a,
      skipFocus: !1,
      isItemAtIndexDisabled: d
    };
    return Cn(A, e);
  }
  return -1;
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class yt extends Wt {
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
yt.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
var El = {
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
var Sl = (
  /** @class */
  function(t) {
    at(e, t);
    function e(i) {
      var n = t.call(this, re(re({}, e.defaultAdapter), i)) || this;
      return n.shakeAnimationEndHandler = function() {
        n.handleShakeAnimationEnd();
      }, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return El;
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
      var n = e.cssClasses, r = n.LABEL_FLOAT_ABOVE, o = n.LABEL_SHAKE;
      i ? this.adapter.addClass(r) : (this.adapter.removeClass(r), this.adapter.removeClass(o));
    }, e.prototype.setRequired = function(i) {
      var n = e.cssClasses.LABEL_REQUIRED;
      i ? this.adapter.addClass(n) : this.adapter.removeClass(n);
    }, e.prototype.handleShakeAnimationEnd = function() {
      var i = e.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(i);
    }, e;
  }(je)
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
const dt = {
  ATTRIBUTE: 1,
  CHILD: 2,
  PROPERTY: 3,
  BOOLEAN_ATTRIBUTE: 4,
  EVENT: 5
};
class Cl {
  constructor(e) {
    this.type = dt.CHILD, this.options = e.options, this.legacyPart = e;
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
class $l {
  constructor(e) {
    this.legacyPart = e, this.type = e instanceof vi ? dt.PROPERTY : dt.ATTRIBUTE;
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
class Il {
  constructor(e) {
    this.type = dt.BOOLEAN_ATTRIBUTE, this.legacyPart = e;
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
class Nl {
  constructor(e) {
    this.type = dt.EVENT, this.legacyPart = e;
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
function kl(t) {
  if (t instanceof Mi)
    return new Cl(t);
  if (t instanceof xo)
    return new Nl(t);
  if (t instanceof bo)
    return new Il(t);
  if (t instanceof vi || t instanceof ii)
    return new $l(t);
  throw new Error("Unknown part type");
}
class Io {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(e) {
  }
  update(e, i) {
    return this.render(...i);
  }
}
function No(t) {
  const e = /* @__PURE__ */ new WeakMap();
  return ti((...n) => (r) => {
    const o = e.get(r);
    let a, d;
    o === void 0 ? (a = kl(r), d = new t(a), e.set(r, [a, d])) : (a = o[0], d = o[1]), r.setValue(d.update(a, n)), r.commit();
  });
}
const Ll = (t) => ({
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
class Tl extends Io {
  constructor(e) {
    switch (super(e), this.foundation = null, this.previousPart = null, e.type) {
      // Only allow Attribute and Part bindings
      case dt.ATTRIBUTE:
      case dt.PROPERTY:
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
      const r = Ll(n);
      this.foundation = new Sl(r), this.foundation.init();
    }
    return this.render(i);
  }
  render(e) {
    return this.foundation;
  }
}
const ko = No(Tl);
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
var Rt = {
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
var Dl = (
  /** @class */
  function(t) {
    at(e, t);
    function e(i) {
      var n = t.call(this, re(re({}, e.defaultAdapter), i)) || this;
      return n.transitionEndHandler = function(r) {
        n.handleTransitionEnd(r);
      }, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Rt;
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
      this.adapter.removeClass(Rt.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Rt.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(i) {
      this.adapter.setStyle("transform-origin", i + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(Rt.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(i) {
      var n = this.adapter.hasClass(Rt.LINE_RIPPLE_DEACTIVATING);
      i.propertyName === "opacity" && n && (this.adapter.removeClass(Rt.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Rt.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(je)
);
const zl = (t) => ({
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
class Rl extends Io {
  constructor(e) {
    switch (super(e), this.previousPart = null, this.foundation = null, e.type) {
      case dt.ATTRIBUTE:
      case dt.PROPERTY:
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
      const r = zl(n);
      this.foundation = new Dl(r), this.foundation.init();
    }
    return this.render();
  }
  render() {
    return this.foundation;
  }
}
const Lo = No(Rl);
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
}, nn = {
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
}, Ot = {
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
var Ol = (
  /** @class */
  function(t) {
    at(e, t);
    function e(i, n) {
      n === void 0 && (n = {});
      var r = t.call(this, re(re({}, e.defaultAdapter), i)) || this;
      return r.disabled = !1, r.isMenuOpen = !1, r.useDefaultValidation = !0, r.customValidity = !0, r.lastSelectedIndex = Ot.UNSET_INDEX, r.clickDebounceTimeout = 0, r.recentlyClicked = !1, r.leadingIcon = n.leadingIcon, r.helperText = n.helperText, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return te;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ot;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return nn;
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
      n === void 0 && (n = !1), r === void 0 && (r = !1), !(i >= this.adapter.getMenuItemCount()) && (i === Ot.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(i).trim()), this.adapter.setSelectedIndex(i), n && this.adapter.closeMenu(), !r && this.lastSelectedIndex !== i && this.handleChange(), this.lastSelectedIndex = i);
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
      return i !== Ot.UNSET_INDEX ? n[i] : "";
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
        var i = this.getValue().length > 0, n = this.adapter.hasClass(te.FOCUSED), r = i || n, o = this.adapter.hasClass(te.REQUIRED);
        this.notchOutline(r), this.adapter.floatLabel(r), this.adapter.setLabelRequired(o);
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
        var n = oe(i) === z.ENTER, r = oe(i) === z.SPACEBAR, o = oe(i) === z.ARROW_UP, a = oe(i) === z.ARROW_DOWN, d = i.ctrlKey || i.metaKey;
        if (!d && (!r && i.key && i.key.length === 1 || r && this.adapter.isTypeaheadInProgress())) {
          var c = r ? " " : i.key, u = this.adapter.typeaheadMatchItem(c, this.getSelectedIndex());
          u >= 0 && this.setSelectedIndex(u), i.preventDefault();
          return;
        }
        !n && !r && !o && !a || (o && this.getSelectedIndex() > 0 ? this.setSelectedIndex(this.getSelectedIndex() - 1) : a && this.getSelectedIndex() < this.adapter.getMenuItemCount() - 1 && this.setSelectedIndex(this.getSelectedIndex() + 1), this.openMenu(), i.preventDefault());
      }
    }, e.prototype.notchOutline = function(i) {
      if (this.adapter.hasOutline()) {
        var n = this.adapter.hasClass(te.FOCUSED);
        if (i) {
          var r = Ot.LABEL_SCALE, o = this.adapter.getLabelWidth() * r;
          this.adapter.notchOutline(o);
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
      return this.useDefaultValidation && this.adapter.hasClass(te.REQUIRED) && !this.adapter.hasClass(te.DISABLED) ? this.getSelectedIndex() !== Ot.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
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
        n && r ? this.adapter.setSelectAnchorAttr(nn.ARIA_DESCRIBEDBY, r) : this.adapter.removeSelectAnchorAttr(nn.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var i = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        i.recentlyClicked = !1;
      }, Ot.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(je)
);
const Cr = (t = {}) => {
  const e = {};
  for (const i in t)
    e[i] = t[i];
  return Object.assign({ badInput: !1, customError: !1, patternMismatch: !1, rangeOverflow: !1, rangeUnderflow: !1, stepMismatch: !1, tooLong: !1, tooShort: !1, typeMismatch: !1, valid: !0, valueMissing: !1 }, e);
};
class K extends yt {
  constructor() {
    super(...arguments), this.mdcFoundationClass = Ol, this.disabled = !1, this.outlined = !1, this.label = "", this.outlineOpen = !1, this.outlineWidth = 0, this.value = "", this.selectedText = "", this.icon = "", this.menuOpen = !1, this.helper = "", this.validateOnInitialRender = !1, this.validationMessage = "", this.required = !1, this.naturalMenuWidth = !1, this.isUiValid = !0, this.fixedMenuPosition = !1, this.typeaheadState = vl(), this.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), this.menuElement_ = null, this.listeners = [], this.onBodyClickBound = () => {
    }, this._menuUpdateComplete = null, this.valueSetDirectly = !1, this.validityTransform = null, this._validity = Cr();
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
            aria-labelledby=${U(n)}
            aria-required=${this.required}
            aria-describedby=${U(r)}
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
    return this.outlined ? Me : s`
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
      </mwc-notched-outline>` : Me;
  }
  renderLabel() {
    return this.label ? s`
      <span
          .floatingLabelFoundation=${ko(this.label)}
          id="label">${this.label}</span>
    ` : Me;
  }
  renderLeadingIcon() {
    return this.icon ? s`<mwc-icon class="mdc-select__icon"><div>${this.icon}</div></mwc-icon>` : Me;
  }
  renderLineRipple() {
    return this.outlined ? Me : s`
      <span .lineRippleFoundation=${Lo()}></span>
    `;
  }
  renderHelperText() {
    if (!this.shouldRenderHelperText)
      return Me;
    const e = this.validationMessage && !this.isUiValid;
    return s`
        <p
          class="mdc-select-helper-text ${ne({
      "mdc-select-helper-text--validation-msg": e
    })}"
          id="helper-text">${e ? this.validationMessage : this.helper}</p>`;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Vi(this.mdcRoot)), { activateBottomLine: () => {
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
    }, isTypeaheadInProgress: () => $o(this.typeaheadState), typeaheadMatchItem: (e, i) => {
      if (!this.menuElement)
        return -1;
      const n = {
        focusItemAtIndex: (o) => {
          this.menuElement.focusItemAtIndex(o);
        },
        focusedItemIndex: i || this.menuElement.getFocusedItemIndex(),
        nextChar: e,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus: !1,
        isItemAtIndexDisabled: (o) => this.items[o].disabled
      }, r = Cn(n, this.typeaheadState);
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
    let n = Cr(i);
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
    this.sortedIndexByFirstChar = Sr(this.items.length, (i) => this.items[i].text);
  }
  onItemsUpdated() {
    this.sortedIndexByFirstChar = Sr(this.items.length, (e) => this.items[e].text);
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
    const i = oe(e) === z.ARROW_UP, n = oe(e) === z.ARROW_DOWN;
    if (n || i) {
      const r = i && this.index > 0, o = n && this.index < this.items.length - 1;
      r ? this.select(this.index - 1) : o && this.select(this.index + 1), e.preventDefault(), this.mdcFoundation.openMenu();
      return;
    }
    this.mdcFoundation.handleKeydown(e);
  }
  // must capture to run before list foundation captures event
  handleTypeahead(e) {
    if (!this.menuElement)
      return;
    const i = this.menuElement.getFocusedItemIndex(), n = vo(e.target) ? e.target : null, r = n ? n.hasAttribute("mwc-list-item") : !1, o = {
      event: e,
      focusItemAtIndex: (a) => {
        this.menuElement.focusItemAtIndex(a);
      },
      focusedItemIndex: i,
      isTargetListItem: r,
      sortedIndexByFirstChar: this.sortedIndexByFirstChar,
      isItemAtIndexDisabled: (a) => this.items[a].disabled
    };
    _l(o, this.typeaheadState);
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
    const o = n.floatingLabelFoundation.getWidth();
    this.outlineOpen && (this.outlineWidth = o);
  }
  async layoutOptions() {
    this.mdcFoundation && this.mdcFoundation.layoutOptions();
  }
}
p([
  w(".mdc-select")
], K.prototype, "mdcRoot", void 0);
p([
  w(".formElement")
], K.prototype, "formElement", void 0);
p([
  w("slot")
], K.prototype, "slotElement", void 0);
p([
  w("select")
], K.prototype, "nativeSelectElement", void 0);
p([
  w("input")
], K.prototype, "nativeInputElement", void 0);
p([
  w(".mdc-line-ripple")
], K.prototype, "lineRippleElement", void 0);
p([
  w(".mdc-floating-label")
], K.prototype, "labelElement", void 0);
p([
  w("mwc-notched-outline")
], K.prototype, "outlineElement", void 0);
p([
  w(".mdc-menu")
], K.prototype, "menuElement", void 0);
p([
  w(".mdc-select__anchor")
], K.prototype, "anchorElement", void 0);
p([
  m({ type: Boolean, attribute: "disabled", reflect: !0 }),
  Z(function(t) {
    this.mdcFoundation && this.mdcFoundation.setDisabled(t);
  })
], K.prototype, "disabled", void 0);
p([
  m({ type: Boolean }),
  Z(function(t, e) {
    e !== void 0 && this.outlined !== e && this.layout(!1);
  })
], K.prototype, "outlined", void 0);
p([
  m({ type: String }),
  Z(function(t, e) {
    e !== void 0 && this.label !== e && this.layout(!1);
  })
], K.prototype, "label", void 0);
p([
  I()
], K.prototype, "outlineOpen", void 0);
p([
  I()
], K.prototype, "outlineWidth", void 0);
p([
  m({ type: String }),
  Z(function(t) {
    if (this.mdcFoundation) {
      const e = this.selected === null && !!t, i = this.selected && this.selected.value !== t;
      (e || i) && this.selectByValue(t), this.reportValidity();
    }
  })
], K.prototype, "value", void 0);
p([
  I()
], K.prototype, "selectedText", void 0);
p([
  m({ type: String })
], K.prototype, "icon", void 0);
p([
  I()
], K.prototype, "menuOpen", void 0);
p([
  m({ type: String })
], K.prototype, "helper", void 0);
p([
  m({ type: Boolean })
], K.prototype, "validateOnInitialRender", void 0);
p([
  m({ type: String })
], K.prototype, "validationMessage", void 0);
p([
  m({ type: Boolean })
], K.prototype, "required", void 0);
p([
  m({ type: Boolean })
], K.prototype, "naturalMenuWidth", void 0);
p([
  I()
], K.prototype, "isUiValid", void 0);
p([
  m({ type: Boolean })
], K.prototype, "fixedMenuPosition", void 0);
p([
  Ue({ capture: !0 })
], K.prototype, "handleTypeahead", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Pl = V`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-select{display:inline-flex;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87)}.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-select.mdc-select--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#6200ee;fill:var(--mdc-theme-primary, #6200ee)}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:rgba(0, 0, 0, 0.54)}.mdc-select.mdc-select--disabled .mdc-select__icon{color:rgba(0, 0, 0, 0.38)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:red}.mdc-select.mdc-select--disabled .mdc-floating-label{color:GrayText}.mdc-select.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}.mdc-select.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select.mdc-select--disabled .mdc-notched-outline__trailing{border-color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__icon{color:GrayText}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:GrayText}}.mdc-select .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:0;padding-right:0}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.mdc-select .mdc-select__icon{width:24px;height:24px;font-size:24px}.mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item,.mdc-select .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:12px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic,.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:12px;margin-right:0}.mdc-select__dropdown-icon{margin-left:12px;margin-right:12px;display:inline-flex;position:relative;align-self:center;align-items:center;justify-content:center;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic{width:41.6666666667%;height:20.8333333333%}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;transition:opacity 100.5ms linear 49.5ms}.mdc-select__anchor{width:200px;min-width:0;flex:1 1 auto;position:relative;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-select__selected-text-container{display:flex;appearance:none;pointer-events:none;box-sizing:border-box;width:auto;min-width:0;flex-grow:1;height:28px;border:none;outline:none;padding:0;background-color:transparent;color:inherit}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;width:100%;text-align:left}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{text-align:right}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item{padding-left:12px;padding-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item,.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:12px;padding-right:12px}.mdc-select__menu .mdc-deprecated-list .mdc-select__icon{margin-left:0;margin-right:0}[dir=rtl] .mdc-select__menu .mdc-deprecated-list .mdc-select__icon,.mdc-select__menu .mdc-deprecated-list .mdc-select__icon[dir=rtl]{margin-left:0;margin-right:0}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select--filled .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.mdc-select--filled .mdc-select__anchor::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor::before{display:none}.mdc-select--filled .mdc-select__anchor{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-select--filled:not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke}.mdc-select--filled.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-select--filled:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--filled.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-select--filled .mdc-menu-surface--is-open-below{border-top-left-radius:0px;border-top-right-radius:0px}.mdc-select--filled.mdc-select--focused.mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-select--filled .mdc-floating-label,.mdc-select--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined{border:none}.mdc-select--outlined .mdc-select__anchor{height:56px}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-56px{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-select--outlined .mdc-select__anchor{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-select--outlined+.mdc-select-helper-text{margin-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-select--outlined .mdc-select__anchor{display:flex;align-items:baseline;overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--outlined .mdc-select__anchor::before{display:none}.mdc-select--outlined .mdc-select__selected-text-container{display:flex;border:none;z-index:1;background-color:transparent}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;left:4px;right:initial}[dir=rtl] .mdc-select--outlined .mdc-floating-label,.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake,.mdc-select--outlined.mdc-select--with-leading-icon[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 96px)}.mdc-select--outlined .mdc-menu-surface{margin-bottom:8px}.mdc-select--outlined.mdc-select--no-label .mdc-menu-surface,.mdc-select--outlined .mdc-menu-surface--is-open-below{margin-bottom:0}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-select__anchor .mdc-select__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-select__anchor .mdc-select__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-select__anchor:hover .mdc-select__ripple::before,.mdc-select__anchor.mdc-ripple-surface--hover .mdc-select__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select-helper-text{margin:0;margin-left:16px;margin-right:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal}[dir=rtl] .mdc-select-helper-text,.mdc-select-helper-text[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;user-select:none;flex-shrink:0;align-self:center;background-color:transparent;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex="-1"]{cursor:default;pointer-events:none}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-block;vertical-align:top;outline:none}.mdc-select{width:100%}[hidden]{display:none}.mdc-select__icon{z-index:2}.mdc-select--with-leading-icon{--mdc-list-item-graphic-margin: calc( 48px - var(--mdc-list-item-graphic-size, 24px) - var(--mdc-list-side-padding, 16px) )}.mdc-select .mdc-select__anchor .mdc-select__selected-text{overflow:hidden}.mdc-select .mdc-select__anchor *{display:inline-flex}.mdc-select .mdc-select__anchor .mdc-floating-label{display:inline-block}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-idle-border-color, rgba(0, 0, 0, 0.38) );--mdc-notched-outline-notch-offset: 1px}:host(:not([disabled]):hover) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87);color:var(--mdc-select-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-select-idle-line-color, rgba(0, 0, 0, 0.42))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-select-hover-line-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke;background-color:var(--mdc-select-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-select__dropdown-icon{fill:var(--mdc-select-error-dropdown-icon-color, var(--mdc-select-error-color, var(--mdc-theme-error, #b00020)))}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label,:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label::after{color:var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}.mdc-select__menu--invalid{--mdc-theme-primary: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.6);color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54);fill:var(--mdc-select-dropdown-icon-color, rgba(0, 0, 0, 0.54))}:host(:not([disabled])) .mdc-select.mdc-select--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px;--mdc-notched-outline-notch-offset: 2px}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-select__dropdown-icon{fill:rgba(98,0,238,.87);fill:var(--mdc-select-focused-dropdown-icon-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-select:not(.mdc-select--outlined).mdc-select--disabled .mdc-select__anchor{background-color:#fafafa;background-color:var(--mdc-select-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-select.mdc-select--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-select .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38);fill:var(--mdc-select-disabled-dropdown-icon-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select-helper-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Ri = class extends K {
};
Ri.styles = [Pl];
Ri = p([
  R("mwc-select")
], Ri);
function D(t, e, i) {
  const n = t.createElementNS(t.documentElement.namespaceURI, e);
  return Object.entries(i).filter(([r, o]) => o !== null).forEach(([r, o]) => n.setAttribute(r, o)), n;
}
function G(t, e) {
  const i = t.cloneNode(!1);
  return Object.entries(e).forEach(([n, r]) => {
    r === null ? i.removeAttribute(n) : i.setAttribute(n, r);
  }), i;
}
function $(t, e) {
  return !t || !e ? [] : Array.from(t.children).filter(
    (i) => i.tagName === e
  );
}
function Fi(t, e, i = 1) {
  const n = "new" + e + i;
  return t.querySelector(`:scope > ${e}[name="${n}"]`) ? Fi(t, e, ++i) : n;
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
var ui = {
  /** Class used for a switch that is in the "checked" (on) position. */
  CHECKED: "mdc-switch--checked",
  /** Class used for a switch that is disabled. */
  DISABLED: "mdc-switch--disabled"
}, $r = {
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
var Ml = (
  /** @class */
  function(t) {
    at(e, t);
    function e(i) {
      return t.call(this, re(re({}, e.defaultAdapter), i)) || this;
    }
    return Object.defineProperty(e, "strings", {
      /** The string constants used by the switch. */
      get: function() {
        return $r;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      /** The CSS classes used by the switch. */
      get: function() {
        return ui;
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
      this.adapter.setNativeControlDisabled(i), i ? this.adapter.addClass(ui.DISABLED) : this.adapter.removeClass(ui.DISABLED);
    }, e.prototype.handleChange = function(i) {
      var n = i.target;
      this.updateAriaChecked(n.checked), this.updateCheckedStyling(n.checked);
    }, e.prototype.updateCheckedStyling = function(i) {
      i ? this.adapter.addClass(ui.CHECKED) : this.adapter.removeClass(ui.CHECKED);
    }, e.prototype.updateAriaChecked = function(i) {
      this.adapter.setNativeControlAttr($r.ARIA_CHECKED_ATTR, "" + !!i);
    }, e;
  }(je)
);
class Ke extends yt {
  constructor() {
    super(...arguments), this.checked = !1, this.disabled = !1, this.shouldRenderRipple = !1, this.mdcFoundationClass = Ml, this.rippleHandlers = new Ut(() => (this.shouldRenderRipple = !0, this.ripple));
  }
  changeHandler(e) {
    this.mdcFoundation.handleChange(e), this.checked = this.formElement.checked;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Vi(this.mdcRoot)), { setNativeControlChecked: (e) => {
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
              aria-label="${U(this.ariaLabel)}"
              aria-labelledby="${U(this.ariaLabelledBy)}"
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
p([
  m({ type: Boolean }),
  Z(function(t) {
    this.mdcFoundation.setChecked(t);
  })
], Ke.prototype, "checked", void 0);
p([
  m({ type: Boolean }),
  Z(function(t) {
    this.mdcFoundation.setDisabled(t);
  })
], Ke.prototype, "disabled", void 0);
p([
  jt,
  m({ attribute: "aria-label" })
], Ke.prototype, "ariaLabel", void 0);
p([
  jt,
  m({ attribute: "aria-labelledby" })
], Ke.prototype, "ariaLabelledBy", void 0);
p([
  w(".mdc-switch")
], Ke.prototype, "mdcRoot", void 0);
p([
  w("input")
], Ke.prototype, "formElement", void 0);
p([
  Gt("mwc-ripple")
], Ke.prototype, "ripple", void 0);
p([
  I()
], Ke.prototype, "shouldRenderRipple", void 0);
p([
  Ue({ passive: !0 })
], Ke.prototype, "handleRippleMouseDown", null);
p([
  Ue({ passive: !0 })
], Ke.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Vl = V`.mdc-switch__thumb-underlay{left:-14px;right:initial;top:-17px;width:48px;height:48px}[dir=rtl] .mdc-switch__thumb-underlay,.mdc-switch__thumb-underlay[dir=rtl]{left:initial;right:-14px}.mdc-switch__native-control{width:64px;height:48px}.mdc-switch{display:inline-block;position:relative;outline:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-color:#fff;border-color:var(--mdc-theme-surface, #fff)}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;margin:0;opacity:0;cursor:pointer;pointer-events:auto;transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-switch__native-control,.mdc-switch__native-control[dir=rtl]{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:36px;height:14px;border:1px solid transparent;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb-underlay{display:flex;position:absolute;align-items:center;justify-content:center;transform:translateX(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl]{transform:translateX(-16px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__native-control[dir=rtl]{transform:translateX(16px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent}`;
let $n = class extends Ke {
};
$n.styles = [Vl];
$n = p([
  R("mwc-switch")
], $n);
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
var rn = {
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
}, Fl = {
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
}, Ir = {
  LABEL_SCALE: 0.75
}, Bl = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Hl = [
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
var Nr = ["mousedown", "touchstart"], kr = ["click", "keydown"], ql = (
  /** @class */
  function(t) {
    at(e, t);
    function e(i, n) {
      n === void 0 && (n = {});
      var r = t.call(this, re(re({}, e.defaultAdapter), i)) || this;
      return r.isFocused = !1, r.receivedUserInput = !1, r.valid = !0, r.useNativeValidation = !0, r.validateOnValueChange = !0, r.helperText = n.helperText, r.characterCounter = n.characterCounter, r.leadingIcon = n.leadingIcon, r.trailingIcon = n.trailingIcon, r.inputFocusHandler = function() {
        r.activateFocus();
      }, r.inputBlurHandler = function() {
        r.deactivateFocus();
      }, r.inputInputHandler = function() {
        r.handleInput();
      }, r.setPointerXOffset = function(o) {
        r.setTransformOrigin(o);
      }, r.textFieldInteractionHandler = function() {
        r.handleTextFieldInteraction();
      }, r.validationAttributeChangeHandler = function(o) {
        r.handleValidationAttributeChange(o);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Fl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return rn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ir;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var i = this.getNativeInput().type;
        return Hl.indexOf(i) >= 0;
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
      var i, n, r, o;
      this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var a = lt(Nr), d = a.next(); !d.done; d = a.next()) {
          var c = d.value;
          this.adapter.registerInputInteractionHandler(c, this.setPointerXOffset);
        }
      } catch (b) {
        i = { error: b };
      } finally {
        try {
          d && !d.done && (n = a.return) && n.call(a);
        } finally {
          if (i) throw i.error;
        }
      }
      try {
        for (var u = lt(kr), h = u.next(); !h.done; h = u.next()) {
          var c = h.value;
          this.adapter.registerTextFieldInteractionHandler(c, this.textFieldInteractionHandler);
        }
      } catch (b) {
        r = { error: b };
      } finally {
        try {
          h && !h.done && (o = u.return) && o.call(u);
        } finally {
          if (r) throw r.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var i, n, r, o;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var a = lt(Nr), d = a.next(); !d.done; d = a.next()) {
          var c = d.value;
          this.adapter.deregisterInputInteractionHandler(c, this.setPointerXOffset);
        }
      } catch (b) {
        i = { error: b };
      } finally {
        try {
          d && !d.done && (n = a.return) && n.call(a);
        } finally {
          if (i) throw i.error;
        }
      }
      try {
        for (var u = lt(kr), h = u.next(); !h.done; h = u.next()) {
          var c = h.value;
          this.adapter.deregisterTextFieldInteractionHandler(c, this.textFieldInteractionHandler);
        }
      } catch (b) {
        r = { error: b };
      } finally {
        try {
          h && !h.done && (o = u.return) && o.call(u);
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
        return Bl.indexOf(r) > -1 ? (n.styleValidity(!0), n.adapter.setLabelRequired(n.getNativeInput().required), !0) : !1;
      }), i.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(i) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (i) {
          var n = this.adapter.getLabelWidth() * Ir.LABEL_SCALE;
          this.adapter.notchOutline(n);
        } else
          this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(i) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var n = i.touches, r = n ? n[0] : i, o = r.target.getBoundingClientRect(), a = r.clientX - o.left;
        this.adapter.setLineRippleTransformOrigin(a);
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
        var o = this.helperText.isVisible(), a = this.helperText.getId();
        o && a ? this.adapter.setInputAttr(rn.ARIA_DESCRIBEDBY, a) : this.adapter.removeInputAttr(rn.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.styleFocused = function(i) {
      var n = e.cssClasses.FOCUSED;
      i ? this.adapter.addClass(n) : this.adapter.removeClass(n);
    }, e.prototype.styleDisabled = function(i) {
      var n = e.cssClasses, r = n.DISABLED, o = n.INVALID;
      i ? (this.adapter.addClass(r), this.adapter.removeClass(o)) : this.adapter.removeClass(r), this.leadingIcon && this.leadingIcon.setDisabled(i), this.trailingIcon && this.trailingIcon.setDisabled(i);
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
  }(je)
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
const Gl = ti((t) => (e) => {
  let i;
  if (e instanceof xo || e instanceof Mi)
    throw new Error("The `live` directive is not allowed on text or event bindings");
  if (e instanceof bo)
    Lr(e.strings), i = e.element.hasAttribute(e.name), e.value = i;
  else {
    const { element: n, name: r, strings: o } = e.committer;
    if (Lr(o), e instanceof vi) {
      if (i = n[r], i === t)
        return;
    } else e instanceof ii && (i = n.getAttribute(r));
    if (i === String(t))
      return;
  }
  e.setValue(t);
}), Lr = (t) => {
  if (t.length !== 2 || t[0] !== "" || t[1] !== "")
    throw new Error("`live` bindings can only contain a single expression");
}, Wl = ["touchstart", "touchmove", "scroll", "mousewheel"], Tr = (t = {}) => {
  const e = {};
  for (const i in t)
    e[i] = t[i];
  return Object.assign({ badInput: !1, customError: !1, patternMismatch: !1, rangeOverflow: !1, rangeUnderflow: !1, stepMismatch: !1, tooLong: !1, tooShort: !1, typeMismatch: !1, valid: !0, valueMissing: !1 }, e);
};
class P extends yt {
  constructor() {
    super(...arguments), this.mdcFoundationClass = ql, this.value = "", this.type = "text", this.placeholder = "", this.label = "", this.icon = "", this.iconTrailing = "", this.disabled = !1, this.required = !1, this.minLength = -1, this.maxLength = -1, this.outlined = !1, this.helper = "", this.validateOnInitialRender = !1, this.validationMessage = "", this.autoValidate = !1, this.pattern = "", this.min = "", this.max = "", this.step = null, this.size = null, this.helperPersistent = !1, this.charCounter = !1, this.endAligned = !1, this.prefix = "", this.suffix = "", this.name = "", this.readOnly = !1, this.autocapitalize = "", this.outlineOpen = !1, this.outlineWidth = 0, this.isUiValid = !0, this.focused = !1, this._validity = Tr(), this.validityTransform = null;
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
          .floatingLabelFoundation=${ko(this.label)}
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
    const i = this.minLength === -1 ? void 0 : this.minLength, n = this.maxLength === -1 ? void 0 : this.maxLength, r = this.autocapitalize ? this.autocapitalize : void 0, o = this.validationMessage && !this.isUiValid, a = this.label ? "label" : void 0, d = e ? "helper-text" : void 0, c = this.focused || this.helperPersistent || o ? "helper-text" : void 0;
    return s`
      <input
          aria-labelledby=${U(a)}
          aria-controls="${U(d)}"
          aria-describedby="${U(c)}"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${Gl(this.value)}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${U(i)}"
          maxlength="${U(n)}"
          pattern="${U(this.pattern ? this.pattern : void 0)}"
          min="${U(this.min === "" ? void 0 : this.min)}"
          max="${U(this.max === "" ? void 0 : this.max)}"
          step="${U(this.step === null ? void 0 : this.step)}"
          size="${U(this.size === null ? void 0 : this.size)}"
          name="${U(this.name === "" ? void 0 : this.name)}"
          inputmode="${U(this.inputMode)}"
          autocapitalize="${U(r)}"
          @input="${this.handleInputChange}"
          @focus="${this.onInputFocus}"
          @blur="${this.onInputBlur}">`;
  }
  /** @soyTemplate */
  renderLineRipple() {
    return this.outlined ? "" : s`
      <span .lineRippleFoundation=${Lo()}></span>
    `;
  }
  /** @soyTemplate */
  renderHelperText(e, i) {
    const n = this.validationMessage && !this.isUiValid, r = {
      "mdc-text-field-helper-text--persistent": this.helperPersistent,
      "mdc-text-field-helper-text--validation-msg": n
    }, o = this.focused || this.helperPersistent || n ? void 0 : "true", a = n ? this.validationMessage : this.helper;
    return e ? s`
      <div class="mdc-text-field-helper-line">
        <div id="helper-text"
             aria-hidden="${U(o)}"
             class="mdc-text-field-helper-text ${ne(r)}"
             >${a}</div>
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
    let n = Tr(i);
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
      const i = (o) => o.map((a) => a.attributeName).filter((a) => a), n = new MutationObserver((o) => {
        e(i(o));
      }), r = { attributes: !0 };
      return n.observe(this.formElement, r), n;
    }, deregisterValidationAttributeChangeHandler: (e) => e.disconnect() }, Vi(this.mdcRoot));
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
      registerInputInteractionHandler: (e, i) => this.formElement.addEventListener(e, i, { passive: e in Wl }),
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
p([
  w(".mdc-text-field")
], P.prototype, "mdcRoot", void 0);
p([
  w("input")
], P.prototype, "formElement", void 0);
p([
  w(".mdc-floating-label")
], P.prototype, "labelElement", void 0);
p([
  w(".mdc-line-ripple")
], P.prototype, "lineRippleElement", void 0);
p([
  w("mwc-notched-outline")
], P.prototype, "outlineElement", void 0);
p([
  w(".mdc-notched-outline__notch")
], P.prototype, "notchElement", void 0);
p([
  m({ type: String })
], P.prototype, "value", void 0);
p([
  m({ type: String })
], P.prototype, "type", void 0);
p([
  m({ type: String })
], P.prototype, "placeholder", void 0);
p([
  m({ type: String }),
  Z(function(t, e) {
    e !== void 0 && this.label !== e && this.layout();
  })
], P.prototype, "label", void 0);
p([
  m({ type: String })
], P.prototype, "icon", void 0);
p([
  m({ type: String })
], P.prototype, "iconTrailing", void 0);
p([
  m({ type: Boolean, reflect: !0 })
], P.prototype, "disabled", void 0);
p([
  m({ type: Boolean })
], P.prototype, "required", void 0);
p([
  m({ type: Number })
], P.prototype, "minLength", void 0);
p([
  m({ type: Number })
], P.prototype, "maxLength", void 0);
p([
  m({ type: Boolean, reflect: !0 }),
  Z(function(t, e) {
    e !== void 0 && this.outlined !== e && this.layout();
  })
], P.prototype, "outlined", void 0);
p([
  m({ type: String })
], P.prototype, "helper", void 0);
p([
  m({ type: Boolean })
], P.prototype, "validateOnInitialRender", void 0);
p([
  m({ type: String })
], P.prototype, "validationMessage", void 0);
p([
  m({ type: Boolean })
], P.prototype, "autoValidate", void 0);
p([
  m({ type: String })
], P.prototype, "pattern", void 0);
p([
  m({ type: String })
], P.prototype, "min", void 0);
p([
  m({ type: String })
], P.prototype, "max", void 0);
p([
  m({ type: Number })
], P.prototype, "step", void 0);
p([
  m({ type: Number })
], P.prototype, "size", void 0);
p([
  m({ type: Boolean })
], P.prototype, "helperPersistent", void 0);
p([
  m({ type: Boolean })
], P.prototype, "charCounter", void 0);
p([
  m({ type: Boolean })
], P.prototype, "endAligned", void 0);
p([
  m({ type: String })
], P.prototype, "prefix", void 0);
p([
  m({ type: String })
], P.prototype, "suffix", void 0);
p([
  m({ type: String })
], P.prototype, "name", void 0);
p([
  m({ type: String })
], P.prototype, "inputMode", void 0);
p([
  m({ type: Boolean })
], P.prototype, "readOnly", void 0);
p([
  m({ type: String })
], P.prototype, "autocapitalize", void 0);
p([
  I()
], P.prototype, "outlineOpen", void 0);
p([
  I()
], P.prototype, "outlineWidth", void 0);
p([
  I()
], P.prototype, "isUiValid", void 0);
p([
  I()
], P.prototype, "focused", void 0);
p([
  Ue({ passive: !0 })
], P.prototype, "handleInputChange", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ul = V`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{content:none}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38) )}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-error-color, var(--mdc-theme-error, #b00020) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Oi = class extends P {
};
Oi.styles = [Ul];
Oi = p([
  R("mwc-textfield")
], Oi);
var jl = Object.defineProperty, Kl = Object.getOwnPropertyDescriptor, Be = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Kl(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && jl(e, i, r), r;
};
let Se = class extends Oi {
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
          >${t === null ? l("textfield.noMultiplier") : t}</mwc-list-item
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
Be([
  m({ type: Boolean })
], Se.prototype, "nullable", 2);
Be([
  m({ type: Array })
], Se.prototype, "multipliers", 2);
Be([
  m({ type: String })
], Se.prototype, "multiplier", 1);
Be([
  m({ type: String })
], Se.prototype, "unit", 2);
Be([
  I()
], Se.prototype, "null", 1);
Be([
  m({ type: String })
], Se.prototype, "maybeValue", 1);
Be([
  m({ type: String })
], Se.prototype, "defaultValue", 2);
Be([
  m({ type: Array })
], Se.prototype, "reservedValues", 2);
Be([
  w("mwc-switch")
], Se.prototype, "nullSwitch", 2);
Be([
  w("mwc-menu")
], Se.prototype, "multiplierMenu", 2);
Be([
  w("mwc-icon-button")
], Se.prototype, "multiplierButton", 2);
Se = Be([
  R("wizard-textfield")
], Se);
var Xl = Object.defineProperty, Zl = Object.getOwnPropertyDescriptor, Kt = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Zl(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && Xl(e, i, r), r;
};
let ct = class extends Ri {
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
Kt([
  m({ type: Boolean })
], ct.prototype, "nullable", 2);
Kt([
  I()
], ct.prototype, "null", 1);
Kt([
  m({ type: String })
], ct.prototype, "maybeValue", 1);
Kt([
  m({ type: String })
], ct.prototype, "defaultValue", 2);
Kt([
  m({ type: Array })
], ct.prototype, "reservedValues", 2);
Kt([
  w("mwc-switch")
], ct.prototype, "nullSwitch", 2);
ct = Kt([
  R("wizard-select")
], ct);
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
var Yl = {
  ROOT: "mdc-form-field"
}, Ql = {
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
var Jl = (
  /** @class */
  function(t) {
    at(e, t);
    function e(i) {
      var n = t.call(this, re(re({}, e.defaultAdapter), i)) || this;
      return n.click = function() {
        n.handleClick();
      }, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Yl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ql;
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
  }(je)
);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class At extends Wt {
  constructor() {
    super(...arguments), this.alignEnd = !1, this.spaceBetween = !1, this.nowrap = !1, this.label = "", this.mdcFoundationClass = Jl;
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
        if (e instanceof yt) {
          const i = await e.ripple;
          i && i.startPress();
        }
      },
      deactivateInputRipple: async () => {
        const e = this.input;
        if (e instanceof yt) {
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
p([
  m({ type: Boolean })
], At.prototype, "alignEnd", void 0);
p([
  m({ type: Boolean })
], At.prototype, "spaceBetween", void 0);
p([
  m({ type: Boolean })
], At.prototype, "nowrap", void 0);
p([
  m({ type: String }),
  Z(async function(t) {
    const e = this.input;
    e && (e.localName === "input" ? e.setAttribute("aria-label", t) : e instanceof yt && (await e.updateComplete, e.setAriaLabel(t)));
  })
], At.prototype, "label", void 0);
p([
  w(".mdc-form-field")
], At.prototype, "mdcRoot", void 0);
p([
  Bn("", !0, "*")
], At.prototype, "slottedInputs", void 0);
p([
  w("label")
], At.prototype, "labelEl", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ed = V`.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch[dir=rtl]){margin-left:10px}`;
let In = class extends At {
};
In.styles = [ed];
In = p([
  R("mwc-formfield")
], In);
class be extends yt {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new Ut(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(e) {
    const i = e.get("indeterminate"), n = e.get("checked"), r = e.get("disabled");
    if (i !== void 0 || n !== void 0 || r !== void 0) {
      const o = this.calculateAnimationStateName(!!n, !!i, !!r), a = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${o}-${a}`;
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
              name="${U(this.name)}"
              aria-checked="${U(n)}"
              aria-label="${U(this.ariaLabel)}"
              aria-labelledby="${U(this.ariaLabelledBy)}"
              aria-describedby="${U(this.ariaDescribedBy)}"
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
p([
  w(".mdc-checkbox")
], be.prototype, "mdcRoot", void 0);
p([
  w("input")
], be.prototype, "formElement", void 0);
p([
  m({ type: Boolean, reflect: !0 })
], be.prototype, "checked", void 0);
p([
  m({ type: Boolean })
], be.prototype, "indeterminate", void 0);
p([
  m({ type: Boolean, reflect: !0 })
], be.prototype, "disabled", void 0);
p([
  m({ type: String, reflect: !0 })
], be.prototype, "name", void 0);
p([
  m({ type: String })
], be.prototype, "value", void 0);
p([
  jt,
  m({ type: String, attribute: "aria-label" })
], be.prototype, "ariaLabel", void 0);
p([
  jt,
  m({ type: String, attribute: "aria-labelledby" })
], be.prototype, "ariaLabelledBy", void 0);
p([
  jt,
  m({ type: String, attribute: "aria-describedby" })
], be.prototype, "ariaDescribedBy", void 0);
p([
  m({ type: Boolean })
], be.prototype, "reducedTouchTarget", void 0);
p([
  I()
], be.prototype, "animationClass", void 0);
p([
  I()
], be.prototype, "shouldRenderRipple", void 0);
p([
  I()
], be.prototype, "focused", void 0);
p([
  I()
], be.prototype, "useStateLayerCustomProperties", void 0);
p([
  Gt("mwc-ripple")
], be.prototype, "ripple", void 0);
p([
  Ue({ passive: !0 })
], be.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const td = V`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let Nn = class extends be {
};
Nn.styles = [td];
Nn = p([
  R("mwc-checkbox")
], Nn);
var id = Object.defineProperty, nd = Object.getOwnPropertyDescriptor, Oe = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? nd(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && id(e, i, r), r;
};
let Ce = class extends j {
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
Oe([
  m({ type: String })
], Ce.prototype, "label", 2);
Oe([
  m({ type: String })
], Ce.prototype, "helper", 2);
Oe([
  m({ type: Boolean })
], Ce.prototype, "nullable", 2);
Oe([
  m({ type: Boolean })
], Ce.prototype, "defaultChecked", 2);
Oe([
  m({ type: String })
], Ce.prototype, "maybeValue", 1);
Oe([
  m({ type: Boolean })
], Ce.prototype, "disabled", 2);
Oe([
  I()
], Ce.prototype, "null", 1);
Oe([
  I()
], Ce.prototype, "checked", 1);
Oe([
  I()
], Ce.prototype, "deactivateCheckbox", 2);
Oe([
  I()
], Ce.prototype, "formfieldLabel", 1);
Oe([
  w("mwc-switch")
], Ce.prototype, "nullSwitch", 2);
Oe([
  w("mwc-checkbox")
], Ce.prototype, "checkbox", 2);
Ce = Oe([
  R("wizard-checkbox")
], Ce);
function rd(t) {
  return typeof t == "function";
}
function x(t) {
  return t instanceof Se || t instanceof ct || t instanceof Ce ? t.maybeValue : t.value ?? null;
}
function Xn(t) {
  return t instanceof Se ? t.multiplier : null;
}
function N(t, e) {
  if (!t)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const i = rd(t) ? t : () => t;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: i, ...e?.detail }
  });
}
function De(t) {
  return N(t, { detail: { subwizard: !0 } });
}
function od(t) {
  let e = "", i = t.parentElement;
  for (; i?.getAttribute("name"); )
    e = "/" + i.getAttribute("name") + e, i = i.parentElement;
  return e;
}
function ad(t) {
  const e = t.getAttribute("name");
  return e || void 0;
}
function ge(t) {
  const e = t.split(">"), i = e.pop() ?? "";
  return [e.join(">"), i];
}
const se = ":not(*)";
function sd(t) {
  return `${t.getAttribute("version")}	${t.getAttribute("revision")}`;
}
function ld(t, e) {
  const [i, n] = e.split("	");
  return !i || !n ? se : `${t}[version="${i}"][revision="${n}"]`;
}
function Dr(t) {
  return L(t.parentElement) + ">" + t.getAttribute("connectivityNode");
}
function zr(t, e) {
  const [i, n] = ge(e), r = M[t].parents.flatMap(
    (o) => ve(o, i).split(",")
  );
  return fe(
    r,
    [">"],
    [`${t}[connectivityNode="${n}"]`]
  ).map((o) => o.join("")).join(",");
}
function dd(t) {
  const [e, i, n, r, o, a] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((d) => t.getAttribute(d));
  return e === "None" ? `${L(t.parentElement)}>(${r} ${a} ${o})` : `${e} ${i || "(Client)"}/${n ?? ""} ${r} ${o ?? ""}`;
}
function cd(t, e) {
  if (e.endsWith(")")) {
    const [g, v] = ge(e), [y, E, k] = v.substring(1, v.length - 1).split(" ");
    if (!y || !E) return se;
    const A = M[t].parents.flatMap(
      (F) => ve(F, g).split(",")
    );
    return fe(
      A,
      [">"],
      [`${t}[iedName="None"][lnClass="${y}"][lnType="${E}"][lnInst="${k}"]`]
    ).map((F) => F.join("")).join(",");
  }
  const [i, n, r, o, a] = e.split(/[ /]/);
  if (!i || !n || !o) return se;
  const [
    d,
    c,
    u,
    h,
    b
  ] = [
    [`[iedName="${i}"]`],
    n === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${n}"]`],
    r ? [`[prefix="${r}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    a ? [`[lnInst="${a}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return fe(
    [t],
    d,
    c,
    u,
    h,
    b
  ).map((g) => g.join("")).join(",");
}
function ud(t) {
  return `${L(t.parentElement)}>${t.getAttribute(
    "iedName"
  )} ${t.getAttribute("apName")}`;
}
function md(t, e) {
  const [i, n] = ge(e), [r, o] = n.split(" ");
  return `${ve(
    "IED",
    i
  )}>${t}[iedName="${r}"][apName="${o}"]`;
}
function pd(t) {
  return `${L(t.parentElement)}>${t.getAttribute("associationID") ?? ""}`;
}
function hd(t, e) {
  const [i, n] = ge(e);
  return n ? `${ve(
    "Server",
    i
  )}>${t}[associationID="${n}"]` : se;
}
function fd(t) {
  return `${L(t.closest("IED"))}>>${t.getAttribute("inst")}`;
}
function bd(t, e) {
  const [i, n] = e.split(">>");
  return n ? `IED[name="${i}"] ${t}[inst="${n}"]` : se;
}
function gd(t) {
  const e = t.textContent, [i, n, r, o, a] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((d) => t.getAttribute(d));
  return `${L(t.parentElement)}>${e} ${i || ""} ${n || ""}/${r ?? ""} ${o ?? ""} ${a ?? ""}`;
}
function xd(t, e) {
  const [i, n] = ge(e), [r, o, a, d, c, u] = n.split(/[ /]/), [
    h,
    b,
    g,
    v,
    y,
    E
  ] = [
    M[t].parents.flatMap(
      (k) => ve(k, i).split(",")
    ),
    [`${r}`],
    o ? [`[apRef="${o}"]`] : [":not([apRef])", '[apRef=""]'],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    d ? [`[prefix="${d}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    u ? [`[lnInst="${u}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return fe(
    h,
    [">"],
    [t],
    b,
    g,
    v,
    y,
    E
  ).map((k) => k.join("")).join(",");
}
function vd(t) {
  const [e, i, n, r, o, a, d, c] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((h) => t.getAttribute(h)), u = `${e}/${i ?? ""} ${n} ${r ?? ""}.${o} ${a || ""}`;
  return `${L(t.parentElement)}>${u} (${d}${c ? " [" + c + "]" : ""})`;
}
function yd(t, e) {
  const [i, n] = ge(e), [r, o, a, d] = n.split(/[ /.]/), c = n.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), u = c && c[1] ? c[1] : "", h = c && c[2] ? c[2] : "", b = n.match(/\(([A-Z]{2})/), g = n.match(/ \[([0-9]{1,2})\]/), v = b && b[1] ? b[1] : "", y = g && g[1] ? g[1] : "", [
    E,
    k,
    A,
    F,
    W,
    ee,
    Y,
    Ae,
    ji
  ] = [
    M[t].parents.flatMap(
      (si) => ve(si, i).split(",")
    ),
    [`[ldInst="${r}"]`],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    d ? [`[lnInst="${d}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${u}"]`],
    h ? [`[daName="${h}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${v}"]`],
    y ? [`[ix="${y}"]`] : [":not([ix])", '[ix=""]']
  ];
  return fe(
    E,
    [">"],
    [t],
    k,
    A,
    F,
    W,
    ee,
    Y,
    Ae,
    ji
  ).map((si) => si.join("")).join(",");
}
function wd(t) {
  if (!t.parentElement) return NaN;
  const e = L(t.parentElement), i = t.getAttribute("iedName"), n = t.getAttribute("intAddr"), r = Array.from(
    t.parentElement.querySelectorAll(`ExtRef[intAddr="${n}"]`)
  ).indexOf(t);
  if (n) return `${e}>${n}[${r}]`;
  const [
    o,
    a,
    d,
    c,
    u,
    h,
    b,
    g,
    v,
    y,
    E,
    k
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
  ].map((W) => t.getAttribute(W)), A = k ? `${b}:${k} ${g ?? ""}/${v ?? ""} ${y ?? ""} ${E ?? ""}` : "", F = `${i} ${o}/${a ?? ""} ${d} ${c ?? ""} ${u} ${h || ""}`;
  return `${e}>${A ? A + " " : ""}${F}${n ? `@${n}` : ""}`;
}
function Ad(t, e) {
  const [i, n] = ge(e), r = M[t].parents.flatMap(
    (li) => ve(li, i).split(",")
  );
  if (n.endsWith("]")) {
    const [li] = n.split("["), ss = [`[intAddr="${li}"]`];
    return fe(r, [">"], [t], ss).map((ls) => ls.join("")).join(",");
  }
  let o, a, d, c, u, h, b, g, v, y, E, k, A, F;
  !n.includes(":") && !n.includes("@") ? [o, a, d, c, u, h, b] = n.split(/[ /]/) : n.includes(":") && !n.includes("@") ? [
    g,
    v,
    y,
    E,
    k,
    A,
    o,
    a,
    d,
    c,
    u,
    h,
    b
  ] = n.split(/[ /:]/) : !n.includes(":") && n.includes("@") ? [o, a, d, c, u, h, b, F] = n.split(/[ /@]/) : [
    g,
    v,
    y,
    E,
    k,
    A,
    o,
    a,
    d,
    c,
    u,
    h,
    b,
    F
  ] = n.split(/[ /:@]/);
  const [
    W,
    ee,
    Y,
    Ae,
    ji,
    si,
    Ja,
    es,
    ts,
    is,
    ns,
    rs,
    os,
    as
  ] = [
    o ? [`[iedName="${o}"]`] : [":not([iedName])"],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    d ? [`[prefix="${d}"]`] : [":not([prefix])", '[prefix=""]'],
    c ? [`[lnClass="${c}"]`] : [":not([lnClass])"],
    u ? [`[lnInst="${u}"]`] : [":not([lnInst])", '[lnInst=""]'],
    h ? [`[doName="${h}"]`] : [":not([doName])"],
    b ? [`[daName="${b}"]`] : [":not([daName])", '[daName=""]'],
    g ? [`[serviceType="${g}"]`] : [":not([serviceType])", '[serviceType=""]'],
    v ? [`[srcCBName="${v}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    y ? [`[srcLDInst="${y}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    E ? [`[srcPrefix="${E}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    k ? [`[srcLNClass="${k}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    A ? [`[srcLNInst="${A}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    F ? [`[intAddr="${F}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return fe(
    r,
    [">"],
    [t],
    W,
    ee,
    Y,
    Ae,
    ji,
    si,
    Ja,
    es,
    ts,
    is,
    ns,
    rs,
    os,
    as
  ).map((li) => li.join("")).join(",");
}
function _d(t) {
  const [e, i, n] = ["prefix", "lnClass", "inst"].map(
    (r) => t.getAttribute(r)
  );
  return `${L(t.parentElement)}>${e ?? ""} ${i} ${n}`;
}
function Ed(t, e) {
  const [i, n] = ge(e), r = M[t].parents.flatMap(
    (b) => ve(b, i).split(",")
  ), [o, a, d] = n.split(" ");
  if (!a) return se;
  const [c, u, h] = [
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    [`[inst="${d}"]`]
  ];
  return fe(
    r,
    [">"],
    [t],
    c,
    u,
    h
  ).map((b) => b.join("")).join(",");
}
function Sd(t) {
  const [e, i, n, r, o, a] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((d) => t.getAttribute(d));
  return `${L(t.parentElement)}>${i} ${e || ""} ${n}/${r ?? ""} ${o} ${a}`;
}
function Cd(t, e) {
  const [i, n] = ge(e), r = M[t].parents.flatMap(
    (A) => ve(A, i).split(",")
  ), [o, a, d, c, u, h] = n.split(/[ /]/), [
    b,
    g,
    v,
    y,
    E,
    k
  ] = [
    o ? [`[iedName="${o}"]`] : [":not([iedName])", '[iedName=""]'],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    d ? [`[ldInst="${d}"]`] : [":not([ldInst])", '[ldInst=""]'],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${u}"]`],
    h ? [`[lnInst="${h}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return fe(
    r,
    [">"],
    [t],
    b,
    g,
    v,
    y,
    E,
    k
  ).map((A) => A.join("")).join(",");
}
function Rr(t) {
  const [e, i] = ["name", "ix"].map((n) => t.getAttribute(n));
  return `${L(t.parentElement)}>${e}${i ? "[" + i + "]" : ""}`;
}
function kn(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [n, r] = ge(e), [o, a, d, c] = r.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!a) return se;
  if (i === 0) return `${t}[name="${a}"]`;
  const u = M[t].parents.flatMap(
    (g) => g === "SDI" ? kn(g, n, i - 1).split(",") : ve(g, n).split(",")
  ).filter((g) => !g.startsWith(se));
  if (u.length === 0) return se;
  const [h, b] = [
    [`[name="${a}"]`],
    c ? [`[ix="${c}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return fe(
    u,
    [">"],
    [t],
    h,
    b
  ).map((g) => g.join("")).join(",");
}
function $d(t) {
  if (!t.parentElement) return NaN;
  const e = t.getAttribute("sGroup"), i = Array.from(t.parentElement.children).filter((n) => n.getAttribute("sGroup") === e).findIndex((n) => n.isSameNode(t));
  return `${L(t.parentElement)}>${e ? e + "." : ""} ${i}`;
}
function Id(t, e) {
  const [i, n] = ge(e), [r, o] = n.split(" "), a = parseFloat(o), d = M[t].parents.flatMap(
    (h) => ve(h, i).split(",")
  ), [c, u] = [
    r ? [`[sGroup="${r}"]`] : [""],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return fe(
    d,
    [">"],
    [t],
    c,
    u
  ).map((h) => h.join("")).join(",");
}
function Nd(t) {
  const [e, i] = ["iedName", "apName"].map(
    (n) => t.getAttribute(n)
  );
  return `${e} ${i}`;
}
function kd(t, e) {
  const [i, n] = e.split(" ");
  return !i || !n ? se : `${t}[iedName="${i}"][apName="${n}"]`;
}
function Or(t) {
  const [e, i] = ["ldInst", "cbName"].map(
    (n) => t.getAttribute(n)
  );
  return `${e} ${i}`;
}
function Pr(t, e) {
  const [i, n] = e.split(" ");
  return !i || !n ? se : `${t}[ldInst="${i}"][cbName="${n}"]`;
}
function Ld(t) {
  if (!t.parentElement) return NaN;
  if (!t.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = t.getAttribute("type");
  return t.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${L(t.parentElement)}>${e}`;
}
function Td(t, e) {
  const [i, n] = ge(e), [r, o] = [
    M[t].parents.flatMap(
      (a) => ve(a, i).split(",")
    ),
    n ? [`[type="${n}"]`] : [""]
  ];
  return fe(r, [">"], [t], o).map((a) => a.join("")).join(",");
}
function Dd(t) {
  if (!t.parentElement) return NaN;
  const e = t.parentElement, i = t.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${L(t.parentElement)}>${i}`;
  const n = Array.from(t.parentElement.children).filter((r) => r.getAttribute("type") === i).findIndex((r) => r.isSameNode(t));
  return `${L(t.parentElement)}>${i} [${n}]`;
}
function zd(t, e) {
  const [i, n] = ge(e), [r] = n.split(" "), o = n && n.match(/\[([0-9]+)\]/) && n.match(/\[([0-9]+)\]/)[1] ? parseFloat(n.match(/\[([0-9]+)\]/)[1]) : NaN, [a, d, c] = [
    M[t].parents.flatMap(
      (u) => ve(u, i).split(",")
    ),
    [`[type="${r}"]`],
    o ? [`:nth-child(${o + 1})`] : [""]
  ];
  return fe(
    a,
    [">"],
    [t],
    d,
    c
  ).map((u) => u.join("")).join(",");
}
function Rd(t) {
  return `${L(t.parentElement)}>${t.getAttribute("ord")}`;
}
function Od(t, e) {
  const [i, n] = ge(e);
  return `${ve("EnumType", i)}>${t}[ord="${n}"]`;
}
function Pd(t) {
  return `${L(t.parentElement)}>${t.getAttribute("type") || "8-MMS"}	${t.textContent}`;
}
function Md(t, e) {
  const [i, n] = ge(e), [r, o] = n.split("	"), [a] = [
    M[t].parents.flatMap(
      (d) => ve(d, i).split(",")
    )
  ];
  return fe(
    a,
    [">"],
    [t],
    [`[type="${r}"]`],
    [">"],
    [o]
  ).map((d) => d.join("")).join(",");
}
function Vd() {
  return "";
}
function Fd() {
  return ":root";
}
function q(t) {
  return t.parentElement.tagName === "SCL" ? t.getAttribute("name") : `${L(t.parentElement)}>${t.getAttribute("name")}`;
}
function B(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [n, r] = ge(e);
  if (!r) return se;
  if (i === 0) return `${t}[name="${r}"]`;
  const o = M[t].parents;
  if (!o) return se;
  const a = o.flatMap(
    (d) => M[d].selector === M.Substation.selector ? B(d, n, i - 1).split(",") : ve(d, n).split(",")
  ).filter((d) => !d.startsWith(se));
  return a.length === 0 ? se : fe(a, [">"], [t], [`[name="${r}"]`]).map((d) => d.join("")).join(",");
}
function S(t) {
  return L(t.parentElement).toString();
}
function C(t, e) {
  const i = M[t].parents;
  if (!i) return se;
  const n = i.flatMap((r) => ve(r, e).split(",")).filter((r) => !r.startsWith(se));
  return n.length === 0 ? se : fe(n, [">"], [t]).map((r) => r.join("")).join(",");
}
function $i(t) {
  return `#${t.id}`;
}
function Ii(t, e) {
  const i = e.replace(/^#/, "");
  return i ? `${t}[id="${i}"]` : se;
}
const To = [
  "TransformerWinding",
  "ConductingEquipment"
], Do = [
  "GeneralEquipment",
  "PowerTransformer",
  ...To
], Ln = ["Substation", "VoltageLevel", "Bay"], zo = ["Process", "Line"], Ro = ["EqSubFunction", "EqFunction"], Bd = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Do,
  ...Ln,
  ...zo,
  ...Ro
], Oo = ["ConnectivityNode", ...Bd], Hd = ["GOOSESecurity", "SMVSecurity"], qd = ["SubNetwork", ...Hd, ...Oo], Gd = ["BDA", "DA"], Wd = ["SampledValueControl", "GSEControl"], Ud = ["LogControl", "ReportControl"], jd = [...Wd, ...Ud], Kd = ["GSE", "SMV"], Xd = [
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
  ...jd,
  ...Kd,
  ...Gd
], Mt = ["LN0", "LN"], Zd = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Yd = ["Subject", "IssuerName"], Qd = ["MinTime", "MaxTime"], Jd = ["LNodeType", "DOType", "DAType", "EnumType"], ec = [
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
], tc = ["DynDataSet", "ConfDataSet"], ic = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...tc
], nc = ["ConfLogControl", "ConfSigRef"], rc = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], oc = ["SCL", ...qd, ...Xd, ...Jd], Po = [
  ...oc,
  ...Zd,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Yd,
  ...Qd,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...Mt,
  ...ec,
  "DynAssociation",
  "SettingGroups",
  ...ic,
  ...nc,
  ...rc,
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
], ac = new Set(Po);
function Bi(t) {
  return ac.has(t);
}
const Hi = ["Text", "Private"], bt = [...Hi], ae = [...Hi], Ni = [...Hi], Mr = [...ae, "Val"], Mo = [...bt, "LNode"], gt = [...Mo], Tn = [...gt], on = [
  ...gt,
  "PowerTransformer",
  "GeneralEquipment"
], Vr = [
  ...Tn,
  "Terminal"
], Fr = [...ae, "Address"], Vo = [...bt], Br = [...Vo, "IEDName"], Hr = [
  ...ae,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], qr = [
  ...gt,
  "GeneralEquipment",
  "Function"
], Gr = [...Vo, "TrgOps"], Wr = [
  ...gt,
  "GeneralEquipment",
  "EqSubFunction"
], M = {
  AccessControl: {
    identity: S,
    selector: C,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: q,
    selector: B,
    parents: ["IED"],
    children: [
      ...bt,
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
    selector: C,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: pd,
    selector: hd,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: S,
    selector: C,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: q,
    selector: B,
    parents: ["DAType"],
    children: [...Mr]
  },
  BitRate: {
    identity: S,
    selector: C,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: q,
    selector: B,
    parents: ["VoltageLevel"],
    children: [
      ...on,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: Sd,
    selector: Cd,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: S,
    selector: C,
    parents: ["SCL"],
    children: [...ae, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: q,
    selector: B,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...Vr,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: S,
    selector: C,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: Nd,
    selector: kd,
    parents: ["SubNetwork"],
    children: [...ae, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: q,
    selector: B,
    parents: ["Bay", "Line"],
    children: [...Mo]
  },
  DA: {
    identity: q,
    selector: B,
    parents: ["DOType"],
    children: [...Mr]
  },
  DAI: {
    identity: Rr,
    selector: kn,
    parents: ["DOI", "SDI"],
    children: [...ae, "Val"]
  },
  DAType: {
    identity: $i,
    selector: Ii,
    parents: ["DataTypeTemplates"],
    children: [...Ni, "BDA", "ProtNs"]
  },
  DO: {
    identity: q,
    selector: B,
    parents: ["LNodeType"],
    children: [...ae]
  },
  DOI: {
    identity: q,
    selector: B,
    parents: [...Mt],
    children: [...ae, "SDI", "DAI"]
  },
  DOType: {
    identity: $i,
    selector: Ii,
    parents: ["DataTypeTemplates"],
    children: [...Ni, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: q,
    selector: B,
    parents: [...Mt],
    children: [...bt, "FCDA"]
  },
  DataSetDirectory: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: S,
    selector: C,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: $i,
    selector: Ii,
    parents: ["DataTypeTemplates"],
    children: [...Ni, "EnumVal"]
  },
  EnumVal: {
    identity: Rd,
    selector: Od,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: q,
    selector: B,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...Wr]
  },
  EqSubFunction: {
    identity: q,
    selector: B,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...Wr]
  },
  ExtRef: {
    identity: wd,
    selector: Ad,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: vd,
    selector: yd,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: q,
    selector: B,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...gt,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: q,
    selector: B,
    parents: [
      "SubFunction",
      "Function",
      ...zo,
      ...Ro,
      ...Ln
    ],
    children: [...Tn, "EqFunction"]
  },
  GetCBValues: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: q,
    selector: B,
    parents: ["AccessPoint"],
    children: [...bt, "Subject", "IssuerName"]
  },
  GSE: {
    identity: Or,
    selector: Pr,
    parents: ["ConnectedAP"],
    children: [...Fr, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: q,
    selector: B,
    parents: ["LN0"],
    children: [...Br, "Protocol"]
  },
  GSESettings: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: S,
    selector: C,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: S,
    selector: C,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: sd,
    selector: ld,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: q,
    selector: B,
    parents: ["SCL"],
    children: [...ae, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: gd,
    selector: xd,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: S,
    selector: C,
    parents: [...Mt],
    children: [...ae, "ExtRef"]
  },
  IssuerName: {
    identity: S,
    selector: C,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: ud,
    selector: md,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: fd,
    selector: bd,
    parents: ["Server"],
    children: [...ae, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: _d,
    selector: Ed,
    parents: ["AccessPoint", "LDevice"],
    children: [...Hr]
  },
  LN0: {
    identity: S,
    selector: C,
    parents: ["LDevice"],
    children: [
      ...Hr,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: dd,
    selector: cd,
    parents: [...Oo],
    children: [...ae]
  },
  LNodeType: {
    identity: $i,
    selector: Ii,
    parents: ["DataTypeTemplates"],
    children: [...Ni, "DO"]
  },
  Line: {
    identity: q,
    selector: B,
    parents: ["Process", "SCL"],
    children: [
      ...qr,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: q,
    selector: B,
    parents: [...Mt],
    children: [...ae]
  },
  LogControl: {
    identity: q,
    selector: B,
    parents: [...Mt],
    children: [...Gr]
  },
  LogSettings: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: S,
    selector: C,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: S,
    selector: C,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: S,
    selector: C,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: Dr,
    selector: zr,
    parents: ["TransformerWinding"],
    children: [...ae]
  },
  OptFields: {
    identity: S,
    selector: C,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: Dd,
    selector: zd,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: Ld,
    selector: Td,
    parents: ["ConnectedAP"],
    children: [...ae, "P"]
  },
  PowerTransformer: {
    identity: q,
    selector: B,
    parents: [...Ln],
    children: [
      ...Tn,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => se,
    parents: [],
    children: []
  },
  Process: {
    identity: q,
    selector: B,
    parents: ["Process", "SCL"],
    children: [
      ...qr,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: Pd,
    selector: Md,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: S,
    selector: C,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: q,
    selector: B,
    parents: [...Mt],
    children: [...Gr, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: S,
    selector: C,
    parents: ["ReportControl"],
    children: [...ae, "ClientLN"]
  },
  SamplesPerSec: {
    identity: S,
    selector: C,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: q,
    selector: B,
    parents: ["LN0"],
    children: [...Br, "SmvOpts"]
  },
  SecPerSamples: {
    identity: S,
    selector: C,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: Vd,
    selector: Fd,
    parents: [],
    children: [
      ...Hi,
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
    identity: Rr,
    selector: kn,
    parents: ["DOI", "SDI"],
    children: [...ae, "SDI", "DAI"]
  },
  SDO: {
    identity: q,
    selector: B,
    parents: ["DOType"],
    children: [...bt]
  },
  Server: {
    identity: S,
    selector: C,
    parents: ["AccessPoint"],
    children: [
      ...ae,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: S,
    selector: C,
    parents: ["AccessPoint"],
    children: [...ae]
  },
  Services: {
    identity: S,
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
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: S,
    selector: C,
    parents: ["LN0"],
    children: [...ae]
  },
  SettingGroups: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: S,
    selector: C,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: S,
    selector: C,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: Or,
    selector: Pr,
    parents: ["ConnectedAP"],
    children: [...Fr]
  },
  SmvOpts: {
    identity: S,
    selector: C,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: q,
    selector: B,
    parents: ["AccessPoint"],
    children: [...bt, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: q,
    selector: B,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...To
    ],
    children: [...gt, "EqFunction"]
  },
  SubFunction: {
    identity: q,
    selector: B,
    parents: ["SubFunction", "Function"],
    children: [
      ...gt,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: q,
    selector: B,
    parents: ["Communication"],
    children: [...bt, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: S,
    selector: C,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: q,
    selector: B,
    parents: ["SCL"],
    children: [...on, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: q,
    selector: B,
    parents: ["TransformerWinding"],
    children: [...gt, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: Dr,
    selector: zr,
    parents: [...Do],
    children: [...ae]
  },
  Text: {
    identity: S,
    selector: C,
    parents: Po.filter((t) => t !== "Text" && t !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: S,
    selector: C,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: q,
    selector: B,
    parents: ["PowerTransformer"],
    children: [
      ...Vr,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: S,
    selector: C,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: $d,
    selector: Id,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: S,
    selector: C,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: S,
    selector: C,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: q,
    selector: B,
    parents: ["Substation"],
    children: [...on, "Voltage", "Bay", "Function"]
  }
};
function sc(t, e) {
  const i = t.tagName, n = Array.from(t.children);
  if (i === "Services" || i === "SettingGroups" || !Bi(i))
    return n.find((d) => d.tagName === e) ?? null;
  const r = M[i]?.children ?? [];
  let o = r.findIndex((d) => d === e);
  if (o < 0) return null;
  let a;
  for (; o < r.length && !a; )
    a = n.find((d) => d.tagName === r[o]), o++;
  return a ?? null;
}
function ve(t, e) {
  return typeof e != "string" ? se : Bi(t) ? M[t].selector(t, e) : t;
}
function le(t, e, i) {
  if (typeof i != "string" || !Bi(e)) return null;
  const n = t.querySelector(M[e].selector(e, i));
  return n === null || H(n) ? n : Array.from(
    t.querySelectorAll(M[e].selector(e, i))
  ).find(H) ?? null;
}
function L(t) {
  if (t === null) return NaN;
  if (t.closest("Private")) return NaN;
  const e = t.tagName;
  return Bi(e) ? M[e].identity(t) : NaN;
}
lo((t) => (e) => {
  Object.keys(t).length ? e.setValue(t) : e.setValue("");
});
const xi = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  decimal: "[+\\-]?[0-9]+(([.][0-9]*)?|([.][0-9]+))",
  unsigned: "[+]?[0-9]+(([.][0-9]*)?|([.][0-9]+))"
};
function lc(t, e) {
  return typeof t == "string" && typeof e == "string" ? t.localeCompare(e) : typeof t == "object" && typeof e == "string" ? (t.getAttribute("name") ?? "").localeCompare(e) : typeof t == "string" && typeof e == "object" ? t.localeCompare(e.getAttribute("name")) : typeof t == "object" && typeof e == "object" ? (t.getAttribute("name") ?? "").localeCompare(
    e.getAttribute("name") ?? ""
  ) : 0;
}
function fe(...t) {
  return t.reduce(
    (e, i) => e.flatMap((n) => i.map((r) => [n, r].flat())),
    [[]]
  );
}
function Fo(t, e = /* @__PURE__ */ new WeakSet()) {
  if (e.has(t)) return 1 / 0;
  switch (t?.constructor) {
    case Object:
    case Array:
      return e.add(t), 1 + Math.max(
        -1,
        ...Object.values(t).map((i) => Fo(i, e))
      );
    default:
      return 0;
  }
}
function dc(t) {
  if (t.tagName !== "ExtRef" || t.closest("Private")) return [];
  const [e, i, n, r, o, a, d] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName"
  ].map((u) => t.getAttribute(u)), c = Array.from(t.ownerDocument.getElementsByTagName("IED")).find(
    (u) => u.getAttribute("name") === e && !u.closest("Private")
  );
  return c ? Array.from(c.getElementsByTagName("FCDA")).filter((u) => !u.closest("Private")).filter(
    (u) => (u.getAttribute("ldInst") ?? "") === (i ?? "") && (u.getAttribute("prefix") ?? "") === (n ?? "") && (u.getAttribute("lnClass") ?? "") === (r ?? "") && (u.getAttribute("lnInst") ?? "") === (o ?? "") && (u.getAttribute("doName") ?? "") === (a ?? "") && (u.getAttribute("daName") ?? "") === (d ?? "")
  ) : [];
}
const cc = {
  GOOSE: ["GSEControl"],
  SMV: ["SampledValueControl"],
  Report: ["ReportControl"],
  NONE: ["LogControl", "GSEControl", "SampledValueControl", "ReportControl"]
};
function Bo(t) {
  const e = dc(t), i = cc[t.getAttribute("serviceType") ?? "NONE"] ?? [];
  return new Set(
    e.flatMap((r) => {
      const o = r.parentElement, a = o.getAttribute("name") ?? "", d = o.parentElement;
      return i.flatMap((c) => Array.from(d.getElementsByTagName(c))).filter((c) => c.getAttribute("datSet") === a);
    })
  );
}
function H(t) {
  return !t.closest("Private");
}
const uc = 99, mc = Array(uc).fill(1).map((t, e) => `${e + 1}`);
function Ho(t) {
  const e = /* @__PURE__ */ new Map();
  return (i) => {
    if (!e.has(i)) {
      const n = new Set(
        $(t, "LNode").filter((r) => r.getAttribute("lnClass") === i).map((r) => r.getAttribute("lnInst"))
      );
      e.set(i, () => {
        const r = mc.find((o) => !n.has(o));
        return r && n.add(r), r;
      });
    }
    return e.get(i)();
  };
}
function pc(t, e) {
  const i = {};
  return Array.from(t.attributes).forEach((n) => {
    i[n.name] = n.value;
  }), { element: t, oldAttributes: i, newAttributes: e };
}
function J(t, e = "user", i) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { action: t, initiator: e, ...i?.detail }
  });
}
const qo = O`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, hc = O`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H13A2,2 0 0,1 15,9V17H13V13H11V17H9V9A2,2 0 0,1 11,7M11,9V11H13V9H11M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
</svg>`, fc = O`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H13A2,2 0 0,1 15,9V10H13V9H11V15H13V14H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, bc = O`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15V9H11V11H14V13H11V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, gc = O`<svg  viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, xc = O`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M14,7V9H13V15H14V17H10V15H11V9H10V7H14M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, vc = O`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M9,7H11V10.33L13,7H15L12,12L15,17H13L11,13.67V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, yc = O`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15A2,2 0 0,1 17,9V17H15V9H13V16H11V9H9V17H7V9A2,2 0 0,1 9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, wc = O`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11A2,2 0 0,1 13,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Ac = O`<svg  viewBox="0 0 24 24">
    <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,7H13A2,2 0 0,1 15,9V15A2,2 0 0,1 13,17V19H11V17A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M11,9V15H13V9H11Z" />
</svg>`, _c = O`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,16.41 7.58,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Ec = O`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Sc = O`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15V9H13V17H11V9H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Cc = O`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H11L12,9.5L13,7H15L13,12L15,17H13L12,14.5L11,17H9L11,12L9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, $c = O`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H11L12,10L13,7H15L13,13V17H11V13L9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Ic = O`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15V9L11,15H15V17H9V15L13,9H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Go = {
  IED: [
    {
      attributeName: "iedName",
      filter: Pt("Association")
    },
    {
      attributeName: "iedName",
      filter: Pt("ClientLN")
    },
    {
      attributeName: "iedName",
      filter: Pt("ConnectedAP")
    },
    {
      attributeName: "iedName",
      filter: Pt("ExtRef")
    },
    {
      attributeName: "iedName",
      filter: Pt("KDC")
    },
    {
      attributeName: "iedName",
      filter: Pt("LNode")
    },
    {
      attributeName: null,
      filter: an("GSEControl > IEDName")
    },
    {
      attributeName: null,
      filter: an("SampledValueControl > IEDName")
    },
    {
      attributeName: null,
      filter: an("LN > DOI > DAI > Val")
    }
  ],
  Substation: [
    {
      attributeName: "substationName",
      filter: Pt("Terminal")
    }
  ],
  VoltageLevel: [
    {
      attributeName: "voltageLevelName",
      filter: Ur("Terminal", {
        Substation: "substationName"
      })
    }
  ],
  Bay: [
    {
      attributeName: "bayName",
      filter: Ur("Terminal", {
        Substation: "substationName",
        VoltageLevel: "voltageLevelName"
      })
    }
  ]
};
function Pt(t) {
  return function(i, n, r) {
    return `${t}[${n}="${r}"]`;
  };
}
function an(t) {
  return function() {
    return `${t}`;
  };
}
function Ur(t, e) {
  return function(n, r, o) {
    return `${t}${Object.entries(e).map(([a, d]) => {
      const c = n.closest(a);
      if (c && c.hasAttribute("name")) {
        const u = c.getAttribute("name");
        return `[${d}="${u}"]`;
      }
      return null;
    }).join("")}[${r}="${o}"]`;
  };
}
function Nc(t, e, i) {
  const n = t.cloneNode(!1);
  return n.setAttribute(e, i), n;
}
function Wo(t, e) {
  const i = t.cloneNode(!1);
  return i.textContent = e, i;
}
function Zn(t, e, i) {
  if (e === null || e === i)
    return [];
  const n = Go[t.tagName];
  if (n === void 0)
    return [];
  const r = [];
  return n.forEach((o) => {
    const a = o.filter(t, o.attributeName, e);
    o.attributeName ? Array.from(t.ownerDocument.querySelectorAll(`${a}`)).filter(H).forEach((d) => {
      const c = Nc(
        d,
        o.attributeName,
        i
      );
      r.push({ old: { element: d }, new: { element: c } });
    }) : Array.from(t.ownerDocument.querySelectorAll(`${a}`)).filter((d) => d.textContent === e).filter(H).forEach((d) => {
      const c = Wo(d, i);
      r.push({ old: { element: d }, new: { element: c } });
    });
  }), t.tagName === "IED" && r.push(...kc(t, e, i)), r;
}
function kc(t, e, i) {
  const n = [];
  return t.ownerDocument.querySelectorAll("IED").forEach((o) => {
    const a = Array.from(
      o.querySelectorAll(
        ':scope > AccessPoint > Server > LDevice > LN[lnClass="LGOS"] > DOI > DAI > Val, :scope > AccessPoint > Server > LDevice > LN[lnClass="LSVS"] > DOI > DAI > Val'
      )
    );
    if (a.length === 0) return;
    const d = o.querySelector(
      `:scope > AccessPoint > Server > LDevice > LN0 > Inputs > ExtRef[iedName="${e}"][srcCBName]`
    ), c = d?.getAttribute("srcLDInst") + "/" + d?.getAttribute("srcLNClass") + "." + d?.getAttribute("srcCBName");
    for (let u of a)
      if (e + c === u.textContent.trim()) {
        const h = Wo(
          u,
          i + c
        );
        n.push({
          old: { element: u },
          new: { element: h }
        });
        break;
      }
  }), n;
}
function Uo(t) {
  const e = ad(t) ?? null;
  if (e === null)
    return [];
  const i = Go[t.tagName];
  if (i === void 0)
    return [];
  const n = [];
  return i.forEach((r) => {
    const o = r.filter(t, r.attributeName, e);
    r.attributeName ? Array.from(t.ownerDocument.querySelectorAll(`${o}`)).filter(H).forEach((a) => {
      n.push({ old: { parent: a.parentElement, element: a } });
    }) : Array.from(t.ownerDocument.querySelectorAll(`${o}`)).filter((a) => a.textContent === e).filter(H).forEach((a) => {
      a.parentElement && n.push({
        old: {
          parent: a.parentElement.parentElement,
          element: a.parentElement
        }
      });
    });
  }), n;
}
function jo(t) {
  return (e) => {
    const i = x(e.find((o) => o.label === "name")), n = x(e.find((o) => o.label === "desc"));
    if (i === t.getAttribute("name") && n === t.getAttribute("desc"))
      return [];
    const r = G(t, { name: i, desc: n });
    return [{ old: { element: t }, new: { element: r } }];
  };
}
function Lc(t, e) {
  return (i) => {
    const n = x(i.find((c) => c.label === "name")), r = t.getAttribute("name"), o = x(i.find((c) => c.label === "desc"));
    if (n === r && o === t.getAttribute("desc"))
      return [];
    const a = G(t, { name: n, desc: o }), d = {
      actions: [],
      title: l(e, { name: n })
    };
    return d.actions.push({
      old: { element: t },
      new: { element: a }
    }), d.actions.push(...Zn(t, r, n)), d.actions.length ? [d] : [];
  };
}
function Ko(t, e) {
  return (i) => {
    const n = {};
    if (Tc(n, t, i), Object.keys(n).length == 0)
      return [];
    Dc(t, n);
    const r = x(i.find((a) => a.label === "name")), o = {
      actions: [],
      title: l(e, { name: r })
    };
    return o.actions.push(pc(t, n)), o.actions.push(
      ...Zn(t, t.getAttribute("name"), r)
    ), o.actions.length ? [o] : [];
  };
}
function Tc(t, e, i) {
  const n = x(i.find((o) => o.label === "name")), r = x(i.find((o) => o.label === "desc"));
  n !== e.getAttribute("name") && (t.name = n), r !== e.getAttribute("desc") && (t.desc = r);
}
function Dc(t, e) {
  const i = Object.keys(e);
  return Array.from(t.attributes).filter((n) => !i.includes(n.name)).forEach((n) => {
    e[n.name] = n.value;
  }), e;
}
function Xo(t, e) {
  return [
    _`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${l("bay.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    _`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${l("bay.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function zc(t) {
  return (e) => {
    const i = x(e.find((a) => a.label === "name")), n = x(e.find((a) => a.label === "desc")), r = D(t.ownerDocument, "Bay", {
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
function Rc(t) {
  return [
    {
      title: l("bay.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: l("add"),
        action: zc(t)
      },
      content: Xo("", "")
    }
  ];
}
function Oc(t) {
  return [
    {
      title: l("bay.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: l("save"),
        action: Lc(
          t,
          "bay.action.updateBay"
        )
      },
      content: Xo(
        t.getAttribute("name"),
        t.getAttribute("desc")
      )
    }
  ];
}
const Dn = {
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
function Pc(t) {
  if (!t) return null;
  const [e, i, n, r, o] = [
    "lnInst",
    "lnClass",
    "iedName",
    "ldInst",
    "prefix"
  ].map((h) => t?.getAttribute(h)), a = [`IED[name="${n}"]`, "IED"], d = ["AccessPoint > Server"], c = [
    `LDevice[inst="${r}"] > LN[inst="${e}"][lnClass="${i}"]`
  ], u = o && o !== "" ? [`[prefix="${o}"]`] : ['[prefix=""]', ":not(prefix)"];
  return t.ownerDocument.querySelector(
    fe(
      a,
      [" > "],
      d,
      [" > "],
      c,
      u
    ).map((h) => h.join("")).join(",")
  );
}
function Zo(t) {
  const e = t?.ownerDocument, i = t.getAttribute("lnType"), n = t.getAttribute("lnClass"), r = e.querySelector(
    `DataTypeTemplates > LNodeType[id="${i}"][lnClass="${n}"] > DO[name="SwTyp"]`
  );
  if (r) {
    const o = r.getAttribute("type");
    return e.querySelector(
      `DataTypeTemplates > DOType[id="${o}"] > DA[name="stVal"] > Val`
    )?.innerHTML.trim();
  }
}
function Mc(t) {
  const e = t.querySelector(
    'DOI[name="SwTyp"] > DAI[name="stVal"]'
  );
  return e ? e.querySelector("Val")?.innerHTML.trim() : Zo(t);
}
function Vc(t) {
  return Array.from(t.querySelectorAll("Terminal")).some(
    (e) => e.getAttribute("cNodeName") === "grounded"
  );
}
function Fc(t) {
  const e = t.querySelector('LNode[lnClass="XSWI"]'), i = Pc(e);
  let n;
  return i ? n = Mc(i) : e && (n = Zo(e)), n ? ["Earthing Switch", "High Speed Earthing Switch"].includes(n) : !1;
}
function Yo(t) {
  return t.getAttribute("type") === "DIS" && (Vc(t) || Fc(t)) ? "ERS" : t.getAttribute("type") ?? "";
}
function Bc(t) {
  return Dn[Yo(t)] ?? l("conductingequipment.unknownType");
}
function Hc(t, e) {
  return t === "create" ? s`<mwc-select
        style="--mdc-menu-max-height: 196px;"
        required
        label="type"
        helper="${l("conductingequipment.wizard.typeHelper")}"
        validationMessage="${l("textfield.required")}"
      >
        ${Object.keys(Dn).map(
    (i) => s`<mwc-list-item value="${i}">${Dn[i]}</mwc-list-item>`
  )}
      </mwc-select>` : s`<mwc-select
        label="type"
        helper="${l("conductingequipment.wizard.typeHelper")}"
        validationMessage="${l("textfield.required")}"
        disabled
      >
        <mwc-list-item selected value="0">${e}</mwc-list-item>
      </mwc-select>`;
}
function Qo(t, e, i, n, r) {
  return [
    Hc(i, n),
    s`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${l("conductingequipment.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${r}
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${l("conductingequipment.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function qc(t) {
  return (e) => {
    const i = x(e.find((E) => E.label === "name")), n = x(e.find((E) => E.label === "desc")), r = x(e.find((E) => E.label === "type")), o = r === "ERS" ? "DIS" : r, a = D(t.ownerDocument, "ConductingEquipment", {
      name: i,
      type: o,
      desc: n
    });
    if (r !== "ERS") return [{ new: { parent: t, element: a } }];
    const d = t.closest("VoltageLevel")?.querySelector('ConnectivityNode[name="grounded"]'), c = d ? d.closest("Substation")?.getAttribute("name") ?? null : t.closest("Substation")?.getAttribute("name") ?? null, u = d ? d.closest("VoltageLevel")?.getAttribute("name") ?? null : t.closest("VoltageLevel")?.getAttribute("name") ?? null, h = d ? d.closest("Bay")?.getAttribute("name") ?? null : t.closest("Bay")?.getAttribute("name") ?? null, b = h && u && c ? c + "/" + u + "/" + h + "/grounded" : null;
    a.appendChild(
      D(t.ownerDocument, "Terminal", {
        name: "T1",
        cNodeName: "grounded",
        substationName: c,
        voltageLevelName: u,
        bayName: h,
        connectivityNode: b
      })
    );
    const g = {
      new: {
        parent: t,
        element: a
      }
    };
    if (d) return [g];
    const v = D(
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
function Jo(t, e) {
  return Array.from(t.querySelectorAll("ConductingEquipment")).filter(H).map((i) => i.getAttribute("name") ?? "").filter((i) => e && i !== e);
}
function Gc(t) {
  const e = Jo(t);
  return [
    {
      title: l("conductingequipment.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: l("add"),
        action: qc(t)
      },
      content: Qo(
        "",
        "",
        "create",
        "",
        e
      )
    }
  ];
}
function Wc(t) {
  const e = Jo(
    t.parentNode,
    t.getAttribute("name")
  );
  return [
    {
      title: l("conductingequipment.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: l("save"),
        action: jo(t)
      },
      content: Qo(
        t.getAttribute("name"),
        t.getAttribute("desc"),
        "edit",
        Bc(t),
        e
      )
    }
  ];
}
function Uc(t, e, i) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${l("connectivitynode.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${i}
      readonly
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="pathName"
      .maybeValue=${e}
      helper="${l("connectivitynode.wizard.pathNameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function jc(t) {
  const e = Array.from(
    t.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(H).map((i) => i.getAttribute("name") ?? "").filter((i) => i !== t.getAttribute("name"));
  return [
    {
      title: l("connectivitynode.wizard.title.edit"),
      element: t,
      content: Uc(
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
const jr = /* @__PURE__ */ new WeakMap(), Kr = 2147483647, Kc = ti((...t) => (e) => {
  let i = jr.get(e);
  i === void 0 && (i = {
    lastRenderedIndex: Kr,
    values: []
  }, jr.set(e, i));
  const n = i.values;
  let r = n.length;
  i.values = t;
  for (let o = 0; o < t.length && !(o > i.lastRenderedIndex); o++) {
    const a = t[o];
    if (Un(a) || typeof a.then != "function") {
      e.setValue(a), i.lastRenderedIndex = o;
      break;
    }
    o < r && a === n[o] || (i.lastRenderedIndex = Kr, r = 0, Promise.resolve(a).then((d) => {
      const c = i.values.indexOf(a);
      c > -1 && c < i.lastRenderedIndex && (i.lastRenderedIndex = c, e.setValue(d), e.commit());
    }));
  }
});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class wi extends xe {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), n = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : s``, r = this.hasMeta && this.left ? this.renderMeta() : s``, o = this.renderRipple();
    return s`
      ${o}
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
p([
  w("slot")
], wi.prototype, "slotElement", void 0);
p([
  w("mwc-checkbox")
], wi.prototype, "checkboxElement", void 0);
p([
  m({ type: Boolean })
], wi.prototype, "left", void 0);
p([
  m({ type: String, reflect: !0 })
], wi.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Xc = V`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ei = class extends wi {
};
ei.styles = [Eo, Xc];
ei = p([
  R("mwc-check-list-item")
], ei);
var Zc = Object.defineProperty, Yc = Object.getOwnPropertyDescriptor, Xt = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Yc(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && Zc(e, i, r), r;
};
function zn(t) {
  return !t.closest("filtered-list") || !t.parentElement || t.parentElement instanceof Ze ? t : zn(t.parentElement);
}
function Qc(t, e) {
  const i = t.innerText + `
`, n = Array.from(t.children).map((d) => d.innerText).join(`
`), r = t.value, o = (i + n + r).toUpperCase(), a = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  a.length === 1 && a[0] === "" || a.every((d) => new RegExp(
    `*${d}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(o)) ? zn(t).classList.remove("hidden") : zn(t).classList.add("hidden");
}
let Ze = class extends Ne {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((t) => t instanceof ei);
  }
  get isAllSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof ei).every((t) => t.selected);
  }
  get isSomeSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof ei).some((t) => t.selected);
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
      (t) => Qc(t, this.searchField.value)
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
Ze.styles = V`
    ${ms(zi.styles)}

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
Xt([
  m({ type: String })
], Ze.prototype, "searchFieldLabel", 2);
Xt([
  m({ type: Boolean })
], Ze.prototype, "disableCheckAll", 2);
Xt([
  I()
], Ze.prototype, "existCheckListItem", 1);
Xt([
  I()
], Ze.prototype, "isAllSelected", 1);
Xt([
  I()
], Ze.prototype, "isSomeSelected", 1);
Xt([
  w("mwc-textfield")
], Ze.prototype, "searchField", 2);
Ze = Xt([
  R("filtered-list")
], Ze);
var Jc = Object.defineProperty, eu = Object.getOwnPropertyDescriptor, pt = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? eu(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && Jc(e, i, r), r;
};
const tu = s`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${l("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let We = class extends j {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (t) => ({
      path: t,
      header: s`<h2>${"/" + t.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return Fo(this.selection);
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
        for (const a of n) r = r[a];
        const o = Object.keys(r).map((a) => n.concat(a));
        return o.length === 0 ? [n] : o;
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
    for await (const { header: r, entries: o, path: a } of i)
      (r || o.length > 0) && n.push(
        s`${U(r)} ${this.renderDirectory(a, o)}`
      );
    return n.length === 0 ? s`` : s`<div class="column">${n}</div>`;
  }
  render() {
    const t = new Array(this.depth).fill(0).map((e, i) => this.renderColumn(i));
    return this.loaded = Promise.allSettled(t).then(), s`<div class="pane">
      ${t.map((e) => Kc(e, tu))}
    </div>`;
  }
};
We.styles = V`
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
pt([
  m({ type: Object })
], We.prototype, "selection", 2);
pt([
  m({ type: Boolean })
], We.prototype, "multi", 2);
pt([
  m({ type: Number })
], We.prototype, "depth", 1);
pt([
  m({ type: Array })
], We.prototype, "paths", 1);
pt([
  m({ type: Array })
], We.prototype, "path", 1);
pt([
  m({ attribute: !1 })
], We.prototype, "read", 2);
pt([
  m({ attribute: !1 })
], We.prototype, "loaded", 2);
pt([
  w("div")
], We.prototype, "container", 2);
We = pt([
  R("finder-list")
], We);
function Yn(t) {
  return t.startsWith("IED:") ? t.replace(/^.*:/, "").trim() : t.startsWith("LN0:") ? "LLN0" : t.replace(/^.*>/, "").trim();
}
function Qn(t, e) {
  return async (i) => {
    const [n, r] = i[i.length - 1]?.split(": ", 2), o = le(t, n, r);
    return o ? {
      path: i,
      header: void 0,
      entries: e(o).map(
        (a) => `${a.tagName}: ${L(a)}`
      )
    } : { path: i, header: s`<p>${l("error")}</p>`, entries: [] };
  };
}
function iu(t) {
  return t.tagName === "SCL" ? Array.from(t.querySelectorAll("IED")).filter(H) : [];
}
function Jn(t) {
  return s`<finder-list
    path="${JSON.stringify(["SCL: "])}"
    .read=${Qn(t, iu)}
    .getDisplayString=${Yn}
    .getTitle=${(e) => e[e.length - 1]}
  ></finder-list>`;
}
function ea(t) {
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
function Pi(t) {
  return s`<finder-list
    multi
    .paths=${[["Server: " + L(t)]]}
    .read=${Qn(t.ownerDocument, ea)}
    .getDisplayString=${Yn}
    .getTitle=${(e) => e[e.length - 1]}
  ></finder-list>`;
}
function nu(t) {
  if (t.tagName === "Server")
    return Array.from(t.children).filter(
      (n) => n.tagName === "LDevice" && n.querySelector('LN[lnClass="TCTR"],LN[lnClass="TVTR"]')
    );
  if (t.tagName === "LDevice")
    return Array.from(t.children).filter(
      (n) => n.tagName === "LN" && (n.getAttribute("lnClass") === "TCTR" || n.getAttribute("lnClass") === "TVTR")
    );
  const e = t.tagName === "LN" || t.tagName === "LN0" ? t.getAttribute("lnType") : t.getAttribute("type"), i = t.ownerDocument.querySelector(
    `LNodeType[id="${e}"], DOType[id="${e}"], DAType[id="${e}"]`
  );
  return i ? i?.tagName === "LNodeType" ? Array.from(i.querySelectorAll("DO") ?? []).filter(
    (n) => n.ownerDocument.querySelector(
      `DOType[id="${n.getAttribute("type")}"][cdc="SAV"]`
    )
  ) : i?.tagName === "DOType" ? Array.from(i.querySelectorAll("DA") ?? []).filter(
    (n) => n.getAttribute("name") === "instMag" || n.getAttribute("name") === "q"
  ) : Array.from(
    t.ownerDocument.querySelectorAll(
      `LNodeType[id="${e}"] > DO, DOType[id="${e}"] > SDO, DOType[id="${e}"] > DA, DAType[id="${e}"] > BDA`
    )
  ) : [];
}
function Xr(t) {
  return s`<finder-list
    multi
    paths=${JSON.stringify([["Server: " + L(t)]])}
    .read=${Qn(t.ownerDocument, nu)}
    .getDisplayString=${Yn}
    .getTitle=${(e) => e[e.length - 1]}
  ></finder-list>`;
}
function qi(t, e) {
  const [i, n] = e[e.length - 1].split(": "), r = le(t.ownerDocument, i, n);
  if (!r || ea(r).length > 0) return;
  const o = e.find((k) => k.startsWith("LN"));
  if (!o) return;
  const [a, d] = o.split(": "), c = le(t.ownerDocument, a, d);
  if (!c) return;
  const u = c.closest("LDevice")?.getAttribute("inst"), h = c.getAttribute("prefix") ?? "", b = c.getAttribute("lnClass"), g = c.getAttribute("inst") && c.getAttribute("inst") !== "" ? c.getAttribute("inst") : null;
  let v = "", y = "", E = "";
  for (const k of e) {
    const [A, F] = k.split(": ");
    if (!["DO", "DA", "SDO", "BDA"].includes(A)) continue;
    const W = le(t.ownerDocument, A, F);
    if (!W) return;
    const ee = W.getAttribute("name");
    A === "DO" && (v = ee), A === "SDO" && (v = v + "." + ee), A === "DA" && (y = ee, E = W.getAttribute("fc") ?? ""), A === "BDA" && (y = y + "." + ee);
  }
  if (!(!u || !b || !v || !y || !E))
    return D(t.ownerDocument, "FCDA", {
      ldInst: u,
      prefix: h,
      lnClass: b,
      lnInst: g,
      doName: v,
      daName: y,
      fc: E
    });
}
function ru(t) {
  return (e, i) => {
    const r = i.shadowRoot.querySelector("finder-list")?.paths ?? [], o = [];
    for (const a of r) {
      const d = qi(t, a);
      d && o.push({
        new: {
          parent: t,
          element: d,
          reference: null
        }
      });
    }
    return o;
  };
}
function ta(t) {
  const e = t.closest("Server");
  return [
    {
      title: l("wizard.title.add", { tagName: "FCDA" }),
      primary: {
        label: "add",
        icon: "add",
        action: ru(t)
      },
      content: [e ? Pi(e) : s``]
    }
  ];
}
const Xe = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  asciName: "[A-Za-z][0-9,A-Z,a-z_]*",
  abstractDataAttributeName: "((T)|(Test)|(Check)|(SIUnit)|(Oper)|(SBO)|(SBOw)|(Cancel)|[a-z][0-9A-Za-z]*)"
}, Gi = {
  cbName: 32,
  abstracDaName: 60
};
function sn(t, e) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { ...t, ...e?.detail }
  });
}
function ou(t) {
  return (e, i, n) => {
    const r = n.items.filter((d) => d.selected).map((d) => d.value).map((d) => le(t.ownerDocument, "LNodeType", d)).filter((d) => d !== null), o = Ho(t);
    return r.map((d) => {
      const c = d.getAttribute("lnClass");
      if (!c) return null;
      const u = o(c);
      if (!u) {
        i.dispatchEvent(
          sn({
            kind: "error",
            title: l("lnode.log.title", { lnClass: c }),
            message: l("lnode.log.nonuniquelninst")
          })
        );
        return;
      }
      const h = $(t, "LNode").some(
        (y) => y.getAttribute("lnClass") === "LLN0"
      );
      if (c === "LLN0" && h) {
        i.dispatchEvent(
          sn({
            kind: "error",
            title: l("lnode.log.title", { lnClass: c }),
            message: l("lnode.log.uniqueln0", { lnClass: c })
          })
        );
        return;
      }
      const b = $(t, "LNode").some(
        (y) => y.getAttribute("lnClass") === "LPHD"
      );
      if (c === "LPHD" && b) {
        i.dispatchEvent(
          sn({
            kind: "error",
            title: l("lnode.log.title", { lnClass: c }),
            message: l("lnode.log.uniqueln0", { lnClass: c })
          })
        );
        return;
      }
      const g = c === "LLN0" ? "" : u, v = D(t.ownerDocument, "LNode", {
        iedName: "None",
        ldInst: null,
        prefix: null,
        lnClass: c,
        lnInst: g,
        lnType: d.getAttribute("id")
      });
      return { new: { parent: t, element: v } };
    }).filter((d) => d);
  };
}
function au(t) {
  return (e) => {
    e.dispatchEvent(N()), e.dispatchEvent(N(ra(t)));
  };
}
function ia(t) {
  const e = Array.from(
    t.ownerDocument.querySelectorAll("LNodeType")
  );
  return [
    {
      title: l("lnode.wizard.title.selectLNodeTypes"),
      menuActions: [
        {
          icon: "",
          label: l("lnode.wizard.reference"),
          action: au(t)
        }
      ],
      primary: {
        icon: "save",
        label: l("save"),
        action: ou(t)
      },
      content: [
        _`<filtered-list multi
          >${e.map((i) => {
          const n = i.getAttribute("lnClass") === "LLN0" && $(t, "LNode").some(
            (r) => r.getAttribute("lnClass") === "LLN0"
          ) || i.getAttribute("lnClass") === "LPHD" && $(t, "LNode").some(
            (r) => r.getAttribute("lnClass") === "LPHD"
          );
          return _`<mwc-check-list-item
              twoline
              value="${L(i)}"
              ?disabled=${n}
              ><span>${i.getAttribute("lnClass")}</span
              ><span slot="secondary"
                >${n ? l("lnode.wizard.uniquewarning") : L(i)}</span
              ></mwc-check-list-item
            >`;
        })}</filtered-list
        >`
      ]
    }
  ];
}
const su = {
  CBR: ["CSWI", "CILO", "XCBR"],
  DIS: ["CSWI", "CILO", "XSWI"],
  VTR: ["TVTR"],
  CTR: ["TCTR"],
  Bay: ["LLN0"],
  VoltageLevel: ["LLN0"],
  Substation: ["LLN0"]
};
function na(t, e) {
  return t.disabled !== e.disabled ? e.disabled ? -1 : 1 : t.preferred !== e.preferred ? t.preferred ? -1 : 1 : t.selected !== e.selected ? t.selected ? -1 : 1 : 0;
}
const lu = "Client LN";
function Zr(t, e) {
  return Array.from(t.getElementsByTagName("LNode")).filter((i) => !i.closest("Private")).filter((i) => er(e, i))[0] ?? null;
}
function er(t, e) {
  return (e.getAttribute("iedName") ?? "") === (t.closest("IED")?.getAttribute("name") ?? "") && (e.getAttribute("ldInst") ?? "") === (t.closest("LDevice")?.getAttribute("inst") ?? "") && (e.getAttribute("prefix") ?? "") === (t.getAttribute("prefix") ?? "") && (e.getAttribute("lnClass") ?? "") === (t.getAttribute("lnClass") ?? "") && (e.getAttribute("lnInst") ?? "") === (t.getAttribute("inst") ?? "");
}
function du(t, e) {
  const i = D(t.ownerDocument, "LNode", {
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
function cu(t, e) {
  return {
    old: {
      parent: t,
      element: e,
      reference: e.nextElementSibling
    }
  };
}
function uu(t, e) {
  return t.some((i) => er(i, e));
}
function mu(t, e) {
  return e.some((i) => er(t, i));
}
function pu(t) {
  return (e, i, n) => {
    const r = n.items.filter((c) => c.selected).map((c) => c.value).map((c) => {
      const u = le(t.ownerDocument, "LN0", c);
      return u || le(t.ownerDocument, "LN", c);
    }).filter((c) => c !== null), o = $(t, "LNode").filter(
      H
    ), a = o.filter((c) => !uu(r, c)).map((c) => cu(t, c)), d = r.filter((c) => !mu(c, o)).map((c) => du(t, c));
    return a.concat(d);
  };
}
function hu(t, e) {
  return t.parentElement?.parentElement?.nextElementSibling?.querySelector(
    e
  ) ?? null;
}
function fu(t, e) {
  if (!(t.target instanceof Ne)) return;
  const i = hu(t.target, "#lnList");
  if (i === null) return;
  const n = e.ownerDocument, a = t.target.selected.flatMap(
    (d) => Array.from(
      n.querySelectorAll(
        `:root > IED[name="${d.value}"] > AccessPoint > LN,:root > IED[name="${d.value}"] > AccessPoint > Server > LDevice > LN,:root > IED[name="${d.value}"] > AccessPoint > Server > LDevice > LN0`
      )
    ).filter((c) => !c.closest("Private"))
  ).filter((d) => d !== null).map((d) => {
    const c = su[e.getAttribute("type") ? e.getAttribute("type") ?? "" : e.tagName ?? ""]?.includes(d.getAttribute("lnClass") ?? "") ?? !1, u = Zr(e.ownerDocument, d), h = u?.parentElement === e;
    return {
      selected: h,
      disabled: u !== null && !h,
      prefered: c,
      element: d
    };
  }).sort(na).map((d) => _`<mwc-check-list-item
      ?selected=${d.selected}
      ?disabled=${d.disabled}
      value="${L(d.element)}"
      twoline
      ><span
        >${d.element.getAttribute("prefix") ?? ""}${d.element.getAttribute("lnClass")}${d.element.getAttribute(
    "inst"
  ) ?? ""}
        ${d.disabled ? _` <mwc-icon style="--mdc-icon-size: 1em;"
                >account_tree</mwc-icon
              >
              ${od(Zr(n, d.element))}` : ""}</span
      ><span slot="secondary"
        >${d.element.closest("IED")?.getAttribute("name") ?? ""} |
        ${d.element.closest("LDevice") ? d.element.closest("LDevice")?.getAttribute("inst") : lu}</span
      ></mwc-check-list-item
    >`);
  Fn(_`${a}`, i);
}
function bu(t) {
  const e = t.ownerDocument;
  return e.querySelectorAll(":root > IED").length > 0 ? _`<filtered-list
      disableCheckAll
      multi
      id="iedList"
      @selected=${(i) => fu(i, t)}
      >${Array.from(e.querySelectorAll(":root > IED")).map((i) => i.getAttribute("name")).map((i) => ({
    selected: Array.from(t.children).filter((n) => !n.closest("Private")).filter(
      (n) => n.tagName === "LNode" && n.getAttribute("iedName") === i
    ).length > 0,
    iedName: i
  })).sort(na).map(
    (i) => _`<mwc-check-list-item
              value="${i.iedName ?? ""}"
              ?selected=${i.selected}
              >${i.iedName}</mwc-check-list-item
            >`
  )}</filtered-list
    >` : _`<mwc-list-item noninteractive graphic="icon">
      <span>${l("lnode.wizard.placeholder")}</span>
      <mwc-icon slot="graphic">info</mwc-icon>
    </mwc-list-item>`;
}
function gu(t) {
  return (e) => {
    e.dispatchEvent(N()), e.dispatchEvent(N(ia(t)));
  };
}
function ra(t) {
  return [
    {
      title: l("lnode.wizard.title.selectIEDs"),
      menuActions: [
        {
          icon: "",
          label: l("lnode.wizard.instance"),
          action: gu(t)
        }
      ],
      content: [bu(t)]
    },
    {
      initial: Array.from(t.children).some(
        (e) => e.tagName === "LNode"
      ),
      title: l("lnode.wizard.title.selectLNs"),
      primary: {
        icon: "save",
        label: l("save"),
        action: pu(t)
      },
      content: [_`<filtered-list multi id="lnList"></filtered-list>`]
    }
  ];
}
function xu(t) {
  return t.tagName === "Function" || t.tagName === "SubFunction" || t.tagName === "EqFunction" || t.tagName === "EqSubFunction" ? ia(t) : ra(t);
}
function vu(t) {
  const e = t.iedName !== "None";
  return [
    _`<wizard-textfield
      label="iedName"
      .maybeValue=${t.iedName}
      helper="${l("scl.iedName")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    _`<wizard-textfield
      label="ldInst"
      .maybeValue=${t.ldInst}
      helper="${l("scl.ldInst")}"
      helperPersistent
      nullable
      disabled
    ></wizard-textfield>`,
    _`<wizard-textfield
      label="prefix"
      .maybeValue=${t.prefix}
      helper="${l("scl.prefix")}"
      pattern="${Xe.asciName}"
      maxLength="11"
      helperPersistent
      nullable
      ?disabled=${e}
    ></wizard-textfield>`,
    _`<wizard-textfield
      label="lnClass"
      .maybeValue=${t.lnClass}
      helper="${l("scl.lnClass")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    _`<wizard-textfield
      label="lnInst"
      .maybeValue=${t.lnInst}
      helper="${l("scl.lnInst")}"
      helperPersistent
      type="number"
      min="1"
      max="99"
      .reservedValues=${t.reservedLnInst}
      ?disabled=${e}
    ></wizard-textfield>`
  ];
}
function yu(t) {
  return (e) => {
    const i = {}, n = ["iedName", "ldInst", "prefix", "lnClass", "lnInst"];
    n.forEach((o) => {
      i[o] = x(e.find((a) => a.label === o));
    });
    let r = null;
    if (n.some((o) => i[o] !== t.getAttribute(o))) {
      const o = G(t, i);
      return r = {
        old: { element: t },
        new: { element: o }
      }, [r];
    }
    return [];
  };
}
function wu(t) {
  const [e, i, n, r, o] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((d) => t.getAttribute(d)), a = $(
    t.parentElement,
    "LNode"
  ).filter(
    (d) => d !== t && d.getAttribute("lnClass") === t.getAttribute("lnClass")
  ).map((d) => d.getAttribute("lnInst"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "LNode" }),
      element: t,
      primary: {
        label: l("save"),
        icon: "save",
        action: yu(t)
      },
      content: [
        ...vu({
          iedName: e,
          ldInst: i,
          prefix: n,
          lnClass: r,
          lnInst: o,
          reservedLnInst: a
        })
      ]
    }
  ];
}
function oa(t) {
  return Object.entries(t).map(
    ([e, i]) => s`<wizard-checkbox
        label="${e}"
        .maybeValue=${i}
        nullable
        helper="${l(`scl.${e}`)}"
      ></wizard-checkbox>`
  );
}
function Au(t) {
  return (e) => {
    const i = x(e.find((b) => b.label === "seqNum")), n = x(e.find((b) => b.label === "timeStamp")), r = x(e.find((b) => b.label === "dataSet")), o = x(e.find((b) => b.label === "reasonCode")), a = x(e.find((b) => b.label === "dataRef")), d = x(e.find((b) => b.label === "entryID")), c = x(e.find((b) => b.label === "configRef")), u = x(e.find((b) => b.label === "bufOvfl"));
    if (i === t.getAttribute("seqNum") && n === t.getAttribute("timeStamp") && r === t.getAttribute("dataSet") && o === t.getAttribute("reasonCode") && a === t.getAttribute("dataRef") && d === t.getAttribute("entryID") && c === t.getAttribute("configRef") && u === t.getAttribute("bufOvfl"))
      return [];
    const h = G(t, {
      seqNum: i,
      timeStamp: n,
      dataSet: r,
      reasonCode: o,
      dataRef: a,
      entryID: d,
      configRef: c,
      bufOvfl: u
    });
    return [{ old: { element: t }, new: { element: h } }];
  };
}
function aa(t) {
  const [
    e,
    i,
    n,
    r,
    o,
    a,
    d,
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
  ].map((u) => t.getAttribute(u));
  return [
    {
      title: l("wizard.title.edit", { tagName: t.tagName }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Au(t)
      },
      content: oa({
        seqNum: e,
        timeStamp: i,
        dataSet: n,
        reasonCode: r,
        dataRef: o,
        entryID: a,
        configRef: d,
        bufOvfl: c
      })
    }
  ];
}
let _u = 1, sa = 1, la = 1;
function Eu(t, e) {
  return e.parentElement?.querySelectorAll(
    `LN[lnClass="CSWI"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""},LN[lnClass="CILO"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""},LN[lnClass="XCBR"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""},LN[lnClass="XSWI"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""}`
  ).forEach((i) => {
    t.appendChild(
      D(e.ownerDocument, "LNode", {
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
function da(t) {
  return t.parentElement?.querySelector(
    `LN[lnClass="XCBR"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""}`
  ) ? "CBR" : "DIS";
}
function Su(t) {
  return t.getAttribute("prefix") && t.getAttribute("inst") ? t.getAttribute("prefix") + t.getAttribute("inst") : t.getAttribute("inst") && da(t) === "CBR" ? "QA" + sa++ : "QB" + la++;
}
function Cu(t, e) {
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
function $u(t) {
  return Array.from(
    t.querySelectorAll('AccessPoint > Server > LDevice > LN[lnClass="CSWI"]')
  );
}
function Iu(t, e) {
  return t.parentElement ? $u(t).filter((i) => Cu(i, e)) : [];
}
function Nu(t, e) {
  const i = Iu(t, e);
  if (sa = 1, la = 1, i.length) {
    const n = D(t.ownerDocument, "Bay", {
      name: "Q" + _u++,
      desc: "Bay for controller " + t.getAttribute("name")
    });
    return i.map((o) => Eu(
      D(t.ownerDocument, "ConductingEquipment", {
        name: Su(o),
        type: da(o)
      }),
      o
    )).forEach((o) => n.appendChild(o)), n;
  }
  return null;
}
function ku(t, e) {
  return (i, n, r) => {
    const o = [], a = r.selected.map(
      (u) => u.value
    ), d = D(t, "VoltageLevel", {
      name: "E1",
      desc: "guessed by OpenSCD",
      nomFreq: "50.0",
      numPhases: "3"
    }), c = D(t, "Voltage", {
      unit: "V",
      multiplier: "k"
    });
    return c.textContent = "110.00", d.appendChild(c), o.push({
      new: { parent: t.querySelector("SCL"), element: e }
    }), o.push({
      new: {
        parent: e,
        element: d
      }
    }), Array.from(t.querySelectorAll(":root > IED")).sort(lc).map((u) => Nu(u, a)).forEach((u) => {
      u && o.push({ new: { parent: d, element: u } });
    }), o;
  };
}
function Lu(t, e) {
  return [
    {
      title: l("guess.wizard.title"),
      primary: {
        icon: "play_arrow",
        label: l("guess.wizard.primary"),
        action: ku(t, e)
      },
      content: [
        s`<p>${l("guess.wizard.description")}</p>`,
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
const Tu = {
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
}, Du = {
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
}, Yr = { en: Du, de: Tu };
async function zu(t) {
  return Object.keys(Yr).includes(t) ? Yr[t] : {};
}
_s({ loader: zu, empty: (t) => t });
const ca = localStorage.getItem("language") || "en";
console.log("SETTING LANGUAGE TO", ca);
$s(ca);
function ua(t, e, i) {
  return [
    _`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${l("substation.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    _`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${l("substation.wizard.descHelper")}"
    ></wizard-textfield>`,
    i ? _`<mwc-formfield label="${l("guess.wizard.primary")}">
          <mwc-checkbox></mwc-checkbox>
        </mwc-formfield>` : _``
  ];
}
function Ru(t) {
  return (e, i) => {
    const n = x(e.find((d) => d.label === "name")), r = x(e.find((d) => d.label === "desc")), o = i.shadowRoot?.querySelector("mwc-checkbox")?.checked;
    t.ownerDocument.createElement("Substation");
    const a = D(t.ownerDocument, "Substation", {
      name: n,
      desc: r
    });
    return o ? [() => Lu(t.ownerDocument, a)] : [{ new: { parent: t, element: a } }];
  };
}
function Ou(t) {
  const e = t.ownerDocument.querySelector("Substation") === null && t.tagName === "SCL";
  return [
    {
      title: l("substation.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: l("add"),
        action: Ru(t)
      },
      content: ua("", "", e)
    }
  ];
}
function Pu(t) {
  return [
    {
      title: l("substation.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: l("save"),
        action: Ko(
          t,
          "substation.action.updatesubstation"
        )
      },
      content: ua(
        t.getAttribute("name") ?? "",
        t.getAttribute("desc"),
        !1
      )
    }
  ];
}
function Mu(t, e, i, n) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${l("terminal.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${n}
      readonly
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="connectivityNode"
      .maybeValue=${e}
      helper="${l("terminal.wizard.connectivityNodeHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      readonly
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="cNodeName"
      .maybeValue=${i}
      helper="${l("terminal.wizard.cNodeNameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function Vu(t) {
  const e = Array.from(
    t.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(H).map((i) => i.getAttribute("name") ?? "").filter((i) => i !== t.getAttribute("name"));
  return [
    {
      title: l("terminal.wizard.title.edit"),
      element: t,
      content: Mu(
        t.getAttribute("name"),
        t.getAttribute("connectivityNode"),
        t.getAttribute("cNodeName"),
        e
      )
    }
  ];
}
const ki = {
  nomFreq: "50",
  numPhases: "3",
  Voltage: "110",
  multiplier: "k"
};
function ma(t, e, i, n, r, o) {
  return [
    _`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${l("voltagelevel.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    _`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${l("voltagelevel.wizard.descHelper")}"
    ></wizard-textfield>`,
    _`<wizard-textfield
      label="nomFreq"
      .maybeValue=${i}
      nullable
      helper="${l("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      required
      validationMessage="${l("textfield.nonempty")}"
      pattern="${xi.unsigned}"
    ></wizard-textfield>`,
    _`<wizard-textfield
      label="numPhases"
      .maybeValue=${n}
      nullable
      helper="${l("voltagelevel.wizard.numPhaseHelper")}"
      suffix="#"
      required
      validationMessage="${l("textfield.nonempty")}"
      type="number"
      min="1"
      max="255"
    ></wizard-textfield>`,
    _`<wizard-textfield
      label="Voltage"
      .maybeValue=${r}
      nullable
      unit="V"
      .multipliers=${[null, "G", "M", "k", "", "m"]}
      .multiplier=${o}
      helper="${l("voltagelevel.wizard.voltageHelper")}"
      required
      validationMessage="${l("textfield.nonempty")}"
      pattern="${xi.decimal}"
    ></wizard-textfield>`
  ];
}
function Fu(t) {
  return (e) => {
    const i = x(e.find((u) => u.label === "name")), n = x(e.find((u) => u.label === "desc")), r = x(e.find((u) => u.label === "nomFreq")), o = x(e.find((u) => u.label === "numPhases")), a = x(e.find((u) => u.label === "Voltage")), d = Xn(e.find((u) => u.label === "Voltage")), c = D(t.ownerDocument, "VoltageLevel", {
      name: i,
      desc: n,
      nomFreq: r,
      numPhases: o
    });
    if (a !== null) {
      const u = D(t.ownerDocument, "Voltage", {
        unit: "V",
        multiplier: d
      });
      u.textContent = a, c.appendChild(u);
    }
    return [
      {
        new: {
          parent: t,
          element: c
        }
      }
    ];
  };
}
function Bu(t) {
  return [
    {
      title: l("voltagelevel.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: l("add"),
        action: Fu(t)
      },
      content: ma(
        "",
        "",
        ki.nomFreq,
        ki.numPhases,
        ki.Voltage,
        ki.multiplier
      )
    }
  ];
}
function Hu(t, e, i, n) {
  if (t === null) {
    const o = D(n.ownerDocument, "Voltage", {
      unit: "V",
      multiplier: i
    });
    return o.textContent = e, {
      new: {
        parent: n,
        element: o,
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
  const r = G(t, { multiplier: i });
  return r.textContent = e, {
    old: { element: t },
    new: { element: r }
  };
}
function qu(t) {
  return (e) => {
    const i = e.find((b) => b.label === "name").value, n = x(e.find((b) => b.label === "desc")), r = x(e.find((b) => b.label === "nomFreq")), o = x(e.find((b) => b.label === "numPhases")), a = x(e.find((b) => b.label === "Voltage")), d = Xn(e.find((b) => b.label === "Voltage"));
    let c, u;
    if (i === t.getAttribute("name") && n === t.getAttribute("desc") && r === t.getAttribute("nomFreq") && o === t.getAttribute("numPhases"))
      c = null;
    else {
      const b = G(t, {
        name: i,
        desc: n,
        nomFreq: r,
        numPhases: o
      });
      c = { old: { element: t }, new: { element: b } };
    }
    a === (t.querySelector("VoltageLevel > Voltage")?.textContent?.trim() ?? null) && d === (t.querySelector("VoltageLevel > Voltage")?.getAttribute("multiplier") ?? null) ? u = null : u = Hu(
      t.querySelector("VoltageLevel > Voltage"),
      a,
      d,
      c?.new.element ?? t
    );
    const h = {
      actions: [],
      title: l("voltagelevel.action.updateVoltagelevel", { name: i })
    };
    return c && h.actions.push(c), u && h.actions.push(u), h.actions.push(
      ...Zn(t, t.getAttribute("name"), i)
    ), h.actions.length ? [h] : [];
  };
}
function Gu(t) {
  return [
    {
      title: l("voltagelevel.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: l("save"),
        action: qu(t)
      },
      content: ma(
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
const pa = "PTR";
function Wu(t) {
  return (e) => {
    const i = x(e.find((a) => a.label === "name")), n = x(e.find((a) => a.label === "desc")), r = D(t.ownerDocument, "PowerTransformer", {
      name: i,
      desc: n,
      type: pa
    });
    return [{
      new: {
        parent: t,
        element: r
      }
    }];
  };
}
function ha(t, e, i, n) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${l("powertransformer.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${n}
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${l("powertransformer.wizard.descHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="type"
      .maybeValue=${i}
      disabled
      helper="${l("powertransformer.wizard.typeHelper")}"
    ></wizard-textfield>`
  ];
}
function fa(t, e) {
  return Array.from(t.querySelectorAll("PowerTransformer")).filter(H).map((i) => i.getAttribute("name") ?? "").filter((i) => e && i !== e);
}
function Uu(t) {
  const e = fa(t);
  return [
    {
      title: l("powertransformer.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: l("add"),
        action: Wu(t)
      },
      content: ha(
        "",
        null,
        pa,
        e
      )
    }
  ];
}
function ju(t) {
  const e = fa(
    t.parentNode,
    t.getAttribute("name")
  );
  return [
    {
      title: l("powertransformer.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: l("save"),
        action: jo(t)
      },
      content: ha(
        t.getAttribute("name"),
        t.getAttribute("desc"),
        t.getAttribute("type"),
        e
      )
    }
  ];
}
function Ku(t) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${l("subnetwork.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${l("subnetwork.wizard.descHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      nullable
      helper="${l("subnetwork.wizard.typeHelper")}"
      pattern="${xi.normalizedString}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="BitRate"
      .maybeValue=${t.BitRate}
      nullable
      unit="b/s"
      .multipliers=${[null, "M"]}
      .multiplier=${t.multiplier}
      helper="${l("subnetwork.wizard.bitrateHelper")}"
      required
      validationMessage="${l("textfield.nonempty")}"
      pattern="${xi.decimal}"
    ></wizard-textfield>`
  ];
}
function Xu(t, e, i, n) {
  if (t === null) {
    const o = D(n.ownerDocument, "BitRate", {
      unit: "b/s"
    });
    return i && o.setAttribute("multiplier", i), e && (o.textContent = e), {
      new: {
        parent: n,
        element: o,
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
  const r = G(t, { multiplier: i });
  return r.textContent = e, {
    old: { element: t },
    new: { element: r }
  };
}
function Zu(t) {
  return (e) => {
    const i = e.find((h) => h.label === "name").value, n = x(e.find((h) => h.label === "desc")), r = x(e.find((h) => h.label === "type")), o = x(e.find((h) => h.label === "BitRate")), a = Xn(e.find((h) => h.label === "BitRate"));
    let d, c;
    if (i === t.getAttribute("name") && n === t.getAttribute("desc") && r === t.getAttribute("type"))
      d = null;
    else {
      const h = G(t, { name: i, desc: n, type: r });
      d = { old: { element: t }, new: { element: h } };
    }
    o === (t.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null) && a === (t.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null) ? c = null : c = Xu(
      t.querySelector("SubNetwork > BitRate"),
      o,
      a,
      d?.new.element ?? t
    );
    const u = [];
    return d && u.push(d), c && u.push(c), u;
  };
}
function Yu(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = t.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null, o = t.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null;
  return [
    {
      title: l("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: l("save"),
        action: Zu(t)
      },
      content: Ku({ name: e, desc: i, type: n, BitRate: r, multiplier: o })
    }
  ];
}
const Qu = [
  "ldInst",
  "lnClass",
  "lnInst",
  "prefix",
  "doName",
  "daName"
];
function Ju(t) {
  return Qu.map(
    (e) => t.getAttribute(e) ? `[${e}="${t.getAttribute(
      e
    )}"]` : ""
  ).join("");
}
const em = ["srcLDInst", "srcLNClass", "srcLNInst", "srcCBName"];
function tm(t) {
  return em.map(
    (e) => t.getAttribute(e) ? `[${e}="${t.getAttribute(e)}"]` : ""
  ).join("");
}
function im(t) {
  if (!t.length) return [];
  const e = [], i = {};
  for (const n of t) {
    const r = n.old.element, o = n.old.parent, a = L(o);
    i[a] || (i[a] = o.cloneNode(!0));
    const d = i[a].querySelector(
      `ExtRef${r.getAttribute("iedName") ? `[iedName="${r.getAttribute("iedName")}"]` : ""}${Ju(r)}${r.getAttribute("serviceType") ? `[serviceType="${r.getAttribute("serviceType")}"]` : ""}${tm(r)}`
    );
    d && i[a].removeChild(d);
  }
  return Object.entries(i).forEach(([n, r]) => {
    if (r.children.length == 0) {
      const o = t[0].old.parent.ownerDocument, a = le(o, "Inputs", n);
      a && a.parentElement && e.push({
        old: { parent: a.parentElement, element: a }
      });
    }
  }), e;
}
const nm = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function rm(t, e, i, n, r, o, a, d, c) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${l("ied.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${c}
      pattern="${nm}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${l("ied.wizard.descHelper")}"
      pattern="${Xe.normalizedString}"
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
      .maybeValue=${o || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="engRight"
      .maybeValue=${a || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="owner"
      .maybeValue=${d || "-"}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function om(t) {
  return [
    s` <section>
      <h1>${l("ied.wizard.title.references")}</h1>
      <mwc-list>
        ${t.map((e) => {
      const i = e.old.element;
      return s` <mwc-list-item noninteractive twoline>
            <span>${i.tagName}</span>
            <span slot="secondary"
              >${L(e.old.element)}</span
            >
          </mwc-list-item>`;
    })}
      </mwc-list>
    </section>`
  ];
}
function am(t) {
  return (t.getAttribute("originalSclVersion") ?? "").concat(t.getAttribute("originalSclRevision") ?? "").concat(t.getAttribute("originalSclRelease") ?? "");
}
function sm(t) {
  return Array.from(t.parentNode.querySelectorAll("IED")).filter(H).map((e) => e.getAttribute("name") ?? "").filter((e) => e !== t.getAttribute("name"));
}
function lm(t) {
  return (e, i) => {
    i.dispatchEvent(N());
    const n = Uo(t), r = n.filter(
      (c) => c.old.element.tagName === "ExtRef"
    ), o = im(r), a = t.getAttribute("name") ?? "Unknown", d = {
      actions: [],
      title: l("ied.action.deleteied", { name: a })
    };
    return d.actions.push({
      old: { parent: t.parentElement, element: t }
    }), d.actions.push(...n), d.actions.push(...o), [d];
  };
}
function ba(t) {
  const e = Uo(t);
  return e.length > 0 ? [
    {
      title: l("ied.wizard.title.delete"),
      content: om(e),
      primary: {
        icon: "delete",
        label: l("remove"),
        action: lm(t)
      }
    }
  ] : null;
}
function dm(t) {
  function e(i) {
    return (n) => {
      const r = ba(i);
      r && n.dispatchEvent(De(() => r)), n.dispatchEvent(
        J({ old: { parent: i.parentElement, element: i } })
      ), n.dispatchEvent(N());
    };
  }
  return [
    {
      title: l("ied.wizard.title.edit"),
      element: t,
      menuActions: [
        {
          icon: "delete",
          label: l("remove"),
          action: e(t)
        }
      ],
      primary: {
        icon: "edit",
        label: l("save"),
        action: Ko(
          t,
          "ied.action.updateied"
        )
      },
      content: rm(
        t.getAttribute("name"),
        t.getAttribute("desc"),
        t.getAttribute("type"),
        t.getAttribute("manufacturer"),
        t.getAttribute("configVersion"),
        am(t),
        t.getAttribute("engRight"),
        t.getAttribute("owner"),
        sm(t)
      )
    }
  ];
}
const cm = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function um(t, e, i, n) {
  return [
    e ? s`<wizard-textfield
          label="ldName"
          .maybeValue=${t}
          helper="${l("ldevice.wizard.noNameSupportHelper")}"
          helperPersistent
          readOnly
          disabled
        ></wizard-textfield>` : s`<wizard-textfield
          label="ldName"
          .maybeValue=${t}
          nullable
          helper="${l("ldevice.wizard.nameHelper")}"
          validationMessage="${l("textfield.required")}"
          dialogInitialFocus
          pattern="${cm}"
        ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${i}
      nullable
      helper="${l("ldevice.wizard.descHelper")}"
      pattern="${Xe.normalizedString}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="ldInst"
      .maybeValue=${n}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function mm(t) {
  return !!t.closest("IED")?.querySelector("Services > ConfLdName");
}
function pm(t) {
  return (e) => {
    const i = {}, n = ["ldName", "desc"];
    if (n.forEach((r) => {
      i[r] = x(e.find((o) => o.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = G(t, i);
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
function hm(t) {
  return [
    {
      title: l("ldevice.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: l("save"),
        action: pm(t)
      },
      content: um(
        t.getAttribute("ldName"),
        !mm(t),
        t.getAttribute("desc"),
        t.getAttribute("inst")
      )
    }
  ];
}
function ga(t) {
  return Object.entries(t).map(
    ([e, i]) => s`<wizard-checkbox
        label="${e}"
        .maybeValue=${i}
        nullable
        helper="${l(`scl.${e}`)}"
      ></wizard-checkbox>`
  );
}
function fm(t) {
  return (e) => {
    const i = x(e.find((u) => u.label === "dchg")), n = x(e.find((u) => u.label === "qchg")), r = x(e.find((u) => u.label === "dupd")), o = x(e.find((u) => u.label === "period")), a = x(e.find((u) => u.label === "gi"));
    if (i === t.getAttribute("dchg") && n === t.getAttribute("qchg") && r === t.getAttribute("dupd") && o === t.getAttribute("period") && a === t.getAttribute("gi"))
      return [];
    const d = G(t, {
      dchg: i,
      qchg: n,
      dupd: r,
      period: o,
      gi: a
    });
    return [{ old: { element: t }, new: { element: d } }];
  };
}
function xa(t) {
  const [e, i, n, r, o] = [
    "dchg",
    "qchg",
    "dupd",
    "period",
    "gi"
  ].map((a) => t.getAttribute(a));
  return [
    {
      title: l("wizard.title.edit", { tagName: t.tagName }),
      primary: {
        icon: "save",
        label: l("save"),
        action: fm(t)
      },
      content: ga({ dchg: e, qchg: i, dupd: n, period: r, gi: o })
    }
  ];
}
class we extends j {
  constructor() {
    super(...arguments), this.raised = !1, this.unelevated = !1, this.outlined = !1, this.dense = !1, this.disabled = !1, this.trailingIcon = !1, this.fullwidth = !1, this.icon = "", this.label = "", this.expandContent = !1, this.shouldRenderRipple = !1, this.rippleHandlers = new Ut(() => (this.shouldRenderRipple = !0, this.ripple));
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
we.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
p([
  m({ type: Boolean, reflect: !0 })
], we.prototype, "raised", void 0);
p([
  m({ type: Boolean, reflect: !0 })
], we.prototype, "unelevated", void 0);
p([
  m({ type: Boolean, reflect: !0 })
], we.prototype, "outlined", void 0);
p([
  m({ type: Boolean })
], we.prototype, "dense", void 0);
p([
  m({ type: Boolean, reflect: !0 })
], we.prototype, "disabled", void 0);
p([
  m({ type: Boolean, attribute: "trailingicon" })
], we.prototype, "trailingIcon", void 0);
p([
  m({ type: Boolean, reflect: !0 })
], we.prototype, "fullwidth", void 0);
p([
  m({ type: String })
], we.prototype, "icon", void 0);
p([
  m({ type: String })
], we.prototype, "label", void 0);
p([
  m({ type: Boolean })
], we.prototype, "expandContent", void 0);
p([
  w("#button")
], we.prototype, "buttonElement", void 0);
p([
  Gt("mwc-ripple")
], we.prototype, "ripple", void 0);
p([
  I()
], we.prototype, "shouldRenderRipple", void 0);
p([
  Ue({ passive: !0 })
], we.prototype, "handleRippleActivate", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const bm = V`.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;font-size:1.125rem;height:1.125rem;vertical-align:top;width:1.125rem}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{border-style:solid}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 8px 0 8px}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px;height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined .mdc-button__touch{left:-1px;width:calc(100% + 2 * 1px)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;font-size:1.125rem;height:1.125rem;vertical-align:top;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{display:none}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;
let Rn = class extends we {
};
Rn.styles = [bm];
Rn = p([
  R("mwc-button")
], Rn);
const gm = [
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
], xm = [
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
], vm = ["Spec", "Conf", "RO", "Set"], ym = ["SmpPerPeriod", "SmpPerSec", "SecPerSmp"], va = [
  "None",
  "Signature",
  "SignatureAndEncryption"
];
function wm(t, e, i) {
  if (!t.target || !t.target.parentElement) return;
  const n = t.target.selected?.value;
  if (t.target.parentElement.querySelector(
    'wizard-select[label="bType"]'
  ).value !== "Enum") return;
  const o = Array.from(
    e.querySelectorAll(`EnumType[id="${n}"] > EnumVal`)
  ).map(
    (d) => _`<mwc-list-item
        value="${d.textContent?.trim() ?? ""}"
        ?selected=${d.textContent?.trim() === i}
        >${d.textContent?.trim()}</mwc-list-item
      >`
  ), a = t.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  Fn(_`${o}`, a), a.requestUpdate();
}
function Am(t, e, i) {
  const n = t.target.selected.value, r = t.target.parentElement.querySelector(
    'wizard-select[label="type"]'
  );
  r.disabled = !(n === "Enum" || n === "Struct");
  const o = [];
  Array.from(r.children).forEach((c) => {
    const u = c;
    u.disabled = !c.classList.contains(n), u.noninteractive = !c.classList.contains(n), u.style.display = c.classList.contains(n) ? "" : "none", u.disabled || o.push(u);
  }), r.value = o.length ? o[0].value : "";
  const a = t.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  n === "Enum" ? a.style.display = "" : a.style.display = "none";
  const d = t.target.parentElement.querySelector(
    'wizard-textfield[label="Val"]'
  );
  n === "Enum" || n === "Struct" ? d.style.display = "none" : d.style.display = "", a.requestUpdate(), d.requestUpdate(), r.requestUpdate();
}
function _m(t, e, i, n, r, o, a, d, c, u) {
  return [
    _`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${l("scl.name")}"
      required
      pattern="${Xe.abstractDataAttributeName}"
      maxLength="${Gi.abstracDaName}"
      dialogInitialFocus
    >
      ></wizard-textfield
    >`,
    _`<wizard-textfield
      label="desc"
      helper="${l("scl.desc")}"
      .maybeValue=${e}
      nullable
      pattern="${Xe.normalizedString}"
    ></wizard-textfield>`,
    _`<wizard-select
      fixedMenuPosition
      label="bType"
      .value=${i}
      helper="${l("scl.bType")}"
      required
      @selected=${(h) => Am(h)}
      >${xm.map(
      (h) => _`<mwc-list-item value="${h}"
            >${h}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    _`<wizard-select
      label="type"
      .maybeValue=${r}
      helper="${l("scl.type")}"
      fixedMenuPosition
      @selected=${(h) => wm(h, u, c)}
      >${n.map(
      (h) => _`<mwc-list-item
            class="${h.tagName === "EnumType" ? "Enum" : "Struct"}"
            value=${h.id}
            >${h.id}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    _`<wizard-textfield
      label="sAddr"
      .maybeValue=${o}
      helper="${l("scl.sAddr")}"
      nullable
      pattern="${Xe.normalizedString}"
    ></wizard-textfield>`,
    _`<wizard-select
      label="valKind"
      .maybeValue=${a}
      helper="${l("scl.valKind")}"
      nullable
      required
      fixedMenuPosition
      >${vm.map(
      (h) => _`<mwc-list-item value="${h}"
            >${h}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    _`<wizard-checkbox
      label="valImport"
      .maybeValue=${d}
      helper="${l("scl.valImport")}"
      nullable
      required
    ></wizard-checkbox>`,
    _`<wizard-select
      label="Val"
      .maybeValue=${c}
      helper="${l("scl.Val")}"
      nullable
      >${Array.from(
      u.querySelectorAll(`EnumType > EnumVal[id="${r}"]`)
    ).map(
      (h) => _`<mwc-list-item value="${h.textContent?.trim() ?? ""}"
            >${h.textContent?.trim()}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    _`<wizard-textfield
      label="Val"
      .maybeValue=${c}
      helper="${l("scl.Val")}"
      nullable
    ></wizard-textfield>`
  ];
}
function Em(t, e, i, n) {
  return [
    _`<wizard-select
      label="fc"
      .maybeValue=${t}
      helper="${l("scl.fc")}"
      required
      fixedMenuPosition
      >${gm.map(
      (r) => _`<mwc-list-item value="${r}">${r}</mwc-list-item>`
    )}</wizard-select
    >`,
    _`<wizard-checkbox
      label="dchg"
      .maybeValue=${e}
      helper="${l("scl.dchg")}"
      nullable
    ></wizard-checkbox>`,
    _`<wizard-checkbox
      label="qchg"
      .maybeValue=${i}
      helper="${l("scl.qchg")}"
      nullable
    ></wizard-checkbox>`,
    _`<wizard-checkbox
      label="dupd"
      .maybeValue=${n}
      helper="${l("scl.dupd")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function Sm(t) {
  return (e) => {
    const i = x(e.find((A) => A.label === "name")), n = x(e.find((A) => A.label === "desc")), r = x(e.find((A) => A.label === "bType")), o = r === "Enum" || r === "Struct" ? x(e.find((A) => A.label === "type")) : null, a = x(e.find((A) => A.label === "sAddr")), d = x(e.find((A) => A.label === "valKind")), c = x(e.find((A) => A.label === "valImport")), u = e.find(
      (A) => A.label === "Val" && A.style.display !== "none"
    ), h = u ? x(u) : null, b = x(e.find((A) => A.label === "fc")) ?? "", g = x(e.find((A) => A.label === "dchg")), v = x(e.find((A) => A.label === "qchg")), y = x(e.find((A) => A.label === "dupd")), E = [], k = D(t.ownerDocument, "DA", {
      name: i,
      desc: n,
      bType: r,
      type: o,
      sAddr: a,
      valKind: d,
      valImport: c,
      fc: b,
      dchg: g,
      qchg: v,
      dupd: y
    });
    if (h !== null) {
      const A = D(t.ownerDocument, "Val", {});
      A.textContent = h, k.appendChild(A);
    }
    return E.push({
      new: {
        parent: t,
        element: k
      }
    }), E;
  };
}
function Cm(t) {
  const e = t.ownerDocument, i = "", n = null, r = "", o = null, a = null, d = null, c = null, u = null, h = "", b = null, g = null, v = null, y = Array.from(e.querySelectorAll("DAType, EnumType")).filter(H).filter((k) => k.getAttribute("id")), E = t.closest("DataTypeTemplates");
  return [
    {
      title: l("da.wizard.title.edit"),
      primary: {
        icon: "",
        label: l("save"),
        action: Sm(t)
      },
      content: [
        ..._m(
          i,
          n,
          r,
          y,
          o,
          a,
          c,
          u,
          d,
          E
        ),
        ...Em(h, b, g, v)
      ]
    }
  ];
}
const ke = (t, e) => t === null ? "" : e;
function ya() {
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
    VisString32: o("VisString32", 32),
    VisString64: o("VisString64", 64),
    VisString65: o("VisString65", 65),
    VisString129: o("VisString129", 129),
    VisString255: o("VisString255", 255),
    ObjRef: o("VisString129", 129),
    Currency: o("Currency", 3),
    Octet64: o("Octet64", 64 * 2),
    Octet6: o("Octet6", 6 * 2),
    Octet16: o("Octet16", 16 * 2)
  };
  function t() {
    return {
      render: (c, u, h = null) => (h ? [...Array(h)] : [h]).map((b, g) => _`<wizard-select
            id="Val${ke(b, `${g + 1}`)}"
            label="Val${ke(b, ` for sGroup ${g + 1}`)}"
            .maybeValue=${a(u)}
            fixedMenuPosition
          >
            <mwc-list-item value="true">true</mwc-list-item>
            <mwc-list-item value="false">false</mwc-list-item>
          </wizard-select>`),
      value: (c, u) => x(
        c.find((h) => h.id === `Val${u || ""}`)
      )
    };
  }
  function e() {
    return {
      render: (c, u, h = null) => (h ? [...Array(h)] : [h]).map((b, g) => _`<wizard-select
            id="Val${ke(b, `${g + 1}`)}"
            label="Val${ke(b, ` for sGroup ${g + 1}`)}"
            .maybeValue=${a(u)}
            fixedMenuPosition
          >
            ${d(c).map((v) => _`<mwc-list-item value="${v}"
                >${v}</mwc-list-item
              >`)}
          </wizard-select>`),
      value: (c, u) => x(
        c.find((h) => h.id === `Val${u || ""}`)
      )
    };
  }
  function i(c, u, h) {
    return {
      render: (b, g, v = null) => (v ? [...Array(v)] : [v]).map((y, E) => _`<wizard-textfield
            id="Val${ke(y, `${E + 1}`)}"
            label="Val${ke(y, ` for sGroup ${E + 1}`)}"
            .maybeValue=${a(g)}
            helper="${l("dai.wizard.valueHelper", { type: c })}"
            type="number"
            min=${u}
            max=${h}
            step="0.1"
          >
          </wizard-textfield>`),
      value: (b, g) => x(
        b.find((v) => v.id === `Val${g || ""}`)
      )
    };
  }
  function n(c, u, h) {
    return {
      render: (b, g, v = null) => (v ? [...Array(v)] : [v]).map((y, E) => _`<wizard-textfield
            id="Val${ke(y, `${E + 1}`)}"
            label="Val${ke(y, ` for sGroup ${E + 1}`)}"
            .maybeValue=${a(g)}
            helper="${l("dai.wizard.valueHelper", { type: c })}"
            type="number"
            min=${u}
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
      render: (c, u, h = null) => {
        const b = a(u);
        return (h ? [...Array(h)] : [h]).reduce(
          (g, v, y) => g.concat([
            _`<wizard-textfield
                id="ValDate${ke(v, `${y + 1}`)}"
                label="Val (Date)${ke(v, ` for sGroup ${y + 1}`)}"
                .maybeValue=${$m(b)}
                type="date"
              >
              </wizard-textfield>`,
            _`<wizard-textfield
                id="ValTime${ke(v, `${y + 1}`)}"
                label="Val (Time)${ke(v, ` for sGroup ${y + 1}`)}"
                .maybeValue=${Im(b)}
                type="time"
                step="1"
              >
              </wizard-textfield>`
          ]),
          []
        );
      },
      value: (c, u) => {
        const h = [`ValDate${u || ""}`, `ValTime${u || ""}`].map(
          (v) => x(c.find((y) => y.id === v))
        ), b = h[0] ? h[0] : "0000-00-00", g = h[1] ? h[1] : "00:00:00";
        return b + "T" + g + ".000";
      }
    };
  }
  function o(c, u) {
    return {
      render: (h, b, g = null) => (g ? [...Array(g)] : [g]).map((v, y) => _`<wizard-textfield
            id="Val${ke(v, ` ${y + 1}`)}"
            label="Val${ke(v, ` for sGroup ${y + 1}`)}"
            .maybeValue=${a(b)}
            helper="${l("dai.wizard.valueHelper", { type: c })}"
            maxLength=${u}
            type="text"
          >
          </wizard-textfield>`),
      value: (h, b) => x(
        h.find((g) => g.id === `Val${b || ""}`)
      )
    };
  }
  function a(c) {
    return (c?.querySelector("Val") ? c?.querySelector("Val") : c)?.textContent?.trim() ?? "";
  }
  function d(c) {
    const u = c.getAttribute("type"), h = [];
    return Array.from(
      c.ownerDocument.querySelectorAll(
        `EnumType[id="${u}"] > EnumVal`
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
function $m(t) {
  let i = t.split("T")[0];
  return /^\d{4}-\d{2}-\d{2}$/.test(i) || (i = null), i === "0000-00-00" && (i = null), i;
}
function Im(t) {
  const e = t.split("T");
  let i = null;
  return e.length == 2 && (i = e[1], i.length > 8 && (i = i.substring(0, 8)), /^\d{2}:\d{2}:\d{2}$/.test(i) || (i = null), i === "00:00:00" && (i = null)), i;
}
function Nm(t, e) {
  return (i) => {
    const n = t.getAttribute("bType"), r = ya()[n].value(i), o = e.parentElement?.getAttribute("name") ?? "", a = {
      actions: [],
      title: l("dai.action.updatedai", { daiName: o })
    }, d = e.cloneNode(!1);
    return d.textContent = r, a.actions.push({
      old: { element: e },
      new: { element: d }
    }), [a];
  };
}
function km(t, e, i = null) {
  const n = t.getAttribute("bType"), r = t.querySelector("Val")?.textContent?.trim() ?? "";
  return [
    s` ${ya()[n].render(
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
        </wizard-textfield>` : Me}`
  ];
}
function Lm(t, e) {
  const i = e?.tagName === "DAI" ? e?.getAttribute("name") ?? "" : e?.parentElement?.getAttribute("name") ?? "";
  return [
    {
      title: l("dai.wizard.title.edit", {
        daiName: i
      }),
      element: e,
      primary: {
        icon: "edit",
        label: l("save"),
        action: Nm(t, e)
      },
      content: km(t, e)
    }
  ];
}
function Tm(t) {
  return (e) => {
    e.dispatchEvent(De(() => ta(t)));
  };
}
function Dm(t) {
  return (e, i) => {
    const n = e.find((u) => u.label === "name").value, r = x(e.find((u) => u.label === "desc")), o = t.getAttribute("name"), a = [];
    if (!(n === o && r === t.getAttribute("desc"))) {
      const u = G(t, { name: n, desc: r });
      a.push({
        old: { element: t },
        new: { element: u }
      });
    }
    const d = n !== o ? Array.from(
      t.parentElement?.querySelectorAll(
        `ReportControlBock[datSet=${o}], GSEControl[datSet=${o}],SampledValueControl[datSet=${o}] `
      ) ?? []
    ).map((u) => {
      const h = G(u, { datSet: n });
      return { old: { element: u }, new: { element: h } };
    }) : [];
    return [
      ...Array.from(
        i.shadowRoot.querySelectorAll(
          "filtered-list > mwc-check-list-item:not([selected])"
        )
      ).map((u) => le(t, "FCDA", u.value)).filter((u) => u).map((u) => ({
        old: {
          parent: t,
          element: u,
          reference: u.nextSibling
        }
      })),
      ...a,
      ...d
    ];
  };
}
function tr(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc");
  return [
    {
      title: l("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        label: l("save"),
        icon: "save",
        action: Dm(t)
      },
      menuActions: [
        {
          icon: "add",
          label: l("dataset.fcda.add"),
          action: Tm(t)
        }
      ],
      content: [
        s`<wizard-textfield
          label="name"
          .maybeValue=${e}
          helper="${l("scl.name")}"
          required
          disabled="true"
        >
        </wizard-textfield>`,
        s`<wizard-textfield
          label="desc"
          .maybeValue=${i}
          helper="${l("scl.desc")}"
          nullable
          required
        >
        </wizard-textfield>`,
        s`<filtered-list multi
          >${Array.from(t.querySelectorAll("FCDA")).map(
          (n) => s`<mwc-check-list-item selected value="${L(n)}"
                >${L(n).split(">").pop()}</mwc-check-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
const Q = {
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
}, zm = {
  IP: Q.IP,
  "IP-SUBNET": Q.IP,
  "IP-GATEWAY": Q.IP,
  "OSI-TSEL": Q.OSI,
  "OSI-SSEL": Q.OSI,
  "OSI-PSEL": Q.OSI,
  "OSI-AP-Title": Q.OSIAPi,
  "OSI-AP-Invoke": Q.OSId,
  "OSI-AE-Qualifier": Q.OSId,
  "OSI-AE-Invoke": Q.OSId,
  "MAC-Address": Q.MAC,
  APPID: Q.APPID,
  "VLAN-ID": Q.VLANid,
  "VLAN-PRIORITY": Q.VLANp,
  "OSI-NSAP": Q.OSI,
  "SNTP-Port": Q.port,
  "MMS-Port": Q.port,
  DNSName: "[^ ]*",
  "UDP-Port": Q.port,
  "TCP-Port": Q.port,
  "C37-118-IP-Port": "102[5-9]|10[3-9][0-9]|1[1-9][0-9][0-9]|[2-9][0-9]{3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]",
  IPv6: Q.IPv6,
  "IPv6-SUBNET": Q.IPv6sub,
  "IPv6-GATEWAY": Q.IPv6,
  IPv6FlowLabel: "[0-9a-fA-F]{1,5}",
  IPv6ClassOfTraffic: "[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]",
  "IPv6-IGMPv3Src": Q.IPv6,
  "IP-IGMPv3Sr": Q.IP,
  "IP-ClassOfTraffic": Q.OSI
}, Rm = {
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
function Wi(t) {
  return [
    _`<mwc-formfield label="${l("connectedap.wizard.addschemainsttype")}">
      <mwc-checkbox
        id="instType"
        ?checked="${t.hasInstType}"
      ></mwc-checkbox>
    </mwc-formfield>`,
    _`${Object.entries(t.attributes).map(
      ([e, i]) => _`<wizard-textfield
          label="${e}"
          ?nullable=${Rm[e]}
          .maybeValue=${i}
          pattern="${U(zm[e])}"
          required
        ></wizard-textfield>`
    )}`
  ];
}
function Om(t, e) {
  return t.querySelectorAll("P").length !== e.querySelectorAll("P").length ? !1 : Array.from(t.querySelectorAll("P")).filter(
    (i) => !e.querySelector(`Address > P[type="${i.getAttribute("type")}"]`)?.isEqualNode(i)
  ).length === 0;
}
function ir(t, e, i) {
  const n = D(e.ownerDocument, "Address", {});
  return Object.entries(t).filter(([r, o]) => o !== null).forEach(([r, o]) => {
    const a = r, d = D(e.ownerDocument, "P", { type: a });
    i && d.setAttributeNS(
      "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:type",
      "tP_" + r
    ), d.textContent = o, n.appendChild(d);
  }), n;
}
function wa(t, e, i) {
  const n = [], r = ir(e, t, i), o = t.querySelector("Address");
  return o !== null && !Om(o, r) ? (n.push({
    old: {
      parent: t,
      element: o,
      reference: o.nextSibling
    }
  }), n.push({
    new: {
      parent: t,
      element: r,
      reference: o.nextSibling
    }
  })) : o === null && n.push({
    new: {
      parent: t,
      element: r
    }
  }), n;
}
function Qr(t, e, i, n) {
  if (e === null) {
    const o = D(n.ownerDocument, t, {
      unit: "s",
      multiplier: "m"
    });
    return o.textContent = i, {
      new: {
        parent: n,
        element: o,
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
function Pm(t) {
  return (e, i) => {
    const n = {
      actions: [],
      title: l("gse.action.addaddress", {
        identity: L(t)
      })
    }, r = i.shadowRoot?.querySelector("#instType")?.checked ?? !1, o = {};
    o["MAC-Address"] = x(
      e.find((u) => u.label === "MAC-Address")
    ), o.APPID = x(e.find((u) => u.label === "APPID")), o["VLAN-ID"] = x(
      e.find((u) => u.label === "VLAN-ID")
    ), o["VLAN-PRIORITY"] = x(
      e.find((u) => u.label === "VLAN-PRIORITY")
    ), wa(t, o, r).forEach((u) => {
      n.actions.push(u);
    });
    const d = x(e.find((u) => u.label === "MinTime")), c = x(e.find((u) => u.label === "MaxTime"));
    return d !== (t.querySelector("MinTime")?.textContent?.trim() ?? null) && n.actions.push(
      Qr(
        "MinTime",
        t.querySelector("MinTime"),
        d,
        t
      )
    ), c !== (t.querySelector("MaxTime")?.textContent?.trim() ?? null) && n.actions.push(
      Qr(
        "MaxTime",
        t.querySelector("MaxTime"),
        c,
        t
      )
    ), [n];
  };
}
function Mm(t) {
  const e = t.querySelector("MinTime")?.innerHTML.trim() ?? null, i = t.querySelector("MaxTime")?.innerHTML.trim() ?? null, n = Array.from(t.querySelectorAll("Address > P")).some(
    (o) => o.getAttribute("xsi:type")
  ), r = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((o) => {
    r[o] || (r[o] = t.querySelector(`Address > P[type="${o}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: l("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        label: l("save"),
        icon: "save",
        action: Pm(t)
      },
      content: [
        ...Wi({ hasInstType: n, attributes: r }),
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
function nr(t) {
  return t.ownerDocument.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${t.closest("IED")?.getAttribute("name")}"][apName="${t.closest("AccessPoint")?.getAttribute("name")}"]`
  );
}
function Ui(t) {
  return !!nr(t);
}
function Vm(t) {
  const e = t.split("-").join("");
  return ("0" + (parseInt(e, 16) + 1).toString(16).toUpperCase()).match(/.{1,2}/g).join("-");
}
function Aa(t, e) {
  const i = e === "GOOSE" ? "01-0C-CD-01-01-FF" : "01-0C-CD-04-01-FF", n = e === "GOOSE" ? "01-0C-CD-01-00-00" : "01-0C-CD-04-00-00", r = Array.from(t.querySelectorAll("Address > P")).filter((a) => a.getAttribute("type") === "MAC-Address").map((a) => a.innerHTML.trim());
  let o = n;
  for (; o !== i; ) {
    if (!r.includes(o)) return o;
    o = Vm(o);
  }
  return r.includes(o) ? null : o;
}
function Fm(t) {
  return (parseInt(t, 16) + 1).toString(16).toUpperCase().padStart(4, "0");
}
function _a(t) {
  const e = "FFFF", i = "0001", n = Array.from(t.querySelectorAll("Address > P")).filter((o) => o.getAttribute("type") === "APPID").map((o) => o.innerHTML.trim());
  if (n.length === 0) return null;
  let r = i;
  for (; r !== e; ) {
    if (!n.includes(r)) return r;
    r = Fm(r);
  }
  return n.includes(r) ? null : r;
}
function Ea(t) {
  const e = t.getAttribute("name"), i = t.closest("IED")?.getAttribute("name"), n = t.closest("AccessPoint")?.getAttribute("name"), r = t.closest("LDevice")?.getAttribute("inst");
  return t.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${n}"] > GSE[ldInst="${r}"][cbName="${e}"]`
  );
}
function On(t) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      pattern="${Xe.asciName}"
      maxLength="${Gi.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    s`<wizard-select
      label="type"
      .maybeValue=${t.type}
      helper="${l("scl.type")}"
      nullable
      required
      >${["GOOSE", "GSSE"].map(
      (e) => s`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`,
    s`<wizard-textfield
      label="appID"
      .maybeValue=${t.appID}
      helper="${l("scl.id")}"
      required
      validationMessage="${l("textfield.nonempty")}"
    ></wizard-textfield>`,
    s`<wizard-checkbox
      label="fixedOffs"
      .maybeValue=${t.fixedOffs}
      nullable
      helper="${l("scl.fixedOffs")}"
    ></wizard-checkbox>`,
    s`<wizard-select
      label="securityEnabled"
      .maybeValue=${t.securityEnabled}
      nullable
      required
      helper="${l("scl.securityEnable")}"
      >${va.map(
      (e) => s`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function Jr(t) {
  return (e, i) => {
    const n = [], r = {};
    [
      "name",
      "desc",
      "type",
      "appID",
      "fixedOffs",
      "securityEnabled"
    ].forEach((b) => {
      r[b] = x(e.find((g) => g.label === b));
    }), r.confRev = "1";
    const a = r.name + "sDataSet";
    r.datSet = a;
    const d = D(
      t.ownerDocument,
      "GSEControl",
      r
    );
    if (n.push({ new: { parent: t, element: d } }), Ui(t)) {
      const b = nr(t), g = D(t.ownerDocument, "GSE", {
        ldInst: t.closest("LDevice")?.getAttribute("inst") ?? "",
        cbName: r.name
      });
      n.push({ new: { parent: b, element: g } });
      const v = i.shadowRoot?.querySelector("#instType")?.checked ?? !1, y = {};
      ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((Y) => {
        y[Y] = x(e.find((Ae) => Ae.label === Y));
      });
      const k = ir(y, g, v);
      n.push({ new: { parent: g, element: k } });
      const A = x(e.find((Y) => Y.label === "MinTime")), F = D(t.ownerDocument, "MinTime", {
        unit: "s",
        multiplier: "m"
      });
      F.textContent = A, n.push({ new: { parent: g, element: F } });
      const W = x(e.find((Y) => Y.label === "MaxTime")), ee = D(t.ownerDocument, "MaxTime", {
        unit: "s",
        multiplier: "m"
      });
      ee.textContent = W, n.push({ new: { parent: g, element: ee } });
    }
    const c = D(t.ownerDocument, "DataSet", {
      name: a
    });
    n.push({ new: { parent: t, element: c } });
    const h = i.shadowRoot.querySelector("finder-list")?.paths ?? [];
    for (const b of h) {
      const g = qi(t, b);
      g && n.push({ new: { parent: c, element: g } });
    }
    return [
      {
        title: l("editing.created", { name: "GSEControl" }),
        actions: n
      }
    ];
  };
}
function Sa(t) {
  const e = t.closest("Server"), i = Fi(t, "GSEControl"), n = null, r = "GOOSE", o = "", a = null, d = null, c = !0, u = {
    "MAC-Address": Aa(t.ownerDocument, "GOOSE"),
    APPID: _a(t.ownerDocument),
    "VLAN-ID": null,
    "VLAN-PRIORITY": null
  };
  return Ui(t) ? [
    {
      title: l("wizard.title.add", { tagName: "GSEControl" }),
      content: On({
        name: i,
        desc: n,
        type: r,
        appID: o,
        fixedOffs: a,
        securityEnabled: d
      })
    },
    {
      title: l("wizard.title.add", { tagName: "GSE" }),
      content: [
        ...Wi({ hasInstType: c, attributes: u }),
        s`<wizard-textfield
              label="MinTime"
              .maybeValue=${"10"}
              nullable
              suffix="ms"
              type="number"
            ></wizard-textfield>`,
        s`<wizard-textfield
              label="MaxTime"
              .maybeValue=${"1000"}
              nullable
              suffix="ms"
              type="number"
            ></wizard-textfield>`
      ]
    },
    {
      title: l("dataset.fcda.add"),
      primary: {
        icon: "save",
        label: l("save"),
        action: Jr(t)
      },
      content: [e ? Pi(e) : s``]
    }
  ] : [
    {
      title: l("wizard.title.add", { tagName: "GSEControl" }),
      content: On({
        name: i,
        desc: n,
        type: r,
        appID: o,
        fixedOffs: a,
        securityEnabled: d
      })
    },
    {
      title: l("wizard.title.add", { tagName: "GSE" }),
      content: [
        s`<h3
              style="color: var(--mdc-theme-on-surface);
                      font-family: 'Roboto', sans-serif;
                      font-weight: 300;"
            >
              ${l("gse.missingaccp")}
            </h3>`
      ]
    },
    {
      title: l("dataset.fcda.add"),
      primary: {
        icon: "save",
        label: l("save"),
        action: Jr(t)
      },
      content: [e ? Pi(e) : s``]
    }
  ];
}
function Bm(t) {
  return (e, i) => {
    const r = i.shadowRoot?.querySelector("finder-list")?.path ?? [];
    if (r.length === 0) return [];
    const [o, a] = r.pop().split(": ");
    if (o !== "IED") return [];
    const d = le(t, o, a);
    if (!d) return [];
    const c = d.querySelector("LN0");
    return c ? [() => Sa(c)] : [];
  };
}
function Hm(t) {
  return [
    {
      title: l("gsecontrol.wizard.location"),
      primary: {
        icon: "",
        label: l("next"),
        action: Bm(t)
      },
      content: [Jn(t)]
    }
  ];
}
function qm(t) {
  return () => t.tagName === "IED" && t.querySelector("LN0") ? [() => Sa(t.querySelector("LN0"))] : [() => Hm(t.ownerDocument)];
}
function Gm(t) {
  if (!t.parentElement) return null;
  const e = t.parentElement.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), i = Ea(t), n = Array.from(
    t.parentElement?.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    ) ?? []
  ).filter(
    (d) => d.getAttribute("datSet") === e?.getAttribute("name")
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
  const o = t.getAttribute("name"), a = t.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: l("controlblock.action.remove", {
      type: t.tagName,
      name: o,
      iedName: a
    }),
    actions: r
  };
}
function Wm(t) {
  return (e) => {
    const i = Gm(t);
    i && e.dispatchEvent(J(i)), e.dispatchEvent(N());
  };
}
function Um(t) {
  return (e) => {
    e.dispatchEvent(De(() => tr(t)));
  };
}
function jm(t) {
  return (e) => {
    e.dispatchEvent(De(() => Mm(t)));
  };
}
function Km(t) {
  return (e) => {
    const i = e.find((u) => u.label === "name").value, n = x(e.find((u) => u.label === "desc")), r = x(e.find((u) => u.label === "type")), o = x(e.find((u) => u.label === "appID")), a = x(e.find((u) => u.label === "fixedOffs")), d = x(
      e.find((u) => u.label === "securityEnabled")
    );
    if (i === t.getAttribute("name") && n === t.getAttribute("desc") && r === t.getAttribute("type") && o === t.getAttribute("appID") && a === t.getAttribute("fixedOffs") && d === t.getAttribute("securityEnabled"))
      return [];
    const c = G(t, {
      name: i,
      desc: n,
      type: r,
      appID: o,
      fixedOffs: a,
      securityEnabled: d
    });
    return [{ old: { element: t }, new: { element: c } }];
  };
}
function Ca(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = t.getAttribute("appID"), o = t.getAttribute("fixedOffs"), a = t.getAttribute("securityEnabled"), d = Ea(t), c = t.parentElement?.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), u = [];
  return u.push({
    icon: "delete",
    label: l("remove"),
    action: Wm(t)
  }), c && u.push({
    icon: "edit",
    label: l("scl.DataSet"),
    action: Um(c)
  }), d && u.push({
    icon: "edit",
    label: l("scl.Communication"),
    action: jm(d)
  }), [
    {
      title: l("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: l("save"),
        action: Km(t)
      },
      menuActions: u,
      content: [
        ...On({
          name: e,
          desc: i,
          type: n,
          appID: r,
          fixedOffs: o,
          securityEnabled: a
        })
      ]
    }
  ];
}
function $a(t) {
  const e = Array.from(t.querySelectorAll("GSEControl")).filter(
    H
  ), i = t.querySelector("LN0") ? {
    icon: "add",
    label: l("GOOSE"),
    action: qm(t)
  } : void 0;
  return [
    {
      title: l("wizard.title.select", { tagName: "GSEcontrol" }),
      primary: i,
      content: [
        s`<filtered-list
          @selected=${(n) => {
          const r = n.target.selected.value, o = le(t, "GSEControl", r);
          o && n.target.dispatchEvent(
            De(() => Ca(o))
          );
        }}
          >${e.map(
          (n) => s`<mwc-list-item twoline value="${L(n)}"
                ><span>${n.getAttribute("name")}</span
                ><span slot="secondary"
                  >${L(n)}</span
                ></mwc-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
function _t(t) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      .reservedValues=${t.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      helper="${l("scl.type")}"
      nullable
    ></wizard-textfield>`
  ];
}
function Xm(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = x(e.find((o) => o.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = G(t, i);
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
function Zm(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = $(
    t.parentElement,
    "Function"
  ).filter((o) => o !== t).map((o) => o.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Xm(t)
      },
      content: [
        ..._t({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Ym(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type"].forEach((o) => {
      i[o] = x(e.find((a) => a.label === o));
    });
    const r = D(
      t.ownerDocument,
      "Function",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function Qm(t) {
  const e = "", r = Array.from(t.querySelectorAll("Function")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: l("wizard.title.add", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Ym(t)
      },
      content: [
        ..._t({
          name: e,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function Jm(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = x(e.find((o) => o.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = G(t, i);
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
function ep(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = $(
    t.parentElement,
    "EqSubFunction"
  ).filter((o) => o !== t).map((o) => o.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "EqSubFunction" }),
      element: t,
      primary: {
        icon: "save",
        label: l("save"),
        action: Jm(t)
      },
      content: [
        ..._t({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function tp(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type"].forEach((o) => {
      i[o] = x(e.find((a) => a.label === o));
    });
    const r = D(
      t.ownerDocument,
      "EqSubFunction",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function ip(t) {
  const e = "", r = Array.from(
    t.querySelectorAll("EqSubFunction")
  ).map((o) => o.getAttribute("name"));
  return [
    {
      title: l("wizard.title.add", { tagName: "EqSubFunction" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: tp(t)
      },
      content: [
        ..._t({
          name: e,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function np(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = x(e.find((o) => o.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = G(t, i);
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
function rp(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = $(
    t.parentElement,
    "EqFunction"
  ).filter((o) => o !== t).map((o) => o.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "EqFunction" }),
      element: t,
      primary: {
        icon: "save",
        label: l("save"),
        action: np(t)
      },
      content: [
        ..._t({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function op(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type"].forEach((o) => {
      i[o] = x(e.find((a) => a.label === o));
    });
    const r = D(
      t.ownerDocument,
      "EqFunction",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function ap(t) {
  const e = "", r = Array.from(t.querySelectorAll("EqFunction")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: l("wizard.title.add", { tagName: "EqFunction" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: op(t)
      },
      content: [
        ..._t({
          name: e,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function sp(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = x(e.find((o) => o.label === r));
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = G(t, i);
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
function lp(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = $(
    t.parentElement,
    "SubFunction"
  ).filter((o) => o !== t).map((o) => o.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: sp(t)
      },
      content: [
        ..._t({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function dp(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type"].forEach((o) => {
      i[o] = x(e.find((a) => a.label === o));
    });
    const r = D(
      t.ownerDocument,
      "SubFunction",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function cp(t) {
  const e = "", r = Array.from(t.querySelectorAll("SubFunction")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: l("wizard.title.add", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: dp(t)
      },
      content: [
        ..._t({
          name: e,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function up(t) {
  return (e, i) => {
    const n = {
      actions: [],
      title: l("smv.action.addaddress", {
        identity: L(t)
      })
    }, r = i.shadowRoot?.querySelector("#instType")?.checked, o = {};
    o["MAC-Address"] = x(
      e.find((d) => d.label === "MAC-Address")
    ), o.APPID = x(e.find((d) => d.label === "APPID")), o["VLAN-ID"] = x(
      e.find((d) => d.label === "VLAN-ID")
    ), o["VLAN-PRIORITY"] = x(
      e.find((d) => d.label === "VLAN-PRIORITY")
    );
    const a = wa(t, o, r);
    return a.length ? (a.forEach((d) => {
      n.actions.push(d);
    }), [n]) : [];
  };
}
function mp(t) {
  const e = Array.from(t.querySelectorAll("Address > P")).some(
    (n) => n.getAttribute("xsi:type")
  ), i = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((n) => {
    i[n] || (i[n] = t.querySelector(`Address > P[type="${n}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: l("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        label: l("save"),
        icon: "edit",
        action: up(t)
      },
      content: [...Wi({ hasInstType: e, attributes: i })]
    }
  ];
}
function Pn(t) {
  return Object.entries(t).map(
    ([e, i]) => s`<wizard-checkbox
        label="${e}"
        .maybeValue=${i}
        nullable
        helper="${l(`scl.${e}`)}"
      ></wizard-checkbox>`
  );
}
function pp(t) {
  return (e) => {
    const i = {}, n = [
      "refreshTime",
      "sampleRate",
      "dataSet",
      "security",
      "synchSourceId"
    ];
    if (n.forEach((o) => {
      i[o] = x(e.find((a) => a.label === o));
    }), !n.some((o) => i[o] !== t.getAttribute(o)))
      return [];
    const r = G(t, i);
    return [{ old: { element: t }, new: { element: r } }];
  };
}
function hp(t) {
  const [e, i, n, r, o] = [
    "refreshTime",
    "sampleRate",
    "dataSet",
    "security",
    "synchSourceId"
  ].map((a) => t.getAttribute(a));
  return [
    {
      title: l("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: l("save"),
        action: pp(t)
      },
      content: [
        ...Pn({
          refreshTime: e,
          sampleRate: i,
          dataSet: n,
          security: r,
          synchSourceId: o
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
function fp(t) {
  if (!t.parentElement) return null;
  const e = t.parentElement.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), i = Ia(t), n = Array.from(
    t.parentElement.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    )
  ).filter(
    (d) => d.getAttribute("datSet") === e?.getAttribute("name")
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
  const o = t.getAttribute("name"), a = t.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: l("controlblock.action.remove", {
      type: t.tagName,
      name: o,
      iedName: a
    }),
    actions: r
  };
}
function Mn(t) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      pattern="${Xe.asciName}"
      maxLength="${Gi.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      pattern="${Xe.normalizedString}"
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    t.multicast === "true" ? s`` : s`<wizard-checkbox
          label="multicast"
          .maybeValue=${t.multicast}
          helper="${l("scl.multicast")}"
          disabled
        ></wizard-checkbox>`,
    s`<wizard-textfield
      label="smvID"
      .maybeValue=${t.smvID}
      helper="${l("scl.id")}"
      required
      validationMessage="${l("textfield.nonempty")}"
    ></wizard-textfield>`,
    s`<wizard-select
      label="smpMod"
      .maybeValue=${t.smpMod}
      nullable
      required
      helper="${l("scl.smpMod")}"
      >${ym.map(
      (e) => s`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`,
    s`<wizard-textfield
      label="smpRate"
      .maybeValue=${t.smpRate}
      helper="${l("scl.smpRate")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="nofASDU"
      .maybeValue=${t.nofASDU}
      helper="${l("scl.nofASDU")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    s`<wizard-select
      label="securityEnabled"
      .maybeValue=${t.securityEnabled}
      nullable
      required
      helper="${l("scl.securityEnable")}"
      >${va.map(
      (e) => s`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function eo(t) {
  return (e, i) => {
    const n = {};
    [
      "name",
      "desc",
      "multicast",
      "smvID",
      "smpMod",
      "smpRate",
      "nofASDU",
      "securityEnabled"
    ].forEach((k) => {
      if (k === "multicast" && !e.find((F) => F.label === k)) {
        n.multicast = "true";
        return;
      }
      n[k] = x(
        e.find((F) => F.label === k)
      );
    }), n.confRev = "1";
    const o = n.name + "sDataSet";
    n.datSet = o;
    const a = D(
      t.ownerDocument,
      "SampledValueControl",
      n
    ), d = {};
    [
      "refreshTime",
      "sampleRate",
      "dataSet",
      "security",
      "synchSourceId"
    ].forEach((k) => {
      d[k] = x(e.find((A) => A.label === k));
    });
    const u = D(
      t.ownerDocument,
      "SmvOpts",
      d
    );
    a.appendChild(u);
    let h = null, b = null;
    if (Ui(t)) {
      const k = i.shadowRoot?.querySelector("#instType")?.checked ?? !1, A = {};
      ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((ee) => {
        A[ee] = x(e.find((Y) => Y.label === ee));
      }), h = D(t.ownerDocument, "SMV", {
        ldInst: t.closest("LDevice")?.getAttribute("inst") ?? "",
        cbName: n.name
      });
      const W = ir(A, h, k);
      h.appendChild(W), b = nr(t);
    }
    const g = D(t.ownerDocument, "DataSet", {
      name: o
    }), y = i.shadowRoot.querySelector("finder-list")?.paths ?? [];
    for (const k of y) {
      const A = qi(t, k);
      A && g.appendChild(A);
    }
    return [h ? {
      title: "Create SampledValueControl",
      actions: [
        { new: { parent: t, element: a } },
        { new: { parent: b, element: h } },
        { new: { parent: t, element: g } }
      ]
    } : {
      title: "Create SampledValueControl",
      actions: [
        { new: { parent: t, element: a } },
        { new: { parent: t, element: g } }
      ]
    }];
  };
}
function Na(t) {
  const e = t.closest("Server"), i = Fi(t, "SampledValueControl"), n = null, r = "true", o = "", a = "SmpPerPeriod", d = "80", c = "1", u = null, h = null, b = "true", g = "true", v = null, y = "true", E = !0, k = {
    "MAC-Address": Aa(t.ownerDocument, "SMV"),
    APPID: _a(t.ownerDocument),
    "VLAN-ID": null,
    "VLAN-PRIORITY": null
  };
  return Ui(t) ? [
    {
      title: l("wizard.title.add", { tagName: "SampledValueControl" }),
      content: Mn({
        name: i,
        desc: n,
        multicast: r,
        smvID: o,
        smpMod: a,
        smpRate: d,
        nofASDU: c,
        securityEnabled: u
      })
    },
    {
      title: l("wizard.title.add", { tagName: "SmvOpts" }),
      content: Pn({
        refreshTime: h,
        sampleRate: b,
        dataSet: g,
        security: v,
        synchSourceId: y
      })
    },
    {
      title: l("wizard.title.add", { tagName: "SMV" }),
      content: [...Wi({ hasInstType: E, attributes: k })]
    },
    {
      title: l("dataset.fcda.add"),
      primary: {
        icon: "save",
        label: l("save"),
        action: eo(t)
      },
      content: [e ? Xr(e) : s``]
    }
  ] : [
    {
      title: l("wizard.title.add", { tagName: "SampledValueControl" }),
      content: Mn({
        name: i,
        desc: n,
        multicast: r,
        smvID: o,
        smpMod: a,
        smpRate: d,
        nofASDU: c,
        securityEnabled: u
      })
    },
    {
      title: l("wizard.title.add", { tagName: "SmvOpts" }),
      content: Pn({
        refreshTime: h,
        sampleRate: b,
        dataSet: g,
        security: v,
        synchSourceId: y
      })
    },
    {
      title: l("wizard.title.add", { tagName: "SMV" }),
      content: [
        s`<h3
              style="color: var(--mdc-theme-on-surface);
                      font-family: 'Roboto', sans-serif;
                      font-weight: 300;"
            >
              ${l("smv.missingaccp")}
            </h3>`
      ]
    },
    {
      title: l("dataset.fcda.add"),
      primary: {
        icon: "save",
        label: l("save"),
        action: eo(t)
      },
      content: [e ? Xr(e) : s``]
    }
  ];
}
function bp(t) {
  return (e, i) => {
    const r = i.shadowRoot?.querySelector("finder-list")?.path ?? [];
    if (r.length === 0) return [];
    const [o, a] = r.pop().split(": ");
    if (o !== "IED") return [];
    const d = le(t, o, a);
    if (!d) return [];
    const c = d.querySelector("LN0");
    return c ? [() => Na(c)] : [];
  };
}
function gp(t) {
  return [
    {
      title: l("samvpledvaluecontrol.wizard.location"),
      primary: {
        icon: "",
        label: l("next"),
        action: bp(t)
      },
      content: [Jn(t)]
    }
  ];
}
function xp(t) {
  return () => t.tagName === "IED" && t.querySelector("LN0") ? [
    () => Na(t.querySelector("LN0"))
  ] : [() => gp(t.ownerDocument)];
}
function vp(t) {
  return (e) => {
    const i = fp(t);
    i && e.dispatchEvent(J(i)), e.dispatchEvent(N());
  };
}
function yp(t) {
  return (e) => {
    e.dispatchEvent(De(() => tr(t)));
  };
}
function wp(t) {
  return (e) => {
    e.dispatchEvent(De(() => hp(t)));
  };
}
function Ap(t) {
  return (e) => {
    e.dispatchEvent(De(() => mp(t)));
  };
}
function _p(t) {
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
    n.forEach((a) => {
      if (a === "multicast" && !e.find((c) => c.label === a)) {
        i.multicast = "true";
        return;
      }
      i[a] = x(e.find((c) => c.label === a));
    });
    let r = null;
    if (n.some((a) => i[a] !== t.getAttribute(a))) {
      const a = G(t, i);
      r = {
        old: { element: t },
        new: { element: a }
      };
    }
    const o = [];
    return r && o.push(r), o;
  };
}
function ka(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("multicast"), r = t.getAttribute("smvID"), o = t.getAttribute("smpMod"), a = t.getAttribute("smpRate"), d = t.getAttribute("nofASDU"), c = t.getAttribute("securityEnabled"), u = Ia(t), h = t.querySelector("SmvOpts"), b = t.parentElement?.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), g = [];
  return g.push({
    icon: "delete",
    label: l("remove"),
    action: vp(t)
  }), b && g.push({
    icon: "edit",
    label: l("scl.DataSet"),
    action: yp(b)
  }), h && g.push({
    icon: "edit",
    label: l("scl.SmvOpts"),
    action: wp(h)
  }), u && g.push({
    icon: "edit",
    label: l("scl.Communication"),
    action: Ap(u)
  }), [
    {
      title: l("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: l("save"),
        action: _p(t)
      },
      menuActions: g,
      content: [
        ...Mn({
          name: e,
          desc: i,
          multicast: n,
          smvID: r,
          smpMod: o,
          smpRate: a,
          nofASDU: d,
          securityEnabled: c
        })
      ]
    }
  ];
}
function La(t) {
  const e = Array.from(
    t.querySelectorAll("SampledValueControl")
  ).filter(H), i = t.querySelector("LN0") ? {
    icon: "add",
    label: l("scl.SampledValueControl"),
    action: xp(t)
  } : void 0;
  return [
    {
      title: l("wizard.title.select", { tagName: "SampledValueControl" }),
      primary: i,
      content: [
        s`<filtered-list
          @selected=${(n) => {
          const r = n.target.selected.value, o = le(
            t,
            "SampledValueControl",
            r
          );
          o && n.target?.dispatchEvent(
            De(
              () => ka(o)
            )
          );
        }}
          >${e.map(
          (n) => s`<mwc-list-item twoline value="${L(n)}"
                ><span>${n.getAttribute("name")}</span
                ><span slot="secondary"
                  >${L(n)}</span
                ></mwc-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
function Ta(t) {
  return [
    _`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      .reservedValues=${t.reservedNames}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    _`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    _`<wizard-select
      label="phase"
      fixedMenuPosition
      .maybeValue=${t.phase}
      nullable
      helper="${l("scl.phase")}"
    >
      ${["A", "B", "C", "N", "all", "none", "AB", "BC", "CA"].map(
      (e) => _`<mwc-list-item value="${e}">
            ${e.charAt(0).toUpperCase() + e.slice(1)}
          </mwc-list-item>`
    )}
    </wizard-select> `,
    _`<wizard-checkbox
      label="virtual"
      .maybeValue=${t.virtual}
      nullable
      helper="${l("scl.virtual")}"
    ></wizard-checkbox>`
  ];
}
function Ep(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "phase", "virtual"];
    if (n.forEach((r) => {
      i[r] = x(e.find((o) => o.label === r));
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = G(t, i);
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
function Sp(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("phase"), r = t.getAttribute("virtual"), o = $(
    t.parentElement,
    "SubEquipment"
  ).filter((a) => a !== t).map((a) => a.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Ep(t)
      },
      content: [
        ...Ta({
          name: e,
          desc: i,
          phase: n,
          virtual: r,
          reservedNames: o
        })
      ]
    }
  ];
}
function Cp(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "phase", "virtual"].forEach((o) => {
      i[o] = x(e.find((a) => a.label === o));
    });
    const r = D(
      t.ownerDocument,
      "SubEquipment",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function $p(t) {
  const e = "", o = Array.from(t.querySelectorAll("SubEquipment")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: l("wizard.title.add", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Cp(t)
      },
      content: [
        ...Ta({
          name: e,
          desc: null,
          phase: null,
          virtual: null,
          reservedNames: o
        })
      ]
    }
  ];
}
function Ip(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = t.getAttribute("virtual"), o = $(
    t.parentElement,
    "GeneralEquipment"
  ).filter((a) => a !== t).map((a) => a.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Np(t)
      },
      content: [
        ...Da({
          name: e,
          desc: i,
          type: n,
          virtual: r,
          reservedNames: o
        })
      ]
    }
  ];
}
function Np(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = x(e.find((o) => o.label === r));
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = G(t, i);
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
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      .reservedValues=${t.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      helper="${l("scl.type")}"
      minLength="${3}"
      pattern="AXN|BAT|MOT|FAN|FIL|PMP|TNK|VLV|E[A-Z]*"
      required
    ></wizard-textfield>`,
    s`<wizard-checkbox
      label="virtual"
      .maybeValue=${t.virtual}
      helper="${l("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function kp(t) {
  const e = "", o = Array.from(
    t.querySelectorAll("GeneralEquipment")
  ).map((a) => a.getAttribute("name"));
  return [
    {
      title: l("wizard.title.add", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Lp(t)
      },
      content: [
        ...Da({
          name: e,
          desc: null,
          type: null,
          virtual: null,
          reservedNames: o
        })
      ]
    }
  ];
}
function Lp(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((o) => {
      i[o] = x(e.find((a) => a.label === o));
    });
    const r = D(
      t.ownerDocument,
      "GeneralEquipment",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function Tp(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((o) => {
      i[o] = x(
        e.find((a) => a.label === o)
      );
    });
    const r = D(
      t.ownerDocument,
      "TransformerWinding",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function Dp(t) {
  const e = "", o = Array.from(
    t.querySelectorAll("TransformerWinding")
  ).map((a) => a.getAttribute("name"));
  return [
    {
      title: l("wizard.title.add", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Tp(t)
      },
      content: [
        ...za({
          name: e,
          desc: null,
          type: null,
          virtual: null,
          reservedNames: o
        })
      ]
    }
  ];
}
function zp(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = x(
        e.find((o) => o.label === r)
      );
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = G(t, i);
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
function za(t) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      .reservedValues=${t.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      disabled
      helper="${l("scl.type")}"
    ></wizard-textfield>`,
    s`<wizard-checkbox
      label="virtual"
      .maybeValue=${t.virtual}
      helper="${l("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function Rp(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = t.getAttribute("virtual"), o = $(
    t.parentElement,
    "TransformerWinding"
  ).filter((a) => a !== t).map((a) => a.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: zp(t)
      },
      content: [
        ...za({
          name: e,
          desc: i,
          type: n,
          virtual: r,
          reservedNames: o
        })
      ]
    }
  ];
}
function Op(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((o) => {
      i[o] = x(e.find((a) => a.label === o));
    });
    const r = D(
      t.ownerDocument,
      "TapChanger",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function Pp(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = x(e.find((o) => o.label === r));
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = G(t, i);
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
function Ra(t) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      .reservedValues=${t.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      disabled
      helper="${l("scl.type")}"
    ></wizard-textfield>`,
    s`<wizard-checkbox
      label="virtual"
      .maybeValue=${t.virtual}
      helper="${l("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function Mp(t) {
  const e = "", n = "LTC", o = Array.from(t.querySelectorAll("TapChanger")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: l("wizard.title.add", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Op(t)
      },
      content: [
        ...Ra({
          name: e,
          desc: null,
          type: n,
          virtual: null,
          reservedNames: o
        })
      ]
    }
  ];
}
function Vp(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = t.getAttribute("virtual"), o = $(
    t.parentElement,
    "TapChanger"
  ).filter((a) => a !== t).map((a) => a.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Pp(t)
      },
      content: [
        ...Ra({
          name: e,
          desc: i,
          type: n,
          virtual: r,
          reservedNames: o
        })
      ]
    }
  ];
}
function Oa(t, e, i, n, r) {
  return [
    _`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${l("line.wizard.nameHelper")}"
      required
      validationMessage="${l("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    _`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${l("line.wizard.descHelper")}"
    ></wizard-textfield>`,
    _`<wizard-textfield
      label="type"
      .maybeValue=${i}
      nullable
      helper="${l("line.wizard.typeHelper")}"
    ></wizard-textfield>`,
    _`<wizard-textfield
      label="nomFreq"
      .maybeValue=${n}
      nullable
      helper="${l("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      validationMessage="${l("textfield.nonempty")}"
      pattern="${xi.unsigned}"
    ></wizard-textfield>`,
    _`<wizard-textfield
      label="numPhases"
      .maybeValue=${r}
      nullable
      helper="${l("voltagelevel.wizard.numPhaseHelper")}"
      suffix="#"
      validationMessage="${l("textfield.nonempty")}"
      type="number"
      min="1"
      max="255"
    ></wizard-textfield>`
  ];
}
function Fp(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type", "nomFreq", "numPhases"].forEach((o) => {
      i[o] = x(e.find((a) => a.label === o));
    });
    const r = D(t.ownerDocument, "Line", i);
    return [{ new: { parent: t, element: r } }];
  };
}
function Bp(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type", "nomFreq", "numPhases"];
    if (n.forEach((r) => {
      i[r] = x(e.find((o) => o.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = G(t, i);
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
function Hp(t) {
  return [
    {
      title: l("wizard.title.add", { tagName: "Line" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Fp(t)
      },
      content: [...Oa("", "", "", "", "")]
    }
  ];
}
function qp(t) {
  return [
    {
      title: l("line.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: l("save"),
        action: Bp(t)
      },
      content: Oa(
        t.getAttribute("name") ?? "",
        t.getAttribute("desc"),
        t.getAttribute("type"),
        t.getAttribute("nomFreq"),
        t.getAttribute("numPhases")
      )
    }
  ];
}
function Gp(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type"].forEach((o) => {
      i[o] = x(e.find((a) => a.label === o));
    });
    const r = D(t.ownerDocument, "Process", i);
    return [{ new: { parent: t, element: r } }];
  };
}
function Wp(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = x(e.find((o) => o.label === r));
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = G(t, i);
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
function Pa(t) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      .reservedValues=${t.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      nullable
      helper="${l("scl.type")}"
    ></wizard-textfield>`
  ];
}
function Up(t) {
  const e = "", i = "", n = "", r = $(
    t.parentElement,
    "Process"
  ).filter((o) => o !== t).map((o) => o.getAttribute("name"));
  return [
    {
      title: l("wizard.title.add", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Gp(t)
      },
      content: [
        ...Pa({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function jp(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = $(
    t.parentElement,
    "Process"
  ).filter((o) => o !== t).map((o) => o.getAttribute("name"));
  return [
    {
      title: l("wizard.title.edit", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: l("save"),
        action: Wp(t)
      },
      content: [
        ...Pa({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Kp(t, e, i, n, r) {
  return [
    s`<wizard-textfield
      label="lnType"
      .maybeValue=${t}
      readonly
      required
      helper="${l("ln.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${l("ln.wizard.descHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="prefix"
      nullable
      readonly
      .maybeValue=${i}
      helper="${l("ln.wizard.prefixHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${n}
      helper="${l("ln.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="inst"
      .maybeValue=${r}
      readonly
      helper="${l("ln.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function Xp(t) {
  return (e) => {
    const i = {}, n = ["lnType", "desc", "prefix", "lnClass", "inst"];
    if (n.forEach((r) => {
      i[r] = x(e.find((o) => o.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = G(t, i);
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
function Zp(t) {
  return [
    {
      title: l("ln.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: l("save"),
        action: Xp(t)
      },
      content: Kp(
        t.getAttribute("lnType"),
        t.getAttribute("desc"),
        t.getAttribute("prefix"),
        t.getAttribute("lnClass"),
        t.getAttribute("inst")
      )
    }
  ];
}
function Yp(t, e, i, n) {
  return [
    s`<wizard-textfield
      label="lnType"
      .maybeValue=${t}
      readonly
      required
      helper="${l("ln0.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${l("ln0.wizard.descHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${i}
      helper="${l("ln0.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="inst"
      .maybeValue=${n}
      readonly
      helper="${l("ln0.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function Qp(t) {
  return (e) => {
    const i = {}, n = ["lnType", "desc", "lnClass", "inst"];
    if (n.forEach((r) => {
      i[r] = x(e.find((o) => o.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = G(t, i);
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
function Jp(t) {
  return [
    {
      title: l("ln0.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: l("save"),
        action: Qp(t)
      },
      content: Yp(
        t.getAttribute("lnType"),
        t.getAttribute("desc"),
        t.getAttribute("lnClass"),
        t.getAttribute("inst")
      )
    }
  ];
}
function f() {
}
const T = {
  AccessControl: {
    edit: f,
    create: f
  },
  AccessPoint: {
    edit: f,
    create: f
  },
  Address: {
    edit: f,
    create: f
  },
  Association: {
    edit: f,
    create: f
  },
  Authentication: {
    edit: f,
    create: f
  },
  BDA: {
    edit: f,
    create: f
  },
  BitRate: {
    edit: f,
    create: f
  },
  Bay: {
    edit: Oc,
    create: Rc
  },
  ClientLN: {
    edit: f,
    create: f
  },
  ClientServices: {
    edit: f,
    create: f
  },
  CommProt: {
    edit: f,
    create: f
  },
  Communication: {
    edit: f,
    create: f
  },
  ConductingEquipment: {
    edit: Wc,
    create: Gc
  },
  ConfDataSet: {
    edit: f,
    create: f
  },
  ConfLdName: {
    edit: f,
    create: f
  },
  ConfLNs: {
    edit: f,
    create: f
  },
  ConfLogControl: {
    edit: f,
    create: f
  },
  ConfReportControl: {
    edit: f,
    create: f
  },
  ConfSG: {
    edit: f,
    create: f
  },
  ConfSigRef: {
    edit: f,
    create: f
  },
  ConnectedAP: {
    edit: f,
    create: f
  },
  ConnectivityNode: {
    edit: jc,
    create: f
  },
  DA: {
    edit: Cm,
    create: f
  },
  DAI: {
    edit: Lm,
    create: f
  },
  DAType: {
    edit: f,
    create: f
  },
  DO: {
    edit: f,
    create: f
  },
  DOI: {
    edit: f,
    create: f
  },
  DOType: {
    edit: f,
    create: f
  },
  DataObjectDirectory: {
    edit: f,
    create: f
  },
  DataSet: {
    edit: f,
    create: f
  },
  DataSetDirectory: {
    edit: f,
    create: f
  },
  DataTypeTemplates: {
    edit: f,
    create: f
  },
  DynAssociation: {
    edit: f,
    create: f
  },
  DynDataSet: {
    edit: f,
    create: f
  },
  EnumType: {
    edit: f,
    create: f
  },
  EnumVal: {
    edit: f,
    create: f
  },
  EqFunction: {
    edit: rp,
    create: ap
  },
  EqSubFunction: {
    edit: ep,
    create: ip
  },
  ExtRef: {
    edit: f,
    create: f
  },
  FCDA: {
    edit: f,
    create: ta
  },
  FileHandling: {
    edit: f,
    create: f
  },
  Function: {
    edit: Zm,
    create: Qm
  },
  GeneralEquipment: {
    edit: Ip,
    create: kp
  },
  GetCBValues: {
    edit: f,
    create: f
  },
  GetDataObjectDefinition: {
    edit: f,
    create: f
  },
  GetDataSetValue: {
    edit: f,
    create: f
  },
  GetDirectory: {
    edit: f,
    create: f
  },
  GOOSE: {
    edit: f,
    create: f
  },
  GOOSESecurity: {
    edit: f,
    create: f
  },
  GSE: {
    edit: f,
    create: f
  },
  GSEDir: {
    edit: f,
    create: f
  },
  GSEControl: {
    edit: Ca,
    create: f
  },
  GSESettings: {
    edit: f,
    create: f
  },
  GSSE: {
    edit: f,
    create: f
  },
  Header: {
    edit: f,
    create: f
  },
  History: {
    edit: f,
    create: f
  },
  Hitem: {
    edit: f,
    create: f
  },
  IED: {
    edit: dm,
    create: f
  },
  IEDName: {
    edit: f,
    create: f
  },
  Inputs: {
    edit: f,
    create: f
  },
  IssuerName: {
    edit: f,
    create: f
  },
  KDC: {
    edit: f,
    create: f
  },
  LDevice: {
    edit: hm,
    create: f
  },
  LN: {
    edit: Zp,
    create: f
  },
  LN0: {
    edit: Jp,
    create: f
  },
  LNode: {
    edit: wu,
    create: xu
  },
  LNodeType: {
    edit: f,
    create: f
  },
  Line: {
    edit: qp,
    create: Hp
  },
  Log: {
    edit: f,
    create: f
  },
  LogControl: {
    edit: f,
    create: f
  },
  LogSettings: {
    edit: f,
    create: f
  },
  MaxTime: {
    edit: f,
    create: f
  },
  McSecurity: {
    edit: f,
    create: f
  },
  MinTime: {
    edit: f,
    create: f
  },
  NeutralPoint: {
    edit: f,
    create: f
  },
  OptFields: {
    edit: aa,
    create: f
  },
  P: {
    edit: f,
    create: f
  },
  PhysConn: {
    edit: f,
    create: f
  },
  PowerTransformer: {
    edit: ju,
    create: Uu
  },
  Private: {
    edit: f,
    create: f
  },
  Process: {
    edit: jp,
    create: Up
  },
  ProtNs: {
    edit: f,
    create: f
  },
  Protocol: {
    edit: f,
    create: f
  },
  ReadWrite: {
    edit: f,
    create: f
  },
  RedProt: {
    edit: f,
    create: f
  },
  ReportControl: {
    edit: f,
    create: f
  },
  ReportSettings: {
    edit: f,
    create: f
  },
  RptEnabled: {
    edit: f,
    create: f
  },
  SamplesPerSec: {
    edit: f,
    create: f
  },
  SampledValueControl: {
    edit: ka,
    create: f
  },
  SecPerSamples: {
    edit: f,
    create: f
  },
  SCL: {
    edit: f,
    create: f
  },
  SDI: {
    edit: f,
    create: f
  },
  SDO: {
    edit: f,
    create: f
  },
  Server: {
    edit: f,
    create: f
  },
  ServerAt: {
    edit: f,
    create: f
  },
  Services: {
    edit: f,
    create: f
  },
  SetDataSetValue: {
    edit: f,
    create: f
  },
  SettingControl: {
    edit: f,
    create: f
  },
  SettingGroups: {
    edit: f,
    create: f
  },
  SGEdit: {
    edit: f,
    create: f
  },
  SmpRate: {
    edit: f,
    create: f
  },
  SMV: {
    edit: f,
    create: f
  },
  SmvOpts: {
    edit: f,
    create: f
  },
  SMVsc: {
    edit: f,
    create: f
  },
  SMVSecurity: {
    edit: f,
    create: f
  },
  SMVSettings: {
    edit: f,
    create: f
  },
  SubEquipment: {
    edit: Sp,
    create: $p
  },
  SubFunction: {
    edit: lp,
    create: cp
  },
  SubNetwork: {
    edit: Yu,
    create: f
  },
  Subject: {
    edit: f,
    create: f
  },
  Substation: {
    edit: Pu,
    create: Ou
  },
  SupSubscription: {
    edit: f,
    create: f
  },
  TapChanger: {
    edit: Vp,
    create: Mp
  },
  Terminal: {
    edit: Vu,
    create: f
  },
  Text: {
    edit: f,
    create: f
  },
  TimerActivatedControl: {
    edit: f,
    create: f
  },
  TimeSyncProt: {
    edit: f,
    create: f
  },
  TransformerWinding: {
    edit: Rp,
    create: Dp
  },
  TrgOps: {
    edit: xa,
    create: f
  },
  Val: {
    edit: f,
    create: f
  },
  ValueHandling: {
    edit: f,
    create: f
  },
  Voltage: {
    edit: f,
    create: f
  },
  VoltageLevel: {
    edit: Gu,
    create: Bu
  }
};
var eh = Object.defineProperty, th = Object.getOwnPropertyDescriptor, oi = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? th(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && eh(e, i, r), r;
};
function ih(t) {
  const e = t.getAttribute("lnClass")?.charAt(0) ?? "";
  return nh[e] ?? qo;
}
const nh = {
  L: qo,
  A: hc,
  C: fc,
  F: bc,
  G: gc,
  I: xc,
  K: vc,
  M: yc,
  P: wc,
  Q: Ac,
  R: _c,
  S: Ec,
  T: Sc,
  X: Cc,
  Y: $c,
  Z: Ic
};
let Bt = class extends j {
  get header() {
    const t = this.element.getAttribute("prefix") ?? "", e = this.element.getAttribute("lnClass"), i = this.element.getAttribute("lnInst"), n = this.missingIedReference ? `${t} ${e} ${i}` : L(this.element);
    return typeof n == "string" ? n : "";
  }
  get missingIedReference() {
    return this.element.getAttribute("iedName") === "None";
  }
  get isIEDReference() {
    return this.element.getAttribute("iedName") !== "None";
  }
  cloneLNodeElement() {
    const t = this.element.getAttribute("lnClass");
    if (!t) return;
    const e = Ho(this.element.parentElement)(
      t
    );
    if (!e) return;
    const i = G(this.element, { lnInst: e });
    this.dispatchEvent(
      J({
        new: { parent: this.element.parentElement, element: i }
      })
    );
  }
  openEditWizard() {
    const t = T.LNode.edit(this.element);
    t && this.dispatchEvent(N(t));
  }
  remove() {
    this.element && this.dispatchEvent(
      J({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  render() {
    return s`<action-icon
      label="${this.header}"
      ?secondary=${this.missingIedReference}
      ?highlighted=${this.missingIedReference}
      ><mwc-icon slot="icon">${ih(this.element)}</mwc-icon
      ><mwc-fab
        slot="action"
        mini
        icon="edit"
        @click="${() => this.openEditWizard()}}"
      ></mwc-fab
      ><mwc-fab
        slot="action"
        mini
        icon="delete"
        @click="${() => this.remove()}}"
      ></mwc-fab
      >${this.isIEDReference ? s`` : s`<mwc-fab
            slot="action"
            mini
            icon="content_copy"
            @click=${() => this.cloneLNodeElement()}
          ></mwc-fab>`}
    </action-icon>`;
  }
};
oi([
  m({ attribute: !1 })
], Bt.prototype, "doc", 2);
oi([
  m({ attribute: !1 })
], Bt.prototype, "element", 2);
oi([
  I()
], Bt.prototype, "header", 1);
oi([
  I()
], Bt.prototype, "missingIedReference", 1);
oi([
  I()
], Bt.prototype, "isIEDReference", 1);
Bt = oi([
  R("l-node-editor")
], Bt);
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
const Ai = {
  action: O`<path d="M0 0h24v24H0z" fill="none"></path><path d="M13 3c-4.97 0-9
  4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7
  7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0
  9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" fill="currentColor"></path>`,
  dAIcon: O`<path fill="currentColor" d="m4.2 0c-2.31 0-4.2 1.89-4.2 4.2v11.6c0 2.31 1.89 4.2 4.2 4.2h18.1c2.31 0 4.2-1.89 4.2-4.2v-11.6c0-2.31-1.89-4.2-4.2-4.2zm0 1.89h18.1c1.29 0 2.3 1.01 2.3 2.3v11.6c0 1.29-1.01 2.31-2.3 2.31h-18.1c-1.29 0-2.3-1.01-2.3-2.31v-11.6c0-1.29 1.01-2.3 2.3-2.3z"/><path fill="currentColor" d="m12.5 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path fill="currentColor" d="m19.7 15-0.74-2.56h-3.18l-0.74 2.56h-1.75l3.04-10h2.06l3.03 10zm-1.13-4.13-0.823-2.88-0.379-1.46q-0.0947 0.412-0.178 0.739-0.0829 0.327-1.02 3.59z"/>`,
  dOIcon: O`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m12.1 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path d="m21.6 9.97q0 1.56-0.515 2.75-0.515 1.19-1.47 1.82-0.959 0.625-2.24 0.625-1.97 0-3.08-1.39-1.11-1.39-1.11-3.81 0-2.41 1.11-3.76t3.1-1.35 3.1 1.36q1.12 1.36 1.12 3.74zm-1.78 0q0-1.62-0.639-2.54-0.639-0.923-1.79-0.923-1.17 0-1.81 0.916-0.639 0.909-0.639 2.54 0 1.65 0.651 2.6 0.657 0.945 1.79 0.945 1.17 0 1.81-0.923 0.639-0.923 0.639-2.62z"/>`,
  enumIcon: O`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m5.37 15v-10h6.56v1.62h-4.81v2.51h4.45v1.62h-4.45v2.64h5.06v1.62z"/><path d="m18.5 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  info: O`<path d="M0 0h24v24H0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"></path>`,
  warning: O`<path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="currentColor"></path>`,
  error: O`<path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z" fill="currentColor"></path><path d="M11 7h2v7h-2z" fill="currentColor"></path><circle cx="12" cy="16" r="1" fill="currentColor"></circle>`,
  gooseIcon: O`<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  lNIcon: O`<path stroke="currentColor" stroke-width="1.89" fill="none" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path fill="currentColor" d="m5.71 15v-10h1.75v8.39h4.47v1.62z"/><path fill="currentColor" d="m18.2 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  logIcon: O`<path fill="currentColor" d="M9,7H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  reportIcon: O`<path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,16.41 7.58,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  smvIcon: O`<path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`
}, rr = O`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Ai.gooseIcon}</svg>`, or = O`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Ai.reportIcon}</svg>`, ar = O`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Ai.smvIcon}</svg>`, rh = O`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Ai.logIcon}</svg>`, oh = {
  ReportControl: or,
  LogControl: rh,
  GSEControl: rr,
  SampledValueControl: ar
}, ah = O`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z" />
</svg>`, sh = O`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M21,14V4H3V14H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M4,5H15V10H4V5M16,5H20V7H16V5M20,8V13H16V8H20M4,11H9V13H4V11M10,11H15V13H10V11Z" />
</svg>`;
O`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4,1C2.89,1 2,1.89 2,3V7C2,8.11 2.89,9 4,9H1V11H13V9H10C11.11,9 12,8.11 12,7V3C12,1.89 11.11,1 10,1H4M4,3H10V7H4V3M14,13C12.89,13 12,13.89 12,15V19C12,20.11 12.89,21 14,21H11V23H23V21H20C21.11,21 22,20.11 22,19V15C22,13.89 21.11,13 20,13H14M3.88,13.46L2.46,14.88L4.59,17L2.46,19.12L3.88,20.54L6,18.41L8.12,20.54L9.54,19.12L7.41,17L9.54,14.88L8.12,13.46L6,15.59L3.88,13.46M14,15H20V19H14V15Z" />
</svg>`;
const to = {
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
Li("dAIcon"), Li("dOIcon"), Li("enumIcon"), Li("lNIcon");
function Li(t) {
  if (t === "reset") return s``;
  const e = to[t]?.height ?? 24, i = to[t]?.width ?? 24;
  return s`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${e}"
    viewBox="0 0 ${i} ${e}"
    width="${i}"
  >
    ${Ai[t]}
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
const lh = s`<svg
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
</svg>`, dh = s`<svg
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
</svg>`, ch = s`<svg
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
</svg>`, uh = s`<svg
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
</svg>`, mh = s`<svg
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
</svg>`, ph = s`<svg
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
</svg>`, hh = s`<svg
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
</svg>`, Ma = s`<svg
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
const io = s`<svg
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
O`
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
  </svg>`;
O`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
const fh = O`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
</svg>`, bh = O`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
</svg>`, gh = O`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
</svg>`, xh = O`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
var vh = Object.defineProperty, yh = Object.getOwnPropertyDescriptor, Et = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? yh(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && vh(e, i, r), r;
};
function wh(t) {
  return t ? M[t.tagName].children.filter(
    (e) => T[e].create !== f
  ) : [];
}
let Ye = class extends j {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const t = this.element.getAttribute("name") ?? "", e = this.element.getAttribute("desc");
    return this.showfunctions ? `${t} ${e ? `—  ${e}` : ""}` : `${t}`;
  }
  openEditWizard() {
    const t = T.GeneralEquipment.edit(this.element);
    t && this.dispatchEvent(N(t));
  }
  openCreateWizard(t) {
    const e = T[t].create(this.element);
    e && this.dispatchEvent(N(e));
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      J({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  renderLNodes() {
    const t = $(this.element, "LNode");
    return t.length ? s`<div class="container lnode">
          ${t.map(
      (e) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderEqFunctions() {
    const t = $(this.element, "EqFunction");
    return t.length ? s`${t.map(
      (e) => s` <eq-function-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${e}
            ></eq-function-editor>`
    )}` : s``;
  }
  renderAddButtons() {
    return wh(this.element).map(
      (t) => s`<mwc-list-item value="${t}"
          ><span>${t}</span></mwc-list-item
        >`
    );
  }
  render() {
    return this.showfunctions ? s`<action-pane label=${this.header}>
        <abbr slot="action" title="${l("edit")}">
          <mwc-icon-button
            icon="edit"
            @click=${() => this.openEditWizard()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${l("remove")}">
          <mwc-icon-button
            icon="delete"
            @click=${() => this.remove()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" style="position:relative;" title="${l("add")}">
          <mwc-icon-button
            icon="playlist_add"
            @click=${() => this.addMenu.open = !0}
          ></mwc-icon-button
          ><mwc-menu
            corner="BOTTOM_RIGHT"
            menuCorner="END"
            @action=${(t) => {
      const e = t.target.selected.value;
      this.openCreateWizard(e);
    }}
            >${this.renderAddButtons()}</mwc-menu
          ></abbr
        >
        ${this.renderLNodes()} ${this.renderEqFunctions()}
      </action-pane>` : s`<action-icon label=${this.header}>
      <mwc-icon slot="icon">${Ma}</mwc-icon>
      <mwc-fab
        slot="action"
        mini
        icon="edit"
        @click="${() => this.openEditWizard()}}"
      ></mwc-fab>
      <mwc-fab
        slot="action"
        mini
        icon="delete"
        @click="${() => this.remove()}}"
      ></mwc-fab>
    </action-icon>`;
  }
};
Ye.styles = V`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }
    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
Et([
  m({ attribute: !1 })
], Ye.prototype, "doc", 2);
Et([
  m({ type: Number })
], Ye.prototype, "editCount", 2);
Et([
  m({ attribute: !1 })
], Ye.prototype, "element", 2);
Et([
  m({ type: Boolean })
], Ye.prototype, "showfunctions", 2);
Et([
  I()
], Ye.prototype, "header", 1);
Et([
  w("mwc-menu")
], Ye.prototype, "addMenu", 2);
Et([
  w('mwc-icon-button[icon="playlist_add"]')
], Ye.prototype, "addButton", 2);
Ye = Et([
  R("general-equipment-editor")
], Ye);
var Ah = Object.defineProperty, _h = Object.getOwnPropertyDescriptor, St = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? _h(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && Ah(e, i, r), r;
};
function Eh(t) {
  return t ? M[t.tagName].children.filter(
    (e) => T[e].create !== f
  ) : [];
}
let Qe = class extends j {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const t = this.element.getAttribute("name"), e = this.element.getAttribute("desc"), i = this.element.getAttribute("type");
    return `${t}${e ? ` - ${e}` : ""}${i ? ` (${i})` : ""}`;
  }
  openEditWizard() {
    const t = T.SubFunction.edit(this.element);
    t && this.dispatchEvent(N(t));
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      J({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(t) {
    const e = T[t].create(this.element);
    e && this.dispatchEvent(N(e));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderLNodes() {
    const t = $(this.element, "LNode");
    return t.length ? s`<div class="container lnode">
          ${t.map(
      (e) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderSubFunctions() {
    const t = $(this.element, "SubFunction");
    return s` ${t.map(
      (e) => s`<sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
          ?showfunctions=${this.showfunctions}
        ></sub-function-editor>`
    )}`;
  }
  renderAddButtons() {
    return Eh(this.element).map(
      (t) => s`<mwc-list-item value="${t}"
          ><span>${t}</span></mwc-list-item
        >`
    );
  }
  render() {
    return s`<action-pane label="${this.header}" icon="functions" secondary
      ><abbr slot="action" title="${l("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" title="${l("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${l("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(t) => {
      const e = t.target.selected.value;
      this.openCreateWizard(e);
    }}
          >${this.renderAddButtons()}</mwc-menu
        >
      </abbr>
      ${Zt(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderSubFunctions()}</action-pane
    >`;
  }
};
Qe.styles = V`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
St([
  m({ attribute: !1 })
], Qe.prototype, "doc", 2);
St([
  m({ type: Number })
], Qe.prototype, "editCount", 2);
St([
  m({ attribute: !1 })
], Qe.prototype, "element", 2);
St([
  m({ type: Boolean })
], Qe.prototype, "showfunctions", 2);
St([
  I()
], Qe.prototype, "header", 1);
St([
  w("mwc-menu")
], Qe.prototype, "addMenu", 2);
St([
  w('mwc-icon-button[icon="playlist_add"]')
], Qe.prototype, "addButton", 2);
Qe = St([
  R("sub-function-editor")
], Qe);
var Sh = Object.defineProperty, Ch = Object.getOwnPropertyDescriptor, Ct = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Ch(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && Sh(e, i, r), r;
};
function $h(t) {
  return t ? M[t.tagName].children.filter(
    (e) => T[e].create !== f
  ) : [];
}
let Je = class extends j {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const t = this.element.getAttribute("name"), e = this.element.getAttribute("desc"), i = this.element.getAttribute("type");
    return `${t}${e ? ` - ${e}` : ""}${i ? ` (${i})` : ""}`;
  }
  openEditWizard() {
    const t = T.Function.edit(this.element);
    t && this.dispatchEvent(N(t));
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      J({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(t) {
    const e = T[t].create(this.element);
    e && this.dispatchEvent(N(e));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderLNodes() {
    const t = $(this.element, "LNode");
    return t.length ? s`<div class="container lnode">
          ${t.map(
      (e) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderSubFunctions() {
    const t = $(this.element, "SubFunction");
    return s` ${t.map(
      (e) => s`<sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
          ?showfunctions=${this.showfunctions}
        ></sub-function-editor>`
    )}`;
  }
  renderAddButtons() {
    return $h(this.element).map(
      (t) => s`<mwc-list-item value="${t}"
          ><span>${t}</span></mwc-list-item
        >`
    );
  }
  render() {
    return s`<action-pane
      label="${this.header}"
      icon="functions"
      secondary
      highlighted
      ><abbr slot="action" title="${l("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" title="${l("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${l("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(t) => {
      const e = t.target.selected.value;
      this.openCreateWizard(e);
    }}
          >${this.renderAddButtons()}</mwc-menu
        >
      </abbr>
      ${Zt(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderSubFunctions()}</action-pane
    >`;
  }
};
Je.styles = V`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
Ct([
  m({ attribute: !1 })
], Je.prototype, "doc", 2);
Ct([
  m({ type: Number })
], Je.prototype, "editCount", 2);
Ct([
  m({ attribute: !1 })
], Je.prototype, "element", 2);
Ct([
  m({ type: Boolean })
], Je.prototype, "showfunctions", 2);
Ct([
  I()
], Je.prototype, "header", 1);
Ct([
  w("mwc-menu")
], Je.prototype, "addMenu", 2);
Ct([
  w('mwc-icon-button[icon="playlist_add"]')
], Je.prototype, "addButton", 2);
Je = Ct([
  R("function-editor")
], Je);
function Ih(t, e) {
  return Array.from(t.getElementsByTagName("LNode")).filter(H).some((i) => i.getAttribute("iedName") === e);
}
function Nh(t, e) {
  return Array.from(t.children).some(
    (i) => i.tagName === "LNode" && i.getAttribute("iedName") === e
  );
}
function no(t, e) {
  const i = t.tagName === "Bay" ? 0 : 1;
  return Array.from(t.children).filter(
    (n) => Ih(n, e)
  ).length > i;
}
function kh(t, e) {
  return Array.from(t.getElementsByTagName("LNode")).filter(H).some((i) => i.getAttribute("iedName") === e);
}
function Lh(t, e) {
  return Array.from(t.getElementsByTagName("LNode")).filter(H).filter((i) => i.getAttribute("iedName") === e);
}
function Th(t, e) {
  const i = Lh(t, e), n = t.closest("SCL");
  return Array.from(n.getElementsByTagName("LNode")).filter(H).filter((r) => r.getAttribute("iedName") === e).some((r) => !i.includes(r));
}
function Dh(t, e) {
  const i = [];
  for (const n of e) {
    const r = n.getAttribute("name");
    if (t.tagName === "SCL") {
      (!kh(t, r) || no(t, r)) && i.push(n);
      continue;
    }
    Th(t, r) || (no(t, r) || Nh(t, r)) && i.push(n);
  }
  for (const n of i)
    e.delete(n);
  return i;
}
function zh(t) {
  return (e) => {
    const i = new Set(
      Array.from(t.querySelectorAll("IED")).filter(H)
    );
    return Dh(e, i);
  };
}
function Va(t, e) {
  const [i, n, r, o] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((a) => e.getAttribute(a));
  return Array.from(t.querySelectorAll("LN, LN0")).filter(H).find(
    (a) => a?.closest("LDevice")?.getAttribute("inst") === i && (a.getAttribute("prefix") ?? "") === (n ?? "") && (a.getAttribute("lnClass") ?? "") === (r ?? "") && (a.getAttribute("inst") ?? "") === (o ?? "")
  );
}
function Rh(t) {
  const e = new Set(
    Array.from(t.querySelectorAll("LNode")).filter(H).map((i) => L(i))
  );
  return (i) => e.has(L(i)) ? !0 : (e.add(L(i)), !1);
}
function Fa(t, e, i) {
  const n = Rh(t.ownerDocument), r = t.cloneNode(!0);
  return r.querySelectorAll("LNode").forEach((o) => {
    const a = o.getAttribute("iedName");
    if (a === "None") return;
    if (!a) {
      o.parentElement?.removeChild(o);
      return;
    }
    if (!i || !i[a]) {
      o.parentElement?.removeChild(o);
      return;
    }
    if (i[a] === "No") {
      o.parentElement?.removeChild(o);
      return;
    }
    if (o.setAttribute("iedName", i[a]), n(o)) {
      o.parentElement?.removeChild(o);
      return;
    }
    const d = t.ownerDocument.querySelector(
      `IED[name="${i[a]}"]`
    );
    if (!d || !Va(d, o)) {
      o.parentElement?.removeChild(o);
      return;
    }
  }), r.querySelectorAll('Terminal:not([cNodeName="grounded"])').forEach((o) => o.parentElement?.removeChild(o)), r.querySelectorAll("ConnectivityNode").forEach((o) => o.parentElement?.removeChild(o)), r.setAttribute("name", e), r;
}
function ro(t, e) {
  const i = t.target?.parentElement;
  if (!i || !Array.from(i.querySelectorAll("mwc-select, wizard-textfield")).every((c) => c.checkValidity())) return;
  const r = i.querySelector("wizard-textfield"), o = Array.from(
    i.querySelectorAll("mwc-select")
  ), a = {};
  if (o.forEach((c) => {
    a[c.label] || (a[c.label] = c.value);
  }), !e.parentElement) return;
  const d = Fa(
    e,
    r.value,
    a
  );
  i.dispatchEvent(
    J({
      new: {
        parent: e.parentElement,
        element: d,
        reference: e.nextSibling
      }
    })
  );
}
function Oh(t, e) {
  const i = t.getAttribute("name");
  return !e.some((n) => {
    const [r, o, a, d] = [
      "ldInst",
      "prefix",
      "lnClass",
      "lnInst"
    ].map((c) => n.getAttribute(c));
    return !Array.from(
      t.ownerDocument.querySelectorAll(
        `LNode[iedName="${i}"][ldInst="${r}"]`
      )
    ).filter(H).every(
      (c) => (c.getAttribute("prefix") ?? "") === (o ?? "") && (c.getAttribute("lnClass") ?? "") === (a ?? "") && (c.getAttribute("inst") ?? "") === (d ?? "")
    );
  });
}
function Ph(t, e) {
  return e.some((i) => Va(t, i));
}
function Ba(t, e) {
  const i = Array.from(
    e.querySelectorAll(`LNode[iedName="${t.getAttribute("name")}"]`)
  );
  return Array.from(t.ownerDocument.querySelectorAll("IED")).filter(
    (n) => t !== n && Ph(n, i) && Oh(n, i)
  );
}
function Ha(t) {
  const e = Array.from(
    t.querySelectorAll('LNode:not([iedName="None"])')
  ).map(
    (i) => t.ownerDocument.querySelector(
      `IED[name="${i.getAttribute("iedName")}"]`
    )
  ).filter((i) => i).filter((i) => H(i));
  return new Set(e);
}
function Vn(t, e, i) {
  const n = $(t, e).map(
    (a) => a.getAttribute("name") ?? a.tagName
  );
  if (!n.length) return e + "01";
  const r = i ? i.match(/\d+$/)?.[0] : void 0;
  let o = "";
  for (let a = 0; a < n.length; a++) {
    if (!r) o = (i ?? e) + (a + 1);
    else {
      const d = (Number.parseInt(r, 10) + (a + 1)).toString().padStart(r.length, "0");
      o = i.replace(r, d);
    }
    if (!n.includes(o)) return o;
  }
  return o;
}
function sr(t) {
  const e = t.parentElement, i = t.tagName, n = t.getAttribute("name"), r = e && n ? Vn(e, i, n) : e ? Vn(e, i) : "", o = (e ? $(e, i) : []).map((a) => a.getAttribute("name")).filter((a) => a);
  return s` <mwc-dialog
    stacked
    heading="${l("substation.clone.redirect")}"
  >
    <wizard-textfield
      label="${l("substation.clone.newname")}"
      value="${r}"
      .reservedValues="${o}"
    ></wizard-textfield>
    ${Array.from(Ha(t)).map((a) => {
    const d = Ba(a, t).map(
      (u) => u.getAttribute("name")
    ), c = ["no"].concat(d);
    return s`<mwc-select
        required
        fixedMenuPosition
        value="${c[0]}"
        label="${a.getAttribute("name")}"
        >${c.map(
      (u) => s`<mwc-list-item value="${u}"
            >${u}</mwc-list-item
          >`
    )}</mwc-select
      >`;
  })}
    <mwc-button
      slot="secondaryAction"
      dialogAction="close"
      label="${l("close")}"
      style="--mdc-theme-primary: var(--mdc-theme-error)"
    ></mwc-button>
    <mwc-button
      slot="primaryAction"
      dialogAction="close"
      label="${l("substation.clone.cloneclose")}"
      icon="content_copy"
      @click=${(a) => ro(a, t)}
    ></mwc-button>
    <mwc-button
      slot="primaryAction"
      label="${l("substation.clone.cloneproc")}"
      icon="content_copy"
      @click=${(a) => ro(a, t)}
    ></mwc-button>
  </mwc-dialog>`;
}
function Mh(t) {
  return !Array.from(Ha(t)).every(
    (e) => !Ba(e, t).length
  );
}
async function lr(t) {
  const e = t.element;
  if (Mh(e))
    t.cloneUI = !0, await t.updateComplete, t.dialog.show();
  else {
    const i = t.element.parentElement, n = t.element.getAttribute("name") ?? void 0;
    if (!i) return;
    const r = Vn(
      i,
      t.element.tagName,
      n
    ), o = Fa(t.element, r);
    t.dispatchEvent(J({ new: { parent: i, element: o } }));
  }
}
function Ht(t, e, i) {
  if (!t.element) return;
  t.classList.add("moving");
  const n = (r) => {
    if (r instanceof KeyboardEvent && r.key !== "Escape" && r.key !== " " && r.key !== "Enter" || (r.preventDefault(), r.stopImmediatePropagation(), t.classList.remove("moving"), window.removeEventListener("keydown", n, !0), window.removeEventListener("click", n, !0), r instanceof KeyboardEvent && r.key === "Escape")) return;
    const o = r.composedPath().find(
      (d) => d instanceof e || Vh(d, i)
    );
    if (o === void 0 || o === t) return;
    const a = o instanceof e ? {
      parent: o.element.parentElement,
      reference: o.element
    } : { parent: o.element, reference: null };
    a.parent && (t.element.parentElement !== a.parent || t.element.nextElementSibling !== a.reference) && t.dispatchEvent(
      J({
        old: {
          element: t.element,
          parent: t.element.parentElement,
          reference: t.element.nextSibling
        },
        new: a
      })
    );
  };
  window.addEventListener("click", n, !0), window.addEventListener("keydown", n, !0);
}
function Vh(t, e) {
  return e.find((n) => t instanceof n) !== void 0;
}
function oo(t) {
  return Fh[Yo(t)] ?? Ma;
}
function Zt(t, e, i) {
  const n = $(
    e,
    "GeneralEquipment"
  );
  return n.length ? s` <div
        class="${ne({
    content: !0,
    actionicon: !i
  })}"
      >
        ${n.map(
    (r) => s`<general-equipment-editor
              .doc=${t}
              .element=${r}
              ?showfunctions=${i}
            ></general-equipment-editor>`
  )}
      </div>` : s``;
}
const Fh = {
  CBR: uh,
  DIS: ch,
  CTR: mh,
  VTR: ph,
  ERS: hh
}, Bh = [
  ":root",
  "Substation",
  "VoltageLevel",
  "Bay",
  "ConductingEquipment"
], fi = Object.fromEntries(
  Bh.map((t, e, i) => [t, i.slice(0, e + 1).join(" > ")])
), ht = V`
  abbr {
    text-decoration: none;
    border-bottom: none;
  }

  .ptrContent.actionicon {
    display: grid;
    grid-gap: 12px;
    padding: 8px 12px 16px;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(64px, auto));
  }

  .content.actionicon {
    display: grid;
    grid-gap: 12px;
    padding: 8px 12px 16px;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(64px, auto));
  }

  #iedcontainer {
    display: grid;
    grid-gap: 12px;
    padding: 8px 12px 16px;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(64px, auto));
  }

  .container.lnode {
    display: grid;
    grid-gap: 12px;
    padding: 8px 12px 16px;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(64px, auto));
  }

  mwc-dialog {
    display: flex;
    flex-direction: column;
  }

  mwc-dialog > * {
    display: block;
    margin-top: 16px;
  }

  powertransformer-editor[showfunctions] {
    margin: 4px 8px 16px;
  }

  general-equipment-editor[showfunctions] {
    margin: 4px 8px 16px;
  }

  .substation-editor-icon {
    width: 24px;
    height: 24px;
  }
`;
var Hh = Object.defineProperty, qh = Object.getOwnPropertyDescriptor, $t = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? qh(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && Hh(e, i, r), r;
};
function Gh(t) {
  return t ? M[t.tagName].children.filter(
    (e) => T[e].create !== f
  ) : [];
}
let et = class extends j {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const t = this.element.getAttribute("name"), e = this.element.getAttribute("desc"), i = this.element.getAttribute("type");
    return `${t}${e ? ` - ${e}` : ""}${i ? ` (${i})` : ""}`;
  }
  openEditWizard() {
    const t = T.EqSubFunction.edit(this.element);
    t && this.dispatchEvent(N(t));
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      J({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(t) {
    const e = T[t].create(this.element);
    e && this.dispatchEvent(N(e));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderLNodes() {
    const t = $(this.element, "LNode");
    return t.length ? s`<div class="container lnode">
          ${t.map(
      (e) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderEqSubFunctions() {
    const t = $(
      this.element,
      "EqSubFunction"
    );
    return s` ${t.map(
      (e) => s`<eq-sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
        ></eq-sub-function-editor>`
    )}`;
  }
  renderAddButtons() {
    return Gh(this.element).map(
      (t) => s`<mwc-list-item value="${t}"
          ><span>${t}</span></mwc-list-item
        >`
    );
  }
  render() {
    return s`<action-pane label="${this.header}" icon="functions" secondary
      ><abbr slot="action" title="${l("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" title="${l("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${l("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(t) => {
      const e = t.target.selected.value;
      this.openCreateWizard(e);
    }}
          >${this.renderAddButtons()}</mwc-menu
        ></abbr
      >
      ${Zt(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderEqSubFunctions()}</action-pane
    >`;
  }
};
et.styles = V`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
$t([
  m({ attribute: !1 })
], et.prototype, "doc", 2);
$t([
  m({ type: Number })
], et.prototype, "editCount", 2);
$t([
  m({ attribute: !1 })
], et.prototype, "element", 2);
$t([
  m({ type: Boolean })
], et.prototype, "showfunctions", 2);
$t([
  I()
], et.prototype, "header", 1);
$t([
  w("mwc-menu")
], et.prototype, "addMenu", 2);
$t([
  w('mwc-icon-button[icon="playlist_add"]')
], et.prototype, "addButton", 2);
et = $t([
  R("eq-sub-function-editor")
], et);
var Wh = Object.defineProperty, Uh = Object.getOwnPropertyDescriptor, It = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Uh(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && Wh(e, i, r), r;
};
function jh(t) {
  return t ? M[t.tagName].children.filter(
    (e) => T[e].create !== f
  ) : [];
}
let tt = class extends j {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const t = this.element.getAttribute("name"), e = this.element.getAttribute("desc"), i = this.element.getAttribute("type");
    return `${t}${e ? ` - ${e}` : ""}${i ? ` (${i})` : ""}`;
  }
  openEditWizard() {
    const t = T.EqFunction.edit(this.element);
    t && this.dispatchEvent(N(t));
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      J({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(t) {
    const e = T[t].create(this.element);
    e && this.dispatchEvent(N(e));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderLNodes() {
    const t = $(this.element, "LNode");
    return t.length ? s`<div class="container lnode">
          ${t.map(
      (e) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderEqSubFunctions() {
    const t = $(
      this.element,
      "EqSubFunction"
    );
    return s` ${t.map(
      (e) => s`<eq-sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
          ?showfunctions=${this.showfunctions}
        ></eq-sub-function-editor>`
    )}`;
  }
  renderAddButtons() {
    return jh(this.element).map(
      (t) => s`<mwc-list-item value="${t}"
          ><span>${t}</span></mwc-list-item
        >`
    );
  }
  render() {
    return s`<action-pane
      label="${this.header}"
      icon="functions"
      secondary
      highlighted
      ><abbr slot="action" title="${l("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" title="${l("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${l("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(t) => {
      const e = t.target.selected.value;
      this.openCreateWizard(e);
    }}
          >${this.renderAddButtons()}</mwc-menu
        ></abbr
      >
      ${Zt(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderEqSubFunctions()}</action-pane
    >`;
  }
};
tt.styles = V`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
It([
  m({ attribute: !1 })
], tt.prototype, "doc", 2);
It([
  m({ type: Number })
], tt.prototype, "editCount", 2);
It([
  m({ attribute: !1 })
], tt.prototype, "element", 2);
It([
  m({ type: Boolean })
], tt.prototype, "showfunctions", 2);
It([
  I()
], tt.prototype, "header", 1);
It([
  w("mwc-menu")
], tt.prototype, "addMenu", 2);
It([
  w('mwc-icon-button[icon="playlist_add"]')
], tt.prototype, "addButton", 2);
tt = It([
  R("eq-function-editor")
], tt);
var Kh = Object.defineProperty, Xh = Object.getOwnPropertyDescriptor, Yt = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Xh(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && Kh(e, i, r), r;
};
function Zh(t) {
  return t ? M[t.tagName].children.filter(
    (e) => T[e].create !== f
  ) : [];
}
let ut = class extends j {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
  get label() {
    const t = `${this.element.hasAttribute("name") ? `${this.element.getAttribute("name")}` : ""}`, e = `${this.element.hasAttribute("desc") ? ` - ${this.element.getAttribute("desc")}` : ""}`, i = `${this.element.hasAttribute("phase") ? ` (${this.element.getAttribute("phase")})` : ""}`;
    return `${t}${e}${i}`;
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      J({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(t) {
    const e = T[t].create(this.element);
    e && this.dispatchEvent(N(e));
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  renderAddButtons() {
    return Zh(this.element).map(
      (t) => s`<mwc-list-item value="${t}"
          ><span>${t}</span></mwc-list-item
        >`
    );
  }
  renderLNodes() {
    const t = $(this.element, "LNode");
    return t.length ? s`<div class="container lnode">
          ${t.map(
      (e) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderEqFunctions() {
    const t = $(this.element, "EqFunction");
    return t.length ? s` ${t.map(
      (e) => s`<eq-function-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${e}
            ></eq-function-editor>`
    )}` : s``;
  }
  openEditWizard() {
    const t = T.SubEquipment.edit(this.element);
    t && this.dispatchEvent(N(t));
  }
  render() {
    return s`<action-pane label="${this.label}">
      <abbr slot="action" title="${l("edit")}">
        <mwc-icon-button icon="edit" @click=${() => this.openEditWizard()}>
        </mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${l("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" style="position:relative;" title="${l("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(t) => {
      const e = t.target.selected.value;
      this.openCreateWizard(e);
    }}
          >${this.renderAddButtons()}</mwc-menu
        >
      </abbr>

      ${this.renderLNodes()} ${this.renderEqFunctions()}
    </action-pane> `;
  }
};
ut.styles = V`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    .container.lnode {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }
  `;
Yt([
  m({ attribute: !1 })
], ut.prototype, "doc", 2);
Yt([
  m({ type: Number })
], ut.prototype, "editCount", 2);
Yt([
  m({ attribute: !1 })
], ut.prototype, "element", 2);
Yt([
  m({ type: String })
], ut.prototype, "label", 1);
Yt([
  w("mwc-menu")
], ut.prototype, "addMenu", 2);
Yt([
  w('mwc-icon-button[icon="playlist_add"]')
], ut.prototype, "addButton", 2);
ut = Yt([
  R("sub-equipment-editor")
], ut);
function Yh(t) {
  const e = t.textContent ?? "", [i, n, r, o, a] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((y) => t.getAttribute(y)), d = t.ownerDocument.querySelector(`:root > IED[name=${e}]`);
  if (!d) return null;
  const c = i ? `AccessPoint[name="${i}"]` : "``", u = n ? `LDevice[inst="${n}"]` : "", h = o ? o === "LLN0" ? "LN0" : `LN[lnClass="${o}"]` : "", b = r ? `[prefix="${r}"]` : "", g = a ? `[inst="${a}"]` : "", v = ` ${c} ${u} ${h}${b}${g}`;
  return d.querySelector(v);
}
function Qh(t) {
  const e = [];
  t.forEach((r) => {
    const [o, a, d, c, u, h, b] = [
      "intAddr",
      "desc",
      "serviceType",
      "pServT",
      "pLN",
      "pDO",
      "pDA"
    ].map((g) => r.getAttribute(g));
    if (o) {
      const g = D(r.ownerDocument, "ExtRef", {
        intAddr: o,
        desc: a,
        serviceType: d,
        pServT: c,
        pLN: u,
        pDO: h,
        pDA: b
      });
      e.push({
        new: {
          element: g
        },
        old: {
          element: r
        }
      });
    } else
      e.push({
        old: {
          parent: r.parentElement,
          element: r,
          reference: r.nextElementSibling
        }
      });
  });
  const i = /* @__PURE__ */ new Set();
  t.forEach((r) => {
    Bo(r).forEach((o) => {
      const a = r.closest("IED")?.getAttribute("name"), d = r.closest("LDevice")?.getAttribute("inst"), c = r.closest("AccessPoint")?.getAttribute("name"), u = r.closest("LN0") || r.closest("LN"), [h, b, g] = ["prefix", "lnClass", "inst"].map(
        (y) => u?.getAttribute(y)
      );
      Array.from(o.getElementsByTagName("IEDName")).filter(
        (y) => y.textContent === a && (y.getAttribute("apRef") || c) === c && (y.getAttribute("ldInst") || d) === d && (y.getAttribute("prefix") || h) === h && (y.getAttribute("lnClass") || b) === b && (y.getAttribute("lnInst") || g) === g
      ).forEach((y) => {
        i.add(y);
      });
    });
  });
  const n = /* @__PURE__ */ new Set();
  return i.forEach((r) => {
    n.clear();
    const o = Yh(r);
    o && Ga(o).forEach(
      (a) => n.add(a)
    ), t.forEach((a) => n.delete(a)), n.size === 0 && e.push({
      old: {
        parent: r.parentElement,
        element: r,
        reference: r.nextElementSibling
      }
    });
  }), e;
}
function Jh(t) {
  return (e, i, n) => {
    const r = n.index, o = Array.from(r).map((d) => t[d]), a = [];
    return Qh(o).forEach((d) => a.push(d)), a;
  };
}
function ef(t, e, i) {
  if (!e) return;
  const n = t[0].closest("IED")?.getAttribute("name");
  return [
    {
      title: L(e) + " - " + n,
      primary: {
        icon: "delete",
        label: l("disconnect"),
        action: Jh(t)
      },
      secondary: {
        icon: "",
        label: l("back"),
        action: qa(i)
      },
      content: [
        s`<filtered-list multi
          >${t.map((o) => {
          const a = (o.getAttribute("prefix") ?? "") + o.getAttribute("lnClass") + (o.getAttribute("lnInst") ?? "") + ">" + o.getAttribute("doName") + "." + (o.getAttribute("daName") ?? "");
          return s`<mwc-check-list-item graphic="icon" twoline>
              <span>${a}</span>
              <span slot="secondary"
                >${o.getAttribute("ldInst") ?? ""}</span
              >
              <mwc-icon slot="graphic">${ah}</mwc-icon>
            </mwc-check-list-item> `;
        })}</filtered-list
        >`
      ]
    }
  ];
}
function qa(t) {
  return () => [() => Wa(t)];
}
function tf(t) {
  return t instanceof Element && t.tagName === "IED" ? Array.from(t.ownerDocument.getElementsByTagName("ClientLN")).filter(H).filter(
    (e) => e.getAttribute("iedName") === t.getAttribute("name") || e.closest("IED") === t
  ) : Array.from(t.getElementsByTagName("ClientLN")).filter(H);
}
function Ga(t) {
  return t instanceof Element && t.tagName === "IED" ? Array.from(t.ownerDocument.getElementsByTagName("ExtRef")).filter(H).filter(
    (e) => e.getAttribute("iedName") === t.getAttribute("name") || e.closest("IED") === t && e.getAttribute("iedName")
  ) : Array.from(t.getElementsByTagName("ExtRef")).filter(H).filter((e) => e.getAttribute("iedName"));
}
function Wa(t) {
  const e = t instanceof XMLDocument ? t : t.ownerDocument, i = /* @__PURE__ */ new Map(), n = Ga(t);
  return tf(t).forEach((o) => {
    const a = o.parentElement.parentElement, d = o.getAttribute("iedName"), c = L(a) + " | " + a.tagName + " | " + d;
    i.has(c) || i.set(c, []), i.get(c)?.push(o);
  }), n.forEach((o) => {
    const a = o.closest("IED")?.getAttribute("name") ?? "";
    Bo(o).forEach((c) => {
      const u = L(c) + " | " + c.tagName + " | " + a;
      i.has(u) || i.set(u, []), i.get(u)?.push(o);
    });
  }), [
    {
      title: l("commmap.title"),
      content: [
        s`<filtered-list
          >${Array.from(i.keys()).map((o) => {
          const a = i.get(o), [d, c, u] = o.split(" | "), h = le(e, c, d), [b, g, v] = d.match(/^(.+)>>(.*)$/);
          return s`<mwc-list-item
              twoline
              graphic="icon"
              hasMeta
              @click="${(y) => {
            y.target.dispatchEvent(
              N(
                c === "ReportControl" ? sf(a, t) : ef(a, h, t)
              )
            ), y.target.dispatchEvent(N());
          }}"
            >
              <span
                >${g}
                <mwc-icon style="--mdc-icon-size: 1em;">trending_flat</mwc-icon>
                ${u}</span
              >
              <span slot="secondary">${v}</span>
              <span slot="meta" style="padding-left: 10px"
                >${i.get(o).length}</span
              >
              <mwc-icon slot="graphic">${oh[c]}</mwc-icon>
            </mwc-list-item>`;
        })}</filtered-list
        >`
      ]
    }
  ];
}
function ln(t) {
  return typeof t != "string" ? "" : ge(t)[0] ?? "";
}
function Ft(t) {
  return typeof t != "string" ? "" : ge(t)[1] ?? "";
}
function Ua(t, e) {
  if (e.split(">").length === 4)
    return le(t, "LN", e);
  if (e.split(">").length === 3) {
    if (Ft(e).split(" ").length > 1)
      return le(t, "LN", e);
    if (Ft(e).split(" ").length === 1)
      return le(t, "LN0", e);
  }
  return null;
}
function nf(t, e) {
  for (const i of Array.from(t.getElementsByTagName("ClientLN"))) {
    const [n, r, o, a, d, c] = [
      "iedName",
      "apRef",
      "ldInst",
      "prefix",
      "lnClass",
      "lnInst"
    ].map((v) => i.getAttribute(v)), u = Ua(t.ownerDocument, e);
    if (!u) break;
    const h = u.closest("IED"), b = u.closest("AccessPoint"), g = u.closest("LDevice");
    if (e.split(">").length === 4 && n === h?.getAttribute("name") && r === b?.getAttribute("name") && o === g?.getAttribute("inst") && (a ?? "") === (u.getAttribute("prefix") ?? "") && d === u.getAttribute("lnClass") && (c ?? "") === (u.getAttribute("inst") ?? ""))
      return !0;
    if (e.split(">").length === 3) {
      if (Ft(e).split(" ").length > 1) {
        const v = h?.querySelectorAll("AccessPoint").length;
        if (n === h?.getAttribute("name") && v && (v <= 1 || r === b?.getAttribute("name")) && (a ?? "") === (u.getAttribute("prefix") ?? "") && d === u.getAttribute("lnClass") && (c ?? "") === (u.getAttribute("inst") ?? ""))
          return !0;
      }
      if (Ft(e).split(" ").length === 1 && n === h?.getAttribute("name") && r === b?.getAttribute("name") && o === g?.getAttribute("inst") && d === u.getAttribute("lnClass"))
        return !0;
    }
  }
  return !1;
}
function rf(t) {
  return (e, i) => {
    const n = i.shadowRoot.querySelector("#sourcelist").selected, r = i.shadowRoot.querySelector("#sinklist").selected, o = [];
    return r.forEach((a) => {
      const d = a.value;
      n.map((u) => u.value).map((u) => le(t, "ReportControl", u)).filter((u) => u !== null).forEach((u) => {
        if (u.querySelector("RptEnabled") === null) {
          const b = D(t, "RptEnabled", {
            max: "1"
          });
          u.appendChild(b);
        }
        const h = Ua(t, d);
        if (u.querySelector("RptEnabled") !== null && !nf(u, d) && h) {
          const b = D(t, "ClientLN", {
            iedName: h?.closest("IED")?.getAttribute("name") ?? null,
            apRef: h?.closest("AccessPoint")?.getAttribute("name") ?? null,
            ldInst: h?.closest("LDevice")?.getAttribute("inst") ?? "LD0",
            //ldInst is required and with Ed2 'LD0' for client ln's
            prefix: h?.getAttribute("prefix") ?? "",
            //OpenSCD empty string over null
            lnClass: h?.getAttribute("lnClass") ?? "",
            lnInst: h?.getAttribute("inst") ?? ""
            //OpenSCD empty string over null
          });
          o.push({
            new: {
              parent: u.querySelector("RptEnabled"),
              element: b
            }
          });
        }
      });
    }), o;
  };
}
function of(t, e) {
  const i = t.flatMap((a) => Array.from(a.getElementsByTagName("ReportControl")).map(
    (d) => ({
      identity: L(d),
      numberClientLNs: Array.from(d.getElementsByTagName("ClientLN")).length,
      max: Number(d.querySelector("RptEnabled")?.getAttribute("max"))
    })
  )), n = Array.from(
    e.querySelectorAll(":root > IED > AccessPoint > LN")
  ), r = Array.from(
    e.querySelectorAll(
      ":root > IED > AccessPoint > Server > LDevice > LN"
    )
  ), o = Array.from(
    e.querySelectorAll(
      ":root > IED > AccessPoint > Server > LDevice > LN0"
    )
  );
  return [
    {
      title: l("commmap.connectToIED", {
        iedName: e.getAttribute("name") ?? ""
      }),
      primary: {
        label: l("connect"),
        icon: "",
        action: rf(e.ownerDocument)
      },
      content: [
        s`<div
          class="wrapper"
          style="display: grid; grid-template-columns: 1fr 1fr;"
        >
          <filtered-list
            id="sourcelist"
            multi
            searchFieldLabel="${l("scl.Report")}"
            >${i.sort((a, d) => d.numberClientLNs - a.numberClientLNs).map(
          (a) => s`<mwc-check-list-item
                    left
                    hasMeta
                    twoline
                    value="${a.identity}"
                    ?disabled=${a.numberClientLNs >= a.max}
                    ><span>${Ft(a.identity)}</span
                    ><span slot="secondary">${ln(a.identity)}</span
                    ><span slot="meta"
                      >${a.max ? a.numberClientLNs + "/" + a.max : a.numberClientLNs}</span
                    ></mwc-check-list-item
                  >`
        )}</filtered-list
          ><filtered-list
            multi
            id="sinklist"
            activatable
            searchFieldLabel="${l("scl.LN")}"
            >${n.map(
          (a) => s`<mwc-check-list-item twoline value="${L(a)}">
                  <span>${Ft(L(a))}</span>
                  <span slot="secondary">${ln(L(a))}</span>
                </mwc-check-list-item>`
        )}
            <li divider role="separator"></li>
            ${r.map(
          (a) => s`<mwc-check-list-item twoline value="${L(a)}">
                  <span>${Ft(L(a))}</span>
                  <span slot="secondary">${ln(L(a))}</span>
                </mwc-check-list-item>`
        )}
            ${o.map(
          (a) => s`<mwc-check-list-item twoline value="${L(a)}">
                  <span>LLN0</span>
                  <span slot="secondary">${L(a)}</span>
                </mwc-check-list-item>`
        )}</filtered-list
          >
        </div>`
      ]
    }
  ];
}
function af(t) {
  return (e, i, n) => {
    const r = n.index, o = Array.from(r).map((d) => t[d]), a = [];
    return o.forEach((d) => {
      a.push({
        old: {
          parent: d.parentElement,
          element: d,
          reference: d.nextElementSibling
        }
      });
    }), a;
  };
}
function sf(t, e) {
  const i = t[0].closest("ReportControl"), n = L(i), r = t[0].getAttribute("iedName");
  return [
    {
      title: n + " - " + r,
      primary: {
        icon: "delete",
        label: l("disconnect"),
        action: af(t)
      },
      secondary: {
        icon: "",
        label: l("back"),
        action: qa(e)
      },
      content: [
        s`<filtered-list multi
          >${t.map((o) => {
          const a = (o.getAttribute("prefix") ?? "") + o.getAttribute("lnClass") + (o.getAttribute("lnInst") ?? "");
          return s`<mwc-check-list-item graphic="icon">
              <span>${a}</span>
              <mwc-icon slot="graphic">${sh}</mwc-icon>
            </mwc-check-list-item> `;
        })}</filtered-list
        >`
      ]
    }
  ];
}
function dn(t) {
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
function ja(t, e) {
  const [i, n, r, o, a, d, c] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc"
  ].map((W) => t.getAttribute(W));
  if (!e.querySelector(`LDevice[inst="${i}"]`)) return !1;
  const h = n ? [`[prefix="${n}"]`] : ['[prefix=""]', ":not([prefix])"], b = o ? [`[inst="${o}"]`] : ['[inst=""]', ":not([inst])"], g = fe(
    ["LN0", "LN"],
    h,
    [`[lnClass="${r}"]`],
    b
  ).map((W) => W.join("")).join(","), v = e.querySelector(g);
  if (!v) return !1;
  const y = a?.split(".");
  if (!y) return !1;
  let E = v;
  for (const W of y)
    if (E = dn(E).find(
      (ee) => ee.getAttribute("name") === W
    ), !E) return !1;
  const k = d?.split("."), A = dn(E).some(
    (W) => W.getAttribute("fc") === c
  );
  if (!k && A) return !0;
  if (!k) return !1;
  let F = "";
  for (const W of k)
    if (E = dn(E).find(
      (ee) => ee.getAttribute("name") === W
    ), E?.getAttribute("fc") && (F = E.getAttribute("fc")), !E) return !1;
  return F === c;
}
function Ka(t) {
  return [
    s`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${l("scl.name")}"
      required
      validationMessage="${l("textfield.required")}"
      pattern="${Xe.asciName}"
      maxLength="${Gi.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${l("scl.desc")}"
    ></wizard-textfield>`,
    s`<wizard-checkbox
      label="buffered"
      .maybeValue=${t.buffered}
      helper="${l("scl.buffered")}"
    ></wizard-checkbox>`,
    s`<wizard-textfield
      label="rptID"
      .maybeValue=${t.rptID}
      nullable
      required
      helper="${l("report.rptID")}"
    ></wizard-textfield>`,
    s`<wizard-checkbox
      label="indexed"
      .maybeValue=${t.indexed}
      nullable
      helper="${l("scl.indexed")}"
    ></wizard-checkbox>`,
    s`<wizard-textfield
      label="max Clients"
      .maybeValue=${t.max}
      helper="${l("scl.maxReport")}"
      nullable
      type="number"
      suffix="#"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="bufTime"
      .maybeValue=${t.bufTime}
      helper="${l("scl.bufTime")}"
      nullable
      required
      type="number"
      min="0"
      suffix="ms"
    ></wizard-textfield>`,
    s`<wizard-textfield
      label="intgPd"
      .maybeValue=${t.intgPd}
      helper="${l("scl.intgPd")}"
      nullable
      required
      type="number"
      min="0"
      suffix="ms"
    ></wizard-textfield>`
  ];
}
function lf(t) {
  return (e, i) => {
    const n = {};
    [
      "name",
      "desc",
      "buffered",
      "rptID",
      "indexed",
      "bufTime",
      "intgPd"
    ].forEach((Y) => {
      n[Y] = x(e.find((Ae) => Ae.label === Y));
    }), n.confRev = "1";
    const o = n.name + "sDataSet";
    n.datSet = o;
    const a = D(
      t.ownerDocument,
      "ReportControl",
      n
    ), d = {};
    [
      "seqNum",
      "timeStamp",
      "dataSet",
      "reasonCode",
      "dataRef",
      "entryID",
      "configRef",
      "bufOvfl"
    ].forEach((Y) => {
      d[Y] = x(e.find((Ae) => Ae.label === Y));
    });
    const u = D(
      t.ownerDocument,
      "OptFields",
      d
    ), h = {};
    ["dchg", "qchg", "dupd", "period", "gi"].forEach((Y) => {
      h[Y] = x(e.find((Ae) => Ae.label === Y));
    });
    const g = D(t.ownerDocument, "TrgOps", h), v = x(e.find((Y) => Y.label === "max Clients")), y = v ? D(t.ownerDocument, "RptEnabled", {
      max: v
    }) : null;
    a.appendChild(g), a.appendChild(u), y && a.appendChild(y);
    const E = D(t.ownerDocument, "DataSet", {
      name: o
    }), A = i.shadowRoot.querySelector("finder-list")?.paths ?? [];
    for (const Y of A) {
      const Ae = qi(t, Y);
      Ae && E.appendChild(Ae);
    }
    const F = n.name, W = t.closest("IED").getAttribute("name");
    return [{
      title: l("controlblock.action.add", {
        type: "Report",
        name: F,
        iedName: W
      }),
      actions: [
        { new: { parent: t, element: a } },
        { new: { parent: t, element: E } }
      ]
    }];
  };
}
function Xa(t) {
  const e = t.closest("Server"), i = Fi(t, "ReportControl");
  return [
    {
      title: l("wizard.title.add", { tagName: "ReportControl" }),
      content: Ka({
        name: i,
        desc: null,
        buffered: "true",
        rptID: null,
        indexed: "true",
        max: "5",
        bufTime: "100",
        intgPd: "1000"
      })
    },
    {
      title: l("scl.TrgOps"),
      content: ga({ dchg: "true", qchg: "true", dupd: "true", period: "true", gi: "false" })
    },
    {
      title: l("scl.OptFields"),
      content: oa({
        seqNum: "true",
        timeStamp: "true",
        dataSet: "true",
        reasonCode: "true",
        dataRef: "true",
        entryID: "true",
        configRef: "true",
        bufOvfl: "true"
      })
    },
    {
      title: l("dataset.fcda.add"),
      primary: {
        icon: "save",
        label: l("save"),
        action: lf(t)
      },
      content: [e ? Pi(e) : s``]
    }
  ];
}
function df(t) {
  return (e, i) => {
    const r = i.shadowRoot?.querySelector("finder-list")?.path ?? [];
    if (r.length === 0) return [];
    const [o, a] = r.pop().split(": ");
    if (o !== "IED") return [];
    const d = le(t, o, a);
    if (!d) return [];
    const c = d.querySelector("LN0");
    return c ? [() => Xa(c)] : [];
  };
}
function cf(t) {
  return [
    {
      title: l("report.wizard.location"),
      primary: {
        icon: "",
        label: l("next"),
        action: df(t)
      },
      content: [Jn(t)]
    }
  ];
}
function uf(t) {
  return () => t.tagName === "IED" && t.querySelector("LN0") ? [() => Xa(t.querySelector("LN0"))] : [() => cf(t.ownerDocument)];
}
function mf(t) {
  if (!t.parentElement) return null;
  const e = t.parentElement.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), i = Array.from(
    t.parentElement.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    )
  ).filter(
    (a) => a.getAttribute("datSet") === e?.getAttribute("name")
  ).length <= 1, n = [];
  n.push({
    old: {
      parent: t.parentElement,
      element: t,
      reference: t.nextSibling
    }
  }), e && i && n.push({
    old: {
      parent: t.parentElement,
      element: e,
      reference: e.nextSibling
    }
  });
  const r = t.getAttribute("name"), o = t.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: l("controlblock.action.remove", { type: "Report", name: r, iedName: o }),
    actions: n
  };
}
function pf(t, e, i) {
  if (t === null) {
    const r = D(i.ownerDocument, "RptEnabled", {
      max: e
    });
    return {
      new: {
        parent: i,
        element: r,
        reference: sc(i, "RptEnabled")
      }
    };
  }
  const n = G(t, { max: e });
  return {
    old: { element: t },
    new: { element: n }
  };
}
function hf(t) {
  return (e, i) => {
    const n = t.ownerDocument, r = i.shadowRoot?.querySelector("filtered-list")?.selected, o = [];
    return r.forEach((a) => {
      const d = le(n, "IED", a.value);
      if (!d) return;
      const c = d.querySelector("LN0");
      if (!c) return [];
      const u = t.parentElement?.querySelector(
        `DataSet[name="${t.getAttribute("datSet")}"]`
      );
      if (u && c.querySelector(
        `DataSet[name="${u.getAttribute("name")}"]`
      ))
        return [];
      if (c.querySelector(
        `ReportControl[name="${t.getAttribute("name")}"]`
      ))
        return [];
      const h = u?.cloneNode(!0);
      if (Array.from(h.querySelectorAll("FCDA")).forEach((y) => {
        ja(y, d) || h.removeChild(y);
      }), h.children.length === 0) return [];
      const b = t.cloneNode(!0), g = t.closest("IED")?.getAttribute("name"), v = d.getAttribute("name");
      o.push({
        title: `ReportControl copied from ${g} to ${v}`,
        actions: [
          { new: { parent: c, element: h } },
          { new: { parent: c, element: b } }
        ]
      });
    }), o;
  };
}
function ff(t, e) {
  const i = t.parentElement?.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), n = t.closest("IED")?.getAttribute("name") === e.getAttribute("name"), r = e.querySelector("AccessPoint > Server > LDevice > LN0"), o = !!r?.querySelector(
    `ReportControl[name="${t.getAttribute("name")}"]`
  ), a = !!r?.querySelector(
    `DataSet[name="${i?.getAttribute("name")}"]`
  ), d = i?.cloneNode(!0);
  Array.from(d.querySelectorAll("FCDA")).forEach((b) => {
    ja(b, e) || d.removeChild(b);
  });
  const c = d.children.length > 0, u = e.getAttribute("name");
  let h = "";
  return n ? h = l("controlblock.hints.source") : r ? a && !n ? h = l("controlblock.hints.exist", {
    type: "RerportControl",
    name: t.getAttribute("name")
  }) : o && !n ? h = l("controlblock.hints.exist", {
    type: "DataSet",
    name: t.getAttribute("name")
  }) : c ? h = l("controlBlock.hints.valid") : h = l("controlblock.hints.noMatchingData") : h = l("controlblock.hints.missingServer"), s`<mwc-check-list-item
    twoline
    value="${L(e)}"
    ?disabled=${n || !r || o || a || !c}
    ><span>${u}</span
    ><span slot="secondary">${h}</span></mwc-check-list-item
  >`;
}
function bf(t) {
  return [
    {
      title: l("report.wizard.location"),
      primary: {
        icon: "save",
        label: l("save"),
        action: hf(t)
      },
      content: [
        s`<filtered-list multi
          >${Array.from(t.ownerDocument.querySelectorAll("IED")).map(
          (e) => ff(t, e)
        )}</filtered-list
        >`
      ]
    }
  ];
}
function gf(t) {
  return (e) => {
    e.dispatchEvent(
      De(() => bf(t))
    );
  };
}
function xf(t) {
  return (e) => {
    const i = mf(t);
    i && e.dispatchEvent(J(i)), e.dispatchEvent(N());
  };
}
function vf(t) {
  return (e) => {
    e.dispatchEvent(De(() => tr(t)));
  };
}
function yf(t) {
  return (e) => {
    e.dispatchEvent(De(() => xa(t)));
  };
}
function wf(t) {
  return (e) => {
    e.dispatchEvent(De(() => aa(t)));
  };
}
function Af(t) {
  return (e) => {
    const i = {}, n = [
      "name",
      "desc",
      "buffered",
      "rptID",
      "indexed",
      "bufTime",
      "intgPd"
    ];
    n.forEach((b) => {
      i[b] = x(e.find((g) => g.label === b));
    });
    let r = null;
    if (n.some((b) => i[b] !== t.getAttribute(b))) {
      const b = G(t, i);
      r = {
        old: { element: t },
        new: { element: b }
      };
    }
    const o = x(e.find((b) => b.label === "max Clients"));
    let a = null;
    o !== (t.querySelector("RptEnabled")?.getAttribute("max") ?? null) && (a = pf(
      t.querySelector("RptEnabled"),
      o,
      t
    ));
    const d = [];
    r && d.push(r), a && d.push(a);
    const c = i.name, u = t.closest("IED").getAttribute("name"), h = {
      title: l("controlblock.action.edit", {
        type: "Report",
        name: c,
        iedName: u
      }),
      actions: d
    };
    return d.length ? [h] : [];
  };
}
function _f(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("buffered"), r = t.getAttribute("rptID"), o = t.getAttribute("indexed"), a = t.querySelector("RptEnabled")?.getAttribute("max") ?? null, d = t.getAttribute("bufTime"), c = t.getAttribute("intgPd"), u = t.querySelector("TrgOps"), h = t.querySelector("OptFields"), b = t.parentElement?.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), g = [];
  return g.push({
    icon: "delete",
    label: l("remove"),
    action: xf(t)
  }), b && g.push({
    icon: "edit",
    label: l("scl.DataSet"),
    action: vf(b)
  }), u && g.push({
    icon: "edit",
    label: l("scl.TrgOps"),
    action: yf(u)
  }), h && g.push({
    icon: "edit",
    label: l("scl.OptFields"),
    action: wf(h)
  }), g.push({
    icon: "copy",
    label: l("controlblock.label.copy"),
    action: gf(t)
  }), [
    {
      title: l("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: l("save"),
        action: Af(t)
      },
      menuActions: g,
      content: [
        ...Ka({
          name: e,
          desc: i,
          buffered: n,
          rptID: r,
          indexed: o,
          max: a,
          bufTime: d,
          intgPd: c
        })
      ]
    }
  ];
}
function Za(t) {
  const e = Array.from(
    t.querySelectorAll("ReportControl")
  ).filter(H), i = t.querySelector("LN0") ? {
    icon: "add",
    label: l("Report"),
    action: uf(t)
  } : void 0;
  return [
    {
      title: l("wizard.title.select", { tagName: "ReportControl" }),
      primary: i,
      content: [
        s`<filtered-list
          @selected=${(n) => {
          const r = n.target.selected.value, o = le(t, "ReportControl", r);
          o && n.target?.dispatchEvent(
            De(() => _f(o))
          );
        }}
          >${e.map(
          (n) => s`<mwc-list-item twoline value="${L(n)}"
                ><span>${n.getAttribute("name")}</span
                ><span slot="secondary"
                  >${L(n)}</span
                ></mwc-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
var Ef = Object.defineProperty, Sf = Object.getOwnPropertyDescriptor, ai = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Sf(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && Ef(e, i, r), r;
};
let qt = class extends j {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
  get name() {
    return this.element.getAttribute("name") ?? "UNDEFINED";
  }
  openEditWizard() {
    const t = T.IED.edit(this.element);
    t && this.dispatchEvent(N(t));
  }
  openReportControlSelection() {
    this.dispatchEvent(
      N(() => Za(this.element))
    );
  }
  openGseControlSelection() {
    this.dispatchEvent(
      N(() => $a(this.element))
    );
  }
  openSmvControlSelection() {
    this.dispatchEvent(
      N(() => La(this.element))
    );
  }
  openCommunicationMapping() {
    const t = Array.from(
      this.element.closest("SCL")?.querySelectorAll("IED") ?? []
    ), e = of(t, this.element);
    e && this.dispatchEvent(N(e));
  }
  removeIED() {
    const t = ba(this.element);
    t ? this.dispatchEvent(N(() => t)) : this.dispatchEvent(
      J({
        old: { parent: this.element.parentElement, element: this.element }
      })
    );
  }
  render() {
    return s`<action-icon label="${this.name}" icon="developer_board">
      <mwc-fab
        slot="action"
        class="edit"
        mini
        @click="${() => this.openEditWizard()}"
        icon="edit"
      ></mwc-fab
      ><mwc-fab
        slot="action"
        class="delete"
        mini
        @click="${() => this.removeIED()}"
        icon="delete"
      ></mwc-fab
      ><mwc-fab
        slot="action"
        class="selectreport"
        mini
        @click="${() => this.openReportControlSelection()}"
        ><mwc-icon slot="icon">${or}</mwc-icon></mwc-fab
      ><mwc-fab
        slot="action"
        class="selectsmv"
        mini
        @click="${() => this.openSmvControlSelection()}"
        ><mwc-icon slot="icon">${ar}</mwc-icon></mwc-fab
      ><mwc-fab
        slot="action"
        class="connectreport"
        mini
        @click="${() => this.openCommunicationMapping()}"
        icon="add_link"
      ></mwc-fab
      ><mwc-fab
        slot="action"
        class="selectgse"
        mini
        @click="${() => this.openGseControlSelection()}"
        ><mwc-icon slot="icon">${rr}</mwc-icon></mwc-fab
      ></action-icon
    > `;
  }
};
ai([
  m({ attribute: !1 })
], qt.prototype, "doc", 2);
ai([
  m({ type: Number })
], qt.prototype, "editCount", 2);
ai([
  m({ attribute: !1 })
], qt.prototype, "element", 2);
ai([
  m({ type: String })
], qt.prototype, "name", 1);
ai([
  w(".connectreport")
], qt.prototype, "connectReport", 2);
qt = ai([
  R("ied-editor")
], qt);
var Cf = Object.defineProperty, $f = Object.getOwnPropertyDescriptor, Nt = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? $f(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && Cf(e, i, r), r;
};
function If(t) {
  return t ? M[t.tagName].children.filter(
    (e) => T[e].create !== f
  ) : [];
}
let it = class extends j {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const t = this.element.getAttribute("name") ?? "", e = this.element.getAttribute("desc");
    return `${t} ${e ? `—${e}` : ""}`;
  }
  openEditWizard() {
    const t = T.TapChanger.edit(this.element);
    t && this.dispatchEvent(N(t));
  }
  openCreateWizard(t) {
    const e = T[t].create(this.element);
    e && this.dispatchEvent(N(e));
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      J({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  renderLNodes() {
    const t = $(this.element, "LNode");
    return t.length ? s`<div class="container lnode">
          ${t.map(
      (e) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderEqFunctions() {
    if (!this.showfunctions) return s``;
    const t = $(this.element, "EqFunction");
    return s` ${t.map(
      (e) => s`<eq-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
          ?showfunctions=${this.showfunctions}
        ></eq-function-editor>`
    )}`;
  }
  renderSubEquipments() {
    if (!this.showfunctions) return s``;
    const t = $(
      this.element,
      "SubEquipment"
    );
    return s` ${t.map(
      (e) => s`<sub-equipment-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
        ></sub-equipment-editor>`
    )}`;
  }
  renderAddButtons() {
    return If(this.element).map(
      (t) => s`<mwc-list-item value="${t}"
          ><span>${t}</span></mwc-list-item
        >`
    );
  }
  render() {
    return s`<action-pane label=${this.header}>
      <abbr slot="action" title="${l("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${l("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" style="position:relative;" title="${l("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(t) => {
      const e = t.target.selected.value;
      this.openCreateWizard(e);
    }}
          >${this.renderAddButtons()}</mwc-menu
        ></abbr
      >
      ${this.renderLNodes()} ${this.renderEqFunctions()}
      ${this.renderSubEquipments()}
    </action-pane>`;
  }
};
it.styles = V`
    ${ht}

    :host(.moving) {
      opacity: 0.3;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
Nt([
  m({ attribute: !1 })
], it.prototype, "doc", 2);
Nt([
  m({ type: Number })
], it.prototype, "editCount", 2);
Nt([
  m({ attribute: !1 })
], it.prototype, "element", 2);
Nt([
  m({ type: Boolean })
], it.prototype, "showfunctions", 2);
Nt([
  I()
], it.prototype, "header", 1);
Nt([
  w("mwc-menu")
], it.prototype, "addMenu", 2);
Nt([
  w('mwc-icon-button[icon="playlist_add"]')
], it.prototype, "addButton", 2);
it = Nt([
  R("tapchanger-editor")
], it);
var Nf = Object.defineProperty, kf = Object.getOwnPropertyDescriptor, kt = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? kf(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && Nf(e, i, r), r;
};
function Lf(t) {
  return t ? M[t.tagName].children.filter(
    (e) => T[e].create !== f
  ) : [];
}
let nt = class extends j {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get label() {
    const t = `${this.element.hasAttribute("name") ? `${this.element.getAttribute("name")}` : ""}`, e = `${this.element.hasAttribute("desc") ? ` - ${this.element.getAttribute("desc")}` : ""}`;
    return `${t}${e}`;
  }
  openEditWizard() {
    const t = T.TransformerWinding.edit(this.element);
    t && this.dispatchEvent(N(t));
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      J({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(t) {
    const e = T[t].create(this.element);
    e && this.dispatchEvent(N(e));
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  renderLNodes() {
    const t = $(this.element, "LNode");
    return t.length ? s`<div class="container lnode">
          ${t.map(
      (e) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderEqFunctions() {
    if (!this.showfunctions) return s``;
    const t = $(this.element, "EqFunction");
    return t.length ? s` ${t.map(
      (e) => s`<eq-function-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${e}
              ?showfunctions=${this.showfunctions}
            ></eq-function-editor>`
    )}` : s``;
  }
  renderTapChanger() {
    if (!this.showfunctions) return s``;
    const t = $(this.element, "TapChanger");
    return t.length ? s` ${t.map(
      (e) => s`<tapchanger-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${e}
              ?showfunctions=${this.showfunctions}
            ></tapchanger-editor>`
    )}` : s``;
  }
  renderAddButtons() {
    return Lf(this.element).map(
      (t) => s`<mwc-list-item value="${t}"
          ><span>${t}</span></mwc-list-item
        >`
    );
  }
  render() {
    return s`<action-pane label="${this.label}">
      <mwc-icon class="substation-editor-icon" slot="icon"
        >${xh}</mwc-icon
      >
      <abbr slot="action" title="${l("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${l("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" style="position:relative;" title="${l("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(t) => {
      const e = t.target.selected.value;
      this.openCreateWizard(e);
    }}
          >${this.renderAddButtons()}</mwc-menu
        ></abbr
      >
      ${this.renderLNodes()} ${this.renderEqFunctions()}
      ${this.renderTapChanger()}
    </action-pane> `;
  }
};
nt.styles = V`
    ${ht}

    :host(.moving) {
      opacity: 0.3;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
kt([
  m({ attribute: !1 })
], nt.prototype, "doc", 2);
kt([
  m({ type: Number })
], nt.prototype, "editCount", 2);
kt([
  m({ attribute: !1 })
], nt.prototype, "element", 2);
kt([
  m({ type: Boolean })
], nt.prototype, "showfunctions", 2);
kt([
  m({ type: String })
], nt.prototype, "label", 1);
kt([
  w("mwc-menu")
], nt.prototype, "addMenu", 2);
kt([
  w('mwc-icon-button[icon="playlist_add"]')
], nt.prototype, "addButton", 2);
nt = kt([
  R("transformer-winding-editor")
], nt);
var Tf = Object.defineProperty, Df = Object.getOwnPropertyDescriptor, Pe = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Df(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && Tf(e, i, r), r;
};
function zf(t) {
  return t ? M[t.tagName].children.filter(
    (e) => T[e].create !== f
  ) : [];
}
let ue = class extends j {
  constructor() {
    super(...arguments), this.editCount = -1, this.readonly = !1, this.showfunctions = !1, this.getAttachedIeds = () => [], this.cloneUI = !1;
  }
  get voltage() {
    const t = this.element.querySelector(fi.VoltageLevel + " > Voltage");
    if (t === null) return null;
    const e = t.textContent ?? "", i = t.getAttribute("multiplier"), n = i === null ? "V" : " " + i + "V";
    return e ? e + n : null;
  }
  get header() {
    const t = this.element.getAttribute("name") ?? "", e = this.element.getAttribute("desc");
    return `${t} ${e ? `- ${e}` : ""}
    ${this.voltage === null ? "" : `(${this.voltage})`}`;
  }
  openEditWizard() {
    const t = T.VoltageLevel.edit(this.element);
    t && this.dispatchEvent(N(t));
  }
  /** Opens a [[`WizardDialog`]] for editing `LNode` connections. */
  openLNodeWizard() {
    const t = T.LNode.create(this.element);
    t && this.dispatchEvent(N(t));
  }
  remove() {
    this.element && this.dispatchEvent(
      J({
        old: {
          parent: this.element.parentElement,
          element: this.element,
          reference: this.element.nextSibling
        }
      })
    );
  }
  openCreateWizard(t) {
    const e = T[t].create(this.element);
    e && this.dispatchEvent(N(e));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderRedirectUI() {
    return this.cloneUI ? sr(this.element) : s``;
  }
  renderLNodes() {
    if (!this.showfunctions) return s``;
    const t = $(this.element, "LNode");
    return t.length ? s`<div class="container lnode">
          ${t.map(
      (e) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderFunctions() {
    if (!this.showfunctions) return s``;
    const t = $(this.element, "Function");
    return s` ${t.map(
      (e) => s`<function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
          ?showfunctions=${this.showfunctions}
        ></function-editor>`
    )}`;
  }
  renderIedContainer() {
    const t = this.getAttachedIeds?.(this.element) ?? [];
    return t?.length ? s`<div id="iedcontainer">
          ${t.map(
      (e) => s`<ied-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
              ></ied-editor>`
    )}
        </div>` : s``;
  }
  renderPowerTransformerContainer() {
    const t = Array.from(
      this.element?.querySelectorAll(
        fi.VoltageLevel + " > PowerTransformer"
      ) ?? []
    );
    return t?.length ? s`<div
          class="${ne({
      ptrContent: !0,
      actionicon: !this.showfunctions
    })}"
        >
          ${t.map(
      (e) => s`<powertransformer-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
                ?showfunctions=${this.showfunctions}
              ></powertransformer-editor>`
    )}
        </div>` : s``;
  }
  renderAddButtons() {
    return zf(this.element).map(
      (t) => s`<mwc-list-item value="${t}"
          ><span>${t}</span></mwc-list-item
        >`
    );
  }
  render() {
    return s`${this.renderRedirectUI()}<action-pane label="${this.header}">
        <mwc-icon class="substation-editor-icon" slot="icon"
          >${lh}</mwc-icon
        >
        <abbr slot="action" title="${l("lnode.tooltip")}">
          <mwc-icon-button
            icon="account_tree"
            @click=${() => this.openLNodeWizard()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${l("duplicate")}">
          <mwc-icon-button
            icon="content_copy"
            @click=${() => lr(this)}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${l("edit")}">
          <mwc-icon-button
            icon="edit"
            @click=${() => this.openEditWizard()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${l("move")}">
          <mwc-icon-button
            icon="forward"
            @click=${() => Ht(this, ue, [me])}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${l("remove")}">
          <mwc-icon-button
            icon="delete"
            @click=${() => this.remove()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" style="position:relative;" title="${l("add")}">
          <mwc-icon-button
            icon="playlist_add"
            @click=${() => this.addMenu.open = !0}
          ></mwc-icon-button
          ><mwc-menu
            corner="BOTTOM_RIGHT"
            menuCorner="END"
            @action=${(t) => {
      const e = t.target.selected.value;
      this.openCreateWizard(e);
    }}
            >${this.renderAddButtons()}</mwc-menu
          >
        </abbr>
        ${Zt(this.doc, this.element, this.showfunctions)}
        ${this.renderIedContainer()}${this.renderLNodes()}${this.renderFunctions()}
        ${this.renderPowerTransformerContainer()}
        <div id="bayContainer">
          ${Array.from(this.element?.querySelectorAll(fi.Bay) ?? []).map(
      (t) => s`<bay-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${t}
              .getAttachedIeds=${this.getAttachedIeds}
              ?readonly=${this.readonly}
              ?showfunctions=${this.showfunctions}
            ></bay-editor>`
    )}
        </div>
      </action-pane>`;
  }
};
ue.styles = V`
    ${ht}

    #bayContainer {
      display: grid;
      grid-gap: 12px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(316px, auto));
    }

    @media (max-width: 387px) {
      #bayContainer {
        grid-template-columns: repeat(auto-fit, minmax(196px, auto));
      }
    }
  `;
Pe([
  m({ attribute: !1 })
], ue.prototype, "doc", 2);
Pe([
  m({ type: Number })
], ue.prototype, "editCount", 2);
Pe([
  m({ attribute: !1 })
], ue.prototype, "element", 2);
Pe([
  m({ type: Boolean })
], ue.prototype, "readonly", 2);
Pe([
  m({ type: Boolean })
], ue.prototype, "showfunctions", 2);
Pe([
  m()
], ue.prototype, "voltage", 1);
Pe([
  m({ type: String })
], ue.prototype, "header", 1);
Pe([
  m({ attribute: !1 })
], ue.prototype, "getAttachedIeds", 2);
Pe([
  I()
], ue.prototype, "cloneUI", 2);
Pe([
  w("mwc-dialog")
], ue.prototype, "dialog", 2);
Pe([
  w("mwc-menu")
], ue.prototype, "addMenu", 2);
Pe([
  w('mwc-icon-button[icon="playlist_add"]')
], ue.prototype, "addButton", 2);
ue = Pe([
  R("voltage-level-editor")
], ue);
var Rf = Object.defineProperty, Of = Object.getOwnPropertyDescriptor, He = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Of(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && Rf(e, i, r), r;
};
function Pf(t) {
  return t ? M[t.tagName].children.filter(
    (e) => T[e].create !== f
  ) : [];
}
let me = class extends j {
  constructor() {
    super(...arguments), this.editCount = -1, this.readonly = !1, this.showfunctions = !1, this.getAttachedIeds = () => [], this.cloneUI = !1;
  }
  get header() {
    const t = this.element.getAttribute("name") ?? "", e = this.element.getAttribute("desc");
    return `${t} ${e ? `- ${e}` : ""}`;
  }
  /** Opens a [[`WizardDialog`]] for editing [[`element`]]. */
  openEditWizard() {
    const t = T.Substation.edit(this.element);
    t && this.dispatchEvent(N(t));
  }
  /** Opens a [[`WizardDialog`]] for editing `LNode` connections. */
  openLNodeWizard() {
    const t = T.LNode.create(this.element);
    t && this.dispatchEvent(N(t));
  }
  /** Deletes [[`element`]]. */
  remove() {
    this.dispatchEvent(
      J({
        old: {
          parent: this.element.parentElement,
          element: this.element,
          reference: this.element.nextSibling
        }
      })
    );
  }
  openCreateWizard(t) {
    const e = T[t].create(this.element);
    e && this.dispatchEvent(N(e));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderRedirectUI() {
    return this.cloneUI ? sr(this.element) : s``;
  }
  renderLNodes() {
    if (!this.showfunctions) return s``;
    const t = $(this.element, "LNode");
    return t.length ? s`<div class="container lnode">
          ${t.map(
      (e) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderFunctions() {
    if (!this.showfunctions) return s``;
    const t = $(this.element, "Function");
    return s` ${t.map(
      (e) => s`<function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
          ?showfunctions=${this.showfunctions}
        ></function-editor>`
    )}`;
  }
  renderIedContainer() {
    const t = this.getAttachedIeds?.(this.element) ?? [];
    return t?.length ? s`<div id="iedcontainer">
          ${t.map(
      (e) => s`<ied-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
              ></ied-editor>`
    )}
        </div>` : s``;
  }
  renderPowerTransformerContainer() {
    const t = Array.from(
      this.element?.querySelectorAll(
        fi.Substation + " > PowerTransformer"
      ) ?? []
    );
    return t?.length ? s`<div
          class="${ne({
      ptrContent: !0,
      actionicon: !this.showfunctions
    })}"
        >
          ${t.map(
      (e) => s`<powertransformer-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
                ?showfunctions=${this.showfunctions}
              ></powertransformer-editor>`
    )}
        </div>` : s``;
  }
  renderAddButtons() {
    return Pf(this.element).map(
      (t) => s`<mwc-list-item value="${t}"
          ><span>${t}</span></mwc-list-item
        >`
    );
  }
  render() {
    return s`${this.renderRedirectUI()}<action-pane label="${this.header}">
        <mwc-icon class="substation-editor-icon" slot="icon"
          >${fh}</mwc-icon
        >
        <abbr slot="action" title="${l("lnode.tooltip")}">
          <mwc-icon-button
            icon="account_tree"
            @click=${() => this.openLNodeWizard()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${l("duplicate")}">
          <mwc-icon-button
            icon="content_copy"
            @click=${() => lr(this)}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${l("edit")}">
          <mwc-icon-button
            icon="edit"
            @click=${() => this.openEditWizard()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${l("move")}">
          <mwc-icon-button
            icon="forward"
            @click=${() => Ht(this, me, [me])}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${l("remove")}">
          <mwc-icon-button
            icon="delete"
            @click=${() => this.remove()}
          ></mwc-icon-button
        ></abbr>
        <abbr slot="action" style="position:relative;" title="${l("add")}">
          <mwc-icon-button
            icon="playlist_add"
            @click=${() => this.addMenu.open = !0}
          ></mwc-icon-button
          ><mwc-menu
            corner="BOTTOM_RIGHT"
            menuCorner="END"
            @action=${(t) => {
      const e = t.target.selected.value;
      this.openCreateWizard(e);
    }}
            >${this.renderAddButtons()}</mwc-menu
          >
        </abbr>
        ${Zt(this.doc, this.element, this.showfunctions)}
        ${this.renderIedContainer()}${this.renderLNodes()}${this.renderFunctions()}
        ${this.renderPowerTransformerContainer()}
        ${Array.from(this.element.querySelectorAll(fi.VoltageLevel)).map(
      (t) => s`<voltage-level-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${t}
              .getAttachedIeds=${this.getAttachedIeds}
              ?readonly=${this.readonly}
              ?showfunctions=${this.showfunctions}
            ></voltage-level-editor>`
    )}</action-pane
      >`;
  }
};
me.styles = V`
    ${ht}
  `;
He([
  m({ attribute: !1 })
], me.prototype, "doc", 2);
He([
  m({ type: Number })
], me.prototype, "editCount", 2);
He([
  m({ attribute: !1 })
], me.prototype, "element", 2);
He([
  m({ type: Boolean })
], me.prototype, "readonly", 2);
He([
  m({ type: Boolean })
], me.prototype, "showfunctions", 2);
He([
  m({ type: String })
], me.prototype, "header", 1);
He([
  m({ attribute: !1 })
], me.prototype, "getAttachedIeds", 2);
He([
  I()
], me.prototype, "cloneUI", 2);
He([
  w("mwc-dialog")
], me.prototype, "dialog", 2);
He([
  w("mwc-menu")
], me.prototype, "addMenu", 2);
He([
  w('mwc-icon-button[icon="playlist_add"]')
], me.prototype, "addButton", 2);
me = He([
  R("substation-editor")
], me);
var Mf = Object.defineProperty, Vf = Object.getOwnPropertyDescriptor, Lt = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Vf(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && Mf(e, i, r), r;
};
function Ff(t) {
  return t ? M[t.tagName].children.filter(
    (e) => T[e].create !== f
  ) : [];
}
let Ve = class extends j {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get name() {
    return this.element.getAttribute("name") ?? "UNDEFINED";
  }
  openEditWizard() {
    const t = T.PowerTransformer.edit(this.element);
    t && this.dispatchEvent(N(t));
  }
  openLNodeWizard() {
    const t = T.LNode.create(this.element);
    t && this.dispatchEvent(N(t));
  }
  removeElement() {
    this.element && this.dispatchEvent(
      J({
        old: {
          parent: this.element.parentElement,
          element: this.element,
          reference: this.element.nextSibling
        }
      })
    );
  }
  openCreateWizard(t) {
    const e = T[t].create(this.element);
    e && this.dispatchEvent(N(e));
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  renderLNodes() {
    const t = $(this.element, "LNode");
    return t.length ? s`<div class="container lnode">
          ${t.map(
      (e) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderEqFunctions() {
    if (!this.showfunctions) return s``;
    const t = $(this.element, "EqFunction");
    return s` ${t.map(
      (e) => s`<eq-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
          ?showfunctions=${this.showfunctions}
        ></eq-function-editor>`
    )}`;
  }
  renderSubEquipments() {
    if (!this.showfunctions) return s``;
    const t = $(
      this.element,
      "SubEquipment"
    );
    return s` ${t.map(
      (e) => s`<sub-equipment-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
        ></sub-equipment-editor>`
    )}`;
  }
  renderAddButtons() {
    return Ff(this.element).map(
      (t) => s`<mwc-list-item value="${t}"
          ><span>${t}</span></mwc-list-item
        >`
    );
  }
  renderContentPane() {
    return s`<mwc-icon class="substation-editor-icon" slot="icon"
        >${io}</mwc-icon
      >
      <abbr slot="action" title="${l("lnode.tooltip")}">
        <mwc-icon-button
          slot="action"
          mini
          @click="${() => this.openLNodeWizard()}"
          icon="account_tree"
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${l("edit")}">
        <mwc-icon-button
          slot="action"
          mini
          icon="edit"
          @click="${() => this.openEditWizard()}}"
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${l("move")}">
        <mwc-icon-button
          slot="action"
          mini
          @click="${() => {
      Ht(this, Ve, [
        me,
        ue,
        pe
      ]);
    }}"
          icon="forward"
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${l("remove")}">
        <mwc-icon-button
          slot="action"
          mini
          icon="delete"
          @click="${() => this.removeElement()}}"
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${l("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(t) => {
      const e = t.target.selected.value;
      this.openCreateWizard(e);
    }}
          >${this.renderAddButtons()}</mwc-menu
        >
      </abbr>`;
  }
  renderTransformerWinding() {
    if (!this.showfunctions) return s``;
    const t = $(
      this.element,
      "TransformerWinding"
    );
    return t.length ? s`<div class="container">
          ${t.map(
      (e) => s`<transformer-winding-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
                ?showfunctions=${this.showfunctions}
              ></transformer-winding-editor>`
    )}
        </div>` : s``;
  }
  renderContentIcon() {
    return s`<mwc-icon slot="icon"
        >${io}</mwc-icon
      >
      <mwc-fab
        slot="action"
        class="edit"
        mini
        @click="${() => this.openEditWizard()}"
        icon="edit"
      ></mwc-fab>
      <mwc-fab
        slot="action"
        mini
        icon="delete"
        @click="${() => this.removeElement()}}"
      ></mwc-fab>
      <mwc-fab
        slot="action"
        mini
        @click="${() => {
      Ht(this, Ve, [
        me,
        ue,
        pe
      ]);
    }}"
        icon="forward"
      ></mwc-fab>
      <mwc-fab
        slot="action"
        mini
        @click="${() => this.openLNodeWizard()}"
        icon="account_tree"
      ></mwc-fab>`;
  }
  render() {
    return this.showfunctions ? s`<action-pane label="${this.name}">
        ${this.renderContentPane()} ${this.renderLNodes()}
        ${this.renderEqFunctions()} ${this.renderSubEquipments()}
        ${this.renderTransformerWinding()}
      </action-pane> ` : s`<action-icon label="${this.name}"
      >${this.renderContentIcon()}</action-icon
    > `;
  }
};
Ve.styles = V`
    ${ht}

    :host(.moving) {
      opacity: 0.3;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
Lt([
  m({ attribute: !1 })
], Ve.prototype, "doc", 2);
Lt([
  m({ type: Number })
], Ve.prototype, "editCount", 2);
Lt([
  m({ attribute: !1 })
], Ve.prototype, "element", 2);
Lt([
  m({ type: String })
], Ve.prototype, "name", 1);
Lt([
  m({ type: Boolean })
], Ve.prototype, "showfunctions", 2);
Lt([
  w("mwc-menu")
], Ve.prototype, "addMenu", 2);
Lt([
  w('mwc-icon-button[icon="playlist_add"]')
], Ve.prototype, "addButton", 2);
Ve = Lt([
  R("powertransformer-editor")
], Ve);
var Bf = Object.defineProperty, Hf = Object.getOwnPropertyDescriptor, qe = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Hf(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && Bf(e, i, r), r;
};
function qf(t) {
  return t ? M[t.tagName].children.filter(
    (e) => T[e].create !== f
  ) : [];
}
let pe = class extends j {
  constructor() {
    super(...arguments), this.editCount = -1, this.readonly = !1, this.showfunctions = !1, this.getAttachedIeds = () => [], this.cloneUI = !1;
  }
  get header() {
    const t = this.element.getAttribute("name") ?? "", e = this.element.getAttribute("desc");
    return `${t} ${e ? `- ${e}` : ""}`;
  }
  openEditWizard() {
    const t = T.Bay.edit(this.element);
    t && this.dispatchEvent(N(t));
  }
  /** Opens a [[`WizardDialog`]] for editing `LNode` connections. */
  openLNodeWizard() {
    const t = T.LNode.create(this.element);
    t && this.dispatchEvent(N(t));
  }
  remove() {
    this.element && this.dispatchEvent(
      J({
        old: {
          parent: this.element.parentElement,
          element: this.element,
          reference: this.element.nextSibling
        }
      })
    );
  }
  openCreateWizard(t) {
    const e = T[t].create(this.element);
    e && this.dispatchEvent(N(e));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderRedirectUI() {
    return this.cloneUI ? sr(this.element) : s``;
  }
  renderLNodes() {
    if (!this.showfunctions) return s``;
    const t = $(this.element, "LNode");
    return t.length ? s`<div class="container lnode">
          ${t.map(
      (e) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderFunctions() {
    if (!this.showfunctions) return s``;
    const t = $(this.element, "Function");
    return s` ${t.map(
      (e) => s`<function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
          ?showfunctions=${this.showfunctions}
        ></function-editor>`
    )}`;
  }
  renderIedContainer() {
    const t = this.getAttachedIeds?.(this.element) ?? [];
    return t?.length ? s`<div id="iedcontainer">
          ${t.map(
      (e) => s`<ied-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
              ></ied-editor>`
    )}
        </div>` : s``;
  }
  renderAddButtons() {
    return qf(this.element).map(
      (t) => s`<mwc-list-item value="${t}"
          ><span>${t}</span></mwc-list-item
        >`
    );
  }
  render() {
    return s`${this.renderRedirectUI()}<action-pane label="${this.header}">
        <mwc-icon class="substation-editor-icon" slot="icon"
          >${dh}</mwc-icon
        >
        <abbr slot="action" title="${l("lnode.tooltip")}">
          <mwc-icon-button
            icon="account_tree"
            @click="${() => this.openLNodeWizard()}"
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${l("duplicate")}">
          <mwc-icon-button
            icon="content_copy"
            @click=${() => lr(this)}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${l("edit")}">
          <mwc-icon-button
            icon="edit"
            @click=${() => this.openEditWizard()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${l("move")}">
          <mwc-icon-button
            icon="forward"
            @click=${() => Ht(this, pe, [ue])}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${l("remove")}">
          <mwc-icon-button
            icon="delete"
            @click=${() => this.remove()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" style="position:relative;" title="${l("add")}">
          <mwc-icon-button
            icon="playlist_add"
            @click=${() => this.addMenu.open = !0}
          ></mwc-icon-button
          ><mwc-menu
            corner="BOTTOM_RIGHT"
            menuCorner="END"
            @action=${(t) => {
      const e = t.target.selected.value;
      this.openCreateWizard(e);
    }}
            >${this.renderAddButtons()}</mwc-menu
          >
        </abbr>
        ${Zt(this.doc, this.element, this.showfunctions)}
        ${this.renderIedContainer()}${this.renderLNodes()}${this.renderFunctions()}
        <div
          class="${ne({
      content: !0,
      actionicon: !this.showfunctions
    })}"
        >
          ${Array.from(
      $(this.element, "PowerTransformer")
    ).map(
      (t) => s`<powertransformer-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
                ?showfunctions=${this.showfunctions}
              ></powertransformer-editor>`
    )}
          ${Array.from(
      $(this.element, "ConductingEquipment")
    ).map(
      (t) => s`<conducting-equipment-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
                ?readonly=${this.readonly}
                ?showfunctions=${this.showfunctions}
              ></conducting-equipment-editor>`
    )}
        </div>
      </action-pane> `;
  }
};
pe.styles = V`
    ${ht}

    .content.actionicon {
      display: grid;
      grid-gap: 12px;
      padding: 12px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(64px, auto));
    }

    conducting-equipment-editor[showfunctions] {
      margin: 4px 8px 16px;
    }
  `;
qe([
  m({ attribute: !1 })
], pe.prototype, "doc", 2);
qe([
  m({ type: Number })
], pe.prototype, "editCount", 2);
qe([
  m({ attribute: !1 })
], pe.prototype, "element", 2);
qe([
  m({ type: Boolean })
], pe.prototype, "readonly", 2);
qe([
  m({ type: Boolean })
], pe.prototype, "showfunctions", 2);
qe([
  m({ type: String })
], pe.prototype, "header", 1);
qe([
  m({ attribute: !1 })
], pe.prototype, "getAttachedIeds", 2);
qe([
  I()
], pe.prototype, "cloneUI", 2);
qe([
  w("mwc-dialog")
], pe.prototype, "dialog", 2);
qe([
  w("mwc-menu")
], pe.prototype, "addMenu", 2);
qe([
  w('mwc-icon-button[icon="playlist_add"]')
], pe.prototype, "addButton", 2);
pe = qe([
  R("bay-editor")
], pe);
var Gf = Object.defineProperty, Wf = Object.getOwnPropertyDescriptor, Tt = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Wf(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && Gf(e, i, r), r;
};
function Uf(t) {
  return t ? M[t.tagName].children.filter(
    (e) => T[e].create !== f
  ) : [];
}
let Fe = class extends j {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get name() {
    return this.element.getAttribute("name") ?? "";
  }
  openEditWizard() {
    const t = T.ConductingEquipment.edit(this.element);
    t && this.dispatchEvent(N(t));
  }
  openLNodeWizard() {
    const t = T.LNode.create(this.element);
    t && this.dispatchEvent(N(t));
  }
  openCreateWizard(t) {
    const e = T[t].create(this.element);
    e && this.dispatchEvent(N(e));
  }
  remove() {
    this.element && this.dispatchEvent(
      J({
        old: {
          parent: this.element.parentElement,
          element: this.element,
          reference: this.element.nextSibling
        }
      })
    );
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  renderLNodes() {
    const t = $(this.element, "LNode");
    return t.length ? s`<div class="container lnode">
          ${t.map(
      (e) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderEqFunctions() {
    if (!this.showfunctions) return s``;
    const t = $(this.element, "EqFunction");
    return s` ${t.map(
      (e) => s`<eq-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
          ?showfunctions=${this.showfunctions}
        ></eq-function-editor>`
    )}`;
  }
  renderSubEquipments() {
    if (!this.showfunctions) return s``;
    const t = $(
      this.element,
      "SubEquipment"
    );
    return s` ${t.map(
      (e) => s`<sub-equipment-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
        ></sub-equipment-editor>`
    )}`;
  }
  renderAddButtons() {
    return Uf(this.element).map(
      (t) => s`<mwc-list-item value="${t}"
          ><span>${t}</span></mwc-list-item
        >`
    );
  }
  renderContentPane() {
    return s`<mwc-icon class="substation-editor-icon" slot="icon"
        >${oo(this.element)}</mwc-icon
      >
      <abbr slot="action" title="${l("lnode.tooltip")}">
        <mwc-icon-button
          slot="action"
          mini
          @click="${() => this.openLNodeWizard()}"
          icon="account_tree"
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${l("edit")}">
        <mwc-icon-button
          slot="action"
          mini
          icon="edit"
          @click="${() => this.openEditWizard()}}"
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${l("move")}">
        <mwc-icon-button
          slot="action"
          mini
          @click="${() => Ht(this, Fe, [pe])}"
          icon="forward"
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${l("remove")}">
        <mwc-icon-button
          slot="action"
          mini
          icon="delete"
          @click="${() => this.remove()}}"
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${l("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(t) => {
      const e = t.target.selected.value;
      this.openCreateWizard(e);
    }}
          >${this.renderAddButtons()}</mwc-menu
        >
      </abbr>`;
  }
  renderContentIcon() {
    return s`<mwc-icon slot="icon">${oo(this.element)}</mwc-icon>
      <mwc-fab
        slot="action"
        mini
        @click="${() => this.openLNodeWizard()}"
        icon="account_tree"
      ></mwc-fab>
      <mwc-fab
        slot="action"
        mini
        icon="edit"
        @click="${() => this.openEditWizard()}}"
      ></mwc-fab>
      <mwc-fab
        slot="action"
        mini
        @click="${() => Ht(this, Fe, [pe])}"
        icon="forward"
      ></mwc-fab>
      <mwc-fab
        slot="action"
        mini
        icon="delete"
        @click="${() => this.remove()}}"
      ></mwc-fab>`;
  }
  render() {
    return this.showfunctions ? s`<action-pane label="${this.name}"
        >${this.renderContentPane()}${this.renderLNodes()}${this.renderEqFunctions()}${this.renderSubEquipments()}</action-pane
        ></action-pane
      >` : s`<action-icon label="${this.name}"
      >${this.renderContentIcon()}</action-icon
    >`;
  }
};
Fe.styles = V`
    ${ht}

    :host(.moving) {
      opacity: 0.3;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
Tt([
  m({ attribute: !1 })
], Fe.prototype, "doc", 2);
Tt([
  m({ type: Number })
], Fe.prototype, "editCount", 2);
Tt([
  m({ attribute: !1 })
], Fe.prototype, "element", 2);
Tt([
  m({ type: String })
], Fe.prototype, "name", 1);
Tt([
  m({ type: Boolean })
], Fe.prototype, "showfunctions", 2);
Tt([
  w("mwc-menu")
], Fe.prototype, "addMenu", 2);
Tt([
  w('mwc-icon-button[icon="playlist_add"]')
], Fe.prototype, "addButton", 2);
Fe = Tt([
  R("conducting-equipment-editor")
], Fe);
var jf = Object.defineProperty, Kf = Object.getOwnPropertyDescriptor, Dt = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Kf(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && jf(e, i, r), r;
};
function Xf(t) {
  return t ? M[t.tagName].children.filter(
    (e) => T[e].create !== f
  ) : [];
}
let rt = class extends j {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const t = this.element.getAttribute("name") ?? "", e = this.element.getAttribute("desc");
    return `${t} ${e ? `—${e}` : ""}`;
  }
  openEditWizard() {
    const t = T.Line.edit(this.element);
    t && this.dispatchEvent(N(t));
  }
  openCreateWizard(t) {
    const e = T[t].create(this.element);
    e && this.dispatchEvent(N(e));
  }
  renderConductingEquipments() {
    const t = $(
      this.element,
      "ConductingEquipment"
    );
    return s` ${t.map(
      (e) => s`<conducting-equipment-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
          ?showfunctions=${this.showfunctions}
        ></conducting-equipment-editor>`
    )}`;
  }
  renderGeneralEquipments() {
    const t = $(
      this.element,
      "GeneralEquipment"
    );
    return s` ${t.map(
      (e) => s`<general-equipment-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
          ?showfunctions=${this.showfunctions}
        ></general-equipment-editor>`
    )}`;
  }
  renderFunctions() {
    if (!this.showfunctions) return s``;
    const t = $(this.element, "Function");
    return s` ${t.map(
      (e) => s`<function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
          ?showfunctions=${this.showfunctions}
        ></function-editor>`
    )}`;
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      J({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  renderLNodes() {
    if (!this.showfunctions) return s``;
    const t = $(this.element, "LNode");
    return t.length ? s`<div class="container lnode">
          ${t.map(
      (e) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderAddButtons() {
    return Xf(this.element).map(
      (t) => s`<mwc-list-item value="${t}"
          ><span>${t}</span></mwc-list-item
        >`
    );
  }
  render() {
    return s`<action-pane label=${this.header}>
      <mwc-icon class="substation-editor-icon" slot="icon"
        >${bh}</mwc-icon
      >
      <abbr slot="action" title="${l("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${l("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" style="position:relative;" title="${l("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(t) => {
      const e = t.target.selected.value;
      this.openCreateWizard(e);
    }}
          >${this.renderAddButtons()}</mwc-menu
        ></abbr
      >${this.renderConductingEquipments()}${this.renderGeneralEquipments()}${this.renderFunctions()}${this.renderLNodes()}
    </action-pane>`;
  }
};
rt.styles = V`
    ${ht}

    :host(.moving) {
      opacity: 0.3;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
Dt([
  m({ attribute: !1 })
], rt.prototype, "doc", 2);
Dt([
  m({ type: Number })
], rt.prototype, "editCount", 2);
Dt([
  m({ attribute: !1 })
], rt.prototype, "element", 2);
Dt([
  m({ type: Boolean })
], rt.prototype, "showfunctions", 2);
Dt([
  I()
], rt.prototype, "header", 1);
Dt([
  w("mwc-menu")
], rt.prototype, "addMenu", 2);
Dt([
  w('mwc-icon-button[icon="playlist_add"]')
], rt.prototype, "addButton", 2);
rt = Dt([
  R("line-editor")
], rt);
var Zf = Object.defineProperty, Yf = Object.getOwnPropertyDescriptor, zt = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Yf(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && Zf(e, i, r), r;
};
function Qf(t) {
  return t ? M[t.tagName].children.filter(
    (e) => T[e].create !== f
  ) : [];
}
let ot = class extends j {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const t = this.element.getAttribute("name") ?? "", e = this.element.getAttribute("desc");
    return `${t} ${e ? `—${e}` : ""}`;
  }
  openEditWizard() {
    const t = T.Process.edit(this.element);
    t && this.dispatchEvent(N(t));
  }
  openCreateWizard(t) {
    const e = T[t].create(this.element);
    e && this.dispatchEvent(N(e));
  }
  renderConductingEquipments() {
    const t = $(
      this.element,
      "ConductingEquipment"
    );
    return s` ${t.map(
      (e) => s`<conducting-equipment-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
          ?showfunctions=${this.showfunctions}
        ></conducting-equipment-editor>`
    )}`;
  }
  renderGeneralEquipments() {
    const t = $(
      this.element,
      "GeneralEquipment"
    );
    return s` ${t.map(
      (e) => s`<general-equipment-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
          ?showfunctions=${this.showfunctions}
        ></general-equipment-editor>`
    )}`;
  }
  renderLines() {
    const t = $(this.element, "Line");
    return s` ${t.map(
      (e) => s`<line-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
          ?showfunctions=${this.showfunctions}
        ></line-editor>`
    )}`;
  }
  renderSubstations() {
    const t = $(this.element, "Substation");
    return s` ${t.map(
      (e) => s`<substation-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
          ?showfunctions=${this.showfunctions}
        ></substation-editor>`
    )}`;
  }
  renderProcesses() {
    const t = $(this.element, "Process");
    return s` ${t.map(
      (e) => s`<process-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
          ?showfunctions=${this.showfunctions}
        ></process-editor>`
    )}`;
  }
  renderFunctions() {
    if (!this.showfunctions) return s``;
    const t = $(this.element, "Function");
    return s` ${t.map(
      (e) => s`<function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
          ?showfunctions=${this.showfunctions}
        ></function-editor>`
    )}`;
  }
  renderLNodes() {
    if (!this.showfunctions) return s``;
    const t = $(this.element, "LNode");
    return t.length ? s`<div class="container lnode">
          ${t.map(
      (e) => s`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
              ></l-node-editor>`
    )}
        </div>` : s``;
  }
  renderAddButtons() {
    return Qf(this.element).map(
      (t) => s`<mwc-list-item value="${t}"
          ><span>${t}</span></mwc-list-item
        >`
    );
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      J({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  render() {
    return s`<action-pane label=${this.header}>
      <mwc-icon class="substation-editor-icon" slot="icon"
        >${gh}</mwc-icon
      >
      <abbr slot="action" title="${l("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${l("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" style="position:relative;" title="${l("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(t) => {
      const e = t.target.selected.value;
      this.openCreateWizard(e);
    }}
          >${this.renderAddButtons()}</mwc-menu
        ></abbr
      >
      ${this.renderConductingEquipments()}${this.renderGeneralEquipments()}${this.renderFunctions()}${this.renderLNodes()}
      ${this.renderLines()} ${this.renderSubstations()}${this.renderProcesses()}
    </action-pane>`;
  }
};
ot.styles = V`
    ${ht}

    :host(.moving) {
      opacity: 0.3;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
zt([
  m({ attribute: !1 })
], ot.prototype, "doc", 2);
zt([
  m({ type: Number })
], ot.prototype, "editCount", 2);
zt([
  m({ attribute: !1 })
], ot.prototype, "element", 2);
zt([
  m({ type: Boolean })
], ot.prototype, "showfunctions", 2);
zt([
  I()
], ot.prototype, "header", 1);
zt([
  w("mwc-menu")
], ot.prototype, "addMenu", 2);
zt([
  w('mwc-icon-button[icon="playlist_add"]')
], ot.prototype, "addButton", 2);
ot = zt([
  R("process-editor")
], ot);
var Jf = Object.defineProperty, eb = Object.getOwnPropertyDescriptor, ze = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? eb(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && Jf(e, i, r), r;
};
function cn() {
  return localStorage.getItem("showieds") === "on";
}
function ao(t) {
  localStorage.setItem("showieds", t);
}
function mi() {
  return localStorage.getItem("showfunctions") === "on";
}
function so(t) {
  localStorage.setItem("showfunctions", t);
}
function tb(t) {
  return t ? M[t.tagName].children.filter(
    (e) => T[e].create !== f
  ) : [];
}
let ye = class extends j {
  constructor() {
    super(...arguments), this.editCount = -1, this.readonly = !1, this.getAttachedIeds = () => [];
  }
  openCommunicationMapping() {
    const t = Wa(this.doc);
    t && this.dispatchEvent(N(t));
  }
  openReportControlSelection() {
    this.dispatchEvent(
      N(() => Za(this.doc.documentElement))
    );
  }
  openGseControlSelection() {
    this.dispatchEvent(
      N(() => $a(this.doc.documentElement))
    );
  }
  openSampledValueControlSelection() {
    this.dispatchEvent(
      N(
        () => La(this.doc.documentElement)
      )
    );
  }
  toggleShowIEDs() {
    cn() ? ao("off") : ao("on"), this.requestUpdate();
  }
  toggleShowFunctions() {
    mi() ? so("off") : so("on"), this.requestUpdate();
  }
  renderIedContainer() {
    this.getAttachedIeds = cn() ? zh(this.doc) : () => [];
    const t = this.getAttachedIeds?.(this.doc.documentElement) ?? [];
    return t.length ? s`<div id="iedcontainer">
          ${t.map(
      (e) => s`<ied-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
              ></ied-editor>`
    )}
        </div>` : s``;
  }
  renderSubstation() {
    return this.doc?.querySelector(":root > Substation") ? s`<section>
          ${Array.from(this.doc.querySelectorAll("Substation") ?? []).filter(H).map(
      (t) => s`<substation-editor
                  .editCount=${this.editCount}
                  .doc=${this.doc}
                  .element=${t}
                  .getAttachedIeds=${this.getAttachedIeds}
                  ?readonly=${this.readonly}
                  ?showfunctions=${mi()}
                ></substation-editor>`
    )}
        </section>` : this.doc?.querySelector(":root > Line, :root > Process") ? s`` : s`<h1>
          <span style="color: var(--base1)">${l("substation.missing")}</span>
        </h1>`;
  }
  renderLines() {
    return this.doc?.querySelector(":root > Line") ? s`<section>
          ${Array.from(this.doc.querySelectorAll("Line") ?? []).filter(H).map(
      (t) => s`<line-editor
                  .editCount=${this.editCount}
                  .doc=${this.doc}
                  .element=${t}
                  .getAttachedIeds=${this.getAttachedIeds}
                  ?readonly=${this.readonly}
                  ?showfunctions=${mi()}
                ></line-editor>`
    )}
        </section>` : s``;
  }
  renderProcesses() {
    return this.doc?.querySelector(":root > Process") ? s`<section>
          ${Array.from(this.doc.querySelectorAll(":root > Process") ?? []).filter(H).map(
      (t) => s`<process-editor
                  .editCount=${this.editCount}
                  .doc=${this.doc}
                  .element=${t}
                  .getAttachedIeds=${this.getAttachedIeds}
                  ?readonly=${this.readonly}
                  ?showfunctions=${mi()}
                ></process-editor>`
    )}
        </section>` : s``;
  }
  openCreateWizard(t) {
    const e = T[t].create(this.doc.documentElement);
    e && this.dispatchEvent(N(e));
  }
  renderAddButtons() {
    return tb(this.doc.documentElement).map(
      (t) => s`<mwc-list-item value="${t}"
          ><span>${t}</span></mwc-list-item
        >`
    );
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  render() {
    return s` <h1>
        <nav>
          <abbr slot="action" title="${l("add")}">
            <mwc-icon-button
              icon="playlist_add"
              @click=${() => this.addMenu.open = !0}
            ></mwc-icon-button
            ><mwc-menu
              corner="BOTTOM_RIGHT"
              @action=${(t) => {
      const e = t.target.selected.value;
      this.openCreateWizard(e);
    }}
              >${this.renderAddButtons()}</mwc-menu
            ></abbr
          >
        </nav>
        <nav>
          <abbr title="${l("zeroline.showieds")}">
            <mwc-icon-button-toggle
              ?on=${cn()}
              @click=${() => this.toggleShowIEDs()}
              id="showieds"
              onIcon="developer_board"
              offIcon="developer_board_off"
            ></mwc-icon-button-toggle>
          </abbr>
          <abbr title="${l("zeroline.showfunctions")}">
            <mwc-icon-button-toggle
              ?on=${mi()}
              @click=${() => this.toggleShowFunctions()}
              id="showfunctions"
              onIcon="layers"
              offIcon="layers_clear"
            ></mwc-icon-button-toggle>
          </abbr>
          <abbr title="${l("zeroline.commmap")}">
            <mwc-icon-button
              id="commmap"
              icon="link"
              @click=${() => this.openCommunicationMapping()}
            ></mwc-icon-button>
          </abbr>
          <abbr title="${l("zeroline.reportcontrol")}"
            ><mwc-icon-button
              id="reportcontrol"
              @click="${() => this.openReportControlSelection()}"
              >${or}</mwc-icon-button
            ></abbr
          >
          <abbr title="${l("zeroline.gsecontrol")}"
            ><mwc-icon-button
              id="gsecontrol"
              @click="${() => this.openGseControlSelection()}"
              >${rr}</mwc-icon-button
            ></abbr
          >
          <abbr title="${l("zeroline.smvcontrol")}"
            ><mwc-icon-button
              id="smvcontrol"
              @click="${() => this.openSampledValueControlSelection()}"
              >${ar}</mwc-icon-button
            ></abbr
          >
        </nav>
      </h1>
      ${this.renderIedContainer()}
      ${this.renderSubstation()}${this.renderLines()}${this.renderProcesses()}`;
  }
};
ye.styles = V`
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
      transition: background-color 150ms linear;
    }

    h1 > nav,
    h1 > abbr > mwc-icon-button {
      float: right;
    }

    section {
      padding: 8px 12px 16px;
      display: grid;
      gap: 12px;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    #iedcontainer {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(128px, auto));
    }
  `;
ze([
  m({ attribute: !1 })
], ye.prototype, "doc", 2);
ze([
  m({ type: Number })
], ye.prototype, "editCount", 2);
ze([
  m({ type: Boolean })
], ye.prototype, "readonly", 2);
ze([
  m({ attribute: !1 })
], ye.prototype, "getAttachedIeds", 2);
ze([
  w("#commmap")
], ye.prototype, "commmap", 2);
ze([
  w("#showieds")
], ye.prototype, "showieds", 2);
ze([
  w("#showfunctions")
], ye.prototype, "showfunctions", 2);
ze([
  w("#gsecontrol")
], ye.prototype, "gsecontrol", 2);
ze([
  w("#smvcontrol")
], ye.prototype, "smvcontrol", 2);
ze([
  w("#reportcontrol")
], ye.prototype, "reportcontrol", 2);
ze([
  w("#createsubstation")
], ye.prototype, "createsubstation", 2);
ze([
  w("mwc-menu")
], ye.prototype, "addMenu", 2);
ze([
  w('mwc-icon-button[icon="playlist_add"]')
], ye.prototype, "addButton", 2);
ye = ze([
  R("zeroline-pane")
], ye);
var ib = Object.defineProperty, Ya = (t, e, i, n) => {
  for (var r = void 0, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = a(e, i, r) || r);
  return r && ib(e, i, r), r;
};
class Qa extends pi {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
  /** Opens a [[`WizardDialog`]] for creating a new `Substation` element. */
  openCreateSubstationWizard() {
    const e = T.Substation.create(this.doc.documentElement);
    e && this.dispatchEvent(N(e));
  }
  render() {
    return _` <zeroline-pane
        .editCount=${this.editCount}
        .doc=${this.doc}
    ></zeroline-pane>
    ${this.doc?.querySelector(
      ":root > Substation, :root > Line, :root > Process"
    ) ? _`` : _`<h1>
          <mwc-fab
              extended
              icon="add"
              label="${l("substation.wizard.title.add")}"
              @click=${() => this.openCreateSubstationWizard()}
          ></mwc-fab>
        </h1>`}`;
  }
  static {
    this.styles = hs`
    mwc-fab {
      position: fixed;
      bottom: 32px;
      right: 32px;
    }

    :host {
      width: 100vw;
    }
  `;
  }
}
Ya([
  mo()
], Qa.prototype, "doc");
Ya([
  mo({ type: Number })
], Qa.prototype, "editCount");
export {
  Qa as default
};
