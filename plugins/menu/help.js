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
const ci = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, Tn = (r, e, t = null, i = null) => {
  for (; e !== t; ) {
    const n = e.nextSibling;
    r.insertBefore(e, i), e = n;
  }
}, Yt = (r, e, t = null) => {
  for (; e !== t; ) {
    const i = e.nextSibling;
    r.removeChild(e), e = i;
  }
};
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
const be = `{{lit-${String(Math.random()).slice(2)}}}`, Wi = `<!--${be}-->`, pi = new RegExp(`${be}|${Wi}`), Ye = "$lit$";
class Xi {
  constructor(e, t) {
    this.parts = [], this.element = t;
    const i = [], n = [], o = document.createTreeWalker(t.content, 133, null, !1);
    let a = 0, s = -1, d = 0;
    const { strings: p, values: { length: m } } = e;
    for (; d < m; ) {
      const h = o.nextNode();
      if (h === null) {
        o.currentNode = n.pop();
        continue;
      }
      if (s++, h.nodeType === 1) {
        if (h.hasAttributes()) {
          const g = h.attributes, { length: f } = g;
          let C = 0;
          for (let A = 0; A < f; A++)
            hi(g[A].name, Ye) && C++;
          for (; C-- > 0; ) {
            const A = p[d], P = St.exec(A)[2], E = P.toLowerCase() + Ye, S = h.getAttribute(E);
            h.removeAttribute(E);
            const N = S.split(pi);
            this.parts.push({ type: "attribute", index: s, name: P, strings: N }), d += N.length - 1;
          }
        }
        h.tagName === "TEMPLATE" && (n.push(h), o.currentNode = h.content);
      } else if (h.nodeType === 3) {
        const g = h.data;
        if (g.indexOf(be) >= 0) {
          const f = h.parentNode, C = g.split(pi), A = C.length - 1;
          for (let P = 0; P < A; P++) {
            let E, S = C[P];
            if (S === "")
              E = ke();
            else {
              const N = St.exec(S);
              N !== null && hi(N[2], Ye) && (S = S.slice(0, N.index) + N[1] + N[2].slice(0, -Ye.length) + N[3]), E = document.createTextNode(S);
            }
            f.insertBefore(E, h), this.parts.push({ type: "node", index: ++s });
          }
          C[A] === "" ? (f.insertBefore(ke(), h), i.push(h)) : h.data = C[A], d += A;
        }
      } else if (h.nodeType === 8)
        if (h.data === be) {
          const g = h.parentNode;
          (h.previousSibling === null || s === a) && (s++, g.insertBefore(ke(), h)), a = s, this.parts.push({ type: "node", index: s }), h.nextSibling === null ? h.data = "" : (i.push(h), s--), d++;
        } else {
          let g = -1;
          for (; (g = h.data.indexOf(be, g + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), d++;
        }
    }
    for (const h of i)
      h.parentNode.removeChild(h);
  }
}
const hi = (r, e) => {
  const t = r.length - e.length;
  return t >= 0 && r.slice(t) === e;
}, Yi = (r) => r.index !== -1, ke = () => document.createComment(""), St = (
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
const Zt = 133;
function Zi(r, e) {
  const { element: { content: t }, parts: i } = r, n = document.createTreeWalker(t, Zt, null, !1);
  let o = Ze(i), a = i[o], s = -1, d = 0;
  const p = [];
  let m = null;
  for (; n.nextNode(); ) {
    s++;
    const h = n.currentNode;
    for (h.previousSibling === m && (m = null), e.has(h) && (p.push(h), m === null && (m = h)), m !== null && d++; a !== void 0 && a.index === s; )
      a.index = m !== null ? -1 : a.index - d, o = Ze(i, o), a = i[o];
  }
  p.forEach((h) => h.parentNode.removeChild(h));
}
const Rn = (r) => {
  let e = r.nodeType === 11 ? 0 : 1;
  const t = document.createTreeWalker(r, Zt, null, !1);
  for (; t.nextNode(); )
    e++;
  return e;
}, Ze = (r, e = -1) => {
  for (let t = e + 1; t < r.length; t++) {
    const i = r[t];
    if (Yi(i))
      return t;
  }
  return -1;
};
function Ln(r, e, t = null) {
  const { element: { content: i }, parts: n } = r;
  if (t == null) {
    i.appendChild(e);
    return;
  }
  const o = document.createTreeWalker(i, Zt, null, !1);
  let a = Ze(n), s = 0, d = -1;
  for (; o.nextNode(); )
    for (d++, o.currentNode === t && (s = Rn(e), t.parentNode.insertBefore(e, t)); a !== -1 && n[a].index === d; ) {
      if (s > 0) {
        for (; a !== -1; )
          n[a].index += s, a = Ze(n, a);
        return;
      }
      a = Ze(n, a);
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
const Ki = /* @__PURE__ */ new WeakMap(), ze = (r) => (...e) => {
  const t = r(...e);
  return Ki.set(t, !0), t;
}, Qe = (r) => typeof r == "function" && Ki.has(r);
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
const ae = {}, we = {};
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
class It {
  constructor(e, t, i) {
    this.__parts = [], this.template = e, this.processor = t, this.options = i;
  }
  update(e) {
    let t = 0;
    for (const i of this.__parts)
      i !== void 0 && i.setValue(e[t]), t++;
    for (const i of this.__parts)
      i !== void 0 && i.commit();
  }
  _clone() {
    const e = ci ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), t = [], i = this.template.parts, n = document.createTreeWalker(e, 133, null, !1);
    let o = 0, a = 0, s, d = n.nextNode();
    for (; o < i.length; ) {
      if (s = i[o], !Yi(s)) {
        this.__parts.push(void 0), o++;
        continue;
      }
      for (; a < s.index; )
        a++, d.nodeName === "TEMPLATE" && (t.push(d), n.currentNode = d.content), (d = n.nextNode()) === null && (n.currentNode = t.pop(), d = n.nextNode());
      if (s.type === "node") {
        const p = this.processor.handleTextExpression(this.options);
        p.insertAfterNode(d.previousSibling), this.__parts.push(p);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(d, s.name, s.strings, this.options));
      o++;
    }
    return ci && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const mi = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (r) => r }), On = ` ${be} `;
class Kt {
  constructor(e, t, i, n) {
    this.strings = e, this.values = t, this.type = i, this.processor = n;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */
  getHTML() {
    const e = this.strings.length - 1;
    let t = "", i = !1;
    for (let n = 0; n < e; n++) {
      const o = this.strings[n], a = o.lastIndexOf("<!--");
      i = (a > -1 || i) && o.indexOf("-->", a + 1) === -1;
      const s = St.exec(o);
      s === null ? t += o + (i ? On : Wi) : t += o.substr(0, s.index) + s[1] + s[2] + Ye + s[3] + be;
    }
    return t += this.strings[e], t;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let t = this.getHTML();
    return mi !== void 0 && (t = mi.createHTML(t)), e.innerHTML = t, e;
  }
}
class Fn extends Kt {
  getHTML() {
    return `<svg>${super.getHTML()}</svg>`;
  }
  getTemplateElement() {
    const e = super.getTemplateElement(), t = e.content, i = t.firstChild;
    return t.removeChild(i), Tn(t, i.firstChild), e;
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
const et = (r) => r === null || !(typeof r == "object" || typeof r == "function"), Tt = (r) => Array.isArray(r) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(r && r[Symbol.iterator]);
class Qi {
  constructor(e, t, i) {
    this.dirty = !0, this.element = e, this.name = t, this.strings = i, this.parts = [];
    for (let n = 0; n < i.length - 1; n++)
      this.parts[n] = this._createPart();
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */
  _createPart() {
    return new Ie(this);
  }
  _getValue() {
    const e = this.strings, t = e.length - 1, i = this.parts;
    if (t === 1 && e[0] === "" && e[1] === "") {
      const o = i[0].value;
      if (typeof o == "symbol")
        return String(o);
      if (typeof o == "string" || !Tt(o))
        return o;
    }
    let n = "";
    for (let o = 0; o < t; o++) {
      n += e[o];
      const a = i[o];
      if (a !== void 0) {
        const s = a.value;
        if (et(s) || !Tt(s))
          n += typeof s == "string" ? s : String(s);
        else
          for (const d of s)
            n += typeof d == "string" ? d : String(d);
      }
    }
    return n += e[t], n;
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
  }
}
let Ie = class {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== ae && (!et(e) || e !== this.value) && (this.value = e, Qe(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; Qe(this.value); ) {
      const e = this.value;
      this.value = ae, e(this);
    }
    this.value !== ae && this.committer.commit();
  }
};
class Te {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(ke()), this.endNode = e.appendChild(ke());
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
    e.__insert(this.startNode = ke()), e.__insert(this.endNode = ke());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = ke()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; Qe(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = ae, t(this);
    }
    const e = this.__pendingValue;
    e !== ae && (et(e) ? e !== this.value && this.__commitText(e) : e instanceof Kt ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : Tt(e) ? this.__commitIterable(e) : e === we ? (this.value = we, this.clear()) : this.__commitText(e));
  }
  __insert(e) {
    this.endNode.parentNode.insertBefore(e, this.endNode);
  }
  __commitNode(e) {
    this.value !== e && (this.clear(), this.__insert(e), this.value = e);
  }
  __commitText(e) {
    const t = this.startNode.nextSibling;
    e = e ?? "";
    const i = typeof e == "string" ? e : String(e);
    t === this.endNode.previousSibling && t.nodeType === 3 ? t.data = i : this.__commitNode(document.createTextNode(i)), this.value = e;
  }
  __commitTemplateResult(e) {
    const t = this.options.templateFactory(e);
    if (this.value instanceof It && this.value.template === t)
      this.value.update(e.values);
    else {
      const i = new It(t, e.processor, this.options), n = i._clone();
      i.update(e.values), this.__commitNode(n), this.value = i;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const t = this.value;
    let i = 0, n;
    for (const o of e)
      n = t[i], n === void 0 && (n = new Te(this.options), t.push(n), i === 0 ? n.appendIntoPart(this) : n.insertAfterPart(t[i - 1])), n.setValue(o), n.commit(), i++;
    i < t.length && (t.length = i, this.clear(n && n.endNode));
  }
  clear(e = this.startNode) {
    Yt(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
let Qt = class {
  constructor(e, t, i) {
    if (this.value = void 0, this.__pendingValue = void 0, i.length !== 2 || i[0] !== "" || i[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = t, this.strings = i;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; Qe(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = ae, t(this);
    }
    if (this.__pendingValue === ae)
      return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = ae;
  }
};
class Mn extends Qi {
  constructor(e, t, i) {
    super(e, t, i), this.single = i.length === 2 && i[0] === "" && i[1] === "";
  }
  _createPart() {
    return new Ge(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
  }
}
class Ge extends Ie {
}
let Ji = !1;
(() => {
  try {
    const r = {
      get capture() {
        return Ji = !0, !1;
      }
    };
    window.addEventListener("test", r, r), window.removeEventListener("test", r, r);
  } catch {
  }
})();
let Jt = class {
  constructor(e, t, i) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = t, this.eventContext = i, this.__boundHandleEvent = (n) => this.handleEvent(n);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; Qe(this.__pendingValue); ) {
      const o = this.__pendingValue;
      this.__pendingValue = ae, o(this);
    }
    if (this.__pendingValue === ae)
      return;
    const e = this.__pendingValue, t = this.value, i = e == null || t != null && (e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive), n = e != null && (t == null || i);
    i && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), n && (this.__options = zn(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = ae;
  }
  handleEvent(e) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
};
const zn = (r) => r && (Ji ? { capture: r.capture, passive: r.passive, once: r.once } : r.capture);
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
function Dn(r) {
  let e = Je.get(r.type);
  e === void 0 && (e = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, Je.set(r.type, e));
  let t = e.stringsArray.get(r.strings);
  if (t !== void 0)
    return t;
  const i = r.strings.join(be);
  return t = e.keyString.get(i), t === void 0 && (t = new Xi(r, r.getTemplateElement()), e.keyString.set(i, t)), e.stringsArray.set(r.strings, t), t;
}
const Je = /* @__PURE__ */ new Map();
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
const Ve = /* @__PURE__ */ new WeakMap(), Pn = (r, e, t) => {
  let i = Ve.get(e);
  i === void 0 && (Yt(e, e.firstChild), Ve.set(e, i = new Te(Object.assign({ templateFactory: Dn }, t))), i.appendInto(e)), i.setValue(r), i.commit();
};
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
class $n {
  /**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */
  handleAttributeExpressions(e, t, i, n) {
    const o = t[0];
    return o === "." ? new Mn(e, t.slice(1), i).parts : o === "@" ? [new Jt(e, t.slice(1), n.eventContext)] : o === "?" ? [new Qt(e, t.slice(1), i)] : new Qi(e, t, i).parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */
  handleTextExpression(e) {
    return new Te(e);
  }
}
const en = new $n();
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
const u = (r, ...e) => new Kt(r, e, "html", en), F = (r, ...e) => new Fn(r, e, "svg", en);
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
const tn = (r, e) => `${r}--${e}`;
let pt = !0;
typeof window.ShadyCSS > "u" ? pt = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), pt = !1);
const Bn = (r) => (e) => {
  const t = tn(e.type, r);
  let i = Je.get(t);
  i === void 0 && (i = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, Je.set(t, i));
  let n = i.stringsArray.get(e.strings);
  if (n !== void 0)
    return n;
  const o = e.strings.join(be);
  if (n = i.keyString.get(o), n === void 0) {
    const a = e.getTemplateElement();
    pt && window.ShadyCSS.prepareTemplateDom(a, r), n = new Xi(e, a), i.keyString.set(o, n);
  }
  return i.stringsArray.set(e.strings, n), n;
}, Hn = ["html", "svg"], Nn = (r) => {
  Hn.forEach((e) => {
    const t = Je.get(tn(e, r));
    t !== void 0 && t.keyString.forEach((i) => {
      const { element: { content: n } } = i, o = /* @__PURE__ */ new Set();
      Array.from(n.querySelectorAll("style")).forEach((a) => {
        o.add(a);
      }), Zi(i, o);
    });
  });
}, nn = /* @__PURE__ */ new Set(), Vn = (r, e, t) => {
  nn.add(r);
  const i = t ? t.element : document.createElement("template"), n = e.querySelectorAll("style"), { length: o } = n;
  if (o === 0) {
    window.ShadyCSS.prepareTemplateStyles(i, r);
    return;
  }
  const a = document.createElement("style");
  for (let p = 0; p < o; p++) {
    const m = n[p];
    m.parentNode.removeChild(m), a.textContent += m.textContent;
  }
  Nn(r);
  const s = i.content;
  t ? Ln(t, a, s.firstChild) : s.insertBefore(a, s.firstChild), window.ShadyCSS.prepareTemplateStyles(i, r);
  const d = s.querySelector("style");
  if (window.ShadyCSS.nativeShadow && d !== null)
    e.insertBefore(d.cloneNode(!0), e.firstChild);
  else if (t) {
    s.insertBefore(a, s.firstChild);
    const p = /* @__PURE__ */ new Set();
    p.add(a), Zi(t, p);
  }
}, Un = (r, e, t) => {
  if (!t || typeof t != "object" || !t.scopeName)
    throw new Error("The `scopeName` option is required.");
  const i = t.scopeName, n = Ve.has(e), o = pt && e.nodeType === 11 && !!e.host, a = o && !nn.has(i), s = a ? document.createDocumentFragment() : e;
  if (Pn(r, s, Object.assign({ templateFactory: Bn(i) }, t)), a) {
    const d = Ve.get(s);
    Ve.delete(s);
    const p = d.value instanceof It ? d.value.template : void 0;
    Vn(i, s, p), Yt(e, e.firstChild), e.appendChild(s), Ve.set(e, d);
  }
  !n && o && window.ShadyCSS.styleElement(e.host);
};
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
var rn;
window.JSCompiler_renameProperty = (r, e) => r;
const Rt = {
  toAttribute(r, e) {
    switch (e) {
      case Boolean:
        return r ? "" : null;
      case Object:
      case Array:
        return r == null ? r : JSON.stringify(r);
    }
    return r;
  },
  fromAttribute(r, e) {
    switch (e) {
      case Boolean:
        return r !== null;
      case Number:
        return r === null ? null : Number(r);
      case Object:
      case Array:
        return JSON.parse(r);
    }
    return r;
  }
}, on = (r, e) => e !== r && (e === e || r === r), yt = {
  attribute: !0,
  type: String,
  converter: Rt,
  reflect: !1,
  hasChanged: on
}, _t = 1, ui = 4, fi = 8, gi = 16, Lt = "finalized";
class an extends HTMLElement {
  constructor() {
    super(), this.initialize();
  }
  /**
   * Returns a list of attributes corresponding to the registered properties.
   * @nocollapse
   */
  static get observedAttributes() {
    this.finalize();
    const e = [];
    return this._classProperties.forEach((t, i) => {
      const n = this._attributeNameForProperty(i, t);
      n !== void 0 && (this._attributeToPropertyMap.set(n, i), e.push(n));
    }), e;
  }
  /**
   * Ensures the private `_classProperties` property metadata is created.
   * In addition to `finalize` this is also called in `createProperty` to
   * ensure the `@property` decorator can add property metadata.
   */
  /** @nocollapse */
  static _ensureClassProperties() {
    if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
      this._classProperties = /* @__PURE__ */ new Map();
      const e = Object.getPrototypeOf(this)._classProperties;
      e !== void 0 && e.forEach((t, i) => this._classProperties.set(i, t));
    }
  }
  /**
   * Creates a property accessor on the element prototype if one does not exist
   * and stores a PropertyDeclaration for the property with the given options.
   * The property setter calls the property's `hasChanged` property option
   * or uses a strict identity check to determine whether or not to request
   * an update.
   *
   * This method may be overridden to customize properties; however,
   * when doing so, it's important to call `super.createProperty` to ensure
   * the property is setup correctly. This method calls
   * `getPropertyDescriptor` internally to get a descriptor to install.
   * To customize what properties do when they are get or set, override
   * `getPropertyDescriptor`. To customize the options for a property,
   * implement `createProperty` like this:
   *
   * static createProperty(name, options) {
   *   options = Object.assign(options, {myOption: true});
   *   super.createProperty(name, options);
   * }
   *
   * @nocollapse
   */
  static createProperty(e, t = yt) {
    if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e))
      return;
    const i = typeof e == "symbol" ? Symbol() : `__${e}`, n = this.getPropertyDescriptor(e, i, t);
    n !== void 0 && Object.defineProperty(this.prototype, e, n);
  }
  /**
   * Returns a property descriptor to be defined on the given named property.
   * If no descriptor is returned, the property will not become an accessor.
   * For example,
   *
   *   class MyElement extends LitElement {
   *     static getPropertyDescriptor(name, key, options) {
   *       const defaultDescriptor =
   *           super.getPropertyDescriptor(name, key, options);
   *       const setter = defaultDescriptor.set;
   *       return {
   *         get: defaultDescriptor.get,
   *         set(value) {
   *           setter.call(this, value);
   *           // custom action.
   *         },
   *         configurable: true,
   *         enumerable: true
   *       }
   *     }
   *   }
   *
   * @nocollapse
   */
  static getPropertyDescriptor(e, t, i) {
    return {
      // tslint:disable-next-line:no-any no symbol in index
      get() {
        return this[t];
      },
      set(n) {
        const o = this[e];
        this[t] = n, this.requestUpdateInternal(e, o, i);
      },
      configurable: !0,
      enumerable: !0
    };
  }
  /**
   * Returns the property options associated with the given property.
   * These options are defined with a PropertyDeclaration via the `properties`
   * object or the `@property` decorator and are registered in
   * `createProperty(...)`.
   *
   * Note, this method should be considered "final" and not overridden. To
   * customize the options for a given property, override `createProperty`.
   *
   * @nocollapse
   * @final
   */
  static getPropertyOptions(e) {
    return this._classProperties && this._classProperties.get(e) || yt;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */
  static finalize() {
    const e = Object.getPrototypeOf(this);
    if (e.hasOwnProperty(Lt) || e.finalize(), this[Lt] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const t = this.properties, i = [
        ...Object.getOwnPropertyNames(t),
        ...typeof Object.getOwnPropertySymbols == "function" ? Object.getOwnPropertySymbols(t) : []
      ];
      for (const n of i)
        this.createProperty(n, t[n]);
    }
  }
  /**
   * Returns the property name for the given attribute `name`.
   * @nocollapse
   */
  static _attributeNameForProperty(e, t) {
    const i = t.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  /**
   * Returns true if a property should request an update.
   * Called when a property value is set and uses the `hasChanged`
   * option for the property if present or a strict identity check.
   * @nocollapse
   */
  static _valueHasChanged(e, t, i = on) {
    return i(e, t);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(e, t) {
    const i = t.type, n = t.converter || Rt, o = typeof n == "function" ? n : n.fromAttribute;
    return o ? o(e, i) : e;
  }
  /**
   * Returns the attribute value for the given property value. If this
   * returns undefined, the property will *not* be reflected to an attribute.
   * If this returns null, the attribute will be removed, otherwise the
   * attribute will be set to the value.
   * This uses the property's `reflect` and `type.toAttribute` property options.
   * @nocollapse
   */
  static _propertyValueToAttribute(e, t) {
    if (t.reflect === void 0)
      return;
    const i = t.type, n = t.converter;
    return (n && n.toAttribute || Rt.toAttribute)(e, i);
  }
  /**
   * Performs element initialization. By default captures any pre-set values for
   * registered properties.
   */
  initialize() {
    this._updateState = 0, this._updatePromise = new Promise((e) => this._enableUpdatingResolver = e), this._changedProperties = /* @__PURE__ */ new Map(), this._saveInstanceProperties(), this.requestUpdateInternal();
  }
  /**
   * Fixes any properties set on the instance before upgrade time.
   * Otherwise these would shadow the accessor and break these properties.
   * The properties are stored in a Map which is played back after the
   * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
   * (<=41), properties created for native platform properties like (`id` or
   * `name`) may not have default values set in the element constructor. On
   * these browsers native properties appear on instances and therefore their
   * default value will overwrite any element default (e.g. if the element sets
   * this.id = 'id' in the constructor, the 'id' will become '' since this is
   * the native platform default).
   */
  _saveInstanceProperties() {
    this.constructor._classProperties.forEach((e, t) => {
      if (this.hasOwnProperty(t)) {
        const i = this[t];
        delete this[t], this._instanceProperties || (this._instanceProperties = /* @__PURE__ */ new Map()), this._instanceProperties.set(t, i);
      }
    });
  }
  /**
   * Applies previously saved instance properties.
   */
  _applyInstanceProperties() {
    this._instanceProperties.forEach((e, t) => this[t] = e), this._instanceProperties = void 0;
  }
  connectedCallback() {
    this.enableUpdating();
  }
  enableUpdating() {
    this._enableUpdatingResolver !== void 0 && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0);
  }
  /**
   * Allows for `super.disconnectedCallback()` in extensions while
   * reserving the possibility of making non-breaking feature additions
   * when disconnecting at some point in the future.
   */
  disconnectedCallback() {
  }
  /**
   * Synchronizes property values when attributes change.
   */
  attributeChangedCallback(e, t, i) {
    t !== i && this._attributeToProperty(e, i);
  }
  _propertyToAttribute(e, t, i = yt) {
    const n = this.constructor, o = n._attributeNameForProperty(e, i);
    if (o !== void 0) {
      const a = n._propertyValueToAttribute(t, i);
      if (a === void 0)
        return;
      this._updateState = this._updateState | fi, a == null ? this.removeAttribute(o) : this.setAttribute(o, a), this._updateState = this._updateState & -9;
    }
  }
  _attributeToProperty(e, t) {
    if (this._updateState & fi)
      return;
    const i = this.constructor, n = i._attributeToPropertyMap.get(e);
    if (n !== void 0) {
      const o = i.getPropertyOptions(n);
      this._updateState = this._updateState | gi, this[n] = // tslint:disable-next-line:no-any
      i._propertyValueFromAttribute(t, o), this._updateState = this._updateState & -17;
    }
  }
  /**
   * This protected version of `requestUpdate` does not access or return the
   * `updateComplete` promise. This promise can be overridden and is therefore
   * not free to access.
   */
  requestUpdateInternal(e, t, i) {
    let n = !0;
    if (e !== void 0) {
      const o = this.constructor;
      i = i || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), i.reflect === !0 && !(this._updateState & gi) && (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(e, i))) : n = !1;
    }
    !this._hasRequestedUpdate && n && (this._updatePromise = this._enqueueUpdate());
  }
  /**
   * Requests an update which is processed asynchronously. This should
   * be called when an element should update based on some state not triggered
   * by setting a property. In this case, pass no arguments. It should also be
   * called when manually implementing a property setter. In this case, pass the
   * property `name` and `oldValue` to ensure that any configured property
   * options are honored. Returns the `updateComplete` Promise which is resolved
   * when the update completes.
   *
   * @param name {PropertyKey} (optional) name of requesting property
   * @param oldValue {any} (optional) old value of requesting property
   * @returns {Promise} A Promise that is resolved when the update completes.
   */
  requestUpdate(e, t) {
    return this.requestUpdateInternal(e, t), this.updateComplete;
  }
  /**
   * Sets up the element to asynchronously update.
   */
  async _enqueueUpdate() {
    this._updateState = this._updateState | ui;
    try {
      await this._updatePromise;
    } catch {
    }
    const e = this.performUpdate();
    return e != null && await e, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & ui;
  }
  get hasUpdated() {
    return this._updateState & _t;
  }
  /**
   * Performs an element update. Note, if an exception is thrown during the
   * update, `firstUpdated` and `updated` will not be called.
   *
   * You can override this method to change the timing of updates. If this
   * method is overridden, `super.performUpdate()` must be called.
   *
   * For instance, to schedule updates to occur just before the next frame:
   *
   * ```
   * protected async performUpdate(): Promise<unknown> {
   *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
   *   super.performUpdate();
   * }
   * ```
   */
  performUpdate() {
    if (!this._hasRequestedUpdate)
      return;
    this._instanceProperties && this._applyInstanceProperties();
    let e = !1;
    const t = this._changedProperties;
    try {
      e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated();
    } catch (i) {
      throw e = !1, this._markUpdated(), i;
    }
    e && (this._updateState & _t || (this._updateState = this._updateState | _t, this.firstUpdated(t)), this.updated(t));
  }
  _markUpdated() {
    this._changedProperties = /* @__PURE__ */ new Map(), this._updateState = this._updateState & -5;
  }
  /**
   * Returns a Promise that resolves when the element has completed updating.
   * The Promise value is a boolean that is `true` if the element completed the
   * update without triggering another update. The Promise result is `false` if
   * a property was set inside `updated()`. If the Promise is rejected, an
   * exception was thrown during the update.
   *
   * To await additional asynchronous work, override the `_getUpdateComplete`
   * method. For example, it is sometimes useful to await a rendered element
   * before fulfilling this Promise. To do this, first await
   * `super._getUpdateComplete()`, then any subsequent state.
   *
   * @returns {Promise} The Promise returns a boolean that indicates if the
   * update resolved without triggering another update.
   */
  get updateComplete() {
    return this._getUpdateComplete();
  }
  /**
   * Override point for the `updateComplete` promise.
   *
   * It is not safe to override the `updateComplete` getter directly due to a
   * limitation in TypeScript which means it is not possible to call a
   * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
   * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
   * This method should be overridden instead. For example:
   *
   *   class MyElement extends LitElement {
   *     async _getUpdateComplete() {
   *       await super._getUpdateComplete();
   *       await this._myChild.updateComplete;
   *     }
   *   }
   * @deprecated Override `getUpdateComplete()` instead for forward
   *     compatibility with `lit-element` 3.0 / `@lit/reactive-element`.
   */
  _getUpdateComplete() {
    return this.getUpdateComplete();
  }
  /**
   * Override point for the `updateComplete` promise.
   *
   * It is not safe to override the `updateComplete` getter directly due to a
   * limitation in TypeScript which means it is not possible to call a
   * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
   * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
   * This method should be overridden instead. For example:
   *
   *   class MyElement extends LitElement {
   *     async getUpdateComplete() {
   *       await super.getUpdateComplete();
   *       await this._myChild.updateComplete;
   *     }
   *   }
   */
  getUpdateComplete() {
    return this._updatePromise;
  }
  /**
   * Controls whether or not `update` should be called when the element requests
   * an update. By default, this method always returns `true`, but this can be
   * customized to control when to update.
   *
   * @param _changedProperties Map of changed properties with old values
   */
  shouldUpdate(e) {
    return !0;
  }
  /**
   * Updates the element. This method reflects property values to attributes.
   * It can be overridden to render and keep updated element DOM.
   * Setting properties inside this method will *not* trigger
   * another update.
   *
   * @param _changedProperties Map of changed properties with old values
   */
  update(e) {
    this._reflectingProperties !== void 0 && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach((t, i) => this._propertyToAttribute(i, this[i], t)), this._reflectingProperties = void 0), this._markUpdated();
  }
  /**
   * Invoked whenever the element is updated. Implement to perform
   * post-updating tasks via DOM APIs, for example, focusing an element.
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   */
  updated(e) {
  }
  /**
   * Invoked when the element is first updated. Implement to perform one time
   * work on the element after update.
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   */
  firstUpdated(e) {
  }
}
rn = Lt;
an[rn] = !0;
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
const Gn = (r, e) => (window.customElements.define(r, e), e), qn = (r, e) => {
  const { kind: t, elements: i } = e;
  return {
    kind: t,
    elements: i,
    // This callback is called once the class is otherwise fully defined
    finisher(n) {
      window.customElements.define(r, n);
    }
  };
}, V = (r) => (e) => typeof e == "function" ? Gn(r, e) : qn(r, e), jn = (r, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), { finisher(t) {
  t.createProperty(e.key, r);
} }) : {
  kind: "field",
  key: Symbol(),
  placement: "own",
  descriptor: {},
  // When @babel/plugin-proposal-decorators implements initializers,
  // do this instead of the initializer below. See:
  // https://github.com/babel/babel/issues/9260 extras: [
  //   {
  //     kind: 'initializer',
  //     placement: 'own',
  //     initializer: descriptor.initializer,
  //   }
  // ],
  initializer() {
    typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
  },
  finisher(t) {
    t.createProperty(e.key, r);
  }
}, Wn = (r, e, t) => {
  e.constructor.createProperty(t, r);
};
function c(r) {
  return (e, t) => t !== void 0 ? Wn(r, e, t) : jn(r, e);
}
function Xn(r) {
  return c({ attribute: !1, hasChanged: void 0 });
}
const _ = (r) => Xn();
function w(r, e) {
  return (t, i) => {
    const n = {
      get() {
        return this.renderRoot.querySelector(r);
      },
      enumerable: !0,
      configurable: !0
    };
    return i !== void 0 ? ei(n, t, i) : ti(n, t);
  };
}
function bt(r) {
  return (e, t) => {
    const i = {
      async get() {
        return await this.updateComplete, this.renderRoot.querySelector(r);
      },
      enumerable: !0,
      configurable: !0
    };
    return t !== void 0 ? ei(i, e, t) : ti(i, e);
  };
}
const ei = (r, e, t) => {
  Object.defineProperty(e, t, r);
}, ti = (r, e) => ({
  kind: "method",
  placement: "prototype",
  key: e.key,
  descriptor: r
}), Yn = (r, e) => Object.assign(Object.assign({}, e), { finisher(t) {
  Object.assign(t.prototype[e.key], r);
} }), Zn = (
  // tslint:disable-next-line:no-any legacy decorator
  (r, e, t) => {
    Object.assign(e[t], r);
  }
);
function De(r) {
  return (e, t) => t !== void 0 ? Zn(r, e, t) : Yn(r, e);
}
const bi = Element.prototype, Kn = bi.msMatchesSelector || bi.webkitMatchesSelector;
function ii(r = "", e = !1, t = "") {
  return (i, n) => {
    const o = {
      get() {
        const a = `slot${r ? `[name=${r}]` : ":not([name])"}`, s = this.renderRoot.querySelector(a);
        let d = s && s.assignedNodes({ flatten: e });
        return d && t && (d = d.filter((p) => p.nodeType === Node.ELEMENT_NODE && // tslint:disable-next-line:no-any testing existence on older browsers
        (p.matches ? p.matches(t) : Kn.call(p, t)))), d;
      },
      enumerable: !0,
      configurable: !0
    };
    return n !== void 0 ? ei(o, i, n) : ti(o, i);
  };
}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Ot = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ni = Symbol();
class ri {
  constructor(e, t) {
    if (t !== ni)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
    return this._styleSheet === void 0 && (Ot ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const sn = (r) => new ri(String(r), ni), Qn = (r) => {
  if (r instanceof ri)
    return r.cssText;
  if (typeof r == "number")
    return r;
  throw new Error(`Value passed to 'css' function must be a 'css' function result: ${r}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
}, W = (r, ...e) => {
  const t = e.reduce((i, n, o) => i + Qn(n) + r[o + 1], r[0]);
  return new ri(t, ni);
};
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
(window.litElementVersions || (window.litElementVersions = [])).push("2.5.1");
const xi = {};
class me extends an {
  /**
   * Return the array of styles to apply to the element.
   * Override this method to integrate into a style management system.
   *
   * @nocollapse
   */
  static getStyles() {
    return this.styles;
  }
  /** @nocollapse */
  static _getUniqueStyles() {
    if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this)))
      return;
    const e = this.getStyles();
    if (Array.isArray(e)) {
      const t = (o, a) => o.reduceRight((s, d) => (
        // Note: On IE set.add() does not return the set
        Array.isArray(d) ? t(d, s) : (s.add(d), s)
      ), a), i = t(e, /* @__PURE__ */ new Set()), n = [];
      i.forEach((o) => n.unshift(o)), this._styles = n;
    } else
      this._styles = e === void 0 ? [] : [e];
    this._styles = this._styles.map((t) => {
      if (t instanceof CSSStyleSheet && !Ot) {
        const i = Array.prototype.slice.call(t.cssRules).reduce((n, o) => n + o.cssText, "");
        return sn(i);
      }
      return t;
    });
  }
  /**
   * Performs element initialization. By default this calls
   * [[`createRenderRoot`]] to create the element [[`renderRoot`]] node and
   * captures any pre-set values for registered properties.
   */
  initialize() {
    super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles();
  }
  /**
   * Returns the node into which the element should render and by default
   * creates and returns an open shadowRoot. Implement to customize where the
   * element's DOM is rendered. For example, to render into the element's
   * childNodes, return `this`.
   * @returns {Element|DocumentFragment} Returns a node into which to render.
   */
  createRenderRoot() {
    return this.attachShadow(this.constructor.shadowRootOptions);
  }
  /**
   * Applies styling to the element shadowRoot using the [[`styles`]]
   * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
   * available and will fallback otherwise. When Shadow DOM is polyfilled,
   * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
   * is available but `adoptedStyleSheets` is not, styles are appended to the
   * end of the `shadowRoot` to [mimic spec
   * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
   */
  adoptStyles() {
    const e = this.constructor._styles;
    e.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((t) => t.cssText), this.localName) : Ot ? this.renderRoot.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
  }
  connectedCallback() {
    super.connectedCallback(), this.hasUpdated && window.ShadyCSS !== void 0 && window.ShadyCSS.styleElement(this);
  }
  /**
   * Updates the element. This method reflects property values to attributes
   * and calls `render` to render DOM via lit-html. Setting properties inside
   * this method will *not* trigger another update.
   * @param _changedProperties Map of changed properties with old values
   */
  update(e) {
    const t = this.render();
    super.update(e), t !== xi && this.constructor.render(t, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((i) => {
      const n = document.createElement("style");
      n.textContent = i.cssText, this.renderRoot.appendChild(n);
    }));
  }
  /**
   * Invoked on each update to perform rendering tasks. This method may return
   * any value renderable by lit-html's `NodePart` - typically a
   * `TemplateResult`. Setting properties inside this method will *not* trigger
   * the element to update.
   */
  render() {
    return xi;
  }
}
me.finalized = !0;
me.render = Un;
me.shadowRootOptions = { mode: "open" };
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
const vi = /* @__PURE__ */ new WeakMap(), Jn = ze((r) => (e) => {
  if (!(e instanceof Te))
    throw new Error("unsafeHTML can only be used in text bindings");
  const t = vi.get(e);
  if (t !== void 0 && et(r) && r === t.value && e.value === t.fragment)
    return;
  const i = document.createElement("template");
  i.innerHTML = r;
  const n = document.importNode(i.content, !0);
  e.setValue(n), vi.set(e, { value: r, fragment: n });
});
function ln() {
  return {
    async: !1,
    baseUrl: null,
    breaks: !1,
    extensions: null,
    gfm: !0,
    headerIds: !0,
    headerPrefix: "",
    highlight: null,
    hooks: null,
    langPrefix: "language-",
    mangle: !0,
    pedantic: !1,
    renderer: null,
    sanitize: !1,
    sanitizer: null,
    silent: !1,
    smartypants: !1,
    tokenizer: null,
    walkTokens: null,
    xhtml: !1
  };
}
let Pe = ln();
function er(r) {
  Pe = r;
}
const dn = /[&<>"']/, tr = new RegExp(dn.source, "g"), cn = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, ir = new RegExp(cn.source, "g"), nr = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, yi = (r) => nr[r];
function j(r, e) {
  if (e) {
    if (dn.test(r))
      return r.replace(tr, yi);
  } else if (cn.test(r))
    return r.replace(ir, yi);
  return r;
}
const rr = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function pn(r) {
  return r.replace(rr, (e, t) => (t = t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
const or = /(^|[^\[])\^/g;
function R(r, e) {
  r = typeof r == "string" ? r : r.source, e = e || "";
  const t = {
    replace: (i, n) => (n = n.source || n, n = n.replace(or, "$1"), r = r.replace(i, n), t),
    getRegex: () => new RegExp(r, e)
  };
  return t;
}
const ar = /[^\w:]/g, sr = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function _i(r, e, t) {
  if (r) {
    let i;
    try {
      i = decodeURIComponent(pn(t)).replace(ar, "").toLowerCase();
    } catch {
      return null;
    }
    if (i.indexOf("javascript:") === 0 || i.indexOf("vbscript:") === 0 || i.indexOf("data:") === 0)
      return null;
  }
  e && !sr.test(t) && (t = pr(e, t));
  try {
    t = encodeURI(t).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return t;
}
const rt = {}, lr = /^[^:]+:\/*[^/]*$/, dr = /^([^:]+:)[\s\S]*$/, cr = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function pr(r, e) {
  rt[" " + r] || (lr.test(r) ? rt[" " + r] = r + "/" : rt[" " + r] = ct(r, "/", !0)), r = rt[" " + r];
  const t = r.indexOf(":") === -1;
  return e.substring(0, 2) === "//" ? t ? e : r.replace(dr, "$1") + e : e.charAt(0) === "/" ? t ? e : r.replace(cr, "$1") + e : r + e;
}
const ht = { exec: function() {
} };
function wi(r, e) {
  const t = r.replace(/\|/g, (o, a, s) => {
    let d = !1, p = a;
    for (; --p >= 0 && s[p] === "\\"; ) d = !d;
    return d ? "|" : " |";
  }), i = t.split(/ \|/);
  let n = 0;
  if (i[0].trim() || i.shift(), i.length > 0 && !i[i.length - 1].trim() && i.pop(), i.length > e)
    i.splice(e);
  else
    for (; i.length < e; ) i.push("");
  for (; n < i.length; n++)
    i[n] = i[n].trim().replace(/\\\|/g, "|");
  return i;
}
function ct(r, e, t) {
  const i = r.length;
  if (i === 0)
    return "";
  let n = 0;
  for (; n < i; ) {
    const o = r.charAt(i - n - 1);
    if (o === e && !t)
      n++;
    else if (o !== e && t)
      n++;
    else
      break;
  }
  return r.slice(0, i - n);
}
function hr(r, e) {
  if (r.indexOf(e[1]) === -1)
    return -1;
  const t = r.length;
  let i = 0, n = 0;
  for (; n < t; n++)
    if (r[n] === "\\")
      n++;
    else if (r[n] === e[0])
      i++;
    else if (r[n] === e[1] && (i--, i < 0))
      return n;
  return -1;
}
function mr(r) {
  r && r.sanitize && !r.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
}
function ki(r, e) {
  if (e < 1)
    return "";
  let t = "";
  for (; e > 1; )
    e & 1 && (t += r), e >>= 1, r += r;
  return t + r;
}
function Ei(r, e, t, i) {
  const n = e.href, o = e.title ? j(e.title) : null, a = r[1].replace(/\\([\[\]])/g, "$1");
  if (r[0].charAt(0) !== "!") {
    i.state.inLink = !0;
    const s = {
      type: "link",
      raw: t,
      href: n,
      title: o,
      text: a,
      tokens: i.inlineTokens(a)
    };
    return i.state.inLink = !1, s;
  }
  return {
    type: "image",
    raw: t,
    href: n,
    title: o,
    text: j(a)
  };
}
function ur(r, e) {
  const t = r.match(/^(\s+)(?:```)/);
  if (t === null)
    return e;
  const i = t[1];
  return e.split(`
`).map((n) => {
    const o = n.match(/^\s+/);
    if (o === null)
      return n;
    const [a] = o;
    return a.length >= i.length ? n.slice(i.length) : n;
  }).join(`
`);
}
class oi {
  constructor(e) {
    this.options = e || Pe;
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0)
      return {
        type: "space",
        raw: t[0]
      };
  }
  code(e) {
    const t = this.rules.block.code.exec(e);
    if (t) {
      const i = t[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: t[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? i : ct(i, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const i = t[0], n = ur(i, t[3] || "");
      return {
        type: "code",
        raw: i,
        lang: t[2] ? t[2].trim().replace(this.rules.inline._escapes, "$1") : t[2],
        text: n
      };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let i = t[2].trim();
      if (/#$/.test(i)) {
        const n = ct(i, "#");
        (this.options.pedantic || !n || / $/.test(n)) && (i = n.trim());
      }
      return {
        type: "heading",
        raw: t[0],
        depth: t[1].length,
        text: i,
        tokens: this.lexer.inline(i)
      };
    }
  }
  hr(e) {
    const t = this.rules.block.hr.exec(e);
    if (t)
      return {
        type: "hr",
        raw: t[0]
      };
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      const i = t[0].replace(/^ *>[ \t]?/gm, ""), n = this.lexer.state.top;
      this.lexer.state.top = !0;
      const o = this.lexer.blockTokens(i);
      return this.lexer.state.top = n, {
        type: "blockquote",
        raw: t[0],
        tokens: o,
        text: i
      };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let i, n, o, a, s, d, p, m, h, g, f, C, A = t[1].trim();
      const P = A.length > 1, E = {
        type: "list",
        raw: "",
        ordered: P,
        start: P ? +A.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      A = P ? `\\d{1,9}\\${A.slice(-1)}` : `\\${A}`, this.options.pedantic && (A = P ? A : "[*+-]");
      const S = new RegExp(`^( {0,3}${A})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      for (; e && (C = !1, !(!(t = S.exec(e)) || this.rules.block.hr.test(e))); ) {
        if (i = t[0], e = e.substring(i.length), m = t[2].split(`
`, 1)[0].replace(/^\t+/, (re) => " ".repeat(3 * re.length)), h = e.split(`
`, 1)[0], this.options.pedantic ? (a = 2, f = m.trimLeft()) : (a = t[2].search(/[^ ]/), a = a > 4 ? 1 : a, f = m.slice(a), a += t[1].length), d = !1, !m && /^ *$/.test(h) && (i += h + `
`, e = e.substring(h.length + 1), C = !0), !C) {
          const re = new RegExp(`^ {0,${Math.min(3, a - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), ce = new RegExp(`^ {0,${Math.min(3, a - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), pe = new RegExp(`^ {0,${Math.min(3, a - 1)}}(?:\`\`\`|~~~)`), je = new RegExp(`^ {0,${Math.min(3, a - 1)}}#`);
          for (; e && (g = e.split(`
`, 1)[0], h = g, this.options.pedantic && (h = h.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !(pe.test(h) || je.test(h) || re.test(h) || ce.test(e))); ) {
            if (h.search(/[^ ]/) >= a || !h.trim())
              f += `
` + h.slice(a);
            else {
              if (d || m.search(/[^ ]/) >= 4 || pe.test(m) || je.test(m) || ce.test(m))
                break;
              f += `
` + h;
            }
            !d && !h.trim() && (d = !0), i += g + `
`, e = e.substring(g.length + 1), m = h.slice(a);
          }
        }
        E.loose || (p ? E.loose = !0 : /\n *\n *$/.test(i) && (p = !0)), this.options.gfm && (n = /^\[[ xX]\] /.exec(f), n && (o = n[0] !== "[ ] ", f = f.replace(/^\[[ xX]\] +/, ""))), E.items.push({
          type: "list_item",
          raw: i,
          task: !!n,
          checked: o,
          loose: !1,
          text: f
        }), E.raw += i;
      }
      E.items[E.items.length - 1].raw = i.trimRight(), E.items[E.items.length - 1].text = f.trimRight(), E.raw = E.raw.trimRight();
      const N = E.items.length;
      for (s = 0; s < N; s++)
        if (this.lexer.state.top = !1, E.items[s].tokens = this.lexer.blockTokens(E.items[s].text, []), !E.loose) {
          const re = E.items[s].tokens.filter((pe) => pe.type === "space"), ce = re.length > 0 && re.some((pe) => /\n.*\n/.test(pe.raw));
          E.loose = ce;
        }
      if (E.loose)
        for (s = 0; s < N; s++)
          E.items[s].loose = !0;
      return E;
    }
  }
  html(e) {
    const t = this.rules.block.html.exec(e);
    if (t) {
      const i = {
        type: "html",
        raw: t[0],
        pre: !this.options.sanitizer && (t[1] === "pre" || t[1] === "script" || t[1] === "style"),
        text: t[0]
      };
      if (this.options.sanitize) {
        const n = this.options.sanitizer ? this.options.sanitizer(t[0]) : j(t[0]);
        i.type = "paragraph", i.text = n, i.tokens = this.lexer.inline(n);
      }
      return i;
    }
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const i = t[1].toLowerCase().replace(/\s+/g, " "), n = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "", o = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline._escapes, "$1") : t[3];
      return {
        type: "def",
        tag: i,
        raw: t[0],
        href: n,
        title: o
      };
    }
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (t) {
      const i = {
        type: "table",
        header: wi(t[1]).map((n) => ({ text: n })),
        align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows: t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : []
      };
      if (i.header.length === i.align.length) {
        i.raw = t[0];
        let n = i.align.length, o, a, s, d;
        for (o = 0; o < n; o++)
          /^ *-+: *$/.test(i.align[o]) ? i.align[o] = "right" : /^ *:-+: *$/.test(i.align[o]) ? i.align[o] = "center" : /^ *:-+ *$/.test(i.align[o]) ? i.align[o] = "left" : i.align[o] = null;
        for (n = i.rows.length, o = 0; o < n; o++)
          i.rows[o] = wi(i.rows[o], i.header.length).map((p) => ({ text: p }));
        for (n = i.header.length, a = 0; a < n; a++)
          i.header[a].tokens = this.lexer.inline(i.header[a].text);
        for (n = i.rows.length, a = 0; a < n; a++)
          for (d = i.rows[a], s = 0; s < d.length; s++)
            d[s].tokens = this.lexer.inline(d[s].text);
        return i;
      }
    }
  }
  lheading(e) {
    const t = this.rules.block.lheading.exec(e);
    if (t)
      return {
        type: "heading",
        raw: t[0],
        depth: t[2].charAt(0) === "=" ? 1 : 2,
        text: t[1],
        tokens: this.lexer.inline(t[1])
      };
  }
  paragraph(e) {
    const t = this.rules.block.paragraph.exec(e);
    if (t) {
      const i = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return {
        type: "paragraph",
        raw: t[0],
        text: i,
        tokens: this.lexer.inline(i)
      };
    }
  }
  text(e) {
    const t = this.rules.block.text.exec(e);
    if (t)
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        tokens: this.lexer.inline(t[0])
      };
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t)
      return {
        type: "escape",
        raw: t[0],
        text: j(t[1])
      };
  }
  tag(e) {
    const t = this.rules.inline.tag.exec(e);
    if (t)
      return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
        type: this.options.sanitize ? "text" : "html",
        raw: t[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t[0]) : j(t[0]) : t[0]
      };
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const i = t[2].trim();
      if (!this.options.pedantic && /^</.test(i)) {
        if (!/>$/.test(i))
          return;
        const a = ct(i.slice(0, -1), "\\");
        if ((i.length - a.length) % 2 === 0)
          return;
      } else {
        const a = hr(t[2], "()");
        if (a > -1) {
          const d = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + a;
          t[2] = t[2].substring(0, a), t[0] = t[0].substring(0, d).trim(), t[3] = "";
        }
      }
      let n = t[2], o = "";
      if (this.options.pedantic) {
        const a = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);
        a && (n = a[1], o = a[3]);
      } else
        o = t[3] ? t[3].slice(1, -1) : "";
      return n = n.trim(), /^</.test(n) && (this.options.pedantic && !/>$/.test(i) ? n = n.slice(1) : n = n.slice(1, -1)), Ei(t, {
        href: n && n.replace(this.rules.inline._escapes, "$1"),
        title: o && o.replace(this.rules.inline._escapes, "$1")
      }, t[0], this.lexer);
    }
  }
  reflink(e, t) {
    let i;
    if ((i = this.rules.inline.reflink.exec(e)) || (i = this.rules.inline.nolink.exec(e))) {
      let n = (i[2] || i[1]).replace(/\s+/g, " ");
      if (n = t[n.toLowerCase()], !n) {
        const o = i[0].charAt(0);
        return {
          type: "text",
          raw: o,
          text: o
        };
      }
      return Ei(i, n, i[0], this.lexer);
    }
  }
  emStrong(e, t, i = "") {
    let n = this.rules.inline.emStrong.lDelim.exec(e);
    if (!n || n[3] && i.match(/[\p{L}\p{N}]/u)) return;
    const o = n[1] || n[2] || "";
    if (!o || o && (i === "" || this.rules.inline.punctuation.exec(i))) {
      const a = n[0].length - 1;
      let s, d, p = a, m = 0;
      const h = n[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      for (h.lastIndex = 0, t = t.slice(-1 * e.length + a); (n = h.exec(t)) != null; ) {
        if (s = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !s) continue;
        if (d = s.length, n[3] || n[4]) {
          p += d;
          continue;
        } else if ((n[5] || n[6]) && a % 3 && !((a + d) % 3)) {
          m += d;
          continue;
        }
        if (p -= d, p > 0) continue;
        d = Math.min(d, d + p + m);
        const g = e.slice(0, a + n.index + (n[0].length - s.length) + d);
        if (Math.min(a, d) % 2) {
          const C = g.slice(1, -1);
          return {
            type: "em",
            raw: g,
            text: C,
            tokens: this.lexer.inlineTokens(C)
          };
        }
        const f = g.slice(2, -2);
        return {
          type: "strong",
          raw: g,
          text: f,
          tokens: this.lexer.inlineTokens(f)
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let i = t[2].replace(/\n/g, " ");
      const n = /[^ ]/.test(i), o = /^ /.test(i) && / $/.test(i);
      return n && o && (i = i.substring(1, i.length - 1)), i = j(i, !0), {
        type: "codespan",
        raw: t[0],
        text: i
      };
    }
  }
  br(e) {
    const t = this.rules.inline.br.exec(e);
    if (t)
      return {
        type: "br",
        raw: t[0]
      };
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t)
      return {
        type: "del",
        raw: t[0],
        text: t[2],
        tokens: this.lexer.inlineTokens(t[2])
      };
  }
  autolink(e, t) {
    const i = this.rules.inline.autolink.exec(e);
    if (i) {
      let n, o;
      return i[2] === "@" ? (n = j(this.options.mangle ? t(i[1]) : i[1]), o = "mailto:" + n) : (n = j(i[1]), o = n), {
        type: "link",
        raw: i[0],
        text: n,
        href: o,
        tokens: [
          {
            type: "text",
            raw: n,
            text: n
          }
        ]
      };
    }
  }
  url(e, t) {
    let i;
    if (i = this.rules.inline.url.exec(e)) {
      let n, o;
      if (i[2] === "@")
        n = j(this.options.mangle ? t(i[0]) : i[0]), o = "mailto:" + n;
      else {
        let a;
        do
          a = i[0], i[0] = this.rules.inline._backpedal.exec(i[0])[0];
        while (a !== i[0]);
        n = j(i[0]), i[1] === "www." ? o = "http://" + i[0] : o = i[0];
      }
      return {
        type: "link",
        raw: i[0],
        text: n,
        href: o,
        tokens: [
          {
            type: "text",
            raw: n,
            text: n
          }
        ]
      };
    }
  }
  inlineText(e, t) {
    const i = this.rules.inline.text.exec(e);
    if (i) {
      let n;
      return this.lexer.state.inRawBlock ? n = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(i[0]) : j(i[0]) : i[0] : n = j(this.options.smartypants ? t(i[0]) : i[0]), {
        type: "text",
        raw: i[0],
        text: n
      };
    }
  }
}
const x = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
  def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: ht,
  lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
x._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
x._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
x.def = R(x.def).replace("label", x._label).replace("title", x._title).getRegex();
x.bullet = /(?:[*+-]|\d{1,9}[.)])/;
x.listItemStart = R(/^( *)(bull) */).replace("bull", x.bullet).getRegex();
x.list = R(x.list).replace(/bull/g, x.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + x.def.source + ")").getRegex();
x._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
x._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
x.html = R(x.html, "i").replace("comment", x._comment).replace("tag", x._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
x.paragraph = R(x._paragraph).replace("hr", x.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", x._tag).getRegex();
x.blockquote = R(x.blockquote).replace("paragraph", x.paragraph).getRegex();
x.normal = { ...x };
x.gfm = {
  ...x.normal,
  table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
  // Cells
};
x.gfm.table = R(x.gfm.table).replace("hr", x.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", x._tag).getRegex();
x.gfm.paragraph = R(x._paragraph).replace("hr", x.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", x.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", x._tag).getRegex();
x.pedantic = {
  ...x.normal,
  html: R(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", x._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: ht,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: R(x.normal._paragraph).replace("hr", x.hr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", x.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
};
const b = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: ht,
  tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
    //          () Skip orphan inside strong                                      () Consume to delim     (1) #***                (2) a***#, a***                             (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
    rDelimAst: /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
    // ^- Not allowed for _
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: ht,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};
b._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
b.punctuation = R(b.punctuation).replace(/punctuation/g, b._punctuation).getRegex();
b.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
b.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g;
b._comment = R(x._comment).replace("(?:-->|$)", "-->").getRegex();
b.emStrong.lDelim = R(b.emStrong.lDelim).replace(/punct/g, b._punctuation).getRegex();
b.emStrong.rDelimAst = R(b.emStrong.rDelimAst, "g").replace(/punct/g, b._punctuation).getRegex();
b.emStrong.rDelimUnd = R(b.emStrong.rDelimUnd, "g").replace(/punct/g, b._punctuation).getRegex();
b._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
b._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
b._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
b.autolink = R(b.autolink).replace("scheme", b._scheme).replace("email", b._email).getRegex();
b._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
b.tag = R(b.tag).replace("comment", b._comment).replace("attribute", b._attribute).getRegex();
b._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
b._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
b._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
b.link = R(b.link).replace("label", b._label).replace("href", b._href).replace("title", b._title).getRegex();
b.reflink = R(b.reflink).replace("label", b._label).replace("ref", x._label).getRegex();
b.nolink = R(b.nolink).replace("ref", x._label).getRegex();
b.reflinkSearch = R(b.reflinkSearch, "g").replace("reflink", b.reflink).replace("nolink", b.nolink).getRegex();
b.normal = { ...b };
b.pedantic = {
  ...b.normal,
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: R(/^!?\[(label)\]\((.*?)\)/).replace("label", b._label).getRegex(),
  reflink: R(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", b._label).getRegex()
};
b.gfm = {
  ...b.normal,
  escape: R(b.escape).replace("])", "~|])").getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
};
b.gfm.url = R(b.gfm.url, "i").replace("email", b.gfm._extended_email).getRegex();
b.breaks = {
  ...b.gfm,
  br: R(b.br).replace("{2,}", "*").getRegex(),
  text: R(b.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
};
function fr(r) {
  return r.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…");
}
function Ci(r) {
  let e = "", t, i;
  const n = r.length;
  for (t = 0; t < n; t++)
    i = r.charCodeAt(t), Math.random() > 0.5 && (i = "x" + i.toString(16)), e += "&#" + i + ";";
  return e;
}
class Ee {
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Pe, this.options.tokenizer = this.options.tokenizer || new oi(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      block: x.normal,
      inline: b.normal
    };
    this.options.pedantic ? (t.block = x.pedantic, t.inline = b.pedantic) : this.options.gfm && (t.block = x.gfm, this.options.breaks ? t.inline = b.breaks : t.inline = b.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: x,
      inline: b
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new Ee(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new Ee(t).inlineTokens(e);
  }
  /**
   * Preprocessing
   */
  lex(e) {
    e = e.replace(/\r\n|\r/g, `
`), this.blockTokens(e, this.tokens);
    let t;
    for (; t = this.inlineQueue.shift(); )
      this.inlineTokens(t.src, t.tokens);
    return this.tokens;
  }
  /**
   * Lexing
   */
  blockTokens(e, t = []) {
    this.options.pedantic ? e = e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e = e.replace(/^( *)(\t+)/gm, (s, d, p) => d + "    ".repeat(p.length));
    let i, n, o, a;
    for (; e; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((s) => (i = s.call({ lexer: this }, e, t)) ? (e = e.substring(i.raw.length), t.push(i), !0) : !1))) {
        if (i = this.tokenizer.space(e)) {
          e = e.substring(i.raw.length), i.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
` : t.push(i);
          continue;
        }
        if (i = this.tokenizer.code(e)) {
          e = e.substring(i.raw.length), n = t[t.length - 1], n && (n.type === "paragraph" || n.type === "text") ? (n.raw += `
` + i.raw, n.text += `
` + i.text, this.inlineQueue[this.inlineQueue.length - 1].src = n.text) : t.push(i);
          continue;
        }
        if (i = this.tokenizer.fences(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.heading(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.hr(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.blockquote(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.list(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.html(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.def(e)) {
          e = e.substring(i.raw.length), n = t[t.length - 1], n && (n.type === "paragraph" || n.type === "text") ? (n.raw += `
` + i.raw, n.text += `
` + i.raw, this.inlineQueue[this.inlineQueue.length - 1].src = n.text) : this.tokens.links[i.tag] || (this.tokens.links[i.tag] = {
            href: i.href,
            title: i.title
          });
          continue;
        }
        if (i = this.tokenizer.table(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.lheading(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (o = e, this.options.extensions && this.options.extensions.startBlock) {
          let s = 1 / 0;
          const d = e.slice(1);
          let p;
          this.options.extensions.startBlock.forEach(function(m) {
            p = m.call({ lexer: this }, d), typeof p == "number" && p >= 0 && (s = Math.min(s, p));
          }), s < 1 / 0 && s >= 0 && (o = e.substring(0, s + 1));
        }
        if (this.state.top && (i = this.tokenizer.paragraph(o))) {
          n = t[t.length - 1], a && n.type === "paragraph" ? (n.raw += `
` + i.raw, n.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = n.text) : t.push(i), a = o.length !== e.length, e = e.substring(i.raw.length);
          continue;
        }
        if (i = this.tokenizer.text(e)) {
          e = e.substring(i.raw.length), n = t[t.length - 1], n && n.type === "text" ? (n.raw += `
` + i.raw, n.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = n.text) : t.push(i);
          continue;
        }
        if (e) {
          const s = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(s);
            break;
          } else
            throw new Error(s);
        }
      }
    return this.state.top = !0, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(e, t = []) {
    let i, n, o, a = e, s, d, p;
    if (this.tokens.links) {
      const m = Object.keys(this.tokens.links);
      if (m.length > 0)
        for (; (s = this.tokenizer.rules.inline.reflinkSearch.exec(a)) != null; )
          m.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) && (a = a.slice(0, s.index) + "[" + ki("a", s[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (s = this.tokenizer.rules.inline.blockSkip.exec(a)) != null; )
      a = a.slice(0, s.index) + "[" + ki("a", s[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (s = this.tokenizer.rules.inline.escapedEmSt.exec(a)) != null; )
      a = a.slice(0, s.index + s[0].length - 2) + "++" + a.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex), this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
    for (; e; )
      if (d || (p = ""), d = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((m) => (i = m.call({ lexer: this }, e, t)) ? (e = e.substring(i.raw.length), t.push(i), !0) : !1))) {
        if (i = this.tokenizer.escape(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.tag(e)) {
          e = e.substring(i.raw.length), n = t[t.length - 1], n && i.type === "text" && n.type === "text" ? (n.raw += i.raw, n.text += i.text) : t.push(i);
          continue;
        }
        if (i = this.tokenizer.link(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.reflink(e, this.tokens.links)) {
          e = e.substring(i.raw.length), n = t[t.length - 1], n && i.type === "text" && n.type === "text" ? (n.raw += i.raw, n.text += i.text) : t.push(i);
          continue;
        }
        if (i = this.tokenizer.emStrong(e, a, p)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.codespan(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.br(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.del(e)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (i = this.tokenizer.autolink(e, Ci)) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (!this.state.inLink && (i = this.tokenizer.url(e, Ci))) {
          e = e.substring(i.raw.length), t.push(i);
          continue;
        }
        if (o = e, this.options.extensions && this.options.extensions.startInline) {
          let m = 1 / 0;
          const h = e.slice(1);
          let g;
          this.options.extensions.startInline.forEach(function(f) {
            g = f.call({ lexer: this }, h), typeof g == "number" && g >= 0 && (m = Math.min(m, g));
          }), m < 1 / 0 && m >= 0 && (o = e.substring(0, m + 1));
        }
        if (i = this.tokenizer.inlineText(o, fr)) {
          e = e.substring(i.raw.length), i.raw.slice(-1) !== "_" && (p = i.raw.slice(-1)), d = !0, n = t[t.length - 1], n && n.type === "text" ? (n.raw += i.raw, n.text += i.text) : t.push(i);
          continue;
        }
        if (e) {
          const m = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(m);
            break;
          } else
            throw new Error(m);
        }
      }
    return t;
  }
}
class ai {
  constructor(e) {
    this.options = e || Pe;
  }
  code(e, t, i) {
    const n = (t || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const o = this.options.highlight(e, n);
      o != null && o !== e && (i = !0, e = o);
    }
    return e = e.replace(/\n$/, "") + `
`, n ? '<pre><code class="' + this.options.langPrefix + j(n) + '">' + (i ? e : j(e, !0)) + `</code></pre>
` : "<pre><code>" + (i ? e : j(e, !0)) + `</code></pre>
`;
  }
  /**
   * @param {string} quote
   */
  blockquote(e) {
    return `<blockquote>
${e}</blockquote>
`;
  }
  html(e) {
    return e;
  }
  /**
   * @param {string} text
   * @param {string} level
   * @param {string} raw
   * @param {any} slugger
   */
  heading(e, t, i, n) {
    if (this.options.headerIds) {
      const o = this.options.headerPrefix + n.slug(i);
      return `<h${t} id="${o}">${e}</h${t}>
`;
    }
    return `<h${t}>${e}</h${t}>
`;
  }
  hr() {
    return this.options.xhtml ? `<hr/>
` : `<hr>
`;
  }
  list(e, t, i) {
    const n = t ? "ol" : "ul", o = t && i !== 1 ? ' start="' + i + '"' : "";
    return "<" + n + o + `>
` + e + "</" + n + `>
`;
  }
  /**
   * @param {string} text
   */
  listitem(e) {
    return `<li>${e}</li>
`;
  }
  checkbox(e) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  /**
   * @param {string} text
   */
  paragraph(e) {
    return `<p>${e}</p>
`;
  }
  /**
   * @param {string} header
   * @param {string} body
   */
  table(e, t) {
    return t && (t = `<tbody>${t}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + t + `</table>
`;
  }
  /**
   * @param {string} content
   */
  tablerow(e) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e, t) {
    const i = t.header ? "th" : "td";
    return (t.align ? `<${i} align="${t.align}">` : `<${i}>`) + e + `</${i}>
`;
  }
  /**
   * span level renderer
   * @param {string} text
   */
  strong(e) {
    return `<strong>${e}</strong>`;
  }
  /**
   * @param {string} text
   */
  em(e) {
    return `<em>${e}</em>`;
  }
  /**
   * @param {string} text
   */
  codespan(e) {
    return `<code>${e}</code>`;
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  /**
   * @param {string} text
   */
  del(e) {
    return `<del>${e}</del>`;
  }
  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  link(e, t, i) {
    if (e = _i(this.options.sanitize, this.options.baseUrl, e), e === null)
      return i;
    let n = '<a href="' + e + '"';
    return t && (n += ' title="' + t + '"'), n += ">" + i + "</a>", n;
  }
  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  image(e, t, i) {
    if (e = _i(this.options.sanitize, this.options.baseUrl, e), e === null)
      return i;
    let n = `<img src="${e}" alt="${i}"`;
    return t && (n += ` title="${t}"`), n += this.options.xhtml ? "/>" : ">", n;
  }
  text(e) {
    return e;
  }
}
class hn {
  // no need for block level renderers
  strong(e) {
    return e;
  }
  em(e) {
    return e;
  }
  codespan(e) {
    return e;
  }
  del(e) {
    return e;
  }
  html(e) {
    return e;
  }
  text(e) {
    return e;
  }
  link(e, t, i) {
    return "" + i;
  }
  image(e, t, i) {
    return "" + i;
  }
  br() {
    return "";
  }
}
class mn {
  constructor() {
    this.seen = {};
  }
  /**
   * @param {string} value
   */
  serialize(e) {
    return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  /**
   * Finds the next safe (unique) slug to use
   * @param {string} originalSlug
   * @param {boolean} isDryRun
   */
  getNextSafeSlug(e, t) {
    let i = e, n = 0;
    if (this.seen.hasOwnProperty(i)) {
      n = this.seen[e];
      do
        n++, i = e + "-" + n;
      while (this.seen.hasOwnProperty(i));
    }
    return t || (this.seen[e] = n, this.seen[i] = 0), i;
  }
  /**
   * Convert string to unique id
   * @param {object} [options]
   * @param {boolean} [options.dryrun] Generates the next unique slug without
   * updating the internal accumulator.
   */
  slug(e, t = {}) {
    const i = this.serialize(e);
    return this.getNextSafeSlug(i, t.dryrun);
  }
}
class Ce {
  constructor(e) {
    this.options = e || Pe, this.options.renderer = this.options.renderer || new ai(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new hn(), this.slugger = new mn();
  }
  /**
   * Static Parse Method
   */
  static parse(e, t) {
    return new Ce(t).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, t) {
    return new Ce(t).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, t = !0) {
    let i = "", n, o, a, s, d, p, m, h, g, f, C, A, P, E, S, N, re, ce, pe;
    const je = e.length;
    for (n = 0; n < je; n++) {
      if (f = e[n], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[f.type] && (pe = this.options.extensions.renderers[f.type].call({ parser: this }, f), pe !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(f.type))) {
        i += pe || "";
        continue;
      }
      switch (f.type) {
        case "space":
          continue;
        case "hr": {
          i += this.renderer.hr();
          continue;
        }
        case "heading": {
          i += this.renderer.heading(
            this.parseInline(f.tokens),
            f.depth,
            pn(this.parseInline(f.tokens, this.textRenderer)),
            this.slugger
          );
          continue;
        }
        case "code": {
          i += this.renderer.code(
            f.text,
            f.lang,
            f.escaped
          );
          continue;
        }
        case "table": {
          for (h = "", m = "", s = f.header.length, o = 0; o < s; o++)
            m += this.renderer.tablecell(
              this.parseInline(f.header[o].tokens),
              { header: !0, align: f.align[o] }
            );
          for (h += this.renderer.tablerow(m), g = "", s = f.rows.length, o = 0; o < s; o++) {
            for (p = f.rows[o], m = "", d = p.length, a = 0; a < d; a++)
              m += this.renderer.tablecell(
                this.parseInline(p[a].tokens),
                { header: !1, align: f.align[a] }
              );
            g += this.renderer.tablerow(m);
          }
          i += this.renderer.table(h, g);
          continue;
        }
        case "blockquote": {
          g = this.parse(f.tokens), i += this.renderer.blockquote(g);
          continue;
        }
        case "list": {
          for (C = f.ordered, A = f.start, P = f.loose, s = f.items.length, g = "", o = 0; o < s; o++)
            S = f.items[o], N = S.checked, re = S.task, E = "", S.task && (ce = this.renderer.checkbox(N), P ? S.tokens.length > 0 && S.tokens[0].type === "paragraph" ? (S.tokens[0].text = ce + " " + S.tokens[0].text, S.tokens[0].tokens && S.tokens[0].tokens.length > 0 && S.tokens[0].tokens[0].type === "text" && (S.tokens[0].tokens[0].text = ce + " " + S.tokens[0].tokens[0].text)) : S.tokens.unshift({
              type: "text",
              text: ce
            }) : E += ce), E += this.parse(S.tokens, P), g += this.renderer.listitem(E, re, N);
          i += this.renderer.list(g, C, A);
          continue;
        }
        case "html": {
          i += this.renderer.html(f.text);
          continue;
        }
        case "paragraph": {
          i += this.renderer.paragraph(this.parseInline(f.tokens));
          continue;
        }
        case "text": {
          for (g = f.tokens ? this.parseInline(f.tokens) : f.text; n + 1 < je && e[n + 1].type === "text"; )
            f = e[++n], g += `
` + (f.tokens ? this.parseInline(f.tokens) : f.text);
          i += t ? this.renderer.paragraph(g) : g;
          continue;
        }
        default: {
          const di = 'Token with "' + f.type + '" type was not found.';
          if (this.options.silent) {
            console.error(di);
            return;
          } else
            throw new Error(di);
        }
      }
    }
    return i;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(e, t) {
    t = t || this.renderer;
    let i = "", n, o, a;
    const s = e.length;
    for (n = 0; n < s; n++) {
      if (o = e[n], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[o.type] && (a = this.options.extensions.renderers[o.type].call({ parser: this }, o), a !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(o.type))) {
        i += a || "";
        continue;
      }
      switch (o.type) {
        case "escape": {
          i += t.text(o.text);
          break;
        }
        case "html": {
          i += t.html(o.text);
          break;
        }
        case "link": {
          i += t.link(o.href, o.title, this.parseInline(o.tokens, t));
          break;
        }
        case "image": {
          i += t.image(o.href, o.title, o.text);
          break;
        }
        case "strong": {
          i += t.strong(this.parseInline(o.tokens, t));
          break;
        }
        case "em": {
          i += t.em(this.parseInline(o.tokens, t));
          break;
        }
        case "codespan": {
          i += t.codespan(o.text);
          break;
        }
        case "br": {
          i += t.br();
          break;
        }
        case "del": {
          i += t.del(this.parseInline(o.tokens, t));
          break;
        }
        case "text": {
          i += t.text(o.text);
          break;
        }
        default: {
          const d = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) {
            console.error(d);
            return;
          } else
            throw new Error(d);
        }
      }
    }
    return i;
  }
}
class Ft {
  constructor(e) {
    this.options = e || Pe;
  }
  static passThroughHooks = /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess"
  ]);
  /**
   * Process markdown before marked
   */
  preprocess(e) {
    return e;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(e) {
    return e;
  }
}
function gr(r, e, t) {
  return (i) => {
    if (i.message += `
Please report this to https://github.com/markedjs/marked.`, r) {
      const n = "<p>An error occurred:</p><pre>" + j(i.message + "", !0) + "</pre>";
      if (e)
        return Promise.resolve(n);
      if (t) {
        t(null, n);
        return;
      }
      return n;
    }
    if (e)
      return Promise.reject(i);
    if (t) {
      t(i);
      return;
    }
    throw i;
  };
}
function un(r, e) {
  return (t, i, n) => {
    typeof i == "function" && (n = i, i = null);
    const o = { ...i };
    i = { ...v.defaults, ...o };
    const a = gr(i.silent, i.async, n);
    if (typeof t > "u" || t === null)
      return a(new Error("marked(): input parameter is undefined or null"));
    if (typeof t != "string")
      return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
    if (mr(i), i.hooks && (i.hooks.options = i), n) {
      const s = i.highlight;
      let d;
      try {
        i.hooks && (t = i.hooks.preprocess(t)), d = r(t, i);
      } catch (h) {
        return a(h);
      }
      const p = function(h) {
        let g;
        if (!h)
          try {
            i.walkTokens && v.walkTokens(d, i.walkTokens), g = e(d, i), i.hooks && (g = i.hooks.postprocess(g));
          } catch (f) {
            h = f;
          }
        return i.highlight = s, h ? a(h) : n(null, g);
      };
      if (!s || s.length < 3 || (delete i.highlight, !d.length)) return p();
      let m = 0;
      v.walkTokens(d, function(h) {
        h.type === "code" && (m++, setTimeout(() => {
          s(h.text, h.lang, function(g, f) {
            if (g)
              return p(g);
            f != null && f !== h.text && (h.text = f, h.escaped = !0), m--, m === 0 && p();
          });
        }, 0));
      }), m === 0 && p();
      return;
    }
    if (i.async)
      return Promise.resolve(i.hooks ? i.hooks.preprocess(t) : t).then((s) => r(s, i)).then((s) => i.walkTokens ? Promise.all(v.walkTokens(s, i.walkTokens)).then(() => s) : s).then((s) => e(s, i)).then((s) => i.hooks ? i.hooks.postprocess(s) : s).catch(a);
    try {
      i.hooks && (t = i.hooks.preprocess(t));
      const s = r(t, i);
      i.walkTokens && v.walkTokens(s, i.walkTokens);
      let d = e(s, i);
      return i.hooks && (d = i.hooks.postprocess(d)), d;
    } catch (s) {
      return a(s);
    }
  };
}
function v(r, e, t) {
  return un(Ee.lex, Ce.parse)(r, e, t);
}
v.options = v.setOptions = function(r) {
  return v.defaults = { ...v.defaults, ...r }, er(v.defaults), v;
};
v.getDefaults = ln;
v.defaults = Pe;
v.use = function(...r) {
  const e = v.defaults.extensions || { renderers: {}, childTokens: {} };
  r.forEach((t) => {
    const i = { ...t };
    if (i.async = v.defaults.async || i.async || !1, t.extensions && (t.extensions.forEach((n) => {
      if (!n.name)
        throw new Error("extension name required");
      if (n.renderer) {
        const o = e.renderers[n.name];
        o ? e.renderers[n.name] = function(...a) {
          let s = n.renderer.apply(this, a);
          return s === !1 && (s = o.apply(this, a)), s;
        } : e.renderers[n.name] = n.renderer;
      }
      if (n.tokenizer) {
        if (!n.level || n.level !== "block" && n.level !== "inline")
          throw new Error("extension level must be 'block' or 'inline'");
        e[n.level] ? e[n.level].unshift(n.tokenizer) : e[n.level] = [n.tokenizer], n.start && (n.level === "block" ? e.startBlock ? e.startBlock.push(n.start) : e.startBlock = [n.start] : n.level === "inline" && (e.startInline ? e.startInline.push(n.start) : e.startInline = [n.start]));
      }
      n.childTokens && (e.childTokens[n.name] = n.childTokens);
    }), i.extensions = e), t.renderer) {
      const n = v.defaults.renderer || new ai();
      for (const o in t.renderer) {
        const a = n[o];
        n[o] = (...s) => {
          let d = t.renderer[o].apply(n, s);
          return d === !1 && (d = a.apply(n, s)), d;
        };
      }
      i.renderer = n;
    }
    if (t.tokenizer) {
      const n = v.defaults.tokenizer || new oi();
      for (const o in t.tokenizer) {
        const a = n[o];
        n[o] = (...s) => {
          let d = t.tokenizer[o].apply(n, s);
          return d === !1 && (d = a.apply(n, s)), d;
        };
      }
      i.tokenizer = n;
    }
    if (t.hooks) {
      const n = v.defaults.hooks || new Ft();
      for (const o in t.hooks) {
        const a = n[o];
        Ft.passThroughHooks.has(o) ? n[o] = (s) => {
          if (v.defaults.async)
            return Promise.resolve(t.hooks[o].call(n, s)).then((p) => a.call(n, p));
          const d = t.hooks[o].call(n, s);
          return a.call(n, d);
        } : n[o] = (...s) => {
          let d = t.hooks[o].apply(n, s);
          return d === !1 && (d = a.apply(n, s)), d;
        };
      }
      i.hooks = n;
    }
    if (t.walkTokens) {
      const n = v.defaults.walkTokens;
      i.walkTokens = function(o) {
        let a = [];
        return a.push(t.walkTokens.call(this, o)), n && (a = a.concat(n.call(this, o))), a;
      };
    }
    v.setOptions(i);
  });
};
v.walkTokens = function(r, e) {
  let t = [];
  for (const i of r)
    switch (t = t.concat(e.call(v, i)), i.type) {
      case "table": {
        for (const n of i.header)
          t = t.concat(v.walkTokens(n.tokens, e));
        for (const n of i.rows)
          for (const o of n)
            t = t.concat(v.walkTokens(o.tokens, e));
        break;
      }
      case "list": {
        t = t.concat(v.walkTokens(i.items, e));
        break;
      }
      default:
        v.defaults.extensions && v.defaults.extensions.childTokens && v.defaults.extensions.childTokens[i.type] ? v.defaults.extensions.childTokens[i.type].forEach(function(n) {
          t = t.concat(v.walkTokens(i[n], e));
        }) : i.tokens && (t = t.concat(v.walkTokens(i.tokens, e)));
    }
  return t;
};
v.parseInline = un(Ee.lexInline, Ce.parseInline);
v.Parser = Ce;
v.parser = Ce.parse;
v.Renderer = ai;
v.TextRenderer = hn;
v.Lexer = Ee;
v.lexer = Ee.lex;
v.Tokenizer = oi;
v.Slugger = mn;
v.Hooks = Ft;
v.parse = v;
v.options;
v.setOptions;
v.use;
v.walkTokens;
v.parseInline;
const br = v;
Ce.parse;
Ee.lex;
var Mt = function(r, e) {
  return Mt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
  }, Mt(r, e);
};
function ue(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Mt(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var D = function() {
  return D = Object.assign || function(e) {
    for (var t, i = 1, n = arguments.length; i < n; i++) {
      t = arguments[i];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, D.apply(this, arguments);
};
function l(r, e, t, i) {
  var n = arguments.length, o = n < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(r, e, t, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (o = (n < 3 ? a(o) : n > 3 ? a(e, t, o) : a(e, t)) || o);
  return n > 3 && o && Object.defineProperty(e, t, o), o;
}
function ge(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], i = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && i >= r.length && (r = void 0), { value: r && r[i++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const xr = W`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;
let zt = class extends me {
  /** @soyTemplate */
  render() {
    return u`<slot></slot>`;
  }
};
zt.styles = [xr];
zt = l([
  V("mwc-icon")
], zt);
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
const Ai = /* @__PURE__ */ new WeakMap(), Si = 2147483647, vr = ze((...r) => (e) => {
  let t = Ai.get(e);
  t === void 0 && (t = {
    lastRenderedIndex: Si,
    values: []
  }, Ai.set(e, t));
  const i = t.values;
  let n = i.length;
  t.values = r;
  for (let o = 0; o < r.length && !(o > t.lastRenderedIndex); o++) {
    const a = r[o];
    if (et(a) || typeof a.then != "function") {
      e.setValue(a), t.lastRenderedIndex = o;
      break;
    }
    o < n && a === i[o] || (t.lastRenderedIndex = Si, n = 0, Promise.resolve(a).then((s) => {
      const d = t.values.indexOf(a);
      d > -1 && d < t.lastRenderedIndex && (t.lastRenderedIndex = d, e.setValue(s), e.commit());
    }));
  }
}), yr = 1e3 * 60, Ii = "langChanged";
function _r(r, e, t) {
  return Object.entries(Dt(e || {})).reduce((i, [n, o]) => i.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(Dt(o))), r);
}
function wr(r, e) {
  const t = r.split(".");
  let i = e.strings;
  for (; i != null && t.length > 0; )
    i = i[t.shift()];
  return i != null ? i.toString() : null;
}
function Dt(r) {
  return typeof r == "function" ? r() : r;
}
const kr = () => ({
  loader: () => Promise.resolve({}),
  empty: (r) => `[${r}]`,
  lookup: wr,
  interpolate: _r,
  translationCache: {}
});
let Er = kr();
function Cr(r, e) {
  const t = (i) => r(i.detail);
  return window.addEventListener(Ii, t, e), () => window.removeEventListener(Ii, t);
}
function mt(r, e, t = Er) {
  let i = t.translationCache[r] || (t.translationCache[r] = t.lookup(r, t) || t.empty(r, t));
  return e = e != null ? Dt(e) : null, e != null ? t.interpolate(i, e, t) : i;
}
function fn(r) {
  return r instanceof Te ? r.startNode.isConnected : r instanceof Ie ? r.committer.element.isConnected : r.element.isConnected;
}
function Ar(r) {
  for (const [e] of r)
    fn(e) || r.delete(e);
}
function Sr(r) {
  "requestIdleCallback" in window ? window.requestIdleCallback(r) : setTimeout(r);
}
function Ir(r, e) {
  setInterval(() => Sr(() => Ar(r)), e);
}
const gn = /* @__PURE__ */ new Map();
function Tr() {
  Cr((r) => {
    for (const [e, t] of gn)
      fn(e) && Rr(e, t, r);
  });
}
Tr();
Ir(gn, yr);
function Rr(r, e, t) {
  const i = e(t);
  r.value !== i && (r.setValue(i), r.commit());
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
function Lr(r, e) {
  var t = r.matches || r.webkitMatchesSelector || r.msMatchesSelector;
  return t.call(r, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const bn = (r) => r.nodeType === Node.ELEMENT_NODE;
function xt(r) {
  return {
    addClass: (e) => {
      r.classList.add(e);
    },
    removeClass: (e) => {
      r.classList.remove(e);
    },
    hasClass: (e) => r.classList.contains(e)
  };
}
const xn = () => {
}, Or = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", xn, Or);
document.removeEventListener("x", xn);
const si = (r = window.document) => {
  let e = r.activeElement;
  const t = [];
  if (!e)
    return t;
  for (; e && (t.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return t;
}, vn = (r) => {
  const e = si();
  if (!e.length)
    return !1;
  const t = e[e.length - 1], i = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let n = [];
  const o = (a) => {
    n = a.composedPath();
  };
  return document.body.addEventListener("check-if-focused", o), t.dispatchEvent(i), document.body.removeEventListener("check-if-focused", o), n.indexOf(r) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class $e extends me {
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
var le = (
  /** @class */
  function() {
    function r(e) {
      e === void 0 && (e = {}), this.adapter = e;
    }
    return Object.defineProperty(r, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.init = function() {
    }, r.prototype.destroy = function() {
    }, r;
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
var Fr = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Mr = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Ti = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function zr(r, e, t) {
  if (!r)
    return { x: 0, y: 0 };
  var i = e.x, n = e.y, o = i + t.left, a = n + t.top, s, d;
  if (r.type === "touchstart") {
    var p = r;
    s = p.changedTouches[0].pageX - o, d = p.changedTouches[0].pageY - a;
  } else {
    var m = r;
    s = m.pageX - o, d = m.pageY - a;
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
var Ri = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Li = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], ot = [], Dr = (
  /** @class */
  function(r) {
    ue(e, r);
    function e(t) {
      var i = r.call(this, D(D({}, e.defaultAdapter), t)) || this;
      return i.activationAnimationHasEnded = !1, i.activationTimer = 0, i.fgDeactivationRemovalTimer = 0, i.fgScale = "0", i.frame = { width: 0, height: 0 }, i.initialSize = 0, i.layoutFrame = 0, i.maxRadius = 0, i.unboundedCoords = { left: 0, top: 0 }, i.activationState = i.defaultActivationState(), i.activationTimerCallback = function() {
        i.activationAnimationHasEnded = !0, i.runDeactivationUXLogicIfReady();
      }, i.activateHandler = function(n) {
        i.activateImpl(n);
      }, i.deactivateHandler = function() {
        i.deactivateImpl();
      }, i.focusHandler = function() {
        i.handleFocus();
      }, i.blurHandler = function() {
        i.handleBlur();
      }, i.resizeHandler = function() {
        i.layout();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Fr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Mr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ti;
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
      var t = this, i = this.supportsPressRipple();
      if (this.registerRootHandlers(i), i) {
        var n = e.cssClasses, o = n.ROOT, a = n.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(o), t.adapter.isUnbounded() && (t.adapter.addClass(a), t.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var t = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var i = e.cssClasses, n = i.ROOT, o = i.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.removeClass(n), t.adapter.removeClass(o), t.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, e.prototype.activate = function(t) {
      this.activateImpl(t);
    }, e.prototype.deactivate = function() {
      this.deactivateImpl();
    }, e.prototype.layout = function() {
      var t = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        t.layoutInternal(), t.layoutFrame = 0;
      });
    }, e.prototype.setUnbounded = function(t) {
      var i = e.cssClasses.UNBOUNDED;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.handleFocus = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.addClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.handleBlur = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.removeClass(e.cssClasses.BG_FOCUSED);
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
    }, e.prototype.registerRootHandlers = function(t) {
      var i, n;
      if (t) {
        try {
          for (var o = ge(Ri), a = o.next(); !a.done; a = o.next()) {
            var s = a.value;
            this.adapter.registerInteractionHandler(s, this.activateHandler);
          }
        } catch (d) {
          i = { error: d };
        } finally {
          try {
            a && !a.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(t) {
      var i, n;
      if (t.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var o = ge(Li), a = o.next(); !a.done; a = o.next()) {
            var s = a.value;
            this.adapter.registerDocumentInteractionHandler(s, this.deactivateHandler);
          }
        } catch (d) {
          i = { error: d };
        } finally {
          try {
            a && !a.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, i;
      try {
        for (var n = ge(Ri), o = n.next(); !o.done; o = n.next()) {
          var a = o.value;
          this.adapter.deregisterInteractionHandler(a, this.activateHandler);
        }
      } catch (s) {
        t = { error: s };
      } finally {
        try {
          o && !o.done && (i = n.return) && i.call(n);
        } finally {
          if (t) throw t.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var t, i;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var n = ge(Li), o = n.next(); !o.done; o = n.next()) {
          var a = o.value;
          this.adapter.deregisterDocumentInteractionHandler(a, this.deactivateHandler);
        }
      } catch (s) {
        t = { error: s };
      } finally {
        try {
          o && !o.done && (i = n.return) && i.call(n);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var t = this, i = e.strings, n = Object.keys(i);
      n.forEach(function(o) {
        o.indexOf("VAR_") === 0 && t.adapter.updateCssVariable(i[o], null);
      });
    }, e.prototype.activateImpl = function(t) {
      var i = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var n = this.activationState;
        if (!n.isActivated) {
          var o = this.previousActivationEvent, a = o && t !== void 0 && o.type !== t.type;
          if (!a) {
            n.isActivated = !0, n.isProgrammatic = t === void 0, n.activationEvent = t, n.wasActivatedByPointer = n.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var s = t !== void 0 && ot.length > 0 && ot.some(function(d) {
              return i.adapter.containsEventTarget(d);
            });
            if (s) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (ot.push(t.target), this.registerDeactivationHandlers(t)), n.wasElementMadeActive = this.checkElementMadeActive(t), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              ot = [], !n.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (n.wasElementMadeActive = i.checkElementMadeActive(t), n.wasElementMadeActive && i.animateActivation()), n.wasElementMadeActive || (i.activationState = i.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, i = e.strings, n = i.VAR_FG_TRANSLATE_START, o = i.VAR_FG_TRANSLATE_END, a = e.cssClasses, s = a.FG_DEACTIVATION, d = a.FG_ACTIVATION, p = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var m = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var g = this.getFgTranslationCoordinates(), f = g.startPoint, C = g.endPoint;
        m = f.x + "px, " + f.y + "px", h = C.x + "px, " + C.y + "px";
      }
      this.adapter.updateCssVariable(n, m), this.adapter.updateCssVariable(o, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(s), this.adapter.computeBoundingRect(), this.adapter.addClass(d), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, p);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, i = t.activationEvent, n = t.wasActivatedByPointer, o;
      n ? o = zr(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : o = {
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
      var t = this, i = e.cssClasses.FG_DEACTIVATION, n = this.activationState, o = n.hasDeactivationUXRun, a = n.isActivated, s = o || !a;
      s && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(i), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(i);
      }, Ti.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var t = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(t), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var t = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return t.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var t = this, i = this.activationState;
      if (i.isActivated) {
        var n = D({}, i);
        i.isProgrammatic ? (requestAnimationFrame(function() {
          t.animateDeactivation(n);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          t.activationState.hasDeactivationUXRun = !0, t.animateDeactivation(n), t.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(t) {
      var i = t.wasActivatedByPointer, n = t.wasElementMadeActive;
      (i || n) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var t = this;
      this.frame = this.adapter.computeBoundingRect();
      var i = Math.max(this.frame.height, this.frame.width), n = function() {
        var a = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return a + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? i : n();
      var o = Math.floor(i * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && o % 2 !== 0 ? this.initialSize = o - 1 : this.initialSize = o, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, i = t.VAR_FG_SIZE, n = t.VAR_LEFT, o = t.VAR_TOP, a = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(i, this.initialSize + "px"), this.adapter.updateCssVariable(a, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(n, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(o, this.unboundedCoords.top + "px"));
    }, e;
  }(le)
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
class Pr {
  constructor(e) {
    this.classes = /* @__PURE__ */ new Set(), this.changed = !1, this.element = e;
    const t = (e.getAttribute("class") || "").split(/\s+/);
    for (const i of t)
      this.classes.add(i);
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
      this.classes.forEach((t) => e += t + " "), this.element.setAttribute("class", e);
    }
  }
}
const Oi = /* @__PURE__ */ new WeakMap(), Q = ze((r) => (e) => {
  if (!(e instanceof Ie) || e instanceof Ge || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: t } = e, { element: i } = t;
  let n = Oi.get(e);
  n === void 0 && (i.setAttribute("class", t.strings.join(" ")), Oi.set(e, n = /* @__PURE__ */ new Set()));
  const o = i.classList || new Pr(i);
  n.forEach((a) => {
    a in r || (o.remove(a), n.delete(a));
  });
  for (const a in r) {
    const s = r[a];
    s != n.has(a) && (s ? (o.add(a), n.add(a)) : (o.remove(a), n.delete(a)));
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
const Fi = /* @__PURE__ */ new WeakMap(), yn = ze((r) => (e) => {
  if (!(e instanceof Ie) || e instanceof Ge || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: t } = e, { style: i } = t.element;
  let n = Fi.get(e);
  n === void 0 && (i.cssText = t.strings.join(" "), Fi.set(e, n = /* @__PURE__ */ new Set())), n.forEach((o) => {
    o in r || (n.delete(o), o.indexOf("-") === -1 ? i[o] = null : i.removeProperty(o));
  });
  for (const o in r)
    n.add(o), o.indexOf("-") === -1 ? i[o] = r[o] : i.setProperty(o, r[o]);
});
class U extends $e {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Dr;
  }
  get isActive() {
    return Lr(this.parentElement || this, ":active");
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
      updateCssVariable: (e, t) => {
        switch (e) {
          case "--mdc-ripple-fg-scale":
            this.fgScale = t;
            break;
          case "--mdc-ripple-fg-size":
            this.fgSize = t;
            break;
          case "--mdc-ripple-fg-translate-end":
            this.translateEnd = t;
            break;
          case "--mdc-ripple-fg-translate-start":
            this.translateStart = t;
            break;
          case "--mdc-ripple-left":
            this.leftPos = t;
            break;
          case "--mdc-ripple-top":
            this.topPos = t;
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
    const e = this.activated && (this.primary || !this.accent), t = this.selected && (this.primary || !this.accent), i = {
      "mdc-ripple-surface--accent": this.accent,
      "mdc-ripple-surface--primary--activated": e,
      "mdc-ripple-surface--accent--activated": this.accent && this.activated,
      "mdc-ripple-surface--primary--selected": t,
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
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Q(i)}"
          style="${yn({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
l([
  w(".mdc-ripple-surface")
], U.prototype, "mdcRoot", void 0);
l([
  c({ type: Boolean })
], U.prototype, "primary", void 0);
l([
  c({ type: Boolean })
], U.prototype, "accent", void 0);
l([
  c({ type: Boolean })
], U.prototype, "unbounded", void 0);
l([
  c({ type: Boolean })
], U.prototype, "disabled", void 0);
l([
  c({ type: Boolean })
], U.prototype, "activated", void 0);
l([
  c({ type: Boolean })
], U.prototype, "selected", void 0);
l([
  c({ type: Boolean })
], U.prototype, "internalUseStateLayerCustomProperties", void 0);
l([
  _()
], U.prototype, "hovering", void 0);
l([
  _()
], U.prototype, "bgFocused", void 0);
l([
  _()
], U.prototype, "fgActivation", void 0);
l([
  _()
], U.prototype, "fgDeactivation", void 0);
l([
  _()
], U.prototype, "fgScale", void 0);
l([
  _()
], U.prototype, "fgSize", void 0);
l([
  _()
], U.prototype, "translateStart", void 0);
l([
  _()
], U.prototype, "translateEnd", void 0);
l([
  _()
], U.prototype, "leftPos", void 0);
l([
  _()
], U.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const $r = W`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let Pt = class extends U {
};
Pt.styles = [$r];
Pt = l([
  V("mwc-ripple")
], Pt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const L = (r) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e, t) => {
    if (e.constructor._observers) {
      if (!e.constructor.hasOwnProperty("_observers")) {
        const i = e.constructor._observers;
        e.constructor._observers = /* @__PURE__ */ new Map(), i.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (n, o) => e.constructor._observers.set(o, n)
        );
      }
    } else {
      e.constructor._observers = /* @__PURE__ */ new Map();
      const i = e.updated;
      e.updated = function(n) {
        i.call(this, n), n.forEach((o, a) => {
          const d = this.constructor._observers.get(a);
          d !== void 0 && d.call(this, this[a], o);
        });
      };
    }
    e.constructor._observers.set(t, r);
  }
);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class vt {
  constructor(e) {
    this.startPress = (t) => {
      e().then((i) => {
        i && i.startPress(t);
      });
    }, this.endPress = () => {
      e().then((t) => {
        t && t.endPress();
      });
    }, this.startFocus = () => {
      e().then((t) => {
        t && t.startFocus();
      });
    }, this.endFocus = () => {
      e().then((t) => {
        t && t.endFocus();
      });
    }, this.startHover = () => {
      e().then((t) => {
        t && t.startHover();
      });
    }, this.endHover = () => {
      e().then((t) => {
        t && t.endHover();
      });
    };
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class q extends me {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new vt(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
          const t = e.type;
          this.onDown(t === "mousedown" ? "mouseup" : "touchend", e);
        }
      }
    ];
  }
  get text() {
    const e = this.textContent;
    return e ? e.trim() : "";
  }
  render() {
    const e = this.renderText(), t = this.graphic ? this.renderGraphic() : u``, i = this.hasMeta ? this.renderMeta() : u``;
    return u`
      ${this.renderRipple()}
      ${t}
      ${e}
      ${i}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? u`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? u`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return u`
      <span class="mdc-deprecated-list-item__graphic material-icons ${Q(e)}">
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
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return u`
      <span class="mdc-deprecated-list-item__text">
        ${e}
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
  onDown(e, t) {
    const i = () => {
      window.removeEventListener(e, i), this.rippleHandlers.endPress();
    };
    window.addEventListener(e, i), this.rippleHandlers.startPress(t);
  }
  fireRequestSelected(e, t) {
    if (this.noninteractive)
      return;
    const i = new CustomEvent("request-selected", { bubbles: !0, composed: !0, detail: { source: t, selected: e } });
    this.dispatchEvent(i);
  }
  connectedCallback() {
    super.connectedCallback(), this.noninteractive || this.setAttribute("mwc-list-item", "");
    for (const e of this.listeners)
      for (const t of e.eventNames)
        e.target.addEventListener(t, e.cb, { passive: !0 });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const e of this.listeners)
      for (const t of e.eventNames)
        e.target.removeEventListener(t, e.cb);
    this._managingList && (this._managingList.debouncedLayout ? this._managingList.debouncedLayout(!0) : this._managingList.layout(!0));
  }
  // composed flag, event fire through shadow root and up through composed tree
  firstUpdated() {
    const e = new Event("list-item-rendered", { bubbles: !0, composed: !0 });
    this.dispatchEvent(e);
  }
}
l([
  w("slot")
], q.prototype, "slotElement", void 0);
l([
  bt("mwc-ripple")
], q.prototype, "ripple", void 0);
l([
  c({ type: String })
], q.prototype, "value", void 0);
l([
  c({ type: String, reflect: !0 })
], q.prototype, "group", void 0);
l([
  c({ type: Number, reflect: !0 })
], q.prototype, "tabindex", void 0);
l([
  c({ type: Boolean, reflect: !0 }),
  L(function(r) {
    r ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], q.prototype, "disabled", void 0);
l([
  c({ type: Boolean, reflect: !0 })
], q.prototype, "twoline", void 0);
l([
  c({ type: Boolean, reflect: !0 })
], q.prototype, "activated", void 0);
l([
  c({ type: String, reflect: !0 })
], q.prototype, "graphic", void 0);
l([
  c({ type: Boolean })
], q.prototype, "multipleGraphics", void 0);
l([
  c({ type: Boolean })
], q.prototype, "hasMeta", void 0);
l([
  c({ type: Boolean, reflect: !0 }),
  L(function(r) {
    r ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], q.prototype, "noninteractive", void 0);
l([
  c({ type: Boolean, reflect: !0 }),
  L(function(r) {
    const e = this.getAttribute("role"), t = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (t && r ? this.setAttribute("aria-selected", "true") : t && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(r, "property");
  })
], q.prototype, "selected", void 0);
l([
  _()
], q.prototype, "shouldRenderRipple", void 0);
l([
  _()
], q.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const _n = W`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let $t = class extends q {
};
$t.styles = [_n];
$t = l([
  V("mwc-list-item")
], $t);
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
const wt = /* @__PURE__ */ new WeakMap(), O = ze((r) => (e) => {
  const t = wt.get(e);
  if (r === void 0 && e instanceof Ie) {
    if (t !== void 0 || !wt.has(e)) {
      const i = e.committer.name;
      e.committer.element.removeAttribute(i);
    }
  } else r !== t && e.setValue(r);
  wt.set(e, r);
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
var y = {
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
}, Z = /* @__PURE__ */ new Set();
Z.add(y.BACKSPACE);
Z.add(y.ENTER);
Z.add(y.SPACEBAR);
Z.add(y.PAGE_UP);
Z.add(y.PAGE_DOWN);
Z.add(y.END);
Z.add(y.HOME);
Z.add(y.ARROW_LEFT);
Z.add(y.ARROW_UP);
Z.add(y.ARROW_RIGHT);
Z.add(y.ARROW_DOWN);
Z.add(y.DELETE);
Z.add(y.ESCAPE);
Z.add(y.TAB);
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
}, K = /* @__PURE__ */ new Map();
K.set(ee.BACKSPACE, y.BACKSPACE);
K.set(ee.ENTER, y.ENTER);
K.set(ee.SPACEBAR, y.SPACEBAR);
K.set(ee.PAGE_UP, y.PAGE_UP);
K.set(ee.PAGE_DOWN, y.PAGE_DOWN);
K.set(ee.END, y.END);
K.set(ee.HOME, y.HOME);
K.set(ee.ARROW_LEFT, y.ARROW_LEFT);
K.set(ee.ARROW_UP, y.ARROW_UP);
K.set(ee.ARROW_RIGHT, y.ARROW_RIGHT);
K.set(ee.ARROW_DOWN, y.ARROW_DOWN);
K.set(ee.DELETE, y.DELETE);
K.set(ee.ESCAPE, y.ESCAPE);
K.set(ee.TAB, y.TAB);
var Re = /* @__PURE__ */ new Set();
Re.add(y.PAGE_UP);
Re.add(y.PAGE_DOWN);
Re.add(y.END);
Re.add(y.HOME);
Re.add(y.ARROW_LEFT);
Re.add(y.ARROW_UP);
Re.add(y.ARROW_RIGHT);
Re.add(y.ARROW_DOWN);
function $(r) {
  var e = r.key;
  if (Z.has(e))
    return e;
  var t = K.get(r.keyCode);
  return t || y.UNKNOWN;
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
var _e, fe, T = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
_e = {}, _e["" + T.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", _e["" + T.LIST_ITEM_CLASS] = "mdc-list-item", _e["" + T.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", _e["" + T.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", _e["" + T.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", _e["" + T.ROOT] = "mdc-list";
var Ne = (fe = {}, fe["" + T.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", fe["" + T.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", fe["" + T.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", fe["" + T.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", fe["" + T.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", fe["" + T.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", fe["" + T.ROOT] = "mdc-deprecated-list", fe), at = {
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
    .` + T.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + T.LIST_ITEM_CLASS + ` a,
    .` + Ne[T.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ne[T.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + T.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + T.LIST_ITEM_CLASS + ` a,
    .` + T.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + T.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Ne[T.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ne[T.LIST_ITEM_CLASS] + ` a,
    .` + Ne[T.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Ne[T.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, X = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Bt = (r, e) => r - e, Br = (r, e) => {
  const t = Array.from(r), i = Array.from(e), n = { added: [], removed: [] }, o = t.sort(Bt), a = i.sort(Bt);
  let s = 0, d = 0;
  for (; s < o.length || d < a.length; ) {
    const p = o[s], m = a[d];
    if (p === m) {
      s++, d++;
      continue;
    }
    if (p !== void 0 && (m === void 0 || p < m)) {
      n.removed.push(p), s++;
      continue;
    }
    if (m !== void 0 && (p === void 0 || m < p)) {
      n.added.push(m), d++;
      continue;
    }
  }
  return n;
}, Hr = ["input", "button", "textarea", "select"];
function Ke(r) {
  return r instanceof Set;
}
const kt = (r) => {
  const e = r === X.UNSET_INDEX ? /* @__PURE__ */ new Set() : r;
  return Ke(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class li extends le {
  constructor(e) {
    super(Object.assign(Object.assign({}, li.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = X.UNSET_INDEX, this.focusedItemIndex_ = X.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return at;
  }
  static get numbers() {
    return X;
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
    const t = this.selectedIndex_;
    if (e) {
      if (!Ke(t)) {
        const i = t === X.UNSET_INDEX;
        this.selectedIndex_ = i ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([t]);
      }
    } else if (Ke(t))
      if (t.size) {
        const i = Array.from(t).sort(Bt);
        this.selectedIndex_ = i[0];
      } else
        this.selectedIndex_ = X.UNSET_INDEX;
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
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(kt(e)) : this.setSingleSelectionAtIndex_(e));
  }
  /**
   * Focus in handler for the list items.
   */
  handleFocusIn(e, t) {
    t >= 0 && this.adapter.setTabIndexForElementIndex(t, 0);
  }
  /**
   * Focus out handler for the list items.
   */
  handleFocusOut(e, t) {
    t >= 0 && this.adapter.setTabIndexForElementIndex(t, -1), setTimeout(() => {
      this.adapter.isFocusInsideList() || this.setTabindexToFirstSelectedItem_();
    }, 0);
  }
  /**
   * Key handler for the list.
   */
  handleKeydown(e, t, i) {
    const n = $(e) === "ArrowLeft", o = $(e) === "ArrowUp", a = $(e) === "ArrowRight", s = $(e) === "ArrowDown", d = $(e) === "Home", p = $(e) === "End", m = $(e) === "Enter", h = $(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      o || p ? (e.preventDefault(), this.focusLastElement()) : (s || d) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let g = this.adapter.getFocusedElementIndex();
    if (g === -1 && (g = i, g < 0))
      return;
    let f;
    if (this.isVertical_ && s || !this.isVertical_ && a)
      this.preventDefaultEvent(e), f = this.focusNextElement(g);
    else if (this.isVertical_ && o || !this.isVertical_ && n)
      this.preventDefaultEvent(e), f = this.focusPrevElement(g);
    else if (d)
      this.preventDefaultEvent(e), f = this.focusFirstElement();
    else if (p)
      this.preventDefaultEvent(e), f = this.focusLastElement();
    else if ((m || h) && t) {
      const C = e.target;
      if (C && C.tagName === "A" && m)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(g, !0);
    }
    this.focusedItemIndex_ = g, f !== void 0 && (this.setTabindexAtIndex_(f), this.focusedItemIndex_ = f);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, t, i) {
    e !== X.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, t, i), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
  }
  /**
   * Focuses the next element on the list.
   */
  focusNextElement(e) {
    const t = this.adapter.getListItemCount();
    let i = e + 1;
    if (i >= t)
      if (this.wrapFocus_)
        i = 0;
      else
        return e;
    return this.adapter.focusItemAtIndex(i), i;
  }
  /**
   * Focuses the previous element on the list.
   */
  focusPrevElement(e) {
    let t = e - 1;
    if (t < 0)
      if (this.wrapFocus_)
        t = this.adapter.getListItemCount() - 1;
      else
        return e;
    return this.adapter.focusItemAtIndex(t), t;
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
  setEnabled(e, t) {
    this.isIndexValid_(e) && this.adapter.setDisabledStateForElementIndex(e, !t);
  }
  /**
   * Ensures that preventDefault is only called if the containing element
   * doesn't consume the event, and it will cause an unintended scroll.
   */
  preventDefaultEvent(e) {
    const i = `${e.target.tagName}`.toLowerCase();
    Hr.indexOf(i) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, t = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== X.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), t && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, t = !0) {
    const i = kt(this.selectedIndex_), n = Br(i, e);
    if (!(!n.removed.length && !n.added.length)) {
      for (const o of n.removed)
        t && this.adapter.setSelectedStateForElementIndex(o, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(o, !1);
      for (const o of n.added)
        t && this.adapter.setSelectedStateForElementIndex(o, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(o, !0);
      this.selectedIndex_ = e, this.adapter.notifySelected(e, n);
    }
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(e) {
    this.selectedIndex_ === X.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, at.ARIA_CURRENT));
    const t = this.ariaCurrentAttrValue_ !== null, i = t ? at.ARIA_CURRENT : at.ARIA_SELECTED;
    this.selectedIndex_ !== X.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, i, "false");
    const n = t ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, i, n);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === X.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== X.UNSET_INDEX ? e = this.selectedIndex_ : Ke(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
  }
  isIndexValid_(e) {
    if (e instanceof Set) {
      if (!this.isMulti_)
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      if (e.size === 0)
        return !0;
      {
        let t = !1;
        for (const i of e)
          if (t = this.isIndexInRange_(i), t)
            break;
        return t;
      }
    } else if (typeof e == "number") {
      if (this.isMulti_)
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + e);
      return e === X.UNSET_INDEX || this.isIndexInRange_(e);
    } else
      return !1;
  }
  isIndexInRange_(e) {
    const t = this.adapter.getListItemCount();
    return e >= 0 && e < t;
  }
  /**
   * Sets selected index on user action, toggles checkbox / radio based on
   * toggleCheckbox value. User interaction should not toggle list item(s) when
   * disabled.
   */
  setSelectedIndexOnAction_(e, t, i) {
    if (this.adapter.getDisabledStateForElementIndex(e))
      return;
    let n = e;
    this.isMulti_ && (n = /* @__PURE__ */ new Set([e])), this.isIndexValid_(n) && (this.isMulti_ ? this.toggleMultiAtIndex(e, i, t) : t || i ? this.setSingleSelectionAtIndex_(e, t) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(X.UNSET_INDEX), t && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, t, i = !0) {
    let n = !1;
    t === void 0 ? n = !this.adapter.getSelectedStateForElementIndex(e) : n = t;
    const o = kt(this.selectedIndex_);
    n ? o.add(e) : o.delete(e), this.setMultiSelectionAtIndex_(o, i);
  }
}
function Nr(r, e = 50) {
  let t;
  return function(i = !0) {
    clearTimeout(t), t = setTimeout(() => {
      r(i);
    }, e);
  };
}
const st = (r) => r.hasAttribute("mwc-list-item");
function Vr() {
  const r = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), r();
}
class te extends $e {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = li, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = Nr(this.layout.bind(this));
    this.debouncedLayout = (t = !0) => {
      Vr.call(this), e(t);
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
    const t = (e = this.assignedElements) !== null && e !== void 0 ? e : [], i = [];
    for (const a of t)
      st(a) && (i.push(a), a._managingList = this), a.hasAttribute("divider") && !a.hasAttribute("role") && a.setAttribute("role", "separator");
    this.items_ = i;
    const n = /* @__PURE__ */ new Set();
    if (this.items_.forEach((a, s) => {
      this.itemRoles ? a.setAttribute("role", this.itemRoles) : a.removeAttribute("role"), a.selected && n.add(s);
    }), this.multi)
      this.select(n);
    else {
      const a = n.size ? n.entries().next().value[1] : -1;
      this.select(a);
    }
    const o = new Event("items-updated", { bubbles: !0, composed: !0 });
    this.dispatchEvent(o);
  }
  get selected() {
    const e = this.index;
    if (!Ke(e))
      return e === -1 ? null : this.items[e];
    const t = [];
    for (const i of e)
      t.push(this.items[i]);
    return t;
  }
  get index() {
    return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
  }
  render() {
    const e = this.innerRole === null ? void 0 : this.innerRole, t = this.innerAriaLabel === null ? void 0 : this.innerAriaLabel, i = this.rootTabbable ? "0" : "-1";
    return u`
      <!-- @ts-ignore -->
      <ul
          tabindex=${i}
          role="${O(e)}"
          aria-label="${O(t)}"
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
    const t = (e = this.assignedElements) !== null && e !== void 0 ? e : [];
    return this.emptyMessage !== void 0 && t.length === 0 ? u`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      ` : null;
  }
  firstUpdated() {
    super.firstUpdated(), this.items.length || (this.mdcFoundation.setMulti(this.multi), this.layout());
  }
  onFocusIn(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const t = this.getIndexOfTarget(e);
      this.mdcFoundation.handleFocusIn(e, t);
    }
  }
  onFocusOut(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const t = this.getIndexOfTarget(e);
      this.mdcFoundation.handleFocusOut(e, t);
    }
  }
  onKeydown(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const t = this.getIndexOfTarget(e), i = e.target, n = st(i);
      this.mdcFoundation.handleKeydown(e, n, t);
    }
  }
  onRequestSelected(e) {
    if (this.mdcFoundation) {
      let t = this.getIndexOfTarget(e);
      if (t === -1 && (this.layout(), t = this.getIndexOfTarget(e), t === -1) || this.items[t].disabled)
        return;
      const n = e.detail.selected, o = e.detail.source;
      this.mdcFoundation.handleSingleSelection(t, o === "interaction", n), e.stopPropagation();
    }
  }
  getIndexOfTarget(e) {
    const t = this.items, i = e.composedPath();
    for (const n of i) {
      let o = -1;
      if (bn(n) && st(n) && (o = t.indexOf(n)), o !== -1)
        return o;
    }
    return -1;
  }
  createAdapter() {
    return this.mdcAdapter = {
      getListItemCount: () => this.mdcRoot ? this.items.length : 0,
      getFocusedElementIndex: this.getFocusedItemIndex,
      getAttributeForElementIndex: (e, t) => {
        if (!this.mdcRoot)
          return "";
        const n = this.items[e];
        return n ? n.getAttribute(t) : "";
      },
      setAttributeForElementIndex: (e, t, i) => {
        if (!this.mdcRoot)
          return;
        const n = this.items[e];
        n && n.setAttribute(t, i);
      },
      focusItemAtIndex: (e) => {
        const t = this.items[e];
        t && t.focus();
      },
      setTabIndexForElementIndex: (e, t) => {
        const i = this.items[e];
        i && (i.tabindex = t);
      },
      notifyAction: (e) => {
        const t = { bubbles: !0, composed: !0 };
        t.detail = { index: e };
        const i = new CustomEvent("action", t);
        this.dispatchEvent(i);
      },
      notifySelected: (e, t) => {
        const i = { bubbles: !0, composed: !0 };
        i.detail = { index: e, diff: t };
        const n = new CustomEvent("selected", i);
        this.dispatchEvent(n);
      },
      isFocusInsideList: () => vn(this),
      isRootFocused: () => {
        const e = this.mdcRoot;
        return e.getRootNode().activeElement === e;
      },
      setDisabledStateForElementIndex: (e, t) => {
        const i = this.items[e];
        i && (i.disabled = t);
      },
      getDisabledStateForElementIndex: (e) => {
        const t = this.items[e];
        return t ? t.disabled : !1;
      },
      setSelectedStateForElementIndex: (e, t) => {
        const i = this.items[e];
        i && (i.selected = t);
      },
      getSelectedStateForElementIndex: (e) => {
        const t = this.items[e];
        return t ? t.selected : !1;
      },
      setActivatedStateForElementIndex: (e, t) => {
        const i = this.items[e];
        i && (i.activated = t);
      }
    }, this.mdcAdapter;
  }
  selectUi(e, t = !1) {
    const i = this.items[e];
    i && (i.selected = !0, i.activated = t);
  }
  deselectUi(e) {
    const t = this.items[e];
    t && (t.selected = !1, t.activated = !1);
  }
  select(e) {
    this.mdcFoundation && this.mdcFoundation.setSelectedIndex(e);
  }
  toggle(e, t) {
    this.multi && this.mdcFoundation.toggleMultiAtIndex(e, t);
  }
  onListItemConnected(e) {
    const t = e.target;
    this.layout(this.items.indexOf(t) === -1);
  }
  layout(e = !0) {
    e && this.updateItems();
    const t = this.items[0];
    for (const i of this.items)
      i.tabindex = -1;
    t && (this.noninteractive ? this.previousTabindex || (this.previousTabindex = t) : t.tabindex = 0), this.itemsReadyResolver();
  }
  getFocusedItemIndex() {
    if (!this.mdcRoot || !this.items.length)
      return -1;
    const e = si();
    if (!e.length)
      return -1;
    for (let t = e.length - 1; t >= 0; t--) {
      const i = e[t];
      if (st(i))
        return this.items.indexOf(i);
    }
    return -1;
  }
  focusItemAtIndex(e) {
    for (const t of this.items)
      if (t.tabindex === 0) {
        t.tabindex = -1;
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
l([
  c({ type: String })
], te.prototype, "emptyMessage", void 0);
l([
  w(".mdc-deprecated-list")
], te.prototype, "mdcRoot", void 0);
l([
  ii("", !0, "*")
], te.prototype, "assignedElements", void 0);
l([
  ii("", !0, '[tabindex="0"]')
], te.prototype, "tabbableElements", void 0);
l([
  c({ type: Boolean }),
  L(function(r) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(r);
  })
], te.prototype, "activatable", void 0);
l([
  c({ type: Boolean }),
  L(function(r, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(r), e !== void 0 && this.layout();
  })
], te.prototype, "multi", void 0);
l([
  c({ type: Boolean }),
  L(function(r) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(r);
  })
], te.prototype, "wrapFocus", void 0);
l([
  c({ type: String }),
  L(function(r, e) {
    e !== void 0 && this.updateItems();
  })
], te.prototype, "itemRoles", void 0);
l([
  c({ type: String })
], te.prototype, "innerRole", void 0);
l([
  c({ type: String })
], te.prototype, "innerAriaLabel", void 0);
l([
  c({ type: Boolean })
], te.prototype, "rootTabbable", void 0);
l([
  c({ type: Boolean, reflect: !0 }),
  L(function(r) {
    var e, t;
    if (r) {
      const i = (t = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && t !== void 0 ? t : null;
      this.previousTabindex = i, i && i.setAttribute("tabindex", "-1");
    } else !r && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], te.prototype, "noninteractive", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ur = W`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ut = class extends te {
};
ut.styles = [Ur];
ut = l([
  V("mwc-list")
], ut);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Gr(r, e, t) {
  const i = r.constructor;
  if (!t) {
    const s = `__${e}`;
    if (t = i.getPropertyDescriptor(e, s), !t)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const n = t;
  let o = "";
  if (!n.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const a = {
    configurable: !0,
    enumerable: !0,
    set(s) {
      o === "" && (o = i.getPropertyOptions(e).attribute), this.hasAttribute(o) && this.removeAttribute(o), n.set.call(this, s);
    }
  };
  return n.get && (a.get = function() {
    return n.get.call(this);
  }), a;
}
function qe(r, e, t) {
  if (e !== void 0)
    return Gr(r, e, t);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ae extends $e {
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
Ae.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
class G extends Ae {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new vt(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(e) {
    const t = e.get("indeterminate"), i = e.get("checked"), n = e.get("disabled");
    if (t !== void 0 || i !== void 0 || n !== void 0) {
      const o = this.calculateAnimationStateName(!!i, !!t, !!n), a = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${o}-${a}`;
    }
    super.update(e);
  }
  calculateAnimationStateName(e, t, i) {
    return i ? "disabled" : t ? "indeterminate" : e ? "checked" : "unchecked";
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
    const e = this.indeterminate || this.checked, t = {
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
    }, i = this.indeterminate ? "mixed" : void 0;
    return u`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Q(t)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${O(this.name)}"
              aria-checked="${O(i)}"
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
    const t = () => {
      window.removeEventListener("mouseup", t), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", t), this.rippleHandlers.startPress(e);
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
l([
  w(".mdc-checkbox")
], G.prototype, "mdcRoot", void 0);
l([
  w("input")
], G.prototype, "formElement", void 0);
l([
  c({ type: Boolean, reflect: !0 })
], G.prototype, "checked", void 0);
l([
  c({ type: Boolean })
], G.prototype, "indeterminate", void 0);
l([
  c({ type: Boolean, reflect: !0 })
], G.prototype, "disabled", void 0);
l([
  c({ type: String, reflect: !0 })
], G.prototype, "name", void 0);
l([
  c({ type: String })
], G.prototype, "value", void 0);
l([
  qe,
  c({ type: String, attribute: "aria-label" })
], G.prototype, "ariaLabel", void 0);
l([
  qe,
  c({ type: String, attribute: "aria-labelledby" })
], G.prototype, "ariaLabelledBy", void 0);
l([
  qe,
  c({ type: String, attribute: "aria-describedby" })
], G.prototype, "ariaDescribedBy", void 0);
l([
  c({ type: Boolean })
], G.prototype, "reducedTouchTarget", void 0);
l([
  _()
], G.prototype, "animationClass", void 0);
l([
  _()
], G.prototype, "shouldRenderRipple", void 0);
l([
  _()
], G.prototype, "focused", void 0);
l([
  _()
], G.prototype, "useStateLayerCustomProperties", void 0);
l([
  bt("mwc-ripple")
], G.prototype, "ripple", void 0);
l([
  De({ passive: !0 })
], G.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const qr = W`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let Ht = class extends G {
};
Ht.styles = [qr];
Ht = l([
  V("mwc-checkbox")
], Ht);
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
var jr = {
  ROOT: "mdc-form-field"
}, Wr = {
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
var Xr = (
  /** @class */
  function(r) {
    ue(e, r);
    function e(t) {
      var i = r.call(this, D(D({}, e.defaultAdapter), t)) || this;
      return i.click = function() {
        i.handleClick();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return jr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Wr;
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
      var t = this;
      this.adapter.activateInputRipple(), requestAnimationFrame(function() {
        t.adapter.deactivateInputRipple();
      });
    }, e;
  }(le)
);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Le extends $e {
  constructor() {
    super(...arguments), this.alignEnd = !1, this.spaceBetween = !1, this.nowrap = !1, this.label = "", this.mdcFoundationClass = Xr;
  }
  createAdapter() {
    return {
      registerInteractionHandler: (e, t) => {
        this.labelEl.addEventListener(e, t);
      },
      deregisterInteractionHandler: (e, t) => {
        this.labelEl.removeEventListener(e, t);
      },
      activateInputRipple: async () => {
        const e = this.input;
        if (e instanceof Ae) {
          const t = await e.ripple;
          t && t.startPress();
        }
      },
      deactivateInputRipple: async () => {
        const e = this.input;
        if (e instanceof Ae) {
          const t = await e.ripple;
          t && t.endPress();
        }
      }
    };
  }
  get input() {
    var e, t;
    return (t = (e = this.slottedInputs) === null || e === void 0 ? void 0 : e[0]) !== null && t !== void 0 ? t : null;
  }
  render() {
    const e = {
      "mdc-form-field--align-end": this.alignEnd,
      "mdc-form-field--space-between": this.spaceBetween,
      "mdc-form-field--nowrap": this.nowrap
    };
    return u`
      <div class="mdc-form-field ${Q(e)}">
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
l([
  c({ type: Boolean })
], Le.prototype, "alignEnd", void 0);
l([
  c({ type: Boolean })
], Le.prototype, "spaceBetween", void 0);
l([
  c({ type: Boolean })
], Le.prototype, "nowrap", void 0);
l([
  c({ type: String }),
  L(async function(r) {
    const e = this.input;
    e && (e.localName === "input" ? e.setAttribute("aria-label", r) : e instanceof Ae && (await e.updateComplete, e.setAriaLabel(r)));
  })
], Le.prototype, "label", void 0);
l([
  w(".mdc-form-field")
], Le.prototype, "mdcRoot", void 0);
l([
  ii("", !0, "*")
], Le.prototype, "slottedInputs", void 0);
l([
  w("label")
], Le.prototype, "labelEl", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Yr = W`.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch[dir=rtl]){margin-left:10px}`;
let Nt = class extends Le {
};
Nt.styles = [Yr];
Nt = l([
  V("mwc-formfield")
], Nt);
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
var Zr = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Mi = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Kr = {
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
var Qr = (
  /** @class */
  function(r) {
    ue(e, r);
    function e(t) {
      return r.call(this, D(D({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Zr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Kr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Mi;
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
    }), e.prototype.notch = function(t) {
      var i = e.cssClasses.OUTLINE_NOTCHED;
      t > 0 && (t += Mi.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(i);
    }, e.prototype.closeNotch = function() {
      var t = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty();
    }, e;
  }(le)
);
class tt extends $e {
  constructor() {
    super(...arguments), this.mdcFoundationClass = Qr, this.width = 0, this.open = !1, this.lastOpen = this.open;
  }
  createAdapter() {
    return {
      addClass: (e) => this.mdcRoot.classList.add(e),
      removeClass: (e) => this.mdcRoot.classList.remove(e),
      setNotchWidthProperty: (e) => this.notchElement.style.setProperty("width", `${e}px`),
      removeNotchWidthProperty: () => this.notchElement.style.removeProperty("width")
    };
  }
  openOrClose(e, t) {
    this.mdcFoundation && (e && t !== void 0 ? this.mdcFoundation.notch(t) : this.mdcFoundation.closeNotch());
  }
  render() {
    this.openOrClose(this.open, this.width);
    const e = Q({
      "mdc-notched-outline--notched": this.open
    });
    return u`
      <span class="mdc-notched-outline ${e}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`;
  }
}
l([
  w(".mdc-notched-outline")
], tt.prototype, "mdcRoot", void 0);
l([
  c({ type: Number })
], tt.prototype, "width", void 0);
l([
  c({ type: Boolean, reflect: !0 })
], tt.prototype, "open", void 0);
l([
  w(".mdc-notched-outline__notch")
], tt.prototype, "notchElement", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Jr = W`.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host([dir=rtl]){text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`;
let Vt = class extends tt {
};
Vt.styles = [Jr];
Vt = l([
  V("mwc-notched-outline")
], Vt);
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
var eo = {
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
var to = (
  /** @class */
  function(r) {
    ue(e, r);
    function e(t) {
      var i = r.call(this, D(D({}, e.defaultAdapter), t)) || this;
      return i.shakeAnimationEndHandler = function() {
        i.handleShakeAnimationEnd();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return eo;
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
    }, e.prototype.shake = function(t) {
      var i = e.cssClasses.LABEL_SHAKE;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.float = function(t) {
      var i = e.cssClasses, n = i.LABEL_FLOAT_ABOVE, o = i.LABEL_SHAKE;
      t ? this.adapter.addClass(n) : (this.adapter.removeClass(n), this.adapter.removeClass(o));
    }, e.prototype.setRequired = function(t) {
      var i = e.cssClasses.LABEL_REQUIRED;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.handleShakeAnimationEnd = function() {
      var t = e.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(t);
    }, e;
  }(le)
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
const xe = {
  ATTRIBUTE: 1,
  CHILD: 2,
  PROPERTY: 3,
  BOOLEAN_ATTRIBUTE: 4,
  EVENT: 5
};
class io {
  constructor(e) {
    this.type = xe.CHILD, this.options = e.options, this.legacyPart = e;
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
class no {
  constructor(e) {
    this.legacyPart = e, this.type = e instanceof Ge ? xe.PROPERTY : xe.ATTRIBUTE;
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
class ro {
  constructor(e) {
    this.type = xe.BOOLEAN_ATTRIBUTE, this.legacyPart = e;
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
class oo {
  constructor(e) {
    this.type = xe.EVENT, this.legacyPart = e;
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
function ao(r) {
  if (r instanceof Te)
    return new io(r);
  if (r instanceof Jt)
    return new oo(r);
  if (r instanceof Qt)
    return new ro(r);
  if (r instanceof Ge || r instanceof Ie)
    return new no(r);
  throw new Error("Unknown part type");
}
class wn {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(e) {
  }
  update(e, t) {
    return this.render(...t);
  }
}
function kn(r) {
  const e = /* @__PURE__ */ new WeakMap();
  return ze((...i) => (n) => {
    const o = e.get(n);
    let a, s;
    o === void 0 ? (a = ao(n), s = new r(a), e.set(n, [a, s])) : (a = o[0], s = o[1]), n.setValue(s.update(a, i)), n.commit();
  });
}
const so = (r) => ({
  addClass: (e) => r.classList.add(e),
  removeClass: (e) => r.classList.remove(e),
  getWidth: () => r.scrollWidth,
  registerInteractionHandler: (e, t) => {
    r.addEventListener(e, t);
  },
  deregisterInteractionHandler: (e, t) => {
    r.removeEventListener(e, t);
  }
});
class lo extends wn {
  constructor(e) {
    switch (super(e), this.foundation = null, this.previousPart = null, e.type) {
      // Only allow Attribute and Part bindings
      case xe.ATTRIBUTE:
      case xe.PROPERTY:
        break;
      default:
        throw new Error("FloatingLabel directive only support attribute and property parts");
    }
  }
  /**
   * There is no PropertyPart in Lit 2 so far. For more info see:
   * https://github.com/lit/lit/issues/1863
   */
  update(e, [t]) {
    if (e !== this.previousPart) {
      this.foundation && this.foundation.destroy(), this.previousPart = e;
      const i = e.element;
      i.classList.add("mdc-floating-label");
      const n = so(i);
      this.foundation = new to(n), this.foundation.init();
    }
    return this.render(t);
  }
  render(e) {
    return this.foundation;
  }
}
const En = kn(lo);
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
var Oe = {
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
var co = (
  /** @class */
  function(r) {
    ue(e, r);
    function e(t) {
      var i = r.call(this, D(D({}, e.defaultAdapter), t)) || this;
      return i.transitionEndHandler = function(n) {
        i.handleTransitionEnd(n);
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Oe;
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
      this.adapter.removeClass(Oe.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Oe.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(t) {
      this.adapter.setStyle("transform-origin", t + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(Oe.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(t) {
      var i = this.adapter.hasClass(Oe.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && i && (this.adapter.removeClass(Oe.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Oe.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(le)
);
const po = (r) => ({
  addClass: (e) => r.classList.add(e),
  removeClass: (e) => r.classList.remove(e),
  hasClass: (e) => r.classList.contains(e),
  setStyle: (e, t) => r.style.setProperty(e, t),
  registerEventHandler: (e, t) => {
    r.addEventListener(e, t);
  },
  deregisterEventHandler: (e, t) => {
    r.removeEventListener(e, t);
  }
});
class ho extends wn {
  constructor(e) {
    switch (super(e), this.previousPart = null, this.foundation = null, e.type) {
      case xe.ATTRIBUTE:
      case xe.PROPERTY:
        return;
      default:
        throw new Error("LineRipple only support attribute and property parts.");
    }
  }
  /**
   * There is no PropertyPart in Lit 2 so far. For more info see:
   * https://github.com/lit/lit/issues/1863
   */
  update(e, t) {
    if (this.previousPart !== e) {
      this.foundation && this.foundation.destroy(), this.previousPart = e;
      const i = e.element;
      i.classList.add("mdc-line-ripple");
      const n = po(i);
      this.foundation = new co(n), this.foundation.init();
    }
    return this.render();
  }
  render() {
    return this.foundation;
  }
}
const Cn = kn(ho);
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
var Et = {
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
}, mo = {
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
}, zi = {
  LABEL_SCALE: 0.75
}, uo = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], fo = [
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
var Di = ["mousedown", "touchstart"], Pi = ["click", "keydown"], go = (
  /** @class */
  function(r) {
    ue(e, r);
    function e(t, i) {
      i === void 0 && (i = {});
      var n = r.call(this, D(D({}, e.defaultAdapter), t)) || this;
      return n.isFocused = !1, n.receivedUserInput = !1, n.valid = !0, n.useNativeValidation = !0, n.validateOnValueChange = !0, n.helperText = i.helperText, n.characterCounter = i.characterCounter, n.leadingIcon = i.leadingIcon, n.trailingIcon = i.trailingIcon, n.inputFocusHandler = function() {
        n.activateFocus();
      }, n.inputBlurHandler = function() {
        n.deactivateFocus();
      }, n.inputInputHandler = function() {
        n.handleInput();
      }, n.setPointerXOffset = function(o) {
        n.setTransformOrigin(o);
      }, n.textFieldInteractionHandler = function() {
        n.handleTextFieldInteraction();
      }, n.validationAttributeChangeHandler = function(o) {
        n.handleValidationAttributeChange(o);
      }, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return mo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Et;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return zi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var t = this.getNativeInput().type;
        return fo.indexOf(t) >= 0;
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
      var t, i, n, o;
      this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var a = ge(Di), s = a.next(); !s.done; s = a.next()) {
          var d = s.value;
          this.adapter.registerInputInteractionHandler(d, this.setPointerXOffset);
        }
      } catch (h) {
        t = { error: h };
      } finally {
        try {
          s && !s.done && (i = a.return) && i.call(a);
        } finally {
          if (t) throw t.error;
        }
      }
      try {
        for (var p = ge(Pi), m = p.next(); !m.done; m = p.next()) {
          var d = m.value;
          this.adapter.registerTextFieldInteractionHandler(d, this.textFieldInteractionHandler);
        }
      } catch (h) {
        n = { error: h };
      } finally {
        try {
          m && !m.done && (o = p.return) && o.call(p);
        } finally {
          if (n) throw n.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var t, i, n, o;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var a = ge(Di), s = a.next(); !s.done; s = a.next()) {
          var d = s.value;
          this.adapter.deregisterInputInteractionHandler(d, this.setPointerXOffset);
        }
      } catch (h) {
        t = { error: h };
      } finally {
        try {
          s && !s.done && (i = a.return) && i.call(a);
        } finally {
          if (t) throw t.error;
        }
      }
      try {
        for (var p = ge(Pi), m = p.next(); !m.done; m = p.next()) {
          var d = m.value;
          this.adapter.deregisterTextFieldInteractionHandler(d, this.textFieldInteractionHandler);
        }
      } catch (h) {
        n = { error: h };
      } finally {
        try {
          m && !m.done && (o = p.return) && o.call(p);
        } finally {
          if (n) throw n.error;
        }
      }
      this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    }, e.prototype.handleTextFieldInteraction = function() {
      var t = this.adapter.getNativeInput();
      t && t.disabled || (this.receivedUserInput = !0);
    }, e.prototype.handleValidationAttributeChange = function(t) {
      var i = this;
      t.some(function(n) {
        return uo.indexOf(n) > -1 ? (i.styleValidity(!0), i.adapter.setLabelRequired(i.getNativeInput().required), !0) : !1;
      }), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (t) {
          var i = this.adapter.getLabelWidth() * zi.LABEL_SCALE;
          this.adapter.notchOutline(i);
        } else
          this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(t) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var i = t.touches, n = i ? i[0] : t, o = n.target.getBoundingClientRect(), a = n.clientX - o.left;
        this.adapter.setLineRippleTransformOrigin(a);
      }
    }, e.prototype.handleInput = function() {
      this.autoCompleteFocus(), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.autoCompleteFocus = function() {
      this.receivedUserInput || this.activateFocus();
    }, e.prototype.deactivateFocus = function() {
      this.isFocused = !1, this.adapter.deactivateLineRipple();
      var t = this.isValid();
      this.styleValidity(t), this.styleFocused(this.isFocused), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput = !1);
    }, e.prototype.getValue = function() {
      return this.getNativeInput().value;
    }, e.prototype.setValue = function(t) {
      if (this.getValue() !== t && (this.getNativeInput().value = t), this.setcharacterCounter(t.length), this.validateOnValueChange) {
        var i = this.isValid();
        this.styleValidity(i);
      }
      this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.validateOnValueChange && this.adapter.shakeLabel(this.shouldShake));
    }, e.prototype.isValid = function() {
      return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    }, e.prototype.setValid = function(t) {
      this.valid = t, this.styleValidity(t);
      var i = !t && !this.isFocused && !!this.getValue();
      this.adapter.hasLabel() && this.adapter.shakeLabel(i);
    }, e.prototype.setValidateOnValueChange = function(t) {
      this.validateOnValueChange = t;
    }, e.prototype.getValidateOnValueChange = function() {
      return this.validateOnValueChange;
    }, e.prototype.setUseNativeValidation = function(t) {
      this.useNativeValidation = t;
    }, e.prototype.isDisabled = function() {
      return this.getNativeInput().disabled;
    }, e.prototype.setDisabled = function(t) {
      this.getNativeInput().disabled = t, this.styleDisabled(t);
    }, e.prototype.setHelperTextContent = function(t) {
      this.helperText && this.helperText.setContent(t);
    }, e.prototype.setLeadingIconAriaLabel = function(t) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(t);
    }, e.prototype.setLeadingIconContent = function(t) {
      this.leadingIcon && this.leadingIcon.setContent(t);
    }, e.prototype.setTrailingIconAriaLabel = function(t) {
      this.trailingIcon && this.trailingIcon.setAriaLabel(t);
    }, e.prototype.setTrailingIconContent = function(t) {
      this.trailingIcon && this.trailingIcon.setContent(t);
    }, e.prototype.setcharacterCounter = function(t) {
      if (this.characterCounter) {
        var i = this.getNativeInput().maxLength;
        if (i === -1)
          throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
        this.characterCounter.setCounterValue(t, i);
      }
    }, e.prototype.isBadInput = function() {
      return this.getNativeInput().validity.badInput || !1;
    }, e.prototype.isNativeInputValid = function() {
      return this.getNativeInput().validity.valid;
    }, e.prototype.styleValidity = function(t) {
      var i = e.cssClasses.INVALID;
      if (t ? this.adapter.removeClass(i) : this.adapter.addClass(i), this.helperText) {
        this.helperText.setValidity(t);
        var n = this.helperText.isValidation();
        if (!n)
          return;
        var o = this.helperText.isVisible(), a = this.helperText.getId();
        o && a ? this.adapter.setInputAttr(Et.ARIA_DESCRIBEDBY, a) : this.adapter.removeInputAttr(Et.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.styleFocused = function(t) {
      var i = e.cssClasses.FOCUSED;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.styleDisabled = function(t) {
      var i = e.cssClasses, n = i.DISABLED, o = i.INVALID;
      t ? (this.adapter.addClass(n), this.adapter.removeClass(o)) : this.adapter.removeClass(n), this.leadingIcon && this.leadingIcon.setDisabled(t), this.trailingIcon && this.trailingIcon.setDisabled(t);
    }, e.prototype.styleFloating = function(t) {
      var i = e.cssClasses.LABEL_FLOATING;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.getNativeInput = function() {
      var t = this.adapter ? this.adapter.getNativeInput() : null;
      return t || {
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
  }(le)
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
const bo = ze((r) => (e) => {
  let t;
  if (e instanceof Jt || e instanceof Te)
    throw new Error("The `live` directive is not allowed on text or event bindings");
  if (e instanceof Qt)
    $i(e.strings), t = e.element.hasAttribute(e.name), e.value = t;
  else {
    const { element: i, name: n, strings: o } = e.committer;
    if ($i(o), e instanceof Ge) {
      if (t = i[n], t === r)
        return;
    } else e instanceof Ie && (t = i.getAttribute(n));
    if (t === String(r))
      return;
  }
  e.setValue(r);
}), $i = (r) => {
  if (r.length !== 2 || r[0] !== "" || r[1] !== "")
    throw new Error("`live` bindings can only contain a single expression");
}, xo = ["touchstart", "touchmove", "scroll", "mousewheel"], Bi = (r = {}) => {
  const e = {};
  for (const t in r)
    e[t] = r[t];
  return Object.assign({ badInput: !1, customError: !1, patternMismatch: !1, rangeOverflow: !1, rangeUnderflow: !1, stepMismatch: !1, tooLong: !1, tooShort: !1, typeMismatch: !1, valid: !0, valueMissing: !1 }, e);
};
class k extends Ae {
  constructor() {
    super(...arguments), this.mdcFoundationClass = go, this.value = "", this.type = "text", this.placeholder = "", this.label = "", this.icon = "", this.iconTrailing = "", this.disabled = !1, this.required = !1, this.minLength = -1, this.maxLength = -1, this.outlined = !1, this.helper = "", this.validateOnInitialRender = !1, this.validationMessage = "", this.autoValidate = !1, this.pattern = "", this.min = "", this.max = "", this.step = null, this.size = null, this.helperPersistent = !1, this.charCounter = !1, this.endAligned = !1, this.prefix = "", this.suffix = "", this.name = "", this.readOnly = !1, this.autocapitalize = "", this.outlineOpen = !1, this.outlineWidth = 0, this.isUiValid = !0, this.focused = !1, this._validity = Bi(), this.validityTransform = null;
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
  setSelectionRange(e, t, i) {
    this.formElement.setSelectionRange(e, t, i);
  }
  update(e) {
    e.has("autoValidate") && this.mdcFoundation && this.mdcFoundation.setValidateOnValueChange(this.autoValidate), e.has("value") && typeof this.value != "string" && (this.value = `${this.value}`), super.update(e);
  }
  /** @soyTemplate */
  render() {
    const e = this.charCounter && this.maxLength !== -1, t = !!this.helper || !!this.validationMessage || e, i = {
      "mdc-text-field--disabled": this.disabled,
      "mdc-text-field--no-label": !this.label,
      "mdc-text-field--filled": !this.outlined,
      "mdc-text-field--outlined": this.outlined,
      "mdc-text-field--with-leading-icon": this.icon,
      "mdc-text-field--with-trailing-icon": this.iconTrailing,
      "mdc-text-field--end-aligned": this.endAligned
    };
    return u`
      <label class="mdc-text-field ${Q(i)}">
        ${this.renderRipple()}
        ${this.outlined ? this.renderOutline() : this.renderLabel()}
        ${this.renderLeadingIcon()}
        ${this.renderPrefix()}
        ${this.renderInput(t)}
        ${this.renderSuffix()}
        ${this.renderTrailingIcon()}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(t, e)}
    `;
  }
  updated(e) {
    e.has("value") && e.get("value") !== void 0 && (this.mdcFoundation.setValue(this.value), this.autoValidate && this.reportValidity());
  }
  /** @soyTemplate */
  renderRipple() {
    return this.outlined ? "" : u`
      <span class="mdc-text-field__ripple"></span>
    `;
  }
  /** @soyTemplate */
  renderOutline() {
    return this.outlined ? u`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>` : "";
  }
  /** @soyTemplate */
  renderLabel() {
    return this.label ? u`
      <span
          .floatingLabelFoundation=${En(this.label)}
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
  renderIcon(e, t = !1) {
    return u`<i class="material-icons mdc-text-field__icon ${Q({
      "mdc-text-field__icon--leading": !t,
      "mdc-text-field__icon--trailing": t
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
  renderAffix(e, t = !1) {
    return u`<span class="mdc-text-field__affix ${Q({
      "mdc-text-field__affix--prefix": !t,
      "mdc-text-field__affix--suffix": t
    })}">
        ${e}</span>`;
  }
  /** @soyTemplate */
  renderInput(e) {
    const t = this.minLength === -1 ? void 0 : this.minLength, i = this.maxLength === -1 ? void 0 : this.maxLength, n = this.autocapitalize ? this.autocapitalize : void 0, o = this.validationMessage && !this.isUiValid, a = this.label ? "label" : void 0, s = e ? "helper-text" : void 0, d = this.focused || this.helperPersistent || o ? "helper-text" : void 0;
    return u`
      <input
          aria-labelledby=${O(a)}
          aria-controls="${O(s)}"
          aria-describedby="${O(d)}"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${bo(this.value)}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${O(t)}"
          maxlength="${O(i)}"
          pattern="${O(this.pattern ? this.pattern : void 0)}"
          min="${O(this.min === "" ? void 0 : this.min)}"
          max="${O(this.max === "" ? void 0 : this.max)}"
          step="${O(this.step === null ? void 0 : this.step)}"
          size="${O(this.size === null ? void 0 : this.size)}"
          name="${O(this.name === "" ? void 0 : this.name)}"
          inputmode="${O(this.inputMode)}"
          autocapitalize="${O(n)}"
          @input="${this.handleInputChange}"
          @focus="${this.onInputFocus}"
          @blur="${this.onInputBlur}">`;
  }
  /** @soyTemplate */
  renderLineRipple() {
    return this.outlined ? "" : u`
      <span .lineRippleFoundation=${Cn()}></span>
    `;
  }
  /** @soyTemplate */
  renderHelperText(e, t) {
    const i = this.validationMessage && !this.isUiValid, n = {
      "mdc-text-field-helper-text--persistent": this.helperPersistent,
      "mdc-text-field-helper-text--validation-msg": i
    }, o = this.focused || this.helperPersistent || i ? void 0 : "true", a = i ? this.validationMessage : this.helper;
    return e ? u`
      <div class="mdc-text-field-helper-line">
        <div id="helper-text"
             aria-hidden="${O(o)}"
             class="mdc-text-field-helper-text ${Q(n)}"
             >${a}</div>
        ${this.renderCharCounter(t)}
      </div>` : "";
  }
  /** @soyTemplate */
  renderCharCounter(e) {
    const t = Math.min(this.value.length, this.maxLength);
    return e ? u`
      <span class="mdc-text-field-character-counter"
            >${t} / ${this.maxLength}</span>` : "";
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
      const t = new Event("invalid", { bubbles: !1, cancelable: !0 });
      this.dispatchEvent(t);
    }
    return e;
  }
  reportValidity() {
    const e = this.checkValidity();
    return this.mdcFoundation.setValid(e), this.isUiValid = e, e;
  }
  _checkValidity(e) {
    const t = this.formElement.validity;
    let i = Bi(t);
    if (this.validityTransform) {
      const n = this.validityTransform(e, i);
      i = Object.assign(Object.assign({}, i), n), this.mdcFoundation.setUseNativeValidation(!1);
    } else
      this.mdcFoundation.setUseNativeValidation(!0);
    return this._validity = i, this._validity.valid;
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
    return Object.assign({ registerTextFieldInteractionHandler: (e, t) => this.addEventListener(e, t), deregisterTextFieldInteractionHandler: (e, t) => this.removeEventListener(e, t), registerValidationAttributeChangeHandler: (e) => {
      const t = (o) => o.map((a) => a.attributeName).filter((a) => a), i = new MutationObserver((o) => {
        e(t(o));
      }), n = { attributes: !0 };
      return i.observe(this.formElement, n), i;
    }, deregisterValidationAttributeChangeHandler: (e) => e.disconnect() }, xt(this.mdcRoot));
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
      registerInputInteractionHandler: (e, t) => this.formElement.addEventListener(e, t, { passive: e in xo }),
      deregisterInputInteractionHandler: (e, t) => this.formElement.removeEventListener(e, t)
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
    const t = await super.getUpdateComplete();
    return await ((e = this.outlineElement) === null || e === void 0 ? void 0 : e.updateComplete), t;
  }
  // tslint:enable:ban-ts-ignore
  firstUpdated() {
    var e;
    super.firstUpdated(), this.mdcFoundation.setValidateOnValueChange(this.autoValidate), this.validateOnInitialRender && this.reportValidity(), (e = this.outlineElement) === null || e === void 0 || e.updateComplete.then(() => {
      var t;
      this.outlineWidth = ((t = this.labelElement) === null || t === void 0 ? void 0 : t.floatingLabelFoundation.getWidth()) || 0;
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
    const t = !!this.label && !!this.value;
    if (e.floatingLabelFoundation.float(t), !this.outlined)
      return;
    this.outlineOpen = t, await this.updateComplete;
    const i = e.floatingLabelFoundation.getWidth();
    this.outlineOpen && (this.outlineWidth = i, await this.updateComplete);
  }
}
l([
  w(".mdc-text-field")
], k.prototype, "mdcRoot", void 0);
l([
  w("input")
], k.prototype, "formElement", void 0);
l([
  w(".mdc-floating-label")
], k.prototype, "labelElement", void 0);
l([
  w(".mdc-line-ripple")
], k.prototype, "lineRippleElement", void 0);
l([
  w("mwc-notched-outline")
], k.prototype, "outlineElement", void 0);
l([
  w(".mdc-notched-outline__notch")
], k.prototype, "notchElement", void 0);
l([
  c({ type: String })
], k.prototype, "value", void 0);
l([
  c({ type: String })
], k.prototype, "type", void 0);
l([
  c({ type: String })
], k.prototype, "placeholder", void 0);
l([
  c({ type: String }),
  L(function(r, e) {
    e !== void 0 && this.label !== e && this.layout();
  })
], k.prototype, "label", void 0);
l([
  c({ type: String })
], k.prototype, "icon", void 0);
l([
  c({ type: String })
], k.prototype, "iconTrailing", void 0);
l([
  c({ type: Boolean, reflect: !0 })
], k.prototype, "disabled", void 0);
l([
  c({ type: Boolean })
], k.prototype, "required", void 0);
l([
  c({ type: Number })
], k.prototype, "minLength", void 0);
l([
  c({ type: Number })
], k.prototype, "maxLength", void 0);
l([
  c({ type: Boolean, reflect: !0 }),
  L(function(r, e) {
    e !== void 0 && this.outlined !== e && this.layout();
  })
], k.prototype, "outlined", void 0);
l([
  c({ type: String })
], k.prototype, "helper", void 0);
l([
  c({ type: Boolean })
], k.prototype, "validateOnInitialRender", void 0);
l([
  c({ type: String })
], k.prototype, "validationMessage", void 0);
l([
  c({ type: Boolean })
], k.prototype, "autoValidate", void 0);
l([
  c({ type: String })
], k.prototype, "pattern", void 0);
l([
  c({ type: String })
], k.prototype, "min", void 0);
l([
  c({ type: String })
], k.prototype, "max", void 0);
l([
  c({ type: Number })
], k.prototype, "step", void 0);
l([
  c({ type: Number })
], k.prototype, "size", void 0);
l([
  c({ type: Boolean })
], k.prototype, "helperPersistent", void 0);
l([
  c({ type: Boolean })
], k.prototype, "charCounter", void 0);
l([
  c({ type: Boolean })
], k.prototype, "endAligned", void 0);
l([
  c({ type: String })
], k.prototype, "prefix", void 0);
l([
  c({ type: String })
], k.prototype, "suffix", void 0);
l([
  c({ type: String })
], k.prototype, "name", void 0);
l([
  c({ type: String })
], k.prototype, "inputMode", void 0);
l([
  c({ type: Boolean })
], k.prototype, "readOnly", void 0);
l([
  c({ type: String })
], k.prototype, "autocapitalize", void 0);
l([
  _()
], k.prototype, "outlineOpen", void 0);
l([
  _()
], k.prototype, "outlineWidth", void 0);
l([
  _()
], k.prototype, "isUiValid", void 0);
l([
  _()
], k.prototype, "focused", void 0);
l([
  De({ passive: !0 })
], k.prototype, "handleInputChange", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const vo = W`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{content:none}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38) )}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-error-color, var(--mdc-theme-error, #b00020) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ft = class extends k {
};
ft.styles = [vo];
ft = l([
  V("mwc-textfield")
], ft);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class it extends q {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, t = this.renderText(), i = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : u``, n = this.hasMeta && this.left ? this.renderMeta() : u``, o = this.renderRipple();
    return u`
      ${o}
      ${i}
      ${this.left ? "" : t}
      <span class=${Q(e)}>
        <mwc-checkbox
            reducedTouchTarget
            tabindex=${this.tabindex}
            .checked=${this.selected}
            ?disabled=${this.disabled}
            @change=${this.onChange}>
        </mwc-checkbox>
      </span>
      ${this.left ? t : ""}
      ${n}`;
  }
  async onChange(e) {
    const t = e.target;
    this.selected === t.checked || (this._skipPropRequest = !0, this.selected = t.checked, await this.updateComplete, this._skipPropRequest = !1);
  }
}
l([
  w("slot")
], it.prototype, "slotElement", void 0);
l([
  w("mwc-checkbox")
], it.prototype, "checkboxElement", void 0);
l([
  c({ type: Boolean })
], it.prototype, "left", void 0);
l([
  c({ type: String, reflect: !0 })
], it.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const yo = W`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Ue = class extends it {
};
Ue.styles = [_n, yo];
Ue = l([
  V("mwc-check-list-item")
], Ue);
var _o = Object.defineProperty, wo = Object.getOwnPropertyDescriptor, Be = (r, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? wo(e, t) : e, o = r.length - 1, a; o >= 0; o--)
    (a = r[o]) && (n = (i ? a(e, t, n) : a(n)) || n);
  return i && n && _o(e, t, n), n;
};
function Ut(r) {
  return !r.closest("filtered-list") || !r.parentElement || r.parentElement instanceof he ? r : Ut(r.parentElement);
}
function ko(r, e) {
  const t = r.innerText + `
`, i = Array.from(r.children).map((s) => s.innerText).join(`
`), n = r.value, o = (t + i + n).toUpperCase(), a = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  a.length === 1 && a[0] === "" || a.every((s) => new RegExp(
    `*${s}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(o)) ? Ut(r).classList.remove("hidden") : Ut(r).classList.add("hidden");
}
let he = class extends te {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((r) => r instanceof Ue);
  }
  get isAllSelected() {
    return this.items.filter((r) => !r.disabled).filter((r) => r instanceof Ue).every((r) => r.selected);
  }
  get isSomeSelected() {
    return this.items.filter((r) => !r.disabled).filter((r) => r instanceof Ue).some((r) => r.selected);
  }
  onCheckAll() {
    const r = !this.isAllSelected;
    this.items.filter((e) => !e.disabled && !e.classList.contains("hidden")).forEach((e) => e.selected = r);
  }
  onFilterInput() {
    Array.from(
      this.querySelectorAll(
        "mwc-list-item, mwc-check-list-item, mwc-radio-list-item"
      )
    ).forEach(
      (r) => ko(r, this.searchField.value)
    );
  }
  onListItemConnected(r) {
    super.onListItemConnected(r), this.requestUpdate();
  }
  update(r) {
    super.update(r), this.onFilterInput();
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
        <abbr title="${this.searchFieldLabel ?? mt("filter")}"
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
he.styles = W`
    ${sn(ut.styles)}

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
Be([
  c({ type: String })
], he.prototype, "searchFieldLabel", 2);
Be([
  c({ type: Boolean })
], he.prototype, "disableCheckAll", 2);
Be([
  _()
], he.prototype, "existCheckListItem", 1);
Be([
  _()
], he.prototype, "isAllSelected", 1);
Be([
  _()
], he.prototype, "isSomeSelected", 1);
Be([
  w("mwc-textfield")
], he.prototype, "searchField", 2);
he = Be([
  V("filtered-list")
], he);
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
var Eo = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Co = {
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
}, lt = {
  /** Total duration of menu-surface open animation. */
  TRANSITION_OPEN_DURATION: 120,
  /** Total duration of menu-surface close animation. */
  TRANSITION_CLOSE_DURATION: 75,
  /** Margin left to the edge of the viewport when menu-surface is at maximum possible height. Also used as a viewport margin. */
  MARGIN_TO_EDGE: 32,
  /** Ratio of anchor width to menu-surface width for switching from corner positioning to center positioning. */
  ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67
}, z;
(function(r) {
  r[r.BOTTOM = 1] = "BOTTOM", r[r.CENTER = 2] = "CENTER", r[r.RIGHT = 4] = "RIGHT", r[r.FLIP_RTL = 8] = "FLIP_RTL";
})(z || (z = {}));
var Y;
(function(r) {
  r[r.TOP_LEFT = 0] = "TOP_LEFT", r[r.TOP_RIGHT = 4] = "TOP_RIGHT", r[r.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", r[r.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", r[r.TOP_START = 8] = "TOP_START", r[r.TOP_END = 12] = "TOP_END", r[r.BOTTOM_START = 9] = "BOTTOM_START", r[r.BOTTOM_END = 13] = "BOTTOM_END";
})(Y || (Y = {}));
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
var An = (
  /** @class */
  function(r) {
    ue(e, r);
    function e(t) {
      var i = r.call(this, D(D({}, e.defaultAdapter), t)) || this;
      return i.isSurfaceOpen = !1, i.isQuickOpen = !1, i.isHoistedElement = !1, i.isFixedPosition = !1, i.isHorizontallyCenteredOnViewport = !1, i.maxHeight = 0, i.openAnimationEndTimerId = 0, i.closeAnimationEndTimerId = 0, i.animationRequestId = 0, i.anchorCorner = Y.TOP_START, i.originCorner = Y.TOP_START, i.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, i.position = { x: 0, y: 0 }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Eo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Co;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return lt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return Y;
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
      var t = e.cssClasses, i = t.ROOT, n = t.OPEN;
      if (!this.adapter.hasClass(i))
        throw new Error(i + " class required in root element.");
      this.adapter.hasClass(n) && (this.isSurfaceOpen = !0);
    }, e.prototype.destroy = function() {
      clearTimeout(this.openAnimationEndTimerId), clearTimeout(this.closeAnimationEndTimerId), cancelAnimationFrame(this.animationRequestId);
    }, e.prototype.setAnchorCorner = function(t) {
      this.anchorCorner = t;
    }, e.prototype.flipCornerHorizontally = function() {
      this.originCorner = this.originCorner ^ z.RIGHT;
    }, e.prototype.setAnchorMargin = function(t) {
      this.anchorMargin.top = t.top || 0, this.anchorMargin.right = t.right || 0, this.anchorMargin.bottom = t.bottom || 0, this.anchorMargin.left = t.left || 0;
    }, e.prototype.setIsHoisted = function(t) {
      this.isHoistedElement = t;
    }, e.prototype.setFixedPosition = function(t) {
      this.isFixedPosition = t;
    }, e.prototype.setAbsolutePosition = function(t, i) {
      this.position.x = this.isFinite(t) ? t : 0, this.position.y = this.isFinite(i) ? i : 0;
    }, e.prototype.setIsHorizontallyCenteredOnViewport = function(t) {
      this.isHorizontallyCenteredOnViewport = t;
    }, e.prototype.setQuickOpen = function(t) {
      this.isQuickOpen = t;
    }, e.prototype.setMaxHeight = function(t) {
      this.maxHeight = t;
    }, e.prototype.isOpen = function() {
      return this.isSurfaceOpen;
    }, e.prototype.open = function() {
      var t = this;
      this.isSurfaceOpen || (this.adapter.saveFocus(), this.isQuickOpen ? (this.isSurfaceOpen = !0, this.adapter.addClass(e.cssClasses.OPEN), this.dimensions = this.adapter.getInnerDimensions(), this.autoposition(), this.adapter.notifyOpen()) : (this.adapter.addClass(e.cssClasses.ANIMATING_OPEN), this.animationRequestId = requestAnimationFrame(function() {
        t.dimensions = t.adapter.getInnerDimensions(), t.autoposition(), t.adapter.addClass(e.cssClasses.OPEN), t.openAnimationEndTimerId = setTimeout(function() {
          t.openAnimationEndTimerId = 0, t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN), t.adapter.notifyOpen();
        }, lt.TRANSITION_OPEN_DURATION);
      }), this.isSurfaceOpen = !0));
    }, e.prototype.close = function(t) {
      var i = this;
      if (t === void 0 && (t = !1), !!this.isSurfaceOpen) {
        if (this.adapter.notifyClosing(), this.isQuickOpen) {
          this.isSurfaceOpen = !1, t || this.maybeRestoreFocus(), this.adapter.removeClass(e.cssClasses.OPEN), this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), this.adapter.notifyClose();
          return;
        }
        this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED), requestAnimationFrame(function() {
          i.adapter.removeClass(e.cssClasses.OPEN), i.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), i.closeAnimationEndTimerId = setTimeout(function() {
            i.closeAnimationEndTimerId = 0, i.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED), i.adapter.notifyClose();
          }, lt.TRANSITION_CLOSE_DURATION);
        }), this.isSurfaceOpen = !1, t || this.maybeRestoreFocus();
      }
    }, e.prototype.handleBodyClick = function(t) {
      var i = t.target;
      this.adapter.isElementInContainer(i) || this.close();
    }, e.prototype.handleKeydown = function(t) {
      var i = t.keyCode, n = t.key, o = n === "Escape" || i === 27;
      o && this.close();
    }, e.prototype.autoposition = function() {
      var t;
      this.measurements = this.getAutoLayoutmeasurements();
      var i = this.getoriginCorner(), n = this.getMenuSurfaceMaxHeight(i), o = this.hasBit(i, z.BOTTOM) ? "bottom" : "top", a = this.hasBit(i, z.RIGHT) ? "right" : "left", s = this.getHorizontalOriginOffset(i), d = this.getVerticalOriginOffset(i), p = this.measurements, m = p.anchorSize, h = p.surfaceSize, g = (t = {}, t[a] = s, t[o] = d, t);
      m.width / h.width > lt.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (a = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(g), this.adapter.setTransformOrigin(a + " " + o), this.adapter.setPosition(g), this.adapter.setMaxHeight(n ? n + "px" : ""), this.hasBit(i, z.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
    }, e.prototype.getAutoLayoutmeasurements = function() {
      var t = this.adapter.getAnchorDimensions(), i = this.adapter.getBodyDimensions(), n = this.adapter.getWindowDimensions(), o = this.adapter.getWindowScroll();
      return t || (t = {
        top: this.position.y,
        right: this.position.x,
        bottom: this.position.y,
        left: this.position.x,
        width: 0,
        height: 0
      }), {
        anchorSize: t,
        bodySize: i,
        surfaceSize: this.dimensions,
        viewportDistance: {
          // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
          top: t.top,
          right: n.width - t.right,
          bottom: n.height - t.bottom,
          left: t.left
          // tslint:enable:object-literal-sort-keys
        },
        viewportSize: n,
        windowScroll: o
      };
    }, e.prototype.getoriginCorner = function() {
      var t = this.originCorner, i = this.measurements, n = i.viewportDistance, o = i.anchorSize, a = i.surfaceSize, s = e.numbers.MARGIN_TO_EDGE, d = this.hasBit(this.anchorCorner, z.BOTTOM), p, m;
      d ? (p = n.top - s + this.anchorMargin.bottom, m = n.bottom - s - this.anchorMargin.bottom) : (p = n.top - s + this.anchorMargin.top, m = n.bottom - s + o.height - this.anchorMargin.top);
      var h = m - a.height > 0;
      !h && p > m && (t = this.setBit(t, z.BOTTOM));
      var g = this.adapter.isRtl(), f = this.hasBit(this.anchorCorner, z.FLIP_RTL), C = this.hasBit(this.anchorCorner, z.RIGHT) || this.hasBit(t, z.RIGHT), A = !1;
      g && f ? A = !C : A = C;
      var P, E;
      A ? (P = n.left + o.width + this.anchorMargin.right, E = n.right - this.anchorMargin.right) : (P = n.left + this.anchorMargin.left, E = n.right + o.width - this.anchorMargin.left);
      var S = P - a.width > 0, N = E - a.width > 0, re = this.hasBit(t, z.FLIP_RTL) && this.hasBit(t, z.RIGHT);
      return N && re && g || !S && re ? t = this.unsetBit(t, z.RIGHT) : (S && A && g || S && !A && C || !N && P >= E) && (t = this.setBit(t, z.RIGHT)), t;
    }, e.prototype.getMenuSurfaceMaxHeight = function(t) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var i = this.measurements.viewportDistance, n = 0, o = this.hasBit(t, z.BOTTOM), a = this.hasBit(this.anchorCorner, z.BOTTOM), s = e.numbers.MARGIN_TO_EDGE;
      return o ? (n = i.top + this.anchorMargin.top - s, a || (n += this.measurements.anchorSize.height)) : (n = i.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - s, a && (n -= this.measurements.anchorSize.height)), n;
    }, e.prototype.getHorizontalOriginOffset = function(t) {
      var i = this.measurements.anchorSize, n = this.hasBit(t, z.RIGHT), o = this.hasBit(this.anchorCorner, z.RIGHT);
      if (n) {
        var a = o ? i.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? a - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : a;
      }
      return o ? i.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(t) {
      var i = this.measurements.anchorSize, n = this.hasBit(t, z.BOTTOM), o = this.hasBit(this.anchorCorner, z.BOTTOM), a = 0;
      return n ? a = o ? i.height - this.anchorMargin.top : -this.anchorMargin.bottom : a = o ? i.height + this.anchorMargin.bottom : this.anchorMargin.top, a;
    }, e.prototype.adjustPositionForHoistedElement = function(t) {
      var i, n, o = this.measurements, a = o.windowScroll, s = o.viewportDistance, d = o.surfaceSize, p = o.viewportSize, m = Object.keys(t);
      try {
        for (var h = ge(m), g = h.next(); !g.done; g = h.next()) {
          var f = g.value, C = t[f] || 0;
          if (this.isHorizontallyCenteredOnViewport && (f === "left" || f === "right")) {
            t[f] = (p.width - d.width) / 2;
            continue;
          }
          C += s[f], this.isFixedPosition || (f === "top" ? C += a.y : f === "bottom" ? C -= a.y : f === "left" ? C += a.x : C -= a.x), t[f] = C;
        }
      } catch (A) {
        i = { error: A };
      } finally {
        try {
          g && !g.done && (n = h.return) && n.call(h);
        } finally {
          if (i) throw i.error;
        }
      }
    }, e.prototype.maybeRestoreFocus = function() {
      var t = this.adapter.isFocused(), i = document.activeElement && this.adapter.isElementInContainer(document.activeElement);
      (t || i) && this.adapter.restoreFocus();
    }, e.prototype.hasBit = function(t, i) {
      return !!(t & i);
    }, e.prototype.setBit = function(t, i) {
      return t | i;
    }, e.prototype.unsetBit = function(t, i) {
      return t ^ i;
    }, e.prototype.isFinite = function(t) {
      return typeof t == "number" && isFinite(t);
    }, e;
  }(le)
);
const Ao = {
  TOP_LEFT: Y.TOP_LEFT,
  TOP_RIGHT: Y.TOP_RIGHT,
  BOTTOM_LEFT: Y.BOTTOM_LEFT,
  BOTTOM_RIGHT: Y.BOTTOM_RIGHT,
  TOP_START: Y.TOP_START,
  TOP_END: Y.TOP_END,
  BOTTOM_START: Y.BOTTOM_START,
  BOTTOM_END: Y.BOTTOM_END
};
class B extends $e {
  constructor() {
    super(...arguments), this.mdcFoundationClass = An, this.absolute = !1, this.fullwidth = !1, this.fixed = !1, this.x = null, this.y = null, this.quick = !1, this.open = !1, this.stayOpenOnBodyClick = !1, this.bitwiseCorner = Y.TOP_START, this.previousMenuCorner = null, this.menuCorner = "START", this.corner = "TOP_START", this.styleTop = "", this.styleLeft = "", this.styleRight = "", this.styleBottom = "", this.styleMaxHeight = "", this.styleTransformOrigin = "", this.anchor = null, this.previouslyFocused = null, this.previousAnchor = null, this.onBodyClickBound = () => {
    };
  }
  render() {
    const e = {
      "mdc-menu-surface--fixed": this.fixed,
      "mdc-menu-surface--fullwidth": this.fullwidth
    }, t = {
      top: this.styleTop,
      left: this.styleLeft,
      right: this.styleRight,
      bottom: this.styleBottom,
      "max-height": this.styleMaxHeight,
      "transform-origin": this.styleTransformOrigin
    };
    return u`
      <div
          class="mdc-menu-surface ${Q(e)}"
          style="${yn(t)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, xt(this.mdcRoot)), { hasAnchor: () => !!this.anchor, notifyClose: () => {
      const e = { bubbles: !0, composed: !0 }, t = new CustomEvent("closed", e);
      this.open = !1, this.mdcRoot.dispatchEvent(t);
    }, notifyClosing: () => {
      const e = { bubbles: !0, composed: !0 }, t = new CustomEvent("closing", e);
      this.mdcRoot.dispatchEvent(t);
    }, notifyOpen: () => {
      const e = { bubbles: !0, composed: !0 }, t = new CustomEvent("opened", e);
      this.open = !0, this.mdcRoot.dispatchEvent(t);
    }, isElementInContainer: () => !1, isRtl: () => this.mdcRoot ? getComputedStyle(this.mdcRoot).direction === "rtl" : !1, setTransformOrigin: (e) => {
      this.mdcRoot && (this.styleTransformOrigin = e);
    }, isFocused: () => vn(this), saveFocus: () => {
      const e = si(), t = e.length;
      t || (this.previouslyFocused = null), this.previouslyFocused = e[t - 1];
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
l([
  w(".mdc-menu-surface")
], B.prototype, "mdcRoot", void 0);
l([
  w("slot")
], B.prototype, "slotElement", void 0);
l([
  c({ type: Boolean }),
  L(function(r) {
    this.mdcFoundation && !this.fixed && this.mdcFoundation.setIsHoisted(r);
  })
], B.prototype, "absolute", void 0);
l([
  c({ type: Boolean })
], B.prototype, "fullwidth", void 0);
l([
  c({ type: Boolean }),
  L(function(r) {
    this.mdcFoundation && !this.absolute && this.mdcFoundation.setFixedPosition(r);
  })
], B.prototype, "fixed", void 0);
l([
  c({ type: Number }),
  L(function(r) {
    this.mdcFoundation && this.y !== null && r !== null && (this.mdcFoundation.setAbsolutePosition(r, this.y), this.mdcFoundation.setAnchorMargin({ left: r, top: this.y, right: -r, bottom: this.y }));
  })
], B.prototype, "x", void 0);
l([
  c({ type: Number }),
  L(function(r) {
    this.mdcFoundation && this.x !== null && r !== null && (this.mdcFoundation.setAbsolutePosition(this.x, r), this.mdcFoundation.setAnchorMargin({ left: this.x, top: r, right: -this.x, bottom: r }));
  })
], B.prototype, "y", void 0);
l([
  c({ type: Boolean }),
  L(function(r) {
    this.mdcFoundation && this.mdcFoundation.setQuickOpen(r);
  })
], B.prototype, "quick", void 0);
l([
  c({ type: Boolean, reflect: !0 }),
  L(function(r, e) {
    this.mdcFoundation && (r ? this.mdcFoundation.open() : e !== void 0 && this.mdcFoundation.close());
  })
], B.prototype, "open", void 0);
l([
  c({ type: Boolean })
], B.prototype, "stayOpenOnBodyClick", void 0);
l([
  _(),
  L(function(r) {
    this.mdcFoundation && (r ? this.mdcFoundation.setAnchorCorner(r) : this.mdcFoundation.setAnchorCorner(r));
  })
], B.prototype, "bitwiseCorner", void 0);
l([
  c({ type: String }),
  L(function(r) {
    if (this.mdcFoundation) {
      const e = r === "START" || r === "END", t = this.previousMenuCorner === null, i = !t && r !== this.previousMenuCorner;
      e && (i || t && r === "END") && (this.bitwiseCorner = this.bitwiseCorner ^ z.RIGHT, this.mdcFoundation.flipCornerHorizontally(), this.previousMenuCorner = r);
    }
  })
], B.prototype, "menuCorner", void 0);
l([
  c({ type: String }),
  L(function(r) {
    if (this.mdcFoundation && r) {
      let e = Ao[r];
      this.menuCorner === "END" && (e = e ^ z.RIGHT), this.bitwiseCorner = e;
    }
  })
], B.prototype, "corner", void 0);
l([
  _()
], B.prototype, "styleTop", void 0);
l([
  _()
], B.prototype, "styleLeft", void 0);
l([
  _()
], B.prototype, "styleRight", void 0);
l([
  _()
], B.prototype, "styleBottom", void 0);
l([
  _()
], B.prototype, "styleMaxHeight", void 0);
l([
  _()
], B.prototype, "styleTransformOrigin", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const So = W`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Gt = class extends B {
};
Gt.styles = [So];
Gt = l([
  V("mwc-menu-surface")
], Gt);
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
var Ct = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, We = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected"
}, Io = {
  FOCUS_ROOT_INDEX: -1
}, Me;
(function(r) {
  r[r.NONE = 0] = "NONE", r[r.LIST_ROOT = 1] = "LIST_ROOT", r[r.FIRST_ITEM = 2] = "FIRST_ITEM", r[r.LAST_ITEM = 3] = "LAST_ITEM";
})(Me || (Me = {}));
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
var To = (
  /** @class */
  function(r) {
    ue(e, r);
    function e(t) {
      var i = r.call(this, D(D({}, e.defaultAdapter), t)) || this;
      return i.closeAnimationEndTimerId = 0, i.defaultFocusState = Me.LIST_ROOT, i.selectedIndex = -1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ct;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return We;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Io;
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
    }, e.prototype.handleKeydown = function(t) {
      var i = t.key, n = t.keyCode, o = i === "Tab" || n === 9;
      o && this.adapter.closeSurface(
        /** skipRestoreFocus */
        !0
      );
    }, e.prototype.handleItemAction = function(t) {
      var i = this, n = this.adapter.getElementIndex(t);
      n < 0 || (this.adapter.notifySelected({ index: n }), this.adapter.closeSurface(), this.closeAnimationEndTimerId = setTimeout(function() {
        var o = i.adapter.getElementIndex(t);
        o >= 0 && i.adapter.isSelectableItemAtIndex(o) && i.setSelectedIndex(o);
      }, An.numbers.TRANSITION_CLOSE_DURATION));
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Me.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Me.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Me.NONE:
          break;
        default:
          this.adapter.focusListRoot();
          break;
      }
    }, e.prototype.setDefaultFocusState = function(t) {
      this.defaultFocusState = t;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(t) {
      if (this.validatedIndex(t), !this.adapter.isSelectableItemAtIndex(t))
        throw new Error("MDCMenuFoundation: No selection group at specified index.");
      var i = this.adapter.getSelectedSiblingOfItemAtIndex(t);
      i >= 0 && (this.adapter.removeAttributeFromElementAtIndex(i, We.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(i, Ct.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(t, Ct.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(t, We.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = t;
    }, e.prototype.setEnabled = function(t, i) {
      this.validatedIndex(t), i ? (this.adapter.removeClassFromElementAtIndex(t, T.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, We.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(t, T.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, We.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(t) {
      var i = this.adapter.getMenuItemCount(), n = t >= 0 && t < i;
      if (!n)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(le)
);
class H extends $e {
  constructor() {
    super(...arguments), this.mdcFoundationClass = To, this.listElement_ = null, this.anchor = null, this.open = !1, this.quick = !1, this.wrapFocus = !1, this.innerRole = "menu", this.corner = "TOP_START", this.x = null, this.y = null, this.absolute = !1, this.multi = !1, this.activatable = !1, this.fixed = !1, this.forceGroupSelection = !1, this.fullwidth = !1, this.menuCorner = "START", this.stayOpenOnBodyClick = !1, this.defaultFocus = "LIST_ROOT", this._listUpdateComplete = null;
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
    return u`
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
      addClassToElementAtIndex: (e, t) => {
        const i = this.listElement;
        if (!i)
          return;
        const n = i.items[e];
        n && (t === "mdc-menu-item--selected" ? this.forceGroupSelection && !n.selected && i.toggle(e, !0) : n.classList.add(t));
      },
      removeClassFromElementAtIndex: (e, t) => {
        const i = this.listElement;
        if (!i)
          return;
        const n = i.items[e];
        n && (t === "mdc-menu-item--selected" ? n.selected && i.toggle(e, !1) : n.classList.remove(t));
      },
      addAttributeToElementAtIndex: (e, t, i) => {
        const n = this.listElement;
        if (!n)
          return;
        const o = n.items[e];
        o && o.setAttribute(t, i);
      },
      removeAttributeFromElementAtIndex: (e, t) => {
        const i = this.listElement;
        if (!i)
          return;
        const n = i.items[e];
        n && n.removeAttribute(t);
      },
      elementContainsClass: (e, t) => e.classList.contains(t),
      closeSurface: () => {
        this.open = !1;
      },
      getElementIndex: (e) => {
        const t = this.listElement;
        return t ? t.items.indexOf(e) : -1;
      },
      notifySelected: () => {
      },
      getMenuItemCount: () => {
        const e = this.listElement;
        return e ? e.items.length : 0;
      },
      focusItemAtIndex: (e) => {
        const t = this.listElement;
        if (!t)
          return;
        const i = t.items[e];
        i && i.focus();
      },
      focusListRoot: () => {
        this.listElement && this.listElement.focus();
      },
      getSelectedSiblingOfItemAtIndex: (e) => {
        const t = this.listElement;
        if (!t)
          return -1;
        const i = t.items[e];
        if (!i || !i.group)
          return -1;
        for (let n = 0; n < t.items.length; n++) {
          if (n === e)
            continue;
          const o = t.items[n];
          if (o.selected && o.group === i.group)
            return n;
        }
        return -1;
      },
      isSelectableItemAtIndex: (e) => {
        const t = this.listElement;
        if (!t)
          return !1;
        const i = t.items[e];
        return i ? i.hasAttribute("group") : !1;
      }
    };
  }
  onKeydown(e) {
    this.mdcFoundation && this.mdcFoundation.handleKeydown(e);
  }
  onAction(e) {
    const t = this.listElement;
    if (this.mdcFoundation && t) {
      const i = e.detail.index, n = t.items[i];
      n && this.mdcFoundation.handleItemAction(n);
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
    const t = this.listElement;
    t && t.select(e);
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
    const t = this.listElement;
    t && t.focusItemAtIndex(e);
  }
  layout(e = !0) {
    const t = this.listElement;
    t && t.layout(e);
  }
}
l([
  w(".mdc-menu")
], H.prototype, "mdcRoot", void 0);
l([
  w("slot")
], H.prototype, "slotElement", void 0);
l([
  c({ type: Object })
], H.prototype, "anchor", void 0);
l([
  c({ type: Boolean, reflect: !0 })
], H.prototype, "open", void 0);
l([
  c({ type: Boolean })
], H.prototype, "quick", void 0);
l([
  c({ type: Boolean })
], H.prototype, "wrapFocus", void 0);
l([
  c({ type: String })
], H.prototype, "innerRole", void 0);
l([
  c({ type: String })
], H.prototype, "corner", void 0);
l([
  c({ type: Number })
], H.prototype, "x", void 0);
l([
  c({ type: Number })
], H.prototype, "y", void 0);
l([
  c({ type: Boolean })
], H.prototype, "absolute", void 0);
l([
  c({ type: Boolean })
], H.prototype, "multi", void 0);
l([
  c({ type: Boolean })
], H.prototype, "activatable", void 0);
l([
  c({ type: Boolean })
], H.prototype, "fixed", void 0);
l([
  c({ type: Boolean })
], H.prototype, "forceGroupSelection", void 0);
l([
  c({ type: Boolean })
], H.prototype, "fullwidth", void 0);
l([
  c({ type: String })
], H.prototype, "menuCorner", void 0);
l([
  c({ type: Boolean })
], H.prototype, "stayOpenOnBodyClick", void 0);
l([
  c({ type: String }),
  L(function(r) {
    this.mdcFoundation && this.mdcFoundation.setDefaultFocusState(Me[r]);
  })
], H.prototype, "defaultFocus", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ro = W`mwc-list ::slotted([mwc-list-item]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let qt = class extends H {
};
qt.styles = [Ro];
qt = l([
  V("mwc-menu")
], qt);
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
var Lo = ["input", "button", "textarea", "select"], Hi = function(r) {
  var e = r.target;
  if (e) {
    var t = ("" + e.tagName).toLowerCase();
    Lo.indexOf(t) === -1 && r.preventDefault();
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
function Oo() {
  var r = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return r;
}
function Ni(r, e) {
  for (var t = /* @__PURE__ */ new Map(), i = 0; i < r; i++) {
    var n = e(i).trim();
    if (n) {
      var o = n[0].toLowerCase();
      t.has(o) || t.set(o, []), t.get(o).push({ text: n.toLowerCase(), index: i });
    }
  }
  return t.forEach(function(a) {
    a.sort(function(s, d) {
      return s.index - d.index;
    });
  }), t;
}
function jt(r, e) {
  var t = r.nextChar, i = r.focusItemAtIndex, n = r.sortedIndexByFirstChar, o = r.focusedItemIndex, a = r.skipFocus, s = r.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    zo(e);
  }, X.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + t;
  var d;
  return e.typeaheadBuffer.length === 1 ? d = Fo(n, o, s, e) : d = Mo(n, s, e), d !== -1 && !a && i(d), d;
}
function Fo(r, e, t, i) {
  var n = i.typeaheadBuffer[0], o = r.get(n);
  if (!o)
    return -1;
  if (n === i.currentFirstChar && o[i.sortedIndexCursor].index === e) {
    i.sortedIndexCursor = (i.sortedIndexCursor + 1) % o.length;
    var a = o[i.sortedIndexCursor].index;
    if (!t(a))
      return a;
  }
  i.currentFirstChar = n;
  var s = -1, d;
  for (d = 0; d < o.length; d++)
    if (!t(o[d].index)) {
      s = d;
      break;
    }
  for (; d < o.length; d++)
    if (o[d].index > e && !t(o[d].index)) {
      s = d;
      break;
    }
  return s !== -1 ? (i.sortedIndexCursor = s, o[i.sortedIndexCursor].index) : -1;
}
function Mo(r, e, t) {
  var i = t.typeaheadBuffer[0], n = r.get(i);
  if (!n)
    return -1;
  var o = n[t.sortedIndexCursor];
  if (o.text.lastIndexOf(t.typeaheadBuffer, 0) === 0 && !e(o.index))
    return o.index;
  for (var a = (t.sortedIndexCursor + 1) % n.length, s = -1; a !== t.sortedIndexCursor; ) {
    var d = n[a], p = d.text.lastIndexOf(t.typeaheadBuffer, 0) === 0, m = !e(d.index);
    if (p && m) {
      s = a;
      break;
    }
    a = (a + 1) % n.length;
  }
  return s !== -1 ? (t.sortedIndexCursor = s, n[t.sortedIndexCursor].index) : -1;
}
function Sn(r) {
  return r.typeaheadBuffer.length > 0;
}
function zo(r) {
  r.typeaheadBuffer = "";
}
function Do(r, e) {
  var t = r.event, i = r.isTargetListItem, n = r.focusedItemIndex, o = r.focusItemAtIndex, a = r.sortedIndexByFirstChar, s = r.isItemAtIndexDisabled, d = $(t) === "ArrowLeft", p = $(t) === "ArrowUp", m = $(t) === "ArrowRight", h = $(t) === "ArrowDown", g = $(t) === "Home", f = $(t) === "End", C = $(t) === "Enter", A = $(t) === "Spacebar";
  if (t.ctrlKey || t.metaKey || d || p || m || h || g || f || C)
    return -1;
  var P = !A && t.key.length === 1;
  if (P) {
    Hi(t);
    var E = {
      focusItemAtIndex: o,
      focusedItemIndex: n,
      nextChar: t.key.toLowerCase(),
      sortedIndexByFirstChar: a,
      skipFocus: !1,
      isItemAtIndexDisabled: s
    };
    return jt(E, e);
  }
  if (!A)
    return -1;
  i && Hi(t);
  var S = i && Sn(e);
  if (S) {
    var E = {
      focusItemAtIndex: o,
      focusedItemIndex: n,
      nextChar: " ",
      sortedIndexByFirstChar: a,
      skipFocus: !1,
      isItemAtIndexDisabled: s
    };
    return jt(E, e);
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
var M = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, At = {
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
}, Fe = {
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
var Po = (
  /** @class */
  function(r) {
    ue(e, r);
    function e(t, i) {
      i === void 0 && (i = {});
      var n = r.call(this, D(D({}, e.defaultAdapter), t)) || this;
      return n.disabled = !1, n.isMenuOpen = !1, n.useDefaultValidation = !0, n.customValidity = !0, n.lastSelectedIndex = Fe.UNSET_INDEX, n.clickDebounceTimeout = 0, n.recentlyClicked = !1, n.leadingIcon = i.leadingIcon, n.helperText = i.helperText, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return M;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Fe;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return At;
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
    }, e.prototype.setSelectedIndex = function(t, i, n) {
      i === void 0 && (i = !1), n === void 0 && (n = !1), !(t >= this.adapter.getMenuItemCount()) && (t === Fe.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()), this.adapter.setSelectedIndex(t), i && this.adapter.closeMenu(), !n && this.lastSelectedIndex !== t && this.handleChange(), this.lastSelectedIndex = t);
    }, e.prototype.setValue = function(t, i) {
      i === void 0 && (i = !1);
      var n = this.adapter.getMenuItemValues().indexOf(t);
      this.setSelectedIndex(
        n,
        /** closeMenu */
        !1,
        i
      );
    }, e.prototype.getValue = function() {
      var t = this.adapter.getSelectedIndex(), i = this.adapter.getMenuItemValues();
      return t !== Fe.UNSET_INDEX ? i[t] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(t) {
      this.disabled = t, this.disabled ? (this.adapter.addClass(M.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(M.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(M.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(t) {
      this.helperText && this.helperText.setContent(t);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var t = this.getValue().length > 0, i = this.adapter.hasClass(M.FOCUSED), n = t || i, o = this.adapter.hasClass(M.REQUIRED);
        this.notchOutline(n), this.adapter.floatLabel(n), this.adapter.setLabelRequired(o);
      }
    }, e.prototype.layoutOptions = function() {
      var t = this.adapter.getMenuItemValues(), i = t.indexOf(this.getValue());
      this.setSelectedIndex(
        i,
        /** closeMenu */
        !1,
        /** skipNotify */
        !0
      );
    }, e.prototype.handleMenuOpened = function() {
      if (this.adapter.getMenuItemValues().length !== 0) {
        var t = this.getSelectedIndex(), i = t >= 0 ? t : 0;
        this.adapter.focusMenuItemAtIndex(i);
      }
    }, e.prototype.handleMenuClosing = function() {
      this.adapter.setSelectAnchorAttr("aria-expanded", "false");
    }, e.prototype.handleMenuClosed = function() {
      this.adapter.removeClass(M.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var t = this.adapter.hasClass(M.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(t) {
      this.setSelectedIndex(
        t,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(M.FOCUSED), this.layout(), this.adapter.activateBottomLine();
    }, e.prototype.handleBlur = function() {
      this.isMenuOpen || this.blur();
    }, e.prototype.handleClick = function(t) {
      if (!(this.disabled || this.recentlyClicked)) {
        if (this.setClickDebounceTimeout(), this.isMenuOpen) {
          this.adapter.closeMenu();
          return;
        }
        this.adapter.setRippleCenter(t), this.openMenu();
      }
    }, e.prototype.handleKeydown = function(t) {
      if (!(this.isMenuOpen || !this.adapter.hasClass(M.FOCUSED))) {
        var i = $(t) === y.ENTER, n = $(t) === y.SPACEBAR, o = $(t) === y.ARROW_UP, a = $(t) === y.ARROW_DOWN, s = t.ctrlKey || t.metaKey;
        if (!s && (!n && t.key && t.key.length === 1 || n && this.adapter.isTypeaheadInProgress())) {
          var d = n ? " " : t.key, p = this.adapter.typeaheadMatchItem(d, this.getSelectedIndex());
          p >= 0 && this.setSelectedIndex(p), t.preventDefault();
          return;
        }
        !i && !n && !o && !a || (o && this.getSelectedIndex() > 0 ? this.setSelectedIndex(this.getSelectedIndex() - 1) : a && this.getSelectedIndex() < this.adapter.getMenuItemCount() - 1 && this.setSelectedIndex(this.getSelectedIndex() + 1), this.openMenu(), t.preventDefault());
      }
    }, e.prototype.notchOutline = function(t) {
      if (this.adapter.hasOutline()) {
        var i = this.adapter.hasClass(M.FOCUSED);
        if (t) {
          var n = Fe.LABEL_SCALE, o = this.adapter.getLabelWidth() * n;
          this.adapter.notchOutline(o);
        } else i || this.adapter.closeOutline();
      }
    }, e.prototype.setLeadingIconAriaLabel = function(t) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(t);
    }, e.prototype.setLeadingIconContent = function(t) {
      this.leadingIcon && this.leadingIcon.setContent(t);
    }, e.prototype.getUseDefaultValidation = function() {
      return this.useDefaultValidation;
    }, e.prototype.setUseDefaultValidation = function(t) {
      this.useDefaultValidation = t;
    }, e.prototype.setValid = function(t) {
      this.useDefaultValidation || (this.customValidity = t), this.adapter.setSelectAnchorAttr("aria-invalid", (!t).toString()), t ? (this.adapter.removeClass(M.INVALID), this.adapter.removeMenuClass(M.MENU_INVALID)) : (this.adapter.addClass(M.INVALID), this.adapter.addMenuClass(M.MENU_INVALID)), this.syncHelperTextValidity(t);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(M.REQUIRED) && !this.adapter.hasClass(M.DISABLED) ? this.getSelectedIndex() !== Fe.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(t) {
      t ? this.adapter.addClass(M.REQUIRED) : this.adapter.removeClass(M.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", t.toString()), this.adapter.setLabelRequired(t);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var t = this.adapter.getAnchorElement();
      t && (this.adapter.setMenuAnchorElement(t), this.adapter.setMenuAnchorCorner(Y.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(M.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(M.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(M.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var t = this.adapter.hasClass(M.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(t) {
      if (this.helperText) {
        this.helperText.setValidity(t);
        var i = this.helperText.isVisible(), n = this.helperText.getId();
        i && n ? this.adapter.setSelectAnchorAttr(At.ARIA_DESCRIBEDBY, n) : this.adapter.removeSelectAnchorAttr(At.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var t = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        t.recentlyClicked = !1;
      }, Fe.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(le)
);
const Vi = (r = {}) => {
  const e = {};
  for (const t in r)
    e[t] = r[t];
  return Object.assign({ badInput: !1, customError: !1, patternMismatch: !1, rangeOverflow: !1, rangeUnderflow: !1, stepMismatch: !1, tooLong: !1, tooShort: !1, typeMismatch: !1, valid: !0, valueMissing: !1 }, e);
};
class I extends Ae {
  constructor() {
    super(...arguments), this.mdcFoundationClass = Po, this.disabled = !1, this.outlined = !1, this.label = "", this.outlineOpen = !1, this.outlineWidth = 0, this.value = "", this.selectedText = "", this.icon = "", this.menuOpen = !1, this.helper = "", this.validateOnInitialRender = !1, this.validationMessage = "", this.required = !1, this.naturalMenuWidth = !1, this.isUiValid = !0, this.fixedMenuPosition = !1, this.typeaheadState = Oo(), this.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), this.menuElement_ = null, this.listeners = [], this.onBodyClickBound = () => {
    }, this._menuUpdateComplete = null, this.valueSetDirectly = !1, this.validityTransform = null, this._validity = Vi();
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
    }, t = {
      "mdc-select__menu--invalid": !this.isUiValid
    }, i = this.label ? "label" : void 0, n = this.shouldRenderHelperText ? "helper-text" : void 0;
    return u`
      <div
          class="mdc-select ${Q(e)}">
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
            aria-labelledby=${O(i)}
            aria-required=${this.required}
            aria-describedby=${O(n)}
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
            class="mdc-select__menu mdc-menu mdc-menu-surface ${Q(t)}"
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
    return this.outlined ? we : u`
      <span class="mdc-select__ripple"></span>
    `;
  }
  renderOutline() {
    return this.outlined ? u`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>` : we;
  }
  renderLabel() {
    return this.label ? u`
      <span
          .floatingLabelFoundation=${En(this.label)}
          id="label">${this.label}</span>
    ` : we;
  }
  renderLeadingIcon() {
    return this.icon ? u`<mwc-icon class="mdc-select__icon"><div>${this.icon}</div></mwc-icon>` : we;
  }
  renderLineRipple() {
    return this.outlined ? we : u`
      <span .lineRippleFoundation=${Cn()}></span>
    `;
  }
  renderHelperText() {
    if (!this.shouldRenderHelperText)
      return we;
    const e = this.validationMessage && !this.isUiValid;
    return u`
        <p
          class="mdc-select-helper-text ${Q({
      "mdc-select-helper-text--validation-msg": e
    })}"
          id="helper-text">${e ? this.validationMessage : this.helper}</p>`;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, xt(this.mdcRoot)), { activateBottomLine: () => {
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
      const t = new Event("change", { bubbles: !0 });
      this.dispatchEvent(t);
    }, setSelectedText: (e) => this.selectedText = e, isSelectAnchorFocused: () => {
      const e = this.anchorElement;
      return e ? e.getRootNode().activeElement === e : !1;
    }, getSelectAnchorAttr: (e) => {
      const t = this.anchorElement;
      return t ? t.getAttribute(e) : null;
    }, setSelectAnchorAttr: (e, t) => {
      const i = this.anchorElement;
      i && i.setAttribute(e, t);
    }, removeSelectAnchorAttr: (e) => {
      const t = this.anchorElement;
      t && t.removeAttribute(e);
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
      const t = this.menuElement;
      t && (t.wrapFocus = e);
    }, focusMenuItemAtIndex: (e) => {
      const t = this.menuElement;
      if (!t)
        return;
      const i = t.items[e];
      i && i.focus();
    }, getMenuItemCount: () => {
      const e = this.menuElement;
      return e ? e.items.length : 0;
    }, getMenuItemValues: () => {
      const e = this.menuElement;
      return e ? e.items.map((i) => i.value) : [];
    }, getMenuItemTextAtIndex: (e) => {
      const t = this.menuElement;
      if (!t)
        return "";
      const i = t.items[e];
      return i ? i.text : "";
    }, getSelectedIndex: () => this.index, setSelectedIndex: () => {
    }, isTypeaheadInProgress: () => Sn(this.typeaheadState), typeaheadMatchItem: (e, t) => {
      if (!this.menuElement)
        return -1;
      const i = {
        focusItemAtIndex: (o) => {
          this.menuElement.focusItemAtIndex(o);
        },
        focusedItemIndex: t || this.menuElement.getFocusedItemIndex(),
        nextChar: e,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus: !1,
        isItemAtIndexDisabled: (o) => this.items[o].disabled
      }, n = jt(i, this.typeaheadState);
      return n !== -1 && this.select(n), n;
    } });
  }
  checkValidity() {
    const e = this._checkValidity(this.value);
    if (!e) {
      const t = new Event("invalid", { bubbles: !1, cancelable: !0 });
      this.dispatchEvent(t);
    }
    return e;
  }
  reportValidity() {
    const e = this.checkValidity();
    return this.isUiValid = e, e;
  }
  _checkValidity(e) {
    const t = this.formElement.validity;
    let i = Vi(t);
    if (this.validityTransform) {
      const n = this.validityTransform(e, i);
      i = Object.assign(Object.assign({}, i), n);
    }
    return this._validity = i, this._validity.valid;
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
      !this.items.length && this.slotElement && this.slotElement.assignedNodes({ flatten: !0 }).length && (await new Promise((i) => requestAnimationFrame(i)), await this.layout());
      const t = this.items.length && this.items[0].value === "";
      if (!this.value && t) {
        this.select(0);
        return;
      }
      this.selectByValue(this.value);
    }
    this.sortedIndexByFirstChar = Ni(this.items.length, (t) => this.items[t].text);
  }
  onItemsUpdated() {
    this.sortedIndexByFirstChar = Ni(this.items.length, (e) => this.items[e].text);
  }
  select(e) {
    const t = this.menuElement;
    t && t.select(e);
  }
  selectByValue(e) {
    let t = -1;
    for (let i = 0; i < this.items.length; i++)
      if (this.items[i].value === e) {
        t = i;
        break;
      }
    this.valueSetDirectly = !0, this.select(t), this.mdcFoundation.handleChange();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const e of this.listeners)
      e.target.removeEventListener(e.name, e.cb);
  }
  focus() {
    const e = new CustomEvent("focus"), t = this.anchorElement;
    t && (t.dispatchEvent(e), t.focus());
  }
  blur() {
    const e = new CustomEvent("blur"), t = this.anchorElement;
    t && (t.dispatchEvent(e), t.blur());
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
      const t = e.target.getBoundingClientRect();
      let i = 0;
      "touches" in e ? i = e.touches[0].clientX : i = e.clientX;
      const n = i - t.left;
      this.mdcFoundation.handleClick(n);
    }
  }
  onKeydown(e) {
    const t = $(e) === y.ARROW_UP, i = $(e) === y.ARROW_DOWN;
    if (i || t) {
      const n = t && this.index > 0, o = i && this.index < this.items.length - 1;
      n ? this.select(this.index - 1) : o && this.select(this.index + 1), e.preventDefault(), this.mdcFoundation.openMenu();
      return;
    }
    this.mdcFoundation.handleKeydown(e);
  }
  // must capture to run before list foundation captures event
  handleTypeahead(e) {
    if (!this.menuElement)
      return;
    const t = this.menuElement.getFocusedItemIndex(), i = bn(e.target) ? e.target : null, n = i ? i.hasAttribute("mwc-list-item") : !1, o = {
      event: e,
      focusItemAtIndex: (a) => {
        this.menuElement.focusItemAtIndex(a);
      },
      focusedItemIndex: t,
      isTargetListItem: n,
      sortedIndexByFirstChar: this.sortedIndexByFirstChar,
      isItemAtIndexDisabled: (a) => this.items[a].disabled
    };
    Do(o, this.typeaheadState);
  }
  async onSelected(e) {
    this.mdcFoundation || await this.updateComplete, this.mdcFoundation.handleMenuItemAction(e.detail.index);
    const t = this.items[e.detail.index];
    t && (this.value = t.value);
  }
  onOpened() {
    this.mdcFoundation && (this.menuOpen = !0, this.mdcFoundation.handleMenuOpened());
  }
  onClosed() {
    this.mdcFoundation && (this.menuOpen = !1, this.mdcFoundation.handleMenuClosed());
  }
  async layout(e = !0) {
    this.mdcFoundation && this.mdcFoundation.layout(), await this.updateComplete;
    const t = this.menuElement;
    t && t.layout(e);
    const i = this.labelElement;
    if (!i) {
      this.outlineOpen = !1;
      return;
    }
    const n = !!this.label && !!this.value;
    if (i.floatingLabelFoundation.float(n), !this.outlined)
      return;
    this.outlineOpen = n, await this.updateComplete;
    const o = i.floatingLabelFoundation.getWidth();
    this.outlineOpen && (this.outlineWidth = o);
  }
  async layoutOptions() {
    this.mdcFoundation && this.mdcFoundation.layoutOptions();
  }
}
l([
  w(".mdc-select")
], I.prototype, "mdcRoot", void 0);
l([
  w(".formElement")
], I.prototype, "formElement", void 0);
l([
  w("slot")
], I.prototype, "slotElement", void 0);
l([
  w("select")
], I.prototype, "nativeSelectElement", void 0);
l([
  w("input")
], I.prototype, "nativeInputElement", void 0);
l([
  w(".mdc-line-ripple")
], I.prototype, "lineRippleElement", void 0);
l([
  w(".mdc-floating-label")
], I.prototype, "labelElement", void 0);
l([
  w("mwc-notched-outline")
], I.prototype, "outlineElement", void 0);
l([
  w(".mdc-menu")
], I.prototype, "menuElement", void 0);
l([
  w(".mdc-select__anchor")
], I.prototype, "anchorElement", void 0);
l([
  c({ type: Boolean, attribute: "disabled", reflect: !0 }),
  L(function(r) {
    this.mdcFoundation && this.mdcFoundation.setDisabled(r);
  })
], I.prototype, "disabled", void 0);
l([
  c({ type: Boolean }),
  L(function(r, e) {
    e !== void 0 && this.outlined !== e && this.layout(!1);
  })
], I.prototype, "outlined", void 0);
l([
  c({ type: String }),
  L(function(r, e) {
    e !== void 0 && this.label !== e && this.layout(!1);
  })
], I.prototype, "label", void 0);
l([
  _()
], I.prototype, "outlineOpen", void 0);
l([
  _()
], I.prototype, "outlineWidth", void 0);
l([
  c({ type: String }),
  L(function(r) {
    if (this.mdcFoundation) {
      const e = this.selected === null && !!r, t = this.selected && this.selected.value !== r;
      (e || t) && this.selectByValue(r), this.reportValidity();
    }
  })
], I.prototype, "value", void 0);
l([
  _()
], I.prototype, "selectedText", void 0);
l([
  c({ type: String })
], I.prototype, "icon", void 0);
l([
  _()
], I.prototype, "menuOpen", void 0);
l([
  c({ type: String })
], I.prototype, "helper", void 0);
l([
  c({ type: Boolean })
], I.prototype, "validateOnInitialRender", void 0);
l([
  c({ type: String })
], I.prototype, "validationMessage", void 0);
l([
  c({ type: Boolean })
], I.prototype, "required", void 0);
l([
  c({ type: Boolean })
], I.prototype, "naturalMenuWidth", void 0);
l([
  _()
], I.prototype, "isUiValid", void 0);
l([
  c({ type: Boolean })
], I.prototype, "fixedMenuPosition", void 0);
l([
  De({ capture: !0 })
], I.prototype, "handleTypeahead", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const $o = W`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-select{display:inline-flex;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87)}.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-select.mdc-select--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#6200ee;fill:var(--mdc-theme-primary, #6200ee)}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:rgba(0, 0, 0, 0.54)}.mdc-select.mdc-select--disabled .mdc-select__icon{color:rgba(0, 0, 0, 0.38)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:red}.mdc-select.mdc-select--disabled .mdc-floating-label{color:GrayText}.mdc-select.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}.mdc-select.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select.mdc-select--disabled .mdc-notched-outline__trailing{border-color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__icon{color:GrayText}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:GrayText}}.mdc-select .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:0;padding-right:0}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.mdc-select .mdc-select__icon{width:24px;height:24px;font-size:24px}.mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item,.mdc-select .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:12px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic,.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:12px;margin-right:0}.mdc-select__dropdown-icon{margin-left:12px;margin-right:12px;display:inline-flex;position:relative;align-self:center;align-items:center;justify-content:center;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic{width:41.6666666667%;height:20.8333333333%}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;transition:opacity 100.5ms linear 49.5ms}.mdc-select__anchor{width:200px;min-width:0;flex:1 1 auto;position:relative;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-select__selected-text-container{display:flex;appearance:none;pointer-events:none;box-sizing:border-box;width:auto;min-width:0;flex-grow:1;height:28px;border:none;outline:none;padding:0;background-color:transparent;color:inherit}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;width:100%;text-align:left}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{text-align:right}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item{padding-left:12px;padding-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item,.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:12px;padding-right:12px}.mdc-select__menu .mdc-deprecated-list .mdc-select__icon{margin-left:0;margin-right:0}[dir=rtl] .mdc-select__menu .mdc-deprecated-list .mdc-select__icon,.mdc-select__menu .mdc-deprecated-list .mdc-select__icon[dir=rtl]{margin-left:0;margin-right:0}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select--filled .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.mdc-select--filled .mdc-select__anchor::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor::before{display:none}.mdc-select--filled .mdc-select__anchor{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-select--filled:not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke}.mdc-select--filled.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-select--filled:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--filled.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-select--filled .mdc-menu-surface--is-open-below{border-top-left-radius:0px;border-top-right-radius:0px}.mdc-select--filled.mdc-select--focused.mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-select--filled .mdc-floating-label,.mdc-select--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined{border:none}.mdc-select--outlined .mdc-select__anchor{height:56px}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-56px{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-select--outlined .mdc-select__anchor{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-select--outlined+.mdc-select-helper-text{margin-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-select--outlined .mdc-select__anchor{display:flex;align-items:baseline;overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--outlined .mdc-select__anchor::before{display:none}.mdc-select--outlined .mdc-select__selected-text-container{display:flex;border:none;z-index:1;background-color:transparent}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;left:4px;right:initial}[dir=rtl] .mdc-select--outlined .mdc-floating-label,.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake,.mdc-select--outlined.mdc-select--with-leading-icon[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 96px)}.mdc-select--outlined .mdc-menu-surface{margin-bottom:8px}.mdc-select--outlined.mdc-select--no-label .mdc-menu-surface,.mdc-select--outlined .mdc-menu-surface--is-open-below{margin-bottom:0}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-select__anchor .mdc-select__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-select__anchor .mdc-select__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-select__anchor:hover .mdc-select__ripple::before,.mdc-select__anchor.mdc-ripple-surface--hover .mdc-select__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select-helper-text{margin:0;margin-left:16px;margin-right:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal}[dir=rtl] .mdc-select-helper-text,.mdc-select-helper-text[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;user-select:none;flex-shrink:0;align-self:center;background-color:transparent;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex="-1"]{cursor:default;pointer-events:none}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-block;vertical-align:top;outline:none}.mdc-select{width:100%}[hidden]{display:none}.mdc-select__icon{z-index:2}.mdc-select--with-leading-icon{--mdc-list-item-graphic-margin: calc( 48px - var(--mdc-list-item-graphic-size, 24px) - var(--mdc-list-side-padding, 16px) )}.mdc-select .mdc-select__anchor .mdc-select__selected-text{overflow:hidden}.mdc-select .mdc-select__anchor *{display:inline-flex}.mdc-select .mdc-select__anchor .mdc-floating-label{display:inline-block}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-idle-border-color, rgba(0, 0, 0, 0.38) );--mdc-notched-outline-notch-offset: 1px}:host(:not([disabled]):hover) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87);color:var(--mdc-select-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-select-idle-line-color, rgba(0, 0, 0, 0.42))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-select-hover-line-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke;background-color:var(--mdc-select-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-select__dropdown-icon{fill:var(--mdc-select-error-dropdown-icon-color, var(--mdc-select-error-color, var(--mdc-theme-error, #b00020)))}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label,:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label::after{color:var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}.mdc-select__menu--invalid{--mdc-theme-primary: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.6);color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54);fill:var(--mdc-select-dropdown-icon-color, rgba(0, 0, 0, 0.54))}:host(:not([disabled])) .mdc-select.mdc-select--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px;--mdc-notched-outline-notch-offset: 2px}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-select__dropdown-icon{fill:rgba(98,0,238,.87);fill:var(--mdc-select-focused-dropdown-icon-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-select:not(.mdc-select--outlined).mdc-select--disabled .mdc-select__anchor{background-color:#fafafa;background-color:var(--mdc-select-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-select.mdc-select--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-select .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38);fill:var(--mdc-select-disabled-dropdown-icon-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select-helper-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let gt = class extends I {
};
gt.styles = [$o];
gt = l([
  V("mwc-select")
], gt);
class ve extends me {
  constructor() {
    super(...arguments), this.disabled = !1, this.icon = "", this.shouldRenderRipple = !1, this.rippleHandlers = new vt(() => (this.shouldRenderRipple = !0, this.ripple));
  }
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? u`
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
    return u`<button
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
    const t = () => {
      window.removeEventListener("mouseup", t), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", t), this.rippleHandlers.startPress(e);
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
l([
  c({ type: Boolean, reflect: !0 })
], ve.prototype, "disabled", void 0);
l([
  c({ type: String })
], ve.prototype, "icon", void 0);
l([
  qe,
  c({ type: String, attribute: "aria-label" })
], ve.prototype, "ariaLabel", void 0);
l([
  w("button")
], ve.prototype, "buttonElement", void 0);
l([
  bt("mwc-ripple")
], ve.prototype, "ripple", void 0);
l([
  _()
], ve.prototype, "shouldRenderRipple", void 0);
l([
  De({ passive: !0 })
], ve.prototype, "handleRippleMouseDown", null);
l([
  De({ passive: !0 })
], ve.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Bo = W`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button--touch{margin-top:0px;margin-bottom:0px}:host{display:inline-block;outline:none;--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host([disabled]){pointer-events:none}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button>i{position:absolute;top:0;padding-top:inherit}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Wt = class extends ve {
};
Wt.styles = [Bo];
Wt = l([
  V("mwc-icon-button")
], Wt);
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
var Xe = {
  /** Class used for a switch that is in the "checked" (on) position. */
  CHECKED: "mdc-switch--checked",
  /** Class used for a switch that is disabled. */
  DISABLED: "mdc-switch--disabled"
}, Ui = {
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
var Ho = (
  /** @class */
  function(r) {
    ue(e, r);
    function e(t) {
      return r.call(this, D(D({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      /** The string constants used by the switch. */
      get: function() {
        return Ui;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      /** The CSS classes used by the switch. */
      get: function() {
        return Xe;
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
    }), e.prototype.setChecked = function(t) {
      this.adapter.setNativeControlChecked(t), this.updateAriaChecked(t), this.updateCheckedStyling(t);
    }, e.prototype.setDisabled = function(t) {
      this.adapter.setNativeControlDisabled(t), t ? this.adapter.addClass(Xe.DISABLED) : this.adapter.removeClass(Xe.DISABLED);
    }, e.prototype.handleChange = function(t) {
      var i = t.target;
      this.updateAriaChecked(i.checked), this.updateCheckedStyling(i.checked);
    }, e.prototype.updateCheckedStyling = function(t) {
      t ? this.adapter.addClass(Xe.CHECKED) : this.adapter.removeClass(Xe.CHECKED);
    }, e.prototype.updateAriaChecked = function(t) {
      this.adapter.setNativeControlAttr(Ui.ARIA_CHECKED_ATTR, "" + !!t);
    }, e;
  }(le)
);
class de extends Ae {
  constructor() {
    super(...arguments), this.checked = !1, this.disabled = !1, this.shouldRenderRipple = !1, this.mdcFoundationClass = Ho, this.rippleHandlers = new vt(() => (this.shouldRenderRipple = !0, this.ripple));
  }
  changeHandler(e) {
    this.mdcFoundation.handleChange(e), this.checked = this.formElement.checked;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, xt(this.mdcRoot)), { setNativeControlChecked: (e) => {
      this.formElement.checked = e;
    }, setNativeControlDisabled: (e) => {
      this.formElement.disabled = e;
    }, setNativeControlAttr: (e, t) => {
      this.formElement.setAttribute(e, t);
    } });
  }
  renderRipple() {
    return this.shouldRenderRipple ? u`
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
    return u`
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
    const t = () => {
      window.removeEventListener("mouseup", t), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", t), this.rippleHandlers.startPress(e);
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
l([
  c({ type: Boolean }),
  L(function(r) {
    this.mdcFoundation.setChecked(r);
  })
], de.prototype, "checked", void 0);
l([
  c({ type: Boolean }),
  L(function(r) {
    this.mdcFoundation.setDisabled(r);
  })
], de.prototype, "disabled", void 0);
l([
  qe,
  c({ attribute: "aria-label" })
], de.prototype, "ariaLabel", void 0);
l([
  qe,
  c({ attribute: "aria-labelledby" })
], de.prototype, "ariaLabelledBy", void 0);
l([
  w(".mdc-switch")
], de.prototype, "mdcRoot", void 0);
l([
  w("input")
], de.prototype, "formElement", void 0);
l([
  bt("mwc-ripple")
], de.prototype, "ripple", void 0);
l([
  _()
], de.prototype, "shouldRenderRipple", void 0);
l([
  De({ passive: !0 })
], de.prototype, "handleRippleMouseDown", null);
l([
  De({ passive: !0 })
], de.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const No = W`.mdc-switch__thumb-underlay{left:-14px;right:initial;top:-17px;width:48px;height:48px}[dir=rtl] .mdc-switch__thumb-underlay,.mdc-switch__thumb-underlay[dir=rtl]{left:initial;right:-14px}.mdc-switch__native-control{width:64px;height:48px}.mdc-switch{display:inline-block;position:relative;outline:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-color:#fff;border-color:var(--mdc-theme-surface, #fff)}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;margin:0;opacity:0;cursor:pointer;pointer-events:auto;transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-switch__native-control,.mdc-switch__native-control[dir=rtl]{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:36px;height:14px;border:1px solid transparent;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb-underlay{display:flex;position:absolute;align-items:center;justify-content:center;transform:translateX(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl]{transform:translateX(-16px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__native-control[dir=rtl]{transform:translateX(16px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent}`;
let Xt = class extends de {
};
Xt.styles = [No];
Xt = l([
  V("mwc-switch")
], Xt);
var Vo = Object.defineProperty, Uo = Object.getOwnPropertyDescriptor, oe = (r, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? Uo(e, t) : e, o = r.length - 1, a; o >= 0; o--)
    (a = r[o]) && (n = (i ? a(e, t, n) : a(n)) || n);
  return i && n && Vo(e, t, n), n;
};
let ie = class extends ft {
  constructor() {
    super(), this.nullable = !1, this.multipliers = [null, ""], this.multiplierIndex = 0, this.unit = "", this.isNull = !1, this.defaultValue = "", this.reservedValues = [], this.disabledSwitch = !1, this.nulled = null, this.disabledSwitch = this.hasAttribute("disabled");
  }
  get multiplier() {
    return this.unit == "" ? null : this.multipliers[this.multiplierIndex] ?? this.multipliers[0] ?? null;
  }
  set multiplier(r) {
    const e = this.multipliers.indexOf(r);
    e >= 0 && (this.multiplierIndex = e), this.suffix = (this.multiplier ?? "") + this.unit;
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(r) {
    !this.nullable || r === this.isNull || (this.isNull = r, this.null ? this.disable() : this.enable());
  }
  get maybeValue() {
    return this.null ? null : this.value;
  }
  set maybeValue(r) {
    r === null ? this.null = !0 : (this.null = !1, this.value = r);
  }
  selectMultiplier(r) {
    this.multiplier = this.multipliers[r.detail.index];
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
    return this.reservedValues && this.reservedValues.some((r) => r === this.value) ? (this.setCustomValidity(mt("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
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
      (r) => u`<mwc-list-item ?selected=${r === this.multiplier}
          >${r === null ? mt("textfield.noMultiplier") : r}</mwc-list-item
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
oe([
  c({ type: Boolean })
], ie.prototype, "nullable", 2);
oe([
  c({ type: Array })
], ie.prototype, "multipliers", 2);
oe([
  c({ type: String })
], ie.prototype, "multiplier", 1);
oe([
  c({ type: String })
], ie.prototype, "unit", 2);
oe([
  _()
], ie.prototype, "null", 1);
oe([
  c({ type: String })
], ie.prototype, "maybeValue", 1);
oe([
  c({ type: String })
], ie.prototype, "defaultValue", 2);
oe([
  c({ type: Array })
], ie.prototype, "reservedValues", 2);
oe([
  w("mwc-switch")
], ie.prototype, "nullSwitch", 2);
oe([
  w("mwc-menu")
], ie.prototype, "multiplierMenu", 2);
oe([
  w("mwc-icon-button")
], ie.prototype, "multiplierButton", 2);
ie = oe([
  V("wizard-textfield")
], ie);
var Go = Object.defineProperty, qo = Object.getOwnPropertyDescriptor, He = (r, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? qo(e, t) : e, o = r.length - 1, a; o >= 0; o--)
    (a = r[o]) && (n = (i ? a(e, t, n) : a(n)) || n);
  return i && n && Go(e, t, n), n;
};
let Se = class extends gt {
  constructor() {
    super(), this.nullable = !1, this.isNull = !1, this.defaultValue = "", this.reservedValues = [], this.disabledSwitch = !1, this.nulled = null, this.disabledSwitch = this.hasAttribute("disabled");
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(r) {
    !this.nullable || r === this.isNull || (this.isNull = r, this.null ? this.disable() : this.enable());
  }
  get maybeValue() {
    return this.null ? null : this.value;
  }
  set maybeValue(r) {
    r === null ? this.null = !0 : (this.null = !1, this.value = r);
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
He([
  c({ type: Boolean })
], Se.prototype, "nullable", 2);
He([
  _()
], Se.prototype, "null", 1);
He([
  c({ type: String })
], Se.prototype, "maybeValue", 1);
He([
  c({ type: String })
], Se.prototype, "defaultValue", 2);
He([
  c({ type: Array })
], Se.prototype, "reservedValues", 2);
He([
  w("mwc-switch")
], Se.prototype, "nullSwitch", 2);
Se = He([
  V("wizard-select")
], Se);
var jo = Object.defineProperty, Wo = Object.getOwnPropertyDescriptor, ne = (r, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? Wo(e, t) : e, o = r.length - 1, a; o >= 0; o--)
    (a = r[o]) && (n = (i ? a(e, t, n) : a(n)) || n);
  return i && n && jo(e, t, n), n;
};
let J = class extends me {
  constructor() {
    super(...arguments), this.label = "", this.helper = "", this.nullable = !1, this.defaultChecked = !1, this.disabled = !1, this.isNull = !1, this.initChecked = !1, this.deactivateCheckbox = !1, this.nulled = null;
  }
  get maybeValue() {
    return this.null ? null : this.checked ? "true" : "false";
  }
  set maybeValue(r) {
    r === null ? this.null = !0 : (this.null = !1, this.checked = r === "true");
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(r) {
    !this.nullable || r === this.isNull || (this.isNull = r, this.null ? this.disable() : this.enable());
  }
  get checked() {
    return this.checkbox?.checked ?? this.initChecked;
  }
  set checked(r) {
    this.checkbox ? this.checkbox.checked = r : this.initChecked = r;
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
ne([
  c({ type: String })
], J.prototype, "label", 2);
ne([
  c({ type: String })
], J.prototype, "helper", 2);
ne([
  c({ type: Boolean })
], J.prototype, "nullable", 2);
ne([
  c({ type: Boolean })
], J.prototype, "defaultChecked", 2);
ne([
  c({ type: String })
], J.prototype, "maybeValue", 1);
ne([
  c({ type: Boolean })
], J.prototype, "disabled", 2);
ne([
  _()
], J.prototype, "null", 1);
ne([
  _()
], J.prototype, "checked", 1);
ne([
  _()
], J.prototype, "deactivateCheckbox", 2);
ne([
  _()
], J.prototype, "formfieldLabel", 1);
ne([
  w("mwc-switch")
], J.prototype, "nullSwitch", 2);
ne([
  w("mwc-checkbox")
], J.prototype, "checkbox", 2);
J = ne([
  V("wizard-checkbox")
], J);
function Xo(r) {
  return typeof r == "function";
}
function Yo(r, e) {
  if (!r)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const t = Xo(r) ? r : () => r;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: t, ...e?.detail }
  });
}
const Zo = [
  "TransformerWinding",
  "ConductingEquipment"
], Ko = [
  "GeneralEquipment",
  "PowerTransformer",
  ...Zo
], Qo = ["Substation", "VoltageLevel", "Bay"], Jo = ["Process", "Line"], ea = ["EqSubFunction", "EqFunction"], ta = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Ko,
  ...Qo,
  ...Jo,
  ...ea
], ia = ["ConnectivityNode", ...ta], na = ["GOOSESecurity", "SMVSecurity"], ra = ["SubNetwork", ...na, ...ia], oa = ["BDA", "DA"], aa = ["SampledValueControl", "GSEControl"], sa = ["LogControl", "ReportControl"], la = [...aa, ...sa], da = ["GSE", "SMV"], ca = [
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
  ...la,
  ...da,
  ...oa
], pa = ["LN0", "LN"], ha = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], ma = ["Subject", "IssuerName"], ua = ["MinTime", "MaxTime"], fa = ["LNodeType", "DOType", "DAType", "EnumType"], ga = [
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
], ba = ["DynDataSet", "ConfDataSet"], xa = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...ba
], va = ["ConfLogControl", "ConfSigRef"], ya = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], _a = ["SCL", ...ra, ...ca, ...fa], wa = [
  ..._a,
  ...ha,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...ma,
  ...ua,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...pa,
  ...ga,
  "DynAssociation",
  "SettingGroups",
  ...xa,
  ...va,
  ...ya,
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
];
new Set(wa);
function In(r, e = /* @__PURE__ */ new WeakSet()) {
  if (e.has(r)) return 1 / 0;
  switch (r?.constructor) {
    case Object:
    case Array:
      return e.add(r), 1 + Math.max(
        -1,
        ...Object.values(r).map((t) => In(t, e))
      );
    default:
      return 0;
  }
}
const ka = 99;
Array(ka).fill(1).map((r, e) => `${e + 1}`);
var Ea = Object.defineProperty, Ca = Object.getOwnPropertyDescriptor, ye = (r, e, t, i) => {
  for (var n = i > 1 ? void 0 : i ? Ca(e, t) : e, o = r.length - 1, a; o >= 0; o--)
    (a = r[o]) && (n = (i ? a(e, t, n) : a(n)) || n);
  return i && n && Ea(e, t, n), n;
};
const Aa = u`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${mt("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let se = class extends me {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (r) => ({
      path: r,
      header: u`<h2>${"/" + r.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return In(this.selection);
  }
  get paths() {
    return this.getPaths();
  }
  set paths(r) {
    const e = {};
    for (const t of r) {
      let i = e;
      for (const n of t)
        Object.prototype.hasOwnProperty.call(i, n) || (i[n] = {}), i = i[n];
    }
    this.selection = e;
  }
  get path() {
    return this.paths[0] ?? [];
  }
  set path(r) {
    this.paths = [r];
  }
  getTitle(r) {
    return r.join("/");
  }
  getDisplayString(r, e) {
    return r;
  }
  getPaths(r) {
    let e = Object.keys(this.selection).map((i) => [i]), t = r ?? this.depth - 1;
    for (; t-- > 0; )
      e = e.flatMap((i) => {
        let n = this.selection;
        for (const a of i) n = n[a];
        const o = Object.keys(n).map((a) => i.concat(a));
        return o.length === 0 ? [i] : o;
      });
    return r === void 0 ? e : e.filter((i) => i.length > r);
  }
  multiSelect(r, e, t) {
    let i = this.selection;
    for (const n of e) i = i[n];
    i && i[t] ? delete i[t] : i[t] = {};
  }
  singleSelect(r, e, t) {
    this.path[e.length] === t ? this.path = e : this.path = e.concat(t);
  }
  async select(r, e) {
    const t = r.target.selected.value;
    this.multi ? this.multiSelect(r, e, t) : this.singleSelect(r, e, t), this.requestUpdate(), await this.updateComplete, await new Promise((i) => setTimeout(i, 250)), this.container.scrollLeft = 1e3 * this.depth;
  }
  renderDirectory(r, e) {
    return u`<filtered-list
      @selected=${(t) => this.select(t, r)}
      searchFieldLabel="${this.getTitle(r)}"
    >
      ${e.map(
      (t) => u`<mwc-list-item
            value="${t}"
            ?activated=${this.getPaths(r.length).map((i) => JSON.stringify(i)).includes(JSON.stringify(r.concat(t)))}
            >${this.getDisplayString(t, r)}</mwc-list-item
          >`
    )}
    </filtered-list>`;
  }
  async renderColumn(r) {
    const t = this.getPaths(r).map((n) => this.read(n)), i = [];
    for await (const { header: n, entries: o, path: a } of t)
      (n || o.length > 0) && i.push(
        u`${O(n)} ${this.renderDirectory(a, o)}`
      );
    return i.length === 0 ? u`` : u`<div class="column">${i}</div>`;
  }
  render() {
    const r = new Array(this.depth).fill(0).map((e, t) => this.renderColumn(t));
    return this.loaded = Promise.allSettled(r).then(), u`<div class="pane">
      ${r.map((e) => vr(e, Aa))}
    </div>`;
  }
};
se.styles = W`
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
ye([
  c({ type: Object })
], se.prototype, "selection", 2);
ye([
  c({ type: Boolean })
], se.prototype, "multi", 2);
ye([
  c({ type: Number })
], se.prototype, "depth", 1);
ye([
  c({ type: Array })
], se.prototype, "paths", 1);
ye([
  c({ type: Array })
], se.prototype, "path", 1);
ye([
  c({ attribute: !1 })
], se.prototype, "read", 2);
ye([
  c({ attribute: !1 })
], se.prototype, "loaded", 2);
ye([
  w("div")
], se.prototype, "container", 2);
se = ye([
  V("finder-list")
], se);
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
const nt = {
  action: F`<path d="M0 0h24v24H0z" fill="none"></path><path d="M13 3c-4.97 0-9
  4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7
  7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0
  9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" fill="currentColor"></path>`,
  dAIcon: F`<path fill="currentColor" d="m4.2 0c-2.31 0-4.2 1.89-4.2 4.2v11.6c0 2.31 1.89 4.2 4.2 4.2h18.1c2.31 0 4.2-1.89 4.2-4.2v-11.6c0-2.31-1.89-4.2-4.2-4.2zm0 1.89h18.1c1.29 0 2.3 1.01 2.3 2.3v11.6c0 1.29-1.01 2.31-2.3 2.31h-18.1c-1.29 0-2.3-1.01-2.3-2.31v-11.6c0-1.29 1.01-2.3 2.3-2.3z"/><path fill="currentColor" d="m12.5 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path fill="currentColor" d="m19.7 15-0.74-2.56h-3.18l-0.74 2.56h-1.75l3.04-10h2.06l3.03 10zm-1.13-4.13-0.823-2.88-0.379-1.46q-0.0947 0.412-0.178 0.739-0.0829 0.327-1.02 3.59z"/>`,
  dOIcon: F`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m12.1 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path d="m21.6 9.97q0 1.56-0.515 2.75-0.515 1.19-1.47 1.82-0.959 0.625-2.24 0.625-1.97 0-3.08-1.39-1.11-1.39-1.11-3.81 0-2.41 1.11-3.76t3.1-1.35 3.1 1.36q1.12 1.36 1.12 3.74zm-1.78 0q0-1.62-0.639-2.54-0.639-0.923-1.79-0.923-1.17 0-1.81 0.916-0.639 0.909-0.639 2.54 0 1.65 0.651 2.6 0.657 0.945 1.79 0.945 1.17 0 1.81-0.923 0.639-0.923 0.639-2.62z"/>`,
  enumIcon: F`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m5.37 15v-10h6.56v1.62h-4.81v2.51h4.45v1.62h-4.45v2.64h5.06v1.62z"/><path d="m18.5 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  info: F`<path d="M0 0h24v24H0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"></path>`,
  warning: F`<path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="currentColor"></path>`,
  error: F`<path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z" fill="currentColor"></path><path d="M11 7h2v7h-2z" fill="currentColor"></path><circle cx="12" cy="16" r="1" fill="currentColor"></circle>`,
  gooseIcon: F`<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  lNIcon: F`<path stroke="currentColor" stroke-width="1.89" fill="none" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path fill="currentColor" d="m5.71 15v-10h1.75v8.39h4.47v1.62z"/><path fill="currentColor" d="m18.2 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  logIcon: F`<path fill="currentColor" d="M9,7H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  reportIcon: F`<path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,16.41 7.58,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  smvIcon: F`<path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`
};
F`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${nt.gooseIcon}</svg>`;
F`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${nt.reportIcon}</svg>`;
F`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${nt.smvIcon}</svg>`;
F`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${nt.logIcon}</svg>`;
F`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z" />
</svg>`;
F`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M21,14V4H3V14H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M4,5H15V10H4V5M16,5H20V7H16V5M20,8V13H16V8H20M4,11H9V13H4V11M10,11H15V13H10V11Z" />
</svg>`;
F`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4,1C2.89,1 2,1.89 2,3V7C2,8.11 2.89,9 4,9H1V11H13V9H10C11.11,9 12,8.11 12,7V3C12,1.89 11.11,1 10,1H4M4,3H10V7H4V3M14,13C12.89,13 12,13.89 12,15V19C12,20.11 12.89,21 14,21H11V23H23V21H20C21.11,21 22,20.11 22,19V15C22,13.89 21.11,13 20,13H14M3.88,13.46L2.46,14.88L4.59,17L2.46,19.12L3.88,20.54L6,18.41L8.12,20.54L9.54,19.12L7.41,17L9.54,14.88L8.12,13.46L6,15.59L3.88,13.46M14,15H20V19H14V15Z" />
</svg>`;
const Gi = {
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
dt("dAIcon"), dt("dOIcon"), dt("enumIcon"), dt("lNIcon");
function dt(r) {
  if (r === "reset") return u``;
  const e = Gi[r]?.height ?? 24, t = Gi[r]?.width ?? 24;
  return u`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${e}"
    viewBox="0 0 ${t} ${e}"
    width="${t}"
  >
    ${nt[r]}
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
const Sa = u` <svg
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
F`
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
  </svg>`;
F`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
F`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
F`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
F`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
F`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
const qi = /https:\/\/github\.com\/openscd\/open-scd\/wiki\/([^)]*)/g, Ia = "([^\\]]*)", Ta = /-/g;
function ji(r) {
  return u`<div>
      <div style="display:flex">
        <mwc-icon slot="graphic" style="--mdc-icon-size:25px"
          >${Sa}</mwc-icon
        >
        <div style="padding:10px">
          <h2 style="margin-bottom:2px">OpenSCD</h2>
          V${r}
        </div>
      </div>
    </div>
    <div>
      <h3>Licences</h3>
      <p style="padding-bottom:5px">
        The IEC&thinsp;61850 XSD and NSD code components used are distributed
        under their
        <a href="/CC-EULA.pdf">end user licence agreement</a>. <br />This
        project's source code is licensed under the
        <a href="/LICENSE.md">Apache&thinsp;2.0 license</a> and available on
        <a href="https://github.com/openscd">GitHub</a>.
      </p>
      <p>&copy; 2020-2021 OMICRON electronics GmbH</p>
      <h3>Help</h3>
    </div>`;
}
async function Ra(r) {
  const e = await (await fetch("/manifest.json")).json();
  if (r.length === 0)
    return { path: r, header: ji(e.version), entries: ["Home"] };
  const t = r[r.length - 1].replace(/ /g, "-"), n = await (await fetch(`/openscd/public/md/${t}.md`)).text(), a = n.replace(
    new RegExp(`\\[${Ia}\\]\\(${qi.source}\\)`, "g"),
    '<a style="cursor: help; color: var(--mdc-theme-primary)"  href="https://github.com/openscd/open-scd/wiki/$2" target="_blank" >$1</a>'
  ), s = u`<div style="padding: 8px;">
    ${t === "Home" ? ji(e.version) : u``}
    ${Jn(br(a))}
  </div>`, d = Array.from(
    n.matchAll(new RegExp(`\\(${qi.source}\\)`, "g"))
  ).map(([p, m]) => m.replace(Ta, " "));
  return { path: r, header: s, entries: d };
}
function La() {
  return [
    {
      title: "Help",
      content: [
        u`<finder-list
          .path=${["Home"]}
          .read=${Ra}
        ></finder-list>`
      ]
    }
  ];
}
class Ya extends me {
  async run() {
    this.dispatchEvent(Yo(La()));
  }
}
export {
  La as aboutBoxWizard,
  Ya as default
};
