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
const Lo = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, Fc = (t, e, i = null, n = null) => {
  for (; e !== i; ) {
    const r = e.nextSibling;
    t.insertBefore(e, n), e = r;
  }
}, kr = (t, e, i = null) => {
  for (; e !== i; ) {
    const n = e.nextSibling;
    t.removeChild(e), e = n;
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
const ft = `{{lit-${String(Math.random()).slice(2)}}}`, Ma = `<!--${ft}-->`, No = new RegExp(`${ft}|${Ma}`), ki = "$lit$";
class Pa {
  constructor(e, i) {
    this.parts = [], this.element = i;
    const n = [], r = [], o = document.createTreeWalker(i.content, 133, null, !1);
    let a = 0, c = -1, s = 0;
    const { strings: p, values: { length: h } } = e;
    for (; s < h; ) {
      const b = o.nextNode();
      if (b === null) {
        o.currentNode = r.pop();
        continue;
      }
      if (c++, b.nodeType === 1) {
        if (b.hasAttributes()) {
          const x = b.attributes, { length: v } = x;
          let _ = 0;
          for (let A = 0; A < v; A++)
            Ro(x[A].name, ki) && _++;
          for (; _-- > 0; ) {
            const A = p[s], E = Jn.exec(A)[2], w = E.toLowerCase() + ki, z = b.getAttribute(w);
            b.removeAttribute(w);
            const D = z.split(No);
            this.parts.push({ type: "attribute", index: c, name: E, strings: D }), s += D.length - 1;
          }
        }
        b.tagName === "TEMPLATE" && (r.push(b), o.currentNode = b.content);
      } else if (b.nodeType === 3) {
        const x = b.data;
        if (x.indexOf(ft) >= 0) {
          const v = b.parentNode, _ = x.split(No), A = _.length - 1;
          for (let E = 0; E < A; E++) {
            let w, z = _[E];
            if (z === "")
              w = It();
            else {
              const D = Jn.exec(z);
              D !== null && Ro(D[2], ki) && (z = z.slice(0, D.index) + D[1] + D[2].slice(0, -ki.length) + D[3]), w = document.createTextNode(z);
            }
            v.insertBefore(w, b), this.parts.push({ type: "node", index: ++c });
          }
          _[A] === "" ? (v.insertBefore(It(), b), n.push(b)) : b.data = _[A], s += A;
        }
      } else if (b.nodeType === 8)
        if (b.data === ft) {
          const x = b.parentNode;
          (b.previousSibling === null || c === a) && (c++, x.insertBefore(It(), b)), a = c, this.parts.push({ type: "node", index: c }), b.nextSibling === null ? b.data = "" : (n.push(b), c--), s++;
        } else {
          let x = -1;
          for (; (x = b.data.indexOf(ft, x + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), s++;
        }
    }
    for (const b of n)
      b.parentNode.removeChild(b);
  }
}
const Ro = (t, e) => {
  const i = t.length - e.length;
  return i >= 0 && t.slice(i) === e;
}, Fa = (t) => t.index !== -1, It = () => document.createComment(""), Jn = (
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
const Lr = 133;
function Va(t, e) {
  const { element: { content: i }, parts: n } = t, r = document.createTreeWalker(i, Lr, null, !1);
  let o = Ni(n), a = n[o], c = -1, s = 0;
  const p = [];
  let h = null;
  for (; r.nextNode(); ) {
    c++;
    const b = r.currentNode;
    for (b.previousSibling === h && (h = null), e.has(b) && (p.push(b), h === null && (h = b)), h !== null && s++; a !== void 0 && a.index === c; )
      a.index = h !== null ? -1 : a.index - s, o = Ni(n, o), a = n[o];
  }
  p.forEach((b) => b.parentNode.removeChild(b));
}
const Vc = (t) => {
  let e = t.nodeType === 11 ? 0 : 1;
  const i = document.createTreeWalker(t, Lr, null, !1);
  for (; i.nextNode(); )
    e++;
  return e;
}, Ni = (t, e = -1) => {
  for (let i = e + 1; i < t.length; i++) {
    const n = t[i];
    if (Fa(n))
      return i;
  }
  return -1;
};
function Bc(t, e, i = null) {
  const { element: { content: n }, parts: r } = t;
  if (i == null) {
    n.appendChild(e);
    return;
  }
  const o = document.createTreeWalker(n, Lr, null, !1);
  let a = Ni(r), c = 0, s = -1;
  for (; o.nextNode(); )
    for (s++, o.currentNode === i && (c = Vc(e), i.parentNode.insertBefore(e, i)); a !== -1 && r[a].index === s; ) {
      if (c > 0) {
        for (; a !== -1; )
          r[a].index += c, a = Ni(r, a);
        return;
      }
      a = Ni(r, a);
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
const Ba = /* @__PURE__ */ new WeakMap(), di = (t) => (...e) => {
  const i = t(...e);
  return Ba.set(i, !0), i;
}, zi = (t) => typeof t == "function" && Ba.has(t);
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
const Qe = {}, Ve = {};
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
class er {
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
    const e = Lo ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), i = [], n = this.template.parts, r = document.createTreeWalker(e, 133, null, !1);
    let o = 0, a = 0, c, s = r.nextNode();
    for (; o < n.length; ) {
      if (c = n[o], !Fa(c)) {
        this.__parts.push(void 0), o++;
        continue;
      }
      for (; a < c.index; )
        a++, s.nodeName === "TEMPLATE" && (i.push(s), r.currentNode = s.content), (s = r.nextNode()) === null && (r.currentNode = i.pop(), s = r.nextNode());
      if (c.type === "node") {
        const p = this.processor.handleTextExpression(this.options);
        p.insertAfterNode(s.previousSibling), this.__parts.push(p);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(s, c.name, c.strings, this.options));
      o++;
    }
    return Lo && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const zo = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (t) => t }), Hc = ` ${ft} `;
class Nr {
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
      const c = Jn.exec(o);
      c === null ? i += o + (n ? Hc : Ma) : i += o.substr(0, c.index) + c[1] + c[2] + ki + c[3] + ft;
    }
    return i += this.strings[e], i;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let i = this.getHTML();
    return zo !== void 0 && (i = zo.createHTML(i)), e.innerHTML = i, e;
  }
}
class qc extends Nr {
  getHTML() {
    return `<svg>${super.getHTML()}</svg>`;
  }
  getTemplateElement() {
    const e = super.getTemplateElement(), i = e.content, n = i.firstChild;
    return i.removeChild(n), Fc(i, n.firstChild), e;
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
const hn = (t) => t === null || !(typeof t == "object" || typeof t == "function"), tr = (t) => Array.isArray(t) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(t && t[Symbol.iterator]);
class Ha {
  constructor(e, i, n) {
    this.dirty = !0, this.element = e, this.name = i, this.strings = n, this.parts = [];
    for (let r = 0; r < n.length - 1; r++)
      this.parts[r] = this._createPart();
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */
  _createPart() {
    return new Nt(this);
  }
  _getValue() {
    const e = this.strings, i = e.length - 1, n = this.parts;
    if (i === 1 && e[0] === "" && e[1] === "") {
      const o = n[0].value;
      if (typeof o == "symbol")
        return String(o);
      if (typeof o == "string" || !tr(o))
        return o;
    }
    let r = "";
    for (let o = 0; o < i; o++) {
      r += e[o];
      const a = n[o];
      if (a !== void 0) {
        const c = a.value;
        if (hn(c) || !tr(c))
          r += typeof c == "string" ? c : String(c);
        else
          for (const s of c)
            r += typeof s == "string" ? s : String(s);
      }
    }
    return r += e[i], r;
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
  }
}
let Nt = class {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== Qe && (!hn(e) || e !== this.value) && (this.value = e, zi(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; zi(this.value); ) {
      const e = this.value;
      this.value = Qe, e(this);
    }
    this.value !== Qe && this.committer.commit();
  }
};
class Qt {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(It()), this.endNode = e.appendChild(It());
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
    e.__insert(this.startNode = It()), e.__insert(this.endNode = It());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = It()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; zi(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = Qe, i(this);
    }
    const e = this.__pendingValue;
    e !== Qe && (hn(e) ? e !== this.value && this.__commitText(e) : e instanceof Nr ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : tr(e) ? this.__commitIterable(e) : e === Ve ? (this.value = Ve, this.clear()) : this.__commitText(e));
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
    if (this.value instanceof er && this.value.template === i)
      this.value.update(e.values);
    else {
      const n = new er(i, e.processor, this.options), r = n._clone();
      n.update(e.values), this.__commitNode(r), this.value = n;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const i = this.value;
    let n = 0, r;
    for (const o of e)
      r = i[n], r === void 0 && (r = new Qt(this.options), i.push(r), n === 0 ? r.appendIntoPart(this) : r.insertAfterPart(i[n - 1])), r.setValue(o), r.commit(), n++;
    n < i.length && (i.length = n, this.clear(r && r.endNode));
  }
  clear(e = this.startNode) {
    kr(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
let Rr = class {
  constructor(e, i, n) {
    if (this.value = void 0, this.__pendingValue = void 0, n.length !== 2 || n[0] !== "" || n[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = i, this.strings = n;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; zi(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = Qe, i(this);
    }
    if (this.__pendingValue === Qe)
      return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = Qe;
  }
};
class Uc extends Ha {
  constructor(e, i, n) {
    super(e, i, n), this.single = n.length === 2 && n[0] === "" && n[1] === "";
  }
  _createPart() {
    return new ui(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
  }
}
class ui extends Nt {
}
let qa = !1;
(() => {
  try {
    const t = {
      get capture() {
        return qa = !0, !1;
      }
    };
    window.addEventListener("test", t, t), window.removeEventListener("test", t, t);
  } catch {
  }
})();
let zr = class {
  constructor(e, i, n) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = i, this.eventContext = n, this.__boundHandleEvent = (r) => this.handleEvent(r);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; zi(this.__pendingValue); ) {
      const o = this.__pendingValue;
      this.__pendingValue = Qe, o(this);
    }
    if (this.__pendingValue === Qe)
      return;
    const e = this.__pendingValue, i = this.value, n = e == null || i != null && (e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive), r = e != null && (i == null || n);
    n && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), r && (this.__options = Wc(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = Qe;
  }
  handleEvent(e) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
};
const Wc = (t) => t && (qa ? { capture: t.capture, passive: t.passive, once: t.once } : t.capture);
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
function Gc(t) {
  let e = Di.get(t.type);
  e === void 0 && (e = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, Di.set(t.type, e));
  let i = e.stringsArray.get(t.strings);
  if (i !== void 0)
    return i;
  const n = t.strings.join(ft);
  return i = e.keyString.get(n), i === void 0 && (i = new Pa(t, t.getTemplateElement()), e.keyString.set(n, i)), e.stringsArray.set(t.strings, i), i;
}
const Di = /* @__PURE__ */ new Map();
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
const li = /* @__PURE__ */ new WeakMap(), Dr = (t, e, i) => {
  let n = li.get(e);
  n === void 0 && (kr(e, e.firstChild), li.set(e, n = new Qt(Object.assign({ templateFactory: Gc }, i))), n.appendInto(e)), n.setValue(t), n.commit();
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
class jc {
  /**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */
  handleAttributeExpressions(e, i, n, r) {
    const o = i[0];
    return o === "." ? new Uc(e, i.slice(1), n).parts : o === "@" ? [new zr(e, i.slice(1), r.eventContext)] : o === "?" ? [new Rr(e, i.slice(1), n)] : new Ha(e, i, n).parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */
  handleTextExpression(e) {
    return new Qt(e);
  }
}
const Ua = new jc();
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
const d = (t, ...e) => new Nr(t, e, "html", Ua), F = (t, ...e) => new qc(t, e, "svg", Ua);
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
const Wa = (t, e) => `${t}--${e}`;
let sn = !0;
typeof window.ShadyCSS > "u" ? sn = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), sn = !1);
const Xc = (t) => (e) => {
  const i = Wa(e.type, t);
  let n = Di.get(i);
  n === void 0 && (n = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, Di.set(i, n));
  let r = n.stringsArray.get(e.strings);
  if (r !== void 0)
    return r;
  const o = e.strings.join(ft);
  if (r = n.keyString.get(o), r === void 0) {
    const a = e.getTemplateElement();
    sn && window.ShadyCSS.prepareTemplateDom(a, t), r = new Pa(e, a), n.keyString.set(o, r);
  }
  return n.stringsArray.set(e.strings, r), r;
}, Zc = ["html", "svg"], Kc = (t) => {
  Zc.forEach((e) => {
    const i = Di.get(Wa(e, t));
    i !== void 0 && i.keyString.forEach((n) => {
      const { element: { content: r } } = n, o = /* @__PURE__ */ new Set();
      Array.from(r.querySelectorAll("style")).forEach((a) => {
        o.add(a);
      }), Va(n, o);
    });
  });
}, Ga = /* @__PURE__ */ new Set(), Yc = (t, e, i) => {
  Ga.add(t);
  const n = i ? i.element : document.createElement("template"), r = e.querySelectorAll("style"), { length: o } = r;
  if (o === 0) {
    window.ShadyCSS.prepareTemplateStyles(n, t);
    return;
  }
  const a = document.createElement("style");
  for (let p = 0; p < o; p++) {
    const h = r[p];
    h.parentNode.removeChild(h), a.textContent += h.textContent;
  }
  Kc(t);
  const c = n.content;
  i ? Bc(i, a, c.firstChild) : c.insertBefore(a, c.firstChild), window.ShadyCSS.prepareTemplateStyles(n, t);
  const s = c.querySelector("style");
  if (window.ShadyCSS.nativeShadow && s !== null)
    e.insertBefore(s.cloneNode(!0), e.firstChild);
  else if (i) {
    c.insertBefore(a, c.firstChild);
    const p = /* @__PURE__ */ new Set();
    p.add(a), Va(i, p);
  }
}, Qc = (t, e, i) => {
  if (!i || typeof i != "object" || !i.scopeName)
    throw new Error("The `scopeName` option is required.");
  const n = i.scopeName, r = li.has(e), o = sn && e.nodeType === 11 && !!e.host, a = o && !Ga.has(n), c = a ? document.createDocumentFragment() : e;
  if (Dr(t, c, Object.assign({ templateFactory: Xc(n) }, i)), a) {
    const s = li.get(c);
    li.delete(c);
    const p = s.value instanceof er ? s.value.template : void 0;
    Yc(n, c, p), kr(e, e.firstChild), e.appendChild(c), li.set(e, s);
  }
  !r && o && window.ShadyCSS.styleElement(e.host);
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
var ja;
window.JSCompiler_renameProperty = (t, e) => t;
const ir = {
  toAttribute(t, e) {
    switch (e) {
      case Boolean:
        return t ? "" : null;
      case Object:
      case Array:
        return t == null ? t : JSON.stringify(t);
    }
    return t;
  },
  fromAttribute(t, e) {
    switch (e) {
      case Boolean:
        return t !== null;
      case Number:
        return t === null ? null : Number(t);
      case Object:
      case Array:
        return JSON.parse(t);
    }
    return t;
  }
}, Xa = (t, e) => e !== t && (e === e || t === t), Mn = {
  attribute: !0,
  type: String,
  converter: ir,
  reflect: !1,
  hasChanged: Xa
}, Pn = 1, Do = 4, Oo = 8, Mo = 16, nr = "finalized";
class Za extends HTMLElement {
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
    return this._classProperties.forEach((i, n) => {
      const r = this._attributeNameForProperty(n, i);
      r !== void 0 && (this._attributeToPropertyMap.set(r, n), e.push(r));
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
      e !== void 0 && e.forEach((i, n) => this._classProperties.set(n, i));
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
  static createProperty(e, i = Mn) {
    if (this._ensureClassProperties(), this._classProperties.set(e, i), i.noAccessor || this.prototype.hasOwnProperty(e))
      return;
    const n = typeof e == "symbol" ? Symbol() : `__${e}`, r = this.getPropertyDescriptor(e, n, i);
    r !== void 0 && Object.defineProperty(this.prototype, e, r);
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
  static getPropertyDescriptor(e, i, n) {
    return {
      // tslint:disable-next-line:no-any no symbol in index
      get() {
        return this[i];
      },
      set(r) {
        const o = this[e];
        this[i] = r, this.requestUpdateInternal(e, o, n);
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
    return this._classProperties && this._classProperties.get(e) || Mn;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */
  static finalize() {
    const e = Object.getPrototypeOf(this);
    if (e.hasOwnProperty(nr) || e.finalize(), this[nr] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const i = this.properties, n = [
        ...Object.getOwnPropertyNames(i),
        ...typeof Object.getOwnPropertySymbols == "function" ? Object.getOwnPropertySymbols(i) : []
      ];
      for (const r of n)
        this.createProperty(r, i[r]);
    }
  }
  /**
   * Returns the property name for the given attribute `name`.
   * @nocollapse
   */
  static _attributeNameForProperty(e, i) {
    const n = i.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  /**
   * Returns true if a property should request an update.
   * Called when a property value is set and uses the `hasChanged`
   * option for the property if present or a strict identity check.
   * @nocollapse
   */
  static _valueHasChanged(e, i, n = Xa) {
    return n(e, i);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(e, i) {
    const n = i.type, r = i.converter || ir, o = typeof r == "function" ? r : r.fromAttribute;
    return o ? o(e, n) : e;
  }
  /**
   * Returns the attribute value for the given property value. If this
   * returns undefined, the property will *not* be reflected to an attribute.
   * If this returns null, the attribute will be removed, otherwise the
   * attribute will be set to the value.
   * This uses the property's `reflect` and `type.toAttribute` property options.
   * @nocollapse
   */
  static _propertyValueToAttribute(e, i) {
    if (i.reflect === void 0)
      return;
    const n = i.type, r = i.converter;
    return (r && r.toAttribute || ir.toAttribute)(e, n);
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
    this.constructor._classProperties.forEach((e, i) => {
      if (this.hasOwnProperty(i)) {
        const n = this[i];
        delete this[i], this._instanceProperties || (this._instanceProperties = /* @__PURE__ */ new Map()), this._instanceProperties.set(i, n);
      }
    });
  }
  /**
   * Applies previously saved instance properties.
   */
  _applyInstanceProperties() {
    this._instanceProperties.forEach((e, i) => this[i] = e), this._instanceProperties = void 0;
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
  attributeChangedCallback(e, i, n) {
    i !== n && this._attributeToProperty(e, n);
  }
  _propertyToAttribute(e, i, n = Mn) {
    const r = this.constructor, o = r._attributeNameForProperty(e, n);
    if (o !== void 0) {
      const a = r._propertyValueToAttribute(i, n);
      if (a === void 0)
        return;
      this._updateState = this._updateState | Oo, a == null ? this.removeAttribute(o) : this.setAttribute(o, a), this._updateState = this._updateState & -9;
    }
  }
  _attributeToProperty(e, i) {
    if (this._updateState & Oo)
      return;
    const n = this.constructor, r = n._attributeToPropertyMap.get(e);
    if (r !== void 0) {
      const o = n.getPropertyOptions(r);
      this._updateState = this._updateState | Mo, this[r] = // tslint:disable-next-line:no-any
      n._propertyValueFromAttribute(i, o), this._updateState = this._updateState & -17;
    }
  }
  /**
   * This protected version of `requestUpdate` does not access or return the
   * `updateComplete` promise. This promise can be overridden and is therefore
   * not free to access.
   */
  requestUpdateInternal(e, i, n) {
    let r = !0;
    if (e !== void 0) {
      const o = this.constructor;
      n = n || o.getPropertyOptions(e), o._valueHasChanged(this[e], i, n.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, i), n.reflect === !0 && !(this._updateState & Mo) && (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(e, n))) : r = !1;
    }
    !this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate());
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
  requestUpdate(e, i) {
    return this.requestUpdateInternal(e, i), this.updateComplete;
  }
  /**
   * Sets up the element to asynchronously update.
   */
  async _enqueueUpdate() {
    this._updateState = this._updateState | Do;
    try {
      await this._updatePromise;
    } catch {
    }
    const e = this.performUpdate();
    return e != null && await e, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & Do;
  }
  get hasUpdated() {
    return this._updateState & Pn;
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
    const i = this._changedProperties;
    try {
      e = this.shouldUpdate(i), e ? this.update(i) : this._markUpdated();
    } catch (n) {
      throw e = !1, this._markUpdated(), n;
    }
    e && (this._updateState & Pn || (this._updateState = this._updateState | Pn, this.firstUpdated(i)), this.updated(i));
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
    this._reflectingProperties !== void 0 && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach((i, n) => this._propertyToAttribute(n, this[n], i)), this._reflectingProperties = void 0), this._markUpdated();
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
ja = nr;
Za[ja] = !0;
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
const Jc = (t, e) => (window.customElements.define(t, e), e), es = (t, e) => {
  const { kind: i, elements: n } = e;
  return {
    kind: i,
    elements: n,
    // This callback is called once the class is otherwise fully defined
    finisher(r) {
      window.customElements.define(t, r);
    }
  };
}, Z = (t) => (e) => typeof e == "function" ? Jc(t, e) : es(t, e), ts = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), { finisher(i) {
  i.createProperty(e.key, t);
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
  finisher(i) {
    i.createProperty(e.key, t);
  }
}, is = (t, e, i) => {
  e.constructor.createProperty(i, t);
};
function f(t) {
  return (e, i) => i !== void 0 ? is(t, e, i) : ts(t, e);
}
function ns(t) {
  return f({ attribute: !1, hasChanged: void 0 });
}
const N = (t) => ns();
function R(t, e) {
  return (i, n) => {
    const r = {
      get() {
        return this.renderRoot.querySelector(t);
      },
      enumerable: !0,
      configurable: !0
    };
    return n !== void 0 ? Or(r, i, n) : Mr(r, i);
  };
}
function pi(t) {
  return (e, i) => {
    const n = {
      async get() {
        return await this.updateComplete, this.renderRoot.querySelector(t);
      },
      enumerable: !0,
      configurable: !0
    };
    return i !== void 0 ? Or(n, e, i) : Mr(n, e);
  };
}
const Or = (t, e, i) => {
  Object.defineProperty(e, i, t);
}, Mr = (t, e) => ({
  kind: "method",
  placement: "prototype",
  key: e.key,
  descriptor: t
}), rs = (t, e) => Object.assign(Object.assign({}, e), { finisher(i) {
  Object.assign(i.prototype[e.key], t);
} }), os = (
  // tslint:disable-next-line:no-any legacy decorator
  (t, e, i) => {
    Object.assign(e[i], t);
  }
);
function vt(t) {
  return (e, i) => i !== void 0 ? os(t, e, i) : rs(t, e);
}
const Po = Element.prototype, as = Po.msMatchesSelector || Po.webkitMatchesSelector;
function Pr(t = "", e = !1, i = "") {
  return (n, r) => {
    const o = {
      get() {
        const a = `slot${t ? `[name=${t}]` : ":not([name])"}`, c = this.renderRoot.querySelector(a);
        let s = c && c.assignedNodes({ flatten: e });
        return s && i && (s = s.filter((p) => p.nodeType === Node.ELEMENT_NODE && // tslint:disable-next-line:no-any testing existence on older browsers
        (p.matches ? p.matches(i) : as.call(p, i)))), s;
      },
      enumerable: !0,
      configurable: !0
    };
    return r !== void 0 ? Or(o, n, r) : Mr(o, n);
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
const rr = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Fr = Symbol();
class Vr {
  constructor(e, i) {
    if (i !== Fr)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
    return this._styleSheet === void 0 && (rr ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const Ka = (t) => new Vr(String(t), Fr), ls = (t) => {
  if (t instanceof Vr)
    return t.cssText;
  if (typeof t == "number")
    return t;
  throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
}, ie = (t, ...e) => {
  const i = e.reduce((n, r, o) => n + ls(r) + t[o + 1], t[0]);
  return new Vr(i, Fr);
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
const Fo = {};
class be extends Za {
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
      const i = (o, a) => o.reduceRight((c, s) => (
        // Note: On IE set.add() does not return the set
        Array.isArray(s) ? i(s, c) : (c.add(s), c)
      ), a), n = i(e, /* @__PURE__ */ new Set()), r = [];
      n.forEach((o) => r.unshift(o)), this._styles = r;
    } else
      this._styles = e === void 0 ? [] : [e];
    this._styles = this._styles.map((i) => {
      if (i instanceof CSSStyleSheet && !rr) {
        const n = Array.prototype.slice.call(i.cssRules).reduce((r, o) => r + o.cssText, "");
        return Ka(n);
      }
      return i;
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
    e.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((i) => i.cssText), this.localName) : rr ? this.renderRoot.adoptedStyleSheets = e.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
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
    const i = this.render();
    super.update(e), i !== Fo && this.constructor.render(i, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((n) => {
      const r = document.createElement("style");
      r.textContent = n.cssText, this.renderRoot.appendChild(r);
    }));
  }
  /**
   * Invoked on each update to perform rendering tasks. This method may return
   * any value renderable by lit-html's `NodePart` - typically a
   * `TemplateResult`. Setting properties inside this method will *not* trigger
   * the element to update.
   */
  render() {
    return Fo;
  }
}
be.finalized = !0;
be.render = Qc;
be.shadowRootOptions = { mode: "open" };
function cs(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ci = { exports: {} }, Vo;
function ss() {
  if (Vo) return Ci.exports;
  Vo = 1, Ci.exports = t, Ci.exports.addWheelListener = t, Ci.exports.removeWheelListener = e;
  function t(i, n, r) {
    i.addEventListener("wheel", n, r);
  }
  function e(i, n, r) {
    i.removeEventListener("wheel", n, r);
  }
  return Ci.exports;
}
var Ii = { exports: {} }, Fn, Bo;
function ds() {
  if (Bo) return Fn;
  Bo = 1;
  var t = 4, e = 1e-3, i = 1e-7, n = 10, r = 11, o = 1 / (r - 1), a = typeof Float32Array == "function";
  function c(A, E) {
    return 1 - 3 * E + 3 * A;
  }
  function s(A, E) {
    return 3 * E - 6 * A;
  }
  function p(A) {
    return 3 * A;
  }
  function h(A, E, w) {
    return ((c(E, w) * A + s(E, w)) * A + p(E)) * A;
  }
  function b(A, E, w) {
    return 3 * c(E, w) * A * A + 2 * s(E, w) * A + p(E);
  }
  function x(A, E, w, z, D) {
    var H, ae, qe = 0;
    do
      ae = E + (w - E) / 2, H = h(ae, z, D) - A, H > 0 ? w = ae : E = ae;
    while (Math.abs(H) > i && ++qe < n);
    return ae;
  }
  function v(A, E, w, z) {
    for (var D = 0; D < t; ++D) {
      var H = b(E, w, z);
      if (H === 0)
        return E;
      var ae = h(E, w, z) - A;
      E -= ae / H;
    }
    return E;
  }
  function _(A) {
    return A;
  }
  return Fn = function(E, w, z, D) {
    if (!(0 <= E && E <= 1 && 0 <= z && z <= 1))
      throw new Error("bezier x values must be in [0, 1] range");
    if (E === w && z === D)
      return _;
    for (var H = a ? new Float32Array(r) : new Array(r), ae = 0; ae < r; ++ae)
      H[ae] = h(ae * o, E, z);
    function qe(O) {
      for (var I = 0, P = 1, q = r - 1; P !== q && H[P] <= O; ++P)
        I += o;
      --P;
      var we = (O - H[P]) / (H[P + 1] - H[P]), ue = I + we * o, L = b(ue, E, z);
      return L >= e ? v(O, ue, E, z) : L === 0 ? ue : x(O, I, I + o, E, z);
    }
    return function(I) {
      return I === 0 ? 0 : I === 1 ? 1 : h(qe(I), w, D);
    };
  }, Fn;
}
var Ho;
function us() {
  if (Ho) return Ii.exports;
  Ho = 1;
  var t = ds(), e = {
    ease: t(0.25, 0.1, 0.25, 1),
    easeIn: t(0.42, 0, 1, 1),
    easeOut: t(0, 0, 0.58, 1),
    easeInOut: t(0.42, 0, 0.58, 1),
    linear: t(0, 0, 1, 1)
  };
  Ii.exports = i, Ii.exports.makeAggregateRaf = c, Ii.exports.sharedScheduler = c();
  function i(s, p, h) {
    var b = /* @__PURE__ */ Object.create(null), x = /* @__PURE__ */ Object.create(null);
    h = h || {};
    var v = typeof h.easing == "function" ? h.easing : e[h.easing];
    v || (h.easing && console.warn("Unknown easing function in amator: " + h.easing), v = e.ease);
    var _ = typeof h.step == "function" ? h.step : n, A = typeof h.done == "function" ? h.done : n, E = r(h.scheduler), w = Object.keys(p);
    w.forEach(function(P) {
      b[P] = s[P], x[P] = p[P] - s[P];
    });
    var z = typeof h.duration == "number" ? h.duration : 400, D = Math.max(1, z * 0.06), H, ae = 0;
    return H = E.next(O), {
      cancel: qe
    };
    function qe() {
      E.cancel(H), H = 0;
    }
    function O() {
      var P = v(ae / D);
      ae += 1, I(P), ae <= D ? (H = E.next(O), _(s)) : (H = 0, setTimeout(function() {
        A(s);
      }, 0));
    }
    function I(P) {
      w.forEach(function(q) {
        s[q] = x[q] * P + b[q];
      });
    }
  }
  function n() {
  }
  function r(s) {
    if (!s) {
      var p = typeof window < "u" && window.requestAnimationFrame;
      return p ? o() : a();
    }
    if (typeof s.next != "function") throw new Error("Scheduler is supposed to have next(cb) function");
    if (typeof s.cancel != "function") throw new Error("Scheduler is supposed to have cancel(handle) function");
    return s;
  }
  function o() {
    return {
      next: window.requestAnimationFrame.bind(window),
      cancel: window.cancelAnimationFrame.bind(window)
    };
  }
  function a() {
    return {
      next: function(s) {
        return setTimeout(s, 1e3 / 60);
      },
      cancel: function(s) {
        return clearTimeout(s);
      }
    };
  }
  function c() {
    var s = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), h = 0;
    return {
      next: x,
      cancel: x,
      clearAll: b
    };
    function b() {
      s.clear(), p.clear(), cancelAnimationFrame(h), h = 0;
    }
    function x(A) {
      p.add(A), v();
    }
    function v() {
      h || (h = requestAnimationFrame(_));
    }
    function _() {
      h = 0;
      var A = p;
      p = s, s = A, s.forEach(function(E) {
        E();
      }), s.clear();
    }
  }
  return Ii.exports;
}
var Vn, qo;
function ps() {
  if (qo) return Vn;
  qo = 1, Vn = function(n) {
    e(n);
    var r = t(n);
    return n.on = r.on, n.off = r.off, n.fire = r.fire, n;
  };
  function t(i) {
    var n = /* @__PURE__ */ Object.create(null);
    return {
      on: function(r, o, a) {
        if (typeof o != "function")
          throw new Error("callback is expected to be a function");
        var c = n[r];
        return c || (c = n[r] = []), c.push({ callback: o, ctx: a }), i;
      },
      off: function(r, o) {
        var a = typeof r > "u";
        if (a)
          return n = /* @__PURE__ */ Object.create(null), i;
        if (n[r]) {
          var c = typeof o != "function";
          if (c)
            delete n[r];
          else
            for (var s = n[r], p = 0; p < s.length; ++p)
              s[p].callback === o && s.splice(p, 1);
        }
        return i;
      },
      fire: function(r) {
        var o = n[r];
        if (!o)
          return i;
        var a;
        arguments.length > 1 && (a = Array.prototype.splice.call(arguments, 1));
        for (var c = 0; c < o.length; ++c) {
          var s = o[c];
          s.callback.apply(s.ctx, a);
        }
        return i;
      }
    };
  }
  function e(i) {
    if (!i)
      throw new Error("Eventify cannot use falsy object as events subject");
    for (var n = ["on", "fire", "off"], r = 0; r < n.length; ++r)
      if (i.hasOwnProperty(n[r]))
        throw new Error("Subject cannot be eventified, since it already has property '" + n[r] + "'");
  }
  return Vn;
}
var Bn, Uo;
function ms() {
  if (Uo) return Bn;
  Uo = 1, Bn = t;
  function t(n, r, o) {
    typeof o != "object" && (o = {});
    var a = typeof o.minVelocity == "number" ? o.minVelocity : 5, c = typeof o.amplitude == "number" ? o.amplitude : 0.25, s = typeof o.cancelAnimationFrame == "function" ? o.cancelAnimationFrame : e(), p = typeof o.requestAnimationFrame == "function" ? o.requestAnimationFrame : i(), h, b, x = 342, v, _, A, E, w, z, D, H;
    return {
      start: qe,
      stop: I,
      cancel: ae
    };
    function ae() {
      s(v), s(H);
    }
    function qe() {
      h = n(), E = D = _ = w = 0, b = /* @__PURE__ */ new Date(), s(v), s(H), v = p(O);
    }
    function O() {
      var q = Date.now(), we = q - b;
      b = q;
      var ue = n(), L = ue.x - h.x, At = ue.y - h.y;
      h = ue;
      var St = 1e3 / (1 + we);
      _ = 0.8 * L * St + 0.2 * _, w = 0.8 * At * St + 0.2 * w, v = p(O);
    }
    function I() {
      s(v), s(H);
      var q = n();
      A = q.x, z = q.y, b = Date.now(), (_ < -a || _ > a) && (E = c * _, A += E), (w < -a || w > a) && (D = c * w, z += D), H = p(P);
    }
    function P() {
      var q = Date.now() - b, we = !1, ue = 0, L = 0;
      E && (ue = -E * Math.exp(-q / x), ue > 0.5 || ue < -0.5 ? we = !0 : ue = E = 0), D && (L = -D * Math.exp(-q / x), L > 0.5 || L < -0.5 ? we = !0 : L = D = 0), we && (r(A + ue, z + L), H = p(P));
    }
  }
  function e() {
    return typeof cancelAnimationFrame == "function" ? cancelAnimationFrame : clearTimeout;
  }
  function i() {
    return typeof requestAnimationFrame == "function" ? requestAnimationFrame : function(n) {
      return setTimeout(n, 16);
    };
  }
  return Bn;
}
var Hn, Wo;
function hs() {
  if (Wo) return Hn;
  Wo = 1, Hn = t;
  function t(n) {
    if (n)
      return {
        capture: i,
        release: i
      };
    var r, o, a, c = !1;
    return {
      capture: s,
      release: p
    };
    function s(h) {
      c = !0, o = window.document.onselectstart, a = window.document.ondragstart, window.document.onselectstart = e, r = h, r.ondragstart = e;
    }
    function p() {
      c && (c = !1, window.document.onselectstart = o, r && (r.ondragstart = a));
    }
  }
  function e(n) {
    return n.stopPropagation(), !1;
  }
  function i() {
  }
  return Hn;
}
var qn, Go;
function fs() {
  if (Go) return qn;
  Go = 1, qn = t;
  function t() {
    this.x = 0, this.y = 0, this.scale = 1;
  }
  return qn;
}
var Yi = { exports: {} }, jo;
function bs() {
  if (jo) return Yi.exports;
  jo = 1, Yi.exports = t, Yi.exports.canAttach = e;
  function t(i, n) {
    if (!e(i))
      throw new Error("svg element is required for svg.panzoom to work");
    var r = i.ownerSVGElement;
    if (!r)
      throw new Error(
        "Do not apply panzoom to the root <svg> element. Use its child instead (e.g. <g></g>). As of March 2016 only FireFox supported transform on the root element"
      );
    n.disableKeyboardInteraction || r.setAttribute("tabindex", 0);
    var o = {
      getBBox: c,
      getScreenCTM: s,
      getOwner: a,
      applyTransform: h,
      initTransform: p
    };
    return o;
    function a() {
      return r;
    }
    function c() {
      var b = i.getBBox();
      return {
        left: b.x,
        top: b.y,
        width: b.width,
        height: b.height
      };
    }
    function s() {
      var b = r.getCTM();
      return b || r.getScreenCTM();
    }
    function p(b) {
      var x = i.getCTM();
      x === null && (x = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix()), b.x = x.e, b.y = x.f, b.scale = x.a, r.removeAttributeNS(null, "viewBox");
    }
    function h(b) {
      i.setAttribute("transform", "matrix(" + b.scale + " 0 0 " + b.scale + " " + b.x + " " + b.y + ")");
    }
  }
  function e(i) {
    return i && i.ownerSVGElement && i.getCTM;
  }
  return Yi.exports;
}
var Qi = { exports: {} }, Xo;
function gs() {
  if (Xo) return Qi.exports;
  Xo = 1, Qi.exports = t, Qi.exports.canAttach = e;
  function t(i, n) {
    var r = e(i);
    if (!r)
      throw new Error("panzoom requires DOM element to be attached to the DOM tree");
    var o = i.parentElement;
    i.scrollTop = 0, n.disableKeyboardInteraction || o.setAttribute("tabindex", 0);
    var a = {
      getBBox: s,
      getOwner: c,
      applyTransform: p
    };
    return a;
    function c() {
      return o;
    }
    function s() {
      return {
        left: 0,
        top: 0,
        width: i.clientWidth,
        height: i.clientHeight
      };
    }
    function p(h) {
      i.style.transformOrigin = "0 0 0", i.style.transform = "matrix(" + h.scale + ", 0, 0, " + h.scale + ", " + h.x + ", " + h.y + ")";
    }
  }
  function e(i) {
    return i && i.parentElement && i.style;
  }
  return Qi.exports;
}
var Un, Zo;
function xs() {
  if (Zo) return Un;
  Zo = 1;
  var t = ss(), e = us(), i = ps(), n = ms(), r = hs(), o = r(), a = r(!0), c = fs(), s = bs(), p = gs(), h = 1, b = 1.75, x = 300, v = 200;
  Un = _;
  function _(O, I) {
    I = I || {};
    var P = I.controller;
    if (P || (s.canAttach(O) ? P = s(O, I) : p.canAttach(O) && (P = p(O, I))), !P)
      throw new Error(
        "Cannot create panzoom for the current type of dom element"
      );
    var q = P.getOwner(), we = { x: 0, y: 0 }, ue = !1, L = new c();
    P.initTransform && P.initTransform(L);
    var At = typeof I.filterKey == "function" ? I.filterKey : w, St = typeof I.pinchSpeed == "number" ? I.pinchSpeed : 1, dt = I.bounds, le = typeof I.maxZoom == "number" ? I.maxZoom : Number.POSITIVE_INFINITY, ke = typeof I.minZoom == "number" ? I.minZoom : 0, Pe = typeof I.boundsPadding == "number" ? I.boundsPadding : 0.05, Ge = typeof I.zoomDoubleClickSpeed == "number" ? I.zoomDoubleClickSpeed : b, En = I.beforeWheel || w, xi = I.beforeMouseDown || w, Cn = typeof I.zoomSpeed == "number" ? I.zoomSpeed : h, ut = A(I.transformOrigin), In = I.enableTextSelection ? a : o;
    z(dt), I.autocenter && hc();
    var yi, to = 0, io = 0, vi = 0, no = null, ro = /* @__PURE__ */ new Date(), Tn, wi = !1, _i = !1, je, Xe, $n, kn, Ln, Ye;
    "smoothScroll" in I && !I.smoothScroll ? Ye = ae() : Ye = n(Sc, $c, I.smoothScroll);
    var Nn, Ai, qi, Ui = !1;
    po();
    var Wi = {
      dispose: kc,
      moveBy: ni,
      moveTo: Rn,
      smoothMoveTo: Tc,
      centerOn: Ic,
      zoomTo: Zi,
      zoomAbs: Gi,
      smoothZoom: Xi,
      smoothZoomAbs: Mc,
      showRectangle: mc,
      pause: dc,
      resume: uc,
      isPaused: pc,
      getTransform: fc,
      getMinZoom: bc,
      setMinZoom: gc,
      getMaxZoom: xc,
      setMaxZoom: yc,
      getTransformOrigin: vc,
      setTransformOrigin: wc,
      getZoomSpeed: _c,
      setZoomSpeed: Ac
    };
    i(Wi);
    var oo = typeof I.initialX == "number" ? I.initialX : L.x, ao = typeof I.initialY == "number" ? I.initialY : L.y, lo = typeof I.initialZoom == "number" ? I.initialZoom : L.scale;
    return (oo != L.x || ao != L.y || lo != L.scale) && Gi(oo, ao, lo), Wi;
    function dc() {
      mo(), Ui = !0;
    }
    function uc() {
      Ui && (po(), Ui = !1);
    }
    function pc() {
      return Ui;
    }
    function mc(g) {
      var S = q.getBoundingClientRect(), C = Ht(S.width, S.height), T = g.right - g.left, U = g.bottom - g.top;
      if (!Number.isFinite(T) || !Number.isFinite(U))
        throw new Error("Invalid rectangle");
      var Q = C.x / T, J = C.y / U, Ae = Math.min(Q, J);
      L.x = -(g.left + T / 2) * Ae + C.x / 2, L.y = -(g.top + U / 2) * Ae + C.y / 2, L.scale = Ae;
    }
    function Ht(g, S) {
      if (P.getScreenCTM) {
        var C = P.getScreenCTM(), T = C.a, U = C.d, Q = C.e, J = C.f;
        we.x = g * T - Q, we.y = S * U - J;
      } else
        we.x = g, we.y = S;
      return we;
    }
    function hc() {
      var g, S, C = 0, T = 0, U = so();
      if (U)
        C = U.left, T = U.top, g = U.right - U.left, S = U.bottom - U.top;
      else {
        var Q = q.getBoundingClientRect();
        g = Q.width, S = Q.height;
      }
      var J = P.getBBox();
      if (!(J.width === 0 || J.height === 0)) {
        var Ae = S / J.height, oi = g / J.width, qt = Math.min(oi, Ae);
        L.x = -(J.left + J.width / 2) * qt + g / 2 + C, L.y = -(J.top + J.height / 2) * qt + S / 2 + T, L.scale = qt;
      }
    }
    function fc() {
      return L;
    }
    function bc() {
      return ke;
    }
    function gc(g) {
      ke = g;
    }
    function xc() {
      return le;
    }
    function yc(g) {
      le = g;
    }
    function vc() {
      return ut;
    }
    function wc(g) {
      ut = A(g);
    }
    function _c() {
      return Cn;
    }
    function Ac(g) {
      if (!Number.isFinite(g))
        throw new Error("Zoom speed should be a number");
      Cn = g;
    }
    function Sc() {
      return {
        x: L.x,
        y: L.y
      };
    }
    function Rn(g, S) {
      L.x = g, L.y = S, zn(), ri("pan"), Dn();
    }
    function co(g, S) {
      Rn(L.x + g, L.y + S);
    }
    function zn() {
      var g = so();
      if (g) {
        var S = !1, C = Ec(), T = g.left - C.right;
        return T > 0 && (L.x += T, S = !0), T = g.right - C.left, T < 0 && (L.x += T, S = !0), T = g.top - C.bottom, T > 0 && (L.y += T, S = !0), T = g.bottom - C.top, T < 0 && (L.y += T, S = !0), S;
      }
    }
    function so() {
      if (dt) {
        if (typeof dt == "boolean") {
          var g = q.getBoundingClientRect(), S = g.width, C = g.height;
          return {
            left: S * Pe,
            top: C * Pe,
            right: S * (1 - Pe),
            bottom: C * (1 - Pe)
          };
        }
        return dt;
      }
    }
    function Ec() {
      var g = P.getBBox(), S = Cc(g.left, g.top);
      return {
        left: S.x,
        top: S.y,
        right: g.width * L.scale + S.x,
        bottom: g.height * L.scale + S.y
      };
    }
    function Cc(g, S) {
      return {
        x: g * L.scale + L.x,
        y: S * L.scale + L.y
      };
    }
    function Dn() {
      ue = !0, yi = window.requestAnimationFrame(Lc);
    }
    function uo(g, S, C) {
      if (H(g) || H(S) || H(C))
        throw new Error("zoom requires valid numbers");
      var T = L.scale * C;
      if (T < ke) {
        if (L.scale === ke) return;
        C = ke / L.scale;
      }
      if (T > le) {
        if (L.scale === le) return;
        C = le / L.scale;
      }
      var U = Ht(g, S);
      if (L.x = U.x - C * (U.x - L.x), L.y = U.y - C * (U.y - L.y), dt && Pe === 1 && ke === 1)
        L.scale *= C, zn();
      else {
        var Q = zn();
        Q || (L.scale *= C);
      }
      ri("zoom"), Dn();
    }
    function Gi(g, S, C) {
      var T = C / L.scale;
      uo(g, S, T);
    }
    function Ic(g) {
      var S = g.ownerSVGElement;
      if (!S)
        throw new Error("ui element is required to be within the scene");
      var C = g.getBoundingClientRect(), T = C.left + C.width / 2, U = C.top + C.height / 2, Q = S.getBoundingClientRect(), J = Q.width / 2 - T, Ae = Q.height / 2 - U;
      ni(J, Ae, !0);
    }
    function Tc(g, S) {
      ni(g - L.x, S - L.y, !0);
    }
    function ni(g, S, C) {
      if (!C)
        return co(g, S);
      Nn && Nn.cancel();
      var T = { x: 0, y: 0 }, U = { x: g, y: S }, Q = 0, J = 0;
      Nn = e(T, U, {
        step: function(Ae) {
          co(Ae.x - Q, Ae.y - J), Q = Ae.x, J = Ae.y;
        }
      });
    }
    function $c(g, S) {
      Ki(), Rn(g, S);
    }
    function kc() {
      mo();
    }
    function po() {
      q.addEventListener("mousedown", wo, { passive: !1 }), q.addEventListener("dblclick", vo, { passive: !1 }), q.addEventListener("touchstart", fo, { passive: !1 }), q.addEventListener("keydown", ho, { passive: !1 }), t.addWheelListener(q, Co, { passive: !1 }), Dn();
    }
    function mo() {
      t.removeWheelListener(q, Co), q.removeEventListener("mousedown", wo), q.removeEventListener("keydown", ho), q.removeEventListener("dblclick", vo), q.removeEventListener("touchstart", fo), yi && (window.cancelAnimationFrame(yi), yi = 0), Ye.cancel(), So(), Eo(), In.release(), On();
    }
    function Lc() {
      ue && Nc();
    }
    function Nc() {
      ue = !1, P.applyTransform(L), ri("transform"), yi = 0;
    }
    function ho(g) {
      var S = 0, C = 0, T = 0;
      if (g.keyCode === 38 ? C = 1 : g.keyCode === 40 ? C = -1 : g.keyCode === 37 ? S = 1 : g.keyCode === 39 ? S = -1 : g.keyCode === 189 || g.keyCode === 109 ? T = 1 : (g.keyCode === 187 || g.keyCode === 107) && (T = -1), !At(g, S, C, T)) {
        if (S || C) {
          g.preventDefault(), g.stopPropagation();
          var U = q.getBoundingClientRect(), Q = Math.min(U.width, U.height), J = 0.05, Ae = Q * J * S, oi = Q * J * C;
          ni(Ae, oi);
        }
        if (T) {
          var qt = Io(T * 100), Q = ut ? Ei() : Rc();
          Zi(Q.x, Q.y, qt);
        }
      }
    }
    function Rc() {
      var g = q.getBoundingClientRect();
      return {
        x: g.width / 2,
        y: g.height / 2
      };
    }
    function fo(g) {
      if (zc(g), Si(), g.touches.length === 1)
        return Oc(g, g.touches[0]);
      g.touches.length === 2 && (Ln = yo(g.touches[0], g.touches[1]), qi = !0, bo());
    }
    function zc(g) {
      I.onTouch && !I.onTouch(g) || (g.stopPropagation(), g.preventDefault());
    }
    function Dc(g) {
      Si(), !(I.onDoubleClick && !I.onDoubleClick(g)) && (g.preventDefault(), g.stopPropagation());
    }
    function Oc(g) {
      io = /* @__PURE__ */ new Date();
      var S = g.touches[0], C = pt(S);
      Tn = C;
      var T = Ht(C.x, C.y);
      je = T.x, Xe = T.y, $n = je, kn = Xe, Ye.cancel(), bo();
    }
    function bo() {
      wi || (wi = !0, document.addEventListener("touchmove", go), document.addEventListener("touchend", ji), document.addEventListener("touchcancel", ji));
    }
    function go(g) {
      if (g.touches.length === 1) {
        g.stopPropagation();
        var S = g.touches[0], C = pt(S), T = Ht(C.x, C.y), U = T.x - je, Q = T.y - Xe;
        U !== 0 && Q !== 0 && To(), je = T.x, Xe = T.y, ni(U, Q);
      } else if (g.touches.length === 2) {
        qi = !0;
        var J = g.touches[0], Ae = g.touches[1], oi = yo(J, Ae), qt = 1 + (oi / Ln - 1) * St, $o = pt(J), ko = pt(Ae);
        if (je = ($o.x + ko.x) / 2, Xe = ($o.y + ko.y) / 2, ut) {
          var C = Ei();
          je = C.x, Xe = C.y;
        }
        Zi(je, Xe, qt), Ln = oi, g.stopPropagation(), g.preventDefault();
      }
    }
    function Si() {
      vi && (clearTimeout(vi), vi = 0);
    }
    function xo(g) {
      if (I.onClick) {
        Si();
        var S = je - $n, C = Xe - kn, T = Math.sqrt(S * S + C * C);
        T > 5 || (vi = setTimeout(function() {
          vi = 0, I.onClick(g);
        }, x));
      }
    }
    function ji(g) {
      if (Si(), g.touches.length > 0) {
        var S = pt(g.touches[0]), C = Ht(S.x, S.y);
        je = C.x, Xe = C.y;
      } else {
        var T = /* @__PURE__ */ new Date();
        if (T - to < x)
          if (ut) {
            var S = Ei();
            Xi(S.x, S.y, Ge);
          } else
            Xi(Tn.x, Tn.y, Ge);
        else T - io < v && xo(g);
        to = T, On(), Eo();
      }
    }
    function yo(g, S) {
      var C = g.clientX - S.clientX, T = g.clientY - S.clientY;
      return Math.sqrt(C * C + T * T);
    }
    function vo(g) {
      Dc(g);
      var S = pt(g);
      ut && (S = Ei()), Xi(S.x, S.y, Ge);
    }
    function wo(g) {
      if (Si(), !xi(g)) {
        if (no = g, ro = /* @__PURE__ */ new Date(), wi)
          return g.stopPropagation(), !1;
        var S = g.button === 1 && window.event !== null || g.button === 0;
        if (S) {
          Ye.cancel();
          var C = pt(g), T = Ht(C.x, C.y);
          return $n = je = T.x, kn = Xe = T.y, document.addEventListener("mousemove", _o), document.addEventListener("mouseup", Ao), In.capture(g.target || g.srcElement), !1;
        }
      }
    }
    function _o(g) {
      if (!wi) {
        To();
        var S = pt(g), C = Ht(S.x, S.y), T = C.x - je, U = C.y - Xe;
        je = C.x, Xe = C.y, ni(T, U);
      }
    }
    function Ao() {
      var g = /* @__PURE__ */ new Date();
      g - ro < v && xo(no), In.release(), On(), So();
    }
    function So() {
      document.removeEventListener("mousemove", _o), document.removeEventListener("mouseup", Ao), _i = !1;
    }
    function Eo() {
      document.removeEventListener("touchmove", go), document.removeEventListener("touchend", ji), document.removeEventListener("touchcancel", ji), _i = !1, qi = !1, wi = !1;
    }
    function Co(g) {
      if (!En(g)) {
        Ye.cancel();
        var S = g.deltaY;
        g.deltaMode > 0 && (S *= 100);
        var C = Io(S);
        if (C !== 1) {
          var T = ut ? Ei() : pt(g);
          Zi(T.x, T.y, C), g.preventDefault();
        }
      }
    }
    function pt(g) {
      var S, C, T = q.getBoundingClientRect();
      return S = g.clientX - T.left, C = g.clientY - T.top, { x: S, y: C };
    }
    function Xi(g, S, C) {
      var T = L.scale, U = { scale: T }, Q = { scale: C * T };
      Ye.cancel(), Ki(), Ai = e(U, Q, {
        step: function(J) {
          Gi(g, S, J.scale);
        },
        done: Pc
      });
    }
    function Mc(g, S, C) {
      var T = L.scale, U = { scale: T }, Q = { scale: C };
      Ye.cancel(), Ki(), Ai = e(U, Q, {
        step: function(J) {
          Gi(g, S, J.scale);
        }
      });
    }
    function Ei() {
      var g = q.getBoundingClientRect();
      return {
        x: g.width * ut.x,
        y: g.height * ut.y
      };
    }
    function Zi(g, S, C) {
      return Ye.cancel(), Ki(), uo(g, S, C);
    }
    function Ki() {
      Ai && (Ai.cancel(), Ai = null);
    }
    function Io(g) {
      var S = Math.sign(g), C = Math.min(0.25, Math.abs(Cn * g / 128));
      return 1 - S * C;
    }
    function To() {
      _i || (ri("panstart"), _i = !0, Ye.start());
    }
    function On() {
      _i && (qi || Ye.stop(), ri("panend"));
    }
    function Pc() {
      ri("zoomend");
    }
    function ri(g) {
      Wi.fire(g, Wi);
    }
  }
  function A(O) {
    if (O) {
      if (typeof O == "object")
        return (!D(O.x) || !D(O.y)) && E(O), O;
      E();
    }
  }
  function E(O) {
    throw console.error(O), new Error(
      [
        "Cannot parse transform origin.",
        "Some good examples:",
        '  "center center" can be achieved with {x: 0.5, y: 0.5}',
        '  "top center" can be achieved with {x: 0.5, y: 0}',
        '  "bottom right" can be achieved with {x: 1, y: 1}'
      ].join(`
`)
    );
  }
  function w() {
  }
  function z(O) {
    var I = typeof O;
    if (!(I === "undefined" || I === "boolean")) {
      var P = D(O.left) && D(O.top) && D(O.bottom) && D(O.right);
      if (!P)
        throw new Error(
          "Bounds object is not valid. It can be: undefined, boolean (true|false) or an object {left, top, right, bottom}"
        );
    }
  }
  function D(O) {
    return Number.isFinite(O);
  }
  function H(O) {
    return Number.isNaN ? Number.isNaN(O) : O !== O;
  }
  function ae() {
    return {
      start: w,
      stop: w,
      cancel: w
    };
  }
  function qe() {
    if (typeof document > "u") return;
    var O = document.getElementsByTagName("script");
    if (!O) return;
    for (var I, P = 0; P < O.length; ++P) {
      var q = O[P];
      if (q.src && q.src.match(/\bpanzoom(\.min)?\.js/)) {
        I = q;
        break;
      }
    }
    if (!I) return;
    var we = I.getAttribute("query");
    if (!we) return;
    var ue = I.getAttribute("name") || "pz", L = Date.now();
    At();
    function At() {
      var le = document.querySelector(we);
      if (!le) {
        var ke = Date.now(), Pe = ke - L;
        if (Pe < 2e3) {
          setTimeout(At, 100);
          return;
        }
        console.error("Cannot find the panzoom element", ue);
        return;
      }
      var Ge = St(I);
      console.log(Ge), window[ue] = _(le, Ge);
    }
    function St(le) {
      for (var ke = le.attributes, Pe = {}, Ge = 0; Ge < ke.length; ++Ge) {
        var En = ke[Ge], xi = dt(En);
        xi && (Pe[xi.name] = xi.value);
      }
      return Pe;
    }
    function dt(le) {
      if (le.name) {
        var ke = le.name[0] === "p" && le.name[1] === "z" && le.name[2] === "-";
        if (ke) {
          var Pe = le.name.substr(3), Ge = JSON.parse(le.value);
          return { name: Pe, value: Ge };
        }
      }
    }
  }
  return qe(), Un;
}
var ys = xs();
const vs = /* @__PURE__ */ cs(ys);
var or = function(t, e) {
  return or = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, n) {
    i.__proto__ = n;
  } || function(i, n) {
    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (i[r] = n[r]);
  }, or(t, e);
};
function st(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  or(t, e);
  function i() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
}
var de = function() {
  return de = Object.assign || function(e) {
    for (var i, n = 1, r = arguments.length; n < r; n++) {
      i = arguments[n];
      for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
    }
    return e;
  }, de.apply(this, arguments);
};
function m(t, e, i, n) {
  var r = arguments.length, o = r < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, i) : n, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(t, e, i, n);
  else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) : a(e, i)) || o);
  return r > 3 && o && Object.defineProperty(e, i, o), o;
}
function ht(t) {
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
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ya = (t) => t.nodeType === Node.ELEMENT_NODE;
function fn(t) {
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
const Qa = () => {
}, ws = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", Qa, ws);
document.removeEventListener("x", Qa);
const Br = (t = window.document) => {
  let e = t.activeElement;
  const i = [];
  if (!e)
    return i;
  for (; e && (i.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return i;
}, Ja = (t) => {
  const e = Br();
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
class Jt extends be {
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
var et = (
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
var _s = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Ko = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, As = {
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
var Ss = (
  /** @class */
  function(t) {
    st(e, t);
    function e(i) {
      return t.call(this, de(de({}, e.defaultAdapter), i)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return _s;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return As;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ko;
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
      i > 0 && (i += Ko.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(i), this.adapter.addClass(n);
    }, e.prototype.closeNotch = function() {
      var i = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(i), this.adapter.removeNotchWidthProperty();
    }, e;
  }(et)
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
class Es {
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
const Yo = /* @__PURE__ */ new WeakMap(), ye = di((t) => (e) => {
  if (!(e instanceof Nt) || e instanceof ui || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = e, { element: n } = i;
  let r = Yo.get(e);
  r === void 0 && (n.setAttribute("class", i.strings.join(" ")), Yo.set(e, r = /* @__PURE__ */ new Set()));
  const o = n.classList || new Es(n);
  r.forEach((a) => {
    a in t || (o.remove(a), r.delete(a));
  });
  for (const a in t) {
    const c = t[a];
    c != r.has(a) && (c ? (o.add(a), r.add(a)) : (o.remove(a), r.delete(a)));
  }
  typeof o.commit == "function" && o.commit();
});
class Pi extends Jt {
  constructor() {
    super(...arguments), this.mdcFoundationClass = Ss, this.width = 0, this.open = !1, this.lastOpen = this.open;
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
    const e = ye({
      "mdc-notched-outline--notched": this.open
    });
    return d`
      <span class="mdc-notched-outline ${e}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`;
  }
}
m([
  R(".mdc-notched-outline")
], Pi.prototype, "mdcRoot", void 0);
m([
  f({ type: Number })
], Pi.prototype, "width", void 0);
m([
  f({ type: Boolean, reflect: !0 })
], Pi.prototype, "open", void 0);
m([
  R(".mdc-notched-outline__notch")
], Pi.prototype, "notchElement", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Cs = ie`.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host([dir=rtl]){text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`;
let ar = class extends Pi {
};
ar.styles = [Cs];
ar = m([
  Z("mwc-notched-outline")
], ar);
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
function Is(t, e) {
  var i = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return i.call(t, e);
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
var Ts = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, $s = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Qo = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function ks(t, e, i) {
  if (!t)
    return { x: 0, y: 0 };
  var n = e.x, r = e.y, o = n + i.left, a = r + i.top, c, s;
  if (t.type === "touchstart") {
    var p = t;
    c = p.changedTouches[0].pageX - o, s = p.changedTouches[0].pageY - a;
  } else {
    var h = t;
    c = h.pageX - o, s = h.pageY - a;
  }
  return { x: c, y: s };
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
var Jo = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], ea = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Ji = [], Ls = (
  /** @class */
  function(t) {
    st(e, t);
    function e(i) {
      var n = t.call(this, de(de({}, e.defaultAdapter), i)) || this;
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
        return Ts;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return $s;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Qo;
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
          for (var o = ht(Jo), a = o.next(); !a.done; a = o.next()) {
            var c = a.value;
            this.adapter.registerInteractionHandler(c, this.activateHandler);
          }
        } catch (s) {
          n = { error: s };
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
          for (var o = ht(ea), a = o.next(); !a.done; a = o.next()) {
            var c = a.value;
            this.adapter.registerDocumentInteractionHandler(c, this.deactivateHandler);
          }
        } catch (s) {
          n = { error: s };
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
        for (var r = ht(Jo), o = r.next(); !o.done; o = r.next()) {
          var a = o.value;
          this.adapter.deregisterInteractionHandler(a, this.activateHandler);
        }
      } catch (c) {
        i = { error: c };
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
        for (var r = ht(ea), o = r.next(); !o.done; o = r.next()) {
          var a = o.value;
          this.adapter.deregisterDocumentInteractionHandler(a, this.deactivateHandler);
        }
      } catch (c) {
        i = { error: c };
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
            var c = i !== void 0 && Ji.length > 0 && Ji.some(function(s) {
              return n.adapter.containsEventTarget(s);
            });
            if (c) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (Ji.push(i.target), this.registerDeactivationHandlers(i)), r.wasElementMadeActive = this.checkElementMadeActive(i), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Ji = [], !r.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (r.wasElementMadeActive = n.checkElementMadeActive(i), r.wasElementMadeActive && n.animateActivation()), r.wasElementMadeActive || (n.activationState = n.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var i = this, n = e.strings, r = n.VAR_FG_TRANSLATE_START, o = n.VAR_FG_TRANSLATE_END, a = e.cssClasses, c = a.FG_DEACTIVATION, s = a.FG_ACTIVATION, p = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var h = "", b = "";
      if (!this.adapter.isUnbounded()) {
        var x = this.getFgTranslationCoordinates(), v = x.startPoint, _ = x.endPoint;
        h = v.x + "px, " + v.y + "px", b = _.x + "px, " + _.y + "px";
      }
      this.adapter.updateCssVariable(r, h), this.adapter.updateCssVariable(o, b), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(c), this.adapter.computeBoundingRect(), this.adapter.addClass(s), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, p);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, n = i.activationEvent, r = i.wasActivatedByPointer, o;
      r ? o = ks(n, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : o = {
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
      var i = this, n = e.cssClasses.FG_DEACTIVATION, r = this.activationState, o = r.hasDeactivationUXRun, a = r.isActivated, c = o || !a;
      c && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(n), this.fgDeactivationRemovalTimer = setTimeout(function() {
        i.adapter.removeClass(n);
      }, Qo.FG_DEACTIVATION_MS));
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
        var r = de({}, n);
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
  }(et)
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
const ta = /* @__PURE__ */ new WeakMap(), el = di((t) => (e) => {
  if (!(e instanceof Nt) || e instanceof ui || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = e, { style: n } = i.element;
  let r = ta.get(e);
  r === void 0 && (n.cssText = i.strings.join(" "), ta.set(e, r = /* @__PURE__ */ new Set())), r.forEach((o) => {
    o in t || (r.delete(o), o.indexOf("-") === -1 ? n[o] = null : n.removeProperty(o));
  });
  for (const o in t)
    r.add(o), o.indexOf("-") === -1 ? n[o] = t[o] : n.setProperty(o, t[o]);
});
class ve extends Jt {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Ls;
  }
  get isActive() {
    return Is(this.parentElement || this, ":active");
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
    return d`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${ye(n)}"
          style="${el({
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
  R(".mdc-ripple-surface")
], ve.prototype, "mdcRoot", void 0);
m([
  f({ type: Boolean })
], ve.prototype, "primary", void 0);
m([
  f({ type: Boolean })
], ve.prototype, "accent", void 0);
m([
  f({ type: Boolean })
], ve.prototype, "unbounded", void 0);
m([
  f({ type: Boolean })
], ve.prototype, "disabled", void 0);
m([
  f({ type: Boolean })
], ve.prototype, "activated", void 0);
m([
  f({ type: Boolean })
], ve.prototype, "selected", void 0);
m([
  f({ type: Boolean })
], ve.prototype, "internalUseStateLayerCustomProperties", void 0);
m([
  N()
], ve.prototype, "hovering", void 0);
m([
  N()
], ve.prototype, "bgFocused", void 0);
m([
  N()
], ve.prototype, "fgActivation", void 0);
m([
  N()
], ve.prototype, "fgDeactivation", void 0);
m([
  N()
], ve.prototype, "fgScale", void 0);
m([
  N()
], ve.prototype, "fgSize", void 0);
m([
  N()
], ve.prototype, "translateStart", void 0);
m([
  N()
], ve.prototype, "translateEnd", void 0);
m([
  N()
], ve.prototype, "leftPos", void 0);
m([
  N()
], ve.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ns = ie`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let lr = class extends ve {
};
lr.styles = [Ns];
lr = m([
  Z("mwc-ripple")
], lr);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ne = (t) => (
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
          const s = this.constructor._observers.get(a);
          s !== void 0 && s.call(this, this[a], o);
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
class mi {
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
class Ee extends be {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new mi(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const e = this.renderText(), i = this.graphic ? this.renderGraphic() : d``, n = this.hasMeta ? this.renderMeta() : d``;
    return d`
      ${this.renderRipple()}
      ${i}
      ${e}
      ${n}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? d`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? d`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return d`
      <span class="mdc-deprecated-list-item__graphic material-icons ${ye(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return d`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return d`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return d`<slot></slot>`;
  }
  renderTwoline() {
    return d`
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
  R("slot")
], Ee.prototype, "slotElement", void 0);
m([
  pi("mwc-ripple")
], Ee.prototype, "ripple", void 0);
m([
  f({ type: String })
], Ee.prototype, "value", void 0);
m([
  f({ type: String, reflect: !0 })
], Ee.prototype, "group", void 0);
m([
  f({ type: Number, reflect: !0 })
], Ee.prototype, "tabindex", void 0);
m([
  f({ type: Boolean, reflect: !0 }),
  ne(function(t) {
    t ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], Ee.prototype, "disabled", void 0);
m([
  f({ type: Boolean, reflect: !0 })
], Ee.prototype, "twoline", void 0);
m([
  f({ type: Boolean, reflect: !0 })
], Ee.prototype, "activated", void 0);
m([
  f({ type: String, reflect: !0 })
], Ee.prototype, "graphic", void 0);
m([
  f({ type: Boolean })
], Ee.prototype, "multipleGraphics", void 0);
m([
  f({ type: Boolean })
], Ee.prototype, "hasMeta", void 0);
m([
  f({ type: Boolean, reflect: !0 }),
  ne(function(t) {
    t ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], Ee.prototype, "noninteractive", void 0);
m([
  f({ type: Boolean, reflect: !0 }),
  ne(function(t) {
    const e = this.getAttribute("role"), i = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (i && t ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(t, "property");
  })
], Ee.prototype, "selected", void 0);
m([
  N()
], Ee.prototype, "shouldRenderRipple", void 0);
m([
  N()
], Ee.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const tl = ie`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let cr = class extends Ee {
};
cr.styles = [tl];
cr = m([
  Z("mwc-list-item")
], cr);
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
const Wn = /* @__PURE__ */ new WeakMap(), ee = di((t) => (e) => {
  const i = Wn.get(e);
  if (t === void 0 && e instanceof Nt) {
    if (i !== void 0 || !Wn.has(e)) {
      const n = e.committer.name;
      e.committer.element.removeAttribute(n);
    }
  } else t !== i && e.setValue(t);
  Wn.set(e, t);
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
var M = {
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
}, De = /* @__PURE__ */ new Set();
De.add(M.BACKSPACE);
De.add(M.ENTER);
De.add(M.SPACEBAR);
De.add(M.PAGE_UP);
De.add(M.PAGE_DOWN);
De.add(M.END);
De.add(M.HOME);
De.add(M.ARROW_LEFT);
De.add(M.ARROW_UP);
De.add(M.ARROW_RIGHT);
De.add(M.ARROW_DOWN);
De.add(M.DELETE);
De.add(M.ESCAPE);
De.add(M.TAB);
var Be = {
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
}, Oe = /* @__PURE__ */ new Map();
Oe.set(Be.BACKSPACE, M.BACKSPACE);
Oe.set(Be.ENTER, M.ENTER);
Oe.set(Be.SPACEBAR, M.SPACEBAR);
Oe.set(Be.PAGE_UP, M.PAGE_UP);
Oe.set(Be.PAGE_DOWN, M.PAGE_DOWN);
Oe.set(Be.END, M.END);
Oe.set(Be.HOME, M.HOME);
Oe.set(Be.ARROW_LEFT, M.ARROW_LEFT);
Oe.set(Be.ARROW_UP, M.ARROW_UP);
Oe.set(Be.ARROW_RIGHT, M.ARROW_RIGHT);
Oe.set(Be.ARROW_DOWN, M.ARROW_DOWN);
Oe.set(Be.DELETE, M.DELETE);
Oe.set(Be.ESCAPE, M.ESCAPE);
Oe.set(Be.TAB, M.TAB);
var Rt = /* @__PURE__ */ new Set();
Rt.add(M.PAGE_UP);
Rt.add(M.PAGE_DOWN);
Rt.add(M.END);
Rt.add(M.HOME);
Rt.add(M.ARROW_LEFT);
Rt.add(M.ARROW_UP);
Rt.add(M.ARROW_RIGHT);
Rt.add(M.ARROW_DOWN);
function pe(t) {
  var e = t.key;
  if (De.has(e))
    return e;
  var i = Oe.get(t.keyCode);
  return i || M.UNKNOWN;
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
var Et, mt, te = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Et = {}, Et["" + te.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Et["" + te.LIST_ITEM_CLASS] = "mdc-list-item", Et["" + te.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Et["" + te.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Et["" + te.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Et["" + te.ROOT] = "mdc-list";
var ai = (mt = {}, mt["" + te.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", mt["" + te.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", mt["" + te.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", mt["" + te.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", mt["" + te.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", mt["" + te.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", mt["" + te.ROOT] = "mdc-deprecated-list", mt), en = {
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
    .` + te.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + te.LIST_ITEM_CLASS + ` a,
    .` + ai[te.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + ai[te.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + te.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + te.LIST_ITEM_CLASS + ` a,
    .` + te.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + te.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + ai[te.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + ai[te.LIST_ITEM_CLASS] + ` a,
    .` + ai[te.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + ai[te.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, Le = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const sr = (t, e) => t - e, Rs = (t, e) => {
  const i = Array.from(t), n = Array.from(e), r = { added: [], removed: [] }, o = i.sort(sr), a = n.sort(sr);
  let c = 0, s = 0;
  for (; c < o.length || s < a.length; ) {
    const p = o[c], h = a[s];
    if (p === h) {
      c++, s++;
      continue;
    }
    if (p !== void 0 && (h === void 0 || p < h)) {
      r.removed.push(p), c++;
      continue;
    }
    if (h !== void 0 && (p === void 0 || h < p)) {
      r.added.push(h), s++;
      continue;
    }
  }
  return r;
}, zs = ["input", "button", "textarea", "select"];
function Ri(t) {
  return t instanceof Set;
}
const Gn = (t) => {
  const e = t === Le.UNSET_INDEX ? /* @__PURE__ */ new Set() : t;
  return Ri(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class Hr extends et {
  constructor(e) {
    super(Object.assign(Object.assign({}, Hr.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = Le.UNSET_INDEX, this.focusedItemIndex_ = Le.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return en;
  }
  static get numbers() {
    return Le;
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
      if (!Ri(i)) {
        const n = i === Le.UNSET_INDEX;
        this.selectedIndex_ = n ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
    } else if (Ri(i))
      if (i.size) {
        const n = Array.from(i).sort(sr);
        this.selectedIndex_ = n[0];
      } else
        this.selectedIndex_ = Le.UNSET_INDEX;
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
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(Gn(e)) : this.setSingleSelectionAtIndex_(e));
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
    const r = pe(e) === "ArrowLeft", o = pe(e) === "ArrowUp", a = pe(e) === "ArrowRight", c = pe(e) === "ArrowDown", s = pe(e) === "Home", p = pe(e) === "End", h = pe(e) === "Enter", b = pe(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      o || p ? (e.preventDefault(), this.focusLastElement()) : (c || s) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let x = this.adapter.getFocusedElementIndex();
    if (x === -1 && (x = n, x < 0))
      return;
    let v;
    if (this.isVertical_ && c || !this.isVertical_ && a)
      this.preventDefaultEvent(e), v = this.focusNextElement(x);
    else if (this.isVertical_ && o || !this.isVertical_ && r)
      this.preventDefaultEvent(e), v = this.focusPrevElement(x);
    else if (s)
      this.preventDefaultEvent(e), v = this.focusFirstElement();
    else if (p)
      this.preventDefaultEvent(e), v = this.focusLastElement();
    else if ((h || b) && i) {
      const _ = e.target;
      if (_ && _.tagName === "A" && h)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(x, !0);
    }
    this.focusedItemIndex_ = x, v !== void 0 && (this.setTabindexAtIndex_(v), this.focusedItemIndex_ = v);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, i, n) {
    e !== Le.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, i, n), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
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
    zs.indexOf(n) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, i = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== Le.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), i && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, i = !0) {
    const n = Gn(this.selectedIndex_), r = Rs(n, e);
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
    this.selectedIndex_ === Le.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, en.ARIA_CURRENT));
    const i = this.ariaCurrentAttrValue_ !== null, n = i ? en.ARIA_CURRENT : en.ARIA_SELECTED;
    this.selectedIndex_ !== Le.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, n, "false");
    const r = i ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, n, r);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === Le.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== Le.UNSET_INDEX ? e = this.selectedIndex_ : Ri(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
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
      return e === Le.UNSET_INDEX || this.isIndexInRange_(e);
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
    this.isMulti_ && (r = /* @__PURE__ */ new Set([e])), this.isIndexValid_(r) && (this.isMulti_ ? this.toggleMultiAtIndex(e, n, i) : i || n ? this.setSingleSelectionAtIndex_(e, i) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(Le.UNSET_INDEX), i && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, i, n = !0) {
    let r = !1;
    i === void 0 ? r = !this.adapter.getSelectedStateForElementIndex(e) : r = i;
    const o = Gn(this.selectedIndex_);
    r ? o.add(e) : o.delete(e), this.setMultiSelectionAtIndex_(o, n);
  }
}
function Ds(t, e = 50) {
  let i;
  return function(n = !0) {
    clearTimeout(i), i = setTimeout(() => {
      t(n);
    }, e);
  };
}
const tn = (t) => t.hasAttribute("mwc-list-item");
function Os() {
  const t = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), t();
}
class Me extends Jt {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = Hr, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = Ds(this.layout.bind(this));
    this.debouncedLayout = (i = !0) => {
      Os.call(this), e(i);
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
      tn(a) && (n.push(a), a._managingList = this), a.hasAttribute("divider") && !a.hasAttribute("role") && a.setAttribute("role", "separator");
    this.items_ = n;
    const r = /* @__PURE__ */ new Set();
    if (this.items_.forEach((a, c) => {
      this.itemRoles ? a.setAttribute("role", this.itemRoles) : a.removeAttribute("role"), a.selected && r.add(c);
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
    if (!Ri(e))
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
    return d`
      <!-- @ts-ignore -->
      <ul
          tabindex=${n}
          role="${ee(e)}"
          aria-label="${ee(i)}"
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
    return this.emptyMessage !== void 0 && i.length === 0 ? d`
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
      const i = this.getIndexOfTarget(e), n = e.target, r = tn(n);
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
      if (Ya(r) && tn(r) && (o = i.indexOf(r)), o !== -1)
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
      isFocusInsideList: () => Ja(this),
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
    const e = Br();
    if (!e.length)
      return -1;
    for (let i = e.length - 1; i >= 0; i--) {
      const n = e[i];
      if (tn(n))
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
  f({ type: String })
], Me.prototype, "emptyMessage", void 0);
m([
  R(".mdc-deprecated-list")
], Me.prototype, "mdcRoot", void 0);
m([
  Pr("", !0, "*")
], Me.prototype, "assignedElements", void 0);
m([
  Pr("", !0, '[tabindex="0"]')
], Me.prototype, "tabbableElements", void 0);
m([
  f({ type: Boolean }),
  ne(function(t) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(t);
  })
], Me.prototype, "activatable", void 0);
m([
  f({ type: Boolean }),
  ne(function(t, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(t), e !== void 0 && this.layout();
  })
], Me.prototype, "multi", void 0);
m([
  f({ type: Boolean }),
  ne(function(t) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(t);
  })
], Me.prototype, "wrapFocus", void 0);
m([
  f({ type: String }),
  ne(function(t, e) {
    e !== void 0 && this.updateItems();
  })
], Me.prototype, "itemRoles", void 0);
m([
  f({ type: String })
], Me.prototype, "innerRole", void 0);
m([
  f({ type: String })
], Me.prototype, "innerAriaLabel", void 0);
m([
  f({ type: Boolean })
], Me.prototype, "rootTabbable", void 0);
m([
  f({ type: Boolean, reflect: !0 }),
  ne(function(t) {
    var e, i;
    if (t) {
      const n = (i = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && i !== void 0 ? i : null;
      this.previousTabindex = n, n && n.setAttribute("tabindex", "-1");
    } else !t && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], Me.prototype, "noninteractive", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ms = ie`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let dn = class extends Me {
};
dn.styles = [Ms];
dn = m([
  Z("mwc-list")
], dn);
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
var Ps = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Fs = {
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
}, nn = {
  /** Total duration of menu-surface open animation. */
  TRANSITION_OPEN_DURATION: 120,
  /** Total duration of menu-surface close animation. */
  TRANSITION_CLOSE_DURATION: 75,
  /** Margin left to the edge of the viewport when menu-surface is at maximum possible height. Also used as a viewport margin. */
  MARGIN_TO_EDGE: 32,
  /** Ratio of anchor width to menu-surface width for switching from corner positioning to center positioning. */
  ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67
}, se;
(function(t) {
  t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL";
})(se || (se = {}));
var Ne;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})(Ne || (Ne = {}));
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
var il = (
  /** @class */
  function(t) {
    st(e, t);
    function e(i) {
      var n = t.call(this, de(de({}, e.defaultAdapter), i)) || this;
      return n.isSurfaceOpen = !1, n.isQuickOpen = !1, n.isHoistedElement = !1, n.isFixedPosition = !1, n.isHorizontallyCenteredOnViewport = !1, n.maxHeight = 0, n.openAnimationEndTimerId = 0, n.closeAnimationEndTimerId = 0, n.animationRequestId = 0, n.anchorCorner = Ne.TOP_START, n.originCorner = Ne.TOP_START, n.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, n.position = { x: 0, y: 0 }, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ps;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Fs;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return nn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return Ne;
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
      this.originCorner = this.originCorner ^ se.RIGHT;
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
        }, nn.TRANSITION_OPEN_DURATION);
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
          }, nn.TRANSITION_CLOSE_DURATION);
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
      var n = this.getoriginCorner(), r = this.getMenuSurfaceMaxHeight(n), o = this.hasBit(n, se.BOTTOM) ? "bottom" : "top", a = this.hasBit(n, se.RIGHT) ? "right" : "left", c = this.getHorizontalOriginOffset(n), s = this.getVerticalOriginOffset(n), p = this.measurements, h = p.anchorSize, b = p.surfaceSize, x = (i = {}, i[a] = c, i[o] = s, i);
      h.width / b.width > nn.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (a = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(x), this.adapter.setTransformOrigin(a + " " + o), this.adapter.setPosition(x), this.adapter.setMaxHeight(r ? r + "px" : ""), this.hasBit(n, se.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var i = this.originCorner, n = this.measurements, r = n.viewportDistance, o = n.anchorSize, a = n.surfaceSize, c = e.numbers.MARGIN_TO_EDGE, s = this.hasBit(this.anchorCorner, se.BOTTOM), p, h;
      s ? (p = r.top - c + this.anchorMargin.bottom, h = r.bottom - c - this.anchorMargin.bottom) : (p = r.top - c + this.anchorMargin.top, h = r.bottom - c + o.height - this.anchorMargin.top);
      var b = h - a.height > 0;
      !b && p > h && (i = this.setBit(i, se.BOTTOM));
      var x = this.adapter.isRtl(), v = this.hasBit(this.anchorCorner, se.FLIP_RTL), _ = this.hasBit(this.anchorCorner, se.RIGHT) || this.hasBit(i, se.RIGHT), A = !1;
      x && v ? A = !_ : A = _;
      var E, w;
      A ? (E = r.left + o.width + this.anchorMargin.right, w = r.right - this.anchorMargin.right) : (E = r.left + this.anchorMargin.left, w = r.right + o.width - this.anchorMargin.left);
      var z = E - a.width > 0, D = w - a.width > 0, H = this.hasBit(i, se.FLIP_RTL) && this.hasBit(i, se.RIGHT);
      return D && H && x || !z && H ? i = this.unsetBit(i, se.RIGHT) : (z && A && x || z && !A && _ || !D && E >= w) && (i = this.setBit(i, se.RIGHT)), i;
    }, e.prototype.getMenuSurfaceMaxHeight = function(i) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var n = this.measurements.viewportDistance, r = 0, o = this.hasBit(i, se.BOTTOM), a = this.hasBit(this.anchorCorner, se.BOTTOM), c = e.numbers.MARGIN_TO_EDGE;
      return o ? (r = n.top + this.anchorMargin.top - c, a || (r += this.measurements.anchorSize.height)) : (r = n.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - c, a && (r -= this.measurements.anchorSize.height)), r;
    }, e.prototype.getHorizontalOriginOffset = function(i) {
      var n = this.measurements.anchorSize, r = this.hasBit(i, se.RIGHT), o = this.hasBit(this.anchorCorner, se.RIGHT);
      if (r) {
        var a = o ? n.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? a - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : a;
      }
      return o ? n.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(i) {
      var n = this.measurements.anchorSize, r = this.hasBit(i, se.BOTTOM), o = this.hasBit(this.anchorCorner, se.BOTTOM), a = 0;
      return r ? a = o ? n.height - this.anchorMargin.top : -this.anchorMargin.bottom : a = o ? n.height + this.anchorMargin.bottom : this.anchorMargin.top, a;
    }, e.prototype.adjustPositionForHoistedElement = function(i) {
      var n, r, o = this.measurements, a = o.windowScroll, c = o.viewportDistance, s = o.surfaceSize, p = o.viewportSize, h = Object.keys(i);
      try {
        for (var b = ht(h), x = b.next(); !x.done; x = b.next()) {
          var v = x.value, _ = i[v] || 0;
          if (this.isHorizontallyCenteredOnViewport && (v === "left" || v === "right")) {
            i[v] = (p.width - s.width) / 2;
            continue;
          }
          _ += c[v], this.isFixedPosition || (v === "top" ? _ += a.y : v === "bottom" ? _ -= a.y : v === "left" ? _ += a.x : _ -= a.x), i[v] = _;
        }
      } catch (A) {
        n = { error: A };
      } finally {
        try {
          x && !x.done && (r = b.return) && r.call(b);
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
  }(et)
);
const Vs = {
  TOP_LEFT: Ne.TOP_LEFT,
  TOP_RIGHT: Ne.TOP_RIGHT,
  BOTTOM_LEFT: Ne.BOTTOM_LEFT,
  BOTTOM_RIGHT: Ne.BOTTOM_RIGHT,
  TOP_START: Ne.TOP_START,
  TOP_END: Ne.TOP_END,
  BOTTOM_START: Ne.BOTTOM_START,
  BOTTOM_END: Ne.BOTTOM_END
};
class ge extends Jt {
  constructor() {
    super(...arguments), this.mdcFoundationClass = il, this.absolute = !1, this.fullwidth = !1, this.fixed = !1, this.x = null, this.y = null, this.quick = !1, this.open = !1, this.stayOpenOnBodyClick = !1, this.bitwiseCorner = Ne.TOP_START, this.previousMenuCorner = null, this.menuCorner = "START", this.corner = "TOP_START", this.styleTop = "", this.styleLeft = "", this.styleRight = "", this.styleBottom = "", this.styleMaxHeight = "", this.styleTransformOrigin = "", this.anchor = null, this.previouslyFocused = null, this.previousAnchor = null, this.onBodyClickBound = () => {
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
    return d`
      <div
          class="mdc-menu-surface ${ye(e)}"
          style="${el(i)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, fn(this.mdcRoot)), { hasAnchor: () => !!this.anchor, notifyClose: () => {
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
    }, isFocused: () => Ja(this), saveFocus: () => {
      const e = Br(), i = e.length;
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
m([
  R(".mdc-menu-surface")
], ge.prototype, "mdcRoot", void 0);
m([
  R("slot")
], ge.prototype, "slotElement", void 0);
m([
  f({ type: Boolean }),
  ne(function(t) {
    this.mdcFoundation && !this.fixed && this.mdcFoundation.setIsHoisted(t);
  })
], ge.prototype, "absolute", void 0);
m([
  f({ type: Boolean })
], ge.prototype, "fullwidth", void 0);
m([
  f({ type: Boolean }),
  ne(function(t) {
    this.mdcFoundation && !this.absolute && this.mdcFoundation.setFixedPosition(t);
  })
], ge.prototype, "fixed", void 0);
m([
  f({ type: Number }),
  ne(function(t) {
    this.mdcFoundation && this.y !== null && t !== null && (this.mdcFoundation.setAbsolutePosition(t, this.y), this.mdcFoundation.setAnchorMargin({ left: t, top: this.y, right: -t, bottom: this.y }));
  })
], ge.prototype, "x", void 0);
m([
  f({ type: Number }),
  ne(function(t) {
    this.mdcFoundation && this.x !== null && t !== null && (this.mdcFoundation.setAbsolutePosition(this.x, t), this.mdcFoundation.setAnchorMargin({ left: this.x, top: t, right: -this.x, bottom: t }));
  })
], ge.prototype, "y", void 0);
m([
  f({ type: Boolean }),
  ne(function(t) {
    this.mdcFoundation && this.mdcFoundation.setQuickOpen(t);
  })
], ge.prototype, "quick", void 0);
m([
  f({ type: Boolean, reflect: !0 }),
  ne(function(t, e) {
    this.mdcFoundation && (t ? this.mdcFoundation.open() : e !== void 0 && this.mdcFoundation.close());
  })
], ge.prototype, "open", void 0);
m([
  f({ type: Boolean })
], ge.prototype, "stayOpenOnBodyClick", void 0);
m([
  N(),
  ne(function(t) {
    this.mdcFoundation && (t ? this.mdcFoundation.setAnchorCorner(t) : this.mdcFoundation.setAnchorCorner(t));
  })
], ge.prototype, "bitwiseCorner", void 0);
m([
  f({ type: String }),
  ne(function(t) {
    if (this.mdcFoundation) {
      const e = t === "START" || t === "END", i = this.previousMenuCorner === null, n = !i && t !== this.previousMenuCorner;
      e && (n || i && t === "END") && (this.bitwiseCorner = this.bitwiseCorner ^ se.RIGHT, this.mdcFoundation.flipCornerHorizontally(), this.previousMenuCorner = t);
    }
  })
], ge.prototype, "menuCorner", void 0);
m([
  f({ type: String }),
  ne(function(t) {
    if (this.mdcFoundation && t) {
      let e = Vs[t];
      this.menuCorner === "END" && (e = e ^ se.RIGHT), this.bitwiseCorner = e;
    }
  })
], ge.prototype, "corner", void 0);
m([
  N()
], ge.prototype, "styleTop", void 0);
m([
  N()
], ge.prototype, "styleLeft", void 0);
m([
  N()
], ge.prototype, "styleRight", void 0);
m([
  N()
], ge.prototype, "styleBottom", void 0);
m([
  N()
], ge.prototype, "styleMaxHeight", void 0);
m([
  N()
], ge.prototype, "styleTransformOrigin", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Bs = ie`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let dr = class extends ge {
};
dr.styles = [Bs];
dr = m([
  Z("mwc-menu-surface")
], dr);
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
var jn = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Ti = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected"
}, Hs = {
  FOCUS_ROOT_INDEX: -1
}, Zt;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(Zt || (Zt = {}));
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
var qs = (
  /** @class */
  function(t) {
    st(e, t);
    function e(i) {
      var n = t.call(this, de(de({}, e.defaultAdapter), i)) || this;
      return n.closeAnimationEndTimerId = 0, n.defaultFocusState = Zt.LIST_ROOT, n.selectedIndex = -1, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return jn;
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
        return Hs;
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
      }, il.numbers.TRANSITION_CLOSE_DURATION));
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Zt.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Zt.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Zt.NONE:
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
      n >= 0 && (this.adapter.removeAttributeFromElementAtIndex(n, Ti.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(n, jn.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(i, jn.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(i, Ti.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = i;
    }, e.prototype.setEnabled = function(i, n) {
      this.validatedIndex(i), n ? (this.adapter.removeClassFromElementAtIndex(i, te.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(i, Ti.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(i, te.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(i, Ti.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(i) {
      var n = this.adapter.getMenuItemCount(), r = i >= 0 && i < n;
      if (!r)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(et)
);
class xe extends Jt {
  constructor() {
    super(...arguments), this.mdcFoundationClass = qs, this.listElement_ = null, this.anchor = null, this.open = !1, this.quick = !1, this.wrapFocus = !1, this.innerRole = "menu", this.corner = "TOP_START", this.x = null, this.y = null, this.absolute = !1, this.multi = !1, this.activatable = !1, this.fixed = !1, this.forceGroupSelection = !1, this.fullwidth = !1, this.menuCorner = "START", this.stayOpenOnBodyClick = !1, this.defaultFocus = "LIST_ROOT", this._listUpdateComplete = null;
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
    return d`
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
m([
  R(".mdc-menu")
], xe.prototype, "mdcRoot", void 0);
m([
  R("slot")
], xe.prototype, "slotElement", void 0);
m([
  f({ type: Object })
], xe.prototype, "anchor", void 0);
m([
  f({ type: Boolean, reflect: !0 })
], xe.prototype, "open", void 0);
m([
  f({ type: Boolean })
], xe.prototype, "quick", void 0);
m([
  f({ type: Boolean })
], xe.prototype, "wrapFocus", void 0);
m([
  f({ type: String })
], xe.prototype, "innerRole", void 0);
m([
  f({ type: String })
], xe.prototype, "corner", void 0);
m([
  f({ type: Number })
], xe.prototype, "x", void 0);
m([
  f({ type: Number })
], xe.prototype, "y", void 0);
m([
  f({ type: Boolean })
], xe.prototype, "absolute", void 0);
m([
  f({ type: Boolean })
], xe.prototype, "multi", void 0);
m([
  f({ type: Boolean })
], xe.prototype, "activatable", void 0);
m([
  f({ type: Boolean })
], xe.prototype, "fixed", void 0);
m([
  f({ type: Boolean })
], xe.prototype, "forceGroupSelection", void 0);
m([
  f({ type: Boolean })
], xe.prototype, "fullwidth", void 0);
m([
  f({ type: String })
], xe.prototype, "menuCorner", void 0);
m([
  f({ type: Boolean })
], xe.prototype, "stayOpenOnBodyClick", void 0);
m([
  f({ type: String }),
  ne(function(t) {
    this.mdcFoundation && this.mdcFoundation.setDefaultFocusState(Zt[t]);
  })
], xe.prototype, "defaultFocus", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Us = ie`mwc-list ::slotted([mwc-list-item]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ur = class extends xe {
};
ur.styles = [Us];
ur = m([
  Z("mwc-menu")
], ur);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ws = ie`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;
let pr = class extends be {
  /** @soyTemplate */
  render() {
    return d`<slot></slot>`;
  }
};
pr.styles = [Ws];
pr = m([
  Z("mwc-icon")
], pr);
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
var Gs = ["input", "button", "textarea", "select"], ia = function(t) {
  var e = t.target;
  if (e) {
    var i = ("" + e.tagName).toLowerCase();
    Gs.indexOf(i) === -1 && t.preventDefault();
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
function js() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function na(t, e) {
  for (var i = /* @__PURE__ */ new Map(), n = 0; n < t; n++) {
    var r = e(n).trim();
    if (r) {
      var o = r[0].toLowerCase();
      i.has(o) || i.set(o, []), i.get(o).push({ text: r.toLowerCase(), index: n });
    }
  }
  return i.forEach(function(a) {
    a.sort(function(c, s) {
      return c.index - s.index;
    });
  }), i;
}
function mr(t, e) {
  var i = t.nextChar, n = t.focusItemAtIndex, r = t.sortedIndexByFirstChar, o = t.focusedItemIndex, a = t.skipFocus, c = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    Ks(e);
  }, Le.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + i;
  var s;
  return e.typeaheadBuffer.length === 1 ? s = Xs(r, o, c, e) : s = Zs(r, c, e), s !== -1 && !a && n(s), s;
}
function Xs(t, e, i, n) {
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
  var c = -1, s;
  for (s = 0; s < o.length; s++)
    if (!i(o[s].index)) {
      c = s;
      break;
    }
  for (; s < o.length; s++)
    if (o[s].index > e && !i(o[s].index)) {
      c = s;
      break;
    }
  return c !== -1 ? (n.sortedIndexCursor = c, o[n.sortedIndexCursor].index) : -1;
}
function Zs(t, e, i) {
  var n = i.typeaheadBuffer[0], r = t.get(n);
  if (!r)
    return -1;
  var o = r[i.sortedIndexCursor];
  if (o.text.lastIndexOf(i.typeaheadBuffer, 0) === 0 && !e(o.index))
    return o.index;
  for (var a = (i.sortedIndexCursor + 1) % r.length, c = -1; a !== i.sortedIndexCursor; ) {
    var s = r[a], p = s.text.lastIndexOf(i.typeaheadBuffer, 0) === 0, h = !e(s.index);
    if (p && h) {
      c = a;
      break;
    }
    a = (a + 1) % r.length;
  }
  return c !== -1 ? (i.sortedIndexCursor = c, r[i.sortedIndexCursor].index) : -1;
}
function nl(t) {
  return t.typeaheadBuffer.length > 0;
}
function Ks(t) {
  t.typeaheadBuffer = "";
}
function Ys(t, e) {
  var i = t.event, n = t.isTargetListItem, r = t.focusedItemIndex, o = t.focusItemAtIndex, a = t.sortedIndexByFirstChar, c = t.isItemAtIndexDisabled, s = pe(i) === "ArrowLeft", p = pe(i) === "ArrowUp", h = pe(i) === "ArrowRight", b = pe(i) === "ArrowDown", x = pe(i) === "Home", v = pe(i) === "End", _ = pe(i) === "Enter", A = pe(i) === "Spacebar";
  if (i.ctrlKey || i.metaKey || s || p || h || b || x || v || _)
    return -1;
  var E = !A && i.key.length === 1;
  if (E) {
    ia(i);
    var w = {
      focusItemAtIndex: o,
      focusedItemIndex: r,
      nextChar: i.key.toLowerCase(),
      sortedIndexByFirstChar: a,
      skipFocus: !1,
      isItemAtIndexDisabled: c
    };
    return mr(w, e);
  }
  if (!A)
    return -1;
  n && ia(i);
  var z = n && nl(e);
  if (z) {
    var w = {
      focusItemAtIndex: o,
      focusedItemIndex: r,
      nextChar: " ",
      sortedIndexByFirstChar: a,
      skipFocus: !1,
      isItemAtIndexDisabled: c
    };
    return mr(w, e);
  }
  return -1;
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class $t extends Jt {
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
var Qs = {
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
var Js = (
  /** @class */
  function(t) {
    st(e, t);
    function e(i) {
      var n = t.call(this, de(de({}, e.defaultAdapter), i)) || this;
      return n.shakeAnimationEndHandler = function() {
        n.handleShakeAnimationEnd();
      }, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Qs;
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
  }(et)
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
const xt = {
  ATTRIBUTE: 1,
  CHILD: 2,
  PROPERTY: 3,
  BOOLEAN_ATTRIBUTE: 4,
  EVENT: 5
};
class ed {
  constructor(e) {
    this.type = xt.CHILD, this.options = e.options, this.legacyPart = e;
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
class td {
  constructor(e) {
    this.legacyPart = e, this.type = e instanceof ui ? xt.PROPERTY : xt.ATTRIBUTE;
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
class id {
  constructor(e) {
    this.type = xt.BOOLEAN_ATTRIBUTE, this.legacyPart = e;
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
class nd {
  constructor(e) {
    this.type = xt.EVENT, this.legacyPart = e;
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
function rd(t) {
  if (t instanceof Qt)
    return new ed(t);
  if (t instanceof zr)
    return new nd(t);
  if (t instanceof Rr)
    return new id(t);
  if (t instanceof ui || t instanceof Nt)
    return new td(t);
  throw new Error("Unknown part type");
}
class rl {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(e) {
  }
  update(e, i) {
    return this.render(...i);
  }
}
function ol(t) {
  const e = /* @__PURE__ */ new WeakMap();
  return di((...n) => (r) => {
    const o = e.get(r);
    let a, c;
    o === void 0 ? (a = rd(r), c = new t(a), e.set(r, [a, c])) : (a = o[0], c = o[1]), r.setValue(c.update(a, n)), r.commit();
  });
}
const od = (t) => ({
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
class ad extends rl {
  constructor(e) {
    switch (super(e), this.foundation = null, this.previousPart = null, e.type) {
      // Only allow Attribute and Part bindings
      case xt.ATTRIBUTE:
      case xt.PROPERTY:
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
      const r = od(n);
      this.foundation = new Js(r), this.foundation.init();
    }
    return this.render(i);
  }
  render(e) {
    return this.foundation;
  }
}
const al = ol(ad);
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
var Ut = {
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
var ld = (
  /** @class */
  function(t) {
    st(e, t);
    function e(i) {
      var n = t.call(this, de(de({}, e.defaultAdapter), i)) || this;
      return n.transitionEndHandler = function(r) {
        n.handleTransitionEnd(r);
      }, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ut;
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
      this.adapter.removeClass(Ut.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Ut.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(i) {
      this.adapter.setStyle("transform-origin", i + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(Ut.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(i) {
      var n = this.adapter.hasClass(Ut.LINE_RIPPLE_DEACTIVATING);
      i.propertyName === "opacity" && n && (this.adapter.removeClass(Ut.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Ut.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(et)
);
const cd = (t) => ({
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
class sd extends rl {
  constructor(e) {
    switch (super(e), this.previousPart = null, this.foundation = null, e.type) {
      case xt.ATTRIBUTE:
      case xt.PROPERTY:
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
      const r = cd(n);
      this.foundation = new ld(r), this.foundation.init();
    }
    return this.render();
  }
  render() {
    return this.foundation;
  }
}
const ll = ol(sd);
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
var ce = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, Xn = {
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
}, Wt = {
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
var dd = (
  /** @class */
  function(t) {
    st(e, t);
    function e(i, n) {
      n === void 0 && (n = {});
      var r = t.call(this, de(de({}, e.defaultAdapter), i)) || this;
      return r.disabled = !1, r.isMenuOpen = !1, r.useDefaultValidation = !0, r.customValidity = !0, r.lastSelectedIndex = Wt.UNSET_INDEX, r.clickDebounceTimeout = 0, r.recentlyClicked = !1, r.leadingIcon = n.leadingIcon, r.helperText = n.helperText, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ce;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Wt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Xn;
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
      n === void 0 && (n = !1), r === void 0 && (r = !1), !(i >= this.adapter.getMenuItemCount()) && (i === Wt.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(i).trim()), this.adapter.setSelectedIndex(i), n && this.adapter.closeMenu(), !r && this.lastSelectedIndex !== i && this.handleChange(), this.lastSelectedIndex = i);
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
      return i !== Wt.UNSET_INDEX ? n[i] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(i) {
      this.disabled = i, this.disabled ? (this.adapter.addClass(ce.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(ce.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(ce.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(i) {
      this.helperText && this.helperText.setContent(i);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var i = this.getValue().length > 0, n = this.adapter.hasClass(ce.FOCUSED), r = i || n, o = this.adapter.hasClass(ce.REQUIRED);
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
      this.adapter.removeClass(ce.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var i = this.adapter.hasClass(ce.REQUIRED);
      i && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(i) {
      this.setSelectedIndex(
        i,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(ce.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(ce.FOCUSED))) {
        var n = pe(i) === M.ENTER, r = pe(i) === M.SPACEBAR, o = pe(i) === M.ARROW_UP, a = pe(i) === M.ARROW_DOWN, c = i.ctrlKey || i.metaKey;
        if (!c && (!r && i.key && i.key.length === 1 || r && this.adapter.isTypeaheadInProgress())) {
          var s = r ? " " : i.key, p = this.adapter.typeaheadMatchItem(s, this.getSelectedIndex());
          p >= 0 && this.setSelectedIndex(p), i.preventDefault();
          return;
        }
        !n && !r && !o && !a || (o && this.getSelectedIndex() > 0 ? this.setSelectedIndex(this.getSelectedIndex() - 1) : a && this.getSelectedIndex() < this.adapter.getMenuItemCount() - 1 && this.setSelectedIndex(this.getSelectedIndex() + 1), this.openMenu(), i.preventDefault());
      }
    }, e.prototype.notchOutline = function(i) {
      if (this.adapter.hasOutline()) {
        var n = this.adapter.hasClass(ce.FOCUSED);
        if (i) {
          var r = Wt.LABEL_SCALE, o = this.adapter.getLabelWidth() * r;
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
      this.useDefaultValidation || (this.customValidity = i), this.adapter.setSelectAnchorAttr("aria-invalid", (!i).toString()), i ? (this.adapter.removeClass(ce.INVALID), this.adapter.removeMenuClass(ce.MENU_INVALID)) : (this.adapter.addClass(ce.INVALID), this.adapter.addMenuClass(ce.MENU_INVALID)), this.syncHelperTextValidity(i);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(ce.REQUIRED) && !this.adapter.hasClass(ce.DISABLED) ? this.getSelectedIndex() !== Wt.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(i) {
      i ? this.adapter.addClass(ce.REQUIRED) : this.adapter.removeClass(ce.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", i.toString()), this.adapter.setLabelRequired(i);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var i = this.adapter.getAnchorElement();
      i && (this.adapter.setMenuAnchorElement(i), this.adapter.setMenuAnchorCorner(Ne.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(ce.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(ce.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(ce.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var i = this.adapter.hasClass(ce.REQUIRED);
      i && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(i) {
      if (this.helperText) {
        this.helperText.setValidity(i);
        var n = this.helperText.isVisible(), r = this.helperText.getId();
        n && r ? this.adapter.setSelectAnchorAttr(Xn.ARIA_DESCRIBEDBY, r) : this.adapter.removeSelectAnchorAttr(Xn.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var i = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        i.recentlyClicked = !1;
      }, Wt.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(et)
);
const ra = (t = {}) => {
  const e = {};
  for (const i in t)
    e[i] = t[i];
  return Object.assign({ badInput: !1, customError: !1, patternMismatch: !1, rangeOverflow: !1, rangeUnderflow: !1, stepMismatch: !1, tooLong: !1, tooShort: !1, typeMismatch: !1, valid: !0, valueMissing: !1 }, e);
};
class Y extends $t {
  constructor() {
    super(...arguments), this.mdcFoundationClass = dd, this.disabled = !1, this.outlined = !1, this.label = "", this.outlineOpen = !1, this.outlineWidth = 0, this.value = "", this.selectedText = "", this.icon = "", this.menuOpen = !1, this.helper = "", this.validateOnInitialRender = !1, this.validationMessage = "", this.required = !1, this.naturalMenuWidth = !1, this.isUiValid = !0, this.fixedMenuPosition = !1, this.typeaheadState = js(), this.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), this.menuElement_ = null, this.listeners = [], this.onBodyClickBound = () => {
    }, this._menuUpdateComplete = null, this.valueSetDirectly = !1, this.validityTransform = null, this._validity = ra();
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
    return d`
      <div
          class="mdc-select ${ye(e)}">
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
            aria-labelledby=${ee(n)}
            aria-required=${this.required}
            aria-describedby=${ee(r)}
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
            class="mdc-select__menu mdc-menu mdc-menu-surface ${ye(i)}"
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
    return this.outlined ? Ve : d`
      <span class="mdc-select__ripple"></span>
    `;
  }
  renderOutline() {
    return this.outlined ? d`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>` : Ve;
  }
  renderLabel() {
    return this.label ? d`
      <span
          .floatingLabelFoundation=${al(this.label)}
          id="label">${this.label}</span>
    ` : Ve;
  }
  renderLeadingIcon() {
    return this.icon ? d`<mwc-icon class="mdc-select__icon"><div>${this.icon}</div></mwc-icon>` : Ve;
  }
  renderLineRipple() {
    return this.outlined ? Ve : d`
      <span .lineRippleFoundation=${ll()}></span>
    `;
  }
  renderHelperText() {
    if (!this.shouldRenderHelperText)
      return Ve;
    const e = this.validationMessage && !this.isUiValid;
    return d`
        <p
          class="mdc-select-helper-text ${ye({
      "mdc-select-helper-text--validation-msg": e
    })}"
          id="helper-text">${e ? this.validationMessage : this.helper}</p>`;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, fn(this.mdcRoot)), { activateBottomLine: () => {
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
    }, isTypeaheadInProgress: () => nl(this.typeaheadState), typeaheadMatchItem: (e, i) => {
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
      }, r = mr(n, this.typeaheadState);
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
    let n = ra(i);
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
    this.sortedIndexByFirstChar = na(this.items.length, (i) => this.items[i].text);
  }
  onItemsUpdated() {
    this.sortedIndexByFirstChar = na(this.items.length, (e) => this.items[e].text);
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
    const i = pe(e) === M.ARROW_UP, n = pe(e) === M.ARROW_DOWN;
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
    const i = this.menuElement.getFocusedItemIndex(), n = Ya(e.target) ? e.target : null, r = n ? n.hasAttribute("mwc-list-item") : !1, o = {
      event: e,
      focusItemAtIndex: (a) => {
        this.menuElement.focusItemAtIndex(a);
      },
      focusedItemIndex: i,
      isTargetListItem: r,
      sortedIndexByFirstChar: this.sortedIndexByFirstChar,
      isItemAtIndexDisabled: (a) => this.items[a].disabled
    };
    Ys(o, this.typeaheadState);
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
m([
  R(".mdc-select")
], Y.prototype, "mdcRoot", void 0);
m([
  R(".formElement")
], Y.prototype, "formElement", void 0);
m([
  R("slot")
], Y.prototype, "slotElement", void 0);
m([
  R("select")
], Y.prototype, "nativeSelectElement", void 0);
m([
  R("input")
], Y.prototype, "nativeInputElement", void 0);
m([
  R(".mdc-line-ripple")
], Y.prototype, "lineRippleElement", void 0);
m([
  R(".mdc-floating-label")
], Y.prototype, "labelElement", void 0);
m([
  R("mwc-notched-outline")
], Y.prototype, "outlineElement", void 0);
m([
  R(".mdc-menu")
], Y.prototype, "menuElement", void 0);
m([
  R(".mdc-select__anchor")
], Y.prototype, "anchorElement", void 0);
m([
  f({ type: Boolean, attribute: "disabled", reflect: !0 }),
  ne(function(t) {
    this.mdcFoundation && this.mdcFoundation.setDisabled(t);
  })
], Y.prototype, "disabled", void 0);
m([
  f({ type: Boolean }),
  ne(function(t, e) {
    e !== void 0 && this.outlined !== e && this.layout(!1);
  })
], Y.prototype, "outlined", void 0);
m([
  f({ type: String }),
  ne(function(t, e) {
    e !== void 0 && this.label !== e && this.layout(!1);
  })
], Y.prototype, "label", void 0);
m([
  N()
], Y.prototype, "outlineOpen", void 0);
m([
  N()
], Y.prototype, "outlineWidth", void 0);
m([
  f({ type: String }),
  ne(function(t) {
    if (this.mdcFoundation) {
      const e = this.selected === null && !!t, i = this.selected && this.selected.value !== t;
      (e || i) && this.selectByValue(t), this.reportValidity();
    }
  })
], Y.prototype, "value", void 0);
m([
  N()
], Y.prototype, "selectedText", void 0);
m([
  f({ type: String })
], Y.prototype, "icon", void 0);
m([
  N()
], Y.prototype, "menuOpen", void 0);
m([
  f({ type: String })
], Y.prototype, "helper", void 0);
m([
  f({ type: Boolean })
], Y.prototype, "validateOnInitialRender", void 0);
m([
  f({ type: String })
], Y.prototype, "validationMessage", void 0);
m([
  f({ type: Boolean })
], Y.prototype, "required", void 0);
m([
  f({ type: Boolean })
], Y.prototype, "naturalMenuWidth", void 0);
m([
  N()
], Y.prototype, "isUiValid", void 0);
m([
  f({ type: Boolean })
], Y.prototype, "fixedMenuPosition", void 0);
m([
  vt({ capture: !0 })
], Y.prototype, "handleTypeahead", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ud = ie`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-select{display:inline-flex;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87)}.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-select.mdc-select--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#6200ee;fill:var(--mdc-theme-primary, #6200ee)}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:rgba(0, 0, 0, 0.54)}.mdc-select.mdc-select--disabled .mdc-select__icon{color:rgba(0, 0, 0, 0.38)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:red}.mdc-select.mdc-select--disabled .mdc-floating-label{color:GrayText}.mdc-select.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}.mdc-select.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select.mdc-select--disabled .mdc-notched-outline__trailing{border-color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__icon{color:GrayText}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:GrayText}}.mdc-select .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:0;padding-right:0}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.mdc-select .mdc-select__icon{width:24px;height:24px;font-size:24px}.mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item,.mdc-select .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:12px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic,.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:12px;margin-right:0}.mdc-select__dropdown-icon{margin-left:12px;margin-right:12px;display:inline-flex;position:relative;align-self:center;align-items:center;justify-content:center;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic{width:41.6666666667%;height:20.8333333333%}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;transition:opacity 100.5ms linear 49.5ms}.mdc-select__anchor{width:200px;min-width:0;flex:1 1 auto;position:relative;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-select__selected-text-container{display:flex;appearance:none;pointer-events:none;box-sizing:border-box;width:auto;min-width:0;flex-grow:1;height:28px;border:none;outline:none;padding:0;background-color:transparent;color:inherit}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;width:100%;text-align:left}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{text-align:right}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item{padding-left:12px;padding-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item,.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:12px;padding-right:12px}.mdc-select__menu .mdc-deprecated-list .mdc-select__icon{margin-left:0;margin-right:0}[dir=rtl] .mdc-select__menu .mdc-deprecated-list .mdc-select__icon,.mdc-select__menu .mdc-deprecated-list .mdc-select__icon[dir=rtl]{margin-left:0;margin-right:0}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select--filled .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.mdc-select--filled .mdc-select__anchor::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor::before{display:none}.mdc-select--filled .mdc-select__anchor{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-select--filled:not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke}.mdc-select--filled.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-select--filled:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--filled.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-select--filled .mdc-menu-surface--is-open-below{border-top-left-radius:0px;border-top-right-radius:0px}.mdc-select--filled.mdc-select--focused.mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-select--filled .mdc-floating-label,.mdc-select--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined{border:none}.mdc-select--outlined .mdc-select__anchor{height:56px}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-56px{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-select--outlined .mdc-select__anchor{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-select--outlined+.mdc-select-helper-text{margin-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-select--outlined .mdc-select__anchor{display:flex;align-items:baseline;overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--outlined .mdc-select__anchor::before{display:none}.mdc-select--outlined .mdc-select__selected-text-container{display:flex;border:none;z-index:1;background-color:transparent}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;left:4px;right:initial}[dir=rtl] .mdc-select--outlined .mdc-floating-label,.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake,.mdc-select--outlined.mdc-select--with-leading-icon[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 96px)}.mdc-select--outlined .mdc-menu-surface{margin-bottom:8px}.mdc-select--outlined.mdc-select--no-label .mdc-menu-surface,.mdc-select--outlined .mdc-menu-surface--is-open-below{margin-bottom:0}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-select__anchor .mdc-select__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-select__anchor .mdc-select__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-select__anchor:hover .mdc-select__ripple::before,.mdc-select__anchor.mdc-ripple-surface--hover .mdc-select__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select-helper-text{margin:0;margin-left:16px;margin-right:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal}[dir=rtl] .mdc-select-helper-text,.mdc-select-helper-text[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;user-select:none;flex-shrink:0;align-self:center;background-color:transparent;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex="-1"]{cursor:default;pointer-events:none}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-block;vertical-align:top;outline:none}.mdc-select{width:100%}[hidden]{display:none}.mdc-select__icon{z-index:2}.mdc-select--with-leading-icon{--mdc-list-item-graphic-margin: calc( 48px - var(--mdc-list-item-graphic-size, 24px) - var(--mdc-list-side-padding, 16px) )}.mdc-select .mdc-select__anchor .mdc-select__selected-text{overflow:hidden}.mdc-select .mdc-select__anchor *{display:inline-flex}.mdc-select .mdc-select__anchor .mdc-floating-label{display:inline-block}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-idle-border-color, rgba(0, 0, 0, 0.38) );--mdc-notched-outline-notch-offset: 1px}:host(:not([disabled]):hover) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87);color:var(--mdc-select-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-select-idle-line-color, rgba(0, 0, 0, 0.42))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-select-hover-line-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke;background-color:var(--mdc-select-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-select__dropdown-icon{fill:var(--mdc-select-error-dropdown-icon-color, var(--mdc-select-error-color, var(--mdc-theme-error, #b00020)))}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label,:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label::after{color:var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}.mdc-select__menu--invalid{--mdc-theme-primary: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.6);color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54);fill:var(--mdc-select-dropdown-icon-color, rgba(0, 0, 0, 0.54))}:host(:not([disabled])) .mdc-select.mdc-select--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px;--mdc-notched-outline-notch-offset: 2px}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-select__dropdown-icon{fill:rgba(98,0,238,.87);fill:var(--mdc-select-focused-dropdown-icon-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-select:not(.mdc-select--outlined).mdc-select--disabled .mdc-select__anchor{background-color:#fafafa;background-color:var(--mdc-select-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-select.mdc-select--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-select .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38);fill:var(--mdc-select-disabled-dropdown-icon-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select-helper-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let un = class extends Y {
};
un.styles = [ud];
un = m([
  Z("mwc-select")
], un);
function G(t, e, i) {
  const n = t.createElementNS(t.documentElement.namespaceURI, e);
  return Object.entries(i).filter(([r, o]) => o !== null).forEach(([r, o]) => n.setAttribute(r, o)), n;
}
function X(t, e) {
  const i = t.cloneNode(!1);
  return Object.entries(e).forEach(([n, r]) => {
    r === null ? i.removeAttribute(n) : i.setAttribute(n, r);
  }), i;
}
function K(t, e) {
  return !t || !e ? [] : Array.from(t.children).filter(
    (i) => i.tagName === e
  );
}
const pd = 1e3 * 60, oa = "langChanged";
function md(t, e, i) {
  return Object.entries(hr(e || {})).reduce((n, [r, o]) => n.replace(new RegExp(`{{[  ]*${r}[  ]*}}`, "gm"), String(hr(o))), t);
}
function hd(t, e) {
  const i = t.split(".");
  let n = e.strings;
  for (; n != null && i.length > 0; )
    n = n[i.shift()];
  return n != null ? n.toString() : null;
}
function hr(t) {
  return typeof t == "function" ? t() : t;
}
const fd = () => ({
  loader: () => Promise.resolve({}),
  empty: (t) => `[${t}]`,
  lookup: hd,
  interpolate: md,
  translationCache: {}
});
let bd = fd();
function gd(t, e) {
  const i = (n) => t(n.detail);
  return window.addEventListener(oa, i, e), () => window.removeEventListener(oa, i);
}
function u(t, e, i = bd) {
  let n = i.translationCache[t] || (i.translationCache[t] = i.lookup(t, i) || i.empty(t, i));
  return e = e != null ? hr(e) : null, e != null ? i.interpolate(n, e, i) : n;
}
function cl(t) {
  return t instanceof Qt ? t.startNode.isConnected : t instanceof Nt ? t.committer.element.isConnected : t.element.isConnected;
}
function xd(t) {
  for (const [e] of t)
    cl(e) || t.delete(e);
}
function yd(t) {
  "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t);
}
function vd(t, e) {
  setInterval(() => yd(() => xd(t)), e);
}
const sl = /* @__PURE__ */ new Map();
function wd() {
  gd((t) => {
    for (const [e, i] of sl)
      cl(e) && _d(e, i, t);
  });
}
wd();
vd(sl, pd);
function _d(t, e, i) {
  const n = e(i);
  t.value !== n && (t.setValue(n), t.commit());
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Ad(t, e, i) {
  const n = t.constructor;
  if (!i) {
    const c = `__${e}`;
    if (i = n.getPropertyDescriptor(e, c), !i)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const r = i;
  let o = "";
  if (!r.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const a = {
    configurable: !0,
    enumerable: !0,
    set(c) {
      o === "" && (o = n.getPropertyOptions(e).attribute), this.hasAttribute(o) && this.removeAttribute(o), r.set.call(this, c);
    }
  };
  return r.get && (a.get = function() {
    return r.get.call(this);
  }), a;
}
function hi(t, e, i) {
  if (e !== void 0)
    return Ad(t, e, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
class wt extends be {
  constructor() {
    super(...arguments), this.disabled = !1, this.icon = "", this.shouldRenderRipple = !1, this.rippleHandlers = new mi(() => (this.shouldRenderRipple = !0, this.ripple));
  }
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? d`
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
    return d`<button
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
m([
  f({ type: Boolean, reflect: !0 })
], wt.prototype, "disabled", void 0);
m([
  f({ type: String })
], wt.prototype, "icon", void 0);
m([
  hi,
  f({ type: String, attribute: "aria-label" })
], wt.prototype, "ariaLabel", void 0);
m([
  R("button")
], wt.prototype, "buttonElement", void 0);
m([
  pi("mwc-ripple")
], wt.prototype, "ripple", void 0);
m([
  N()
], wt.prototype, "shouldRenderRipple", void 0);
m([
  vt({ passive: !0 })
], wt.prototype, "handleRippleMouseDown", null);
m([
  vt({ passive: !0 })
], wt.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Sd = ie`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button--touch{margin-top:0px;margin-bottom:0px}:host{display:inline-block;outline:none;--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host([disabled]){pointer-events:none}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button>i{position:absolute;top:0;padding-top:inherit}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let fr = class extends wt {
};
fr.styles = [Sd];
fr = m([
  Z("mwc-icon-button")
], fr);
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
var $i = {
  /** Class used for a switch that is in the "checked" (on) position. */
  CHECKED: "mdc-switch--checked",
  /** Class used for a switch that is disabled. */
  DISABLED: "mdc-switch--disabled"
}, aa = {
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
var Ed = (
  /** @class */
  function(t) {
    st(e, t);
    function e(i) {
      return t.call(this, de(de({}, e.defaultAdapter), i)) || this;
    }
    return Object.defineProperty(e, "strings", {
      /** The string constants used by the switch. */
      get: function() {
        return aa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      /** The CSS classes used by the switch. */
      get: function() {
        return $i;
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
      this.adapter.setNativeControlDisabled(i), i ? this.adapter.addClass($i.DISABLED) : this.adapter.removeClass($i.DISABLED);
    }, e.prototype.handleChange = function(i) {
      var n = i.target;
      this.updateAriaChecked(n.checked), this.updateCheckedStyling(n.checked);
    }, e.prototype.updateCheckedStyling = function(i) {
      i ? this.adapter.addClass($i.CHECKED) : this.adapter.removeClass($i.CHECKED);
    }, e.prototype.updateAriaChecked = function(i) {
      this.adapter.setNativeControlAttr(aa.ARIA_CHECKED_ATTR, "" + !!i);
    }, e;
  }(et)
);
class tt extends $t {
  constructor() {
    super(...arguments), this.checked = !1, this.disabled = !1, this.shouldRenderRipple = !1, this.mdcFoundationClass = Ed, this.rippleHandlers = new mi(() => (this.shouldRenderRipple = !0, this.ripple));
  }
  changeHandler(e) {
    this.mdcFoundation.handleChange(e), this.checked = this.formElement.checked;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, fn(this.mdcRoot)), { setNativeControlChecked: (e) => {
      this.formElement.checked = e;
    }, setNativeControlDisabled: (e) => {
      this.formElement.disabled = e;
    }, setNativeControlAttr: (e, i) => {
      this.formElement.setAttribute(e, i);
    } });
  }
  renderRipple() {
    return this.shouldRenderRipple ? d`
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
    return d`
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
              aria-label="${ee(this.ariaLabel)}"
              aria-labelledby="${ee(this.ariaLabelledBy)}"
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
m([
  f({ type: Boolean }),
  ne(function(t) {
    this.mdcFoundation.setChecked(t);
  })
], tt.prototype, "checked", void 0);
m([
  f({ type: Boolean }),
  ne(function(t) {
    this.mdcFoundation.setDisabled(t);
  })
], tt.prototype, "disabled", void 0);
m([
  hi,
  f({ attribute: "aria-label" })
], tt.prototype, "ariaLabel", void 0);
m([
  hi,
  f({ attribute: "aria-labelledby" })
], tt.prototype, "ariaLabelledBy", void 0);
m([
  R(".mdc-switch")
], tt.prototype, "mdcRoot", void 0);
m([
  R("input")
], tt.prototype, "formElement", void 0);
m([
  pi("mwc-ripple")
], tt.prototype, "ripple", void 0);
m([
  N()
], tt.prototype, "shouldRenderRipple", void 0);
m([
  vt({ passive: !0 })
], tt.prototype, "handleRippleMouseDown", null);
m([
  vt({ passive: !0 })
], tt.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Cd = ie`.mdc-switch__thumb-underlay{left:-14px;right:initial;top:-17px;width:48px;height:48px}[dir=rtl] .mdc-switch__thumb-underlay,.mdc-switch__thumb-underlay[dir=rtl]{left:initial;right:-14px}.mdc-switch__native-control{width:64px;height:48px}.mdc-switch{display:inline-block;position:relative;outline:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-color:#fff;border-color:var(--mdc-theme-surface, #fff)}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;margin:0;opacity:0;cursor:pointer;pointer-events:auto;transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-switch__native-control,.mdc-switch__native-control[dir=rtl]{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:36px;height:14px;border:1px solid transparent;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb-underlay{display:flex;position:absolute;align-items:center;justify-content:center;transform:translateX(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl]{transform:translateX(-16px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__native-control[dir=rtl]{transform:translateX(16px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent}`;
let br = class extends tt {
};
br.styles = [Cd];
br = m([
  Z("mwc-switch")
], br);
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
var Zn = {
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
}, Id = {
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
}, la = {
  LABEL_SCALE: 0.75
}, Td = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], $d = [
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
var ca = ["mousedown", "touchstart"], sa = ["click", "keydown"], kd = (
  /** @class */
  function(t) {
    st(e, t);
    function e(i, n) {
      n === void 0 && (n = {});
      var r = t.call(this, de(de({}, e.defaultAdapter), i)) || this;
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
        return Id;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Zn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return la;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var i = this.getNativeInput().type;
        return $d.indexOf(i) >= 0;
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
        for (var a = ht(ca), c = a.next(); !c.done; c = a.next()) {
          var s = c.value;
          this.adapter.registerInputInteractionHandler(s, this.setPointerXOffset);
        }
      } catch (b) {
        i = { error: b };
      } finally {
        try {
          c && !c.done && (n = a.return) && n.call(a);
        } finally {
          if (i) throw i.error;
        }
      }
      try {
        for (var p = ht(sa), h = p.next(); !h.done; h = p.next()) {
          var s = h.value;
          this.adapter.registerTextFieldInteractionHandler(s, this.textFieldInteractionHandler);
        }
      } catch (b) {
        r = { error: b };
      } finally {
        try {
          h && !h.done && (o = p.return) && o.call(p);
        } finally {
          if (r) throw r.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var i, n, r, o;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var a = ht(ca), c = a.next(); !c.done; c = a.next()) {
          var s = c.value;
          this.adapter.deregisterInputInteractionHandler(s, this.setPointerXOffset);
        }
      } catch (b) {
        i = { error: b };
      } finally {
        try {
          c && !c.done && (n = a.return) && n.call(a);
        } finally {
          if (i) throw i.error;
        }
      }
      try {
        for (var p = ht(sa), h = p.next(); !h.done; h = p.next()) {
          var s = h.value;
          this.adapter.deregisterTextFieldInteractionHandler(s, this.textFieldInteractionHandler);
        }
      } catch (b) {
        r = { error: b };
      } finally {
        try {
          h && !h.done && (o = p.return) && o.call(p);
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
        return Td.indexOf(r) > -1 ? (n.styleValidity(!0), n.adapter.setLabelRequired(n.getNativeInput().required), !0) : !1;
      }), i.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(i) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (i) {
          var n = this.adapter.getLabelWidth() * la.LABEL_SCALE;
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
        o && a ? this.adapter.setInputAttr(Zn.ARIA_DESCRIBEDBY, a) : this.adapter.removeInputAttr(Zn.ARIA_DESCRIBEDBY);
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
  }(et)
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
const Ld = di((t) => (e) => {
  let i;
  if (e instanceof zr || e instanceof Qt)
    throw new Error("The `live` directive is not allowed on text or event bindings");
  if (e instanceof Rr)
    da(e.strings), i = e.element.hasAttribute(e.name), e.value = i;
  else {
    const { element: n, name: r, strings: o } = e.committer;
    if (da(o), e instanceof ui) {
      if (i = n[r], i === t)
        return;
    } else e instanceof Nt && (i = n.getAttribute(r));
    if (i === String(t))
      return;
  }
  e.setValue(t);
}), da = (t) => {
  if (t.length !== 2 || t[0] !== "" || t[1] !== "")
    throw new Error("`live` bindings can only contain a single expression");
}, Nd = ["touchstart", "touchmove", "scroll", "mousewheel"], ua = (t = {}) => {
  const e = {};
  for (const i in t)
    e[i] = t[i];
  return Object.assign({ badInput: !1, customError: !1, patternMismatch: !1, rangeOverflow: !1, rangeUnderflow: !1, stepMismatch: !1, tooLong: !1, tooShort: !1, typeMismatch: !1, valid: !0, valueMissing: !1 }, e);
};
class B extends $t {
  constructor() {
    super(...arguments), this.mdcFoundationClass = kd, this.value = "", this.type = "text", this.placeholder = "", this.label = "", this.icon = "", this.iconTrailing = "", this.disabled = !1, this.required = !1, this.minLength = -1, this.maxLength = -1, this.outlined = !1, this.helper = "", this.validateOnInitialRender = !1, this.validationMessage = "", this.autoValidate = !1, this.pattern = "", this.min = "", this.max = "", this.step = null, this.size = null, this.helperPersistent = !1, this.charCounter = !1, this.endAligned = !1, this.prefix = "", this.suffix = "", this.name = "", this.readOnly = !1, this.autocapitalize = "", this.outlineOpen = !1, this.outlineWidth = 0, this.isUiValid = !0, this.focused = !1, this._validity = ua(), this.validityTransform = null;
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
    return d`
      <label class="mdc-text-field ${ye(n)}">
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
    return this.outlined ? "" : d`
      <span class="mdc-text-field__ripple"></span>
    `;
  }
  /** @soyTemplate */
  renderOutline() {
    return this.outlined ? d`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>` : "";
  }
  /** @soyTemplate */
  renderLabel() {
    return this.label ? d`
      <span
          .floatingLabelFoundation=${al(this.label)}
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
    return d`<i class="material-icons mdc-text-field__icon ${ye({
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
    return d`<span class="mdc-text-field__affix ${ye({
      "mdc-text-field__affix--prefix": !i,
      "mdc-text-field__affix--suffix": i
    })}">
        ${e}</span>`;
  }
  /** @soyTemplate */
  renderInput(e) {
    const i = this.minLength === -1 ? void 0 : this.minLength, n = this.maxLength === -1 ? void 0 : this.maxLength, r = this.autocapitalize ? this.autocapitalize : void 0, o = this.validationMessage && !this.isUiValid, a = this.label ? "label" : void 0, c = e ? "helper-text" : void 0, s = this.focused || this.helperPersistent || o ? "helper-text" : void 0;
    return d`
      <input
          aria-labelledby=${ee(a)}
          aria-controls="${ee(c)}"
          aria-describedby="${ee(s)}"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${Ld(this.value)}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${ee(i)}"
          maxlength="${ee(n)}"
          pattern="${ee(this.pattern ? this.pattern : void 0)}"
          min="${ee(this.min === "" ? void 0 : this.min)}"
          max="${ee(this.max === "" ? void 0 : this.max)}"
          step="${ee(this.step === null ? void 0 : this.step)}"
          size="${ee(this.size === null ? void 0 : this.size)}"
          name="${ee(this.name === "" ? void 0 : this.name)}"
          inputmode="${ee(this.inputMode)}"
          autocapitalize="${ee(r)}"
          @input="${this.handleInputChange}"
          @focus="${this.onInputFocus}"
          @blur="${this.onInputBlur}">`;
  }
  /** @soyTemplate */
  renderLineRipple() {
    return this.outlined ? "" : d`
      <span .lineRippleFoundation=${ll()}></span>
    `;
  }
  /** @soyTemplate */
  renderHelperText(e, i) {
    const n = this.validationMessage && !this.isUiValid, r = {
      "mdc-text-field-helper-text--persistent": this.helperPersistent,
      "mdc-text-field-helper-text--validation-msg": n
    }, o = this.focused || this.helperPersistent || n ? void 0 : "true", a = n ? this.validationMessage : this.helper;
    return e ? d`
      <div class="mdc-text-field-helper-line">
        <div id="helper-text"
             aria-hidden="${ee(o)}"
             class="mdc-text-field-helper-text ${ye(r)}"
             >${a}</div>
        ${this.renderCharCounter(i)}
      </div>` : "";
  }
  /** @soyTemplate */
  renderCharCounter(e) {
    const i = Math.min(this.value.length, this.maxLength);
    return e ? d`
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
    let n = ua(i);
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
    }, deregisterValidationAttributeChangeHandler: (e) => e.disconnect() }, fn(this.mdcRoot));
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
      registerInputInteractionHandler: (e, i) => this.formElement.addEventListener(e, i, { passive: e in Nd }),
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
m([
  R(".mdc-text-field")
], B.prototype, "mdcRoot", void 0);
m([
  R("input")
], B.prototype, "formElement", void 0);
m([
  R(".mdc-floating-label")
], B.prototype, "labelElement", void 0);
m([
  R(".mdc-line-ripple")
], B.prototype, "lineRippleElement", void 0);
m([
  R("mwc-notched-outline")
], B.prototype, "outlineElement", void 0);
m([
  R(".mdc-notched-outline__notch")
], B.prototype, "notchElement", void 0);
m([
  f({ type: String })
], B.prototype, "value", void 0);
m([
  f({ type: String })
], B.prototype, "type", void 0);
m([
  f({ type: String })
], B.prototype, "placeholder", void 0);
m([
  f({ type: String }),
  ne(function(t, e) {
    e !== void 0 && this.label !== e && this.layout();
  })
], B.prototype, "label", void 0);
m([
  f({ type: String })
], B.prototype, "icon", void 0);
m([
  f({ type: String })
], B.prototype, "iconTrailing", void 0);
m([
  f({ type: Boolean, reflect: !0 })
], B.prototype, "disabled", void 0);
m([
  f({ type: Boolean })
], B.prototype, "required", void 0);
m([
  f({ type: Number })
], B.prototype, "minLength", void 0);
m([
  f({ type: Number })
], B.prototype, "maxLength", void 0);
m([
  f({ type: Boolean, reflect: !0 }),
  ne(function(t, e) {
    e !== void 0 && this.outlined !== e && this.layout();
  })
], B.prototype, "outlined", void 0);
m([
  f({ type: String })
], B.prototype, "helper", void 0);
m([
  f({ type: Boolean })
], B.prototype, "validateOnInitialRender", void 0);
m([
  f({ type: String })
], B.prototype, "validationMessage", void 0);
m([
  f({ type: Boolean })
], B.prototype, "autoValidate", void 0);
m([
  f({ type: String })
], B.prototype, "pattern", void 0);
m([
  f({ type: String })
], B.prototype, "min", void 0);
m([
  f({ type: String })
], B.prototype, "max", void 0);
m([
  f({ type: Number })
], B.prototype, "step", void 0);
m([
  f({ type: Number })
], B.prototype, "size", void 0);
m([
  f({ type: Boolean })
], B.prototype, "helperPersistent", void 0);
m([
  f({ type: Boolean })
], B.prototype, "charCounter", void 0);
m([
  f({ type: Boolean })
], B.prototype, "endAligned", void 0);
m([
  f({ type: String })
], B.prototype, "prefix", void 0);
m([
  f({ type: String })
], B.prototype, "suffix", void 0);
m([
  f({ type: String })
], B.prototype, "name", void 0);
m([
  f({ type: String })
], B.prototype, "inputMode", void 0);
m([
  f({ type: Boolean })
], B.prototype, "readOnly", void 0);
m([
  f({ type: String })
], B.prototype, "autocapitalize", void 0);
m([
  N()
], B.prototype, "outlineOpen", void 0);
m([
  N()
], B.prototype, "outlineWidth", void 0);
m([
  N()
], B.prototype, "isUiValid", void 0);
m([
  N()
], B.prototype, "focused", void 0);
m([
  vt({ passive: !0 })
], B.prototype, "handleInputChange", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Rd = ie`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{content:none}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38) )}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-error-color, var(--mdc-theme-error, #b00020) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let pn = class extends B {
};
pn.styles = [Rd];
pn = m([
  Z("mwc-textfield")
], pn);
var zd = Object.defineProperty, Dd = Object.getOwnPropertyDescriptor, Ke = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Dd(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && zd(e, i, r), r;
};
let Re = class extends pn {
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
    return this.reservedValues && this.reservedValues.some((t) => t === this.value) ? (this.setCustomValidity(u("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? d`<div style="position:relative;">
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
      </div>` : d``;
  }
  renderMulplierList() {
    return d`${this.multipliers.map(
      (t) => d`<mwc-list-item ?selected=${t === this.multiplier}
          >${t === null ? u("textfield.noMultiplier") : t}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? d`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : d``;
  }
  render() {
    return d`
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
Ke([
  f({ type: Boolean })
], Re.prototype, "nullable", 2);
Ke([
  f({ type: Array })
], Re.prototype, "multipliers", 2);
Ke([
  f({ type: String })
], Re.prototype, "multiplier", 1);
Ke([
  f({ type: String })
], Re.prototype, "unit", 2);
Ke([
  N()
], Re.prototype, "null", 1);
Ke([
  f({ type: String })
], Re.prototype, "maybeValue", 1);
Ke([
  f({ type: String })
], Re.prototype, "defaultValue", 2);
Ke([
  f({ type: Array })
], Re.prototype, "reservedValues", 2);
Ke([
  R("mwc-switch")
], Re.prototype, "nullSwitch", 2);
Ke([
  R("mwc-menu")
], Re.prototype, "multiplierMenu", 2);
Ke([
  R("mwc-icon-button")
], Re.prototype, "multiplierButton", 2);
Re = Ke([
  Z("wizard-textfield")
], Re);
var Od = Object.defineProperty, Md = Object.getOwnPropertyDescriptor, ei = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Md(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && Od(e, i, r), r;
};
let yt = class extends un {
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
    return this.nullable ? d`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : d``;
  }
  render() {
    return d`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
ei([
  f({ type: Boolean })
], yt.prototype, "nullable", 2);
ei([
  N()
], yt.prototype, "null", 1);
ei([
  f({ type: String })
], yt.prototype, "maybeValue", 1);
ei([
  f({ type: String })
], yt.prototype, "defaultValue", 2);
ei([
  f({ type: Array })
], yt.prototype, "reservedValues", 2);
ei([
  R("mwc-switch")
], yt.prototype, "nullSwitch", 2);
yt = ei([
  Z("wizard-select")
], yt);
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
var Pd = {
  ROOT: "mdc-form-field"
}, Fd = {
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
var Vd = (
  /** @class */
  function(t) {
    st(e, t);
    function e(i) {
      var n = t.call(this, de(de({}, e.defaultAdapter), i)) || this;
      return n.click = function() {
        n.handleClick();
      }, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Pd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Fd;
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
  }(et)
);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class zt extends Jt {
  constructor() {
    super(...arguments), this.alignEnd = !1, this.spaceBetween = !1, this.nowrap = !1, this.label = "", this.mdcFoundationClass = Vd;
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
        if (e instanceof $t) {
          const i = await e.ripple;
          i && i.startPress();
        }
      },
      deactivateInputRipple: async () => {
        const e = this.input;
        if (e instanceof $t) {
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
    return d`
      <div class="mdc-form-field ${ye(e)}">
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
m([
  f({ type: Boolean })
], zt.prototype, "alignEnd", void 0);
m([
  f({ type: Boolean })
], zt.prototype, "spaceBetween", void 0);
m([
  f({ type: Boolean })
], zt.prototype, "nowrap", void 0);
m([
  f({ type: String }),
  ne(async function(t) {
    const e = this.input;
    e && (e.localName === "input" ? e.setAttribute("aria-label", t) : e instanceof $t && (await e.updateComplete, e.setAriaLabel(t)));
  })
], zt.prototype, "label", void 0);
m([
  R(".mdc-form-field")
], zt.prototype, "mdcRoot", void 0);
m([
  Pr("", !0, "*")
], zt.prototype, "slottedInputs", void 0);
m([
  R("label")
], zt.prototype, "labelEl", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Bd = ie`.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch[dir=rtl]){margin-left:10px}`;
let gr = class extends zt {
};
gr.styles = [Bd];
gr = m([
  Z("mwc-formfield")
], gr);
class _e extends $t {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new mi(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
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
    return this.shouldRenderRipple ? d`<mwc-ripple
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
    return d`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${ye(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${ee(this.name)}"
              aria-checked="${ee(n)}"
              aria-label="${ee(this.ariaLabel)}"
              aria-labelledby="${ee(this.ariaLabelledBy)}"
              aria-describedby="${ee(this.ariaDescribedBy)}"
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
  R(".mdc-checkbox")
], _e.prototype, "mdcRoot", void 0);
m([
  R("input")
], _e.prototype, "formElement", void 0);
m([
  f({ type: Boolean, reflect: !0 })
], _e.prototype, "checked", void 0);
m([
  f({ type: Boolean })
], _e.prototype, "indeterminate", void 0);
m([
  f({ type: Boolean, reflect: !0 })
], _e.prototype, "disabled", void 0);
m([
  f({ type: String, reflect: !0 })
], _e.prototype, "name", void 0);
m([
  f({ type: String })
], _e.prototype, "value", void 0);
m([
  hi,
  f({ type: String, attribute: "aria-label" })
], _e.prototype, "ariaLabel", void 0);
m([
  hi,
  f({ type: String, attribute: "aria-labelledby" })
], _e.prototype, "ariaLabelledBy", void 0);
m([
  hi,
  f({ type: String, attribute: "aria-describedby" })
], _e.prototype, "ariaDescribedBy", void 0);
m([
  f({ type: Boolean })
], _e.prototype, "reducedTouchTarget", void 0);
m([
  N()
], _e.prototype, "animationClass", void 0);
m([
  N()
], _e.prototype, "shouldRenderRipple", void 0);
m([
  N()
], _e.prototype, "focused", void 0);
m([
  N()
], _e.prototype, "useStateLayerCustomProperties", void 0);
m([
  pi("mwc-ripple")
], _e.prototype, "ripple", void 0);
m([
  vt({ passive: !0 })
], _e.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Hd = ie`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let xr = class extends _e {
};
xr.styles = [Hd];
xr = m([
  Z("mwc-checkbox")
], xr);
var qd = Object.defineProperty, Ud = Object.getOwnPropertyDescriptor, We = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Ud(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && qd(e, i, r), r;
};
let ze = class extends be {
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
    return this.nullable ? d`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : d``;
  }
  render() {
    return d`
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
We([
  f({ type: String })
], ze.prototype, "label", 2);
We([
  f({ type: String })
], ze.prototype, "helper", 2);
We([
  f({ type: Boolean })
], ze.prototype, "nullable", 2);
We([
  f({ type: Boolean })
], ze.prototype, "defaultChecked", 2);
We([
  f({ type: String })
], ze.prototype, "maybeValue", 1);
We([
  f({ type: Boolean })
], ze.prototype, "disabled", 2);
We([
  N()
], ze.prototype, "null", 1);
We([
  N()
], ze.prototype, "checked", 1);
We([
  N()
], ze.prototype, "deactivateCheckbox", 2);
We([
  N()
], ze.prototype, "formfieldLabel", 1);
We([
  R("mwc-switch")
], ze.prototype, "nullSwitch", 2);
We([
  R("mwc-checkbox")
], ze.prototype, "checkbox", 2);
ze = We([
  Z("wizard-checkbox")
], ze);
function Wd(t) {
  return typeof t == "function";
}
function y(t) {
  return t instanceof Re || t instanceof yt || t instanceof ze ? t.maybeValue : t.value ?? null;
}
function qr(t) {
  return t instanceof Re ? t.multiplier : null;
}
function fe(t, e) {
  if (!t)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const i = Wd(t) ? t : () => t;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: i, ...e?.detail }
  });
}
function ti(t) {
  return fe(t, { detail: { subwizard: !0 } });
}
function Gd(t) {
  let e = "", i = t.parentElement;
  for (; i?.getAttribute("name"); )
    e = "/" + i.getAttribute("name") + e, i = i.parentElement;
  return e;
}
function Kt(t) {
  const e = t.getAttribute("name");
  return e || void 0;
}
function yr(t) {
  const e = t.getAttribute("desc");
  return e || void 0;
}
function mn(t) {
  const e = t.getAttribute("pathName");
  return e || void 0;
}
function Te(t) {
  const e = t.split(">"), i = e.pop() ?? "";
  return [e.join(">"), i];
}
const he = ":not(*)";
function jd(t) {
  return `${t.getAttribute("version")}	${t.getAttribute("revision")}`;
}
function Xd(t, e) {
  const [i, n] = e.split("	");
  return !i || !n ? he : `${t}[version="${i}"][revision="${n}"]`;
}
function pa(t) {
  return V(t.parentElement) + ">" + t.getAttribute("connectivityNode");
}
function ma(t, e) {
  const [i, n] = Te(e), r = oe[t].parents.flatMap(
    (o) => Ce(o, i).split(",")
  );
  return Se(
    r,
    [">"],
    [`${t}[connectivityNode="${n}"]`]
  ).map((o) => o.join("")).join(",");
}
function Zd(t) {
  const [e, i, n, r, o, a] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((c) => t.getAttribute(c));
  return e === "None" ? `${V(t.parentElement)}>(${r} ${a} ${o})` : `${e} ${i || "(Client)"}/${n ?? ""} ${r} ${o ?? ""}`;
}
function Kd(t, e) {
  if (e.endsWith(")")) {
    const [x, v] = Te(e), [_, A, E] = v.substring(1, v.length - 1).split(" ");
    if (!_ || !A) return he;
    const w = oe[t].parents.flatMap(
      (z) => Ce(z, x).split(",")
    );
    return Se(
      w,
      [">"],
      [`${t}[iedName="None"][lnClass="${_}"][lnType="${A}"][lnInst="${E}"]`]
    ).map((z) => z.join("")).join(",");
  }
  const [i, n, r, o, a] = e.split(/[ /]/);
  if (!i || !n || !o) return he;
  const [
    c,
    s,
    p,
    h,
    b
  ] = [
    [`[iedName="${i}"]`],
    n === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${n}"]`],
    r ? [`[prefix="${r}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    a ? [`[lnInst="${a}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return Se(
    [t],
    c,
    s,
    p,
    h,
    b
  ).map((x) => x.join("")).join(",");
}
function Yd(t) {
  return `${V(t.parentElement)}>${t.getAttribute(
    "iedName"
  )} ${t.getAttribute("apName")}`;
}
function Qd(t, e) {
  const [i, n] = Te(e), [r, o] = n.split(" ");
  return `${Ce(
    "IED",
    i
  )}>${t}[iedName="${r}"][apName="${o}"]`;
}
function Jd(t) {
  return `${V(t.parentElement)}>${t.getAttribute("associationID") ?? ""}`;
}
function eu(t, e) {
  const [i, n] = Te(e);
  return n ? `${Ce(
    "Server",
    i
  )}>${t}[associationID="${n}"]` : he;
}
function tu(t) {
  return `${V(t.closest("IED"))}>>${t.getAttribute("inst")}`;
}
function iu(t, e) {
  const [i, n] = e.split(">>");
  return n ? `IED[name="${i}"] ${t}[inst="${n}"]` : he;
}
function nu(t) {
  const e = t.textContent, [i, n, r, o, a] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((c) => t.getAttribute(c));
  return `${V(t.parentElement)}>${e} ${i || ""} ${n || ""}/${r ?? ""} ${o ?? ""} ${a ?? ""}`;
}
function ru(t, e) {
  const [i, n] = Te(e), [r, o, a, c, s, p] = n.split(/[ /]/), [
    h,
    b,
    x,
    v,
    _,
    A
  ] = [
    oe[t].parents.flatMap(
      (E) => Ce(E, i).split(",")
    ),
    [`${r}`],
    o ? [`[apRef="${o}"]`] : [":not([apRef])", '[apRef=""]'],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    p ? [`[lnInst="${p}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return Se(
    h,
    [">"],
    [t],
    b,
    x,
    v,
    _,
    A
  ).map((E) => E.join("")).join(",");
}
function ou(t) {
  const [e, i, n, r, o, a, c, s] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((h) => t.getAttribute(h)), p = `${e}/${i ?? ""} ${n} ${r ?? ""}.${o} ${a || ""}`;
  return `${V(t.parentElement)}>${p} (${c}${s ? " [" + s + "]" : ""})`;
}
function au(t, e) {
  const [i, n] = Te(e), [r, o, a, c] = n.split(/[ /.]/), s = n.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), p = s && s[1] ? s[1] : "", h = s && s[2] ? s[2] : "", b = n.match(/\(([A-Z]{2})/), x = n.match(/ \[([0-9]{1,2})\]/), v = b && b[1] ? b[1] : "", _ = x && x[1] ? x[1] : "", [
    A,
    E,
    w,
    z,
    D,
    H,
    ae,
    qe,
    O
  ] = [
    oe[t].parents.flatMap(
      (I) => Ce(I, i).split(",")
    ),
    [`[ldInst="${r}"]`],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    c ? [`[lnInst="${c}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${p}"]`],
    h ? [`[daName="${h}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${v}"]`],
    _ ? [`[ix="${_}"]`] : [":not([ix])", '[ix=""]']
  ];
  return Se(
    A,
    [">"],
    [t],
    E,
    w,
    z,
    D,
    H,
    ae,
    qe,
    O
  ).map((I) => I.join("")).join(",");
}
function lu(t) {
  if (!t.parentElement) return NaN;
  const e = V(t.parentElement), i = t.getAttribute("iedName"), n = t.getAttribute("intAddr"), r = Array.from(
    t.parentElement.querySelectorAll(`ExtRef[intAddr="${n}"]`)
  ).indexOf(t);
  if (n) return `${e}>${n}[${r}]`;
  const [
    o,
    a,
    c,
    s,
    p,
    h,
    b,
    x,
    v,
    _,
    A,
    E
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
  ].map((D) => t.getAttribute(D)), w = E ? `${b}:${E} ${x ?? ""}/${v ?? ""} ${_ ?? ""} ${A ?? ""}` : "", z = `${i} ${o}/${a ?? ""} ${c} ${s ?? ""} ${p} ${h || ""}`;
  return `${e}>${w ? w + " " : ""}${z}${n ? `@${n}` : ""}`;
}
function cu(t, e) {
  const [i, n] = Te(e), r = oe[t].parents.flatMap(
    (le) => Ce(le, i).split(",")
  );
  if (n.endsWith("]")) {
    const [le] = n.split("["), ke = [`[intAddr="${le}"]`];
    return Se(r, [">"], [t], ke).map((Pe) => Pe.join("")).join(",");
  }
  let o, a, c, s, p, h, b, x, v, _, A, E, w, z;
  !n.includes(":") && !n.includes("@") ? [o, a, c, s, p, h, b] = n.split(/[ /]/) : n.includes(":") && !n.includes("@") ? [
    x,
    v,
    _,
    A,
    E,
    w,
    o,
    a,
    c,
    s,
    p,
    h,
    b
  ] = n.split(/[ /:]/) : !n.includes(":") && n.includes("@") ? [o, a, c, s, p, h, b, z] = n.split(/[ /@]/) : [
    x,
    v,
    _,
    A,
    E,
    w,
    o,
    a,
    c,
    s,
    p,
    h,
    b,
    z
  ] = n.split(/[ /:@]/);
  const [
    D,
    H,
    ae,
    qe,
    O,
    I,
    P,
    q,
    we,
    ue,
    L,
    At,
    St,
    dt
  ] = [
    o ? [`[iedName="${o}"]`] : [":not([iedName])"],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    s ? [`[lnClass="${s}"]`] : [":not([lnClass])"],
    p ? [`[lnInst="${p}"]`] : [":not([lnInst])", '[lnInst=""]'],
    h ? [`[doName="${h}"]`] : [":not([doName])"],
    b ? [`[daName="${b}"]`] : [":not([daName])", '[daName=""]'],
    x ? [`[serviceType="${x}"]`] : [":not([serviceType])", '[serviceType=""]'],
    v ? [`[srcCBName="${v}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    _ ? [`[srcLDInst="${_}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    A ? [`[srcPrefix="${A}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    E ? [`[srcLNClass="${E}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    w ? [`[srcLNInst="${w}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    z ? [`[intAddr="${z}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return Se(
    r,
    [">"],
    [t],
    D,
    H,
    ae,
    qe,
    O,
    I,
    P,
    q,
    we,
    ue,
    L,
    At,
    St,
    dt
  ).map((le) => le.join("")).join(",");
}
function su(t) {
  const [e, i, n] = ["prefix", "lnClass", "inst"].map(
    (r) => t.getAttribute(r)
  );
  return `${V(t.parentElement)}>${e ?? ""} ${i} ${n}`;
}
function du(t, e) {
  const [i, n] = Te(e), r = oe[t].parents.flatMap(
    (b) => Ce(b, i).split(",")
  ), [o, a, c] = n.split(" ");
  if (!a) return he;
  const [s, p, h] = [
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    [`[inst="${c}"]`]
  ];
  return Se(
    r,
    [">"],
    [t],
    s,
    p,
    h
  ).map((b) => b.join("")).join(",");
}
function uu(t) {
  const [e, i, n, r, o, a] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((c) => t.getAttribute(c));
  return `${V(t.parentElement)}>${i} ${e || ""} ${n}/${r ?? ""} ${o} ${a}`;
}
function pu(t, e) {
  const [i, n] = Te(e), r = oe[t].parents.flatMap(
    (w) => Ce(w, i).split(",")
  ), [o, a, c, s, p, h] = n.split(/[ /]/), [
    b,
    x,
    v,
    _,
    A,
    E
  ] = [
    o ? [`[iedName="${o}"]`] : [":not([iedName])", '[iedName=""]'],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    c ? [`[ldInst="${c}"]`] : [":not([ldInst])", '[ldInst=""]'],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${p}"]`],
    h ? [`[lnInst="${h}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return Se(
    r,
    [">"],
    [t],
    b,
    x,
    v,
    _,
    A,
    E
  ).map((w) => w.join("")).join(",");
}
function ha(t) {
  const [e, i] = ["name", "ix"].map((n) => t.getAttribute(n));
  return `${V(t.parentElement)}>${e}${i ? "[" + i + "]" : ""}`;
}
function vr(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [n, r] = Te(e), [o, a, c, s] = r.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!a) return he;
  if (i === 0) return `${t}[name="${a}"]`;
  const p = oe[t].parents.flatMap(
    (x) => x === "SDI" ? vr(x, n, i - 1).split(",") : Ce(x, n).split(",")
  ).filter((x) => !x.startsWith(he));
  if (p.length === 0) return he;
  const [h, b] = [
    [`[name="${a}"]`],
    s ? [`[ix="${s}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return Se(
    p,
    [">"],
    [t],
    h,
    b
  ).map((x) => x.join("")).join(",");
}
function mu(t) {
  if (!t.parentElement) return NaN;
  const e = t.getAttribute("sGroup"), i = Array.from(t.parentElement.children).filter((n) => n.getAttribute("sGroup") === e).findIndex((n) => n.isSameNode(t));
  return `${V(t.parentElement)}>${e ? e + "." : ""} ${i}`;
}
function hu(t, e) {
  const [i, n] = Te(e), [r, o] = n.split(" "), a = parseFloat(o), c = oe[t].parents.flatMap(
    (h) => Ce(h, i).split(",")
  ), [s, p] = [
    r ? [`[sGroup="${r}"]`] : [""],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return Se(
    c,
    [">"],
    [t],
    s,
    p
  ).map((h) => h.join("")).join(",");
}
function fu(t) {
  const [e, i] = ["iedName", "apName"].map(
    (n) => t.getAttribute(n)
  );
  return `${e} ${i}`;
}
function bu(t, e) {
  const [i, n] = e.split(" ");
  return !i || !n ? he : `${t}[iedName="${i}"][apName="${n}"]`;
}
function fa(t) {
  const [e, i] = ["ldInst", "cbName"].map(
    (n) => t.getAttribute(n)
  );
  return `${e} ${i}`;
}
function ba(t, e) {
  const [i, n] = e.split(" ");
  return !i || !n ? he : `${t}[ldInst="${i}"][cbName="${n}"]`;
}
function gu(t) {
  if (!t.parentElement) return NaN;
  if (!t.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = t.getAttribute("type");
  return t.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${V(t.parentElement)}>${e}`;
}
function xu(t, e) {
  const [i, n] = Te(e), [r, o] = [
    oe[t].parents.flatMap(
      (a) => Ce(a, i).split(",")
    ),
    n ? [`[type="${n}"]`] : [""]
  ];
  return Se(r, [">"], [t], o).map((a) => a.join("")).join(",");
}
function yu(t) {
  if (!t.parentElement) return NaN;
  const e = t.parentElement, i = t.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${V(t.parentElement)}>${i}`;
  const n = Array.from(t.parentElement.children).filter((r) => r.getAttribute("type") === i).findIndex((r) => r.isSameNode(t));
  return `${V(t.parentElement)}>${i} [${n}]`;
}
function vu(t, e) {
  const [i, n] = Te(e), [r] = n.split(" "), o = n && n.match(/\[([0-9]+)\]/) && n.match(/\[([0-9]+)\]/)[1] ? parseFloat(n.match(/\[([0-9]+)\]/)[1]) : NaN, [a, c, s] = [
    oe[t].parents.flatMap(
      (p) => Ce(p, i).split(",")
    ),
    [`[type="${r}"]`],
    o ? [`:nth-child(${o + 1})`] : [""]
  ];
  return Se(
    a,
    [">"],
    [t],
    c,
    s
  ).map((p) => p.join("")).join(",");
}
function wu(t) {
  return `${V(t.parentElement)}>${t.getAttribute("ord")}`;
}
function _u(t, e) {
  const [i, n] = Te(e);
  return `${Ce("EnumType", i)}>${t}[ord="${n}"]`;
}
function Au(t) {
  return `${V(t.parentElement)}>${t.getAttribute("type") || "8-MMS"}	${t.textContent}`;
}
function Su(t, e) {
  const [i, n] = Te(e), [r, o] = n.split("	"), [a] = [
    oe[t].parents.flatMap(
      (c) => Ce(c, i).split(",")
    )
  ];
  return Se(
    a,
    [">"],
    [t],
    [`[type="${r}"]`],
    [">"],
    [o]
  ).map((c) => c.join("")).join(",");
}
function Eu() {
  return "";
}
function Cu() {
  return ":root";
}
function j(t) {
  return t.parentElement.tagName === "SCL" ? t.getAttribute("name") : `${V(t.parentElement)}>${t.getAttribute("name")}`;
}
function W(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [n, r] = Te(e);
  if (!r) return he;
  if (i === 0) return `${t}[name="${r}"]`;
  const o = oe[t].parents;
  if (!o) return he;
  const a = o.flatMap(
    (c) => oe[c].selector === oe.Substation.selector ? W(c, n, i - 1).split(",") : Ce(c, n).split(",")
  ).filter((c) => !c.startsWith(he));
  return a.length === 0 ? he : Se(a, [">"], [t], [`[name="${r}"]`]).map((c) => c.join("")).join(",");
}
function $(t) {
  return V(t.parentElement).toString();
}
function k(t, e) {
  const i = oe[t].parents;
  if (!i) return he;
  const n = i.flatMap((r) => Ce(r, e).split(",")).filter((r) => !r.startsWith(he));
  return n.length === 0 ? he : Se(n, [">"], [t]).map((r) => r.join("")).join(",");
}
function rn(t) {
  return `#${t.id}`;
}
function on(t, e) {
  const i = e.replace(/^#/, "");
  return i ? `${t}[id="${i}"]` : he;
}
const dl = [
  "TransformerWinding",
  "ConductingEquipment"
], ul = [
  "GeneralEquipment",
  "PowerTransformer",
  ...dl
], wr = ["Substation", "VoltageLevel", "Bay"], pl = ["Process", "Line"], ml = ["EqSubFunction", "EqFunction"], Iu = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...ul,
  ...wr,
  ...pl,
  ...ml
], hl = ["ConnectivityNode", ...Iu], Tu = ["GOOSESecurity", "SMVSecurity"], $u = ["SubNetwork", ...Tu, ...hl], ku = ["BDA", "DA"], Lu = ["SampledValueControl", "GSEControl"], Nu = ["LogControl", "ReportControl"], Ru = [...Lu, ...Nu], zu = ["GSE", "SMV"], Du = [
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
  ...Ru,
  ...zu,
  ...ku
], Xt = ["LN0", "LN"], Ou = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Mu = ["Subject", "IssuerName"], Pu = ["MinTime", "MaxTime"], Fu = ["LNodeType", "DOType", "DAType", "EnumType"], Vu = [
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
], Bu = ["DynDataSet", "ConfDataSet"], Hu = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...Bu
], qu = ["ConfLogControl", "ConfSigRef"], Uu = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], Wu = ["SCL", ...$u, ...Du, ...Fu], fl = [
  ...Wu,
  ...Ou,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Mu,
  ...Pu,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...Xt,
  ...Vu,
  "DynAssociation",
  "SettingGroups",
  ...Hu,
  ...qu,
  ...Uu,
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
], Gu = new Set(fl);
function Ur(t) {
  return Gu.has(t);
}
const bn = ["Text", "Private"], Ct = [...bn], me = [...bn], an = [...bn], ga = [...me, "Val"], bl = [...Ct, "LNode"], Tt = [...bl], _r = [...Tt], Kn = [
  ...Tt,
  "PowerTransformer",
  "GeneralEquipment"
], xa = [
  ..._r,
  "Terminal"
], ya = [...me, "Address"], gl = [...Ct], va = [...gl, "IEDName"], wa = [
  ...me,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], _a = [
  ...Tt,
  "GeneralEquipment",
  "Function"
], Aa = [...gl, "TrgOps"], Sa = [
  ...Tt,
  "GeneralEquipment",
  "EqSubFunction"
], oe = {
  AccessControl: {
    identity: $,
    selector: k,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: j,
    selector: W,
    parents: ["IED"],
    children: [
      ...Ct,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: $,
    selector: k,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: Jd,
    selector: eu,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: $,
    selector: k,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: j,
    selector: W,
    parents: ["DAType"],
    children: [...ga]
  },
  BitRate: {
    identity: $,
    selector: k,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: j,
    selector: W,
    parents: ["VoltageLevel"],
    children: [
      ...Kn,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: uu,
    selector: pu,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: $,
    selector: k,
    parents: ["SCL"],
    children: [...me, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: j,
    selector: W,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...xa,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: $,
    selector: k,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: fu,
    selector: bu,
    parents: ["SubNetwork"],
    children: [...me, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: j,
    selector: W,
    parents: ["Bay", "Line"],
    children: [...bl]
  },
  DA: {
    identity: j,
    selector: W,
    parents: ["DOType"],
    children: [...ga]
  },
  DAI: {
    identity: ha,
    selector: vr,
    parents: ["DOI", "SDI"],
    children: [...me, "Val"]
  },
  DAType: {
    identity: rn,
    selector: on,
    parents: ["DataTypeTemplates"],
    children: [...an, "BDA", "ProtNs"]
  },
  DO: {
    identity: j,
    selector: W,
    parents: ["LNodeType"],
    children: [...me]
  },
  DOI: {
    identity: j,
    selector: W,
    parents: [...Xt],
    children: [...me, "SDI", "DAI"]
  },
  DOType: {
    identity: rn,
    selector: on,
    parents: ["DataTypeTemplates"],
    children: [...an, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: j,
    selector: W,
    parents: [...Xt],
    children: [...Ct, "FCDA"]
  },
  DataSetDirectory: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: $,
    selector: k,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: rn,
    selector: on,
    parents: ["DataTypeTemplates"],
    children: [...an, "EnumVal"]
  },
  EnumVal: {
    identity: wu,
    selector: _u,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: j,
    selector: W,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...Sa]
  },
  EqSubFunction: {
    identity: j,
    selector: W,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...Sa]
  },
  ExtRef: {
    identity: lu,
    selector: cu,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: ou,
    selector: au,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: j,
    selector: W,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...Tt,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: j,
    selector: W,
    parents: [
      "SubFunction",
      "Function",
      ...pl,
      ...ml,
      ...wr
    ],
    children: [..._r, "EqFunction"]
  },
  GetCBValues: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: j,
    selector: W,
    parents: ["AccessPoint"],
    children: [...Ct, "Subject", "IssuerName"]
  },
  GSE: {
    identity: fa,
    selector: ba,
    parents: ["ConnectedAP"],
    children: [...ya, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: j,
    selector: W,
    parents: ["LN0"],
    children: [...va, "Protocol"]
  },
  GSESettings: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: $,
    selector: k,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: $,
    selector: k,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: jd,
    selector: Xd,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: j,
    selector: W,
    parents: ["SCL"],
    children: [...me, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: nu,
    selector: ru,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: $,
    selector: k,
    parents: [...Xt],
    children: [...me, "ExtRef"]
  },
  IssuerName: {
    identity: $,
    selector: k,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: Yd,
    selector: Qd,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: tu,
    selector: iu,
    parents: ["Server"],
    children: [...me, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: su,
    selector: du,
    parents: ["AccessPoint", "LDevice"],
    children: [...wa]
  },
  LN0: {
    identity: $,
    selector: k,
    parents: ["LDevice"],
    children: [
      ...wa,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: Zd,
    selector: Kd,
    parents: [...hl],
    children: [...me]
  },
  LNodeType: {
    identity: rn,
    selector: on,
    parents: ["DataTypeTemplates"],
    children: [...an, "DO"]
  },
  Line: {
    identity: j,
    selector: W,
    parents: ["Process", "SCL"],
    children: [
      ..._a,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: j,
    selector: W,
    parents: [...Xt],
    children: [...me]
  },
  LogControl: {
    identity: j,
    selector: W,
    parents: [...Xt],
    children: [...Aa]
  },
  LogSettings: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: $,
    selector: k,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: $,
    selector: k,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: $,
    selector: k,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: pa,
    selector: ma,
    parents: ["TransformerWinding"],
    children: [...me]
  },
  OptFields: {
    identity: $,
    selector: k,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: yu,
    selector: vu,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: gu,
    selector: xu,
    parents: ["ConnectedAP"],
    children: [...me, "P"]
  },
  PowerTransformer: {
    identity: j,
    selector: W,
    parents: [...wr],
    children: [
      ..._r,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => he,
    parents: [],
    children: []
  },
  Process: {
    identity: j,
    selector: W,
    parents: ["Process", "SCL"],
    children: [
      ..._a,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: Au,
    selector: Su,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: $,
    selector: k,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: j,
    selector: W,
    parents: [...Xt],
    children: [...Aa, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: $,
    selector: k,
    parents: ["ReportControl"],
    children: [...me, "ClientLN"]
  },
  SamplesPerSec: {
    identity: $,
    selector: k,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: j,
    selector: W,
    parents: ["LN0"],
    children: [...va, "SmvOpts"]
  },
  SecPerSamples: {
    identity: $,
    selector: k,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: Eu,
    selector: Cu,
    parents: [],
    children: [
      ...bn,
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
    identity: ha,
    selector: vr,
    parents: ["DOI", "SDI"],
    children: [...me, "SDI", "DAI"]
  },
  SDO: {
    identity: j,
    selector: W,
    parents: ["DOType"],
    children: [...Ct]
  },
  Server: {
    identity: $,
    selector: k,
    parents: ["AccessPoint"],
    children: [
      ...me,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: $,
    selector: k,
    parents: ["AccessPoint"],
    children: [...me]
  },
  Services: {
    identity: $,
    selector: k,
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
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: $,
    selector: k,
    parents: ["LN0"],
    children: [...me]
  },
  SettingGroups: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: $,
    selector: k,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: $,
    selector: k,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: fa,
    selector: ba,
    parents: ["ConnectedAP"],
    children: [...ya]
  },
  SmvOpts: {
    identity: $,
    selector: k,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: j,
    selector: W,
    parents: ["AccessPoint"],
    children: [...Ct, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: j,
    selector: W,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...dl
    ],
    children: [...Tt, "EqFunction"]
  },
  SubFunction: {
    identity: j,
    selector: W,
    parents: ["SubFunction", "Function"],
    children: [
      ...Tt,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: j,
    selector: W,
    parents: ["Communication"],
    children: [...Ct, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: $,
    selector: k,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: j,
    selector: W,
    parents: ["SCL"],
    children: [...Kn, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: j,
    selector: W,
    parents: ["TransformerWinding"],
    children: [...Tt, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: pa,
    selector: ma,
    parents: [...ul],
    children: [...me]
  },
  Text: {
    identity: $,
    selector: k,
    parents: fl.filter((t) => t !== "Text" && t !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: $,
    selector: k,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: j,
    selector: W,
    parents: ["PowerTransformer"],
    children: [
      ...xa,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: $,
    selector: k,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: mu,
    selector: hu,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: $,
    selector: k,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: $,
    selector: k,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: j,
    selector: W,
    parents: ["Substation"],
    children: [...Kn, "Voltage", "Bay", "Function"]
  }
};
function Ce(t, e) {
  return typeof e != "string" ? he : Ur(t) ? oe[t].selector(t, e) : t;
}
function bt(t, e, i) {
  if (typeof i != "string" || !Ur(e)) return null;
  const n = t.querySelector(oe[e].selector(e, i));
  return n === null || Ue(n) ? n : Array.from(
    t.querySelectorAll(oe[e].selector(e, i))
  ).find(Ue) ?? null;
}
function V(t) {
  if (t === null) return NaN;
  if (t.closest("Private")) return NaN;
  const e = t.tagName;
  return Ur(e) ? oe[e].identity(t) : NaN;
}
const Oi = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  decimal: "[+\\-]?[0-9]+(([.][0-9]*)?|([.][0-9]+))",
  unsigned: "[+]?[0-9]+(([.][0-9]*)?|([.][0-9]+))"
};
function xl(t, e) {
  return typeof t == "string" && typeof e == "string" ? t.localeCompare(e) : typeof t == "object" && typeof e == "string" ? (t.getAttribute("name") ?? "").localeCompare(e) : typeof t == "string" && typeof e == "object" ? t.localeCompare(e.getAttribute("name")) : typeof t == "object" && typeof e == "object" ? (t.getAttribute("name") ?? "").localeCompare(
    e.getAttribute("name") ?? ""
  ) : 0;
}
function Se(...t) {
  return t.reduce(
    (e, i) => e.flatMap((n) => i.map((r) => [n, r].flat())),
    [[]]
  );
}
function yl(t, e = /* @__PURE__ */ new WeakSet()) {
  if (e.has(t)) return 1 / 0;
  switch (t?.constructor) {
    case Object:
    case Array:
      return e.add(t), 1 + Math.max(
        -1,
        ...Object.values(t).map((i) => yl(i, e))
      );
    default:
      return 0;
  }
}
function Ue(t) {
  return !t.closest("Private");
}
const ju = 99, Xu = Array(ju).fill(1).map((t, e) => `${e + 1}`);
function vl(t) {
  const e = /* @__PURE__ */ new Map();
  return (i) => {
    if (!e.has(i)) {
      const n = new Set(
        K(t, "LNode").filter((r) => r.getAttribute("lnClass") === i).map((r) => r.getAttribute("lnInst"))
      );
      e.set(i, () => {
        const r = Xu.find((o) => !n.has(o));
        return r && n.add(r), r;
      });
    }
    return e.get(i)();
  };
}
var Zu = Object.defineProperty, Ku = Object.getOwnPropertyDescriptor, fi = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Ku(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && Zu(e, i, r), r;
};
function wl(t, e) {
  const i = t.nodeType === Node.ELEMENT_NODE ? t.closest(e) : null;
  if (i) return i;
  const n = t.getRootNode();
  return n instanceof ShadowRoot ? wl(n.host, e) : null;
}
let kt = class extends be {
  constructor() {
    super(...arguments), this.secondary = !1, this.highlighted = !1, this.level = 1;
  }
  async firstUpdated() {
    this.tabIndex = 0;
    const t = wl(this.parentNode, "action-pane");
    t && (this.level = t.level + 1), this.level = Math.floor(this.level);
  }
  renderHeader() {
    const t = d`<span
        ><slot name="icon"
          >${this.icon ? d`<mwc-icon>${this.icon}</mwc-icon>` : Ve}</slot
        ></span
      >
      ${this.label ?? Ve}
      <nav><slot name="action"></slot></nav>`, e = Math.floor(Math.max(this.level, 1)), i = typeof this.label == "string" ? this.label : "";
    switch (e) {
      case 1:
        return d`<h1 title="${i}">${t}</h1>`;
      case 2:
        return d`<h2 title="${i}">${t}</h2>`;
      case 3:
        return d`<h3 title="${i}">${t}</h3>`;
      default:
        return d`<h4 title="${i}">${t}</h4>`;
    }
  }
  render() {
    return d`<section
      class="${ye({
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
kt.styles = ie`
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
fi([
  f({ type: String })
], kt.prototype, "label", 2);
fi([
  f({ type: String })
], kt.prototype, "icon", 2);
fi([
  f({ type: Boolean })
], kt.prototype, "secondary", 2);
fi([
  f({ type: Boolean })
], kt.prototype, "highlighted", 2);
fi([
  f({ type: Number })
], kt.prototype, "level", 2);
kt = fi([
  Z("action-pane")
], kt);
class He extends be {
  constructor() {
    super(...arguments), this.mini = !1, this.exited = !1, this.disabled = !1, this.extended = !1, this.showIconAtEnd = !1, this.reducedTouchTarget = !1, this.icon = "", this.label = "", this.shouldRenderRipple = !1, this.useStateLayerCustomProperties = !1, this.rippleHandlers = new mi(() => (this.shouldRenderRipple = !0, this.ripple));
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
    return d`<button
          class="mdc-fab ${ye(i)}"
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
    return d``;
  }
  /** @soyTemplate */
  renderTouchTarget() {
    const e = this.mini && !this.reducedTouchTarget;
    return d`${e ? d`<div class="mdc-fab__touch"></div>` : ""}`;
  }
  /** @soyTemplate */
  renderLabel() {
    const e = this.label !== "" && this.extended;
    return d`${e ? d`<span class="mdc-fab__label">${this.label}</span>` : ""}`;
  }
  /** @soyTemplate */
  renderBeforeRipple() {
    return d``;
  }
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? d`<mwc-ripple class="ripple"
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
He.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
m([
  pi("mwc-ripple")
], He.prototype, "ripple", void 0);
m([
  f({ type: Boolean })
], He.prototype, "mini", void 0);
m([
  f({ type: Boolean })
], He.prototype, "exited", void 0);
m([
  f({ type: Boolean })
], He.prototype, "disabled", void 0);
m([
  f({ type: Boolean })
], He.prototype, "extended", void 0);
m([
  f({ type: Boolean })
], He.prototype, "showIconAtEnd", void 0);
m([
  f({ type: Boolean })
], He.prototype, "reducedTouchTarget", void 0);
m([
  f()
], He.prototype, "icon", void 0);
m([
  f()
], He.prototype, "label", void 0);
m([
  N()
], He.prototype, "shouldRenderRipple", void 0);
m([
  N()
], He.prototype, "useStateLayerCustomProperties", void 0);
m([
  vt({ passive: !0 })
], He.prototype, "handleRippleStartPress", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Yu = ie`:host .mdc-fab .material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{outline:none;--mdc-ripple-color: currentcolor;user-select:none;-webkit-tap-highlight-color:transparent;display:inline-flex;-webkit-tap-highlight-color:transparent;display:inline-flex;outline:none;user-select:none}:host .mdc-touch-target-wrapper{display:inline}:host .mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}:host .mdc-fab{position:relative;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host .mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}:host .mdc-fab::-moz-focus-inner{padding:0;border:0}:host .mdc-fab:hover{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}:host .mdc-fab.mdc-ripple-upgraded--background-focused,:host .mdc-fab:not(.mdc-ripple-upgraded):focus{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}:host .mdc-fab:active,:host .mdc-fab:focus:active{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0,0,0,.12)}:host .mdc-fab:active,:host .mdc-fab:focus{outline:none}:host .mdc-fab:hover{cursor:pointer}:host .mdc-fab>svg{width:100%}:host .mdc-fab--mini{width:40px;height:40px}:host .mdc-fab--extended{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);border-radius:24px;padding-left:20px;padding-right:20px;width:auto;max-width:100%;height:48px;line-height:normal}:host .mdc-fab--extended .mdc-fab__ripple{border-radius:24px}:host .mdc-fab--extended .mdc-fab__icon{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] :host .mdc-fab--extended .mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}:host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] :host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}:host .mdc-fab--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}:host .mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}:host .mdc-fab::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}:host .mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}:host .mdc-fab__icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}:host .mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}:host .mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}:host .mdc-fab .mdc-fab__icon{width:24px;height:24px;font-size:24px}:host .mdc-fab,:host .mdc-fab:not(:disabled) .mdc-fab__icon,:host .mdc-fab:not(:disabled) .mdc-fab__label,:host .mdc-fab:disabled .mdc-fab__icon,:host .mdc-fab:disabled .mdc-fab__label{color:#fff;color:var(--mdc-theme-on-secondary, #fff)}:host .mdc-fab:not(.mdc-fab--extended){border-radius:50%}:host .mdc-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:50%}:host .mdc-fab{position:relative;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host .mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}:host .mdc-fab::-moz-focus-inner{padding:0;border:0}:host .mdc-fab:hover{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}:host .mdc-fab.mdc-ripple-upgraded--background-focused,:host .mdc-fab:not(.mdc-ripple-upgraded):focus{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}:host .mdc-fab:active,:host .mdc-fab:focus:active{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0,0,0,.12)}:host .mdc-fab:active,:host .mdc-fab:focus{outline:none}:host .mdc-fab:hover{cursor:pointer}:host .mdc-fab>svg{width:100%}:host .mdc-fab--mini{width:40px;height:40px}:host .mdc-fab--extended{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);border-radius:24px;padding-left:20px;padding-right:20px;width:auto;max-width:100%;height:48px;line-height:normal}:host .mdc-fab--extended .mdc-fab__ripple{border-radius:24px}:host .mdc-fab--extended .mdc-fab__icon{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] :host .mdc-fab--extended .mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}:host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] :host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}:host .mdc-fab--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}:host .mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}:host .mdc-fab::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}:host .mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}:host .mdc-fab__icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}:host .mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}:host .mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab .ripple{overflow:hidden}:host .mdc-fab:not(.mdc-fab--extended) .ripple{border-radius:50%}:host .mdc-fab .mdc-fab__label{z-index:0}:host .mdc-fab:not(.mdc-fab--extended) .ripple{border-radius:50%}:host .mdc-fab .mdc-fab__icon ::slotted(*){width:inherit;height:inherit;font-size:inherit}:host .mdc-fab--extended.mdc-fab--exited .mdc-fab__icon ::slotted(*){transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab{padding-top:0px;padding-top:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-right:0px;padding-right:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-bottom:0px;padding-bottom:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-left:0px;padding-left:max(0px, var(--mdc-fab-focus-outline-width, 0px));box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-fab-box-shadow, 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12))}:host .mdc-fab:not(:disabled).mdc-ripple-upgraded--background-focused,:host .mdc-fab:not(:disabled):not(.mdc-ripple-upgraded):focus{border-color:initial;border-color:var(--mdc-fab-focus-outline-color, initial)}:host .mdc-fab:not(:disabled).mdc-ripple-upgraded--background-focused,:host .mdc-fab:not(:disabled):not(.mdc-ripple-upgraded):focus{border-style:solid;border-width:var(--mdc-fab-focus-outline-width, 0px);padding-top:0px;padding-top:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-right:0px;padding-right:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-bottom:0px;padding-bottom:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-left:0px;padding-left:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1))}:host .mdc-fab:hover,:host .mdc-fab:focus{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-fab-box-shadow, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}:host .mdc-fab:active{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-fab-box-shadow, 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12))}:host .mdc-fab .ripple{overflow:hidden}:host .mdc-fab .mdc-fab__label{z-index:0}:host .mdc-fab:not(.mdc-fab--extended) .ripple{border-radius:50%}:host .mdc-fab.mdc-fab--extended .ripple{border-radius:24px}:host .mdc-fab .mdc-fab__icon{width:24px;width:var(--mdc-icon-size, 24px);height:24px;height:var(--mdc-icon-size, 24px);font-size:24px;font-size:var(--mdc-icon-size, 24px);transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform;display:inline-flex;align-items:center;justify-content:center}:host .mdc-fab.mdc-fab--extended{padding-top:0px;padding-top:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-right:20px;padding-right:max(var(--mdc-fab-extended-label-padding, 20px), var(--mdc-fab-focus-outline-width, 0px));padding-bottom:0px;padding-bottom:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-left:20px;padding-left:max(var(--mdc-fab-extended-label-padding, 20px), var(--mdc-fab-focus-outline-width, 0px))}:host .mdc-fab.mdc-fab--extended:not(:disabled).mdc-ripple-upgraded--background-focused,:host .mdc-fab.mdc-fab--extended:not(:disabled):not(.mdc-ripple-upgraded):focus{border-style:solid;border-width:var(--mdc-fab-focus-outline-width, 0px);padding-top:0px;padding-top:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-right:20px;padding-right:max(calc(var(--mdc-fab-extended-label-padding, 20px) - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(var(--mdc-fab-extended-label-padding, 20px) - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-bottom:0px;padding-bottom:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-left:20px;padding-left:max(calc(var(--mdc-fab-extended-label-padding, 20px) - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(var(--mdc-fab-extended-label-padding, 20px) - var(--mdc-fab-focus-outline-width, 0px)) * -1))}:host .mdc-fab.mdc-fab--extended.icon-end .mdc-fab__icon{margin-left:12px;margin-left:var(--mdc-fab-extended-icon-padding, 12px);margin-right:calc(12px - 20px);margin-right:calc(var(--mdc-fab-extended-icon-padding, 12px) - var(--mdc-fab-extended-label-padding, 20px))}[dir=rtl] :host .mdc-fab.mdc-fab--extended.icon-end .mdc-fab__icon,:host .mdc-fab.mdc-fab--extended.icon-end .mdc-fab__icon[dir=rtl]{margin-left:calc(12px - 20px);margin-left:calc(var(--mdc-fab-extended-icon-padding, 12px) - var(--mdc-fab-extended-label-padding, 20px));margin-right:12px;margin-right:var(--mdc-fab-extended-icon-padding, 12px)}`;
let Ar = class extends He {
};
Ar.styles = [Yu];
Ar = m([
  Z("mwc-fab")
], Ar);
function Qu(t, e) {
  const i = {};
  return Array.from(t.attributes).forEach((n) => {
    i[n.name] = n.value;
  }), { element: t, oldAttributes: i, newAttributes: e };
}
function it(t, e = "user", i) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { action: t, initiator: e, ...i?.detail }
  });
}
const _l = {
  IED: [
    {
      attributeName: "iedName",
      filter: Gt("Association")
    },
    {
      attributeName: "iedName",
      filter: Gt("ClientLN")
    },
    {
      attributeName: "iedName",
      filter: Gt("ConnectedAP")
    },
    {
      attributeName: "iedName",
      filter: Gt("ExtRef")
    },
    {
      attributeName: "iedName",
      filter: Gt("KDC")
    },
    {
      attributeName: "iedName",
      filter: Gt("LNode")
    },
    {
      attributeName: null,
      filter: Yn("GSEControl > IEDName")
    },
    {
      attributeName: null,
      filter: Yn("SampledValueControl > IEDName")
    },
    {
      attributeName: null,
      filter: Yn("LN > DOI > DAI > Val")
    }
  ],
  Substation: [
    {
      attributeName: "substationName",
      filter: Gt("Terminal")
    }
  ],
  VoltageLevel: [
    {
      attributeName: "voltageLevelName",
      filter: Ea("Terminal", {
        Substation: "substationName"
      })
    }
  ],
  Bay: [
    {
      attributeName: "bayName",
      filter: Ea("Terminal", {
        Substation: "substationName",
        VoltageLevel: "voltageLevelName"
      })
    }
  ]
};
function Gt(t) {
  return function(i, n, r) {
    return `${t}[${n}="${r}"]`;
  };
}
function Yn(t) {
  return function() {
    return `${t}`;
  };
}
function Ea(t, e) {
  return function(n, r, o) {
    return `${t}${Object.entries(e).map(([a, c]) => {
      const s = n.closest(a);
      if (s && s.hasAttribute("name")) {
        const p = s.getAttribute("name");
        return `[${c}="${p}"]`;
      }
      return null;
    }).join("")}[${r}="${o}"]`;
  };
}
function Ju(t, e, i) {
  const n = t.cloneNode(!1);
  return n.setAttribute(e, i), n;
}
function Al(t, e) {
  const i = t.cloneNode(!1);
  return i.textContent = e, i;
}
function Wr(t, e, i) {
  if (e === null || e === i)
    return [];
  const n = _l[t.tagName];
  if (n === void 0)
    return [];
  const r = [];
  return n.forEach((o) => {
    const a = o.filter(t, o.attributeName, e);
    o.attributeName ? Array.from(t.ownerDocument.querySelectorAll(`${a}`)).filter(Ue).forEach((c) => {
      const s = Ju(
        c,
        o.attributeName,
        i
      );
      r.push({ old: { element: c }, new: { element: s } });
    }) : Array.from(t.ownerDocument.querySelectorAll(`${a}`)).filter((c) => c.textContent === e).filter(Ue).forEach((c) => {
      const s = Al(c, i);
      r.push({ old: { element: c }, new: { element: s } });
    });
  }), t.tagName === "IED" && r.push(...ep(t, e, i)), r;
}
function ep(t, e, i) {
  const n = [];
  return t.ownerDocument.querySelectorAll("IED").forEach((o) => {
    const a = Array.from(
      o.querySelectorAll(
        ':scope > AccessPoint > Server > LDevice > LN[lnClass="LGOS"] > DOI > DAI > Val, :scope > AccessPoint > Server > LDevice > LN[lnClass="LSVS"] > DOI > DAI > Val'
      )
    );
    if (a.length === 0) return;
    const c = o.querySelector(
      `:scope > AccessPoint > Server > LDevice > LN0 > Inputs > ExtRef[iedName="${e}"][srcCBName]`
    ), s = c?.getAttribute("srcLDInst") + "/" + c?.getAttribute("srcLNClass") + "." + c?.getAttribute("srcCBName");
    for (let p of a)
      if (e + s === p.textContent.trim()) {
        const h = Al(
          p,
          i + s
        );
        n.push({
          old: { element: p },
          new: { element: h }
        });
        break;
      }
  }), n;
}
function Sl(t) {
  const e = Kt(t) ?? null;
  if (e === null)
    return [];
  const i = _l[t.tagName];
  if (i === void 0)
    return [];
  const n = [];
  return i.forEach((r) => {
    const o = r.filter(t, r.attributeName, e);
    r.attributeName ? Array.from(t.ownerDocument.querySelectorAll(`${o}`)).filter(Ue).forEach((a) => {
      n.push({ old: { parent: a.parentElement, element: a } });
    }) : Array.from(t.ownerDocument.querySelectorAll(`${o}`)).filter((a) => a.textContent === e).filter(Ue).forEach((a) => {
      a.parentElement && n.push({
        old: {
          parent: a.parentElement.parentElement,
          element: a.parentElement
        }
      });
    });
  }), n;
}
function El(t) {
  return (e) => {
    const i = y(e.find((o) => o.label === "name")), n = y(e.find((o) => o.label === "desc"));
    if (i === t.getAttribute("name") && n === t.getAttribute("desc"))
      return [];
    const r = X(t, { name: i, desc: n });
    return [{ old: { element: t }, new: { element: r } }];
  };
}
function tp(t, e) {
  return (i) => {
    const n = y(i.find((s) => s.label === "name")), r = t.getAttribute("name"), o = y(i.find((s) => s.label === "desc"));
    if (n === r && o === t.getAttribute("desc"))
      return [];
    const a = X(t, { name: n, desc: o }), c = {
      actions: [],
      title: u(e, { name: n })
    };
    return c.actions.push({
      old: { element: t },
      new: { element: a }
    }), c.actions.push(...Wr(t, r, n)), c.actions.length ? [c] : [];
  };
}
function Cl(t, e) {
  return (i) => {
    const n = {};
    if (ip(n, t, i), Object.keys(n).length == 0)
      return [];
    np(t, n);
    const r = y(i.find((a) => a.label === "name")), o = {
      actions: [],
      title: u(e, { name: r })
    };
    return o.actions.push(Qu(t, n)), o.actions.push(
      ...Wr(t, t.getAttribute("name"), r)
    ), o.actions.length ? [o] : [];
  };
}
function ip(t, e, i) {
  const n = y(i.find((o) => o.label === "name")), r = y(i.find((o) => o.label === "desc"));
  n !== e.getAttribute("name") && (t.name = n), r !== e.getAttribute("desc") && (t.desc = r);
}
function np(t, e) {
  const i = Object.keys(e);
  return Array.from(t.attributes).filter((n) => !i.includes(n.name)).forEach((n) => {
    e[n.name] = n.value;
  }), e;
}
function Gr(t, e) {
  return [
    d`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${u("bay.wizard.nameHelper")}"
      required
      validationMessage="${u("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${u("bay.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function rp(t) {
  return (e) => {
    const i = y(e.find((a) => a.label === "name")), n = y(e.find((a) => a.label === "desc")), r = G(t.ownerDocument, "Bay", {
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
function op(t) {
  return [
    {
      title: u("bay.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: u("add"),
        action: rp(t)
      },
      content: Gr("", "")
    }
  ];
}
function ap(t) {
  return [
    {
      title: u("bay.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: u("save"),
        action: tp(
          t,
          "bay.action.updateBay"
        )
      },
      content: Gr(
        t.getAttribute("name"),
        t.getAttribute("desc")
      )
    }
  ];
}
const Sr = {
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
function lp(t) {
  if (!t) return null;
  const [e, i, n, r, o] = [
    "lnInst",
    "lnClass",
    "iedName",
    "ldInst",
    "prefix"
  ].map((h) => t?.getAttribute(h)), a = [`IED[name="${n}"]`, "IED"], c = ["AccessPoint > Server"], s = [
    `LDevice[inst="${r}"] > LN[inst="${e}"][lnClass="${i}"]`
  ], p = o && o !== "" ? [`[prefix="${o}"]`] : ['[prefix=""]', ":not(prefix)"];
  return t.ownerDocument.querySelector(
    Se(
      a,
      [" > "],
      c,
      [" > "],
      s,
      p
    ).map((h) => h.join("")).join(",")
  );
}
function Il(t) {
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
function cp(t) {
  const e = t.querySelector(
    'DOI[name="SwTyp"] > DAI[name="stVal"]'
  );
  return e ? e.querySelector("Val")?.innerHTML.trim() : Il(t);
}
function sp(t) {
  return Array.from(t.querySelectorAll("Terminal")).some(
    (e) => e.getAttribute("cNodeName") === "grounded"
  );
}
function dp(t) {
  const e = t.querySelector('LNode[lnClass="XSWI"]'), i = lp(e);
  let n;
  return i ? n = cp(i) : e && (n = Il(e)), n ? ["Earthing Switch", "High Speed Earthing Switch"].includes(n) : !1;
}
function Tl(t) {
  return t.getAttribute("type") === "DIS" && (sp(t) || dp(t)) ? "ERS" : t.getAttribute("type") ?? "";
}
function $l(t) {
  return Sr[Tl(t)] ?? u("conductingequipment.unknownType");
}
function up(t, e) {
  return t === "create" ? d`<mwc-select
        style="--mdc-menu-max-height: 196px;"
        required
        label="type"
        helper="${u("conductingequipment.wizard.typeHelper")}"
        validationMessage="${u("textfield.required")}"
      >
        ${Object.keys(Sr).map(
    (i) => d`<mwc-list-item value="${i}">${Sr[i]}</mwc-list-item>`
  )}
      </mwc-select>` : d`<mwc-select
        label="type"
        helper="${u("conductingequipment.wizard.typeHelper")}"
        validationMessage="${u("textfield.required")}"
        disabled
      >
        <mwc-list-item selected value="0">${e}</mwc-list-item>
      </mwc-select>`;
}
function jr(t, e, i, n, r) {
  return [
    up(i, n),
    d`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${u("conductingequipment.wizard.nameHelper")}"
      required
      validationMessage="${u("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${r}
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${u("conductingequipment.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function pp(t) {
  return (e) => {
    const i = y(e.find((A) => A.label === "name")), n = y(e.find((A) => A.label === "desc")), r = y(e.find((A) => A.label === "type")), o = r === "ERS" ? "DIS" : r, a = G(t.ownerDocument, "ConductingEquipment", {
      name: i,
      type: o,
      desc: n
    });
    if (r !== "ERS") return [{ new: { parent: t, element: a } }];
    const c = t.closest("VoltageLevel")?.querySelector('ConnectivityNode[name="grounded"]'), s = c ? c.closest("Substation")?.getAttribute("name") ?? null : t.closest("Substation")?.getAttribute("name") ?? null, p = c ? c.closest("VoltageLevel")?.getAttribute("name") ?? null : t.closest("VoltageLevel")?.getAttribute("name") ?? null, h = c ? c.closest("Bay")?.getAttribute("name") ?? null : t.closest("Bay")?.getAttribute("name") ?? null, b = h && p && s ? s + "/" + p + "/" + h + "/grounded" : null;
    a.appendChild(
      G(t.ownerDocument, "Terminal", {
        name: "T1",
        cNodeName: "grounded",
        substationName: s,
        voltageLevelName: p,
        bayName: h,
        connectivityNode: b
      })
    );
    const x = {
      new: {
        parent: t,
        element: a
      }
    };
    if (c) return [x];
    const v = G(
      t.ownerDocument,
      "ConnectivityNode",
      {
        name: "grounded",
        pathName: b
      }
    );
    return [x, {
      new: {
        parent: t,
        element: v
      }
    }];
  };
}
function Xr(t, e) {
  return Array.from(t.querySelectorAll("ConductingEquipment")).filter(Ue).map((i) => i.getAttribute("name") ?? "").filter((i) => e && i !== e);
}
function mp(t) {
  const e = Xr(t);
  return [
    {
      title: u("conductingequipment.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: u("add"),
        action: pp(t)
      },
      content: jr(
        "",
        "",
        "create",
        "",
        e
      )
    }
  ];
}
function hp(t) {
  const e = Xr(
    t.parentNode,
    t.getAttribute("name")
  );
  return [
    {
      title: u("conductingequipment.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: u("save"),
        action: El(t)
      },
      content: jr(
        t.getAttribute("name"),
        t.getAttribute("desc"),
        "edit",
        $l(t),
        e
      )
    }
  ];
}
function fp(t, e, i) {
  return [
    d`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${u("connectivitynode.wizard.nameHelper")}"
      required
      validationMessage="${u("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${i}
      readonly
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="pathName"
      .maybeValue=${e}
      helper="${u("connectivitynode.wizard.pathNameHelper")}"
      required
      validationMessage="${u("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function kl(t) {
  const e = Array.from(
    t.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(Ue).map((i) => i.getAttribute("name") ?? "").filter((i) => i !== t.getAttribute("name"));
  return [
    {
      title: u("connectivitynode.wizard.title.edit"),
      element: t,
      content: fp(
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
const Ca = /* @__PURE__ */ new WeakMap(), Ia = 2147483647, bp = di((...t) => (e) => {
  let i = Ca.get(e);
  i === void 0 && (i = {
    lastRenderedIndex: Ia,
    values: []
  }, Ca.set(e, i));
  const n = i.values;
  let r = n.length;
  i.values = t;
  for (let o = 0; o < t.length && !(o > i.lastRenderedIndex); o++) {
    const a = t[o];
    if (hn(a) || typeof a.then != "function") {
      e.setValue(a), i.lastRenderedIndex = o;
      break;
    }
    o < r && a === n[o] || (i.lastRenderedIndex = Ia, r = 0, Promise.resolve(a).then((c) => {
      const s = i.values.indexOf(a);
      s > -1 && s < i.lastRenderedIndex && (i.lastRenderedIndex = s, e.setValue(c), e.commit());
    }));
  }
});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Fi extends Ee {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), n = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : d``, r = this.hasMeta && this.left ? this.renderMeta() : d``, o = this.renderRipple();
    return d`
      ${o}
      ${n}
      ${this.left ? "" : i}
      <span class=${ye(e)}>
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
  R("slot")
], Fi.prototype, "slotElement", void 0);
m([
  R("mwc-checkbox")
], Fi.prototype, "checkboxElement", void 0);
m([
  f({ type: Boolean })
], Fi.prototype, "left", void 0);
m([
  f({ type: String, reflect: !0 })
], Fi.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const gp = ie`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ci = class extends Fi {
};
ci.styles = [tl, gp];
ci = m([
  Z("mwc-check-list-item")
], ci);
var xp = Object.defineProperty, yp = Object.getOwnPropertyDescriptor, ii = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? yp(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && xp(e, i, r), r;
};
function Er(t) {
  return !t.closest("filtered-list") || !t.parentElement || t.parentElement instanceof nt ? t : Er(t.parentElement);
}
function vp(t, e) {
  const i = t.innerText + `
`, n = Array.from(t.children).map((c) => c.innerText).join(`
`), r = t.value, o = (i + n + r).toUpperCase(), a = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  a.length === 1 && a[0] === "" || a.every((c) => new RegExp(
    `*${c}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(o)) ? Er(t).classList.remove("hidden") : Er(t).classList.add("hidden");
}
let nt = class extends Me {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((t) => t instanceof ci);
  }
  get isAllSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof ci).every((t) => t.selected);
  }
  get isSomeSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof ci).some((t) => t.selected);
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
      (t) => vp(t, this.searchField.value)
    );
  }
  onListItemConnected(t) {
    super.onListItemConnected(t), this.requestUpdate();
  }
  update(t) {
    super.update(t), this.onFilterInput();
  }
  renderCheckAll() {
    return this.existCheckListItem && !this.disableCheckAll ? d`<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
      this.onCheckAll();
    }}
          ></mwc-checkbox
        ></mwc-formfield>` : d``;
  }
  render() {
    return d`<div id="tfcontainer">
        <abbr title="${this.searchFieldLabel ?? u("filter")}"
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
nt.styles = ie`
    ${Ka(dn.styles)}

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
ii([
  f({ type: String })
], nt.prototype, "searchFieldLabel", 2);
ii([
  f({ type: Boolean })
], nt.prototype, "disableCheckAll", 2);
ii([
  N()
], nt.prototype, "existCheckListItem", 1);
ii([
  N()
], nt.prototype, "isAllSelected", 1);
ii([
  N()
], nt.prototype, "isSomeSelected", 1);
ii([
  R("mwc-textfield")
], nt.prototype, "searchField", 2);
nt = ii([
  Z("filtered-list")
], nt);
var wp = Object.defineProperty, _p = Object.getOwnPropertyDescriptor, _t = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? _p(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && wp(e, i, r), r;
};
const Ap = d`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${u("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let Je = class extends be {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (t) => ({
      path: t,
      header: d`<h2>${"/" + t.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return yl(this.selection);
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
    return d`<filtered-list
      @selected=${(i) => this.select(i, t)}
      searchFieldLabel="${this.getTitle(t)}"
    >
      ${e.map(
      (i) => d`<mwc-list-item
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
        d`${ee(r)} ${this.renderDirectory(a, o)}`
      );
    return n.length === 0 ? d`` : d`<div class="column">${n}</div>`;
  }
  render() {
    const t = new Array(this.depth).fill(0).map((e, i) => this.renderColumn(i));
    return this.loaded = Promise.allSettled(t).then(), d`<div class="pane">
      ${t.map((e) => bp(e, Ap))}
    </div>`;
  }
};
Je.styles = ie`
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
_t([
  f({ type: Object })
], Je.prototype, "selection", 2);
_t([
  f({ type: Boolean })
], Je.prototype, "multi", 2);
_t([
  f({ type: Number })
], Je.prototype, "depth", 1);
_t([
  f({ type: Array })
], Je.prototype, "paths", 1);
_t([
  f({ type: Array })
], Je.prototype, "path", 1);
_t([
  f({ attribute: !1 })
], Je.prototype, "read", 2);
_t([
  f({ attribute: !1 })
], Je.prototype, "loaded", 2);
_t([
  R("div")
], Je.prototype, "container", 2);
Je = _t([
  Z("finder-list")
], Je);
function Sp(t) {
  return t.startsWith("IED:") ? t.replace(/^.*:/, "").trim() : t.startsWith("LN0:") ? "LLN0" : t.replace(/^.*>/, "").trim();
}
function Ep(t, e) {
  return async (i) => {
    const [n, r] = i[i.length - 1]?.split(": ", 2), o = bt(t, n, r);
    return o ? {
      path: i,
      header: void 0,
      entries: e(o).map(
        (a) => `${a.tagName}: ${V(a)}`
      )
    } : { path: i, header: d`<p>${u("error")}</p>`, entries: [] };
  };
}
function Ll(t) {
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
function Cp(t) {
  return d`<finder-list
    multi
    .paths=${[["Server: " + V(t)]]}
    .read=${Ep(t.ownerDocument, Ll)}
    .getDisplayString=${Sp}
    .getTitle=${(e) => e[e.length - 1]}
  ></finder-list>`;
}
function Ip(t, e) {
  const [i, n] = e[e.length - 1].split(": "), r = bt(t.ownerDocument, i, n);
  if (!r || Ll(r).length > 0) return;
  const o = e.find((E) => E.startsWith("LN"));
  if (!o) return;
  const [a, c] = o.split(": "), s = bt(t.ownerDocument, a, c);
  if (!s) return;
  const p = s.closest("LDevice")?.getAttribute("inst"), h = s.getAttribute("prefix") ?? "", b = s.getAttribute("lnClass"), x = s.getAttribute("inst") && s.getAttribute("inst") !== "" ? s.getAttribute("inst") : null;
  let v = "", _ = "", A = "";
  for (const E of e) {
    const [w, z] = E.split(": ");
    if (!["DO", "DA", "SDO", "BDA"].includes(w)) continue;
    const D = bt(t.ownerDocument, w, z);
    if (!D) return;
    const H = D.getAttribute("name");
    w === "DO" && (v = H), w === "SDO" && (v = v + "." + H), w === "DA" && (_ = H, A = D.getAttribute("fc") ?? ""), w === "BDA" && (_ = _ + "." + H);
  }
  if (!(!p || !b || !v || !_ || !A))
    return G(t.ownerDocument, "FCDA", {
      ldInst: p,
      prefix: h,
      lnClass: b,
      lnInst: x,
      doName: v,
      daName: _,
      fc: A
    });
}
function Tp(t) {
  return (e, i) => {
    const r = i.shadowRoot.querySelector("finder-list")?.paths ?? [], o = [];
    for (const a of r) {
      const c = Ip(t, a);
      c && o.push({
        new: {
          parent: t,
          element: c,
          reference: null
        }
      });
    }
    return o;
  };
}
function Nl(t) {
  const e = t.closest("Server");
  return [
    {
      title: u("wizard.title.add", { tagName: "FCDA" }),
      primary: {
        label: "add",
        icon: "add",
        action: Tp(t)
      },
      content: [e ? Cp(e) : d``]
    }
  ];
}
const gt = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  asciName: "[A-Za-z][0-9,A-Z,a-z_]*",
  abstractDataAttributeName: "((T)|(Test)|(Check)|(SIUnit)|(Oper)|(SBO)|(SBOw)|(Cancel)|[a-z][0-9A-Za-z]*)"
}, Zr = {
  cbName: 32,
  abstracDaName: 60
};
function Qn(t, e) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { ...t, ...e?.detail }
  });
}
function $p(t) {
  return (e, i, n) => {
    const r = n.items.filter((c) => c.selected).map((c) => c.value).map((c) => bt(t.ownerDocument, "LNodeType", c)).filter((c) => c !== null), o = vl(t);
    return r.map((c) => {
      const s = c.getAttribute("lnClass");
      if (!s) return null;
      const p = o(s);
      if (!p) {
        i.dispatchEvent(
          Qn({
            kind: "error",
            title: u("lnode.log.title", { lnClass: s }),
            message: u("lnode.log.nonuniquelninst")
          })
        );
        return;
      }
      const h = K(t, "LNode").some(
        (_) => _.getAttribute("lnClass") === "LLN0"
      );
      if (s === "LLN0" && h) {
        i.dispatchEvent(
          Qn({
            kind: "error",
            title: u("lnode.log.title", { lnClass: s }),
            message: u("lnode.log.uniqueln0", { lnClass: s })
          })
        );
        return;
      }
      const b = K(t, "LNode").some(
        (_) => _.getAttribute("lnClass") === "LPHD"
      );
      if (s === "LPHD" && b) {
        i.dispatchEvent(
          Qn({
            kind: "error",
            title: u("lnode.log.title", { lnClass: s }),
            message: u("lnode.log.uniqueln0", { lnClass: s })
          })
        );
        return;
      }
      const x = s === "LLN0" ? "" : p, v = G(t.ownerDocument, "LNode", {
        iedName: "None",
        ldInst: null,
        prefix: null,
        lnClass: s,
        lnInst: x,
        lnType: c.getAttribute("id")
      });
      return { new: { parent: t, element: v } };
    }).filter((c) => c);
  };
}
function kp(t) {
  return (e) => {
    e.dispatchEvent(fe()), e.dispatchEvent(fe(Dl(t)));
  };
}
function Rl(t) {
  const e = Array.from(
    t.ownerDocument.querySelectorAll("LNodeType")
  );
  return [
    {
      title: u("lnode.wizard.title.selectLNodeTypes"),
      menuActions: [
        {
          icon: "",
          label: u("lnode.wizard.reference"),
          action: kp(t)
        }
      ],
      primary: {
        icon: "save",
        label: u("save"),
        action: $p(t)
      },
      content: [
        d`<filtered-list multi
          >${e.map((i) => {
          const n = i.getAttribute("lnClass") === "LLN0" && K(t, "LNode").some(
            (r) => r.getAttribute("lnClass") === "LLN0"
          ) || i.getAttribute("lnClass") === "LPHD" && K(t, "LNode").some(
            (r) => r.getAttribute("lnClass") === "LPHD"
          );
          return d`<mwc-check-list-item
              twoline
              value="${V(i)}"
              ?disabled=${n}
              ><span>${i.getAttribute("lnClass")}</span
              ><span slot="secondary"
                >${n ? u("lnode.wizard.uniquewarning") : V(i)}</span
              ></mwc-check-list-item
            >`;
        })}</filtered-list
        >`
      ]
    }
  ];
}
const Lp = {
  CBR: ["CSWI", "CILO", "XCBR"],
  DIS: ["CSWI", "CILO", "XSWI"],
  VTR: ["TVTR"],
  CTR: ["TCTR"],
  Bay: ["LLN0"],
  VoltageLevel: ["LLN0"],
  Substation: ["LLN0"]
};
function zl(t, e) {
  return t.disabled !== e.disabled ? e.disabled ? -1 : 1 : t.preferred !== e.preferred ? t.preferred ? -1 : 1 : t.selected !== e.selected ? t.selected ? -1 : 1 : 0;
}
const Np = "Client LN";
function Ta(t, e) {
  return Array.from(t.getElementsByTagName("LNode")).filter((i) => !i.closest("Private")).filter((i) => Kr(e, i))[0] ?? null;
}
function Kr(t, e) {
  return (e.getAttribute("iedName") ?? "") === (t.closest("IED")?.getAttribute("name") ?? "") && (e.getAttribute("ldInst") ?? "") === (t.closest("LDevice")?.getAttribute("inst") ?? "") && (e.getAttribute("prefix") ?? "") === (t.getAttribute("prefix") ?? "") && (e.getAttribute("lnClass") ?? "") === (t.getAttribute("lnClass") ?? "") && (e.getAttribute("lnInst") ?? "") === (t.getAttribute("inst") ?? "");
}
function Rp(t, e) {
  const i = G(t.ownerDocument, "LNode", {
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
function zp(t, e) {
  return {
    old: {
      parent: t,
      element: e,
      reference: e.nextElementSibling
    }
  };
}
function Dp(t, e) {
  return t.some((i) => Kr(i, e));
}
function Op(t, e) {
  return e.some((i) => Kr(t, i));
}
function Mp(t) {
  return (e, i, n) => {
    const r = n.items.filter((s) => s.selected).map((s) => s.value).map((s) => {
      const p = bt(t.ownerDocument, "LN0", s);
      return p || bt(t.ownerDocument, "LN", s);
    }).filter((s) => s !== null), o = K(t, "LNode").filter(
      Ue
    ), a = o.filter((s) => !Dp(r, s)).map((s) => zp(t, s)), c = r.filter((s) => !Op(s, o)).map((s) => Rp(t, s));
    return a.concat(c);
  };
}
function Pp(t, e) {
  return t.parentElement?.parentElement?.nextElementSibling?.querySelector(
    e
  ) ?? null;
}
function Fp(t, e) {
  if (!(t.target instanceof Me)) return;
  const i = Pp(t.target, "#lnList");
  if (i === null) return;
  const n = e.ownerDocument, a = t.target.selected.flatMap(
    (c) => Array.from(
      n.querySelectorAll(
        `:root > IED[name="${c.value}"] > AccessPoint > LN,:root > IED[name="${c.value}"] > AccessPoint > Server > LDevice > LN,:root > IED[name="${c.value}"] > AccessPoint > Server > LDevice > LN0`
      )
    ).filter((s) => !s.closest("Private"))
  ).filter((c) => c !== null).map((c) => {
    const s = Lp[e.getAttribute("type") ? e.getAttribute("type") ?? "" : e.tagName ?? ""]?.includes(c.getAttribute("lnClass") ?? "") ?? !1, p = Ta(e.ownerDocument, c), h = p?.parentElement === e;
    return {
      selected: h,
      disabled: p !== null && !h,
      prefered: s,
      element: c
    };
  }).sort(zl).map((c) => d`<mwc-check-list-item
      ?selected=${c.selected}
      ?disabled=${c.disabled}
      value="${V(c.element)}"
      twoline
      ><span
        >${c.element.getAttribute("prefix") ?? ""}${c.element.getAttribute("lnClass")}${c.element.getAttribute(
    "inst"
  ) ?? ""}
        ${c.disabled ? d` <mwc-icon style="--mdc-icon-size: 1em;"
                >account_tree</mwc-icon
              >
              ${Gd(Ta(n, c.element))}` : ""}</span
      ><span slot="secondary"
        >${c.element.closest("IED")?.getAttribute("name") ?? ""} |
        ${c.element.closest("LDevice") ? c.element.closest("LDevice")?.getAttribute("inst") : Np}</span
      ></mwc-check-list-item
    >`);
  Dr(d`${a}`, i);
}
function Vp(t) {
  const e = t.ownerDocument;
  return e.querySelectorAll(":root > IED").length > 0 ? d`<filtered-list
      disableCheckAll
      multi
      id="iedList"
      @selected=${(i) => Fp(i, t)}
      >${Array.from(e.querySelectorAll(":root > IED")).map((i) => i.getAttribute("name")).map((i) => ({
    selected: Array.from(t.children).filter((n) => !n.closest("Private")).filter(
      (n) => n.tagName === "LNode" && n.getAttribute("iedName") === i
    ).length > 0,
    iedName: i
  })).sort(zl).map(
    (i) => d`<mwc-check-list-item
              value="${i.iedName ?? ""}"
              ?selected=${i.selected}
              >${i.iedName}</mwc-check-list-item
            >`
  )}</filtered-list
    >` : d`<mwc-list-item noninteractive graphic="icon">
      <span>${u("lnode.wizard.placeholder")}</span>
      <mwc-icon slot="graphic">info</mwc-icon>
    </mwc-list-item>`;
}
function Bp(t) {
  return (e) => {
    e.dispatchEvent(fe()), e.dispatchEvent(fe(Rl(t)));
  };
}
function Dl(t) {
  return [
    {
      title: u("lnode.wizard.title.selectIEDs"),
      menuActions: [
        {
          icon: "",
          label: u("lnode.wizard.instance"),
          action: Bp(t)
        }
      ],
      content: [Vp(t)]
    },
    {
      initial: Array.from(t.children).some(
        (e) => e.tagName === "LNode"
      ),
      title: u("lnode.wizard.title.selectLNs"),
      primary: {
        icon: "save",
        label: u("save"),
        action: Mp(t)
      },
      content: [d`<filtered-list multi id="lnList"></filtered-list>`]
    }
  ];
}
function Hp(t) {
  return t.tagName === "Function" || t.tagName === "SubFunction" || t.tagName === "EqFunction" || t.tagName === "EqSubFunction" ? Rl(t) : Dl(t);
}
function qp(t) {
  const e = t.iedName !== "None";
  return [
    d`<wizard-textfield
      label="iedName"
      .maybeValue=${t.iedName}
      helper="${u("scl.iedName")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="ldInst"
      .maybeValue=${t.ldInst}
      helper="${u("scl.ldInst")}"
      helperPersistent
      nullable
      disabled
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="prefix"
      .maybeValue=${t.prefix}
      helper="${u("scl.prefix")}"
      pattern="${gt.asciName}"
      maxLength="11"
      helperPersistent
      nullable
      ?disabled=${e}
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="lnClass"
      .maybeValue=${t.lnClass}
      helper="${u("scl.lnClass")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="lnInst"
      .maybeValue=${t.lnInst}
      helper="${u("scl.lnInst")}"
      helperPersistent
      type="number"
      min="1"
      max="99"
      .reservedValues=${t.reservedLnInst}
      ?disabled=${e}
    ></wizard-textfield>`
  ];
}
function Up(t) {
  return (e) => {
    const i = {}, n = ["iedName", "ldInst", "prefix", "lnClass", "lnInst"];
    n.forEach((o) => {
      i[o] = y(e.find((a) => a.label === o));
    });
    let r = null;
    if (n.some((o) => i[o] !== t.getAttribute(o))) {
      const o = X(t, i);
      return r = {
        old: { element: t },
        new: { element: o }
      }, [r];
    }
    return [];
  };
}
function Wp(t) {
  const [e, i, n, r, o] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((c) => t.getAttribute(c)), a = K(
    t.parentElement,
    "LNode"
  ).filter(
    (c) => c !== t && c.getAttribute("lnClass") === t.getAttribute("lnClass")
  ).map((c) => c.getAttribute("lnInst"));
  return [
    {
      title: u("wizard.title.edit", { tagName: "LNode" }),
      element: t,
      primary: {
        label: u("save"),
        icon: "save",
        action: Up(t)
      },
      content: [
        ...qp({
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
function Gp(t) {
  return Object.entries(t).map(
    ([e, i]) => d`<wizard-checkbox
        label="${e}"
        .maybeValue=${i}
        nullable
        helper="${u(`scl.${e}`)}"
      ></wizard-checkbox>`
  );
}
function jp(t) {
  return (e) => {
    const i = y(e.find((b) => b.label === "seqNum")), n = y(e.find((b) => b.label === "timeStamp")), r = y(e.find((b) => b.label === "dataSet")), o = y(e.find((b) => b.label === "reasonCode")), a = y(e.find((b) => b.label === "dataRef")), c = y(e.find((b) => b.label === "entryID")), s = y(e.find((b) => b.label === "configRef")), p = y(e.find((b) => b.label === "bufOvfl"));
    if (i === t.getAttribute("seqNum") && n === t.getAttribute("timeStamp") && r === t.getAttribute("dataSet") && o === t.getAttribute("reasonCode") && a === t.getAttribute("dataRef") && c === t.getAttribute("entryID") && s === t.getAttribute("configRef") && p === t.getAttribute("bufOvfl"))
      return [];
    const h = X(t, {
      seqNum: i,
      timeStamp: n,
      dataSet: r,
      reasonCode: o,
      dataRef: a,
      entryID: c,
      configRef: s,
      bufOvfl: p
    });
    return [{ old: { element: t }, new: { element: h } }];
  };
}
function Xp(t) {
  const [
    e,
    i,
    n,
    r,
    o,
    a,
    c,
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
  ].map((p) => t.getAttribute(p));
  return [
    {
      title: u("wizard.title.edit", { tagName: t.tagName }),
      primary: {
        icon: "save",
        label: u("save"),
        action: jp(t)
      },
      content: Gp({
        seqNum: e,
        timeStamp: i,
        dataSet: n,
        reasonCode: r,
        dataRef: o,
        entryID: a,
        configRef: c,
        bufOvfl: s
      })
    }
  ];
}
let Zp = 1, Ol = 1, Ml = 1;
function Kp(t, e) {
  return e.parentElement?.querySelectorAll(
    `LN[lnClass="CSWI"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""},LN[lnClass="CILO"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""},LN[lnClass="XCBR"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""},LN[lnClass="XSWI"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""}`
  ).forEach((i) => {
    t.appendChild(
      G(e.ownerDocument, "LNode", {
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
function Pl(t) {
  return t.parentElement?.querySelector(
    `LN[lnClass="XCBR"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""}`
  ) ? "CBR" : "DIS";
}
function Yp(t) {
  return t.getAttribute("prefix") && t.getAttribute("inst") ? t.getAttribute("prefix") + t.getAttribute("inst") : t.getAttribute("inst") && Pl(t) === "CBR" ? "QA" + Ol++ : "QB" + Ml++;
}
function Qp(t, e) {
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
function Jp(t) {
  return Array.from(
    t.querySelectorAll('AccessPoint > Server > LDevice > LN[lnClass="CSWI"]')
  );
}
function em(t, e) {
  return t.parentElement ? Jp(t).filter((i) => Qp(i, e)) : [];
}
function tm(t, e) {
  const i = em(t, e);
  if (Ol = 1, Ml = 1, i.length) {
    const n = G(t.ownerDocument, "Bay", {
      name: "Q" + Zp++,
      desc: "Bay for controller " + t.getAttribute("name")
    });
    return i.map((o) => Kp(
      G(t.ownerDocument, "ConductingEquipment", {
        name: Yp(o),
        type: Pl(o)
      }),
      o
    )).forEach((o) => n.appendChild(o)), n;
  }
  return null;
}
function im(t, e) {
  return (i, n, r) => {
    const o = [], a = r.selected.map(
      (p) => p.value
    ), c = G(t, "VoltageLevel", {
      name: "E1",
      desc: "guessed by OpenSCD",
      nomFreq: "50.0",
      numPhases: "3"
    }), s = G(t, "Voltage", {
      unit: "V",
      multiplier: "k"
    });
    return s.textContent = "110.00", c.appendChild(s), o.push({
      new: { parent: t.querySelector("SCL"), element: e }
    }), o.push({
      new: {
        parent: e,
        element: c
      }
    }), Array.from(t.querySelectorAll(":root > IED")).sort(xl).map((p) => tm(p, a)).forEach((p) => {
      p && o.push({ new: { parent: c, element: p } });
    }), o;
  };
}
function nm(t, e) {
  return [
    {
      title: u("guess.wizard.title"),
      primary: {
        icon: "play_arrow",
        label: u("guess.wizard.primary"),
        action: im(t, e)
      },
      content: [
        d`<p>${u("guess.wizard.description")}</p>`,
        d`<mwc-list multi id="ctlModelList"
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
function Fl(t, e, i) {
  return [
    d`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${u("substation.wizard.nameHelper")}"
      required
      validationMessage="${u("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${u("substation.wizard.descHelper")}"
    ></wizard-textfield>`,
    i ? d`<mwc-formfield label="${u("guess.wizard.primary")}">
          <mwc-checkbox></mwc-checkbox>
        </mwc-formfield>` : d``
  ];
}
function rm(t) {
  return (e, i) => {
    const n = y(e.find((c) => c.label === "name")), r = y(e.find((c) => c.label === "desc")), o = i.shadowRoot?.querySelector("mwc-checkbox")?.checked;
    t.ownerDocument.createElement("Substation");
    const a = G(t.ownerDocument, "Substation", {
      name: n,
      desc: r
    });
    return o ? [() => nm(t.ownerDocument, a)] : [{ new: { parent: t, element: a } }];
  };
}
function om(t) {
  const e = t.ownerDocument.querySelector("Substation") === null && t.tagName === "SCL";
  return [
    {
      title: u("substation.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: u("add"),
        action: rm(t)
      },
      content: Fl("", "", e)
    }
  ];
}
function am(t) {
  return [
    {
      title: u("substation.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: u("save"),
        action: Cl(
          t,
          "substation.action.updatesubstation"
        )
      },
      content: Fl(
        t.getAttribute("name") ?? "",
        t.getAttribute("desc"),
        !1
      )
    }
  ];
}
function lm(t, e, i, n) {
  return [
    d`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${u("terminal.wizard.nameHelper")}"
      required
      validationMessage="${u("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${n}
      readonly
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="connectivityNode"
      .maybeValue=${e}
      helper="${u("terminal.wizard.connectivityNodeHelper")}"
      required
      validationMessage="${u("textfield.required")}"
      readonly
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="cNodeName"
      .maybeValue=${i}
      helper="${u("terminal.wizard.cNodeNameHelper")}"
      required
      validationMessage="${u("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function Vl(t) {
  const e = Array.from(
    t.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(Ue).map((i) => i.getAttribute("name") ?? "").filter((i) => i !== t.getAttribute("name"));
  return [
    {
      title: u("terminal.wizard.title.edit"),
      element: t,
      content: lm(
        t.getAttribute("name"),
        t.getAttribute("connectivityNode"),
        t.getAttribute("cNodeName"),
        e
      )
    }
  ];
}
const ln = {
  nomFreq: "50",
  numPhases: "3",
  Voltage: "110",
  multiplier: "k"
};
function Bl(t, e, i, n, r, o) {
  return [
    d`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${u("voltagelevel.wizard.nameHelper")}"
      required
      validationMessage="${u("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${u("voltagelevel.wizard.descHelper")}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="nomFreq"
      .maybeValue=${i}
      nullable
      helper="${u("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      required
      validationMessage="${u("textfield.nonempty")}"
      pattern="${Oi.unsigned}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="numPhases"
      .maybeValue=${n}
      nullable
      helper="${u("voltagelevel.wizard.numPhaseHelper")}"
      suffix="#"
      required
      validationMessage="${u("textfield.nonempty")}"
      type="number"
      min="1"
      max="255"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="Voltage"
      .maybeValue=${r}
      nullable
      unit="V"
      .multipliers=${[null, "G", "M", "k", "", "m"]}
      .multiplier=${o}
      helper="${u("voltagelevel.wizard.voltageHelper")}"
      required
      validationMessage="${u("textfield.nonempty")}"
      pattern="${Oi.decimal}"
    ></wizard-textfield>`
  ];
}
function cm(t) {
  return (e) => {
    const i = y(e.find((p) => p.label === "name")), n = y(e.find((p) => p.label === "desc")), r = y(e.find((p) => p.label === "nomFreq")), o = y(e.find((p) => p.label === "numPhases")), a = y(e.find((p) => p.label === "Voltage")), c = qr(e.find((p) => p.label === "Voltage")), s = G(t.ownerDocument, "VoltageLevel", {
      name: i,
      desc: n,
      nomFreq: r,
      numPhases: o
    });
    if (a !== null) {
      const p = G(t.ownerDocument, "Voltage", {
        unit: "V",
        multiplier: c
      });
      p.textContent = a, s.appendChild(p);
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
function sm(t) {
  return [
    {
      title: u("voltagelevel.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: u("add"),
        action: cm(t)
      },
      content: Bl(
        "",
        "",
        ln.nomFreq,
        ln.numPhases,
        ln.Voltage,
        ln.multiplier
      )
    }
  ];
}
function dm(t, e, i, n) {
  if (t === null) {
    const o = G(n.ownerDocument, "Voltage", {
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
  const r = X(t, { multiplier: i });
  return r.textContent = e, {
    old: { element: t },
    new: { element: r }
  };
}
function um(t) {
  return (e) => {
    const i = e.find((b) => b.label === "name").value, n = y(e.find((b) => b.label === "desc")), r = y(e.find((b) => b.label === "nomFreq")), o = y(e.find((b) => b.label === "numPhases")), a = y(e.find((b) => b.label === "Voltage")), c = qr(e.find((b) => b.label === "Voltage"));
    let s, p;
    if (i === t.getAttribute("name") && n === t.getAttribute("desc") && r === t.getAttribute("nomFreq") && o === t.getAttribute("numPhases"))
      s = null;
    else {
      const b = X(t, {
        name: i,
        desc: n,
        nomFreq: r,
        numPhases: o
      });
      s = { old: { element: t }, new: { element: b } };
    }
    a === (t.querySelector("VoltageLevel > Voltage")?.textContent?.trim() ?? null) && c === (t.querySelector("VoltageLevel > Voltage")?.getAttribute("multiplier") ?? null) ? p = null : p = dm(
      t.querySelector("VoltageLevel > Voltage"),
      a,
      c,
      s?.new.element ?? t
    );
    const h = {
      actions: [],
      title: u("voltagelevel.action.updateVoltagelevel", { name: i })
    };
    return s && h.actions.push(s), p && h.actions.push(p), h.actions.push(
      ...Wr(t, t.getAttribute("name"), i)
    ), h.actions.length ? [h] : [];
  };
}
function pm(t) {
  return [
    {
      title: u("voltagelevel.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: u("save"),
        action: um(t)
      },
      content: Bl(
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
const Hl = "PTR";
function mm(t) {
  return (e) => {
    const i = y(e.find((a) => a.label === "name")), n = y(e.find((a) => a.label === "desc")), r = G(t.ownerDocument, "PowerTransformer", {
      name: i,
      desc: n,
      type: Hl
    });
    return [{
      new: {
        parent: t,
        element: r
      }
    }];
  };
}
function Yr(t, e, i, n) {
  return [
    d`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${u("powertransformer.wizard.nameHelper")}"
      required
      validationMessage="${u("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${n}
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${u("powertransformer.wizard.descHelper")}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="type"
      .maybeValue=${i}
      disabled
      helper="${u("powertransformer.wizard.typeHelper")}"
    ></wizard-textfield>`
  ];
}
function Qr(t, e) {
  return Array.from(t.querySelectorAll("PowerTransformer")).filter(Ue).map((i) => i.getAttribute("name") ?? "").filter((i) => e && i !== e);
}
function hm(t) {
  const e = Qr(t);
  return [
    {
      title: u("powertransformer.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: u("add"),
        action: mm(t)
      },
      content: Yr(
        "",
        null,
        Hl,
        e
      )
    }
  ];
}
function fm(t) {
  const e = Qr(
    t.parentNode,
    t.getAttribute("name")
  );
  return [
    {
      title: u("powertransformer.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: u("save"),
        action: El(t)
      },
      content: Yr(
        t.getAttribute("name"),
        t.getAttribute("desc"),
        t.getAttribute("type"),
        e
      )
    }
  ];
}
function bm(t) {
  return [
    d`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${u("subnetwork.wizard.nameHelper")}"
      required
      validationMessage="${u("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${u("subnetwork.wizard.descHelper")}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      nullable
      helper="${u("subnetwork.wizard.typeHelper")}"
      pattern="${Oi.normalizedString}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="BitRate"
      .maybeValue=${t.BitRate}
      nullable
      unit="b/s"
      .multipliers=${[null, "M"]}
      .multiplier=${t.multiplier}
      helper="${u("subnetwork.wizard.bitrateHelper")}"
      required
      validationMessage="${u("textfield.nonempty")}"
      pattern="${Oi.decimal}"
    ></wizard-textfield>`
  ];
}
function gm(t, e, i, n) {
  if (t === null) {
    const o = G(n.ownerDocument, "BitRate", {
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
  const r = X(t, { multiplier: i });
  return r.textContent = e, {
    old: { element: t },
    new: { element: r }
  };
}
function xm(t) {
  return (e) => {
    const i = e.find((h) => h.label === "name").value, n = y(e.find((h) => h.label === "desc")), r = y(e.find((h) => h.label === "type")), o = y(e.find((h) => h.label === "BitRate")), a = qr(e.find((h) => h.label === "BitRate"));
    let c, s;
    if (i === t.getAttribute("name") && n === t.getAttribute("desc") && r === t.getAttribute("type"))
      c = null;
    else {
      const h = X(t, { name: i, desc: n, type: r });
      c = { old: { element: t }, new: { element: h } };
    }
    o === (t.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null) && a === (t.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null) ? s = null : s = gm(
      t.querySelector("SubNetwork > BitRate"),
      o,
      a,
      c?.new.element ?? t
    );
    const p = [];
    return c && p.push(c), s && p.push(s), p;
  };
}
function ym(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = t.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null, o = t.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null;
  return [
    {
      title: u("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: u("save"),
        action: xm(t)
      },
      content: bm({ name: e, desc: i, type: n, BitRate: r, multiplier: o })
    }
  ];
}
const vm = [
  "ldInst",
  "lnClass",
  "lnInst",
  "prefix",
  "doName",
  "daName"
];
function wm(t) {
  return vm.map(
    (e) => t.getAttribute(e) ? `[${e}="${t.getAttribute(
      e
    )}"]` : ""
  ).join("");
}
const _m = ["srcLDInst", "srcLNClass", "srcLNInst", "srcCBName"];
function Am(t) {
  return _m.map(
    (e) => t.getAttribute(e) ? `[${e}="${t.getAttribute(e)}"]` : ""
  ).join("");
}
function Sm(t) {
  if (!t.length) return [];
  const e = [], i = {};
  for (const n of t) {
    const r = n.old.element, o = n.old.parent, a = V(o);
    i[a] || (i[a] = o.cloneNode(!0));
    const c = i[a].querySelector(
      `ExtRef${r.getAttribute("iedName") ? `[iedName="${r.getAttribute("iedName")}"]` : ""}${wm(r)}${r.getAttribute("serviceType") ? `[serviceType="${r.getAttribute("serviceType")}"]` : ""}${Am(r)}`
    );
    c && i[a].removeChild(c);
  }
  return Object.entries(i).forEach(([n, r]) => {
    if (r.children.length == 0) {
      const o = t[0].old.parent.ownerDocument, a = bt(o, "Inputs", n);
      a && a.parentElement && e.push({
        old: { parent: a.parentElement, element: a }
      });
    }
  }), e;
}
const Em = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function Cm(t, e, i, n, r, o, a, c, s) {
  return [
    d`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${u("ied.wizard.nameHelper")}"
      required
      validationMessage="${u("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${s}
      pattern="${Em}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${u("ied.wizard.descHelper")}"
      pattern="${gt.normalizedString}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="type"
      .maybeValue=${i || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="manufacturer"
      .maybeValue=${n || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="configVersion"
      .maybeValue=${r || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="originalSclVersion"
      .maybeValue=${o || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="engRight"
      .maybeValue=${a || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="owner"
      .maybeValue=${c || "-"}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function Im(t) {
  return [
    d` <section>
      <h1>${u("ied.wizard.title.references")}</h1>
      <mwc-list>
        ${t.map((e) => {
      const i = e.old.element;
      return d` <mwc-list-item noninteractive twoline>
            <span>${i.tagName}</span>
            <span slot="secondary"
              >${V(e.old.element)}</span
            >
          </mwc-list-item>`;
    })}
      </mwc-list>
    </section>`
  ];
}
function Tm(t) {
  return (t.getAttribute("originalSclVersion") ?? "").concat(t.getAttribute("originalSclRevision") ?? "").concat(t.getAttribute("originalSclRelease") ?? "");
}
function $m(t) {
  return Array.from(t.parentNode.querySelectorAll("IED")).filter(Ue).map((e) => e.getAttribute("name") ?? "").filter((e) => e !== t.getAttribute("name"));
}
function km(t) {
  return (e, i) => {
    i.dispatchEvent(fe());
    const n = Sl(t), r = n.filter(
      (s) => s.old.element.tagName === "ExtRef"
    ), o = Sm(r), a = t.getAttribute("name") ?? "Unknown", c = {
      actions: [],
      title: u("ied.action.deleteied", { name: a })
    };
    return c.actions.push({
      old: { parent: t.parentElement, element: t }
    }), c.actions.push(...n), c.actions.push(...o), [c];
  };
}
function Lm(t) {
  const e = Sl(t);
  return e.length > 0 ? [
    {
      title: u("ied.wizard.title.delete"),
      content: Im(e),
      primary: {
        icon: "delete",
        label: u("remove"),
        action: km(t)
      }
    }
  ] : null;
}
function Nm(t) {
  function e(i) {
    return (n) => {
      const r = Lm(i);
      r && n.dispatchEvent(ti(() => r)), n.dispatchEvent(
        it({ old: { parent: i.parentElement, element: i } })
      ), n.dispatchEvent(fe());
    };
  }
  return [
    {
      title: u("ied.wizard.title.edit"),
      element: t,
      menuActions: [
        {
          icon: "delete",
          label: u("remove"),
          action: e(t)
        }
      ],
      primary: {
        icon: "edit",
        label: u("save"),
        action: Cl(
          t,
          "ied.action.updateied"
        )
      },
      content: Cm(
        t.getAttribute("name"),
        t.getAttribute("desc"),
        t.getAttribute("type"),
        t.getAttribute("manufacturer"),
        t.getAttribute("configVersion"),
        Tm(t),
        t.getAttribute("engRight"),
        t.getAttribute("owner"),
        $m(t)
      )
    }
  ];
}
const Rm = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function zm(t, e, i, n) {
  return [
    e ? d`<wizard-textfield
          label="ldName"
          .maybeValue=${t}
          helper="${u("ldevice.wizard.noNameSupportHelper")}"
          helperPersistent
          readOnly
          disabled
        ></wizard-textfield>` : d`<wizard-textfield
          label="ldName"
          .maybeValue=${t}
          nullable
          helper="${u("ldevice.wizard.nameHelper")}"
          validationMessage="${u("textfield.required")}"
          dialogInitialFocus
          pattern="${Rm}"
        ></wizard-textfield>`,
    d`<wizard-textfield
      label="desc"
      .maybeValue=${i}
      nullable
      helper="${u("ldevice.wizard.descHelper")}"
      pattern="${gt.normalizedString}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="ldInst"
      .maybeValue=${n}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function Dm(t) {
  return !!t.closest("IED")?.querySelector("Services > ConfLdName");
}
function Om(t) {
  return (e) => {
    const i = {}, n = ["ldName", "desc"];
    if (n.forEach((r) => {
      i[r] = y(e.find((o) => o.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = X(t, i);
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
function Mm(t) {
  return [
    {
      title: u("ldevice.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: u("save"),
        action: Om(t)
      },
      content: zm(
        t.getAttribute("ldName"),
        !Dm(t),
        t.getAttribute("desc"),
        t.getAttribute("inst")
      )
    }
  ];
}
function Pm(t) {
  return Object.entries(t).map(
    ([e, i]) => d`<wizard-checkbox
        label="${e}"
        .maybeValue=${i}
        nullable
        helper="${u(`scl.${e}`)}"
      ></wizard-checkbox>`
  );
}
function Fm(t) {
  return (e) => {
    const i = y(e.find((p) => p.label === "dchg")), n = y(e.find((p) => p.label === "qchg")), r = y(e.find((p) => p.label === "dupd")), o = y(e.find((p) => p.label === "period")), a = y(e.find((p) => p.label === "gi"));
    if (i === t.getAttribute("dchg") && n === t.getAttribute("qchg") && r === t.getAttribute("dupd") && o === t.getAttribute("period") && a === t.getAttribute("gi"))
      return [];
    const c = X(t, {
      dchg: i,
      qchg: n,
      dupd: r,
      period: o,
      gi: a
    });
    return [{ old: { element: t }, new: { element: c } }];
  };
}
function Vm(t) {
  const [e, i, n, r, o] = [
    "dchg",
    "qchg",
    "dupd",
    "period",
    "gi"
  ].map((a) => t.getAttribute(a));
  return [
    {
      title: u("wizard.title.edit", { tagName: t.tagName }),
      primary: {
        icon: "save",
        label: u("save"),
        action: Fm(t)
      },
      content: Pm({ dchg: e, qchg: i, dupd: n, period: r, gi: o })
    }
  ];
}
class $e extends be {
  constructor() {
    super(...arguments), this.raised = !1, this.unelevated = !1, this.outlined = !1, this.dense = !1, this.disabled = !1, this.trailingIcon = !1, this.fullwidth = !1, this.icon = "", this.label = "", this.expandContent = !1, this.shouldRenderRipple = !1, this.rippleHandlers = new mi(() => (this.shouldRenderRipple = !0, this.ripple));
  }
  /** @soyTemplate */
  renderOverlay() {
    return d``;
  }
  /** @soyTemplate */
  renderRipple() {
    const e = this.raised || this.unelevated;
    return this.shouldRenderRipple ? d`<mwc-ripple class="ripple" .primary="${!e}" .disabled="${this.disabled}"></mwc-ripple>` : "";
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
    return ye({
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
    return d`
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
        <span class="slot-container ${ye({
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
    return d`
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
$e.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
m([
  f({ type: Boolean, reflect: !0 })
], $e.prototype, "raised", void 0);
m([
  f({ type: Boolean, reflect: !0 })
], $e.prototype, "unelevated", void 0);
m([
  f({ type: Boolean, reflect: !0 })
], $e.prototype, "outlined", void 0);
m([
  f({ type: Boolean })
], $e.prototype, "dense", void 0);
m([
  f({ type: Boolean, reflect: !0 })
], $e.prototype, "disabled", void 0);
m([
  f({ type: Boolean, attribute: "trailingicon" })
], $e.prototype, "trailingIcon", void 0);
m([
  f({ type: Boolean, reflect: !0 })
], $e.prototype, "fullwidth", void 0);
m([
  f({ type: String })
], $e.prototype, "icon", void 0);
m([
  f({ type: String })
], $e.prototype, "label", void 0);
m([
  f({ type: Boolean })
], $e.prototype, "expandContent", void 0);
m([
  R("#button")
], $e.prototype, "buttonElement", void 0);
m([
  pi("mwc-ripple")
], $e.prototype, "ripple", void 0);
m([
  N()
], $e.prototype, "shouldRenderRipple", void 0);
m([
  vt({ passive: !0 })
], $e.prototype, "handleRippleActivate", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Bm = ie`.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;font-size:1.125rem;height:1.125rem;vertical-align:top;width:1.125rem}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{border-style:solid}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 8px 0 8px}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px;height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined .mdc-button__touch{left:-1px;width:calc(100% + 2 * 1px)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;font-size:1.125rem;height:1.125rem;vertical-align:top;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{display:none}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;
let Cr = class extends $e {
};
Cr.styles = [Bm];
Cr = m([
  Z("mwc-button")
], Cr);
const Hm = [
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
], qm = [
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
], Um = ["Spec", "Conf", "RO", "Set"], Wm = ["SmpPerPeriod", "SmpPerSec", "SecPerSmp"], ql = [
  "None",
  "Signature",
  "SignatureAndEncryption"
];
function Gm(t, e, i) {
  if (!t.target || !t.target.parentElement) return;
  const n = t.target.selected?.value;
  if (t.target.parentElement.querySelector(
    'wizard-select[label="bType"]'
  ).value !== "Enum") return;
  const o = Array.from(
    e.querySelectorAll(`EnumType[id="${n}"] > EnumVal`)
  ).map(
    (c) => d`<mwc-list-item
        value="${c.textContent?.trim() ?? ""}"
        ?selected=${c.textContent?.trim() === i}
        >${c.textContent?.trim()}</mwc-list-item
      >`
  ), a = t.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  Dr(d`${o}`, a), a.requestUpdate();
}
function jm(t, e, i) {
  const n = t.target.selected.value, r = t.target.parentElement.querySelector(
    'wizard-select[label="type"]'
  );
  r.disabled = !(n === "Enum" || n === "Struct");
  const o = [];
  Array.from(r.children).forEach((s) => {
    const p = s;
    p.disabled = !s.classList.contains(n), p.noninteractive = !s.classList.contains(n), p.style.display = s.classList.contains(n) ? "" : "none", p.disabled || o.push(p);
  }), r.value = o.length ? o[0].value : "";
  const a = t.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  n === "Enum" ? a.style.display = "" : a.style.display = "none";
  const c = t.target.parentElement.querySelector(
    'wizard-textfield[label="Val"]'
  );
  n === "Enum" || n === "Struct" ? c.style.display = "none" : c.style.display = "", a.requestUpdate(), c.requestUpdate(), r.requestUpdate();
}
function Xm(t, e, i, n, r, o, a, c, s, p) {
  return [
    d`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${u("scl.name")}"
      required
      pattern="${gt.abstractDataAttributeName}"
      maxLength="${Zr.abstracDaName}"
      dialogInitialFocus
    >
      ></wizard-textfield
    >`,
    d`<wizard-textfield
      label="desc"
      helper="${u("scl.desc")}"
      .maybeValue=${e}
      nullable
      pattern="${gt.normalizedString}"
    ></wizard-textfield>`,
    d`<wizard-select
      fixedMenuPosition
      label="bType"
      .value=${i}
      helper="${u("scl.bType")}"
      required
      @selected=${(h) => jm(h)}
      >${qm.map(
      (h) => d`<mwc-list-item value="${h}"
            >${h}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    d`<wizard-select
      label="type"
      .maybeValue=${r}
      helper="${u("scl.type")}"
      fixedMenuPosition
      @selected=${(h) => Gm(h, p, s)}
      >${n.map(
      (h) => d`<mwc-list-item
            class="${h.tagName === "EnumType" ? "Enum" : "Struct"}"
            value=${h.id}
            >${h.id}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    d`<wizard-textfield
      label="sAddr"
      .maybeValue=${o}
      helper="${u("scl.sAddr")}"
      nullable
      pattern="${gt.normalizedString}"
    ></wizard-textfield>`,
    d`<wizard-select
      label="valKind"
      .maybeValue=${a}
      helper="${u("scl.valKind")}"
      nullable
      required
      fixedMenuPosition
      >${Um.map(
      (h) => d`<mwc-list-item value="${h}"
            >${h}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    d`<wizard-checkbox
      label="valImport"
      .maybeValue=${c}
      helper="${u("scl.valImport")}"
      nullable
      required
    ></wizard-checkbox>`,
    d`<wizard-select
      label="Val"
      .maybeValue=${s}
      helper="${u("scl.Val")}"
      nullable
      >${Array.from(
      p.querySelectorAll(`EnumType > EnumVal[id="${r}"]`)
    ).map(
      (h) => d`<mwc-list-item value="${h.textContent?.trim() ?? ""}"
            >${h.textContent?.trim()}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    d`<wizard-textfield
      label="Val"
      .maybeValue=${s}
      helper="${u("scl.Val")}"
      nullable
    ></wizard-textfield>`
  ];
}
function Zm(t, e, i, n) {
  return [
    d`<wizard-select
      label="fc"
      .maybeValue=${t}
      helper="${u("scl.fc")}"
      required
      fixedMenuPosition
      >${Hm.map(
      (r) => d`<mwc-list-item value="${r}">${r}</mwc-list-item>`
    )}</wizard-select
    >`,
    d`<wizard-checkbox
      label="dchg"
      .maybeValue=${e}
      helper="${u("scl.dchg")}"
      nullable
    ></wizard-checkbox>`,
    d`<wizard-checkbox
      label="qchg"
      .maybeValue=${i}
      helper="${u("scl.qchg")}"
      nullable
    ></wizard-checkbox>`,
    d`<wizard-checkbox
      label="dupd"
      .maybeValue=${n}
      helper="${u("scl.dupd")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function Km(t) {
  return (e) => {
    const i = y(e.find((w) => w.label === "name")), n = y(e.find((w) => w.label === "desc")), r = y(e.find((w) => w.label === "bType")), o = r === "Enum" || r === "Struct" ? y(e.find((w) => w.label === "type")) : null, a = y(e.find((w) => w.label === "sAddr")), c = y(e.find((w) => w.label === "valKind")), s = y(e.find((w) => w.label === "valImport")), p = e.find(
      (w) => w.label === "Val" && w.style.display !== "none"
    ), h = p ? y(p) : null, b = y(e.find((w) => w.label === "fc")) ?? "", x = y(e.find((w) => w.label === "dchg")), v = y(e.find((w) => w.label === "qchg")), _ = y(e.find((w) => w.label === "dupd")), A = [], E = G(t.ownerDocument, "DA", {
      name: i,
      desc: n,
      bType: r,
      type: o,
      sAddr: a,
      valKind: c,
      valImport: s,
      fc: b,
      dchg: x,
      qchg: v,
      dupd: _
    });
    if (h !== null) {
      const w = G(t.ownerDocument, "Val", {});
      w.textContent = h, E.appendChild(w);
    }
    return A.push({
      new: {
        parent: t,
        element: E
      }
    }), A;
  };
}
function Ym(t) {
  const e = t.ownerDocument, i = "", n = null, r = "", o = null, a = null, c = null, s = null, p = null, h = "", b = null, x = null, v = null, _ = Array.from(e.querySelectorAll("DAType, EnumType")).filter(Ue).filter((E) => E.getAttribute("id")), A = t.closest("DataTypeTemplates");
  return [
    {
      title: u("da.wizard.title.edit"),
      primary: {
        icon: "",
        label: u("save"),
        action: Km(t)
      },
      content: [
        ...Xm(
          i,
          n,
          r,
          _,
          o,
          a,
          s,
          p,
          c,
          A
        ),
        ...Zm(h, b, x, v)
      ]
    }
  ];
}
const Fe = (t, e) => t === null ? "" : e;
function Ul() {
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
      render: (s, p, h = null) => (h ? [...Array(h)] : [h]).map((b, x) => d`<wizard-select
            id="Val${Fe(b, `${x + 1}`)}"
            label="Val${Fe(b, ` for sGroup ${x + 1}`)}"
            .maybeValue=${a(p)}
            fixedMenuPosition
          >
            <mwc-list-item value="true">true</mwc-list-item>
            <mwc-list-item value="false">false</mwc-list-item>
          </wizard-select>`),
      value: (s, p) => y(
        s.find((h) => h.id === `Val${p || ""}`)
      )
    };
  }
  function e() {
    return {
      render: (s, p, h = null) => (h ? [...Array(h)] : [h]).map((b, x) => d`<wizard-select
            id="Val${Fe(b, `${x + 1}`)}"
            label="Val${Fe(b, ` for sGroup ${x + 1}`)}"
            .maybeValue=${a(p)}
            fixedMenuPosition
          >
            ${c(s).map((v) => d`<mwc-list-item value="${v}"
                >${v}</mwc-list-item
              >`)}
          </wizard-select>`),
      value: (s, p) => y(
        s.find((h) => h.id === `Val${p || ""}`)
      )
    };
  }
  function i(s, p, h) {
    return {
      render: (b, x, v = null) => (v ? [...Array(v)] : [v]).map((_, A) => d`<wizard-textfield
            id="Val${Fe(_, `${A + 1}`)}"
            label="Val${Fe(_, ` for sGroup ${A + 1}`)}"
            .maybeValue=${a(x)}
            helper="${u("dai.wizard.valueHelper", { type: s })}"
            type="number"
            min=${p}
            max=${h}
            step="0.1"
          >
          </wizard-textfield>`),
      value: (b, x) => y(
        b.find((v) => v.id === `Val${x || ""}`)
      )
    };
  }
  function n(s, p, h) {
    return {
      render: (b, x, v = null) => (v ? [...Array(v)] : [v]).map((_, A) => d`<wizard-textfield
            id="Val${Fe(_, `${A + 1}`)}"
            label="Val${Fe(_, ` for sGroup ${A + 1}`)}"
            .maybeValue=${a(x)}
            helper="${u("dai.wizard.valueHelper", { type: s })}"
            type="number"
            min=${p}
            max=${h}
          >
          </wizard-textfield>`),
      value: (b, x) => y(
        b.find((v) => v.id === `Val${x || ""}`)
      )
    };
  }
  function r() {
    return {
      render: (s, p, h = null) => {
        const b = a(p);
        return (h ? [...Array(h)] : [h]).reduce(
          (x, v, _) => x.concat([
            d`<wizard-textfield
                id="ValDate${Fe(v, `${_ + 1}`)}"
                label="Val (Date)${Fe(v, ` for sGroup ${_ + 1}`)}"
                .maybeValue=${Qm(b)}
                type="date"
              >
              </wizard-textfield>`,
            d`<wizard-textfield
                id="ValTime${Fe(v, `${_ + 1}`)}"
                label="Val (Time)${Fe(v, ` for sGroup ${_ + 1}`)}"
                .maybeValue=${Jm(b)}
                type="time"
                step="1"
              >
              </wizard-textfield>`
          ]),
          []
        );
      },
      value: (s, p) => {
        const h = [`ValDate${p || ""}`, `ValTime${p || ""}`].map(
          (v) => y(s.find((_) => _.id === v))
        ), b = h[0] ? h[0] : "0000-00-00", x = h[1] ? h[1] : "00:00:00";
        return b + "T" + x + ".000";
      }
    };
  }
  function o(s, p) {
    return {
      render: (h, b, x = null) => (x ? [...Array(x)] : [x]).map((v, _) => d`<wizard-textfield
            id="Val${Fe(v, ` ${_ + 1}`)}"
            label="Val${Fe(v, ` for sGroup ${_ + 1}`)}"
            .maybeValue=${a(b)}
            helper="${u("dai.wizard.valueHelper", { type: s })}"
            maxLength=${p}
            type="text"
          >
          </wizard-textfield>`),
      value: (h, b) => y(
        h.find((x) => x.id === `Val${b || ""}`)
      )
    };
  }
  function a(s) {
    return (s?.querySelector("Val") ? s?.querySelector("Val") : s)?.textContent?.trim() ?? "";
  }
  function c(s) {
    const p = s.getAttribute("type"), h = [];
    return Array.from(
      s.ownerDocument.querySelectorAll(
        `EnumType[id="${p}"] > EnumVal`
      )
    ).filter(
      (b) => b.textContent && b.textContent !== ""
    ).sort(
      (b, x) => parseInt(b.getAttribute("ord") ?? "0") - parseInt(x.getAttribute("ord") ?? "0")
    ).forEach((b) => {
      h.push(b.textContent ?? "");
    }), h;
  }
}
function Qm(t) {
  let i = t.split("T")[0];
  return /^\d{4}-\d{2}-\d{2}$/.test(i) || (i = null), i === "0000-00-00" && (i = null), i;
}
function Jm(t) {
  const e = t.split("T");
  let i = null;
  return e.length == 2 && (i = e[1], i.length > 8 && (i = i.substring(0, 8)), /^\d{2}:\d{2}:\d{2}$/.test(i) || (i = null), i === "00:00:00" && (i = null)), i;
}
const eh = "http://www.iec.ch/61850/2003/SCL";
function jt(t) {
  return t.namespaceURI === eh;
}
function th(t, e) {
  return (i) => {
    const n = t.getAttribute("bType"), r = Ul()[n].value(i), o = e.parentElement?.getAttribute("name") ?? "", a = {
      actions: [],
      title: u("dai.action.updatedai", { daiName: o })
    }, c = e.cloneNode(!1);
    return c.textContent = r, a.actions.push({
      old: { element: e },
      new: { element: c }
    }), [a];
  };
}
function ih(t, e, i = null) {
  const n = t.getAttribute("bType"), r = t.querySelector("Val")?.textContent?.trim() ?? "";
  return [
    d` ${Ul()[n].render(
      t,
      e,
      i
    )}
    ${r ? d`<wizard-textfield
          id="daVal"
          label="DA Template Value"
          .maybeValue=${r}
          readonly
          disabled
        >
        </wizard-textfield>` : Ve}`
  ];
}
function nh(t, e) {
  const i = e?.tagName === "DAI" ? e?.getAttribute("name") ?? "" : e?.parentElement?.getAttribute("name") ?? "";
  return [
    {
      title: u("dai.wizard.title.edit", {
        daiName: i
      }),
      element: e,
      primary: {
        icon: "edit",
        label: u("save"),
        action: th(t, e)
      },
      content: ih(t, e)
    }
  ];
}
function rh(t) {
  return (e) => {
    e.dispatchEvent(ti(() => Nl(t)));
  };
}
function oh(t) {
  return (e, i) => {
    const n = e.find((p) => p.label === "name").value, r = y(e.find((p) => p.label === "desc")), o = t.getAttribute("name"), a = [];
    if (!(n === o && r === t.getAttribute("desc"))) {
      const p = X(t, { name: n, desc: r });
      a.push({
        old: { element: t },
        new: { element: p }
      });
    }
    const c = n !== o ? Array.from(
      t.parentElement?.querySelectorAll(
        `ReportControlBock[datSet=${o}], GSEControl[datSet=${o}],SampledValueControl[datSet=${o}] `
      ) ?? []
    ).map((p) => {
      const h = X(p, { datSet: n });
      return { old: { element: p }, new: { element: h } };
    }) : [];
    return [
      ...Array.from(
        i.shadowRoot.querySelectorAll(
          "filtered-list > mwc-check-list-item:not([selected])"
        )
      ).map((p) => bt(t, "FCDA", p.value)).filter((p) => p).map((p) => ({
        old: {
          parent: t,
          element: p,
          reference: p.nextSibling
        }
      })),
      ...a,
      ...c
    ];
  };
}
function Wl(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc");
  return [
    {
      title: u("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        label: u("save"),
        icon: "save",
        action: oh(t)
      },
      menuActions: [
        {
          icon: "add",
          label: u("dataset.fcda.add"),
          action: rh(t)
        }
      ],
      content: [
        d`<wizard-textfield
          label="name"
          .maybeValue=${e}
          helper="${u("scl.name")}"
          required
          disabled="true"
        >
        </wizard-textfield>`,
        d`<wizard-textfield
          label="desc"
          .maybeValue=${i}
          helper="${u("scl.desc")}"
          nullable
          required
        >
        </wizard-textfield>`,
        d`<filtered-list multi
          >${Array.from(t.querySelectorAll("FCDA")).map(
          (n) => d`<mwc-check-list-item selected value="${V(n)}"
                >${V(n).split(">").pop()}</mwc-check-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
const re = {
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
}, ah = {
  IP: re.IP,
  "IP-SUBNET": re.IP,
  "IP-GATEWAY": re.IP,
  "OSI-TSEL": re.OSI,
  "OSI-SSEL": re.OSI,
  "OSI-PSEL": re.OSI,
  "OSI-AP-Title": re.OSIAPi,
  "OSI-AP-Invoke": re.OSId,
  "OSI-AE-Qualifier": re.OSId,
  "OSI-AE-Invoke": re.OSId,
  "MAC-Address": re.MAC,
  APPID: re.APPID,
  "VLAN-ID": re.VLANid,
  "VLAN-PRIORITY": re.VLANp,
  "OSI-NSAP": re.OSI,
  "SNTP-Port": re.port,
  "MMS-Port": re.port,
  DNSName: "[^ ]*",
  "UDP-Port": re.port,
  "TCP-Port": re.port,
  "C37-118-IP-Port": "102[5-9]|10[3-9][0-9]|1[1-9][0-9][0-9]|[2-9][0-9]{3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]",
  IPv6: re.IPv6,
  "IPv6-SUBNET": re.IPv6sub,
  "IPv6-GATEWAY": re.IPv6,
  IPv6FlowLabel: "[0-9a-fA-F]{1,5}",
  IPv6ClassOfTraffic: "[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]",
  "IPv6-IGMPv3Src": re.IPv6,
  "IP-IGMPv3Sr": re.IP,
  "IP-ClassOfTraffic": re.OSI
}, lh = {
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
function Gl(t) {
  return [
    d`<mwc-formfield label="${u("connectedap.wizard.addschemainsttype")}">
      <mwc-checkbox
        id="instType"
        ?checked="${t.hasInstType}"
      ></mwc-checkbox>
    </mwc-formfield>`,
    d`${Object.entries(t.attributes).map(
      ([e, i]) => d`<wizard-textfield
          label="${e}"
          ?nullable=${lh[e]}
          .maybeValue=${i}
          pattern="${ee(ah[e])}"
          required
        ></wizard-textfield>`
    )}`
  ];
}
function ch(t, e) {
  return t.querySelectorAll("P").length !== e.querySelectorAll("P").length ? !1 : Array.from(t.querySelectorAll("P")).filter(
    (i) => !e.querySelector(`Address > P[type="${i.getAttribute("type")}"]`)?.isEqualNode(i)
  ).length === 0;
}
function sh(t, e, i) {
  const n = G(e.ownerDocument, "Address", {});
  return Object.entries(t).filter(([r, o]) => o !== null).forEach(([r, o]) => {
    const a = r, c = G(e.ownerDocument, "P", { type: a });
    i && c.setAttributeNS(
      "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:type",
      "tP_" + r
    ), c.textContent = o, n.appendChild(c);
  }), n;
}
function jl(t, e, i) {
  const n = [], r = sh(e, t, i), o = t.querySelector("Address");
  return o !== null && !ch(o, r) ? (n.push({
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
function $a(t, e, i, n) {
  if (e === null) {
    const o = G(n.ownerDocument, t, {
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
function dh(t) {
  return (e, i) => {
    const n = {
      actions: [],
      title: u("gse.action.addaddress", {
        identity: V(t)
      })
    }, r = i.shadowRoot?.querySelector("#instType")?.checked ?? !1, o = {};
    o["MAC-Address"] = y(
      e.find((p) => p.label === "MAC-Address")
    ), o.APPID = y(e.find((p) => p.label === "APPID")), o["VLAN-ID"] = y(
      e.find((p) => p.label === "VLAN-ID")
    ), o["VLAN-PRIORITY"] = y(
      e.find((p) => p.label === "VLAN-PRIORITY")
    ), jl(t, o, r).forEach((p) => {
      n.actions.push(p);
    });
    const c = y(e.find((p) => p.label === "MinTime")), s = y(e.find((p) => p.label === "MaxTime"));
    return c !== (t.querySelector("MinTime")?.textContent?.trim() ?? null) && n.actions.push(
      $a(
        "MinTime",
        t.querySelector("MinTime"),
        c,
        t
      )
    ), s !== (t.querySelector("MaxTime")?.textContent?.trim() ?? null) && n.actions.push(
      $a(
        "MaxTime",
        t.querySelector("MaxTime"),
        s,
        t
      )
    ), [n];
  };
}
function uh(t) {
  const e = t.querySelector("MinTime")?.innerHTML.trim() ?? null, i = t.querySelector("MaxTime")?.innerHTML.trim() ?? null, n = Array.from(t.querySelectorAll("Address > P")).some(
    (o) => o.getAttribute("xsi:type")
  ), r = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((o) => {
    r[o] || (r[o] = t.querySelector(`Address > P[type="${o}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: u("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        label: u("save"),
        icon: "save",
        action: dh(t)
      },
      content: [
        ...Gl({ hasInstType: n, attributes: r }),
        d`<wizard-textfield
          label="MinTime"
          .maybeValue=${e}
          nullable
          suffix="ms"
          type="number"
        ></wizard-textfield>`,
        d`<wizard-textfield
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
function Xl(t) {
  const e = t.getAttribute("name"), i = t.closest("IED")?.getAttribute("name"), n = t.closest("AccessPoint")?.getAttribute("name"), r = t.closest("LDevice")?.getAttribute("inst");
  return t.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${n}"] > GSE[ldInst="${r}"][cbName="${e}"]`
  );
}
function ph(t) {
  return [
    d`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${u("scl.name")}"
      required
      validationMessage="${u("textfield.required")}"
      pattern="${gt.asciName}"
      maxLength="${Zr.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${u("scl.desc")}"
    ></wizard-textfield>`,
    d`<wizard-select
      label="type"
      .maybeValue=${t.type}
      helper="${u("scl.type")}"
      nullable
      required
      >${["GOOSE", "GSSE"].map(
      (e) => d`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`,
    d`<wizard-textfield
      label="appID"
      .maybeValue=${t.appID}
      helper="${u("scl.id")}"
      required
      validationMessage="${u("textfield.nonempty")}"
    ></wizard-textfield>`,
    d`<wizard-checkbox
      label="fixedOffs"
      .maybeValue=${t.fixedOffs}
      nullable
      helper="${u("scl.fixedOffs")}"
    ></wizard-checkbox>`,
    d`<wizard-select
      label="securityEnabled"
      .maybeValue=${t.securityEnabled}
      nullable
      required
      helper="${u("scl.securityEnable")}"
      >${ql.map(
      (e) => d`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function mh(t) {
  if (!t.parentElement) return null;
  const e = t.parentElement.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), i = Xl(t), n = Array.from(
    t.parentElement?.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    ) ?? []
  ).filter(
    (c) => c.getAttribute("datSet") === e?.getAttribute("name")
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
    title: u("controlblock.action.remove", {
      type: t.tagName,
      name: o,
      iedName: a
    }),
    actions: r
  };
}
function hh(t) {
  return (e) => {
    const i = mh(t);
    i && e.dispatchEvent(it(i)), e.dispatchEvent(fe());
  };
}
function fh(t) {
  return (e) => {
    e.dispatchEvent(ti(() => Wl(t)));
  };
}
function bh(t) {
  return (e) => {
    e.dispatchEvent(ti(() => uh(t)));
  };
}
function gh(t) {
  return (e) => {
    const i = e.find((p) => p.label === "name").value, n = y(e.find((p) => p.label === "desc")), r = y(e.find((p) => p.label === "type")), o = y(e.find((p) => p.label === "appID")), a = y(e.find((p) => p.label === "fixedOffs")), c = y(
      e.find((p) => p.label === "securityEnabled")
    );
    if (i === t.getAttribute("name") && n === t.getAttribute("desc") && r === t.getAttribute("type") && o === t.getAttribute("appID") && a === t.getAttribute("fixedOffs") && c === t.getAttribute("securityEnabled"))
      return [];
    const s = X(t, {
      name: i,
      desc: n,
      type: r,
      appID: o,
      fixedOffs: a,
      securityEnabled: c
    });
    return [{ old: { element: t }, new: { element: s } }];
  };
}
function xh(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = t.getAttribute("appID"), o = t.getAttribute("fixedOffs"), a = t.getAttribute("securityEnabled"), c = Xl(t), s = t.parentElement?.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), p = [];
  return p.push({
    icon: "delete",
    label: u("remove"),
    action: hh(t)
  }), s && p.push({
    icon: "edit",
    label: u("scl.DataSet"),
    action: fh(s)
  }), c && p.push({
    icon: "edit",
    label: u("scl.Communication"),
    action: bh(c)
  }), [
    {
      title: u("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: u("save"),
        action: gh(t)
      },
      menuActions: p,
      content: [
        ...ph({
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
function Dt(t) {
  return [
    d`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${u("scl.name")}"
      required
      validationMessage="${u("textfield.required")}"
      .reservedValues=${t.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${u("scl.desc")}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      helper="${u("scl.type")}"
      nullable
    ></wizard-textfield>`
  ];
}
function yh(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = y(e.find((o) => o.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = X(t, i);
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
function vh(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = K(
    t.parentElement,
    "Function"
  ).filter((o) => o !== t).map((o) => o.getAttribute("name"));
  return [
    {
      title: u("wizard.title.edit", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: u("save"),
        action: yh(t)
      },
      content: [
        ...Dt({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function wh(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type"].forEach((o) => {
      i[o] = y(e.find((a) => a.label === o));
    });
    const r = G(
      t.ownerDocument,
      "Function",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function _h(t) {
  const e = "", r = Array.from(t.querySelectorAll("Function")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: u("wizard.title.add", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: u("save"),
        action: wh(t)
      },
      content: [
        ...Dt({
          name: e,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function Ah(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = y(e.find((o) => o.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = X(t, i);
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
function Sh(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = K(
    t.parentElement,
    "EqSubFunction"
  ).filter((o) => o !== t).map((o) => o.getAttribute("name"));
  return [
    {
      title: u("wizard.title.edit", { tagName: "EqSubFunction" }),
      element: t,
      primary: {
        icon: "save",
        label: u("save"),
        action: Ah(t)
      },
      content: [
        ...Dt({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Eh(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type"].forEach((o) => {
      i[o] = y(e.find((a) => a.label === o));
    });
    const r = G(
      t.ownerDocument,
      "EqSubFunction",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function Ch(t) {
  const e = "", r = Array.from(
    t.querySelectorAll("EqSubFunction")
  ).map((o) => o.getAttribute("name"));
  return [
    {
      title: u("wizard.title.add", { tagName: "EqSubFunction" }),
      primary: {
        icon: "save",
        label: u("save"),
        action: Eh(t)
      },
      content: [
        ...Dt({
          name: e,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function Ih(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = y(e.find((o) => o.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = X(t, i);
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
function Th(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = K(
    t.parentElement,
    "EqFunction"
  ).filter((o) => o !== t).map((o) => o.getAttribute("name"));
  return [
    {
      title: u("wizard.title.edit", { tagName: "EqFunction" }),
      element: t,
      primary: {
        icon: "save",
        label: u("save"),
        action: Ih(t)
      },
      content: [
        ...Dt({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function $h(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type"].forEach((o) => {
      i[o] = y(e.find((a) => a.label === o));
    });
    const r = G(
      t.ownerDocument,
      "EqFunction",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function kh(t) {
  const e = "", r = Array.from(t.querySelectorAll("EqFunction")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: u("wizard.title.add", { tagName: "EqFunction" }),
      primary: {
        icon: "save",
        label: u("save"),
        action: $h(t)
      },
      content: [
        ...Dt({
          name: e,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function Lh(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = y(e.find((o) => o.label === r));
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = X(t, i);
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
function Nh(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = K(
    t.parentElement,
    "SubFunction"
  ).filter((o) => o !== t).map((o) => o.getAttribute("name"));
  return [
    {
      title: u("wizard.title.edit", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: u("save"),
        action: Lh(t)
      },
      content: [
        ...Dt({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Rh(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type"].forEach((o) => {
      i[o] = y(e.find((a) => a.label === o));
    });
    const r = G(
      t.ownerDocument,
      "SubFunction",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function zh(t) {
  const e = "", r = Array.from(t.querySelectorAll("SubFunction")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: u("wizard.title.add", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: u("save"),
        action: Rh(t)
      },
      content: [
        ...Dt({
          name: e,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function Dh(t) {
  return (e, i) => {
    const n = {
      actions: [],
      title: u("smv.action.addaddress", {
        identity: V(t)
      })
    }, r = i.shadowRoot?.querySelector("#instType")?.checked, o = {};
    o["MAC-Address"] = y(
      e.find((c) => c.label === "MAC-Address")
    ), o.APPID = y(e.find((c) => c.label === "APPID")), o["VLAN-ID"] = y(
      e.find((c) => c.label === "VLAN-ID")
    ), o["VLAN-PRIORITY"] = y(
      e.find((c) => c.label === "VLAN-PRIORITY")
    );
    const a = jl(t, o, r);
    return a.length ? (a.forEach((c) => {
      n.actions.push(c);
    }), [n]) : [];
  };
}
function Oh(t) {
  const e = Array.from(t.querySelectorAll("Address > P")).some(
    (n) => n.getAttribute("xsi:type")
  ), i = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((n) => {
    i[n] || (i[n] = t.querySelector(`Address > P[type="${n}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: u("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        label: u("save"),
        icon: "edit",
        action: Dh(t)
      },
      content: [...Gl({ hasInstType: e, attributes: i })]
    }
  ];
}
function Mh(t) {
  return Object.entries(t).map(
    ([e, i]) => d`<wizard-checkbox
        label="${e}"
        .maybeValue=${i}
        nullable
        helper="${u(`scl.${e}`)}"
      ></wizard-checkbox>`
  );
}
function Ph(t) {
  return (e) => {
    const i = {}, n = [
      "refreshTime",
      "sampleRate",
      "dataSet",
      "security",
      "synchSourceId"
    ];
    if (n.forEach((o) => {
      i[o] = y(e.find((a) => a.label === o));
    }), !n.some((o) => i[o] !== t.getAttribute(o)))
      return [];
    const r = X(t, i);
    return [{ old: { element: t }, new: { element: r } }];
  };
}
function Fh(t) {
  const [e, i, n, r, o] = [
    "refreshTime",
    "sampleRate",
    "dataSet",
    "security",
    "synchSourceId"
  ].map((a) => t.getAttribute(a));
  return [
    {
      title: u("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: u("save"),
        action: Ph(t)
      },
      content: [
        ...Mh({
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
function Zl(t) {
  const e = t.getAttribute("name"), i = t.closest("IED")?.getAttribute("name"), n = t.closest("AccessPoint")?.getAttribute("name"), r = t.closest("LDevice")?.getAttribute("inst");
  return t.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${n}"] > SMV[ldInst="${r}"][cbName="${e}"]`
  ) ?? null;
}
function Vh(t) {
  if (!t.parentElement) return null;
  const e = t.parentElement.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), i = Zl(t), n = Array.from(
    t.parentElement.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    )
  ).filter(
    (c) => c.getAttribute("datSet") === e?.getAttribute("name")
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
    title: u("controlblock.action.remove", {
      type: t.tagName,
      name: o,
      iedName: a
    }),
    actions: r
  };
}
function Bh(t) {
  return [
    d`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${u("scl.name")}"
      required
      validationMessage="${u("textfield.required")}"
      pattern="${gt.asciName}"
      maxLength="${Zr.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      pattern="${gt.normalizedString}"
      helper="${u("scl.desc")}"
    ></wizard-textfield>`,
    t.multicast === "true" ? d`` : d`<wizard-checkbox
          label="multicast"
          .maybeValue=${t.multicast}
          helper="${u("scl.multicast")}"
          disabled
        ></wizard-checkbox>`,
    d`<wizard-textfield
      label="smvID"
      .maybeValue=${t.smvID}
      helper="${u("scl.id")}"
      required
      validationMessage="${u("textfield.nonempty")}"
    ></wizard-textfield>`,
    d`<wizard-select
      label="smpMod"
      .maybeValue=${t.smpMod}
      nullable
      required
      helper="${u("scl.smpMod")}"
      >${Wm.map(
      (e) => d`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`,
    d`<wizard-textfield
      label="smpRate"
      .maybeValue=${t.smpRate}
      helper="${u("scl.smpRate")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="nofASDU"
      .maybeValue=${t.nofASDU}
      helper="${u("scl.nofASDU")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    d`<wizard-select
      label="securityEnabled"
      .maybeValue=${t.securityEnabled}
      nullable
      required
      helper="${u("scl.securityEnable")}"
      >${ql.map(
      (e) => d`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function Hh(t) {
  return (e) => {
    const i = Vh(t);
    i && e.dispatchEvent(it(i)), e.dispatchEvent(fe());
  };
}
function qh(t) {
  return (e) => {
    e.dispatchEvent(ti(() => Wl(t)));
  };
}
function Uh(t) {
  return (e) => {
    e.dispatchEvent(ti(() => Fh(t)));
  };
}
function Wh(t) {
  return (e) => {
    e.dispatchEvent(ti(() => Oh(t)));
  };
}
function Gh(t) {
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
      if (a === "multicast" && !e.find((s) => s.label === a)) {
        i.multicast = "true";
        return;
      }
      i[a] = y(e.find((s) => s.label === a));
    });
    let r = null;
    if (n.some((a) => i[a] !== t.getAttribute(a))) {
      const a = X(t, i);
      r = {
        old: { element: t },
        new: { element: a }
      };
    }
    const o = [];
    return r && o.push(r), o;
  };
}
function jh(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("multicast"), r = t.getAttribute("smvID"), o = t.getAttribute("smpMod"), a = t.getAttribute("smpRate"), c = t.getAttribute("nofASDU"), s = t.getAttribute("securityEnabled"), p = Zl(t), h = t.querySelector("SmvOpts"), b = t.parentElement?.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), x = [];
  return x.push({
    icon: "delete",
    label: u("remove"),
    action: Hh(t)
  }), b && x.push({
    icon: "edit",
    label: u("scl.DataSet"),
    action: qh(b)
  }), h && x.push({
    icon: "edit",
    label: u("scl.SmvOpts"),
    action: Uh(h)
  }), p && x.push({
    icon: "edit",
    label: u("scl.Communication"),
    action: Wh(p)
  }), [
    {
      title: u("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: u("save"),
        action: Gh(t)
      },
      menuActions: x,
      content: [
        ...Bh({
          name: e,
          desc: i,
          multicast: n,
          smvID: r,
          smpMod: o,
          smpRate: a,
          nofASDU: c,
          securityEnabled: s
        })
      ]
    }
  ];
}
function Kl(t) {
  return [
    d`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      .reservedValues=${t.reservedNames}
      helper="${u("scl.name")}"
      required
      validationMessage="${u("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${u("scl.desc")}"
    ></wizard-textfield>`,
    d`<wizard-select
      label="phase"
      fixedMenuPosition
      .maybeValue=${t.phase}
      nullable
      helper="${u("scl.phase")}"
    >
      ${["A", "B", "C", "N", "all", "none", "AB", "BC", "CA"].map(
      (e) => d`<mwc-list-item value="${e}">
            ${e.charAt(0).toUpperCase() + e.slice(1)}
          </mwc-list-item>`
    )}
    </wizard-select> `,
    d`<wizard-checkbox
      label="virtual"
      .maybeValue=${t.virtual}
      nullable
      helper="${u("scl.virtual")}"
    ></wizard-checkbox>`
  ];
}
function Xh(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "phase", "virtual"];
    if (n.forEach((r) => {
      i[r] = y(e.find((o) => o.label === r));
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = X(t, i);
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
function Zh(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("phase"), r = t.getAttribute("virtual"), o = K(
    t.parentElement,
    "SubEquipment"
  ).filter((a) => a !== t).map((a) => a.getAttribute("name"));
  return [
    {
      title: u("wizard.title.edit", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: u("save"),
        action: Xh(t)
      },
      content: [
        ...Kl({
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
function Kh(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "phase", "virtual"].forEach((o) => {
      i[o] = y(e.find((a) => a.label === o));
    });
    const r = G(
      t.ownerDocument,
      "SubEquipment",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function Yh(t) {
  const e = "", o = Array.from(t.querySelectorAll("SubEquipment")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: u("wizard.title.add", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: u("save"),
        action: Kh(t)
      },
      content: [
        ...Kl({
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
function Qh(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = t.getAttribute("virtual"), o = K(
    t.parentElement,
    "GeneralEquipment"
  ).filter((a) => a !== t).map((a) => a.getAttribute("name"));
  return [
    {
      title: u("wizard.title.edit", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: u("save"),
        action: Jh(t)
      },
      content: [
        ...Yl({
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
function Jh(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = y(e.find((o) => o.label === r));
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = X(t, i);
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
function Yl(t) {
  return [
    d`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${u("scl.name")}"
      required
      validationMessage="${u("textfield.required")}"
      .reservedValues=${t.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${u("scl.desc")}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      helper="${u("scl.type")}"
      minLength="${3}"
      pattern="AXN|BAT|MOT|FAN|FIL|PMP|TNK|VLV|E[A-Z]*"
      required
    ></wizard-textfield>`,
    d`<wizard-checkbox
      label="virtual"
      .maybeValue=${t.virtual}
      helper="${u("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function ef(t) {
  const e = "", o = Array.from(
    t.querySelectorAll("GeneralEquipment")
  ).map((a) => a.getAttribute("name"));
  return [
    {
      title: u("wizard.title.add", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: u("save"),
        action: tf(t)
      },
      content: [
        ...Yl({
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
function tf(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((o) => {
      i[o] = y(e.find((a) => a.label === o));
    });
    const r = G(
      t.ownerDocument,
      "GeneralEquipment",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function nf(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((o) => {
      i[o] = y(
        e.find((a) => a.label === o)
      );
    });
    const r = G(
      t.ownerDocument,
      "TransformerWinding",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function rf(t) {
  const e = "", o = Array.from(
    t.querySelectorAll("TransformerWinding")
  ).map((a) => a.getAttribute("name"));
  return [
    {
      title: u("wizard.title.add", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: u("save"),
        action: nf(t)
      },
      content: [
        ...Ql({
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
function of(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = y(
        e.find((o) => o.label === r)
      );
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = X(t, i);
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
function Ql(t) {
  return [
    d`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${u("scl.name")}"
      required
      validationMessage="${u("textfield.required")}"
      .reservedValues=${t.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${u("scl.desc")}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      disabled
      helper="${u("scl.type")}"
    ></wizard-textfield>`,
    d`<wizard-checkbox
      label="virtual"
      .maybeValue=${t.virtual}
      helper="${u("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function af(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = t.getAttribute("virtual"), o = K(
    t.parentElement,
    "TransformerWinding"
  ).filter((a) => a !== t).map((a) => a.getAttribute("name"));
  return [
    {
      title: u("wizard.title.edit", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: u("save"),
        action: of(t)
      },
      content: [
        ...Ql({
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
function lf(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((o) => {
      i[o] = y(e.find((a) => a.label === o));
    });
    const r = G(
      t.ownerDocument,
      "TapChanger",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function cf(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = y(e.find((o) => o.label === r));
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = X(t, i);
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
function Jl(t) {
  return [
    d`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${u("scl.name")}"
      required
      validationMessage="${u("textfield.required")}"
      .reservedValues=${t.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${u("scl.desc")}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      disabled
      helper="${u("scl.type")}"
    ></wizard-textfield>`,
    d`<wizard-checkbox
      label="virtual"
      .maybeValue=${t.virtual}
      helper="${u("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function sf(t) {
  const e = "", n = "LTC", o = Array.from(t.querySelectorAll("TapChanger")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: u("wizard.title.add", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: u("save"),
        action: lf(t)
      },
      content: [
        ...Jl({
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
function df(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = t.getAttribute("virtual"), o = K(
    t.parentElement,
    "TapChanger"
  ).filter((a) => a !== t).map((a) => a.getAttribute("name"));
  return [
    {
      title: u("wizard.title.edit", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: u("save"),
        action: cf(t)
      },
      content: [
        ...Jl({
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
function ec(t, e, i, n, r) {
  return [
    d`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${u("line.wizard.nameHelper")}"
      required
      validationMessage="${u("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${u("line.wizard.descHelper")}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="type"
      .maybeValue=${i}
      nullable
      helper="${u("line.wizard.typeHelper")}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="nomFreq"
      .maybeValue=${n}
      nullable
      helper="${u("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      validationMessage="${u("textfield.nonempty")}"
      pattern="${Oi.unsigned}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="numPhases"
      .maybeValue=${r}
      nullable
      helper="${u("voltagelevel.wizard.numPhaseHelper")}"
      suffix="#"
      validationMessage="${u("textfield.nonempty")}"
      type="number"
      min="1"
      max="255"
    ></wizard-textfield>`
  ];
}
function uf(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type", "nomFreq", "numPhases"].forEach((o) => {
      i[o] = y(e.find((a) => a.label === o));
    });
    const r = G(t.ownerDocument, "Line", i);
    return [{ new: { parent: t, element: r } }];
  };
}
function pf(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type", "nomFreq", "numPhases"];
    if (n.forEach((r) => {
      i[r] = y(e.find((o) => o.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = X(t, i);
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
function mf(t) {
  return [
    {
      title: u("wizard.title.add", { tagName: "Line" }),
      primary: {
        icon: "save",
        label: u("save"),
        action: uf(t)
      },
      content: [...ec("", "", "", "", "")]
    }
  ];
}
function hf(t) {
  return [
    {
      title: u("line.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: u("save"),
        action: pf(t)
      },
      content: ec(
        t.getAttribute("name") ?? "",
        t.getAttribute("desc"),
        t.getAttribute("type"),
        t.getAttribute("nomFreq"),
        t.getAttribute("numPhases")
      )
    }
  ];
}
function ff(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type"].forEach((o) => {
      i[o] = y(e.find((a) => a.label === o));
    });
    const r = G(t.ownerDocument, "Process", i);
    return [{ new: { parent: t, element: r } }];
  };
}
function bf(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = y(e.find((o) => o.label === r));
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = X(t, i);
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
  return [
    d`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${u("scl.name")}"
      required
      validationMessage="${u("textfield.required")}"
      .reservedValues=${t.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${u("scl.desc")}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      nullable
      helper="${u("scl.type")}"
    ></wizard-textfield>`
  ];
}
function gf(t) {
  const e = "", i = "", n = "", r = K(
    t.parentElement,
    "Process"
  ).filter((o) => o !== t).map((o) => o.getAttribute("name"));
  return [
    {
      title: u("wizard.title.add", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: u("save"),
        action: ff(t)
      },
      content: [
        ...tc({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function xf(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = K(
    t.parentElement,
    "Process"
  ).filter((o) => o !== t).map((o) => o.getAttribute("name"));
  return [
    {
      title: u("wizard.title.edit", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: u("save"),
        action: bf(t)
      },
      content: [
        ...tc({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function yf(t, e, i, n, r) {
  return [
    d`<wizard-textfield
      label="lnType"
      .maybeValue=${t}
      readonly
      required
      helper="${u("ln.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${u("ln.wizard.descHelper")}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="prefix"
      nullable
      readonly
      .maybeValue=${i}
      helper="${u("ln.wizard.prefixHelper")}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${n}
      helper="${u("ln.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="inst"
      .maybeValue=${r}
      readonly
      helper="${u("ln.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function vf(t) {
  return (e) => {
    const i = {}, n = ["lnType", "desc", "prefix", "lnClass", "inst"];
    if (n.forEach((r) => {
      i[r] = y(e.find((o) => o.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = X(t, i);
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
function wf(t) {
  return [
    {
      title: u("ln.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: u("save"),
        action: vf(t)
      },
      content: yf(
        t.getAttribute("lnType"),
        t.getAttribute("desc"),
        t.getAttribute("prefix"),
        t.getAttribute("lnClass"),
        t.getAttribute("inst")
      )
    }
  ];
}
function _f(t, e, i, n) {
  return [
    d`<wizard-textfield
      label="lnType"
      .maybeValue=${t}
      readonly
      required
      helper="${u("ln0.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${u("ln0.wizard.descHelper")}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${i}
      helper="${u("ln0.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="inst"
      .maybeValue=${n}
      readonly
      helper="${u("ln0.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function Af(t) {
  return (e) => {
    const i = {}, n = ["lnType", "desc", "lnClass", "inst"];
    if (n.forEach((r) => {
      i[r] = y(e.find((o) => o.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = X(t, i);
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
function Sf(t) {
  return [
    {
      title: u("ln0.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: u("save"),
        action: Af(t)
      },
      content: _f(
        t.getAttribute("lnType"),
        t.getAttribute("desc"),
        t.getAttribute("lnClass"),
        t.getAttribute("inst")
      )
    }
  ];
}
function l() {
}
const Ie = {
  AccessControl: {
    edit: l,
    create: l
  },
  AccessPoint: {
    edit: l,
    create: l
  },
  Address: {
    edit: l,
    create: l
  },
  Association: {
    edit: l,
    create: l
  },
  Authentication: {
    edit: l,
    create: l
  },
  BDA: {
    edit: l,
    create: l
  },
  BitRate: {
    edit: l,
    create: l
  },
  Bay: {
    edit: ap,
    create: op
  },
  ClientLN: {
    edit: l,
    create: l
  },
  ClientServices: {
    edit: l,
    create: l
  },
  CommProt: {
    edit: l,
    create: l
  },
  Communication: {
    edit: l,
    create: l
  },
  ConductingEquipment: {
    edit: hp,
    create: mp
  },
  ConfDataSet: {
    edit: l,
    create: l
  },
  ConfLdName: {
    edit: l,
    create: l
  },
  ConfLNs: {
    edit: l,
    create: l
  },
  ConfLogControl: {
    edit: l,
    create: l
  },
  ConfReportControl: {
    edit: l,
    create: l
  },
  ConfSG: {
    edit: l,
    create: l
  },
  ConfSigRef: {
    edit: l,
    create: l
  },
  ConnectedAP: {
    edit: l,
    create: l
  },
  ConnectivityNode: {
    edit: kl,
    create: l
  },
  DA: {
    edit: Ym,
    create: l
  },
  DAI: {
    edit: nh,
    create: l
  },
  DAType: {
    edit: l,
    create: l
  },
  DO: {
    edit: l,
    create: l
  },
  DOI: {
    edit: l,
    create: l
  },
  DOType: {
    edit: l,
    create: l
  },
  DataObjectDirectory: {
    edit: l,
    create: l
  },
  DataSet: {
    edit: l,
    create: l
  },
  DataSetDirectory: {
    edit: l,
    create: l
  },
  DataTypeTemplates: {
    edit: l,
    create: l
  },
  DynAssociation: {
    edit: l,
    create: l
  },
  DynDataSet: {
    edit: l,
    create: l
  },
  EnumType: {
    edit: l,
    create: l
  },
  EnumVal: {
    edit: l,
    create: l
  },
  EqFunction: {
    edit: Th,
    create: kh
  },
  EqSubFunction: {
    edit: Sh,
    create: Ch
  },
  ExtRef: {
    edit: l,
    create: l
  },
  FCDA: {
    edit: l,
    create: Nl
  },
  FileHandling: {
    edit: l,
    create: l
  },
  Function: {
    edit: vh,
    create: _h
  },
  GeneralEquipment: {
    edit: Qh,
    create: ef
  },
  GetCBValues: {
    edit: l,
    create: l
  },
  GetDataObjectDefinition: {
    edit: l,
    create: l
  },
  GetDataSetValue: {
    edit: l,
    create: l
  },
  GetDirectory: {
    edit: l,
    create: l
  },
  GOOSE: {
    edit: l,
    create: l
  },
  GOOSESecurity: {
    edit: l,
    create: l
  },
  GSE: {
    edit: l,
    create: l
  },
  GSEDir: {
    edit: l,
    create: l
  },
  GSEControl: {
    edit: xh,
    create: l
  },
  GSESettings: {
    edit: l,
    create: l
  },
  GSSE: {
    edit: l,
    create: l
  },
  Header: {
    edit: l,
    create: l
  },
  History: {
    edit: l,
    create: l
  },
  Hitem: {
    edit: l,
    create: l
  },
  IED: {
    edit: Nm,
    create: l
  },
  IEDName: {
    edit: l,
    create: l
  },
  Inputs: {
    edit: l,
    create: l
  },
  IssuerName: {
    edit: l,
    create: l
  },
  KDC: {
    edit: l,
    create: l
  },
  LDevice: {
    edit: Mm,
    create: l
  },
  LN: {
    edit: wf,
    create: l
  },
  LN0: {
    edit: Sf,
    create: l
  },
  LNode: {
    edit: Wp,
    create: Hp
  },
  LNodeType: {
    edit: l,
    create: l
  },
  Line: {
    edit: hf,
    create: mf
  },
  Log: {
    edit: l,
    create: l
  },
  LogControl: {
    edit: l,
    create: l
  },
  LogSettings: {
    edit: l,
    create: l
  },
  MaxTime: {
    edit: l,
    create: l
  },
  McSecurity: {
    edit: l,
    create: l
  },
  MinTime: {
    edit: l,
    create: l
  },
  NeutralPoint: {
    edit: l,
    create: l
  },
  OptFields: {
    edit: Xp,
    create: l
  },
  P: {
    edit: l,
    create: l
  },
  PhysConn: {
    edit: l,
    create: l
  },
  PowerTransformer: {
    edit: fm,
    create: hm
  },
  Private: {
    edit: l,
    create: l
  },
  Process: {
    edit: xf,
    create: gf
  },
  ProtNs: {
    edit: l,
    create: l
  },
  Protocol: {
    edit: l,
    create: l
  },
  ReadWrite: {
    edit: l,
    create: l
  },
  RedProt: {
    edit: l,
    create: l
  },
  ReportControl: {
    edit: l,
    create: l
  },
  ReportSettings: {
    edit: l,
    create: l
  },
  RptEnabled: {
    edit: l,
    create: l
  },
  SamplesPerSec: {
    edit: l,
    create: l
  },
  SampledValueControl: {
    edit: jh,
    create: l
  },
  SecPerSamples: {
    edit: l,
    create: l
  },
  SCL: {
    edit: l,
    create: l
  },
  SDI: {
    edit: l,
    create: l
  },
  SDO: {
    edit: l,
    create: l
  },
  Server: {
    edit: l,
    create: l
  },
  ServerAt: {
    edit: l,
    create: l
  },
  Services: {
    edit: l,
    create: l
  },
  SetDataSetValue: {
    edit: l,
    create: l
  },
  SettingControl: {
    edit: l,
    create: l
  },
  SettingGroups: {
    edit: l,
    create: l
  },
  SGEdit: {
    edit: l,
    create: l
  },
  SmpRate: {
    edit: l,
    create: l
  },
  SMV: {
    edit: l,
    create: l
  },
  SmvOpts: {
    edit: l,
    create: l
  },
  SMVsc: {
    edit: l,
    create: l
  },
  SMVSecurity: {
    edit: l,
    create: l
  },
  SMVSettings: {
    edit: l,
    create: l
  },
  SubEquipment: {
    edit: Zh,
    create: Yh
  },
  SubFunction: {
    edit: Nh,
    create: zh
  },
  SubNetwork: {
    edit: ym,
    create: l
  },
  Subject: {
    edit: l,
    create: l
  },
  Substation: {
    edit: am,
    create: om
  },
  SupSubscription: {
    edit: l,
    create: l
  },
  TapChanger: {
    edit: df,
    create: sf
  },
  Terminal: {
    edit: Vl,
    create: l
  },
  Text: {
    edit: l,
    create: l
  },
  TimerActivatedControl: {
    edit: l,
    create: l
  },
  TimeSyncProt: {
    edit: l,
    create: l
  },
  TransformerWinding: {
    edit: af,
    create: rf
  },
  TrgOps: {
    edit: Vm,
    create: l
  },
  Val: {
    edit: l,
    create: l
  },
  ValueHandling: {
    edit: l,
    create: l
  },
  Voltage: {
    edit: l,
    create: l
  },
  VoltageLevel: {
    edit: pm,
    create: sm
  }
};
var Ef = Object.defineProperty, Cf = Object.getOwnPropertyDescriptor, Ot = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Cf(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && Ef(e, i, r), r;
};
function If(t) {
  return t ? oe[t.tagName].children.filter(
    (e) => Ie[e].create !== l
  ) : [];
}
let rt = class extends be {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const t = this.element.getAttribute("name"), e = this.element.getAttribute("desc"), i = this.element.getAttribute("type");
    return `${t}${e ? ` - ${e}` : ""}${i ? ` (${i})` : ""}`;
  }
  openEditWizard() {
    const t = Ie.EqSubFunction.edit(this.element);
    t && this.dispatchEvent(fe(t));
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      it({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(t) {
    const e = Ie[t].create(this.element);
    e && this.dispatchEvent(fe(e));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderLNodes() {
    const t = K(this.element, "LNode");
    return t.length ? d`<div class="container lnode">
          ${t.map(
      (e) => d`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
              ></l-node-editor>`
    )}
        </div>` : d``;
  }
  renderEqSubFunctions() {
    const t = K(
      this.element,
      "EqSubFunction"
    );
    return d` ${t.map(
      (e) => d`<eq-sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
        ></eq-sub-function-editor>`
    )}`;
  }
  renderAddButtons() {
    return If(this.element).map(
      (t) => d`<mwc-list-item value="${t}"
          ><span>${t}</span></mwc-list-item
        >`
    );
  }
  render() {
    return d`<action-pane label="${this.header}" icon="functions" secondary
      ><abbr slot="action" title="${u("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" title="${u("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${u("add")}">
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
      ${gn(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderEqSubFunctions()}</action-pane
    >`;
  }
};
rt.styles = ie`
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
Ot([
  f({ attribute: !1 })
], rt.prototype, "doc", 2);
Ot([
  f({ type: Number })
], rt.prototype, "editCount", 2);
Ot([
  f({ attribute: !1 })
], rt.prototype, "element", 2);
Ot([
  f({ type: Boolean })
], rt.prototype, "showfunctions", 2);
Ot([
  N()
], rt.prototype, "header", 1);
Ot([
  R("mwc-menu")
], rt.prototype, "addMenu", 2);
Ot([
  R('mwc-icon-button[icon="playlist_add"]')
], rt.prototype, "addButton", 2);
rt = Ot([
  Z("eq-sub-function-editor")
], rt);
var Tf = Object.defineProperty, $f = Object.getOwnPropertyDescriptor, Mt = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? $f(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && Tf(e, i, r), r;
};
function kf(t) {
  return t ? oe[t.tagName].children.filter(
    (e) => Ie[e].create !== l
  ) : [];
}
let ot = class extends be {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const t = this.element.getAttribute("name"), e = this.element.getAttribute("desc"), i = this.element.getAttribute("type");
    return `${t}${e ? ` - ${e}` : ""}${i ? ` (${i})` : ""}`;
  }
  openEditWizard() {
    const t = Ie.EqFunction.edit(this.element);
    t && this.dispatchEvent(fe(t));
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      it({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(t) {
    const e = Ie[t].create(this.element);
    e && this.dispatchEvent(fe(e));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderLNodes() {
    const t = K(this.element, "LNode");
    return t.length ? d`<div class="container lnode">
          ${t.map(
      (e) => d`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
              ></l-node-editor>`
    )}
        </div>` : d``;
  }
  renderEqSubFunctions() {
    const t = K(
      this.element,
      "EqSubFunction"
    );
    return d` ${t.map(
      (e) => d`<eq-sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
          ?showfunctions=${this.showfunctions}
        ></eq-sub-function-editor>`
    )}`;
  }
  renderAddButtons() {
    return kf(this.element).map(
      (t) => d`<mwc-list-item value="${t}"
          ><span>${t}</span></mwc-list-item
        >`
    );
  }
  render() {
    return d`<action-pane
      label="${this.header}"
      icon="functions"
      secondary
      highlighted
      ><abbr slot="action" title="${u("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" title="${u("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${u("add")}">
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
      ${gn(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderEqSubFunctions()}</action-pane
    >`;
  }
};
ot.styles = ie`
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
Mt([
  f({ attribute: !1 })
], ot.prototype, "doc", 2);
Mt([
  f({ type: Number })
], ot.prototype, "editCount", 2);
Mt([
  f({ attribute: !1 })
], ot.prototype, "element", 2);
Mt([
  f({ type: Boolean })
], ot.prototype, "showfunctions", 2);
Mt([
  N()
], ot.prototype, "header", 1);
Mt([
  R("mwc-menu")
], ot.prototype, "addMenu", 2);
Mt([
  R('mwc-icon-button[icon="playlist_add"]')
], ot.prototype, "addButton", 2);
ot = Mt([
  Z("eq-function-editor")
], ot);
var Lf = Object.defineProperty, Nf = Object.getOwnPropertyDescriptor, bi = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Nf(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && Lf(e, i, r), r;
};
let Lt = class extends be {
  constructor() {
    super(...arguments), this.secondary = !1, this.highlighted = !1, this.hideActions = !1;
  }
  async firstUpdated() {
    this.tabIndex = 0;
  }
  renderIcon() {
    return d`<span>
      <slot name="icon"
        >${this.icon ? d`<mwc-icon>${this.icon}</mwc-icon>` : Ve}</slot
      ></span
    > `;
  }
  render() {
    return d`<header>${this.label ?? Ve}</header>
      <section>${this.renderIcon()}<slot name="action"></slot></section>
      <footer>${this.label ?? Ve}</footer>`;
  }
};
Lt.styles = ie`
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
bi([
  f({ type: String })
], Lt.prototype, "label", 2);
bi([
  f({ type: String })
], Lt.prototype, "icon", 2);
bi([
  f({ type: Boolean })
], Lt.prototype, "secondary", 2);
bi([
  f({ type: Boolean })
], Lt.prototype, "highlighted", 2);
bi([
  f({ type: Boolean })
], Lt.prototype, "hideActions", 2);
Lt = bi([
  Z("action-icon")
], Lt);
const ic = F`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Rf = F`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H13A2,2 0 0,1 15,9V17H13V13H11V17H9V9A2,2 0 0,1 11,7M11,9V11H13V9H11M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
</svg>`, zf = F`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H13A2,2 0 0,1 15,9V10H13V9H11V15H13V14H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Df = F`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15V9H11V11H14V13H11V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Of = F`<svg  viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Mf = F`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M14,7V9H13V15H14V17H10V15H11V9H10V7H14M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Pf = F`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M9,7H11V10.33L13,7H15L12,12L15,17H13L11,13.67V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Ff = F`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15A2,2 0 0,1 17,9V17H15V9H13V16H11V9H9V17H7V9A2,2 0 0,1 9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Vf = F`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11A2,2 0 0,1 13,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Bf = F`<svg  viewBox="0 0 24 24">
    <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,7H13A2,2 0 0,1 15,9V15A2,2 0 0,1 13,17V19H11V17A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M11,9V15H13V9H11Z" />
</svg>`, Hf = F`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,16.41 7.58,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, qf = F`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Uf = F`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15V9H13V17H11V9H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Wf = F`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H11L12,9.5L13,7H15L13,12L15,17H13L12,14.5L11,17H9L11,12L9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Gf = F`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H11L12,10L13,7H15L13,13V17H11V13L9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, jf = F`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15V9L11,15H15V17H9V15L13,9H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
var Xf = Object.defineProperty, Zf = Object.getOwnPropertyDescriptor, gi = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Zf(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && Xf(e, i, r), r;
};
function Kf(t) {
  const e = t.getAttribute("lnClass")?.charAt(0) ?? "";
  return Yf[e] ?? ic;
}
const Yf = {
  L: ic,
  A: Rf,
  C: zf,
  F: Df,
  G: Of,
  I: Mf,
  K: Pf,
  M: Ff,
  P: Vf,
  Q: Bf,
  R: Hf,
  S: qf,
  T: Uf,
  X: Wf,
  Y: Gf,
  Z: jf
};
let Yt = class extends be {
  get header() {
    const t = this.element.getAttribute("prefix") ?? "", e = this.element.getAttribute("lnClass"), i = this.element.getAttribute("lnInst"), n = this.missingIedReference ? `${t} ${e} ${i}` : V(this.element);
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
    const e = vl(this.element.parentElement)(
      t
    );
    if (!e) return;
    const i = X(this.element, { lnInst: e });
    this.dispatchEvent(
      it({
        new: { parent: this.element.parentElement, element: i }
      })
    );
  }
  openEditWizard() {
    const t = Ie.LNode.edit(this.element);
    t && this.dispatchEvent(fe(t));
  }
  remove() {
    this.element && this.dispatchEvent(
      it({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  render() {
    return d`<action-icon
      label="${this.header}"
      ?secondary=${this.missingIedReference}
      ?highlighted=${this.missingIedReference}
      ><mwc-icon slot="icon">${Kf(this.element)}</mwc-icon
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
      >${this.isIEDReference ? d`` : d`<mwc-fab
            slot="action"
            mini
            icon="content_copy"
            @click=${() => this.cloneLNodeElement()}
          ></mwc-fab>`}
    </action-icon>`;
  }
};
gi([
  f({ attribute: !1 })
], Yt.prototype, "doc", 2);
gi([
  f({ attribute: !1 })
], Yt.prototype, "element", 2);
gi([
  N()
], Yt.prototype, "header", 1);
gi([
  N()
], Yt.prototype, "missingIedReference", 1);
gi([
  N()
], Yt.prototype, "isIEDReference", 1);
Yt = gi([
  Z("l-node-editor")
], Yt);
const nc = d`<svg
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
</svg>`, Vi = {
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
F`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Vi.gooseIcon}</svg>`;
F`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Vi.reportIcon}</svg>`;
F`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Vi.smvIcon}</svg>`;
F`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Vi.logIcon}</svg>`;
F`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z" />
</svg>`;
F`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M21,14V4H3V14H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M4,5H15V10H4V5M16,5H20V7H16V5M20,8V13H16V8H20M4,11H9V13H4V11M10,11H15V13H10V11Z" />
</svg>`;
F`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4,1C2.89,1 2,1.89 2,3V7C2,8.11 2.89,9 4,9H1V11H13V9H10C11.11,9 12,8.11 12,7V3C12,1.89 11.11,1 10,1H4M4,3H10V7H4V3M14,13C12.89,13 12,13.89 12,15V19C12,20.11 12.89,21 14,21H11V23H23V21H20C21.11,21 22,20.11 22,19V15C22,13.89 21.11,13 20,13H14M3.88,13.46L2.46,14.88L4.59,17L2.46,19.12L3.88,20.54L6,18.41L8.12,20.54L9.54,19.12L7.41,17L9.54,14.88L8.12,13.46L6,15.59L3.88,13.46M14,15H20V19H14V15Z" />
</svg>`;
const ka = {
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
cn("dAIcon"), cn("dOIcon"), cn("enumIcon"), cn("lNIcon");
function cn(t) {
  if (t === "reset") return d``;
  const e = ka[t]?.height ?? 24, i = ka[t]?.width ?? 24;
  return d`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${e}"
    viewBox="0 0 ${i} ${e}"
    width="${i}"
  >
    ${Vi[t]}
  </svg> `;
}
d`<svg
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
d`<svg
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
d`<svg
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
d`<svg
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
const Qf = d`<svg
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
</svg>`, Jf = d`<svg
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
</svg>`, eb = d`<svg
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
</svg>`, tb = d`<svg
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
</svg>`, ib = d`<svg
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
</svg>`, rc = d`<svg
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
</svg>`, nb = d`<svg
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
</svg>`, rb = d`<svg
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
d` <svg
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
var ob = Object.defineProperty, ab = Object.getOwnPropertyDescriptor, Pt = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? ab(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && ob(e, i, r), r;
};
function lb(t) {
  return t ? oe[t.tagName].children.filter(
    (e) => Ie[e].create !== l
  ) : [];
}
let at = class extends be {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const t = this.element.getAttribute("name") ?? "", e = this.element.getAttribute("desc");
    return this.showfunctions ? `${t} ${e ? `—  ${e}` : ""}` : `${t}`;
  }
  openEditWizard() {
    const t = Ie.GeneralEquipment.edit(this.element);
    t && this.dispatchEvent(fe(t));
  }
  openCreateWizard(t) {
    const e = Ie[t].create(this.element);
    e && this.dispatchEvent(fe(e));
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      it({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  renderLNodes() {
    const t = K(this.element, "LNode");
    return t.length ? d`<div class="container lnode">
          ${t.map(
      (e) => d`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
              ></l-node-editor>`
    )}
        </div>` : d``;
  }
  renderEqFunctions() {
    const t = K(this.element, "EqFunction");
    return t.length ? d`${t.map(
      (e) => d` <eq-function-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${e}
            ></eq-function-editor>`
    )}` : d``;
  }
  renderAddButtons() {
    return lb(this.element).map(
      (t) => d`<mwc-list-item value="${t}"
          ><span>${t}</span></mwc-list-item
        >`
    );
  }
  render() {
    return this.showfunctions ? d`<action-pane label=${this.header}>
        <abbr slot="action" title="${u("edit")}">
          <mwc-icon-button
            icon="edit"
            @click=${() => this.openEditWizard()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${u("remove")}">
          <mwc-icon-button
            icon="delete"
            @click=${() => this.remove()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" style="position:relative;" title="${u("add")}">
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
      </action-pane>` : d`<action-icon label=${this.header}>
      <mwc-icon slot="icon">${rc}</mwc-icon>
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
at.styles = ie`
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
Pt([
  f({ attribute: !1 })
], at.prototype, "doc", 2);
Pt([
  f({ type: Number })
], at.prototype, "editCount", 2);
Pt([
  f({ attribute: !1 })
], at.prototype, "element", 2);
Pt([
  f({ type: Boolean })
], at.prototype, "showfunctions", 2);
Pt([
  N()
], at.prototype, "header", 1);
Pt([
  R("mwc-menu")
], at.prototype, "addMenu", 2);
Pt([
  R('mwc-icon-button[icon="playlist_add"]')
], at.prototype, "addButton", 2);
at = Pt([
  Z("general-equipment-editor")
], at);
var cb = Object.defineProperty, sb = Object.getOwnPropertyDescriptor, Ft = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? sb(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && cb(e, i, r), r;
};
function db(t) {
  return t ? oe[t.tagName].children.filter(
    (e) => Ie[e].create !== l
  ) : [];
}
let lt = class extends be {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const t = this.element.getAttribute("name"), e = this.element.getAttribute("desc"), i = this.element.getAttribute("type");
    return `${t}${e ? ` - ${e}` : ""}${i ? ` (${i})` : ""}`;
  }
  openEditWizard() {
    const t = Ie.SubFunction.edit(this.element);
    t && this.dispatchEvent(fe(t));
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      it({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(t) {
    const e = Ie[t].create(this.element);
    e && this.dispatchEvent(fe(e));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderLNodes() {
    const t = K(this.element, "LNode");
    return t.length ? d`<div class="container lnode">
          ${t.map(
      (e) => d`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
              ></l-node-editor>`
    )}
        </div>` : d``;
  }
  renderSubFunctions() {
    const t = K(this.element, "SubFunction");
    return d` ${t.map(
      (e) => d`<sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
          ?showfunctions=${this.showfunctions}
        ></sub-function-editor>`
    )}`;
  }
  renderAddButtons() {
    return db(this.element).map(
      (t) => d`<mwc-list-item value="${t}"
          ><span>${t}</span></mwc-list-item
        >`
    );
  }
  render() {
    return d`<action-pane label="${this.header}" icon="functions" secondary
      ><abbr slot="action" title="${u("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" title="${u("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${u("add")}">
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
      ${gn(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderSubFunctions()}</action-pane
    >`;
  }
};
lt.styles = ie`
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
Ft([
  f({ attribute: !1 })
], lt.prototype, "doc", 2);
Ft([
  f({ type: Number })
], lt.prototype, "editCount", 2);
Ft([
  f({ attribute: !1 })
], lt.prototype, "element", 2);
Ft([
  f({ type: Boolean })
], lt.prototype, "showfunctions", 2);
Ft([
  N()
], lt.prototype, "header", 1);
Ft([
  R("mwc-menu")
], lt.prototype, "addMenu", 2);
Ft([
  R('mwc-icon-button[icon="playlist_add"]')
], lt.prototype, "addButton", 2);
lt = Ft([
  Z("sub-function-editor")
], lt);
var ub = Object.defineProperty, pb = Object.getOwnPropertyDescriptor, Vt = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? pb(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && ub(e, i, r), r;
};
function mb(t) {
  return t ? oe[t.tagName].children.filter(
    (e) => Ie[e].create !== l
  ) : [];
}
let ct = class extends be {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const t = this.element.getAttribute("name"), e = this.element.getAttribute("desc"), i = this.element.getAttribute("type");
    return `${t}${e ? ` - ${e}` : ""}${i ? ` (${i})` : ""}`;
  }
  openEditWizard() {
    const t = Ie.Function.edit(this.element);
    t && this.dispatchEvent(fe(t));
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      it({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(t) {
    const e = Ie[t].create(this.element);
    e && this.dispatchEvent(fe(e));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderLNodes() {
    const t = K(this.element, "LNode");
    return t.length ? d`<div class="container lnode">
          ${t.map(
      (e) => d`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
              ></l-node-editor>`
    )}
        </div>` : d``;
  }
  renderSubFunctions() {
    const t = K(this.element, "SubFunction");
    return d` ${t.map(
      (e) => d`<sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${e}
          ?showfunctions=${this.showfunctions}
        ></sub-function-editor>`
    )}`;
  }
  renderAddButtons() {
    return mb(this.element).map(
      (t) => d`<mwc-list-item value="${t}"
          ><span>${t}</span></mwc-list-item
        >`
    );
  }
  render() {
    return d`<action-pane
      label="${this.header}"
      icon="functions"
      secondary
      highlighted
      ><abbr slot="action" title="${u("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" title="${u("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${u("add")}">
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
      ${gn(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderSubFunctions()}</action-pane
    >`;
  }
};
ct.styles = ie`
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
Vt([
  f({ attribute: !1 })
], ct.prototype, "doc", 2);
Vt([
  f({ type: Number })
], ct.prototype, "editCount", 2);
Vt([
  f({ attribute: !1 })
], ct.prototype, "element", 2);
Vt([
  f({ type: Boolean })
], ct.prototype, "showfunctions", 2);
Vt([
  N()
], ct.prototype, "header", 1);
Vt([
  R("mwc-menu")
], ct.prototype, "addMenu", 2);
Vt([
  R('mwc-icon-button[icon="playlist_add"]')
], ct.prototype, "addButton", 2);
ct = Vt([
  Z("function-editor")
], ct);
function hb(t) {
  return fb[Tl(t)] ?? rc;
}
function gn(t, e, i) {
  const n = K(
    e,
    "GeneralEquipment"
  );
  return n.length ? d` <div
        class="${ye({
    content: !0,
    actionicon: !i
  })}"
      >
        ${n.map(
    (r) => d`<general-equipment-editor
              .doc=${t}
              .element=${r}
              ?showfunctions=${i}
            ></general-equipment-editor>`
  )}
      </div>` : d``;
}
const fb = {
  CBR: Jf,
  DIS: Qf,
  CTR: eb,
  VTR: tb,
  ERS: ib
}, bb = [
  ":root",
  "Substation",
  "VoltageLevel",
  "Bay",
  "ConductingEquipment"
];
Object.fromEntries(
  bb.map((t, e, i) => [t, i.slice(0, e + 1).join(" > ")])
);
ie`
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
const si = "http://www.iec.ch/61850/2003/SCLcoordinates", La = 2;
function Ir(t) {
  const e = t.getAttributeNS(si, "x"), i = t.getAttributeNS(si, "y");
  return {
    x: e ? parseInt(e) * La : 0,
    y: i ? parseInt(i) * La : 0
  };
}
function Bi(t) {
  if (!t.parentElement || t.parentElement?.tagName === "SCL")
    return Ir(t);
  const e = Bi(t.parentElement), i = Ir(t);
  return {
    x: e.x + i.x,
    y: e.y + i.y
  };
}
function Na(t) {
  return t.children.length === 1 && t.children[0].tagName === "ConnectivityNode";
}
function gb(t) {
  const e = t?.closest("Substation");
  if (!e) return [];
  const i = mn(t) ?? "", [n, r, o] = i.split("/");
  return Array.from(e.getElementsByTagName("Terminal")).filter(
    (a) => a.getAttribute("connectivityNode") === i && a.getAttribute("cNodeName") === Kt(t) && (!a.hasAttribute("substationName") || a.getAttribute("substationName") === n) && (!a.hasAttribute("voltageLevelName") || a.getAttribute("voltageLevelName") === r) && (!a.hasAttribute("bayName") || a.getAttribute("bayName") === o)
  );
}
function oc(t) {
  if (t.tagName != "ConnectivityNode") return { x: 0, y: 0 };
  const e = t.closest("Substation"), i = mn(t);
  let n = 0, r = 0, o = 0, a = 0;
  return Array.from(
    e.querySelectorAll("ConductingEquipment, PowerTransformer")
  ).filter(
    (c) => c.querySelector(`Terminal[connectivityNode="${i}"]`) != null
  ).forEach((c) => {
    n++;
    const { x: s, y: p } = Bi(c);
    c.parentElement === t.parentElement && (r++, o += s), a += p;
  }), n === 0 ? { x: 0, y: 0 } : n === 1 ? { x: o + 1, y: a + 1 } : {
    x: Math.round(o / r),
    y: Math.round(a / n)
  };
}
function xb(t, e, i) {
  let n = t.parentElement;
  for (; n; ) {
    if (n.contains(e))
      return n;
    n = n.parentElement;
  }
  return i;
}
function yb(t, e) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function vb(t, e) {
  if (t.path.length === 0) return !1;
  const i = t.point.x, n = t.path[t.path.length - 1].x, r = !(i - n), o = !(t.point.x - e.point.x);
  return r !== o;
}
function wb(t) {
  return t.filter((e, i, n) => {
    if (i === 0 || i === n.length - 1) return !0;
    const r = n[i].x - n[i - 1].x !== 0 ? "horizontal" : "vertical", o = n[i + 1].x - n[i].x !== 0 ? "horizontal" : "vertical";
    return r !== o;
  });
}
function _b(t, e, i) {
  const n = i.dist, o = vb(i, t) ? Math.pow(e + 1, 2) : 0;
  if (n + e + o < t.dist) {
    t.dist = n + e + o;
    const a = [...i.path];
    a.push(i.point), t.path = a;
  }
}
function Ab(t) {
  let e = Number.MAX_SAFE_INTEGER, i = null;
  for (const n of t)
    n.dist < e && (e = n.dist, i = n);
  return i;
}
function Sb(t, e) {
  e.dist = 0;
  const i = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
  for (n.add(e); n.size != 0; ) {
    const r = Ab(n);
    n.delete(r);
    for (const o of r.adjacent) {
      const a = t.find(
        (s) => s.point.x === o.point.x && s.point.y === o.point.y
      ), c = o.edgeWeight;
      a && !i.has(a) && (_b(a, c, r), n.add(a));
    }
    i.add(r);
  }
  return [];
}
function ac(t, e) {
  const i = t.map(
    (o) => Math.abs(e.x - o.point.x) + Math.abs(e.y - o.point.y)
  ), n = Math.min(...i), r = i.indexOf(n);
  return t[r];
}
function Eb(t, e) {
  const i = ac(t, e)?.point;
  if (!i) return;
  const n = {
    point: e,
    adjacent: [
      { point: i, edgeWeight: yb(e, i) }
    ],
    dist: Number.MAX_SAFE_INTEGER,
    path: []
  };
  return t.push(n), n;
}
function Cb(t, e, i) {
  const n = Eb(t, e), r = ac(t, i);
  if (!n || !r) return [];
  Sb(t, n);
  const o = r.path.concat(r.point);
  return wb(o).concat([i]);
}
function Ra(t, e, i) {
  return t.find((n) => n.point.x === e && n.point.y === i);
}
function Ib(t, e, i, n) {
  let r, o;
  return n === "prevX" ? (r = e.point.x - i, o = e.point.y) : n === "prevY" ? (r = e.point.x, o = e.point.y - i) : n === "nextX" ? (r = e.point.x + i, o = e.point.y) : (r = e.point.x, o = e.point.y + i), Ra(t, r, o) ? {
    point: Ra(t, r, o).point,
    edgeWeight: i
  } : null;
}
function Tb(t, e) {
  const i = [];
  for (let n = 0; n < t.length; n++)
    for (let r = 0; r < t[n].length; r++)
      t[n][r] === 0 && i.push({
        point: {
          x: r * e + e / 2,
          y: n * e + e / 2
        },
        adjacent: [],
        dist: Number.MAX_SAFE_INTEGER,
        path: []
      });
  for (const n of i) {
    const r = ["prevX", "prevY", "nextX", "nextY"].map((o) => Ib(i, n, e, o)).filter((o) => o);
    n.adjacent = r;
  }
  return i;
}
function $b(t, e, i) {
  const n = t.x > e.x ? t.x : e.x, r = t.y > e.y ? t.y : e.y, o = [];
  for (let a = 0; a <= Math.ceil(r / i) + 1; a++) {
    o[a] = [];
    for (let c = 0; c <= Math.ceil(n / i) + 1; c++)
      o[a][c] = 0;
  }
  return o[Math.floor(t.y / i)][Math.floor(t.x / i)] = 1, o[Math.floor(e.y / i)][Math.floor(e.x / i)] = 1, o;
}
function kb(t, e, i) {
  const n = Math.min(
    Math.floor(t.x / i),
    Math.floor(e.x / i)
  ), r = Math.min(
    Math.floor(t.y / i),
    Math.floor(e.y / i)
  ), o = n > 1 ? n - 1 : 0, a = r > 1 ? r - 1 : 0, c = o * i, s = a * i;
  return [
    { x: t.x - c, y: t.y - s },
    { x: e.x - c, y: e.y - s }
  ];
}
function Lb(t, e, i, n, r) {
  if (e === n && i === r) return t;
  const o = e.x - n.x, a = e.y - n.y;
  return t.map((c) => ({ x: c.x + o, y: c.y + a }));
}
function Nb(t, e, i, n) {
  if (t.x === e.x && t.y === e.y) return [];
  let r = t, o = e;
  n || ([r, o] = kb(t, e, i), n = $b(r, o, i));
  const a = Tb(n, i), c = Cb(a, r, o);
  return Lb(c, t, e, r, o);
}
const Ze = 64, Mi = 50, Tr = 25, Rb = 6;
function Hi(t) {
  const e = Bi(t);
  return {
    x: e.x * Ze + (Ze - Mi) / 2,
    y: e.y * Ze + (Ze - Mi) / 2
  };
}
function lc(t) {
  const e = Bi(t);
  return {
    x: e.x * Ze,
    y: e.y * Ze
  };
}
function cc(t) {
  const e = oc(t);
  return {
    x: e.x * Ze + (Ze - Tr) / 2,
    y: e.y * Ze + (Ze - Tr) / 2
  };
}
function sc(t, e, i, n) {
  const r = n ?? Rb;
  switch (i) {
    case "top": {
      const o = t.x, a = t.y;
      return {
        x: o + e / 2,
        y: a - r
      };
    }
    case "bottom": {
      const o = t.x, a = t.y;
      return {
        x: o + e / 2,
        y: a + (e + r)
      };
    }
    case "left": {
      const o = t.x, a = t.y;
      return {
        x: o - r,
        y: a + e / 2
      };
    }
    case "right": {
      const o = t.x, a = t.y;
      return {
        x: o + (e + r),
        y: a + e / 2
      };
    }
    default:
      return t;
  }
}
function $r(t, e) {
  const i = Hi(t);
  return sc(
    i,
    Mi,
    e
  );
}
function zb(t, e) {
  const i = cc(t);
  return sc(
    i,
    Tr,
    e,
    -8.333333333333334
  );
}
function Bt(t) {
  const e = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "g"
  );
  e.setAttribute(
    "id",
    typeof V(t) == "string" ? V(t) : "unidentifiable"
  ), e.setAttribute("type", t.tagName);
  const i = yr(t);
  i && e.setAttribute("desc", i);
  const n = Ir(t);
  return e.setAttribute("sxy:x", `${n.x}`), e.setAttribute("sxy:y", `${n.y}`), e;
}
function Db(t) {
  return Bt(t);
}
function Ob(t) {
  return Bt(t);
}
function Mb(t) {
  return Bt(t);
}
function Pb(t, e, i) {
  t.querySelectorAll(`g[id="${V(e)}"]`).forEach((n) => {
    const r = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g"
    );
    r.setAttribute("type", "BayLabel"), i && r.addEventListener("click", i), n.prepend(r);
    const o = n.getBBox(), a = xn(
      e.getAttribute("name") || "",
      { x: o.x, y: o.y - 20 },
      "medium"
    );
    r.append(a);
    const c = a.getBBox();
    new DOMParser().parseFromString(
      nc.strings[0],
      "application/xml"
    ).querySelectorAll("circle,path,line").forEach((p) => {
      p.setAttribute(
        "transform",
        `translate(${c.x + c.width + 5},${c.y}) scale(0.75)`
      ), r.append(p);
    });
  });
}
function xn(t, e, i) {
  const n = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );
  return n.textContent = t, n.setAttribute(
    "style",
    `font-family: Roboto, sans-serif; font-weight: 300; font-size: ${i}`
  ), n.setAttribute("x", `${e.x}`), n.setAttribute("y", `${e.y}`), n;
}
function za(t, e, i) {
  const n = Bt(t), r = typeof V(t) == "string" ? V(t) : "unidentifiable", o = t.closest(
    "ConductingEquipment, PowerTransformer"
  ), a = $r(
    o,
    e
  ), c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  return c.setAttribute("id", `${r}`), c.setAttribute("cx", `${a.x}`), c.setAttribute("cy", `${a.y}`), c.setAttribute("r", "2"), n.appendChild(c), i && n.addEventListener("click", i), n;
}
function Fb(t, e) {
  const i = Bt(t);
  i.setAttribute("type", "Busbar");
  const n = lc(t), r = document.createElementNS("http://www.w3.org/2000/svg", "line");
  return r.setAttribute("name", Kt(t)), r.setAttribute("stroke-width", "4"), r.setAttribute("stroke", "currentColor"), r.setAttribute("x1", `${n.x}`), r.setAttribute("y1", `${n.y}`), r.setAttribute("x2", `${e}`), r.setAttribute("y2", `${n.y}`), i.appendChild(r), i;
}
function Vb(t, e, i) {
  t.querySelectorAll(`g[id="${V(e)}"]`).forEach((n) => {
    const r = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g"
    );
    r.setAttribute("type", "BusbarLabel"), i && r.addEventListener("click", i), n.prepend(r);
    const o = n.getBBox(), a = xn(
      e.getAttribute("name") || "",
      { x: o.x, y: o.y - 20 },
      "medium"
    );
    r.append(a);
    const c = a.getBBox();
    new DOMParser().parseFromString(
      nc.strings[0],
      "application/xml"
    ).querySelectorAll("circle,path,line").forEach((p) => {
      p.setAttribute(
        "transform",
        `translate(${c.x + c.width + 5},${c.y}) scale(0.75)`
      ), r.append(p);
    });
  });
}
function Bb(t, e) {
  const i = Bt(t), n = Hi(t);
  new DOMParser().parseFromString(
    hb(t).strings[0],
    "application/xml"
  ).querySelectorAll("circle,path,line").forEach((a) => {
    a.setAttribute(
      "transform",
      `translate(${n.x},${n.y}) scale(${Mi / 25})`
    ), i.appendChild(a);
  });
  const o = xn(
    Kt(t),
    { x: n.x - 15, y: n.y + 30 },
    "x-small"
  );
  return i.appendChild(o), e && i.addEventListener("click", e), i;
}
function Hb(t, e) {
  const i = Bt(t), n = Hi(t);
  new DOMParser().parseFromString(
    rb.strings[0],
    "application/xml"
  ).querySelectorAll("circle,path,line").forEach((a) => {
    a.setAttribute(
      "transform",
      `translate(${n.x},${n.y}) scale(${Mi / 25})`
    ), i.appendChild(a);
  });
  const o = xn(
    Kt(t),
    { x: n.x - 15, y: n.y + 30 },
    "x-small"
  );
  return i.appendChild(o), e && i.addEventListener("click", e), i;
}
function qb(t, e) {
  const i = Bt(t), n = new DOMParser().parseFromString(
    nb.strings[0],
    "application/xml"
  ), r = cc(t);
  return n.querySelectorAll("circle").forEach((o) => {
    o.setAttribute(
      "transform",
      `translate(${r.x},${r.y})`
    ), i.appendChild(o);
  }), e && i.addEventListener("click", e), i;
}
function Ub(t, e, i) {
  const n = Nb(
    e,
    t,
    Ze
  ), r = document.createElementNS("http://www.w3.org/2000/svg", "path");
  let o = "";
  n.forEach(({ x: a, y: c }, s) => {
    s === 0 ? o = o + ` M ${a} ${c}` : o = o + ` L ${a} ${c}`;
  }), r.setAttribute("d", o), r.setAttribute("fill", "transparent"), r.setAttribute("stroke", "currentColor"), r.setAttribute("stroke-width", "1"), i.insertAdjacentElement("afterbegin", r);
}
function Wb(t, e, i) {
  const n = [t].concat([e]), r = document.createElementNS("http://www.w3.org/2000/svg", "path");
  let o = "";
  n.forEach(({ x: a, y: c }, s) => {
    s === 0 ? o = o + ` M ${a} ${c}` : o = o + ` L ${a} ${c}`;
  }), r.setAttribute("d", o), r.setAttribute("fill", "transparent"), r.setAttribute("stroke", "currentColor"), r.setAttribute("stroke-width", "1.5"), i.appendChild(r);
}
function Gb(t, e) {
  const i = Bi(t), n = oc(e);
  return i.y < n.y && i.x < n.x ? { startDirection: "bottom", endDirection: "left" } : i.y < n.y && i.x > n.x ? { startDirection: "bottom", endDirection: "right" } : i.y < n.y && i.x === n.x ? { startDirection: "bottom", endDirection: "top" } : i.y > n.y && i.x < n.x ? { startDirection: "top", endDirection: "left" } : i.y > n.y && i.x > n.x ? { startDirection: "top", endDirection: "right" } : i.y > n.y && i.x === n.x ? { startDirection: "top", endDirection: "bottom" } : i.y === n.y && i.x > n.x ? { startDirection: "left", endDirection: "right" } : i.y === n.y && i.x < n.x ? { startDirection: "right", endDirection: "left" } : { startDirection: "bottom", endDirection: "top" };
}
function jb(t) {
  return Math.max(
    ...Array.from(
      t.querySelectorAll("ConductingEquipment, PowerTransformer")
    ).map((e) => Hi(e).x)
  ) + Ze;
}
function yn(t) {
  return t.getAttribute("name");
}
function vn(t) {
  return t.getAttribute("desc");
}
function wn(t) {
  return t.getAttributeNS(si, "x");
}
function _n(t) {
  return t.getAttributeNS(si, "y");
}
function Da(t) {
  if (t === null)
    return t;
  let e = Number(t);
  return (isNaN(e) || e < 0) && (e = 0), e.toString();
}
function Oa(t, e, i) {
  i === null ? t.removeAttributeNS(si, e) : t.setAttributeNS(si, e, i);
}
function Jr(t) {
  return (e) => {
    const i = y(e.find((c) => c.label === "name")), n = y(e.find((c) => c.label === "desc")), r = y(e.find((c) => c.label === "xCoordinate")), o = y(e.find((c) => c.label === "yCoordinate"));
    if (i === yn(t) && n === vn(t) && r === wn(t) && o === _n(t))
      return [];
    const a = X(t, { name: i, desc: n });
    return Oa(a, "x", Da(r)), Oa(a, "y", Da(o)), [{ old: { element: t }, new: { element: a } }];
  };
}
function eo(t, e) {
  return [
    d`<wizard-textfield
      label="xCoordinate"
      nullable
      .maybeValue=${t}
      helper="${u("sld.wizard.xCoordinateHelper")}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="yCoordinate"
      .maybeValue=${e}
      nullable
      helper="${u("sld.wizard.yCoordinateHelper")}"
    ></wizard-textfield>`
  ];
}
function Xb(t, e, i, n) {
  return Gr(t, e).concat(
    eo(i, n)
  );
}
function Zb(t) {
  return [
    {
      title: u("bay.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: u("save"),
        action: Jr(t)
      },
      content: Xb(
        yn(t),
        vn(t),
        wn(t),
        _n(t)
      )
    }
  ];
}
function Kb(t, e, i, n, r, o, a) {
  return jr(
    t,
    e,
    r,
    o,
    a
  ).concat(eo(i, n));
}
function Yb(t) {
  const e = Xr(
    t.parentNode,
    t.getAttribute("name")
  );
  return [
    {
      title: u("conductingequipment.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: u("save"),
        action: Jr(t)
      },
      content: Kb(
        yn(t),
        vn(t),
        wn(t),
        _n(t),
        "edit",
        $l(t),
        e
      )
    }
  ];
}
function Qb(t, e, i, n, r, o) {
  return Yr(t, e, i, o).concat(
    eo(n, r)
  );
}
function Jb(t) {
  return [
    {
      title: u("powertransformer.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: u("save"),
        action: Jr(t)
      },
      content: Qb(
        yn(t),
        vn(t),
        t.getAttribute("type"),
        wn(t),
        _n(t),
        Qr(t)
      )
    }
  ];
}
const eg = {
  AccessControl: {
    edit: l,
    create: l
  },
  AccessPoint: {
    edit: l,
    create: l
  },
  Address: {
    edit: l,
    create: l
  },
  Association: {
    edit: l,
    create: l
  },
  Authentication: {
    edit: l,
    create: l
  },
  BDA: {
    edit: l,
    create: l
  },
  BitRate: {
    edit: l,
    create: l
  },
  Bay: {
    edit: Zb,
    create: l
  },
  ClientLN: {
    edit: l,
    create: l
  },
  ClientServices: {
    edit: l,
    create: l
  },
  CommProt: {
    edit: l,
    create: l
  },
  Communication: {
    edit: l,
    create: l
  },
  ConductingEquipment: {
    edit: Yb,
    create: l
  },
  ConfDataSet: {
    edit: l,
    create: l
  },
  ConfLdName: {
    edit: l,
    create: l
  },
  ConfLNs: {
    edit: l,
    create: l
  },
  ConfLogControl: {
    edit: l,
    create: l
  },
  ConfReportControl: {
    edit: l,
    create: l
  },
  ConfSG: {
    edit: l,
    create: l
  },
  ConfSigRef: {
    edit: l,
    create: l
  },
  ConnectedAP: {
    edit: l,
    create: l
  },
  ConnectivityNode: {
    edit: kl,
    create: l
  },
  DA: {
    edit: l,
    create: l
  },
  DAI: {
    edit: l,
    create: l
  },
  DAType: {
    edit: l,
    create: l
  },
  DO: {
    edit: l,
    create: l
  },
  DOI: {
    edit: l,
    create: l
  },
  DOType: {
    edit: l,
    create: l
  },
  DataObjectDirectory: {
    edit: l,
    create: l
  },
  DataSet: {
    edit: l,
    create: l
  },
  DataSetDirectory: {
    edit: l,
    create: l
  },
  DataTypeTemplates: {
    edit: l,
    create: l
  },
  DynAssociation: {
    edit: l,
    create: l
  },
  DynDataSet: {
    edit: l,
    create: l
  },
  EnumType: {
    edit: l,
    create: l
  },
  EnumVal: {
    edit: l,
    create: l
  },
  EqFunction: {
    edit: l,
    create: l
  },
  EqSubFunction: {
    edit: l,
    create: l
  },
  ExtRef: {
    edit: l,
    create: l
  },
  FCDA: {
    edit: l,
    create: l
  },
  FileHandling: {
    edit: l,
    create: l
  },
  Function: {
    edit: l,
    create: l
  },
  GeneralEquipment: {
    edit: l,
    create: l
  },
  GetCBValues: {
    edit: l,
    create: l
  },
  GetDataObjectDefinition: {
    edit: l,
    create: l
  },
  GetDataSetValue: {
    edit: l,
    create: l
  },
  GetDirectory: {
    edit: l,
    create: l
  },
  GOOSE: {
    edit: l,
    create: l
  },
  GOOSESecurity: {
    edit: l,
    create: l
  },
  GSE: {
    edit: l,
    create: l
  },
  GSEDir: {
    edit: l,
    create: l
  },
  GSEControl: {
    edit: l,
    create: l
  },
  GSESettings: {
    edit: l,
    create: l
  },
  GSSE: {
    edit: l,
    create: l
  },
  Header: {
    edit: l,
    create: l
  },
  History: {
    edit: l,
    create: l
  },
  Hitem: {
    edit: l,
    create: l
  },
  IED: {
    edit: l,
    create: l
  },
  IEDName: {
    edit: l,
    create: l
  },
  Inputs: {
    edit: l,
    create: l
  },
  IssuerName: {
    edit: l,
    create: l
  },
  KDC: {
    edit: l,
    create: l
  },
  LDevice: {
    edit: l,
    create: l
  },
  LN: {
    edit: l,
    create: l
  },
  LN0: {
    edit: l,
    create: l
  },
  LNode: {
    edit: l,
    create: l
  },
  LNodeType: {
    edit: l,
    create: l
  },
  Line: {
    edit: l,
    create: l
  },
  Log: {
    edit: l,
    create: l
  },
  LogControl: {
    edit: l,
    create: l
  },
  LogSettings: {
    edit: l,
    create: l
  },
  MaxTime: {
    edit: l,
    create: l
  },
  McSecurity: {
    edit: l,
    create: l
  },
  MinTime: {
    edit: l,
    create: l
  },
  NeutralPoint: {
    edit: l,
    create: l
  },
  OptFields: {
    edit: l,
    create: l
  },
  P: {
    edit: l,
    create: l
  },
  PhysConn: {
    edit: l,
    create: l
  },
  PowerTransformer: {
    edit: Jb,
    create: l
  },
  Private: {
    edit: l,
    create: l
  },
  Process: {
    edit: l,
    create: l
  },
  ProtNs: {
    edit: l,
    create: l
  },
  Protocol: {
    edit: l,
    create: l
  },
  ReadWrite: {
    edit: l,
    create: l
  },
  RedProt: {
    edit: l,
    create: l
  },
  ReportControl: {
    edit: l,
    create: l
  },
  ReportSettings: {
    edit: l,
    create: l
  },
  RptEnabled: {
    edit: l,
    create: l
  },
  SamplesPerSec: {
    edit: l,
    create: l
  },
  SampledValueControl: {
    edit: l,
    create: l
  },
  SecPerSamples: {
    edit: l,
    create: l
  },
  SCL: {
    edit: l,
    create: l
  },
  SDI: {
    edit: l,
    create: l
  },
  SDO: {
    edit: l,
    create: l
  },
  Server: {
    edit: l,
    create: l
  },
  ServerAt: {
    edit: l,
    create: l
  },
  Services: {
    edit: l,
    create: l
  },
  SetDataSetValue: {
    edit: l,
    create: l
  },
  SettingControl: {
    edit: l,
    create: l
  },
  SettingGroups: {
    edit: l,
    create: l
  },
  SGEdit: {
    edit: l,
    create: l
  },
  SmpRate: {
    edit: l,
    create: l
  },
  SMV: {
    edit: l,
    create: l
  },
  SmvOpts: {
    edit: l,
    create: l
  },
  SMVsc: {
    edit: l,
    create: l
  },
  SMVSecurity: {
    edit: l,
    create: l
  },
  SMVSettings: {
    edit: l,
    create: l
  },
  SubEquipment: {
    edit: l,
    create: l
  },
  SubFunction: {
    edit: l,
    create: l
  },
  SubNetwork: {
    edit: l,
    create: l
  },
  Subject: {
    edit: l,
    create: l
  },
  Substation: {
    edit: l,
    create: l
  },
  SupSubscription: {
    edit: l,
    create: l
  },
  TapChanger: {
    edit: l,
    create: l
  },
  Terminal: {
    edit: Vl,
    create: l
  },
  Text: {
    edit: l,
    create: l
  },
  TimerActivatedControl: {
    edit: l,
    create: l
  },
  TimeSyncProt: {
    edit: l,
    create: l
  },
  TransformerWinding: {
    edit: l,
    create: l
  },
  TrgOps: {
    edit: l,
    create: l
  },
  Val: {
    edit: l,
    create: l
  },
  ValueHandling: {
    edit: l,
    create: l
  },
  Voltage: {
    edit: l,
    create: l
  },
  VoltageLevel: {
    edit: l,
    create: l
  }
};
var tg = Object.defineProperty, ig = Object.getOwnPropertyDescriptor, An = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? ig(e, i) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (n ? a(e, i, r) : a(r)) || r);
  return n && r && tg(e, i, r), r;
};
let Li;
function ng() {
  Li = void 0;
}
addEventListener("open-doc", ng);
class Sn extends be {
  get substations() {
    return this.doc ? Array.from(this.doc.querySelectorAll(":root > Substation")).sort(
      (e, i) => xl(e, i)
    ) : [];
  }
  set selectedSubstation(e) {
    Li = e;
  }
  get selectedSubstation() {
    if (Li === void 0) {
      const e = this.substations;
      e.length > 0 && (Li = e[0]);
    }
    return Li;
  }
  /**
   * Get all the Power Transformers from an element.
   */
  getPowerTransformers(e) {
    return Array.from(
      e.querySelectorAll("PowerTransformer")
    ).filter(jt);
  }
  /**
   * Get all the Voltage Levels from the substation.
   */
  getVoltageLevels(e) {
    return Array.from(
      e.querySelectorAll("VoltageLevel")
    ).filter(jt);
  }
  /**
   * Get all the BusBars from the voltage level.
   */
  getBusBars(e) {
    return Array.from(e.querySelectorAll("Bay")).filter(jt).filter((i) => Na(i));
  }
  /**
   * Get all the bays from the voltage level.
   */
  getBays(e) {
    return Array.from(e.querySelectorAll("Bay")).filter(jt).filter((i) => !Na(i));
  }
  /**
   * Get all the Conducting Equipment from a Bay.
   * @param bayElement - The Bay to search in.
   */
  getConductingEquipments(e) {
    return Array.from(
      e.querySelectorAll("ConductingEquipment")
    ).filter(jt);
  }
  /**
   * Get all the Connectivity Nodes from a Bay/Busbar.
   * @param bayElement - The Bay/Busbar to search in.
   */
  getConnectivityNode(e) {
    return Array.from(e.querySelectorAll("ConnectivityNode")).filter(jt).filter((i) => i.getAttribute("name") !== "grounded");
  }
  /**
   * Search for Equipment (ConductionEquipment or PowerTransformer) which has a terminal wth a connectivityNode
   * tha is the same as the passed pathName.
   * @param parentElement - The Element to search in for Equipment.
   * @param pathName      - The PathName to search for in the Terminal.
   */
  findEquipment(e, i) {
    return Array.from(
      e.querySelectorAll("ConductingEquipment, PowerTransformer")
    ).filter(jt).filter(
      (n) => n.querySelector(`Terminal[connectivityNode="${i}"]`)
    );
  }
  /**
   * Draw all equipment and connections of the selected Substation.
   */
  drawSubstation(e) {
    const i = Db(e);
    this.svg.appendChild(i), this.drawPowerTransformers(e, i), this.drawVoltageLevels(e, i);
  }
  /**
   * Draw all available `PowerTransformer`s of passed parent element.
   * Should only be a <g> element.
   * @param parentElement - The parent element to search for PowerTransformers.
   * @param parentGroup   - The SVG Group to which to add the PowerTransformer.
   */
  drawPowerTransformers(e, i) {
    this.getPowerTransformers(e).forEach(
      (n) => this.drawPowerTransformer(i, n)
    );
  }
  /**
   * Draw an SVG from the passed PowerTransformer Element.
   * Should only be a <g> element.
   * @param parentGroup             - The SVG Group to which to add the PowerTransformer.
   * @param powerTransformerElement - The PowerTransformer to draw.
   */
  drawPowerTransformer(e, i) {
    const n = Hb(
      i,
      (r) => this.openEditWizard(r, i)
    );
    e.appendChild(n);
  }
  /**
   * Draw all available Voltage Levels of the passed Substation Element.
   * Should only be a <g> element.
   *  @param substationElement - The substation containing the voltage levels.
   *  @param substationGroup   - The group to which to add the SVGs.
   */
  drawVoltageLevels(e, i) {
    this.getVoltageLevels(e).forEach((n) => {
      const r = Ob(n);
      i.appendChild(r), this.drawPowerTransformers(n, r), this.drawBays(n, r), this.drawBusBars(n, r);
    }), this.getVoltageLevels(e).forEach((n) => {
      this.getBusBars(n).forEach((r) => {
        this.drawBusBarConnections(e, this.svg, r), Vb(
          this.svg,
          r,
          (o) => this.openEditWizard(o, r)
        );
      }), this.getBays(n).forEach((r) => {
        this.drawBayConnections(e, this.svg, r), Pb(
          this.svg,
          r,
          (o) => this.openEditWizard(o, r)
        );
      });
    });
  }
  /**
   * Draw all available Bays of the passed Voltage Level Element.
   * Should only be a <g> element.
   * @param voltageLevelElement - The Voltage Level containing the bays.
   * @param voltageLevelGroup   - The group to which to add the SVGs.
   * */
  drawBays(e, i) {
    this.getBays(e).forEach((n) => {
      const r = Mb(n);
      i.appendChild(r), this.drawPowerTransformers(n, r), this.drawConductingEquipments(n, r), this.drawConnectivityNodes(n, r);
    });
  }
  /**
   * Draw all available Conducting Equipments of the passed Bay Element.
   * Should only be a <g> element.
   * @param bayElement - The Bay containing the Conducting Equipment.
   * @param bayGroup   - The group to which to add the SVGs.
   */
  drawConductingEquipments(e, i) {
    this.getConductingEquipments(e).filter(
      (n) => Array.from(
        n.querySelectorAll("Terminal")
      ).filter(
        (r) => r.getAttribute("cNodeName") !== "grounded"
      ).length !== 0
    ).forEach((n) => {
      const r = Bb(
        n,
        (o) => this.openEditWizard(o, n)
      );
      i.appendChild(r);
    });
  }
  /**
   * Draw all available Connectivity Nodes of the passed Bay Element.
   * @param bayElement - The Bay containing the Connectivity Nodes.
   * @param bayGroup   - The group to which to add the SVGs.
   * */
  drawConnectivityNodes(e, i) {
    this.getConnectivityNode(e).filter((n) => gb(n).length > 0).forEach((n) => {
      const r = qb(
        n,
        (o) => this.openEditWizard(o, n)
      );
      i.appendChild(r);
    });
  }
  /**
   * Draw all connections between the different Equipment in the Bay and the Bay has with other Equipment outside
   * the bay.
   * @param rootElement - The Element containing all the other elements to which the Bay is connected.
   * @param rootGroup   - The SVG Element that contains all groups from the elements to add path to.
   * @param bayElement  - The Bay that holds the Connectivity Node to connect with.
   */
  drawBayConnections(e, i, n) {
    this.getConnectivityNode(n).forEach((r) => {
      this.findEquipment(e, mn(r)).forEach(
        (o) => {
          const a = xb(
            r,
            o,
            n
          ), c = Gb(o, r), s = $r(
            o,
            c.startDirection
          ), p = zb(
            r,
            c.endDirection
          );
          i.querySelectorAll(`g[id="${V(a)}"]`).forEach(
            (x) => Ub(
              p,
              s,
              x
            )
          );
          const h = o.querySelector(
            `Terminal[connectivityNode="${r.getAttribute("pathName")}"]`
          ), b = za(
            h,
            c.startDirection,
            (x) => this.openEditWizard(x, h)
          );
          i.querySelectorAll(`g[id="${V(o)}"]`).forEach((x) => x.appendChild(b));
        }
      );
    });
  }
  /**
   * Draw all available Busbars of the passed Voltage Level Element.
   * @param voltageLevelElement - The Voltage Level containing the Busbars.
   * @param voltageLevelGroup   - The group to which to add the SVGs.
   */
  drawBusBars(e, i) {
    this.getBusBars(e).forEach((n) => {
      const r = Fb(
        n,
        jb(e)
      );
      i.appendChild(r);
    });
  }
  /**
   * Draw all the connections a Busbar has with other Equipment.
   * @param rootElement   - The Element containing all the other elements to which the Busbar is connected.
   * @param rootGroup     - The SVG Element that contains all groups from the elements to add path to.
   * @param busbarElement - The Busbar that holds the Connectivity Node to connect with.
   */
  drawBusBarConnections(e, i, n) {
    const r = mn(n.children[0]), o = lc(n);
    this.findEquipment(e, r).forEach((a) => {
      const c = a.parentElement, s = Hi(a), p = o.y < s.y ? "top" : "bottom", h = $r(
        a,
        p
      ), b = {
        x: h.x,
        y: o.y
      }, x = a.querySelector(
        `Terminal[connectivityNode="${r}"]`
      );
      i.querySelectorAll(`g[id="${V(c)}"]`).forEach(
        (_) => Wb(
          b,
          h,
          _
        )
      );
      const v = za(
        x,
        p,
        (_) => this.openEditWizard(_, x)
      );
      i.querySelectorAll(`g[id="${V(a)}"]`).forEach((_) => _.appendChild(v));
    });
  }
  /**
   * Remove all the child elements (and descendants) from the SVG Element, to have a clean start.
   */
  clearSVG() {
    for (; this.svg.firstChild; )
      this.svg.removeChild(this.svg.lastChild);
  }
  /**
   * Draw all the elements of the selected Substation.
   */
  drawSVGElements() {
    this.clearSVG();
    const e = this.selectedSubstation;
    if (e) {
      this.drawSubstation(e);
      const i = this.svg.getBBox();
      this.svg.setAttribute(
        "viewBox",
        i.x - 10 + " " + (i.y - 10) + " " + (i.width + 20) + " " + (i.height + 20)
      ), this.svg.setAttribute("width", i.width + 20 + "px"), this.svg.setAttribute("height", i.height + 20 + "px"), vs(this.panzoomContainer, {
        zoomSpeed: 0.2,
        maxZoom: 1.5,
        minZoom: 0.2,
        initialZoom: 0.5
      });
    }
  }
  /**
   * Open an Edit wizard for an element.
   * @param element - The element to show the wizard for.
   */
  openEditWizard(e, i) {
    const n = eg[i.tagName].edit(i);
    n && (this.dispatchEvent(fe(n)), e.stopPropagation());
  }
  updated(e) {
    super.updated(e), (e.has("doc") || e.has("selectedSubstation")) && this.drawSVGElements();
  }
  onSelect(e) {
    this.selectedSubstation = this.substations[e.detail.index], this.requestUpdate("selectedSubstation");
  }
  renderSubstationSelector() {
    const e = this.substations;
    if (e.length > 0) {
      if (e.length > 1)
        return d`
          <mwc-select
            id="substationSelector"
            label="${u("sld.substationSelector")}"
            @selected=${this.onSelect}
          >
            ${e.map((o) => {
          const a = Kt(o), c = yr(o);
          return d` <mwc-list-item
                value="${a}"
                ?selected=${o == this.selectedSubstation}
              >
                ${a}${c !== void 0 ? " (" + c + ")" : ""}
              </mwc-list-item>`;
        })}
          </mwc-select>
        `;
      const i = this.selectedSubstation, n = Kt(i), r = yr(i);
      return d`
        <mwc-textfield
          label="${u("substation.name")}"
          value="${n}${r !== void 0 ? " (" + r + ")" : ""}"
          id="selectedSubstation"
          readonly
          disabled
        >
        </mwc-textfield>
      `;
    }
    return d`
      <h1>
        <span id="noSubstationSelector">${u("substation.missing")}</span>
      </h1>
    `;
  }
  render() {
    return d` ${this.renderSubstationSelector()}

      <div class="sldContainer">
        <div id="panzoom">
          <svg xmlns="http://www.w3.org/2000/svg" id="svg"></svg>
        </div>
      </div>`;
  }
  static {
    this.styles = ie`
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

    #substationSelector,
    #selectedSubstation {
      width: 35vw;
      margin: 0.67em 0 0 0.67em;
    }

    #noSubstationSelector {
      color: var(--base1);
    }

    .sldContainer {
      overflow: hidden;
    }

    g {
      pointer-events: bounding-box;
    }

    g[type='Bay'] > g[type='BayLabel'] {
      visibility: hidden;
    }
    g[type='Bay']:hover > g[type='BayLabel'] {
      visibility: visible;
    }

    g[type='Busbar'] > g[type='BusbarLabel'] {
      visibility: hidden;
    }
    g[type='Busbar'] > g[type='BusbarLabel'] > text,
    g[type='Busbar']:hover > g[type='BusbarLabel'] {
      visibility: visible;
    }

    g[type='Bay']:hover,
    g[type='Busbar']:hover,
    g[type='ConductingEquipment']:hover,
    g[type='ConnectivityNode']:hover,
    g[type='PowerTransformer']:hover,
    g[type='Terminal']:hover {
      outline: 2px dashed var(--mdc-theme-primary);
      transition: transform 200ms linear, box-shadow 250ms linear;
    }
  `;
  }
}
An([
  f({ attribute: !1 })
], Sn.prototype, "doc", 2);
An([
  R("#panzoom")
], Sn.prototype, "panzoomContainer", 2);
An([
  R("#svg")
], Sn.prototype, "svg", 2);
An([
  N()
], Sn.prototype, "selectedSubstation", 1);
export {
  Sn as default
};
