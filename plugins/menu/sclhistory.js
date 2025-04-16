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
const at = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, We = (r, e, t = null) => {
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
const K = `{{lit-${String(Math.random()).slice(2)}}}`, At = `<!--${K}-->`, st = new RegExp(`${K}|${At}`), ce = "$lit$";
class Ct {
  constructor(e, t) {
    this.parts = [], this.element = t;
    const i = [], n = [], o = document.createTreeWalker(t.content, 133, null, !1);
    let a = 0, s = -1, l = 0;
    const { strings: _, values: { length: x } } = e;
    for (; l < x; ) {
      const u = o.nextNode();
      if (u === null) {
        o.currentNode = n.pop();
        continue;
      }
      if (s++, u.nodeType === 1) {
        if (u.hasAttributes()) {
          const p = u.attributes, { length: d } = p;
          let h = 0;
          for (let f = 0; f < d; f++)
            dt(p[f].name, ce) && h++;
          for (; h-- > 0; ) {
            const f = _[l], S = Le.exec(f)[2], I = S.toLowerCase() + ce, m = u.getAttribute(I);
            u.removeAttribute(I);
            const g = m.split(st);
            this.parts.push({ type: "attribute", index: s, name: S, strings: g }), l += g.length - 1;
          }
        }
        u.tagName === "TEMPLATE" && (n.push(u), o.currentNode = u.content);
      } else if (u.nodeType === 3) {
        const p = u.data;
        if (p.indexOf(K) >= 0) {
          const d = u.parentNode, h = p.split(st), f = h.length - 1;
          for (let S = 0; S < f; S++) {
            let I, m = h[S];
            if (m === "")
              I = J();
            else {
              const g = Le.exec(m);
              g !== null && dt(g[2], ce) && (m = m.slice(0, g.index) + g[1] + g[2].slice(0, -ce.length) + g[3]), I = document.createTextNode(m);
            }
            d.insertBefore(I, u), this.parts.push({ type: "node", index: ++s });
          }
          h[f] === "" ? (d.insertBefore(J(), u), i.push(u)) : u.data = h[f], l += f;
        }
      } else if (u.nodeType === 8)
        if (u.data === K) {
          const p = u.parentNode;
          (u.previousSibling === null || s === a) && (s++, p.insertBefore(J(), u)), a = s, this.parts.push({ type: "node", index: s }), u.nextSibling === null ? u.data = "" : (i.push(u), s--), l++;
        } else {
          let p = -1;
          for (; (p = u.data.indexOf(K, p + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), l++;
        }
    }
    for (const u of i)
      u.parentNode.removeChild(u);
  }
}
const dt = (r, e) => {
  const t = r.length - e.length;
  return t >= 0 && r.slice(t) === e;
}, It = (r) => r.index !== -1, J = () => document.createComment(""), Le = (
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
const je = 133;
function Rt(r, e) {
  const { element: { content: t }, parts: i } = r, n = document.createTreeWalker(t, je, null, !1);
  let o = le(i), a = i[o], s = -1, l = 0;
  const _ = [];
  let x = null;
  for (; n.nextNode(); ) {
    s++;
    const u = n.currentNode;
    for (u.previousSibling === x && (x = null), e.has(u) && (_.push(u), x === null && (x = u)), x !== null && l++; a !== void 0 && a.index === s; )
      a.index = x !== null ? -1 : a.index - l, o = le(i, o), a = i[o];
  }
  _.forEach((u) => u.parentNode.removeChild(u));
}
const jt = (r) => {
  let e = r.nodeType === 11 ? 0 : 1;
  const t = document.createTreeWalker(r, je, null, !1);
  for (; t.nextNode(); )
    e++;
  return e;
}, le = (r, e = -1) => {
  for (let t = e + 1; t < r.length; t++) {
    const i = r[t];
    if (It(i))
      return t;
  }
  return -1;
};
function Kt(r, e, t = null) {
  const { element: { content: i }, parts: n } = r;
  if (t == null) {
    i.appendChild(e);
    return;
  }
  const o = document.createTreeWalker(i, je, null, !1);
  let a = le(n), s = 0, l = -1;
  for (; o.nextNode(); )
    for (l++, o.currentNode === t && (s = jt(e), t.parentNode.insertBefore(e, t)); a !== -1 && n[a].index === l; ) {
      if (s > 0) {
        for (; a !== -1; )
          n[a].index += s, a = le(n, a);
        return;
      }
      a = le(n, a);
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
const Tt = /* @__PURE__ */ new WeakMap(), Ke = (r) => (...e) => {
  const t = r(...e);
  return Tt.set(t, !0), t;
}, ue = (r) => typeof r == "function" && Tt.has(r);
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
const G = {}, ct = {};
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
class Fe {
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
    const e = at ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), t = [], i = this.template.parts, n = document.createTreeWalker(e, 133, null, !1);
    let o = 0, a = 0, s, l = n.nextNode();
    for (; o < i.length; ) {
      if (s = i[o], !It(s)) {
        this.__parts.push(void 0), o++;
        continue;
      }
      for (; a < s.index; )
        a++, l.nodeName === "TEMPLATE" && (t.push(l), n.currentNode = l.content), (l = n.nextNode()) === null && (n.currentNode = t.pop(), l = n.nextNode());
      if (s.type === "node") {
        const _ = this.processor.handleTextExpression(this.options);
        _.insertAfterNode(l.previousSibling), this.__parts.push(_);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(l, s.name, s.strings, this.options));
      o++;
    }
    return at && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const lt = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (r) => r }), qt = ` ${K} `;
class Lt {
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
      const s = Le.exec(o);
      s === null ? t += o + (i ? qt : At) : t += o.substr(0, s.index) + s[1] + s[2] + ce + s[3] + K;
    }
    return t += this.strings[e], t;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let t = this.getHTML();
    return lt !== void 0 && (t = lt.createHTML(t)), e.innerHTML = t, e;
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
const qe = (r) => r === null || !(typeof r == "object" || typeof r == "function"), ke = (r) => Array.isArray(r) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(r && r[Symbol.iterator]);
class Ft {
  constructor(e, t, i) {
    this.dirty = !0, this.element = e, this.name = t, this.strings = i, this.parts = [];
    for (let n = 0; n < i.length - 1; n++)
      this.parts[n] = this._createPart();
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */
  _createPart() {
    return new ae(this);
  }
  _getValue() {
    const e = this.strings, t = e.length - 1, i = this.parts;
    if (t === 1 && e[0] === "" && e[1] === "") {
      const o = i[0].value;
      if (typeof o == "symbol")
        return String(o);
      if (typeof o == "string" || !ke(o))
        return o;
    }
    let n = "";
    for (let o = 0; o < t; o++) {
      n += e[o];
      const a = i[o];
      if (a !== void 0) {
        const s = a.value;
        if (qe(s) || !ke(s))
          n += typeof s == "string" ? s : String(s);
        else
          for (const l of s)
            n += typeof l == "string" ? l : String(l);
      }
    }
    return n += e[t], n;
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
  }
}
class ae {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== G && (!qe(e) || e !== this.value) && (this.value = e, ue(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; ue(this.value); ) {
      const e = this.value;
      this.value = G, e(this);
    }
    this.value !== G && this.committer.commit();
  }
}
class he {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(J()), this.endNode = e.appendChild(J());
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
    e.__insert(this.startNode = J()), e.__insert(this.endNode = J());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = J()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; ue(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = G, t(this);
    }
    const e = this.__pendingValue;
    e !== G && (qe(e) ? e !== this.value && this.__commitText(e) : e instanceof Lt ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : ke(e) ? this.__commitIterable(e) : e === ct ? (this.value = ct, this.clear()) : this.__commitText(e));
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
    if (this.value instanceof Fe && this.value.template === t)
      this.value.update(e.values);
    else {
      const i = new Fe(t, e.processor, this.options), n = i._clone();
      i.update(e.values), this.__commitNode(n), this.value = i;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const t = this.value;
    let i = 0, n;
    for (const o of e)
      n = t[i], n === void 0 && (n = new he(this.options), t.push(n), i === 0 ? n.appendIntoPart(this) : n.insertAfterPart(t[i - 1])), n.setValue(o), n.commit(), i++;
    i < t.length && (t.length = i, this.clear(n && n.endNode));
  }
  clear(e = this.startNode) {
    We(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class Xt {
  constructor(e, t, i) {
    if (this.value = void 0, this.__pendingValue = void 0, i.length !== 2 || i[0] !== "" || i[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = t, this.strings = i;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; ue(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = G, t(this);
    }
    if (this.__pendingValue === G)
      return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = G;
  }
}
class Jt extends Ft {
  constructor(e, t, i) {
    super(e, t, i), this.single = i.length === 2 && i[0] === "" && i[1] === "";
  }
  _createPart() {
    return new Xe(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
  }
}
class Xe extends ae {
}
let kt = !1;
(() => {
  try {
    const r = {
      get capture() {
        return kt = !0, !1;
      }
    };
    window.addEventListener("test", r, r), window.removeEventListener("test", r, r);
  } catch {
  }
})();
class Qt {
  constructor(e, t, i) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = t, this.eventContext = i, this.__boundHandleEvent = (n) => this.handleEvent(n);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; ue(this.__pendingValue); ) {
      const o = this.__pendingValue;
      this.__pendingValue = G, o(this);
    }
    if (this.__pendingValue === G)
      return;
    const e = this.__pendingValue, t = this.value, i = e == null || t != null && (e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive), n = e != null && (t == null || i);
    i && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), n && (this.__options = Zt(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = G;
  }
  handleEvent(e) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
}
const Zt = (r) => r && (kt ? { capture: r.capture, passive: r.passive, once: r.once } : r.capture);
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
function Yt(r) {
  let e = me.get(r.type);
  e === void 0 && (e = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, me.set(r.type, e));
  let t = e.stringsArray.get(r.strings);
  if (t !== void 0)
    return t;
  const i = r.strings.join(K);
  return t = e.keyString.get(i), t === void 0 && (t = new Ct(r, r.getTemplateElement()), e.keyString.set(i, t)), e.stringsArray.set(r.strings, t), t;
}
const me = /* @__PURE__ */ new Map();
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
const ne = /* @__PURE__ */ new WeakMap(), ei = (r, e, t) => {
  let i = ne.get(e);
  i === void 0 && (We(e, e.firstChild), ne.set(e, i = new he(Object.assign({ templateFactory: Yt }, t))), i.appendInto(e)), i.setValue(r), i.commit();
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
class ti {
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
    return o === "." ? new Jt(e, t.slice(1), i).parts : o === "@" ? [new Qt(e, t.slice(1), n.eventContext)] : o === "?" ? [new Xt(e, t.slice(1), i)] : new Ft(e, t, i).parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */
  handleTextExpression(e) {
    return new he(e);
  }
}
const ii = new ti();
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
const C = (r, ...e) => new Lt(r, e, "html", ii);
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
const Nt = (r, e) => `${r}--${e}`;
let ve = !0;
typeof window.ShadyCSS > "u" ? ve = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), ve = !1);
const ri = (r) => (e) => {
  const t = Nt(e.type, r);
  let i = me.get(t);
  i === void 0 && (i = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, me.set(t, i));
  let n = i.stringsArray.get(e.strings);
  if (n !== void 0)
    return n;
  const o = e.strings.join(K);
  if (n = i.keyString.get(o), n === void 0) {
    const a = e.getTemplateElement();
    ve && window.ShadyCSS.prepareTemplateDom(a, r), n = new Ct(e, a), i.keyString.set(o, n);
  }
  return i.stringsArray.set(e.strings, n), n;
}, ni = ["html", "svg"], oi = (r) => {
  ni.forEach((e) => {
    const t = me.get(Nt(e, r));
    t !== void 0 && t.keyString.forEach((i) => {
      const { element: { content: n } } = i, o = /* @__PURE__ */ new Set();
      Array.from(n.querySelectorAll("style")).forEach((a) => {
        o.add(a);
      }), Rt(i, o);
    });
  });
}, Dt = /* @__PURE__ */ new Set(), ai = (r, e, t) => {
  Dt.add(r);
  const i = t ? t.element : document.createElement("template"), n = e.querySelectorAll("style"), { length: o } = n;
  if (o === 0) {
    window.ShadyCSS.prepareTemplateStyles(i, r);
    return;
  }
  const a = document.createElement("style");
  for (let _ = 0; _ < o; _++) {
    const x = n[_];
    x.parentNode.removeChild(x), a.textContent += x.textContent;
  }
  oi(r);
  const s = i.content;
  t ? Kt(t, a, s.firstChild) : s.insertBefore(a, s.firstChild), window.ShadyCSS.prepareTemplateStyles(i, r);
  const l = s.querySelector("style");
  if (window.ShadyCSS.nativeShadow && l !== null)
    e.insertBefore(l.cloneNode(!0), e.firstChild);
  else if (t) {
    s.insertBefore(a, s.firstChild);
    const _ = /* @__PURE__ */ new Set();
    _.add(a), Rt(t, _);
  }
}, si = (r, e, t) => {
  if (!t || typeof t != "object" || !t.scopeName)
    throw new Error("The `scopeName` option is required.");
  const i = t.scopeName, n = ne.has(e), o = ve && e.nodeType === 11 && !!e.host, a = o && !Dt.has(i), s = a ? document.createDocumentFragment() : e;
  if (ei(r, s, Object.assign({ templateFactory: ri(i) }, t)), a) {
    const l = ne.get(s);
    ne.delete(s);
    const _ = l.value instanceof Fe ? l.value.template : void 0;
    ai(i, s, _), We(e, e.firstChild), e.appendChild(s), ne.set(e, l);
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
var Ot;
window.JSCompiler_renameProperty = (r, e) => r;
const Ne = {
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
}, Pt = (r, e) => e !== r && (e === e || r === r), Ee = {
  attribute: !0,
  type: String,
  converter: Ne,
  reflect: !1,
  hasChanged: Pt
}, we = 1, pt = 4, ut = 8, mt = 16, De = "finalized";
class Mt extends HTMLElement {
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
  static createProperty(e, t = Ee) {
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
    return this._classProperties && this._classProperties.get(e) || Ee;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */
  static finalize() {
    const e = Object.getPrototypeOf(this);
    if (e.hasOwnProperty(De) || e.finalize(), this[De] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
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
  static _valueHasChanged(e, t, i = Pt) {
    return i(e, t);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(e, t) {
    const i = t.type, n = t.converter || Ne, o = typeof n == "function" ? n : n.fromAttribute;
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
    return (n && n.toAttribute || Ne.toAttribute)(e, i);
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
  _propertyToAttribute(e, t, i = Ee) {
    const n = this.constructor, o = n._attributeNameForProperty(e, i);
    if (o !== void 0) {
      const a = n._propertyValueToAttribute(t, i);
      if (a === void 0)
        return;
      this._updateState = this._updateState | ut, a == null ? this.removeAttribute(o) : this.setAttribute(o, a), this._updateState = this._updateState & -9;
    }
  }
  _attributeToProperty(e, t) {
    if (this._updateState & ut)
      return;
    const i = this.constructor, n = i._attributeToPropertyMap.get(e);
    if (n !== void 0) {
      const o = i.getPropertyOptions(n);
      this._updateState = this._updateState | mt, this[n] = // tslint:disable-next-line:no-any
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
      i = i || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, i.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), i.reflect === !0 && !(this._updateState & mt) && (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(e, i))) : n = !1;
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
    this._updateState = this._updateState | pt;
    try {
      await this._updatePromise;
    } catch {
    }
    const e = this.performUpdate();
    return e != null && await e, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & pt;
  }
  get hasUpdated() {
    return this._updateState & we;
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
    e && (this._updateState & we || (this._updateState = this._updateState | we, this.firstUpdated(t)), this.updated(t));
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
Ot = De;
Mt[Ot] = !0;
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
const di = (r, e) => (window.customElements.define(r, e), e), ci = (r, e) => {
  const { kind: t, elements: i } = e;
  return {
    kind: t,
    elements: i,
    // This callback is called once the class is otherwise fully defined
    finisher(n) {
      window.customElements.define(r, n);
    }
  };
}, se = (r) => (e) => typeof e == "function" ? di(r, e) : ci(r, e), li = (r, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), { finisher(t) {
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
}, pi = (r, e, t) => {
  e.constructor.createProperty(t, r);
};
function b(r) {
  return (e, t) => t !== void 0 ? pi(r, e, t) : li(r, e);
}
function ui(r) {
  return b({ attribute: !1, hasChanged: void 0 });
}
const B = (r) => ui();
function W(r, e) {
  return (t, i) => {
    const n = {
      get() {
        return this.renderRoot.querySelector(r);
      },
      enumerable: !0,
      configurable: !0
    };
    return i !== void 0 ? Je(n, t, i) : Qe(n, t);
  };
}
function Ht(r) {
  return (e, t) => {
    const i = {
      async get() {
        return await this.updateComplete, this.renderRoot.querySelector(r);
      },
      enumerable: !0,
      configurable: !0
    };
    return t !== void 0 ? Je(i, e, t) : Qe(i, e);
  };
}
const Je = (r, e, t) => {
  Object.defineProperty(e, t, r);
}, Qe = (r, e) => ({
  kind: "method",
  placement: "prototype",
  key: e.key,
  descriptor: r
}), mi = (r, e) => Object.assign(Object.assign({}, e), { finisher(t) {
  Object.assign(t.prototype[e.key], r);
} }), hi = (
  // tslint:disable-next-line:no-any legacy decorator
  (r, e, t) => {
    Object.assign(e[t], r);
  }
);
function fi(r) {
  return (e, t) => t !== void 0 ? hi(r, e, t) : mi(r, e);
}
const ht = Element.prototype, gi = ht.msMatchesSelector || ht.webkitMatchesSelector;
function Ut(r = "", e = !1, t = "") {
  return (i, n) => {
    const o = {
      get() {
        const a = `slot${r ? `[name=${r}]` : ":not([name])"}`, s = this.renderRoot.querySelector(a);
        let l = s && s.assignedNodes({ flatten: e });
        return l && t && (l = l.filter((_) => _.nodeType === Node.ELEMENT_NODE && // tslint:disable-next-line:no-any testing existence on older browsers
        (_.matches ? _.matches(t) : gi.call(_, t)))), l;
      },
      enumerable: !0,
      configurable: !0
    };
    return n !== void 0 ? Je(o, i, n) : Qe(o, i);
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
const Oe = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ze = Symbol();
class Ye {
  constructor(e, t) {
    if (t !== Ze)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
    return this._styleSheet === void 0 && (Oe ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const bi = (r) => new Ye(String(r), Ze), _i = (r) => {
  if (r instanceof Ye)
    return r.cssText;
  if (typeof r == "number")
    return r;
  throw new Error(`Value passed to 'css' function must be a 'css' function result: ${r}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
}, te = (r, ...e) => {
  const t = e.reduce((i, n, o) => i + _i(n) + r[o + 1], r[0]);
  return new Ye(t, Ze);
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
const ft = {};
class Q extends Mt {
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
      const t = (o, a) => o.reduceRight((s, l) => (
        // Note: On IE set.add() does not return the set
        Array.isArray(l) ? t(l, s) : (s.add(l), s)
      ), a), i = t(e, /* @__PURE__ */ new Set()), n = [];
      i.forEach((o) => n.unshift(o)), this._styles = n;
    } else
      this._styles = e === void 0 ? [] : [e];
    this._styles = this._styles.map((t) => {
      if (t instanceof CSSStyleSheet && !Oe) {
        const i = Array.prototype.slice.call(t.cssRules).reduce((n, o) => n + o.cssText, "");
        return bi(i);
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
    e.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((t) => t.cssText), this.localName) : Oe ? this.renderRoot.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
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
    super.update(e), t !== ft && this.constructor.render(t, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((i) => {
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
    return ft;
  }
}
Q.finalized = !0;
Q.render = si;
Q.shadowRootOptions = { mode: "open" };
const yi = 1e3 * 60, gt = "langChanged";
function vi(r, e, t) {
  return Object.entries(Pe(e || {})).reduce((i, [n, o]) => i.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(Pe(o))), r);
}
function xi(r, e) {
  const t = r.split(".");
  let i = e.strings;
  for (; i != null && t.length > 0; )
    i = i[t.shift()];
  return i != null ? i.toString() : null;
}
function Pe(r) {
  return typeof r == "function" ? r() : r;
}
const Si = () => ({
  loader: () => Promise.resolve({}),
  empty: (r) => `[${r}]`,
  lookup: xi,
  interpolate: vi,
  translationCache: {}
});
let Ei = Si();
function wi(r, e) {
  const t = (i) => r(i.detail);
  return window.addEventListener(gt, t, e), () => window.removeEventListener(gt, t);
}
function Ae(r, e, t = Ei) {
  let i = t.translationCache[r] || (t.translationCache[r] = t.lookup(r, t) || t.empty(r, t));
  return e = e != null ? Pe(e) : null, e != null ? t.interpolate(i, e, t) : i;
}
function Bt(r) {
  return r instanceof he ? r.startNode.isConnected : r instanceof ae ? r.committer.element.isConnected : r.element.isConnected;
}
function Ai(r) {
  for (const [e] of r)
    Bt(e) || r.delete(e);
}
function Ci(r) {
  "requestIdleCallback" in window ? window.requestIdleCallback(r) : setTimeout(r);
}
function Ii(r, e) {
  setInterval(() => Ci(() => Ai(r)), e);
}
const zt = /* @__PURE__ */ new Map();
function Ri() {
  wi((r) => {
    for (const [e, t] of zt)
      Bt(e) && Ti(e, t, r);
  });
}
Ri();
Ii(zt, yi);
function Ti(r, e, t) {
  const i = e(t);
  r.value !== i && (r.setValue(i), r.commit());
}
var Me = function(r, e) {
  return Me = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
  }, Me(r, e);
};
function Vt(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Me(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var ee = function() {
  return ee = Object.assign || function(e) {
    for (var t, i = 1, n = arguments.length; i < n; i++) {
      t = arguments[i];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, ee.apply(this, arguments);
};
function c(r, e, t, i) {
  var n = arguments.length, o = n < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(r, e, t, i);
  else for (var s = r.length - 1; s >= 0; s--) (a = r[s]) && (o = (n < 3 ? a(o) : n > 3 ? a(e, t, o) : a(e, t)) || o);
  return n > 3 && o && Object.defineProperty(e, t, o), o;
}
function fe(r) {
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
const Li = te`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;
let He = class extends Q {
  /** @soyTemplate */
  render() {
    return C`<slot></slot>`;
  }
};
He.styles = [Li];
He = c([
  se("mwc-icon")
], He);
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
function Fi(r, e) {
  if (r.closest)
    return r.closest(e);
  for (var t = r; t; ) {
    if (et(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function et(r, e) {
  var t = r.matches || r.webkitMatchesSelector || r.msMatchesSelector;
  return t.call(r, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ki = (r) => r.nodeType === Node.ELEMENT_NODE;
function Ni(r) {
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
const $t = () => {
}, Di = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", $t, Di);
document.removeEventListener("x", $t);
const Gt = (r = window.document) => {
  let e = r.activeElement;
  const t = [];
  if (!e)
    return t;
  for (; e && (t.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return t;
}, Oi = (r) => {
  const e = Gt();
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
class tt extends Q {
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
var it = (
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
var Pi = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Mi = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, bt = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function Hi(r, e, t) {
  if (!r)
    return { x: 0, y: 0 };
  var i = e.x, n = e.y, o = i + t.left, a = n + t.top, s, l;
  if (r.type === "touchstart") {
    var _ = r;
    s = _.changedTouches[0].pageX - o, l = _.changedTouches[0].pageY - a;
  } else {
    var x = r;
    s = x.pageX - o, l = x.pageY - a;
  }
  return { x: s, y: l };
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
var _t = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], yt = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], ge = [], Ui = (
  /** @class */
  function(r) {
    Vt(e, r);
    function e(t) {
      var i = r.call(this, ee(ee({}, e.defaultAdapter), t)) || this;
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
        return Pi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Mi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return bt;
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
          for (var o = fe(_t), a = o.next(); !a.done; a = o.next()) {
            var s = a.value;
            this.adapter.registerInteractionHandler(s, this.activateHandler);
          }
        } catch (l) {
          i = { error: l };
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
          for (var o = fe(yt), a = o.next(); !a.done; a = o.next()) {
            var s = a.value;
            this.adapter.registerDocumentInteractionHandler(s, this.deactivateHandler);
          }
        } catch (l) {
          i = { error: l };
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
        for (var n = fe(_t), o = n.next(); !o.done; o = n.next()) {
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
        for (var n = fe(yt), o = n.next(); !o.done; o = n.next()) {
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
            var s = t !== void 0 && ge.length > 0 && ge.some(function(l) {
              return i.adapter.containsEventTarget(l);
            });
            if (s) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (ge.push(t.target), this.registerDeactivationHandlers(t)), n.wasElementMadeActive = this.checkElementMadeActive(t), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              ge = [], !n.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (n.wasElementMadeActive = i.checkElementMadeActive(t), n.wasElementMadeActive && i.animateActivation()), n.wasElementMadeActive || (i.activationState = i.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, i = e.strings, n = i.VAR_FG_TRANSLATE_START, o = i.VAR_FG_TRANSLATE_END, a = e.cssClasses, s = a.FG_DEACTIVATION, l = a.FG_ACTIVATION, _ = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var x = "", u = "";
      if (!this.adapter.isUnbounded()) {
        var p = this.getFgTranslationCoordinates(), d = p.startPoint, h = p.endPoint;
        x = d.x + "px, " + d.y + "px", u = h.x + "px, " + h.y + "px";
      }
      this.adapter.updateCssVariable(n, x), this.adapter.updateCssVariable(o, u), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(s), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, _);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, i = t.activationEvent, n = t.wasActivatedByPointer, o;
      n ? o = Hi(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : o = {
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
      }, bt.FG_DEACTIVATION_MS));
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
        var n = ee({}, i);
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
  }(it)
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
class Bi {
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
const vt = /* @__PURE__ */ new WeakMap(), oe = Ke((r) => (e) => {
  if (!(e instanceof ae) || e instanceof Xe || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: t } = e, { element: i } = t;
  let n = vt.get(e);
  n === void 0 && (i.setAttribute("class", t.strings.join(" ")), vt.set(e, n = /* @__PURE__ */ new Set()));
  const o = i.classList || new Bi(i);
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
const xt = /* @__PURE__ */ new WeakMap(), zi = Ke((r) => (e) => {
  if (!(e instanceof ae) || e instanceof Xe || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: t } = e, { style: i } = t.element;
  let n = xt.get(e);
  n === void 0 && (i.cssText = t.strings.join(" "), xt.set(e, n = /* @__PURE__ */ new Set())), n.forEach((o) => {
    o in r || (n.delete(o), o.indexOf("-") === -1 ? i[o] = null : i.removeProperty(o));
  });
  for (const o in r)
    n.add(o), o.indexOf("-") === -1 ? i[o] = r[o] : i.setProperty(o, r[o]);
});
class T extends tt {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Ui;
  }
  get isActive() {
    return et(this.parentElement || this, ":active");
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
    return C`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${oe(i)}"
          style="${zi({
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
  W(".mdc-ripple-surface")
], T.prototype, "mdcRoot", void 0);
c([
  b({ type: Boolean })
], T.prototype, "primary", void 0);
c([
  b({ type: Boolean })
], T.prototype, "accent", void 0);
c([
  b({ type: Boolean })
], T.prototype, "unbounded", void 0);
c([
  b({ type: Boolean })
], T.prototype, "disabled", void 0);
c([
  b({ type: Boolean })
], T.prototype, "activated", void 0);
c([
  b({ type: Boolean })
], T.prototype, "selected", void 0);
c([
  b({ type: Boolean })
], T.prototype, "internalUseStateLayerCustomProperties", void 0);
c([
  B()
], T.prototype, "hovering", void 0);
c([
  B()
], T.prototype, "bgFocused", void 0);
c([
  B()
], T.prototype, "fgActivation", void 0);
c([
  B()
], T.prototype, "fgDeactivation", void 0);
c([
  B()
], T.prototype, "fgScale", void 0);
c([
  B()
], T.prototype, "fgSize", void 0);
c([
  B()
], T.prototype, "translateStart", void 0);
c([
  B()
], T.prototype, "translateEnd", void 0);
c([
  B()
], T.prototype, "leftPos", void 0);
c([
  B()
], T.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Vi = te`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let Ue = class extends T {
};
Ue.styles = [Vi];
Ue = c([
  se("mwc-ripple")
], Ue);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Wt {
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
class k extends Q {
  constructor() {
    super(...arguments), this.raised = !1, this.unelevated = !1, this.outlined = !1, this.dense = !1, this.disabled = !1, this.trailingIcon = !1, this.fullwidth = !1, this.icon = "", this.label = "", this.expandContent = !1, this.shouldRenderRipple = !1, this.rippleHandlers = new Wt(() => (this.shouldRenderRipple = !0, this.ripple));
  }
  /** @soyTemplate */
  renderOverlay() {
    return C``;
  }
  /** @soyTemplate */
  renderRipple() {
    const e = this.raised || this.unelevated;
    return this.shouldRenderRipple ? C`<mwc-ripple class="ripple" .primary="${!e}" .disabled="${this.disabled}"></mwc-ripple>` : "";
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
    return oe({
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
    return C`
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
        <span class="slot-container ${oe({
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
    return C`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`;
  }
  handleRippleActivate(e) {
    const t = () => {
      window.removeEventListener("mouseup", t), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", t), this.rippleHandlers.startPress(e);
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
k.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
c([
  b({ type: Boolean, reflect: !0 })
], k.prototype, "raised", void 0);
c([
  b({ type: Boolean, reflect: !0 })
], k.prototype, "unelevated", void 0);
c([
  b({ type: Boolean, reflect: !0 })
], k.prototype, "outlined", void 0);
c([
  b({ type: Boolean })
], k.prototype, "dense", void 0);
c([
  b({ type: Boolean, reflect: !0 })
], k.prototype, "disabled", void 0);
c([
  b({ type: Boolean, attribute: "trailingicon" })
], k.prototype, "trailingIcon", void 0);
c([
  b({ type: Boolean, reflect: !0 })
], k.prototype, "fullwidth", void 0);
c([
  b({ type: String })
], k.prototype, "icon", void 0);
c([
  b({ type: String })
], k.prototype, "label", void 0);
c([
  b({ type: Boolean })
], k.prototype, "expandContent", void 0);
c([
  W("#button")
], k.prototype, "buttonElement", void 0);
c([
  Ht("mwc-ripple")
], k.prototype, "ripple", void 0);
c([
  B()
], k.prototype, "shouldRenderRipple", void 0);
c([
  fi({ passive: !0 })
], k.prototype, "handleRippleActivate", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const $i = te`.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;font-size:1.125rem;height:1.125rem;vertical-align:top;width:1.125rem}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{border-style:solid}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 8px 0 8px}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px;height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined .mdc-button__touch{left:-1px;width:calc(100% + 2 * 1px)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;font-size:1.125rem;height:1.125rem;vertical-align:top;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{display:none}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;
let Be = class extends k {
};
Be.styles = [$i];
Be = c([
  se("mwc-button")
], Be);
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
  var r, e, t;
  const i = Symbol(), n = Symbol(), o = Symbol(), a = Symbol(), s = Symbol(), l = Symbol(), _ = Symbol(), x = Symbol(), u = Symbol(), p = Symbol(), d = Symbol(), h = Symbol(), f = Symbol();
  class S {
    constructor() {
      this[r] = [], this[e] = [], this[t] = /* @__PURE__ */ new Set();
    }
    destructor() {
      this[u](this[o]);
      const m = this;
      m[i] = null, m[o] = null, m[n] = null;
    }
    get top() {
      const m = this[i];
      return m[m.length - 1] || null;
    }
    push(m) {
      !m || m === this.top || (this.remove(m), this[l](m), this[i].push(m));
    }
    remove(m) {
      const g = this[i].indexOf(m);
      return g === -1 ? !1 : (this[i].splice(g, 1), g === this[i].length && this[l](this.top), !0);
    }
    pop() {
      const m = this.top;
      return m && this.remove(m), m;
    }
    has(m) {
      return this[i].indexOf(m) !== -1;
    }
    /**
     * Sets `inert` to all document elements except the new top element, its
     * parents, and its distributed content.
     */
    [(r = i, e = o, t = n, l)](m) {
      const g = this[n], y = this[o];
      if (!m) {
        this[u](y), g.clear(), this[o] = [];
        return;
      }
      const E = this[p](m);
      if (E[E.length - 1].parentNode !== document.body)
        throw Error("Non-connected element cannot be a blocking element");
      this[o] = E;
      const R = this[d](m);
      if (!y.length) {
        this[x](E, R, g);
        return;
      }
      let F = y.length - 1, L = E.length - 1;
      for (; F > 0 && L > 0 && y[F] === E[L]; )
        F--, L--;
      y[F] !== E[L] && this[_](y[F], E[L]), F > 0 && this[u](y.slice(0, F)), L > 0 && this[x](E.slice(0, L), R, null);
    }
    /**
     * Swaps inertness between two sibling elements.
     * Sets the property `inert` over the attribute since the inert spec
     * doesn't specify if it should be reflected.
     * https://html.spec.whatwg.org/multipage/interaction.html#inert
     */
    [_](m, g) {
      const y = m[a];
      this[h](m) && !m.inert && (m.inert = !0, y.add(m)), y.has(g) && (g.inert = !1, y.delete(g)), g[s] = m[s], g[a] = y, m[s] = void 0, m[a] = void 0;
    }
    /**
     * Restores original inertness to the siblings of the elements.
     * Sets the property `inert` over the attribute since the inert spec
     * doesn't specify if it should be reflected.
     * https://html.spec.whatwg.org/multipage/interaction.html#inert
     */
    [u](m) {
      for (const g of m) {
        g[s].disconnect(), g[s] = void 0;
        const E = g[a];
        for (const R of E)
          R.inert = !1;
        g[a] = void 0;
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
    [x](m, g, y) {
      for (const E of m) {
        const R = E.parentNode, F = R.children, L = /* @__PURE__ */ new Set();
        for (let Se = 0; Se < F.length; Se++) {
          const Y = F[Se];
          Y === E || !this[h](Y) || g && g.has(Y) || (y && Y.inert ? y.add(Y) : (Y.inert = !0, L.add(Y)));
        }
        E[a] = L;
        const ie = new MutationObserver(this[f].bind(this));
        E[s] = ie;
        let $ = R;
        const M = $;
        M.__shady && M.host && ($ = M.host), ie.observe($, {
          childList: !0
        });
      }
    }
    /**
     * Handles newly added/removed nodes by toggling their inertness.
     * It also checks if the current top Blocking Element has been removed,
     * notifying and removing it.
     */
    [f](m) {
      const g = this[o], y = this[n];
      for (const E of m) {
        const R = E.target.host || E.target, F = R === document.body ? g.length : g.indexOf(R), L = g[F - 1], ie = L[a];
        for (let $ = 0; $ < E.removedNodes.length; $++) {
          const M = E.removedNodes[$];
          if (M === L) {
            console.info("Detected removal of the top Blocking Element."), this.pop();
            return;
          }
          ie.has(M) && (M.inert = !1, ie.delete(M));
        }
        for (let $ = 0; $ < E.addedNodes.length; $++) {
          const M = E.addedNodes[$];
          this[h](M) && (y && M.inert ? y.add(M) : (M.inert = !0, ie.add(M)));
        }
      }
    }
    /**
     * Returns if the element is inertable.
     */
    [h](m) {
      return /^(style|template|script)$/.test(m.localName) === !1;
    }
    /**
     * Returns the list of newParents of an element, starting from element
     * (included) up to `document.body` (excluded).
     */
    [p](m) {
      const g = [];
      let y = m;
      for (; y && y !== document.body; ) {
        if (y.nodeType === Node.ELEMENT_NODE && g.push(y), y.assignedSlot) {
          for (; y = y.assignedSlot; )
            g.push(y);
          y = g.pop();
          continue;
        }
        y = y.parentNode || y.host;
      }
      return g;
    }
    /**
     * Returns the distributed children of the element's shadow root.
     * Returns null if the element doesn't have a shadow root.
     */
    [d](m) {
      const g = m.shadowRoot;
      if (!g)
        return null;
      const y = /* @__PURE__ */ new Set();
      let E, R, F;
      const L = g.querySelectorAll("slot");
      if (L.length && L[0].assignedNodes)
        for (E = 0; E < L.length; E++)
          for (F = L[E].assignedNodes({
            flatten: !0
          }), R = 0; R < F.length; R++)
            F[R].nodeType === Node.ELEMENT_NODE && y.add(F[R]);
      return y;
    }
  }
  document.$blockingElements = new S();
})();
var St = {}, Et;
function Gi() {
  if (Et) return St;
  Et = 1;
  var r = /* @__PURE__ */ function() {
    function t(i, n) {
      for (var o = 0; o < n.length; o++) {
        var a = n[o];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(i, a.key, a);
      }
    }
    return function(i, n, o) {
      return n && t(i.prototype, n), o && t(i, o), i;
    };
  }();
  function e(t, i) {
    if (!(t instanceof i))
      throw new TypeError("Cannot call a class as a function");
  }
  return function() {
    if (typeof window > "u" || typeof Element > "u")
      return;
    var t = Array.prototype.slice, i = Element.prototype.matches || Element.prototype.msMatchesSelector, n = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "video", "[contenteditable]"].join(","), o = function() {
      function u(p, d) {
        e(this, u), this._inertManager = d, this._rootElement = p, this._managedNodes = /* @__PURE__ */ new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, { attributes: !0, childList: !0, subtree: !0 });
      }
      return r(u, [{
        key: "destructor",
        value: function() {
          this._observer.disconnect(), this._rootElement && (this._savedAriaHidden !== null ? this._rootElement.setAttribute("aria-hidden", this._savedAriaHidden) : this._rootElement.removeAttribute("aria-hidden")), this._managedNodes.forEach(function(d) {
            this._unmanageNode(d.node);
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
        value: function(d) {
          var h = this;
          l(d, function(m) {
            return h._visitNode(m);
          });
          var f = document.activeElement;
          if (!document.body.contains(d)) {
            for (var S = d, I = void 0; S; ) {
              if (S.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                I = /** @type {!ShadowRoot} */
                S;
                break;
              }
              S = S.parentNode;
            }
            I && (f = I.activeElement);
          }
          d.contains(f) && (f.blur(), f === document.activeElement && document.body.focus());
        }
        /**
         * @param {!Node} node
         */
      }, {
        key: "_visitNode",
        value: function(d) {
          if (d.nodeType === Node.ELEMENT_NODE) {
            var h = (
              /** @type {!HTMLElement} */
              d
            );
            h !== this._rootElement && h.hasAttribute("inert") && this._adoptInertRoot(h), (i.call(h, n) || h.hasAttribute("tabindex")) && this._manageNode(h);
          }
        }
        /**
         * Register the given node with this InertRoot and with InertManager.
         * @param {!Node} node
         */
      }, {
        key: "_manageNode",
        value: function(d) {
          var h = this._inertManager.register(d, this);
          this._managedNodes.add(h);
        }
        /**
         * Unregister the given node with this InertRoot and with InertManager.
         * @param {!Node} node
         */
      }, {
        key: "_unmanageNode",
        value: function(d) {
          var h = this._inertManager.deregister(d, this);
          h && this._managedNodes.delete(h);
        }
        /**
         * Unregister the entire subtree starting at `startNode`.
         * @param {!Node} startNode
         */
      }, {
        key: "_unmanageSubtree",
        value: function(d) {
          var h = this;
          l(d, function(f) {
            return h._unmanageNode(f);
          });
        }
        /**
         * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
         * @param {!HTMLElement} node
         */
      }, {
        key: "_adoptInertRoot",
        value: function(d) {
          var h = this._inertManager.getInertRoot(d);
          h || (this._inertManager.setInert(d, !0), h = this._inertManager.getInertRoot(d)), h.managedNodes.forEach(function(f) {
            this._manageNode(f.node);
          }, this);
        }
        /**
         * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
         * @param {!Array<!MutationRecord>} records
         * @param {!MutationObserver} self
         */
      }, {
        key: "_onMutation",
        value: function(d, h) {
          d.forEach(function(f) {
            var S = (
              /** @type {!HTMLElement} */
              f.target
            );
            if (f.type === "childList")
              t.call(f.addedNodes).forEach(function(m) {
                this._makeSubtreeUnfocusable(m);
              }, this), t.call(f.removedNodes).forEach(function(m) {
                this._unmanageSubtree(m);
              }, this);
            else if (f.type === "attributes") {
              if (f.attributeName === "tabindex")
                this._manageNode(S);
              else if (S !== this._rootElement && f.attributeName === "inert" && S.hasAttribute("inert")) {
                this._adoptInertRoot(S);
                var I = this._inertManager.getInertRoot(S);
                this._managedNodes.forEach(function(m) {
                  S.contains(m.node) && I._manageNode(m.node);
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
        set: function(d) {
          this._savedAriaHidden = d;
        },
        get: function() {
          return this._savedAriaHidden;
        }
      }]), u;
    }(), a = function() {
      function u(p, d) {
        e(this, u), this._node = p, this._overrodeFocusMethod = !1, this._inertRoots = /* @__PURE__ */ new Set([d]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable();
      }
      return r(u, [{
        key: "destructor",
        value: function() {
          if (this._throwIfDestroyed(), this._node && this._node.nodeType === Node.ELEMENT_NODE) {
            var d = (
              /** @type {!HTMLElement} */
              this._node
            );
            this._savedTabIndex !== null ? d.setAttribute("tabindex", this._savedTabIndex) : d.removeAttribute("tabindex"), this._overrodeFocusMethod && delete d.focus;
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
            var d = (
              /** @type {!HTMLElement} */
              this.node
            );
            if (i.call(d, n)) {
              if (
                /** @type {!HTMLElement} */
                d.tabIndex === -1 && this.hasSavedTabIndex
              )
                return;
              d.hasAttribute("tabindex") && (this._savedTabIndex = /** @type {!HTMLElement} */
              d.tabIndex), d.setAttribute("tabindex", "-1"), d.nodeType === Node.ELEMENT_NODE && (d.focus = function() {
              }, this._overrodeFocusMethod = !0);
            } else d.hasAttribute("tabindex") && (this._savedTabIndex = /** @type {!HTMLElement} */
            d.tabIndex, d.removeAttribute("tabindex"));
          }
        }
        /**
         * Add another inert root to this inert node's set of managing inert roots.
         * @param {!InertRoot} inertRoot
         */
      }, {
        key: "addInertRoot",
        value: function(d) {
          this._throwIfDestroyed(), this._inertRoots.add(d);
        }
        /**
         * Remove the given inert root from this inert node's set of managing inert roots.
         * If the set of managing inert roots becomes empty, this node is no longer inert,
         * so the object should be destroyed.
         * @param {!InertRoot} inertRoot
         */
      }, {
        key: "removeInertRoot",
        value: function(d) {
          this._throwIfDestroyed(), this._inertRoots.delete(d), this._inertRoots.size === 0 && this.destructor();
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
        set: function(d) {
          this._throwIfDestroyed(), this._savedTabIndex = d;
        },
        get: function() {
          return this._throwIfDestroyed(), this._savedTabIndex;
        }
      }]), u;
    }(), s = function() {
      function u(p) {
        if (e(this, u), !p)
          throw new Error("Missing required argument; InertManager needs to wrap a document.");
        this._document = p, this._managedNodes = /* @__PURE__ */ new Map(), this._inertRoots = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), _(p.head || p.body || p.documentElement), p.readyState === "loading" ? p.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
      }
      return r(u, [{
        key: "setInert",
        value: function(d, h) {
          if (h) {
            if (this._inertRoots.has(d))
              return;
            var f = new o(d, this);
            if (d.setAttribute("inert", ""), this._inertRoots.set(d, f), !this._document.body.contains(d))
              for (var S = d.parentNode; S; )
                S.nodeType === 11 && _(S), S = S.parentNode;
          } else {
            if (!this._inertRoots.has(d))
              return;
            var I = this._inertRoots.get(d);
            I.destructor(), this._inertRoots.delete(d), d.removeAttribute("inert");
          }
        }
        /**
         * Get the InertRoot object corresponding to the given inert root element, if any.
         * @param {!Node} element
         * @return {!InertRoot|undefined}
         */
      }, {
        key: "getInertRoot",
        value: function(d) {
          return this._inertRoots.get(d);
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
        value: function(d, h) {
          var f = this._managedNodes.get(d);
          return f !== void 0 ? f.addInertRoot(h) : f = new a(d, h), this._managedNodes.set(d, f), f;
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
        value: function(d, h) {
          var f = this._managedNodes.get(d);
          return f ? (f.removeInertRoot(h), f.destroyed && this._managedNodes.delete(d), f) : null;
        }
        /**
         * Callback used when document has finished loading.
         */
      }, {
        key: "_onDocumentLoaded",
        value: function() {
          var d = t.call(this._document.querySelectorAll("[inert]"));
          d.forEach(function(h) {
            this.setInert(h, !0);
          }, this), this._observer.observe(this._document.body || this._document.documentElement, { attributes: !0, subtree: !0, childList: !0 });
        }
        /**
         * Callback used when mutation observer detects attribute changes.
         * @param {!Array<!MutationRecord>} records
         * @param {!MutationObserver} self
         */
      }, {
        key: "_watchForInert",
        value: function(d, h) {
          var f = this;
          d.forEach(function(S) {
            switch (S.type) {
              case "childList":
                t.call(S.addedNodes).forEach(function(g) {
                  if (g.nodeType === Node.ELEMENT_NODE) {
                    var y = t.call(g.querySelectorAll("[inert]"));
                    i.call(g, "[inert]") && y.unshift(g), y.forEach(function(E) {
                      this.setInert(E, !0);
                    }, f);
                  }
                }, f);
                break;
              case "attributes":
                if (S.attributeName !== "inert")
                  return;
                var I = (
                  /** @type {!HTMLElement} */
                  S.target
                ), m = I.hasAttribute("inert");
                f.setInert(I, m);
                break;
            }
          }, this);
        }
      }]), u;
    }();
    function l(u, p, d) {
      if (u.nodeType == Node.ELEMENT_NODE) {
        var h = (
          /** @type {!HTMLElement} */
          u
        );
        p && p(h);
        var f = (
          /** @type {!HTMLElement} */
          h.shadowRoot
        );
        if (f) {
          l(f, p);
          return;
        }
        if (h.localName == "content") {
          for (var S = (
            /** @type {!HTMLContentElement} */
            h
          ), I = S.getDistributedNodes ? S.getDistributedNodes() : [], m = 0; m < I.length; m++)
            l(I[m], p);
          return;
        }
        if (h.localName == "slot") {
          for (var g = (
            /** @type {!HTMLSlotElement} */
            h
          ), y = g.assignedNodes ? g.assignedNodes({ flatten: !0 }) : [], E = 0; E < y.length; E++)
            l(y[E], p);
          return;
        }
      }
      for (var R = u.firstChild; R != null; )
        l(R, p), R = R.nextSibling;
    }
    function _(u) {
      if (!u.querySelector("style#inert-style, link#inert-style")) {
        var p = document.createElement("style");
        p.setAttribute("id", "inert-style"), p.textContent = `
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
`, u.appendChild(p);
      }
    }
    if (!HTMLElement.prototype.hasOwnProperty("inert")) {
      var x = new s(document);
      Object.defineProperty(HTMLElement.prototype, "inert", {
        enumerable: !0,
        /** @this {!HTMLElement} */
        get: function() {
          return this.hasAttribute("inert");
        },
        /** @this {!HTMLElement} */
        set: function(p) {
          x.setInert(this, p);
        }
      });
    }
  }(), St;
}
Gi();
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
var w = {
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
}, de = {
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
}, Ce = {
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
var Wi = (
  /** @class */
  function() {
    function r() {
      this.rafIDs = /* @__PURE__ */ new Map();
    }
    return r.prototype.request = function(e, t) {
      var i = this;
      this.cancel(e);
      var n = requestAnimationFrame(function(o) {
        i.rafIDs.delete(e), t(o);
      });
      this.rafIDs.set(e, n);
    }, r.prototype.cancel = function(e) {
      var t = this.rafIDs.get(e);
      t && (cancelAnimationFrame(t), this.rafIDs.delete(e));
    }, r.prototype.cancelAll = function() {
      var e = this;
      this.rafIDs.forEach(function(t, i) {
        e.cancel(i);
      });
    }, r.prototype.getQueue = function() {
      var e = [];
      return this.rafIDs.forEach(function(t, i) {
        e.push(i);
      }), e;
    }, r;
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
var xe;
(function(r) {
  r.POLL_SCROLL_POS = "poll_scroll_position", r.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(xe || (xe = {}));
var ji = (
  /** @class */
  function(r) {
    Vt(e, r);
    function e(t) {
      var i = r.call(this, ee(ee({}, e.defaultAdapter), t)) || this;
      return i.dialogOpen = !1, i.isFullscreen = !1, i.animationFrame = 0, i.animationTimer = 0, i.escapeKeyAction = de.CLOSE_ACTION, i.scrimClickAction = de.CLOSE_ACTION, i.autoStackButtons = !0, i.areButtonsStacked = !1, i.suppressDefaultPressSelector = de.SUPPRESS_DEFAULT_PRESS_SELECTOR, i.animFrame = new Wi(), i.contentScrollHandler = function() {
        i.handleScrollEvent();
      }, i.windowResizeHandler = function() {
        i.layout();
      }, i.windowOrientationChangeHandler = function() {
        i.layout();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return w;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return de;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ce;
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
      this.adapter.hasClass(w.STACKED) && this.setAutoStackButtons(!1), this.isFullscreen = this.adapter.hasClass(w.FULLSCREEN);
    }, e.prototype.destroy = function() {
      this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    }, e.prototype.open = function(t) {
      var i = this;
      this.dialogOpen = !0, this.adapter.notifyOpening(), this.adapter.addClass(w.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), t && t.isAboveFullscreenDialog && this.adapter.addClass(w.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(function() {
        i.adapter.addClass(w.OPEN), i.adapter.addBodyClass(w.SCROLL_LOCK), i.layout(), i.animationTimer = setTimeout(function() {
          i.handleAnimationTimerEnd(), i.adapter.trapFocus(i.adapter.getInitialFocusEl()), i.adapter.notifyOpened();
        }, Ce.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(t) {
      var i = this;
      t === void 0 && (t = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(t), this.adapter.addClass(w.CLOSING), this.adapter.removeClass(w.OPEN), this.adapter.removeBodyClass(w.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        i.adapter.releaseFocus(), i.handleAnimationTimerEnd(), i.adapter.notifyClosed(t);
      }, Ce.DIALOG_ANIMATION_CLOSE_TIME_MS));
    }, e.prototype.showSurfaceScrim = function() {
      var t = this;
      this.adapter.addClass(w.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(function() {
        t.adapter.addClass(w.SURFACE_SCRIM_SHOWN);
      });
    }, e.prototype.hideSurfaceScrim = function() {
      this.adapter.removeClass(w.SURFACE_SCRIM_SHOWN), this.adapter.addClass(w.SURFACE_SCRIM_HIDING);
    }, e.prototype.handleSurfaceScrimTransitionEnd = function() {
      this.adapter.removeClass(w.SURFACE_SCRIM_HIDING), this.adapter.removeClass(w.SURFACE_SCRIM_SHOWING);
    }, e.prototype.isOpen = function() {
      return this.dialogOpen;
    }, e.prototype.getEscapeKeyAction = function() {
      return this.escapeKeyAction;
    }, e.prototype.setEscapeKeyAction = function(t) {
      this.escapeKeyAction = t;
    }, e.prototype.getScrimClickAction = function() {
      return this.scrimClickAction;
    }, e.prototype.setScrimClickAction = function(t) {
      this.scrimClickAction = t;
    }, e.prototype.getAutoStackButtons = function() {
      return this.autoStackButtons;
    }, e.prototype.setAutoStackButtons = function(t) {
      this.autoStackButtons = t;
    }, e.prototype.getSuppressDefaultPressSelector = function() {
      return this.suppressDefaultPressSelector;
    }, e.prototype.setSuppressDefaultPressSelector = function(t) {
      this.suppressDefaultPressSelector = t;
    }, e.prototype.layout = function() {
      var t = this;
      this.animFrame.request(xe.POLL_LAYOUT_CHANGE, function() {
        t.layoutInternal();
      });
    }, e.prototype.handleClick = function(t) {
      var i = this.adapter.eventTargetMatches(t.target, de.SCRIM_SELECTOR);
      if (i && this.scrimClickAction !== "")
        this.close(this.scrimClickAction);
      else {
        var n = this.adapter.getActionFromEvent(t);
        n && this.close(n);
      }
    }, e.prototype.handleKeydown = function(t) {
      var i = t.key === "Enter" || t.keyCode === 13;
      if (i) {
        var n = this.adapter.getActionFromEvent(t);
        if (!n) {
          var o = t.composedPath ? t.composedPath()[0] : t.target, a = this.suppressDefaultPressSelector ? !this.adapter.eventTargetMatches(o, this.suppressDefaultPressSelector) : !0;
          i && a && this.adapter.clickDefaultButton();
        }
      }
    }, e.prototype.handleDocumentKeydown = function(t) {
      var i = t.key === "Escape" || t.keyCode === 27;
      i && this.escapeKeyAction !== "" && this.close(this.escapeKeyAction);
    }, e.prototype.handleScrollEvent = function() {
      var t = this;
      this.animFrame.request(xe.POLL_SCROLL_POS, function() {
        t.toggleScrollDividerHeader(), t.toggleScrollDividerFooter();
      });
    }, e.prototype.layoutInternal = function() {
      this.autoStackButtons && this.detectStackedButtons(), this.toggleScrollableClasses();
    }, e.prototype.handleAnimationTimerEnd = function() {
      this.animationTimer = 0, this.adapter.removeClass(w.OPENING), this.adapter.removeClass(w.CLOSING);
    }, e.prototype.runNextAnimationFrame = function(t) {
      var i = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        i.animationFrame = 0, clearTimeout(i.animationTimer), i.animationTimer = setTimeout(t, 0);
      });
    }, e.prototype.detectStackedButtons = function() {
      this.adapter.removeClass(w.STACKED);
      var t = this.adapter.areButtonsStacked();
      t && this.adapter.addClass(w.STACKED), t !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = t);
    }, e.prototype.toggleScrollableClasses = function() {
      this.adapter.removeClass(w.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(w.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
    }, e.prototype.toggleScrollDividerHeader = function() {
      this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(w.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(w.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(w.SCROLL_DIVIDER_HEADER);
    }, e.prototype.toggleScrollDividerFooter = function() {
      this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(w.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(w.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(w.SCROLL_DIVIDER_FOOTER);
    }, e;
  }(it)
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
function be(r) {
  return r === void 0 && (r = window), Ki(r) ? { passive: !0 } : !1;
}
function Ki(r) {
  r === void 0 && (r = window);
  var e = !1;
  try {
    var t = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        return e = !0, !1;
      }
    }, i = function() {
    };
    r.document.addEventListener("test", i, t), r.document.removeEventListener("test", i, t);
  } catch {
    e = !1;
  }
  return e;
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const V = (r) => (
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
          const l = this.constructor._observers.get(a);
          l !== void 0 && l.call(this, this[a], o);
        });
      };
    }
    e.constructor._observers.set(t, r);
  }
), Ie = document.$blockingElements;
class N extends tt {
  constructor() {
    super(...arguments), this.hideActions = !1, this.stacked = !1, this.heading = "", this.scrimClickAction = "close", this.escapeKeyAction = "close", this.open = !1, this.defaultAction = "close", this.actionAttribute = "dialogAction", this.initialFocusAttribute = "dialogInitialFocus", this.initialSupressDefaultPressSelector = "", this.mdcFoundationClass = ji, this.boundHandleClick = null, this.boundHandleKeydown = null, this.boundHandleDocumentKeydown = null;
  }
  set suppressDefaultPressSelector(e) {
    this.mdcFoundation ? this.mdcFoundation.setSuppressDefaultPressSelector(e) : this.initialSupressDefaultPressSelector = e;
  }
  get suppressDefaultPressSelector() {
    return this.mdcFoundation ? this.mdcFoundation.getSuppressDefaultPressSelector() : this.initialSupressDefaultPressSelector;
  }
  get primaryButton() {
    let e = this.primarySlot.assignedNodes();
    e = e.filter((i) => i instanceof HTMLElement);
    const t = e[0];
    return t || null;
  }
  emitNotification(e, t) {
    const i = { detail: t ? { action: t } : {} }, n = new CustomEvent(e, i);
    this.dispatchEvent(n);
  }
  getInitialFocusEl() {
    const e = `[${this.initialFocusAttribute}]`, t = this.querySelector(e);
    if (t)
      return t;
    const n = this.primarySlot.assignedNodes({ flatten: !0 }), o = this.searchNodeTreesForAttribute(n, this.initialFocusAttribute);
    if (o)
      return o;
    const s = this.secondarySlot.assignedNodes({ flatten: !0 }), l = this.searchNodeTreesForAttribute(s, this.initialFocusAttribute);
    if (l)
      return l;
    const x = this.contentSlot.assignedNodes({ flatten: !0 });
    return this.searchNodeTreesForAttribute(x, this.initialFocusAttribute);
  }
  searchNodeTreesForAttribute(e, t) {
    for (const i of e)
      if (i instanceof HTMLElement) {
        if (i.hasAttribute(t))
          return i;
        {
          const n = i.querySelector(`[${t}]`);
          if (n)
            return n;
        }
      }
    return null;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Ni(this.mdcRoot)), { addBodyClass: () => document.body.style.overflow = "hidden", removeBodyClass: () => document.body.style.overflow = "", areButtonsStacked: () => this.stacked, clickDefaultButton: () => {
      const e = this.primaryButton;
      e && e.click();
    }, eventTargetMatches: (e, t) => e ? et(e, t) : !1, getActionFromEvent: (e) => {
      if (!e.target)
        return "";
      const t = Fi(e.target, `[${this.actionAttribute}]`);
      return t && t.getAttribute(this.actionAttribute);
    }, getInitialFocusEl: () => this.getInitialFocusEl(), isContentScrollable: () => {
      const e = this.contentElement;
      return e ? e.scrollHeight > e.offsetHeight : !1;
    }, notifyClosed: (e) => this.emitNotification("closed", e), notifyClosing: (e) => {
      this.closingDueToDisconnect || (this.open = !1), this.emitNotification("closing", e);
    }, notifyOpened: () => this.emitNotification("opened"), notifyOpening: () => {
      this.open = !0, this.emitNotification("opening");
    }, reverseButtons: () => {
    }, releaseFocus: () => {
      Ie.remove(this);
    }, trapFocus: (e) => {
      this.isConnected && (Ie.push(this), e && e.focus());
    }, registerContentEventHandler: (e, t) => {
      this.contentElement.addEventListener(e, t);
    }, deregisterContentEventHandler: (e, t) => {
      this.contentElement.removeEventListener(e, t);
    }, isScrollableContentAtTop: () => {
      const e = this.contentElement;
      return e ? e.scrollTop === 0 : !1;
    }, isScrollableContentAtBottom: () => {
      const e = this.contentElement;
      return e ? Math.ceil(e.scrollHeight - e.scrollTop) === e.clientHeight : !1;
    }, registerWindowEventHandler: (e, t) => {
      window.addEventListener(e, t, be());
    }, deregisterWindowEventHandler: (e, t) => {
      window.removeEventListener(e, t, be());
    } });
  }
  render() {
    const e = {
      [w.STACKED]: this.stacked
    };
    let t = C``;
    this.heading && (t = this.renderHeading());
    const i = {
      "mdc-dialog__actions": !this.hideActions
    };
    return C`
    <div class="mdc-dialog ${oe(e)}"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="title"
        aria-describedby="content">
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          ${t}
          <div id="content" class="mdc-dialog__content">
            <slot id="contentSlot"></slot>
          </div>
          <footer
              id="actions"
              class="${oe(i)}">
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
    return C`
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
    super.disconnectedCallback(), this.open && this.mdcFoundation && (this.removeEventListeners(), this.closingDueToDisconnect = !0, this.mdcFoundation.close(this.currentAction || this.defaultAction), this.closingDueToDisconnect = !1, this.currentAction = void 0, Ie.remove(this));
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
      const t = this.getRootNode(), i = t instanceof Document ? t.activeElement : null;
      i instanceof HTMLElement && i.blur();
    }
  }
  setEventListeners() {
    this.boundHandleClick && this.mdcRoot.addEventListener("click", this.boundHandleClick), this.boundHandleKeydown && this.mdcRoot.addEventListener("keydown", this.boundHandleKeydown, be()), this.boundHandleDocumentKeydown && document.addEventListener("keydown", this.boundHandleDocumentKeydown, be());
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
  W(".mdc-dialog")
], N.prototype, "mdcRoot", void 0);
c([
  W('slot[name="primaryAction"]')
], N.prototype, "primarySlot", void 0);
c([
  W('slot[name="secondaryAction"]')
], N.prototype, "secondarySlot", void 0);
c([
  W("#contentSlot")
], N.prototype, "contentSlot", void 0);
c([
  W(".mdc-dialog__content")
], N.prototype, "contentElement", void 0);
c([
  W(".mdc-container")
], N.prototype, "conatinerElement", void 0);
c([
  b({ type: Boolean })
], N.prototype, "hideActions", void 0);
c([
  b({ type: Boolean }),
  V(function() {
    this.forceLayout();
  })
], N.prototype, "stacked", void 0);
c([
  b({ type: String })
], N.prototype, "heading", void 0);
c([
  b({ type: String }),
  V(function(r) {
    this.mdcFoundation.setScrimClickAction(r);
  })
], N.prototype, "scrimClickAction", void 0);
c([
  b({ type: String }),
  V(function(r) {
    this.mdcFoundation.setEscapeKeyAction(r);
  })
], N.prototype, "escapeKeyAction", void 0);
c([
  b({ type: Boolean, reflect: !0 }),
  V(function(r) {
    this.mdcFoundation && this.isConnected && (r ? (this.setEventListeners(), this.mdcFoundation.open()) : (this.removeEventListeners(), this.mdcFoundation.close(this.currentAction || this.defaultAction), this.currentAction = void 0));
  })
], N.prototype, "open", void 0);
c([
  b()
], N.prototype, "defaultAction", void 0);
c([
  b()
], N.prototype, "actionAttribute", void 0);
c([
  b()
], N.prototype, "initialFocusAttribute", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const qi = te`.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__surface-scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6)}.mdc-dialog .mdc-dialog__close{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-dialog .mdc-dialog__close:hover .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions,.mdc-dialog.mdc-dialog--scrollable.mdc-dialog-scroll-divider-footer .mdc-dialog__actions{border-color:rgba(0,0,0,.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:1px solid rgba(0,0,0,.12);margin-bottom:0}.mdc-dialog.mdc-dialog-scroll-divider-header.mdc-dialog--fullscreen .mdc-dialog__header{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}@media(max-width: 960px)and (max-height: 1440px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;max-width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 1023px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:calc(100vw - 112px)}}@media(max-width: 720px)and (max-height: 1023px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:560px}}@media(max-width: 720px)and (max-height: 1023px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (max-height: 1023px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px)and (max-height: 1023px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100%;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(max-width: 600px)and (max-height: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px)and (min-height: 1440px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0,0,0,.12);display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;line-height:normal;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid transparent;display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid transparent}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:0.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, 0.03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit);flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;-webkit-overflow-scrolling:touch}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1;z-index:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}#actions:not(.mdc-dialog__actions){display:none}.mdc-dialog__surface{box-shadow:var(--mdc-dialog-box-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}@media(min-width: 560px){.mdc-dialog .mdc-dialog__surface{max-width:560px;max-width:var(--mdc-dialog-max-width, 560px)}}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0, 0, 0, 0.32);background-color:var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32))}.mdc-dialog .mdc-dialog__title{color:rgba(0, 0, 0, 0.87);color:var(--mdc-dialog-heading-ink-color, rgba(0, 0, 0, 0.87))}.mdc-dialog .mdc-dialog__content{color:rgba(0, 0, 0, 0.6);color:var(--mdc-dialog-content-ink-color, rgba(0, 0, 0, 0.6))}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12))}.mdc-dialog .mdc-dialog__surface{min-width:280px;min-width:var(--mdc-dialog-min-width, 280px)}.mdc-dialog .mdc-dialog__surface{max-height:var(--mdc-dialog-max-height, calc(100% - 32px))}#actions ::slotted(*){margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){margin-left:0;margin-right:8px}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){text-align:left}.mdc-dialog--stacked #actions{flex-direction:column-reverse}.mdc-dialog--stacked #actions *:not(:last-child) ::slotted(*){flex-basis:.000000001px;margin-top:12px}`;
let ze = class extends N {
};
ze.styles = [qi];
ze = c([
  se("mwc-dialog")
], ze);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class D extends Q {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new Wt(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const e = this.renderText(), t = this.graphic ? this.renderGraphic() : C``, i = this.hasMeta ? this.renderMeta() : C``;
    return C`
      ${this.renderRipple()}
      ${t}
      ${e}
      ${i}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? C`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? C`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return C`
      <span class="mdc-deprecated-list-item__graphic material-icons ${oe(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return C`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return C`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return C`<slot></slot>`;
  }
  renderTwoline() {
    return C`
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
c([
  W("slot")
], D.prototype, "slotElement", void 0);
c([
  Ht("mwc-ripple")
], D.prototype, "ripple", void 0);
c([
  b({ type: String })
], D.prototype, "value", void 0);
c([
  b({ type: String, reflect: !0 })
], D.prototype, "group", void 0);
c([
  b({ type: Number, reflect: !0 })
], D.prototype, "tabindex", void 0);
c([
  b({ type: Boolean, reflect: !0 }),
  V(function(r) {
    r ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], D.prototype, "disabled", void 0);
c([
  b({ type: Boolean, reflect: !0 })
], D.prototype, "twoline", void 0);
c([
  b({ type: Boolean, reflect: !0 })
], D.prototype, "activated", void 0);
c([
  b({ type: String, reflect: !0 })
], D.prototype, "graphic", void 0);
c([
  b({ type: Boolean })
], D.prototype, "multipleGraphics", void 0);
c([
  b({ type: Boolean })
], D.prototype, "hasMeta", void 0);
c([
  b({ type: Boolean, reflect: !0 }),
  V(function(r) {
    r ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], D.prototype, "noninteractive", void 0);
c([
  b({ type: Boolean, reflect: !0 }),
  V(function(r) {
    const e = this.getAttribute("role"), t = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (t && r ? this.setAttribute("aria-selected", "true") : t && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(r, "property");
  })
], D.prototype, "selected", void 0);
c([
  B()
], D.prototype, "shouldRenderRipple", void 0);
c([
  B()
], D.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Xi = te`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Ve = class extends D {
};
Ve.styles = [Xi];
Ve = c([
  se("mwc-list-item")
], Ve);
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
const Re = /* @__PURE__ */ new WeakMap(), wt = Ke((r) => (e) => {
  const t = Re.get(e);
  if (r === void 0 && e instanceof ae) {
    if (t !== void 0 || !Re.has(e)) {
      const i = e.committer.name;
      e.committer.element.removeAttribute(i);
    }
  } else r !== t && e.setValue(r);
  Re.set(e, r);
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
var v = {
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
}, O = /* @__PURE__ */ new Set();
O.add(v.BACKSPACE);
O.add(v.ENTER);
O.add(v.SPACEBAR);
O.add(v.PAGE_UP);
O.add(v.PAGE_DOWN);
O.add(v.END);
O.add(v.HOME);
O.add(v.ARROW_LEFT);
O.add(v.ARROW_UP);
O.add(v.ARROW_RIGHT);
O.add(v.ARROW_DOWN);
O.add(v.DELETE);
O.add(v.ESCAPE);
O.add(v.TAB);
var U = {
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
}, P = /* @__PURE__ */ new Map();
P.set(U.BACKSPACE, v.BACKSPACE);
P.set(U.ENTER, v.ENTER);
P.set(U.SPACEBAR, v.SPACEBAR);
P.set(U.PAGE_UP, v.PAGE_UP);
P.set(U.PAGE_DOWN, v.PAGE_DOWN);
P.set(U.END, v.END);
P.set(U.HOME, v.HOME);
P.set(U.ARROW_LEFT, v.ARROW_LEFT);
P.set(U.ARROW_UP, v.ARROW_UP);
P.set(U.ARROW_RIGHT, v.ARROW_RIGHT);
P.set(U.ARROW_DOWN, v.ARROW_DOWN);
P.set(U.DELETE, v.DELETE);
P.set(U.ESCAPE, v.ESCAPE);
P.set(U.TAB, v.TAB);
var Z = /* @__PURE__ */ new Set();
Z.add(v.PAGE_UP);
Z.add(v.PAGE_DOWN);
Z.add(v.END);
Z.add(v.HOME);
Z.add(v.ARROW_LEFT);
Z.add(v.ARROW_UP);
Z.add(v.ARROW_RIGHT);
Z.add(v.ARROW_DOWN);
function q(r) {
  var e = r.key;
  if (O.has(e))
    return e;
  var t = P.get(r.keyCode);
  return t || v.UNKNOWN;
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
var X, j, A = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
X = {}, X["" + A.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", X["" + A.LIST_ITEM_CLASS] = "mdc-list-item", X["" + A.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", X["" + A.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", X["" + A.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", X["" + A.ROOT] = "mdc-list";
var re = (j = {}, j["" + A.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", j["" + A.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", j["" + A.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", j["" + A.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", j["" + A.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", j["" + A.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", j["" + A.ROOT] = "mdc-deprecated-list", j), _e = {
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
    .` + A.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + A.LIST_ITEM_CLASS + ` a,
    .` + re[A.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + re[A.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + A.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + A.LIST_ITEM_CLASS + ` a,
    .` + A.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + A.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + re[A.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + re[A.LIST_ITEM_CLASS] + ` a,
    .` + re[A.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + re[A.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, H = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const $e = (r, e) => r - e, Ji = (r, e) => {
  const t = Array.from(r), i = Array.from(e), n = { added: [], removed: [] }, o = t.sort($e), a = i.sort($e);
  let s = 0, l = 0;
  for (; s < o.length || l < a.length; ) {
    const _ = o[s], x = a[l];
    if (_ === x) {
      s++, l++;
      continue;
    }
    if (_ !== void 0 && (x === void 0 || _ < x)) {
      n.removed.push(_), s++;
      continue;
    }
    if (x !== void 0 && (_ === void 0 || x < _)) {
      n.added.push(x), l++;
      continue;
    }
  }
  return n;
}, Qi = ["input", "button", "textarea", "select"];
function pe(r) {
  return r instanceof Set;
}
const Te = (r) => {
  const e = r === H.UNSET_INDEX ? /* @__PURE__ */ new Set() : r;
  return pe(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class rt extends it {
  constructor(e) {
    super(Object.assign(Object.assign({}, rt.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = H.UNSET_INDEX, this.focusedItemIndex_ = H.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return _e;
  }
  static get numbers() {
    return H;
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
      if (!pe(t)) {
        const i = t === H.UNSET_INDEX;
        this.selectedIndex_ = i ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([t]);
      }
    } else if (pe(t))
      if (t.size) {
        const i = Array.from(t).sort($e);
        this.selectedIndex_ = i[0];
      } else
        this.selectedIndex_ = H.UNSET_INDEX;
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
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(Te(e)) : this.setSingleSelectionAtIndex_(e));
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
    const n = q(e) === "ArrowLeft", o = q(e) === "ArrowUp", a = q(e) === "ArrowRight", s = q(e) === "ArrowDown", l = q(e) === "Home", _ = q(e) === "End", x = q(e) === "Enter", u = q(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      o || _ ? (e.preventDefault(), this.focusLastElement()) : (s || l) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let p = this.adapter.getFocusedElementIndex();
    if (p === -1 && (p = i, p < 0))
      return;
    let d;
    if (this.isVertical_ && s || !this.isVertical_ && a)
      this.preventDefaultEvent(e), d = this.focusNextElement(p);
    else if (this.isVertical_ && o || !this.isVertical_ && n)
      this.preventDefaultEvent(e), d = this.focusPrevElement(p);
    else if (l)
      this.preventDefaultEvent(e), d = this.focusFirstElement();
    else if (_)
      this.preventDefaultEvent(e), d = this.focusLastElement();
    else if ((x || u) && t) {
      const h = e.target;
      if (h && h.tagName === "A" && x)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(p, !0);
    }
    this.focusedItemIndex_ = p, d !== void 0 && (this.setTabindexAtIndex_(d), this.focusedItemIndex_ = d);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, t, i) {
    e !== H.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, t, i), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
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
    Qi.indexOf(i) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, t = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== H.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), t && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, t = !0) {
    const i = Te(this.selectedIndex_), n = Ji(i, e);
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
    this.selectedIndex_ === H.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, _e.ARIA_CURRENT));
    const t = this.ariaCurrentAttrValue_ !== null, i = t ? _e.ARIA_CURRENT : _e.ARIA_SELECTED;
    this.selectedIndex_ !== H.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, i, "false");
    const n = t ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, i, n);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === H.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== H.UNSET_INDEX ? e = this.selectedIndex_ : pe(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
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
      return e === H.UNSET_INDEX || this.isIndexInRange_(e);
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
    this.isMulti_ && (n = /* @__PURE__ */ new Set([e])), this.isIndexValid_(n) && (this.isMulti_ ? this.toggleMultiAtIndex(e, i, t) : t || i ? this.setSingleSelectionAtIndex_(e, t) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(H.UNSET_INDEX), t && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, t, i = !0) {
    let n = !1;
    t === void 0 ? n = !this.adapter.getSelectedStateForElementIndex(e) : n = t;
    const o = Te(this.selectedIndex_);
    n ? o.add(e) : o.delete(e), this.setMultiSelectionAtIndex_(o, i);
  }
}
function Zi(r, e = 50) {
  let t;
  return function(i = !0) {
    clearTimeout(t), t = setTimeout(() => {
      r(i);
    }, e);
  };
}
const ye = (r) => r.hasAttribute("mwc-list-item");
function Yi() {
  const r = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), r();
}
class z extends tt {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = rt, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = Zi(this.layout.bind(this));
    this.debouncedLayout = (t = !0) => {
      Yi.call(this), e(t);
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
      ye(a) && (i.push(a), a._managingList = this), a.hasAttribute("divider") && !a.hasAttribute("role") && a.setAttribute("role", "separator");
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
    if (!pe(e))
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
    return C`
      <!-- @ts-ignore -->
      <ul
          tabindex=${i}
          role="${wt(e)}"
          aria-label="${wt(t)}"
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
    return this.emptyMessage !== void 0 && t.length === 0 ? C`
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
      const t = this.getIndexOfTarget(e), i = e.target, n = ye(i);
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
      if (ki(n) && ye(n) && (o = t.indexOf(n)), o !== -1)
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
      isFocusInsideList: () => Oi(this),
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
    const e = Gt();
    if (!e.length)
      return -1;
    for (let t = e.length - 1; t >= 0; t--) {
      const i = e[t];
      if (ye(i))
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
c([
  b({ type: String })
], z.prototype, "emptyMessage", void 0);
c([
  W(".mdc-deprecated-list")
], z.prototype, "mdcRoot", void 0);
c([
  Ut("", !0, "*")
], z.prototype, "assignedElements", void 0);
c([
  Ut("", !0, '[tabindex="0"]')
], z.prototype, "tabbableElements", void 0);
c([
  b({ type: Boolean }),
  V(function(r) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(r);
  })
], z.prototype, "activatable", void 0);
c([
  b({ type: Boolean }),
  V(function(r, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(r), e !== void 0 && this.layout();
  })
], z.prototype, "multi", void 0);
c([
  b({ type: Boolean }),
  V(function(r) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(r);
  })
], z.prototype, "wrapFocus", void 0);
c([
  b({ type: String }),
  V(function(r, e) {
    e !== void 0 && this.updateItems();
  })
], z.prototype, "itemRoles", void 0);
c([
  b({ type: String })
], z.prototype, "innerRole", void 0);
c([
  b({ type: String })
], z.prototype, "innerAriaLabel", void 0);
c([
  b({ type: Boolean })
], z.prototype, "rootTabbable", void 0);
c([
  b({ type: Boolean, reflect: !0 }),
  V(function(r) {
    var e, t;
    if (r) {
      const i = (t = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && t !== void 0 ? t : null;
      this.previousTabindex = i, i && i.setAttribute("tabindex", "-1");
    } else !r && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], z.prototype, "noninteractive", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const er = te`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Ge = class extends z {
};
Ge.styles = [er];
Ge = c([
  se("mwc-list")
], Ge);
var tr = Object.defineProperty, nt = (r, e, t, i) => {
  for (var n = void 0, o = r.length - 1, a; o >= 0; o--)
    (a = r[o]) && (n = a(e, t, n) || n);
  return n && tr(e, t, n), n;
};
class ot extends Q {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
  createMessage(e, t) {
    let i = e;
    return i !== null && t !== null ? i += " : " + t : t !== null && (i = t), i ?? void 0;
  }
  get sclHistory() {
    return this.doc ? Array.from(
      this.doc.querySelectorAll(":root > Header > History > Hitem")
    ) : [];
  }
  async run() {
    this.historyLog.open = !0;
  }
  renderSclHistoryEntry(e) {
    const t = this.createMessage(
      e.getAttribute("who"),
      e.getAttribute("why")
    ), i = e.getAttribute("what");
    return C` <abbr title="${i}">
      <mwc-list-item class="sclHistory" ?twoline=${!!t}>
        <span>
          <tt>${e.getAttribute("when")}</tt>
          ${i}</span
        >
        <span slot="secondary">${t}</span>
      </mwc-list-item></abbr
    >`;
  }
  renderSclHistory() {
    return this.sclHistory.length > 0 ? this.sclHistory.slice().reverse().map(this.renderSclHistoryEntry, this) : C`<mwc-list-item disabled>
        <span>${Ae("history.noEntries")}</span>
      </mwc-list-item>`;
  }
  render() {
    return C` <mwc-dialog id="historyLog" heading="${Ae("history.name")}">
      <mwc-list id="historyLogContent" wrapFocus
        >${this.renderSclHistory()}</mwc-list
      >
      <mwc-button slot="secondaryAction" dialogaction="close"
        >${Ae("close")}</mwc-button
      >
    </mwc-dialog>`;
  }
  static {
    this.styles = te`
    .sclHistory {
      display: flex;
    }
    #historyLog {
      --mdc-dialog-min-width: 92vw;
    }
    abbr {
      text-decoration: none;
    }
  `;
  }
}
nt([
  b({ attribute: !1 })
], ot.prototype, "doc");
nt([
  b({ type: Number })
], ot.prototype, "editCount");
nt([
  W("#historyLog")
], ot.prototype, "historyLog");
export {
  ot as default
};
