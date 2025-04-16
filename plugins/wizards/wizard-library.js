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
const $n = /* @__PURE__ */ new WeakMap(), dt = (t) => (...e) => {
  const i = t(...e);
  return $n.set(i, !0), i;
}, xt = (t) => typeof t == "function" && $n.has(t);
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
const Ui = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, Ci = (t, e, i = null) => {
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
const _e = {}, Te = {};
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
const De = `{{lit-${String(Math.random()).slice(2)}}}`, On = `<!--${De}-->`, Wi = new RegExp(`${De}|${On}`), ft = "$lit$";
class Pn {
  constructor(e, i) {
    this.parts = [], this.element = i;
    const n = [], r = [], a = document.createTreeWalker(i.content, 133, null, !1);
    let o = 0, l = -1, d = 0;
    const { strings: c, values: { length: h } } = e;
    for (; d < h; ) {
      const f = a.nextNode();
      if (f === null) {
        a.currentNode = r.pop();
        continue;
      }
      if (l++, f.nodeType === 1) {
        if (f.hasAttributes()) {
          const g = f.attributes, { length: y } = g;
          let v = 0;
          for (let S = 0; S < y; S++)
            ji(g[S].name, ft) && v++;
          for (; v-- > 0; ) {
            const S = c[d], T = ei.exec(S)[2], _ = T.toLowerCase() + ft, R = f.getAttribute(_);
            f.removeAttribute(_);
            const G = R.split(Wi);
            this.parts.push({ type: "attribute", index: l, name: T, strings: G }), d += G.length - 1;
          }
        }
        f.tagName === "TEMPLATE" && (r.push(f), a.currentNode = f.content);
      } else if (f.nodeType === 3) {
        const g = f.data;
        if (g.indexOf(De) >= 0) {
          const y = f.parentNode, v = g.split(Wi), S = v.length - 1;
          for (let T = 0; T < S; T++) {
            let _, R = v[T];
            if (R === "")
              _ = Be();
            else {
              const G = ei.exec(R);
              G !== null && ji(G[2], ft) && (R = R.slice(0, G.index) + G[1] + G[2].slice(0, -ft.length) + G[3]), _ = document.createTextNode(R);
            }
            y.insertBefore(_, f), this.parts.push({ type: "node", index: ++l });
          }
          v[S] === "" ? (y.insertBefore(Be(), f), n.push(f)) : f.data = v[S], d += S;
        }
      } else if (f.nodeType === 8)
        if (f.data === De) {
          const g = f.parentNode;
          (f.previousSibling === null || l === o) && (l++, g.insertBefore(Be(), f)), o = l, this.parts.push({ type: "node", index: l }), f.nextSibling === null ? f.data = "" : (n.push(f), l--), d++;
        } else {
          let g = -1;
          for (; (g = f.data.indexOf(De, g + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), d++;
        }
    }
    for (const f of n)
      f.parentNode.removeChild(f);
  }
}
const ji = (t, e) => {
  const i = t.length - e.length;
  return i >= 0 && t.slice(i) === e;
}, Fn = (t) => t.index !== -1, Be = () => document.createComment(""), ei = (
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
class ti {
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
    const e = Ui ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), i = [], n = this.template.parts, r = document.createTreeWalker(e, 133, null, !1);
    let a = 0, o = 0, l, d = r.nextNode();
    for (; a < n.length; ) {
      if (l = n[a], !Fn(l)) {
        this.__parts.push(void 0), a++;
        continue;
      }
      for (; o < l.index; )
        o++, d.nodeName === "TEMPLATE" && (i.push(d), r.currentNode = d.content), (d = r.nextNode()) === null && (r.currentNode = i.pop(), d = r.nextNode());
      if (l.type === "node") {
        const c = this.processor.handleTextExpression(this.options);
        c.insertAfterNode(d.previousSibling), this.__parts.push(c);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(d, l.name, l.strings, this.options));
      a++;
    }
    return Ui && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const Ki = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (t) => t }), sa = ` ${De} `;
class Vn {
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
      const l = ei.exec(a);
      l === null ? i += a + (n ? sa : On) : i += a.substr(0, l.index) + l[1] + l[2] + ft + l[3] + De;
    }
    return i += this.strings[e], i;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let i = this.getHTML();
    return Ki !== void 0 && (i = Ki.createHTML(i)), e.innerHTML = i, e;
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
const Ft = (t) => t === null || !(typeof t == "object" || typeof t == "function"), ii = (t) => Array.isArray(t) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(t && t[Symbol.iterator]);
class Mn {
  constructor(e, i, n) {
    this.dirty = !0, this.element = e, this.name = i, this.strings = n, this.parts = [];
    for (let r = 0; r < n.length - 1; r++)
      this.parts[r] = this._createPart();
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */
  _createPart() {
    return new Ge(this);
  }
  _getValue() {
    const e = this.strings, i = e.length - 1, n = this.parts;
    if (i === 1 && e[0] === "" && e[1] === "") {
      const a = n[0].value;
      if (typeof a == "symbol")
        return String(a);
      if (typeof a == "string" || !ii(a))
        return a;
    }
    let r = "";
    for (let a = 0; a < i; a++) {
      r += e[a];
      const o = n[a];
      if (o !== void 0) {
        const l = o.value;
        if (Ft(l) || !ii(l))
          r += typeof l == "string" ? l : String(l);
        else
          for (const d of l)
            r += typeof d == "string" ? d : String(d);
      }
    }
    return r += e[i], r;
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
  }
}
let Ge = class {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== _e && (!Ft(e) || e !== this.value) && (this.value = e, xt(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; xt(this.value); ) {
      const e = this.value;
      this.value = _e, e(this);
    }
    this.value !== _e && this.committer.commit();
  }
};
class et {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(Be()), this.endNode = e.appendChild(Be());
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
    e.__insert(this.startNode = Be()), e.__insert(this.endNode = Be());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = Be()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; xt(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = _e, i(this);
    }
    const e = this.__pendingValue;
    e !== _e && (Ft(e) ? e !== this.value && this.__commitText(e) : e instanceof Vn ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : ii(e) ? this.__commitIterable(e) : e === Te ? (this.value = Te, this.clear()) : this.__commitText(e));
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
    if (this.value instanceof ti && this.value.template === i)
      this.value.update(e.values);
    else {
      const n = new ti(i, e.processor, this.options), r = n._clone();
      n.update(e.values), this.__commitNode(r), this.value = n;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const i = this.value;
    let n = 0, r;
    for (const a of e)
      r = i[n], r === void 0 && (r = new et(this.options), i.push(r), n === 0 ? r.appendIntoPart(this) : r.insertAfterPart(i[n - 1])), r.setValue(a), r.commit(), n++;
    n < i.length && (i.length = n, this.clear(r && r.endNode));
  }
  clear(e = this.startNode) {
    Ci(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
let ki = class {
  constructor(e, i, n) {
    if (this.value = void 0, this.__pendingValue = void 0, n.length !== 2 || n[0] !== "" || n[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = i, this.strings = n;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; xt(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = _e, i(this);
    }
    if (this.__pendingValue === _e)
      return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = _e;
  }
};
class ca extends Mn {
  constructor(e, i, n) {
    super(e, i, n), this.single = n.length === 2 && n[0] === "" && n[1] === "";
  }
  _createPart() {
    return new st(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
  }
}
class st extends Ge {
}
let Bn = !1;
(() => {
  try {
    const t = {
      get capture() {
        return Bn = !0, !1;
      }
    };
    window.addEventListener("test", t, t), window.removeEventListener("test", t, t);
  } catch {
  }
})();
let Ti = class {
  constructor(e, i, n) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = i, this.eventContext = n, this.__boundHandleEvent = (r) => this.handleEvent(r);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; xt(this.__pendingValue); ) {
      const a = this.__pendingValue;
      this.__pendingValue = _e, a(this);
    }
    if (this.__pendingValue === _e)
      return;
    const e = this.__pendingValue, i = this.value, n = e == null || i != null && (e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive), r = e != null && (i == null || n);
    n && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), r && (this.__options = ua(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = _e;
  }
  handleEvent(e) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
};
const ua = (t) => t && (Bn ? { capture: t.capture, passive: t.passive, once: t.once } : t.capture);
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
class ma {
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
    const a = i[0];
    return a === "." ? new ca(e, i.slice(1), n).parts : a === "@" ? [new Ti(e, i.slice(1), r.eventContext)] : a === "?" ? [new ki(e, i.slice(1), n)] : new Mn(e, i, n).parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */
  handleTextExpression(e) {
    return new et(e);
  }
}
const pa = new ma();
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
function ha(t) {
  let e = yt.get(t.type);
  e === void 0 && (e = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, yt.set(t.type, e));
  let i = e.stringsArray.get(t.strings);
  if (i !== void 0)
    return i;
  const n = t.strings.join(De);
  return i = e.keyString.get(n), i === void 0 && (i = new Pn(t, t.getTemplateElement()), e.keyString.set(n, i)), e.stringsArray.set(t.strings, i), i;
}
const yt = /* @__PURE__ */ new Map();
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
const ot = /* @__PURE__ */ new WeakMap(), Ni = (t, e, i) => {
  let n = ot.get(e);
  n === void 0 && (Ci(e, e.firstChild), ot.set(e, n = new et(Object.assign({ templateFactory: ha }, i))), n.appendInto(e)), n.setValue(t), n.commit();
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
typeof window < "u" && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
const u = (t, ...e) => new Vn(t, e, "html", pa), fa = 1e3 * 60, ni = "langChanged";
function ba(t, e, i) {
  return Object.entries(ri(e || {})).reduce((n, [r, a]) => n.replace(new RegExp(`{{[  ]*${r}[  ]*}}`, "gm"), String(ri(a))), t);
}
function ga(t, e) {
  const i = t.split(".");
  let n = e.strings;
  for (; n != null && i.length > 0; )
    n = n[i.shift()];
  return n != null ? n.toString() : null;
}
function ri(t) {
  return typeof t == "function" ? t() : t;
}
const xa = () => ({
  loader: () => Promise.resolve({}),
  empty: (t) => `[${t}]`,
  lookup: ga,
  interpolate: ba,
  translationCache: {}
});
let vt = xa();
function ya(t) {
  return vt = Object.assign(Object.assign({}, vt), t);
}
function va(t) {
  window.dispatchEvent(new CustomEvent(ni, { detail: t }));
}
function _a(t, e, i = vt) {
  va({
    previousStrings: i.strings,
    previousLang: i.lang,
    lang: i.lang = t,
    strings: i.strings = e
  });
}
function wa(t, e) {
  const i = (n) => t(n.detail);
  return window.addEventListener(ni, i, e), () => window.removeEventListener(ni, i);
}
async function Aa(t, e = vt) {
  const i = await e.loader(t, e);
  e.translationCache = {}, _a(t, i, e);
}
function s(t, e, i = vt) {
  let n = i.translationCache[t] || (i.translationCache[t] = i.lookup(t, i) || i.empty(t, i));
  return e = e != null ? ri(e) : null, e != null ? i.interpolate(n, e, i) : n;
}
function Hn(t) {
  return t instanceof et ? t.startNode.isConnected : t instanceof Ge ? t.committer.element.isConnected : t.element.isConnected;
}
function Sa(t) {
  for (const [e] of t)
    Hn(e) || t.delete(e);
}
function Ea(t) {
  "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t);
}
function Ia(t, e) {
  setInterval(() => Ea(() => Sa(t)), e);
}
const qn = /* @__PURE__ */ new Map();
function Ca() {
  wa((t) => {
    for (const [e, i] of qn)
      Hn(e) && ka(e, i, t);
  });
}
Ca();
Ia(qn, fa);
function ka(t, e, i) {
  const n = e(i);
  t.value !== n && (t.setValue(n), t.commit());
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
const Di = 133;
function Gn(t, e) {
  const { element: { content: i }, parts: n } = t, r = document.createTreeWalker(i, Di, null, !1);
  let a = bt(n), o = n[a], l = -1, d = 0;
  const c = [];
  let h = null;
  for (; r.nextNode(); ) {
    l++;
    const f = r.currentNode;
    for (f.previousSibling === h && (h = null), e.has(f) && (c.push(f), h === null && (h = f)), h !== null && d++; o !== void 0 && o.index === l; )
      o.index = h !== null ? -1 : o.index - d, a = bt(n, a), o = n[a];
  }
  c.forEach((f) => f.parentNode.removeChild(f));
}
const Ta = (t) => {
  let e = t.nodeType === 11 ? 0 : 1;
  const i = document.createTreeWalker(t, Di, null, !1);
  for (; i.nextNode(); )
    e++;
  return e;
}, bt = (t, e = -1) => {
  for (let i = e + 1; i < t.length; i++) {
    const n = t[i];
    if (Fn(n))
      return i;
  }
  return -1;
};
function Na(t, e, i = null) {
  const { element: { content: n }, parts: r } = t;
  if (i == null) {
    n.appendChild(e);
    return;
  }
  const a = document.createTreeWalker(n, Di, null, !1);
  let o = bt(r), l = 0, d = -1;
  for (; a.nextNode(); )
    for (d++, a.currentNode === i && (l = Ta(e), i.parentNode.insertBefore(e, i)); o !== -1 && r[o].index === d; ) {
      if (l > 0) {
        for (; o !== -1; )
          r[o].index += l, o = bt(r, o);
        return;
      }
      o = bt(r, o);
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
const Un = (t, e) => `${t}--${e}`;
let Rt = !0;
typeof window.ShadyCSS > "u" ? Rt = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), Rt = !1);
const Da = (t) => (e) => {
  const i = Un(e.type, t);
  let n = yt.get(i);
  n === void 0 && (n = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, yt.set(i, n));
  let r = n.stringsArray.get(e.strings);
  if (r !== void 0)
    return r;
  const a = e.strings.join(De);
  if (r = n.keyString.get(a), r === void 0) {
    const o = e.getTemplateElement();
    Rt && window.ShadyCSS.prepareTemplateDom(o, t), r = new Pn(e, o), n.keyString.set(a, r);
  }
  return n.stringsArray.set(e.strings, r), r;
}, La = ["html", "svg"], za = (t) => {
  La.forEach((e) => {
    const i = yt.get(Un(e, t));
    i !== void 0 && i.keyString.forEach((n) => {
      const { element: { content: r } } = n, a = /* @__PURE__ */ new Set();
      Array.from(r.querySelectorAll("style")).forEach((o) => {
        a.add(o);
      }), Gn(n, a);
    });
  });
}, Wn = /* @__PURE__ */ new Set(), Ra = (t, e, i) => {
  Wn.add(t);
  const n = i ? i.element : document.createElement("template"), r = e.querySelectorAll("style"), { length: a } = r;
  if (a === 0) {
    window.ShadyCSS.prepareTemplateStyles(n, t);
    return;
  }
  const o = document.createElement("style");
  for (let c = 0; c < a; c++) {
    const h = r[c];
    h.parentNode.removeChild(h), o.textContent += h.textContent;
  }
  za(t);
  const l = n.content;
  i ? Na(i, o, l.firstChild) : l.insertBefore(o, l.firstChild), window.ShadyCSS.prepareTemplateStyles(n, t);
  const d = l.querySelector("style");
  if (window.ShadyCSS.nativeShadow && d !== null)
    e.insertBefore(d.cloneNode(!0), e.firstChild);
  else if (i) {
    l.insertBefore(o, l.firstChild);
    const c = /* @__PURE__ */ new Set();
    c.add(o), Gn(i, c);
  }
}, $a = (t, e, i) => {
  if (!i || typeof i != "object" || !i.scopeName)
    throw new Error("The `scopeName` option is required.");
  const n = i.scopeName, r = ot.has(e), a = Rt && e.nodeType === 11 && !!e.host, o = a && !Wn.has(n), l = o ? document.createDocumentFragment() : e;
  if (Ni(t, l, Object.assign({ templateFactory: Da(n) }, i)), o) {
    const d = ot.get(l);
    ot.delete(l);
    const c = d.value instanceof ti ? d.value.template : void 0;
    Ra(n, l, c), Ci(e, e.firstChild), e.appendChild(l), ot.set(e, d);
  }
  !r && a && window.ShadyCSS.styleElement(e.host);
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
var jn;
window.JSCompiler_renameProperty = (t, e) => t;
const ai = {
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
}, Kn = (t, e) => e !== t && (e === e || t === t), Gt = {
  attribute: !0,
  type: String,
  converter: ai,
  reflect: !1,
  hasChanged: Kn
}, Ut = 1, Xi = 4, Yi = 8, Zi = 16, oi = "finalized";
class Xn extends HTMLElement {
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
  static createProperty(e, i = Gt) {
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
        const a = this[e];
        this[i] = r, this.requestUpdateInternal(e, a, n);
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
    return this._classProperties && this._classProperties.get(e) || Gt;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */
  static finalize() {
    const e = Object.getPrototypeOf(this);
    if (e.hasOwnProperty(oi) || e.finalize(), this[oi] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
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
  static _valueHasChanged(e, i, n = Kn) {
    return n(e, i);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(e, i) {
    const n = i.type, r = i.converter || ai, a = typeof r == "function" ? r : r.fromAttribute;
    return a ? a(e, n) : e;
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
    return (r && r.toAttribute || ai.toAttribute)(e, n);
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
  _propertyToAttribute(e, i, n = Gt) {
    const r = this.constructor, a = r._attributeNameForProperty(e, n);
    if (a !== void 0) {
      const o = r._propertyValueToAttribute(i, n);
      if (o === void 0)
        return;
      this._updateState = this._updateState | Yi, o == null ? this.removeAttribute(a) : this.setAttribute(a, o), this._updateState = this._updateState & -9;
    }
  }
  _attributeToProperty(e, i) {
    if (this._updateState & Yi)
      return;
    const n = this.constructor, r = n._attributeToPropertyMap.get(e);
    if (r !== void 0) {
      const a = n.getPropertyOptions(r);
      this._updateState = this._updateState | Zi, this[r] = // tslint:disable-next-line:no-any
      n._propertyValueFromAttribute(i, a), this._updateState = this._updateState & -17;
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
      const a = this.constructor;
      n = n || a.getPropertyOptions(e), a._valueHasChanged(this[e], i, n.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, i), n.reflect === !0 && !(this._updateState & Zi) && (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(e, n))) : r = !1;
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
    this._updateState = this._updateState | Xi;
    try {
      await this._updatePromise;
    } catch {
    }
    const e = this.performUpdate();
    return e != null && await e, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & Xi;
  }
  get hasUpdated() {
    return this._updateState & Ut;
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
    e && (this._updateState & Ut || (this._updateState = this._updateState | Ut, this.firstUpdated(i)), this.updated(i));
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
jn = oi;
Xn[jn] = !0;
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
const Oa = (t, e) => (window.customElements.define(t, e), e), Pa = (t, e) => {
  const { kind: i, elements: n } = e;
  return {
    kind: i,
    elements: n,
    // This callback is called once the class is otherwise fully defined
    finisher(r) {
      window.customElements.define(t, r);
    }
  };
}, X = (t) => (e) => typeof e == "function" ? Oa(t, e) : Pa(t, e), Fa = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), { finisher(i) {
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
}, Va = (t, e, i) => {
  e.constructor.createProperty(i, t);
};
function b(t) {
  return (e, i) => i !== void 0 ? Va(t, e, i) : Fa(t, e);
}
function Ma(t) {
  return b({ attribute: !1, hasChanged: void 0 });
}
const E = (t) => Ma();
function C(t, e) {
  return (i, n) => {
    const r = {
      get() {
        return this.renderRoot.querySelector(t);
      },
      enumerable: !0,
      configurable: !0
    };
    return n !== void 0 ? Li(r, i, n) : zi(r, i);
  };
}
function wt(t) {
  return (e, i) => {
    const n = {
      async get() {
        return await this.updateComplete, this.renderRoot.querySelector(t);
      },
      enumerable: !0,
      configurable: !0
    };
    return i !== void 0 ? Li(n, e, i) : zi(n, e);
  };
}
const Li = (t, e, i) => {
  Object.defineProperty(e, i, t);
}, zi = (t, e) => ({
  kind: "method",
  placement: "prototype",
  key: e.key,
  descriptor: t
}), Ba = (t, e) => Object.assign(Object.assign({}, e), { finisher(i) {
  Object.assign(i.prototype[e.key], t);
} }), Ha = (
  // tslint:disable-next-line:no-any legacy decorator
  (t, e, i) => {
    Object.assign(e[i], t);
  }
);
function Ue(t) {
  return (e, i) => i !== void 0 ? Ha(t, e, i) : Ba(t, e);
}
const Qi = Element.prototype, qa = Qi.msMatchesSelector || Qi.webkitMatchesSelector;
function Ri(t = "", e = !1, i = "") {
  return (n, r) => {
    const a = {
      get() {
        const o = `slot${t ? `[name=${t}]` : ":not([name])"}`, l = this.renderRoot.querySelector(o);
        let d = l && l.assignedNodes({ flatten: e });
        return d && i && (d = d.filter((c) => c.nodeType === Node.ELEMENT_NODE && // tslint:disable-next-line:no-any testing existence on older browsers
        (c.matches ? c.matches(i) : qa.call(c, i)))), d;
      },
      enumerable: !0,
      configurable: !0
    };
    return r !== void 0 ? Li(a, n, r) : zi(a, n);
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
const li = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $i = Symbol();
class Oi {
  constructor(e, i) {
    if (i !== $i)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
    return this._styleSheet === void 0 && (li ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const Yn = (t) => new Oi(String(t), $i), Ga = (t) => {
  if (t instanceof Oi)
    return t.cssText;
  if (typeof t == "number")
    return t;
  throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
}, ie = (t, ...e) => {
  const i = e.reduce((n, r, a) => n + Ga(r) + t[a + 1], t[0]);
  return new Oi(i, $i);
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
const Ji = {};
class Ie extends Xn {
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
      const i = (a, o) => a.reduceRight((l, d) => (
        // Note: On IE set.add() does not return the set
        Array.isArray(d) ? i(d, l) : (l.add(d), l)
      ), o), n = i(e, /* @__PURE__ */ new Set()), r = [];
      n.forEach((a) => r.unshift(a)), this._styles = r;
    } else
      this._styles = e === void 0 ? [] : [e];
    this._styles = this._styles.map((i) => {
      if (i instanceof CSSStyleSheet && !li) {
        const n = Array.prototype.slice.call(i.cssRules).reduce((r, a) => r + a.cssText, "");
        return Yn(n);
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
    e.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((i) => i.cssText), this.localName) : li ? this.renderRoot.adoptedStyleSheets = e.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
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
    super.update(e), i !== Ji && this.constructor.render(i, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((n) => {
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
    return Ji;
  }
}
Ie.finalized = !0;
Ie.render = $a;
Ie.shadowRootOptions = { mode: "open" };
var di = function(t, e) {
  return di = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, n) {
    i.__proto__ = n;
  } || function(i, n) {
    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (i[r] = n[r]);
  }, di(t, e);
};
function Ce(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  di(t, e);
  function i() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
}
var q = function() {
  return q = Object.assign || function(e) {
    for (var i, n = 1, r = arguments.length; n < r; n++) {
      i = arguments[n];
      for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
    }
    return e;
  }, q.apply(this, arguments);
};
function m(t, e, i, n) {
  var r = arguments.length, a = r < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, i) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(t, e, i, n);
  else for (var l = t.length - 1; l >= 0; l--) (o = t[l]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
  return r > 3 && a && Object.defineProperty(e, i, a), a;
}
function Ne(t) {
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
function Ua(t, e) {
  var i = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return i.call(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Zn = (t) => t.nodeType === Node.ELEMENT_NODE;
function Vt(t) {
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
const Qn = () => {
}, Wa = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", Qn, Wa);
document.removeEventListener("x", Qn);
const Pi = (t = window.document) => {
  let e = t.activeElement;
  const i = [];
  if (!e)
    return i;
  for (; e && (i.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return i;
}, Jn = (t) => {
  const e = Pi();
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
class tt extends Ie {
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
var Ae = (
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
var ja = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Ka = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, en = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function Xa(t, e, i) {
  if (!t)
    return { x: 0, y: 0 };
  var n = e.x, r = e.y, a = n + i.left, o = r + i.top, l, d;
  if (t.type === "touchstart") {
    var c = t;
    l = c.changedTouches[0].pageX - a, d = c.changedTouches[0].pageY - o;
  } else {
    var h = t;
    l = h.pageX - a, d = h.pageY - o;
  }
  return { x: l, y: d };
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
var tn = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], nn = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], It = [], Ya = (
  /** @class */
  function(t) {
    Ce(e, t);
    function e(i) {
      var n = t.call(this, q(q({}, e.defaultAdapter), i)) || this;
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
        return ja;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ka;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return en;
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
          for (var a = Ne(tn), o = a.next(); !o.done; o = a.next()) {
            var l = o.value;
            this.adapter.registerInteractionHandler(l, this.activateHandler);
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
          for (var a = Ne(nn), o = a.next(); !o.done; o = a.next()) {
            var l = o.value;
            this.adapter.registerDocumentInteractionHandler(l, this.deactivateHandler);
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
        for (var r = Ne(tn), a = r.next(); !a.done; a = r.next()) {
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
        for (var r = Ne(nn), a = r.next(); !a.done; a = r.next()) {
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
            var l = i !== void 0 && It.length > 0 && It.some(function(d) {
              return n.adapter.containsEventTarget(d);
            });
            if (l) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (It.push(i.target), this.registerDeactivationHandlers(i)), r.wasElementMadeActive = this.checkElementMadeActive(i), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              It = [], !r.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (r.wasElementMadeActive = n.checkElementMadeActive(i), r.wasElementMadeActive && n.animateActivation()), r.wasElementMadeActive || (n.activationState = n.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var i = this, n = e.strings, r = n.VAR_FG_TRANSLATE_START, a = n.VAR_FG_TRANSLATE_END, o = e.cssClasses, l = o.FG_DEACTIVATION, d = o.FG_ACTIVATION, c = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var h = "", f = "";
      if (!this.adapter.isUnbounded()) {
        var g = this.getFgTranslationCoordinates(), y = g.startPoint, v = g.endPoint;
        h = y.x + "px, " + y.y + "px", f = v.x + "px, " + v.y + "px";
      }
      this.adapter.updateCssVariable(r, h), this.adapter.updateCssVariable(a, f), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(l), this.adapter.computeBoundingRect(), this.adapter.addClass(d), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, c);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, n = i.activationEvent, r = i.wasActivatedByPointer, a;
      r ? a = Xa(n, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      }, en.FG_DEACTIVATION_MS));
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
        var r = q({}, n);
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
  }(Ae)
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
class Za {
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
const rn = /* @__PURE__ */ new WeakMap(), ae = dt((t) => (e) => {
  if (!(e instanceof Ge) || e instanceof st || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = e, { element: n } = i;
  let r = rn.get(e);
  r === void 0 && (n.setAttribute("class", i.strings.join(" ")), rn.set(e, r = /* @__PURE__ */ new Set()));
  const a = n.classList || new Za(n);
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
const an = /* @__PURE__ */ new WeakMap(), er = dt((t) => (e) => {
  if (!(e instanceof Ge) || e instanceof st || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = e, { style: n } = i.element;
  let r = an.get(e);
  r === void 0 && (n.cssText = i.strings.join(" "), an.set(e, r = /* @__PURE__ */ new Set())), r.forEach((a) => {
    a in t || (r.delete(a), a.indexOf("-") === -1 ? n[a] = null : n.removeProperty(a));
  });
  for (const a in t)
    r.add(a), a.indexOf("-") === -1 ? n[a] = t[a] : n.setProperty(a, t[a]);
});
class Q extends tt {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Ya;
  }
  get isActive() {
    return Ua(this.parentElement || this, ":active");
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
    return u`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${ae(n)}"
          style="${er({
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
  C(".mdc-ripple-surface")
], Q.prototype, "mdcRoot", void 0);
m([
  b({ type: Boolean })
], Q.prototype, "primary", void 0);
m([
  b({ type: Boolean })
], Q.prototype, "accent", void 0);
m([
  b({ type: Boolean })
], Q.prototype, "unbounded", void 0);
m([
  b({ type: Boolean })
], Q.prototype, "disabled", void 0);
m([
  b({ type: Boolean })
], Q.prototype, "activated", void 0);
m([
  b({ type: Boolean })
], Q.prototype, "selected", void 0);
m([
  b({ type: Boolean })
], Q.prototype, "internalUseStateLayerCustomProperties", void 0);
m([
  E()
], Q.prototype, "hovering", void 0);
m([
  E()
], Q.prototype, "bgFocused", void 0);
m([
  E()
], Q.prototype, "fgActivation", void 0);
m([
  E()
], Q.prototype, "fgDeactivation", void 0);
m([
  E()
], Q.prototype, "fgScale", void 0);
m([
  E()
], Q.prototype, "fgSize", void 0);
m([
  E()
], Q.prototype, "translateStart", void 0);
m([
  E()
], Q.prototype, "translateEnd", void 0);
m([
  E()
], Q.prototype, "leftPos", void 0);
m([
  E()
], Q.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Qa = ie`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let si = class extends Q {
};
si.styles = [Qa];
si = m([
  X("mwc-ripple")
], si);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Ja(t, e, i) {
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
function ct(t, e, i) {
  if (e !== void 0)
    return Ja(t, e, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class At {
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
class Pe extends Ie {
  constructor() {
    super(...arguments), this.disabled = !1, this.icon = "", this.shouldRenderRipple = !1, this.rippleHandlers = new At(() => (this.shouldRenderRipple = !0, this.ripple));
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
  b({ type: Boolean, reflect: !0 })
], Pe.prototype, "disabled", void 0);
m([
  b({ type: String })
], Pe.prototype, "icon", void 0);
m([
  ct,
  b({ type: String, attribute: "aria-label" })
], Pe.prototype, "ariaLabel", void 0);
m([
  C("button")
], Pe.prototype, "buttonElement", void 0);
m([
  wt("mwc-ripple")
], Pe.prototype, "ripple", void 0);
m([
  E()
], Pe.prototype, "shouldRenderRipple", void 0);
m([
  Ue({ passive: !0 })
], Pe.prototype, "handleRippleMouseDown", null);
m([
  Ue({ passive: !0 })
], Pe.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const eo = ie`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button--touch{margin-top:0px;margin-bottom:0px}:host{display:inline-block;outline:none;--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host([disabled]){pointer-events:none}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button>i{position:absolute;top:0;padding-top:inherit}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ci = class extends Pe {
};
ci.styles = [eo];
ci = m([
  X("mwc-icon-button")
], ci);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const V = (t) => (
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
class ne extends Ie {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new At(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const e = this.renderText(), i = this.graphic ? this.renderGraphic() : u``, n = this.hasMeta ? this.renderMeta() : u``;
    return u`
      ${this.renderRipple()}
      ${i}
      ${e}
      ${n}`;
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
      <span class="mdc-deprecated-list-item__graphic material-icons ${ae(e)}">
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
  C("slot")
], ne.prototype, "slotElement", void 0);
m([
  wt("mwc-ripple")
], ne.prototype, "ripple", void 0);
m([
  b({ type: String })
], ne.prototype, "value", void 0);
m([
  b({ type: String, reflect: !0 })
], ne.prototype, "group", void 0);
m([
  b({ type: Number, reflect: !0 })
], ne.prototype, "tabindex", void 0);
m([
  b({ type: Boolean, reflect: !0 }),
  V(function(t) {
    t ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], ne.prototype, "disabled", void 0);
m([
  b({ type: Boolean, reflect: !0 })
], ne.prototype, "twoline", void 0);
m([
  b({ type: Boolean, reflect: !0 })
], ne.prototype, "activated", void 0);
m([
  b({ type: String, reflect: !0 })
], ne.prototype, "graphic", void 0);
m([
  b({ type: Boolean })
], ne.prototype, "multipleGraphics", void 0);
m([
  b({ type: Boolean })
], ne.prototype, "hasMeta", void 0);
m([
  b({ type: Boolean, reflect: !0 }),
  V(function(t) {
    t ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], ne.prototype, "noninteractive", void 0);
m([
  b({ type: Boolean, reflect: !0 }),
  V(function(t) {
    const e = this.getAttribute("role"), i = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (i && t ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(t, "property");
  })
], ne.prototype, "selected", void 0);
m([
  E()
], ne.prototype, "shouldRenderRipple", void 0);
m([
  E()
], ne.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const tr = ie`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ui = class extends ne {
};
ui.styles = [tr];
ui = m([
  X("mwc-list-item")
], ui);
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
const Wt = /* @__PURE__ */ new WeakMap(), O = dt((t) => (e) => {
  const i = Wt.get(e);
  if (t === void 0 && e instanceof Ge) {
    if (i !== void 0 || !Wt.has(e)) {
      const n = e.committer.name;
      e.committer.element.removeAttribute(n);
    }
  } else t !== i && e.setValue(t);
  Wt.set(e, t);
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
var I = {
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
}, me = /* @__PURE__ */ new Set();
me.add(I.BACKSPACE);
me.add(I.ENTER);
me.add(I.SPACEBAR);
me.add(I.PAGE_UP);
me.add(I.PAGE_DOWN);
me.add(I.END);
me.add(I.HOME);
me.add(I.ARROW_LEFT);
me.add(I.ARROW_UP);
me.add(I.ARROW_RIGHT);
me.add(I.ARROW_DOWN);
me.add(I.DELETE);
me.add(I.ESCAPE);
me.add(I.TAB);
var be = {
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
}, pe = /* @__PURE__ */ new Map();
pe.set(be.BACKSPACE, I.BACKSPACE);
pe.set(be.ENTER, I.ENTER);
pe.set(be.SPACEBAR, I.SPACEBAR);
pe.set(be.PAGE_UP, I.PAGE_UP);
pe.set(be.PAGE_DOWN, I.PAGE_DOWN);
pe.set(be.END, I.END);
pe.set(be.HOME, I.HOME);
pe.set(be.ARROW_LEFT, I.ARROW_LEFT);
pe.set(be.ARROW_UP, I.ARROW_UP);
pe.set(be.ARROW_RIGHT, I.ARROW_RIGHT);
pe.set(be.ARROW_DOWN, I.ARROW_DOWN);
pe.set(be.DELETE, I.DELETE);
pe.set(be.ESCAPE, I.ESCAPE);
pe.set(be.TAB, I.TAB);
var We = /* @__PURE__ */ new Set();
We.add(I.PAGE_UP);
We.add(I.PAGE_DOWN);
We.add(I.END);
We.add(I.HOME);
We.add(I.ARROW_LEFT);
We.add(I.ARROW_UP);
We.add(I.ARROW_RIGHT);
We.add(I.ARROW_DOWN);
function U(t) {
  var e = t.key;
  if (me.has(e))
    return e;
  var i = pe.get(t.keyCode);
  return i || I.UNKNOWN;
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
var Ve, ke, P = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Ve = {}, Ve["" + P.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Ve["" + P.LIST_ITEM_CLASS] = "mdc-list-item", Ve["" + P.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Ve["" + P.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Ve["" + P.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Ve["" + P.ROOT] = "mdc-list";
var at = (ke = {}, ke["" + P.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", ke["" + P.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", ke["" + P.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", ke["" + P.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", ke["" + P.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", ke["" + P.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", ke["" + P.ROOT] = "mdc-deprecated-list", ke), Ct = {
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
    .` + P.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + P.LIST_ITEM_CLASS + ` a,
    .` + at[P.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + at[P.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + P.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + P.LIST_ITEM_CLASS + ` a,
    .` + P.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + P.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + at[P.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + at[P.LIST_ITEM_CLASS] + ` a,
    .` + at[P.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + at[P.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, de = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const mi = (t, e) => t - e, to = (t, e) => {
  const i = Array.from(t), n = Array.from(e), r = { added: [], removed: [] }, a = i.sort(mi), o = n.sort(mi);
  let l = 0, d = 0;
  for (; l < a.length || d < o.length; ) {
    const c = a[l], h = o[d];
    if (c === h) {
      l++, d++;
      continue;
    }
    if (c !== void 0 && (h === void 0 || c < h)) {
      r.removed.push(c), l++;
      continue;
    }
    if (h !== void 0 && (c === void 0 || h < c)) {
      r.added.push(h), d++;
      continue;
    }
  }
  return r;
}, io = ["input", "button", "textarea", "select"];
function gt(t) {
  return t instanceof Set;
}
const jt = (t) => {
  const e = t === de.UNSET_INDEX ? /* @__PURE__ */ new Set() : t;
  return gt(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class Fi extends Ae {
  constructor(e) {
    super(Object.assign(Object.assign({}, Fi.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = de.UNSET_INDEX, this.focusedItemIndex_ = de.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return Ct;
  }
  static get numbers() {
    return de;
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
      if (!gt(i)) {
        const n = i === de.UNSET_INDEX;
        this.selectedIndex_ = n ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
    } else if (gt(i))
      if (i.size) {
        const n = Array.from(i).sort(mi);
        this.selectedIndex_ = n[0];
      } else
        this.selectedIndex_ = de.UNSET_INDEX;
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
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(jt(e)) : this.setSingleSelectionAtIndex_(e));
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
    const r = U(e) === "ArrowLeft", a = U(e) === "ArrowUp", o = U(e) === "ArrowRight", l = U(e) === "ArrowDown", d = U(e) === "Home", c = U(e) === "End", h = U(e) === "Enter", f = U(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      a || c ? (e.preventDefault(), this.focusLastElement()) : (l || d) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let g = this.adapter.getFocusedElementIndex();
    if (g === -1 && (g = n, g < 0))
      return;
    let y;
    if (this.isVertical_ && l || !this.isVertical_ && o)
      this.preventDefaultEvent(e), y = this.focusNextElement(g);
    else if (this.isVertical_ && a || !this.isVertical_ && r)
      this.preventDefaultEvent(e), y = this.focusPrevElement(g);
    else if (d)
      this.preventDefaultEvent(e), y = this.focusFirstElement();
    else if (c)
      this.preventDefaultEvent(e), y = this.focusLastElement();
    else if ((h || f) && i) {
      const v = e.target;
      if (v && v.tagName === "A" && h)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(g, !0);
    }
    this.focusedItemIndex_ = g, y !== void 0 && (this.setTabindexAtIndex_(y), this.focusedItemIndex_ = y);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, i, n) {
    e !== de.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, i, n), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
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
    io.indexOf(n) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, i = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== de.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), i && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, i = !0) {
    const n = jt(this.selectedIndex_), r = to(n, e);
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
    this.selectedIndex_ === de.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, Ct.ARIA_CURRENT));
    const i = this.ariaCurrentAttrValue_ !== null, n = i ? Ct.ARIA_CURRENT : Ct.ARIA_SELECTED;
    this.selectedIndex_ !== de.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, n, "false");
    const r = i ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, n, r);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === de.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== de.UNSET_INDEX ? e = this.selectedIndex_ : gt(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
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
      return e === de.UNSET_INDEX || this.isIndexInRange_(e);
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
    this.isMulti_ && (r = /* @__PURE__ */ new Set([e])), this.isIndexValid_(r) && (this.isMulti_ ? this.toggleMultiAtIndex(e, n, i) : i || n ? this.setSingleSelectionAtIndex_(e, i) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(de.UNSET_INDEX), i && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, i, n = !0) {
    let r = !1;
    i === void 0 ? r = !this.adapter.getSelectedStateForElementIndex(e) : r = i;
    const a = jt(this.selectedIndex_);
    r ? a.add(e) : a.delete(e), this.setMultiSelectionAtIndex_(a, n);
  }
}
function no(t, e = 50) {
  let i;
  return function(n = !0) {
    clearTimeout(i), i = setTimeout(() => {
      t(n);
    }, e);
  };
}
const kt = (t) => t.hasAttribute("mwc-list-item");
function ro() {
  const t = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), t();
}
class he extends tt {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = Fi, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = no(this.layout.bind(this));
    this.debouncedLayout = (i = !0) => {
      ro.call(this), e(i);
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
      kt(o) && (n.push(o), o._managingList = this), o.hasAttribute("divider") && !o.hasAttribute("role") && o.setAttribute("role", "separator");
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
    if (!gt(e))
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
    return u`
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
    return this.emptyMessage !== void 0 && i.length === 0 ? u`
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
      const i = this.getIndexOfTarget(e), n = e.target, r = kt(n);
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
      if (Zn(r) && kt(r) && (a = i.indexOf(r)), a !== -1)
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
      isFocusInsideList: () => Jn(this),
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
    const e = Pi();
    if (!e.length)
      return -1;
    for (let i = e.length - 1; i >= 0; i--) {
      const n = e[i];
      if (kt(n))
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
  b({ type: String })
], he.prototype, "emptyMessage", void 0);
m([
  C(".mdc-deprecated-list")
], he.prototype, "mdcRoot", void 0);
m([
  Ri("", !0, "*")
], he.prototype, "assignedElements", void 0);
m([
  Ri("", !0, '[tabindex="0"]')
], he.prototype, "tabbableElements", void 0);
m([
  b({ type: Boolean }),
  V(function(t) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(t);
  })
], he.prototype, "activatable", void 0);
m([
  b({ type: Boolean }),
  V(function(t, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(t), e !== void 0 && this.layout();
  })
], he.prototype, "multi", void 0);
m([
  b({ type: Boolean }),
  V(function(t) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(t);
  })
], he.prototype, "wrapFocus", void 0);
m([
  b({ type: String }),
  V(function(t, e) {
    e !== void 0 && this.updateItems();
  })
], he.prototype, "itemRoles", void 0);
m([
  b({ type: String })
], he.prototype, "innerRole", void 0);
m([
  b({ type: String })
], he.prototype, "innerAriaLabel", void 0);
m([
  b({ type: Boolean })
], he.prototype, "rootTabbable", void 0);
m([
  b({ type: Boolean, reflect: !0 }),
  V(function(t) {
    var e, i;
    if (t) {
      const n = (i = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && i !== void 0 ? i : null;
      this.previousTabindex = n, n && n.setAttribute("tabindex", "-1");
    } else !t && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], he.prototype, "noninteractive", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ao = ie`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let $t = class extends he {
};
$t.styles = [ao];
$t = m([
  X("mwc-list")
], $t);
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
var oo = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, lo = {
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
}, Tt = {
  /** Total duration of menu-surface open animation. */
  TRANSITION_OPEN_DURATION: 120,
  /** Total duration of menu-surface close animation. */
  TRANSITION_CLOSE_DURATION: 75,
  /** Margin left to the edge of the viewport when menu-surface is at maximum possible height. Also used as a viewport margin. */
  MARGIN_TO_EDGE: 32,
  /** Ratio of anchor width to menu-surface width for switching from corner positioning to center positioning. */
  ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67
}, H;
(function(t) {
  t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL";
})(H || (H = {}));
var se;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})(se || (se = {}));
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
var ir = (
  /** @class */
  function(t) {
    Ce(e, t);
    function e(i) {
      var n = t.call(this, q(q({}, e.defaultAdapter), i)) || this;
      return n.isSurfaceOpen = !1, n.isQuickOpen = !1, n.isHoistedElement = !1, n.isFixedPosition = !1, n.isHorizontallyCenteredOnViewport = !1, n.maxHeight = 0, n.openAnimationEndTimerId = 0, n.closeAnimationEndTimerId = 0, n.animationRequestId = 0, n.anchorCorner = se.TOP_START, n.originCorner = se.TOP_START, n.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, n.position = { x: 0, y: 0 }, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return oo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return lo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Tt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return se;
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
      this.originCorner = this.originCorner ^ H.RIGHT;
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
        }, Tt.TRANSITION_OPEN_DURATION);
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
          }, Tt.TRANSITION_CLOSE_DURATION);
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
      var n = this.getoriginCorner(), r = this.getMenuSurfaceMaxHeight(n), a = this.hasBit(n, H.BOTTOM) ? "bottom" : "top", o = this.hasBit(n, H.RIGHT) ? "right" : "left", l = this.getHorizontalOriginOffset(n), d = this.getVerticalOriginOffset(n), c = this.measurements, h = c.anchorSize, f = c.surfaceSize, g = (i = {}, i[o] = l, i[a] = d, i);
      h.width / f.width > Tt.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (o = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(g), this.adapter.setTransformOrigin(o + " " + a), this.adapter.setPosition(g), this.adapter.setMaxHeight(r ? r + "px" : ""), this.hasBit(n, H.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var i = this.originCorner, n = this.measurements, r = n.viewportDistance, a = n.anchorSize, o = n.surfaceSize, l = e.numbers.MARGIN_TO_EDGE, d = this.hasBit(this.anchorCorner, H.BOTTOM), c, h;
      d ? (c = r.top - l + this.anchorMargin.bottom, h = r.bottom - l - this.anchorMargin.bottom) : (c = r.top - l + this.anchorMargin.top, h = r.bottom - l + a.height - this.anchorMargin.top);
      var f = h - o.height > 0;
      !f && c > h && (i = this.setBit(i, H.BOTTOM));
      var g = this.adapter.isRtl(), y = this.hasBit(this.anchorCorner, H.FLIP_RTL), v = this.hasBit(this.anchorCorner, H.RIGHT) || this.hasBit(i, H.RIGHT), S = !1;
      g && y ? S = !v : S = v;
      var T, _;
      S ? (T = r.left + a.width + this.anchorMargin.right, _ = r.right - this.anchorMargin.right) : (T = r.left + this.anchorMargin.left, _ = r.right + a.width - this.anchorMargin.left);
      var R = T - o.width > 0, G = _ - o.width > 0, ve = this.hasBit(i, H.FLIP_RTL) && this.hasBit(i, H.RIGHT);
      return G && ve && g || !R && ve ? i = this.unsetBit(i, H.RIGHT) : (R && S && g || R && !S && v || !G && T >= _) && (i = this.setBit(i, H.RIGHT)), i;
    }, e.prototype.getMenuSurfaceMaxHeight = function(i) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var n = this.measurements.viewportDistance, r = 0, a = this.hasBit(i, H.BOTTOM), o = this.hasBit(this.anchorCorner, H.BOTTOM), l = e.numbers.MARGIN_TO_EDGE;
      return a ? (r = n.top + this.anchorMargin.top - l, o || (r += this.measurements.anchorSize.height)) : (r = n.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - l, o && (r -= this.measurements.anchorSize.height)), r;
    }, e.prototype.getHorizontalOriginOffset = function(i) {
      var n = this.measurements.anchorSize, r = this.hasBit(i, H.RIGHT), a = this.hasBit(this.anchorCorner, H.RIGHT);
      if (r) {
        var o = a ? n.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? o - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : o;
      }
      return a ? n.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(i) {
      var n = this.measurements.anchorSize, r = this.hasBit(i, H.BOTTOM), a = this.hasBit(this.anchorCorner, H.BOTTOM), o = 0;
      return r ? o = a ? n.height - this.anchorMargin.top : -this.anchorMargin.bottom : o = a ? n.height + this.anchorMargin.bottom : this.anchorMargin.top, o;
    }, e.prototype.adjustPositionForHoistedElement = function(i) {
      var n, r, a = this.measurements, o = a.windowScroll, l = a.viewportDistance, d = a.surfaceSize, c = a.viewportSize, h = Object.keys(i);
      try {
        for (var f = Ne(h), g = f.next(); !g.done; g = f.next()) {
          var y = g.value, v = i[y] || 0;
          if (this.isHorizontallyCenteredOnViewport && (y === "left" || y === "right")) {
            i[y] = (c.width - d.width) / 2;
            continue;
          }
          v += l[y], this.isFixedPosition || (y === "top" ? v += o.y : y === "bottom" ? v -= o.y : y === "left" ? v += o.x : v -= o.x), i[y] = v;
        }
      } catch (S) {
        n = { error: S };
      } finally {
        try {
          g && !g.done && (r = f.return) && r.call(f);
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
  }(Ae)
);
const so = {
  TOP_LEFT: se.TOP_LEFT,
  TOP_RIGHT: se.TOP_RIGHT,
  BOTTOM_LEFT: se.BOTTOM_LEFT,
  BOTTOM_RIGHT: se.BOTTOM_RIGHT,
  TOP_START: se.TOP_START,
  TOP_END: se.TOP_END,
  BOTTOM_START: se.BOTTOM_START,
  BOTTOM_END: se.BOTTOM_END
};
class Y extends tt {
  constructor() {
    super(...arguments), this.mdcFoundationClass = ir, this.absolute = !1, this.fullwidth = !1, this.fixed = !1, this.x = null, this.y = null, this.quick = !1, this.open = !1, this.stayOpenOnBodyClick = !1, this.bitwiseCorner = se.TOP_START, this.previousMenuCorner = null, this.menuCorner = "START", this.corner = "TOP_START", this.styleTop = "", this.styleLeft = "", this.styleRight = "", this.styleBottom = "", this.styleMaxHeight = "", this.styleTransformOrigin = "", this.anchor = null, this.previouslyFocused = null, this.previousAnchor = null, this.onBodyClickBound = () => {
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
    return u`
      <div
          class="mdc-menu-surface ${ae(e)}"
          style="${er(i)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Vt(this.mdcRoot)), { hasAnchor: () => !!this.anchor, notifyClose: () => {
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
    }, isFocused: () => Jn(this), saveFocus: () => {
      const e = Pi(), i = e.length;
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
  C(".mdc-menu-surface")
], Y.prototype, "mdcRoot", void 0);
m([
  C("slot")
], Y.prototype, "slotElement", void 0);
m([
  b({ type: Boolean }),
  V(function(t) {
    this.mdcFoundation && !this.fixed && this.mdcFoundation.setIsHoisted(t);
  })
], Y.prototype, "absolute", void 0);
m([
  b({ type: Boolean })
], Y.prototype, "fullwidth", void 0);
m([
  b({ type: Boolean }),
  V(function(t) {
    this.mdcFoundation && !this.absolute && this.mdcFoundation.setFixedPosition(t);
  })
], Y.prototype, "fixed", void 0);
m([
  b({ type: Number }),
  V(function(t) {
    this.mdcFoundation && this.y !== null && t !== null && (this.mdcFoundation.setAbsolutePosition(t, this.y), this.mdcFoundation.setAnchorMargin({ left: t, top: this.y, right: -t, bottom: this.y }));
  })
], Y.prototype, "x", void 0);
m([
  b({ type: Number }),
  V(function(t) {
    this.mdcFoundation && this.x !== null && t !== null && (this.mdcFoundation.setAbsolutePosition(this.x, t), this.mdcFoundation.setAnchorMargin({ left: this.x, top: t, right: -this.x, bottom: t }));
  })
], Y.prototype, "y", void 0);
m([
  b({ type: Boolean }),
  V(function(t) {
    this.mdcFoundation && this.mdcFoundation.setQuickOpen(t);
  })
], Y.prototype, "quick", void 0);
m([
  b({ type: Boolean, reflect: !0 }),
  V(function(t, e) {
    this.mdcFoundation && (t ? this.mdcFoundation.open() : e !== void 0 && this.mdcFoundation.close());
  })
], Y.prototype, "open", void 0);
m([
  b({ type: Boolean })
], Y.prototype, "stayOpenOnBodyClick", void 0);
m([
  E(),
  V(function(t) {
    this.mdcFoundation && (t ? this.mdcFoundation.setAnchorCorner(t) : this.mdcFoundation.setAnchorCorner(t));
  })
], Y.prototype, "bitwiseCorner", void 0);
m([
  b({ type: String }),
  V(function(t) {
    if (this.mdcFoundation) {
      const e = t === "START" || t === "END", i = this.previousMenuCorner === null, n = !i && t !== this.previousMenuCorner;
      e && (n || i && t === "END") && (this.bitwiseCorner = this.bitwiseCorner ^ H.RIGHT, this.mdcFoundation.flipCornerHorizontally(), this.previousMenuCorner = t);
    }
  })
], Y.prototype, "menuCorner", void 0);
m([
  b({ type: String }),
  V(function(t) {
    if (this.mdcFoundation && t) {
      let e = so[t];
      this.menuCorner === "END" && (e = e ^ H.RIGHT), this.bitwiseCorner = e;
    }
  })
], Y.prototype, "corner", void 0);
m([
  E()
], Y.prototype, "styleTop", void 0);
m([
  E()
], Y.prototype, "styleLeft", void 0);
m([
  E()
], Y.prototype, "styleRight", void 0);
m([
  E()
], Y.prototype, "styleBottom", void 0);
m([
  E()
], Y.prototype, "styleMaxHeight", void 0);
m([
  E()
], Y.prototype, "styleTransformOrigin", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const co = ie`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let pi = class extends Y {
};
pi.styles = [co];
pi = m([
  X("mwc-menu-surface")
], pi);
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
var Kt = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, pt = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected"
}, uo = {
  FOCUS_ROOT_INDEX: -1
}, Je;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(Je || (Je = {}));
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
var mo = (
  /** @class */
  function(t) {
    Ce(e, t);
    function e(i) {
      var n = t.call(this, q(q({}, e.defaultAdapter), i)) || this;
      return n.closeAnimationEndTimerId = 0, n.defaultFocusState = Je.LIST_ROOT, n.selectedIndex = -1, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Kt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return pt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return uo;
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
      }, ir.numbers.TRANSITION_CLOSE_DURATION));
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Je.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Je.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Je.NONE:
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
      n >= 0 && (this.adapter.removeAttributeFromElementAtIndex(n, pt.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(n, Kt.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(i, Kt.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(i, pt.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = i;
    }, e.prototype.setEnabled = function(i, n) {
      this.validatedIndex(i), n ? (this.adapter.removeClassFromElementAtIndex(i, P.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(i, pt.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(i, P.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(i, pt.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(i) {
      var n = this.adapter.getMenuItemCount(), r = i >= 0 && i < n;
      if (!r)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(Ae)
);
class Z extends tt {
  constructor() {
    super(...arguments), this.mdcFoundationClass = mo, this.listElement_ = null, this.anchor = null, this.open = !1, this.quick = !1, this.wrapFocus = !1, this.innerRole = "menu", this.corner = "TOP_START", this.x = null, this.y = null, this.absolute = !1, this.multi = !1, this.activatable = !1, this.fixed = !1, this.forceGroupSelection = !1, this.fullwidth = !1, this.menuCorner = "START", this.stayOpenOnBodyClick = !1, this.defaultFocus = "LIST_ROOT", this._listUpdateComplete = null;
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
m([
  C(".mdc-menu")
], Z.prototype, "mdcRoot", void 0);
m([
  C("slot")
], Z.prototype, "slotElement", void 0);
m([
  b({ type: Object })
], Z.prototype, "anchor", void 0);
m([
  b({ type: Boolean, reflect: !0 })
], Z.prototype, "open", void 0);
m([
  b({ type: Boolean })
], Z.prototype, "quick", void 0);
m([
  b({ type: Boolean })
], Z.prototype, "wrapFocus", void 0);
m([
  b({ type: String })
], Z.prototype, "innerRole", void 0);
m([
  b({ type: String })
], Z.prototype, "corner", void 0);
m([
  b({ type: Number })
], Z.prototype, "x", void 0);
m([
  b({ type: Number })
], Z.prototype, "y", void 0);
m([
  b({ type: Boolean })
], Z.prototype, "absolute", void 0);
m([
  b({ type: Boolean })
], Z.prototype, "multi", void 0);
m([
  b({ type: Boolean })
], Z.prototype, "activatable", void 0);
m([
  b({ type: Boolean })
], Z.prototype, "fixed", void 0);
m([
  b({ type: Boolean })
], Z.prototype, "forceGroupSelection", void 0);
m([
  b({ type: Boolean })
], Z.prototype, "fullwidth", void 0);
m([
  b({ type: String })
], Z.prototype, "menuCorner", void 0);
m([
  b({ type: Boolean })
], Z.prototype, "stayOpenOnBodyClick", void 0);
m([
  b({ type: String }),
  V(function(t) {
    this.mdcFoundation && this.mdcFoundation.setDefaultFocusState(Je[t]);
  })
], Z.prototype, "defaultFocus", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const po = ie`mwc-list ::slotted([mwc-list-item]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let hi = class extends Z {
};
hi.styles = [po];
hi = m([
  X("mwc-menu")
], hi);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class qe extends tt {
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
qe.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
var ht = {
  /** Class used for a switch that is in the "checked" (on) position. */
  CHECKED: "mdc-switch--checked",
  /** Class used for a switch that is disabled. */
  DISABLED: "mdc-switch--disabled"
}, on = {
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
var ho = (
  /** @class */
  function(t) {
    Ce(e, t);
    function e(i) {
      return t.call(this, q(q({}, e.defaultAdapter), i)) || this;
    }
    return Object.defineProperty(e, "strings", {
      /** The string constants used by the switch. */
      get: function() {
        return on;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      /** The CSS classes used by the switch. */
      get: function() {
        return ht;
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
      this.adapter.setNativeControlDisabled(i), i ? this.adapter.addClass(ht.DISABLED) : this.adapter.removeClass(ht.DISABLED);
    }, e.prototype.handleChange = function(i) {
      var n = i.target;
      this.updateAriaChecked(n.checked), this.updateCheckedStyling(n.checked);
    }, e.prototype.updateCheckedStyling = function(i) {
      i ? this.adapter.addClass(ht.CHECKED) : this.adapter.removeClass(ht.CHECKED);
    }, e.prototype.updateAriaChecked = function(i) {
      this.adapter.setNativeControlAttr(on.ARIA_CHECKED_ATTR, "" + !!i);
    }, e;
  }(Ae)
);
class Se extends qe {
  constructor() {
    super(...arguments), this.checked = !1, this.disabled = !1, this.shouldRenderRipple = !1, this.mdcFoundationClass = ho, this.rippleHandlers = new At(() => (this.shouldRenderRipple = !0, this.ripple));
  }
  changeHandler(e) {
    this.mdcFoundation.handleChange(e), this.checked = this.formElement.checked;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Vt(this.mdcRoot)), { setNativeControlChecked: (e) => {
      this.formElement.checked = e;
    }, setNativeControlDisabled: (e) => {
      this.formElement.disabled = e;
    }, setNativeControlAttr: (e, i) => {
      this.formElement.setAttribute(e, i);
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
  b({ type: Boolean }),
  V(function(t) {
    this.mdcFoundation.setChecked(t);
  })
], Se.prototype, "checked", void 0);
m([
  b({ type: Boolean }),
  V(function(t) {
    this.mdcFoundation.setDisabled(t);
  })
], Se.prototype, "disabled", void 0);
m([
  ct,
  b({ attribute: "aria-label" })
], Se.prototype, "ariaLabel", void 0);
m([
  ct,
  b({ attribute: "aria-labelledby" })
], Se.prototype, "ariaLabelledBy", void 0);
m([
  C(".mdc-switch")
], Se.prototype, "mdcRoot", void 0);
m([
  C("input")
], Se.prototype, "formElement", void 0);
m([
  wt("mwc-ripple")
], Se.prototype, "ripple", void 0);
m([
  E()
], Se.prototype, "shouldRenderRipple", void 0);
m([
  Ue({ passive: !0 })
], Se.prototype, "handleRippleMouseDown", null);
m([
  Ue({ passive: !0 })
], Se.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const fo = ie`.mdc-switch__thumb-underlay{left:-14px;right:initial;top:-17px;width:48px;height:48px}[dir=rtl] .mdc-switch__thumb-underlay,.mdc-switch__thumb-underlay[dir=rtl]{left:initial;right:-14px}.mdc-switch__native-control{width:64px;height:48px}.mdc-switch{display:inline-block;position:relative;outline:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-color:#fff;border-color:var(--mdc-theme-surface, #fff)}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;margin:0;opacity:0;cursor:pointer;pointer-events:auto;transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-switch__native-control,.mdc-switch__native-control[dir=rtl]{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:36px;height:14px;border:1px solid transparent;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb-underlay{display:flex;position:absolute;align-items:center;justify-content:center;transform:translateX(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl]{transform:translateX(-16px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__native-control[dir=rtl]{transform:translateX(16px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent}`;
let fi = class extends Se {
};
fi.styles = [fo];
fi = m([
  X("mwc-switch")
], fi);
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
var bo = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, ln = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, go = {
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
var xo = (
  /** @class */
  function(t) {
    Ce(e, t);
    function e(i) {
      return t.call(this, q(q({}, e.defaultAdapter), i)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return bo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return go;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ln;
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
      i > 0 && (i += ln.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(i), this.adapter.addClass(n);
    }, e.prototype.closeNotch = function() {
      var i = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(i), this.adapter.removeNotchWidthProperty();
    }, e;
  }(Ae)
);
class St extends tt {
  constructor() {
    super(...arguments), this.mdcFoundationClass = xo, this.width = 0, this.open = !1, this.lastOpen = this.open;
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
    const e = ae({
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
m([
  C(".mdc-notched-outline")
], St.prototype, "mdcRoot", void 0);
m([
  b({ type: Number })
], St.prototype, "width", void 0);
m([
  b({ type: Boolean, reflect: !0 })
], St.prototype, "open", void 0);
m([
  C(".mdc-notched-outline__notch")
], St.prototype, "notchElement", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const yo = ie`.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host([dir=rtl]){text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`;
let bi = class extends St {
};
bi.styles = [yo];
bi = m([
  X("mwc-notched-outline")
], bi);
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
var vo = {
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
var _o = (
  /** @class */
  function(t) {
    Ce(e, t);
    function e(i) {
      var n = t.call(this, q(q({}, e.defaultAdapter), i)) || this;
      return n.shakeAnimationEndHandler = function() {
        n.handleShakeAnimationEnd();
      }, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return vo;
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
  }(Ae)
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
const Re = {
  ATTRIBUTE: 1,
  CHILD: 2,
  PROPERTY: 3,
  BOOLEAN_ATTRIBUTE: 4,
  EVENT: 5
};
class wo {
  constructor(e) {
    this.type = Re.CHILD, this.options = e.options, this.legacyPart = e;
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
class Ao {
  constructor(e) {
    this.legacyPart = e, this.type = e instanceof st ? Re.PROPERTY : Re.ATTRIBUTE;
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
class So {
  constructor(e) {
    this.type = Re.BOOLEAN_ATTRIBUTE, this.legacyPart = e;
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
class Eo {
  constructor(e) {
    this.type = Re.EVENT, this.legacyPart = e;
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
function Io(t) {
  if (t instanceof et)
    return new wo(t);
  if (t instanceof Ti)
    return new Eo(t);
  if (t instanceof ki)
    return new So(t);
  if (t instanceof st || t instanceof Ge)
    return new Ao(t);
  throw new Error("Unknown part type");
}
class nr {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(e) {
  }
  update(e, i) {
    return this.render(...i);
  }
}
function rr(t) {
  const e = /* @__PURE__ */ new WeakMap();
  return dt((...n) => (r) => {
    const a = e.get(r);
    let o, l;
    a === void 0 ? (o = Io(r), l = new t(o), e.set(r, [o, l])) : (o = a[0], l = a[1]), r.setValue(l.update(o, n)), r.commit();
  });
}
const Co = (t) => ({
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
class ko extends nr {
  constructor(e) {
    switch (super(e), this.foundation = null, this.previousPart = null, e.type) {
      // Only allow Attribute and Part bindings
      case Re.ATTRIBUTE:
      case Re.PROPERTY:
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
      const r = Co(n);
      this.foundation = new _o(r), this.foundation.init();
    }
    return this.render(i);
  }
  render(e) {
    return this.foundation;
  }
}
const ar = rr(ko);
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
var To = (
  /** @class */
  function(t) {
    Ce(e, t);
    function e(i) {
      var n = t.call(this, q(q({}, e.defaultAdapter), i)) || this;
      return n.transitionEndHandler = function(r) {
        n.handleTransitionEnd(r);
      }, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Xe;
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
      this.adapter.removeClass(Xe.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Xe.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(i) {
      this.adapter.setStyle("transform-origin", i + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(Xe.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(i) {
      var n = this.adapter.hasClass(Xe.LINE_RIPPLE_DEACTIVATING);
      i.propertyName === "opacity" && n && (this.adapter.removeClass(Xe.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Xe.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(Ae)
);
const No = (t) => ({
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
class Do extends nr {
  constructor(e) {
    switch (super(e), this.previousPart = null, this.foundation = null, e.type) {
      case Re.ATTRIBUTE:
      case Re.PROPERTY:
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
      const r = No(n);
      this.foundation = new To(r), this.foundation.init();
    }
    return this.render();
  }
  render() {
    return this.foundation;
  }
}
const or = rr(Do);
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
var Xt = {
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
}, Lo = {
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
}, dn = {
  LABEL_SCALE: 0.75
}, zo = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Ro = [
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
var sn = ["mousedown", "touchstart"], cn = ["click", "keydown"], $o = (
  /** @class */
  function(t) {
    Ce(e, t);
    function e(i, n) {
      n === void 0 && (n = {});
      var r = t.call(this, q(q({}, e.defaultAdapter), i)) || this;
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
        return Lo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Xt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return dn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var i = this.getNativeInput().type;
        return Ro.indexOf(i) >= 0;
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
        for (var o = Ne(sn), l = o.next(); !l.done; l = o.next()) {
          var d = l.value;
          this.adapter.registerInputInteractionHandler(d, this.setPointerXOffset);
        }
      } catch (f) {
        i = { error: f };
      } finally {
        try {
          l && !l.done && (n = o.return) && n.call(o);
        } finally {
          if (i) throw i.error;
        }
      }
      try {
        for (var c = Ne(cn), h = c.next(); !h.done; h = c.next()) {
          var d = h.value;
          this.adapter.registerTextFieldInteractionHandler(d, this.textFieldInteractionHandler);
        }
      } catch (f) {
        r = { error: f };
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
        for (var o = Ne(sn), l = o.next(); !l.done; l = o.next()) {
          var d = l.value;
          this.adapter.deregisterInputInteractionHandler(d, this.setPointerXOffset);
        }
      } catch (f) {
        i = { error: f };
      } finally {
        try {
          l && !l.done && (n = o.return) && n.call(o);
        } finally {
          if (i) throw i.error;
        }
      }
      try {
        for (var c = Ne(cn), h = c.next(); !h.done; h = c.next()) {
          var d = h.value;
          this.adapter.deregisterTextFieldInteractionHandler(d, this.textFieldInteractionHandler);
        }
      } catch (f) {
        r = { error: f };
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
        return zo.indexOf(r) > -1 ? (n.styleValidity(!0), n.adapter.setLabelRequired(n.getNativeInput().required), !0) : !1;
      }), i.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(i) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (i) {
          var n = this.adapter.getLabelWidth() * dn.LABEL_SCALE;
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
        a && o ? this.adapter.setInputAttr(Xt.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr(Xt.ARIA_DESCRIBEDBY);
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
  }(Ae)
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
const Oo = dt((t) => (e) => {
  let i;
  if (e instanceof Ti || e instanceof et)
    throw new Error("The `live` directive is not allowed on text or event bindings");
  if (e instanceof ki)
    un(e.strings), i = e.element.hasAttribute(e.name), e.value = i;
  else {
    const { element: n, name: r, strings: a } = e.committer;
    if (un(a), e instanceof st) {
      if (i = n[r], i === t)
        return;
    } else e instanceof Ge && (i = n.getAttribute(r));
    if (i === String(t))
      return;
  }
  e.setValue(t);
}), un = (t) => {
  if (t.length !== 2 || t[0] !== "" || t[1] !== "")
    throw new Error("`live` bindings can only contain a single expression");
}, Po = ["touchstart", "touchmove", "scroll", "mousewheel"], mn = (t = {}) => {
  const e = {};
  for (const i in t)
    e[i] = t[i];
  return Object.assign({ badInput: !1, customError: !1, patternMismatch: !1, rangeOverflow: !1, rangeUnderflow: !1, stepMismatch: !1, tooLong: !1, tooShort: !1, typeMismatch: !1, valid: !0, valueMissing: !1 }, e);
};
class k extends qe {
  constructor() {
    super(...arguments), this.mdcFoundationClass = $o, this.value = "", this.type = "text", this.placeholder = "", this.label = "", this.icon = "", this.iconTrailing = "", this.disabled = !1, this.required = !1, this.minLength = -1, this.maxLength = -1, this.outlined = !1, this.helper = "", this.validateOnInitialRender = !1, this.validationMessage = "", this.autoValidate = !1, this.pattern = "", this.min = "", this.max = "", this.step = null, this.size = null, this.helperPersistent = !1, this.charCounter = !1, this.endAligned = !1, this.prefix = "", this.suffix = "", this.name = "", this.readOnly = !1, this.autocapitalize = "", this.outlineOpen = !1, this.outlineWidth = 0, this.isUiValid = !0, this.focused = !1, this._validity = mn(), this.validityTransform = null;
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
    return u`
      <label class="mdc-text-field ${ae(n)}">
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
          .floatingLabelFoundation=${ar(this.label)}
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
    return u`<i class="material-icons mdc-text-field__icon ${ae({
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
    return u`<span class="mdc-text-field__affix ${ae({
      "mdc-text-field__affix--prefix": !i,
      "mdc-text-field__affix--suffix": i
    })}">
        ${e}</span>`;
  }
  /** @soyTemplate */
  renderInput(e) {
    const i = this.minLength === -1 ? void 0 : this.minLength, n = this.maxLength === -1 ? void 0 : this.maxLength, r = this.autocapitalize ? this.autocapitalize : void 0, a = this.validationMessage && !this.isUiValid, o = this.label ? "label" : void 0, l = e ? "helper-text" : void 0, d = this.focused || this.helperPersistent || a ? "helper-text" : void 0;
    return u`
      <input
          aria-labelledby=${O(o)}
          aria-controls="${O(l)}"
          aria-describedby="${O(d)}"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${Oo(this.value)}"
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
    return this.outlined ? "" : u`
      <span .lineRippleFoundation=${or()}></span>
    `;
  }
  /** @soyTemplate */
  renderHelperText(e, i) {
    const n = this.validationMessage && !this.isUiValid, r = {
      "mdc-text-field-helper-text--persistent": this.helperPersistent,
      "mdc-text-field-helper-text--validation-msg": n
    }, a = this.focused || this.helperPersistent || n ? void 0 : "true", o = n ? this.validationMessage : this.helper;
    return e ? u`
      <div class="mdc-text-field-helper-line">
        <div id="helper-text"
             aria-hidden="${O(a)}"
             class="mdc-text-field-helper-text ${ae(r)}"
             >${o}</div>
        ${this.renderCharCounter(i)}
      </div>` : "";
  }
  /** @soyTemplate */
  renderCharCounter(e) {
    const i = Math.min(this.value.length, this.maxLength);
    return e ? u`
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
    let n = mn(i);
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
    }, deregisterValidationAttributeChangeHandler: (e) => e.disconnect() }, Vt(this.mdcRoot));
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
      registerInputInteractionHandler: (e, i) => this.formElement.addEventListener(e, i, { passive: e in Po }),
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
  C(".mdc-text-field")
], k.prototype, "mdcRoot", void 0);
m([
  C("input")
], k.prototype, "formElement", void 0);
m([
  C(".mdc-floating-label")
], k.prototype, "labelElement", void 0);
m([
  C(".mdc-line-ripple")
], k.prototype, "lineRippleElement", void 0);
m([
  C("mwc-notched-outline")
], k.prototype, "outlineElement", void 0);
m([
  C(".mdc-notched-outline__notch")
], k.prototype, "notchElement", void 0);
m([
  b({ type: String })
], k.prototype, "value", void 0);
m([
  b({ type: String })
], k.prototype, "type", void 0);
m([
  b({ type: String })
], k.prototype, "placeholder", void 0);
m([
  b({ type: String }),
  V(function(t, e) {
    e !== void 0 && this.label !== e && this.layout();
  })
], k.prototype, "label", void 0);
m([
  b({ type: String })
], k.prototype, "icon", void 0);
m([
  b({ type: String })
], k.prototype, "iconTrailing", void 0);
m([
  b({ type: Boolean, reflect: !0 })
], k.prototype, "disabled", void 0);
m([
  b({ type: Boolean })
], k.prototype, "required", void 0);
m([
  b({ type: Number })
], k.prototype, "minLength", void 0);
m([
  b({ type: Number })
], k.prototype, "maxLength", void 0);
m([
  b({ type: Boolean, reflect: !0 }),
  V(function(t, e) {
    e !== void 0 && this.outlined !== e && this.layout();
  })
], k.prototype, "outlined", void 0);
m([
  b({ type: String })
], k.prototype, "helper", void 0);
m([
  b({ type: Boolean })
], k.prototype, "validateOnInitialRender", void 0);
m([
  b({ type: String })
], k.prototype, "validationMessage", void 0);
m([
  b({ type: Boolean })
], k.prototype, "autoValidate", void 0);
m([
  b({ type: String })
], k.prototype, "pattern", void 0);
m([
  b({ type: String })
], k.prototype, "min", void 0);
m([
  b({ type: String })
], k.prototype, "max", void 0);
m([
  b({ type: Number })
], k.prototype, "step", void 0);
m([
  b({ type: Number })
], k.prototype, "size", void 0);
m([
  b({ type: Boolean })
], k.prototype, "helperPersistent", void 0);
m([
  b({ type: Boolean })
], k.prototype, "charCounter", void 0);
m([
  b({ type: Boolean })
], k.prototype, "endAligned", void 0);
m([
  b({ type: String })
], k.prototype, "prefix", void 0);
m([
  b({ type: String })
], k.prototype, "suffix", void 0);
m([
  b({ type: String })
], k.prototype, "name", void 0);
m([
  b({ type: String })
], k.prototype, "inputMode", void 0);
m([
  b({ type: Boolean })
], k.prototype, "readOnly", void 0);
m([
  b({ type: String })
], k.prototype, "autocapitalize", void 0);
m([
  E()
], k.prototype, "outlineOpen", void 0);
m([
  E()
], k.prototype, "outlineWidth", void 0);
m([
  E()
], k.prototype, "isUiValid", void 0);
m([
  E()
], k.prototype, "focused", void 0);
m([
  Ue({ passive: !0 })
], k.prototype, "handleInputChange", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Fo = ie`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{content:none}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38) )}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-error-color, var(--mdc-theme-error, #b00020) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Ot = class extends k {
};
Ot.styles = [Fo];
Ot = m([
  X("mwc-textfield")
], Ot);
var Vo = Object.defineProperty, Mo = Object.getOwnPropertyDescriptor, ye = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Mo(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Vo(e, i, r), r;
};
let ce = class extends Ot {
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
    return this.reservedValues && this.reservedValues.some((t) => t === this.value) ? (this.setCustomValidity(s("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
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
      (t) => u`<mwc-list-item ?selected=${t === this.multiplier}
          >${t === null ? s("textfield.noMultiplier") : t}</mwc-list-item
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
ye([
  b({ type: Boolean })
], ce.prototype, "nullable", 2);
ye([
  b({ type: Array })
], ce.prototype, "multipliers", 2);
ye([
  b({ type: String })
], ce.prototype, "multiplier", 1);
ye([
  b({ type: String })
], ce.prototype, "unit", 2);
ye([
  E()
], ce.prototype, "null", 1);
ye([
  b({ type: String })
], ce.prototype, "maybeValue", 1);
ye([
  b({ type: String })
], ce.prototype, "defaultValue", 2);
ye([
  b({ type: Array })
], ce.prototype, "reservedValues", 2);
ye([
  C("mwc-switch")
], ce.prototype, "nullSwitch", 2);
ye([
  C("mwc-menu")
], ce.prototype, "multiplierMenu", 2);
ye([
  C("mwc-icon-button")
], ce.prototype, "multiplierButton", 2);
ce = ye([
  X("wizard-textfield")
], ce);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Bo = ie`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;
let gi = class extends Ie {
  /** @soyTemplate */
  render() {
    return u`<slot></slot>`;
  }
};
gi.styles = [Bo];
gi = m([
  X("mwc-icon")
], gi);
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
var Ho = ["input", "button", "textarea", "select"], pn = function(t) {
  var e = t.target;
  if (e) {
    var i = ("" + e.tagName).toLowerCase();
    Ho.indexOf(i) === -1 && t.preventDefault();
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
function qo() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function hn(t, e) {
  for (var i = /* @__PURE__ */ new Map(), n = 0; n < t; n++) {
    var r = e(n).trim();
    if (r) {
      var a = r[0].toLowerCase();
      i.has(a) || i.set(a, []), i.get(a).push({ text: r.toLowerCase(), index: n });
    }
  }
  return i.forEach(function(o) {
    o.sort(function(l, d) {
      return l.index - d.index;
    });
  }), i;
}
function xi(t, e) {
  var i = t.nextChar, n = t.focusItemAtIndex, r = t.sortedIndexByFirstChar, a = t.focusedItemIndex, o = t.skipFocus, l = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    Wo(e);
  }, de.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + i;
  var d;
  return e.typeaheadBuffer.length === 1 ? d = Go(r, a, l, e) : d = Uo(r, l, e), d !== -1 && !o && n(d), d;
}
function Go(t, e, i, n) {
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
  var l = -1, d;
  for (d = 0; d < a.length; d++)
    if (!i(a[d].index)) {
      l = d;
      break;
    }
  for (; d < a.length; d++)
    if (a[d].index > e && !i(a[d].index)) {
      l = d;
      break;
    }
  return l !== -1 ? (n.sortedIndexCursor = l, a[n.sortedIndexCursor].index) : -1;
}
function Uo(t, e, i) {
  var n = i.typeaheadBuffer[0], r = t.get(n);
  if (!r)
    return -1;
  var a = r[i.sortedIndexCursor];
  if (a.text.lastIndexOf(i.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  for (var o = (i.sortedIndexCursor + 1) % r.length, l = -1; o !== i.sortedIndexCursor; ) {
    var d = r[o], c = d.text.lastIndexOf(i.typeaheadBuffer, 0) === 0, h = !e(d.index);
    if (c && h) {
      l = o;
      break;
    }
    o = (o + 1) % r.length;
  }
  return l !== -1 ? (i.sortedIndexCursor = l, r[i.sortedIndexCursor].index) : -1;
}
function lr(t) {
  return t.typeaheadBuffer.length > 0;
}
function Wo(t) {
  t.typeaheadBuffer = "";
}
function jo(t, e) {
  var i = t.event, n = t.isTargetListItem, r = t.focusedItemIndex, a = t.focusItemAtIndex, o = t.sortedIndexByFirstChar, l = t.isItemAtIndexDisabled, d = U(i) === "ArrowLeft", c = U(i) === "ArrowUp", h = U(i) === "ArrowRight", f = U(i) === "ArrowDown", g = U(i) === "Home", y = U(i) === "End", v = U(i) === "Enter", S = U(i) === "Spacebar";
  if (i.ctrlKey || i.metaKey || d || c || h || f || g || y || v)
    return -1;
  var T = !S && i.key.length === 1;
  if (T) {
    pn(i);
    var _ = {
      focusItemAtIndex: a,
      focusedItemIndex: r,
      nextChar: i.key.toLowerCase(),
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: l
    };
    return xi(_, e);
  }
  if (!S)
    return -1;
  n && pn(i);
  var R = n && lr(e);
  if (R) {
    var _ = {
      focusItemAtIndex: a,
      focusedItemIndex: r,
      nextChar: " ",
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: l
    };
    return xi(_, e);
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
var B = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, Yt = {
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
}, Ye = {
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
var Ko = (
  /** @class */
  function(t) {
    Ce(e, t);
    function e(i, n) {
      n === void 0 && (n = {});
      var r = t.call(this, q(q({}, e.defaultAdapter), i)) || this;
      return r.disabled = !1, r.isMenuOpen = !1, r.useDefaultValidation = !0, r.customValidity = !0, r.lastSelectedIndex = Ye.UNSET_INDEX, r.clickDebounceTimeout = 0, r.recentlyClicked = !1, r.leadingIcon = n.leadingIcon, r.helperText = n.helperText, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return B;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ye;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Yt;
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
      n === void 0 && (n = !1), r === void 0 && (r = !1), !(i >= this.adapter.getMenuItemCount()) && (i === Ye.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(i).trim()), this.adapter.setSelectedIndex(i), n && this.adapter.closeMenu(), !r && this.lastSelectedIndex !== i && this.handleChange(), this.lastSelectedIndex = i);
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
      return i !== Ye.UNSET_INDEX ? n[i] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(i) {
      this.disabled = i, this.disabled ? (this.adapter.addClass(B.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(B.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(B.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(i) {
      this.helperText && this.helperText.setContent(i);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var i = this.getValue().length > 0, n = this.adapter.hasClass(B.FOCUSED), r = i || n, a = this.adapter.hasClass(B.REQUIRED);
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
      this.adapter.removeClass(B.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var i = this.adapter.hasClass(B.REQUIRED);
      i && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(i) {
      this.setSelectedIndex(
        i,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(B.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(B.FOCUSED))) {
        var n = U(i) === I.ENTER, r = U(i) === I.SPACEBAR, a = U(i) === I.ARROW_UP, o = U(i) === I.ARROW_DOWN, l = i.ctrlKey || i.metaKey;
        if (!l && (!r && i.key && i.key.length === 1 || r && this.adapter.isTypeaheadInProgress())) {
          var d = r ? " " : i.key, c = this.adapter.typeaheadMatchItem(d, this.getSelectedIndex());
          c >= 0 && this.setSelectedIndex(c), i.preventDefault();
          return;
        }
        !n && !r && !a && !o || (a && this.getSelectedIndex() > 0 ? this.setSelectedIndex(this.getSelectedIndex() - 1) : o && this.getSelectedIndex() < this.adapter.getMenuItemCount() - 1 && this.setSelectedIndex(this.getSelectedIndex() + 1), this.openMenu(), i.preventDefault());
      }
    }, e.prototype.notchOutline = function(i) {
      if (this.adapter.hasOutline()) {
        var n = this.adapter.hasClass(B.FOCUSED);
        if (i) {
          var r = Ye.LABEL_SCALE, a = this.adapter.getLabelWidth() * r;
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
      this.useDefaultValidation || (this.customValidity = i), this.adapter.setSelectAnchorAttr("aria-invalid", (!i).toString()), i ? (this.adapter.removeClass(B.INVALID), this.adapter.removeMenuClass(B.MENU_INVALID)) : (this.adapter.addClass(B.INVALID), this.adapter.addMenuClass(B.MENU_INVALID)), this.syncHelperTextValidity(i);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(B.REQUIRED) && !this.adapter.hasClass(B.DISABLED) ? this.getSelectedIndex() !== Ye.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(i) {
      i ? this.adapter.addClass(B.REQUIRED) : this.adapter.removeClass(B.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", i.toString()), this.adapter.setLabelRequired(i);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var i = this.adapter.getAnchorElement();
      i && (this.adapter.setMenuAnchorElement(i), this.adapter.setMenuAnchorCorner(se.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(B.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(B.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(B.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var i = this.adapter.hasClass(B.REQUIRED);
      i && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(i) {
      if (this.helperText) {
        this.helperText.setValidity(i);
        var n = this.helperText.isVisible(), r = this.helperText.getId();
        n && r ? this.adapter.setSelectAnchorAttr(Yt.ARIA_DESCRIBEDBY, r) : this.adapter.removeSelectAnchorAttr(Yt.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var i = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        i.recentlyClicked = !1;
      }, Ye.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(Ae)
);
const fn = (t = {}) => {
  const e = {};
  for (const i in t)
    e[i] = t[i];
  return Object.assign({ badInput: !1, customError: !1, patternMismatch: !1, rangeOverflow: !1, rangeUnderflow: !1, stepMismatch: !1, tooLong: !1, tooShort: !1, typeMismatch: !1, valid: !0, valueMissing: !1 }, e);
};
class $ extends qe {
  constructor() {
    super(...arguments), this.mdcFoundationClass = Ko, this.disabled = !1, this.outlined = !1, this.label = "", this.outlineOpen = !1, this.outlineWidth = 0, this.value = "", this.selectedText = "", this.icon = "", this.menuOpen = !1, this.helper = "", this.validateOnInitialRender = !1, this.validationMessage = "", this.required = !1, this.naturalMenuWidth = !1, this.isUiValid = !0, this.fixedMenuPosition = !1, this.typeaheadState = qo(), this.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), this.menuElement_ = null, this.listeners = [], this.onBodyClickBound = () => {
    }, this._menuUpdateComplete = null, this.valueSetDirectly = !1, this.validityTransform = null, this._validity = fn();
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
    return u`
      <div
          class="mdc-select ${ae(e)}">
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
            class="mdc-select__menu mdc-menu mdc-menu-surface ${ae(i)}"
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
    return this.outlined ? Te : u`
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
      </mwc-notched-outline>` : Te;
  }
  renderLabel() {
    return this.label ? u`
      <span
          .floatingLabelFoundation=${ar(this.label)}
          id="label">${this.label}</span>
    ` : Te;
  }
  renderLeadingIcon() {
    return this.icon ? u`<mwc-icon class="mdc-select__icon"><div>${this.icon}</div></mwc-icon>` : Te;
  }
  renderLineRipple() {
    return this.outlined ? Te : u`
      <span .lineRippleFoundation=${or()}></span>
    `;
  }
  renderHelperText() {
    if (!this.shouldRenderHelperText)
      return Te;
    const e = this.validationMessage && !this.isUiValid;
    return u`
        <p
          class="mdc-select-helper-text ${ae({
      "mdc-select-helper-text--validation-msg": e
    })}"
          id="helper-text">${e ? this.validationMessage : this.helper}</p>`;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Vt(this.mdcRoot)), { activateBottomLine: () => {
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
    }, isTypeaheadInProgress: () => lr(this.typeaheadState), typeaheadMatchItem: (e, i) => {
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
      }, r = xi(n, this.typeaheadState);
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
    let n = fn(i);
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
    this.sortedIndexByFirstChar = hn(this.items.length, (i) => this.items[i].text);
  }
  onItemsUpdated() {
    this.sortedIndexByFirstChar = hn(this.items.length, (e) => this.items[e].text);
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
    const i = U(e) === I.ARROW_UP, n = U(e) === I.ARROW_DOWN;
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
    const i = this.menuElement.getFocusedItemIndex(), n = Zn(e.target) ? e.target : null, r = n ? n.hasAttribute("mwc-list-item") : !1, a = {
      event: e,
      focusItemAtIndex: (o) => {
        this.menuElement.focusItemAtIndex(o);
      },
      focusedItemIndex: i,
      isTargetListItem: r,
      sortedIndexByFirstChar: this.sortedIndexByFirstChar,
      isItemAtIndexDisabled: (o) => this.items[o].disabled
    };
    jo(a, this.typeaheadState);
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
m([
  C(".mdc-select")
], $.prototype, "mdcRoot", void 0);
m([
  C(".formElement")
], $.prototype, "formElement", void 0);
m([
  C("slot")
], $.prototype, "slotElement", void 0);
m([
  C("select")
], $.prototype, "nativeSelectElement", void 0);
m([
  C("input")
], $.prototype, "nativeInputElement", void 0);
m([
  C(".mdc-line-ripple")
], $.prototype, "lineRippleElement", void 0);
m([
  C(".mdc-floating-label")
], $.prototype, "labelElement", void 0);
m([
  C("mwc-notched-outline")
], $.prototype, "outlineElement", void 0);
m([
  C(".mdc-menu")
], $.prototype, "menuElement", void 0);
m([
  C(".mdc-select__anchor")
], $.prototype, "anchorElement", void 0);
m([
  b({ type: Boolean, attribute: "disabled", reflect: !0 }),
  V(function(t) {
    this.mdcFoundation && this.mdcFoundation.setDisabled(t);
  })
], $.prototype, "disabled", void 0);
m([
  b({ type: Boolean }),
  V(function(t, e) {
    e !== void 0 && this.outlined !== e && this.layout(!1);
  })
], $.prototype, "outlined", void 0);
m([
  b({ type: String }),
  V(function(t, e) {
    e !== void 0 && this.label !== e && this.layout(!1);
  })
], $.prototype, "label", void 0);
m([
  E()
], $.prototype, "outlineOpen", void 0);
m([
  E()
], $.prototype, "outlineWidth", void 0);
m([
  b({ type: String }),
  V(function(t) {
    if (this.mdcFoundation) {
      const e = this.selected === null && !!t, i = this.selected && this.selected.value !== t;
      (e || i) && this.selectByValue(t), this.reportValidity();
    }
  })
], $.prototype, "value", void 0);
m([
  E()
], $.prototype, "selectedText", void 0);
m([
  b({ type: String })
], $.prototype, "icon", void 0);
m([
  E()
], $.prototype, "menuOpen", void 0);
m([
  b({ type: String })
], $.prototype, "helper", void 0);
m([
  b({ type: Boolean })
], $.prototype, "validateOnInitialRender", void 0);
m([
  b({ type: String })
], $.prototype, "validationMessage", void 0);
m([
  b({ type: Boolean })
], $.prototype, "required", void 0);
m([
  b({ type: Boolean })
], $.prototype, "naturalMenuWidth", void 0);
m([
  E()
], $.prototype, "isUiValid", void 0);
m([
  b({ type: Boolean })
], $.prototype, "fixedMenuPosition", void 0);
m([
  Ue({ capture: !0 })
], $.prototype, "handleTypeahead", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Xo = ie`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-select{display:inline-flex;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87)}.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-select.mdc-select--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#6200ee;fill:var(--mdc-theme-primary, #6200ee)}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:rgba(0, 0, 0, 0.54)}.mdc-select.mdc-select--disabled .mdc-select__icon{color:rgba(0, 0, 0, 0.38)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:red}.mdc-select.mdc-select--disabled .mdc-floating-label{color:GrayText}.mdc-select.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}.mdc-select.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select.mdc-select--disabled .mdc-notched-outline__trailing{border-color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__icon{color:GrayText}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:GrayText}}.mdc-select .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:0;padding-right:0}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.mdc-select .mdc-select__icon{width:24px;height:24px;font-size:24px}.mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item,.mdc-select .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:12px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic,.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:12px;margin-right:0}.mdc-select__dropdown-icon{margin-left:12px;margin-right:12px;display:inline-flex;position:relative;align-self:center;align-items:center;justify-content:center;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic{width:41.6666666667%;height:20.8333333333%}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;transition:opacity 100.5ms linear 49.5ms}.mdc-select__anchor{width:200px;min-width:0;flex:1 1 auto;position:relative;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-select__selected-text-container{display:flex;appearance:none;pointer-events:none;box-sizing:border-box;width:auto;min-width:0;flex-grow:1;height:28px;border:none;outline:none;padding:0;background-color:transparent;color:inherit}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;width:100%;text-align:left}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{text-align:right}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item{padding-left:12px;padding-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item,.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:12px;padding-right:12px}.mdc-select__menu .mdc-deprecated-list .mdc-select__icon{margin-left:0;margin-right:0}[dir=rtl] .mdc-select__menu .mdc-deprecated-list .mdc-select__icon,.mdc-select__menu .mdc-deprecated-list .mdc-select__icon[dir=rtl]{margin-left:0;margin-right:0}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select--filled .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.mdc-select--filled .mdc-select__anchor::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor::before{display:none}.mdc-select--filled .mdc-select__anchor{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-select--filled:not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke}.mdc-select--filled.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-select--filled:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--filled.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-select--filled .mdc-menu-surface--is-open-below{border-top-left-radius:0px;border-top-right-radius:0px}.mdc-select--filled.mdc-select--focused.mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-select--filled .mdc-floating-label,.mdc-select--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined{border:none}.mdc-select--outlined .mdc-select__anchor{height:56px}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-56px{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-select--outlined .mdc-select__anchor{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-select--outlined+.mdc-select-helper-text{margin-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-select--outlined .mdc-select__anchor{display:flex;align-items:baseline;overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--outlined .mdc-select__anchor::before{display:none}.mdc-select--outlined .mdc-select__selected-text-container{display:flex;border:none;z-index:1;background-color:transparent}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;left:4px;right:initial}[dir=rtl] .mdc-select--outlined .mdc-floating-label,.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake,.mdc-select--outlined.mdc-select--with-leading-icon[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 96px)}.mdc-select--outlined .mdc-menu-surface{margin-bottom:8px}.mdc-select--outlined.mdc-select--no-label .mdc-menu-surface,.mdc-select--outlined .mdc-menu-surface--is-open-below{margin-bottom:0}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-select__anchor .mdc-select__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-select__anchor .mdc-select__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-select__anchor:hover .mdc-select__ripple::before,.mdc-select__anchor.mdc-ripple-surface--hover .mdc-select__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select-helper-text{margin:0;margin-left:16px;margin-right:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal}[dir=rtl] .mdc-select-helper-text,.mdc-select-helper-text[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;user-select:none;flex-shrink:0;align-self:center;background-color:transparent;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex="-1"]{cursor:default;pointer-events:none}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-block;vertical-align:top;outline:none}.mdc-select{width:100%}[hidden]{display:none}.mdc-select__icon{z-index:2}.mdc-select--with-leading-icon{--mdc-list-item-graphic-margin: calc( 48px - var(--mdc-list-item-graphic-size, 24px) - var(--mdc-list-side-padding, 16px) )}.mdc-select .mdc-select__anchor .mdc-select__selected-text{overflow:hidden}.mdc-select .mdc-select__anchor *{display:inline-flex}.mdc-select .mdc-select__anchor .mdc-floating-label{display:inline-block}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-idle-border-color, rgba(0, 0, 0, 0.38) );--mdc-notched-outline-notch-offset: 1px}:host(:not([disabled]):hover) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87);color:var(--mdc-select-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-select-idle-line-color, rgba(0, 0, 0, 0.42))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-select-hover-line-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke;background-color:var(--mdc-select-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-select__dropdown-icon{fill:var(--mdc-select-error-dropdown-icon-color, var(--mdc-select-error-color, var(--mdc-theme-error, #b00020)))}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label,:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label::after{color:var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}.mdc-select__menu--invalid{--mdc-theme-primary: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.6);color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54);fill:var(--mdc-select-dropdown-icon-color, rgba(0, 0, 0, 0.54))}:host(:not([disabled])) .mdc-select.mdc-select--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px;--mdc-notched-outline-notch-offset: 2px}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-select__dropdown-icon{fill:rgba(98,0,238,.87);fill:var(--mdc-select-focused-dropdown-icon-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-select:not(.mdc-select--outlined).mdc-select--disabled .mdc-select__anchor{background-color:#fafafa;background-color:var(--mdc-select-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-select.mdc-select--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-select .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38);fill:var(--mdc-select-disabled-dropdown-icon-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select-helper-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Pt = class extends $ {
};
Pt.styles = [Xo];
Pt = m([
  X("mwc-select")
], Pt);
function D(t, e, i) {
  const n = t.createElementNS(t.documentElement.namespaceURI, e);
  return Object.entries(i).filter(([r, a]) => a !== null).forEach(([r, a]) => n.setAttribute(r, a)), n;
}
function F(t, e) {
  const i = t.cloneNode(!1);
  return Object.entries(e).forEach(([n, r]) => {
    r === null ? i.removeAttribute(n) : i.setAttribute(n, r);
  }), i;
}
function ee(t, e) {
  return !t || !e ? [] : Array.from(t.children).filter(
    (i) => i.tagName === e
  );
}
var Yo = Object.defineProperty, Zo = Object.getOwnPropertyDescriptor, it = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Zo(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Yo(e, i, r), r;
};
let $e = class extends Pt {
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
it([
  b({ type: Boolean })
], $e.prototype, "nullable", 2);
it([
  E()
], $e.prototype, "null", 1);
it([
  b({ type: String })
], $e.prototype, "maybeValue", 1);
it([
  b({ type: String })
], $e.prototype, "defaultValue", 2);
it([
  b({ type: Array })
], $e.prototype, "reservedValues", 2);
it([
  C("mwc-switch")
], $e.prototype, "nullSwitch", 2);
$e = it([
  X("wizard-select")
], $e);
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
var Qo = {
  ROOT: "mdc-form-field"
}, Jo = {
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
var el = (
  /** @class */
  function(t) {
    Ce(e, t);
    function e(i) {
      var n = t.call(this, q(q({}, e.defaultAdapter), i)) || this;
      return n.click = function() {
        n.handleClick();
      }, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Qo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Jo;
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
  }(Ae)
);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class je extends tt {
  constructor() {
    super(...arguments), this.alignEnd = !1, this.spaceBetween = !1, this.nowrap = !1, this.label = "", this.mdcFoundationClass = el;
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
        if (e instanceof qe) {
          const i = await e.ripple;
          i && i.startPress();
        }
      },
      deactivateInputRipple: async () => {
        const e = this.input;
        if (e instanceof qe) {
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
    return u`
      <div class="mdc-form-field ${ae(e)}">
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
  b({ type: Boolean })
], je.prototype, "alignEnd", void 0);
m([
  b({ type: Boolean })
], je.prototype, "spaceBetween", void 0);
m([
  b({ type: Boolean })
], je.prototype, "nowrap", void 0);
m([
  b({ type: String }),
  V(async function(t) {
    const e = this.input;
    e && (e.localName === "input" ? e.setAttribute("aria-label", t) : e instanceof qe && (await e.updateComplete, e.setAriaLabel(t)));
  })
], je.prototype, "label", void 0);
m([
  C(".mdc-form-field")
], je.prototype, "mdcRoot", void 0);
m([
  Ri("", !0, "*")
], je.prototype, "slottedInputs", void 0);
m([
  C("label")
], je.prototype, "labelEl", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const tl = ie`.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch[dir=rtl]){margin-left:10px}`;
let yi = class extends je {
};
yi.styles = [tl];
yi = m([
  X("mwc-formfield")
], yi);
class J extends qe {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new At(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
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
    return u`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${ae(i)}">
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
m([
  C(".mdc-checkbox")
], J.prototype, "mdcRoot", void 0);
m([
  C("input")
], J.prototype, "formElement", void 0);
m([
  b({ type: Boolean, reflect: !0 })
], J.prototype, "checked", void 0);
m([
  b({ type: Boolean })
], J.prototype, "indeterminate", void 0);
m([
  b({ type: Boolean, reflect: !0 })
], J.prototype, "disabled", void 0);
m([
  b({ type: String, reflect: !0 })
], J.prototype, "name", void 0);
m([
  b({ type: String })
], J.prototype, "value", void 0);
m([
  ct,
  b({ type: String, attribute: "aria-label" })
], J.prototype, "ariaLabel", void 0);
m([
  ct,
  b({ type: String, attribute: "aria-labelledby" })
], J.prototype, "ariaLabelledBy", void 0);
m([
  ct,
  b({ type: String, attribute: "aria-describedby" })
], J.prototype, "ariaDescribedBy", void 0);
m([
  b({ type: Boolean })
], J.prototype, "reducedTouchTarget", void 0);
m([
  E()
], J.prototype, "animationClass", void 0);
m([
  E()
], J.prototype, "shouldRenderRipple", void 0);
m([
  E()
], J.prototype, "focused", void 0);
m([
  E()
], J.prototype, "useStateLayerCustomProperties", void 0);
m([
  wt("mwc-ripple")
], J.prototype, "ripple", void 0);
m([
  Ue({ passive: !0 })
], J.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const il = ie`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let vi = class extends J {
};
vi.styles = [il];
vi = m([
  X("mwc-checkbox")
], vi);
var nl = Object.defineProperty, rl = Object.getOwnPropertyDescriptor, xe = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? rl(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && nl(e, i, r), r;
};
let ue = class extends Ie {
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
xe([
  b({ type: String })
], ue.prototype, "label", 2);
xe([
  b({ type: String })
], ue.prototype, "helper", 2);
xe([
  b({ type: Boolean })
], ue.prototype, "nullable", 2);
xe([
  b({ type: Boolean })
], ue.prototype, "defaultChecked", 2);
xe([
  b({ type: String })
], ue.prototype, "maybeValue", 1);
xe([
  b({ type: Boolean })
], ue.prototype, "disabled", 2);
xe([
  E()
], ue.prototype, "null", 1);
xe([
  E()
], ue.prototype, "checked", 1);
xe([
  E()
], ue.prototype, "deactivateCheckbox", 2);
xe([
  E()
], ue.prototype, "formfieldLabel", 1);
xe([
  C("mwc-switch")
], ue.prototype, "nullSwitch", 2);
xe([
  C("mwc-checkbox")
], ue.prototype, "checkbox", 2);
ue = xe([
  X("wizard-checkbox")
], ue);
function al(t) {
  return typeof t == "function";
}
function x(t) {
  return t instanceof ce || t instanceof $e || t instanceof ue ? t.maybeValue : t.value ?? null;
}
function Vi(t) {
  return t instanceof ce ? t.multiplier : null;
}
function Oe(t, e) {
  if (!t)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const i = al(t) ? t : () => t;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: i, ...e?.detail }
  });
}
function nt(t) {
  return Oe(t, { detail: { subwizard: !0 } });
}
function ol(t) {
  let e = "", i = t.parentElement;
  for (; i?.getAttribute("name"); )
    e = "/" + i.getAttribute("name") + e, i = i.parentElement;
  return e;
}
function ll(t) {
  const e = t.getAttribute("name");
  return e || void 0;
}
function oe(t) {
  const e = t.split(">"), i = e.pop() ?? "";
  return [e.join(">"), i];
}
const j = ":not(*)";
function dl(t) {
  return `${t.getAttribute("version")}	${t.getAttribute("revision")}`;
}
function sl(t, e) {
  const [i, n] = e.split("	");
  return !i || !n ? j : `${t}[version="${i}"][revision="${n}"]`;
}
function bn(t) {
  return z(t.parentElement) + ">" + t.getAttribute("connectivityNode");
}
function gn(t, e) {
  const [i, n] = oe(e), r = K[t].parents.flatMap(
    (a) => re(a, i).split(",")
  );
  return te(
    r,
    [">"],
    [`${t}[connectivityNode="${n}"]`]
  ).map((a) => a.join("")).join(",");
}
function cl(t) {
  const [e, i, n, r, a, o] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((l) => t.getAttribute(l));
  return e === "None" ? `${z(t.parentElement)}>(${r} ${o} ${a})` : `${e} ${i || "(Client)"}/${n ?? ""} ${r} ${a ?? ""}`;
}
function ul(t, e) {
  if (e.endsWith(")")) {
    const [g, y] = oe(e), [v, S, T] = y.substring(1, y.length - 1).split(" ");
    if (!v || !S) return j;
    const _ = K[t].parents.flatMap(
      (R) => re(R, g).split(",")
    );
    return te(
      _,
      [">"],
      [`${t}[iedName="None"][lnClass="${v}"][lnType="${S}"][lnInst="${T}"]`]
    ).map((R) => R.join("")).join(",");
  }
  const [i, n, r, a, o] = e.split(/[ /]/);
  if (!i || !n || !a) return j;
  const [
    l,
    d,
    c,
    h,
    f
  ] = [
    [`[iedName="${i}"]`],
    n === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${n}"]`],
    r ? [`[prefix="${r}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    o ? [`[lnInst="${o}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return te(
    [t],
    l,
    d,
    c,
    h,
    f
  ).map((g) => g.join("")).join(",");
}
function ml(t) {
  return `${z(t.parentElement)}>${t.getAttribute(
    "iedName"
  )} ${t.getAttribute("apName")}`;
}
function pl(t, e) {
  const [i, n] = oe(e), [r, a] = n.split(" ");
  return `${re(
    "IED",
    i
  )}>${t}[iedName="${r}"][apName="${a}"]`;
}
function hl(t) {
  return `${z(t.parentElement)}>${t.getAttribute("associationID") ?? ""}`;
}
function fl(t, e) {
  const [i, n] = oe(e);
  return n ? `${re(
    "Server",
    i
  )}>${t}[associationID="${n}"]` : j;
}
function bl(t) {
  return `${z(t.closest("IED"))}>>${t.getAttribute("inst")}`;
}
function gl(t, e) {
  const [i, n] = e.split(">>");
  return n ? `IED[name="${i}"] ${t}[inst="${n}"]` : j;
}
function xl(t) {
  const e = t.textContent, [i, n, r, a, o] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((l) => t.getAttribute(l));
  return `${z(t.parentElement)}>${e} ${i || ""} ${n || ""}/${r ?? ""} ${a ?? ""} ${o ?? ""}`;
}
function yl(t, e) {
  const [i, n] = oe(e), [r, a, o, l, d, c] = n.split(/[ /]/), [
    h,
    f,
    g,
    y,
    v,
    S
  ] = [
    K[t].parents.flatMap(
      (T) => re(T, i).split(",")
    ),
    [`${r}`],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    l ? [`[prefix="${l}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${d}"]`],
    c ? [`[lnInst="${c}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return te(
    h,
    [">"],
    [t],
    f,
    g,
    y,
    v,
    S
  ).map((T) => T.join("")).join(",");
}
function vl(t) {
  const [e, i, n, r, a, o, l, d] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((h) => t.getAttribute(h)), c = `${e}/${i ?? ""} ${n} ${r ?? ""}.${a} ${o || ""}`;
  return `${z(t.parentElement)}>${c} (${l}${d ? " [" + d + "]" : ""})`;
}
function _l(t, e) {
  const [i, n] = oe(e), [r, a, o, l] = n.split(/[ /.]/), d = n.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), c = d && d[1] ? d[1] : "", h = d && d[2] ? d[2] : "", f = n.match(/\(([A-Z]{2})/), g = n.match(/ \[([0-9]{1,2})\]/), y = f && f[1] ? f[1] : "", v = g && g[1] ? g[1] : "", [
    S,
    T,
    _,
    R,
    G,
    ve,
    Bt,
    Ht,
    qt
  ] = [
    K[t].parents.flatMap(
      (ut) => re(ut, i).split(",")
    ),
    [`[ldInst="${r}"]`],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    l ? [`[lnInst="${l}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${c}"]`],
    h ? [`[daName="${h}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${y}"]`],
    v ? [`[ix="${v}"]`] : [":not([ix])", '[ix=""]']
  ];
  return te(
    S,
    [">"],
    [t],
    T,
    _,
    R,
    G,
    ve,
    Bt,
    Ht,
    qt
  ).map((ut) => ut.join("")).join(",");
}
function wl(t) {
  if (!t.parentElement) return NaN;
  const e = z(t.parentElement), i = t.getAttribute("iedName"), n = t.getAttribute("intAddr"), r = Array.from(
    t.parentElement.querySelectorAll(`ExtRef[intAddr="${n}"]`)
  ).indexOf(t);
  if (n) return `${e}>${n}[${r}]`;
  const [
    a,
    o,
    l,
    d,
    c,
    h,
    f,
    g,
    y,
    v,
    S,
    T
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
  ].map((G) => t.getAttribute(G)), _ = T ? `${f}:${T} ${g ?? ""}/${y ?? ""} ${v ?? ""} ${S ?? ""}` : "", R = `${i} ${a}/${o ?? ""} ${l} ${d ?? ""} ${c} ${h || ""}`;
  return `${e}>${_ ? _ + " " : ""}${R}${n ? `@${n}` : ""}`;
}
function Al(t, e) {
  const [i, n] = oe(e), r = K[t].parents.flatMap(
    (mt) => re(mt, i).split(",")
  );
  if (n.endsWith("]")) {
    const [mt] = n.split("["), la = [`[intAddr="${mt}"]`];
    return te(r, [">"], [t], la).map((da) => da.join("")).join(",");
  }
  let a, o, l, d, c, h, f, g, y, v, S, T, _, R;
  !n.includes(":") && !n.includes("@") ? [a, o, l, d, c, h, f] = n.split(/[ /]/) : n.includes(":") && !n.includes("@") ? [
    g,
    y,
    v,
    S,
    T,
    _,
    a,
    o,
    l,
    d,
    c,
    h,
    f
  ] = n.split(/[ /:]/) : !n.includes(":") && n.includes("@") ? [a, o, l, d, c, h, f, R] = n.split(/[ /@]/) : [
    g,
    y,
    v,
    S,
    T,
    _,
    a,
    o,
    l,
    d,
    c,
    h,
    f,
    R
  ] = n.split(/[ /:@]/);
  const [
    G,
    ve,
    Bt,
    Ht,
    qt,
    ut,
    Jr,
    ea,
    ta,
    ia,
    na,
    ra,
    aa,
    oa
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])"],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    l ? [`[prefix="${l}"]`] : [":not([prefix])", '[prefix=""]'],
    d ? [`[lnClass="${d}"]`] : [":not([lnClass])"],
    c ? [`[lnInst="${c}"]`] : [":not([lnInst])", '[lnInst=""]'],
    h ? [`[doName="${h}"]`] : [":not([doName])"],
    f ? [`[daName="${f}"]`] : [":not([daName])", '[daName=""]'],
    g ? [`[serviceType="${g}"]`] : [":not([serviceType])", '[serviceType=""]'],
    y ? [`[srcCBName="${y}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    v ? [`[srcLDInst="${v}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    S ? [`[srcPrefix="${S}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    T ? [`[srcLNClass="${T}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    _ ? [`[srcLNInst="${_}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    R ? [`[intAddr="${R}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return te(
    r,
    [">"],
    [t],
    G,
    ve,
    Bt,
    Ht,
    qt,
    ut,
    Jr,
    ea,
    ta,
    ia,
    na,
    ra,
    aa,
    oa
  ).map((mt) => mt.join("")).join(",");
}
function Sl(t) {
  const [e, i, n] = ["prefix", "lnClass", "inst"].map(
    (r) => t.getAttribute(r)
  );
  return `${z(t.parentElement)}>${e ?? ""} ${i} ${n}`;
}
function El(t, e) {
  const [i, n] = oe(e), r = K[t].parents.flatMap(
    (f) => re(f, i).split(",")
  ), [a, o, l] = n.split(" ");
  if (!o) return j;
  const [d, c, h] = [
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    [`[inst="${l}"]`]
  ];
  return te(
    r,
    [">"],
    [t],
    d,
    c,
    h
  ).map((f) => f.join("")).join(",");
}
function Il(t) {
  const [e, i, n, r, a, o] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((l) => t.getAttribute(l));
  return `${z(t.parentElement)}>${i} ${e || ""} ${n}/${r ?? ""} ${a} ${o}`;
}
function Cl(t, e) {
  const [i, n] = oe(e), r = K[t].parents.flatMap(
    (_) => re(_, i).split(",")
  ), [a, o, l, d, c, h] = n.split(/[ /]/), [
    f,
    g,
    y,
    v,
    S,
    T
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])", '[iedName=""]'],
    o ? [`[apRef="${o}"]`] : [":not([apRef])", '[apRef=""]'],
    l ? [`[ldInst="${l}"]`] : [":not([ldInst])", '[ldInst=""]'],
    d ? [`[prefix="${d}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    h ? [`[lnInst="${h}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return te(
    r,
    [">"],
    [t],
    f,
    g,
    y,
    v,
    S,
    T
  ).map((_) => _.join("")).join(",");
}
function xn(t) {
  const [e, i] = ["name", "ix"].map((n) => t.getAttribute(n));
  return `${z(t.parentElement)}>${e}${i ? "[" + i + "]" : ""}`;
}
function _i(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [n, r] = oe(e), [a, o, l, d] = r.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!o) return j;
  if (i === 0) return `${t}[name="${o}"]`;
  const c = K[t].parents.flatMap(
    (g) => g === "SDI" ? _i(g, n, i - 1).split(",") : re(g, n).split(",")
  ).filter((g) => !g.startsWith(j));
  if (c.length === 0) return j;
  const [h, f] = [
    [`[name="${o}"]`],
    d ? [`[ix="${d}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return te(
    c,
    [">"],
    [t],
    h,
    f
  ).map((g) => g.join("")).join(",");
}
function kl(t) {
  if (!t.parentElement) return NaN;
  const e = t.getAttribute("sGroup"), i = Array.from(t.parentElement.children).filter((n) => n.getAttribute("sGroup") === e).findIndex((n) => n.isSameNode(t));
  return `${z(t.parentElement)}>${e ? e + "." : ""} ${i}`;
}
function Tl(t, e) {
  const [i, n] = oe(e), [r, a] = n.split(" "), o = parseFloat(a), l = K[t].parents.flatMap(
    (h) => re(h, i).split(",")
  ), [d, c] = [
    r ? [`[sGroup="${r}"]`] : [""],
    o ? [`:nth-child(${o + 1})`] : [""]
  ];
  return te(
    l,
    [">"],
    [t],
    d,
    c
  ).map((h) => h.join("")).join(",");
}
function Nl(t) {
  const [e, i] = ["iedName", "apName"].map(
    (n) => t.getAttribute(n)
  );
  return `${e} ${i}`;
}
function Dl(t, e) {
  const [i, n] = e.split(" ");
  return !i || !n ? j : `${t}[iedName="${i}"][apName="${n}"]`;
}
function yn(t) {
  const [e, i] = ["ldInst", "cbName"].map(
    (n) => t.getAttribute(n)
  );
  return `${e} ${i}`;
}
function vn(t, e) {
  const [i, n] = e.split(" ");
  return !i || !n ? j : `${t}[ldInst="${i}"][cbName="${n}"]`;
}
function Ll(t) {
  if (!t.parentElement) return NaN;
  if (!t.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = t.getAttribute("type");
  return t.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${z(t.parentElement)}>${e}`;
}
function zl(t, e) {
  const [i, n] = oe(e), [r, a] = [
    K[t].parents.flatMap(
      (o) => re(o, i).split(",")
    ),
    n ? [`[type="${n}"]`] : [""]
  ];
  return te(r, [">"], [t], a).map((o) => o.join("")).join(",");
}
function Rl(t) {
  if (!t.parentElement) return NaN;
  const e = t.parentElement, i = t.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${z(t.parentElement)}>${i}`;
  const n = Array.from(t.parentElement.children).filter((r) => r.getAttribute("type") === i).findIndex((r) => r.isSameNode(t));
  return `${z(t.parentElement)}>${i} [${n}]`;
}
function $l(t, e) {
  const [i, n] = oe(e), [r] = n.split(" "), a = n && n.match(/\[([0-9]+)\]/) && n.match(/\[([0-9]+)\]/)[1] ? parseFloat(n.match(/\[([0-9]+)\]/)[1]) : NaN, [o, l, d] = [
    K[t].parents.flatMap(
      (c) => re(c, i).split(",")
    ),
    [`[type="${r}"]`],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return te(
    o,
    [">"],
    [t],
    l,
    d
  ).map((c) => c.join("")).join(",");
}
function Ol(t) {
  return `${z(t.parentElement)}>${t.getAttribute("ord")}`;
}
function Pl(t, e) {
  const [i, n] = oe(e);
  return `${re("EnumType", i)}>${t}[ord="${n}"]`;
}
function Fl(t) {
  return `${z(t.parentElement)}>${t.getAttribute("type") || "8-MMS"}	${t.textContent}`;
}
function Vl(t, e) {
  const [i, n] = oe(e), [r, a] = n.split("	"), [o] = [
    K[t].parents.flatMap(
      (l) => re(l, i).split(",")
    )
  ];
  return te(
    o,
    [">"],
    [t],
    [`[type="${r}"]`],
    [">"],
    [a]
  ).map((l) => l.join("")).join(",");
}
function Ml() {
  return "";
}
function Bl() {
  return ":root";
}
function L(t) {
  return t.parentElement.tagName === "SCL" ? t.getAttribute("name") : `${z(t.parentElement)}>${t.getAttribute("name")}`;
}
function N(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [n, r] = oe(e);
  if (!r) return j;
  if (i === 0) return `${t}[name="${r}"]`;
  const a = K[t].parents;
  if (!a) return j;
  const o = a.flatMap(
    (l) => K[l].selector === K.Substation.selector ? N(l, n, i - 1).split(",") : re(l, n).split(",")
  ).filter((l) => !l.startsWith(j));
  return o.length === 0 ? j : te(o, [">"], [t], [`[name="${r}"]`]).map((l) => l.join("")).join(",");
}
function w(t) {
  return z(t.parentElement).toString();
}
function A(t, e) {
  const i = K[t].parents;
  if (!i) return j;
  const n = i.flatMap((r) => re(r, e).split(",")).filter((r) => !r.startsWith(j));
  return n.length === 0 ? j : te(n, [">"], [t]).map((r) => r.join("")).join(",");
}
function Nt(t) {
  return `#${t.id}`;
}
function Dt(t, e) {
  const i = e.replace(/^#/, "");
  return i ? `${t}[id="${i}"]` : j;
}
const dr = [
  "TransformerWinding",
  "ConductingEquipment"
], sr = [
  "GeneralEquipment",
  "PowerTransformer",
  ...dr
], wi = ["Substation", "VoltageLevel", "Bay"], cr = ["Process", "Line"], ur = ["EqSubFunction", "EqFunction"], Hl = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...sr,
  ...wi,
  ...cr,
  ...ur
], mr = ["ConnectivityNode", ...Hl], ql = ["GOOSESecurity", "SMVSecurity"], Gl = ["SubNetwork", ...ql, ...mr], Ul = ["BDA", "DA"], Wl = ["SampledValueControl", "GSEControl"], jl = ["LogControl", "ReportControl"], Kl = [...Wl, ...jl], Xl = ["GSE", "SMV"], Yl = [
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
  ...Kl,
  ...Xl,
  ...Ul
], Qe = ["LN0", "LN"], Zl = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Ql = ["Subject", "IssuerName"], Jl = ["MinTime", "MaxTime"], ed = ["LNodeType", "DOType", "DAType", "EnumType"], td = [
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
], id = ["DynDataSet", "ConfDataSet"], nd = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...id
], rd = ["ConfLogControl", "ConfSigRef"], ad = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], od = ["SCL", ...Gl, ...Yl, ...ed], pr = [
  ...od,
  ...Zl,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Ql,
  ...Jl,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...Qe,
  ...td,
  "DynAssociation",
  "SettingGroups",
  ...nd,
  ...rd,
  ...ad,
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
], ld = new Set(pr);
function Mi(t) {
  return ld.has(t);
}
const Mt = ["Text", "Private"], Me = [...Mt], W = [...Mt], Lt = [...Mt], _n = [...W, "Val"], hr = [...Me, "LNode"], He = [...hr], Ai = [...He], Zt = [
  ...He,
  "PowerTransformer",
  "GeneralEquipment"
], wn = [
  ...Ai,
  "Terminal"
], An = [...W, "Address"], fr = [...Me], Sn = [...fr, "IEDName"], En = [
  ...W,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], In = [
  ...He,
  "GeneralEquipment",
  "Function"
], Cn = [...fr, "TrgOps"], kn = [
  ...He,
  "GeneralEquipment",
  "EqSubFunction"
], K = {
  AccessControl: {
    identity: w,
    selector: A,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: L,
    selector: N,
    parents: ["IED"],
    children: [
      ...Me,
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
    selector: A,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: hl,
    selector: fl,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: w,
    selector: A,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: L,
    selector: N,
    parents: ["DAType"],
    children: [..._n]
  },
  BitRate: {
    identity: w,
    selector: A,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: L,
    selector: N,
    parents: ["VoltageLevel"],
    children: [
      ...Zt,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: Il,
    selector: Cl,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: w,
    selector: A,
    parents: ["SCL"],
    children: [...W, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: L,
    selector: N,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...wn,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: w,
    selector: A,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: Nl,
    selector: Dl,
    parents: ["SubNetwork"],
    children: [...W, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: L,
    selector: N,
    parents: ["Bay", "Line"],
    children: [...hr]
  },
  DA: {
    identity: L,
    selector: N,
    parents: ["DOType"],
    children: [..._n]
  },
  DAI: {
    identity: xn,
    selector: _i,
    parents: ["DOI", "SDI"],
    children: [...W, "Val"]
  },
  DAType: {
    identity: Nt,
    selector: Dt,
    parents: ["DataTypeTemplates"],
    children: [...Lt, "BDA", "ProtNs"]
  },
  DO: {
    identity: L,
    selector: N,
    parents: ["LNodeType"],
    children: [...W]
  },
  DOI: {
    identity: L,
    selector: N,
    parents: [...Qe],
    children: [...W, "SDI", "DAI"]
  },
  DOType: {
    identity: Nt,
    selector: Dt,
    parents: ["DataTypeTemplates"],
    children: [...Lt, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: L,
    selector: N,
    parents: [...Qe],
    children: [...Me, "FCDA"]
  },
  DataSetDirectory: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: w,
    selector: A,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: Nt,
    selector: Dt,
    parents: ["DataTypeTemplates"],
    children: [...Lt, "EnumVal"]
  },
  EnumVal: {
    identity: Ol,
    selector: Pl,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: L,
    selector: N,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...kn]
  },
  EqSubFunction: {
    identity: L,
    selector: N,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...kn]
  },
  ExtRef: {
    identity: wl,
    selector: Al,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: vl,
    selector: _l,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: L,
    selector: N,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...He,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: L,
    selector: N,
    parents: [
      "SubFunction",
      "Function",
      ...cr,
      ...ur,
      ...wi
    ],
    children: [...Ai, "EqFunction"]
  },
  GetCBValues: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: L,
    selector: N,
    parents: ["AccessPoint"],
    children: [...Me, "Subject", "IssuerName"]
  },
  GSE: {
    identity: yn,
    selector: vn,
    parents: ["ConnectedAP"],
    children: [...An, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: L,
    selector: N,
    parents: ["LN0"],
    children: [...Sn, "Protocol"]
  },
  GSESettings: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: w,
    selector: A,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: w,
    selector: A,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: dl,
    selector: sl,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: L,
    selector: N,
    parents: ["SCL"],
    children: [...W, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: xl,
    selector: yl,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: w,
    selector: A,
    parents: [...Qe],
    children: [...W, "ExtRef"]
  },
  IssuerName: {
    identity: w,
    selector: A,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: ml,
    selector: pl,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: bl,
    selector: gl,
    parents: ["Server"],
    children: [...W, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: Sl,
    selector: El,
    parents: ["AccessPoint", "LDevice"],
    children: [...En]
  },
  LN0: {
    identity: w,
    selector: A,
    parents: ["LDevice"],
    children: [
      ...En,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: cl,
    selector: ul,
    parents: [...mr],
    children: [...W]
  },
  LNodeType: {
    identity: Nt,
    selector: Dt,
    parents: ["DataTypeTemplates"],
    children: [...Lt, "DO"]
  },
  Line: {
    identity: L,
    selector: N,
    parents: ["Process", "SCL"],
    children: [
      ...In,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: L,
    selector: N,
    parents: [...Qe],
    children: [...W]
  },
  LogControl: {
    identity: L,
    selector: N,
    parents: [...Qe],
    children: [...Cn]
  },
  LogSettings: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: w,
    selector: A,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: w,
    selector: A,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: w,
    selector: A,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: bn,
    selector: gn,
    parents: ["TransformerWinding"],
    children: [...W]
  },
  OptFields: {
    identity: w,
    selector: A,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: Rl,
    selector: $l,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: Ll,
    selector: zl,
    parents: ["ConnectedAP"],
    children: [...W, "P"]
  },
  PowerTransformer: {
    identity: L,
    selector: N,
    parents: [...wi],
    children: [
      ...Ai,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => j,
    parents: [],
    children: []
  },
  Process: {
    identity: L,
    selector: N,
    parents: ["Process", "SCL"],
    children: [
      ...In,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: Fl,
    selector: Vl,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: w,
    selector: A,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: L,
    selector: N,
    parents: [...Qe],
    children: [...Cn, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: w,
    selector: A,
    parents: ["ReportControl"],
    children: [...W, "ClientLN"]
  },
  SamplesPerSec: {
    identity: w,
    selector: A,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: L,
    selector: N,
    parents: ["LN0"],
    children: [...Sn, "SmvOpts"]
  },
  SecPerSamples: {
    identity: w,
    selector: A,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: Ml,
    selector: Bl,
    parents: [],
    children: [
      ...Mt,
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
    identity: xn,
    selector: _i,
    parents: ["DOI", "SDI"],
    children: [...W, "SDI", "DAI"]
  },
  SDO: {
    identity: L,
    selector: N,
    parents: ["DOType"],
    children: [...Me]
  },
  Server: {
    identity: w,
    selector: A,
    parents: ["AccessPoint"],
    children: [
      ...W,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: w,
    selector: A,
    parents: ["AccessPoint"],
    children: [...W]
  },
  Services: {
    identity: w,
    selector: A,
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
    selector: A,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: w,
    selector: A,
    parents: ["LN0"],
    children: [...W]
  },
  SettingGroups: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: w,
    selector: A,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: w,
    selector: A,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: yn,
    selector: vn,
    parents: ["ConnectedAP"],
    children: [...An]
  },
  SmvOpts: {
    identity: w,
    selector: A,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: L,
    selector: N,
    parents: ["AccessPoint"],
    children: [...Me, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: L,
    selector: N,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...dr
    ],
    children: [...He, "EqFunction"]
  },
  SubFunction: {
    identity: L,
    selector: N,
    parents: ["SubFunction", "Function"],
    children: [
      ...He,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: L,
    selector: N,
    parents: ["Communication"],
    children: [...Me, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: w,
    selector: A,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: L,
    selector: N,
    parents: ["SCL"],
    children: [...Zt, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: L,
    selector: N,
    parents: ["TransformerWinding"],
    children: [...He, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: bn,
    selector: gn,
    parents: [...sr],
    children: [...W]
  },
  Text: {
    identity: w,
    selector: A,
    parents: pr.filter((t) => t !== "Text" && t !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: w,
    selector: A,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: L,
    selector: N,
    parents: ["PowerTransformer"],
    children: [
      ...wn,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: w,
    selector: A,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: kl,
    selector: Tl,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: w,
    selector: A,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: w,
    selector: A,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: L,
    selector: N,
    parents: ["Substation"],
    children: [...Zt, "Voltage", "Bay", "Function"]
  }
};
function re(t, e) {
  return typeof e != "string" ? j : Mi(t) ? K[t].selector(t, e) : t;
}
function Le(t, e, i) {
  if (typeof i != "string" || !Mi(e)) return null;
  const n = t.querySelector(K[e].selector(e, i));
  return n === null || ge(n) ? n : Array.from(
    t.querySelectorAll(K[e].selector(e, i))
  ).find(ge) ?? null;
}
function z(t) {
  if (t === null) return NaN;
  if (t.closest("Private")) return NaN;
  const e = t.tagName;
  return Mi(e) ? K[e].identity(t) : NaN;
}
const _t = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  decimal: "[+\\-]?[0-9]+(([.][0-9]*)?|([.][0-9]+))",
  unsigned: "[+]?[0-9]+(([.][0-9]*)?|([.][0-9]+))"
};
function dd(t, e) {
  return typeof t == "string" && typeof e == "string" ? t.localeCompare(e) : typeof t == "object" && typeof e == "string" ? (t.getAttribute("name") ?? "").localeCompare(e) : typeof t == "string" && typeof e == "object" ? t.localeCompare(e.getAttribute("name")) : typeof t == "object" && typeof e == "object" ? (t.getAttribute("name") ?? "").localeCompare(
    e.getAttribute("name") ?? ""
  ) : 0;
}
function te(...t) {
  return t.reduce(
    (e, i) => e.flatMap((n) => i.map((r) => [n, r].flat())),
    [[]]
  );
}
function br(t, e = /* @__PURE__ */ new WeakSet()) {
  if (e.has(t)) return 1 / 0;
  switch (t?.constructor) {
    case Object:
    case Array:
      return e.add(t), 1 + Math.max(
        -1,
        ...Object.values(t).map((i) => br(i, e))
      );
    default:
      return 0;
  }
}
function ge(t) {
  return !t.closest("Private");
}
const sd = 99, cd = Array(sd).fill(1).map((t, e) => `${e + 1}`);
function ud(t) {
  const e = /* @__PURE__ */ new Map();
  return (i) => {
    if (!e.has(i)) {
      const n = new Set(
        ee(t, "LNode").filter((r) => r.getAttribute("lnClass") === i).map((r) => r.getAttribute("lnInst"))
      );
      e.set(i, () => {
        const r = cd.find((a) => !n.has(a));
        return r && n.add(r), r;
      });
    }
    return e.get(i)();
  };
}
function md(t, e) {
  const i = {};
  return Array.from(t.attributes).forEach((n) => {
    i[n.name] = n.value;
  }), { element: t, oldAttributes: i, newAttributes: e };
}
function Bi(t, e = "user", i) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { action: t, initiator: e, ...i?.detail }
  });
}
const gr = {
  IED: [
    {
      attributeName: "iedName",
      filter: Ze("Association")
    },
    {
      attributeName: "iedName",
      filter: Ze("ClientLN")
    },
    {
      attributeName: "iedName",
      filter: Ze("ConnectedAP")
    },
    {
      attributeName: "iedName",
      filter: Ze("ExtRef")
    },
    {
      attributeName: "iedName",
      filter: Ze("KDC")
    },
    {
      attributeName: "iedName",
      filter: Ze("LNode")
    },
    {
      attributeName: null,
      filter: Qt("GSEControl > IEDName")
    },
    {
      attributeName: null,
      filter: Qt("SampledValueControl > IEDName")
    },
    {
      attributeName: null,
      filter: Qt("LN > DOI > DAI > Val")
    }
  ],
  Substation: [
    {
      attributeName: "substationName",
      filter: Ze("Terminal")
    }
  ],
  VoltageLevel: [
    {
      attributeName: "voltageLevelName",
      filter: Tn("Terminal", {
        Substation: "substationName"
      })
    }
  ],
  Bay: [
    {
      attributeName: "bayName",
      filter: Tn("Terminal", {
        Substation: "substationName",
        VoltageLevel: "voltageLevelName"
      })
    }
  ]
};
function Ze(t) {
  return function(i, n, r) {
    return `${t}[${n}="${r}"]`;
  };
}
function Qt(t) {
  return function() {
    return `${t}`;
  };
}
function Tn(t, e) {
  return function(n, r, a) {
    return `${t}${Object.entries(e).map(([o, l]) => {
      const d = n.closest(o);
      if (d && d.hasAttribute("name")) {
        const c = d.getAttribute("name");
        return `[${l}="${c}"]`;
      }
      return null;
    }).join("")}[${r}="${a}"]`;
  };
}
function pd(t, e, i) {
  const n = t.cloneNode(!1);
  return n.setAttribute(e, i), n;
}
function xr(t, e) {
  const i = t.cloneNode(!1);
  return i.textContent = e, i;
}
function Hi(t, e, i) {
  if (e === null || e === i)
    return [];
  const n = gr[t.tagName];
  if (n === void 0)
    return [];
  const r = [];
  return n.forEach((a) => {
    const o = a.filter(t, a.attributeName, e);
    a.attributeName ? Array.from(t.ownerDocument.querySelectorAll(`${o}`)).filter(ge).forEach((l) => {
      const d = pd(
        l,
        a.attributeName,
        i
      );
      r.push({ old: { element: l }, new: { element: d } });
    }) : Array.from(t.ownerDocument.querySelectorAll(`${o}`)).filter((l) => l.textContent === e).filter(ge).forEach((l) => {
      const d = xr(l, i);
      r.push({ old: { element: l }, new: { element: d } });
    });
  }), t.tagName === "IED" && r.push(...hd(t, e, i)), r;
}
function hd(t, e, i) {
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
    ), d = l?.getAttribute("srcLDInst") + "/" + l?.getAttribute("srcLNClass") + "." + l?.getAttribute("srcCBName");
    for (let c of o)
      if (e + d === c.textContent.trim()) {
        const h = xr(
          c,
          i + d
        );
        n.push({
          old: { element: c },
          new: { element: h }
        });
        break;
      }
  }), n;
}
function yr(t) {
  const e = ll(t) ?? null;
  if (e === null)
    return [];
  const i = gr[t.tagName];
  if (i === void 0)
    return [];
  const n = [];
  return i.forEach((r) => {
    const a = r.filter(t, r.attributeName, e);
    r.attributeName ? Array.from(t.ownerDocument.querySelectorAll(`${a}`)).filter(ge).forEach((o) => {
      n.push({ old: { parent: o.parentElement, element: o } });
    }) : Array.from(t.ownerDocument.querySelectorAll(`${a}`)).filter((o) => o.textContent === e).filter(ge).forEach((o) => {
      o.parentElement && n.push({
        old: {
          parent: o.parentElement.parentElement,
          element: o.parentElement
        }
      });
    });
  }), n;
}
function vr(t) {
  return (e) => {
    const i = x(e.find((a) => a.label === "name")), n = x(e.find((a) => a.label === "desc"));
    if (i === t.getAttribute("name") && n === t.getAttribute("desc"))
      return [];
    const r = F(t, { name: i, desc: n });
    return [{ old: { element: t }, new: { element: r } }];
  };
}
function fd(t, e) {
  return (i) => {
    const n = x(i.find((d) => d.label === "name")), r = t.getAttribute("name"), a = x(i.find((d) => d.label === "desc"));
    if (n === r && a === t.getAttribute("desc"))
      return [];
    const o = F(t, { name: n, desc: a }), l = {
      actions: [],
      title: s(e, { name: n })
    };
    return l.actions.push({
      old: { element: t },
      new: { element: o }
    }), l.actions.push(...Hi(t, r, n)), l.actions.length ? [l] : [];
  };
}
function _r(t, e) {
  return (i) => {
    const n = {};
    if (bd(n, t, i), Object.keys(n).length == 0)
      return [];
    gd(t, n);
    const r = x(i.find((o) => o.label === "name")), a = {
      actions: [],
      title: s(e, { name: r })
    };
    return a.actions.push(md(t, n)), a.actions.push(
      ...Hi(t, t.getAttribute("name"), r)
    ), a.actions.length ? [a] : [];
  };
}
function bd(t, e, i) {
  const n = x(i.find((a) => a.label === "name")), r = x(i.find((a) => a.label === "desc"));
  n !== e.getAttribute("name") && (t.name = n), r !== e.getAttribute("desc") && (t.desc = r);
}
function gd(t, e) {
  const i = Object.keys(e);
  return Array.from(t.attributes).filter((n) => !i.includes(n.name)).forEach((n) => {
    e[n.name] = n.value;
  }), e;
}
function wr(t, e) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${s("bay.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${s("bay.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function xd(t) {
  return (e) => {
    const i = x(e.find((o) => o.label === "name")), n = x(e.find((o) => o.label === "desc")), r = D(t.ownerDocument, "Bay", {
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
function yd(t) {
  return [
    {
      title: s("bay.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: s("add"),
        action: xd(t)
      },
      content: wr("", "")
    }
  ];
}
function vd(t) {
  return [
    {
      title: s("bay.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: s("save"),
        action: fd(
          t,
          "bay.action.updateBay"
        )
      },
      content: wr(
        t.getAttribute("name"),
        t.getAttribute("desc")
      )
    }
  ];
}
const Si = {
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
function _d(t) {
  if (!t) return null;
  const [e, i, n, r, a] = [
    "lnInst",
    "lnClass",
    "iedName",
    "ldInst",
    "prefix"
  ].map((h) => t?.getAttribute(h)), o = [`IED[name="${n}"]`, "IED"], l = ["AccessPoint > Server"], d = [
    `LDevice[inst="${r}"] > LN[inst="${e}"][lnClass="${i}"]`
  ], c = a && a !== "" ? [`[prefix="${a}"]`] : ['[prefix=""]', ":not(prefix)"];
  return t.ownerDocument.querySelector(
    te(
      o,
      [" > "],
      l,
      [" > "],
      d,
      c
    ).map((h) => h.join("")).join(",")
  );
}
function Ar(t) {
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
function wd(t) {
  const e = t.querySelector(
    'DOI[name="SwTyp"] > DAI[name="stVal"]'
  );
  return e ? e.querySelector("Val")?.innerHTML.trim() : Ar(t);
}
function Ad(t) {
  return Array.from(t.querySelectorAll("Terminal")).some(
    (e) => e.getAttribute("cNodeName") === "grounded"
  );
}
function Sd(t) {
  const e = t.querySelector('LNode[lnClass="XSWI"]'), i = _d(e);
  let n;
  return i ? n = wd(i) : e && (n = Ar(e)), n ? ["Earthing Switch", "High Speed Earthing Switch"].includes(n) : !1;
}
function Ed(t) {
  return t.getAttribute("type") === "DIS" && (Ad(t) || Sd(t)) ? "ERS" : t.getAttribute("type") ?? "";
}
function Id(t) {
  return Si[Ed(t)] ?? s("conductingequipment.unknownType");
}
function Cd(t, e) {
  return t === "create" ? u`<mwc-select
        style="--mdc-menu-max-height: 196px;"
        required
        label="type"
        helper="${s("conductingequipment.wizard.typeHelper")}"
        validationMessage="${s("textfield.required")}"
      >
        ${Object.keys(Si).map(
    (i) => u`<mwc-list-item value="${i}">${Si[i]}</mwc-list-item>`
  )}
      </mwc-select>` : u`<mwc-select
        label="type"
        helper="${s("conductingequipment.wizard.typeHelper")}"
        validationMessage="${s("textfield.required")}"
        disabled
      >
        <mwc-list-item selected value="0">${e}</mwc-list-item>
      </mwc-select>`;
}
function Sr(t, e, i, n, r) {
  return [
    Cd(i, n),
    u`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${s("conductingequipment.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${r}
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${s("conductingequipment.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function kd(t) {
  return (e) => {
    const i = x(e.find((S) => S.label === "name")), n = x(e.find((S) => S.label === "desc")), r = x(e.find((S) => S.label === "type")), a = r === "ERS" ? "DIS" : r, o = D(t.ownerDocument, "ConductingEquipment", {
      name: i,
      type: a,
      desc: n
    });
    if (r !== "ERS") return [{ new: { parent: t, element: o } }];
    const l = t.closest("VoltageLevel")?.querySelector('ConnectivityNode[name="grounded"]'), d = l ? l.closest("Substation")?.getAttribute("name") ?? null : t.closest("Substation")?.getAttribute("name") ?? null, c = l ? l.closest("VoltageLevel")?.getAttribute("name") ?? null : t.closest("VoltageLevel")?.getAttribute("name") ?? null, h = l ? l.closest("Bay")?.getAttribute("name") ?? null : t.closest("Bay")?.getAttribute("name") ?? null, f = h && c && d ? d + "/" + c + "/" + h + "/grounded" : null;
    o.appendChild(
      D(t.ownerDocument, "Terminal", {
        name: "T1",
        cNodeName: "grounded",
        substationName: d,
        voltageLevelName: c,
        bayName: h,
        connectivityNode: f
      })
    );
    const g = {
      new: {
        parent: t,
        element: o
      }
    };
    if (l) return [g];
    const y = D(
      t.ownerDocument,
      "ConnectivityNode",
      {
        name: "grounded",
        pathName: f
      }
    );
    return [g, {
      new: {
        parent: t,
        element: y
      }
    }];
  };
}
function Er(t, e) {
  return Array.from(t.querySelectorAll("ConductingEquipment")).filter(ge).map((i) => i.getAttribute("name") ?? "").filter((i) => e && i !== e);
}
function Td(t) {
  const e = Er(t);
  return [
    {
      title: s("conductingequipment.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: s("add"),
        action: kd(t)
      },
      content: Sr(
        "",
        "",
        "create",
        "",
        e
      )
    }
  ];
}
function Nd(t) {
  const e = Er(
    t.parentNode,
    t.getAttribute("name")
  );
  return [
    {
      title: s("conductingequipment.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: s("save"),
        action: vr(t)
      },
      content: Sr(
        t.getAttribute("name"),
        t.getAttribute("desc"),
        "edit",
        Id(t),
        e
      )
    }
  ];
}
function Dd(t, e, i) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${s("connectivitynode.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${i}
      readonly
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="pathName"
      .maybeValue=${e}
      helper="${s("connectivitynode.wizard.pathNameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function Ld(t) {
  const e = Array.from(
    t.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(ge).map((i) => i.getAttribute("name") ?? "").filter((i) => i !== t.getAttribute("name"));
  return [
    {
      title: s("connectivitynode.wizard.title.edit"),
      element: t,
      content: Dd(
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
const Nn = /* @__PURE__ */ new WeakMap(), Dn = 2147483647, zd = dt((...t) => (e) => {
  let i = Nn.get(e);
  i === void 0 && (i = {
    lastRenderedIndex: Dn,
    values: []
  }, Nn.set(e, i));
  const n = i.values;
  let r = n.length;
  i.values = t;
  for (let a = 0; a < t.length && !(a > i.lastRenderedIndex); a++) {
    const o = t[a];
    if (Ft(o) || typeof o.then != "function") {
      e.setValue(o), i.lastRenderedIndex = a;
      break;
    }
    a < r && o === n[a] || (i.lastRenderedIndex = Dn, r = 0, Promise.resolve(o).then((l) => {
      const d = i.values.indexOf(o);
      d > -1 && d < i.lastRenderedIndex && (i.lastRenderedIndex = d, e.setValue(l), e.commit());
    }));
  }
});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Et extends ne {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), n = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : u``, r = this.hasMeta && this.left ? this.renderMeta() : u``, a = this.renderRipple();
    return u`
      ${a}
      ${n}
      ${this.left ? "" : i}
      <span class=${ae(e)}>
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
  C("slot")
], Et.prototype, "slotElement", void 0);
m([
  C("mwc-checkbox")
], Et.prototype, "checkboxElement", void 0);
m([
  b({ type: Boolean })
], Et.prototype, "left", void 0);
m([
  b({ type: String, reflect: !0 })
], Et.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Rd = ie`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let lt = class extends Et {
};
lt.styles = [tr, Rd];
lt = m([
  X("mwc-check-list-item")
], lt);
var $d = Object.defineProperty, Od = Object.getOwnPropertyDescriptor, rt = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Od(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && $d(e, i, r), r;
};
function Ei(t) {
  return !t.closest("filtered-list") || !t.parentElement || t.parentElement instanceof Ee ? t : Ei(t.parentElement);
}
function Pd(t, e) {
  const i = t.innerText + `
`, n = Array.from(t.children).map((l) => l.innerText).join(`
`), r = t.value, a = (i + n + r).toUpperCase(), o = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  o.length === 1 && o[0] === "" || o.every((l) => new RegExp(
    `*${l}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(a)) ? Ei(t).classList.remove("hidden") : Ei(t).classList.add("hidden");
}
let Ee = class extends he {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((t) => t instanceof lt);
  }
  get isAllSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof lt).every((t) => t.selected);
  }
  get isSomeSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof lt).some((t) => t.selected);
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
      (t) => Pd(t, this.searchField.value)
    );
  }
  onListItemConnected(t) {
    super.onListItemConnected(t), this.requestUpdate();
  }
  update(t) {
    super.update(t), this.onFilterInput();
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
        <abbr title="${this.searchFieldLabel ?? s("filter")}"
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
Ee.styles = ie`
    ${Yn($t.styles)}

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
rt([
  b({ type: String })
], Ee.prototype, "searchFieldLabel", 2);
rt([
  b({ type: Boolean })
], Ee.prototype, "disableCheckAll", 2);
rt([
  E()
], Ee.prototype, "existCheckListItem", 1);
rt([
  E()
], Ee.prototype, "isAllSelected", 1);
rt([
  E()
], Ee.prototype, "isSomeSelected", 1);
rt([
  C("mwc-textfield")
], Ee.prototype, "searchField", 2);
Ee = rt([
  X("filtered-list")
], Ee);
var Fd = Object.defineProperty, Vd = Object.getOwnPropertyDescriptor, Fe = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Vd(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Fd(e, i, r), r;
};
const Md = u`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${s("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let we = class extends Ie {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (t) => ({
      path: t,
      header: u`<h2>${"/" + t.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return br(this.selection);
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
    return u`<filtered-list
      @selected=${(i) => this.select(i, t)}
      searchFieldLabel="${this.getTitle(t)}"
    >
      ${e.map(
      (i) => u`<mwc-list-item
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
        u`${O(r)} ${this.renderDirectory(o, a)}`
      );
    return n.length === 0 ? u`` : u`<div class="column">${n}</div>`;
  }
  render() {
    const t = new Array(this.depth).fill(0).map((e, i) => this.renderColumn(i));
    return this.loaded = Promise.allSettled(t).then(), u`<div class="pane">
      ${t.map((e) => zd(e, Md))}
    </div>`;
  }
};
we.styles = ie`
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
Fe([
  b({ type: Object })
], we.prototype, "selection", 2);
Fe([
  b({ type: Boolean })
], we.prototype, "multi", 2);
Fe([
  b({ type: Number })
], we.prototype, "depth", 1);
Fe([
  b({ type: Array })
], we.prototype, "paths", 1);
Fe([
  b({ type: Array })
], we.prototype, "path", 1);
Fe([
  b({ attribute: !1 })
], we.prototype, "read", 2);
Fe([
  b({ attribute: !1 })
], we.prototype, "loaded", 2);
Fe([
  C("div")
], we.prototype, "container", 2);
we = Fe([
  X("finder-list")
], we);
function Bd(t) {
  return t.startsWith("IED:") ? t.replace(/^.*:/, "").trim() : t.startsWith("LN0:") ? "LLN0" : t.replace(/^.*>/, "").trim();
}
function Hd(t, e) {
  return async (i) => {
    const [n, r] = i[i.length - 1]?.split(": ", 2), a = Le(t, n, r);
    return a ? {
      path: i,
      header: void 0,
      entries: e(a).map(
        (o) => `${o.tagName}: ${z(o)}`
      )
    } : { path: i, header: u`<p>${s("error")}</p>`, entries: [] };
  };
}
function Ir(t) {
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
function qd(t) {
  return u`<finder-list
    multi
    .paths=${[["Server: " + z(t)]]}
    .read=${Hd(t.ownerDocument, Ir)}
    .getDisplayString=${Bd}
    .getTitle=${(e) => e[e.length - 1]}
  ></finder-list>`;
}
function Gd(t, e) {
  const [i, n] = e[e.length - 1].split(": "), r = Le(t.ownerDocument, i, n);
  if (!r || Ir(r).length > 0) return;
  const a = e.find((T) => T.startsWith("LN"));
  if (!a) return;
  const [o, l] = a.split(": "), d = Le(t.ownerDocument, o, l);
  if (!d) return;
  const c = d.closest("LDevice")?.getAttribute("inst"), h = d.getAttribute("prefix") ?? "", f = d.getAttribute("lnClass"), g = d.getAttribute("inst") && d.getAttribute("inst") !== "" ? d.getAttribute("inst") : null;
  let y = "", v = "", S = "";
  for (const T of e) {
    const [_, R] = T.split(": ");
    if (!["DO", "DA", "SDO", "BDA"].includes(_)) continue;
    const G = Le(t.ownerDocument, _, R);
    if (!G) return;
    const ve = G.getAttribute("name");
    _ === "DO" && (y = ve), _ === "SDO" && (y = y + "." + ve), _ === "DA" && (v = ve, S = G.getAttribute("fc") ?? ""), _ === "BDA" && (v = v + "." + ve);
  }
  if (!(!c || !f || !y || !v || !S))
    return D(t.ownerDocument, "FCDA", {
      ldInst: c,
      prefix: h,
      lnClass: f,
      lnInst: g,
      doName: y,
      daName: v,
      fc: S
    });
}
function Ud(t) {
  return (e, i) => {
    const r = i.shadowRoot.querySelector("finder-list")?.paths ?? [], a = [];
    for (const o of r) {
      const l = Gd(t, o);
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
function Cr(t) {
  const e = t.closest("Server");
  return [
    {
      title: s("wizard.title.add", { tagName: "FCDA" }),
      primary: {
        label: "add",
        icon: "add",
        action: Ud(t)
      },
      content: [e ? qd(e) : u``]
    }
  ];
}
const ze = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  asciName: "[A-Za-z][0-9,A-Z,a-z_]*",
  abstractDataAttributeName: "((T)|(Test)|(Check)|(SIUnit)|(Oper)|(SBO)|(SBOw)|(Cancel)|[a-z][0-9A-Za-z]*)"
}, qi = {
  cbName: 32,
  abstracDaName: 60
};
function Jt(t, e) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { ...t, ...e?.detail }
  });
}
function Wd(t) {
  return (e, i, n) => {
    const r = n.items.filter((l) => l.selected).map((l) => l.value).map((l) => Le(t.ownerDocument, "LNodeType", l)).filter((l) => l !== null), a = ud(t);
    return r.map((l) => {
      const d = l.getAttribute("lnClass");
      if (!d) return null;
      const c = a(d);
      if (!c) {
        i.dispatchEvent(
          Jt({
            kind: "error",
            title: s("lnode.log.title", { lnClass: d }),
            message: s("lnode.log.nonuniquelninst")
          })
        );
        return;
      }
      const h = ee(t, "LNode").some(
        (v) => v.getAttribute("lnClass") === "LLN0"
      );
      if (d === "LLN0" && h) {
        i.dispatchEvent(
          Jt({
            kind: "error",
            title: s("lnode.log.title", { lnClass: d }),
            message: s("lnode.log.uniqueln0", { lnClass: d })
          })
        );
        return;
      }
      const f = ee(t, "LNode").some(
        (v) => v.getAttribute("lnClass") === "LPHD"
      );
      if (d === "LPHD" && f) {
        i.dispatchEvent(
          Jt({
            kind: "error",
            title: s("lnode.log.title", { lnClass: d }),
            message: s("lnode.log.uniqueln0", { lnClass: d })
          })
        );
        return;
      }
      const g = d === "LLN0" ? "" : c, y = D(t.ownerDocument, "LNode", {
        iedName: "None",
        ldInst: null,
        prefix: null,
        lnClass: d,
        lnInst: g,
        lnType: l.getAttribute("id")
      });
      return { new: { parent: t, element: y } };
    }).filter((l) => l);
  };
}
function jd(t) {
  return (e) => {
    e.dispatchEvent(Oe()), e.dispatchEvent(Oe(Nr(t)));
  };
}
function kr(t) {
  const e = Array.from(
    t.ownerDocument.querySelectorAll("LNodeType")
  );
  return [
    {
      title: s("lnode.wizard.title.selectLNodeTypes"),
      menuActions: [
        {
          icon: "",
          label: s("lnode.wizard.reference"),
          action: jd(t)
        }
      ],
      primary: {
        icon: "save",
        label: s("save"),
        action: Wd(t)
      },
      content: [
        u`<filtered-list multi
          >${e.map((i) => {
          const n = i.getAttribute("lnClass") === "LLN0" && ee(t, "LNode").some(
            (r) => r.getAttribute("lnClass") === "LLN0"
          ) || i.getAttribute("lnClass") === "LPHD" && ee(t, "LNode").some(
            (r) => r.getAttribute("lnClass") === "LPHD"
          );
          return u`<mwc-check-list-item
              twoline
              value="${z(i)}"
              ?disabled=${n}
              ><span>${i.getAttribute("lnClass")}</span
              ><span slot="secondary"
                >${n ? s("lnode.wizard.uniquewarning") : z(i)}</span
              ></mwc-check-list-item
            >`;
        })}</filtered-list
        >`
      ]
    }
  ];
}
const Kd = {
  CBR: ["CSWI", "CILO", "XCBR"],
  DIS: ["CSWI", "CILO", "XSWI"],
  VTR: ["TVTR"],
  CTR: ["TCTR"],
  Bay: ["LLN0"],
  VoltageLevel: ["LLN0"],
  Substation: ["LLN0"]
};
function Tr(t, e) {
  return t.disabled !== e.disabled ? e.disabled ? -1 : 1 : t.preferred !== e.preferred ? t.preferred ? -1 : 1 : t.selected !== e.selected ? t.selected ? -1 : 1 : 0;
}
const Xd = "Client LN";
function Ln(t, e) {
  return Array.from(t.getElementsByTagName("LNode")).filter((i) => !i.closest("Private")).filter((i) => Gi(e, i))[0] ?? null;
}
function Gi(t, e) {
  return (e.getAttribute("iedName") ?? "") === (t.closest("IED")?.getAttribute("name") ?? "") && (e.getAttribute("ldInst") ?? "") === (t.closest("LDevice")?.getAttribute("inst") ?? "") && (e.getAttribute("prefix") ?? "") === (t.getAttribute("prefix") ?? "") && (e.getAttribute("lnClass") ?? "") === (t.getAttribute("lnClass") ?? "") && (e.getAttribute("lnInst") ?? "") === (t.getAttribute("inst") ?? "");
}
function Yd(t, e) {
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
function Zd(t, e) {
  return {
    old: {
      parent: t,
      element: e,
      reference: e.nextElementSibling
    }
  };
}
function Qd(t, e) {
  return t.some((i) => Gi(i, e));
}
function Jd(t, e) {
  return e.some((i) => Gi(t, i));
}
function es(t) {
  return (e, i, n) => {
    const r = n.items.filter((d) => d.selected).map((d) => d.value).map((d) => {
      const c = Le(t.ownerDocument, "LN0", d);
      return c || Le(t.ownerDocument, "LN", d);
    }).filter((d) => d !== null), a = ee(t, "LNode").filter(
      ge
    ), o = a.filter((d) => !Qd(r, d)).map((d) => Zd(t, d)), l = r.filter((d) => !Jd(d, a)).map((d) => Yd(t, d));
    return o.concat(l);
  };
}
function ts(t, e) {
  return t.parentElement?.parentElement?.nextElementSibling?.querySelector(
    e
  ) ?? null;
}
function is(t, e) {
  if (!(t.target instanceof he)) return;
  const i = ts(t.target, "#lnList");
  if (i === null) return;
  const n = e.ownerDocument, o = t.target.selected.flatMap(
    (l) => Array.from(
      n.querySelectorAll(
        `:root > IED[name="${l.value}"] > AccessPoint > LN,:root > IED[name="${l.value}"] > AccessPoint > Server > LDevice > LN,:root > IED[name="${l.value}"] > AccessPoint > Server > LDevice > LN0`
      )
    ).filter((d) => !d.closest("Private"))
  ).filter((l) => l !== null).map((l) => {
    const d = Kd[e.getAttribute("type") ? e.getAttribute("type") ?? "" : e.tagName ?? ""]?.includes(l.getAttribute("lnClass") ?? "") ?? !1, c = Ln(e.ownerDocument, l), h = c?.parentElement === e;
    return {
      selected: h,
      disabled: c !== null && !h,
      prefered: d,
      element: l
    };
  }).sort(Tr).map((l) => u`<mwc-check-list-item
      ?selected=${l.selected}
      ?disabled=${l.disabled}
      value="${z(l.element)}"
      twoline
      ><span
        >${l.element.getAttribute("prefix") ?? ""}${l.element.getAttribute("lnClass")}${l.element.getAttribute(
    "inst"
  ) ?? ""}
        ${l.disabled ? u` <mwc-icon style="--mdc-icon-size: 1em;"
                >account_tree</mwc-icon
              >
              ${ol(Ln(n, l.element))}` : ""}</span
      ><span slot="secondary"
        >${l.element.closest("IED")?.getAttribute("name") ?? ""} |
        ${l.element.closest("LDevice") ? l.element.closest("LDevice")?.getAttribute("inst") : Xd}</span
      ></mwc-check-list-item
    >`);
  Ni(u`${o}`, i);
}
function ns(t) {
  const e = t.ownerDocument;
  return e.querySelectorAll(":root > IED").length > 0 ? u`<filtered-list
      disableCheckAll
      multi
      id="iedList"
      @selected=${(i) => is(i, t)}
      >${Array.from(e.querySelectorAll(":root > IED")).map((i) => i.getAttribute("name")).map((i) => ({
    selected: Array.from(t.children).filter((n) => !n.closest("Private")).filter(
      (n) => n.tagName === "LNode" && n.getAttribute("iedName") === i
    ).length > 0,
    iedName: i
  })).sort(Tr).map(
    (i) => u`<mwc-check-list-item
              value="${i.iedName ?? ""}"
              ?selected=${i.selected}
              >${i.iedName}</mwc-check-list-item
            >`
  )}</filtered-list
    >` : u`<mwc-list-item noninteractive graphic="icon">
      <span>${s("lnode.wizard.placeholder")}</span>
      <mwc-icon slot="graphic">info</mwc-icon>
    </mwc-list-item>`;
}
function rs(t) {
  return (e) => {
    e.dispatchEvent(Oe()), e.dispatchEvent(Oe(kr(t)));
  };
}
function Nr(t) {
  return [
    {
      title: s("lnode.wizard.title.selectIEDs"),
      menuActions: [
        {
          icon: "",
          label: s("lnode.wizard.instance"),
          action: rs(t)
        }
      ],
      content: [ns(t)]
    },
    {
      initial: Array.from(t.children).some(
        (e) => e.tagName === "LNode"
      ),
      title: s("lnode.wizard.title.selectLNs"),
      primary: {
        icon: "save",
        label: s("save"),
        action: es(t)
      },
      content: [u`<filtered-list multi id="lnList"></filtered-list>`]
    }
  ];
}
function as(t) {
  return t.tagName === "Function" || t.tagName === "SubFunction" || t.tagName === "EqFunction" || t.tagName === "EqSubFunction" ? kr(t) : Nr(t);
}
function os(t) {
  const e = t.iedName !== "None";
  return [
    u`<wizard-textfield
      label="iedName"
      .maybeValue=${t.iedName}
      helper="${s("scl.iedName")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="ldInst"
      .maybeValue=${t.ldInst}
      helper="${s("scl.ldInst")}"
      helperPersistent
      nullable
      disabled
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="prefix"
      .maybeValue=${t.prefix}
      helper="${s("scl.prefix")}"
      pattern="${ze.asciName}"
      maxLength="11"
      helperPersistent
      nullable
      ?disabled=${e}
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="lnClass"
      .maybeValue=${t.lnClass}
      helper="${s("scl.lnClass")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="lnInst"
      .maybeValue=${t.lnInst}
      helper="${s("scl.lnInst")}"
      helperPersistent
      type="number"
      min="1"
      max="99"
      .reservedValues=${t.reservedLnInst}
      ?disabled=${e}
    ></wizard-textfield>`
  ];
}
function ls(t) {
  return (e) => {
    const i = {}, n = ["iedName", "ldInst", "prefix", "lnClass", "lnInst"];
    n.forEach((a) => {
      i[a] = x(e.find((o) => o.label === a));
    });
    let r = null;
    if (n.some((a) => i[a] !== t.getAttribute(a))) {
      const a = F(t, i);
      return r = {
        old: { element: t },
        new: { element: a }
      }, [r];
    }
    return [];
  };
}
function ds(t) {
  const [e, i, n, r, a] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((l) => t.getAttribute(l)), o = ee(
    t.parentElement,
    "LNode"
  ).filter(
    (l) => l !== t && l.getAttribute("lnClass") === t.getAttribute("lnClass")
  ).map((l) => l.getAttribute("lnInst"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "LNode" }),
      element: t,
      primary: {
        label: s("save"),
        icon: "save",
        action: ls(t)
      },
      content: [
        ...os({
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
function ss(t) {
  return Object.entries(t).map(
    ([e, i]) => u`<wizard-checkbox
        label="${e}"
        .maybeValue=${i}
        nullable
        helper="${s(`scl.${e}`)}"
      ></wizard-checkbox>`
  );
}
function cs(t) {
  return (e) => {
    const i = x(e.find((f) => f.label === "seqNum")), n = x(e.find((f) => f.label === "timeStamp")), r = x(e.find((f) => f.label === "dataSet")), a = x(e.find((f) => f.label === "reasonCode")), o = x(e.find((f) => f.label === "dataRef")), l = x(e.find((f) => f.label === "entryID")), d = x(e.find((f) => f.label === "configRef")), c = x(e.find((f) => f.label === "bufOvfl"));
    if (i === t.getAttribute("seqNum") && n === t.getAttribute("timeStamp") && r === t.getAttribute("dataSet") && a === t.getAttribute("reasonCode") && o === t.getAttribute("dataRef") && l === t.getAttribute("entryID") && d === t.getAttribute("configRef") && c === t.getAttribute("bufOvfl"))
      return [];
    const h = F(t, {
      seqNum: i,
      timeStamp: n,
      dataSet: r,
      reasonCode: a,
      dataRef: o,
      entryID: l,
      configRef: d,
      bufOvfl: c
    });
    return [{ old: { element: t }, new: { element: h } }];
  };
}
function us(t) {
  const [
    e,
    i,
    n,
    r,
    a,
    o,
    l,
    d
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
      title: s("wizard.title.edit", { tagName: t.tagName }),
      primary: {
        icon: "save",
        label: s("save"),
        action: cs(t)
      },
      content: ss({
        seqNum: e,
        timeStamp: i,
        dataSet: n,
        reasonCode: r,
        dataRef: a,
        entryID: o,
        configRef: l,
        bufOvfl: d
      })
    }
  ];
}
let ms = 1, Dr = 1, Lr = 1;
function ps(t, e) {
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
function zr(t) {
  return t.parentElement?.querySelector(
    `LN[lnClass="XCBR"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""}`
  ) ? "CBR" : "DIS";
}
function hs(t) {
  return t.getAttribute("prefix") && t.getAttribute("inst") ? t.getAttribute("prefix") + t.getAttribute("inst") : t.getAttribute("inst") && zr(t) === "CBR" ? "QA" + Dr++ : "QB" + Lr++;
}
function fs(t, e) {
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
function bs(t) {
  return Array.from(
    t.querySelectorAll('AccessPoint > Server > LDevice > LN[lnClass="CSWI"]')
  );
}
function gs(t, e) {
  return t.parentElement ? bs(t).filter((i) => fs(i, e)) : [];
}
function xs(t, e) {
  const i = gs(t, e);
  if (Dr = 1, Lr = 1, i.length) {
    const n = D(t.ownerDocument, "Bay", {
      name: "Q" + ms++,
      desc: "Bay for controller " + t.getAttribute("name")
    });
    return i.map((a) => ps(
      D(t.ownerDocument, "ConductingEquipment", {
        name: hs(a),
        type: zr(a)
      }),
      a
    )).forEach((a) => n.appendChild(a)), n;
  }
  return null;
}
function ys(t, e) {
  return (i, n, r) => {
    const a = [], o = r.selected.map(
      (c) => c.value
    ), l = D(t, "VoltageLevel", {
      name: "E1",
      desc: "guessed by OpenSCD",
      nomFreq: "50.0",
      numPhases: "3"
    }), d = D(t, "Voltage", {
      unit: "V",
      multiplier: "k"
    });
    return d.textContent = "110.00", l.appendChild(d), a.push({
      new: { parent: t.querySelector("SCL"), element: e }
    }), a.push({
      new: {
        parent: e,
        element: l
      }
    }), Array.from(t.querySelectorAll(":root > IED")).sort(dd).map((c) => xs(c, o)).forEach((c) => {
      c && a.push({ new: { parent: l, element: c } });
    }), a;
  };
}
function vs(t, e) {
  return [
    {
      title: s("guess.wizard.title"),
      primary: {
        icon: "play_arrow",
        label: s("guess.wizard.primary"),
        action: ys(t, e)
      },
      content: [
        u`<p>${s("guess.wizard.description")}</p>`,
        u`<mwc-list multi id="ctlModelList"
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
const _s = {
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
}, ws = {
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
}, zn = { en: ws, de: _s };
async function As(t) {
  return Object.keys(zn).includes(t) ? zn[t] : {};
}
ya({ loader: As, empty: (t) => t });
const Rr = localStorage.getItem("language") || "en";
console.log("SETTING LANGUAGE TO", Rr);
Aa(Rr);
function $r(t, e, i) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${s("substation.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${s("substation.wizard.descHelper")}"
    ></wizard-textfield>`,
    i ? u`<mwc-formfield label="${s("guess.wizard.primary")}">
          <mwc-checkbox></mwc-checkbox>
        </mwc-formfield>` : u``
  ];
}
function Ss(t) {
  return (e, i) => {
    const n = x(e.find((l) => l.label === "name")), r = x(e.find((l) => l.label === "desc")), a = i.shadowRoot?.querySelector("mwc-checkbox")?.checked;
    t.ownerDocument.createElement("Substation");
    const o = D(t.ownerDocument, "Substation", {
      name: n,
      desc: r
    });
    return a ? [() => vs(t.ownerDocument, o)] : [{ new: { parent: t, element: o } }];
  };
}
function Es(t) {
  const e = t.ownerDocument.querySelector("Substation") === null && t.tagName === "SCL";
  return [
    {
      title: s("substation.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: s("add"),
        action: Ss(t)
      },
      content: $r("", "", e)
    }
  ];
}
function Is(t) {
  return [
    {
      title: s("substation.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: s("save"),
        action: _r(
          t,
          "substation.action.updatesubstation"
        )
      },
      content: $r(
        t.getAttribute("name") ?? "",
        t.getAttribute("desc"),
        !1
      )
    }
  ];
}
function Cs(t, e, i, n) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${s("terminal.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${n}
      readonly
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="connectivityNode"
      .maybeValue=${e}
      helper="${s("terminal.wizard.connectivityNodeHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      readonly
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="cNodeName"
      .maybeValue=${i}
      helper="${s("terminal.wizard.cNodeNameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function ks(t) {
  const e = Array.from(
    t.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(ge).map((i) => i.getAttribute("name") ?? "").filter((i) => i !== t.getAttribute("name"));
  return [
    {
      title: s("terminal.wizard.title.edit"),
      element: t,
      content: Cs(
        t.getAttribute("name"),
        t.getAttribute("connectivityNode"),
        t.getAttribute("cNodeName"),
        e
      )
    }
  ];
}
const zt = {
  nomFreq: "50",
  numPhases: "3",
  Voltage: "110",
  multiplier: "k"
};
function Or(t, e, i, n, r, a) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${s("voltagelevel.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${s("voltagelevel.wizard.descHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="nomFreq"
      .maybeValue=${i}
      nullable
      helper="${s("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      required
      validationMessage="${s("textfield.nonempty")}"
      pattern="${_t.unsigned}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="numPhases"
      .maybeValue=${n}
      nullable
      helper="${s("voltagelevel.wizard.numPhaseHelper")}"
      suffix="#"
      required
      validationMessage="${s("textfield.nonempty")}"
      type="number"
      min="1"
      max="255"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="Voltage"
      .maybeValue=${r}
      nullable
      unit="V"
      .multipliers=${[null, "G", "M", "k", "", "m"]}
      .multiplier=${a}
      helper="${s("voltagelevel.wizard.voltageHelper")}"
      required
      validationMessage="${s("textfield.nonempty")}"
      pattern="${_t.decimal}"
    ></wizard-textfield>`
  ];
}
function Ts(t) {
  return (e) => {
    const i = x(e.find((c) => c.label === "name")), n = x(e.find((c) => c.label === "desc")), r = x(e.find((c) => c.label === "nomFreq")), a = x(e.find((c) => c.label === "numPhases")), o = x(e.find((c) => c.label === "Voltage")), l = Vi(e.find((c) => c.label === "Voltage")), d = D(t.ownerDocument, "VoltageLevel", {
      name: i,
      desc: n,
      nomFreq: r,
      numPhases: a
    });
    if (o !== null) {
      const c = D(t.ownerDocument, "Voltage", {
        unit: "V",
        multiplier: l
      });
      c.textContent = o, d.appendChild(c);
    }
    return [
      {
        new: {
          parent: t,
          element: d
        }
      }
    ];
  };
}
function Ns(t) {
  return [
    {
      title: s("voltagelevel.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: s("add"),
        action: Ts(t)
      },
      content: Or(
        "",
        "",
        zt.nomFreq,
        zt.numPhases,
        zt.Voltage,
        zt.multiplier
      )
    }
  ];
}
function Ds(t, e, i, n) {
  if (t === null) {
    const a = D(n.ownerDocument, "Voltage", {
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
  const r = F(t, { multiplier: i });
  return r.textContent = e, {
    old: { element: t },
    new: { element: r }
  };
}
function Ls(t) {
  return (e) => {
    const i = e.find((f) => f.label === "name").value, n = x(e.find((f) => f.label === "desc")), r = x(e.find((f) => f.label === "nomFreq")), a = x(e.find((f) => f.label === "numPhases")), o = x(e.find((f) => f.label === "Voltage")), l = Vi(e.find((f) => f.label === "Voltage"));
    let d, c;
    if (i === t.getAttribute("name") && n === t.getAttribute("desc") && r === t.getAttribute("nomFreq") && a === t.getAttribute("numPhases"))
      d = null;
    else {
      const f = F(t, {
        name: i,
        desc: n,
        nomFreq: r,
        numPhases: a
      });
      d = { old: { element: t }, new: { element: f } };
    }
    o === (t.querySelector("VoltageLevel > Voltage")?.textContent?.trim() ?? null) && l === (t.querySelector("VoltageLevel > Voltage")?.getAttribute("multiplier") ?? null) ? c = null : c = Ds(
      t.querySelector("VoltageLevel > Voltage"),
      o,
      l,
      d?.new.element ?? t
    );
    const h = {
      actions: [],
      title: s("voltagelevel.action.updateVoltagelevel", { name: i })
    };
    return d && h.actions.push(d), c && h.actions.push(c), h.actions.push(
      ...Hi(t, t.getAttribute("name"), i)
    ), h.actions.length ? [h] : [];
  };
}
function zs(t) {
  return [
    {
      title: s("voltagelevel.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: s("save"),
        action: Ls(t)
      },
      content: Or(
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
const Pr = "PTR";
function Rs(t) {
  return (e) => {
    const i = x(e.find((o) => o.label === "name")), n = x(e.find((o) => o.label === "desc")), r = D(t.ownerDocument, "PowerTransformer", {
      name: i,
      desc: n,
      type: Pr
    });
    return [{
      new: {
        parent: t,
        element: r
      }
    }];
  };
}
function Fr(t, e, i, n) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${s("powertransformer.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${n}
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${s("powertransformer.wizard.descHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="type"
      .maybeValue=${i}
      disabled
      helper="${s("powertransformer.wizard.typeHelper")}"
    ></wizard-textfield>`
  ];
}
function Vr(t, e) {
  return Array.from(t.querySelectorAll("PowerTransformer")).filter(ge).map((i) => i.getAttribute("name") ?? "").filter((i) => e && i !== e);
}
function $s(t) {
  const e = Vr(t);
  return [
    {
      title: s("powertransformer.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: s("add"),
        action: Rs(t)
      },
      content: Fr(
        "",
        null,
        Pr,
        e
      )
    }
  ];
}
function Os(t) {
  const e = Vr(
    t.parentNode,
    t.getAttribute("name")
  );
  return [
    {
      title: s("powertransformer.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: s("save"),
        action: vr(t)
      },
      content: Fr(
        t.getAttribute("name"),
        t.getAttribute("desc"),
        t.getAttribute("type"),
        e
      )
    }
  ];
}
function Ps(t) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${s("subnetwork.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${s("subnetwork.wizard.descHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      nullable
      helper="${s("subnetwork.wizard.typeHelper")}"
      pattern="${_t.normalizedString}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="BitRate"
      .maybeValue=${t.BitRate}
      nullable
      unit="b/s"
      .multipliers=${[null, "M"]}
      .multiplier=${t.multiplier}
      helper="${s("subnetwork.wizard.bitrateHelper")}"
      required
      validationMessage="${s("textfield.nonempty")}"
      pattern="${_t.decimal}"
    ></wizard-textfield>`
  ];
}
function Fs(t, e, i, n) {
  if (t === null) {
    const a = D(n.ownerDocument, "BitRate", {
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
  const r = F(t, { multiplier: i });
  return r.textContent = e, {
    old: { element: t },
    new: { element: r }
  };
}
function Vs(t) {
  return (e) => {
    const i = e.find((h) => h.label === "name").value, n = x(e.find((h) => h.label === "desc")), r = x(e.find((h) => h.label === "type")), a = x(e.find((h) => h.label === "BitRate")), o = Vi(e.find((h) => h.label === "BitRate"));
    let l, d;
    if (i === t.getAttribute("name") && n === t.getAttribute("desc") && r === t.getAttribute("type"))
      l = null;
    else {
      const h = F(t, { name: i, desc: n, type: r });
      l = { old: { element: t }, new: { element: h } };
    }
    a === (t.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null) && o === (t.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null) ? d = null : d = Fs(
      t.querySelector("SubNetwork > BitRate"),
      a,
      o,
      l?.new.element ?? t
    );
    const c = [];
    return l && c.push(l), d && c.push(d), c;
  };
}
function Ms(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = t.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null, a = t.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null;
  return [
    {
      title: s("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: s("save"),
        action: Vs(t)
      },
      content: Ps({ name: e, desc: i, type: n, BitRate: r, multiplier: a })
    }
  ];
}
const Bs = [
  "ldInst",
  "lnClass",
  "lnInst",
  "prefix",
  "doName",
  "daName"
];
function Hs(t) {
  return Bs.map(
    (e) => t.getAttribute(e) ? `[${e}="${t.getAttribute(
      e
    )}"]` : ""
  ).join("");
}
const qs = ["srcLDInst", "srcLNClass", "srcLNInst", "srcCBName"];
function Gs(t) {
  return qs.map(
    (e) => t.getAttribute(e) ? `[${e}="${t.getAttribute(e)}"]` : ""
  ).join("");
}
function Us(t) {
  if (!t.length) return [];
  const e = [], i = {};
  for (const n of t) {
    const r = n.old.element, a = n.old.parent, o = z(a);
    i[o] || (i[o] = a.cloneNode(!0));
    const l = i[o].querySelector(
      `ExtRef${r.getAttribute("iedName") ? `[iedName="${r.getAttribute("iedName")}"]` : ""}${Hs(r)}${r.getAttribute("serviceType") ? `[serviceType="${r.getAttribute("serviceType")}"]` : ""}${Gs(r)}`
    );
    l && i[o].removeChild(l);
  }
  return Object.entries(i).forEach(([n, r]) => {
    if (r.children.length == 0) {
      const a = t[0].old.parent.ownerDocument, o = Le(a, "Inputs", n);
      o && o.parentElement && e.push({
        old: { parent: o.parentElement, element: o }
      });
    }
  }), e;
}
const Ws = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function js(t, e, i, n, r, a, o, l, d) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${s("ied.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${d}
      pattern="${Ws}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${s("ied.wizard.descHelper")}"
      pattern="${ze.normalizedString}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="type"
      .maybeValue=${i || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="manufacturer"
      .maybeValue=${n || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="configVersion"
      .maybeValue=${r || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="originalSclVersion"
      .maybeValue=${a || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="engRight"
      .maybeValue=${o || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="owner"
      .maybeValue=${l || "-"}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function Ks(t) {
  return [
    u` <section>
      <h1>${s("ied.wizard.title.references")}</h1>
      <mwc-list>
        ${t.map((e) => {
      const i = e.old.element;
      return u` <mwc-list-item noninteractive twoline>
            <span>${i.tagName}</span>
            <span slot="secondary"
              >${z(e.old.element)}</span
            >
          </mwc-list-item>`;
    })}
      </mwc-list>
    </section>`
  ];
}
function Xs(t) {
  return (t.getAttribute("originalSclVersion") ?? "").concat(t.getAttribute("originalSclRevision") ?? "").concat(t.getAttribute("originalSclRelease") ?? "");
}
function Ys(t) {
  return Array.from(t.parentNode.querySelectorAll("IED")).filter(ge).map((e) => e.getAttribute("name") ?? "").filter((e) => e !== t.getAttribute("name"));
}
function Zs(t) {
  return (e, i) => {
    i.dispatchEvent(Oe());
    const n = yr(t), r = n.filter(
      (d) => d.old.element.tagName === "ExtRef"
    ), a = Us(r), o = t.getAttribute("name") ?? "Unknown", l = {
      actions: [],
      title: s("ied.action.deleteied", { name: o })
    };
    return l.actions.push({
      old: { parent: t.parentElement, element: t }
    }), l.actions.push(...n), l.actions.push(...a), [l];
  };
}
function Qs(t) {
  const e = yr(t);
  return e.length > 0 ? [
    {
      title: s("ied.wizard.title.delete"),
      content: Ks(e),
      primary: {
        icon: "delete",
        label: s("remove"),
        action: Zs(t)
      }
    }
  ] : null;
}
function Js(t) {
  function e(i) {
    return (n) => {
      const r = Qs(i);
      r && n.dispatchEvent(nt(() => r)), n.dispatchEvent(
        Bi({ old: { parent: i.parentElement, element: i } })
      ), n.dispatchEvent(Oe());
    };
  }
  return [
    {
      title: s("ied.wizard.title.edit"),
      element: t,
      menuActions: [
        {
          icon: "delete",
          label: s("remove"),
          action: e(t)
        }
      ],
      primary: {
        icon: "edit",
        label: s("save"),
        action: _r(
          t,
          "ied.action.updateied"
        )
      },
      content: js(
        t.getAttribute("name"),
        t.getAttribute("desc"),
        t.getAttribute("type"),
        t.getAttribute("manufacturer"),
        t.getAttribute("configVersion"),
        Xs(t),
        t.getAttribute("engRight"),
        t.getAttribute("owner"),
        Ys(t)
      )
    }
  ];
}
const ec = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function tc(t, e, i, n) {
  return [
    e ? u`<wizard-textfield
          label="ldName"
          .maybeValue=${t}
          helper="${s("ldevice.wizard.noNameSupportHelper")}"
          helperPersistent
          readOnly
          disabled
        ></wizard-textfield>` : u`<wizard-textfield
          label="ldName"
          .maybeValue=${t}
          nullable
          helper="${s("ldevice.wizard.nameHelper")}"
          validationMessage="${s("textfield.required")}"
          dialogInitialFocus
          pattern="${ec}"
        ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${i}
      nullable
      helper="${s("ldevice.wizard.descHelper")}"
      pattern="${ze.normalizedString}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="ldInst"
      .maybeValue=${n}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function ic(t) {
  return !!t.closest("IED")?.querySelector("Services > ConfLdName");
}
function nc(t) {
  return (e) => {
    const i = {}, n = ["ldName", "desc"];
    if (n.forEach((r) => {
      i[r] = x(e.find((a) => a.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = F(t, i);
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
function rc(t) {
  return [
    {
      title: s("ldevice.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: s("save"),
        action: nc(t)
      },
      content: tc(
        t.getAttribute("ldName"),
        !ic(t),
        t.getAttribute("desc"),
        t.getAttribute("inst")
      )
    }
  ];
}
function ac(t) {
  return Object.entries(t).map(
    ([e, i]) => u`<wizard-checkbox
        label="${e}"
        .maybeValue=${i}
        nullable
        helper="${s(`scl.${e}`)}"
      ></wizard-checkbox>`
  );
}
function oc(t) {
  return (e) => {
    const i = x(e.find((c) => c.label === "dchg")), n = x(e.find((c) => c.label === "qchg")), r = x(e.find((c) => c.label === "dupd")), a = x(e.find((c) => c.label === "period")), o = x(e.find((c) => c.label === "gi"));
    if (i === t.getAttribute("dchg") && n === t.getAttribute("qchg") && r === t.getAttribute("dupd") && a === t.getAttribute("period") && o === t.getAttribute("gi"))
      return [];
    const l = F(t, {
      dchg: i,
      qchg: n,
      dupd: r,
      period: a,
      gi: o
    });
    return [{ old: { element: t }, new: { element: l } }];
  };
}
function lc(t) {
  const [e, i, n, r, a] = [
    "dchg",
    "qchg",
    "dupd",
    "period",
    "gi"
  ].map((o) => t.getAttribute(o));
  return [
    {
      title: s("wizard.title.edit", { tagName: t.tagName }),
      primary: {
        icon: "save",
        label: s("save"),
        action: oc(t)
      },
      content: ac({ dchg: e, qchg: i, dupd: n, period: r, gi: a })
    }
  ];
}
class le extends Ie {
  constructor() {
    super(...arguments), this.raised = !1, this.unelevated = !1, this.outlined = !1, this.dense = !1, this.disabled = !1, this.trailingIcon = !1, this.fullwidth = !1, this.icon = "", this.label = "", this.expandContent = !1, this.shouldRenderRipple = !1, this.rippleHandlers = new At(() => (this.shouldRenderRipple = !0, this.ripple));
  }
  /** @soyTemplate */
  renderOverlay() {
    return u``;
  }
  /** @soyTemplate */
  renderRipple() {
    const e = this.raised || this.unelevated;
    return this.shouldRenderRipple ? u`<mwc-ripple class="ripple" .primary="${!e}" .disabled="${this.disabled}"></mwc-ripple>` : "";
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
    return ae({
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
    return u`
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
        <span class="slot-container ${ae({
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
    return u`
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
le.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
m([
  b({ type: Boolean, reflect: !0 })
], le.prototype, "raised", void 0);
m([
  b({ type: Boolean, reflect: !0 })
], le.prototype, "unelevated", void 0);
m([
  b({ type: Boolean, reflect: !0 })
], le.prototype, "outlined", void 0);
m([
  b({ type: Boolean })
], le.prototype, "dense", void 0);
m([
  b({ type: Boolean, reflect: !0 })
], le.prototype, "disabled", void 0);
m([
  b({ type: Boolean, attribute: "trailingicon" })
], le.prototype, "trailingIcon", void 0);
m([
  b({ type: Boolean, reflect: !0 })
], le.prototype, "fullwidth", void 0);
m([
  b({ type: String })
], le.prototype, "icon", void 0);
m([
  b({ type: String })
], le.prototype, "label", void 0);
m([
  b({ type: Boolean })
], le.prototype, "expandContent", void 0);
m([
  C("#button")
], le.prototype, "buttonElement", void 0);
m([
  wt("mwc-ripple")
], le.prototype, "ripple", void 0);
m([
  E()
], le.prototype, "shouldRenderRipple", void 0);
m([
  Ue({ passive: !0 })
], le.prototype, "handleRippleActivate", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const dc = ie`.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;font-size:1.125rem;height:1.125rem;vertical-align:top;width:1.125rem}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{border-style:solid}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 8px 0 8px}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px;height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined .mdc-button__touch{left:-1px;width:calc(100% + 2 * 1px)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;font-size:1.125rem;height:1.125rem;vertical-align:top;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{display:none}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;
let Ii = class extends le {
};
Ii.styles = [dc];
Ii = m([
  X("mwc-button")
], Ii);
const sc = [
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
], cc = [
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
], uc = ["Spec", "Conf", "RO", "Set"], mc = ["SmpPerPeriod", "SmpPerSec", "SecPerSmp"], Mr = [
  "None",
  "Signature",
  "SignatureAndEncryption"
];
function pc(t, e, i) {
  if (!t.target || !t.target.parentElement) return;
  const n = t.target.selected?.value;
  if (t.target.parentElement.querySelector(
    'wizard-select[label="bType"]'
  ).value !== "Enum") return;
  const a = Array.from(
    e.querySelectorAll(`EnumType[id="${n}"] > EnumVal`)
  ).map(
    (l) => u`<mwc-list-item
        value="${l.textContent?.trim() ?? ""}"
        ?selected=${l.textContent?.trim() === i}
        >${l.textContent?.trim()}</mwc-list-item
      >`
  ), o = t.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  Ni(u`${a}`, o), o.requestUpdate();
}
function hc(t, e, i) {
  const n = t.target.selected.value, r = t.target.parentElement.querySelector(
    'wizard-select[label="type"]'
  );
  r.disabled = !(n === "Enum" || n === "Struct");
  const a = [];
  Array.from(r.children).forEach((d) => {
    const c = d;
    c.disabled = !d.classList.contains(n), c.noninteractive = !d.classList.contains(n), c.style.display = d.classList.contains(n) ? "" : "none", c.disabled || a.push(c);
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
function fc(t, e, i, n, r, a, o, l, d, c) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${s("scl.name")}"
      required
      pattern="${ze.abstractDataAttributeName}"
      maxLength="${qi.abstracDaName}"
      dialogInitialFocus
    >
      ></wizard-textfield
    >`,
    u`<wizard-textfield
      label="desc"
      helper="${s("scl.desc")}"
      .maybeValue=${e}
      nullable
      pattern="${ze.normalizedString}"
    ></wizard-textfield>`,
    u`<wizard-select
      fixedMenuPosition
      label="bType"
      .value=${i}
      helper="${s("scl.bType")}"
      required
      @selected=${(h) => hc(h)}
      >${cc.map(
      (h) => u`<mwc-list-item value="${h}"
            >${h}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    u`<wizard-select
      label="type"
      .maybeValue=${r}
      helper="${s("scl.type")}"
      fixedMenuPosition
      @selected=${(h) => pc(h, c, d)}
      >${n.map(
      (h) => u`<mwc-list-item
            class="${h.tagName === "EnumType" ? "Enum" : "Struct"}"
            value=${h.id}
            >${h.id}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    u`<wizard-textfield
      label="sAddr"
      .maybeValue=${a}
      helper="${s("scl.sAddr")}"
      nullable
      pattern="${ze.normalizedString}"
    ></wizard-textfield>`,
    u`<wizard-select
      label="valKind"
      .maybeValue=${o}
      helper="${s("scl.valKind")}"
      nullable
      required
      fixedMenuPosition
      >${uc.map(
      (h) => u`<mwc-list-item value="${h}"
            >${h}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    u`<wizard-checkbox
      label="valImport"
      .maybeValue=${l}
      helper="${s("scl.valImport")}"
      nullable
      required
    ></wizard-checkbox>`,
    u`<wizard-select
      label="Val"
      .maybeValue=${d}
      helper="${s("scl.Val")}"
      nullable
      >${Array.from(
      c.querySelectorAll(`EnumType > EnumVal[id="${r}"]`)
    ).map(
      (h) => u`<mwc-list-item value="${h.textContent?.trim() ?? ""}"
            >${h.textContent?.trim()}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    u`<wizard-textfield
      label="Val"
      .maybeValue=${d}
      helper="${s("scl.Val")}"
      nullable
    ></wizard-textfield>`
  ];
}
function bc(t, e, i, n) {
  return [
    u`<wizard-select
      label="fc"
      .maybeValue=${t}
      helper="${s("scl.fc")}"
      required
      fixedMenuPosition
      >${sc.map(
      (r) => u`<mwc-list-item value="${r}">${r}</mwc-list-item>`
    )}</wizard-select
    >`,
    u`<wizard-checkbox
      label="dchg"
      .maybeValue=${e}
      helper="${s("scl.dchg")}"
      nullable
    ></wizard-checkbox>`,
    u`<wizard-checkbox
      label="qchg"
      .maybeValue=${i}
      helper="${s("scl.qchg")}"
      nullable
    ></wizard-checkbox>`,
    u`<wizard-checkbox
      label="dupd"
      .maybeValue=${n}
      helper="${s("scl.dupd")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function gc(t) {
  return (e) => {
    const i = x(e.find((_) => _.label === "name")), n = x(e.find((_) => _.label === "desc")), r = x(e.find((_) => _.label === "bType")), a = r === "Enum" || r === "Struct" ? x(e.find((_) => _.label === "type")) : null, o = x(e.find((_) => _.label === "sAddr")), l = x(e.find((_) => _.label === "valKind")), d = x(e.find((_) => _.label === "valImport")), c = e.find(
      (_) => _.label === "Val" && _.style.display !== "none"
    ), h = c ? x(c) : null, f = x(e.find((_) => _.label === "fc")) ?? "", g = x(e.find((_) => _.label === "dchg")), y = x(e.find((_) => _.label === "qchg")), v = x(e.find((_) => _.label === "dupd")), S = [], T = D(t.ownerDocument, "DA", {
      name: i,
      desc: n,
      bType: r,
      type: a,
      sAddr: o,
      valKind: l,
      valImport: d,
      fc: f,
      dchg: g,
      qchg: y,
      dupd: v
    });
    if (h !== null) {
      const _ = D(t.ownerDocument, "Val", {});
      _.textContent = h, T.appendChild(_);
    }
    return S.push({
      new: {
        parent: t,
        element: T
      }
    }), S;
  };
}
function xc(t) {
  const e = t.ownerDocument, i = "", n = null, r = "", a = null, o = null, l = null, d = null, c = null, h = "", f = null, g = null, y = null, v = Array.from(e.querySelectorAll("DAType, EnumType")).filter(ge).filter((T) => T.getAttribute("id")), S = t.closest("DataTypeTemplates");
  return [
    {
      title: s("da.wizard.title.edit"),
      primary: {
        icon: "",
        label: s("save"),
        action: gc(t)
      },
      content: [
        ...fc(
          i,
          n,
          r,
          v,
          a,
          o,
          d,
          c,
          l,
          S
        ),
        ...bc(h, f, g, y)
      ]
    }
  ];
}
const fe = (t, e) => t === null ? "" : e;
function Br() {
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
      render: (d, c, h = null) => (h ? [...Array(h)] : [h]).map((f, g) => u`<wizard-select
            id="Val${fe(f, `${g + 1}`)}"
            label="Val${fe(f, ` for sGroup ${g + 1}`)}"
            .maybeValue=${o(c)}
            fixedMenuPosition
          >
            <mwc-list-item value="true">true</mwc-list-item>
            <mwc-list-item value="false">false</mwc-list-item>
          </wizard-select>`),
      value: (d, c) => x(
        d.find((h) => h.id === `Val${c || ""}`)
      )
    };
  }
  function e() {
    return {
      render: (d, c, h = null) => (h ? [...Array(h)] : [h]).map((f, g) => u`<wizard-select
            id="Val${fe(f, `${g + 1}`)}"
            label="Val${fe(f, ` for sGroup ${g + 1}`)}"
            .maybeValue=${o(c)}
            fixedMenuPosition
          >
            ${l(d).map((y) => u`<mwc-list-item value="${y}"
                >${y}</mwc-list-item
              >`)}
          </wizard-select>`),
      value: (d, c) => x(
        d.find((h) => h.id === `Val${c || ""}`)
      )
    };
  }
  function i(d, c, h) {
    return {
      render: (f, g, y = null) => (y ? [...Array(y)] : [y]).map((v, S) => u`<wizard-textfield
            id="Val${fe(v, `${S + 1}`)}"
            label="Val${fe(v, ` for sGroup ${S + 1}`)}"
            .maybeValue=${o(g)}
            helper="${s("dai.wizard.valueHelper", { type: d })}"
            type="number"
            min=${c}
            max=${h}
            step="0.1"
          >
          </wizard-textfield>`),
      value: (f, g) => x(
        f.find((y) => y.id === `Val${g || ""}`)
      )
    };
  }
  function n(d, c, h) {
    return {
      render: (f, g, y = null) => (y ? [...Array(y)] : [y]).map((v, S) => u`<wizard-textfield
            id="Val${fe(v, `${S + 1}`)}"
            label="Val${fe(v, ` for sGroup ${S + 1}`)}"
            .maybeValue=${o(g)}
            helper="${s("dai.wizard.valueHelper", { type: d })}"
            type="number"
            min=${c}
            max=${h}
          >
          </wizard-textfield>`),
      value: (f, g) => x(
        f.find((y) => y.id === `Val${g || ""}`)
      )
    };
  }
  function r() {
    return {
      render: (d, c, h = null) => {
        const f = o(c);
        return (h ? [...Array(h)] : [h]).reduce(
          (g, y, v) => g.concat([
            u`<wizard-textfield
                id="ValDate${fe(y, `${v + 1}`)}"
                label="Val (Date)${fe(y, ` for sGroup ${v + 1}`)}"
                .maybeValue=${yc(f)}
                type="date"
              >
              </wizard-textfield>`,
            u`<wizard-textfield
                id="ValTime${fe(y, `${v + 1}`)}"
                label="Val (Time)${fe(y, ` for sGroup ${v + 1}`)}"
                .maybeValue=${vc(f)}
                type="time"
                step="1"
              >
              </wizard-textfield>`
          ]),
          []
        );
      },
      value: (d, c) => {
        const h = [`ValDate${c || ""}`, `ValTime${c || ""}`].map(
          (y) => x(d.find((v) => v.id === y))
        ), f = h[0] ? h[0] : "0000-00-00", g = h[1] ? h[1] : "00:00:00";
        return f + "T" + g + ".000";
      }
    };
  }
  function a(d, c) {
    return {
      render: (h, f, g = null) => (g ? [...Array(g)] : [g]).map((y, v) => u`<wizard-textfield
            id="Val${fe(y, ` ${v + 1}`)}"
            label="Val${fe(y, ` for sGroup ${v + 1}`)}"
            .maybeValue=${o(f)}
            helper="${s("dai.wizard.valueHelper", { type: d })}"
            maxLength=${c}
            type="text"
          >
          </wizard-textfield>`),
      value: (h, f) => x(
        h.find((g) => g.id === `Val${f || ""}`)
      )
    };
  }
  function o(d) {
    return (d?.querySelector("Val") ? d?.querySelector("Val") : d)?.textContent?.trim() ?? "";
  }
  function l(d) {
    const c = d.getAttribute("type"), h = [];
    return Array.from(
      d.ownerDocument.querySelectorAll(
        `EnumType[id="${c}"] > EnumVal`
      )
    ).filter(
      (f) => f.textContent && f.textContent !== ""
    ).sort(
      (f, g) => parseInt(f.getAttribute("ord") ?? "0") - parseInt(g.getAttribute("ord") ?? "0")
    ).forEach((f) => {
      h.push(f.textContent ?? "");
    }), h;
  }
}
function yc(t) {
  let i = t.split("T")[0];
  return /^\d{4}-\d{2}-\d{2}$/.test(i) || (i = null), i === "0000-00-00" && (i = null), i;
}
function vc(t) {
  const e = t.split("T");
  let i = null;
  return e.length == 2 && (i = e[1], i.length > 8 && (i = i.substring(0, 8)), /^\d{2}:\d{2}:\d{2}$/.test(i) || (i = null), i === "00:00:00" && (i = null)), i;
}
function _c(t, e) {
  return (i) => {
    const n = t.getAttribute("bType"), r = Br()[n].value(i), a = e.parentElement?.getAttribute("name") ?? "", o = {
      actions: [],
      title: s("dai.action.updatedai", { daiName: a })
    }, l = e.cloneNode(!1);
    return l.textContent = r, o.actions.push({
      old: { element: e },
      new: { element: l }
    }), [o];
  };
}
function wc(t, e, i = null) {
  const n = t.getAttribute("bType"), r = t.querySelector("Val")?.textContent?.trim() ?? "";
  return [
    u` ${Br()[n].render(
      t,
      e,
      i
    )}
    ${r ? u`<wizard-textfield
          id="daVal"
          label="DA Template Value"
          .maybeValue=${r}
          readonly
          disabled
        >
        </wizard-textfield>` : Te}`
  ];
}
function Ac(t, e) {
  const i = e?.tagName === "DAI" ? e?.getAttribute("name") ?? "" : e?.parentElement?.getAttribute("name") ?? "";
  return [
    {
      title: s("dai.wizard.title.edit", {
        daiName: i
      }),
      element: e,
      primary: {
        icon: "edit",
        label: s("save"),
        action: _c(t, e)
      },
      content: wc(t, e)
    }
  ];
}
function Sc(t) {
  return (e) => {
    e.dispatchEvent(nt(() => Cr(t)));
  };
}
function Ec(t) {
  return (e, i) => {
    const n = e.find((c) => c.label === "name").value, r = x(e.find((c) => c.label === "desc")), a = t.getAttribute("name"), o = [];
    if (!(n === a && r === t.getAttribute("desc"))) {
      const c = F(t, { name: n, desc: r });
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
      const h = F(c, { datSet: n });
      return { old: { element: c }, new: { element: h } };
    }) : [];
    return [
      ...Array.from(
        i.shadowRoot.querySelectorAll(
          "filtered-list > mwc-check-list-item:not([selected])"
        )
      ).map((c) => Le(t, "FCDA", c.value)).filter((c) => c).map((c) => ({
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
function Hr(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc");
  return [
    {
      title: s("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        label: s("save"),
        icon: "save",
        action: Ec(t)
      },
      menuActions: [
        {
          icon: "add",
          label: s("dataset.fcda.add"),
          action: Sc(t)
        }
      ],
      content: [
        u`<wizard-textfield
          label="name"
          .maybeValue=${e}
          helper="${s("scl.name")}"
          required
          disabled="true"
        >
        </wizard-textfield>`,
        u`<wizard-textfield
          label="desc"
          .maybeValue=${i}
          helper="${s("scl.desc")}"
          nullable
          required
        >
        </wizard-textfield>`,
        u`<filtered-list multi
          >${Array.from(t.querySelectorAll("FCDA")).map(
          (n) => u`<mwc-check-list-item selected value="${z(n)}"
                >${z(n).split(">").pop()}</mwc-check-list-item
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
}, Ic = {
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
}, Cc = {
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
function qr(t) {
  return [
    u`<mwc-formfield label="${s("connectedap.wizard.addschemainsttype")}">
      <mwc-checkbox
        id="instType"
        ?checked="${t.hasInstType}"
      ></mwc-checkbox>
    </mwc-formfield>`,
    u`${Object.entries(t.attributes).map(
      ([e, i]) => u`<wizard-textfield
          label="${e}"
          ?nullable=${Cc[e]}
          .maybeValue=${i}
          pattern="${O(Ic[e])}"
          required
        ></wizard-textfield>`
    )}`
  ];
}
function kc(t, e) {
  return t.querySelectorAll("P").length !== e.querySelectorAll("P").length ? !1 : Array.from(t.querySelectorAll("P")).filter(
    (i) => !e.querySelector(`Address > P[type="${i.getAttribute("type")}"]`)?.isEqualNode(i)
  ).length === 0;
}
function Tc(t, e, i) {
  const n = D(e.ownerDocument, "Address", {});
  return Object.entries(t).filter(([r, a]) => a !== null).forEach(([r, a]) => {
    const o = r, l = D(e.ownerDocument, "P", { type: o });
    i && l.setAttributeNS(
      "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:type",
      "tP_" + r
    ), l.textContent = a, n.appendChild(l);
  }), n;
}
function Gr(t, e, i) {
  const n = [], r = Tc(e, t, i), a = t.querySelector("Address");
  return a !== null && !kc(a, r) ? (n.push({
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
function Rn(t, e, i, n) {
  if (e === null) {
    const a = D(n.ownerDocument, t, {
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
function Nc(t) {
  return (e, i) => {
    const n = {
      actions: [],
      title: s("gse.action.addaddress", {
        identity: z(t)
      })
    }, r = i.shadowRoot?.querySelector("#instType")?.checked ?? !1, a = {};
    a["MAC-Address"] = x(
      e.find((c) => c.label === "MAC-Address")
    ), a.APPID = x(e.find((c) => c.label === "APPID")), a["VLAN-ID"] = x(
      e.find((c) => c.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = x(
      e.find((c) => c.label === "VLAN-PRIORITY")
    ), Gr(t, a, r).forEach((c) => {
      n.actions.push(c);
    });
    const l = x(e.find((c) => c.label === "MinTime")), d = x(e.find((c) => c.label === "MaxTime"));
    return l !== (t.querySelector("MinTime")?.textContent?.trim() ?? null) && n.actions.push(
      Rn(
        "MinTime",
        t.querySelector("MinTime"),
        l,
        t
      )
    ), d !== (t.querySelector("MaxTime")?.textContent?.trim() ?? null) && n.actions.push(
      Rn(
        "MaxTime",
        t.querySelector("MaxTime"),
        d,
        t
      )
    ), [n];
  };
}
function Dc(t) {
  const e = t.querySelector("MinTime")?.innerHTML.trim() ?? null, i = t.querySelector("MaxTime")?.innerHTML.trim() ?? null, n = Array.from(t.querySelectorAll("Address > P")).some(
    (a) => a.getAttribute("xsi:type")
  ), r = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((a) => {
    r[a] || (r[a] = t.querySelector(`Address > P[type="${a}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: s("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        label: s("save"),
        icon: "save",
        action: Nc(t)
      },
      content: [
        ...qr({ hasInstType: n, attributes: r }),
        u`<wizard-textfield
          label="MinTime"
          .maybeValue=${e}
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
function Ur(t) {
  const e = t.getAttribute("name"), i = t.closest("IED")?.getAttribute("name"), n = t.closest("AccessPoint")?.getAttribute("name"), r = t.closest("LDevice")?.getAttribute("inst");
  return t.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${n}"] > GSE[ldInst="${r}"][cbName="${e}"]`
  );
}
function Lc(t) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${s("scl.name")}"
      required
      validationMessage="${s("textfield.required")}"
      pattern="${ze.asciName}"
      maxLength="${qi.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${s("scl.desc")}"
    ></wizard-textfield>`,
    u`<wizard-select
      label="type"
      .maybeValue=${t.type}
      helper="${s("scl.type")}"
      nullable
      required
      >${["GOOSE", "GSSE"].map(
      (e) => u`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`,
    u`<wizard-textfield
      label="appID"
      .maybeValue=${t.appID}
      helper="${s("scl.id")}"
      required
      validationMessage="${s("textfield.nonempty")}"
    ></wizard-textfield>`,
    u`<wizard-checkbox
      label="fixedOffs"
      .maybeValue=${t.fixedOffs}
      nullable
      helper="${s("scl.fixedOffs")}"
    ></wizard-checkbox>`,
    u`<wizard-select
      label="securityEnabled"
      .maybeValue=${t.securityEnabled}
      nullable
      required
      helper="${s("scl.securityEnable")}"
      >${Mr.map(
      (e) => u`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function zc(t) {
  if (!t.parentElement) return null;
  const e = t.parentElement.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), i = Ur(t), n = Array.from(
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
    title: s("controlblock.action.remove", {
      type: t.tagName,
      name: a,
      iedName: o
    }),
    actions: r
  };
}
function Rc(t) {
  return (e) => {
    const i = zc(t);
    i && e.dispatchEvent(Bi(i)), e.dispatchEvent(Oe());
  };
}
function $c(t) {
  return (e) => {
    e.dispatchEvent(nt(() => Hr(t)));
  };
}
function Oc(t) {
  return (e) => {
    e.dispatchEvent(nt(() => Dc(t)));
  };
}
function Pc(t) {
  return (e) => {
    const i = e.find((c) => c.label === "name").value, n = x(e.find((c) => c.label === "desc")), r = x(e.find((c) => c.label === "type")), a = x(e.find((c) => c.label === "appID")), o = x(e.find((c) => c.label === "fixedOffs")), l = x(
      e.find((c) => c.label === "securityEnabled")
    );
    if (i === t.getAttribute("name") && n === t.getAttribute("desc") && r === t.getAttribute("type") && a === t.getAttribute("appID") && o === t.getAttribute("fixedOffs") && l === t.getAttribute("securityEnabled"))
      return [];
    const d = F(t, {
      name: i,
      desc: n,
      type: r,
      appID: a,
      fixedOffs: o,
      securityEnabled: l
    });
    return [{ old: { element: t }, new: { element: d } }];
  };
}
function Fc(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = t.getAttribute("appID"), a = t.getAttribute("fixedOffs"), o = t.getAttribute("securityEnabled"), l = Ur(t), d = t.parentElement?.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), c = [];
  return c.push({
    icon: "delete",
    label: s("remove"),
    action: Rc(t)
  }), d && c.push({
    icon: "edit",
    label: s("scl.DataSet"),
    action: $c(d)
  }), l && c.push({
    icon: "edit",
    label: s("scl.Communication"),
    action: Oc(l)
  }), [
    {
      title: s("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: s("save"),
        action: Pc(t)
      },
      menuActions: c,
      content: [
        ...Lc({
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
function Ke(t) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${s("scl.name")}"
      required
      validationMessage="${s("textfield.required")}"
      .reservedValues=${t.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${s("scl.desc")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      helper="${s("scl.type")}"
      nullable
    ></wizard-textfield>`
  ];
}
function Vc(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = x(e.find((a) => a.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = F(t, i);
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
function Mc(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = ee(
    t.parentElement,
    "Function"
  ).filter((a) => a !== t).map((a) => a.getAttribute("name"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Vc(t)
      },
      content: [
        ...Ke({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Bc(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = x(e.find((o) => o.label === a));
    });
    const r = D(
      t.ownerDocument,
      "Function",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function Hc(t) {
  const e = "", r = Array.from(t.querySelectorAll("Function")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: s("wizard.title.add", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Bc(t)
      },
      content: [
        ...Ke({
          name: e,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function qc(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = x(e.find((a) => a.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = F(t, i);
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
function Gc(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = ee(
    t.parentElement,
    "EqSubFunction"
  ).filter((a) => a !== t).map((a) => a.getAttribute("name"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "EqSubFunction" }),
      element: t,
      primary: {
        icon: "save",
        label: s("save"),
        action: qc(t)
      },
      content: [
        ...Ke({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Uc(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = x(e.find((o) => o.label === a));
    });
    const r = D(
      t.ownerDocument,
      "EqSubFunction",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function Wc(t) {
  const e = "", r = Array.from(
    t.querySelectorAll("EqSubFunction")
  ).map((a) => a.getAttribute("name"));
  return [
    {
      title: s("wizard.title.add", { tagName: "EqSubFunction" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Uc(t)
      },
      content: [
        ...Ke({
          name: e,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function jc(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = x(e.find((a) => a.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = F(t, i);
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
function Kc(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = ee(
    t.parentElement,
    "EqFunction"
  ).filter((a) => a !== t).map((a) => a.getAttribute("name"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "EqFunction" }),
      element: t,
      primary: {
        icon: "save",
        label: s("save"),
        action: jc(t)
      },
      content: [
        ...Ke({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Xc(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = x(e.find((o) => o.label === a));
    });
    const r = D(
      t.ownerDocument,
      "EqFunction",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function Yc(t) {
  const e = "", r = Array.from(t.querySelectorAll("EqFunction")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: s("wizard.title.add", { tagName: "EqFunction" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Xc(t)
      },
      content: [
        ...Ke({
          name: e,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function Zc(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = x(e.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = F(t, i);
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
function Qc(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = ee(
    t.parentElement,
    "SubFunction"
  ).filter((a) => a !== t).map((a) => a.getAttribute("name"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Zc(t)
      },
      content: [
        ...Ke({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Jc(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = x(e.find((o) => o.label === a));
    });
    const r = D(
      t.ownerDocument,
      "SubFunction",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function eu(t) {
  const e = "", r = Array.from(t.querySelectorAll("SubFunction")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: s("wizard.title.add", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Jc(t)
      },
      content: [
        ...Ke({
          name: e,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function tu(t) {
  return (e, i) => {
    const n = {
      actions: [],
      title: s("smv.action.addaddress", {
        identity: z(t)
      })
    }, r = i.shadowRoot?.querySelector("#instType")?.checked, a = {};
    a["MAC-Address"] = x(
      e.find((l) => l.label === "MAC-Address")
    ), a.APPID = x(e.find((l) => l.label === "APPID")), a["VLAN-ID"] = x(
      e.find((l) => l.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = x(
      e.find((l) => l.label === "VLAN-PRIORITY")
    );
    const o = Gr(t, a, r);
    return o.length ? (o.forEach((l) => {
      n.actions.push(l);
    }), [n]) : [];
  };
}
function iu(t) {
  const e = Array.from(t.querySelectorAll("Address > P")).some(
    (n) => n.getAttribute("xsi:type")
  ), i = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((n) => {
    i[n] || (i[n] = t.querySelector(`Address > P[type="${n}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: s("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        label: s("save"),
        icon: "edit",
        action: tu(t)
      },
      content: [...qr({ hasInstType: e, attributes: i })]
    }
  ];
}
function nu(t) {
  return Object.entries(t).map(
    ([e, i]) => u`<wizard-checkbox
        label="${e}"
        .maybeValue=${i}
        nullable
        helper="${s(`scl.${e}`)}"
      ></wizard-checkbox>`
  );
}
function ru(t) {
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
    const r = F(t, i);
    return [{ old: { element: t }, new: { element: r } }];
  };
}
function au(t) {
  const [e, i, n, r, a] = [
    "refreshTime",
    "sampleRate",
    "dataSet",
    "security",
    "synchSourceId"
  ].map((o) => t.getAttribute(o));
  return [
    {
      title: s("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: s("save"),
        action: ru(t)
      },
      content: [
        ...nu({
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
function Wr(t) {
  const e = t.getAttribute("name"), i = t.closest("IED")?.getAttribute("name"), n = t.closest("AccessPoint")?.getAttribute("name"), r = t.closest("LDevice")?.getAttribute("inst");
  return t.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${i}"][apName="${n}"] > SMV[ldInst="${r}"][cbName="${e}"]`
  ) ?? null;
}
function ou(t) {
  if (!t.parentElement) return null;
  const e = t.parentElement.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), i = Wr(t), n = Array.from(
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
    title: s("controlblock.action.remove", {
      type: t.tagName,
      name: a,
      iedName: o
    }),
    actions: r
  };
}
function lu(t) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${s("scl.name")}"
      required
      validationMessage="${s("textfield.required")}"
      pattern="${ze.asciName}"
      maxLength="${qi.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      pattern="${ze.normalizedString}"
      helper="${s("scl.desc")}"
    ></wizard-textfield>`,
    t.multicast === "true" ? u`` : u`<wizard-checkbox
          label="multicast"
          .maybeValue=${t.multicast}
          helper="${s("scl.multicast")}"
          disabled
        ></wizard-checkbox>`,
    u`<wizard-textfield
      label="smvID"
      .maybeValue=${t.smvID}
      helper="${s("scl.id")}"
      required
      validationMessage="${s("textfield.nonempty")}"
    ></wizard-textfield>`,
    u`<wizard-select
      label="smpMod"
      .maybeValue=${t.smpMod}
      nullable
      required
      helper="${s("scl.smpMod")}"
      >${mc.map(
      (e) => u`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`,
    u`<wizard-textfield
      label="smpRate"
      .maybeValue=${t.smpRate}
      helper="${s("scl.smpRate")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="nofASDU"
      .maybeValue=${t.nofASDU}
      helper="${s("scl.nofASDU")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    u`<wizard-select
      label="securityEnabled"
      .maybeValue=${t.securityEnabled}
      nullable
      required
      helper="${s("scl.securityEnable")}"
      >${Mr.map(
      (e) => u`<mwc-list-item value="${e}">${e}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function du(t) {
  return (e) => {
    const i = ou(t);
    i && e.dispatchEvent(Bi(i)), e.dispatchEvent(Oe());
  };
}
function su(t) {
  return (e) => {
    e.dispatchEvent(nt(() => Hr(t)));
  };
}
function cu(t) {
  return (e) => {
    e.dispatchEvent(nt(() => au(t)));
  };
}
function uu(t) {
  return (e) => {
    e.dispatchEvent(nt(() => iu(t)));
  };
}
function mu(t) {
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
      if (o === "multicast" && !e.find((d) => d.label === o)) {
        i.multicast = "true";
        return;
      }
      i[o] = x(e.find((d) => d.label === o));
    });
    let r = null;
    if (n.some((o) => i[o] !== t.getAttribute(o))) {
      const o = F(t, i);
      r = {
        old: { element: t },
        new: { element: o }
      };
    }
    const a = [];
    return r && a.push(r), a;
  };
}
function pu(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("multicast"), r = t.getAttribute("smvID"), a = t.getAttribute("smpMod"), o = t.getAttribute("smpRate"), l = t.getAttribute("nofASDU"), d = t.getAttribute("securityEnabled"), c = Wr(t), h = t.querySelector("SmvOpts"), f = t.parentElement?.querySelector(
    `DataSet[name="${t.getAttribute("datSet")}"]`
  ), g = [];
  return g.push({
    icon: "delete",
    label: s("remove"),
    action: du(t)
  }), f && g.push({
    icon: "edit",
    label: s("scl.DataSet"),
    action: su(f)
  }), h && g.push({
    icon: "edit",
    label: s("scl.SmvOpts"),
    action: cu(h)
  }), c && g.push({
    icon: "edit",
    label: s("scl.Communication"),
    action: uu(c)
  }), [
    {
      title: s("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: s("save"),
        action: mu(t)
      },
      menuActions: g,
      content: [
        ...lu({
          name: e,
          desc: i,
          multicast: n,
          smvID: r,
          smpMod: a,
          smpRate: o,
          nofASDU: l,
          securityEnabled: d
        })
      ]
    }
  ];
}
function jr(t) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      .reservedValues=${t.reservedNames}
      helper="${s("scl.name")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${s("scl.desc")}"
    ></wizard-textfield>`,
    u`<wizard-select
      label="phase"
      fixedMenuPosition
      .maybeValue=${t.phase}
      nullable
      helper="${s("scl.phase")}"
    >
      ${["A", "B", "C", "N", "all", "none", "AB", "BC", "CA"].map(
      (e) => u`<mwc-list-item value="${e}">
            ${e.charAt(0).toUpperCase() + e.slice(1)}
          </mwc-list-item>`
    )}
    </wizard-select> `,
    u`<wizard-checkbox
      label="virtual"
      .maybeValue=${t.virtual}
      nullable
      helper="${s("scl.virtual")}"
    ></wizard-checkbox>`
  ];
}
function hu(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "phase", "virtual"];
    if (n.forEach((r) => {
      i[r] = x(e.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = F(t, i);
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
function fu(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("phase"), r = t.getAttribute("virtual"), a = ee(
    t.parentElement,
    "SubEquipment"
  ).filter((o) => o !== t).map((o) => o.getAttribute("name"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: hu(t)
      },
      content: [
        ...jr({
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
function bu(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "phase", "virtual"].forEach((a) => {
      i[a] = x(e.find((o) => o.label === a));
    });
    const r = D(
      t.ownerDocument,
      "SubEquipment",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function gu(t) {
  const e = "", a = Array.from(t.querySelectorAll("SubEquipment")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: s("wizard.title.add", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: bu(t)
      },
      content: [
        ...jr({
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
function xu(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = t.getAttribute("virtual"), a = ee(
    t.parentElement,
    "GeneralEquipment"
  ).filter((o) => o !== t).map((o) => o.getAttribute("name"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: yu(t)
      },
      content: [
        ...Kr({
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
function yu(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = x(e.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = F(t, i);
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
function Kr(t) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${s("scl.name")}"
      required
      validationMessage="${s("textfield.required")}"
      .reservedValues=${t.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${s("scl.desc")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      helper="${s("scl.type")}"
      minLength="${3}"
      pattern="AXN|BAT|MOT|FAN|FIL|PMP|TNK|VLV|E[A-Z]*"
      required
    ></wizard-textfield>`,
    u`<wizard-checkbox
      label="virtual"
      .maybeValue=${t.virtual}
      helper="${s("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function vu(t) {
  const e = "", a = Array.from(
    t.querySelectorAll("GeneralEquipment")
  ).map((o) => o.getAttribute("name"));
  return [
    {
      title: s("wizard.title.add", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: _u(t)
      },
      content: [
        ...Kr({
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
function _u(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = x(e.find((o) => o.label === a));
    });
    const r = D(
      t.ownerDocument,
      "GeneralEquipment",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function wu(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = x(
        e.find((o) => o.label === a)
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
function Au(t) {
  const e = "", a = Array.from(
    t.querySelectorAll("TransformerWinding")
  ).map((o) => o.getAttribute("name"));
  return [
    {
      title: s("wizard.title.add", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: wu(t)
      },
      content: [
        ...Xr({
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
function Su(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = x(
        e.find((a) => a.label === r)
      );
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = F(t, i);
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
function Xr(t) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${s("scl.name")}"
      required
      validationMessage="${s("textfield.required")}"
      .reservedValues=${t.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${s("scl.desc")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      disabled
      helper="${s("scl.type")}"
    ></wizard-textfield>`,
    u`<wizard-checkbox
      label="virtual"
      .maybeValue=${t.virtual}
      helper="${s("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function Eu(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = t.getAttribute("virtual"), a = ee(
    t.parentElement,
    "TransformerWinding"
  ).filter((o) => o !== t).map((o) => o.getAttribute("name"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Su(t)
      },
      content: [
        ...Xr({
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
function Iu(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type", "virtual"].forEach((a) => {
      i[a] = x(e.find((o) => o.label === a));
    });
    const r = D(
      t.ownerDocument,
      "TapChanger",
      i
    );
    return [{ new: { parent: t, element: r } }];
  };
}
function Cu(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type", "virtual"];
    if (n.forEach((r) => {
      i[r] = x(e.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = F(t, i);
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
function Yr(t) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${s("scl.name")}"
      required
      validationMessage="${s("textfield.required")}"
      .reservedValues=${t.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${s("scl.desc")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      disabled
      helper="${s("scl.type")}"
    ></wizard-textfield>`,
    u`<wizard-checkbox
      label="virtual"
      .maybeValue=${t.virtual}
      helper="${s("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function ku(t) {
  const e = "", n = "LTC", a = Array.from(t.querySelectorAll("TapChanger")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: s("wizard.title.add", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Iu(t)
      },
      content: [
        ...Yr({
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
function Tu(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = t.getAttribute("virtual"), a = ee(
    t.parentElement,
    "TapChanger"
  ).filter((o) => o !== t).map((o) => o.getAttribute("name"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Cu(t)
      },
      content: [
        ...Yr({
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
function Zr(t, e, i, n, r) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${t}
      helper="${s("line.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${s("line.wizard.descHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="type"
      .maybeValue=${i}
      nullable
      helper="${s("line.wizard.typeHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="nomFreq"
      .maybeValue=${n}
      nullable
      helper="${s("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      validationMessage="${s("textfield.nonempty")}"
      pattern="${_t.unsigned}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="numPhases"
      .maybeValue=${r}
      nullable
      helper="${s("voltagelevel.wizard.numPhaseHelper")}"
      suffix="#"
      validationMessage="${s("textfield.nonempty")}"
      type="number"
      min="1"
      max="255"
    ></wizard-textfield>`
  ];
}
function Nu(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type", "nomFreq", "numPhases"].forEach((a) => {
      i[a] = x(e.find((o) => o.label === a));
    });
    const r = D(t.ownerDocument, "Line", i);
    return [{ new: { parent: t, element: r } }];
  };
}
function Du(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type", "nomFreq", "numPhases"];
    if (n.forEach((r) => {
      i[r] = x(e.find((a) => a.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = F(t, i);
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
function Lu(t) {
  return [
    {
      title: s("wizard.title.add", { tagName: "Line" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Nu(t)
      },
      content: [...Zr("", "", "", "", "")]
    }
  ];
}
function zu(t) {
  return [
    {
      title: s("line.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: s("save"),
        action: Du(t)
      },
      content: Zr(
        t.getAttribute("name") ?? "",
        t.getAttribute("desc"),
        t.getAttribute("type"),
        t.getAttribute("nomFreq"),
        t.getAttribute("numPhases")
      )
    }
  ];
}
function Ru(t) {
  return (e) => {
    const i = {};
    ["name", "desc", "type"].forEach((a) => {
      i[a] = x(e.find((o) => o.label === a));
    });
    const r = D(t.ownerDocument, "Process", i);
    return [{ new: { parent: t, element: r } }];
  };
}
function $u(t) {
  return (e) => {
    const i = {}, n = ["name", "desc", "type"];
    if (n.forEach((r) => {
      i[r] = x(e.find((a) => a.label === r));
    }), n.some(
      (r) => i[r] !== t.getAttribute(r)
    )) {
      const r = F(t, i);
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
function Qr(t) {
  return [
    u`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${s("scl.name")}"
      required
      validationMessage="${s("textfield.required")}"
      .reservedValues=${t.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${s("scl.desc")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      nullable
      helper="${s("scl.type")}"
    ></wizard-textfield>`
  ];
}
function Ou(t) {
  const e = "", i = "", n = "", r = ee(
    t.parentElement,
    "Process"
  ).filter((a) => a !== t).map((a) => a.getAttribute("name"));
  return [
    {
      title: s("wizard.title.add", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Ru(t)
      },
      content: [
        ...Qr({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Pu(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = ee(
    t.parentElement,
    "Process"
  ).filter((a) => a !== t).map((a) => a.getAttribute("name"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: $u(t)
      },
      content: [
        ...Qr({
          name: e,
          desc: i,
          type: n,
          reservedNames: r
        })
      ]
    }
  ];
}
function Fu(t, e, i, n, r) {
  return [
    u`<wizard-textfield
      label="lnType"
      .maybeValue=${t}
      readonly
      required
      helper="${s("ln.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${s("ln.wizard.descHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="prefix"
      nullable
      readonly
      .maybeValue=${i}
      helper="${s("ln.wizard.prefixHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${n}
      helper="${s("ln.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="inst"
      .maybeValue=${r}
      readonly
      helper="${s("ln.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function Vu(t) {
  return (e) => {
    const i = {}, n = ["lnType", "desc", "prefix", "lnClass", "inst"];
    if (n.forEach((r) => {
      i[r] = x(e.find((a) => a.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = F(t, i);
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
function Mu(t) {
  return [
    {
      title: s("ln.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: s("save"),
        action: Vu(t)
      },
      content: Fu(
        t.getAttribute("lnType"),
        t.getAttribute("desc"),
        t.getAttribute("prefix"),
        t.getAttribute("lnClass"),
        t.getAttribute("inst")
      )
    }
  ];
}
function Bu(t, e, i, n) {
  return [
    u`<wizard-textfield
      label="lnType"
      .maybeValue=${t}
      readonly
      required
      helper="${s("ln0.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="desc"
      .maybeValue=${e}
      nullable
      helper="${s("ln0.wizard.descHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${i}
      helper="${s("ln0.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    u`<wizard-textfield
      label="inst"
      .maybeValue=${n}
      readonly
      helper="${s("ln0.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function Hu(t) {
  return (e) => {
    const i = {}, n = ["lnType", "desc", "lnClass", "inst"];
    if (n.forEach((r) => {
      i[r] = x(e.find((a) => a.label === r));
    }), n.some((r) => i[r] !== t.getAttribute(r))) {
      const r = F(t, i);
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
function qu(t) {
  return [
    {
      title: s("ln0.wizard.title.edit"),
      element: t,
      primary: {
        icon: "edit",
        label: s("save"),
        action: Hu(t)
      },
      content: Bu(
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
const dm = {
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
    edit: vd,
    create: yd
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
    edit: Nd,
    create: Td
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
    edit: Ld,
    create: p
  },
  DA: {
    edit: xc,
    create: p
  },
  DAI: {
    edit: Ac,
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
    edit: Kc,
    create: Yc
  },
  EqSubFunction: {
    edit: Gc,
    create: Wc
  },
  ExtRef: {
    edit: p,
    create: p
  },
  FCDA: {
    edit: p,
    create: Cr
  },
  FileHandling: {
    edit: p,
    create: p
  },
  Function: {
    edit: Mc,
    create: Hc
  },
  GeneralEquipment: {
    edit: xu,
    create: vu
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
    edit: Fc,
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
    edit: Js,
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
    edit: rc,
    create: p
  },
  LN: {
    edit: Mu,
    create: p
  },
  LN0: {
    edit: qu,
    create: p
  },
  LNode: {
    edit: ds,
    create: as
  },
  LNodeType: {
    edit: p,
    create: p
  },
  Line: {
    edit: zu,
    create: Lu
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
    edit: us,
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
    edit: Os,
    create: $s
  },
  Private: {
    edit: p,
    create: p
  },
  Process: {
    edit: Pu,
    create: Ou
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
    edit: pu,
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
    edit: fu,
    create: gu
  },
  SubFunction: {
    edit: Qc,
    create: eu
  },
  SubNetwork: {
    edit: Ms,
    create: p
  },
  Subject: {
    edit: p,
    create: p
  },
  Substation: {
    edit: Is,
    create: Es
  },
  SupSubscription: {
    edit: p,
    create: p
  },
  TapChanger: {
    edit: Tu,
    create: ku
  },
  Terminal: {
    edit: ks,
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
    edit: Eu,
    create: Au
  },
  TrgOps: {
    edit: lc,
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
    edit: zs,
    create: Ns
  }
};
export {
  p as emptyWizard,
  dm as wizards
};
